(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},30:function(e,t,n){e.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}},33:function(e,t,n){e.exports={input:"Filter_input__2DoVp"}},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c,r,a,i=n(0),s=n.n(i),o=n(25),u=n.n(o),l=n(9),j=n(13),b=n(22),d=n(6),O=n(16),p=n(4),h=n(5),f=(Object(d.b)("contacts/Create"),Object(d.b)("contacts/Filter")),m=n(14),x=n.n(m),v=n(28),g=n(29),C=n.n(g),y=Object(d.c)("contacts/getContact",function(){var e=Object(v.a)(x.a.mark((function e(t,n){var c,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,C.a.get("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts");case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),_=Object(d.c)("contacts/addContact",function(){var e=Object(v.a)(x.a.mark((function e(t,n){var c,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,C.a.post("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts",t);case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),w=Object(d.c)("contacts/deleteContact",function(){var e=Object(v.a)(x.a.mark((function e(t,n){var c,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,C.a.delete("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts/".concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),N=Object(d.d)([],(c={},Object(p.a)(c,y.fulfilled,(function(e,t){return Object(b.a)(t.payload)})),Object(p.a)(c,_.fulfilled,(function(e,t){return[].concat(Object(b.a)(e),[t.payload])})),Object(p.a)(c,w.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),c)),k=Object(d.d)(!1,(r={},Object(p.a)(r,y.pending,(function(){return!0})),Object(p.a)(r,y.fulfilled,(function(){return!1})),Object(p.a)(r,y.rejected,(function(){return!1})),Object(p.a)(r,_.pending,(function(){return!0})),Object(p.a)(r,_.fulfilled,(function(){return!1})),Object(p.a)(r,_.rejected,(function(){return!1})),Object(p.a)(r,w.pending,(function(){return!0})),Object(p.a)(r,w.fulfilled,(function(){return!1})),Object(p.a)(r,w.rejected,(function(){return!1})),r)),A=Object(d.d)(null,(a={},Object(p.a)(a,y.rejected,(function(e,t){return t.payload})),Object(p.a)(a,_.rejected,(function(e,t){return t.payload})),Object(p.a)(a,w.rejected,(function(e,t){return t.payload})),a)),F=Object(d.d)("",Object(p.a)({},f,(function(e,t){return t.payload}))),S=Object(h.b)({items:N,filter:F,isLoading:k,error:A}),Z=[].concat(Object(b.a)(Object(d.e)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[function(e){return function(e){return function(t){e(t)}}}]),z=Object(d.a)({reducer:{contacts:S},middleware:Z,devTools:null!==!0}),B=n(2),L=n(20),T=n(47),J=n(1),V=["children","to"];var D=function(e){var t=e.children,n=e.to,c=Object(T.a)(e,V),r=Object(B.i)(n),a=Object(B.g)({path:r.pathname,end:!0});return Object(J.jsx)("div",{children:Object(J.jsx)(j.b,Object(L.a)(Object(L.a)({style:{textDecoration:a?"underline":"none"},to:n},c),{},{children:t}))})};var M=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("header",{children:Object(J.jsx)("nav",{children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:Object(J.jsx)(D,{to:"/",children:"Home"})}),Object(J.jsx)("li",{children:Object(J.jsx)(D,{to:"/create",children:"Create contact"})}),Object(J.jsx)("li",{children:Object(J.jsx)(D,{to:"/register",children:"Register"})}),Object(J.jsx)("li",{children:Object(J.jsx)(D,{to:"/login",children:"Login"})})]})})}),Object(J.jsx)(B.a,{})]})},R=n(33),U=n.n(R),$=n(17),q=function(e){return e.contacts.items},W=function(e){return e.contacts.filter},E=function(e){return e.contacts.error},G=Object($.a)([q,W],(function(e,t){var n=t.toUpperCase();return e.filter((function(e){return e.name.toUpperCase().includes(n)}))}));var I=function(){var e=Object(l.c)(W),t=Object(l.b)();return Object(J.jsx)("section",{className:U.a.container,children:Object(J.jsxs)("label",{children:["Find contact by name",Object(J.jsx)("input",{type:"text",className:U.a.input,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(e){return t(f(e.target.value))}})]})})},K=n(46),H=n(30),P=n.n(H);var Y=function(){var e=Object(l.c)(G),t=Object(l.c)(E),n=Object(l.b)();return Object(i.useEffect)((function(){n(y())}),[n]),console.log(t&&t.message),Object(J.jsxs)("ul",{className:P.a.list,children:[t&&Object(J.jsx)("li",{children:Object(J.jsx)("h2",{style:{color:"red",textTransform:"uppercase"},children:t.message})}),e&&e.map((function(e){var t=e.id,c=e.name,r=e.phone,a="tel:"+r.replace(/^(\+)|\D/g,"$1");return Object(J.jsxs)("li",{className:P.a.item,children:[Object(J.jsxs)("p",{children:[c,": ",Object(J.jsx)("a",{href:a,children:r})]}),Object(J.jsx)("button",{className:P.a.button,type:"button","data-id":t,onClick:function(e){n(w(e.currentTarget.dataset.id))},children:Object(J.jsx)(K.a,{})})]},t)}))]})};var Q=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(I,{}),Object(J.jsx)(Y,{})]})},X=n(11),ee=n(15),te=n.n(ee);var ne=function(){var e=Object(l.c)(q),t=Object(l.c)(E),n=Object(l.b)(),c=Object(i.useState)(""),r=Object(X.a)(c,2),a=r[0],s=r[1],o=Object(i.useState)(""),u=Object(X.a)(o,2),j=u[0],b=u[1],d=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":s(c);break;case"number":b(c);break;default:return}};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("form",{className:te.a.form,onSubmit:function(t){t.preventDefault();var c=t.target.name.value.toUpperCase();if(e.find((function(e){return e.name.toUpperCase()===c})))return alert("".concat(c," is already in contacts."));var r={name:a,phone:j};s(""),b(""),n(_(r))},children:[Object(J.jsxs)("label",{className:te.a.label,children:["Name",Object(J.jsx)("input",{type:"text",className:te.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:d})]}),Object(J.jsxs)("label",{className:te.a.label,children:["Number",Object(J.jsx)("input",{type:"tel",className:te.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:d})]}),Object(J.jsx)("button",{className:te.a.button,type:"submit",children:"Add contact"})]}),t&&Object(J.jsxs)("h2",{style:{color:"red",textTransform:"uppercase"},children:["Not save. ",t.message]})]})};var ce=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Create contact"}),Object(J.jsx)(ne,{})]})};var re=function(){return Object(J.jsx)("h1",{children:"Register"})},ae=n(45);var ie=function(){return Object(J.jsx)(ae.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),n(!1)}),400)},children:function(e){var t=e.values,n=e.errors,c=e.touched,r=e.handleChange,a=e.handleBlur,i=e.handleSubmit,s=e.isSubmitting;return Object(J.jsxs)("form",{onSubmit:i,children:[Object(J.jsx)("input",{type:"email",name:"email",onChange:r,onBlur:a,value:t.email}),n.email&&c.email&&n.email,Object(J.jsx)("input",{type:"password",name:"password",onChange:r,onBlur:a,value:t.password}),n.password&&c.password&&n.password,Object(J.jsx)("button",{type:"submit",disabled:s,children:"Submit"})]})}})};var se=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Login"}),Object(J.jsx)(ie,{})]})};var oe=function(){return Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"Nothing to see here!"}),Object(J.jsx)("p",{children:Object(J.jsx)(j.b,{to:"/",children:"Go to the home page"})})]})};var ue=function(){return Object(J.jsx)("div",{className:"container",children:Object(J.jsx)(B.d,{children:Object(J.jsxs)(B.b,{path:"/",element:Object(J.jsx)(M,{}),children:[Object(J.jsx)(B.b,{index:!0,element:Object(J.jsx)(Q,{})}),Object(J.jsx)(B.b,{path:"create",element:Object(J.jsx)(ce,{})}),Object(J.jsx)(B.b,{path:"register",element:Object(J.jsx)(re,{})}),Object(J.jsx)(B.b,{path:"login",element:Object(J.jsx)(se,{})}),Object(J.jsx)(B.b,{path:"*",element:Object(J.jsx)(oe,{})})]})})})};n(79);u.a.render(Object(J.jsx)(s.a.StrictMode,{children:Object(J.jsx)(j.a,{children:Object(J.jsx)(l.a,{store:z,children:Object(J.jsx)(ue,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.b29e615c.chunk.js.map