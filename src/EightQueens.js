import React from 'react';
import './EightQueens.css';
import Chessboard from "./chessboardjsx-mod/index.js";

function EightQueens() {
  return (
    <div className="EightQueens">
        <div className="EightQueens-header">
            <a
                href="https://github.com/attogram/EightQueens"
                target="_blank"
                rel="noopener noreferrer"
            >
                Eight Queens
                v0.0.1-alpha
            </a>
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
