(()=>{"use strict";var e,t,n,a,o={474:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var a=n(283),o=n(772);async function l(){const e=await fetch("/.netlify/functions/lambda"),t=await e.json();return console.log(t),[t.value1,t.value2,t.value3]}const r=await l();await(0,a.I1)(r[0],r[1],r[2]);let i="HACKER NEWS LETTER",c="title is-3 has-text-white mt-5 mr-5 ml-5",s=(0,o.Bj)(c,i);document.body.append(s);let d=(0,o.wC)("mr-5 ml-5"),u="Latest news from Hacker News. Below you can see a series of news with the title, link and the time it was published. For more information, see the ",m=(0,o.at)(u);(0,o.od)(d,m);let p=document.createElement("a");p.className="content has-text-info",p.target="_blank",p.href="https://github.com/giovi1998/HackerNews.git",p.textContent=" GitHub repository.",m.appendChild(p);let h=(0,o.wC)("container"),f=(0,o.rj)("lds-dual-ring is-flex-direction-column mt-1");await(0,a.jS)(10);for(let g=0;g<10;g++){f.className="is-hidden";let y=_.get(a.GC[g],"url"),C=_.get(a.GC[g],"title"),v=_.get(a.GC[g],"time"),x=_.get(a.GC[g],"text");(0,o.zO)(g,h,y,C,v,x)}let w=(0,o.ax)("Load More News");async function b(){let e=a.GC.length,t=a.GC.length+10;if(500==e)alert("There aren't new News you can read, you have exceeded the maximum number of News, please reload the page");else{w.className="button is-warning is-loading mt-2 mb-6",await(0,a.jS)(t);for(let n=e;n<t;n++){let e=_.get(a.GC[n],"url"),t=_.get(a.GC[n],"title"),l=_.get(a.GC[n],"time"),r=_.get(a.GC[n],"text");(0,o.zO)(n,h,e,t,l,r)}(0,o.ch)(w,"button buttonMinus is-info is-light mt-2 mb-6")}}(0,o.ch)(w,"button buttonMinus is-info is-light mt-2 mb-6"),document.body.append(w),w.addEventListener("click",(()=>b()),!1),t()}catch(N){t(N)}}),1)},772:(e,t,n)=>{function a(e){let t=document.createElement("div");return t.className=e,document.body.append(t),t}function o(e){let t=i("title is-4 has-text-white mb-1 mt-2","Loading News"),n=a(e);return d(n,t),n}function l(e,t,n,a,o,l){let i=document.createElement("div");i.className=`card card-${e+1} is-full mt-2 ml-6 mr-6`,t.appendChild(i);let c=document.createElement("div");c.className="card-content is-fullwidth",i.appendChild(c);let s=document.createElement("div");s.className="media is-align-items-center",c.appendChild(s);let u=document.createElement("div");u.className=`media-left mediaLeft-${e+1}`,s.appendChild(u);let m=document.createElement("div");m.className="media-content",s.appendChild(m);let p=document.createElement("H1"),h=document.createTextNode(a);p.className="title is-4 ml-2 mr-2",p.appendChild(h),d(m,p);let f=document.createElement("div");if(f.className="card-content",c.appendChild(f),null!=n){let e=document.createElement("a");e.className="content has-text-info",e.target="_blank",e.href=n,e.textContent="Click here to read the news!",f.appendChild(e)}if(null!=l){let e=r(l+"\n");e.style.color="#111111",f.appendChild(e)}let w=document.createElement("div");w.className="content has-text-grey",w.textContent="Published "+o,f.appendChild(w)}function r(e){let t=document.createElement("p");return t.className="text-align-center",t.textContent=e,t}function i(e,t){let n=document.createElement("H1"),a=document.createTextNode(t);return n.className=e,n.appendChild(a),n}function c(e){let t=document.createElement("button");return t.innerHTML=e,t}function s(e,t){e.className=""+t}function d(e,t){e.appendChild(t)}n.d(t,{Bj:()=>i,at:()=>r,ax:()=>c,ch:()=>s,od:()=>d,rj:()=>o,wC:()=>a,zO:()=>l})},283:(e,t,n)=>{let a;n.d(t,{GC:()=>l,I1:()=>s,jS:()=>c});let o,l=new Array,r=0;async function i(e,t,n){const a=t+e+n;await axios.get(a).then((function(e){let t=(n=e.data.time,l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=(a=new Date(1e3*n)).getFullYear(),i=l[a.getMonth()],a.getDate()+" "+i+" "+r+" "+("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)+":"+("0"+a.getSeconds()).slice(-2));var n,a,l,r,i;o=e.data,o.time=t})).catch((function(e){console.log(e)}))}async function c(e,t,n){if(0==r)for(let r=0;r<e;r++)await i(a[r],t,n),l.push(o);else for(let c=r;c<e;c++)await i(a[c],t,n),l.push(o);r=e}async function s(e){return await async function(e){await axios.get(e).then((function(e){let t=new Array;for(let n=0;n<500;n++)t.push(e.data[n]);a=t})).catch((function(e){console.log(e)}))}(e),a}}},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return o[e](n,n.exports,r),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r.a=(o,l,r)=>{var i;r&&((i=[]).d=1);var c,s,d,u=new Set,m=o.exports,p=new Promise(((e,t)=>{d=t,s=e}));p[t]=m,p[e]=e=>(i&&e(i),u.forEach(e),p.catch((e=>{}))),o.exports=p,l((o=>{var l;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var l=[];l.d=0,o.then((e=>{r[t]=e,a(l)}),(e=>{r[n]=e,a(l)}));var r={};return r[e]=e=>e(l),r}}var i={};return i[e]=e=>{},i[t]=o,i})))(o);var r=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),s=new Promise((t=>{(l=()=>t(r)).r=0;var n=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(l.r++,e.push(l)));c.map((t=>t[e](n)))}));return l.r?s:r()}),(e=>(e?d(p[n]=e):s(m),a(i)))),i&&(i.d=0)},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(474)})();