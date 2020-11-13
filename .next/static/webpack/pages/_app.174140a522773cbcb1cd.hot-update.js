webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Provider */ \"./components/Provider.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _components_variables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/variables */ \"./components/variables.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/kamil/Desktop/Purple/purple-frontend/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n // function MyApp({ Component, pageProps }) {\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, MyApp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var decodedCookie = decodeURIComponent(document.cookie);\n      var cookies = decodedCookie.split(\"; \");\n      var basket = document.querySelector(\"#basketCount\");\n      var count = 0;\n\n      for (var i = 0; i < cookies.length; i++) {\n        if (cookies[i].split(\"=\")[1] == \"added to shop cart\") {\n          count++;\n        }\n      }\n\n      basket.innerHTML = count;\n      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.events.on(\"routeChangeComplete\", function (url) {\n        var decodedCookie = decodeURIComponent(document.cookie);\n        var cookies = decodedCookie.split(\"; \");\n        var basket = document.querySelector(\"#basketCount\");\n        var count = 0;\n\n        for (var _i = 0; _i < cookies.length; _i++) {\n          if (cookies[_i].split(\"=\")[1] == \"added to shop cart\") {\n            count++;\n          }\n        }\n\n        basket.innerHTML = count;\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }\n      }, \"Purple Cake Boutique\"), __jsx(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:title\",\n        content: \"The Purple Cake Boutique offers cakes which are delicious and unique work of art...\",\n        key: \"title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }\n      })), __jsx(_components_Provider__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }\n      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }\n      }))), __jsx(\"div\", {\n        id: \"popup-map\",\n        className: \"display-none\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        id: \"popup-map-inner\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }\n      }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        bootstrapURLKeys: {\n          key: \"AIzaSyDOevhnBcgnunLKBjvbup6Ra6P-Obox-lY\"\n        },\n        defaultCenter: {\n          lat: 40.397456057446895,\n          lng: 49.86928900875125\n        },\n        defaultZoom: 16,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }\n      }, __jsx(_components_variables__WEBPACK_IMPORTED_MODULE_15__[\"Marker\"], {\n        lat: 40.397456057446895,\n        lng: 49.86928900875125,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 15\n        }\n      })))), __jsx(\"script\", {\n        src: \"/js/theme.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 9\n        }\n      }), __jsx(\"script\", {\n        src: \"/js/jquery-3.2.1.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 9\n        }\n      }), __jsx(\"script\", {\n        src: \"/js/popper.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 9\n        }\n      }), __jsx(\"script\", {\n        src: \"/js/bootstrap.js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiZGVjb2RlZENvb2tpZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRvY3VtZW50IiwiY29va2llIiwiY29va2llcyIsInNwbGl0IiwiYmFza2V0IiwicXVlcnlTZWxlY3RvciIsImNvdW50IiwiaSIsImxlbmd0aCIsImlubmVySFRNTCIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwidXJsIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJrZXkiLCJsYXQiLCJsbmciLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0lBQ01BLEs7Ozs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFVBQUlDLGFBQWEsR0FBR0Msa0JBQWtCLENBQUNDLFFBQVEsQ0FBQ0MsTUFBVixDQUF0QztBQUNBLFVBQUlDLE9BQU8sR0FBR0osYUFBYSxDQUFDSyxLQUFkLENBQW9CLElBQXBCLENBQWQ7QUFDQSxVQUFJQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxPQUFPLENBQUNNLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFlBQUlMLE9BQU8sQ0FBQ0ssQ0FBRCxDQUFQLENBQVdKLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBdEIsS0FBNEIsb0JBQWhDLEVBQXNEO0FBQ3BERyxlQUFLO0FBQ047QUFDRjs7QUFDREYsWUFBTSxDQUFDSyxTQUFQLEdBQW1CSCxLQUFuQjtBQUNBSSx5REFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm92aWRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tIFwiZ29vZ2xlLW1hcC1yZWFjdFwiO1xuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmFyaWFibGVzXCI7XG5cbi8vIGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xuICAgIHZhciBjb29raWVzID0gZGVjb2RlZENvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIHZhciBiYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhc2tldENvdW50XCIpO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29va2llc1tpXS5zcGxpdChcIj1cIilbMV0gPT0gXCJhZGRlZCB0byBzaG9wIGNhcnRcIikge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBiYXNrZXQuaW5uZXJIVE1MID0gY291bnQ7XG4gICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKHVybCkgPT4ge1xuICAgICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgICAgIHZhciBjb29raWVzID0gZGVjb2RlZENvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgICAgdmFyIGJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFza2V0Q291bnRcIik7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjb29raWVzW2ldLnNwbGl0KFwiPVwiKVsxXSA9PSBcImFkZGVkIHRvIHNob3AgY2FydFwiKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYmFza2V0LmlubmVySFRNTCA9IGNvdW50O1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UHVycGxlIENha2UgQm91dGlxdWU8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzp0aXRsZVwiXG4gICAgICAgICAgICBjb250ZW50PVwiVGhlIFB1cnBsZSBDYWtlIEJvdXRpcXVlIG9mZmVycyBjYWtlcyB3aGljaCBhcmUgZGVsaWNpb3VzIGFuZCB1bmlxdWUgd29yayBvZiBhcnQuLi5cIlxuICAgICAgICAgICAga2V5PVwidGl0bGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPGRpdiBpZD1cInBvcHVwLW1hcFwiIGNsYXNzTmFtZT1cImRpc3BsYXktbm9uZVwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC1tYXAtaW5uZXJcIj5cbiAgICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7XG4gICAgICAgICAgICAgICAga2V5OiBcIkFJemFTeURPZXZobkJjZ251bkxLQmp2YnVwNlJhNlAtT2JveC1sWVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt7XG4gICAgICAgICAgICAgICAgbGF0OiA0MC4zOTc0NTYwNTc0NDY4OTUsXG4gICAgICAgICAgICAgICAgbG5nOiA0OS44NjkyODkwMDg3NTEyNSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGVmYXVsdFpvb209ezE2fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWFya2VyIGxhdD17NDAuMzk3NDU2MDU3NDQ2ODk1fSBsbmc9ezQ5Ljg2OTI4OTAwODc1MTI1fSAvPlxuICAgICAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL3RoZW1lLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2pxdWVyeS0zLjIuMS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9wb3BwZXIuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvYm9vdHN0cmFwLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})