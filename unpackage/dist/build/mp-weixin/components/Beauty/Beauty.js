(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Beauty/Beauty"],{"0549":function(e,t,n){},3263:function(e,t,n){"use strict";var i=n("0549"),r=n.n(i);r.a},3431:function(e,t,n){"use strict";n.r(t);var i=n("9b78"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"77ee":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4ac2"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"36f2"))},shareBtn:function(){return n.e("components/share-btn/share-btn").then(n.bind(null,"228d"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"97f3":function(e,t,n){"use strict";n.r(t);var i=n("77ee"),r=n("3431");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("3263");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=c.exports},"9b78":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a34a")),r=n("4029");function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,i,r,a,o){try{var u=e[a](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function u(e){o(a,i,r,u,c,"next",e)}function c(e){o(a,i,r,u,c,"throw",e)}u(void 0)}))}}var c=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("36f2"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/share-btn/share-btn").then(function(){return resolve(n("228d"))}.bind(null,n)).catch(n.oe)},l={data:function(){return{sharedata:"",video1:[],article1:[],video2:[],article2:[],video3:[],article3:[]}},created:function(){this.getVideos1(),this.getArticle1(),this.getVideos2(),this.getArticle2(),this.getVideos3(),this.getArticle3()},methods:{shareOn:function(){this.$refs.sharepopup.open()},goArticleDetail:function(t){e.navigateTo({url:"/pages/ArticleDetail-Beauty/ArticleDetail-Beauty?id=".concat(t.id)})},goVideoDetail:function(t){e.navigateTo({url:"/pages/VideoDetail-Beauty/VideoDetail-Beauty?id=".concat(t.id)})},getVideos1:function(){var e=this;return u(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/index/list",{id:6,p:1,order:1,limit:1,channel_id:6});case 2:n=t.sent,console.log(n),e.video1=n;case 5:case"end":return t.stop()}}),t)})))()},getArticle1:function(){var e=this;return u(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/article/list",{id:6,p:1,order:1,limit:6,channel_id:6});case 2:n=t.sent,console.log(n),e.article1=n;case 5:case"end":return t.stop()}}),t)})))()},getVideos2:function(){var e=this;return u(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/index/list",{id:6,p:2,order:1,limit:1,channel_id:6});case 2:n=t.sent,console.log(n),e.video2=n;case 5:case"end":return t.stop()}}),t)})))()},getArticle2:function(){var e=this;return u(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/article/list",{id:6,p:2,order:1,limit:6,channel_id:6});case 2:n=t.sent,console.log(n),e.article2=n;case 5:case"end":return t.stop()}}),t)})))()},getVideos3:function(){var e=this;return u(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/index/list",{id:6,p:3,order:1,limit:1,channel_id:6});case 2:n=t.sent,console.log(n),e.video3=n;case 5:case"end":return t.stop()}}),t)})))()},getArticle3:function(){var e=this;return u(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/article/list",{id:6,p:3,order:1,limit:6,channel_id:6});case 2:n=t.sent,console.log(n),e.article3=n;case 5:case"end":return t.stop()}}),t)})))()},open:function(){this.$refs.sharepopup.open()}},components:{uniPopup:c,shareBtn:s}};t.default=l}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Beauty/Beauty-create-component',
    {
        'components/Beauty/Beauty-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("97f3"))
        })
    },
    [['components/Beauty/Beauty-create-component']]
]);
