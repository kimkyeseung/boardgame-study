webpackHotUpdate("static\\development\\pages\\icemonk1202.js",{

/***/ "./actcrazy/index.js":
false,

/***/ "./actcrazy/src/App.js":
false,

/***/ "./actcrazy/src/components/Board.jsx":
false,

/***/ "./actcrazy/src/lib/game.js":
false,

/***/ "./actcrazy/src/lib/index.js":
false,

/***/ "./icemonk1202/index.js":
/*!******************************!*\
  !*** ./icemonk1202/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icemonk1202; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/App */ "./icemonk1202/src/App.js");
var _jsxFileName = "C:\\dev\\boardgame-study\\icemonk1202\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icemonk1202() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "HOME"), __jsx(_src_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}
_c = Icemonk1202;

var _c;

$RefreshReg$(_c, "Icemonk1202");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./icemonk1202/src/App.js":
/*!********************************!*\
  !*** ./icemonk1202/src/App.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var boardgame_io_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boardgame.io/react */ "./node_modules/boardgame.io/dist/esm/react.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./icemonk1202/src/lib/index.js");
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Board */ "./icemonk1202/src/components/Board.jsx");



var App = Object(boardgame_io_react__WEBPACK_IMPORTED_MODULE_0__["Client"])({
  game: _lib__WEBPACK_IMPORTED_MODULE_1__["TicTacToe"],
  board: _components_Board__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (App);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./icemonk1202/src/components/Board.jsx":
/*!**********************************************!*\
  !*** ./icemonk1202/src/components/Board.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








var _jsxFileName = "C:\\dev\\boardgame-study\\icemonk1202\\src\\components\\Board.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 25px;\n  color: #555;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  border: 3px solid #aaa;\n  background: #fff;\n  &.active {\n    cursor: pointer;\n    background: #eeffe9;\n    &:hover {\n      background: #eeffff;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  margin-top: 25px;\n  width: 168px;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Winner = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
_c = Winner;
var Cell = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].td(_templateObject2());
_c2 = Cell;

var Board = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Board, _Component);

  var _super = _createSuper(Board);

  function Board() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Board);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onClick", function (id) {
      if (_this.isActive(id)) {
        _this.props.moves.clickCell(id);
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Board, [{
    key: "isActive",
    value: function isActive(id) {
      if (!this.props.isActive) return false;
      if (this.props.G.cells[id] !== null) return false;
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tbody = [];

      for (var i = 0; i < 3; i++) {
        var cells = [];

        var _loop = function _loop(j) {
          var id = 3 * i + j;
          cells.push(__jsx(Cell, {
            key: id,
            className: _this2.isActive(id) ? 'active' : '',
            onClick: function onClick() {
              return _this2.onClick(id);
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 11
            }
          }, _this2.props.G.cells[id]));
        };

        for (var j = 0; j < 3; j++) {
          _loop(j);
        }

        tbody.push(__jsx("tr", {
          key: i,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 18
          }
        }, cells));
      }

      var winner = null;

      if (this.props.ctx.gameover) {
        winner = this.props.ctx.gameover.winner !== undefined ? __jsx(Winner, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }
        }, "Winner: ", this.props.ctx.gameover.winner) : __jsx(Winner, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }
        }, "Draw!");
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }
      }, __jsx("table", {
        id: "board",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }
      }, tbody)), winner);
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Board, "propTypes", {
  G: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,
  ctx: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,
  moves: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,
  playerID: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  isMultiplayer: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
});

/* harmony default export */ __webpack_exports__["default"] = (Board);

var _c, _c2;

$RefreshReg$(_c, "Winner");
$RefreshReg$(_c2, "Cell");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./icemonk1202/src/lib/game.js":
/*!*************************************!*\
  !*** ./icemonk1202/src/lib/game.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function IsVictory(cells) {
  var positions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  var isRowComplete = function isRowComplete(row) {
    var symbols = row.map(function (i) {
      return cells[i];
    });
    return symbols.every(function (i) {
      return i !== null && i === symbols[0];
    });
  };

  return positions.map(isRowComplete).some(function (i) {
    return i === true;
  });
}

_c = IsVictory;
var TicTacToe = {
  name: "tic-tac-toe",
  setup: function setup() {
    return {
      cells: Array(9).fill(null)
    };
  },
  moves: {
    clickCell: function clickCell(G, ctx, id) {
      if (G.cells[id] === null) {
        G.cells[id] = ctx.currentPlayer;
      }
    }
  },
  turn: {
    moveLimit: 1
  },
  endIf: function endIf(G, ctx) {
    if (IsVictory(G.cells)) {
      return {
        winner: ctx.currentPlayer
      };
    }

    if (G.cells.filter(function (c) {
      return c === null;
    }).length === 0) {
      return {
        draw: true
      };
    }
  },
  ai: {
    enumerate: function enumerate(G) {
      var moves = [];

      for (var i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({
            move: "clickCell",
            args: [i]
          });
        }
      }

      return moves;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TicTacToe);

var _c;

$RefreshReg$(_c, "IsVictory");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./icemonk1202/src/lib/index.js":
/*!**************************************!*\
  !*** ./icemonk1202/src/lib/index.js ***!
  \**************************************/
/*! exports provided: TicTacToe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./icemonk1202/src/lib/game.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicTacToe", function() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"]; });




;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/icemonk1202.js":
/*!******************************!*\
  !*** ./pages/icemonk1202.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _icemonk1202__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icemonk1202 */ "./icemonk1202/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_icemonk1202__WEBPACK_IMPORTED_MODULE_0__["default"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pY2Vtb25rMTIwMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pY2Vtb25rMTIwMi9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uL2ljZW1vbmsxMjAyL3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9pY2Vtb25rMTIwMi9zcmMvbGliL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vaWNlbW9uazEyMDIvc3JjL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pY2Vtb25rMTIwMi5qcyJdLCJuYW1lcyI6WyJJY2Vtb25rMTIwMiIsIkFwcCIsIkNsaWVudCIsImdhbWUiLCJUaWNUYWNUb2UiLCJib2FyZCIsIkJvYXJkIiwiV2lubmVyIiwic3R5bGVkIiwiZGl2IiwiQ2VsbCIsInRkIiwiaWQiLCJpc0FjdGl2ZSIsInByb3BzIiwibW92ZXMiLCJjbGlja0NlbGwiLCJHIiwiY2VsbHMiLCJ0Ym9keSIsImkiLCJqIiwicHVzaCIsIm9uQ2xpY2siLCJ3aW5uZXIiLCJjdHgiLCJnYW1lb3ZlciIsInVuZGVmaW5lZCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJwbGF5ZXJJRCIsInN0cmluZyIsImJvb2wiLCJpc011bHRpcGxheWVyIiwiSXNWaWN0b3J5IiwicG9zaXRpb25zIiwiaXNSb3dDb21wbGV0ZSIsInJvdyIsInN5bWJvbHMiLCJtYXAiLCJldmVyeSIsInNvbWUiLCJuYW1lIiwic2V0dXAiLCJBcnJheSIsImZpbGwiLCJjdXJyZW50UGxheWVyIiwidHVybiIsIm1vdmVMaW1pdCIsImVuZElmIiwiZmlsdGVyIiwiYyIsImxlbmd0aCIsImRyYXciLCJhaSIsImVudW1lcmF0ZSIsIm1vdmUiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsU0FDRTtBQUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBRWVKLG1IQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpY2Vtb25rMTIwMi5qcy44NzY4ZTc1YTZmNmNmMjZhMWUwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2xpYi91dGlscydcclxuaW1wb3J0IEFwcCBmcm9tICcuL3NyYy9BcHAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY2Vtb25rMTIwMigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpbmsgdG89XCIvXCI+SE9NRTwvTGluaz5cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2JvYXJkZ2FtZS5pby9yZWFjdCdcbmltcG9ydCB7IFRpY1RhY1RvZSB9IGZyb20gJy4vbGliJ1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9Cb2FyZCdcblxuY29uc3QgQXBwID0gQ2xpZW50KHtcbiAgZ2FtZTogVGljVGFjVG9lLFxuICBib2FyZDogQm9hcmRcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBXaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgQ2VsbCA9IHN0eWxlZC50ZGBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjYWFhO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZmZlOTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVmZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBHOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgICBjdHg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuICAgIG1vdmVzOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgICBwbGF5ZXJJRDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzTXVsdGlwbGF5ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIH1cclxuXHJcbiAgb25DbGljayA9IGlkID0+IHtcclxuICAgIGlmICh0aGlzLmlzQWN0aXZlKGlkKSkge1xyXG4gICAgICB0aGlzLnByb3BzLm1vdmVzLmNsaWNrQ2VsbChpZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKGlkKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNBY3RpdmUpIHJldHVybiBmYWxzZTtcclxuICAgIGlmICh0aGlzLnByb3BzLkcuY2VsbHNbaWRdICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB0Ym9keSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgbGV0IGNlbGxzID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAzICogaSArIGo7XHJcbiAgICAgICAgY2VsbHMucHVzaChcclxuICAgICAgICAgIDxDZWxsXHJcbiAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5pc0FjdGl2ZShpZCkgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2soaWQpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5HLmNlbGxzW2lkXX1cclxuICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgdGJvZHkucHVzaCg8dHIga2V5PXtpfT57Y2VsbHN9PC90cj4pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHdpbm5lciA9IG51bGxcclxuICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlcikge1xyXG4gICAgICB3aW5uZXIgPSB0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci53aW5uZXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gPFdpbm5lcj5XaW5uZXI6IHt0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci53aW5uZXJ9PC9XaW5uZXI+XHJcbiAgICAgICAgOiA8V2lubmVyPkRyYXchPC9XaW5uZXI+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dGFibGUgaWQ9XCJib2FyZFwiPlxyXG4gICAgICAgICAgPHRib2R5Pnt0Ym9keX08L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAge3dpbm5lcn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZFxyXG4iLCJmdW5jdGlvbiBJc1ZpY3RvcnkoY2VsbHMpIHtcclxuICBjb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgICBbMCwgMSwgMl0sXHJcbiAgICBbMywgNCwgNV0sXHJcbiAgICBbNiwgNywgOF0sXHJcbiAgICBbMCwgMywgNl0sXHJcbiAgICBbMSwgNCwgN10sXHJcbiAgICBbMiwgNSwgOF0sXHJcbiAgICBbMCwgNCwgOF0sXHJcbiAgICBbMiwgNCwgNl1cclxuICBdXHJcblxyXG4gIGNvbnN0IGlzUm93Q29tcGxldGUgPSByb3cgPT4ge1xyXG4gICAgY29uc3Qgc3ltYm9scyA9IHJvdy5tYXAoaSA9PiBjZWxsc1tpXSk7XHJcbiAgICByZXR1cm4gc3ltYm9scy5ldmVyeShpID0+IGkgIT09IG51bGwgJiYgaSA9PT0gc3ltYm9sc1swXSlcclxuICB9XHJcblxyXG4gIHJldHVybiBwb3NpdGlvbnMubWFwKGlzUm93Q29tcGxldGUpLnNvbWUoaSA9PiBpID09PSB0cnVlKVxyXG59XHJcblxyXG5jb25zdCBUaWNUYWNUb2UgPSB7XHJcbiAgbmFtZTogXCJ0aWMtdGFjLXRvZVwiLFxyXG5cclxuICBzZXR1cDogKCkgPT4gKHtcclxuICAgIGNlbGxzOiBBcnJheSg5KS5maWxsKG51bGwpXHJcbiAgfSksXHJcblxyXG4gIG1vdmVzOiB7XHJcbiAgICBjbGlja0NlbGwoRywgY3R4LCBpZCkge1xyXG4gICAgICBpZiAoRy5jZWxsc1tpZF0gPT09IG51bGwpIHtcclxuICAgICAgICBHLmNlbGxzW2lkXSA9IGN0eC5jdXJyZW50UGxheWVyXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0dXJuOiB7IG1vdmVMaW1pdDogMSB9LFxyXG5cclxuICBlbmRJZjogKEcsIGN0eCkgPT4ge1xyXG4gICAgaWYgKElzVmljdG9yeShHLmNlbGxzKSkge1xyXG4gICAgICByZXR1cm4geyB3aW5uZXI6IGN0eC5jdXJyZW50UGxheWVyIH1cclxuICAgIH1cclxuICAgIGlmIChHLmNlbGxzLmZpbHRlcihjID0+IGMgPT09IG51bGwpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBkcmF3OiB0cnVlIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhaToge1xyXG4gICAgZW51bWVyYXRlOiBHID0+IHtcclxuICAgICAgbGV0IG1vdmVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKEcuY2VsbHNbaV0gPT09IG51bGwpIHtcclxuICAgICAgICAgIG1vdmVzLnB1c2goeyBtb3ZlOiBcImNsaWNrQ2VsbFwiLCBhcmdzOiBbaV0gfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1vdmVzXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNUYWNUb2VcclxuIiwiaW1wb3J0IFRpY1RhY1RvZSBmcm9tICcuL2dhbWUnXHJcblxyXG5leHBvcnQgeyBUaWNUYWNUb2UgfVxyXG4iLCJpbXBvcnQgSWNlbW9uazEyMDIgZnJvbSAnLi4vaWNlbW9uazEyMDInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY2Vtb25rMTIwMlxyXG4iXSwic291cmNlUm9vdCI6IiJ9