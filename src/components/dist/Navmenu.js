"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var canagram_svg_1 = require("./../assets/canagram.svg");
var cross_svg_1 = require("./../assets/cross.svg");
require("./../styles/__navmenu.scss");
var NavMenu = function () {
    var _a = react_1.useState(false), showMenu = _a[0], setShowMenu = _a[1];
    var handleToggleMenu = function () {
        setShowMenu(!showMenu);
    };
    return (React.createElement("div", { className: "nav-menu" },
        React.createElement("img", { src: canagram_svg_1["default"], className: "nav-menu__icon", alt: "menu icon", onClick: handleToggleMenu, "aria-label": "Toggle menu" }),
        showMenu && (React.createElement("div", { className: "nav-menu__content" },
            React.createElement("img", { className: "nav-item__cross", src: cross_svg_1["default"], alt: "close menu", onClick: handleToggleMenu, "aria-label": "Close menu" }),
            React.createElement("ul", { className: "nav-menu__links" },
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/canagram/", className: "navbar__link", onClick: handleToggleMenu }, "Home")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/canagram/page1", className: "navbar__link", onClick: handleToggleMenu }, "Word Finder")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/canagram/dictionary", className: "navbar__link", onClick: handleToggleMenu }, "Dictionary Mode")))))));
};
exports["default"] = NavMenu;
