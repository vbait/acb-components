/*! For license information please see 52976.023bbe45.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_vbait_core=self.webpackChunk_vbait_core||[]).push([[52976,21896,40492,335],{"./dist/esm-es5/index-5aa6aa3e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{w:()=>win});var win="undefined"!=typeof window?window:void 0},"./dist/esm-es5/ion-tab-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_tab_bar:()=>TabBar});__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm-es5/index-0d7ccb84.js"),_ionic_global_90e329a2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm-es5/ionic-global-90e329a2.js"),_keyboard_controller_ee6821b1_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/esm-es5/keyboard-controller-ee6821b1.js"),_theme_7ef00c83_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm-es5/theme-7ef00c83.js"),TabBar=(__webpack_require__("./dist/esm-es5/index-5aa6aa3e.js"),function(){function o(o){(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,o),this.ionTabBarChanged=(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,"ionTabBarChanged",7),this.keyboardCtrl=null,this.keyboardVisible=!1,this.translucent=!1}return o.prototype.selectedTabChanged=function(){void 0!==this.selectedTab&&this.ionTabBarChanged.emit({tab:this.selectedTab})},o.prototype.componentWillLoad=function(){this.selectedTabChanged()},o.prototype.connectedCallback=function(){var o=this;this.keyboardCtrl=(0,_keyboard_controller_ee6821b1_js__WEBPACK_IMPORTED_MODULE_3__.c)((function(t){o.keyboardVisible=t}))},o.prototype.disconnectedCallback=function(){this.keyboardCtrl&&this.keyboardCtrl.destroy()},o.prototype.render=function(){var o,t=this,r=t.color,a=t.translucent,e=t.keyboardVisible,n=(0,_ionic_global_90e329a2_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),i=e&&"top"!==this.el.getAttribute("slot");return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.H,{role:"tablist","aria-hidden":i?"true":null,class:(0,_theme_7ef00c83_js__WEBPACK_IMPORTED_MODULE_4__.c)(r,(o={},o[n]=!0,o["tab-bar-translucent"]=a,o["tab-bar-hidden"]=i,o))},(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null))},Object.defineProperty(o.prototype,"el",{get:function get(){return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.d)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(o,"watchers",{get:function get(){return{selectedTab:["selectedTabChanged"]}},enumerable:!1,configurable:!0}),o}());TabBar.style={ios:":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-400, #999999));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",md:":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}"}},"./dist/esm-es5/keyboard-controller-ee6821b1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createKeyboardController});var _index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm-es5/index-5aa6aa3e.js"),createKeyboardController=function createKeyboardController(i){var n,e,r,o=function o(){n=function n(){r=!0,i&&i(!0)},e=function e(){r=!1,i&&i(!1)},null===_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener("keyboardWillShow",n),null===_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener("keyboardWillHide",e)};return o(),{init:o,destroy:function a(){null===_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener("keyboardWillShow",n),null===_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_5aa6aa3e_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener("keyboardWillHide",e),n=e=void 0},isKeyboardVisible:function t(){return r}}}},"./dist/esm-es5/theme-7ef00c83.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");var __awaiter=function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function i(t){try{l(r.next(t))}catch(t){a(t)}}function u(t){try{l(r.throw(t))}catch(t){a(t)}}function l(t){t.done?n(t.value):o(t.value).then(i,u)}l((r=r.apply(t,e||[])).next())}))},__generator=function(t,e){var r,o,a,i,n={label:0,sent:function sent(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(e){return l([t,e])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(a=2&u[0]?o.return:u[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,u[1])).done)return a;switch(o=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(!(a=n.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){n=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(6===u[0]&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t],o=0}finally{r=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},hostContext=function hostContext(t,e){return null!==e.closest(t)},createColorClasses=function createColorClasses(t,e){var n;return"string"==typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(t)]=!0,n),e):e},getClassMap=function getClassMap(t){var e={};return function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function openURL(t,e,n,r){return __awaiter(void 0,void 0,void 0,(function(){var o;return __generator(this,(function(a){return null!=t&&"#"!==t[0]&&!SCHEME.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,n,r)]):[2,!1]}))}))}}}]);