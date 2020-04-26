(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),i=a.n(r),o=a(7),l=a(9),s=(a(28),function(e){var t=e.title;return c.a.createElement("div",{className:"navheader"},c.a.createElement("h4",{className:"navheader--title"},t))}),u=(a(29),function(e){var t=e.text,a=e.active,n=void 0!==a&&a;return c.a.createElement("div",{className:"navlink ".concat(n?"navlink--active":"")},t)}),m=(a(30),function(){var e=Object(l.e)().pathname;return c.a.createElement("div",{className:"navbar"},c.a.createElement(s,{title:"Project Name"}),c.a.createElement("div",{className:"navbar--links"},c.a.createElement(o.b,{to:"/"},c.a.createElement(u,{text:"Dashboard",active:"/"===e})),c.a.createElement(o.b,{to:"/design/ideas"},c.a.createElement(u,{text:"Design Ideas",active:"/design/ideas"===e})),c.a.createElement(o.b,{to:"/react/components"},c.a.createElement(u,{text:"React Components",active:"/react/components"===e})),c.a.createElement(o.b,{to:"/timeline"},c.a.createElement(u,{text:"Timeline",active:"/timeline"===e})),c.a.createElement(o.b,{to:"/uml"},c.a.createElement(u,{text:"UML",active:"/uml"===e})),c.a.createElement(o.b,{to:"/tasks"},c.a.createElement(u,{text:"Tasks",active:"/tasks"===e})),c.a.createElement(o.b,{to:"/statistics"},c.a.createElement(u,{text:"Statistics",active:"/statistics"===e})),c.a.createElement(o.b,{to:"/settings"},c.a.createElement(u,{text:"Settings",active:"/settings"===e}))))}),d=a(2),g=a(3),f=a(21),p=(a(36),function(e){var t=e.title,a=e.sectionStyle,n=void 0===a?{}:a,r=e.bodyStyle,i=void 0===r?{}:r,o=e.children;return c.a.createElement("div",{className:"section",style:n},c.a.createElement("h6",{className:"section--title"},t),c.a.createElement("div",{className:"section--body",style:i},o))}),b=function(){},E=function(e){var t=e.color,a=e.styles,n=void 0===a?{}:a,r=e.first,i=void 0!==r&&r,o=e.last,l=void 0!==o&&o,s=e.editing,u=void 0!==s&&s,m=e.onChange,d=void 0===m?b:m,g=e.setValue,p=void 0===g?b:g,E=e.setEditing,h=void 0===E?b:E,v=e.onClick,x=void 0!==v&&v,j=e.children,N=Object(f.a)({},n);t&&(N.backgroundColor=t),i&&(N.marginLeft="0"),l&&(N.marginRight="0");return c.a.createElement("div",{className:"dashboard--techtab",style:N,onClick:x||h},u?c.a.createElement("input",{type:"text",value:j,className:"dashboard--techtab__edit",style:{width:"".concat(10*j.length,"px")},onChange:function(e){return d(e.target.value)},onKeyDown:function(e){var t=e.key;return("Enter"===t||"Return"===t)&&p()},onBlur:p,autoFocus:!0}):j)},h=function(e){var t=e.store,a=Object(n.useState)(t.getTech().map((function(e){return{text:e,editing:!1}}))),r=Object(g.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(!1),s=Object(g.a)(l,2),u=s[0],m=s[1],f=function(e){return function(t){i[e].text=t,o(Object(d.a)(i))}},b=function(e){return function(){i[e].editing=!0,m(!0)}},h=function(e){return function(){""===i[e].text.trim()?i.splice(e,1):i[e].editing=!1,o(Object(d.a)(i)),m(!1),t.setTech(i.map((function(e){return e.text})))}};return c.a.createElement(p,{title:"Technologies Used"},i&&i.map((function(e,t){return c.a.createElement(E,{key:t,first:0===t,color:"#705CF1",editing:e.editing,onChange:f(t),setEditing:b(t),setValue:h(t)},e.text)})),!u&&c.a.createElement(E,{last:!0,color:"transparent",styles:{color:"#705CF1",paddingLeft:"20px",paddingRight:"20px",border:"2px solid #705CF1",cursor:"pointer"},onClick:function(){return o([].concat(Object(d.a)(i),[{text:"",editing:!0}])),void m(!0)}},"+"))},v=a(22),x=(a(37),function(){}),j=function(e){var t=e.style,a=void 0===t?{}:t,n=e.onClick,r=void 0===n?x:n,i=e.children;return c.a.createElement("div",{style:a,className:"card",onClick:r},i)},N=function(e){var t=e.store,a=Object(n.useState)(t.getDescription()),r=Object(g.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(!1),s=Object(g.a)(l,2),u=s[0],m=s[1];return c.a.createElement(p,{title:"Project Description"},c.a.createElement(j,{onClick:function(){return m(!0)}},c.a.createElement("h4",{className:"dashboard--description"},u&&c.a.createElement(v.a,{value:i,className:"dashboard--description__edit",onChange:function(e){return o(e.target.value)},onBlur:function(){m(!1),t.setDescription(i)},autoFocus:!0}),!u&&i.split("\n\n").map((function(e,t){return c.a.createElement("p",{key:t},e)})))))},O=function(e){var t=e.store,a=Object(n.useState)(t.getGoals().map((function(e){return{text:e,editing:!1}}))),r=Object(g.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(!1),s=Object(g.a)(l,2),u=s[0],m=s[1],f=function(e){return function(t){i[e].text=t.target.value,o(Object(d.a)(i))}},b=function(e){return function(){i[e].editing=!0,o(Object(d.a)(i))}},E=function(e){return function(){m(!1),i[e].editing=!1,""===i[e].text.trim()&&i.splice(e,1),o(Object(d.a)(i)),t.setGoals(i.map((function(e){return e.text})))}};return c.a.createElement(p,{title:"Goal",sectionStyle:{flex:"1"},bodyStyle:{paddingRight:"12.5px"}},c.a.createElement(j,null,c.a.createElement("ul",{className:"dashboard--list"},i.map((function(e,t){return c.a.createElement("li",{key:t,onClick:b(t)},e.editing&&c.a.createElement("input",{className:"dashboard--list__edit",value:e.text,onChange:f(t),onBlur:E(t),autoFocus:!0}),!e.editing&&e.text)}))),!u&&c.a.createElement("button",{className:"dashboard--list__add",onClick:function(){m(!0),o([].concat(Object(d.a)(i),[{text:"",editing:!0}]))}},"+")))},k=function(e){var t=e.store,a=Object(n.useState)(t.getTargetAudience().map((function(e){return{text:e,editing:!1}}))),r=Object(g.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(!1),s=Object(g.a)(l,2),u=s[0],m=s[1],f=function(e){return function(t){i[e].text=t.target.value,o(Object(d.a)(i))}},b=function(e){return function(){i[e].editing=!0,o(Object(d.a)(i))}},E=function(e){return function(){m(!1),i[e].editing=!1,""===i[e].text.trim()&&i.splice(e,1),o(Object(d.a)(i)),t.setTargetAudience(i.map((function(e){return e.text})))}};return c.a.createElement(p,{title:"Target Audience",sectionStyle:{flex:"1"},bodyStyle:{paddingLeft:"12.5px"}},c.a.createElement(j,null,c.a.createElement("ul",{className:"dashboard--list"},i.map((function(e,t){return c.a.createElement("li",{key:t,onClick:b(t)},e.editing&&c.a.createElement("input",{className:"dashboard--list__edit",value:e.text,onChange:f(t),onBlur:E(t),autoFocus:!0}),!e.editing&&e.text)}))),!u&&c.a.createElement("button",{className:"dashboard--list__add",onClick:function(){m(!0),o([].concat(Object(d.a)(i),[{text:"",editing:!0}]))}},"+")))},y=function(e){var t=e.store,a=Object(n.useState)(t.getImpacts().map((function(e){return{text:e,editing:!1}}))),r=Object(g.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(!1),s=Object(g.a)(l,2),u=s[0],m=s[1],f=function(e){return function(t){i[e].text=t.target.value,o(Object(d.a)(i))}},b=function(e){return function(){i[e].editing=!0,o(Object(d.a)(i))}},E=function(e){return function(){m(!1),i[e].editing=!1,""===i[e].text.trim()&&i.splice(e,1),o(Object(d.a)(i)),t.setImpacts(i.map((function(e){return e.text})))}};return c.a.createElement(p,{title:"Impact",sectionStyle:{flex:"1"},bodyStyle:{paddingLeft:"12.5px"}},c.a.createElement(j,null,c.a.createElement("ul",{className:"dashboard--list"},i.map((function(e,t){return c.a.createElement("li",{key:t,onClick:b(t)},e.editing&&c.a.createElement("input",{className:"dashboard--list__edit",value:e.text,onChange:f(t),onBlur:E(t),autoFocus:!0}),!e.editing&&e.text)}))),!u&&c.a.createElement("button",{className:"dashboard--list__add",onClick:function(){m(!0),o([].concat(Object(d.a)(i),[{text:"",editing:!0}]))}},"+")))},S=function(){var e={projects:{}},t=function(){var t=JSON.stringify(e);localStorage.setItem("projects_data",t)},a={project:function(a){var n=function(){return e.projects[a]},c={getTitle:function(){return n().title||""},getTech:function(){return n().technologies||[]},getDescription:function(){return n().description||""},getGoals:function(){return n().goals||[]},getTargetAudience:function(){return n().targetAudience||[]},getImpacts:function(){return n().impacts||[]},setTitle:function(e){n().title=e,t()},setTech:function(e){n().technologies=e,t()},setDescription:function(e){n().description=e,t()},setGoals:function(e){n().goals=e,t()},setTargetAudience:function(e){n().targetAudience=e,t()},setImpacts:function(e){n().impacts=e,t()}};return n()||(e.projects[a]={},t()),c}};return localStorage.getItem("projects_data")?e=JSON.parse(localStorage.getItem("projects_data")):t(),a}(),C=(a(38),function(e){var t=e.children;return c.a.createElement("div",{className:"dashboard--header-title"},c.a.createElement("h3",{className:"dashboard--header-title__h4"},t))}),_=function(e){var t,a=e.url;return"github"===e.icon&&(t=c.a.createElement("i",{className:"fa fa-github"})),c.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t)},w=function(e){var t=e.project;console.log(t);var a=S.project(t);return c.a.createElement("div",{className:"dashboard"},c.a.createElement("div",{className:"dashboard--header"},c.a.createElement(C,null,"Project Planner / Showcase"),c.a.createElement("div",{className:"dashboard--header-links"},c.a.createElement(_,{url:"https://github.com",icon:"github"}))),c.a.createElement(h,{store:a}),c.a.createElement(N,{store:a}),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(O,{store:a}),c.a.createElement(k,{store:a}),c.a.createElement(y,{store:a})))},I=(a(39),function(){return c.a.createElement("div",{className:"design-ideas"},c.a.createElement(p,{title:"Design Ideas"},c.a.createElement("a",{href:"https://i.ibb.co/hMNSRKW/IMG-1310.jpg",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"drawing-image",alt:"Drawings-1",src:"https://i.ibb.co/hMNSRKW/IMG-1310.jpg"})),c.a.createElement("a",{href:"https://i.ibb.co/nwtsP3d/IMG-1308.jpg",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"drawing-image",alt:"Drawings-2",src:"https://i.ibb.co/nwtsP3d/IMG-1308.jpg"})),c.a.createElement("a",{href:"https://i.ibb.co/M1mMxnQ/IMG-1311.jpg",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"drawing-image",alt:"Drawings-3",src:"https://i.ibb.co/M1mMxnQ/IMG-1311.jpg"})),c.a.createElement("a",{href:"https://i.ibb.co/SrKxCGc/IMG-1309.jpg",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"drawing-image",alt:"Drawings-4",src:"https://i.ibb.co/SrKxCGc/IMG-1309.jpg"}))))});a(40);var M=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(m,null),c.a.createElement(l.a,{path:"/",exact:!0},c.a.createElement(w,{project:"project-planner"})),c.a.createElement(l.a,{path:"/design/ideas",exact:!0},c.a.createElement(I,null)),c.a.createElement(l.a,{path:"/react/components",exact:!0}),c.a.createElement(l.a,{path:"/timeline",exact:!0}),c.a.createElement(l.a,{path:"/uml",exact:!0}),c.a.createElement(l.a,{path:"/tasks",exact:!0}),c.a.createElement(l.a,{path:"/statistics",exact:!0}),c.a.createElement(l.a,{path:"/settings",exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.b1013a8a.chunk.js.map