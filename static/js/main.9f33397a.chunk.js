(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/queenUnderAttack.b80b6116.svg"},function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),i=n.n(s),o=(n(16),n(1)),c=n(2),u=n(4),l=n(3),h=n(5);n(17);function m(e){var t=[],n=Object.keys(e);return Object.keys(e).forEach(function(e){var a=function(e){var t,n=e.substr(0,1),a=parseInt(e.substr(1,1)),r=[];for(t=1;t<=8;t++)t!==a&&r.push([n]+t);for(t=1;t<=8;t++)d(t)!==n&&r.push(d(t)+a);if("h"!==n&&8!==a)for(var s=n,i=a+1,o=i;o<=8&&"i"!==(s=p(s));o++)r.push(s+o);if("a"!==n&&8!==a)for(var c=n,u=a+1,l=u;l<=8&&"`"!==(c=f(c));l++)r.push(c+l);if("h"!==n&&1!==a)for(var h=n,m=a-1,b=m;b>=1&&"i"!==(h=p(h));b--)r.push(h+b);if("a"!==n&&1!==a)for(var g=n,E=a-1,v=E;v>=1&&"`"!==(g=f(g));v--)r.push(g+v);return r}(e);n.some(function(e){return a.indexOf(e)>=0})&&t.push(e)}),t}function d(e){switch(e){case 1:return"a";case 2:return"b";case 3:return"c";case 4:return"d";case 5:return"e";case 6:return"f";case 7:return"g";case 8:return"h";default:return""}}function p(e){return String.fromCharCode(e.charCodeAt(0)+1)}function f(e){return String.fromCharCode(e.charCodeAt(0)-1)}var b=n(8),g=n.n(b),E=(n(18),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=8-this.props.queensOnBoard,t="\u2655 add "+e+" more Queen";e>1&&(t+="s"),e||(t="\ud83d\ude41 Not Solved");var n="EightQueens-playing";return 8===this.props.queensOnBoard&&0===this.props.queensUnderAttack&&(t="\ud83d\ude03 SOLVED! YOU WIN! ",n="EightQueens-win"),r.a.createElement("div",{className:"EightQueens-status"},r.a.createElement("b",null,this.props.queensOnBoard)," Queens on board",r.a.createElement("br",null),r.a.createElement("b",null,this.props.queensUnderAttack)," Queens under attack",r.a.createElement("br",null),r.a.createElement("div",{className:n},t))}}]),t}(a.Component)),v=(n(19),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"EightQueens-title"},r.a.createElement("a",{href:this.props.gameHome,target:"_blank",rel:"noopener noreferrer"},this.props.gameName,r.a.createElement("br",null),r.a.createElement("small",null,"v",this.props.gameVersion)))}}]),t}(a.Component)),k=n(9),O=n.n(k),Q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onSquareClick=function(e){var t=n.state.position;if(t[[e]])delete t[[e]];else{if(8===Object.keys(t).length)return;t[[e]]="wQ"}var a=m(t);Object.keys(t).forEach(function(e){a.includes(e)&&"bQ"!==e?t[e]="bQ":"wQ"!==e&&(t[e]="wQ")}),n.setState({unmountChessboard:!0}),n.setState({attacked:a,position:t})},n.state={attacked:[],position:{},unmountChessboard:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.state.unmountChessboard)return this.setState({unmountChessboard:!1}),r.a.createElement("div",{className:"EightQueens"});var e=Object.keys(this.state.position).length,t=0;return this.state.attacked&&(t=this.state.attacked.length),r.a.createElement("div",{className:"EightQueens"},r.a.createElement("div",{className:"EightQueens-header"},r.a.createElement(v,{gameName:"Eight Queens",gameHome:"https://github.com/attogram/EightQueens",gameVersion:"0.0.12"}),r.a.createElement(E,{queensOnBoard:e,queensUnderAttack:t})),r.a.createElement(g.a,{id:"EightQueens",position:this.state.position,sparePieces:!1,draggable:!1,undo:!0,calcWidth:function(e){return e.screenWidth<500?350:480},onSquareClick:this.onSquareClick,pieces:{bQ:function(e){var t=e.squareWidth,n=e.isDragging;return r.a.createElement("img",{style:{width:n?1.75*t:t,height:n?1.75*t:t},src:O.a,alt:"Under Attack"})}}}),r.a.createElement("p",null,"- Place ",r.a.createElement("b",null,"Eight Queens")," with none under attack!",r.a.createElement("br",null),"- Click a square to place a Queen",r.a.createElement("br",null),"- Click a Queen to remove it"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.9f33397a.chunk.js.map