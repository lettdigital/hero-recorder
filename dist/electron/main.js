"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = __importStar(require("path"));
var url = __importStar(require("url"));
var electron_devtools_installer_1 = __importStar(require("electron-devtools-installer"));
var mainWindow;
function injectEventListeners(window) {
    window === null || window === void 0 ? void 0 : window.webContents.executeJavaScript("\n    const { ipcRenderer } = require('electron')\n    const { finder } = require('@medv/finder')\n    window.addEventListener('click', (event) => {\n      const selector = finder(event.target, {\n        root: document.body,\n        className: (name) => true,\n        tagName: (name) => true,\n        attr: (name, value) => false,\n        seedMinLength: 1,\n        optimizedMinLength: 2,\n        threshold: 1000,\n        maxNumberOfTries: 10_000,\n      })\n    ipcRenderer.send('clickEvent', selector);\n    })\n    ", true);
}
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1100,
        height: 700,
        backgroundColor: '#191622',
        webPreferences: {
            nodeIntegration: true
        }
    });
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:4000');
    }
    else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'renderer/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    mainWindow.webContents.on('dom-ready', function () {
        mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.webContents.openDevTools();
        injectEventListeners(mainWindow);
        electron_1.ipcMain.on('clickEvent', function (event, data) {
            console.log(data);
        });
        electron_1.ipcMain.on('loadNewUrl', function (event, path) {
            mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.loadURL(path).then(function () { injectEventListeners(mainWindow); });
        });
    });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
electron_1.app.on('ready', createWindow)
    .whenReady()
    .then(function () {
    if (process.env.NODE_ENV === 'development') {
        electron_devtools_installer_1.default(electron_devtools_installer_1.REACT_DEVELOPER_TOOLS)
            .then(function (name) { return console.log("Added Extension:  " + name); })
            .catch(function (err) { return console.log('An error occurred: ', err); });
        electron_devtools_installer_1.default(electron_devtools_installer_1.REDUX_DEVTOOLS)
            .then(function (name) { return console.log("Added Extension:  " + name); })
            .catch(function (err) { return console.log('An error occurred: ', err); });
    }
});
electron_1.app.allowRendererProcessReuse = true;
//# sourceMappingURL=main.js.map