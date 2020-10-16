import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

let mainWindow: Electron.BrowserWindow | null


// const { ipcRenderer } = require('electron')
//     const finder = require('@medv/finder')
//     window.addEventListener('click', (event) => {
//       const selector = finder(event.target, {
//         root: document.body,
//         className: (name) => true,
//         tagName: (name) => true,
//         attr: (name, value) => false,
//         seedMinLength: 1,
//         optimizedMinLength: 2,
//         threshold: 1000,
//         maxNumberOfTries: 10_000,
//       })
//     ipcRenderer.send('clickEvent', selector);
//     })

function injectEventListeners(window: BrowserWindow | null): void {
  window?.webContents.executeJavaScript(`
    const { ipcRenderer } = require('electron')
    window.addEventListener('click', (e) => {
      const path = e.path.map(node => {
          let path = node.localName;
          if (node.id) {
              path += "#"+node.id;
          }
          if (node.className) {
              const classList = node.className.replace(" ", ".");
              path += "."+classList;
          }
          return path
      }).join(" > ");
    ipcRenderer.send('clickEvent', path);
    })
    `, true)
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  mainWindow.webContents.on('dom-ready', () => {
    mainWindow?.webContents.openDevTools();
    injectEventListeners(mainWindow);
    ipcMain.on('clickEvent', (event, data: string) => {
      console.log(data);
    })

    ipcMain.on('loadNewUrl', (event, path: string) => {
      mainWindow?.loadURL(path).then(() => {injectEventListeners(mainWindow)});
    })
  });

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    }
  })

app.allowRendererProcessReuse = true
