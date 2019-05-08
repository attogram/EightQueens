import React, { Component } from 'react';
import './EightQueens.css';
import * as attack from './UnderAttack.js';
import Chessboard from 'chessboardjsx';
import Status from './Status.js';
import Title from './Title.js';
import queenUnderAttackSvg from './queenUnderAttack.svg';

const gameName     = 'Eight Queens';
const gameVersion  = '0.0.8';
const gameHome     = 'https://github.com/attogram/EightQueens';

class EightQueens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attacked: [], // Array of queens under attack
            position: {}, // Object of current board position
            status: '', // String of Game Status
        }
    }

    onSquareClick = square => {
        let position = this.state.position; // Get current position
        if (position[[square]]) {
            delete position[[square]]; // clicked Queen, remove it
        } else {
            if (Object.keys(position).length === 8) {
                this.setState({status: 'Click a queen to delete it'});

                return;
            }
            position[[square]] = 'wQ'; // clicked Empty Square, add a Queen
        }

        const attacked = attack.underAttack(position);
        attacked.forEach(function(square) {
            position[square] = 'bQ'; // flip queens under attack
        });

        this.setState({
            attacked: attacked,
            position: position,
            status: '',
        });

    };

    render() {
        return (
            <div className="EightQueens">
                <div className="EightQueens-header">
                    <Title
                        gameName={gameName}
                        gameHome={gameHome}
                        gameVersion={gameVersion}
                    />
                    <Status
                        attacked={this.state.attacked}
                        position={this.state.position}
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
                <small>
                p: {JSON.stringify(this.state.position)}<br />
                a: {JSON.stringify(this.state.attacked)}
                </small>
            </div>
        );
    }
}

export default EightQueens;
