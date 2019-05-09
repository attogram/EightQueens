import React, { Component } from 'react';
import './EightQueens.css';
import * as attack from './UnderAttack.js';
import Chessboard from 'chessboardjsx';
import Status from './Status.js';
import Title from './Title.js';
import queenUnderAttackSvg from './queenUnderAttack.svg';

const gameName     = 'Eight Queens';
const gameVersion  = '0.0.10';
const gameHome     = 'https://github.com/attogram/EightQueens';
const debugMode    = true;

class EightQueens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attacked: [], // Array of queens under attack
            position: {}  // Object of current board position
        }
    }

    onSquareClick = square => {
        let position = this.state.position;
        if (position[[square]]) {
            debug('Deleting Queen: ' + square);
            delete position[[square]];
        } else {
            if (Object.keys(position).length === 8) {
                return;
            }
            debug('Adding Queen: ' + square);
            position[[square]] = 'wQ';
        }

        const attacked = attack.underAttack(position);
        attacked.forEach(function(square) {
            debug('UNDER ATTACK: ' + square);
            position[square] = 'bQ'; // flip queens under attack
        });

        this.setState({
            attacked: attacked,
            position: position
        });
    };

    render() {
        debug('render: this.state.attacked: ' + JSON.stringify(this.state.attacked));
        debug('render: this.state.position: ' + JSON.stringify(this.state.position));

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
                    position={this.state.position}
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
                    - Place <b>Eight Queens</b> so that none are under attack!<br />
                    - Click a square to place a Queen<br />
                    - Click a Queen to remove it
                </p>
            </div>
        );
    }
}

export default EightQueens;

export function debug(message) {
    if (!debugMode) {
        return;
    }
    const stamp = new Date();
    console.log(stamp.toISOString() + ': ' + message);
}
