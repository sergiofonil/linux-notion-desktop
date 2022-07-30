import { app, BrowserWindow } from 'electron'

const NOTION_URL = 'https://notion.so'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.setMenu(null)
    win.loadURL(NOTION_URL)
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})