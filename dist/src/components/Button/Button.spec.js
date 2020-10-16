"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var index_1 = __importDefault(require("./index"));
test('button should renders', function () {
    var getByText = react_2.render(react_1.default.createElement(index_1.default, null, "ButtonContent")).getByText;
    expect(getByText('ButtonContent')).toBeTruthy();
    expect(getByText('ButtonContent')).toHaveAttribute('type', 'button');
});
//# sourceMappingURL=Button.spec.js.map