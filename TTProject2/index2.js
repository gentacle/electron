const {app,BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const HTML = url.format({
    protocol:"file",
    pathname : path.join(__dirname,'index.html')
});

app.on('ready',()=>{
    const second = new BrowserWindow({
        show:false,
        //윈,맥
        frame:false
        // for Mac
        // titleBarStyle : 'hidden' or 'hidden-inset'
    });

    second.once('ready-to-show',()=>{
        second.show();
    });
    second.loadURL(HTML);
    second.on('focus',()=>{
        console.log('focus');
    });
    second.on('blur',()=>{
        console.log('blur');
    })

    second.on('move',()=>{
        console.log('move');
    })
    console.log(BrowserWindow.getAllWindows());
    console.log(BrowserWindow.getFocusedWindow());
    // const win = new BrowserWindow({
    //     show : false,
    //     // x: 0,
    //     // y: 0,
    //     // width:500,
    //     // height:500,
    //     // minWidth:500,
    //     // maxWidth:500,
    //     // minHeight:500,
    //     // maxHeight:500,
    //     maximizable:false,
    //     minimizable:false,
    //     // resizable : false,
    //     // movable:false
    //     // for Mac
    //     parent:second,
    //     //+ modal = window
    //     modal:true,
    // });

    // win.loadURL("https://github.com");
    // win.webContents.openDevTools();
    // win.once('ready-to-show',()=>{
    //     win.show();
    // });
    
});