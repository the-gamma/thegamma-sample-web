(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "fable-core", "./ast"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("fable-core"), require("./ast"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.fableCore, global.ast);
        global.typeops = mod.exports;
    }
})(this, function (exports, _fableCore, _ast) {
    "use strict";

    exports.__esModule = true;
    exports.UnifictionContext = exports.typesEqual = exports.TypeContext = undefined;
    exports.listsEqual = listsEqual;
    exports.arraysEqual = arraysEqual;
    exports.memberNamesEqual = memberNamesEqual;
    exports.$BoundTypeVariables$ = $BoundTypeVariables$;
    exports.membersEqual = membersEqual;
    exports.typesEqualAux = typesEqualAux;
    exports.substituteMembers = substituteMembers;
    exports.substituteTypes = substituteTypes;
    exports.unifyTypesAux = unifyTypesAux;
    exports.unifyTypes = unifyTypes;
    exports.reduceType = reduceType;

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

    var TypeContext = exports.TypeContext = function () {
        function TypeContext(equivalentVars) {
            _classCallCheck(this, TypeContext);

            this.EquivalentVars = equivalentVars;
        }

        TypeContext.prototype.Equals = function Equals(other) {
            return _fableCore.Util.equalsRecords(this, other);
        };

        TypeContext.prototype.CompareTo = function CompareTo(other) {
            return _fableCore.Util.compareRecords(this, other);
        };

        return TypeContext;
    }();

    _fableCore.Util.setInterfaces(TypeContext.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Types.TypeContext");

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

    function memberNamesEqual(m1, m2) {
        var matchValue = [m1, m2];

        var $target0 = function $target0(n1, n2) {
            return n1 === n2;
        };

        var $target1 = function $target1() {
            return false;
        };

        if (matchValue[0].Case === "Method") {
            if (matchValue[1].Case === "Method") {
                return $target0(matchValue[0].Fields[0], matchValue[1].Fields[0]);
            } else {
                return $target1();
            }
        } else {
            if (matchValue[1].Case === "Property") {
                return $target0(matchValue[0].Fields[0], matchValue[1].Fields[0]);
            } else {
                return $target1();
            }
        }
    }

    function $BoundTypeVariables$(t) {
        return t.Case === "Forall" ? [t.Fields[0], t] : [new _fableCore.List(), t];
    }

    function membersEqual(ctx, m1, m2) {
        var matchValue = [m1, m2];

        var $target2 = function $target2() {
            return false;
        };

        if (matchValue[0].Case === "Method") {
            var activePatternResult4574 = $BoundTypeVariables$(matchValue[0].Fields[2]);

            if (matchValue[1].Case === "Method") {
                var activePatternResult4575 = $BoundTypeVariables$(matchValue[1].Fields[2]);
                var a1 = matchValue[0].Fields[1];
                var a2 = matchValue[1].Fields[1];
                var n1 = matchValue[0].Fields[0];
                var n2 = matchValue[1].Fields[0];
                var r1 = activePatternResult4574[1];
                var r2 = activePatternResult4575[1];
                var v1 = activePatternResult4574[0];
                var v2 = activePatternResult4575[0];
                {
                    var _ret = function () {
                        var ctx_1 = new TypeContext(_fableCore.List.append(_fableCore.Seq.toList(_fableCore.Seq.zip(v1, v2)), ctx.EquivalentVars));

                        if (n1 === n2 ? typesEqualAux(ctx_1, r1, r2) : false) {
                            return {
                                v: listsEqual(a1, a2, function (tupledArg) {
                                    return function (tupledArg_1) {
                                        return (tupledArg[0] === tupledArg_1[0] ? tupledArg[1] === tupledArg_1[1] : false) ? typesEqualAux(ctx_1, tupledArg[2], tupledArg_1[2]) : false;
                                    };
                                })
                            };
                        } else {
                            return {
                                v: false
                            };
                        }
                    }();

                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                }
            } else {
                return $target2();
            }
        } else {
            if (matchValue[1].Case === "Property") {
                var _n = matchValue[0].Fields[0];
                var _n2 = matchValue[1].Fields[0];
                var t1 = matchValue[0].Fields[1];
                var t2 = matchValue[1].Fields[1];

                if (_n === _n2) {
                    return typesEqualAux(ctx, t1, t2);
                } else {
                    return false;
                }
            } else {
                return $target2();
            }
        }
    }

    function typesEqualAux(ctx, t1, t2) {
        var matchValue = [t1, t2];

        var $target0 = function $target0() {
            return true;
        };

        var $target8 = function $target8() {
            var $target1 = function $target1() {
                return false;
            };

            if (matchValue[0].Case === "App") {
                if (matchValue[1].Case === "App") {
                    if (function () {
                        var ts2 = matchValue[1].Fields[1];
                        var ts1 = matchValue[0].Fields[1];
                        var t2_1 = matchValue[1].Fields[0];
                        var t1_1 = matchValue[0].Fields[0];
                        return ts1.length === ts2.length;
                    }()) {
                        var t1_1 = matchValue[0].Fields[0];
                        var t2_1 = matchValue[1].Fields[0];
                        var ts1 = matchValue[0].Fields[1];
                        var ts2 = matchValue[1].Fields[1];
                        return _fableCore.Seq.forAll(function (tupledArg) {
                            return typesEqualAux(ctx, tupledArg[0], tupledArg[1]);
                        }, new _fableCore.List([t1_1, t2_1], _fableCore.Seq.toList(_fableCore.Seq.zip(ts1, ts2))));
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

        if (matchValue[0].Case === "Any") {
            return $target0();
        } else {
            if (matchValue[0].Case === "Parameter") {
                if (matchValue[1].Case === "Any") {
                    return $target0();
                } else {
                    if (matchValue[1].Case === "Parameter") {
                        var _ret2 = function () {
                            var p1 = matchValue[0].Fields[0];
                            var p2 = matchValue[1].Fields[0];
                            return {
                                v: _fableCore.Seq.exists(function (tupledArg) {
                                    return tupledArg[0] === p1 ? tupledArg[1] === p2 : false;
                                }, ctx.EquivalentVars)
                            };
                        }();

                        if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
                    } else {
                        return $target8();
                    }
                }
            } else {
                if (matchValue[0].Case === "Delayed") {
                    if (matchValue[1].Case === "Any") {
                        return $target0();
                    } else {
                        if (matchValue[1].Case === "Delayed") {
                            var g1 = matchValue[0].Fields[0];
                            var g2 = matchValue[1].Fields[0];
                            return g1 === g2;
                        } else {
                            return $target8();
                        }
                    }
                } else {
                    if (matchValue[0].Case === "List") {
                        if (matchValue[1].Case === "Any") {
                            return $target0();
                        } else {
                            if (matchValue[1].Case === "List") {
                                var t1_1 = matchValue[0].Fields[0];
                                var t2_1 = matchValue[1].Fields[0];
                                return typesEqualAux(ctx, t1_1, t2_1);
                            } else {
                                return $target8();
                            }
                        }
                    } else {
                        if (matchValue[0].Case === "Function") {
                            if (matchValue[1].Case === "Any") {
                                return $target0();
                            } else {
                                if (matchValue[1].Case === "Function") {
                                    var a1 = matchValue[0].Fields[0];
                                    var a2 = matchValue[1].Fields[0];
                                    var r1 = matchValue[0].Fields[1];
                                    var r2 = matchValue[1].Fields[1];
                                    return listsEqual(new _fableCore.List(r1, a1), new _fableCore.List(r2, a2), function (t1_1) {
                                        return function (t2_1) {
                                            return typesEqualAux(ctx, t1_1, t2_1);
                                        };
                                    });
                                } else {
                                    return $target8();
                                }
                            }
                        } else {
                            if (matchValue[0].Case === "Object") {
                                if (matchValue[1].Case === "Any") {
                                    return $target0();
                                } else {
                                    if (matchValue[1].Case === "Object") {
                                        var o1 = matchValue[0].Fields[0];
                                        var o2 = matchValue[1].Fields[0];
                                        return arraysEqual(o1.Members, o2.Members, function (m1) {
                                            return function (m2) {
                                                return membersEqual(ctx, m1, m2);
                                            };
                                        });
                                    } else {
                                        return $target8();
                                    }
                                }
                            } else {
                                if (matchValue[0].Case === "Primitive") {
                                    if (matchValue[1].Case === "Any") {
                                        return $target0();
                                    } else {
                                        if (matchValue[1].Case === "Primitive") {
                                            var n1 = matchValue[0].Fields[0];
                                            var n2 = matchValue[1].Fields[0];
                                            return n1.Equals(n2);
                                        } else {
                                            return $target8();
                                        }
                                    }
                                } else {
                                    if (matchValue[0].Case === "Forall") {
                                        if (matchValue[1].Case === "Any") {
                                            return $target0();
                                        } else {
                                            if (matchValue[1].Case === "Forall") {
                                                if (function () {
                                                    var v2 = matchValue[1].Fields[0];
                                                    var v1 = matchValue[0].Fields[0];
                                                    var t2_1 = matchValue[1].Fields[1];
                                                    var t1_1 = matchValue[0].Fields[1];
                                                    return v1.length === v2.length;
                                                }()) {
                                                    var _t1_ = matchValue[0].Fields[1];
                                                    var _t2_ = matchValue[1].Fields[1];
                                                    var v1 = matchValue[0].Fields[0];
                                                    var v2 = matchValue[1].Fields[0];
                                                    {
                                                        var ctx_1 = new TypeContext(_fableCore.List.append(_fableCore.Seq.toList(_fableCore.Seq.zip(v1, v2)), ctx.EquivalentVars));
                                                        return typesEqualAux(ctx_1, _t1_, _t2_);
                                                    }
                                                } else {
                                                    return $target8();
                                                }
                                            } else {
                                                return $target8();
                                            }
                                        }
                                    } else {
                                        if (matchValue[1].Case === "Any") {
                                            return $target0();
                                        } else {
                                            return $target8();
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

    var typesEqual = exports.typesEqual = function () {
        var ctx = new TypeContext(new _fableCore.List());
        return function (t1) {
            return function (t2) {
                return typesEqualAux(ctx, t1, t2);
            };
        };
    }();

    function substituteMembers(assigns, members) {
        return members.map(function (_arg1) {
            return _arg1.Case === "Property" ? new _ast.Member("Property", [_arg1.Fields[0], substituteTypes(assigns, _arg1.Fields[1]), _arg1.Fields[2], _arg1.Fields[3]]) : function () {
                var activePatternResult4587 = $BoundTypeVariables$(_arg1.Fields[2]);

                var assigns_1 = function () {
                    var folder = function folder(assigns_1) {
                        return function (_var) {
                            return _fableCore.Map.remove(_var, assigns_1);
                        };
                    };

                    return function (list) {
                        return _fableCore.Seq.fold(function ($var2, $var3) {
                            return folder($var2)($var3);
                        }, assigns, list);
                    };
                }()(activePatternResult4587[0]);

                var ars = _fableCore.List.map(function (tupledArg) {
                    return [tupledArg[0], tupledArg[1], substituteTypes(assigns_1, tupledArg[2])];
                }, _arg1.Fields[1]);

                return new _ast.Member("Method", [_arg1.Fields[0], ars, substituteTypes(assigns_1, activePatternResult4587[1]), _arg1.Fields[3], _arg1.Fields[4]]);
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
                    if (t.Case === "Function") {
                        return new _ast.Type("Function", [_fableCore.List.map(function (t_1) {
                            return substituteTypes(assigns, t_1);
                        }, t.Fields[0]), substituteTypes(assigns, t.Fields[1])]);
                    } else {
                        if (t.Case === "List") {
                            return new _ast.Type("List", [substituteTypes(assigns, t.Fields[0])]);
                        } else {
                            if (t.Case === "Object") {
                                return new _ast.Type("Object", [new _ast.ObjectType(substituteMembers(assigns, t.Fields[0].Members))]);
                            } else {
                                if (t.Case === "Delayed") {
                                    var _f;

                                    var f = (_f = {}, _f[_fableCore.Symbol.interfaces] = ["TheGamma.Common.Future"], _f.Then = function Then(g) {
                                        t.Fields[1].Then(function (t_1) {
                                            g(substituteTypes(assigns, t_1));
                                        });
                                    }, _f);
                                    return new _ast.Type("Delayed", [t.Fields[0], f]);
                                } else {
                                    if (t.Case === "App") {
                                        return new _ast.Type("App", [substituteTypes(assigns, t.Fields[0]), _fableCore.List.map(function (t_1) {
                                            return substituteTypes(assigns, t_1);
                                        }, t.Fields[1])]);
                                    } else {
                                        if (t.Case === "Forall") {
                                            var assigns_1 = function () {
                                                var folder = function folder(assigns_1) {
                                                    return function (_var) {
                                                        return _fableCore.Map.remove(_var, assigns_1);
                                                    };
                                                };

                                                return function (list) {
                                                    return _fableCore.Seq.fold(function ($var4, $var5) {
                                                        return folder($var4)($var5);
                                                    }, assigns, list);
                                                };
                                            }()(t.Fields[0]);

                                            return new _ast.Type("Forall", [t.Fields[0], substituteTypes(assigns_1, t.Fields[1])]);
                                        } else {
                                            return $target0();
                                        }
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

    var UnifictionContext = exports.UnifictionContext = function UnifictionContext(freeVars, assignments, equivalentVars, errors) {
        _classCallCheck(this, UnifictionContext);

        this.FreeVars = freeVars;
        this.Assignments = assignments;
        this.EquivalentVars = equivalentVars;
        this.Errors = errors;
    };

    _fableCore.Util.setInterfaces(UnifictionContext.prototype, ["FSharpRecord"], "TheGamma.Types.UnifictionContext");

    function unifyTypesAux(ctx, ts1, ts2) {
        var matchValue = [ts1, ts2];

        var $target1 = function $target1() {
            var $target2 = function $target2() {
                var $target2 = function $target2() {
                    var $target1 = function $target1() {
                        var $target1 = function $target1() {
                            var $target2 = function $target2() {
                                throw "unifyTypesAux: The lists of types had mismatching lengths";
                            };

                            if (matchValue[0].tail == null) {
                                if (matchValue[1].tail == null) {
                                    return ctx;
                                } else {
                                    return $target2();
                                }
                            } else {
                                if (matchValue[1].tail != null) {
                                    var _ret3 = function () {
                                        var t1 = matchValue[0].head;
                                        var t2 = matchValue[1].head;
                                        var ts1_1 = matchValue[0].tail;
                                        var ts2_1 = matchValue[1].tail;
                                        return {
                                            v: unifyTypesAux(function () {
                                                var Errors = new _fableCore.List([t1, t2], ctx.Errors);
                                                return new UnifictionContext(ctx.FreeVars, ctx.Assignments, ctx.EquivalentVars, Errors);
                                            }(), ts1_1, ts2_1)
                                        };
                                    }();

                                    if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
                                } else {
                                    return $target2();
                                }
                            }
                        };

                        if (matchValue[0].tail != null) {
                            if (matchValue[1].tail != null) {
                                if (function () {
                                    var ts2_1 = matchValue[1].tail;
                                    var ts1_1 = matchValue[0].tail;
                                    var t2 = matchValue[1].head;
                                    var t1 = matchValue[0].head;
                                    return typesEqualAux(new TypeContext(ctx.EquivalentVars), t1, t2);
                                }()) {
                                    var t1 = matchValue[0].head;
                                    var t2 = matchValue[1].head;
                                    var ts1_1 = matchValue[0].tail;
                                    var ts2_1 = matchValue[1].tail;
                                    return unifyTypesAux(ctx, ts1_1, ts2_1);
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

                    if (matchValue[0].tail != null) {
                        if (matchValue[0].head.Case === "App") {
                            if (matchValue[1].tail != null) {
                                if (matchValue[1].head.Case === "App") {
                                    if (function () {
                                        var tb2 = matchValue[1].tail;
                                        var tb1 = matchValue[0].tail;
                                        var ta2 = matchValue[1].head.Fields[1];
                                        var ta1 = matchValue[0].head.Fields[1];
                                        var t2 = matchValue[1].head.Fields[0];
                                        var t1 = matchValue[0].head.Fields[0];
                                        return ta1.length === ta2.length;
                                    }()) {
                                        var t1 = matchValue[0].head.Fields[0];
                                        var t2 = matchValue[1].head.Fields[0];
                                        var ta1 = matchValue[0].head.Fields[1];
                                        var ta2 = matchValue[1].head.Fields[1];
                                        var tb1 = matchValue[0].tail;
                                        var tb2 = matchValue[1].tail;
                                        return unifyTypesAux(ctx, new _fableCore.List(t1, _fableCore.List.append(ta1, tb1)), new _fableCore.List(t2, _fableCore.List.append(ta2, tb2)));
                                    } else {
                                        return $target1();
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
                    } else {
                        return $target1();
                    }
                };

                if (matchValue[0].tail != null) {
                    if (matchValue[0].head.Case === "List") {
                        if (matchValue[1].tail != null) {
                            if (matchValue[1].head.Case === "List") {
                                var t1 = matchValue[0].head.Fields[0];
                                var t2 = matchValue[1].head.Fields[0];
                                var ts1_1 = matchValue[0].tail;
                                var ts2_1 = matchValue[1].tail;
                                return unifyTypesAux(ctx, new _fableCore.List(t1, ts1_1), new _fableCore.List(t2, ts2_1));
                            } else {
                                return $target2();
                            }
                        } else {
                            return $target2();
                        }
                    } else {
                        if (matchValue[0].head.Case === "Forall") {
                            if (matchValue[1].tail != null) {
                                if (matchValue[1].head.Case === "Forall") {
                                    if (function () {
                                        var v2 = matchValue[1].head.Fields[0];
                                        var v1 = matchValue[0].head.Fields[0];
                                        var ts2_1 = matchValue[1].tail;
                                        var ts1_1 = matchValue[0].tail;
                                        var t2 = matchValue[1].head.Fields[1];
                                        var t1 = matchValue[0].head.Fields[1];
                                        return v1.length === v2.length;
                                    }()) {
                                        var _ret4 = function () {
                                            var t1 = matchValue[0].head.Fields[1];
                                            var t2 = matchValue[1].head.Fields[1];
                                            var ts1_1 = matchValue[0].tail;
                                            var ts2_1 = matchValue[1].tail;
                                            var v1 = matchValue[0].head.Fields[0];
                                            var v2 = matchValue[1].head.Fields[0];
                                            {
                                                var ctx_1 = function () {
                                                    var EquivalentVars = _fableCore.List.append(_fableCore.Seq.toList(_fableCore.Seq.zip(v1, v2)), ctx.EquivalentVars);

                                                    return new UnifictionContext(ctx.FreeVars, ctx.Assignments, EquivalentVars, ctx.Errors);
                                                }();

                                                return {
                                                    v: unifyTypesAux(ctx_1, new _fableCore.List(t1, ts1_1), new _fableCore.List(t2, ts2_1))
                                                };
                                            }
                                        }();

                                        if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
                                    } else {
                                        return $target2();
                                    }
                                } else {
                                    return $target2();
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
            };

            if (matchValue[0].tail != null) {
                if (matchValue[0].head.Case === "Function") {
                    if (matchValue[1].tail != null) {
                        if (matchValue[1].head.Case === "Function") {
                            var tis1 = matchValue[0].head.Fields[0];
                            var tis2 = matchValue[1].head.Fields[0];
                            var to1 = matchValue[0].head.Fields[1];
                            var to2 = matchValue[1].head.Fields[1];
                            var ts1_1 = matchValue[0].tail;
                            var ts2_1 = matchValue[1].tail;
                            return unifyTypesAux(ctx, _fableCore.List.append(new _fableCore.List(to1, tis1), ts1_1), _fableCore.List.append(new _fableCore.List(to2, tis2), ts2_1));
                        } else {
                            return $target2();
                        }
                    } else {
                        return $target2();
                    }
                } else {
                    if (matchValue[0].head.Case === "Object") {
                        if (matchValue[1].tail != null) {
                            if (matchValue[1].head.Case === "Object") {
                                if (function () {
                                    var ts2_1 = matchValue[1].tail;
                                    var ts1_1 = matchValue[0].tail;
                                    var m2 = matchValue[1].head.Fields[0].Members;
                                    var m1 = matchValue[0].head.Fields[0].Members;
                                    return arraysEqual(m1, m2, function (m1_1) {
                                        return function (m2_1) {
                                            return memberNamesEqual(m1_1, m2_1);
                                        };
                                    });
                                }()) {
                                    var m1 = matchValue[0].head.Fields[0].Members;
                                    var m2 = matchValue[1].head.Fields[0].Members;
                                    var _ts1_ = matchValue[0].tail;
                                    var _ts2_ = matchValue[1].tail;
                                    return unifyTypesAux(ctx, _ts1_, _ts2_);
                                } else {
                                    return $target2();
                                }
                            } else {
                                return $target2();
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
        };

        if (matchValue[0].tail != null) {
            if (matchValue[0].head.Case === "Parameter") {
                if (matchValue[1].tail != null) {
                    if (function () {
                        var ts2_1 = matchValue[1].tail;
                        var ts1_1 = matchValue[0].tail;
                        var t = matchValue[1].head;
                        var n = matchValue[0].head.Fields[0];

                        if (ctx.FreeVars.has(n)) {
                            if (t.Case === "Parameter") {
                                return false;
                            } else {
                                return true;
                            }
                        } else {
                            return false;
                        }
                    }()) {
                        var _ret5 = function () {
                            var n = matchValue[0].head.Fields[0];
                            var t = matchValue[1].head;
                            var ts1_1 = matchValue[0].tail;
                            var ts2_1 = matchValue[1].tail;
                            return {
                                v: unifyTypesAux(function () {
                                    var Assignments = new _fableCore.List([n, t], ctx.Assignments);
                                    return new UnifictionContext(ctx.FreeVars, Assignments, ctx.EquivalentVars, ctx.Errors);
                                }(), ts1_1, ts2_1)
                            };
                        }();

                        if ((typeof _ret5 === "undefined" ? "undefined" : _typeof(_ret5)) === "object") return _ret5.v;
                    } else {
                        return $target1();
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
    }

    function unifyTypes(free, ts1, ts2) {
        var ctx = new UnifictionContext(_fableCore.Set.create(free, new _fableCore.GenericComparer(function (x, y) {
            return x < y ? -1 : x > y ? 1 : 0;
        })), new _fableCore.List(), new _fableCore.List(), new _fableCore.List());
        var ctx_1 = unifyTypesAux(ctx, _fableCore.List.ofArray([ts1]), _fableCore.List.ofArray([ts2]));
        return [ctx_1.Assignments, ctx_1.Errors];
    }

    function reduceType(t) {
        var $target1 = function $target1() {
            return t;
        };

        if (t.Case === "App") {
            if (t.Fields[0].Case === "Forall") {
                var args = t.Fields[1];
                var t_1 = t.Fields[0].Fields[1];
                var vars = t.Fields[0].Fields[0];
                {
                    if (vars.length !== args.length) {
                        throw "reduceType: Invalid type application";
                    }

                    var t_2 = substituteTypes(_fableCore.Map.create(_fableCore.Seq.toList(_fableCore.Seq.zip(vars, args)), new _fableCore.GenericComparer(function (x, y) {
                        return x < y ? -1 : x > y ? 1 : 0;
                    })), t_1);
                    return reduceType(t_2);
                }
            } else {
                return $target1();
            }
        } else {
            return $target1();
        }
    }
});
//# sourceMappingURL=typeops.js.map