(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4,10,17,18,19],{175:function(t,e,n){"use strict";n.r(e);var r={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},o=(n(387),n(3)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[t.isH2?n("h2",{class:[t.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.isH2?t._e():n("h3",{class:[t.white?"white":""],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{class:["subtitle",t.white?"white":""],domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),t._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"flag"})])}],!1,null,null,null);e.default=component.exports},176:function(t,e,n){"use strict";n.r(e);var r={props:{title:String,description:String,bannerImage:String}},o=(n(397),n(3)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-container"},[e("div",{staticClass:"overlay-container thin-heading"}),this._v(" "),e("section",{staticClass:"hero columns",style:this.style},[e("div",{staticClass:"hero-body"})])])},[],!1,null,"53c593a1",null);e.default=component.exports},178:function(t,e,n){"use strict";n.r(e);n(399);var r=n(3),component=Object(r.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://css.tito.io/v1.1"}}),this._v(" "),e("script",{attrs:{src:"https://js.tito.io/v1",async:""}}),this._v(" "),e("h3",[this._v("Conference Day")]),this._v(" "),this._m(0),this._v(" "),e("tito-widget",{attrs:{event:"cityjsconf-london/cityjs-2020"}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v(" 27 March 2020 - Regent Street Cinema")])])}],!1,null,null,null);e.default=component.exports},182:function(t,e,n){"use strict";n.r(e);n(87),n(43),n(11),n(7),n(54);var r=n(34),o=n(178),c=n(176),d=n(28);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var h={data:function(){return{isActive:!1}},components:{"app-payments":o.default,"app-banner":c.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(d.b)({current:"pages/current"}),{style:function(){return"background-image: url(//api.spiralthread.com/".concat(this.current.image.path,");")}}),props:{title:String,description:String,image:String}},f=(n(417),n(3)),component=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-banner",{attrs:{title:t.current-t.title}}),t._v(" "),n("section",{staticClass:"section "},[n("div",{staticClass:"container "},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two"},[n("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.current.title)}}),t._v(" "),n("p",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.current.description)}}),t._v(" "),"Buy Tickets"===t.current.title?n("app-payments"):t._e()],1),t._v(" "),n("div",{staticClass:"column img",style:t.style})])])])],1)},[],!1,null,"ced3d61c",null);e.default=component.exports},183:function(t,e,n){"use strict";n.r(e);n(87),n(43),n(11),n(7),n(54);var r=n(34),h2=n(175),o=n(28);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var d={data:function(){return{isActive:!1}},components:{"app-h2":h2.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.b)({current:"pages/current"})),props:{title:String,description:String,image:Object,subtitle:String}},l=(n(415),n(3)),component=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"about-home section backimg is-mobile lazyload",style:t.style},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns level-right"},[n("div",{staticClass:"column is-4-desktop is-12-mobile is-12-tablet is-offset-4"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content copy"},[n("div",{staticClass:"title is-4 no-padding",domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),n("p",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.current.subtitle)}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.current.description)}})])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-heading"},[e("span")])}],!1,null,"792c1d34",null);e.default=component.exports},185:function(t,e,n){"use strict";n.r(e);var r=n(183),o=n(182),c={components:{"app-about-home":r.default,"app-about":o.default},props:{title:String,shortDescription:String,description:String,widgets:Array,image:Object,subtitle:String}},d=n(3),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["Home"===t.title?n("app-about-home",{attrs:{title:t.shortDescription,description:t.description,image:t.image,subtitle:t.subtitle}}):t._e(),t._v(" "),"Home"!==t.title?n("app-about",{attrs:{title:t.title,description:t.description,image:t.image,subtitle:t.subtitle}}):t._e()],1)},[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){var content=n(388);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("47349750",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";var r=n(386);n.n(r).a},388:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},389:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("79b1019e",content,!0,{sourceMap:!1})},390:function(t,e,n){var content=n(400);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("61f8d31e",content,!0,{sourceMap:!1})},392:function(t,e,n){var content=n(416);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("ab563e6c",content,!0,{sourceMap:!1})},393:function(t,e,n){var content=n(418);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("70bcd974",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";var r=n(389);n.n(r).a},398:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"body[data-v-53c593a1]{background:#000}.home[data-v-53c593a1]{background:#fff}h2[data-v-53c593a1]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-53c593a1],h3[data-v-53c593a1]{font-weight:500}h3[data-v-53c593a1]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.hero[data-v-53c593a1]{margin:0;padding:0;background-image:url(//api.spiralthread.com/images/aboutus.png);background-size:cover;display:table;background-position-x:center;background-position-y:center;z-index:998}.hero[data-v-53c593a1],.overlay-container[data-v-53c593a1]{height:250px;width:100%;position:absolute}.overlay-container[data-v-53c593a1]{background:rgba(255,48,48,.7);z-index:999}@media screen and (min-width:100%){.overlay-container[data-v-53c593a1]{padding:100px 400px 0}}.banner-container[data-v-53c593a1]{position:relative;display:block;height:300px}.banner-container h1[data-v-53c593a1]{color:#fff}@media screen and (max-width:767px){.banner-container .title[data-v-53c593a1]{font-weight:700}}@media print,screen and (min-width:768px){.banner-container .title[data-v-53c593a1]{font-size:2.5rem}}@media screen and (min-width:100%){.banner-container .title[data-v-53c593a1]{font-size:4rem;margin-top:2rem}}",""])},399:function(t,e,n){"use strict";var r=n(390);n.n(r).a},400:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".tito-tickets-unavailable{display:none}",""])},415:function(t,e,n){"use strict";var r=n(392);n.n(r).a},416:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'body[data-v-792c1d34]{background:#000}.home[data-v-792c1d34]{background:#fff}h2[data-v-792c1d34]{font-size:35px;line-height:52px}h2[data-v-792c1d34],h3[data-v-792c1d34]{font-weight:500}h3[data-v-792c1d34]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.about-home[data-v-792c1d34]{margin-top:-130px}@media screen and (max-width:767px){.about-home[data-v-792c1d34]{margin-top:0}}.backimg[data-v-792c1d34]{background-position:50%;padding:220px 0;height:672px}.backimg[data-v-792c1d34],.backimg.lazyloaded[data-v-792c1d34]{background-repeat:no-repeat;background-size:cover}.backimg.lazyloaded[data-v-792c1d34]{background-image:url(/images/audience.jpg)}@media screen and (max-width:767px){.backimg.lazyloaded[data-v-792c1d34]{background-position:41% -273px;background-repeat:no-repeat;background-size:cover;padding:2rem 0;height:255vw}}.backimg .card[data-v-792c1d34]{top:-50px}@media screen and (max-width:767px){.backimg .card[data-v-792c1d34]{top:35vw}}h2[data-v-792c1d34]{font-size:1.8rem;font-weight:700;line-height:1.375;line-height:2.875rem;text-transform:uppercase;padding:30px 0}.media-content .subtitle[data-v-792c1d34]{padding-top:5px;font-weight:700}.fa-cog[data-v-792c1d34]{font-size:40px}#learn[data-v-792c1d34]{margin-bottom:2rem}.pd[data-v-792c1d34]{padding:2em 0}img.test[data-v-792c1d34]{width:100%;max-height:100%;height:auto}.about[data-v-792c1d34]{width:100%;min-height:444px}.about-content[data-v-792c1d34]{padding:10.3rem}@media screen and (max-width:767px){.card-content[data-v-792c1d34]{margin-top:70%;margin-bottom:20%}}.card-content .copy[data-v-792c1d34]{position:relative;display:block}.banner-heading[data-v-792c1d34]:after{content:"";border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:0;margin-left:0!important;bottom:0;padding:0}',""])},417:function(t,e,n){"use strict";var r=n(393);n.n(r).a},418:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"body[data-v-ced3d61c]{background:#000}.home[data-v-ced3d61c]{background:#fff}h2[data-v-ced3d61c]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-ced3d61c],h3[data-v-ced3d61c]{font-weight:500}h3[data-v-ced3d61c]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.fa-cog[data-v-ced3d61c]{font-size:40px}#learn[data-v-ced3d61c]{margin-bottom:2rem}.pd[data-v-ced3d61c]{padding:2em 0}.img[data-v-ced3d61c]{display:block;background-repeat:no-repeat;height:523px;background-position-x:center;background-position-y:center}.about[data-v-ced3d61c],.img[data-v-ced3d61c]{width:100%}.about .about-content[data-v-ced3d61c]{padding:6.75rem}",""])}}]);