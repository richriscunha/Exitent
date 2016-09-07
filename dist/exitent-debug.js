(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Exitent = factory());
}(this, (function () { 'use strict';

var defaultConfiguration = {
  'threshold': 100,
  'maxDisplays': 1,
  'eventThrottle': 800,
  'checkReferrer': false,
  'storageName': 'exitent-visited',
  'storageLife': 365,
  'preExitent': null,
  'onExitent': null,
  'postExitent': null
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
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

var storageJar_min = createCommonjsModule(function (module, exports) {
  !function (e, t) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.StorageJar = t();
  }(commonjsGlobal, function () {
    "use strict";
    var e = function e(_e, t) {
      if (!(_e instanceof t)) throw new TypeError("Cannot call a class as a function");
    },
        t = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        n = function () {
      function n() {
        e(this, n);
      }return t(n, null, [{ key: "contains", value: function value(e) {
          var t = this.read(e);return null !== t;
        } }, { key: "convertDaysToMillis", value: function value(e) {
          return 24 * e * 60 * 60 * 1e3;
        } }, { key: "delete", value: function value(e) {
          return !!this.contains(e) && (this.hasLocalStorage() ? window.localStorage.removeItem(e) : this.write(e, "", -1), !0);
        } }, { key: "generateStorageValue", value: function value(e, t) {
          return { value: e, timestamp: this.generateLifetimeTimestamp(t) };
        } }, { key: "generateLifetimeTimestamp", value: function value(e) {
          var t = new Date();return t.getTime() + this.convertDaysToMillis(e);
        } }, { key: "hasLocalStorage", value: function value() {
          return window.localStorage;
        } }, { key: "isTimestampValid", value: function value(e) {
          var t = new Date();return t.getTime() <= e;
        } }, { key: "read", value: function value(e) {
          if (this.hasLocalStorage()) {
            var t = JSON.parse(window.localStorage.getItem(e));if (null !== t && this.isTimestampValid(t.timestamp)) return t;
          } else for (var n = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
            for (var a = r[i]; " " == a.charAt(0);) {
              a = a.substring(1);
            }if (0 == a.indexOf(n)) return a.substring(n.length, a.length);
          }return null;
        } }, { key: "write", value: function value(e, t) {
          var n = arguments.length <= 2 || void 0 === arguments[2] ? 7 : arguments[2];if (this.hasLocalStorage()) {
            var r = this.generateStorageValue(t, n);window.localStorage.setItem(e, JSON.stringify(r));
          } else {
            var i = new Date();i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);var a = "; expires=" + i.toGMTString();document.cookie = e + " = " + t + a + "; path=/";
          }
        } }]), n;
    }();return n;
  });
});

var __moduleExports$1 = createCommonjsModule(function (module) {
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return !!value && (type == 'object' || type == 'function');
  }

  module.exports = isObject;
});

var __moduleExports$4 = createCommonjsModule(function (module) {
  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  module.exports = freeGlobal;
});

var __moduleExports$3 = createCommonjsModule(function (module) {
  var freeGlobal = __moduleExports$4;

  var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

  var root = freeGlobal || freeSelf || Function('return this')();

  module.exports = root;
});

var __moduleExports$2 = createCommonjsModule(function (module) {
  var root = __moduleExports$3;

  var now = function now() {
    return root.Date.now();
  };

  module.exports = now;
});

var __moduleExports$7 = createCommonjsModule(function (module) {
  function isObjectLike(value) {
    return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
  }

  module.exports = isObjectLike;
});

var __moduleExports$6 = createCommonjsModule(function (module) {
  var isObjectLike = __moduleExports$7;

  var symbolTag = '[object Symbol]';

  var objectProto = Object.prototype;

  var objectToString = objectProto.toString;

  function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }

  module.exports = isSymbol;
});

var __moduleExports$5 = createCommonjsModule(function (module) {
  var isObject = __moduleExports$1,
      isSymbol = __moduleExports$6;

  var NAN = 0 / 0;

  var reTrim = /^\s+|\s+$/g;

  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  var reIsBinary = /^0b[01]+$/i;

  var reIsOctal = /^0o[0-7]+$/i;

  var freeParseInt = parseInt;

  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  module.exports = toNumber;
});

var __moduleExports = createCommonjsModule(function (module) {
  var isObject = __moduleExports$1,
      now = __moduleExports$2,
      toNumber = __moduleExports$5;

  var FUNC_ERROR_TEXT = 'Expected a function';

  var nativeMax = Math.max,
      nativeMin = Math.min;

  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      lastInvokeTime = time;

      timerId = setTimeout(timerExpired, wait);

      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }

      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  module.exports = debounce;
});

var throttle = createCommonjsModule(function (module) {
  var debounce = __moduleExports,
      isObject = __moduleExports$1;

  var FUNC_ERROR_TEXT = 'Expected a function';

  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  module.exports = throttle;
});

var __moduleExports$11 = createCommonjsModule(function (module) {
  function listCacheClear() {
    this.__data__ = [];
  }

  module.exports = listCacheClear;
});

var __moduleExports$14 = createCommonjsModule(function (module) {
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  module.exports = eq;
});

var __moduleExports$13 = createCommonjsModule(function (module) {
  var eq = __moduleExports$14;

  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  module.exports = assocIndexOf;
});

var __moduleExports$12 = createCommonjsModule(function (module) {
  var assocIndexOf = __moduleExports$13;

  var arrayProto = Array.prototype;

  var splice = arrayProto.splice;

  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }

  module.exports = listCacheDelete;
});

var __moduleExports$15 = createCommonjsModule(function (module) {
  var assocIndexOf = __moduleExports$13;

  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  module.exports = listCacheGet;
});

var __moduleExports$16 = createCommonjsModule(function (module) {
  var assocIndexOf = __moduleExports$13;

  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  module.exports = listCacheHas;
});

var __moduleExports$17 = createCommonjsModule(function (module) {
  var assocIndexOf = __moduleExports$13;

  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  module.exports = listCacheSet;
});

var __moduleExports$10 = createCommonjsModule(function (module) {
    var listCacheClear = __moduleExports$11,
        listCacheDelete = __moduleExports$12,
        listCacheGet = __moduleExports$15,
        listCacheHas = __moduleExports$16,
        listCacheSet = __moduleExports$17;

    function ListCache(entries) {
        var index = -1,
            length = entries ? entries.length : 0;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    module.exports = ListCache;
});

var __moduleExports$18 = createCommonjsModule(function (module) {
  var ListCache = __moduleExports$10;

  function stackClear() {
    this.__data__ = new ListCache();
  }

  module.exports = stackClear;
});

var __moduleExports$19 = createCommonjsModule(function (module) {
  function stackDelete(key) {
    return this.__data__['delete'](key);
  }

  module.exports = stackDelete;
});

var __moduleExports$20 = createCommonjsModule(function (module) {
  function stackGet(key) {
    return this.__data__.get(key);
  }

  module.exports = stackGet;
});

var __moduleExports$21 = createCommonjsModule(function (module) {
  function stackHas(key) {
    return this.__data__.has(key);
  }

  module.exports = stackHas;
});

var __moduleExports$26 = createCommonjsModule(function (module) {
  var isObject = __moduleExports$1;

  var funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]';

  var objectProto = Object.prototype;

  var objectToString = objectProto.toString;

  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  module.exports = isFunction;
});

var __moduleExports$27 = createCommonjsModule(function (module) {
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  module.exports = isHostObject;
});

var __moduleExports$29 = createCommonjsModule(function (module) {
  var root = __moduleExports$3;

  var coreJsData = root['__core-js_shared__'];

  module.exports = coreJsData;
});

var __moduleExports$28 = createCommonjsModule(function (module) {
  var coreJsData = __moduleExports$29;

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  module.exports = isMasked;
});

var __moduleExports$30 = createCommonjsModule(function (module) {
  var funcProto = Function.prototype;

  var funcToString = funcProto.toString;

  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  module.exports = toSource;
});

var __moduleExports$25 = createCommonjsModule(function (module) {
  var isFunction = __moduleExports$26,
      isHostObject = __moduleExports$27,
      isMasked = __moduleExports$28,
      isObject = __moduleExports$1,
      toSource = __moduleExports$30;

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  var funcToString = funcProto.toString;

  var hasOwnProperty = objectProto.hasOwnProperty;

  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  module.exports = baseIsNative;
});

var __moduleExports$31 = createCommonjsModule(function (module) {
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  module.exports = getValue;
});

var __moduleExports$24 = createCommonjsModule(function (module) {
  var baseIsNative = __moduleExports$25,
      getValue = __moduleExports$31;

  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  module.exports = getNative;
});

var __moduleExports$23 = createCommonjsModule(function (module) {
    var getNative = __moduleExports$24,
        root = __moduleExports$3;

    var Map = getNative(root, 'Map');

    module.exports = Map;
});

var __moduleExports$36 = createCommonjsModule(function (module) {
  var getNative = __moduleExports$24;

  var nativeCreate = getNative(Object, 'create');

  module.exports = nativeCreate;
});

var __moduleExports$35 = createCommonjsModule(function (module) {
  var nativeCreate = __moduleExports$36;

  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }

  module.exports = hashClear;
});

var __moduleExports$37 = createCommonjsModule(function (module) {
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }

  module.exports = hashDelete;
});

var __moduleExports$38 = createCommonjsModule(function (module) {
  var nativeCreate = __moduleExports$36;

  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  var objectProto = Object.prototype;

  var hasOwnProperty = objectProto.hasOwnProperty;

  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  module.exports = hashGet;
});

var __moduleExports$39 = createCommonjsModule(function (module) {
  var nativeCreate = __moduleExports$36;

  var objectProto = Object.prototype;

  var hasOwnProperty = objectProto.hasOwnProperty;

  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  module.exports = hashHas;
});

var __moduleExports$40 = createCommonjsModule(function (module) {
  var nativeCreate = __moduleExports$36;

  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  module.exports = hashSet;
});

var __moduleExports$34 = createCommonjsModule(function (module) {
    var hashClear = __moduleExports$35,
        hashDelete = __moduleExports$37,
        hashGet = __moduleExports$38,
        hashHas = __moduleExports$39,
        hashSet = __moduleExports$40;

    function Hash(entries) {
        var index = -1,
            length = entries ? entries.length : 0;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    module.exports = Hash;
});

var __moduleExports$33 = createCommonjsModule(function (module) {
  var Hash = __moduleExports$34,
      ListCache = __moduleExports$10,
      Map = __moduleExports$23;

  function mapCacheClear() {
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map || ListCache)(),
      'string': new Hash()
    };
  }

  module.exports = mapCacheClear;
});

var __moduleExports$43 = createCommonjsModule(function (module) {
  function isKeyable(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  module.exports = isKeyable;
});

var __moduleExports$42 = createCommonjsModule(function (module) {
  var isKeyable = __moduleExports$43;

  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  module.exports = getMapData;
});

var __moduleExports$41 = createCommonjsModule(function (module) {
  var getMapData = __moduleExports$42;

  function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
  }

  module.exports = mapCacheDelete;
});

var __moduleExports$44 = createCommonjsModule(function (module) {
  var getMapData = __moduleExports$42;

  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  module.exports = mapCacheGet;
});

var __moduleExports$45 = createCommonjsModule(function (module) {
  var getMapData = __moduleExports$42;

  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  module.exports = mapCacheHas;
});

var __moduleExports$46 = createCommonjsModule(function (module) {
  var getMapData = __moduleExports$42;

  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }

  module.exports = mapCacheSet;
});

var __moduleExports$32 = createCommonjsModule(function (module) {
    var mapCacheClear = __moduleExports$33,
        mapCacheDelete = __moduleExports$41,
        mapCacheGet = __moduleExports$44,
        mapCacheHas = __moduleExports$45,
        mapCacheSet = __moduleExports$46;

    function MapCache(entries) {
        var index = -1,
            length = entries ? entries.length : 0;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    module.exports = MapCache;
});

var __moduleExports$22 = createCommonjsModule(function (module) {
  var ListCache = __moduleExports$10,
      Map = __moduleExports$23,
      MapCache = __moduleExports$32;

  var LARGE_ARRAY_SIZE = 200;

  function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        return this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
  }

  module.exports = stackSet;
});

var __moduleExports$9 = createCommonjsModule(function (module) {
  var ListCache = __moduleExports$10,
      stackClear = __moduleExports$18,
      stackDelete = __moduleExports$19,
      stackGet = __moduleExports$20,
      stackHas = __moduleExports$21,
      stackSet = __moduleExports$22;

  function Stack(entries) {
    this.__data__ = new ListCache(entries);
  }

  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  module.exports = Stack;
});

var __moduleExports$47 = createCommonjsModule(function (module) {
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  module.exports = arrayEach;
});

var __moduleExports$48 = createCommonjsModule(function (module) {
  var eq = __moduleExports$14;

  function assignMergeValue(object, key, value) {
    if (value !== undefined && !eq(object[key], value) || typeof key == 'number' && value === undefined && !(key in object)) {
      object[key] = value;
    }
  }

  module.exports = assignMergeValue;
});

var __moduleExports$50 = createCommonjsModule(function (module) {
  var objectProto = Object.prototype;

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

    return value === proto;
  }

  module.exports = isPrototype;
});

var __moduleExports$51 = createCommonjsModule(function (module) {
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  module.exports = nativeKeysIn;
});

var __moduleExports$49 = createCommonjsModule(function (module) {
  var isObject = __moduleExports$1,
      isPrototype = __moduleExports$50,
      nativeKeysIn = __moduleExports$51;

  var objectProto = Object.prototype;

  var hasOwnProperty = objectProto.hasOwnProperty;

  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  module.exports = baseKeysIn;
});

var __moduleExports$54 = createCommonjsModule(function (module) {
  var eq = __moduleExports$14;

  var objectProto = Object.prototype;

  var hasOwnProperty = objectProto.hasOwnProperty;

  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      object[key] = value;
    }
  }

  module.exports = assignValue;
});

var __moduleExports$56 = createCommonjsModule(function (module) {
  var assignValue = __moduleExports$54;

  function copyObject(source, props, object, customizer) {
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

      assignValue(object, key, newValue === undefined ? source[key] : newValue);
    }
    return object;
  }

  module.exports = copyObject;
});

var __moduleExports$59 = createCommonjsModule(function (module) {
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  module.exports = baseTimes;
});

var __moduleExports$63 = createCommonjsModule(function (module) {
  var MAX_SAFE_INTEGER = 9007199254740991;

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  module.exports = isLength;
});

var __moduleExports$62 = createCommonjsModule(function (module) {
  var isFunction = __moduleExports$26,
      isLength = __moduleExports$63;

  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  module.exports = isArrayLike;
});

var __moduleExports$61 = createCommonjsModule(function (module) {
  var isArrayLike = __moduleExports$62,
      isObjectLike = __moduleExports$7;

  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  module.exports = isArrayLikeObject;
});

var __moduleExports$60 = createCommonjsModule(function (module) {
  var isArrayLikeObject = __moduleExports$61;

  var argsTag = '[object Arguments]';

  var objectProto = Object.prototype;

  var hasOwnProperty = objectProto.hasOwnProperty;

  var objectToString = objectProto.toString;

  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }

  module.exports = isArguments;
});

var __moduleExports$64 = createCommonjsModule(function (module) {
  var isArray = Array.isArray;

  module.exports = isArray;
});

var __moduleExports$65 = createCommonjsModule(function (module) {
  var MAX_SAFE_INTEGER = 9007199254740991;

  var reIsUint = /^(?:0|[1-9]\d*)$/;

  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  module.exports = isIndex;
});

var __moduleExports$58 = createCommonjsModule(function (module) {
  var baseTimes = __moduleExports$59,
      isArguments = __moduleExports$60,
      isArray = __moduleExports$64,
      isIndex = __moduleExports$65;

  var objectProto = Object.prototype;

  var hasOwnProperty = objectProto.hasOwnProperty;

  function arrayLikeKeys(value, inherited) {
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

    var length = result.length,
        skipIndexes = !!length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  module.exports = arrayLikeKeys;
});

var __moduleExports$68 = createCommonjsModule(function (module) {
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  module.exports = overArg;
});

var __moduleExports$67 = createCommonjsModule(function (module) {
  var overArg = __moduleExports$68;

  var nativeKeys = overArg(Object.keys, Object);

  module.exports = nativeKeys;
});

var __moduleExports$66 = createCommonjsModule(function (module) {
  var isPrototype = __moduleExports$50,
      nativeKeys = __moduleExports$67;

  var objectProto = Object.prototype;

  var hasOwnProperty = objectProto.hasOwnProperty;

  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  module.exports = baseKeys;
});

var __moduleExports$57 = createCommonjsModule(function (module) {
  var arrayLikeKeys = __moduleExports$58,
      baseKeys = __moduleExports$66,
      isArrayLike = __moduleExports$62;

  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  module.exports = keys;
});

var __moduleExports$55 = createCommonjsModule(function (module) {
  var copyObject = __moduleExports$56,
      keys = __moduleExports$57;

  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  module.exports = baseAssign;
});

var __moduleExports$69 = createCommonjsModule(function (module) {
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
});

var __moduleExports$70 = createCommonjsModule(function (module) {
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  module.exports = copyArray;
});

var __moduleExports$73 = createCommonjsModule(function (module) {
  function stubArray() {
    return [];
  }

  module.exports = stubArray;
});

var __moduleExports$72 = createCommonjsModule(function (module) {
  var overArg = __moduleExports$68,
      stubArray = __moduleExports$73;

  var nativeGetSymbols = Object.getOwnPropertySymbols;

  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

  module.exports = getSymbols;
});

var __moduleExports$71 = createCommonjsModule(function (module) {
  var copyObject = __moduleExports$56,
      getSymbols = __moduleExports$72;

  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  module.exports = copySymbols;
});

var __moduleExports$76 = createCommonjsModule(function (module) {
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  module.exports = arrayPush;
});

var __moduleExports$75 = createCommonjsModule(function (module) {
  var arrayPush = __moduleExports$76,
      isArray = __moduleExports$64;

  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  module.exports = baseGetAllKeys;
});

var __moduleExports$74 = createCommonjsModule(function (module) {
  var baseGetAllKeys = __moduleExports$75,
      getSymbols = __moduleExports$72,
      keys = __moduleExports$57;

  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  module.exports = getAllKeys;
});

var __moduleExports$78 = createCommonjsModule(function (module) {
    var getNative = __moduleExports$24,
        root = __moduleExports$3;

    var DataView = getNative(root, 'DataView');

    module.exports = DataView;
});

var __moduleExports$79 = createCommonjsModule(function (module) {
    var getNative = __moduleExports$24,
        root = __moduleExports$3;

    var Promise = getNative(root, 'Promise');

    module.exports = Promise;
});

var __moduleExports$80 = createCommonjsModule(function (module) {
    var getNative = __moduleExports$24,
        root = __moduleExports$3;

    var Set = getNative(root, 'Set');

    module.exports = Set;
});

var __moduleExports$81 = createCommonjsModule(function (module) {
    var getNative = __moduleExports$24,
        root = __moduleExports$3;

    var WeakMap = getNative(root, 'WeakMap');

    module.exports = WeakMap;
});

var __moduleExports$82 = createCommonjsModule(function (module) {
  var objectProto = Object.prototype;

  var objectToString = objectProto.toString;

  function baseGetTag(value) {
    return objectToString.call(value);
  }

  module.exports = baseGetTag;
});

var __moduleExports$77 = createCommonjsModule(function (module) {
    var DataView = __moduleExports$78,
        Map = __moduleExports$23,
        Promise = __moduleExports$79,
        Set = __moduleExports$80,
        WeakMap = __moduleExports$81,
        baseGetTag = __moduleExports$82,
        toSource = __moduleExports$30;

    var mapTag = '[object Map]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        setTag = '[object Set]',
        weakMapTag = '[object WeakMap]';

    var dataViewTag = '[object DataView]';

    var objectProto = Object.prototype;

    var objectToString = objectProto.toString;

    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    var getTag = baseGetTag;

    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function getTag(value) {
            var result = objectToString.call(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : undefined;

            if (ctorString) {
                switch (ctorString) {
                    case dataViewCtorString:
                        return dataViewTag;
                    case mapCtorString:
                        return mapTag;
                    case promiseCtorString:
                        return promiseTag;
                    case setCtorString:
                        return setTag;
                    case weakMapCtorString:
                        return weakMapTag;
                }
            }
            return result;
        };
    }

    module.exports = getTag;
});

var __moduleExports$83 = createCommonjsModule(function (module) {
  var objectProto = Object.prototype;

  var hasOwnProperty = objectProto.hasOwnProperty;

  function initCloneArray(array) {
    var length = array.length,
        result = array.constructor(length);

    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  module.exports = initCloneArray;
});

var __moduleExports$86 = createCommonjsModule(function (module) {
  var root = __moduleExports$3;

  var Uint8Array = root.Uint8Array;

  module.exports = Uint8Array;
});

var __moduleExports$85 = createCommonjsModule(function (module) {
  var Uint8Array = __moduleExports$86;

  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  module.exports = cloneArrayBuffer;
});

var __moduleExports$87 = createCommonjsModule(function (module) {
  var cloneArrayBuffer = __moduleExports$85;

  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  module.exports = cloneDataView;
});

var __moduleExports$89 = createCommonjsModule(function (module) {
  function addMapEntry(map, pair) {
    map.set(pair[0], pair[1]);
    return map;
  }

  module.exports = addMapEntry;
});

var __moduleExports$90 = createCommonjsModule(function (module) {
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array ? array.length : 0;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  module.exports = arrayReduce;
});

var __moduleExports$91 = createCommonjsModule(function (module) {
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  module.exports = mapToArray;
});

var __moduleExports$88 = createCommonjsModule(function (module) {
  var addMapEntry = __moduleExports$89,
      arrayReduce = __moduleExports$90,
      mapToArray = __moduleExports$91;

  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor());
  }

  module.exports = cloneMap;
});

var __moduleExports$92 = createCommonjsModule(function (module) {
  var reFlags = /\w*$/;

  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  module.exports = cloneRegExp;
});

var __moduleExports$94 = createCommonjsModule(function (module) {
  function addSetEntry(set, value) {
    set.add(value);
    return set;
  }

  module.exports = addSetEntry;
});

var __moduleExports$95 = createCommonjsModule(function (module) {
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  module.exports = setToArray;
});

var __moduleExports$93 = createCommonjsModule(function (module) {
  var addSetEntry = __moduleExports$94,
      arrayReduce = __moduleExports$90,
      setToArray = __moduleExports$95;

  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor());
  }

  module.exports = cloneSet;
});

var __moduleExports$97 = createCommonjsModule(function (module) {
  var root = __moduleExports$3;

  var _Symbol2 = root.Symbol;

  module.exports = _Symbol2;
});

var __moduleExports$96 = createCommonjsModule(function (module) {
  var _Symbol = __moduleExports$97;

  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  module.exports = cloneSymbol;
});

var __moduleExports$98 = createCommonjsModule(function (module) {
  var cloneArrayBuffer = __moduleExports$85;

  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  module.exports = cloneTypedArray;
});

var __moduleExports$84 = createCommonjsModule(function (module) {
  var cloneArrayBuffer = __moduleExports$85,
      cloneDataView = __moduleExports$87,
      cloneMap = __moduleExports$88,
      cloneRegExp = __moduleExports$92,
      cloneSet = __moduleExports$93,
      cloneSymbol = __moduleExports$96,
      cloneTypedArray = __moduleExports$98;

  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case dataViewTag:
        return cloneDataView(object, isDeep);

      case float32Tag:case float64Tag:
      case int8Tag:case int16Tag:case int32Tag:
      case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
        return cloneTypedArray(object, isDeep);

      case mapTag:
        return cloneMap(object, isDeep, cloneFunc);

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        return cloneRegExp(object);

      case setTag:
        return cloneSet(object, isDeep, cloneFunc);

      case symbolTag:
        return cloneSymbol(object);
    }
  }

  module.exports = initCloneByTag;
});

var __moduleExports$100 = createCommonjsModule(function (module) {
  var isObject = __moduleExports$1;

  var objectCreate = Object.create;

  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }

  module.exports = baseCreate;
});

var __moduleExports$101 = createCommonjsModule(function (module) {
  var overArg = __moduleExports$68;

  var getPrototype = overArg(Object.getPrototypeOf, Object);

  module.exports = getPrototype;
});

var __moduleExports$99 = createCommonjsModule(function (module) {
    var baseCreate = __moduleExports$100,
        getPrototype = __moduleExports$101,
        isPrototype = __moduleExports$50;

    function initCloneObject(object) {
        return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }

    module.exports = initCloneObject;
});

var __moduleExports$103 = createCommonjsModule(function (module) {
  function stubFalse() {
    return false;
  }

  module.exports = stubFalse;
});

var __moduleExports$102 = createCommonjsModule(function (module, exports) {
  var root = __moduleExports$3,
      stubFalse = __moduleExports$103;

  var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

  var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

  var moduleExports = freeModule && freeModule.exports === freeExports;

  var Buffer = moduleExports ? root.Buffer : undefined;

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  var isBuffer = nativeIsBuffer || stubFalse;

  module.exports = isBuffer;
});

var __moduleExports$53 = createCommonjsModule(function (module) {
  var Stack = __moduleExports$9,
      arrayEach = __moduleExports$47,
      assignValue = __moduleExports$54,
      baseAssign = __moduleExports$55,
      cloneBuffer = __moduleExports$69,
      copyArray = __moduleExports$70,
      copySymbols = __moduleExports$71,
      getAllKeys = __moduleExports$74,
      getTag = __moduleExports$77,
      initCloneArray = __moduleExports$83,
      initCloneByTag = __moduleExports$84,
      initCloneObject = __moduleExports$99,
      isArray = __moduleExports$64,
      isBuffer = __moduleExports$102,
      isHostObject = __moduleExports$27,
      isObject = __moduleExports$1,
      keys = __moduleExports$57;

  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }

    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }

      assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
    });
    return result;
  }

  module.exports = baseClone;
});

var __moduleExports$104 = createCommonjsModule(function (module) {
    var getPrototype = __moduleExports$101,
        isHostObject = __moduleExports$27,
        isObjectLike = __moduleExports$7;

    var objectTag = '[object Object]';

    var funcProto = Function.prototype,
        objectProto = Object.prototype;

    var funcToString = funcProto.toString;

    var hasOwnProperty = objectProto.hasOwnProperty;

    var objectCtorString = funcToString.call(Object);

    var objectToString = objectProto.toString;

    function isPlainObject(value) {
        if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
            return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
            return true;
        }
        var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }

    module.exports = isPlainObject;
});

var __moduleExports$106 = createCommonjsModule(function (module) {
    var isLength = __moduleExports$63,
        isObjectLike = __moduleExports$7;

    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';

    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

    var objectProto = Object.prototype;

    var objectToString = objectProto.toString;

    function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }

    module.exports = baseIsTypedArray;
});

var __moduleExports$107 = createCommonjsModule(function (module) {
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  module.exports = baseUnary;
});

var __moduleExports$108 = createCommonjsModule(function (module, exports) {
  var freeGlobal = __moduleExports$4;

  var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

  var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

  var moduleExports = freeModule && freeModule.exports === freeExports;

  var freeProcess = moduleExports && freeGlobal.process;

  var nodeUtil = function () {
    try {
      return freeProcess && freeProcess.binding('util');
    } catch (e) {}
  }();

  module.exports = nodeUtil;
});

var __moduleExports$105 = createCommonjsModule(function (module) {
  var baseIsTypedArray = __moduleExports$106,
      baseUnary = __moduleExports$107,
      nodeUtil = __moduleExports$108;

  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  module.exports = isTypedArray;
});

var __moduleExports$110 = createCommonjsModule(function (module) {
  var arrayLikeKeys = __moduleExports$58,
      baseKeysIn = __moduleExports$49,
      isArrayLike = __moduleExports$62;

  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  module.exports = keysIn;
});

var __moduleExports$109 = createCommonjsModule(function (module) {
  var copyObject = __moduleExports$56,
      keysIn = __moduleExports$110;

  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }

  module.exports = toPlainObject;
});

var __moduleExports$52 = createCommonjsModule(function (module) {
  var assignMergeValue = __moduleExports$48,
      baseClone = __moduleExports$53,
      copyArray = __moduleExports$70,
      isArguments = __moduleExports$60,
      isArray = __moduleExports$64,
      isArrayLikeObject = __moduleExports$61,
      isFunction = __moduleExports$26,
      isObject = __moduleExports$1,
      isPlainObject = __moduleExports$104,
      isTypedArray = __moduleExports$105,
      toPlainObject = __moduleExports$109;

  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = object[key],
        srcValue = source[key],
        stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      newValue = srcValue;
      if (isArray(srcValue) || isTypedArray(srcValue)) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else {
          isCommon = false;
          newValue = baseClone(srcValue, true);
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || srcIndex && isFunction(objValue)) {
          isCommon = false;
          newValue = baseClone(srcValue, true);
        } else {
          newValue = objValue;
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  module.exports = baseMergeDeep;
});

var __moduleExports$8 = createCommonjsModule(function (module) {
  var Stack = __moduleExports$9,
      arrayEach = __moduleExports$47,
      assignMergeValue = __moduleExports$48,
      baseKeysIn = __moduleExports$49,
      baseMergeDeep = __moduleExports$52,
      isArray = __moduleExports$64,
      isObject = __moduleExports$1,
      isTypedArray = __moduleExports$105;

  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    if (!(isArray(source) || isTypedArray(source))) {
      var props = baseKeysIn(source);
    }
    arrayEach(props || source, function (srcValue, key) {
      if (props) {
        key = srcValue;
        srcValue = source[key];
      }
      if (isObject(srcValue)) {
        stack || (stack = new Stack());
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(object[key], srcValue, key + '', object, source, stack) : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    });
  }

  module.exports = baseMerge;
});

var __moduleExports$113 = createCommonjsModule(function (module) {
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  module.exports = apply;
});

var __moduleExports$112 = createCommonjsModule(function (module) {
  var apply = __moduleExports$113;

  var nativeMax = Math.max;

  function baseRest(func, start) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = array;
      return apply(func, this, otherArgs);
    };
  }

  module.exports = baseRest;
});

var __moduleExports$114 = createCommonjsModule(function (module) {
  var eq = __moduleExports$14,
      isArrayLike = __moduleExports$62,
      isIndex = __moduleExports$65,
      isObject = __moduleExports$1;

  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }
    return false;
  }

  module.exports = isIterateeCall;
});

var __moduleExports$111 = createCommonjsModule(function (module) {
  var baseRest = __moduleExports$112,
      isIterateeCall = __moduleExports$114;

  function createAssigner(assigner) {
    return baseRest(function (object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  module.exports = createAssigner;
});

var merge = createCommonjsModule(function (module) {
  var baseMerge = __moduleExports$8,
      createAssigner = __moduleExports$111;

  var merge = createAssigner(function (object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });

  module.exports = merge;
});

var Exitent = function () {
  function Exitent(options) {
    classCallCheck(this, Exitent);

    this.eventListeners = new Map();
    this.displays = 0;
    this.options = defaultConfiguration;
    if (arguments.length === 1 && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
      this.options = this.mergeOptions(defaultConfiguration, options);
    }
    this.init();
  }

  createClass(Exitent, [{
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
      this.addEvent('document', 'mousemove', throttle(handleCallback, this.options.eventThrottle));
    }
  }, {
    key: 'mergeOptions',
    value: function mergeOptions(options, custom) {
      return merge(options, custom);
    }
  }, {
    key: 'mouseDidMove',
    value: function mouseDidMove(event) {
      var _options2 = this.options;
      var maxDisplays = _options2.maxDisplays;
      var storageName = _options2.storageName;
      var storageLife = _options2.storageLife;
      var checkReferrer = _options2.checkReferrer;

      if (this.shouldDisplay(event.clientY)) {
        if (checkReferrer) {
          var link = document.createElement('a');
          link.href = document.referrer;

          if (document.referrer === "" || link.host !== document.location.host) return;
        }

        if (this.displays === maxDisplays && !storageJar_min.contains(storageName)) storageJar_min.write(storageName, storageName, storageLife);

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
      var _options3 = this.options;
      var threshold = _options3.threshold;
      var maxDisplays = _options3.maxDisplays;
      var storageName = _options3.storageName;

      if (position <= threshold && this.displays < maxDisplays) {
        if (!storageJar_min.contains(storageName)) {
          this.displays++;
          return true;
        }
      }
      return false;
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

})));