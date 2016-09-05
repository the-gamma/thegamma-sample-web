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
    global.parsec = mod.exports;
  }
})(this, function (exports, _fableCore, _ast) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ParserSetter = exports.Parser = undefined;
  exports.ignore = ignore;
  exports.slot = slot;
  exports.prefix = prefix;
  exports.op_LessBarGreater = op_LessBarGreater;
  exports.op_LessMultiplyGreater = op_LessMultiplyGreater;
  exports.map = map;
  exports.op_LessMultiplyGreaterGreater = op_LessMultiplyGreaterGreater;
  exports.op_LessLessMultiplyGreater = op_LessLessMultiplyGreater;
  exports.unit = unit;
  exports.error = error;
  exports.bind = bind;
  exports.optional = optional;
  exports.pred = pred;
  exports.choose = choose;
  exports.zeroOrMore = zeroOrMore;
  exports.oneOrMore = oneOrMore;
  exports.range = range;
  exports.sequenceChoices = sequenceChoices;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Parser = exports.Parser = function Parser(caseName, fields) {
    _classCallCheck(this, Parser);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(Parser.prototype, ["FSharpUnion"], "TheGamma.Parsec.Parser");

  var ParserSetter = exports.ParserSetter = function ParserSetter(set) {
    _classCallCheck(this, ParserSetter);

    this.Set = set;
  };

  _fableCore.Util.setInterfaces(ParserSetter.prototype, ["FSharpRecord"], "TheGamma.Parsec.ParserSetter");

  function ignore(_arg1) {
    return new Parser("Parser", [function (input) {
      var $var2 = _arg1.Fields[0](input);

      if ($var2 != null) {
        return function (tupledArg) {
          return [tupledArg[0], tupledArg[1], null];
        }($var2);
      } else {
        return $var2;
      }
    }]);
  }

  function slot() {
    var slot = null;
    return [new ParserSetter(function (_arg1) {
      slot = _arg1.Fields[0];
    }), new Parser("Parser", [function (input) {
      return slot(input);
    }])];
  }

  function prefix(prefix, result) {
    return new Parser("Parser", [function (tupledArg) {
      var loop = function loop(word) {
        return function (input) {
          var matchValue = [word, input];

          var $target1 = function $target1() {
            return matchValue[0].tail == null ? matchValue[1] : null;
          };

          if (matchValue[0].tail != null) {
            if (matchValue[1].tail != null) {
              if (function () {
                var word_1 = matchValue[0].tail;
                var input_1 = matchValue[1].tail;
                var i = matchValue[1].head;
                var c = matchValue[0].head;
                return _fableCore.Util.equals(c, i);
              }()) {
                var c = matchValue[0].head;
                var i = matchValue[1].head;
                var input_1 = matchValue[1].tail;
                var word_1 = matchValue[0].tail;
                return loop(word_1)(input_1);
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
      };

      var matchValue = loop(prefix)(tupledArg[1]);

      if (matchValue != null) {
        return [[tupledArg[0] + prefix.length, matchValue], new _fableCore.List(), result];
      }
    }]);
  }

  function op_LessBarGreater(_arg2, _arg1) {
    return new Parser("Parser", [function (input) {
      var matchValue = _arg2.Fields[0](input);

      if (matchValue != null) {
        var res = matchValue[2];
        var input_1 = matchValue[0];
        var err = matchValue[1];
        return [input_1, err, res];
      } else {
        return _arg1.Fields[0](input);
      }
    }]);
  }

  function op_LessMultiplyGreater(_arg2, _arg1) {
    return new Parser("Parser", [function (input) {
      var matchValue = _arg2.Fields[0](input);

      if (matchValue != null) {
        var res1 = matchValue[2];
        var input_1 = matchValue[0];
        var e1 = matchValue[1];

        var matchValue_1 = _arg1.Fields[0](input_1);

        if (matchValue_1 != null) {
          var res2 = matchValue_1[2];
          var input_2 = matchValue_1[0];
          var e2 = matchValue_1[1];
          return [input_2, _fableCore.List.append(e1, e2), [res1, res2]];
        }
      }
    }]);
  }

  function map(f, _arg1) {
    return new Parser("Parser", [function (input) {
      var $var3 = _arg1.Fields[0](input);

      if ($var3 != null) {
        return function (tupledArg) {
          return [tupledArg[0], tupledArg[1], f(tupledArg[2])];
        }($var3);
      } else {
        return $var3;
      }
    }]);
  }

  function op_LessMultiplyGreaterGreater(p1, p2) {
    return map(function (tuple) {
      return tuple[1];
    }, op_LessMultiplyGreater(p1, p2));
  }

  function op_LessLessMultiplyGreater(p1, p2) {
    return map(function (tuple) {
      return tuple[0];
    }, op_LessMultiplyGreater(p1, p2));
  }

  function unit(res) {
    return new Parser("Parser", [function (input) {
      return [input, new _fableCore.List(), res];
    }]);
  }

  function error(e) {
    return new Parser("Parser", [function (input) {
      return [input, _fableCore.List.ofArray([e]), null];
    }]);
  }

  function bind(f, _arg1) {
    return new Parser("Parser", [function (input) {
      var matchValue = _arg1.Fields[0](input);

      if (matchValue != null) {
        var res = matchValue[2];
        var input_1 = matchValue[0];
        var err1 = matchValue[1];
        var patternInput = f(res);
        var matchValue_1 = patternInput.Fields[0](input_1);

        if (matchValue_1 != null) {
          var res_1 = matchValue_1[2];
          var input_2 = matchValue_1[0];
          var err2 = matchValue_1[1];
          return [input_2, _fableCore.List.append(err1, err2), res_1];
        }
      }
    }]);
  }

  function optional(_arg1) {
    return new Parser("Parser", [function (input) {
      var matchValue = _arg1.Fields[0](input);

      if (matchValue != null) {
        var res = matchValue[2];
        var input_1 = matchValue[0];
        var err = matchValue[1];
        return [input_1, err, res];
      } else {
        return [input, new _fableCore.List(), null];
      }
    }]);
  }

  function pred(p) {
    return new Parser("Parser", [function (_arg1) {
      var $target1 = function $target1() {
        return null;
      };

      if (_arg1[1].tail != null) {
        if (function () {
          var input = _arg1[1].tail;
          var c = _arg1[1].head;
          return p(c);
        }()) {
          var c = _arg1[1].head;
          var input = _arg1[1].tail;
          var offs = _arg1[0];
          return [[offs + 1, input], new _fableCore.List(), c];
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }]);
  }

  function choose(p) {
    return new Parser("Parser", [function (_arg1) {
      return _arg1[1].tail != null ? function () {
        var input = _arg1[1].tail;
        var c = _arg1[1].head;
        var $var4 = p(c);

        if ($var4 != null) {
          return function (c_1) {
            return [[_arg1[0] + 1, input], new _fableCore.List(), c_1];
          }($var4);
        } else {
          return $var4;
        }
      }() : null;
    }]);
  }

  function zeroOrMore(_arg1) {
    var loop = function loop(acc) {
      return function (errs) {
        return function (input) {
          var matchValue = _arg1.Fields[0](input);

          if (matchValue != null) {
            var res = matchValue[2];
            var input_1 = matchValue[0];
            var e = matchValue[1];
            return loop(_fableCore.List.ofArray([res], acc))(_fableCore.List.append(e, errs))(input_1);
          } else {
            return [input, errs, _fableCore.List.reverse(acc)];
          }
        };
      };
    };

    return new Parser("Parser", [loop(new _fableCore.List())(new _fableCore.List())]);
  }

  function oneOrMore(p) {
    return map(function (tupledArg) {
      return _fableCore.List.ofArray([tupledArg[0]], tupledArg[1]);
    }, op_LessMultiplyGreater(p, zeroOrMore(p)));
  }

  function range(_arg1) {
    return new Parser("Parser", [function (_arg2) {
      var $var5 = _arg1.Fields[0](_arg2);

      if ($var5 != null) {
        return function (tupledArg) {
          return [tupledArg[0], tupledArg[1], [new _ast.Range(_arg2[0], tupledArg[0][0]), tupledArg[2]]];
        }($var5);
      } else {
        return $var5;
      }
    }]);
  }

  function sequenceChoices(parsers) {
    return new Parser("Parser", [function (input) {
      var input_1 = input;
      var running = true;
      var results = new _fableCore.List();
      var errors = new _fableCore.List();

      while (running) {
        running = false;
        var parsers_1 = parsers;

        while (!(parsers_1.tail == null)) {
          var patternInput = parsers_1.head;
          var matchValue = patternInput.Fields[0](input_1);

          if (matchValue == null) {
            parsers_1 = parsers_1.tail;
          } else {
            var res = matchValue[2];
            var newInput = matchValue[0];
            var err = matchValue[1];
            input_1 = newInput;
            running = true;
            results = _fableCore.List.ofArray([res], results);
            parsers_1 = new _fableCore.List();
            errors = _fableCore.List.append(err, errors);
          }
        }
      }

      return [input_1, errors, _fableCore.List.reverse(results)];
    }]);
  }
});
//# sourceMappingURL=parsec.js.map