(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b1a6e68"],{"029b":function(t,e,n){"use strict";var a=n("d232"),r=n.n(a);r.a},2423:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return l}));var a=n("b775"),r=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},i=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},c=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},s=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},o=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},l=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}},2489:function(t,e,n){"use strict";var a=n("dd5a"),r=n.n(a);r.a},2775:function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},6349:function(t,e,n){"use strict";var a=n("659f"),r=n.n(a);r.a},"659f":function(t,e,n){},"7abe":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("van-nav-bar",{staticClass:"app-nav-bar"},[n("van-button",{staticClass:"search-btn",attrs:{slot:"title",icon:"search",type:"primary",round:"",size:"small",to:"/search"},slot:"title"},[t._v("搜索")])],1),n("van-tabs",{staticClass:"channel-tabs",model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.channels,(function(t){return n("van-tab",{key:t.id,staticClass:"tab-item",attrs:{title:t.name}},[n("article-list",{attrs:{channel:t}})],1)})),n("div",{staticClass:"wap-nav-placeholder",attrs:{slot:"nav-right"},slot:"nav-right"}),n("div",{staticClass:"wap-nav-wrap",attrs:{slot:"nav-right"},on:{click:function(e){t.isChannelEditShow=!0}},slot:"nav-right"},[n("van-icon",{attrs:{name:"wap-nav"}})],1)],2),n("van-popup",{staticClass:"channel-edit-popup",staticStyle:{height:"100%"},attrs:{position:"bottom",closeable:"","close-icon-position":"top-left","get-container":"body"},model:{value:t.isChannelEditShow,callback:function(e){t.isChannelEditShow=e},expression:"isChannelEditShow"}},[n("channel-edit",{attrs:{"user-channels":t.channels,active:t.active},on:{close:function(e){t.isChannelEditShow=!1},"update-active":t.onUpdateActive}})],1)],1)},r=[],i=(n("96cf"),n("1da1")),c=n("5530"),s=n("c24f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-list"},[n("van-pull-refresh",{attrs:{"success-text":t.refreshSuccessText,"success-duration":1e3},on:{refresh:t.onRefresh},model:{value:t.isRefreshLoading,callback:function(e){t.isRefreshLoading=e},expression:"isRefreshLoading"}},[n("van-list",{ref:"article-list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articles,(function(t,e){return n("article-item",{key:e,attrs:{article:t}})})),1)],1)],1)},l=[],u=n("2909"),d=n("2423"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell",{staticClass:"article-item",attrs:{to:{name:"article",params:{articleId:t.article.art_id}}}},[n("div",{staticClass:"title van-multi-ellipsis--l3",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.title))]),n("div",{attrs:{slot:"label"},slot:"label"},[3===t.article.cover.type?n("div",{staticClass:"cover-wrap"},t._l(t.article.cover.images,(function(t,e){return n("div",{key:e,staticClass:"cover-wrap-item"},[n("van-image",{staticClass:"cover-item",attrs:{fit:"cover",src:t}})],1)})),0):t._e(),n("div",{staticClass:"label-wrap"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]),1===t.article.cover.type?n("van-image",{staticClass:"right-cover",attrs:{height:"73",width:"116",fit:"cover",src:t.article.cover.images[0]}}):t._e()],1)},h=[],p={name:"ArticleItem",props:{article:{type:Object,required:!0}}},v=p,m=(n("88ad"),n("2877")),b=Object(m["a"])(v,f,h,!1,null,"4ac417d3",null),g=b.exports,_=n("2ef0"),C={name:"ArticleList",props:{channel:{type:Object,required:!0}},components:{ArticleItem:g},data:function(){return{articles:[],loading:!1,finished:!1,timestamp:null,isRefreshLoading:!1,refreshSuccessText:"",scrollTop:0}},mounted:function(){var t=this,e=this.$refs["article-list"];e.onscroll=Object(_["debounce"])((function(){t.scrollTop=e.scrollTop}),50)},activated:function(){this.$refs["article-list"].scrollTop=this.scrollTop},methods:{onLoad:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["f"])({channel_id:t.channel.id,timestamp:t.timestamp||Date.now(),with_top:1});case 2:a=e.sent,r=a.data,i=r.data.results,(n=t.articles).push.apply(n,Object(u["a"])(i)),t.loading=!1,i.length?t.timestamp=r.data.pre_timestamp:t.finished=!0;case 8:case"end":return e.stop()}}),e)})))()},onRefresh:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["f"])({channel_id:t.channel.id,timestamp:Date.now(),with_top:1});case 2:a=e.sent,r=a.data,i=r.data.results,(n=t.articles).unshift.apply(n,Object(u["a"])(i)),t.isRefreshLoading=!1,t.refreshSuccessText="更新了".concat(i.length,"条数据");case 8:case"end":return e.stop()}}),e)})))()}}},O=C,E=(n("2489"),Object(m["a"])(O,o,l,!1,null,"87519862",null)),w=E.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"channel-edit"},[n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"channel-title",attrs:{slot:"title"},slot:"title"},[t._v("我的频道")]),n("van-button",{attrs:{type:"danger",plain:"",round:"",size:"mini"},on:{click:function(e){t.isEdit=!t.isEdit}}},[t._v(t._s(t.isEdit?"完成":"编辑"))])],1),n("van-grid",{attrs:{gutter:10}},t._l(t.userChannels,(function(e,a){return n("van-grid-item",{key:a,staticClass:"grid-item",class:{active:a===t.active},attrs:{icon:t.isEdit&&0!==a?"clear":"",text:e.name},on:{click:function(n){return t.onUserChannelClick(e,a)}}})})),1),n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"channel-title",attrs:{slot:"title"},slot:"title"},[t._v("频道推荐")])]),n("van-grid",{attrs:{gutter:10}},t._l(t.recommendChannels,(function(e,a){return n("van-grid-item",{key:a,staticClass:"grid-item",attrs:{text:e.name},on:{click:function(n){return t.onAdd(e)}}})})),1)],1)},x=[],k=(n("4de4"),n("7db0"),n("a434"),n("a9e3"),n("b775")),T=function(){return Object(k["a"])({method:"GET",url:"/app/v1_0/channels"})},A=function(t){return Object(k["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:t})},y=function(t){return Object(k["a"])({method:"DELETE",url:"/app/v1_0/user/channels/".concat(t)})},I=n("2f62"),R=n("5d2d"),N={name:"ChannelEdit",components:{},props:{userChannels:{type:Array,required:!0},active:{type:Number,required:!0}},data:function(){return{allChannels:[],isEdit:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(I["b"])(["user"])),{},{recommendChannels:function(){var t=this;return this.allChannels.filter((function(e){return!t.userChannels.find((function(t){return t.id===e.id}))}))}}),watch:{},created:function(){this.loadAllChannels()},mounted:function(){},methods:{loadAllChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,a=n.data,t.allChannels=a.data.channels;case 5:case"end":return e.stop()}}),e)})))()},onAdd:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.userChannels.push(t),!e.user){n.next=6;break}return n.next=4,A({channels:[{id:t.id,seq:e.userChannels.length}]});case 4:n.next=7;break;case 6:Object(R["b"])("user-channels",e.userChannels);case 7:case"end":return n.stop()}}),n)})))()},onUserChannelClick:function(t,e){this.isEdit&&0!==e?this.deleteChannel(t,e):this.switchChannel(e)},deleteChannel:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e<=n.active&&n.$emit("update-active",n.active-1),n.userChannels.splice(e,1),!n.user){a.next=7;break}return a.next=5,y(t.id);case 5:a.next=8;break;case 7:Object(R["b"])("user-channels",n.userChannels);case 8:case"end":return a.stop()}}),a)})))()},switchChannel:function(t){this.$emit("update-active",t),this.$emit("close")}}},S=N,L=(n("6349"),Object(m["a"])(S,j,x,!1,null,"e8294474",null)),G=L.exports,$={name:"HomeIndex",data:function(){return{active:0,isChannelEditShow:!1,channels:[]}},computed:Object(c["a"])({},Object(I["b"])(["user"])),components:{ArticleList:w,ChannelEdit:G},methods:{loadChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=[],!t.user){e.next=9;break}return e.next=4,Object(s["d"])();case 4:a=e.sent,r=a.data,n=r.data.channels,e.next=19;break;case 9:if(i=Object(R["a"])("user-channels"),!i){e.next=14;break}n=i,e.next=19;break;case 14:return e.next=16,Object(s["d"])();case 16:c=e.sent,o=c.data,n=o.data.channels;case 19:t.channels=n;case 20:case"end":return e.stop()}}),e)})))()},onUpdateActive:function(t){this.active=t}},created:function(){this.loadChannels()}},P=$,D=(n("029b"),Object(m["a"])(P,a,r,!1,null,"4067bf14",null));e["default"]=D.exports},"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,i=n("44d2"),c=n("ae40"),s="find",o=!0,l=c(s);s in[]&&Array(1)[s]((function(){o=!1})),a({target:"Array",proto:!0,forced:o||!l},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},"88ad":function(t,e,n){"use strict";var a=n("2775"),r=n.n(a);r.a},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),c=n("6eeb"),s=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),f=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,b="Number",g=r[b],_=g.prototype,C=o(f(_))==b,O=function(t){var e,n,a,r,i,c,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=l.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>r)return NaN;return parseInt(i,a)}return+l};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(C?d((function(){_.valueOf.call(n)})):o(n)!=b)?l(new g(O(e)),n,w):O(e)},j=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;j.length>x;x++)s(g,E=j[x])&&!s(w,E)&&v(w,E,p(g,E));w.prototype=_,_.constructor=w,c(r,b,w)}},c24f:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return f}));var a=n("b775"),r=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})},i=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})},c=function(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user"})},s=function(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/channels"})},o=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})},l=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})},u=function(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/profile"})},d=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},f=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}},d232:function(t,e,n){},dd5a:function(t,e,n){}}]);