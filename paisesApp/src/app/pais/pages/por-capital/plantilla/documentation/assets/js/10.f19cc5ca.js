(window.webpackJsonp=window.webpackJsonp||[]).push([[10,24,47],{308:function(e,t,n){},309:function(e,t,n){"use strict";t.a={props:{bg:{type:String,default:"transparent"},theme:{type:String,default:"default"}}}},310:function(e,t,n){"use strict";n.r(t);var a={name:"SSection",mixins:[n(309).a],props:{size:{type:String,default:"md"},cover:{type:Boolean,default:!1},protrude:{type:Boolean,default:!1}}},i=(n(311),n(44)),r=Object(i.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("section",{staticClass:"section",class:["section-"+this.size,"bg-"+this.bg,this.theme,{cover:this.cover,protrude:this.protrude}]},[this._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},311:function(e,t,n){"use strict";var a=n(308);n.n(a).a},313:function(e,t,n){"use strict";n.r(t);var a=n(310);t.default=a.default},391:function(e,t,n){},431:function(e,t,n){"use strict";n.r(t);n(10);var a=n(313),i={name:"SSectionOffers",mixins:[n(309).a],components:{SSection:a.default,SBgImage:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,552))}},props:{items:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{activeSlide:0}},methods:{updateCarousel:function(e){this.activeSlide=e}}},r=(n(500),n(44)),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("s-section",{attrs:{bg:e.bg,theme:e.theme,cover:""}},[n("client-only",[n("div",{staticClass:"gallery"},[n("carousel",{ref:"content",staticClass:"gallery-carousel carousel inner-controls",attrs:{perPage:1,paginationEnabled:!1,loop:!0,navigateTo:e.activeSlide,speed:600,navigationEnabled:!0,navigationPrevLabel:"",navigationNextLabel:""},on:{"page-change":e.updateCarousel}},e._l(e.items,(function(e,t){return n("slide",{key:t},[n("img",{attrs:{src:e.url,alt:e.title}})])})),1),e._v(" "),n("div",{staticClass:"gallery-nav"},[n("carousel",{ref:"content",staticClass:"gallery-nav-inner",attrs:{perPage:1,paginationEnabled:!1,navigateTo:e.activeSlide,speed:600,touchDrag:!1,mouseDrag:!1,loop:!0},on:{"page-change":e.updateCarousel}},e._l(e.items,(function(t,a){return n("slide",{key:a},[n("img",{attrs:{src:t.url,alt:t.title},on:{click:function(t){return e.updateCarousel(a)}}})])})),1)],1)],1)])],1)}),[],!1,null,null,null);t.default=s.exports},500:function(e,t,n){"use strict";var a=n(391);n.n(a).a}}]);