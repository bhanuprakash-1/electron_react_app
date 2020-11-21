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
      <div className="App grid-container">
        <header className="App-header item1">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey there, welcome to our App!
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
            {/* {this.state.text}; */}
          </p>
        </header>

        <div className="Other-half item2">
            <p> Cool, this is other half!!!</p>
        </div>
      </div>
    );
  }
  
}

export default App;
