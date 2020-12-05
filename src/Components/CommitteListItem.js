import React, { Component } from 'react';
import '../App.css';

class CommitteListItem extends Component {
    
    state={
        flag:false
    }
    consoleOutput(){
        console.log("clicked!!");
    }
    render(){
        const flagVal = this.state.flag;
        return(
            <div className="committe-list-item" onClick={()=>{this.setState({flag:!flagVal})}} style={{backgroundColor:this.state.flag?"coral":"green"}} >
                This is a list item
            </div>
        )
    }
}

export default CommitteListItem;