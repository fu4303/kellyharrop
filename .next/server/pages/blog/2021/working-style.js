module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/2021/working-style.mdx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/blogPost.js":
/*!********************************!*\
  !*** ./components/blogPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogPost; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _postHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postHeader */ \"./components/postHeader.js\");\nvar _jsxFileName = \"/Users/kharrop/sites/kharrop/website/components/blogPost.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction BlogPost({\n  children,\n  meta\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_postHeader__WEBPACK_IMPORTED_MODULE_1__[\"PostHeader\"], {\n    meta: meta,\n    isBlogPost: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    className: \"prose dark:prose-dark\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, children));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2dQb3N0LmpzP2NjMmMiXSwibmFtZXMiOlsiQmxvZ1Bvc3QiLCJjaGlsZHJlbiIsIm1ldGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxRQUFULENBQWtCO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFsQixFQUFzQztBQUNuRCxTQUNFLG1FQUNFLE1BQUMsc0RBQUQ7QUFBWSxRQUFJLEVBQUVBLElBQWxCO0FBQXdCLGNBQVUsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBUyxhQUFTLEVBQUMsdUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENELFFBQTVDLENBSEYsQ0FERjtBQU9EIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ibG9nUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3RIZWFkZXIgfSBmcm9tICcuL3Bvc3RIZWFkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0KHsgY2hpbGRyZW4sIG1ldGEgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UG9zdEhlYWRlciBtZXRhPXttZXRhfSBpc0Jsb2dQb3N0IC8+XG5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInByb3NlIGRhcms6cHJvc2UtZGFya1wiPntjaGlsZHJlbn08L2FydGljbGU+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/blogPost.js\n");

/***/ }),

/***/ "./components/postHeader.js":
/*!**********************************!*\
  !*** ./components/postHeader.js ***!
  \**********************************/
/*! exports provided: PostHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostHeader\", function() { return PostHeader; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/kharrop/sites/kharrop/website/components/postHeader.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nconst PostHeader = ({\n  meta,\n  isBlogPost\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n  className: isBlogPost ? 'great-title' : null,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }\n}, meta.title), __jsx(\"div\", {\n  className: \"notes mb-16\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }\n}, __jsx(\"time\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 7\n  }\n}, meta.date), \" \\u2022 \", __jsx(\"span\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 34\n  }\n}, meta.readTime, \" min read\"), ' '));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RIZWFkZXIuanM/NDEyYiJdLCJuYW1lcyI6WyJQb3N0SGVhZGVyIiwibWV0YSIsImlzQmxvZ1Bvc3QiLCJ0aXRsZSIsImRhdGUiLCJyZWFkVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFELEtBQ3hCLG1FQUNFO0FBQUksV0FBUyxFQUFFQSxVQUFVLEdBQUcsYUFBSCxHQUFtQixJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW1ERCxJQUFJLENBQUNFLEtBQXhELENBREYsRUFFRTtBQUFLLFdBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU9GLElBQUksQ0FBQ0csSUFBWixDQURGLGNBQzZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBT0gsSUFBSSxDQUFDSSxRQUFaLGNBRDdCLEVBQ21FLEdBRG5FLENBRkYsQ0FESyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9zdEhlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQb3N0SGVhZGVyID0gKHsgbWV0YSwgaXNCbG9nUG9zdCB9KSA9PiAoXG4gIDw+XG4gICAgPGgxIGNsYXNzTmFtZT17aXNCbG9nUG9zdCA/ICdncmVhdC10aXRsZScgOiBudWxsfT57bWV0YS50aXRsZX08L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZXMgbWItMTZcIj5cbiAgICAgIDx0aW1lPnttZXRhLmRhdGV9PC90aW1lPiDigKIgPHNwYW4+e21ldGEucmVhZFRpbWV9IG1pbiByZWFkPC9zcGFuPnsnICd9XG4gICAgPC9kaXY+XG4gIDwvPlxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postHeader.js\n");

/***/ }),

/***/ "./pages/blog/2021/working-style.mdx":
/*!*******************************************!*\
  !*** ./pages/blog/2021/working-style.mdx ***!
  \*******************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_blogPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/blogPost */ \"./components/blogPost.js\");\nvar _jsxFileName = \"/Users/kharrop/sites/kharrop/website/pages/blog/1/working-style.mdx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\n\nconst meta = {\n  title: 'Working style',\n  description: 'Let people know the best way to work with you.',\n  date: 'January 11, 2021',\n  readTime: 2\n};\nconst layoutProps = {\n  meta\n};\n\nconst MDXLayout = ({\n  children\n}) => Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(_components_blogPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  meta: meta,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 37\n  }\n}, children);\n\nfunction MDXContent(_ref) {\n  let {\n    components\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h2\", _extends({\n    \"id\": \"hello\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"a\", _extends({\n    parentName: \"h2\"\n  }, {\n    \"aria-hidden\": \"true\",\n    \"tabIndex\": -1,\n    \"href\": \"#hello\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 8\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"span\", _extends({\n    parentName: \"a\"\n  }, {\n    \"className\": \"icon icon-link\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 10\n    }\n  }))), `Hello`));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLzEvd29ya2luZy1zdHlsZS5tZHg/NDVmMSJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJyZWFkVGltZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiY2hpbGRyZW4iLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBOztBQUNBO0FBQ08sTUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsZUFEVztBQUVsQkMsYUFBVyxFQUFFLGdEQUZLO0FBR2xCQyxNQUFJLEVBQUUsa0JBSFk7QUFJbEJDLFVBQVEsRUFBRTtBQUpRLENBQWI7QUFPUCxNQUFNQyxXQUFXLEdBQUc7QUFDbEJMO0FBRGtCLENBQXBCOztBQUdBLE1BQU1NLFNBQVMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQiwwREFBQyw0REFBRDtBQUFVLE1BQUksRUFBRVAsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF1Qk8sUUFBdkIsQ0FBcEM7O0FBQ2UsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFIZ0M7QUFDakNDO0FBRGlDLEdBR2hDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQsZUFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMLHlFQUFRO0FBQ04sVUFBTTtBQURBLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBdUI7QUFDdEIsbUJBQWUsTUFETztBQUV0QixnQkFBWSxDQUFDLENBRlM7QUFHdEIsWUFBUTtBQUhjLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUF5QjtBQUN4QixpQkFBYTtBQURXLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRixDQUZILEVBUW9CLE9BUnBCLENBSkssQ0FBUDtBQWNEO0FBRUQ7QUFDQUQsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy8yMDIxL3dvcmtpbmctc3R5bGUubWR4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IEJsb2dQb3N0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYmxvZ1Bvc3QnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICdXb3JraW5nIHN0eWxlJyxcbiAgZGVzY3JpcHRpb246ICdMZXQgcGVvcGxlIGtub3cgdGhlIGJlc3Qgd2F5IHRvIHdvcmsgd2l0aCB5b3UuJyxcbiAgZGF0ZTogJ0phbnVhcnkgMTEsIDIwMjEnLFxuICByZWFkVGltZTogMlxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiA8QmxvZ1Bvc3QgbWV0YT17bWV0YX0+e2NoaWxkcmVufTwvQmxvZ1Bvc3Q+XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJoZWxsb1wiXG4gICAgfX0+PGEgcGFyZW50TmFtZT1cImgyXCIgey4uLntcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiOiAtMSxcbiAgICAgICAgXCJocmVmXCI6IFwiI2hlbGxvXCJcbiAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJhXCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImljb24gaWNvbi1saW5rXCJcbiAgICAgICAgfX0+PC9zcGFuPjwvYT57YEhlbGxvYH08L2gyPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/2021/working-style.mdx\n");

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mdx-js/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCI/M2UxMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWR4LWpzL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mdx-js/react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });