import React, { Component } from 'react';
import './Status.css';

class Status extends Component {

    render() {
        return (
            <div className="EightQueens-status">
                <b>{this.props.clicked}</b>
                <br />
                {JSON.stringify(this.props.position)}
            </div>
        );
    }
}

export default Status;
