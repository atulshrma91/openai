(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),s=n.n(c),i=n(56),o=n(3),p=(n(61),n(5)),u=n(11),j=n(6),l=n(54),b=n(55),x=n(29),h=n(35),O=n(2);function m(e){var t=new h.Configuration({apiKey:"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"}),n=new h.OpenAIApi(t),r=Object(a.useState)(""),c=Object(j.a)(r,2),s=c[0],i=c[1];function o(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(Object(p.a)().mark((function e(t){var a;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.createCompletion({model:"text-davinci-003",prompt:t,temperature:0,max_tokens:1});case 2:return a=e.sent,e.abrupt("return",a.data.choices);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(u.a)(Object(p.a)().mark((function e(t){var n,a,r,c,s;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,!/\s+$/.test(n)){e.next=9;break}return a=n.substring(0,n.length-1),e.next=5,o(a);case 5:(r=e.sent)&&r[0]&&""!==r[0].text.trim()?1===(c=r[0].text.trim()).length?(s=c.replace(/[^a-zA-Z0-9 ]/g,""),i(s?a+" "+c+" ":n)):i(a+" "+c+" "):i(n),e.next=10;break;case 9:i(t.target.value);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){}),[]),Object(O.jsx)(l.a,{className:"p-3",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h1",{className:"header",children:"Sentence Completion Game"}),Object(O.jsx)(x.a,{children:Object(O.jsx)(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:Object(O.jsx)(x.a.Control,{as:"textarea",rows:10,cols:10,onChange:function(e){return d.apply(this,arguments)},value:s})})})]})})}n(95);var d=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/",element:Object(O.jsx)(m,{})}),Object(O.jsx)(o.a,{path:"home",element:Object(O.jsx)(m,{})})]})})})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(d,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.31cb7a9a.chunk.js.map