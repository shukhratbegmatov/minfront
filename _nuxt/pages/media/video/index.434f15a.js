(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{282:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNTI4NjM2IDAuODYyMDFDMC4yNjgyODcgMS4xMjIzNiAwLjI2ODI4NyAxLjU0NDQ3IDAuNTI4NjM2IDEuODA0ODJMNC43MjM5IDYuMDAwMDhMMC41Mjg2MzcgMTAuMTk1M0MwLjI2ODI4NyAxMC40NTU3IDAuMjY4Mjg3IDEwLjg3NzggMC41Mjg2MzcgMTEuMTM4MkMwLjc4ODk4NiAxMS4zOTg1IDEuMjExMSAxMS4zOTg1IDEuNDcxNDUgMTEuMTM4Mkw2LjEzODExIDYuNDcxNDlDNi4zOTg0NiA2LjIxMTE0IDYuMzk4NDYgNS43ODkwMyA2LjEzODExIDUuNTI4NjhMMS40NzE0NSAwLjg2MjAxQzEuMjExMSAwLjYwMTY2MSAwLjc4ODk4NiAwLjYwMTY2MSAwLjUyODYzNiAwLjg2MjAxWiIgZmlsbD0iI0I0QkRDMSIvPg0KPC9zdmc+DQo="},283:function(t,e,n){t.exports=n.p+"img/footer-logo.21583fe.svg"},348:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[e("img",{attrs:{src:n(282),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("i",[e("img",{attrs:{src:n(283),alt:""}})])}],o=(n(8),n(4),n(5),n(1),n(7),n(0)),l=(n(12),n(2)),c=n(118),v=n(37);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"videos",data:function(){return{page:1,index:null}},components:{CoolLightBox:c.a},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("media/fetchArchiveVideos");case 2:case"end":return e.stop()}}),e)})))()},computed:d(d({},Object(v.b)({archiveVideos:function(t){return t.media.archiveVideos},perPage:function(t){return t.media.perPage},total:function(t){return t.media.total},currentPage:function(t){return t.media.currentPage}})),{},{formatDate:function(){var t=this,e="uz_Latn";return"ru"==this.$i18n.locale?e="ru_RU":"en"==this.$i18n.locale&&(e="en_EN"),function(n){return t.$moment(n).locale(e).format("Do MMM")}},formatTime:function(){var t=this;return function(e){return t.$moment(e).format("h:mm")}}}),created:function(){this.page=this.currentPage},watch:{page:function(t){this.$store.dispatch("media/fetchArchiveVideosPage",t)}}},f=n(31),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-media"},[n("div",{staticClass:"breadcrumbs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale}},[t._v("\n                "+t._s(t.$t("home"))+"\n              ")]),t._v(" "),t._m(0)],1),t._v(" "),n("li",[t._v(t._s(t.$t("videos")))])])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-9"},[n("div",{staticClass:"inner"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("videos"))+" ")]),t._v(" "),n("div",{staticClass:"videos"},[n("div",{staticClass:"row"},t._l(t.archiveVideos,(function(image,e){return n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"item"},[n("div",{key:e,staticClass:"image",style:{backgroundImage:"url("+image.thumb+")"},on:{click:function(n){t.index=e}}},[n("span",{staticClass:"play-ico"},[n("svg",{attrs:{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 2.19512V17.8049C0 19.5393 1.73494 20.551 3.18072 19.6838L16.9157 11.879C18.3614 11.0117 18.3614 8.98826 16.9157 8.12105L3.18072 0.31617C1.73494 -0.551039 0 0.460704 0 2.19512Z",fill:"white"}})])])]),t._v(" "),n("a",{key:e,staticClass:"title d-block",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.index=e}}},[t._v("\n                    "+t._s(image.title)+"\n                  ")]),t._v(" "),n("p",[n("span",{domProps:{textContent:t._s(t.formatDate(image.publish_date))}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.formatTime(image.publish_date))}})])])])})),0)]),t._v(" "),n("CoolLightBox",{attrs:{items:t.archiveVideos,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),n("div",{staticClass:"pagination-wrap"},[n("b-pagination",{attrs:{"total-rows":t.total,"per-page":t.perPage,"first-number":"","last-number":"","aria-controls":"stadiums-items"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)]),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"side-bar"},[n("div",{staticClass:"side-bar-nav"},[n("div",{staticClass:"side-bar-nav-head d-flex"},[t._m(1),t._v(" "),n("h6",[t._v(" "+t._s(t.$t("press_service")))])]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news/sport"}},[t._v(t._s(t.$t("sport_news")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/regional-news"}},[t._v(t._s(t.$t("region_news")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/vazirlik-nashrlari"}},[t._v(t._s(t.$t("ministerial_edition")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/anonslar-va-elonlar-1"}},[t._v(t._s(t.$t("announcement")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/hayati-yigilishlari"}},[t._v(t._s(t.$t("board_meeting")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/oav-akkreditatsiyadan-otkazish"}},[t._v(t._s(t.$t("media_accredited_firing")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news/yangiliklar"}},[t._v(t._s(t.$t("news_of_uzbekistan")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/media/video"}},[t._v(t._s(t.$t("videos")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/press-relizlar"}},[t._v(t._s(t.$t("press_realization")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/media/fotos"}},[t._v(t._s(t.$t("fotos")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/media-is-about-us"}},[t._v(t._s(t.$t("media_is_about_us")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/vazirning-nutqlari"}},[t._v(t._s(t.$t("minister_speeches")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/intervyu"}},[t._v(t._s(t.$t("interview")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/quiz-archive"}},[t._v(t._s(t.$t("polls")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/faq"}},[t._v(t._s(t.$t("questions_and_answers")))])],1)])])])])])])])}),r,!1,null,"4e703bdd",null);e.default=component.exports}}]);