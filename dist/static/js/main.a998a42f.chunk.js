(this["webpackJsonpbrowser-qr"]=this["webpackJsonpbrowser-qr"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),a=n(15),r=n.n(a),i=(n(23),n(0)),o=n.n(i),l=n(2),j=n(4),b=(n(25),n(18)),u=n(16),d=n.n(u),h=n(17),O=n.n(h),x=n(1);var f=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(j.a)(a,2),i=r[0],u=r[1],h=Object(c.useState)(""),f=Object(j.a)(h,2),m=f[0],p=f[1];function v(){chrome.tabs.captureVisibleTab(null,{format:"png",quality:80},(function(e){if(!e)return alert("I'm sorry.\n\nIt seems the extension wasn't able to grab the screenshot of the active tab. Error: "+chrome.runtime.lastError.message+"\n\n"),!1;b.a.scanImage(e).then(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(t),p("");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){p(e)}))}))}return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===i&&v(),d.a.toDataURL(i).then((function(e){s(e)}));case 2:case"end":return e.stop()}}),e)}))),[i]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("div",{className:"content",children:Object(x.jsxs)("h1",{class:"start",children:[Object(x.jsx)("span",{class:"end1",children:"Q"}),Object(x.jsx)("span",{class:"middle1",children:"R-Scanne"}),Object(x.jsx)("span",{class:"middle2",children:Object(x.jsx)("i",{class:"fas fa-code"})}),Object(x.jsx)("span",{class:"end2",children:"R"})]})}),Object(x.jsx)("div",{className:"btn",children:Object(x.jsx)(O.a,{text:i,children:Object(x.jsx)("button",{children:Object(x.jsx)("svg",{className:"btn-copy",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(x.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})})})})})]}),Object(x.jsxs)("div",{className:"inline",children:[Object(x.jsx)("input",{className:"input",defaultValue:i,onChange:function(e){u(e.target.value)}}),Object(x.jsx)("button",{className:"button",onClick:v,children:"Refresh"})]}),Object(x.jsx)("div",{className:"errortext",children:m}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)("img",{src:n})})]})};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root"))}},[[51,1,2]]]);