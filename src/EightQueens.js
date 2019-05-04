import React from 'react';
import './EightQueens.css';
import Chessboard from './chessboardjsx-mod/index.js';
import Title from './Title.js';
import Status from './Status.js';

function EightQueens() {
  return (
    <div className="EightQueens">
        <div className="EightQueens-header">
            <Title />
            <Status />
        </div>
        <Chessboard
            id="EightQueens"
            sparePieces={true}
            dropOffBoard="trash"
        />
    </div>
  );
}

export default EightQueens;
