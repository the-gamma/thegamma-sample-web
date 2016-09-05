(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "fable-core", "./babel/babelast", "./extensions"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("fable-core"), require("./babel/babelast"), require("./extensions"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.fableCore, global.babelast, global.extensions);
        global.codegen = mod.exports;
    }
})(this, function (exports, _fableCore, _babelast, _extensions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.BabelResult = exports.BabelOptions = exports.CompilationContext = undefined;
    exports.offsetToLocation = offsetToLocation;
    exports.rangeToLoc = rangeToLoc;
    exports.getEmitter = getEmitter;
    exports.compileExpression = compileExpression;
    exports.compileCommand = compileCommand;
    exports.compileProgram = compileProgram;
    exports.compileAndRun = compileAndRun;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
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

    var CompilationContext = exports.CompilationContext = function () {
        function CompilationContext(lineLengths, globals) {
            _classCallCheck(this, CompilationContext);

            this.LineLengths = lineLengths;
            this.Globals = globals;
        }

        _createClass(CompilationContext, [{
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

        return CompilationContext;
    }();

    _fableCore.Util.setInterfaces(CompilationContext.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.CompilationContext");

    function offsetToLocation(lines, offs, lengths) {
        var $target1 = function $target1() {
            return lengths.tail == null ? new _babelast.Position(lines, offs) : offsetToLocation(lines + 1, offs - lengths.head - 1, lengths.tail);
        };

        if (lengths.tail != null) {
            if (offs <= lengths.head) {
                var l = lengths.head;
                var lengths_1 = lengths.tail;
                return new _babelast.Position(lines, offs);
            } else {
                return $target1();
            }
        } else {
            return $target1();
        }
    }

    function rangeToLoc(ctx, rng) {
        return new _babelast.SourceLocation(offsetToLocation(1, rng.Start, ctx.LineLengths), offsetToLocation(1, rng.Start, ctx.LineLengths));
    }

    function getEmitter(name, typ) {
        return function (builder_) {
            return builder_.Delay(function (unitVar) {
                return typ.Case === "Object" ? builder_.Return(_fableCore.Seq.pick(function (_arg1) {
                    var $target0 = function $target0(e, n) {
                        return e;
                    };

                    var $target1 = function $target1() {
                        return null;
                    };

                    if (_arg1.Case === "Property") {
                        if (_arg1.Fields[0] === name) {
                            return $target0(_arg1.Fields[4], _arg1.Fields[0]);
                        } else {
                            return $target1();
                        }
                    } else {
                        if (_arg1.Fields[0] === name) {
                            return $target0(_arg1.Fields[5], _arg1.Fields[0]);
                        } else {
                            return $target1();
                        }
                    }
                }, typ.Fields[0].Members)) : typ.Case === "Delayed" ? builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(typ.Fields[1]), function (_arg2) {
                    return builder_.ReturnFrom(getEmitter(name, _arg2));
                }) : builder_.Return(function () {
                    throw "getEmitter: Not an object";
                }());
            });
        }(_fableCore.defaultAsyncBuilder);
    }

    function compileExpression(ctx, expr) {
        return function (builder_) {
            return builder_.Delay(function (unitVar) {
                var $target7 = function $target7() {
                    var $target3 = function $target3() {
                        console.log("compileExpression: %O", expr.Expr);
                        return builder_.Return(function () {
                            throw "!";
                        }());
                    };

                    if (expr.Expr.Case === "Variable") {
                        return builder_.Return(new _babelast.Expression("IdentifierExpression", [expr.Expr.Fields[0].Name, rangeToLoc(ctx, expr.Expr.Fields[0].Range)]));
                    } else {
                        if (expr.Expr.Case === "List") {
                            return builder_.Bind(_extensions.Async.map(function (expr_1) {
                                return compileExpression(ctx, expr_1);
                            }, expr.Expr.Fields[0]), function (_arg7) {
                                return builder_.Return(new _babelast.Expression("ArrayExpression", [_arg7, rangeToLoc(ctx, expr.Range)]));
                            });
                        } else {
                            if (expr.Expr.Case === "Function") {
                                var _var = new _babelast.Expression("IdentifierExpression", [expr.Expr.Fields[0].Name, rangeToLoc(ctx, expr.Expr.Fields[0].Range)]);

                                return builder_.Bind(compileExpression(function () {
                                    var Globals = _fableCore.Map.add(expr.Expr.Fields[0].Name, _var, ctx.Globals);

                                    return new CompilationContext(ctx.LineLengths, Globals);
                                }(), expr.Expr.Fields[1]), function (_arg8) {
                                    var body = new _babelast.Statement("BlockStatement", [_fableCore.List.ofArray([new _babelast.Statement("ReturnStatement", [_arg8, rangeToLoc(ctx, expr.Expr.Fields[1].Range)])]), rangeToLoc(ctx, expr.Expr.Fields[1].Range)]);
                                    return builder_.Return(new _babelast.Expression("FunctionExpression", [null, _fableCore.List.ofArray([new _babelast.Pattern("IdentifierPattern", [expr.Expr.Fields[0].Name, rangeToLoc(ctx, expr.Expr.Fields[0].Range)])]), body, false, false, rangeToLoc(ctx, expr.Range)]));
                                });
                            } else {
                                if (expr.Expr.Case === "Unit") {
                                    return $target3();
                                } else {
                                    if (expr.Expr.Case === "Empty") {
                                        return $target3();
                                    } else {
                                        throw ["c:\\tomas\\public\\thegamma\\thegamma-script\\src\\thegamma\\codegen.fs", 36, 8];
                                    }
                                }
                            }
                        }
                    }
                };

                if (expr.Expr.Case === "Call") {
                    var args = expr.Expr.Fields[2];
                    var inst = expr.Expr.Fields[0];
                    var n = expr.Expr.Fields[1];
                    return builder_.Bind(getEmitter(n.Name, inst.Type), function (_arg1) {
                        return builder_.Bind(compileExpression(ctx, inst), function (_arg2) {
                            return builder_.Bind(_extensions.Async.map(function (a) {
                                return function (builder__1) {
                                    return builder__1.Delay(function (unitVar_1) {
                                        return builder__1.Bind(compileExpression(ctx, a.Value), function (_arg3) {
                                            return builder__1.Return([a.Name != null ? a.Name.Name : "", _arg3]);
                                        });
                                    });
                                }(_fableCore.defaultAsyncBuilder);
                            }, args), function (_arg4) {
                                return builder_.Return(_arg1.Emit([_arg2, _arg4]));
                            });
                        });
                    });
                } else {
                    if (expr.Expr.Case === "Property") {
                        var inst = expr.Expr.Fields[0];
                        var n = expr.Expr.Fields[1];
                        return builder_.Bind(getEmitter(n.Name, inst.Type), function (_arg5) {
                            return builder_.Bind(compileExpression(ctx, inst), function (_arg6) {
                                return builder_.Return(_arg5.Emit([_arg6, new _fableCore.List()]));
                            });
                        });
                    } else {
                        if (expr.Expr.Case === "Null") {
                            return builder_.Return(new _babelast.Expression("NullLiteral", [rangeToLoc(ctx, expr.Range)]));
                        } else {
                            if (expr.Expr.Case === "Number") {
                                var n = expr.Expr.Fields[0];
                                return builder_.Return(new _babelast.Expression("NumericLiteral", [n, rangeToLoc(ctx, expr.Range)]));
                            } else {
                                if (expr.Expr.Case === "String") {
                                    var s = expr.Expr.Fields[0];
                                    return builder_.Return(new _babelast.Expression("StringLiteral", [s, rangeToLoc(ctx, expr.Range)]));
                                } else {
                                    if (expr.Expr.Case === "Boolean") {
                                        var b = expr.Expr.Fields[0];
                                        return builder_.Return(new _babelast.Expression("BooleanLiteral", [b, rangeToLoc(ctx, expr.Range)]));
                                    } else {
                                        if (expr.Expr.Case === "Variable") {
                                            if (ctx.Globals.has(expr.Expr.Fields[0].Name)) {
                                                var n = expr.Expr.Fields[0];
                                                return builder_.Return(ctx.Globals.get(n.Name));
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
            });
        }(_fableCore.defaultAsyncBuilder);
    }

    function compileCommand(ctx, cmd) {
        return function (builder_) {
            return builder_.Delay(function (unitVar) {
                return cmd.Command.Case === "Expr" ? builder_.Bind(compileExpression(ctx, cmd.Command.Fields[0]), function (_arg2) {
                    return builder_.Return(new _babelast.Statement("ExpressionStatement", [_arg2, rangeToLoc(ctx, cmd.Range)]));
                }) : builder_.Bind(compileExpression(ctx, cmd.Command.Fields[1]), function (_arg1) {
                    var name = new _babelast.Pattern("IdentifierPattern", [cmd.Command.Fields[0].Name, rangeToLoc(ctx, cmd.Command.Fields[0].Range)]);
                    var decl = new _babelast.VariableDeclarator("VariableDeclarator", [name, _arg1, rangeToLoc(ctx, cmd.Range)]);
                    return builder_.Return(new _babelast.Statement("VariableDeclaration", [new _babelast.VariableDeclarationKind("Var", []), _fableCore.List.ofArray([decl]), rangeToLoc(ctx, cmd.Range)]));
                });
            });
        }(_fableCore.defaultAsyncBuilder);
    }

    function compileProgram(ctx, prog) {
        return function (builder_) {
            return builder_.Delay(function (unitVar) {
                return builder_.Bind(_extensions.Async.map(function (cmd) {
                    return compileCommand(ctx, cmd);
                }, prog.Body), function (_arg1) {
                    return builder_.Return(new _babelast.Program(rangeToLoc(ctx, prog.Range), _arg1));
                });
            });
        }(_fableCore.defaultAsyncBuilder);
    }

    var BabelOptions = exports.BabelOptions = function () {
        function BabelOptions(presets) {
            _classCallCheck(this, BabelOptions);

            this.presets = presets;
        }

        _createClass(BabelOptions, [{
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

        return BabelOptions;
    }();

    _fableCore.Util.setInterfaces(BabelOptions.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.BabelOptions");

    var BabelResult = exports.BabelResult = function () {
        function BabelResult(code) {
            _classCallCheck(this, BabelResult);

            this.code = code;
        }

        _createClass(BabelResult, [{
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

        return BabelResult;
    }();

    _fableCore.Util.setInterfaces(BabelResult.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.BabelResult");

    function compileAndRun(globals, text, prog) {
        return function (builder_) {
            return builder_.Delay(function (unitVar) {
                return builder_.TryWith(builder_.Delay(function (unitVar_1) {
                    return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(globals), function (_arg1) {
                        var ctx = new CompilationContext(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
                            return _fableCore.Seq.map(function (l) {
                                return l.length;
                            }, text.split("\n"));
                        })), _arg1);
                        return builder_.Bind(compileProgram(ctx, prog), function (_arg2) {
                            var code = Babel.transformFromAst(_babelast.Serializer.serializeProgram(_arg2), text, new BabelOptions(["es2015"]));

                            _extensions.Log.trace("codegen", "Evaluating: %O", code);

                            return builder_.Return(code.code);
                        });
                    });
                }), function (_arg3) {
                    _extensions.Log.exn("codegen", "Evaluating code failed: %O", _arg3);

                    return builder_.Return("");
                });
            });
        }(_fableCore.defaultAsyncBuilder);
    }
});
//# sourceMappingURL=codegen.js.map