(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{444:function(t,e,n){"use strict";n.r(e);var i={name:"SStickySidebar",data:function(){return{offsetTop:0,width:0}},methods:{offset:function(t){var e=t.getBoundingClientRect(),n=(window.pageXOffset||document.documentElement.scrollLeft,window.pageYOffset||document.documentElement.scrollTop);return e.top+n},handleScroll:function(){if(window.innerWidth>=991){var t=window.pageYOffset||document.documentElement.scrollTop,e=this.$refs.children,n=document.getElementById("footer");this.offsetTop=this.offset(this.$refs.parent),this.width=this.$refs.children.clientWidth,t>this.offsetTop?(e.style.position="fixed",e.style.top=0,e.style.width="".concat(this.width,"px")):e.removeAttribute("style"),t>this.offset(n)-e.clientHeight&&(e.style.position="absolute",e.style.top="".concat(this.offset(n)-e.clientHeight-this.offset(e),"px"))}}},mounted:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},o=n(44),s=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"parent",staticClass:"sticky-sidebar"},[e("div",{ref:"children",staticClass:"sticky-sidebar-inner"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=s.exports}}]);