(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./../ast/ast", "../../libraries/common", "./../ast/typeops", "./../ast/errors", "./../ast/astops"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./../ast/ast"), require("../../libraries/common"), require("./../ast/typeops"), require("./../ast/errors"), require("./../ast/astops"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.ast, global.common, global.typeops, global.errors, global.astops);
    global.typechecker = mod.exports;
  }
})(this, function (exports, _fableCore, _ast, _common, _typeops, _errors, _astops) {
  "use strict";

  exports.__esModule = true;
  exports.CheckingContext = undefined;
  exports.addError = addError;
  exports.$FindProperty$_$ = $FindProperty$_$;
  exports.$FindMethod$_$ = $FindMethod$_$;
  exports.inferListType = inferListType;
  exports.resolveParameterType = resolveParameterType;
  exports.checkMethodCall = checkMethodCall;
  exports.getType = getType;
  exports.typeCheckEntity = typeCheckEntity;
  exports.evaluateDelayedType = evaluateDelayedType;
  exports.typeCheckEntityAsync = typeCheckEntityAsync;
  exports.collectTypeErrors = collectTypeErrors;
  exports.typeCheckProgram = typeCheckProgram;

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

  var CheckingContext = exports.CheckingContext = function () {
    function CheckingContext(errors, globals, ranges) {
      _classCallCheck(this, CheckingContext);

      this.Errors = errors;
      this.Globals = globals;
      this.Ranges = ranges;
    }

    CheckingContext.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    return CheckingContext;
  }();

  _fableCore.Util.setInterfaces(CheckingContext.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.TypeChecker.CheckingContext");

  function addError(ctx, ent, err) {
    ctx.Errors.push(err(ctx.Ranges.get(ent.Symbol)));
  }

  function $FindProperty$_$(name, _arg1) {
    return _fableCore.Seq.tryPick(function (_arg2) {
      var $target1 = function $target1() {
        return null;
      };

      if (_arg2.Case === "Property") {
        if (_arg2.Fields[0] === name.Name) {
          var m = _arg2.Fields[2];
          var n = _arg2.Fields[0];
          var r = _arg2.Fields[1];
          return [m, r];
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
          var m = _arg2.Fields[3];
          var n = _arg2.Fields[0];
          var r = _arg2.Fields[2];
          return [m, args, r];
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }, _arg1.Members);
  }

  function inferListType(typs) {
    return _fableCore.Seq.reduce(function (f) {
      return function (x, y) {
        return f(x) > f(y) ? x : y;
      };
    }(function (tuple) {
      return tuple[1];
    }), _fableCore.List.append(_fableCore.List.ofArray([[new _ast.Type("Any", []), 0]]), _fableCore.List.map(function (g) {
      return [g.head, g.length];
    }, function (list) {
      return _common.List.groupWith(_typeops.typesEqual, list);
    }(_fableCore.List.filter(function (_arg1) {
      return _arg1.Case === "Any" ? false : true;
    }, typs)))))[0];
  }

  function resolveParameterType(instTy, methName, parSpec) {
    var $target1 = function $target1() {
      throw "resolveParameterType: Instance is not an object";
    };

    if (instTy.Case === "Object") {
      var activePatternResult5160 = $FindMethod$_$(methName, instTy.Fields[0]);

      if (activePatternResult5160 != null) {
        var args = activePatternResult5160[1];

        if (parSpec.Case === "Choice2Of2") {
          var patternInput = _fableCore.Seq.item(parSpec.Fields[0], args);

          return patternInput[2];
        } else {
          return _fableCore.Seq.pick(function (tupledArg) {
            return tupledArg[0] === parSpec.Fields[0] ? tupledArg[2] : null;
          }, args);
        }
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function checkMethodCall(ctx, memTy, pars, argList, args) {
    var patternInput = function () {
      var pb = _fableCore.Seq.toList(_fableCore.Seq.takeWhile(function (_arg1) {
        return _arg1.Kind.Case === "NamedParam" ? false : true;
      }, args));

      var nb = _fableCore.Seq.toList(_fableCore.Seq.skipWhile(function (_arg2) {
        return _arg2.Kind.Case === "NamedParam" ? false : true;
      }, args));

      return [Array.from(pb), _fableCore.Map.create(_fableCore.List.choose(function (arg) {
        return arg.Kind.Case === "NamedParam" ? [arg.Kind.Fields[0].Name, arg.Kind.Fields[1]] : function () {
          (function (err) {
            addError(ctx, arg, err);
          })(function (rng) {
            return _errors.TypeChecker.nameBasedParamMustBeLast(rng);
          });

          return null;
        }();
      }, nb), new _fableCore.GenericComparer(function (x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      }))];
    }();

    var matchedArguments = _fableCore.List.mapIndexed(function (index, tupledArg) {
      var arg = index < patternInput[0].length ? patternInput[0][index] : _fableCore.Map.tryFind(tupledArg[0], patternInput[1]);

      if (arg == null) {
        if (tupledArg[1]) {
          return [tupledArg[0], tupledArg[2], tupledArg[2], null];
        } else {
          if (arg == null) {
            (function (err) {
              addError(ctx, argList, err);
            })(function (rng) {
              return _errors.TypeChecker.parameterMissingValue(tupledArg[0], rng);
            });

            return [tupledArg[0], tupledArg[2], new _ast.Type("Any", []), null];
          } else {
            throw ["C:\\Tomas\\Public\\thegamma\\thegamma-script\\src\\thegamma\\analyzer/typechecker.fs", 72, 12];
          }
        }
      } else {
        return [tupledArg[0], tupledArg[2], getType(ctx, arg), arg];
      }
    }, pars);

    var patternInput_1 = memTy.Case === "Forall" ? [memTy.Fields[0], memTy.Fields[1]] : [new _fableCore.List(), memTy];

    var assigns = _fableCore.List.collect(function (tupledArg) {
      var patternInput_2 = (0, _typeops.unifyTypes)(patternInput_1[0], tupledArg[1], tupledArg[2]);

      if (function () {
        return tupledArg[3] != null;
      }()) {
        var _loop = function _loop() {
          if (_isArray) {
            if (_i >= _iterator.length) return "break";
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) return "break";
            _ref = _i.value;
          }

          var forLoopVar = _ref;
          (function () {
            var ent = tupledArg[3];
            return function (err) {
              addError(ctx, ent, err);
            };
          })()(function (rng) {
            return _errors.TypeChecker.incorrectParameterType(tupledArg[0], tupledArg[1], tupledArg[2], forLoopVar[0], forLoopVar[1], rng);
          });
        };

        for (var _iterator = patternInput_2[1], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          var _ret = _loop();

          if (_ret === "break") break;
        }
      }

      return patternInput_2[0];
    }, matchedArguments);

    {
      var inputSequence = _fableCore.Seq.groupBy(function (tuple) {
        return tuple[0];
      }, assigns);

      for (var _iterator2 = inputSequence, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _forLoopVar = _ref2;

        var matchValue = _fableCore.Seq.toList(_forLoopVar[1]);

        var $target1 = function $target1() {};

        if (matchValue.tail != null) {
          if (matchValue.tail.tail != null) {
            (function () {
              var t1 = matchValue.head[1];
              var ts = matchValue.tail;
              var v = matchValue.head[0];

              var _loop2 = function _loop2() {
                if (_isArray3) {
                  if (_i3 >= _iterator3.length) return "break";
                  _ref3 = _iterator3[_i3++];
                } else {
                  _i3 = _iterator3.next();
                  if (_i3.done) return "break";
                  _ref3 = _i3.value;
                }

                var forLoopVar_1 = _ref3;

                (function (err) {
                  addError(ctx, argList, err);
                })(function (rng) {
                  return _errors.TypeChecker.inferenceConflict(v, t1, forLoopVar_1[1], rng);
                });
              };

              for (var _iterator3 = ts, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
                var _ref3;

                var _ret3 = _loop2();

                if (_ret3 === "break") break;
              }
            })();
          } else {
            $target1();
          }
        } else {
          $target1();
        }
      }
    }
    var res = (0, _typeops.substituteTypes)(_fableCore.Map.create(assigns, new _fableCore.GenericComparer(function (x, y) {
      return x < y ? -1 : x > y ? 1 : 0;
    })), patternInput_1[1]);
    return res;
  }

  function getType(ctx, e) {
    if (function () {
      return e.Type == null;
    }()) {
      (function () {
        var errorCount = ctx.Errors.length;
        e.Type = typeCheckEntity(ctx, e);
        e.Errors = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.map(function (i) {
            return ctx.Errors[i];
          }, _fableCore.Seq.range(errorCount, ctx.Errors.length - 1));
        }));
      })();
    }

    return e.Type;
  }

  function typeCheckEntity(ctx, e) {
    var $target4 = function $target4(ident, name) {
      (function (err) {
        addError(ctx, ident, err);
      })(function (rng) {
        return _errors.TypeChecker.callMissingInstance(name.Name, rng);
      });

      return new _ast.Type("Any", []);
    };

    var $target5 = function $target5(name) {
      throw _fableCore.String.fsFormat("typeCheckEntity: Call to %s is missing argument list!")(function (x) {
        return x;
      })(name.Name);
    };

    if (e.Kind.Case === "Variable") {
      var inst = e.Kind.Fields[1];
      return getType(ctx, inst);
    } else {
      if (e.Kind.Case === "ChainElement") {
        if (e.Kind.Fields[0]) {
          if (e.Kind.Fields[3] == null) {
            return $target4(e.Kind.Fields[2], e.Kind.Fields[1]);
          } else {
            var _ret5 = function () {
              var ident = e.Kind.Fields[2];
              var inst = e.Kind.Fields[3];
              var name = e.Kind.Fields[1];
              {
                var _ret6 = function () {
                  var matchValue = (0, _typeops.reduceType)(getType(ctx, inst));

                  var $target2 = function $target2() {
                    return matchValue.Case === "Object" ? function () {
                      var members = matchValue.Fields[0].Members;

                      (function (err) {
                        addError(ctx, ident, err);
                      })(function (rng) {
                        return _errors.TypeChecker.propertyMissing(name.Name, members, rng);
                      });

                      return new _ast.Type("Any", []);
                    }() : function () {
                      (function (err) {
                        addError(ctx, inst, err);
                      })(function (rng) {
                        return _errors.TypeChecker.notAnObject(name.Name, matchValue, rng);
                      });

                      return new _ast.Type("Any", []);
                    }();
                  };

                  if (matchValue.Case === "Any") {
                    return {
                      v: {
                        v: new _ast.Type("Any", [])
                      }
                    };
                  } else {
                    if (matchValue.Case === "Object") {
                      var activePatternResult5192 = $FindProperty$_$(name, matchValue.Fields[0]);

                      if (activePatternResult5192 != null) {
                        var meta = activePatternResult5192[0];
                        var resTyp = activePatternResult5192[1];
                        {
                          e.Meta = meta;
                          return {
                            v: {
                              v: resTyp
                            }
                          };
                        }
                      } else {
                        return {
                          v: {
                            v: $target2()
                          }
                        };
                      }
                    } else {
                      return {
                        v: {
                          v: $target2()
                        }
                      };
                    }
                  }
                }();

                if ((typeof _ret6 === "undefined" ? "undefined" : _typeof(_ret6)) === "object") return _ret6.v;
              }
            }();

            if ((typeof _ret5 === "undefined" ? "undefined" : _typeof(_ret5)) === "object") return _ret5.v;
          }
        } else {
          if (e.Kind.Fields[3] == null) {
            return $target4(e.Kind.Fields[2], e.Kind.Fields[1]);
          } else {
            if (e.Kind.Fields[4] != null) {
              if (e.Kind.Fields[4].Kind.Case === "ArgumentList") {
                var _ret7 = function () {
                  var arglist = e.Kind.Fields[4];
                  var ents = e.Kind.Fields[4].Kind.Fields[0];
                  var ident = e.Kind.Fields[2];
                  var inst = e.Kind.Fields[3];
                  var name = e.Kind.Fields[1];
                  {
                    var _ret8 = function () {
                      var matchValue = (0, _typeops.reduceType)(getType(ctx, inst));

                      var $target2 = function $target2() {
                        return matchValue.Case === "Object" ? function () {
                          var members = matchValue.Fields[0].Members;

                          (function (err) {
                            addError(ctx, ident, err);
                          })(function (rng) {
                            return _errors.TypeChecker.methodMissing(name.Name, members, rng);
                          });

                          return new _ast.Type("Any", []);
                        }() : function () {
                          (function (err) {
                            addError(ctx, inst, err);
                          })(function (rng) {
                            return _errors.TypeChecker.notAnObject(name.Name, matchValue, rng);
                          });

                          return new _ast.Type("Any", []);
                        }();
                      };

                      if (matchValue.Case === "Any") {
                        return {
                          v: {
                            v: new _ast.Type("Any", [])
                          }
                        };
                      } else {
                        if (matchValue.Case === "Object") {
                          var activePatternResult5194 = $FindMethod$_$(name, matchValue.Fields[0]);

                          if (activePatternResult5194 != null) {
                            var args = activePatternResult5194[1];
                            var meta = activePatternResult5194[0];
                            var resTyp = activePatternResult5194[2];
                            {
                              e.Meta = meta;
                              return {
                                v: {
                                  v: checkMethodCall(ctx, resTyp, args, arglist, ents)
                                }
                              };
                            }
                          } else {
                            return {
                              v: {
                                v: $target2()
                              }
                            };
                          }
                        } else {
                          return {
                            v: {
                              v: $target2()
                            }
                          };
                        }
                      }
                    }();

                    if ((typeof _ret8 === "undefined" ? "undefined" : _typeof(_ret8)) === "object") return _ret8.v;
                  }
                }();

                if ((typeof _ret7 === "undefined" ? "undefined" : _typeof(_ret7)) === "object") return _ret7.v;
              } else {
                return $target5(e.Kind.Fields[1]);
              }
            } else {
              return $target5(e.Kind.Fields[1]);
            }
          }
        }
      } else {
        if (e.Kind.Case === "Operator") {
          var _ret9 = function () {
            var l = e.Kind.Fields[0];
            var operator = e.Kind.Fields[1];
            var r = e.Kind.Fields[2];
            {
              _fableCore.Seq.iterateIndexed(function (idx, operand) {
                var typ = getType(ctx, operand);

                if (!(0, _typeops.typesEqual)(typ)(new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]))) {
                  (function (err) {
                    addError(ctx, operand, err);
                  })(function (rng) {
                    return _errors.TypeChecker.numericOperatorExpectsNumbers(operator, idx, typ, rng);
                  });
                }
              }, _fableCore.List.ofArray([l, r]));

              return {
                v: new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])])
              };
            }
          }();

          if ((typeof _ret9 === "undefined" ? "undefined" : _typeof(_ret9)) === "object") return _ret9.v;
        } else {
          if (e.Kind.Case === "List") {
            var _ret10 = function () {
              var elems = e.Kind.Fields[0];

              var typs = _fableCore.List.map(function (e_1) {
                return getType(ctx, e_1);
              }, elems);

              var typ = inferListType(typs);

              var _loop3 = function _loop3() {
                if (_isArray4) {
                  if (_i4 >= _iterator4.length) return "break";
                  _ref4 = _iterator4[_i4++];
                } else {
                  _i4 = _iterator4.next();
                  if (_i4.done) return "break";
                  _ref4 = _i4.value;
                }

                var a = _ref4;
                var elty = getType(ctx, a);

                if (!(0, _typeops.typesEqual)(typ)(elty)) {
                  (function (err) {
                    addError(ctx, a, err);
                  })(function (rng) {
                    return _errors.TypeChecker.listElementTypeDoesNotMatch(typ, elty, rng);
                  });
                }
              };

              for (var _iterator4 = elems, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
                var _ref4;

                var _ret11 = _loop3();

                if (_ret11 === "break") break;
              }

              return {
                v: new _ast.Type("List", [typ])
              };
            }();

            if ((typeof _ret10 === "undefined" ? "undefined" : _typeof(_ret10)) === "object") return _ret10.v;
          } else {
            if (e.Kind.Case === "Binding") {
              if (e.Kind.Fields[1].Kind.Case === "CallSite") {
                var _inst = e.Kind.Fields[1].Kind.Fields[0];
                var methName = e.Kind.Fields[1].Kind.Fields[1];
                var _name = e.Kind.Fields[0];
                var parSpec = e.Kind.Fields[1].Kind.Fields[2];
                {
                  var matchValue = resolveParameterType((0, _typeops.reduceType)(getType(ctx, _inst)), methName, parSpec);

                  var $target1 = function $target1() {
                    throw "typeCheckEntity: Expected parameter of function type";
                  };

                  if (matchValue.Case === "Function") {
                    if (matchValue.Fields[0].tail != null) {
                      if (matchValue.Fields[0].tail.tail == null) {
                        var tin = matchValue.Fields[0].head;
                        return tin;
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
              } else {
                var _name2 = e.Kind.Fields[0];
                throw _fableCore.String.fsFormat("typeCheckEntity: Variable binding %s is missing call site!")(function (x) {
                  return x;
                })(_name2.Name);
              }
            } else {
              if (e.Kind.Case === "Function") {
                var body = e.Kind.Fields[1];
                var _var = e.Kind.Fields[0];
                return new _ast.Type("Function", [_fableCore.List.ofArray([getType(ctx, _var)]), getType(ctx, body)]);
              } else {
                if (e.Kind.Case === "Constant") {
                  if (e.Kind.Fields[0].Case === "String") {
                    return new _ast.Type("Primitive", [new _ast.PrimitiveType("String", [])]);
                  } else {
                    if (e.Kind.Fields[0].Case === "Boolean") {
                      return new _ast.Type("Primitive", [new _ast.PrimitiveType("Bool", [])]);
                    } else {
                      if (e.Kind.Fields[0].Case === "Empty") {
                        return new _ast.Type("Any", []);
                      } else {
                        return new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]);
                      }
                    }
                  }
                } else {
                  if (e.Kind.Case === "Root") {
                    return new _ast.Type("Any", []);
                  } else {
                    if (e.Kind.Case === "LetCommand") {
                      return new _ast.Type("Any", []);
                    } else {
                      if (e.Kind.Case === "RunCommand") {
                        return new _ast.Type("Any", []);
                      } else {
                        if (e.Kind.Case === "ArgumentList") {
                          return new _ast.Type("Any", []);
                        } else {
                          if (e.Kind.Case === "NamedParam") {
                            return new _ast.Type("Any", []);
                          } else {
                            if (e.Kind.Case === "NamedMember") {
                              return new _ast.Type("Any", []);
                            } else {
                              if (e.Kind.Case === "CallSite") {
                                return new _ast.Type("Any", []);
                              } else {
                                if (e.Kind.Case === "Program") {
                                  return new _ast.Type("Any", []);
                                } else {
                                  var _ret12 = function () {
                                    var name = e.Kind.Fields[0];

                                    if (!ctx.Globals.has(name.Name)) {
                                      (function (err) {
                                        addError(ctx, e, err);
                                      })(function (rng) {
                                        return _errors.TypeChecker.variableNotInScope(name.Name, rng);
                                      });

                                      return {
                                        v: new _ast.Type("Any", [])
                                      };
                                    } else {
                                      return {
                                        v: getType(ctx, ctx.Globals.get(name.Name))
                                      };
                                    }
                                  }();

                                  if ((typeof _ret12 === "undefined" ? "undefined" : _typeof(_ret12)) === "object") return _ret12.v;
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
            }
          }
        }
      }
    }
  }

  function evaluateDelayedType(topLevel, t) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var $target3 = function $target3() {
          return t.Case === "Function" ? builder_.Bind(evaluateDelayedType(topLevel, t.Fields[1]), function (_arg6) {
            return builder_.Bind(_common.Async.map(function (t_1) {
              return evaluateDelayedType(topLevel, t_1);
            }, t.Fields[0]), function (_arg7) {
              return builder_.Return(new _ast.Type("Function", [_arg7, _arg6]));
            });
          }) : t.Case === "List" ? builder_.Bind(evaluateDelayedType(topLevel, t.Fields[0]), function (_arg8) {
            return builder_.Return(new _ast.Type("List", [_arg8]));
          }) : t.Case === "Delayed" ? builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(t.Fields[1]), function (_arg9) {
            return builder_.ReturnFrom(evaluateDelayedType(topLevel, _arg9));
          }) : builder_.Return(t);
        };

        if (t.Case === "App") {
          var _ret13 = function () {
            var args = t.Fields[1];
            var t_1 = t.Fields[0];
            return {
              v: builder_.Bind(evaluateDelayedType(topLevel, t_1), function (_arg1) {
                return builder_.Return(new _ast.Type("App", [_arg1, args]));
              })
            };
          }();

          if ((typeof _ret13 === "undefined" ? "undefined" : _typeof(_ret13)) === "object") return _ret13.v;
        } else {
          if (t.Case === "Forall") {
            var _ret14 = function () {
              var t_1 = t.Fields[1];
              var vars = t.Fields[0];
              return {
                v: builder_.Bind(evaluateDelayedType(topLevel, t_1), function (_arg2) {
                  return builder_.Return(new _ast.Type("Forall", [vars, _arg2]));
                })
              };
            }();

            if ((typeof _ret14 === "undefined" ? "undefined" : _typeof(_ret14)) === "object") return _ret14.v;
          } else {
            if (t.Case === "Object") {
              if (topLevel) {
                var obj = t.Fields[0];
                return builder_.Bind(_common.Async.Array.map(function (m) {
                  return function (builder__1) {
                    return builder__1.Delay(function (unitVar_1) {
                      return m.Case === "Method" ? builder__1.Bind(_common.Async.map(function (tupledArg) {
                        return function (builder__2) {
                          return builder__2.Delay(function (unitVar_2) {
                            return builder__2.Bind(evaluateDelayedType(false, tupledArg[2]), function (_arg3) {
                              return builder__2.Return([tupledArg[0], tupledArg[1], _arg3]);
                            });
                          });
                        }(_fableCore.AsyncBuilder.singleton);
                      }, m.Fields[1]), function (_arg4) {
                        return builder__1.Return(new _ast.Member("Method", [m.Fields[0], _arg4, m.Fields[2], m.Fields[3], m.Fields[4]]));
                      }) : builder__1.Return(m);
                    });
                  }(_fableCore.AsyncBuilder.singleton);
                }, obj.Members), function (_arg5) {
                  return builder_.Return(new _ast.Type("Object", [new _ast.ObjectType(_arg5)]));
                });
              } else {
                return $target3();
              }
            } else {
              return $target3();
            }
          }
        }
      });
    }(_fableCore.AsyncBuilder.singleton);
  }

  function typeCheckEntityAsync(ctx, e) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var visited = new Map();

        var loop = function loop(e_1) {
          return function (builder__1) {
            return builder__1.Delay(function (unitVar_1) {
              var isGlobal = e_1.Kind.Case === "GlobalValue" ? true : false;

              if (!visited.has(e_1.Symbol) ? isGlobal ? true : function () {
                return e_1.Type == null;
              }() : false) {
                visited.set(e_1.Symbol, true);
                return builder__1.Combine(builder__1.For(_astops.Entity$2Eget_Antecedents.bind(e_1)(), function (_arg1) {
                  return builder__1.Bind(loop(_arg1), function (_arg2) {
                    return builder__1.Return();
                  });
                }), builder__1.Delay(function (unitVar_2) {
                  return builder__1.Bind(evaluateDelayedType(true, getType(ctx, e_1)), function (_arg3) {
                    _common.Log.trace("typechecker", "Type of entity '%s' (%O) is: %O", _astops.Entity$2Eget_Name.bind(e_1)(), e_1.Kind, _arg3);

                    e_1.Type = _arg3;
                    return builder__1.Zero();
                  });
                }));
              } else {
                return builder__1.Zero();
              }
            });
          }(_fableCore.AsyncBuilder.singleton);
        };

        return builder_.Bind(loop(e), function (_arg4) {
          return builder_.Return(getType(ctx, e));
        });
      });
    }(_fableCore.AsyncBuilder.singleton);
  }

  function collectTypeErrors(entity) {
    var errors = [];
    var visited = new Map();

    var loop = function loop(e) {
      if (!visited.has(e.Symbol)) {
        visited.set(e.Symbol, true);
        {
          var inputSequence = _astops.Entity$2Eget_Antecedents.bind(e)();

          for (var _iterator5 = inputSequence, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
            var _ref5;

            if (_isArray5) {
              if (_i5 >= _iterator5.length) break;
              _ref5 = _iterator5[_i5++];
            } else {
              _i5 = _iterator5.next();
              if (_i5.done) break;
              _ref5 = _i5.value;
            }

            var e_1 = _ref5;
            loop(e_1);
          }
        }

        _fableCore.Array.addRangeInPlace(e.Errors, errors);
      }
    };

    loop(entity);
    return Array.from(errors);
  }

  function typeCheckProgram(globals, bound, prog) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        _common.Log.trace("typechecker", "Type checking program");

        return builder_.TryWith(builder_.Delay(function (unitVar_1) {
          var rangeLookup = new Map(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
            return _fableCore.Seq.collect(function (matchValue) {
              return _fableCore.Seq.singleton([matchValue[1].Symbol, matchValue[0]]);
            }, bound.Entities);
          })));
          var vars = new Map(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
            return _fableCore.Seq.map(function (e) {
              return [_astops.Entity$2Eget_Name.bind(e)(), e];
            }, globals);
          })));
          var ctx = new CheckingContext([], vars, rangeLookup);
          return builder_.Bind(typeCheckEntityAsync(ctx, prog), function (_arg1) {
            _common.Log.trace("typechecker", "Completed type checking");

            return builder_.Zero();
          });
        }), function (_arg2) {
          _common.Log.exn("typechecker", "Type checking program failed: %O", _arg2);

          return builder_.Zero();
        });
      });
    }(_fableCore.AsyncBuilder.singleton);
  }
});
//# sourceMappingURL=typechecker.js.map