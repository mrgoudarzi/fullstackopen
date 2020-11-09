(this.webpackJsonpcollections=this.webpackJsonpcollections||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){t.exports=n(38)},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),u=n(4),i=n(3),l=function(t){var e=t.note,n=t.toggleImportance,a=t.toggleDelete,o=e.important?"Make not important":"Make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},o),r.a.createElement("button",{onClick:a},"Delete"))},f=n(2),m=n.n(f),s=function(){return m.a.get("/api/notes").then((function(t){return t.data}))},p=function(t){return m.a.post("/api/notes",t).then((function(t){return t.data}))},d=function(t,e){return m.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},E=function(t){return m.a.delete("".concat("/api/notes","/").concat(t)).then((function(t){return t.data}))},b=(n(14),function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)}),v=function(){return r.a.createElement("div",{style:{color:"Green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},h=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),o=n[0],c=n[1],f=Object(a.useState)(""),m=Object(i.a)(f,2),h=m[0],g=m[1],O=Object(a.useState)(!0),j=Object(i.a)(O,2),S=j[0],k=j[1],y=Object(a.useState)(null),D=Object(i.a)(y,2),w=D[0],C=D[1];Object(a.useEffect)((function(){s().then((function(t){c(t)}))}),[]);var N=S?o:o.filter((function(t){return t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(b,{message:w}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return k(!S)}},"show ",S?"important":"all")),r.a.createElement("ul",null,N.map((function(t,e){return r.a.createElement(l,{key:e,note:t,toggleImportance:function(){return function(t){var e=o.find((function(e){return e.id===t})),n=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});d(t,n).then((function(e){c(o.map((function(n){return n.id!==t?n:e})))})).catch((function(n){C("Note ".concat(e.content," was alredy removed from server")),setTimeout((function(){C(null)}),5e3),c(o.filter((function(e){return e.id!==t})))}))}(t.id)},toggleDelete:function(){return e=t.id,void E(e).then((function(){c(o.filter((function(t){return t.id!==e}))),C("deleted"),setTimeout((function(){C(null)}),2e3)}));var e}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:h,date:(new Date).toISOString(),important:Math.random()<.5};p(e).then((function(t){c(o.concat(t)),g("")}))}},r.a.createElement("input",{value:h,onChange:function(t){g(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(v,null))};c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cd180052.chunk.js.map