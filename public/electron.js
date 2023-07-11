const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		titleBarStyle: 'hidden',
		backgroundColor: 'transparent',
		transparent: true,
		frame: false,

		webPreferences: {
			nodeIntegration: true,
		},
	});

	const startURL = isDev
		? 'http://localhost:3000'
		: `file://${path.join(__dirname, '../build/index.html')}`;

	win.loadURL(startURL);

	// After window is loaded
	win.webContents.on('did-finish-load', () => {
		win.webContents.insertCSS(`
		  body {
			background: rgba(255, 255, 255, 0.7);
			backdrop-filter: blur(10px);
		  }
		`);
	});
}

app.whenReady().then(createWindow);
