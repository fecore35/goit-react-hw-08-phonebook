(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{101:function(e,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"c",(function(){return o})),r.d(n,"b",(function(){return u})),r.d(n,"d",(function(){return c}));var t=r(19),a=function(e){return e.contacts.items},o=function(e){return e.contacts.filter},u=function(e){return e.contacts.error},c=Object(t.a)([a,o],(function(e,n){var r=n.toUpperCase();return e.filter((function(e){return e.name.toUpperCase().includes(r)}))}))},320:function(e,n,r){"use strict";r.r(n);var t=r(140),a=r(18),o=r(101),u=r(6),c=r(317),i=r(384),s=r(377),m=r(370),b=r(2);var l=function(){var e=Object(a.c)(o.a),n=Object(a.c)(o.b),r=Object(a.b)(),l=c.a({name:c.b("Enter name").required("Name is required"),number:c.b("Enter Phone number").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("Phone number is required")}),d=Object(t.e)({initialValues:{name:"",number:""},validationSchema:l,onSubmit:function(n,t){var a=t.setSubmitting,o=t.resetForm,c=n.name.toUpperCase();if(e.find((function(e){return e.name.toUpperCase()===c})))return a(!1),alert("".concat(c," is already in contacts."));r(Object(u.a)(n)),o(),a(!1)}});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(i.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"100%"}},noValidate:!0,onSubmit:d.handleSubmit,autoComplete:"off",children:[Object(b.jsx)(m.a,{fullWidth:!0,id:"name",name:"name",label:"Name",value:d.values.name,onChange:d.handleChange,error:d.touched.name&&Boolean(d.errors.name),helperText:d.touched.name&&d.errors.name}),Object(b.jsx)(m.a,{fullWidth:!0,id:"number",name:"number",label:"Phone number",value:d.values.number,onChange:d.handleChange,error:d.touched.number&&Boolean(d.errors.number),helperText:d.touched.number&&d.errors.number}),Object(b.jsx)(s.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Add contact"})]}),n&&Object(b.jsx)("h2",{style:{color:"red",textTransform:"uppercase"},children:n.message})]})};n.default=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l,{})})}}}]);
//# sourceMappingURL=create-view.d3fbc3c7.chunk.js.map