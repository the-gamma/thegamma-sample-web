(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./../series"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./../series"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.series);
    global.core = mod.exports;
  }
})(this, function (exports, _fableCore, _series) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartDataOperations = exports.Helpers = exports.ChartData = exports.GoogleCharts = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var GoogleCharts = exports.GoogleCharts = function ($exports) {
    return $exports;
  }({});

  var ChartData = exports.ChartData = function ChartData(data) {
    _classCallCheck(this, ChartData);

    this.data = data;
  };

  _fableCore.Util.setInterfaces(ChartData.prototype, ["FSharpRecord"], "TheGamma.GoogleCharts.ChartData");

  var Helpers = exports.Helpers = function ($exports) {
    var copy = $exports.copy = function copy(o, prop) {
      return o == null ? undefined : o[prop];
    };

    var orDefault = $exports.orDefault = function orDefault(newValue) {
      return newValue != null ? newValue : undefined;
    };

    var right = $exports.right = function right(o, prop, newValue) {
      return newValue != null ? newValue : o == null ? undefined : o[prop];
    };

    var showChart = $exports.showChart = function showChart(chart, outputId) {
      drawChart(function (cont) {
        (function (arg00) {
          _fableCore.Async.startImmediate(arg00);
        })(function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.TryWith(builder_.Delay(function (unitVar_1) {
              return builder_.Bind(chart["data"].data, function (_arg1) {
                cont([chart, _arg1, outputId]);
                return builder_.Zero();
              });
            }), function (_arg2) {
              window.alert("SOmething went wrong: " + _arg2);
              return builder_.Zero();
            });
          });
        }(_fableCore.defaultAsyncBuilder));
      });
    };

    return $exports;
  }({});

  var ChartDataOperations = exports.ChartDataOperations = function ($exports) {
    var collect = $exports.collect = function collect(f, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
            return builder_.Bind(collect(f, l.tail), function (_arg2) {
              return builder_.Return(_fableCore.List.append(_arg1, _arg2));
            });
          });
        });
      }(_fableCore.defaultAsyncBuilder);
    };

    var oneKeyValue = $exports.oneKeyValue = function oneKeyValue(keyType, v) {
      return new ChartData(function (builder_) {
        return builder_.Delay(function (unitVar) {
          var data = new google.visualization.DataTable();
          data.addColumn(keyType, v.keyName);
          data.addColumn("number", v.seriesName);
          return builder_.Bind(v.mapPairs(function (k) {
            return function (v_1) {
              return [k, v_1];
            };
          }).data, function (_arg1) {
            (function (arg00) {
              data.addRows(arg00);
            })(_arg1.map(function (tuple) {
              return tuple[1];
            }));

            return builder_.Return(data);
          });
        });
      }(_fableCore.defaultAsyncBuilder));
    };

    var oneKeyTwoValues = $exports.oneKeyTwoValues = function oneKeyTwoValues(keyType, v) {
      return new ChartData(function (builder_) {
        return builder_.Delay(function (unitVar) {
          var data = new google.visualization.DataTable();
          data.addColumn(keyType, v.keyName);
          data.addColumn("number", v.seriesName);
          data.addColumn("number", v.seriesName);
          return builder_.Bind(v.mapPairs(function (k) {
            return function (tupledArg) {
              return [k, tupledArg[0], tupledArg[1]];
            };
          }).data, function (_arg1) {
            (function (arg00) {
              data.addRows(arg00);
            })(_arg1.map(function (tuple) {
              return tuple[1];
            }));

            return builder_.Return(data);
          });
        });
      }(_fableCore.defaultAsyncBuilder));
    };

    var oneKeyAppendValues = $exports.oneKeyAppendValues = function oneKeyAppendValues(keyType, vs, colors) {
      return new ChartData(function (builder_) {
        return builder_.Delay(function (unitVar) {
          var data = new google.visualization.DataTable();
          data.addColumn(keyType, vs[0].keyName);
          data.addColumn("number", vs[0].valueName);
          data.addColumn({
            type: "string",
            role: "style"
          });
          return builder_.Bind(collect(function (tupledArg) {
            return function (builder__1) {
              return builder__1.Delay(function (unitVar_1) {
                return builder__1.Bind(tupledArg[0].mapPairs(function (k) {
                  return function (v) {
                    return [k, v, tupledArg[1]];
                  };
                }).data, function (_arg1) {
                  return builder__1.Return(_fableCore.List.ofArray(_arg1.map(function (tuple) {
                    return tuple[1];
                  })));
                });
              });
            }(_fableCore.defaultAsyncBuilder);
          }, _fableCore.List.ofArray(Array.from(_fableCore.Seq.zip(vs, colors)))), function (_arg2) {
            (function (arg00) {
              data.addRows(arg00);
            })(Array.from(_fableCore.Seq.toList(_fableCore.Seq.sortWith(function (x, y) {
              return -_fableCore.Util.compare(function (tupledArg) {
                return tupledArg[1];
              }(x), function (tupledArg) {
                return tupledArg[1];
              }(y));
            }, _arg2))).map(function (tupledArg) {
              return [tupledArg[0], tupledArg[1], tupledArg[2]];
            }));

            return builder_.Return(data);
          });
        });
      }(_fableCore.defaultAsyncBuilder));
    };

    var oneKeyNValues = $exports.oneKeyNValues = function oneKeyNValues(keyType, v) {
      return new ChartData(function (builder_) {
        return builder_.Delay(function (unitVar) {
          var data = new google.visualization.DataTable();
          return builder_.Bind(v.data, function (_arg1) {
            var v_1 = _arg1.map(function (tuple) {
              return tuple[1];
            });

            data.addColumn(keyType, v_1[0].keyName);
            return builder_.Combine(builder_.For(_fableCore.Seq.range(0, v_1.length - 1), function (_arg2) {
              data.addColumn("number", v_1[_arg2].seriesName);
              return builder_.Zero();
            }), builder_.Delay(function (unitVar_1) {
              var head = v_1[0].map(function (v_2) {
                return _fableCore.Map.create(_fableCore.List.ofArray([[0, v_2]]), new _fableCore.GenericComparer(function (x, y) {
                  return x < y ? -1 : x > y ? 1 : 0;
                }));
              });
              var tail = Array.from(_fableCore.Seq.mapIndexed(function (i, v_2) {
                return [i + 1, v_2];
              }, _series.SeriesInternals.slice(1, v_1.length - 1, v_1)));

              var all = _fableCore.Seq.fold(function (s1, tupledArg) {
                return s1.joinOuter(tupledArg[1]).map(function (tupledArg_1) {
                  var matchValue = [tupledArg_1[0] != null ? tupledArg_1[0] : _fableCore.Map.create(null, new _fableCore.GenericComparer(function (x, y) {
                    return x < y ? -1 : x > y ? 1 : 0;
                  })), tupledArg_1[1]];

                  if (matchValue[1] == null) {
                    return matchValue[0];
                  } else {
                    var r = matchValue[1];
                    return _fableCore.Map.add(tupledArg[0], r, matchValue[0]);
                  }
                });
              }, head, tail);

              return builder_.Bind(all.mapPairs(function (k) {
                return function (vals) {
                  var data_1 = Array.from(_fableCore.Seq.initialize(v_1.length, function (i) {
                    return _fableCore.Map.tryFind(i, vals) != null ? _fableCore.Map.tryFind(i, vals) : undefined;
                  }));
                  return Array.from(_fableCore.Seq.append([k], data_1));
                };
              }).data, function (_arg3) {
                (function (arg00) {
                  data.addRows(arg00);
                })(_arg3.map(function (tuple) {
                  return tuple[1];
                }));

                return builder_.Return(data);
              });
            }));
          });
        });
      }(_fableCore.defaultAsyncBuilder));
    };

    var twoValues = $exports.twoValues = function twoValues(v1, v2) {
      return new ChartData(function (builder_) {
        return builder_.Delay(function (unitVar) {
          var data = new google.visualization.DataTable();
          data.addColumn("number", v1.seriesName);
          data.addColumn("number", v2.seriesName);
          return builder_.Bind(v1.joinInner(v2).map(function (tupledArg) {
            return [tupledArg[0], tupledArg[1]];
          }).data, function (_arg1) {
            (function (arg00) {
              data.addRows(arg00);
            })(_arg1.map(function (tuple) {
              return tuple[1];
            }));

            return builder_.Return(data);
          });
        });
      }(_fableCore.defaultAsyncBuilder));
    };

    return $exports;
  }({});
});
//# sourceMappingURL=core.js.map