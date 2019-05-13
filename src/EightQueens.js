/**
 * Eight Queens chess game
 */
import React, { Component } from 'react';
import './EightQueens.css';
import * as attack from './UnderAttack.js';
import * as helpers from './helpers.js';
import Chessboard from 'chessboardjsx';
import DidYouKnow from "./DidYouKnow";
import Status from './Status.js';
import Timer from './Timer.js';
import Title from './Title.js';
import queenUnderAttackSvg from './queenUnderAttack.svg';

const gameName    = 'Eight Queens';
const gameVersion = '0.3.0';
const gameHome    = 'https://github.com/attogram/EightQueens';

class EightQueens extends Component {
    /**
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            attacked: [], // Array of queens under attack
            position: {}, // Object of current board position
            gameStatus: 'playing',
            queensOnBoard: 0,
            queensUnderAttack: 0,
        }
    }

    /**
     * Player clicked on the chessboard
     *
     * @param square
     */
    onSquareClick = square => {
        let position = this.state.position; // Get the current board position
        if (position[[square]]) {
            delete position[[square]]; // Clicked on a Queen, delete it
        } else {
            if (Object.keys(position).length === 8) {
                return; // Max 8 queens on board
            }
            position[[square]] = 'wQ'; // Clicked on an empty square, add a Queen
        }

        const attacked = attack.underAttack(position); // get array of Queens under attack

        Object.keys(position).forEach(function(square) { // For each queen on board
           if (attacked.includes(square) && square !== 'bQ') {   // if Queen is under attack
               position[square] = 'bQ';                          // Flip Queen under attack
           } else if (square !== 'wQ') { // If Queen is no longer under attack
               position[square] = 'wQ'; // Queen at peace
           }
        });

        let queensOnBoard = Object.keys(position).length;
        let queensUnderAttack = 0;
        if (attacked) {
            queensUnderAttack = attacked.length;
        }
        let gameStatus = 'playing';
        if (queensOnBoard === 8 && queensUnderAttack === 0) {
            gameStatus = 'solved';
        }

        this.setState({
            attacked: attacked,
            position: position,
            queensOnBoard: queensOnBoard,
            queensUnderAttack: queensUnderAttack,
            gameStatus: gameStatus,
        });
    };

    /**
     * @returns {*}
     */
    render() {
        // force board refresh by using FEN string in _position_ and _key_ Chessboard props
        const fenPosition = helpers.objToFen(this.state.position);
        return (
            <div className="EightQueens">
                <div className="EightQueens-header">
                    <Title
                        gameName={gameName}
                        gameHome={gameHome}
                        gameVersion={gameVersion}
                    />
                    <Status
                        queensOnBoard={this.state.queensOnBoard}
                        queensUnderAttack={this.state.queensUnderAttack}
                    />
                </div>
                <Chessboard
                    id="EightQueens"
                    position={fenPosition}
                    key={fenPosition}
                    sparePieces={false}
                    draggable={false}
                    calcWidth={({screenWidth}) => (screenWidth < 500 ? 350 : 480)}
                    onSquareClick={this.onSquareClick}
                    pieces={{
                        bQ: ({ squareWidth, isDragging }) => (
                            <img
                                style={{
                                    width: isDragging ? squareWidth * 1.75 : squareWidth,
                                    height: isDragging ? squareWidth * 1.75 : squareWidth
                                }}
                                src={queenUnderAttackSvg}
                                alt={"Under Attack"}
                            />
                        )
                    }}
                />
                <Timer
                    gameStatus={this.state.gameStatus}
                />
                <p>
                    - Place <b>Eight Queens</b> with none under attack!<br />
                    - Click a square to place a Queen<br />
                    - Click a Queen to remove it
                </p>
                <DidYouKnow />
            </div>
        );
    }
}

export default EightQueens;
