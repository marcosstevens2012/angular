(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{368:function(e,t,s){},480:function(e,t,s){"use strict";var a=s(368);s.n(a).a},550:function(e,t,s){"use strict";s.r(t);s(171),s(10),s(326);var a=s(314),r=(s(103),s(57)),i=s(312),o=s(479),n={name:"SFooterBasic",mixins:[{methods:{getInputState:function(e){return e.errors&&(e.dirty||e.validated)?0===e.errors.length:null}}}],components:{SButton:function(){return s.e(3).then(s.bind(null,419))},SSocialMedia:function(){return Promise.all([s.e(0),s.e(25)]).then(s.bind(null,546))},ValidationProvider:o.b,ValidationObserver:o.a},data:function(){return{email:"",posts:[],subscribeReply:null}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(-1===e.footerModules.indexOf("LATEST_POSTS")){t.next=4;break}return t.next=3,e.$axios.$get("/blog");case 3:e.posts=t.sent;case 4:case"end":return t.stop()}}),t)})))()},computed:Object(a.a)(Object(a.a)({},Object(i.d)("settings",["name","address","socialMedia","openHours"])),Object(i.d)("theme",["footerLogo","footerModules"])),methods:{getDay:function(e){return this.$moment().day(e).format("dddd")},subscribe:function(){var e=this;this.$axios.$post("/newsletter/subscribe",{email:this.email}).then((function(t){e.email="",e.$nextTick((function(){e.$refs.form.reset(),e.subscribeReply=t.message,setTimeout((function(){e.subscribeReply=null}),5e3)}))})).catch((function(t){e.subscribeReply="ERROR",setTimeout((function(){e.subscribeReply=null}),5e3)}))}}},l=(s(480),s(44)),u=Object(l.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"bg-dark dark",attrs:{id:"footer"}},[s("b-container",[s("div",{staticClass:"footer-first-row row"},[s("b-col",{attrs:{lg:"3"}},[-1!==e.footerModules.indexOf("LOGO")?[e.footerLogo?s("div",{staticClass:"module-logo"},[s("img",{staticClass:"mt-5 mb-5",attrs:{src:e.footerLogo,alt:""}})]):e._e()]:e._e()],2),e._v(" "),s("b-col",{attrs:{lg:"4",mg:"6"}},[-1!==e.footerModules.indexOf("LATEST_POSTS")?[s("h5",{staticClass:"text-muted"},[e._v("Latest posts")]),e._v(" "),s("ul",{staticClass:"list-posts"},e._l(e.posts.slice(0,3),(function(t,a){return s("li",{key:a},[s("nuxt-link",{staticClass:"title",attrs:{to:{name:"blog-id",params:{id:t.id}}}},[e._v(e._s(t.title))]),e._v(" "),s("span",{staticClass:"date"},[e._v(e._s(e.$moment(t.createdAt).format("MMMM DD, YYYY")))])],1)})),0)]:e._e(),e._v(" "),-1!==e.footerModules.indexOf("OPEN_HOURS")?[s("h5",{staticClass:"text-muted"},[e._v("Open Hours")]),e._v(" "),e._l(e.openHours,(function(t,a){return s("b-row",{key:a,staticClass:"mb-1"},[s("b-col",{attrs:{xs:"6"}},[s("strong",[e._v(e._s(e.getDaysRange(t.days)))])]),e._v(" "),s("b-col",{attrs:{xs:"6"}},[e._v(e._s(t.openHour)+" - "+e._s(t.closeHour))])],1)}))]:e._e()],2),e._v(" "),s("b-col",{attrs:{lg:"5",mg:"6"}},[-1!==e.footerModules.indexOf("NEWSLETTER")?[s("h5",{staticClass:"text-muted mb-3"},[e._v("Subscribe Us!")]),e._v(" "),s("client-only",[s("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("form",{staticClass:"sign-up-form mb-5",on:{submit:function(t){return t.preventDefault(),a(e.subscribe)}}},[s("ValidationProvider",{attrs:{name:"E-mail",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b-input-group",[s("b-form-input",{attrs:{type:"email",placeholder:"Tap your e-mail...",name:"email",state:e.getInputState(t)},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),s("s-button",{attrs:{type:"submit"}},[e._v("Subscribe")])],1)]}}],null,!0)}),e._v(" "),e.subscribeReply&&"ERROR"!==e.subscribeReply?s("b-alert",{attrs:{show:"",variant:"success"}},[e._v(e._s(e.subscribeReply))]):e._e(),e._v(" "),s("b-alert",{directives:[{name:"show",rawName:"v-show",value:e.subscribeReply&&"ERROR"===e.subscribeReply,expression:"subscribeReply && subscribeReply === 'ERROR'"}],attrs:{show:"",variant:"danger"}},[e._v("Please try again later...")])],1)]}}],null,!1,615464658)})],1)]:e._e(),e._v(" "),-1!==e.footerModules.indexOf("SOCIAL_MEDIA")&&e.socialMedia&&e.socialMedia.length>0?[s("h5",{staticClass:"text-muted mb-3"},[e._v("Social Media")]),e._v(" "),s("s-social-media",{attrs:{media:e.socialMedia}})]:e._e()],2)],1),e._v(" "),s("div",{staticClass:"footer-second-row"},[s("span",{staticClass:"text-muted"},[e._v("Copyright "+e._s(e.name)+" "+e._s((new Date).getFullYear())+"©. Made with love by "),s("a",{attrs:{href:"http://suelo.pl",target:"_blank"}},[e._v("Suelo")]),e._v(".")])])]),e._v(" "),e._m(0)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"#",id:"back-to-top"}},[t("i",{staticClass:"ti ti-angle-up"})])}],!1,null,"4d68cf18",null);t.default=u.exports}}]);