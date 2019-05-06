import React, { Component } from 'react';
import './Status.css';

class Status extends Component {

    render() {
        return (
            <div className="EightQueens-status">
                Clicked: <b>{this.props.clicked}</b>
            </div>
        );
    }
}

export default Status;
