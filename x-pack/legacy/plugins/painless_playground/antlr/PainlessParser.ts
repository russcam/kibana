// Generated from ../elasticsearch/modules/lang-painless/src/main/antlr/PainlessParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class PainlessParser extends Parser {
	public static readonly WS = 1;
	public static readonly COMMENT = 2;
	public static readonly LBRACK = 3;
	public static readonly RBRACK = 4;
	public static readonly LBRACE = 5;
	public static readonly RBRACE = 6;
	public static readonly LP = 7;
	public static readonly RP = 8;
	public static readonly DOT = 9;
	public static readonly NSDOT = 10;
	public static readonly COMMA = 11;
	public static readonly SEMICOLON = 12;
	public static readonly IF = 13;
	public static readonly IN = 14;
	public static readonly ELSE = 15;
	public static readonly WHILE = 16;
	public static readonly DO = 17;
	public static readonly FOR = 18;
	public static readonly CONTINUE = 19;
	public static readonly BREAK = 20;
	public static readonly RETURN = 21;
	public static readonly NEW = 22;
	public static readonly TRY = 23;
	public static readonly CATCH = 24;
	public static readonly THROW = 25;
	public static readonly THIS = 26;
	public static readonly INSTANCEOF = 27;
	public static readonly BOOLNOT = 28;
	public static readonly BWNOT = 29;
	public static readonly MUL = 30;
	public static readonly DIV = 31;
	public static readonly REM = 32;
	public static readonly ADD = 33;
	public static readonly SUB = 34;
	public static readonly LSH = 35;
	public static readonly RSH = 36;
	public static readonly USH = 37;
	public static readonly LT = 38;
	public static readonly LTE = 39;
	public static readonly GT = 40;
	public static readonly GTE = 41;
	public static readonly EQ = 42;
	public static readonly EQR = 43;
	public static readonly NE = 44;
	public static readonly NER = 45;
	public static readonly BWAND = 46;
	public static readonly XOR = 47;
	public static readonly BWOR = 48;
	public static readonly BOOLAND = 49;
	public static readonly BOOLOR = 50;
	public static readonly COND = 51;
	public static readonly COLON = 52;
	public static readonly ELVIS = 53;
	public static readonly REF = 54;
	public static readonly ARROW = 55;
	public static readonly FIND = 56;
	public static readonly MATCH = 57;
	public static readonly INCR = 58;
	public static readonly DECR = 59;
	public static readonly ASSIGN = 60;
	public static readonly AADD = 61;
	public static readonly ASUB = 62;
	public static readonly AMUL = 63;
	public static readonly ADIV = 64;
	public static readonly AREM = 65;
	public static readonly AAND = 66;
	public static readonly AXOR = 67;
	public static readonly AOR = 68;
	public static readonly ALSH = 69;
	public static readonly ARSH = 70;
	public static readonly AUSH = 71;
	public static readonly OCTAL = 72;
	public static readonly HEX = 73;
	public static readonly INTEGER = 74;
	public static readonly DECIMAL = 75;
	public static readonly STRING = 76;
	public static readonly REGEX = 77;
	public static readonly TRUE = 78;
	public static readonly FALSE = 79;
	public static readonly NULL = 80;
	public static readonly TYPE = 81;
	public static readonly ID = 82;
	public static readonly DOTINTEGER = 83;
	public static readonly DOTID = 84;
	public static readonly RULE_source = 0;
	public static readonly RULE_fun = 1;
	public static readonly RULE_parameters = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_rstatement = 4;
	public static readonly RULE_dstatement = 5;
	public static readonly RULE_trailer = 6;
	public static readonly RULE_block = 7;
	public static readonly RULE_empty = 8;
	public static readonly RULE_initializer = 9;
	public static readonly RULE_afterthought = 10;
	public static readonly RULE_declaration = 11;
	public static readonly RULE_decltype = 12;
	public static readonly RULE_declvar = 13;
	public static readonly RULE_trap = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_unary = 16;
	public static readonly RULE_chain = 17;
	public static readonly RULE_primary = 18;
	public static readonly RULE_postfix = 19;
	public static readonly RULE_postdot = 20;
	public static readonly RULE_callinvoke = 21;
	public static readonly RULE_fieldaccess = 22;
	public static readonly RULE_braceaccess = 23;
	public static readonly RULE_arrayinitializer = 24;
	public static readonly RULE_listinitializer = 25;
	public static readonly RULE_mapinitializer = 26;
	public static readonly RULE_maptoken = 27;
	public static readonly RULE_arguments = 28;
	public static readonly RULE_argument = 29;
	public static readonly RULE_lambda = 30;
	public static readonly RULE_lamtype = 31;
	public static readonly RULE_funcref = 32;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "fun", "parameters", "statement", "rstatement", "dstatement", 
		"trailer", "block", "empty", "initializer", "afterthought", "declaration", 
		"decltype", "declvar", "trap", "expression", "unary", "chain", "primary", 
		"postfix", "postdot", "callinvoke", "fieldaccess", "braceaccess", "arrayinitializer", 
		"listinitializer", "mapinitializer", "maptoken", "arguments", "argument", 
		"lambda", "lamtype", "funcref",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'{'", "'}'", "'['", "']'", "'('", "')'", 
		"'.'", "'?.'", "','", "';'", "'if'", "'in'", "'else'", "'while'", "'do'", 
		"'for'", "'continue'", "'break'", "'return'", "'new'", "'try'", "'catch'", 
		"'throw'", "'this'", "'instanceof'", "'!'", "'~'", "'*'", "'/'", "'%'", 
		"'+'", "'-'", "'<<'", "'>>'", "'>>>'", "'<'", "'<='", "'>'", "'>='", "'=='", 
		"'==='", "'!='", "'!=='", "'&'", "'^'", "'|'", "'&&'", "'||'", "'?'", 
		"':'", "'?:'", "'::'", "'->'", "'=~'", "'==~'", "'++'", "'--'", "'='", 
		"'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'^='", "'|='", "'<<='", 
		"'>>='", "'>>>='", undefined, undefined, undefined, undefined, undefined, 
		undefined, "'true'", "'false'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "COMMENT", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "LP", 
		"RP", "DOT", "NSDOT", "COMMA", "SEMICOLON", "IF", "IN", "ELSE", "WHILE", 
		"DO", "FOR", "CONTINUE", "BREAK", "RETURN", "NEW", "TRY", "CATCH", "THROW", 
		"THIS", "INSTANCEOF", "BOOLNOT", "BWNOT", "MUL", "DIV", "REM", "ADD", 
		"SUB", "LSH", "RSH", "USH", "LT", "LTE", "GT", "GTE", "EQ", "EQR", "NE", 
		"NER", "BWAND", "XOR", "BWOR", "BOOLAND", "BOOLOR", "COND", "COLON", "ELVIS", 
		"REF", "ARROW", "FIND", "MATCH", "INCR", "DECR", "ASSIGN", "AADD", "ASUB", 
		"AMUL", "ADIV", "AREM", "AAND", "AXOR", "AOR", "ALSH", "ARSH", "AUSH", 
		"OCTAL", "HEX", "INTEGER", "DECIMAL", "STRING", "REGEX", "TRUE", "FALSE", 
		"NULL", "TYPE", "ID", "DOTINTEGER", "DOTID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PainlessParser._LITERAL_NAMES, PainlessParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PainlessParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PainlessParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return PainlessParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PainlessParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PainlessParser._ATN, this);
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PainlessParser.RULE_source);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 66;
					this.fun();
					}
					}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.IF - 5)) | (1 << (PainlessParser.WHILE - 5)) | (1 << (PainlessParser.DO - 5)) | (1 << (PainlessParser.FOR - 5)) | (1 << (PainlessParser.CONTINUE - 5)) | (1 << (PainlessParser.BREAK - 5)) | (1 << (PainlessParser.RETURN - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.TRY - 5)) | (1 << (PainlessParser.THROW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.INCR - 58)) | (1 << (PainlessParser.DECR - 58)) | (1 << (PainlessParser.OCTAL - 58)) | (1 << (PainlessParser.HEX - 58)) | (1 << (PainlessParser.INTEGER - 58)) | (1 << (PainlessParser.DECIMAL - 58)) | (1 << (PainlessParser.STRING - 58)) | (1 << (PainlessParser.REGEX - 58)) | (1 << (PainlessParser.TRUE - 58)) | (1 << (PainlessParser.FALSE - 58)) | (1 << (PainlessParser.NULL - 58)) | (1 << (PainlessParser.TYPE - 58)) | (1 << (PainlessParser.ID - 58)))) !== 0)) {
				{
				{
				this.state = 72;
				this.statement();
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
			this.match(PainlessParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fun(): FunContext {
		let _localctx: FunContext = new FunContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PainlessParser.RULE_fun);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.decltype();
			this.state = 81;
			this.match(PainlessParser.ID);
			this.state = 82;
			this.parameters();
			this.state = 83;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PainlessParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(PainlessParser.LP);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PainlessParser.TYPE) {
				{
				this.state = 86;
				this.decltype();
				this.state = 87;
				this.match(PainlessParser.ID);
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PainlessParser.COMMA) {
					{
					{
					this.state = 88;
					this.match(PainlessParser.COMMA);
					this.state = 89;
					this.decltype();
					this.state = 90;
					this.match(PainlessParser.ID);
					}
					}
					this.state = 96;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 99;
			this.match(PainlessParser.RP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PainlessParser.RULE_statement);
		let _la: number;
		try {
			this.state = 105;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PainlessParser.IF:
			case PainlessParser.WHILE:
			case PainlessParser.FOR:
			case PainlessParser.TRY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 101;
				this.rstatement();
				}
				break;
			case PainlessParser.LBRACE:
			case PainlessParser.LP:
			case PainlessParser.DO:
			case PainlessParser.CONTINUE:
			case PainlessParser.BREAK:
			case PainlessParser.RETURN:
			case PainlessParser.NEW:
			case PainlessParser.THROW:
			case PainlessParser.BOOLNOT:
			case PainlessParser.BWNOT:
			case PainlessParser.ADD:
			case PainlessParser.SUB:
			case PainlessParser.INCR:
			case PainlessParser.DECR:
			case PainlessParser.OCTAL:
			case PainlessParser.HEX:
			case PainlessParser.INTEGER:
			case PainlessParser.DECIMAL:
			case PainlessParser.STRING:
			case PainlessParser.REGEX:
			case PainlessParser.TRUE:
			case PainlessParser.FALSE:
			case PainlessParser.NULL:
			case PainlessParser.TYPE:
			case PainlessParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.dstatement();
				this.state = 103;
				_la = this._input.LA(1);
				if (!(_la === PainlessParser.EOF || _la === PainlessParser.SEMICOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rstatement(): RstatementContext {
		let _localctx: RstatementContext = new RstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PainlessParser.RULE_rstatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new IfContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.match(PainlessParser.IF);
				this.state = 108;
				this.match(PainlessParser.LP);
				this.state = 109;
				this.expression(0);
				this.state = 110;
				this.match(PainlessParser.RP);
				this.state = 111;
				this.trailer();
				this.state = 115;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 112;
					this.match(PainlessParser.ELSE);
					this.state = 113;
					this.trailer();
					}
					break;

				case 2:
					{
					this.state = 114;
					if (!( _input.LA(1) != ELSE )) {
						throw new FailedPredicateException(this, " _input.LA(1) != ELSE ");
					}
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new WhileContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.match(PainlessParser.WHILE);
				this.state = 118;
				this.match(PainlessParser.LP);
				this.state = 119;
				this.expression(0);
				this.state = 120;
				this.match(PainlessParser.RP);
				this.state = 123;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PainlessParser.LBRACK:
				case PainlessParser.LBRACE:
				case PainlessParser.LP:
				case PainlessParser.IF:
				case PainlessParser.WHILE:
				case PainlessParser.DO:
				case PainlessParser.FOR:
				case PainlessParser.CONTINUE:
				case PainlessParser.BREAK:
				case PainlessParser.RETURN:
				case PainlessParser.NEW:
				case PainlessParser.TRY:
				case PainlessParser.THROW:
				case PainlessParser.BOOLNOT:
				case PainlessParser.BWNOT:
				case PainlessParser.ADD:
				case PainlessParser.SUB:
				case PainlessParser.INCR:
				case PainlessParser.DECR:
				case PainlessParser.OCTAL:
				case PainlessParser.HEX:
				case PainlessParser.INTEGER:
				case PainlessParser.DECIMAL:
				case PainlessParser.STRING:
				case PainlessParser.REGEX:
				case PainlessParser.TRUE:
				case PainlessParser.FALSE:
				case PainlessParser.NULL:
				case PainlessParser.TYPE:
				case PainlessParser.ID:
					{
					this.state = 121;
					this.trailer();
					}
					break;
				case PainlessParser.SEMICOLON:
					{
					this.state = 122;
					this.empty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				_localctx = new ForContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 125;
				this.match(PainlessParser.FOR);
				this.state = 126;
				this.match(PainlessParser.LP);
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.INCR - 58)) | (1 << (PainlessParser.DECR - 58)) | (1 << (PainlessParser.OCTAL - 58)) | (1 << (PainlessParser.HEX - 58)) | (1 << (PainlessParser.INTEGER - 58)) | (1 << (PainlessParser.DECIMAL - 58)) | (1 << (PainlessParser.STRING - 58)) | (1 << (PainlessParser.REGEX - 58)) | (1 << (PainlessParser.TRUE - 58)) | (1 << (PainlessParser.FALSE - 58)) | (1 << (PainlessParser.NULL - 58)) | (1 << (PainlessParser.TYPE - 58)) | (1 << (PainlessParser.ID - 58)))) !== 0)) {
					{
					this.state = 127;
					this.initializer();
					}
				}

				this.state = 130;
				this.match(PainlessParser.SEMICOLON);
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.INCR - 58)) | (1 << (PainlessParser.DECR - 58)) | (1 << (PainlessParser.OCTAL - 58)) | (1 << (PainlessParser.HEX - 58)) | (1 << (PainlessParser.INTEGER - 58)) | (1 << (PainlessParser.DECIMAL - 58)) | (1 << (PainlessParser.STRING - 58)) | (1 << (PainlessParser.REGEX - 58)) | (1 << (PainlessParser.TRUE - 58)) | (1 << (PainlessParser.FALSE - 58)) | (1 << (PainlessParser.NULL - 58)) | (1 << (PainlessParser.TYPE - 58)) | (1 << (PainlessParser.ID - 58)))) !== 0)) {
					{
					this.state = 131;
					this.expression(0);
					}
				}

				this.state = 134;
				this.match(PainlessParser.SEMICOLON);
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.INCR - 58)) | (1 << (PainlessParser.DECR - 58)) | (1 << (PainlessParser.OCTAL - 58)) | (1 << (PainlessParser.HEX - 58)) | (1 << (PainlessParser.INTEGER - 58)) | (1 << (PainlessParser.DECIMAL - 58)) | (1 << (PainlessParser.STRING - 58)) | (1 << (PainlessParser.REGEX - 58)) | (1 << (PainlessParser.TRUE - 58)) | (1 << (PainlessParser.FALSE - 58)) | (1 << (PainlessParser.NULL - 58)) | (1 << (PainlessParser.TYPE - 58)) | (1 << (PainlessParser.ID - 58)))) !== 0)) {
					{
					this.state = 135;
					this.afterthought();
					}
				}

				this.state = 138;
				this.match(PainlessParser.RP);
				this.state = 141;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PainlessParser.LBRACK:
				case PainlessParser.LBRACE:
				case PainlessParser.LP:
				case PainlessParser.IF:
				case PainlessParser.WHILE:
				case PainlessParser.DO:
				case PainlessParser.FOR:
				case PainlessParser.CONTINUE:
				case PainlessParser.BREAK:
				case PainlessParser.RETURN:
				case PainlessParser.NEW:
				case PainlessParser.TRY:
				case PainlessParser.THROW:
				case PainlessParser.BOOLNOT:
				case PainlessParser.BWNOT:
				case PainlessParser.ADD:
				case PainlessParser.SUB:
				case PainlessParser.INCR:
				case PainlessParser.DECR:
				case PainlessParser.OCTAL:
				case PainlessParser.HEX:
				case PainlessParser.INTEGER:
				case PainlessParser.DECIMAL:
				case PainlessParser.STRING:
				case PainlessParser.REGEX:
				case PainlessParser.TRUE:
				case PainlessParser.FALSE:
				case PainlessParser.NULL:
				case PainlessParser.TYPE:
				case PainlessParser.ID:
					{
					this.state = 139;
					this.trailer();
					}
					break;
				case PainlessParser.SEMICOLON:
					{
					this.state = 140;
					this.empty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 4:
				_localctx = new EachContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 143;
				this.match(PainlessParser.FOR);
				this.state = 144;
				this.match(PainlessParser.LP);
				this.state = 145;
				this.decltype();
				this.state = 146;
				this.match(PainlessParser.ID);
				this.state = 147;
				this.match(PainlessParser.COLON);
				this.state = 148;
				this.expression(0);
				this.state = 149;
				this.match(PainlessParser.RP);
				this.state = 150;
				this.trailer();
				}
				break;

			case 5:
				_localctx = new IneachContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 152;
				this.match(PainlessParser.FOR);
				this.state = 153;
				this.match(PainlessParser.LP);
				this.state = 154;
				this.match(PainlessParser.ID);
				this.state = 155;
				this.match(PainlessParser.IN);
				this.state = 156;
				this.expression(0);
				this.state = 157;
				this.match(PainlessParser.RP);
				this.state = 158;
				this.trailer();
				}
				break;

			case 6:
				_localctx = new TryContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 160;
				this.match(PainlessParser.TRY);
				this.state = 161;
				this.block();
				this.state = 163;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 162;
						this.trap();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 165;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dstatement(): DstatementContext {
		let _localctx: DstatementContext = new DstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PainlessParser.RULE_dstatement);
		let _la: number;
		try {
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new DoContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.match(PainlessParser.DO);
				this.state = 170;
				this.block();
				this.state = 171;
				this.match(PainlessParser.WHILE);
				this.state = 172;
				this.match(PainlessParser.LP);
				this.state = 173;
				this.expression(0);
				this.state = 174;
				this.match(PainlessParser.RP);
				}
				break;

			case 2:
				_localctx = new DeclContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.declaration();
				}
				break;

			case 3:
				_localctx = new ContinueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 177;
				this.match(PainlessParser.CONTINUE);
				}
				break;

			case 4:
				_localctx = new BreakContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 178;
				this.match(PainlessParser.BREAK);
				}
				break;

			case 5:
				_localctx = new ReturnContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 179;
				this.match(PainlessParser.RETURN);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.INCR - 58)) | (1 << (PainlessParser.DECR - 58)) | (1 << (PainlessParser.OCTAL - 58)) | (1 << (PainlessParser.HEX - 58)) | (1 << (PainlessParser.INTEGER - 58)) | (1 << (PainlessParser.DECIMAL - 58)) | (1 << (PainlessParser.STRING - 58)) | (1 << (PainlessParser.REGEX - 58)) | (1 << (PainlessParser.TRUE - 58)) | (1 << (PainlessParser.FALSE - 58)) | (1 << (PainlessParser.NULL - 58)) | (1 << (PainlessParser.TYPE - 58)) | (1 << (PainlessParser.ID - 58)))) !== 0)) {
					{
					this.state = 180;
					this.expression(0);
					}
				}

				}
				break;

			case 6:
				_localctx = new ThrowContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 183;
				this.match(PainlessParser.THROW);
				this.state = 184;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new ExprContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 185;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PainlessParser.RULE_trailer);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PainlessParser.LBRACK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.block();
				}
				break;
			case PainlessParser.LBRACE:
			case PainlessParser.LP:
			case PainlessParser.IF:
			case PainlessParser.WHILE:
			case PainlessParser.DO:
			case PainlessParser.FOR:
			case PainlessParser.CONTINUE:
			case PainlessParser.BREAK:
			case PainlessParser.RETURN:
			case PainlessParser.NEW:
			case PainlessParser.TRY:
			case PainlessParser.THROW:
			case PainlessParser.BOOLNOT:
			case PainlessParser.BWNOT:
			case PainlessParser.ADD:
			case PainlessParser.SUB:
			case PainlessParser.INCR:
			case PainlessParser.DECR:
			case PainlessParser.OCTAL:
			case PainlessParser.HEX:
			case PainlessParser.INTEGER:
			case PainlessParser.DECIMAL:
			case PainlessParser.STRING:
			case PainlessParser.REGEX:
			case PainlessParser.TRUE:
			case PainlessParser.FALSE:
			case PainlessParser.NULL:
			case PainlessParser.TYPE:
			case PainlessParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PainlessParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(PainlessParser.LBRACK);
			this.state = 196;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 193;
					this.statement();
					}
					}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.DO - 5)) | (1 << (PainlessParser.CONTINUE - 5)) | (1 << (PainlessParser.BREAK - 5)) | (1 << (PainlessParser.RETURN - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.THROW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.INCR - 58)) | (1 << (PainlessParser.DECR - 58)) | (1 << (PainlessParser.OCTAL - 58)) | (1 << (PainlessParser.HEX - 58)) | (1 << (PainlessParser.INTEGER - 58)) | (1 << (PainlessParser.DECIMAL - 58)) | (1 << (PainlessParser.STRING - 58)) | (1 << (PainlessParser.REGEX - 58)) | (1 << (PainlessParser.TRUE - 58)) | (1 << (PainlessParser.FALSE - 58)) | (1 << (PainlessParser.NULL - 58)) | (1 << (PainlessParser.TYPE - 58)) | (1 << (PainlessParser.ID - 58)))) !== 0)) {
				{
				this.state = 199;
				this.dstatement();
				}
			}

			this.state = 202;
			this.match(PainlessParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PainlessParser.RULE_empty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(PainlessParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PainlessParser.RULE_initializer);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 207;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public afterthought(): AfterthoughtContext {
		let _localctx: AfterthoughtContext = new AfterthoughtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PainlessParser.RULE_afterthought);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PainlessParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.decltype();
			this.state = 213;
			this.declvar();
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PainlessParser.COMMA) {
				{
				{
				this.state = 214;
				this.match(PainlessParser.COMMA);
				this.state = 215;
				this.declvar();
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decltype(): DecltypeContext {
		let _localctx: DecltypeContext = new DecltypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PainlessParser.RULE_decltype);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(PainlessParser.TYPE);
			this.state = 226;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 222;
					this.match(PainlessParser.LBRACE);
					this.state = 223;
					this.match(PainlessParser.RBRACE);
					}
					}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declvar(): DeclvarContext {
		let _localctx: DeclvarContext = new DeclvarContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PainlessParser.RULE_declvar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(PainlessParser.ID);
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PainlessParser.ASSIGN) {
				{
				this.state = 230;
				this.match(PainlessParser.ASSIGN);
				this.state = 231;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trap(): TrapContext {
		let _localctx: TrapContext = new TrapContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PainlessParser.RULE_trap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(PainlessParser.CATCH);
			this.state = 235;
			this.match(PainlessParser.LP);
			this.state = 236;
			this.match(PainlessParser.TYPE);
			this.state = 237;
			this.match(PainlessParser.ID);
			this.state = 238;
			this.match(PainlessParser.RP);
			this.state = 239;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, PainlessParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new SingleContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 242;
			this.unary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 294;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 292;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 244;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 245;
						_la = this._input.LA(1);
						if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (PainlessParser.MUL - 30)) | (1 << (PainlessParser.DIV - 30)) | (1 << (PainlessParser.REM - 30)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 246;
						this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new BinaryContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 247;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 248;
						_la = this._input.LA(1);
						if (!(_la === PainlessParser.ADD || _la === PainlessParser.SUB)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 249;
						this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new BinaryContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 250;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 251;
						_la = this._input.LA(1);
						if (!(_la === PainlessParser.FIND || _la === PainlessParser.MATCH)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 252;
						this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new BinaryContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 253;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 254;
						_la = this._input.LA(1);
						if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (PainlessParser.LSH - 35)) | (1 << (PainlessParser.RSH - 35)) | (1 << (PainlessParser.USH - 35)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 255;
						this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new CompContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 256;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 257;
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (PainlessParser.LT - 38)) | (1 << (PainlessParser.LTE - 38)) | (1 << (PainlessParser.GT - 38)) | (1 << (PainlessParser.GTE - 38)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 258;
						this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new CompContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 259;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 260;
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (PainlessParser.EQ - 42)) | (1 << (PainlessParser.EQR - 42)) | (1 << (PainlessParser.NE - 42)) | (1 << (PainlessParser.NER - 42)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 261;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new BinaryContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 262;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 263;
						this.match(PainlessParser.BWAND);
						this.state = 264;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new BinaryContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 265;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 266;
						this.match(PainlessParser.XOR);
						this.state = 267;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new BinaryContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 268;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 269;
						this.match(PainlessParser.BWOR);
						this.state = 270;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new BoolContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 271;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 272;
						this.match(PainlessParser.BOOLAND);
						this.state = 273;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new BoolContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 274;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 275;
						this.match(PainlessParser.BOOLOR);
						this.state = 276;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new ConditionalContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 277;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 278;
						this.match(PainlessParser.COND);
						this.state = 279;
						this.expression(0);
						this.state = 280;
						this.match(PainlessParser.COLON);
						this.state = 281;
						this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new ElvisContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 283;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 284;
						this.match(PainlessParser.ELVIS);
						this.state = 285;
						this.expression(2);
						}
						break;

					case 14:
						{
						_localctx = new AssignmentContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 286;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 287;
						_la = this._input.LA(1);
						if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (PainlessParser.ASSIGN - 60)) | (1 << (PainlessParser.AADD - 60)) | (1 << (PainlessParser.ASUB - 60)) | (1 << (PainlessParser.AMUL - 60)) | (1 << (PainlessParser.ADIV - 60)) | (1 << (PainlessParser.AREM - 60)) | (1 << (PainlessParser.AAND - 60)) | (1 << (PainlessParser.AXOR - 60)) | (1 << (PainlessParser.AOR - 60)) | (1 << (PainlessParser.ALSH - 60)) | (1 << (PainlessParser.ARSH - 60)) | (1 << (PainlessParser.AUSH - 60)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 288;
						this.expression(1);
						}
						break;

					case 15:
						{
						_localctx = new InstanceofContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PainlessParser.RULE_expression);
						this.state = 289;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 290;
						this.match(PainlessParser.INSTANCEOF);
						this.state = 291;
						this.decltype();
						}
						break;
					}
					}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary(): UnaryContext {
		let _localctx: UnaryContext = new UnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PainlessParser.RULE_unary);
		let _la: number;
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new PreContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				_la = this._input.LA(1);
				if (!(_la === PainlessParser.INCR || _la === PainlessParser.DECR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 298;
				this.chain();
				}
				break;

			case 2:
				_localctx = new PostContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 299;
				this.chain();
				this.state = 300;
				_la = this._input.LA(1);
				if (!(_la === PainlessParser.INCR || _la === PainlessParser.DECR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				_localctx = new ReadContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 302;
				this.chain();
				}
				break;

			case 4:
				_localctx = new OperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 303;
				_la = this._input.LA(1);
				if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (PainlessParser.BOOLNOT - 28)) | (1 << (PainlessParser.BWNOT - 28)) | (1 << (PainlessParser.ADD - 28)) | (1 << (PainlessParser.SUB - 28)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 304;
				this.unary();
				}
				break;

			case 5:
				_localctx = new CastContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 305;
				this.match(PainlessParser.LP);
				this.state = 306;
				this.decltype();
				this.state = 307;
				this.match(PainlessParser.RP);
				this.state = 308;
				this.unary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chain(): ChainContext {
		let _localctx: ChainContext = new ChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PainlessParser.RULE_chain);
		try {
			let _alt: number;
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new DynamicContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 312;
				this.primary();
				this.state = 316;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 313;
						this.postfix();
						}
						}
					}
					this.state = 318;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new StaticContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 319;
				this.decltype();
				this.state = 320;
				this.postdot();
				this.state = 324;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 321;
						this.postfix();
						}
						}
					}
					this.state = 326;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				}
				break;

			case 3:
				_localctx = new NewarrayContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 327;
				this.arrayinitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PainlessParser.RULE_primary);
		let _la: number;
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new PrecedenceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.match(PainlessParser.LP);
				this.state = 331;
				this.expression(0);
				this.state = 332;
				this.match(PainlessParser.RP);
				}
				break;

			case 2:
				_localctx = new NumericContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 334;
				_la = this._input.LA(1);
				if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (PainlessParser.OCTAL - 72)) | (1 << (PainlessParser.HEX - 72)) | (1 << (PainlessParser.INTEGER - 72)) | (1 << (PainlessParser.DECIMAL - 72)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				_localctx = new TrueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 335;
				this.match(PainlessParser.TRUE);
				}
				break;

			case 4:
				_localctx = new FalseContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 336;
				this.match(PainlessParser.FALSE);
				}
				break;

			case 5:
				_localctx = new NullContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 337;
				this.match(PainlessParser.NULL);
				}
				break;

			case 6:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 338;
				this.match(PainlessParser.STRING);
				}
				break;

			case 7:
				_localctx = new RegexContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 339;
				this.match(PainlessParser.REGEX);
				}
				break;

			case 8:
				_localctx = new ListinitContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 340;
				this.listinitializer();
				}
				break;

			case 9:
				_localctx = new MapinitContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 341;
				this.mapinitializer();
				}
				break;

			case 10:
				_localctx = new VariableContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 342;
				this.match(PainlessParser.ID);
				}
				break;

			case 11:
				_localctx = new CalllocalContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 343;
				this.match(PainlessParser.ID);
				this.state = 344;
				this.arguments();
				}
				break;

			case 12:
				_localctx = new NewobjectContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 345;
				this.match(PainlessParser.NEW);
				this.state = 346;
				this.match(PainlessParser.TYPE);
				this.state = 347;
				this.arguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfix(): PostfixContext {
		let _localctx: PostfixContext = new PostfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, PainlessParser.RULE_postfix);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.callinvoke();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.fieldaccess();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 352;
				this.braceaccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postdot(): PostdotContext {
		let _localctx: PostdotContext = new PostdotContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, PainlessParser.RULE_postdot);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 355;
				this.callinvoke();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 356;
				this.fieldaccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callinvoke(): CallinvokeContext {
		let _localctx: CallinvokeContext = new CallinvokeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, PainlessParser.RULE_callinvoke);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			_la = this._input.LA(1);
			if (!(_la === PainlessParser.DOT || _la === PainlessParser.NSDOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 360;
			this.match(PainlessParser.DOTID);
			this.state = 361;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldaccess(): FieldaccessContext {
		let _localctx: FieldaccessContext = new FieldaccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, PainlessParser.RULE_fieldaccess);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			_la = this._input.LA(1);
			if (!(_la === PainlessParser.DOT || _la === PainlessParser.NSDOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 364;
			_la = this._input.LA(1);
			if (!(_la === PainlessParser.DOTINTEGER || _la === PainlessParser.DOTID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public braceaccess(): BraceaccessContext {
		let _localctx: BraceaccessContext = new BraceaccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, PainlessParser.RULE_braceaccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(PainlessParser.LBRACE);
			this.state = 367;
			this.expression(0);
			this.state = 368;
			this.match(PainlessParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayinitializer(): ArrayinitializerContext {
		let _localctx: ArrayinitializerContext = new ArrayinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, PainlessParser.RULE_arrayinitializer);
		let _la: number;
		try {
			let _alt: number;
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				_localctx = new NewstandardarrayContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 370;
				this.match(PainlessParser.NEW);
				this.state = 371;
				this.match(PainlessParser.TYPE);
				this.state = 376;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 372;
						this.match(PainlessParser.LBRACE);
						this.state = 373;
						this.expression(0);
						this.state = 374;
						this.match(PainlessParser.RBRACE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 378;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 387;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 380;
					this.postdot();
					this.state = 384;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 381;
							this.postfix();
							}
							}
						}
						this.state = 386;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					}
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new NewinitializedarrayContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 389;
				this.match(PainlessParser.NEW);
				this.state = 390;
				this.match(PainlessParser.TYPE);
				this.state = 391;
				this.match(PainlessParser.LBRACE);
				this.state = 392;
				this.match(PainlessParser.RBRACE);
				this.state = 393;
				this.match(PainlessParser.LBRACK);
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.INCR - 58)) | (1 << (PainlessParser.DECR - 58)) | (1 << (PainlessParser.OCTAL - 58)) | (1 << (PainlessParser.HEX - 58)) | (1 << (PainlessParser.INTEGER - 58)) | (1 << (PainlessParser.DECIMAL - 58)) | (1 << (PainlessParser.STRING - 58)) | (1 << (PainlessParser.REGEX - 58)) | (1 << (PainlessParser.TRUE - 58)) | (1 << (PainlessParser.FALSE - 58)) | (1 << (PainlessParser.NULL - 58)) | (1 << (PainlessParser.TYPE - 58)) | (1 << (PainlessParser.ID - 58)))) !== 0)) {
					{
					this.state = 394;
					this.expression(0);
					this.state = 399;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === PainlessParser.COMMA) {
						{
						{
						this.state = 395;
						this.match(PainlessParser.COMMA);
						this.state = 396;
						this.expression(0);
						}
						}
						this.state = 401;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 404;
				this.match(PainlessParser.RBRACK);
				this.state = 408;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 405;
						this.postfix();
						}
						}
					}
					this.state = 410;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listinitializer(): ListinitializerContext {
		let _localctx: ListinitializerContext = new ListinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, PainlessParser.RULE_listinitializer);
		let _la: number;
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 413;
				this.match(PainlessParser.LBRACE);
				this.state = 414;
				this.expression(0);
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PainlessParser.COMMA) {
					{
					{
					this.state = 415;
					this.match(PainlessParser.COMMA);
					this.state = 416;
					this.expression(0);
					}
					}
					this.state = 421;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 422;
				this.match(PainlessParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.match(PainlessParser.LBRACE);
				this.state = 425;
				this.match(PainlessParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapinitializer(): MapinitializerContext {
		let _localctx: MapinitializerContext = new MapinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, PainlessParser.RULE_mapinitializer);
		let _la: number;
		try {
			this.state = 442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.match(PainlessParser.LBRACE);
				this.state = 429;
				this.maptoken();
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PainlessParser.COMMA) {
					{
					{
					this.state = 430;
					this.match(PainlessParser.COMMA);
					this.state = 431;
					this.maptoken();
					}
					}
					this.state = 436;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 437;
				this.match(PainlessParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 439;
				this.match(PainlessParser.LBRACE);
				this.state = 440;
				this.match(PainlessParser.COLON);
				this.state = 441;
				this.match(PainlessParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maptoken(): MaptokenContext {
		let _localctx: MaptokenContext = new MaptokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, PainlessParser.RULE_maptoken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.expression(0);
			this.state = 445;
			this.match(PainlessParser.COLON);
			this.state = 446;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, PainlessParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 448;
			this.match(PainlessParser.LP);
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (PainlessParser.LBRACE - 5)) | (1 << (PainlessParser.LP - 5)) | (1 << (PainlessParser.NEW - 5)) | (1 << (PainlessParser.THIS - 5)) | (1 << (PainlessParser.BOOLNOT - 5)) | (1 << (PainlessParser.BWNOT - 5)) | (1 << (PainlessParser.ADD - 5)) | (1 << (PainlessParser.SUB - 5)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (PainlessParser.INCR - 58)) | (1 << (PainlessParser.DECR - 58)) | (1 << (PainlessParser.OCTAL - 58)) | (1 << (PainlessParser.HEX - 58)) | (1 << (PainlessParser.INTEGER - 58)) | (1 << (PainlessParser.DECIMAL - 58)) | (1 << (PainlessParser.STRING - 58)) | (1 << (PainlessParser.REGEX - 58)) | (1 << (PainlessParser.TRUE - 58)) | (1 << (PainlessParser.FALSE - 58)) | (1 << (PainlessParser.NULL - 58)) | (1 << (PainlessParser.TYPE - 58)) | (1 << (PainlessParser.ID - 58)))) !== 0)) {
				{
				this.state = 449;
				this.argument();
				this.state = 454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PainlessParser.COMMA) {
					{
					{
					this.state = 450;
					this.match(PainlessParser.COMMA);
					this.state = 451;
					this.argument();
					}
					}
					this.state = 456;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 459;
			this.match(PainlessParser.RP);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, PainlessParser.RULE_argument);
		try {
			this.state = 464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 461;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 462;
				this.lambda();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 463;
				this.funcref();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, PainlessParser.RULE_lambda);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PainlessParser.TYPE:
			case PainlessParser.ID:
				{
				this.state = 466;
				this.lamtype();
				}
				break;
			case PainlessParser.LP:
				{
				this.state = 467;
				this.match(PainlessParser.LP);
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PainlessParser.TYPE || _la === PainlessParser.ID) {
					{
					this.state = 468;
					this.lamtype();
					this.state = 473;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === PainlessParser.COMMA) {
						{
						{
						this.state = 469;
						this.match(PainlessParser.COMMA);
						this.state = 470;
						this.lamtype();
						}
						}
						this.state = 475;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 478;
				this.match(PainlessParser.RP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 481;
			this.match(PainlessParser.ARROW);
			this.state = 484;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PainlessParser.LBRACK:
				{
				this.state = 482;
				this.block();
				}
				break;
			case PainlessParser.LBRACE:
			case PainlessParser.LP:
			case PainlessParser.NEW:
			case PainlessParser.BOOLNOT:
			case PainlessParser.BWNOT:
			case PainlessParser.ADD:
			case PainlessParser.SUB:
			case PainlessParser.INCR:
			case PainlessParser.DECR:
			case PainlessParser.OCTAL:
			case PainlessParser.HEX:
			case PainlessParser.INTEGER:
			case PainlessParser.DECIMAL:
			case PainlessParser.STRING:
			case PainlessParser.REGEX:
			case PainlessParser.TRUE:
			case PainlessParser.FALSE:
			case PainlessParser.NULL:
			case PainlessParser.TYPE:
			case PainlessParser.ID:
				{
				this.state = 483;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lamtype(): LamtypeContext {
		let _localctx: LamtypeContext = new LamtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, PainlessParser.RULE_lamtype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PainlessParser.TYPE) {
				{
				this.state = 486;
				this.decltype();
				}
			}

			this.state = 489;
			this.match(PainlessParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcref(): FuncrefContext {
		let _localctx: FuncrefContext = new FuncrefContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, PainlessParser.RULE_funcref);
		try {
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				_localctx = new ClassfuncrefContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 491;
				this.match(PainlessParser.TYPE);
				this.state = 492;
				this.match(PainlessParser.REF);
				this.state = 493;
				this.match(PainlessParser.ID);
				}
				break;

			case 2:
				_localctx = new ConstructorfuncrefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.decltype();
				this.state = 495;
				this.match(PainlessParser.REF);
				this.state = 496;
				this.match(PainlessParser.NEW);
				}
				break;

			case 3:
				_localctx = new CapturingfuncrefContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 498;
				this.match(PainlessParser.ID);
				this.state = 499;
				this.match(PainlessParser.REF);
				this.state = 500;
				this.match(PainlessParser.ID);
				}
				break;

			case 4:
				_localctx = new LocalfuncrefContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 501;
				this.match(PainlessParser.THIS);
				this.state = 502;
				this.match(PainlessParser.REF);
				this.state = 503;
				this.match(PainlessParser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.rstatement_sempred(_localctx as RstatementContext, predIndex);

		case 15:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private rstatement_sempred(_localctx: RstatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  _input.LA(1) != ELSE ;
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 15);

		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);

		case 15:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03V\u01FD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03\x02" +
		"\x07\x02F\n\x02\f\x02\x0E\x02I\v\x02\x03\x02\x07\x02L\n\x02\f\x02\x0E" +
		"\x02O\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04_\n\x04\f" +
		"\x04\x0E\x04b\v\x04\x05\x04d\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05l\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06v\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06~\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\x83\n\x06" +
		"\x03\x06\x03\x06\x05\x06\x87\n\x06\x03\x06\x03\x06\x05\x06\x8B\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\x90\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\xA6\n" +
		"\x06\r\x06\x0E\x06\xA7\x05\x06\xAA\n\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\xB8\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xBD\n\x07\x03\b\x03\b\x05\b" +
		"\xC1\n\b\x03\t\x03\t\x07\t\xC5\n\t\f\t\x0E\t\xC8\v\t\x03\t\x05\t\xCB\n" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x05\v\xD3\n\v\x03\f\x03\f\x03\r" +
		"\x03\r\x03\r\x03\r\x07\r\xDB\n\r\f\r\x0E\r\xDE\v\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x07\x0E\xE3\n\x0E\f\x0E\x0E\x0E\xE6\v\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xEB\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0127\n\x11" +
		"\f\x11\x0E\x11\u012A\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0139" +
		"\n\x12\x03\x13\x03\x13\x07\x13\u013D\n\x13\f\x13\x0E\x13\u0140\v\x13\x03" +
		"\x13\x03\x13\x03\x13\x07\x13\u0145\n\x13\f\x13\x0E\x13\u0148\v\x13\x03" +
		"\x13\x05\x13\u014B\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u015F\n\x14\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u0164\n\x15\x03\x16\x03\x16\x05\x16\u0168\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x06\x1A\u017B\n\x1A\r\x1A" +
		"\x0E\x1A\u017C\x03\x1A\x03\x1A\x07\x1A\u0181\n\x1A\f\x1A\x0E\x1A\u0184" +
		"\v\x1A\x05\x1A\u0186\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x07\x1A\u0190\n\x1A\f\x1A\x0E\x1A\u0193\v\x1A\x05" +
		"\x1A\u0195\n\x1A\x03\x1A\x03\x1A\x07\x1A\u0199\n\x1A\f\x1A\x0E\x1A\u019C" +
		"\v\x1A\x05\x1A\u019E\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01A4" +
		"\n\x1B\f\x1B\x0E\x1B\u01A7\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B" +
		"\u01AD\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u01B3\n\x1C\f\x1C" +
		"\x0E\x1C\u01B6\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01BD" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x07\x1E\u01C7\n\x1E\f\x1E\x0E\x1E\u01CA\v\x1E\x05\x1E\u01CC\n\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01D3\n\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x07 \u01DA\n \f \x0E \u01DD\v \x05 \u01DF\n \x03 \x05 \u01E2" +
		"\n \x03 \x03 \x03 \x05 \u01E7\n \x03!\x05!\u01EA\n!\x03!\x03!\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05" +
		"\"\u01FB\n\"\x03\"\x02\x02\x03 #\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02\x02\x0F\x03\x03\x0E\x0E\x03\x02 \"\x03\x02#" +
		"$\x03\x02:;\x03\x02%\'\x03\x02(+\x03\x02,/\x03\x02>I\x03\x02<=\x04\x02" +
		"\x1E\x1F#$\x03\x02JM\x03\x02\v\f\x03\x02UV\x02\u0236\x02G\x03\x02\x02" +
		"\x02\x04R\x03\x02\x02\x02\x06W\x03\x02\x02\x02\bk\x03\x02\x02\x02\n\xA9" +
		"\x03\x02\x02\x02\f\xBC\x03\x02\x02\x02\x0E\xC0\x03\x02\x02\x02\x10\xC2" +
		"\x03\x02\x02\x02\x12\xCE\x03\x02\x02\x02\x14\xD2\x03\x02\x02\x02\x16\xD4" +
		"\x03\x02\x02\x02\x18\xD6\x03\x02\x02\x02\x1A\xDF\x03\x02\x02\x02\x1C\xE7" +
		"\x03\x02\x02\x02\x1E\xEC\x03\x02\x02\x02 \xF3\x03\x02\x02\x02\"\u0138" +
		"\x03\x02\x02\x02$\u014A\x03\x02\x02\x02&\u015E\x03\x02\x02\x02(\u0163" +
		"\x03\x02\x02\x02*\u0167\x03\x02\x02\x02,\u0169\x03\x02\x02\x02.\u016D" +
		"\x03\x02\x02\x020\u0170\x03\x02\x02\x022\u019D\x03\x02\x02\x024\u01AC" +
		"\x03\x02\x02\x026\u01BC\x03\x02\x02\x028\u01BE\x03\x02\x02\x02:\u01C2" +
		"\x03\x02\x02\x02<\u01D2\x03\x02\x02\x02>\u01E1\x03\x02\x02\x02@\u01E9" +
		"\x03\x02\x02\x02B\u01FA\x03\x02\x02\x02DF\x05\x04\x03\x02ED\x03\x02\x02" +
		"\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HM\x03\x02\x02" +
		"\x02IG\x03\x02\x02\x02JL\x05\b\x05\x02KJ\x03\x02\x02\x02LO\x03\x02\x02" +
		"\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NP\x03\x02\x02\x02OM\x03\x02\x02" +
		"\x02PQ\x07\x02\x02\x03Q\x03\x03\x02\x02\x02RS\x05\x1A\x0E\x02ST\x07T\x02" +
		"\x02TU\x05\x06\x04\x02UV\x05\x10\t\x02V\x05\x03\x02\x02\x02Wc\x07\t\x02" +
		"\x02XY\x05\x1A\x0E\x02Y`\x07T\x02\x02Z[\x07\r\x02\x02[\\\x05\x1A\x0E\x02" +
		"\\]\x07T\x02\x02]_\x03\x02\x02\x02^Z\x03\x02\x02\x02_b\x03\x02\x02\x02" +
		"`^\x03\x02\x02\x02`a\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02\x02" +
		"cX\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\x07\n\x02\x02" +
		"f\x07\x03\x02\x02\x02gl\x05\n\x06\x02hi\x05\f\x07\x02ij\t\x02\x02\x02" +
		"jl\x03\x02\x02\x02kg\x03\x02\x02\x02kh\x03\x02\x02\x02l\t\x03\x02\x02" +
		"\x02mn\x07\x0F\x02\x02no\x07\t\x02\x02op\x05 \x11\x02pq\x07\n\x02\x02" +
		"qu\x05\x0E\b\x02rs\x07\x11\x02\x02sv\x05\x0E\b\x02tv\x06\x06\x02\x02u" +
		"r\x03\x02\x02\x02ut\x03\x02\x02\x02v\xAA\x03\x02\x02\x02wx\x07\x12\x02" +
		"\x02xy\x07\t\x02\x02yz\x05 \x11\x02z}\x07\n\x02\x02{~\x05\x0E\b\x02|~" +
		"\x05\x12\n\x02}{\x03\x02\x02\x02}|\x03\x02\x02\x02~\xAA\x03\x02\x02\x02" +
		"\x7F\x80\x07\x14\x02\x02\x80\x82\x07\t\x02\x02\x81\x83\x05\x14\v\x02\x82" +
		"\x81\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84" +
		"\x86\x07\x0E\x02\x02\x85\x87\x05 \x11\x02\x86\x85\x03\x02\x02\x02\x86" +
		"\x87\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x07\x0E\x02\x02\x89" +
		"\x8B\x05\x16\f\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B" +
		"\x8C\x03\x02\x02\x02\x8C\x8F\x07\n\x02\x02\x8D\x90\x05\x0E\b\x02\x8E\x90" +
		"\x05\x12\n\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\xAA" +
		"\x03\x02\x02\x02\x91\x92\x07\x14\x02\x02\x92\x93\x07\t\x02\x02\x93\x94" +
		"\x05\x1A\x0E\x02\x94\x95\x07T\x02\x02\x95\x96\x076\x02\x02\x96\x97\x05" +
		" \x11\x02\x97\x98\x07\n\x02\x02\x98\x99\x05\x0E\b\x02\x99\xAA\x03\x02" +
		"\x02\x02\x9A\x9B\x07\x14\x02\x02\x9B\x9C\x07\t\x02\x02\x9C\x9D\x07T\x02" +
		"\x02\x9D\x9E\x07\x10\x02\x02\x9E\x9F\x05 \x11\x02\x9F\xA0\x07\n\x02\x02" +
		"\xA0\xA1\x05\x0E\b\x02\xA1\xAA\x03\x02\x02\x02\xA2\xA3\x07\x19\x02\x02" +
		"\xA3\xA5\x05\x10\t\x02\xA4\xA6\x05\x1E\x10\x02\xA5\xA4\x03\x02\x02\x02" +
		"\xA6\xA7\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02" +
		"\xA8\xAA\x03\x02\x02\x02\xA9m\x03\x02\x02\x02\xA9w\x03\x02\x02\x02\xA9" +
		"\x7F\x03\x02\x02\x02\xA9\x91\x03\x02\x02\x02\xA9\x9A\x03\x02\x02\x02\xA9" +
		"\xA2\x03\x02\x02\x02\xAA\v\x03\x02\x02\x02\xAB\xAC\x07\x13\x02\x02\xAC" +
		"\xAD\x05\x10\t\x02\xAD\xAE\x07\x12\x02\x02\xAE\xAF\x07\t\x02\x02\xAF\xB0" +
		"\x05 \x11\x02\xB0\xB1\x07\n\x02\x02\xB1\xBD\x03\x02\x02\x02\xB2\xBD\x05" +
		"\x18\r\x02\xB3\xBD\x07\x15\x02\x02\xB4\xBD\x07\x16\x02\x02\xB5\xB7\x07" +
		"\x17\x02\x02\xB6\xB8\x05 \x11\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03" +
		"\x02\x02\x02\xB8\xBD\x03\x02\x02\x02\xB9\xBA\x07\x1B\x02\x02\xBA\xBD\x05" +
		" \x11\x02\xBB\xBD\x05 \x11\x02\xBC\xAB\x03\x02\x02\x02\xBC\xB2\x03\x02" +
		"\x02\x02\xBC\xB3\x03\x02\x02\x02\xBC\xB4\x03\x02\x02\x02\xBC\xB5\x03\x02" +
		"\x02\x02\xBC\xB9\x03\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\r\x03\x02" +
		"\x02\x02\xBE\xC1\x05\x10\t\x02\xBF\xC1\x05\b\x05\x02\xC0\xBE\x03\x02\x02" +
		"\x02\xC0\xBF\x03\x02\x02\x02\xC1\x0F\x03\x02\x02\x02\xC2\xC6\x07\x05\x02" +
		"\x02\xC3\xC5\x05\b\x05\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02\x02" +
		"\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xCA\x03\x02\x02" +
		"\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCB\x05\f\x07\x02\xCA\xC9\x03\x02\x02" +
		"\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x07\x06\x02" +
		"\x02\xCD\x11\x03\x02\x02\x02\xCE\xCF\x07\x0E\x02\x02\xCF\x13\x03\x02\x02" +
		"\x02\xD0\xD3\x05\x18\r\x02\xD1\xD3\x05 \x11\x02\xD2\xD0\x03\x02\x02\x02" +
		"\xD2\xD1\x03\x02\x02\x02\xD3\x15\x03\x02\x02\x02\xD4\xD5\x05 \x11\x02" +
		"\xD5\x17\x03\x02\x02\x02\xD6\xD7\x05\x1A\x0E\x02\xD7\xDC\x05\x1C\x0F\x02" +
		"\xD8\xD9\x07\r\x02\x02\xD9\xDB\x05\x1C\x0F\x02\xDA\xD8\x03\x02\x02\x02" +
		"\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02" +
		"\xDD\x19\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE4\x07S\x02\x02" +
		"\xE0\xE1\x07\x07\x02\x02\xE1\xE3\x07\b\x02\x02\xE2\xE0\x03\x02\x02\x02" +
		"\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02" +
		"\xE5\x1B\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEA\x07T\x02\x02" +
		"\xE8\xE9\x07>\x02\x02\xE9\xEB\x05 \x11\x02\xEA\xE8\x03\x02\x02\x02\xEA" +
		"\xEB\x03\x02\x02\x02\xEB\x1D\x03\x02\x02\x02\xEC\xED\x07\x1A\x02\x02\xED" +
		"\xEE\x07\t\x02\x02\xEE\xEF\x07S\x02\x02\xEF\xF0\x07T\x02\x02\xF0\xF1\x07" +
		"\n\x02\x02\xF1\xF2\x05\x10\t\x02\xF2\x1F\x03\x02\x02\x02\xF3\xF4\b\x11" +
		"\x01\x02\xF4\xF5\x05\"\x12\x02\xF5\u0128\x03\x02\x02\x02\xF6\xF7\f\x11" +
		"\x02\x02\xF7\xF8\t\x03\x02\x02\xF8\u0127\x05 \x11\x12\xF9\xFA\f\x10\x02" +
		"\x02\xFA\xFB\t\x04\x02\x02\xFB\u0127\x05 \x11\x11\xFC\xFD\f\x0F\x02\x02" +
		"\xFD\xFE\t\x05\x02\x02\xFE\u0127\x05 \x11\x10\xFF\u0100\f\x0E\x02\x02" +
		"\u0100\u0101\t\x06\x02\x02\u0101\u0127\x05 \x11\x0F\u0102\u0103\f\r\x02" +
		"\x02\u0103\u0104\t\x07\x02\x02\u0104\u0127\x05 \x11\x0E\u0105\u0106\f" +
		"\v\x02\x02\u0106\u0107\t\b\x02\x02\u0107\u0127\x05 \x11\f\u0108\u0109" +
		"\f\n\x02\x02\u0109\u010A\x070\x02\x02\u010A\u0127\x05 \x11\v\u010B\u010C" +
		"\f\t\x02\x02\u010C\u010D\x071\x02\x02\u010D\u0127\x05 \x11\n\u010E\u010F" +
		"\f\b\x02\x02\u010F\u0110\x072\x02\x02\u0110\u0127\x05 \x11\t\u0111\u0112" +
		"\f\x07\x02\x02\u0112\u0113\x073\x02\x02\u0113\u0127\x05 \x11\b\u0114\u0115" +
		"\f\x06\x02\x02\u0115\u0116\x074\x02\x02\u0116\u0127\x05 \x11\x07\u0117" +
		"\u0118\f\x05\x02\x02\u0118\u0119\x075\x02\x02\u0119\u011A\x05 \x11\x02" +
		"\u011A\u011B\x076\x02\x02\u011B\u011C\x05 \x11\x05\u011C\u0127\x03\x02" +
		"\x02\x02\u011D\u011E\f\x04\x02\x02\u011E\u011F\x077\x02\x02\u011F\u0127" +
		"\x05 \x11\x04\u0120\u0121\f\x03\x02\x02\u0121\u0122\t\t\x02\x02\u0122" +
		"\u0127\x05 \x11\x03\u0123\u0124\f\f\x02\x02\u0124\u0125\x07\x1D\x02\x02" +
		"\u0125\u0127\x05\x1A\x0E\x02\u0126\xF6\x03\x02\x02\x02\u0126\xF9\x03\x02" +
		"\x02\x02\u0126\xFC\x03\x02\x02\x02\u0126\xFF\x03\x02\x02\x02\u0126\u0102" +
		"\x03\x02\x02\x02\u0126\u0105\x03\x02\x02\x02\u0126\u0108\x03\x02\x02\x02" +
		"\u0126\u010B\x03\x02\x02\x02\u0126\u010E\x03\x02\x02\x02\u0126\u0111\x03" +
		"\x02\x02\x02\u0126\u0114\x03\x02\x02\x02\u0126\u0117\x03\x02\x02\x02\u0126" +
		"\u011D\x03\x02\x02\x02\u0126\u0120\x03\x02\x02\x02\u0126\u0123\x03\x02" +
		"\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129!\x03\x02\x02\x02\u012A\u0128\x03\x02\x02" +
		"\x02\u012B\u012C\t\n\x02\x02\u012C\u0139\x05$\x13\x02\u012D\u012E\x05" +
		"$\x13\x02\u012E\u012F\t\n\x02\x02\u012F\u0139\x03\x02\x02\x02\u0130\u0139" +
		"\x05$\x13\x02\u0131\u0132\t\v\x02\x02\u0132\u0139\x05\"\x12\x02\u0133" +
		"\u0134\x07\t\x02\x02\u0134\u0135\x05\x1A\x0E\x02\u0135\u0136\x07\n\x02" +
		"\x02\u0136\u0137\x05\"\x12\x02\u0137\u0139\x03\x02\x02\x02\u0138\u012B" +
		"\x03\x02\x02\x02\u0138\u012D\x03\x02\x02\x02\u0138\u0130\x03\x02\x02\x02" +
		"\u0138\u0131\x03\x02\x02\x02\u0138\u0133\x03\x02\x02\x02\u0139#\x03\x02" +
		"\x02\x02\u013A\u013E\x05&\x14\x02\u013B\u013D\x05(\x15\x02\u013C\u013B" +
		"\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02" +
		"\u013E\u013F\x03\x02\x02\x02\u013F\u014B\x03\x02\x02\x02\u0140\u013E\x03" +
		"\x02\x02\x02\u0141\u0142\x05\x1A\x0E\x02\u0142\u0146\x05*\x16\x02\u0143" +
		"\u0145\x05(\x15\x02\u0144\u0143\x03\x02\x02\x02\u0145\u0148\x03\x02\x02" +
		"\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u014B" +
		"\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014B\x052\x1A\x02" +
		"\u014A\u013A\x03\x02\x02\x02\u014A\u0141\x03\x02\x02\x02\u014A\u0149\x03" +
		"\x02\x02\x02\u014B%\x03\x02\x02\x02\u014C\u014D\x07\t\x02\x02\u014D\u014E" +
		"\x05 \x11\x02\u014E\u014F\x07\n\x02\x02\u014F\u015F\x03\x02\x02\x02\u0150" +
		"\u015F\t\f\x02\x02\u0151\u015F\x07P\x02\x02\u0152\u015F\x07Q\x02\x02\u0153" +
		"\u015F\x07R\x02\x02\u0154\u015F\x07N\x02\x02\u0155\u015F\x07O\x02\x02" +
		"\u0156\u015F\x054\x1B\x02\u0157\u015F\x056\x1C\x02\u0158\u015F\x07T\x02" +
		"\x02\u0159\u015A\x07T\x02\x02\u015A\u015F\x05:\x1E\x02\u015B\u015C\x07" +
		"\x18\x02\x02\u015C\u015D\x07S\x02\x02\u015D\u015F\x05:\x1E\x02\u015E\u014C" +
		"\x03\x02\x02\x02\u015E\u0150\x03\x02\x02\x02\u015E\u0151\x03\x02\x02\x02" +
		"\u015E\u0152\x03\x02\x02\x02\u015E\u0153\x03\x02\x02\x02\u015E\u0154\x03" +
		"\x02\x02\x02\u015E\u0155\x03\x02\x02\x02\u015E\u0156\x03\x02\x02\x02\u015E" +
		"\u0157\x03\x02\x02\x02\u015E\u0158\x03\x02\x02\x02\u015E\u0159\x03\x02" +
		"\x02\x02\u015E\u015B\x03\x02\x02\x02\u015F\'\x03\x02\x02\x02\u0160\u0164" +
		"\x05,\x17\x02\u0161\u0164\x05.\x18\x02\u0162\u0164\x050\x19\x02\u0163" +
		"\u0160\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0162\x03\x02" +
		"\x02\x02\u0164)\x03\x02\x02\x02\u0165\u0168\x05,\x17\x02\u0166\u0168\x05" +
		".\x18\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168" +
		"+\x03\x02\x02\x02\u0169\u016A\t\r\x02\x02\u016A\u016B\x07V\x02\x02\u016B" +
		"\u016C\x05:\x1E\x02\u016C-\x03\x02\x02\x02\u016D\u016E\t\r\x02\x02\u016E" +
		"\u016F\t\x0E\x02\x02\u016F/\x03\x02\x02\x02\u0170\u0171\x07\x07\x02\x02" +
		"\u0171\u0172\x05 \x11\x02\u0172\u0173\x07\b\x02\x02\u01731\x03\x02\x02" +
		"\x02\u0174\u0175\x07\x18\x02\x02\u0175\u017A\x07S\x02\x02\u0176\u0177" +
		"\x07\x07\x02\x02\u0177\u0178\x05 \x11\x02\u0178\u0179\x07\b\x02\x02\u0179" +
		"\u017B\x03\x02\x02\x02\u017A\u0176\x03\x02\x02\x02\u017B\u017C\x03\x02" +
		"\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
		"\u0185\x03\x02\x02\x02\u017E\u0182\x05*\x16\x02\u017F\u0181\x05(\x15\x02" +
		"\u0180\u017F\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03" +
		"\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184" +
		"\u0182\x03\x02\x02\x02\u0185\u017E\x03\x02\x02\x02\u0185\u0186\x03\x02" +
		"\x02\x02\u0186\u019E\x03\x02\x02\x02\u0187\u0188\x07\x18\x02\x02\u0188" +
		"\u0189\x07S\x02\x02\u0189\u018A\x07\x07\x02\x02\u018A\u018B\x07\b\x02" +
		"\x02\u018B\u0194\x07\x05\x02\x02\u018C\u0191\x05 \x11\x02\u018D\u018E" +
		"\x07\r\x02\x02\u018E\u0190\x05 \x11\x02\u018F\u018D\x03\x02\x02\x02\u0190" +
		"\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02" +
		"\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194" +
		"\u018C\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196\x03\x02" +
		"\x02\x02\u0196\u019A\x07\x06\x02\x02\u0197\u0199\x05(\x15\x02\u0198\u0197" +
		"\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02" +
		"\u019A\u019B\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03" +
		"\x02\x02\x02\u019D\u0174\x03\x02\x02\x02\u019D\u0187\x03\x02\x02\x02\u019E" +
		"3\x03\x02\x02\x02\u019F\u01A0\x07\x07\x02\x02\u01A0\u01A5\x05 \x11\x02" +
		"\u01A1\u01A2\x07\r\x02\x02\u01A2\u01A4\x05 \x11\x02\u01A3\u01A1\x03\x02" +
		"\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A5\x03\x02" +
		"\x02\x02\u01A8\u01A9\x07\b\x02\x02\u01A9\u01AD\x03\x02\x02\x02\u01AA\u01AB" +
		"\x07\x07\x02\x02\u01AB\u01AD\x07\b\x02\x02\u01AC\u019F\x03\x02\x02\x02" +
		"\u01AC\u01AA\x03\x02\x02\x02\u01AD5\x03\x02\x02\x02\u01AE\u01AF\x07\x07" +
		"\x02\x02\u01AF\u01B4\x058\x1D\x02\u01B0\u01B1\x07\r\x02\x02\u01B1\u01B3" +
		"\x058\x1D\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02" +
		"\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B7\x03" +
		"\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01B8\x07\b\x02\x02\u01B8" +
		"\u01BD\x03\x02\x02\x02\u01B9\u01BA\x07\x07\x02\x02\u01BA\u01BB\x076\x02" +
		"\x02\u01BB\u01BD\x07\b\x02\x02\u01BC\u01AE\x03\x02\x02\x02\u01BC\u01B9" +
		"\x03\x02\x02\x02\u01BD7\x03\x02\x02\x02\u01BE\u01BF\x05 \x11\x02\u01BF" +
		"\u01C0\x076\x02\x02\u01C0\u01C1\x05 \x11\x02\u01C19\x03\x02\x02\x02\u01C2" +
		"\u01CB\x07\t\x02\x02\u01C3\u01C8\x05<\x1F\x02\u01C4\u01C5\x07\r\x02\x02" +
		"\u01C5\u01C7\x05<\x1F\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01CA\x03" +
		"\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
		"\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB\u01C3\x03\x02" +
		"\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD" +
		"\u01CE\x07\n\x02\x02\u01CE;\x03\x02\x02\x02\u01CF\u01D3\x05 \x11\x02\u01D0" +
		"\u01D3\x05> \x02\u01D1\u01D3\x05B\"\x02\u01D2\u01CF\x03\x02\x02\x02\u01D2" +
		"\u01D0\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3=\x03\x02\x02" +
		"\x02\u01D4\u01E2\x05@!\x02\u01D5\u01DE\x07\t\x02\x02\u01D6\u01DB\x05@" +
		"!\x02\u01D7\u01D8\x07\r\x02\x02\u01D8\u01DA\x05@!\x02\u01D9\u01D7\x03" +
		"\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB" +
		"\u01DC\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02" +
		"\x02\x02\u01DE\u01D6\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
		"\u01E0\x03\x02\x02\x02\u01E0\u01E2\x07\n\x02\x02\u01E1\u01D4\x03\x02\x02" +
		"\x02\u01E1\u01D5\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E6" +
		"\x079\x02\x02\u01E4\u01E7\x05\x10\t\x02\u01E5\u01E7\x05 \x11\x02\u01E6" +
		"\u01E4\x03\x02\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7?\x03\x02\x02" +
		"\x02\u01E8\u01EA\x05\x1A\x0E\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9\u01EA" +
		"\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EC\x07T\x02\x02" +
		"\u01ECA\x03\x02\x02\x02\u01ED\u01EE\x07S\x02\x02\u01EE\u01EF\x078\x02" +
		"\x02\u01EF\u01FB\x07T\x02\x02\u01F0\u01F1\x05\x1A\x0E\x02\u01F1\u01F2" +
		"\x078\x02\x02\u01F2\u01F3\x07\x18\x02\x02\u01F3\u01FB\x03\x02\x02\x02" +
		"\u01F4\u01F5\x07T\x02\x02\u01F5\u01F6\x078\x02\x02\u01F6\u01FB\x07T\x02" +
		"\x02\u01F7\u01F8\x07\x1C\x02\x02\u01F8\u01F9\x078\x02\x02\u01F9\u01FB" +
		"\x07T\x02\x02\u01FA\u01ED\x03\x02\x02\x02\u01FA\u01F0\x03\x02\x02\x02" +
		"\u01FA\u01F4\x03\x02\x02\x02\u01FA\u01F7\x03\x02\x02\x02\u01FBC\x03\x02" +
		"\x02\x025GM`cku}\x82\x86\x8A\x8F\xA7\xA9\xB7\xBC\xC0\xC6\xCA\xD2\xDC\xE4" +
		"\xEA\u0126\u0128\u0138\u013E\u0146\u014A\u015E\u0163\u0167\u017C\u0182" +
		"\u0185\u0191\u0194\u019A\u019D\u01A5\u01AC\u01B4\u01BC\u01C8\u01CB\u01D2" +
		"\u01DB\u01DE\u01E1\u01E6\u01E9\u01FA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PainlessParser.__ATN) {
			PainlessParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PainlessParser._serializedATN));
		}

		return PainlessParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(PainlessParser.EOF, 0); }
	public fun(): FunContext[];
	public fun(i: number): FunContext;
	public fun(i?: number): FunContext | FunContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunContext);
		} else {
			return this.getRuleContext(i, FunContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_source; }
}


export class FunContext extends ParserRuleContext {
	public decltype(): DecltypeContext {
		return this.getRuleContext(0, DecltypeContext);
	}
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_fun; }
}


export class ParametersContext extends ParserRuleContext {
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	public decltype(): DecltypeContext[];
	public decltype(i: number): DecltypeContext;
	public decltype(i?: number): DecltypeContext | DecltypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecltypeContext);
		} else {
			return this.getRuleContext(i, DecltypeContext);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.ID);
		} else {
			return this.getToken(PainlessParser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.COMMA);
		} else {
			return this.getToken(PainlessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_parameters; }
}


export class StatementContext extends ParserRuleContext {
	public rstatement(): RstatementContext | undefined {
		return this.tryGetRuleContext(0, RstatementContext);
	}
	public dstatement(): DstatementContext | undefined {
		return this.tryGetRuleContext(0, DstatementContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.SEMICOLON, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_statement; }
}


export class RstatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_rstatement; }
	public copyFrom(ctx: RstatementContext): void {
		super.copyFrom(ctx);
	}
}
export class IfContext extends RstatementContext {
	public IF(): TerminalNode { return this.getToken(PainlessParser.IF, 0); }
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	public trailer(): TrailerContext[];
	public trailer(i: number): TrailerContext;
	public trailer(i?: number): TrailerContext | TrailerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailerContext);
		} else {
			return this.getRuleContext(i, TrailerContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ELSE, 0); }
	constructor(ctx: RstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class WhileContext extends RstatementContext {
	public WHILE(): TerminalNode { return this.getToken(PainlessParser.WHILE, 0); }
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	public trailer(): TrailerContext | undefined {
		return this.tryGetRuleContext(0, TrailerContext);
	}
	public empty(): EmptyContext | undefined {
		return this.tryGetRuleContext(0, EmptyContext);
	}
	constructor(ctx: RstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ForContext extends RstatementContext {
	public FOR(): TerminalNode { return this.getToken(PainlessParser.FOR, 0); }
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.SEMICOLON);
		} else {
			return this.getToken(PainlessParser.SEMICOLON, i);
		}
	}
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	public trailer(): TrailerContext | undefined {
		return this.tryGetRuleContext(0, TrailerContext);
	}
	public empty(): EmptyContext | undefined {
		return this.tryGetRuleContext(0, EmptyContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public afterthought(): AfterthoughtContext | undefined {
		return this.tryGetRuleContext(0, AfterthoughtContext);
	}
	constructor(ctx: RstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EachContext extends RstatementContext {
	public FOR(): TerminalNode { return this.getToken(PainlessParser.FOR, 0); }
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public decltype(): DecltypeContext {
		return this.getRuleContext(0, DecltypeContext);
	}
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(PainlessParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	public trailer(): TrailerContext {
		return this.getRuleContext(0, TrailerContext);
	}
	constructor(ctx: RstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IneachContext extends RstatementContext {
	public FOR(): TerminalNode { return this.getToken(PainlessParser.FOR, 0); }
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	public IN(): TerminalNode { return this.getToken(PainlessParser.IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	public trailer(): TrailerContext {
		return this.getRuleContext(0, TrailerContext);
	}
	constructor(ctx: RstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TryContext extends RstatementContext {
	public TRY(): TerminalNode { return this.getToken(PainlessParser.TRY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public trap(): TrapContext[];
	public trap(i: number): TrapContext;
	public trap(i?: number): TrapContext | TrapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrapContext);
		} else {
			return this.getRuleContext(i, TrapContext);
		}
	}
	constructor(ctx: RstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DstatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_dstatement; }
	public copyFrom(ctx: DstatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoContext extends DstatementContext {
	public DO(): TerminalNode { return this.getToken(PainlessParser.DO, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public WHILE(): TerminalNode { return this.getToken(PainlessParser.WHILE, 0); }
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	constructor(ctx: DstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DeclContext extends DstatementContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: DstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ContinueContext extends DstatementContext {
	public CONTINUE(): TerminalNode { return this.getToken(PainlessParser.CONTINUE, 0); }
	constructor(ctx: DstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakContext extends DstatementContext {
	public BREAK(): TerminalNode { return this.getToken(PainlessParser.BREAK, 0); }
	constructor(ctx: DstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnContext extends DstatementContext {
	public RETURN(): TerminalNode { return this.getToken(PainlessParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ThrowContext extends DstatementContext {
	public THROW(): TerminalNode { return this.getToken(PainlessParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExprContext extends DstatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DstatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class TrailerContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_trailer; }
}


export class BlockContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(PainlessParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(PainlessParser.RBRACK, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public dstatement(): DstatementContext | undefined {
		return this.tryGetRuleContext(0, DstatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_block; }
}


export class EmptyContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(PainlessParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_empty; }
}


export class InitializerContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_initializer; }
}


export class AfterthoughtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_afterthought; }
}


export class DeclarationContext extends ParserRuleContext {
	public decltype(): DecltypeContext {
		return this.getRuleContext(0, DecltypeContext);
	}
	public declvar(): DeclvarContext[];
	public declvar(i: number): DeclvarContext;
	public declvar(i?: number): DeclvarContext | DeclvarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclvarContext);
		} else {
			return this.getRuleContext(i, DeclvarContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.COMMA);
		} else {
			return this.getToken(PainlessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_declaration; }
}


export class DecltypeContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(PainlessParser.TYPE, 0); }
	public LBRACE(): TerminalNode[];
	public LBRACE(i: number): TerminalNode;
	public LBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.LBRACE);
		} else {
			return this.getToken(PainlessParser.LBRACE, i);
		}
	}
	public RBRACE(): TerminalNode[];
	public RBRACE(i: number): TerminalNode;
	public RBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.RBRACE);
		} else {
			return this.getToken(PainlessParser.RBRACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_decltype; }
}


export class DeclvarContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_declvar; }
}


export class TrapContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(PainlessParser.CATCH, 0); }
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public TYPE(): TerminalNode { return this.getToken(PainlessParser.TYPE, 0); }
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_trap; }
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleContext extends ExpressionContext {
	public unary(): UnaryContext {
		return this.getRuleContext(0, UnaryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BinaryContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.DIV, 0); }
	public REM(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.REM, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.SUB, 0); }
	public FIND(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.FIND, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.MATCH, 0); }
	public LSH(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.LSH, 0); }
	public RSH(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.RSH, 0); }
	public USH(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.USH, 0); }
	public BWAND(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.BWAND, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.XOR, 0); }
	public BWOR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.BWOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CompContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.GTE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.EQ, 0); }
	public EQR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.EQR, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.NE, 0); }
	public NER(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.NER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceofContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INSTANCEOF(): TerminalNode { return this.getToken(PainlessParser.INSTANCEOF, 0); }
	public decltype(): DecltypeContext {
		return this.getRuleContext(0, DecltypeContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BoolContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BOOLAND(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.BOOLAND, 0); }
	public BOOLOR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.BOOLOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConditionalContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COND(): TerminalNode { return this.getToken(PainlessParser.COND, 0); }
	public COLON(): TerminalNode { return this.getToken(PainlessParser.COLON, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ElvisContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ELVIS(): TerminalNode { return this.getToken(PainlessParser.ELVIS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ASSIGN, 0); }
	public AADD(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.AADD, 0); }
	public ASUB(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ASUB, 0); }
	public AMUL(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.AMUL, 0); }
	public ADIV(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ADIV, 0); }
	public AREM(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.AREM, 0); }
	public AAND(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.AAND, 0); }
	public AXOR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.AXOR, 0); }
	public AOR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.AOR, 0); }
	public ALSH(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ALSH, 0); }
	public ARSH(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ARSH, 0); }
	public AUSH(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.AUSH, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class UnaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_unary; }
	public copyFrom(ctx: UnaryContext): void {
		super.copyFrom(ctx);
	}
}
export class PreContext extends UnaryContext {
	public chain(): ChainContext {
		return this.getRuleContext(0, ChainContext);
	}
	public INCR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.INCR, 0); }
	public DECR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.DECR, 0); }
	constructor(ctx: UnaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PostContext extends UnaryContext {
	public chain(): ChainContext {
		return this.getRuleContext(0, ChainContext);
	}
	public INCR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.INCR, 0); }
	public DECR(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.DECR, 0); }
	constructor(ctx: UnaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReadContext extends UnaryContext {
	public chain(): ChainContext {
		return this.getRuleContext(0, ChainContext);
	}
	constructor(ctx: UnaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorContext extends UnaryContext {
	public unary(): UnaryContext {
		return this.getRuleContext(0, UnaryContext);
	}
	public BOOLNOT(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.BOOLNOT, 0); }
	public BWNOT(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.BWNOT, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.SUB, 0); }
	constructor(ctx: UnaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CastContext extends UnaryContext {
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public decltype(): DecltypeContext {
		return this.getRuleContext(0, DecltypeContext);
	}
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	public unary(): UnaryContext {
		return this.getRuleContext(0, UnaryContext);
	}
	constructor(ctx: UnaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ChainContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_chain; }
	public copyFrom(ctx: ChainContext): void {
		super.copyFrom(ctx);
	}
}
export class DynamicContext extends ChainContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	public postfix(): PostfixContext[];
	public postfix(i: number): PostfixContext;
	public postfix(i?: number): PostfixContext | PostfixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostfixContext);
		} else {
			return this.getRuleContext(i, PostfixContext);
		}
	}
	constructor(ctx: ChainContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StaticContext extends ChainContext {
	public decltype(): DecltypeContext {
		return this.getRuleContext(0, DecltypeContext);
	}
	public postdot(): PostdotContext {
		return this.getRuleContext(0, PostdotContext);
	}
	public postfix(): PostfixContext[];
	public postfix(i: number): PostfixContext;
	public postfix(i?: number): PostfixContext | PostfixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostfixContext);
		} else {
			return this.getRuleContext(i, PostfixContext);
		}
	}
	constructor(ctx: ChainContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NewarrayContext extends ChainContext {
	public arrayinitializer(): ArrayinitializerContext {
		return this.getRuleContext(0, ArrayinitializerContext);
	}
	constructor(ctx: ChainContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_primary; }
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class PrecedenceContext extends PrimaryContext {
	public LP(): TerminalNode { return this.getToken(PainlessParser.LP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(PainlessParser.RP, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumericContext extends PrimaryContext {
	public OCTAL(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.OCTAL, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.HEX, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.INTEGER, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.DECIMAL, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TrueContext extends PrimaryContext {
	public TRUE(): TerminalNode { return this.getToken(PainlessParser.TRUE, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FalseContext extends PrimaryContext {
	public FALSE(): TerminalNode { return this.getToken(PainlessParser.FALSE, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullContext extends PrimaryContext {
	public NULL(): TerminalNode { return this.getToken(PainlessParser.NULL, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringContext extends PrimaryContext {
	public STRING(): TerminalNode { return this.getToken(PainlessParser.STRING, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RegexContext extends PrimaryContext {
	public REGEX(): TerminalNode { return this.getToken(PainlessParser.REGEX, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ListinitContext extends PrimaryContext {
	public listinitializer(): ListinitializerContext {
		return this.getRuleContext(0, ListinitializerContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MapinitContext extends PrimaryContext {
	public mapinitializer(): MapinitializerContext {
		return this.getRuleContext(0, MapinitializerContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class VariableContext extends PrimaryContext {
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CalllocalContext extends PrimaryContext {
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NewobjectContext extends PrimaryContext {
	public NEW(): TerminalNode { return this.getToken(PainlessParser.NEW, 0); }
	public TYPE(): TerminalNode { return this.getToken(PainlessParser.TYPE, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class PostfixContext extends ParserRuleContext {
	public callinvoke(): CallinvokeContext | undefined {
		return this.tryGetRuleContext(0, CallinvokeContext);
	}
	public fieldaccess(): FieldaccessContext | undefined {
		return this.tryGetRuleContext(0, FieldaccessContext);
	}
	public braceaccess(): BraceaccessContext | undefined {
		return this.tryGetRuleContext(0, BraceaccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_postfix; }
}


export class PostdotContext extends ParserRuleContext {
	public callinvoke(): CallinvokeContext | undefined {
		return this.tryGetRuleContext(0, CallinvokeContext);
	}
	public fieldaccess(): FieldaccessContext | undefined {
		return this.tryGetRuleContext(0, FieldaccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_postdot; }
}


export class CallinvokeContext extends ParserRuleContext {
	public DOTID(): TerminalNode { return this.getToken(PainlessParser.DOTID, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.DOT, 0); }
	public NSDOT(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.NSDOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_callinvoke; }
}


export class FieldaccessContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.DOT, 0); }
	public NSDOT(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.NSDOT, 0); }
	public DOTID(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.DOTID, 0); }
	public DOTINTEGER(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.DOTINTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_fieldaccess; }
}


export class BraceaccessContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PainlessParser.LBRACE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(PainlessParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_braceaccess; }
}


export class ArrayinitializerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_arrayinitializer; }
	public copyFrom(ctx: ArrayinitializerContext): void {
		super.copyFrom(ctx);
	}
}
export class NewstandardarrayContext extends ArrayinitializerContext {
	public NEW(): TerminalNode { return this.getToken(PainlessParser.NEW, 0); }
	public TYPE(): TerminalNode { return this.getToken(PainlessParser.TYPE, 0); }
	public LBRACE(): TerminalNode[];
	public LBRACE(i: number): TerminalNode;
	public LBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.LBRACE);
		} else {
			return this.getToken(PainlessParser.LBRACE, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACE(): TerminalNode[];
	public RBRACE(i: number): TerminalNode;
	public RBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.RBRACE);
		} else {
			return this.getToken(PainlessParser.RBRACE, i);
		}
	}
	public postdot(): PostdotContext | undefined {
		return this.tryGetRuleContext(0, PostdotContext);
	}
	public postfix(): PostfixContext[];
	public postfix(i: number): PostfixContext;
	public postfix(i?: number): PostfixContext | PostfixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostfixContext);
		} else {
			return this.getRuleContext(i, PostfixContext);
		}
	}
	constructor(ctx: ArrayinitializerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NewinitializedarrayContext extends ArrayinitializerContext {
	public NEW(): TerminalNode { return this.getToken(PainlessParser.NEW, 0); }
	public TYPE(): TerminalNode { return this.getToken(PainlessParser.TYPE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(PainlessParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PainlessParser.RBRACE, 0); }
	public LBRACK(): TerminalNode { return this.getToken(PainlessParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(PainlessParser.RBRACK, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public postfix(): PostfixContext[];
	public postfix(i: number): PostfixContext;
	public postfix(i?: number): PostfixContext | PostfixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostfixContext);
		} else {
			return this.getRuleContext(i, PostfixContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.COMMA);
		} else {
			return this.getToken(PainlessParser.COMMA, i);
		}
	}
	constructor(ctx: ArrayinitializerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ListinitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PainlessParser.LBRACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(PainlessParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.COMMA);
		} else {
			return this.getToken(PainlessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_listinitializer; }
}


export class MapinitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PainlessParser.LBRACE, 0); }
	public maptoken(): MaptokenContext[];
	public maptoken(i: number): MaptokenContext;
	public maptoken(i?: number): MaptokenContext | MaptokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MaptokenContext);
		} else {
			return this.getRuleContext(i, MaptokenContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(PainlessParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.COMMA);
		} else {
			return this.getToken(PainlessParser.COMMA, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_mapinitializer; }
}


export class MaptokenContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(PainlessParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_maptoken; }
}


export class ArgumentsContext extends ParserRuleContext {
	public LP(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.LP, 0); }
	public RP(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.RP, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.COMMA);
		} else {
			return this.getToken(PainlessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_arguments; }
}


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	public funcref(): FuncrefContext | undefined {
		return this.tryGetRuleContext(0, FuncrefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_argument; }
}


export class LambdaContext extends ParserRuleContext {
	public ARROW(): TerminalNode { return this.getToken(PainlessParser.ARROW, 0); }
	public lamtype(): LamtypeContext[];
	public lamtype(i: number): LamtypeContext;
	public lamtype(i?: number): LamtypeContext | LamtypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LamtypeContext);
		} else {
			return this.getRuleContext(i, LamtypeContext);
		}
	}
	public LP(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.LP, 0); }
	public RP(): TerminalNode | undefined { return this.tryGetToken(PainlessParser.RP, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.COMMA);
		} else {
			return this.getToken(PainlessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_lambda; }
}


export class LamtypeContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	public decltype(): DecltypeContext | undefined {
		return this.tryGetRuleContext(0, DecltypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_lamtype; }
}


export class FuncrefContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PainlessParser.RULE_funcref; }
	public copyFrom(ctx: FuncrefContext): void {
		super.copyFrom(ctx);
	}
}
export class ClassfuncrefContext extends FuncrefContext {
	public TYPE(): TerminalNode { return this.getToken(PainlessParser.TYPE, 0); }
	public REF(): TerminalNode { return this.getToken(PainlessParser.REF, 0); }
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	constructor(ctx: FuncrefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConstructorfuncrefContext extends FuncrefContext {
	public decltype(): DecltypeContext {
		return this.getRuleContext(0, DecltypeContext);
	}
	public REF(): TerminalNode { return this.getToken(PainlessParser.REF, 0); }
	public NEW(): TerminalNode { return this.getToken(PainlessParser.NEW, 0); }
	constructor(ctx: FuncrefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CapturingfuncrefContext extends FuncrefContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PainlessParser.ID);
		} else {
			return this.getToken(PainlessParser.ID, i);
		}
	}
	public REF(): TerminalNode { return this.getToken(PainlessParser.REF, 0); }
	constructor(ctx: FuncrefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LocalfuncrefContext extends FuncrefContext {
	public THIS(): TerminalNode { return this.getToken(PainlessParser.THIS, 0); }
	public REF(): TerminalNode { return this.getToken(PainlessParser.REF, 0); }
	public ID(): TerminalNode { return this.getToken(PainlessParser.ID, 0); }
	constructor(ctx: FuncrefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


