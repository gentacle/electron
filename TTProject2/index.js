const {app,BrowserWindow} = require('electron');

app.on('will-finish-launching',()=>{
    console.log('will-finish-launching');
});

app.on('ready',()=>{
    console.log('ready!!');


    console.log(app.getAppPath());
    console.log(app.getPath('home'));
    console.log(app.getPath('userData'));//C:\Users\USER\AppData\Roaming\TTProject2
    console.log(app.getPath('temp'));//C:\Users\USER\AppData\Local\Temp
    
    
    
    new BrowserWindow();
});

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    };
});

app.on('before-quit',(event)=>{
    console.log('before-quit');
    //event.preventDefault();
});

app.on('will-quit',(event)=>{
    console.log('will-quit');
    //event.preventDefault();

});

app.on('quit',()=>{
    console.log('quit');
});

