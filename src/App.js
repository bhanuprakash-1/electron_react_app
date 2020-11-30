import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class App extends Component {

  state = {
    text:""
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
            <button className="add-committe-btn">
              Add committe
            </button>
        </div>
        <div>

        </div>
      </div>
    );
  }
  
}

export default App;
