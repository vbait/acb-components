(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[82141,52646,46078,6254],{"./dist/esm-es5/helpers-32639a35.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>debounceEvent,i:()=>inheritAriaAttributes,j:()=>findItemLabel,k:()=>isEndSide,l:()=>focusElement,m:()=>assert,n:()=>getAriaLabel,o:()=>debounce,p:()=>pointerCoord,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now});__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.date.now.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js");var __spreadArray=function(e,r,a){if(a||2===arguments.length)for(var n,i=0,t=r.length;i<t;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return e.concat(n||Array.prototype.slice.call(r))},transitionEndAsync=function transitionEndAsync(e,r){return void 0===r&&(r=0),new Promise((function(a){transitionEnd(e,r,a)}))},transitionEnd=function transitionEnd(e,r,a){var i,t;void 0===r&&(r=0);var n={passive:!0},u=function u(){i&&i()},l=function l(r){void 0!==r&&e!==r.target||(u(),a(r))};return e&&(e.addEventListener("webkitTransitionEnd",l,n),e.addEventListener("transitionend",l,n),t=setTimeout(l,r+500),i=function i(){t&&(clearTimeout(t),t=void 0),e.removeEventListener("webkitTransitionEnd",l,n),e.removeEventListener("transitionend",l,n)}),u},componentOnReady=function componentOnReady(e,r){e.componentOnReady?e.componentOnReady().then((function(e){return r(e)})):raf((function(){return r(e)}))},inheritAttributes=function inheritAttributes(e,r){void 0===r&&(r=[]);var a={};return r.forEach((function(r){e.hasAttribute(r)&&(null!==e.getAttribute(r)&&(a[r]=e.getAttribute(r)),e.removeAttribute(r))})),a},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=function inheritAriaAttributes(e,r){var a=ariaAttributes;return r&&r.length>0&&(a=a.filter((function(e){return!r.includes(e)}))),inheritAttributes(e,a)},addEventListener=function addEventListener(e,r,a,i){var t;if("undefined"!=typeof window){var n=window,o=null===(t=null==n?void 0:n.Ionic)||void 0===t?void 0:t.config;if(o){var u=o.get("_ael");if(u)return u(e,r,a,i);if(o._ael)return o._ael(e,r,a,i)}}return e.addEventListener(r,a,i)},removeEventListener=function removeEventListener(e,r,a,i){var t;if("undefined"!=typeof window){var n=window,o=null===(t=null==n?void 0:n.Ionic)||void 0===t?void 0:t.config;if(o){var u=o.get("_rel");if(u)return u(e,r,a,i);if(o._rel)return o._rel(e,r,a,i)}}return e.removeEventListener(r,a,i)},getElementRoot=function getElementRoot(e,r){return void 0===r&&(r=e),e.shadowRoot||r},raf=function raf(e){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},hasShadowDom=function hasShadowDom(e){return!!e.shadowRoot&&!!e.attachShadow},findItemLabel=function findItemLabel(e){var r=e.closest("ion-item");return r?r.querySelector("ion-label"):null},focusElement=function focusElement(e){if(e.focus(),e.classList.contains("ion-focusable")){var r=e.closest("ion-app");r&&r.setFocus([e])}},getAriaLabel=function getAriaLabel(e,r){var a,i=e.getAttribute("aria-labelledby"),t=e.id,n=null!==i&&""!==i.trim()?i:r+"-lbl",o=null!==i&&""!==i.trim()?document.getElementById(i):findItemLabel(e);return o?(null===i&&(o.id=n),a=o.textContent,o.setAttribute("aria-hidden","true")):""!==t.trim()&&(o=document.querySelector('label[for="'.concat(t,'"]')))&&(""!==o.id?n=o.id:o.id=n="".concat(t,"-lbl"),a=o.textContent),{label:o,labelId:n,labelText:a}},renderHiddenInput=function renderHiddenInput(e,r,a,i,t){if(e||hasShadowDom(r)){var n=r.querySelector("input.aux-input");n||((n=r.ownerDocument.createElement("input")).type="hidden",n.classList.add("aux-input"),r.appendChild(n)),n.disabled=t,n.name=a,n.value=i||""}},clamp=function clamp(e,r,a){return Math.max(e,Math.min(r,a))},assert=function assert(e,r){if(!e){var a="ASSERT: "+r;throw console.error(a),new Error(a)}},now=function now(e){return e.timeStamp||Date.now()},pointerCoord=function pointerCoord(e){if(e){var r=e.changedTouches;if(r&&r.length>0){var a=r[0];return{x:a.clientX,y:a.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},isEndSide=function isEndSide(e){var r="rtl"===document.dir;switch(e){case"start":return r;case"end":return!r;default:throw new Error('"'.concat(e,'" is not a valid value for [side]. Use "start" or "end" instead.'))}},debounceEvent=function debounceEvent(e,r){var a=e._original||e;return{_original:e,emit:debounce(a.emit.bind(a),r)}},debounce=function debounce(e,r){var a;return void 0===r&&(r=0),function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];clearTimeout(a),a=setTimeout.apply(void 0,__spreadArray([e,r],i,!1))}},shallowEqualStringMap=function shallowEqualStringMap(e,r){if(null!=e||(e={}),null!=r||(r={}),e===r)return!0;var a=Object.keys(e);if(a.length!==Object.keys(r).length)return!1;for(var i=0,t=a;i<t.length;i++){var n=t[i];if(!(n in r))return!1;if(e[n]!==r[n])return!1}return!0}},"./dist/esm-es5/ion-tab-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_tab_button:()=>TabButton});__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/esm-es5/ionic-global-2a86529a.js"),_helpers_32639a35_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/esm-es5/helpers-32639a35.js"),TabButton=function(){function t(t){var o=this;(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.r)(this,t),this.ionTabButtonClick=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"ionTabButtonClick",7),this.inheritedAttributes={},this.disabled=!1,this.selected=!1,this.onKeyUp=function(t){"Enter"!==t.key&&" "!==t.key||o.selectTab(t)},this.onClick=function(t){o.selectTab(t)}}return t.prototype.onTabBarChanged=function(t){var o=t.target,e=this.el.parentElement;(t.composedPath().includes(e)||(null==o?void 0:o.contains(this.el)))&&(this.selected=this.tab===t.detail.tab)},t.prototype.componentWillLoad=function(){this.inheritedAttributes=Object.assign({},(0,_helpers_32639a35_js__WEBPACK_IMPORTED_MODULE_6__.c)(this.el,["aria-label"])),void 0===this.layout&&(this.layout=_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_5__.c.get("tabButtonLayout","icon-top"))},t.prototype.selectTab=function(t){void 0!==this.tab&&(this.disabled||this.ionTabButtonClick.emit({tab:this.tab,href:this.href,selected:this.selected}),t.preventDefault())},Object.defineProperty(t.prototype,"hasLabel",{get:function get(){return!!this.el.querySelector("ion-label")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasIcon",{get:function get(){return!!this.el.querySelector("ion-icon")},enumerable:!1,configurable:!0}),t.prototype.render=function(){var t,o=this,e=o.disabled,i=o.hasIcon,n=o.hasLabel,a=o.href,r=o.rel,l=o.target,s=o.layout,d=o.selected,b=o.tab,c=o.inheritedAttributes,g=(0,_ionic_global_2a86529a_js__WEBPACK_IMPORTED_MODULE_5__.g)(this),p={download:this.download,href:a,rel:r,target:l};return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.h)(_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.H,{onClick:this.onClick,onKeyup:this.onKeyUp,id:void 0!==b?"tab-button-".concat(b):null,class:(t={},t[g]=!0,t["tab-selected"]=d,t["tab-disabled"]=e,t["tab-has-label"]=n,t["tab-has-icon"]=i,t["tab-has-label-only"]=n&&!i,t["tab-has-icon-only"]=i&&!n,t["tab-layout-".concat(s)]=!0,t["ion-activatable"]=!0,t["ion-selectable"]=!0,t["ion-focusable"]=!0,t)},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.h)("a",Object.assign({},p,{class:"button-native",part:"native",role:"tab","aria-selected":d?"true":null,"aria-disabled":e?"true":null,tabindex:e?"-1":void 0},c),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.h)("span",{class:"button-inner"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot",null)),"md"===g&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(t.prototype,"el",{get:function get(){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)},enumerable:!1,configurable:!0}),t}();TabButton.style={ios:':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){padding-left:6px;padding-right:6px;padding-top:1px;padding-bottom:1px;left:calc(50% + 6px);top:4px;height:auto;font-size:12px;line-height:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}[dir=rtl] ::slotted(ion-badge),:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px);top:10px}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px);top:10px}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',md:':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}[dir=rtl] ::slotted(ion-icon),:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}::slotted(ion-badge){border-radius:8px;padding-left:2px;padding-right:2px;padding-top:3px;padding-bottom:2px;left:calc(50% + 6px);top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}[dir=rtl] ::slotted(ion-badge),:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%;top:8px}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%;top:16px}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){margin-right:6px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-icon){margin-right:unset;-webkit-margin-end:6px;margin-inline-end:6px}}:host(.tab-layout-icon-end) ::slotted(ion-icon){margin-left:6px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.tab-layout-icon-end) ::slotted(ion-icon){margin-left:unset;-webkit-margin-start:6px;margin-inline-start:6px}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%;top:16px}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}'}},"./node_modules/core-js/modules/es.date.now.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$Date=Date,thisTimeValue=uncurryThis($Date.prototype.getTime);$({target:"Date",stat:!0},{now:function now(){return thisTimeValue(new $Date)}})},"./node_modules/core-js/modules/es.date.to-string.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))}}]);