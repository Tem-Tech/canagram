"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./../styles/__button.scss");
var Buttons = function () {
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.Link, { to: "/canagram/page1" },
            React.createElement("button", { className: "pageButtons" }, "Anagram Mode")),
        React.createElement(react_router_dom_1.Link, { to: "/canagram/dictionary" },
            React.createElement("button", { className: "pageButtons" }, "Dictionary Mode"))));
};
exports["default"] = Buttons;
