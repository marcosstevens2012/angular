(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{358:function(t,n,e){},471:function(t,n,e){"use strict";var s=e(358);e.n(s).a},472:function(t,n){},554:function(t,n,e){"use strict";e.r(n);e(10);var s={name:"SBlogPost",components:{SBgImage:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,552))},SButton:function(){return e.e(3).then(e.bind(null,419))},SMeta:function(){return Promise.all([e.e(0),e.e(35)]).then(e.bind(null,542))}},props:{post:{type:Object,required:!0}}},i=(e(471),e(44)),o=e(472),a=e.n(o),r=Object(i.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"post-item"},[e("div",{staticClass:"post-image"},[e("nuxt-link",{attrs:{to:{name:"blog-id",params:{id:t.post.id}}}},[e("s-bg-image",{attrs:{image:t.post.media,size:"md"}})],1)],1),t._v(" "),e("div",{staticClass:"post-content"},[e("s-meta",{attrs:{items:[t.$moment(t.post.createdAt).format("DD.MM.YYYY"),"by "+t.post.author]}}),t._v(" "),e("h4",[e("nuxt-link",{attrs:{to:{name:"blog-id",params:{id:t.post.id}}}},[t._v(t._s(t.post.title))])],1),t._v(" "),e("p",[t._v(t._s(t.post.shortDescription))]),t._v(" "),e("s-button",{attrs:{size:"sm",variant:"outline-primary",to:{name:"blog-id",params:{id:t.post.id}}}},[t._v("Read more")])],1)])}),[],!1,null,null,null);"function"==typeof a.a&&a()(r);n.default=r.exports}}]);