import React, { Component } from 'react';
import '../App.css';
import CommitteListContainer from './CommitteListContainer.js'
import CommitteDetailsContainer from './CommitteDetailsContainer.js'

class MainBodyContainer extends Component {

    render(){
        return(
            <div className="main-body">

                <CommitteListContainer 
                    committeList={this.props.committeList}
                    select_committe={this.props.select_committe} 
                    committe_selected={this.props.committe_selected}
                />    
                <CommitteDetailsContainer
                    committe_selected = {this.props.committe_selected}
                />
                
            </div>
        );
    }
}

export default MainBodyContainer;