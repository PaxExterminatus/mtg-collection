import { app, BrowserWindow } from 'electron'
import { fork } from 'child_process'

function createWindow () {
    let win = new BrowserWindow({
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + '/public/favicon.png',
    });

    win.maximize();
    win.loadURL('http://localhost:9990').then(() => {
        console.log('loaded');
    });
}

//const { fork } = require('child_process');