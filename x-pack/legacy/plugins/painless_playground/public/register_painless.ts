/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { PainlessTokensProvider } from './../antlr/PainlessTokensProvider';
import { validate } from './../antlr/ParserFacade';

export const LANGUAGE_ID = 'painless';

// TODO: derive a light and dark theme from EUI light and dark editor themes, inherit their rules,
// defining additional ones not covered. The token names come from
// PainlessLexer.g4, lowercased and suffixed with .painless for more specificity
class PainlessTheme implements monaco.editor.IStandaloneThemeData {
  base: monaco.editor.BuiltinTheme;
  inherit: boolean;
  rules: monaco.editor.ITokenThemeRule[];
  encodedTokensColors?: string[] | undefined;
  colors: monaco.editor.IColors;

  constructor() {
    this.base = 'vs';
    this.inherit = true;
    this.rules = [
      { token: 'integer.painless', foreground: 'E12884' },
      { token: 'decimal.painless', foreground: 'E12884' },
      { token: 'return.painless', foreground: '006bb4' },
      { token: 'instanceof.painless', foreground: '006bb4' },
      { token: 'new.painless', foreground: '006bb4' },
      { token: 'for.painless', foreground: '006bb4' },
      { token: 'type.painless', foreground: '54b399' },
      { token: 'regex.painless', foreground: 'E12884' },
      { token: 'true.painless', foreground: 'E12884' },
      { token: 'false.painless', foreground: 'E12884' },
      { token: 'null.painless', foreground: 'E12884' },
      { token: 'string.painless', foreground: 'bd271e' },
      { token: 'comment.painless', foreground: '98a2b3' },
    ];
    this.colors = {};
  }
}

export function registerPainless() {
  monaco.languages.register({ id: LANGUAGE_ID });
  monaco.languages.setTokensProvider(LANGUAGE_ID, new PainlessTokensProvider());
  monaco.editor.defineTheme(LANGUAGE_ID, new PainlessTheme());
}

export function highlightSyntaxErrors(input: string) {
  const syntaxErrors = validate(input);
  const monacoErrors: monaco.editor.IMarkerData[] = [];
  for (const e of syntaxErrors) {
    monacoErrors.push({
      startLineNumber: e.startLine,
      startColumn: e.startCol,
      endLineNumber: e.endLine,
      endColumn: e.endCol,
      message: e.message,
      severity: monaco.MarkerSeverity.Error,
    });
  }
  const model = monaco.editor.getModels()[0];
  monaco.editor.setModelMarkers(model, 'owner', monacoErrors);
}
