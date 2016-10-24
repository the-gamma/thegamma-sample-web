(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./../common/babel", "../../libraries/common", "../../libraries/series", "./../codegen/runtime", "../../libraries/google/charts", "../../libraries/tables", "../../libraries/maps", "./../ast/ast", "./../ast/typeops", "./../ast/astops"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./../common/babel"), require("../../libraries/common"), require("../../libraries/series"), require("./../codegen/runtime"), require("../../libraries/google/charts"), require("../../libraries/tables"), require("../../libraries/maps"), require("./../ast/ast"), require("./../ast/typeops"), require("./../ast/astops"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.babel, global.common, global.series, global.runtime, global.charts, global.tables, global.maps, global.ast, global.typeops, global.astops);
    global.interpreter = mod.exports;
  }
})(this, function (exports, _fableCore, _babel, _common, _series, _runtime, _charts, _tables, _maps, _ast, _typeops, _astops) {
  "use strict";

  exports.__esModule = true;
  exports.EvaluationContext = exports.BabelResult = exports.BabelOptions = undefined;
  exports.$FindProperty$_$ = $FindProperty$_$;
  exports.$FindMethod$_$ = $FindMethod$_$;
  exports.storeArguments = storeArguments;
  exports.evaluateExpression = evaluateExpression;
  exports.evaluateExpr = evaluateExpr;
  exports.evaluateCall = evaluateCall;
  exports.evaluatePreview = evaluatePreview;
  exports.ensureValue = ensureValue;
  exports.getValue = getValue;
  exports.evaluateEntity = evaluateEntity;
  exports.evaluateEntityTree = evaluateEntityTree;
  exports.globalEntity = globalEntity;
  exports.evaluate = evaluate;

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

  _fableCore.Util.setInterfaces(BabelOptions.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Interpreter.BabelOptions");

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

  _fableCore.Util.setInterfaces(BabelResult.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Interpreter.BabelResult");

  var EvaluationContext = exports.EvaluationContext = function () {
    function EvaluationContext(globals) {
      _classCallCheck(this, EvaluationContext);

      this.Globals = globals;
    }

    EvaluationContext.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    return EvaluationContext;
  }();

  _fableCore.Util.setInterfaces(EvaluationContext.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Interpreter.EvaluationContext");

  function $FindProperty$_$(name, _arg1) {
    return _fableCore.Seq.tryPick(function (_arg2) {
      var $target1 = function $target1() {
        return null;
      };

      if (_arg2.Case === "Property") {
        if (_arg2.Fields[0] === name.Name) {
          var e = _arg2.Fields[3];
          var n = _arg2.Fields[0];
          return e;
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }, _arg1.Members);
  }

  function $FindMethod$_$(name, _arg1) {
    return _fableCore.Seq.tryPick(function (_arg2) {
      var $target1 = function $target1() {
        return null;
      };

      if (_arg2.Case === "Method") {
        if (_arg2.Fields[0] === name.Name) {
          var args = _arg2.Fields[1];
          var e = _arg2.Fields[4];
          var n = _arg2.Fields[0];
          return [args, e];
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }, _arg1.Members);
  }

  function storeArguments(values) {
    return [Array.from(values), _fableCore.List.mapIndexed(function (i, _arg1) {
      return new _babel.Expression("MemberExpression", [new _babel.Expression("IdentifierExpression", ["_stored", null]), new _babel.Expression("NumericLiteral", [i, null]), true, null]);
    }, values)];
  }

  function evaluateExpression(_stored, expr) {
    var prog = new _babel.Program(null, _fableCore.List.ofArray([new _babel.Statement("ExpressionStatement", [expr, null])]));
    var code = Babel.transformFromAst(_babel.Serializer.serializeProgram(prog), "", new BabelOptions(["es2015"]));

    _common.Log.trace("interpreter", "Interpreter evaluating: %O", code.code);

    try {
      var s = _series.series.create(function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.Return([]);
        });
      }(_fableCore.AsyncBuilder.singleton), "", "", "");

      new _runtime.RuntimeContext("lol", "", "troll");

      (function (c) {
        return function (s_1) {
          return (0, _runtime.trimLeft)(c, s_1);
        };
      });

      (function (arg00) {
        return _charts.chart.bar(arg00);
      });

      _tables.table.create(s);

      _maps.timeline.create(s);

      _series.series.values(new Int32Array([1]));

      _stored.length;
      return eval(code.code);
    } catch (e) {
      _common.Log.exn("interpreter", "Evaluation failed: %O", e);

      throw null;
    }
  }

  function evaluateExpr(args, exprBuilder) {
    var patternInput = storeArguments(args);
    return evaluateExpression(patternInput[0], exprBuilder(patternInput[1]));
  }

  function evaluateCall(emitter, inst, args) {
    var patternInput = storeArguments(new _fableCore.List(inst, args));
    return evaluateExpression(patternInput[0], emitter.Emit([patternInput[1].head, patternInput[1].tail]));
  }

  function evaluatePreview(typ, value) {
    var previewName = new _ast.Name("preview");

    var $target1 = function $target1() {
      var $target1 = function $target1() {
        return null;
      };

      if (typ != null) {
        if (typ.Case === "Object") {
          var activePatternResult105129 = $FindMethod$_$(previewName, typ.Fields[0]);

          if (activePatternResult105129 != null) {
            var e = activePatternResult105129[1];
            return evaluateCall(e, value, new _fableCore.List());
          } else {
            return $target1();
          }
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    };

    if (typ != null) {
      if (typ.Case === "Object") {
        var activePatternResult105131 = $FindProperty$_$(previewName, typ.Fields[0]);

        if (activePatternResult105131 != null) {
          var e = activePatternResult105131;
          return evaluateCall(e, value, new _fableCore.List());
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function ensureValue(ctx, e) {
    if (function () {
      return e.Value == null;
    }()) {
      var matchValue = evaluateEntity(ctx, e);

      if (matchValue != null) {
        e.Value = new _ast.EntityValue(matchValue, evaluatePreview(e.Type, matchValue));
      }
    }
  }

  function getValue(ctx, e) {
    if (function () {
      return e.Value == null;
    }()) {
      _common.Log.error("interpreter", "getValue: Value of entity %O has not been evaluated.", e);
    }

    return e.Value.Value;
  }

  function evaluateEntity(ctx, e) {
    var $target10 = function $target10() {
      return null;
    };

    var $target11 = function $target11() {
      _common.Log.error("interpreter", "Cannot evaluate entity: %O", e);

      return null;
    };

    if (e.Kind.Case === "Constant") {
      if (e.Kind.Fields[0].Case === "Number") {
        var n = e.Kind.Fields[0].Fields[0];
        return n;
      } else {
        if (e.Kind.Fields[0].Case === "String") {
          var s = e.Kind.Fields[0].Fields[0];
          return s;
        } else {
          if (e.Kind.Fields[0].Case === "Empty") {
            return null;
          } else {
            var b = e.Kind.Fields[0].Fields[0];
            return b;
          }
        }
      }
    } else {
      if (e.Kind.Case === "GlobalValue") {
        var expr = e.Kind.Fields[1];
        var name = e.Kind.Fields[0];

        if (expr != null) {
          return evaluateExpression([], expr);
        }
      } else {
        if (e.Kind.Case === "ChainElement") {
          if (e.Kind.Fields[0]) {
            if (e.Kind.Fields[3] != null) {
              var inst = e.Kind.Fields[3];
              var _name = e.Kind.Fields[1];
              {
                var matchValue = (0, _typeops.reduceType)(inst.Type);

                var $target1 = function $target1() {
                  return null;
                };

                if (matchValue.Case === "Object") {
                  var activePatternResult105139 = $FindProperty$_$(_name, matchValue.Fields[0]);

                  if (activePatternResult105139 != null) {
                    var e_1 = activePatternResult105139;
                    return evaluateCall(e_1, getValue(ctx, inst), new _fableCore.List());
                  } else {
                    return $target1();
                  }
                } else {
                  return $target1();
                }
              }
            } else {
              return $target11();
            }
          } else {
            if (e.Kind.Fields[3] != null) {
              if (e.Kind.Fields[4] != null) {
                if (e.Kind.Fields[4].Kind.Case === "ArgumentList") {
                  var args = e.Kind.Fields[4].Kind.Fields[0];
                  var _inst = e.Kind.Fields[3];
                  var _name2 = e.Kind.Fields[1];
                  {
                    var _ret = function () {
                      var pb = _fableCore.Seq.toList(_fableCore.Seq.takeWhile(function (_arg1) {
                        return _arg1.Kind.Case === "NamedParam" ? false : true;
                      }, args));

                      var nb = _fableCore.Seq.toList(_fableCore.Seq.skipWhile(function (_arg2) {
                        return _arg2.Kind.Case === "NamedParam" ? false : true;
                      }, args));

                      var positionBased = Array.from(_fableCore.List.map(function (e_1) {
                        return getValue(ctx, e_1);
                      }, pb));
                      var nameBased = new Map(_fableCore.List.choose(function (_arg3) {
                        return _arg3.Kind.Case === "NamedParam" ? function () {
                          var value = _arg3.Kind.Fields[1];
                          var name_1 = _arg3.Kind.Fields[0];
                          return [name_1.Name, getValue(ctx, value)];
                        }() : null;
                      }, nb));
                      var matchValue = (0, _typeops.reduceType)(_inst.Type);

                      var $target1 = function $target1() {
                        return null;
                      };

                      if (matchValue.Case === "Object") {
                        var activePatternResult105146 = $FindMethod$_$(_name2, matchValue.Fields[0]);

                        if (activePatternResult105146 != null) {
                          var _e_ = activePatternResult105146[1];
                          var pars = activePatternResult105146[0];
                          {
                            var args_1 = _fableCore.List.mapIndexed(function (i, tupledArg) {
                              return i < positionBased.length ? positionBased[i] : nameBased.has(tupledArg[0]) ? nameBased.get(tupledArg[0]) : null;
                            }, pars);

                            return {
                              v: evaluateCall(_e_, getValue(ctx, _inst), args_1)
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

                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                  }
                } else {
                  return $target11();
                }
              } else {
                return $target11();
              }
            } else {
              return $target11();
            }
          }
        } else {
          if (e.Kind.Case === "Operator") {
            if (e.Kind.Fields[1].Case === "Power") {
              var l = e.Kind.Fields[0];
              var r = e.Kind.Fields[2];
              return evaluateExpr(_fableCore.List.ofArray([getValue(ctx, l), getValue(ctx, r)]), function (_arg4) {
                var $target1 = function $target1() {
                  throw "evaluateEntity: Expected two arguments";
                };

                if (_arg4.tail != null) {
                  if (_arg4.tail.tail != null) {
                    if (_arg4.tail.tail.tail == null) {
                      var l_1 = _arg4.head;
                      var r_1 = _arg4.tail.head;
                      {
                        var pow = new _babel.Expression("MemberExpression", [new _babel.Expression("IdentifierExpression", ["pow", null]), new _babel.Expression("IdentifierExpression", ["Math", null]), false, null]);
                        return new _babel.Expression("CallExpression", [pow, _fableCore.List.ofArray([l_1, r_1]), null]);
                      }
                    } else {
                      return $target1();
                    }
                  } else {
                    return $target1();
                  }
                } else {
                  return $target1();
                }
              });
            } else {
              var _ret2 = function () {
                var l = e.Kind.Fields[0];
                var op = e.Kind.Fields[1];
                var r = e.Kind.Fields[2];
                return {
                  v: evaluateExpr(_fableCore.List.ofArray([getValue(ctx, l), getValue(ctx, r)]), function (_arg5) {
                    var $target1 = function $target1() {
                      throw "evaluateEntity: Expected two arguments";
                    };

                    if (_arg5.tail != null) {
                      if (_arg5.tail.tail != null) {
                        if (_arg5.tail.tail.tail == null) {
                          var l_1 = _arg5.head;
                          var r_1 = _arg5.tail.head;
                          {
                            var op_1 = op.Case === "Plus" ? new _babel.BinaryOperator("BinaryPlus", []) : op.Case === "Minus" ? new _babel.BinaryOperator("BinaryMinus", []) : op.Case === "Multiply" ? new _babel.BinaryOperator("BinaryMultiply", []) : op.Case === "Divide" ? new _babel.BinaryOperator("BinaryDivide", []) : op.Case === "GreaterThan" ? new _babel.BinaryOperator("BinaryGreater", []) : op.Case === "LessThan" ? new _babel.BinaryOperator("BinaryLess", []) : op.Case === "GreaterThanOrEqual" ? new _babel.BinaryOperator("BinaryGreaterOrEqual", []) : op.Case === "LessThanOrEqual" ? new _babel.BinaryOperator("BinaryLessOrEqual", []) : op.Case === "Power" ? function () {
                              throw "evaluateEntity: Power is not a binary operation";
                            }() : new _babel.BinaryOperator("BinaryEqualStrict", []);
                            return new _babel.Expression("BinaryExpression", [op_1, l_1, r_1, null]);
                          }
                        } else {
                          return $target1();
                        }
                      } else {
                        return $target1();
                      }
                    } else {
                      return $target1();
                    }
                  })
                };
              }();

              if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
            }
          } else {
            if (e.Kind.Case === "Variable") {
              var value = e.Kind.Fields[1];
              var $var23 = value.Value;

              if ($var23 != null) {
                return function (v) {
                  return v.Value;
                }($var23);
              } else {
                return $var23;
              }
            } else {
              if (e.Kind.Case === "ArgumentList") {
                return $target10();
              } else {
                if (e.Kind.Case === "NamedMember") {
                  return $target10();
                } else {
                  return $target11();
                }
              }
            }
          }
        }
      }
    }
  }

  function evaluateEntityTree(ctx, e) {
    var visited = new Map();

    var loop = function loop(e_1) {
      if (!visited.has(e_1.Symbol) ? function () {
        return e_1.Value == null;
      }() : false) {
        visited.set(e_1.Symbol, true);
        {
          var inputSequence = _astops.Entity$2Eget_Antecedents.bind(e_1)();

          for (var _iterator = inputSequence, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var e_2 = _ref;
            loop(e_2);
          }
        }
        ensureValue(ctx, e_1);
      }
    };

    loop(e);
    return e.Value;
  }

  function globalEntity(name, meta, typ, expr) {
    var Kind = new _ast.EntityKind("GlobalValue", [new _ast.Name(name), expr]);

    var _Symbol = Symbol();

    var Type = typ;
    return new _ast.Entity(Kind, _Symbol, null, meta, Type, new _fableCore.List());
  }

  function evaluate(globals, e) {
    _common.Log.trace("interpreter", "Evaluating entity %s (%O)", _astops.Entity$2Eget_Name.bind(e)(), e.Kind);

    var ctx = new EvaluationContext(new Map(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.map(function (e_1) {
        return [_astops.Entity$2Eget_Name.bind(e_1)(), e_1];
      }, globals);
    }))));
    var res = evaluateEntityTree(ctx, e);

    _common.Log.trace("interpreter", "Evaluated entity %s (%O) = %O", _astops.Entity$2Eget_Name.bind(e)(), e.Kind, res);

    return res;
  }
});
//# sourceMappingURL=interpreter.js.map