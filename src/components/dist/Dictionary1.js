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
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var Dictionary = function () {
    var word = react_router_dom_1.useParams().word;
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(word || ''), searchedWord = _a[0], setSearchedWord = _a[1];
    var _b = react_1.useState(''), fetchedWord = _b[0], setFetchedWord = _b[1];
    var _c = react_1.useState([]), meanings = _c[0], setMeanings = _c[1];
    var _d = react_1.useState([]), phonetics = _d[0], setPhonetics = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(null), error = _f[0], setError = _f[1];
    var _g = react_1.useState(''), selectedPartOfSpeech = _g[0], setSelectedPartOfSpeech = _g[1];
    var fetchDefinition = function (searchTerm) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!searchTerm)
                        return [2 /*return*/];
                    setLoading(true);
                    setError(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchTerm)];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Word not found');
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (data.length > 0) {
                        setMeanings(data[0].meanings);
                        setPhonetics(data[0].phonetics);
                        setFetchedWord(searchTerm);
                    }
                    else {
                        setError('No definitions found.');
                        setMeanings([]);
                    }
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    setError('Error fetching word definition');
                    console.error('Error fetching word definition:', error_1);
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (word) {
            fetchDefinition(word);
        }
    }, [word]);
    var handleInputChange = function (event) {
        setSearchedWord(event.target.value);
    };
    var handleSearch = function () {
        if (searchedWord) {
            navigate("/canagram/dictionary/" + searchedWord);
            fetchDefinition(searchedWord);
        }
    };
    var handleKeyDown = function (event) {
        if (event.key === 'Enter' && searchedWord) {
            handleSearch();
        }
    };
    var resetDictionary = function () {
        setSearchedWord('');
        setMeanings([]);
        setPhonetics([]);
        setSelectedPartOfSpeech('');
        setError(null);
        navigate('/dictionary');
    };
    var playAudio = function (audioUrl) {
        var audio = new Audio(audioUrl);
        audio.play();
    };
    var handlePartOfSpeechChange = function (event) {
        setSelectedPartOfSpeech(event.target.value);
    };
    var filteredMeanings = selectedPartOfSpeech
        ? meanings.filter(function (meaning) { return meaning.partOfSpeech === selectedPartOfSpeech; })
        : meanings;
    var partsOfSpeech = __spreadArrays(new Set(meanings.map(function (meaning) { return meaning.partOfSpeech; })));
    return (React.createElement("div", { className: "dictionary" },
        React.createElement("input", { type: "text", value: searchedWord, onChange: handleInputChange, onKeyDown: handleKeyDown, placeholder: "Type a word..." }),
        React.createElement("div", { className: "dictionary__buttons" },
            React.createElement("button", { className: "dictionary__searchButton", onClick: handleSearch, disabled: loading }, loading ? 'Loading...' : 'Search'),
            React.createElement("button", { className: "dictionary__resetButton", onClick: resetDictionary }, "Reset")),
        error && React.createElement("p", { className: "dictionary__error" }, error),
        !loading && meanings.length > 0 && (React.createElement("div", { className: "dictionary__result" },
            React.createElement("h2", { className: "dictionary__word" }, fetchedWord.charAt(0).toUpperCase() + fetchedWord.slice(1)),
            phonetics.length > 0 && (React.createElement("div", { className: "dictionary__phonetics" },
                React.createElement("div", { className: "dictionary__phonetic" },
                    React.createElement("small", null, phonetics[0].text),
                    phonetics[0].audio && (React.createElement("button", { className: "dictionary__phonetic wordSound", onClick: function () { return playAudio(phonetics[0].audio); } }, "\uD83D\uDD0A"))))),
            React.createElement("label", { htmlFor: "partOfSpeech" }, "Part of speech:"),
            React.createElement("select", { id: "partOfSpeech", value: selectedPartOfSpeech, onChange: handlePartOfSpeechChange, className: "dictionary__filter" },
                React.createElement("option", { value: "" }, "All"),
                partsOfSpeech.map(function (partOfSpeech) { return (React.createElement("option", { key: partOfSpeech, value: partOfSpeech }, partOfSpeech)); })),
            React.createElement("div", { className: "dictionary__meanings" }, filteredMeanings.map(function (meaning, index) { return (React.createElement("div", { key: index, className: "dictionary__meaning" },
                React.createElement("p", null,
                    React.createElement("span", null, meaning.partOfSpeech + " "),
                    meaning.definitions[0].definition),
                meaning.definitions[0].example && (React.createElement("p", { className: "dictionary__example" },
                    "\"",
                    meaning.definitions[0].example,
                    "\"")))); }))))));
};
exports["default"] = Dictionary;
