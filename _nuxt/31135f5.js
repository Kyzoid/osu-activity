(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,5,7],{263:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("6d18fc2a",content,!0,{sourceMap:!1})},264:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("4ae17a91",content,!0,{sourceMap:!1})},265:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(24),n(2).a.extend({components:{},data:function(){return{}},computed:{},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.signInUser();case 2:case"end":return e.stop()}}),e)})))()},methods:{signInUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.signInAnonymously();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}})),l=(n(268),n(51)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"flex items-center container mx-auto w-3/5 h-full"},[n("NuxtLink",{staticClass:"logo-container",attrs:{to:"/"}},[n("div",{staticClass:"logo logo-bg"}),t._v(" "),n("div",{staticClass:"logo logo-white"})]),t._v(" "),n("div",{staticClass:"text-sm ml-4"},[n("NuxtLink",{staticClass:"p-2 hover:underline",attrs:{to:"/"}},[t._v("home")])],1)],1)])}),[],!1,null,"ef431520",null);e.default=component.exports;installComponents(component,{Header:n(265).default})},266:function(t,e,n){"use strict";n.r(e);n(270);var r=n(51),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("This website is not affiliated with "),n("a",{attrs:{href:"https://osu.ppy.sh/",target:"_blank"}},[t._v("osu.ppy.sh")]),t._v(".")])])}],!1,null,"db1ac26a",null);e.default=component.exports;installComponents(component,{Footer:n(266).default})},268:function(t,e,n){"use strict";n(263)},269:function(t,e,n){var r=n(77)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nheader[data-v-ef431520]{\n  margin-bottom:1.5rem;\n  display:flex;\n  height:3rem;\n  align-items:center;\n  background-color:hsl(var(--hsl-h2))\n}\n.logo-container[data-v-ef431520]{\n  position:relative;\n  height:2.5rem;\n  width:2.5rem\n}\n.logo-container:hover .logo-bg[data-v-ef431520], .logo-container:hover .logo-white[data-v-ef431520]{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-scale-x:1.1;\n  --tw-scale-y:1.1;\n  opacity:1;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-duration:100ms\n}\n.logo[data-v-ef431520]{\n  position:absolute;\n  top:0px;\n  left:0px;\n  height:100%;\n  width:100%;\n  background-size:contain;\n  background-repeat:no-repeat;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-duration:100ms\n}\n.logo-white[data-v-ef431520]{\n  background-image:url(/icons/osu-logo-white.svg)\n}\n.logo-bg[data-v-ef431520]{\n  opacity:0;\n  background-image:url(/icons/osu-logo-triangles.svg)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},270:function(t,e,n){"use strict";n(264)},271:function(t,e,n){var r=n(77)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-db1ac26a]{\n  position:absolute;\n  bottom:0px;\n  display:flex;\n  height:2rem;\n  width:100%;\n  align-items:center;\n  justify-content:center;\n  font-size:0.75rem;\n  line-height:1rem;\n  background-color:hsl(var(--hsl-b5));\n  color:hsl(var(--hsl-f1))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},275:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("6ce1080c",content,!0,{sourceMap:!1})},276:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("673be608",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(275)},278:function(t,e,n){var r=n(77)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.play-detail[data-v-5d5ff52f]{\n  display:flex;\n  justify-content:space-between;\n  border-radius:0.5rem;\n  background-color:hsl(var(--hsl-b3))\n}\n.play-detail[data-v-5d5ff52f]:hover{\n  background-color:hsl(var(--hsl-b2))\n}\n.play-detail:hover .play-detail--pp[data-v-5d5ff52f]{\n  background-color:hsl(var(--hsl-b3))\n}\n.play-detail:hover .play-detail--pp[data-v-5d5ff52f]:before{\n  background-color:hsl(var(--hsl-b2))\n}\n.play-detail--pp[data-v-5d5ff52f]{\n  position:relative;\n  display:flex;\n  height:100%;\n  width:7rem;\n  align-items:center;\n  justify-content:center;\n  border-top-right-radius:0.5rem;\n  border-bottom-right-radius:0.5rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:600;\n  color:hsl(var(--hsl-h1));\n  background-color:hsl(var(--hsl-b4))\n}\n.play-detail--pp[data-v-5d5ff52f]:before{\n  content:"";\n  z-index:10;\n  width:10px;\n  height:100%;\n  position:absolute;\n  left:-1px;\n  top:0;\n  background-color:hsl(var(--hsl-b3));\n  -webkit-clip-path:polygon(0 0,100% 50%,0 100%);\n  clip-path:polygon(0 0,100% 50%,0 100%)\n}\n.play-link[data-v-5d5ff52f]{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.play-link[data-v-5d5ff52f]:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  text-decoration:underline\n}\n.accuracy[data-v-5d5ff52f]{\n  color:#fc2\n}\n.difficulty[data-v-5d5ff52f]{\n  color:#ea0\n}\n.play-time[data-v-5d5ff52f]{\n  color:hsl(var(--hsl-f1))\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},279:function(t,e,n){"use strict";n(276)},280:function(t,e,n){var r=n(77)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.ring-loader[data-v-ee2b2d30]{\n  border-radius:9999px;\n  border:.2rem solid #fff;\n  border-left-color:transparent;\n  width:1rem;\n  height:1rem;\n  -webkit-animation:rotate-data-v-ee2b2d30 1s linear infinite;\n          animation:rotate-data-v-ee2b2d30 1s linear infinite\n}\n@-webkit-keyframes rotate-data-v-ee2b2d30{\n0%{\n    -webkit-animation-timing-function:cubic-bezier(.3333,.3333,.6667,.6667);\n            animation-timing-function:cubic-bezier(.3333,.3333,.6667,.6667);\n    transform:rotate(0)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes rotate-data-v-ee2b2d30{\n0%{\n    -webkit-animation-timing-function:cubic-bezier(.3333,.3333,.6667,.6667);\n            animation-timing-function:cubic-bezier(.3333,.3333,.6667,.6667);\n    transform:rotate(0)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},281:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({props:{play:{type:{},default:null}}}),o=(n(277),n(51)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play-detail"},[t.play?n("div",{staticClass:"flex items-center pl-5 py-1"},[n("img",{attrs:{src:"/icons/grades/"+t.play.rank+".svg",width:"40"}}),t._v(" "),n("div",{staticClass:"ml-2 flex flex-col"},[n("a",{staticClass:"play-link",attrs:{href:"https://osu.ppy.sh/beatmapsets/"+t.play.beatmapsetId+"#mania/"+t.play.beatmapId,target:"_blank"}},[n("span",[t._v(t._s(t.play.beatmapTitle))]),t._v(" "),n("span",{staticClass:"text-xs"},[t._v("by "+t._s(t.play.artist))])]),t._v(" "),n("div",{staticClass:"flex text-xs"},[n("span",{staticClass:"mr-2 difficulty"},[t._v(t._s(t.play.beatmapDifficulty))]),t._v(" "),n("span",{staticClass:"play-time"},[t._v(t._s(t.$dayjs(t.play.createdAt).fromNow()))])])])]):t._e(),t._v(" "),n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"flex items-center"},t._l(t.play.mods,(function(t){return n("img",{key:t,staticClass:"ml-1",attrs:{src:"/icons/mods/"+t+".png",width:"30.94"}})})),0),t._v(" "),n("span",{staticClass:"accuracy font-semibold mx-4"},[t._v(t._s((100*t.play.accuracy).toFixed(2))+"%")]),t._v(" "),n("div",{staticClass:"play-detail--pp"},[t._v("\n      "+t._s(Math.round(t.play.pp))),n("span",{staticStyle:{color:"hsl(var(--hsl-l3))"}},[t._v("pp")])])])])}),[],!1,null,"5d5ff52f",null);e.default=component.exports},282:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("06be8fbb",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({}),o=(n(279),n(51)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ring-loader"})}),[],!1,null,"ee2b2d30",null);e.default=component.exports},287:function(t,e,n){var r=n(7),o=n(184).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},288:function(t,e,n){"use strict";var r=n(7),o=n(80).findIndex,l=n(132),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},289:function(t,e,n){"use strict";n(282)},290:function(t,e,n){var r=n(77)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.event{\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  border-radius:0.5rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.375rem;\n  padding-bottom:0.375rem;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  background-color:hsl(var(--hsl-b3))\n}\n.event:hover{\n  background-color:hsl(var(--hsl-b2))\n}\n.play-timestamp{\n  color:hsl(var(--hsl-f1))\n}\n.pp-value{\n  color:hsl(var(--hsl-h1))\n}\n.pp{\n  color:hsl(var(--hsl-l3))\n}\n.events{\n  display:flex;\n  align-items:flex-end;\n  background-size:contain;\n  background-position:bottom;\n  background-repeat:no-repeat;\n  padding-left:2.5rem;\n  padding-right:2.5rem;\n  padding-top:1.25rem;\n  padding-bottom:1.25rem;\n  min-height:10rem;\n  background-color:hsl(var(--hsl-b5));\n  background-image:url(/icons/page-extra-footer.png)\n}\n.title{\n  padding-left:2.5rem;\n  padding-right:2.5rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  background-color:hsl(var(--hsl-d4))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},308:function(t,e,n){"use strict";n.r(e);n(42),n(32),n(40),n(63),n(64);var r=n(3),o=n(30),l=(n(24),n(52),n(287),n(288),n(9),n(36),n(2)),c=n(281);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=l.a.extend({components:{PlayDetail:c.default},data:function(){return{loading:!0,newScoresCount:0,loadingNewScores:!1,eventsHistory:[],jobs:[]}},computed:{computedEventsHistory:function(){return this.eventsHistory.map((function(t){var e=0;return t.lastRank&&t.newRank&&("gain_rank"===t.type&&(e=t.lastRank-t.newRank),"lose_rank"===t.type&&(e=t.newRank-t.lastRank)),f(f({},t),{},{rankDifference:e})}))}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getEventsHistory();case 2:return t.eventsHistory=e.sent,t.loading=!1,n=t.$fire.database.ref("jobs"),e.next=7,n.get();case 7:r=e.sent,o=r.val(),t.jobs=Object.values(o),n.on("child_added",(function(e){var n=e.val();-1===t.jobs.findIndex((function(t){return t.createdAt===n.createdAt}))&&(t.jobs.push(n),t.newScoresCount+=n.count)}));case 11:case"end":return e.stop()}}),e)})))()},methods:{refreshEventsHistory:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingNewScores=!0,e.next=3,t.getEventsHistory();case 3:t.eventsHistory=e.sent,t.loadingNewScores=!1,t.newScoresCount=0;case 6:case"end":return e.stop()}}),e)})))()},getEventsHistory:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,t.$fire.firestore.collection("events").orderBy("createdAt","desc").limit(50).get();case 3:return(r=e.sent).empty||r.forEach((function(t){var e=t.data();n.push(e)})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))()}}}),m=(n(289),n(51)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-full relative"},[n("Header"),t._v(" "),n("div",{staticClass:"body container mx-auto w-full px-2 md:px-0 lg:w-4/5 xl:w-3/5 pb-14"},[n("div",{staticClass:"shadow"},[t._m(0),t._v(" "),n("div",{staticClass:"events relative"},[t.newScoresCount?n("div",{staticClass:"absolute flex items-center justify-center top-1 left-1/2 transform -translate-x-1/2 rounded-full w-28 h-6 bg-blue-400 shadow",class:[t.loadingNewScores?"":"cursor-pointer"],on:{click:t.refreshEventsHistory}},[t.loadingNewScores?n("Loader",{attrs:{color:"white"}}):n("span",{staticClass:"text-sm text-white"},[t._v(t._s(t.newScoresCount)+" new scores")])],1):t._e(),t._v(" "),n("div",{staticClass:"w-full grid grid-cols-1 gap-3"},t._l(t.computedEventsHistory,(function(e,r){return n("div",{key:r},["gain_rank"===e.type?n("div",{staticClass:"event"},[n("p",[n("a",{staticClass:"link",attrs:{href:"https://osu.ppy.sh/users/"+e.userId}},[t._v(t._s(e.username))]),t._v("\n                gained\n                "),n("span",{staticClass:"text-green-400"},[t._v(t._s(e.rankDifference))]),t._v("\n                country "+t._s(e.rankDifference&&e.rankDifference>1?"ranks":"rank")+" (#"+t._s(e.lastRank)+"\n                → #"+t._s(e.newRank)+")\n              ")]),t._v(" "),n("span",{staticClass:"play-timestamp"},[t._v(t._s(t.$dayjs(e.createdAt).fromNow()))])]):t._e(),t._v(" "),"lose_rank"===e.type?n("div",{staticClass:"event"},[n("p",[n("a",{staticClass:"link",attrs:{href:"https://osu.ppy.sh/users/"+e.userId}},[t._v(t._s(e.username))]),t._v("\n                lost\n                "),n("span",{staticClass:"text-red-400"},[t._v(t._s(e.rankDifference))]),t._v("\n                country "+t._s(e.rankDifference&&e.rankDifference>1?"ranks":"rank")+" (#"+t._s(e.lastRank)+"\n                → #"+t._s(e.newRank)+")\n              ")]),t._v(" "),n("span",{staticClass:"play-timestamp"},[t._v(t._s(t.$dayjs(e.createdAt).fromNow()))])]):t._e(),t._v(" "),"PP_NEW"===e.type?n("div",{staticClass:"flex flex-col text-sm"},[n("div",{staticClass:"flex items-center mb-1"},[n("a",{staticClass:"flex items-center mr-1.5",attrs:{href:"https://osu.ppy.sh/users/"+e.userId}},[n("img",{staticClass:"mr-1 w-5 h-5 rounded-full",attrs:{src:e.avatarURL}}),t._v(" "),n("span",[t._v(t._s(e.username))])]),t._v(" "),n("span",[t._v("achieved:")])]),t._v(" "),n("PlayDetail",{attrs:{play:e}})],1):t._e()])})),0)])])]),t._v(" "),n("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{staticClass:"flex items-center"},[n("img",{attrs:{src:"/icons/home.svg",width:"30"}}),t._v(" "),n("div",{staticClass:"ml-4 flex flex-col"},[n("span",[t._v("Latest best performances")]),t._v(" "),n("span",{staticClass:"text-xs"},[t._v("latest best performance from the top 50 mania French players")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(265).default,Loader:n(286).default,PlayDetail:n(281).default,Footer:n(266).default})}}]);