/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["a"] = (function(scheme) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["d" /* interpolateRgbBasis */])(scheme[scheme.length - 1]);
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(41);


/* harmony default export */ __webpack_exports__["a"] = (function(scheme) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["b" /* interpolateRgbBasis */])(scheme[scheme.length - 1]);
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["a"]; });
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__(164);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__(165);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__(79);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__(81);
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__(166);
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__(169);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__(170);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__(85);
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__(171);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__(172);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__(173);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__(174);
/* unused harmony reexport merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__(86);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__(78);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__(175);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_18__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__(176);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__(177);
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__(178);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__(87);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__(80);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__(179);
/* unused harmony reexport zip */





























/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* unused harmony reexport lch */
/* unused harmony reexport gray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(289);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* unused harmony reexport lch */
/* unused harmony reexport gray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(290);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var root = typeof self == 'object' && self.self === self && self ||
           typeof global == 'object' && global.global === global && global ||
           this;

var p6Solo = {
    allocate    : __webpack_require__(120),
    arrays      : __webpack_require__(14),
    aggregate   : __webpack_require__(27),
    pipeline    : __webpack_require__(121),
    derive      : __webpack_require__(58),
    match       : __webpack_require__(28),
    join        : __webpack_require__(123),
    stats       : __webpack_require__(124),
    embed       : __webpack_require__(125),
    toArray     : __webpack_require__(126)
};

if(typeof root.p6 == 'object') {
    root.p6.solo = p6Solo;
} else {
    root.p6Solo = p6Solo;
}

if(typeof module != 'undefined' && module.exports)
    module.exports = root.p6Solo;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(93);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(35);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(91);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(94);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(95);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(96);
/* unused harmony reexport interpolateString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(190);
/* unused harmony reexport interpolateTransformCss */
/* unused harmony reexport interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(193);
/* unused harmony reexport interpolateZoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(90);
/* unused harmony reexport interpolateRgb */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["b"]; });
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(194);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(195);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(196);
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(197);
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_piecewise__ = __webpack_require__(198);
/* unused harmony reexport piecewise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_quantize__ = __webpack_require__(199);
/* unused harmony reexport quantize */




















/***/ }),
/* 14 */
/***/ (function(module, exports) {

var array = {};
function _reduce(array, opt) {
    var i,
        len = array.length,
        fn,
        result;

    if(!len) return 0;

    switch (opt) {
        case "max":
            result = array.reduce(function(a, b) {
                return (a > b) ? a : b;
            });
            break;
        case "min":
            result = array.reduce(function(a, b) {
                return (a < b) ? a : b;
            });
            break;
        case "and":
        case "&":
            result = array.reduce(function(a, b) {
                return a & b;
            });
            break;
        case "or":
        case "|":
            result = array.reduce(function(a, b) {
                return a | b;
            });
            break;
        case "mult":
        case "*":
            result = array.reduce(function(a, b) {
                return a * b;
            });
            break;
        default: // "sum" or "+"
            result = array.reduce(function(a, b) {
                return a + b;
            });
            break;
    }

    return result;
}

array.reduce = function(opt) {
    return function(array) {
        var a = (array instanceof Array) ? array : Array.apply(null, arguments);
        return _reduce(a, opt);
    };
};

array.avg = function(array) {
    return _reduce(array, "+") / array.length;
    // return array.reduce(function(a,b){ return 0.5 * (a + b)});
};

array.normalize = function(array) {
    var max = _reduce(array, "max"),
        min = _reduce(array, "min"),
        range = max - min;

    return array.map(function(a){
        return (a - min) / range;
    });
}

array.seq = function(start, end, intv) {
    var interval = intv || 1,
        array = [];

    for(var i=start; i<=end; i+=interval)
        array.push(i);

    return array;
};

["max", "min", "mult", "and", "or"].forEach(function(f) {
    array[f] = array.reduce(f);
});

array.sum = array.reduce("+");

array.scan = array.pfsum = function(a){
    var pfsum = [],
        accum = 0;

    for (var i = 0; i < a.length; i++) {
        accum += a[i];
        pfsum.push(accum);
    }

    return pfsum;
};

array.iscan = function(a) {
    return array.scan([0].concat(a));
};

array.diff = function(a, b) {
    var difference = [];
    a.forEach(function(d){
        if (b.indexOf(d)===-1) {
            difference.push(d);
        }
    });
    return difference;
};

array.intersect = function(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
            if (b.indexOf(e) !== -1) return true;
    });
};

array.unique = function(a) {
    return a.reduce(function(b, c) {
        if (b.indexOf(c) < 0) b.push(c);
        return b;
    }, []);
};

array.lcm = function(A) {
    var n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++) {
        var b = Math.abs(A[i]), c = a;
        while (a && b){ (a > b) ? a %= b : b %= a; }
        a = Math.abs(c*A[i])/(a+b);
    }
    return a;
};

array.stats = function(array){
    return {
        max: _reduce(array, "max"),
        min: _reduce(array, "min"),
        avg: array.avg(array)
    };
};

array.histogram = function(array, numBin, _max, _min) {
    var l = array.length,
        min = (typeof(_min) == 'number') ? _min : _reduce(array, "min"),
        max = (typeof(_max) == 'number') ? _max : _reduce(array, "max"),
        range = max - min,
        interval = range / numBin,
        bins = [],
        // ids = [],
        hg = new Array(numBin+1).fill(0);

    for(var b = 0; b < numBin; b++) {
        bins.push([min + range * (b/(numBin)), min + range*(b+1)/(numBin)]);
        // ids[b] = [];
    }

    // ids[numBin] = [];

    for(var i = 0; i < l; i++) {
        binID = Math.floor( (array[i] - min) / range * (numBin));
        hg[binID]++;
        // ids[binID].push(i);
    };

    hg[numBin-1] += hg[numBin];
    // ids[numBin-1] = ids[numBin-1].concat(ids.pop());
    return {
        bins: bins,
        counts: hg.slice(0,numBin),
        // ids: ids
    };
}

array.var = function(rowArray) {
    var m = _reduce(rowArray, "+") / rowArray.length,
        va = rowArray.map(function(a){ return Math.pow(a-m, 2) });

    return _reduce(va, "+") / (rowArray.length - 1);
}

array.std = function(rowArray) {
    return Math.sqrt(array.var(rowArray));
}



module.exports = array;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_pipeline__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_cstore__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ctypes__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ajax__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_parse__ = __webpack_require__(157);






var root = typeof self == 'object' && self.self === self && self ||
           typeof global == 'object' && global.global === global && global ||
           this;

root.p6 = __WEBPACK_IMPORTED_MODULE_0__src_pipeline__["a" /* default */];
root.p6.ajax = __WEBPACK_IMPORTED_MODULE_3__src_ajax__;
root.p6.cstore = __WEBPACK_IMPORTED_MODULE_1__src_cstore__["a" /* default */];
root.p6.ctypes = __WEBPACK_IMPORTED_MODULE_2__src_ctypes__;
root.p6.parse = __WEBPACK_IMPORTED_MODULE_4__src_parse__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (root.p6);

if(typeof module != 'undefined' && module.exports)
    module.exports = root.p6;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10), __webpack_require__(127)(module)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linearish;
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(200);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* ticks */])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* tickIncrement */])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* tickIncrement */])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* tickIncrement */])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]);

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(92);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(112);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_button_group__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_checkbox__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_dropdown__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_fileinput_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_icon__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_list__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_layout__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_panel__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_progress__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_radios__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_table__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_button__["a"]; });
/* unused harmony reexport ButtonGroup */
/* unused harmony reexport Checkbox */
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_fileinput__ = __webpack_require__(50);
/* unused harmony reexport FileInput */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__src_icon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__src_list__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__src_layout__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__src_panel__["a"]; });
/* unused harmony reexport ProgressBar */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_11__src_table__["a"]; });
/* unused harmony reexport Radios */
var root = typeof self == 'object' && self.self === self && self ||
           typeof global == 'object' && global.global === global && global ||
           this;














let dashi = {
    button: __WEBPACK_IMPORTED_MODULE_0__src_button__["a" /* default */],
    buttonGroup: __WEBPACK_IMPORTED_MODULE_1__src_button_group__["a" /* default */],
    checkbox: __WEBPACK_IMPORTED_MODULE_2__src_checkbox__["a" /* default */],
    dropdown: __WEBPACK_IMPORTED_MODULE_3__src_dropdown__["a" /* default */],  
    fileInput: __WEBPACK_IMPORTED_MODULE_4__src_fileinput_js__["a" /* default */],
    icon: __WEBPACK_IMPORTED_MODULE_5__src_icon__["a" /* default */],  
    list: __WEBPACK_IMPORTED_MODULE_6__src_list__["a" /* default */],       
    layout: __WEBPACK_IMPORTED_MODULE_7__src_layout__["a" /* default */],
    panel: __WEBPACK_IMPORTED_MODULE_8__src_panel__["a" /* default */], 
    progressBar: __WEBPACK_IMPORTED_MODULE_9__src_progress__["a" /* default */],
    radios: __WEBPACK_IMPORTED_MODULE_10__src_radios__["a" /* default */],
    table: __WEBPACK_IMPORTED_MODULE_11__src_table__["a" /* default */] 
};

root.dashi = dashi;

// export default dashi;












/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "short", function() { return short; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float", function() { return float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "double", function() { return double; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temporal", function() { return temporal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nominal", function() { return nominal; });
const int      = Int32Array;
const short    = Int16Array;
const float    = Float32Array;
const double   = Float64Array;
const string   = Uint16Array;
const time     = Float64Array;
const temporal = Float64Array;
const integer  = Int32Array;
const numeric  = Float32Array;
const nominal  = Uint16Array;




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* harmony export (immutable) */ __webpack_exports__["b"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(97);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["e" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(37);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6_solo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6_solo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_p6_solo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p6__ = __webpack_require__(15);



const TERMINAL_SCHEMA = {
    "lp_id"                 : "int", 
    "terminal_id"           : "int", 
    "data_size"             : "int", 
    "avg_packet_latency"    : "float", 
    "packets_finished"      : "float", 
    "avg_hops"              : "float", 
    "sat_time"              : "float", 
    "min_packet_latency"    : "float", 
    "max_packet_latency"    : "float",
};

const LINK_METRICS = [
    "source_id", 
    "source_type", 
    "dest_id", 
    "dest_type", 
    "link_type", 
    "traffic", 
    "sat_time"
];
const allocate = __WEBPACK_IMPORTED_MODULE_0_p6_solo___default.a.allocate;
const dsv = __WEBPACK_IMPORTED_MODULE_1_p6__["a" /* default */].parse;


/* harmony default export */ __webpack_exports__["a"] = (function(data, metadata) {
    var terminalMetrics = Object.keys(TERMINAL_SCHEMA);
    var terminals = allocate({
        array: dsv(data[0], " "),
        fields: terminalMetrics,
        types: terminalMetrics.map(m=>TERMINAL_SCHEMA[m]),
        skip: 0
    }).objectArray();
    
    terminals.forEach(function(terminal){
        terminal.job_id = -1;
    });

    var networkLinks = allocate({
        array: dsv(data[1], " "),
        fields: LINK_METRICS,
        types: ["int", "string", "int", "string", "string", "int", "float"],
        skip: 1,
    }).objectArray();

    const GROUP_TOTAL = metadata.groups;
    const TERMINAL_TOTAL = Math.max(...terminals.map(d=>d.terminal_id)) + 1;
    const ROUTER_TOTAL = Math.max(...networkLinks.filter(d=>d.source_type == 'R').map(d=>d.source_id)) + 1;
    const TERMINAL_PER_ROUTER = TERMINAL_TOTAL / ROUTER_TOTAL;
    const ROUTER_PER_GROUP = ROUTER_TOTAL / GROUP_TOTAL;

    networkLinks.forEach(function(l, li){
        l.router_id = l.source_id;
        l.router_port = 0;
        l.group_id = Math.floor(l.router_id/ROUTER_PER_GROUP);
        l.router_rank = l.router_id % ROUTER_PER_GROUP;
        l.target_router = l.dest_id;
    });

    var globalLinks = networkLinks.filter(d=>d.link_type == 'G');
    var localLinks = networkLinks.filter(d=>d.link_type == 'L');

    terminals.forEach(function(d) {
        d.router_id = Math.floor(d.terminal_id/TERMINAL_PER_ROUTER);
        d.router_rank = Math.floor(d.router_id/ROUTER_PER_GROUP);
        d.router_port = d.terminal_id % TERMINAL_PER_ROUTER;
        d.group_id = Math.floor(d.terminal_id/TERMINAL_PER_ROUTER/ROUTER_PER_GROUP);
    });

    var dataModel = {
        globalLinks: globalLinks,
        localLinks: localLinks,
        terminals: terminals,
        numJobs: 1
    };

    if(typeof callback == 'function') {
        return callback(dataModel);
    } else {
        return new Promise(function(resolve, reject) {
            return resolve(dataModel);
        })
    }
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var ArrayOpts = __webpack_require__(14);

module.exports = function(data, spec, headers){
    var i,
        l = data.length,
        attributes = headers || Object.keys(data[0]),
        bin,
        bins = [],
        binCollection = {},
        result = [],
        ks;

    if(!spec.hasOwnProperty('$group') && !spec.hasOwnProperty('$bin')) return result;

    if(typeof spec.$bin == 'object') {
        var binAttr = Object.keys(spec.$bin)[0],
            binCount = spec.$bin[binAttr];

        if(attributes.indexOf(binAttr) !== -1) {
            var column = data.map(function(d){return d[binAttr]}),
                min = ArrayOpts.min(column),
                max = ArrayOpts.max(column),
                binInterval = (max - min) / binCount;

            for(i = 0; i < l; i++){
                data[i]['bin@' + binAttr] = Math.min(Math.floor(data[i][binAttr]/binInterval), binCount-1);
            }

            spec.$group = 'bin@' + binAttr;
            attributes.push('bin@' + binAttr);
        }
    }

    for(i = 0; i < l; i++){
        if(Array.isArray(spec.$group)) {
            ks = [];
            spec.$group.forEach(function(si){
                ks.push(data[i][si]);
            });
            bin = JSON.stringify(ks);
        } else {
            bin = data[i][spec.$group];
        }
        if( bins.indexOf(bin) < 0 ){
            bins.push(bin);
            binCollection[bin] = [data[i]];
        } else {
            binCollection[bin].push(data[i]);
        }
    }

    var bl = bins.length;

    for(i = 0; i < bl; i++){
        var res = {};
        if(Array.isArray(spec.$group)) {
            ks = JSON.parse(bins[i]);
            spec.$group.forEach(function(s, j){
                res[s] = ks[j];
            })

        } else {
            res[spec.$group] = bins[i];
        }

        if(spec.$data) {
            res.data = binCollection[bins[i]];
        }

        if(spec.$group) {
            var gkeys = Array.isArray(spec.$group) ? spec.$group : [spec.$group];

            gkeys.forEach(function(gk){
                if(attributes.indexOf(gk) === -1) {
                    throw Error('Invalid attribute name: ', gk);
                }
            })
        }

        var out = spec.$collect || spec.$reduce || [];
        var keys = Object.keys(out);
        if(keys.length === 0) return result;
        keys.forEach(function(key){
            var attr = key,
                opt = out[key];

            if(opt === "$count" || opt === "$data") {
                attr = key;
            }
            if(typeof out[key] === 'object'){
                opt = Object.keys(out[key])[0];
                attr = out[key][opt];

                if(attributes.indexOf(attr) === -1 && attr !== "*" && !Array.isArray(attr)) {
                    var warnMsg = "No matching attribute or operation defined for the new attribute " + key + ":" + spec[key];
                    console.warn(warnMsg);
                    return;
                }
            }

            if(typeof opt === "function") {
                // res[key] = binCollection[bins[i]].map(function(a){ return a[attr]; }).reduce(opt);
                res[key] = opt.call(null, binCollection[bins[i]].map(function(a){ return a[attr]; }));
            } else if(typeof opt === "string") {
                if(opt === "$unique") {
                    res[key] = ArrayOpts.unique(binCollection[bins[i]].map(function(a){ return a[key]; }));
                } else if (opt === "$list") {
                    res[key] = binCollection[bins[i]].map(function(a){ return a[attr]; });
                } else if (opt === "$first") {
                    res[key] = binCollection[bins[i]][0][attr];
                } else if (opt === "$merge") {
                    var mergedResult = [];
                    binCollection[bins[i]].map(function(a){ return a[attr]; }).forEach(function(m){
                        mergedResult = mergedResult.concat(m);
                    })
                    res[key] = mergedResult;
                } else if (opt === "$count") {
                    res[key] = binCollection[bins[i]].length;
                } else if (opt === "$data") {
                    var collect = (spec.$collect) ? '$collect' : '$reduce';
                    res[key] = (spec[collect][key][opt] == '*')
                        ? binCollection[bins[i]]
                        : binCollection[bins[i]].map(function(data){
                            var row = {};
                            spec[key][opt].forEach(function(k){ row[k] = data[k] });
                            return row;
                        });
                } else {
                    var fname = opt.slice(1);

                    if(fname in ArrayOpts) {
                        res[key] = ArrayOpts[fname].call(null, binCollection[bins[i]].map(function(a){
                            return a[attr];
                        }));
                    }
                }
            }
        });
        result.push(res);
    }

    return result;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function match(data, spec) {
    var indexes = data[0];

    if(!Array.isArray(indexes)) indexes = [];

    return data.filter(function(a){
        if(_match(a, spec, indexes)) return a;
    });
};

function _match(obj, spec, indexes){
    var match,
        opt,
        index,
        sat = true,
        keys = Object.keys(spec);

    keys.forEach(function(key){
        if(key === "$not") {
            match = !_match(obj, spec[key], indexes);
        } else if(key == "$or" || key == "$and" ) {
            match = (key == "$and");
            spec[key].forEach(function(s){
                match = (key == "$and") ? match & _match(obj, s, indexes) : match | _match(obj, s, indexes);
            });
        } else {
            index = (indexes.length > 0) ? indexes.indexOf(key) : key;

            if(typeof spec[key] === 'object'){
                opt = Object.keys(spec[key])[0];

                if(opt[0] == "$" && spec[key][opt] instanceof Array){
                    if(opt == "$in" || opt == "$nin"){
                        match = ((opt == "$nin") ^ (spec[key][opt].indexOf(obj[index]) > -1));
                    } else if(opt == "$inRange"){
                        match =(obj[key] >= spec[key][opt][0] & obj[index] <= spec[key][opt][1]);
                    } else if(opt == "$ninRange"){
                        match =(obj[key] < spec[key][opt][0] | obj[index] > spec[key][opt][1]);
                    } else if(opt == "$inDate"){
                        match = (spec[key][opt].map(Number).indexOf(+(obj[index])) > -1);
                    }
                } else if(spec[key] instanceof Array) {
                    match =(obj[key] >= spec[key][0] & obj[index] <= spec[key][1]);
                }
            } else {
                if(spec[key][0] === "$") {
                    match = (obj[spec[key].slice(1)] === obj[index]);
                } else {
                    match = (spec[key] == obj[index]);
                }
            }
        }
        sat = sat & match;
    });

    return sat;
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6_solo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6_solo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_p6_solo__);


const ajax = p6.ajax;
const dsv = p6.parse;
const allocate = __WEBPACK_IMPORTED_MODULE_0_p6_solo___default.a.allocate;

const TERMINAL_METRICS = ["lp_id", "terminal_id", "data_size", "avg_packet_latency", "packets_finished", "avg_hops", "sat_time"];
const LINK_METRICS = ["group_id", "router_id", "router_port", "sat_time", "traffic"];



/* harmony default export */ __webpack_exports__["a"] = (function(data, metadata) {
    var numJobs = 1;
   
    var terminals = allocate({
        array: dsv(data[0], " "),
        fields: TERMINAL_METRICS,
        types: ["int", "int", "int", "float", "float", "float", "float"],
        skip: 1
    }).objectArray();
    
    terminals.forEach(function(terminal){
        terminal.job_id = -1;
    });
    

    if(data.length > 3 && data[3].length > 0) {
        var jobs = data[3].split("\n").map(function(j){return j.split(" ")});
        jobs.pop();

        jobs.forEach(function(job, jobId){
            job.forEach(function(nodeId){
                var nid = parseInt(nodeId);
                if(nid >= 0)
                    terminals[nid].job_id = jobId;
            });
        });
        numJobs = jobs.length;
    }

    const GROUP_TOTAL = metadata.groups;
    const TERMINAL_TOTAL = data[0].split('\n').length - 2; 
    const ROUTER_TOTAL = data[1].split('\n').length - 2;
    const TERMINAL_PER_ROUTER = Math.round(TERMINAL_TOTAL / ROUTER_TOTAL);
    const ROUTER_PER_GROUP =Math.round( ROUTER_TOTAL / GROUP_TOTAL);
    const LOCAL_LINK_COUNT =  ROUTER_PER_GROUP;
    const GLOBAL_LINK_COUNT = TERMINAL_PER_ROUTER;
    
    var busytime = allocate({
        array: dsv(data[1], " "),
        fields: ["lp_id", "group_id", "router_id", "local_sat_time", "global_sat_time"],
        types: ["int", "int", "int", "veci"+LOCAL_LINK_COUNT, "veci"+GLOBAL_LINK_COUNT],
        skip: 2,
    }).objectArray();

    var traffic = allocate({
        array: dsv(data[2], " "),
        fields: ["lp_id", "group_id", "router_id", "local_traffic", "global_traffic"],
        types: ["int", "int", "int", "veci"+LOCAL_LINK_COUNT, "veci"+GLOBAL_LINK_COUNT],
        skip: 2,
    }).objectArray();

    var localLinks = [],
        globalLinks = [];

    function calcTargetRouter(group_id, router_id, port) {
        var first = router_id % ROUTER_TOTAL;
        var target_grp = first + port * ROUTER_PER_GROUP;
        if(target_grp == group_id) {
            target_grp = GROUP_TOTAL - 1;
        }
        var my_pos = group_id % ROUTER_PER_GROUP;
        if(group_id == GROUP_TOTAL - 1) {
            my_pos = target_grp % ROUTER_PER_GROUP;
        }
        var target_pos =  target_grp * ROUTER_PER_GROUP + my_pos;
        return target_pos;
    }

    busytime.forEach(function(l, li){
        l.local_sat_time.forEach(function(b, bi){
            var link = {};
            link.group_id = l.group_id;
            link.router_rank = l.router_id;
            link.router_id = l.group_id * ROUTER_PER_GROUP + l.router_id;
            link.router_port = bi;
            link.sat_time = b;
            link.traffic = traffic[li].local_traffic[bi];
            link.target_router = l.group_id * ROUTER_PER_GROUP + bi;
            localLinks.push(link);
        });

        l.global_sat_time.forEach(function(g, gi){
            var link = {};
            link.group_id = l.group_id;
            link.router_rank = l.router_id;
            link.router_id = l.group_id * ROUTER_PER_GROUP + l.router_id;
            link.router_port = gi;
            link.sat_time = g;
            link.traffic = traffic[li].global_traffic[gi];
            link.target_router = calcTargetRouter(link.group_id, link.router_rank, link.router_port);
            globalLinks.push(link);
        });
    });

    terminals.forEach(function(d) {
        d.router_id = Math.floor(d.terminal_id/TERMINAL_PER_ROUTER);
        d.router_rank = Math.floor(d.router_id/ROUTER_PER_GROUP);
        d.router_port = d.terminal_id % TERMINAL_PER_ROUTER;
        d.group_id = Math.floor(d.terminal_id/TERMINAL_PER_ROUTER/ROUTER_PER_GROUP);
    });

    var dataModel = {
        globalLinks: globalLinks,
        localLinks: localLinks,
        terminals: terminals,
        numJobs: numJobs
    }

    if(typeof callback == 'function') {
        return callback(dataModel);
    } else {
        return new Promise(function(resolve, reject) {
            return resolve(dataModel);
        })
    }

});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(92);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(34);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__(4);
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__(218);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__(220);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__(221);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__(222);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__(223);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__(224);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__(225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__(227);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__(228);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(105);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_categorical_category10__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_0__src_categorical_category10__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_categorical_Accent__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeAccent", function() { return __WEBPACK_IMPORTED_MODULE_1__src_categorical_Accent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_categorical_Dark2__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeDark2", function() { return __WEBPACK_IMPORTED_MODULE_2__src_categorical_Dark2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_categorical_Paired__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePaired", function() { return __WEBPACK_IMPORTED_MODULE_3__src_categorical_Paired__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_categorical_Pastel1__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePastel1", function() { return __WEBPACK_IMPORTED_MODULE_4__src_categorical_Pastel1__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_categorical_Pastel2__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePastel2", function() { return __WEBPACK_IMPORTED_MODULE_5__src_categorical_Pastel2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_categorical_Set1__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet1", function() { return __WEBPACK_IMPORTED_MODULE_6__src_categorical_Set1__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_categorical_Set2__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet2", function() { return __WEBPACK_IMPORTED_MODULE_7__src_categorical_Set2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_categorical_Set3__ = __webpack_require__(241);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet3", function() { return __WEBPACK_IMPORTED_MODULE_8__src_categorical_Set3__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBrBG", function() { return __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBrBG", function() { return __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePRGn", function() { return __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePRGn", function() { return __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__ = __webpack_require__(244);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePiYG", function() { return __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePiYG", function() { return __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__ = __webpack_require__(245);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuOr", function() { return __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuOr", function() { return __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdBu", function() { return __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdBu", function() { return __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__ = __webpack_require__(247);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdGy", function() { return __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdGy", function() { return __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__ = __webpack_require__(249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__ = __webpack_require__(250);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateSpectral", function() { return __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSpectral", function() { return __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBuGn", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBuGn", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBuPu", function() { return __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBuPu", function() { return __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__ = __webpack_require__(253);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGnBu", function() { return __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGnBu", function() { return __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__ = __webpack_require__(254);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateOrRd", function() { return __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeOrRd", function() { return __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__ = __webpack_require__(255);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__ = __webpack_require__(256);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__ = __webpack_require__(257);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuRd", function() { return __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuRd", function() { return __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__ = __webpack_require__(258);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdPu", function() { return __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdPu", function() { return __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__ = __webpack_require__(259);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__ = __webpack_require__(260);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGn", function() { return __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlGn", function() { return __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__ = __webpack_require__(261);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBlues", function() { return __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBlues", function() { return __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__ = __webpack_require__(264);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGreens", function() { return __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGreens", function() { return __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__ = __webpack_require__(265);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGreys", function() { return __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGreys", function() { return __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePurples", function() { return __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePurples", function() { return __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__ = __webpack_require__(267);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateReds", function() { return __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeReds", function() { return __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateOranges", function() { return __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeOranges", function() { return __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_sequential_multi_cubehelix__ = __webpack_require__(269);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_36__src_sequential_multi_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_sequential_multi_sinebow__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateSinebow", function() { return __WEBPACK_IMPORTED_MODULE_38__src_sequential_multi_sinebow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__ = __webpack_require__(272);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["d"]; });










































/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(42);
/* unused harmony reexport interpolate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(113);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(45);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(111);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(114);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(25);
/* unused harmony reexport interpolateNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(115);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(291);
/* unused harmony reexport interpolateRound */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(116);
/* unused harmony reexport interpolateString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(292);
/* unused harmony reexport interpolateTransformCss */
/* unused harmony reexport interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(295);
/* unused harmony reexport interpolateZoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(110);
/* unused harmony reexport interpolateRgb */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["b"]; });
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(296);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(297);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(298);
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(299);
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_piecewise__ = __webpack_require__(300);
/* unused harmony reexport piecewise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_quantize__ = __webpack_require__(301);
/* unused harmony reexport quantize */




















/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(112);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(44);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;
function Button(arg) {
    var button = document.createElement('div'),
        options = arg || {},
        container = options.container || document.body,
        callback = options.onclick || function() {},
        text = options.text || options.label || null,
        icon = options.icon || false,
        title = options.title || false,
        type = options.type,
        fontSize = options.fontSize || options.size || null,
        background = options.background || null,
        fileInput = options.fileInput || false,
        value = options.value || null,
        types = options.types || [];

    if(type) types.push(type);
    types.push('ui button');
    button.className = types.join(' ');
    button.onclick = callback;
    button.style.textAlign = 'center';
    button.style.verticalAlign = 'top';

    if(icon) {
        var i = document.createElement('i');
        i.className = icon + ' icon';
        i.style.marginRight = "10px";
        button.className += ' icon';
        button.appendChild(i);
    }

    if(value !== null) {
        button.setAttribute('value', value);
    }

    if(fileInput) {
        var input = document.createElement('input'),
            inputName = fileInput.name || 'files[]';

        input.setAttribute('type', 'file');
        input.setAttribute('multiple', '');
        if(fileInput.hasOwnProperty('id')){
            input.setAttribute('id', fileInput.id);
        }
        input.style.display = 'none';
        if(typeof fileInput.onchange === 'function') {
            input.addEventListener('change', function(evt) {
                // fileInput.onchange(evt.target.files);
                fileInput.onchange(evt);
                return false;
            }, false);
        }

        button.appendChild(input);
        button.onclick = function(evt) {
            input.click();
            return false;
        }

        button.fileInput = input;
    }

    if(text !== null) button.innerHTML += text;
    if(fontSize !== null) button.style.fontSize = fontSize;
    if(title) button.title = title;
    if(container) container.appendChild(button);

    button.showLoading = function() {
        if((' ' + button.className + ' ').indexOf(' loading ') === -1)
            button.className += ' loading';
    }

    button.hideLoading = function() {
        button.className = button.className.replace(/\bloading\b/, '');
    }

    button.toggleLoading = function() {
        if((' ' + button.className + ' ').indexOf(' loading ') === -1)
            button.className += ' loading';
        else
            button.hideLoading();
    }


    return button;
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ButtonGroup;
function ButtonGroup(arg) {
    var buttonGroup = document.createElement('div'),
        options = arg || {},
        buttons = options.buttons || [],
        container = options.container || null,
        type = options.type,
        id = options.id || false,
        types = options.types || [];

    if(type) types.push(type);
    if(id) buttonGroup.setAttribute('id', id);
    buttonGroup.className = 'ui buttons ' + types.join(' ');
    function addButtons(buttons) {
        buttons.forEach(function(b) {
            buttonGroup.appendChild(b);
        });
    }
    addButtons(buttons);

    if(container) container.appendChild(buttonGroup);

    buttonGroup.add = function(buttons) {
        if(Array.isArray(buttons)) buttons = [buttons];
        addButtons(buttons);
    }
    buttonGroup.append = buttonGroup.add;

    if(types.indexOf('dropdown')!==-1) {
        var dropdown = document.createElement('div'),
            icon = document.createElement('div'),
            menu = document.createElement('div');

        dropdown.className = 'ui floating dropdown icon button';
        icon.className = 'dropdown icon';
        menu.className = 'menu';

        dropdown.appendChild(icon);
        dropdown.appendChild(menu);
        buttonGroup.appendChild(dropdown);

        buttonGroup.menu.append = function(items) {
            items.forEach(function(item){
                var label = item.label || item.name || '',
                    callback = item.onclick || function(){};
                var itemDiv = document.createElement('div'),
                    ic = document.createElement('i'),
                    text = document.createTextNode(label);
                ic.className = item.icon + ' icon';
                itemDiv.appendChild(ic);
                itemDiv.appendChild(text);
                itemDiv.onclick = callback.call(this, arg);
                itemDiv.className = 'item';
                menu.appendChild(itemDiv);
            })
        }
    }

    return buttonGroup;
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Checkbox;
function Checkbox(arg) {
    var checkbox = document.createElement('div'),
        options = arg || {},
        container = options.container || document.body,
        name = options.name || options.variable || "",
        callback = options.onchange ||  function() {},
        text = options.text || options.label || null,
        type = options.type,
        types = options.types || [];

    if(type) types.push(type);
    var input = document.createElement('input'),
        label = document.createElement('label');

    checkbox.className = 'ui checkbox ' + types.join(' ');
    checkbox.style.margin = '10px';
    label.innerHTML = text;
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', name);
    input.onchange = callback;

    checkbox.appendChild(label);
    checkbox.appendChild(input);

    if(container) container.appendChild(checkbox);

    var jquery = window.jQuery || window.$;
    if(typeof jquery == 'function') {
        jquery(checkbox).checkbox();
    }

    Object.defineProperty(checkbox, 'onchange', {
        set: function(f) { callback = f; }
    })

    return checkbox;
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Dropdown;
function Dropdown(arg) {
    var dropdown = document.createElement('div'),
        wrapper = document.createElement('div');
        options = arg || {},
        container = options.container || null,
        type = options.type,
        id = options.id || false,
        label = options.label,
        items = options.items || options.menu || [],
        types = options.types || [];

    if(type) types.push(type);
    if(id) dropdown.setAttribute('id', id);
    dropdown.className = 'ui buttons ' + types.join(' ');

    if(container) container.appendChild(dropdown);
    var icon = document.createElement('div'),
        menu = document.createElement('div');

    dropdown.className = 'ui compact menu';
    wrapper.className = 'ui simple dropdown item'

    icon.className = 'dropdown icon';
    menu.className = 'menu';

    wrapper.appendChild(document.createTextNode(label));
    wrapper.appendChild(icon);
    wrapper.appendChild(menu);
    dropdown.appendChild(wrapper);

    dropdown.append = function(items) {
        if(!Array.isArray) items = [items];
        items.forEach(function(item){
            var label = item.label || item.name || '',
                callback = item.onclick || function(){};
            var itemDiv = document.createElement('div'),
                ic = document.createElement('i'),
                text = document.createTextNode(label);
            ic.className = item.icon + ' icon';
            itemDiv.appendChild(ic);
            itemDiv.appendChild(text);
            itemDiv.onclick = callback.bind(this, arg);
            itemDiv.className = 'item';
            menu.appendChild(itemDiv);
        })
    }
    dropdown.menu = function(items) {
        dropdown.append(items);
    }

    dropdown.menu(items);

    return dropdown;
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FileInput;
function FileInput(arg) {
    var button;
    if(typeof arguments[0] === 'function') {
        button = arguments[0](arg);
    } else {
        button = Button(arg);
    }

    var button = document.createElement('div'),
        options = arg || {},
        container = options.container || document.body,
        callback = options.onclick || function() {},
        text = options.text || options.label || null,
        icon = options.icon || false,
        title = options.title || false,
        type = options.type,
        fontSize = options.fontSize || options.size || null,
        background = options.background || null,
        types = options.types || [];

    if(type) types.push(type);
    button.className = 'ui button ' + types.join(' ');
    button.onclick = callback;
    button.style.textAlign = 'center';
    button.style.verticalAlign = 'top';

    if(icon) {
        var i = document.createElement('i');
        i.className = icon + ' icon';
        i.style.marginRight = "10px";
        button.className += ' icon';
        button.appendChild(i);
    }
    if(text !== null) button.innerHTML += text;
    if(fontSize !== null) button.style.fontSize = fontSize;
    if(title) button.title = title;
    if(container) container.appendChild(button);

    return button;
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Icon;
function Icon(arg) {
    var icon = document.createElement('i'),
        options = arg || {},
        callback = options.onclick ||false,
        type = options.type,
        types = options.types || [],
        title = options.title || options.type || false;

    if(type) types.push(type);
    if(title) icon.title = title;
    icon.className = 'ui icon ' + types.join(' ');
    if(callback) {
         icon.onclick = callback;
         icon.className += ' link';
    }
    icon.change = function(i) {
        icon.className = icon.className.replace(type, d);
    };
    return icon;
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = List;
function List(arg) {
    var list= document.createElement('div'),
        options = arg || {},
        container = options.container || document.body,
        type = options.type,
        selectedColor = options.selectedColor || 'black',
        selectedIcon = options.selectedIcon || '',
        types = options.types || [];

    if(type) types.push(type);
    if(container) container.appendChild(list);
    list.className = 'ui list ' + types.join(' ');
    var items = [];

    let setSelected = (itemId, selected) => {
        if (selected == items[itemId]._selected) {
            return;
        }
        if (selected) {
            items[itemId]._selected = true;
            items[itemId].className += ' selected';
            if(items[itemId].hasOwnProperty('icon'))
                items[itemId].icon.className +=
                        ' ' + selectedColor + ' ' + selectedIcon;
            return;
        }
        items[itemId]._selected = false;
        items[itemId].className =
                items[itemId].className.replace('selected', '');
        if(items[itemId].hasOwnProperty('icon'))
            items[itemId].icon.className =
                    items[itemId].icon.className.replace(
                        selectedColor + ' ' + selectedIcon, '');
    };

    list.onselect = options.onselect || function() {};
    var onSelect = function(itemId) {
        if (types.indexOf('single') !== -1) {
            // single selection only
            list.clearSelected();
            setSelected(itemId, true);
        } else {
            // multiple selection
            setSelected(itemId, !items[itemId]._selected);
        }
        list.onselect.call(items[itemId], itemId);
    };

    list.append = function(li) {
        var item = document.createElement('div'),
            content = document.createElement('div');
        item.className = 'item';
        content.className = 'content';

        if(li.hasOwnProperty('icon')) {
            var icon = document.createElement('i');
            icon.className = li.icon + ' icon';
            item.appendChild(icon);
            item.icon = icon;
        }

        if(li.hasOwnProperty('img')) {
            var img = document.createElement('img');
            img.className ='ui avatar iamge';
            img.src = li.img;
            item.appendChild(img);
        }

        if(li.hasOwnProperty('header')) {
            var header = document.createElement('div');
            header.innerHTML = li.header;
            content.appendChild(header);
        }

        if(li.hasOwnProperty('text')) {
            // var text = document.createElement('div');
            content.innerHTML += li.text;
            // content.appendChild(text);
        }
        item.appendChild(content);
        var itemId = items.length;
        item._selected = false;
        items.push(item);
        list.appendChild(item);

        if(types.indexOf('selection') !== -1){
            item.onclick = onSelect.bind(this, itemId);
        }

        return list;
    };

    list.setSelectedItemIds = ids => {
        list.clearSelected();
        ids.forEach(id => {
            setSelected(id, true);
        });
    };

    list.clearSelected = () => {
        items.forEach((item, id) => {
            setSelected(id, false);
        });
    };

    list.getSelectedItemIds = function() {
        return items
            .map((d, i) => d._selected === true ? i : -1)
            .filter(id => id >= 0);
    };

    list.get = function(i) {
        return items[i];
    };

    list.select = function(i) {
        onSelect(i);
    };

    list.clear = function() {
        items = [];
        list.innerHTML = '';
    };

    list.remove = function(i) {
        list.removeChild(items[i]);
        return list;
    };

    return list;
}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;
function Layout(arg) {
    'use strict';
    var options = arg || {},
        layoutId = options.id || false,
        className = options.class || "",
        margin = options.margin || 0,
        spacing = options.spacing || 5,
        padding = options.padding || 0,
        rows = options.rows || [],
        cols = options.cols || [],
        divRows = [],
        divCols = [],
        container = options.container || document.body;

    if(typeof container == 'string')
        container = document.getElementById(container);

    if(container == document.body ) {
        container.style.height = window.innerHeight + 'px';
        container.style.padding = 0;
        container.style.margin = 0;
        container.style.overflow = 'hidden';
    }

    var setting = {
        rowHeights: [],
        colWidths : [],
    };

    var width = options.width ||  container.clientWidth || window.innerWidth,
        height = options.height || container.clientHeight|| window.innerHeight;

    width -= margin*2;
    height -= margin*2;

    var divs = {},
        cells = [];


    function createRow(w, h) {
        var row = document.createElement('div');
        row.style.width = w + 'px';
        row.style.height = h + 'px';
        row.className = 'davi-row';
        row.style.overflow = 'hidden';
        return row;
    }

    function createColumn(w, h) {
        var col = document.createElement('div');
        col.style.display = 'inline-block';
        col.className = 'davi-col';
        col.style.verticalAlign = "top";
        col.style.width = w + 'px';
        col.style.height = h + 'px';
        col.style.overflow = 'hidden';
        return col;
    }

    function createColumns(spec, container, w, h) {
      var columns = [],
          widthTotal = w,
          widthRemaining = widthTotal;

      spec.forEach(function(cs, i){
          var colWidth = (cs.width > 1) ? cs.width : cs.width * widthTotal;
          columns[i] = createColumn(colWidth, h);
          widthRemaining -= colWidth;
          if(cs.id !== undefined) {
              columns[i].setAttribute('id', cs.id)
              divs[cs.id] = columns[i];
          }
          container.appendChild(columns[i]);
          if(cs.rows) columns[i] = createRows(cs.rows, columns[i], w, h);

      });

      return columns;
    }

    function createRows(spec, container, w, h) {
        var rows = [],
            rowWidth = w,
            heightTotal = h,
            heightRemaining = heightTotal;

        spec.forEach(function(rs, i){
            var rowHeight = (rs.height > 1) ? rs.height : rs.height * heightTotal;
            rows[i] = createRow(rowWidth, rowHeight);
            heightRemaining -= rowHeight;
            if(rs.id !== undefined) {
                rows[i].setAttribute('id', rs.id)
                divs[rs.id] = rows[i];
            }
            container.appendChild(rows[i]);
            if(rs.cols) rows[i] = createColumns(rs.cols, rows[i], rowWidth, rowHeight);

        });

        return rows;
    }

    function createLayout(width, height) {

        var layout = document.createElement('div');

        if(layoutId)
            layout.setAttribute('id', layoutId);

        if(typeof className == 'string')
            layout.className = className;

        // container.style.overflow = 'hidden';
        layout.style.height = height + "px";
        layout.style.width = width + "px";

        layout.style.margin = margin + 'px';
        layout.className = 'davi-layout';
        // layout.style.overflow = 'hidden';
        // layout.style.padding = '0';


        return layout;
    }

    var layout = createLayout(width, height);

    if(rows.length) cells = createRows(rows, layout, width, height);
    if(cols.length) cells = createColumns(cols, layout, width, height);

    Object.keys(divs).forEach(function(k){
        divs[k].append = divs[k].appendChild;
    })

    layout.cell = function(id, cid) {
        if(typeof id === 'number')
            if(typeof cid === 'number' && typeof cells[id][cid] != 'undefined')
                return cells[id][cid];
            else
                return cells[id];
        else
            return divs[id];
    }


    layout.get = layout.cell;
    container.appendChild(layout);
    // container.onresize = function() {
    //     var newLayout = createLayout(container.clientWidth, container.clientHeight);
    //     layout.replaceWith(newLayout);
    // }
    return layout;
};


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Panel;
function Panel(arg) {
    'use strict';
    var panel,
        option = arg || {},
        container = option.container || document.body,
        header = option.header || null,
        title = option.title || "",
        margin = option.margin || 5,
        style = option.style || {},
        padding = option.padding || 0,
        types = option.types || [],
        classNames = 'panel ui segment',
        angularJS = option.AngularJS || option.angularJS || false,
        headerHeight;

    if (container) {
        container = (typeof(container) == "string") ? document.getElementById(container) : container;
    }

    if (option.id) {
        panel = document.getElementById(option.id);
        if (panel === null) {
            panel = document.createElement("div");
            panel.setAttribute('id', option.id);
            container.appendChild(panel);
        }
    } else {
        panel = document.createElement("div");
        container.appendChild(panel);
    }

    var fullScreen = false,
        width = option.width || container.clientWidth,
        height = option.height || container.clientHeight;

    width -= margin * 2;
    height -= margin * 2;

    panel.className = "ui";
    panel.style.margin = margin + 'px';

    panel.style.width = width + "px";
    panel.style.height = height + "px";
    // panel.style.boxSizing = 'border-box';

    if (header) {
        headerHeight = option.header.height || 0.08 * height;
        if (headerHeight < 1) headerHeight *= height;
        panel.header = document.createElement('div');
        panel.header.className = "ui top attached block header primary";
        panel.header.style.backgroundColor = "#FFFFFF";
        panel.header.style.height = headerHeight + "px";
        panel.header.style.width = width + "px";
        panel.header.style.fontSize = headerHeight * 0.36 + 'px';

        if (option.header.hasOwnProperty('style')) {
            Object.keys(option.header.style).forEach(function(s) {
                panel.header.style[s] = option.header.style[s];
            });
        }
        panel.header.style.padding = 0;
        panel.header.style.paddingLeft = panel.header.style.fontSize;

        var panelTitle = document.createElement('span');
        panelTitle.innerHTML = title;
        panelTitle.style.float = 'left';
        panelTitle.style.marginTop = (headerHeight * 0.25) + 'px';

        panel.header.appendChild(panelTitle);
        panel.appendChild(panel.header);
        Object.defineProperty(panel, "title", {
            get: function() {
                return title;
            },
            set: function(title) {
                panelTitle.innerHTML = title;
            }
        });
        classNames += ' bottom attached';

        if (Array.isArray(option.header.controls)) {
            option.header.controls.forEach(function(ctrl) {
                panel.header.appendChild(ctrl);
            })
        }

        var controls = document.createElement('div');
        controls.style.float = 'right';
        controls.style.marginTop = (headerHeight * 0.25) + 'px';
        controls.style.marginRight = panel.header.style.fontSize;
        panel.header.appendChild(controls)


        panel.header.append = function(elem) {
            if (typeof elem == 'string')
                controls.innerHTML += elem;
            else
                controls.appendChild(elem);
            return panel;
        };

    } else {
        headerHeight = 0;
    }

    panel.body = document.createElement("div");
    panel.body.className = classNames + ' panel-body ' + types.join(' ');
    panel.body.style.width = width + "px";
    panel.body.style.height = height - headerHeight + "px";
    panel.body.style.padding = padding + 'px';
    if (option.hasOwnProperty('style')) {

        Object.keys(option.style).forEach(function(s) {
            panel.body.style[s] = option.style[s];
        });
    }

    panel.appendChild(panel.body);

    if(option.id)
        panel.body.setAttribute('id', option.id+"-body");
    panel.innerWidth = width - padding * 2;
    panel.innerHeight = height - headerHeight - padding * 2;

    if (angularJS && angularJS.hasOwnProperty('ng-controller')) {
        panel.setAttribute('ng-controller', angularJS['ng-controller']);
        panel.body.setAttribute(angularJS['view'], '');
        panel.body.setAttribute('id', angularJS['id'])
    }

    panel.showLoading = function() {
        if((' ' + panel.body.className + ' ').indexOf(' loading ') === -1)
            panel.body.className += ' loading';
    };

    panel.hideLoading = function() {
        panel.body.className = panel.body.className.replace(/\bloading\b/, '');
    };

    panel.toggleLoading = function() {
        if((' ' + panel.body.className + ' ').indexOf(' loading ') === -1)
            panel.body.className += ' loading';
        else
            panel.hideLoading();
    };

    panel.append = function(child) {
        if (typeof child == 'string')
            panel.body.innerHTML += child;
        else
            panel.body.appendChild(child);
        return panel;
    };

    panel.clear = function() {
        panel.body.innerHTML = "";
    };

    panel.update = function(domArray) {
        panel.clear();
        panel.body.appendChild(domArray);
    };


    panel.toggleFullScreen = function() {
        if (!fullScreen) {
            panel.style.position = 'fixed';
            panel.style.top = '1px';
            panel.style.left = '1px';
            panel.style.zIndex = 9999;
            panel.resize(document.body.clientWidth, document.body.clientHeight);
        } else {
            panel.style.position = 'relative';
            panel.style.zIndex = 0;
            panel.resize(container.clientWidth - margin * 2, container.clientHeight - margin * 2);
        }

        fullScreen = !fullScreen;

    }

    panel.resize = function(w, h) {
        if (typeof w == 'undefined' || typeof h == 'undefined') {
            width = container.clientWidth;
            height = container.clientHeight;
        } else {
            width = w;
            height = h;
        }

        panel.style.width = width + "px";
        panel.style.height = height + "px";
        panel.body.style.width = width + "px";
        panel.body.style.height = height - headerHeight + "px";
        if (header) {
            panel.header.style.height = headerHeight + "px";
            panel.header.style.width = width + "px";
        }
    }


    return panel;
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Progress;
function Progress(arg) {
    var div = document.createElement('div'),
        bar = document.createElement('div'),
        progress = document.createElement('div'),
        label = document.createElement('div'),
        options = arg || {},
        container = options.container || null,
        percent = options.percentage || 0,
        type = options.type,
        text = options.text || '',
        types = options.types || [];

    if(type) types.push(type);
    div.className = 'ui progress ' + types.join(' ');

    progress.className = 'progress';
    bar.className = 'bar';
    label.className = 'label';


    label.innerHTML = text;
    bar.appendChild(progress);
    div.appendChild(bar);
    div.appendChild(label);
    if(container) container.appendChild(div);

    var jquery = window.jQuery || window.$;

    Object.defineProperty(div, 'percent', {
        set: function(f) {
            percent = f;
            setPercentage(percent);
            return div;
        }
    });

    function setPercentage() {
        if(typeof jquery == 'function') {
            jquery(div).progress({percent: percent});
        }
    }

    setPercentage(percent);

    div.hide = function() {
        div.style.display = 'none';
    };

    div.show = function() {
        div.style.display = 'block';
    };

    div.label = function(text) {
        label.innerHTML = text;
    };

    return div;
}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Radios;
function Radios(arg) {
    var radios = document.createElement('div'),
        options = arg || {},
        container = options.container || document.body,
        data = options.data || [],
        name = options.name || options.variable || "",
        field = options.field || 'inline',
        callback = options.onchange || function() {},
        text = options.text || options.label || null,
        icon = options.icon || false,
        title = options.title || false,
        type = options.type,
        checked = options.checked || null,
        types = options.types || [];

    var choice = null;

    if(type) types.push(type);
    var wrapper = document.createElement('div'),
        label = document.createElement('label');

    wrapper.className = 'ui form';
    radios.className = field + ' fields';
    label.innerHTML = text;
    radios.appendChild(label);

    data.forEach(function(d){
        var box = document.createElement('div'),
            field = document.createElement('div'),
            label = document.createElement('label'),
            input = document.createElement('input');

        field.className = 'field';
        box.className = 'ui radio checkbox';
        label.innerHTML = d;
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'test');
        input.setAttribute('value', d);
        input.setAttribute('tabindex', '0');
        if(checked == d) input.setAttribute('checked', 'checked');
        input.className = 'hidden';
        input.onchange = function() {
             callback(this.value);
        };

        box.appendChild(label);
        box.appendChild(input);
        field.appendChild(box)
        radios.appendChild(field);
    });

    wrapper.appendChild(radios);

    if(container) container.appendChild(wrapper);

    var jquery = window.jQuery || jQuery || $;
    if(typeof jquery !== 'undefined') {
        jquery('.ui.radio.checkbox').checkbox();
    }

    Object.defineProperty(wrapper, 'onchange', {
        set: function(f) { callback = f; return radios; }
    });

    return wrapper;
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Table;
function Table(arg) {
    var table = document.createElement('table'),
        options = arg || {},
        container = options.container || document.body,
        rows = options.rows || false,
        columns = options.columns || options.cols || false,
        type = options.type,
        width = options.width || container.clientWidth * 0.9,
        types = options.types || [];

    if(type) types.push(type);
    if(container) container.appendChild(table);
    table.className = 'ui table ' + types.join(' ');
    table.style.margin = '5px auto';
    table.style.width = width + 'px';
    var tableHead = document.createElement('thead'),
        tableBody = document.createElement('tbody'),
        tr = document.createElement('tr');
    tableHead.appendChild(tr);
    if(columns) {
        columns.forEach(function(col){
            var c = document.createElement('th');
            c.innerHTML = col;
            tr.appendChild(c);
        });
    }
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    table.addRow = function(_row) {
        var row = (Array.isArray(_row)) ? _row : [_row];

        var tr = document.createElement('tr');
        row.forEach(function(col){
            var td = document.createElement('td');
            if(col instanceof HTMLElement)
                td.appendChild(col);
            else
                td.innerHTML = col;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
        return tr;
    }

    table.updateCell = function(row, col, html) {
        var tr = tableBody.childNodes[row];
        var td = tr.childNodes[col];
        td.innerHTML = html;
        return td;
    }

    if (options.hasOwnProperty('style')) {
        Object.keys(options.style).forEach(function(s) {
            table.style[s] = options.style[s];
        });
    }

    table.tbody = tableBody;

    return table;
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);

module.exports = function(data, spec){
    if(!Array.isArray(data))
        throw new Error("Inproper input data format.");

    if(typeof(spec) === "function") {
        data.forEach(spec);
    } else {
        var result = [],
            tranfs = {};

        Object.keys(spec).forEach(function(s){
            if(typeof(spec[s]) == "function") {
                tranfs[s] = function(d) { d[s] = spec[s](d) };
            } else {
                tranfs[s] = Function("attr", "attr." + s + "=" + spec[s].replace(/@/g, 'attr.').replace(/\$/g, '$.') + ";");
            }
        });

        data.forEach(function(d){
            Object.keys(spec).forEach(function(s){
                tranfs[s](d);
            });
        });
    }

    return data;
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seq */
/* unused harmony export seqInt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return seqFloat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ctypes__ = __webpack_require__(21);


function seq(dtype, start, end, interval) {
    var step = interval || 1,
        size = (end - start) / step + 1,
        buf;

    buf = new __WEBPACK_IMPORTED_MODULE_0__ctypes__[dtype](size);
    for (var i = 0; i < size; i++) {
        buf[i] = start + i * step;
    }
    return buf;
}

let seqInt = seq.bind(null, "int");
let seqFloat = seq.bind(null, "float");


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Uniform;
function Uniform(glContext, name, type, data) {

    var uniform = (this instanceof Uniform) ? this : {},
        ctx = glContext;

    function serializeArray(arrayOfArray) {
        var sa = [];
        arrayOfArray.forEach(function(a){
            sa = sa.concat(a);
        })
        return sa;
    }

    function setUniform() {
        var type = this.type,
            location = this.location,
            size = this.size,
            data = this.data;

        if(Array.isArray(data)) {
            var hasArray = data.filter(function(d){return Array.isArray(d);});
            if(hasArray)
                data = serializeArray(data);
        }

        if((type == 'float' || type == 'int') && !Array.isArray(data) && !ArrayBuffer.isView(data))
            data = [data];

        var buf;
        if (type.slice(0,3) == 'vec' || type == 'float') {
            buf = new Float32Array(data);
            ctx['uniform' + size + 'fv'](location, buf);
        } else if(type.slice(0,4) == 'ivec' || type == 'int'){
            buf = new Int32Array(data);
            ctx['uniform' + size + 'iv'](location, buf);
        } else if(type.slice(0,3) == 'mat') {
            buf = new Float32Array(data);
            ctx['uniformMatrix' + size + 'fv'](location, false, buf);
        } else if(type == 'sampler2D') {
            if(data.hasOwnProperty('resourceType') && data.resourceType == 'texture') {
                ctx.activeTexture(ctx.TEXTURE0 + data.index);
                ctx.bindTexture(ctx.TEXTURE_2D, data.ptr);
                ctx.uniform1i(location, data.index);
            }
        }
    }

    uniform.create = function(name, type, data) {

        if(Array.isArray(data)) {
            var hasArray = data.filter(function(d){return Array.isArray(d);});
            if(hasArray)
                data = serializeArray(data);
        }

        uniform[name] = {
            type: type,
            name: name,
            data: data,
            location: null,
            size: parseInt(type.slice(3,4)) || parseInt(type.slice(4,5)) || 1
        };

        uniform[name].link = function(program) {
            if(typeof this.data !== 'undefined' && this.data !== null) {
                this.location = ctx.getUniformLocation(program, this.name);
                setUniform.call(this);
            }
            return this;
        };

        uniform[name].load = function(data) {
            this.data = data;
            return this;
        };

        uniform[name].header = function() {
            var header = 'uniform ' + this.type + ' ' + this.name,
                len = 0;

            if(this.type != 'sampler2D') {
                len = this.data.length / this.size;
            }

            //TODO: fix declaration for matrix
            if(len > 1 && type != 'mat4') {
                header += '[' + len + ']';
            }
            return header + ';\n';
        };

        return uniform[name];
    }


    return uniform;
}


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Texture;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uniform__ = __webpack_require__(60);


function Texture(glContext) {

    var texture = (this instanceof Texture) ? this : {},
        ctx = glContext,
        textureID = 0;

    function setTexture(name, texData) {
        var type = ctx[texture[name].type.toUpperCase()],
            format = ctx[texture[name].channel.toUpperCase()],
            width = texture[name].dim[0],
            height = texture[name].dim[1];

        texture[name].data = texData;

        ctx.bindTexture(ctx.TEXTURE_2D, texture[name].ptr);
        ctx.texImage2D(ctx.TEXTURE_2D, 0, format, width, height, 0, format, type, texData);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
        ctx.bindTexture(ctx.TEXTURE_2D, null);
    }

    function updateTexture(name, texData, offset, dim) {
        var type = ctx[texture[name].type.toUpperCase()],
            format = ctx[texture[name].channel.toUpperCase()],
            width = dim[0] || texture[name].dim[0],
            height = dim[1] || texture[name].dim[1];

        ctx.bindTexture(ctx.TEXTURE_2D, texture[name].ptr);
        ctx.texSubImage2D(ctx.TEXTURE_2D, 0, offset[0], offset[1], width, height, format, type, texData);
        ctx.bindTexture(ctx.TEXTURE_2D, null);
    }

    // TODO: Add support for texture compression
    // function compressTexture(texData) {
    //
    //     var ext = (
    //       ctx.getExtension("WEBGL_compressed_texture_s3tc") ||
    //       ctx.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
    //       ctx.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc")
    //     );
    //
    //     ctx.compressedTexImage2D(ctx.TEXTURE_2D, 0, ext.COMPRESSED_RGBA_S3TC_DXT3_EXT, texture[name].dim[0], texture[name].dim[1], 0, texData);
    //     ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);
    //     ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR);
    // }

    texture.create = function(name, type, dim, channel, data, sampler) {
        var texIndex = (texture.hasOwnProperty(name)) ? texture[name].index : textureID++;
        texture[name] = {
            name: name,
            index: texIndex,
            type: type || "float",
            dim: dim || [512, 512],
            channel: channel || "alpha",
            data: null,
            location: null,
            sampler: sampler || null,
            ptr: ctx.createTexture()
        };

        // if(data !== null && data.length)
        setTexture(name, data);

        if (texture[name].sampler === null) {
            texture[name].sampler = Object(__WEBPACK_IMPORTED_MODULE_0__uniform__["a" /* default */])(ctx).create(name, 'sampler2D', texture[name]);
        } else {
            texture[name].sampler.data = texture[name];
        }

        texture[name].link = function(program) {
            if (this.data !== null) {
                // ctx.activeTexture(ctx.TEXTURE0 + this.index);
                // ctx.bindTexture(ctx.TEXTURE_2D, this.ptr);
                // this.location = ctx.getUniformLocation(program, this.name);
                // ctx.uniform1i(this.location, this.index);
                if (typeof(this.sampler.data) == 'undefined' || this.sampler.data === null)
                    this.sampler.data = texture[name];

                this.sampler.link(program);
            }
            return this;
        }

        texture[name].load = function(texData) {
            setTexture(this.name, texData);
            return this;
        }

        texture[name].copyFromFBO = function() {
            ctx.bindTexture(ctx.TEXTURE_2D, this.ptr);
            ctx.copyTexImage2D(
                ctx.TEXTURE_2D,
                0,
                ctx.RGBA,
                0,
                0,
                this.dim[0],
                this.dim[1],
                0
            );
            ctx.bindTexture(ctx.TEXTURE_2D, null);
        }

        texture[name].update = function(texData, offset, dim) {
            updateTexture(this.name, texData, offset, dim);
            return this;
        }

        texture[name].resize = function(dim, data) {
            this.dim = dim;
            setTexture(this.name, data);
        }

        texture[name].delete = function() {
            glContext.deleteTexture(this.ptr);
        }

        texture[name].header = function() {
            if (this.name == this.sampler.name)
                return 'uniform sampler2D ' + this.sampler.name + ';\n';
            else
                return '';
        }

        return texture[name];
    }

    return texture;
}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Shader;
function Shader(glContext, glResource) {
    
    var shader = (this instanceof Shader) ? this : {},
        ctx = glContext,
        resource = glResource,
        parameters = ctx._dict || {};

    shader.vertex = {};
    shader.fragment = {};

    var shaderType = {
        vertex: ctx.VERTEX_SHADER,
        fragment: ctx.FRAGMENT_SHADER
    };

    // Convert JS functions to GLSL codes
    function toGLSL(returnType, name, fn){

        var glsl = returnType + ' ' +
            name + '(' + applyEnvParameters(fn.toString())
            .replace(
                /var\s+([\w|\d]+)\s*=\s*new\s+([\w|\d]+)\((.*)\)/g,
                function(expr, name, dtype, value){
                    var parts;
                    if(value)
                        parts = [dtype.toLowerCase(), name, '=', value];
                    else
                        parts = [dtype.toLowerCase(), name];

                    return parts.join(' ')
                }
            )
            .replace(/for\s*\(\s*var\s+/g, 'for(int ')
            .replace(/var\s/g, 'float ')
            .replace(/this./g, '')
            .replace(/\$(.*)\((.*)\)\s*(=|;)/g, "$1 $2 $3");
            // .replace(/\$(.*?)\./g, "$1 ")

        if(name == "main") {
            glsl = glsl.replace(/function.*\(\s*([\s\S]*?)\s*{/, '){') + "\n";
        } else {
            var args = glsl.match(/function.*\(\s*([\s\S]*?)\s*\)/)[1];

            if(args != "") {
                args = args.replace(/\$([\w|\d]+)_/g, "$1 ");
            }
            glsl = glsl
                .replace(/function.*\(\s*([\s\S]*?)\s*\)/, args+')') + "\n";
        }
        return glsl;
    }

    //set parameters in JS functions before converting to GLSL codes
    function applyEnvParameters(str){
        //find all $(...) and replace them with parameters
        var envParam = Object.keys(parameters);
        if(envParam.length > 0){
            var re = new RegExp("\\$\\(("+envParam.join("|")+")\\)","g");
            str = str.replace(re, function(matched){
                return parameters[matched.slice(2,matched.length-1)];
            });
        }

        // Make uniforms to be used as parameters in shaders, like $(uniformName)
        // var envUniforms = Object.keys(resource.uniform);
        // re = new RegExp("\\$\\(("+envUniforms.join("|")+")\\)","g");
        // str = str.replace(re, function(matched){
        //     return resource.uniform[matched.slice(2,matched.length-1)].data;
        // });

        return str;
    }

    function compile(shaderType, shaderSource) {
        if (shaderType !== ctx.VERTEX_SHADER && shaderType !== ctx.FRAGMENT_SHADER) {
            throw ("Error: unknown shader type");
        }
        var _shader = ctx.createShader(shaderType);
        ctx.shaderSource(_shader, shaderSource);
        ctx.compileShader(_shader);

        // Check the compile status, get compile error if any
        var compiled = ctx.getShaderParameter(_shader, ctx.COMPILE_STATUS);
        if (!compiled) {
            var lastError = ctx.getShaderInfoLog(_shader);
            console.log(shaderSource + '\n ====================================================');
            throw new Error("Error compiling shader '" + _shader + "':" + lastError);

            ctx.deleteShader(_shader);
            return null;
        }

        return _shader;
    }

    function getDeps(fn) {
        var deps = [],
            sourceCode = fn.toString(),
            shaderArgs = sourceCode.match(/function\s.*?\(([^)]*)\)/),
            args = (shaderArgs !== null && shaderArgs.length) ? shaderArgs[1] : [];
        // args = args.replace(/(?:\r\n|\r|\n|\s)/g, '');
        //
        if(args.length) {
            deps = args.split(',').map(function(arg) {
                return arg.replace(/\/\*.*\*\//, '').trim();
            }).filter(function(arg) {
                return arg;
            });
        }

        var extraDeps = getExtraDeps(sourceCode);
        if(extraDeps.length) {
            deps = deps.concat(extraDeps
            .filter(function(d){
                return deps.indexOf(d) === -1;
            }))
        }

        return deps;
    }

    function getExtraDeps(fnString) {
        var extraDeps = fnString.match(/this\.(\w+)/g);
        if(extraDeps !== null) {
            extraDeps = extraDeps.map(function(d){
                return d.slice(5);
            });
        }
        return extraDeps || [];
    }

    function declareDep(dep) {
        var res = resource.get(dep);
        if(typeof res === 'undefined')
            throw new Error('Resource/dependence "' + dep + '" is not found.');
        if(res.resourceType == 'subroutine')
            return toGLSL(res.type, res.name, res.fn);
        else
            return res.header();
    }

    function uniqueDeps(deps) {
        var names = {};
        deps.forEach(function(d, i){
            names[d] = i;
        });

        return Object.keys(names);
    }

    shader.create = function(arg, fn){
        var option = arg || {},
            name = option.name || "default",
            type = option.type || "vertex",
            deps = option.require || option.deps || [],
            precision = option.precision || "high",
            debug = option.debug || false,
            main = option.main || fn || function() {};

        var shaderSource = 'precision ' + precision + 'p float;\n';

        if(deps.length === 0) deps = uniqueDeps(getDeps(main));

        //get dependence from subroutines if any
        var extraDeps = [],
            subRoutines = [];

        deps.forEach(function(dep){
            var res = resource.get(dep);
            if(typeof res == 'undefined') {
                console.log(dep);
                throw Error ('Error! Undefined variable in shader: '+  dep.name);
            }
            if(res.resourceType == 'subroutine') {
                subRoutines.push(res.name);
                var subDeps = getExtraDeps(res.fn.toString());
                if(subDeps.length) {
                    //TODO: make this recursive to check all subroutine deps
                    subDeps.forEach(function(sdep){
                        var sres = resource.get(sdep);
                        if(sres.resourceType == 'subroutine')
                            extraDeps = extraDeps.concat(getExtraDeps(sres.fn.toString()));
                    })

                    extraDeps = extraDeps.concat(subDeps);
                }
            }
        })

        if(extraDeps.length) {
            var allDeps = extraDeps
            // .filter(function(d){
            //     return deps.indexOf(d) === -1;
            // })
            .concat(deps.filter(function(d){
                return subRoutines.indexOf(d) === -1;
            }))
            .concat(subRoutines);

            deps = uniqueDeps(allDeps);
        }


        if(Array.isArray(deps)){
            deps.forEach(function(dep){
                shaderSource += declareDep(dep);
            });
        } else if(typeof(deps) == 'object') {
            Object.keys(deps).forEach(function(resourceType){
                deps[resourceType].forEach(function(dep){
                    shaderSource += declareDep(dep);
                });
            })
        }

        shaderSource += toGLSL('void', 'main', main);
        if(debug)
            console.log(shaderSource);
        var _shader = compile(shaderType[type], shaderSource);
        _shader._shaderType = shaderType[type];
        _shader.deps = deps;
        _shader.source = shaderSource;
        shader[type][name] = _shader;
        return _shader;
    }

    return shader;
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = derive;

function derive($p, spec) {

    var derive = {},
        dataDimension = $p.uniform.uDataDim.data,
        deriveMax = $p.uniform.uDeriveCount.data,
        derivedFields = Object.keys(spec);

    var fields = $p.fields;

    var marco = "\t";

    derivedFields.forEach(function(d, i){
        var re = new RegExp("("+fields.join("|")+")","g");
        // var formula = spec[d].replace(/@([\w|\d|_]+)/g, function(matched){
        var formula = spec[d].replace(re, function(matched){
            // console.log(matched);
            var index = fields.indexOf(matched);
            return 'this.getData('  + index + ', pos.x, pos.y)';
        });
        marco += 'if (index == ' + i + ') return ' + formula + "; \n \telse ";
    });

    marco += " return 0.0;";

    $p.uniform("uOptMode", "float", 0)
        .uniform("uDeriveId", "int", 0)
        .subroutine("getDerivedValue", "float", new Function("$int_index", "$vec2_pos", marco));


    function vertexShader() {
        gl_PointSize = 1.0;

        var i, j;

        i = (this.aDataIdx+0.5) / this.uDataDim.x;
        j = (this.aDataIdy+0.5) / this.uDataDim.y;

        this.vResult = this.getDerivedValue(this.uDeriveId, vec2(i, j));
        if(this.uFilterFlag == 1) {
            if(texture2D(this.fFilterResults, vec2(i, j)).a == 0.0)
                this.vResult = 0.0;
        }
        var x, y;
        if(this.uOptMode == 0.0){
            x = 0.5;
            y = 0.5;
        } else {
            x = i * 2.0 - 1.0;
            y = j * 2.0 - 1.0;
        }

        gl_Position = vec4(x, y, 0.0, 1.0);
    }

    function fragmentShader() {
        if(this.vResult == 0.0) discard;
        if(this.uOptMode > 0.0 || this.vResult >= 0.0)
            gl_FragColor = vec4(0.0, 0.0, 1.0, this.vResult);
        else
            gl_FragColor = vec4(-1.0, this.vResult, 0.0, 0.0);
    }

    var vs = $p.shader.vertex(vertexShader),
        fs = $p.shader.fragment(fragmentShader),
        gl = $p.createProgram("derive", vs, fs);

    // gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdx.location, 0);
    // gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataValx.location, 0);
    // gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
    // gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);

    function _execute() {

        var gl = $p.program("derive");
        $p.framebuffer.enableRead("fFilterResults");
        $p.bindFramebuffer("fDerivedValues");
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.DEPTH_TEST);
        gl.enable( gl.BLEND );
        gl.blendFunc( gl.ONE, gl.ONE );
        gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdx.location, 0);
        gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataValx.location, 0);
        gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
        gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);

        // $p.uniform.uDeriveCount = deriveFieldCount;
        var deriveDomains = [];
        derivedFields.forEach(function(d, i){
            $p.uniform.uDeriveId = i;
            gl.clearColor( 0.0, 0.0, 0.0, 0.0 );
            gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
            gl.viewport(0, 0, 1,  1);

            var result = new Float32Array(8);

            gl.blendEquation(gl.MAX_EXT);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);
            // gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.FLOAT, max);

            gl.viewport(1, 0, 1,  1);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);

            gl.blendEquation(gl.MIN_EXT);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);
            gl.readPixels(0, 0, 2, 1, gl.RGBA, gl.FLOAT, result);

            var minValue = (result[4] < 0) ? result[5] : result[7],
                maxValue = (result[2] > 0) ? result[3] : result[1];
            deriveDomains[i] = [minValue, maxValue];

            // deriveDomains[i] = [Math.min(min[0], min[3]), Math.max(max[0], max[3])];
        });
        gl.viewport(0, 0, dataDimension[0], dataDimension[1]*deriveMax);
        gl.disable( gl.BLEND );
        gl.clearColor( 0.0, 0.0, 0.0, 0.0 );
        gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

        $p.uniform.uOptMode = 1.0;

        derivedFields.forEach(function(d, i){
            $p.uniform.uDeriveId = i;
            gl.viewport(0, dataDimension[1]*i, dataDimension[0], dataDimension[1]);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);
        });

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        return deriveDomains;
    }

    derive.execute = function(spec) {
        var derivedFields = Object.keys(spec);
        var newDerivedDomains = _execute();
        if(!$p._update) {
            newDerivedDomains.forEach(function(d, i) {
                var fieldId = $p.fields.indexOf(derivedFields[i]);
                if(fieldId === -1) {
                    $p.fields.push(derivedFields[i]);
                    fieldId = $p.fields.indexOf(derivedFields[i]);
                    $p.deriveCount += 1;
                }

                $p.fieldDomains[fieldId] = d;
                $p.fieldWidths[fieldId] = d[1] - d[0] + 1;
            });

            $p.uniform.uFieldDomains.data = $p.fieldDomains;
            $p.uniform.uFieldWidths.data = $p.fieldWidths;
        }
    }

    derive.result = function(arg) {
        var options = arg || {},
            offset = options.offset || [0, 0],
            resultSize = options.size || $p.dataDimension[0]* $p.dataDimension[1],
            fid = options.fieldId || options.deriveFieldId || 0,
            rowSize = Math.min(resultSize, $p.dataDimension[0]),
            colSize = Math.ceil(resultSize/$p.dataDimension[0]);

        var result = new Float32Array(rowSize * colSize * 4);
        gl.readPixels(0, dataDimension[1]*fid, rowSize, colSize, gl.RGBA, gl.FLOAT, result);
        return result.filter(function(d, i){ return i%4===3;} ); //return channel alpha in rgba
    }

    return derive;
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reveal;

function reveal($p) {
    var viewport = $p.viewport,
        padding = $p.padding;

    $p.uniform('uRevealMode', 'int', 1)
        .framebuffer("offScreenFBO", "float", $p.viewport)
        .framebuffer("visStats", "float", [1, 1]);

    var aViewX = new Float32Array($p.viewport[0]).map((d, i) => i);
    var aViewY = new Float32Array($p.viewport[1]).map((d, i) => i);

    $p.attribute("aViewX", "float", aViewX)
        .attribute("aViewY", "float", aViewY);

    $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aViewX.location, 0);
    $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aViewY.location, 1);

    var vs = $p.shader.vertex(function(){
        var i, j;
        i = (this.aViewX+0.5) / this.uViewDim.x;
        j = (this.aViewY+0.5) / this.uViewDim.y;
        this.vColorRGBA = texture2D(this.offScreenFBO, vec2(i, j));
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    });

    var fs = $p.shader.fragment(function() {
        gl_FragColor = this.vColorRGBA;
    });

    $p.program("post-processing", vs, fs);

    var vs2 = $p.shader.vertex(function () {
         gl_Position = vec4(this._square, 0, 1);
    });

    var fs2 = $p.shader.fragment(function() {
        var x, y, a;
        var value = new Vec4();
        x = (gl_FragCoord.x+0.5) / this.uViewDim.x;
        y = (gl_FragCoord.y+0.5) / this.uViewDim.y;
        value = texture2D(this.offScreenFBO, vec2(x, y));

        if(value.a == 0.0) discard;
        // a = pow(((value.a - this.uDefaultAlpha) / (this.uMaxRGBA.a -this.uDefaultAlpha)), 0.33) * 0.85 + 0.15;
        a = pow((value.a / this.uMaxRGBA.a), 0.33) * 0.9 + 0.1;
        // a = value.a / this.uMaxRGBA.a;

        if(this.uRevealMode == 0) {
            gl_FragColor = vec4(this.uDefaultColor*a, a);
        } else {
            gl_FragColor = vec4(texture2D(this.tColorGraident, vec2(1.-a, 1.0)).rgb*this.uDefaultAlpha, this.uDefaultAlpha);
        }
    });

    $p.program("vis-render", vs2, fs2);

    return function(options) {
        var gl,
            viewIndex = options.viewIndex,
            viewDim = options.dim,
            offset = options.offset || [0, 0],
            padding = options.padding || {left: 0, right: 0, left: 0, right:0};

        if(!$p._update) {
            $p.framebuffer("visStats", "float", [1, 1]);
            gl = $p.program("post-processing");
            $p.framebuffer.enableRead("offScreenFBO");
            $p.bindFramebuffer("visStats");
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aViewX.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aViewY.location, 1);
            gl.clearColor( 0.0, 0.0, 0.0, 0.0 );
            gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
            gl.disable(gl.CULL_FACE);
            gl.disable(gl.DEPTH_TEST);
            gl.enable( gl.BLEND );
            gl.blendFunc( gl.ONE, gl.ONE );
            gl.blendEquation(gl.MAX_EXT);
            gl.viewport(0, 0, 1, 1);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0,  viewDim[0], viewDim[1]);

            var max = new Float32Array(4);
            gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.FLOAT, max);
            if(max[3] == 0) {
                max[3] = Math.sqrt($p.dataSize) * Math.log2($p.dataSize);
            }
            $p.views[viewIndex].maxRGBA = max;
        }

        $p.uniform.uMaxRGBA = $p.views[viewIndex].maxRGBA;

        $p.bindFramebuffer(null);
        gl = $p.program("vis-render");
        gl.ext.vertexAttribDivisorANGLE($p.attribute._square.location, 0);
        $p.framebuffer.enableRead("offScreenFBO");

        gl.viewport(
            offset[0] + padding.left,
            offset[1] + padding.bottom,
            viewDim[0] - padding.left - padding.right,
            viewDim[1] - padding.top - padding.bottom
        );
        // gl.blendEquation(gl.FUNC_ADD);
        gl.disable( gl.BLEND );
        // gl.clearColor( 0.0, 0.0, 0.0, 0.0 );
        // gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = interact;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metavis_brush__ = __webpack_require__(150);


function interact($p, options) {
    var viewTags = options.view || [$p.views[0].id];

    if(!Array.isArray(viewTags)) viewTags = [viewTags];

    var actions = options.actions || options.events || [],
        condition = options.condition || {},
        callback = options.callback || function() {};

    if($p._update) return;

    viewTags.forEach(function(viewTag){
        var vis = $p.views.filter(v=>v.id == viewTag)[0];

        if(!Array.isArray(actions)) {
            actions = [actions];
        }
        var vmap = vis.vmap,
            p = vis.padding || $p.padding,
            w = vis.width - p.left - p.right,
            h = vis.height - p.top - p.bottom;

        var interactor = vis.chart.svg.append("g")
                .attr("class", "selector")

        var rect = interactor.append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", w)
          .attr("height", h)
          .attr("fill-opacity", 0)
          .attr("stroke", "none");

        var svg = interactor.svg,
            box = rect.svg.getBoundingClientRect();

        var sx, sy,
            tx = 0, ty = 0,
            dy = 1;

        function updatePos(e) {
            tx += (e.clientX - sx) / dy;
            ty += (e.clientY - sy) / dy;
            sx = e.clientX;
            sy = e.clientY;
            $p.uniform.uPosOffset.data = [tx / w, ty / h];
        }

        function getSelection(e) {
            var dx = e.clientX - box.left;
            var dy = e.clientY - box.top;
            var selection = {};
            if(vmap.x) {
                selection[vmap.x] = [vis.chart.x.invert(dx)];
            }
            if(vmap.y) {
                selection[vmap.y] = [vis.chart.y.invert(dy)];
            }
            return selection;
        }

        actions.forEach(function(action){
            if(action == 'brush') {
                svg.style.cursor = "crosshair";
                var brushOptions = {
                    container: interactor,
                    width: w,
                    height: h
                };

                if(!Array.isArray(vmap.x) && !Array.isArray(vmap.y)) {
                    if(!condition.x && !condition.y) {
                        condition.x = condition.y = true;
                    }
                    brushOptions.brush = function(d) {
                        var selection = {};
                        if(vmap.x && d.x) selection[vmap.x] = d.x;
                        if(vmap.y && d.y) selection[vmap.y] = d.y.reverse();
                        callback(selection);
                    }
                    if(condition.x && typeof(vis.chart.x.invert) == 'function')
                        brushOptions.x = vis.chart.x.invert;

                    if(condition.y && typeof(vis.chart.y.invert) == 'function')
                        brushOptions.y = vis.chart.y.invert

                    new __WEBPACK_IMPORTED_MODULE_0__metavis_brush__["a" /* default */](brushOptions);
                }

                var dims = ['x', 'y'],
                    selections = {};

                dims.forEach(function(dim){
                    if(Array.isArray(vmap[dim]) && Array.isArray(vis.chart[dim])){
                        var axisDist = (dim == 'x') ? h : w,
                            selectors = vis.chart.svg.append('g');

                        axisDist =  axisDist / (vmap[dim].length-1);

                        vmap[dim].forEach(function(d, i) {

                            var axisSelect = selectors.append("g");
                            if(dim == 'x') {
                                brushOptions.height = axisDist * 0.2;
                                axisSelect.translate(0, axisDist * (i - 0.1));
                                brushOptions.brush = function(range) {
                                    selections[d] = range[dim];
                                    callback(selections);
                                }
                            } else {
                                brushOptions.width = axisDist * 0.2;
                                axisSelect.translate(axisDist * (i - 0.1), 0);
                                brushOptions.brush = function(range) {
                                    selections[d] = range[dim].reverse();
                                    callback(selections);
                                }
                            }
                            brushOptions.container = axisSelect;
                            brushOptions[dim] = vis.chart[dim][i].invert;

                            new __WEBPACK_IMPORTED_MODULE_0__metavis_brush__["a" /* default */](brushOptions);
                        });
                    }
                })
            } else if(action == 'zoom') {
                svg.onmousewheel = function(e) {
                    sx = e.clientX - box.left;
                    sy = e.clientY - box.top;
                    var ny =  dy * Math.exp(e.deltaY / 1000);
                    var delta = ny - dy;
                    dy = ny;
                    $p.uniform.uPosOffset.data = [-sx * delta / w, -sy * delta / h];
                    $p.uniform.uVisScale.data = [dy, dy];

                    callback();
                }

            } else if(action == 'pan') {
                svg.style.cursor = 'move';
                svg.onmousedown = function(e) {
                    sx = e.clientX;
                    sy = e.clientY;
                    svg.style.cursor = 'move';

                    svg.onmousemove = function(e) {
                        tx += (e.clientX - sx) / dy;
                        ty += (e.clientY - sy);

                        callback();
                    }

                    svg.onmouseup = function(e) {
                        updatePos(e);
                        svg.style.cursor = 'default';
                        svg.onmousemove = null;
                        svg.onmouseup = null;
                    }
                }

            } else if(action == 'click') {
                svg.onclick = function(e) {
                    callback(getSelection(e));
                }
            } else if(action == 'hover') {
                svg.onmouseover = function(e) {
                    callback(getSelection(e));
                    svg.onmousemove = function(e) {
                        callback(getSelection(e));
                    }

                    // svg.onmouseout = function(e) {
                    //     updatePos(e);
                    //     svg.style.cursor = 'default';
                    //     svg.onmousemove = null;
                    //     svg.onmouseover = null;
                    // }
                }
            }
        })
    })
}


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Svg;
function setAttr(elem, attr) {
    for( var key in attr ){
        var value = attr[key],
            c = key.match(/[A-Z]/);
        if(c !== null) key = key.replace(c[0], "-"+c[0].toLowerCase())
        elem.setAttribute(key, value);
    }
}

function setStyle(elem, style) {
    for( var key in style ){
        var value = style[key],
            c = key.match(/[A-Z]/);
        if(c !== null) key = key.replace(c[0], "-"+c[0].toLowerCase())
        elem.style[key] = value;
    }
}

function Svg(arg){
    'use strict';
    var self = (this instanceof Svg) ? this: {},
        option = arg || {},
        type = option.type || 'svg',
        svgNS = 'http://www.w3.org/2000/svg',
        svg = document.createElementNS(svgNS, type),
        width = option.width || 400,
        height = option.height || 300,
        parent = option.parent || option.container || this.parent,
        attr = option.attr || {},
        style = option.style || {},
        padding = option.padding || {left: 0, right: 0, top: 0, bottom: 0};

    if(type === 'svg') {
        var defaultAttr = {
            width   : width + padding.left + padding.right,
            height  : height + padding.top + padding.bottom,
            viewBox : [0, 0, width + padding.left + padding.right , height + padding.top + padding.bottom].join(' '),
            preserveAspectRatio: 'none'
        };
        setAttr(svg, defaultAttr);
    }

    self.innerWidth = function() {
        return width;
    }

    self.innerHeight = function() {
        return height;
    }

    self.padding = function() {
        return padding;
    }

    if(style) setStyle(svg, style);
    if(attr) setAttr(svg, attr);

    if(parent) {
        parent = (typeof parent == "string") ? document.getElementById(parent) : parent;
        parent.appendChild(svg);
    }

    self.svg = svg;
    self.parent = parent;

    if(self instanceof Svg)
        publicMethods(Svg.prototype);
    else
        publicMethods(self);

    return self;
};

function publicMethods(context) {
    context.append = function(type, attr, style) {
        var options = {};
        options.parent = this.svg;
        options.type = type;
        options.attr = attr;
        options.style = style;
        return new Svg(options);
    };

    context.remove = function() {
        this.parent.removeChild(this.svg);
    };

    context.attr = function(a, v) {
        if(typeof(a) == "object")
            setAttr(this.svg, a);
        else
            this.svg.setAttribute(a, v);

        return this;
    }

    context.Attr =  function(a, v) {
        setAttr(this.svg, a);
        return this;
    }

    context.Style =  function(a, v) {
        setStyle(this.svg, a);
        return this;
    }

    context.style = function(a, v) {
        if(typeof(a) == "object")
            setStyle(this.svg, a);
        else
            this.svg.style[a] = v;

        return this;
    }

    context.css = context.style;

    context.text = function(str){
        this.svg.appendChild(document.createTextNode(str));
        return this;
    };

    context.translate = function(x, y) {
        var p = this.svg.getAttribute("transform") || "";
        this.svg.setAttribute("transform", p + "translate(" + [x,y].join(",") + ") ");
        return this;
    };

    context.on = function(event, callback) {
        this.svg.addEventListner(event, callback);
        return this;
    }

    return context;
}


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = axis;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scale__ = __webpack_require__(68);


function axis(arg) {

    var option      = arg || {},
        svg         = option.container || option.parent,
        dim         = option.dim || "x",
        color       = option.color || "#000",
        position    = option.position || 0,
        align       = option.align || "",
        scale       = option.scale || "linear",
        exponent    = option.exponent || 1,
        metric      = option.metric || null,
        domain      = option.domain || [0,1],
        width       = option.width || svg.innerWidth(),
        height      = option.height || svg.innerHeight(),
        padding     = option.padding || svg.padding() || {left: 0, right: 0, top: 0, bottom: 0},
        range       = option.range || (dim == "x") ? [0, width] : [height, 0],
        styles      = {stroke: color, 'stroke-width': 1},
        ticks       = option.ticks,
        tickLength  = option.tickLength || 6,
        tickPosition = option.tickPosition || false,
        tickInterval= option.tickInterval || "auto",
        tickAlign = option.tickAlign || "center",
        skipLast = option.skipLast || false,
        tickFormat  = option.tickFormat || null,
        grid        = option.grid,
        format      = option.format || function(_){return _;},
        visable    = option.visable || true,
        domainIntervals,
        labelPos    = null,
        labelAngle  = option.labelAngle || 0,
        X = [],
        Y = [];

    if(typeof(ticks) != "number") {
        ticks = (dim == "x") ? Math.ceil(width/50) : Math.ceil(height/50);
    }
    var tickLabelAlign = option.tickLabelAlign || "end";
    switch (align) {
        case "left" || "center":
            labelPos = option.labelPos || {x: -tickLength/2, y: -5};
            tickLabelAlign =  option.tickLabelAlign ||"end";
            break;
        case "right":
            labelPos = {x: tickLength, y: -5};
            tickLabelAlign = option.tickLabelAlign || "start";
            if(!tickPosition) tickPosition = [ tickLength/2, 0];
            break;
        case "top":
            labelPos = {x: 0, y: 0};
            tickLabelAlign = "middle";
            if(!tickPosition) tickPosition = [0, -tickLength];
            break;
        case "bottom" || "middle":
            labelPos = option.labelPos || {x: 0, y: -tickLength*3};
            tickLabelAlign =  option.tickLabelAlign || "middle";
            break;
        default:
            labelPos = option.labelPos || option.labelPosition || {x: 0, y: 0};
            break;
    }
    if(!tickPosition) tickPosition = [0,0];

    function getTickInterval(){
        var vDomain = Math.abs(domain[1] - domain[0]),
            intv = vDomain / ticks,
            pow = Math.ceil(Math.log10(intv)),
            intv = intv / Math.pow(10, pow);

        if(intv > 0.2 && intv <= 0.25){
            intv = 0.25;
        } else if(intv > 0.7 && intv <= 0.75) {
            intv = 0.75;
        } else {
            intv = Math.ceil(intv * 10) / 10;
        }
        return intv * Math.pow(10, pow);
    }


    if (scale == "categorical" || scale == "ordinal") {
        domainIntervals = function() {
            var len = domain.length,
                step = Math.ceil(len / ticks),
                intervals = [],
                i;
            for(i = 0; i < len; i += step) {
                intervals.push(domain[i])
            }
            // if(intervals[i] != domain[len-1]) intervals.push(domain[len-1]);

            return intervals;
        };
    } else {
        var intv;

        if(tickInterval == "auto"){
            intv = getTickInterval();

        } else {
            if(typeof(tickInterval) == "number") {
                intv = tickInterval;
            } else {
                // intv = Math.abs(domain[1] - domain[0]) / ticks;
                intv = getTickInterval();
                domain[0] = intv * Math.floor(domain[0]/intv);
                domain[1] = intv * Math.ceil(domain[1]/intv);
            }
        }

        domainIntervals = function() {
            var di = [];

            if(domain[0] > domain[1]) {
                domain[0] += intv;
                for(var i = domain[0]; i > domain[1]; i=i-intv)
                    di.push(i);
            } else {
                for(var i = domain[0]; i < domain[1]; i=i+intv)
                    di.push(i);
            }

            if(di[di.length-1]!=domain[1] && !isNaN(domain[1]) && !skipLast){

                if((domain[1] - di[di.length-1]) < 0.4 * intv)
                    di[di.length-1] = domain[1];
                else
                    di.push(domain[1]);
            }
            return di;
        }
    }

    if (metric === null) {

        var scaleOptions = {
            align: tickAlign,
            type: scale,
            domain: domain,
            range: range
        };

        if(scale == "power") {
            scaleOptions.exponent = exponent;
        }

        metric = Object(__WEBPACK_IMPORTED_MODULE_0__scale__["a" /* default */])(scaleOptions)
    } else {
        domain = metric.domain();
    }

    var axis = svg.append("g");

    if(dim == 'x') {
        if(!position && align) {
            position = [0,height/2,height];
            position = position[["top", "middle", "bottom"].indexOf(align)];
        }
        Y[0] = Y[1] = position;
        X[0] = 0;
        X[1] = Math.abs(range[1] - range[0]);
    } else {
        if(!position && align) {
            position = [0, width/2, width];
            position = position[["left", "center", "right"].indexOf(align)];
        }
        X[0] = X[1] = position;
        Y[0] = 0;
        Y[1] = Math.abs(range[1] - range[0]);
    }

    metric.show = metric.axis = function() {
        axis.append("g")
            .append("line")
            .Attr({x1: X[0], x2: X[1], y1: Y[0], y2: Y[1]})
            .Style(styles);

        var di = domainIntervals();

        for(var i = 0; i < di.length; i++) {
            var x1,x2,y1,y2;
            if(dim == 'x'){
                x1 = x2 = metric(di[i]) + tickPosition[0];
                y1 = position + tickPosition[1] + tickLength;
                y2 = y1 - tickLength;
            } else {
                if(scale == "categorical" || scale == "ordinal")
                    y1 = y2 = height - metric(di[i]);
                else
                    y1 = y2 = metric(di[i]) + tickPosition[1];
                x1 = position + tickPosition[0] ;
                x2 = x1 - tickLength;
            }

            var svgTicks = axis.append("g");
            svgTicks.append("line", {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2,
            }, styles);


            // if (dim == 'x') tickLabelAlign = "middle";
            // if (dim == 'x' && labelAngle) tickLabelAlign = "end";

            var tickLabel = svgTicks.append("text")
                .Attr({
                    x: x2 + labelPos.x,
                    y: y2 - labelPos.y,
                    // class: "labels",
                    class: "i2v-axis-label",
                    "font-size": "0.9em",
                    textAnchor: tickLabelAlign
                });
            if(labelAngle) tickLabel.attr("transform", "rotate(" + [labelAngle, (x2 + labelPos.x), (y2 - labelPos.y)].join(",")+")");

            var labelText = (typeof(tickFormat) == "function") ? format(tickFormat(di[i])) : format(di[i]) ;
            // tickLabel.appendChild( document.createTextNode(labelText) );
            tickLabel.text(labelText);

            if(grid) {
                var gx1, gx2, gy1, gy2;
                if(dim == 'x'){
                    gx1 = gx2 = metric(di[i]);
                    gy1 = 0;
                    gy2 =height;
                } else {
                    gy1 = gy2 = metric(di[i]);
                    gx1 = 0;
                    gx2 = width;
                }
                axis.append("line",
                    {
                        x1: gx1,
                        x2: gx2,
                        y1: gy1,
                        y2: gy2,
                        class: "grid-lines"
                    },
                    {
                        "stroke": color,
                        // "stroke-width": 0.5,
                        "stroke-opacity": 0.33
                    });
            }
        }
        axis.translate(padding.left, padding.top);
        return axis;
    };

    metric.remove = function() {
        axis.remove();
    }

    if(visable) {
        metric.svg = metric.show();
    }

    return metric;
};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;
function Scale(arg) {
    var option = arg || {},
        align = option.align || 'center',
        type = option.type || 'linear',
        domain = option.domain || [0,1],
        margin = option.margin || 0,
        exponent = option.exponent || 1,
        range = option.range || [0,1];

    function getInterpolateFunction() {
        //intercepts and slopes for domain and range
        var d0 = -domain[0] / (domain[1] - domain[0]),
            d1 = 1 / (domain[1] - domain[0]),
            r0 = range[0],
            r1 = range[1] - range[0];

        if(type == "linear") {
            return function(v) { return r0 + (d0 + v * d1) * r1 };
        } else if(type == "power") {
            d0 = -Math.pow(-d0, exponent);
            d1 = Math.pow(d1, exponent);
            return function(v) { return r0 + (d0 + Math.pow(v, exponent) * d1) * r1 };
        } else if (type == "log") {
            exponent = option.exponent || 10;
            d0 = -(Math.log(-d0) / Math.log(exponent));
            d1 = (Math.log(d1) / Math.log(exponent));

            return function(v) { return r0 + (d0 + Math.log(v) / Math.log(exponent) * d1) * r1 };

        } else if(type == "ordinal" || type == "categorical") {
            return function(v) {
                if(align == 'outer')
                    return r0 + (domain.indexOf(v)) / (domain.length-1) * r1;
                else
                    return r0 + (domain.indexOf(v)+0.5) / domain.length * r1;
            };
        } else {
            return function(v) { return v };
        }
    }

    var scale = getInterpolateFunction();

    scale.interval = function(ticks) {
        if (type == "ordinal" || type == "categorical") {
            return (1 / domain.length * Math.abs(range[1] - range[0]));
        } else {
            var s = Math.pow(10, Math.floor(Math.log10(Math.abs(range[1] - range[0])))-1);
            return Math.floor( Math.abs(range[1] - range[0]) / (ticks * s) )  * s;
        }
    };

    scale.domainLength = function() {
        if(type == "linear")
            return Math.abs(domain[1] - domain[0]);
        else if(type == "ordinal" || type == "categorical")
            return domain.length;
    };

    scale.rangeLength = function() {
        return Math.abs(range[1] - range[0]);
    };

    scale.invert = function(r) {
        if(type == "linear") {
            return domain[0] + (r - range[0]) / (range[1] - range[0]) * (domain[1] - domain[0]);
        } else if(type == "ordinal" || type == "categorical") {
            var intv = intv = r / scale.rangeLength();
            return domain[Math.floor(intv * (domain.length))];
        }
    }

    scale.domain = function() {
        return domain;
    }

    return scale;
};


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = printformat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrays__ = __webpack_require__(153);


function printformat(spec) {
    return function(value){
        if(typeof value !== "number") return value;
        var ret,
            convert,
            numericSymbols = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M','G', 'T', 'P', 'E', 'Z', 'Y'],
            n = Object(__WEBPACK_IMPORTED_MODULE_0__arrays__["a" /* seq */])(-24,24,3),
            i = numericSymbols.length-1,
            parts,
            precision = spec.match(/\d+/)[0] || 3,
            number = Number(value),
            exp,
            suffix;

        if(spec[spec.length-1] == 's')
            precision--;

        parts = number.toExponential(precision).toString().match(/^(-{0,1})(\d+)\.?(\d*)[eE]([+-]?\d+)$/);
        exp = parseInt(parts[4]) || 0;

        while (i--) {
            if (exp >= n[i]) {
                if(i==7 && (exp-n[i]) > 1) {
                    // console.log(exp-n[i]);
                    suffix = numericSymbols[i+1];
                    exp -= n[i+1];
                    break
                } else {
                    suffix = numericSymbols[i];
                    exp -= n[i];
                    break;
                }
            }
        }
        ret = parseFloat(parts[1] + parts[2] + '.' + (parts[3]||0) + 'e' + exp.toString());
        return ret.toString() + suffix;
    }
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p6_solo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p6_solo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p6_solo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_dragonfly__ = __webpack_require__(29);




const ajax = __WEBPACK_IMPORTED_MODULE_0_p6__["a" /* default */].ajax;

function loadData(args, callback) {
    const URL =  args.path || args.folder;
    var datafiles = [
            {url: URL + "/dragonfly-msg-stats", dataType: "text"},
            {url: URL + "/dragonfly-router-stats", dataType: "text"},
            {url: URL + "/dragonfly-router-traffic", dataType: "text"}
        ];


    if(args.hasOwnProperty('jobAllocation')) {
        var jobFile = args.jobAllocation || 'workloads.conf';
        datafiles.push({url: URL + '/' + jobFile, dataType: "text"});
        
    }

    return ajax.getAll(datafiles).then(function(text){
        return new Promise(function(resolve, reject) {
            return resolve(text);
        })
    })
}



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6_solo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6_solo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_p6_solo__);


function transform(inputData) {
    var terminals = Object(__WEBPACK_IMPORTED_MODULE_0_p6_solo__["pipeline"])().aggregate({
        $group: 'router_id',
        $reduce: {
            terminals: {$data: '*'}
        }
    })
    .execute(inputData.terminals);

    var localLinks = Object(__WEBPACK_IMPORTED_MODULE_0_p6_solo__["pipeline"])().aggregate({
        $group: 'router_id',
        $reduce: {
            router_rank: {$first: 'router_rank'},
            group_id: {$first: 'group_id'},
            local_links: {$data: '*'}
        }
    })
    .execute(inputData.localLinks);

    var globalLinks = Object(__WEBPACK_IMPORTED_MODULE_0_p6_solo__["pipeline"])().aggregate({
        $group: 'router_id',
        $reduce: {
            router_rank: {$first: 'router_rank'},
            group_id: {$first: 'group_id'},
            global_links: {$data: '*'}
        }
    })
    .execute(inputData.globalLinks);
    console.log(terminals, globalLinks);
    var routers = Object(__WEBPACK_IMPORTED_MODULE_0_p6_solo__["join"])(terminals, localLinks);

    if(globalLinks.length == routers.length) {
        routers = Object(__WEBPACK_IMPORTED_MODULE_0_p6_solo__["join"])(routers, globalLinks);
    }

    routers.forEach(function(router, ri){
        router.local_traffic = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"].sum(router.local_links.map((d)=>(d.traffic)));
        router.local_saturation = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"].sum(router.local_links.map((d)=>(d.sat_time)));
        router.terminal_traffic = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"].sum(router.terminals.map((d)=>(d.data_size)));
        router.terminal_saturation = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"].sum(router.terminals.map((d)=>(d.busy_time)));
        router.job_id = router.terminals[0].job_id;
        if(!router.hasOwnProperty('global_links')) {
            router.global_links = inputData.globalLinks.filter(d=>d.router_id == ri);
        } 
        router.global_traffic = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"].sum(router.global_links.map((d)=>(d.traffic))) || 0;
        router.global_saturation = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"].sum(router.global_links.map((d)=>(d.sat_time))) || 0;
        router.global_links.forEach(function(link, li){
            link.router_port = li;
        });

        router.local_links.forEach(function(link, li){
            link.router_port = li;
        });

    });

    // console.log(routers)
    return routers;
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circularVis;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6_solo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6_solo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_p6_solo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hc5__ = __webpack_require__(73);



const METRICS = {
    global_links: {
        traffic: '$sum',
        sat_time: '$sum'
    },
    local_links: {
        traffic: '$sum',
        sat_time: '$sum'
    },
    terminals: {
        terminal_id: "$addToSet",
        router_port: "$first",
        router_rank: "$first",
        avg_hops: "$avg",
        sat_time: "$sum",
        data_size: "$sum",
        packets_finished: "$sum",
        avg_packet_latency: "$avg",
    }
};

const LABLE_PREFIX = {
    router_rank: 'router ',
    group_id: 'group '
}

const HIST_METRICS = ['group_id',  'global_traffic', 'local_traffic', 'terminal_traffic', 'global_saturation', 'local_saturation', 'terminal_saturation'];

function getConnections(data, spec) {
    var partTotal = data.length || 0,
        entity = Object.keys(spec)[0] || spec,
        metrics = Object.keys(spec[entity]) || spec[entity] || [],
        aggrLinks = new Array(partTotal),
        aggrNodeMap = [];

    data.forEach(function(d, di){
        aggrLinks[di] = new Array(partTotal);

        for(var dj = 0; dj < partTotal; dj++) {
            aggrLinks[di][dj] = {};
            aggrLinks[di][dj][entity] = [];
        }
        d.routers.forEach(function(item){
            aggrNodeMap[item.router_id] = di;
        });
    })
    data.forEach(function(d, di){
        d.routers.forEach(function(item){
            item[entity].forEach(function(e){
                var src = aggrNodeMap[e.router_id],
                    dest = aggrNodeMap[e.target_router];
                if(!isNaN(src) && !isNaN(dest))
                    aggrLinks[src][dest][entity].push(e);
            });
        })
    })
    aggrLinks.forEach(function(links, li){
        links.forEach(function(link, lj) {
            metrics.forEach(function(metric){
                var opt = spec[entity][metric].slice(1) || 'sum';
                if(typeof __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"][opt] === 'function') {
                    var values = aggrLinks[li][lj][entity].map(function(d){return d[metric]});
                    aggrLinks[li][lj][metric] = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"][opt].call(null, values) || 0;
                    aggrLinks[li][lj].count = values.length;
                }
            })
        })
    })
    return aggrLinks;
}

function circularVis(config, specification, data) {
    var spec =  specification.slice();
    // console.log('SPEC((((()))))', spec);
    // console.log(data);
    var entity = spec[0].project || 'global_links',
        aggrAttr = spec[0].aggregate || 'router_rank',
        aggrSpec = {},
        binMax = spec[0].binMax || 11;

    var createHistogram = (HIST_METRICS.indexOf(aggrAttr) != -1);

    if (spec[0].filter && spec[0].filter.group_id && (spec[0].filter.group_id[1] - spec[0].filter.group_id[0] < binMax)) {
        createHistogram = false;
    }

    var proc = Object(__WEBPACK_IMPORTED_MODULE_0_p6_solo__["pipeline"])();

    if(spec[0].filter)
        proc.match(spec[0].filter);

    if( createHistogram) {
        aggrSpec = {};
        aggrSpec.$bin = {};
        aggrSpec.$bin[aggrAttr] = binMax;
    } else {
        aggrSpec = {};
        aggrSpec.$group = aggrAttr;
    }
    aggrSpec.$collect = {routers: {$data: '*'}};
    const visType = ['bar', 'bar', 'heatmap', 'circle'];

    proc.aggregate(aggrSpec);
    var result = proc.execute(data);

    if(createHistogram) {
        result.forEach(function(res){
            var max = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"].max(res.routers.map(function(d){
                return (aggrAttr != 'group_id') ? d3.format('.3s')(d[aggrAttr]) : d[aggrAttr];
            }));
            var min = __WEBPACK_IMPORTED_MODULE_0_p6_solo__["arrays"].min(res.routers.map(function(d){
                return (aggrAttr != 'group_id') ? d3.format('.3s')(d[aggrAttr]) : d[aggrAttr];
            }));
            res[aggrAttr] = min + "-" + max;
        })
    }

    var connSpec = {};
    connSpec[entity] = METRICS[entity];
    spec[0].data = getConnections(result, connSpec);
    spec[0].type = 'link';
    spec[0].size = Object.keys(spec[0].vmap).length;
    
    spec.slice(1).forEach(function(s){
        if(!s.vmap) return;
        var entity = s.project,
            aggrAttr = s.aggregate,
            metrics = s.metrics || {$collect: METRICS[entity]};

        metrics.$group = s.aggregate;
        s.data = result.map(function(c, ci){
            var cData = []
            c.routers.forEach(function(router, ri){
                cData = cData.concat(router[entity]);
            });
            if(s.aggregate) {
                return (cData.length) ? Object(__WEBPACK_IMPORTED_MODULE_0_p6_solo__["aggregate"])(cData, metrics) : [];
            } else {
                return cData;
            }
        });
        // console.log(s.data);
        if(!s.hasOwnProperty('type')) {
            s.type = visType[Object.keys(s.vmap).length-1];            
        }
        s.size = Object.keys(spec[0].vmap).length;
    })

    if(spec[spec.length-1].type !== 'text') {
        var labels = result.map(function(d){return d[aggrAttr]});
        spec.push({
            type: 'text',
            data: labels,
            size: 1,
            prefix: LABLE_PREFIX[aggrAttr] || ''
        });
    }

    return Object(__WEBPACK_IMPORTED_MODULE_1_hc5__["b" /* default */])({
        config: config,
        layers: spec
    });
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_main__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_colorlegend__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_colorlegend__["a"]; });


/* harmony default export */ __webpack_exports__["b"] = (__WEBPACK_IMPORTED_MODULE_0__src_main__["a" /* default */]);


var root = typeof self == 'object' && self.self === self && self ||
           typeof global == 'object' && global.global === global && global ||
           this;

root.hc5 = __WEBPACK_IMPORTED_MODULE_0__src_main__["a" /* default */];


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)))

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapColor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_scale__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale_chromatic__ = __webpack_require__(40);



function mapColor(colors, colorDomain) {
    var getColor;
    if(typeof colors == 'function') {
        getColor = colors;
    } else if(typeof colors == 'string') {
        var getRange = d3.scale.linear().domain(colorDomain).range([0, 1]);
        getColor = function(value) {
            if(typeof __WEBPACK_IMPORTED_MODULE_1_d3_scale_chromatic__['interpolate' + colors] == 'function') {
                return __WEBPACK_IMPORTED_MODULE_1_d3_scale_chromatic__['interpolate' + colors](getRange(value));
            } else {
                return '#000000';
            }
        }
        getColor.domain = function(d) {
            getRange = d3.scale.linear().domain(d).range([0, 1]);
            return getRange;
        }
    } else {
        getColor =  d3.scale.linear()
            .domain(colorDomain)
            .range(colors);
    }
    return getColor;
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__(163);
/* unused harmony reexport scaleBand */
/* unused harmony reexport scalePoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__(186);
/* unused harmony reexport scaleIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__(17);
/* unused harmony reexport scaleLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__(211);
/* unused harmony reexport scaleLog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__(88);
/* unused harmony reexport scaleOrdinal */
/* unused harmony reexport scaleImplicit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__(212);
/* unused harmony reexport scalePow */
/* unused harmony reexport scaleSqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__(213);
/* unused harmony reexport scaleQuantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__(214);
/* unused harmony reexport scaleQuantize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__(215);
/* unused harmony reexport scaleThreshold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__(103);
/* unused harmony reexport scaleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__(231);
/* unused harmony reexport scaleUtc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_sequential__ = __webpack_require__(232);
/* unused harmony reexport scaleSequential */

























/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(77);



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(80);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(86);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implicit */
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(11);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgbBasis; });
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(18);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(35);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(32);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(32);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(22);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(201);
/* unused harmony reexport formatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(99);
/* unused harmony reexport formatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__(210);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["a"]; });








/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTrim__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatTypes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__identity__ = __webpack_require__(207);









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!__WEBPACK_IMPORTED_MODULE_5__formatTypes__["a" /* default */][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_5__formatTypes__["a" /* default */][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(__WEBPACK_IMPORTED_MODULE_4__formatTrim__["a" /* default */])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(37);


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(102);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisector */])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickStep */])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickStep */])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["d" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["g" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["c" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(39);
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(105);
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__(106);
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__(230);
/* unused harmony reexport isoParse */






/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(38);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["s" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(39);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stats;
function stats(data, fields){

    if(!Array.isArray(data))
        throw new Error("Inproper input data format.");

    var result = {};

    fields.forEach(function(f) {
        var a = data.map(function(d){return d[f]; });
        result[f] = {
            min: Math.min.apply(null, a),
            max: Math.max.apply(null, a)
        };
    });

    return result;
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = colorLegend;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_scale_chromatic__ = __webpack_require__(40);


var gradID = 0;
function colorLegend(arg){
    var option = arg || {},
        container = option.container || null,
        width = option.width || 200,
        height = option.height || 20,
        pos = option.pos ||[0, 0],
        padding = option.padding || {left: 15, right: 15, top: 20, bottom: 0},
        vmap = option.vmap || {},
        noLabel = option.nolabel || false,
        colors = option.colors || ['#eee', 'steelblue'],
        domain = option.domain || ['min', 'max'],
        format = option.format || d3.format(".2s");

    var gradientID = gradID++;
    width -= padding.left + padding.right;
    height -= padding.top + padding.bottom;
    
    var legend;
    if(container === null) {
        legend = d3.select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
        legend.attr("width", width).attr("height", height);
    } else {
        legend = container;
    } 
       
    if(container !== null){
        if(typeof container.appendChild === 'function')
            container.appendChild(legend);
        else if(typeof container === 'string')
            document.getElementById(container).appendChild(legend);
    }

    function linearGradient(colors) {
        var gradient = legend.append("defs")
            .append("linearGradient")
                .attr("id", "gradlegend"+gradientID)
                .attr("x1", "0%")
                .attr("x2", "100%")
                .attr("y1", "0%")
                .attr("y2", "0%");

        if(Array.isArray(colors)) {
            colors.forEach(function(c, i){
                gradient.append("stop")
                    .attr("offset", i / colors.length )
                    .attr("stop-color", c);
            });
        } else if(typeof colors == 'string' ) {
            if(typeof __WEBPACK_IMPORTED_MODULE_0_d3_scale_chromatic__['interpolate' + colors] == 'function') {
                for(var i = 0; i < 128; i++) {
                    gradient.append("stop")
                    .attr("offset", i / 128 )
                    .attr("stop-color", __WEBPACK_IMPORTED_MODULE_0_d3_scale_chromatic__['interpolate' + colors](i/128));
                }
            }
        }

        return gradient;
    }

    var grad = linearGradient(colors);
    var rect = legend.append("g");
    rect.attr('transform', 'translate(' + padding.left + ', ' + padding.right + ')');

    var colorScale = rect.append("rect")
        .attr("x", pos[0])
        .attr("y", pos[1])
        .attr("width", width-padding.left)
        .attr("height", height)
        .style("fill","url(#gradlegend" + gradientID + ")");

    if(!noLabel) {
        rect.append("text")
            .attr("x", pos[0])
            .attr("y", pos[1] + height/2 + 5)
            .style("fill", "#222")
            .style("text-anchor", 'end')
            // .style("font-size", ".9em")
            .text(format(domain[0]));

        rect.append("text")
            .attr("x", pos[0] + width - padding.left)
            .attr("y", pos[1] + height/2 + 5)
            .style("fill", "#222")
            .style("text-anchor", 'begin')
            // .style("font-size", ".9em")
            .text(format(domain[1]));
    }

    if(option.title) {
        rect.append("g")
            .append("text")
            .attr("y", pos[1] - height/2 - 5)
            .attr("x", pos[0] + width/2 - 5)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(option.title);
    }

    // console.log('color legend', domain, colors);

    return legend;
}

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgbBasis; });
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(19);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(42);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(42);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(25);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_main_js__ = __webpack_require__(118);

Object(__WEBPACK_IMPORTED_MODULE_0__src_main_js__["a" /* default */])();

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = App;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datamgmt__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_app__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_app__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contrast_app__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dexie__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__network_projections__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__codes_data_datasets_js__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loadData__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loadDflyCustom__ = __webpack_require__(339);













function App() {
    var pageHeaderHeight = $('#page-header').height() + 20;
   
    $("#page-network, #page-contrast")
    .css({
        height: $("body").height() - pageHeaderHeight,
        'margin-top': pageHeaderHeight + 'px'
    });

    $('.ui.large.modal')
        .modal('observeChanges', true).modal('hide');

    // $('#page-network').transition('fade down');
    $('#page-contrast').transition('fade down');
    // $('#page-tseries').transition('fade down');

    $('.ui.sidebar')
        .sidebar({
            transition: 'overlay',
            dimPage: false,
            closable: true
        });

    $('.data-button').click(function(){
        $('.ui.large.modal').modal('show');
    })

    $(".page-menu > a.item").click(function(){
        $(".page-menu > a.item.active").each(function(menuID,i){
            $(this).removeClass('active');
            $(this.getAttribute('href')).transition('fade down');
        })
        var mode = this.getAttribute('href').slice(1);

        $(this).addClass('active');
        $(this.getAttribute('href')).transition('fade down');
        
    });

    $('.ui.large.modal').modal('toggle');

    var boards = {};
    var specifications;


    var db = new __WEBPACK_IMPORTED_MODULE_4_dexie__["a" /* default */]("codes-netvis-0.1");
    db.version(1).stores({
        datasets: 'name,topology,groups,data',
        specs: 'name,spec'
    });

    function initApp(datasets, specifications) {
        // boards.stats = stats({
        //     container: 'page-stats',
        // });

        boards.contrast = Object(__WEBPACK_IMPORTED_MODULE_3__contrast_app__["a" /* default */])({
            container: 'page-contrast',
            datasets: datasets,
            specs: specifications
        })


        boards.network = Object(__WEBPACK_IMPORTED_MODULE_2__network_app__["a" /* default */])({
            container: 'page-network',
            specs: specifications,
            onsave: function(spec) {
                db.specs.put(spec);
            }
        });

        boards.ready = function(specifications) {

        }
        // boards.tseries = timeseries({
        //     container: 'page-tseries'
        // })

        // $.getJSON('data/datasets.json', function(data){
        //     console.log(data);
        // });
    
        var dataMgmt = Object(__WEBPACK_IMPORTED_MODULE_0__datamgmt__["a" /* default */])({
            container: 'data-list',
            datasets: datasets,
            onDataAdd: function(newDataset) {
                db.datasets.add(newDataset).then(function(){ console.log('Added new dataset ', newDataset.label); });
            },
            onDataDelete: function(datasetName) {
                db.datasets.where("name").equals(datasetName).delete().then(function(){ window.location.reload(); });               
            }
        });

        dataMgmt.onselect = function(data) {
            // console.log(data)
            // boards.stats.update(data);
            boards.network.update(data);
            var visSpec = boards.network.getSpec();
            // boards.network.onUpdate = function(d) {
            //     console.log(d);
            //     boards.tseries.update(d, data, metadata);
            // }
            // boards.tseries.update(visSpec, data, metadata);
            $('.ui.large.modal').modal('toggle');
        };

        // dataMgmt.ready = function(datasets) {
        //     boards.contrast.updateDatasets(datasets);
        // }

    }


    db.specs.count().then(function(specCount) {
        console.log(specCount);
        if(specCount == 0) {
            specifications = __WEBPACK_IMPORTED_MODULE_5__network_projections__["a" /* default */];
            var datasetCount = 0;
            db.specs.bulkPut(__WEBPACK_IMPORTED_MODULE_5__network_projections__["a" /* default */]).then(function(spec) {
                __WEBPACK_IMPORTED_MODULE_6__codes_data_datasets_js__["a" /* default */].forEach(function(ds, dsi){
                    var loadDataset = (ds.topology == 'Dragonfly') ? __WEBPACK_IMPORTED_MODULE_7__loadData__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_8__loadDflyCustom__["a" /* default */];
                    loadDataset(ds).then(function(data){
                        return db.datasets.add({name: ds.name, topology: ds.topology, groups: ds.groups, data: data});
                    }).then(function(){
                        return db.datasets.toArray();
                    }).then(function(ds){
                        datasetCount++;
                        if(datasetCount == __WEBPACK_IMPORTED_MODULE_6__codes_data_datasets_js__["a" /* default */].length) window.location.reload();
                    });
                });
            })
        } else {
            db.specs.toArray().then(function(specs){
                specifications = specs;
                console.log(specs)
                return db.datasets.toArray();
            })
            .then(function(datasets){
                initApp(datasets, specifications)
            })
        }
    })

    // $('.ui.dropdown').dropdown();
    // $('.ui.checkbox').checkbox();
}


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataManagement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dashi__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_dragonfly_custom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_dragonfly__ = __webpack_require__(29);







const newDatasetForm = `
<h3 style="border-bottom: 1px solid #CCC;">Upload Local Files</h3>
<div class="five fields">
<div class="four wide field">
    <input type="text" id="codes-vis-new-dataset-name" placeholder="label for this new dataset" />
</div>
<div class="four wide field" id="codes-vis-model">
    <select class="ui fluid dropdown" id="codes-vis-data-model">
        <option value="">Select a network model</option>
    </select>
</div>
<div class="two wide field">
    <input type="number" id="codes-vis-new-dataset-groups" placeholder="#groups" />
</div>
<div class="three wide field" id="codes-vis-data-upload"></div>
<div class="three wide field" id="codes-vis-data-add"></div>

</div>
`;

function dataManagement(arg) {
    var dataManager = {},
        options = arg || {},
        container = options.container,
        onDataAdd = options.onDataAdd || function() {},
        onDataDelete = options.onDataDelete || function() {};

    var datasets = arg.datasets || [];

    var dataPanel = new __WEBPACK_IMPORTED_MODULE_0_dashi__["e" /* Panel */]({
        container: document.getElementById(container),
        padding: 20,
        margin: 20,
        id: "panel-datalist",
        title: "Dataset",
        style: {
            border: 'none',
            height: 'auto'
        },
        header: {height: 0.075, style: {backgroundColor: '#FFF', border: 'none'}}
    });

    var dataList = new __WEBPACK_IMPORTED_MODULE_0_dashi__["f" /* Table */]({
        container: dataPanel.body,
        width: dataPanel.innerWidth,
        cols: ['', 'Dataset ID', 'Topology Model', '#Groups', 'Description', 'Action']
    });

    dataManager.onselect = function(){};
    dataManager.ready = function(){};
    // dataManager.data = datasets[Object.keys(datasets)[0]];

    datasets.forEach(function(dataset, di){
        addDataRow(di, dataset)
    });

    dataManager.ready(datasets);

    function addDataRow(id, dataset) {
        dataList.addRow([
            new __WEBPACK_IMPORTED_MODULE_0_dashi__["a" /* Button */]({
                label: '',
                icon: "minus",
                types: ['red', 'tiny'],
                onclick: function() { 
                    onDataDelete(dataset.name);
                }
            }),
            id, 
            dataset.topology, 
            dataset.groups, 
            // ds.routers, 
            // ds.terminals, 
            dataset.name,
            new __WEBPACK_IMPORTED_MODULE_0_dashi__["a" /* Button */]({
                label: 'Select',
                types: ['primary'],
                onclick: updateDataset.bind(null, id)
            })
        ]);
    }

    function updateDataset(datasetID) {
        if(typeof(datasetID) !== 'number' || datasetID < 0) return;
        var dataset = datasets[datasetID];
        console.log(datasetID, datasets)
        var networkModel = (dataset.topology == 'Dragonfly') ? __WEBPACK_IMPORTED_MODULE_2__model_dragonfly__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_1__model_dragonfly_custom__["a" /* default */];
        
        // dataset.data.groups = dataset.groups;
        networkModel(dataset.data, {groups: dataset.groups})
        .then(function(data) {
            console.log(data)
            dataManager.data = data;
            dataManager.onselect(data);
        });
    }

    document.getElementById('codes-vis-new-dataset').innerHTML = newDatasetForm;

    var fileTotal = 0;
    var fileLoaded = 0;
    var fileContent = [];
    var fileUploadButton = new __WEBPACK_IMPORTED_MODULE_0_dashi__["a" /* Button */]({
        label: ' Upload Files ',
        types: [ 'center'],
        icon: 'folder open',
        fileInput: {id: 'testFileUpload', onchange:function(evt) {
            var files = evt.target.files;
            var fileList = Object.keys(files).sort(function(a,b) { return b<a;});

            fileTotal = fileList.length;
            
            console.log(files);
            // $('.ui.large.modal').modal('toggle');
            fileList.forEach(function(f, fi){
                var fileName = files[f].name;
                var reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = function(e) {
                    fileContent[fi] = e.target.result;
                    fileLoaded += 1;
                    if(fileLoaded == fileTotal) {
                        console.log(fileContent);
                    }
                };

                reader.readAsBinaryString(files[f]);
            })
        }},
        container: document.getElementById('codes-vis-data-upload')
    });

    var dataModelSel =  document.getElementById('codes-vis-data-model');

    ['Dragonfly', 'Dragonfly Custom', 'Dragonfly Plus'].forEach(function(model, ii){
        dataModelSel.innerHTML += '<option value="' + model + '">' + model +'</option>';
    });

    new __WEBPACK_IMPORTED_MODULE_0_dashi__["a" /* Button */]({
        label: 'Add dataset',
        types: ['green', 'center'],
        container: document.getElementById('codes-vis-data-add'), 
        onclick: function() {
            var label = $('#codes-vis-new-dataset-name').val();
            var groups = $('#codes-vis-new-dataset-groups').val();
            var model = $('#codes-vis-data-model').val();
            console.log(label, groups, model, fileContent.length)
            if(model && groups && label && fileContent.length) {
                var newDataset = {
                    name: label, 
                    topology: model,
                    groups: groups,
                    data: fileContent
                }
                datasets.push(newDataset);
                console.log(newDataset);
                onDataAdd(newDataset);
                addDataRow(datasets.length-1, newDataset);
            } else {
                console.log("missing information to add new dataset");
            }
        }
    });

    $('#codes-vis-data-model').dropdown();

    dataManager.getDatasets = function() {
        return datasets;
    }

    return dataManager;
}


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * alloc(options) - allocating memory for storing data values in different schemaures.
 * @exports allocate
 * @param {Object} options - Options for allocating memory.
 * @param {Array} options.array - Array containing the data values.
 * @param {Array} options.fields - Fields in the data.
 * @param {number} [options.skip=0] - Number of rows to be skiped in data.
 * @param {object[]} [options.data] - default data
 *
 */
module.exports = function allocate(options) {
    'use strict';
    var array = options.array || [],
        header = options.fields || options.header || array[0],
        types = options.types || [],
        schema = options.schema || undefined,
        skip = options.skip || 0,
        data = options.data || [];

    var ds = {},
        parsers = [];

    if (types.length && typeof(types) == 'string') {
        var ta = [];
        for (var i = 0; i < header.length; i++) {
            ta.push(types);
        }
        types = ta;
    }

    if (typeof schema == 'object') {
        header = Object.keys(schema);
        types = Object.keys(schema).map(function(h) {
            return schema[h];
        });
    }

    if (typeof skip == 'number') {
        for (var j = 0; j < skip; j++)
            array.shift();
    }

    types.forEach(function(t) {
        parsers.push(getParser(t));
    })

    function getParser(type) {
        if (type == 'int' || type.match('veci*')) {
            return function(value) {
                var res = parseInt(value);
                return (isNaN(res)) ? 0 : res;
            };
        } else if (type == 'float' || type.match('vecf*')) {
            return function(value) {
                var res = parseFloat(value);
                return (isNaN(res)) ? 0 : res;
            };
        } else if (['date', 'time', 'datetime'].indexOf(type) != -1) {
            return function(value) {
                return new Date(value);
            };
        } else if (['money', 'price', 'cost'].indexOf(type) != -1) {
            return function(value) {
                return parseFloat(value.substring(1));
            };
        } else {
            return function(value) {
                return value;
            };
        }
    }

    ds.insertRows = function(rows) {
        array = array.concat(rows);
    }
    
    /**
    * @method objectArray
    * @return {Object[]} - Return data as array of objects
    */
    ds.objectArray = function() {
        if (typeof(header) !== 'undefined' && header.length) {
            var l = header.length;
            array.forEach(function(a) {
                var o = {},
                    offset = 0;
                for (var i = 0; i < l; i++) {
                    var k = header[i];
                    if (k.length) {
                        if (types[i].match(/^(veci|vecf)\d+$/)) {
                            var vl = parseInt(types[i].slice(4)),
                                vector = [];
                            a.slice(offset, offset + vl).forEach(function(vi) {
                                vector.push(parsers[i](vi));
                            });
                            o[k] = vector;
                            offset += vl;
                        } else {
                            o[k] = parsers[i](a[offset]);
                            offset++;
                        }
                    }
                }
                data.push(o);
            });
        }
        return data;
    }

    /**
    * @method rowArray
    * @return {Array[]} - data as row arrays
    */
    ds.rowArray = function() {
        array.forEach(function(a) {
            var row = [];
            header.forEach(function(k, i) {
                if (k.length) {
                    row.push(parsers[i](a[i]));
                }
            });
            data.push(row);
        });
        data.fields = header;
        data.schema = 'rowArray';
        return data;
    }

    /**
    * @method collumArray
    * @return {Array[]} - data as column arrays
    */
    ds.columnArray = function() {
        header.forEach(function(k, i) {
            var column = array.map(function(a) {
                return parsers[i](a[i]);
            });
            data.push(column);
        });
        data.fields = header;
        data.schema = 'columnArray';
        return data;
    }
    //TODO: make columnArray extensible like rowArray and objectArray

    return ds;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

const derive = __webpack_require__(58);
const queries = __webpack_require__(122);
const aggregate = __webpack_require__(27);
const match = __webpack_require__(28);

module.exports = function pipeline (data){
    var queue = [],
        cache = {},
        opt = {},
        workers = [],
        completed = 0,
        result = [],
        callback = function() {};

    if(Array.isArray(data)) {
        result = data;
    }

    opt.derive = derive;
    opt.match = match;
    opt.aggregate = aggregate;

    Object.keys(queries).forEach(function(f) {
        opt[f] = queries[f];
    });

    opt.cache = function(data, tag){
        cache[tag] = pipeline.result();
    };

    opt.map = function(f){
        result = data.map(f);
        return pipeline;
    };

    var merge = {
        aggregate: function (lastJob) {
            var mergeSpec = {};
            for(var key in lastJob.aggregate) {
                var optSpec = lastJob.aggregate[key];
                if(typeof optSpec == 'object')
                    mergeSpec[key] = Object.keys(optSpec)[0];
                else
                    mergeSpec[key] = optSpec;
            }
            return opt.aggregate(finalResult, mergeSpec);
        }
    }

    var finalResult = [];

    function mergeResult(workerResult) {
        var rl = finalResult.length,
            wl = workerResult.length;
        for(var i = 0; i < wl; i++) {
            finalResult[rl+i] = workerResult[i];
        }
        completed += 1;

        if(completed == workers.length) {
            var lastJob = queue[queue.length-1],
                lastJobOpt = Object.keys(lastJob)[0];
            if( lastJobOpt == 'aggregate') {
                finalResult = merge.aggregate(lastJob);
            }
            callback(finalResult);
        }
    }

    var pipeline = {};

    // pipeline.opt = opt;
    Object.keys(opt).forEach(function(o){
        pipeline[o] = function(spec) {
            var task = {};
            task[o] = spec;
            queue.push(task);
            return pipeline;
        };
    })

    pipeline.then = function(_callback) {
        callback = _callback;
        queue.forEach(function(q){
            var f = Object.keys(q)[0];
            result = opt[f](result, q[f]);
        });
        return result;
    }

    pipeline.execute = function(data) {
        if(Array.isArray(data)) result = data;
        queue.forEach(function(q){
            var f = Object.keys(q)[0];
            result = opt[f](result, q[f]);
        });
        return result;
    }

    pipeline.oncomplete = pipeline.then;

    pipeline.result = function() {
        return result;
    };

    pipeline.data = function(data) {
        result = data;
        return pipeline
    }

    pipeline.queue = function() {
        return queue;
    }

    return pipeline;
}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

const arrayOpts = __webpack_require__(14);
const aggregate = __webpack_require__(27);
const match = __webpack_require__(28);

var query = {};
query.match = match;
query.group = aggregate;

query.indexBy = function(data, id){
    var indexed = {};
    data.forEach(function(d){
        if(!indexed.hasOwnProperty(d[id])){
            indexed[d[id]] = [ d ];
        } else {
            indexed[d[id]].push(d);
        }
        delete d[id];
    });
    return indexed;
};

// query.list = function(data, id) {
//     return data.map(function(d){return d[id];});
// }

query.range = function(data, id) {
    var array = data.map(function(d){return d[id];});
    return [ arrayOpts.min(array), arrayOpts.max(array) ];
};

query.map = function(data, m) {
    var mf = function(d){return d};
    if(typeof m === "string")
        mf = function(d){return d[m]};
    else if(typeof m === "function")
        mf = m;

    return data.map(mf);
};

// Object.keys(arrayOpts).forEach(function(opt) {
//     query[opt] = function(data, id) {
//         var arr = query.map(data, id);
//         return arrayOpts[opt](arr);
//     }
// });



query.sortBy = function(data, spec) {
    function sortArray(a, b, p) {
        return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
    }
    return data.sort(function(a, b){
        var r = 0,
            i = 0,
            attributes = Object.keys(spec),
            al = attributes.length;

        while( r === 0 && i < al ) {
            r = sortArray(a, b, attributes[i]) * spec[attributes[i]];
            i++;
        }
        return r;
    })
};

query.orderBy = function(c, s, o) {
    var spec = {};
    s.forEach(function(ss){
        spec[ss] = o;
    });
    return query.sort(c, spec);
};

query.histogram = function(data, spec, max, min) {
    var result = {};
    for(var key in spec) {
        result[key] = arrayOpts.histogram(data.map(function(d){return d[key]}), spec[key], max, min);
    }
    return result;
};

query.binAggregate = function(data, spec) {
    var attrKey = Object.keys(spec)[0],
        attributes = Object.keys(spec).filter(function(k) { return k != "$data" && k!=attrKey;}) || [],
        embedData = spec.$data || false,
        numBin = spec[attrKey],
        array = data.map(function(d){ return d[attrKey]; }),
        l = array.length,
        min = arrayOpts.min(array),
        max = arrayOpts.max(array),
        range = max - min,
        interval = range / numBin,
        bins = [];


    for(var b = 0; b < numBin; b++) {
        bins[b] = {binID: b, rangeBegin: min + range * (b/(numBin)), rangeEnd: min + range*(b+1)/(numBin), count: 0};
        // if(embedData)
            bins[b].data = [];
        // attributes.forEach(function(attr){
        //     bins[b][attr] = 0;
        // })
    }

    // bins[numBin] = [];

    for(var i = 0; i < l; i++) {
        binID = Math.floor( (array[i] - min) / range * (numBin));
        if(binID == numBin) binID--;
        data[i].binID = binID;
        // if(embedData)
            bins[binID].data.push(data[i]);
        // bins[binID].count++;
        // attributes.forEach(function(attr){
        //     bins[binID][attr] += data[i][attr];
        // });
    }

    spec.$by = "binID";
    delete spec[attrKey];

    var result = query.group(data, spec);
    result = query.indexBy(result, "binID");


    // result.forEach(function(r){
    //     r.rangeBegin = bins[r.binID].rangeBegin;
    //     r.rangeEnd = bins[r.binID].rangeEnd;
    // })

    bins.forEach(function(bin){

        if(result.hasOwnProperty(bin.binID)) {
            attributes.forEach(function(attr){
                bin[attr] = result[bin.binID][0][attr];
            });
            if(embedData) bin.data = result[bin.binID][0].data;
        } else {
            attributes.forEach(function(attr){
                bin[attr] = 0;
            });
        }

    })
    // console.log(bins);
    // return result;
    return bins;
}

query.partition = function(data, numPart) {
    var len = data.length,
        p = Math.ceil(len / numPart),
        pid,
        partitions = [];

    for(var b = 0; b < numPart; b++) {
        partitions[b] = {partition: b, data: [], count: 0};
    }

    for(var i = 0; i < len; i++) {
        pid = Math.floor(i / p);
        partitions[pid].data.push(data[i]);
        partitions[pid].count++;
    }

    return partitions;
}

query.partitionBy = function(data, spec) {
    var len = data.length,
        pid,
        partitions = [],
        key = Object.keys(spec)[0],
        parts = spec[key];

    parts.forEach(function(b, bi) {
        partitions[bi] = {partition: bi, data: [], count: 0, name: b};
    })

    for(var i = 0; i < len; i++) {
        pid = parts.indexOf(data[i][key]);
        if(pid>-1){
            partitions[pid].data.push(data[i]);
            partitions[pid].count++;
        }
    }
    return partitions;
}

query.normalize = function(data, fields) {
    var hash = {};

    fields.forEach(function(f){
        var array = data.map(function(d){ return d[f]; });
        hash[f] = arrayOpts.normalize(array);
    });

    data.forEach(function(d, i){
        fields.forEach(function(f){
            d[f] = hash[f][i];
        });
    });

    return data;
}

query.toColumnArray = function(data) {
    var columnArray = [];
        attributes = Object.keys(data[0]).filter(function(k) { return k; });

    attributes.forEach(function(attr){
        columnArray.push(data.map(function(d){return d[attr];}));
    });

    columnArray.fields = attributes;

    attributes.forEach(function(attr, ai){
        columnArray[attr] = columnArray[ai];
    });

    return columnArray;
}

module.exports = query;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function join(dataLeft, dataRight) {
    var len = dataLeft.length,
        keyL = Object.keys(dataLeft[0]),
        keyR = Object.keys(dataRight[0]);
        
    var keys = keyR.filter(function(kr){ return (keyL.indexOf(kr) === -1);});

    keys.forEach(function(k){
        for(var i = 0; i < len; i++) {
            dataLeft[i][k] = dataRight[i][k];    
        }
    });

    return dataLeft;
}


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var array = __webpack_require__(14);

function stats(data, fields){

    if(!Array.isArray(data))
        throw new Error("Inproper input data format.");

    var result = {};

    fields.forEach(function(f) {
        var a = data.map(function(d){return d[f]; });
        result[f] = {
            min: array.min(a),
            max: array.max(a),
            avg: array.avg(a),
            std: array.std(a)
        };
    });

    return result;
};


stats.domains = function(data, fields) {
    if(!Array.isArray(data))
        throw new Error("Inproper input data format.");

    var result = {};

    fields.forEach(function(f) {
        var a = data.map(function(d){return d[f]; });
        result[f] = [ array.min(a), array.max(a) ];
    });

    return result;
}

module.exports = stats;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function embed(spec) {
    var id = spec.$id || spec.$by,
        attributes = Object.keys(spec);

    if(!id) throw Error("No id specified for embed!");

    attributes.filter(function(attr){
        return (attr != "$by" && attr != "$id")
    })
    .forEach(function(attr){
        var embedKey = spec[attr][0][id],
            i = 0,
            n = data.length,
            l = spec[attr].length;

        var lookup = data.map(function(d){ d[attr] = []; return d[id];});

        for(i = 0; i < l; i++) {
            var index = lookup.indexOf(spec[attr][i][id]);
            if(index !== -1) {
                data[index][attr].push(spec[attr][i]);
            }
            // delete spec[attr][i][id];
        }
    });
    return data;
}


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = function toArray(data, arg){
    var options = arg || {},
        fields = options.fields || Object.keys(data[0]) || [],
        format = options.format || 'row';

    if(format == 'row') {
        return data.map(function(d){
            var row = new Array(fields.length);
            fields.forEach(function(f, i){
                row[i] = d[f];
            });
            return row;
        });
    } else {
        return fields.map(function(f){
            return data.map(function(d){ return d[f]; })
        })
    }
}


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeline;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__allocate__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initialize__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compile__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__derive__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interact__ = __webpack_require__(65);







function pipeline(options) {
    var $p = Object(__WEBPACK_IMPORTED_MODULE_2__initialize__["a" /* default */])(options);
    $p.views = [];
    $p.interactions = [];
    
    $p.visualization = null;
    $p.deriveMax = options.deriveMax || 4;
    $p._responseType = 'unselected';
    $p._update = false;

    $p.getResult = function() {};

    var pipeline = {},
        registers = {},
        profiles  = [],
        operation = {},
        response = {},
        optID = 0;

    function addToPipeline(opt, arg) {
        if( !$p._update) {
            var spec = {};
            spec[opt] = arg;
            $p.pipeline.push(spec);
            return optID++;
        } else {
            return -1;
        }
    }

    pipeline.ctx = $p.ctx;

    pipeline.data = function(dataOptions) {
        Object(__WEBPACK_IMPORTED_MODULE_0__allocate__["a" /* default */])($p, dataOptions);
        operation = Object(__WEBPACK_IMPORTED_MODULE_3__compile__["a" /* default */])($p);
        if(!$p.hasOwnProperty('fieldDomains')) {
            var dd = operation.extent($p.fields.map((f, i) => i), $p.dataDimension);
            $p.uniform.uFieldDomains.data = $p.fieldDomains;
        }
        $p.opt = operation;
        pipeline.register('__init__');
        return pipeline;
    }

    pipeline.view = function(views) {
        $p.views.forEach(function(v){
            if(v.hasOwnProperty('chart')) {
                v.chart.svg.remove();
                delete v.chart;
            }
            if(!v.hasOwnProperty('padding')) {
                v.padding = {left: 30, right: 30, top: 30, bottom: 30};
            }
        })
        $p.views = views;
        return pipeline;
    }

    pipeline.register = function(tag) {
        registers[tag] = {
            indexes: $p.indexes,
            dataSize: $p.dataSize,
            fields: $p.fields,
            dataDim: $p.uniform.uDataDim.data.slice(),
            fieldWidths: $p.fieldWidths.slice(),
            fieldDomains: $p.fieldDomains.slice(),
            deriveCount: $p.deriveCount,
            filterFlag: $p.uniform.uFilterFlag.data,
            filterControls: $p.uniform.uFilterControls.data.slice(),
            dataInput: $p.uniform.uDataInput.data,
            attribute: {
                aDataIdx: {
                    ids: $p.attribute.aDataIdx.data,
                    value: $p.attribute.aDataValx.data
                },
                aDataIdy: {
                    ids: $p.attribute.aDataIdy.data,
                    value: $p.attribute.aDataValy.data
                },
                aDataFieldId: $p.attribute.aDataFieldId.data,
                aDataItemId: $p.attribute.aDataItemId.data
            }
        }
        return pipeline;
    }

    pipeline.resume = function(tag) {
        addToPipeline('resume', tag);
        if (!registers.hasOwnProperty(tag))
            throw new Error('"' + tag + '" is not found in regesters.');

        var reg = registers[tag];
        //resume CPU registers
        $p.indexes = reg.indexes;
        $p.dataSize = reg.dataSize;
        $p.deriveCount = reg.deriveCount;
        $p.fieldCount = reg.fields.length - reg.indexes.length - reg.deriveCount;
        $p.fields = reg.fields.slice();
        $p.fieldWidths = reg.fieldWidths.slice();
        $p.fieldDomains = reg.fieldDomains.slice();
        $p.dataDimension = reg.dataDim.slice();

        //resume GPU Uniforms
        $p.uniform.uFieldCount.data = $p.fieldCount;
        $p.uniform.uDataSize.data = $p.dataSize;
        $p.uniform.uDataDim.data = reg.dataDim;
        $p.uniform.uIndexCount.data = reg.indexes.length;
        $p.uniform.uFieldDomains.data = reg.fieldDomains;
        $p.uniform.uFieldWidths.data = reg.fieldWidths;
        $p.uniform.uFilterFlag.data = reg.filterFlag;
        // $p.uniform.uFilterControls.data = reg.filterControls;
        $p.uniform.uDataInput.data = reg.dataInput;

        //resume GPU Attribute Buffers
        $p.attribute['aDataIdx'] = reg.attribute['aDataIdx'].ids;
        $p.attribute['aDataIdy'] = reg.attribute['aDataIdy'].ids;
        $p.attribute['aDataValx'] = reg.attribute['aDataIdx'].value;
        $p.attribute['aDataValy'] = reg.attribute['aDataIdy'].value;
        $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute['aDataIdx'].location, 0);
        $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute['aDataIdy'].location, 1);
        $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute['aDataValx'].location, 0);
        $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute['aDataValy'].location, 1);

        $p.attribute['aDataFieldId'] = reg.attribute['aDataFieldId'];
        $p.attribute['aDataItemId'] = reg.attribute['aDataItemId'];

        return pipeline;
    }

    pipeline.bin = function (spec) {
        var deriveSpec = {},
            binAttr,
            binCount;

        if (typeof spec == 'object') {
            binAttr = Object.keys(spec)[0];
            binCount = spec[binAttr];
        } else {
            binAttr = spec;
            //Apply Sturges' formula for determining the number of bins
            binCount = Math.ceil(Math.log2($p.dataSize)) + 1;
        }

        var binDomain = $p.fieldDomains[$p.fields.indexOf(binAttr)];
        var binInterval = (binDomain[1] - binDomain[0]) / binCount;

        var histFunction = (function() { max(ceil((binAttr - binMin) / float(binInterval)), 1.0) })
            .toString()
            .slice(13, -1) // remove "function () {" from function.toString
            .replace('binAttr', binAttr)
            .replace('binMin', binDomain[0] + '.0')
            .replace('binInterval', binInterval)

        deriveSpec['bin@'+binAttr] = histFunction;
        $p.intervals[binAttr] = {};
        $p.intervals[binAttr].dtype = 'historgram';
        $p.intervals[binAttr].interval = binInterval;
        $p.intervals[binAttr].min = binDomain[0];
        $p.intervals[binAttr].max = binDomain[1];
        $p.intervals[binAttr].align = 'right';
        pipeline.derive(deriveSpec);
        // var deriveFields = $p.fields.slice(-$p.deriveCount),
        //     dfid = deriveFields.indexOf('bin@'+binAttr);
        // $p.deriveDomains[dfid] = [stats[binAttr].min, stats[binAttr].max];
        return 'bin@'+binAttr;
    }

    pipeline.aggregate = function(spec) {
        if(spec.$bin) {
            spec.$group = pipeline.bin(spec.$bin);
            delete spec.$bin;
        }

        addToPipeline('aggregate', spec);
        if(Object.keys($p.crossfilters).length)
            $p.uniform.uFilterFlag = 1;

        operation.aggregate.execute(spec);
        // console.log(JSON.stringify(pipeline.result('row')));
        return pipeline;
    }

    pipeline.filter = function(spec) {
        addToPipeline('filter', spec);
        operation.match.execute(spec);
        $p.getResult = operation.match.result;
        return pipeline;
    }

    pipeline.match = pipeline.filter;

    pipeline.derive = function(spec) {
        addToPipeline('derive', spec);

        //TODO: support JS function as expression for deriving new variable
        //.replace(/function\s*[\w|\d]+\s*\((.+)\)/g, "$1")
        // if (!opt.hasOwnProperty('derive')) {
            operation.derive = Object(__WEBPACK_IMPORTED_MODULE_4__derive__["a" /* default */])($p, spec);
        // }
        operation.derive.execute(spec);
        $p.getResult = operation.derive.result;
        return pipeline;
    }

    pipeline.cache = function(tag) {
        operation.cache.execute(tag);
        return pipeline;
    }

    pipeline.clear = function() {
        console.log($p.visLayers);
    }

    pipeline.read = function() {
        console.log("Read>>", $p.getResult());
        return pipeline;
    }

    pipeline.result = Object(__WEBPACK_IMPORTED_MODULE_1__output__["a" /* default */])($p);

    pipeline.output = function(callback) {
        addToPipeline('output', callback);
        callback(pipeline.result('row'));
        return pipeline;
    }

    var branchID = 0;
    pipeline.branch = function(branches) {
        pipeline.register('_branch'+branchID);
        branches.forEach(function(b){
            var operations = Object.keys(b).map(function(o) {
                var obj = {};
                obj[o] = b[o];
                return obj;
            });
            pipeline.run(operations);
            pipeline.resume('_branch' + branchID);
        })
        branchID++;
    }

    $p.readResult = pipeline.result;

    pipeline.getResult = function (d) {
        return $p.getResult(d);
    }

    pipeline.readPixels = function(arg) {
        var options = arg || {},
            offset = options.offset || [0, 0],
            resultSize = options.size || $p.dataDimension[0]* $p.dataDimension[1],
            rowSize = Math.min(resultSize, $p.dataDimension[0]),
            colSize = Math.ceil(resultSize/$p.dataDimension[0]);

        $p.bindFramebuffer(null);
        var gl = $p.ctx,
            result = new Uint8Array(rowSize * colSize * 4);

        gl.readPixels(offset[0], offset[1], rowSize, colSize, gl.RGBA, gl.UNSIGNED_BYTE, result);
        return result.filter(function(d, i){ return i%4===3;} );
    }

    pipeline.clearViews = function() {
        $p.bindFramebuffer("offScreenFBO");
        $p.ctx.clearColor( 0.0, 0.0, 0.0, 0.0 );
        $p.ctx.clear( $p.ctx.COLOR_BUFFER_BIT | $p.ctx.DEPTH_BUFFER_BIT );
        $p.bindFramebuffer("visStats");
        $p.ctx.clearColor( 0.0, 0.0, 0.0, 0.0 );
        $p.ctx.clear( $p.ctx.COLOR_BUFFER_BIT | $p.ctx.DEPTH_BUFFER_BIT );
        $p.bindFramebuffer(null);
        $p.ctx.clearColor( 0.0, 0.0, 0.0, 0.0 );
        $p.ctx.clear( $p.ctx.COLOR_BUFFER_BIT | $p.ctx.DEPTH_BUFFER_BIT );
    }

    pipeline.runSpec = function(specs) {
        pipeline.head();
        pipeline.clearViews();
        $p.interactions = [];
        response = {};
        $p.pipeline = [];
        $p.crossfilters = [];
        $p.uniform.uFilterFlag.data = 0;
        // $p.uniform.uFilterRanges = $p.fieldDomains.concat($p.deriveDomains);
        specs.forEach(function(spec){
            var opt = Object.keys(spec)[0],
                arg = spec[opt];

            opt = opt.slice(1);
            if(typeof pipeline[opt] == 'function') {
                pipeline[opt](arg);
            }
        })
    }

    pipeline.head = function() {
        pipeline.resume('__init__');
        return pipeline;
    }

    pipeline.run = function(opts) {
        var operations = opts || $p.pipeline;
        operations.forEach(function(p, i){
            var opt = Object.keys(p)[0];
            pipeline[opt](p[opt]);
        })

        return pipeline;
    }

    pipeline.visualize = function(vmap) {
        var optID = addToPipeline('visualize', vmap);
        var viewIndex = 0,
            filters = {};
        if(typeof vmap.id == 'string') {
            viewIndex = $p.views.map(d=>d.id).indexOf(vmap.id);
            if(viewIndex == -1) {
                //find the next available view slot in all views
                for(var vi = 0; vi < $p.views.length; vi++){
                    if(!$p.views[vi].id) {
                        viewIndex = vi;
                        $p.views[viewIndex].id = vmap.id;
                        break;
                    }
                }
            }
        }
        if(vmap.mark == 'bar') vmap.zero = true;
        $p.views[viewIndex].vmap = vmap;
        var encoding = vmap,
            viewTag = $p.views[viewIndex].id;

        if($p._update && response.hasOwnProperty(viewTag)) {
            if(response[viewTag].hasOwnProperty($p._responseType)) {
                encoding = Object.assign({}, vmap, response[viewTag][$p._responseType]);
            }
        }
        if(encoding.opacity != 0){
            operation.visualize({
                vmap: encoding,
                viewIndex: viewIndex
            });
            pipeline.interact();

        }
        return pipeline;
    }

    pipeline.interact = function(spec) {
        if(typeof(spec) != 'undefined') $p.interactions.push(spec);
        $p.interactions.forEach(function(interaction){
            Object(__WEBPACK_IMPORTED_MODULE_5__interact__["a" /* default */])($p, {
                actions: interaction.event,
                view: interaction.from,
                condition: interaction.condition,
                callback: function(selection) {
                    response = interaction.response;
                    if(!$p._update) {
                        $p._update = true;
                        $p.crossfilters = {};
                        if(typeof selection == 'object') {
                            Object.keys(selection).forEach(function(k) {
                                if(selection[k].length < 2) {
                                    if($p.intervals.hasOwnProperty(k)) {
                                        var value = (Array.isArray(selection[k]))
                                            ? selection[k][0]
                                            : selection[k];
                                        selection[k] = [value-$p.intervals[k].interval, value];
                                    } else if(!$p.categoryLookup.hasOwnProperty(k)) {
                                        selection[k] = [selection[k][0] + selection[k][0] + 1];
                                    }
                                }
                                $p.crossfilters[k] = selection[k];
                            });
                        }
                        $p._responseType = 'unselected';
                        $p.uniform.uFilterLevel.data = 0.2;
                        $p.uniform.uVisLevel.data = 0.1;
                        pipeline.head().run();
                        $p._responseType = 'selected';
                        $p.uniform.uVisLevel.data = 0.2;
                        pipeline.head().filter({}).run();
                        $p._responseType = 'unselected';
                        $p._update = false;
                        $p.uniform.uFilterLevel.data = 0.1;
                        $p.uniform.uVisLevel.data = 0.1;
                    }
                }
            })
        })
    }

    pipeline.exportImage = function(beforeExport) {
        var beforeExport = beforeExport || function() { pipeline.head().run() };
        if(typeof operation.visualize.chart.exportImage === 'function') {
            return operation.visualize.chart.exportImage(beforeExport);
        } else {
            return pipeline;
        }
    }

    if(options.hasOwnProperty('data')) {
        pipeline.data(options.data);
    }

    return pipeline;
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(59);

const vecId = ['x', 'y', 'z'];
/* harmony default export */ __webpack_exports__["a"] = (function($p, dataProps) {
    var data = dataProps || [];

    $p.indexes = data.indexes || [];
    $p.categoryIndex = data.strHashes || {};
    $p.categoryLookup = data.strLists || {};
    $p.dkeys =  data.keys || [];
    $p.dtypes =  data.dtypes || data.types || [];
    $p.intervals =  data.intervals || {};
    $p.cachedResult = [];
    $p.pipeline = [];
    $p.crossfilters = {};
    $p.deriveCount = 0;
    $p.resultDimension = [1, 1];
    $p.dataSize = 0;

    var dkeys = $p.dkeys,
        dtypes = $p.dtypes,
        stats =  data.stats || null;

    if (data.hasOwnProperty("size"))
        $p.dataSize = data.size;
    else if (Array.isArray(data))
        $p.dataSize = Math.max.apply(null, data.map(function(d) {
            return d.length;
        }));

    var rowSize = Math.min($p.dataSize, 8192),
        colSize = Math.ceil($p.dataSize / rowSize);

    $p.dataDimension = [rowSize, colSize];

    $p.fields = $p.indexes.concat(dkeys.filter(function(k) {
        return $p.indexes.indexOf(k) === -1;
    }));
    $p.fieldWidths = new Array($p.fields.length).concat(new Array($p.deriveMax).fill(1));
    $p.fieldCount = $p.fields.length - $p.indexes.length;


    function getDataWidth(fid, range) {
        var range = Math.abs(range[1] - range[0]);
        if (dtypes[fid] == "index" || dtypes[fid] == "int" || dtypes[fid] == "string") {
            return range + 1;
        } else if (dtypes[fid] == "histogram") {
            return range;
        } else if (dtypes[fid] == "time") {
            var interval = stats[$p.fields[fid]].min;
            if (interval === 0) interval = (data[fid][1] - data[fid][0]) || 1;
            $p.intervals[dkeys[fid]] = {};
            $p.intervals[dkeys[fid]].dtype = 'time';
            $p.intervals[dkeys[fid]].interval = interval;
            $p.intervals[dkeys[fid]].min = stats[dkeys[fid]].min;
            $p.intervals[dkeys[fid]].max = stats[dkeys[fid]].max;
            return range / interval + 1;
        } else if (["nominal", "ordinal", "categorical"].indexOf(dtypes[fid]) > -1) {
            return data.TLB.length;
        } else if (dtypes[fid] in ["float", "double", "numeric"]) {
            return 10;
        } else {
            return range+1;
        }
    }
    $p.fields.forEach(function(field) {
        var min = stats[field].min,
            max = stats[field].max,
            fi = dkeys.indexOf(field);
        $p.fieldWidths[fi] = getDataWidth(fi, [min, max]);
    });
    $p.getDataWidth = getDataWidth;
    $p.deriveDomains = new Array($p.deriveMax).fill([0, 1]);
    $p.deriveWidths = new Array($p.deriveMax).fill(1);
    $p.deriveFieldCount = 0;

    if ($p.indexes.length === 0) {
        $p.attribute("aDataIdx", "float", Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* seqFloat */])(0, $p.dataDimension[0] - 1));
        $p.attribute("aDataIdy", "float", Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* seqFloat */])(0, $p.dataDimension[1] - 1));
        $p.attribute("aDataValx", "float", Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* seqFloat */])(0, $p.dataDimension[0] - 1));
        $p.attribute("aDataValy", "float", Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* seqFloat */])(0, $p.dataDimension[1] - 1));
    } else {

        $p.indexes.forEach(function(id, i) {
            var indexAttrData = arrays.unique(data[id]).sort(function(a, b) {
                return a - b;
            });
            $p.attribute("aDataVal" + vecId[i], "float", new Float32Array(indexAttrData));
            $p.attribute("aDataId" + vecId[i], "float", Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* seqFloat */])(0, indexAttrData.length - 1));
            $p.fieldWidths[i] = indexAttrData.length;
            $p.dataDimension[i] = indexAttrData.length;
        });
    }

    $p.attribute("aDataItemVal0", "float", null);
    $p.attribute("aDataItemVal1", "float", null);
    $p.attribute("aDataItemId", "float", new Float32Array($p.dataSize).map((d,i)=>i));
    $p.attribute("aDataFieldId", "vec2", new Float32Array($p.fields.length * 2).map((d,i)=>i));
    $p.attribute("aVertexId", "float", [0, 1, 2, 3, 4, 5]);
    $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aVertexId.location, 0);
    $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataFieldId.location, 0);
    $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataItemId.location, 1);

    $p.attribute("_square", "vec2", new Float32Array([-1.0, -1.0,
        1.0, -1.0, -1.0, 1.0, -1.0, 1.0,
        1.0, -1.0,
        1.0, 1.0
    ]));
    $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute._square.location, 1);

    //setup all attribute, uniform, texture, varying needed by all the shaders
    $p.uniform("uDataSize",    "float", $p.dataSize);
    $p.uniform("uDataDim",     "vec2",  $p.dataDimension);
    $p.uniform("uResultDim",   "vec2",  $p.dataDimension);
    $p.uniform("uIndexCount",  "int",   $p.indexes.length);
    $p.uniform("uFieldWidths", "float", $p.fieldWidths);
    $p.uniform("uFieldCount",  "int",   $p.fieldCount);
    $p.uniform("uFieldId",     "int",   0);
    $p.uniform("uFilterFlag",  "int",   0);
    $p.uniform("uGroupFields", "int",   [0, -1]);
    $p.uniform("uDataInput",   "sampler2D");
    $p.uniform("uDeriveCount", "int", $p.deriveMax);
    // $p.uniform("uDeriveDomains", "vec2", $p.deriveDomains);
    // $p.uniform("uDeriveWidths", "float", $p.deriveWidths);

    $p.uniform("uFilterLevel", "float", 0.1)
    $p.uniform('uVisLevel',    "float", 0.1)

    $p.varying("vResult", "float");
    $p.varying("vDiscardData", "float");
    $p.texture(
        "tData",
        "float",
        new Float32Array($p.dataDimension[0] * $p.dataDimension[1] * $p.fieldCount), [$p.dataDimension[0], $p.dataDimension[1] * $p.fieldCount],
        "alpha"
    );
    $p.framebuffer("fFilterResults", "unsigned_byte", $p.dataDimension);
    $p.framebuffer("fGroupResults", "float", [1024, 1]);
    $p.framebuffer("fDerivedValues", "float", [$p.dataDimension[0], $p.dataDimension[1] * $p.deriveMax]);

    $p.parameter({
        fieldCount: $p.fields.length - $p.indexes.length,
        indexCount: $p.indexes.length
    });

    $p.fields.slice($p.indexes.length).forEach(function(attr, ai) {
        var buf = new Float32Array($p.dataDimension[0] * $p.dataDimension[1]);
        for (var i = 0, l = data[attr].length; i < l; i++) {
            buf[i] = data[attr][i];
        }
        $p.texture.tData.update(
            buf, [0, $p.dataDimension[1] * ai], $p.dataDimension
        );
    });

    //TODO: get data statistics using the GPU
    if(stats !== null) {
        $p.fieldDomains = $p.fields.map(function(k, i) {
            return [stats[k].min, stats[k].max];
        })
        .concat(new Array($p.deriveMax).fill([0, 1]));

        $p.uniform("uFieldDomains", "vec2",  $p.fieldDomains);

    } else {
        $p.uniform("uFieldDomains", "vec2",  $p.fields.map(f => [0, 1]));
    }


    // $p.texture.tData.sampler = $p.uniform.uDataInput;
    $p.uniform.uDataInput = $p.texture.tData;

    function getFieldWidth($int_fid) {
        return this.uFieldWidths[fid];
    }

    function getFieldDomain($int_fid) {
        return this.uFieldDomains[fid];
    }

    function getData($int_fid, $float_r, $float_s) {
        var t, value;
        if (fid >= this.uFieldCount + this.uIndexCount) {
            t = (float(fid - this.uFieldCount - this.uIndexCount) + s) /
                float(this.uDeriveCount);
            value = texture2D(this.fDerivedValues, vec2(r, t)).a;
        } else {
            if (this.uIndexCount > 0 && fid == 0) value = this.aDataValx;
            else if (this.uIndexCount > 1 && fid == 1) value = this.aDataValy;
            else {
                t = (float(fid - this.uIndexCount) + s) / float(this.uFieldCount);
                value = texture2D(this.uDataInput, vec2(r, t)).a;
            }
        }
        return value;
    }

    function getNonIndexedData($int_fieldId, $float_addrX, $float_addrY) {
        var offsetY, value;
        if (fieldId >= this.uFieldCount + this.uIndexCount) {
            offsetY = (float(fieldId - this.uFieldCount - this.uIndexCount) + addrY) /
                float(this.uDeriveCount);
            value = texture2D(this.fDerivedValues, vec2(addrX, offsetY)).a;
        } else {
            offsetY = (float(fieldId - this.uIndexCount) + addrY) / float(this.uFieldCount);
            value = texture2D(this.uDataInput, vec2(addrX, offsetY)).a;
        }
        return value;
    }

    $p.subroutine("getFieldWidth", "float", getFieldWidth);
    $p.subroutine("getFieldDomain", "vec2", getFieldDomain);
    $p.subroutine("getData", "float", getData);
    $p.subroutine("getNonIndexedData", "float", getNonIndexedData);

    var gl = $p.ctx;
    gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdx.location, 0);
    gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataValx.location, 0);
    gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
    gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);

});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = output;
function output($p) {
    return function(format) {
        var buf = $p.getResult(),
            res = {},
            offset = 0;

        var rs = 0;

        if ($p.resultDimension[0] > 1) {
            res[$p.fields[rs]] = $p.attribute.aDataValx.data;
            rs++;
        }

        if ($p.resultDimension[1] > 1) {
            var bx = $p.attribute.aDataValx.data;
            var by = $p.attribute.aDataValy.data;
            var ax = new Array($p.resultDimension[0] * $p.resultDimension[1]),
                ay = new Array($p.resultDimension[0] * $p.resultDimension[1]);

            for (var y = 0; y < $p.resultDimension[1]; y++) {
                for (var x = 0; x < $p.resultDimension[0]; x++) {

                    ax[y * $p.resultDimension[0] + x] = bx[x];
                    ay[y * $p.resultDimension[0] + x] = by[y]
                }
            }
            res[$p.fields[0]] = ax;
            res[$p.fields[rs]] = ay;
            rs++;
        }

        var arraySize = $p.resultDimension[0] * $p.resultDimension[1];

        for (var i = rs; i < $p.fields.length; i++) {
            res[$p.fields[i]] = buf.subarray(offset, offset + arraySize);
            offset += arraySize;
        };

        if (format == 'row') {
            var objectArray = new Array(arraySize);

            for (var i = 0; i < arraySize; i++) {
                var obj = {};
                Object.keys(res).forEach(function(f) {
                    var kid = $p.dkeys.indexOf(f),
                        dtype = $p.dtypes[kid];

                    if (dtype == 'string' && $p.categoryLookup.hasOwnProperty(f)) {
                        obj[f] = $p.categoryLookup[f][res[f][i]];
                    } else if ($p.intervals.hasOwnProperty(f) && $p.intervals[f].dtype == 'historgram') {
                        obj[f] = $p.intervals[f].min + res[f][i] * $p.intervals[f].interval;
                    } else {
                        obj[f] = res[f][i];
                    }
                });
                objectArray[i] = obj;
            }

            return objectArray;

        } else {
            return res;
        }
    }
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flexgl_src_flexgl__ = __webpack_require__(132);


function init(options) {
    var $p = options.context || null,
        container = options.container || document.body,
        viewport = options.viewport || [800, 450],
        padding = {left:0, right: 0,top: 0, bottom: 0};

    var defaultLayout = [
        {
            width: viewport[0],
            height: viewport[1],
            padding: {left: 30, right: 30, top: 30, bottom: 30},
            offset: [0, 0]
        }
    ];
    if ($p === null) {
        $p = new __WEBPACK_IMPORTED_MODULE_0__flexgl_src_flexgl__["a" /* default */]({
            container: container,
            width: viewport[0],
            height: viewport[1],
            padding: padding
        });
        $p.padding = padding;
        $p.viewport = viewport;
    }
    $p.container = container;
    $p.views = options.views || defaultLayout;
    return $p;
}


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FlexGL;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__program__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framebuffer__ = __webpack_require__(138);





function FlexGL(arg) {

    var flexgl = (this instanceof FlexGL) ? this : {},
        options = arg || {},
        container = options.container || null,
        canvas = options.canvas || document.createElement("canvas"),
        width = options.width || null,
        height = options.height || null,
        padding = options.padding || {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        ctx = options.context || options.ctx || null,
        kernels = {},
        program = null,
        sharedFunction = options.sharedFunction || {};


    if (typeof(canvas) == "string") {
        if (canvas[0] == "#") canvas = document.getElementById(cavnas.substring(1));
        else canvas = document.getElementById(cavnas);
    }
    if (container) {
        container = (typeof(container) == "string") ? document.getElementById(container) : container;
        if (width === null) width = container.clientWidth;
        if (height === null) height = container.clientHeight;
    }
    // width -= padding.left + padding.right;
    // height -= padding.top + padding.bottom;
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = "absolute";
    canvas.style.marginLeft = padding.left + "px";
    canvas.style.marginTop = padding.top + "px";

    if (ctx === null)
        ctx = setupWebGL(canvas);
    flexgl.ctx = ctx;
    flexgl.canvas = canvas;

    ctx._dict = options.env || options.dict || options.dictionary || {};


    var resources = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* default */](ctx),
        framebuffers = new __WEBPACK_IMPORTED_MODULE_3__framebuffer__["a" /* default */](ctx),
        programManager = new __WEBPACK_IMPORTED_MODULE_1__program__["a" /* default */](ctx, resources),
        shaders = new __WEBPACK_IMPORTED_MODULE_2__shader__["a" /* default */](ctx, resources);

    var blendExt = ctx.getExtension("EXT_blend_minmax");
    if (blendExt) {
        ctx.MAX_EXT = blendExt.MAX_EXT;
        ctx.MIN_EXT = blendExt.MIN_EXT;
    }

    ctx.ext = ctx.getExtension("ANGLE_instanced_arrays");
    enableExtension([
        "OES_texture_float",
        "OES_texture_float_linear",
        // "OES_texture_half_float",
        // "OES_texture_half_float_linear"
    ]);

    if (container)
        container.appendChild(canvas);

    function setupWebGL(canvas) {
        var names = ["webgl", "experimental-webgl"];
        var gl = null;
        for (var i = 0; i < names.length; ++i) {
            try {
                gl = canvas.getContext(names[i]);
            } catch (e) {}
            if (gl) break;
        }
        return gl;
    }

    function enableExtension(extensions) {
        if (!Array.isArray(extensions)) extensions = [extensions];
        extensions.forEach(function(extension) {
            var extProps = ctx.getExtension(extension);
            if (extProps !== null) {
                Object.keys(extProps).forEach(function(ep) {
                    if (!ext.hasOwnProperty(ep)) {
                        ctx.ext[ep] = extProps[ep];
                    }
                })
            }
        });
    };

    flexgl.enableExtension = enableExtension;

    /**
     * Allocate Attributes in vertex buffer array stored in GPU memory
     * @param  {String} name attribute name
     * @param  {String} type attribute type: float, vec2, ...
     * @param  {Array} data data values
     * @return {Object}      FLexGL object
     */
    flexgl.attribute = function(name, type, data) {
        resources.allocate("attribute", name, type, data);
        Object.defineProperty(flexgl.attribute, name, {
            get: function() {
                return resources.attribute[name];
            },
            set: function(data) {
                resources.attribute[name].load(data);
            }
        });
        return flexgl;
    };
    flexgl.buffer = flexgl.attribute; //alias

    /**
     * Create a Uniform variable for WebGL shader programs
     * @param  {String} name attribute name
     * @param  {String} type uniform variable type: float, vec2, ...
     * @param  {Array} data data values
     * @return {Object}      FLexGL object
     */
    flexgl.uniform = function(name, type, data) {
        resources.allocate("uniform", name, type, data);
        if (!flexgl.uniform.hasOwnProperty(name)) {
            Object.defineProperty(flexgl.uniform, name, {
                get: function() {
                    return resources.uniform[name];
                },
                set: function(data) {
                    resources.uniform[name].load(data);
                    if (ctx.isProgram(program))
                        resources.uniform[name].link(program);
                }
            });
        }
        return flexgl;
    };

    flexgl.uniform.serialize = function(aoa) {
        var sa = [];
        aoa.forEach(function(a) {
            sa = sa.concat(a);
        })
        return sa;
    }

    /**
     * Create a Uniform variable for WebGL shader programs
     * @param  {String} name attribute name
     * @param  {String} type texture type: unsigned_byte or float, ...
     * @param  {Array} data data values
     * @param  {Array} dim [width, height]
     * @param  {String} [channel='alpha'] WebGL formats (rgba, alpha)
     * @param  {Object} [sampler=null] FLexGL Uniform Object
     * @return {Object}      FLexGL object
     */
    flexgl.texture = function(name, type, data, dim, channel, sampler) {
        resources.allocate("texture", name, type, dim, channel, data, sampler);
        Object.defineProperty(flexgl.texture, name, {
            get: function() {
                return resources.texture[name];
            },
            set: function(data) {
                resources.texture[name].load(data);
            }
        });
        return flexgl;
    }

    flexgl.texture.update = function(name, data, offset, dim) {
        resources.texture[name].update(data, offset, dim);
    }

    /**
     * Create a Uniform variable for WebGL shader programs
     * @param  {String} name attribute name
     * @param  {String} [type] Varying variable type: float, vec2, ...
     * @param  {Number} [size=1] data array
     * @return {Object}      FLexGL object
     */
    flexgl.varying = function(name, type, size) {
        resources.allocate("varying", name, type, size);
        return flexgl;
    };

    /**
     * Create a Uniform variable for WebGL shader programs
     * @param  {String} name attribute name
     * @param  {String} type attribute type: float, vec2, ...
     * @param  {Array} dim [width, height]
     * @param  {Object} [texture=null] FLexGL Texture Object
     * @return {Object}      FLexGL object
     */
    flexgl.framebuffer = function(name, type, dim, texture) {
        var texture = texture || resources.allocate('texture', name, type, dim, 'rgba', null);

        framebuffers.create(name, type, dim, texture);
        if (!flexgl.framebuffer.hasOwnProperty(name)) {
            Object.defineProperty(flexgl.framebuffer, name, {
                get: function() {
                    return framebuffers[name];
                }
            });
        }
        return flexgl;
    }

    flexgl.framebuffer.enableRead = function(name) {
        framebuffers[name].enableRead(program);
    }

    flexgl.bindFramebuffer = function(fbName) {
        if (fbName === null)
            ctx.bindFramebuffer(ctx.FRAMEBUFFER, null);
        else
            ctx.bindFramebuffer(ctx.FRAMEBUFFER, framebuffers[fbName].ptr);
    }

    flexgl.subroutine = function(name, type, fn) {
        resources.allocate("subroutine", name, type, fn);
        return flexgl;
    }

    flexgl.parameter = function(keyValuePairs) {
        Object.keys(keyValuePairs).forEach(function(key) {
            ctx._dict[key] = keyValuePairs[key];
            if (Array.isArray(ctx._dict[key])) {
                var i = 0;
                Object.defineProperty(ctx._dict, key, {
                    get: function() {
                        return keyValuePairs[key][i++];
                    },
                    set: function(newArray) {
                        i = 0;
                        ctx._dict[key] = newArray;
                    }
                });
            } else if(typeof(ctx._dict[key]) == 'object') {
                var dictKeys = Object.keys(ctx._dict[key]);
                fxgl.uniform('dict'+key, 'float', dictKeys.map(d=>ctx._dict[key][d]));
            }
        })
        return flexgl;
    }

    flexgl.dictionary = flexgl.parameter;

    flexgl.shader = programManager.shader;

    flexgl.program = function(name, vs, fs) {
        program = programManager.program(name, vs, fs);
        return ctx;
    }

    flexgl.createProgram = function(name, vs, fs) {
        program = programManager.create(name, vs, fs);
        return ctx;
    }

    flexgl.app = function(name, props) {
        var vs = flexgl.shader.vertex(props.vs),
            fs = flexgl.shader.fragment(props.fs),
            fb = props.framebuffer || null;

        flexgl.program(name, vs, fs);

        var draw = props.render || props.draw;

        return function(args) {
            var gl = flexgl.program(name);
            return draw.call(gl, args);
        }
    }

    flexgl.dimension = function() {
        return [canvas.width, canvas.height];
    }

    flexgl.resources = resources;

    return flexgl;
}


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Resource;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uniform__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attribute__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__texture__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__varying__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subroutine__ = __webpack_require__(136);






function Resource(glContext) {
    var resource = (this instanceof Resource) ? this : {},
        gpuResources = {};

    resource.uniform = new __WEBPACK_IMPORTED_MODULE_0__uniform__["a" /* default */](glContext);
    resource.attribute = new __WEBPACK_IMPORTED_MODULE_1__attribute__["a" /* default */](glContext);
    resource.texture = new __WEBPACK_IMPORTED_MODULE_2__texture__["a" /* default */](glContext);
    resource.varying = new __WEBPACK_IMPORTED_MODULE_3__varying__["a" /* default */](glContext);
    resource.subroutine = new __WEBPACK_IMPORTED_MODULE_4__subroutine__["a" /* default */]();

    var resourceTypes = ['uniform', 'attribute', 'texture', 'varying', 'subroutine'];

    resource.allocate = function(type, props) {
        if (resourceTypes.indexOf(type) === -1) {
            throw Error("Error: Invalid resource type: " + type);
        }
        var res = resource[type].create.apply(null, Array.prototype.slice.call(arguments, 1));
        res.resourceType = type;
        gpuResources[res.name] = res;
        if (!gpuResources.hasOwnProperty(res.name)) {
            Object.defineProperty(gpuResources, res.name, {
                get: function() {
                    return gpuResources[res.name];
                },
                set: function(data) {
                    gpuResources[res.name].load(data);
                }
            });
        }
        return res;
    };

    resource.link = function(program, resources) {
        var requiredResources = (Array.isArray(resources)) ? resources : Object.keys(gpuResources);
        requiredResources.forEach(function(resourceName) {
            if (gpuResources.hasOwnProperty(resourceName))
                gpuResources[resourceName].link(program);
        })
    };

    resource.get = function(name) {
        return gpuResources[name];
    }

    resource.create = resource.allocate;

    return resource;
};


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Attribute;
function Attribute(glContext) {
    
    var attribute = (this instanceof Attribute) ? this : {},
        ctx = glContext,
        attributeID = 0;

    function setAttribute(name, data) {
        if(Array.isArray(data) || ArrayBuffer.isView(data)){
            if(!ArrayBuffer.isView(data)) data = new Float32Array(data);
            attribute[name].data = data;
            ctx.bindBuffer(ctx.ARRAY_BUFFER, attribute[name].ptr);
            ctx.bufferData(ctx.ARRAY_BUFFER, data, ctx.STATIC_DRAW);
        }
    }
    attribute.create = function(name, type, data) {
        attribute[name] = {
            name: name,
            type: type || 'float',
            data: null,
            location: attributeID++,
            ptr: ctx.createBuffer(),
            size: parseInt(type.slice(3,4)) || 1
        };

        if(data !== null && data.length) setAttribute(name, data);

        attribute[name].link = function(program) {
            ctx.bindBuffer(ctx.ARRAY_BUFFER, this.ptr);
            this.location = ctx.getAttribLocation(program, this.name);
            ctx.vertexAttribPointer(this.location, this.size, ctx.FLOAT, false, 0, 0);
            ctx.enableVertexAttribArray(this.location);
            return this;
        }

        attribute[name].load = function(arrayBuffer) {
            setAttribute(this.name, arrayBuffer);
            return this;
        }

        attribute[name].header = function() {
            return 'attribute ' + this.type + ' ' + this.name + ';\n';
        }

        attribute[name].delete = function() {
            ctx.deleteBuffer(this.ptr);
        }

        return attribute[name];
    };

    return attribute;
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Varying;
function Varying(glContext) {

    var varying = (this instanceof Varying) ? this : {},
        ctx = glContext;

    varying.create = function(name, type, size) {
        varying[name] = {
            name: name,
            type: type || 'float',
            size: size || 1,
        };

        varying[name].link = function() {};

        varying[name].header = function() {
            var header = 'varying ' + this.type + ' ' + this.name;
            if(this.size > 1)
                header += '[' + this.size + ']';
            return header + ';\n';
        }

        return varying[name];
    }

    return varying;
}


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Subroutine;
function Subroutine() {

    var subroutine = (this instanceof Subroutine) ? this : {};

    subroutine.create = function(name, type, fn) {
        subroutine[name] = {
            name: name,
            type: type || 'float',
            fn: fn,
            resourceType: "subroutine"
        };

        subroutine[name].link = function(program) {
            return this;
        }

        subroutine[name].load = function(fn) {
            subroutine[name].fn = fn;
            return this;
        }

        subroutine[name].header = function() {
            return this.fn.toString();
        }

        return subroutine[name];
    };

    return subroutine;
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Program;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader__ = __webpack_require__(62);


function Program(glContext, resources) {

    var program,
        ctx = glContext,
        pm = {},
        kernels = {},
        shaders = new __WEBPACK_IMPORTED_MODULE_0__shader__["a" /* default */](glContext, resources);

    pm.create = function(name, vs, fs) {
        var name = name || "default",
            vs = vs || "default",
            fs = fs || "default",
            deps = [];

        if (kernels.hasOwnProperty(name)) {
            pm.delete(name);
        }

        kernels[name] = ctx.createProgram();

        kernels[name].vs = (typeof vs == "object") ? vs : shaders.vertex[vs];
        kernels[name].fs = (typeof fs == "object") ? fs : shaders.fragment[fs];

        ctx.attachShader(kernels[name], kernels[name].vs);
        ctx.attachShader(kernels[name], kernels[name].fs);
        ctx.linkProgram(kernels[name]);
        var linked = ctx.getProgramParameter(kernels[name], ctx.LINK_STATUS);
        if (!linked) {
            var lastError = ctx.getProgramInfoLog(kernels[name]);
            throw ("Error in program linking:" + lastError);
            ctx.deleteProgram(kernels[name]);
            return null;
        }

        deps = deps.concat(kernels[name].vs.deps);
        deps = deps.concat(kernels[name].fs.deps);
        kernels[name].deps = deps;

        return kernels[name];
    }

    pm.use = pm.program = function(name, vs, fs) {
        if (kernels.hasOwnProperty(name)) {
            program = kernels[name];
            ctx.useProgram(program);
            resources.link(program, program.deps);
            return program;
        } else {
            return pm.create(name, vs, fs);
        }
    }

    pm.delete = function(name) {
        if (kernels.hasOwnProperty(name)) {
            ctx.detachShader(kernels[name], kernels[name].vs);
            ctx.detachShader(kernels[name], kernels[name].fs);
            ctx.deleteProgram(kernels[name]);
            delete kernels[name];
        }
    }

    pm.shader = function(arg, fn) {
        var options = arg;
        shaders.create(options, fn);
        return pm;
    }

    pm.shader.vertex = function(fn) {
        var options = {
            type: "vertex"
        };
        if (fn.name) options.name = fn.name;
        return shaders.create(options, fn);
    }

    pm.shader.fragment = function(fn) {
        var options = {
            type: "fragment"
        };
        if (fn.name) options.name = fn.name;
        return shaders.create(options, fn);
    }

    return pm;
}


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Framebuffer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texture__ = __webpack_require__(61);


function Framebuffer(glContext) {

    var framebuffer = (this instanceof Framebuffer) ? this : {},
        ctx = glContext;

    framebuffer.create = function(name, type, dim, texture) {

        framebuffer[name] = {
            ptr: ctx.createFramebuffer(),
            name: name,
            type: type || "float",
            width: dim[0] || 1024,
            height: dim[1] || 1024,
            texture: texture || null,
            renderbuffer: ctx.createRenderbuffer(),
        }

        if (framebuffer[name].texture === null) {
            var buf = (type == 'float') ?
                new Float32Array(dim[0] * dim[1] * 4) :
                new Uint8Array(dim[0] * dim[1] * 4);
            framebuffer[name].texture = Object(__WEBPACK_IMPORTED_MODULE_0__texture__["a" /* default */])(ctx).create(name, type, dim, "rgba", buf);
        }

        var renderbuffer = framebuffer[name].renderbuffer;
        ctx.bindFramebuffer(ctx.FRAMEBUFFER, framebuffer[name].ptr);
        ctx.bindRenderbuffer(ctx.RENDERBUFFER, renderbuffer);
        ctx.renderbufferStorage(
            ctx.RENDERBUFFER,
            ctx.DEPTH_COMPONENT16,
            framebuffer[name].width,
            framebuffer[name].height
        );
        ctx.framebufferTexture2D(
            ctx.FRAMEBUFFER,
            ctx.COLOR_ATTACHMENT0,
            ctx.TEXTURE_2D,
            framebuffer[name].texture.ptr,
            0
        );
        ctx.framebufferRenderbuffer(
            ctx.FRAMEBUFFER,
            ctx.DEPTH_ATTACHMENT,
            ctx.RENDERBUFFER,
            renderbuffer
        );
        ctx.bindRenderbuffer(ctx.RENDERBUFFER, null);
        ctx.bindFramebuffer(ctx.FRAMEBUFFER, null);

        framebuffer[name].enableRead = function(program) {
            ctx.activeTexture(ctx.TEXTURE0 + this.texture.index);
            ctx.bindTexture(ctx.TEXTURE_2D, this.texture.ptr);
            this.texture.location = ctx.getUniformLocation(program, this.texture.name);
            ctx.uniform1i(this.texture.location, this.texture.index);
        };

        framebuffer[name].delete = function() {
            ctx.bindRenderbuffer(gl.RENDERBUFFER, null);
            ctx.bindFramebuffer(gl.FRAMEBUFFER, null);
            ctx.deleteRenderbuffer(this.renderbuffer);
            ctx.deleteTexture(this.texture.ptr)
            ctx.deleteFramebuffer(this.ptr);
        };

        return framebuffer[name];
    }

    return framebuffer;
}


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__derive__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reveal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aggregate__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extent__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__visualize__ = __webpack_require__(144);








function compile(fxgl, fields, spec) {

    // if(spec.hasOwnProperty('perceptual'))
    //     operations.perceptual = kernels.perceptual(fxgl);
    //
    // if(spec.hasOwnProperty('derive'))
    //     operations.derive = kernels.derive(fxgl, spec.derive);

    return {
        aggregate : Object(__WEBPACK_IMPORTED_MODULE_2__aggregate__["a" /* default */])(fxgl),
        cache     : Object(__WEBPACK_IMPORTED_MODULE_3__cache__["a" /* default */])(fxgl),
        match     : Object(__WEBPACK_IMPORTED_MODULE_4__match__["a" /* default */])(fxgl, fields),
        extent    : Object(__WEBPACK_IMPORTED_MODULE_5__extent__["a" /* default */])(fxgl),
        visualize : Object(__WEBPACK_IMPORTED_MODULE_6__visualize__["a" /* default */])(fxgl)
        // perceive  : kernels.reveal(fxgl)
    }
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = aggregate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(59);


const vecId = ['x', 'y', 'z'];
const aggrOpts = ['$min', '$max', '$count', '$sum', '$avg', '$var', '$std'];

function aggregate($p) {
    var aggregate = {};

    $p.uniform('uGroupGetStat', 'float', 0.0)
        .uniform('uAggrOpt', 'int', 2);

    function vertexShader() {
        gl_PointSize = 1.0;

        var i, j, k;
        var x, groupKeyValue;

        i = (this.aDataIdx + 0.5) / this.uDataDim.x;
        j = (this.aDataIdy + 0.5) / this.uDataDim.y;
        this.vResult = this.getData(this.uFieldId, i, j);

        if (this.aDataIdy * this.uDataDim.x + this.aDataIdx >= this.uDataSize) {
            this.vResult = 0.0;
        }

        if (this.uFilterFlag == 1) {
            if (texture2D(this.fFilterResults, vec2(i, j)).a < this.uVisLevel - 0.01)
                this.vResult = 0.0;
        }

        var pos = new Vec2();
        for (var ii = 0; ii < 2; ii++) {
            var gid = new Int();
            gid = this.uGroupFields[ii];
            if (gid != -1) {
                if (this.uIndexCount > 0) {
                    if (gid == 0) {
                        groupKeyValue = i;
                    } else if (gid == 1) {
                        groupKeyValue = j;
                    }
                }
                if (this.uIndexCount == 0 || gid > 1) {
                    var d = new Vec2();
                    d = this.getFieldDomain(gid);
                    groupKeyValue = (this.getData(gid, i, j) - d.x) / (d.y - d.x) * (this.getFieldWidth(gid)) / (this.getFieldWidth(gid) + 1.);
                    groupKeyValue += 0.5 / this.getFieldWidth(gid);
                }
                pos[ii] = groupKeyValue * 2.0 - 1.0;
            } else {
                pos[ii] = 0.5;
            }
        }

        gl_Position = vec4(pos, 0.0, 1.0);
    }

    function fragmentShader() {
        if (this.vResult == 0.0) discard;

        if (this.uAggrOpt == 2)
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        else
            gl_FragColor = vec4(0.0, 0.0, 1.0, this.vResult);
    }

    var vs = $p.shader.vertex(vertexShader),
        fs = $p.shader.fragment(fragmentShader);

    $p.program("group", vs, fs);

    var vs2 = $p.shader.vertex(function main() {
        gl_Position = vec4(this._square, 0, 1);
    });

    var fs2 = $p.shader.fragment(function() {
        var x, y, res;
        $vec4(value);
        x = (gl_FragCoord.x) / this.uResultDim.x;
        y = (gl_FragCoord.y) / this.uResultDim.y;
        y = (float(this.uFieldId - this.uIndexCount) + y) / float(this.uFieldCount);
        value = texture2D(this.uDataInput, vec2(x, y));
        if (this.uAggrOpt > 3)
            res = value.a / value.b;
        else
            res = value.a;
        gl_FragColor = vec4(0.0, 0.0, 0.0, res);
    });

    $p.program("group2", vs2, fs2);

    var resultFieldCount,
        getAvgValues = false,
        getVarStd = false,
        resultDomains;

    function _execute(opts, groupFieldIds, resultFieldIds) {
        resultFieldCount = resultFieldIds.length;
        var gl = $p.program("group");
        $p.bindFramebuffer("fGroupResults");
        $p.framebuffer.enableRead("fDerivedValues");
        $p.framebuffer.enableRead("fFilterResults");

        gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdx.location, 0);
        gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataValx.location, 0);
        gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
        gl.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);

        $p.uniform.uGroupFields = groupFieldIds;
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE);
        gl.blendEquation(gl.FUNC_ADD);
        $p.uniform.uGroupGetStat = 0.0;
        var resultDomains = new Array(resultFieldIds.length);
        $p.uniform.uResultDim = $p.resultDimension;

        getAvgValues = false;
        getVarStd = false;
        resultFieldIds.forEach(function(f, i) {
            var opt = aggrOpts.indexOf(opts[i]);
            if (opt == -1) throw Error("unknow operator for aggreation: " + opts[i]);
            gl.viewport(0, i * $p.resultDimension[1], $p.resultDimension[0], $p.resultDimension[1]);
            if (opt == 0) gl.blendEquation(gl.MIN_EXT);
            else if (opt == 1) gl.blendEquation(gl.MAX_EXT);
            else gl.blendEquation(gl.FUNC_ADD);
            $p.uniform.uFieldId = f;
            $p.uniform.uAggrOpt = opt;
            gl.ext.drawArraysInstancedANGLE(
                gl.POINTS, 0,
                $p.dataDimension[0],
                $p.dataDimension[1]
            );
            if (opt > 3) {
                getAvgValues = true;
                if (opt > 4) getVarStd = true;
            }
        });

        if (getAvgValues) {
            // console.log('*** Second Pass for Aggregation');
            var fieldCount = $p.uniform.uFieldCount.data,
                preAggrData = $p.uniform.uDataInput.data;

            $p.uniform.uDataInput.data = $p.framebuffer.fGroupResults.texture;
            $p.uniform.uFieldCount.data = resultFieldIds.length;


                $p.framebuffer(
                    "fAggrStats",
                    "float", [$p.resultDimension[0], $p.resultDimension[1] * resultFieldIds.length]
                );
                $p.bindFramebuffer("fAggrStats");



            gl = $p.program("group2");
            $p.framebuffer.enableRead("fGroupResults");
            gl.ext.vertexAttribDivisorANGLE($p.attribute._square.location, 0);

            gl.disable(gl.BLEND);
            resultFieldIds.forEach(function(f, i) {
                var opt = aggrOpts.indexOf(opts[i]);
                $p.uniform.uAggrOpt = opt;
                $p.uniform.uFieldId = i;
                gl.viewport(0, i * $p.resultDimension[1], $p.resultDimension[0], $p.resultDimension[1]);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
            })
            $p.uniform.uDataInput.data = $p.framebuffer.fAggrStats.texture;

        } else {
            $p.uniform.uDataInput.data = $p.framebuffer.fGroupResults.texture;

        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    aggregate.execute = function(spec) {
        var groupFields = spec.$by || spec.$group,
            groupFieldIds = [-1, -1].
        resultDim = [1, 1];

        if (!Array.isArray(groupFields)) groupFields = [groupFields];
        if (groupFields.length == 2) {
            groupFieldIds[0] = $p.fields.indexOf(groupFields[0]);
            groupFieldIds[1] = $p.fields.indexOf(groupFields[1]);
            $p.resultDimension = [
                $p.fieldWidths[groupFieldIds[0]],
                $p.fieldWidths[groupFieldIds[1]]
            ];
        } else {
            groupFieldIds[0] = $p.fields.indexOf(groupFields[0]);
            $p.resultDimension = [$p.fieldWidths[groupFieldIds[0]], 1];
        }


        // console.log( groupFieldIds, $p.resultDimension, $p.fieldWidths, $p.fieldDomains);
        // var resultFields = Object.keys(spec).filter(function(d){return d!='$by' && d!='$group';}),
        //     resultFieldIds = resultFields.map(function(f) { return fields.indexOf(f); }),
        //     operators = resultFields.map(function(r){return spec[r]; });


        var newFieldSpec = spec.$calculate || spec.$reduce || spec.$out || null;

        if (newFieldSpec === null) {
            newFieldSpec = {};
            Object.keys(spec).filter(function(d) {
                return d != '$by' && d != '$group';
            }).forEach(function(d) {
                newFieldSpec[d] = spec[d];
            });
        }

        var newFieldNames = Object.keys(newFieldSpec),
            resultFields = newFieldNames.map(function(f) {
                return newFieldSpec[f][Object.keys(newFieldSpec[f])[0]];
            }),
            resultFieldIds = resultFields.map(function(f) {
                return $p.fields.indexOf(f);
            }),
            operators = resultFields.map(function(f, i) {
                return Object.keys(newFieldSpec[newFieldNames[i]])[0];
            });

        if (!$p._update) {
            $p.framebuffer(
                "fGroupResults",
                "float", [$p.resultDimension[0], $p.resultDimension[1] * resultFields.length]
            );
        }
        _execute(operators, groupFieldIds, resultFieldIds);

        $p.getResult = aggregate.result;
        $p.indexes = groupFields;
        $p.dataDimension = $p.resultDimension;

        var newFieldIds = groupFieldIds.filter(function(f) {
            return f !== -1
        }).concat(resultFieldIds);

        $p.fields = groupFields
            .map(function(gf) {
                return (gf.substring(0, 4) == 'bin@') ? gf.slice(4) : gf;
            })
            .concat(newFieldNames);

        $p.uniform.uDataDim.data = $p.resultDimension;
        $p.uniform.uIndexCount.data = $p.indexes.length;
        $p.uniform.uFieldCount.data = $p.fields.length - $p.indexes.length;

        // $p.fieldWidths = $p.fieldWidths.concat($p.deriveWidths);
        // $p.fieldDomains = $p.fieldDomains.concat($p.deriveDomains);

        $p.fieldDomains = newFieldIds.map(function(f) {
            return $p.fieldDomains[f];
        });
        $p.fieldWidths = newFieldIds.map(function(f) {
            return $p.fieldWidths[f];
        });

        // $p.uniform.uDataInput.data = $p.framebuffer.fGroupResults.texture;

        $p.attribute.aDataItemId = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* seqFloat */])(0, $p.resultDimension[0] * $p.resultDimension[1] - 1);
        $p.dataSize = $p.resultDimension[0] * $p.resultDimension[1];
        $p.uniform.uDataSize.data = $p.dataSize;

        $p.indexes.forEach(function(d, i) {
            // $p.attribute['aDataId' + vecId[i]] = seqFloat(0, $p.resultDimension[i]-1);
            $p.attribute['aDataId' + vecId[i]] = new Float32Array($p.resultDimension[i]).map(function(d, i) {
                return i;
            });
            $p.attribute['aDataVal' + vecId[i]] = new Float32Array($p.resultDimension[i]).map(function(d, i) {
                return i;
            });
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute['aDataId' + vecId[i]].location, i);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute['aDataVal' + vecId[i]].location, i);
        });

        if ($p.indexes.length == 1) {
            $p.attribute.aDataIdy = new Float32Array(1);
            $p.attribute.aDataValy = new Float32Array(1);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);
        }
        if (!$p._update) {
            resultDomains = $p.opt.extent(resultFieldIds, $p.dataDimension);
        }
        for (var ii = $p.indexes.length; ii < $p.indexes.length + resultFieldIds.length; ii++) {
            $p.fieldDomains[ii] = resultDomains[ii - $p.indexes.length];
            $p.fieldWidths[ii] = resultDomains[ii - $p.indexes.length][1] - resultDomains[ii - $p.indexes.length][0];
        }

        $p.uniform.uFieldDomains.data = $p.fieldDomains;
        $p.uniform.uFieldWidths.data = $p.fieldWidths;
        $p.uniform.uFilterFlag.data = 0;

        $p.indexes.forEach(function(d, i) {
            // $p.attribute['aDataId' + vecId[i]] = seqFloat(0, $p.resultDimension[i]-1);
            var interval = 1;

            if ($p.intervals.hasOwnProperty(d))
                interval = $p.intervals[d].interval;

            $p.attribute['aDataVal' + vecId[i]] = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* seqFloat */])(
                $p.fieldDomains[i][0],
                $p.fieldDomains[i][1],
                interval
            );
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute['aDataId' + vecId[i]].location, i);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute['aDataVal' + vecId[i]].location, i);
        });
    }

    aggregate.result = function(arg) {
        var options = arg || {},
            offset = options.offset || [0, 0],
            resultSize = options.size || $p.resultDimension[0] * $p.resultDimension[1],
            rowTotal = Math.min(resultSize, $p.resultDimension[0]),
            colTotal = Math.ceil(resultSize / $p.resultDimension[0]);

        $p.bindFramebuffer("fGroupResults");
        var gl = $p.program("group"),
            result = new Float32Array(rowTotal * colTotal * 4 * resultFieldCount);

        gl.readPixels(offset[0], offset[1], rowTotal, colTotal * resultFieldCount, gl.RGBA, gl.FLOAT, result);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        return result.filter(function(d, i) {
            return i % 4 === 3;
        });
    }

    return aggregate;
}


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cache;
function cache(fxgl) {
    var cache = {},
        dataDimension = fxgl.uniform.uDataDim.data,
        fieldCount =  fxgl.uniform.uFieldCount.data,
        cacheTag;

    var vs = fxgl.shader.vertex(function () {
         gl_Position = vec4(this._square, 0, 1);
    });

    var fs = fxgl.shader.fragment(function () {
        var x, y;
        $vec4(value);
        x = (gl_FragCoord.x) / this.uDataDim.x;
        y = (gl_FragCoord.y) / (this.uDataDim.y * float(this.uFieldCount));
        value = texture2D(this.uDataInput, vec2(x, y));
        gl_FragColor = value;
    });

    fxgl.program("cache", vs, fs);

    cache.execute = function(tag, dataDim, fieldTotal) {
        cacheTag = tag;
        dataDimension = dataDim || fxgl.uniform.uDataDim.data;
        fieldCount = fieldTotal || fxgl.uniform.uFieldCount.data;

        console.log(fieldCount);

        fxgl.framebuffer(tag, "float", [dataDimension[0], dataDimension[1]*fieldCount]);
        fxgl.bindFramebuffer(tag);
        var gl = fxgl.program("cache");

        // console.log(dataDimension, fieldCount);
        gl.viewport(0, 0, dataDimension[0], dataDimension[1]*fieldCount);
        gl.clearColor( 0.0, 0.0, 0.0, 0.0 );
        gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.BLEND);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        var result = new Float32Array(dataDimension[0]*dataDimension[1]*4*fieldCount);
        gl.readPixels(0, 0, dataDimension[0], dataDimension[1]*fieldCount, gl.RGBA, gl.FLOAT, result);
        console.log(result.filter(function(d, i){ return i%4===3 } ));

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        fxgl.framebuffer.enableRead(tag);
        fxgl.uniform.uDataInput = fxgl.framebuffer[tag].texture;
    }

    cache.result =  function() {
        fxgl.bindFramebuffer(cacheTag);
        var gl = fxgl.program("cache"),
            result = new Float32Array(dataDimension[0]*dataDimension[1]*4*fieldCount);

        gl.readPixels(0, 0, dataDimension[0], dataDimension[1]*fieldCount, gl.RGBA, gl.FLOAT, result);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        return result.filter(function(d, i){ return i%4===0;} );
    }

    return cache;
}


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = match;
function vertexShaderFilter(){
    var i, j, k, value;
    var filter = new Int(0);
    var sel = new Int(0);
    var visSelect = new Bool(false);
    i = (this.aDataIdx+0.5) / this.uDataDim.x;
    j = (this.aDataIdy+0.5) / this.uDataDim.y;

    for(var f = 0; f < $(fieldCount)+$(indexCount); f++) {
        if(this.uFilterControls[f] == 1 || this.uVisControls[f] == 1) {
            value = this.getData(f, i, j);

            if(this.uFilterControls[f] == 1) {
                if(value < this.uFilterRanges[f].x || value >= this.uFilterRanges[f].y) {
                    filter -= 1;
                }
            }
            if(this.uVisControls[f] == 1) {
                if(value < this.uVisRanges[f].x || value >= this.uVisRanges[f].y) {
                    sel -= 1;
                }
                visSelect = true;
            }

        }
    }
    this.vResult = 0.1;
    if(filter < 0) {
        this.vResult = 0.0;
    } else {
        if(visSelect)
            this.vResult = (sel < 0) ? 0.1 : 0.2;
    }
    var x = i * 2.0 - 1.0;
    var y = j * 2.0 - 1.0;
    gl_PointSize = 1.0;
    gl_Position = vec4(x, y, 0.0, 1.0);
}

function vertexShaderSelect(){
    var i, j, k, value;
    i = (this.aDataIdx+0.5) / this.uDataDim.x;
    j = (this.aDataIdy+0.5) / this.uDataDim.y;
    this.vResult = this.uFilterLevel - 0.1;
    value = this.getData(this.uFieldId, i, j);
    for(var l = 0; l < 100; l++){
        if(l < this.uSelectCount) {
            if(value == this.uInSelections[l]) {
                this.vResult = this.uFilterLevel;
            }
        }
    }
    var x = i * 2.0 - 1.0;
    var y = j * 2.0 - 1.0;
    gl_PointSize = 1.0;
    gl_Position = vec4(x, y, 0.0, 1.0);
}

function fragmentShader() {
    gl_FragColor = vec4(0., 0., 0., this.vResult);
}

function match($p) {
    const SELECT_MAX = 100;
    var match = {},
        dataDimension = $p.uniform.uDataDim.data,
        fieldCount = $p.fields.length,
        filterControls = new Array(fieldCount).fill(0),
        filterRanges = $p.fieldDomains,
        visControls = new Array(fieldCount).fill(0),
        visRanges = $p.fieldDomains,
        inSelections = new Array(SELECT_MAX);

    $p.uniform("uFilterControls","int", filterControls)
        .uniform("uVisControls","int", filterControls)
        .uniform("uFilterRanges","vec2", filterRanges)
        .uniform("uVisRanges","vec2", filterRanges)
        .uniform("uInSelections", "float", Float32Array.from(inSelections))
        .uniform("uSelectMax", "int", SELECT_MAX)
        .uniform("uSelectCount", "int", 0);

    var filter = {
        vs: $p.shader.vertex(vertexShaderFilter),
        fs: $p.shader.fragment(fragmentShader)
    };

    var sel = {
        vs: $p.shader.vertex(vertexShaderSelect),
        fs: $p.shader.fragment(fragmentShader)
    };

    $p.program("filter", filter.vs, filter.fs);
    $p.program("match", sel.vs, sel.fs);

    match.control = function(ctrl) {
        // filterControls = ctrl;
    }

    function _execute(spec){
        var fields = $p.fields
        var gl;
        var matchFields = Object.keys(spec).filter(function(s){
            return spec[s].hasOwnProperty('$in');
        })
        .concat(Object.keys($p.crossfilters).filter(function(s){
            return $p.crossfilters[s].hasOwnProperty('$in');
        }))


        $p.bindFramebuffer("fFilterResults");
        $p.framebuffer.enableRead("fDerivedValues");
        $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
        $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);
        if(matchFields.length) {
            gl = $p.program("match");
            gl.viewport(0, 0, dataDimension[0], dataDimension[1]);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdx.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataValx.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);
            gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
            gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
            gl.enable( gl.BLEND );
            gl.blendFunc( gl.ONE, gl.ONE );
            gl.blendEquation(gl.MIN_EXT);

            matchFields.forEach(function(k){
                var fieldId = fields.indexOf(k);
                var inSelections = (spec.hasOwnProperty(k)) ? spec[k].$in :  $p.crossfilters[k].$in;
                if($p.categoryIndex.hasOwnProperty(k)) {
                    inSelections = inSelections
                        .slice(0, SELECT_MAX)
                        .map(function(v) { return $p.categoryIndex[k][v]; });
                } else {
                    inSelections = inSelections.slice(0, SELECT_MAX);
                }
                $p.uniform.uSelectCount = inSelections.length;
                $p.uniform.uInSelections = Float32Array.from(inSelections);
                $p.uniform.uFieldId = fieldId;

                gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);
                // filterRanges[fieldId*2] = Math.min.apply(null, spec[k].$in);
                // filterRanges[fieldId*2+1] = Math.max.apply(null, spec[k].$in);
                filterRanges[fieldId] = [Math.min.apply(null, inSelections), Math.max.apply(null, inSelections)];
            })
        }
        // console.log($p._responseType, spec);
        var filterSelections = Object.keys(spec).filter(function(s){
            return !spec[s].hasOwnProperty('$in');
        });

        var viewSelections = Object.keys($p.crossfilters).filter(function(s){
            return !$p.crossfilters[s].hasOwnProperty('$in');
        });;

        if(filterSelections.length || viewSelections.length){
            filterControls = new Array(fieldCount).fill(0);

            filterSelections.forEach(function(k){
                var fieldId = fields.indexOf(k);

                if(fieldId === -1) {
                    console.log('Skipped: Matching on invalid data field ' + k);
                    return;
                }
                if(spec[k].length < 2) spec[k][1] = spec[k][0];
                filterControls[fieldId] = 1;
                filterRanges[fieldId] = spec[k];
                // filterRanges[fieldId*2] = spec[k][0];
                // filterRanges[fieldId*2+1] = spec[k][1];
            });

            viewSelections.forEach(function(k){
                var fieldId = fields.indexOf(k);
                if(fieldId === -1) {
                    console.log('Skipped: Matching on invalid data field ' + k);
                    return;
                }
                if($p.crossfilters[k].length < 2) $p.crossfilters[k][1] = $p.crossfilters[k][0];
                visControls[fieldId] = 1;
                visRanges[fieldId] = $p.crossfilters[k];
            });

            $p.uniform.uFilterControls.data = filterControls;
            $p.uniform.uFilterRanges.data = filterRanges;
            $p.uniform.uVisControls.data = visControls;
            $p.uniform.uVisRanges.data = visRanges;

            gl = $p.program("filter");
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdx.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataValx.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);
            gl.disable(gl.BLEND);
            // gl.clearColor( 0.0, 0.0, 0.0, 0.0 );
            // gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

            gl.viewport(0, 0, dataDimension[0], dataDimension[1]);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);
        }
        $p.ctx.bindFramebuffer($p.ctx.FRAMEBUFFER, null);
        return filterRanges;
    }

    match.execute = function(spec) {
        filterControls = new Array(fieldCount).fill(0);
        visControls = new Array(fieldCount).fill(0);
        var filterSpec = spec;


        Object.keys($p.crossfilters).forEach(function(k, i) {
            if($p.categoryIndex.hasOwnProperty(k) && !$p.crossfilters[k].$in) {
                $p.crossfilters[k] = {$in: $p.crossfilters[k]};
            }
        });


        Object.keys(filterSpec).forEach(function(k, i) {
            if($p.categoryIndex.hasOwnProperty(k) && !spec[k].$in) {
                spec[k] = {$in: spec[k]};
            }
        });

        $p.uniform.uFilterFlag = 1;
        if(!$p._update) {
            filterRanges = $p.fieldDomains.slice();
            visRanges = $p.fieldDomains.slice();
        }
        var newDomains = _execute(spec);

        if(!$p._update){
            // console.log('checking filter domains', newDomains);
            newDomains.forEach(function(domain, fid) {
                var d = domain;
                if($p.dtypes[fid] == 'int') d[1] -= 1;
                $p.fieldDomains[fid] = d;
                $p.fieldWidths[fid] = $p.getDataWidth(fid, d);
            });

            $p.uniform.uFieldDomains.data = $p.fieldDomains;
            $p.uniform.uFieldWidths.data = $p.fieldWidths;
        }
    }

    match.result = function(arg) {
        var options = arg || {},
            offset = options.offset || [0, 0],
            resultSize = options.size || $p.dataDimension[0]* $p.dataDimension[1],
            rowSize = Math.min(resultSize, $p.dataDimension[0]),
            colSize = Math.ceil(resultSize/$p.dataDimension[0]);

        $p.bindFramebuffer("fFilterResults");

        var gl = $p.ctx;
        var bitmap = new Uint8Array(rowSize*colSize*4);
        gl.readPixels(offset[0], offset[1], rowSize, colSize, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
        // console.log(result.filter(function(d, i){ return i%4===0;} ));
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        // var result = [];
        // bitmap.forEach(function(d, i){ if(i%3===0 && d!==0) result.push(d);});
        // console.log(result);
        // return result;
        return  bitmap;
    }

    return match;
}


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extent;

const smallest = -Math.pow(2, 128);
function extent(fxgl) {

    var fieldCount = fxgl.uniform.uFieldCount.data;
    fxgl.framebuffer("fStats", "float", [2, fieldCount]);

    var vs = fxgl.shader.vertex(function() {
        gl_PointSize = 1.0;
        var i, j;
        if (this.aDataIdy * this.uDataDim.x + this.aDataIdx >= this.uDataSize) {
            this.vDiscardData = 1.0;
        } else {
            this.vDiscardData = 0.0;
            i = (this.aDataIdx + 0.5) / this.uDataDim.x;
            j = (this.aDataIdy + 0.5) / this.uDataDim.y;
            this.vResult = this.getData(this.uFieldId, i, j);
        }
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    });

    var fs = fxgl.shader.fragment(function() {
        if (this.vDiscardData == 1.0) discard;
        if (this.vResult >= 0.0) {
            gl_FragColor = vec4(0.0, 0.0, 1.0, this.vResult);
        } else {
            gl_FragColor = vec4(-1.0, this.vResult, 0.0, 0.0);
        }
    });

    var gl = fxgl.program("stats", vs, fs);

    return function(fieldIds, dataDimension) {
        if (!fxgl._update) {
            fxgl.framebuffer("fStats", "float", [2, fieldIds.length]);
        }
        var gl = fxgl.program("stats");
        fxgl.framebuffer.enableRead("fGroupResults");

        gl.ext.vertexAttribDivisorANGLE(fxgl.attribute.aDataIdx.location, 0);
        gl.ext.vertexAttribDivisorANGLE(fxgl.attribute.aDataValx.location, 0);
        gl.ext.vertexAttribDivisorANGLE(fxgl.attribute.aDataIdy.location, 1);
        gl.ext.vertexAttribDivisorANGLE(fxgl.attribute.aDataValy.location, 1);

        fxgl.bindFramebuffer("fStats");
        gl.clearColor(smallest, smallest, smallest, smallest);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE);
        // gl.finish();
        // fxgl.uniform.uDeriveCount = deriveFieldCount;
        var extents = new Array(fieldIds.length);
        var start = new Date();
        var idCount = fxgl.uniform.uIndexCount.data;
        fieldIds.forEach(function(d, i) {
            fxgl.uniform.uFieldId = i + idCount;
            gl.viewport(0, i, 1, 1);
            gl.blendEquation(gl.MAX_EXT);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);
            // gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.FLOAT, max);

            gl.viewport(1, i, 1, 1);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);

            gl.blendEquation(gl.MIN_EXT);
            gl.ext.drawArraysInstancedANGLE(gl.POINTS, 0, dataDimension[0], dataDimension[1]);

            // var extent = new Float32Array(8);
            // gl.readPixels(0, i, 2, 1, gl.RGBA, gl.FLOAT, extent);
            // console.log(extent);
            // var ext = extent;
            // var minValue = (ext[0] > 0) ? ext[1] : ext[7],
            //     maxValue = (ext[2] > 0) ? ext[3] : ext[5];
            //  extents[i] = [minValue, maxValue];
        });
        var extent = new Float32Array(8 * fieldIds.length);
        gl.readPixels(0, 0, 2, fieldIds.length, gl.RGBA, gl.FLOAT, extent);
        fieldIds.forEach(function(d, i) {
            var ext = extent.slice(i * 8, i * 8 + 8);
            var minValue = (ext[4] < 0) ? ext[5] : ext[7],
                maxValue = (ext[2] > 0) ? ext[3] : ext[1];
            extents[i] = [minValue, maxValue];
        });
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return extents;
    }
}


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = visualize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctypes__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reveal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encode__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interact__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metavis_layout__ = __webpack_require__(151);









const visualEncodings = ['x', 'y', 'color', 'opacity', 'width', 'height', 'size'];
const userActions = ['click', 'hover', 'brush', 'zoom', 'pan'];

function visualize($p) {

    var colorManager = Object(__WEBPACK_IMPORTED_MODULE_0__color__["a" /* default */])($p),
        chartPadding = $p.padding || {left: 0, right: 0, top: 0, bottom: 0},
        viewport = [
            $p.viewport[0],
            $p.viewport[1],
        ];

    var vis = new __WEBPACK_IMPORTED_MODULE_6__metavis_layout__["a" /* default */]({
        container: $p.container,
        width: viewport[0] + chartPadding.left + chartPadding.right,
        height: viewport[1] + chartPadding.top + chartPadding.bottom,
        canvas: $p.canvas,
        padding: chartPadding
    });

    $p.uniform('uVisualEncodings',  'int',   new Array(visualEncodings.length).fill(-1))
        .uniform('uViewDim',        'vec2',  $p.viewport)
        .uniform('uVisShape',       'int',   1)
        .uniform('uInterleaveX',    'int',   0)
        .uniform('uVisDomains',     'vec2',  $p.fieldDomains.map(d=>d.slice()))
        .uniform('uVisScale',       'vec2', [1.0, 1.0])
        .uniform('uPosOffset',      'vec2', [0.0, 0.0])
        .uniform('uFeatureCount',   'int',   0)
        .uniform('uMarkSize',       'float', 10.0)
        .uniform('uMarkSpace',      'vec2',  [0.02, 0.02])
        .uniform('uDefaultAlpha',   'float', 1.0)
        .uniform('uDefaultWidth',   'float', 1.0 / $p.viewport[0])
        .uniform('uDefaultHeight',  'float', 1.0 / $p.viewport[1])
        .uniform('uMaxRGBA',        'vec4',  [0, 0, 0, 0])
        .uniform('uDefaultColor',   'vec3',  [0.8, 0, 0])
        .uniform('uColorMode',      'int',   1)
        .varying('vColorRGBA',      'vec4'   );

    var enhance = Object(__WEBPACK_IMPORTED_MODULE_3__reveal__["a" /* default */])($p);

    $p.framebuffer('offScreenFBO', 'float', $p.viewport);
    $p.framebuffer('visStats', 'float', [1, 1]);

    // $p.framebuffer.enableRead('offScreenFBO');
    $p.renderMode = 'instancedXY';

    var renderer = Object(__WEBPACK_IMPORTED_MODULE_2__render__["a" /* default */])($p);

    function updateInstancedAttribute(vm) {
        if(Array.isArray(vm)){
            $p.uniform.uFeatureCount = vm.length;
            var fv = new Float32Array(vm.length*2);
            vm.forEach(function(f, i) {
                fv[i*2] = $p.fields.indexOf(f);
                fv[i*2+1] = i;
            });
            $p.attribute.aDataFieldId = fv;
        }
    }

    var viz = function(options) {
        $p.renderMode = 'instancedXY';
        $p.revealDensity = false;
        var vmap = options.vmap || {},
            mark = options.mark || vmap.mark || 'line',
            data = options.data || null,
            interaction = options.interaction,
            viewIndex = options.viewIndex,
            viewTag = $p.views[viewIndex].id;

        var visDomain = {},
            visDimension = vmap.viewport || [$p.views[viewIndex].width, $p.views[viewIndex].height] || viewport;

        var width = visDimension[0],
            height =  visDimension[1],
            padding = $p.views[viewIndex].padding || chartPadding,
            offset = $p.views[viewIndex].offset || [0, 0];


        var dimSetting = Object(__WEBPACK_IMPORTED_MODULE_4__encode__["a" /* default */])($p, vmap, colorManager);

        if(!$p._update){
            $p.fields.forEach(function(f, i){
                visDomain[f] = $p.fieldDomains[i].slice();
                if(vmap.zero && (f == vmap.height || f == vmap.width ) && visDomain[f][0]>0) visDomain[f][0] = 0;
            });
        }

        var gl = $p.program($p.renderMode);
        $p.framebuffer.enableRead('fFilterResults');
        $p.framebuffer.enableRead('fDerivedValues');
        $p.framebuffer.enableRead('fGroupResults');

        if($p.renderMode == 'instancedXY') {
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdx.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataValx.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataIdy.location, 1);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataValy.location, 1);
        } else if($p.renderMode == 'interleave') {
            updateInstancedAttribute(vmap.x);
            updateInstancedAttribute(vmap.y);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataFieldId.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataItemId.location, 1);
        } else {
            var val0 = new Float32Array($p.dataSize),
                val1 = new Float32Array($p.dataSize);
            for(var y = 0; y < $p.dataDimension[1]; y++) {
                for(var x = 0; x < $p.dataDimension[0]; x++) {
                    val0[y*$p.dataDimension[0] + x] = $p.attribute.aDataValx.data[x];
                    val1[y*$p.dataDimension[0] + x] = $p.attribute.aDataValy.data[y];
                }
            }
            $p.attribute.aDataItemVal0 = val0;
            $p.attribute.aDataItemVal1 = val1;
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aVertexId.location, 0);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataItemId.location, 1);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataItemVal0.location, 1);
            $p.ctx.ext.vertexAttribDivisorANGLE($p.attribute.aDataItemVal1.location, 1);
        }

        // if(typeof data == 'string')
        //     $p.uniform.uDataInput = $p.framebuffer[data].texture;
        var viewSetting = {
            domain: visDomain,
            width: width,
            height: height,
            fields: $p.fields,
            vmap: vmap,
            onclick: interaction,
            categories: $p.categoryLookup,
            padding: padding,
            left: offset[0],
            top: viewport[1] - height - offset[1],
            colors: colorManager.getColors(),
            showLegend: $p.views[viewIndex].legend
        };

        viewSetting = Object.assign(viewSetting, dimSetting);

        if($p.revealDensity) {
            $p.bindFramebuffer('offScreenFBO');
            gl.clearColor( 1.0, 1.0, 1.0, 0.0 );
            gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
            gl.blendFunc(gl.ONE, gl.ONE );
        } else {
            $p.bindFramebuffer(null);
            // gl.clearColor( 1.0, 1.0, 1.0, 0.0 );
            gl.blendFunc( gl.ONE, gl.ONE_MINUS_SRC_ALPHA );
            // gl.blendFunc(gl.SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA);
        }

        gl.viewport(
            offset[0] + padding.left,
            offset[1] + padding.bottom,
            width-padding.left-padding.right,
            height-padding.top-padding.bottom
        );
        gl.lineWidth(1.0);

        gl.disable(gl.CULL_FACE);
        gl.disable(gl.DEPTH_TEST);
        gl.enable( gl.BLEND );
        gl.blendEquation(gl.FUNC_ADD);

        if(mark == 'stack') {
            var result = $p.readResult('row');
            viewSetting.data = result.filter(d=>d[vmap.y]>0);
            viewSetting.fields = $p.fields;
            if($p.intervals.hasOwnProperty(vmap.x))
                viewSetting.isHistogram = true;
        }

        //TODO: Maybe just save the needed data domains instead of copying all
        if(!$p._update) {
            var pv = $p.views[viewIndex];
            pv.domains = Object.keys(visDomain).map(f=>visDomain[f]);
            $p.uniform.uVisDomains = pv.domains;
            if(pv.hasOwnProperty('chart') && typeof pv.chart.svg.remove == 'function') {
                pv.chart.svg.remove();
            }
            pv.chart = vis.addChart(viewSetting);
        } else {
            $p.uniform.uVisDomains = $p.views[viewIndex].domains;
            if(mark == 'stack'){
                var result = $p.readResult('row');
                $p.views[viewIndex].chart.update({
                    data: result
                })
            }
        }
        var primitive = gl.POINTS;
        if(['rect', 'bar'].indexOf(mark) !== -1) primitive = gl.TRIANGLES;
        else if(mark == 'line') primitive = gl.LINE_STRIP;

        function draw() {
            if($p.renderMode == 'interleave') {
                var count = $p.attribute.aDataFieldId.data.length / $p.attribute.aDataFieldId.size;
                gl.ext.drawArraysInstancedANGLE(primitive, 0, count, $p.dataSize);
            } else if($p.renderMode == 'polygon'){
                gl.ext.drawArraysInstancedANGLE(primitive, 0, 6, $p.dataSize);
            } else {
                if(primitive == gl.LINE_STRIP) {
                    console.log($p.dataDimension);
                    gl.ext.drawArraysInstancedANGLE(primitive, 0, $p.dataDimension[0], $p.dataDimension[1]);
                } else {
                    gl.ext.drawArraysInstancedANGLE(primitive, 0, $p.dataDimension[0], $p.dataDimension[1]);
                }
            }
        }

        if(mark!='stack') draw();
        if($p.revealDensity) enhance({
            viewIndex: viewIndex,
            dim: [width, height],
            offset: offset,
            padding: padding
        });
        $p.bindFramebuffer(null);

        if(!$p._update) {
            var actions = Object.keys(vmap)
                .filter(function(act){ return userActions.indexOf(act) !== -1});

            actions.forEach(function(action) {
                var viewId = vmap.id || $p.views[viewIndex].id,
                    response = {};
                response[viewId] = vmap[action];
                $p.interactions.push({
                    event: action,
                    condition: vmap[action].condition,
                    from: viewId,
                    response: response
                })
            })
        }
    }
    viz.chart = vis;
    return viz;
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = color;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gradients__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorhex__ = __webpack_require__(147);



const colorResolution = 256;
const colorSetMax = 32;
const defaultColorScheme = __WEBPACK_IMPORTED_MODULE_0__gradients__["a" /* gradients */]['viridis'];
const defaultColorSet = [
    [255,187,120], [255,127, 14], [174,199,232], [ 44,160, 44],
    [ 31,119,180], [255,152,150], [214, 39, 40], [197,176,213],
    [152,223,138], [148,103,189], [247,182,210], [227,119,194],
    [196,156,148], [140, 86, 75], [127,127,127], [219,219,141],
    [199,199,199], [188,189, 34], [158,218,229], [ 23,190,207]
];

var gradient = defaultColorScheme,
    colorset = defaultColorSet;

function color($p) {
    var colorManager = {};

    $p.uniform('uColorMode',       'int',   0) // 0=categorical, 1=numeric
        .uniform('uColorCount',    'int',   colorSetMax)
        .uniform('uColorSet',      'vec3',  setColorTable(colorset))
        .texture('tColorGraident', 'float', setColorScheme(gradient),  [colorResolution, 1], 'rgba')
        .subroutine('mapColorRGB', 'vec3',  mapColorRGB);

    colorManager.updateScheme = function(newColors) {
        if(typeof newColors == 'string' && __WEBPACK_IMPORTED_MODULE_0__gradients__["a" /* gradients */].hasOwnProperty(newColors)) {
            gradient = __WEBPACK_IMPORTED_MODULE_0__gradients__["a" /* gradients */][newColors];
        } else if(Array.isArray(newColors)) {
            gradient = newColors;
        }
        $p.texture.tColorGraident = setColorScheme(gradient);
    }

    colorManager.updateTable = function(colors) {
        colorset = colors;
        $p.uniform.uColorSet = setColorTable(colors);
    }

    colorManager.colorTable = defaultColorSet.map(function(t){
        return rgba2hex(t);
    });

    colorManager.getColors = function() {
        if($p.uniform.uColorMode == 0) {
            return colorset;
        } else {
            return gradient;
        }
    }

    colorManager.rgb = rgb;
    colorManager.rgba = rgba;

    return colorManager;
}

function colorStrToHex(colorStr) {
    if (typeof __WEBPACK_IMPORTED_MODULE_1__colorhex__["a" /* colorhex */][colorStr.toLowerCase()] != 'undefined')
        return __WEBPACK_IMPORTED_MODULE_1__colorhex__["a" /* colorhex */][colorStr.toLowerCase()];
    else
        return false;
}

function rgb(hexStr) {
    var hex, r, g, b;

    if(hexStr.slice(0,1) == '#')
        hex = hexStr.slice(1);
    else
        hex = colorStrToHex(hexStr).slice(1);

    r = parseInt(hex.substring(0,2), 16) / 255;
    g = parseInt(hex.substring(2,4), 16) / 255;
    b = parseInt(hex.substring(4,6), 16) / 255;
    return [r, g, b];
}

function rgba(hexStr, alpha) {
    var a = alpha || 1.0,
        c = rgb(hexStr);

    return [c[0], c[1], c[2], a];
}

function rgba2hex(c) {
    var r = c[0],
        g = c[1],
        b = c[2],
        a = 1;
    if (r > 255 || g > 255 || b > 255 || a > 255)
        throw 'Invalid color component';
    return (256 + r).toString(16).substr(1) +((1 << 24) + (g << 16) | (b << 8) | a).toString(16).substr(1);
}

function setColorScheme(colors) {
    var cc = colors.length - 1,
        step = (cc >= 0) ? colorResolution / (cc+1) : 1,
        colorGradient = new Float32Array(colorResolution * 4);

    colors.push(colors[cc]);
    for(var i = 0; i < cc+1; i++) {
        var c0 = rgba(colors[i]),
            c1 = rgba(colors[i+1]),
            offset = Math.floor(i * step)*4;

        for(var x = 0; x < step; x++) {
            var xi = x / (step);
            colorGradient[offset+x*4]   = c0[0] + (c1[0] - c0[0]) * xi;
            colorGradient[offset+x*4+1] = c0[1] + (c1[1] - c0[1]) * xi;
            colorGradient[offset+x*4+2] = c0[2] + (c1[2] - c0[2]) * xi;
            colorGradient[offset+x*4+3] = c0[3] + (c1[3] - c0[3]) * xi;
        }
    }
    colors.pop();
    return colorGradient;
}

function setColorTable(colors) {
    var colorTable = new Float32Array(colorSetMax * 3),
        isRgb = false;

    if(colors[0].length == 3) isRgb = true;
    colors.forEach(function(c, i){
        var colorValue = c;
        if(!isRgb) colorValue = rgb(c) * 255;
        colorTable[i*3] = colorValue[0] / 255;
        colorTable[i*3+1] = colorValue[1] / 255;
        colorTable[i*3+2] = colorValue[2] / 255;
    });

    return colorTable;
}

function mapColorRGB($int_fieldId, $float_value) {
    var d = new Vec2();
    var colorRGB = new Vec3();
    var intValue = new Int();
    if(fieldId == -1) {
        colorRGB = this.uDefaultColor;
    } else {
        if(this.uColorMode == 1) {
            colorRGB = texture2D(this.tColorGraident, vec2(value, 1.0)).rgb;
        } else {
            d = this.uVisDomains[fieldId];
            intValue = int(value * (d.y - d.x) + d.x);
            if(intValue >= this.uColorCount) {
                colorRGB = vec3(0.0, 0.0, 0.0);
            } else {
                colorRGB = this.uColorSet[intValue];
            }
        }
    }
    return colorRGB;
}


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const gradients = {
    "inferno": ["#000004", "#010005", "#010106", "#010108", "#02010a", "#02020c", "#02020e", "#030210", "#040312", "#040314", "#050417", "#060419", "#07051b", "#08051d", "#09061f", "#0a0722", "#0b0724", "#0c0826", "#0d0829", "#0e092b", "#10092d", "#110a30", "#120a32", "#140b34", "#150b37", "#160b39", "#180c3c", "#190c3e", "#1b0c41", "#1c0c43", "#1e0c45", "#1f0c48", "#210c4a", "#230c4c", "#240c4f", "#260c51", "#280b53", "#290b55", "#2b0b57", "#2d0b59", "#2f0a5b", "#310a5c", "#320a5e", "#340a5f", "#360961", "#380962", "#390963", "#3b0964", "#3d0965", "#3e0966", "#400a67", "#420a68", "#440a68", "#450a69", "#470b6a", "#490b6a", "#4a0c6b", "#4c0c6b", "#4d0d6c", "#4f0d6c", "#510e6c", "#520e6d", "#540f6d", "#550f6d", "#57106e", "#59106e", "#5a116e", "#5c126e", "#5d126e", "#5f136e", "#61136e", "#62146e", "#64156e", "#65156e", "#67166e", "#69166e", "#6a176e", "#6c186e", "#6d186e", "#6f196e", "#71196e", "#721a6e", "#741a6e", "#751b6e", "#771c6d", "#781c6d", "#7a1d6d", "#7c1d6d", "#7d1e6d", "#7f1e6c", "#801f6c", "#82206c", "#84206b", "#85216b", "#87216b", "#88226a", "#8a226a", "#8c2369", "#8d2369", "#8f2469", "#902568", "#922568", "#932667", "#952667", "#972766", "#982766", "#9a2865", "#9b2964", "#9d2964", "#9f2a63", "#a02a63", "#a22b62", "#a32c61", "#a52c60", "#a62d60", "#a82e5f", "#a92e5e", "#ab2f5e", "#ad305d", "#ae305c", "#b0315b", "#b1325a", "#b3325a", "#b43359", "#b63458", "#b73557", "#b93556", "#ba3655", "#bc3754", "#bd3853", "#bf3952", "#c03a51", "#c13a50", "#c33b4f", "#c43c4e", "#c63d4d", "#c73e4c", "#c83f4b", "#ca404a", "#cb4149", "#cc4248", "#ce4347", "#cf4446", "#d04545", "#d24644", "#d34743", "#d44842", "#d54a41", "#d74b3f", "#d84c3e", "#d94d3d", "#da4e3c", "#db503b", "#dd513a", "#de5238", "#df5337", "#e05536", "#e15635", "#e25734", "#e35933", "#e45a31", "#e55c30", "#e65d2f", "#e75e2e", "#e8602d", "#e9612b", "#ea632a", "#eb6429", "#eb6628", "#ec6726", "#ed6925", "#ee6a24", "#ef6c23", "#ef6e21", "#f06f20", "#f1711f", "#f1731d", "#f2741c", "#f3761b", "#f37819", "#f47918", "#f57b17", "#f57d15", "#f67e14", "#f68013", "#f78212", "#f78410", "#f8850f", "#f8870e", "#f8890c", "#f98b0b", "#f98c0a", "#f98e09", "#fa9008", "#fa9207", "#fa9407", "#fb9606", "#fb9706", "#fb9906", "#fb9b06", "#fb9d07", "#fc9f07", "#fca108", "#fca309", "#fca50a", "#fca60c", "#fca80d", "#fcaa0f", "#fcac11", "#fcae12", "#fcb014", "#fcb216", "#fcb418", "#fbb61a", "#fbb81d", "#fbba1f", "#fbbc21", "#fbbe23", "#fac026", "#fac228", "#fac42a", "#fac62d", "#f9c72f", "#f9c932", "#f9cb35", "#f8cd37", "#f8cf3a", "#f7d13d", "#f7d340", "#f6d543", "#f6d746", "#f5d949", "#f5db4c", "#f4dd4f", "#f4df53", "#f4e156", "#f3e35a", "#f3e55d", "#f2e661", "#f2e865", "#f2ea69", "#f1ec6d", "#f1ed71", "#f1ef75", "#f1f179", "#f2f27d", "#f2f482", "#f3f586", "#f3f68a", "#f4f88e", "#f5f992", "#f6fa96", "#f8fb9a", "#f9fc9d", "#fafda1", "#fcffa4"],
    "magma": ["#000004", "#010005", "#010106", "#010108", "#020109", "#02020b", "#02020d", "#03030f", "#030312", "#040414", "#050416", "#060518", "#06051a", "#07061c", "#08071e", "#090720", "#0a0822", "#0b0924", "#0c0926", "#0d0a29", "#0e0b2b", "#100b2d", "#110c2f", "#120d31", "#130d34", "#140e36", "#150e38", "#160f3b", "#180f3d", "#19103f", "#1a1042", "#1c1044", "#1d1147", "#1e1149", "#20114b", "#21114e", "#221150", "#241253", "#251255", "#271258", "#29115a", "#2a115c", "#2c115f", "#2d1161", "#2f1163", "#311165", "#331067", "#341069", "#36106b", "#38106c", "#390f6e", "#3b0f70", "#3d0f71", "#3f0f72", "#400f74", "#420f75", "#440f76", "#451077", "#471078", "#491078", "#4a1079", "#4c117a", "#4e117b", "#4f127b", "#51127c", "#52137c", "#54137d", "#56147d", "#57157e", "#59157e", "#5a167e", "#5c167f", "#5d177f", "#5f187f", "#601880", "#621980", "#641a80", "#651a80", "#671b80", "#681c81", "#6a1c81", "#6b1d81", "#6d1d81", "#6e1e81", "#701f81", "#721f81", "#732081", "#752181", "#762181", "#782281", "#792282", "#7b2382", "#7c2382", "#7e2482", "#802582", "#812581", "#832681", "#842681", "#862781", "#882781", "#892881", "#8b2981", "#8c2981", "#8e2a81", "#902a81", "#912b81", "#932b80", "#942c80", "#962c80", "#982d80", "#992d80", "#9b2e7f", "#9c2e7f", "#9e2f7f", "#a02f7f", "#a1307e", "#a3307e", "#a5317e", "#a6317d", "#a8327d", "#aa337d", "#ab337c", "#ad347c", "#ae347b", "#b0357b", "#b2357b", "#b3367a", "#b5367a", "#b73779", "#b83779", "#ba3878", "#bc3978", "#bd3977", "#bf3a77", "#c03a76", "#c23b75", "#c43c75", "#c53c74", "#c73d73", "#c83e73", "#ca3e72", "#cc3f71", "#cd4071", "#cf4070", "#d0416f", "#d2426f", "#d3436e", "#d5446d", "#d6456c", "#d8456c", "#d9466b", "#db476a", "#dc4869", "#de4968", "#df4a68", "#e04c67", "#e24d66", "#e34e65", "#e44f64", "#e55064", "#e75263", "#e85362", "#e95462", "#ea5661", "#eb5760", "#ec5860", "#ed5a5f", "#ee5b5e", "#ef5d5e", "#f05f5e", "#f1605d", "#f2625d", "#f2645c", "#f3655c", "#f4675c", "#f4695c", "#f56b5c", "#f66c5c", "#f66e5c", "#f7705c", "#f7725c", "#f8745c", "#f8765c", "#f9785d", "#f9795d", "#f97b5d", "#fa7d5e", "#fa7f5e", "#fa815f", "#fb835f", "#fb8560", "#fb8761", "#fc8961", "#fc8a62", "#fc8c63", "#fc8e64", "#fc9065", "#fd9266", "#fd9467", "#fd9668", "#fd9869", "#fd9a6a", "#fd9b6b", "#fe9d6c", "#fe9f6d", "#fea16e", "#fea36f", "#fea571", "#fea772", "#fea973", "#feaa74", "#feac76", "#feae77", "#feb078", "#feb27a", "#feb47b", "#feb67c", "#feb77e", "#feb97f", "#febb81", "#febd82", "#febf84", "#fec185", "#fec287", "#fec488", "#fec68a", "#fec88c", "#feca8d", "#fecc8f", "#fecd90", "#fecf92", "#fed194", "#fed395", "#fed597", "#fed799", "#fed89a", "#fdda9c", "#fddc9e", "#fddea0", "#fde0a1", "#fde2a3", "#fde3a5", "#fde5a7", "#fde7a9", "#fde9aa", "#fdebac", "#fcecae", "#fceeb0", "#fcf0b2", "#fcf2b4", "#fcf4b6", "#fcf6b8", "#fcf7b9", "#fcf9bb", "#fcfbbd", "#fcfdbf"],
    "plasma": ["#0d0887", "#100788", "#130789", "#16078a", "#19068c", "#1b068d", "#1d068e", "#20068f", "#220690", "#240691", "#260591", "#280592", "#2a0593", "#2c0594", "#2e0595", "#2f0596", "#310597", "#330597", "#350498", "#370499", "#38049a", "#3a049a", "#3c049b", "#3e049c", "#3f049c", "#41049d", "#43039e", "#44039e", "#46039f", "#48039f", "#4903a0", "#4b03a1", "#4c02a1", "#4e02a2", "#5002a2", "#5102a3", "#5302a3", "#5502a4", "#5601a4", "#5801a4", "#5901a5", "#5b01a5", "#5c01a6", "#5e01a6", "#6001a6", "#6100a7", "#6300a7", "#6400a7", "#6600a7", "#6700a8", "#6900a8", "#6a00a8", "#6c00a8", "#6e00a8", "#6f00a8", "#7100a8", "#7201a8", "#7401a8", "#7501a8", "#7701a8", "#7801a8", "#7a02a8", "#7b02a8", "#7d03a8", "#7e03a8", "#8004a8", "#8104a7", "#8305a7", "#8405a7", "#8606a6", "#8707a6", "#8808a6", "#8a09a5", "#8b0aa5", "#8d0ba5", "#8e0ca4", "#8f0da4", "#910ea3", "#920fa3", "#9410a2", "#9511a1", "#9613a1", "#9814a0", "#99159f", "#9a169f", "#9c179e", "#9d189d", "#9e199d", "#a01a9c", "#a11b9b", "#a21d9a", "#a31e9a", "#a51f99", "#a62098", "#a72197", "#a82296", "#aa2395", "#ab2494", "#ac2694", "#ad2793", "#ae2892", "#b02991", "#b12a90", "#b22b8f", "#b32c8e", "#b42e8d", "#b52f8c", "#b6308b", "#b7318a", "#b83289", "#ba3388", "#bb3488", "#bc3587", "#bd3786", "#be3885", "#bf3984", "#c03a83", "#c13b82", "#c23c81", "#c33d80", "#c43e7f", "#c5407e", "#c6417d", "#c7427c", "#c8437b", "#c9447a", "#ca457a", "#cb4679", "#cc4778", "#cc4977", "#cd4a76", "#ce4b75", "#cf4c74", "#d04d73", "#d14e72", "#d24f71", "#d35171", "#d45270", "#d5536f", "#d5546e", "#d6556d", "#d7566c", "#d8576b", "#d9586a", "#da5a6a", "#da5b69", "#db5c68", "#dc5d67", "#dd5e66", "#de5f65", "#de6164", "#df6263", "#e06363", "#e16462", "#e26561", "#e26660", "#e3685f", "#e4695e", "#e56a5d", "#e56b5d", "#e66c5c", "#e76e5b", "#e76f5a", "#e87059", "#e97158", "#e97257", "#ea7457", "#eb7556", "#eb7655", "#ec7754", "#ed7953", "#ed7a52", "#ee7b51", "#ef7c51", "#ef7e50", "#f07f4f", "#f0804e", "#f1814d", "#f1834c", "#f2844b", "#f3854b", "#f3874a", "#f48849", "#f48948", "#f58b47", "#f58c46", "#f68d45", "#f68f44", "#f79044", "#f79143", "#f79342", "#f89441", "#f89540", "#f9973f", "#f9983e", "#f99a3e", "#fa9b3d", "#fa9c3c", "#fa9e3b", "#fb9f3a", "#fba139", "#fba238", "#fca338", "#fca537", "#fca636", "#fca835", "#fca934", "#fdab33", "#fdac33", "#fdae32", "#fdaf31", "#fdb130", "#fdb22f", "#fdb42f", "#fdb52e", "#feb72d", "#feb82c", "#feba2c", "#febb2b", "#febd2a", "#febe2a", "#fec029", "#fdc229", "#fdc328", "#fdc527", "#fdc627", "#fdc827", "#fdca26", "#fdcb26", "#fccd25", "#fcce25", "#fcd025", "#fcd225", "#fbd324", "#fbd524", "#fbd724", "#fad824", "#fada24", "#f9dc24", "#f9dd25", "#f8df25", "#f8e125", "#f7e225", "#f7e425", "#f6e626", "#f6e826", "#f5e926", "#f5eb27", "#f4ed27", "#f3ee27", "#f3f027", "#f2f227", "#f1f426", "#f1f525", "#f0f724", "#f0f921"],
    "viridis": ["#440154", "#440256", "#450457", "#450559", "#46075a", "#46085c", "#460a5d", "#460b5e", "#470d60", "#470e61", "#471063", "#471164", "#471365", "#481467", "#481668", "#481769", "#48186a", "#481a6c", "#481b6d", "#481c6e", "#481d6f", "#481f70", "#482071", "#482173", "#482374", "#482475", "#482576", "#482677", "#482878", "#482979", "#472a7a", "#472c7a", "#472d7b", "#472e7c", "#472f7d", "#46307e", "#46327e", "#46337f", "#463480", "#453581", "#453781", "#453882", "#443983", "#443a83", "#443b84", "#433d84", "#433e85", "#423f85", "#424086", "#424186", "#414287", "#414487", "#404588", "#404688", "#3f4788", "#3f4889", "#3e4989", "#3e4a89", "#3e4c8a", "#3d4d8a", "#3d4e8a", "#3c4f8a", "#3c508b", "#3b518b", "#3b528b", "#3a538b", "#3a548c", "#39558c", "#39568c", "#38588c", "#38598c", "#375a8c", "#375b8d", "#365c8d", "#365d8d", "#355e8d", "#355f8d", "#34608d", "#34618d", "#33628d", "#33638d", "#32648e", "#32658e", "#31668e", "#31678e", "#31688e", "#30698e", "#306a8e", "#2f6b8e", "#2f6c8e", "#2e6d8e", "#2e6e8e", "#2e6f8e", "#2d708e", "#2d718e", "#2c718e", "#2c728e", "#2c738e", "#2b748e", "#2b758e", "#2a768e", "#2a778e", "#2a788e", "#29798e", "#297a8e", "#297b8e", "#287c8e", "#287d8e", "#277e8e", "#277f8e", "#27808e", "#26818e", "#26828e", "#26828e", "#25838e", "#25848e", "#25858e", "#24868e", "#24878e", "#23888e", "#23898e", "#238a8d", "#228b8d", "#228c8d", "#228d8d", "#218e8d", "#218f8d", "#21908d", "#21918c", "#20928c", "#20928c", "#20938c", "#1f948c", "#1f958b", "#1f968b", "#1f978b", "#1f988b", "#1f998a", "#1f9a8a", "#1e9b8a", "#1e9c89", "#1e9d89", "#1f9e89", "#1f9f88", "#1fa088", "#1fa188", "#1fa187", "#1fa287", "#20a386", "#20a486", "#21a585", "#21a685", "#22a785", "#22a884", "#23a983", "#24aa83", "#25ab82", "#25ac82", "#26ad81", "#27ad81", "#28ae80", "#29af7f", "#2ab07f", "#2cb17e", "#2db27d", "#2eb37c", "#2fb47c", "#31b57b", "#32b67a", "#34b679", "#35b779", "#37b878", "#38b977", "#3aba76", "#3bbb75", "#3dbc74", "#3fbc73", "#40bd72", "#42be71", "#44bf70", "#46c06f", "#48c16e", "#4ac16d", "#4cc26c", "#4ec36b", "#50c46a", "#52c569", "#54c568", "#56c667", "#58c765", "#5ac864", "#5cc863", "#5ec962", "#60ca60", "#63cb5f", "#65cb5e", "#67cc5c", "#69cd5b", "#6ccd5a", "#6ece58", "#70cf57", "#73d056", "#75d054", "#77d153", "#7ad151", "#7cd250", "#7fd34e", "#81d34d", "#84d44b", "#86d549", "#89d548", "#8bd646", "#8ed645", "#90d743", "#93d741", "#95d840", "#98d83e", "#9bd93c", "#9dd93b", "#a0da39", "#a2da37", "#a5db36", "#a8db34", "#aadc32", "#addc30", "#b0dd2f", "#b2dd2d", "#b5de2b", "#b8de29", "#bade28", "#bddf26", "#c0df25", "#c2df23", "#c5e021", "#c8e020", "#cae11f", "#cde11d", "#d0e11c", "#d2e21b", "#d5e21a", "#d8e219", "#dae319", "#dde318", "#dfe318", "#e2e418", "#e5e419", "#e7e419", "#eae51a", "#ece51b", "#efe51c", "#f1e51d", "#f4e61e", "#f6e620", "#f8e621", "#fbe723", "#fde725"]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = gradients;



/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const colorhex = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred ": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgrey": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370d8",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#d87093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = colorhex;



/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
function visMap(
    $int_fieldId,
    $float_addrX,
    $float_addrY,
    $float_indexedValue0,
    $float_indexedValue1,
    $float_defaultValue,
    $float_exp
){
    var value;
    var d = new Vec2();
    if(fieldId > -1) {
        if(fieldId >= this.uIndexCount) {
            value = this.getNonIndexedData(fieldId, addrX, addrY);
        } else if(fieldId < this.uIndexCount) {
            value = (fieldId == 0) ? indexedValue0 : indexedValue1;
        }
        if(exp != 0.0) {
            value = pow(value, exp);
        }
        d = this.uVisDomains[fieldId];
        value = (value - d.x) / (d.y - d.x);
    } else {
        value = defaultValue;
    }
    return value;
};

var instancedXY = {};
instancedXY.vs  = function() {
    var i, j, posX, posY, color, alpha, width, height, size;
    var rgb = new Vec3();

    i = (this.aDataIdx+0.5) / this.uDataDim.x;
    j = (this.aDataIdy+0.5) / this.uDataDim.y;

    if(this.uFilterFlag == 1) {
        this.vResult = texture2D(this.fFilterResults, vec2(i, j)).a;
    } else {
        this.vResult = this.uVisLevel;
    }

    posX = this.visMap(this.uVisualEncodings[0], i, j, this.aDataValx, this.aDataValy, 0.0, 0.0);
    posY = this.visMap(this.uVisualEncodings[1], i, j, this.aDataValx, this.aDataValy, 0.0,  0.0);
    color = this.visMap(this.uVisualEncodings[2], i, j, this.aDataValx, this.aDataValy, -1.0,  0.0);
    alpha = this.visMap(this.uVisualEncodings[3], i, j, this.aDataValx, this.aDataValy, this.uDefaultAlpha, 0.0);
    size = this.visMap(this.uVisualEncodings[6], i, j, this.aDataValx, this.aDataValy, 1.0,  0.0);

    posX = posX * 2.0 - 1.0;
    posY = posY * 2.0 - 1.0;

    rgb = this.mapColorRGB(this.uVisualEncodings[2], color);
    gl_PointSize = size * this.uMarkSize;
    this.vColorRGBA = vec4(rgb, alpha);
    gl_Position = vec4(posX, posY , 0.0, 1.0);
};

instancedXY.fs = function() {
    var valid = new Bool();
    valid = this.vResult <= this.uVisLevel + 0.01 && this.vResult >= this.uVisLevel - 0.01;
    if(this.uVisShape == 1) {
        var dist = length(gl_PointCoord.xy - vec2(0.5, 0.5));
        if (dist > 0.5) discard;
        var delta = 0.15;
        var alpha = this.vColorRGBA.a - smoothstep(0.5-delta, 0.5, dist);
        if( this.vResult <= this.uVisLevel + 0.01 && this.vResult >= this.uVisLevel - 0.01) {
            gl_FragColor = vec4(this.vColorRGBA.rgb*alpha, alpha);
        } else {
            discard;
        }
    } else {
        if( this.vResult <= this.uVisLevel + 0.01 && this.vResult >= this.uVisLevel - 0.01) {
            gl_FragColor = vec4(this.vColorRGBA.rgb * this.vColorRGBA.a,  this.vColorRGBA.a);
        } else {
            discard;
        }
    }

}

var interleave = {};
interleave.vs = function(){
    var i, j;
    var rgb = new Vec3();
    var posX, posY, size, color, alpha;
    gl_PointSize = this.uMarkSize;
    i = (mod(this.aDataItemId, this.uDataDim.x) + 0.5) / this.uDataDim.x;
    j = (floor(this.aDataItemId / this.uDataDim.x) + 0.5) / this.uDataDim.y;

    this.vResult = this.uVisLevel;
    if(this.uFilterFlag == 1) {
        this.vResult = texture2D(this.fFilterResults, vec2(i, j)).a;
    }
    if(this.uInterleaveX == 1) {
        posX = this.aDataFieldId.y / float(this.uFeatureCount-1);
        posY = this.visMap(int(this.aDataFieldId.x), i, j, i, j, 1.0,  0.0);
    } else {
        posY = 1.0 - this.aDataFieldId.y / float(this.uFeatureCount-1);
        posX = this.visMap(int(this.aDataFieldId.x), i, j, i, j, 1.0,  0.0);
    }
    color = this.visMap(this.uVisualEncodings[2], i, j, i, j, -1.0,  0.0);
    alpha = this.visMap(this.uVisualEncodings[3], i, j, i, j, this.uDefaultAlpha, 0.0);

    posX = posX * 2.0 - 1.0;
    posY = posY * 2.0 - 1.0;

    rgb = this.mapColorRGB(this.uVisualEncodings[2], color);
    this.vColorRGBA = vec4(rgb*alpha, alpha);

    gl_Position = vec4(posX, posY, 0.0, 1.0);
}

interleave.fs = function() {
    if(this.vResult <= this.uVisLevel + 0.01 && this.vResult >= this.uVisLevel - 0.01)
        gl_FragColor = this.vColorRGBA;
    else
        discard;
}

var polygon = {};
polygon.vs = function(){
    var i, j;
    var rgb = new Vec3();
    var posX, posY, color, alpha, width, height, size;
    i = (mod(this.aDataItemId, this.uDataDim.x) + 0.5) / this.uDataDim.x;
    j = (floor(this.aDataItemId / this.uDataDim.x) + 0.5) / this.uDataDim.y;

    this.vResult = this.uVisLevel;

    if(this.uFilterFlag == 1) {
        this.vResult = texture2D(this.fFilterResults, vec2(i, j)).a;
    }
    var val0, val1;
    val0 = this.aDataItemVal0;
    val1 = this.aDataItemVal1;
    posX = this.visMap(this.uVisualEncodings[0], i, j, val0, val1, 0.0, 0.0);
    posY = this.visMap(this.uVisualEncodings[1], i, j, val0, val1, 0.0,  0.0);
    color = this.visMap(this.uVisualEncodings[2], i, j, val0, val1, -1.0,  0.0);
    alpha = this.visMap(this.uVisualEncodings[3], i, j,  val0, val1, this.uDefaultAlpha, 0.0);
    width = this.visMap(this.uVisualEncodings[4], i, j,  val0, val1, this.uDefaultWidth, 0.0);
    height = this.visMap(this.uVisualEncodings[5], i, j,  val0, val1, this.uDefaultHeight, 0.0);
    size = this.visMap(this.uVisualEncodings[6], i, j, val0, val1, this.uMarkSize,  0.0);
    posX = posX * (this.uFieldWidths[this.uVisualEncodings[0]] - 1.0) / this.uFieldWidths[this.uVisualEncodings[0]];
    posY = posY * (this.uFieldWidths[this.uVisualEncodings[1]] - 1.0) / this.uFieldWidths[this.uVisualEncodings[1]];

    width *= 1.0 - this.uMarkSpace.x * 2.0;
    height *= 1.0 - this.uMarkSpace.y * 2.0;
    posX -= this.uMarkSpace.x * width;
    posY += this.uMarkSpace.y * height;

    if(this.aVertexId == 0.0 || this.aVertexId == 3.0) {
        posX = posX * 2.0 - 1.0;
        posY = posY * 2.0 - 1.0;
    } else if(this.aVertexId == 1.0) {
        posX = posX * 2.0 - 1.0;
        posY = (posY + height) * 2.0 - 1.0;
    } else if(this.aVertexId == 2.0 || this.aVertexId == 5.0) {
        posX = (posX + width) * 2.0 - 1.0;
        posY = (posY + height) * 2.0 - 1.0;
    } else if(this.aVertexId == 4.0) {
        posX = (posX + width) * 2.0 - 1.0;
        posY = posY * 2.0 - 1.0;
    } else {
        posX = posX * 2.0 - 1.0;
        posY = posY * 2.0 - 1.0;
    }

    rgb = this.mapColorRGB(this.uVisualEncodings[2], color);
    this.vColorRGBA = vec4(rgb*alpha, alpha);
    gl_Position = vec4(posX, posY, 0.0, 1.0);
}

polygon.fs = function() {
    if(this.vResult <= this.uVisLevel + 0.01 && this.vResult >= this.uVisLevel - 0.01)
        gl_FragColor = this.vColorRGBA;
    else
        discard;
}

function render(fxgl) {
    fxgl.subroutine('visMap', 'float', visMap);
    fxgl.program("instancedXY",
        fxgl.shader.vertex(instancedXY.vs),
        fxgl.shader.fragment(instancedXY.fs)
    );
    fxgl.program(
        "interleave",
        fxgl.shader.vertex(interleave.vs),
        fxgl.shader.fragment(interleave.fs)
    );
    fxgl.program(
        "polygon",
        fxgl.shader.vertex(polygon.vs),
        fxgl.shader.fragment(polygon.fs)
    );
}


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = encode;
const visualEncodings = ['x', 'y', 'color', 'opacity', 'width', 'height', 'size'];

function encode($p, vmap, colorManager) {
    var opacity = vmap.opacity || vmap.alpha;
    var vmapIndex = new Int32Array(visualEncodings.length);
    visualEncodings.forEach(function(code, codeIndex){
        vmapIndex[codeIndex] = $p.fields.indexOf(vmap[code]);
    })
    $p.uniform.uVisualEncodings.data = vmapIndex;
    $p.uniform.uDefaultAlpha.data = 1.0;
    if(vmapIndex[2] === -1) {
        if (typeof(vmap.color) === 'string'){
            if(vmap.color === 'auto') {
                $p.revealDensity = true;
                $p.uniform.uRevealMode.data = 1;
            } else {
                $p.uniform.uDefaultColor.data = colorManager.rgb(vmap.color);
            }
        } else {
            if(typeof(vmap.size) == 'number') {
                $p.uniform.uMarkSize = vmap.size;
            }
        }
    } else {
        if($p.categoryLookup.hasOwnProperty(vmap.color)) {
            $p.uniform.uColorMode = 0;
        } else {
            $p.uniform.uColorMode = 1;
        }
    }

    if(typeof(opacity) === 'number') {
        $p.uniform.uDefaultAlpha.data = opacity;
    } else if(vmapIndex[3] === -1 &&
        typeof(opacity) == 'string' &&
        opacity == 'auto'
    ) {
        $p.revealDensity = true;
        $p.uniform.uRevealMode.data = 0;
    }

    //Check if need interleaving data attributes(e.g.,parallel coordinates)
    if(Array.isArray(vmap.x) || Array.isArray(vmap.y)) {
        $p.renderMode = 'interleave';
        if(Array.isArray(vmap.x)){
            // vmap.x = vmap.x.reverse();
            $p.uniform.uInterleaveX = 0;
        }
        if(Array.isArray(vmap.y)) $p.uniform.uInterleaveX = 1;
    } else if(vmap.mark && ['rect', 'bar'].indexOf(vmap.mark) !== -1) {
        $p.renderMode = 'polygon';
    }

    if(vmapIndex[6] === -1 && typeof(vmap.size) == 'number') {
        $p.uniform.uMarkSize = vmap.size;
    }

    var viewSetting = {};
    var isRect = (['rect', 'bar'].indexOf(vmap.mark) !== -1);
    var markSpace = [0, 0];
    if(vmapIndex[0] > -1) {
        var len = $p.fieldWidths[vmapIndex[0]],
            ext = $p.fieldDomains[vmapIndex[0]];
        if($p.categoryLookup.hasOwnProperty(vmap.x)){
            viewSetting.scaleX = 'categorical';
             viewSetting.domainX = new Array(len).fill(0).map(
                 (d,i)=>$p.categoryLookup[vmap.x][i]
             );
         } else if (isRect) {
             viewSetting.scaleX = 'ordinal';
             viewSetting.domainX = new Array(len).fill(0).map((d,i)=>ext[0] + i);
         }
         markSpace[0] = 0.02;
    }
    if(vmapIndex[1] > -1) {
        var len = $p.fieldWidths[vmapIndex[1]],
            ext = $p.fieldDomains[vmapIndex[1]];

        if($p.categoryLookup.hasOwnProperty(vmap.y)){
             viewSetting.scaleY = 'categorical';
             viewSetting.domainY = new Array(len).fill(0).map(
                 (d,i)=>$p.categoryLookup[vmap.y][i]
             ).reverse();
        } else if (isRect) {
            viewSetting.scaleY = 'ordinal';
            viewSetting.domainY = new Array(len).fill(0).map((d,i)=>ext[0] + i).reverse();
        }
        markSpace[1] = 0.02;
    }

    if(vmapIndex[0] > -1 && vmapIndex[1] > -1) {
        markSpace = [0, 0];
    }

    $p.uniform.uMarkSpace.data = markSpace;

    if($p.intervals.hasOwnProperty(vmap.x) || $p.intervals.hasOwnProperty(vmap.y)) {
        var histDim = vmap.x || vmap.y,
            histMin = $p.intervals[histDim].min,
            histMax = $p.intervals[histDim].max,
            histIntv = $p.intervals[histDim].interval,
            histBin = (histMax - histMin) / histIntv;

        // viewSetting.fields = $p.fields;
        viewSetting.isHistogram = true;
        // viewSetting.domain = {};
        viewSetting.domainX = new Array(histBin).fill(histMin).map(function(h, i) {return h + i*histIntv});
    }

    if(!$p._update) {
        if(!vmap.width && vmap.x) {
            $p.uniform.uDefaultWidth.data = 1.0 / ($p.fieldWidths[$p.fields.indexOf(vmap.x)] );
        } else if(vmapIndex[4] === -1 && typeof(vmap.width) == 'number') {
            $p.uniform.uDefaultWidth.data = vmap.width / width;
        }

        if(!vmap.height && vmap.y) {
            $p.uniform.uDefaultHeight.data = 1.0 / ($p.fieldWidths[$p.fields.indexOf(vmap.y)] );
        } else if(vmapIndex[5] === -1 && typeof(vmap.width) == 'number') {
            $p.uniform.uDefaultHeight.data = vmap.height / height;
        }
    }
    return viewSetting;
}


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = brush;
function brush(arg){

    var option = arg || {},
        container = option.container || this.svg[0],
        width = option.width || this.width,
        height = option.height || this.height,
        x = function(s) {return s},
        y = function(s) {return s},
        base = option.base || null,
        selectX = option.x || false,
        selectY = option.y || false,
        border = option.border || "#FFF",
        color = option.color || "#111",
        brush = option.brush || function() {},
        brushstart = option.brushstart || function() {},
        brushend = option.brushend || function() {};

    if(typeof(selectX) === "function") {
        x = selectX;
        selectX = true;
    }
    if(typeof(selectY) === "function") {
        y = selectY;
        selectY = true;
    }
    if(base === null){
        base = container.append("g").attr("class", "selector");
    } else {
        base = container;
    };

    base.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width)
        .attr("height", height)
        .attr("fill-opacity", 0)
        .attr("stroke", "none")
        .css("cursor", "crosshair");

    var selector = base.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 0)
        .attr("height", 0)
        .attr("fill-opacity", 0.1)
        .css("fill", color)
        .css("stroke", border)
        .css("cursor", "move");

    var sx, sy,
        dx, dy,
        bx, by,
        selection = {},
        intStart = false,
        drag = false;

    base.svg.addEventListener("mousedown", function(evt){
        evt.preventDefault();
        brushstart.call(this);
        intStart = true;
        sx = evt.clientX;
        sy = evt.clientY;

        var sp = selector.svg.getBoundingClientRect();
        var box = base.svg.getBoundingClientRect();
        var x0, y0, nw, nh;

        if(sx>sp.left && sy>sp.top && sx<sp.left+sp.width && sy<sp.top+sp.height) {
            drag = true;
            bx = sp.left;
            by = sp.top;
        }

        if(!drag){
            x0 = selectX ? sx - box.left : 0;
            y0 = selectY ? sy - box.top : 0;
            selector.attr("x", x0)
                .attr("y", y0)
                .attr("width", 0);
        }

        ondrag = function(evt){
            if(intStart){
                dx = evt.clientX - sx;
                dy = evt.clientY - sy;
                var selectorBox = selector.svg.getBoundingClientRect();
                if(drag){

                    var nx = bx + dx-box.left,
                        ny = by + dy-box.top;

                    if(bx+dx < box.left) nx = 0;
                    if(bx+dx+selectorBox.width > box.right) nx = width - selectorBox.width ;
                    if(by+dy < box.top) ny = 0;
                    if(by+dy+selectorBox.height > box.bottom) ny = height - selectorBox.height;
                    selector.attr("x", nx).attr("y", ny);
                } else {
                    if(evt.clientX < box.left) dx = box.left - sx;
                    if(evt.clientX > box.right) dx = box.right - sx;
                    if(evt.clientY > box.bottom) dy = box.bottom - sy;
                    if(evt.clientY < box.top) dy = box.top - sy;

                    x0 = selectX ? sx + dx - box.left: 0;
                    y0 = selectY ? sy + dy - box.top : 0;
                    nw = selectX ? Math.abs(dx) : width;
                    nh = selectY ? Math.abs(dy) : height;

                    if(dx<0 && dy>=0) selector.attr("x", x0);
                    if(dy<0 && dx>=0) selector.attr("y", y0);
                    if(dx<0 && dy<0) selector.attr("x", x0).attr("y", y0);
                    selector.attr("width", nw).attr("height", nh);
                }
                if(selectX) {
                    selection.x = [ x(selectorBox.left - box.left ), x(selectorBox.right - box.left )];
                }
                if(selectY) {
                    selection.y = [y(selectorBox.top - box.top), y(selectorBox.bottom - box.top)];
                }
                brush.call(this, selection);
            }
        };

        window.addEventListener("mousemove", ondrag, false);
        window.addEventListener("mouseup", function(evt){
            if(intStart){
                ondrag(evt);
                intStart = false;
                if(drag){
                    drag = false;
                }
            }
            brushend.call(this, selection);
            window.removeEventListener("mousemove", ondrag, false);
        }, false);
    });
};


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = layout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart__ = __webpack_require__(152);



function assign(object, source) {
    Object.keys(source).forEach(function(key) {
        object[key] = source[key];
    });
}
var defaultProperties = {
    width: 400,
    height: 300,
    padding: {left: 0, right: 0, top: 0, bottom: 0},
}

function layout(arg){
    "use strict";

    /* Private */
    var viz = this,
        option = arg || {},
        container = option.container || document.body,
        style = option.style || null,
        layers = [];

    this.width = container.clientWidth || 400;
    this.height = container.clientHeight || 300;

    if(typeof container == 'string') container = document.getElementById(container);
    assign(viz, defaultProperties);
    assign(viz, option);

    this.vmap = option.vmap;

    this.width -= (this.padding.left + this.padding.right);
    this.height -= (this.padding.top + this.padding.bottom);


    /* Public */
    this.data = option.data || [];
    this.div = document.createElement("div");
    if(style !== null) {
        Object.keys(style).forEach(function(prop){
            viz.div.style[prop] = style[prop];
        })
    }

    this.init = function(){
        // container = (containerId == "body") ? document.body : document.getElementById(containerId);

        this.div.className = option.className || "p6-viz";
        this.div.style.position = 'relative';
        this.resize(
            this.width + this.padding.left + this.padding.right,
            this.height + this.padding.top + this.padding.bottom
        );

        if(option.style) this.css(option.style);

        container.appendChild(this.div);
        this.viz();
        return viz;
    };

    this.createSVG = function(arg) {
        var arg = arg || {},
            width = arg.width || this.width,
            height = arg.height || this.height,
            padding = arg.padding || this.padding;

        return new __WEBPACK_IMPORTED_MODULE_0__svg__["a" /* default */]({
            width: width,
            height: height,
            padding: padding,
            style: {position: 'absolute'}
        });
    }

    var canvas = option.canvas,
        svg = this.createSVG(),
        vmap = option.vmap,
        chartPadding = this.padding || {left: 0, right: 0, top: 0, bottom: 0},
        domain = option.domain || {x: [0, 1000], y: [0, 1]},
        scales = option.scales || {x: 'linear', y: 'linear'};

    var backSVG = this.createSVG(),
        frontSVG = this.createSVG();

    this.set = function(props) {
        assign(viz, props);
    };

    this.addProperty = function(obj, prop) {
        assign(obj, prop);
        return obj;
    }

    this.viz = function() {
        viz.div.appendChild(backSVG.svg);
        viz.div.appendChild(canvas);
        viz.div.appendChild(frontSVG.svg);
        return viz;
    };

    this.render = this.viz;

    this.css = function(style){
        for(var key in style){
            this.div.style[key] = style[key];
        }
        return this;
    };

    this.resize = function(w,h){
        this.div.style.width = w + "px";
        this.div.style.height = h + "px";
    };

    this.destroy = function() {
        this._super.destroy();
        container.removeChild(this.div);
        div = null;
    };

    this.hide = function() {
        this.div.style.display = 'none';
    }

    this.show = function() {
        this.div.style.display = 'block';
    }

    this.innerWidth = function() {
        return this.width;
    }

    this.innerHeight = function() {
        return this.height;
    }

    this.addChart = function(options) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__chart__["a" /* default */])(frontSVG, options)
    };

    this.exportImage = function(beforeExport) {
        var imageCanvas = document.createElement("canvas");
        imageCanvas.width = this.width;
        imageCanvas.height = this.height;
        return new Promise(function(resolve, reject) {

            var ctx = imageCanvas.getContext("2d");
            var svgString = new XMLSerializer().serializeToString(frontSVG.svg);

            var DOMURL = self.URL || self.webkitURL || self;
            var svgBlob = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
            var svgURL = DOMURL.createObjectURL(svgBlob);

            var canvasLayer = new Image();
            var svgLayer = new Image();
            canvasLayer.onload = function() {
                ctx.drawImage(canvasLayer, 0, 0);
                svgLayer.src = svgURL;
                svgLayer.onload = function() {
                    ctx.drawImage(svgLayer, 0, 0);
                    var png = imageCanvas.toDataURL("image/png");
                    DOMURL.revokeObjectURL(png);
                    resolve(png);
                };
            };

            canvasLayer.onerror = function() {
                reject(Error("Canvas Output Error!"));
            }

            svgLayer.onerror = function() {
                reject(Error("SVG Output Error!"));
            }
            beforeExport();
            canvasLayer.src = canvas.toDataURL("image/png");
        });

    }

    return viz.init();
};


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chart;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axis__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scale__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__legend__ = __webpack_require__(154);





function chart(svg, arg) {
    var options = arg || {},
        plot = svg.append('g'),
        width = options.width,
        height = options.height,
        top = options.top || 0,
        left = options.left || 0,
        vmap = options.vmap || {},
        isHistogram = options.isHistogram || options.hist || false,
        features = options.fields || [],
        domain = options.domain,
        categories = options.categories,
        labels = plot.append('g'),
        onclick = options.onclick || null,
        onhover = options.onhover || null,
        showLegend = options.legend || true,
        tickOffset = options.axisOffset || [0, 0],
        padding = options.padding || {left: 0, right: 0, top: 0, bottom: 0},
        marks = [],
        colors = options.colors;

    var scaleX = options.scaleX || 'linear',
        domainX = options.domainX || domain[vmap.x] || domain[vmap.width],
        scaleY = options.scaleY || 'linear',
        domainY = options.domainY || domain[vmap.y] || domain[vmap.height];

    width -= padding.left + padding.right;
    height -= padding.top + padding.bottom;

    var xAxisOption = {
        container: plot,
        dim: "x",
        width: width,
        height: height,
        domain: domainX,
        scale:  scaleX,
        align: "bottom",
        // ticks: 5,
        // grid: 1,
        format: Object(__WEBPACK_IMPORTED_MODULE_1__format__["a" /* default */])(".3s"),
    };

    var yAxisOption = {
        container: plot,
        dim: "y",
        domain: domainY,
        scale: scaleY,
        width: width,
        height: height,
        align: "left",
        // labelPos: {x: -5, y: -5},
        // grid: 1,
        format: Object(__WEBPACK_IMPORTED_MODULE_1__format__["a" /* default */])(".3s"),
    };

    if(showLegend && features.indexOf(vmap.color) !== -1){
        Object(__WEBPACK_IMPORTED_MODULE_3__legend__["a" /* default */])({
            container: plot,
            width: 20,
            height: 180,
            dim: "y",
            domain: domain[vmap.color],
            pos: [width + padding.right/2, 0],
            colors: colors
        });
    }

    if(scaleX == 'ordinal' || scaleX == 'categorical') {
        xAxisOption.ticks = domainX.length;
        while(width / xAxisOption.ticks < 20) {
            xAxisOption.ticks *= 0.5;
        }
        var maxStrLength = Math.max.apply(null, domainX.map(
            function(d){ return (typeof(d) == 'string') ? d.toString().length : 1; })
        );
        if(maxStrLength > 10) {
            xAxisOption.labelAngle = -30;
            xAxisOption.tickLabelAlign = 'end';
            xAxisOption.labelPos = {x: 0, y: -10};
        }
    }

    if(scaleY == 'ordinal' || scaleY == 'categorical') {
        yAxisOption.ticks = domainY.length;
        while(width / yAxisOption.ticks < 20) {
            yAxisOption.ticks *= 0.5;
        }
    }

    var x, y, xAxes = [], yAxes = [];

    // For parallel coordinates
    if(Array.isArray(vmap.x)) {
        var axisDist = height / (vmap.x.length-1);

        vmap.x.forEach(function(d, i) {
            xAxisOption.position = i * axisDist + 1;
            xAxisOption.domain = domain[d];
            if(categories.hasOwnProperty(d)){
                xAxisOption.scale = 'ordinal';
                xAxisOption.tickAlign = 'outer';
                xAxisOption.domain = categories[d].reverse();
            }
            var labelOffset = 20;
            if(i === 0) {
                xAxisOption.tickPosition = [0, -5];
                xAxisOption.labelPos = {x: 0, y: 2};
                labelOffset = 35;
            } else {
                xAxisOption.tickPosition = null;
                xAxisOption.labelPos = null;
            }
            x = Object(__WEBPACK_IMPORTED_MODULE_0__axis__["a" /* default */])(xAxisOption);
            xAxes[i] = x;

            labels
            .append("text")
              .attr("x", 5 )
              .attr("y", i * axisDist - labelOffset)
              .attr("dy", "1em")
              .css("text-anchor", "middle")
              .css("font-size", "1em")
              .text(d);
        });
    }

    if(Array.isArray(vmap.y)) {
        var axisDist = width / (vmap.y.length-1);

        vmap.y.forEach(function(d, i) {
            yAxisOption.position = i * axisDist;
            yAxisOption.domain = domain[d];
            if(categories.hasOwnProperty(d)){
                yAxisOption.scale = 'ordinal';
                yAxisOption.tickAlign = 'outer';
                yAxisOption.domain = categories[d].reverse();
            }
            if(i == vmap.y.length-1) {
                yAxisOption.tickPosition = [5, 0];
                yAxisOption.tickLabelAlign = "start";
                yAxisOption.labelPos = {x: 8, y: -5};

            }
            y = Object(__WEBPACK_IMPORTED_MODULE_0__axis__["a" /* default */])(yAxisOption);
            yAxes[i] = y;

            labels.append("text")
              .attr("y", -padding.top + 10)
              .attr("x", i * axisDist)
              .attr("dy", "1em")
              .css("text-anchor", "middle")
              .css("font-size", "1em")
              .text(d);
        });
    }

    if(isHistogram) {
        xAxisOption.tickPosition = [-width / domainX.length /2, 0];
        xAxisOption.scale = "ordinal";
        xAxisOption.domain = domainX;
        xAxisOption.ticks = domainX.length;
    }

    if((vmap.x || vmap.width) && !Array.isArray(vmap.x)) x = Object(__WEBPACK_IMPORTED_MODULE_0__axis__["a" /* default */])(xAxisOption);
    if((vmap.y || vmap.height) && !Array.isArray(vmap.y)) y = Object(__WEBPACK_IMPORTED_MODULE_0__axis__["a" /* default */])(yAxisOption);

    if((vmap.hasOwnProperty('x') || vmap.hasOwnProperty('width')) && !Array.isArray(vmap.x)) {
        var xAxisTitle = vmap.x || vmap.width;
        // xAxisTitle = xAxisTitle.replace(/_/g, ' ');
        // xAxisOption.grid = 1;
        labels.append("g")
          .append("text")
            .attr("x", width/2)
            .attr("y", height + padding.bottom/2 )
            .attr("dy", "1em")
            .css("text-anchor", "middle")
            .css("font-size", "1.0em")
            .css("font-weight", "bold")
            .css(" text-transform", "capitalize")
            .text(xAxisTitle);

    }
    if((vmap.hasOwnProperty('y') || vmap.hasOwnProperty('height')) && !Array.isArray(vmap.y)) {
        var yAxisTitle = vmap.y || vmap.height;
        // yAxisTitle = yAxisTitle.replace(/_/g, ' ');
        // yAxisOption.grid = 1;
        if(!Array.isArray(vmap.y)) {
            labels.append("g")
              .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", -padding.left/1.25 )
                .attr("x", -height/2 )
                .attr("dy", "1em")
                .css("text-anchor", "middle")
                .css("font-size", "1.0em")
                .css("font-weight", "bold")
                .css(" text-transform", "capitalize")
                .text(yAxisTitle);
        }
    }
    // plot.append("line")
    //     .attr('x1', 0)
    //     .attr('x2', width)
    //     .attr('y1', 0)
    //     .attr('y2', 0)
    //     .css('stroke', '#000')
    // plot.append("line")
    //     .attr('x1', width)
    //     .attr('x2', width)
    //     .attr('y1', 0)
    //     .attr('y2', height)
    //     .css('stroke', '#000')
        // .css('stroke-opacity', 0.5)

    plot.translate(padding.left+left, padding.top+top);

    var chartLayer = {};

    chartLayer.update =  function(spec) {
        var data = spec.data || [];

        if(data.length) {
            data.forEach(function(d, i){
                var barHeight = isFinite(y(d[vmap.y])) ? y(d[vmap.y]) : height;
                if(hMarks[i]) {
                    hMarks[i].Attr({
                        y: barHeight,
                        height: height - barHeight,
                        fill: "orange"
                    });
                }
            })
        } else {
            hMarks.forEach(function(h, i){
                h.Attr({ y: 0, height: 0 });
            })
        }
    }

    chartLayer.removeAxis = function() {
        x.remove();
        y.remove();
        if(yAxes.length) {
            yAxes.forEach(function(yp) {
                yp.remove();
            })
        }
    }

    chartLayer.svg = plot;
    chartLayer.x = Array.isArray(vmap.x) ? xAxes : x;
    chartLayer.y = Array.isArray(vmap.y) ? yAxes : y;

    return chartLayer;
};


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reduce */
/* unused harmony export avg */
/* unused harmony export normalize */
/* harmony export (immutable) */ __webpack_exports__["a"] = seq;
/* unused harmony export scan */
/* unused harmony export iscan */
/* unused harmony export diff */
/* unused harmony export intersect */
/* unused harmony export unique */
/* unused harmony export lcm */
/* unused harmony export stats */
/* unused harmony export histogram */
/* unused harmony export variance */
/* unused harmony export std */
/* unused harmony export vectorAdd */
/* unused harmony export vectorSum */
/* unused harmony export vectorAvg */
function _reduce(array, opt) {
    var i,
        len = array.length,
        fn,
        result;

    if (!len) return 0;

    switch (opt) {
        case "max":
            result = array.reduce(function(a, b) {
                return (a > b) ? a : b;
            });
            break;
        case "min":
            result = array.reduce(function(a, b) {
                return (a < b) ? a : b;
            });
            break;
        case "and":
        case "&":
            result = array.reduce(function(a, b) {
                return a & b;
            });
            break;
        case "or":
        case "|":
            result = array.reduce(function(a, b) {
                return a | b;
            });
            break;
        case "mult":
        case "*":
            result = array.reduce(function(a, b) {
                return a * b;
            });
            break;
        default: // "sum" or "+"
            result = array.reduce(function(a, b) {
                return a + b;
            });
            break;
    }

    return result;
}

function reduce(opt) {
    return function(array) {
        var a = (array instanceof Array) ? array : Array.apply(null, arguments);
        return _reduce(a, opt);
    };
};

function avg(array) {
    return _reduce(array, "+") / array.length;
    // return array.reduce(function(a,b){ return 0.5 * (a + b)});
};

function normalize(array) {
    var max = _reduce(array, "max"),
        min = _reduce(array, "min"),
        range = max - min;

    return array.map(function(a) {
        return (a - min) / range;
    });
}

function seq(start, end, intv) {
    var interval = intv || 1,
        array = [];

    for (var i = start; i <= end; i += interval)
        array.push(i);

    return array;
};

// ["max", "min", "mult", "and", "or"].forEach(function(f) {
//     array[f] = array.reduce(f);
// });

// export sum = array.reduce("+");

function scan(a) {
    var pfsum = [],
        accum = 0;

    for (var i = 0; i < a.length; i++) {
        accum += a[i];
        pfsum.push(accum);
    }

    return pfsum;
};

function iscan(a) {
    return array.scan([0].concat(a));
};

function diff(a, b) {
    var difference = [];
    a.forEach(function(d) {
        if (b.indexOf(d) === -1) {
            difference.push(d);
        }
    });
    return difference;
};

function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function(e) {
        if (b.indexOf(e) !== -1) return true;
    });
};

function unique(a) {
    return a.reduce(function(b, c) {
        if (b.indexOf(c) < 0) b.push(c);
        return b;
    }, []);
};

function lcm(A) {
    var n = A.length,
        a = Math.abs(A[0]);
    for (var i = 1; i < n; i++) {
        var b = Math.abs(A[i]),
            c = a;
        while (a && b) {
            (a > b) ? a %= b: b %= a;
        }
        a = Math.abs(c * A[i]) / (a + b);
    }
    return a;
};

function stats(array) {
    return {
        max: _reduce(array, "max"),
        min: _reduce(array, "min"),
        avg: array.avg(array)
    };
};

function histogram(array, numBin, _max, _min) {
    var l = array.length,
        min = (typeof(_min) == 'number') ? _min : _reduce(array, "min"),
        max = (typeof(_max) == 'number') ? _max : _reduce(array, "max"),
        range = max - min,
        interval = range / numBin,
        bins = [],
        // ids = [],
        hg = new Array(numBin + 1).fill(0);

    for (var b = 0; b < numBin; b++) {
        bins.push([min + range * (b / (numBin)), min + range * (b + 1) / (numBin)]);
        // ids[b] = [];
    }

    // ids[numBin] = [];

    for (var i = 0; i < l; i++) {
        binID = Math.floor((array[i] - min) / range * (numBin));
        hg[binID]++;
        // ids[binID].push(i);
    };

    hg[numBin - 1] += hg[numBin];
    // ids[numBin-1] = ids[numBin-1].concat(ids.pop());
    return {
        bins: bins,
        counts: hg.slice(0, numBin),
        // ids: ids
    };
}

function variance(rowArray) {
    var m = _reduce(rowArray, "+") / rowArray.length,
        va = rowArray.map(function(a) {
            return Math.pow(a - m, 2)
        });

    return _reduce(va, "+") / (rowArray.length - 1);
}

function std(rowArray) {
    return Math.sqrt(array.var(rowArray));
}

function vectorAdd(a, b) {
    var c = [];
    a.forEach(function(v, i) {
        c[i] = v + b[i];
    });

    return c;
}

function vectorSum(vectors) {
    var result = vectors[0],
        numberOfVectors = vectors.length;

    for (var i = 1; i < numberOfVectors; i++) {
        result = array.vectorAdd(result, vectors[i]);
    }

    return result;
}

function _vectorAvg(a, b) {
    var c = [];
    a.forEach(function(v, i) {
        c[i] = (v + b[i]) * 0.5;
    });

    return c;
}

function vectorAvg(vectors) {
    var result = vectors[0],
        numberOfVectors = vectors.length;

    for (var i = 1; i < numberOfVectors; i++) {
        result = _vectorAvg(result, vectors[i]);
    }

    return result;
}


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = color;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__axis__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__format__ = __webpack_require__(69);




const defaultColors = ['white', 'steelblue'];
const defaultSize = 20;
var gradID = 0;

function color(arg){
    var gradientID = gradID++;

    var option = arg || {},
        container = option.container || null,
        width = option.width || null,
        height = option.height || null,
        pos = option.pos ||[0, 0],
        dim = option.dim || 'x',
        padding = option.padding || {left: 0, right: 0, top: 0, bottom: 0},
        vmap = option.vmap || {},
        label = option.label || false,
        colors = option.colors || defaultColors,
        domain = option.domain || ['min', 'max'],
        format = option.format || Object(__WEBPACK_IMPORTED_MODULE_2__format__["a" /* default */])('.3s');


    if(colors.length < 2) colors = defaultColors;
    width -= padding.left + padding.right;
    height -= padding.top + padding.bottom;

    var legend = (container === null)
        ? new __WEBPACK_IMPORTED_MODULE_0__svg__["a" /* default */]({width: width, height: height, padding: padding})
        : container.append('g');

    var gradDirection;
    if(dim == 'x') {
        gradDirection = {x1: 0, x2: 1, y1: 0, y2: 0};
        if(height === null) height = defaultSize;
    } else {
        gradDirection = {x1: 0, x2: 0, y1: 0, y2: 1};
        if(width === null) width = defaultSize;
    }

    function linearGradient(colors) {
        var gradient = legend.append('defs')
            .append('linearGradient')
                .attr('id', 'gradlegend'+gradientID)
                .attr(gradDirection);

        colors.forEach(function(c, i){
            gradient.append('stop')
                .attr('offset', i / (colors.length-1) )
                .attr('stop-color', colors[colors.length-i-1]);
        });
        return gradient;
    }

    var grad = linearGradient(colors);

    var rect = legend.append('g');

    var colorScale = rect.append('rect')
        .attr('width', width-padding.left)
        .attr('height', height)
        .style('fill','url(#gradlegend' + gradientID + ')');

    var domainLabel = legend.append('text');
    if(label) {
        label.append('text')
            .attr('x', pos[0] - 5)
            .attr('y', pos[1] + height/2 + 5)
            .style('fill', '#222')
            .style('text-anchor', 'end')
            .text(Object(__WEBPACK_IMPORTED_MODULE_2__format__["a" /* default */])('2s')(domain[0]));

        legend.append('text')
            .attr('x', pos[0] + width - padding.left + 5)
            .attr('y', pos[1] + height/2 + 5)
            .style('fill', '#222')
            .style('text-anchor', 'begin')
            // .style('font-size', '.9em')
            .text(Object(__WEBPACK_IMPORTED_MODULE_2__format__["a" /* default */])('2s')(domain[1]));
    }

    if(option.title) {
        legend.append('g')
          .append('text')
            .attr('y', pos[1] - padding.top)
            .attr('x', pos[0] + width/2)
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .text(option.title);
    }

    if(dim == 'x') {
        new __WEBPACK_IMPORTED_MODULE_1__axis__["a" /* default */]({
            dim: 'x',
            domain: domain,
            container: legend,
            align: 'bottom',
            ticks: Math.floor(width / 30),
            height: height,
            width: width,
            labelPos: {x: 0, y: -20},
            format: format,
        });
    } else {
        new __WEBPACK_IMPORTED_MODULE_1__axis__["a" /* default */]({
            dim: 'y',
            domain: domain,
            container: legend,
            align: 'right',
            ticks: Math.floor(height / 30),
            height: height,
            width: width,
            labelPos: {x: 0, y: -20},
            format: format,
        });
    }


    // legend.appendChild(xAxis);

    legend.translate(pos[0]+padding.left, pos[1]+padding.top);

    // legend.update = function(newDomain, newColors) {
    //
    //     legend.removeChild(xAxis);
    //     xAxis = new Axis({
    //         dim: 'x',
    //         domain: newDomain,
    //         container: legend,
    //         align: 'bottom',
    //         ticks: 4,
    //         // tickInterval: 10000000,
    //         labelPos: {x: -5, y: -20},
    //          padding: padding,
    //         width: width-padding.left,
    //         format: format,
    //     }).show();
    //
    //     if(typeof(newColors) != 'undefined') {
    //         grad.remove();
    //         grad = linearGradient(newColors);
    //         colorScale.css('fill','url(#gradlegend' + gradientID + ')');
    //
    //     }
    //     // legend.appendChild(xAxis);
    //
    //     return legend;
    // }

    return legend;
}


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ColumnStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ctypes__ = __webpack_require__(21);

function ColumnStore(arg){
    var cstore   = (this instanceof ColumnStore) ? this : {},
        options = arg || {},
        columns  = [],                  // column-based binary data
        size     = options.size  || 0,   // max size
        count    = options.count || 0,   // number of entries stored
        types    = options.types || [],  // types of the columns
        attributes = options.attributes || options.keys || options.names || [],  // column attributes
        struct   = options.struct|| options.schema || {},
        strHashes     = options.strHashes  || {},  // content access memory
        strLists     = options.strLists  || {},  // table lookaside buffer
        colStats = {},
        colAlloc = {},
        colRead  = {},                  // functions for reading values
        skip     = options.skip  || 0;

    if(options.struct) initStruct(options.struct);

    function initCStore() {
        if(size && types.length === attributes.length && types.length > 0) {
            attributes.forEach(function(c, i){
                configureColumn(i);
                columns[i] = new colAlloc[c](size);
                if(!columns.hasOwnProperty(c))
                    Object.defineProperty(columns, c, {
                        get: function() { return columns[i]; }
                    });
            });
            columns.attributes = attributes;
            columns.keys = attributes;
            columns.types = types;
            columns.struct = struct;
            columns.strLists = strLists;
            columns.strHashes = strHashes;
            columns.size = size;
            columns.get = function(c) {
                var index = attributes.indexOf(c);
                if(index < 0 ) throw new Error("Error: No column named " + c);
                return columns[index];
            }
        } 
        return cstore;
    }

    function initStruct(s) {
        struct = s;
        if(Array.isArray(struct)) {
            struct.forEach(function(s){
                attributes.push(s.name);
                types.push(s.type);
            })
        } else {
            for(var k in struct){
                attributes.push(k);
                types.push(struct[k]);
            }
        }
        return struct;
    }

    function configureColumn(cid) {
        if(typeof(cid) == "string") cid = attributes.indexOf(cid);
        var f = attributes[cid];
        colAlloc[f] = __WEBPACK_IMPORTED_MODULE_0__ctypes__[types[cid]];

        if(colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["string"]){
            strLists[f] = [];
            strHashes[f] = {};
            colRead[f] = function(value) {
                if(!strHashes[f].hasOwnProperty(value)){
                    strHashes[f][value] = strLists[f].length;
                    strLists[f].push(value);
                }
                return strHashes[f][value];
            };
        } else if(
            colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["int"] ||
            colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["short"] ||
            colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["integer"]
        ) {
            colRead[f] = function(value) {  return parseInt(value) || 0; };
        } else if(
            colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["float"] ||
            colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["double"] ||
            colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["numeric"]
        ){
            colRead[f] = function(value) {  return parseFloat(value) || 0.0; };
        } else if(
                colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["time"] ||
                colAlloc[f] === __WEBPACK_IMPORTED_MODULE_0__ctypes__["temporal"]
        ) {
            colRead[f] = function(value) {  return parseFloat(value) || 0.0; };
        } else {
            throw new Error("Invalid data type for TypedArray data!")
        }
    }

    cstore.addRows = function(rowArray) {
        if(count === 0 && skip > 0) {
            for(var j = 0; j<skip; j++)
                rowArray.shift();
        }
        rowArray.forEach(function(row, i){
            row.forEach(function(v,j){
                columns[j][count] = colRead[attributes[j]](v);
            });
            count++;
        });
        return count;
    }

    cstore.addObjects = function(objArray) {
        if(count === 0 && skip > 0) {
            for(var j = 0; j<skip; j++)
                objArray.shift();
        }
        objArray.forEach(function(obj, i){
            Object.keys(obj).forEach(function(v,j){
                columns[j][count] = colRead[attributes[j]](obj[v]);
            });
            count++;
        });
        return count;
    }


    cstore.addColumn = function(arg) {
        var props = arg || {},
            columnData = props.data || props.array,
            columnName = props.name,
            columnType = props.dtype,
            values = props.values || [];

        var cid = attributes.indexOf(columnName);
        if( cid < 0) {
            attributes.push(columnName);
            types.push(columnType);
            configureColumn(columnName);
            cid = types.length - 1;
            Object.defineProperty(columns, columnName, {
                get: function() { return columns[cid]; }
            });
        }

        if(columnData instanceof __WEBPACK_IMPORTED_MODULE_0__ctypes__[types[cid]]) {
            columns[cid] = columnData;
            if(values.length) {
                strLists[columnName] = values;
                strHashes[columnName] = {};
                values.forEach(function(value, vi){
                    strHashes[columnName][value] = vi;
                })
            }
        } else if(ArrayBuffer.isView(columnData)){
            columns[cid] = new colAlloc[columnName](size);
            for(var di = 0; di < size; di++) {
                columns[cid][di] = colRead[columnName](columnData[di]);
            }
        } else {
            throw new Error("Error: Invalid data type for columnArray!");
        }
        size = count = columnData.length;
    }

    cstore.metadata = cstore.info = function() {
        return {
            size: size,
            count: count,
            attributes: attributes,
            types: types,
            strLists: strLists,
            strHashes: strHashes,
            stats: cstore.stats()
        }
    }

    cstore.columns = function() {
        return columns;
    }

    cstore.data = function() {
        var data = columns;
        data.stats = cstore.stats();
        data.keys = attributes;
        data.size = size;
        data.strHashes = strHashes;
        data.strLists = strLists;
        data.dtypes = types;
        return data;
    }

    cstore.stats = function(col){
        var col = col || attributes;
        col.forEach(function(name, c){
            if(!colStats[c]){
                var min, max, avg;
                min = max = avg = columns[c][0];

                for(var i = 1; i < columns[c].length; i++){
                    var d = columns[c][i];
                    if(d > max) max = d;
                    else if(d < min) min = d;
                    avg = avg - (avg-d) / i;
                }
                if(max == min) max += 0.000001;
                colStats[name] = {min: min, max: max, avg: avg};
            }
        })
        return colStats;
    }

    cstore.domains = function(col){
        var col = col || attributes,
            domains = [];

        col.forEach(function(name, c){
            domains[name] = [colStats[name].min, colStats[name].max];
        })
        return domains;
    }

    cstore.ctypes = function() {
        return __WEBPACK_IMPORTED_MODULE_0__ctypes__;
    }

    cstore.size = size;

    cstore.exportAsJSON = function() {
        var rows = new Array(size);
        for(var ri = 0; ri < size; ri++) {
            var dataFrame = {};
            attributes.forEach(function(attr, ai) {
                if(types[ai] == 'string') {
                    dataFrame[attr] = strLists[attr][columns[ai][ri]];
                } else {
                    dataFrame[attr] = columns[ai][ri];
                }
            })
            rows[ri] = dataFrame;
        }
        return rows;
    }

    cstore.exportAsRowArray = function() {
        var rows = new Array(size);
        for(var ri = 0; ri < size; ri++) {
            var row = new Array(attributes.length);
            attributes.forEach(function(attr, ai) {
                if(types[ai] == 'string') {
                    row[ai] = strLists[attr][columns[ai][ri]];
                } else {
                    row[ai] = columns[ai][ri];
                }
            })
            rows[ri] = row;
        }
        return rows;
    }

    cstore.export = function(arg) {
        var format = arg || 'json';
        if(format == 'rowArray') {
            return cstore.exportAsRowArray();
        } else {
            return cstore.exportAsJSON();
        }
    }

    cstore.import = function(arg) {
        var data = arg.data || [],
            schema = arg.schema || {};
        size = data.length;
        initStruct(schema);
        initCStore();
        cstore.addObjects(data);
    }

    return initCStore();
}


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["request"] = request;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (immutable) */ __webpack_exports__["getAll"] = getAll;
/* harmony export (immutable) */ __webpack_exports__["post"] = post;
function request(arg) {
    var url = arg.url || arg,
        method = arg.method || "GET",
        dataType = arg.dataType || "json",
        data = arg.data || [],
        query = [];  //arraybuffer, blob, document, json, text

    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }

    return new Promise(function(resolve, reject) {

        var req = new XMLHttpRequest();
        req.open(method, url);
        req.responseType = dataType;

        req.onload = function() {
          if (req.status == 200) {
            resolve(req.response);
          }
          else {
            reject(Error(req.statusText));
          }
        };

        req.onerror = function() {
          reject(Error("Network Error"));
        };

        if (method == 'POST') {
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }

        req.send(data);
    });
};

let get = request;

function getAll(options) {
    var promises = [];
    options.forEach(function(option){
        promises.push(
            request(option)
            .then(function(result){
                return new Promise(function(resolve, reject) {
                    resolve(result);
                });
            })
        );
    });

    return Promise.all(promises);
}

function post(arg) {
    arg.method = "POST";
    return ajax.request(arg);
};


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
function parse(text, delimiter) {
    "use strict";
    var size = text.length,
        accum = 0,
        i, //index for starting of a line
        row,
        rows = [],
        fields = [],
        lens = [],
        EOL = false;

    while(accum < size) {
        i = accum, EOL = false;
        row = loadLine(text, delimiter.charCodeAt(0), i);
        rows.push(row.fields);
        accum += row.size;
    }
    return rows;
}

function loadLine(text, delimiterCode, initPos) {
    // if(typeof(initPos) === 'undefined') initPos = 0;
    var EOL = false,
        QUOTE = false,
        c = initPos, //current pos
        code, //code at c
        f = initPos, // start pos of current field
        q, //start pos of quote
        fields = [],
        L = text.length;

    while(!EOL){
        code = text.charCodeAt(c);
        if(code === 10 || c>=L){
            EOL = true;
            // if(text.charCodeAt(c+1) === 13) ++c;
            fields.push( text.slice(f, c) );
        } else {
            if(code === delimiterCode && !QUOTE) {
                // console.log(f,c, text.slice(f, c));
                var field = text.slice(f, c);
                fields.push( field );
                f = c+1;
            } else if(code === 34){
                if(QUOTE){
                    if(text.charCodeAt(c+1) === delimiterCode){
                        QUOTE = false;
                        fields.push(text.slice(q, c));
                        f = c+2;
                        c++;
                    }
                } else {
                    q = c+1;
                    QUOTE = true;
                }
            }
        }
        c++;
    }
    return { fields: fields, size: c-initPos };
}


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dashi__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(159);




var views = {};
var numJobs = 1;

function statsApp(arg) {
    var stats = {},
        data = arg.data || null,
        container = arg.container || document.body;

    var board = new __WEBPACK_IMPORTED_MODULE_1_dashi__["c" /* Layout */]({
        container: container,
        margin: 10,
        cols: [
            { id: 'global-links', width: 0.25 },
            { id: 'local-links', width: 0.25 },
            { id: 'terminal-metrics',  width: 0.5},
        ]
    });

    // console.log(data);
    views.terminals = new __WEBPACK_IMPORTED_MODULE_1_dashi__["e" /* Panel */]({
        container: board.cell('terminal-metrics'),
        id: "panel-terminals",
        title: "Terminals",
        padding: 20,
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });
    views.localLinks = new __WEBPACK_IMPORTED_MODULE_1_dashi__["e" /* Panel */]({
        container: board.cell('local-links'),
        id: "panel-local-links",
        title: "Local Links",
        padding: 20,
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });
    views.globalLinks = new __WEBPACK_IMPORTED_MODULE_1_dashi__["e" /* Panel */]({
        container: board.cell('global-links'),
        id: "panel-global-links",
        title: "Global Links",
        padding: 20,
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });
    stats.update = function(data) {
        Object.keys(views).forEach(function(vk){
            views[vk].clear();
        })
        var result = Object(__WEBPACK_IMPORTED_MODULE_2__transform__["a" /* default */])(data);
        numJobs = result.numJobs;

        visualize(result);
    }

    return stats;
}

function visualize(data) {
    var vis = {};
    vis.localLinks = Object(__WEBPACK_IMPORTED_MODULE_0_p6__["a" /* default */])({
        container: views.localLinks.body,
        padding: {left: 70, right: 20, top: 10, bottom: 70},
        viewport: [views.localLinks.innerWidth, views.localLinks.innerHeight],
    })
    .data(data.localLinks)
    .view([
        {
            id: 'plot-stats',
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.localLinks.innerWidth,
            height: views.localLinks.innerHeight / 2,
            offset: [0, views.localLinks.innerHeight/2]
        },
        {
            id: "plot-local-links",
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.localLinks.innerWidth,
            height: views.localLinks.innerHeight / 2,
            offset: [0, 0]
        },
    ])
    .visualize({
        id: "plot-local-links",
        mark: "point",
        x: "traffic",
        y: "sat_time",
        color: 'steelblue',
        alpha: 0.5
    })

    vis.localLinks
    .aggregate({
        $bin: {traffic: 8},
        $reduce: {
            total_sat_time : {$sum: "sat_time"},
            link_count: {$count: "*"}
        }
    })
    .visualize({
        id: 'plot-stats',
        mark: "bar",
        x: "traffic",
        // height: "total_sat_time",
        height: "link_count",
        color: 'steelblue'
    });

    vis.globalLinks = Object(__WEBPACK_IMPORTED_MODULE_0_p6__["a" /* default */])({
        container: views.globalLinks.body,
        padding: {left: 70, right: 20, top: 10, bottom: 70},
        viewport: [views.globalLinks.innerWidth, views.globalLinks.innerHeight],
    })
    .data(data.globalLinks)
    .view([
        {
            id: 'plot-stats',
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.globalLinks.innerWidth,
            height: views.globalLinks.innerHeight / 2,
            offset: [0, views.globalLinks.innerHeight/2]
        },
        {
            id: "plot-global-links",
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.globalLinks.innerWidth,
            height: views.globalLinks.innerHeight / 2,
            offset: [0, 0]
        },
    ])
    .visualize({
        id: "plot-global-links",
        mark: "point",
        x: "traffic",
        y: "sat_time",
        color: 'purple',
        alpha: 0.5
    })
    .aggregate({
        $bin: {traffic: 8},
        // $group: 'traffic',
        $reduce: {
            // total_sat_time : {$sum: "sat_time"},
            total_traffic : {$sum: "traffic"},
            link_count: {$count: "*"}
        }
    })
    .visualize({
        id: 'plot-stats',
        mark: "bar",
        x: "traffic",
        // height: "total_sat_time",
        height: "link_count",
        color: 'purple'
    });

    var terminalColorEncoding = (numJobs == 1) ? 'teal' : 'job_id';

    vis.terminals = Object(__WEBPACK_IMPORTED_MODULE_0_p6__["a" /* default */])({
        container: views.terminals.body,
        padding: {left: 70, right: 50, top: 30, bottom: 70},
        viewport: [
            views.terminals.innerWidth,
            views.terminals.innerHeight
        ]
    })
    .data(data.terminals)
    .view([
        {
            id: "terminals",
            padding: {top: 50, bottom: 20, left: 70, right: 50},
            width: views.terminals.innerWidth,
            height: views.terminals.innerHeight / 2,
            offset: [0, 0]
        },
        {
            id: 'avg_packet_latency',
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.terminals.innerWidth / 2,
            height: views.terminals.innerHeight / 2 ,
            offset: [0, views.terminals.innerHeight/2]
        },
        {
            id: 'sattime',
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.terminals.innerWidth / 2,
            height: views.terminals.innerHeight / 2,
            offset: [views.terminals.innerWidth/2, views.terminals.innerHeight/2]
        },
    ])
    .visualize({
        id: "terminals",
        mark: "line",
        y: [ "terminal_id", "avg_packet_latency", "avg_hops", "data_size", "sat_time"],
        brush: {
            unselected: {
                color: "lightgrey"
            }
        },
        color: terminalColorEncoding,
        opacity: 0.2,
    })
    // .visualize({
    //     id: 'avg_packet_latency',
    //     mark: "point",
    //     x: "avg_packet_latency",
    //     y: "avg_hops",
    //     opacity: "auto",
    //     color: 'teal'
    // })
    // .visualize({
    //     id: 'sattime',
    //     mark: "point",
    //     x: "data_size",
    //     y: "sat_time",
    //     color: 'teal',
    //     opacity: "auto",
    // });
    
    vis.terminals
    .aggregate({
        // $group: 'terminal_id',
        $bin: {'avg_packet_latency': 8},
        $reduce: {
            avg_hops: {$avg: "avg_hops"},
            terminal_count: {$count: "*"}
        }
    })
    .visualize({
        id: 'avg_packet_latency',
        mark: "rect",
        x: "avg_packet_latency",
        height: "terminal_count",
        color: 'teal'
    });

    vis.terminals
    .head()
    .aggregate({
        $bin: {'data_size': 8},
        $reduce: {
            Total_sat_time : {$sum: "sat_time"},
            terminal_count: {$count: "*"}
        }
    })
    .visualize({
        id: 'sattime',
        mark: "bar",
        x: "data_size",
        height: "terminal_count",
        color: 'teal'
    });
}


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadData__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p6__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_p6_solo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_p6_solo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_p6_solo__);




let cstore = __WEBPACK_IMPORTED_MODULE_1_p6__["a" /* default */].cstore;

const TERMINAL_METRICS = ["lp_id", "terminal_id", "data_size", "avg_packet_latency", "packets_finished", "avg_hops", "sat_time", "job_id", "router_id", "router_rank", "router_port", "group_id"];
const LINK_METRICS = ["group_id", "router_rank", "router_id", "router_port", "sat_time", "traffic", "target_router"];

let selectMetrics = function(data, metrics) {
    return data.map(function(d){
        var result = {};
        metrics.forEach(function(m){
            result[m] = d[m];
        });
        return result;
    });
}

function transform(input) {
    var result = {},
        db = {};
    // console.log(Object.keys(input.terminals[0]));
    db = cstore({
        size: input.terminals.length,
        keys: TERMINAL_METRICS,
        types: ["int", "int", "int", "float", "float", "float", "float", "int", "int", "int", "int", "int"]
    });
    db.addRows(Object(__WEBPACK_IMPORTED_MODULE_2_p6_solo__["toArray"])(selectMetrics(input.terminals, TERMINAL_METRICS)));
    result.terminals = db.data();
    result.terminals.stats = db.stats();
    
    db = cstore({
        size: input.localLinks.length,
        keys: LINK_METRICS,
        types: ["int", "int", "int", "int", "float", "int", "int"],
    });
    
    db.addRows(Object(__WEBPACK_IMPORTED_MODULE_2_p6_solo__["toArray"])(selectMetrics(input.localLinks, LINK_METRICS)));
    result.localLinks = db.data();
    result.localLinks.stats = db.stats();

    db = cstore({
        size: input.globalLinks.length,
        keys: LINK_METRICS,
        types: ["int", "int", "int", "int", "float", "int", "int"],
    });

    db.addRows(Object(__WEBPACK_IMPORTED_MODULE_2_p6_solo__["toArray"])(selectMetrics(input.globalLinks, LINK_METRICS)));
    result.globalLinks = db.data();
    result.globalLinks.stats = db.stats();
    result.numJobs = input.numJobs;
    return result;
}



/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = netApp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dashi__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circularvis__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gui__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_p6_solo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_p6_solo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_p6_solo__);







const getStats = __WEBPACK_IMPORTED_MODULE_4_p6_solo___default.a.stats;


function netApp(arg) {
    var specifications = arg.specs || [];

    var network = {},
        data = arg.data|| null,
        onUpdate = arg.onupdate || arg.onUpdate || function() {},
        container = arg.container || document.body,
        onSave = arg.onsave || function() {};

    var dataStats = {};

    var layoutMain = new __WEBPACK_IMPORTED_MODULE_0_dashi__["c" /* Layout */]({
        container: container,
        margin: 10,
        cols: [
            {
                width: 0.55,
                id: 'network-view'
            },
            {
                width: 0.45,
                id: 'spec-view'
            },
            // {
            //     width: 0.20,
            //     id: 'data-info',
            // },
        ]
    });

    network.ready = function() {};

    var views = {},
        visSpec = [];

    // if(typeof data !== undefined)
    //     data = transform(data);

    views.network = new __WEBPACK_IMPORTED_MODULE_0_dashi__["e" /* Panel */]({
        container: layoutMain.cell('network-view'),
        id: "panel-network",
        title: "Network Analysis",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });

    views.editor = new __WEBPACK_IMPORTED_MODULE_0_dashi__["e" /* Panel */]({
        container: layoutMain.cell('spec-view'),
        id: "panel-spec",
        title: "Specification",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });

    // views.info = new Panel({
    //     container: layoutMain.cell('spec-view'),
    //     id: "panel-info",
    //     title: "Information",
    //     header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    // });

    var editorDiv = document.createElement('div');
    editorDiv.setAttribute('id', 'spec-editor');
    editorDiv.style.width = "100%";
    editorDiv.style.height = "100%";
    views.editor.append(editorDiv);

    var guiDiv = document.createElement('div');
    guiDiv.setAttribute('id', 'spec-gui');
    guiDiv.style.width = "100%";
    guiDiv.style.height = views.editor.innerHeight + 'px';
    guiDiv.style.overflow = "scroll";
    // guiDiv.innerHTML = guiHTML;
    views.editor.append(guiDiv);

    editorDiv.style.display = 'none';
    guiDiv.style.display = 'block';

    var projectionSelection = document.createElement('select');

    var specGUI = Object(__WEBPACK_IMPORTED_MODULE_3__gui__["a" /* default */])({
        container: 'spec-gui',
        stats: dataStats,
        onsave: function(spec) { 
            onSave(spec);
            specifications.push(spec);
            projectionSelection.innerHTML += '<option value="' + spec.name + '" selected="selected">' + spec.name + '</option>';
        }
    });

    var showEditor = false;
    // ace.config.set("packaged", true)
    // ace.config.set("basePath", require.toUrl("ace"))
    var editor = ace.edit("spec-editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/json");
    editor.$blockScrolling = Infinity;
    editor.setOptions({
        fontSize: "12pt"
    });

    listSpecs();

    function listSpecs() {
        visSpec = specifications[0].spec;
        specGUI.create(visSpec);
        editor.session.insert({row:0, column: 0}, JSON.stringify(visSpec, null, 2));
    
        projectionSelection.style.marginRight = '5px';
        specifications.forEach(function(spec){
            var option = document.createElement('option');
            option.value = spec.name;
            option.innerHTML = spec.name;
            projectionSelection.appendChild(option);
        })
    
        projectionSelection.onchange = function(){
            var sel = this.value;
            var newSpec = specifications.filter(d=>d.name == sel)[0].spec;

            specGUI.create(newSpec);

            editor.setValue("");
            editor.session.insert({row:0, column: 0}, JSON.stringify(newSpec, null, 2));
        };
    
        views.editor.header.append('<span>Template: </span>');
        views.editor.header.append(projectionSelection);

        views.editor.header.append(new __WEBPACK_IMPORTED_MODULE_0_dashi__["b" /* Icon */]({
            types: ['edit outline', 'large'],
            onclick: function(){
    
                if(showEditor) {
                    visSpec = JSON.parse(editor.getValue());
                    specGUI.create(visSpec);
                    this.className = this.className.replace(' blue', '');
                } else {
                    visSpec = specGUI.getSpec(JSON.parse(editor.getValue()));
                    editor.setValue("");
                    editor.session.insert({row:0, column: 0}, JSON.stringify(visSpec, null, 2));
    
                    this.className += ' blue';
                }
    
                showEditor = !showEditor;
                editorDiv.style.display = (showEditor) ? 'block': 'none';
                guiDiv.style.display = (showEditor) ? 'none': 'block';
            }
        }))

        var updateButton = new __WEBPACK_IMPORTED_MODULE_0_dashi__["a" /* Button */]({
            label: 'Update',
            types: ['green', 'xs', 'icon', 'refresh'],
            size: '0.65em',
            onclick: function() {
            if(showEditor)
                visSpec = JSON.parse(editor.getValue());
            else
                visSpec = specGUI.getSpec(visSpec);

            views.network.clear();
            Object(__WEBPACK_IMPORTED_MODULE_2__circularvis__["a" /* default */])(config, visSpec, data);
            network.onUpdate(visSpec);
            }
        });
        views.editor.header.append(updateButton);

        network.ready(specifications);
    }

    var config = {
        container: '#panel-network-body',
        width: views.network.innerWidth,
        height:  views.network.innerHeight,
        padding: 0,
        legend: true
    };
    
    network.update = function(input) {
        data = Object(__WEBPACK_IMPORTED_MODULE_1__transform__["a" /* default */])(input);
        dataStats = getStats(data, Object.keys(data[0]).filter(k=>!Array.isArray(data[0][k])));
        specGUI.updateStats(dataStats);
        views.network.clear();
        visSpec = JSON.parse(editor.getValue());
        Object(__WEBPACK_IMPORTED_MODULE_2__circularvis__["a" /* default */])(config, visSpec, data);
    };

    network.getSpec = function() {
        return visSpec;
    };

    network.onUpdate = onUpdate;

    network.getSpecifications = function() {
        return specifications;
    };

    return network;
}

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hc5;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chord__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rect__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scatter__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__colorlegend__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__colors__ = __webpack_require__(74);







function getExtent(data, field){
    var tuple = data.map(function(d){return d[field]; });
    var min = Math.min.apply(null, tuple);
    var max = Math.max.apply(null, tuple);
    if (max == min) max += 1e-4;

    return [min, max];
}

function hc5(spec) {
    let layers = spec.layers;
    let rings = new Array(layers.length);

    var config = spec.config;
    var width = config.width || 800;
    var height = config.height || width;
    var padding = config.padding || 10;
    var outerRadius = config.outerRadius || Math.min(width/2, height/2);
    var innerRadius = config.innerRadius || Math.min(width/4, height/4);
    var container = config.container || "body";
    var parentRing = container;
    var chartTitle = config.chartTitle || false;
    var colorDomains = config.colorDomains || [];
    var groups = [];

    outerRadius -= padding;

    var offset = Math.min((width / 2), (height / 2));
    var baseSVG = d3.select(container).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
            .attr("transform", "translate(" + offset + "," + offset + ")");

    var cirRange = outerRadius - innerRadius - padding,
        cirOffset = innerRadius,
        sectionRadius = cirOffset,
        cirSize = layers
            .map(function(layer){ return layer.size; })
            .reduce(function(a,b){return a+b;});

    layers.forEach(function(layer, li){
        var sectionRadiusRange =  cirOffset + layer.size / cirSize * cirRange,
            cirPadding = 0.05 * sectionRadiusRange,
            sectionRadius = sectionRadiusRange,
            colorDomain = ['min', 'max'];

        var colors = layer.colors;
        var getColor;

            
        if(layer.type == 'link') {
            rings[li] = Object(__WEBPACK_IMPORTED_MODULE_0__chord__["a" /* default */])({
                container: baseSVG,
                data: layer.data,
                colors: colors,
                radius: cirOffset,
                colorDomain: colorDomains[li],
                vmap: layer.vmap,
            });
            parentRing = rings[li];
            groups = parentRing.groups();
        } else if(layer.type == 'text') {
            layer.container = baseSVG;
            layer.radius = cirOffset;
            layer.groups = groups;
            rings[li] = Object(__WEBPACK_IMPORTED_MODULE_1__text__["a" /* default */])(layer);
            cirOffset = sectionRadius + cirPadding ;
        } else {

            var dataItems = [];
            groups.forEach(function(chord, ci){
                var delta = (chord.endAngle - chord.startAngle ) / layer.data[ci].length;
                layer.data[ci].forEach(function(d, di){
                    var start =  chord.startAngle + di*delta;
                    d.startAngle = start;
                    d.endAngle = start + delta;
                    d.index = chord.index;
                })
                dataItems = dataItems.concat(layer.data[ci]);
            })

            var colorDomain = (Array.isArray(colorDomains[li])) ? colorDomains[li] : getExtent(dataItems, layer.vmap.color);

            getColor = Object(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* default */])(layer.colors, colorDomain);

            var plot;
            if(layer.type == 'circle') {
                plot = __WEBPACK_IMPORTED_MODULE_3__scatter__["a" /* default */];
            } else {
                plot = __WEBPACK_IMPORTED_MODULE_2__rect__["a" /* default */];
            }

            rings[li] = plot({
                container: baseSVG,
                data: dataItems,
                innerRadius: cirOffset,
                outerRadius: sectionRadius,
                colors: getColor,
                colorDomain: colorDomain,
                vmap: layer.vmap || layer.encoding,
            });

            cirOffset = sectionRadius + cirPadding;
            
        }


        if(layer.type !== 'text' && layer.vmap) {
            if(config.legend) {
                if(rings[li].colorDomain) colorDomain = rings[li].colorDomain;
                Object(__WEBPACK_IMPORTED_MODULE_4__colorlegend__["a" /* default */])({
                    container: baseSVG,
                    colors: layer.colors,
                    height: Math.min(50, outerRadius/2 / rings.length) ,
                    width: (width/2 - outerRadius / 2 - padding) * 0.9,
                    title: layer.project + ' (' + ((layer.vmap) ? layer.vmap.color : null) + ')',
                    domain: colorDomain,
                    pos: [width/2 - (width/2 - outerRadius / 2 - padding) * 0.9,  padding*4 + outerRadius/2 + outerRadius/2 / (rings.length) * li]
                })
            }
        }

        if(chartTitle) {
            baseSVG.append("text")
                .style("font-size", "1.1em")
                .style("text-anchor", "middle")
                .attr("x", 0)
                .attr("y", height/2 - 15)
                .text(function(d, i) { return  chartTitle });
        }
    });

    rings.createColorLegend = function(options) { 
        var svg = d3.select(options.container).append('svg')
            .attr('width', options.width).attr('height', options.height);

        layers.forEach(function(layer, li){
            if(layer.type == 'text') return;
            var colorDomain = (options.colorDomains) ? options.colorDomains[li] : rings[li].colorDomain;
            Object(__WEBPACK_IMPORTED_MODULE_4__colorlegend__["a" /* default */])({
                container: svg,
                colors: layer.colors,
                height: options.height / (layers.length-1),
                width: options.width,
                title: layer.project + ' (' + ((layer.vmap) ? layer.vmap.color : null) + ')',
                domain: colorDomain,
                padding: options.padding,
                pos: [0, options.height / (layers.length-1) * li]
            });
        });
    }

    rings.updateColor = function(colorDomains) {
        rings.forEach(function(ring, ri){
            if(layers[ri].type !== 'text') {
                ring.updateColor(colorDomains[ri]);
            }
        })
    }
    return rings;
}



/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Chord;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(74);


function Chord(arg) {
    var options = arg || {},
        container = options.container || "body",
        data = options.data,
        vmap = options.vmap,
        radius = options.radius || 100,
        padding = options.padding || 0.1,
        colorDomain = options.colorDomain || null,
        colors = options.colors || ['steelblue', 'red'],
        hover = options.hover || function(d) {};

    if(!vmap.hasOwnProperty("size"))
        vmap.size = 'count';

    var matrix = data.map(function(rows){
        return rows.map(function(row){
            return row[vmap.size];
        });
    });

    var chord = d3.layout.chord()
        .padding( 0.1)
        .sortSubgroups(d3.descending)
        .matrix(matrix);

    var colorValues = [];

    data.forEach(function(rows){
        rows.forEach(function(row){
            colorValues = colorValues.concat(row[vmap.color]);
        });
    });

    if(colorDomain === null) {
        colorDomain = [Math.min.apply(null, colorValues), Math.max.apply(null, colorValues)];
    }

    var getColor = Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])(colors, colorDomain);
    console.log(colors, colorDomain, getColor(1234));
    var svg = container;

    var core = svg.append("g")
        .attr("class", "chord")
        .selectAll("path")
        .data(chord.chords)
        .enter();

    var ribbons = core.append("path").attr("class", "ribbons")
        .attr("d", d3.svg.chord().radius(radius))
        .style("fill", function(d){
            var send = data[d.source.index][d.target.index][vmap.color];
            var recv =  data[d.target.index][d.source.index][vmap.color];
            return getColor(Math.max(send, recv));
        })
        .style("stroke", "#FFF")
        .style("opacity", 1);


    chord.colorDomain = colorDomain;
    chord.updateColor = function(colorDomain) {
        chord.colorDomain = colorDomain;
        getColor.domain(colorDomain);
        ribbons.style("fill", function(d){
            var send = data[d.source.index][d.target.index][vmap.color];
            var recv =  data[d.target.index][d.source.index][vmap.color];
            return getColor(Math.max(send, recv));
        })
    }
    return chord;
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export point */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(88);



function band() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["e" /* range */])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(78);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(85);









/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(30);





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(79);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(16);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(30);




/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(12);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(87);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(181);
/* unused harmony reexport nest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(182);
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(183);
/* unused harmony reexport keys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(184);
/* unused harmony reexport values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(185);
/* unused harmony reexport entries */








/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(31);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(31);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* unused harmony default export */ var _unused_webpack_default_export = (set);


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(97);




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["a" /* linearish */])(scale);
}


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gray */
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* unused harmony export lch */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(89);




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(89);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export interpolateTransformCss */
/* unused harmony export interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(191);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(192);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(18);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(18);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(18);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(18);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(98);



/* harmony default export */ __webpack_exports__["a"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickStep */])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["c" /* formatSpecifier */])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["e" /* precisionPrefix */])(step, value))) specifier.precision = precision;
      return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["b" /* formatPrefix */])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* precisionRound */])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["d" /* precisionFixed */])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(99);


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatRounded__ = __webpack_require__(206);



/* harmony default export */ __webpack_exports__["a"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(__WEBPACK_IMPORTED_MODULE_1__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_1__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(37);


/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = (function(step) {
  return Math.max(0, -Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(23);






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["b" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* ticks */])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export sqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(23);




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, pow().exponent(exponent));
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["a" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(11);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["d" /* quantile */])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* ascending */]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(17);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_2__linear__["a" /* linearish */])(scale);
}


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(11);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var millisecond = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var second = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var minute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var hour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var day = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



function weekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var month = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var year = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var utcMinute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var utcHour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var utcDay = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



function utcWeekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var utcMonth = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var utcYear = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(39);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["c" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["a" /* isoSpecifier */]);

/* unused harmony default export */ var _unused_webpack_default_export = (parseIso);


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(38);




/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__time__["a" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["v" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["q" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["u" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["m" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["o" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["b" /* utcFormat */]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(17);


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* linearish */])(scale);
}


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"));


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"));


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"));


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"));


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"));


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"));


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"));


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"));


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(13);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-240, 0.5, 1.0)));


/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(13);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])();

/* harmony default export */ __webpack_exports__["b"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
});


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);


var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(),
    pi_1_3 = Math.PI / 3,
    pi_2_3 = Math.PI * 2 / 3;

/* harmony default export */ __webpack_exports__["a"] = (function(t) {
  var x;
  t = (0.5 - t) * Math.PI;
  c.r = 255 * (x = Math.sin(t)) * x;
  c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
  c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
  return c + "";
});


/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return plasma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Text;
function Text(arg) {
    var options = arg || {},
        container = options.container || "body",
        data = options.data,
        prefix = options.prefix || '',
        radius = options.radius || 200,
        color = options.color || '#000000',
        groups = options.groups || [],
        hover = options.hover || function(d) {};

    function textTransofrm(d) {
        var offset = (d.startAngle + (d.endAngle - d.startAngle)/2);
        return (offset > Math.PI/2 && offset < 1.5*Math.PI) ? "rotate(270)" :"rotate(90)";
    }

    function textRotate(d) {
        var offset = (d.startAngle + (d.endAngle - d.startAngle)/2);
        return "rotate(" + ( offset * 180 / Math.PI - 90)
            + ")translate(" + (radius+5) + ",0)";
    }

    var groupLabel = container.append("g").selectAll("groupLabel")
            .data(groups)
            .enter().append("g")
            .attr("transform", textRotate);

    groupLabel.append("text")
        .style("font-size", "0.9em")
        .style("text-anchor", "middle")
        .attr("dy", ".35em")
        .attr("transform",  textTransofrm)
        .text(function(d, i) { return  prefix + data[i]; });

    return groupLabel;
}



/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bars;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stats__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_scale_chromatic__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__(75);


 

function bars(arg) {
    var options = arg || {},
        container = options.container || "body",
        data = options.data,
        vmap = options.vmap,
        width = options.width || 800,
        height = options.height || width,
        outerRadius = options.outerRadius || Math.min(width/2, height/2),
        innerRadius = options.innerRadius || outerRadius / 4,
        padding = options.padding || 0.05,
        domain = options.domain || null,
        colorDomain = options.colorDomain || null,
        stats = options.stats || null,
        colors = options.colors || ['white', 'steelblue'],
        hover = options.hover || function(d) {};


    var getSize = function() { return outerRadius; },
        getColor = (typeof colors === 'function') ? colors : function() { return colors[0]};

    if(stats === null) {
        stats = Object(__WEBPACK_IMPORTED_MODULE_0__stats__["a" /* default */])(data, Object.keys(vmap).map(function(k){ return vmap[k]; }));
    }

    if(vmap.color && typeof(colors) != 'function') {

        if(colorDomain === null) {
            if(stats[vmap.color].max == stats[vmap.color].min) stats[vmap.color].max+=0.000001;
            colorDomain = [stats[vmap.color].min, stats[vmap.color].max];
        }

        if(typeof colors == 'function') {
            getColor = colors;
        } else if(typeof colors == 'string') {
            var getRange = d3.scale.linear().domain(colorDomain).range([0, 1]);
            getColor = function(value) {
                if(typeof __WEBPACK_IMPORTED_MODULE_1_d3_scale_chromatic__['interpolate' + colors] == 'function') {
                    return __WEBPACK_IMPORTED_MODULE_1_d3_scale_chromatic__['interpolate' + colors](getRange(value));
                } else {
                    return 'steelblue';
                }
            }
        } else {
            getColor =  d3.scale.linear()
                .domain(colorDomain)
                .range(colors);
        }
    }

    if(vmap.size) {
        getSize =  d3.scale.pow().exponent(0.9)
            .domain([stats[vmap.size].min, stats[vmap.size].max])
            .range([innerRadius, outerRadius]);
    }

    function createArc(d) {
        return d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(getSize(d[vmap.size]))
            (d);
    }

    var bars = container.append("g").selectAll(".bar")
        .data(data)
        .enter()

    var marks = bars.append("path").attr("class", "bars")
        .attr('class', 'bars')
        .style("fill", function(d) { return getColor(d[vmap.color]); })
        // .style("stroke", function(d) { return getColor(d[vmap.color]); })
        .style("stroke", '#fff')
        .style("stroke-width", 0.5)
        // .style("fill-opacity", function(d){return getOpacity(d[opacityAttr])})
        .attr("d", createArc)
        // .on("mouseover", highlight)
        // .on("mouseout", unhighlight);
    // visualElement
    //     .style("stroke", '#fff')
    //     .style("stroke-width", 0.5);

    bars.colorDomain = colorDomain;
    bars.updateColor = function(colorDomain) {
        bars.colorDomain = colorDomain;
        getColor.domain(colorDomain);
        marks.style("fill", function(d) { return getColor(d[vmap.color]); })
    }

    return bars;
}

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scatter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stats__ = __webpack_require__(107);


function scatter(arg) {
    var options = arg || {},
        container = options.container || "body",
        data = options.data,
        vmap = options.vmap,
        width = options.width || 800,
        height = options.height || width,
        outerRadius = options.outerRadius || Math.min(width/2, height/2),
        innerRadius = options.innerRadius || outerRadius / 4,
        padding = options.padding || 0.05,
        domain = options.domain || null,
        colorDomain = options.colorDomain || null,        
        stats = options.stats || null,
        colors = options.colors || ['white', 'steelblue'],
        hover = options.hover || function(d) {};

    var scatter = {};
    var getSize = function() { return 5; },
        getPosX = function() { return 0; },
        getPosY = function() { return 0; },
        getColor = (typeof colors === 'function') ? colors : function() { return colors[0]};

    if(stats === null) {
        stats = Object(__WEBPACK_IMPORTED_MODULE_0__stats__["a" /* default */])(data, Object.keys(vmap).map(function(k){ return vmap[k]; }));
    }
    if(vmap.color && typeof(colors) != 'function') {
        if(colorDomain === null) {
            if(stats[vmap.color].max == stats[vmap.color].min) stats[vmap.color].max+=0.000001;
            colorDomain = [stats[vmap.color].min, stats[vmap.color].max];
        }

        if(typeof colors == 'function') {
            getColor = colors;
        } else if(colors == 'string') {
            var getRange = d3.scale.linear().domain(colorDomain).range([0, 1]);
            getColor = function(value) {
                if(typeof colorScales['interpolate' + colors] == 'function') {
                    return colorScales['interpolate' + colors](getRange(value));
                } else {
                    return 'steelblue';
                }
            }
        } else {
            getColor =  d3.scale.linear()
                .domain(colorDomain)
                .range(colors);
        }
    }

    if(vmap.x) {
        var xScale = d3.scale.linear()
        .domain([stats[vmap.x].min, stats[vmap.x].max]);

        getPosX = function(d) {
            var v = xScale.range([ d.startAngle, d.endAngle])(d[vmap.x]);
            return v;
        }
    }

    if(vmap.y) {
        getPosY = d3.scale.linear()
            .domain([stats[vmap.y].min, stats[vmap.y].max])
            .range([innerRadius, outerRadius]);
    }

    function createArc(d) {
        return d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(getSize(d[vmap.size]))
            (d);
    }

    var visualElement = container.append("g").selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", function(d){return getSize(d[vmap.size])})
        .attr("cx", function(d){return getPosY(d[vmap.y]) * Math.cos(getPosX(d))})
        .attr("cy",function(d){return getPosY(d[vmap.y]) * Math.sin(getPosX(d))})
        .style("fill", function(d){return getColor(d[vmap.color])});

    scatter.colorDomain = colorDomain;
    scatter.updateColor = function(colorDomain) {
        scatter.colorDomain = colorDomain;
        getColor.domain(colorDomain);
        visualElement.style("fill", function(d) { 
            return getColor(d[vmap.color]); 
        })
    }

    return scatter;
}



/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GUI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hc5__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_colorbrewer__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_colorbrewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_colorbrewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale_chromatic__ = __webpack_require__(278);




var template = '' +
'<div id="specUI" class="ui form" style=" padding: 20px;">' +
  '<div style="width: 100%; background: #EEE; padding: 20px;">' +
    '<div id="transform-attributes">' +
      '<label>Aggregate by</label>' +
    '</div>' +
    '<div id="network-filter-slider" style="margin: 10px 0;"></div>' +
    '<div>' + 
     '<label id="network-filter-attribute"></label>' + 
     '<span id="network-filter-range" style="border:0; color:#f6931f; font-weight:bold;"> </span>'+
    '</div>' +
   '</div>' +
    // '<div class="four wide field">' +
    //   '<label>BinMax</label>' +
    //   '<input type="number" value="7" disable="" id="aggregation-binMax">' +
    // '</div>' +
  '<table class="ui very basic celled table">' +
    '<thead>' +
      '<tr>' +
        '<th width="120">Entity</th>' +
        '<th>Metrics</th>' +
        '<th>Color Schemes</th>' +
      '</tr>' +
    '</thead>' +
    '<tbody id="specTable">' +
    '</tbody>' +
  '</table>' +

  '<div class="fields">' +
    '<div class="eight wide field" style="text-align: right;">' +
      '<button id="add-layer" class="ui button primary xs">Add Layer</button>' +
      '<button id="remove-layer" class="ui button red xs">Remove Layer</button>' +
    '</div>' +
    '<div class="six wide field ui action input">' +
      '<input type="text" id="spec-name" placeholder="Name this config...">' +
      '<button id="save-spec" class="ui button primary xs">Save</button>' +
    '</div>' +
  '</div>' +
'</div>';

const AGGR_METRICS = [
    'group_id',
    'router_rank',
    'job_id',
    'global_traffic',
    'local_traffic',
    'terminal_traffic',
    'global_saturation',
    'local_saturation'
];

var colorSchemes = [
    ["#eee", 'steelblue'],
    ["#eee", 'purple'],
    ["#eee", 'teal'],
    ["steelblue", 'red']
].concat(
    Object.keys(__WEBPACK_IMPORTED_MODULE_2_d3_scale_chromatic__).filter(function(f){
        return f.match('interpolate');
    }).map(function(scheme){
        return scheme.replace('interpolate', '');
    })
)

// console.log(colorSchemes);

var entities = [
    'global_links',
    'local_links',
    'terminals'
];

const METRICS_NULL = ' --- ';

var linkMetrics = [
    'traffic',
    'sat_time',
    'traffic + sat_time'
];

var terminalMetrics = [
    'avg_packet_latency',
    'avg_hops',
    'data_size',
    'sat_time',
    'data_size + sat_time',
    'avg_hops + avg_packet_latency',
    'router_port',
    'router_rank',
    'job_id'
];

var metrics = {
    local_links: linkMetrics,
    global_links: linkMetrics,
    terminals: terminalMetrics
};

function GUI(arg) {

    var layers = [];

    var options = arg || {},
        container = options.container,
        stats = options.stats,
        onSave = options.onsave || options.onSave || function(){};

    var savedSpec;

    $('#'+container).html(template);

    var aggrAttr = 'router_rank';
    var aggrAttrSelection = $('<select/>').addClass('ui fluid dropdown');
    $('#transform-attributes').append(aggrAttrSelection);

    function updateSelection(sel, options, selectedAttr) {
        var index = (options.indexOf(selectedAttr) > -1) ? options.indexOf(selectedAttr) : 0;
        sel.html('');
        sel.dropdown();
        options.forEach(function(opt, ii){
            var item = $('<option/>');
            if(ii == index) {
                item.addClass('active selected');
            } 
            sel.append(item.attr('value', opt).text(opt));
        })
        sel.dropdown('set value', options[index]);
        sel.dropdown('set text', options[index]);
        sel.dropdown('refresh');
    }

    function createLayer(arg) {
        var spec = arg || {},
            vmap = spec.vmap || {},
            projectEntity = spec.project || 'global_links',
            colorAttr = vmap.color || null,
            xAttr = vmap.x || null,
            yAttr = vmap.y || null,
            colorMap = spec.colors || ["steelblue", "red"],
            aggregate = spec.aggregate || false;

        if(arg && !spec.vmap) return;

        if(!spec.aggregate) aggregate = true;

        var tr = $('<tr/>'),
            td1 = $('<td/>'),
            td2 = $('<td/>'),
            td3 = $('<td/>'),
            projection = $('<select/>').addClass('ui fluid dropdown'),
            field1 = $('<div/>').addClass('field');


        var field2 = $('<div/>').addClass('field'),
            encoding = $('<select/>').addClass('ui fluid dropdown');


        field2.append(encoding);

        updateDropDown(projectEntity);
        function updateDropDown(en) {
            updateSelection(encoding, metrics[en], colorAttr);
        }

        field1.append(projection);
        td1.append(field1);
        td2.append(field2);

        var colorMenuDiv = $('<div/>')
            .addClass('ui fluid selection dropdown')
            .css('padding', '10px 4px'),
            colorMenu = $('<div/>').addClass('menu'),
            colorDisplay = $('<div/>').addClass('default text');

        colorMenuDiv.append($('<i/>').addClass('dropdown icon'));
        colorMenuDiv.append(colorDisplay);
        colorMenuDiv.append(colorMenu);

        colorDisplay.append(
            Object(__WEBPACK_IMPORTED_MODULE_0_hc5__["a" /* colorLegend */])({
                width: 120,
                height: 20,
                padding: {left: 0, right: 0, top: 0, bottom: 0},
                colors: colorMap,
                // container: item.get(0),
                nolabel: true
            }).node()
        );

        colorSchemes.forEach(function(cs){
            var item = $('<div/>').addClass('item').attr('data-value', cs);

            var colorGardient = Object(__WEBPACK_IMPORTED_MODULE_0_hc5__["a" /* colorLegend */])({
                width: 160,
                height: 20,
                padding: {left: 0, right: 0, top: 0, bottom: 0},
                colors: cs,
                // container: item.get(0),
                nolabel: true
            })

            if(JSON.stringify(cs) == JSON.stringify(colorMap)) {
                // colorDisplay.append(colorGardient.node());
                item.addClass('active selected');
            }

            item.append(colorGardient.node());
            colorMenu.append(item);

        })
        colorMenuDiv.dropdown();

        td3.append(colorMenuDiv);

        tr.append(td1, td2, td3);
        $('#specTable').append(tr);

        updateSelection(projection, entities, projectEntity);

        projection.change(function() {
            var v = projection.val();
            updateDropDown(v);
        })
        function getLayerSpec(s) {
            var spec = s || {},
                visualEncoding = encoding.val(),
                colorScheme = colorMenuDiv.dropdown('get value').split(','),
                vmap = {};

            if(colorScheme.length == 1) colorScheme = colorScheme[0];
            if( visualEncoding.includes(' + ') ) {
                var encodings = visualEncoding.split(' + ');
                vmap.size = encodings[0];
                vmap.color = encodings[1];
            } else {
                vmap.color = visualEncoding;
            }

            // if(xAttr != METRICS_NULL && xAttr !== null) vmap.x = xAttr;
            // if(yAttr != METRICS_NULL && yAttr !== null) vmap.y = yAttr;

            if(aggregate && !spec.hasOwnProperty('aggregate')) {
                spec.aggregate = (aggrAttr == 'router_rank')
                    ? 'router_port'
                    : 'router_rank';

                // if(id === 0) spec.aggregate = aggrAttr;
            }

            spec.project = projection.val();
            spec.vmap = vmap;
            spec.colors = colorScheme;
            if(spec.hasOwnProperty('data')) delete spec.data;
            return spec;
        }

        return {
            getSpec: getLayerSpec,
            remove: function() {tr.html('')}
        }
    }

    function getSpec(s) {
        savedSpec =  layers.map(function(layer, li){
            var baseSpec = (Array.isArray(s)) ? s[li] || {} : {};
            if(li === 0) {
                baseSpec.aggregate = aggrAttr;
                // if(filterValues[0] != filterRange[0] || filterValues[1] != filterRange[1]){
                    baseSpec.filter = {};
                    baseSpec.filter[aggrAttr] = filterValues;
                // }
            }
            return layer.getSpec(baseSpec);
        });

        return savedSpec;
    }

    var filterRange = [0, 1];
    var filterValues = filterRange;

    var onSliderUpdate = function(event, ui) {
        filterValues = ui.values;
        $( "#network-filter-range" ).text( ui.values[0] + ' - ' + ui.values[1]);
        
    }

    var filterConfig = {
        range: true,
        min: filterRange[0],
        max: filterRange[1],
        values: filterRange,
        slide: onSliderUpdate
    };

    function updateSlider() {
        if(stats.hasOwnProperty(aggrAttr)) filterRange = [stats[aggrAttr].min, stats[aggrAttr].max]; 
        filterConfig.min = filterRange[0];              
        filterConfig.max = filterRange[1]; 
        filterValues = filterRange;     
        filterConfig.values = filterValues;
        $( "#network-filter-attribute" ).text( aggrAttr + ' range: ');
        $( "#network-filter-range" ).text( filterValues[0] + ' - ' + filterValues[1]);
        $( "#network-filter-slider" ).slider(filterConfig);        
    }

    // updateSlider();

    $("#add-layer").click(function(){
        layers.push(createLayer());
        $('.item.active.selected').trigger('click');

    })

    $("#save-spec").click(function(){
        var specName = $('#spec-name').val();
        if(specName) {
            onSave({
                name: specName, 
                spec: savedSpec
            });
        }
    })

    $("#remove-layer").click(function(){
        if(layers.length)
            layers.pop().remove();
    })

    $('.ui.dropdown').dropdown();

    function clearGUI() {
        $('#specTable').html('');
    }

    function createGUI(specs) {
        layers = [];
        $('#transform-attributes').html('<label>Aggregate by</label>');
        var aggrAttrSelection = $('<select/>').addClass('ui fluid dropdown');
        aggrAttrSelection.change(function(){
            aggrAttr = $(this).val();
            updateSlider();
        });
        
        if(specs[0].hasOwnProperty('filter')) {
            filterValues = specs[0].filter[specs[0].aggregate];
            updateSlider(filterValues);       
        } else {
            filterValues = null; 
            updateSlider();
        }
        $('#transform-attributes').append(aggrAttrSelection);
        updateSelection(
            aggrAttrSelection,
            AGGR_METRICS,
            specs[0].aggregate
        );
        aggrAttr = specs[0].aggregate;
        clearGUI();
        specs.forEach(function(spec, si){
            var l = createLayer(spec);
            if(l) layers[si] = l;
        })
        $('.item.active.selected').trigger('click');
    }

    return {
        getSpec: getSpec,
        create: createGUI,
        clear: clearGUI,
        updateStats: function(newStats){ 
            stats = newStats; 
            filterRange = [stats[aggrAttr].min, stats[aggrAttr].max]
            filterConfig.values = filterRange;
            filterValues = filterRange;
            filterConfig.min = filterRange[0];
            filterConfig.max = filterRange[1];
            updateSlider();
        }
    };
}



/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
// JavaScript specs as packaged in the D3 library (d3js.org). Please see license at http://colorbrewer.org/export/LICENSE.txt
!function() {

var colorbrewer = {YlGn: {
3: ["#f7fcb9","#addd8e","#31a354"],
4: ["#ffffcc","#c2e699","#78c679","#238443"],
5: ["#ffffcc","#c2e699","#78c679","#31a354","#006837"],
6: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],
7: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
8: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
9: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]
},YlGnBu: {
3: ["#edf8b1","#7fcdbb","#2c7fb8"],
4: ["#ffffcc","#a1dab4","#41b6c4","#225ea8"],
5: ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],
6: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],
7: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
8: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
9: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]
},GnBu: {
3: ["#e0f3db","#a8ddb5","#43a2ca"],
4: ["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],
5: ["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],
6: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],
7: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
8: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
9: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]
},BuGn: {
3: ["#e5f5f9","#99d8c9","#2ca25f"],
4: ["#edf8fb","#b2e2e2","#66c2a4","#238b45"],
5: ["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],
6: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
7: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
8: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
9: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]
},PuBuGn: {
3: ["#ece2f0","#a6bddb","#1c9099"],
4: ["#f6eff7","#bdc9e1","#67a9cf","#02818a"],
5: ["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],
6: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],
7: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
8: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
9: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]
},PuBu: {
3: ["#ece7f2","#a6bddb","#2b8cbe"],
4: ["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],
5: ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],
6: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],
7: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
8: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
9: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]
},BuPu: {
3: ["#e0ecf4","#9ebcda","#8856a7"],
4: ["#edf8fb","#b3cde3","#8c96c6","#88419d"],
5: ["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],
6: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],
7: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
8: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
9: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]
},RdPu: {
3: ["#fde0dd","#fa9fb5","#c51b8a"],
4: ["#feebe2","#fbb4b9","#f768a1","#ae017e"],
5: ["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],
6: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],
7: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
8: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
9: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]
},PuRd: {
3: ["#e7e1ef","#c994c7","#dd1c77"],
4: ["#f1eef6","#d7b5d8","#df65b0","#ce1256"],
5: ["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],
6: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],
7: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
8: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
9: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]
},OrRd: {
3: ["#fee8c8","#fdbb84","#e34a33"],
4: ["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],
5: ["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],
6: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],
7: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
8: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
9: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]
},YlOrRd: {
3: ["#ffeda0","#feb24c","#f03b20"],
4: ["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],
5: ["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],
6: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],
7: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
8: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
9: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
},YlOrBr: {
3: ["#fff7bc","#fec44f","#d95f0e"],
4: ["#ffffd4","#fed98e","#fe9929","#cc4c02"],
5: ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],
6: ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],
7: ["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
8: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
9: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]
},Purples: {
3: ["#efedf5","#bcbddc","#756bb1"],
4: ["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"],
5: ["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"],
6: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"],
7: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
8: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
9: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]
},Blues: {
3: ["#deebf7","#9ecae1","#3182bd"],
4: ["#eff3ff","#bdd7e7","#6baed6","#2171b5"],
5: ["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"],
6: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"],
7: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
8: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
9: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]
},Greens: {
3: ["#e5f5e0","#a1d99b","#31a354"],
4: ["#edf8e9","#bae4b3","#74c476","#238b45"],
5: ["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],
6: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"],
7: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
8: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
9: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]
},Oranges: {
3: ["#fee6ce","#fdae6b","#e6550d"],
4: ["#feedde","#fdbe85","#fd8d3c","#d94701"],
5: ["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"],
6: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"],
7: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
8: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
9: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]
},Reds: {
3: ["#fee0d2","#fc9272","#de2d26"],
4: ["#fee5d9","#fcae91","#fb6a4a","#cb181d"],
5: ["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"],
6: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"],
7: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
8: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
9: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]
},Greys: {
3: ["#f0f0f0","#bdbdbd","#636363"],
4: ["#f7f7f7","#cccccc","#969696","#525252"],
5: ["#f7f7f7","#cccccc","#969696","#636363","#252525"],
6: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"],
7: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
8: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
9: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]
},PuOr: {
3: ["#f1a340","#f7f7f7","#998ec3"],
4: ["#e66101","#fdb863","#b2abd2","#5e3c99"],
5: ["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],
6: ["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],
7: ["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],
8: ["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],
9: ["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],
10: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],
11: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]
},BrBG: {
3: ["#d8b365","#f5f5f5","#5ab4ac"],
4: ["#a6611a","#dfc27d","#80cdc1","#018571"],
5: ["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],
6: ["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],
7: ["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],
8: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],
9: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],
10: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],
11: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]
},PRGn: {
3: ["#af8dc3","#f7f7f7","#7fbf7b"],
4: ["#7b3294","#c2a5cf","#a6dba0","#008837"],
5: ["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],
6: ["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],
7: ["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],
8: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
9: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
10: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],
11: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]
},PiYG: {
3: ["#e9a3c9","#f7f7f7","#a1d76a"],
4: ["#d01c8b","#f1b6da","#b8e186","#4dac26"],
5: ["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],
6: ["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],
7: ["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],
8: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
9: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
10: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],
11: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]
},RdBu: {
3: ["#ef8a62","#f7f7f7","#67a9cf"],
4: ["#ca0020","#f4a582","#92c5de","#0571b0"],
5: ["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],
6: ["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],
7: ["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]
},RdGy: {
3: ["#ef8a62","#ffffff","#999999"],
4: ["#ca0020","#f4a582","#bababa","#404040"],
5: ["#ca0020","#f4a582","#ffffff","#bababa","#404040"],
6: ["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],
7: ["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]
},RdYlBu: {
3: ["#fc8d59","#ffffbf","#91bfdb"],
4: ["#d7191c","#fdae61","#abd9e9","#2c7bb6"],
5: ["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],
6: ["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],
7: ["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],
8: ["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],
9: ["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]
},Spectral: {
3: ["#fc8d59","#ffffbf","#99d594"],
4: ["#d7191c","#fdae61","#abdda4","#2b83ba"],
5: ["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],
6: ["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],
7: ["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],
8: ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],
9: ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
10: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],
11: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]
},RdYlGn: {
3: ["#fc8d59","#ffffbf","#91cf60"],
4: ["#d7191c","#fdae61","#a6d96a","#1a9641"],
5: ["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],
6: ["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],
7: ["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],
8: ["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
9: ["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]
},Accent: {
3: ["#7fc97f","#beaed4","#fdc086"],
4: ["#7fc97f","#beaed4","#fdc086","#ffff99"],
5: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],
6: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],
7: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],
8: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]
},Dark2: {
3: ["#1b9e77","#d95f02","#7570b3"],
4: ["#1b9e77","#d95f02","#7570b3","#e7298a"],
5: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"],
6: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"],
7: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"],
8: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]
},Paired: {
3: ["#a6cee3","#1f78b4","#b2df8a"],
4: ["#a6cee3","#1f78b4","#b2df8a","#33a02c"],
5: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],
6: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],
7: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],
8: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],
9: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],
10: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],
11: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],
12: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]
},Pastel1: {
3: ["#fbb4ae","#b3cde3","#ccebc5"],
4: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],
5: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],
6: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],
7: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],
8: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],
9: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]
},Pastel2: {
3: ["#b3e2cd","#fdcdac","#cbd5e8"],
4: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],
5: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],
6: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],
7: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],
8: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]
},Set1: {
3: ["#e41a1c","#377eb8","#4daf4a"],
4: ["#e41a1c","#377eb8","#4daf4a","#984ea3"],
5: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],
6: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],
7: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],
8: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],
9: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]
},Set2: {
3: ["#66c2a5","#fc8d62","#8da0cb"],
4: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],
5: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],
6: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],
7: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],
8: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]
},Set3: {
3: ["#8dd3c7","#ffffb3","#bebada"],
4: ["#8dd3c7","#ffffb3","#bebada","#fb8072"],
5: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],
6: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],
7: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],
8: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],
9: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],
10: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],
11: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],
12: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
}};

if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (colorbrewer),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module === "object" && module.exports) {
    module.exports = colorbrewer;
} else {
    this.colorbrewer = colorbrewer;
}

}();


/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_categorical_category10__ = __webpack_require__(279);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_0__src_categorical_category10__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_categorical_Accent__ = __webpack_require__(280);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeAccent", function() { return __WEBPACK_IMPORTED_MODULE_1__src_categorical_Accent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_categorical_Dark2__ = __webpack_require__(281);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeDark2", function() { return __WEBPACK_IMPORTED_MODULE_2__src_categorical_Dark2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_categorical_Paired__ = __webpack_require__(282);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePaired", function() { return __WEBPACK_IMPORTED_MODULE_3__src_categorical_Paired__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_categorical_Pastel1__ = __webpack_require__(283);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePastel1", function() { return __WEBPACK_IMPORTED_MODULE_4__src_categorical_Pastel1__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_categorical_Pastel2__ = __webpack_require__(284);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePastel2", function() { return __WEBPACK_IMPORTED_MODULE_5__src_categorical_Pastel2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_categorical_Set1__ = __webpack_require__(285);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet1", function() { return __WEBPACK_IMPORTED_MODULE_6__src_categorical_Set1__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_categorical_Set2__ = __webpack_require__(286);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet2", function() { return __WEBPACK_IMPORTED_MODULE_7__src_categorical_Set2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_categorical_Set3__ = __webpack_require__(287);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet3", function() { return __WEBPACK_IMPORTED_MODULE_8__src_categorical_Set3__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__ = __webpack_require__(288);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBrBG", function() { return __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBrBG", function() { return __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePRGn", function() { return __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePRGn", function() { return __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__ = __webpack_require__(303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePiYG", function() { return __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePiYG", function() { return __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__ = __webpack_require__(304);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuOr", function() { return __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuOr", function() { return __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdBu", function() { return __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdBu", function() { return __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__ = __webpack_require__(306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdGy", function() { return __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdGy", function() { return __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__ = __webpack_require__(307);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__ = __webpack_require__(308);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__ = __webpack_require__(309);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateSpectral", function() { return __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSpectral", function() { return __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBuGn", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBuGn", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__ = __webpack_require__(311);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBuPu", function() { return __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBuPu", function() { return __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__ = __webpack_require__(312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGnBu", function() { return __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGnBu", function() { return __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__ = __webpack_require__(313);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateOrRd", function() { return __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeOrRd", function() { return __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__ = __webpack_require__(314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__ = __webpack_require__(315);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__ = __webpack_require__(316);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuRd", function() { return __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuRd", function() { return __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__ = __webpack_require__(317);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdPu", function() { return __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdPu", function() { return __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__ = __webpack_require__(318);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__ = __webpack_require__(319);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGn", function() { return __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlGn", function() { return __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__ = __webpack_require__(320);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__ = __webpack_require__(321);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBlues", function() { return __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBlues", function() { return __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__ = __webpack_require__(323);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGreens", function() { return __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGreens", function() { return __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__ = __webpack_require__(324);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGreys", function() { return __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGreys", function() { return __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__ = __webpack_require__(325);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePurples", function() { return __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePurples", function() { return __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__ = __webpack_require__(326);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateReds", function() { return __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeReds", function() { return __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__ = __webpack_require__(327);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateOranges", function() { return __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeOranges", function() { return __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_sequential_multi_cubehelix__ = __webpack_require__(328);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_36__src_sequential_multi_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__ = __webpack_require__(329);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_sequential_multi_sinebow__ = __webpack_require__(330);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateSinebow", function() { return __WEBPACK_IMPORTED_MODULE_38__src_sequential_multi_sinebow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__ = __webpack_require__(331);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["d"]; });










































/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"));


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"));


/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"));


/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"));


/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"));


/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"));


/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"));


/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"));


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gray */
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* unused harmony export lch */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(109);




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(109);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export interpolateTransformCss */
/* unused harmony export interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(293);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(294);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(19);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(19);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(19);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(19);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(3);



var scheme = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(41);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-240, 0.5, 1.0)));


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(41);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])();

/* harmony default export */ __webpack_exports__["b"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
});


/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);


var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(),
    pi_1_3 = Math.PI / 3,
    pi_2_3 = Math.PI * 2 / 3;

/* harmony default export */ __webpack_exports__["a"] = (function(t) {
  var x;
  t = (0.5 - t) * Math.PI;
  c.r = 255 * (x = Math.sin(t)) * x;
  c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
  c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
  return c + "";
});


/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return plasma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = netApp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dashi__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_transform__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_circularvis__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_dragonfly_custom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_dragonfly__ = __webpack_require__(29);






function netApp(arg) {
    var app = {};
    var container = arg.container;
    var datasetList = arg.datasets || [];
    var specs = arg.specs || [];
    var colorDomains = [];

    var contrastSpec = specs[0].spec;
    var datasets = {
        left: [],
        right: []
    };

    var vis = {};
    var domains = {};

    var dashboard = new __WEBPACK_IMPORTED_MODULE_0_dashi__["c" /* Layout */]({
        container: container,
        margin: 10,
        cols: [
            {
                width: 0.4,
                id: 'view-left'
            },
            {
                width: 0.2,
                id: 'view-center'
            },
            {
                width: 0.4,
                id: 'view-right'
            }
        ]
    });

    var midCol = new __WEBPACK_IMPORTED_MODULE_0_dashi__["c" /* Layout */]({
        container: dashboard.cell('view-center'),
        margin: 0,
        rows: [
            {
                height: 0.7,
                id: 'col-top'
            },
            {
                height: 0.3,
                id: 'col-bottom'
            }
        ]
    });

    var views = {};
    views.left = new __WEBPACK_IMPORTED_MODULE_0_dashi__["e" /* Panel */]({
        container: dashboard.cell('view-left'),
        id: "panel-left",
        title: "",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });
    views.right = new __WEBPACK_IMPORTED_MODULE_0_dashi__["e" /* Panel */]({
        container: dashboard.cell('view-right'),
        id: "panel-right",
        title: "",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });

    var centerPanel = new __WEBPACK_IMPORTED_MODULE_0_dashi__["e" /* Panel */]({
        container: midCol.cell('col-top'),
        id: "panel-specs",
        title: "Specifications",
        header: {height: 0.05 / 0.7, style: {backgroundColor: '#F4F4F4'}},
        style: {
            padding: '10px'
        }
    });

    var legendPanel = new __WEBPACK_IMPORTED_MODULE_0_dashi__["e" /* Panel */]({
        container: midCol.cell('col-bottom'),
        id: "panel-legend",
        style: {
            padding: '10px'
        }
    });

    var specList = new __WEBPACK_IMPORTED_MODULE_0_dashi__["d" /* List */]({
        types: ['relaxed', 'divided', 'selection', 'single'],
        selectedColor: 'steelblue',
        onselect: function(specId) {
            contrastSpec = specs[specId].spec;
            updateView('left');
            updateView('right');
        }
    });

    specs.forEach(function(spec){
        specList.append({header: spec.name});
    });
    
    centerPanel.append(specList);
    Object.keys(views).forEach(function(side){
        views[side].sel = document.createElement('select');
        views[side].sel.innerHTML = '<option> --- </option>';
        views[side].sel.style.marginRight = '5px';
        datasetList.forEach(function(dataset){
            var option = document.createElement('option');
            option.value = dataset.name;
            option.innerHTML = dataset.name;
            views[side].sel.appendChild(option);
        });

        views[side].header.append('<span>Dataset: </span>');
        views[side].header.append(views[side].sel);
        
        views[side].sel.onchange = function() {
            datasets[side] = datasetList.filter(d=>d.name == this.value)[0];
            updateView(side);
        }
    });
    
    function updateView(side) {
        var dataset = datasets[side];
        var view = views[side];
        if(!dataset.data) return;
        var config = {
            container: '#'+ view.id + '-body',
            width: view.innerWidth,
            height: view.innerHeight,
            padding: 0,
            // legend: true
        };
        view.clear();
        var networkModel = (dataset.topology == 'Dragonfly') ? __WEBPACK_IMPORTED_MODULE_4__model_dragonfly__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_3__model_dragonfly_custom__["a" /* default */];
        
        networkModel(dataset.data, {groups: dataset.groups})
        .then(function(data){
            var dataInput = Object(__WEBPACK_IMPORTED_MODULE_1__network_transform__["a" /* default */])(data);
            vis[side] = Object(__WEBPACK_IMPORTED_MODULE_2__network_circularvis__["a" /* default */])(config, contrastSpec, dataInput);
            domains[side] = vis[side].map(v=>v.colorDomain);
            var legendConfigs = {
                container: '#panel-legend-body',
                width: legendPanel.innerWidth,
                height: legendPanel.innerHeight,
                padding: {left: 20, right: 20, top: 30, bottom: 0},
            };

            if(vis.left !== undefined && vis.right !== undefined) {
                var leftDomains = domains.left;
                var rightDomains = domains.right;

                for(var i = 0; i < leftDomains.length-1; i++) {
                    colorDomains[i] = [
                        Math.min(leftDomains[i][0], rightDomains[i][0]),
                        Math.max(leftDomains[i][1], rightDomains[i][1])
                    ];
                }
                legendConfigs.colorDomains = colorDomains;

                vis.left.forEach(function(v, vi){
                    if(typeof v.updateColor == 'function')
                        v.updateColor(colorDomains[vi]);
                })
                vis.right.forEach(function(v, vi){
                    if(typeof v.updateColor == 'function')
                        v.updateColor(colorDomains[vi]);
                })
            }
            legendPanel.clear();
            vis[side].createColorLegend(legendConfigs);
        });
    }

    return app;
}

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version {version}, {date}
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */
 
var keys = Object.keys;
var isArray = Array.isArray;
var _global = typeof self !== 'undefined' ? self :
    typeof window !== 'undefined' ? window :
        global;
function extend(obj, extension) {
    if (typeof extension !== 'object')
        return obj;
    keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
    if (typeof extension === 'function')
        extension = extension(getProto(proto));
    keys(extension).forEach(function (key) {
        setProp(proto, key, extension[key]);
    });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
    defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ?
        { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } :
        { value: functionOrGetSet, configurable: true, writable: true }, options));
}
function derive(Child) {
    return {
        from: function (Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop), proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}
function assert(b) {
    if (!b)
        throw new Error("Assertion Failed");
}
function asap(fn) {
    if (_global.setImmediate)
        setImmediate(fn);
    else
        setTimeout(fn, 0);
}

/** Generate an object (hash map) based on given array.
 * @param extractor Function taking an array item and its index and returning an array of 2 items ([key, value]) to
 *        instert on the resulting object for each item in the array. If this function returns a falsy value, the
 *        current item wont affect the resulting object.
 */
function arrayToObject(array, extractor) {
    return array.reduce(function (result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue)
            result[nameAndValue[0]] = nameAndValue[1];
        return result;
    }, {});
}
function trycatcher(fn, reject) {
    return function () {
        try {
            fn.apply(this, arguments);
        }
        catch (e) {
            reject(e);
        }
    };
}
function tryCatch(fn, onerror, args) {
    try {
        fn.apply(null, args);
    }
    catch (ex) {
        onerror && onerror(ex);
    }
}
function getByKeyPath(obj, keyPath) {
    // http://www.w3.org/TR/IndexedDB/#steps-for-extracting-a-key-from-a-value-using-a-key-path
    if (hasOwn(obj, keyPath))
        return obj[keyPath]; // This line is moved from last to first for optimization purpose.
    if (!keyPath)
        return obj;
    if (typeof keyPath !== 'string') {
        var rv = [];
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf('.');
    if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
}
function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined)
        return;
    if ('isFrozen' in Object && Object.isFrozen(obj))
        return;
    if (typeof keyPath !== 'string' && 'length' in keyPath) {
        assert(typeof value !== 'string' && 'length' in value);
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
        }
    }
    else {
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "")
                if (value === undefined)
                    delete obj[currentKeyPath];
                else
                    obj[currentKeyPath] = value;
            else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj)
                    innerObj = (obj[currentKeyPath] = {});
                setByKeyPath(innerObj, remainingKeyPath, value);
            }
        }
        else {
            if (value === undefined)
                delete obj[keyPath];
            else
                obj[keyPath] = value;
        }
    }
}
function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === 'string')
        setByKeyPath(obj, keyPath, undefined);
    else if ('length' in keyPath)
        [].map.call(keyPath, function (kp) {
            setByKeyPath(obj, kp, undefined);
        });
}
function shallowClone(obj) {
    var rv = {};
    for (var m in obj) {
        if (hasOwn(obj, m))
            rv[m] = obj[m];
    }
    return rv;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
var intrinsicTypes = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set"
    .split(',').concat(flatten([8, 16, 32, 64].map(function (num) { return ["Int", "Uint", "Float"].map(function (t) { return t + num + "Array"; }); }))).filter(function (t) { return _global[t]; }).map(function (t) { return _global[t]; });
function deepClone(any) {
    if (!any || typeof any !== 'object')
        return any;
    var rv;
    if (isArray(any)) {
        rv = [];
        for (var i = 0, l = any.length; i < l; ++i) {
            rv.push(deepClone(any[i]));
        }
    }
    else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
        rv = any;
    }
    else {
        rv = any.constructor ? Object.create(any.constructor.prototype) : {};
        for (var prop in any) {
            if (hasOwn(any, prop)) {
                rv[prop] = deepClone(any[prop]);
            }
        }
    }
    return rv;
}
function getObjectDiff(a, b, rv, prfx) {
    // Compares objects a and b and produces a diff object.
    rv = rv || {};
    prfx = prfx || '';
    keys(a).forEach(function (prop) {
        if (!hasOwn(b, prop))
            rv[prfx + prop] = undefined; // Property removed
        else {
            var ap = a[prop], bp = b[prop];
            if (typeof ap === 'object' && typeof bp === 'object' &&
                ap && bp &&
                // Now compare constructors are same (not equal because wont work in Safari)
                ('' + ap.constructor) === ('' + bp.constructor))
                // Same type of object but its properties may have changed
                getObjectDiff(ap, bp, rv, prfx + prop + ".");
            else if (ap !== bp)
                rv[prfx + prop] = b[prop]; // Primitive value changed
        }
    });
    keys(b).forEach(function (prop) {
        if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop]; // Property added
        }
    });
    return rv;
}
// If first argument is iterable or array-like, return it as an array
var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () { return null; };
var NO_CHAR_ARRAY = {};
// Takes one or several arguments and returns an array based on the following criteras:
// * If several arguments provided, return arguments converted to an array in a way that
//   still allows javascript engine to optimize the code.
// * If single argument is an array, return a clone of it.
// * If this-pointer equals NO_CHAR_ARRAY, don't accept strings as valid iterables as a special
//   case to the two bullets below.
// * If single argument is an iterable, convert it to an array and return the resulting array.
// * If single argument is array-like (has length of type number), convert it to an array.
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
        if (isArray(arrayLike))
            return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string')
            return [arrayLike];
        if ((it = getIteratorOf(arrayLike))) {
            a = [];
            while ((x = it.next()), !x.done)
                a.push(x.value);
            return a;
        }
        if (arrayLike == null)
            return [arrayLike];
        i = arrayLike.length;
        if (typeof i === 'number') {
            a = new Array(i);
            while (i--)
                a[i] = arrayLike[i];
            return a;
        }
        return [arrayLike];
    }
    i = arguments.length;
    a = new Array(i);
    while (i--)
        a[i] = arguments[i];
    return a;
}

// By default, debug will be true only if platform is a web platform and its page is served from localhost.
// When debug = true, error's stacks will contain asyncronic long stacks.
var debug = typeof location !== 'undefined' &&
    // By default, use debug mode if served from localhost.
    /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
}
var libraryFilter = function () { return true; };
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
    "use strict";
    if (NEEDS_THROW_FOR_STACK)
        try {
            // Doing something naughty in strict mode here to trigger a specific error
            // that can be explicitely ignored in debugger's exception settings.
            // If we'd just throw new Error() here, IE's debugger's exception settings
            // will just consider it as "exception thrown by javascript code" which is
            // something you wouldn't want it to ignore.
            getErrorWithStack.arguments;
            throw new Error(); // Fallback if above line don't throw.
        }
        catch (e) {
            return e;
        }
    return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack)
        return "";
    numIgnoredFrames = (numIgnoredFrames || 0);
    if (stack.indexOf(exception.name) === 0)
        numIgnoredFrames += (exception.name + exception.message).split('\n').length;
    return stack.split('\n')
        .slice(numIgnoredFrames)
        .filter(libraryFilter)
        .map(function (frame) { return "\n" + frame; })
        .join('');
}
function deprecated(what, fn) {
    return function () {
        console.warn(what + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + prettyStack(getErrorWithStack(), 1));
        return fn.apply(this, arguments);
    };
}

var dexieErrorNames = [
    'Modify',
    'Bulk',
    'OpenFailed',
    'VersionChange',
    'Schema',
    'Upgrade',
    'InvalidTable',
    'MissingAPI',
    'NoSuchDatabase',
    'InvalidArgument',
    'SubTransaction',
    'Unsupported',
    'Internal',
    'DatabaseClosed',
    'PrematureCommit',
    'ForeignAwait'
];
var idbDomErrorNames = [
    'Unknown',
    'Constraint',
    'Data',
    'TransactionInactive',
    'ReadOnly',
    'Version',
    'NotFound',
    'InvalidState',
    'InvalidAccess',
    'Abort',
    'Timeout',
    'QuotaExceeded',
    'Syntax',
    'DataClone'
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed"
};
//
// DexieError - base class of all out exceptions.
//
function DexieError(name, msg) {
    // Reason we don't use ES6 classes is because:
    // 1. It bloats transpiled code and increases size of minified code.
    // 2. It doesn't give us much in this case.
    // 3. It would require sub classes to call super(), which
    //    is not needed when deriving from Error.
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
}
derive(DexieError).from(Error).extend({
    stack: {
        get: function () {
            return this._stack ||
                (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function () { return this.name + ": " + this.message; }
});
function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + failures
        .map(function (f) { return f.toString(); })
        .filter(function (v, i, s) { return s.indexOf(v) === i; }) // Only unique error strings
        .join('\n');
}
//
// ModifyError - thrown in Collection.modify()
// Specific constructor because it contains members failures and failedKeys.
//
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = failures;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
//
//
// Dynamically generate error names and exception classes based
// on the names in errorList.
//
//
// Map of {ErrorName -> ErrorName + "Error"}
var errnames = errorList.reduce(function (obj, name) { return (obj[name] = name + "Error", obj); }, {});
// Need an alias for DexieError because we're gonna create subclasses with the same name.
var BaseException = DexieError;
// Map of {ErrorName -> exception constructor}
var exceptions = errorList.reduce(function (obj, name) {
    // Let the name be "DexieError" because this name may
    // be shown in call stack and when debugging. DexieError is
    // the most true name because it derives from DexieError,
    // and we cannot change Function.name programatically without
    // dynamically create a Function object, which would be considered
    // 'eval-evil'.
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;
        if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
        }
        else if (typeof msgOrInner === 'string') {
            this.message = msgOrInner;
            this.inner = inner || null;
        }
        else if (typeof msgOrInner === 'object') {
            this.message = msgOrInner.name + " " + msgOrInner.message;
            this.inner = msgOrInner;
        }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
}, {});
// Use ECMASCRIPT standard exceptions where applicable:
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
        return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) {
        // Derive stack from inner exception if it has a stack
        setProp(rv, "stack", { get: function () {
                return this.inner.stack;
            } });
    }
    return rv;
}
var fullNameExceptions = errorList.reduce(function (obj, name) {
    if (["Syntax", "Type", "Range"].indexOf(name) === -1)
        obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function nop() { }
function mirror(val) { return val; }
function pureFunctionChain(f1, f2) {
    // Enables chained events that takes ONE argument and returns it to the next function in chain.
    // This pattern is used in the hook("reading") event.
    if (f1 == null || f1 === mirror)
        return f2;
    return function (val) {
        return f2(f1(val));
    };
}
function callBoth(on1, on2) {
    return function () {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
    };
}
function hookCreatingChain(f1, f2) {
    // Enables chained events that takes several arguments and may modify first argument by making a modification and then returning the same instance.
    // This pattern is used in the hook("creating") event.
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res !== undefined)
            arguments[0] = res;
        var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
    };
}
function hookDeletingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
}
function hookUpdatingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function (modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res); // If f1 returns new modifications, extend caller's modifications with the result before calling next in chain.
        var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ?
            (res2 === undefined ? undefined : res2) :
            (extend(res, res2));
    };
}
function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        if (f2.apply(this, arguments) === false)
            return false;
        return f1.apply(this, arguments);
    };
}

function promisableChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === 'function') {
            var thiz = this, i = arguments.length, args = new Array(i);
            while (i--)
                args[i] = arguments[i];
            return res.then(function () {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}

/*
 * Copyright (c) 2014-2017 David Fahlander
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/LICENSE-2.0
 */
//
// Promise and Zone (PSD) for Dexie library
//
// I started out writing this Promise class by copying promise-light (https://github.com/taylorhakes/promise-light) by
// https://github.com/taylorhakes - an A+ and ECMASCRIPT 6 compliant Promise implementation.
//
// In previous versions this was fixed by not calling setTimeout when knowing that the resolve() or reject() came from another
// tick. In Dexie v1.4.0, I've rewritten the Promise class entirely. Just some fragments of promise-light is left. I use
// another strategy now that simplifies everything a lot: to always execute callbacks in a new micro-task, but have an own micro-task
// engine that is indexedDB compliant across all browsers.
// Promise class has also been optimized a lot with inspiration from bluebird - to avoid closures as much as possible.
// Also with inspiration from bluebird, asyncronic stacks in debug mode.
//
// Specific non-standard features of this Promise class:
// * Custom zone support (a.k.a. PSD) with ability to keep zones also when using native promises as well as
//   native async / await.
// * Promise.follow() method built upon the custom zone engine, that allows user to track all promises created from current stack frame
//   and below + all promises that those promises creates or awaits.
// * Detect any unhandled promise in a PSD-scope (PSD.onunhandled). 
//
// David Fahlander, https://github.com/dfahlander
//
// Just a pointer that only this module knows about.
// Used in Promise constructor to emulate a private constructor.
var INTERNAL = {};
// Async stacks (long stacks) must not grow infinitely.
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var ZONE_ECHO_LIMIT = 7;
var nativePromiseInstanceAndProto = (function () {
    try {
        // Be able to patch native async functions
        return new Function("let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];")();
    }
    catch (e) {
        var P = _global.Promise;
        return P ?
            [P.resolve(), P.prototype, P.resolve()] :
            [];
    }
})();
var resolvedNativePromise = nativePromiseInstanceAndProto[0];
var nativePromiseProto = nativePromiseInstanceAndProto[1];
var resolvedGlobalPromise = nativePromiseInstanceAndProto[2];
var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var AsyncFunction = nativePromiseInstanceAndProto[3];
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
/* The default function used only for the very first promise in a promise chain.
   As soon as then promise is resolved or rejected, all next tasks will be executed in micro ticks
   emulated in this module. For indexedDB compatibility, this means that every method needs to
   execute at least one promise before doing an indexedDB operation. Dexie will always call
   db.ready().then() for every operation to make sure the indexedDB event is started in an
   indexedDB-compatible emulated micro task loop.
*/
var schedulePhysicalTick = resolvedGlobalPromise ?
    function () { resolvedGlobalPromise.then(physicalTick); }
    :
        _global.setImmediate ?
            // setImmediate supported. Those modern platforms also supports Function.bind().
            setImmediate.bind(null, physicalTick) :
            _global.MutationObserver ?
                // MutationObserver supported
                function () {
                    var hiddenDiv = document.createElement("div");
                    (new MutationObserver(function () {
                        physicalTick();
                        hiddenDiv = null;
                    })).observe(hiddenDiv, { attributes: true });
                    hiddenDiv.setAttribute('i', '1');
                } :
                // No support for setImmediate or MutationObserver. No worry, setTimeout is only called
                // once time. Every tick that follows will be our emulated micro tick.
                // Could have uses setTimeout.bind(null, 0, physicalTick) if it wasnt for that FF13 and below has a bug 
                function () { setTimeout(physicalTick, 0); };
// Configurable through Promise.scheduler.
// Don't export because it would be unsafe to let unknown
// code call it unless they do try..catch within their callback.
// This function can be retrieved through getter of Promise.scheduler though,
// but users must not do Promise.scheduler = myFuncThatThrowsException
var asap$1 = function (callback, args) {
    microtickQueue.push([callback, args]);
    if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
    }
};
var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror; // Remove in next major when removing error mapping of DOMErrors and DOMExceptions
var globalPSD = {
    id: 'global',
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    pgp: false,
    env: {},
    finalize: function () {
        this.unhandleds.forEach(function (uh) {
            try {
                globalError(uh[0], uh[1]);
            }
            catch (e) { }
        });
    }
};
var PSD = globalPSD;
var microtickQueue = []; // Callbacks to call in this or next physical tick.
var numScheduledCalls = 0; // Number of listener-calls left to do in this physical tick.
var tickFinalizers = []; // Finalizers to call when there are no more async calls scheduled within current physical tick.
function Promise(fn) {
    if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
    this._listeners = [];
    this.onuncatched = nop; // Deprecate in next major. Not needed. Better to use global error handler.
    // A library may set `promise._lib = true;` after promise is created to make resolve() or reject()
    // execute the microtask engine implicitely within the call to resolve() or reject().
    // To remain A+ compliant, a library must only set `_lib=true` if it can guarantee that the stack
    // only contains library code when calling resolve() or reject().
    // RULE OF THUMB: ONLY set _lib = true for promises explicitely resolving/rejecting directly from
    // global scope (event handler, timer etc)!
    this._lib = false;
    // Current async scope
    var psd = (this._PSD = PSD);
    if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0; // Number of previous promises (for long stacks)
    }
    if (typeof fn !== 'function') {
        if (fn !== INTERNAL)
            throw new TypeError('Not a function');
        // Private constructor (INTERNAL, state, value).
        // Used internally by Promise.resolve() and Promise.reject().
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false)
            handleRejection(this, this._value); // Map error, set stack and addPossiblyUnhandledError().
        return;
    }
    this._state = null; // null (=pending), false (=rejected) or true (=resolved)
    this._value = null; // error or result
    ++psd.ref; // Refcounting current scope
    executePromiseTask(this, fn);
}
// Prepare a property descriptor to put onto Promise.prototype.then
var thenProp = {
    get: function () {
        var psd = PSD, microTaskId = totalEchoes;
        function then(onFulfilled, onRejected) {
            var _this = this;
            var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
            if (possibleAwait)
                decrementExpectedAwaits();
            var rv = new Promise(function (resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait), resolve, reject, psd));
            });
            debug && linkToPreviousPromise(rv, this);
            return rv;
        }
        then.prototype = INTERNAL; // For idempotense, see setter below.
        return then;
    },
    // Be idempotent and allow another framework (such as zone.js or another instance of a Dexie.Promise module) to replace Promise.prototype.then
    // and when that framework wants to restore the original property, we must identify that and restore the original property descriptor.
    set: function (value) {
        setProp(this, 'then', value && value.prototype === INTERNAL ?
            thenProp : // Restore to original property descriptor.
            {
                get: function () {
                    return value; // Getter returning provided value (behaves like value is just changed)
                },
                set: thenProp.set // Keep a setter that is prepared to restore original.
            });
    }
};
props(Promise.prototype, {
    then: thenProp,
    _then: function (onFulfilled, onRejected) {
        // A little tinier version of then() that don't have to create a resulting promise.
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
    },
    catch: function (onRejected) {
        if (arguments.length === 1)
            return this.then(null, onRejected);
        // First argument is the Error type to catch
        var type = arguments[0], handler = arguments[1];
        return typeof type === 'function' ? this.then(null, function (err) {
            // Catching errors by its constructor type (similar to java / c++ / c#)
            // Sample: promise.catch(TypeError, function (e) { ... });
            return err instanceof type ? handler(err) : PromiseReject(err);
        })
            : this.then(null, function (err) {
                // Catching errors by the error.name property. Makes sense for indexedDB where error type
                // is always DOMError but where e.name tells the actual error type.
                // Sample: promise.catch('ConstraintError', function (e) { ... });
                return err && err.name === type ? handler(err) : PromiseReject(err);
            });
    },
    finally: function (onFinally) {
        return this.then(function (value) {
            onFinally();
            return value;
        }, function (err) {
            onFinally();
            return PromiseReject(err);
        });
    },
    stack: {
        get: function () {
            if (this._stack)
                return this._stack;
            try {
                stack_being_generated = true;
                var stacks = getStack(this, [], MAX_LONG_STACKS);
                var stack = stacks.join("\nFrom previous: ");
                if (this._state !== null)
                    this._stack = stack; // Stack may be updated on reject.
                return stack;
            }
            finally {
                stack_being_generated = false;
            }
        }
    },
    timeout: function (ms, msg) {
        var _this = this;
        return ms < Infinity ?
            new Promise(function (resolve, reject) {
                var handle = setTimeout(function () { return reject(new exceptions.Timeout(msg)); }, ms);
                _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
            }) : this;
    }
});
if (typeof Symbol !== 'undefined' && Symbol.toStringTag)
    setProp(Promise.prototype, Symbol.toStringTag, 'Promise');
// Now that Promise.prototype is defined, we have all it takes to set globalPSD.env.
// Environment globals snapshotted on leaving global zone
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = zone;
}
// Promise Static Properties
props(Promise, {
    all: function () {
        var values = getArrayOf.apply(null, arguments) // Supports iterables, implicit arguments and array-like.
            .map(onPossibleParallellAsync); // Handle parallell async/awaits 
        return new Promise(function (resolve, reject) {
            if (values.length === 0)
                resolve([]);
            var remaining = values.length;
            values.forEach(function (a, i) { return Promise.resolve(a).then(function (x) {
                values[i] = x;
                if (!--remaining)
                    resolve(values);
            }, reject); });
        });
    },
    resolve: function (value) {
        if (value instanceof Promise)
            return value;
        if (value && typeof value.then === 'function')
            return new Promise(function (resolve, reject) {
                value.then(resolve, reject);
            });
        var rv = new Promise(INTERNAL, true, value);
        linkToPreviousPromise(rv, currentFulfiller);
        return rv;
    },
    reject: PromiseReject,
    race: function () {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new Promise(function (resolve, reject) {
            values.map(function (value) { return Promise.resolve(value).then(resolve, reject); });
        });
    },
    PSD: {
        get: function () { return PSD; },
        set: function (value) { return PSD = value; }
    },
    //totalEchoes: {get: ()=>totalEchoes},
    //task: {get: ()=>task},
    newPSD: newScope,
    usePSD: usePSD,
    scheduler: {
        get: function () { return asap$1; },
        set: function (value) { asap$1 = value; }
    },
    rejectionMapper: {
        get: function () { return rejectionMapper; },
        set: function (value) { rejectionMapper = value; } // Map reject failures
    },
    follow: function (fn, zoneProps) {
        return new Promise(function (resolve, reject) {
            return newScope(function (resolve, reject) {
                var psd = PSD;
                psd.unhandleds = []; // For unhandled standard- or 3rd party Promises. Checked at psd.finalize()
                psd.onunhandled = reject; // Triggered directly on unhandled promises of this library.
                psd.finalize = callBoth(function () {
                    var _this = this;
                    // Unhandled standard or 3rd part promises are put in PSD.unhandleds and
                    // examined upon scope completion while unhandled rejections in this Promise
                    // will trigger directly through psd.onunhandled
                    run_at_end_of_this_or_next_physical_tick(function () {
                        _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
                    });
                }, psd.finalize);
                fn();
            }, zoneProps, resolve, reject);
        });
    }
});
/**
* Take a potentially misbehaving resolver function and make sure
* onFulfilled and onRejected are only called once.
*
* Makes no guarantees about asynchrony.
*/
function executePromiseTask(promise, fn) {
    // Promise Resolution Procedure:
    // https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    try {
        fn(function (value) {
            if (promise._state !== null)
                return; // Already settled
            if (value === promise)
                throw new TypeError('A promise cannot be resolved with itself.');
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === 'function') {
                executePromiseTask(promise, function (resolve, reject) {
                    value instanceof Promise ?
                        value._then(resolve, reject) :
                        value.then(resolve, reject);
                });
            }
            else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
            }
            if (shouldExecuteTick)
                endMicroTickScope();
        }, handleRejection.bind(null, promise)); // If Function.bind is not supported. Exception is handled in catch below
    }
    catch (ex) {
        handleRejection(promise, ex);
    }
}
function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null)
        return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
            get: function () {
                return stack_being_generated ?
                    origProp && (origProp.get ?
                        origProp.get.apply(reason) :
                        origProp.value) :
                    promise.stack;
            }
        });
    });
    // Add the failure to a list of possibly uncaught errors
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick)
        endMicroTickScope();
}
function propagateAllListeners(promise) {
    //debug && linkToPreviousPromise(promise);
    var listeners = promise._listeners;
    promise._listeners = [];
    for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
    }
    var psd = promise._PSD;
    --psd.ref || psd.finalize(); // if psd.ref reaches zero, call psd.finalize();
    if (numScheduledCalls === 0) {
        // If numScheduledCalls is 0, it means that our stack is not in a callback of a scheduled call,
        // and that no deferreds where listening to this rejection or success.
        // Since there is a risk that our stack can contain application code that may
        // do stuff after this code is finished that may generate new calls, we cannot
        // call finalizers here.
        ++numScheduledCalls;
        asap$1(function () {
            if (--numScheduledCalls === 0)
                finalizePhysicalTick(); // Will detect unhandled errors
        }, []);
    }
}
function propagateToListener(promise, listener) {
    if (promise._state === null) {
        promise._listeners.push(listener);
        return;
    }
    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) {
        // This Listener doesnt have a listener for the event being triggered (onFulfilled or onReject) so lets forward the event to any eventual listeners on the Promise instance returned by then() or catch()
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
    }
    ++listener.psd.ref;
    ++numScheduledCalls;
    asap$1(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
    try {
        // Set static variable currentFulfiller to the promise that is being fullfilled,
        // so that we connect the chain of promises (for long stacks support)
        currentFulfiller = promise;
        // Call callback and resolve our listener with it's return value.
        var ret, value = promise._value;
        if (promise._state) {
            // cb is onResolved
            ret = cb(value);
        }
        else {
            // cb is onRejected
            if (rejectingErrors.length)
                rejectingErrors = [];
            ret = cb(value);
            if (rejectingErrors.indexOf(value) === -1)
                markErrorAsHandled(promise); // Callback didnt do Promise.reject(err) nor reject(err) onto another promise.
        }
        listener.resolve(ret);
    }
    catch (e) {
        // Exception thrown in callback. Reject our listener.
        listener.reject(e);
    }
    finally {
        // Restore env and currentFulfiller.
        currentFulfiller = null;
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
        --listener.psd.ref || listener.psd.finalize();
    }
}
function getStack(promise, stacks, limit) {
    if (stacks.length === limit)
        return stacks;
    var stack = "";
    if (promise._state === false) {
        var failure = promise._value, errorName, message;
        if (failure != null) {
            errorName = failure.name || "Error";
            message = failure.message || failure;
            stack = prettyStack(failure, 0);
        }
        else {
            errorName = failure; // If error is undefined or null, show that.
            message = "";
        }
        stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1)
            stacks.push(stack);
        if (promise._prev)
            getStack(promise._prev, stacks, limit);
    }
    return stacks;
}
function linkToPreviousPromise(promise, prev) {
    // Support long stacks by linking to previous completed promise.
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        promise._prev = prev;
        promise._numPrev = numPrev;
    }
}
/* The callback to schedule with setImmediate() or setTimeout().
   It runs a virtual microtick and executes any callback registered in microtickQueue.
 */
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
}
/* Executes micro-ticks without doing try..catch.
   This can be possible because we only use this internally and
   the registered functions are exception-safe (they do try..catch
   internally before calling any external method). If registering
   functions in the microtickQueue that are not exception-safe, this
   would destroy the framework and make it instable. So we don't export
   our asap method.
*/
function endMicroTickScope() {
    var callbacks, i, l;
    do {
        while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
            }
        }
    } while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function (p) {
        p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0); // Clone first because finalizer may remove itself from list.
    var i = finalizers.length;
    while (i)
        finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap$1(function () {
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
    }, []);
}
function addPossiblyUnhandledError(promise) {
    // Only add to unhandledErrors if not already there. The first one to add to this list
    // will be upon the first rejection so that the root cause (first promise in the
    // rejection chain) is the one listed.
    if (!unhandledErrors.some(function (p) { return p._value === promise._value; }))
        unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
    // Called when a reject handled is actually being called.
    // Search in unhandledErrors for any promise whos _value is this promise_value (list
    // contains only rejected promises, and only one item per error)
    var i = unhandledErrors.length;
    while (i)
        if (unhandledErrors[--i]._value === promise._value) {
            // Found a promise that failed with this same error object pointer,
            // Remove that since there is a listener that actually takes care of it.
            unhandledErrors.splice(i, 1);
            return;
        }
}
function PromiseReject(reason) {
    return new Promise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function () {
        var wasRootExec = beginMicroTickScope(), outerScope = PSD;
        try {
            switchToZone(psd, true);
            return fn.apply(this, arguments);
        }
        catch (e) {
            errorCatcher && errorCatcher(e);
        }
        finally {
            switchToZone(outerScope, false);
            if (wasRootExec)
                endMicroTickScope();
        }
    };
}
//
// variables used for native await support
//
var task = { awaits: 0, echoes: 0, id: 0 }; // The ongoing macro-task when using zone-echoing.
var taskCounter = 0; // ID counter for macro tasks.
var zoneStack = []; // Stack of left zones to restore asynchronically.
var zoneEchoes = 0; // zoneEchoes is a must in order to persist zones between native await expressions.
var totalEchoes = 0; // ID counter for micro-tasks. Used to detect possible native await in our Promise.prototype.then.
var zone_id_counter = 0;
function newScope(fn, props$$1, a1, a2) {
    var parent = PSD, psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    psd.id = ++zone_id_counter;
    // Prepare for promise patching (done in usePSD):
    var globalEnv = globalPSD.env;
    psd.env = patchGlobalPromise ? {
        Promise: Promise,
        PromiseProp: { value: Promise, configurable: true, writable: true },
        all: Promise.all,
        race: Promise.race,
        resolve: Promise.resolve,
        reject: Promise.reject,
        nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
        gthen: getPatchedPromiseThen(globalEnv.gthen, psd) // global then
    } : {};
    if (props$$1)
        extend(psd, props$$1);
    // unhandleds and onunhandled should not be specifically set here.
    // Leave them on parent prototype.
    // unhandleds.push(err) will push to parent's prototype
    // onunhandled() will call parents onunhandled (with this scope's this-pointer though!)
    ++parent.ref;
    psd.finalize = function () {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2);
    if (psd.ref === 0)
        psd.finalize();
    return rv;
}
// Function to call if scopeFunc returns NativePromise
// Also for each NativePromise in the arguments to Promise.all()
function incrementExpectedAwaits() {
    if (!task.id)
        task.id = ++taskCounter;
    ++task.awaits;
    task.echoes += ZONE_ECHO_LIMIT;
    return task.id;
}
// Function to call when 'then' calls back on a native promise where onAwaitExpected() had been called.
// Also call this when a native await calls then method on a promise. In that case, don't supply
// sourceTaskId because we already know it refers to current task.
function decrementExpectedAwaits(sourceTaskId) {
    if (!task.awaits || (sourceTaskId && sourceTaskId !== task.id))
        return;
    if (--task.awaits === 0)
        task.id = 0;
    task.echoes = task.awaits * ZONE_ECHO_LIMIT; // Will reset echoes to 0 if awaits is 0.
}
// Call from Promise.all() and Promise.race()
function onPossibleParallellAsync(possiblePromise) {
    if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
        incrementExpectedAwaits();
        return possiblePromise.then(function (x) {
            decrementExpectedAwaits();
            return x;
        }, function (e) {
            decrementExpectedAwaits();
            return rejection(e);
        });
    }
    return possiblePromise;
}
function zoneEnterEcho(targetZone) {
    ++totalEchoes;
    if (!task.echoes || --task.echoes === 0) {
        task.echoes = task.id = 0; // Cancel zone echoing.
    }
    zoneStack.push(PSD);
    switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
    var zone = zoneStack[zoneStack.length - 1];
    zoneStack.pop();
    switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
    var currentZone = PSD;
    if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
        // Enter or leave zone asynchronically as well, so that tasks initiated during current tick
        // will be surrounded by the zone when they are invoked.
        enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
    }
    if (targetZone === PSD)
        return;
    PSD = targetZone; // The actual zone switch occurs at this line.
    // Snapshot on every leave from global zone.
    if (currentZone === globalPSD)
        globalPSD.env = snapShot();
    if (patchGlobalPromise) {
        // Let's patch the global and native Promises (may be same or may be different)
        var GlobalPromise = globalPSD.env.Promise;
        // Swich environments (may be PSD-zone or the global zone. Both apply.)
        var targetEnv = targetZone.env;
        // Change Promise.prototype.then for native and global Promise (they MAY differ on polyfilled environments, but both can be accessed)
        // Must be done on each zone change because the patched method contains targetZone in its closure.
        nativePromiseProto.then = targetEnv.nthen;
        GlobalPromise.prototype.then = targetEnv.gthen;
        if (currentZone.global || targetZone.global) {
            // Leaving or entering global zone. It's time to patch / restore global Promise.
            // Set this Promise to window.Promise so that transiled async functions will work on Firefox, Safari and IE, as well as with Zonejs and angular.
            Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
            // Support Promise.all() etc to work indexedDB-safe also when people are including es6-promise as a module (they might
            // not be accessing global.Promise but a local reference to it)
            GlobalPromise.all = targetEnv.all;
            GlobalPromise.race = targetEnv.race;
            GlobalPromise.resolve = targetEnv.resolve;
            GlobalPromise.reject = targetEnv.reject;
        }
    }
}
function snapShot() {
    var GlobalPromise = _global.Promise;
    return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject,
        nthen: nativePromiseProto.then,
        gthen: GlobalPromise.prototype.then
    } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        switchToZone(psd, true);
        return fn(a1, a2, a3);
    }
    finally {
        switchToZone(outerScope, false);
    }
}
function enqueueNativeMicroTask(job) {
    //
    // Precondition: nativePromiseThen !== undefined
    //
    nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait) {
    return typeof fn !== 'function' ? fn : function () {
        var outerZone = PSD;
        if (possibleAwait)
            incrementExpectedAwaits();
        switchToZone(zone, true);
        try {
            return fn.apply(this, arguments);
        }
        finally {
            switchToZone(outerZone, false);
        }
    };
}
function getPatchedPromiseThen(origThen, zone) {
    return function (onResolved, onRejected) {
        return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone, false), nativeAwaitCompatibleWrap(onRejected, zone, false));
    };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    }
    catch (e) { }
    if (rv !== false)
        try {
            var event, eventData = { promise: promise, reason: err };
            if (_global.document && document.createEvent) {
                event = document.createEvent('Event');
                event.initEvent(UNHANDLEDREJECTION, true, true);
                extend(event, eventData);
            }
            else if (_global.CustomEvent) {
                event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
                extend(event, eventData);
            }
            if (event && _global.dispatchEvent) {
                dispatchEvent(event);
                if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
                    // No native support for PromiseRejectionEvent but user has set window.onunhandledrejection. Manually call it.
                    try {
                        _global.onunhandledrejection(event);
                    }
                    catch (_) { }
            }
            if (!event.defaultPrevented) {
                console.warn("Unhandled rejection: " + (err.stack || err));
            }
        }
        catch (e) { }
}
var rejection = Promise.reject;

function Events(ctx) {
    var evs = {};
    var rv = function (eventName, subscriber) {
        if (subscriber) {
            // Subscribe. If additional arguments than just the subscriber was provided, forward them as well.
            var i = arguments.length, args = new Array(i - 1);
            while (--i)
                args[i - 1] = arguments[i];
            evs[eventName].subscribe.apply(null, args);
            return ctx;
        }
        else if (typeof (eventName) === 'string') {
            // Return interface allowing to fire or unsubscribe from event
            return evs[eventName];
        }
    };
    rv.addEventType = add;
    for (var i = 1, l = arguments.length; i < l; ++i) {
        add(arguments[i]);
    }
    return rv;
    function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === 'object')
            return addConfiguredEvents(eventName);
        if (!chainFunction)
            chainFunction = reverseStoppableEventChain;
        if (!defaultFunction)
            defaultFunction = nop;
        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function (cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                }
            },
            unsubscribe: function (cb) {
                context.subscribers = context.subscribers.filter(function (fn) { return fn !== cb; });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
    }
    function addConfiguredEvents(cfg) {
        // events(this, {reading: [functionChain, nop]});
        keys(cfg).forEach(function (eventName) {
            var args = cfg[eventName];
            if (isArray(args)) {
                add(eventName, cfg[eventName][0], cfg[eventName][1]);
            }
            else if (args === 'asap') {
                // Rather than approaching event subscription using a functional approach, we here do it in a for-loop where subscriber is executed in its own stack
                // enabling that any exception that occur wont disturb the initiator and also not nescessary be catched and forgotten.
                var context = add(eventName, mirror, function fire() {
                    // Optimazation-safe cloning of arguments into args.
                    var i = arguments.length, args = new Array(i);
                    while (i--)
                        args[i] = arguments[i];
                    // All each subscriber:
                    context.subscribers.forEach(function (fn) {
                        asap(function fireEvent() {
                            fn.apply(null, args);
                        });
                    });
                });
            }
            else
                throw new exceptions.InvalidArgument("Invalid event config");
        });
    }
}

/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * Copyright (c) 2014-2017 David Fahlander
 *
 * Version {version}, {date}
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/LICENSE-2.0
 *
 */
var DEXIE_VERSION = '{version}';
var maxString = String.fromCharCode(65535);
var maxKey = (function () { try {
    IDBKeyRange.only([[]]);
    return [[]];
}
catch (e) {
    return maxString;
} })();
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function (frame) { return !/(dexie\.js|dexie\.min\.js)/.test(frame); };
var dbNamesDB; // Global database for backing Dexie.getDatabaseNames() on browser without indexedDB.webkitGetDatabaseNames() 
// Init debug
setDebug(debug, dexieStackFrameFilter);
function Dexie(dbName, options) {
    /// <param name="options" type="Object" optional="true">Specify only if you wich to control which addons that should run on this instance</param>
    var deps = Dexie.dependencies;
    var opts = extend({
        // Default Options
        addons: Dexie.addons,
        autoOpen: true,
        indexedDB: deps.indexedDB,
        IDBKeyRange: deps.IDBKeyRange // Backend IDBKeyRange api. Default to browser env.
    }, options);
    var addons = opts.addons, autoOpen = opts.autoOpen, indexedDB = opts.indexedDB, IDBKeyRange = opts.IDBKeyRange;
    var globalSchema = this._dbSchema = {};
    var versions = [];
    var dbStoreNames = [];
    var allTables = {};
    ///<var type="IDBDatabase" />
    var idbdb = null; // Instance of IDBDatabase
    var dbOpenError = null;
    var isBeingOpened = false;
    var onReadyBeingFired = null;
    var openComplete = false;
    var READONLY = "readonly", READWRITE = "readwrite";
    var db = this;
    var dbReadyResolve, dbReadyPromise = new Promise(function (resolve) {
        dbReadyResolve = resolve;
    }), cancelOpen, openCanceller = new Promise(function (_, reject) {
        cancelOpen = reject;
    });
    var autoSchema = true;
    var hasNativeGetDatabaseNames = !!getNativeGetDatabaseNamesFn(indexedDB), hasGetAll;
    function init() {
        // Default subscribers to "versionchange" and "blocked".
        // Can be overridden by custom handlers. If custom handlers return false, these default
        // behaviours will be prevented.
        db.on("versionchange", function (ev) {
            // Default behavior for versionchange event is to close database connection.
            // Caller can override this behavior by doing db.on("versionchange", function(){ return false; });
            // Let's not block the other window from making it's delete() or open() call.
            // NOTE! This event is never fired in IE,Edge or Safari.
            if (ev.newVersion > 0)
                console.warn("Another connection wants to upgrade database '" + db.name + "'. Closing db now to resume the upgrade.");
            else
                console.warn("Another connection wants to delete database '" + db.name + "'. Closing db now to resume the delete request.");
            db.close();
            // In many web applications, it would be recommended to force window.reload()
            // when this event occurs. To do that, subscribe to the versionchange event
            // and call window.location.reload(true) if ev.newVersion > 0 (not a deletion)
            // The reason for this is that your current web app obviously has old schema code that needs
            // to be updated. Another window got a newer version of the app and needs to upgrade DB but
            // your window is blocking it unless we close it here.
        });
        db.on("blocked", function (ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion)
                console.warn("Dexie.delete('" + db.name + "') was blocked");
            else
                console.warn("Upgrade '" + db.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
        });
    }
    //
    //
    //
    // ------------------------- Versioning Framework---------------------------
    //
    //
    //
    this.version = function (versionNumber) {
        /// <param name="versionNumber" type="Number"></param>
        /// <returns type="Version"></returns>
        if (idbdb || isBeingOpened)
            throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versionInstance = versions.filter(function (v) { return v._cfg.version === versionNumber; })[0];
        if (versionInstance)
            return versionInstance;
        versionInstance = new Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        // Disable autoschema mode, as at least one version is specified.
        autoSchema = false;
        return versionInstance;
    };
    function Version(versionNumber) {
        this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
        };
        this.stores({}); // Derive earlier schemas by default.
    }
    extend(Version.prototype, {
        stores: function (stores) {
            /// <summary>
            ///   Defines the schema for a particular version
            /// </summary>
            /// <param name="stores" type="Object">
            /// Example: <br/>
            ///   {users: "id++,first,last,&amp;username,*email", <br/>
            ///   passwords: "id++,&amp;username"}<br/>
            /// <br/>
            /// Syntax: {Table: "[primaryKey][++],[&amp;][*]index1,[&amp;][*]index2,..."}<br/><br/>
            /// Special characters:<br/>
            ///  "&amp;"  means unique key, <br/>
            ///  "*"  means value is multiEntry, <br/>
            ///  "++" means auto-increment and only applicable for primary key <br/>
            /// </param>
            this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
            // Derive stores from earlier versions if they are not explicitely specified as null or a new syntax.
            var storesSpec = {};
            versions.forEach(function (version) {
                extend(storesSpec, version._cfg.storesSource);
            });
            var dbschema = (this._cfg.dbschema = {});
            this._parseStoresSpec(storesSpec, dbschema);
            // Update the latest schema to this version
            // Update API
            globalSchema = db._dbSchema = dbschema;
            removeTablesApi([allTables, db, Transaction.prototype]); // Keep Transaction.prototype even though it should be depr.
            setApiOnPlace([allTables, db, Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
            dbStoreNames = keys(dbschema);
            return this;
        },
        upgrade: function (upgradeFunction) {
            this._cfg.contentUpgrade = upgradeFunction;
            return this;
        },
        _parseStoresSpec: function (stores, outSchema) {
            keys(stores).forEach(function (tableName) {
                if (stores[tableName] !== null) {
                    var instanceTemplate = {};
                    var indexes = parseIndexSyntax(stores[tableName]);
                    var primKey = indexes.shift();
                    if (primKey.multi)
                        throw new exceptions.Schema("Primary key cannot be multi-valued");
                    if (primKey.keyPath)
                        setByKeyPath(instanceTemplate, primKey.keyPath, primKey.auto ? 0 : primKey.keyPath);
                    indexes.forEach(function (idx) {
                        if (idx.auto)
                            throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!idx.keyPath)
                            throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                        setByKeyPath(instanceTemplate, idx.keyPath, idx.compound ? idx.keyPath.map(function () { return ""; }) : "");
                    });
                    outSchema[tableName] = new TableSchema(tableName, primKey, indexes, instanceTemplate);
                }
            });
        }
    });
    function runUpgraders(oldVersion, idbtrans, reject) {
        var trans = db._createTransaction(READWRITE, dbStoreNames, globalSchema);
        trans.create(idbtrans);
        trans._completion.catch(reject);
        var rejectTransaction = trans._reject.bind(trans);
        newScope(function () {
            PSD.trans = trans;
            if (oldVersion === 0) {
                // Create tables:
                keys(globalSchema).forEach(function (tableName) {
                    createTable(idbtrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
                });
                Promise.follow(function () { return db.on.populate.fire(trans); }).catch(rejectTransaction);
            }
            else
                updateTablesAndIndexes(oldVersion, trans, idbtrans).catch(rejectTransaction);
        });
    }
    function updateTablesAndIndexes(oldVersion, trans, idbtrans) {
        // Upgrade version to version, step-by-step from oldest to newest version.
        // Each transaction object will contain the table set that was current in that version (but also not-yet-deleted tables from its previous version)
        var queue = [];
        var oldVersionStruct = versions.filter(function (version) { return version._cfg.version === oldVersion; })[0];
        if (!oldVersionStruct)
            throw new exceptions.Upgrade("Dexie specification of currently installed DB version is missing");
        globalSchema = db._dbSchema = oldVersionStruct._cfg.dbschema;
        var anyContentUpgraderHasRun = false;
        var versToRun = versions.filter(function (v) { return v._cfg.version > oldVersion; });
        versToRun.forEach(function (version) {
            /// <param name="version" type="Version"></param>
            queue.push(function () {
                var oldSchema = globalSchema;
                var newSchema = version._cfg.dbschema;
                adjustToExistingIndexNames(oldSchema, idbtrans);
                adjustToExistingIndexNames(newSchema, idbtrans);
                globalSchema = db._dbSchema = newSchema;
                var diff = getSchemaDiff(oldSchema, newSchema);
                // Add tables           
                diff.add.forEach(function (tuple) {
                    createTable(idbtrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
                });
                // Change tables
                diff.change.forEach(function (change) {
                    if (change.recreate) {
                        throw new exceptions.Upgrade("Not yet support for changing primary key");
                    }
                    else {
                        var store = idbtrans.objectStore(change.name);
                        // Add indexes
                        change.add.forEach(function (idx) {
                            addIndex(store, idx);
                        });
                        // Update indexes
                        change.change.forEach(function (idx) {
                            store.deleteIndex(idx.name);
                            addIndex(store, idx);
                        });
                        // Delete indexes
                        change.del.forEach(function (idxName) {
                            store.deleteIndex(idxName);
                        });
                    }
                });
                if (version._cfg.contentUpgrade) {
                    anyContentUpgraderHasRun = true;
                    return Promise.follow(function () {
                        version._cfg.contentUpgrade(trans);
                    });
                }
            });
            queue.push(function (idbtrans) {
                if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                    var newSchema = version._cfg.dbschema;
                    // Delete old tables
                    deleteRemovedTables(newSchema, idbtrans);
                }
            });
        });
        // Now, create a queue execution engine
        function runQueue() {
            return queue.length ? Promise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) :
                Promise.resolve();
        }
        return runQueue().then(function () {
            createMissingTables(globalSchema, idbtrans); // At last, make sure to create any missing tables. (Needed by addons that add stores to DB without specifying version)
        });
    }
    function getSchemaDiff(oldSchema, newSchema) {
        var diff = {
            del: [],
            add: [],
            change: [] // Array of {name: tableName, recreate: newDefinition, del: delIndexNames, add: newIndexDefs, change: changedIndexDefs}
        };
        for (var table in oldSchema) {
            if (!newSchema[table])
                diff.del.push(table);
        }
        for (table in newSchema) {
            var oldDef = oldSchema[table], newDef = newSchema[table];
            if (!oldDef) {
                diff.add.push([table, newDef]);
            }
            else {
                var change = {
                    name: table,
                    def: newDef,
                    recreate: false,
                    del: [],
                    add: [],
                    change: []
                };
                if (oldDef.primKey.src !== newDef.primKey.src) {
                    // Primary key has changed. Remove and re-add table.
                    change.recreate = true;
                    diff.change.push(change);
                }
                else {
                    // Same primary key. Just find out what differs:
                    var oldIndexes = oldDef.idxByName;
                    var newIndexes = newDef.idxByName;
                    for (var idxName in oldIndexes) {
                        if (!newIndexes[idxName])
                            change.del.push(idxName);
                    }
                    for (idxName in newIndexes) {
                        var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                        if (!oldIdx)
                            change.add.push(newIdx);
                        else if (oldIdx.src !== newIdx.src)
                            change.change.push(newIdx);
                    }
                    if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                        diff.change.push(change);
                    }
                }
            }
        }
        return diff;
    }
    function createTable(idbtrans, tableName, primKey, indexes) {
        /// <param name="idbtrans" type="IDBTransaction"></param>
        var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
        indexes.forEach(function (idx) { addIndex(store, idx); });
        return store;
    }
    function createMissingTables(newSchema, idbtrans) {
        keys(newSchema).forEach(function (tableName) {
            if (!idbtrans.db.objectStoreNames.contains(tableName)) {
                createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
            }
        });
    }
    function deleteRemovedTables(newSchema, idbtrans) {
        for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
            var storeName = idbtrans.db.objectStoreNames[i];
            if (newSchema[storeName] == null) {
                idbtrans.db.deleteObjectStore(storeName);
            }
        }
    }
    function addIndex(store, idx) {
        store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
    }
    //
    //
    //      Dexie Protected API
    //
    //
    this._allTables = allTables;
    this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
        return new Transaction(mode, storeNames, dbschema, parentTransaction);
    };
    /* Generate a temporary transaction when db operations are done outside a transaction scope.
    */
    function tempTransaction(mode, storeNames, fn) {
        if (!openComplete && (!PSD.letThrough)) {
            if (!isBeingOpened) {
                if (!autoOpen)
                    return rejection(new exceptions.DatabaseClosed());
                db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
            }
            return dbReadyPromise.then(function () { return tempTransaction(mode, storeNames, fn); });
        }
        else {
            var trans = db._createTransaction(mode, storeNames, globalSchema);
            try {
                trans.create();
            }
            catch (ex) {
                return rejection(ex);
            }
            return trans._promise(mode, function (resolve, reject) {
                return newScope(function () {
                    PSD.trans = trans;
                    return fn(resolve, reject, trans);
                });
            }).then(function (result) {
                // Instead of resolving value directly, wait with resolving it until transaction has completed.
                // Otherwise the data would not be in the DB if requesting it in the then() operation.
                // Specifically, to ensure that the following expression will work:
                //
                //   db.friends.put({name: "Arne"}).then(function () {
                //       db.friends.where("name").equals("Arne").count(function(count) {
                //           assert (count === 1);
                //       });
                //   });
                //
                return trans._completion.then(function () { return result; });
            }); /*.catch(err => { // Don't do this as of now. If would affect bulk- and modify methods in a way that could be more intuitive. But wait! Maybe change in next major.
                trans._reject(err);
                return rejection(err);
            });*/
        }
    }
    this._whenReady = function (fn) {
        return openComplete || PSD.letThrough ? fn() : new Promise(function (resolve, reject) {
            if (!isBeingOpened) {
                if (!autoOpen) {
                    reject(new exceptions.DatabaseClosed());
                    return;
                }
                db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
            }
            dbReadyPromise.then(resolve, reject);
        }).then(fn);
    };
    //
    //
    //
    //
    //      Dexie API
    //
    //
    //
    this.verno = 0;
    this.open = function () {
        if (isBeingOpened || idbdb)
            return dbReadyPromise.then(function () { return dbOpenError ? rejection(dbOpenError) : db; });
        debug && (openCanceller._stackHolder = getErrorWithStack()); // Let stacks point to when open() was called rather than where new Dexie() was called.
        isBeingOpened = true;
        dbOpenError = null;
        openComplete = false;
        // Function pointers to call when the core opening process completes.
        var resolveDbReady = dbReadyResolve, 
        // upgradeTransaction to abort on failure.
        upgradeTransaction = null;
        return Promise.race([openCanceller, new Promise(function (resolve, reject) {
                // Multiply db.verno with 10 will be needed to workaround upgrading bug in IE:
                // IE fails when deleting objectStore after reading from it.
                // A future version of Dexie.js will stopover an intermediate version to workaround this.
                // At that point, we want to be backward compatible. Could have been multiplied with 2, but by using 10, it is easier to map the number to the real version number.
                // If no API, throw!
                if (!indexedDB)
                    throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " +
                        "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
                var req = autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
                if (!req)
                    throw new exceptions.MissingAPI("IndexedDB API not available"); // May happen in Safari private mode, see https://github.com/dfahlander/Dexie.js/issues/134
                req.onerror = eventRejectHandler(reject);
                req.onblocked = wrap(fireOnBlocked);
                req.onupgradeneeded = wrap(function (e) {
                    upgradeTransaction = req.transaction;
                    if (autoSchema && !db._allowEmptyDB) {
                        // Caller did not specify a version or schema. Doing that is only acceptable for opening alread existing databases.
                        // If onupgradeneeded is called it means database did not exist. Reject the open() promise and make sure that we
                        // do not create a new database by accident here.
                        req.onerror = preventDefault; // Prohibit onabort error from firing before we're done!
                        upgradeTransaction.abort(); // Abort transaction (would hope that this would make DB disappear but it doesnt.)
                        // Close database and delete it.
                        req.result.close();
                        var delreq = indexedDB.deleteDatabase(dbName); // The upgrade transaction is atomic, and javascript is single threaded - meaning that there is no risk that we delete someone elses database here!
                        delreq.onsuccess = delreq.onerror = wrap(function () {
                            reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
                        });
                    }
                    else {
                        upgradeTransaction.onerror = eventRejectHandler(reject);
                        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion; // Safari 8 fix.
                        runUpgraders(oldVer / 10, upgradeTransaction, reject, req);
                    }
                }, reject);
                req.onsuccess = wrap(function () {
                    // Core opening procedure complete. Now let's just record some stuff.
                    upgradeTransaction = null;
                    idbdb = req.result;
                    connections.push(db); // Used for emulating versionchange event on IE/Edge/Safari.
                    if (autoSchema)
                        readGlobalSchema();
                    else if (idbdb.objectStoreNames.length > 0) {
                        try {
                            adjustToExistingIndexNames(globalSchema, idbdb.transaction(safariMultiStoreFix(idbdb.objectStoreNames), READONLY));
                        }
                        catch (e) {
                            // Safari may bail out if > 1 store names. However, this shouldnt be a showstopper. Issue #120.
                        }
                    }
                    idbdb.onversionchange = wrap(function (ev) {
                        db._vcFired = true; // detect implementations that not support versionchange (IE/Edge/Safari)
                        db.on("versionchange").fire(ev);
                    });
                    if (!hasNativeGetDatabaseNames && dbName !== '__dbnames') {
                        dbNamesDB.dbnames.put({ name: dbName }).catch(nop);
                    }
                    resolve();
                }, reject);
            })]).then(function () {
            // Before finally resolving the dbReadyPromise and this promise,
            // call and await all on('ready') subscribers:
            // Dexie.vip() makes subscribers able to use the database while being opened.
            // This is a must since these subscribers take part of the opening procedure.
            onReadyBeingFired = [];
            return Promise.resolve(Dexie.vip(db.on.ready.fire)).then(function fireRemainders() {
                if (onReadyBeingFired.length > 0) {
                    // In case additional subscribers to db.on('ready') were added during the time db.on.ready.fire was executed.
                    var remainders = onReadyBeingFired.reduce(promisableChain, nop);
                    onReadyBeingFired = [];
                    return Promise.resolve(Dexie.vip(remainders)).then(fireRemainders);
                }
            });
        }).finally(function () {
            onReadyBeingFired = null;
        }).then(function () {
            // Resolve the db.open() with the db instance.
            isBeingOpened = false;
            return db;
        }).catch(function (err) {
            try {
                // Did we fail within onupgradeneeded? Make sure to abort the upgrade transaction so it doesnt commit.
                upgradeTransaction && upgradeTransaction.abort();
            }
            catch (e) { }
            isBeingOpened = false; // Set before calling db.close() so that it doesnt reject openCanceller again (leads to unhandled rejection event).
            db.close(); // Closes and resets idbdb, removes connections, resets dbReadyPromise and openCanceller so that a later db.open() is fresh.
            // A call to db.close() may have made on-ready subscribers fail. Use dbOpenError if set, since err could be a follow-up error on that.
            dbOpenError = err; // Record the error. It will be used to reject further promises of db operations.
            return rejection(dbOpenError);
        }).finally(function () {
            openComplete = true;
            resolveDbReady(); // dbReadyPromise is resolved no matter if open() rejects or resolved. It's just to wake up waiters.
        });
    };
    this.close = function () {
        var idx = connections.indexOf(db);
        if (idx >= 0)
            connections.splice(idx, 1);
        if (idbdb) {
            try {
                idbdb.close();
            }
            catch (e) { }
            idbdb = null;
        }
        autoOpen = false;
        dbOpenError = new exceptions.DatabaseClosed();
        if (isBeingOpened)
            cancelOpen(dbOpenError);
        // Reset dbReadyPromise promise:
        dbReadyPromise = new Promise(function (resolve) {
            dbReadyResolve = resolve;
        });
        openCanceller = new Promise(function (_, reject) {
            cancelOpen = reject;
        });
    };
    this.delete = function () {
        var hasArguments = arguments.length > 0;
        return new Promise(function (resolve, reject) {
            if (hasArguments)
                throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            if (isBeingOpened) {
                dbReadyPromise.then(doDelete);
            }
            else {
                doDelete();
            }
            function doDelete() {
                db.close();
                var req = indexedDB.deleteDatabase(dbName);
                req.onsuccess = wrap(function () {
                    if (!hasNativeGetDatabaseNames) {
                        dbNamesDB.dbnames.delete(dbName).catch(nop);
                    }
                    resolve();
                });
                req.onerror = eventRejectHandler(reject);
                req.onblocked = fireOnBlocked;
            }
        });
    };
    this.backendDB = function () {
        return idbdb;
    };
    this.isOpen = function () {
        return idbdb !== null;
    };
    this.hasBeenClosed = function () {
        return dbOpenError && (dbOpenError instanceof exceptions.DatabaseClosed);
    };
    this.hasFailed = function () {
        return dbOpenError !== null;
    };
    this.dynamicallyOpened = function () {
        return autoSchema;
    };
    //
    // Properties
    //
    this.name = dbName;
    // db.tables - an array of all Table instances.
    props(this, {
        tables: {
            get: function () {
                /// <returns type="Array" elementType="Table" />
                return keys(allTables).map(function (name) { return allTables[name]; });
            }
        }
    });
    //
    // Events
    //
    this.on = Events(this, "populate", "blocked", "versionchange", { ready: [promisableChain, nop] });
    this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
        return function (subscriber, bSticky) {
            Dexie.vip(function () {
                if (openComplete) {
                    // Database already open. Call subscriber asap.
                    if (!dbOpenError)
                        Promise.resolve().then(subscriber);
                    // bSticky: Also subscribe to future open sucesses (after close / reopen) 
                    if (bSticky)
                        subscribe(subscriber);
                }
                else if (onReadyBeingFired) {
                    // db.on('ready') subscribers are currently being executed and have not yet resolved or rejected
                    onReadyBeingFired.push(subscriber);
                    if (bSticky)
                        subscribe(subscriber);
                }
                else {
                    // Database not yet open. Subscribe to it.
                    subscribe(subscriber);
                    // If bSticky is falsy, make sure to unsubscribe subscriber when fired once.
                    if (!bSticky)
                        subscribe(function unsubscribe() {
                            db.on.ready.unsubscribe(subscriber);
                            db.on.ready.unsubscribe(unsubscribe);
                        });
                }
            });
        };
    });
    this.transaction = function () {
        /// <summary>
        ///
        /// </summary>
        /// <param name="mode" type="String">"r" for readonly, or "rw" for readwrite</param>
        /// <param name="tableInstances">Table instance, Array of Table instances, String or String Array of object stores to include in the transaction</param>
        /// <param name="scopeFunc" type="Function">Function to execute with transaction</param>
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
    };
    function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
        // Let table arguments be all arguments between mode and last argument.
        var i = arguments.length;
        if (i < 2)
            throw new exceptions.InvalidArgument("Too few arguments");
        // Prevent optimzation killer (https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments)
        // and clone arguments except the first one into local var 'args'.
        var args = new Array(i - 1);
        while (--i)
            args[i - 1] = arguments[i];
        // Let scopeFunc be the last argument and pop it so that args now only contain the table arguments.
        scopeFunc = args.pop();
        var tables = flatten(args); // Support using array as middle argument, or a mix of arrays and non-arrays.
        return [mode, tables, scopeFunc];
    }
    this._transaction = function (mode, tables, scopeFunc) {
        var parentTransaction = PSD.trans;
        // Check if parent transactions is bound to this db instance, and if caller wants to reuse it
        if (!parentTransaction || parentTransaction.db !== db || mode.indexOf('!') !== -1)
            parentTransaction = null;
        var onlyIfCompatible = mode.indexOf('?') !== -1;
        mode = mode.replace('!', '').replace('?', ''); // Ok. Will change arguments[0] as well but we wont touch arguments henceforth.
        try {
            //
            // Get storeNames from arguments. Either through given table instances, or through given table names.
            //
            var storeNames = tables.map(function (table) {
                var storeName = table instanceof Table ? table.name : table;
                if (typeof storeName !== 'string')
                    throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            });
            //
            // Resolve mode. Allow shortcuts "r" and "rw".
            //
            if (mode == "r" || mode == READONLY)
                mode = READONLY;
            else if (mode == "rw" || mode == READWRITE)
                mode = READWRITE;
            else
                throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
            if (parentTransaction) {
                // Basic checks
                if (parentTransaction.mode === READONLY && mode === READWRITE) {
                    if (onlyIfCompatible) {
                        // Spawn new transaction instead.
                        parentTransaction = null;
                    }
                    else
                        throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                    storeNames.forEach(function (storeName) {
                        if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                            if (onlyIfCompatible) {
                                // Spawn new transaction instead.
                                parentTransaction = null;
                            }
                            else
                                throw new exceptions.SubTransaction("Table " + storeName +
                                    " not included in parent transaction.");
                        }
                    });
                }
                if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                    // '?' mode should not keep using an inactive transaction.
                    parentTransaction = null;
                }
            }
        }
        catch (e) {
            return parentTransaction ?
                parentTransaction._promise(null, function (_, reject) { reject(e); }) :
                rejection(e);
        }
        // If this is a sub-transaction, lock the parent and then launch the sub-transaction.
        return (parentTransaction ?
            parentTransaction._promise(mode, enterTransactionScope, "lock") :
            PSD.trans ?
                // no parent transaction despite PSD.trans exists. Make sure also
                // that the zone we create is not a sub-zone of current, because
                // Promise.follow() should not wait for it if so.
                usePSD(PSD.transless, function () { return db._whenReady(enterTransactionScope); }) :
                db._whenReady(enterTransactionScope));
        function enterTransactionScope() {
            return Promise.resolve().then(function () {
                // Keep a pointer to last non-transactional PSD to use if someone calls Dexie.ignoreTransaction().
                var transless = PSD.transless || PSD;
                // Our transaction.
                //return new Promise((resolve, reject) => {
                var trans = db._createTransaction(mode, storeNames, globalSchema, parentTransaction);
                // Let the transaction instance be part of a Promise-specific data (PSD) value.
                var zoneProps = {
                    trans: trans,
                    transless: transless
                };
                if (parentTransaction) {
                    // Emulate transaction commit awareness for inner transaction (must 'commit' when the inner transaction has no more operations ongoing)
                    trans.idbtrans = parentTransaction.idbtrans;
                }
                else {
                    trans.create(); // Create the backend transaction so that complete() or error() will trigger even if no operation is made upon it.
                }
                // Support for native async await.
                if (scopeFunc.constructor === AsyncFunction) {
                    incrementExpectedAwaits();
                }
                var returnValue;
                var promiseFollowed = Promise.follow(function () {
                    // Finally, call the scope function with our table and transaction arguments.
                    returnValue = scopeFunc.call(trans, trans);
                    if (returnValue) {
                        if (returnValue.constructor === NativePromise) {
                            var decrementor = decrementExpectedAwaits.bind(null, null);
                            returnValue.then(decrementor, decrementor);
                        }
                        else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
                            // scopeFunc returned an iterator with throw-support. Handle yield as await.
                            returnValue = awaitIterator(returnValue);
                        }
                    }
                }, zoneProps);
                return (returnValue && typeof returnValue.then === 'function' ?
                    // Promise returned. User uses promise-style transactions.
                    Promise.resolve(returnValue).then(function (x) { return trans.active ?
                        x // Transaction still active. Continue.
                        : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")); })
                    // No promise returned. Wait for all outstanding promises before continuing. 
                    : promiseFollowed.then(function () { return returnValue; })).then(function (x) {
                    // sub transactions don't react to idbtrans.oncomplete. We must trigger a completion:
                    if (parentTransaction)
                        trans._resolve();
                    // wait for trans._completion
                    // (if root transaction, this means 'complete' event. If sub-transaction, we've just fired it ourselves)
                    return trans._completion.then(function () { return x; });
                }).catch(function (e) {
                    trans._reject(e); // Yes, above then-handler were maybe not called because of an unhandled rejection in scopeFunc!
                    return rejection(e);
                });
            });
        }
    };
    this.table = function (tableName) {
        /// <returns type="Table"></returns>
        if (!hasOwn(allTables, tableName)) {
            throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
        }
        return allTables[tableName];
    };
    //
    //
    //
    // Table Class
    //
    //
    //
    function Table(name, tableSchema, optionalTrans) {
        /// <param name="name" type="String"></param>
        this.name = name;
        this.schema = tableSchema;
        this._tx = optionalTrans;
        this.hook = allTables[name] ? allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop],
            "deleting": [hookDeletingChain, nop]
        });
    }
    function BulkErrorHandlerCatchAll(errorList, done, supportHooks) {
        return (supportHooks ? hookedEventRejectHandler : eventRejectHandler)(function (e) {
            errorList.push(e);
            done && done();
        });
    }
    function bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook) {
        // If hasDeleteHook, keysOrTuples must be an array of tuples: [[key1, value2],[key2,value2],...],
        // else keysOrTuples must be just an array of keys: [key1, key2, ...].
        return new Promise(function (resolve, reject) {
            var len = keysOrTuples.length, lastItem = len - 1;
            if (len === 0)
                return resolve();
            if (!hasDeleteHook) {
                for (var i = 0; i < len; ++i) {
                    var req = idbstore.delete(keysOrTuples[i]);
                    req.onerror = eventRejectHandler(reject);
                    if (i === lastItem)
                        req.onsuccess = wrap(function () { return resolve(); });
                }
            }
            else {
                var hookCtx, errorHandler = hookedEventRejectHandler(reject), successHandler = hookedEventSuccessHandler(null);
                tryCatch(function () {
                    for (var i = 0; i < len; ++i) {
                        hookCtx = { onsuccess: null, onerror: null };
                        var tuple = keysOrTuples[i];
                        deletingHook.call(hookCtx, tuple[0], tuple[1], trans);
                        var req = idbstore.delete(tuple[0]);
                        req._hookCtx = hookCtx;
                        req.onerror = errorHandler;
                        if (i === lastItem)
                            req.onsuccess = hookedEventSuccessHandler(resolve);
                        else
                            req.onsuccess = successHandler;
                    }
                }, function (err) {
                    hookCtx.onerror && hookCtx.onerror(err);
                    throw err;
                });
            }
        });
    }
    props(Table.prototype, {
        //
        // Table Protected Methods
        //
        _trans: function getTransaction(mode, fn, writeLocked) {
            var trans = this._tx || PSD.trans;
            return trans && trans.db === db ?
                trans === PSD.trans ?
                    trans._promise(mode, fn, writeLocked) :
                    newScope(function () { return trans._promise(mode, fn, writeLocked); }, { trans: trans, transless: PSD.transless || PSD }) :
                tempTransaction(mode, [this.name], fn);
        },
        _idbstore: function getIDBObjectStore(mode, fn, writeLocked) {
            var tableName = this.name;
            function supplyIdbStore(resolve, reject, trans) {
                if (trans.storeNames.indexOf(tableName) === -1)
                    throw new exceptions.NotFound("Table" + tableName + " not part of transaction");
                return fn(resolve, reject, trans.idbtrans.objectStore(tableName), trans);
            }
            return this._trans(mode, supplyIdbStore, writeLocked);
        },
        //
        // Table Public Methods
        //
        get: function (keyOrCrit, cb) {
            if (keyOrCrit && keyOrCrit.constructor === Object)
                return this.where(keyOrCrit).first(cb);
            var self = this;
            return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                var req = idbstore.get(keyOrCrit);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function () {
                    resolve(self.hook.reading.fire(req.result));
                }, reject);
            }).then(cb);
        },
        where: function (indexOrCrit) {
            if (typeof indexOrCrit === 'string')
                return new WhereClause(this, indexOrCrit);
            if (isArray(indexOrCrit))
                return new WhereClause(this, "[" + indexOrCrit.join('+') + "]");
            // indexOrCrit is an object map of {[keyPath]:value} 
            var keyPaths = keys(indexOrCrit);
            if (keyPaths.length === 1)
                // Only one critera. This was the easy case:
                return this
                    .where(keyPaths[0])
                    .equals(indexOrCrit[keyPaths[0]]);
            // Multiple criterias.
            // Let's try finding a compound index that matches all keyPaths in
            // arbritary order:
            var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
                return ix.compound &&
                    keyPaths.every(function (keyPath) { return ix.keyPath.indexOf(keyPath) >= 0; }) &&
                    ix.keyPath.every(function (keyPath) { return keyPaths.indexOf(keyPath) >= 0; });
            })[0];
            if (compoundIndex && maxKey !== maxString)
                // Cool! We found such compound index
                // and this browser supports compound indexes (maxKey !== maxString)!
                return this
                    .where(compoundIndex.name)
                    .equals(compoundIndex.keyPath.map(function (kp) { return indexOrCrit[kp]; }));
            if (!compoundIndex)
                console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " +
                    ("compound index [" + keyPaths.join('+') + "]"));
            // Ok, now let's fallback to finding at least one matching index
            // and filter the rest.
            var idxByName = this.schema.idxByName;
            var simpleIndex = keyPaths.reduce(function (r, keyPath) { return [
                r[0] || idxByName[keyPath],
                r[0] || !idxByName[keyPath] ?
                    combine(r[1], function (x) { return '' + getByKeyPath(x, keyPath) ==
                        '' + indexOrCrit[keyPath]; })
                    : r[1]
            ]; }, [null, null]);
            var idx = simpleIndex[0];
            return idx ?
                this.where(idx.name).equals(indexOrCrit[idx.keyPath])
                    .filter(simpleIndex[1]) :
                compoundIndex ?
                    this.filter(simpleIndex[1]) : // Has compound but browser bad. Allow filter.
                    this.where(keyPaths).equals(''); // No index at all. Fail lazily.
        },
        count: function (cb) {
            return this.toCollection().count(cb);
        },
        offset: function (offset) {
            return this.toCollection().offset(offset);
        },
        limit: function (numRows) {
            return this.toCollection().limit(numRows);
        },
        reverse: function () {
            return this.toCollection().reverse();
        },
        filter: function (filterFunction) {
            return this.toCollection().and(filterFunction);
        },
        each: function (fn) {
            return this.toCollection().each(fn);
        },
        toArray: function (cb) {
            return this.toCollection().toArray(cb);
        },
        orderBy: function (index) {
            return new Collection(new WhereClause(this, isArray(index) ?
                "[" + index.join('+') + "]" :
                index));
        },
        toCollection: function () {
            return new Collection(new WhereClause(this));
        },
        mapToClass: function (constructor, structure) {
            /// <summary>
            ///     Map table to a javascript constructor function. Objects returned from the database will be instances of this class, making
            ///     it possible to the instanceOf operator as well as extending the class using constructor.prototype.method = function(){...}.
            /// </summary>
            /// <param name="constructor">Constructor function representing the class.</param>
            /// <param name="structure" optional="true">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
            /// know what type each member has. Example: {name: String, emailAddresses: [String], password}</param>
            this.schema.mappedClass = constructor;
            var instanceTemplate = Object.create(constructor.prototype);
            if (structure) {
                // structure and instanceTemplate is for IDE code competion only while constructor.prototype is for actual inheritance.
                applyStructure(instanceTemplate, structure);
            }
            this.schema.instanceTemplate = instanceTemplate;
            // Now, subscribe to the when("reading") event to make all objects that come out from this table inherit from given class
            // no matter which method to use for reading (Table.get() or Table.where(...)... )
            var readHook = function (obj) {
                if (!obj)
                    return obj; // No valid object. (Value is null). Return as is.
                // Create a new object that derives from constructor:
                var res = Object.create(constructor.prototype);
                // Clone members:
                for (var m in obj)
                    if (hasOwn(obj, m))
                        try {
                            res[m] = obj[m];
                        }
                        catch (_) { }
                return res;
            };
            if (this.schema.readHook) {
                this.hook.reading.unsubscribe(this.schema.readHook);
            }
            this.schema.readHook = readHook;
            this.hook("reading", readHook);
            return constructor;
        },
        defineClass: function (structure) {
            /// <summary>
            ///     Define all members of the class that represents the table. This will help code completion of when objects are read from the database
            ///     as well as making it possible to extend the prototype of the returned constructor function.
            /// </summary>
            /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
            /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>
            return this.mapToClass(Dexie.defineClass(structure), structure);
        },
        bulkDelete: function (keys$$1) {
            if (this.hook.deleting.fire === nop) {
                return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                    resolve(bulkDelete(idbstore, trans, keys$$1, false, nop));
                });
            }
            else {
                return this
                    .where(':id')
                    .anyOf(keys$$1)
                    .delete()
                    .then(function () { }); // Resolve with undefined.
            }
        },
        bulkPut: function (objects, keys$$1) {
            var _this = this;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                if (!idbstore.keyPath && !_this.schema.primKey.auto && !keys$$1)
                    throw new exceptions.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
                if (idbstore.keyPath && keys$$1)
                    throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (keys$$1 && keys$$1.length !== objects.length)
                    throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                if (objects.length === 0)
                    return resolve(); // Caller provided empty list.
                var done = function (result) {
                    if (errorList.length === 0)
                        resolve(result);
                    else
                        reject(new BulkError(_this.name + ".bulkPut(): " + errorList.length + " of " + numObjs + " operations failed", errorList));
                };
                var req, errorList = [], errorHandler, numObjs = objects.length, table = _this;
                if (_this.hook.creating.fire === nop && _this.hook.updating.fire === nop) {
                    //
                    // Standard Bulk (no 'creating' or 'updating' hooks to care about)
                    //
                    errorHandler = BulkErrorHandlerCatchAll(errorList);
                    for (var i = 0, l = objects.length; i < l; ++i) {
                        req = keys$$1 ? idbstore.put(objects[i], keys$$1[i]) : idbstore.put(objects[i]);
                        req.onerror = errorHandler;
                    }
                    // Only need to catch success or error on the last operation
                    // according to the IDB spec.
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done);
                    req.onsuccess = eventSuccessHandler(done);
                }
                else {
                    var effectiveKeys = keys$$1 || idbstore.keyPath && objects.map(function (o) { return getByKeyPath(o, idbstore.keyPath); });
                    // Generate map of {[key]: object}
                    var objectLookup = effectiveKeys && arrayToObject(effectiveKeys, function (key, i) { return key != null && [key, objects[i]]; });
                    var promise = !effectiveKeys ?
                        // Auto-incremented key-less objects only without any keys argument.
                        table.bulkAdd(objects) :
                        // Keys provided. Either as inbound in provided objects, or as a keys argument.
                        // Begin with updating those that exists in DB:
                        table.where(':id').anyOf(effectiveKeys.filter(function (key) { return key != null; })).modify(function () {
                            this.value = objectLookup[this.primKey];
                            objectLookup[this.primKey] = null; // Mark as "don't add this"
                        }).catch(ModifyError, function (e) {
                            errorList = e.failures; // No need to concat here. These are the first errors added.
                        }).then(function () {
                            // Now, let's examine which items didnt exist so we can add them:
                            var objsToAdd = [], keysToAdd = keys$$1 && [];
                            // Iterate backwards. Why? Because if same key was used twice, just add the last one.
                            for (var i = effectiveKeys.length - 1; i >= 0; --i) {
                                var key = effectiveKeys[i];
                                if (key == null || objectLookup[key]) {
                                    objsToAdd.push(objects[i]);
                                    keys$$1 && keysToAdd.push(key);
                                    if (key != null)
                                        objectLookup[key] = null; // Mark as "dont add again"
                                }
                            }
                            // The items are in reverse order so reverse them before adding.
                            // Could be important in order to get auto-incremented keys the way the caller
                            // would expect. Could have used unshift instead of push()/reverse(),
                            // but: http://jsperf.com/unshift-vs-reverse
                            objsToAdd.reverse();
                            keys$$1 && keysToAdd.reverse();
                            return table.bulkAdd(objsToAdd, keysToAdd);
                        }).then(function (lastAddedKey) {
                            // Resolve with key of the last object in given arguments to bulkPut():
                            var lastEffectiveKey = effectiveKeys[effectiveKeys.length - 1]; // Key was provided.
                            return lastEffectiveKey != null ? lastEffectiveKey : lastAddedKey;
                        });
                    promise.then(done).catch(BulkError, function (e) {
                        // Concat failure from ModifyError and reject using our 'done' method.
                        errorList = errorList.concat(e.failures);
                        done();
                    }).catch(reject);
                }
            }, "locked"); // If called from transaction scope, lock transaction til all steps are done.
        },
        bulkAdd: function (objects, keys$$1) {
            var self = this, creatingHook = this.hook.creating.fire;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                if (!idbstore.keyPath && !self.schema.primKey.auto && !keys$$1)
                    throw new exceptions.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
                if (idbstore.keyPath && keys$$1)
                    throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (keys$$1 && keys$$1.length !== objects.length)
                    throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                if (objects.length === 0)
                    return resolve(); // Caller provided empty list.
                function done(result) {
                    if (errorList.length === 0)
                        resolve(result);
                    else
                        reject(new BulkError(self.name + ".bulkAdd(): " + errorList.length + " of " + numObjs + " operations failed", errorList));
                }
                var req, errorList = [], errorHandler, successHandler, numObjs = objects.length;
                if (creatingHook !== nop) {
                    //
                    // There are subscribers to hook('creating')
                    // Must behave as documented.
                    //
                    var keyPath = idbstore.keyPath, hookCtx;
                    errorHandler = BulkErrorHandlerCatchAll(errorList, null, true);
                    successHandler = hookedEventSuccessHandler(null);
                    tryCatch(function () {
                        for (var i = 0, l = objects.length; i < l; ++i) {
                            hookCtx = { onerror: null, onsuccess: null };
                            var key = keys$$1 && keys$$1[i];
                            var obj = objects[i], effectiveKey = keys$$1 ? key : keyPath ? getByKeyPath(obj, keyPath) : undefined, keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans);
                            if (effectiveKey == null && keyToUse != null) {
                                if (keyPath) {
                                    obj = deepClone(obj);
                                    setByKeyPath(obj, keyPath, keyToUse);
                                }
                                else {
                                    key = keyToUse;
                                }
                            }
                            req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
                            req._hookCtx = hookCtx;
                            if (i < l - 1) {
                                req.onerror = errorHandler;
                                if (hookCtx.onsuccess)
                                    req.onsuccess = successHandler;
                            }
                        }
                    }, function (err) {
                        hookCtx.onerror && hookCtx.onerror(err);
                        throw err;
                    });
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done, true);
                    req.onsuccess = hookedEventSuccessHandler(done);
                }
                else {
                    //
                    // Standard Bulk (no 'creating' hook to care about)
                    //
                    errorHandler = BulkErrorHandlerCatchAll(errorList);
                    for (var i = 0, l = objects.length; i < l; ++i) {
                        req = keys$$1 ? idbstore.add(objects[i], keys$$1[i]) : idbstore.add(objects[i]);
                        req.onerror = errorHandler;
                    }
                    // Only need to catch success or error on the last operation
                    // according to the IDB spec.
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done);
                    req.onsuccess = eventSuccessHandler(done);
                }
            });
        },
        add: function (obj, key) {
            /// <summary>
            ///   Add an object to the database. In case an object with same primary key already exists, the object will not be added.
            /// </summary>
            /// <param name="obj" type="Object">A javascript object to insert</param>
            /// <param name="key" optional="true">Primary key</param>
            var creatingHook = this.hook.creating.fire;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                var hookCtx = { onsuccess: null, onerror: null };
                if (creatingHook !== nop) {
                    var effectiveKey = (key != null) ? key : (idbstore.keyPath ? getByKeyPath(obj, idbstore.keyPath) : undefined);
                    var keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans); // Allow subscribers to when("creating") to generate the key.
                    if (effectiveKey == null && keyToUse != null) {
                        if (idbstore.keyPath)
                            setByKeyPath(obj, idbstore.keyPath, keyToUse);
                        else
                            key = keyToUse;
                    }
                }
                try {
                    var req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
                    req._hookCtx = hookCtx;
                    req.onerror = hookedEventRejectHandler(reject);
                    req.onsuccess = hookedEventSuccessHandler(function (result) {
                        // TODO: Remove these two lines in next major release (2.0?)
                        // It's no good practice to have side effects on provided parameters
                        var keyPath = idbstore.keyPath;
                        if (keyPath)
                            setByKeyPath(obj, keyPath, result);
                        resolve(result);
                    });
                }
                catch (e) {
                    if (hookCtx.onerror)
                        hookCtx.onerror(e);
                    throw e;
                }
            });
        },
        put: function (obj, key) {
            var _this = this;
            /// <summary>
            ///   Add an object to the database but in case an object with same primary key alread exists, the existing one will get updated.
            /// </summary>
            /// <param name="obj" type="Object">A javascript object to insert or update</param>
            /// <param name="key" optional="true">Primary key</param>
            var creatingHook = this.hook.creating.fire, updatingHook = this.hook.updating.fire;
            if (creatingHook !== nop || updatingHook !== nop) {
                //
                // People listens to when("creating") or when("updating") events!
                // We must know whether the put operation results in an CREATE or UPDATE.
                //
                var keyPath = this.schema.primKey.keyPath;
                var effectiveKey = (key !== undefined) ? key : (keyPath && getByKeyPath(obj, keyPath));
                if (effectiveKey == null)
                    return this.add(obj);
                // Since key is optional, make sure we get it from obj if not provided
                // Primary key exist. Lock transaction and try modifying existing. If nothing modified, call add().
                // clone obj before this async call. If caller modifies obj the line after put(), the IDB spec requires that it should not affect operation.
                obj = deepClone(obj);
                return this._trans(READWRITE, function () {
                    return _this.where(":id").equals(effectiveKey).modify(function () {
                        // Replace extisting value with our object
                        // CRUD event firing handled in Collection.modify()
                        this.value = obj;
                    }).then(function (count) { return count === 0 ? _this.add(obj, key) : effectiveKey; });
                }, "locked"); // Lock needed because operation is splitted into modify() and add().
            }
            else {
                // Use the standard IDB put() method.
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = key !== undefined ? idbstore.put(obj, key) : idbstore.put(obj);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = wrap(function (ev) {
                        var keyPath = idbstore.keyPath;
                        if (keyPath)
                            setByKeyPath(obj, keyPath, ev.target.result);
                        resolve(req.result);
                    });
                });
            }
        },
        'delete': function (key) {
            /// <param name="key">Primary key of the object to delete</param>
            if (this.hook.deleting.subscribers.length) {
                // People listens to when("deleting") event. Must implement delete using Collection.delete() that will
                // call the CRUD event. Only Collection.delete() will know whether an object was actually deleted.
                return this.where(":id").equals(key).delete();
            }
            else {
                // No one listens. Use standard IDB delete() method.
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = idbstore.delete(key);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = wrap(function () {
                        resolve(req.result);
                    });
                });
            }
        },
        clear: function () {
            if (this.hook.deleting.subscribers.length) {
                // People listens to when("deleting") event. Must implement delete using Collection.delete() that will
                // call the CRUD event. Only Collection.delete() will knows which objects that are actually deleted.
                return this.toCollection().delete();
            }
            else {
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = idbstore.clear();
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = wrap(function () {
                        resolve(req.result);
                    });
                });
            }
        },
        update: function (keyOrObject, modifications) {
            if (typeof modifications !== 'object' || isArray(modifications))
                throw new exceptions.InvalidArgument("Modifications must be an object.");
            if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
                // object to modify. Also modify given object with the modifications:
                keys(modifications).forEach(function (keyPath) {
                    setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
                });
                var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
                if (key === undefined)
                    return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
                return this.where(":id").equals(key).modify(modifications);
            }
            else {
                // key to modify
                return this.where(":id").equals(keyOrObject).modify(modifications);
            }
        }
    });
    //
    //
    //
    // Transaction Class
    //
    //
    //
    function Transaction(mode, storeNames, dbschema, parent) {
        var _this = this;
        /// <summary>
        ///    Transaction class. Represents a database transaction. All operations on db goes through a Transaction.
        /// </summary>
        /// <param name="mode" type="String">Any of "readwrite" or "readonly"</param>
        /// <param name="storeNames" type="Array">Array of table names to operate on</param>
        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0; // Just for debugging waitFor()
        this._completion = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this._completion.then(function () {
            _this.active = false;
            _this.on.complete.fire();
        }, function (e) {
            var wasActive = _this.active;
            _this.active = false;
            _this.on.error.fire(e);
            _this.parent ?
                _this.parent._reject(e) :
                wasActive && _this.idbtrans && _this.idbtrans.abort();
            return rejection(e); // Indicate we actually DO NOT catch this error.
        });
    }
    props(Transaction.prototype, {
        //
        // Transaction Protected Methods (not required by API users, but needed internally and eventually by dexie extensions)
        //
        _lock: function () {
            assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
            // Temporary set all requests into a pending queue if they are called before database is ready.
            ++this._reculock; // Recursive read/write lock pattern using PSD (Promise Specific Data) instead of TLS (Thread Local Storage)
            if (this._reculock === 1 && !PSD.global)
                PSD.lockOwnerFor = this;
            return this;
        },
        _unlock: function () {
            assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
            if (--this._reculock === 0) {
                if (!PSD.global)
                    PSD.lockOwnerFor = null;
                while (this._blockedFuncs.length > 0 && !this._locked()) {
                    var fnAndPSD = this._blockedFuncs.shift();
                    try {
                        usePSD(fnAndPSD[1], fnAndPSD[0]);
                    }
                    catch (e) { }
                }
            }
            return this;
        },
        _locked: function () {
            // Checks if any write-lock is applied on this transaction.
            // To simplify the Dexie API for extension implementations, we support recursive locks.
            // This is accomplished by using "Promise Specific Data" (PSD).
            // PSD data is bound to a Promise and any child Promise emitted through then() or resolve( new Promise() ).
            // PSD is local to code executing on top of the call stacks of any of any code executed by Promise():
            //         * callback given to the Promise() constructor  (function (resolve, reject){...})
            //         * callbacks given to then()/catch()/finally() methods (function (value){...})
            // If creating a new independant Promise instance from within a Promise call stack, the new Promise will derive the PSD from the call stack of the parent Promise.
            // Derivation is done so that the inner PSD __proto__ points to the outer PSD.
            // PSD.lockOwnerFor will point to current transaction object if the currently executing PSD scope owns the lock.
            return this._reculock && PSD.lockOwnerFor !== this;
        },
        create: function (idbtrans) {
            var _this = this;
            if (!this.mode)
                return this;
            assert(!this.idbtrans);
            if (!idbtrans && !idbdb) {
                switch (dbOpenError && dbOpenError.name) {
                    case "DatabaseClosedError":
                        // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
                        throw new exceptions.DatabaseClosed(dbOpenError);
                    case "MissingAPIError":
                        // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
                        throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                    default:
                        // Make it clear that the user operation was not what caused the error - the error had occurred earlier on db.open()!
                        throw new exceptions.OpenFailed(dbOpenError);
                }
            }
            if (!this.active)
                throw new exceptions.TransactionInactive();
            assert(this._completion._state === null);
            idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
            idbtrans.onerror = wrap(function (ev) {
                preventDefault(ev); // Prohibit default bubbling to window.error
                _this._reject(idbtrans.error);
            });
            idbtrans.onabort = wrap(function (ev) {
                preventDefault(ev);
                _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
                _this.active = false;
                _this.on("abort").fire(ev);
            });
            idbtrans.oncomplete = wrap(function () {
                _this.active = false;
                _this._resolve();
            });
            return this;
        },
        _promise: function (mode, fn, bWriteLock) {
            var _this = this;
            if (mode === READWRITE && this.mode !== READWRITE)
                return rejection(new exceptions.ReadOnly("Transaction is readonly"));
            if (!this.active)
                return rejection(new exceptions.TransactionInactive());
            if (this._locked()) {
                return new Promise(function (resolve, reject) {
                    _this._blockedFuncs.push([function () {
                            _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                        }, PSD]);
                });
            }
            else if (bWriteLock) {
                return newScope(function () {
                    var p = new Promise(function (resolve, reject) {
                        _this._lock();
                        var rv = fn(resolve, reject, _this);
                        if (rv && rv.then)
                            rv.then(resolve, reject);
                    });
                    p.finally(function () { return _this._unlock(); });
                    p._lib = true;
                    return p;
                });
            }
            else {
                var p = new Promise(function (resolve, reject) {
                    var rv = fn(resolve, reject, _this);
                    if (rv && rv.then)
                        rv.then(resolve, reject);
                });
                p._lib = true;
                return p;
            }
        },
        _root: function () {
            return this.parent ? this.parent._root() : this;
        },
        waitFor: function (promise) {
            // Always operate on the root transaction (in case this is a sub stransaction)
            var root = this._root();
            // For stability reasons, convert parameter to promise no matter what type is passed to waitFor().
            // (We must be able to call .then() on it.)
            promise = Promise.resolve(promise);
            if (root._waitingFor) {
                // Already called waitFor(). Wait for both to complete.
                root._waitingFor = root._waitingFor.then(function () { return promise; });
            }
            else {
                // We're not in waiting state. Start waiting state.
                root._waitingFor = promise;
                root._waitingQueue = [];
                // Start interacting with indexedDB until promise completes:
                var store = root.idbtrans.objectStore(root.storeNames[0]);
                (function spin() {
                    ++root._spinCount; // For debugging only
                    while (root._waitingQueue.length)
                        (root._waitingQueue.shift())();
                    if (root._waitingFor)
                        store.get(-Infinity).onsuccess = spin;
                }());
            }
            var currentWaitPromise = root._waitingFor;
            return new Promise(function (resolve, reject) {
                promise.then(function (res) { return root._waitingQueue.push(wrap(resolve.bind(null, res))); }, function (err) { return root._waitingQueue.push(wrap(reject.bind(null, err))); }).finally(function () {
                    if (root._waitingFor === currentWaitPromise) {
                        // No one added a wait after us. Safe to stop the spinning.
                        root._waitingFor = null;
                    }
                });
            });
        },
        //
        // Transaction Public Properties and Methods
        //
        abort: function () {
            this.active && this._reject(new exceptions.Abort());
            this.active = false;
        },
        tables: {
            get: deprecated("Transaction.tables", function () { return allTables; })
        },
        table: function (name) {
            var table = db.table(name); // Don't check that table is part of transaction. It must fail lazily!
            return new Table(name, table.schema, this);
        }
    });
    //
    //
    //
    // WhereClause
    //
    //
    //
    function WhereClause(table, index, orCollection) {
        /// <param name="table" type="Table"></param>
        /// <param name="index" type="String" optional="true"></param>
        /// <param name="orCollection" type="Collection" optional="true"></param>
        this._ctx = {
            table: table,
            index: index === ":id" ? null : index,
            or: orCollection
        };
    }
    props(WhereClause.prototype, function () {
        // WhereClause private methods
        function fail(collectionOrWhereClause, err, T) {
            var collection = collectionOrWhereClause instanceof WhereClause ?
                new Collection(collectionOrWhereClause) :
                collectionOrWhereClause;
            collection._ctx.error = T ? new T(err) : new TypeError(err);
            return collection;
        }
        function emptyCollection(whereClause) {
            return new Collection(whereClause, function () { return IDBKeyRange.only(""); }).limit(0);
        }
        function upperFactory(dir) {
            return dir === "next" ? function (s) { return s.toUpperCase(); } : function (s) { return s.toLowerCase(); };
        }
        function lowerFactory(dir) {
            return dir === "next" ? function (s) { return s.toLowerCase(); } : function (s) { return s.toUpperCase(); };
        }
        function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
            var length = Math.min(key.length, lowerNeedle.length);
            var llp = -1;
            for (var i = 0; i < length; ++i) {
                var lwrKeyChar = lowerKey[i];
                if (lwrKeyChar !== lowerNeedle[i]) {
                    if (cmp(key[i], upperNeedle[i]) < 0)
                        return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
                    if (cmp(key[i], lowerNeedle[i]) < 0)
                        return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
                    if (llp >= 0)
                        return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
                    return null;
                }
                if (cmp(key[i], lwrKeyChar) < 0)
                    llp = i;
            }
            if (length < lowerNeedle.length && dir === "next")
                return key + upperNeedle.substr(key.length);
            if (length < key.length && dir === "prev")
                return key.substr(0, upperNeedle.length);
            return (llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1));
        }
        function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
            /// <param name="needles" type="Array" elementType="String"></param>
            var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
            if (!needles.every(function (s) { return typeof s === 'string'; })) {
                return fail(whereClause, STRING_EXPECTED);
            }
            function initDirection(dir) {
                upper = upperFactory(dir);
                lower = lowerFactory(dir);
                compare = (dir === "next" ? simpleCompare : simpleCompareReverse);
                var needleBounds = needles.map(function (needle) {
                    return { lower: lower(needle), upper: upper(needle) };
                }).sort(function (a, b) {
                    return compare(a.lower, b.lower);
                });
                upperNeedles = needleBounds.map(function (nb) { return nb.upper; });
                lowerNeedles = needleBounds.map(function (nb) { return nb.lower; });
                direction = dir;
                nextKeySuffix = (dir === "next" ? "" : suffix);
            }
            initDirection("next");
            var c = new Collection(whereClause, function () {
                return IDBKeyRange.bound(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
            });
            c._ondirectionchange = function (direction) {
                // This event onlys occur before filter is called the first time.
                initDirection(direction);
            };
            var firstPossibleNeedle = 0;
            c._addAlgorithm(function (cursor, advance, resolve) {
                /// <param name="cursor" type="IDBCursor"></param>
                /// <param name="advance" type="Function"></param>
                /// <param name="resolve" type="Function"></param>
                var key = cursor.key;
                if (typeof key !== 'string')
                    return false;
                var lowerKey = lower(key);
                if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
                    return true;
                }
                else {
                    var lowestPossibleCasing = null;
                    for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                        if (casing === null && lowestPossibleCasing === null)
                            firstPossibleNeedle = i + 1;
                        else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                            lowestPossibleCasing = casing;
                        }
                    }
                    if (lowestPossibleCasing !== null) {
                        advance(function () { cursor.continue(lowestPossibleCasing + nextKeySuffix); });
                    }
                    else {
                        advance(resolve);
                    }
                    return false;
                }
            });
            return c;
        }
        //
        // WhereClause public methods
        //
        return {
            between: function (lower, upper, includeLower, includeUpper) {
                /// <summary>
                ///     Filter out records whose where-field lays between given lower and upper values. Applies to Strings, Numbers and Dates.
                /// </summary>
                /// <param name="lower"></param>
                /// <param name="upper"></param>
                /// <param name="includeLower" optional="true">Whether items that equals lower should be included. Default true.</param>
                /// <param name="includeUpper" optional="true">Whether items that equals upper should be included. Default false.</param>
                /// <returns type="Collection"></returns>
                includeLower = includeLower !== false; // Default to true
                includeUpper = includeUpper === true; // Default to false
                try {
                    if ((cmp(lower, upper) > 0) ||
                        (cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)))
                        return emptyCollection(this); // Workaround for idiotic W3C Specification that DataError must be thrown if lower > upper. The natural result would be to return an empty collection.
                    return new Collection(this, function () { return IDBKeyRange.bound(lower, upper, !includeLower, !includeUpper); });
                }
                catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
            },
            equals: function (value) {
                return new Collection(this, function () { return IDBKeyRange.only(value); });
            },
            above: function (value) {
                return new Collection(this, function () { return IDBKeyRange.lowerBound(value, true); });
            },
            aboveOrEqual: function (value) {
                return new Collection(this, function () { return IDBKeyRange.lowerBound(value); });
            },
            below: function (value) {
                return new Collection(this, function () { return IDBKeyRange.upperBound(value, true); });
            },
            belowOrEqual: function (value) {
                return new Collection(this, function () { return IDBKeyRange.upperBound(value); });
            },
            startsWith: function (str) {
                /// <param name="str" type="String"></param>
                if (typeof str !== 'string')
                    return fail(this, STRING_EXPECTED);
                return this.between(str, str + maxString, true, true);
            },
            startsWithIgnoreCase: function (str) {
                /// <param name="str" type="String"></param>
                if (str === "")
                    return this.startsWith(str);
                return addIgnoreCaseAlgorithm(this, function (x, a) { return x.indexOf(a[0]) === 0; }, [str], maxString);
            },
            equalsIgnoreCase: function (str) {
                /// <param name="str" type="String"></param>
                return addIgnoreCaseAlgorithm(this, function (x, a) { return x === a[0]; }, [str], "");
            },
            anyOfIgnoreCase: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0)
                    return emptyCollection(this);
                return addIgnoreCaseAlgorithm(this, function (x, a) { return a.indexOf(x) !== -1; }, set, "");
            },
            startsWithAnyOfIgnoreCase: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0)
                    return emptyCollection(this);
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return a.some(function (n) {
                        return x.indexOf(n) === 0;
                    });
                }, set, maxString);
            },
            anyOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                var compare = ascending;
                try {
                    set.sort(compare);
                }
                catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                if (set.length === 0)
                    return emptyCollection(this);
                var c = new Collection(this, function () { return IDBKeyRange.bound(set[0], set[set.length - 1]); });
                c._ondirectionchange = function (direction) {
                    compare = (direction === "next" ? ascending : descending);
                    set.sort(compare);
                };
                var i = 0;
                c._addAlgorithm(function (cursor, advance, resolve) {
                    var key = cursor.key;
                    while (compare(key, set[i]) > 0) {
                        // The cursor has passed beyond this key. Check next.
                        ++i;
                        if (i === set.length) {
                            // There is no next. Stop searching.
                            advance(resolve);
                            return false;
                        }
                    }
                    if (compare(key, set[i]) === 0) {
                        // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                        return true;
                    }
                    else {
                        // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                        advance(function () { cursor.continue(set[i]); });
                        return false;
                    }
                });
                return c;
            },
            notEqual: function (value) {
                return this.inAnyRange([[minKey, value], [value, maxKey]], { includeLowers: false, includeUppers: false });
            },
            noneOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0)
                    return new Collection(this); // Return entire collection.
                try {
                    set.sort(ascending);
                }
                catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                // Transform ["a","b","c"] to a set of ranges for between/above/below: [[minKey,"a"], ["a","b"], ["b","c"], ["c",maxKey]]
                var ranges = set.reduce(function (res, val) { return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]]; }, null);
                ranges.push([set[set.length - 1], maxKey]);
                return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
            },
            /** Filter out values withing given set of ranges.
            * Example, give children and elders a rebate of 50%:
            *
            *   db.friends.where('age').inAnyRange([[0,18],[65,Infinity]]).modify({Rebate: 1/2});
            *
            * @param {(string|number|Date|Array)[][]} ranges
            * @param {{includeLowers: boolean, includeUppers: boolean}} options
            */
            inAnyRange: function (ranges, options) {
                if (ranges.length === 0)
                    return emptyCollection(this);
                if (!ranges.every(function (range) { return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0; })) {
                    return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
                }
                var includeLowers = !options || options.includeLowers !== false; // Default to true
                var includeUppers = options && options.includeUppers === true; // Default to false
                function addRange(ranges, newRange) {
                    for (var i = 0, l = ranges.length; i < l; ++i) {
                        var range = ranges[i];
                        if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                            range[0] = min(range[0], newRange[0]);
                            range[1] = max(range[1], newRange[1]);
                            break;
                        }
                    }
                    if (i === l)
                        ranges.push(newRange);
                    return ranges;
                }
                var sortDirection = ascending;
                function rangeSorter(a, b) { return sortDirection(a[0], b[0]); }
                // Join overlapping ranges
                var set;
                try {
                    set = ranges.reduce(addRange, []);
                    set.sort(rangeSorter);
                }
                catch (ex) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                var i = 0;
                var keyIsBeyondCurrentEntry = includeUppers ?
                    function (key) { return ascending(key, set[i][1]) > 0; } :
                    function (key) { return ascending(key, set[i][1]) >= 0; };
                var keyIsBeforeCurrentEntry = includeLowers ?
                    function (key) { return descending(key, set[i][0]) > 0; } :
                    function (key) { return descending(key, set[i][0]) >= 0; };
                function keyWithinCurrentRange(key) {
                    return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
                }
                var checkKey = keyIsBeyondCurrentEntry;
                var c = new Collection(this, function () {
                    return IDBKeyRange.bound(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
                });
                c._ondirectionchange = function (direction) {
                    if (direction === "next") {
                        checkKey = keyIsBeyondCurrentEntry;
                        sortDirection = ascending;
                    }
                    else {
                        checkKey = keyIsBeforeCurrentEntry;
                        sortDirection = descending;
                    }
                    set.sort(rangeSorter);
                };
                c._addAlgorithm(function (cursor, advance, resolve) {
                    var key = cursor.key;
                    while (checkKey(key)) {
                        // The cursor has passed beyond this key. Check next.
                        ++i;
                        if (i === set.length) {
                            // There is no next. Stop searching.
                            advance(resolve);
                            return false;
                        }
                    }
                    if (keyWithinCurrentRange(key)) {
                        // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                        return true;
                    }
                    else if (cmp(key, set[i][1]) === 0 || cmp(key, set[i][0]) === 0) {
                        // includeUpper or includeLower is false so keyWithinCurrentRange() returns false even though we are at range border.
                        // Continue to next key but don't include this one.
                        return false;
                    }
                    else {
                        // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                        advance(function () {
                            if (sortDirection === ascending)
                                cursor.continue(set[i][0]);
                            else
                                cursor.continue(set[i][1]);
                        });
                        return false;
                    }
                });
                return c;
            },
            startsWithAnyOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (!set.every(function (s) { return typeof s === 'string'; })) {
                    return fail(this, "startsWithAnyOf() only works with strings");
                }
                if (set.length === 0)
                    return emptyCollection(this);
                return this.inAnyRange(set.map(function (str) {
                    return [str, str + maxString];
                }));
            }
        };
    });
    //
    //
    //
    // Collection Class
    //
    //
    //
    function Collection(whereClause, keyRangeGenerator) {
        /// <summary>
        ///
        /// </summary>
        /// <param name="whereClause" type="WhereClause">Where clause instance</param>
        /// <param name="keyRangeGenerator" value="function(){ return IDBKeyRange.bound(0,1);}" optional="true"></param>
        var keyRange = null, error = null;
        if (keyRangeGenerator)
            try {
                keyRange = keyRangeGenerator();
            }
            catch (ex) {
                error = ex;
            }
        var whereCtx = whereClause._ctx, table = whereCtx.table;
        this._ctx = {
            table: table,
            index: whereCtx.index,
            isPrimKey: (!whereCtx.index || (table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name)),
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true,
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error: error,
            or: whereCtx.or,
            valueMapper: table.hook.reading.fire
        };
    }
    function isPlainKeyRange(ctx, ignoreLimitFilter) {
        return !(ctx.filter || ctx.algorithm || ctx.or) &&
            (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
    }
    props(Collection.prototype, function () {
        //
        // Collection Private Functions
        //
        function addFilter(ctx, fn) {
            ctx.filter = combine(ctx.filter, fn);
        }
        function addReplayFilter(ctx, factory, isLimitFilter) {
            var curr = ctx.replayFilter;
            ctx.replayFilter = curr ? function () { return combine(curr(), factory()); } : factory;
            ctx.justLimit = isLimitFilter && !curr;
        }
        function addMatchFilter(ctx, fn) {
            ctx.isMatch = combine(ctx.isMatch, fn);
        }
        /** @param ctx {
         *      isPrimKey: boolean,
         *      table: Table,
         *      index: string
         * }
         * @param store IDBObjectStore
         **/
        function getIndexOrStore(ctx, store) {
            if (ctx.isPrimKey)
                return store;
            var indexSpec = ctx.table.schema.idxByName[ctx.index];
            if (!indexSpec)
                throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + store.name + " is not indexed");
            return store.index(indexSpec.name);
        }
        /** @param ctx {
         *      isPrimKey: boolean,
         *      table: Table,
         *      index: string,
         *      keysOnly: boolean,
         *      range?: IDBKeyRange,
         *      dir: "next" | "prev"
         * }
         */
        function openCursor(ctx, store) {
            var idxOrStore = getIndexOrStore(ctx, store);
            return ctx.keysOnly && 'openKeyCursor' in idxOrStore ?
                idxOrStore.openKeyCursor(ctx.range || null, ctx.dir + ctx.unique) :
                idxOrStore.openCursor(ctx.range || null, ctx.dir + ctx.unique);
        }
        function iter(ctx, fn, resolve, reject, idbstore) {
            var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
            if (!ctx.or) {
                iterate(openCursor(ctx, idbstore), combine(ctx.algorithm, filter), fn, resolve, reject, !ctx.keysOnly && ctx.valueMapper);
            }
            else
                (function () {
                    var set = {};
                    var resolved = 0;
                    function resolveboth() {
                        if (++resolved === 2)
                            resolve(); // Seems like we just support or btwn max 2 expressions, but there are no limit because we do recursion.
                    }
                    function union(item, cursor, advance) {
                        if (!filter || filter(cursor, advance, resolveboth, reject)) {
                            var primaryKey = cursor.primaryKey;
                            var key = '' + primaryKey;
                            if (key === '[object ArrayBuffer]')
                                key = '' + new Uint8Array(primaryKey);
                            if (!hasOwn(set, key)) {
                                set[key] = true;
                                fn(item, cursor, advance);
                            }
                        }
                    }
                    ctx.or._iterate(union, resolveboth, reject, idbstore);
                    iterate(openCursor(ctx, idbstore), ctx.algorithm, union, resolveboth, reject, !ctx.keysOnly && ctx.valueMapper);
                })();
        }
        return {
            //
            // Collection Protected Functions
            //
            _read: function (fn, cb) {
                var ctx = this._ctx;
                return ctx.error ?
                    ctx.table._trans(null, rejection.bind(null, ctx.error)) :
                    ctx.table._idbstore(READONLY, fn).then(cb);
            },
            _write: function (fn) {
                var ctx = this._ctx;
                return ctx.error ?
                    ctx.table._trans(null, rejection.bind(null, ctx.error)) :
                    ctx.table._idbstore(READWRITE, fn, "locked"); // When doing write operations on collections, always lock the operation so that upcoming operations gets queued.
            },
            _addAlgorithm: function (fn) {
                var ctx = this._ctx;
                ctx.algorithm = combine(ctx.algorithm, fn);
            },
            _iterate: function (fn, resolve, reject, idbstore) {
                return iter(this._ctx, fn, resolve, reject, idbstore);
            },
            clone: function (props$$1) {
                var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
                if (props$$1)
                    extend(ctx, props$$1);
                rv._ctx = ctx;
                return rv;
            },
            raw: function () {
                this._ctx.valueMapper = null;
                return this;
            },
            //
            // Collection Public methods
            //
            each: function (fn) {
                var ctx = this._ctx;
                return this._read(function (resolve, reject, idbstore) {
                    iter(ctx, fn, resolve, reject, idbstore);
                });
            },
            count: function (cb) {
                var ctx = this._ctx;
                if (isPlainKeyRange(ctx, true)) {
                    // This is a plain key range. We can use the count() method if the index.
                    return this._read(function (resolve, reject, idbstore) {
                        var idx = getIndexOrStore(ctx, idbstore);
                        var req = (ctx.range ? idx.count(ctx.range) : idx.count());
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = function (e) {
                            resolve(Math.min(e.target.result, ctx.limit));
                        };
                    }, cb);
                }
                else {
                    // Algorithms, filters or expressions are applied. Need to count manually.
                    var count = 0;
                    return this._read(function (resolve, reject, idbstore) {
                        iter(ctx, function () { ++count; return false; }, function () { resolve(count); }, reject, idbstore);
                    }, cb);
                }
            },
            sortBy: function (keyPath, cb) {
                /// <param name="keyPath" type="String"></param>
                var parts = keyPath.split('.').reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
                function getval(obj, i) {
                    if (i)
                        return getval(obj[parts[i]], i - 1);
                    return obj[lastPart];
                }
                var order = this._ctx.dir === "next" ? 1 : -1;
                function sorter(a, b) {
                    var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
                    return aVal < bVal ? -order : aVal > bVal ? order : 0;
                }
                return this.toArray(function (a) {
                    return a.sort(sorter);
                }).then(cb);
            },
            toArray: function (cb) {
                var ctx = this._ctx;
                return this._read(function (resolve, reject, idbstore) {
                    if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                        // Special optimation if we could use IDBObjectStore.getAll() or
                        // IDBKeyRange.getAll():
                        var readingHook = ctx.table.hook.reading.fire;
                        var idxOrStore = getIndexOrStore(ctx, idbstore);
                        var req = ctx.limit < Infinity ?
                            idxOrStore.getAll(ctx.range, ctx.limit) :
                            idxOrStore.getAll(ctx.range);
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = readingHook === mirror ?
                            eventSuccessHandler(resolve) :
                            eventSuccessHandler(function (res) {
                                try {
                                    resolve(res.map(readingHook));
                                }
                                catch (e) {
                                    reject(e);
                                }
                            });
                    }
                    else {
                        // Getting array through a cursor.
                        var a = [];
                        iter(ctx, function (item) { a.push(item); }, function arrayComplete() {
                            resolve(a);
                        }, reject, idbstore);
                    }
                }, cb);
            },
            offset: function (offset) {
                var ctx = this._ctx;
                if (offset <= 0)
                    return this;
                ctx.offset += offset; // For count()
                if (isPlainKeyRange(ctx)) {
                    addReplayFilter(ctx, function () {
                        var offsetLeft = offset;
                        return function (cursor, advance) {
                            if (offsetLeft === 0)
                                return true;
                            if (offsetLeft === 1) {
                                --offsetLeft;
                                return false;
                            }
                            advance(function () {
                                cursor.advance(offsetLeft);
                                offsetLeft = 0;
                            });
                            return false;
                        };
                    });
                }
                else {
                    addReplayFilter(ctx, function () {
                        var offsetLeft = offset;
                        return function () { return (--offsetLeft < 0); };
                    });
                }
                return this;
            },
            limit: function (numRows) {
                this._ctx.limit = Math.min(this._ctx.limit, numRows); // For count()
                addReplayFilter(this._ctx, function () {
                    var rowsLeft = numRows;
                    return function (cursor, advance, resolve) {
                        if (--rowsLeft <= 0)
                            advance(resolve); // Stop after this item has been included
                        return rowsLeft >= 0; // If numRows is already below 0, return false because then 0 was passed to numRows initially. Otherwise we wouldnt come here.
                    };
                }, true);
                return this;
            },
            until: function (filterFunction, bIncludeStopEntry) {
                addFilter(this._ctx, function (cursor, advance, resolve) {
                    if (filterFunction(cursor.value)) {
                        advance(resolve);
                        return bIncludeStopEntry;
                    }
                    else {
                        return true;
                    }
                });
                return this;
            },
            first: function (cb) {
                return this.limit(1).toArray(function (a) { return a[0]; }).then(cb);
            },
            last: function (cb) {
                return this.reverse().first(cb);
            },
            filter: function (filterFunction) {
                /// <param name="jsFunctionFilter" type="Function">function(val){return true/false}</param>
                addFilter(this._ctx, function (cursor) {
                    return filterFunction(cursor.value);
                });
                // match filters not used in Dexie.js but can be used by 3rd part libraries to test a
                // collection for a match without querying DB. Used by Dexie.Observable.
                addMatchFilter(this._ctx, filterFunction);
                return this;
            },
            and: function (filterFunction) {
                return this.filter(filterFunction);
            },
            or: function (indexName) {
                return new WhereClause(this._ctx.table, indexName, this);
            },
            reverse: function () {
                this._ctx.dir = (this._ctx.dir === "prev" ? "next" : "prev");
                if (this._ondirectionchange)
                    this._ondirectionchange(this._ctx.dir);
                return this;
            },
            desc: function () {
                return this.reverse();
            },
            eachKey: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                return this.each(function (val, cursor) { cb(cursor.key, cursor); });
            },
            eachUniqueKey: function (cb) {
                this._ctx.unique = "unique";
                return this.eachKey(cb);
            },
            eachPrimaryKey: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                return this.each(function (val, cursor) { cb(cursor.primaryKey, cursor); });
            },
            keys: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                var a = [];
                return this.each(function (item, cursor) {
                    a.push(cursor.key);
                }).then(function () {
                    return a;
                }).then(cb);
            },
            primaryKeys: function (cb) {
                var ctx = this._ctx;
                if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                    // Special optimation if we could use IDBObjectStore.getAllKeys() or
                    // IDBKeyRange.getAllKeys():
                    return this._read(function (resolve, reject, idbstore) {
                        var idxOrStore = getIndexOrStore(ctx, idbstore);
                        var req = ctx.limit < Infinity ?
                            idxOrStore.getAllKeys(ctx.range, ctx.limit) :
                            idxOrStore.getAllKeys(ctx.range);
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = eventSuccessHandler(resolve);
                    }).then(cb);
                }
                ctx.keysOnly = !ctx.isMatch;
                var a = [];
                return this.each(function (item, cursor) {
                    a.push(cursor.primaryKey);
                }).then(function () {
                    return a;
                }).then(cb);
            },
            uniqueKeys: function (cb) {
                this._ctx.unique = "unique";
                return this.keys(cb);
            },
            firstKey: function (cb) {
                return this.limit(1).keys(function (a) { return a[0]; }).then(cb);
            },
            lastKey: function (cb) {
                return this.reverse().firstKey(cb);
            },
            distinct: function () {
                var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
                if (!idx || !idx.multi)
                    return this; // distinct() only makes differencies on multiEntry indexes.
                var set = {};
                addFilter(this._ctx, function (cursor) {
                    var strKey = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                    var found = hasOwn(set, strKey);
                    set[strKey] = true;
                    return !found;
                });
                return this;
            },
            //
            // Methods that mutate storage
            //
            modify: function (changes) {
                var self = this, ctx = this._ctx, hook = ctx.table.hook, updatingHook = hook.updating.fire, deletingHook = hook.deleting.fire;
                return this._write(function (resolve, reject, idbstore, trans) {
                    var modifyer;
                    if (typeof changes === 'function') {
                        // Changes is a function that may update, add or delete propterties or even require a deletion the object itself (delete this.item)
                        if (updatingHook === nop && deletingHook === nop) {
                            // Noone cares about what is being changed. Just let the modifier function be the given argument as is.
                            modifyer = changes;
                        }
                        else {
                            // People want to know exactly what is being modified or deleted.
                            // Let modifyer be a proxy function that finds out what changes the caller is actually doing
                            // and call the hooks accordingly!
                            modifyer = function (item) {
                                var origItem = deepClone(item); // Clone the item first so we can compare laters.
                                if (changes.call(this, item, this) === false)
                                    return false; // Call the real modifyer function (If it returns false explicitely, it means it dont want to modify anyting on this object)
                                if (!hasOwn(this, "value")) {
                                    // The real modifyer function requests a deletion of the object. Inform the deletingHook that a deletion is taking place.
                                    deletingHook.call(this, this.primKey, item, trans);
                                }
                                else {
                                    // No deletion. Check what was changed
                                    var objectDiff = getObjectDiff(origItem, this.value);
                                    var additionalChanges = updatingHook.call(this, objectDiff, this.primKey, origItem, trans);
                                    if (additionalChanges) {
                                        // Hook want to apply additional modifications. Make sure to fullfill the will of the hook.
                                        item = this.value;
                                        keys(additionalChanges).forEach(function (keyPath) {
                                            setByKeyPath(item, keyPath, additionalChanges[keyPath]); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                        });
                                    }
                                }
                            };
                        }
                    }
                    else if (updatingHook === nop) {
                        // changes is a set of {keyPath: value} and no one is listening to the updating hook.
                        var keyPaths = keys(changes);
                        var numKeys = keyPaths.length;
                        modifyer = function (item) {
                            var anythingModified = false;
                            for (var i = 0; i < numKeys; ++i) {
                                var keyPath = keyPaths[i], val = changes[keyPath];
                                if (getByKeyPath(item, keyPath) !== val) {
                                    setByKeyPath(item, keyPath, val); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                    anythingModified = true;
                                }
                            }
                            return anythingModified;
                        };
                    }
                    else {
                        // changes is a set of {keyPath: value} and people are listening to the updating hook so we need to call it and
                        // allow it to add additional modifications to make.
                        var origChanges = changes;
                        changes = shallowClone(origChanges); // Let's work with a clone of the changes keyPath/value set so that we can restore it in case a hook extends it.
                        modifyer = function (item) {
                            var anythingModified = false;
                            var additionalChanges = updatingHook.call(this, changes, this.primKey, deepClone(item), trans);
                            if (additionalChanges)
                                extend(changes, additionalChanges);
                            keys(changes).forEach(function (keyPath) {
                                var val = changes[keyPath];
                                if (getByKeyPath(item, keyPath) !== val) {
                                    setByKeyPath(item, keyPath, val);
                                    anythingModified = true;
                                }
                            });
                            if (additionalChanges)
                                changes = shallowClone(origChanges); // Restore original changes for next iteration
                            return anythingModified;
                        };
                    }
                    var count = 0;
                    var successCount = 0;
                    var iterationComplete = false;
                    var failures = [];
                    var failKeys = [];
                    var currentKey = null;
                    function modifyItem(item, cursor) {
                        currentKey = cursor.primaryKey;
                        var thisContext = {
                            primKey: cursor.primaryKey,
                            value: item,
                            onsuccess: null,
                            onerror: null
                        };
                        function onerror(e) {
                            failures.push(e);
                            failKeys.push(thisContext.primKey);
                            checkFinished();
                            return true; // Catch these errors and let a final rejection decide whether or not to abort entire transaction
                        }
                        if (modifyer.call(thisContext, item, thisContext) !== false) {
                            var bDelete = !hasOwn(thisContext, "value");
                            ++count;
                            tryCatch(function () {
                                var req = (bDelete ? cursor.delete() : cursor.update(thisContext.value));
                                req._hookCtx = thisContext;
                                req.onerror = hookedEventRejectHandler(onerror);
                                req.onsuccess = hookedEventSuccessHandler(function () {
                                    ++successCount;
                                    checkFinished();
                                });
                            }, onerror);
                        }
                        else if (thisContext.onsuccess) {
                            // Hook will expect either onerror or onsuccess to always be called!
                            thisContext.onsuccess(thisContext.value);
                        }
                    }
                    function doReject(e) {
                        if (e) {
                            failures.push(e);
                            failKeys.push(currentKey);
                        }
                        return reject(new ModifyError("Error modifying one or more objects", failures, successCount, failKeys));
                    }
                    function checkFinished() {
                        if (iterationComplete && successCount + failures.length === count) {
                            if (failures.length > 0)
                                doReject();
                            else
                                resolve(successCount);
                        }
                    }
                    self.clone().raw()._iterate(modifyItem, function () {
                        iterationComplete = true;
                        checkFinished();
                    }, doReject, idbstore);
                });
            },
            'delete': function () {
                var _this = this;
                var ctx = this._ctx, range = ctx.range, deletingHook = ctx.table.hook.deleting.fire, hasDeleteHook = deletingHook !== nop;
                if (!hasDeleteHook &&
                    isPlainKeyRange(ctx) &&
                    ((ctx.isPrimKey && !hangsOnDeleteLargeKeyRange) || !range)) {
                    // May use IDBObjectStore.delete(IDBKeyRange) in this case (Issue #208)
                    // For chromium, this is the way most optimized version.
                    // For IE/Edge, this could hang the indexedDB engine and make operating system instable
                    // (https://gist.github.com/dfahlander/5a39328f029de18222cf2125d56c38f7)
                    return this._write(function (resolve, reject, idbstore) {
                        // Our API contract is to return a count of deleted items, so we have to count() before delete().
                        var onerror = eventRejectHandler(reject), countReq = (range ? idbstore.count(range) : idbstore.count());
                        countReq.onerror = onerror;
                        countReq.onsuccess = function () {
                            var count = countReq.result;
                            tryCatch(function () {
                                var delReq = (range ? idbstore.delete(range) : idbstore.clear());
                                delReq.onerror = onerror;
                                delReq.onsuccess = function () { return resolve(count); };
                            }, function (err) { return reject(err); });
                        };
                    });
                }
                // Default version to use when collection is not a vanilla IDBKeyRange on the primary key.
                // Divide into chunks to not starve RAM.
                // If has delete hook, we will have to collect not just keys but also objects, so it will use
                // more memory and need lower chunk size.
                var CHUNKSIZE = hasDeleteHook ? 2000 : 10000;
                return this._write(function (resolve, reject, idbstore, trans) {
                    var totalCount = 0;
                    // Clone collection and change its table and set a limit of CHUNKSIZE on the cloned Collection instance.
                    var collection = _this
                        .clone({
                        keysOnly: !ctx.isMatch && !hasDeleteHook
                    }) // load just keys (unless filter() or and() or deleteHook has subscribers)
                        .distinct() // In case multiEntry is used, never delete same key twice because resulting count
                        .limit(CHUNKSIZE)
                        .raw(); // Don't filter through reading-hooks (like mapped classes etc)
                    var keysOrTuples = [];
                    // We're gonna do things on as many chunks that are needed.
                    // Use recursion of nextChunk function:
                    var nextChunk = function () { return collection.each(hasDeleteHook ? function (val, cursor) {
                        // Somebody subscribes to hook('deleting'). Collect all primary keys and their values,
                        // so that the hook can be called with its values in bulkDelete().
                        keysOrTuples.push([cursor.primaryKey, cursor.value]);
                    } : function (val, cursor) {
                        // No one subscribes to hook('deleting'). Collect only primary keys:
                        keysOrTuples.push(cursor.primaryKey);
                    }).then(function () {
                        // Chromium deletes faster when doing it in sort order.
                        hasDeleteHook ?
                            keysOrTuples.sort(function (a, b) { return ascending(a[0], b[0]); }) :
                            keysOrTuples.sort(ascending);
                        return bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook);
                    }).then(function () {
                        var count = keysOrTuples.length;
                        totalCount += count;
                        keysOrTuples = [];
                        return count < CHUNKSIZE ? totalCount : nextChunk();
                    }); };
                    resolve(nextChunk());
                });
            }
        };
    });
    //
    //
    //
    // ------------------------- Help functions ---------------------------
    //
    //
    //
    function lowerVersionFirst(a, b) {
        return a._cfg.version - b._cfg.version;
    }
    function setApiOnPlace(objs, tableNames, dbschema) {
        tableNames.forEach(function (tableName) {
            var schema = dbschema[tableName];
            objs.forEach(function (obj) {
                if (!(tableName in obj)) {
                    if (obj === Transaction.prototype || obj instanceof Transaction) {
                        // obj is a Transaction prototype (or prototype of a subclass to Transaction)
                        // Make the API a getter that returns this.table(tableName)
                        setProp(obj, tableName, { get: function () { return this.table(tableName); } });
                    }
                    else {
                        // Table will not be bound to a transaction (will use Dexie.currentTransaction)
                        obj[tableName] = new Table(tableName, schema);
                    }
                }
            });
        });
    }
    function removeTablesApi(objs) {
        objs.forEach(function (obj) {
            for (var key in obj) {
                if (obj[key] instanceof Table)
                    delete obj[key];
            }
        });
    }
    function iterate(req, filter, fn, resolve, reject, valueMapper) {
        // Apply valueMapper (hook('reading') or mappped class)
        var mappedFn = valueMapper ? function (x, c, a) { return fn(valueMapper(x), c, a); } : fn;
        // Wrap fn with PSD and microtick stuff from Promise.
        var wrappedFn = wrap(mappedFn, reject);
        if (!req.onerror)
            req.onerror = eventRejectHandler(reject);
        if (filter) {
            req.onsuccess = trycatcher(function filter_record() {
                var cursor = req.result;
                if (cursor) {
                    var c = function () { cursor.continue(); };
                    if (filter(cursor, function (advancer) { c = advancer; }, resolve, reject))
                        wrappedFn(cursor.value, cursor, function (advancer) { c = advancer; });
                    c();
                }
                else {
                    resolve();
                }
            }, reject);
        }
        else {
            req.onsuccess = trycatcher(function filter_record() {
                var cursor = req.result;
                if (cursor) {
                    var c = function () { cursor.continue(); };
                    wrappedFn(cursor.value, cursor, function (advancer) { c = advancer; });
                    c();
                }
                else {
                    resolve();
                }
            }, reject);
        }
    }
    function parseIndexSyntax(indexes) {
        /// <param name="indexes" type="String"></param>
        /// <returns type="Array" elementType="IndexSpec"></returns>
        var rv = [];
        indexes.split(',').forEach(function (index) {
            index = index.trim();
            var name = index.replace(/([&*]|\+\+)/g, ""); // Remove "&", "++" and "*"
            // Let keyPath of "[a+b]" be ["a","b"]:
            var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
            rv.push(new IndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), /\./.test(index)));
        });
        return rv;
    }
    function cmp(key1, key2) {
        return indexedDB.cmp(key1, key2);
    }
    function min(a, b) {
        return cmp(a, b) < 0 ? a : b;
    }
    function max(a, b) {
        return cmp(a, b) > 0 ? a : b;
    }
    function ascending(a, b) {
        return indexedDB.cmp(a, b);
    }
    function descending(a, b) {
        return indexedDB.cmp(b, a);
    }
    function simpleCompare(a, b) {
        return a < b ? -1 : a === b ? 0 : 1;
    }
    function simpleCompareReverse(a, b) {
        return a > b ? -1 : a === b ? 0 : 1;
    }
    function combine(filter1, filter2) {
        return filter1 ?
            filter2 ?
                function () { return filter1.apply(this, arguments) && filter2.apply(this, arguments); } :
                filter1 :
            filter2;
    }
    function readGlobalSchema() {
        db.verno = idbdb.version / 10;
        db._dbSchema = globalSchema = {};
        dbStoreNames = slice(idbdb.objectStoreNames, 0);
        if (dbStoreNames.length === 0)
            return; // Database contains no stores.
        var trans = idbdb.transaction(safariMultiStoreFix(dbStoreNames), 'readonly');
        dbStoreNames.forEach(function (storeName) {
            var store = trans.objectStore(storeName), keyPath = store.keyPath, dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
            var primKey = new IndexSpec(keyPath, keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== 'string', dotted);
            var indexes = [];
            for (var j = 0; j < store.indexNames.length; ++j) {
                var idbindex = store.index(store.indexNames[j]);
                keyPath = idbindex.keyPath;
                dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
                var index = new IndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== 'string', dotted);
                indexes.push(index);
            }
            globalSchema[storeName] = new TableSchema(storeName, primKey, indexes, {});
        });
        setApiOnPlace([allTables], keys(globalSchema), globalSchema);
    }
    function adjustToExistingIndexNames(schema, idbtrans) {
        /// <summary>
        /// Issue #30 Problem with existing db - adjust to existing index names when migrating from non-dexie db
        /// </summary>
        /// <param name="schema" type="Object">Map between name and TableSchema</param>
        /// <param name="idbtrans" type="IDBTransaction"></param>
        var storeNames = idbtrans.db.objectStoreNames;
        for (var i = 0; i < storeNames.length; ++i) {
            var storeName = storeNames[i];
            var store = idbtrans.objectStore(storeName);
            hasGetAll = 'getAll' in store;
            for (var j = 0; j < store.indexNames.length; ++j) {
                var indexName = store.indexNames[j];
                var keyPath = store.index(indexName).keyPath;
                var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
                if (schema[storeName]) {
                    var indexSpec = schema[storeName].idxByName[dexieName];
                    if (indexSpec)
                        indexSpec.name = indexName;
                }
            }
        }
        // Bug with getAll() on Safari ver<604 on Workers only, see discussion following PR #579
        if (/Safari/.test(navigator.userAgent) &&
            !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
            _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope &&
            [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
            hasGetAll = false;
        }
    }
    function fireOnBlocked(ev) {
        db.on("blocked").fire(ev);
        // Workaround (not fully*) for missing "versionchange" event in IE,Edge and Safari:
        connections
            .filter(function (c) { return c.name === db.name && c !== db && !c._vcFired; })
            .map(function (c) { return c.on("versionchange").fire(ev); });
    }
    extend(this, {
        Collection: Collection,
        Table: Table,
        Transaction: Transaction,
        Version: Version,
        WhereClause: WhereClause
    });
    init();
    addons.forEach(function (fn) {
        fn(db);
    });
}
function parseType(type) {
    if (typeof type === 'function') {
        return new type();
    }
    else if (isArray(type)) {
        return [parseType(type[0])];
    }
    else if (type && typeof type === 'object') {
        var rv = {};
        applyStructure(rv, type);
        return rv;
    }
    else {
        return type;
    }
}
function applyStructure(obj, structure) {
    keys(structure).forEach(function (member) {
        var value = parseType(structure[member]);
        obj[member] = value;
    });
    return obj;
}
function hookedEventSuccessHandler(resolve) {
    // wrap() is needed when calling hooks because the rare scenario of:
    //  * hook does a db operation that fails immediately (IDB throws exception)
    //    For calling db operations on correct transaction, wrap makes sure to set PSD correctly.
    //    wrap() will also execute in a virtual tick.
    //  * If not wrapped in a virtual tick, direct exception will launch a new physical tick.
    //  * If this was the last event in the bulk, the promise will resolve after a physical tick
    //    and the transaction will have committed already.
    // If no hook, the virtual tick will be executed in the reject()/resolve of the final promise,
    // because it is always marked with _lib = true when created using Transaction._promise().
    return wrap(function (event) {
        var req = event.target, ctx = req._hookCtx, // Contains the hook error handler. Put here instead of closure to boost performance.
        result = ctx.value || req.result, // Pass the object value on updates. The result from IDB is the primary key.
        hookSuccessHandler = ctx && ctx.onsuccess;
        hookSuccessHandler && hookSuccessHandler(result);
        resolve && resolve(result);
    }, resolve);
}
function eventRejectHandler(reject) {
    return wrap(function (event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
    });
}
function eventSuccessHandler(resolve) {
    return wrap(function (event) {
        resolve(event.target.result);
    });
}
function hookedEventRejectHandler(reject) {
    return wrap(function (event) {
        // See comment on hookedEventSuccessHandler() why wrap() is needed only when supporting hooks.
        var req = event.target, err = req.error, ctx = req._hookCtx, // Contains the hook error handler. Put here instead of closure to boost performance.
        hookErrorHandler = ctx && ctx.onerror;
        hookErrorHandler && hookErrorHandler(err);
        preventDefault(event);
        reject(err);
        return false;
    });
}
function preventDefault(event) {
    if (event.stopPropagation)
        event.stopPropagation();
    if (event.preventDefault)
        event.preventDefault();
}
function awaitIterator(iterator) {
    var callNext = function (result) { return iterator.next(result); }, doThrow = function (error) { return iterator.throw(error); }, onSuccess = step(callNext), onError = step(doThrow);
    function step(getNext) {
        return function (val) {
            var next = getNext(val), value = next.value;
            return next.done ? value :
                (!value || typeof value.then !== 'function' ?
                    isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) :
                    value.then(onSuccess, onError));
        };
    }
    return step(callNext)();
}
//
// IndexSpec struct
//
function IndexSpec(name, keyPath, unique, multi, auto, compound, dotted) {
    /// <param name="name" type="String"></param>
    /// <param name="keyPath" type="String"></param>
    /// <param name="unique" type="Boolean"></param>
    /// <param name="multi" type="Boolean"></param>
    /// <param name="auto" type="Boolean"></param>
    /// <param name="compound" type="Boolean"></param>
    /// <param name="dotted" type="Boolean"></param>
    this.name = name;
    this.keyPath = keyPath;
    this.unique = unique;
    this.multi = multi;
    this.auto = auto;
    this.compound = compound;
    this.dotted = dotted;
    var keyPathSrc = typeof keyPath === 'string' ? keyPath : keyPath && ('[' + [].join.call(keyPath, '+') + ']');
    this.src = (unique ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + keyPathSrc;
}
//
// TableSchema struct
//
function TableSchema(name, primKey, indexes, instanceTemplate) {
    /// <param name="name" type="String"></param>
    /// <param name="primKey" type="IndexSpec"></param>
    /// <param name="indexes" type="Array" elementType="IndexSpec"></param>
    /// <param name="instanceTemplate" type="Object"></param>
    this.name = name;
    this.primKey = primKey || new IndexSpec();
    this.indexes = indexes || [new IndexSpec()];
    this.instanceTemplate = instanceTemplate;
    this.mappedClass = null;
    this.idxByName = arrayToObject(indexes, function (index) { return [index.name, index]; });
}
function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
}
function getNativeGetDatabaseNamesFn(indexedDB) {
    var fn = indexedDB && (indexedDB.getDatabaseNames || indexedDB.webkitGetDatabaseNames);
    return fn && fn.bind(indexedDB);
}
// Export Error classes
props(Dexie, fullNameExceptions); // Dexie.XXXError = class XXXError {...};
//
// Static methods and properties
// 
props(Dexie, {
    //
    // Static delete() method.
    //
    delete: function (databaseName) {
        var db = new Dexie(databaseName), promise = db.delete();
        promise.onblocked = function (fn) {
            db.on("blocked", fn);
            return this;
        };
        return promise;
    },
    //
    // Static exists() method.
    //
    exists: function (name) {
        return new Dexie(name).open().then(function (db) {
            db.close();
            return true;
        }).catch(Dexie.NoSuchDatabaseError, function () { return false; });
    },
    //
    // Static method for retrieving a list of all existing databases at current host.
    //
    getDatabaseNames: function (cb) {
        var getDatabaseNames = getNativeGetDatabaseNamesFn(Dexie.dependencies.indexedDB);
        return getDatabaseNames ? new Promise(function (resolve, reject) {
            var req = getDatabaseNames();
            req.onsuccess = function (event) {
                resolve(slice(event.target.result, 0)); // Converst DOMStringList to Array<String>
            };
            req.onerror = eventRejectHandler(reject);
        }).then(cb) : dbNamesDB.dbnames.toCollection().primaryKeys(cb);
    },
    defineClass: function () {
        // Default constructor able to copy given properties into this object.
        function Class(properties) {
            /// <param name="properties" type="Object" optional="true">Properties to initialize object with.
            /// </param>
            if (properties)
                extend(this, properties);
        }
        return Class;
    },
    applyStructure: applyStructure,
    ignoreTransaction: function (scopeFunc) {
        // In case caller is within a transaction but needs to create a separate transaction.
        // Example of usage:
        //
        // Let's say we have a logger function in our app. Other application-logic should be unaware of the
        // logger function and not need to include the 'logentries' table in all transaction it performs.
        // The logging should always be done in a separate transaction and not be dependant on the current
        // running transaction context. Then you could use Dexie.ignoreTransaction() to run code that starts a new transaction.
        //
        //     Dexie.ignoreTransaction(function() {
        //         db.logentries.add(newLogEntry);
        //     });
        //
        // Unless using Dexie.ignoreTransaction(), the above example would try to reuse the current transaction
        // in current Promise-scope.
        //
        // An alternative to Dexie.ignoreTransaction() would be setImmediate() or setTimeout(). The reason we still provide an
        // API for this because
        //  1) The intention of writing the statement could be unclear if using setImmediate() or setTimeout().
        //  2) setTimeout() would wait unnescessary until firing. This is however not the case with setImmediate().
        //  3) setImmediate() is not supported in the ES standard.
        //  4) You might want to keep other PSD state that was set in a parent PSD, such as PSD.letThrough.
        return PSD.trans ?
            usePSD(PSD.transless, scopeFunc) : // Use the closest parent that was non-transactional.
            scopeFunc(); // No need to change scope because there is no ongoing transaction.
    },
    vip: function (fn) {
        // To be used by subscribers to the on('ready') event.
        // This will let caller through to access DB even when it is blocked while the db.ready() subscribers are firing.
        // This would have worked automatically if we were certain that the Provider was using Dexie.Promise for all asyncronic operations. The promise PSD
        // from the provider.connect() call would then be derived all the way to when provider would call localDatabase.applyChanges(). But since
        // the provider more likely is using non-promise async APIs or other thenable implementations, we cannot assume that.
        // Note that this method is only useful for on('ready') subscribers that is returning a Promise from the event. If not using vip()
        // the database could deadlock since it wont open until the returned Promise is resolved, and any non-VIPed operation started by
        // the caller will not resolve until database is opened.
        return newScope(function () {
            PSD.letThrough = true; // Make sure we are let through if still blocking db due to onready is firing.
            return fn();
        });
    },
    async: function (generatorFn) {
        return function () {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== 'function')
                    return Promise.resolve(rv);
                return rv;
            }
            catch (e) {
                return rejection(e);
            }
        };
    },
    spawn: function (generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== 'function')
                return Promise.resolve(rv);
            return rv;
        }
        catch (e) {
            return rejection(e);
        }
    },
    // Dexie.currentTransaction property
    currentTransaction: {
        get: function () { return PSD.trans || null; }
    },
    waitFor: function (promiseOrFunction, optionalTimeout) {
        // If a function is provided, invoke it and pass the returning value to Transaction.waitFor()
        var promise = Promise.resolve(typeof promiseOrFunction === 'function' ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction)
            .timeout(optionalTimeout || 60000); // Default the timeout to one minute. Caller may specify Infinity if required.       
        // Run given promise on current transaction. If no current transaction, just return a Dexie promise based
        // on given value.
        return PSD.trans ? PSD.trans.waitFor(promise) : promise;
    },
    // Export our Promise implementation since it can be handy as a standalone Promise implementation
    Promise: Promise,
    // Dexie.debug proptery:
    // Dexie.debug = false
    // Dexie.debug = true
    // Dexie.debug = "dexie" - don't hide dexie's stack frames.
    debug: {
        get: function () { return debug; },
        set: function (value) {
            setDebug(value, value === 'dexie' ? function () { return true; } : dexieStackFrameFilter);
        }
    },
    // Export our derive/extend/override methodology
    derive: derive,
    extend: extend,
    props: props,
    override: override,
    // Export our Events() function - can be handy as a toolkit
    Events: Events,
    // Utilities
    getByKeyPath: getByKeyPath,
    setByKeyPath: setByKeyPath,
    delByKeyPath: delByKeyPath,
    shallowClone: shallowClone,
    deepClone: deepClone,
    getObjectDiff: getObjectDiff,
    asap: asap,
    maxKey: maxKey,
    minKey: minKey,
    // Addon registry
    addons: [],
    // Global DB connection list
    connections: connections,
    MultiModifyError: exceptions.Modify,
    errnames: errnames,
    // Export other static classes
    IndexSpec: IndexSpec,
    TableSchema: TableSchema,
    //
    // Dependencies
    //
    // These will automatically work in browsers with indexedDB support, or where an indexedDB polyfill has been included.
    //
    // In node.js, however, these properties must be set "manually" before instansiating a new Dexie().
    // For node.js, you need to require indexeddb-js or similar and then set these deps.
    //
    dependencies: (function () {
        try {
            return {
                // Required:
                indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
                IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
            };
        }
        catch (e) {
            return {
                indexedDB: null,
                IDBKeyRange: null
            };
        }
    })(),
    // API Version Number: Type Number, make sure to always set a version number that can be comparable correctly. Example: 0.9, 0.91, 0.92, 1.0, 1.01, 1.1, 1.2, 1.21, etc.
    semVer: DEXIE_VERSION,
    version: DEXIE_VERSION.split('.')
        .map(function (n) { return parseInt(n); })
        .reduce(function (p, c, i) { return p + (c / Math.pow(10, i * 2)); }),
    // https://github.com/dfahlander/Dexie.js/issues/186
    // typescript compiler tsc in mode ts-->es5 & commonJS, will expect require() to return
    // x.default. Workaround: Set Dexie.default = Dexie.
    default: Dexie,
    // Make it possible to import {Dexie} (non-default import)
    // Reason 1: May switch to that in future.
    // Reason 2: We declare it both default and named exported in d.ts to make it possible
    // to let addons extend the Dexie interface with Typescript 2.1 (works only when explicitely
    // exporting the symbol, not just default exporting)
    Dexie: Dexie
});
// Map DOMErrors and DOMExceptions to corresponding Dexie errors. May change in Dexie v2.0.
Promise.rejectionMapper = mapError;
// Initialize dbNamesDB (won't ever be opened on chromium browsers')
dbNamesDB = new Dexie('__dbnames');
dbNamesDB.version(1).stores({ dbnames: 'name' });
(function () {
    // Migrate from Dexie 1.x database names stored in localStorage:
    var DBNAMES = 'Dexie.DatabaseNames';
    try {
        if (typeof localStorage !== undefined && _global.document !== undefined) {
            // Have localStorage and is not executing in a worker. Lets migrate from Dexie 1.x.
            JSON.parse(localStorage.getItem(DBNAMES) || "[]")
                .forEach(function (name) { return dbNamesDB.dbnames.put({ name: name }).catch(nop); });
            localStorage.removeItem(DBNAMES);
        }
    }
    catch (_e) { }
})();

/* harmony default export */ __webpack_exports__["a"] = (Dexie);
//# sourceMappingURL=dexie.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10), __webpack_require__(334).setImmediate))

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(335);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(336)))

/***/ }),
/* 336 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        name: 'Dragonfly intra-group',
        spec: [
            {
                aggregate: 'router_rank',
                project: 'local_links',
                vmap: {
                    color: 'traffic',
                },
                colors: 'Blues'
            },
            {
                aggregate: 'router_port',
                project: 'global_links',
                vmap: {
                    color: 'traffic',
                },
                colors: ["#eee", 'purple']
            },
            {
                aggregate: 'router_port',
                project: 'terminals',
                vmap: {
                    color: 'data_size'
                },
                colors: ["#eee", 'teal']
            }
        ]
    },
    {
        name: 'Dragonfly inter-group',
        spec: [
            {
                aggregate: 'group_id',
                project: 'global_links',
                binMax: 9,
                vmap: {
                    color: 'traffic'
                },
                colors: ["#eee", 'purple'],
            },
            {
                aggregate: 'router_port',
                project: 'local_links',
                vmap: {
                    color: 'traffic'
                },
                colors: ["steelblue", 'red'],
            },
            {
                project: 'terminals',
                aggregate: 'router_port',
                vmap: {
                    color: 'data_size'
                },
                colors: ["#eee", 'teal']
            }
        ]
    }
]);

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        name: 'AMG on Dragonfly Adaptive',
        path: '/codes-data/tutorial/dfly-2550-adaptive-amg-1728',
        topology: 'Dragonfly',
        groups: 51,
        routers: 510,
        terminals: 2550
    },
    {
        name: 'Dragonfly Dally Uniform Random Traffic',
        path: '/codes-data/tutorial/dfly-dally-rand',
        topology: 'Dragonfly 1-D',
        groups: 65,
        routers: 1040,
        terminals: 8320,
        localLinkPerRouter: 17,
        globalLinkPerRouter: 8
    },
    // {
    //     name: 'Dragonfly Plus Uniform Random Traffic',
    //     path: '/codes-data/tutorial/dfly-plus-rand',
    //     topology: 'Dragonfly Plus',
    //     groups: 33,
    //     routers: 1056,
    //     terminals: 8448,
    //     localLinkPerRouter: 16,
    //     globalLinkPerRouter: 16
    // },
    // {
    //     tag: 'AMR Boxlib on Dragonfly Adaptive',
    //     path: 'dfly-2550-adaptive-amr',
    //     topology: 'Dragonfly',
    //     groups: 51,
    //     routers: 510,
    //     terminals: 2550
    // },
    {
        name: 'Dragonfly Adaptive MiniFE',
        path: '/codes-data/tutorial/dfly-2550-adaptive-minife',
        topology: 'Dragonfly',
        groups: 51,
        routers: 510,
        terminals: 2550
    },
    // {
    //     tag: 'Random Group Placement Multi-Apps on Dfly',
    //     path: '/codes-data/tutorial/dfly-5k-mapp-group',
    //     topology: 'Dragonfly',
    //     groups: 73,
    //     routers: 876,
    //     terminals: 5256,
    //     jobAllocation: 'workloads.conf',
    //     jobs: ['AMG', 'AMR Boxlib', 'MiniFE']
    // },
    // {
    //     tag: 'Random Router Placement Multi-Apps on Dfly',
    //     path: '/codes-data/tutorial/dfly-5k-mapp-router',
    //     topology: 'Dragonfly',
    //     groups: 73,
    //     routers: 876,
    //     terminals: 5256,
    //     jobAllocation: 'workloads.conf',
    //     jobs: ['AMG', 'AMR Boxlib', 'MiniFE']
    // },
    // {
    //     tag: 'Hybird Placement Multi-Apps on Dfly',
    //     path: 'dfly-5k-mapp-hybrid',
    //     topology: 'Dragonfly',
    //     groups: 73,
    //     routers: 876,
    //     terminals: 5256,
    //     jobAllocation: './workloads.conf',
    //     jobs: ['AMG', 'AMR Boxlib', 'MiniFE']
    // },
]);


/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_p6__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p6_solo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p6_solo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p6_solo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_dragonfly_custom__ = __webpack_require__(26);




const ajax = __WEBPACK_IMPORTED_MODULE_0_p6__["a" /* default */].ajax;

function loadData(arg) {
    const URL =  arg.path || arg.folder;

    var datafiles = [
        {url: URL + "/dragonfly-cn-stats", dataType: "text"},
        {url: URL + "/dragonfly-link-stats", dataType: "text"}
    ];

    var numJobs = 1;

    if(arg.hasOwnProperty('jobAllocation')) {
        datafiles.push({url: URL + '/' +arg.jobAllocation, dataType: "text"});
    }

    return ajax.getAll(datafiles).then(function(text){
        return new Promise(function(resolve, reject) {
            return resolve(text);
        })
    });
}



/***/ })
/******/ ]);
//# sourceMappingURL=codes-netvis.js.map