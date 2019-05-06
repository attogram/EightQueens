import React, { Component } from 'react';
import './Status.css';

class Status extends Component {

    render() {
        const numberQueens = Object.keys(this.props.position).length;
        let gameStatus = '';
        let solveStatus = 'Not Solved';
        if (numberQueens > 8) {
            gameStatus = (numberQueens - 8) + " Less Queens needed";
        } else if (numberQueens < 8) {
            gameStatus = (8 - numberQueens) + " More Queens needed";
        } else {
            gameStatus = 'solution-checker-in-dev';
            solveStatus = 'solution-checker-in-dev';
        }

        return (
            <div className="EightQueens-status">
                <b>{numberQueens}</b> Queens on board
                <br />
                {gameStatus}
                <br />
                {solveStatus}
            </div>
        );
    }
}

export default Status;
