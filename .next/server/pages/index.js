module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/amandaFACE.png":
/*!***********************************!*\
  !*** ./src/assets/amandaFACE.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/amandaFACE-6f56474c8d9990b55041707ed6d6bb56.png";

/***/ }),

/***/ "./src/assets/amandaP1.jpeg":
/*!**********************************!*\
  !*** ./src/assets/amandaP1.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/amandaP1-82ff21e95cc250a8a71d92ca878746b3.jpeg";

/***/ }),

/***/ "./src/assets/amandabought.jpeg":
/*!**************************************!*\
  !*** ./src/assets/amandabought.jpeg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/amandabought-bc6cba5778e312c1abc223669043b11a.jpeg";

/***/ }),

/***/ "./src/assets/amandapastel.jpeg":
/*!**************************************!*\
  !*** ./src/assets/amandapastel.jpeg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/amandapastel-93760b6f16a624bab369fb5be22fad06.jpeg";

/***/ }),

/***/ "./src/assets/arrowEven.svg":
/*!**********************************!*\
  !*** ./src/assets/arrowEven.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC40ODEyMDEgMTAuMjU3MUMwLjQ4MTIwMSAxMC4yNTcxIDkyLjc4MTIgODEuNzg0NyAxOTUuNDgxIDEwLjI1NzEiIHN0cm9rZT0iI0MyQ0JERSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPgo8cGF0aCBkPSJNMTgwLjcgMy40NzQ1NUMxODAuNyAzLjQ3NDU1IDE5OS44MTUgLTIuMDUxNzcgMjAxLjYzNyA0LjIwOTE2QzIwMy40NTkgMTAuNDcwMSAyMDIuMDkzIDE2Ljk0NDQgMTk2LjE3NiAyNS44MTQyIiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/arrowOdd.svg":
/*!*********************************!*\
  !*** ./src/assets/arrowOdd.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC45OTk3NTYgMzIuNzE5NUMwLjk5OTc1NiAzMi43MTk1IDkzLjI5OTggLTM4LjgwODEgMTk2IDMyLjcxOTUiIHN0cm9rZT0iI0MyQ0JERSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPgo8cGF0aCBkPSJNMTgxLjIxOSAzOS40OTc2QzE4MS4yMTkgMzkuNDk3NiAyMDAuMzM0IDQ1LjAyNCAyMDIuMTU2IDM4Ljc2M0MyMDMuOTc4IDMyLjUwMTkgMjAyLjYxMSAyNi4wMjc1IDE5Ni42OTQgMTcuMTU3NSIgc3Ryb2tlPSIjQzJDQkRFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/feature/partnership.svg":
/*!********************************************!*\
  !*** ./src/assets/feature/partnership.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA1IiB2aWV3Qm94PSIwIDAgOTUgMTA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuNDk5OSAxNy45OTk5QzYyLjEzNTUgMTcuOTk5OSA3My45OTk5IDI5Ljg2NDQgNzMuOTk5OSA0NC40OTk5QzczLjk5OTkgNTkuMTM1MyA2Mi4xMzU1IDcwLjk5OTkgNDcuNDk5OSA3MC45OTk5QzMyLjg2NDQgNzAuOTk5OSAyMSA1OS4xMzUzIDIxIDQ0LjQ5OTlDMjEgMjkuODY0NCAzMi44NjQ0IDE3Ljk5OTkgNDcuNDk5OSAxNy45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjQ5OTkgMTcuOTk5OUM2Mi4xMzU1IDE3Ljk5OTkgNzMuOTk5OSAyOS44NjQ0IDczLjk5OTkgNDQuNDk5OUM3My45OTk5IDU5LjEzNTMgNjIuMTM1NSA3MC45OTk5IDQ3LjQ5OTkgNzAuOTk5OUMzMi44NjQ0IDcwLjk5OTkgMjEgNTkuMTM1MyAyMSA0NC40OTk5QzIxIDI5Ljg2NDQgMzIuODY0NCAxNy45OTk5IDQ3LjQ5OTkgMTcuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzIDAuOTk5OTM2SDUyLjk5OTlDNjkuNTY4NSAwLjk5OTkzNiA4Mi45OTk5IDE0LjQzMTEgODIuOTk5OSAzMC45OTk5VjQwLjk5OTlDODIuOTk5OSA1Ny41NjgyIDY5LjU2ODUgNzAuOTk5OCA1Mi45OTk5IDcwLjk5OThINDNDMjYuNDMxNSA3MC45OTk4IDEyLjk5OTkgNTcuNTY4MiAxMi45OTk5IDQwLjk5OTlWMzAuOTk5OUMxMi45OTk5IDE0LjQzMTEgMjYuNDMxNSAwLjk5OTkzNiA0MyAwLjk5OTkzNloiIGZpbGw9IiNGRjQzNjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAwLjk5OTkzNkg1Mi45OTk5QzY5LjU2ODUgMC45OTk5MzYgODIuOTk5OSAxNC40MzExIDgyLjk5OTkgMzAuOTk5OVY0MC45OTk5QzgyLjk5OTkgNTcuNTY4MiA2OS41Njg1IDcwLjk5OTggNTIuOTk5OSA3MC45OTk4SDQzQzI2LjQzMTUgNzAuOTk5OCAxMi45OTk5IDU3LjU2ODIgMTIuOTk5OSA0MC45OTk5VjMwLjk5OTlDMTIuOTk5OSAxNC40MzExIDI2LjQzMTUgMC45OTk5MzYgNDMgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTEuNDMyMiA0MS42Mzk4QzUxLjY0NDEgNDEuNDI0NyA1MS43NTAyIDQxLjE3MDkgNTEuNzUwMiA0MC44Nzc0VjM4LjE2ODhINjNWNDYuMjk1MkM2MyA0Ny4wMzkyIDYyLjczNzkgNDcuNjc3NCA2Mi4yMTMyIDQ4LjIwNzVDNjEuNjg4NyA0OC43MzgxIDYxLjA1ODEgNDkuMDAzMiA2MC4zMjE2IDQ5LjAwMzJIMzUuNjc4N0MzNC45NDIgNDkuMDAzMiAzNC4zMTE0IDQ4LjczODEgMzMuNzg2OSA0OC4yMDc1QzMzLjI2MjIgNDcuNjc3NCAzMyA0Ny4wMzkyIDMzIDQ2LjI5NTJWMzguMTY4OEg0NC4yNVY0MC44Nzc0QzQ0LjI1IDQxLjE3MDkgNDQuMzU2MSA0MS40MjQ3IDQ0LjU2ODIgNDEuNjM5OEM0NC43ODAyIDQxLjg1MzcgNDUuMDMxMyA0MS45NjEzIDQ1LjMyMTYgNDEuOTYxM0g1MC42Nzg3QzUwLjk2ODggNDEuOTYxMyA1MS4yMjAxIDQxLjg1MzcgNTEuNDMyMiA0MS42Mzk4Wk01MC4xNDMxIDM4LjE2ODhINDUuODU3MVY0MC4zMzU1SDUwLjE0MzFWMzguMTY4OFpNNjIuMjEzMiAyOC4xMzAxQzYxLjY4ODcgMjcuNTk4OSA2MS4wNTgxIDI3LjMzMzkgNjAuMzIxNiAyNy4zMzM5SDU0LjQyODVWMjQuNjI1M0M1NC40Mjg1IDI0LjE3MzcgNTQuMjcyNCAyMy43OTAzIDUzLjk1OTggMjMuNDczN0M1My42NDc1IDIzLjE1ODYgNTMuMjY3OCAyMyA1Mi44MjE2IDIzSDQzLjE3ODdDNDIuNzMyMyAyMyA0Mi4zNTI5IDIzLjE1ODYgNDIuMDQwNCAyMy40NzM3QzQxLjcyNzggMjMuNzg5OCA0MS41NzE2IDI0LjE3MzcgNDEuNTcxNiAyNC42MjUzVjI3LjMzMzlIMzUuNjc4N0MzNC45NDIgMjcuMzMzOSAzNC4zMTE0IDI3LjU5ODkgMzMuNzg2OSAyOC4xMzAxQzMzLjI2MjIgMjguNjU5NyAzMyAyOS4yOTczIDMzIDMwLjA0MjVWMzYuNTQzNUg2M1YzMC4wNDI1QzYzIDI5LjI5NzMgNjIuNzM3OSAyOC42NTk3IDYyLjIxMzIgMjguMTMwMVpNNTIuMjg1OCAyNy4zMzM5SDQzLjcxNDRWMjUuMTY2N0g1Mi4yODU4VjI3LjMzMzlaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSItMy4wNTE3NmUtMDUiIHk9IjkuOTk5ODgiIHdpZHRoPSI5NSIgaGVpZ2h0PSI5NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjEzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwLjUiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDAuMjY2NjY3IDAgMCAwIDAgMC4zNDExNzYgMCAwIDAgMC4zIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjYzNTEiIHkxPSIxMDMuNjM1IiB4Mj0iMTA2LjYzNSIgeTI9IjQwLjM2NDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4MDc1OSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQzRFOUMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iNTMuNDEzMiIgeTE9IjExMy40MTMiIHgyPSIxMjUuNDEzIiB5Mj0iMzAuNTg2OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY0MTZDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEIyQiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/feature/performance.svg":
/*!********************************************!*\
  !*** ./src/assets/feature/performance.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTUgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuNSAxNi45OTk5QzYyLjEzNTUgMTYuOTk5OSA3My45OTk5IDI4Ljg2NDQgNzMuOTk5OSA0My40OTk5QzczLjk5OTkgNTguMTM1MyA2Mi4xMzU1IDY5Ljk5OTkgNDcuNSA2OS45OTk5QzMyLjg2NDQgNjkuOTk5OSAyMSA1OC4xMzUzIDIxIDQzLjQ5OTlDMjEgMjguODY0NCAzMi44NjQ0IDE2Ljk5OTkgNDcuNSAxNi45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjUgMTYuOTk5OUM2Mi4xMzU1IDE2Ljk5OTkgNzMuOTk5OSAyOC44NjQ0IDczLjk5OTkgNDMuNDk5OUM3My45OTk5IDU4LjEzNTMgNjIuMTM1NSA2OS45OTk5IDQ3LjUgNjkuOTk5OUMzMi44NjQ0IDY5Ljk5OTkgMjEgNTguMTM1MyAyMSA0My40OTk5QzIxIDI4Ljg2NDQgMzIuODY0NCAxNi45OTk5IDQ3LjUgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyIDAuOTk5OTM2SDUxLjk5OTlDNjguNTY4NSAwLjk5OTkzNiA4MS45OTk5IDE0LjQzMTEgODEuOTk5OSAzMC45OTk5VjQwLjk5OTlDODEuOTk5OSA1Ny41NjgyIDY4LjU2ODUgNzAuOTk5OCA1MS45OTk5IDcwLjk5OThINDJDMjUuNDMxNSA3MC45OTk4IDExLjk5OTkgNTcuNTY4MiAxMS45OTk5IDQwLjk5OTlWMzAuOTk5OUMxMS45OTk5IDE0LjQzMTEgMjUuNDMxNSAwLjk5OTkzNiA0MiAwLjk5OTkzNloiIGZpbGw9IiNGRjQzNjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MiAwLjk5OTkzNkg1MS45OTk5QzY4LjU2ODUgMC45OTk5MzYgODEuOTk5OSAxNC40MzExIDgxLjk5OTkgMzAuOTk5OVY0MC45OTk5QzgxLjk5OTkgNTcuNTY4MiA2OC41Njg1IDcwLjk5OTggNTEuOTk5OSA3MC45OTk4SDQyQzI1LjQzMTUgNzAuOTk5OCAxMS45OTk5IDU3LjU2ODIgMTEuOTk5OSA0MC45OTk5VjMwLjk5OTlDMTEuOTk5OSAxNC40MzExIDI1LjQzMTUgMC45OTk5MzYgNDIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuOTQ5MiAzMS4wMDI2QzU1Ljg1NzUgMzAuNzk3MiA1NS42NjAyIDMwLjY2NTUgNTUuNDQyOSAzMC42NjU1SDQ4LjgyMDlMNTUuMzU2MyAxOS44OTRDNTUuNDY1MiAxOS43MTQ0IDU1LjQ3MTggMTkuNDg3IDU1LjM3MzUgMTkuMzAxNUM1NS4yNzUyIDE5LjExNDQgNTUuMDg3NCAxOC45OTg4IDU0Ljg4NCAxOC45OTg4SDQ1Ljk0MjlDNDUuNzMxMiAxOC45OTg4IDQ1LjUzNzggMTkuMTIzNiA0NS40NDI4IDE5LjMyMTRMMzcuMDYwNiAzNi44MjE0QzM2Ljk3NCAzNy4wMDIxIDM2Ljk4MzUgMzcuMjE2NiAzNy4wODUxIDM3LjM4ODZDMzcuMTg3NCAzNy41NjA3IDM3LjM2NjcgMzcuNjY1IDM3LjU2MDcgMzcuNjY1SDQzLjMwN0wzNy4wNDU1IDUzLjE4OTFDMzYuOTM4NyA1My40NTQ3IDM3LjAzMzcgNTMuNzYyMyAzNy4yNjkgNTMuOTEzM0MzNy4zNTk0IDUzLjk3MDMgMzcuNDYgNTMuOTk4OCAzNy41NjAxIDUzLjk5ODhDMzcuNzIwNCA1My45OTg4IDM3Ljg3ODYgNTMuOTI2OCAzNy45ODgxIDUzLjc5MThMNTUuODcwMyAzMS42MjUyQzU2LjAxMDYgMzEuNDUxNSA1Ni4wNDA3IDMxLjIwODUgNTUuOTQ5MiAzMS4wMDI2WiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTMuMDUxNzZlLTA1IiB5PSI4Ljk5OTg4IiB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxMyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuODk4MDM5IDAgMCAwIDAgMC4xMTc2NDcgMCAwIDAgMCAwLjQzNTI5NCAwIDAgMCAwLjMgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNTEuNjM1MSIgeTE9IjEwMi42MzUiIHgyPSIxMDYuNjM1IiB5Mj0iMzkuMzY0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjgwNzU5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI1Mi40MTMyIiB5MT0iMTEzLjQxMyIgeDI9IjEyNC40MTMiIHkyPSIzMC41ODY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkM0RTlDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/feature/subscription.svg":
/*!*********************************************!*\
  !*** ./src/assets/feature/subscription.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTUgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuNDk5OSAxNi45OTk5QzYyLjEzNTQgMTYuOTk5OSA3NCAyOC44NjQ0IDc0IDQzLjQ5OTlDNzQgNTguMTM1MyA2Mi4xMzU0IDY5Ljk5OTkgNDcuNDk5OSA2OS45OTk5QzMyLjg2NDQgNjkuOTk5OSAyMSA1OC4xMzUzIDIxIDQzLjQ5OTlDMjEgMjguODY0NCAzMi44NjQ0IDE2Ljk5OTkgNDcuNDk5OSAxNi45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPgo8L2c+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuOTk5OSAwLjk5OTkzNkg1MkM2OC41Njg1IDAuOTk5OTM2IDgyIDE0LjQzMTEgODIgMzAuOTk5OVY0MC45OTk5QzgyIDU3LjU2ODIgNjguNTY4NSA3MC45OTk4IDUyIDcwLjk5OThINDEuOTk5OUMyNS40MzE0IDcwLjk5OTggMTEuOTk5OSA1Ny41NjgyIDExLjk5OTkgNDAuOTk5OVYzMC45OTk5QzExLjk5OTkgMTQuNDMxMSAyNS40MzE0IDAuOTk5OTM2IDQxLjk5OTkgMC45OTk5MzZaIiBmaWxsPSIjRkY0MzYxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuOTk5OSAwLjk5OTkzNkg1MkM2OC41Njg1IDAuOTk5OTM2IDgyIDE0LjQzMTEgODIgMzAuOTk5OVY0MC45OTk5QzgyIDU3LjU2ODIgNjguNTY4NSA3MC45OTk4IDUyIDcwLjk5OThINDEuOTk5OUMyNS40MzE0IDcwLjk5OTggMTEuOTk5OSA1Ny41NjgyIDExLjk5OTkgNDAuOTk5OVYzMC45OTk5QzExLjk5OTkgMTQuNDMxMSAyNS40MzE0IDAuOTk5OTM2IDQxLjk5OTkgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQuNTQ0MSAzMS44NTg1QzY0LjU0OTggMzEuOTYwNyA2NC41NDI0IDMyLjA2NDQgNjQuNTE2OCAzMi4xNjg3TDYyLjIzNDYgNDEuMzM0OEM2Mi4xMTk0IDQxLjc5NjEgNjEuNzA3MiA0Mi4xMjE0IDYxLjIzMzQgNDIuMTI0MUw0Ny41Mzk5IDQyLjE5MzRDNDcuNTM4MiA0Mi4xOTM0IDQ3LjUzNjQgNDIuMTkzNCA0Ny41MzQ2IDQyLjE5MzRIMzMuODQxMUMzMy4zNjQ2IDQyLjE5MzQgMzIuOTQ5NiA0MS44NjcxIDMyLjgzNDYgNDEuNDAzMUwzMC41NTIzIDMyLjIwMkMzMC41MjU5IDMyLjA5NTYgMzAuNTE4NCAzMS45ODg2IDMwLjUyNSAzMS44ODM4QzI5LjY0MjEgMzEuNjA0NyAyOSAzMC43NzUyIDI5IDI5Ljc5NzdDMjkgMjguNTkwOCAyOS45NzcyIDI3LjYwOTYgMzEuMTc4NSAyNy42MDk2QzMyLjM3OTggMjcuNjA5NiAzMy4zNTcgMjguNTkwOCAzMy4zNTcgMjkuNzk3N0MzMy4zNTcgMzAuNDc2OCAzMy4wNDcgMzEuMDg0MyAzMi41NjE2IDMxLjQ4NjRMMzUuNDE5IDM0LjM3NjhDMzYuMTQxMiAzNS4xMDc0IDM3LjE0MzIgMzUuNTI2OCAzOC4xNjg0IDM1LjUyNjhDMzkuMzgwNyAzNS41MjY4IDQwLjUzNjQgMzQuOTQ4MyA0MS4yNjQzIDMzLjk4TDQ1Ljk2MDIgMjcuNzMyMUM0NS41NjU4IDI3LjMzNjUgNDUuMzIxNCAyNi43ODk3IDQ1LjMyMTQgMjYuMTg2NUM0NS4zMjE0IDI0Ljk4IDQ2LjI5ODYgMjMuOTk4MyA0Ny40OTk5IDIzLjk5ODNDNDguNzAxMiAyMy45OTgzIDQ5LjY3ODQgMjQuOTggNDkuNjc4NCAyNi4xODY1QzQ5LjY3ODQgMjYuNzcxNCA0OS40NDcyIDI3LjMwMiA0OS4wNzMzIDI3LjY5NUM0OS4wNzQ1IDI3LjY5NjcgNDkuMDc2MSAyNy42OTgzIDQ5LjA3NzMgMjcuNjk5OUw1My43MzkxIDMzLjk2NDlDNTQuNDY2OCAzNC45NDI0IDU1LjYyNjYgMzUuNTI2OCA1Ni44NDIzIDM1LjUyNjhDNTcuODc3IDM1LjUyNjggNTguODUgMzUuMTIxOSA1OS41ODE0IDM0LjM4NzVMNjIuNDU2OCAzMS40OTk5QzYxLjk2MTIgMzEuMDk4MyA2MS42NDI5IDMwLjQ4NTQgNjEuNjQyOSAyOS43OTc3QzYxLjY0MjkgMjguNTkwOCA2Mi42MjAyIDI3LjYwOTYgNjMuODIxNSAyNy42MDk2QzY1LjAyMjcgMjcuNjA5NiA2NiAyOC41OTA4IDY2IDI5Ljc5NzdDNjYgMzAuNzQ4OCA2NS4zOTA2IDMxLjU1ODUgNjQuNTQ0MSAzMS44NTg1Wk02Mi4wMTE4IDQ1LjQ1NjlDNjIuMDExOCA0NC44ODIxIDYxLjU0NzMgNDQuNDE1NSA2MC45NzQ0IDQ0LjQxNTVIMzQuMTQwOEMzMy41Njc5IDQ0LjQxNTUgMzMuMTAzNCA0NC44ODIxIDMzLjEwMzQgNDUuNDU2OVY0Ny45NTY5QzMzLjEwMzQgNDguNTMyNyAzMy41Njc5IDQ4Ljk5ODggMzQuMTQwOCA0OC45OTg4SDYwLjk3NDRDNjEuNTQ3MyA0OC45OTg4IDYyLjAxMTggNDguNTMyNyA2Mi4wMTE4IDQ3Ljk1NjlWNDUuNDU2OVoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjEuMTQ0NDFlLTA1IiB5PSI4Ljk5OTg4IiB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxMyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuOTkyMTU3IDAgMCAwIDAgMC4zNDUwOTggMCAwIDAgMCAwLjQ0NzA1OSAwIDAgMCAwLjMgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNTIuNDEzMiIgeTE9IjExMy40MTMiIHgyPSIxMjQuNDEzIiB5Mj0iMzAuNTg2OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY1ODU4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4NTdBNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/feature/support.svg":
/*!****************************************!*\
  !*** ./src/assets/feature/support.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA1IiB2aWV3Qm94PSIwIDAgOTUgMTA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuNDk5OSAxNy45OTk5QzYyLjEzNTQgMTcuOTk5OSA3My45OTk5IDI5Ljg2NDQgNzMuOTk5OSA0NC40OTk5QzczLjk5OTkgNTkuMTM1MyA2Mi4xMzU0IDcwLjk5OTkgNDcuNDk5OSA3MC45OTk5QzMyLjg2NDQgNzAuOTk5OSAyMC45OTk5IDU5LjEzNTMgMjAuOTk5OSA0NC40OTk5QzIwLjk5OTkgMjkuODY0NCAzMi44NjQ0IDE3Ljk5OTkgNDcuNDk5OSAxNy45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjQ5OTkgMTcuOTk5OUM2Mi4xMzU0IDE3Ljk5OTkgNzMuOTk5OSAyOS44NjQ0IDczLjk5OTkgNDQuNDk5OUM3My45OTk5IDU5LjEzNTMgNjIuMTM1NCA3MC45OTk5IDQ3LjQ5OTkgNzAuOTk5OUMzMi44NjQ0IDcwLjk5OTkgMjAuOTk5OSA1OS4xMzUzIDIwLjk5OTkgNDQuNDk5OUMyMC45OTk5IDI5Ljg2NDQgMzIuODY0NCAxNy45OTk5IDQ3LjQ5OTkgMTcuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjk5OTkgMC45OTk5MzZINTNDNjkuNTY4NSAwLjk5OTkzNiA4MyAxNC40MzExIDgzIDMwLjk5OTlWNDAuOTk5OUM4MyA1Ny41NjgyIDY5LjU2ODUgNzAuOTk5OCA1MyA3MC45OTk4SDQyLjk5OTlDMjYuNDMxNCA3MC45OTk4IDEyLjk5OTkgNTcuNTY4MiAxMi45OTk5IDQwLjk5OTlWMzAuOTk5OUMxMi45OTk5IDE0LjQzMTEgMjYuNDMxNCAwLjk5OTkzNiA0Mi45OTk5IDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjk5OTkgMC45OTk5MzZINTNDNjkuNTY4NSAwLjk5OTkzNiA4MyAxNC40MzExIDgzIDMwLjk5OTlWNDAuOTk5OUM4MyA1Ny41NjgyIDY5LjU2ODUgNzAuOTk5OCA1MyA3MC45OTk4SDQyLjk5OTlDMjYuNDMxNCA3MC45OTk4IDEyLjk5OTkgNTcuNTY4MiAxMi45OTk5IDQwLjk5OTlWMzAuOTk5OUMxMi45OTk5IDE0LjQzMTEgMjYuNDMxNCAwLjk5OTkzNiA0Mi45OTk5IDAuOTk5OTM2WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYwLjA5OTkgMjEuOTk5NEgzNi45QzM1LjMwNDkgMjEuOTk5NCAzMy45OTk5IDIzLjMwMzcgMzMuOTk5OSAyNC44OTg4VjUwLjk5ODhMMzkuNzk5OSA0NS4xOTg4SDYwLjA5OTlDNjEuNjk1IDQ1LjE5ODggNjIuOTk5OSA0My44OTQgNjIuOTk5OSA0Mi4yOTg4VjI0Ljg5ODhDNjIuOTk5OSAyMy4zMDM3IDYxLjY5NSAyMS45OTk0IDYwLjA5OTkgMjEuOTk5NFoiIGZpbGw9IiNGRUZBRkMiLz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTkuOTE4MjFlLTA1IiB5PSI5Ljk5OTg4IiB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxMyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuOTQ5MDIgMCAwIDAgMCAwLjUwMTk2MSAwIDAgMCAwIDAuMjc0NTEgMCAwIDAgMC4zIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjYzNTEiIHkxPSIxMDMuNjM1IiB4Mj0iMTA2LjYzNSIgeTI9IjQwLjM2NDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4MDc1OSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQzRFOUMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iNTMuNDEzMiIgeTE9IjExMy40MTMiIHgyPSIxMjUuNDEzIiB5Mj0iMzAuNTg2OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjQ2QjQ1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VFQTg0OSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/key-feature/partnership.svg":
/*!************************************************!*\
  !*** ./src/assets/key-feature/partnership.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMjE0MiAxNi45OTk5QzYyLjgzNjcgMTYuOTk5OSA3NC42OTA1IDI4Ljg2NDQgNzQuNjkwNSA0My40OTk5Qzc0LjY5MDUgNTguMTM1MyA2Mi44MzY3IDY5Ljk5OTkgNDguMjE0MiA2OS45OTk5QzMzLjU5MTkgNjkuOTk5OSAyMS43MzgxIDU4LjEzNTMgMjEuNzM4MSA0My40OTk5QzIxLjczODEgMjguODY0NCAzMy41OTE5IDE2Ljk5OTkgNDguMjE0MiAxNi45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4LjIxNDIgMTYuOTk5OUM2Mi44MzY3IDE2Ljk5OTkgNzQuNjkwNSAyOC44NjQ0IDc0LjY5MDUgNDMuNDk5OUM3NC42OTA1IDU4LjEzNTMgNjIuODM2NyA2OS45OTk5IDQ4LjIxNDIgNjkuOTk5OUMzMy41OTE5IDY5Ljk5OTkgMjEuNzM4MSA1OC4xMzUzIDIxLjczODEgNDMuNDk5OUMyMS43MzgxIDI4Ljg2NDQgMzMuNTkxOSAxNi45OTk5IDQ4LjIxNDIgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjcyMDIgMC45OTk5MzZINTIuNzExMkM2OS4yNjQ5IDAuOTk5OTM2IDgyLjY4NDMgMTQuNDMxMSA4Mi42ODQzIDMwLjk5OTlWNDAuOTk5OUM4Mi42ODQzIDU3LjU2ODIgNjkuMjY0OSA3MC45OTk4IDUyLjcxMTIgNzAuOTk5OEg0Mi43MjAyQzI2LjE2NjYgNzAuOTk5OCAxMi43NDcyIDU3LjU2ODIgMTIuNzQ3MiA0MC45OTk5VjMwLjk5OTlDMTIuNzQ3MiAxNC40MzExIDI2LjE2NjYgMC45OTk5MzYgNDIuNzIwMiAwLjk5OTkzNloiIGZpbGw9IiNGRjQzNjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi43MjAyIDAuOTk5OTM2SDUyLjcxMTJDNjkuMjY0OSAwLjk5OTkzNiA4Mi42ODQzIDE0LjQzMTEgODIuNjg0MyAzMC45OTk5VjQwLjk5OTlDODIuNjg0MyA1Ny41NjgyIDY5LjI2NDkgNzAuOTk5OCA1Mi43MTEyIDcwLjk5OThINDIuNzIwMkMyNi4xNjY2IDcwLjk5OTggMTIuNzQ3MiA1Ny41NjgyIDEyLjc0NzIgNDAuOTk5OVYzMC45OTk5QzEyLjc0NzIgMTQuNDMxMSAyNi4xNjY2IDAuOTk5OTM2IDQyLjcyMDIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTEuMTQ0IDQxLjYzNzFDNTEuMzU1OCA0MS40MjIgNTEuNDYxOCA0MS4xNjgyIDUxLjQ2MTggNDAuODc0N1YzOC4xNjYxSDYyLjcwMTVWNDYuMjkyNUM2Mi43MDE1IDQ3LjAzNjUgNjIuNDM5NiA0Ny42NzQ3IDYxLjkxNTQgNDguMjA0OEM2MS4zOTE0IDQ4LjczNTQgNjAuNzYxMiA0OS4wMDA1IDYwLjAyNTUgNDkuMDAwNUgzNS40MDQ3QzM0LjY2ODcgNDkuMDAwNSAzNC4wMzg2IDQ4LjczNTQgMzMuNTE0NSA0OC4yMDQ4QzMyLjk5MDMgNDcuNjc0NyAzMi43Mjg0IDQ3LjAzNjUgMzIuNzI4NCA0Ni4yOTI1VjM4LjE2NjFINDMuOTY4M1Y0MC44NzQ3QzQzLjk2ODMgNDEuMTY4MiA0NC4wNzQzIDQxLjQyMiA0NC4yODYxIDQxLjYzNzFDNDQuNDk4IDQxLjg1MSA0NC43NDg5IDQxLjk1ODYgNDUuMDM4OSA0MS45NTg2SDUwLjM5MTJDNTAuNjgxMSA0MS45NTg2IDUwLjkzMjEgNDEuODUxIDUxLjE0NCA0MS42MzcxWk00OS44NTYxIDM4LjE2NjFINDUuNTczOVY0MC4zMzI4SDQ5Ljg1NjFWMzguMTY2MVpNNjEuOTE1NCAyOC4xMjc0QzYxLjM5MTQgMjcuNTk2MiA2MC43NjEyIDI3LjMzMTIgNjAuMDI1NSAyNy4zMzEySDU0LjEzNzZWMjQuNjIyNkM1NC4xMzc2IDI0LjE3MSA1My45ODE3IDIzLjc4NzYgNTMuNjY5MyAyMy40NzFDNTMuMzU3NCAyMy4xNTU5IDUyLjk3OCAyMi45OTczIDUyLjUzMjIgMjIuOTk3M0g0Mi44OThDNDIuNDUxOSAyMi45OTczIDQyLjA3MjkgMjMuMTU1OSA0MS43NjA2IDIzLjQ3MUM0MS40NDg0IDIzLjc4NzEgNDEuMjkyMyAyNC4xNzEgNDEuMjkyMyAyNC42MjI2VjI3LjMzMTJIMzUuNDA0N0MzNC42Njg3IDI3LjMzMTIgMzQuMDM4NiAyNy41OTYyIDMzLjUxNDUgMjguMTI3NEMzMi45OTAzIDI4LjY1NyAzMi43Mjg0IDI5LjI5NDYgMzIuNzI4NCAzMC4wMzk4VjM2LjU0MDhINjIuNzAxNVYzMC4wMzk4QzYyLjcwMTUgMjkuMjk0NiA2Mi40Mzk2IDI4LjY1NyA2MS45MTU0IDI4LjEyNzRaTTUxLjk5NjkgMjcuMzMxMkg0My40MzMyVjI1LjE2NEg1MS45OTY5VjI3LjMzMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjczODA2OCIgeT0iOSIgd2lkdGg9Ijk0Ljk1MjQiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxMyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAwLjI2NjY2NyAwIDAgMCAwIDAuMzQxMTc2IDAgMCAwIDAuMyAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1Mi4zNDU4IiB5MT0iMTAyLjYzNSIgeDI9IjEwNy4zNTMiIHkyPSIzOS40MTM4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkM0RTlDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjEyNDIiIHkxPSIxMTMuNDEzIiB4Mj0iMTI1LjEzMyIgeTI9IjMwLjY1MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDE2QyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjRCMkIiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/key-feature/performance.svg":
/*!************************************************!*\
  !*** ./src/assets/key-feature/performance.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguNDY2NCAxNi45OTk5QzYzLjA4ODcgMTYuOTk5OSA3NC45NDI1IDI4Ljg2NDQgNzQuOTQyNSA0My40OTk5Qzc0Ljk0MjUgNTguMTM1MyA2My4wODg3IDY5Ljk5OTkgNDguNDY2NCA2OS45OTk5QzMzLjg0MzkgNjkuOTk5OSAyMS45OTAxIDU4LjEzNTMgMjEuOTkwMSA0My40OTk5QzIxLjk5MDEgMjguODY0NCAzMy44NDM5IDE2Ljk5OTkgNDguNDY2NCAxNi45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4LjQ2NjQgMTYuOTk5OUM2My4wODg3IDE2Ljk5OTkgNzQuOTQyNSAyOC44NjQ0IDc0Ljk0MjUgNDMuNDk5OUM3NC45NDI1IDU4LjEzNTMgNjMuMDg4NyA2OS45OTk5IDQ4LjQ2NjQgNjkuOTk5OUMzMy44NDM5IDY5Ljk5OTkgMjEuOTkwMSA1OC4xMzUzIDIxLjk5MDEgNDMuNDk5OUMyMS45OTAxIDI4Ljg2NDQgMzMuODQzOSAxNi45OTk5IDQ4LjQ2NjQgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjk3MjIgMC45OTk5MzZINTIuOTYzMUM2OS41MTY4IDAuOTk5OTM2IDgyLjkzNjIgMTQuNDMxMSA4Mi45MzYyIDMwLjk5OTlWNDAuOTk5OUM4Mi45MzYyIDU3LjU2ODIgNjkuNTE2OCA3MC45OTk4IDUyLjk2MzEgNzAuOTk5OEg0Mi45NzIyQzI2LjQxODUgNzAuOTk5OCAxMi45OTkgNTcuNTY4MiAxMi45OTkgNDAuOTk5OVYzMC45OTk5QzEyLjk5OSAxNC40MzExIDI2LjQxODUgMC45OTk5MzYgNDIuOTcyMiAwLjk5OTkzNloiIGZpbGw9IiNGRjQzNjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi45NzIyIDAuOTk5OTM2SDUyLjk2MzFDNjkuNTE2OCAwLjk5OTkzNiA4Mi45MzYyIDE0LjQzMTEgODIuOTM2MiAzMC45OTk5VjQwLjk5OTlDODIuOTM2MiA1Ny41NjgyIDY5LjUxNjggNzAuOTk5OCA1Mi45NjMxIDcwLjk5OThINDIuOTcyMkMyNi40MTg1IDcwLjk5OTggMTIuOTk5IDU3LjU2ODIgMTIuOTk5IDQwLjk5OTlWMzAuOTk5OUMxMi45OTkgMTQuNDMxMSAyNi40MTg1IDAuOTk5OTM2IDQyLjk3MjIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTYuOTA4IDMxLjAwMjZDNTYuODE2NCAzMC43OTcyIDU2LjYxOTMgMzAuNjY1NSA1Ni40MDIxIDMwLjY2NTVINDkuNzg2MUw1Ni4zMTU2IDE5Ljg5NEM1Ni40MjQ0IDE5LjcxNDQgNTYuNDMxMSAxOS40ODcgNTYuMzMyOSAxOS4zMDE1QzU2LjIzNDcgMTkuMTE0NCA1Ni4wNDcgMTguOTk4OCA1NS44NDM3IDE4Ljk5ODhINDYuOTEwN0M0Ni42OTkyIDE4Ljk5ODggNDYuNTA1OSAxOS4xMjM2IDQ2LjQxMSAxOS4zMjE0TDM4LjAzNjMgMzYuODIxNEMzNy45NDk4IDM3LjAwMjEgMzcuOTU5MyAzNy4yMTY2IDM4LjA2MDggMzcuMzg4NkMzOC4xNjMgMzcuNTYwNyAzOC4zNDIyIDM3LjY2NSAzOC41MzYgMzcuNjY1SDQ0LjI3NzJMMzguMDIxMiA1My4xODkxQzM3LjkxNDYgNTMuNDU0NyAzOC4wMDk1IDUzLjc2MjMgMzguMjQ0NSA1My45MTMzQzM4LjMzNDkgNTMuOTcwMyAzOC40MzU0IDUzLjk5ODggMzguNTM1NCA1My45OTg4QzM4LjY5NTYgNTMuOTk4OCAzOC44NTM2IDUzLjkyNjggMzguOTYzMSA1My43OTE4TDU2LjgyOTIgMzEuNjI1MkM1Ni45Njk0IDMxLjQ1MTUgNTYuOTk5NSAzMS4yMDg1IDU2LjkwOCAzMS4wMDI2WiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMC45OTAxMTIiIHk9IjkiIHdpZHRoPSI5NC45NTI0IiBoZWlnaHQ9Ijk1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iMTMiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjg5ODAzOSAwIDAgMCAwIDAuMTE3NjQ3IDAgMCAwIDAgMC40MzUyOTQgMCAwIDAgMC4zIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUyLjU5NzgiIHkxPSIxMDIuNjM1IiB4Mj0iMTA3LjYwNSIgeTI9IjM5LjQxMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4MDc1OSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQzRFOUMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iNTMuMzc2MSIgeTE9IjExMy40MTMiIHgyPSIxMjUuMzg1IiB5Mj0iMzAuNjUwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjgwNzU5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/key-feature/subscription.svg":
/*!*************************************************!*\
  !*** ./src/assets/key-feature/subscription.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuOTU5NiAxNi45OTk5QzYyLjU4MiAxNi45OTk5IDc0LjQzNTkgMjguODY0NCA3NC40MzU5IDQzLjQ5OTlDNzQuNDM1OSA1OC4xMzUzIDYyLjU4MiA2OS45OTk5IDQ3Ljk1OTYgNjkuOTk5OUMzMy4zMzcyIDY5Ljk5OTkgMjEuNDgzNCA1OC4xMzUzIDIxLjQ4MzQgNDMuNDk5OUMyMS40ODM0IDI4Ljg2NDQgMzMuMzM3MiAxNi45OTk5IDQ3Ljk1OTYgMTYuOTk5OVoiIGZpbGw9IiNGRjQzNjEiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjQ2NTIgMC45OTk5MzZINTIuNDU2NEM2OS4wMTAxIDAuOTk5OTM2IDgyLjQyOTUgMTQuNDMxMSA4Mi40Mjk1IDMwLjk5OTlWNDAuOTk5OUM4Mi40Mjk1IDU3LjU2ODIgNjkuMDEwMSA3MC45OTk4IDUyLjQ1NjQgNzAuOTk5OEg0Mi40NjUyQzI1LjkxMTYgNzAuOTk5OCAxMi40OTIyIDU3LjU2ODIgMTIuNDkyMiA0MC45OTk5VjMwLjk5OTlDMTIuNDkyMiAxNC40MzExIDI1LjkxMTYgMC45OTk5MzYgNDIuNDY1MiAwLjk5OTkzNloiIGZpbGw9IiNGRjQzNjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi40NjUyIDAuOTk5OTM2SDUyLjQ1NjRDNjkuMDEwMSAwLjk5OTkzNiA4Mi40Mjk1IDE0LjQzMTEgODIuNDI5NSAzMC45OTk5VjQwLjk5OTlDODIuNDI5NSA1Ny41NjgyIDY5LjAxMDEgNzAuOTk5OCA1Mi40NTY0IDcwLjk5OThINDIuNDY1MkMyNS45MTE2IDcwLjk5OTggMTIuNDkyMiA1Ny41NjgyIDEyLjQ5MjIgNDAuOTk5OVYzMC45OTk5QzEyLjQ5MjIgMTQuNDMxMSAyNS45MTE2IDAuOTk5OTM2IDQyLjQ2NTIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQuOTg4NiAzMS44NTg1QzY0Ljk5NDMgMzEuOTYwNyA2NC45ODY5IDMyLjA2NDQgNjQuOTYxNCAzMi4xNjg3TDYyLjY4MTEgNDEuMzM0OEM2Mi41NjYxIDQxLjc5NjEgNjIuMTU0MyA0Mi4xMjE0IDYxLjY4MDkgNDIuMTI0MUw0Ny45OTk2IDQyLjE5MzRDNDcuOTk3OSA0Mi4xOTM0IDQ3Ljk5NjIgNDIuMTkzNCA0Ny45OTQ0IDQyLjE5MzRIMzQuMzEzMUMzMy44MzcxIDQyLjE5MzQgMzMuNDIyNCA0MS44NjcxIDMzLjMwNzUgNDEuNDAzMUwzMS4wMjczIDMyLjIwMkMzMS4wMDA5IDMyLjA5NTYgMzAuOTkzNCAzMS45ODg2IDMxLjAwMDEgMzEuODgzOEMzMC4xMTc5IDMxLjYwNDcgMjkuNDc2NCAzMC43NzUyIDI5LjQ3NjQgMjkuNzk3N0MyOS40NzY0IDI4LjU5MDggMzAuNDUyNyAyNy42MDk2IDMxLjY1MjkgMjcuNjA5NkMzMi44NTMxIDI3LjYwOTYgMzMuODI5NCAyOC41OTA4IDMzLjgyOTQgMjkuNzk3N0MzMy44Mjk0IDMwLjQ3NjggMzMuNTE5NyAzMS4wODQzIDMzLjAzNDggMzEuNDg2NEwzNS44ODk2IDM0LjM3NjhDMzYuNjExMiAzNS4xMDc0IDM3LjYxMjMgMzUuNTI2OCAzOC42MzY2IDM1LjUyNjhDMzkuODQ3OCAzNS41MjY4IDQxLjAwMjUgMzQuOTQ4MyA0MS43Mjk3IDMzLjk4TDQ2LjQyMTQgMjcuNzMyMUM0Ni4wMjczIDI3LjMzNjUgNDUuNzgzMiAyNi43ODk3IDQ1Ljc4MzIgMjYuMTg2NUM0NS43ODMyIDI0Ljk4IDQ2Ljc1OTUgMjMuOTk4MyA0Ny45NTk3IDIzLjk5ODNDNDkuMTU5OSAyMy45OTgzIDUwLjEzNjMgMjQuOTggNTAuMTM2MyAyNi4xODY1QzUwLjEzNjMgMjYuNzcxNCA0OS45MDUyIDI3LjMwMiA0OS41MzE3IDI3LjY5NUM0OS41MzI5IDI3LjY5NjcgNDkuNTM0NSAyNy42OTgzIDQ5LjUzNTcgMjcuNjk5OUw1NC4xOTMzIDMzLjk2NDlDNTQuOTIwMyAzNC45NDI0IDU2LjA3OTEgMzUuNTI2OCA1Ny4yOTM3IDM1LjUyNjhDNTguMzI3NSAzNS41MjY4IDU5LjI5OTYgMzUuMTIxOSA2MC4wMzA0IDM0LjM4NzVMNjIuOTAzMiAzMS40OTk5QzYyLjQwODEgMzEuMDk4MyA2Mi4wOSAzMC40ODU0IDYyLjA5IDI5Ljc5NzdDNjIuMDkgMjguNTkwOCA2My4wNjY0IDI3LjYwOTYgNjQuMjY2NiAyNy42MDk2QzY1LjQ2NjggMjcuNjA5NiA2Ni40NDMyIDI4LjU5MDggNjYuNDQzMiAyOS43OTc3QzY2LjQ0MzIgMzAuNzQ4OCA2NS44MzQ0IDMxLjU1ODUgNjQuOTg4NiAzMS44NTg1Wk02Mi40NTg2IDQ1LjQ1NjlDNjIuNDU4NiA0NC44ODIxIDYxLjk5NDUgNDQuNDE1NSA2MS40MjIyIDQ0LjQxNTVIMzQuNjEyNkMzNC4wNDAyIDQ0LjQxNTUgMzMuNTc2MSA0NC44ODIxIDMzLjU3NjEgNDUuNDU2OVY0Ny45NTY5QzMzLjU3NjEgNDguNTMyNyAzNC4wNDAyIDQ4Ljk5ODggMzQuNjEyNiA0OC45OTg4SDYxLjQyMjJDNjEuOTk0NSA0OC45OTg4IDYyLjQ1ODYgNDguNTMyNyA2Mi40NTg2IDQ3Ljk1NjlWNDUuNDU2OVoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAuNDgzNDE4IiB5PSI5IiB3aWR0aD0iOTQuOTUyNCIgaGVpZ2h0PSI5NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjEzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwLjUiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC45OTIxNTcgMCAwIDAgMCAwLjM0NTA5OCAwIDAgMCAwIDAuNDQ3MDU5IDAgMCAwIDAuMyAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1Mi44NjkzIiB5MT0iMTEzLjQxMyIgeDI9IjEyNC44NzgiIHkyPSIzMC42NTA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjU4NTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjg1N0E2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/key-feature/support.svg":
/*!********************************************!*\
  !*** ./src/assets/key-feature/support.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuNzAzOSAxNi45OTk5QzYyLjMyNjMgMTYuOTk5OSA3NC4xODAxIDI4Ljg2NDQgNzQuMTgwMSA0My40OTk5Qzc0LjE4MDEgNTguMTM1MyA2Mi4zMjYzIDY5Ljk5OTkgNDcuNzAzOSA2OS45OTk5QzMzLjA4MTYgNjkuOTk5OSAyMS4yMjc3IDU4LjEzNTMgMjEuMjI3NyA0My40OTk5QzIxLjIyNzcgMjguODY0NCAzMy4wODE2IDE2Ljk5OTkgNDcuNzAzOSAxNi45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjcwMzkgMTYuOTk5OUM2Mi4zMjYzIDE2Ljk5OTkgNzQuMTgwMSAyOC44NjQ0IDc0LjE4MDEgNDMuNDk5OUM3NC4xODAxIDU4LjEzNTMgNjIuMzI2MyA2OS45OTk5IDQ3LjcwMzkgNjkuOTk5OUMzMy4wODE2IDY5Ljk5OTkgMjEuMjI3NyA1OC4xMzUzIDIxLjIyNzcgNDMuNDk5OUMyMS4yMjc3IDI4Ljg2NDQgMzMuMDgxNiAxNi45OTk5IDQ3LjcwMzkgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjIwODkgMC45OTk5MzZINTIuMkM2OC43NTM3IDAuOTk5OTM2IDgyLjE3MzEgMTQuNDMxMSA4Mi4xNzMxIDMwLjk5OTlWNDAuOTk5OUM4Mi4xNzMxIDU3LjU2ODIgNjguNzUzNyA3MC45OTk4IDUyLjIgNzAuOTk5OEg0Mi4yMDg5QzI1LjY1NTIgNzAuOTk5OCAxMi4yMzU4IDU3LjU2ODIgMTIuMjM1OCA0MC45OTk5VjMwLjk5OTlDMTIuMjM1OCAxNC40MzExIDI1LjY1NTIgMC45OTk5MzYgNDIuMjA4OSAwLjk5OTkzNloiIGZpbGw9IiNGRjQzNjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4yMDg5IDAuOTk5OTM2SDUyLjJDNjguNzUzNyAwLjk5OTkzNiA4Mi4xNzMxIDE0LjQzMTEgODIuMTczMSAzMC45OTk5VjQwLjk5OTlDODIuMTczMSA1Ny41NjgyIDY4Ljc1MzcgNzAuOTk5OCA1Mi4yIDcwLjk5OThINDIuMjA4OUMyNS42NTUyIDcwLjk5OTggMTIuMjM1OCA1Ny41NjgyIDEyLjIzNTggNDAuOTk5OVYzMC45OTk5QzEyLjIzNTggMTQuNDMxMSAyNS42NTUyIDAuOTk5OTM2IDQyLjIwODkgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjAuMjkyNiAyMi45OTk0SDM3LjExMzVDMzUuNTE5OCAyMi45OTk0IDM0LjIxNiAyNC4zMDM3IDM0LjIxNiAyNS44OTg4VjUxLjk5ODhMNDAuMDEwOCA0Ni4xOTg4SDYwLjI5MjZDNjEuODg2MiA0Ni4xOTg4IDYzLjE5IDQ0Ljg5NCA2My4xOSA0My4yOTg4VjI1Ljg5ODhDNjMuMTkgMjQuMzAzNyA2MS44ODYyIDIyLjk5OTQgNjAuMjkyNiAyMi45OTk0WiIgZmlsbD0iI0ZFRkFGQyIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjIyNzY2MSIgeT0iOSIgd2lkdGg9Ijk0Ljk1MjQiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxMyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuOTQ5MDIgMCAwIDAgMCAwLjUwMTk2MSAwIDAgMCAwIDAuMjc0NTEgMCAwIDAgMC4zIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjgzNTQiIHkxPSIxMDIuNjM1IiB4Mj0iMTA2Ljg0MiIgeTI9IjM5LjQxMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4MDc1OSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQzRFOUMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iNTIuNjEyOSIgeTE9IjExMy40MTMiIHgyPSIxMjQuNjIyIiB5Mj0iMzAuNjUwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjQ2QjQ1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VFQTg0OSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/patternBG.png":
/*!**********************************!*\
  !*** ./src/assets/patternBG.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/patternBG-f25af38e357096ca23290d5f5bcb3355.png";

/***/ }),

/***/ "./src/assets/services/secure.svg":
/*!****************************************!*\
  !*** ./src/assets/services/secure.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC41NDE2IDAuNzkxNjE2SDMyLjQ1ODNDNDUuNTc1IDAuNzkxNjE2IDU2LjIwODMgMTEuNDI0NiA1Ni4yMDgzIDI0LjU0MTZWMzIuNDU4M0M1Ni4yMDgzIDQ1LjU3NDggNDUuNTc1IDU2LjIwODIgMzIuNDU4MyA1Ni4yMDgySDI0LjU0MTZDMTEuNDI0OSA1Ni4yMDgyIDAuNzkxNjczIDQ1LjU3NDggMC43OTE2NzMgMzIuNDU4M1YyNC41NDE2QzAuNzkxNjczIDExLjQyNDYgMTEuNDI0OSAwLjc5MTYxNiAyNC41NDE2IDAuNzkxNjE2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxLjIxNzEgMzIuOTYyNUMzMS4zODQ5IDMyLjc5MjMgMzEuNDY4OCAzMi41OTE0IDMxLjQ2ODggMzIuMzU5VjMwLjIxNDdINDAuMzc0OVYzNi42NDhDNDAuMzc0OSAzNy4yMzcxIDQwLjE2NzQgMzcuNzQyMyAzOS43NTIgMzguMTYyQzM5LjMzNjggMzguNTgyMSAzOC44Mzc1IDM4Ljc5MTkgMzguMjU0NSAzOC43OTE5SDE4Ljc0NTZDMTguMTYyNCAzOC43OTE5IDE3LjY2MzEgMzguNTgyMSAxNy4yNDc5IDM4LjE2MkMxNi44MzI1IDM3Ljc0MjMgMTYuNjI0OSAzNy4yMzcxIDE2LjYyNDkgMzYuNjQ4VjMwLjIxNDdIMjUuNTMxMlYzMi4zNTlDMjUuNTMxMiAzMi41OTE0IDI1LjYxNTEgMzIuNzkyMyAyNS43ODMgMzIuOTYyNUMyNS45NTA5IDMzLjEzMTkgMjYuMTQ5NyAzMy4yMTcxIDI2LjM3OTUgMzMuMjE3MUgzMC42MjA2QzMwLjg1MDIgMzMuMjE3MSAzMS4wNDkyIDMzLjEzMTkgMzEuMjE3MSAzMi45NjI1Wk0zMC4xOTY2IDMwLjIxNDdIMjYuODAzNFYzMS45M0gzMC4xOTY2VjMwLjIxNDdaTTM5Ljc1MjEgMjIuMjY3NEMzOS4zMzY5IDIxLjg0NjkgMzguODM3NiAyMS42MzcgMzguMjU0NSAyMS42MzdIMzMuNTg5MVYxOS40OTI3QzMzLjU4OTEgMTkuMTM1MiAzMy40NjU2IDE4LjgzMTcgMzMuMjE4MSAxOC41ODFDMzIuOTcwOSAxOC4zMzE2IDMyLjY3MDMgMTguMjA2MSAzMi4zMTcgMTguMjA2MUgyNC42ODMxQzI0LjMyOTcgMTguMjA2MSAyNC4wMjkzIDE4LjMzMTYgMjMuNzgxOSAxOC41ODFDMjMuNTM0NSAxOC44MzEzIDIzLjQxMDggMTkuMTM1MiAyMy40MTA4IDE5LjQ5MjdWMjEuNjM3SDE4Ljc0NTZDMTguMTYyNCAyMS42MzcgMTcuNjYzMSAyMS44NDY5IDE3LjI0NzkgMjIuMjY3NEMxNi44MzI1IDIyLjY4NjYgMTYuNjI0OSAyMy4xOTE0IDE2LjYyNDkgMjMuNzgxM1YyOC45MjhINDAuMzc0OVYyMy43ODEzQzQwLjM3NDkgMjMuMTkxNCA0MC4xNjc0IDIyLjY4NjYgMzkuNzUyMSAyMi4yNjc0Wk0zMS44OTI5IDIxLjYzN0gyNS4xMDcyVjE5LjkyMTNIMzEuODkyOVYyMS42MzdaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMzIuNzg1NSIgeTE9Ijg5Ljc4NTUiIHgyPSI4OS43ODU1IiB5Mj0iMjQuMjE0NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY0MTZDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEIyQiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/services/smart.svg":
/*!***************************************!*\
  !*** ./src/assets/services/smart.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC41NDE2IDAuNzkxNjE2SDMyLjQ1ODNDNDUuNTc1MSAwLjc5MTYxNiA1Ni4yMDgzIDExLjQyNDYgNTYuMjA4MyAyNC41NDE2VjMyLjQ1ODNDNTYuMjA4MyA0NS41NzQ4IDQ1LjU3NTEgNTYuMjA4MiAzMi40NTgzIDU2LjIwODJIMjQuNTQxNkMxMS40MjQ5IDU2LjIwODIgMC43OTE2MTYgNDUuNTc0OCAwLjc5MTYxNiAzMi40NTgzVjI0LjU0MTZDMC43OTE2MTYgMTEuNDI0NiAxMS40MjQ5IDAuNzkxNjE2IDI0LjU0MTYgMC43OTE2MTZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuMzg5MSAyNS4yMjE0QzQyLjM5MzYgMjUuMzAyMyA0Mi4zODc3IDI1LjM4NDUgNDIuMzY3NSAyNS40NjdMNDAuNTYwNyAzMi43MjM1QzQwLjQ2OTUgMzMuMDg4NyA0MC4xNDMyIDMzLjM0NjIgMzkuNzY4MSAzMy4zNDgzTDI4LjkyNzQgMzMuNDAzM0MyOC45MjYgMzMuNDAzMyAyOC45MjQ3IDMzLjQwMzMgMjguOTIzMiAzMy40MDMzSDE4LjA4MjVDMTcuNzA1MyAzMy40MDMzIDE3LjM3NjcgMzMuMTQ0OSAxNy4yODU3IDMyLjc3NzZMMTUuNDc4OSAyNS40OTM0QzE1LjQ1OCAyNS40MDkxIDE1LjQ1MjEgMjUuMzI0NCAxNS40NTczIDI1LjI0MTRDMTQuNzU4MyAyNS4wMjA2IDE0LjI1IDI0LjM2MzggMTQuMjUgMjMuNTlDMTQuMjUgMjIuNjM0NSAxNS4wMjM2IDIxLjg1NzcgMTUuOTc0NiAyMS44NTc3QzE2LjkyNTYgMjEuODU3NyAxNy42OTkzIDIyLjYzNDUgMTcuNjk5MyAyMy41OUMxNy42OTkzIDI0LjEyNzYgMTcuNDUzOCAyNC42MDg1IDE3LjA2OTYgMjQuOTI2OUwxOS4zMzE3IDI3LjIxNTFDMTkuOTAzNCAyNy43OTM1IDIwLjY5NjcgMjguMTI1NSAyMS41MDgzIDI4LjEyNTVDMjIuNDY4IDI4LjEyNTUgMjMuMzgzIDI3LjY2NzUgMjMuOTU5MiAyNi45MDFMMjcuNjc2OSAyMS45NTQ3QzI3LjM2NDYgMjEuNjQxNSAyNy4xNzExIDIxLjIwODYgMjcuMTcxMSAyMC43MzExQzI3LjE3MTEgMTkuNzc2IDI3Ljk0NDggMTguOTk4OCAyOC44OTU4IDE4Ljk5ODhDMjkuODQ2OCAxOC45OTg4IDMwLjYyMDQgMTkuNzc2IDMwLjYyMDQgMjAuNzMxMUMzMC42MjA0IDIxLjE5NDIgMzAuNDM3MyAyMS42MTQyIDMwLjE0MTMgMjEuOTI1NEMzMC4xNDIzIDIxLjkyNjcgMzAuMTQzNiAyMS45Mjc5IDMwLjE0NDUgMjEuOTI5MkwzMy44MzUxIDI2Ljg4OUMzNC40MTEyIDI3LjY2MjggMzUuMzI5NCAyOC4xMjU1IDM2LjI5MTggMjguMTI1NUMzNy4xMTA5IDI4LjEyNTUgMzcuODgxMiAyNy44MDUgMzguNDYwMyAyNy4yMjM2TDQwLjczNjYgMjQuOTM3NUM0MC4zNDQzIDI0LjYxOTYgNDAuMDkyMyAyNC4xMzQ0IDQwLjA5MjMgMjMuNTlDNDAuMDkyMyAyMi42MzQ1IDQwLjg2NiAyMS44NTc3IDQxLjgxNyAyMS44NTc3QzQyLjc2OCAyMS44NTc3IDQzLjU0MTcgMjIuNjM0NSA0My41NDE3IDIzLjU5QzQzLjU0MTcgMjQuMzQyOSA0My4wNTkyIDI0Ljk4MzkgNDIuMzg5MSAyNS4yMjE0Wk00MC4zODQ0IDM1Ljk4NjhDNDAuMzg0NCAzNS41MzE4IDQwLjAxNjYgMzUuMTYyNCAzOS41NjMxIDM1LjE2MjRIMTguMzE5OEMxNy44NjYyIDM1LjE2MjQgMTcuNDk4NSAzNS41MzE4IDE3LjQ5ODUgMzUuOTg2OFYzNy45NjZDMTcuNDk4NSAzOC40MjE4IDE3Ljg2NjIgMzguNzkwOCAxOC4zMTk4IDM4Ljc5MDhIMzkuNTYzMUM0MC4wMTY2IDM4Ljc5MDggNDAuMzg0NCAzOC40MjE4IDQwLjM4NDQgMzcuOTY2VjM1Ljk4NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMzIuNzg1NSIgeTE9Ijg5Ljc4NTUiIHgyPSI4OS43ODU1IiB5Mj0iMjQuMjE0NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY1ODU4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4NTdBNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/shape-left.png":
/*!***********************************!*\
  !*** ./src/assets/shape-left.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-left-13fa8b3d988ca4eb9d7c2da935c2d73a.png";

/***/ }),

/***/ "./src/assets/shape-pattern1.png":
/*!***************************************!*\
  !*** ./src/assets/shape-pattern1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-pattern1-d99df506f0cb8cf704bea5bc18b431e3.png";

/***/ }),

/***/ "./src/assets/shape-pattern2.png":
/*!***************************************!*\
  !*** ./src/assets/shape-pattern2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-pattern2-4bd72c344fccac3b19031e7c31d42096.png";

/***/ }),

/***/ "./src/assets/shape-right.png":
/*!************************************!*\
  !*** ./src/assets/shape-right.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-right-dbc79b79a05b2f223741e50a97a627aa.png";

/***/ }),

/***/ "./src/assets/testimonial/avatar1.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar2.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABkgSURBVHgBrVppbFzndT3vzZs3+8ZtuGuohSJl2ZIc27FbOKbbJE0CNJWBAk3+NDCKBi3Q1vbvArUN9L+V5kcKtIUTBIaRpqmZpTGCxBG9RLJjW6QkW7JEc1/EIYez7/OWnu97b4aUI8ey4ycNhvNm3pvvfvfec869dxR8ysfsC8/G17bmT4cCiRNzM6+kLKt+MpYIxrPpStyCB1bDQLjLn9cDnuVKvpEfGT8wp/jwcjQ6OPflv39qGZ/ioeBTOGZnX4iHra7HNuYvTsFuTd1Yuor0eh7vXlrDQCyAocNJrC1uolCzEVBVjN81jHqtgfWVXZy8fxJevw+Jvn5Ek0NzXs3/vWrRmH7gka8v4w88/iDjli6/OaV48GSpkJvKrK8gff0iLLOGTDqLN2Y3kCm2MBDXcXi0G41yE6s7JVTouT+67yAuX9tEX28ExyaH0d3fB9Wj8KHRq33QNR/88e7p3uHD3xoYu3MGn/DQ8AmOpdnfnITX+wy3Zsq2bNiWQYdVUdjdRXknA1u1UWsaKDYtxBiKq6u7COo+NFUNNdPE4koOaztVjA11oVFvyntmt7ZQLlYwNmED0QSC0ehpG+rpreXrM7ZtPjowNrmMj3moH+fDs7Oz8aV33njG1rRZvmQI2jDNFmrVIjYXrtDIKlotC5qm4bN3jSDoozFVA+lyC/laC9ulOvw8t7JdQiwUQJ6eLOWqWF9aw+LVNVSydRQyu2g26mjx0ayWAducUlVtaWdt6Ul8zOO2jbs6ez4V8zRm6ajHbRrF/zBaLexsrGD57XPIb26iUmihZSjYTFfRlYhgOEFvGSZqLRsVerLeNGEaNsr1FhTeqMoQLWbzWJvfRnqrzI1poFkrMbRN3rtJw7dh2aZMHtu2ntpeXVhiPqdud823Zdz7s+dO6x6FhtkpaRUP27JQK+Vw/Te/xvzrl5BeLWJhIYtcoUkjG9hJZxCkB0XYelUFhskQ9XnhsUUuKDSuxYAFSiUD5WwFIQ+RtNJAOBiE0SxzE0zUqyU+N2V0QLGhKEh5NO9senXp9O2s+yONW7h47jFbwQv0VtzxmPvgv0IuA8NqQPGqqDeaMAyLIFLnohXkbpQQ4oIizOoQrUjwM8N+Fb1BDUMhLw4kQujh370RH7pCPB/xYGAwBqNeg1mrobSzifLuNqqFHCPT6HwvLYyrHrywtb70+Eet/fcCysLsucdMyz7DfZbGOEY5h2m0EAzHkBw7guxGFmamBi/P65qKsFenB8sIeDUcjfnl50N+HRoN1An7OvMu1BVEKOyHn7knDPIGNKhcdaNloFEqorhbBHw7CCWS8AWjvNZHwzzyXsJGeuWZrfUF9A8fOvOxjbv21iunDduSF0qTXKsUeXNbLiQQjiKc6Eex3JSf0vjdIV2lkTaSXHQi7EO0K4RITxQenw6PJoyKQwsEoQXD8AdDCIQi0BiuXl2HxbgrZ7dxaeZXyNC47uE+5LdXEe8fgZ/3VFzDFBmiKiNEfYYhupwcHZu+beNmz59N0bBnVcsxSiHx2vtu7poIlYtttkyUClUapKJJIIj4uMMEDuGV3sEoggl6qCtB3orTgCD0QEQaIW4R70rCG47AwzxTSRVgbvriXRjeWCXpv4bF4qp8Pcr8JgvCVlxilhHEc4rgRjx7Y2lpbmBsbPmDdtwy57yKfZaAwRyzpFGWZUoAsfgQACFei4dJkPB4/fDSZQVCfiygw242CRomwjROUILG0PR46DVqLD0Q5UZ5oHGzwlEyIENYkLdHuNxZNT+roe/AGIYPdKG7J47+A0e5UVHpqfa2OmHk5iCUuMennM0tLcU/0nPvvnn2Scu0iIoWFy+2SnVjgQ9hnNw4i+jnxGkoHGae2KgT4n1ctMWcCYaDCAT9hHNuAklaLEhhvpikAA+NUxi6lik40oQmNoubpIKgIdbP7wvGezA4QaOYe4n+QXh9/o6WciJIcSJIRIAt30oZPlXw4BMf6rmr519M8RufEouXXrIF35B7mnVqwSqqRLFqtYJ6nWTdqEmipf8oKJg7mnMzH3PLR9Cg2+ANhVHKN9Cqm9Jj3oDgvQZUAo6qiAUyrBQCiYgKciZJTW6CFoqia+Sgk5u6XwKJ3fGbCscux7AOxNn249vrSyc/1Dhb8T0rn/llpmGgWadh9Tp5h0aQVC1DLMCQz47ssuQXRnu7aYuKeCTMEPPi/bUMLl9dxwpll6nqqFBWmQxXVdP5eQv1isNjXi5c8agyImRCwc1thqZKgEmOHIY/knAMcU2TEeQmvwMsSud9VVWeuWVYXj7/yynTMqZkPjFcLBpnipwTD55zNgcykcVCxI3lrvG5f2QUG1dWCOt+gksFXXGCBj+ztL6DXLaI3lgQZqPF8NJRze5Kg6xmAwHmnWn6oPD2whiVqxbRLr5H0wOIRHp5z71UcrykyH+0ZO+8E6Piuqkba0tTAyNjMzcZR956TMS+NEx4x/WKZRvSQLE7fGJ4OV9hU2HYrsUKFUQ0oktPRkMhXqtQcjVwoCeBBo2qFKlYVtPoGurn/VtoUHKl338f5fwObCKoPxZBuKcbke5+BGLd8p4WIyMeTzrfK6hHcq17KG2D3JeKg97iWdM8Ivf2jJt98YVUq9k8LTzkELXpXuxxnu02EajSi473VGcv+XbhrfcQFZtJ0BMyK5OrYMdSsUFyjohw5TmbLtlZXMXg8cPkNTKU14ut68vIU18OTx5CpKtHKhujVWNo63LRPl+IQaI4uOEQXJuLuMkK2qf2PCs3e0ogZ2JsLC99a2iWNMyUD0OimKNIrPbWOMkrgEY8W4pLDbYEgVqmBL9ObUj5ZVALMvYRCwewWq2i58AoSgyhXLVJIDIRGziAgWN3E10ZthtV/OrqLs5dL+D9i+9he/E9GfKqx0vk1WEWsnsh1yk9bdeb+9y4/+B7Tb/6eMdz/Pg3RMwpDmjLD4ibStFlwY1n+6YYl18gPsuN0FmneXXSOO8W7QpzfWUkyF9fHe1Bt1FHOeaTqKvrAkFDCBPe+yfvwPaNPPqJkqMDPbjzwT8iqhZ4XycFPHWCWiMHrbvXBQ9nbdJjcBTKB0Oz/YoR8JA07vyLz6f4oZMO9Lf3xlX+pAJxkUg/59nq7J7thqqgwkBfDLYm0FAlLYShB3XqwzpCQUokjdUAUdSo6ggwL3mFVCQ9Bw/jUHoHo4eHkRw/jGCEpJ5MipXJ++oRKhct+AHPqG407SElYO9tvtKheBmamq16T0pEbJcyripxXigdTzkmu6hpKTeRSCDZyzosTXXBLxcSjH2TOGWXCHGvL4gW1UupkYXCms4rOIubFKDsOnTffaiQqH0BP1TqS+EVKI4BVqsOtX9Y3t+S308142rKNsh0QtQNx/1B2vJ6TguEmOqgobzA2pekCtppJ73WLjukhaqrzhUEhwekHBOXtepEV+aehyEYFHqS4rjInKxSXAupJb+HnGeyyhbPEYadT8grd/edjbUk10E8bCdq9pB/3xpcwyTXATfxIVd3kpcoJwT6iRCUKAhn0Xvh3PYopKKQwKJAVsi2WyyERvrYGjCIlK4G5Rseb4Dh2YVqzsD22i6Rj8ojTPQTC+bnslffQX5tFU16TqO8EqpFLkxgFAleZzdM5rSyVxy3NSX2GXTTYtt/i01SlRRZy4w75xWpvB2tpkoL2vVbu5ZzxKtHbkC7thJBbPF8odrgJTynijpbk6hapzJ5f/YqIsEAfAQSXyRKyUaVQ6HMPgwK64uosKkkZJyTM2qHergzHTF986F0vIx93mob5eCOpI8TYiUp4bB2aoqzlotOEurdCx3DFDdEbVGdOGHJ8BRqQiNotIh84uYiJH1UOJnlTcouAytsAvnyJRpvMgQDSM/Pi/Ys+y0qiuy9hHv7WPqEZUUvFtGgbg2K8r2tP1XlJuMs1wi7g6L73+3YEVcVWdoIR1nSD7JOg+peiD2uc5W4PG87pY9UEnDyqy81RhCwKbLZJGLLobSdZ/OHYCEM9bJO0xW0qE60UJAlzRB6Roao/I+hVszJXozVbLn3ZN4yF+19i/6gl9r513Ga+0JcY9qdi+Kq3ea2TvjtpwInBx0CN/cRqsxSWcRCcdBMp5IXXmpU65LMb9zYpQRrwVBZ1oQ0DB8dIbhoyCxeRza9iIbN3kvQiziNzK4v8ZqGlH4mc8tP2dXOtZsUiH2LEHWFs+1asZ/vXG1puVLGCT2H86yOkx1GUDq1nMgNxQ1PSyIt+YweabYsWc/ltwvYzRcRYauhQFVCGYobVzcwQspoKE2UrRoatS3maoX8FmE4V0ghDW6OA2l6bNiVfNgXkm1D0CHxjtsk7jg8p3bMFKmtePKmbcqqW6p9eRPVrcDdD9r7nt0isU3iliQDUfb0Yp3KnvpLfiwWYUuB5Y+PHu9O9kiOsyscgvQE0T8+DjXswcqlN5m7fH/0kIw1roUbxOpBce6JfTJrj6qUTvS4NncMd+m9Te55hiXyUNqXtL1ju70T9zXUzjnHSAdZbfdvsS8eErGS6GV1oaDBHkq5yk40hx2qaqHhKcPoVrCtldEYCKClt0j6RQxNHqWK9zEcqWdZAtUreTaSgi5/uWxlK/tiU+0Yup/XYO9hqnSKLLbtZZW11ZxzsSpzR+RW59P7tVvbfBEONMa02rrTuZk4lziUwnq+jN1KHWnKrx0+g4Ja4zW13TzLIerPRhEW2+8iDGsUxh6PkxZ1nttNr7OBE3YrDifAIJtTqrsUW4KGXJryQe85pnfWqap50cJYUdquE9gnjLPVDqaKtnebHqQN8n3Xq23VQpm1lclidXMXCxS8ccq0Fssc1u4IsjPWYEgmYjpCUfKfyXZFbp3FqbDKkGjbKFqcG2wifvheEnqwDWdODSdqOYmE4lntcG9buO+nAltR9uDRsi5q/MCcojhf5FQC6FS87ZmAIw72GrK2K6KFsabZxLXra/jhT19iqDXQL5SIm5cVoUQox6oCaHh/hfKLCQVDqbPfGeU9BIgwxwj9N/IKLm0v4eGeCXR3RTql2/5ars2/aKsToGPoXpS5RtvWjBr0qtPtRmtH2cn2neXih+JWxqJat2SnynRllkHwyOZKeO5Hv0CxWEWRDaQB8tnR/jgCNMTgfTYqLWQpzaqWB1nOAko0ptYgVaxsoZDlNQxfW4+gEUxidm4OZ8++JgW37fYm255SlT3Kaq/3JnWCPUKTGrdpzqmnHn4kT6SccRR/ux/v3LTTn7T2OE7wkE0DDYba6vIqfvyzGU5rmpy/eTBCUIkSQDyKgYmBBA6wd5KgJ0WIpvMVbOxWcO39LJYWc9jNVNl8MtGTmsD4/V9AH7kwQHiLokog4qyAha7cYLHYtnhw2btD2sA+THAd5OCGbNI6xarZeplPU+0wtN0ujWQHlyIcT9rSMGFgoVDENqXTnaMhDhNVJNmr1DiVaVoaDbfJXx4c5nCxQlDJlMpiJznt8bCwlc0LDB06iEN3343esXG5yPTSCpZWt3F95zXYbN72DI0ik9nB+OEUDo4N8xpR6Fl7nnJDUdmr4RwjHcr4nvhbGtdsNs+wJfekMEoikaW4njNkfWZITzWlGM4SDYXQ/b+X3mAvs4UUPdRNXTjE9l5rqyoj3pAbY8t2X08yiuRwHAr/DkQjiPWxkzw8wvlBLzvQQemZwm4a6c0sKuUyPWbg5z8/h/GJDTFdxVtvX8Ff/eUXcDBFhcPKoe09Ke4/KKrd/NQUa3ovTHm88pPvn2UvcUrkm+gpivLl2vwyQ67OfmSALXIbz//kZWRLbLKyk5zsjkkULNHA0b44PjM2gObyguAI9j9IC9Egwixao70xTml8rAoCCPb00aNRtutCbLN75bPIkPX5q/j1/76MNzlOnifaejQ/Hnp4Cpur80gdTHEoUsbJu8Zx/z1HeXud09o6+rpYYXCN3T1dSHQl0E5JBtWPk0MHTnc8J45Go/603TKmDCa8MG6D2jCXLVHFh3B9JYNXz82iYdgSsVJDvbjj8AF09Sfx2htX0Bf3o3skyayto3FjE06TR4GfHeY41YlXtgzEJCcgO1uaUC7+gIyyfDYt81chkcfYqfaQzIXWMIq7+Ox99+K553+I48fvwNtvXcCR0QQWVrLYJBjpzSrHZ0OYX9uW8/d/+ed/QoRTJaZPZ6Tlaf/x/R/+dPkzx+6amr28kJpf2sJPzv4Wl+dXBXYin8ujwEpaEZNSEbpc/IWr87hw6SoGB4f5GMSdx4+wQzzI1d5ANCrqN002jIJRNoR6OWPzc5LDGZuX7QQxIBGVhJycNhocMmaQXtjEe5yJZ9nN1tmJFsPUgVGKgs115l6GOWvh9dcv4MqVa9jeTmOLzd2v/sUX5Sha0Per565h6nOnZui1p3/HOHFsZRoX31le/7ulzR02RLvQy2ZPpdbE1cU1LtSHnlgPfCTSTLlAGnCGGl9+6D7o0TiO33lI5ohXZU1XL/JvP/skBBnmSTw5wAgIU2xoUu0L4yy255sV3keUSJUKdtdvoMoh42qmICep9WaNs/UsPv+lr+Dg4YOYv35NlMD44wfuwfz8ItcSx9Gjx1hO6Tg0MYFLF+YR8gUf/sGPnsvf2ridza37Tz2QGB0YvD81MoJjh/pwfHIMmxsZyiQ2Ubc2GG62VPtVzhEEaopx1bE7T+D4HYcJCCWMn7yP/ZECe/wRGjXIyWif9JbX65UAIMoisyEMK0tNKaUcQ7HC2q/JucBSuoAAaeVgfxcVjoaBoRTHXRH8+Z/eg8LmGrZZ+AYYBRucuYe7+vGLV68gNTGJYLP69Def+OubhpA3GSeOoQMTrzfrza9VGs14byKCEL/w4uVrGB3qwWfvPsS4T0J0Cna4GEGsGzsZlhYqvvxnU+QnDiF9DEkx4GBz1hcIs50XocdUR2EIEcAwNNmJhtuuF23qeqmKXK6O+bKJ3VKF+WfhMxMjML0hnL+wjK1dpgQFQ71YwNvvzmMrV+TmVnHi2CTmNxvYLarL//atxx75oC2/M5+bmZnOp1InH+7uSc7mCqV4KLyJbXLaxESKIadR7TeoREyp+3R/SI6z3nzjLZTJZ35Ce4vh6u/pJ0JxkXIi6uSobdiSViQhk2qEFJMlE+u/wkYay9s1vMVcFxTSHSN9DLD2K2i4wHBMp3P4xQZbE2aeqqdFNA6gzvRYWFtnasTz711cfRi3ODy3OpnPb+WPTT54TffrX0uwh7+xscTiU3AQOLnJMnwZpnTGAGfVsYAXn5tIEid9SKWG6DVCNRccoLA2a2VH+wneM0yHgw2n2JUaUNRvDM+dxU1czlm4tr0tp7Vi3t7PcHx3YR0lDk0iAbYIm7vSE6K6bwm9q4iyRuX3er/+9qtnXr+VHR/6U42XXvru9MRg7xMxliaip9Jgrz/L8RT7xVyfGBnbGBhM4oF7j8MktK+ubTCvfE74MYfUUFR6TZU9F9sZg7lTJCl8xRhLtNq3MwiOHUHJduYTBoVDoVanYVvIU6+KdkSxWUaeIFUTvVGGuBhTx2NdyBULT/z2pe9Mf5gNv/d3KN/+7pkzuZ0bT1i2My4+0tWHBGfgHk5DDYbaZibHjhU7xUSsLfKb+EWCmGn7eE4Mi73hBFPK49ReNFAMMB0R6MwAm0RJT3cfYpOT8HPBXrgjat67UqnKGZ/NqkNqXLEhvO9IfwL33HUEk0eOPPHu3MyZ37f+j/yRzf/M/PQMU+QRZk++yC/bqRIMhPgRO8/YP39hAdc3a8gWm7Kqlu8x7ATE6xwuCiUiO8b0rjTUncyadfZN9Ch677rbwZWgaMpSQfLaA9Fu+BXOGzjV9Xo9ODSWRJxUcuLIGI4fHMzrjdojzz3/nTMftfbb+nnU8sLlaU8ofKpstJbromDlTg6PjCHATvG/PvUPuO+Bu9lJFg0Zj9x5U1a1LdlYlbNwYZjq9PiFwmmxlV4p1pE8ca8kd1H4CoFguNOIWF8S40MkfquJsF/HyYlDGB/ux5cevGO5lsud+q/p/56+nXXf9g/b3pubWZ45+4MxbvnTIqyoGDHRncDG8hbevbKESRIp3IGg8JB4tIiIvoEUF+7t1IYCWHYpn8Y+/xUWsVU5KNE4/hJ5rLhdNZUGX88XWOxyKsvQvXxpDqsb6W/VQjj179PTy7e75o/1k0RxXHln5ilTr43lNc/MJkdQixdXsHjpHXzliw+5bT8Luph9c1E6PdckIqrhuPSOSW/mVpcROXgUVfJWOBKXbQahQ73UnF0cHfvIk2FqRI/ipTBviIJ1pr83eeqVN3/5+KOPPpH/OGv14BMc+Uwmv7Iw973U+KmXDV8gni1nJr75N19DqZilXqxKOijm81KeBeMJttqjsmD1cJqjUsKNPfCQ7MVEiHjFQo6ivYGrl6/L37b0xKP4kwdPIV9qzqyvrTx67dqbT1+YO7eFT3B8ol/Kto+f/ew/Z/g0c/bsiykCxelaufqNaqV0UoRtnci4s7VJTRlhXvkRGRyjAE9j5MA4yZ955tVQI6gUcjn2XmqUbjWENX0mGvK8fM9dw2f+9rF//FheutWh4FM+zr/4Ysof854s7m5PlXL5EweOTsYZpinNo8e9/qBET3o0X6JrS+X83Oq16yvhcHTu29/+j+npmZk/2KD9x/8DHtnE9NYKTTMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/testimonial/avatar3.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABjUSURBVHgBrVoJcF1ndf7u+vanp6fFWiz7OU68xHiLwWkSFgXKNG1SEFOgyXRhKW0zMCVOO22HMEAyaaCFQpIO03Y6wwRIpxnG7ZA0gYaUwXICJI6TSA5e5C2SLdnapSe9/b278J3/LZK8EGf5NXee3nLv/c9/zvnOd77/anibx57e3kQumOsL2ub2RLIlBfg7gpadSMRiiUDAgmkayGYX0q7rjuQLTjoUDgxGw6H9RiA4+Kl7/30Eb+PQ8DaMvt5UoivRdZfhl3rDgVBva1s3muNNPOKIhEKIqsNGMBiA77mA7qNccVAs+ZiZmUE4EkYwEITme4OFQu576bnZxz/yNhj6loz7TN+7e13H/Uo5l+9NxpoQi0bR2daCNV2daOH/IRpjWBoCnLhlWLBtC77v1872xRgaWILrOjTah+NU+L6A8fk5nJmeevxnL7/68OP9Q/14k8PAmxgfvPHaHbvWdzwWi8buLZfKKUPXEbKDaGlOYs3qbnR3dMDiZ4YhhlU9ZpmWOlfTNH5uqPDUubTyKuczTNVBi1GisflKZdNitvjJ3ht39zYF/P2nxmbSeINDfyM/HhgeTozNZx/csuPGAc/1enP5PCpcbcMwEWLotba2oinRrLxjWSYnbkI3dB5Gw6hgIKA+N3mOLgvAw7ZtdX4wGIRt2YjS02HDxurOLnie12uHwsM/+b8ffQVvcFyxcceGx1MRPTDgOf4eRhQ9EkC5XFYTDNgBrOpYhShDUeOXHo0TQ2x+rms6vWaqiYsBYqgY7zEklcH8Tob8L8PnS4TGRQPM02AIpkUQ0jxkMvP3nh6fGj42PJy60jlfkXFHT53r480HOKuU5MfM7Iz6XFZc0jYUDqrJmZy44ziQeYrREmIW88z1PPEAisUispkMysyzUrGkFqck//MoForKYM/hwfAUEGoiICUSTbAZ3qdPDPHabso2zIGjw+f6rmTer2vc0eHzd2m69kMflYTHFM0XF1Fh0lc0G2WPIRWIwKN3Sk4BTilLe0pw/CLKqKiMdtWEHeTSi8gsZlASg7L8fjGHcr4A33Hh0NAiQzy/QMMLZRT5e58z07kgs9PjCITDaG5uR7mYh2foCUv3fjg0PLbnLRl39PT5u3zXe0i98eVmvsqHNatX80RNhV2A4ebQm7L6VQT0YRM85MLiBboDApA+o88MEEgERHxXeaOOmxKqEua2HLYJTU6WsGXZmJkYR5k4s2nzFpXf4l25HgPjwdcz0LzcFy8dPdVXLpceMms5IUXDkVzilMKxKEyBeU4qk1lkLbNVnZIJRiMxwr5N7zr0nIYSPSG/C0SiCEbDqixorgeXi6GX8ion7WBY5aGEdKFcAD+Gx/MqZQeTk7MItHbDCjNC6GVZLGgyC18W4cHjw2dHNq5b8/gVGzcwcCzle9ojPout5Irkj6S75JKstqDicU6k6FYQoJcEKJqTzWhpaSEAMFw50QrzJp3JYvz8OOdiwYo3o33VKrQQTRM0RqsQaOyQMkpKQKlcQZ7hnuN1pxbyGBkeQzpbRibvYOu2d3IBInAqZf7e5XysKhlQbtcfIcgMbl63buSKjPNtex9fEgrVPK8K7eIIMZErGuPFm8wgip6gpVYFE0E1etkVDzAaRycmsDiXZmGPcQFsnDl1CiePHEZTLIaORAvWrV2DcNRmKNrIZbNYWFjA8Og5nBgfp0FZFHNFpBdKaOtaiw//wcfJaCoKoMQoX8CK4SnvZZ6aZu1jmdq5c9269G80buDI6a/wlFTDUDGQK+sxFPSQhcVfHcTagIZNt92GXxw6QDYxo1xqaiYLt6WMdQoltMTi6Gppwokz0xiYmGWoBtHTHkNcZ76ZFSwuzCIW6kJAkPD8KA6fHsW5bImAEWTIa9i18RpMTKeRtxOIMaQLpQrDUNCY5cNiNEnO+qgxHj8VgiF18O7ltqwAlOcZjoTte1d4sRY2Ff6V6SmjnEfc1pFsjuH973s3dl93naI5mvrjamkOEmEdLfEgZicmEQ/F0d21Dp2pTfjArb+PJOth2+pO2LEAYJWhmbw2F+Tq3TcgsmkzzJ712LB5J44PHmYZiGDtlvWMHpfr56v81HSFNhf6RGrrnsMnhndc1nMMq0fEGB8rSacUZaI+2YSLgHxBazydEE8Ya2MOaUxyqXGenMcqrLllRMhQtmzcwLw0cZVmoZDNYOLVl9AZE2CJIc3S4JY1IiBUqNq2husTMWQKci5B5toNmKt4uGpVisb5aukk9029ynbgLxko7+XQLeNBvr35Is8dHDjZyxN6a+5SHvOXX8DjBXm4gppEO5Nhmp9fgIB+e7KVyFZmrnlEugonQfrE+pdoakY8aiBJ77RFI+hoaWdxjsHJFhAi8JS4jLrLKdDCcmYOLUzsNmQRctPobo8jyDRoaklWFxhVSmcxt+vG1I+6gTL/X50c7r3YcwbuWu4pZbm25D9GGxx6zA5GYYfjiIbZBQQXYIZD6OrsJNoVFav3WfNCzL8KYdv0LUSizbxLHiXmiM4FKdIwRaFdMhO3wC7AQEGKNm/V09pMCheDwUXKZOcRzLNmsh2S2lancxKWLsNUPFgHu+VDMzTJvf6G5yTXfN9rUBqfJ9W9JxeQ4fhSY1wY7V38v4RsfhZsRoVJojURZyhygpxhRdZDtxkiAXhEuArZR54HrWAYs3QEJdd0ZBl+TsFXrVCUyEsWqtJBDk+RbaJvKIIKS0ZmoUAAyjGUF5AnkxHvydwaNA9L3JQr0TswMJxoGEcz+vxLhKI6qfZapnGaR96YSGCeoVQhF5zPLWI+n0NTa5K5kuO5XGF6h1HLSTHUWI0FugMswCF6MByJS+ZgemoGboWfs955rs++L1SdpEmvQFoeghc977NzWCAlK5XK9BpRlDVV+GjVMAlJXb3WPVg30Ix6exrG8XqfqHup7qn6e6fRZ3HCvLVDHhVJbcfkXIEwbqOnbTVBxBA0QoFcUULZoxdlEq5bvZYVpCcpMczMzmJ2ZhZBTjLODkI8EGlOsJZ1IFfIq+7BJxiVuHALRYcL5yBGsBHm09bWqkhCjGRarq0WnK/iyfr7JY/o71NG7nt+IEVLdnjLLBejxKBGwvI7U8gx/w/RzuCqHiy0nUW2mEOIZDEzMcccgpqgcEdDl6JuqnOFUrH3w+zslPJslGg5PDmF4vSMYij5Uo7dQgFz6TQ2yP2EaDNCptM5JNdtgk6DozTOkUioZATTUBKm4nqNeUo7JYe/lEoMzYGE9JI75AdeLc9Urnleo7mUo9qD0TAE4ZniCWoh7T0YZRf9v88/hwBzQxJdYy6lOUl25ypkZEJi3NT4BCp5Ag5zbp7fZ8kfs2Qhwk7OnBvDz37+LIKREApsiZwKZQcC0yxzLBhLYpaSw+TkpGqT5Fr5QqGROkL7pO2qI+iKlApG+kxDM3tVjZCeX71W236JVUM3VC9WjVwPOd4o1hLHzOQEIqxv2WwzSjSwTA5aqbDYs+4ZNCrLUAlwEYIMRZlwsVjhpIFzNETqYZacs0QeWSZPc6mxlJhfL73yKssDS0jYQo7IO13O4ZpoAiZzTbInGIuouXF5Fc0TzUUMk7CUsK2nE+qz9b0dZjgc2i4rLasiP5ogJxwdHUWBK3TixAls27YNkUiEYabxxiE88LX70dXVhXvuuYeFOY14U4LnkuEz7RZzBRZghlBeaH0ZHauShHgNiwzXE0OnEWYYtlFnWdvRgjjpWYaA5HNRQxt43+lpHHz1KNb0tCASjKMAG3GWBp9o2dzeynCOYWpqSnlrgahZTx9ptTqo2VwEhD5SjLnAnqFjxzpOnDiJrVu34umnn1aTn5ubU7KBJLGszuzsNLZv34ZDhw6RFiWqRje34PzIEBJ6kV72MTQ8SorGfCPq6ZQGJPd0Ip4sXAvLRiQQhptzUMm5OHt8BHlqPqV0hs0qgYHeihB1hXNWCgQyEue123ex3hUhWo1El4SfEGxJFRnVHhJq8ethuXQQt/K5XGrzpk00hkhGNAuz633yySdx++2346mnnsJNN92EAwcO4OSpISTZ1uzatYtdcTMWFxfJEzvV/+W5M6RhTdQgZ1kSSghY3YqaSdcVzJe46nG0d3GRFumPriBlSxOBLdciyzD3vAqRMYMmlyEYDuDsmIPj7Ay6vSKCBKlC0FT3FcAQ44xlYpO0XsI7Pa9ukFcDFGVcwmymGxwW256eNXj00UfV5Au5PNLz89i5cyfihN7u7i6sTa1GklSora2toViZUovoFV03GXJhbFx3FV5kWxOyDFzT04k50rMkxdnWJLUW1jWqy6p1WcwvMvdseCG/Wi7oiEhJltpnCJcw49r43b4P0dgokjynlfTO4v1k4sJSJKcaUuBlh58wr3vXO/Ho976Pz37uc7h2yxZsYWhu276dtCmiLjZHI7du247x8VFMEEh6Uj04cvgIkc/Be6+/AVl6PGJKijm4fus7sEgAOXWK+cWacNXqLkzOzqt2Ze2aLqxqSyqGUqJXhvib8XNT7C7C6F7VgiYakc7kceTsObzno59Gcsdu+GWiNtuoukJWL9SSXvUi7tWa1loorsg9/ar16/GP3/g6Sa+L9//2B4RQ4ujQMXJDR1GhJ556Un0nCT1N1UswqauHXmxtwaf+5I+QZ/3SRPUiM7E1F73v2oUuqs5jY2OsVWnMZnKYpTdGGfKLLPKCfAmyle72TnLSDvQwtKNMBTZTGCZzCbd1Yufud5G6eYru6abeQMDlJLnWxy0zrG6U1vi98Jd0hnLbT3/6U5VHIpoODg6q/+WE63fvVpJckDri1q3bCOk+2rkXIPE/fOooPZgja2Kss9uWhYkYHn6v9z24btsW5enz03M49tpZHBuZwHF66vzsAhZ4bZue7e5sV01nmgtwloX9lWMnsfP6m2r9m3QCbHEMvYaMS8ZdbtRLWvV3Wtr42B1/fCdBJCEIqBQoxragpkxeWEsymayuDC8ei7MjCERxiDXpzr/8DLXGgqpnOzf0kKmwExDv8dVmTsabYqxRFg4xhHMs5j5rmDijIrqk1CpL9EyRJHxMLWbx8rHXMMv+7qOfvFPJgQRbGm4jwogRTnkhGi5/v7z1aXhU04aMz37+b7iZ4WyqG7eiWV12smoUKbuVib5/97f3Ynp6VEH+0OgE1rOzXt/VJrOhHB5UDavP2YUi5ISr2nD4yBGcOjvG/EvDETrLSU/Sq9lcDhmWgdPjM3h1ZBy3/eEn0dZzNQ0rKQJuEjzC8Vitx7/QS/oyY7AiPGv5N2QWS8UzFmtR/Ueq0tcaXbmA0vP5vWUbSqPcu/fHLPCEeStKb6ah2VH8yw9+Aothe9M7NjBzHLj0vm2IVFfEaoLIR279HTx3YAAvDh7F+fFJvMLC39qSgOFT73TKmMmU8OGP/yl23/BespOKaoSl9w6wYGsXGbX0WgcVUcSW/QI1Aw6ReOiDF7q7/htf6fmGClGbkvnk9Dwe+68naGgEscRqLEwusKZRa2T/9s3/fBKRP/sYbrz2KnqO7QzZiMbJGyTQKS5O+/vfg82pNXj24CBOjo1j+OwZBO3qtlaiK4UP3vohRkWBjSrvK3xWBF/eUym0/lJO1QGj7oy6kTLEEdXPpTPx+7V9wp5L2vyF9KV6AVcpwKIEg6rUF+/5OvXECfW5HOm5MTbUU0r/0DwbYTZFX/iL23GjiDrsyRyCTMUvw2Nf57HOleVgbZxJz5N55FTOURbAY888j95b+/DlL38JxUyBopHJnOXGJfNWTdXXLjE3f8VR7+nqnQLL6Tr95p0707xA/8ofe6qVr7pctpksfPWBb2H4tXNESzmxpD4PxTt5MVMlP1tv5LUQvvSv38W+IydIyrlbyhUMm2GlqdANzJ846VwSV7OUbL5qDZoTQbL8rMqpHz/xJJ7v31/d3qrtCl1ivVcYd7lBDw7u3LxupNqJu+7+FSfCUx1BgOH32qnzuOfvH8CrgyeUtzxKDAqpmFsGO4JwrI3hJDciVJCtGqEm3Pft7+P7P/oFDYootcxScM6uIi+9W0ktmjCTMdIsl4siXYFBRPzmN/5JEfYwc63OH9/YqBnse99TRqo3Zf0h+ddXogRXOxTF5NQsvvq1f8YXv3g/Dh9+jWsrbQY3Gk1P7YhqqAJPJEo6Zsc4WX6nEQzocTvSjH/776fxrUf2QgsKlyxRLKIqJmo0OwSHdXN+Zp6qMn9P/aTCKPBIvCdIEvbu3YsmhqQsnAp/RRv8ZYdXO6rjQhVMJse1U3sHjWDuP3h0Hzljb47w/J3/eAwvvvjSCtebzJ8VMprcgkAi93NKc8gtTHDrWPoo2dB3lYDqFoG1rVF8+x/uhlZYQHoxz56vwlYph9Hz55CtFPHS8DQef/ZlVdQNixsiLIb9z+1HR08XaVq5WoY8a8k4rYbq7lIeNsBQicf+E5vW9vQteY5jPr1w3zM/2Ye/+twX2AUcXIaeei33asozM1VJB5LAvJRGyhUIJKj7t1EyYBngelV82TOQ/XAT44sl3PHXD5B+5alyccOjkGEnTsGHHFNaqlnKDY3FQvWa99//AAGIaWHFlinMWnUfjMCljkuAjEOvES4eqr9vBPYPHv3OyJmz2V7OOVWH3OWeUt0v71Fn4+o7ipmiZvnUJ2Uv26H24bF9sXRX1SnDVyGCEk985rkDaG1fhVRHM+GeHmFTK5tsP3/5MGYo5ErvJ7tTFuvj6dNnsPd/nmG/5pG0b2GaBBTMK5IsmyHwayVAVzJ7PcBYlfs3ru2+7yLjZDR3rDvEk+4Ur2jL4rmqDeoNb4rnlNHqc03VItmm0ggKHvUEkdMtQ1OMxReQYSvjsJS8wCIuTzVsvDqlXsv87Yu/Oo7JxWJt09FWO0kuQ9s043j5leP4MZtnyc2xsQkW/hZulSWUgFTtCLwVnjMc3Pzww99MX9K49PTIRLw51cwV/K0ldmIoIxqcW6Q7CVExsBauCl1NUYCpv4QTqoxQM1ftSkU3FIpKYfdp4MDJMUUG3r17u9IjXzp8nNyyoEQoj8BSItjowm7cALlsJ3LsyA++cATPPXsAr5DTiliUTLahjdKDvzQrIdb3rV/buWIT8qLATaV6E17AHuCqpOqdr5q+56jYF69JWCqtkBOOUFepsO+qKlDcObCqW8bZude4cosKgUlyhN+r24kRC+wRY0EDW9e2k0CH8MvDQ8iUeQ92HIGQaIOke4F2qmxtSiGTzl1qr9fI+zK2bN+Auz7/Cex+5w4uSGXk6u72dRfactGe+MhIf5pIdzM9kV7RYqh9aKN26LWWn8pzuaIWQOqWElVZ7zyCQjjawfBiGRA+5emNvJCNRvl3itLdL4+cwehcjkKvFBrqj3rtSQiW/2TzapYWWy2/pzYatYaOEqRCfXzoFP7803vYqu1Pc/fpZlxiXLZBWr/1tj5G0w/lwtVk9mphCXlkoqpduEW1lSsei3CDUKSDsl9S9cnwwijmJxi+5+lBSz1sI32jDJH3KryeLd4WbVOv5m+ZhnsMSd1oQkvbZno9yKXKqcVRM6114J5qYg31eEd+cfwj+fTpS+6JX5YGzE+dGEp2XLPA3Lulzr6hnmHQVX9lyEaFPP4UtFTXUP2+xtKJfIKXsnctewo2ASWbyzbEHXneS/KQGwYkz2yzDGWdekjA9Ssq/EyLOiURWO2gerVSsNRkqzzngt09f37gu5ez4TdynLnJky8kOzYusLjfcmFpECDRySpEXLJkR6f2SIZB70meeZr0ZGT2RoBy3HlucZVUvtRBSra4RMDVvOretnQEaqfIELQUicOgoET9knTN0JeeqFgyzr97/FT/Q79p/q9L4OYmT7zQ0rH5kKlrt/CCQWnj6zJAhSTaZHPqqXpW7cEUQ5EuuraZLFtZ8oiHqZfUw25qh5TqmG7JPrqlOnHxdrksXLX6RJLPcPddeU6sheEXUvK6eqKi+jgFib52x/jpfd99vblfETudnRgaau3Y9APZ6uINEsu9uLzW1PFH0TYfjQ7aYni53Gi0TEc9kCPSjfqK21dCDhTb8XyFpOJFKZ9lQU6WFZPdhFHTRfi7EW6q3DAxvO+FK5n3FVPvmYmh9Ozk8Ydb2q/RfLW97KvVrLOVeqPY0DRqOVINX7NKdz0Rk0zu0jhql0avEQOvtvGiV2mH0kXLRGGL+3eyk1v1mPaw5bh3jI30T1zpnDW8iZHa0ZcyXecR3rRXbiw1T1PP61UNVgCw7MqeTJhNX27hHEnwAvXZkgppw6tWogadU/WmCiDCUlydcn7HNf2+a9597uT/D+INjjdlXH1c/Y7bejmru5iHffXHE+sTVYbWRBxXCLHoItQtC/mTDM8iC688RLDSOOVlQrywH9/w+knA7yumZ/rxJsdbMq4+Nm26JeXbVh+3qz7BvNmxXIsRj3qaoxDU5CZJfvEsJfiMYhn1wiysp8qERBHQ9pN9P5SWjb63ON4W45aPFA1lEu3grMWr20kCEprppxhoCUMkCapd6fkzac9ZTGuGOcgJnCFIMOQqj78dBi0fvwY9zdugWjaGJAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/testimonial/avatar4.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar4.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/button-group.js":
/*!****************************************!*\
  !*** ./src/components/button-group.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\button-group.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function ButtonGroup({
  next,
  previous
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "ButtonGroup");
}
const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    mb: -4,
    button: {
      bg: 'transparent',
      border: '0px solid',
      fontSize: 40,
      cursor: 'pointer',
      px: '2px',
      color: '#BBC7D7',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'text'
      },
      '&:focus': {
        outline: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Drawer(_ref) {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: 'drawer ${className} || " "} '.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: '0.4s'
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: drawerStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, drawerHandler));
}
;
Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};

/***/ }),

/***/ "./src/components/feature-card-column.js":
/*!***********************************************!*\
  !*** ./src/components/feature-card-column.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCardColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\feature-card-column.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    altText: altText,
    sx: styles.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, text)));
}
const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'left'],
    px: [4, null, 0]
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    width: ['80px', null, null, '90px', null, 'auto']
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9'
    }
  }
};

/***/ }),

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\feature-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    altText: altText,
    sx: styles.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, text)));
}
const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1
  },
  img: {
    width: ['70px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px']
    },
    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9'
    }
  }
};

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Amanda Wilson Art Gallery 2021"))));
}
const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column'
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%'
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'feature',
  label: 'Features'
}, {
  path: 'pricing',
  label: 'Pricing'
} //{
//path: 'testimonial',
//label: 'Testimonial',
//},
]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






function Header({
  className
}) {
  return (//
    Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
      sx: styles.header,
      className: className,
      id: "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      sx: styles.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, " Amanda Wilson")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      as: "nav",
      sx: styles.nav,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, _header_data__WEBPACK_IMPORTED_MODULE_6__["default"].map((menuItem, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      activeClass: "active",
      to: menuItem.path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, menuItem.label))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "donate__btn",
      variant: "secondary",
      "aria-label": "Get Started",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, "Contact"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    })))
  );
}
const positionAnim = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`; //styles that are called in header function above

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0]
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text'
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\header\\mobile-drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const social = [{
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaGithubAlt"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaDribbble"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })
}]; //toggling the side drawer and closing feature 

function MobileDrawer() {
  const {
    0: isDrawerOpen,
    1: setIsDrawerOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 6
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdMenu"], {
      size: "26px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 8
      }
    })) //props to pass into drawers
    ,
    open: isDrawerOpen,
    toggleHandler: () => setIsDrawerOpen(prevState => !prevState),
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdClose"], {
      size: "24px",
      color: "#000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close //next showing content in drawer
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 8
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map((menuItem, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    activeClass: "active",
    to: menuItem.path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, menuItem.label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 10
    }
  }, social.map((socialItem, i) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "span",
    key: i,
    sx: styles.social.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: socialItem.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, socialItem.icon))))))));
}
;
const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */





function Layout({
  children
}) {
  const {
    0: isSticky,
    1: setIsSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleStateChange = status => {
    if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    innerZ: 1001,
    top: 0,
    onStateChange: handleStateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: `${isSticky ? 'sticky' : 'unSticky'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    id: "content",
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "NavLink");
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), children || label);
}

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function List({
  items = [],
  parentStyle,
  childStyle
}) {
  return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "List");
}
const styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px'
  }
};

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function Logo(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    path: "/",
    sx: {
      variant: 'links.logo',
      display: 'flex',
      cursor: 'pointer',
      mr: 15
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }));
}

/***/ }),

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = 'Start Free Trial',
    anotherOption,
    points
  }
}) {
  return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, "PriceCard");
}
const styles = {
  pricingBox: {
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '1px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
      '&:before': {
        opacity: 0
      }
    }
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '-17px',
    letterSpacing: '-.14px',
    px: '12px'
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['30px', null, null, null, '40px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading'
    },
    '.package__name': {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, '30px'],
    lineHeight: 1,
    letterSpacing: '-0.55px',
    color: 'text',
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [4, 6],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      fontSize: [1, 2],
      fontWeight: 'normal'
    }
  },
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5'
      }
    }
  },
  buttonGroup: {
    textAlign: 'center',
    mt: ['30px', null, null, null, '35px'],
    '.free__trail': {
      color: 'secondary',
      width: '100%',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: ['14px', 1],
      p: '20px 0 0'
    }
  }
};

/***/ }),

/***/ "./src/components/rating.js":
/*!**********************************!*\
  !*** ./src/components/rating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\rating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rating = () => {
  return __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "Rating");
};

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./src/components/section-header.js":
/*!******************************************!*\
  !*** ./src/components/section-header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\section-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SectionHeader({
  title,
  slogan,
  isWhite
}) {
  //dynamic so we can change everytime, no duplicating code
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      variant: 'sectionHeader'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: {
      variant: 'sectionHeader.subTitle',
      color: isWhite ? 'white' : 'primary',
      opacity: isWhite ? 0.7 : 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, slogan), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: {
      variant: 'sectionHeader.subTitle',
      color: isWhite ? 'white' : 'primary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, title));
}

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SEO({
  description = '',
  author = '',
  meta,
  title = ''
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: []
};

/***/ }),

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard({
  src,
  altText,
  title,
  designation,
  social
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.memberThumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    className: "info__name",
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "info__designation",
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.socialShare,
    className: "social__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, social.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    key: item.id,
    href: item.path,
    className: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, item.icon))));
}
const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary'
      },
      '.info__designation': {
        color: 'primary'
      },
      '.social__share': {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1]
        }
      }
    }
  },
  memberThumb: {
    width: ['70px', '80px', '100px', null, null, '130px'],
    height: ['70px', '80px', '100px', null, null, '130px'],
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'primary',
    borderRadius: '50%'
  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1
    },
    designation: {
      fontSize: ['14px', null, null, 2],
      fontWeight: 'body',
      lineHeight: 'heading',
      color: 'text',
      transition: 'color 0.25s'
    }
  },
  socialShare: {
    position: ['relative', null, 'absolute'],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, '18px', 5],
    width: ['100%', null, 'auto'],
    display: 'flex',
    flexDirection: ['row', null, 'column'],
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s',
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ['text', null, 'primary'],
      lineHeight: '1em',
      my: [0, null, '-2px'],
      px: 1,
      transition: 'all 0.25s',
      '&:hover': {
        color: ['primary', null, 'text']
      }
    }
  }
};

/***/ }),

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\components\\text-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function TextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = '#'
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, subTitle), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, title)), description && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    className: "description",
    sx: styles.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, description), btnName && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: btnURL,
    variant: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    "aria-label": btnName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, btnName)));
}
const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0]
    }
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px']
    },
    title: {
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5
    }
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px'
  }
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var _sections_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/banner */ "./src/sections/banner.js");
/* harmony import */ var _sections_key_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/key-feature */ "./src/sections/key-feature.js");
/* harmony import */ var _sections_service_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/service-section */ "./src/sections/service-section.js");
/* harmony import */ var _sections_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections/feature */ "./src/sections/feature.js");
/* harmony import */ var _sections_core_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sections/core-feature */ "./src/sections/core-feature.js");
/* harmony import */ var _sections_workflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sections/workflow */ "./src/sections/workflow.js");
/* harmony import */ var _sections_package__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sections/package */ "./src/sections/package.js");
/* harmony import */ var _sections_team_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections/team-section */ "./src/sections/team-section.js");
/* harmony import */ var _sections_testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sections/testimonial */ "./src/sections/testimonial.js");
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "NextJS Landing Page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_sections_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(_sections_key_feature__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_sections_service_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(_sections_feature__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_sections_core_feature__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_sections_workflow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(_sections_package__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(_sections_team_section__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(_sections_testimonial__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })));
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_amandaP1_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/amandaP1.jpeg */ "./src/assets/amandaP1.jpeg");
/* harmony import */ var assets_amandaP1_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_amandaP1_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/shape-left.png */ "./src/assets/shape-left.png");
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-right.png */ "./src/assets/shape-right.png");
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





function Banner() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.banner,
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h1",
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Amanda Wilson"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Gallery"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Shop")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_amandaP1_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))));
}
const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%'
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7]
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto']
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_amandabought_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/amandabought.jpeg */ "./src/assets/amandabought.jpeg");
/* harmony import */ var assets_amandabought_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_amandabought_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const data = {
  subTitle: 'Sold Items',
  title: 'Check out what has sold in the past!',
  description: 'Check out what other people have bought from me in the past!',
  btnName: 'Go',
  btnURL: '#'
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_amandabought_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })))));
}
const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block']
  }
};

/***/ }),

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card.js */ "./src/components/feature-card.js");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/feature/performance.svg */ "./src/assets/feature/performance.svg");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/feature/partnership.svg */ "./src/assets/feature/partnership.svg");
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/feature/subscription.svg */ "./src/assets/feature/subscription.svg");
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/feature/support.svg */ "./src/assets/feature/support.svg");
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








const data = [{
  id: 1,
  imgSrc: assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'text title',
  title: 'title',
  text: ''
}, {
  id: 2,
  imgSrc: assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'text title',
  title: 'title',
  text: ''
}, {
  id: 3,
  imgSrc: assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'text title',
  title: 'title',
  text: ''
}, {
  id: 4,
  imgSrc: assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customer Support',
  title: 'Customer Support',
  text: ''
}];
function Feature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.feature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "",
    title: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "key=", item.id, "src=", item.imgSrc, "alt=", item.altText, "title=", item.title, "text=", item.text)))));
}
const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)']
  }
};

/***/ }),

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ "./src/assets/key-feature/performance.svg");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ "./src/assets/key-feature/partnership.svg");
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ "./src/assets/key-feature/subscription.svg");
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ "./src/assets/key-feature/support.svg");
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








const data = [{
  id: 1,
  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Instagram',
  title: 'Instagram',
  text: 'Check out my Instagram!'
}, {
  id: 2,
  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'FaceBook',
  title: 'FaceBook',
  text: 'Check out my Facebook!'
}, {
  id: 3,
  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Pinterest',
  title: 'Pinterest',
  text: 'Check out my Pinterest!'
}, {
  id: 4,
  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'My Portfolio',
  title: 'My Portfolio',
  text: 'Take a look at some of my other work on my portfolio.'
}];
function KeyFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "feature",
    sx: {
      variant: 'section.keyFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Want to see behind the scenes?",
    title: "Follow on instagram!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    src: item.imgSrc,
    alt: item.altText,
    title: item.title,
    text: item.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })))));
}
const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  }
};

/***/ }),

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\package.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */








const packages = {
  monthly: [{
    id: 1,
    name: '',
    description: '',
    buttonText: '',
    priceWithUnit: '$0',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }),
      text: "",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: '',
    description: '',
    priceWithUnit: '',
    buttonText: 'Create account',
    anotherOption: '',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }),
      text: "",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: '',
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }),
    name: '',
    description: '',
    priceWithUnit: '$',
    buttonText: ' ',
    anotherOption: '',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }),
      text: ' ',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }),
      text: "",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }]
  }],
  annual: [{
    id: 1,
    name: '',
    description: '',
    buttonText: '',
    priceWithUnit: '',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }),
      text: "",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: '',
    description: '',
    priceWithUnit: '',
    buttonText: '',
    anotherOption: '',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }),
      text: "",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: '',
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }),
    name: '',
    description: '',
    priceWithUnit: '$39',
    buttonText: 'Create account',
    anotherOption: '',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }
      }),
      text: '',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }
      }),
      text: "",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }
      }),
      text: '  ',
      isAvailable: true
    }]
  }]
};
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    draggable: false
  },
  tablet: {
    breakpoint: {
      max: 1023,
      min: 640
    },
    items: 2,
    draggable: true
  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    draggable: true
  }
};
function Package() {
  const {
    monthly,
    annual
  } = packages;
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    active: 'monthly',
    pricingPlan: monthly
  });
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 24
      }
    }),
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: ''
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    id: "pricing",
    sx: {
      variant: 'section.pricing'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    slogan: "",
    Title: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.buttonGroupInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    className: 'active',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  })))));
}
const fadeIn = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`
      }
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex'
      }
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0]
    }
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto'
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)'
      },
      '&:focus': {
        outline: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_amandapastel_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/amandapastel.jpeg */ "./src/assets/amandapastel.jpeg");
/* harmony import */ var assets_amandapastel_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_amandapastel_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/services/smart.svg */ "./src/assets/services/smart.svg");
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/services/secure.svg */ "./src/assets/services/secure.svg");
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\service-section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









const data = {
  subTitle: 'Amanda in Action',
  title: 'Sculpting Figures Using Pastel',
  features: [{
    id: 1,
    imgSrc: assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    altText: 'Where to Purchase',
    title: 'Where to Purchase',
    text: 'I do not deliver but I have pop-up shops all over orange county! Follow my Instagram for more details.'
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    altText: 'Learn More',
    title: 'Learn More',
    text: 'Discover the history and background behind my paintings.'
  }]
};
function ServiceSection() {
  const handleClick = e => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_amandapastel_jpeg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "Play Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, data.features.map(feature => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    key: feature.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: feature.imgSrc,
    alt: feature.altText,
    sx: styles.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, feature.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, feature.text))))))));
}
const playPluse = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;
const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7]
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block']
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s'
  },
  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
};

/***/ }),

/***/ "./src/sections/team-section.js":
/*!**************************************!*\
  !*** ./src/sections/team-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_team_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/team-card */ "./src/components/team-card.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_amandaFACE_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/amandaFACE.png */ "./src/assets/amandaFACE.png");
/* harmony import */ var assets_amandaFACE_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_amandaFACE_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\team-section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const data = [{
  id: 2,
  imgSrc: assets_amandaFACE_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Amanda Wilson',
  title: 'Amanda Wilson',
  designation: 'Artist',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    })
  }]
}];
function TeamSection() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "About",
    as: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_team_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    src: item.imgSrc,
    altText: item.altText,
    title: item.title,
    designation: item.designation,
    social: item.socialProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })))));
}
const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: ['repeat(2,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']
  }
};

/***/ }),

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









const data = [{
  id: 1,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}, {
  id: 2,
  title: 'Design Quality & performance',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 3,
  title: 'Layout and organized layers',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 4,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}];
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }
  });
}
const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: 'white',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'primary',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};

/***/ }),

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\there\\OneDrive\\Documents\\School\\ArtPage-458\\src\\sections\\workflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const data = [{
  id: 1,
  title: 'Set disbursement Instructions',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  title: 'Assembly retrieves funds from your account',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  title: 'Assembly initiates disbursement',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  title: 'Customer receives funds payment',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function WorkFlow() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  });
}
const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a})`
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a})`,
      top: 17
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#EA3A60',
    // primary button and link color
    secondary: '#2563FF',
    // secondary color - can be used for hover states
    muted: '#E4E4E4',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    default: {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FtYW5kYUZBQ0UucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYW1hbmRhUDEuanBlZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FtYW5kYWJvdWdodC5qcGVnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYW1hbmRhcGFzdGVsLmpwZWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd0V2ZW4uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYXJyb3dPZGQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3BlcmZvcm1hbmNlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvc3VwcG9ydC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9rZXktZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9rZXktZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9rZXktZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvc3VwcG9ydC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXR0ZXJuQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZXMvc2VjdXJlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2VzL3NtYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NoYXBlLWxlZnQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2hhcGUtcGF0dGVybjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2hhcGUtcGF0dGVybjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2hhcGUtcmlnaHQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUtZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY29yZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9rZXktZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZS1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy90ZWFtLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy93b3JrZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicmVzb2x2ZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiY2xlYW5QYXRobmFtZSIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQnV0dG9uR3JvdXAiLCJuZXh0IiwicHJldmlvdXMiLCJzdHlsZXMiLCJidXR0b25Hcm91cCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1iIiwiYnV0dG9uIiwiYmciLCJib3JkZXIiLCJmb250U2l6ZSIsImN1cnNvciIsInB4IiwiY29sb3IiLCJ0cmFuc2l0aW9uIiwib3V0bGluZSIsIkRyYXdlciIsImNsYXNzTmFtZSIsImNsb3NlQnV0dG9uIiwiY2xvc2VCdXR0b25TdHlsZSIsImRyYXdlckhhbmRsZXIiLCJ0b2dnbGVIYW5kbGVyIiwib3BlbiIsIndpZHRoIiwicGxhY2VtZW50IiwiZHJhd2VyU3R5bGUiLCJjbG9zZUJ0blN0eWxlIiwidHJpbSIsImRlZmF1bHRQcm9wcyIsIkZlYXR1cmVDYXJkQ29sdW1uIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwidGV4dCIsImNhcmQiLCJpbWciLCJ3cmFwcGVyIiwic3ViVGl0bGUiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIm14IiwibWwiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsIkZlYXR1cmVDYXJkIiwiaGVpZ2h0IiwiZmxleFNocmluayIsIm1yIiwibXQiLCJGb290ZXIiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJwdCIsInBiIiwibWVudXMiLCJuYXYiLCJmbGV4V3JhcCIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvcHlyaWdodCIsImxhYmVsIiwiSGVhZGVyIiwiaGVhZGVyIiwiY29udGFpbmVyIiwibWVudUl0ZW1zIiwibWFwIiwibWVudUl0ZW0iLCJwb3NpdGlvbkFuaW0iLCJrZXlmcmFtZXMiLCJweSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImFuaW1hdGlvbiIsImJveFNoYWRvdyIsImEiLCJzb2NpYWwiLCJpY29uIiwiTW9iaWxlRHJhd2VyIiwiaXNEcmF3ZXJPcGVuIiwic2V0SXNEcmF3ZXJPcGVuIiwidXNlU3RhdGUiLCJwcmV2U3RhdGUiLCJkcmF3ZXIiLCJjbG9zZSIsImNvbnRlbnQiLCJtZW51IiwibWVudUZvb3RlciIsInNvY2lhbEl0ZW0iLCJyaWdodCIsInpJbmRleCIsImJvcmRlckJvdHRvbSIsImZ3IiwiYm9yZGVyUmFkaXVzIiwiTGF5b3V0IiwiaXNTdGlja3kiLCJzZXRJc1N0aWNreSIsImhhbmRsZVN0YXRlQ2hhbmdlIiwic3RhdHVzIiwiU3RpY2t5IiwiU1RBVFVTX0ZJWEVEIiwiU1RBVFVTX09SSUdJTkFMIiwidmFyaWFudCIsIk5hdkxpbmsiLCJyZXN0IiwiTGlzdCIsIml0ZW1zIiwicGFyZW50U3R5bGUiLCJjaGlsZFN0eWxlIiwibGlzdEljb24iLCJwYWRkaW5nIiwiTG9nbyIsIlByaWNlQ2FyZCIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwicHJpY2luZ0JveCIsIm9wYWNpdHkiLCJsZXR0ZXJTcGFjaW5nIiwicHJpY2luZ0hlYWRlciIsIm1hcmdpbkJvdHRvbSIsInByaWNlIiwicGwiLCJsaXN0SXRlbSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJSYXRpbmciLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwibGFuZyIsIlRlYW1DYXJkIiwiZGVzaWduYXRpb24iLCJtZW1iZXJUaHVtYiIsImluZm9XcmFwcGVyIiwic29jaWFsU2hhcmUiLCJpZCIsIm15IiwiYm9yZGVyQ29sb3IiLCJib3R0b20iLCJUZXh0RmVhdHVyZSIsImJ0bk5hbWUiLCJidG5VUkwiLCJ0ZXh0VHJhbnNmb3JtIiwiSW5kZXhQYWdlIiwidGhlbWUiLCJCYW5uZXIiLCJiYW5uZXIiLCJjb250ZW50Qm94IiwiaW1hZ2VCb3giLCJCYW5uZXJJbWciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJTaGFwZUxlZnQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJTaGFwZVJpZ2h0IiwibWluSGVpZ2h0IiwiQ29yZUZlYXR1cmUiLCJjb250YWluZXJCb3giLCJ0aHVtYm5haWwiLCJGZWF0dXJlVGh1bWIiLCJzaGFwZUJveCIsInNoYXBlUGF0dGVybiIsInByIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJQYXJ0bmVyc2hpcCIsIlN1YnNjcmlwdGlvbiIsIlN1cHBvcnQiLCJGZWF0dXJlIiwiZ3JpZCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiS2V5RmVhdHVyZSIsInBhY2thZ2VzIiwibW9udGhseSIsImlzQXZhaWxhYmxlIiwiaGVhZGVySWNvbiIsImFubnVhbCIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJzZXRTdGF0ZSIsImFjdGl2ZSIsInByaWNpbmdQbGFuIiwic2xpZGVyUGFyYW1zIiwiYWRkaXRpb25hbFRyYW5zZnJvbSIsImFycm93cyIsImF1dG9QbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwic2xpZGVzVG9TbGlkZSIsImNvbnRhaW5lckNsYXNzIiwiY3VzdG9tQnV0dG9uR3JvdXAiLCJkb3RMaXN0Q2xhc3MiLCJmb2N1c09uU2VsZWN0IiwiaW5maW5pdGUiLCJrZXlCb2FyZENvbnRyb2wiLCJpdGVtQ2xhc3MiLCJtaW5pbXVtVG91Y2hEcmFnIiwicmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlIiwicmVuZGVyRG90c091dHNpZGUiLCJzaG93RG90cyIsInNsaWRlckNsYXNzIiwiYnV0dG9uR3JvdXBJbm5lciIsImZhZGVJbiIsImZhZGVJbjIiLCJwcmljaW5nV3JhcHBlciIsInByaWNpbmdJdGVtIiwiZmxleCIsIm1hcmdpbiIsImZlYXR1cmVzIiwiU21hcnQiLCJTZWN1cmUiLCJTZXJ2aWNlU2VjdGlvbiIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJzZXRWaWRlb09wZW4iLCJTZXJ2aWNlVGh1bWIiLCJ2aWRlb0J0biIsImZlYXR1cmUiLCJwbGF5UGx1c2UiLCJjb3JlRmVhdHVyZSIsIm9yZGVyIiwidHJhbnNmb3JtIiwic3ZnIiwidmlkZW9XcmFwcGVyIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwiaWZyYW1lIiwiTWVtYmVyMiIsInNvY2lhbFByb2ZpbGUiLCJUZWFtU2VjdGlvbiIsImF2YXRhciIsIkF2YXRhcjEiLCJyZXZpZXciLCJBdmF0YXIyIiwiQXZhdGFyMyIsIkF2YXRhcjQiLCJsYXB0b3AiLCJjYXJvdXNlbFBhcmFtcyIsIlRlc3RpbW9uaWFsQ2FyZCIsImNhcm91c2VsV3JhcHBlciIsInJldmlld0NhcmQiLCJ1bCIsImxpc3RTdHlsZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwib2JqZWN0Rml0IiwiaGVhZGluZyIsIldvcmtGbG93Iiwid29ya2Zsb3ciLCJQYXR0ZXJuQkciLCJBcnJvd09kZCIsIkFycm93RXZlbiIsImljb25Cb3giLCJjb2xvcnMiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmdfc2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRfc2Vjb25kYXJ5IiwiYm9yZGVyX2NvbG9yIiwieWVsbG93IiwicHJpbWFyeSIsInNlY29uZGFyeSIsIm11dGVkIiwiYWNjZW50IiwibW9kZXMiLCJkYXJrIiwiYnJlYWtwb2ludHMiLCJmb250cyIsImJvZHkiLCJmb250U2l6ZXMiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsImxldHRlclNwYWNpbmdzIiwiY2FwcyIsInNwYWNlIiwibGF5b3V0IiwidG9vbGJhciIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsIm5ld3MiLCJvdmVyZmxvdyIsInRlc3RpbW9uaWFsIiwic2VydmljZXMiLCJwcmljaW5nIiwic2VjdGlvbkhlYWRlciIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsImxlYWQiLCJsaW5rcyIsImRlZmF1bHQiLCJibG9nIiwibG9nbyIsImltYWdlcyIsImJ1dHRvbnMiLCJkZWZhdWx0QnRuIiwid2hpdGVCdXR0b24iLCJ0ZXh0QnV0dG9uIiwiY2FyZHMiLCJvZmZlciIsImZlYXR1cmVDYXJkIiwiZm9ybXMiLCJpbnB1dCIsInQiLCJiYWRnZXMiLCJyb290IiwiZm9udFNtb290aGluZyIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7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b0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FtYW5kYUZBQ0UtNmY1NjQ3NGM4ZDk5OTBiNTUwNDE3MDdlZDZkNmJiNTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FtYW5kYVAxLTgyZmYyMWU5NWNjMjUwYThhNzFkOTJjYTg3ODc0NmIzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYW1hbmRhYm91Z2h0LWJjNmNiYTU3NzhlMzEyYzFhYmMyMjM2NjkwNDNiMTFhLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYW1hbmRhcGFzdGVsLTkzNzYwYjZmMTZhNjI0YmFiMzY5ZmI1YmUyMmZhZDA2LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpBMElpQm9aV2xuYUhROUlqUXpJaUIyYVdWM1FtOTRQU0l3SURBZ01qQTBJRFF6SWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnbzhjR0YwYUNCa1BTSk5NQzQwT0RFeU1ERWdNVEF1TWpVM01VTXdMalE0TVRJd01TQXhNQzR5TlRjeElEa3lMamM0TVRJZ09ERXVOemcwTnlBeE9UVXVORGd4SURFd0xqSTFOekVpSUhOMGNtOXJaVDBpSTBNeVEwSkVSU0lnYzNSeWIydGxMWGRwWkhSb1BTSXhMalVpSUhOMGNtOXJaUzFrWVhOb1lYSnlZWGs5SWpVZ05TSXZQZ284Y0dGMGFDQmtQU0pOTVRnd0xqY2dNeTQwTnpRMU5VTXhPREF1TnlBekxqUTNORFUxSURFNU9TNDRNVFVnTFRJdU1EVXhOemNnTWpBeExqWXpOeUEwTGpJd09URTJRekl3TXk0ME5Ua2dNVEF1TkRjd01TQXlNREl1TURreklERTJMamswTkRRZ01UazJMakUzTmlBeU5TNDRNVFF5SWlCemRISnZhMlU5SWlORE1rTkNSRVVpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzQxSWlCemRISnZhMlV0WkdGemFHRnljbUY1UFNJMElEUWlMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpBMElpQm9aV2xuYUhROUlqUXpJaUIyYVdWM1FtOTRQU0l3SURBZ01qQTBJRFF6SWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnbzhjR0YwYUNCa1BTSk5NQzQ1T1RrM05UWWdNekl1TnpFNU5VTXdMams1T1RjMU5pQXpNaTQzTVRrMUlEa3pMakk1T1RnZ0xUTTRMamd3T0RFZ01UazJJRE15TGpjeE9UVWlJSE4wY205clpUMGlJME15UTBKRVJTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeExqVWlJSE4wY205clpTMWtZWE5vWVhKeVlYazlJalVnTlNJdlBnbzhjR0YwYUNCa1BTSk5NVGd4TGpJeE9TQXpPUzQwT1RjMlF6RTRNUzR5TVRrZ016a3VORGszTmlBeU1EQXVNek0wSURRMUxqQXlOQ0F5TURJdU1UVTJJRE00TGpjMk0wTXlNRE11T1RjNElETXlMalV3TVRrZ01qQXlMall4TVNBeU5pNHdNamMxSURFNU5pNDJPVFFnTVRjdU1UVTNOU0lnYzNSeWIydGxQU0lqUXpKRFFrUkZJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXVOU0lnYzNSeWIydGxMV1JoYzJoaGNuSmhlVDBpTkNBMElpOCtDand2YzNablBnbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFVpSUdobGFXZG9kRDBpTVRBMUlpQjJhV1YzUW05NFBTSXdJREFnT1RVZ01UQTFJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGdvOFp5Qm1hV3gwWlhJOUluVnliQ2dqWm1sc2RHVnlNRjlrS1NJK0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRjdU5EazVPU0F4Tnk0NU9UazVRell5TGpFek5UVWdNVGN1T1RrNU9TQTNNeTQ1T1RrNUlESTVMamcyTkRRZ056TXVPVGs1T1NBME5DNDBPVGs1UXpjekxqazVPVGtnTlRrdU1UTTFNeUEyTWk0eE16VTFJRGN3TGprNU9Ua2dORGN1TkRrNU9TQTNNQzQ1T1RrNVF6TXlMamcyTkRRZ056QXVPVGs1T1NBeU1TQTFPUzR4TXpVeklESXhJRFEwTGpRNU9UbERNakVnTWprdU9EWTBOQ0F6TWk0NE5qUTBJREUzTGprNU9Ua2dORGN1TkRrNU9TQXhOeTQ1T1RrNVdpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRRM0xqUTVPVGtnTVRjdU9UazVPVU0yTWk0eE16VTFJREUzTGprNU9Ua2dOek11T1RrNU9TQXlPUzQ0TmpRMElEY3pMams1T1RrZ05EUXVORGs1T1VNM015NDVPVGs1SURVNUxqRXpOVE1nTmpJdU1UTTFOU0EzTUM0NU9UazVJRFEzTGpRNU9Ua2dOekF1T1RrNU9VTXpNaTQ0TmpRMElEY3dMams1T1RrZ01qRWdOVGt1TVRNMU15QXlNU0EwTkM0ME9UazVRekl4SURJNUxqZzJORFFnTXpJdU9EWTBOQ0F4Tnk0NU9UazVJRFEzTGpRNU9Ua2dNVGN1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejRLUEM5blBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRReklEQXVPVGs1T1RNMlNEVXlMams1T1RsRE5qa3VOVFk0TlNBd0xqazVPVGt6TmlBNE1pNDVPVGs1SURFMExqUXpNVEVnT0RJdU9UazVPU0F6TUM0NU9UazVWalF3TGprNU9UbERPREl1T1RrNU9TQTFOeTQxTmpneUlEWTVMalUyT0RVZ056QXVPVGs1T0NBMU1pNDVPVGs1SURjd0xqazVPVGhJTkRORE1qWXVORE14TlNBM01DNDVPVGs0SURFeUxqazVPVGtnTlRjdU5UWTRNaUF4TWk0NU9UazVJRFF3TGprNU9UbFdNekF1T1RrNU9VTXhNaTQ1T1RrNUlERTBMalF6TVRFZ01qWXVORE14TlNBd0xqazVPVGt6TmlBME15QXdMams1T1Rrek5sb2lJR1pwYkd3OUlpTkdSalF6TmpFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME15QXdMams1T1Rrek5rZzFNaTQ1T1RrNVF6WTVMalUyT0RVZ01DNDVPVGs1TXpZZ09ESXVPVGs1T1NBeE5DNDBNekV4SURneUxqazVPVGtnTXpBdU9UazVPVlkwTUM0NU9UazVRemd5TGprNU9Ua2dOVGN1TlRZNE1pQTJPUzQxTmpnMUlEY3dMams1T1RnZ05USXVPVGs1T1NBM01DNDVPVGs0U0RRelF6STJMalF6TVRVZ056QXVPVGs1T0NBeE1pNDVPVGs1SURVM0xqVTJPRElnTVRJdU9UazVPU0EwTUM0NU9UazVWak13TGprNU9UbERNVEl1T1RrNU9TQXhOQzQwTXpFeElESTJMalF6TVRVZ01DNDVPVGs1TXpZZ05ETWdNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNVjlzYVc1bFlYSXBJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OVEV1TkRNeU1pQTBNUzQyTXprNFF6VXhMalkwTkRFZ05ERXVOREkwTnlBMU1TNDNOVEF5SURReExqRTNNRGtnTlRFdU56VXdNaUEwTUM0NE56YzBWak00TGpFMk9EaElOak5XTkRZdU1qazFNa00yTXlBME55NHdNemt5SURZeUxqY3pOemtnTkRjdU5qYzNOQ0EyTWk0eU1UTXlJRFE0TGpJd056VkROakV1TmpnNE55QTBPQzQzTXpneElEWXhMakExT0RFZ05Ea3VNREF6TWlBMk1DNHpNakUySURRNUxqQXdNekpJTXpVdU5qYzROME16TkM0NU5ESWdORGt1TURBek1pQXpOQzR6TVRFMElEUTRMamN6T0RFZ016TXVOemcyT1NBME9DNHlNRGMxUXpNekxqSTJNaklnTkRjdU5qYzNOQ0F6TXlBME55NHdNemt5SURNeklEUTJMakk1TlRKV016Z3VNVFk0T0VnME5DNHlOVlkwTUM0NE56YzBRelEwTGpJMUlEUXhMakUzTURrZ05EUXVNelUyTVNBME1TNDBNalEzSURRMExqVTJPRElnTkRFdU5qTTVPRU0wTkM0M09EQXlJRFF4TGpnMU16Y2dORFV1TURNeE15QTBNUzQ1TmpFeklEUTFMak15TVRZZ05ERXVPVFl4TTBnMU1DNDJOemczUXpVd0xqazJPRGdnTkRFdU9UWXhNeUExTVM0eU1qQXhJRFF4TGpnMU16Y2dOVEV1TkRNeU1pQTBNUzQyTXprNFdrMDFNQzR4TkRNeElETTRMakUyT0RoSU5EVXVPRFUzTVZZME1DNHpNelUxU0RVd0xqRTBNekZXTXpndU1UWTRPRnBOTmpJdU1qRXpNaUF5T0M0eE16QXhRell4TGpZNE9EY2dNamN1TlRrNE9TQTJNUzR3TlRneElESTNMak16TXprZ05qQXVNekl4TmlBeU55NHpNek01U0RVMExqUXlPRFZXTWpRdU5qSTFNME0xTkM0ME1qZzFJREkwTGpFM016Y2dOVFF1TWpjeU5DQXlNeTQzT1RBeklEVXpMamsxT1RnZ01qTXVORGN6TjBNMU15NDJORGMxSURJekxqRTFPRFlnTlRNdU1qWTNPQ0F5TXlBMU1pNDRNakUySURJelNEUXpMakUzT0RkRE5ESXVOek15TXlBeU15QTBNaTR6TlRJNUlESXpMakUxT0RZZ05ESXVNRFF3TkNBeU15NDBOek0zUXpReExqY3lOemdnTWpNdU56ZzVPQ0EwTVM0MU56RTJJREkwTGpFM016Y2dOREV1TlRjeE5pQXlOQzQyTWpVelZqSTNMak16TXpsSU16VXVOamM0TjBNek5DNDVORElnTWpjdU16TXpPU0F6TkM0ek1URTBJREkzTGpVNU9Ea2dNek11TnpnMk9TQXlPQzR4TXpBeFF6TXpMakkyTWpJZ01qZ3VOalU1TnlBek15QXlPUzR5T1RjeklETXpJRE13TGpBME1qVldNell1TlRRek5VZzJNMVl6TUM0d05ESTFRell6SURJNUxqSTVOek1nTmpJdU56TTNPU0F5T0M0Mk5UazNJRFl5TGpJeE16SWdNamd1TVRNd01WcE5OVEl1TWpnMU9DQXlOeTR6TXpNNVNEUXpMamN4TkRSV01qVXVNVFkyTjBnMU1pNHlPRFU0VmpJM0xqTXpNemxhSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284WkdWbWN6NEtQR1pwYkhSbGNpQnBaRDBpWm1sc2RHVnlNRjlrSWlCNFBTSXRNeTR3TlRFM05tVXRNRFVpSUhrOUlqa3VPVGs1T0RnaUlIZHBaSFJvUFNJNU5TSWdhR1ZwWjJoMFBTSTVOU0lnWm1sc2RHVnlWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCamIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dUxXWnBiSFJsY25NOUluTlNSMElpUGdvOFptVkdiRzl2WkNCbWJHOXZaQzF2Y0dGamFYUjVQU0l3SWlCeVpYTjFiSFE5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJdlBnbzhabVZEYjJ4dmNrMWhkSEpwZUNCcGJqMGlVMjkxY21ObFFXeHdhR0VpSUhSNWNHVTlJbTFoZEhKcGVDSWdkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXhNamNnTUNJdlBnbzhabVZQWm1aelpYUWdaSGs5SWpFeklpOCtDanhtWlVkaGRYTnphV0Z1UW14MWNpQnpkR1JFWlhacFlYUnBiMjQ5SWpFd0xqVWlMejRLUEdabFEyOXNiM0pOWVhSeWFYZ2dkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTVNBd0lEQWdNQ0F3SURBdU1qWTJOalkzSURBZ01DQXdJREFnTUM0ek5ERXhOellnTUNBd0lEQWdNQzR6SURBaUx6NEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqSTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0lnY21WemRXeDBQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpTHo0S1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmowaVUyOTFjbU5sUjNKaGNHaHBZeUlnYVc0eVBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzY2lJSEpsYzNWc2REMGljMmhoY0dVaUx6NEtQQzltYVd4MFpYSStDanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpVeExqWXpOVEVpSUhreFBTSXhNRE11TmpNMUlpQjRNajBpTVRBMkxqWXpOU0lnZVRJOUlqUXdMak0yTkRraUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajRLUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSTBZNE1EYzFPU0l2UGdvOGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTkNRelJGT1VNaUx6NEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWRERmZiR2x1WldGeUlpQjRNVDBpTlRNdU5ERXpNaUlnZVRFOUlqRXhNeTQwTVRNaUlIZ3lQU0l4TWpVdU5ERXpJaUI1TWowaU16QXVOVGcyT0NJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZ284YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmtZME1UWkRJaTgrQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwWkdORUl5UWlJdlBnbzhMMnhwYm1WaGNrZHlZV1JwWlc1MFBnbzhMMlJsWm5NK0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFVnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284WnlCbWFXeDBaWEk5SW5WeWJDZ2pabWxzZEdWeU1GOWtLU0krQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5ORGN1TlNBeE5pNDVPVGs1UXpZeUxqRXpOVFVnTVRZdU9UazVPU0EzTXk0NU9UazVJREk0TGpnMk5EUWdOek11T1RrNU9TQTBNeTQwT1RrNVF6Y3pMams1T1RrZ05UZ3VNVE0xTXlBMk1pNHhNelUxSURZNUxqazVPVGtnTkRjdU5TQTJPUzQ1T1RrNVF6TXlMamcyTkRRZ05qa3VPVGs1T1NBeU1TQTFPQzR4TXpVeklESXhJRFF6TGpRNU9UbERNakVnTWpndU9EWTBOQ0F6TWk0NE5qUTBJREUyTGprNU9Ua2dORGN1TlNBeE5pNDVPVGs1V2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFEzTGpVZ01UWXVPVGs1T1VNMk1pNHhNelUxSURFMkxqazVPVGtnTnpNdU9UazVPU0F5T0M0NE5qUTBJRGN6TGprNU9Ua2dORE11TkRrNU9VTTNNeTQ1T1RrNUlEVTRMakV6TlRNZ05qSXVNVE0xTlNBMk9TNDVPVGs1SURRM0xqVWdOamt1T1RrNU9VTXpNaTQ0TmpRMElEWTVMams1T1RrZ01qRWdOVGd1TVRNMU15QXlNU0EwTXk0ME9UazVRekl4SURJNExqZzJORFFnTXpJdU9EWTBOQ0F4Tmk0NU9UazVJRFEzTGpVZ01UWXVPVGs1T1ZvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NEtQQzluUGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFF5SURBdU9UazVPVE0yU0RVeExqazVPVGxETmpndU5UWTROU0F3TGprNU9Ua3pOaUE0TVM0NU9UazVJREUwTGpRek1URWdPREV1T1RrNU9TQXpNQzQ1T1RrNVZqUXdMams1T1RsRE9ERXVPVGs1T1NBMU55NDFOamd5SURZNExqVTJPRFVnTnpBdU9UazVPQ0ExTVM0NU9UazVJRGN3TGprNU9UaElOREpETWpVdU5ETXhOU0EzTUM0NU9UazRJREV4TGprNU9Ua2dOVGN1TlRZNE1pQXhNUzQ1T1RrNUlEUXdMams1T1RsV016QXVPVGs1T1VNeE1TNDVPVGs1SURFMExqUXpNVEVnTWpVdU5ETXhOU0F3TGprNU9Ua3pOaUEwTWlBd0xqazVPVGt6TmxvaUlHWnBiR3c5SWlOR1JqUXpOakVpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTWlBd0xqazVPVGt6TmtnMU1TNDVPVGs1UXpZNExqVTJPRFVnTUM0NU9UazVNellnT0RFdU9UazVPU0F4TkM0ME16RXhJRGd4TGprNU9Ua2dNekF1T1RrNU9WWTBNQzQ1T1RrNVF6Z3hMams1T1RrZ05UY3VOVFk0TWlBMk9DNDFOamcxSURjd0xqazVPVGdnTlRFdU9UazVPU0EzTUM0NU9UazRTRFF5UXpJMUxqUXpNVFVnTnpBdU9UazVPQ0F4TVM0NU9UazVJRFUzTGpVMk9ESWdNVEV1T1RrNU9TQTBNQzQ1T1RrNVZqTXdMams1T1RsRE1URXVPVGs1T1NBeE5DNDBNekV4SURJMUxqUXpNVFVnTUM0NU9UazVNellnTkRJZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1WOXNhVzVsWVhJcElpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5UVXVPVFE1TWlBek1TNHdNREkyUXpVMUxqZzFOelVnTXpBdU56azNNaUExTlM0Mk5qQXlJRE13TGpZMk5UVWdOVFV1TkRReU9TQXpNQzQyTmpVMVNEUTRMamd5TURsTU5UVXVNelUyTXlBeE9TNDRPVFJETlRVdU5EWTFNaUF4T1M0M01UUTBJRFUxTGpRM01UZ2dNVGt1TkRnM0lEVTFMak0zTXpVZ01Ua3VNekF4TlVNMU5TNHlOelV5SURFNUxqRXhORFFnTlRVdU1EZzNOQ0F4T0M0NU9UZzRJRFUwTGpnNE5DQXhPQzQ1T1RnNFNEUTFMamswTWpsRE5EVXVOek14TWlBeE9DNDVPVGc0SURRMUxqVXpOemdnTVRrdU1USXpOaUEwTlM0ME5ESTRJREU1TGpNeU1UUk1NemN1TURZd05pQXpOaTQ0TWpFMFF6TTJMamszTkNBek55NHdNREl4SURNMkxqazRNelVnTXpjdU1qRTJOaUF6Tnk0d09EVXhJRE0zTGpNNE9EWkRNemN1TVRnM05DQXpOeTQxTmpBM0lETTNMak0yTmpjZ016Y3VOalkxSURNM0xqVTJNRGNnTXpjdU5qWTFTRFF6TGpNd04wd3pOeTR3TkRVMUlEVXpMakU0T1RGRE16WXVPVE00TnlBMU15NDBOVFEzSURNM0xqQXpNemNnTlRNdU56WXlNeUF6Tnk0eU5qa2dOVE11T1RFek0wTXpOeTR6TlRrMElEVXpMamszTURNZ016Y3VORFlnTlRNdU9UazRPQ0F6Tnk0MU5qQXhJRFV6TGprNU9EaERNemN1TnpJd05DQTFNeTQ1T1RnNElETTNMamczT0RZZ05UTXVPVEkyT0NBek55NDVPRGd4SURVekxqYzVNVGhNTlRVdU9EY3dNeUF6TVM0Mk1qVXlRelUyTGpBeE1EWWdNekV1TkRVeE5TQTFOaTR3TkRBM0lETXhMakl3T0RVZ05UVXVPVFE1TWlBek1TNHdNREkyV2lJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEdSbFpuTStDanhtYVd4MFpYSWdhV1E5SW1acGJIUmxjakJmWkNJZ2VEMGlMVE11TURVeE56WmxMVEExSWlCNVBTSTRMams1T1RnNElpQjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlPVFVpSUdacGJIUmxjbFZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKelBTSnpVa2RDSWo0S1BHWmxSbXh2YjJRZ1pteHZiMlF0YjNCaFkybDBlVDBpTUNJZ2NtVnpkV3gwUFNKQ1lXTnJaM0p2ZFc1a1NXMWhaMlZHYVhnaUx6NEtQR1psUTI5c2IzSk5ZWFJ5YVhnZ2FXNDlJbE52ZFhKalpVRnNjR2hoSWlCMGVYQmxQU0p0WVhSeWFYZ2lJSFpoYkhWbGN6MGlNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNVEkzSURBaUx6NEtQR1psVDJabWMyVjBJR1I1UFNJeE15SXZQZ284Wm1WSFlYVnpjMmxoYmtKc2RYSWdjM1JrUkdWMmFXRjBhVzl1UFNJeE1DNDFJaTgrQ2p4bVpVTnZiRzl5VFdGMGNtbDRJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBdU9EazRNRE01SURBZ01DQXdJREFnTUM0eE1UYzJORGNnTUNBd0lEQWdNQ0F3TGpRek5USTVOQ0F3SURBZ01DQXdMak1nTUNJdlBnbzhabVZDYkdWdVpDQnRiMlJsUFNKdWIzSnRZV3dpSUdsdU1qMGlRbUZqYTJkeWIzVnVaRWx0WVdkbFJtbDRJaUJ5WlhOMWJIUTlJbVZtWm1WamRERmZaSEp2Y0ZOb1lXUnZkeUl2UGdvOFptVkNiR1Z1WkNCdGIyUmxQU0p1YjNKdFlXd2lJR2x1UFNKVGIzVnlZMlZIY21Gd2FHbGpJaUJwYmpJOUltVm1abVZqZERGZlpISnZjRk5vWVdSdmR5SWdjbVZ6ZFd4MFBTSnphR0Z3WlNJdlBnbzhMMlpwYkhSbGNqNEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWREQmZiR2x1WldGeUlpQjRNVDBpTlRFdU5qTTFNU0lnZVRFOUlqRXdNaTQyTXpVaUlIZ3lQU0l4TURZdU5qTTFJaUI1TWowaU16a3VNelkwT1NJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZ284YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmpnd056VTVJaTgrQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwSkRORVU1UXlJdlBnbzhMMnhwYm1WaGNrZHlZV1JwWlc1MFBnbzhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbkJoYVc1ME1WOXNhVzVsWVhJaUlIZ3hQU0kxTWk0ME1UTXlJaUI1TVQwaU1URXpMalF4TXlJZ2VESTlJakV5TkM0ME1UTWlJSGt5UFNJek1DNDFPRFk0SWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HT0RBM05Ua2lMejRLUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalFrTTBSVGxESWk4K0Nqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0Nqd3ZaR1ZtY3o0S1BDOXpkbWMrQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFVnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284WnlCbWFXeDBaWEk5SW5WeWJDZ2pabWxzZEdWeU1GOWtLU0krQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5ORGN1TkRrNU9TQXhOaTQ1T1RrNVF6WXlMakV6TlRRZ01UWXVPVGs1T1NBM05DQXlPQzQ0TmpRMElEYzBJRFF6TGpRNU9UbEROelFnTlRndU1UTTFNeUEyTWk0eE16VTBJRFk1TGprNU9Ua2dORGN1TkRrNU9TQTJPUzQ1T1RrNVF6TXlMamcyTkRRZ05qa3VPVGs1T1NBeU1TQTFPQzR4TXpVeklESXhJRFF6TGpRNU9UbERNakVnTWpndU9EWTBOQ0F6TWk0NE5qUTBJREUyTGprNU9Ua2dORGN1TkRrNU9TQXhOaTQ1T1RrNVdpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnbzhMMmMrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OREV1T1RrNU9TQXdMams1T1Rrek5rZzFNa00yT0M0MU5qZzFJREF1T1RrNU9UTTJJRGd5SURFMExqUXpNVEVnT0RJZ016QXVPVGs1T1ZZME1DNDVPVGs1UXpneUlEVTNMalUyT0RJZ05qZ3VOVFk0TlNBM01DNDVPVGs0SURVeUlEY3dMams1T1RoSU5ERXVPVGs1T1VNeU5TNDBNekUwSURjd0xqazVPVGdnTVRFdU9UazVPU0ExTnk0MU5qZ3lJREV4TGprNU9Ua2dOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXhMams1T1RrZ01UUXVORE14TVNBeU5TNDBNekUwSURBdU9UazVPVE0ySURReExqazVPVGtnTUM0NU9UazVNelphSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OREV1T1RrNU9TQXdMams1T1Rrek5rZzFNa00yT0M0MU5qZzFJREF1T1RrNU9UTTJJRGd5SURFMExqUXpNVEVnT0RJZ016QXVPVGs1T1ZZME1DNDVPVGs1UXpneUlEVTNMalUyT0RJZ05qZ3VOVFk0TlNBM01DNDVPVGs0SURVeUlEY3dMams1T1RoSU5ERXVPVGs1T1VNeU5TNDBNekUwSURjd0xqazVPVGdnTVRFdU9UazVPU0ExTnk0MU5qZ3lJREV4TGprNU9Ua2dOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXhMams1T1RrZ01UUXVORE14TVNBeU5TNDBNekUwSURBdU9UazVPVE0ySURReExqazVPVGtnTUM0NU9UazVNelphSWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTUY5c2FXNWxZWElwSWk4K0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTmpRdU5UUTBNU0F6TVM0NE5UZzFRelkwTGpVME9UZ2dNekV1T1RZd055QTJOQzQxTkRJMElETXlMakEyTkRRZ05qUXVOVEUyT0NBek1pNHhOamczVERZeUxqSXpORFlnTkRFdU16TTBPRU0yTWk0eE1UazBJRFF4TGpjNU5qRWdOakV1TnpBM01pQTBNaTR4TWpFMElEWXhMakl6TXpRZ05ESXVNVEkwTVV3ME55NDFNems1SURReUxqRTVNelJETkRjdU5UTTRNaUEwTWk0eE9UTTBJRFEzTGpVek5qUWdOREl1TVRrek5DQTBOeTQxTXpRMklEUXlMakU1TXpSSU16TXVPRFF4TVVNek15NHpOalEySURReUxqRTVNelFnTXpJdU9UUTVOaUEwTVM0NE5qY3hJRE15TGpnek5EWWdOREV1TkRBek1Vd3pNQzQxTlRJeklETXlMakl3TWtNek1DNDFNalU1SURNeUxqQTVOVFlnTXpBdU5URTROQ0F6TVM0NU9EZzJJRE13TGpVeU5TQXpNUzQ0T0RNNFF6STVMalkwTWpFZ016RXVOakEwTnlBeU9TQXpNQzQzTnpVeUlESTVJREk1TGpjNU56ZERNamtnTWpndU5Ua3dPQ0F5T1M0NU56Y3lJREkzTGpZd09UWWdNekV1TVRjNE5TQXlOeTQyTURrMlF6TXlMak0zT1RnZ01qY3VOakE1TmlBek15NHpOVGNnTWpndU5Ua3dPQ0F6TXk0ek5UY2dNamt1TnprM04wTXpNeTR6TlRjZ016QXVORGMyT0NBek15NHdORGNnTXpFdU1EZzBNeUF6TWk0MU5qRTJJRE14TGpRNE5qUk1NelV1TkRFNUlETTBMak0zTmpoRE16WXVNVFF4TWlBek5TNHhNRGMwSURNM0xqRTBNeklnTXpVdU5USTJPQ0F6T0M0eE5qZzBJRE0xTGpVeU5qaERNemt1TXpnd055QXpOUzQxTWpZNElEUXdMalV6TmpRZ016UXVPVFE0TXlBME1TNHlOalF6SURNekxqazRURFExTGprMk1ESWdNamN1TnpNeU1VTTBOUzQxTmpVNElESTNMak16TmpVZ05EVXVNekl4TkNBeU5pNDNPRGszSURRMUxqTXlNVFFnTWpZdU1UZzJOVU0wTlM0ek1qRTBJREkwTGprNElEUTJMakk1T0RZZ01qTXVPVGs0TXlBME55NDBPVGs1SURJekxqazVPRE5ETkRndU56QXhNaUF5TXk0NU9UZ3pJRFE1TGpZM09EUWdNalF1T1RnZ05Ea3VOamM0TkNBeU5pNHhPRFkxUXpRNUxqWTNPRFFnTWpZdU56Y3hOQ0EwT1M0ME5EY3lJREkzTGpNd01pQTBPUzR3TnpNeklESTNMalk1TlVNME9TNHdOelExSURJM0xqWTVOamNnTkRrdU1EYzJNU0F5Tnk0Mk9UZ3pJRFE1TGpBM056TWdNamN1TmprNU9VdzFNeTQzTXpreElETXpMamsyTkRsRE5UUXVORFkyT0NBek5DNDVOREkwSURVMUxqWXlOallnTXpVdU5USTJPQ0ExTmk0NE5ESXpJRE0xTGpVeU5qaEROVGN1T0RjM0lETTFMalV5TmpnZ05UZ3VPRFVnTXpVdU1USXhPU0ExT1M0MU9ERTBJRE0wTGpNNE56Vk1Oakl1TkRVMk9DQXpNUzQwT1RrNVF6WXhMamsyTVRJZ016RXVNRGs0TXlBMk1TNDJOREk1SURNd0xqUTROVFFnTmpFdU5qUXlPU0F5T1M0M09UYzNRell4TGpZME1qa2dNamd1TlRrd09DQTJNaTQyTWpBeUlESTNMall3T1RZZ05qTXVPREl4TlNBeU55NDJNRGsyUXpZMUxqQXlNamNnTWpjdU5qQTVOaUEyTmlBeU9DNDFPVEE0SURZMklESTVMamM1TnpkRE5qWWdNekF1TnpRNE9DQTJOUzR6T1RBMklETXhMalUxT0RVZ05qUXVOVFEwTVNBek1TNDROVGcxV2swMk1pNHdNVEU0SURRMUxqUTFOamxETmpJdU1ERXhPQ0EwTkM0NE9ESXhJRFl4TGpVME56TWdORFF1TkRFMU5TQTJNQzQ1TnpRMElEUTBMalF4TlRWSU16UXVNVFF3T0VNek15NDFOamM1SURRMExqUXhOVFVnTXpNdU1UQXpOQ0EwTkM0NE9ESXhJRE16TGpFd016UWdORFV1TkRVMk9WWTBOeTQ1TlRZNVF6TXpMakV3TXpRZ05EZ3VOVE15TnlBek15NDFOamM1SURRNExqazVPRGdnTXpRdU1UUXdPQ0EwT0M0NU9UZzRTRFl3TGprM05EUkROakV1TlRRM015QTBPQzQ1T1RnNElEWXlMakF4TVRnZ05EZ3VOVE15TnlBMk1pNHdNVEU0SURRM0xqazFOamxXTkRVdU5EVTJPVm9pSUdacGJHdzlJbmRvYVhSbElpOCtDanhrWldaelBnbzhabWxzZEdWeUlHbGtQU0ptYVd4MFpYSXdYMlFpSUhnOUlqRXVNVFEwTkRGbExUQTFJaUI1UFNJNExqazVPVGc0SWlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU9UVWlJR1pwYkhSbGNsVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnWTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6UFNKelVrZENJajRLUEdabFJteHZiMlFnWm14dmIyUXRiM0JoWTJsMGVUMGlNQ0lnY21WemRXeDBQU0pDWVdOclozSnZkVzVrU1cxaFoyVkdhWGdpTHo0S1BHWmxRMjlzYjNKTllYUnlhWGdnYVc0OUlsTnZkWEpqWlVGc2NHaGhJaUIwZVhCbFBTSnRZWFJ5YVhnaUlIWmhiSFZsY3owaU1DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01USTNJREFpTHo0S1BHWmxUMlptYzJWMElHUjVQU0l4TXlJdlBnbzhabVZIWVhWemMybGhia0pzZFhJZ2MzUmtSR1YyYVdGMGFXOXVQU0l4TUM0MUlpOCtDanhtWlVOdmJHOXlUV0YwY21sNElIUjVjR1U5SW0xaGRISnBlQ0lnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREF1T1RreU1UVTNJREFnTUNBd0lEQWdNQzR6TkRVd09UZ2dNQ0F3SURBZ01DQXdMalEwTnpBMU9TQXdJREFnTUNBd0xqTWdNQ0l2UGdvOFptVkNiR1Z1WkNCdGIyUmxQU0p1YjNKdFlXd2lJR2x1TWowaVFtRmphMmR5YjNWdVpFbHRZV2RsUm1sNElpQnlaWE4xYkhROUltVm1abVZqZERGZlpISnZjRk5vWVdSdmR5SXZQZ284Wm1WQ2JHVnVaQ0J0YjJSbFBTSnViM0p0WVd3aUlHbHVQU0pUYjNWeVkyVkhjbUZ3YUdsaklpQnBiakk5SW1WbVptVmpkREZmWkhKdmNGTm9ZV1J2ZHlJZ2NtVnpkV3gwUFNKemFHRndaU0l2UGdvOEwyWnBiSFJsY2o0S1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSndZV2x1ZERCZmJHbHVaV0Z5SWlCNE1UMGlOVEl1TkRFek1pSWdlVEU5SWpFeE15NDBNVE1pSUhneVBTSXhNalF1TkRFeklpQjVNajBpTXpBdU5UZzJPQ0lnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaVBnbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSa1kxT0RVNElpOCtDanh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBZNE5UZEJOaUl2UGdvOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvOEwyUmxabk0rQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU1UQTFJaUIyYVdWM1FtOTRQU0l3SURBZ09UVWdNVEExSWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnbzhaeUJtYVd4MFpYSTlJblZ5YkNnalptbHNkR1Z5TUY5a0tTSStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5EY3VORGs1T1NBeE55NDVPVGs1UXpZeUxqRXpOVFFnTVRjdU9UazVPU0EzTXk0NU9UazVJREk1TGpnMk5EUWdOek11T1RrNU9TQTBOQzQwT1RrNVF6Y3pMams1T1RrZ05Ua3VNVE0xTXlBMk1pNHhNelUwSURjd0xqazVPVGtnTkRjdU5EazVPU0EzTUM0NU9UazVRek15TGpnMk5EUWdOekF1T1RrNU9TQXlNQzQ1T1RrNUlEVTVMakV6TlRNZ01qQXVPVGs1T1NBME5DNDBPVGs1UXpJd0xqazVPVGtnTWprdU9EWTBOQ0F6TWk0NE5qUTBJREUzTGprNU9Ua2dORGN1TkRrNU9TQXhOeTQ1T1RrNVdpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRRM0xqUTVPVGtnTVRjdU9UazVPVU0yTWk0eE16VTBJREUzTGprNU9Ua2dOek11T1RrNU9TQXlPUzQ0TmpRMElEY3pMams1T1RrZ05EUXVORGs1T1VNM015NDVPVGs1SURVNUxqRXpOVE1nTmpJdU1UTTFOQ0EzTUM0NU9UazVJRFEzTGpRNU9Ua2dOekF1T1RrNU9VTXpNaTQ0TmpRMElEY3dMams1T1RrZ01qQXVPVGs1T1NBMU9TNHhNelV6SURJd0xqazVPVGtnTkRRdU5EazVPVU15TUM0NU9UazVJREk1TGpnMk5EUWdNekl1T0RZME5DQXhOeTQ1T1RrNUlEUTNMalE1T1RrZ01UY3VPVGs1T1ZvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NEtQQzluUGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFF5TGprNU9Ua2dNQzQ1T1RrNU16WklOVE5ETmprdU5UWTROU0F3TGprNU9Ua3pOaUE0TXlBeE5DNDBNekV4SURneklETXdMams1T1RsV05EQXVPVGs1T1VNNE15QTFOeTQxTmpneUlEWTVMalUyT0RVZ056QXVPVGs1T0NBMU15QTNNQzQ1T1RrNFNEUXlMams1T1RsRE1qWXVORE14TkNBM01DNDVPVGs0SURFeUxqazVPVGtnTlRjdU5UWTRNaUF4TWk0NU9UazVJRFF3TGprNU9UbFdNekF1T1RrNU9VTXhNaTQ1T1RrNUlERTBMalF6TVRFZ01qWXVORE14TkNBd0xqazVPVGt6TmlBME1pNDVPVGs1SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFF5TGprNU9Ua2dNQzQ1T1RrNU16WklOVE5ETmprdU5UWTROU0F3TGprNU9Ua3pOaUE0TXlBeE5DNDBNekV4SURneklETXdMams1T1RsV05EQXVPVGs1T1VNNE15QTFOeTQxTmpneUlEWTVMalUyT0RVZ056QXVPVGs1T0NBMU15QTNNQzQ1T1RrNFNEUXlMams1T1RsRE1qWXVORE14TkNBM01DNDVPVGs0SURFeUxqazVPVGtnTlRjdU5UWTRNaUF4TWk0NU9UazVJRFF3TGprNU9UbFdNekF1T1RrNU9VTXhNaTQ1T1RrNUlERTBMalF6TVRFZ01qWXVORE14TkNBd0xqazVPVGt6TmlBME1pNDVPVGs1SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZERGZmJHbHVaV0Z5S1NJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRZd0xqQTVPVGtnTWpFdU9UazVORWd6Tmk0NVF6TTFMak13TkRrZ01qRXVPVGs1TkNBek15NDVPVGs1SURJekxqTXdNemNnTXpNdU9UazVPU0F5TkM0NE9UZzRWalV3TGprNU9EaE1Nemt1TnprNU9TQTBOUzR4T1RnNFNEWXdMakE1T1RsRE5qRXVOamsxSURRMUxqRTVPRGdnTmpJdU9UazVPU0EwTXk0NE9UUWdOakl1T1RrNU9TQTBNaTR5T1RnNFZqSTBMamc1T0RoRE5qSXVPVGs1T1NBeU15NHpNRE0zSURZeExqWTVOU0F5TVM0NU9UazBJRFl3TGpBNU9Ua2dNakV1T1RrNU5Gb2lJR1pwYkd3OUlpTkdSVVpCUmtNaUx6NEtQR1JsWm5NK0NqeG1hV3gwWlhJZ2FXUTlJbVpwYkhSbGNqQmZaQ0lnZUQwaUxUa3VPVEU0TWpGbExUQTFJaUI1UFNJNUxqazVPVGc0SWlCM2FXUjBhRDBpT1RVaUlHaGxhV2RvZEQwaU9UVWlJR1pwYkhSbGNsVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnWTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6UFNKelVrZENJajRLUEdabFJteHZiMlFnWm14dmIyUXRiM0JoWTJsMGVUMGlNQ0lnY21WemRXeDBQU0pDWVdOclozSnZkVzVrU1cxaFoyVkdhWGdpTHo0S1BHWmxRMjlzYjNKTllYUnlhWGdnYVc0OUlsTnZkWEpqWlVGc2NHaGhJaUIwZVhCbFBTSnRZWFJ5YVhnaUlIWmhiSFZsY3owaU1DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01USTNJREFpTHo0S1BHWmxUMlptYzJWMElHUjVQU0l4TXlJdlBnbzhabVZIWVhWemMybGhia0pzZFhJZ2MzUmtSR1YyYVdGMGFXOXVQU0l4TUM0MUlpOCtDanhtWlVOdmJHOXlUV0YwY21sNElIUjVjR1U5SW0xaGRISnBlQ0lnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREF1T1RRNU1ESWdNQ0F3SURBZ01DQXdMalV3TVRrMk1TQXdJREFnTUNBd0lEQXVNamMwTlRFZ01DQXdJREFnTUM0eklEQWlMejRLUEdabFFteGxibVFnYlc5a1pUMGlibTl5YldGc0lpQnBiakk5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJZ2NtVnpkV3gwUFNKbFptWmxZM1F4WDJSeWIzQlRhR0ZrYjNjaUx6NEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqMGlVMjkxY21ObFIzSmhjR2hwWXlJZ2FXNHlQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpSUhKbGMzVnNkRDBpYzJoaGNHVWlMejRLUEM5bWFXeDBaWEkrQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqVXhMall6TlRFaUlIa3hQU0l4TURNdU5qTTFJaUI0TWowaU1UQTJMall6TlNJZ2VUSTlJalF3TGpNMk5Ea2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0S1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUkwWTRNRGMxT1NJdlBnbzhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5DUXpSRk9VTWlMejRLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDRLUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKd1lXbHVkREZmYkdsdVpXRnlJaUI0TVQwaU5UTXVOREV6TWlJZ2VURTlJakV4TXk0ME1UTWlJSGd5UFNJeE1qVXVOREV6SWlCNU1qMGlNekF1TlRnMk9DSWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpUGdvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJalJqUTJRalExSWk4K0NqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMFZGUVRnME9TSXZQZ284TDJ4cGJtVmhja2R5WVdScFpXNTBQZ284TDJSbFpuTStDand2YzNablBnbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFlpSUdobGFXZG9kRDBpTVRBMElpQjJhV1YzUW05NFBTSXdJREFnT1RZZ01UQTBJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGdvOFp5Qm1hV3gwWlhJOUluVnliQ2dqWm1sc2RHVnlNRjlrS1NJK0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRndU1qRTBNaUF4Tmk0NU9UazVRell5TGpnek5qY2dNVFl1T1RrNU9TQTNOQzQyT1RBMUlESTRMamcyTkRRZ056UXVOamt3TlNBME15NDBPVGs1UXpjMExqWTVNRFVnTlRndU1UTTFNeUEyTWk0NE16WTNJRFk1TGprNU9Ua2dORGd1TWpFME1pQTJPUzQ1T1RrNVF6TXpMalU1TVRrZ05qa3VPVGs1T1NBeU1TNDNNemd4SURVNExqRXpOVE1nTWpFdU56TTRNU0EwTXk0ME9UazVRekl4TGpjek9ERWdNamd1T0RZME5DQXpNeTQxT1RFNUlERTJMams1T1RrZ05EZ3VNakUwTWlBeE5pNDVPVGs1V2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFE0TGpJeE5ESWdNVFl1T1RrNU9VTTJNaTQ0TXpZM0lERTJMams1T1RrZ056UXVOamt3TlNBeU9DNDROalEwSURjMExqWTVNRFVnTkRNdU5EazVPVU0zTkM0Mk9UQTFJRFU0TGpFek5UTWdOakl1T0RNMk55QTJPUzQ1T1RrNUlEUTRMakl4TkRJZ05qa3VPVGs1T1VNek15NDFPVEU1SURZNUxqazVPVGtnTWpFdU56TTRNU0ExT0M0eE16VXpJREl4TGpjek9ERWdORE11TkRrNU9VTXlNUzQzTXpneElESTRMamcyTkRRZ016TXVOVGt4T1NBeE5pNDVPVGs1SURRNExqSXhORElnTVRZdU9UazVPVm9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0S1BDOW5QZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUXlMamN5TURJZ01DNDVPVGs1TXpaSU5USXVOekV4TWtNMk9TNHlOalE1SURBdU9UazVPVE0ySURneUxqWTRORE1nTVRRdU5ETXhNU0E0TWk0Mk9EUXpJRE13TGprNU9UbFdOREF1T1RrNU9VTTRNaTQyT0RReklEVTNMalUyT0RJZ05qa3VNalkwT1NBM01DNDVPVGs0SURVeUxqY3hNVElnTnpBdU9UazVPRWcwTWk0M01qQXlRekkyTGpFMk5qWWdOekF1T1RrNU9DQXhNaTQzTkRjeUlEVTNMalUyT0RJZ01USXVOelEzTWlBME1DNDVPVGs1VmpNd0xqazVPVGxETVRJdU56UTNNaUF4TkM0ME16RXhJREkyTGpFMk5qWWdNQzQ1T1RrNU16WWdOREl1TnpJd01pQXdMams1T1Rrek5sb2lJR1pwYkd3OUlpTkdSalF6TmpFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1pNDNNakF5SURBdU9UazVPVE0yU0RVeUxqY3hNVEpETmprdU1qWTBPU0F3TGprNU9Ua3pOaUE0TWk0Mk9EUXpJREUwTGpRek1URWdPREl1TmpnME15QXpNQzQ1T1RrNVZqUXdMams1T1RsRE9ESXVOamcwTXlBMU55NDFOamd5SURZNUxqSTJORGtnTnpBdU9UazVPQ0ExTWk0M01URXlJRGN3TGprNU9UaElOREl1TnpJd01rTXlOaTR4TmpZMklEY3dMams1T1RnZ01USXVOelEzTWlBMU55NDFOamd5SURFeUxqYzBOeklnTkRBdU9UazVPVll6TUM0NU9UazVRekV5TGpjME56SWdNVFF1TkRNeE1TQXlOaTR4TmpZMklEQXVPVGs1T1RNMklEUXlMamN5TURJZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1WOXNhVzVsWVhJcElpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5URXVNVFEwSURReExqWXpOekZETlRFdU16VTFPQ0EwTVM0ME1qSWdOVEV1TkRZeE9DQTBNUzR4TmpneUlEVXhMalEyTVRnZ05EQXVPRGMwTjFZek9DNHhOall4U0RZeUxqY3dNVFZXTkRZdU1qa3lOVU0yTWk0M01ERTFJRFEzTGpBek5qVWdOakl1TkRNNU5pQTBOeTQyTnpRM0lEWXhMamt4TlRRZ05EZ3VNakEwT0VNMk1TNHpPVEUwSURRNExqY3pOVFFnTmpBdU56WXhNaUEwT1M0d01EQTFJRFl3TGpBeU5UVWdORGt1TURBd05VZ3pOUzQwTURRM1F6TTBMalkyT0RjZ05Ea3VNREF3TlNBek5DNHdNemcySURRNExqY3pOVFFnTXpNdU5URTBOU0EwT0M0eU1EUTRRek15TGprNU1ETWdORGN1TmpjME55QXpNaTQzTWpnMElEUTNMakF6TmpVZ016SXVOekk0TkNBME5pNHlPVEkxVmpNNExqRTJOakZJTkRNdU9UWTRNMVkwTUM0NE56UTNRelF6TGprMk9ETWdOREV1TVRZNE1pQTBOQzR3TnpReklEUXhMalF5TWlBME5DNHlPRFl4SURReExqWXpOekZETkRRdU5EazRJRFF4TGpnMU1TQTBOQzQzTkRnNUlEUXhMamsxT0RZZ05EVXVNRE00T1NBME1TNDVOVGcyU0RVd0xqTTVNVEpETlRBdU5qZ3hNU0EwTVM0NU5UZzJJRFV3TGprek1qRWdOREV1T0RVeElEVXhMakUwTkNBME1TNDJNemN4V2swME9TNDROVFl4SURNNExqRTJOakZJTkRVdU5UY3pPVlkwTUM0ek16STRTRFE1TGpnMU5qRldNemd1TVRZMk1WcE5OakV1T1RFMU5DQXlPQzR4TWpjMFF6WXhMak01TVRRZ01qY3VOVGsyTWlBMk1DNDNOakV5SURJM0xqTXpNVElnTmpBdU1ESTFOU0F5Tnk0ek16RXlTRFUwTGpFek56WldNalF1TmpJeU5rTTFOQzR4TXpjMklESTBMakUzTVNBMU15NDVPREUzSURJekxqYzROellnTlRNdU5qWTVNeUF5TXk0ME56RkROVE11TXpVM05DQXlNeTR4TlRVNUlEVXlMamszT0NBeU1pNDVPVGN6SURVeUxqVXpNaklnTWpJdU9UazNNMGcwTWk0NE9UaEROREl1TkRVeE9TQXlNaTQ1T1RjeklEUXlMakEzTWprZ01qTXVNVFUxT1NBME1TNDNOakEySURJekxqUTNNVU0wTVM0ME5EZzBJREl6TGpjNE56RWdOREV1TWpreU15QXlOQzR4TnpFZ05ERXVNamt5TXlBeU5DNDJNakkyVmpJM0xqTXpNVEpJTXpVdU5EQTBOME16TkM0Mk5qZzNJREkzTGpNek1USWdNelF1TURNNE5pQXlOeTQxT1RZeUlETXpMalV4TkRVZ01qZ3VNVEkzTkVNek1pNDVPVEF6SURJNExqWTFOeUF6TWk0M01qZzBJREk1TGpJNU5EWWdNekl1TnpJNE5DQXpNQzR3TXprNFZqTTJMalUwTURoSU5qSXVOekF4TlZZek1DNHdNems0UXpZeUxqY3dNVFVnTWprdU1qazBOaUEyTWk0ME16azJJREk0TGpZMU55QTJNUzQ1TVRVMElESTRMakV5TnpSYVRUVXhMams1TmprZ01qY3VNek14TWtnME15NDBNek15VmpJMUxqRTJORWcxTVM0NU9UWTVWakkzTGpNek1USmFJaUJtYVd4c1BTSjNhR2wwWlNJdlBnbzhaR1ZtY3o0S1BHWnBiSFJsY2lCcFpEMGlabWxzZEdWeU1GOWtJaUI0UFNJd0xqY3pPREEyT0NJZ2VUMGlPU0lnZDJsa2RHZzlJamswTGprMU1qUWlJR2hsYVdkb2REMGlPVFVpSUdacGJIUmxjbFZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKelBTSnpVa2RDSWo0S1BHWmxSbXh2YjJRZ1pteHZiMlF0YjNCaFkybDBlVDBpTUNJZ2NtVnpkV3gwUFNKQ1lXTnJaM0p2ZFc1a1NXMWhaMlZHYVhnaUx6NEtQR1psUTI5c2IzSk5ZWFJ5YVhnZ2FXNDlJbE52ZFhKalpVRnNjR2hoSWlCMGVYQmxQU0p0WVhSeWFYZ2lJSFpoYkhWbGN6MGlNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNVEkzSURBaUx6NEtQR1psVDJabWMyVjBJR1I1UFNJeE15SXZQZ284Wm1WSFlYVnpjMmxoYmtKc2RYSWdjM1JrUkdWMmFXRjBhVzl1UFNJeE1DNDFJaTgrQ2p4bVpVTnZiRzl5VFdGMGNtbDRJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURFZ01DQXdJREFnTUNBd0xqSTJOalkyTnlBd0lEQWdNQ0F3SURBdU16UXhNVGMySURBZ01DQXdJREF1TXlBd0lpOCtDanhtWlVKc1pXNWtJRzF2WkdVOUltNXZjbTFoYkNJZ2FXNHlQU0pDWVdOclozSnZkVzVrU1cxaFoyVkdhWGdpSUhKbGMzVnNkRDBpWldabVpXTjBNVjlrY205d1UyaGhaRzkzSWk4K0NqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0OUlsTnZkWEpqWlVkeVlYQm9hV01pSUdsdU1qMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaUJ5WlhOMWJIUTlJbk5vWVhCbElpOCtDand2Wm1sc2RHVnlQZ284YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW5CaGFXNTBNRjlzYVc1bFlYSWlJSGd4UFNJMU1pNHpORFU0SWlCNU1UMGlNVEF5TGpZek5TSWdlREk5SWpFd055NHpOVE1pSUhreVBTSXpPUzQwTVRNNElpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR09EQTNOVGtpTHo0S1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpRa00wUlRsRElpOCtDand2YkdsdVpXRnlSM0poWkdsbGJuUStDanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXhYMnhwYm1WaGNpSWdlREU5SWpVekxqRXlORElpSUhreFBTSXhNVE11TkRFeklpQjRNajBpTVRJMUxqRXpNeUlnZVRJOUlqTXdMalkxTURjaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajRLUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSTBaR05ERTJReUl2UGdvOGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTkdSalJDTWtJaUx6NEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENEtQQzlrWldaelBnbzhMM04yWno0S1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UWWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFlnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284WnlCbWFXeDBaWEk5SW5WeWJDZ2pabWxzZEdWeU1GOWtLU0krQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5ORGd1TkRZMk5DQXhOaTQ1T1RrNVF6WXpMakE0T0RjZ01UWXVPVGs1T1NBM05DNDVOREkxSURJNExqZzJORFFnTnpRdU9UUXlOU0EwTXk0ME9UazVRemMwTGprME1qVWdOVGd1TVRNMU15QTJNeTR3T0RnM0lEWTVMams1T1RrZ05EZ3VORFkyTkNBMk9TNDVPVGs1UXpNekxqZzBNemtnTmprdU9UazVPU0F5TVM0NU9UQXhJRFU0TGpFek5UTWdNakV1T1Rrd01TQTBNeTQwT1RrNVF6SXhMams1TURFZ01qZ3VPRFkwTkNBek15NDRORE01SURFMkxqazVPVGtnTkRndU5EWTJOQ0F4Tmk0NU9UazVXaUlnWm1sc2JEMGlJMFpHTkRNMk1TSXZQZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUTRMalEyTmpRZ01UWXVPVGs1T1VNMk15NHdPRGczSURFMkxqazVPVGtnTnpRdU9UUXlOU0F5T0M0NE5qUTBJRGMwTGprME1qVWdORE11TkRrNU9VTTNOQzQ1TkRJMUlEVTRMakV6TlRNZ05qTXVNRGc0TnlBMk9TNDVPVGs1SURRNExqUTJOalFnTmprdU9UazVPVU16TXk0NE5ETTVJRFk1TGprNU9Ua2dNakV1T1Rrd01TQTFPQzR4TXpVeklESXhMams1TURFZ05ETXVORGs1T1VNeU1TNDVPVEF4SURJNExqZzJORFFnTXpNdU9EUXpPU0F4Tmk0NU9UazVJRFE0TGpRMk5qUWdNVFl1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejRLUEM5blBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRReUxqazNNaklnTUM0NU9UazVNelpJTlRJdU9UWXpNVU0yT1M0MU1UWTRJREF1T1RrNU9UTTJJRGd5TGprek5qSWdNVFF1TkRNeE1TQTRNaTQ1TXpZeUlETXdMams1T1RsV05EQXVPVGs1T1VNNE1pNDVNell5SURVM0xqVTJPRElnTmprdU5URTJPQ0EzTUM0NU9UazRJRFV5TGprMk16RWdOekF1T1RrNU9FZzBNaTQ1TnpJeVF6STJMalF4T0RVZ056QXVPVGs1T0NBeE1pNDVPVGtnTlRjdU5UWTRNaUF4TWk0NU9Ua2dOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXlMams1T1NBeE5DNDBNekV4SURJMkxqUXhPRFVnTUM0NU9UazVNellnTkRJdU9UY3lNaUF3TGprNU9Ua3pObG9pSUdacGJHdzlJaU5HUmpRek5qRWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBNaTQ1TnpJeUlEQXVPVGs1T1RNMlNEVXlMamsyTXpGRE5qa3VOVEUyT0NBd0xqazVPVGt6TmlBNE1pNDVNell5SURFMExqUXpNVEVnT0RJdU9UTTJNaUF6TUM0NU9UazVWalF3TGprNU9UbERPREl1T1RNMk1pQTFOeTQxTmpneUlEWTVMalV4TmpnZ056QXVPVGs1T0NBMU1pNDVOak14SURjd0xqazVPVGhJTkRJdU9UY3lNa015Tmk0ME1UZzFJRGN3TGprNU9UZ2dNVEl1T1RrNUlEVTNMalUyT0RJZ01USXVPVGs1SURRd0xqazVPVGxXTXpBdU9UazVPVU14TWk0NU9Ua2dNVFF1TkRNeE1TQXlOaTQwTVRnMUlEQXVPVGs1T1RNMklEUXlMamszTWpJZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1WOXNhVzVsWVhJcElpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5UWXVPVEE0SURNeExqQXdNalpETlRZdU9ERTJOQ0F6TUM0M09UY3lJRFUyTGpZeE9UTWdNekF1TmpZMU5TQTFOaTQwTURJeElETXdMalkyTlRWSU5Ea3VOemcyTVV3MU5pNHpNVFUySURFNUxqZzVORU0xTmk0ME1qUTBJREU1TGpjeE5EUWdOVFl1TkRNeE1TQXhPUzQwT0RjZ05UWXVNek15T1NBeE9TNHpNREUxUXpVMkxqSXpORGNnTVRrdU1URTBOQ0ExTmk0d05EY2dNVGd1T1RrNE9DQTFOUzQ0TkRNM0lERTRMams1T0RoSU5EWXVPVEV3TjBNME5pNDJPVGt5SURFNExqazVPRGdnTkRZdU5UQTFPU0F4T1M0eE1qTTJJRFEyTGpReE1TQXhPUzR6TWpFMFRETTRMakF6TmpNZ016WXVPREl4TkVNek55NDVORGs0SURNM0xqQXdNakVnTXpjdU9UVTVNeUF6Tnk0eU1UWTJJRE00TGpBMk1EZ2dNemN1TXpnNE5rTXpPQzR4TmpNZ016Y3VOVFl3TnlBek9DNHpOREl5SURNM0xqWTJOU0F6T0M0MU16WWdNemN1TmpZMVNEUTBMakkzTnpKTU16Z3VNREl4TWlBMU15NHhPRGt4UXpNM0xqa3hORFlnTlRNdU5EVTBOeUF6T0M0d01EazFJRFV6TGpjMk1qTWdNemd1TWpRME5TQTFNeTQ1TVRNelF6TTRMak16TkRrZ05UTXVPVGN3TXlBek9DNDBNelUwSURVekxqazVPRGdnTXpndU5UTTFOQ0ExTXk0NU9UZzRRek00TGpZNU5UWWdOVE11T1RrNE9DQXpPQzQ0TlRNMklEVXpMamt5TmpnZ016Z3VPVFl6TVNBMU15NDNPVEU0VERVMkxqZ3lPVElnTXpFdU5qSTFNa00xTmk0NU5qazBJRE14TGpRMU1UVWdOVFl1T1RrNU5TQXpNUzR5TURnMUlEVTJMamt3T0NBek1TNHdNREkyV2lJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEdSbFpuTStDanhtYVd4MFpYSWdhV1E5SW1acGJIUmxjakJmWkNJZ2VEMGlNQzQ1T1RBeE1USWlJSGs5SWpraUlIZHBaSFJvUFNJNU5DNDVOVEkwSWlCb1pXbG5hSFE5SWprMUlpQm1hV3gwWlhKVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlJR052Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljejBpYzFKSFFpSStDanhtWlVac2IyOWtJR1pzYjI5a0xXOXdZV05wZEhrOUlqQWlJSEpsYzNWc2REMGlRbUZqYTJkeWIzVnVaRWx0WVdkbFJtbDRJaTgrQ2p4bVpVTnZiRzl5VFdGMGNtbDRJR2x1UFNKVGIzVnlZMlZCYkhCb1lTSWdkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURFeU55QXdJaTgrQ2p4bVpVOW1abk5sZENCa2VUMGlNVE1pTHo0S1BHWmxSMkYxYzNOcFlXNUNiSFZ5SUhOMFpFUmxkbWxoZEdsdmJqMGlNVEF1TlNJdlBnbzhabVZEYjJ4dmNrMWhkSEpwZUNCMGVYQmxQU0p0WVhSeWFYZ2lJSFpoYkhWbGN6MGlNQ0F3SURBZ01DQXdMamc1T0RBek9TQXdJREFnTUNBd0lEQXVNVEUzTmpRM0lEQWdNQ0F3SURBZ01DNDBNelV5T1RRZ01DQXdJREFnTUM0eklEQWlMejRLUEdabFFteGxibVFnYlc5a1pUMGlibTl5YldGc0lpQnBiakk5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJZ2NtVnpkV3gwUFNKbFptWmxZM1F4WDJSeWIzQlRhR0ZrYjNjaUx6NEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqMGlVMjkxY21ObFIzSmhjR2hwWXlJZ2FXNHlQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpSUhKbGMzVnNkRDBpYzJoaGNHVWlMejRLUEM5bWFXeDBaWEkrQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqVXlMalU1TnpnaUlIa3hQU0l4TURJdU5qTTFJaUI0TWowaU1UQTNMall3TlNJZ2VUSTlJak01TGpReE16Z2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0S1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUkwWTRNRGMxT1NJdlBnbzhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5DUXpSRk9VTWlMejRLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDRLUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKd1lXbHVkREZmYkdsdVpXRnlJaUI0TVQwaU5UTXVNemMyTVNJZ2VURTlJakV4TXk0ME1UTWlJSGd5UFNJeE1qVXVNemcxSWlCNU1qMGlNekF1TmpVd055SWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpUGdvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJalJqZ3dOelU1SWk4K0NqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMEpETkVVNVF5SXZQZ284TDJ4cGJtVmhja2R5WVdScFpXNTBQZ284TDJSbFpuTStDand2YzNablBnbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFlpSUdobGFXZG9kRDBpTVRBMElpQjJhV1YzUW05NFBTSXdJREFnT1RZZ01UQTBJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGdvOFp5Qm1hV3gwWlhJOUluVnliQ2dqWm1sc2RHVnlNRjlrS1NJK0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRjdU9UVTVOaUF4Tmk0NU9UazVRell5TGpVNE1pQXhOaTQ1T1RrNUlEYzBMalF6TlRrZ01qZ3VPRFkwTkNBM05DNDBNelU1SURRekxqUTVPVGxETnpRdU5ETTFPU0ExT0M0eE16VXpJRFl5TGpVNE1pQTJPUzQ1T1RrNUlEUTNMamsxT1RZZ05qa3VPVGs1T1VNek15NHpNemN5SURZNUxqazVPVGtnTWpFdU5EZ3pOQ0ExT0M0eE16VXpJREl4TGpRNE16UWdORE11TkRrNU9VTXlNUzQwT0RNMElESTRMamcyTkRRZ016TXVNek0zTWlBeE5pNDVPVGs1SURRM0xqazFPVFlnTVRZdU9UazVPVm9pSUdacGJHdzlJaU5HUmpRek5qRWlMejRLUEM5blBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRReUxqUTJOVElnTUM0NU9UazVNelpJTlRJdU5EVTJORU0yT1M0d01UQXhJREF1T1RrNU9UTTJJRGd5TGpReU9UVWdNVFF1TkRNeE1TQTRNaTQwTWprMUlETXdMams1T1RsV05EQXVPVGs1T1VNNE1pNDBNamsxSURVM0xqVTJPRElnTmprdU1ERXdNU0EzTUM0NU9UazRJRFV5TGpRMU5qUWdOekF1T1RrNU9FZzBNaTQwTmpVeVF6STFMamt4TVRZZ056QXVPVGs1T0NBeE1pNDBPVEl5SURVM0xqVTJPRElnTVRJdU5Ea3lNaUEwTUM0NU9UazVWak13TGprNU9UbERNVEl1TkRreU1pQXhOQzQwTXpFeElESTFMamt4TVRZZ01DNDVPVGs1TXpZZ05ESXVORFkxTWlBd0xqazVPVGt6TmxvaUlHWnBiR3c5SWlOR1JqUXpOakVpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTWk0ME5qVXlJREF1T1RrNU9UTTJTRFV5TGpRMU5qUkROamt1TURFd01TQXdMams1T1Rrek5pQTRNaTQwTWprMUlERTBMalF6TVRFZ09ESXVOREk1TlNBek1DNDVPVGs1VmpRd0xqazVPVGxET0RJdU5ESTVOU0ExTnk0MU5qZ3lJRFk1TGpBeE1ERWdOekF1T1RrNU9DQTFNaTQwTlRZMElEY3dMams1T1RoSU5ESXVORFkxTWtNeU5TNDVNVEUySURjd0xqazVPVGdnTVRJdU5Ea3lNaUExTnk0MU5qZ3lJREV5TGpRNU1qSWdOREF1T1RrNU9WWXpNQzQ1T1RrNVF6RXlMalE1TWpJZ01UUXVORE14TVNBeU5TNDVNVEUySURBdU9UazVPVE0ySURReUxqUTJOVElnTUM0NU9UazVNelphSWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTUY5c2FXNWxZWElwSWk4K0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTmpRdU9UZzROaUF6TVM0NE5UZzFRelkwTGprNU5ETWdNekV1T1RZd055QTJOQzQ1T0RZNUlETXlMakEyTkRRZ05qUXVPVFl4TkNBek1pNHhOamczVERZeUxqWTRNVEVnTkRFdU16TTBPRU0yTWk0MU5qWXhJRFF4TGpjNU5qRWdOakl1TVRVME15QTBNaTR4TWpFMElEWXhMalk0TURrZ05ESXVNVEkwTVV3ME55NDVPVGsySURReUxqRTVNelJETkRjdU9UazNPU0EwTWk0eE9UTTBJRFEzTGprNU5qSWdOREl1TVRrek5DQTBOeTQ1T1RRMElEUXlMakU1TXpSSU16UXVNekV6TVVNek15NDRNemN4SURReUxqRTVNelFnTXpNdU5ESXlOQ0EwTVM0NE5qY3hJRE16TGpNd056VWdOREV1TkRBek1Vd3pNUzR3TWpjeklETXlMakl3TWtNek1TNHdNREE1SURNeUxqQTVOVFlnTXpBdU9Ua3pOQ0F6TVM0NU9EZzJJRE14TGpBd01ERWdNekV1T0Rnek9FTXpNQzR4TVRjNUlETXhMall3TkRjZ01qa3VORGMyTkNBek1DNDNOelV5SURJNUxqUTNOalFnTWprdU56azNOME15T1M0ME56WTBJREk0TGpVNU1EZ2dNekF1TkRVeU55QXlOeTQyTURrMklETXhMalkxTWprZ01qY3VOakE1TmtNek1pNDROVE14SURJM0xqWXdPVFlnTXpNdU9ESTVOQ0F5T0M0MU9UQTRJRE16TGpneU9UUWdNamt1TnprM04wTXpNeTQ0TWprMElETXdMalEzTmpnZ016TXVOVEU1TnlBek1TNHdPRFF6SURNekxqQXpORGdnTXpFdU5EZzJORXd6TlM0NE9EazJJRE0wTGpNM05qaERNell1TmpFeE1pQXpOUzR4TURjMElETTNMall4TWpNZ016VXVOVEkyT0NBek9DNDJNelkySURNMUxqVXlOamhETXprdU9EUTNPQ0F6TlM0MU1qWTRJRFF4TGpBd01qVWdNelF1T1RRNE15QTBNUzQzTWprM0lETXpMams0VERRMkxqUXlNVFFnTWpjdU56TXlNVU0wTmk0d01qY3pJREkzTGpNek5qVWdORFV1Tnpnek1pQXlOaTQzT0RrM0lEUTFMamM0TXpJZ01qWXVNVGcyTlVNME5TNDNPRE15SURJMExqazRJRFEyTGpjMU9UVWdNak11T1RrNE15QTBOeTQ1TlRrM0lESXpMams1T0RORE5Ea3VNVFU1T1NBeU15NDVPVGd6SURVd0xqRXpOak1nTWpRdU9UZ2dOVEF1TVRNMk15QXlOaTR4T0RZMVF6VXdMakV6TmpNZ01qWXVOemN4TkNBME9TNDVNRFV5SURJM0xqTXdNaUEwT1M0MU16RTNJREkzTGpZNU5VTTBPUzQxTXpJNUlESTNMalk1TmpjZ05Ea3VOVE0wTlNBeU55NDJPVGd6SURRNUxqVXpOVGNnTWpjdU5qazVPVXcxTkM0eE9UTXpJRE16TGprMk5EbEROVFF1T1RJd015QXpOQzQ1TkRJMElEVTJMakEzT1RFZ016VXVOVEkyT0NBMU55NHlPVE0zSURNMUxqVXlOamhETlRndU16STNOU0F6TlM0MU1qWTRJRFU1TGpJNU9UWWdNelV1TVRJeE9TQTJNQzR3TXpBMElETTBMak00TnpWTU5qSXVPVEF6TWlBek1TNDBPVGs1UXpZeUxqUXdPREVnTXpFdU1EazRNeUEyTWk0d09TQXpNQzQwT0RVMElEWXlMakE1SURJNUxqYzVOemRETmpJdU1Ea2dNamd1TlRrd09DQTJNeTR3TmpZMElESTNMall3T1RZZ05qUXVNalkyTmlBeU55NDJNRGsyUXpZMUxqUTJOamdnTWpjdU5qQTVOaUEyTmk0ME5ETXlJREk0TGpVNU1EZ2dOall1TkRRek1pQXlPUzQzT1RjM1F6WTJMalEwTXpJZ016QXVOelE0T0NBMk5TNDRNelEwSURNeExqVTFPRFVnTmpRdU9UZzROaUF6TVM0NE5UZzFXazAyTWk0ME5UZzJJRFExTGpRMU5qbEROakl1TkRVNE5pQTBOQzQ0T0RJeElEWXhMams1TkRVZ05EUXVOREUxTlNBMk1TNDBNakl5SURRMExqUXhOVFZJTXpRdU5qRXlOa016TkM0d05EQXlJRFEwTGpReE5UVWdNek11TlRjMk1TQTBOQzQ0T0RJeElETXpMalUzTmpFZ05EVXVORFUyT1ZZME55NDVOVFk1UXpNekxqVTNOakVnTkRndU5UTXlOeUF6TkM0d05EQXlJRFE0TGprNU9EZ2dNelF1TmpFeU5pQTBPQzQ1T1RnNFNEWXhMalF5TWpKRE5qRXVPVGswTlNBME9DNDVPVGc0SURZeUxqUTFPRFlnTkRndU5UTXlOeUEyTWk0ME5UZzJJRFEzTGprMU5qbFdORFV1TkRVMk9Wb2lJR1pwYkd3OUluZG9hWFJsSWk4K0NqeGtaV1p6UGdvOFptbHNkR1Z5SUdsa1BTSm1hV3gwWlhJd1gyUWlJSGc5SWpBdU5EZ3pOREU0SWlCNVBTSTVJaUIzYVdSMGFEMGlPVFF1T1RVeU5DSWdhR1ZwWjJoMFBTSTVOU0lnWm1sc2RHVnlWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCamIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dUxXWnBiSFJsY25NOUluTlNSMElpUGdvOFptVkdiRzl2WkNCbWJHOXZaQzF2Y0dGamFYUjVQU0l3SWlCeVpYTjFiSFE5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJdlBnbzhabVZEYjJ4dmNrMWhkSEpwZUNCcGJqMGlVMjkxY21ObFFXeHdhR0VpSUhSNWNHVTlJbTFoZEhKcGVDSWdkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXhNamNnTUNJdlBnbzhabVZQWm1aelpYUWdaSGs5SWpFeklpOCtDanhtWlVkaGRYTnphV0Z1UW14MWNpQnpkR1JFWlhacFlYUnBiMjQ5SWpFd0xqVWlMejRLUEdabFEyOXNiM0pOWVhSeWFYZ2dkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTUM0NU9USXhOVGNnTUNBd0lEQWdNQ0F3TGpNME5UQTVPQ0F3SURBZ01DQXdJREF1TkRRM01EVTVJREFnTUNBd0lEQXVNeUF3SWk4K0NqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0eVBTSkNZV05yWjNKdmRXNWtTVzFoWjJWR2FYZ2lJSEpsYzNWc2REMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaTgrQ2p4bVpVSnNaVzVrSUcxdlpHVTlJbTV2Y20xaGJDSWdhVzQ5SWxOdmRYSmpaVWR5WVhCb2FXTWlJR2x1TWowaVpXWm1aV04wTVY5a2NtOXdVMmhoWkc5M0lpQnlaWE4xYkhROUluTm9ZWEJsSWk4K0Nqd3ZabWxzZEdWeVBnbzhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbkJoYVc1ME1GOXNhVzVsWVhJaUlIZ3hQU0kxTWk0NE5qa3pJaUI1TVQwaU1URXpMalF4TXlJZ2VESTlJakV5TkM0NE56Z2lJSGt5UFNJek1DNDJOVEEzSWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HUmpVNE5UZ2lMejRLUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalJqZzFOMEUySWk4K0Nqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0Nqd3ZaR1ZtY3o0S1BDOXpkbWMrQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UWWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFlnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284WnlCbWFXeDBaWEk5SW5WeWJDZ2pabWxzZEdWeU1GOWtLU0krQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5ORGN1TnpBek9TQXhOaTQ1T1RrNVF6WXlMak15TmpNZ01UWXVPVGs1T1NBM05DNHhPREF4SURJNExqZzJORFFnTnpRdU1UZ3dNU0EwTXk0ME9UazVRemMwTGpFNE1ERWdOVGd1TVRNMU15QTJNaTR6TWpZeklEWTVMams1T1RrZ05EY3VOekF6T1NBMk9TNDVPVGs1UXpNekxqQTRNVFlnTmprdU9UazVPU0F5TVM0eU1qYzNJRFU0TGpFek5UTWdNakV1TWpJM055QTBNeTQwT1RrNVF6SXhMakl5TnpjZ01qZ3VPRFkwTkNBek15NHdPREUySURFMkxqazVPVGtnTkRjdU56QXpPU0F4Tmk0NU9UazVXaUlnWm1sc2JEMGlJMFpHTkRNMk1TSXZQZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUTNMamN3TXprZ01UWXVPVGs1T1VNMk1pNHpNall6SURFMkxqazVPVGtnTnpRdU1UZ3dNU0F5T0M0NE5qUTBJRGMwTGpFNE1ERWdORE11TkRrNU9VTTNOQzR4T0RBeElEVTRMakV6TlRNZ05qSXVNekkyTXlBMk9TNDVPVGs1SURRM0xqY3dNemtnTmprdU9UazVPVU16TXk0d09ERTJJRFk1TGprNU9Ua2dNakV1TWpJM055QTFPQzR4TXpVeklESXhMakl5TnpjZ05ETXVORGs1T1VNeU1TNHlNamMzSURJNExqZzJORFFnTXpNdU1EZ3hOaUF4Tmk0NU9UazVJRFEzTGpjd016a2dNVFl1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejRLUEM5blBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRReUxqSXdPRGtnTUM0NU9UazVNelpJTlRJdU1rTTJPQzQzTlRNM0lEQXVPVGs1T1RNMklEZ3lMakUzTXpFZ01UUXVORE14TVNBNE1pNHhOek14SURNd0xqazVPVGxXTkRBdU9UazVPVU00TWk0eE56TXhJRFUzTGpVMk9ESWdOamd1TnpVek55QTNNQzQ1T1RrNElEVXlMaklnTnpBdU9UazVPRWcwTWk0eU1EZzVRekkxTGpZMU5USWdOekF1T1RrNU9DQXhNaTR5TXpVNElEVTNMalUyT0RJZ01USXVNak0xT0NBME1DNDVPVGs1VmpNd0xqazVPVGxETVRJdU1qTTFPQ0F4TkM0ME16RXhJREkxTGpZMU5USWdNQzQ1T1RrNU16WWdOREl1TWpBNE9TQXdMams1T1Rrek5sb2lJR1pwYkd3OUlpTkdSalF6TmpFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1pNHlNRGc1SURBdU9UazVPVE0yU0RVeUxqSkROamd1TnpVek55QXdMams1T1Rrek5pQTRNaTR4TnpNeElERTBMalF6TVRFZ09ESXVNVGN6TVNBek1DNDVPVGs1VmpRd0xqazVPVGxET0RJdU1UY3pNU0ExTnk0MU5qZ3lJRFk0TGpjMU16Y2dOekF1T1RrNU9DQTFNaTR5SURjd0xqazVPVGhJTkRJdU1qQTRPVU15TlM0Mk5UVXlJRGN3TGprNU9UZ2dNVEl1TWpNMU9DQTFOeTQxTmpneUlERXlMakl6TlRnZ05EQXVPVGs1T1ZZek1DNDVPVGs1UXpFeUxqSXpOVGdnTVRRdU5ETXhNU0F5TlM0Mk5UVXlJREF1T1RrNU9UTTJJRFF5TGpJd09Ea2dNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNVjlzYVc1bFlYSXBJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OakF1TWpreU5pQXlNaTQ1T1RrMFNETTNMakV4TXpWRE16VXVOVEU1T0NBeU1pNDVPVGswSURNMExqSXhOaUF5TkM0ek1ETTNJRE0wTGpJeE5pQXlOUzQ0T1RnNFZqVXhMams1T0RoTU5EQXVNREV3T0NBME5pNHhPVGc0U0RZd0xqSTVNalpETmpFdU9EZzJNaUEwTmk0eE9UZzRJRFl6TGpFNUlEUTBMamc1TkNBMk15NHhPU0EwTXk0eU9UZzRWakkxTGpnNU9EaEROak11TVRrZ01qUXVNekF6TnlBMk1TNDRPRFl5SURJeUxqazVPVFFnTmpBdU1qa3lOaUF5TWk0NU9UazBXaUlnWm1sc2JEMGlJMFpGUmtGR1F5SXZQZ284WkdWbWN6NEtQR1pwYkhSbGNpQnBaRDBpWm1sc2RHVnlNRjlrSWlCNFBTSXdMakl5TnpZMk1TSWdlVDBpT1NJZ2QybGtkR2c5SWprMExqazFNalFpSUdobGFXZG9kRDBpT1RVaUlHWnBiSFJsY2xWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZiaTFtYVd4MFpYSnpQU0p6VWtkQ0lqNEtQR1psUm14dmIyUWdabXh2YjJRdGIzQmhZMmwwZVQwaU1DSWdjbVZ6ZFd4MFBTSkNZV05yWjNKdmRXNWtTVzFoWjJWR2FYZ2lMejRLUEdabFEyOXNiM0pOWVhSeWFYZ2dhVzQ5SWxOdmRYSmpaVUZzY0doaElpQjBlWEJsUFNKdFlYUnlhWGdpSUhaaGJIVmxjejBpTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTVRJM0lEQWlMejRLUEdabFQyWm1jMlYwSUdSNVBTSXhNeUl2UGdvOFptVkhZWFZ6YzJsaGJrSnNkWElnYzNSa1JHVjJhV0YwYVc5dVBTSXhNQzQxSWk4K0NqeG1aVU52Ykc5eVRXRjBjbWw0SUhSNWNHVTlJbTFoZEhKcGVDSWdkbUZzZFdWelBTSXdJREFnTUNBd0lEQXVPVFE1TURJZ01DQXdJREFnTUNBd0xqVXdNVGsyTVNBd0lEQWdNQ0F3SURBdU1qYzBOVEVnTUNBd0lEQWdNQzR6SURBaUx6NEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqSTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0lnY21WemRXeDBQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpTHo0S1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmowaVUyOTFjbU5sUjNKaGNHaHBZeUlnYVc0eVBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzY2lJSEpsYzNWc2REMGljMmhoY0dVaUx6NEtQQzltYVd4MFpYSStDanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpVeExqZ3pOVFFpSUhreFBTSXhNREl1TmpNMUlpQjRNajBpTVRBMkxqZzBNaUlnZVRJOUlqTTVMalF4TXpnaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajRLUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSTBZNE1EYzFPU0l2UGdvOGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTkNRelJGT1VNaUx6NEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWRERmZiR2x1WldGeUlpQjRNVDBpTlRJdU5qRXlPU0lnZVRFOUlqRXhNeTQwTVRNaUlIZ3lQU0l4TWpRdU5qSXlJaUI1TWowaU16QXVOalV3TnlJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZ284YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmpRMlFqUTFJaTgrQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwVkZRVGcwT1NJdlBnbzhMMnhwYm1WaGNrZHlZV1JwWlc1MFBnbzhMMlJsWm5NK0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhdHRlcm5CRy1mMjVhZjM4ZTM1NzA5NmNhMjMyOTBkNWY1YmNiMzM1NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRjaUlHaGxhV2RvZEQwaU5UY2lJSFpwWlhkQ2IzZzlJakFnTUNBMU55QTFOeUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazB5TkM0MU5ERTJJREF1TnpreE5qRTJTRE15TGpRMU9ETkRORFV1TlRjMUlEQXVOemt4TmpFMklEVTJMakl3T0RNZ01URXVOREkwTmlBMU5pNHlNRGd6SURJMExqVTBNVFpXTXpJdU5EVTRNME0xTmk0eU1EZ3pJRFExTGpVM05EZ2dORFV1TlRjMUlEVTJMakl3T0RJZ016SXVORFU0TXlBMU5pNHlNRGd5U0RJMExqVTBNVFpETVRFdU5ESTBPU0ExTmk0eU1EZ3lJREF1TnpreE5qY3pJRFExTGpVM05EZ2dNQzQzT1RFMk56TWdNekl1TkRVNE0xWXlOQzQxTkRFMlF6QXVOemt4TmpjeklERXhMalF5TkRZZ01URXVOREkwT1NBd0xqYzVNVFl4TmlBeU5DNDFOREUySURBdU56a3hOakUyV2lJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZERCZmJHbHVaV0Z5S1NJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRNeExqSXhOekVnTXpJdU9UWXlOVU16TVM0ek9EUTVJRE15TGpjNU1qTWdNekV1TkRZNE9DQXpNaTQxT1RFMElETXhMalEyT0RnZ016SXVNelU1VmpNd0xqSXhORGRJTkRBdU16YzBPVll6Tmk0Mk5EaEROREF1TXpjME9TQXpOeTR5TXpjeElEUXdMakUyTnpRZ016Y3VOelF5TXlBek9TNDNOVElnTXpndU1UWXlRek01TGpNek5qZ2dNemd1TlRneU1TQXpPQzQ0TXpjMUlETTRMamM1TVRrZ016Z3VNalUwTlNBek9DNDNPVEU1U0RFNExqYzBOVFpETVRndU1UWXlOQ0F6T0M0M09URTVJREUzTGpZMk16RWdNemd1TlRneU1TQXhOeTR5TkRjNUlETTRMakUyTWtNeE5pNDRNekkxSURNM0xqYzBNak1nTVRZdU5qSTBPU0F6Tnk0eU16Y3hJREUyTGpZeU5Ea2dNell1TmpRNFZqTXdMakl4TkRkSU1qVXVOVE14TWxZek1pNHpOVGxETWpVdU5UTXhNaUF6TWk0MU9URTBJREkxTGpZeE5URWdNekl1TnpreU15QXlOUzQzT0RNZ016SXVPVFl5TlVNeU5TNDVOVEE1SURNekxqRXpNVGtnTWpZdU1UUTVOeUF6TXk0eU1UY3hJREkyTGpNM09UVWdNek11TWpFM01VZ3pNQzQyTWpBMlF6TXdMamcxTURJZ016TXVNakUzTVNBek1TNHdORGt5SURNekxqRXpNVGtnTXpFdU1qRTNNU0F6TWk0NU5qSTFXazB6TUM0eE9UWTJJRE13TGpJeE5EZElNall1T0RBek5GWXpNUzQ1TTBnek1DNHhPVFkyVmpNd0xqSXhORGRhVFRNNUxqYzFNakVnTWpJdU1qWTNORU16T1M0ek16WTVJREl4TGpnME5qa2dNemd1T0RNM05pQXlNUzQyTXpjZ016Z3VNalUwTlNBeU1TNDJNemRJTXpNdU5UZzVNVll4T1M0ME9USTNRek16TGpVNE9URWdNVGt1TVRNMU1pQXpNeTQwTmpVMklERTRMamd6TVRjZ016TXVNakU0TVNBeE9DNDFPREZETXpJdU9UY3dPU0F4T0M0ek16RTJJRE15TGpZM01ETWdNVGd1TWpBMk1TQXpNaTR6TVRjZ01UZ3VNakEyTVVneU5DNDJPRE14UXpJMExqTXlPVGNnTVRndU1qQTJNU0F5TkM0d01qa3pJREU0TGpNek1UWWdNak11TnpneE9TQXhPQzQxT0RGRE1qTXVOVE0wTlNBeE9DNDRNekV6SURJekxqUXhNRGdnTVRrdU1UTTFNaUF5TXk0ME1UQTRJREU1TGpRNU1qZFdNakV1TmpNM1NERTRMamMwTlRaRE1UZ3VNVFl5TkNBeU1TNDJNemNnTVRjdU5qWXpNU0F5TVM0NE5EWTVJREUzTGpJME56a2dNakl1TWpZM05FTXhOaTQ0TXpJMUlESXlMalk0TmpZZ01UWXVOakkwT1NBeU15NHhPVEUwSURFMkxqWXlORGtnTWpNdU56Z3hNMVl5T0M0NU1qaElOREF1TXpjME9WWXlNeTQzT0RFelF6UXdMak0zTkRrZ01qTXVNVGt4TkNBME1DNHhOamMwSURJeUxqWTROallnTXprdU56VXlNU0F5TWk0eU5qYzBXazB6TVM0NE9USTVJREl4TGpZek4wZ3lOUzR4TURjeVZqRTVMamt5TVROSU16RXVPRGt5T1ZZeU1TNDJNemRhSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284WkdWbWN6NEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWREQmZiR2x1WldGeUlpQjRNVDBpTXpJdU56ZzFOU0lnZVRFOUlqZzVMamM0TlRVaUlIZ3lQU0k0T1M0M09EVTFJaUI1TWowaU1qUXVNakUwTlNJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZ284YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmtZME1UWkRJaTgrQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwWkdORUl5UWlJdlBnbzhMMnhwYm1WaGNrZHlZV1JwWlc1MFBnbzhMMlJsWm5NK0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UY2lJR2hsYVdkb2REMGlOVGNpSUhacFpYZENiM2c5SWpBZ01DQTFOeUExTnlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWsweU5DNDFOREUySURBdU56a3hOakUyU0RNeUxqUTFPRE5ETkRVdU5UYzFNU0F3TGpjNU1UWXhOaUExTmk0eU1EZ3pJREV4TGpReU5EWWdOVFl1TWpBNE15QXlOQzQxTkRFMlZqTXlMalExT0RORE5UWXVNakE0TXlBME5TNDFOelE0SURRMUxqVTNOVEVnTlRZdU1qQTRNaUF6TWk0ME5UZ3pJRFUyTGpJd09ESklNalF1TlRReE5rTXhNUzQwTWpRNUlEVTJMakl3T0RJZ01DNDNPVEUyTVRZZ05EVXVOVGMwT0NBd0xqYzVNVFl4TmlBek1pNDBOVGd6VmpJMExqVTBNVFpETUM0M09URTJNVFlnTVRFdU5ESTBOaUF4TVM0ME1qUTVJREF1TnpreE5qRTJJREkwTGpVME1UWWdNQzQzT1RFMk1UWmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNRjlzYVc1bFlYSXBJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OREl1TXpnNU1TQXlOUzR5TWpFMFF6UXlMak01TXpZZ01qVXVNekF5TXlBME1pNHpPRGMzSURJMUxqTTRORFVnTkRJdU16WTNOU0F5TlM0ME5qZE1OREF1TlRZd055QXpNaTQzTWpNMVF6UXdMalEyT1RVZ016TXVNRGc0TnlBME1DNHhORE15SURNekxqTTBOaklnTXprdU56WTRNU0F6TXk0ek5EZ3pUREk0TGpreU56UWdNek11TkRBek0wTXlPQzQ1TWpZZ016TXVOREF6TXlBeU9DNDVNalEzSURNekxqUXdNek1nTWpndU9USXpNaUF6TXk0ME1ETXpTREU0TGpBNE1qVkRNVGN1TnpBMU15QXpNeTQwTURNeklERTNMak0zTmpjZ016TXVNVFEwT1NBeE55NHlPRFUzSURNeUxqYzNOelpNTVRVdU5EYzRPU0F5TlM0ME9UTTBRekUxTGpRMU9DQXlOUzQwTURreElERTFMalExTWpFZ01qVXVNekkwTkNBeE5TNDBOVGN6SURJMUxqSTBNVFJETVRRdU56VTRNeUF5TlM0d01qQTJJREUwTGpJMUlESTBMak0yTXpnZ01UUXVNalVnTWpNdU5UbERNVFF1TWpVZ01qSXVOak0wTlNBeE5TNHdNak0ySURJeExqZzFOemNnTVRVdU9UYzBOaUF5TVM0NE5UYzNRekUyTGpreU5UWWdNakV1T0RVM055QXhOeTQyT1RreklESXlMall6TkRVZ01UY3VOams1TXlBeU15NDFPVU14Tnk0Mk9Ua3pJREkwTGpFeU56WWdNVGN1TkRVek9DQXlOQzQyTURnMUlERTNMakEyT1RZZ01qUXVPVEkyT1V3eE9TNHpNekUzSURJM0xqSXhOVEZETVRrdU9UQXpOQ0F5Tnk0M09UTTFJREl3TGpZNU5qY2dNamd1TVRJMU5TQXlNUzQxTURneklESTRMakV5TlRWRE1qSXVORFk0SURJNExqRXlOVFVnTWpNdU16Z3pJREkzTGpZMk56VWdNak11T1RVNU1pQXlOaTQ1TURGTU1qY3VOamMyT1NBeU1TNDVOVFEzUXpJM0xqTTJORFlnTWpFdU5qUXhOU0F5Tnk0eE56RXhJREl4TGpJd09EWWdNamN1TVRjeE1TQXlNQzQzTXpFeFF6STNMakUzTVRFZ01Ua3VOemMySURJM0xqazBORGdnTVRndU9UazRPQ0F5T0M0NE9UVTRJREU0TGprNU9EaERNamt1T0RRMk9DQXhPQzQ1T1RnNElETXdMall5TURRZ01Ua3VOemMySURNd0xqWXlNRFFnTWpBdU56TXhNVU16TUM0Mk1qQTBJREl4TGpFNU5ESWdNekF1TkRNM015QXlNUzQyTVRReUlETXdMakUwTVRNZ01qRXVPVEkxTkVNek1DNHhOREl6SURJeExqa3lOamNnTXpBdU1UUXpOaUF5TVM0NU1qYzVJRE13TGpFME5EVWdNakV1T1RJNU1rd3pNeTQ0TXpVeElESTJMamc0T1VNek5DNDBNVEV5SURJM0xqWTJNamdnTXpVdU16STVOQ0F5T0M0eE1qVTFJRE0yTGpJNU1UZ2dNamd1TVRJMU5VTXpOeTR4TVRBNUlESTRMakV5TlRVZ016Y3VPRGd4TWlBeU55NDRNRFVnTXpndU5EWXdNeUF5Tnk0eU1qTTJURFF3TGpjek5qWWdNalF1T1RNM05VTTBNQzR6TkRReklESTBMall4T1RZZ05EQXVNRGt5TXlBeU5DNHhNelEwSURRd0xqQTVNak1nTWpNdU5UbEROREF1TURreU15QXlNaTQyTXpRMUlEUXdMamcyTmlBeU1TNDROVGMzSURReExqZ3hOeUF5TVM0NE5UYzNRelF5TGpjMk9DQXlNUzQ0TlRjM0lEUXpMalUwTVRjZ01qSXVOak0wTlNBME15NDFOREUzSURJekxqVTVRelF6TGpVME1UY2dNalF1TXpReU9TQTBNeTR3TlRreUlESTBMams0TXprZ05ESXVNemc1TVNBeU5TNHlNakUwV2swME1DNHpPRFEwSURNMUxqazROamhETkRBdU16ZzBOQ0F6TlM0MU16RTRJRFF3TGpBeE5qWWdNelV1TVRZeU5DQXpPUzQxTmpNeElETTFMakUyTWpSSU1UZ3VNekU1T0VNeE55NDROall5SURNMUxqRTJNalFnTVRjdU5EazROU0F6TlM0MU16RTRJREUzTGpRNU9EVWdNelV1T1RnMk9GWXpOeTQ1TmpaRE1UY3VORGs0TlNBek9DNDBNakU0SURFM0xqZzJOaklnTXpndU56a3dPQ0F4T0M0ek1UazRJRE00TGpjNU1EaElNemt1TlRZek1VTTBNQzR3TVRZMklETTRMamM1TURnZ05EQXVNemcwTkNBek9DNDBNakU0SURRd0xqTTRORFFnTXpjdU9UWTJWak0xTGprNE5qaGFJaUJtYVd4c1BTSjNhR2wwWlNJdlBnbzhaR1ZtY3o0S1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSndZV2x1ZERCZmJHbHVaV0Z5SWlCNE1UMGlNekl1TnpnMU5TSWdlVEU5SWpnNUxqYzROVFVpSUhneVBTSTRPUzQzT0RVMUlpQjVNajBpTWpRdU1qRTBOU0lnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaVBnbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSa1kxT0RVNElpOCtDanh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBZNE5UZEJOaUl2UGdvOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvOEwyUmxabk0rQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hhcGUtbGVmdC0xM2ZhOGIzZDk4OGNhNGViOWQ3YzJkYTkzNWMyZDczYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hhcGUtcGF0dGVybjEtZDk5ZGY1MDZmMGNiOGNmNzA0YmVhNWJjMThiNDMxZTMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NoYXBlLXBhdHRlcm4yLTRiZDcyYzM0NGZjY2FjM2IxOTAzMWU3YzMxZDQyMDk2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaGFwZS1yaWdodC1kYmM3OWI3OWEwNWIyZjIyMzc0MWU1MGE5N2E2MjdhYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQm1VU1VSQlZIZ0JyVnBaa0Z4bmRmN3UxdnM2dTBZem94NVpraVhMUm1NYnNEQzRHTmtVb1lwQXhwVlV3S0Vxd0VOQ1VVVmgrekY1c1Fqd2tFcXFMQ2VWNEtwVVNwZ1hUQktDQWpnMmNlR01TZkFDTWg1anliWnN5V290czI4OVBUTzkzM3Z6bmZOM3o5anhKbU5mNldwYXQrLzg5ei9iZDc1enpyWHdQaC9INy9wU0xwTDJKbUx4N0tGTU5sTkk1SEpqMFhRdVp6bE9ydFdzNlQyZUV5MUZrdGxpNFB1bGFyMDVOZm1MeHgrdk5scFRSNC9kWDhUN2VGaDRINDd4c2JIY05idjc3aHp1em8vSFlzNTRQaDJIWjd0SUpWUElEKzVFcHFjZlRiK0Y2bVlaMHhjdjRmTHNFdFkyNjZqVVcxZ3VsNUhQNWRGcTF0SGIwejJWU0tVZTZCbktuUGp5VjQ4VzhSNlA5eVRjME1EQWVDb1p1eWZpdU9OUngwRnZQb1dobmh3Sy9WMUl1aUY2Y3puczJIMFZ1b1lMcUcydTQrWFRwL0RMazZld1ZtMWlvOVpFcmRGRUlobkg2TWdnZHU4YVJ1R3F2YkJkRDE0a2hwN3UvSW0rb1IzM0RlKzlmaEsvNCtIaWR6Z0tPM2VPZWE1OUwzVXpIZ1lobWtHTG1nOVFtVi9GM0hJWmkwdGw3T3BMSWhtSndxYjZiRGVDUkNZUEo1WkNiM2NldVZhRDEyMWtNeW4wOVdhUXBZQTl3OFBvR1JsQ05qOEVONWJHK25wNW9sbjNKNVptems4MjY3VXY3eGc5VU1TN1BONlZjSVZDSWVjRi9qMzhlSmRIRGVmU0thU2lycHEvMWZSUmIvRnMxREc5dWdLRURZeDBaMkZaQWVLcERLS3BITVlTYVF3TmQrT1ZaNS9ESzhVWm5GdGF3TVdpaS82K0xLN21HbDBEdTdpV0w2c2gwNVZIdlY1SDZBZmpUaVJ5Zm5INjNOSGVuVmQ5NDkzczE3N1NHd3NEQTRXd1dYK1d1NzNMb3RaOTMwZVRGckFzbndCaHdYRnNSRDBYSGsrZjFsemRxS0ZNMTdNaUhpS0pCS0tNdjJReWdkbUxsL0hNMUFzNFhaeEhjV0VUNXhjcldLaGFLRlZkekN5V2NQSGlSVFJxbXdoYmRjUmpjY0NoOGl5cUx3eU9Qdm56SDU4L2ZIaXNjS1Y3dmlMaHJpb1VKcmhKQ21ZWHdqRGtsUkFobjFldU5MQ3kyY0phZzlmaVNUUjRzUlZZakNVZm04MFdmTnRHaEVKNVVXN1NwdHVXVjNIbStaY3hWNnBpb3dHc01QWmVYVmpHSTc5OEh2L3cvWWZ4NEU4Zng4enlKcGJtRjlDcVZ4RDREWVMyMldJUStMRENzTkNiemo5NzQ5all4SlhzK3gyRkd4dTc4VTdIY1g0VWhsYU9wMnJSa2dmeVo2Vld3L3hLQ2E5T3orSlZJdURzOGhyV0tsVUtia05VSUdBUlRhWDAvcENXOWhtYjZWd2FrVmdVcFVvTkVRS0h5M2hzdEZvWUdkMkhjcm1PYjM3N2IvSGpoeDlHWlgyWm5yMUpnWnFpU2xXb3k4ZEdJMjR1OUJzL3V1V2pIN25ybmZiK3RqRTM5cUdQM09uWHE4ZGFmTGg0aHFVUG9VYUlFazFlYzdocG15Z1pNRFpjK2M2akVMenV1UzdpVVEvWmJJcmFEeERRMm5ZWUlCcExZUGZlM1ZncHJUT3lJb3dzQzkycEtPL3ZSMkZIRmdjT0hNRFE1ejZObWNzWHNIVHBBcEx4Qkd3dkJvdXVTUTFCNHR4MUhiV2lZem4zM25ycnAvSFlZdzhkZTlmQzNYakxiUk5odlg2c1JZMVQ1VlFjTmNlNENyaEp5L0lvbUVQRUN4SHhQSFNuazBnVFhCZ1hxRlpyOEJtTDJWaUV3cVdSVEdXSmZ0d2cxNG5HVStndjdFSHloWmZRbjRsaG8yN2lhblRYRUs0NnNBZTdEdXdsV3ZaZy85VUYySDZkYnVXcGgwQThKWFJvYVErcGVCUnhQak1lajZQaFJPOGR2MjJpT1BuekV5ZmVUSVkzZGN1eHcrT0ZNUENQKzBIQWpmcnFpaDNYa01PaDVjVHhJdFJpeEhNUTVVK2Y3Q01nQ0xoMmlId21nYnpBZXphTFJDclBnSkVuT2ZBU1NmU1BqT0xRNFpzeE5EU0F3bUFmQnJvelNFU0FpRTMyMGxqWE0yQzgyUlRJb2dDRUtncG96aGlWWTFQSkg5aS9CMS81MHp2Z1V1N0FzbzRmSHA4b3ZKa2N6cHRkSEJ6ZS9TejNQbURSWXZYcUdscSs4WHNSelJMdm85dUpGZU9SQ0dMUkNQOHY3bWtqazR5aEs1TmtmREdHY2ltTTNYQUQ4anRHNkVxMHVHeVRibVhUNnJtZWJ2UjA1UlJsZCt3Y3dPRElUaW9oUmtXNUZKTDI4aXlOUlp0QVpEbTBudU5vdmd6SVlsQlp3NTZoSGJoeHVBdkZVZzF6UzZXWTdWb1RvOFA3SHlnV1g2cTlyVnZlY1BQNFBUU1VvcUpZck5YeTlicGFUNjdaa2dZQ0ptWnVJdUtnaXk0WnAvVmlNUmRSV20xMXZZb01OM2J3NnF1UTdlNVRkd3diaEVhN1NmUEVtTWlqY0dvZUJtakJURThYMXBibXdMaEdjMzJWV29zZ0ZJR0l2SzdFbXUzeGRLa1lZd09YcE9EbThTT0ljVS9URDk2UGtaNzllTVpTOHhWOE81VDhlL2RidXFXNG94VmFSeTIxa0ZpS0ZndjlyZTg3WEMxa2JJbmIwS1RJSjZMb3p5ZlJtNGpSTFgwVjV0cmRROWkxYTFRM0dEQWxpQ1dKQW96ZFZ0dkZ1REl0RU9HS3VYU2VjWmxCVC84UWt0a2U1c011ZVBFY3JHaVN3a1laYXE1dVV3TERvUlZqaVF5YVhETnF0ZWoyQ1EwVjJROXZ1T3ZtOFlteHQ3UWNIM3U4dlh2NVN3dTFZUEthc1p5bFg0VUVGYURaNEhkMG8wYTlCaWNaNGI0RGhmUWtnMzBnbnlOa2V4U1d5cUZRbGgxVlVBaDVUK2hRTVVTNytzbzh2Mi9SOVpqZ2FSMVdDUlFxeWRSQm1oWmhYblNqYWprVlRMeUdPZzRKVkM2QlNvaEJvamZIOU1OMFlYWmxMT1ZZcElRNDhnYkwwV3JqRkdrOGJDZG9Rd3A4L1JDcXNLRmFTejhIUnNBNmlXKzkzaVNZVURCcXM5a1FNdHpBUnFtRTh2d3NLc3VMQ3VNV3FaZVQ2cUZMSmhGc3JtTDUzSE5vck00VE8xYlIzQ2pwNWwySEx1dkZEZXhUT0l0V1V5dnJGdms4V2p0b1ZsRzkrQ0pDZ3RmNnlIWDR4WE5GbU0wYXQ2TDZ4ejgyUGpIK0J1SDQrM2ZxeGhHMmhXRitvb3ZaYmMwRnRFQW5EaVVaeTMwTnV1RW1oZHRnNHBhelh2ZFIycWlpZUhrQnE1Zm5VVnRaVUpZaE5tOEZUTzdjdEp2SW9qbzlnNDNwaTZqTXpxRzFTYXBWcTV2Y3hUKzJHek1nb2xZenNXYngyVGE5eUUzMXdxK1U0VEFFSG5tRnFCcFlCdUcyOWh5S2hQZThUcml4c2ZFQ3Y1a1E2VHMzU1p6STcwbkM3Z2dtQ1Z2MVl4bWRDTERVYUxFS1hiVE9zeVd1NlljNHQ3Q0MyZElxTnBlWDRHK1U0WmRMT1B2RWY2TytlQkUyR1grc2R3RGxsVFd5a0RKcXl5dW84MmZRYkRDeFc4WVZsVStheEkxMkd2TEZMNTBRVWNhbWNOYi9mZWFNZWxhZzRiWmR1ZEdRNCtQakU3bHR5N24raE5HQWlTMmpDZCtrZ0NEc1dGMHRDUTFzV3hjMGNXaUViVWxPNUwySmFBeVhTMldjV1NoaHM3ekphcUdKMmVlZnhVUGYrUzRlL3ZhMzBKaCtFUkhHV1RMZmh4S0o4dXJzUE9xYkcxUW1sU2RvS1poUGQ5ek9xNUpFR0p2MGx1YktIQnpmeGFrejUxRWpBUkJ1WWFteDFMKzJCS3pad1YxYndvVlcrRVVSUWs1RkVnRUJ0WXp3UWQ4c29GWTB1ckNaa01rM08yNUFKYlJVT0tGWjVZMktDbnRtWmdFWFZzcktZbElNL3MvOTJSM1kvNkVQWUhOK0hwRk1EM0o3cjBVdGNMQldXa090dk1GS3ZhRmJGRmNNZFovMEZncGtCUVp0TFNFQjJYN1lSTlRUcnhTcEJQTnNVVUtnYU5rMlFTZ0d0ajZ1Kzl3L2RyakFLMk1keEpGWVU0UVQwSkNZNC9PVWN0bkdVaUtVSk95T1lITERKa0drMm14cERreWw0dWhuZ2o0d1BJZzBrL3FyVTA5VFZ5MTBYWDBRUXgrN0RiR2VBU1I0Wm9kR2tSMGVRWW5XTGMzUE1UZXZVa2xTUXJVVnJEZ1lHQ0hsK2FKenJ0K3dJM2pwekdsaGVpcVF0WVVhblhBUjdoVFNOY2R6dHVkNFk2L3ROblJLR3FGZTVpR2Q1RzIxMFpLL0xvdnlhY3lKcUxOSUxRdVlDTGxtWXMreGYxTG96ZUw2dlNPNGFyVEE1RXlyRUNGOVVVd2lCU2VkNWM4TVlrendoUnZHME9TNnBlVlYxRmptTkN2cldqM1lLb3h2QkJNQjVUT1Y3WER6UC9uaHYvSjdjZDFnS3dlSG5YMkgyeFN4NWljbVhDdHNqWXNmaEcwQjFSajh0OG5GYlBxK3RCQ0UzMW1oMDNaSi9rOXVvZ1hWSFhrMmVLYkpQRndLRUtmN0RLYklJYnV5NmlucGJKNnd2NEgwb0JTdVVVVkJhcFFVSzhXMndqNzBGWWF3ZFBZQzF0ZVdVYVAxa3IxRERJY21uKzEyOGhHcXE2dDRjbklTejV4K0NjVlhUaU9SMzZGeEx4N1ZrbkRTcUROaWhwWUpEN0s4TVpmeGRxZ2pWc2ZWTkl6Yk1ZVFg1RGlyYlRXVE53a2drc3lGZVBDRHBBU044RTJDME5JR0s5RTY5Z3p2d002ZE84QzJGM1BleTRoMk05ZnRHb1RkUzFyRktpS2E3a1p2WVI4V0wwNFRNb2k4R3lza0F4VjRZYlFkWitJcExUeDM2alMrL1hmL2hCMzBpT0h1T0lsQXFJUStDRHY1RFcycmRRd1hDbXdVU0t6dG5JbmdzSTE4b1hHSjBOZlBnWHpXNEEwVXhZU1dHUUV0RThOdG02K3orR3dTd3NNSU5jMzFtbk9MS0s5dG9ESzlnajRDU0p6OWt4anJPZS8wZWJwbEZKSEJIaXlGRmN6T3JEQmVBd1dra05id21STGNvRVBUYkkzOUo1NzhGZHQvU2V3YXlDQk9odE1nV1JlWHRJSk85bTVYTFczNUxEVUtEcmxFeUlLQ1JSdmFSYWdPRENzS3RkT0RGSXFtdE5wR3ltZzBxcUFUWVhVZ2xvYWtpSFFDdzJ6VkhienhnOWhIOGh5c0xHTGZZWUpYSTBBc2syRStZNzNIcEQyOXRJUi8vSnZqbUR0L0NZZEdzamhFdDA3MzlpbFlpVkpEVFUxU1MvcjQxY2xuV0VvNUpoVlJPRmQ2TmxKUHRrbThHcTJkc2pSSEMra0lnNXk0YXE1alZlV05taEtvU2ZKQ1djeWpJQzVMbkFZMUt2YzRYRmhTaE53cmxiamNHeVBYRXo5SVJNZ1JDVEJySzZ0SVozSnc0eGxFR0hzdVB6ZUpjcFdhV01YRzJhZWZRZm5SSi9HRlBSL0FuLy94SjhsSFEzUU5EaUtSNnlXdjlMWmNURnp6c1VjZnhlTGlpaVJaSktrQVNSVWVLMzVoTkJvdW5UUmxiWU9pR0lXWGN1NVdLZk82NU4zUzlvQkpqSUhtUDJFbmhnTTZha0VwaFRUdmhlMWNLTTBndW1PT0JpeXdtelh6Yno5RmxjaVlwUXRsVDg2UnhiUHVFd0xOT055ZjNJWHdZd2ZnRFNaeC9zTFRxSmN2SVRzd1NHSkN0dzZhS3B5NGxoRHJmejcrUGYyL0FFaUQ5VnhjYWo0SzV5aWdCWWFkaEdISEk3R2QwdGc1MlBiVlVNc0tzWVRtT1hGQldhQmh1S0VDU3R0Rm0xdFdkRFNvMlZ2VTZweVJnb1k0RTFsSmhzUTNScFRNTWRhczgzTklzQUVVMnoySzZKNGh1aTRiUTEwZU4xZkJnSHRBVTBXNnY0L0NNSkZUUUUxWFZOakRQMzBJTTNQTHVyYkFvZnlNUm8xbGRaL2JZYllsa0xuV2JpaHhLMExMYzNxVElHUW52NFdkbkdmYVFpWjVHeFluS1NLUUVsSUFSNjQ0cGhLWHRHR3pvdllZZCtudUhMcFlrNlY1eGtkSEVEMjRHM0hXZVU0bWl5QnFLL3V3K1hpWFNoaTU5Z2FXYmlrbGhtNGtRYmxhbUxsMEdmZjkvWGVVUDFvc2Z1VXhjcTlQbDB2dy81YnRLL3dMYWhvRFdZWmhLVzZvTjVZa21aVDRLV2VFTUVHcEthRHR3MXRwZ0orVFJMa0tXYnhsT2VyanZzYW5yLzdmS1lkYWhPbGFoSlFwejk3S1NBKzgzaTQ0TzN0ZzliRndqWEZaMXpTY2d0RDBabHh5VVMrZVV2Zm1xc3BDbW13eTNYUDBtMG9NUkdtaTZYcXRwWGdneXZlWUp5WHV0VW9QQW16MzVVd0treURrMmtYR1l6Z1Z0aEVsOUEyblZMZzNoRnpCSk1aQWx1UXQzV1R4YzJuMUNXZHNlNHNXcW5JL2V4bnQ5TUhFenJQcGt6ajdOYklZL216VnVENWQzRzlvSEN0Vmt2WGphVGdrMHBhUVpqYWFFRFR3NjkrY3hBd3JDOXVXaHFHdFFzbjlsaVAwTHFFa1FCNnNaWkp0ZHhKZEp5dTBqUUphTGdndkdKZmNOcWxvUytwVUVVd1dGQmZLc0FlcE00R1dyeTAyeDNHM0xDYlhvcXpBSFlNL25QYWsyWUp6a01xd3RkZlZnM1IrQkhIbU9wZkZhQmkyS1lQa3hIYStEQWdpeW1VWnkzWXlnNVBQL2hZQ1o5S2pGRi95dUxZdlNwT2Vqc1IzRy82YlJQUk9NYnRWaDI3SDNuTXU5ekxWb1M2R1dGc2FDNzVkSjVpMEZHcmp0RndpN3FHOFhtTVB4MnNEaXdsdzAvWUxORjRGMGFTbWEzR1Q2aDc4RzgvMElrYUlsN1FnbldoeEpWT00ybXFOa0JZRlR5bUFIVElXZ2ZFeTY3c21RU2tSWndkTWxDaXh5TGFEOEZnMzVkRWpqSUtDRHBBRTRSWW5EdHVZUWM0eHllelRQSUdPMFVMRFVueTZuZThiVWhwanp5SWFOZFg0WnFXaWJUMUpuQTArM05Ia2JtOTFNUVIwSk9EWHFuVUNSRVJHcUcxckNoRU9GQUdGNmR0YVZsSHJMVmJuOVUzdGJqa3Bkc3BvMlNZcjdUcjdNaEFsMkFJSlJoa09lV21ERkMvQ1lVcVZSRjI4QnFFaEdsc0ZkdnNVTi9aRGU4cWVtcG9xVWZlVFc5UXNOTGxPTnVRcFd3ZzRuVW1peEJiNGRoWXgxYm00clFpbmxicmhOR2lGMG5vSXNMaTZ6dTV6QmJYYU91cVZrdlkvWlhMVHFxM0JyNWJaWGlpaHdRNVlRQVMwWXpsalVmNXVkV01ORnk1TXF3dTZiS2ZIMGh4L3NacVE5YU1jbHpYSWRKcmFUZk9WMzFxQjhScTBTelc1a1o0NE5mWFVJMFhYTUlIZ2NkS2RjWU9Lb2JiT0pGQUZraVBzSE5lcWRlMVhkRHBoQWk0aVdMVnRTZHV5dG1vSzZYb3RrV2V1c2hVd2QybEdLWnBVM3RMRWJUa2xrMlhFOWRuRGpHZDdhYUNvS2tWaU1XUTFjTzZWRnpBenZZZ1dmVXFHa0lyVzNLVkhGeFpYTlhLRTJ1Q3Q2NHpkM282MU5qdmh2dy9JYmxRNDF3Mk90UUw3SG9WY3VrVFlLVTV0VTNJSWlaVmZjdWtlVFpiMzBtWFd1a3RZQ1YydlVqUDFucm1IN3NzdVdMbmw0dnhDR1J0K0VjdjgzcVAxeFlxYnBRM3NPYmdmSXdkdVVDVFVrRkJ5YnRQQ1pmelA1QyswM0dwUTBLdjM3VWF4ZUZseldkUUxOWUhMcEVkQ3hsRm10UjE1bmVSdEJBMTBkcUJGMnR6Y1hLMnZyMy9jYjlRTGdkWlNVS2hQSnVKS2dWSWNReTJSTHdwNWxyd21WbkJkVDV1d09WYmVEUW9qdVRIQ0o4ZGtka0RyU1RuRXVTaG0xcXA0OGVJY0ZsaVRDZkwyOVhYcldDdVI3dUpnSks3V2xoR3l0Tmt2blQyRkJ4LzhkdzR1RzlvenZmZXYveElmdkc0dlcvVGNSMjBEV1kraFlrdGN1NWd2TlZVSkp2YTJ1VEVOOHg5VFQwL2V2eVdjSEpsRTZnS2YvU1ZQUmtTa1FXSWR1NjJTemMyNmFhMVFZekxOYVhBdUp3SUl1VTVFSFVYSk9yK0w4NXFRMml4elVZTXVJNVBVS3QzejdNd3kreDR6ZU9Ic0hEZkZPQ1RxYlpBTUNQSTJXZzNkMU1yU1pmekxnei9BYjE2WWdlOUVjZTExQnpIeG1VOXFYdHZabjhQQmZidW9yVlhKZXRvclhhNzRxTlFiSmhkdUVYN3QvM3gxYnFaWTNISkxPYzRXejA0ZTJyOTNrbDJsY1lraGNiK1E2Q2N4VTJVdlg4ZHZUT0lDRW9GV0JZRnFYRnA3aWFndy9yckdYcHUyc2pLUGNlTnMySWFtU3FkallwV05vSk8vUFllVHA4NnJheVU1dnVyaFVFU0l1c3kvbXpTM2J3bno5L0dKMjI3UjhrcENJVW9LSjE0eU9EeE1rTHVFYnJZb2J2M0VLQzdOTG5JUXNvYnAyUkl1emEzZ3BYT1hKbDg4YzJxeUk5UHIydW5KbUhkM3ZWWjlGdTJhVFVteVZMd2FYMDZiZDlJMVdMOUpmZFhpUE54bnpwR3lTRkJUdm5PbE5TSER5RGpKTVdGY1duMDl1UWpXNTllVU5vVUtBSlpxV2hwTGRXRWlqcWtuWGVZMGgraWN6aWJ4NGVzUHFrQ0t5anByOTNUV3R4aGM0bDZhT25IZDJadkNRSlpXM3BubUdnWFdpNS85OHBFN3Zyb2x6K3NHSVU5TXZURGxlcEg3a2h6UWl3VUVuY1JOeFI0YzEycDhTRXRCa0ZUbUFvcUFiYitYZUdzUHVkU1ZZNjR5UlRQVzRzQWk0ZG82b2hLaEJHazdiWXRPSmFMREd2NFJHdng3UjI1Qk91Nml0cjZDeGlaYmZ4c2JUQ0ZNTFd1TCtxSk9nL003ZVRzaVAxQkF2bjhuejBHeW9jdzNLRmp4dGZLOFlZVGxOb09qbTM3MUR4alFCUUVVTXpJMkpZKzgzbVMxT1p4WTA2WEFkV3JmRHlLa1d6R2RIY2g5cGp0bXJPaHcwTitWU25NZ0dXRjd4VGVKWG1wRjZWNWJKajlhVmllUldPZ2owZjdNcDI1aHAzb2RwYVZwNXIyU2t1b21BYVc4Tks5VU1FN2s3ZDJ4Q3g3YkZodWxKZFFkcjNqakgzNzk2UCtYNVEyVDFhbGlzVVR2T2tKc0x5bTUxUXFCY0YrdGF4VWdCV1d6YVpvendpL2xOU2dCaUdqYktwSWFKQzJJVmJ1SXBLNE1FMm0xUVc1YWVwcWVyVlJZcmUrUkxHdmRhQmxYalJLYy91b3Z2c2JLSHRpZ2xjb0xNeWh4UHI2eE9FZTBySEpHSGtOdmI0OVdKZEVrSjBseFRtN1RQU1U3bXptQ056bmVkTEs2VkNxVituTDVNMFRCenl1aU5WdGIzNG5sUE1lVUhMSnBhVHNJbzVGWnRiSjhjVWNCR3hpdUtiSGFhQVhhZ2F3eUZsdHNFVXJMUXNpMmNHaEhHN3ltK1pvaEczbmlpYWZ3azBjZXg4SDkrekM2Yno4UzdMdkVpTHFwZkRkZGNrM0hZdkpxMWRVZnV0V014Unpjc2YvUWJVKzltUnh2K2FyR2k4WGlpWGdzY2plVXNUVGJ6UmlEa2x0dk5XaU9hZzlMNkdJSlVYa1lhdjRScFVpVHgrWDE3bHdhYSt1YkdOclJ6elU0K2czdDlvVFc5RUdrZFNGdXZyeThqRmN2ekdKdWNSVy9mdUU4TXYyNzBEMXlEWWwzTnpKOW96ckRXNW1qRzdKbGIvcm05dDBqZXo1NDRxMWtlTnYzVUo2Y09uMk1xZUZ1ZWJna2FnMzZOZ01YRUtpM2haWm1iTFhlVWhlVVptMkRBT05icnRaNFNRNG1CUUY3T0pEMDJRUHA3OGt4a1dkaCtycXVzbzhhODZZU2RlNDNrOHVnTS94MEJDSHovWFRCUEdPdWlsUnVrTVZ5RFd2TDZ4S0xkdzhNN1QvMmR2dC94NWRzZm52bTFXT05XdlYyTm9GSytzQk9ZUWhqTWRsVXB6c21ncTJ0cnlPVlRtdnlkbTNYVElvdFNmQTJvbVExdi8rSmoyTW9HOEdIYjd5T2lNcmlsMHJyVURrcGUrTE1qei84d1hGOC9XdGYwWGRRWkU2ZXB3VTNsbWJRUGJTUGo0aVVWaFpYYnQ5MXpjM0gzbW52Vi9SNjFMblpoUk5CSzdpZU9hY28rYzFBdVpSR29YYkpKR1JNTDlNM0pST3ZMWEdNMVdoWnJNMHFTdHM4Mi9UL2hYdG0yV0xmdTd1QVcyNGFVMlFWUURIdFZVdXJqLzk4NkdHTlhlbE5TcWxrZS9MdVdGWmE1TVhyUG5yYjlkODY4ZVNKSzluM0ZiL1lWcHliSzc0NlBUdEt4L3lHS1ZCTmdwZGlVdktiVkFjaVpUYVR3QklIR3g0cmdRMmlxRFNPMTlZcTJMMXJnSUN3am9kL05vbmZ2SHdSRjZkbmRjWnRjM0FmSVFzU3JpcHZHUGxzUTBTbHlhdEs4MDBad3lPM2M5OTkzL3ZlL2RkLzVJNjdpMWU2WndmdjhwaGZMVS8yZG1jZTRCUm9qUEZYaUVTa05HS3lsNHFaUHRqSEZzUHlScjFkbFRlUnk2VFVldWxzVEN2cStkVUsreXV1dHM0OUZxQTNYWGNOWGo1N2pvb0t0Ym43aGMvZmpqLzVvODlLUTAwOWdmRTlTU2U1ZmVpYW03NDcrZFRyM3pONXArT0tMZmZhWStxbFl2SFV1VXRIbU0yTzFPdXRFL0pDakxoaTB6ZVFMMGZRSGdhV2lKSnh0Z3VXVm1vWVlFV1FwNUJTVmkwc0xPS1hUNTlFcnJzYk45OTBnMXEvU3VieDBpdm44TE5ISDVOM3lDWVpqMGQyN0w3dVNOL290VlA0SFE0TDc4UHhxY05qaFZxbE9wSFBlVjhjNmsyUG5aOWJ3eXF0dFdkbnY5S28zbnlDeUJxU1djVGhzTHIrcnlmT1lXWFRKT1VrYytXMG9GOWRpRmN3R2JiQ3gyM1dsMFdTQ2J6SDQzMFI3clhIOGFOZktuei9KNU5qNjAxN2ZGZC85bERTODNKWGp3NFVIQytlazg1a09oL0RNODlmTHAyZlh5dFpqak4xNU9ZUFgvanVEeDZhYXZySkU4WGkxSHNXNkxYSC93RWMvRENFcWxOZlh3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmtnU1VSQlZIZ0JyVnBwYkZ6bmRUM3Z6WnMzKzhadHVHdW9oU0psMlpJYzI3RmJPS2JiSkUwQ05KV0JBazMrTkRDS0JpM1ExdmJ2QXJVTjlMK1Y1a2NLdElVVEJJYVJwcW1acFRHQ3hCRzlSTEpqVzZRa1c3SkVjMS9FSVllejcvT1dudTk3YjRhVUk4ZXk0eWNOaHZObTNwdnZmdmZlYzg2OWR4Ujh5c2ZzQzgvRzE3Ym1UNGNDaVJOek02K2tMS3QrTXBZSXhyUHBTdHlDQjFiRFFMakxuOWNEbnVWS3ZwRWZHVDh3cC9qd2NqUTZPUGZsdjM5cUdaL2lvZUJUT0dablg0aUhyYTdITnVZdlRzRnVUZDFZdW9yMGVoN3ZYbHJEUUN5QW9jTkpyQzF1b2xDekVWQlZqTjgxakhxdGdmV1ZYWnk4ZnhKZXZ3K0p2bjVFazBOelhzMy92V3JSbUg3Z2thOHY0dzg4L2lEamxpNi9PYVY0OEdTcGtKdktySzhnZmYwaUxMT0dURHFMTjJZM2tDbTJNQkRYY1hpMEc0MXlFNnM3SlZUb3VUKzY3eUF1WDl0RVgyOEV4eWFIMGQzZkI5V2o4S0hScTMzUU5SLzg4ZTdwM3VIRDN4b1l1M01Hbi9EUThBbU9wZG5mbklUWCt3eTNac3EyYk5pV1FZZFZVZGpkUlhrbkExdTFVV3NhS0RZdHhCaUtxNnU3Q09vK05GVU5OZFBFNGtvT2F6dFZqQTExb1ZGdnludG10N1pRTGxZd05tRUQwUVNDMGVocEcrcnByZVhyTTdadFBqb3dOcm1NajNtb0grZkRzN096OGFWMzNuakcxclJadm1RSTJqRE5GbXJWSWpZWHJ0RElLbG90QzVxbTRiTjNqU0Rvb3pGVkErbHlDL2xhQzl1bE92dzh0N0pkUWl3VVFKNmVMT1dxV0Y5YXcrTFZOVlN5ZFJReXUyZzI2bWp4MGF5V0FkdWNVbFZ0YVdkdDZVbDh6T08yamJzNmV6NFY4elJtNmFqSGJSckYvekJhTGV4c3JHRDU3WFBJYjI2aVVtaWhaU2pZVEZmUmxZaGdPRUZ2R1NacUxSc1ZlckxlTkdFYU5zcjFGaFRlcU1vUUxXYnpXSnZmUm5xcnpJMXBvRmtyTWJSTjNydEp3N2RoMmFaTUh0dTJudHBlWFZoaVBxZHVkODIzWmR6N3MrZE82eDZGaHRrcGFSVVAyN0pRSytWdy9UZS94dnpybDVCZUxXSmhJWXRjb1Vrakc5aEpaeENrQjBYWWVsVUZoc2tROVhuaHNVVXVLRFN1eFlBRlNpVUQ1V3dGSVErUnROSkFPQmlFMFN4ekUwelVxeVUrTjJWMFFMR2hLRWg1Tk85c2VuWHA5TzJzK3lPTlc3aDQ3akZid1F2MFZ0enhtUHZndjBJdUE4TnFRUEdxcURlYU1BeUxJRkxub2hYa2JwUVE0b0lpek9vUXJVandNOE4rRmIxQkRVTWhMdzRrUXVqaDM3MFJIN3BDUEIveFlHQXdCcU5lZzFtcm9iU3ppZkx1TnFxRkhDUFQ2SHd2TFl5ckhyeXd0YjcwK0VldC9mY0N5c0xzdWNkTXl6N0RmWmJHT0VZNWgybTBFQXpIa0J3N2d1eEdGbWFtQmkvUDY1cUtzRmVuQjhzSWVEVWNqZm5sNTBOK0hSb04xQW43T3ZNdTFCVkVLT3lIbjdrbkRQSUdOS2hjZGFObG9GRXFvcmhiQkh3N0NDV1M4QVdqdk5aSHd6enlYc0pHZXVXWnJmVUY5QThmT3ZPeGpidjIxaXVuRGR1U0YwcVRYS3NVZVhOYkxpUVFqaUtjNkVleDNKU2YwdmpkSVYybGtUYVNYSFFpN0VPMEs0UklUeFFlbnc2UEpveUtRd3NFb1FYRDhBZERDSVFpMEJpdVhsMkh4YmdyWjdkeGFlWlh5TkM0N3VFKzVMZFhFZThmZ1ovM1ZGekRGQm1pS2lORWZZWWh1cHdjSFp1K2JlTm16NTlOMGJCblZjc3hTaUh4MnZ0dTdwb0lsWXR0dGt5VUNsVWFwS0pKSUlqNHVNTUVEdUdWM3NFb2dnbDZxQ3RCM29yVGdDRDBRRVFhSVc0UjcwckNHNDdBd3p4VFNSVmdidnJpWFJqZVdDWHB2NGJGNHFwOFBjcjhKZ3ZDVmx4aWxoSEVjNHJnUmp4N1kybHBibUJzYlBtRGR0d3k1N3lLZlphQXdSeXpwRkdXWlVvQXNmZ1FBQ0ZlaTRkSmtQQjQvZkRTWlFWQ2ZpeWd3MjQyQ1JvbXdqUk9VSUxHMFBSNDZEVnFMRDBRNVVaNW9IR3p3bEV5SUVOWWtMZEh1TnhaTlQrcm9lL0FHSVlQZEtHN0o0NytBMGU1VVZIcHFmYTJPbUhrNWlDVXVNZW5uTTB0TGNVLzBuUHZ2bm4yU2N1MGlJb1dGeSsyU25WamdROWhuTnc0aStqbnhHa29IR2FlMktnVDRuMWN0TVdjQ1lhRENBVDloSE51QWtsYUxFaGh2cGlrQUErTlV4aTZsaWs0MG9RbU5vdWJwSUtnSWRiUDd3dkdlekE0UWFPWWU0bitRWGg5L282V2NpSkljU0pJUklBdDMwb1pQbFh3NEJNZjZybXI1MTlNOFJ1ZkVvdVhYcklGMzVCN21uVnF3U3FxUkxGcXRZSjZuV1RkcUVtaXBmOG9LSmc3bW5NekgzUExSOUNnMitBTmhWSEtOOUNxbTlKajNvRGd2UVpVQW82cWlBVXlyQlFDaVlnS2NpWkpUVzZDRm9xaWErU2drNXU2WHdLSjNmR2JDc2N1eDdBT3hObjI0OXZyU3ljLzFEaGI4VDBybi9sbHBtR2dXYWRoOVRwNWgwYVFWQzFETE1DUXo0N3NzdVFYUm51N2FZdUtlQ1RNRVBQaS9iVU1MbDlkeHdwbGw2bnFxRkJXbVF4WFZkUDVlUXYxaXNOalhpNWM4YWd5SW1SQ3djMXRocVpLZ0VtT0hJWS9rbkFNY1UyVEVlUW12d01zU3VkOVZWV2V1V1ZZWGo3L3l5blRNcVprUGpGY0xCcG5pcHdURDU1ek5nY3lrY1ZDeEkzbHJ2RzVmMlFVRzFkV0NPdCtna3NGWFhHQ0JqK3p0TDZEWExhSTNsZ1FacVBGOE5KUnplNUtnNnhtQXdIbW5XbjZvUEQyd2hpVnF4YlJMcjVIMHdPSVJIcDV6NzFVY3J5a3lIKzBaTys4RTZQaXVxa2JhMHRUQXlOak16Y1pSOTU2VE1TK05FeDR4L1dLWlJ2U1FMRTdmR0o0T1Y5aFUySFlyc1VLRlVRMG9rdFBSa01oWHF0UWNqVndvQ2VCQm8ycUZLbFlWdFBvR3Vybi9WdG9VSEtsMzM4ZjVmd09iQ0tvUHhaQnVLY2JrZTUrQkdMZDhwNFdJeU1lVHpyZks2aEhjcTE3S0cyRDNKZUtnOTdpV2RNOEl2ZjJqSnQ5OFlWVXE5azhMVHprRUxYcFh1eHhudTAyRWFqU2k0NzNWR2N2K1hiaHJmY1FGWnRKMEJNeUs1T3JZTWRTc1VGeWpvaHc1VG1iTHRsWlhNWGc4Y1BrTlRLVTE0dXQ2OHZJVTE4T1R4NUNwS3RIS2h1alZXTm82M0xSUGwrSVFhSTR1T0VRWEp1THVNa0sycWYyUENzM2Uwb2daMkpzTEM5OWEyaVdOTXlVRDBPaW1LTklyUGJXT01rcmdFWThXNHBMRGJZRWdWcW1CTDlPYlVqNVpWQUxNdllSQ3dld1dxMmk1OEFvU2d5aFhMVkpJRElSR3ppQWdXTjNFMTBadGh0Vi9PcnFMczVkTCtEOWkrOWhlL0U5R2ZLcXgwdmsxV0VXc25zaDF5azliZGViKzl5NC8rQjdUYi82ZU1kei9QZzNSTXdwRG1qTEQ0aWJTdEZsd1kxbis2WVlsMThnUHN1TjBGbW5lWFhTT084VzdRcHpmV1VreUY5ZkhlMUJ0MUZIT2VhVHFLdnJBa0ZEQ0JQZSt5ZnZ3UGFOUFBxSmtxTURQYmp6d1Q4aXFoWjRYeWNGUEhXQ1dpTUhyYnZYQlE5bmJkSmpjQlRLQjBPei9Zb1I4SkEwN3Z5THo2ZjRvWk1POUxmM3hsWCtwQUp4a1VnLzU5bnE3Sjd0aHFxZ3drQmZETFltMEZBbExZU2hCM1hxd3pwQ1FVb2tqZFVBVWRTbzZnZ3dMM21GVkNROUJ3L2pVSG9IbzRlSGtSdy9qR0NFcEo1TWlwWEorK29SS2hjdCtBSFBxRzQwN1NFbFlPOXR2dEtoZUJtYW1xMTZUMHBFYkpjeXJpcHhYaWdkVHprbXU2aHBLVGVSU0NEWnl6b3NUWFhCTHhjU2pIMlRPR1dYQ0hHdkw0Z1cxVXVwa1lYQ21zNHJPSXViRktEc09uVGZmYWlRcUgwQlAxVHFTK0VWS0k0QlZxc090WDlZM3QrUzMwODE0MnJLTnNoMFF0UU54LzFCMnZKNlRndUVtT3Fnb2J6QTJwZWtDdHBwSjczV0xqdWtoYXFyemhVRWh3ZWtIQk9YdGVwRVYrYWVoeUVZRkhxUzRyakluS3hTWEF1cEpiK0huR2V5eWhiUEVZYWRUOGdyZC9lZGpiVWsxMEU4YkNkcTlwQi8zeHBjd3lUWEFUZnhJVmQza3Bjb0p3VDZpUkNVS0FobjBYdmgzUFlvcEtLUXdLSkFWc2kyV3l5RVJ2cllHakNJbEs0RzVSc2ViNERoMllWcXpzRDIyaTZSajhvalRQUVRDK2Juc2xmZlFYNXRGVTE2VHFPOEVxcEZMa3hnRkFsZVp6ZE01clN5Vnh5M05TWDJHWFRUWXR0L2kwMVNsUlJaeTR3NzV4V3B2QjJ0cGtvTDJ2VmJ1NVp6eEt0SGJrQzd0aEpCYlBGOG9kcmdKVHluaWpwYms2aGFweko1Zi9ZcUlzRUFmQVFTWHlSS3lVYVZRNkhNUGd3SzY0dW9zS2trWkp5VE0ycUhlcmd6SFRGOTg2RjB2SXg5M21vYjVlQ09wSThUWWlVcDRiQjJhb3F6bG90T0V1cmRDeDNERkRkRWJWR2RPR0hKOEJScVFpTm90SWg4NHVZaUpIMVVPSm5sVGNvdUF5dHNBdm55SlJwdk1nUURTTS9QaS9Zcyt5MHFpdXk5aEh2N1dQcUVaVVV2RnRHZ2JnMks4cjJ0UDFYbEp1TXMxd2k3ZzZMNzMrM1lFVmNWV2RvSVIxblNEN0pPZytwZWlEMnVjNVc0UEc4N3BZOVVFbkR5cXk4MVJoQ3dLYkxaSkdMTG9iU2RaL09IWUNFTTliSk8weFcwcUU2MFVKQWx6UkI2Um9hby9JK2hWc3pKWG96VmJMbjNaTjR5RisxOWkvNmdsOXI1MTNHYSswSmNZOXFkaStLcTNlYTJUdmp0cHdJbkJ4MENOL2NScXN4U1djUkNjZEJNcDVJWFhtcFU2NUxNYjl6WXBRUnJ3VkJaMW9RMERCOGRJYmhveUN4ZVJ6YTlpSWJOM2t2UWl6aU56SzR2OFpxR2xING1jOHRQMmRYT3Rac1VpSDJMRUhXRnMrMWFzWi92WEcxcHVWTEdDVDJIODZ5T2t4MUdVRHExbk1nTnhRMVBTeUl0K1l3ZWFiWXNXYy9sdHd2WXpSY1JZYXVoUUZWQ0dZb2JWemN3UXNwb0tFMlVyUm9hdFMzbWFvWDhGbUU0VjBnaERXNk9BMmw2Yk5pVmZOZ1hrbTFEMENIeGp0c2s3amc4cDNiTUZLbXRlUEttYmNxcVc2cDllUlBWcmNEZEQ5cjdudDBpc1UzaWxpUURVZmIwWXAzS252cExmaXdXWVV1QjVZK1BIdTlPOWtpT3N5c2NndlFFMFQ4K0RqWHN3Y3FsTjVtN2ZILzBrSXcxcm9VYnhPcEJjZTZKZlRKcmo2cVVUdlM0Tm5jTWQrbTlUZTU1aGlYeVVOcVh0TDFqdTcwVDl6WFV6am5IU0FkWmJmZHZzUzhlRXJHUzZHVjFvYURCSGtxNXlrNDBoeDJxYXFIaEtjUG9WckN0bGRFWUNLQ2x0MGo2UlF4TkhxV0s5ekVjcVdkWkF0VXJlVGFTZ2k1L3VXeGxLL3RpVSswWXVwL1hZTzlocW5TS0xMYnRaWlcxMVp4enNTcHpSK1JXNTlQN3RWdmJmQkVPTk1hMDJyclR1Wms0bHppVXducStqTjFLSFduS3J4MCtnNEphNHpXMTNUekxJZXJQUmhFVzIrOGlER3NVeGg2UGt4WjFudHROcjdPQkUzWXJEaWZBSUp0VHFyc1VXNEtHWEpyeVFlODVwbmZXcWFwNTBjSllVZHF1RTlnbmpMUFZEcWFLdG5lYkhxUU44bjNYcTIzVlFwbTFsY2xpZFhNWEN4UzhjY3EwRnNzYzF1NElzalBXWUVnbVlqcENVZktmeVhaRmJwM0ZxYkRLa0dqYktGcWNHMndpZnZoZUVucXdEV2RPRFNkcU9ZbUU0bG50Y0c5YnVPK25BbHRSOXVEUnNpNXEvTUNjb2poZjVGUUM2RlM4N1ptQUl3NzJHcksySzZLRnNhYlp4TFhyYS9qaFQxOWlxRFhRTDVTSW01Y1ZvVVFveDZvQ2FIaC9oZktMQ1FWRHFiUGZHZVU5Qklnd3h3ajlOL0lLTG0wdjRlR2VDWFIzUlRxbDIvNWFyczIvYUtzVG9HUG9YcFM1UnR2V2pCcjBxdFB0Um10SDJjbjJuZVhpaCtKV3hxSmF0MlNueW5SbGxrSHd5T1pLZU81SHYwQ3hXRVdSRGFRQjh0blIvamdDTk1UZ2ZUWXFMV1FwemFxV0Ixbk9Ba28wcHRZZ1ZheHNvWkRsTlF4Zlc0K2dFVXhpZG00T1o4KytKZ1czN2ZZbTI1NVNsVDNLYXEvM0puV0NQVUtUR3JkcHpxbW5IbjRrVDZTY2NSUi91eC92M0xUVG43VDJPRTd3a0UwRERZYmE2dklxZnZ5ekdVNXJtcHkvZVRCQ1VJa1NRRHlLZ1ltQkJBNndkNUtnSjBXSXB2TVZiT3hXY08zOUxKWVdjOWpOVk5sOE10R1Rtc0Q0L1Y5QUg3a3dRSGlMb2tvZzRxeUFoYTdjWUxIWXRuaHcyYnREMnNBK1RIQWQ1T0NHYk5JNnhhclplcGxQVSswd3ROMHVqV1FIbHlJY1Q5clNNR0Znb1ZERU5xWFRuYU1oRGhOVkpObXIxRGlWYVZvYURiZkpYeDRjNW5DeFFsREpsTXBpSnpudDhiQ3dsYzBMREIwNmlFTjMzNDNlc1hHNXlQVFNDcFpXdDNGOTV6WFliTjcyREkwaWs5bkIrT0VVRG80Tjh4cFI2Rmw3bm5KRFVkbXI0UndqSGNyNG52aGJHdGRzTnMrd0pmZWtNRW9pa2FXNG5qTmtmV1pJVHpXbEdNNFNEWVhRL2IrWDNtQXZzNFVVUGRSTlhUakU5bDVycXlvajNwQWJZOHQyWDA4eWl1UndIQXIvRGtRamlQV3hrenc4d3ZsQkx6dlFRZW1ad200YTZjMHNLdVV5UFdiZzV6OC9oL0dKRFRGZHhWdHZYOEZmL2VVWGNEQkZoY1BLb2UwOUtlNC9LS3JkL05RVWEzb3ZUSG04OHBQdm4yVXZjVXJrbStncGl2TGwydnd5UTY3T2ZtU0FMWEliei8va1pXUkxiTEt5azV6c2pra1VMTkhBMGI0NFBqTTJnT2J5Z3VBSTlqOUlDOUVnd2l4YW83MHhUbWw4ckFvQ0NQYjAwYU5SdHV0Q2JMTjc1YlBJa1BYNXEvajEvNzZNTnpsT25pZmFlalEvSG5wNENwdXI4MGdkVEhFb1VzYkp1OFp4L3oxSGVYdWQwOW82K3JwWVlYQ04zVDFkU0hRbDBFNUpCdFdQazBNSFRuYzhKNDVHby82MDNUS21EQ2E4TUc2RDJqQ1hMVkhGaDNCOUpZTlh6ODJpWWRnU3NWSkR2YmpqOEFGMDlTZngyaHRYMEJmM28zc2t5YXl0bzNGakUwNlRSNEdmSGVZNDFZbFh0Z3pFSkNjZ08xdWFVQzcrZ0l5eWZEWXQ4MWNoa2NmWXFmYVF6SVhXTUlxNytPeDk5K0s1NTMrSTQ4ZnZ3TnR2WGNDUjBRUVdWckxZSkJqcHpTckhaME9ZWDl1VzgvZC8rZWQvUW9SVEphWlBaNlRsYWYveC9SLytkUGt6eCs2YW1yMjhrSnBmMnNKUHp2NFdsK2RYQlhZaW44dWp3RXBhRVpOU0VicGMvSVdyODdodzZTb0dCNGY1R01TZHg0K3dRenpJMWQ1QU5DcnFOMDAyaklKUk5vUjZPV1B6YzVMREdadVg3UVF4SUJHVmhKeWNOaG9jTW1hUVh0akVlNXlKWjluTjF0bUpGc1BVZ1ZHS2dzMTE1bDZHT1d2aDlkY3Y0TXFWYTlqZVRtT0x6ZDJ2L3NVWDVTaGEwUGVyNTY1aDZuT25adWkxcDMvSE9IRnNaUm9YMzFsZS83dWx6UjAyUkx2UXkyWlBwZGJFMWNVMUx0U0hubGdQZkNUU1RMbEFHbkNHR2w5KzZEN28wVGlPMzNsSTVvaFhaVTFYTC9KdlAvc2tCQm5tU1R3NXdBZ0lVMnhvVXUwTDR5eTI1NXNWM2tlVVNKVUtkdGR2b01vaDQycW1JQ2VwOVdhTnMvVXNQditscitEZzRZT1l2MzVObE1ENDR3ZnV3Zno4SXRjU3g5R2p4MWhPNlRnME1ZRkxGK1lSOGdVZi9zR1Buc3ZmMnJpZHphMzdUejJRR0IwWXZEODFNb0pqaC9wd2ZISU1teHNaeWlRMlViYzJHRzYyVlB0VnpoRUVhb3B4MWJFN1QrRDRIWWNKQ0NXTW43eVAvWkVDZS93UkdqWEl5V2lmOUpiWDY1VUFJTW9pc3lFTUswdE5LYVVjUTdIQzJxL0p1Y0JTdW9BQWFlVmdmeGNWam9hQm9SVEhYUkg4K1ovZWc4TG1HclpaK0FZWUJSdWN1WWU3K3ZHTFY2OGdOVEdKWUxQNjlEZWYrT3ViaHBBM0dTZU9vUU1UcnpmcnphOVZHczE0YnlLQ0VML3c0dVZyR0IzcXdXZnZQc1M0VDBKMENuYTRHRUdzR3pzWmxoWXF2dnhuVStRbkRpRjlERWt4NEdCejFoY0lzNTBYb2NkVVIyRUlFY0F3Tk5tSmh0dXVGMjNxZXFtS1hLNk8rYktKM1ZLRitXZmhNeE1qTUwwaG5MK3dqSzFkcGdRRlE3MVl3TnZ2em1NclYrVG1WbkhpMkNUbU54dllMYXJMLy9hdHh4NzVvQzIvTTUrYm1abk9wMUluSCs3dVNjN21DcVY0S0x5SmJYTGF4RVNLSWFkUjdUZW9SRXlwKzNSL1NJNnozbnpqTFpUSlozNUNlNHZoNnUvcEowSnhrWElpNnVTb2JkaVNWaVFoazJxRUZKTWxFK3Uvd2tZYXk5czF2TVZjRnhUU0hTTjlETEQySzJpNHdIQk1wM1A0eFFaYkUyYWVxcWRGTkE2Z3p2UllXRnRuYXNUejcxMWNmUmkzT0R5M09wblBiK1dQVFQ1NFRmZnJYMHV3aDcreHNjVGlVM0FRT0xuSk1ud1pwblRHQUdmVnNZQVhuNXRJRWlkOVNLV0c2RFZDTlJjY29MQTJhMlZIK3duZU0weUhndzJuMkpVYVVOUnZETStkeFUxY3psbTR0cjB0cDdWaTN0N1BjSHgzWVIwbERrMGlBYllJbTd2U0U2SzZid205cTRpeVJ1WDNlci8rOXF0blhyK1ZIUi82VTQyWFh2cnU5TVJnN3hNeGxpYWlwOUpncnovTDhSVDd4VnlmR0JuYkdCaE00b0Y3ajhNa3RLK3ViVEN2ZkU3NE1ZZlVVRlI2VFpVOUY5c1pnN2xUSkNsOHhSaEx0TnEzTXdpT0hVSEpkdVlUQm9WRG9WYW5ZVnZJVTYrS2RrU3hXVWFlSUZVVHZWR0d1QmhUeDJOZHlCVUxUL3oycGU5TWY1Z052L2QzS04vKzdwa3p1WjBiVDFpMk15NCswdFdIQkdmZ0hrNUREWWJhWmliSGpoVTd4VVNzTGZLYitFV0NtR243ZUU0TWk3M2hCRlBLNDlSZU5GQU1NQjBSNk13QW0wUkpUM2NmWXBPVDhIUEJYcmdqYXQ2N1VxbktHWi9OcWtOcVhMRWh2TzlJZndMMzNIVUVrMGVPUFBIdTNNeVozN2Yrai95UnpmL00vUFFNVStRUlprKyt5Qy9icVJJTWhQZ1JPOC9ZUDM5aEFkYzNhOGdXbTdLcWx1OHg3QVRFNnh3dUNpVWlPOGIwcmpUVW5jeWFkZlpOOUNoNjc3cmJ3WldnYU1wU1FmTGFBOUZ1K0JYT0d6alY5WG85T0RTV1JKeFVjdUxJR0k0ZkhNenJqZG9qenozL25UTWZ0ZmJiK25uVThzTGxhVThvZktwc3RKYnJvbURsVGc2UGpDSEFUdkcvUHZVUHVPK0J1OWxKRmcwWmo5eDVVMWExTGRsWWxiTndZWmpxOVBpRndtbXhsVjRwMXBFOGNhOGtkMUg0Q29GZ3VOT0lXRjhTNDBNa2ZxdUpzRi9IeVlsREdCL3V4NWNldkdPNWxzdWQrcS9wLzU2K25YWGY5Zy9iM3B1YldaNDUrNE14YnZuVElxeW9HREhSbmNERzhoYmV2YktFU1JJcDNJR2c4SkI0dElpSXZvRVVGKzd0MUlZQ1dIWXBuOFkrL3hVV3NWVTVLTkU0L2hKNXJMaGROWlVHWDg4WFdPeHlLc3ZRdlh4cERxc2I2Vy9WUWpqMTc5UFR5N2U3NW8vMWswUnhYSGxuNWlsVHI0M2xOYy9NSmtkUWl4ZFhzSGpwSFh6bGl3KzViVDhMdXBoOWMxRTZQZGNrSXFyaHVQU09TVy9tVnBjUk9YZ1VWZkpXT0JLWGJRYWhRNzNVbkYwY0hmdklrMkZxUkkvaXBUQnZpSUoxcHI4M2VlcVZOMy81K0tPUFBwSC9PR3YxNEJNYytVd212N0l3OTczVStLbVhEVjhnbmkxbkpyNzVOMTlEcVppbFhxeEtPaWptODFLZUJlTUp0dHFqc21EMWNKcWpVc0tOUGZDUTdNVkVpSGpGUW82aXZZR3JsNi9MMzdiMHhLUDRrd2RQSVY5cXpxeXZyVHg2N2RxYlQxK1lPN2VGVDNCOG9sL0t0bytmL2V3L1ovZzBjL2JzaXlrQ3hlbGF1ZnFOYXFWMFVvUnRuY2k0czdWSlRSbGhYdmtSR1J5akFFOWo1TUE0eVo5NTV0VlFJNmdVY2puMlhtcVVialdFTlgwbUd2SzhmTTlkdzJmKzlyRi8vRmhldXRXaDRGTSt6ci80WXNvZjg1NHM3bTVQbFhMNUV3ZU9Uc1lacGluTm84ZTkvcUJFVDNvMFg2SnJTK1g4M09xMTZ5dmhjSFR1MjkvK2orbnBtWmsvMktEOXgvOERIdG5FOU5ZS1RUTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQmpVU1VSQlZIZ0JyVm9KY0YxbmRmN3UrdmFucDZmRldpejdPVTY4eEhpTHdXa1NGZ1hLTkcxU0VGT2d5WFJoS1cwek1DVk9PMjJITUVBeWFhQ0ZRcElPMDNZNnd3UklweG5HN1pBMGdZYVV3WElDSkk2VFNBNWU1QzJTTGRuYXBTZTkvYjI3OEozL0xaSzhFR2Y1TlhlZTNuTHYvYzkvenZuT2Q3Ny9hbmlieDU3ZTNrUXVtT3NMMnViMlJMSWxCZmc3Z3BhZFNNUmlpVURBZ21rYXlHWVgwcTdyanVRTFRqb1VEZ3hHdzZIOVJpQTQrS2w3LzMwRWIrUFE4RGFNdnQ1VW9pdlJkWmZobDNyRGdWQnZhMXMzbXVOTlBPS0loRUtJcXNOR01CaUE3N21BN3FOY2NWQXMrWmlabVVFNEVrWXdFSVRtZTRPRlF1NTc2Ym5aeHoveU5oajZsb3o3VE4rN2UxM0gvVW81bCs5Tnhwb1FpMGJSMmRhQ05WMmRhT0gvSVJwaldCb0NuTGhsV0xCdEM3N3YxODcyeFJnYVdJTHJPalRhaCtOVStMNkE4Zms1bkptZWV2eG5MNy82OE9QOVEvMTRrOFBBbXhnZnZQSGFIYnZXZHp3V2k4YnVMWmZLS1VQWEViS0RhR2xPWXMzcWJuUjNkTURpWjRZaGhsVTlacG1XT2xmVE5INXVxUERVdWJUeUt1Y3pUTlZCaTFHaXNmbEtaZE5pdHZqSjNodDM5ellGL1AybnhtYlNlSU5EZnlNL0hoZ2VUb3pOWngvY3N1UEdBYy8xZW5QNVBDcGNiY013RVdMb3RiYTJvaW5Sckx4aldTWW5ia0kzZEI1R3c2aGdJS0ErTjNtT0xndkF3N1p0ZFg0d0dJUnQyWWpTMDJIRHh1ck9MbmllMTJ1SHdzTS8rYjhmZlFWdmNGeXhjY2VHeDFNUlBURGdPZjRlUmhROUVrQzVYRllURE5nQnJPcFloU2hEVWVPWEhvMFRRMngrcm1zNnZXYXFpWXNCWXFnWTd6RWtsY0g4VG9iOEw4UG5TNFRHUlFQTTAyQUlwa1VRMGp4a012UDNuaDZmR2o0MlBKeTYwamxma1hGSFQ1M3I0ODBIT0t1VTVNZk03SXo2WEZaYzBqWVVEcXJKbVp5NDR6aVFlWXJSRW1JVzg4ejFQUEVBaXNVaXNwa015c3l6VXJHa0ZxY2svL01vRm9yS1lNL2h3ZkFVRUdvaUlDVVNUYkFaM3FkUERQSGFic28yeklHancrZjZybVRlcjJ2YzBlSHpkMm02OWtNZmxZVEhGTTBYRjFGaDBsYzBHMldQSVJXSXdLTjNTazRCVGlsTGUwcHcvQ0xLcUtpTWR0V0VIZVRTaThnc1psQVNnN0w4ZmpHSGNyNEEzM0hoME5BaVF6eS9RTU1MWlJUNWU1OHowN2tnczlQakNJVERhRzV1UjdtWWgyZm9DVXYzZmpnMFBMYm5MUmwzOVBUNXUzelhlMGk5OGVWbXZzcUhOYXRYODBSTmhWMkE0ZWJRbTdMNlZRVDBZUk04NU1MaUJib0RBcEErbzg4TUVFZ0VSSHhYZWFPT214S3FFdWEySExZSlRVNldzR1habUprWVI1azRzMm56RnBYZjRsMjVIZ1Bqd2RjejBMemNGeThkUGRWWExwY2VNbXM1SVVYRGtWemlsTUt4S0V5QmVVNHFrMWxrTGJOVm5aSUpSaU14d3I1Tjd6cjBuSVlTUFNHL0MwU2lDRWJEcWl4b3JnZVhpNkdYOGlvbjdXQlk1YUdFZEtGY0FEK0d4L01xWlFlVGs3TUl0SGJEQ2pOQzZHVlpMR2d5QzE4VzRjSGp3MmRITnE1YjgvZ1ZHemN3Y0N6bGU5b2pQb3V0NUlya2o2Uzc1SktzdHFEaWNVNms2RllRb0pjRUtKcVR6V2hwYVNFQU1GdzUwUXJ6SnAzSll2ejhPT2Rpd1lvM28zM1ZLclFRVFJNMFJxc1FhT3lRTWtwS1FLbGNRWjdobnVOMXB4YnlHQmtlUXpwYlJpYnZZT3UyZDNJQkluQXFaZjdlNVh5c0tobFFidGNmSWNnTWJsNjNidVNLalBOdGV4OWZFZ3JWUEs4SzdlSUlNWkVyR3VQRm04d2dpcDZncFZZRkUwRTFldGtWRHpBYVJ5Y21zRGlYWm1HUGNRRnNuRGwxQ2llUEhFWlRMSWFPUkF2V3JWMkRjTlJtS05ySVpiTllXRmpBOE9nNW5CZ2ZwMEZaRkhORnBCZEthT3RhaXcvL3djZkphQ29Lb01Rb1g4Q0s0U252Wlo2YVp1MWptZHE1YzkyNjlHODBidURJNmEvd2xGVERVREdRSytzeEZQU1FoY1ZmSGNUYWdJWk50OTJHWHh3NlFEWXhvMXhxYWlZTHQ2V01kUW9sdE1UaTZHcHB3b2t6MHhpWW1HV29CdEhUSGtOY1o3NlpGU3d1ekNJVzZrSkFrUEQ4S0E2ZkhzVzViSW1BRVdUSWE5aTE4UnBNVEtlUnR4T0lNYVFMcFFyRFVOQ1k1Y05pTkVuTytxZ3hIajhWZ2lGMThPN2x0cXdBbE9jWmpvVHRlMWQ0c1JZMkZmNlY2U21qbkVmYzFwRnNqdUg5NzNzM2RsOTNuYUk1bXZyamFta09FbUVkTGZFZ1ppY21FUS9GMGQyMURwMnBUZmpBcmIrUEpPdGgyK3BPMkxFQVlKV2htYncyRitUcTNUY2dzbWt6eko3MTJMQjVKNDRQSG1ZWmlHRHRsdldNSHBmcjU2djgxSFNGTmhmNlJHcnJuc01uaG5kYzFuTU1xMGZFR0I4clNhY1VaYUkrMllTTGdIeEJhenlkRUU4WWEyTU9hVXh5cVhHZW5NY3FyTGxsUk1oUXRtemN3THcwY1pWbW9aRE5ZT0xWbDlBWkUyQ0pJYzNTNEpZMUlpQlVxTnEyaHVzVE1XUUtjaTVCNXRvTm1LdDR1R3BWaXNiNWF1a2s5MDI5eW5iZ0x4a283K1hRTGVOQnZyMzVJczhkSERqWnl4TjZhKzVTSHZPWFg4RGpCWG00Z3BwRU81TmhtcDlmZ0lCK2U3S1Z5Rlptcm5sRXVnb25RZnJFK3Bkb2FrWThhaUJKNzdSRkkraG9hV2R4anNISkZoQWk4SlM0akxyTEtkRENjbVlPTFV6c05tUVJjdFBvYm84anlEUm9ha2xXRnhoVlNtY3h0K3ZHMUkrNmdUTC9YNTBjN3IzWWN3YnVXdTRwWmJtMjVEOUdHeHg2ekE1R1lZZmppSWJaQlFRWFlJWkQ2T3JzSk5vVkZhdjNXZk5Dekw4S1lkdjBMVVNpemJ4TEhpWG1pTTRGS2RJd1JhRmRNaE8zd0M3QVFFR0tObS9WMDlwTUNoZUR3VVhLWk9jUnpMTm1zaDJTMmxhbmN4S1dMc05VUEZnSHUrVkRNelRKdmY2RzV5VFhmTjlyVUJxZko5VzlKeGVRNGZoU1kxd1k3VjM4djRSc2ZoWnNSb1ZKb2pVUlp5aHlncHhoUmRaRHR4a2lBWGhFdUFyWlI1NEhyV0FZczNRRUpkZDBaQmwrVHNGWHJWQ1V5RXNXcXRKQkRrK1JiYUp2S0lJS1MwWm1vVUFBeWpHVUY1QW5reEh2eWR3YU5BOUwzSlFyMFRzd01KeG9HRWN6K3Z4TGhLSTZxZlphcG5HYVI5NllTR0Nlb1ZRaEY1elBMV0krbjBOVGE1SzVrdU81WEdGNmgxSExTVEhVV0kwRnVnTXN3Q0Y2TUJ5SlMrWmdlbW9HYm9XZnM5NTVycysrTDFTZHBFbXZRRm9lZ2hjOTc3TnpXQ0FsSzVYSzlCcFJsRFZWK0dqVk1BbEpYYjNXUFZnMzBJeDZleHJHOFhxZnFIdXA3cW42ZTZmUlozSEN2TFZESGhWSmJjZmtYSUV3YnFPbmJUVkJ4QkEwUW9GY1VVTFpveGRsRXE1YnZaWVZwQ2NwTWN6TXptSjJaaFpCVGpMT0RrSThFR2xPc0paMUlGZklxKzdCSnhpVnVIQUxSWWNMNXlCR3NCSG0wOWJXcWtoQ2pHUmFycTBXbksvaXlmcjdKWS9vNzFORzdudCtJRVZMZG5qTExCZWp4S0JHd3ZJN1U4Z3gvdy9SenVDcUhpeTBuVVcybUVPSVpERXpNY2NjZ3BxZ2NFZERsNkp1cW5PRlVySDN3K3pzbFBKc2xHZzVQRG1GNHZTTVlpajVVbzdkUWdGejZUUTJ5UDJFYUROQ3B0TTVKTmR0Z2s2RG96VE9rVWlvWkFUVFVCS200bnFOZVVvN0pZZS9sRW9NellHRTlKSTc1QWRlTGM5VXJubGVvN21VbzlxRDBUQUU0Wm5pQ1dvaDdUMFlaUmY5djg4L2h3QnpReEpkWXk2bE9VbDI1eXBrWkVKaTNOVDRCQ3A1QWc1emJwN2ZaOGtmczJRaHdrN09uQnZEejM3K0xJS1JFQXBzaVp3S1pRY0MweXh6TEJoTFlwYVN3K1RrcEdxVDVGcjVRcUdST2tMN3BPMnFJK2lLbEFwRytreERNM3RWalpDZVg3MVcyMzZKVlVNM1ZDOVdqVndQT2Q0bzFoTEh6T1FFSXF4djJXd3pTalN3VEE1YXFiRFlzKzRaTkNyTFVBbHdFWUlNUlpsd3NWamhwSUZ6TkVUcVlaYWNzMFFlV1NaUGM2bXhsSmhmTDczeUtzc0RTMGpZUW83SU8xM080WnBvQWlaelRiSW5HSXVvdVhGNUZjMFR6VVVNazdDVXNLMm5FK3F6OWIwZFpqZ2MyaTRyTGFzaVA1b2dKeHdkSFVXQkszVGl4QWxzMjdZTmtVaUVZYWJ4eGlFODhMWDcwZFhWaFh2dXVZZUZPWTE0VTRMbmt1RXo3Ulp6QlJaZ2hsQmVhSDBaSGF1U2hIZ05pd3pYRTBPbkVXWVl0bEZuV2R2UmdqanBXWWFBNUhOUlF4dDQzK2xwSEh6MUtOYjB0Q0FTaktNQUczR1dCcDlvMmR6ZXluQ09ZV3BxU25scmdhaFpUeDlwdFRxbzJWd0VoRDVTakxuQW5xRmp4enBPbkRpSnJWdTM0dW1ubjFhVG41dWJVN0tCSkxHc3p1enNOTFp2MzRaRGh3NlJGaVdxUmplMzRQeklFQko2a1Y3Mk1UUThTb3JHZkNQcTZaUUdKUGQwSXA0c1hBdkxSaVFRaHB0elVNbTVPSHQ4QkhscVBxVjBoczBxZ1lIZWloQjFoWE5XQ2dReUV1ZTEyM2V4M2hVaFdvMUVsNFNmRUd4SkZSblZIaEpxOGV0aHVYUVF0L0s1WEdyenBrMDBoa2hHTkF1ejYzM3l5U2R4KysyMzQ2bW5uc0pOTjkyRUF3Y080T1NwSVNUWjF1emF0WXRkY1RNV0Z4ZkpFenZWLytXNU02UmhUZFFnWjFrU1NnaFkzWXFhU2RjVnpKZTQ2bkcwZDNHUkZ1bVByaUJsU3hPQkxkY2l5ekQzdkFxUk1ZTW1seUVZRHVEc21JUGo3QXk2dlNLQ0JLbEMwRlQzRmNBUTQ0eGxZcE8wWHNJN1BhOXVrRmNERkdWY3dteW1HeHdXMjU2ZU5YajAwVWZWNUF1NVBOTHo4OWk1Y3lmaWhON3U3aTZzVGExR2tsU29yYTJ0b1ZpWlVvdm9GVjAzR1hKaGJGeDNGVjVrV3hPeURGelQwNGs1MHJNa3hkbldKTFVXMWpXcXk2cDFXY3d2TXZkc2VDRy9XaTdvaUVoSmx0cG5DSmN3NDlyNDNiNFAwZGdva2p5bmxmVE80djFrNHNKU0pLY2FVdUJsaDU4d3IzdlhPL0hvOTc2UHozN3VjN2gyeXhac1lXaHUyNzZkdENtaUxqWkhJN2R1MjQ3eDhWRk1FRWg2VWowNGN2Z0lrYy9CZTYrL0FWbDZQR0pLaWptNGZ1czdzRWdBT1hXSytjV2FjTlhxTGt6T3pxdDJaZTJhTHF4cVN5cUdVcUpYaHZpYjhYTlQ3QzdDNkY3VmdpWWFrYzdrY2VUc09iem5vNTlHY3NkdStHV2lOdHVvdWtKV0w5U1NYdlVpN3RXYTFsb29yc2c5L2FyMTYvR1AzL2c2U2ErTDkvLzJCNFJRNHVqUU1YSkRSMUdoSjU1NlVuMG5DVDFOMVVzd3FhdUhYbXh0d2FmKzVJK1FaLzNTUlBVaU03RTFGNzN2Mm9VdXFzNWpZMk9zVlduTVpuS1lwVGRHR2ZLTExQS0NmQW15bGU3MlRuTFNEdlF3dEtOTUJUWlRHQ1p6Q2JkMVl1ZnVkNUc2ZVlydTZhYmVRTURsSkxuV3h5MHpyRzZVMXZpOThKZDBobkxiVDMvNlU1VkhJcG9PRGc2cS8rV0U2M2Z2VnBKY2tEcmkxcTNiQ09rKzJya1hJUEUvZk9vb1BaZ2phMktzczl1V2hZa1lIbjZ2OXoyNGJ0c1c1ZW56MDNNNDl0cFpIQnVad0hGNjZ2enNBaFo0Ylp1ZTdlNXNWMDFubWd0d2xvWDlsV01uc2ZQNm0ycjltM1FDYkhFTXZZYU1TOFpkYnRSTFd2VjNXdHI0MkIxL2ZDZEJKQ0VJcUJRb3hyYWdwa3hlV0VzeW1heXVEQzhlaTdNakNFUnhpRFhwenIvOERMWEdncXBuT3pmMGtLbXdFeER2OGRWbVRzYWJZcXhSRmc0eGhITXM1ajVybURpaklycWsxQ3BMOUV5UkpIeE1MV2J4OHJIWE1Ndis3cU9mdkZQSmdRUmJHbTRqd29nUlRua2hHaTUvdjd6MWFYaFUwNGFNejM3K2I3aVo0V3lxRzdlaVdWMTJzbW9VS2J1VmliNS85N2YzWW5wNlZFSCswT2dFMXJPelh0L1ZKck9oSEI1VURhdlAyWVVpNUlTcjJuRDR5QkdjT2p2Ry9FdkRFVHJMU1UvU3E5bGNEaG1XZ2RQak0zaDFaQnkzL2VFbjBkWnpOUTByS1FKdUVqekM4Vml0eDcvUVMvb3lZN0FpUEd2NU4yUVdTOFV6Rm10Ui9VZXEwdGNhWGJtQTB2UDV2V1ViU3FQY3UvZkhMUENFZVN0S2I2YWgyVkg4eXc5K0FvdGhlOU03TmpCekhMajB2bTJJVkZmRWFvTElSMjc5SFR4M1lBQXZEaDdGK2ZGSnZNTEMzOXFTZ09GVDczVEttTW1VOE9HUC95bDIzL0Jlc3BPS2FvU2w5dzZ3WUdzWEdiWDBXZ2NWVWNTVy9RSTFBdzZSZU9pREY3cTcvaHRmNmZtR0NsR2Jrdm5rOUR3ZSs2OG5hR2dFc2NScUxFd3VzS1pSYTJULzlzMy9mQktSUC9zWWJyejJLbnFPN1F6WmlNYkpHeVRRS1M1TysvdmZnODJwTlhqMjRDQk9qbzFqK093WkJPM3F0bGFpSzRVUDN2b2hSa1dCalNydkszeFdCRi9lVXltMC9sSk8xUUdqN295NmtUTEVFZFhQcFRQeCs3Vjl3cDVMMnZ5RjlLVjZBVmNwd0tJRWc2clVGKy81T3ZYRUNmVzVIT201TVRiVVUwci8wRHdiWVRaRlgvaUwyM0dqaURyc3lSeUNUTVV2dzJOZjU3SE9sZVZnYlp4Sno1TjU1RlRPVVJiQVk4ODhqOTViKy9EbEwzOEp4VXlCb3BISm5PWEdKZk5XVGRYWExqRTNmOFZSNytucW5RTEw2VHI5NXAwNzA3eEEvOG9mZTZxVnI3cGN0cGtzZlBXQmIySDR0WE5FU3pteHBENFB4VHQ1TVZNbFAxdHY1TFVRdnZTdjM4VytJeWRJeXJsYnloVU1tMkdscWRBTnpKODQ2VndTVjdPVWJMNXFEWm9UUWJMOHJNcXBIei94Sko3djMxL2QzcXJ0Q2wxaXZWY1lkN2xCRHc3dTNMeHVwTnFKdSs3K0ZTZkNVeDFCZ09IMzJxbnp1T2Z2SDhDcmd5ZVV0enhLREFxcG1Gc0dPNEp3ckkzaEpEY2lWSkN0R3FFbTNQZnQ3K1A3UC9vRkRZb290Y3hTY002dUlpKzlXMGt0bWpDVE1kSXNsNHNpWFlGQlJQem1OLzVKRWZZd2M2M09IOS9ZcUJuc2U5OVRScW8zWmYwaCtkZFhvZ1JYT3hURjVOUXN2dnExZjhZWHYzZy9EaDkraldzcmJRWTNHazFQN1locXFBSlBKRW82WnNjNFdYNm5FUXpvY1R2U2pILzc3NmZ4clVmMlFnc0tseXhSTEtJcUptbzBPd1NIZFhOK1pwNnFNbjlQL2FUQ0tQQkl2Q2RJRXZidTNZc21ocVFzbkFwL1JSdjhaWWRYTzZyalFoVk1Kc2UxVTNzSGpXRHVQM2gwSHpsamI0N3cvSjMvZUF3dnZ2alNDdGVieko4Vk1wcmNna0FpOTNOS2M4Z3RUSERyV1BvbzJkQjNsWURxRm9HMXJWRjgreC91aGxaWVFIb3h6NTZ2d2xZcGg5SHo1NUN0RlBIUzhEUWVmL1psVmRRTml4c2lMSWI5eisxSFIwOFhhVnE1V29ZOGE4azRyWWJxN2xJZU5zQlFpY2YrRTV2Vzl2UXRlWTVqUHIxdzN6TS8yWWUvK3R3WDJBVWNYSWFlZWkzM2Fzb3pNMVZKQjVMQXZKUkd5aFVJSktqN3QxRXlZQm5nZWxWODJUT1EvWEFUNDRzbDNQSFhENUIrNWFseWNjT2prR0VuVHNHSEhGTmFxbG5LRFkzRlF2V2E5OS8vQUFHSWFXSEZsaW5NV25VZmpNQ2xqa3VBakVPdkVTNGVxcjl2QlBZUEh2M095Sm16MlY3T09WV0gzT1dlVXQwdjcxRm40K283aXBtaVp2blVKMlV2MjZIMjRiRjlzWFJYMVNuRFZ5R0NFazk4NXJrRGFHMWZoVlJITStHZUhtRlRLNXRzUDMvNU1HWW81RXJ2Sjd0VEZ1dmo2ZE5uc1BkL25tRy81cEcwYjJHYUJCVE1LNUlzbXlId2F5VkFWeko3UGNCWWxmczNydTIrN3lMalpEUjNyRHZFays0VXIyakw0cm1xRGVvTmI0cm5sTkhxYzAzVkl0bW0wZ2dLSHZVRWtkTXRRMU9NeFJlUVlTdmpzSlM4d0NJdVR6VnN2RHFsWHN2ODdZdS9PbzdKeFdKdDA5RldPMGt1UTlzMDQzajVsZVA0TVp0bnljMnhzUWtXL2hadWxTV1VnRlR0Q0x3Vm5qTWMzUHp3dzk5TVg5SzQ5UFRJUkx3NTFjd1YvSzBsZG1Jb0l4cWNXNlE3Q1ZFeHNCYXVDbDFOVVlDcHY0UVRxb3hRTTFmdFNrVTNGSXBLWWZkcDRNREpNVVVHM3IxN3U5SWpYenA4bk55eW9FUW9qOEJTSXRqb3dtN2NBTGxzSjNMc3lBKytjQVRQUFhzQXI1RFRpbGlVVExhaGpkS0R2elFySWRiM3JWL2J1V0lUOHFMQVRhVjZFMTdBSHVDcXBPcWRyNXErNTZqWUY2OUpXQ3F0a0JPT1VGZXBzTytxS2xEY09iQ3FXOGJadWRlNGNvc0tnVWx5aE4rcjI0a1JDK3dSWTBFRFc5ZTJrMENIOE12RFE4aVVlUTkySElHUWFJT2tlNEYycW14dFNpR1R6bDFxcjlmSSt6SzJiTitBdXo3L0NleCs1dzR1U0dYazZ1NzJkUmZhY3RHZStNaElmNXBJZHpNOWtWN1JZcWg5YUtOMjZMV1duOHB6dWFJV1FPcVdFbFZaN3p5Q1FqamF3ZkJpR1JBKzVlbU52SkNOUnZsM2l0TGRMNCtjd2VoY2prS3ZGQnJxajNydFNRaVcvMlR6YXBZV1d5Mi9wellhdFlhT0VxUkNmWHpvRlA3ODAzdllxdTFQYy9mcFpseGlYTFpCV3IvMXRqNUcwdy9sd3RWazltcGhDWGxrb3FwZHVFVzFsU3NlaTNDRFVLU0RzbDlTOWNud3dpam1KeGkrNStsQlN6MXNJMzJqREpIM0tyeWVMZDRXYlZPdjVtK1pobnNNU2Qxb1FrdmJabm85eUtYS3FjVlJNNjExNEo1cVlnMzFlRWQrY2Z3aitmVHBTKzZKWDVZR3pFK2RHRXAyWExQQTNMdWx6cjZobm1IUVZYOWx5RWFGUFA0VXRGVFhVUDIreHRLSmZJS1hzbmN0ZXdvMkFTV2J5emJFSFhuZVMvS1FHd1lrejJ5ekRHV2Rla2pBOVNzcS9FeUxPaVVSV08yZ2VyVlNzTlJrcXp6bmd0MDlmMzdndTVlejRUZHluTG5Ka3k4a096WXVzTGpmY21GcEVDRFJ5U3BFWExKa1I2ZjJTSVpCNzBtZWVacjBaR1QyUm9CeTNIbHVjWlZVdnRSQlNyYTRSTURWdk9yZXRuUUVhcWZJRUxRVWljT2dvRVQ5a25UTjBKZWVxRmd5enI5Ny9GVC9RNzlwL3E5TDRPWW1UN3pRMHJINWtLbHJ0L0NDUVduajZ6SkFoU1RhWkhQcXFYcFc3Y0VVUTVFdXVyYVpMRnRaOG9pSHFaZlV3MjVxaDVUcW1HN0pQcnFsT25IeGRya3NYTFg2UkpMUGNQZGRlVTZzaGVFWFV2SzZlcUtpK2pnRmliNTJ4L2pwZmQ5OXZibGZFVHVkblJnYWF1M1k5QVBaNnVJTkVzdTl1THpXMVBGSDBUWWZqUTdhWW5pNTNHaTBURWM5a0NQU2pmcUsyMWRDRGhUYjhYeUZwT0pGS1o5bFFVNldGWlBkaEZIVFJmaTdFVzZxM0RBeHZPK0ZLNW4zRlZQdm1ZbWg5T3prOFlkYjJxL1JmTFc5N0t2VnJMT1ZlcVBZMERScU9WSU5YN05LZHowUmswenUwamhxbDBhdkVRT3Z0dkdpVjJtSDBrWExSR0dMKzNleWsxdjFtUGF3NWJoM2pJMzBUMXpwbkRXOGlaSGEwWmN5WGVjUjNyUlhiaXcxVDFQUDYxVU5WZ0N3N01xZVRKaE5YMjdoSEVud0F2WFprZ3BwdzZ0V29nYWRVL1dtQ2lEQ1VseWRjbjdITmYyK2E5NTk3dVQvRCtJTmpqZGxYSDFjL1k3YmVqbXJ1NWlIZmZYSEUrc1RWWWJXUkJ4WENMSG9JdFF0Qy9tVERNOGlDNjg4UkxEU09PVmxRcnl3SDkvdytrbkE3eXVtWi9yeEpzZGJNcTQrTm0yNkplWGJWaCszcXo3QnZObXhYSXNSajNxYW94RFU1Q1pKZnZFc0pmaU1ZaG4xd2l5c3A4cUVSQkhROXBOOVA1U1dqYjYzT040VzQ1YVBGQTFsRXUzZ3JNV3IyMGtDRXBycHB4aG9DVU1rQ2FwZDZma3phYzlaVEd1R09jZ0puQ0ZJTU9RcWo3OGRCaTBmdndZOXpkdWdXamFHSkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCdTJTVVJCVkhnQnRWcDVkRngzZWIxdm0xWExTQnF0SHNtU0xIbEpIQzhoaXhPU1dHWW5DY1FoWVR1bkxENXBvZEJ5RXY5VnV0QTQ1N1FsWFE0NExSUk9Td2tjT0JBb1lGUEtDUWtrdGdtUVFCeGJqcDNZc21WcHRJNldrV2JSN1BPVzN1ODNzcE5BeUViNmt2Rm9adDY4OS91Mis5M3Yva2JENjN3Y09IQW9Fb2F4MnpEMHJWWEQ2OVUwYlp2bWVSSFBSUVRRNEZZcnFHWlM2WlhwMmJpV3k2VXJUblhZODl3amNEQzhaLysrT0Y3SFE4UHJjSWhCSVZPL2s0c2NzbXhucURLM2dHSStqMUJ6QzN6UktHeURSc21KL01mamY2N25RWGNkbEpkVEtNM09vWmhaZ3U0Qmp1WU1lNjc3OVlwYlBmaUovZmZHOFFjZWY1QnhEeDc0NlpCaG1IZnp6eUhYYzJBdkpHRW41cUJYYkY3WlFOVnhvZnQ4OE1XNllOQklUOWVoMFFneHp0TTAvdTNDNEtNWUgwTm1jb2JCczBFSHdlVkoxV3IxWUJuNmZYdS9jTzlodk1iak5SbjM4SUdIdHdIbTU2RnJRMnFoZkc5bGFSNW5mL01FVE52QllFYzNmQzZONDlXZGNBaWg3aGlxbGgrYUdNZHpmVDZMUnZEbXBTSld4cytodXJUQ3FMazB6WWJyT1B4QVE4WHdJYnltR3cyeG5zT2VyZTI1OVlPNzRuaVZ4NnN5N3Y2NzdvbzArQ0ozaHdiVzN4VnM2NEJybXJ5QXBpNnlzRENIekVxYWl5dkRUV2F4cnEwZGxYQVFPUnBScUZheGxFb2ltVnlBTHhEQTJyWTFhTFFaMVZRV2V0VkJsZEdxMGxwYnMxR0Zqa0JzTGVwNGZmanBFTDZXWkhZMTdMdjF0cDMzdkpyMXZtTGpEdHoxYVlLRGNjaXdmTDJXTHdDOU9RSzlyUTBGMWs1bUpZZlV5Z29zdjhXL2x6R1RtSUdma2FwbjFDcU16a0l5aWRGNEhBRit6K0l0TFVQSHBtZ0h0dmFzUTRNdnBOSzBJR0RUM0FpanF4T1dHV1R3TkxHSlpVb244RE9ubUVkeFppcGVUTTN0Mm5Qdkt3T2VWMlRjUTEvNTFtNTdiUFQrb0c1RnFwYUJzNHpDcWFrNENwNE5SOWV3dUx3TW0vWEZOSVhKOHp0WVl5UG56c05nVkRxaXJiQlpqNkZnQ0hhcGdvRzJMbXp2NmNlVHA1OUdRMzBkM256WjFkQWJtK0YydGNHbDhYSVpWK3FPZjdpTWVLVmNRSDVxQm1WRzNaRFBOS1FkM2R1ejU3Ti9kZkRsMW0yODNBbVAvZXl4Ty8zTnpWOXI2bDBYbU1zczRQNkgveGNQSDNzS2M5a1U2aUtOQ0lYRGNMaVFLZzBKaFVLTTBoTEd4K0xJNTFhd1pldFc2THFCcWVrWkZFcGxwTElaTEtmU3NGMFhiNzdpalpndkZPSHI3VWIzOXEzUVFnSFdJc0hINzJQa0xQaHBZSm5meTU4Zmc1SEx3MkFrSmNLR1lRUTB3L2pBKzIvNVVPWjdEeDk0QXE4MWNzZWZPSHFuNStyN0xkT0g1ZVFpL3U0ZjdzSFpTYVpYMEkvdGwxMUdMN3RJTGkxamJtNGVBWCtBcWFSamtTblkxQlJCcExHdWRuVlhWKzlYQ0RRclRGMkRvS0x6WVRIWkJnWUdFWW0yNEpNZit6ak1nQjhPMDlCZmNwQWpjdVltWjRGU2lVbXBzUlpkbEd3Ylpic0tyNjRSdnE1MitPb2FZT3ZhM2h0dnZuYi9xemJ1MS92K1pYZHdYZjhCLzdwMThQd212dkNsKy9DelJ3K2hxYVVaOVhWaGhKbFNJMmZQSXA4djhHeGRRYmdzM0dCcWhobkJVSDBZNVhJRnR1MnEyelEwTktyWHVWeU9rU1lxMGpHbVljQ3lmUGpvUi9mZzlwdmVCWStvV1J5ZmdjdHJTcHBMUzVCbmNZeERoM3B0VFFnMFJWR1J0SFhaTGxqdi9Qald0OTk0OVl1bTZJdW01ZkhQZnI3WForb1Arb3FsZ0xHNGhPWEZPWHp4Z1c4UnlnMzByRm1EbnA1dVRJekhrVnhlNGtMWmtKa3lFbzA2R3JXMmV3MzhoUHBpdmxocnpFUUZrM1VxS1ZzdWwxRW9GUGdkQndhUlZscUk0OW9ZR1RrTGZUbUxqY0VtV1B4TU55d2E3cU9qRExnMHlyY3VCdjlBTC95TkpEbVdxZEtXeVlDQS9GTW92dU9XalZkOTV6dUhmNXorYlR2TUZ6T095WDhvWk9rUnd5QVVrMTBrenA1RHNaUWpHdm94bDV6RDVNd0VUQnBWejlkczR1aHFhOFd1YTY3R2hyNWVXUFRvRWdGbUlqR0w4ZGxGekdmU3lCRkliTkl1bjg5QW1BaTZRblIxbUdaU2ozSlUrZG0zZi9ZVFZISUYvTkhRVFh6ZllaOHpFT2lNd3Q4azZTZE9ZSHBLZGtnZjlJaTQyUko3WkJ6bHhXUWs0Tk1QSGRqMytlMjM3dHViZmtualJrNk0zRzJzclBScVpCdkdjb2ExNFNIQVl2ZFl6RVV1TWhCMHNJNlJ1NFNQMXBZVzlLN3RaZTMwbzZXdEdaNWJoWlBOd3Nua2NmWlpBMnVaaWs5UHhIRnNiQUx4K1hrVkRUSElaTlNxVlVsTld3QkNlQW0vYStPQlh4eENxSzRPdDcvdmZRaEY2OW40TFVnaEd2eGNrelNtWFNnVFFlTUpGT2VUOEJGTmRWNnpxdG05cGhrVXByVDM5NmJsNmVPbmV3MmZjVkNqZDgzMmRoak56ZXFpQnIxODdPd0lFdWtVS3BVeWJyN3hiZml6T3orSlN5L2RpSzd1ZG9RYkc0a0U3RTFjcU83UXpheXR1bUNZYWVxRHg2ak1FQ0ZYU2xYa0NSQlNROUwyeFNqcFpZNWlKSVl5MmlJb25ZeVA0NHBkTjZDbG8wM1ZyOG5VMCtTWmFLeE5KMUVkbllXZUxhald6aFBVdWdWRjNhQnZ4OGMvOVpjLy9PcTMvblB1Z2ozNjg0MnI4NXYzbTVMVDlKaG02WEJid3JDM0RxQnQ2RHBjdjJzbkY2RGhMVzk1Q3o3MjU1K0NGd2pEcTYrSEhtRWQxRGRDQ3pmQXMwSjgrS0FGQTJ3VFRRU2VSbFZuclkxTmlQQzFvWnNxQThTZ1NxV2krcG11S0ptbTZGaWh5RlJqVFg3aGkvK3VhSmg4cGt2TlRpL0JmWG9jeHZ3eWZBSkNyR2svMjRhZnRlZldCVkYzMlFZMFhYVUZyS2E2enovZm5vdkduZnZTTjRiY295ZUhBak1McW00TUlUNWFEY2FkaGhEYWV2dWxSK09QLytRTzNvNkd5eG02bjFmdzhTRm82YWpVOGt3aUppTlFvVkhTRm15bWxhQm5rUFVwQ3hMd2tZZ3gwVkFsa3RxOGwwTWo1VkcxeXpXQUdSM0IwVjg5RG8wMTY1NGFoemEzeEQ1SDYrbHdrOWZYV2J0ZW5SL1dobTVFcnRvQ2l3VEFJRHZ5bWNiUWs0K2RIdm9kNHdLR2ZxZkJSdXVPVGtCL2FnUm1namt0L0UvK280SDliQW50N1cwWUhCZ0ExTkpxWHhmajFVRERkTlVZRFowcDdMSTJjK2swWm1abkVBb0lCV05FcEJiNW1YeFBVK2lxcWNsQUdzV0ZhTXF6WWwxTTNZZStmeERHWEpvQXdqVXcvVXcrTkVsRDhsVmpmVGVDVjZ5SEdZdENaNXNTT3NjeUppcHJDTUs1K3dYR2pYLzd3Vjc2ZTdjMFZsTVNvWmlEZm5ZTTFXT25ZTkpyT20rdzhaSk51T09PTzRUK3FFTmd2R1loejJjOWVOVXlQRFpabHhGenlpVVUrWWdRdW50aWF4QmovYmgyUmFXb05INTVDSmFybEJRRCtkcXJzUS8xMnViZko4Yk9Jc2RyaW5QRllpMU1QdHZiQWQvV2ZtaWRUZENZbXFiVXFXUUtqUXBJK2s0bVVIN3kyTkR4ZmZkSExocm4zNzUrdDNIbFZsU2pSRHplUUdZc1diNHZWd0ZPVFFDUG42RVhsM0hiTGJ1aGl1UGlMTUJGVllyUThobG9oYkl5VXBwMmlVMWFYMDNEQ2dsdlYzTURydCsybVdTYTZXU29iNmswMUZiN1l5MWl6LzB0UjVGSU9EVTlpekpUMGV0dmgzYnBXbWhkNUtDbXBzcEQzWjdSOGhPUHpQRUZWSC85RERTeUdoL0x3L1ZYN3JyWUNoeS8rUkdQY0c4Mlh3SWtVM0FtNW9GTURpYnJRUmMyVU1nQlp3cnc2RDJ2bzVFTHFDcjBjbGxUS2RLeFIzLzVCTVlUQzFqTzVyQzB0RVN3ckxLZkJSRGpnRG9ZNjBRSEovSTM5UFlobHkvaHA4TW51SEJYcGJMcmFyVWFsQlN0NVlJeWtFaURDaWxYTXF4aDAyVzlFQUNXTHFEVlRsR3Bpekt6aFVCVElVWm96QktmakVYc3VhYTBEdzg3bFhHSjArTzk1QXZiZERaR1Y3NUZpcU0xMVVOYnpLSThsWUNWeXFtT0lVekRjMHJJeHhlaDVaYTUrRENLUzJsOC85c1A0Tm1wV1N5c0ZKRWd0ZEo0blFCbnRySW50SWxwUWxiZlFhN1pTdHEya3dTNXhNOGZPWDZDOVZmbHVZNnFPMDgxY3hyc1hxaGswaTZhbjZCVVVkVnFPVkpEVkU4Tnc5N3NFcW9zRnpOUFlrQUs1cktWZUpLOWRKSWRzbURFNm9lT0h6OGVNZDNqcDdmNWVqc1prVllpbmFHSXJrdUlkYnBhWU5KUWovRHJUaVRna2VWLzlWOC9oL2owSlBxYkdyRno1dzFZdjJzWE52VDJJazd2WlFuaExxTVo2K2hDWTMxSWtXbFpWVE1iZVgyb2ptMG16S0hWUVQvNzUxTnNGVXZaQ2hGUVYzdzAxa0tpemZQT3p5Mml3S2hMaXhCRGk4V2ltamdrWllXWm1QTUVwU25LR0V4WlMrcDBOZG9TRTQwUmMzdmFPZWkyZ2xlV090NXRHcG1sSWUvcEZPenhCdWlEM2REYVd4VVdTZ280a2lLa1FGb0hvOG1hYTNvbWd2LzU1YTl4K09ScDVPcWJNZkNlMjNINXppR2NKdjhzVkVxNDVZMDNvSC85SUNuYUF2SmNUSGVzQjIyczR3SWptbWRrUzJ6dUFaOUpROEpJNTFZVWQyeUxOS0NudllPQ2tZY3RhN3Z4eTlPanFubXpyMkI2WWhLSjg1T29MMWJoVCtVUktMdXEvNm9SbHVmb0RKZmo0M05YSy94ZEpOU0dWbk1HMncvcmJadkpTRzhWUnE5ekhOR09ud1phU0pQV2RzR05SbmdCbzRhTGNpOSsrZXAzNzhiano0eGdvTFVKMTkxOEkvU3lqVkJYRis3WSswbWtxV0xWKzRMTStTQzZDYzBPdlF0cDFwa01xa1RKK1dYeXpQUXlza1RpSmpLZ0JNSEdsTkdIYUxkU3lHUEw0QVlzTGlaVlA2dGhpb2ZUcDA3Z3Y1Z3BIVllZRzNpZm5wWU90SkFNQ1BzaFF3QjYybURTOFE0ZFZ2RTBCWGJpRjBsQS90K3JUWDNyUjhmTmRIYWJ0R1hYa09aTjNzZkZlVXdWcTY4YkxnZFNWeFU4YTRFb1dKbzVEem9Mb2Y1Qk9Jd1daeDRTYmFZQmExQmpQWkFWSy83bjBmQXlaOENWVkFyVFhQUTRWYkdKeFVVc0VLZ1dDVkR6L0t5N3RaTkJZQ09uSTNyYk94RmthajF3NU9jS0dJUlBEclpIMGNBRzVvaTEvTCtkcWIxcDdRQzJYSHNET3JaZWdrQzBvU1pIVkdYOElicXo1eGxjZzB0T1hKMUl4RTE5eCtaZWR6RUQrK3dFREhyWk5RampBaTRrenU0QzZ5M0tNV1JkTHp5eWM0ZEcxNjBicEZ2TVdxR1hxRnE1Yk54VWdZU1ZDRHVCVURmcDZha1ZGR2o0SklXakJHODJ4UWw5SnJWTTR6S29jQ0U5ck0zTmZRTVlJN0cybVNGeWJudDNqMm9UT28wSjhscCtBa1dSVGxJNkp3Zm1Bcm51WW1jbnp0QjVDeVBqaU14RjBOSFpTdHBXaEVoSnJhSzJUUzhRM1RtNU8xN0V0RFdPTmt3elF3UWZHbFBoR0dIbGlweXIySXVZSXVaaUNpNVIwV21Md0NSTE1WcnJpWncwekJZQUlhdG54THo1SmZZNFNVTzVPcGRYTEZNdktYSEJCV1E1eGlTelltUVNjMVRITXV4N05yL1hWZCtFK2RscEZGZXk2R3FKNHZMQlRSaWRueVY2S3RtVzQxU1FTTXNwZzA1c1d4TkRFNDJ5L0NIa3k0eDhjZ2FwOUFMcXlHZm5PVm81eVhuNDJaYTBqaGpCckU0UmVFMDNJMnBpbEhTVjV1aXRvVUpNSTl5WmVWUUo3enI3a2laTmdDZm9TV29mNlpNd3I2ZGtTYUNlZi9wcEJsQ01yQ0I3Ymh4OTczd3JDWE5ZVGVRQzhWV21iRlVFSGtZcHlmNlhMb3FoZWRaWFRqR0xiSDRGTFlFb1ByejdWc1RJWkE0ZEc4YjNIenVDQzZPS1ArQlRpbldrZzBheGpqWGRValZGdVJjNTFxMmYyWk9NbjBkbWFrcU5QcTNoZWpSUmNRdjVPTndHTEdZRDJaYkZmcUcxdHlqbUlNaGhrOVpvZld0Z3J1bUFQVUZQaXBaUlppUUZtYmh3RVd4K2RmZ24rTjVQSHNIWVFocEJGdk5WNUp1ZitlQjdWYU9WdlFCRDBzalFsZHBzVUJzUkpTUkhZM1hUVUJPSGNOVWxwdWNnVWRManRULzNuUWR4NU5TSTZubmk2WTd1THNUVzlzQWdRSG1HY0ZCSFNYd1NVK0c3dWNRa3hpa2VhZVRDOGhYdVN5Qm5GMUY1NWpqbnpUQzYxcmZCVDFKdDJvOGZTeVBhR1BGZnNwNnAxM1NSU1FzQ2VSdDZpSnp0cU5MQTh0Z01Bc0w2T1J4dXVmVTIvUE1QZmdTdG9ZN2NNWWJyMy9GMlZKaTZKZVorZ0dOTmxTcFhtVGZPTWpXbjV1WndmbktDdE14V2ZjdGpKRXRPRlkxMUFVNEJGVHgyNmpoR1ptWVZoRXYvNmVqb1FIZDNON1BDZ3FVbUNFTzFESVBBc3pReGhoVU92VmJWVmdCWEkrMjE1aTZUK2dLTlBFYTBDM0RHak5hSDA0U2lTdHBMTGtSS2oyZWdzOGRaRy9zQk1oUlhNMVdUZFlOazRSdjZZYkVIMmVlblVDREtQWExrR0JhcEZxL3JJZENRSVR4MDVCRk1UMCtnSWhvbWMvOWQxKzFnMmxpWUpUcE9FU2xsU00wSVdLRkdrbTAxSFhpb28wSW0wNER0S0hLRjFsYjJ6b0YxcTlHbFFZeTB4czh5Uk5wME1nR05KTUJrWkcyanR1ZEFOaTVoUXdOckxiWitBMEtSWnE1Qng1UEhUbURicFp2anBxUGJ3NXJteVNyaExjNFM1UllBTW5sQlNKUERxS09ycThEaFZLMXY2VWY4a1RFY2UrSUpiR1l0dEpGNVBNdEdXK1VDamo1ekZrVkd4S1ZESnFZbThlNGJkbUlzTVk5empFcWU2R1Y3TlpadVNlODBQVFFTaUN4bWgwWVFLbkpjNnVKTXRxNS9yUnF1cGRjWjVLOXBNcCtWcFNUOVgrSHlYTlVYWGEvbUlHbG9qWjN0NkZxM0h1R21Gb1dtcmhxZ0hPU3JCUXlmT1prMnJXdnlFMUlmaXNKb3RXa0FIaEd5ZUliazFhanhUWkVGTkJsTVRUdzcrbk1LckNYME5VY1JhKzNGbXkrL0ZrOE5IOFY4bFNTQXJML0VHNWZvMFNmT25FSXFYeWJOeWxCN0thbTAwNWxxT2owZEpNdUlVQjdVYW5ERndwZDBGTVZzV2trSElsV1VLZGdLcTJkclk4UFdsTXhIY3N1TWdOcFFpUkFuZkhSNHlXWEtaK2JZdUMwMXo0bENaeEZzc292MkNkTU5yUXdMV1pFdjBJM0tJNkpwcUh6bXhUVDJNWVZSR2tWWE5HTEh0UnZ3N0pOVCtNUUg3a0NTUmMzMVlzc2x1NUZndWhiWTk1NmRuTUlvWVQvRHZsV2tidUxqelJ5ZVZCZWttc1dHckdZMjFraTlESjI4cGV6anhUcnIyWWp6aWl3TEtzazVabGhrQmxlR2J6cUUzNU9KbndaYVFyc3NZU1JzMUVYdVQvQ2F0dEkvdWF0azEyVEdNczh4ZFBjd0JTWGZRYjU5ditMZHE0Tm83Y210R1VVYTZua2swdFphUXV4bXRNYjh1UDZHTW1IYWo0WEpMTnlzaTNidXp2UnVHbURhVUpCdGJjUHk0MGR4Zm5aS09TakU1bTR4SVFSQVJJVXVVeWNSeVNGRVdjQlZXa29WUWU0ak9Od2RFcU1GSEdRUzE0d2FCZk1VWUxneUJTbS9lOHdlVzgyQ2FveFZKTnRRYzBSdHdyOWdoRzdwdzJiZjluM3BxZU4vYzlqejdLRWF4NnJwRzBvQVVDTkpETDdnRmtMNmdFckxZTVJGMzRaTG9WT1lhYUZnR28yMUlVeHkzTXpOanp4Qkp0d2c2ZWtqSzBtcERGZXFzZ2lvbHFGYVJGMG9xSXdUY2l4ellaYXBTNGJLOFloYUpDTVNaT3ZRV1I3RkVrVWhJUkpTS1laRXhGUGFqU3pSdXpDc2V1b2pwZWpvZ2czZXFwSFFodSs5OThHNEdsWnQxejdDRDJ2RzBVV2FVcWs0MXZ1dWhFbkRCSkU4anpmMUhGVXpUZTFkMUVVeWFHcHVWY0tNUE02UGpwRktUZUZYVHczak4yZEd1T2lpS3Z3Z0M3MjVQa0NEZkdvL1FSQlFVa2RGeUsxdElWdFUwazZlT1U4SCtOSFdGc1g2L241MGRzWXdPallzVUthY0l0ZlNWemN2bGZOWDV6elZCbVRkd3BhWXZqcjdJb1hrcjErY3hLRUg5cnR1L203ZHM1WGRudFlPZitnNlZuT25HaDFsdE5Db0FzdEFLQmViR0IrRHN6eVBtWmxFYmErYk5UWEZPbnZzK05PWW84UXVld0tDYXVMSElFbDFNL3Roa0FPc3lPd0Mrd0w4WW1RcVZ5Sm8wZStzbGFwd1NEYm9DdG5HU2ltUDFyWWVyQi9jampQbmppbzFRRk5SRWJWTUpvbWFWbm14aHRpT05NTlVuMHRmcEtKMjhLSnhrcHFqeC9ZZXBpdUhvQThnVU1jZytzaTRQV00xajcxVk9hNlcxeTZqY1BEUncyUUpjL1I2U0VIOUNoRnhnWXFYVUNSUmxOVkV6aHRHT042RXlSUDlUTlVMVzh6aStSbWV1MXdvRWNhYnFZeVZGR3NwVXk1WXBoVGYxZDJKQWgzVTB0U0Z2cjV0bUp4NFdzMTdIcU1qaTY4aHI2R0FodVYwTVlxcW5ibjZEL2YvMjBQeDV5SW43enZlUGE0MU1CUnNlQ3RISEthUGQwR01mczZ3QzhmR1N6WWoydFdORTVRQmMra1Y1TWs4bE16bjFWaURwTGEwc3pyeXcxYXEwWUtNY3ZjU0Y1Zm11U3RGUnBicFhjZEIxZUY3d2xRYUd1czVMV2xLMGZaeDBSM1JOdlIyOTNLd0piOXNpT0E4VTdSYXpLcnhTT0JlSkFXWDJXU3NpbFdxRC9KN1ZLd3VibW05WUF0cmJ1ek1JZGNJRDhubWh3Uk10RVZOZnc2QkxoNnI3T0RoQjMrTUh4NzhFWmE1UjFkaTVFSitNYVllSjg2T3FvM0VuczRPdERJeUJzRWtTOTF5bGxIUlNHekQzQThRblVXY0pzK3pDd3RZb1Bidk9WS0xGYnp2dHZmZ3ZiZmRyZ2oyeUpsek9EMHlRbUFwNEJ4VE5KdFBNRE1zeFdLa1pWakNWNlUzNnFxRkhMN3ZTNC9zdXJETUYrd1YzSFhYcDArUXhQMnB0cW9LcTRldTQzY09zWlh2OXc5dXhJNDNiS0ttc1lJUHZmZFduRGw5Qm8waEVsZHVrSWhqUkVUS3NCbFBKNWV4ekFsREpQWUd5dS9pYVVsZFM2US9zbzhsN2lXSWxtbUo0VVRUdi83MFg2Q1JvbEtSMzExTXpDdm50alMzVTVKdlVXbVo0VVF2NlhoQjk1VDFDUHBXTlcvWDBhUHhpenM5TDFoNXJDODJ6UFB1VStmTEovckxiWm03bUJrZjVVWmtJNEhEaDF0dWZqdVNuTmVtVW1RbDVJR3ozS3FhcDFaaWNjR05uQmVsSndsNWxyMDVrZitLN0hsTGpMcWtncExKaWV1WGI5K0dDSjNqY3FKT2tuVG5DeW51N2Ztd2FjTjZYUEdHYTZpZDdzR09LOS9FWmkvWHFOUUFTcVJBRi9kOCtjdUg0ODlmM2UrRXBXeTcrM2l6dVBxZGlQYlN4b2tnZStUSVk3anB0ZytvVGYxbVJ1WHR1NjdGSlpzM3NBK0dGRVRMenFuc3BNcW1vN2NLNlhteUVua3RVWlAwa2tlUUJGMTY2enR2ZkljcUJRR3BQTThSVVVrNHBUaTdnMXd5eGozMGQrLytNTFp1dVY3QWd6WG95czVSL0QrK2NuamZiNi92ZDR6cjYrdExleFZuRjlNcS9WS0dTYzljbkI1bHNkZkR4NG5ZRjZoRExwTlNFbDJRa0IrbEpCRG1ndlZWYm5waEdoRERaSWhWKzMyTW9qaXdnVFVvQnF6aHVQT0d5eTlIaGVtNE5EOUh3WWdETXlOcXNqLzZ1WmtTSUIrMUFxYmFMOXl3Y1l1cWZlN3Nwc3NyenE0WFhlT0x2ZG5aMXhjbmt1L0JTMFVOVlp4OTVoUjJYSFd0Mmo4SWN3TmVoQnhaZUZSQVJOZVZuR0F6YXJKSElNWUk2TWdoRVZOOFk3V2VCUUVEWkMxYnQyMVRyMlcvTzV0ZHVhaGJOdEpoZmlFTHhuTVUwZThMWS9UTUlpemIyUFBBd1NmaXI5ZzRPZHJiMXh6VWJXZnZpeHNHR25ZU0R6MzZHQWEyWDZWKzVST2s5MjNXV1h4bUdpV2J5RW52U20rUTM1T0ljUkkxZVRpcisyN3l2bW41bEJNYXFXTkdDU0EzM1hTamFnMGxScTdFWWJkSURTVVFFTGxRWDFWZU5kVjd4VkdOamMxWVRwWDNmdlBnNDcvMzl5Z21YdUpvNllydFg1eWJGV0I1d2FhZW9KTnNJYi83MXR0SnZZSXFZc0dtS0RvNWxSOC9keGFKcFJSU21aTGlobEx3RjNaeUxteDBpTEYxZElhazc3b1k5OWlhNjNIYmU5K1BGcXJSbWVVMFVtUTV5NmtsaFlqaVNyOWZkQkcvMGpPRlZNdDEycUt0ZStPSnhQNlhXdjlMR2lkSGEwZlgvdVQ4VEp4Ni92Mjh1dG9hRXZheDVZcHI2T1V5YWovRW9MV01RaHNYR3V1S0ljVWRuM0l5aDVWOHJpWStrUjZKUUd1dTdvcktGQ0EvYnR2WVA4QXQ2QnZSdjNHd05zWlFOWlBGcDBpNlpTOGh5S2paM0pDTWNsL1FNR3UvQVNQWXBFazQ5Z3h1M2Z5eXZ5RFM4UXFPS0ZQVXRyM3RkRnk4OWs2TlJCazA2TUlyZ1RNL2dhV1JTbGFCdENwTGNWYU1FaVA4Yk5TQ2huNzJNWm0vUkkzdWFJM2lzdlVENUpBdHlMRmxsQ2duVm9tTVJVcnZZVkk2UDBGRVdzMDY2cVMrb0Y4aEtCTWc3dXJ1OWpVOWZTOXJtQnd2RzdrTFIyZG5aNXhQZll2emlYMmNydTRXejRxQUk3S0NMcjhwa2ZHZnZvcTJ0TlZtTVBFY0dZWXdmMkVoa2xxVmNrVU5sVzNjMm1ybFJISG95S1A0cC92MlkvdVZPM0ROam1zdzJOOUhZYWttSW9seDlRMUJOdTZvb25WTXlmdnlSV2Vmb1BrclhmTnIrcjFsSXBIby9jZlBmUHIrTjExMzlkQXlOeWR1WnUwSitqbVU5YzZmT29rRFAvNFJ4aVpua001a0ZZZ0lUUkpna0JqSDJLdWFHNXZJL2wwY09QQUR4VXpLZG0xL29DZldnWGUrODIxWXU2YUxqS1FGRzladlFuMVQ1TEJ1V0h0amZYM0RlSlhISzQ3Yzg0L1ZLTzVxajlRUFpYWC9uVGZCMnkzdkc2eWJydTRZaHE1bWU3Qi9nWE95VDI2R1ZhK1RXVTZvVllqYlYrc3BvMy9qdS84TjJWb1E3Y05UdjBSeE1FMlY2MnZmK0NhdXV2Skt2R1huRFljNzI3cnV1ZlRLcXc3ak5SNnZ5MitjSlpLbVJnTTFmSVFnc3kyZlNXUHFmQnhQblJ4V01rS2VsRXhORGRJZGFmQ0dnY3Z3dDUvOWUvVURBR0h6Tm8xZkU2bWpDbFk5bkM5VmorUktwZjNwZFBvVnB4LytQNDE3L3BGSWpQZFMxOWxXclRoRGhWUjJxMmZia2NUOFF1LzA5R1JrY1hHTytuNFFvNVB6Nlc5Kzl6dHBHamJNdEp5Z3RqOGNLSlVPeGw4SGc1NS8vQitNbUhZZGVuZnk1UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgSW9Jb3NBcnJvd1JvdW5kQmFjaywgSW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uR3JvdXAoeyBuZXh0LCBwcmV2aW91cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGgxPkJ1dHRvbkdyb3VwPC9oMT5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBidXR0b25Hcm91cDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWI6IC00LFxuICAgIGJ1dHRvbjoge1xuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3JkZXI6ICcwcHggc29saWQnLFxuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBweDogJzJweCcsXG4gICAgICBjb2xvcjogJyNCQkM3RDcnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd2VyICh7IFxuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBjbG9zZUJ1dHRvbixcbiAgY2xvc2VCdXR0b25TdHlsZSxcbiAgZHJhd2VySGFuZGxlcixcbiAgdG9nZ2xlSGFuZGxlcixcbiAgb3BlbixcbiAgd2lkdGgsXG4gIHBsYWNlbWVudCxcbiAgZHJhd2VyU3R5bGUsXG4gIGNsb3NlQnRuU3R5bGUsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFJjRHJhd2VyIFxuICAgICAgb3Blbj17b3Blbn0gXG4gICAgICBvbkNsb3NlPXt0b2dnbGVIYW5kbGVyfSBcbiAgICAgIGNsYXNzTmFtZT17J2RyYXdlciAke2NsYXNzTmFtZX0gfHwgXCIgXCJ9ICcudHJpbSgpfSBcbiAgICAgIHdpZHRoPXt3aWR0aH0gXG4gICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH0gXG4gICAgICBoYW5kbGVyPXtmYWxzZX0gXG4gICAgICBsZXZlbD17bnVsbH0gXG4gICAgICBkdXJhdGlvbj17JzAuNHMnfSBcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2Nsb3NlQnV0dG9uICYmKFxuICAgICAgICAgIDxCb3ggYXM9XCJkaXZcIiBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfSBzeD17Y2xvc2VCdG5TdHlsZX0+XG4gICAgICAgICAgICB7Y2xvc2VCdXR0b259XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIDxCb3ggc3g9e2RyYXdlclN0eWxlfT57Y2hpbGRyZW59XG4gICAgICAgIDwvQm94PlxuICAgICAgICBcbiAgICAgIDwvUmNEcmF3ZXI+XG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jayd9fSBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfT5cbiAgICAgICAgICB7ZHJhd2VySGFuZGxlcn1cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiAnMzIwcHgnLFxuICBwbGFjZW1lbnQ6ICdsZWZ0Jyxcbn07IiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEltYWdlLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkQ29sdW1uKHtcbiAgc3JjLFxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxuICB0aXRsZSxcbiAgdGV4dCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdFRleHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMuaW1nfT5cbiAgICAgIDwvSW1hZ2U+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e3RpdGxlfVxuXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXSxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtYjogLTEsXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0J10sXG4gICAgcHg6IFs0LCBudWxsLCAwXSxcbiAgfSxcbiAgaW1nOiB7XG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxuICAgIG1sOiBbJ2F1dG8nLCBudWxsLCAnLTEzcHgnXSxcbiAgICBtYjogLTIsXG4gICAgd2lkdGg6IFsnODBweCcsIG51bGwsIG51bGwsICc5MHB4JywgbnVsbCwgJ2F1dG8nXSxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFsyLCBudWxsLCAzXSxcbiAgICB9LFxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjknLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEltYWdlLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkKHtcbiAgc3JjLFxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxuICB0aXRsZSxcbiAgdGV4dCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdFRleHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMuaW1nfT5cbiAgICAgIDwvSW1hZ2U+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBtYjogLTEsXG4gIH0sXG5cbiAgaW1nOiB7XG4gICAgd2lkdGg6IFsnNzBweCcsIG51bGwsIG51bGwsICc4MHB4JywgJzkwcHgnLCAnYXV0byddLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbXI6IFsyLCAzLCBudWxsLCBudWxsLCA0LCA1XSxcbiAgICBtbDogLTIsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzIsIDNdLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWycxMHB4JywgbnVsbCwgJzE1cHgnXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjknLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBJbWFnZSwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJCb3R0b21BcmVhfT5cbiAgICAgICAgICA8aDU+QW1hbmRhIFdpbHNvbiBBcnQgR2FsbGVyeSAyMDIxPC9oNT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3Rlcjoge1xuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJUb3BDb2xvcjogJ2JvcmRlcl9jb2xvcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxuICAgICAgcGI6IFsnNDBweCcsIG51bGwsICcxMDBweCddLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgbWVudXM6IHtcbiAgICAgIG10OiBbMywgNF0sXG4gICAgICBtYjogMixcbiAgICAgIG5hdjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBsaW5rOiB7XG4gICAgICBmb250U2l6ZTogWzEsICcxNXB4J10sXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXG4gICAgICBtYjogMixcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXG4gICAgICBweDogWzIsIG51bGwsIDRdLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBwYXRoOiAnaG9tZScsXG4gICAgbGFiZWw6ICdIb21lJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdmZWF0dXJlJyxcbiAgICBsYWJlbDogJ0ZlYXR1cmVzJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcmljaW5nJyxcbiAgICBsYWJlbDogJ1ByaWNpbmcnLFxuICB9LFxuICAvL3tcbiAgICAvL3BhdGg6ICd0ZXN0aW1vbmlhbCcsXG4gICAgLy9sYWJlbDogJ1Rlc3RpbW9uaWFsJyxcbiAgLy99LFxuXTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL21vYmlsZS1kcmF3ZXInO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICAvL1xuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8TG9nbz5cbiAgICAgICAgICA8aDE+IEFtYW5kYSBXaWxzb248L2gxPlxuICAgICAgICA8L0xvZ28+XG4gICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICB0bz17bWVudUl0ZW0ucGF0aH1cbiAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgIGtleT17aX0+XG4gICAgICAgICAgICAgIHttZW51SXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIj5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNb2JpbGVEcmF3ZXI+PC9Nb2JpbGVEcmF3ZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmNvbnN0IHBvc2l0aW9uQW5pbSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgfVxuYDtcbi8vc3R5bGVzIHRoYXQgYXJlIGNhbGxlZCBpbiBoZWFkZXIgZnVuY3Rpb24gYWJvdmVcbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgcHk6IDQsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxuICAgICcuZG9uYXRlX19idG4nOiB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxuICAgICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gICAgJyYuc3RpY2t5Jzoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICBweTogMyxcbiAgICAgICduZXYgPiBhJzoge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgbmF2OiB7XG4gICAgbXg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IDIsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBweDogNSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbGluZUhlaWdodDogJzEuMicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMTVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL2RyYXdlcic7XG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFUd2l0dGVyLCBGYUdpdGh1YkFsdCwgRmFEcmliYmJsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5cbmNvbnN0IHNvY2lhbCA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhRHJpYmJibGUgLz4sXG4gIH0sXG5dO1xuLy90b2dnbGluZyB0aGUgc2lkZSBkcmF3ZXIgYW5kIGNsb3NpbmcgZmVhdHVyZSBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZURyYXdlcigpIHtcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgIDxEcmF3ZXIgd2lkdGg9XCIzMjBweFwiIGRyYXdlckhhbmRsZXI9e1xuICAgICA8Qm94IHN4PXtzdHlsZXMuaGFuZGxlcn0+XG4gICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cbiAgICAgPC9Cb3g+XG4gICB9XG4gICAvL3Byb3BzIHRvIHBhc3MgaW50byBkcmF3ZXJzXG4gICBvcGVuPXtpc0RyYXdlck9wZW59XG4gICB0b2dnbGVIYW5kbGVyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSl9XG4gICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwMFwiLz59XG4gICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cbiAgIGNsb3NlQnRuU3R5bGU9e3N0eWxlcy5jbG9zZX1cblxuICAgLy9uZXh0IHNob3dpbmcgY29udGVudCBpbiBkcmF3ZXJcbiAgID5cbiAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxuICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnV9PlxuICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICB0bz17bWVudUl0ZW0ucGF0aH1cbiAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgIGtleT17aX0+XG4gICAgICAgICAgICAgIHttZW51SXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgPC9Cb3g+XG4gICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxuICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XG4gICAgICAgICAgIHtzb2NpYWwubWFwKChzb2NpYWxJdGVtLCBpKT0+KFxuICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxuICAgICAgICAgICAgICA8TGluayB0bz17c29jaWFsSXRlbS5wYXRofT57c29jaWFsSXRlbS5pY29ufVxuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICkpfVxuXG4gICAgICAgICA8L0JveD5cblxuICAgICAgIDwvQm94PlxuICAgICA8L0JveD5cbiAgIDwvU2Nyb2xsYmFycz5cbiAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoYW5kbGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgd2lkdGg6ICcyNnB4JyxcblxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrJyxcbiAgfSxcblxuICBjbG9zZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMjVweCcsXG4gICAgcmlnaHQ6ICczMHB4JyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcblxuICBjb250ZW50OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcHQ6ICcxMDBweCcsXG4gICAgcGI6ICc0MHB4JyxcbiAgICBweDogJzMwcHgnLFxuICB9LFxuXG4gIG1lbnU6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxuICAgICAgcHk6ICcxNXB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1lbnVGb290ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJ2F1dG8nLFxuICB9LFxuXG4gIHNvY2lhbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblxuICAgIGljb246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtcjogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmdzogJzcwMCcsXG4gICAgaGVpZ2h0OiAnNDVweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHk6ICcwJyxcbiAgfSxcbn07IiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0SXNTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKHN0YXR1cykgPT4ge1xuICAgIGlmIChzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX0ZJWEVEKSB7XG4gICAgICBzZXRJc1N0aWNreSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfT1JJR0lOQUwpIHtcbiAgICAgIHNldElzU3RpY2t5KGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTdGlja3kgaW5uZXJaPXsxMDAxfSB0b3A9ezB9IG9uU3RhdGVDaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfT5cbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e2Ake2lzU3RpY2t5ID8gJ3N0aWNreScgOiAndW5TdGlja3knfWB9IC8+XG4gICAgICA8L1N0aWNreT5cbiAgICAgIDxtYWluIGlkPVwiY29udGVudFwiIHN4PXt7IHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsIH19ID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgTmF2TGluayBhcyBNZW51TGluaywgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aDE+TmF2TGluazwvaDE+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QSB7Li4ucmVzdH0gaHJlZj17cGF0aH0+XG4gICAgICB7Y2hpbGRyZW4gfHwgbGFiZWx9XG4gICAgPC9BPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZsZXgsIEJveCwgSWNvbkJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGl0ZW1zID0gW10sIHBhcmVudFN0eWxlLCBjaGlsZFN0eWxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aDE+TGlzdDwvaDE+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbGlzdEljb246IHtcbiAgICB3aWR0aDogWycyNXB4JywgJzM1cHgnXSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgZm9udFNpemU6IFszLCA1XSxcbiAgICBtbDogJy0xcHgnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBtdDogJzJweCcsXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oeyBzcmMsIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIHBhdGg9XCIvXCIgc3g9e3tcbiAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbXI6IDE1LFxuICAgIH19ey4uLnJlc3R9PlxuXG4gICAgPEltYWdlIHNyYz17c3JjfT48L0ltYWdlPlxuICAgIDwvTGluaz5cbiAgICBcbiAgIFxuICApO1xufVxuIiwiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcbiAgZGF0YToge1xuICAgIGhlYWRlcixcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByaWNlV2l0aFVuaXQsXG4gICAgYnV0dG9uVGV4dCA9ICdTdGFydCBGcmVlIFRyaWFsJyxcbiAgICBhbm90aGVyT3B0aW9uLFxuICAgIHBvaW50cyxcbiAgfSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aDE+UHJpY2VDYXJkPC9oMT5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcmljaW5nQm94OiB7XG4gICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICAgIHA6IFsnMzVweCAyNXB4JywgbnVsbCwgbnVsbCwgJzQwcHgnXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzc1JScsICcxMDAlJ10sXG4gICAgbWI6ICc0MHB4JyxcbiAgICBtdDogJzQwcHgnLFxuICAgIG14OiBbMCwgJ2F1dG8nLCAwXSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgIH0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwcHggNHB4IDI1cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKSAhaW1wb3J0YW50JyxcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgaGVpZ2h0OiBbJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDEsXG4gICAgbGluZUhlaWdodDogMS4yLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnLTE3cHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICctLjE0cHgnLFxuICAgIHB4OiAnMTJweCcsXG4gIH0sXG4gIHByaWNpbmdIZWFkZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBtYjogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzQwcHgnXSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgICcucGFja2FnZV9fbmFtZSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogWzEsIG51bGwsIDJdLFxuICAgIH0sXG4gIH0sXG4gIHByaWNlOiB7XG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgJzMwcHgnXSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC41NXB4JyxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIG1hcmdpbkJvdHRvbTogMixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHB0OiBbNCwgNl0sXG4gICAgJz4gc3Bhbic6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcGw6ICczcHgnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgfSxcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICBmb250RmFtaWx5OiAnRE0gU2FucycsXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjc1LCAxLjZdLFxuICAgIG1iOiAzLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgICcmLmNsb3NlZCc6IHtcbiAgICAgIG9wYWNpdHk6IDAuNTUsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgY29sb3I6ICcjNzg4RkI1JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uR3JvdXA6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG10OiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzVweCddLFxuICAgICcuZnJlZV9fdHJhaWwnOiB7XG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIDFdLFxuICAgICAgcDogJzIwcHggMCAwJyxcbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmNvbnN0IFJhdGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aDE+UmF0aW5nPC9oMT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25IZWFkZXIoeyB0aXRsZSwgc2xvZ2FuLCBpc1doaXRlIH0pIHtcbiAgLy9keW5hbWljIHNvIHdlIGNhbiBjaGFuZ2UgZXZlcnl0aW1lLCBubyBkdXBsaWNhdGluZyBjb2RlXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17e3ZhcmlhbnQ6J3NlY3Rpb25IZWFkZXInfX0+XG4gICAgICA8VGV4dCBhcz1cInBcIiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnN1YlRpdGxlJyxcbiAgICAgICBjb2xvcjogaXNXaGl0ZT8gJ3doaXRlJzoncHJpbWFyeScsXG4gICAgICAgIG9wYWNpdHk6IGlzV2hpdGU/IDAuNzogMSx9fT5cbiAgICAgIHtzbG9nYW59XG4gICAgICA8L1RleHQ+XG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc3g9e3t2YXJpYW50OiAnc2VjdGlvbkhlYWRlci5zdWJUaXRsZScsXG4gICAgICAgY29sb3I6IGlzV2hpdGU/ICd3aGl0ZSc6J3ByaW1hcnknLH19XG4gICAgICA+XG4gICAgICB7dGl0bGV9XG4gICAgICA8L0hlYWRpbmc+XG4gICAgPC9Cb3g+XG5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xuICBkZXNjcmlwdGlvbiA9ICcnLFxuICBhdXRob3IgPSAnJyxcbiAgbWV0YSxcbiAgdGl0bGUgPSAnJyxcbn0pIHtcbiAgY29uc3QgbWV0YURhdGEgPSBbXG4gICAge1xuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6IGBvZzp0aXRsZWAsXG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxuICAgICAgY29udGVudDogYHdlYnNpdGVgLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgXS5jb25jYXQobWV0YSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcbiAgICAgICAgPG1ldGEga2V5PXtpfSBuYW1lPXtuYW1lfSBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgKSl9XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5TRU8uZGVmYXVsdFByb3BzID0ge1xuICBsYW5nOiBgZW5gLFxuICBtZXRhOiBbXSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRleHQsIEhlYWRpbmcsIEltYWdlLCBCb3gsIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMubWVtYmVyVGh1bWJ9Lz5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XG4gICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cImluZm9fX25hbWVcIiBzeD17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwiaW5mb19fZGVzaWduYXRpb25cIiBzeD17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgICAgICB7ZGVzaWduYXRpb259XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbFNoYXJlfSBjbGFzc05hbWU9XCJzb2NpYWxfX3NoYXJlXCI+XG4gICAgICAgIHtzb2NpYWwubWFwKChpdGVtKT0+KFxuICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gaHJlZj17aXRlbS5wYXRofSBjbGFzc05hbWU9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgICB7aXRlbS5pY29ufVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICAgIFxuXG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBweTogWzAsIG51bGwsIDQsIDUsIDZdLFxuICAgIHB4OiBbMiwgbnVsbCwgNiwgN10sXG4gICAgdHJhbnNpdGlvbjogJ2Vhc2UtaW4tb3V0IDAuNHMnLFxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6IFsnbm9uZScsIG51bGwsICcwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpJ10sXG4gICAgICAnLmluZm9fX25hbWUnOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJy5pbmZvX19kZXNpZ25hdGlvbic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnLnNvY2lhbF9fc2hhcmUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGE6IHtcbiAgICAgICAgICBteTogMCxcbiAgICAgICAgICBweTogWzAsIG51bGwsIDFdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1lbWJlclRodW1iOiB7XG4gICAgd2lkdGg6IFsnNzBweCcsICc4MHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXG4gICAgaGVpZ2h0OiBbJzcwcHgnLCAnODBweCcsICcxMDBweCcsIG51bGwsIG51bGwsICcxMzBweCddLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gIH0sXG4gIGluZm9XcmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG10OiBbMywgbnVsbCwgNF0sXG4gICAgbmFtZToge1xuICAgICAgZm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjM1XSxcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXG4gICAgICBtYjogMSxcbiAgICB9LFxuICAgIGRlc2lnbmF0aW9uOiB7XG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMjVzJyxcbiAgICB9LFxuICB9LFxuICBzb2NpYWxTaGFyZToge1xuICAgIHBvc2l0aW9uOiBbJ3JlbGF0aXZlJywgbnVsbCwgJ2Fic29sdXRlJ10sXG4gICAgcmlnaHQ6IFswLCBudWxsLCA2LCBudWxsLCA0LCA2XSxcbiAgICBib3R0b206IFswLCBudWxsLCAnMThweCcsIDVdLFxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnYXV0byddLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ3JvdycsIG51bGwsICdjb2x1bW4nXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgb3BhY2l0eTogWzEsIG51bGwsIDBdLFxuICAgIHB0OiAyLFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXG4gICAgICBjb2xvcjogWyd0ZXh0JywgbnVsbCwgJ3ByaW1hcnknXSxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxZW0nLFxuICAgICAgbXk6IFswLCBudWxsLCAnLTJweCddLFxuICAgICAgcHg6IDEsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogWydwcmltYXJ5JywgbnVsbCwgJ3RleHQnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0LCBCdXR0b24sIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRGZWF0dXJlKHtcbiAgc3ViVGl0bGUsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYnRuTmFtZSxcbiAgYnRuVVJMID0gJyMnLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPFRleHQgYXMgPVwicFwiIHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+XG4gICAgICAgIHtzdWJUaXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgPC9Cb3g+XG4gICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgIDxUZXh0IGFzPVwicFwiIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvVGV4dD5cbiAgICApfVxuICAgIHtidG5OYW1lICYmKFxuICAgICAgPExpbmsgaHJlZj17YnRuVVJMfSB2YXJpYW50PVwiZGVmYXVsdFwiPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD17YnRuTmFtZX0+XG4gICAgICAgICAge2J0bk5hbWV9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZmxleFNocmluazogMCxcbiAgICBhOiB7XG4gICAgICBtOiBbJzAgYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogLTEsXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgMV0sXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIG1iOiBbMiwgM10sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJzEuNXB4JywgbnVsbCwgJzJweCddLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsICczMHB4JywgJzM2cHgnLCAnNDJweCcsIG51bGwsICc0OHB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIG51bGwsIDEuMl0sXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXG4gICAgICBtYjogNSxcbiAgICB9LFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiBbJzE1cHgnLCAyLCBudWxsLCBudWxsLCBudWxsLCAnMTdweCcsIG51bGwsIDNdLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgJzIuMiddLFxuICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxuICAgIG1iOiAnMzBweCcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xuXG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9zZWN0aW9ucy9iYW5uZXInO1xuaW1wb3J0IEtleUZlYXR1cmUgZnJvbSAnLi4vc2VjdGlvbnMva2V5LWZlYXR1cmUnO1xuaW1wb3J0IFNlcnZpY2VTZWN0aW9uIGZyb20gJy4uL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbic7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICcuLi9zZWN0aW9ucy9mZWF0dXJlJztcbmltcG9ydCBDb3JlRmVhdHVyZSBmcm9tICcuLi9zZWN0aW9ucy9jb3JlLWZlYXR1cmUnO1xuaW1wb3J0IFdvcmtGbG93IGZyb20gJy4uL3NlY3Rpb25zL3dvcmtmbG93JztcbmltcG9ydCBQYWNrYWdlIGZyb20gJy4uL3NlY3Rpb25zL3BhY2thZ2UnO1xuaW1wb3J0IFRlYW1TZWN0aW9uIGZyb20gJy4uL3NlY3Rpb25zL3RlYW0tc2VjdGlvbic7XG5pbXBvcnQgVGVzdGltb25pYWxDYXJkIGZyb20gJy4uL3NlY3Rpb25zL3Rlc3RpbW9uaWFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPFNFTyB0aXRsZT1cIk5leHRKUyBMYW5kaW5nIFBhZ2VcIiAvPlxuICAgICAgICAgIDxCYW5uZXIgLz5cbiAgICAgICAgICA8S2V5RmVhdHVyZSAvPlxuICAgICAgICAgIDxTZXJ2aWNlU2VjdGlvbiAvPlxuICAgICAgICAgIDxGZWF0dXJlIC8+XG4gICAgICAgICAgPENvcmVGZWF0dXJlIC8+XG4gICAgICAgICAgPFdvcmtGbG93IC8+XG4gICAgICAgICAgPFBhY2thZ2UgLz5cbiAgICAgICAgICA8VGVhbVNlY3Rpb24gLz5cbiAgICAgICAgICA8VGVzdGltb25pYWxDYXJkIC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9hbWFuZGFQMS5qcGVnJztcblxuaW1wb3J0IFNoYXBlTGVmdCBmcm9tICdhc3NldHMvc2hhcGUtbGVmdC5wbmcnO1xuaW1wb3J0IFNoYXBlUmlnaHQgZnJvbSAnYXNzZXRzL3NoYXBlLXJpZ2h0LnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmJhbm5lcn0gaWQ9XCJob21lXCI+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHZhcmlhbnQ9XCJoZXJvUHJpbWFyeVwiPlxuICAgICAgICAgICAgQW1hbmRhIFdpbHNvbiBcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIEdhbGxlcnlcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPlNob3A8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuaW1hZ2VCb3h9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lckltZ30gYWx0PSdiYW5uZXInLz5cblxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJhbm5lcjoge1xuICAgIHB0OiBbJzE0MHB4JywgJzE0NXB4JywgJzE1NXB4JywgJzE3MHB4JywgbnVsbCwgbnVsbCwgJzE4MHB4JywgJzIxNXB4J10sXG4gICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDIsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiA2LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzYlJyxcbiAgICB9LFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiAnNDBweCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZVJpZ2h0fSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gcmlnaHQnLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICczMiUnLFxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBtaW5IZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgY29udGVudEJveDoge1xuICAgICAgd2lkdGg6IFsnMTAwJScsICc5MCUnLCAnNTM1cHgnLCBudWxsLCAnNTclJywgJzYwJScsICc2OCUnLCAnNjAlJ10sXG4gICAgICBteDogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcbiAgICB9LFxuICAgIGltYWdlQm94OiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIG1iOiBbMCwgbnVsbCwgLTYsIG51bGwsIG51bGwsICctNDBweCcsIG51bGwsIC0zXSxcbiAgICAgIGltZzoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgaGVpZ2h0OiBbMjQ1LCAnYXV0byddLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuXG5pbXBvcnQgRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9hbWFuZGFib3VnaHQuanBlZyc7XG5pbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMi5wbmcnO1xuXG5jb25zdCBkYXRhID0ge1xuICBzdWJUaXRsZTogJ1NvbGQgSXRlbXMnLFxuICB0aXRsZTogJ0NoZWNrIG91dCB3aGF0IGhhcyBzb2xkIGluIHRoZSBwYXN0IScsXG4gIGRlc2NyaXB0aW9uOlxuICAgICdDaGVjayBvdXQgd2hhdCBvdGhlciBwZW9wbGUgaGF2ZSBib3VnaHQgZnJvbSBtZSBpbiB0aGUgcGFzdCEnLFxuICBidG5OYW1lOiAnR28nLFxuICBidG5VUkw6ICcjJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xuICByZXR1cm4gKFxuICAgPHNlY3Rpb24gc3g9e3t2YXJpYW50OiAnc2VjdGlvbi5jb3JlRmVhdHVyZSd9fT5cbiAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cbiAgICAgICAgPFRleHRGZWF0dXJlIFxuICAgICAgICAgIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfVxuICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cbiAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cbiAgICAgICAgPEltYWdlIHNyYz17RmVhdHVyZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIi8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyQm94OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcbiAgICBwYjogWzAsIDcsIDAsIG51bGwsIDddLFxuICB9LFxuICBjb250ZW50Qm94OiB7XG4gICAgZmxleFNocmluazogMCxcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCBudWxsLCAzNDAsIDQwMCwgNDMwLCBudWxsLCA0ODVdLFxuICAgIHBiOiBbJzUwcHgnLCAnNjBweCcsIG51bGwsIDBdLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcHI6IFswLCBudWxsLCA2LCA3LCA2XSxcbiAgICB9LFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1yOiAnYXV0bycsXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDddLFxuICAgICc+IGltZyc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxuICAgIH0sXG4gIH0sXG4gIHNoYXBlQm94OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAtNjUsXG4gICAgcmlnaHQ6IC0xNjUsXG4gICAgekluZGV4OiAtMSxcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCAnaW5saW5lLWJsb2NrJywgJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBGZWF0dXJlQ2FyZCBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcyc7XG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSAnYXNzZXRzL2ZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnJztcbmltcG9ydCBQYXJ0bmVyc2hpcCBmcm9tICdhc3NldHMvZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICdhc3NldHMvZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnJztcbmltcG9ydCBTdXBwb3J0IGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3N1cHBvcnQuc3ZnJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltZ1NyYzogUGVyZm9ybWFuY2UsXG4gICAgYWx0VGV4dDogJ3RleHQgdGl0bGUnLFxuICAgIHRpdGxlOiAndGl0bGUnLFxuICAgIHRleHQ6XG4gICAgICAnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXG4gICAgYWx0VGV4dDogJ3RleHQgdGl0bGUnLFxuICAgIHRpdGxlOiAndGl0bGUnLFxuICAgIHRleHQ6XG4gICAgICAnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxuICAgIGFsdFRleHQ6ICd0ZXh0IHRpdGxlJyxcbiAgICB0aXRsZTogJ3RpdGxlJyxcbiAgICB0ZXh0OlxuICAgICAgJycsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpbWdTcmM6IFN1cHBvcnQsXG4gICAgYWx0VGV4dDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgU3VwcG9ydCcsXG4gICAgdGV4dDpcbiAgICAgICcnLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZSgpIHtcbiAgcmV0dXJuIChcbiAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDonc2VjdGlvbi5mZWF0dXJlJ319PlxuICAgICA8Q29udGFpbmVyPlxuICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgIHNsb2dhbj1cIlwiXG4gICAgICB0aXRsZT1cIlwiLz5cblxuICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKT0+IChcbiAgICAgICAgICA8RmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgYWx0PXtpdGVtLmFsdFRleHR9XG4gICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cbiAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICAgPC9Db250YWluZXI+XG4gICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4gICAgcHg6IFs1LCA2LCAwLCBudWxsLCA3LCA4LCA3XSxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnNDBweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDVweCAzMHB4JyxcbiAgICAgIG51bGwsXG4gICAgICAnNjBweCA1MHB4JyxcbiAgICAgICc3MHB4IDUwcHgnLFxuICAgICAgbnVsbCxcbiAgICAgICc4MHB4IDkwcHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwxZnIpJywgbnVsbCwgJ3JlcGVhdCgyLDFmciknXSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IEZlYXR1cmVDYXJkQ29sdW1uIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyc7XG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Zyc7XG5pbXBvcnQgUGFydG5lcnNoaXAgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3BhcnRuZXJzaGlwLnN2Zyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnJztcbmltcG9ydCBTdXBwb3J0IGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdXBwb3J0LnN2Zyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWdTcmM6IFBlcmZvcm1hbmNlLFxuICAgIGFsdFRleHQ6ICdJbnN0YWdyYW0nLFxuICAgIHRpdGxlOiAnSW5zdGFncmFtJyxcbiAgICB0ZXh0OlxuICAgICAgJ0NoZWNrIG91dCBteSBJbnN0YWdyYW0hJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXG4gICAgYWx0VGV4dDogJ0ZhY2VCb29rJyxcbiAgICB0aXRsZTogJ0ZhY2VCb29rJyxcbiAgICB0ZXh0OlxuICAgICAgJ0NoZWNrIG91dCBteSBGYWNlYm9vayEnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1nU3JjOiBTdWJzY3JpcHRpb24sXG4gICAgYWx0VGV4dDogJ1BpbnRlcmVzdCcsXG4gICAgdGl0bGU6ICdQaW50ZXJlc3QnLFxuICAgIHRleHQ6XG4gICAgICAnQ2hlY2sgb3V0IG15IFBpbnRlcmVzdCEnLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW1nU3JjOiBTdXBwb3J0LFxuICAgIGFsdFRleHQ6ICdNeSBQb3J0Zm9saW8nLFxuICAgIHRpdGxlOiAnTXkgUG9ydGZvbGlvJyxcbiAgICB0ZXh0OlxuICAgICAgJ1Rha2UgYSBsb29rIGF0IHNvbWUgb2YgbXkgb3RoZXIgd29yayBvbiBteSBwb3J0Zm9saW8uJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XG4gIHJldHVybiAoXG4gICA8c2VjdGlvbiBpZD1cImZlYXR1cmVcIiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLmtleUZlYXR1cmUnfX0+XG4gICAgIDxDb250YWluZXI+XG4gICAgIDxTZWN0aW9uSGVhZGVyIFxuICAgICBzbG9nYW49XCJXYW50IHRvIHNlZSBiZWhpbmQgdGhlIHNjZW5lcz9cIlxuICAgICB0aXRsZT1cIkZvbGxvdyBvbiBpbnN0YWdyYW0hXCI+XG4gICAgIDwvU2VjdGlvbkhlYWRlcj5cbiAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAge2RhdGEubWFwKChpdGVtKT0+KFxuICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW5cbiAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICBhbHQ9e2l0ZW0uYWx0VGV4dH1cbiAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvR3JpZD5cblxuICAgICA8L0NvbnRhaW5lcj5cbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIG14OiAnYXV0bycsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQwcHggNDBweCcsXG4gICAgICAnNTBweCA2MHB4JyxcbiAgICAgICczMHB4JyxcbiAgICAgICc1MHB4IDQwcHgnLFxuICAgICAgJzU1cHggOTBweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcbmltcG9ydCBQcmljZUNhcmQgZnJvbSAnY29tcG9uZW50cy9wcmljZS1jYXJkJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdjb21wb25lbnRzL2J1dHRvbi1ncm91cCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCB7IElvSW9zQ2hlY2ttYXJrQ2lyY2xlLCBJb0lvc0Nsb3NlQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5jb25zdCBwYWNrYWdlcyA9IHtcbiAgbW9udGhseTogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBidXR0b25UZXh0OiAnJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMCcsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxuICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICcnLFxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcbiAgICAgIGFub3RoZXJPcHRpb246ICcnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXG4gICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIGhlYWRlcjogJycsXG4gICAgICBoZWFkZXJJY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckJyxcbiAgICAgIGJ1dHRvblRleHQ6ICcgJyxcbiAgICAgIGFub3RoZXJPcHRpb246ICcnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXG4gICAgICAgICAgdGV4dDogJyAnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxuICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGFubnVhbDogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBidXR0b25UZXh0OiAnJyxcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICcnLFxuICAgICAgcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXG4gICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxuICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBwcmljZVdpdGhVbml0OiAnJyxcbiAgICAgIGJ1dHRvblRleHQ6ICcnLFxuICAgICAgYW5vdGhlck9wdGlvbjogJycsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxuICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgaGVhZGVyOiAnJyxcbiAgICAgIGhlYWRlckljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQzOScsXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxuICAgICAgYW5vdGhlck9wdGlvbjogJycsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcbiAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxuICAgICAgICAgIHRleHQ6ICcgICcsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCByZXNwb25zaXZlID0ge1xuICBkZXNrdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDIzLCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZSgpIHtcbiAgY29uc3QgeyBtb250aGx5LCBhbm51YWwgfSA9IHBhY2thZ2VzO1xuICBjb25zdFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGFjdGl2ZTogJ21vbnRobHknLFxuICAgIHByaWNpbmdQbGFuOiBtb250aGx5LFxuICB9KVxuXG5cblxuICBjb25zdCBzbGlkZXJQYXJhbXMgPSB7XG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzbGlkZXNUb1NsaWRlOiAxLFxuICAgIGl0ZW1zOiAzLFxuICAgIGNvbnRhaW5lckNsYXNzOiAnY2Fyb3VzZWwtY29udGFpbmVyJyxcbiAgICBjdXN0b21CdXR0b25Hcm91cDogPEJ1dHRvbkdyb3VwIC8+LFxuICAgIGRvdExpc3RDbGFzczogJycsXG4gICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIGtleUJvYXJkQ29udHJvbDogZmFsc2UsXG4gICAgaXRlbUNsYXNzOiAnJyxcbiAgICBtaW5pbXVtVG91Y2hEcmFnOiA4MCxcbiAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG4gICAgcmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxuICAgIHNsaWRlckNsYXNzOiAnJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24ucHJpY2luZyd9fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgc2xvZ2FuPVwiXCJcbiAgICAgICAgICBUaXRsZT1cIlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cElubmVyfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYWN0aXZlJ30+XG5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3Qgc3R5bGVzID0ge1xuICBwcmljaW5nV3JhcHBlcjoge1xuICAgIG1iOiAnLTQwcHgnLFxuICAgIG10OiAnLTQwcHgnLFxuICAgIG14OiAtMyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAnJi5wcmljaW5nX193cmFwcGVyIC5wYWNrYWdlX19jYXJkJzoge1xuICAgICAgJy5wYWNrYWdlX19oZWFkZXInOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGVhc2UtaW5gLFxuICAgICAgfSxcbiAgICAgICd1bCA+IGxpJzoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgZWFzZS1pbmAsXG4gICAgICB9LFxuICAgICAgJy5wYWNrYWdlX19wcmljZSc6IHtcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjlzIGVhc2UtaW5gLFxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDFzIGVhc2UtaW5gLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICc+IHVsID4gbGkgJzoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5idXR0b25fX2dyb3VwJzoge1xuICAgICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgfSxcbiAgcHJpY2luZ0l0ZW06IHtcbiAgICBteDogMyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFNocmluazogMCxcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICB9LFxuICBidXR0b25Hcm91cDoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYjogJzcnLFxuICAgIG10OiBbJy0xNXB4JywgJy0zNXB4J10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAyLFxuICB9LFxuICBidXR0b25Hcm91cElubmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6ICc3cHgnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGOEZCJyxcbiAgICBidXR0b246IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIHBhZGRpbmc6IFsnMTVweCAyMHB4JywgJzE1cHggMjdweCddLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMjRweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJyMwZjIxMzcnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgR3JpZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcbmltcG9ydCB7IElvSW9zUGxheSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcblxuaW1wb3J0IFNlcnZpY2VUaHVtYiBmcm9tICdhc3NldHMvYW1hbmRhcGFzdGVsLmpwZWcnO1xuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tICdhc3NldHMvc2hhcGUtcGF0dGVybjEucG5nJztcblxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zbWFydC5zdmcnO1xuaW1wb3J0IFNlY3VyZSBmcm9tICdhc3NldHMvc2VydmljZXMvc2VjdXJlLnN2Zyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHN1YlRpdGxlOiAnQW1hbmRhIGluIEFjdGlvbicsXG4gIHRpdGxlOiAnU2N1bHB0aW5nIEZpZ3VyZXMgVXNpbmcgUGFzdGVsJyxcbiAgZmVhdHVyZXM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGltZ1NyYzogU21hcnQsXG4gICAgICBhbHRUZXh0OiAnV2hlcmUgdG8gUHVyY2hhc2UnLFxuICAgICAgdGl0bGU6ICdXaGVyZSB0byBQdXJjaGFzZScsXG4gICAgICB0ZXh0OlxuICAgICAgICAnSSBkbyBub3QgZGVsaXZlciBidXQgSSBoYXZlIHBvcC11cCBzaG9wcyBhbGwgb3ZlciBvcmFuZ2UgY291bnR5ISBGb2xsb3cgbXkgSW5zdGFncmFtIGZvciBtb3JlIGRldGFpbHMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgaW1nU3JjOiBTZWN1cmUsXG4gICAgICBhbHRUZXh0OiAnTGVhcm4gTW9yZScsXG4gICAgICB0aXRsZTogJ0xlYXJuIE1vcmUnLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ0Rpc2NvdmVyIHRoZSBoaXN0b3J5IGFuZCBiYWNrZ3JvdW5kIGJlaGluZCBteSBwYWludGluZ3MuJyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZVNlY3Rpb24oKSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrPSAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFZpZGVvT3Blbih0cnVlKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDonc2VjdGlvbi5zZXJ2aWNlcyd9fT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtTZXJ2aWNlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiLz5cbiAgICAgICAgICA8QnV0dG9uIHN4PXtzdHlsZXMudmlkZW9CdG59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBhcmlhLWxhYmVsPVwiUGxheSBCdXR0b25cIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8SW9Jb3NQbGF5PjwvSW9Jb3NQbGF5PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zaGFwZUJveH0+XG4gICAgICAgICAgPEltYWdlIHNyYz17c2hhcGVQYXR0ZXJufSBhbHQ9XCJzaGFwZVwiLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cbiAgICAgICAgICA8VGV4dEZlYXR1cmUgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9IHRpdGxlPXtkYXRhLnRpdGxlfS8+XG4gICAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSk9PihcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17ZmVhdHVyZS5pZH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZmVhdHVyZS5pbWdTcmN9IGFsdD17ZmVhdHVyZS5hbHRUZXh0fSBzeD17c3R5bGVzLmljb259PjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntmZWF0dXJlLnRleHR9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBwbGF5UGx1c2UgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29yZUZlYXR1cmU6IHtcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBjb250YWluZXJCb3g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIHBiOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gIH0sXG4gIHRodW1ibmFpbDoge1xuICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCA2LCA2MCwgODVdLFxuICAgIG9yZGVyOiBbMiwgbnVsbCwgbnVsbCwgMF0sXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJz4gaW1nJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXG4gICAgfSxcbiAgfSxcbiAgc2hhcGVCb3g6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IC02OCxcbiAgICBsZWZ0OiAtMTYwLFxuICAgIHpJbmRleDogLTEsXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2lubGluZS1ibG9jayddLFxuICB9LFxuICB2aWRlb0J0bjoge1xuICAgIHpJbmRleDogMixcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgaGVpZ2h0OiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIHA6ICcwcHggIWltcG9ydGFudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBhbmltYXRpb246IGAke3BsYXlQbHVzZX0gMS41cyBlYXNlLW91dCBpbmZpbml0ZWAsXG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSxcbiAgICAnPiBzcGFuJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMixcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgZm9udFNpemU6IFs0MCwgbnVsbCwgNDgsIG51bGwsIDYyXSxcbiAgICB9LFxuICB9LFxuICBjb250ZW50Qm94OiB7XG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIDMxNSwgMzkwLCA0NTAsIG51bGwsIDUwMF0sXG4gICAgZmxleFNocmluazogMCxcbiAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHByOiBbMiwgMCwgbnVsbCwgbnVsbCwgNiwgJzcwcHgnXSxcbiAgICBwbDogWzIsIDBdLFxuICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICB3aWR0aDogWycxMDAlJywgMzcwLCA0MjAsICcxMDAlJ10sXG4gICAgZ3JpZEdhcDogWyczNXB4IDAnLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCAwJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwxZnIpJ10sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIH0sXG5cbiAgaWNvbjoge1xuICAgIHdpZHRoOiBbJzQ1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTVweCddLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbXI6IFszLCBudWxsLCBudWxsLCBudWxsLCA0XSxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAzLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzIsIG51bGwsIDMsIDIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTRweCcsIDFdLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogMS45LFxuICAgIH0sXG4gIH0sXG4gIHZpZGVvV3JhcHBlcjoge1xuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2lkdGg6ICc5MDBweCcsXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLFxuICAgIH0sXG4gICAgaWZyYW1lOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IFRlYW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvdGVhbS1jYXJkJztcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5cbmltcG9ydCBNZW1iZXIyIGZyb20gJ2Fzc2V0cy9hbWFuZGFGQUNFLnBuZyc7XG5cblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAyLFxuICAgIGltZ1NyYzogTWVtYmVyMixcbiAgICBhbHRUZXh0OiAnQW1hbmRhIFdpbHNvbicsXG4gICAgdGl0bGU6ICdBbWFuZGEgV2lsc29uJyxcbiAgICBkZXNpZ25hdGlvbjogJ0FydGlzdCcsXG4gICAgc29jaWFsUHJvZmlsZTogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcbiAgICAgICAgcGF0aDogJyMnLFxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgICAgICBwYXRoOiAnIycsXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXG4gICAgICAgIHBhdGg6ICcjJyxcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBcbiAgXG4gIFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbVNlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49IFwiQWJvdXRcIiBhcz1cImgxXCI+XG5cbiAgICAgICAgPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSk9PihcbiAgICAgICAgICAgIDxUZWFtQ2FyZFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cbiAgICAgICAgICAgIGFsdFRleHQ9e2l0ZW0uYWx0VGV4dH1cbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgZGVzaWduYXRpb249e2l0ZW0uZGVzaWduYXRpb259XG4gICAgICAgICAgICBzb2NpYWw9e2l0ZW0uc29jaWFsUHJvZmlsZX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdyaWQ6IHtcbiAgICBtdDogWzAsIG51bGwsIC02LCBudWxsLCAtNF0sXG4gICAgZ3JpZEdhcDogWyczNXB4IDBweCcsIG51bGwsIDAsIG51bGwsIG51bGwsICczMHB4IDM1cHgnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMywxZnIpJyxcbiAgICBdLFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5cbmltcG9ydCBBdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyc7XG5pbXBvcnQgQXZhdGFyMiBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmcnO1xuaW1wb3J0IEF2YXRhcjMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nJztcbmltcG9ydCBBdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcbiAgICBhdmF0YXI6IEF2YXRhcjEsXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcbiAgICByZXZpZXc6IDQsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0Rlc2lnbiBRdWFsaXR5ICYgcGVyZm9ybWFuY2UnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxuICAgIGF2YXRhcjogQXZhdGFyMixcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxuICAgIHJldmlldzogNSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnTGF5b3V0IGFuZCBvcmdhbml6ZWQgbGF5ZXJzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcbiAgICBhdmF0YXI6IEF2YXRhcjMsXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcbiAgICByZXZpZXc6IDUsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcbiAgICBhdmF0YXI6IEF2YXRhcjQsXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcbiAgICByZXZpZXc6IDQsXG4gIH0sXG5dO1xuXG5jb25zdCByZXNwb25zaXZlID0ge1xuICBkZXNrdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxuICAgIGl0ZW1zOiA0LFxuICAgIHNsaWRlc1RvU2xpZGU6IDQsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIGxhcHRvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxNjE5LCBtaW46IDEwMjQgfSxcbiAgICBpdGVtczogMyxcbiAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9LFxuICB0YWJsZXQ6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA2NDAgfSxcbiAgICBpdGVtczogMixcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcbiAgICBpdGVtczogMSxcbiAgICBzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9LFxufTtcblxuY29uc3QgY2Fyb3VzZWxQYXJhbXMgPSB7XG4gIGFkZGl0aW9uYWxUcmFuc2Zyb206MCxcbiAgYXJyb3dzOmZhbHNlLFxuICBhdXRvUGxheVNwZWVkOjMwMDAsXG4gIGNlbnRlck1vZGU6ZmFsc2UsXG4gIGNsYXNzTmFtZTpcIlwiLFxuICBjb250YWluZXJDbGFzczpcImNhcm91c2VsLWNvbnRhaW5lclwiLFxuICBjdXN0b21CdXR0b25Hcm91cDo8QnV0dG9uR3JvdXAgLz4sXG4gIGRvdExpc3RDbGFzczpcIlwiLFxuICBkcmFnZ2FibGU6IHRydWUsXG4gIGZvY3VzT25TZWxlY3Q6ZmFsc2UsXG4gIGluZmluaXRlOnRydWUsXG4gIGl0ZW1DbGFzczpcIlwiLFxuICBrZXlCb2FyZENvbnRyb2w6IHRydWUsXG4gIG1pbmltdW1Ub3VjaERyYWc6ODAsXG4gIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcbiAgcmVuZGVyRG90c091dHNpZGU6ZmFsc2UsXG4gIHJlc3BvbnNpdmU6cmVzcG9uc2l2ZSxcbiAgc2hvd0RvdHM6ZmFsc2UsXG4gIHNsaWRlckNsYXNzOlwiXCIsXG4gIHNsaWRlc1RvU2xpZGU6MSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxDYXJkKCkge1xuICByZXR1cm4gKFxuICAgPGgxPjwvaDE+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2Fyb3VzZWxXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXG4gICAgbXQ6ICctMzBweCcsXG4gICAgcHg6ICcxNXB4JyxcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogW1xuICAgICAgICAnMTAwJScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgICc3NTBweCcsXG4gICAgICAgICcxMDAwcHgnLFxuICAgICAgICAnMTE4MHB4JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJ2NhbGMoNTAlICsgODY1cHgpJyxcbiAgICAgIF0sXG4gICAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJy0yMjBweCddLFxuICAgICAgbWw6ICdhdXRvJyxcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICB9LFxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pJzoge1xuICAgICAgICBvcGFjaXR5OiAnMC41JyxcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MjBweCknOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmV2aWV3Q2FyZDoge1xuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXG4gICAgcDogW1xuICAgICAgJzMwcHggMjBweCAzNXB4JyxcbiAgICAgICczMHB4IDI1cHggMzVweCcsXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxuICAgICAgJzMwcHggMzBweCAzNXB4JyxcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcbiAgICBdLFxuICAgIGJnOiAnd2hpdGUnLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG06IFtcbiAgICAgICcyOHB4IDVweCAzMHB4IDVweCcsXG4gICAgICAnMjhweCAyMHB4IDMwcHggMjBweCcsXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXG4gICAgICAnMzBweCAyMHB4IDQwcHgnLFxuICAgIF0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwcHggNnB4IDMwcHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXG4gICAgfSxcbiAgICAnLnJhdGluZyc6IHtcbiAgICAgIG1iOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICB1bDoge1xuICAgICAgICBwbDogMCxcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICAgIG1iOiAwLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB9LFxuICAgICAgc3ZnOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICcuc3Rhcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgbXI6ICcxcHgnLFxuICAgICAgfSxcbiAgICAgICcuc3Rhci1vJzoge1xuICAgICAgICBjb2xvcjogJyNkZGQnLFxuICAgICAgICBtcjogJzFweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5jYXJkLWZvb3Rlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgJzMzcHgnXSxcbiAgICAgICcuaW1hZ2UnOiB7XG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgd2lkdGg6ICc1NXB4JyxcbiAgICAgICAgICBoZWlnaHQ6ICc1NXB4JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYjogWzMsIG51bGwsIG51bGwsICcyMnB4J10sXG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1iOiAnM3B4JyxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcbiAgfSxcbiAgZGVzaWduYXRpb246IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgIGZvbnRTaXplOiAxLFxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5cbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xuaW1wb3J0IEFycm93T2RkIGZyb20gJ2Fzc2V0cy9hcnJvd09kZC5zdmcnO1xuaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnN2Zyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ1NldCBkaXNidXJzZW1lbnQgSW5zdHJ1Y3Rpb25zJyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBc3NlbWJseSByZXRyaWV2ZXMgZnVuZHMgZnJvbSB5b3VyIGFjY291bnQnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IGluaXRpYXRlcyBkaXNidXJzZW1lbnQnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ0N1c3RvbWVyIHJlY2VpdmVzIGZ1bmRzIHBheW1lbnQnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcbiAgcmV0dXJuIChcbiAgICA8aDE+PC9oMT5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICB3b3JrZmxvdzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIG1iOiAtMSxcbiAgICBwdDogMCxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDVweCAzMHB4JyxcbiAgICAgIG51bGwsXG4gICAgICAnNTBweCAyNXB4JyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggNjVweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICBteDogWydhdXRvJ10sXG4gICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICB3aWR0aDogMjE1LFxuICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlJzoge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXG4gICAgfSxcbiAgICAnJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcbiAgICAgIHRvcDogMTcsXG4gICAgfSxcbiAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBpY29uQm94OiB7XG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcbiAgICBteDogWydhdXRvJywgbnVsbCwgMF0sXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgY29sb3I6ICcjMjM0NTgyJyxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIG1iOiBbMiwgM10sXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLjc1LFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbiAgICB9LFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXG4gICAgdGV4dF9zZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzBGMjEzNycsIC8vIGhlYWRpbmcgY29sb3JcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsIC8vIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYm9yZGVyX2NvbG9yOiAnI0U1RUNGNCcsIC8vIGJvcmRlciBjb2xvclxuICAgIHllbGxvdzogJyNGRkE3NDAnLCAvLyBib3JkZXIgY29sb3JcbiAgICBwcmltYXJ5OiAnI0VBM0E2MCcsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXG4gICAgc2Vjb25kYXJ5OiAnIzI1NjNGRicsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcbiAgICBtdXRlZDogJyNFNEU0RTQnLCAvLyBtdXRlZCBjb2xvclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxuXG4gICAgLy8gaGlnaGxpZ2h0XHRhIGJhY2tncm91bmQgY29sb3IgZm9yIGhpZ2hsaWdodGluZyB0ZXh0XG4gICAgbW9kZXM6IHtcbiAgICAgIGRhcms6IHtcbiAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcbiAgICAgICAgc2Vjb25kYXJ5OiAnIzA5YycsXG4gICAgICAgIG11dGVkOiAnIzExMScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiBbXG4gICAgJzQ4MHB4JyxcbiAgICAnNjQwcHgnLFxuICAgICc3NjhweCcsXG4gICAgJzEwMjRweCcsXG4gICAgJzEyMjBweCcsXG4gICAgJzEzNjZweCcsXG4gICAgJzE2MjBweCcsXG4gIF0sXG4gIGZvbnRzOiB7XG4gICAgYm9keTogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcbiAgICBoZWFkaW5nOiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTUsIDE2LCAxOCwgMjAsIDIyLCAyNCwgMjgsIDMyLCAzNiwgNDIsIDQ4LCA1MiwgNjRdLFxuICBmb250V2VpZ2h0czoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIGhlYWRpbmc6IDUwMCxcbiAgICBib2xkOiA3MDAsXG4gIH0sXG4gIGxpbmVIZWlnaHRzOiB7XG4gICAgYm9keTogMS44LFxuICAgIGhlYWRpbmc6IDEuNSxcbiAgfSxcbiAgbGV0dGVyU3BhY2luZ3M6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICBjYXBzOiAnMC4yZW0nLFxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxuICB9LFxuICBzcGFjZTogWzAsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMCwgNTAsIDgwLCAxMDAsIDEyMCwgMTUwXSxcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xuICBsYXlvdXQ6IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1heFdpZHRoOiBbXG4gICAgICAgICcxMDAlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzc4MHB4JyxcbiAgICAgICAgJzEwMjBweCcsXG4gICAgICAgICcxMjAwcHgnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnMTMxMHB4JyxcbiAgICAgIF0sXG4gICAgICBweDogWzQsIDZdLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBweTogMyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRvb2xiYXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICAgIG1haW46IHt9LFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAga2V5RmVhdHVyZToge1xuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNjVweCddLFxuICAgIH0sXG4gICAgZmVhdHVyZToge1xuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXG4gICAgfSxcbiAgICBuZXdzOiB7XG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcbiAgICB9LFxuICAgIGNvcmVGZWF0dXJlOiB7XG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9LFxuICAgIHRlc3RpbW9uaWFsOiB7XG4gICAgICBwdDogWzgsIG51bGwsIDgsICc3MHB4JywgbnVsbCwgOCwgbnVsbCwgJzE0NXB4J10sXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxOTBweCddLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgc2VydmljZXM6IHtcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE1MHB4J10sXG4gICAgfSxcbiAgICBwcmljaW5nOiB7XG4gICAgICBwdDogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTgwcHgnXSxcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXG4gICAgfSxcbiAgfSxcbiAgc2VjdGlvbkhlYWRlcjoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnNTQwcHgnXSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbXQ6IFsnLTNweCcsIG51bGwsIC0xXSxcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzY1cHgnLCBudWxsLCAnODBweCddLFxuICAgIG14OiAnYXV0bycsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCAxLjI1XSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzAsICcxM3B4JywgbnVsbCwgJzE0cHgnXSxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBtYjogMixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxuICB9LFxuICB0ZXh0OiB7XG4gICAgaGVhZGluZzoge1xuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICAgICAgZm9udFdlaWdodDogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IFs0XSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjU1cHgnLFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIGhlcm9QcmltYXJ5OiB7XG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IFtcbiAgICAgICAgJzMycHgnLFxuICAgICAgICAnMzZweCcsXG4gICAgICAgICc0MnB4JyxcbiAgICAgICAgJzQwcHgnLFxuICAgICAgICAnNDJweCcsXG4gICAgICAgICc1MnB4JyxcbiAgICAgICAgJzU4cHgnLFxuICAgICAgICAnNjZweCcsXG4gICAgICBdLFxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS4yXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgfSxcbiAgICBoZXJvU2Vjb25kYXJ5OiB7XG4gICAgICBmb250U2l6ZTogWzIsIG51bGwsICcxN3B4JywgbnVsbCwgbnVsbCwgJzE5cHgnLCA0XSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjksIG51bGwsIG51bGwsIDJdLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgbWI6IDUsXG4gICAgICBweDogWzAsIG51bGwsIDUsIDYsIG51bGwsIDgsIDldLFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAvLyBleHRlbmRzIHRoZSB0ZXh0LmhlYWRpbmcgc3R5bGVzXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNF0sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgbWI6IDEsXG4gICAgfSxcbiAgICBsZWFkOiB7XG4gICAgICBmb250U2l6ZTogNDAsXG4gICAgICBmb250RmFtaWx5OiAnRE0gU2FucycsXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICB9LFxuICAgIG11dGVkOiB7XG4gICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXG4gICAgICBjb2xvcjogJ211dGVkJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgY29sb3I6ICcjMDBBOTlEJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICB9LFxuICB9LFxuICBsaW5rczoge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIH0sXG4gICAgYm9sZDoge1xuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgbmF2OiB7XG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gICAgICBweDogMjUsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIGJsb2c6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBweDogMCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBweDogMCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gIH0sXG4gIGltYWdlczoge1xuICAgIGF2YXRhcjoge1xuICAgICAgd2lkdGg6IDQ4LFxuICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXG4gICAgfSxcbiAgfSxcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcbiAgYnV0dG9uczoge1xuICAgIG1lbnU6IHtcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxuICAgIGRlZmF1bHRCdG46IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzQ1cHgnLFxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsIDJdLFxuICAgICAgbGV0dGVyU3BhY2luZ3M6ICctMC4xNXB4JyxcbiAgICAgIHBhZGRpbmc6IFsnMTJweCAyMHB4JywgbnVsbCwgJzE1cHggMzBweCddLFxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByaW1hcnk6IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBiZzogJ3ByaW1hcnknLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMjMzLCA3NiwgODQsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3aGl0ZUJ1dHRvbjoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICBwYWRkaW5nOiBbJzEwcHggMTVweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0ZXh0QnV0dG9uOiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBzdmc6IHtcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcbiAgICAgICAgbXI6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNhcmRzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgcGFkZGluZzogMixcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICB9LFxuICAgIG9mZmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcbiAgICAgIG06IDIsXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgfSxcbiAgICBmZWF0dXJlQ2FyZDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBwOiAzLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1zOiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgYm94U2hhZG93OiAodCkgPT4gYDAgMCAwIDJweCAke3QuY29sb3JzLnByaW1hcnl9YCxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGJhZGdlczoge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXG4gICAgICBiZzogJyMyOEE1RkYnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgIHA6ICczcHggMTFweCcsXG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxuICAgIH0sXG4gICAgb3V0bGluZToge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDAgMXB4JyxcbiAgICB9LFxuICB9LFxuXG4gIHN0eWxlczoge1xuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gICAgICAvLyBNb2RhbCBHbG9iYWwgU3R5bGVcbiAgICAgICcubW9kYWwtdmlkZW8tY2xvc2UtYnRuJzoge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIH0sXG4gICAgICAnLm1vZGFsLXZpZGVvLW1vdmllLXdyYXAnOiB7XG4gICAgICAgIG1hcmdpbjogNixcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcbiAgICB9LFxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXG4gICAgdWw6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIH0sXG4gICAgc3JPbmx5OiB7XG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICB9LFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWRyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9