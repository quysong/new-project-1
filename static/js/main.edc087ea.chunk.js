(this["webpackJsonpnew-project-1"]=this["webpackJsonpnew-project-1"]||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),o=n.n(r),c=(n(28),n(29),n(30),function(e){var t=e.title,n=e.content;return l.a.createElement("div",null,"Home ",t,l.a.createElement("hr",null),n)}),u=n(7),i=n(5),m=function(e){return l.a.createElement("div",null,"About page")},s=function(e){return l.a.createElement("div",null,"page 404")},E=n(20),g=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),r=n[0];n[1];return l.a.createElement("div",null,"Count: ",r,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){throw new Error("Error thrown")}},"+"))},h=function(e){Object(i.g)().id;var t=new URLSearchParams(Object(i.f)().search);return console.log("useQuery.get() :",t.get("age")),console.log("useLocation() :",Object(i.f)()),console.log("useParams 1:",Object(i.g)()),console.log("useParams 2:",Object(i.g)().id),console.log("useParams 3:",Object(i.g)().abc),l.a.createElement("div",null,"Blog Detail:")},b=n(17),f=n(18),v=n(21),d=n(19),p=n(22),w=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(v.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("error",e),console.log("errorInfo",t)}},{key:"render",value:function(){return this.state.hasError?l.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(l.a.Component);var j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/blog"},"Blog")))),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(w,null,l.a.createElement(c,null))),l.a.createElement(i.a,{path:"/about"},l.a.createElement(w,null,l.a.createElement(m,null))),l.a.createElement(i.a,{exact:!0,path:"/blog"},l.a.createElement(w,null,l.a.createElement(g,null))),l.a.createElement(i.a,{path:"/blog/:id"},l.a.createElement(h,null)),l.a.createElement(i.a,{path:"*"},l.a.createElement(s,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.edc087ea.chunk.js.map