const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		titleBarStyle: 'hidden',

		webPreferences: {
			nodeIntegration: true,
		},
	});

	const startURL = isDev
		? 'http://localhost:3000'
		: `file://${path.join(__dirname, '../build/index.html')}`;

	win.loadURL(startURL);
}

app.whenReady().then(createWindow);
