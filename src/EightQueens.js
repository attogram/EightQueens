/**
 * Eight Queens chess game
 */
import React, { Component } from 'react';
import './EightQueens.css';
import * as attack from './UnderAttack.js';
import * as helpers from './helpers.js';
import Chessboard from 'chessboardjsx';
import Status from './Status.js';
import Title from './Title.js';
import queenUnderAttackSvg from './queenUnderAttack.svg';

const gameName    = 'Eight Queens';
const gameVersion = '0.1.0';
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

        this.setState({
            attacked: attacked,
            position: position
        });
    };

    /**
     * @returns {*}
     */
    render() {
        // force board refresh by using FEN string in _position_ and _key_ Chessboard props
        const fenPosition = helpers.objToFen(this.state.position);
        const queensOnBoard = Object.keys(this.state.position).length;
        let queensUnderAttack = 0;
        if (this.state.attacked) {
            queensUnderAttack = this.state.attacked.length;
        }
        return (
            <div className="EightQueens">
                <div className="EightQueens-header">
                    <Title
                        gameName={gameName}
                        gameHome={gameHome}
                        gameVersion={gameVersion}
                    />
                    <Status
                        queensOnBoard={queensOnBoard}
                        queensUnderAttack={queensUnderAttack}
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
                <p>
                    - Place <b>Eight Queens</b> with none under attack!<br />
                    - Click a square to place a Queen<br />
                    - Click a Queen to remove it
                </p>
            </div>
        );
    }
}

export default EightQueens;
