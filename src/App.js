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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            {this.state.text};
          </p>
        </header>
      </div>
    );
  }
  
}

export default App;
