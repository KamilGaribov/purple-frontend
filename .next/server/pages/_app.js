/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Provider */ \"./components/Provider.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! google-map-react */ \"google-map-react\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/variables */ \"./components/variables.js\");\nvar _jsxFileName = \"/home/kamil/Desktop/purple-frontend/pages/_app.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {\n  componentDidMount() {\n    var url = window.location.pathname;\n\n    if (url == \"/\") {\n      document.querySelector(\"ul.navbar-nav li a[data-name=home]\").classList.add(\"active\");\n    } else if (url.startsWith(\"/vitrin\")) {\n      document.querySelector(\"ul.navbar-nav li a[data-name=vitrin]\").classList.add(\"active\");\n    } else if (url.startsWith(\"/marsipan\")) {\n      document.querySelector(\"ul.navbar-nav li a[data-name=marsipan]\").classList.add(\"active\");\n    } else if (url.startsWith(\"/kafe\")) {\n      document.querySelector(\"ul.navbar-nav li a[data-name=cafe]\").classList.add(\"active\");\n    } else if (url.startsWith(\"/gul\")) {\n      document.querySelector(\"ul.navbar-nav li a[data-name=flower]\").classList.add(\"active\");\n    } else if (url.startsWith(\"/xonca\")) {\n      document.querySelector(\"ul.navbar-nav li a[data-name=xonca]\").classList.add(\"active\");\n    } else if (url.startsWith(\"/haqqimizda\")) {\n      document.querySelector(\"ul.navbar-nav li a[data-name=about]\").classList.add(\"active\");\n    } else if (url == \"/ff/\") {\n      fetch(`${_components_variables__WEBPACK_IMPORTED_MODULE_9__.apiUrl}ff/`);\n      window.location = \"http://purplecakeboutique.az\";\n    } else if (url == \"/fi/\") {\n      fetch(`${_components_variables__WEBPACK_IMPORTED_MODULE_9__.apiUrl}fi/`);\n      window.location = \"http://purplecakeboutique.az\";\n    } else if (url == \"/fo/\") {\n      fetch(`${_components_variables__WEBPACK_IMPORTED_MODULE_9__.apiUrl}fo/`);\n      window.location = \"http://purplecakeboutique.az\";\n    }\n\n    var basket = document.querySelector(\"#basketCount\");\n\n    if (window.localStorage.getItem(\"basket\")) {\n      basket.innerHTML = JSON.parse(window.localStorage.getItem(\"basket\")).length;\n    } else {\n      basket.innerHTML = 0;\n    }\n\n    next_router__WEBPACK_IMPORTED_MODULE_7___default().events.on(\"routeChangeComplete\", url => {\n      var basket = document.querySelector(\"#basketCount\");\n\n      if (window.localStorage.getItem(\"basket\")) {\n        basket.innerHTML = JSON.parse(window.localStorage.getItem(\"basket\")).length;\n      } else {\n        basket.innerHTML = 0;\n      }\n    });\n  }\n\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }\n    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }\n    }, __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 11\n      }\n    }, \"Purple Cake Boutique\"), __jsx(\"link\", {\n      rel: \"icon\",\n      href: \"/favicon.ico\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }\n    }), __jsx(\"meta\", {\n      name: \"description\",\n      property: \"og:title\",\n      content: \"\\\"The Purple Cake Boutique\\\" \\xE7ox l\\u0259zz\\u0259tli v\\u0259 \\xF6z\\u0259l s\\u0259n\\u0259t \\u0259s\\u0259ri olan tortlar t\\u0259qdim edir...\",\n      key: \"title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 11\n      }\n    }), __jsx(\"script\", {\n      async: true,\n      src: \"https://www.googletagmanager.com/gtag/js?id=G-SLPMSG94V7\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }\n    }), __jsx(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-E3JVYYNCR5', {\n              page_path: window.location.pathname,\n            });\n          `\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }\n    })), __jsx(_components_Provider__WEBPACK_IMPORTED_MODULE_2__.default, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }\n    }, __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 11\n      }\n    }))), __jsx(\"div\", {\n      id: \"popup-map\",\n      className: \"display-none\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      id: \"popup-map-inner\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 11\n      }\n    }, __jsx((google_map_react__WEBPACK_IMPORTED_MODULE_8___default()), {\n      bootstrapURLKeys: {\n        key: \"AIzaSyDOevhnBcgnunLKBjvbup6Ra6P-Obox-lY\"\n      },\n      defaultCenter: {\n        lat: 40.397456057446895,\n        lng: 49.86928900875125\n      },\n      defaultZoom: 16,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 13\n      }\n    }, __jsx(_components_variables__WEBPACK_IMPORTED_MODULE_9__.Marker, {\n      lat: 40.397456057446895,\n      lng: 49.86928900875125,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 15\n      }\n    })))), __jsx(\"script\", {\n      src: \"/js/theme.js\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }\n    }), __jsx(\"script\", {\n      src: \"/js/jquery-3.2.1.js\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }\n    }), __jsx(\"script\", {\n      src: \"/js/popper.js\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }\n    }), __jsx(\"script\", {\n      src: \"/js/bootstrap.js\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWtlLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQXBwIiwiY29tcG9uZW50RGlkTW91bnQiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwic3RhcnRzV2l0aCIsImZldGNoIiwiYXBpVXJsIiwiYmFza2V0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlubmVySFRNTCIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsIlJvdXRlciIsInJlbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwiX19odG1sIiwia2V5IiwibGF0IiwibG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsS0FBTixTQUFvQkMsaURBQXBCLENBQXdCO0FBQ3RCQyxtQkFBaUIsR0FBRztBQUNsQixRQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBMUI7O0FBQ0EsUUFBSUgsR0FBRyxJQUFJLEdBQVgsRUFBZ0I7QUFDZEksY0FBUSxDQUNMQyxhQURILENBQ2lCLG9DQURqQixFQUVHQyxTQUZILENBRWFDLEdBRmIsQ0FFaUIsUUFGakI7QUFHRCxLQUpELE1BSU8sSUFBSVAsR0FBRyxDQUFDUSxVQUFKLENBQWUsU0FBZixDQUFKLEVBQStCO0FBQ3BDSixjQUFRLENBQ0xDLGFBREgsQ0FDaUIsc0NBRGpCLEVBRUdDLFNBRkgsQ0FFYUMsR0FGYixDQUVpQixRQUZqQjtBQUdELEtBSk0sTUFJQSxJQUFJUCxHQUFHLENBQUNRLFVBQUosQ0FBZSxXQUFmLENBQUosRUFBaUM7QUFDdENKLGNBQVEsQ0FDTEMsYUFESCxDQUNpQix3Q0FEakIsRUFFR0MsU0FGSCxDQUVhQyxHQUZi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REYsQ0FqQ0YsRUFpREU7QUFBUSxTQUFHLEVBQUMsY0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BakRGLEVBa0RFO0FBQVEsU0FBRyxFQUFDLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFsREYsRUFtREU7QUFBUSxTQUFHLEVBQUMsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbkRGLEVBb0RFO0FBQVEsU0FBRyxFQUFDLGtCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFwREYsQ0FERjtBQXdERDs7QUFySHFCOztBQXdIeEIsK0RBQWU3QixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgUHJvdmlkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvdmlkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSBcImdvb2dsZS1tYXAtcmVhY3RcIjtcbmltcG9ydCB7IE1hcmtlciwgYXBpVXJsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmFyaWFibGVzXCI7XG5cblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmICh1cmwgPT0gXCIvXCIpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwidWwubmF2YmFyLW5hdiBsaSBhW2RhdGEtbmFtZT1ob21lXVwiKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2UgaWYgKHVybC5zdGFydHNXaXRoKFwiL3ZpdHJpblwiKSkge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5uYXZiYXItbmF2IGxpIGFbZGF0YS1uYW1lPXZpdHJpbl1cIilcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIGlmICh1cmwuc3RhcnRzV2l0aChcIi9tYXJzaXBhblwiKSkge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5uYXZiYXItbmF2IGxpIGFbZGF0YS1uYW1lPW1hcnNpcGFuXVwiKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2UgaWYgKHVybC5zdGFydHNXaXRoKFwiL2thZmVcIikpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwidWwubmF2YmFyLW5hdiBsaSBhW2RhdGEtbmFtZT1jYWZlXVwiKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2UgaWYgKHVybC5zdGFydHNXaXRoKFwiL2d1bFwiKSkge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5uYXZiYXItbmF2IGxpIGFbZGF0YS1uYW1lPWZsb3dlcl1cIilcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIGlmICh1cmwuc3RhcnRzV2l0aChcIi94b25jYVwiKSkge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5uYXZiYXItbmF2IGxpIGFbZGF0YS1uYW1lPXhvbmNhXVwiKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2UgaWYgKHVybC5zdGFydHNXaXRoKFwiL2hhcXFpbWl6ZGFcIikpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwidWwubmF2YmFyLW5hdiBsaSBhW2RhdGEtbmFtZT1hYm91dF1cIilcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIGVsc2UgaWYodXJsID09IFwiL2ZmL1wiKXtcbiAgICAgIGZldGNoKGAke2FwaVVybH1mZi9gKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cDovL3B1cnBsZWNha2Vib3V0aXF1ZS5helwiXG4gICAgfVxuICAgIGVsc2UgaWYodXJsID09IFwiL2ZpL1wiKXtcbiAgICAgIGZldGNoKGAke2FwaVVybH1maS9gKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cDovL3B1cnBsZWNha2Vib3V0aXF1ZS5helwiXG4gICAgfVxuICAgIGVsc2UgaWYodXJsID09IFwiL2ZvL1wiKXtcbiAgICAgIGZldGNoKGAke2FwaVVybH1mby9gKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cDovL3B1cnBsZWNha2Vib3V0aXF1ZS5helwiXG4gICAgfVxuICAgIHZhciBiYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhc2tldENvdW50XCIpO1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYXNrZXRcIikpIHtcbiAgICAgIGJhc2tldC5pbm5lckhUTUwgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhc2tldFwiKSkubGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2tldC5pbm5lckhUTUwgPSAwO1xuICAgIH1cbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAodXJsKSA9PiB7XG4gICAgICB2YXIgYmFza2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXNrZXRDb3VudFwiKTtcbiAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYXNrZXRcIikpIHtcbiAgICAgICAgYmFza2V0LmlubmVySFRNTCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFza2V0XCIpKS5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2tldC5pbm5lckhUTUwgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UHVycGxlIENha2UgQm91dGlxdWU8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgICAgY29udGVudD0nXCJUaGUgUHVycGxlIENha2UgQm91dGlxdWVcIiDDp294IGzJmXp6yZl0bGkgdsmZIMO2esmZbCBzyZluyZl0IMmZc8mZcmkgb2xhbiB0b3J0bGFyIHTJmXFkaW0gZWRpci4uLidcbiAgICAgICAgICAgIGtleT1cInRpdGxlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLVNMUE1TRzk0VjdcIi8+XG4gICAgICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLUUzSlZZWU5DUjUnLCB7XG4gICAgICAgICAgICAgIHBhZ2VfcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB7LyogPHNjcmlwdD5cbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctU0xQTVNHOTRWNycpO1xuICAgICAgICAgIDwvc2NyaXB0PiAqL31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8ZGl2IGlkPVwicG9wdXAtbWFwXCIgY2xhc3NOYW1lPVwiZGlzcGxheS1ub25lXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInBvcHVwLW1hcC1pbm5lclwiPlxuICAgICAgICAgICAgPEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcbiAgICAgICAgICAgICAgICBrZXk6IFwiQUl6YVN5RE9ldmhuQmNnbnVuTEtCanZidXA2UmE2UC1PYm94LWxZXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3tcbiAgICAgICAgICAgICAgICBsYXQ6IDQwLjM5NzQ1NjA1NzQ0Njg5NSxcbiAgICAgICAgICAgICAgICBsbmc6IDQ5Ljg2OTI4OTAwODc1MTI1LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkZWZhdWx0Wm9vbT17MTZ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNYXJrZXIgbGF0PXs0MC4zOTc0NTYwNTc0NDY4OTV9IGxuZz17NDkuODY5Mjg5MDA4NzUxMjV9IC8+XG4gICAgICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvdGhlbWUuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvanF1ZXJ5LTMuMi4xLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL3BvcHBlci5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9ib290c3RyYXAuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("google-map-react");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js","components_Provider_js-components_navbar_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();