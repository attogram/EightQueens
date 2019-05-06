import React, { Component } from 'react';
import './EightQueens.css';
import Chessboard from 'chessboardjsx';
import Title from './Title.js';
import Status from './Status.js';

const gameName     = 'Eight Queens';
const gameVersion  = '0.0.4';
const gameHome     = 'https://github.com/attogram/EightQueens';

class EightQueens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: ''
        }
    }

    onSquareClick = square => {
        this.setState(
            {
                clicked: square
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
                    />
                </div>
                <Chessboard
                    id="EightQueens"
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
