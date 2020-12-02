import React, { Component } from 'react';
import '../App.css';
import CommitteListContainer from './CommitteListContainer.js'
import CommitteDetailsContainer from './CommitteDetailsContainer.js'

class MainBodyContainer extends Component {

    render(){
        return(
            <div className="main-body">

                <CommitteListContainer/>    
                <CommitteDetailsContainer/>
                
            </div>
        );
    }
}

export default MainBodyContainer;