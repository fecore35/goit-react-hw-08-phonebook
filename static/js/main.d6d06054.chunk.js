(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{30:function(e,t,n){e.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}},33:function(e,t,n){e.exports={input:"Filter_input__2DoVp"}},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c,r,a,i=n(0),s=n.n(i),j=n(25),u=n.n(j),o=n(10),b=n(13),l=n(22),d=n(7),O=n(15),m=n(5),p=n(6),h=(Object(d.b)("contacts/Create"),Object(d.b)("contacts/Filter")),x=n(14),f=n.n(x),v=n(28),g=n(29),y=n.n(g),w=Object(d.c)("contacts/getContact",function(){var e=Object(v.a)(f.a.mark((function e(t,n){var c,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,y.a.get("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts");case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),C=Object(d.c)("contacts/addContact",function(){var e=Object(v.a)(f.a.mark((function e(t,n){var c,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,y.a.post("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts",t);case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),S=Object(d.c)("contacts/deleteContact",function(){var e=Object(v.a)(f.a.mark((function e(t,n){var c,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,y.a.delete("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts/".concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),N=Object(d.d)([],(c={},Object(m.a)(c,w.fulfilled,(function(e,t){return Object(l.a)(t.payload)})),Object(m.a)(c,C.fulfilled,(function(e,t){return[].concat(Object(l.a)(e),[t.payload])})),Object(m.a)(c,S.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),c)),_=Object(d.d)(!1,(r={},Object(m.a)(r,w.pending,(function(){return!0})),Object(m.a)(r,w.fulfilled,(function(){return!1})),Object(m.a)(r,w.rejected,(function(){return!1})),Object(m.a)(r,C.pending,(function(){return!0})),Object(m.a)(r,C.fulfilled,(function(){return!1})),Object(m.a)(r,C.rejected,(function(){return!1})),Object(m.a)(r,S.pending,(function(){return!0})),Object(m.a)(r,S.fulfilled,(function(){return!1})),Object(m.a)(r,S.rejected,(function(){return!1})),r)),k=Object(d.d)(null,(a={},Object(m.a)(a,w.rejected,(function(e,t){return t.payload})),Object(m.a)(a,C.rejected,(function(e,t){return t.payload})),Object(m.a)(a,S.rejected,(function(e,t){return t.payload})),a)),A=Object(d.d)("",Object(m.a)({},h,(function(e,t){return t.payload}))),F=Object(p.b)({items:N,filter:A,isLoading:_,error:k}),Z=[].concat(Object(l.a)(Object(d.e)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[function(e){return function(e){return function(t){e(t)}}}]),R=Object(d.a)({reducer:{contacts:F},middleware:Z,devTools:null!==!0}),T=n(2),V=n(19),q=n(46),J=n(1),L=["children","to"];var z=function(e){var t=e.children,n=e.to,c=Object(q.a)(e,L),r=Object(T.i)(n),a=Object(T.g)({path:r.pathname,end:!0});return Object(J.jsx)("div",{children:Object(J.jsx)(b.b,Object(V.a)(Object(V.a)({style:{textDecoration:a?"underline":"none"},to:n},c),{},{children:t}))})};var $=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("header",{children:Object(J.jsx)("nav",{children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:Object(J.jsx)(z,{to:"/",children:"Home"})}),Object(J.jsx)("li",{children:Object(J.jsx)(z,{to:"/create",children:"Create contact"})}),Object(J.jsx)("li",{children:Object(J.jsx)(z,{to:"/register",children:"Register"})}),Object(J.jsx)("li",{children:Object(J.jsx)(z,{to:"/login",children:"Login"})})]})})}),Object(J.jsx)(T.a,{})]})},D=n(33),I=n.n(D),W=n(16),B=function(e){return e.contacts.items},E=function(e){return e.contacts.filter},G=function(e){return e.contacts.error},M=Object(W.a)([B,E],(function(e,t){var n=t.toUpperCase();return e.filter((function(e){return e.name.toUpperCase().includes(n)}))}));var U=function(){var e=Object(o.c)(E),t=Object(o.b)();return Object(J.jsx)("section",{className:I.a.container,children:Object(J.jsxs)("label",{children:["Find contact by name",Object(J.jsx)("input",{type:"text",className:I.a.input,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(e){return t(h(e.target.value))}})]})})},H=n(45),K=n(30),P=n.n(K);var Y=function(){var e=Object(o.c)(M),t=Object(o.c)(G),n=Object(o.b)();return Object(i.useEffect)((function(){n(w())}),[n]),console.log(t&&t.message),Object(J.jsxs)("ul",{className:P.a.list,children:[t&&Object(J.jsx)("li",{children:Object(J.jsx)("h2",{style:{color:"red",textTransform:"uppercase"},children:t.message})}),e&&e.map((function(e){var t=e.id,c=e.name,r=e.phone,a="tel:"+r.replace(/^(\+)|\D/g,"$1");return Object(J.jsxs)("li",{className:P.a.item,children:[Object(J.jsxs)("p",{children:[c,": ",Object(J.jsx)("a",{href:a,children:r})]}),Object(J.jsx)("button",{className:P.a.button,type:"button","data-id":t,onClick:function(e){n(S(e.currentTarget.dataset.id))},children:Object(J.jsx)(H.a,{})})]},t)}))]})};var Q=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(U,{}),Object(J.jsx)(Y,{})]})},X=n(3);var ee=function(){Object(o.c)(B);var e=Object(o.c)(G);return Object(o.b)(),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(X.d,{initialValues:{name:"",number:""},validate:function(e){var t={};return e.name||(t.name="Required"),e.number||(t.number="Required"),t},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),n(!1)}),400)},children:function(e){var t=e.isSubmitting;return Object(J.jsxs)(X.c,{children:[Object(J.jsx)("label",{htmlFor:"name",children:"Name"}),Object(J.jsx)(X.b,{type:"text",name:"name",id:"name"}),Object(J.jsx)(X.a,{name:"name",component:"div"}),Object(J.jsx)("label",{htmlFor:"phoneNumber",children:"Number"}),Object(J.jsx)(X.b,{type:"tel",name:"number",id:"phoneNumber"}),Object(J.jsx)(X.a,{name:"number",component:"div"}),Object(J.jsx)("button",{type:"submit",disabled:t,children:"Add contact"})]})}}),e&&Object(J.jsx)("h2",{style:{color:"red",textTransform:"uppercase"},children:e.message})]})};var te=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Create contact"}),Object(J.jsx)(ee,{})]})};var ne=function(){return Object(J.jsx)(X.d,{initialValues:{name:"",email:"",password:""},validate:function(e){var t={};return e.name||(t.name="Required"),e.password||(t.password="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),n(!1)}),400)},children:function(e){var t=e.isSubmitting;return Object(J.jsxs)(X.c,{children:[Object(J.jsx)(X.b,{type:"text",name:"name"}),Object(J.jsx)(X.a,{name:"name",component:"div"}),Object(J.jsx)(X.b,{type:"email",name:"email"}),Object(J.jsx)(X.a,{name:"email",component:"div"}),Object(J.jsx)(X.b,{type:"password",name:"password"}),Object(J.jsx)(X.a,{name:"password",component:"div"}),Object(J.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var ce=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Register"}),Object(J.jsx)(ne,{})]})};var re=function(){return Object(J.jsx)(X.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),n(!1)}),400)},children:function(e){var t=e.isSubmitting;return Object(J.jsxs)(X.c,{children:[Object(J.jsx)(X.b,{type:"email",name:"email"}),Object(J.jsx)(X.a,{name:"email",component:"div"}),Object(J.jsx)(X.b,{type:"password",name:"password"}),Object(J.jsx)(X.a,{name:"password",component:"div"}),Object(J.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var ae=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Login"}),Object(J.jsx)(re,{})]})};var ie=function(){return Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"Nothing to see here!"}),Object(J.jsx)("p",{children:Object(J.jsx)(b.b,{to:"/",children:"Go to the home page"})})]})};var se=function(){return Object(J.jsx)("div",{className:"container",children:Object(J.jsx)(T.d,{children:Object(J.jsxs)(T.b,{path:"/",element:Object(J.jsx)($,{}),children:[Object(J.jsx)(T.b,{index:!0,element:Object(J.jsx)(Q,{})}),Object(J.jsx)(T.b,{path:"create",element:Object(J.jsx)(te,{})}),Object(J.jsx)(T.b,{path:"register",element:Object(J.jsx)(ce,{})}),Object(J.jsx)(T.b,{path:"login",element:Object(J.jsx)(ae,{})}),Object(J.jsx)(T.b,{path:"*",element:Object(J.jsx)(ie,{})})]})})})};n(78);u.a.render(Object(J.jsx)(s.a.StrictMode,{children:Object(J.jsx)(b.a,{children:Object(J.jsx)(o.a,{store:R,children:Object(J.jsx)(se,{})})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.d6d06054.chunk.js.map