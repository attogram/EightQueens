(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(19)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(7),r=t.n(i),c=(t(15),t(1)),s=t(2),l=t(4),u=t(3),h=t(5),d=(t(16),t(8)),f=t.n(d),g=(t(17),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"EightQueens-title"},a.a.createElement("a",{href:this.props.gameHome,target:"_blank",rel:"noopener noreferrer"},this.props.gameName,a.a.createElement("br",null),a.a.createElement("small",null,"v",this.props.gameVersion)))}}]),n}(o.Component)),m=(t(18),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"EightQueens-status"},"Clicked: ",a.a.createElement("b",null,this.props.clicked))}}]),n}(o.Component)),p=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).onSquareClick=function(e){t.setState({clicked:e})},t.state={clicked:""},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"EightQueens"},a.a.createElement("div",{className:"EightQueens-header"},a.a.createElement(g,{gameName:"Eight Queens",gameHome:"https://github.com/attogram/EightQueens",gameVersion:"0.0.4"}),a.a.createElement(m,{clicked:this.state.clicked})),a.a.createElement(f.a,{id:"EightQueens",sparePieces:!1,draggable:!1,calcWidth:function(e){return e.screenWidth<500?350:480},onSquareClick:this.onSquareClick}))}}]),n}(o.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(".","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(n,e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.320d6c1c.chunk.js.map