(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./extensions", "./errors", "./ast", "./astops", "./tokenizer", "./parser"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./extensions"), require("./errors"), require("./ast"), require("./astops"), require("./tokenizer"), require("./parser"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.extensions, global.errors, global.ast, global.astops, global.tokenizer, global.parser);
    global.typechecker = mod.exports;
  }
})(this, function (exports, _fableCore, _extensions, _errors, _ast, _astops, _tokenizer, _parser) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EditorInfo = exports.ObjectMembers = exports.CheckingResult = exports.CheckingContext = undefined;
  exports.addError = addError;
  exports.addVariable = addVariable;
  exports.listsEqual = listsEqual;
  exports.arraysEqual = arraysEqual;
  exports.membersEqual = membersEqual;
  exports.typesEqual = typesEqual;
  exports.getObjectMembers = getObjectMembers;
  exports.unifyTypes = unifyTypes;
  exports.avoidCapture = avoidCapture;
  exports.substituteMembers = substituteMembers;
  exports.substituteTypes = substituteTypes;
  exports.applyTypes = applyTypes;
  exports.typeCheckExpr = typeCheckExpr;
  exports.typeCheckCmd = typeCheckCmd;
  exports.typeCheckProgram = typeCheckProgram;
  exports.needsEscaping = needsEscaping;
  exports.escapeIdent = escapeIdent;
  exports.mapNameRanges = mapNameRanges;
  exports.mapExprRanges = mapExprRanges;
  exports.mapCmdRanges = mapCmdRanges;
  exports.tokenize = tokenize;
  exports.parse = parse;
  exports.typeCheck = typeCheck;
  exports.extendUntilDot = extendUntilDot;
  exports.withCompletion = withCompletion;
  exports.collectExprInfo = collectExprInfo;
  exports.collectCmdInfo = collectCmdInfo;
  exports.collectProgramInfo = collectProgramInfo;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CheckingContext = exports.CheckingContext = function CheckingContext(variables) {
    _classCallCheck(this, CheckingContext);

    this.Variables = variables;
  };

  _fableCore.Util.setInterfaces(CheckingContext.prototype, ["FSharpRecord"], "TheGamma.TypeChecker.CheckingContext");

  var CheckingResult = exports.CheckingResult = function () {
    function CheckingResult(errors) {
      _classCallCheck(this, CheckingResult);

      this.Errors = errors;
    }

    _createClass(CheckingResult, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsRecords(this, other);
      }
    }, {
      key: "CompareTo",
      value: function CompareTo(other) {
        return _fableCore.Util.compareRecords(this, other);
      }
    }]);

    return CheckingResult;
  }();

  _fableCore.Util.setInterfaces(CheckingResult.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypeChecker.CheckingResult");

  function addError(e, ctx) {
    return new CheckingResult(_fableCore.List.ofArray([e], ctx.Errors));
  }

  function addVariable(k, v, ctx) {
    return new CheckingContext(_fableCore.Map.add(k, v, ctx.Variables));
  }

  function listsEqual(l1, l2, f) {
    var matchValue = [l1, l2];

    var $target2 = function $target2() {
      return false;
    };

    if (matchValue[0].tail != null) {
      if (matchValue[1].tail != null) {
        if (function () {
          var ys = matchValue[1].tail;
          var y = matchValue[1].head;
          var xs = matchValue[0].tail;
          var x = matchValue[0].head;
          return f(x)(y);
        }()) {
          var x = matchValue[0].head;
          var xs = matchValue[0].tail;
          var y = matchValue[1].head;
          var ys = matchValue[1].tail;
          return listsEqual(xs, ys, f);
        } else {
          return $target2();
        }
      } else {
        return $target2();
      }
    } else {
      if (matchValue[1].tail == null) {
        return true;
      } else {
        return $target2();
      }
    }
  }

  function arraysEqual(l1, l2, f) {
    var loop = function loop(i) {
      return (i === l1.length ? i === l2.length : false) ? true : (i < l1.length ? i < l2.length : false) ? f(l1[i])(l2[i]) ? loop(i + 1) : false : false;
    };

    return loop(0);
  }

  function membersEqual(m1, m2) {
    var matchValue = [m1, m2];

    var $target2 = function $target2() {
      return false;
    };

    if (matchValue[0].Case === "Method") {
      if (matchValue[1].Case === "Method") {
        var a1 = matchValue[0].Fields[2];
        var a2 = matchValue[1].Fields[2];
        var d1 = matchValue[0].Fields[4];
        var d2 = matchValue[1].Fields[4];
        var n1 = matchValue[0].Fields[0];
        var n2 = matchValue[1].Fields[0];
        var r1 = matchValue[0].Fields[3];
        var r2 = matchValue[1].Fields[3];
        var t1 = matchValue[0].Fields[1];
        var t2 = matchValue[1].Fields[1];

        if (n1 === n2 ? d1.Equals(d2) : false) {
          return listsEqual(a1, a2, function (tupledArg) {
            return function (tupledArg_1) {
              return tupledArg[0] === tupledArg_1[0] ? tupledArg[1] === tupledArg_1[1] : false;
            };
          });
        } else {
          return false;
        }
      } else {
        return $target2();
      }
    } else {
      if (matchValue[1].Case === "Property") {
        var d1 = matchValue[0].Fields[3];
        var d2 = matchValue[1].Fields[3];
        var n1 = matchValue[0].Fields[0];
        var n2 = matchValue[1].Fields[0];
        var s1 = matchValue[0].Fields[2];
        var s2 = matchValue[1].Fields[2];
        var t1 = matchValue[0].Fields[1];
        var t2 = matchValue[1].Fields[1];

        if (n1 === n2 ? _fableCore.Util.equals(s1, s2) : false) {
          return d1.Equals(d2);
        } else {
          return false;
        }
      } else {
        return $target2();
      }
    }
  }

  function typesEqual(t1, t2) {
    var matchValue = [t1, t2];

    var $target7 = function $target7() {
      return false;
    };

    if (matchValue[0].Case === "Any") {
      if (matchValue[1].Case === "Any") {
        return true;
      } else {
        return $target7();
      }
    } else {
      if (matchValue[0].Case === "Delayed") {
        if (matchValue[1].Case === "Delayed") {
          var g1 = matchValue[0].Fields[0];
          var g2 = matchValue[1].Fields[0];
          return g1 === g2;
        } else {
          return $target7();
        }
      } else {
        if (matchValue[0].Case === "Function") {
          if (matchValue[1].Case === "Function") {
            var a1 = matchValue[0].Fields[0];
            var a2 = matchValue[1].Fields[0];
            var r1 = matchValue[0].Fields[1];
            var r2 = matchValue[1].Fields[1];
            return listsEqual(_fableCore.List.ofArray([r1], a1), _fableCore.List.ofArray([r2], a2), function (t1_1) {
              return function (t2_1) {
                return typesEqual(t1_1, t2_1);
              };
            });
          } else {
            return $target7();
          }
        } else {
          if (matchValue[0].Case === "Object") {
            if (matchValue[1].Case === "Object") {
              var o1 = matchValue[0].Fields[0];
              var o2 = matchValue[1].Fields[0];

              if (listsEqual(o1.Typeargs, o2.Typeargs, function (t1_1) {
                return function (t2_1) {
                  return typesEqual(t1_1, t2_1);
                };
              })) {
                return arraysEqual(o1.Members, o2.Members, function (m1) {
                  return function (m2) {
                    return membersEqual(m1, m2);
                  };
                });
              } else {
                return false;
              }
            } else {
              return $target7();
            }
          } else {
            if (matchValue[0].Case === "Parameter") {
              if (matchValue[1].Case === "Parameter") {
                var n1 = matchValue[0].Fields[0];
                var n2 = matchValue[1].Fields[0];
                return n1 === n2;
              } else {
                return $target7();
              }
            } else {
              if (matchValue[0].Case === "Primitive") {
                if (matchValue[1].Case === "Primitive") {
                  var n1 = matchValue[0].Fields[0];
                  var n2 = matchValue[1].Fields[0];
                  return n1 === n2;
                } else {
                  return $target7();
                }
              } else {
                if (matchValue[0].Case === "Unit") {
                  if (matchValue[1].Case === "Unit") {
                    return true;
                  } else {
                    return $target7();
                  }
                } else {
                  return $target7();
                }
              }
            }
          }
        }
      }
    }
  }

  var ObjectMembers = exports.ObjectMembers = function ObjectMembers(caseName, fields) {
    _classCallCheck(this, ObjectMembers);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(ObjectMembers.prototype, ["FSharpUnion"], "TheGamma.TypeChecker.ObjectMembers");

  function getObjectMembers(t) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var $target2 = function $target2() {
          return builder_.Return(new ObjectMembers("NotAnObject", []));
        };

        if (t.Case === "Object") {
          return builder_.Return(new ObjectMembers("Members", [t.Fields[0].Members]));
        } else {
          if (t.Case === "Unit") {
            return $target2();
          } else {
            if (t.Case === "Parameter") {
              return $target2();
            } else {
              if (t.Case === "Function") {
                return $target2();
              } else {
                if (t.Case === "List") {
                  return $target2();
                } else {
                  if (t.Case === "Primitive") {
                    return $target2();
                  } else {
                    if (t.Case === "Any") {
                      return builder_.Return(new ObjectMembers("SilentError", []));
                    } else {
                      return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(t.Fields[1]), function (_arg1) {
                        return builder_.ReturnFrom(getObjectMembers(_arg1));
                      });
                    }
                  }
                }
              }
            }
          }
        }
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function unifyTypes(assigns, ts1, ts2) {
    var matchValue = [ts1, ts2];

    var $target1 = function $target1(t1, t2, ts1_1, ts2_1) {
      return unifyTypes(assigns, ts1_1, ts2_1);
    };

    var $target2 = function $target2() {
      var $target1_1 = function $target1_1() {
        var $target0 = function $target0(t, ts1_1, ts2_1) {
          return unifyTypes(assigns, ts1_1, ts2_1);
        };

        var $target1_1 = function $target1_1(n, t, ts1_1, ts2_1) {
          return unifyTypes(_fableCore.List.ofArray([[n, t]], assigns), ts1_1, ts2_1);
        };

        var $target5 = function $target5(ts1_1, ts2_1) {
          return function (builder_) {
            return builder_.Delay(function (unitVar) {
              return builder_.Return(function (res) {
                return function (rng) {
                  _extensions.Log.error("typechecker", "Cannot unify types: %O and %O", Array.from(ts1_1), Array.from(ts2_1));

                  return [assigns, addError(_errors.TypeChecker.cannotUnityTypes(rng), res)];
                };
              });
            });
          }(_fableCore.defaultAsyncBuilder);
        };

        if (matchValue[0].tail == null) {
          if (matchValue[1].tail == null) {
            return function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Return(function (res) {
                  return function (rng) {
                    return [assigns, res];
                  };
                });
              });
            }(_fableCore.defaultAsyncBuilder);
          } else {
            return $target5(matchValue[0], matchValue[1]);
          }
        } else {
          if (matchValue[0].head.Case === "Any") {
            if (matchValue[1].tail != null) {
              return $target0(matchValue[1].head, matchValue[0].tail, matchValue[1].tail);
            } else {
              return $target5(matchValue[0], matchValue[1]);
            }
          } else {
            if (matchValue[0].head.Case === "Parameter") {
              if (matchValue[1].tail != null) {
                if (matchValue[1].head.Case === "Any") {
                  return $target0(matchValue[0].head, matchValue[0].tail, matchValue[1].tail);
                } else {
                  if (matchValue[1].head.Case === "Parameter") {
                    return $target1_1(matchValue[0].head.Fields[0], matchValue[1].head, matchValue[0].tail, matchValue[1].tail);
                  } else {
                    return $target1_1(matchValue[0].head.Fields[0], matchValue[1].head, matchValue[0].tail, matchValue[1].tail);
                  }
                }
              } else {
                return $target5(matchValue[0], matchValue[1]);
              }
            } else {
              if (matchValue[0].head.Case === "Function") {
                if (matchValue[1].tail != null) {
                  if (matchValue[1].head.Case === "Any") {
                    return $target0(matchValue[0].head, matchValue[0].tail, matchValue[1].tail);
                  } else {
                    if (matchValue[1].head.Case === "Parameter") {
                      return $target1_1(matchValue[1].head.Fields[0], matchValue[0].head, matchValue[0].tail, matchValue[1].tail);
                    } else {
                      if (matchValue[1].head.Case === "Function") {
                        var tis1 = matchValue[0].head.Fields[0];
                        var tis2 = matchValue[1].head.Fields[0];
                        var to1 = matchValue[0].head.Fields[1];
                        var to2 = matchValue[1].head.Fields[1];
                        var ts1_1 = matchValue[0].tail;
                        var ts2_1 = matchValue[1].tail;
                        return unifyTypes(assigns, _fableCore.List.append(_fableCore.List.ofArray([to1], tis1), ts1_1), _fableCore.List.append(_fableCore.List.ofArray([to2], tis2), ts2_1));
                      } else {
                        return $target5(matchValue[0], matchValue[1]);
                      }
                    }
                  }
                } else {
                  return $target5(matchValue[0], matchValue[1]);
                }
              } else {
                if (matchValue[0].head.Case === "List") {
                  if (matchValue[1].tail != null) {
                    if (matchValue[1].head.Case === "Any") {
                      return $target0(matchValue[0].head, matchValue[0].tail, matchValue[1].tail);
                    } else {
                      if (matchValue[1].head.Case === "Parameter") {
                        return $target1_1(matchValue[1].head.Fields[0], matchValue[0].head, matchValue[0].tail, matchValue[1].tail);
                      } else {
                        if (matchValue[1].head.Case === "List") {
                          var t1 = matchValue[0].head.Fields[0];
                          var t2 = matchValue[1].head.Fields[0];
                          var ts1_1 = matchValue[0].tail;
                          var ts2_1 = matchValue[1].tail;
                          return unifyTypes(assigns, _fableCore.List.ofArray([t1], ts1_1), _fableCore.List.ofArray([t2], ts2_1));
                        } else {
                          return $target5(matchValue[0], matchValue[1]);
                        }
                      }
                    }
                  } else {
                    return $target5(matchValue[0], matchValue[1]);
                  }
                } else {
                  if (matchValue[1].tail != null) {
                    if (matchValue[1].head.Case === "Any") {
                      return $target0(matchValue[0].head, matchValue[0].tail, matchValue[1].tail);
                    } else {
                      if (matchValue[1].head.Case === "Parameter") {
                        return $target1_1(matchValue[1].head.Fields[0], matchValue[0].head, matchValue[0].tail, matchValue[1].tail);
                      } else {
                        return $target5(matchValue[0], matchValue[1]);
                      }
                    }
                  } else {
                    return $target5(matchValue[0], matchValue[1]);
                  }
                }
              }
            }
          }
        }
      };

      if (matchValue[0].tail != null) {
        if (matchValue[0].head.Case === "Object") {
          if (matchValue[1].tail != null) {
            if (matchValue[1].head.Case === "Object") {
              if (function () {
                var ts2_1 = matchValue[1].tail;
                var ts1_1 = matchValue[0].tail;
                var o2 = matchValue[1].head.Fields[0];
                var o1 = matchValue[0].head.Fields[0];
                return arraysEqual(o1.Members, o2.Members, function (m1) {
                  return function (m2) {
                    return membersEqual(m1, m2);
                  };
                });
              }()) {
                var o1 = matchValue[0].head.Fields[0];
                var o2 = matchValue[1].head.Fields[0];
                var ts1_1 = matchValue[0].tail;
                var ts2_1 = matchValue[1].tail;
                return unifyTypes(assigns, _fableCore.List.append(o1.Typeargs, ts1_1), _fableCore.List.append(o2.Typeargs, ts2_1));
              } else {
                return $target1_1();
              }
            } else {
              return $target1_1();
            }
          } else {
            return $target1_1();
          }
        } else {
          return $target1_1();
        }
      } else {
        return $target1_1();
      }
    };

    if (matchValue[0].tail != null) {
      if (matchValue[0].head.Case === "Delayed") {
        if (matchValue[1].tail != null) {
          if (matchValue[1].head.Case === "Delayed") {
            var f1 = matchValue[0].head.Fields[1];
            var f2 = matchValue[1].head.Fields[1];
            var id1 = matchValue[0].head.Fields[0];
            var id2 = matchValue[1].head.Fields[0];
            var ts1_1 = matchValue[0].tail;
            var ts2_1 = matchValue[1].tail;
            return function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(f1), function (_arg1) {
                  return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(f2), function (_arg2) {
                    return builder_.ReturnFrom(unifyTypes(assigns, _fableCore.List.ofArray([_arg1], ts1_1), _fableCore.List.ofArray([_arg2], ts2_1)));
                  });
                });
              });
            }(_fableCore.defaultAsyncBuilder);
          } else {
            if (function () {
              var ts2_1 = matchValue[1].tail;
              var ts1_1 = matchValue[0].tail;
              var t2 = matchValue[1].head;
              var t1 = matchValue[0].head;
              return typesEqual(t1, t2);
            }()) {
              return $target1(matchValue[0].head, matchValue[1].head, matchValue[0].tail, matchValue[1].tail);
            } else {
              return $target2();
            }
          }
        } else {
          return $target2();
        }
      } else {
        if (matchValue[1].tail != null) {
          if (function () {
            var ts2_1 = matchValue[1].tail;
            var ts1_1 = matchValue[0].tail;
            var t2 = matchValue[1].head;
            var t1 = matchValue[0].head;
            return typesEqual(t1, t2);
          }()) {
            return $target1(matchValue[0].head, matchValue[1].head, matchValue[0].tail, matchValue[1].tail);
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

  function avoidCapture(bound, assigns) {
    var renames = _fableCore.List.choose(function (n) {
      var assigned = _fableCore.Map.tryFindKey(function (k, v) {
        return v.Case === "Parameter" ? n === v.Fields[0] : false;
      }, assigns);

      if (function () {
        return assigned != null;
      }()) {
        return [n, n + "0"];
      }
    }, bound);

    return [function () {
      var folder = function folder(assigns_1) {
        return function (tupledArg) {
          return _fableCore.Map.add(tupledArg[0], new _ast.Type("Parameter", [tupledArg[1]]), assigns_1);
        };
      };

      return function (list) {
        return _fableCore.Seq.fold(function ($var8, $var9) {
          return folder($var8)($var9);
        }, assigns, list);
      };
    }()(renames), _fableCore.Map.create(renames, new _fableCore.GenericComparer(function (x, y) {
      return x < y ? -1 : x > y ? 1 : 0;
    }))];
  }

  function substituteMembers(assigns, members) {
    return members.map(function (_arg1) {
      return _arg1.Case === "Property" ? new _ast.Member("Property", [_arg1.Fields[0], substituteTypes(assigns, _arg1.Fields[1]), _arg1.Fields[2], _arg1.Fields[3], _arg1.Fields[4]]) : function () {
        var patternInput = avoidCapture(_arg1.Fields[1], assigns);

        var tp = _fableCore.List.map(function (tp) {
          var matchValue = _fableCore.Map.tryFind(tp, patternInput[1]);

          if (matchValue != null) {
            return matchValue;
          } else {
            return tp;
          }
        }, _arg1.Fields[1]);

        var nars = _fableCore.List.map(function (tupledArg) {
          return [tupledArg[0], tupledArg[1], substituteTypes(patternInput[0], tupledArg[2])];
        }, _arg1.Fields[2]);

        return new _ast.Member("Method", [_arg1.Fields[0], tp, nars, substituteTypes(patternInput[0], _arg1.Fields[3]), _arg1.Fields[4], _arg1.Fields[5]]);
      }();
    });
  }

  function substituteTypes(assigns, t) {
    var $target1 = function $target1() {
      var $target0 = function $target0() {
        return t;
      };

      if (t.Case === "Any") {
        return $target0();
      } else {
        if (t.Case === "Primitive") {
          return $target0();
        } else {
          if (t.Case === "Unit") {
            return $target0();
          } else {
            if (t.Case === "Function") {
              return new _ast.Type("Function", [_fableCore.List.map(function (t_1) {
                return substituteTypes(assigns, t_1);
              }, t.Fields[0]), substituteTypes(assigns, t.Fields[1])]);
            } else {
              if (t.Case === "List") {
                return new _ast.Type("List", [substituteTypes(assigns, t.Fields[0])]);
              } else {
                if (t.Case === "Object") {
                  var members = substituteMembers(assigns, t.Fields[0].Members);

                  var bound = _fableCore.List.choose(function (_arg2) {
                    return _arg2.Case === "Parameter" ? _arg2.Fields[0] : null;
                  }, t.Fields[0].Typeargs);

                  var patternInput = avoidCapture(bound, assigns);
                  return new _ast.Type("Object", [function () {
                    var Typeargs = _fableCore.List.map(function (t_1) {
                      return substituteTypes(patternInput[0], t_1);
                    }, t.Fields[0].Typeargs);

                    return new _ast.ObjectType(members, Typeargs);
                  }()]);
                } else {
                  if (t.Case === "Delayed") {
                    var _f;

                    var f = (_f = {}, _defineProperty(_f, _fableCore.Symbol.interfaces, ["Fable.Extensions.Future"]), _defineProperty(_f, "Then", function Then(g) {
                      t.Fields[1].Then(function (t_1) {
                        g(substituteTypes(assigns, t_1));
                      });
                    }), _f);
                    return new _ast.Type("Delayed", [t.Fields[0], f]);
                  } else {
                    return $target0();
                  }
                }
              }
            }
          }
        }
      }
    };

    if (t.Case === "Parameter") {
      if (assigns.has(t.Fields[0])) {
        var s = t.Fields[0];
        return assigns.get(s);
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function applyTypes(assigns, t) {
    return t.Case === "Delayed" ? function () {
      var _f2;

      var f = (_f2 = {}, _defineProperty(_f2, _fableCore.Symbol.interfaces, ["Fable.Extensions.Future"]), _defineProperty(_f2, "Then", function Then(g) {
        t.Fields[1].Then(function (t_1) {
          g(applyTypes(assigns, t_1));
        });
      }), _f2);
      return new _ast.Type("Delayed", [t.Fields[0], f]);
    }() : t.Case === "Object" ? new _ast.Type("Object", [function () {
      var Typeargs = _fableCore.List.map(function (t_1) {
        return substituteTypes(assigns, t_1);
      }, t.Fields[0].Typeargs);

      return new _ast.ObjectType(substituteMembers(assigns, t.Fields[0].Members), Typeargs);
    }()]) : _fableCore.Seq.toList(assigns).tail == null ? t : t.Case === "Any" ? new _ast.Type("Any", []) : function () {
      _extensions.Log.error("typechecker", "Invalid type application %O with %O", t, Array.from(assigns));

      throw "Invalid type application";
    }();
  }

  function typeCheckExpr(ctx, ctxTyp, res, expr) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var $target4 = function $target4() {
          return expr.Expr.Case === "Variable" ? builder_.Return([function () {
            var Expr = new _ast.ExprKind("Variable", [expr.Expr.Fields[0]]);
            var Type = new _ast.Type("Any", []);
            return new _ast.Expr(Expr, expr.Range, Type);
          }(), addError(_errors.TypeChecker.variableNotInScope(expr.Range, expr.Expr.Fields[0].Name), res)]) : expr.Expr.Case === "Number" ? builder_.Return([function () {
            var Expr = new _ast.ExprKind("Number", [expr.Expr.Fields[0]]);
            var Type = new _ast.Type("Primitive", ["num"]);
            return new _ast.Expr(Expr, expr.Range, Type);
          }(), res]) : expr.Expr.Case === "String" ? builder_.Return([function () {
            var Expr = new _ast.ExprKind("String", [expr.Expr.Fields[0]]);
            var Type = new _ast.Type("Primitive", ["string"]);
            return new _ast.Expr(Expr, expr.Range, Type);
          }(), res]) : expr.Expr.Case === "Boolean" ? builder_.Return([function () {
            var Expr = new _ast.ExprKind("Boolean", [expr.Expr.Fields[0]]);
            var Type = new _ast.Type("Primitive", ["bool"]);
            return new _ast.Expr(Expr, expr.Range, Type);
          }(), res]) : expr.Expr.Case === "Function" ? function () {
            var varTy = function () {
              var $var10 = ctxTyp;

              if ($var10 != null) {
                return function (_arg1) {
                  var $target1 = function $target1() {
                    return null;
                  };

                  if (_arg1.Case === "Function") {
                    if (_arg1.Fields[0].tail != null) {
                      if (_arg1.Fields[0].tail.tail == null) {
                        var ty = _arg1.Fields[0].head;
                        return ty;
                      } else {
                        return $target1();
                      }
                    } else {
                      return $target1();
                    }
                  } else {
                    return $target1();
                  }
                }($var10);
              } else {
                return $var10;
              }
            }();

            var varTy_1 = varTy != null ? varTy : new _ast.Type("Any", []);

            _extensions.Log.trace("typechecker", "function: '%s -> ...' in context: %O", expr.Expr.Fields[0].Name, varTy_1);

            return builder_.Bind(typeCheckExpr(addVariable(expr.Expr.Fields[0].Name, varTy_1, ctx), null, res, expr.Expr.Fields[1]), function (_arg2) {
              return builder_.Return([function () {
                var Expr = new _ast.ExprKind("Function", [expr.Expr.Fields[0], _arg2[0]]);
                var Type = new _ast.Type("Function", [_fableCore.List.ofArray([varTy_1]), _arg2[0].Type]);
                return new _ast.Expr(Expr, expr.Range, Type);
              }(), _arg2[1]]);
            });
          }() : expr.Expr.Case === "List" ? builder_.Bind(function () {
            var f = function () {
              var ctxTyp_1 = null;
              return function (res_1) {
                return function (expr_1) {
                  return typeCheckExpr(ctx, ctxTyp_1, res_1, expr_1);
                };
              };
            }();

            return function (l) {
              return _extensions.Async.foldMap(f, res, l);
            };
          }()(expr.Expr.Fields[0]), function (_arg3) {
            var tys = new _fableCore.List();
            return builder_.Combine(builder_.For(_arg3[1], function (_arg4) {
              var known = _fableCore.Seq.exists(function (t2) {
                return typesEqual(_arg4.Type, t2);
              }, tys);

              if (!known) {
                tys = _fableCore.List.ofArray([_arg4.Type], tys);
                return builder_.Zero();
              } else {
                return builder_.Zero();
              }
            }), builder_.Delay(function (unitVar_1) {
              var patternInput = tys.tail != null ? tys.tail.tail == null ? function () {
                var ty = tys.head;
                return [ty, _arg3[0]];
              }() : function () {
                var ty = tys.head;
                return [new _ast.Type("Any", []), _arg3[0]];
              }() : [new _ast.Type("Any", []), _arg3[0]];
              return builder_.Return([function () {
                var Expr = new _ast.ExprKind("List", [_arg3[1]]);
                var Type = new _ast.Type("List", [patternInput[0]]);
                return new _ast.Expr(Expr, expr.Range, Type);
              }(), patternInput[1]]);
            }));
          }) : expr.Expr.Case === "Property" ? function () {
            _extensions.Log.trace("typechecker", "checking access %s", expr.Expr.Fields[1].Name);

            return builder_.Bind(typeCheckExpr(ctx, null, res, expr.Expr.Fields[0]), function (_arg5) {
              return builder_.Bind(getObjectMembers(_arg5[0].Type), function (_arg6) {
                _extensions.Log.trace("typechecker", "checked access %s", expr.Expr.Fields[1].Name);

                var patternInput = _arg6.Case === "SilentError" ? [new _ast.Type("Any", []), _arg5[1]] : _arg6.Case === "NotAnObject" ? [new _ast.Type("Any", []), addError(_errors.TypeChecker.notAnObject(expr.Expr.Fields[0].Range, _arg5[0].Type), _arg5[1])] : function () {
                  var matchValue = _fableCore.Seq.tryPick(function (_arg7) {
                    var $target1 = function $target1() {
                      return null;
                    };

                    if (_arg7.Case === "Property") {
                      if (_arg7.Fields[0] === expr.Expr.Fields[1].Name) {
                        var n = _arg7.Fields[0];
                        var r = _arg7.Fields[1];
                        return r;
                      } else {
                        return $target1();
                      }
                    } else {
                      return $target1();
                    }
                  }, _arg6.Fields[0]);

                  if (matchValue != null) {
                    return [matchValue, _arg5[1]];
                  } else {
                    return [new _ast.Type("Any", []), addError(_errors.TypeChecker.propertyMissing(expr.Expr.Fields[1].Range, expr.Expr.Fields[1].Name, _arg6.Fields[0]), _arg5[1])];
                  }
                }();
                return builder_.Return([function () {
                  var Expr = new _ast.ExprKind("Property", [_arg5[0], expr.Expr.Fields[1]]);
                  return new _ast.Expr(Expr, expr.Range, patternInput[0]);
                }(), patternInput[1]]);
              });
            });
          }() : expr.Expr.Case === "Call" ? builder_.Bind(typeCheckExpr(ctx, null, res, expr.Expr.Fields[0]), function (_arg8) {
            return builder_.Bind(getObjectMembers(_arg8[0].Type), function (_arg9) {
              var patternInput = function () {
                var pb = _fableCore.Seq.toList(_fableCore.Seq.takeWhile(function (arg) {
                  return function () {
                    return arg.Name == null;
                  }();
                }, expr.Expr.Fields[2]));

                var nb = _fableCore.Seq.toList(_fableCore.Seq.skipWhile(function (arg) {
                  return function () {
                    return arg.Name == null;
                  }();
                }, expr.Expr.Fields[2]));

                return [Array.from(_fableCore.List.map(function (arg) {
                  return arg.Value;
                }, pb)), _fableCore.Map.create(_fableCore.List.choose(function (arg) {
                  var $var11 = arg.Name;

                  if ($var11 != null) {
                    return function (n) {
                      return [n.Name, arg.Value];
                    }($var11);
                  } else {
                    return $var11;
                  }
                }, nb), new _fableCore.GenericComparer(function (x, y) {
                  return x < y ? -1 : x > y ? 1 : 0;
                })), function () {
                  var matchValue = _fableCore.Seq.tryFind(function (arg) {
                    return function () {
                      return arg.Name == null;
                    }();
                  }, nb);

                  if (matchValue != null) {
                    return addError(_errors.TypeChecker.nameBasedParamMustBeLast(matchValue.Value.Range), _arg8[1]);
                  } else {
                    return _arg8[1];
                  }
                }()];
              }();

              var noRange = new _ast.Range(0, 0);

              var checkArguments = function checkArguments(pars) {
                return function () {
                  var f = function f(res_1) {
                    return function (tupledArg) {
                      return function (builder__1) {
                        return builder__1.Delay(function (unitVar_1) {
                          var arg = tupledArg[0] < patternInput[0].length ? patternInput[0][tupledArg[0]] : _fableCore.Map.tryFind(tupledArg[1][0], patternInput[1]);

                          if (arg == null) {
                            if (tupledArg[1][1]) {
                              var v = new _ast.Expr(new _ast.ExprKind("Null", []), noRange, tupledArg[1][2]);
                              return builder__1.Return([new _ast.Argument(new _ast.Name(tupledArg[1][0], noRange), v), res_1]);
                            } else {
                              var v = new _ast.Expr(new _ast.ExprKind("Empty", []), noRange, tupledArg[1][2]);
                              return builder__1.Return([new _ast.Argument(new _ast.Name(tupledArg[1][0], noRange), v), res_1]);
                            }
                          } else {
                            return builder__1.Bind(typeCheckExpr(ctx, tupledArg[1][2], res_1, arg), function (_arg10) {
                              return builder__1.Return([new _ast.Argument(new _ast.Name(tupledArg[1][0], arg.Range), _arg10[0]), _arg10[1]]);
                            });
                          }
                        });
                      }(_fableCore.defaultAsyncBuilder);
                    };
                  };

                  return function (l) {
                    return _extensions.Async.foldMap(f, patternInput[2], l);
                  };
                }()(_fableCore.List.mapIndexed(function (i, p) {
                  return [i, p];
                }, pars));
              };

              return builder_.Bind(function (builder__1) {
                return builder__1.Delay(function (unitVar_1) {
                  return _arg9.Case === "SilentError" ? builder__1.Return([new _ast.Type("Any", []), new _fableCore.List(), patternInput[2]]) : _arg9.Case === "NotAnObject" ? builder__1.Return([new _ast.Type("Any", []), new _fableCore.List(), addError(_errors.TypeChecker.notAnObject(expr.Expr.Fields[0].Range, _arg8[0].Type), patternInput[2])]) : function () {
                    var matchValue = _fableCore.Seq.tryPick(function (_arg11) {
                      var $target1 = function $target1() {
                        return null;
                      };

                      if (_arg11.Case === "Method") {
                        if (_arg11.Fields[0] === expr.Expr.Fields[1].Name) {
                          var args = _arg11.Fields[2];
                          var n = _arg11.Fields[0];
                          var r = _arg11.Fields[3];
                          var tp = _arg11.Fields[1];
                          return [tp, r, args];
                        } else {
                          return $target1();
                        }
                      } else {
                        return $target1();
                      }
                    }, _arg9.Fields[0]);

                    if (matchValue != null) {
                      var tp = matchValue[0];
                      var resTyp = matchValue[1];
                      var pars = matchValue[2];
                      return builder__1.Bind(checkArguments(pars), function (_arg12) {
                        var typedArgs = _fableCore.List.map(function (tupledArg) {
                          return new _ast.Argument(new _ast.Name(tupledArg[0][0], tupledArg[1].Value.Range), tupledArg[1].Value);
                        }, _fableCore.Seq.toList(_fableCore.Seq.zip(pars, _arg12[1])));

                        var parTys = _fableCore.List.map(function (tupledArg) {
                          return tupledArg[2];
                        }, pars);

                        var argTys = _fableCore.List.map(function (a) {
                          return a.Value.Type;
                        }, typedArgs);

                        _extensions.Log.trace("typechecker", "unifying %s: pars: %O, args: %O", expr.Expr.Fields[1].Name, Array.from(parTys), Array.from(argTys));

                        return builder__1.Bind(unifyTypes(new _fableCore.List(), parTys, argTys), function (_arg13) {
                          var patternInput_1 = _arg13(_arg12[0])(expr.Expr.Fields[1].Range);

                          _extensions.Log.trace("typechecker", "call %s: tyargs: %s, assigns: %O", expr.Expr.Fields[1].Name, _fableCore.String.join(",", tp), Array.from(patternInput_1[0]));

                          var resTyp_1 = applyTypes(_fableCore.Map.create(patternInput_1[0], new _fableCore.GenericComparer(function (x, y) {
                            return x < y ? -1 : x > y ? 1 : 0;
                          })), resTyp);

                          _extensions.Log.trace("typechecker", "call %s: result type: %O", expr.Expr.Fields[1].Name, resTyp_1);

                          return builder__1.Return([resTyp_1, typedArgs, patternInput_1[1]]);
                        });
                      });
                    } else {
                      var res_1 = addError(_errors.TypeChecker.methodMissing(expr.Expr.Fields[1].Range, expr.Expr.Fields[1].Name, _arg9.Fields[0]), patternInput[2]);
                      return builder__1.Return([new _ast.Type("Any", []), new _fableCore.List(), res_1]);
                    }
                  }();
                });
              }(_fableCore.defaultAsyncBuilder), function (_arg14) {
                return builder_.Return([function () {
                  var Expr = new _ast.ExprKind("Call", [_arg8[0], expr.Expr.Fields[1], _arg14[1]]);
                  return new _ast.Expr(Expr, expr.Range, _arg14[0]);
                }(), _arg14[2]]);
              });
            });
          }) : function () {
            throw ["c:\\tomas\\public\\thegamma\\thegamma-script\\src\\thegamma\\typechecker.fs", 154, 8];
          }();
        };

        if (expr.Expr.Case === "Null") {
          return builder_.Return(function () {
            throw "Unexpected null in source code.";
          }());
        } else {
          if (expr.Expr.Case === "Unit") {
            return builder_.Return([function () {
              var Expr = new _ast.ExprKind("Unit", []);
              var Type = new _ast.Type("Unit", []);
              return new _ast.Expr(Expr, expr.Range, Type);
            }(), res]);
          } else {
            if (expr.Expr.Case === "Empty") {
              return builder_.Return([function () {
                var Expr = new _ast.ExprKind("Empty", []);
                var Type = new _ast.Type("Any", []);
                return new _ast.Expr(Expr, expr.Range, Type);
              }(), res]);
            } else {
              if (expr.Expr.Case === "Variable") {
                if (ctx.Variables.has(expr.Expr.Fields[0].Name)) {
                  var v = expr.Expr.Fields[0];
                  return builder_.Return([function () {
                    var Expr = new _ast.ExprKind("Variable", [v]);
                    var Type = ctx.Variables.get(v.Name);
                    return new _ast.Expr(Expr, expr.Range, Type);
                  }(), res]);
                } else {
                  return $target4();
                }
              } else {
                return $target4();
              }
            }
          }
        }
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function typeCheckCmd(ctx, res, cmds) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return cmds.tail == null ? builder_.Return([new _fableCore.List(), res]) : cmds.head.Command.Case === "Expr" ? function () {
          var cmd = cmds.head;
          var cmds_1 = cmds.tail;
          var expr = cmds.head.Command.Fields[0];
          return builder_.Bind(typeCheckExpr(ctx, null, res, expr), function (_arg3) {
            return builder_.Bind(typeCheckCmd(ctx, _arg3[1], cmds_1), function (_arg4) {
              return builder_.Return([_fableCore.List.ofArray([new _ast.Command(new _ast.CommandKind("Expr", [_arg3[0]]), cmd.Range)], _arg4[0]), _arg4[1]]);
            });
          });
        }() : function () {
          var cmd = cmds.head;
          var cmds_1 = cmds.tail;
          var expr = cmds.head.Command.Fields[1];
          var name = cmds.head.Command.Fields[0];
          return builder_.Bind(typeCheckExpr(ctx, null, res, expr), function (_arg1) {
            return builder_.Bind(typeCheckCmd(addVariable(name.Name, _arg1[0].Type, ctx), _arg1[1], cmds_1), function (_arg2) {
              return builder_.Return([_fableCore.List.ofArray([new _ast.Command(new _ast.CommandKind("Let", [name, _arg1[0]]), cmd.Range)], _arg2[0]), _arg2[1]]);
            });
          });
        }();
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function typeCheckProgram(ctx, res, prog) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return builder_.Bind(typeCheckCmd(ctx, res, prog.Body), function (_arg1) {
          return builder_.Return([new _ast.Program(_arg1[0], prog.Range), _arg1[1]]);
        });
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function needsEscaping(s) {
    return (s[0] >= "0" ? s[0] <= "9" : false) ? true : s.split("").some(function (c) {
      return !(((c >= "a" ? c <= "z" : false) ? true : c >= "A" ? c <= "Z" : false) ? true : c >= "0" ? c <= "9" : false);
    });
  }

  function escapeIdent(s) {
    return needsEscaping(s) ? "'" + s + "'" : s;
  }

  function mapNameRanges(f, n) {
    var _Range = f(n.Range);

    return new _ast.Name(n.Name, _Range);
  }

  function mapExprRanges(f, expr) {
    var activePatternResult4889 = (0, _astops.$ExprLeaf$ExprNode$)(expr.Expr);

    if (activePatternResult4889.Case === "Choice2Of2") {
      var es = activePatternResult4889.Fields[0][0];
      var ns = activePatternResult4889.Fields[0][1];
      return new _ast.Expr((0, _astops.rebuildExprNode)(expr.Expr, _fableCore.List.map(function (expr_1) {
        return mapExprRanges(f, expr_1);
      }, es), _fableCore.List.map(function (n) {
        return mapNameRanges(f, n);
      }, ns)), f(expr.Range), expr.Type);
    } else {
      var _Range = f(expr.Range);

      return new _ast.Expr(expr.Expr, _Range, expr.Type);
    }
  }

  function mapCmdRanges(f, cmd) {
    return cmd.Command.Case === "Let" ? new _ast.Command(new _ast.CommandKind("Let", [mapNameRanges(f, cmd.Command.Fields[0]), mapExprRanges(f, cmd.Command.Fields[1])]), cmd.Range) : new _ast.Command(new _ast.CommandKind("Expr", [mapExprRanges(f, cmd.Command.Fields[0])]), cmd.Range);
  }

  function tokenize(input) {
    var input_1 = _fableCore.String.replace(input, "\r\n", "\n");

    var patternInput = (0, _tokenizer.tokenize)(input_1);
    return [_fableCore.List.ofArray(patternInput[1]), patternInput[0]];
  }

  function parse(input) {
    var patternInput = tokenize(input);
    var p = _parser.program.Fields[0];
    var rangeLookup = Array.from(_fableCore.List.map(function (tok) {
      return tok.Range;
    }, patternInput[1]));

    var tokToChar = function tokToChar(rng) {
      var safe = function safe(start) {
        return function (n) {
          return n >= rangeLookup.length ? rangeLookup[rangeLookup.length - 1].End : n < 0 ? 0 : start ? rangeLookup[n].Start : rangeLookup[n].End;
        };
      };

      var rng_1 = new _ast.Range(safe(true)(rng.Start), safe(false)(rng.End - 1));

      if (rng_1.End < rng_1.Start) {
        return new _ast.Range(rng_1.Start, rng_1.Start);
      } else {
        return rng_1;
      }
    };

    var matchValue = p([0, patternInput[1]]);

    if (matchValue != null) {
      var rest = matchValue[0][1];
      var prog = matchValue[2];
      var offs = matchValue[0][0];
      var errs2 = matchValue[1];

      var errs2_1 = _fableCore.List.map(function (e) {
        var _Range = tokToChar(e.Range);

        return new _ast.Error(e.Number, e.Message, _Range);
      }, errs2);

      var errors = rest.tail == null ? _fableCore.List.append(patternInput[0], errs2_1) : _fableCore.List.append(_fableCore.List.ofArray([function () {
        var _Number = 21;

        var _Range = tokToChar(new _ast.Range(offs, offs + rest.length));

        return new _ast.Error(_Number, _fableCore.String.fsFormat("Parser stopped: %A")(function (x) {
          return x;
        })(rest), _Range);
      }()], patternInput[0]), errs2_1);
      return [errors, new _ast.Program(_fableCore.List.map(function (cmd) {
        return mapCmdRanges(tokToChar, cmd);
      }, prog.Body), prog.Range)];
    } else {
      return [_fableCore.List.ofArray([function () {
        var _Number = 21;

        var _Range = tokToChar(new _ast.Range(0, patternInput[1].length));

        return new _ast.Error(_Number, _fableCore.String.fsFormat("Parser stopped: %A")(function (x) {
          return x;
        })(patternInput[1]), _Range);
      }()], patternInput[0]), function () {
        var _Range = tokToChar(new _ast.Range(0, patternInput[1].length));

        return new _ast.Program(new _fableCore.List(), _Range);
      }()];
    }
  }

  function typeCheck(globals, input) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var patternInput = parse(input);
        return builder_.Bind(typeCheckProgram(new CheckingContext(globals), new CheckingResult(new _fableCore.List()), patternInput[1]), function (_arg1) {
          return builder_.Return([_fableCore.List.append(patternInput[0], _arg1[1].Errors), _arg1[0]]);
        });
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  var EditorInfo = exports.EditorInfo = function EditorInfo(source, completions) {
    _classCallCheck(this, EditorInfo);

    this.Source = source;
    this.Completions = completions;
  };

  _fableCore.Util.setInterfaces(EditorInfo.prototype, ["FSharpRecord"], "TheGamma.TypeChecker.EditorInfo");

  function extendUntilDot(text, rng) {
    var start = rng.Start;

    while (start > 0 ? text[start] !== "." : false) {
      start = start - 1;
    }

    return new _ast.Range(start + 1, rng.End);
  }

  function withCompletion(r, t, ctx) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return builder_.Bind(getObjectMembers(t), function (_arg1) {
          return _arg1.Case === "Members" ? builder_.Return(function () {
            var Completions = _fableCore.List.ofArray([[extendUntilDot(ctx.Source, r), r, _arg1.Fields[0]]], ctx.Completions);

            return new EditorInfo(ctx.Source, Completions);
          }()) : builder_.Return(ctx);
        });
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function collectExprInfo(ctx, expr) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var $target4 = function $target4() {
          return builder_.Return(ctx);
        };

        if (expr.Expr.Case === "Call") {
          return builder_.Bind(collectExprInfo(ctx, expr.Expr.Fields[0]), function (_arg2) {
            return builder_.Bind(function () {
              var f = function f(ctx_1) {
                return function (arg) {
                  return collectExprInfo(ctx_1, arg.Value);
                };
              };

              return function (l) {
                return _extensions.Async.fold(f, _arg2, l);
              };
            }()(expr.Expr.Fields[2]), function (_arg3) {
              return builder_.ReturnFrom(withCompletion(expr.Expr.Fields[1].Range, expr.Expr.Fields[0].Type, _arg3));
            });
          });
        } else {
          if (expr.Expr.Case === "List") {
            return builder_.ReturnFrom(_extensions.Async.fold(function (ctx_1) {
              return function (expr_1) {
                return collectExprInfo(ctx_1, expr_1);
              };
            }, ctx, expr.Expr.Fields[0]));
          } else {
            if (expr.Expr.Case === "Function") {
              return builder_.ReturnFrom(collectExprInfo(ctx, expr.Expr.Fields[1]));
            } else {
              if (expr.Expr.Case === "Empty") {
                return $target4();
              } else {
                if (expr.Expr.Case === "Unit") {
                  return $target4();
                } else {
                  if (expr.Expr.Case === "Null") {
                    return $target4();
                  } else {
                    if (expr.Expr.Case === "Number") {
                      return $target4();
                    } else {
                      if (expr.Expr.Case === "String") {
                        return $target4();
                      } else {
                        if (expr.Expr.Case === "Boolean") {
                          return $target4();
                        } else {
                          if (expr.Expr.Case === "Variable") {
                            return $target4();
                          } else {
                            return builder_.Bind(collectExprInfo(ctx, expr.Expr.Fields[0]), function (_arg1) {
                              return builder_.ReturnFrom(withCompletion(expr.Expr.Fields[1].Range, expr.Expr.Fields[0].Type, _arg1));
                            });
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
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function collectCmdInfo(ctx, cmds) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var $target1 = function $target1(cmds_1, expr) {
          return builder_.Bind(collectExprInfo(ctx, expr), function (_arg1) {
            return builder_.ReturnFrom(collectCmdInfo(_arg1, cmds_1));
          });
        };

        if (cmds.tail != null) {
          if (cmds.head.Command.Case === "Expr") {
            return $target1(cmds.tail, cmds.head.Command.Fields[0]);
          } else {
            return $target1(cmds.tail, cmds.head.Command.Fields[1]);
          }
        } else {
          return builder_.Return(ctx);
        }
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function collectProgramInfo(ctx, prog) {
    return collectCmdInfo(ctx, prog.Body);
  }
});
//# sourceMappingURL=typechecker.js.map