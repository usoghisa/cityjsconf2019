(window.webpackJsonp=window.webpackJsonp||[]).push([[10,19],{175:function(e,t,n){"use strict";n.r(t);var o={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},r=(n(381),n(3)),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[e.isH2?n("h2",{class:[e.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e.isH2?e._e():n("h3",{class:[e.white?"white":""],domProps:{innerHTML:e._s(e.title)}}),e._v(" "),n("p",{class:["subtitle",e.white?"white":""],domProps:{innerHTML:e._s(e.subtitle)}}),e._v(" "),e._m(0)])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"has-text-centered"},[t("span",{staticClass:"flag"})])}],!1,null,null,null);t.default=component.exports},188:function(e,t,n){"use strict";n.r(t);var o=n(397),r=n.n(o),h2=(n(398),n(175)),l={props:{items:{type:Array}},components:{"app-h2":h2.default},mounted:function(){this.carousel=r.a.attach()},computed:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},speakers:function(){if(void 0!==this.items){var e=[];return e=this.items.filter(function(e){return 2019===e.year}),e.sort(function(a,b){return a.order-b.order})}return[]}}},c=(n(428),n(3)),component=Object(c.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section shallow"},[n("div",{staticClass:"testimonials has-text-centered"},[n("app-h2",{attrs:{title:"2019 Speakers",subtitle:"We are excited  to announce our selected Speakers <br/> for more information check our <a href='/speakers'>speakers</a> section","is-h2":!0}}),e._v(" "),n("div",{staticClass:"row columns is-mobile is-multiline"},e._l(e.speakers,function(t){return n("div",{key:t._id,staticClass:"column is-one-quarter-desktop is-full-mobile"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image position-relative flip-container"},[n("div",{staticClass:"flipper"},[n("div",{staticClass:"front"},[n("figure",{staticClass:"image is-40x40"},[void 0!==t.image?n("img",{staticClass:"speaker",attrs:{width:"150",alt:t.name,src:"//api.spiralthread.com/"+t.thumbnail.path}}):e._e()]),e._v(" "),n("figcaption",{staticClass:"label label-small bg-blue top-100 m-3 position-absolute right-0 text-uppercase text-white"},[e._v("\n                                "+e._s(t.name)+"\n                            ")])]),e._v(" "),n("div",{staticClass:"back"},[n("figure",{staticClass:"back-logo"},[void 0!==t.image?n("img",{staticClass:"speaker",attrs:{alt:t.name,src:"//api.spiralthread.com/"+t.thumbnail.path}}):e._e()]),e._v(" "),n("div",{staticClass:"back-card content"},[n("div",{staticClass:"media-content back-content"},[n("p",{staticClass:"title is-4"},[e._v(e._s(t.name))]),e._v(" "),n("p",[n("span",{staticClass:"title is-6"},[n("a",{attrs:{href:"//twitter.com/"+t.twitter}},[e._v("@"+e._s(t.twitter))])])]),e._v(" "),n("p",{staticClass:"subtitle is-6"},[e._v(e._s(t.company))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(t.title)}}),e._v(" "),n("a",{attrs:{href:"/speakers"}},[e._v(" Read more ")])])])])])])])])}),0)],1)])},[],!1,null,"728f470e",null);t.default=component.exports},380:function(e,t,n){var content=n(382);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("47349750",content,!0,{sourceMap:!1})},381:function(e,t,n){"use strict";var o=n(380);n.n(o).a},382:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,'h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},397:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var i={};function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(2),r=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),l="carousel:slide:before",u="carousel:slide:after",c=Symbol("onSwipeStart"),h=Symbol("onSwipeMove"),d=Symbol("onSwipeEnd"),f=!1;try{var s=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}catch(e){}var v=function(e){function s(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this));if(n.element="string"==typeof e?document.querySelector(e):e,!n.element)throw new Error("An invalid selector or non-DOM node has been provided.");return n._clickEvents=["click"],n.options=Object.assign({},o.a,t),n.element.dataset.autoplay&&(n.options.autoplay=n.element.dataset.autoplay),n.element.dataset.delay&&(n.options.delay=n.element.dataset.delay),n.element.dataset.size&&!n.element.classList.contains("carousel-animate-fade")&&(n.options.size=n.element.dataset.size),n.element.classList.contains("carousel-animate-fade")&&(n.options.size=1),n.forceHiddenNavigation=!1,n[c]=n[c].bind(n),n[h]=n[h].bind(n),n[d]=n[d].bind(n),n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,i.a),r(s,[{key:"init",value:function(){this.container=this.element.querySelector(".carousel-container"),this.items=this.element.querySelectorAll(".carousel-item"),this.currentItem={element:this.element,node:this.element.querySelector(".carousel-item.is-active"),pos:-1},this.currentItem.pos=this.currentItem.node?Array.from(this.items).indexOf(this.currentItem.node):-1,this.currentItem.node||(this.currentItem.node=this.items[0],this.currentItem.node.classList.add("is-active"),this.currentItem.pos=0),this.forceHiddenNavigation=this.items.length<=1;var e=this.element.querySelectorAll("img");[].forEach.call(e,function(e){e.setAttribute("draggable",!1)}),this._resize(),this._setOrder(),this._initNavigation(),this._bindEvents(),this.options.autoplay&&this._autoPlay(this.options.delay),this.emit("carousel:ready",this.currentItem)}},{key:"_resize",value:function(){var e=this,t=window.getComputedStyle(this.element),n=parseInt(t.getPropertyValue("width"),10);if(1<this.options.size&&(this.options.size>=Array.from(this.items).length?this.offset=0:this.offset=n/this.options.size,this.container.style.left=0-this.offset+"px",this.container.style.transform="translateX("+this.offset+"px)",[].forEach.call(this.items,function(t){t.style.flexBasis=e.offset+"px"})),this.element.classList.contains("carousel-animate-fade")&&this.items.length){var i=this.items[0].querySelector("img"),s=1;i.naturalWidth?(s=n/i.naturalWidth,this.container.style.height=i.naturalHeight*s+"px"):i.onload=function(){s=n/i.naturalWidth,e.container.style.height=i.naturalHeight*s+"px"}}}},{key:"_bindEvents",value:function(){var e=this;this.previousControl&&this._clickEvents.forEach(function(t){e.previousControl.addEventListener(t,function(t){f||t.preventDefault(),e._autoPlayInterval&&(clearInterval(e._autoPlayInterval),e._autoPlay(e.optionsdelay)),e._slide("previous")},!!f&&{passive:!0})}),this.nextControl&&this._clickEvents.forEach(function(t){e.nextControl.addEventListener(t,function(t){f||t.preventDefault(),e._autoPlayInterval&&(clearInterval(e._autoPlayInterval),e._autoPlay(e.options.delay)),e._slide("next")},!!f&&{passive:!0})}),this.element.addEventListener("touchstart",this[c],!!f&&{passive:!0}),this.element.addEventListener("mousedown",this[c],!!f&&{passive:!0}),this.element.addEventListener("touchmove",this[h],!!f&&{passive:!0}),this.element.addEventListener("mousemove",this[h],!!f&&{passive:!0}),this.element.addEventListener("touchend",this[d],!!f&&{passive:!0}),this.element.addEventListener("mouseup",this[d],!!f&&{passive:!0})}},{key:"destroy",value:function(){this.element.removeEventListener("touchstart",this[c],!!f&&{passive:!0}),this.element.removeEventListener("mousedown",this[c],!!f&&{passive:!0}),this.element.removeEventListener("touchmove",this[h],!!f&&{passive:!0}),this.element.removeEventListener("mousemove",this[h],!!f&&{passive:!0}),this.element.removeEventListener("touchend",this[d],!!f&&{passive:!0}),this.element.removeEventListener("mouseup",this[d],!!f&&{passive:!0})}},{key:c,value:function(e){f||e.preventDefault(),e="changedTouches"in(e=e||window.event)?e.changedTouches[0]:e,this._touch={start:{time:(new Date).getTime(),x:e.pageX,y:e.pageY},dist:{x:0,y:0}}}},{key:h,value:function(e){f||e.preventDefault()}},{key:d,value:function(e){f||e.preventDefault(),e="changedTouches"in(e=e||window.event)?e.changedTouches[0]:e,this._touch.dist={x:e.pageX-this._touch.start.x,y:e.pageY-this._touch.start.y},this._handleGesture()}},{key:"_handleGesture",value:function(){(new Date).getTime()-this._touch.start.time<=this.options.allowedTime&&Math.abs(this._touch.dist.x)>=this.options.threshold&&Math.abs(this._touch.dist.y)<=this.options.restraint&&(this._touch.dist.x<0?this._slide("next"):this._slide("previous"))}},{key:"_initNavigation",value:function(){this.previousControl=this.element.querySelector(".carousel-nav-left"),this.nextControl=this.element.querySelector(".carousel-nav-right"),(this.items.length<=1||this.forceHiddenNavigation)&&(this.container&&(this.container.style.left="0"),this.previousControl&&(this.previousControl.style.display="none"),this.nextControl&&(this.nextControl.style.display="none"))}},{key:"_setOrder",value:function(){this.currentItem.node.style.order="1",this.currentItem.node.style.zIndex="1";var e,t=this.currentItem.node,n=void 0,i=void 0;for(n=i=2,e=Array.from(this.items).length;2<=e?i<=e:e<=i;n=2<=e?++i:--i)(t=this._next(t)).style.order=""+n%Array.from(this.items).length,t.style.zIndex="0"}},{key:"_next",value:function(e){return e.nextElementSibling?e.nextElementSibling:this.items[0]}},{key:"_previous",value:function(e){return e.previousElementSibling?e.previousElementSibling:this.items[this.items.length-1]}},{key:"_slide",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"next";this.items.length&&(this.oldItemNode=this.currentItem.node,this.emit(l,this.currentItem),"previous"===t?(this.currentItem.node=this._previous(this.currentItem.node),this.element.classList.contains("carousel-animate-fade")||(this.element.classList.add("is-reversing"),this.container.style.transform="translateX("+-Math.abs(this.offset)+"px)")):(this.currentItem.node=this._next(this.currentItem.node),this.element.classList.remove("is-reversing"),this.container.style.transform="translateX("+Math.abs(this.offset)+"px)"),this.currentItem.node.classList.add("is-active"),this.oldItemNode.classList.remove("is-active"),this.element.classList.remove("carousel-animated"),setTimeout(function(){e.element.classList.add("carousel-animated")},50),this._setOrder(),this.emit(u,this.currentItem))}},{key:"_autoPlay",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5e3;this._autoPlayInterval=setInterval(function(){e._slide("next")},t)}}],[{key:"attach",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".carousel, .hero-carousel",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=new Array,i=document.querySelectorAll(e);return[].forEach.call(i,function(e){setTimeout(function(){n.push(new s(e,t))},100)}),n}}]),s}();t.default=v},function(e,t,n){"use strict";var i=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),s=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners=new Map(t),this._middlewares=new Map}return i(e,[{key:"listenerCount",value:function(e){return this._listeners.has(e)?this._listeners.get(e).length:0}},{key:"removeListeners",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeListeners(t,n)}):(this._listeners.delete(t),n&&this.removeMiddleware(t)):this._listeners=new Map}},{key:"middleware",value:function(e,t){var n=this;Array.isArray(e)?name.forEach(function(e){return n.middleware(e,t)}):(Array.isArray(this._middlewares.get(e))||this._middlewares.set(e,[]),this._middlewares.get(e).push(t))}},{key:"removeMiddleware",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeMiddleware(t)}):this._middlewares.delete(t):this._middlewares=new Map}},{key:"on",value:function(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(e))e.forEach(function(e){return n.on(e,t)});else{var s=(e=e.toString()).split(/,|, | /);1<s.length?s.forEach(function(e){return n.on(e,t)}):(Array.isArray(this._listeners.get(e))||this._listeners.set(e,[]),this._listeners.get(e).push({once:i,callback:t}))}}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"emit",value:function(e,i){var s=this,t=2<arguments.length&&void 0!==arguments[2]&&arguments[2];e=e.toString();var n=this._listeners.get(e),a=null,o=0,u=t;if(Array.isArray(n))for(n.forEach(function(r,l){t||(a=s._middlewares.get(e),Array.isArray(a)?(a.forEach(function(t){t(i,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(i=e),o++},e)}),o>=a.length&&(u=!0)):u=!0),u&&(r.once&&(n[l]=null),r.callback(i))});-1!==n.indexOf(null);)n.splice(n.indexOf(null),1)}}]),e}();t.a=s},function(e,t,n){"use strict";t.a={size:1,autoplay:!1,delay:5e3,threshold:50,restraint:100,allowedTime:500}}]).default},398:function(e,t,n){var content=n(415);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("78e674f4",content,!0,{sourceMap:!1})},400:function(e,t,n){var content=n(429);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("54d96e06",content,!0,{sourceMap:!1})},415:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"@-webkit-keyframes spinAround{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.carousel{position:relative;overflow:hidden}.carousel .carousel-container{width:100%;position:relative;border:none;display:flex;margin:0;padding:0;left:-100%;transform:translateX(100%)}.carousel .carousel-container .carousel-item{display:block;position:relative;flex:1 0 100%}.carousel .carousel-container .carousel-item.has-background .is-background{-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;height:100%;width:100%}.carousel .carousel-container .carousel-item .title{position:absolute;left:0;right:0;bottom:0;padding:1.5em;margin:0;text-align:center;background:hsla(0,0%,100%,.6);font-size:.75rem}.carousel .carousel-navigation{display:flex;justify-content:space-around;width:100%;pointer-events:none}.carousel .carousel-navigation .carousel-nav-left,.carousel .carousel-navigation .carousel-nav-right{padding:1em;pointer-events:auto}.carousel .carousel-navigation.is-centered{justify-content:center}.carousel .carousel-navigation.is-overlay{top:50%;transform:perspective(1px) translateY(-50%);bottom:auto;left:auto;right:auto;align-items:center;justify-content:space-between;z-index:99}.carousel .carousel-navigation.is-overlay .carousel-nav-left,.carousel .carousel-navigation.is-overlay .carousel-nav-right{height:2.2em;width:2em;background:hsla(0,0%,100%,.7);display:flex;justify-content:center;align-items:center;color:#4a4a4a;position:absolute;left:0}.carousel .carousel-navigation.is-overlay .carousel-nav-left:hover,.carousel .carousel-navigation.is-overlay .carousel-nav-right:hover{cursor:pointer}.carousel .carousel-navigation.is-overlay .carousel-nav-right{left:auto;right:0}.carousel.is-reversing .carousel-container{transform:translateX(-100%)}.carousel[data-size]:not(.carousel-animate-fade) .carousel-container .carousel-item{padding:1em}.hero.has-carousel{position:relative}.hero.has-carousel+.hero-body,.hero.has-carousel+.hero-footer,.hero.has-carousel+.hero-head{z-index:1}.hero.has-carousel .hero-carousel{display:flex;position:absolute;top:0;left:0;bottom:0;right:0;height:auto;border:none;margin:auto;padding:0;z-index:0}.hero.has-carousel .hero-carousel .carousel-container{height:auto!important}.hero-carousel{position:relative;overflow:hidden}.hero-carousel .carousel-container{width:100%;position:relative;border:none;display:flex;margin:0;padding:0;left:-100%;transform:translateX(100%)}.hero-carousel .carousel-container .carousel-item{display:block;position:relative;flex:1 0 100%}.hero-carousel .carousel-container .carousel-item.has-background .is-background{-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;height:100%;width:100%}.hero-carousel .carousel-container .carousel-item .title{position:absolute;left:0;right:0;bottom:0;padding:1.5em;margin:0;text-align:center;background:hsla(0,0%,100%,.6);font-size:.75rem}.hero-carousel .carousel-navigation{display:flex;justify-content:space-around;width:100%;pointer-events:none}.hero-carousel .carousel-navigation .carousel-nav-left,.hero-carousel .carousel-navigation .carousel-nav-right{padding:1em;pointer-events:auto}.hero-carousel .carousel-navigation.is-centered{justify-content:center}.hero-carousel .carousel-navigation.is-overlay{top:50%;transform:perspective(1px) translateY(-50%);bottom:auto;left:auto;right:auto;align-items:center;justify-content:space-between;z-index:99}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-left,.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right{height:2.2em;width:2em;background:hsla(0,0%,100%,.7);display:flex;justify-content:center;align-items:center;color:#4a4a4a;position:absolute;left:0}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-left:hover,.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right:hover{cursor:pointer}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right{left:auto;right:0}.hero-carousel.is-reversing .carousel-container{transform:translateX(-100%)}.carousel.carousel-animate-slide.carousel-animated .carousel-container,.hero-carousel.carousel-animate-slide.carousel-animated .carousel-container{transform:none!important;transition:transform .5s ease-in-out}.carousel.carousel-animate-fade .carousel-item,.hero-carousel.carousel-animate-fade .carousel-item{position:absolute;width:100%;height:100%;transition:opacity .5s ease-in-out}.carousel.carousel-animate-fade .carousel-item.is-active,.hero-carousel.carousel-animate-fade .carousel-item.is-active{opacity:1}.carousel.carousel-animate-fade .carousel-item:not(.is-active),.hero-carousel.carousel-animate-fade .carousel-item:not(.is-active){opacity:0}",""])},428:function(e,t,n){"use strict";var o=n(400);n.n(o).a},429:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"h2[data-v-728f470e]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-728f470e],h3[data-v-728f470e]{font-weight:500}h3[data-v-728f470e]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.card-image[data-v-728f470e]{overflow:hidden}.position-absolute[data-v-728f470e]{position:absolute}.position-relative[data-v-728f470e]{position:relative;display:block;z-index:1000}.top-100[data-v-728f470e]{top:10px}.right-0[data-v-728f470e]{right:10px}.bg-blue[data-v-728f470e]{background:rgba(255,48,48,.9);color:#fff}.label[data-v-728f470e]{width:50%;padding:20px}.flip-container[data-v-728f470e]{-ms-perspective:1000;perspective:1000}.flip-container:hover .flipper[data-v-728f470e]{transform:rotateY(180deg)}.flip-container .flipper[data-v-728f470e]{transition:.6s;transform-style:preserve-3d;position:relative}.back[data-v-728f470e],.front[data-v-728f470e]{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0}.back[data-v-728f470e],.flip-container[data-v-728f470e],.front[data-v-728f470e]{width:100%;height:21vw}@media screen and (max-width:767px){.back[data-v-728f470e],.flip-container[data-v-728f470e],.front[data-v-728f470e]{height:80vw}}.front[data-v-728f470e]{z-index:2;transform:rotateY(0deg)}.back[data-v-728f470e]{transform:rotateY(180deg)}.back-logo img[data-v-728f470e]{top:0;eft:35%}.back-logo[data-v-728f470e]{width:30%;height:30%}.back-logo img[data-v-728f470e]{position:absolute;top:15px;text-align:center;left:35%;border-radius:50%;width:30%}@media screen and (max-width:767px){.back-logo img[data-v-728f470e]{margin:0 auto;top:0}}.back-content[data-v-728f470e]{padding-top:40px;font-weight:700;color:#00304a;position:absolute;top:6vw;left:0;right:0;text-align:center;font-family:Courier;font-size:.75rem}@media screen and (max-width:767px){.back-content[data-v-728f470e]{font-size:.7rem;top:16vw}}",""])}}]);