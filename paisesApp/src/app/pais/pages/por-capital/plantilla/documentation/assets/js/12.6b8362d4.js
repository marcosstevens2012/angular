(window.webpackJsonp=window.webpackJsonp||[]).push([[12,24,47],{308:function(t,e,i){},309:function(t,e,i){"use strict";e.a={props:{bg:{type:String,default:"transparent"},theme:{type:String,default:"default"}}}},310:function(t,e,i){"use strict";i.r(e);var n={name:"SSection",mixins:[i(309).a],props:{size:{type:String,default:"md"},cover:{type:Boolean,default:!1},protrude:{type:Boolean,default:!1}}},a=(i(311),i(44)),s=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"section",class:["section-"+this.size,"bg-"+this.bg,this.theme,{cover:this.cover,protrude:this.protrude}]},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},311:function(t,e,i){"use strict";var n=i(308);i.n(n).a},313:function(t,e,i){"use strict";i.r(e);var n=i(310);e.default=n.default},394:function(t,e,i){},434:function(t,e,i){"use strict";i.r(e);i(10);var n=i(313),a={name:"SSectionHeroSimple",mixins:[i(309).a],components:{SSection:n.default,SBgVideo:function(){return Promise.all([i.e(0),i.e(27)]).then(i.bind(null,553))},SBgImage:function(){return Promise.all([i.e(0),i.e(2)]).then(i.bind(null,552))},SButton:function(){return i.e(3).then(i.bind(null,419))}},props:{title:{type:String,required:!0,default:"Sample title"},tagline:{type:[Boolean,String],default:!1},media:{type:[Boolean,Object],default:!1},link:{type:[Boolean,Object],default:!1}},data:function(){return{activeSlide:0}},methods:{prevSlide:function(){this.activeSlide>0?this.activeSlide--:0===this.activeSlide&&(this.activeSlide=this.slides.length-1)},nextSlide:function(){this.activeSlide<this.slides.length-1?this.activeSlide++:this.activeSlide=0},updateCarousel:function(t){this.activeSlide=t}}},s=(i(504),i(44)),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("s-section",{staticClass:"section-hero section-hero-simple",attrs:{bg:"dark",theme:"dark"}},["video"===t.media.type?i("s-bg-video",{attrs:{video:t.media.source}}):"image"===t.media.type?i("s-bg-image",{attrs:{image:t.media.source}}):t._e(),t._v(" "),i("client-only",[i("b-container",{staticClass:"container v-center"},[i("b-row",[i("b-col",{attrs:{md:"8",offset:"md-3"}},[i("h1",{staticClass:"display-1"},[t._v(t._s(t.title))]),t._v(" "),t.tagline?i("h4",{staticClass:"text-muted mb-5"},[t._v(t._s(t.tagline))]):t._e(),t._v(" "),t.link?i("s-button",{attrs:{to:{name:t.link.path},size:"lg",variant:"outline-primary"}},[t._v(t._s(t.link.title))]):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports},504:function(t,e,i){"use strict";var n=i(394);i.n(n).a}}]);