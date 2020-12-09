import React, { Component } from 'react';
import '../App.css';

class CommitteDetailsContainer extends Component {

    render(){
        return(
            <div className="committe-details-container">
                {this.props.committe_selected}
            </div>
        );
    }
}

export default CommitteDetailsContainer;