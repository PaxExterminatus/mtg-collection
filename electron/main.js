const { app, BrowserWindow } = require('electron');
const { fork } = require('child_process');
const ps = fork(`${__dirname}/server.js`);

function createWindow () {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL('http://localhost:9990')
    .then( () => {
        console.log('index page loaded');
    });
}

app.on('ready', createWindow);
