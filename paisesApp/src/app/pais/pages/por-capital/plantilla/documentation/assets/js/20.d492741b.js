(window.webpackJsonp=window.webpackJsonp||[]).push([[20,24,47],{308:function(t,e,n){},309:function(t,e,n){"use strict";e.a={props:{bg:{type:String,default:"transparent"},theme:{type:String,default:"default"}}}},310:function(t,e,n){"use strict";n.r(e);var r={name:"SSection",mixins:[n(309).a],props:{size:{type:String,default:"md"},cover:{type:Boolean,default:!1},protrude:{type:Boolean,default:!1}}},i=(n(311),n(44)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"section",class:["section-"+this.size,"bg-"+this.bg,this.theme,{cover:this.cover,protrude:this.protrude}]},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},311:function(t,e,n){"use strict";var r=n(308);n.n(r).a},313:function(t,e,n){"use strict";n.r(e);var r=n(310);e.default=r.default},441:function(t,e,n){"use strict";n.r(e);n(10);var r=n(314),i=n(312),s=n(313),o={name:"SSectionOffers",mixins:[n(309).a],components:{SSection:s.default,SOffer:function(){return Promise.all([n.e(0),n.e(73)]).then(n.bind(null,408))}},props:{title:{type:String,required:!1},items:{type:Array,required:!1},carousel:{type:Boolean,default:!0}},data:function(){return{itemsToShow:[]}},computed:Object(r.a)({},Object(i.b)("menu",["offers"])),created:function(){this.itemsToShow=this.items||this.offers}},a=n(44),u=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("s-section",{attrs:{bg:t.bg,theme:t.theme}},[n("b-container",[t.title?n("h1",{staticClass:"text-center mb-6"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.carousel?n("client-only",[n("carousel",{staticClass:"carousel",attrs:{perPage:1,paginationSize:6,paginationColor:"currentColor",paginationActiveColor:"currentColor"}},t._l(t.itemsToShow,(function(t,e){return n("slide",{key:e},[n("s-offer",{attrs:{item:t}})],1)})),1)],1):t._l(t.itemsToShow,(function(t,e){return n("s-offer",{key:e,attrs:{item:t}})}))],2)],1)}),[],!1,null,null,null);e.default=u.exports}}]);