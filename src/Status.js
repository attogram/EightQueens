import React, { Component } from 'react';
import './Status.css';

class Status extends Component {

    render() {
        const numberQueensOnBoard = Object.keys(this.props.position).length;
        let numberQueensUnderAttack = 0;
        if (this.props.attacked) {
            numberQueensUnderAttack = this.props.attacked.length;
        }
        return (
            <div className="EightQueens-status">
                <b>{numberQueensOnBoard}</b> Queens on board
                <br />
                <b>{numberQueensUnderAttack}</b> Queens under attack
                <br />{JSON.stringify(this.props.attacked)}
            </div>
        );
    }
}

export default Status;
