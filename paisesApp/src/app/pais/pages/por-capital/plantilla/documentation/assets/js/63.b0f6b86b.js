(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{375:function(t,e,a){},487:function(t,e,a){"use strict";var n=a(375);a.n(n).a},563:function(t,e,a){"use strict";a.r(e);a(10);var n=a(314),o=a(312),s={name:"SHeaderDesktop",components:{SNavigation:function(){return a.e(29).then(a.bind(null,571))},SNavigationItem:function(){return a.e(37).then(a.bind(null,531))},SButton:function(){return a.e(3).then(a.bind(null,419))}},computed:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},Object(o.b)("cart",["items","productsTotal"])),Object(o.d)("shell",["headerLogoTheme","showHeaderLogo","isHeaderTransparent"])),Object(o.d)("settings",["navigation","menuDefaultView"])),Object(o.d)("theme",["headerLogoBackground","headerLogoStyle","headerLogoLight","headerLogoDark"])),methods:Object(n.a)({},Object(o.a)("cart",["showPanel"]))},i=(a(487),a(44)),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:{"absolute transparent":t.isHeaderTransparent},attrs:{id:"header"}},[a("b-container",[a("div",{staticClass:"module module-logo",class:[{hide:!t.showHeaderLogo},t.headerLogoBackground.toLowerCase(),t.headerLogoStyle.toLowerCase()]},[a("nuxt-link",{attrs:{to:"/"}},[a("img",{staticClass:"logo-light",attrs:{src:t.headerLogoLight,alt:"",width:"88"}}),t._v(" "),a("img",{staticClass:"logo-dark",attrs:{src:t.headerLogoDark,alt:"",width:"88"}})])],1),t._v(" "),a("div",{staticClass:"module module-navigation"},[a("s-navigation",{staticClass:"mr-4",attrs:{type:"desktop"}},t._l(t.navigation,(function(t,e){return a("s-navigation-item",{key:e,attrs:{type:"desktop",item:t}})})),1),t._v(" "),t.menuDefaultView?a("s-button",{attrs:{to:t.menuDefaultView,variant:t.isHeaderTransparent?"outline-primary":"outline-secondary"}},[t._v("Order")]):t._e()],1),t._v(" "),a("client-only",[a("button",{staticClass:"module module-cart right",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.showPanel()}}},[a("span",{staticClass:"cart-icon"},[a("i",{staticClass:"ti ti-shopping-cart"}),t._v(" "),t.items.length>0?a("span",{staticClass:"notification"},[t._v(t._s(t.items.length))]):t._e()]),t._v(" "),a("span",{staticClass:"cart-value"},[t._v(t._s(t.getCurrency(t.productsTotal)))])])])],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);