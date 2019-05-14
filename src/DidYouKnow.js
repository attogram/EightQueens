/**
 * Eight Queens chess game
 * Did You Know box
 */
import React, { Component } from 'react';
import './DidYouKnow.css';

const tidbits = [
    // following tidbits modified from https://en.wikipedia.org/wiki/Eight_queens_puzzle
    // License: Creative Commons Attribution-ShareAlike License
    "The eight queens puzzle is an example of the n queens problem of placing n non-attacking queens on an n×n chessboard.",
    "Chess composer Max Bezzel published the original eight queens puzzle in 1848.",
    "Franz Nauck published the first solutions to the eight queens puzzle in 1850.",
    "Many mathematicians, including Carl Friedrich Gauss, have worked on both the eight queens puzzle and its generalized n-queens version.",
    "In 1874, S. Gunther proposed a method using determinants to find solutions to the eight queens puzzle.",
    "In 1972, Edsger Dijkstra used the eight queens problem to illustrate the power of structured programming.",
    "The problem of finding all solutions to the 8-queens problem can be computationally expensive.",
    "There are 4,426,165,368 possible arrangements of eight queens on an 8×8 board.",
    "There are 92 solutions to the eight queens problem!",
    "If solutions that differ only by the symmetry operations of rotation and reflection are counted as one, the puzzle has 12 solutions.",
    "A fundamental solution usually has eight variants (including its original form) obtained by rotating 90, 180, or 270° and then reflecting each of the four rotational variants in a mirror in a fixed position.",
    "Finding all solutions to the eight queens puzzle is a good example of a simple but nontrivial problem.",
    "Eight queens is often used as an example problem for various programming techniques, including nontraditional approaches such as constraint programming, logic programming or genetic algorithms.",
    "Eight queens can be solved with a recursive algorithm, by phrasing the n queens problem inductively in terms of adding a single queen to any solution to the problem of placing n−1 queens on an n×n chessboard.",
    "In 1976 Niklaus Wirth wrote a Pascal program to find one solution to the eight queens puzzle",
    // following tidbits from Attogram Project:
    "Hint: how does a knight move?",
    "Is it a chess puzzle, a chess problem, or a chess game?  Who cares, just play!",
];

class DidYouKnow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tidbit: ''
        };

        this.tick = this.tick.bind(this)
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 5000); // 5 seconds
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick() {
        const tidbit = tidbits[Math.floor(Math.random() * (tidbits.length))];
        this.setState({ tidbit: tidbit });
    }

    render() {
        return (
            <div className="EightQueens-didyouknow">
                {this.state.tidbit}
            </div>
        );
    }
}

export default DidYouKnow;
