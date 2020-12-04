import React, { Component } from 'react';
import './App.css';
import MainBodyContainer from './Components/MainBodyContainer.js'

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class App extends Component {

  state = {
    committeList : ["Committe1","Committe2","Committe3","Committe4","Committe5","Committe6","Committe7","Committe8","Committe9","Committe10","Committe11","Committe11","Committe11","Committe11","Committe11","Committe11","Committe11","Committe11","Committe11","Committe11"]
  }

  componentDidMount(){
    
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

        <MainBodyContainer committeList={this.state.committeList}/>
      </div>
    );
  }
  
}

export default App;
