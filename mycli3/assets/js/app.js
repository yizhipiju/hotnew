(function(e){function n(n){for(var r,a,o=n[0],i=n[1],s=n[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==c[o]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"assets/js/"+({}[e]||e)+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-136ec63a":1,"chunk-031ef785":1,"chunk-1b65fec4":1,"chunk-52869c0c":1,"chunk-60c7a7e1":1,"chunk-8b1a6e68":1,"chunk-cd7f6b3c":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="assets/css/"+({}[e]||e)+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],h.parentNode.removeChild(h),t(u)},h.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var h=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";t("caad"),t("c975"),t("a434"),t("2532");var r=t("2b0e"),a=t("2f62"),c=t("5d2d");r["a"].use(a["a"]);n["a"]=new a["a"].Store({state:{user:Object(c["a"])("USER_KEY"),cachePages:["LayoutIndex"]},mutations:{setUser:function(e,n){e.user=n,Object(c["b"])("USER_KEY",e.user)},addCachePage:function(e,n){e.cachePages.includes(n)||e.cachePages.push(n)},removeCachePage:function(e,n){var t=e.cachePages.indexOf(n);-1!==t&&e.cachePages.splice(t,1)}},actions:{},modules:{}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:e.cachePages}},[t("router-view")],1)],1)},c=[],u=t("5530"),o=t("2f62"),i={name:"App",computed:Object(u["a"])({},Object(o["b"])(["cachePages"]))},s=i,l=t("2877"),f=Object(l["a"])(s,a,c,!1,null,null,null),h=f.exports,d=t("a18c"),p=t("4360"),m=t("b970"),b=(t("157a"),t("5cfb"),t("a4b1"),t("4de4"),t("5a0c")),g=t.n(b),v=(t("a471"),t("4208")),k=t.n(v);g.a.extend(k.a),g.a.locale("zh-cn"),r["a"].filter("relativeTime",(function(e){return g()(e).from(g()())})),r["a"].filter("datetime",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return g()(e).format(n)})),g()().format(),r["a"].use(m["a"]),r["a"].config.productionTip=!1,new r["a"]({router:d["a"],store:p["a"],render:function(e){return e(h)}}).$mount("#app")},"5d2d":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c}));var r=t("53ca"),a=function(e){var n=window.localStorage.getItem(e);try{return JSON.parse(n)}catch(t){return n}},c=function(e,n){"object"===Object(r["a"])(n)&&(n=JSON.stringify(n)),window.localStorage.setItem(e,n)}},a18c:function(e,n,t){"use strict";t("d3b7"),t("ac1f"),t("5319");var r=t("2b0e"),a=t("8c4f"),c=t("2241"),u=t("4360");r["a"].use(a["a"]);var o=[{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-52869c0c")]).then(t.bind(null,"9ed6"))},meta:{requiresAuth:!1}},{path:"/",component:function(){return t.e("chunk-2d0ab84e").then(t.bind(null,"162e"))},children:[{path:"",name:"home",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-59dcdedc"),t.e("chunk-8b1a6e68")]).then(t.bind(null,"7abe"))},meta:{requiresAuth:!1}},{path:"/qa",name:"qa",component:function(){return t.e("chunk-2d217eac").then(t.bind(null,"c988"))},meta:{requiresAuth:!1}},{path:"/video",name:"video",component:function(){return t.e("chunk-2d0a2e01").then(t.bind(null,"007b"))},meta:{requiresAuth:!1}},{path:"/my",name:"my",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-1b65fec4")]).then(t.bind(null,"9639"))},meta:{requiresAuth:!1}}]},{path:"/search",name:"search",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-59dcdedc"),t.e("chunk-60c7a7e1")]).then(t.bind(null,"efe3"))},meta:{requiresAuth:!1}},{path:"/article/:articleId",name:"article",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-031ef785")]).then(t.bind(null,"230c"))},props:!0,meta:{requiresAuth:!1}},{path:"/user/profile",name:"user-profile",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-cd7f6b3c")]).then(t.bind(null,"524b"))},meta:{requiresAuth:!1}},{path:"/user/chat",name:"user-chat",component:function(){return t.e("chunk-136ec63a").then(t.bind(null,"9d81"))},meta:{requiresAuth:!0}}],i=new a["a"]({routes:o});i.beforeEach((function(e,n,t){if(e.meta.requiresAuth){if(u["a"].state.user)return t();c["a"].confirm({title:"访问提示",message:"该功能需要登入才能才能访问，确认登录吗"}).then((function(){i.replace({name:"login",query:{redirect:i.currentRoute.fullPath}})})).catch((function(){t(!1)}))}else t()})),n["a"]=i},a4b1:function(e,n,t){}});