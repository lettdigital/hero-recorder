"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var index_1 = __importDefault(require("./index"));
test('Greetings should renders', function () {
    var _a = react_2.render(react_1.default.createElement(index_1.default, null)), getByText = _a.getByText, getByAltText = _a.getByAltText;
    expect(getByText('An Electron boilerplate including TypeScript, React, Jest and ESLint.')).toBeTruthy();
    expect(getByAltText('ReactJS logo')).toBeTruthy();
});
//# sourceMappingURL=Greetings.spec.js.map