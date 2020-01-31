/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

// based on work licensed under Apache 2.0: https://github.com/Strumenta/calc-monaco-editor/blob/master/LICENSE
/* eslint-disable max-classes-per-file */
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { error } from 'antlr4/index';
import { PainlessLexer } from './PainlessLexer'
import { createLexer } from './ParserFacade';

export class PainlessState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new PainlessState();
  }
  equals(other: monaco.languages.IState): boolean {
    return true;
  }
}

export class PainlessTokensProvider implements monaco.languages.TokensProvider {
  getInitialState(): monaco.languages.IState {
    return new PainlessState();
  }
  tokenize(line: string, state: monaco.languages.IState): monaco.languages.ILineTokens {
    // So far we ignore the state, which is not great for performance reasons
    return tokensForLine(line);
  }
}
class PainlessToken implements monaco.languages.IToken {
  scopes: string;
  startIndex: number;
  constructor(ruleName: string, startIndex: number) {
    this.scopes = ruleName.toLowerCase() + '.painless';
    this.startIndex = startIndex;
  }
}

class PainlessLineTokens implements monaco.languages.ILineTokens {
  endState: monaco.languages.IState;
  tokens: monaco.languages.IToken[];
  constructor(tokens: monaco.languages.IToken[]) {
    this.endState = new PainlessState();
    this.tokens = tokens;
  }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
  const errorStartingPoints: number[] = [];
  class ErrorCollectorListener extends error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      errorStartingPoints.push(column);
    }
  }

  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  const errorListener = new ErrorCollectorListener();
  lexer.addErrorListener(errorListener);
  let done = false;
  const painlessTokens: monaco.languages.IToken[] = [];

  do {
    const token = lexer.nextToken();
    if (token == null) {
      done = true;
    } else {
      if (token.type === PainlessLexer.EOF) {
        done = true;
      } else {
        const tokenTypeName = lexer.symbolicNames[token.type];
        const painlessToken = new PainlessToken(tokenTypeName, token.column);
        painlessTokens.push(painlessToken);
      }
    }
  } while (!done);

  // Add all errors
  for (const e of errorStartingPoints) {
    painlessTokens.push(new PainlessToken('error.painless', e));
  }

  painlessTokens.sort((a, b) => (a.startIndex > b.startIndex ? 1 : -1));
  return new PainlessLineTokens(painlessTokens);
}
