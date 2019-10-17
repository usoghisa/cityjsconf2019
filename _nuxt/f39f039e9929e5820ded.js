(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{190:function(e,t,n){"use strict";n.r(t);n(87),n(43),n(11),n(7),n(54);var o=n(34),r=n(414),c=n(28);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,n)}return t}var l={name:"faq",props:{items:{type:Array}},components:{BulmaAccordion:r.BulmaAccordion,BulmaAccordionItem:r.BulmaAccordionItem},created:function(e){this.$store.dispatch("faqs/get")},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach(function(t){Object(o.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},Object(c.b)({faqs:"faqs/faqs"}))},f=(n(430),n(3)),component=Object(f.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section bg-gray"},[n("div",{staticClass:"container "},[n("div",{staticClass:"columns"},[n("div",{staticClass:" column is-two about-content "},[n("h2",{staticClass:"title"},[e._v("Frequently Asked Questions")]),e._v(" "),n("BulmaAccordion",{attrs:{dropdown:"",icon:"plus-minus",caretAnimation:{duration:".2s",timerFunc:"ease-in-out"},slide:{duration:".2s",timerFunc:"ease"}}},e._l(e.faqs,function(t){return n("BulmaAccordionItem",{key:t._id},[n("h4",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.question))]),e._v(" "),n("p",{attrs:{slot:"content"},domProps:{innerHTML:e._s(t.answer)},slot:"content"},[e._v(e._s(t.answer))])])}),1)],1)])])])},[],!1,null,"a8a652ee",null);t.default=component.exports},402:function(e,t,n){var content=n(431);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("f32b2c8c",content,!0,{sourceMap:!1})},414:function(e,t,n){(function(e){(function(t){"use strict";var template,n,o,r,component,script={name:"bulma-accordion",props:{initialOpenItem:{required:!1,type:[Number,String],default:null},initialOpenItems:{required:!1,type:Array,default:null,validator:function(e){return Array.isArray(e)&&!e.some(function(e){return"number"!=typeof e})}},caretAnimation:{required:!1,type:Object,default:function(){return{duration:"450ms",timerFunc:"ease"}},validator:function(e){return"string"==typeof e.duration&&"string"==typeof e.timerFunc||!0===e.none}},dropdown:{required:!1,type:Boolean,default:!1},icon:{required:!1,type:String,default:"caret",validator:function(e){return"caret"===e||"plus-minus"===e||"custom"===e}},slide:{required:!1,type:Object,default:function(){return{duration:"700ms",timerFunc:"ease"}},validator:function(e){return"string"==typeof e.duration&&"string"==typeof e.timerFunc}}},mounted:function(){var e=this;this.$on("child-registered",function(t){var n=e.getNextId();t.setUniqueId(n),e.children_toggle_status[n]=!1}),this.$on("child-clicked",this.handleChildClicked),this.$on("child-removed",function(t){delete e.children_toggle_status[t]}),this.$nextTick(function(){e.openInitialItems(e.$children.length)})},data:function(){return{next_id:1,children_toggle_status:{}}},methods:{getNextId:function(){var e=this.next_id.toString(10);return this.next_id+=1,e},handleChildClicked:function(e){if(!this.dropdown)for(var t in this.children_toggle_status)this.children_toggle_status[t]&&t!==e&&(this.$emit("toggle-child",t),this.children_toggle_status[t]=!1);this.children_toggle_status[e]=!this.children_toggle_status[e],this.$emit("toggle-child",e)},openInitialItems:function(e){var t=this,i=this.initialOpenItem,n=this.initialOpenItems;null!==i?this.openInitialItem(i,e):null!==n&&n.forEach(function(n,o){t.openInitialItem(n,e)})},openInitialItem:function(e,t){var n="number"==typeof e?e:parseInt(e,10);if(!(n>0&&n<=t))throw new Error("There are only "+t+" AccordionItems, "+n+" is out of bounds. [indexing from 1]");this.handleChildClicked(String(n))}}},c=(template={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"accordion"},[this._t("default")],2)},staticRenderFns:[]},o=void 0,r=!1,(component=("function"==typeof(n=script)?n.options:n)||{}).__file="BulmaAccordion.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,r&&(component.functional=!0)),component._scopeId=o,component),d=function(template,style,script,e,t,n,o,r){var c,component=("function"==typeof script?script.options:script)||{};if(component.__file="BulmaAccordionItem.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,t&&(component.functional=!0)),component._scopeId=e,style&&(c=function(e){style.call(this,o(e))}),void 0!==c)if(component.functional){var d=component.render;component.render=function(e,t){return c.call(t),d(e,t)}}else{var l=component.beforeCreate;component.beforeCreate=l?[].concat(l,c):[c]}return component}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.card_classes},[n("div",{staticClass:"card-header",on:{click:e.notifyOfClick}},[n("p",{staticClass:"card-header-title"},[e._t("title")],2),e._v(" "),n("p",{staticClass:"card-header-icon"},[e.usingCustomIcon?n("span",{staticClass:"icon"},[e._t("icon"),e._v(" "),e.isOpen?e._t("icon-open"):e._t("icon-closed")],2):n("span",{staticClass:"icon"},[e.showCaret?n("svg",{class:e.dropdownIconClasses,style:e.iconStyle,attrs:{version:"1.1",viewBox:"0 0 129 129","enable-background":"new 0 0 129 129"}},[n("g",[n("path",{attrs:{d:"m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"}})])]):e._e(),e._v(" "),e.showPlus||e.showMinus?n("PlusMinus",{attrs:{minus:e.showMinus}}):e._e()],1)])]),e._v(" "),n("div",{ref:"body",staticClass:"accordion-body",style:e.slideStyle},[n("div",{ref:"bodyContent",class:e.card_content_classes},[e._t("content")],2),e._v(" "),n("div",{ref:"bodyFooter",class:e.footerClasses},[e._t("footer")],2)])])},staticRenderFns:[]},function(e){e&&e("data-v-bc7d9a68_0",{source:".accordion-body[data-v-bc7d9a68]{height:0;overflow:hidden}.caret-down[data-v-bc7d9a68]{transform:rotate(180deg)}.header-icon[data-v-bc7d9a68]{width:100%}",map:void 0,media:void 0})},{name:"bulma-accordion-item",components:{PlusMinus:function(template,style,script,e,t,n,o,r){var c,component=("function"==typeof script?script.options:script)||{};if(component.__file="PlusMinus.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,t&&(component.functional=!0)),component._scopeId=e,style&&(c=function(e){style.call(this,o(e))}),void 0!==c)if(component.functional){var d=component.render;component.render=function(e,t){return c.call(t),d(e,t)}}else{var l=component.beforeCreate;component.beforeCreate=l?[].concat(l,c):[c]}return component}({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"plus-minus"},[t("div",{staticClass:"horizontal"}),this._v(" "),t("div",{class:this.verticalClasses})])},staticRenderFns:[]},function(e){e&&e("data-v-6b0c21ae_0",{source:".horizontal[data-v-6b0c21ae],.vertical[data-v-6b0c21ae]{position:absolute;border-radius:3px;background:#646464;transform:rotate(0);transition:.4s all ease-out}.horizontal[data-v-6b0c21ae]{top:45%;left:10%;right:10%;height:10%}.vertical[data-v-6b0c21ae]{top:10%;bottom:10%;left:45%;width:10%}.vertical-rotated[data-v-6b0c21ae]{transform:rotate(90deg)}.plus-minus[data-v-6b0c21ae]{position:relative;display:block;width:100%;height:100%}",map:void 0,media:void 0})},{props:{minus:{required:!0,type:Boolean}},computed:{verticalClasses:function(){return{vertical:!0,"vertical-rotated":this.minus}}}},"data-v-6b0c21ae",!1,0,function e(){var head=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,o){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var r=n?o.media||"default":e,style=t[r]||(t[r]={ids:[],parts:[],element:void 0});if(!style.ids.includes(e)){var code=o.source,c=style.ids.length;if(style.ids.push(e),o.map&&(code+="\n/*# sourceURL="+o.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o.map))))+" */"),n&&(style.element=style.element||document.querySelector("style[data-group="+r+"]")),!style.element){var d=style.element=document.createElement("style");d.type="text/css",o.media&&d.setAttribute("media",o.media),n&&(d.setAttribute("data-group",r),d.setAttribute("data-next-index","0")),head.appendChild(d)}if(n&&(c=parseInt(style.element.getAttribute("data-next-index")),style.element.setAttribute("data-next-index",c+1)),style.element.styleSheet)style.parts.push(code),style.element.styleSheet.cssText=style.parts.filter(Boolean).join("\n");else{var l=document.createTextNode(code),f=style.element.childNodes;f[c]&&style.element.removeChild(f[c]),f.length?style.element.insertBefore(l,f[c]):style.element.appendChild(l)}}}}})},data:function(){return{isOpen:!1,autoHeightInterval:null,showCardContent:!1,uniqueId:null}},mounted:function(){var e=this;this.$nextTick(function(){e.$parent.$emit("child-registered",e),e.$parent.$on("toggle-child",e.handleToggleRequest);var t=e.$refs.body,n=function(e){var t={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];throw new Error("TransitionEnd event is not supported in this browser")}(t);t.addEventListener(n,function(n){"0px"!==t.style.height?e.autoHeightStart(t):(e.autoHeightStop(),e.showCardContent=!1)})})},beforeDestroy:function(){this.$parent.$emit("child-removed",this.uniqueId)},watch:{isOpen:function(e){e?this.$emit("open"):this.$emit("close"),this.doTheSlide()}},computed:{config:function(){var e=this.$parent,t=e.caretAnimation;void 0===t&&(t={duration:"450ms",timerFunc:"ease"});var n=e.dropdown;void 0===n&&(n=!1);var o=e.icon;void 0===o&&(o="caret");var r=e.slide;return void 0===r&&(r={duration:"700ms",timerFunc:"ease"}),{animation:t,dropdown:n,icon:o,slide:r}},dropdownIconClasses:function(){return{"header-icon":!0,"caret-down":!this.isOpen}},card_classes:function(){return{card:!0,"card-active":this.isOpen}},card_content_classes:function(){return{"card-content":!0,"is-hidden":!this.showCardContent}},footerClasses:function(){return{"card-footer":!0,"is-hidden":!this.$slots.footer}},usingCustomIcon:function(){return"custom"===this.config.icon},showCaret:function(){return"caret"===this.config.icon},showPlus:function(){return"plus-minus"===this.config.icon&&!this.isOpen},showMinus:function(){return"plus-minus"===this.config.icon&&this.isOpen},slideStyle:function(){var e=this.config.slide;return{transition:"all "+e.duration+" "+e.timerFunc}},iconStyle:function(){var e=this.config.animation;return!0===e.none?{}:{transition:"all "+e.duration+" "+e.timerFunc}}},methods:{handleToggleRequest:function(e){e===this.uniqueId&&this.toggleCollapsed()},setUniqueId:function(e){this.uniqueId=e},notifyOfClick:function(){this.uniqueId&&this.$parent.$emit("child-clicked",this.uniqueId)},collapse:function(){this.isOpen=!1},toggleCollapsed:function(){this.isOpen=!this.isOpen},doTheSlide:function(){var e=this,t=this.$refs.body;!0===this.isOpen?(this.showCardContent=!0,this.$nextTick().then(function(){e.adjustHeight(t,t.scrollHeight)})):this.slideUp(t)},adjustHeight:function(e,t){e.style.height=t+"px"},slideUp:function(e){"auto"===e.style.height&&(e.style.height=e.scrollHeight+"px"),e.style.height="0px"},autoHeightStart:function(e){var t=this;this.autoHeightInterval&&this.autoHeightStop(),this.autoHeightInterval=setInterval(function(){try{var n=t.$refs.bodyContent.scrollHeight+t.$refs.bodyFooter.scrollHeight+1;"0px"!==e.style.height&&n!==e.style.height&&t.isOpen&&t.adjustHeight(e,n)}catch(e){t.autoHeightStop()}},100)},autoHeightStop:function(){clearInterval(this.autoHeightInterval),this.autoHeightInterval=null}}},"data-v-bc7d9a68",!1,0,function e(){var head=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,o){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var r=n?o.media||"default":e,style=t[r]||(t[r]={ids:[],parts:[],element:void 0});if(!style.ids.includes(e)){var code=o.source,c=style.ids.length;if(style.ids.push(e),o.map&&(code+="\n/*# sourceURL="+o.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o.map))))+" */"),n&&(style.element=style.element||document.querySelector("style[data-group="+r+"]")),!style.element){var d=style.element=document.createElement("style");d.type="text/css",o.media&&d.setAttribute("media",o.media),n&&(d.setAttribute("data-group",r),d.setAttribute("data-next-index","0")),head.appendChild(d)}if(n&&(c=parseInt(style.element.getAttribute("data-next-index")),style.element.setAttribute("data-next-index",c+1)),style.element.styleSheet)style.parts.push(code),style.element.styleSheet.cssText=style.parts.filter(Boolean).join("\n");else{var l=document.createTextNode(code),f=style.element.childNodes;f[c]&&style.element.removeChild(f[c]),f.length?style.element.insertBefore(l,f[c]):style.element.appendChild(l)}}}}}),l=Object.freeze({BulmaAccordion:c,BulmaAccordionItem:d});function f(e){f.installed||(f.installed=!0,Object.keys(l).forEach(function(t){e.component(t,l[t])}))}var h={install:f},m=null;"undefined"!=typeof window?m=window.Vue:void 0!==e&&(m=e.Vue),m&&m.use(h);var v=c,y=d;t.install=f,t.BulmaAccordion=v,t.BulmaAccordionItem=y,Object.defineProperty(t,"__esModule",{value:!0})})(t)}).call(this,n(17))},430:function(e,t,n){"use strict";var o=n(402);n.n(o).a},431:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"body[data-v-a8a652ee]{background:#000}.home[data-v-a8a652ee]{background:#fff}h2[data-v-a8a652ee]{font-size:35px;line-height:52px}h2[data-v-a8a652ee],h3[data-v-a8a652ee]{font-weight:500}h3[data-v-a8a652ee]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}h2[data-v-a8a652ee]{margin:1.5rem 0 2rem!important;text-transform:uppercase}.fa-cog[data-v-a8a652ee]{font-size:40px}.bg-gray[data-v-a8a652ee]{background-color:#f8f9fa}.accordion-header[data-v-a8a652ee]{padding:40px}.accordions .accordion[data-v-a8a652ee]{font-size:18px}.accordions .accordion.is-active[data-v-a8a652ee]{background-color:#fff!important}.accordions .accordion.is-active .accordion-header[data-v-a8a652ee]{color:#000;align-text:left;background-color:#fff!important;border:none}.accordions .accordion.is-active .accordion-header .toggle[data-v-a8a652ee]:before{background:#fff!important;color:rgba(255,48,48,.9);padding:0}.accordions .accordion .accordion-header[data-v-a8a652ee]{background-color:#f8f9fa!important;border-bottom:1px solid #dddee2;padding:23px 15px;font-size:18px;color:#000}.accordions .accordion .accordion-header button[data-v-a8a652ee]{background:none;padding:0}.accordions .accordion .accordion-header .toggle[data-v-a8a652ee]:before{background:none!important;color:#000;font-size:20px;padding:0;margin:0}.accordions .accordion p[data-v-a8a652ee]{float:left;width:100%;padding-left:20px}.accordions .accordion .accordion-body[data-v-a8a652ee]{padding-left:40px;background-color:#fff!important;border:none}",""])}}]);