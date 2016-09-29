var remote = require('remote');
var Tray = remote.require('tray');
var Menu = remote.require('menu');
// var path = require('path');

var trayIcon = null;

// if (process.platform === 'darwin') {
//     trayIcon = new Tray(path.join(__dirname, 'img/tray-iconTemplate.png'));
// }
// else {
//     trayIcon = new Tray(path.join(__dirname, 'img/tray-icon-alt.png'));
// }

var trayMenuTemplate = [
    {
        label: 'Sound machine',
        enabled: false
    },
    {
        label: 'Settings',
        click: function () {
            ipc.send('open-settings-window');
        }
    },
    {
        label: 'Quit',
        click: function () {
            ipc.send('close-main-window');
        }
    }
];
var trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
trayMenu.setApplicationMenu(trayMenuTemplate);