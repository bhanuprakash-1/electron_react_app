import React, { Component } from 'react';
import '../App.css';

class CommitteListItem extends Component {
    
    state={
        flag:false
    }

    clicked = ()=>{
        const committe_title = this.props.item.title;
        this.props.select_committe(committe_title);
    }

    render(){
        const flagVal = this.state.flag;
        return(
            <div className="committe-list-item" 
                 onClick={this.clicked} 
                 style={{backgroundColor : this.props.committe_selected===this.props.item.title?"green":"brown"}}
                 >
                {this.props.item.title}
            </div>
        )
    }
}

export default CommitteListItem;