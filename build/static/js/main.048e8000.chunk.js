(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),o=c(7),r=c.n(o),s=(c(12),c(6)),u=c(2),a=c(0);var l=function(e){var t=Object(n.useState)(""),c=Object(u.a)(t,2),i=c[0],o=c[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),l=s[0],d=s[1],j=["high","medium","low"],b=function(t){t.preventDefault(),l||(l="low"),e.onSubmit({id:Math.random(1e3*Math.floor()),text:i,eagerness:l}),o(""),d("")},m=function(e){o(e.target.value)};return e.edit?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Update entry: ",e.edit.value]}),Object(a.jsxs)("form",{className:"bucket-form",onSubmit:b,children:[Object(a.jsx)("input",{type:"text",placeholder:e.edit.value,value:i,name:"text",className:"bucket-input",onChange:m}),Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"dropbtn ".concat(l),children:l||"Priority"}),Object(a.jsxs)("div",{className:"dropdown-content",children:[Object(a.jsx)("p",{onClick:function(){return d(j[0])},children:"Must do"}),Object(a.jsx)("p",{onClick:function(){return d(j[1])},children:"Want to do"}),Object(a.jsx)("p",{onClick:function(){return d(j[2])},children:"Take it or leave it"})]})]}),Object(a.jsx)("button",{className:"bucket-button",children:"Update"})]})]}):Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"bucket-form",onSubmit:b,children:[Object(a.jsx)("input",{type:"text",placeholder:"Add to your bucket list",value:i,name:"text",className:"bucket-input",onChange:m}),Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"dropbtn ".concat(l),children:l||"Priority"}),Object(a.jsxs)("div",{className:"dropdown-content",children:[Object(a.jsx)("p",{onClick:function(){return d(j[0])},children:"Must do"}),Object(a.jsx)("p",{onClick:function(){return d(j[1])},children:"Want to do"}),Object(a.jsx)("p",{onClick:function(){return d(j[2])},children:"Take it or leave it"})]})]}),Object(a.jsx)("button",{className:"bucket-button",children:"Add bucket list item"})]})})};var d=function(e){var t=Object(n.useState)({id:null,value:"",eagerness:""}),c=Object(u.a)(t,2),i=c[0],o=c[1];return console.log(e.bucket),i.id?Object(a.jsx)(l,{edit:i,onSubmit:function(t){e.editBucketItem(i.id,t),o({id:null,value:"",eagerness:""})}}):e.bucket.map((function(t,c){return Object(a.jsxs)("div",{className:t.isComplete?"bucket-row complete ".concat(t.eagerness):"bucket-row ".concat(t.eagerness),children:[Object(a.jsx)("div",{onClick:function(){return e.completeBucketItem(t.id)},children:t.text},t.id),Object(a.jsxs)("div",{className:"icons",children:[console.log(t),Object(a.jsx)("p",{onClick:function(){return o({id:t.id,value:t.text,eagerness:t.eagerness})},children:" \u270f\ufe0f"}),Object(a.jsx)("p",{onClick:function(){return e.removeBucketItem(t.id)},children:" \ud83d\uddd1\ufe0f"})]})]},c)}))};var j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"What is on your bucket list?"}),Object(a.jsx)(l,{onSubmit:function(e){if(console.log("\ud83d\ude80 ~ file: BucketList.js ~ line 10 ~ addBucketItem ~ item",e),e.text){var t=[e].concat(Object(s.a)(c));console.log(t),i(t)}}}),Object(a.jsx)(d,{bucket:c,completeBucketItem:function(e){var t=c.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));console.log(t),i(t)},removeBucketItem:function(e){var t=Object(s.a)(c).filter((function(t){return t.id!==e}));i(t)},editBucketItem:function(e,t){t.text&&i((function(c){return c.map((function(c){return c.id===e?t:c}))}))}})]})};var b=function(){return Object(a.jsx)("div",{className:"bucket-app",children:Object(a.jsx)(j,{})})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.048e8000.chunk.js.map