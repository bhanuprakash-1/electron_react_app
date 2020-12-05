import React, { Component } from 'react';
import '../App.css';
import CommitteListItem from './CommitteListItem.js';

class CommitteListContainer extends Component {
     
    renderList(committeList){
        const newCommitteList = []
        
        committeList.forEach(item => {
            newCommitteList.push(<CommitteListItem />)
        });

        return newCommitteList;
    }

    render(){
        var committeList = this.renderList(this.props.committeList);

        return(
            <div className="committe-list-container">  
            <div className="committe-list-container-ul">
                {committeList}  
            </div>                    
            </div>
        )
    }
}

export default CommitteListContainer;