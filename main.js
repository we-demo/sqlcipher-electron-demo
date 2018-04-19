let { app, BrowserWindow } = require('electron')
let { join } = require('path')

let win

app.on('ready', () => {
  let url = 'file://' + join(__dirname, 'main.html')

  // turning off nodeIntegration is recommended though
  win = new BrowserWindow()
  win.loadURL(url)

  win.openDevTools()
})
