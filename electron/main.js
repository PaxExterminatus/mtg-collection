const { app, BrowserWindow } = require('electron');
const { fork } = require('child_process');
const ps = fork(`${__dirname}/server.js`);

function createWindow () {
    let win = new BrowserWindow({
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.maximize();
    win.loadURL('http://localhost:9990')
        .then( () => {});
}

app.on('ready', createWindow);
