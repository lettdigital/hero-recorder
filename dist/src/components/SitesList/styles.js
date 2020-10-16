"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.Text = exports.Image = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  padding: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  height: 100vh;\n  padding: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
exports.Image = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 150px;\n  opacity: 1;\n"], ["\n  width: 150px;\n  opacity: 1;\n"])));
exports.Text = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n"], ["\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n"])));
exports.Button = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  outline: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  align-text: center;\n  padding: 10px;\n"], ["\n  outline: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  align-text: center;\n  padding: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map