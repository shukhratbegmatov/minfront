(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{282:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNTI4NjM2IDAuODYyMDFDMC4yNjgyODcgMS4xMjIzNiAwLjI2ODI4NyAxLjU0NDQ3IDAuNTI4NjM2IDEuODA0ODJMNC43MjM5IDYuMDAwMDhMMC41Mjg2MzcgMTAuMTk1M0MwLjI2ODI4NyAxMC40NTU3IDAuMjY4Mjg3IDEwLjg3NzggMC41Mjg2MzcgMTEuMTM4MkMwLjc4ODk4NiAxMS4zOTg1IDEuMjExMSAxMS4zOTg1IDEuNDcxNDUgMTEuMTM4Mkw2LjEzODExIDYuNDcxNDlDNi4zOTg0NiA2LjIxMTE0IDYuMzk4NDYgNS43ODkwMyA2LjEzODExIDUuNTI4NjhMMS40NzE0NSAwLjg2MjAxQzEuMjExMSAwLjYwMTY2MSAwLjc4ODk4NiAwLjYwMTY2MSAwLjUyODYzNiAwLjg2MjAxWiIgZmlsbD0iI0I0QkRDMSIvPg0KPC9zdmc+DQo="},343:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[e("img",{attrs:{src:n(282),alt:""}})])}],c=(n(8),n(4),n(5),n(1),n(7),n(12),n(2)),l=n(0),o=n(37);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var C={name:"tenders-and-announcements",data:function(){return{perPage:5,currentPage:1,fields:[{key:"index",label:"#"},{key:"number",label:this.$t("lot_number")},{key:"date",label:this.$t("duration")},{key:"region",label:this.$t("area")},{key:"title",label:this.$t("project_name")},{key:"organizer",label:this.$t("contractor")},{key:"type",label:this.$t("tender_advertisement")},{key:"file_url",label:this.$t("download")}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({rows:function(){return this.tenders.length}},Object(o.b)({tenders:function(t){return t.tables.tenders}})),mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("tables/fetchTenders");case 2:case"end":return e.stop()}}),e)})))()}},M=n(31),component=Object(M.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"breadcrumbs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale}},[t._v("\n                "+t._s(t.$t("home"))+"\n              ")]),t._v(" "),t._m(0)],1),t._v(" "),n("li",[t._v(t._s(t.$t("tender_and_advertisement")))])])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("h1",{staticClass:"title"},[t._v(t._s(t.$t("tender_and_advertisement")))])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"table-wrap tenders-and-announcements"},[n("b-table",{attrs:{id:"my-table","per-page":t.perPage,"current-page":t.currentPage,striped:"",fields:t.fields,items:t.tenders,responsive:"lg",stacked:"lg"},scopedSlots:t._u([{key:"cell(index)",fn:function(data){return[t._v("\n                "+t._s(data.index+1)+"\n              ")]}},{key:"cell(date)",fn:function(data){return[t._v("\n                "+t._s(t.$moment(data.item.date).format("L"))),n("br"),t._v("\n                "+t._s(t.$moment(data.item.date).format("hh:mm:ss"))+"\n              ")]}},{key:"cell(type)",fn:function(data){return["Tender"===data.item.type?n("button",{staticClass:"btn btn-tender"},[t._v("Tender")]):n("button",{staticClass:"btn btn-advertisement"},[t._v("E’lon")])]}},{key:"cell(file_url)",fn:function(data){return[n("a",{attrs:{href:data.item.file_url,target:"_blank"}},[n("i",[n("svg",{attrs:{width:"19",height:"14",viewBox:"0 0 19 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8.80821 0.333313C8.31601 0.333313 7.91654 0.63198 7.91654 0.99998V6.33331H4.79571C4.67747 6.33331 4.56407 6.36843 4.48046 6.43094C4.39685 6.49346 4.34988 6.57824 4.34988 6.66665C4.34989 6.75505 4.39688 6.83982 4.48049 6.90232C4.4894 6.90913 4.4987 6.91564 4.50836 6.92185L9.06073 10.1315L9.09034 10.1523C9.25539 10.2684 9.47332 10.3331 9.69988 10.3333C9.92643 10.3331 10.1444 10.2684 10.3094 10.1523L10.3216 10.1445C10.3245 10.1419 10.3274 10.1393 10.3303 10.1367L14.881 6.92837C14.89 6.92255 14.8987 6.91647 14.9071 6.91014L14.914 6.90623C14.9158 6.90494 14.9175 6.90364 14.9193 6.90232C15.0029 6.83982 15.0499 6.75505 15.0499 6.66665C15.0499 6.57824 15.0029 6.49346 14.9193 6.43094C14.8357 6.36843 14.7223 6.33331 14.604 6.33331H11.4832V0.99998C11.4832 0.63198 11.0837 0.333313 10.5915 0.333313H9.69988H8.80821ZM1.67487 12.3333C1.55672 12.3321 1.43941 12.3484 1.32976 12.3813C1.22011 12.4143 1.12032 12.4632 1.03617 12.5252C0.952025 12.5872 0.885207 12.6612 0.8396 12.7427C0.793994 12.8242 0.770508 12.9116 0.770508 13C0.770508 13.0883 0.793994 13.1758 0.8396 13.2573C0.885207 13.3388 0.952025 13.4127 1.03617 13.4748C1.12032 13.5368 1.22011 13.5857 1.32976 13.6186C1.43941 13.6516 1.55672 13.6679 1.67487 13.6666H17.7249C17.843 13.6679 17.9603 13.6516 18.07 13.6186C18.1796 13.5857 18.2794 13.5368 18.3636 13.4748C18.4477 13.4127 18.5145 13.3388 18.5602 13.2573C18.6058 13.1758 18.6292 13.0883 18.6292 13C18.6292 12.9116 18.6058 12.8242 18.5602 12.7427C18.5145 12.6612 18.4477 12.5872 18.3636 12.5252C18.2794 12.4632 18.1796 12.4143 18.07 12.3813C17.9603 12.3484 17.843 12.3321 17.7249 12.3333H1.67487Z",fill:"#2B5CA8"}})])]),t._v(" "),n("span",[t._v(t._s(t.$t("download")))])])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-wrap"},[n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])}),r,!1,null,"426d2d04",null);e.default=component.exports}}]);