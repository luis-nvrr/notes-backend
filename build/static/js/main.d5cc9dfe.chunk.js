(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var c=t(1),u=t(15),r=t.n(u),a=(t(20),t(4)),o=t(3),i=t(0),s=function(n){var e=n.value,t=n.onChange,c=n.onBlur;return Object(i.jsxs)("div",{children:["filter shown with",Object(i.jsx)("input",{value:e,onChange:t,onBlur:c})]})},f=function(n){var e=Object(a.a)({},n),t=e.onSubmit,c=e.nameValue,u=e.nameOnChange,r=e.numberValue,o=e.numberOnChange;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:c,onChange:u})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:o})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},b=function(n){var e=n.name,t=n.number,c=n.id,u=n.onDelete;return Object(i.jsxs)("div",{children:[e," ",t," ",Object(i.jsx)("button",{onClick:u(c),children:"delete"})]})},j=function(n){var e=n.personsArray,t=n.onDelete;return Object(i.jsx)("div",{children:e.map((function(n){return Object(i.jsx)(b,{name:n.name,number:n.number,id:n.id,onDelete:t},n.name)}))})},l=t(5),d=t.n(l),m="/api/persons",h=function(){return d.a.get(m)},O=function(n){return d.a.post(m,n)},v=function(n,e){return d.a.put("".concat(m,"/").concat(n),e)},p=function(n){return d.a.delete("".concat(m,"/").concat(n))},x=function(n){var e=n.message,t=n.notificationType;return null===e?null:Object(i.jsx)("div",{className:t,children:e})},w=function(){var n=Object(c.useState)([]),e=Object(o.a)(n,2),t=e[0],u=e[1],r=Object(c.useState)([]),b=Object(o.a)(r,2),l=b[0],d=b[1],m=Object(c.useState)(""),w=Object(o.a)(m,2),g=w[0],C=w[1],y=Object(c.useState)(""),S=Object(o.a)(y,2),k=S[0],D=S[1],B=Object(c.useState)(""),L=Object(o.a)(B,2),N=L[0],V=L[1],A=Object(c.useState)(null),T=Object(o.a)(A,2),E=T[0],I=T[1],J=Object(c.useState)(""),P=Object(o.a)(J,2),q=P[0],z=P[1];Object(c.useEffect)((function(){h().then((function(n){u(n.data)}))}),[]);var F=function(n){d(G(n))},G=function(n){return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},H=function(){O({name:g,number:k}).then((function(n){return u(t.concat(n.data))})).then(U())},K=function(n){return t.find((function(e){return e.id===n}))},M=function(){var n=Z(g),e=Object(a.a)(Object(a.a)({},n),{},{number:k});v(e.id,e).then((function(n){return u(t.map((function(e){return e.name===n.data.name?n.data:e})))})).then(W()).catch((function(n){Y(e.name),Q(e.id)})),$()},Q=function(n){u(t.filter((function(e){return e.id!==n})))},R=function(){setTimeout((function(){return I(null)}),5e3)},U=function(){I("New person added: ".concat(g)),z("success"),R()},W=function(){I("Successfully updated ".concat(g)),z("success"),R()},X=function(n){I("Successfully removed ".concat(n)),z("success"),R()},Y=function(n){I("".concat(n," has been already removed from the server")),z("error"),R()},Z=function(n){return t.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))},$=function(){C(""),D("")},_=function(){V(""),d([])},nn=function(n){return-1!==t.findIndex((function(e){return e.name===n}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(x,{message:E,notificationType:q}),Object(i.jsx)(s,{value:N,onChange:function(n){var e=n.target.value;V(e),F(e)},onBlur:_}),Object(i.jsx)("h3",{children:"add a new"}),Object(i.jsx)(f,{onSubmit:function(n){if(n.preventDefault(),""===g)return alert("Not a valid name");nn(g)&&window.confirm("".concat(g," is already on the phonebook, replace the old number with a new one?"))?M():(H(),$())},nameValue:g,nameOnChange:function(n){_(),C(n.target.value)},numberValue:k,numberOnChange:function(n){D(n.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(j,{personsArray:""===N?t:l,onDelete:function(n){return function(){var e=K(n);window.confirm("Are you sure you want to delete ".concat(e.name))&&p(n).then((function(){return u(t.filter((function(n){return n.name!==e.name})))})).then(X(e.name)).catch((function(t){Y(e.name),Q(n)}))}}})]})};r.a.render(Object(i.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d5cc9dfe.chunk.js.map