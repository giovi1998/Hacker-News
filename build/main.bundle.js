(()=>{"use strict";var e,t,n,a,l={474:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var a=n(283),l=n(772);async function o(){const e=await fetch("/.netlify/functions/lambda"),t=await e.json();return[_.get(t,"value1"),_.get(t,"value2"),_.get(t,"value3")]}const i=await o();await(0,a.I1)(i[0]),(0,l.IR)();let r=(0,l.wC)("container"),c=(0,l.rj)("lds-dual-ring is-flex-direction-column mt-1");await(0,a.jS)(10,i[1],i[2]);for(let u=0;u<10;u++){c.className="is-hidden";let m=_.get(a.GC[u],"url"),p=_.get(a.GC[u],"title"),h=_.get(a.GC[u],"time"),f=_.get(a.GC[u],"text");(0,l.zO)(u,r,m,p,h,f)}let d=(0,l.ax)("Load More News");async function s(){let e=_.get(a.GC,"length"),t=e+10;if(500==e)alert("There aren't new News you can read, you have exceeded the maximum number of News, please reload the page");else{d.className="button is-warning is-loading mt-2 mb-6",await(0,a.jS)(t,i[1],i[2]);for(let n=e;n<t;n++){let e=_.get(a.GC[n],"url"),t=_.get(a.GC[n],"title"),o=_.get(a.GC[n],"time"),i=_.get(a.GC[n],"text");(0,l.zO)(n,r,e,t,o,i)}(0,l.ch)(d,"button buttonMinus is-info is-light mt-2 mb-6")}}(0,l.ch)(d,"button buttonMinus is-info is-light mt-2 mb-6"),document.body.append(d),d.addEventListener("click",(()=>s()),!1),t()}catch(w){t(w)}}),1)},772:(e,t,n)=>{let a,l;function o(){let e=u("title is-3 has-text-white mt-5 mr-5 ml-5","HACKER NEWS LETTER");document.body.append(e);let t=i("mr-5 ml-5"),n=d("Latest news from Hacker News. Below you can see a series of news with the title, link and the time it was published. For more information, see the ");h(t,n);let a=document.createElement("a");a.className="content has-text-info",a.target="_blank",a.href="https://github.com/giovi1998/Hacker-News.git",a.textContent=" GitHub repository.",n.appendChild(a)}function i(e){let t=document.createElement("div");return t.className=e,document.body.append(t),t}function r(e){let t=u("title is-4 has-text-white mb-1 mt-2","Loading News"),n=i(e);return h(n,t),n}function c(e,t,n,o,r,c){let m=i(`card card-${e+1} is-full mt-2 ml-6 mr-6`);t.appendChild(m);let p=i("card-content is-fullwidth");m.appendChild(p);let f=i("media is-align-items-center");p.appendChild(f);let w=i(`media-left mediaLeft-${e+1}`);f.appendChild(w);let b=i("media-content");f.appendChild(b),h(b,u("title is-4 ml-2 mr-2",o));let g=i("card-content");if(p.appendChild(g),null!=c){let t=function(e){return e.replaceAll(". ",". <br />").replaceAll("*","").replaceAll("?","? <br />").replaceAll("!","! <br />").replaceAll("<p>","<br /> ")}(c);if(c.length>=150){let n=t.slice(0,147);n+="...";let r=s(n),c=function(e){let t=document.createElement("p");return t.className="text-align-center is-hidden-touch",t.innerHTML=e,t.style.color="#111111",t}(t);h(g,r),h(g,c),function(e,t,n,a){let l=s(e);l.style.maxWidth="90%",l.className="mr-5 ml-5";let o=i("modal is-hidden-desktop is-rounded ml-5 mr-5");o.setAttribute("id",`Modal-${a}`);let r=i("modal-background");o.appendChild(r);let c=i("modal-card");o.appendChild(c);let d=document.createElement("header");d.className="modal-card-head",c.appendChild(d);let u=document.createElement("p");u.classList.add("modal-card-title"),u.className="title is-4 ml-2 mr-2",u.innerText=t,d.appendChild(u);let m=document.createElement("button");m.classList.add("delete"),m.setAttribute("id",`close-modal-${a}`),d.appendChild(m);let p=function(e){let t=document.createElement("section");return t.className="modal-card-body is-flex",t}();p.style.overflowY="auto",p.style.maxHeight="80%",p.style.overflowX="hidden",p.appendChild(l),c.appendChild(p);let h=function(e){let t=document.createElement("footer");return t.className="modal-card-foot",t}();c.appendChild(h),n.appendChild(o)}(t,o,g,e),function(e,t){let n=document.createElement("button");n.className="button my-buttonShow is-primary is-hidden-desktop",n.setAttribute("id","show-modal"),n.innerText="Show the news text",e.appendChild(n),n.addEventListener("click",(function(){l=window.pageXOffset,a=window.pageYOffset,document.body.style.position="fixed",document.getElementById(`Modal-${t}`).classList.add("is-active")})),document.getElementById(`close-modal-${t}`).addEventListener("click",(function(){document.body.style.position="",window.scrollTo(l,a),document.getElementById(`Modal-${t}`).classList.remove("is-active")}))}(g,e)}else{let e=d(t);e.style.color="#111111",h(g,e)}}if(null!=n&&function(e,t,n,a){let l=document.createElement("a");l.className="content has-text-info",l.target="_blank",l.href=t,l.textContent="Click here to read the news!",h(a,l)}(0,n,0,g),null!=r){let e=document.createElement("div");e.className="content has-text-grey",e.textContent="Published "+r,g.appendChild(e)}}function d(e){let t=document.createElement("p");return t.className="text-align-center",t.innerHTML=e,t}function s(e){let t=document.createElement("p");return t.className="text-align-center is-hidden-desktop",t.innerHTML=e,t.style.color="#111111",t}function u(e,t){let n=document.createElement("H1"),a=document.createTextNode(t);return n.className=e,n.appendChild(a),n}function m(e){let t=document.createElement("button");return t.innerHTML=e,t}function p(e,t){e.className=""+t}function h(e,t){e.appendChild(t)}n.d(t,{IR:()=>o,ax:()=>m,ch:()=>p,rj:()=>r,wC:()=>i,zO:()=>c})},283:(e,t,n)=>{let a;n.d(t,{GC:()=>o,I1:()=>d,jS:()=>c});let l,o=new Array,i=0;async function r(e,t,n){const a=t+e+n;await axios.get(a).then((function(e){let t=_.get(e,"data"),n=(a=_.get(t,"time"),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=(o=new Date(1e3*a)).getFullYear(),c=i[o.getMonth()],o.getDate()+" "+c+" "+r+" "+("0"+o.getHours()).slice(-2)+":"+("0"+o.getMinutes()).slice(-2)+":"+("0"+o.getSeconds()).slice(-2));var a,o,i,r,c;l=t,l.time=n})).catch((function(e){console.log(e)}))}async function c(e,t,n){if(0==i)for(let i=0;i<e;i++)await r(a[i],t,n),o.push(l);else for(let c=i;c<e;c++)await r(a[c],t,n),o.push(l);i=e}async function d(e){return await async function(e){await axios.get(e).then((function(e){let t=new Array;for(let n=0;n<500;n++){let a=_.get(e,"data");t.push(a[n])}a=t})).catch((function(e){console.log(e)}))}(e),a}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return l[e](n,n.exports,i),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(l,o,i)=>{var r;i&&((r=[]).d=1);var c,d,s,u=new Set,m=l.exports,p=new Promise(((e,t)=>{s=t,d=e}));p[t]=m,p[e]=e=>(r&&e(r),u.forEach(e),p.catch((e=>{}))),l.exports=p,o((l=>{var o;c=(l=>l.map((l=>{if(null!==l&&"object"==typeof l){if(l[e])return l;if(l.then){var o=[];o.d=0,l.then((e=>{i[t]=e,a(o)}),(e=>{i[n]=e,a(o)}));var i={};return i[e]=e=>e(o),i}}var r={};return r[e]=e=>{},r[t]=l,r})))(l);var i=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),d=new Promise((t=>{(o=()=>t(i)).r=0;var n=e=>e!==r&&!u.has(e)&&(u.add(e),e&&!e.d&&(o.r++,e.push(o)));c.map((t=>t[e](n)))}));return o.r?d:i()}),(e=>(e?s(p[n]=e):d(m),a(r)))),r&&(r.d=0)},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(474)})();