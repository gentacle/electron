const {app, BrowserWindow, Tray, Menu, dialog} = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs');

const HTML = url.format({
    protocol: 'file',
    pathname: path.join(__dirname, 'index.html')
});

let win = null;

app.on('ready', () => {
    console.log('ready');

    const tray = new Tray(path.join(__dirname, 'icon.png'));
    tray.setContextMenu(getTrayMenu());

    Menu.setApplicationMenu(getApplicationMenu());
    /*
    tray.on('click', () => {
        createWindow();
    });
    tray.on('right-click', () => {
        win.hide();
    });
    */
});

app.on('window-all-closed', () => {});

function createWindow() {
    if (win === null) {
        win = new BrowserWindow({
            show: false
        });
        win.loadURL(HTML);
        win.on('closed', () => {
            win = null;
        });
    }
    win.show();
}

function getTrayMenu() {
    const menu = new Menu();
    return Menu.buildFromTemplate([
        {
            label: '다이얼로그',
            submenu: [
                {
                    label: 'Open',
                    click: () => {
                        dialog.showOpenDialog({
                            filters: [
                                {
                                    name: '이건 머지',
                                    extensions: ['json']
                                }
                            ]
                        }, (paths) => {
                            if (paths !== undefined) {
                                const buffer = fs.readFileSync(paths[0]);
                                const object = JSON.parse(buffer.toString());
                                console.log(object.name);
                            }
                        });
                    }
                },
                {
                    label: 'Save',
                    click: () => {
                        dialog.showSaveDialog({
                            filters: [
                                {
                                    name: '이건 머지',
                                    extensions: ['json']
                                }
                            ]
                        }, (pathname) => {
                            if (pathname !== undefined) {
                                console.log(pathname);
                                fs.writeFileSync(pathname, JSON.stringify({name: 'Mark'}));
                            }
                        });
                    }
                },
                {
                    label: 'Message',
                    click: () => {
                        dialog.showMessageBox({
                            message: '경고',
                            detail: '부연 설명',
                            buttons: [
                                '금도끼',
                                '은도끼',
                                '둘다 싫어'
                            ],
                            cancelId: 2
                        }, (id) => {
                            console.log(id);
                        });
                    }
                }
            ]
        },
        {
            type: 'normal',
            label: 'Open',
            click: () => {
                createWindow();
            }
        },
        {
            type: 'separator'
        },
        {
            label: 'Quit',
            click: () => {
                app.quit();
            }
        },
        {
            label: '수업이니깐',
            submenu: [
                {
                    label: '추석'
                },
                {
                    type: 'checkbox',
                    label: '체크박스',
                    checked: true,
                    click: (event) => {
                        console.log(event.checked);
                    }
                }
            ]
        }
    ]);
}

function getApplicationMenu() {
    return Menu.buildFromTemplate([
        {
            label: 'First',
            submenu: [
                {
                    label: 'First1'
                },
                {
                    label: 'First2'
                }
            ]
        },
        {
            label: 'Second',
            submenu: [
                {
                    label: 'Second1'
                },
                {
                    label: 'Second2'
                }
            ]
        },
        {
            label: 'Roles',
            submenu: [
                {role: 'paste'},
                {role: 'reload'},
                {role: 'about'},
                {role: 'toggledevtools'}
            ]
        }
    ]);
}