(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./../ast/errors", "./../ast/ast", "./../ast/astops", "../../libraries/common", "./tokenizer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./../ast/errors"), require("./../ast/ast"), require("./../ast/astops"), require("../../libraries/common"), require("./tokenizer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.errors, global.ast, global.astops, global.common, global.tokenizer);
    global.parser = mod.exports;
  }
})(this, function (exports, _fableCore, _errors, _ast, _astops, _common, _tokenizer) {
  "use strict";

  exports.__esModule = true;
  exports.OpExpr = exports.Associativity = exports.Context = undefined;
  exports.clone = clone;
  exports.next = next;
  exports.usingSilentMode = usingSilentMode;
  exports.addError = addError;
  exports.usingIndent = usingIndent;
  exports.usingTopLevelNesting = usingTopLevelNesting;
  exports.usingNonTopLevel = usingNonTopLevel;
  exports.setLineIndent = setLineIndent;
  exports.justToken = justToken;
  exports.token = token;
  exports.nestedToken = nestedToken;
  exports.node = node;
  exports.whiteAfter = whiteAfter;
  exports.whiteBefore = whiteBefore;
  exports.lastCallOrPropertyRange = lastCallOrPropertyRange;
  exports.$Identifier$_$ = $Identifier$_$;
  exports.$Let$ = $Let$;
  exports.precedence = precedence;
  exports.precClimb = precClimb;
  exports.buildExpression = buildExpression;
  exports.makeCallOrProp = makeCallOrProp;
  exports.parseChain = parseChain;
  exports.parseDotOrLParen = parseDotOrLParen;
  exports.parseMember = parseMember;
  exports.parseFunction = parseFunction;
  exports.parseTerm = parseTerm;
  exports.parseListElements = parseListElements;
  exports.parseParenTermEnd = parseParenTermEnd;
  exports.parseExpression = parseExpression;
  exports.parseExpressionOrNamedParam = parseExpressionOrNamedParam;
  exports.parseCallArgList = parseCallArgList;
  exports.parseNestedExpressions = parseNestedExpressions;
  exports.parseLetBinding = parseLetBinding;
  exports.parseCommands = parseCommands;
  exports.parseProgram = parseProgram;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Context = exports.Context = function () {
    function Context(tokens, whitespace, errors, topLevel, silent, strictlyNested, indentCurrent, indentStack, position) {
      _classCallCheck(this, Context);

      this.Tokens = tokens;
      this.Whitespace = whitespace;
      this.Errors = errors;
      this.TopLevel = topLevel;
      this.Silent = silent;
      this.StrictlyNested = strictlyNested;
      this.IndentCurrent = indentCurrent;
      this.IndentStack = indentStack;
      this.Position = position;
    }

    Context.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    return Context;
  }();

  _fableCore.Util.setInterfaces(Context.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Parser.Context");

  function clone(ctx) {
    return new Context(ctx.Tokens, Array.from(ctx.Whitespace), Array.from(ctx.Errors), ctx.TopLevel, ctx.Silent, ctx.StrictlyNested, ctx.IndentCurrent, ctx.IndentStack, ctx.Position);
  }

  function next(ctx) {
    ctx.Position = ctx.Position + 1;
  }

  function usingSilentMode(ctx) {
    var _ref;

    var prev = ctx.Silent;
    ctx.Silent = true;
    return _ref = {}, _ref[_fableCore.Symbol.interfaces] = ["System.IDisposable"], _ref.Dispose = function Dispose() {
      ctx.Silent = prev;
    }, _ref;
  }

  function addError(ctx, e) {
    if (!ctx.Silent) {
      ctx.Errors.push(e);
    }
  }

  function usingIndent(current, tok, ctx) {
    var _ref2;

    var started = function () {
      var matchValue = ctx.IndentStack;

      var $target1 = function $target1() {
        var $target1 = function $target1() {
          ctx.IndentStack = new _fableCore.List([ctx.IndentCurrent, current], ctx.IndentStack);
          return true;
        };

        if (matchValue.tail != null) {
          if (matchValue.head[1]) {
            return $target1();
          } else {
            if (function () {
              var prev = matchValue.head[0];
              return prev !== ctx.IndentCurrent;
            }()) {
              var prev = matchValue.head[0];
              throw "usingIndent: We forgot to set the top-stack line indentation";
            } else {
              return $target1();
            }
          }
        } else {
          return $target1();
        }
      };

      if (matchValue.tail != null) {
        if (matchValue.head[1]) {
          if (function () {
            var prev = matchValue.head[0];
            return prev > ctx.IndentCurrent;
          }()) {
            var prev = matchValue.head[0];

            (function (e) {
              addError(ctx, e);
            })(_errors.Parser.unindentedBlock(tok.Range, tok.Token));

            return false;
          } else {
            return $target1();
          }
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }();

    return _ref2 = {}, _ref2[_fableCore.Symbol.interfaces] = ["System.IDisposable"], _ref2.Dispose = function Dispose() {
      var matchValue = [started, ctx.IndentStack];

      if (matchValue[0]) {
        if (matchValue[1].tail != null) {
          var t = matchValue[1].head;
          var stack = matchValue[1].tail;
          ctx.IndentStack = stack;
        } else {
          throw "usingIndent: We lost item from an indentation stack";
        }
      }
    }, _ref2;
  }

  function usingTopLevelNesting(ctx) {
    var _ref3;

    var prev = ctx.StrictlyNested;
    ctx.StrictlyNested = true;
    {
      var matchValue = ctx.IndentStack;

      if (matchValue.tail != null) {
        ctx.IndentStack = new _fableCore.List([0, true], matchValue.tail);
      }
    }
    return _ref3 = {}, _ref3[_fableCore.Symbol.interfaces] = ["System.IDisposable"], _ref3.Dispose = function Dispose() {
      ctx.StrictlyNested = prev;
    }, _ref3;
  }

  function usingNonTopLevel(ctx) {
    var _ref4;

    var prev = ctx.TopLevel;
    ctx.TopLevel = false;
    return _ref4 = {}, _ref4[_fableCore.Symbol.interfaces] = ["System.IDisposable"], _ref4.Dispose = function Dispose() {
      ctx.TopLevel = prev;
    }, _ref4;
  }

  function setLineIndent(ctx, l) {
    ctx.IndentCurrent = l;
    var matchValue = ctx.IndentStack;

    var $target1 = function $target1() {
      var $target1 = function $target1() {};

      if (matchValue.tail != null) {
        if (matchValue.head[1]) {
          $target1();
        } else {
          var oldl = matchValue.head[0];
          var stack = matchValue.tail;
          ctx.IndentStack = new _fableCore.List([l, true], stack);
        }
      } else {
        $target1();
      }
    };

    if (matchValue.tail != null) {
      if (matchValue.head[1]) {
        $target1();
      } else {
        if (function () {
          var oldl = matchValue.head[0];
          return l <= oldl;
        }()) {
          var oldl = matchValue.head[0];
          var stack = matchValue.tail;
          ctx.IndentStack = new _fableCore.List([2147483647, true], stack);
        } else {
          $target1();
        }
      }
    } else {
      $target1();
    }
  }

  function justToken(ctx) {
    var current = function current(ctx_1) {
      return ctx_1.Tokens[ctx_1.Position];
    };

    var matchValue = current(ctx);

    var $target1 = function $target1(t) {
      ctx.Whitespace.push(t);
      next(ctx);
      return justToken(ctx);
    };

    if (matchValue.Token.Case === "Newline") {
      ctx.Whitespace.push(matchValue);
      next(ctx);
      {
        var matchValue_1 = current(ctx);

        if (matchValue_1.Token.Case === "White") {
          var s = matchValue_1.Token.Fields[0];
          ctx.Whitespace.push(matchValue_1);
          setLineIndent(ctx, s.length);
          next(ctx);
        } else {
          setLineIndent(ctx, 0);
        }
      }
      return justToken(ctx);
    } else {
      if (matchValue.Token.Case === "Error") {
        return $target1(matchValue);
      } else {
        if (matchValue.Token.Case === "White") {
          return $target1(matchValue);
        } else {
          return matchValue;
        }
      }
    }
  }

  function token(ctx) {
    var t = justToken(ctx);

    var white = _fableCore.Seq.toList(ctx.Whitespace);

    ctx.Whitespace.splice(0);
    return [white, t];
  }

  function nestedToken(ctx) {
    var white = function white(unitVar0) {
      var white = _fableCore.Seq.toList(ctx.Whitespace);

      ctx.Whitespace.splice(0);
      return white;
    };

    var t = justToken(ctx);
    var matchValue = ctx.IndentStack;

    var $target1 = function $target1() {
      return matchValue.tail == null ? [white(), t] : null;
    };

    if (matchValue.tail != null) {
      if (function () {
        var indent = matchValue.head[0];

        if (ctx.IndentCurrent > indent) {
          return true;
        } else {
          if (!ctx.StrictlyNested) {
            return ctx.IndentCurrent === indent;
          } else {
            return false;
          }
        }
      }()) {
        var indent = matchValue.head[0];
        return [white(), t];
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function node(rng, n) {
    return new _ast.Node(new _fableCore.List(), new _fableCore.List(), rng, n);
  }

  function whiteAfter(w, n) {
    var WhiteAfter = _fableCore.List.append(n.WhiteAfter, w);

    return new _ast.Node(n.WhiteBefore, WhiteAfter, n.Range, n.Node, n.Entity);
  }

  function whiteBefore(w, n) {
    return new _ast.Node(_fableCore.List.append(w, n.WhiteBefore), n.WhiteAfter, n.Range, n.Node, n.Entity);
  }

  function lastCallOrPropertyRange(expr, id) {
    var $target0 = function $target0(id_1) {
      return id_1.Range;
    };

    if (expr.Node.Case === "Call") {
      return $target0(expr.Node.Fields[1]);
    } else {
      if (expr.Node.Case === "Property") {
        return $target0(expr.Node.Fields[1]);
      } else {
        return expr.Range;
      }
    }
  }

  function $Identifier$_$(t_0, t_1) {
    var t = [t_0, t_1];

    var $target0 = function $target0(id, rng, white) {
      return function (n) {
        return whiteBefore(white, n);
      }(node(rng, new _ast.Name(id)));
    };

    if (t[1].Token.Case === "Ident") {
      return $target0(t[1].Token.Fields[0], t[1].Range, t[0]);
    } else {
      if (t[1].Token.Case === "QIdent") {
        return $target0(t[1].Token.Fields[0], t[1].Range, t[0]);
      }
    }
  }

  function $Let$(a, b) {
    return [a, b];
  }

  var Associativity = exports.Associativity = function () {
    function Associativity(caseName, fields) {
      _classCallCheck(this, Associativity);

      this.Case = caseName;
      this.Fields = fields;
    }

    Associativity.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    Associativity.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return Associativity;
  }();

  _fableCore.Util.setInterfaces(Associativity.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Parser.Associativity");

  function precedence(_arg1) {
    var $target1 = function $target1() {
      return [1, new Associativity("Left", [])];
    };

    var $target2 = function $target2() {
      return [2, new Associativity("Left", [])];
    };

    var $target3 = function $target3() {
      return [3, new Associativity("Left", [])];
    };

    if (_arg1.Case === "GreaterThan") {
      return $target1();
    } else {
      if (_arg1.Case === "GreaterThanOrEqual") {
        return $target1();
      } else {
        if (_arg1.Case === "LessThan") {
          return $target1();
        } else {
          if (_arg1.Case === "LessThanOrEqual") {
            return $target1();
          } else {
            if (_arg1.Case === "Plus") {
              return $target2();
            } else {
              if (_arg1.Case === "Minus") {
                return $target2();
              } else {
                if (_arg1.Case === "Multiply") {
                  return $target3();
                } else {
                  if (_arg1.Case === "Divide") {
                    return $target3();
                  } else {
                    if (_arg1.Case === "Power") {
                      return [4, new Associativity("Right", [])];
                    } else {
                      return [0, new Associativity("Left", [])];
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  var OpExpr = exports.OpExpr = function OpExpr(caseName, fields) {
    _classCallCheck(this, OpExpr);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(OpExpr.prototype, ["FSharpUnion"], "TheGamma.Parser.OpExpr");

  function precClimb(minPrec, _arg1) {
    var loop = function loop(result) {
      return function (next_1) {
        var $target1 = function $target1() {
          return [result, next_1];
        };

        if (next_1 != null) {
          if (function () {
            var op = next_1[0];
            var next_2 = next_1[1];
            return precedence(op.Node)[0] >= minPrec;
          }()) {
            var next_2 = next_1[1];
            var op = next_1[0];
            {
              var patternInput = precedence(op.Node);
              var nextMinPrec = patternInput[1].Equals(new Associativity("Left", [])) ? patternInput[0] + 1 : patternInput[0];
              var patternInput_1 = precClimb(nextMinPrec, next_2);
              var result_1 = node((0, _astops.unionRanges)(result.Range, patternInput_1[0].Range), new _ast.Expr("Binary", [result, op, patternInput_1[0]]));
              return loop(result_1)(patternInput_1[1]);
            }
          } else {
            return $target1();
          }
        } else {
          return $target1();
        }
      };
    };

    return loop(_arg1.Fields[0])(_arg1.Fields[1]);
  }

  function buildExpression(terms, term) {
    return precClimb(0, _fableCore.Seq.fold(function (oe, tupledArg) {
      return new OpExpr("OpExpr", [tupledArg[0], [tupledArg[1], oe]]);
    }, new OpExpr("OpExpr", [term, null]), terms))[0];
  }

  function makeCallOrProp(optInst, prevId, prevArgs) {
    var matchValue = [optInst, prevArgs];

    var $target2 = function $target2(prevArgs_1) {
      var fullRng = optInst != null ? (0, _astops.unionRanges)(optInst.Range, prevArgs_1.Range) : (0, _astops.unionRanges)(prevId.Range, prevArgs_1.Range);
      return node(fullRng, new _ast.Expr("Call", [optInst, prevId, prevArgs_1]));
    };

    if (matchValue[0] == null) {
      if (matchValue[1] != null) {
        return $target2(matchValue[1]);
      } else {
        return node(prevId.Range, new _ast.Expr("Variable", [prevId]));
      }
    } else {
      if (matchValue[1] != null) {
        return $target2(matchValue[1]);
      } else {
        var inst = matchValue[0];
        return node((0, _astops.unionRanges)(inst.Range, prevId.Range), new _ast.Expr("Property", [inst, prevId]));
      }
    }
  }

  function parseChain(dotRng, optInst, prevId, prevArgs, prevWhite, ctx) {
    var inst = function (n) {
      return whiteAfter(prevWhite, n);
    }(makeCallOrProp(optInst, prevId, prevArgs));

    var emptyRng = new _ast.Range(dotRng.End + 1, dotRng.End + 1);
    var emptyMember = node(emptyRng, new _ast.Expr("Property", [inst, node(emptyRng, new _ast.Name(""))]));
    var matchValue = nestedToken(ctx);

    var $target1 = function $target1() {
      return matchValue == null ? function () {
        var matchValue_1 = token(ctx);
        var activePatternResult4857 = $Identifier$_$(matchValue_1[0], matchValue_1[1]);

        if (activePatternResult4857 != null) {
          var _ret = function () {
            var id = activePatternResult4857;

            var rng = function rng(id_1) {
              return lastCallOrPropertyRange(inst, id_1);
            };

            (function (e) {
              addError(ctx, e);
            })(_errors.Parser.unindentedIdentifierAfterDot(id.Range, rng, id.Node.Name));

            var matchValue_2 = [ctx.TopLevel, ctx.IndentStack];

            var $target1 = function $target1() {
              return emptyMember;
            };

            if (matchValue_2[0]) {
              return {
                v: $target1()
              };
            } else {
              if (matchValue_2[1].tail != null) {
                if (function () {
                  var stack = matchValue_2[1].tail;
                  var sl = matchValue_2[1].head[0];
                  var si = matchValue_2[1].head[1];
                  return ctx.IndentCurrent > 0;
                }()) {
                  var si = matchValue_2[1].head[1];
                  var sl = matchValue_2[1].head[0];
                  var stack = matchValue_2[1].tail;
                  {
                    next(ctx);
                    ctx.IndentStack = new _fableCore.List([ctx.IndentCurrent, si], stack);
                    return {
                      v: parseMember(inst, id, ctx)
                    };
                  }
                } else {
                  return {
                    v: $target1()
                  };
                }
              } else {
                return {
                  v: $target1()
                };
              }
            }
          }();

          if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
        } else {
          var _rng = function _rng(id) {
            return lastCallOrPropertyRange(inst, id);
          };

          (function (e) {
            addError(ctx, e);
          })(_errors.Parser.unexpectedScopeEndAfterDot(matchValue_1[1].Range, _rng, matchValue_1[1].Token));

          return emptyMember;
        }
      }() : function () {
        var t = matchValue[1];

        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.unexpectedTokenAfterDot(t.Range, t.Token));

        if (t.Token.Equals(new _ast.TokenKind("EndOfFile", []))) {
          return emptyMember;
        } else {
          next(ctx);

          var _silent = usingSilentMode(ctx);

          try {
            return parseMember(inst, node(emptyRng, new _ast.Name("")), ctx);
          } finally {
            if (_fableCore.Util.hasInterface(_silent, "System.IDisposable")) {
              _silent.Dispose();
            }
          }
        }
      }();
    };

    if (matchValue != null) {
      var activePatternResult4858 = $Identifier$_$(matchValue[0], matchValue[1]);

      if (activePatternResult4858 != null) {
        var id = activePatternResult4858;
        next(ctx);
        return parseMember(inst, id, ctx);
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function parseDotOrLParen(optInst, id, ctx, tok) {
    return tok.Token.Case === "LParen" ? function () {
      next(ctx);

      var _top = usingNonTopLevel(ctx);

      try {
        var _ret2 = function () {
          var patternInput = parseCallArgList(false, tok.Range, new _fableCore.List(), ctx);

          var args = function (n) {
            return whiteAfter(patternInput[1], n);
          }(node((0, _astops.unionRanges)(tok.Range, patternInput[0]), patternInput[2]));

          var matchValue = nestedToken(ctx);

          var $target1 = function $target1() {
            return makeCallOrProp(optInst, id, args);
          };

          if (matchValue != null) {
            if (matchValue[1].Token.Case === "Dot") {
              var dotRng = matchValue[1].Range;
              var whiteAfterArgs = matchValue[0];
              {
                next(ctx);
                return {
                  v: parseChain(dotRng, optInst, id, args, whiteAfterArgs, ctx)
                };
              }
            } else {
              return {
                v: $target1()
              };
            }
          } else {
            return {
              v: $target1()
            };
          }
        }();

        if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
      } finally {
        if (_fableCore.Util.hasInterface(_top, "System.IDisposable")) {
          _top.Dispose();
        }
      }
    }() : tok.Token.Case === "Dot" ? function () {
      next(ctx);
      return parseChain(tok.Range, optInst, id, null, new _fableCore.List(), ctx);
    }() : null;
  }

  function parseMember(optInst, id, ctx) {
    var parsed = function () {
      var matchValue = nestedToken(ctx);

      if (matchValue != null) {
        var white = matchValue[0];
        var res = matchValue[1];
        return parseDotOrLParen(optInst, whiteAfter(white, id), ctx, res);
      } else {
        var _ret3 = function () {
          var patternInput = token(ctx);

          var matchValue_1 = function () {
            var _silent = usingSilentMode(ctx);

            try {
              return parseDotOrLParen(optInst, whiteAfter(patternInput[0], id), ctx, patternInput[1]);
            } finally {
              if (_fableCore.Util.hasInterface(_silent, "System.IDisposable")) {
                _silent.Dispose();
              }
            }
          }();

          if (matchValue_1 != null) {
            (function (e) {
              addError(ctx, e);
            })(_errors.Parser.unindentedDotAfterIdentifier(id.Range, patternInput[1].Range));

            return {
              v: matchValue_1
            };
          }
        }();

        if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
      }
    }();

    if (parsed == null) {
      if (optInst == null) {
        return node(id.Range, new _ast.Expr("Variable", [id]));
      } else {
        return node((0, _astops.unionRanges)(optInst.Range, id.Range), new _ast.Expr("Property", [optInst, id]));
      }
    } else {
      return parsed;
    }
  }

  function parseFunction(ctx, funRng) {
    var matchValue = nestedToken(ctx);

    var $target1 = function $target1() {
      return matchValue == null ? function () {
        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.unexpectedScopeEndInFunc(funRng));

        var rng = new _ast.Range(funRng.End, funRng.End);
        return node(rng, new _ast.Expr("Function", [node(rng, new _ast.Name("")), node(rng, new _ast.Expr("Empty", []))]));
      }() : function () {
        var white = matchValue[0];
        var t = matchValue[1];

        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.unexpectedTokenAfterFun(t.Range, t.Token));

        var rng = new _ast.Range(funRng.End, funRng.End);
        return function (n) {
          return whiteBefore(white, n);
        }(node(rng, new _ast.Expr("Function", [node(rng, new _ast.Name("")), node(rng, new _ast.Expr("Empty", []))])));
      }();
    };

    if (matchValue != null) {
      var activePatternResult4880 = $Identifier$_$(matchValue[0], matchValue[1]);

      if (activePatternResult4880 != null) {
        var _ret4 = function () {
          var id = activePatternResult4880;
          next(ctx);
          var matchValue_1 = nestedToken(ctx);

          var $target1_1 = function $target1_1(nt) {
            var patternInput = nt != null ? function () {
              var whiteAfterId = nt[0];
              var t = nt[1];
              return [t.Range, whiteAfterId];
            }() : [(0, _astops.unionRanges)(funRng, id.Range), new _fableCore.List()];

            (function (e) {
              addError(ctx, e);
            })(_errors.Parser.missingArrowInFunc(patternInput[0]));

            var body = function () {
              var matchValue_2 = parseExpression(new _fableCore.List(), ctx);

              if (matchValue_2 != null) {
                return matchValue_2;
              } else {
                return node(new _ast.Range(id.Range.End, id.Range.End), new _ast.Expr("Empty", []));
              }
            }();

            return node((0, _astops.unionRanges)(funRng, body.Range), new _ast.Expr("Function", [id, whiteBefore(patternInput[1], body)]));
          };

          if (matchValue_1 != null) {
            if (matchValue_1[1].Token.Case === "Arrow") {
              var _ret5 = function () {
                var rngEq = matchValue_1[1].Range;
                var whiteAfterId = matchValue_1[0];
                {
                  next(ctx);

                  var body = function () {
                    var matchValue_2 = parseExpression(new _fableCore.List(), ctx);

                    if (matchValue_2 != null) {
                      return matchValue_2;
                    } else {
                      (function (e) {
                        addError(ctx, e);
                      })(_errors.Parser.missingBodyOfFunc((0, _astops.unionRanges)(funRng, rngEq)));

                      return node(new _ast.Range(rngEq.End, rngEq.End), new _ast.Expr("Empty", []));
                    }
                  }();

                  var rng = (0, _astops.unionRanges)(funRng, body.Range);
                  return {
                    v: {
                      v: node(rng, new _ast.Expr("Function", [whiteAfter(whiteAfterId, id), body]))
                    }
                  };
                }
              }();

              if ((typeof _ret5 === "undefined" ? "undefined" : _typeof(_ret5)) === "object") return _ret5.v;
            } else {
              return {
                v: $target1_1(matchValue_1)
              };
            }
          } else {
            return {
              v: $target1_1(matchValue_1)
            };
          }
        }();

        if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function parseTerm(ctx) {
    var matchValue = nestedToken(ctx);

    var $target1 = function $target1() {
      var $target6 = function $target6() {
        return null;
      };

      if (matchValue != null) {
        if (matchValue[1].Token.Case === "Number") {
          var _ret6 = function () {
            var n = matchValue[1].Token.Fields[1];
            var r = matchValue[1].Range;
            var white = matchValue[0];
            {
              next(ctx);
              return {
                v: function (n_1) {
                  return whiteAfter(white, n_1);
                }(node(r, new _ast.Expr("Number", [n])))
              };
            }
          }();

          if ((typeof _ret6 === "undefined" ? "undefined" : _typeof(_ret6)) === "object") return _ret6.v;
        } else {
          if (matchValue[1].Token.Case === "String") {
            var _ret7 = function () {
              var r = matchValue[1].Range;
              var s = matchValue[1].Token.Fields[0];
              var white = matchValue[0];
              {
                next(ctx);
                return {
                  v: function (n) {
                    return whiteAfter(white, n);
                  }(node(r, new _ast.Expr("String", [s])))
                };
              }
            }();

            if ((typeof _ret7 === "undefined" ? "undefined" : _typeof(_ret7)) === "object") return _ret7.v;
          } else {
            if (matchValue[1].Token.Case === "Boolean") {
              var _ret8 = function () {
                var b = matchValue[1].Token.Fields[0];
                var r = matchValue[1].Range;
                var white = matchValue[0];
                {
                  next(ctx);
                  return {
                    v: function (n) {
                      return whiteAfter(white, n);
                    }(node(r, new _ast.Expr("Boolean", [b])))
                  };
                }
              }();

              if ((typeof _ret8 === "undefined" ? "undefined" : _typeof(_ret8)) === "object") return _ret8.v;
            } else {
              if (matchValue[1].Token.Case === "LParen") {
                var t = matchValue[1];
                var _white = matchValue[0];
                {
                  next(ctx);
                  return parseParenTermEnd(new _fableCore.List(t, _fableCore.List.reverse(_white)), new _fableCore.List(), parseExpression(new _fableCore.List(), ctx), ctx);
                }
              } else {
                if (matchValue[1].Token.Case === "LSquare") {
                  var _t = matchValue[1];
                  var _white2 = matchValue[0];
                  {
                    next(ctx);

                    var _nest = usingNonTopLevel(ctx);

                    try {
                      return parseListElements(false, _t.Range, _white2, _t.Range, new _fableCore.List(), ctx);
                    } finally {
                      if (_fableCore.Util.hasInterface(_nest, "System.IDisposable")) {
                        _nest.Dispose();
                      }
                    }
                  }
                } else {
                  if (matchValue[1].Token.Case === "Fun") {
                    var _t2 = matchValue[1];
                    var _white3 = matchValue[0];
                    {
                      next(ctx);
                      return parseFunction(ctx, _t2.Range);
                    }
                  } else {
                    return $target6();
                  }
                }
              }
            }
          }
        }
      } else {
        return $target6();
      }
    };

    if (matchValue != null) {
      var activePatternResult4890 = $Identifier$_$(matchValue[0], matchValue[1]);

      if (activePatternResult4890 != null) {
        var id = activePatternResult4890;
        var tok = matchValue[1];
        {
          next(ctx);

          var _indent = usingIndent(false, tok, ctx);

          try {
            var varOrCall = parseMember(null, id, ctx);
            return varOrCall;
          } finally {
            if (_fableCore.Util.hasInterface(_indent, "System.IDisposable")) {
              _indent.Dispose();
            }
          }
        }
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function parseListElements(expectMore, lastRng, whiteStart, startRng, acc, ctx) {
    var patternInput = function () {
      var matchValue = parseExpression(new _fableCore.List(), ctx);

      if (matchValue != null) {
        return [true, function (white) {
          return new _fableCore.List(whiteAfter(white, matchValue), acc);
        }];
      } else {
        return [false, function (_arg1) {
          return acc;
        }];
      }
    }();

    var matchValue = nestedToken(ctx);

    var $target3 = function $target3() {
      (function (e) {
        addError(ctx, e);
      })(_errors.Parser.unexpectedScopeEndInList(lastRng));

      return node((0, _astops.unionRanges)(startRng, lastRng), new _ast.Expr("List", [_fableCore.List.reverse(patternInput[1](new _fableCore.List()))]));
    };

    if (matchValue != null) {
      if (matchValue[1].Token.Case === "RSquare") {
        var _ret9 = function () {
          var endRng = matchValue[1].Range;
          var white = matchValue[0];
          {
            next(ctx);
            return {
              v: function (n) {
                return whiteBefore(white, n);
              }(node((0, _astops.unionRanges)(startRng, endRng), new _ast.Expr("List", [_fableCore.List.reverse(patternInput[1](new _fableCore.List()))])))
            };
          }
        }();

        if ((typeof _ret9 === "undefined" ? "undefined" : _typeof(_ret9)) === "object") return _ret9.v;
      } else {
        if (matchValue[1].Token.Case === "Comma") {
          var lastRng_1 = matchValue[1].Range;
          var _white4 = matchValue[0];
          {
            next(ctx);

            if (!patternInput[0] ? expectMore : false) {
              (function (e) {
                addError(ctx, e);
              })(_errors.Parser.unexpectedTokenInList(lastRng_1, new _ast.TokenKind("Comma", [])));
            }

            return parseListElements(true, lastRng_1, whiteStart, startRng, patternInput[1](_white4), ctx);
          }
        } else {
          if (function () {
            var t = matchValue[1];
            return !t.Token.Equals(new _ast.TokenKind("EndOfFile", []));
          }()) {
            var t = matchValue[1];
            next(ctx);

            (function (e) {
              addError(ctx, e);
            })(_errors.Parser.unexpectedTokenInList(t.Range, t.Token));

            return parseListElements(expectMore, t.Range, whiteStart, startRng, patternInput[1](new _fableCore.List()), ctx);
          } else {
            return $target3();
          }
        }
      }
    } else {
      return $target3();
    }
  }

  function parseParenTermEnd(wb, wa, bodyOpt, ctx) {
    var makeBody = function makeBody(wa_1) {
      var body = bodyOpt == null ? function () {
        var rng = function (list) {
          return _fableCore.Seq.reduce(function (r1, r2) {
            return (0, _astops.unionRanges)(r1, r2);
          }, list);
        }(_fableCore.List.map(function (t) {
          return t.Range;
        }, _fableCore.List.append(_fableCore.List.ofArray([wb.head]), wa_1)));

        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.missingParenthesizedExpr(rng));

        return node(rng, new _ast.Expr("Empty", []));
      }() : bodyOpt;
      return whiteAfter(_fableCore.List.reverse(wa_1), whiteBefore(_fableCore.List.reverse(wb), body));
    };

    var matchValue = nestedToken(ctx);

    if (matchValue == null) {
      var rng = bodyOpt != null ? bodyOpt.Range : wb.head.Range;

      (function (e) {
        addError(ctx, e);
      })(_errors.Parser.unindentedTokenInParenthesizedExpr(rng));

      return makeBody(wa);
    } else {
      if (matchValue[1].Token.Case === "RParen") {
        var t = matchValue[1];
        var white = matchValue[0];
        {
          next(ctx);
          return makeBody(new _fableCore.List(t, _fableCore.List.append(_fableCore.List.reverse(white), wa)));
        }
      } else {
        var _t3 = matchValue[1];
        var _white5 = matchValue[0];
        {
          next(ctx);

          (function (e) {
            addError(ctx, e);
          })(_errors.Parser.unexpectedTokenInParenthesizedExpr(_t3.Range, _t3.Token));

          return parseParenTermEnd(wb, new _fableCore.List(_t3, _fableCore.List.append(_fableCore.List.reverse(_white5), wa)), bodyOpt, ctx);
        }
      }
    }
  }

  function parseExpression(terms, ctx) {
    var matchValue = [terms, parseTerm(ctx)];

    if (matchValue[1] == null) {
      if (matchValue[0].tail != null) {
        var terms_1 = matchValue[0].tail;
        var term = matchValue[0].head[0];
        var op = matchValue[0].head[1];
        var next_1 = justToken(ctx);

        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.unexpectedTokenAfterOperator(next_1.Range, new _ast.TokenKind("Operator", [op.Node]), next_1.Token));

        return buildExpression(terms_1, term);
      }
    } else {
      var _ret10 = function () {
        var term = matchValue[1];
        var matchValue_1 = nestedToken(ctx);

        var $target2 = function $target2() {
          return buildExpression(matchValue[0], term);
        };

        if (matchValue_1 != null) {
          if (matchValue_1[1].Token.Case === "Equals") {
            var t = matchValue_1[1];
            var white = matchValue_1[0];
            {
              next(ctx);
              return {
                v: parseExpression(new _fableCore.List([term, whiteBefore(white, node(t.Range, new _ast.Operator("Equals", [])))], matchValue[0]), ctx)
              };
            }
          } else {
            if (matchValue_1[1].Token.Case === "Operator") {
              var _op = matchValue_1[1].Token.Fields[0];
              var _t4 = matchValue_1[1];
              var _white6 = matchValue_1[0];
              {
                next(ctx);
                return {
                  v: parseExpression(new _fableCore.List([term, whiteBefore(_white6, node(_t4.Range, _op))], matchValue[0]), ctx)
                };
              }
            } else {
              return {
                v: $target2()
              };
            }
          }
        } else {
          return {
            v: $target2()
          };
        }
      }();

      if ((typeof _ret10 === "undefined" ? "undefined" : _typeof(_ret10)) === "object") return _ret10.v;
    }
  }

  function parseExpressionOrNamedParam(ctx) {
    var lookAheadCtx = clone(ctx);
    var matchValue = nestedToken(lookAheadCtx);

    var $target1 = function $target1() {
      return new _fableCore.Choice("Choice2Of2", [parseExpression(new _fableCore.List(), ctx)]);
    };

    if (matchValue != null) {
      var activePatternResult4910 = $Identifier$_$(matchValue[0], matchValue[1]);

      if (activePatternResult4910 != null) {
        var id = activePatternResult4910;
        next(lookAheadCtx);
        var matchValue_1 = nestedToken(lookAheadCtx);

        var $target1_1 = function $target1_1() {
          return new _fableCore.Choice("Choice2Of2", [parseExpression(new _fableCore.List(), ctx)]);
        };

        if (matchValue_1 != null) {
          if (matchValue_1[1].Token.Case === "Equals") {
            var t = matchValue_1[1];
            var white = matchValue_1[0];
            {
              nestedToken(ctx);
              next(ctx);
              nestedToken(ctx);
              next(ctx);
              var matchValue_2 = parseExpression(new _fableCore.List(), ctx);

              if (matchValue_2 == null) {
                (function (e) {
                  addError(ctx, e);
                })(_errors.Parser.unexpectedTokenInArgList(t.Range, t.Token));

                return new _fableCore.Choice("Choice2Of2", [node(id.Range, new _ast.Expr("Variable", [id]))]);
              } else {
                return new _fableCore.Choice("Choice1Of2", [[whiteAfter(white, id), matchValue_2]]);
              }
            }
          } else {
            return $target1_1();
          }
        } else {
          return $target1_1();
        }
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function parseCallArgList(expectMore, lastRng, acc, ctx) {
    var patternInput = function () {
      var matchValue = parseExpressionOrNamedParam(ctx);

      if (matchValue.Case === "Choice1Of2") {
        var e = matchValue.Fields[0][1];
        var id = matchValue.Fields[0][0];
        return [true, new _fableCore.List(new _ast.Argument(id, e), acc)];
      } else {
        if (matchValue.Fields[0] != null) {
          var _e = matchValue.Fields[0];
          return [true, new _fableCore.List(new _ast.Argument(null, _e), acc)];
        } else {
          return [false, acc];
        }
      }
    }();

    var matchValue = nestedToken(ctx);

    var $target2 = function $target2() {
      var $target1 = function $target1() {
        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.unexpectedScopeEndInArgList(lastRng));

        return [lastRng, new _fableCore.List(), _fableCore.List.reverse(patternInput[1])];
      };

      if (matchValue != null) {
        if (function () {
          var t = matchValue[1];
          return !t.Token.Equals(new _ast.TokenKind("EndOfFile", []));
        }()) {
          var t = matchValue[1];
          next(ctx);

          (function (e) {
            addError(ctx, e);
          })(_errors.Parser.unexpectedTokenInArgList(t.Range, t.Token));

          return parseCallArgList(expectMore, t.Range, patternInput[1], ctx);
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    };

    if (matchValue != null) {
      if (matchValue[1].Token.Case === "RParen") {
        var t = matchValue[1];
        var white = matchValue[0];
        {
          next(ctx);

          if (expectMore ? !patternInput[0] : false) {
            (function (e) {
              addError(ctx, e);
            })(_errors.Parser.unexpectedTokenInArgList(lastRng, new _ast.TokenKind("RParen", [])));
          }

          return [t.Range, white, _fableCore.List.reverse(patternInput[1])];
        }
      } else {
        if (matchValue[1].Token.Case === "Comma") {
          if (function () {
            var white = matchValue[0];
            var lastRng_1 = matchValue[1].Range;
            return patternInput[0];
          }()) {
            var lastRng_1 = matchValue[1].Range;
            var _white7 = matchValue[0];
            {
              next(ctx);
              return parseCallArgList(true, lastRng_1, patternInput[1], ctx);
            }
          } else {
            return $target2();
          }
        } else {
          return $target2();
        }
      }
    } else {
      return $target2();
    }
  }

  function parseNestedExpressions(wacc, acc, ctx) {
    var matchValue = parseExpression(new _fableCore.List(), ctx);

    if (matchValue != null) {
      if (!(acc.tail == null)) {
        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.nestedExpressionInCommand(matchValue.Range));

        return parseNestedExpressions(new _fableCore.List(), new _fableCore.List(whiteBefore(_fableCore.List.reverse(wacc), matchValue), acc), ctx);
      } else {
        var _strict = usingTopLevelNesting(ctx);

        try {
          return parseNestedExpressions(new _fableCore.List(), new _fableCore.List(whiteBefore(_fableCore.List.reverse(wacc), matchValue), acc), ctx);
        } finally {
          if (_fableCore.Util.hasInterface(_strict, "System.IDisposable")) {
            _strict.Dispose();
          }
        }
      }
    } else {
      var matchValue_1 = nestedToken(ctx);

      var $target0 = function $target0() {
        return acc.tail == null ? new _fableCore.List() : new _fableCore.List(whiteAfter(_fableCore.List.reverse(wacc), acc.head), acc.tail);
      };

      if (matchValue_1 == null) {
        return $target0();
      } else {
        if (matchValue_1[1].Token.Case === "EndOfFile") {
          return $target0();
        } else {
          var tok = matchValue_1[1];
          var white = matchValue_1[0];
          {
            next(ctx);
            return parseNestedExpressions(_fableCore.List.append(new _fableCore.List(tok, _fableCore.List.reverse(white)), wacc), acc, ctx);
          }
        }
      }
    }
  }

  function parseLetBinding(whiteBeforeLet, rngLet, ctx) {
    var matchValue = nestedToken(ctx);

    var $target1 = function $target1() {
      return matchValue == null ? function () {
        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.missingBodyInLetBinding(rngLet));

        var rng = new _ast.Range(rngLet.End, rngLet.End);
        return [new _fableCore.List(), function (n) {
          return whiteBefore(whiteBeforeLet, n);
        }(node(rng, new _ast.Command("Let", [node(rng, new _ast.Name("")), node(rng, new _ast.Expr("Empty", []))])))];
      }() : function () {
        var whiteAfterLet = matchValue[0];
        var t = matchValue[1];

        (function (e) {
          addError(ctx, e);
        })(_errors.Parser.unexpectedTokenInLetBinding(t.Range, t.Token));

        var letEndRng = new _ast.Range(rngLet.End, rngLet.End);

        var patternInput = function () {
          var matchValue_1 = _fableCore.List.reverse(parseNestedExpressions(new _fableCore.List(), new _fableCore.List(), ctx));

          if (matchValue_1.tail == null) {
            return [node(letEndRng, new _ast.Expr("Empty", [])), new _fableCore.List()];
          } else {
            return [matchValue_1.head, matchValue_1.tail];
          }
        }();

        return [patternInput[1], function (n) {
          return whiteBefore(whiteBeforeLet, n);
        }(node((0, _astops.unionRanges)(rngLet, patternInput[0].Range), new _ast.Command("Let", [whiteBefore(whiteAfterLet, node(letEndRng, new _ast.Name(""))), patternInput[0]])))];
      }();
    };

    if (matchValue != null) {
      var activePatternResult4921 = $Identifier$_$(matchValue[0], matchValue[1]);

      if (activePatternResult4921 != null) {
        var _ret11 = function () {
          var id = activePatternResult4921;
          next(ctx);
          var matchValue_1 = nestedToken(ctx);

          if (matchValue_1 == null) {
            (function (e) {
              addError(ctx, e);
            })(_errors.Parser.missingBodyInLetBinding(id.Range));

            var body = node(new _ast.Range(id.Range.End, id.Range.End), new _ast.Expr("Empty", []));
            return {
              v: [new _fableCore.List(), function (n) {
                return whiteBefore(whiteBeforeLet, n);
              }(node((0, _astops.unionRanges)(rngLet, id.Range), new _ast.Command("Let", [id, body])))]
            };
          } else {
            if (matchValue_1[1].Token.Case === "Equals") {
              var rngEq = matchValue_1[1].Range;
              var whiteAfterId = matchValue_1[0];
              {
                next(ctx);

                var matchValue_2 = _fableCore.List.reverse(parseNestedExpressions(new _fableCore.List(), new _fableCore.List(), ctx));

                if (matchValue_2.tail == null) {
                  (function (e) {
                    addError(ctx, e);
                  })(_errors.Parser.missingBodyInLetBinding((0, _astops.unionRanges)(rngLet, rngEq)));

                  return {
                    v: [new _fableCore.List(), function (n) {
                      return whiteBefore(whiteBeforeLet, n);
                    }(node((0, _astops.unionRanges)(rngLet, rngEq), new _ast.Command("Let", [whiteAfter(whiteAfterId, id), node(new _ast.Range(rngEq.End, rngEq.End), new _ast.Expr("Empty", []))])))]
                  };
                } else {
                  return {
                    v: [matchValue_2.tail, function (n) {
                      return whiteBefore(whiteBeforeLet, n);
                    }(node((0, _astops.unionRanges)(rngLet, matchValue_2.head.Range), new _ast.Command("Let", [whiteAfter(whiteAfterId, id), matchValue_2.head])))]
                  };
                }
              }
            } else {
              var t = matchValue_1[1];
              var _whiteAfterId = matchValue_1[0];
              {
                (function (e) {
                  addError(ctx, e);
                })(_errors.Parser.unexpectedTokenInLetBinding(t.Range, t.Token));

                var patternInput = function () {
                  var matchValue_2 = _fableCore.List.reverse(parseNestedExpressions(new _fableCore.List(), new _fableCore.List(), ctx));

                  if (matchValue_2.tail == null) {
                    return [node(new _ast.Range(id.Range.End, id.Range.End), new _ast.Expr("Empty", [])), new _fableCore.List()];
                  } else {
                    return [matchValue_2.head, matchValue_2.tail];
                  }
                }();

                return {
                  v: [patternInput[1], function (n) {
                    return whiteBefore(whiteBeforeLet, n);
                  }(node((0, _astops.unionRanges)(rngLet, id.Range), new _ast.Command("Let", [whiteAfter(_whiteAfterId, id), patternInput[0]])))]
                };
              }
            }
          }
        }();

        if ((typeof _ret11 === "undefined" ? "undefined" : _typeof(_ret11)) === "object") return _ret11.v;
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function parseCommands(acc, ctx) {
    var c = token(ctx);

    if (c[1].Token.Case === "Let") {
      var _ret12 = function () {
        var rngLet = c[1].Range;
        next(ctx);

        var patternInput = function () {
          var _indent = usingIndent(false, c[1], ctx);

          try {
            return parseLetBinding(c[0], rngLet, ctx);
          } finally {
            if (_fableCore.Util.hasInterface(_indent, "System.IDisposable")) {
              _indent.Dispose();
            }
          }
        }();

        var rest = _fableCore.List.map(function (e) {
          return node(e.Range, new _ast.Command("Expr", [e]));
        }, patternInput[0]);

        return {
          v: parseCommands(_fableCore.List.append(rest, new _fableCore.List(patternInput[1], acc)), ctx)
        };
      }();

      if ((typeof _ret12 === "undefined" ? "undefined" : _typeof(_ret12)) === "object") return _ret12.v;
    } else {
      if (c[1].Token.Case === "EndOfFile") {
        if (acc.tail == null) {
          return new _fableCore.List();
        } else {
          return _fableCore.List.reverse(new _fableCore.List(new _ast.Node(acc.head.WhiteBefore, c[0], acc.head.Range, acc.head.Node, acc.head.Entity), acc.tail));
        }
      } else {
        var cmds = function () {
          var _indent = usingIndent(true, c[1], ctx);

          try {
            return _fableCore.List.map(function (expr) {
              return node(expr.Range, new _ast.Command("Expr", [expr]));
            }, parseNestedExpressions(_fableCore.List.reverse(c[0]), new _fableCore.List(), ctx));
          } finally {
            if (_fableCore.Util.hasInterface(_indent, "System.IDisposable")) {
              _indent.Dispose();
            }
          }
        }();

        return parseCommands(_fableCore.List.append(cmds, acc), ctx);
      }
    }
  }

  function parseProgram(input) {
    try {
      var _ret13 = function () {
        var patternInput = (0, _tokenizer.tokenize)(input);

        var ctx = function () {
          var TopLevel = true;
          var Silent = false;
          var StrictlyNested = false;
          var Position = 0;
          var IndentCurrent = 0;
          var IndentStack = new _fableCore.List();
          var Errors = [];
          return new Context(patternInput[0], [], Errors, TopLevel, Silent, StrictlyNested, IndentCurrent, IndentStack, Position);
        }();

        var cmds = parseCommands(new _fableCore.List(), ctx);
        var errors = patternInput[1].concat(Array.from(ctx.Errors));

        var rng = _fableCore.Seq.fold(function (rng, cmd) {
          return (0, _astops.unionRanges)(rng, cmd.Range);
        }, new _ast.Range(0, 0), cmds);

        return {
          v: [new _ast.Program(node(rng, cmds)), errors]
        };
      }();

      if ((typeof _ret13 === "undefined" ? "undefined" : _typeof(_ret13)) === "object") return _ret13.v;
    } catch (e) {
      _common.Log.exn("parsing", "Exception while parsing program: %O", e);

      var _rng2 = new _ast.Range(0, 0);

      var error = _errors.Parser.exceptionWhileParsing(_rng2, _fableCore.Util.toString(e));

      return [new _ast.Program(node(_rng2, new _fableCore.List())), [error]];
    }
  }
});
//# sourceMappingURL=parser.js.map