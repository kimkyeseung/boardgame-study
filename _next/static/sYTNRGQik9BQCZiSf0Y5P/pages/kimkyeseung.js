(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{KQm4:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("a3WO");var r=n("BsWD");function i(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},WVoF:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kimkyeseung",function(){return n("qqsC")}])},qqsC:function(t,e,n){"use strict";n.r(e);var a=n("h4VS"),r=n("q1tI"),i=n.n(r),o=n("KQm4"),l=n("1OyB"),u=n("vuIU"),c=n("JX7q"),s=n("Ji7U"),p=n("md7G"),f=n("foSv"),y=n("vOnD"),m=n("paEG"),d=i.a.createElement;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(p.a)(this,n)}}var h=y.c.div.withConfig({displayName:"LobbyContainer__Title",componentId:"yijla4-0"})(["text-align:center;color:white;font-size:200px;"]),v=y.c.div.withConfig({displayName:"LobbyContainer__Select",componentId:"yijla4-1"})(["text-align:center;max-width:240px;margin:0 auto;"]),g=y.c.div.withConfig({displayName:"LobbyContainer__Message",componentId:"yijla4-2"})([""]),N=Object(y.b)(["background:blue;"]),j=y.c.button.withConfig({displayName:"LobbyContainer__Button",componentId:"yijla4-3"})(["border:1px solid gray;border-radius:4px;outline:none;",""],(function(t){return t.isActive&&N}));j.Wrapper=y.c.div.withConfig({displayName:"LobbyContainer__Wrapper",componentId:"yijla4-4"})(["display:flex;justify-content:space-between;max-width:120px;margin:0 auto;"]);var w=y.c.div.withConfig({displayName:"LobbyContainer__Input",componentId:"yijla4-5"})(["display:flex;justify-content:space-between;padding:4px;& > label{width:120px;}"]);w.Wrapper=y.c.div.withConfig({displayName:"LobbyContainer__Wrapper",componentId:"yijla4-6"})([""]);var O=y.c.button.withConfig({displayName:"LobbyContainer__StartButton",componentId:"yijla4-7"})([""]),C=function(t){Object(s.a)(n,t);var e=b(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.playerNum,a=e.playerNames,r=e.setPlayerName,i=e.startGame;return console.log({playerNames:a}),d("div",null,d(m.b,{height:200}),d(h,null,"Splendor"),d(m.b,{height:100}),d(v,null,d(g,null,"\uac8c\uc784\uc5d0 \ucc38\uc5ec\ud560 \uc778\uc6d0\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"),d(m.b,{height:20}),d(j.Wrapper,null,[2,3,4].map((function(e){return d(j,{key:e,isActive:n===e,onClick:function(n){n.preventDefault(),t.props.setPlayerNum(e)}},e)})))),d(m.b,{height:30}),d(v,null,d(g,null,"\ud50c\ub808\uc774\uc5b4\uc758 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),d(m.b,{height:20}),d(w.Wrapper,null,Array(n).fill().map((function(t,e){return d(w,{key:e},d("label",null,"\ud50c\ub808\uc774\uc5b4 ",d("span",null,e+1)),d("input",{value:a[e],onChange:function(t){r(t.target.value,e)}}))})))),d(m.b,{height:30}),d(v,null,d(O,{onClick:function(t){t.preventDefault(),i()}},"\uc2dc\uc791\ud558\uae30")))}}]),n}(r.Component),_=n("nOHt"),k=n.n(_),x=i.a.createElement;function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(p.a)(this,n)}}var S=function(t){Object(s.a)(n,t);var e=P(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={playerNum:2,config:{},playerNames:["0","1","2","3"],isStart:!1},a.setPlayerNum=a.setPlayerNum.bind(Object(c.a)(a)),a.setPlayerName=a.setPlayerName.bind(Object(c.a)(a)),a.startGame=a.startGame.bind(Object(c.a)(a)),a}return Object(u.a)(n,[{key:"setPlayerNum",value:function(t){this.setState({playerNum:t})}},{key:"setPlayerName",value:function(t,e){this.setState((function(n){var a=n.playerNames,r=Object(o.a)(a);return r[e]=t,console.log({next:r,name:t}),{playerNames:r}}))}},{key:"startGame",value:function(){var t=this.state.playerNum;if(t>4||t<2)return alert("\ucd5c\uc18c 2\uc778\uc774\uc0c1 4\uc778 \uc774\ud558\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.");this.setState({isStart:!0})}},{key:"render",value:function(){var t=this.state,e=t.isStart,n=t.playerNum,a=t.playerNames;return e?(k.a.push({pathname:"/kimkyeseung/splendor",query:{gameId:(new Date).getTime(),players:a.slice(0,n)}}),null):x(C,{playerNum:n,setPlayerNum:this.setPlayerNum,setPlayerName:this.setPlayerName,playerNames:a,startGame:this.startGame})}}]),n}(r.Component),I=i.a.createElement;function G(){var t=Object(a.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Galada&family=Lobster&display=swap');\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: 'Galada', 'Lobster', 'serif';\n  }\n  font-family: 'Galada','Lobster', 'serif';\n"]);return G=function(){return t},t}var L=Object(y.a)(G()),R=y.c.div.withConfig({displayName:"kimkyeseung__Main",componentId:"sc-1jhkv9j-0"})(["background:linear-gradient(#e66465,#9198e5);position:fixed;height:100%;width:100%;margin:0;"]);e.default=function(){return I(i.a.Fragment,null,I(L,null),I(R,null,I(S,null)))}}},[["WVoF",0,2,1,3,5]]]);