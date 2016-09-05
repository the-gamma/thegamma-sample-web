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
    global.html = mod.exports;
  }
})(this, function (exports, _fableCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.h = exports.El = exports.DomNode = exports.DomAttribute = undefined;
  exports.render = render;
  exports.renderTo = renderTo;
  exports.text = text;
  exports.op_EqualsGreater = op_EqualsGreater;
  exports.op_EqualsBangGreater = op_EqualsBangGreater;

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

  var DomAttribute = exports.DomAttribute = function DomAttribute(caseName, fields) {
    _classCallCheck(this, DomAttribute);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(DomAttribute.prototype, ["FSharpUnion"], "TheGamma.Html.DomAttribute");

  var DomNode = exports.DomNode = function DomNode(caseName, fields) {
    _classCallCheck(this, DomNode);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(DomNode.prototype, ["FSharpUnion"], "TheGamma.Html.DomNode");

  function render(node) {
    return node.Case === "Part" ? function () {
      var el = document.createElement("div");
      return [el, function (unitVar0) {
        node.Fields[0](el);
      }];
    }() : node.Case === "Element" ? function () {
      var el = document.createElement(node.Fields[0]);
      var rc = node.Fields[2].map(function (node_1) {
        return render(node_1);
      });

      for (var idx = 0; idx <= rc.length - 1; idx++) {
        var forLoopVar = rc[idx];
        el.appendChild(forLoopVar[0]);
      }

      for (var idx = 0; idx <= node.Fields[1].length - 1; idx++) {
        var forLoopVar = node.Fields[1][idx];

        if (forLoopVar[1].Case === "Event") {
          el.addEventListener(forLoopVar[0], function (delegateArg0) {
            forLoopVar[1].Fields[0](el)(delegateArg0);
          });
        } else {
          el.setAttribute(forLoopVar[0], forLoopVar[1].Fields[0]);
        }
      }

      var onRender = function onRender(unitVar0) {
        for (var idx = 0; idx <= rc.length - 1; idx++) {
          var forLoopVar = rc[idx];
          forLoopVar[1]();
        }

        _fableCore.Seq.iterate(function (f) {
          f(el);
        }, function () {
          var $var1 = node.Fields[3];

          if ($var1 != null) {
            return [$var1];
          } else {
            return [];
          }
        }());
      };

      return [el, onRender];
    }() : [document.createTextNode(node.Fields[0]), function (value) {
      value;
    }];
  }

  function renderTo(node, dom) {
    while (node.lastChild != null) {
      node.removeChild(node.lastChild);
    }

    var patternInput = render(dom);
    node.appendChild(patternInput[0]);
    patternInput[1]();
  }

  function text(s) {
    return new DomNode("Text", [s]);
  }

  function op_EqualsGreater(k, v) {
    return [k, new DomAttribute("Property", [v])];
  }

  function op_EqualsBangGreater(k, f) {
    return [k, new DomAttribute("Event", [f])];
  }

  var El = exports.El = function () {
    function El() {
      _classCallCheck(this, El);
    }

    _createClass(El, [{
      key: "part",
      value: function part(initial, fold) {
        var evt = new _fableCore.Event();
        var state = initial;
        var container = null;
        var renderer = null;

        var render_1 = function render_1(unitVar0) {
          var matchValue = [container, renderer];

          var $target1 = function $target1() {};

          if (matchValue[0] != null) {
            if (matchValue[1] != null) {
              var el = matchValue[0];
              var r = matchValue[1];

              (function (dom) {
                renderTo(el, dom);
              })(r(state));
            } else {
              $target1();
            }
          } else {
            $target1();
          }
        };

        _fableCore.Observable.add(function (e) {
          state = fold(state)(e);
          render_1();
        }, evt.Publish);

        return [function (arg00) {
          evt.Trigger(arg00);
        }, function (r) {
          renderer = r;
          return new DomNode("Part", [function (el) {
            container = el;
            render_1();
          }]);
        }];
      }
    }], [{
      key: "op_Dynamic",
      value: function op_Dynamic(_arg1, n) {
        return function (a) {
          return function (b) {
            var f = n !== "select" ? null : function (el) {
              jQuery(el).chosen();
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var forLoopVar = _step.value;

                  if (forLoopVar[1].Case === "Event") {
                    jQuery(el).on(forLoopVar[0], function (unitVar0) {
                      forLoopVar[1].Fields[0](el)(event);
                    });
                  }
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
            };
            return new DomNode("Element", [n, Array.from(a), Array.from(b), f]);
          };
        };
      }
    }]);

    return El;
  }();

  _fableCore.Util.setInterfaces(El.prototype, [], "TheGamma.Html.El");

  var h = exports.h = new El();
});
//# sourceMappingURL=html.js.map