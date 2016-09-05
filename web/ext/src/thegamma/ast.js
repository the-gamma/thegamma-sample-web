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
    global.ast = mod.exports;
  }
})(this, function (exports, _fableCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ranges = exports.Type = exports.ObjectType = exports.Member = exports.Documentation = exports.Schema = exports.Emitter = exports.Program = exports.Expr = exports.ExprKind = exports.CommandKind = exports.Command = exports.Argument = exports.Name = exports.Token = exports.TokenKind = exports.Operator = exports.Error = exports.Range = undefined;

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

  var _Range = function () {
    function _Range(start, end) {
      _classCallCheck(this, _Range);

      this.Start = start;
      this.End = end;
    }

    _createClass(_Range, [{
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

    return _Range;
  }();

  exports.Range = _Range;

  _fableCore.Util.setInterfaces(_Range.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Range");

  var Error = exports.Error = function () {
    function Error(number, message, range) {
      _classCallCheck(this, Error);

      this.Number = number;
      this.Message = message;
      this.Range = range;
    }

    _createClass(Error, [{
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

    return Error;
  }();

  _fableCore.Util.setInterfaces(Error.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Error");

  var Operator = exports.Operator = function () {
    function Operator(caseName, fields) {
      _classCallCheck(this, Operator);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(Operator, [{
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

    return Operator;
  }();

  _fableCore.Util.setInterfaces(Operator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Operator");

  var TokenKind = exports.TokenKind = function () {
    function TokenKind(caseName, fields) {
      _classCallCheck(this, TokenKind);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(TokenKind, [{
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

    return TokenKind;
  }();

  _fableCore.Util.setInterfaces(TokenKind.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TokenKind");

  var Token = exports.Token = function () {
    function Token(token, range) {
      _classCallCheck(this, Token);

      this.Token = token;
      this.Range = range;
    }

    _createClass(Token, [{
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

    return Token;
  }();

  _fableCore.Util.setInterfaces(Token.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Token");

  var Name = exports.Name = function () {
    function Name(name, range) {
      _classCallCheck(this, Name);

      this.Name = name;
      this.Range = range;
    }

    _createClass(Name, [{
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

    return Name;
  }();

  _fableCore.Util.setInterfaces(Name.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Name");

  var Argument = exports.Argument = function () {
    function Argument(name, value) {
      _classCallCheck(this, Argument);

      this.Name = name;
      this.Value = value;
    }

    _createClass(Argument, [{
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

    return Argument;
  }();

  _fableCore.Util.setInterfaces(Argument.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Argument");

  var Command = exports.Command = function () {
    function Command(command, range) {
      _classCallCheck(this, Command);

      this.Command = command;
      this.Range = range;
    }

    _createClass(Command, [{
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

    return Command;
  }();

  _fableCore.Util.setInterfaces(Command.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Command");

  var CommandKind = exports.CommandKind = function () {
    function CommandKind(caseName, fields) {
      _classCallCheck(this, CommandKind);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(CommandKind, [{
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

    return CommandKind;
  }();

  _fableCore.Util.setInterfaces(CommandKind.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.CommandKind");

  var ExprKind = exports.ExprKind = function () {
    function ExprKind(caseName, fields) {
      _classCallCheck(this, ExprKind);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(ExprKind, [{
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

    return ExprKind;
  }();

  _fableCore.Util.setInterfaces(ExprKind.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.ExprKind");

  var Expr = exports.Expr = function () {
    function Expr(expr, range, type) {
      _classCallCheck(this, Expr);

      this.Expr = expr;
      this.Range = range;
      this.Type = type;
    }

    _createClass(Expr, [{
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

    return Expr;
  }();

  _fableCore.Util.setInterfaces(Expr.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Expr");

  var Program = exports.Program = function () {
    function Program(body, range) {
      _classCallCheck(this, Program);

      this.Body = body;
      this.Range = range;
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

  _fableCore.Util.setInterfaces(Program.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Program");

  var Emitter = exports.Emitter = function Emitter(emit) {
    _classCallCheck(this, Emitter);

    this.Emit = emit;
  };

  _fableCore.Util.setInterfaces(Emitter.prototype, ["FSharpRecord"], "TheGamma.Emitter");

  var Schema = exports.Schema = function () {
    function Schema(type, jSON) {
      _classCallCheck(this, Schema);

      this.Type = type;
      this.JSON = jSON;
    }

    _createClass(Schema, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsRecords(this, other);
      }
    }]);

    return Schema;
  }();

  _fableCore.Util.setInterfaces(Schema.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Schema");

  var Documentation = exports.Documentation = function () {
    function Documentation(caseName, fields) {
      _classCallCheck(this, Documentation);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(Documentation, [{
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

    return Documentation;
  }();

  _fableCore.Util.setInterfaces(Documentation.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Documentation");

  var Member = exports.Member = function () {
    function Member(caseName, fields) {
      _classCallCheck(this, Member);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(Member, [{
      key: "Name",
      get: function get() {
        var $target0 = function $target0(s) {
          return s;
        };

        if (this.Case === "Method") {
          return $target0(this.Fields[0]);
        } else {
          return $target0(this.Fields[0]);
        }
      }
    }]);

    return Member;
  }();

  _fableCore.Util.setInterfaces(Member.prototype, ["FSharpUnion"], "TheGamma.Member");

  var ObjectType = exports.ObjectType = function ObjectType(members, typeargs) {
    _classCallCheck(this, ObjectType);

    this.Members = members;
    this.Typeargs = typeargs;
  };

  _fableCore.Util.setInterfaces(ObjectType.prototype, ["FSharpRecord"], "TheGamma.ObjectType");

  var Type = exports.Type = function Type(caseName, fields) {
    _classCallCheck(this, Type);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(Type.prototype, ["FSharpUnion"], "TheGamma.Type");

  var Ranges = exports.Ranges = function ($exports) {
    var unionRanges = $exports.unionRanges = function unionRanges(r1, r2) {
      return new _Range(r1.Start < r2.Start ? r1.Start : r2.Start, r1.End > r2.End ? r1.End : r2.End);
    };

    var strictSubRange = $exports.strictSubRange = function strictSubRange(first, second) {
      return (first.Start > second.Start ? first.End <= second.End : false) ? true : first.Start >= second.Start ? first.End < second.End : false;
    };

    return $exports;
  }({});
});
//# sourceMappingURL=ast.js.map