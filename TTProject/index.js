const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

const HTML = url.format({
    protocol: 'file',
    pathname: path.join(__dirname, 'index.html')
});


console.log(HTML);
app.on('ready', ()=> {
    console.log('ready');

    const win = new BrowserWindow();
    win.loadURL(HTML);
});