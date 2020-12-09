import React, { Component } from 'react';
import '../App.css';
import CommitteListItem from './CommitteListItem.js';

class CommitteListContainer extends Component {
     
    renderList=()=>{
        const newCommitteList = []
        const committeList = this.props.committeList;

        committeList.forEach(item => {
            newCommitteList.push(<CommitteListItem 
                                    item={item} 
                                    select_committe = {this.props.select_committe}
                                    committe_selected = {this.props.committe_selected}
                                />)
        });

        return newCommitteList;
    }

    render(){
        var committeList = this.renderList();

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