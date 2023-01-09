(()=>{"use strict";var e,t,n,a,o={474:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var a=n(283),o=n(772);async function r(){const e=await fetch("./netlify/functions/lambda.js"),t=await e.json();console.log(t)}r(),await(0,a.I1)();let i="HACKER NEWS LETTER",c="title is-3 has-text-white mt-5 mr-5 ml-5",l=(0,o.Bj)(c,i);document.body.append(l);let s=(0,o.wC)("mr-5 ml-5"),d="Latest news from Hacker News. Below you can see a series of news with the title, link and the time it was published. For more information, see the ",m=(0,o.at)(d);(0,o.od)(s,m);let u=document.createElement("a");u.className="content has-text-info",u.target="_blank",u.href="https://github.com/giovi1998/HackerNews.git",u.textContent=" GitHub repository.",m.appendChild(u);let p=(0,o.wC)("container"),h=(0,o.rj)("lds-dual-ring is-flex-direction-column mt-1");await(0,a.jS)(10);for(let b=0;b<10;b++){h.className="is-hidden";let g=_.get(a.GC[b],"url"),y=_.get(a.GC[b],"title"),C=_.get(a.GC[b],"time"),v=_.get(a.GC[b],"text");(0,o.zO)(b,p,g,y,C,v)}let f=(0,o.ax)("Load More News");async function w(){let e=a.GC.length,t=a.GC.length+10;if(500==e)alert("There aren't new News you can read, you have exceeded the maximum number of News, please reload the page");else{f.className="button is-warning is-loading mt-2 mb-6",await(0,a.jS)(t);for(let n=e;n<t;n++){let e=_.get(a.GC[n],"url"),t=_.get(a.GC[n],"title"),r=_.get(a.GC[n],"time"),i=_.get(a.GC[n],"text");(0,o.zO)(n,p,e,t,r,i)}(0,o.ch)(f,"button buttonMinus is-info is-light mt-2 mb-6")}}(0,o.ch)(f,"button buttonMinus is-info is-light mt-2 mb-6"),document.body.append(f),f.addEventListener("click",(()=>w()),!1),t()}catch(x){t(x)}}),1)},772:(e,t,n)=>{function a(e){let t=document.createElement("div");return t.className=e,document.body.append(t),t}function o(e){let t=c("title is-4 has-text-white mb-1 mt-2","Loading News"),n=a(e);return d(n,t),n}function r(e,t,n,a,o,r){let c=document.createElement("div");c.className=`card card-${e+1} is-full mt-2 ml-6 mr-6`,t.appendChild(c);let l=document.createElement("div");l.className="card-content is-fullwidth",c.appendChild(l);let s=document.createElement("div");s.className="media is-align-items-center",l.appendChild(s);let m=document.createElement("div");m.className=`media-left mediaLeft-${e+1}`,s.appendChild(m);let u=document.createElement("div");u.className="media-content",s.appendChild(u);let p=document.createElement("H1"),h=document.createTextNode(a);p.className="title is-4 ml-2 mr-2",p.appendChild(h),d(u,p);let f=document.createElement("div");if(f.className="card-content",l.appendChild(f),null!=n){let e=document.createElement("a");e.className="content has-text-info",e.target="_blank",e.href=n,e.textContent="Click here to read the news!",f.appendChild(e)}if(null!=r){let e=i(r+"\n");e.style.color="#111111",f.appendChild(e)}let w=document.createElement("div");w.className="content has-text-grey",w.textContent="Published "+o,f.appendChild(w)}function i(e){let t=document.createElement("p");return t.className="text-align-center",t.textContent=e,t}function c(e,t){let n=document.createElement("H1"),a=document.createTextNode(t);return n.className=e,n.appendChild(a),n}function l(e){let t=document.createElement("button");return t.innerHTML=e,t}function s(e,t){e.className=""+t}function d(e,t){e.appendChild(t)}n.d(t,{Bj:()=>c,at:()=>i,ax:()=>l,ch:()=>s,od:()=>d,rj:()=>o,wC:()=>a,zO:()=>r})},283:(e,t,n)=>{n.d(t,{GC:()=>r,I1:()=>s,jS:()=>l});let a,o,r=new Array,i=0;async function c(e){const t="https://hacker-news.firebaseio.com/v0/item/"+e+".json?print=pretty";await axios.get(t).then((function(e){let t=(n=e.data.time,r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=(a=new Date(1e3*n)).getFullYear(),c=r[a.getMonth()],a.getDate()+" "+c+" "+i+" "+("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)+":"+("0"+a.getSeconds()).slice(-2));var n,a,r,i,c;o=e.data,o.time=t})).catch((function(e){console.log(e)}))}async function l(e){if(0==i)for(let t=0;t<e;t++)await c(a[t]),r.push(o);else for(let t=i;t<e;t++)await c(a[t]),r.push(o);i=e}async function s(){return await async function(){await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json").then((function(e){let t=new Array;for(let n=0;n<500;n++)t.push(e.data[n]);a=t})).catch((function(e){console.log(e)}))}(),a}}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,i),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,r,i)=>{var c;i&&((c=[]).d=1);var l,s,d,m=new Set,u=o.exports,p=new Promise(((e,t)=>{d=t,s=e}));p[t]=u,p[e]=e=>(c&&e(c),m.forEach(e),p.catch((e=>{}))),o.exports=p,r((o=>{var r;l=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var r=[];r.d=0,o.then((e=>{i[t]=e,a(r)}),(e=>{i[n]=e,a(r)}));var i={};return i[e]=e=>e(r),i}}var c={};return c[e]=e=>{},c[t]=o,c})))(o);var i=()=>l.map((e=>{if(e[n])throw e[n];return e[t]})),s=new Promise((t=>{(r=()=>t(i)).r=0;var n=e=>e!==c&&!m.has(e)&&(m.add(e),e&&!e.d&&(r.r++,e.push(r)));l.map((t=>t[e](n)))}));return r.r?s:i()}),(e=>(e?d(p[n]=e):s(u),a(c)))),c&&(c.d=0)},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(474)})();