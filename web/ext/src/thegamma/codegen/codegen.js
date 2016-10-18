(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./../common/babel", "./../ast/typeops", "../../libraries/common"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./../common/babel"), require("./../ast/typeops"), require("../../libraries/common"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.babel, global.typeops, global.common);
    global.codegen = mod.exports;
  }
})(this, function (exports, _fableCore, _babel, _typeops, _common) {
  "use strict";

  exports.__esModule = true;
  exports.BabelResult = exports.BabelOptions = exports.CompilationContext = undefined;
  exports.offsetToLocation = offsetToLocation;
  exports.rangeToLoc = rangeToLoc;
  exports.getEmitterAndParams = getEmitterAndParams;
  exports.compileExpression = compileExpression;
  exports.compileCommand = compileCommand;
  exports.compileProgram = compileProgram;
  exports.compileAndRun = compileAndRun;

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

  var CompilationContext = exports.CompilationContext = function () {
    function CompilationContext(lineLengths, globals) {
      _classCallCheck(this, CompilationContext);

      this.LineLengths = lineLengths;
      this.Globals = globals;
    }

    CompilationContext.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    CompilationContext.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return CompilationContext;
  }();

  _fableCore.Util.setInterfaces(CompilationContext.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.CompilationContext");

  function offsetToLocation(lines, offs, lengths) {
    var $target1 = function $target1() {
      return lengths.tail == null ? new _babel.Position(lines, offs) : offsetToLocation(lines + 1, offs - lengths.head - 1, lengths.tail);
    };

    if (lengths.tail != null) {
      if (offs <= lengths.head) {
        var l = lengths.head;
        var lengths_1 = lengths.tail;
        return new _babel.Position(lines, offs);
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function rangeToLoc(ctx, rng) {
    return new _babel.SourceLocation(offsetToLocation(1, rng.Start, ctx.LineLengths), offsetToLocation(1, rng.Start, ctx.LineLengths));
  }

  function getEmitterAndParams(name, typ) {
    var matchValue = (0, _typeops.reduceType)(typ);

    if (matchValue.Case === "Object") {
      return _fableCore.Seq.pick(function (_arg1) {
        var $target1 = function $target1() {
          var $target1 = function $target1() {
            return null;
          };

          if (_arg1.Case === "Property") {
            if (_arg1.Fields[0] === name) {
              var e = _arg1.Fields[3];
              var n = _arg1.Fields[0];
              return [e, new _fableCore.List()];
            } else {
              return $target1();
            }
          } else {
            return $target1();
          }
        };

        if (_arg1.Case === "Method") {
          if (_arg1.Fields[0] === name) {
            var args = _arg1.Fields[1];
            var e = _arg1.Fields[4];
            var n = _arg1.Fields[0];
            return [e, args];
          } else {
            return $target1();
          }
        } else {
          return $target1();
        }
      }, matchValue.Fields[0].Members);
    } else {
      _common.Log.exn("codegen", "getEmitterAndParams: Not an object %O", matchValue);

      throw "getEmitterAndParams: Not an object";
    }
  }

  function compileExpression(ctx, expr) {
    var $target9 = function $target9() {
      return expr.Node.Case === "Variable" ? new _babel.Expression("IdentifierExpression", [expr.Node.Fields[0].Node.Name, rangeToLoc(ctx, expr.Node.Fields[0].Range)]) : expr.Node.Case === "List" ? function () {
        var es = _fableCore.List.map(function (expr_1) {
          return compileExpression(ctx, expr_1);
        }, expr.Node.Fields[0]);

        return new _babel.Expression("ArrayExpression", [es, rangeToLoc(ctx, expr.Range)]);
      }() : expr.Node.Case === "Function" ? function () {
        var _var = new _babel.Expression("IdentifierExpression", [expr.Node.Fields[0].Node.Name, rangeToLoc(ctx, expr.Node.Fields[0].Range)]);

        var ce = compileExpression(function () {
          var Globals = _fableCore.Map.add(expr.Node.Fields[0].Node.Name, _var, ctx.Globals);

          return new CompilationContext(ctx.LineLengths, Globals);
        }(), expr.Node.Fields[1]);
        var body = new _babel.Statement("BlockStatement", [_fableCore.List.ofArray([new _babel.Statement("ReturnStatement", [ce, rangeToLoc(ctx, expr.Node.Fields[1].Range)])]), rangeToLoc(ctx, expr.Node.Fields[1].Range)]);
        return new _babel.Expression("FunctionExpression", [null, _fableCore.List.ofArray([new _babel.Pattern("IdentifierPattern", [expr.Node.Fields[0].Node.Name, rangeToLoc(ctx, expr.Node.Fields[0].Range)])]), body, false, false, rangeToLoc(ctx, expr.Range)]);
      }() : expr.Node.Case === "Empty" ? function () {
        console.log("compileExpression: %O", expr.Node);
        throw "!";
      }() : function () {
        throw ["C:\\Tomas\\Public\\thegamma\\thegamma-script\\src\\thegamma\\codegen/codegen.fs", 37, 8];
      }();
    };

    if (expr.Node.Case === "Binary") {
      if (expr.Node.Fields[1].Node.Case === "Power") {
        var l = expr.Node.Fields[0];
        var r = expr.Node.Fields[2];
        {
          var l_1 = compileExpression(ctx, l);
          var r_1 = compileExpression(ctx, r);
          var rng = rangeToLoc(ctx, expr.Range);
          var pow = new _babel.Expression("MemberExpression", [new _babel.Expression("IdentifierExpression", ["pow", rng]), new _babel.Expression("IdentifierExpression", ["Math", rng]), false, rng]);
          return new _babel.Expression("CallExpression", [pow, _fableCore.List.ofArray([l_1, r_1]), rangeToLoc(ctx, expr.Range)]);
        }
      } else {
        var _l = expr.Node.Fields[0];
        var op = expr.Node.Fields[1];
        var _r = expr.Node.Fields[2];
        {
          var _l_ = compileExpression(ctx, _l);

          var _r_ = compileExpression(ctx, _r);

          var op_1 = op.Node.Case === "Plus" ? new _babel.BinaryOperator("BinaryPlus", []) : op.Node.Case === "Minus" ? new _babel.BinaryOperator("BinaryMinus", []) : op.Node.Case === "Multiply" ? new _babel.BinaryOperator("BinaryMultiply", []) : op.Node.Case === "Divide" ? new _babel.BinaryOperator("BinaryDivide", []) : op.Node.Case === "GreaterThan" ? new _babel.BinaryOperator("BinaryGreater", []) : op.Node.Case === "LessThan" ? new _babel.BinaryOperator("BinaryLess", []) : op.Node.Case === "GreaterThanOrEqual" ? new _babel.BinaryOperator("BinaryGreaterOrEqual", []) : op.Node.Case === "LessThanOrEqual" ? new _babel.BinaryOperator("BinaryLessOrEqual", []) : op.Node.Case === "Power" ? function () {
            throw "compileExpression: Power is not a binary operation";
          }() : new _babel.BinaryOperator("BinaryEqualStrict", []);
          return new _babel.Expression("BinaryExpression", [op_1, _l_, _r_, rangeToLoc(ctx, expr.Range)]);
        }
      }
    } else {
      if (expr.Node.Case === "Call") {
        if (expr.Node.Fields[0] == null) {
          var args = expr.Node.Fields[2];
          var n = expr.Node.Fields[1];
          throw "compileExpression: Call without instance is not supported";
        } else {
          var _ret = function () {
            var args = expr.Node.Fields[2];
            var inst = expr.Node.Fields[0];
            var n = expr.Node.Fields[1];
            {
              var _ret2 = function () {
                var compiledArgs = _fableCore.List.map(function (a) {
                  return [a.Name, compileExpression(ctx, a.Value)];
                }, args.Node);

                var positionArgs = Array.from(_fableCore.Seq.map(function (tuple) {
                  return tuple[1];
                }, _fableCore.Seq.takeWhile(function (tupledArg) {
                  return function () {
                    return tupledArg[0] == null;
                  }();
                }, compiledArgs)));
                var namedArgs = new Map(_fableCore.Seq.choose(function (_arg1) {
                  return _arg1[0] != null ? function () {
                    var n_1 = _arg1[0];
                    return [n_1.Node.Name, _arg1[1]];
                  }() : null;
                }, compiledArgs));
                var patternInput = getEmitterAndParams(n.Node.Name, inst.Entity.Type);
                var inst_1 = compileExpression(ctx, inst);

                var pars = _fableCore.List.mapIndexed(function (i, tupledArg) {
                  return i < positionArgs.length ? positionArgs[i] : namedArgs.has(tupledArg[0]) ? namedArgs.get(tupledArg[0]) : new _babel.Expression("NullLiteral", [rangeToLoc(ctx, args.Range)]);
                }, patternInput[1]);

                return {
                  v: {
                    v: patternInput[0].Emit([inst_1, pars])
                  }
                };
              }();

              if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
            }
          }();

          if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
        }
      } else {
        if (expr.Node.Case === "Property") {
          var _inst = expr.Node.Fields[0];
          var _n = expr.Node.Fields[1];
          {
            var patternInput = getEmitterAndParams(_n.Node.Name, _inst.Entity.Type);
            var inst_1 = compileExpression(ctx, _inst);
            return patternInput[0].Emit([inst_1, new _fableCore.List()]);
          }
        } else {
          if (expr.Node.Case === "Number") {
            var _n2 = expr.Node.Fields[0];
            return new _babel.Expression("NumericLiteral", [_n2, rangeToLoc(ctx, expr.Range)]);
          } else {
            if (expr.Node.Case === "String") {
              var s = expr.Node.Fields[0];
              return new _babel.Expression("StringLiteral", [s, rangeToLoc(ctx, expr.Range)]);
            } else {
              if (expr.Node.Case === "Boolean") {
                var b = expr.Node.Fields[0];
                return new _babel.Expression("BooleanLiteral", [b, rangeToLoc(ctx, expr.Range)]);
              } else {
                if (expr.Node.Case === "Variable") {
                  if (ctx.Globals.has(expr.Node.Fields[0].Node.Name)) {
                    var _n3 = expr.Node.Fields[0];
                    return ctx.Globals.get(_n3.Node.Name);
                  } else {
                    return $target9();
                  }
                } else {
                  return $target9();
                }
              }
            }
          }
        }
      }
    }
  }

  function compileCommand(ctx, cmd) {
    return cmd.Node.Case === "Expr" ? function () {
      var e = compileExpression(ctx, cmd.Node.Fields[0]);
      return new _babel.Statement("ExpressionStatement", [e, rangeToLoc(ctx, cmd.Range)]);
    }() : function () {
      var e = compileExpression(ctx, cmd.Node.Fields[1]);
      var name = new _babel.Pattern("IdentifierPattern", [cmd.Node.Fields[0].Node.Name, rangeToLoc(ctx, cmd.Node.Fields[0].Range)]);
      var decl = new _babel.VariableDeclarator("VariableDeclarator", [name, e, rangeToLoc(ctx, cmd.Range)]);
      return new _babel.Statement("VariableDeclaration", [new _babel.VariableDeclarationKind("Var", []), _fableCore.List.ofArray([decl]), rangeToLoc(ctx, cmd.Range)]);
    }();
  }

  function compileProgram(ctx, prog) {
    var body = _fableCore.List.map(function (cmd) {
      return compileCommand(ctx, cmd);
    }, prog.Body.Node);

    return new _babel.Program(rangeToLoc(ctx, prog.Body.Range), body);
  }

  var BabelOptions = exports.BabelOptions = function () {
    function BabelOptions(presets) {
      _classCallCheck(this, BabelOptions);

      this.presets = presets;
    }

    BabelOptions.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    BabelOptions.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return BabelOptions;
  }();

  _fableCore.Util.setInterfaces(BabelOptions.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.BabelOptions");

  var BabelResult = exports.BabelResult = function () {
    function BabelResult(code) {
      _classCallCheck(this, BabelResult);

      this.code = code;
    }

    BabelResult.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    BabelResult.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return BabelResult;
  }();

  _fableCore.Util.setInterfaces(BabelResult.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.BabelResult");

  function compileAndRun(globals, text, prog) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return builder_.TryWith(builder_.Delay(function (unitVar_1) {
          return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(globals), function (_arg1) {
            var ctx = new CompilationContext(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
              return _fableCore.Seq.map(function (l) {
                return l.length;
              }, text.split("\n"));
            })), _arg1);
            var res = compileProgram(ctx, prog);
            var code = Babel.transformFromAst(_babel.Serializer.serializeProgram(res), text, new BabelOptions(["es2015"]));

            _common.Log.trace("codegen", "Evaluating: %O", code);

            return builder_.Return(code.code);
          });
        }), function (_arg2) {
          _common.Log.exn("codegen", "Evaluating code failed: %O", _arg2);

          return builder_.Return("");
        });
      });
    }(_fableCore.AsyncBuilder.singleton);
  }
});
//# sourceMappingURL=codegen.js.map