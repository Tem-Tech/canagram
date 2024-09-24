"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var apiService_1 = require("./../apiService");
require("./styles/App.css");
var Navbar_1 = require("./components/Navbar");
var Heading_1 = require("./components/Heading");
var Button_1 = require("./components/Button");
var Display_1 = require("./components/Display");
var Keyboard_1 = require("./components/Keyboard");
var Wordlist_1 = require("./components/Wordlist");
var Dictionary1_1 = require("./components/Dictionary1");
function App() {
    var _this = this;
    var _a = react_1.useState([]), letters = _a[0], setLetters = _a[1];
    var _b = react_1.useState([]), words = _b[0], setWords = _b[1];
    var handleKeyClick = function (key) {
        if (key === 'Backspace') {
            setLetters(function (prevLetters) { return prevLetters.slice(0, -1); });
        }
        else {
            setLetters(function (prevLetters) { return __spreadArrays(prevLetters, [key]); });
        }
    };
    var handleSearch = function () { return __awaiter(_this, void 0, void 0, function () {
        var query, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = letters.join('');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, apiService_1.fetchWords(query)];
                case 2:
                    result = _a.sent();
                    setWords(result.slice(0, 30).map(function (wordObj) { return ({
                        word: wordObj.word,
                        score: wordObj.score || 0
                    }); }));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching words:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleRefresh = function () {
        setLetters([]);
        setWords([]);
    };
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(Navbar_1["default"], null),
            React.createElement(Heading_1["default"], null),
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(React.Fragment, null,
                        React.createElement(Button_1["default"], null)) }),
                React.createElement(react_router_dom_1.Route, { path: "/canagram/page1", element: React.createElement(React.Fragment, null,
                        React.createElement(Wordlist_1["default"], { words: words }),
                        React.createElement(Display_1["default"], { letters: letters }),
                        React.createElement(Keyboard_1["default"], { onClick: handleKeyClick, onSearch: handleSearch, onRefresh: handleRefresh })) }),
                React.createElement(react_router_dom_1.Route, { path: "/canagram/dictionary", element: React.createElement(React.Fragment, null,
                        React.createElement(Dictionary1_1["default"], null)) }),
                React.createElement(react_router_dom_1.Route, { path: "/canagram/dictionary/:word", element: React.createElement(React.Fragment, null,
                        React.createElement(Dictionary1_1["default"], null)) })))));
}
exports["default"] = App;
