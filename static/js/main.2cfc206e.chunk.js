(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/queenUnderAttack.b80b6116.svg"},function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),o=n.n(s),i=(n(18),n(1)),l=n(2),u=n(4),c=n(3),h=n(6),m=n(5);n(19);function p(e){var t=[];return Object.keys(e).forEach(function(e){d(e).forEach(function(e){-1===t.indexOf(e)&&t.push(e)})}),t}function d(e){var t,n=e.substr(0,1),a=parseInt(e.substr(1,1)),r=[];for(t=1;t<=8;t++)t!==a&&r.push([n]+t);for(t=1;t<=8;t++)g(t)!==n&&r.push(g(t)+a);if("h"!==n&&8!==a)for(var s=n,o=a+1;o<=8&&"i"!==(s=b(s));o++)r.push(s+o);if("a"!==n&&8!==a)for(var i=n,l=a+1;l<=8&&"`"!==(i=f(i));l++)r.push(i+l);if("h"!==n&&1!==a)for(var u=n,c=a-1;c>=1&&"i"!==(u=b(u));c--)r.push(u+c);if("a"!==n&&1!==a)for(var h=n,m=a-1;m>=1&&"`"!==(h=f(h));m--)r.push(h+m);return r}function g(e){switch(e){case 1:return"a";case 2:return"b";case 3:return"c";case 4:return"d";case 5:return"e";case 6:return"f";case 7:return"g";case 8:return"h";default:return""}}function b(e){return String.fromCharCode(e.charCodeAt(0)+1)}function f(e){return String.fromCharCode(e.charCodeAt(0)-1)}n(9);var v="abcdefgh".split("");function k(e){return"string"===typeof e}function q(e){var t=e.split("");return"w"===t[0]?t[1].toUpperCase():t[1].toLowerCase()}var y=n(10),E=n.n(y),O=(n(20),["The eight queens puzzle is an example of the n queens problem of placing n non-attacking queens on an n\xd7n chessboard.","Chess composer Max Bezzel published the original eight queens puzzle in 1848.","Franz Nauck published the first solutions to the eight queens puzzle in 1850.","Many mathematicians, including Carl Friedrich Gauss, have worked on the 8 queens puzzle and its generalized n-queens version.","In 1874, S. Gunther proposed a method using determinants to find solutions to the eight queens puzzle.","In 1972, Edsger Dijkstra used the eight queens problem to illustrate the power of structured programming.","The problem of finding all solutions to the 8-queens problem can be computationally expensive.","There are 4,426,165,368 possible arrangements of eight queens on an 8\xd78 board.","There are 92 solutions to the eight queens problem!","There are only 12 fundamental solutions if you ignore symmetry operations, rotation and reflection","A fundamental solution usually has eight variants.","Finding all solutions to the eight queens puzzle is a good example of a simple but nontrivial problem.","Eight queens is often used as an example problem for programming techniques.","8 queens is often an example problem for constraint programming, logic programming and genetic algorithms.","Eight queens can be solved with a recursive algorithm.","In 1976 Niklaus Wirth wrote a Pascal program to find one solution to the eight queens puzzle","The eight queens problem is extremely well studied in the mathematical literature.","In chess a queen attacks other squares on the same row, column, or either diagonal as itself.","The n-queens problem is to find a set of n locations on a chessboard, no two of which are on the same row, column or diagonal.","The eight queens problem has inherent symmetry.","For any solution we obtain another solution by any of the 8 symmetries of the chessboard.","The n-queens problem is solvable for n=1 and n\u22654.","A solution to the n-queens problem for any n\u22602,3 was given in 1874 by Pauls.","The parameter n for n-queens only needs log(n) bits to specify, so O(n) is exponential in the input size.","The number of symmetrically distinct solutions to the n-queens problem is Sequence number A002562 in the On-Line Encyclopedia of Integer Sequences.","The number of solutions to the n-queens problem is Sequence number A000170 in the On-Line Encyclopedia of Integer Sequences.","The N-Queen problem is a well-known CSP problem.","Traditional methods of solving the N-queens problem are based on back-tracking.","The N-Queen problem shows a large class of nondeterministic problems that cannot be solved using deterministic algorithms in reasonable time.","Many algorithms and methods have been used to resolve the n-Queen problem.","Ahrabian et al. used the DNA Sticker algorithm to resolve the n-Queen problem.","Khan et al. used the ant colony algorithm to solvethe n-Queen problem.","Farhan et al. used a genetic algorithm to solve this problem and found all 92 possible solutions to the 8-queen problem.","A depth-first search backtracking algorithm may resolve the n-Queens problem in acceptable time, but just for small values of n.","The n-Queen problem can be successfully run with parallel genetic algorithms.","The n-Queens problem is a traditional intractable problem that is used to discuss numerous kinds of searching problems.","Hint: how does a knight move?","Is it a chess puzzle, a chess problem, or a chess game?  Who cares, just play!","Of the 92 possible solutions, there are 12 fundamental solutions.","How to programmatically solve the 8 Queens problem is often used as a test during programmer interviews.","How to programmatically solve the 8 Queens problem is often used as an assignment in computer science classes.","Mathematicians love eight queens."]),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={tidbit:""},n.tick=n.tick.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.tick,7e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"tick",value:function(){var e=O[Math.floor(Math.random()*O.length)];this.setState({tidbit:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"EightQueens-didyouknow"},this.state.tidbit)}}]),t}(a.Component),j=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=8-this.props.queensOnBoard,t=e+" Queen";e>1&&(t+="s"),t+=" needed";var n="EightQueens-playing";return e||(t="Not Solved",n="EightQueens-not"),8===this.props.queensOnBoard&&0===this.props.queensUnderAttack&&(t="\ud83d\ude03 SOLVED! YOU WIN",n="EightQueens-win"),r.a.createElement("div",{className:"EightQueens-status"},r.a.createElement("b",null,this.props.queensOnBoard)," Queens on board",r.a.createElement("br",null),r.a.createElement("b",null,this.props.queensUnderAttack)," Queens attacked",r.a.createElement("br",null),r.a.createElement("div",{className:n},t))}}]),t}(a.Component)),Q=(n(22),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={currentTime:(new Date).valueOf(),startTime:(new Date).valueOf()},n.tick=n.tick.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"tick",value:function(){this.setState({currentTime:(new Date).valueOf()})}},{key:"render",value:function(){"solved"===this.props.gameStatus&&clearInterval(this.timer);var e=Math.floor((this.state.currentTime-this.state.startTime)/1e3);return r.a.createElement("div",{className:"EightQueens-timer"},r.a.createElement("small",null,this.props.gameStatus),r.a.createElement("br",null),r.a.createElement("b",null,e),r.a.createElement("br",null),r.a.createElement("small",null,"seconds"))}}]),t}(a.Component)),S=(n(23),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"EightQueens-title"},r.a.createElement("a",{href:this.props.gameHome,target:"_blank",rel:"noopener noreferrer"},this.props.gameName,r.a.createElement("br",null),r.a.createElement("small",null,"v",this.props.gameVersion)))}}]),t}(a.Component)),A=n(11),C=n.n(A),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).onSquareClick=function(e){var t=n.state.position;if(t[[e]])delete t[[e]];else{if(8===Object.keys(t).length)return;t[[e]]="wQ"}var a=function(e){var t=[],n=Object.keys(e);return Object.keys(e).forEach(function(e){var a=d(e);n.some(function(e){return a.indexOf(e)>=0})&&t.push(e)}),t}(t);Object.keys(t).forEach(function(e){a.includes(e)&&"bQ"!==e?t[e]="bQ":"wQ"!==e&&(t[e]="wQ")});var r=Object.keys(t).length,s=0;a&&(s=a.length);var o="playing";8===r&&0===s&&(o="solved"),n.setState({attacked:a,position:t,queensOnBoard:r,queensUnderAttack:s,attackedSquares:p(t),gameStatus:o})},n.state={attacked:[],position:{},gameStatus:"playing",queensOnBoard:0,queensUnderAttack:0,showAttackPaths:!1,attackedSquares:0},n.onSquareClick=n.onSquareClick.bind(Object(h.a)(n)),n.toggleAttackPaths=n.toggleAttackPaths.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleAttackPaths",value:function(){var e=!this.state.showAttackPaths,t=this.state.attackedSquares;e||(t=p(this.state.position)),this.setState({showAttackPaths:e,attackedSquares:t})}},{key:"render",value:function(){var e=function(e){if(!function(e){if(null===e||"object"!==typeof e)return!1;for(var t in e)if(e.hasOwnProperty(t)&&(!k(a=t)||-1===a.search(/^[a-h][1-8]$/)||!k(n=e[t])||-1===n.search(/^[bw][KQRNBP]$/)))return!1;var n,a;return!0}(e))return!1;for(var t="",n=8,a=0;a<8;a++){for(var r=0;r<8;r++){var s=v[r]+n;e.hasOwnProperty(s)?t+=q(e[s]):t+="1"}7!==a&&(t+="/"),n-=1}return t=function(e){return e.replace(/11111111/g,"8").replace(/1111111/g,"7").replace(/111111/g,"6").replace(/11111/g,"5").replace(/1111/g,"4").replace(/111/g,"3").replace(/11/g,"2")}(t)}(this.state.position),t={},n="Show";return this.state.showAttackPaths&&(n="Hide",this.state.attackedSquares.length&&this.state.attackedSquares.forEach(function(e){t[e]={background:"radial-gradient(circle, orange, transparent 50%)"}})),r.a.createElement("div",{className:"EightQueens"},r.a.createElement("div",{className:"EightQueens-header"},r.a.createElement(S,{gameName:"Eight Queens",gameHome:"https://github.com/attogram/EightQueens",gameVersion:"0.4.0"}),r.a.createElement(j,{queensOnBoard:this.state.queensOnBoard,queensUnderAttack:this.state.queensUnderAttack}),r.a.createElement(Q,{gameStatus:this.state.gameStatus})),r.a.createElement(E.a,{id:"EightQueens",position:e,key:e,sparePieces:!1,draggable:!1,calcWidth:function(e){return e.screenWidth<500?350:480},onSquareClick:this.onSquareClick,squareStyles:t,pieces:{bQ:function(e){var t=e.squareWidth,n=e.isDragging;return r.a.createElement("img",{style:{width:n?1.75*t:t,height:n?1.75*t:t},src:C.a,alt:"Under Attack"})}}}),r.a.createElement(w,null),r.a.createElement("div",{className:"EightQueens-instructions"},"- Place ",r.a.createElement("b",null,"Eight Queens")," with none under attack!",r.a.createElement("br",null),"- Click a square to place a Queen. Click a Queen to remove it."),r.a.createElement("div",{className:"EightQueens-header"},r.a.createElement("button",{className:"EightQueens-paths",onClick:this.toggleAttackPaths},n," attack paths"),r.a.createElement("button",{className:"EightQueens-restart"},r.a.createElement("a",{href:"."},"Restart"))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.2cfc206e.chunk.js.map