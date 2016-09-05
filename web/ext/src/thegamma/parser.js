(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./parsec", "fable-core", "./ast", "./errors"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./parsec"), require("fable-core"), require("./ast"), require("./errors"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.parsec, global.fableCore, global.ast, global.errors);
    global.parser = mod.exports;
  }
})(this, function (exports, _parsec, _fableCore, _ast, _errors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.program = exports.letBinding = exports.declaration = exports.listrange = exports.boolean = exports.string = exports.number = exports.lambda = exports.list = exports.expressionOrNothing = exports.invocationChain = exports.callOrPropertyOrNothing = exports.callOrProperty = exports.CallOrProperty = exports.argumentList = exports.argument = exports.expression = exports.expressionSetter = exports.ident = exports.anyUntilLineEnd = exports.anyWhite = undefined;
  exports.token = token;
  exports.optionalOrError = optionalOrError;
  exports.separated = separated;
  exports.separatedThen = separatedThen;
  exports.separatedOrEmpty = separatedOrEmpty;

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

  var anyWhite = exports.anyWhite = (0, _parsec.zeroOrMore)((0, _parsec.pred)(function (t) {
    var $target0 = function $target0() {
      return true;
    };

    if (t.Token.Case === "Newline") {
      return $target0();
    } else {
      if (t.Token.Case === "White") {
        return $target0();
      } else {
        return false;
      }
    }
  }));
  var anyUntilLineEnd = exports.anyUntilLineEnd = new _parsec.Parser("Parser", [function (input) {
    var loop = function loop(input_1) {
      return input_1[1].tail == null ? function () {
        var offset = input_1[0];
        return [[offset, new _fableCore.List()], new _fableCore.List(), null];
      }() : input_1[1].head.Token.Case === "Newline" ? function () {
        var offset = input_1[0];
        var rest = input_1[1].tail;
        return [[offset + 1, rest], new _fableCore.List(), null];
      }() : function () {
        var offset = input_1[0];
        var rest = input_1[1].tail;
        var tok = input_1[1].head;
        return loop([offset + 1, rest]);
      }();
    };

    return loop(input);
  }]);

  function token(tok) {
    return (0, _parsec.pred)(function (t) {
      return t.Token.Equals(tok);
    });
  }

  function optionalOrError(err, p) {
    return (0, _parsec.bind)(function (_arg1) {
      return _arg1[1] == null ? (0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.error)(err(_arg1[0])), (0, _parsec.unit)()) : function () {
        var v = _arg1[1];
        return (0, _parsec.unit)(v);
      }();
    }, (0, _parsec.range)((0, _parsec.optional)(p)));
  }

  function separated(sep, p) {
    return (0, _parsec.map)(function (tupledArg) {
      return _fableCore.List.ofArray([tupledArg[0]], _fableCore.List.map(function (tuple) {
        return tuple[1];
      }, tupledArg[1]));
    }, (0, _parsec.op_LessMultiplyGreater)(p, (0, _parsec.zeroOrMore)((0, _parsec.op_LessMultiplyGreater)(sep, p))));
  }

  function separatedThen(sep, p1, p2) {
    return (0, _parsec.map)(function (tupledArg) {
      return _fableCore.List.ofArray([tupledArg[0]], _fableCore.List.map(function (tuple) {
        return tuple[1];
      }, tupledArg[1]));
    }, (0, _parsec.op_LessMultiplyGreater)(p1, (0, _parsec.zeroOrMore)((0, _parsec.op_LessMultiplyGreater)(sep, p2))));
  }

  function separatedOrEmpty(sep, p) {
    return (0, _parsec.map)(function (l) {
      return l != null ? l : new _fableCore.List();
    }, (0, _parsec.optional)(separated(sep, p)));
  }

  var ident = exports.ident = (0, _parsec.map)(function (tupledArg) {
    return new _ast.Name(tupledArg[1], tupledArg[0]);
  }, (0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.range)((0, _parsec.choose)(function (tok) {
    var $target0 = function $target0(id) {
      return id;
    };

    if (tok.Token.Case === "Ident") {
      return $target0(tok.Token.Fields[0]);
    } else {
      if (tok.Token.Case === "QIdent") {
        return $target0(tok.Token.Fields[0]);
      }
    }
  }))));
  var patternInput_46 = (0, _parsec.slot)();
  var expressionSetter = exports.expressionSetter = patternInput_46[0];
  var expression = exports.expression = patternInput_46[1];
  var argument = exports.argument = (0, _parsec.op_LessBarGreater)((0, _parsec.map)(function (tupledArg) {
    return new _ast.Argument(tupledArg[0], tupledArg[1]);
  }, (0, _parsec.op_LessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)(ident, anyWhite), token(new _ast.TokenKind("Equals", []))), expression)), (0, _parsec.map)(function (expr) {
    return new _ast.Argument(null, expr);
  }, expression));
  var argumentList = exports.argumentList = (0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.range)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessMultiplyGreaterGreater)(token(new _ast.TokenKind("LParen", [])), separatedOrEmpty((0, _parsec.op_LessMultiplyGreater)(anyWhite, token(new _ast.TokenKind("Comma", []))), argument)), (0, _parsec.op_LessBarGreater)((0, _parsec.ignore)((0, _parsec.op_LessMultiplyGreater)(anyWhite, token(new _ast.TokenKind("RParen", [])))), (0, _parsec.bind)(function (tupledArg) {
    return (0, _parsec.error)(_errors.Parser.missingClosingParen(tupledArg[0]));
  }, (0, _parsec.range)(anyUntilLineEnd))))));

  var CallOrProperty = exports.CallOrProperty = function () {
    function CallOrProperty(name, _arguments) {
      _classCallCheck(this, CallOrProperty);

      this.Name = name;
      this.Arguments = _arguments;
    }

    _createClass(CallOrProperty, [{
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

    return CallOrProperty;
  }();

  _fableCore.Util.setInterfaces(CallOrProperty.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Parser.CallOrProperty");

  var callOrProperty = exports.callOrProperty = (0, _parsec.bind)(function (_arg1) {
    return _arg1[1][0] == null ? function () {
      var args = _arg1[1][1];
      return (0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.error)(_errors.Parser.emptyIdentifier(_arg1[0])), (0, _parsec.unit)(new CallOrProperty(new _ast.Name("", _arg1[0]), args)));
    }() : function () {
      var name = _arg1[1][0];
      var args = _arg1[1][1];
      return (0, _parsec.unit)(new CallOrProperty(name, args));
    }();
  }, (0, _parsec.op_LessBarGreater)((0, _parsec.range)((0, _parsec.map)(function (tupledArg) {
    return [tupledArg[0], tupledArg[1]];
  }, (0, _parsec.op_LessMultiplyGreater)(ident, (0, _parsec.optional)(argumentList)))), (0, _parsec.range)((0, _parsec.map)(function (tupledArg) {
    return [tupledArg[0], tupledArg[1]];
  }, (0, _parsec.op_LessMultiplyGreater)((0, _parsec.optional)(ident), argumentList)))));
  var callOrPropertyOrNothing = exports.callOrPropertyOrNothing = (0, _parsec.op_LessBarGreater)(callOrProperty, (0, _parsec.bind)(function (tupledArg) {
    return (0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.error)(_errors.Parser.nothingAfterDot(tupledArg[0])), (0, _parsec.unit)(new CallOrProperty(new _ast.Name("", tupledArg[0]))));
  }, (0, _parsec.range)((0, _parsec.unit)())));
  var invocationChain = exports.invocationChain = (0, _parsec.bind)(function (_arg1) {
    return _arg1.tail == null ? function () {
      throw "Unexpected: Parsed empty chain";
    }() : function () {
      var inst = new _ast.Expr(new _ast.ExprKind("Variable", [_arg1.head.Name]), _arg1.head.Name.Range);

      var parsed = function () {
        var folder = function folder(st) {
          return function (item) {
            var patternInput = item.Arguments == null ? [new _ast.ExprKind("Property", [st, item.Name]), _ast.Ranges.unionRanges(st.Range, item.Name.Range)] : function () {
              var arng = item.Arguments[0];
              var args = item.Arguments[1];
              return [new _ast.ExprKind("Call", [st, item.Name, args]), _ast.Ranges.unionRanges(st.Range, _ast.Ranges.unionRanges(item.Name.Range, arng))];
            }();
            return new _ast.Expr(patternInput[0], patternInput[1]);
          };
        };

        return function (list) {
          return _fableCore.Seq.fold(function ($var6, $var7) {
            return folder($var6)($var7);
          }, inst, list);
        };
      }()(_arg1.tail);

      return (0, _parsec.op_LessMultiplyGreaterGreater)(_arg1.head.Arguments != null ? function () {
        var rng = _arg1.head.Arguments[0];
        return (0, _parsec.error)(_errors.Parser.valueNotAfunction(rng, _arg1.head.Name.Name));
      }() : (0, _parsec.unit)(), (0, _parsec.unit)(parsed));
    }();
  }, separatedThen((0, _parsec.op_LessMultiplyGreater)(anyWhite, token(new _ast.TokenKind("Dot", []))), callOrProperty, callOrPropertyOrNothing));
  var expressionOrNothing = exports.expressionOrNothing = (0, _parsec.op_LessBarGreater)((0, _parsec.map)(function (arg0) {
    return arg0;
  }, expression), (0, _parsec.bind)(function (tupledArg) {
    return (0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.error)(_errors.Parser.nothingAfterComma(tupledArg[0])), (0, _parsec.unit)());
  }, (0, _parsec.range)((0, _parsec.unit)())));
  var list = exports.list = (0, _parsec.map)(function (tupledArg) {
    return new _ast.Expr(new _ast.ExprKind("List", [_fableCore.List.choose(function (x) {
      return x;
    }, tupledArg[1])]), tupledArg[0]);
  }, (0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.range)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessMultiplyGreaterGreater)(token(new _ast.TokenKind("LSquare", [])), separatedThen((0, _parsec.op_LessMultiplyGreater)(anyWhite, token(new _ast.TokenKind("Comma", []))), (0, _parsec.map)(function (arg0) {
    return arg0;
  }, expression), expressionOrNothing)), anyWhite), optionalOrError(function (rng) {
    return _errors.Parser.missingClosingSquare(rng);
  }, token(new _ast.TokenKind("RSquare", [])))))));
  var lambda = exports.lambda = (0, _parsec.map)(function (tupledArg) {
    return new _ast.Expr(new _ast.ExprKind("Function", [tupledArg[1][0], tupledArg[1][1]]), tupledArg[0]);
  }, (0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.range)((0, _parsec.op_LessMultiplyGreater)((0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.op_LessMultiplyGreaterGreater)(token(new _ast.TokenKind("Fun", [])), anyWhite), ident), (0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, token(new _ast.TokenKind("Arrow", []))), anyWhite), expression)))));
  var number = exports.number = (0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.choose)(function (_arg1) {
    return _arg1.Token.Case === "Number" ? function () {
      var n = _arg1.Token.Fields[1];
      return new _ast.Expr(new _ast.ExprKind("Number", [n]), _arg1.Range);
    }() : null;
  }));
  var string = exports.string = (0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.choose)(function (_arg1) {
    return _arg1.Token.Case === "String" ? function () {
      var n = _arg1.Token.Fields[0];
      return new _ast.Expr(new _ast.ExprKind("String", [n]), _arg1.Range);
    }() : null;
  }));

  var _boolean = (0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.choose)(function (_arg1) {
    return _arg1.Token.Case === "Boolean" ? function () {
      var b = _arg1.Token.Fields[0];
      return new _ast.Expr(new _ast.ExprKind("Boolean", [b]), _arg1.Range);
    }() : null;
  }));

  exports.boolean = _boolean;
  var listrange = exports.listrange = (0, _parsec.bind)(function (tupledArg) {
    var getNum = function getNum(_arg1) {
      return _arg1.Expr.Case === "Number" ? function () {
        var n = _arg1.Expr.Fields[0];
        return n;
      }() : function () {
        throw "expected number";
      }();
    };

    var asNum = function asNum(n) {
      var Expr = new _ast.ExprKind("Number", [n]);
      return new _ast.Expr(Expr, tupledArg[0]);
    };

    var $target2 = function $target2() {
      return (0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.error)(_errors.Parser.incompleteRange(tupledArg[0])), (0, _parsec.unit)(new _ast.Expr(new _ast.ExprKind("List", [_fableCore.List.ofArray([asNum(0)])]), tupledArg[0])));
    };

    if (tupledArg[1][1] != null) {
      if (tupledArg[1][1][1] == null) {
        var efrom = tupledArg[1][0];
        var eto = tupledArg[1][1][0];
        return (0, _parsec.unit)(new _ast.Expr(new _ast.ExprKind("List", [_fableCore.List.map(asNum, _fableCore.Seq.toList(_fableCore.Seq.range(getNum(efrom), getNum(eto))))]), tupledArg[0]));
      } else {
        if (tupledArg[1][1][1] != null) {
          var efrom = tupledArg[1][0];
          var estep = tupledArg[1][1][1];
          var eto = tupledArg[1][1][0];
          return (0, _parsec.unit)(new _ast.Expr(new _ast.ExprKind("List", [_fableCore.List.map(asNum, _fableCore.Seq.toList(_fableCore.Seq.rangeStep(getNum(efrom), getNum(estep), getNum(eto))))]), tupledArg[0]));
        } else {
          return $target2();
        }
      }
    } else {
      return $target2();
    }
  }, (0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.range)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.op_LessMultiplyGreaterGreater)(token(new _ast.TokenKind("LSquare", [])), anyWhite), number), anyWhite), token(new _ast.TokenKind("To", []))), anyWhite), (0, _parsec.optional)((0, _parsec.op_LessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)(number, anyWhite), (0, _parsec.optional)((0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.op_LessMultiplyGreaterGreater)(token(new _ast.TokenKind("By", [])), anyWhite), (0, _parsec.optional)((0, _parsec.op_LessLessMultiplyGreater)(number, anyWhite))))))), optionalOrError(function (rng) {
    return _errors.Parser.missingClosingSquare(rng);
  }, token(new _ast.TokenKind("RSquare", [])))))));
  var declaration = exports.declaration = (0, _parsec.op_LessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.op_LessMultiplyGreaterGreater)((0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, token(new _ast.TokenKind("Let", []))), ident), anyWhite), token(new _ast.TokenKind("Equals", []))), expression);
  var letBinding = exports.letBinding = (0, _parsec.map)(function (tupledArg) {
    return new _ast.Command(new _ast.CommandKind("Let", [tupledArg[1][0], tupledArg[1][1]]), tupledArg[0]);
  }, (0, _parsec.range)(declaration));
  expressionSetter.Set((0, _parsec.op_LessMultiplyGreaterGreater)(anyWhite, (0, _parsec.op_LessBarGreater)((0, _parsec.op_LessBarGreater)((0, _parsec.op_LessBarGreater)((0, _parsec.op_LessBarGreater)((0, _parsec.op_LessBarGreater)((0, _parsec.op_LessBarGreater)(invocationChain, listrange), list), lambda), number), string), _boolean)));
  var program = exports.program = (0, _parsec.map)(function (tupledArg) {
    return new _ast.Program(tupledArg[1], tupledArg[0]);
  }, (0, _parsec.range)((0, _parsec.op_LessLessMultiplyGreater)((0, _parsec.sequenceChoices)(_fableCore.List.ofArray([(0, _parsec.map)(function (e) {
    return new _ast.Command(new _ast.CommandKind("Expr", [e]), e.Range);
  }, expression), letBinding])), anyWhite)));
});
//# sourceMappingURL=parser.js.map