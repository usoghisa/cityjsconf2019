(window.webpackJsonp=window.webpackJsonp||[]).push([[5,19,20],{175:function(t,e,n){"use strict";n.r(e);var o={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},r=(n(381),n(3)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[t.isH2?n("h2",{class:[t.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.isH2?t._e():n("h3",{class:[t.white?"white":""],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{class:["subtitle",t.white?"white":""],domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),t._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"flag"})])}],!1,null,null,null);e.default=component.exports},181:function(t,e,n){"use strict";n.r(e);n(13);var o,r=n(2),c={data:function(){return{timer:"",wordString:{day:"Days",hours:"Hrs",minutes:"Min",seconds:"Sec",expired:"Event has been expired.",running:"Till the end of event.",upcoming:"Till start of event.",status:{expired:"Expired",running:"Running",upcoming:"Future"}},start:"",end:"",interval:"",days:"",minutes:"",hours:"",seconds:"",message:"",statusType:"",statusText:""}},mounted:(o=Object(r.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.start=new Date(this.starttime).getTime(),this.end=new Date(this.endtime).getTime(),this.timerCount(this.start,this.end),this.interval=setInterval(function(){e.timerCount(e.start,e.end)},1e3);case 4:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)}),methods:{timerCount:function(t,e){var n=(new Date).getTime(),o=t-n,r=e-n;if(o<0&&r<0)return this.message=this.wordString.expired,this.statusType="expired",this.statusText=this.wordString.status.expired,void clearInterval(this.interval);o<0&&r>0?(this.calcTime(r),this.message=this.wordString.running,this.statusType="running",this.statusText=this.wordString.status.running):o>0&&r>0&&(this.calcTime(o),this.message=this.wordString.upcoming,this.statusType="upcoming",this.statusText=this.wordString.status.upcoming)},calcTime:function(t){this.days=Math.floor(t/864e5),this.hours=Math.floor(t%864e5/36e5),this.minutes=Math.floor(t%36e5/6e4),this.seconds=Math.floor(t%6e4/1e3)}},components:{},props:{starttime:String,endtime:String,trans:String}},d=(n(413),n(3)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"timer container"},[n("div",{staticClass:"columns"},[t._m(0),t._v(" "),n("div",{staticClass:"column is-4"},[n("div",{staticClass:"columns is-mobile is-8-desktop"},[n("div",{staticClass:"block column is-2-desktop is-3-mobile"},[n("span",[t._v(t._s(t.days))]),n("br"),t._v("\n            "+t._s(t.wordString.day)+"\n          ")]),t._v(" "),n("div",{staticClass:"block column is-2-desktop  is-3-mobile  is-offset-1-desktop"},[n("span",[t._v(t._s(t.hours))]),n("br"),t._v("\n            "+t._s(t.wordString.hours)+"\n          ")]),t._v(" "),n("div",{staticClass:"block column is-2-desktop  is-3-mobile is-offset-1-desktop"},[n("span",[t._v(t._s(t.minutes))]),n("br"),t._v("\n            "+t._s(t.wordString.minutes)+"\n          ")]),t._v(" "),n("div",{staticClass:"block column is-2-desktop is-3-mobile is-offset-1-desktop"},[n("span",[t._v(t._s(t.seconds))]),n("br"),t._v("\n            "+t._s(t.wordString.seconds)+"\n          ")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-8"},[e("h2",[this._v(" \n            3 days of JavaScript Festivities including, "),e("br"),this._v("\n            6 Free "),e("a",{attrs:{href:"/workshops"}},[this._v("Workshops")]),this._v(",  "),e("br"),this._v("\n            10 International "),e("a",{attrs:{href:"/speakers"}},[this._v("Speakers")]),e("br")])])}],!1,null,"49494e2c",null);e.default=component.exports},191:function(t,e,n){"use strict";n.r(e);var o=n(181),h2=n(175),r={props:{slides:{type:String}},components:{Timer:o.default,"app-h2":h2.default}},c=(n(422),n(3)),component=Object(c.a)(r,function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-container"},[n("section",{attrs:{id:"home"}},[n("div",{staticClass:"video_shader"}),t._v(" "),n("div",{staticClass:"video_contain lazyload",attrs:{"data-bg":"/images/previous_year/cinema1.jpg"}})]),t._v(" "),n("div",{staticClass:"columns has-text-centered slide is-marginless"},[n("div",{staticClass:"column is-two-thirds is-6 is-offset-4 contend"},[n("h1",[n("b",[t._v("\n              City of London JavaScript Conference\n              "),n("br"),t._v("CityJS Conference\n              "),n("br"),t._v("27 March 2020\n              "),n("br"),t._v("Regent Street Cinema\n            ")])]),t._v(" "),n("a",{staticClass:"is-info button info is-primary",attrs:{href:"/buytickets"}},[t._v("Get your tickets")]),t._v(" "),n("a",{staticClass:"is-info button info is-primary",attrs:{href:"https://www.papercall.io/cityjs2020"}},[t._v("Submit your proposal")])])])])])])}],!1,null,null,null);e.default=component.exports},380:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("47349750",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";var o=n(380);n.n(o).a},382:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},388:function(t,e,n){var content=n(414);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("c7e61746",content,!0,{sourceMap:!1})},395:function(t,e,n){var content=n(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("94b1f8f8",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";var o=n(388);n.n(o).a},414:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"h2[data-v-49494e2c]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-49494e2c],h3[data-v-49494e2c]{font-weight:500}h3[data-v-49494e2c]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.timer[data-v-49494e2c]{color:#fff;text-transform:uppercase;text-align:center;margin-bottom:40px;font-size:.9rem;background:#fff;margin-top:0;top:-50px}@media screen and (max-width:767px){.timer[data-v-49494e2c]{background:#fff;padding:20px;position:absolute;left:0;top:100vw;width:100%}}.timer a[data-v-49494e2c]{color:#c90000}.timer h2[data-v-49494e2c]{color:#000;font-size:1.875rem;line-height:2.75rem;text-transform:none;padding:20px}@media screen and (max-width:767px){.timer h2[data-v-49494e2c]{line-height:2rem;font-size:1.2rem;padding:10px}}.timer .block[data-v-49494e2c]{background-color:#000;height:20px;min-height:70px;margin-top:40px;font-size:1.1rem;font-weight:700}.timer .sec[data-v-49494e2c]{border-left:1px solid #000;display:inline-block;font-weight:500;text-align:center;margin:0 5px}.timer .sec .format[data-v-49494e2c]{font-weight:300;font-size:14px;opacity:.8;width:60px}.timer .sec .message[data-v-49494e2c]{font-size:14px;font-weight:400;margin-top:5px}.timer .sec .status-tag[data-v-49494e2c]{width:270px;margin:10px auto;padding:8px 0;font-weight:500;color:#000;text-align:center;border-radius:15px}.timer .sec .status-tag.upcoming[data-v-49494e2c]{background-color:#90ee90}.timer .sec .status-tag.running[data-v-49494e2c]{background-color:gold}.timer .sec .status-tag.expired[data-v-49494e2c]{background-color:silver}",""])},422:function(t,e,n){"use strict";var o=n(395);n.n(o).a},423:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}h2{padding:5px}h1{margin-bottom:4.2rem;margin-top:5.2rem}.contend{color:#fff;font-size:2.4736rem;font-weight:700;line-height:1.375;text-transform:uppercase;font-family:Oswald,sans-serif;margin-left:auto;margin-right:auto;padding-bottom:20px;left:0;right:0;position:absolute;top:23%;left:-10%}@media screen and (max-width:767px){.contend{font-size:1.2rem;height:200vw;position:absolute;top:33%;left:4%}}.video_contain.lazyloaded{background:url(/images/previous_year/cinema1.jpg) no-repeat top;position:absolute;background-repeat:no-repeat;padding:150px 0;height:100vw;background-position-y:-156px;left:0;width:98%;height:215vw;top:-1.2rem;background-size:contain}@media screen and (max-width:767px){.video_contain.lazyloaded{top:-35%;left:-78%;width:320%}}@media print,screen and (min-width:768px){.video_contain.lazyloaded{left:3px;width:100%;height:215vw;top:-1.5rem}}.location{font-size:1.8rem}@media screen and (max-width:767px){.location{font-size:.9rem}}.overlay{position:relative;display:block;overflow:hidden}@media screen and (max-width:767px){.overlay{height:113vw;min-height:300px}}@media print,screen and (min-width:768px){.overlay{height:47vw;min-height:40vw}}@media screen and (min-width:100%){.overlay{min-height:100vw}}.banner:before{content:"";top:0;left:0;z-index:1}.banner:before,.video-player{position:absolute;width:100%;height:auto}.overlay-container{background:rgba(255,48,48,.7);height:230vw}.slide{width:100%;height:100%;background:inherit;text-align:center;position:absolute;top:0;left:0}@media screen and (max-width:767px){.slide{padding:0;margin:0}}.info{margin-top:5px;font-size:.5em}@media screen and (max-width:767px){.info{font-size:.9rem}}',""])}}]);