/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

// based on work licensed under Apache 2.0: https://github.com/Strumenta/calc-monaco-editor/blob/master/LICENSE
/* eslint-disable max-classes-per-file */

import {
  ANTLRInputStream,
  CommonTokenStream,
  Token,
  Parser,
  ANTLRErrorListener,
  DefaultErrorStrategy,
  Recognizer,
  RecognitionException,
} from 'antlr4ts';
import { PainlessLexer } from './PainlessLexer';
import { PainlessParser } from './PainlessParser';

class ConsoleErrorListener implements ANTLRErrorListener<Token> {
  syntaxError(
    _recognizer: Recognizer<Token, any>,
    _offendingSymbol: Token | undefined,
    _line: number,
    _charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined
  ) {
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

class CollectorErrorListener implements ANTLRErrorListener<Token> {
  private errors: Error[] = [];

  constructor(errors: Error[]) {
    this.errors = errors;
  }

  syntaxError(
    _recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined
  ) {
    let endColumn = charPositionInLine + 1;
    if (offendingSymbol?.text !== null) {
      endColumn = charPositionInLine + offendingSymbol.text.length;
    }
    this.errors.push(new Error(line, line, charPositionInLine, endColumn, msg));
  }
}

export function createLexer(input: string) {
  const inputStream = new ANTLRInputStream(input);
  const lexer = new PainlessLexer(inputStream);
  return lexer;
}

export function getTokens(input: string) : Token[] {
  return createLexer(input).getAllTokens();
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
    const nextTokenType = recognizer.inputStream.LA(2);
    // TODO: Would need to send newline tokens to stream
    // if (recognizer.getTokenStream().LA(1) === PainlessLexer.WS) {
    //   return null;
    // }
    const expecting = this.getExpectedTokens(recognizer);
    if (expecting.contains(nextTokenType)) {
      this.reportUnwantedToken(recognizer);
      recognizer.consume(); // simply delete extra token
      // we want to return the token we're actually matching
      const matchedSymbol = recognizer.currentToken;
      this.reportMatch(recognizer); // we know current token is correct
      return matchedSymbol;
    } else {
      return undefined;
    }
  }

  getExpectedTokens(recognizer: Parser) {
    return recognizer.getExpectedTokens();
  }

  reportMatch(recognizer: Parser) {
    this.endErrorCondition(recognizer);
  }
}

export function validate(input: string): Error[] {
  const errors: Error[] = [];
  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ConsoleErrorListener());

  const parser = createParserFromLexer(lexer);
  parser.removeErrorListeners();
  parser.addErrorListener(new CollectorErrorListener(errors));
  parser.errorHandler = new PainlessErrorStrategy();

  // parse the source
  parser.source();

  return errors;
}
