(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{271:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("6b6768a9",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(271)},287:function(t,e,n){var l=n(77)((function(i){return i[1]}));l.push([t.i,'/*purgecss start ignore*/\n.play-detail[data-v-75eb26bc]{\n  display:flex;\n  justify-content:space-between;\n  border-radius:0.5rem;\n  background-color:hsl(var(--hsl-b2))\n}\n.play-detail[data-v-75eb26bc]:hover{\n  background-color:hsl(var(--hsl-b1))\n}\n.play-detail:hover .play-detail--pp[data-v-75eb26bc]{\n  background-color:hsl(var(--hsl-b2))\n}\n.play-detail:hover .play-detail--pp[data-v-75eb26bc]:before{\n  background-color:hsl(var(--hsl-b1))\n}\n.play-detail--pp[data-v-75eb26bc]{\n  position:relative;\n  display:flex;\n  height:100%;\n  width:7rem;\n  align-items:center;\n  justify-content:center;\n  border-top-right-radius:0.5rem;\n  border-bottom-right-radius:0.5rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:600;\n  color:hsl(var(--hsl-h1));\n  background-color:hsl(var(--hsl-b3))\n}\n.play-detail--pp[data-v-75eb26bc]:before{\n  content:"";\n  z-index:10;\n  width:10px;\n  height:100%;\n  position:absolute;\n  left:-1px;\n  top:0;\n  background-color:hsl(var(--hsl-b2));\n  -webkit-clip-path:polygon(0 0,100% 50%,0 100%);\n  clip-path:polygon(0 0,100% 50%,0 100%)\n}\n.play-link[data-v-75eb26bc]{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.play-link[data-v-75eb26bc]:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  text-decoration:underline\n}\n.accuracy[data-v-75eb26bc]{\n  color:#fc2\n}\n.difficulty[data-v-75eb26bc]{\n  color:#ea0\n}\n.play-time[data-v-75eb26bc]{\n  color:hsl(var(--hsl-f1))\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},289:function(t,e,n){"use strict";n.r(e);var l=n(2).a.extend({props:{play:{type:Object,default:null}},created:function(){console.log(this.play)}}),r=(n(286),n(52)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play-detail leading-3"},[t.play?n("div",{staticClass:"flex items-center pl-5 py-1"},[n("img",{attrs:{src:"/icons/grades/"+t.play.rank+".svg",width:"40"}}),t._v(" "),n("div",{staticClass:"ml-2 flex flex-col"},[n("a",{staticClass:"play-link",attrs:{href:"https://osu.ppy.sh/beatmapsets/"+t.play.beatmapsetId+"#mania/"+t.play.beatmapId,target:"_blank"}},[n("span",{staticClass:"text-sm"},[t._v(t._s(t.play.beatmapTitle))]),t._v(" "),n("span",{staticClass:"text-xs"},[t._v("par "+t._s(t.play.artist))])]),t._v(" "),n("div",{staticClass:"flex text-xs"},[n("span",{staticClass:"mr-2 difficulty"},[t._v(t._s(t.play.beatmapDifficulty))]),t._v(" "),n("span",{staticClass:"play-time"},[t._v(t._s(t.$dayjs(t.play.createdAt).fromNow()))])])])]):t._e(),t._v(" "),n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"flex items-center"},t._l(t.play.mods,(function(t){return n("img",{key:t,staticClass:"ml-1",attrs:{src:"/icons/mods/"+t+".png",width:"30.94"}})})),0),t._v(" "),n("span",{staticClass:"accuracy font-semibold mx-4 text-sm"},[t._v(t._s((100*t.play.accuracy).toFixed(2))+"%")]),t._v(" "),n("div",{staticClass:"play-detail--pp"},[t._v("\n      "+t._s(Math.round(t.play.pp))),n("span",{staticClass:"text-xs",staticStyle:{color:"hsl(var(--hsl-l3))"}},[t._v("pp")])])])])}),[],!1,null,"75eb26bc",null);e.default=component.exports}}]);