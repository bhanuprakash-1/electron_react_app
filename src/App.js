import React, { Component } from 'react';
import './App.css';
import MainBodyContainer from './Components/MainBodyContainer.js'

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class App extends Component {

  state = {
    text:"",
    flag:true
  }

  componentDidMount(){
    ipcRenderer.send('sample_mom');

    ipcRenderer.on('sample_mom_data',(event,args)=>{
      this.setState({text: args});
    })
  }
  
  render(){
      
    return (
      <div className="App">
        <div className="Nav-bar">
            <button className="home-btn">
              Home
            </button>
            <button className="add-committe-btn" >
              Add committe
            </button>
        </div>

        <MainBodyContainer/>
      </div>
    );
  }
  
}

export default App;
