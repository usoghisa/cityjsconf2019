(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(t,e,n){t.exports=n(271)},171:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=171},183:function(t,e,n){"use strict";var r=n(56);n.n(r).a},184:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,"\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}",""])},185:function(t,e,n){"use strict";var r=n(57);n.n(r).a},186:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#3b8070;z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{transition:none\n}\n.nuxt-progress-failed{background-color:red\n}",""])},19:function(t,e,n){"use strict";n.r(e);var r=n(135),o=n.n(r),a=n(136),i=n.n(a);n(199);n(198).polyfill();var s=function(){function t(){o()(this,t)}return i()(t,null,[{key:"getAllEntries",value:function(t){var e=new Request("https://api.spiralthread.com/api/collections/get/".concat(t,"?token=").concat("01249ef1ee47483ae52c42af5e62de"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"}});return fetch(e).then(function(t){return t.json()}).catch(function(t){return t})}}]),t}();e.default=s},191:function(t,e,n){"use strict";var r=n(58);n.n(r).a},192:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,"\nh2[data-v-295261fa]{font-size:35px;line-height:52px;text-transform:uppercase\n}\nh2[data-v-295261fa],h3[data-v-295261fa]{font-weight:500\n}\nh3[data-v-295261fa]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw\n}",""])},197:function(t,e,n){var r={"./fetchit.js":19,"./index.js":201};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=197},201:function(t,e,n){"use strict";n.r(e);n(41),n(26),n(46);var r=n(2),o=n.n(r),a=n(43),i=n(141),s=n(63),u=n(19);e.default=function(){return new a.a.Store({state:{menuIsActive:!1,page:{},pages:[],faqs:[],speakers:[],sponsors:[],schedule:[]},plugins:[Object(i.a)({key:"cityjsconf",paths:["cityjsconf"],storage:{getItem:function(t){return s.getJSON(t)},setItem:function(t,e){return s.set(t,e,{expires:3,secure:!0})},removeItem:function(t){return s.remove(t)}}})],mutations:{toggleMenuState:function(t){t.menuIsActive=!t.menuIsActive},setPages:function(t,e){void 0!==e&&(t.pages=e.sort(function(t,e){return t.orderOnTopMenu-e.orderOnTopMenu}))},setSpeakers:function(t,e){t.speakers=e},setFaqs:function(t,e){t.faqs=e},setSponsors:function(t,e){t.sponsors=e},setCurrentPage:function(t,e){t.page=e},setSchedule:function(t,e){t.schedule=e}},actions:{getPages:(p=o()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.default.getAllEntries("pages").then(function(t){n("setPages",t.entries)});case 3:case"end":return t.stop()}},t,this)})),function(t){return p.apply(this,arguments)}),getFaqs:(c=o()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.default.getAllEntries("faqs").then(function(t){n("setFaqs",t.entries)});case 3:case"end":return t.stop()}},t,this)})),function(t){return c.apply(this,arguments)}),getSpeakers:(r=o()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.default.getAllEntries("speakers").then(function(t){n("setSpeakers",t.entries)});case 3:case"end":return t.stop()}},t,this)})),function(t){return r.apply(this,arguments)}),getSponsors:(n=o()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.default.getAllEntries("partners").then(function(t){n("setSponsors",t.entries)});case 3:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)}),getSchedule:(e=o()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.default.getAllEntries("schedule").then(function(t){n("setSchedule",t.entries)});case 3:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)}),nuxtServerInit:(t=o()(regeneratorRuntime.mark(function t(e,n){var r,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.commit,n.store,n.isClient,o=n.isServer,a=n.route,n.params,!o||"index"!==a.name){t.next=5;break}return t.next=5,u.default.getAllEntries("pages").then(function(t){r("setPages",t.entries)});case 5:case"end":return t.stop()}},t,this)})),function(e,n){return t.apply(this,arguments)})}});var t;var e;var n;var r;var c;var p}},271:function(t,e,n){"use strict";n.r(e);n(95),n(70),n(71);var r=n(34),o=n.n(r),a=(n(41),n(46),n(156),n(2)),i=n.n(a),s=(n(108),n(109),n(112),n(26),n(79),n(113),n(160),n(168),n(0)),u=(n(81),n(171)),c=u.keys();function p(t){var e=u(t);return e.default||e}var l={},f=!0,h=!1,d=void 0;try{for(var m,v=c[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var g=m.value;l[g.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=p(g)}}catch(t){h=!0,d=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}var x=l,y=(n(118),n(172),n(173),n(175),n(177),n(178),n(180),n(35)),w=n.n(y),b=function(){return{}};function _(t,e){var n=t.options.data||b;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),w()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function C(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function $(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function S(t){return Promise.all($(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=C(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function E(t){return R.apply(this,arguments)}function R(){return(R=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:return t.abrupt("return",w()({},e,{meta:k(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function j(t,e){return T.apply(this,arguments)}function T(){return(T=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/",env:{baseUrl:"http://localhost:3000",TITO_KEY:"s3n4QVA6GVnGS0ooCVzi-Q",API_KEY:"01249ef1ee47483ae52c42af5e62de"}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=U(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,E(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,E(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function O(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function N(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?M:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p=a[c.name||"pathMatch"],l=void 0;if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=L.exec(t));){var u=n[0],c=n[1],p=n.index;if(i+=t.slice(a,p),a=p+u.length,c)i+=c[1];else{var l=t[a],f=n[2],h=n[3],d=n[4],m=n[5],v=n[6],g=n[7];i&&(r.push(i),i="");var x=null!=f&&null!=l&&l!==f,y="+"===v||"*"===v,w="?"===v||"*"===v,b=n[2]||s,_=d||m;r.push({name:h||o++,prefix:f||"",delimiter:b,optional:w,repeat:y,partial:x,asterisk:!!g,pattern:_?I(_):g?".*":"[^"+D(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function q(t,e){var n={},r=w()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function P(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function D(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function I(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var J=n(133),B=n.n(J),z=n(89),F=function(){return Promise.all([n.e(5),n.e(2)]).then(n.bind(null,357)).then(function(t){return t.default||t})};s.a.use(z.a),window.history.scrollRestoration="manual";var K=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var Q=n(134),V=n.n(Q).a,X={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,p={};H.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var l={};G.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(a))});var f=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(a,t)};var h=[t("router-view",r)];return o.keepAlive&&(h=[t("keep-alive",{props:o.keepAliveProps},h)]),t("transition",{props:p,on:l},h)}},H=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],G=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],W={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},Y={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},Z=(n(183),n(3)),tt=Object(Z.a)(Y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);tt.options.__file="nuxt-error.vue";var et=tt.exports,nt={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||N(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:X,NuxtError:et}},rt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ot=(n(185),Object(Z.a)(rt,void 0,void 0,!1,null,null,null));ot.options.__file="nuxt-loading.vue";var at=ot.exports,it=(n(187),n(189),{head:{meta:[{name:"viewport",content:"initial-scale=1.0, width=device-width"}],link:[{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400"},{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Oswald:400,300,700"},{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Open+Sans:400,300,700,800"}]}}),st=(n(191),Object(Z.a)(it,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("nuxt")],1)},[],!1,null,"295261fa",null));st.options.__file="default.vue";var ut={_default:st.exports},ct={head:{title:"CityJS Conference 2019 - London, UK",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"City of London Conference by the London JS Community"},{property:"og:title",content:"City of London JavaScript Conference"},{property:"og:description",content:"City of London JavaScript Conference by the London JS Community"},{property:"og:image",content:"//api.spiralthread.com/images/audience.png"},{property:"og:url",content:"//www.cityjsconf.org"},{name:"twitter:card",content:"summary_large_image"},{property:"og:site_name",content:"City of London JavaScript Conference"},{name:"twitter:image:alt",content:"City of London JavaScript Conference"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"cityjsconf"},{hid:"author",name:"author",content:"Aris"},{hid:"theme-color",name:"theme-color",content:"#3B8070"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"}],link:[{rel:"icon",type:"image/x-icon",href:"/images/favicon.ico"},{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Roboto:300,400,500,700"},{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400"},{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},{rel:"manifest",href:"/_nuxt/manifest.2891c468.json"}],style:[],script:[],htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ut["_"+t]||(t="default"),this.layoutName=t,this.layout=ut["_"+t],this.layout},loadLayout:function(t){return t&&ut["_"+t]||(t="default"),Promise.resolve(ut["_"+t])}},components:{NuxtLoading:at}},pt=(n(193),n(43));s.a.use(pt.a);var lt=n(197),ft=lt.keys(),ht={},dt=ft.find(function(t){return t.includes("./index.")});if(dt&&(ht=qt(dt)),"function"!=typeof ht){ht.modules||(ht.modules={});var mt=!0,vt=!1,gt=void 0;try{for(var xt,yt=ft[Symbol.iterator]();!(mt=(xt=yt.next()).done);mt=!0){var wt=xt.value,bt=wt.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"");if("index"!==bt){var _t=bt.split(/\//);if(bt=_t[_t.length-1],["state","getters","actions","mutations"].includes(bt)){Lt(Pt(ht,_t,!0),wt,bt)}else{var Ct="index"===bt;Ct&&_t.pop();var kt=Pt(ht,_t),$t=qt(wt);if(kt[bt=_t.pop()]=kt[bt]||{},Ct){var St={};if(kt[bt].appends){St.appends=kt[bt].appends;var Et=!0,Rt=!1,jt=void 0;try{for(var Tt,At=kt[bt].appends[Symbol.iterator]();!(Et=(Tt=At.next()).done);Et=!0){var Ot=Tt.value;St[Ot]=kt[bt][Ot]}}catch(t){Rt=!0,jt=t}finally{try{Et||null==At.return||At.return()}finally{if(Rt)throw jt}}}kt[bt]=Object.assign({},kt[bt],$t,St),kt[bt].namespaced=!0}else kt[bt]=Object.assign({},$t,kt[bt]),kt[bt].namespaced=!0}}}}catch(t){vt=!0,gt=t}finally{try{mt||null==yt.return||yt.return()}finally{if(vt)throw gt}}}var Nt=ht instanceof Function?ht:function(){return new pt.a.Store(Object.assign({strict:!1},ht,{state:ht.state instanceof Function?ht.state():{}}))};function qt(t){var e=lt(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function Pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(1===e.length)return n?t:t.modules;var r=e.shift();return t.modules[r]=t.modules[r]||{},t.modules[r].namespaced=!0,t.modules[r].modules=t.modules[r].modules||{},Pt(t.modules[r],e,n)}function Lt(t,e,n){var r=lt(e);t.appends=t.appends||[],t.appends.push(n),t[n]=r.default||r}var Mt=n(90),Dt=n.n(Mt),It=n(20),Ut=n(137);It.a.autoAddCss=!1,s.a.component("font-awesome-icon",Ut.a);var Jt=n(91),Bt=n.n(Jt);s.a.use(Bt.a),s.a.component("carousel",Bt.a);var zt=n(138);s.a.use(zt,{load:{key:"AIzaSyAFtVB7BpJTXcRdgf7l2KZSaZXSS7_fY08",libraries:"places"}});var Ft=n(139);s.a.use(Ft.a);var Kt=function(t){var e,n,r,o,a,i,s=t.app;e=window,n=document,r="script",o="ga",e.GoogleAnalyticsObject=o,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,a=n.createElement(r),i=n.getElementsByTagName(r)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",i.parentNode.insertBefore(a,i),ga("create","UA-31718081-8","auto"),s.router.afterEach(function(t,e){ga("set","page",t.fullPath),ga("send","pageview")})(function(t,e,n,r,o,a){t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:1218219,hjsv:6},o=e.getElementsByTagName("head")[0],(a=e.createElement("script")).async=1,a.src=n+t._hjSettings.hjid+r+t._hjSettings.hjsv,o.appendChild(a)})(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv=")};s.a.component(V.name,V),s.a.component(X.name,X),s.a.component(W.name,W),s.a.component(nt.name,nt),s.a.use(B.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Qt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Vt(){return(Vt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i,u,c,p;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new z.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:K,routes:[{path:"/:page?",component:F,name:"page"}],fallback:!1});case 2:return n=t.sent,(r=Nt(e)).$router=n,o=r.registerModule,r.registerModule=function(t,e,n){return o.call(r,t,e,Object.assign({preserveState:!0},n))},a=w()({router:n,store:r,nuxt:{defaultTransition:Qt,transitions:[Qt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Qt,{name:t}):Object.assign({},Qt,t):Qt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,t=t?P(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ct),r.app=a,i=e?e.next:function(t){return a.router.push(t)},e?u=n.resolve(e.url).route:(c=O(n.options.base),u=n.resolve(c).route),t.next=13,j(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 13:p=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=18;break;case 18:if("function"!=typeof Dt.a){t.next=22;break}return t.next=22,Dt()(a.context,p);case 22:t.next=25;break;case 25:t.next=28;break;case 28:t.next=31;break;case 31:if("function"!=typeof Kt){t.next=34;break}return t.next=34,Kt(a.context,p);case 34:t.next=37;break;case 37:return t.abrupt("return",{app:a,store:r,router:n});case 38:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var Xt,Ht,Gt=[],Wt=window.__NUXT__||{};function Yt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Zt(t,e,n){return te.apply(this,arguments)}function te(){return(te=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Xt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?q(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,S(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return a._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function ee(t,e){return Wt.serverRendered&&e&&_(t,e),t._Ctor=t,t}function ne(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof x[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),x[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():A(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function re(t,e,n){return oe.apply(this,arguments)}function oe(){return(oe=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,p,l,f,h,d,m,v,g,x,y,w,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Gt=e===n?[]:k(n,o=[]).map(function(t,e){return N(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),a||(a=!0,r(t))},t.next=7,j(Xt,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=Xt.nuxt.dateErr,this._hadError=!!Xt.nuxt.err,(c=k(e,u=[])).length){t.next=25;break}return t.next=14,ne.call(this,c,Xt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof et.layout?et.layout(Xt.context):et.layout);case 18:return p=t.sent,t.next=21,ne.call(this,c,Xt.context,p);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return Xt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Yt(c,e,n)),t.prev=27,t.next=30,ne.call(this,c,Xt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!Xt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(l=c[0].options.layout)&&(l=l(Xt.context)),t.next=38,this.loadLayout(l);case 38:return l=t.sent,t.next=41,ne.call(this,c,Xt.context,l);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!Xt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(h=(g=v.next()).done){t.next=64;break}if("function"==typeof(x=g.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,x.options.validate(Xt.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,h||null==v.return||v.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=N(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==Gt[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=A(t.options.asyncData,Xt.context).then(function(e){_(t,e),b.$loading.increase&&b.$loading.increase(s)});o.push(c)}if(b.$loading.manual=!1===t.options.loading,i){var p=t.options.fetch(Xt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(y=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,y));case 97:return Gt=[],C=y,s.a.config.errorHandler&&s.a.config.errorHandler(C),"function"==typeof(w=et.layout)&&(w=w(Xt.context)),t.next=103,this.loadLayout(w);case 103:this.error(y),this.$nuxt.$emit("routeChanged",e,n,y),r(!1);case 106:case"end":return t.stop()}var C},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function ae(t,e){$(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function ie(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?et.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Xt.context)),this.setLayout(e)}function se(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=k(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),ie.call(n,t)})}function ue(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Ht.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function ce(){return(ce=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Xt=e.app,Ht=e.router,e.store,t.next=5,Promise.all((c=void 0,c=O((u=Ht).options.base,u.options.mode),$(u.match(c),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=ee(C(e),Wt.data?Wt.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 5:return n=t.sent,r=new s.a(Xt),o=Wt.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){ue(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Yt(n,Ht.currentRoute)),Gt=Ht.currentRoute.matched.map(function(t){return N(t.path)(Ht.currentRoute.params)})),r.$loading={},Wt.error&&r.error(Wt.error),Ht.beforeEach(Zt.bind(r)),Ht.beforeEach(re.bind(r)),Ht.afterEach(ae),Ht.afterEach(se.bind(r)),!Wt.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:re.call(r,Ht.currentRoute,Ht.currentRoute,function(t){if(!t)return ae(Ht.currentRoute,Ht.currentRoute),ie.call(r,Ht.currentRoute),void a();Ht.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return Vt.apply(this,arguments)}().then(function(t){return ce.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},56:function(t,e,n){var r=n(184);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(22).default)("3f9a5768",r,!0,{})},57:function(t,e,n){var r=n(186);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(22).default)("116d68b0",r,!0,{})},58:function(t,e,n){var r=n(192);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(22).default)("ba48a748",r,!0,{})},90:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")}},[[149,3,1,4]]]);