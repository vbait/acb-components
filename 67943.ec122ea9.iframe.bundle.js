"use strict";(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[67943],{"./dist/esm-es5/raul-toast.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{raul_toast:()=>RaulToast});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.math.sign.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),_en_df8502ad_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/esm-es5/en-df8502ad.js"),__awaiter=function(t,e,a,r){function i(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function s(t){try{l(r.next(t))}catch(t){o(t)}}function n(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){t.done?a(t.value):i(t.value).then(s,n)}l((r=r.apply(t,e||[])).next())}))},__generator=function(t,e){var r,i,o,s,a={label:0,sent:function sent(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function n(t){return function(e){return l([t,e])}}function l(n){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,n[0]&&(a=0)),a;)try{if(r=1,i&&(o=2&n[0]?i.return:n[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;switch(i=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){a.label=n[1];break}if(6===n[0]&&a.label<o[1]){a.label=o[1],o=n;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(n);break}o[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};Math.sign||(Math.sign=function(t){return(t>0)-(t<0)||+t}),_en_df8502ad_js__WEBPACK_IMPORTED_MODULE_15__.T.addLocale(_en_df8502ad_js__WEBPACK_IMPORTED_MODULE_15__.e);var timeAgo=new _en_df8502ad_js__WEBPACK_IMPORTED_MODULE_15__.T("en-US"),RaulToast=function(){function t(t){(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.r)(this,t),this.timedOut=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.e)(this,"timedOut",7),this.toastAction=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.e)(this,"toastAction",7),this.severity=null,this.actions=null,this.refreshKey=0,this.hidden=!1}return t.prototype.componentWillLoad=function(){var t=this;this.timeout&&(this.timeoutTimer=window.setTimeout((function(){t.timedOut.emit(),t.dismiss()}),this.timeout),this.timeoutStartedAt=(new Date).getTime()),this.createdAt=new Date,this.refreshTimer=window.setInterval((function(){t.refreshKey=t.refreshKey+1}),6e4)},t.prototype.disconnectedCallback=function(){clearTimeout(this.timeoutTimer),clearInterval(this.refreshTimer)},t.prototype.handleMouseenter=function(){if(this.timeout){var t=this.timeoutLeft?this.timeoutLeft:this.timeout,e=(new Date).getTime();this.timeoutLeft=t-(e-this.timeoutStartedAt),clearTimeout(this.timeoutTimer)}},t.prototype.handleMouseleave=function(){var t=this;this.timeout&&(this.timeoutTimer=window.setTimeout((function(){t.timedOut.emit(),t.dismiss()}),this.timeoutLeft),this.timeoutStartedAt=(new Date).getTime())},t.prototype.dismiss=function(){return __awaiter(this,void 0,void 0,(function(){var t,e=this;return __generator(this,(function(a){return this.hidden=!0,t=1e3*parseFloat(window.getComputedStyle(this.toastEl).animationDuration),setTimeout((function(){return e.el.remove()}),t),[2]}))}))},t.prototype.createdAtTimeAgo=function(){return timeAgo.format(this.createdAt)},t.prototype.emitToastAction=function(t,e){t.stopPropagation(),this.toastAction.emit(e)},t.prototype.render=function(){var t=this;return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:{"r-toast":!0,"r-toast--has-avatar":!!this.avatar,"r-toast--hidden":this.hidden},ref:function ref(e){return t.toastEl=e}},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:{"r-toast__header":!0,"r-toast__header--read":this.read}},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__origin"},this.origin),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__timestamp"},this.createdAtTimeAgo()),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("button",{type:"button",class:"r-toast__dismiss",onClick:function onClick(e){return t.emitToastAction(e,"dismiss")}},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("raul-icon",{icon:"arrow-right-1"}))),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__body"},this.avatar&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__avatar"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("img",{src:this.avatar})),this.read&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__status-wrapper"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:{"r-toast__status":!0,"r-toast__status--unread":!0}})),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__content"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__title"},this.heading),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:{"r-toast__text":!0,truncate:this.read}},this.body),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__meta"},this.meta),this.severity&&"High"===this.severity&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__priority"},this.severity))),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("div",{class:"r-toast__footer"},this.actions&&this.actions.map((function(e){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.h)("button",{type:"button",class:"r-toast__action",onClick:function onClick(a){return t.emitToastAction(a,e.label)}},e.text)}))))},Object.defineProperty(t.prototype,"el",{get:function get(){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_14__.d)(this)},enumerable:!1,configurable:!0}),t}();RaulToast.style="raul-toast{display:block}raul-toast .r-toast{background-color:#fff;width:22.5rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:1rem;padding-bottom:1rem;margin-top:1rem;-webkit-box-shadow:0 8px 16px 0 rgba(82, 97, 115, 0.18);box-shadow:0 8px 16px 0 rgba(82, 97, 115, 0.18);position:relative;overflow:hidden;opacity:1;-webkit-animation:slideIn 1s;animation:slideIn 1s}raul-toast .r-toast__header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:0.25rem;font-size:0.75rem;position:relative}raul-toast .r-toast__header--read{padding-left:1rem}raul-toast .r-toast__origin,raul-toast .r-toast__timestamp{font-size:0.75rem}raul-toast .r-toast__timestamp{color:#9BA3A7;-webkit-transition:opacity 0.35s linear;transition:opacity 0.35s linear}raul-toast .r-toast__timestamp::first-letter{text-transform:capitalize}raul-toast .r-toast__body{display:-ms-flexbox;display:flex;margin-top:0.25rem}raul-toast .r-toast__avatar{width:3rem;height:3rem;margin-right:1rem}raul-toast .r-toast__avatar img{width:100%;height:auto}raul-toast .r-toast__dismiss{color:#C6CCD0;font-size:1.375rem;line-height:1;display:block;position:absolute;right:0;top:-4px;opacity:0;cursor:pointer;-webkit-transition:opacity 0.35s linear;transition:opacity 0.35s linear}raul-toast .r-toast__content{-ms-flex:1 1 0%;flex:1 1 0%;min-width:0}raul-toast .r-toast__title{font-size:0.875rem;font-weight:600;line-height:1.25;margin-bottom:0.5rem;margin-bottom:0}raul-toast .r-toast__priority{font-size:0.75rem;display:inline-block;margin-top:0.25rem;font-weight:500;padding:3px 6px;color:#D01A1F;background-color:#FAE8E9}raul-toast .r-toast__meta{font-size:0.75rem;color:#9BA3A7;font-style:italic}raul-toast .r-toast__footer{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:end;justify-content:flex-end}raul-toast .r-toast__action{color:#0076CC;text-align:right;font-weight:500;text-transform:uppercase;margin-top:0.25rem;margin-left:0.75rem}raul-toast .r-toast__action:hover{text-decoration:underline}raul-toast .r-toast__status-wrapper{padding-top:0.25rem;padding-bottom:0.25rem;margin-right:0.5rem}raul-toast .r-toast__status{width:9px;height:9px;border-radius:50%}raul-toast .r-toast__status--unread{background:color(lit)}raul-toast .r-toast--has-avatar .r-toast__header{margin-left:4rem}raul-toast .r-toast--hidden{-webkit-animation:slideOut 1s;animation:slideOut 1s}@media (max-width: 640px){raul-toast .r-toast{width:100%}}raul-toast .r-toast:hover .r-toast__timestamp{opacity:0}raul-toast .r-toast:hover .r-toast__dismiss{opacity:1}@-webkit-keyframes slideIn{from{opacity:0;-webkit-transform:translate(100%, -10px);transform:translate(100%, -10px)}to{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes slideIn{from{opacity:0;-webkit-transform:translate(100%, -10px);transform:translate(100%, -10px)}to{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@-webkit-keyframes slideOut{from{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{opacity:0;-webkit-transform:translate(100%, -10px);transform:translate(100%, -10px)}}@keyframes slideOut{from{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{opacity:0;-webkit-transform:translate(100%, -10px);transform:translate(100%, -10px)}}"}}]);