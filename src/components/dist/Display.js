"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./../styles/__display.scss");
var Display = function (_a) {
    var letters = _a.letters;
    var _b = react_1.useState(5), boxCount = _b[0], setBoxCount = _b[1];
    react_1.useEffect(function () {
        if (letters.length > boxCount) {
            setBoxCount(letters.length);
        }
        else if (letters.length < boxCount && boxCount > 5) {
            setBoxCount(letters.length);
        }
    }, [letters]);
    return (React.createElement("div", { className: "display" },
        React.createElement("div", { className: "display__boxes" }, __spreadArrays(Array(boxCount)).map(function (_, index) { return (React.createElement("div", { key: index, className: "display__box" }, letters[index] || '')); }))));
};
exports["default"] = Display;
