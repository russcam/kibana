/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

// js implementation of Java implementation:
// https://github.com/elastic/elasticsearch/blob/b938960602a559cf9e1133779cc9d7e2b0ec401a/modules/lang-painless/src/main/java/org/elasticsearch/painless/antlr/EnhancedPainlessLexer.java#L82-L101
const SlashStrategy = {
  slashIsRegex: (localctx, lexer) => {
    const tokenIndex = lexer._tokenFactorySourcePair[1]._index;
    if (tokenIndex === 0) {
      return true;
    }
    const lastToken = lexer._tokenFactorySourcePair[1].data[tokenIndex - 1];
    const PainlessLexer = lexer.constructor;
    switch (lastToken) {
      case PainlessLexer.RBRACE:
      case PainlessLexer.RP:
      case PainlessLexer.OCTAL:
      case PainlessLexer.HEX:
      case PainlessLexer.INTEGER:
      case PainlessLexer.DECIMAL:
      case PainlessLexer.ID:
      case PainlessLexer.DOTINTEGER:
      case PainlessLexer.DOTID:
        return false;
      default:
        return true;
    }
  },
};

module.exports = SlashStrategy;
