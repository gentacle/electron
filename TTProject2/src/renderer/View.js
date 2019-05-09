const {ipcRenderer, remote, shell} = require('electron');

class View {
    constructor(){
        this._btnSend = document.getElementById('btn-send');
        this._btnSendSync = document.getElementById('btn-send-sync');
        this._btnRemote = document.getElementById('btn-remote');
        
        this._bindDomEvent();
        this._bindIpcEvnet();
    }

    _bindDomEvent(){
        this._btnSend.addEventListener('click', this._btnSendClick.bind(this));
        this._btnSendSync.addEventListener('click', this._btnSendSyncClick.bind(this));
        this._btnRemote.addEventListener('click', this._btnRemoveClick.bind(this));
    }

    _btnSendClick(){
        console.log('비동기에러');
        ipcRenderer.send('a',{name: 'Mark'});

    }

    _btnSendSyncClick(){
        console.log('동기에러');
        const result = ipcRenderer.sendSync('c', '바로 보내');
        console.log(result);

    }

    _bindIpcEvnet(){
        ipcRenderer.on('b',(event, arg)=>{
            console.log(arg, '잘받음.');
        })
    }
    
    _btnRemoteClick(){
        console.log('remote 사용에러');
        const {dialog, BrowserWindow} = remote;
        // dialog.showErrorBox('경고', '미스테리');
        // remote.getCurrentWindow().hide();
        // remote.getCurrentWebContents().openDevTools();
        // shell.openExternal('https://github.com');
        // shell.openItem();
        console.log(process.versions);
        console.log(process.platform);
        console.log(process.type);
        
    }

   
}

module.exports = {
    View
};