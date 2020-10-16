"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var GlobalStyle_1 = require("./styles/GlobalStyle");
var SitesList_1 = __importDefault(require("./components/SitesList"));
var mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);
var App = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GlobalStyle_1.GlobalStyle, null),
        react_1.default.createElement(SitesList_1.default, null)));
};
react_dom_1.render(react_1.default.createElement(App, null), mainElement);
//# sourceMappingURL=App.js.map