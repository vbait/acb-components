"use strict";(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[87222,25656],{"./dist/esm-es5/index-ef87ee48.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{s:()=>sanitizeDOMString});__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");var sanitizeDOMString=function sanitizeDOMString(e){try{if(e instanceof IonicSafeString)return e.value;if(!isSanitizerEnabled()||"string"!=typeof e||""===e)return e;var r=document.createDocumentFragment(),n=document.createElement("div");r.appendChild(n),n.innerHTML=e,blockedTags.forEach((function(e){for(var n=r.querySelectorAll(e),t=n.length-1;t>=0;t--){var i=n[t];i.parentNode?i.parentNode.removeChild(i):r.removeChild(i);for(var a=getElementChildren(i),l=0;l<a.length;l++)sanitizeElement(a[l])}}));for(var t=getElementChildren(r),i=0;i<t.length;i++)sanitizeElement(t[i]);var a=document.createElement("div");a.appendChild(r);var l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},sanitizeElement=function sanitizeElement(e){if(!e.nodeType||1===e.nodeType){for(var r=e.attributes.length-1;r>=0;r--){var n=e.attributes.item(r),t=n.name;if(allowedAttributes.includes(t.toLowerCase())){var i=n.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(t)}else e.removeAttribute(t)}var a=getElementChildren(e);for(r=0;r<a.length;r++)sanitizeElement(a[r])}},getElementChildren=function getElementChildren(e){return null!=e.children?e.children:e.childNodes},isSanitizerEnabled=function isSanitizerEnabled(){var e,r=window,n=null===(e=null==r?void 0:r.Ionic)||void 0===e?void 0:e.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"],IonicSafeString=function e(e){this.value=e}},"./dist/esm-es5/ion-infinite-scroll-content.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_infinite_scroll_content:()=>InfiniteScrollContent});var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm-es5/ionic-global-2a86529a.js"),_index_ef87ee48_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm-es5/index-ef87ee48.js"),InfiniteScrollContent=function(){function n(n){(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,n)}return n.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var n=(0,_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);this.loadingSpinner=_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_1__.c.get("infiniteLoadingSpinner",_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner","ios"===n?"lines":"crescent"))}},n.prototype.render=function(){var n,i=(0,_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(n={},n[i]=!0,n["infinite-scroll-content-".concat(i)]=!0,n)},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"infinite-loading"},this.loadingSpinner&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"infinite-loading-spinner"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-spinner",{name:this.loadingSpinner})),void 0!==this.loadingText&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"infinite-loading-text",innerHTML:(0,_index_ef87ee48_js__WEBPACK_IMPORTED_MODULE_2__.s)(this.loadingText)})))},n}();InfiniteScrollContent.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);