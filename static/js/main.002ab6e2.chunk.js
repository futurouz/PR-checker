(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(2),l=t.n(c),r=(t(15),t(3)),s=t(4),i=t(5),m=t(7),h=t(6),u=t(8),d=(t(16),function(e){return o.a.createElement("div",{className:"checklist"},o.a.createElement("input",{name:e.name,type:"checkbox",onChange:e.onHandleCheckbox,checked:e.checked}),e.label)}),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(c)))).state={localization:!1,className:!1,axClassName:!1,unitTest:!1,e2eTest:!1,typo:!1,grammar:!1},t.handleCheckbox=function(e){e.persist(),t.setState(function(a){return Object(r.a)({},e.target.name,!a[e.target.name])})},t.onCheckAllChecked=function(){return Object.values(t.state).every(function(e){return e})},t.renderCheckboxs=function(){return k.map(function(e){return o.a.createElement(d,{key:e.name,name:e.name,label:e.label,checked:t.state[e.name],onHandleCheckbox:t.handleCheckbox})})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"KN: BEFORE PULL REQUEST"),this.onCheckAllChecked()?o.a.createElement("img",{src:"https://media.giphy.com/media/dr6toZX3D1O8/giphy.gif",alt:"gooooo"}):this.renderCheckboxs())}}]),a}(o.a.Component),k=[{name:"localization",label:"Localization yet?"},{name:"className",label:"ClassName same as the component name?"},{name:"axClassName",label:"Ax className is that correct?"},{name:"unitTest",label:"Unit test all green?"},{name:"e2eTest",label:"Check E2E test, all pass?"},{name:"typo",label:"Check all of the words, maybe you typo somewhere."},{name:"grammar",label:"Grammarly should help grammar, go for it."}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.002ab6e2.chunk.js.map