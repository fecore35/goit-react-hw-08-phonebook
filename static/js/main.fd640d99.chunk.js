(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[9],{19:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return g}));var r=n(7),c=n.n(r),a=n(11),u=n(4),o=n(10),i=n.n(o);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s,l=Object.freeze({set:function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},unset:function(){i.a.defaults.headers.common.Authorization=""}}),b=Object(u.c)("auth/register",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/signup",e);case 3:return r=t.sent,a=r.data,l.set(a.token),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(u.c)("auth/login",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/login",e);case 3:return r=t.sent,a=r.data,l.set(a.token),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(u.c)("auth/logout",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/logout");case 3:return r=t.sent,a=r.data,l.unset(),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(u.c)("auth/refresh",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return l.set(a),t.prev=5,t.next=8,i.a.get("/users/current");case 8:return u=t.sent,o=u.data,t.abrupt("return",o);case 13:return t.prev=13,t.t0=t.catch(5),t.abrupt("return",n.rejectWithValue(t.t0));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()),p={register:b,logIn:f,logOut:j,fetchCurrentUser:d},O=n(3),h=Object(u.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(s={},Object(O.a)(s,p.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(O.a)(s,p.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(O.a)(s,p.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(O.a)(s,p.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0})),s)}).reducer,g={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserEmail:function(t){return t.auth.user.email}}},27:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),c=(Object(r.b)("contacts/Create"),Object(r.b)("contacts/Filter"))},6:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return b}));var r=n(7),c=n.n(r),a=n(11),u=n(4),o=n(10),i=n.n(o),s=Object(u.c)("contacts/getContact",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,i.a.get("/contacts");case 4:return a=t.sent,u=a.data,t.abrupt("return",u);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),l=Object(u.c)("contacts/addContact",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,i.a.post("/contacts",e);case 4:return a=t.sent,u=a.data,t.abrupt("return",u);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),b=Object(u.c)("contacts/deleteContact",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,i.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",{id:e});case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}())},71:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var r,c,a,u=n(0),o=n.n(u),i=n(22),s=n.n(i),l=n(17),b=n(37),f=n(26),j=n(16),d=n(4),p=n(12),O=n(38),h=n.n(O),g=n(3),v=n(5),x=n(27),m=n(6),y=Object(d.d)([],(r={},Object(g.a)(r,m.c.fulfilled,(function(t,e){return Object(j.a)(e.payload)})),Object(g.a)(r,m.a.fulfilled,(function(t,e){return[].concat(Object(j.a)(t),[e.payload])})),Object(g.a)(r,m.b.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),r)),k=Object(d.d)(!1,(c={},Object(g.a)(c,m.c.pending,(function(){return!0})),Object(g.a)(c,m.c.fulfilled,(function(){return!1})),Object(g.a)(c,m.c.rejected,(function(){return!1})),Object(g.a)(c,m.a.pending,(function(){return!0})),Object(g.a)(c,m.a.fulfilled,(function(){return!1})),Object(g.a)(c,m.a.rejected,(function(){return!1})),Object(g.a)(c,m.b.pending,(function(){return!0})),Object(g.a)(c,m.b.fulfilled,(function(){return!1})),Object(g.a)(c,m.b.rejected,(function(){return!1})),c)),w=Object(d.d)(null,(a={},Object(g.a)(a,m.c.rejected,(function(t,e){return e.payload})),Object(g.a)(a,m.a.rejected,(function(t,e){return e.payload})),Object(g.a)(a,m.b.rejected,(function(t,e){return e.payload})),a)),I=Object(d.d)("",Object(g.a)({},x.a,(function(t,e){return e.payload}))),z=Object(v.b)({items:y,filter:I,isLoading:k,error:w}),L=n(19),C=[].concat(Object(j.a)(Object(d.f)({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})),[function(t){return function(t){return function(e){t(e)}}}]),V={key:"auth",storage:h.a,whitelist:["token"]},W=Object(d.a)({reducer:{contacts:z,auth:Object(p.g)(V,L.b)},middleware:C,devTools:null!==!0}),U=Object(p.h)(W),S=n(1),A=n(2),E=Object(u.lazy)((function(){return n.e(6).then(n.bind(null,93))})),B=Object(u.lazy)((function(){return n.e(7).then(n.bind(null,90))})),J=Object(u.lazy)((function(){return n.e(3).then(n.bind(null,91))})),P=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,94))})),R=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,95))})),F=Object(u.lazy)((function(){return n.e(1).then(n.bind(null,92))}));var M=function(){var t=Object(l.b)();return Object(u.useEffect)((function(){t(L.a.fetchCurrentUser())}),[t]),Object(A.jsx)("div",{className:"container",children:Object(A.jsx)(u.Suspense,{fallback:Object(A.jsx)("h1",{children:"Loading "}),children:Object(A.jsx)(S.d,{children:Object(A.jsxs)(S.b,{path:"/",element:Object(A.jsx)(E,{}),children:[Object(A.jsx)(S.b,{index:!0,element:Object(A.jsx)(B,{})}),Object(A.jsx)(S.b,{path:"contacts",element:Object(A.jsx)(J,{})}),Object(A.jsx)(S.b,{path:"register",element:Object(A.jsx)(P,{})}),Object(A.jsx)(S.b,{path:"login",element:Object(A.jsx)(R,{})}),Object(A.jsx)(S.b,{path:"*",element:Object(A.jsx)(F,{})})]})})})})};n(71);s.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(l.a,{store:W,children:Object(A.jsx)(b.a,{loading:null,persistor:U,children:Object(A.jsx)(f.a,{children:Object(A.jsx)(M,{})})})})}),document.getElementById("root"))}},[[72,11,12]]]);
//# sourceMappingURL=main.fd640d99.chunk.js.map