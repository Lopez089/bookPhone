(this.webpackJsonpthe_phonebook=this.webpackJsonpthe_phonebook||[]).push([[0],{10:function(e,n,t){},24:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),r=t(19),u=t.n(r),s=(t(24),t(9)),o=t(8),i=t(3),l=(t(10),t(5)),d=t.n(l),h="/api/persons/",j=function(){return d.a.get(h)},b=t(0),f=function(e){var n=e.handleOnChage;return Object(b.jsxs)("div",{children:["Filter shown with ",Object(b.jsx)("input",{onChange:n})]})},m=function(e){var n=e.handleOnChageName,t=e.handleOnChageNumber,c=e.handleSubmit;return Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{onChange:n})]}),Object(b.jsxs)("div",{children:["phone number : ",Object(b.jsx)("input",{onChange:t})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",onClick:function(e){return c(e)},children:"add"})})]})},O=function(e){var n=e.person,t=e.handleDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"".concat(n.name," | ").concat(n.number)}),Object(b.jsx)("button",{onClick:function(){return t(n.name,n.id)},children:"delete"})]})},p=function(e){var n=e.message;if(null===n)return null;var t=n.status?"error":"message";return Object(b.jsx)("p",{className:t,children:n.message})},g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),u=Object(i.a)(r,2),l=u[0],g=u[1],x=Object(c.useState)(""),v=Object(i.a)(x,2),w=v[0],C=v[1],k=Object(c.useState)(""),S=Object(i.a)(k,2),y=S[0],N=S[1],T=Object(c.useState)(null),D=Object(i.a)(T,2),E=D[0],M=D[1];Object(c.useEffect)((function(){j().then((function(e){return a(e.data)}))}),[]);var U=function(e,n){var c=window.confirm("Deseas eliminar de la lista a ".concat(e)),r=t.filter((function(e){return e.id!==n}));a(r),c&&function(e){return d.a.delete("".concat(h).concat(e))}(n).then((function(n){204===n.status&&M({message:"User ".concat(e," was successfully removed"),status:null}),setTimeout((function(){M(null)}),5e3)})).catch((function(n){console.error(n),M({message:"User ".concat(e," can\xb4t removed"),status:"error"}),setTimeout((function(){M(null)}),5e3)}))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(p,{message:E}),Object(b.jsx)(f,{handleOnChage:function(e){return N(e.target.value)}}),Object(b.jsx)("h2",{children:"Add a new Person"}),Object(b.jsx)(m,{handleOnChageName:function(e){return g(e.target.value)},handleOnChageNumber:function(e){return C(e.target.value)},handleSubmit:function(e){e.preventDefault();var n=Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.id})))),c={name:l,number:w,id:n+1};if(t.some((function(e){return e.name===c.name}))){var r=window.confirm("".concat(c.name," is already added to phonebook, replace the old number with a new one")),u=t.find((function(e){if(e.name===c.name)return e.id}));r&&(function(e,n){return d.a.put("".concat(h).concat(e),n)}(u.id,Object(s.a)(Object(s.a)({},c),{},{id:u.id})).then((function(e){200===e.status&&M({message:"User ".concat(u.name," has been updated successfully"),status:null}),setTimeout((function(){M(null)}),5e3)})).catch((function(e){console.error(e),M({message:" can't update user",status:"error"}),setTimeout((function(){M(null)}),5e3)})),j().then((function(e){return a(e.data)})))}else{var i=Object(o.a)(t);a(i.concat(c)),function(e){return d.a.post(h,e)}(c).then((function(e){200===e.status&&M({message:"the user  was added correctly",status:null}),setTimeout((function(){M(null)}),5e3)})).catch((function(e){console.error(e),M({message:" can't add user",status:"error"}),setTimeout((function(){M(null)}),5e3)}))}}}),Object(b.jsx)("h2",{children:"Numbers"}),""===y?t.map((function(e){return Object(b.jsx)(O,{person:e,handleDelete:U},e.id)})):function(e,n){return e.filter((function(e){return new RegExp(n,"i").test(e.name)}))}(t,y).map((function(e){return Object(b.jsx)(O,{person:e,handleDelete:U},e.id)}))]})};u.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3b220060.chunk.js.map