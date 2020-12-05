import React, { Component } from 'react';
import './App.css';
import MainBodyContainer from './Components/MainBodyContainer.js'

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class App extends Component {

  state = {
    committeList : [{
      title:'Academics Committe',
      description:" A committe on acdemic related issues",
      members:['Suman kundu','Bhanu Prakash', 'Anmol Reddy'],
      meetings:[] 
    },
    {
      title:'Time Table Committe',
      description:" A committe on time table issues",
      members:['Suman kundu','Bhanu Prakash', 'Anmol Reddy'],
      meetings:[] 
    }]
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
