"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var electron_1 = require("electron");
var SitesList = function () {
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Button, { onClick: function () { return electron_1.ipcRenderer.send('loadNewUrl', "http://twitter.com"); } },
            react_1.default.createElement(styles_1.Image, { src: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/1200px-Twitter_logo_2012.svg.png", alt: "Twitter logo" })),
        react_1.default.createElement(styles_1.Button, { onClick: function () { return electron_1.ipcRenderer.send('loadNewUrl', "http://youtube.com"); } },
            react_1.default.createElement(styles_1.Image, { src: "https://icons-for-free.com/iconfiles/png/512/video+youtube+icon-1320192294490006733.png", alt: "Youtube logo" })),
        react_1.default.createElement(styles_1.Button, { onClick: function () { return electron_1.ipcRenderer.send('loadNewUrl', "http://google.com"); } },
            react_1.default.createElement(styles_1.Image, { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png", alt: "Google logo" }))));
};
exports.default = SitesList;
//# sourceMappingURL=index.js.map