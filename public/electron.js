
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

const fs = require('fs');
const readline = require('readline');
const { ipcMain } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
      width: 900, 
      height: 680,
      webPreferences:{
        nodeIntegration:true
      }
    });

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
  
//   mainWindow.webContents.openDevTools()
}

const processLineByLine = async (text_field1,text_field2) =>{
    sample_text_file_path = (isDev ? './public/Sample_MOM.txt' : `file://${path.join(__dirname, '../build/Sample_MOM.txt')}`);
    
    const fileStream = fs.createReadStream(sample_text_file_path);
    
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
  
    lines = ""
    count = 0;
    for await (line of rl){
        count+=1;
        if(count==40)
        {
            if(line.charAt(13)=='{')
            {
                console.log(" Got the { in 40 th line");
                line = line.substring(0,14) + text_field1 + line.substring(14);
            }
        }
  
        lines+= line+'\n';
        
        
    }
  
    return lines;
};

ipcMain.on('sample_mom',(event,args)=>{
    processLineByLine("Cool","Cool2").then(lines =>{
        event.sender.send('sample_mom_data',lines);
    });
})

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
