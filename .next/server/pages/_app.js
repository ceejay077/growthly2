/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config.json */ \"./config/config.json\");\n/* harmony import */ var _config_theme_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/theme.json */ \"./config/theme.json\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-gtm-module */ \"react-gtm-module\");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    // import google font css\n    const pf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.primary;\n    const sf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.secondary;\n    const [fontcss, setFontcss] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(`https://fonts.googleapis.com/css2?family=${pf}${sf ? \"&family=\" + sf : \"\"}&display=swap`).then((res)=>res.text().then((css)=>setFontcss(css)));\n    }, [\n        pf,\n        sf\n    ]);\n    // google tag manager (gtm)\n    const tagManagerArgs = {\n        gtmId: _config_config_json__WEBPACK_IMPORTED_MODULE_1__.params.tag_manager_id\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n             false && 0;\n        }, 5000);\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Naveen/Documents/GitHub/growthly2/pages/_app.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                        dangerouslySetInnerHTML: {\n                            __html: `${fontcss}`\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Naveen/Documents/GitHub/growthly2/pages/_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, maximum-scale=5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Naveen/Documents/GitHub/growthly2/pages/_app.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Naveen/Documents/GitHub/growthly2/pages/_app.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/Naveen/Documents/GitHub/growthly2/pages/_app.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Y7QUFDVjtBQUNlO0FBQ0Y7QUFDZjtBQUUzQixNQUFNTSxNQUFNLENBQUMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBSztJQUN4Qyx5QkFBeUI7SUFDekIsTUFBTUMsS0FBS1IseUVBQStCO0lBQzFDLE1BQU1ZLEtBQUtaLDJFQUFpQztJQUM1QyxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBO0lBQ3RDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RjLE1BQ0UsQ0FBQyx5Q0FBeUMsRUFBRVIsR0FBRyxFQUM3Q0ksS0FBSyxhQUFhQSxLQUFLLEVBQUUsQ0FDMUIsYUFBYSxDQUFDLEVBQ2ZLLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLEdBQUdGLElBQUksQ0FBQyxDQUFDRyxNQUFRTCxXQUFXSztJQUN0RCxHQUFHO1FBQUNaO1FBQUlJO0tBQUc7SUFFWCwyQkFBMkI7SUFDM0IsTUFBTVMsaUJBQWlCO1FBQ3JCQyxPQUFPdkIsc0VBQTRCO0lBQ3JDO0lBQ0FHLGdEQUFTQSxDQUFDLElBQU07UUFDZHVCLFdBQVcsSUFBTTtZQXpCckIsTUEyQm9DLElBQzVCckIsQ0FBcUNpQjtRQUN6QyxHQUFHO0lBQ0gsdURBQXVEO0lBQ3pELEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ3BCLGtEQUFJQTs7a0NBRUgsOERBQUMwQjt3QkFDQ0MsS0FBSTt3QkFDSkMsTUFBSzt3QkFDTEMsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFDQ0MseUJBQXlCOzRCQUN2QkMsUUFBUSxDQUFDLEVBQUVuQixRQUFRLENBQUM7d0JBQ3RCOzs7Ozs7a0NBR0YsOERBQUNvQjt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDOUI7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FuZHJvbWVkYS1saWdodC1uZXh0anMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiQGNvbmZpZy9jb25maWcuanNvblwiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIkBjb25maWcvdGhlbWUuanNvblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhZ01hbmFnZXIgZnJvbSBcInJlYWN0LWd0bS1tb2R1bGVcIjtcclxuaW1wb3J0IFwic3R5bGVzL3N0eWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAvLyBpbXBvcnQgZ29vZ2xlIGZvbnQgY3NzXHJcbiAgY29uc3QgcGYgPSB0aGVtZS5mb250cy5mb250X2ZhbWlseS5wcmltYXJ5O1xyXG4gIGNvbnN0IHNmID0gdGhlbWUuZm9udHMuZm9udF9mYW1pbHkuc2Vjb25kYXJ5O1xyXG4gIGNvbnN0IFtmb250Y3NzLCBzZXRGb250Y3NzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT0ke3BmfSR7XHJcbiAgICAgICAgc2YgPyBcIiZmYW1pbHk9XCIgKyBzZiA6IFwiXCJcclxuICAgICAgfSZkaXNwbGF5PXN3YXBgXHJcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKS50aGVuKChjc3MpID0+IHNldEZvbnRjc3MoY3NzKSkpO1xyXG4gIH0sIFtwZiwgc2ZdKTtcclxuXHJcbiAgLy8gZ29vZ2xlIHRhZyBtYW5hZ2VyIChndG0pXHJcbiAgY29uc3QgdGFnTWFuYWdlckFyZ3MgPSB7XHJcbiAgICBndG1JZDogY29uZmlnLnBhcmFtcy50YWdfbWFuYWdlcl9pZCxcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgY29uZmlnLnBhcmFtcy50YWdfbWFuYWdlcl9pZCAmJlxyXG4gICAgICAgIFRhZ01hbmFnZXIuaW5pdGlhbGl6ZSh0YWdNYW5hZ2VyQXJncyk7XHJcbiAgICB9LCA1MDAwKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICB7LyogZ29vZ2xlIGZvbnQgY3NzICovfVxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCJcclxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwidHJ1ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3R5bGVcclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgIF9faHRtbDogYCR7Zm9udGNzc31gLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiByZXNwb25zaXZlIG1ldGEgKi99XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9NVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiY29uZmlnIiwidGhlbWUiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWdNYW5hZ2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicGYiLCJmb250cyIsImZvbnRfZmFtaWx5IiwicHJpbWFyeSIsInNmIiwic2Vjb25kYXJ5IiwiZm9udGNzcyIsInNldEZvbnRjc3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiY3NzIiwidGFnTWFuYWdlckFyZ3MiLCJndG1JZCIsInBhcmFtcyIsInRhZ19tYW5hZ2VyX2lkIiwic2V0VGltZW91dCIsImluaXRpYWxpemUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3NzT3JpZ2luIiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"site":{"title":"Andromeda Light Nextjs","base_url":"/","favicon":"/images/favicon.png","logo":"/images/logo.svg","logo_width":"240","logo_height":"34","logo_text":"Andromeda"},"settings":{"pagination":6,"summary_length":200,"blog_folder":"posts"},"params":{"tag_manager_id":"","contact_form_action":"#","footer_content":"Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus, sed condimentum volutpat.","copyright":"Designed & Developed By [Themefisher](https:www.themefisher.com)"},"contact_info":{"phone":"+887887998","email":"info@andromeda.io","location":"2118 Thornridge Cir. Syracuse, Connecticut 35624"},"nav_button":{"enable":true,"label":"Download Now","link":"https://themefisher.com/products/andromeda-light-nextjs"},"metadata":{"meta_author":"Themefisher","meta_image":"/images/og-image.png","meta_description":"Andromeda-light Nextjs Blog Template"},"call_to_action":{"enable":true,"title":"Get Andromeda Now","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas </br> Werat viverra id et aliquet. vulputate egestas sollicitudin.","button":{"label":"Download The Theme","link":"https://themefisher.com/products/andromeda-light-nextjs"}},"disqus":{"enable":true,"shortname":"themefisher-template","settings":{}}}');

/***/ }),

/***/ "./config/theme.json":
/*!***************************!*\
  !*** ./config/theme.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"colors":{"default":{"theme_color":{"primary":"#5271FF","body":"#ffff","border":"#dee2e6","border_secondary":"#ffece4","theme_light":"#fffaf3","theme_dark":"#1a202c"},"text_color":{"default":"#666","dark":"#222","light":"#ceced0"}}},"fonts":{"font_family":{"primary":"Poppins:wght@400;500;600;700","primary_type":"sans-serif","secondary":"","secondary_type":""},"font_size":{"base":"16","scale":"1.246"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();