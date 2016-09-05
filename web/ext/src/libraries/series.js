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
    global.series = mod.exports;
  }
})(this, function (exports, _fableCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.series = exports.helpers = exports.SeriesInternals = undefined;

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SeriesInternals = exports.SeriesInternals = function ($exports) {
    var slice = $exports.slice = function slice(lo, hi, arr) {
      return Array.from(_fableCore.Seq.initialize(hi - lo + 1, function (i) {
        return arr[lo + i];
      }));
    };

    var dictAny = $exports.dictAny = function dictAny(v) {
      return new Map(v);
    };

    var zipUnsorted = $exports.zipUnsorted = function zipUnsorted(arr1, arr2) {
      var d1 = dictAny(arr1);
      var d2 = dictAny(arr2);
      var res = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = d1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var kv1 = _step.value;
          var v2 = d2.has(kv1[0]) ? d2.get(kv1[0]) : null;
          res.push([kv1[0], [kv1[1], v2]]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = d2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var kv2 = _step2.value;

          if (!d1.has(kv2[0])) {
            res.push([kv2[0], [null, kv2[1]]]);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return Array.from(res);
    };

    var isSortedUsing = $exports.isSortedUsing = function isSortedUsing(test, proj, arr) {
      var loop = function loop(i) {
        return i === arr.length ? true : test(proj(arr[i - 1]))(proj(arr[i])) ? loop(i + 1) : false;
      };

      if (arr.length === 0) {
        return true;
      } else {
        return loop(1);
      }
    };

    var zipSorted = $exports.zipSorted = function zipSorted(arr1, arr2) {
      var i1 = 0;
      var i2 = 0;

      var op_LessDot = function op_LessDot(a) {
        return function (b) {
          return (a < b ? -1 : a == b ? 0 : 1) < 0;
        };
      };

      var eq = function eq(a) {
        return function (b) {
          return (a < b ? -1 : a == b ? 0 : 1) === 0;
        };
      };

      var res = [];

      while (i1 < arr1.length ? i2 < arr2.length : false) {
        var patternInput = [arr1[i1], arr2[i2]];
        var v2 = patternInput[1][1];
        var v1 = patternInput[0][1];
        var k2 = patternInput[1][0];
        var k1 = patternInput[0][0];

        if (eq(k1)(k2)) {
          res.push([k1, [v1, v2]]);
          i1 = i1 + 1;
          i2 = i2 + 1;
        } else {
          if (op_LessDot(k1)(k2)) {
            res.push([k1, [v1, null]]);
            i1 = i1 + 1;
          } else {
            if (op_LessDot(k2)(k1)) {
              res.push([k2, [null, v2]]);
              i2 = i2 + 1;
            }
          }
        }
      }

      while (i1 < arr1.length) {
        var patternInput = arr1[i1];
        res.push([patternInput[0], [patternInput[1], null]]);
        i1 = i1 + 1;
      }

      while (i2 < arr2.length) {
        var patternInput = arr2[i2];
        res.push([patternInput[0], [null, patternInput[1]]]);
        i2 = i2 + 2;
      }

      return Array.from(res);
    };

    var zipAny = $exports.zipAny = function zipAny(arr1, arr2) {
      var op_LessEqualsDot = function op_LessEqualsDot(a) {
        return function (b) {
          return (a < b ? -1 : a == b ? 0 : 1) <= 0;
        };
      };

      var op_GreaterEqualsDot = function op_GreaterEqualsDot(a) {
        return function (b) {
          return (a < b ? -1 : a == b ? 0 : 1) >= 0;
        };
      };

      if (isSortedUsing(op_LessEqualsDot, function (tuple) {
        return tuple[0];
      }, arr1) ? isSortedUsing(op_LessEqualsDot, function (tuple) {
        return tuple[0];
      }, arr2) : false) {
        return zipSorted(arr1, arr2);
      } else {
        if (isSortedUsing(op_GreaterEqualsDot, function (tuple) {
          return tuple[0];
        }, arr1) ? isSortedUsing(op_GreaterEqualsDot, function (tuple) {
          return tuple[0];
        }, arr2) : false) {
          return zipSorted(arr1.reverse(), arr2.reverse()).reverse();
        } else {
          return zipUnsorted(arr1, arr2);
        }
      }
    };

    return $exports;
  }({});

  var helpers = exports.helpers = function helpers() {
    _classCallCheck(this, helpers);
  };

  _fableCore.Util.setInterfaces(helpers.prototype, [], "TheGamma.Series.helpers");

  var series = function () {
    function series(data, keyName, valueName, seriesName) {
      _classCallCheck(this, series);

      this.data = data;
      this.keyName = keyName;
      this.valueName = valueName;
      this.seriesName = seriesName;
    }

    _createClass(series, [{
      key: "set",
      value: function set(data, keyName, valueName, seriesName) {
        return new series(data, keyName != null ? keyName : this.keyName, valueName != null ? valueName : this.valueName, seriesName != null ? seriesName : this.seriesName);
      }
    }, {
      key: "setProperties",
      value: function setProperties(keyName, valueName, seriesName) {
        var keyName_1 = keyName != null ? keyName : this.keyName;
        var valueName_1 = valueName != null ? valueName : this.valueName;
        var seriesName_1 = seriesName != null ? seriesName : this.seriesName;
        return new series(this.data, keyName_1, valueName_1, seriesName_1);
      }
    }, {
      key: "sortKeys",
      value: function sortKeys(reverse) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function (arr) {
          return (_fableCore.Util.equals(reverse, true) ? function (array) {
            return array.reverse();
          } : function (x) {
            return x;
          })(Array.from(_fableCore.Seq.sortWith(function (tupledArg, tupledArg_1) {
            return tupledArg[0] < tupledArg_1[0] ? -1 : tupledArg[0] == tupledArg_1[0] ? 0 : 1;
          }, arr)));
        })(this);
      }
    }, {
      key: "sortValues",
      value: function sortValues(reverse) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function (arr) {
          return (_fableCore.Util.equals(reverse, true) ? function (array) {
            return array.reverse();
          } : function (x) {
            return x;
          })(Array.from(_fableCore.Seq.sortWith(function (tupledArg, tupledArg_1) {
            return tupledArg[1] < tupledArg_1[1] ? -1 : tupledArg[1] == tupledArg_1[1] ? 0 : 1;
          }, arr)));
        })(this);
      }
    }, {
      key: "sortBy",
      value: function sortBy(f, reverse) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function (arr) {
          return (_fableCore.Util.equals(reverse, true) ? function (array) {
            return array.reverse();
          } : function (x) {
            return x;
          })(Array.from(_fableCore.Seq.sortWith(function (tupledArg, tupledArg_1) {
            return f(tupledArg[1]) < f(tupledArg_1[1]) ? -1 : f(tupledArg[1]) == f(tupledArg_1[1]) ? 0 : 1;
          }, arr)));
        })(this);
      }
    }, {
      key: "reverse",
      value: function reverse() {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function (array) {
          return array.reverse();
        })(this);
      }
    }, {
      key: "take",
      value: function take(count) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function (arr) {
          return SeriesInternals.slice(0, (arr.length < count ? arr.length : count) - 1, arr);
        })(this);
      }
    }, {
      key: "skip",
      value: function skip(count) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function (arr) {
          return SeriesInternals.slice(arr.length < count ? arr.length : count, arr.length - 1, arr);
        })(this);
      }
    }, {
      key: "map",
      value: function map(f) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function () {
          var mapping = function mapping(tupledArg) {
            return [tupledArg[0], f(tupledArg[1])];
          };

          return function (array) {
            return array.map(mapping);
          };
        }())(this);
      }
    }, {
      key: "mapKeys",
      value: function mapKeys(f) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function () {
          var mapping = function mapping(tupledArg) {
            return [f(tupledArg[0]), tupledArg[1]];
          };

          return function (array) {
            return array.map(mapping);
          };
        }())(this);
      }
    }, {
      key: "mapPairs",
      value: function mapPairs(f) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function () {
          var mapping = function mapping(tupledArg) {
            return [tupledArg[0], f(tupledArg[0])(tupledArg[1])];
          };

          return function (array) {
            return array.map(mapping);
          };
        }())(this);
      }
    }, {
      key: "filter",
      value: function filter(f) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function () {
          var predicate = function predicate($var1) {
            return f(function (tuple) {
              return tuple[1];
            }($var1));
          };

          return function (array) {
            return array.filter(predicate);
          };
        }())(this);
      }
    }, {
      key: "choose",
      value: function choose(f) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function () {
          var chooser = function chooser(tupledArg) {
            var matchValue = f(tupledArg[1]);

            if (matchValue != null) {
              return [tupledArg[0], matchValue];
            }
          };

          return function (array) {
            return Array.from(_fableCore.Seq.choose(chooser, array));
          };
        }())(this);
      }
    }, {
      key: "joinOuter",
      value: function joinOuter(s2) {
        var _this = this;

        var data = function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Bind(_this.data, function (_arg4) {
              return builder_.Bind(s2.data, function (_arg5) {
                return builder_.Return(SeriesInternals.zipAny(_arg4, _arg5));
              });
            });
          });
        }(_fableCore.defaultAsyncBuilder);

        return series.create(data, this.keyName, "Values", this.seriesName + " and " + s2.seriesName);
      }
    }, {
      key: "joinInner",
      value: function joinInner(s2) {
        return this.joinOuter(s2).choose(function (_arg6) {
          var $target1 = function $target1() {
            return null;
          };

          if (_arg6[0] != null) {
            if (_arg6[1] != null) {
              var v1 = _arg6[0];
              var v2 = _arg6[1];
              return [v1, v2];
            } else {
              return $target1();
            }
          } else {
            return $target1();
          }
        });
      }
    }, {
      key: "appendScalar",
      value: function appendScalar(key, value) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg1) {
                  return builder_.Return(arg00(_arg1));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function (arr) {
          return arr.concat([[key, value]]);
        })(this);
      }
    }, {
      key: "append",
      value: function append(s2) {
        var _this2 = this;

        return this.set(function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Bind(_this2.data, function (_arg7) {
              return builder_.Bind(s2.data, function (_arg8) {
                return builder_.Return(_arg7.concat(_arg8));
              });
            });
          });
        }(_fableCore.defaultAsyncBuilder));
      }
    }, {
      key: "realign",
      value: function realign(newKeys, defaultValue) {
        return function (arg00) {
          return function (arg10) {
            var nd = function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(arg10.data, function (_arg2) {
                  return builder_.ReturnFrom(arg00(_arg2));
                });
              });
            }(_fableCore.defaultAsyncBuilder);

            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
          };
        }(function (arr) {
          return function (builder_) {
            return builder_.Delay(function (unitVar) {
              return builder_.Bind(newKeys.data, function (_arg9) {
                var newKeys_1 = _arg9.map(function (tupledArg) {
                  return tupledArg[1];
                });

                var lookup = _fableCore.Map.create(arr, new _fableCore.GenericComparer(function (x, y) {
                  return x < y ? -1 : x > y ? 1 : 0;
                }));

                return builder_.Return(newKeys_1.map(function (k) {
                  var matchValue = _fableCore.Map.tryFind(k, lookup);

                  if (matchValue == null) {
                    return [k, defaultValue];
                  } else {
                    return [k, matchValue];
                  }
                }));
              });
            });
          }(_fableCore.defaultAsyncBuilder);
        })(this);
      }
    }], [{
      key: "create",
      value: function create(data, keyName, valueName, seriesName) {
        return new series(data, keyName, valueName, seriesName);
      }
    }, {
      key: "values",
      value: function values(_values) {
        var data = function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Return(Array.from(_fableCore.Seq.mapIndexed(function (i, v) {
              return [i, v];
            }, _values)));
          });
        }(_fableCore.defaultAsyncBuilder);

        return new series(data, "key", "value", "");
      }
    }, {
      key: "range",
      value: function range(from, to) {
        return series.values(Int32Array.from(_fableCore.Seq.range(from, to)));
      }
    }, {
      key: "rangeBy",
      value: function rangeBy(from, to, step) {
        return series.values(Int32Array.from(_fableCore.Seq.rangeStep(from, step, to)));
      }
    }, {
      key: "ordinal",
      value: function ordinal(data, keyName, valueName, seriesName) {
        var data_1 = function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Bind(data, function (_arg3) {
              return builder_.Return(Array.from(_fableCore.Seq.mapIndexed(function (i, v) {
                return [i, v];
              }, _arg3)));
            });
          });
        }(_fableCore.defaultAsyncBuilder);

        return new series(data_1, keyName, valueName, seriesName);
      }
    }]);

    return series;
  }();

  exports.series = series;

  _fableCore.Util.setInterfaces(series.prototype, ["FSharpRecord"], "TheGamma.Series.series");
});
//# sourceMappingURL=series.js.map