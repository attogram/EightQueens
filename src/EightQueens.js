import React, { Component } from 'react';
import './EightQueens.css';
import Chessboard from 'chessboardjsx';
import Title from './Title.js';
import Status from './Status.js';

const gameName     = 'Eight Queens';
const gameVersion  = '0.0.5';
const gameHome     = 'https://github.com/attogram/EightQueens';

class EightQueens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 'Click any square to place a Queen',
            position: {}
        }
    }

    onSquareClick = square => {
        let position = this.state.position;
        if (position[[square]]) {
            delete position[[square]];
        } else {
            position[[square]] = 'wQ';
        }
        this.setState(
            {
                clicked: square,
                position: position,
            }
        );
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
                        clicked={this.state.clicked}
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
                />
            </div>
        );
    }
}

export default EightQueens;
