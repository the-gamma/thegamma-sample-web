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
    global.astops = mod.exports;
  }
})(this, function (exports, _fableCore, _ast) {
  "use strict";

  exports.__esModule = true;
  exports.Entity$2Eget_Name = exports.Entity$2Eget_Antecedents = exports.anonymous = exports.FormattingContext = undefined;
  exports.node = node;
  exports.needsEscaping = needsEscaping;
  exports.escapeIdent = escapeIdent;
  exports.unionRanges = unionRanges;
  exports.strictSubRange = strictSubRange;
  exports.formatToken = formatToken;
  exports.formatTokenInfo = formatTokenInfo;
  exports.formatTokens = formatTokens;
  exports.formatNode = formatNode;
  exports.formatName = formatName;
  exports.formatArgument = formatArgument;
  exports.formatExpression = formatExpression;
  exports.formatCommand = formatCommand;
  exports.formatSingleExpression = formatSingleExpression;
  exports.formatProgram = formatProgram;
  exports.formatWhiteAfterExpr = formatWhiteAfterExpr;
  exports.formatEntityKind = formatEntityKind;
  exports.entityCodeNameAndAntecedents = entityCodeNameAndAntecedents;
  exports.formatType = formatType;
  exports.formatTypeInfo = formatTypeInfo;
  exports.rebuildExprNode = rebuildExprNode;
  exports.$ExprLeaf$ExprNode$ = $ExprLeaf$ExprNode$;

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

  function node(rng, node_1) {
    var Entity = null;
    var WhiteBefore = new _fableCore.List();
    var WhiteAfter = new _fableCore.List();
    return new _ast.Node(WhiteBefore, WhiteAfter, rng, node_1, Entity);
  }

  function needsEscaping(s) {
    return (s[0] >= "0" ? s[0] <= "9" : false) ? true : s.split("").some(function (c) {
      return !(((c >= "a" ? c <= "z" : false) ? true : c >= "A" ? c <= "Z" : false) ? true : c >= "0" ? c <= "9" : false);
    });
  }

  function escapeIdent(s) {
    return needsEscaping(s) ? "'" + s + "'" : s;
  }

  function unionRanges(r1, r2) {
    return new _ast.Range(r1.Start < r2.Start ? r1.Start : r2.Start, r1.End > r2.End ? r1.End : r2.End);
  }

  function strictSubRange(first, second) {
    return (first.Start > second.Start ? first.End <= second.End : false) ? true : first.Start >= second.Start ? first.End < second.End : false;
  }

  function formatToken(_arg1) {
    var $target30 = function $target30() {
      throw "Unsupported token";
    };

    if (_arg1.Case === "RParen") {
      return ")";
    } else {
      if (_arg1.Case === "Equals") {
        return "=";
      } else {
        if (_arg1.Case === "Dot") {
          return ".";
        } else {
          if (_arg1.Case === "Comma") {
            return ",";
          } else {
            if (_arg1.Case === "Let") {
              return "let";
            } else {
              if (_arg1.Case === "LSquare") {
                return "[";
              } else {
                if (_arg1.Case === "RSquare") {
                  return "]";
                } else {
                  if (_arg1.Case === "Fun") {
                    return "fun";
                  } else {
                    if (_arg1.Case === "Arrow") {
                      return "->";
                    } else {
                      if (_arg1.Case === "Operator") {
                        if (_arg1.Fields[0].Case === "GreaterThan") {
                          return ">";
                        } else {
                          if (_arg1.Fields[0].Case === "GreaterThanOrEqual") {
                            return ">=";
                          } else {
                            if (_arg1.Fields[0].Case === "LessThan") {
                              return "<";
                            } else {
                              if (_arg1.Fields[0].Case === "LessThanOrEqual") {
                                return "<=";
                              } else {
                                if (_arg1.Fields[0].Case === "Minus") {
                                  return "-";
                                } else {
                                  if (_arg1.Fields[0].Case === "Multiply") {
                                    return "*";
                                  } else {
                                    if (_arg1.Fields[0].Case === "Plus") {
                                      return "+";
                                    } else {
                                      if (_arg1.Fields[0].Case === "Power") {
                                        return "^";
                                      } else {
                                        if (_arg1.Fields[0].Case === "Equals") {
                                          return "=";
                                        } else {
                                          return "/";
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (_arg1.Case === "Boolean") {
                          if (_arg1.Fields[0]) {
                            return "true";
                          } else {
                            return "false";
                          }
                        } else {
                          if (_arg1.Case === "Number") {
                            var s = _arg1.Fields[0];
                            return s;
                          } else {
                            if (_arg1.Case === "String") {
                              var _s = _arg1.Fields[0];
                              return "\"" + _fableCore.String.replace(_fableCore.String.replace(_fableCore.String.replace(_s, "\\", "\\\\"), "\n", "\\n"), "\"", "\\\"") + "\"";
                            } else {
                              if (_arg1.Case === "Ident") {
                                var i = _arg1.Fields[0];
                                return i;
                              } else {
                                if (_arg1.Case === "QIdent") {
                                  var q = _arg1.Fields[0];
                                  return "'" + q + "'";
                                } else {
                                  if (_arg1.Case === "White") {
                                    var w = _arg1.Fields[0];
                                    return w;
                                  } else {
                                    if (_arg1.Case === "Newline") {
                                      return "\n";
                                    } else {
                                      if (_arg1.Case === "Error") {
                                        var c = _arg1.Fields[0];
                                        return c;
                                      } else {
                                        if (_arg1.Case === "EndOfFile") {
                                          return "";
                                        } else {
                                          if (_arg1.Case === "By") {
                                            return $target30();
                                          } else {
                                            if (_arg1.Case === "To") {
                                              return $target30();
                                            } else {
                                              return "(";
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
            }
          }
        }
      }
    }
  }

  function formatTokenInfo(_arg1) {
    var $target31 = function $target31() {
      throw "Unsupported token";
    };

    if (_arg1.Case === "RParen") {
      return "right parenthesis `)`";
    } else {
      if (_arg1.Case === "Equals") {
        return "equals sign `=`";
      } else {
        if (_arg1.Case === "Dot") {
          return "dot character `.`";
        } else {
          if (_arg1.Case === "Comma") {
            return "comma character `,`";
          } else {
            if (_arg1.Case === "Let") {
              return "`let` keyword";
            } else {
              if (_arg1.Case === "LSquare") {
                return "left square bracket `[`";
              } else {
                if (_arg1.Case === "RSquare") {
                  return "right square bracket `]`";
                } else {
                  if (_arg1.Case === "Fun") {
                    return "`fun` keyword";
                  } else {
                    if (_arg1.Case === "Arrow") {
                      return "arrow sign `->`";
                    } else {
                      if (_arg1.Case === "Operator") {
                        if (_arg1.Fields[0].Case === "Divide") {
                          return "division sign `/`";
                        } else {
                          if (_arg1.Fields[0].Case === "GreaterThan") {
                            return "greater than sign `>`";
                          } else {
                            if (_arg1.Fields[0].Case === "GreaterThanOrEqual") {
                              return "greater than or equals sign `>=`";
                            } else {
                              if (_arg1.Fields[0].Case === "LessThan") {
                                return "less than sign `<`";
                              } else {
                                if (_arg1.Fields[0].Case === "LessThanOrEqual") {
                                  return "less than or equals sign `<=`";
                                } else {
                                  if (_arg1.Fields[0].Case === "Minus") {
                                    return "minus sign `-`";
                                  } else {
                                    if (_arg1.Fields[0].Case === "Multiply") {
                                      return "multiplication sign `*`";
                                    } else {
                                      if (_arg1.Fields[0].Case === "Plus") {
                                        return "plus sign `+`";
                                      } else {
                                        if (_arg1.Fields[0].Case === "Power") {
                                          return "exponentiation sign `^`";
                                        } else {
                                          return "equals operator `=`";
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (_arg1.Case === "Boolean") {
                          if (_arg1.Fields[0]) {
                            return "logical `true` value";
                          } else {
                            return "logical `false` value";
                          }
                        } else {
                          if (_arg1.Case === "Number") {
                            var s = _arg1.Fields[0];
                            return _fableCore.String.fsFormat("numerical value `%s`")(function (x) {
                              return x;
                            })(s);
                          } else {
                            if (_arg1.Case === "String") {
                              var _s2 = _arg1.Fields[0];
                              return _fableCore.String.fsFormat("string value `%s`")(function (x) {
                                return x;
                              })(_fableCore.String.replace(_s2, "`", "'"));
                            } else {
                              if (_arg1.Case === "Ident") {
                                var i = _arg1.Fields[0];
                                return _fableCore.String.fsFormat("identifer `%s`")(function (x) {
                                  return x;
                                })(i);
                              } else {
                                if (_arg1.Case === "QIdent") {
                                  var q = _arg1.Fields[0];
                                  return _fableCore.String.fsFormat("quoted identifer `'%s'`")(function (x) {
                                    return x;
                                  })(q);
                                } else {
                                  if (_arg1.Case === "White") {
                                    var w = _arg1.Fields[0];
                                    return "whitespace";
                                  } else {
                                    if (_arg1.Case === "Newline") {
                                      return "end of line";
                                    } else {
                                      if (_arg1.Case === "Error") {
                                        if (_arg1.Fields[0] === "`") {
                                          return "back-tick character";
                                        } else {
                                          var c = _arg1.Fields[0];
                                          return _fableCore.String.fsFormat("other character `%s`")(function (x) {
                                            return x;
                                          })(c);
                                        }
                                      } else {
                                        if (_arg1.Case === "EndOfFile") {
                                          return "end of file";
                                        } else {
                                          if (_arg1.Case === "By") {
                                            return $target31();
                                          } else {
                                            if (_arg1.Case === "To") {
                                              return $target31();
                                            } else {
                                              return "left parenthesis `(`";
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
            }
          }
        }
      }
    }
  }

  function formatTokens(tokens) {
    return _fableCore.String.join("", _fableCore.Seq.map(function (t) {
      return formatToken(t.Token);
    }, tokens));
  }

  var FormattingContext = exports.FormattingContext = function () {
    function FormattingContext(strings) {
      _classCallCheck(this, FormattingContext);

      this.Strings = strings;
    }

    FormattingContext.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    FormattingContext.prototype.Add = function Add(tok) {
      this.Strings.push(formatToken(tok));
    };

    return FormattingContext;
  }();

  _fableCore.Util.setInterfaces(FormattingContext.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Ast.FormattingContext");

  function formatNode(ctx, f, node_1) {
    for (var _iterator = node_1.WhiteBefore, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var t = _ref;
      ctx.Add(t.Token);
    }

    f(ctx)(node_1.Node);

    for (var _iterator2 = node_1.WhiteAfter, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _t = _ref2;
      ctx.Add(_t.Token);
    }
  }

  function formatName(ctx, name) {
    if (name.Name === "") {} else {
      if (needsEscaping(name.Name)) {
        ctx.Add(new _ast.TokenKind("QIdent", [name.Name]));
      } else {
        ctx.Add(new _ast.TokenKind("Ident", [name.Name]));
      }
    }
  }

  function formatArgument(ctx, arg) {
    if (arg.Name != null) {
      formatNode(ctx, function (ctx_1) {
        return function (name) {
          formatName(ctx_1, name);
        };
      }, arg.Name);
      ctx.Add(new _ast.TokenKind("Equals", []));
    }

    formatNode(ctx, function (ctx_1) {
      return function (expr) {
        formatExpression(ctx_1, expr);
      };
    }, arg.Value);
  }

  function formatExpression(ctx, expr) {
    if (expr.Case === "Property") {
      formatNode(ctx, function (ctx_1) {
        return function (expr_1) {
          formatExpression(ctx_1, expr_1);
        };
      }, expr.Fields[0]);
      ctx.Add(new _ast.TokenKind("Dot", []));
      formatNode(ctx, function (ctx_1) {
        return function (name) {
          formatName(ctx_1, name);
        };
      }, expr.Fields[1]);
    } else {
      if (expr.Case === "Call") {
        if (expr.Fields[0] != null) {
          formatNode(ctx, function (ctx_1) {
            return function (expr_1) {
              formatExpression(ctx_1, expr_1);
            };
          }, expr.Fields[0]);
        }

        ctx.Add(new _ast.TokenKind("Dot", []));
        formatNode(ctx, function (ctx_1) {
          return function (name) {
            formatName(ctx_1, name);
          };
        }, expr.Fields[1]);
        ctx.Add(new _ast.TokenKind("LParen", []));
        (function () {
          var f = function f(ctx_1) {
            return function (args) {
              _fableCore.Seq.iterateIndexed(function (i, arg) {
                if (i !== 0) {
                  ctx_1.Add(new _ast.TokenKind("Comma", []));
                }

                formatArgument(ctx_1, arg);
              }, args);
            };
          };

          return function (node_1) {
            formatNode(ctx, f, node_1);
          };
        })()(expr.Fields[2]);
        ctx.Add(new _ast.TokenKind("RParen", []));
      } else {
        if (expr.Case === "String") {
          ctx.Add(new _ast.TokenKind("String", [expr.Fields[0]]));
        } else {
          if (expr.Case === "Number") {
            ctx.Add(new _ast.TokenKind("Number", [String(expr.Fields[0]), expr.Fields[0]]));
          } else {
            if (expr.Case === "Boolean") {
              ctx.Add(new _ast.TokenKind("Boolean", [expr.Fields[0]]));
            } else {
              if (expr.Case === "Binary") {
                formatNode(ctx, function (ctx_1) {
                  return function (expr_1) {
                    formatExpression(ctx_1, expr_1);
                  };
                }, expr.Fields[0]);
                (function () {
                  var f = function f(ctx_1) {
                    return function (op) {
                      ctx_1.Add(new _ast.TokenKind("Operator", [op]));
                    };
                  };

                  return function (node_1) {
                    formatNode(ctx, f, node_1);
                  };
                })()(expr.Fields[1]);
                formatNode(ctx, function (ctx_1) {
                  return function (expr_1) {
                    formatExpression(ctx_1, expr_1);
                  };
                }, expr.Fields[2]);
              } else {
                if (expr.Case === "Function") {
                  ctx.Add(new _ast.TokenKind("Fun", []));
                  formatNode(ctx, function (ctx_1) {
                    return function (name) {
                      formatName(ctx_1, name);
                    };
                  }, expr.Fields[0]);
                  ctx.Add(new _ast.TokenKind("Arrow", []));
                  formatNode(ctx, function (ctx_1) {
                    return function (expr_1) {
                      formatExpression(ctx_1, expr_1);
                    };
                  }, expr.Fields[1]);
                } else {
                  if (expr.Case === "List") {
                    ctx.Add(new _ast.TokenKind("LSquare", []));

                    for (var _iterator3 = expr.Fields[0], _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
                      var _ref3;

                      if (_isArray3) {
                        if (_i3 >= _iterator3.length) break;
                        _ref3 = _iterator3[_i3++];
                      } else {
                        _i3 = _iterator3.next();
                        if (_i3.done) break;
                        _ref3 = _i3.value;
                      }

                      var e = _ref3;
                      formatNode(ctx, function (ctx_1) {
                        return function (expr_1) {
                          formatExpression(ctx_1, expr_1);
                        };
                      }, e);
                    }

                    ctx.Add(new _ast.TokenKind("RSquare", []));
                  } else {
                    if (expr.Case === "Empty") {} else {
                      formatNode(ctx, function (ctx_1) {
                        return function (name) {
                          formatName(ctx_1, name);
                        };
                      }, expr.Fields[0]);
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

  function formatCommand(ctx, cmd) {
    if (cmd.Case === "Let") {
      ctx.Add(new _ast.TokenKind("Let", []));
      formatNode(ctx, function (ctx_1) {
        return function (name) {
          formatName(ctx_1, name);
        };
      }, cmd.Fields[0]);
      ctx.Add(new _ast.TokenKind("Equals", []));
      formatNode(ctx, function (ctx_1) {
        return function (expr) {
          formatExpression(ctx_1, expr);
        };
      }, cmd.Fields[1]);
    } else {
      formatNode(ctx, function (ctx_1) {
        return function (expr) {
          formatExpression(ctx_1, expr);
        };
      }, cmd.Fields[0]);
    }
  }

  function formatSingleExpression(expr) {
    var ctx = new FormattingContext([]);
    formatNode(ctx, function (ctx_1) {
      return function (expr_1) {
        formatExpression(ctx_1, expr_1);
      };
    }, expr);
    return _fableCore.String.join("", ctx.Strings);
  }

  function formatProgram(prog) {
    var ctx = new FormattingContext([]);
    (function () {
      var f = function f(ctx_1) {
        return function (cmds) {
          for (var _iterator4 = cmds, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
            var _ref4;

            if (_isArray4) {
              if (_i4 >= _iterator4.length) break;
              _ref4 = _iterator4[_i4++];
            } else {
              _i4 = _iterator4.next();
              if (_i4.done) break;
              _ref4 = _i4.value;
            }

            var cmd = _ref4;
            formatNode(ctx_1, function (ctx_2) {
              return function (cmd_1) {
                formatCommand(ctx_2, cmd_1);
              };
            }, cmd);
          }
        };
      };

      return function (node_1) {
        formatNode(ctx, f, node_1);
      };
    })()(prog.Body);
    return _fableCore.String.join("", ctx.Strings);
  }

  function formatWhiteAfterExpr(nd) {
    var wa = function () {
      var $target0 = function $target0(n) {
        return _fableCore.List.append(n.WhiteAfter, nd.WhiteAfter);
      };

      if (nd.Node.Case === "Variable") {
        return $target0(nd.Node.Fields[0]);
      } else {
        if (nd.Node.Case === "Property") {
          return $target0(nd.Node.Fields[1]);
        } else {
          return nd.WhiteAfter;
        }
      }
    }();

    return _fableCore.String.join("", _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.map(function (t) {
        return formatToken(t.Token);
      }, wa);
    })));
  }

  function formatEntityKind(_arg1) {
    return _arg1.Case === "Variable" ? "variable" : _arg1.Case === "Binding" ? "binding" : _arg1.Case === "Operator" ? function () {
      var op = _arg1.Fields[1];
      return formatToken(new _ast.TokenKind("Operator", [op])) + " operator";
    }() : _arg1.Case === "List" ? "list" : _arg1.Case === "Constant" ? _arg1.Fields[0].Case === "Number" ? function () {
      var n = _arg1.Fields[0].Fields[0];
      return _fableCore.String.fsFormat("number `%f`")(function (x) {
        return x;
      })(n);
    }() : _arg1.Fields[0].Case === "String" ? function () {
      var n = _arg1.Fields[0].Fields[0];
      return _fableCore.String.fsFormat("string `%s`")(function (x) {
        return x;
      })(n);
    }() : _arg1.Fields[0].Case === "Boolean" ? _arg1.Fields[0].Fields[0] ? "`true` value" : "`false` value" : "empty value" : _arg1.Case === "Function" ? "function" : _arg1.Case === "LetCommand" ? "let command" : _arg1.Case === "RunCommand" ? "run command" : _arg1.Case === "Program" ? "program" : _arg1.Case === "Root" ? "root" : _arg1.Case === "CallSite" ? "call site" : _arg1.Case === "NamedParam" ? "named param" : _arg1.Case === "ChainElement" ? "chain element" : _arg1.Case === "ArgumentList" ? "argument list" : _arg1.Case === "NamedMember" ? "property or method" : "global value";
  }

  var anonymous = exports.anonymous = "";

  function entityCodeNameAndAntecedents(_arg1) {
    return _arg1.Case === "Program" ? function () {
      var ans = _arg1.Fields[0];
      return [1, ans, anonymous];
    }() : _arg1.Case === "RunCommand" ? function () {
      var an = _arg1.Fields[0];
      return [2, _fableCore.List.ofArray([an]), anonymous];
    }() : _arg1.Case === "LetCommand" ? function () {
      var an1 = _arg1.Fields[0];
      var an2 = _arg1.Fields[1];
      return [3, _fableCore.List.ofArray([an1, an2]), anonymous];
    }() : _arg1.Case === "Operator" ? function () {
      var an1 = _arg1.Fields[0];
      var an2 = _arg1.Fields[2];
      var op = _arg1.Fields[1];
      return [4, _fableCore.List.ofArray([an1, an2]), formatToken(new _ast.TokenKind("Operator", [op]))];
    }() : _arg1.Case === "List" ? function () {
      var ans = _arg1.Fields[0];
      return [5, ans, anonymous];
    }() : _arg1.Case === "Constant" ? _arg1.Fields[0].Case === "Number" ? function () {
      var n = _arg1.Fields[0].Fields[0];
      return [7, new _fableCore.List(), String(n)];
    }() : _arg1.Fields[0].Case === "Boolean" ? function () {
      var b = _arg1.Fields[0].Fields[0];
      return [8, new _fableCore.List(), String(b)];
    }() : _arg1.Fields[0].Case === "Empty" ? [9, new _fableCore.List(), anonymous] : function () {
      var s = _arg1.Fields[0].Fields[0];
      return [6, new _fableCore.List(), s];
    }() : _arg1.Case === "Function" ? function () {
      var an1 = _arg1.Fields[0];
      var an2 = _arg1.Fields[1];
      return [10, _fableCore.List.ofArray([an1, an2]), anonymous];
    }() : _arg1.Case === "GlobalValue" ? function () {
      var n = _arg1.Fields[0];
      return [11, new _fableCore.List(), n.Name];
    }() : _arg1.Case === "Variable" ? function () {
      var an = _arg1.Fields[1];
      var n = _arg1.Fields[0];
      return [12, _fableCore.List.ofArray([an]), n.Name];
    }() : _arg1.Case === "Binding" ? function () {
      var an = _arg1.Fields[1];
      var n = _arg1.Fields[0];
      return [13, _fableCore.List.ofArray([an]), n.Name];
    }() : _arg1.Case === "ArgumentList" ? function () {
      var ans = _arg1.Fields[0];
      return [14, ans, anonymous];
    }() : _arg1.Case === "CallSite" ? _arg1.Fields[2].Case === "Choice2Of2" ? function () {
      var an1 = _arg1.Fields[0];
      var m = _arg1.Fields[2].Fields[0];
      var n = _arg1.Fields[1];
      return [16, _fableCore.List.ofArray([an1]), n.Name + "." + String(m)];
    }() : function () {
      var an1 = _arg1.Fields[0];
      var n = _arg1.Fields[1];
      var s = _arg1.Fields[2].Fields[0];
      return [15, _fableCore.List.ofArray([an1]), n.Name + "." + s];
    }() : _arg1.Case === "NamedParam" ? function () {
      var an = _arg1.Fields[1];
      var n = _arg1.Fields[0];
      return [17, _fableCore.List.ofArray([an]), n.Name];
    }() : _arg1.Case === "NamedMember" ? function () {
      var an = _arg1.Fields[1];
      var n = _arg1.Fields[0];
      return [18, _fableCore.List.ofArray([an]), n.Name];
    }() : _arg1.Case === "ChainElement" ? function () {
      var an1 = _arg1.Fields[2];
      var an2 = _arg1.Fields[3];
      var an3 = _arg1.Fields[4];
      var b = _arg1.Fields[0];
      var n = _arg1.Fields[1];
      return [19, _fableCore.List.choose(function (x) {
        return x;
      }, _fableCore.List.ofArray([an1, an2, an3])), n.Name + "." + String(b)];
    }() : [0, new _fableCore.List(), anonymous];
  }

  function Entity_get_Antecedents() {
    var patternInput = entityCodeNameAndAntecedents(this.Kind);
    return patternInput[1];
  }

  exports.Entity$2Eget_Antecedents = Entity_get_Antecedents;

  function Entity_get_Name() {
    var patternInput = entityCodeNameAndAntecedents(this.Kind);
    return patternInput[2];
  }

  exports.Entity$2Eget_Name = Entity_get_Name;

  function formatType(_arg1) {
    return _arg1.Case === "Forall" ? function () {
      var t = _arg1.Fields[1];
      return formatType(t);
    }() : _arg1.Case === "Parameter" ? function () {
      var v = _arg1.Fields[0];
      return v;
    }() : _arg1.Case === "Delayed" ? function () {
      var g = _arg1.Fields[0];
      return "@" + g;
    }() : _arg1.Case === "Primitive" ? _arg1.Fields[0].Case === "Number" ? "number" : _arg1.Fields[0].Case === "String" ? "string" : _arg1.Fields[0].Case === "Unit" ? "unit" : "bool" : _arg1.Case === "Object" ? function () {
      var mem = _arg1.Fields[0].Members;

      var mems = _fableCore.String.join(", ", _fableCore.Seq.map(function (m) {
        return m.Name;
      }, _fableCore.Seq.truncate(5, mem)));

      return "{ " + (mem.length > 5 ? mems + ", ..." : mems + " }");
    }() : _arg1.Case === "Function" ? function () {
      var tin = _arg1.Fields[0];
      var tout = _arg1.Fields[1];
      return "(" + _fableCore.String.join(", ", _fableCore.List.map(function (_arg1_1) {
        return formatType(_arg1_1);
      }, tin)) + ") -> " + formatType(tout);
    }() : _arg1.Case === "List" ? function () {
      var t = _arg1.Fields[0];
      return "list<" + formatType(t) + ">";
    }() : _arg1.Case === "Any" ? "any" : function () {
      var t = _arg1.Fields[0];
      var tya = _arg1.Fields[1];
      return formatType(t) + "<" + _fableCore.String.join(", ", _fableCore.List.map(function (_arg1_1) {
        return formatType(_arg1_1);
      }, tya)) + ">";
    }();
  }

  function formatTypeInfo(_arg1) {
    return _arg1.Case === "Parameter" ? "unresolved type parameter" : _arg1.Case === "App" ? "unresolved type application" : _arg1.Case === "Delayed" ? "delayed type" : _arg1.Case === "Primitive" ? _arg1.Fields[0].Case === "Number" ? "number" : _arg1.Fields[0].Case === "String" ? "string" : _arg1.Fields[0].Case === "Unit" ? "unit" : "boolean" : _arg1.Case === "Object" ? "object type" : _arg1.Case === "Function" ? "function type" : _arg1.Case === "List" ? "list type" : _arg1.Case === "Any" ? "unknown" : "generic type";
  }

  function rebuildExprNode(e, es, ns) {
    var matchValue = [e, es, ns];

    var $target6 = function $target6() {
      throw "rebuildExprNode: Wrong variable length";
    };

    var $target7 = function $target7() {
      throw "rebuildExprNode: Wrong property length";
    };

    var $target8 = function $target8() {
      throw "rebuildExprNode: Wrong call length";
    };

    var $target10 = function $target10() {
      throw "rebuildExprNode: Wrong function length";
    };

    var $target11 = function $target11() {
      throw "rebuildExprNode: Wrong binary operator argument length";
    };

    var $target12 = function $target12() {
      throw "rebuildExprNode: Not a node";
    };

    if (matchValue[0].Case === "Function") {
      if (matchValue[1].tail != null) {
        if (matchValue[1].tail.tail == null) {
          if (matchValue[2].tail != null) {
            if (matchValue[2].tail.tail == null) {
              var e_1 = matchValue[1].head;
              var n = matchValue[2].head;
              return new _ast.Expr("Function", [n, e_1]);
            } else {
              return $target10();
            }
          } else {
            return $target10();
          }
        } else {
          return $target10();
        }
      } else {
        return $target10();
      }
    } else {
      if (matchValue[0].Case === "Property") {
        if (matchValue[1].tail != null) {
          if (matchValue[1].tail.tail == null) {
            if (matchValue[2].tail != null) {
              if (matchValue[2].tail.tail == null) {
                var _e_ = matchValue[1].head;
                var _n = matchValue[2].head;
                return new _ast.Expr("Property", [_e_, _n]);
              } else {
                return $target7();
              }
            } else {
              return $target7();
            }
          } else {
            return $target7();
          }
        } else {
          return $target7();
        }
      } else {
        if (matchValue[0].Case === "Binary") {
          if (matchValue[1].tail != null) {
            if (matchValue[1].tail.tail != null) {
              if (matchValue[1].tail.tail.tail == null) {
                if (matchValue[2].tail == null) {
                  var e1 = matchValue[1].head;
                  var e2 = matchValue[1].tail.head;
                  var op = matchValue[0].Fields[1];
                  return new _ast.Expr("Binary", [e1, op, e2]);
                } else {
                  return $target11();
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
        } else {
          if (matchValue[0].Case === "Call") {
            if (matchValue[1].tail != null) {
              if (matchValue[2].tail != null) {
                var _ret = function () {
                  var args = matchValue[0].Fields[2];
                  var e_1 = matchValue[1].head;
                  var es_1 = matchValue[1].tail;
                  var inst = matchValue[0].Fields[0];
                  var n = matchValue[2].head;
                  var ns_1 = matchValue[2].tail;
                  {
                    var _ret2 = function () {
                      var patternInput = function () {
                        return inst != null;
                      }() ? [e_1, es_1] : [null, new _fableCore.List(e_1, es_1)];

                      var rebuildArgs = function rebuildArgs(args_1) {
                        return function (es_2) {
                          return function (ns_2) {
                            var matchValue_1 = [args_1, es_2, ns_2];

                            var $target3 = function $target3() {
                              throw "rebuildExprNode: Wrong call length";
                            };

                            if (matchValue_1[0].tail == null) {
                              if (matchValue_1[1].tail == null) {
                                if (matchValue_1[2].tail == null) {
                                  return new _fableCore.List();
                                } else {
                                  return $target3();
                                }
                              } else {
                                return $target3();
                              }
                            } else {
                              if (matchValue_1[0].head.Name != null) {
                                if (matchValue_1[1].tail != null) {
                                  if (matchValue_1[2].tail != null) {
                                    var args_2 = matchValue_1[0].tail;
                                    var e_2 = matchValue_1[1].head;
                                    var es_3 = matchValue_1[1].tail;
                                    var n_1 = matchValue_1[2].head;
                                    var ns_3 = matchValue_1[2].tail;
                                    return new _fableCore.List(new _ast.Argument(n_1, e_2), rebuildArgs(args_2)(es_3)(ns_3));
                                  } else {
                                    return $target3();
                                  }
                                } else {
                                  return $target3();
                                }
                              } else {
                                if (matchValue_1[1].tail != null) {
                                  var _args_ = matchValue_1[0].tail;
                                  var _e_2 = matchValue_1[1].head;
                                  var _es_ = matchValue_1[1].tail;
                                  var _ns_ = matchValue_1[2];
                                  return new _fableCore.List(new _ast.Argument(null, _e_2), rebuildArgs(_args_)(_es_)(_ns_));
                                } else {
                                  return $target3();
                                }
                              }
                            }
                          };
                        };
                      };

                      return {
                        v: {
                          v: new _ast.Expr("Call", [patternInput[0], n, function () {
                            var _Node = rebuildArgs(args.Node)(patternInput[1])(ns_1);

                            return new _ast.Node(args.WhiteBefore, args.WhiteAfter, args.Range, _Node, args.Entity);
                          }()])
                        }
                      };
                    }();

                    if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
                  }
                }();

                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
              } else {
                return $target8();
              }
            } else {
              return $target8();
            }
          } else {
            if (matchValue[0].Case === "Variable") {
              if (matchValue[1].tail == null) {
                if (matchValue[2].tail != null) {
                  if (matchValue[2].tail.tail == null) {
                    var _n2 = matchValue[2].head;
                    return new _ast.Expr("Variable", [_n2]);
                  } else {
                    return $target6();
                  }
                } else {
                  return $target6();
                }
              } else {
                return $target6();
              }
            } else {
              if (matchValue[0].Case === "Number") {
                return $target12();
              } else {
                if (matchValue[0].Case === "Boolean") {
                  return $target12();
                } else {
                  if (matchValue[0].Case === "String") {
                    return $target12();
                  } else {
                    if (matchValue[0].Case === "Empty") {
                      return $target12();
                    } else {
                      if (matchValue[2].tail == null) {
                        var els = matchValue[1];
                        return new _ast.Expr("List", [els]);
                      } else {
                        throw "rebuildExprNode: Wrong list length";
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

  function $ExprLeaf$ExprNode$(e) {
    var $target7 = function $target7() {
      return new _fableCore.Choice("Choice1Of2", [null]);
    };

    if (e.Case === "Call") {
      if (e.Fields[0] == null) {
        var _ret3 = function () {
          var args = e.Fields[2];
          var n = e.Fields[1];
          return {
            v: new _fableCore.Choice("Choice2Of2", [[_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
              return _fableCore.Seq.map(function (a) {
                return a.Value;
              }, args.Node);
            })), new _fableCore.List(n, _fableCore.List.choose(function (a) {
              return a.Name;
            }, args.Node))]])
          };
        }();

        if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
      } else {
        var _ret4 = function () {
          var args = e.Fields[2];
          var e_1 = e.Fields[0];
          var n = e.Fields[1];
          return {
            v: new _fableCore.Choice("Choice2Of2", [[new _fableCore.List(e_1, _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
              return _fableCore.Seq.map(function (a) {
                return a.Value;
              }, args.Node);
            }))), new _fableCore.List(n, _fableCore.List.choose(function (a) {
              return a.Name;
            }, args.Node))]])
          };
        }();

        if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
      }
    } else {
      if (e.Case === "Variable") {
        var _n3 = e.Fields[0];
        return new _fableCore.Choice("Choice2Of2", [[new _fableCore.List(), _fableCore.List.ofArray([_n3])]]);
      } else {
        if (e.Case === "List") {
          var els = e.Fields[0];
          return new _fableCore.Choice("Choice2Of2", [[els, new _fableCore.List()]]);
        } else {
          if (e.Case === "Function") {
            var b = e.Fields[1];
            var _n4 = e.Fields[0];
            return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([b]), _fableCore.List.ofArray([_n4])]]);
          } else {
            if (e.Case === "Binary") {
              var l = e.Fields[0];
              var op = e.Fields[1];
              var r = e.Fields[2];
              return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([l, r]), new _fableCore.List()]]);
            } else {
              if (e.Case === "Number") {
                return $target7();
              } else {
                if (e.Case === "Boolean") {
                  return $target7();
                } else {
                  if (e.Case === "String") {
                    return $target7();
                  } else {
                    if (e.Case === "Empty") {
                      return $target7();
                    } else {
                      var _e_3 = e.Fields[0];
                      var _n5 = e.Fields[1];
                      return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([_e_3]), _fableCore.List.ofArray([_n5])]]);
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
//# sourceMappingURL=astops.js.map