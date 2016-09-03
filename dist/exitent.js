'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Exitent = factory();
})(undefined, function () {
  'use strict';

  var defaultConfiguration = {
    'threshold': 100,
    'maxDisplays': 1,
    'eventThrottle': 800,
    'checkReferrer': true,
    'preExitent': null,
    'onExitent': null,
    'postExitent': null
  };

  var Exitent = function () {
    function Exitent(options) {
      _classCallCheck(this, Exitent);

      this.eventListeners = new Map();
      this.displays = 0;
      this.options = defaultConfiguration;

      if (arguments.length === 1 && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
        this.options = this.mergeOptions(defaultConfiguration, options);
      }

      this.init();
    }

    _createClass(Exitent, [{
      key: 'addEvent',
      value: function addEvent(elementId, eventName, callback) {
        var element = elementId === 'document' ? document : document.getElementById(elementId);

        if (element.addEvent) {
          element.attachEvent("on" + eventName, callback);
        } else {
          element.addEventListener(eventName, callback, false);
        }

        this.eventListeners.set(elementId + ":" + eventName, {
          element: element,
          eventName: eventName,
          callback: callback
        });
      }
    }, {
      key: 'executeCallbacks',
      value: function executeCallbacks() {
        var _options = this.options;
        var preExitent = _options.preExitent;
        var onExitent = _options.onExitent;
        var postExitent = _options.postExitent;


        if (preExitent !== null && typeof preExitent === 'function') preExitent();
        if (onExitent !== null && typeof onExitent === 'function') onExitent();
        if (postExitent !== null && typeof postExitent === 'function') postExitent();
      }
    }, {
      key: 'handleMouseEvent',
      value: function handleMouseEvent() {
        this.displays++;
        this.executeCallbacks();
        this.shouldRemoveEvents();
      }
    }, {
      key: 'init',
      value: function init() {
        var _this = this;

        var handleCallback = function handleCallback(event) {
          _this.mouseDidMove(event);
        };
        this.addEvent('document', 'mousemove', handleCallback);
      }
    }, {
      key: 'mergeOptions',
      value: function mergeOptions(options, custom) {
        Object.keys(options).forEach(function (key) {
          options[key] = custom[key];
        });
        return options;
      }
    }, {
      key: 'mouseDidMove',
      value: function mouseDidMove(event) {
        if (this.shouldDisplay(event.clientY)) {
          if (this.options.checkReferrer) {
            if (document.referrer === "") {
              return;
            }

            var link = document.createElement('a');
            link.href = document.referrer;

            if (link.host !== document.location.host) {
              return;
            }
          }
          this.handleMouseEvent();
        }
      }
    }, {
      key: 'removeEvent',
      value: function removeEvent(key) {
        var item = this.eventListeners.get(key);
        var element = item.element;
        var eventName = item.eventName;
        var callback = item.callback;

        element.removeEventListener(eventName, callback);
        this.eventListeners.delete(key);
      }
    }, {
      key: 'shouldDisplay',
      value: function shouldDisplay(position) {
        var _options2 = this.options;
        var threshold = _options2.threshold;
        var maxDisplays = _options2.maxDisplays;

        var displays = this.displays;
        return position <= threshold && displays < maxDisplays;
      }
    }, {
      key: 'shouldRemoveEvents',
      value: function shouldRemoveEvents() {
        var _this2 = this;

        if (this.displays >= this.options.maxDisplays) {
          this.eventListeners.forEach(function (value, key, map) {
            _this2.removeEvent(key);
          });
        }
      }
    }]);

    return Exitent;
  }();

  return Exitent;
});