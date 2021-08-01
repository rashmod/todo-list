(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,function(e,t,n){e.exports={todoItem:"TodoItem_todoItem__2WT0Q","fa-trash":"TodoItem_fa-trash__1zoG0","fa-check":"TodoItem_fa-check__2cp2g","fa-check-completed":"TodoItem_fa-check-completed__2nvu1",completed:"TodoItem_completed__3EZRL"}},,,function(e,t,n){e.exports={addTodo:"FormInput_addTodo__36XX4",invalid:"FormInput_invalid__1cI4j","fa-plus":"FormInput_fa-plus__3Z5pq"}},,,,function(e,t,n){e.exports={container:"TodoList_container__3C_3M",todoList:"TodoList_todoList__3KqM4"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(9),i=n.n(a),l=(n(16),n(8)),s=n(11),d=n(2),r=(n(17),n(0)),u=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("select",{value:e.selectedFilter,onChange:function(t){e.onFilterChange(t.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"completed",children:"Completed"}),Object(r.jsx)("option",{value:"incomplete",children:"Incomplete"})]})})},j=n(6),f=n.n(j),m=function(e){var t=Object(o.useState)(""),n=Object(d.a)(t,2),c=n[0],a=n[1],i=Object(o.useState)(!0),l=Object(d.a)(i,2),s=l[0],u=l[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==c.trim().length?(e.onAddTodo(c),a("")):u(!1)},children:[Object(r.jsx)("label",{htmlFor:"addTodo",children:"Add a Todo"}),Object(r.jsxs)("div",{className:f.a.addTodo,children:[Object(r.jsx)("input",{type:"text",id:"addTodo",onChange:function(e){e.target.value.trim().length>0&&u(!0),a(e.target.value)},value:c,className:"".concat(!s&&f.a.invalid),autoFocus:!0}),Object(r.jsx)("button",{children:Object(r.jsx)("i",{className:"fa fa-plus ".concat(f.a["fa-plus"])})})]}),!s&&Object(r.jsx)("p",{children:"Please enter a valid todo"})]})},b=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("select",{value:e.selectedSort,onChange:function(t){e.onSortChange(t.target.value)},children:[Object(r.jsx)("option",{value:"newest",children:"Newest"}),Object(r.jsx)("option",{value:"oldest",children:"Oldest"})]})})},h=n(3),p=n.n(h),O=function(e){return Object(r.jsxs)("li",{className:p.a.todoItem,children:[Object(r.jsx)("span",{className:"".concat(e.isCompleted&&p.a.completed),children:Object(r.jsx)("span",{children:e.children})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",onClick:function(){e.onComplete(e.id)},children:Object(r.jsx)("i",{className:"fa fa-check ".concat(p.a["fa-check"]," ").concat(e.isCompleted&&p.a["fa-check-completed"])})}),Object(r.jsx)("button",{type:"button",onClick:function(){e.onDelete(e.id)},children:Object(r.jsx)("i",{className:"fa fa-trash ".concat(p.a["fa-trash"])})})]})]})},x=n(10),g=n.n(x),v=function(e){var t,n,o=(t=e.list,n=e.sortConfig,t.sort((function(e,t){return"newest"===n?e.date>t.date?-1:1:e.date<t.date?-1:1})));return Object(r.jsx)("ul",{className:g.a.todoList,children:o.map((function(t){return Object(r.jsx)(O,{id:t.id,onDelete:e.onDeleteTodo,onComplete:e.onCompleteTodo,isCompleted:t.isCompleted,children:t.text},t.id)}))})};var _=function(){var e=Object(o.useState)(function(){var e=localStorage.getItem("todoList");return e?JSON.parse(e):[]}()),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)("all"),i=Object(d.a)(a,2),j=i[0],f=i[1],h=Object(o.useState)("newest"),p=Object(d.a)(h,2),O=p[0],x=p[1];console.log(JSON.stringify(n)),Object(o.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(n))}),[n]),console.log(new Date);var g=n.filter((function(e){return"all"===j?e:"completed"===j?!0===e.isCompleted:!1===e.isCompleted}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(m,{onAddTodo:function(e){c((function(t){var n=Object(s.a)(t);return n.unshift({text:e,id:Math.random().toString(),isCompleted:!1,date:(new Date).getTime()}),n}))}}),Object(r.jsxs)("div",{className:"container",children:[n.length>0&&Object(r.jsxs)("div",{className:"filter",children:[Object(r.jsx)(u,{onFilterChange:function(e){f(e)},selectedFilter:j}),Object(r.jsx)(b,{onSortChange:function(e){x(e)},selectedSort:O})]}),n.length>0?Object(r.jsx)(v,{list:g,onDeleteTodo:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))},onCompleteTodo:function(e){c((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{isCompleted:!t.isCompleted}):t}))}))},sortConfig:O}):Object(r.jsx)("h3",{children:"No Todo found. Add one?"})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(_,{})}),document.getElementById("root")),C()}],[[19,1,2]]]);
//# sourceMappingURL=main.f9ddb6c6.chunk.js.map