(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["fable-core", "../../src/thegamma/ast", "assert", "../../src/thegamma/tokenizer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("fable-core"), require("../../src/thegamma/ast"), require("assert"), require("../../src/thegamma/tokenizer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.fableCore, global.ast, global.assert, global.tokenizer);
    global.tokenizer = mod.exports;
  }
})(this, function (_fableCore, _ast, _assert, _tokenizer) {
  "use strict";

  var assert = _interopRequireWildcard(_assert);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  describe("Tokenizer", function () {
    var rnd = {};

    var formatToken = function formatToken(_arg1) {
      return _arg1.Case === "LParen" ? "(" : _arg1.Case === "RParen" ? ")" : _arg1.Case === "Equals" ? "=" : _arg1.Case === "Dot" ? "." : _arg1.Case === "Comma" ? "," : _arg1.Case === "Let" ? "let" : _arg1.Case === "LSquare" ? "[" : _arg1.Case === "RSquare" ? "]" : _arg1.Case === "Fun" ? "fun" : _arg1.Case === "Arrow" ? "->" : _arg1.Case === "Operator" ? _arg1.Fields[0].Case === "GreaterThan" ? ">" : _arg1.Fields[0].Case === "GreaterThanOrEqual" ? ">=" : _arg1.Fields[0].Case === "LessThan" ? "<" : _arg1.Fields[0].Case === "LessThanOrEqual" ? "<=" : _arg1.Fields[0].Case === "Minus" ? "-" : _arg1.Fields[0].Case === "Multiply" ? "*" : _arg1.Fields[0].Case === "Plus" ? "+" : "/" : _arg1.Case === "Boolean" ? _arg1.Fields[0] ? "true" : "false" : _arg1.Case === "Number" ? function () {
        var s = _arg1.Fields[0];
        return s;
      }() : _arg1.Case === "String" ? function () {
        var s = _arg1.Fields[0];
        return "\"" + _fableCore.String.replace(_fableCore.String.replace(_fableCore.String.replace(s, "\\", "\\\\"), "\n", "\\n"), "\"", "\\\"") + "\"";
      }() : _arg1.Case === "Ident" ? function () {
        var i = _arg1.Fields[0];
        return i;
      }() : _arg1.Case === "QIdent" ? function () {
        var q = _arg1.Fields[0];
        return "'" + q + "'";
      }() : _arg1.Case === "White" ? function () {
        var w = _arg1.Fields[0];
        return w;
      }() : _arg1.Case === "Newline" ? "\n" : _arg1.Case === "Error" ? function () {
        var c = _arg1.Fields[0];
        return c;
      }() : function () {
        throw "Unsupported token";
      }();
    };

    var formatTokens = function formatTokens(tokens) {
      return _fableCore.String.join("", _fableCore.Seq.map(function (t) {
        return formatToken(t.Token);
      }, tokens));
    };

    var formatTokensUsingRange = function formatTokensUsingRange(source, tokens) {
      return _fableCore.String.join("", _fableCore.Seq.map(function (t) {
        return source.substr(t.Range.Start, t.Range.End - t.Range.Start);
      }, tokens));
    };

    var randomString = function randomString(s) {
      return Array.from(_fableCore.Seq.initialize(Math.floor(Math.random() * (10 - 0)) + 0, function (_arg1) {
        return s[Math.floor(Math.random() * (s.length - 0)) + 0];
      })).join('');
    };

    var constantTokens = _fableCore.List.ofArray([new _ast.TokenKind("LParen", []), new _ast.TokenKind("RParen", []), new _ast.TokenKind("Equals", []), new _ast.TokenKind("Dot", []), new _ast.TokenKind("Comma", []), new _ast.TokenKind("Let", []), new _ast.TokenKind("LSquare", []), new _ast.TokenKind("RSquare", []), new _ast.TokenKind("Fun", []), new _ast.TokenKind("Arrow", []), new _ast.TokenKind("Operator", [new _ast.Operator("Divide", [])]), new _ast.TokenKind("Operator", [new _ast.Operator("GreaterThan", [])]), new _ast.TokenKind("Operator", [new _ast.Operator("GreaterThanOrEqual", [])]), new _ast.TokenKind("Operator", [new _ast.Operator("LessThan", [])]), new _ast.TokenKind("Operator", [new _ast.Operator("LessThanOrEqual", [])]), new _ast.TokenKind("Operator", [new _ast.Operator("Minus", [])]), new _ast.TokenKind("Operator", [new _ast.Operator("Multiply", [])]), new _ast.TokenKind("Operator", [new _ast.Operator("Plus", [])]), new _ast.TokenKind("Newline", []), new _ast.TokenKind("Boolean", [true]), new _ast.TokenKind("Boolean", [false])]);

    var randomToken = function randomToken(last) {
      var matchValue = Math.floor(Math.random() * (12 - 0)) + 0;

      var $target0 = function $target0() {
        var matchValue_1 = [last, _fableCore.Seq.item(Math.floor(Math.random() * (constantTokens.length - 0)) + 0, constantTokens)];

        var $target0 = function $target0() {
          return new _ast.TokenKind("Arrow", []);
        };

        var $target1 = function $target1(t) {
          return t;
        };

        if (matchValue_1[0].Case === "Ident") {
          if (matchValue_1[1].Case === "Let") {
            return $target0();
          } else {
            if (matchValue_1[1].Case === "Fun") {
              return $target0();
            } else {
              if (matchValue_1[1].Case === "Boolean") {
                return $target0();
              } else {
                return $target1(matchValue_1[1]);
              }
            }
          }
        } else {
          if (matchValue_1[0].Case === "Number") {
            if (matchValue_1[1].Case === "Dot") {
              return $target0();
            } else {
              return $target1(matchValue_1[1]);
            }
          } else {
            return $target1(matchValue_1[1]);
          }
        }
      };

      var $target1 = function $target1() {
        var $target1 = function $target1() {
          var $target1 = function $target1() {
            var $target2 = function $target2() {
              return matchValue === 8 ? new _ast.TokenKind("QIdent", [randomString("bcdEFG0123$*^!@#+,. \\\"")]) : (last.Case === "White" ? false : true) ? new _ast.TokenKind("White", [" " + randomString(" ")]) : new _ast.TokenKind("Comma", []);
            };

            if (matchValue === 6) {
              return new _ast.TokenKind("String", [randomString("abcDEF012$*^!@#+,. \n\\\"")]);
            } else {
              if (matchValue === 7) {
                if (function () {
                  var $target0_1 = function $target0_1() {
                    return false;
                  };

                  if (last.Case === "Number") {
                    return $target0_1();
                  } else {
                    if (last.Case === "Ident") {
                      return $target0_1();
                    } else {
                      return true;
                    }
                  }
                }()) {
                  return new _ast.TokenKind("Ident", ["a" + randomString("bcdEFG0123")]);
                } else {
                  return $target2();
                }
              } else {
                return $target2();
              }
            }
          };

          if (matchValue === 5) {
            if (function () {
              var $target0_1 = function $target0_1() {
                return false;
              };

              if (last.Case === "Ident") {
                return $target0_1();
              } else {
                if (last.Case === "Number") {
                  return $target0_1();
                } else {
                  return true;
                }
              }
            }()) {
              var patternInput = [Math.floor(Math.random() * (1000000 - 0)) + 0, Math.floor(Math.random() * (1000000 - 0)) + 0];
              var n = String(patternInput[0]) + "." + String(patternInput[1]);
              return new _ast.TokenKind("Number", [n, Number.parseFloat(n)]);
            } else {
              return $target1();
            }
          } else {
            return $target1();
          }
        };

        if (matchValue === 4) {
          if (function () {
            var $target0_1 = function $target0_1() {
              return false;
            };

            if (last.Case === "Ident") {
              return $target0_1();
            } else {
              if (last.Case === "Number") {
                return $target0_1();
              } else {
                return true;
              }
            }
          }()) {
            var n = Math.floor(Math.random() * (1000000000 - 0)) + 0;
            return new _ast.TokenKind("Number", [String(n), n]);
          } else {
            return $target1();
          }
        } else {
          return $target1();
        }
      };

      if (matchValue === 0) {
        if (!_fableCore.Seq.exists(function (y) {
          return last.Equals(y);
        }, constantTokens)) {
          return $target0();
        } else {
          return $target1();
        }
      } else {
        if (matchValue === 1) {
          if (!_fableCore.Seq.exists(function (y) {
            return last.Equals(y);
          }, constantTokens)) {
            return $target0();
          } else {
            return $target1();
          }
        } else {
          if (matchValue === 2) {
            if (!_fableCore.Seq.exists(function (y) {
              return last.Equals(y);
            }, constantTokens)) {
              return $target0();
            } else {
              return $target1();
            }
          } else {
            if (matchValue === 3) {
              if (!_fableCore.Seq.exists(function (y) {
                return last.Equals(y);
              }, constantTokens)) {
                return $target0();
              } else {
                return $target1();
              }
            } else {
              return $target1();
            }
          }
        }
      }
    };

    var randomTokens = function randomTokens() {
      return _fableCore.Seq.toList(_fableCore.Seq.take(20 + (Math.floor(Math.random() * (100 - 0)) + 0), _fableCore.Seq.unfold(function (last) {
        var t = new _ast.Token(randomToken(last), new _ast.Range(0, 0));
        return [t, t.Token];
      }, new _ast.TokenKind("Dot", []))));
    };

    var checkWithTokens = function checkWithTokens(f) {
      for (var i = 1; i <= 100; i++) {
        var tokens = randomTokens();
        var res = f(tokens);

        if (!res) {
          _fableCore.String.fsFormat("*** Assertion failed ***\nTokens:")(function (x) {
            console.log(x);
          });

          _fableCore.Seq.iterate(function (t) {
            _fableCore.String.fsFormat("  >>%s<<")(function (x) {
              console.log(x);
            })(formatToken(t.Token));
          }, tokens);
        }

        assert.equal(true, res);
      }

      _fableCore.String.fsFormat("Passed 100 tests.")(function (x) {
        console.log(x);
      });
    };

    it("Format and tokenize returns original tokens", function () {
      checkWithTokens(function (sourceTokens) {
        var patternInput = (0, _tokenizer.tokenize)(formatTokens(sourceTokens));
        return patternInput[0].Equals(sourceTokens);
      });
    });
  });
});
//# sourceMappingURL=tokenizer.js.map