(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(72),i=r.n(o),s=(r(83),r(84),r(12)),c=r(6),l=r(1),u=r(2),p=r(4),d=r(3),f=r(5),h=r(9),g=r(74),m=r(75),k=r.n(m),w="piece",y="abcdefgh".split("");function C(e){return"string"===typeof e}function S(e){if(!v(e))return!1;for(var t=(e=e.replace(/ .+$/,"")).split("/"),r={},a=8,n=0;n<8;n++){for(var o=t[n].split(""),i=0,s=0;s<o.length;s++){if(-1!==o[s].search(/[1-8]/))i+=parseInt(o[s],10);else r[y[i]+a]=L(o[s]),i+=1}a-=1}return r}function v(e){if(!C(e))return!1;var t=(e=function(e){return e.replace(/8/g,"11111111").replace(/7/g,"1111111").replace(/6/g,"111111").replace(/5/g,"11111").replace(/4/g,"1111").replace(/3/g,"111").replace(/2/g,"11")}(e=e.replace(/ .+$/,""))).split("/");if(8!==t.length)return!1;for(var r=0;r<8;r++)if(8!==t[r].length||-1!==t[r].search(/[^kqrnbpKQRNBP1]/))return!1;return!0}function L(e){return e.toLowerCase()===e?"b"+e.toUpperCase():"w"+e.toUpperCase()}function q(e){if(null===e||"object"!==typeof e)return!1;for(var t in e)if(e.hasOwnProperty(t)&&(!C(a=t)||-1===a.search(/^[a-h][1-8]$/)||(!C(r=e[t])||-1===r.search(/^[bw][KQRNBP]$/))))return!1;var r,a;return!0}var b=function(e){var t=e.dropTarget,r=e.square,a=e.targetSquare,o=e.waitForTransition,i=e.getSquareCoordinates,s=e.piece,l=e.width,u=e.pieces,p=e.transitionDuration,d=e.isDragging,f=e.sourceSquare,h=e.onPieceClick,g=e.allowDrag,m=e.customDragLayerStyles,k=void 0===m?{}:m,w=e.phantomPieceStyles,y=void 0===w?{}:w,C={squareWidth:l/8,isDragging:d,droppedPiece:t&&t.piece,targetSquare:t&&t.target,sourceSquare:t&&t.source};return n.a.createElement("div",{"data-testid":"".concat(s,"-").concat(r),onClick:function(){return h(s)},style:Object(c.a)({},M({isDragging:d,transitionDuration:p,waitForTransition:o,square:r,targetSquare:a,sourceSquare:f,getSquareCoordinates:i,getTranslation:D,piece:s,allowDrag:g}),y,k)},"function"===typeof u[s]?u[s](C):n.a.createElement("svg",{viewBox:"1 1 43 43",width:l/8,height:l/8},n.a.createElement("g",null,u[s])))},E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e){return!(null===e.dropTarget&&!e.isDragging&&!this.props.isDragging&&this.props.sourceSquare===e.sourceSquare&&this.props.waitForTransition===e.waitForTransition&&this.props.width===e.width)}},{key:"componentDidMount",value:function(){window.addEventListener("touchstart",this.props.setTouchState),this.props.connectDragPreview(Object(g.getEmptyImage)(),{captureDraggingState:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("touchstart",this.props.setTouchState)}},{key:"render",value:function(){var e=this.props,t=e.square,r=e.targetSquare,a=e.waitForTransition,n=e.getSquareCoordinates,o=e.piece,i=e.width,s=e.pieces,c=e.transitionDuration,l=e.isDragging,u=e.connectDragSource,p=e.sourceSquare,d=e.dropTarget,f=e.onPieceClick,h=e.allowDrag;return u(b({square:t,targetSquare:r,waitForTransition:a,getSquareCoordinates:n,piece:o,width:i,pieces:s,transitionDuration:c,isDragging:l,sourceSquare:p,dropTarget:d,onPieceClick:f,allowDrag:h}))}}]),t}(a.Component);var O=Object(h.DragSource)(w,{canDrag:function(e){return e.draggable&&e.allowDrag({piece:e.piece,sourceSquare:e.square})},beginDrag:function(e){return{piece:e.piece,source:e.square,board:e.id}},endDrag:function(e,t){var r=e.setPosition,a=e.dropOffBoard,n=e.piece,o=e.square,i=e.onDrop,s=e.wasManuallyDropped,c=e.wasSquareClicked,l=t.getDropResult(),u=t.didDrop();if(!u&&"trash"===a)return r({sourceSquare:o,piece:n});if(t.getItem().board===(l&&l.board)&&u){if(i.length)return c(!1),s(!0),i({sourceSquare:o,targetSquare:l.target,piece:n});r({sourceSquare:o,targetSquare:l.target,piece:n})}}},function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),dropTarget:t.getDropResult()}})(E),D=function(e){var t=e.waitForTransition,r=e.square,a=e.targetSquare,n=e.sourceSquare,o=e.getSquareCoordinates;return function(e,t){return t&&t===e}(r,a)&&t&&function(e){var t=(0,e.getSquareCoordinates)(e.sourceSq,e.targetSq),r=t.sourceSquare,a=t.targetSquare;return"translate(".concat(r.x-a.x,"px, ").concat(r.y-a.y,"px)")}({getSquareCoordinates:o,sourceSq:n,targetSq:a})},M=function(e){var t=e.isDragging,r=e.transitionDuration,a=e.waitForTransition,n=e.square,o=e.targetSquare,i=e.sourceSquare,s=e.getSquareCoordinates,c=e.getTranslation,l=e.piece,u=e.allowDrag;return{opacity:t?0:1,transform:c({waitForTransition:a,square:n,targetSquare:o,sourceSquare:i,getSquareCoordinates:s}),transition:"transform ".concat(r,"ms"),zIndex:5,cursor:t?"-webkit-grabbing":u({piece:l,sourceSquare:n})?"-webkit-grab":"not-allowed"}},P=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).onClick=function(){r.props.wasSquareClicked(!0),r.props.onSquareClick(r.props.square)},r}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.square,r=e.setSquareCoordinates,a=e.width;(0,e.roughSquare)({squareElement:this.roughSquareSvg,squareWidth:a/8});var n=this[t].getBoundingClientRect();r(n.x,n.y,t)}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.screenWidth,a=t.screenHeight,n=t.square,o=t.setSquareCoordinates;if(e.screenWidth!==r||e.screenHeight!==a){var i=this[n].getBoundingClientRect();o(i.x,i.y,n)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.connectDropTarget,a=t.width,o=t.squareColor,i=t.children,s=t.square,l=t.roughSquare,u=t.onMouseOverSquare,p=t.onMouseOutSquare,d=t.squareStyles,f=t.onDragOverSquare,h=t.onSquareRightClick;return r(n.a.createElement("div",{"data-testid":"".concat(o,"-square"),"data-squareid":s,ref:function(t){return e[s]=t},style:x(this.props),onMouseOver:function(){return u(s)},onMouseOut:function(){return p(s)},onDragEnter:function(){return f(s)},onClick:function(){return e.onClick()},onContextMenu:function(e){e.preventDefault(),h(s)}},n.a.createElement("div",{style:Object(c.a)({},T(a),z,d[s]&&d[s])},l.length?n.a.createElement("div",{style:z},i,n.a.createElement("svg",{style:Object(c.a)({},T(a),{position:"absolute",display:"block"}),ref:function(t){return e.roughSquareSvg=t}})):i)))}}]),t}(a.Component);var j=Object(h.DropTarget)(w,{drop:function(e,t){return{target:e.square,board:e.id,piece:t.getItem().piece,source:t.getItem().source}}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})(P),x=function(e){var t=e.width,r=e.squareColor,a=e.isOver,n=e.darkSquareStyle,o=e.lightSquareStyle,i=e.dropSquareStyle;return Object(c.a)({},Object(c.a)({},T(t),z,"black"===r?n:o,a&&i))},z={display:"flex",justifyContent:"center"},T=function(e){return{width:e/8,height:e/8}},W=function(e,t){return"white"===e?t+1:t-1},R=function(e,t,r){return"black"===e?t[7-r]:t[r]},A=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.row,r=e.col,o=e.orientation,i=e.lightSquareStyle,s=e.darkSquareStyle,l=i.backgroundColor,u=s.backgroundColor,p=0===r,d="white"===o&&0===t||"black"===o&&9===t,f=p&&d;return f?function(e,t){var r=e.orientation,o=e.row,i=e.width,s=e.alpha,l=e.col,u=t.whiteColor;return n.a.createElement(a.Fragment,null,n.a.createElement("div",{"data-testid":"bottom-left-".concat(W(r,o)),style:Object(c.a)({},Q,{fontSize:i/48,color:u},N(i))},W(r,o)),n.a.createElement("div",{"data-testid":"bottom-left-".concat(R(r,s,l)),style:Object(c.a)({},Q,{fontSize:i/48,color:u},I(i))},R(r,s,l)))}(this.props,{whiteColor:l}):d?function(e,t){var r=e.orientation,a=e.width,o=e.alpha,i=e.col,s=t.whiteColor,l=t.blackColor;return n.a.createElement("div",{"data-testid":"column-".concat(R(r,o,i)),style:Object(c.a)({},Q,B({col:i,width:a,blackColor:l,whiteColor:s}),I(a))},R(r,o,i))}(this.props,{whiteColor:l,blackColor:u}):p?function(e,t){var r=e.orientation,a=e.row,o=e.width,i=t.whiteColor,s=t.blackColor,l=t.isRow,u=t.isBottomLeftSquare;return n.a.createElement("div",{style:Object(c.a)({},Q,F({row:a,width:o,blackColor:s,whiteColor:i,orientation:r,isBottomLeftSquare:u,isRow:l}),N(o))},W(r,a))}(this.props,{whiteColor:l,blackColor:u,isRow:p,isBottomLeftSquare:f}):null}}]),t}(a.PureComponent);var B=function(e){var t=e.col,r=e.width,a=e.blackColor,n=e.whiteColor;return{fontSize:r/48,color:t%2!==0?a:n}},F=function(e){var t=e.row,r=e.width,a=e.blackColor,n=e.whiteColor,o=e.orientation,i=e.isBottomLeftSquare,s=e.isRow;return{fontSize:r/48,color:"black"===o?s&&!i&&t%2===0?a:n:s&&!i&&t%2!==0?a:n}},I=function(e){return{alignSelf:"flex-end",paddingLeft:e/8-e/48}},N=function(e){return{alignSelf:"flex-start",paddingRight:e/8-e/48}},Q={fontFamily:"Helvetica Neue",zIndex:3,position:"absolute"},H=r(8),K=r.n(H);function U(e){var t=e.width,r=e.pieces,a=e.phantomPieceValue,n=e.allowDrag;return b({width:t,pieces:r,piece:a,phantomPieceStyles:V(t),allowDrag:n})}U.propTypes={width:K.a.number,phantomPieceValue:K.a.string,pieces:K.a.object,allowDrag:K.a.func};var $=U,V=function(e){return{position:"absolute",width:e/8,height:e/8,zIndex:1}},J=r(43),_=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,r=e.boardStyle,a=e.orientation,o=e.children,i=e.boardId,s=y,l=8,u="white";return"black"===a&&(l=1),n.a.createElement("div",{style:Object(c.a)({},G(t),r),"data-boardid":i},Object(J.a)(Array(8)).map(function(e,r){return l="black"===a?l+1:l-1,n.a.createElement("div",{key:r.toString(),style:X(t)},Object(J.a)(Array(8)).map(function(e,t){var r="black"===a?s[7-t]+(l-1):s[t]+(l+1);return 0!==t&&(u="black"===u?"white":"black"),o({square:r,squareColor:u,col:t,row:l,alpha:s})}))}))}}]),t}(a.Component),G=function(e){return{width:e,height:e,cursor:"default"}},X=function(e){return{display:"flex",flexWrap:"nowrap",width:e}},Y=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).setSquareCoordinates=function(e,t,a){return r.setState(Object(s.a)({},a,{x:e,y:t}))},r.getSquareCoordinates=function(e,t){return{sourceSquare:r.state[e],targetSquare:r.state[t]}},r.showPhantom=function(e){var t=e.square,r=e.targetSquare,a=e.phantomPiece;return a&&a[r]&&function(e,t){return t&&t===e}(t,r)},r.hasPiece=function(e,t){return e&&Object.keys(e)&&Object.keys(e).includes(t)},r}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(Ce.Consumer,null,function(t){return n.a.createElement(_,{width:t.width,boardStyle:t.boardStyle,orientation:t.orientation,boardId:t.id},function(r){var a=r.square,o=r.squareColor,i=r.col,s=r.row,c=r.alpha;return n.a.createElement(j,{key:"".concat(i).concat(s),width:t.width,square:a,squareColor:o,setSquareCoordinates:e.setSquareCoordinates,lightSquareStyle:t.lightSquareStyle,darkSquareStyle:t.darkSquareStyle,roughSquare:t.roughSquare,onMouseOverSquare:t.onMouseOverSquare,onMouseOutSquare:t.onMouseOutSquare,onDragOverSquare:t.onDragOverSquare,dropSquareStyle:t.dropSquareStyle,id:t.id,screenWidth:t.screenWidth,screenHeight:t.screenHeight,squareStyles:t.squareStyles,onSquareClick:t.onSquareClick,onSquareRightClick:t.onSquareRightClick,wasSquareClicked:t.wasSquareClicked},e.hasPiece(t.currentPosition,a)?n.a.createElement(O,{pieces:t.pieces,square:a,piece:t.currentPosition[a],width:t.width,setPosition:t.setPosition,dropOffBoard:t.dropOffBoard,getSquareCoordinates:e.getSquareCoordinates,draggable:t.draggable,onDrop:t.onDrop,sourceSquare:t.sourceSquare,targetSquare:t.targetSquare,waitForTransition:t.waitForTransition,transitionDuration:t.transitionDuration,orientation:t.orientation,id:t.id,setTouchState:t.setTouchState,wasManuallyDropped:t.wasManuallyDropped,phantomPiece:t.phantomPiece,onPieceClick:t.onPieceClick,wasSquareClicked:t.wasSquareClicked,allowDrag:t.allowDrag}):null,e.showPhantom({square:a,targetSquare:t.targetSquare,phantomPiece:t.phantomPiece})&&n.a.createElement($,{width:t.width,phantomPieceValue:t.phantomPiece[t.targetSquare],pieces:t.pieces,showNotation:t.showNotation,allowDrag:t.allowDrag}),t.showNotation&&n.a.createElement(A,{row:s,col:i,alpha:c,orientation:t.orientation,width:t.width,lightSquareStyle:t.lightSquareStyle,darkSquareStyle:t.darkSquareStyle}))})})}}]),t}(a.Component),Z=r(27),ee=r.n(Z),te=r(76),re=r.n(te),ae=r(77),ne=r.n(ae);var oe=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).getOrientation=function(e){return r.props.top?"black"===e?"white":"black":"black"===e?"black":"white"},r}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(Ce.Consumer,null,function(t){var r="black"===e.getOrientation(t.orientation)?["bQ"]:["wQ"];return n.a.createElement("div",{style:se(t.width)},r.map(function(e){return n.a.createElement("div",{"data-testid":"spare-".concat(e),key:e},n.a.createElement(O,{piece:e,width:t.width,setPosition:t.setPosition,square:"spare",dropOffBoard:t.dropOffBoard,draggable:!0,onDrop:t.onDrop,sourceSquare:t.sourceSquare,targetSquare:t.targetSquare,sourcePiece:t.sourcePiece,orientation:t.orientation,manualDrop:t.manualDrop,id:t.id,pieces:t.pieces,wasManuallyDropped:t.wasManuallyDropped,onPieceClick:t.onPieceClick,allowDrag:t.allowDrag}))}))})}}]),t}(a.Component);oe.Top=function(){return n.a.createElement(oe,{top:!0})},oe.Bottom=function(){return n.a.createElement(oe,null)};var ie=oe,se=function(e){return{display:"flex",justifyContent:"center",width:e}},ce=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isDragging,r=e.width,a=e.item,o=e.id,i=e.currentOffset,s=e.wasPieceTouched,c=e.pieces,l=e.sourceSquare;return t&&a.board===o?n.a.createElement("div",{style:ue},n.a.createElement("div",{style:pe(i,s)},b({width:r,pieces:c,piece:a.piece,isDragging:t,customDragLayerStyles:{opacity:1},sourceSquare:l}))):null}}]),t}(a.Component);var le=Object(h.DragLayer)(function(e){return{item:e.getItem(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})(ce),ue={position:"fixed",pointerEvents:"none",zIndex:10,left:0,top:0},pe=function(e,t){if(!e)return{display:"none"};var r=e.x,a=e.y;return{transform:t?"translate(".concat(r,"px, ").concat(a+-25,"px) scale(2)"):"translate(".concat(r,"px, ").concat(a,"px)")}},de={wP:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("path",{d:"M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z ",style:{opacity:"1",fill:"#ffffff",fillOpacity:"1",fillRule:"nonzero",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}})),wR:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{opacity:"1",fill:"#ffffff",fillOpacity:"1",fillRule:"evenodd",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("path",{d:"M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 34,14 L 31,17 L 14,17 L 11,14"}),n.a.createElement("path",{d:"M 31,17 L 31,29.5 L 14,29.5 L 14,17",style:{strokeLinecap:"butt",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"}),n.a.createElement("path",{d:"M 11,14 L 34,14",style:{fill:"none",stroke:"#000000",strokeLinejoin:"miter"}}))),wN:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{opacity:"1",fill:"none",fillOpacity:"1",fillRule:"evenodd",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("path",{d:"M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",style:{fill:"#ffffff",stroke:"#000000"}}),n.a.createElement("path",{d:"M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",style:{fill:"#ffffff",stroke:"#000000"}}),n.a.createElement("path",{d:"M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",style:{fill:"#000000",stroke:"#000000"}}),n.a.createElement("path",{d:"M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",transform:"matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",style:{fill:"#000000",stroke:"#000000"}}))),wB:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{opacity:"1",fill:"none",fillRule:"evenodd",fillOpacity:"1",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("g",{style:{fill:"#ffffff",stroke:"#000000",strokeLinecap:"butt"}},n.a.createElement("path",{d:"M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z"}),n.a.createElement("path",{d:"M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"}),n.a.createElement("path",{d:"M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"})),n.a.createElement("path",{d:"M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18",style:{fill:"none",stroke:"#000000",strokeLinejoin:"miter"}}))),wQ:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{opacity:"1",fill:"#ffffff",fillOpacity:"1",fillRule:"evenodd",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("path",{d:"M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",transform:"translate(-1,-1)"}),n.a.createElement("path",{d:"M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",transform:"translate(15.5,-5.5)"}),n.a.createElement("path",{d:"M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",transform:"translate(32,-1)"}),n.a.createElement("path",{d:"M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",transform:"translate(7,-4.5)"}),n.a.createElement("path",{d:"M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",transform:"translate(24,-4)"}),n.a.createElement("path",{d:"M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 11.5,30 C 15,29 30,29 33.5,30",style:{fill:"none"}}),n.a.createElement("path",{d:"M 12,33.5 C 18,32.5 27,32.5 33,33.5",style:{fill:"none"}}))),wK:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{fill:"none",fillOpacity:"1",fillRule:"evenodd",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("path",{d:"M 22.5,11.63 L 22.5,6",style:{fill:"none",stroke:"#000000",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 20,8 L 25,8",style:{fill:"none",stroke:"#000000",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25",style:{fill:"#ffffff",stroke:"#000000",strokeLinecap:"butt",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z ",style:{fill:"#ffffff",stroke:"#000000"}}),n.a.createElement("path",{d:"M 11.5,30 C 17,27 27,27 32.5,30",style:{fill:"none",stroke:"#000000"}}),n.a.createElement("path",{d:"M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5",style:{fill:"none",stroke:"#000000"}}),n.a.createElement("path",{d:"M 11.5,37 C 17,34 27,34 32.5,37",style:{fill:"none",stroke:"#000000"}}))),bP:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("path",{d:"M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z ",style:{opacity:"1",fill:"#000000",fillOpacity:"1",fillRule:"nonzero",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}})),bR:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{opacity:"1",fill:"000000",fillOpacity:"1",fillRule:"evenodd",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("path",{d:"M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z ",style:{strokeLinecap:"butt",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z ",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 12,35.5 L 33,35.5 L 33,35.5",style:{fill:"none",stroke:"#ffffff",strokeWidth:"1",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 13,31.5 L 32,31.5",style:{fill:"none",stroke:"#ffffff",strokeWidth:"1",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 14,29.5 L 31,29.5",style:{fill:"none",stroke:"#ffffff",strokeWidth:"1",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 14,16.5 L 31,16.5",style:{fill:"none",stroke:"#ffffff",strokeWidth:"1",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 11,14 L 34,14",style:{fill:"none",stroke:"#ffffff",strokeWidth:"1",strokeLinejoin:"miter"}}))),bN:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{opacity:"1",fill:"none",fillOpacity:"1",fillRule:"evenodd",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("path",{d:"M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",style:{fill:"#000000",stroke:"#000000"}}),n.a.createElement("path",{d:"M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",style:{fill:"#000000",stroke:"#000000"}}),n.a.createElement("path",{d:"M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",style:{fill:"#ffffff",stroke:"#ffffff"}}),n.a.createElement("path",{d:"M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",transform:"matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",style:{fill:"#ffffff",stroke:"#ffffff"}}),n.a.createElement("path",{d:"M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z ",style:{fill:"#ffffff",stroke:"none"}}))),bB:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{opacity:"1",fill:"none",fillRule:"evenodd",fillOpacity:"1",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("g",{style:{fill:"#000000",stroke:"#000000",strokeLinecap:"butt"}},n.a.createElement("path",{d:"M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z"}),n.a.createElement("path",{d:"M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"}),n.a.createElement("path",{d:"M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"})),n.a.createElement("path",{d:"M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18",style:{fill:"none",stroke:"#ffffff",strokeLinejoin:"miter"}}))),bQ:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{opacity:"1",fill:"000000",fillOpacity:"1",fillRule:"evenodd",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("g",{style:{fill:"#000000",stroke:"none"}},n.a.createElement("circle",{cx:"6",cy:"12",r:"2.75"}),n.a.createElement("circle",{cx:"14",cy:"9",r:"2.75"}),n.a.createElement("circle",{cx:"22.5",cy:"8",r:"2.75"}),n.a.createElement("circle",{cx:"31",cy:"9",r:"2.75"}),n.a.createElement("circle",{cx:"39",cy:"12",r:"2.75"})),n.a.createElement("path",{d:"M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z",style:{strokeLinecap:"butt",stroke:"#000000"}}),n.a.createElement("path",{d:"M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z",style:{strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 11,38.5 A 35,35 1 0 0 34,38.5",style:{fill:"none",stroke:"#000000",strokeLinecap:"butt"}}),n.a.createElement("path",{d:"M 11,29 A 35,35 1 0 1 34,29",style:{fill:"none",stroke:"#ffffff"}}),n.a.createElement("path",{d:"M 12.5,31.5 L 32.5,31.5",style:{fill:"none",stroke:"#ffffff"}}),n.a.createElement("path",{d:"M 11.5,34.5 A 35,35 1 0 0 33.5,34.5",style:{fill:"none",stroke:"#ffffff"}}),n.a.createElement("path",{d:"M 10.5,37.5 A 35,35 1 0 0 34.5,37.5",style:{fill:"none",stroke:"#ffffff"}}))),bK:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"45",height:"45"},n.a.createElement("g",{style:{fill:"none",fillOpacity:"1",fillRule:"evenodd",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}},n.a.createElement("path",{d:"M 22.5,11.63 L 22.5,6",style:{fill:"none",stroke:"#000000",strokeLinejoin:"miter"},id:"path6570"}),n.a.createElement("path",{d:"M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25",style:{fill:"#000000",fillOpacity:"1",strokeLinecap:"butt",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z ",style:{fill:"#000000",stroke:"#000000"}}),n.a.createElement("path",{d:"M 20,8 L 25,8",style:{fill:"none",stroke:"#000000",strokeLinejoin:"miter"}}),n.a.createElement("path",{d:"M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85",style:{fill:"none",stroke:"#ffffff"}}),n.a.createElement("path",{d:"M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37",style:{fill:"none",stroke:"#ffffff"}})))},fe={whiteKing:n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality"},viewBox:"0 0 4210 12970",x:"0px",y:"0px",fillRule:"evenodd",clipRule:"evenodd",width:"250",height:"250"},n.a.createElement("g",null,n.a.createElement("path",{style:{fill:"black",fillRule:"nonzero"},d:"M2105 0c169,0 286,160 249,315l200 0c-172,266 -231,479 -256,792 315,-24 530,-86 792,-255l0 897c-265,-171 -479,-231 -792,-256 18,234 75,495 185,682l339 0c233,0 369,269 225,456l545 0 -595 1916c130,94 158,275 59,402 465,0 416,568 51,568l-334 0 465 2867 332 0c250,0 381,306 199,485 162,63 273,220 273,399l0 633 168 0 0 475c-1403,0 -2807,0 -4210,0l0 -475 167 0 0 -633c0,-179 112,-336 274,-399 -181,-178 -52,-485 199,-485l332 0 465 -2867 -335 0c-353,0 -418,-568 51,-568 -98,-127 -70,-308 59,-402l-594 -1916c181,0 363,0 545,0 -144,-187 -9,-456 225,-456l339 0c110,-187 167,-448 185,-682 -315,25 -530,87 -793,256l0 -897c266,171 480,231 793,255 -25,-315 -87,-529 -256,-792l199 0c-36,-155 81,-315 250,-315zm-1994 10012l0 253 3988 0 0 -253c-1330,0 -2659,0 -3988,0zm484 -1060c-174,0 -316,142 -316,316l0 633 3652 0 0 -633c0,-174 -142,-316 -316,-316 -1007,0 -2013,0 -3020,0zm45 -457c-230,0 -225,345 0,345l2930 0c230,0 225,-345 0,-345 -977,0 -1953,0 -2930,0zm2020 -2978l-1111 0 -465 2867 2041 0 -465 -2867zm-1558 -456c-229,0 -224,345 0,345 669,0 1337,0 2005,0 230,0 225,-345 0,-345 -668,0 -1336,0 -2005,0zm1730 -457l-1454 0c-229,0 -224,345 0,345l1454 0c229,0 224,-345 0,-345zm-2064 -1862l544 1751c529,0 1057,0 1586,0l544 -1751c-892,0 -1783,0 -2674,0zm1085 -567l504 0c-126,-247 -163,-526 -177,-800 273,15 553,52 800,177l0 -504c-247,126 -527,163 -800,177 14,-273 51,-552 177,-799 -168,0 -336,0 -504,0 125,247 162,526 177,799 -274,-14 -553,-51 -800,-177l0 504c247,-125 527,-162 800,-177 -15,274 -52,553 -177,800zm969 111l-1434 0c-230,0 -225,345 0,345l1434 0c230,0 225,-345 0,-345zm-717 -2175c-105,0 -175,109 -133,204l266 0c42,-96 -30,-205 -133,-204z"})))},he=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={hasError:!1},r}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e){this.setState({hasError:!0}),console.error(e.message)}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("div",{style:ge},n.a.createElement("div",{style:me},fe.whiteKing),n.a.createElement("h1",null,"Something went wrong")):this.props.children}}]),t}(a.Component),ge={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},me={width:250,height:250,transform:"rotate(90deg)"},ke=n.a.createContext(),we=function(e){return"start"===e?S("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"):v(e)?S(e):q(e)?e:{}},ye=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={previousPositionFromProps:we(r.props.position),currentPosition:we(r.props.position),sourceSquare:"",targetSquare:"",sourcePiece:"",waitForTransition:!1,phantomPiece:null,wasPieceTouched:!1,manualDrop:!1,squareClicked:!1,firstMove:!1,pieces:Object(c.a)({},de,r.props.pieces),undoMove:r.props.undo},r.updateWindowDimensions=function(){r.setState({screenWidth:window.innerWidth,screenHeight:window.innerHeight})},r.wasManuallyDropped=function(e){return r.setState({manualDrop:e})},r.wasSquareClicked=function(e){return r.setState({squareClicked:e})},r.setPosition=function(e){var t=e.sourceSquare,a=e.targetSquare,n=e.piece,o=r.state.currentPosition,i=r.props,s=i.getPosition,c=i.dropOffBoard;if(t!==a){if("trash"===c&&!a){var l=o;return delete l[t],r.setState({currentPosition:l,manualDrop:!0}),s(o)}var u=o;"spare"!==t&&delete u[t],u[a]=n,r.setState({currentPosition:u,manualDrop:!0}),s(o)}},r.setTouchState=function(e){return r.setState({wasPieceTouched:e.isTrusted})},r.getWidth=function(){var e=r.props,t=e.calcWidth,a=e.width,n=r.state,o=n.screenWidth,i=n.screenHeight;return t({screenWidth:o,screenHeight:i})?t({screenWidth:o,screenHeight:i}):a},r}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"componentDidUpdate",value:function(e){var t=this,r=this.props,a=r.position,n=r.transitionDuration,o=r.getPosition,i=this.state,s=i.waitForTransition,c=i.undoMove,l=we(a),u=we(e.position);if((!ee()(l,u)||c)&&(this.setState({previousPositionFromProps:u,undoMove:!1}),o(l),s))return new Promise(function(e){t.setState({currentPosition:l},function(){return setTimeout(function(){t.setState({waitForTransition:!1}),e()},n)})}).then(function(){return setTimeout(function(){return t.setState({phantomPiece:null})},n)})}},{key:"render",value:function(){var e=this.props,t=e.sparePieces,r=e.id,a=e.orientation,o=e.dropOffBoard,i=this.state,s=i.sourceSquare,l=i.targetSquare,u=i.sourcePiece,p=i.waitForTransition,d=i.phantomPiece,f=i.wasPieceTouched,h=i.currentPosition,g=i.manualDrop,m=i.screenWidth,k=i.screenHeight,w=i.pieces,y=m&&k;return n.a.createElement(he,null,n.a.createElement(ke.Provider,{value:Object(c.a)({},this.props,{pieces:w,orientation:a.toLowerCase(),dropOffBoard:o.toLowerCase()},{width:this.getWidth(),sourceSquare:s,targetSquare:l,sourcePiece:u,waitForTransition:p,phantomPiece:d,setPosition:this.setPosition,manualDrop:g,setTouchState:this.setTouchState,currentPosition:h,screenWidth:m,screenHeight:k,wasManuallyDropped:this.wasManuallyDropped,wasSquareClicked:this.wasSquareClicked})},n.a.createElement("div",null,y&&n.a.createElement(Y,null),y&&t&&n.a.createElement(ie.Bottom,null)),n.a.createElement(le,{width:this.getWidth(),pieces:w,id:r,wasPieceTouched:f,sourceSquare:l})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.position,a=e.undo,n=t.currentPosition,o=t.previousPositionFromProps,i=t.manualDrop,c=t.squareClicked,l=we(r);if(!ee()(l,o)&&!ee()(l,n)){var u=function(e,t){var r=k()(e,t),a=r.length;return{sourceSquare:r&&r[1]&&r&&"D"===r[1].kind?r[1].path&&r[1].path[0]:r[0].path&&r[0].path[0],targetSquare:r&&r[1]&&r&&"D"===r[1].kind?r[0]&&r[0].path[0]:r[1]&&r[1].path[0],sourcePiece:r&&r[1]&&r&&"D"===r[1].kind?r[1]&&r[1].lhs:r[1]&&r[1].rhs,squaresAffected:a}}(n,l),p=u.sourceSquare,d=u.targetSquare,f=u.sourcePiece,h=u.squaresAffected;return i?{sourceSquare:p,targetSquare:d,sourcePiece:f,currentPosition:l,waitForTransition:!1,manualDrop:!1}:h&&2!==h?{currentPosition:l,waitForTransition:!1,manualDrop:!1,sourceSquare:p,targetSquare:d,sourcePiece:f}:n[d]?(delete l[d],{sourceSquare:p,targetSquare:d,sourcePiece:f,currentPosition:l,waitForTransition:!c,phantomPiece:c?null:Object(s.a)({},d,n[d]),manualDrop:!1,squareClicked:!1}):a?{sourceSquare:p,targetSquare:d,sourcePiece:f,currentPosition:l,waitForTransition:!0,manualDrop:!1,squareClicked:!1,undoMove:!0}:{sourceSquare:p,targetSquare:d,sourcePiece:f,currentPosition:l,waitForTransition:!c,manualDrop:!1,squareClicked:!1}}return null}}]),t}(a.Component);ye.defaultProps={id:"0",position:"",pieces:{},width:560,orientation:"white",showNotation:!0,sparePieces:!1,draggable:!0,undo:!1,dropOffBoard:"snapback",transitionDuration:300,boardStyle:{},lightSquareStyle:{backgroundColor:"rgb(240, 217, 181)"},darkSquareStyle:{backgroundColor:"rgb(181, 136, 99)"},squareStyles:{},dropSquareStyle:{boxShadow:"inset 0 0 1px 4px yellow"},calcWidth:function(){},roughSquare:function(){},onMouseOverSquare:function(){},onMouseOutSquare:function(){},onDrop:function(){},getPosition:function(){},onDragOverSquare:function(){},onSquareClick:function(){},onPieceClick:function(){},onSquareRightClick:function(){},allowDrag:function(){return!0}},ye.Consumer=ke.Consumer;var Ce=Object(h.DragDropContext)(re()(ne.a))(ye);var Se=function(){return n.a.createElement("div",{className:"EightQueens"},n.a.createElement("div",{className:"EightQueens-header"},n.a.createElement("a",{href:"https://github.com/attogram/EightQueens",target:"_blank",rel:"noopener noreferrer"},"Eight Queens v0.0.1-alpha")),n.a.createElement(Ce,{id:"EightQueens",sparePieces:!0,dropOffBoard:"trash"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,r){e.exports=r(212)},83:function(e,t,r){},84:function(e,t,r){}},[[78,1,2]]]);
//# sourceMappingURL=main.2bfd7e0e.chunk.js.map