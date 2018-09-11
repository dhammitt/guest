webpackHotUpdate(5,{

/***/ "./lib/withLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__ = __webpack_require__("./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__("./lib/context.js");
var _jsxFileName = "/Users/d-rh/Projects/guest/lib/withLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */







function withLayout(BaseComponent) {
  var App =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props, context) {
      var _this;

      _classCallCheck(this, App);

      _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));
      _this.pageContext = _this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */])();
      return _this;
    }

    _createClass(App, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.pageContext = this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */])();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["MuiThemeProvider"], {
          theme: this.pageContext.theme,
          sheetsManager: this.pageContext.sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BaseComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }))));
      }
    }]);

    return App;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  App.proptypes = {
    pageContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object // eslint-disable-line

  };
  App.defaultProps = {
    pageContext: null
  };

  App.getInitialProps = function (ctx) {
    if (BaseComponent.getinitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };

  return App;
}

/* harmony default export */ __webpack_exports__["a"] = (withLayout);

/***/ })

})
//# sourceMappingURL=5.c900174a28f6a44cc8ef.hot-update.js.map