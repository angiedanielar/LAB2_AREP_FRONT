(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{21:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),s=a.n(n),o=a(13),r=a.n(o),i=(a(21),a(15)),l=a(4),d=a.n(l),m=a(14),j=a.n(m);var b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.jsx)("div",{className:"container mt-5",children:Object(c.jsx)("div",{className:"row mt-5",children:Object(c.jsx)("div",{className:"container mt-5",children:Object(c.jsx)("div",{className:"col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary",children:Object(c.jsxs)("form",{action:"#",className:"appointment-form",onSubmit:function(e){e.preventDefault(),console.log(a),j.a.post("http://localhost:4567/calculator/calculate/",a).then((function(e){var t=JSON.parse(e.data),a=t.mean,c=t.std;console.log(a,c),d.a.fire({title:"Yeah!",text:" The mean is: ".concat(a," and the standard deviation is: ").concat(c),icon:"success",confirmButtonText:"Ok"})})).catch((function(e){console.log(e),d.a.fire({title:"Ops!",text:"Par\xe1metros no v\xe1lidos",icon:"error",confirmButtonText:"Ok"})}))},children:[Object(c.jsx)("h3",{className:"mb-3",children:"Data to be calculate"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"name",className:"form-control",placeholder:"Example of use: 23.1, 4, 10",onChange:function(e){return s(e.target.value)},required:!0})})}),Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"submit",value:"Calculate!",className:"btn btn-white py-3 px-4"})})})]})]})})})})})};var h=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("a",{className:"navbar-brand",href:"index.html",children:["Stadistic ",Object(c.jsx)("span",{children:"Calculator"})]})})}),Object(c.jsx)("div",{className:"overlay home-background ",children:Object(c.jsx)(b,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.9b289a4e.chunk.js.map