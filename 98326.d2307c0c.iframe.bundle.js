"use strict";(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[98326,25656,335],{"./dist/esm-es5/index-ef87ee48.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{s:()=>sanitizeDOMString});__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");var sanitizeDOMString=function sanitizeDOMString(e){try{if(e instanceof IonicSafeString)return e.value;if(!isSanitizerEnabled()||"string"!=typeof e||""===e)return e;var r=document.createDocumentFragment(),n=document.createElement("div");r.appendChild(n),n.innerHTML=e,blockedTags.forEach((function(e){for(var n=r.querySelectorAll(e),t=n.length-1;t>=0;t--){var i=n[t];i.parentNode?i.parentNode.removeChild(i):r.removeChild(i);for(var a=getElementChildren(i),l=0;l<a.length;l++)sanitizeElement(a[l])}}));for(var t=getElementChildren(r),i=0;i<t.length;i++)sanitizeElement(t[i]);var a=document.createElement("div");a.appendChild(r);var l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},sanitizeElement=function sanitizeElement(e){if(!e.nodeType||1===e.nodeType){for(var r=e.attributes.length-1;r>=0;r--){var n=e.attributes.item(r),t=n.name;if(allowedAttributes.includes(t.toLowerCase())){var i=n.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(t)}else e.removeAttribute(t)}var a=getElementChildren(e);for(r=0;r<a.length;r++)sanitizeElement(a[r])}},getElementChildren=function getElementChildren(e){return null!=e.children?e.children:e.childNodes},isSanitizerEnabled=function isSanitizerEnabled(){var e,r=window,n=null===(e=null==r?void 0:r.Ionic)||void 0===e?void 0:e.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"],IonicSafeString=function e(e){this.value=e}},"./dist/esm-es5/ion-loading.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_loading:()=>Loading});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/esm-es5/ionic-global-2a86529a.js"),_overlays_cb9d2baf_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/esm-es5/overlays-cb9d2baf.js"),_index_ef87ee48_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/esm-es5/index-ef87ee48.js"),_theme_7ef00c83_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/esm-es5/theme-7ef00c83.js"),_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./dist/esm-es5/animation-6af445b7.js"),__awaiter=(__webpack_require__("./dist/esm-es5/hardware-back-button-fa04d6e9.js"),__webpack_require__("./dist/esm-es5/helpers-32639a35.js"),__webpack_require__("./dist/esm-es5/index-5aa6aa3e.js"),function(i,n,e,t){function a(i){return i instanceof e?i:new e((function(n){n(i)}))}return new(e||(e=Promise))((function(e,o){function r(i){try{d(t.next(i))}catch(i){o(i)}}function s(i){try{d(t.throw(i))}catch(i){o(i)}}function d(i){i.done?e(i.value):a(i.value).then(r,s)}d((t=t.apply(i,n||[])).next())}))}),__generator=function(i,n){var t,a,o,r,e={label:0,sent:function sent(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(i){return function(n){return d([i,n])}}function d(s){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(e=0)),e;)try{if(t=1,a&&(o=2&s[0]?a.return:s[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;switch(a=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,a=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(!(o=e.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){e=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){e.label=s[1];break}if(6===s[0]&&e.label<o[1]){e.label=o[1],o=s;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(s);break}o[2]&&e.ops.pop(),e.trys.pop();continue}s=n.call(i,e)}catch(i){s=[6,i],a=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},iosEnterAnimation=function iosEnterAnimation(i){var n=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)(),e=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)(),t=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])},iosLeaveAnimation=function iosLeaveAnimation(i){var n=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)(),e=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)(),t=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])},mdEnterAnimation=function mdEnterAnimation(i){var n=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)(),e=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)(),t=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])},mdLeaveAnimation=function mdLeaveAnimation(i){var n=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)(),e=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)(),t=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_16__.c)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])},Loading=function(){function i(i){var n=this;(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.r)(this,i),this.didPresent=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.e)(this,"ionLoadingDidPresent",7),this.willPresent=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.e)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.e)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){n.dismiss(void 0,_overlays_cb9d2baf_js__WEBPACK_IMPORTED_MODULE_13__.B)}}return i.prototype.connectedCallback=function(){(0,_overlays_cb9d2baf_js__WEBPACK_IMPORTED_MODULE_13__.p)(this.el)},i.prototype.componentWillLoad=function(){if(void 0===this.spinner){var i=(0,_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_12__.g)(this);this.spinner=_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_12__.c.get("loadingSpinner",_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_12__.c.get("spinner","ios"===i?"lines":"crescent"))}},i.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(n){switch(n.label){case 0:return[4,(0,_overlays_cb9d2baf_js__WEBPACK_IMPORTED_MODULE_13__.a)(this,"loadingEnter",iosEnterAnimation,mdEnterAnimation)];case 1:return n.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10)),[2]}}))}))},i.prototype.dismiss=function(i,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,_overlays_cb9d2baf_js__WEBPACK_IMPORTED_MODULE_13__.d)(this,i,n,"loadingLeave",iosLeaveAnimation,mdLeaveAnimation)},i.prototype.onDidDismiss=function(){return(0,_overlays_cb9d2baf_js__WEBPACK_IMPORTED_MODULE_13__.e)(this.el,"ionLoadingDidDismiss")},i.prototype.onWillDismiss=function(){return(0,_overlays_cb9d2baf_js__WEBPACK_IMPORTED_MODULE_13__.e)(this.el,"ionLoadingWillDismiss")},i.prototype.render=function(){var i,n=this,e=n.message,t=n.spinner,a=n.htmlAttributes,o=n.overlayIndex,r=(0,_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_12__.g)(this),s="loading-".concat(o,"-msg"),d=void 0!==e?s:null;return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.h)(_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.H,Object.assign({role:"dialog","aria-modal":"true","aria-labelledby":d,tabindex:"-1"},a,{style:{zIndex:"".concat(4e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,_theme_7ef00c83_js__WEBPACK_IMPORTED_MODULE_15__.g)(this.cssClass)),(i={},i[r]=!0,i["overlay-hidden"]=!0,i["loading-translucent"]=this.translucent,i))}),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{tabindex:"0"}),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:"loading-wrapper ion-overlay-wrapper"},t&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:"loading-spinner"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.h)("ion-spinner",{name:t,"aria-hidden":"true"})),void 0!==e&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:"loading-content",id:s,innerHTML:(0,_index_ef87ee48_js__WEBPACK_IMPORTED_MODULE_14__.s)(e)})),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{tabindex:"0"}))},Object.defineProperty(i.prototype,"el",{get:function get(){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_11__.d)(this)},enumerable:!1,configurable:!0}),i}();Loading.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},"./dist/esm-es5/theme-7ef00c83.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");var __awaiter=function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function i(t){try{l(r.next(t))}catch(t){a(t)}}function u(t){try{l(r.throw(t))}catch(t){a(t)}}function l(t){t.done?n(t.value):o(t.value).then(i,u)}l((r=r.apply(t,e||[])).next())}))},__generator=function(t,e){var r,o,a,i,n={label:0,sent:function sent(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(e){return l([t,e])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(a=2&u[0]?o.return:u[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,u[1])).done)return a;switch(o=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(!(a=n.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){n=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(6===u[0]&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t],o=0}finally{r=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},hostContext=function hostContext(t,e){return null!==e.closest(t)},createColorClasses=function createColorClasses(t,e){var n;return"string"==typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(t)]=!0,n),e):e},getClassMap=function getClassMap(t){var e={};return function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function openURL(t,e,n,r){return __awaiter(void 0,void 0,void 0,(function(){var o;return __generator(this,(function(a){return null!=t&&"#"!==t[0]&&!SCHEME.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,n,r)]):[2,!1]}))}))}}}]);