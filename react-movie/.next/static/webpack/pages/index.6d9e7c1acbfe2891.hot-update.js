"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MovieCard/MovieCard.tsx":
/*!************************************************!*\
  !*** ./src/components/MovieCard/MovieCard.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieCard: function() { return /* binding */ MovieCard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar MovieCard = function(param) {\n    var movie = param.movie;\n    _s();\n    var router = useRouter();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isHovered = _useState[0], setIsHovered = _useState[1]; // State to track hover\n    var getMediaUrl = function(media) {\n        var baseUrl = \"https://image.tmdb.org/t/p/w500\";\n        return \"\".concat(baseUrl).concat(media);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full m-2 rounded-md bg-slate-200 shadow-md whitespace-nowrap overflow-hidden transform transition-transform \".concat(isHovered ? \"scale-105\" : \"\"),\n        onMouseEnter: function() {\n            return setIsHovered(true);\n        },\n        onMouseLeave: function() {\n            return setIsHovered(false);\n        },\n        onClick: function() {\n            return router.push(\"/details\");\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-[200px]\",\n                src: getMediaUrl(movie.media),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieCard/MovieCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-1 flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"whitespace-normal max-w-[80%] font-bold\",\n                        children: movie.title\n                    }, void 0, false, {\n                        fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieCard/MovieCard.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"(\",\n                            movie.rating,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieCard/MovieCard.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieCard/MovieCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"m-1 truncate\",\n                children: movie.description\n            }, void 0, false, {\n                fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieCard/MovieCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieCard/MovieCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(MovieCard, \"p/NE/qc3wAtaV7+GsXKmwsg0DD8=\", true);\n_c = MovieCard;\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRzFCLElBQU1DLFlBQVk7UUFBR0MsY0FBQUE7O0lBQzFCLElBQU1DLFNBQVNDO0lBQ2YsSUFBa0NKLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUFwQ0ssWUFBMkJMLGNBQWhCTSxlQUFnQk4sY0FBaUIsdUJBQXVCO0lBRTFFLElBQU1PLGNBQWMsU0FBQ0M7UUFDbkIsSUFBTUMsVUFBVTtRQUNoQixPQUFPLEdBQWFELE9BQVZDLFNBQWdCLE9BQU5EO0lBQ3RCO0lBRUEscUJBQ0UsOERBQUNFO1FBQ0NDLFdBQVcsaUhBRVYsT0FEQ04sWUFBWSxjQUFjO1FBRTVCTyxjQUFjO21CQUFNTixhQUFhOztRQUNqQ08sY0FBYzttQkFBTVAsYUFBYTs7UUFDakNRLFNBQVM7bUJBQU1YLE9BQU9ZLElBQUksQ0FBRTs7OzBCQUU1Qiw4REFBQ0M7Z0JBQUlMLFdBQVU7Z0JBQW1CTSxLQUFLVixZQUFZTCxNQUFNTSxLQUFLO2dCQUFHVSxLQUFJOzs7Ozs7MEJBQ3JFLDhEQUFDUjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNRO3dCQUFFUixXQUFVO2tDQUEyQ1QsTUFBTWtCLEtBQUs7Ozs7OztrQ0FDbkUsOERBQUNEOzs0QkFBRTs0QkFBRWpCLE1BQU1tQixNQUFNOzRCQUFDOzs7Ozs7Ozs7Ozs7OzBCQUVwQiw4REFBQ0Y7Z0JBQUVSLFdBQVU7MEJBQWdCVCxNQUFNb0IsV0FBVzs7Ozs7Ozs7Ozs7O0FBR3BELEVBQUU7R0ExQldyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnRzeD83MjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL21vdmllXCI7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZUNhcmQgPSAoeyBtb3ZpZSB9OiB7IG1vdmllOiBQYXJ0aWFsPE1vdmllPiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTdGF0ZSB0byB0cmFjayBob3ZlclxuXG4gIGNvbnN0IGdldE1lZGlhVXJsID0gKG1lZGlhOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwXCI7XG4gICAgcmV0dXJuIGAke2Jhc2VVcmx9JHttZWRpYX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIG0tMiByb3VuZGVkLW1kIGJnLXNsYXRlLTIwMCBzaGFkb3ctbWQgd2hpdGVzcGFjZS1ub3dyYXAgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSAke1xuICAgICAgICBpc0hvdmVyZWQgPyBcInNjYWxlLTEwNVwiIDogXCJcIlxuICAgICAgfWB9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvZGV0YWlsc2ApfVxuICAgID5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzIwMHB4XVwiIHNyYz17Z2V0TWVkaWFVcmwobW92aWUubWVkaWEpfSBhbHQ9XCJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3JtYWwgbWF4LXctWzgwJV0gZm9udC1ib2xkXCI+e21vdmllLnRpdGxlfTwvcD5cbiAgICAgICAgPHA+KHttb3ZpZS5yYXRpbmd9KTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwibS0xIHRydW5jYXRlXCI+e21vdmllLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNb3ZpZUNhcmQiLCJtb3ZpZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImdldE1lZGlhVXJsIiwibWVkaWEiLCJiYXNlVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsInB1c2giLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwidGl0bGUiLCJyYXRpbmciLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MovieCard/MovieCard.tsx\n"));

/***/ })

});