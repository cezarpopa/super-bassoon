if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const u=e=>o(e,i),c={module:{uri:i},exports:t,require:u};s[i]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(n(...e),t)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"super-bassoon"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/super-bassoon/css/app.e9ea08d3.css",revision:null},{url:"/super-bassoon/index.html",revision:"5b5230fe900a6ab59bd8d0c646469cc4"},{url:"/super-bassoon/js/app.bdaad800.js",revision:null},{url:"/super-bassoon/js/chunk-vendors.cd687aef.js",revision:null},{url:"/super-bassoon/manifest.json",revision:"e6bba2602fddf9ee8feb2c80254efafb"},{url:"/super-bassoon/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
