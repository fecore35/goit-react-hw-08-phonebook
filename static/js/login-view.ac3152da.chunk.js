(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[9],{373:function(e,a,r){"use strict";r.r(a);var o=r(18),t=r(141),i=r(21),s=r(142),n=r(381),l=r(347),d=r(367),c=r(374),u=r(2);var h=function(){var e=Object(o.b)(),a=s.a({email:s.b("Enter your email").email("Enter a valid email").required("Email is required"),password:s.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),r=Object(t.a)({initialValues:{name:"",number:""},validationSchema:a,onSubmit:function(a,r){var o=r.setSubmitting;r.resetForm;e(i.a.logIn(a)),o(!1)}});return Object(u.jsx)(n.a,{component:"form",onSubmit:r.handleSubmit,noValidate:!0,autoComplete:"off",children:Object(u.jsxs)(l.a,{direction:"row",justifyContent:"space-between",alignItems:"stretch",spacing:2,children:[Object(u.jsx)(d.a,{fullWidth:!0,id:"email",name:"email",label:"Email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email}),Object(u.jsx)(d.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password}),Object(u.jsx)(c.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Login"})]})})};a.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)(h,{})]})}}}]);
//# sourceMappingURL=login-view.ac3152da.chunk.js.map