import React, { Component } from 'react';
import '../App.css';
import CommitteListContainer from './CommitteListContainer.js'
import CommitteDetailsContainer from './CommitteDetailsContainer.js'

class MainBodyContainer extends Component {

    render(){
        return(
            <div className="main-body">

                <CommitteListContainer committeList={this.props.committeList}/>    
                <CommitteDetailsContainer/>
                
            </div>
        );
    }
}

export default MainBodyContainer;