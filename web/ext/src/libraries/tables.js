(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../gui/html", "fable-core", "./common"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../gui/html"), require("fable-core"), require("./common"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.html, global.fableCore, global.common);
    global.tables = mod.exports;
  }
})(this, function (exports, _html, _fableCore, _common) {
  "use strict";

  exports.__esModule = true;
  exports.empty = exports.table = exports.html = exports.TableHelpers = undefined;

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

  var TableHelpers = exports.TableHelpers = function ($exports) {
    return $exports;
  }({});

  var html = exports.html = function () {
    function html() {
      _classCallCheck(this, html);
    }

    html.img = function img(url) {
      return function (arg0) {
        return function (arg1) {
          return _html.El.op_Dynamic(arg0, arg1);
        };
      }(_html.h)("img")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("src", url)]))(new _fableCore.List());
    };

    return html;
  }();

  _fableCore.Util.setInterfaces(html.prototype, [], "TheGamma.html");

  var table = exports.table = function () {
    function table(data, showKey, hiddenColumns, addedColumns) {
      _classCallCheck(this, table);

      this.data = data;
      this.showKey = showKey;
      this.hiddenColumns = hiddenColumns;
      this.addedColumns = addedColumns;
    }

    table.create = function create(data) {
      var hiddenColumns = _fableCore.Set.create(null, new _fableCore.GenericComparer(function (x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      }));

      var addedColumns = new _fableCore.List();
      return new table(data, true, hiddenColumns, addedColumns);
    };

    table.prototype.set = function set(title, showKey) {
      var data = this.data.set(this.data.data, null, null, title != null ? title : this.data.seriesName);
      return new table(data, showKey != null ? showKey : this.showKey, this.hiddenColumns, this.addedColumns);
    };

    table.prototype.hideColumns = function hideColumns(names) {
      var hiddenColumns = _fableCore.Set.create(names, new _fableCore.GenericComparer(function (x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      }));

      return new table(this.data, this.showKey, hiddenColumns, this.addedColumns);
    };

    table.prototype.addColumn = function addColumn(name, f) {
      var addedColumns = new _fableCore.List([name, f], this.addedColumns);
      return new table(this.data, this.showKey, this.hiddenColumns, addedColumns);
    };

    table.prototype.show = function show(outputId) {
      var _this = this;

      var row = function row(el) {
        return function (k) {
          return function (things) {
            return function (arg0) {
              return function (arg1) {
                return _html.El.op_Dynamic(arg0, arg1);
              };
            }(_html.h)("tr")(new _fableCore.List())(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
              return _fableCore.Seq.append(_this.showKey ? _fableCore.Seq.singleton(function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)(el)(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(k)]))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_1) {
                return _fableCore.Seq.map(function (t) {
                  return function (arg0) {
                    return function (arg1) {
                      return _html.El.op_Dynamic(arg0, arg1);
                    };
                  }(_html.h)(el)(new _fableCore.List())(_fableCore.List.ofArray([t]));
                }, things);
              }));
            })));
          };
        };
      };

      var render = function render(nd) {
        (0, _html.renderTo)(document.getElementById(outputId), nd);
      };

      var makeTable = function makeTable(k) {
        return function (header) {
          return function (body) {
            return function (arg0) {
              return function (arg1) {
                return _html.El.op_Dynamic(arg0, arg1);
              };
            }(_html.h)("table")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "table table-striped")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
              return _fableCore.Seq.append(!_fableCore.String.isNullOrWhiteSpace(_this.data.seriesName) ? _fableCore.Seq.singleton(function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("caption")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(_this.data.seriesName)]))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_1) {
                return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("thead")(new _fableCore.List())(_fableCore.List.ofArray([row("th")(k)(header)]))), _fableCore.Seq.delay(function (unitVar_2) {
                  return _fableCore.Seq.singleton(function (arg0) {
                    return function (arg1) {
                      return _html.El.op_Dynamic(arg0, arg1);
                    };
                  }(_html.h)("tbody")(new _fableCore.List())(body));
                }));
              }));
            })));
          };
        };
      };

      var formatAdded = function formatAdded(o) {
        var isSeries = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.map(function (kv) {
            return kv.key;
          }, function (o) {
            return Object.keys(o).map(function (k) {
              return {
                "key": k,
                "value": o[k]
              };
            });
          }(o));
        })).Equals(_fableCore.List.ofArray(["data", "keyName", "valueName", "seriesName"]));

        if (isSeries) {
          var result = null;
          o.data.Then(function (r) {
            result = r;
          });
          return function (arg0) {
            return function (arg1) {
              return _html.El.op_Dynamic(arg0, arg1);
            };
          }(_html.h)("span")(new _fableCore.List())(_fableCore.List.ofArray(result.map(function (tuple) {
            return tuple[1];
          })));
        } else {
          return (0, _html.text)(_fableCore.Util.toString(o));
        }
      };

      (function (arg00) {
        _fableCore.Async.startImmediate(arg00);
      })(function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.TryWith(builder_.Delay(function (unitVar_1) {
            return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(_this.data.data), function (_arg25) {
              var filteredProperties = function filteredProperties(o) {
                return function (o) {
                  return Object.keys(o).map(function (k) {
                    return {
                      "key": k,
                      "value": o[k]
                    };
                  });
                }(o).filter(function (kv) {
                  return !_this.hiddenColumns.has(kv.key);
                });
              };

              var patternInput = _fableCore.Seq.head(_arg25);

              var headers = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
                return _fableCore.Seq.append(_typeof(patternInput[1]) == 'object' ? _fableCore.Seq.map(function (kv) {
                  return (0, _html.text)(kv.key);
                }, filteredProperties(patternInput[1])) : _fableCore.Seq.singleton((0, _html.text)(_this.data.valueName)), _fableCore.Seq.delay(function (unitVar_3) {
                  return _fableCore.Seq.collect(function (matchValue) {
                    return _fableCore.Seq.singleton((0, _html.text)(matchValue[0]));
                  }, _this.addedColumns);
                }));
              }));

              render(function (arg00) {
                var clo1 = makeTable(arg00);
                return function (arg10) {
                  var clo2 = clo1(arg10);
                  return function (arg20) {
                    return clo2(arg20);
                  };
                };
              }(_this.data.keyName)(headers)(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
                return _fableCore.Seq.collect(function (matchValue) {
                  return _fableCore.Seq.singleton(function () {
                    var formattedVals = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_3) {
                      return _fableCore.Seq.append(_typeof(matchValue[1]) == 'object' ? _fableCore.Seq.map(function (kv) {
                        return (0, _html.text)(kv.value);
                      }, filteredProperties(matchValue[1])) : !(typeof matchValue[1] == 'number') ? _fableCore.Seq.singleton((0, _html.text)(_fableCore.Util.toString(matchValue[1]))) : isNaN(matchValue[1]) ? _fableCore.Seq.singleton((0, _html.text)("")) : _fableCore.Seq.singleton(matchValue[1]), _fableCore.Seq.delay(function (unitVar_4) {
                        return _fableCore.Seq.collect(function (matchValue_1) {
                          return _fableCore.Seq.singleton(formatAdded(matchValue_1[1](matchValue[1])));
                        }, _this.addedColumns);
                      }));
                    }));

                    return function (arg00) {
                      var clo1 = row(arg00);
                      return function (arg10) {
                        var clo2 = clo1(arg10);
                        return function (arg20) {
                          return clo2(arg20);
                        };
                      };
                    }("td")(matchValue[0])(formattedVals);
                  }());
                }, _arg25);
              }))));
              return builder_.Zero();
            });
          }), function (_arg26) {
            console.log("Getting data for table failed: %O", _arg26);
            return builder_.Zero();
          });
        });
      }(_fableCore.AsyncBuilder.singleton));
    };

    return table;
  }();

  _fableCore.Util.setInterfaces(table.prototype, ["FSharpRecord"], "TheGamma.table");

  var empty = exports.empty = function () {
    function empty() {
      _classCallCheck(this, empty);
    }

    empty.create = function create() {
      return new empty();
    };

    empty.prototype.show = function show(outputId) {
      (0, _html.renderTo)(document.getElementById(outputId), function (arg0) {
        return function (arg1) {
          return _html.El.op_Dynamic(arg0, arg1);
        };
      }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "loading")]))(_fableCore.List.ofArray([function (arg0) {
        return function (arg1) {
          return _html.El.op_Dynamic(arg0, arg1);
        };
      }(_html.h)("p")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)("No output produced.")]))])));
    };

    return empty;
  }();

  _fableCore.Util.setInterfaces(empty.prototype, [], "TheGamma.empty");
});
//# sourceMappingURL=tables.js.map