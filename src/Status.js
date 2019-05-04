import React, { Component } from 'react';
import './Status.css';

class Status extends Component {

    render() {
        return (
            <div className="EightQueens-status">
                Queens on board: XX
                <br/>
                Queens under attack: XX, XX, XX
                <br/>
                Not Solved
            </div>
        );
    }
}

export default Status;
