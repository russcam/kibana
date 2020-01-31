/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

// based on work licensed under Apache 2.0: https://github.com/Strumenta/calc-monaco-editor/blob/master/LICENSE
/* eslint-disable max-classes-per-file */

import { CommonTokenStream, InputStream, Token, error, Parser } from 'antlr4/index';
import { DefaultErrorStrategy } from 'antlr4/error/ErrorStrategy.js'
import { PainlessLexer } from './PainlessLexer';
import { PainlessParser } from './PainlessParser';

class ConsoleErrorListener extends error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    console.log(`ERROR ${msg}`);
  }
}

export class Error {
  startLine: number;
  endLine: number;
  startCol: number;
  endCol: number;
  message: string;

  constructor(
    startLine: number,
    endLine: number,
    startCol: number,
    endCol: number,
    message: string
  ) {
    this.startLine = startLine;
    this.endLine = endLine;
    this.startCol = startCol;
    this.endCol = endCol;
    this.message = message;
  }
}

class CollectorErrorListener extends error.ErrorListener {
  private errors: Error[] = [];

  constructor(errors: Error[]) {
    super();
    this.errors = errors;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    let endColumn = column + 1;
    if (offendingSymbol._text !== null) {
      endColumn = column + offendingSymbol._text.length;
    }
    this.errors.push(new Error(line, line, column, endColumn, msg));
  }
}

export function createLexer(input: string) {
  const chars = new InputStream(input);
  const lexer = new PainlessLexer(chars);
  lexer.strictMode = false;
  return lexer;
}

export function getTokens(input: string) : Token[] {
  return createLexer(input).getAllTokens()
}

function createParserFromLexer(lexer: PainlessLexer) {
  const tokens = new CommonTokenStream(lexer);
  return new PainlessParser(tokens);
}

export function parseTreeStr(input: string) {
  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ConsoleErrorListener());
  const parser = createParserFromLexer(lexer);
  parser.removeErrorListeners();
  parser.addErrorListener(new ConsoleErrorListener());
  const tree = parser.source();
  return tree.toStringTree(parser.ruleNames);
}

class PainlessErrorStrategy extends DefaultErrorStrategy {
  reportUnwantedToken(recognizer: Parser) {
    return super.reportUnwantedToken(recognizer);
  }

  singleTokenDeletion(recognizer: Parser) {
    const nextTokenType = recognizer.getTokenStream().LA(2);

    // TODO: Would need to send newline tokens to stream
    // if (recognizer.getTokenStream().LA(1) === PainlessLexer.WS) {
    //   return null;
    // }
    const expecting = this.getExpectedTokens(recognizer);
    if (expecting.contains(nextTokenType)) {
      this.reportUnwantedToken(recognizer);
      recognizer.consume(); // simply delete extra token
      // we want to return the token we're actually matching
      const matchedSymbol = recognizer.getCurrentToken();
      this.reportMatch(recognizer); // we know current token is correct
      return matchedSymbol;
    } else {
      return null;
    }
  }

  getExpectedTokens = function(recognizer) {
    return recognizer.getExpectedTokens();
  };

  reportMatch = function(recognizer) {
    this.endErrorCondition(recognizer);
  };
}

export function validate(input: string): Error[] {
  const errors: Error[] = [];
  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ConsoleErrorListener());

  const parser = createParserFromLexer(lexer);
  parser.removeErrorListeners();
  parser.addErrorListener(new CollectorErrorListener(errors));
  parser._errHandler = new PainlessErrorStrategy();

  // parse the source
  parser.source();

  return errors;
}
