(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "fable-core"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("fable-core"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.fableCore);
        global.babelast = mod.exports;
    }
})(this, function (exports, _fableCore) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Serializer = exports.Program = exports.Statement = exports.Expression = exports.VariableDeclarator = exports.VariableDeclarationKind = exports.Pattern = exports.BinaryOperator = exports.AssignmentOperator = exports.SourceLocation = exports.Position = undefined;

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

    var Position = exports.Position = function () {
        function Position(line, column) {
            _classCallCheck(this, Position);

            this.line = line;
            this.column = column;
        }

        _createClass(Position, [{
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

        return Position;
    }();

    _fableCore.Util.setInterfaces(Position.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Position");

    var SourceLocation = exports.SourceLocation = function () {
        function SourceLocation(start, end) {
            _classCallCheck(this, SourceLocation);

            this.start = start;
            this.end = end;
        }

        _createClass(SourceLocation, [{
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

        return SourceLocation;
    }();

    _fableCore.Util.setInterfaces(SourceLocation.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.SourceLocation");

    var AssignmentOperator = exports.AssignmentOperator = function () {
        function AssignmentOperator(caseName, fields) {
            _classCallCheck(this, AssignmentOperator);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(AssignmentOperator, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsUnions(this, other);
            }
        }, {
            key: "CompareTo",
            value: function CompareTo(other) {
                return _fableCore.Util.compareUnions(this, other);
            }
        }]);

        return AssignmentOperator;
    }();

    _fableCore.Util.setInterfaces(AssignmentOperator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.AssignmentOperator");

    var BinaryOperator = exports.BinaryOperator = function () {
        function BinaryOperator(caseName, fields) {
            _classCallCheck(this, BinaryOperator);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(BinaryOperator, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsUnions(this, other);
            }
        }, {
            key: "CompareTo",
            value: function CompareTo(other) {
                return _fableCore.Util.compareUnions(this, other);
            }
        }]);

        return BinaryOperator;
    }();

    _fableCore.Util.setInterfaces(BinaryOperator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.BinaryOperator");

    var Pattern = exports.Pattern = function () {
        function Pattern(caseName, fields) {
            _classCallCheck(this, Pattern);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(Pattern, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsUnions(this, other);
            }
        }, {
            key: "CompareTo",
            value: function CompareTo(other) {
                return _fableCore.Util.compareUnions(this, other);
            }
        }]);

        return Pattern;
    }();

    _fableCore.Util.setInterfaces(Pattern.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Pattern");

    var VariableDeclarationKind = exports.VariableDeclarationKind = function () {
        function VariableDeclarationKind(caseName, fields) {
            _classCallCheck(this, VariableDeclarationKind);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(VariableDeclarationKind, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsUnions(this, other);
            }
        }, {
            key: "CompareTo",
            value: function CompareTo(other) {
                return _fableCore.Util.compareUnions(this, other);
            }
        }]);

        return VariableDeclarationKind;
    }();

    _fableCore.Util.setInterfaces(VariableDeclarationKind.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.VariableDeclarationKind");

    var VariableDeclarator = exports.VariableDeclarator = function () {
        function VariableDeclarator(caseName, fields) {
            _classCallCheck(this, VariableDeclarator);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(VariableDeclarator, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsUnions(this, other);
            }
        }, {
            key: "CompareTo",
            value: function CompareTo(other) {
                return _fableCore.Util.compareUnions(this, other);
            }
        }]);

        return VariableDeclarator;
    }();

    _fableCore.Util.setInterfaces(VariableDeclarator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.VariableDeclarator");

    var Expression = exports.Expression = function () {
        function Expression(caseName, fields) {
            _classCallCheck(this, Expression);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(Expression, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsUnions(this, other);
            }
        }, {
            key: "CompareTo",
            value: function CompareTo(other) {
                return _fableCore.Util.compareUnions(this, other);
            }
        }]);

        return Expression;
    }();

    _fableCore.Util.setInterfaces(Expression.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Expression");

    var Statement = exports.Statement = function () {
        function Statement(caseName, fields) {
            _classCallCheck(this, Statement);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(Statement, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsUnions(this, other);
            }
        }, {
            key: "CompareTo",
            value: function CompareTo(other) {
                return _fableCore.Util.compareUnions(this, other);
            }
        }]);

        return Statement;
    }();

    _fableCore.Util.setInterfaces(Statement.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Statement");

    var Program = exports.Program = function () {
        function Program(location, body) {
            _classCallCheck(this, Program);

            this.location = location;
            this.body = body;
        }

        _createClass(Program, [{
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

        return Program;
    }();

    _fableCore.Util.setInterfaces(Program.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Program");

    var Serializer = exports.Serializer = function ($exports) {
        var createObj = $exports.createObj = function createObj(props) {
            return _fableCore.Util.createObj(_fableCore.List.concat(props));
        };

        var serializeBinaryOperator = $exports.serializeBinaryOperator = function serializeBinaryOperator(_arg1) {
            return _arg1.Case === "BinaryUnequal" ? "!=" : _arg1.Case === "BinaryEqualStrict" ? "===" : _arg1.Case === "BinaryUnequalStrict" ? "!==" : _arg1.Case === "BinaryLess" ? "<" : _arg1.Case === "BinaryLessOrEqual" ? "<=" : _arg1.Case === "BinaryGreater" ? ">" : _arg1.Case === "BinaryGreaterOrEqual" ? ">=" : _arg1.Case === "BinaryShiftLeft" ? "<<" : _arg1.Case === "BinaryShiftRightSignPropagating" ? ">>" : _arg1.Case === "BinaryShiftRightZeroFill" ? ">>>" : _arg1.Case === "BinaryMinus" ? "-" : _arg1.Case === "BinaryPlus" ? "+" : _arg1.Case === "BinaryMultiply" ? "*" : _arg1.Case === "BinaryDivide" ? "/" : _arg1.Case === "BinaryModulus" ? "%" : _arg1.Case === "BinaryExponent" ? "**" : _arg1.Case === "BinaryOrBitwise" ? "|" : _arg1.Case === "BinaryXorBitwise" ? "^" : _arg1.Case === "BinaryAndBitwise" ? "&" : _arg1.Case === "BinaryIn" ? "in" : _arg1.Case === "BinaryInstanceOf" ? "instanceof" : "==";
        };

        var serializeAssignOperator = $exports.serializeAssignOperator = function serializeAssignOperator(_arg1) {
            return _arg1.Case === "AssignMinus" ? "-=" : _arg1.Case === "AssignPlus" ? "+=" : _arg1.Case === "AssignMultiply" ? "*=" : _arg1.Case === "AssignDivide" ? "/=" : _arg1.Case === "AssignModulus" ? "%=" : _arg1.Case === "AssignShiftLeft" ? "<<=" : _arg1.Case === "AssignShiftRightSignPropagating" ? ">>=" : _arg1.Case === "AssignShiftRightZeroFill" ? ">>>=" : _arg1.Case === "AssignOrBitwise" ? "|=" : _arg1.Case === "AssignXorBitwise" ? "^=" : _arg1.Case === "AssignAndBitwise" ? "&=" : "=";
        };

        var serializePattern = $exports.serializePattern = function serializePattern(pat) {
            return createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "Identifier"]]), _fableCore.List.ofArray([["name", pat.Fields[0]]]), pat.Fields[1] != null ? _fableCore.List.ofArray([["loc", pat.Fields[1]]]) : new _fableCore.List()]));
        };

        var serializeDeclarator = $exports.serializeDeclarator = function serializeDeclarator(_arg1) {
            return createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "VariableDeclarator"]]), _fableCore.List.ofArray([["id", serializePattern(_arg1.Fields[0])]]), function () {
                var $var1 = _arg1.Fields[1];

                if ($var1 != null) {
                    return function (expr) {
                        return serializeExpression(expr);
                    }($var1);
                } else {
                    return $var1;
                }
            }() != null ? _fableCore.List.ofArray([["init", function () {
                var $var1 = _arg1.Fields[1];

                if ($var1 != null) {
                    return function (expr) {
                        return serializeExpression(expr);
                    }($var1);
                } else {
                    return $var1;
                }
            }()]]) : new _fableCore.List(), _arg1.Fields[2] != null ? _fableCore.List.ofArray([["loc", _arg1.Fields[2]]]) : new _fableCore.List()]));
        };

        var serializeExpression = $exports.serializeExpression = function serializeExpression(expr) {
            return expr.Case === "NewExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "NewExpression"]]), _fableCore.List.ofArray([["callee", serializeExpression(expr.Fields[0])]]), _fableCore.List.ofArray([["arguments", Array.from(_fableCore.List.map(function (expr_1) {
                return serializeExpression(expr_1);
            }, expr.Fields[1]))]]), expr.Fields[2] != null ? _fableCore.List.ofArray([["loc", expr.Fields[2]]]) : new _fableCore.List()])) : expr.Case === "FunctionExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "FunctionExpression"]]), expr.Fields[0] != null ? _fableCore.List.ofArray([["id", expr.Fields[0]]]) : new _fableCore.List(), _fableCore.List.ofArray([["params", Array.from(_fableCore.List.map(function (pat) {
                return serializePattern(pat);
            }, expr.Fields[1]))]]), _fableCore.List.ofArray([["body", serializeStatement(expr.Fields[2])]]), _fableCore.List.ofArray([["generator", expr.Fields[3]]]), _fableCore.List.ofArray([["async", expr.Fields[4]]]), expr.Fields[5] != null ? _fableCore.List.ofArray([["loc", expr.Fields[5]]]) : new _fableCore.List()])) : expr.Case === "AssignmentExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "AssignmentExpression"]]), _fableCore.List.ofArray([["left", serializeExpression(expr.Fields[1])]]), _fableCore.List.ofArray([["right", serializeExpression(expr.Fields[2])]]), _fableCore.List.ofArray([["operator", serializeAssignOperator(expr.Fields[0])]]), expr.Fields[3] != null ? _fableCore.List.ofArray([["loc", expr.Fields[3]]]) : new _fableCore.List()])) : expr.Case === "CallExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "CallExpression"]]), _fableCore.List.ofArray([["callee", serializeExpression(expr.Fields[0])]]), _fableCore.List.ofArray([["arguments", Array.from(_fableCore.List.map(function (expr_1) {
                return serializeExpression(expr_1);
            }, expr.Fields[1]))]]), expr.Fields[2] != null ? _fableCore.List.ofArray([["loc", expr.Fields[2]]]) : new _fableCore.List()])) : expr.Case === "MemberExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "MemberExpression"]]), _fableCore.List.ofArray([["object", serializeExpression(expr.Fields[0])]]), _fableCore.List.ofArray([["property", serializeExpression(expr.Fields[1])]]), _fableCore.List.ofArray([["computed", expr.Fields[2]]]), expr.Fields[3] != null ? _fableCore.List.ofArray([["loc", expr.Fields[3]]]) : new _fableCore.List()])) : expr.Case === "BinaryExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "BinaryExpression"]]), _fableCore.List.ofArray([["left", serializeExpression(expr.Fields[1])]]), _fableCore.List.ofArray([["right", serializeExpression(expr.Fields[2])]]), _fableCore.List.ofArray([["operator", serializeBinaryOperator(expr.Fields[0])]]), expr.Fields[3] != null ? _fableCore.List.ofArray([["loc", expr.Fields[3]]]) : new _fableCore.List()])) : expr.Case === "ArrayExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "ArrayExpression"]]), _fableCore.List.ofArray([["elements", Array.from(_fableCore.List.map(function (expr_1) {
                return serializeExpression(expr_1);
            }, expr.Fields[0]))]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()])) : expr.Case === "NullLiteral" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "NullLiteral"]]), expr.Fields[0] != null ? _fableCore.List.ofArray([["loc", expr.Fields[0]]]) : new _fableCore.List()])) : expr.Case === "StringLiteral" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "StringLiteral"]]), _fableCore.List.ofArray([["value", expr.Fields[0]]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()])) : expr.Case === "BooleanLiteral" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "BooleanLiteral"]]), _fableCore.List.ofArray([["value", expr.Fields[0]]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()])) : expr.Case === "NumericLiteral" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "NumericLiteral"]]), _fableCore.List.ofArray([["value", expr.Fields[0]]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()])) : createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "Identifier"]]), _fableCore.List.ofArray([["name", expr.Fields[0]]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()]));
        };

        var serializeStatement = $exports.serializeStatement = function serializeStatement(stm) {
            return stm.Case === "BlockStatement" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "BlockStatement"]]), stm.Fields[1] != null ? _fableCore.List.ofArray([["loc", stm.Fields[1]]]) : new _fableCore.List(), _fableCore.List.ofArray([["body", Array.from(_fableCore.List.map(function (stm_1) {
                return serializeStatement(stm_1);
            }, stm.Fields[0]))]])])) : stm.Case === "EmptyStatement" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "EmptyStatement"]]), stm.Fields[0] != null ? _fableCore.List.ofArray([["loc", stm.Fields[0]]]) : new _fableCore.List()])) : stm.Case === "ReturnStatement" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "ReturnStatement"]]), stm.Fields[1] != null ? _fableCore.List.ofArray([["loc", stm.Fields[1]]]) : new _fableCore.List(), _fableCore.List.ofArray([["argument", serializeExpression(stm.Fields[0])]])])) : stm.Case === "VariableDeclaration" ? function () {
                var kind = stm.Fields[0].Case === "Let" ? "let" : stm.Fields[0].Case === "Const" ? "const" : "var";
                return createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "VariableDeclaration"]]), _fableCore.List.ofArray([["kind", kind]]), _fableCore.List.ofArray([["declarations", Array.from(_fableCore.List.map(function (arg00_) {
                    return serializeDeclarator(arg00_);
                }, stm.Fields[1]))]]), stm.Fields[2] != null ? _fableCore.List.ofArray([["loc", stm.Fields[2]]]) : new _fableCore.List()]));
            }() : createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "ExpressionStatement"]]), stm.Fields[1] != null ? _fableCore.List.ofArray([["loc", stm.Fields[1]]]) : new _fableCore.List(), _fableCore.List.ofArray([["expression", serializeExpression(stm.Fields[0])]])]));
        };

        var serializeProgram = $exports.serializeProgram = function serializeProgram(prog) {
            return createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "Program"]]), prog.location != null ? _fableCore.List.ofArray([["loc", prog.location]]) : new _fableCore.List(), _fableCore.List.ofArray([["sourceType", "module"]]), _fableCore.List.ofArray([["body", Array.from(_fableCore.List.map(function (stm) {
                return serializeStatement(stm);
            }, prog.body))]]), _fableCore.List.ofArray([["directives", []]])]));
        };

        return $exports;
    }({});
});
//# sourceMappingURL=babelast.js.map