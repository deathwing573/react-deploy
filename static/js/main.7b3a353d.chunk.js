(this.webpackJsonpshowdata=this.webpackJsonpshowdata||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),o=a.n(r),c=(a(25),a(7)),l=a.n(c),u=a(18),i=a(2),d=a(3),h=a(6),p=a(5),m=(a(27),a(19)),f=a.n(m),v=a(4),b=a.n(v),g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"No change"),s.a.createElement("th",{scope:"col"},"Add 10.0002"))),s.a.createElement("tbody",null,Object.keys(this.props.users).map((function(t,a){return s.a.createElement("tr",{key:t},s.a.createElement("th",{scope:"row"},t),b()(e.props.users[t])%2==0||"HKD"==t?s.a.createElement("td",{className:"border border-danger"},e.props.users[t]):s.a.createElement("td",null,e.props.users[t]),b()(e.props.users_addten[a])%2==0||"HKD"==t?s.a.createElement("td",{className:"border border-danger"},e.props.users_addten[a]):s.a.createElement("td",null,e.props.users_addten[a]))})))))}}]),a}(n.Component),E=(a(45),a(46),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:{},users_addten:{},loading:!1},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,f.a.get("http://data.fixer.io/api/latest?access_key=fe3a9b3f9ac173a3e51d8ea22951cf95");case 3:for(t=e.sent,console.log(t.data),this.setState({users:t.data.rates,loading:!1}),console.log(this.state.users),console.log(Object.values(this.state.users).length),a=[],n=0;n<Object.values(this.state.users).length;n++)a[n]=Object.values(this.state.users)[n]+10.0002;this.setState({users_addten:a}),console.log(this.state.users_addten),console.log(1);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,{users:this.state.users,users_addten:this.state.users_addten,CheckEven:this.CheckEven}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7b3a353d.chunk.js.map