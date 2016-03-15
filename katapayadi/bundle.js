System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.map.js", ["npm:core-js@1.2.6/library/modules/$.collection-strong.js", "npm:core-js@1.2.6/library/modules/$.collection.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var strong = $__require('npm:core-js@1.2.6/library/modules/$.collection-strong.js');
  $__require('npm:core-js@1.2.6/library/modules/$.collection.js')('Map', function(get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    set: function set(key, value) {
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.map.to-json.js", ["npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.collection-to-json.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js');
  $export($export.P, 'Map', {toJSON: $__require('npm:core-js@1.2.6/library/modules/$.collection-to-json.js')('Map')});
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/map.js", ["npm:core-js@1.2.6/library/modules/es6.object.to-string.js", "npm:core-js@1.2.6/library/modules/es6.string.iterator.js", "npm:core-js@1.2.6/library/modules/web.dom.iterable.js", "npm:core-js@1.2.6/library/modules/es6.map.js", "npm:core-js@1.2.6/library/modules/es7.map.to-json.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.to-string.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.iterator.js');
  $__require('npm:core-js@1.2.6/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.map.js');
  $__require('npm:core-js@1.2.6/library/modules/es7.map.to-json.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').Map;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/core-js/map.js", ["npm:core-js@1.2.6/library/fn/map.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/map.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.to-string.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-species.js", ["npm:core-js@1.2.6/library/modules/$.core.js", "npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = $__require('npm:core-js@1.2.6/library/modules/$.core.js'),
      $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection-strong.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.redefine-all.js", "npm:core-js@1.2.6/library/modules/$.ctx.js", "npm:core-js@1.2.6/library/modules/$.strict-new.js", "npm:core-js@1.2.6/library/modules/$.defined.js", "npm:core-js@1.2.6/library/modules/$.for-of.js", "npm:core-js@1.2.6/library/modules/$.iter-define.js", "npm:core-js@1.2.6/library/modules/$.iter-step.js", "npm:core-js@1.2.6/library/modules/$.uid.js", "npm:core-js@1.2.6/library/modules/$.has.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.set-species.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide.js'),
      redefineAll = $__require('npm:core-js@1.2.6/library/modules/$.redefine-all.js'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
      strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new.js'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined.js'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of.js'),
      $iterDefine = $__require('npm:core-js@1.2.6/library/modules/$.iter-define.js'),
      step = $__require('npm:core-js@1.2.6/library/modules/$.iter-step.js'),
      ID = $__require('npm:core-js@1.2.6/library/modules/$.uid.js')('id'),
      $has = $__require('npm:core-js@1.2.6/library/modules/$.has.js'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      setSpecies = $__require('npm:core-js@1.2.6/library/modules/$.set-species.js'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js'),
      isExtensible = Object.isExtensible || isObject,
      SIZE = DESCRIPTORS ? '_s' : 'size',
      id = 0;
  var fastKey = function(it, create) {
    if (!isObject(it))
      return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it))
        return 'F';
      if (!create)
        return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function(that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F')
      return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key)
        return entry;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this,
              data = that._i,
              entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p)
              entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function(key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev)
              prev.n = next;
            if (next)
              next.p = prev;
            if (that._f == entry)
              that._f = next;
            if (that._l == entry)
              that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r)
              entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS)
        $.setDesc(C.prototype, 'size', {get: function() {
            return defined(this[SIZE]);
          }});
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f)
          that._f = entry;
        if (prev)
          prev.n = entry;
        that[SIZE]++;
        if (index !== 'F')
          that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function(iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function() {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r)
          entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys')
          return step(0, entry.k);
        if (kind == 'values')
          return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.redefine-all.js", ["npm:core-js@1.2.6/library/modules/$.redefine.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine.js');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.strict-new.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.global.js", "npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.fails.js", "npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.redefine-all.js", "npm:core-js@1.2.6/library/modules/$.for-of.js", "npm:core-js@1.2.6/library/modules/$.strict-new.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails.js'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide.js'),
      redefineAll = $__require('npm:core-js@1.2.6/library/modules/$.redefine-all.js'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of.js'),
      strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new.js'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js');
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            if (!IS_ADDER && IS_WEAK && !isObject(a))
              return KEY == 'get' ? undefined : false;
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.set.js", ["npm:core-js@1.2.6/library/modules/$.collection-strong.js", "npm:core-js@1.2.6/library/modules/$.collection.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var strong = $__require('npm:core-js@1.2.6/library/modules/$.collection-strong.js');
  $__require('npm:core-js@1.2.6/library/modules/$.collection.js')('Set', function(get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {add: function add(value) {
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }}, strong);
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-call.js", ["npm:core-js@1.2.6/library/modules/$.an-object.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-array-iter.js", ["npm:core-js@1.2.6/library/modules/$.iterators.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-length.js", ["npm:core-js@1.2.6/library/modules/$.to-integer.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer.js'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.for-of.js", ["npm:core-js@1.2.6/library/modules/$.ctx.js", "npm:core-js@1.2.6/library/modules/$.iter-call.js", "npm:core-js@1.2.6/library/modules/$.is-array-iter.js", "npm:core-js@1.2.6/library/modules/$.an-object.js", "npm:core-js@1.2.6/library/modules/$.to-length.js", "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
      call = $__require('npm:core-js@1.2.6/library/modules/$.iter-call.js'),
      isArrayIter = $__require('npm:core-js@1.2.6/library/modules/$.is-array-iter.js'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length.js'),
      getIterFn = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method.js');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection-to-json.js", ["npm:core-js@1.2.6/library/modules/$.for-of.js", "npm:core-js@1.2.6/library/modules/$.classof.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of.js'),
      classof = $__require('npm:core-js@1.2.6/library/modules/$.classof.js');
  module.exports = function(NAME) {
    return function toJSON() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.set.to-json.js", ["npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.collection-to-json.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js');
  $export($export.P, 'Set', {toJSON: $__require('npm:core-js@1.2.6/library/modules/$.collection-to-json.js')('Set')});
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/set.js", ["npm:core-js@1.2.6/library/modules/es6.object.to-string.js", "npm:core-js@1.2.6/library/modules/es6.string.iterator.js", "npm:core-js@1.2.6/library/modules/web.dom.iterable.js", "npm:core-js@1.2.6/library/modules/es6.set.js", "npm:core-js@1.2.6/library/modules/es7.set.to-json.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.to-string.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.iterator.js');
  $__require('npm:core-js@1.2.6/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.set.js');
  $__require('npm:core-js@1.2.6/library/modules/es7.set.to-json.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').Set;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/core-js/set.js", ["npm:core-js@1.2.6/library/fn/set.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/set.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-step.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iobject.js", ["npm:core-js@1.2.6/library/modules/$.cof.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof.js');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-iobject.js", ["npm:core-js@1.2.6/library/modules/$.iobject.js", "npm:core-js@1.2.6/library/modules/$.defined.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject.js'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined.js');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.iterator.js", ["npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js", "npm:core-js@1.2.6/library/modules/$.iter-step.js", "npm:core-js@1.2.6/library/modules/$.iterators.js", "npm:core-js@1.2.6/library/modules/$.to-iobject.js", "npm:core-js@1.2.6/library/modules/$.iter-define.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js'),
      step = $__require('npm:core-js@1.2.6/library/modules/$.iter-step.js'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.iter-define.js')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/web.dom.iterable.js", ["npm:core-js@1.2.6/library/modules/es6.array.iterator.js", "npm:core-js@1.2.6/library/modules/$.iterators.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.array.iterator.js');
  var Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-integer.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.defined.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.string-at.js", ["npm:core-js@1.2.6/library/modules/$.to-integer.js", "npm:core-js@1.2.6/library/modules/$.defined.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer.js'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined.js');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.library.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.a-function.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.ctx.js", ["npm:core-js@1.2.6/library/modules/$.a-function.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function.js');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.export.js", ["npm:core-js@1.2.6/library/modules/$.global.js", "npm:core-js@1.2.6/library/modules/$.core.js", "npm:core-js@1.2.6/library/modules/$.ctx.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.redefine.js", ["npm:core-js@1.2.6/library/modules/$.hide.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.hide.js');
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.property-desc.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.fails.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.descriptors.js", ["npm:core-js@1.2.6/library/modules/$.fails.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('npm:core-js@1.2.6/library/modules/$.fails.js')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.hide.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.property-desc.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-create.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.property-desc.js", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", "npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      descriptor = $__require('npm:core-js@1.2.6/library/modules/$.property-desc.js'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.6/library/modules/$.hide.js')(IteratorPrototype, $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.has.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.has.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('npm:core-js@1.2.6/library/modules/$.js').setDesc,
      has = $__require('npm:core-js@1.2.6/library/modules/$.has.js'),
      TAG = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-define.js", ["npm:core-js@1.2.6/library/modules/$.library.js", "npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.redefine.js", "npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.has.js", "npm:core-js@1.2.6/library/modules/$.iterators.js", "npm:core-js@1.2.6/library/modules/$.iter-create.js", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", "npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('npm:core-js@1.2.6/library/modules/$.library.js'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js'),
      redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine.js'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide.js'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has.js'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js'),
      $iterCreate = $__require('npm:core-js@1.2.6/library/modules/$.iter-create.js'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js'),
      getProto = $__require('npm:core-js@1.2.6/library/modules/$.js').getProto,
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.iterator.js", ["npm:core-js@1.2.6/library/modules/$.string-at.js", "npm:core-js@1.2.6/library/modules/$.iter-define.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('npm:core-js@1.2.6/library/modules/$.string-at.js')(true);
  $__require('npm:core-js@1.2.6/library/modules/$.iter-define.js')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-object.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.an-object.js", ["npm:core-js@1.2.6/library/modules/$.is-object.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.cof.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.classof.js", ["npm:core-js@1.2.6/library/modules/$.cof.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof.js'),
      TAG = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.shared.js", ["npm:core-js@1.2.6/library/modules/$.global.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.uid.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.global.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.wks.js", ["npm:core-js@1.2.6/library/modules/$.shared.js", "npm:core-js@1.2.6/library/modules/$.uid.js", "npm:core-js@1.2.6/library/modules/$.global.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('npm:core-js@1.2.6/library/modules/$.shared.js')('wks'),
      uid = $__require('npm:core-js@1.2.6/library/modules/$.uid.js'),
      Symbol = $__require('npm:core-js@1.2.6/library/modules/$.global.js').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iterators.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.get-iterator-method.js", ["npm:core-js@1.2.6/library/modules/$.classof.js", "npm:core-js@1.2.6/library/modules/$.wks.js", "npm:core-js@1.2.6/library/modules/$.iterators.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('npm:core-js@1.2.6/library/modules/$.classof.js'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.core.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.get-iterator.js", ["npm:core-js@1.2.6/library/modules/$.an-object.js", "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js'),
      get = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function')
      throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/get-iterator.js", ["npm:core-js@1.2.6/library/modules/web.dom.iterable.js", "npm:core-js@1.2.6/library/modules/es6.string.iterator.js", "npm:core-js@1.2.6/library/modules/core.get-iterator.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.iterator.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator.js');
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/core-js/get-iterator.js", ["npm:core-js@1.2.6/library/fn/get-iterator.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/get-iterator.js'),
    __esModule: true
  };
  return module.exports;
});

System.register('github:asdofindia/katapayadi@master/src/katapayadi.js', ['npm:babel-runtime@5.8.35/core-js/map.js', 'npm:babel-runtime@5.8.35/core-js/set.js', 'npm:babel-runtime@5.8.35/core-js/get-iterator.js'], function (_export) {
  var _Map, _Set, _getIterator;

  function decode(encoded) {
    var valuables = new _Map([

    // malayalam
    ['അ', '0'], ['ആ', '0'], ['ഇ', '0'], ['ഈ', '0'], ['ഉ', '0'], ['ഊ', '0'], ['ഋ', '0'], ['എ', '0'], ['ഏ', '0'], ['ഐ', '0'], ['ഒ', '0'], ['ഓ', '0'], ['ഔ', '0'], ['ക', '1'], ['ഖ', '2'], ['ഗ', '3'], ['ഘ', '4'], ['ങ', '5'], ['ച', '6'], ['ഛ', '7'], ['ജ', '8'], ['ഝ', '9'], ['ഞ', '0'], ['ട', '1'], ['ഠ', '2'], ['ഡ', '3'], ['ഢ', '4'], ['ണ', '5'], ['ത', '6'], ['ഥ', '7'], ['ദ', '8'], ['ധ', '9'], ['ന', '0'], ['പ', '1'], ['ഫ', '2'], ['ബ', '3'], ['ഭ', '4'], ['മ', '5'], ['യ', '1'], ['ര', '2'], ['ല', '3'], ['വ', '4'], ['ശ', '5'], ['ഷ', '6'], ['സ', '7'], ['ഹ', '8'],

    // hindi
    ['अ', '0'], ['आ', '0'], ['इ', '0'], ['ई', '0'], ['उ', '0'], ['ऊ', '0'], ['ऋ', '0'], ['ॠ', '0'], ['ए', '0'], ['ऐ', '0'], ['ओ', '0'], ['औ', '0'], ['क', '1'], ['ख', '2'], ['ग', '3'], ['घ', '4'], ['ङ', '5'], ['च', '6'], ['छ', '7'], ['ज', '8'], ['झ', '9'], ['ञ', '0'], ['ट', '1'], ['ठ', '2'], ['ड', '3'], ['ढ', '4'], ['ण', '5'], ['त', '6'], ['थ', '7'], ['द', '8'], ['ध', '9'], ['न', '0'], ['प', '1'], ['फ', '2'], ['ब', '3'], ['भ', '4'], ['म', '5'], ['य', '1'], ['र', '2'], ['ल', '3'], ['व', '4'], ['श', '5'], ['ष', '6'], ['स', '7'], ['ह', '8'],

    // kannada
    ['ಅ', '0'], ['ಆ', '0'], ['ಇ', '0'], ['ಈ', '0'], ['ಉ', '0'], ['ಊ', '0'], ['ಋ', '0'], ['ಎ', '0'], ['ಏ', '0'], ['ಐ', '0'], ['ಒ', '0'], ['ಓ', '0'], ['ಔ', '0'], ['ಕ', '1'], ['ಖ', '2'], ['ಗ', '3'], ['ಘ', '4'], ['ಙ', '5'], ['ಚ', '6'], ['ಛ', '7'], ['ಜ', '8'], ['ಝ', '9'], ['ಞ', '0'], ['ಟ', '1'], ['ಠ', '2'], ['ಡ', '3'], ['ಢ', '4'], ['ಣ', '5'], ['ತ', '6'], ['ಥ', '7'], ['ದ', '8'], ['ಧ', '9'], ['ನ', '0'], ['ಪ', '1'], ['ಫ', '2'], ['ಬ', '3'], ['ಭ', '4'], ['ಮ', '5'], ['ಯ', '1'], ['ರ', '2'], ['ಲ', '3'], ['ವ', '4'], ['ಶ', '5'], ['ష', '6'], ['ಸ', '7'], ['ಹ', '8']]);
    var destroyers = new _Set(['്', '्', '್']);
    var assistors = new _Set([
    // malayalam
    'ാ', 'ി', 'ീ', 'ു', 'ൂ', 'ൃ', 'െ', 'േ', 'ൈ', 'ൊ', 'ോ', 'ൗ', 'ം', 'ഃ',

    // hindi
    'ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॆ', 'े', 'ॊ', 'ो', 'ं', 'ः',

    // kannada
    'ಾ', 'ಿ', 'ೀ', 'ು', 'ೂ', 'ೃ', 'ೆ', 'ೇ', 'ೈ', 'ೊ', 'ೋ', 'ೌ', 'ಂ', 'ಃ']);
    var decodedNumber = '';
    var currDigit;
    var currDigitCauser;
    encoded += 'ാ';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(encoded), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var chr = _step.value;

        console.log('chr' + chr);
        if (currDigit != undefined) {
          if (destroyers.has(chr)) {
            currDigit = undefined;
            console.log('destroyer' + chr);
          } else {
            decodedNumber = currDigit + decodedNumber;
            // console.log(currDigitCauser, currDigit);
            if (valuables.has(chr)) {
              currDigit = valuables.get(chr);
              currDigitCauser = chr;
            } else {
              // if (assistors.has(chr)) {
              currDigit = undefined;
            }
          }
        } else {
          if (valuables.has(chr)) {
            currDigit = valuables.get(chr);
            currDigitCauser = chr;
            // console.log(chr + currDigit);
          }
        }
      }
      // if (currDigit != undefined) {
      //   decodedNumber += currDigit;
      // }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return decodedNumber;
  }

  return {
    setters: [function (_npmBabelRuntime5835CoreJsMapJs) {
      _Map = _npmBabelRuntime5835CoreJsMapJs['default'];
    }, function (_npmBabelRuntime5835CoreJsSetJs) {
      _Set = _npmBabelRuntime5835CoreJsSetJs['default'];
    }, function (_npmBabelRuntime5835CoreJsGetIteratorJs) {
      _getIterator = _npmBabelRuntime5835CoreJsGetIteratorJs['default'];
    }],
    execute: function () {
      'use strict';

      _export('decode', decode);
    }
  };
});
System.register("github:asdofindia/katapayadi@master.js", ["github:asdofindia/katapayadi@master/src/katapayadi.js"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubAsdofindiaKatapayadiMasterSrcKatapayadiJs) {
      var _exportObj = {};

      for (var _key in _githubAsdofindiaKatapayadiMasterSrcKatapayadiJs) {
        if (_key !== "default") _exportObj[_key] = _githubAsdofindiaKatapayadiMasterSrcKatapayadiJs[_key];
      }

      _exportObj["default"] = _githubAsdofindiaKatapayadiMasterSrcKatapayadiJs["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
System.register('katapayadi/main.js', ['github:asdofindia/katapayadi@master.js'], function (_export) {
  'use strict';

  var decode;
  return {
    setters: [function (_githubAsdofindiaKatapayadiMasterJs) {
      decode = _githubAsdofindiaKatapayadiMasterJs.decode;
    }],
    execute: function () {

      document.querySelector('#convert').addEventListener('click', function (e) {
        document.querySelector('#decoded').value = decode(document.querySelector('#encoded').value);
      });
    }
  };
});
//# sourceMappingURL=bundle.js.map