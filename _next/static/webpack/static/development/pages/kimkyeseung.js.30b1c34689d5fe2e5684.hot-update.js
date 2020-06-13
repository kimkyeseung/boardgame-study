webpackHotUpdate("static/development/pages/kimkyeseung.js",{

/***/ "./kimkyeseung/src/components/Board.jsx":
/*!**********************************************!*\
  !*** ./kimkyeseung/src/components/Board.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Card */ \"./kimkyeseung/src/components/Card.jsx\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Kyeseung/Documents/boardgame-study/kimkyeseung/src/components/Board.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n  display: flex;\\n  justify-content: space-between;\\n  max-width: 900px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n  margin-top: 25px;\\n  width: 168px;\\n  text-align: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar Winner = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject());\nvar Row = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject2());\n_c = Row;\n\nvar Board = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Board, _Component);\n\n  var _super = _createSuper(Board);\n\n  function Board(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Board);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    _this.buyDevelopment = _this.buyDevelopment.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Board, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"buyDevelopment\",\n    value: function buyDevelopment(id) {\n      this.props.moves.buyDevelopment(id);\n    }\n  }, {\n    key: \"isActive\",\n    value: function isActive(id) {\n      if (!this.props.isActive) return false;\n      if (this.props.G.cells[id] !== null) return false;\n      return true;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      // let winner = null\n      // if (this.props.ctx.gameover) {\n      //   winner = this.props.ctx.gameover.winner !== undefined\n      //     ? <Winner>Winner: {this.props.ctx.gameover.winner}</Winner>\n      //     : <Winner>Draw!</Winner>\n      // }\n      var _this$props = this.props,\n          G = _this$props.G,\n          moves = _this$props.moves,\n          ctx = _this$props.ctx;\n      var _G$board = G.board,\n          dev1A = _G$board.dev1A,\n          dev1B = _G$board.dev1B,\n          dev1C = _G$board.dev1C,\n          dev1D = _G$board.dev1D,\n          dev2A = _G$board.dev2A,\n          dev2B = _G$board.dev2B,\n          dev2C = _G$board.dev2C,\n          dev2D = _G$board.dev2D,\n          dev3A = _G$board.dev3A,\n          dev3B = _G$board.dev3B,\n          dev3C = _G$board.dev3C,\n          dev3D = _G$board.dev3D;\n      var developmentOne = [dev1A, dev1B, dev1C, dev1D];\n      var developmentTwo = [dev2A, dev2B, dev2C, dev2D];\n      var developmentThree = [dev3A, dev3B, dev3C, dev3D];\n      var turn = ctx.currentPlayer;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 7\n        }\n      }, __jsx(Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }\n      }, developmentThree.map(function (dev) {\n        return __jsx(_Card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          key: dev.id,\n          onClick: function onClick(ev) {\n            moves.buyDevelopment(dev.id);\n          },\n          grade: 3,\n          development: dev,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }\n        });\n      })), __jsx(Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 9\n        }\n      }, developmentTwo.map(function (dev) {\n        return __jsx(_Card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          key: dev.id,\n          onClick: function onClick(ev) {\n            moves.buyDevelopment(dev.id);\n          },\n          grade: 2,\n          development: dev,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }\n        });\n      })), __jsx(Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 9\n        }\n      }, developmentOne.map(function (dev) {\n        return __jsx(_Card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          key: dev.id,\n          onClick: function onClick(ev) {\n            moves.buyDevelopment(dev.id);\n          },\n          grade: 1,\n          development: dev,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }\n        });\n      })), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return Board;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Board, \"propTypes\", {\n  G: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  ctx: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  moves: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  playerID: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,\n  isActive: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,\n  isMultiplayer: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\nvar _c;\n\n$RefreshReg$(_c, \"Row\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9raW1reWVzZXVuZy9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3g/N2YyOCJdLCJuYW1lcyI6WyJXaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJSb3ciLCJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJidXlEZXZlbG9wbWVudCIsImJpbmQiLCJpZCIsIm1vdmVzIiwiaXNBY3RpdmUiLCJHIiwiY2VsbHMiLCJjdHgiLCJib2FyZCIsImRldjFBIiwiZGV2MUIiLCJkZXYxQyIsImRldjFEIiwiZGV2MkEiLCJkZXYyQiIsImRldjJDIiwiZGV2MkQiLCJkZXYzQSIsImRldjNCIiwiZGV2M0MiLCJkZXYzRCIsImRldmVsb3BtZW50T25lIiwiZGV2ZWxvcG1lbnRUd28iLCJkZXZlbG9wbWVudFRocmVlIiwidHVybiIsImN1cnJlbnRQbGF5ZXIiLCJtYXAiLCJkZXYiLCJldiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJwbGF5ZXJJRCIsInN0cmluZyIsImJvb2wiLCJpc011bHRpcGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQywwREFBTSxDQUFDQyxHQUFWLG1CQUFaO0FBTUEsSUFBTUMsR0FBRyxHQUFHRiwwREFBTSxDQUFDQyxHQUFWLG9CQUFUO0tBQU1DLEc7O0lBTUFDLEs7Ozs7O0FBU0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIseUdBQXRCO0FBSGlCO0FBSWxCOzs7O3dDQUVtQixDQUVuQjs7O21DQUVjQyxFLEVBQUk7QUFDakIsV0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCSCxj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R0FBRztBQUFBLGVBQ3JCLE1BQUMsOENBQUQ7QUFBTyxhQUFHLEVBQUVBLEdBQUcsQ0FBQ3pCLEVBQWhCO0FBQW9CLGlCQUFPLEVBQUUsaUJBQUEwQixFQUFFLEVBQUk7QUFDakN6QixpQkFBSyxDQUFDSCxjQUFOLENBQXFCMkIsR0FBRyxDQUFDekIsRUFBekI7QUFDRCxXQUZEO0FBRUcsZUFBSyxFQUFFLENBRlY7QUFFYSxxQkFBVyxFQUFFeUIsR0FGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURxQjtBQUFBLE9BQXRCLENBREgsQ0FmRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBdEJGLENBREY7QUE0QkQ7Ozs7RUEzRWlCRSwrQzs7MEZBQWRoQyxLLGVBQ2U7QUFDakJRLEdBQUMsRUFBRXlCLGlEQUFTLENBQUNDLEdBQVYsQ0FBY0MsVUFEQTtBQUVqQnpCLEtBQUcsRUFBRXVCLGlEQUFTLENBQUNDLEdBQVYsQ0FBY0MsVUFGRjtBQUdqQjdCLE9BQUssRUFBRTJCLGlEQUFTLENBQUNDLEdBQVYsQ0FBY0MsVUFISjtBQUlqQkMsVUFBUSxFQUFFSCxpREFBUyxDQUFDSSxNQUpIO0FBS2pCOUIsVUFBUSxFQUFFMEIsaURBQVMsQ0FBQ0ssSUFMSDtBQU1qQkMsZUFBYSxFQUFFTixpREFBUyxDQUFDSztBQU5SLEM7O0FBNkVOdEMsb0VBQWYiLCJmaWxlIjoiLi9raW1reWVzZXVuZy9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNwYWNlIGZyb20gJy4vQ2FyZCdcblxuY29uc3QgV2lubmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IDE2OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbmBcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIEc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBjdHg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBtb3ZlczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIHBsYXllcklEOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc011bHRpcGxheWVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgIHRoaXMuYnV5RGV2ZWxvcG1lbnQgPSB0aGlzLmJ1eURldmVsb3BtZW50LmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBidXlEZXZlbG9wbWVudChpZCkge1xuICAgIHRoaXMucHJvcHMubW92ZXMuYnV5RGV2ZWxvcG1lbnQoaWQpXG4gIH1cblxuICBpc0FjdGl2ZShpZCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc0FjdGl2ZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLnByb3BzLkcuY2VsbHNbaWRdICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAvLyBsZXQgd2lubmVyID0gbnVsbFxuICAgIC8vIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlcikge1xuICAgIC8vICAgd2lubmVyID0gdGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIud2lubmVyICE9PSB1bmRlZmluZWRcbiAgICAvLyAgICAgPyA8V2lubmVyPldpbm5lcjoge3RoaXMucHJvcHMuY3R4LmdhbWVvdmVyLndpbm5lcn08L1dpbm5lcj5cbiAgICAvLyAgICAgOiA8V2lubmVyPkRyYXchPC9XaW5uZXI+XG4gICAgLy8gfVxuICAgIGNvbnN0IHsgRywgbW92ZXMsIGN0eCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtcbiAgICAgIGRldjFBLCBkZXYxQiwgZGV2MUMsIGRldjFELFxuICAgICAgZGV2MkEsIGRldjJCLCBkZXYyQywgZGV2MkQsXG4gICAgICBkZXYzQSwgZGV2M0IsIGRldjNDLCBkZXYzRFxuICAgIH0gPSBHLmJvYXJkXG4gICAgY29uc3QgZGV2ZWxvcG1lbnRPbmUgPSBbZGV2MUEsIGRldjFCLCBkZXYxQywgZGV2MURdXG4gICAgY29uc3QgZGV2ZWxvcG1lbnRUd28gPSBbZGV2MkEsIGRldjJCLCBkZXYyQywgZGV2MkRdXG4gICAgY29uc3QgZGV2ZWxvcG1lbnRUaHJlZSA9IFtkZXYzQSwgZGV2M0IsIGRldjNDLCBkZXYzRF1cbiAgICBjb25zdCB0dXJuID0gY3R4LmN1cnJlbnRQbGF5ZXJcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7ZGV2ZWxvcG1lbnRUaHJlZS5tYXAoZGV2ID0+IChcbiAgICAgICAgICAgIDxTcGFjZSBrZXk9e2Rldi5pZH0gb25DbGljaz17ZXYgPT4ge1xuICAgICAgICAgICAgICBtb3Zlcy5idXlEZXZlbG9wbWVudChkZXYuaWQpXG4gICAgICAgICAgICB9fSBncmFkZT17M30gZGV2ZWxvcG1lbnQ9e2Rldn0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge2RldmVsb3BtZW50VHdvLm1hcChkZXYgPT4gKFxuICAgICAgICAgICAgPFNwYWNlIGtleT17ZGV2LmlkfSBvbkNsaWNrPXtldiA9PiB7XG4gICAgICAgICAgICAgIG1vdmVzLmJ1eURldmVsb3BtZW50KGRldi5pZClcbiAgICAgICAgICAgIH19IGdyYWRlPXsyfSBkZXZlbG9wbWVudD17ZGV2fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7ZGV2ZWxvcG1lbnRPbmUubWFwKGRldiA9PiAoXG4gICAgICAgICAgICA8U3BhY2Uga2V5PXtkZXYuaWR9IG9uQ2xpY2s9e2V2ID0+IHtcbiAgICAgICAgICAgICAgbW92ZXMuYnV5RGV2ZWxvcG1lbnQoZGV2LmlkKVxuICAgICAgICAgICAgfX0gZ3JhZGU9ezF9IGRldmVsb3BtZW50PXtkZXZ9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./kimkyeseung/src/components/Board.jsx\n");

/***/ })

})