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

/***/ "./src/components/MovieLanding/MovieLanding.tsx":
/*!******************************************************!*\
  !*** ./src/components/MovieLanding/MovieLanding.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieLanding: function() { return /* binding */ MovieLanding; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetMovies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useGetMovies */ \"./src/hooks/useGetMovies.ts\");\n/* harmony import */ var _hooks_useSearchMovies_useSearchMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSearchMovies/useSearchMovies */ \"./src/hooks/useSearchMovies/useSearchMovies.ts\");\n/* harmony import */ var _MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MovieCard/MovieCard */ \"./src/components/MovieCard/MovieCard.tsx\");\n/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchBar/SearchBar */ \"./src/components/SearchBar/SearchBar.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar MovieLanding = function() {\n    _s();\n    var _useGetMovies = (0,_hooks_useGetMovies__WEBPACK_IMPORTED_MODULE_2__.useGetMovies)(), popularMovies = _useGetMovies.data;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), searchInput = _useState[0], setSearchInput = _useState[1];\n    var _useSearchMovies = (0,_hooks_useSearchMovies_useSearchMovies__WEBPACK_IMPORTED_MODULE_3__.useSearchMovies)(searchInput), searchMovies = _useSearchMovies.data;\n    var handleSearch = function(value) {\n        setSearchInput(value);\n    };\n    var movies = searchMovies !== null && searchMovies !== void 0 ? searchMovies : popularMovies;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                value: searchInput,\n                handleChange: handleSearch\n            }, void 0, false, {\n                fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieLanding/MovieLanding.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5 gap-2\",\n                children: movies && movies.length > 0 ? movies.map(function(movie, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_4__.MovieCard, {\n                            movie: movie\n                        }, void 0, false, {\n                            fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieLanding/MovieLanding.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieLanding/MovieLanding.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 15\n                    }, _this);\n                }) : null\n            }, void 0, false, {\n                fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieLanding/MovieLanding.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/MovieLanding/MovieLanding.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(MovieLanding, \"tv9Tb1MmPV/SJHDJyI3GJfwAjaM=\", false, function() {\n    return [\n        _hooks_useGetMovies__WEBPACK_IMPORTED_MODULE_2__.useGetMovies,\n        _hooks_useSearchMovies_useSearchMovies__WEBPACK_IMPORTED_MODULE_3__.useSearchMovies\n    ];\n});\n_c = MovieLanding;\nvar _c;\n$RefreshReg$(_c, \"MovieLanding\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUxhbmRpbmcvTW92aWVMYW5kaW5nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNjO0FBQ3NCO0FBRTNCO0FBQ0o7QUFFeEMsSUFBTUssZUFBZTs7SUFDMUIsSUFBZ0NKLGdCQUFBQSxpRUFBWUEsSUFBcENLLGdCQUF3QkwsY0FBeEJLO0lBQ1IsSUFBc0NOLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsUUFBdkNRLGNBQStCUixjQUFsQlMsaUJBQWtCVDtJQUV0QyxJQUErQkUsbUJBQUFBLHVGQUFlQSxDQUFDTSxjQUF2Q0YsZUFBdUJKLGlCQUF2Qkk7SUFFUixJQUFNSyxlQUFlLFNBQUNDO1FBQ3BCSCxlQUFlRztJQUNqQjtJQUVBLElBQU1DLFNBQVNILHlCQUFBQSwwQkFBQUEsZUFBZ0JIO0lBRS9CLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1gsNERBQVNBO2dCQUFDUSxPQUFPSjtnQkFBYVEsY0FBY0w7Ozs7OzswQkFDN0MsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUNaRixVQUFVQSxPQUFPSSxNQUFNLEdBQUcsSUFDdkJKLE9BQU9LLEdBQUcsQ0FBQyxTQUFDQyxPQUF1QkM7eUNBQ2pDLDhEQUFDTjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1osMkRBQVNBOzRCQUFDZ0IsT0FBT0E7Ozs7Ozt1QkFEc0JDOzs7OztxQkFJNUM7Ozs7Ozs7Ozs7OztBQUlaLEVBQUU7R0ExQldmOztRQUNxQkosNkRBQVlBO1FBR2JDLG1GQUFlQTs7O0tBSm5DRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUxhbmRpbmcvTW92aWVMYW5kaW5nLnRzeD9lZjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHZXRNb3ZpZXMgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlR2V0TW92aWVzXCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hNb3ZpZXMgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlU2VhcmNoTW92aWVzL3VzZVNlYXJjaE1vdmllc1wiO1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9tb3ZpZVwiO1xuaW1wb3J0IHsgTW92aWVDYXJkIH0gZnJvbSBcIi4uL01vdmllQ2FyZC9Nb3ZpZUNhcmRcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcblxuZXhwb3J0IGNvbnN0IE1vdmllTGFuZGluZyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBwb3B1bGFyTW92aWVzIH0gPSB1c2VHZXRNb3ZpZXMoKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XG5cbiAgY29uc3QgeyBkYXRhOiBzZWFyY2hNb3ZpZXMgfSA9IHVzZVNlYXJjaE1vdmllcyhzZWFyY2hJbnB1dCk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcbiAgICBzZXRTZWFyY2hJbnB1dCh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgbW92aWVzID0gc2VhcmNoTW92aWVzID8/IHBvcHVsYXJNb3ZpZXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFNlYXJjaEJhciB2YWx1ZT17c2VhcmNoSW5wdXR9IGhhbmRsZUNoYW5nZT17aGFuZGxlU2VhcmNofSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdhcC0yXCI+XG4gICAgICAgIHttb3ZpZXMgJiYgbW92aWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IG1vdmllcy5tYXAoKG1vdmllOiBQYXJ0aWFsPE1vdmllPiwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIG1vdmllPXttb3ZpZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUdldE1vdmllcyIsInVzZVNlYXJjaE1vdmllcyIsIk1vdmllQ2FyZCIsIlNlYXJjaEJhciIsIk1vdmllTGFuZGluZyIsImRhdGEiLCJwb3B1bGFyTW92aWVzIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInNlYXJjaE1vdmllcyIsImhhbmRsZVNlYXJjaCIsInZhbHVlIiwibW92aWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGFuZGxlQ2hhbmdlIiwibGVuZ3RoIiwibWFwIiwibW92aWUiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MovieLanding/MovieLanding.tsx\n"));

/***/ })

});