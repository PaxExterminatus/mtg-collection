const { app, BrowserWindow } = require('electron');
const { fork } = require('child_process');
fork('../server/server/main.js');

function createWindow () {
    let win = new BrowserWindow({
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + '/public/favicon.png',
    });

    win.maximize();
    win.loadURL('http://localhost:9990').then( () => {});
}

app.on('ready', createWindow);
