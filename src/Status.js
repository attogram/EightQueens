import React, { Component } from 'react';
import './Status.css';

class Status extends Component {

    render() {
        const numberQueensOnBoard = Object.keys(this.props.position).length;
        let numberQueensUnderAttack = 0;
        if (this.props.attacked) {
            numberQueensUnderAttack = this.props.attacked.length;
        }
        let gameStatus = this.props.status;
        let statusClass = '';
        if (!gameStatus) {
            statusClass = 'EightQueens-playing';
        }
        if ( numberQueensOnBoard === 8 && numberQueensUnderAttack === 0) {
            gameStatus = ' SOLVED! YOU WIN! ';
            statusClass = 'EightQueens-win';
        }

        return (
            <div className="EightQueens-status">
                <b>{numberQueensOnBoard}</b> Queens on board
                <br />
                <b>{numberQueensUnderAttack}</b> Queens under attack
                <br />
                <div className={statusClass}>{gameStatus}</div>
            </div>
        );
    }
}

export default Status;
