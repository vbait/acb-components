"use strict";(self.webpackChunk_vbait_core=self.webpackChunk_vbait_core||[]).push([[39803,335],{"./dist/esm-es5/ion-toolbar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_toolbar:()=>Toolbar});__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/esm-es5/index-0d7ccb84.js"),_ionic_global_90e329a2_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/esm-es5/ionic-global-90e329a2.js"),_theme_7ef00c83_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/esm-es5/theme-7ef00c83.js"),Toolbar=function(){function t(t){(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.r)(this,t),this.childrenStyles=new Map}return t.prototype.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find((function(t){return"start"===t.slot}));o&&o.classList.add("buttons-first-slot");var r=t.reverse(),a=r.find((function(t){return"end"===t.slot}))||r.find((function(t){return"primary"===t.slot}))||r.find((function(t){return"secondary"===t.slot}));a&&a.classList.add("buttons-last-slot")},t.prototype.childrenStyle=function(t){t.stopPropagation();var o=t.target.tagName,r=t.detail,a={},e=this.childrenStyles.get(o)||{},i=!1;Object.keys(r).forEach((function(t){var o="toolbar-".concat(t),n=r[t];n!==e[o]&&(i=!0),n&&(a[o]=!0)})),i&&(this.childrenStyles.set(o,a),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.f)(this))},t.prototype.render=function(){var t,o=(0,_ionic_global_90e329a2_js__WEBPACK_IMPORTED_MODULE_14__.g)(this),r={};return this.childrenStyles.forEach((function(t){Object.assign(r,t)})),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)(_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.H,{class:Object.assign(Object.assign({},r),(0,_theme_7ef00c83_js__WEBPACK_IMPORTED_MODULE_15__.c)(this.color,(t={},t[o]=!0,t["in-toolbar"]=(0,_theme_7ef00c83_js__WEBPACK_IMPORTED_MODULE_15__.h)("ion-toolbar",this.el),t)))},(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"toolbar-background"}),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"toolbar-container"},(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"start"}),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"secondary"}),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"toolbar-content"},(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",null)),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"primary"}),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"end"})))},Object.defineProperty(t.prototype,"el",{get:function get(){return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_13__.d)(this)},enumerable:!1,configurable:!0}),t}();Toolbar.style={ios:":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",md:":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"}},"./dist/esm-es5/theme-7ef00c83.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");var __awaiter=function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function i(t){try{l(r.next(t))}catch(t){a(t)}}function u(t){try{l(r.throw(t))}catch(t){a(t)}}function l(t){t.done?n(t.value):o(t.value).then(i,u)}l((r=r.apply(t,e||[])).next())}))},__generator=function(t,e){var r,o,a,i,n={label:0,sent:function sent(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(e){return l([t,e])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(a=2&u[0]?o.return:u[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,u[1])).done)return a;switch(o=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(!(a=n.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){n=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(6===u[0]&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t],o=0}finally{r=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},hostContext=function hostContext(t,e){return null!==e.closest(t)},createColorClasses=function createColorClasses(t,e){var n;return"string"==typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(t)]=!0,n),e):e},getClassMap=function getClassMap(t){var e={};return function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function openURL(t,e,n,r){return __awaiter(void 0,void 0,void 0,(function(){var o;return __generator(this,(function(a){return null!=t&&"#"!==t[0]&&!SCHEME.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,n,r)]):[2,!1]}))}))}},"./node_modules/core-js/modules/es.array.reverse.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),isArray=__webpack_require__("./node_modules/core-js/internals/is-array.js"),nativeReverse=uncurryThis([].reverse),test=[1,2];$({target:"Array",proto:!0,forced:String(test)===String(test.reverse())},{reverse:function reverse(){return isArray(this)&&(this.length=this.length),nativeReverse(this)}})}}]);