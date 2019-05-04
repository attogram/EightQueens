import React from 'react';
import './Title.css';

const version = '0.0.2';

function Title() {
    return (
        <div className="EightQueens-title">
            <a
                href="https://github.com/attogram/EightQueens"
                target="_blank"
                rel="noopener noreferrer"
            >
                Eight Queens
                <br />
                <small>v{version}</small>
            </a>
        </div>
    );
}

export default Title;
