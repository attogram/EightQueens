(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(7),r=n.n(a),c=(n(15),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=(n(16),n(8)),f=n.n(d),p=(n(17),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"EightQueens-title"},i.a.createElement("a",{href:this.props.gameHome,target:"_blank",rel:"noopener noreferrer"},this.props.gameName,i.a.createElement("br",null),i.a.createElement("small",null,"v",this.props.gameVersion)))}}]),t}(o.Component)),g=(n(18),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"EightQueens-status"},i.a.createElement("b",null,this.props.clicked),i.a.createElement("br",null),JSON.stringify(this.props.position))}}]),t}(o.Component)),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSquareClick=function(e){var t=n.state.position;t[[e]]?delete t[[e]]:t[[e]]="wQ",n.setState({clicked:e,position:t})},n.state={clicked:"Click any square to place a Queen",position:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"EightQueens"},i.a.createElement("div",{className:"EightQueens-header"},i.a.createElement(p,{gameName:"Eight Queens",gameHome:"https://github.com/attogram/EightQueens",gameVersion:"0.0.5"}),i.a.createElement(g,{clicked:this.state.clicked,position:this.state.position})),i.a.createElement(f.a,{id:"EightQueens",position:this.state.position,sparePieces:!1,draggable:!1,calcWidth:function(e){return e.screenWidth<500?350:480},onSquareClick:this.onSquareClick}))}}]),t}(o.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");v?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(t,e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.ecbb0150.chunk.js.map