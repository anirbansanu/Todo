(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(18),o=a.n(n),l=(a(25),a(11)),r=a(20),i=(a(26),a(8)),d=a(0);function b(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)(i.b,{className:"navbar-brand text-white",to:"/",children:e.tittle}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link text-white active","aria-current":"page",to:"/Todo",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link text-white",to:"/Todo/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control btn-secondary me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Search"})]}):Object(d.jsx)("h6",{className:"text-white",children:"No Search Bar"})]})]})})})}b.defaultProps={tittle:"Your Tittle Here",searchBar:!0};var j=function(e){return Object(d.jsxs)("div",{className:"card mt-2",children:[Object(d.jsx)("h4",{className:"card-header",children:e.todoItem.tittle}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("p",{children:e.todoItem.desc}),Object(d.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){e.onDelete(e.todoItem)},children:"Delete"})]})]})},h=function(e){return Object(d.jsxs)("div",{className:"container mt-2",children:[Object(d.jsx)("h3",{className:"",children:"ToDos List"}),0===e.todos.length?"No Todos To Display":e.todos.map((function(t){return Object(d.jsx)(j,{todoItem:t,onDelete:e.onDelete},t.sno)}))]})},m=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",style:{position:"relative",top:"30vh",width:"100%"},children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 || MyTodoApp 2021"})})},u=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),i=r[0],b=r[1];return Object(d.jsxs)("form",{className:"container mt-2",onSubmit:function(t){t.preventDefault(),s?i?(e.addTodo(s,i),n(""),b("")):alert("Description cann't be blank"):alert("Tittle cann't be blank")},children:[Object(d.jsx)("h4",{children:"Add Todo"}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"tittle",className:"form-label",children:"Todo Tittle"}),Object(d.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)},className:"form-control",id:"tittle","aria-describedby":"tittleHelp"}),Object(d.jsx)("div",{id:"tittle",className:"form-text",children:"Please Give a Tittle"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){return b(e.target.value)},className:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})},x=function(e){return Object(d.jsxs)("div",{className:"card m-4",children:[Object(d.jsx)("h4",{className:"card-header",children:"About"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{children:"use Todo when you have a deadline, NEED to focus, prioritize and get things done quickly\u2013from home or school projects, to dozens of work tasks\u2013with sub-tasks and projects."})})]})},O=a(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("Delete Btn Clicked : ",e),j(o.filter((function(t){return t!==e})))},a=function(e,t){var a={sno:o.length?o[o.length-1].sno+1:1,tittle:e,desc:t};j([].concat(Object(r.a)(o),[a])),console.log(a)},s=Object(c.useState)(e),n=Object(l.a)(s,2),o=n[0],j=n[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{tittle:"ToDo List",searchBar:!1}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/Todo",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{addTodo:a}),Object(d.jsx)(h,{todos:o,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/Todo/about",children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(m,{})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.156a56d0.chunk.js.map