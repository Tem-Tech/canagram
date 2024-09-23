"use strict";
exports.__esModule = true;
var react_1 = require("react");
var settings_svg_1 = require("./../assets/settings.svg");
var cross_svg_1 = require("./../assets/cross.svg");
require("./../styles/__settings.scss");
var SettingsMenu = function () {
    var _a = react_1.useState(false), showSettings = _a[0], setShowSettings = _a[1];
    var handleToggleSettings = function () {
        setShowSettings(!showSettings);
    };
    return (React.createElement("div", { className: "settings-menu" },
        React.createElement("img", { src: settings_svg_1["default"], className: "nav-menu__icon", alt: "settings icon", onClick: handleToggleSettings }),
        showSettings && (React.createElement("div", { className: "settings-menu" },
            React.createElement("img", { className: "nav-item__cross", src: cross_svg_1["default"], alt: "close menu", onClick: handleToggleSettings, "aria-label": "Close menu" }),
            "          ",
            React.createElement("button", { className: "navbar__theme-toggle" }, "Toggle Theme")))));
};
exports["default"] = SettingsMenu;
