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

/***/ "./src/components/SearchBar/SearchBar.tsx":
/*!************************************************!*\
  !*** ./src/components/SearchBar/SearchBar.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_HomeSharp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/HomeSharp */ \"./node_modules/@mui/icons-material/HomeSharp.js\");\n/* harmony import */ var _mui_icons_material_SearchSharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/SearchSharp */ \"./node_modules/@mui/icons-material/SearchSharp.js\");\nvar _this = undefined;\n\n\n\n\nvar SearchBar = function(param) {\n    var value = param.value, handleChange = param.handleChange;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative bg-gray-200 p-2 w-full flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[80%] relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_SearchSharp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500\"\n                    }, void 0, false, {\n                        fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/SearchBar/SearchBar.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search...\",\n                        className: \"pl-10 px-4 py-2 rounded-lg border focus:outline-none w-full\",\n                        onChange: function(event) {\n                            return handleChange(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/SearchBar/SearchBar.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/SearchBar/SearchBar.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_HomeSharp__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"h-8 w-8\"\n            }, void 0, false, {\n                fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/SearchBar/SearchBar.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/haibara/GSIV23_riya_kaushik/react-movie/src/components/SearchBar/SearchBar.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDa0I7QUFDSTtBQUU5RCxJQUFNRyxZQUFZO1FBQ2hCQyxjQUFBQSxPQUNBQyxxQkFBQUE7SUFLQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0wsdUVBQWVBO3dCQUFDSyxXQUFVOzs7Ozs7a0NBQzNCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkgsV0FBVTt3QkFDVkksVUFBVSxTQUFDQzttQ0FBVVAsYUFBYU8sTUFBTUMsTUFBTSxDQUFDVCxLQUFLOzs7Ozs7Ozs7Ozs7OzBCQUd4RCw4REFBQ0gscUVBQWFBO2dCQUFDTSxXQUFVOzs7Ozs7Ozs7Ozs7QUFHL0I7S0FyQk1KO0FBdUJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4PzcwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSG9tZVNoYXJwSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Ib21lU2hhcnBcIjtcbmltcG9ydCBTZWFyY2hTaGFycEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoU2hhcnBcIjtcblxuY29uc3QgU2VhcmNoQmFyID0gKHtcbiAgdmFsdWUsXG4gIGhhbmRsZUNoYW5nZSxcbn06IHtcbiAgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGFuZGxlQ2hhbmdlOiAoKSA9PiB7fTtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWdyYXktMjAwIHAtMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gcmVsYXRpdmVcIj5cbiAgICAgICAgPFNlYXJjaFNoYXJwSWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwXCIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwbC0xMCBweC00IHB5LTIgcm91bmRlZC1sZyBib3JkZXIgZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxIb21lU2hhcnBJY29uIGNsYXNzTmFtZT1cImgtOCB3LThcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSG9tZVNoYXJwSWNvbiIsIlNlYXJjaFNoYXJwSWNvbiIsIlNlYXJjaEJhciIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SearchBar.tsx\n"));

/***/ })

});