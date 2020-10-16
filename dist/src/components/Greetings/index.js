"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var Greetings = function () {
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Image, { src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", alt: "ReactJS logo" }),
        react_1.default.createElement(styles_1.Text, null, "An Electron boilerplate including TypeScript, React, Jest and ESLint.")));
};
exports.default = Greetings;
//# sourceMappingURL=index.js.map