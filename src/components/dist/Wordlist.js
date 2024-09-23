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
require("./../styles/__WordList.scss");
var WordList = function (_a) {
    var words = _a.words;
    var _b = react_1.useState(null), definition = _b[0], setDefinition = _b[1];
    var _c = react_1.useState(null), hoveredWord = _c[0], setHoveredWord = _c[1];
    var _d = react_1.useState([]), sortedWords = _d[0], setSortedWords = _d[1];
    var _e = react_1.useState('alphabetical'), sortOption = _e[0], setSortOption = _e[1];
    var _f = react_1.useState(false), excludeNoDefinition = _f[0], setExcludeNoDefinition = _f[1];
    var fetchDefinition = function (word) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)];
                case 1:
                    response = _d.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch definition');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _d.sent();
                    return [2 /*return*/, ((_c = (_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.meanings[0]) === null || _b === void 0 ? void 0 : _b.definitions[0]) === null || _c === void 0 ? void 0 : _c.definition) || null];
                case 3:
                    error_1 = _d.sent();
                    console.error('Error fetching definition:', error_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleMouseEnter = function (word) {
        setHoveredWord(word);
        fetchDefinition(word).then(function (definition) { return setDefinition(definition || 'No definition found.'); });
    };
    var handleMouseLeave = function () {
        setHoveredWord(null);
        setDefinition(null);
    };
    react_1.useEffect(function () {
        var sortWords = function () { return __awaiter(void 0, void 0, void 0, function () {
            var filteredWords, sorted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filteredWords = __spreadArrays(words);
                        if (!excludeNoDefinition) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(words.map(function (wordObj) { return __awaiter(void 0, void 0, void 0, function () {
                                var definition;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, fetchDefinition(wordObj.word)];
                                        case 1:
                                            definition = _a.sent();
                                            return [2 /*return*/, definition ? wordObj : null];
                                    }
                                });
                            }); })).then(function (results) { return results.filter(function (wordObj) { return wordObj !== null; }); })];
                    case 1:
                        filteredWords = _a.sent();
                        _a.label = 2;
                    case 2:
                        sorted = filteredWords.sort(function (a, b) {
                            if (sortOption === 'alphabetical') {
                                return a.word.localeCompare(b.word);
                            }
                            else if (sortOption === 'popularity') {
                                return (b.score || 0) - (a.score || 0);
                            }
                            return 0;
                        });
                        setSortedWords(sorted);
                        return [2 /*return*/];
                }
            });
        }); };
        sortWords();
    }, [words, sortOption, excludeNoDefinition]);
    var handleSortChange = function (event) {
        setSortOption(event.target.value);
    };
    var handleExcludeNoDefinitionChange = function (event) {
        setExcludeNoDefinition(event.target.checked);
    };
    return (React.createElement("div", { className: "word-list" },
        words.length === 0 && sortedWords.length === 0 ? (React.createElement("div", { className: "word-list__content" },
            React.createElement("h3", { className: "word-list__title" }, "Get Started"),
            React.createElement("p", { className: "word-list__subtitle" }, "Enter some letters..."),
            React.createElement("div", { className: "word-list__arrow" },
                React.createElement("svg", { className: "arrow-down bounce", xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "20", height: "20", viewBox: "0 0 256 256" },
                    React.createElement("g", { transform: "translate(1.4 1.4) scale(2.8 2.8)" },
                        React.createElement("polygon", { points: "0,38.92 2.83,36.08 45,78.25 87.17,36.08 90,38.92 45,83.92 " }),
                        React.createElement("polygon", { points: "0,8.92 2.83,6.08 45,48.25 87.17,6.08 90,8.92 45,53.92 " })))))) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "word-list__controls" },
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "sort-options" }, "Sort by: "),
                    React.createElement("select", { id: "sort-options", value: sortOption, onChange: handleSortChange, className: "word-list__dropdown" },
                        React.createElement("option", { value: "alphabetical" }, "Alphabetical"),
                        React.createElement("option", { value: "popularity" }, "Popularity"))),
                React.createElement("label", { htmlFor: "exclude-no-definition" },
                    React.createElement("input", { type: "checkbox", id: "exclude-no-definition", checked: excludeNoDefinition, onChange: handleExcludeNoDefinitionChange }),
                    "With definitions")),
            React.createElement("div", { className: "word-list__columns" }, __spreadArrays(Array(3)).map(function (_, colIndex) { return (React.createElement("div", { key: colIndex, className: "word-list__column" }, sortedWords
                .slice(colIndex * 10, (colIndex + 1) * 10)
                .map(function (_a, index) {
                var word = _a.word;
                return (React.createElement("p", { key: index, className: "word-list__word", onMouseEnter: function () { return handleMouseEnter(word); }, onMouseLeave: handleMouseLeave },
                    React.createElement(react_router_dom_1.Link, { to: "/canagram/dictionary/" + word }, word)));
            }))); })))),
        hoveredWord && definition && (React.createElement("div", { className: "word-list__definition" },
            React.createElement("strong", null,
                hoveredWord,
                ":"),
            " ",
            definition))));
};
exports["default"] = WordList;
