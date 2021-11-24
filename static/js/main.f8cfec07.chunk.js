(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}},22:function(t,e,n){t.exports={input:"Filter_input__2DoVp"}},64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a,c,r,u=n(0),o=n.n(u),i=n(15),s=n.n(i),b=n(6),l=n(12),j=n(4),d=n(9),p=n(2),f=n(3),O=(Object(j.b)("contacts/Create"),Object(j.b)("contacts/Filter")),m=n(7),h=n.n(m),v=n(17),x=n(18),C=n.n(x),_=Object(j.c)("contacts/getContact",function(){var t=Object(v.a)(h.a.mark((function t(e,n){var a,c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,C.a.get("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts");case 4:return c=t.sent,r=c.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),g=Object(j.c)("contacts/addContact",function(){var t=Object(v.a)(h.a.mark((function t(e,n){var a,c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,C.a.post("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts",e);case 4:return c=t.sent,r=c.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),y=Object(j.c)("contacts/deleteContact",function(){var t=Object(v.a)(h.a.mark((function t(e,n){var a,c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,C.a.delete("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts/".concat(e));case 4:return c=t.sent,r=c.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),k=Object(j.d)([],(a={},Object(p.a)(a,_.fulfilled,(function(t,e){return Object(l.a)(e.payload)})),Object(p.a)(a,g.fulfilled,(function(t,e){return[].concat(Object(l.a)(t),[e.payload])})),Object(p.a)(a,y.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),a)),N=Object(j.d)(!1,(c={},Object(p.a)(c,_.pending,(function(){return!0})),Object(p.a)(c,_.fulfilled,(function(){return!1})),Object(p.a)(c,_.rejected,(function(){return!1})),Object(p.a)(c,g.pending,(function(){return!0})),Object(p.a)(c,g.fulfilled,(function(){return!1})),Object(p.a)(c,g.rejected,(function(){return!1})),Object(p.a)(c,y.pending,(function(){return!0})),Object(p.a)(c,y.fulfilled,(function(){return!1})),Object(p.a)(c,y.rejected,(function(){return!1})),c)),w=Object(j.d)(null,(r={},Object(p.a)(r,_.rejected,(function(t,e){return e.payload})),Object(p.a)(r,g.rejected,(function(t,e){return e.payload})),Object(p.a)(r,y.rejected,(function(t,e){return e.payload})),r)),A=Object(j.d)("",Object(p.a)({},O,(function(t,e){return e.payload}))),z=Object(f.b)({items:k,filter:A,isLoading:N,error:w}),F=[].concat(Object(l.a)(Object(j.e)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),[function(t){return function(t){return function(e){t(e)}}}]),Z=Object(j.a)({reducer:{contacts:z},middleware:F,devTools:null!==!0}),L=n(23),B=n(8),J=n.n(B),M=n(10),S=function(t){return t.contacts.items},U=function(t){return t.contacts.filter},V=Object(M.a)([S,U],(function(t,e){var n=e.toUpperCase();return t.filter((function(t){return t.name.toUpperCase().includes(n)}))})),D=n(1);var T=function(){var t=Object(b.c)(S),e=Object(b.b)(),n=Object(u.useState)(""),a=Object(L.a)(n,2),c=a[0],r=a[1],o=Object(u.useState)(""),i=Object(L.a)(o,2),s=i[0],l=i[1],j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":l(a);break;default:return}};return Object(D.jsxs)("form",{className:J.a.form,onSubmit:function(n){n.preventDefault();var a=n.target.name.value.toUpperCase();if(t.find((function(t){return t.name.toUpperCase()===a})))return alert("".concat(a," is already in contacts."));var u={name:c,phone:s};r(""),l(""),e(g(u))},children:[Object(D.jsxs)("label",{className:J.a.label,children:["Name",Object(D.jsx)("input",{type:"text",className:J.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:j})]}),Object(D.jsxs)("label",{className:J.a.label,children:["Number",Object(D.jsx)("input",{type:"tel",className:J.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:j})]}),Object(D.jsx)("button",{className:J.a.button,type:"submit",children:"Add contact"})]})},W=n(22),$=n.n(W);var q=function(){var t=Object(b.c)(U),e=Object(b.b)();return Object(D.jsx)("section",{className:$.a.container,children:Object(D.jsxs)("label",{children:["Find contact by name",Object(D.jsx)("input",{type:"text",className:$.a.input,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:function(t){return e(O(t.target.value))}})]})})},E=n(33),K=n(19),G=n.n(K);var I=function(){var t=Object(b.c)(V),e=Object(b.b)();return Object(u.useEffect)((function(){e(_())}),[e]),Object(D.jsx)("ul",{className:G.a.list,children:t&&t.map((function(t){var n=t.id,a=t.name,c=t.phone,r="tel:"+c.replace(/^(\+)|\D/g,"$1");return Object(D.jsxs)("li",{className:G.a.item,children:[Object(D.jsxs)("p",{children:[a,": ",Object(D.jsx)("a",{href:r,children:c})]}),Object(D.jsx)("button",{className:G.a.button,type:"button","data-id":n,onClick:function(t){e(y(t.currentTarget.dataset.id))},children:Object(D.jsx)(E.a,{})})]},n)}))})};var P=function(){return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("h1",{children:"Phonebook"}),Object(D.jsx)(T,{}),Object(D.jsx)("h2",{children:"Contacts"}),Object(D.jsx)(q,{}),Object(D.jsx)(I,{})]})};n(64);s.a.render(Object(D.jsx)(o.a.StrictMode,{children:Object(D.jsx)(b.a,{store:Z,children:Object(D.jsx)(P,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}}},[[65,1,2]]]);
//# sourceMappingURL=main.f8cfec07.chunk.js.map