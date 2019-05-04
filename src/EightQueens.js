import React, { Component } from 'react';
import './EightQueens.css';
import Chessboard from './chessboardjsx-mod/index.js';
import Title from './Title.js';
import Status from './Status.js';

class EightQueens extends Component {

    getPosition = position => this.setState({ myPosition: position })

    constructor(props) {
        super(props);

        this.state = {
            board: Chessboard.getPosition
        };
    }

    render() {
        const gameName     = 'Eight Queens';
        const gameVersion  = '0.0.3';
        const gameHome     = 'https://github.com/attogram/EightQueens';
        return (
            <div className="EightQueens">
                <div className="EightQueens-header">
                    <Title
                        gameName={gameName}
                        gameHome={gameHome}
                        gameVersion={gameVersion}
                    />
                    <Status />
                </div>
                <Chessboard
                    id="EightQueens"
                    sparePieces={true}
                    dropOffBoard="trash"
                    calcWidth={({ screenWidth }) => (screenWidth < 500 ? 350 : 480)}
                />
            </div>
        );
    }
}

export default EightQueens;
