(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[4195,52646,46078,6254],{"./dist/esm-es5/helpers-32639a35.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>debounceEvent,i:()=>inheritAriaAttributes,j:()=>findItemLabel,k:()=>isEndSide,l:()=>focusElement,m:()=>assert,n:()=>getAriaLabel,o:()=>debounce,p:()=>pointerCoord,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now});__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.date.now.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js");var __spreadArray=function(e,r,a){if(a||2===arguments.length)for(var n,i=0,t=r.length;i<t;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return e.concat(n||Array.prototype.slice.call(r))},transitionEndAsync=function transitionEndAsync(e,r){return void 0===r&&(r=0),new Promise((function(a){transitionEnd(e,r,a)}))},transitionEnd=function transitionEnd(e,r,a){var i,t;void 0===r&&(r=0);var n={passive:!0},u=function u(){i&&i()},l=function l(r){void 0!==r&&e!==r.target||(u(),a(r))};return e&&(e.addEventListener("webkitTransitionEnd",l,n),e.addEventListener("transitionend",l,n),t=setTimeout(l,r+500),i=function i(){t&&(clearTimeout(t),t=void 0),e.removeEventListener("webkitTransitionEnd",l,n),e.removeEventListener("transitionend",l,n)}),u},componentOnReady=function componentOnReady(e,r){e.componentOnReady?e.componentOnReady().then((function(e){return r(e)})):raf((function(){return r(e)}))},inheritAttributes=function inheritAttributes(e,r){void 0===r&&(r=[]);var a={};return r.forEach((function(r){e.hasAttribute(r)&&(null!==e.getAttribute(r)&&(a[r]=e.getAttribute(r)),e.removeAttribute(r))})),a},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=function inheritAriaAttributes(e,r){var a=ariaAttributes;return r&&r.length>0&&(a=a.filter((function(e){return!r.includes(e)}))),inheritAttributes(e,a)},addEventListener=function addEventListener(e,r,a,i){var t;if("undefined"!=typeof window){var n=window,o=null===(t=null==n?void 0:n.Ionic)||void 0===t?void 0:t.config;if(o){var u=o.get("_ael");if(u)return u(e,r,a,i);if(o._ael)return o._ael(e,r,a,i)}}return e.addEventListener(r,a,i)},removeEventListener=function removeEventListener(e,r,a,i){var t;if("undefined"!=typeof window){var n=window,o=null===(t=null==n?void 0:n.Ionic)||void 0===t?void 0:t.config;if(o){var u=o.get("_rel");if(u)return u(e,r,a,i);if(o._rel)return o._rel(e,r,a,i)}}return e.removeEventListener(r,a,i)},getElementRoot=function getElementRoot(e,r){return void 0===r&&(r=e),e.shadowRoot||r},raf=function raf(e){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},hasShadowDom=function hasShadowDom(e){return!!e.shadowRoot&&!!e.attachShadow},findItemLabel=function findItemLabel(e){var r=e.closest("ion-item");return r?r.querySelector("ion-label"):null},focusElement=function focusElement(e){if(e.focus(),e.classList.contains("ion-focusable")){var r=e.closest("ion-app");r&&r.setFocus([e])}},getAriaLabel=function getAriaLabel(e,r){var a,i=e.getAttribute("aria-labelledby"),t=e.id,n=null!==i&&""!==i.trim()?i:r+"-lbl",o=null!==i&&""!==i.trim()?document.getElementById(i):findItemLabel(e);return o?(null===i&&(o.id=n),a=o.textContent,o.setAttribute("aria-hidden","true")):""!==t.trim()&&(o=document.querySelector('label[for="'.concat(t,'"]')))&&(""!==o.id?n=o.id:o.id=n="".concat(t,"-lbl"),a=o.textContent),{label:o,labelId:n,labelText:a}},renderHiddenInput=function renderHiddenInput(e,r,a,i,t){if(e||hasShadowDom(r)){var n=r.querySelector("input.aux-input");n||((n=r.ownerDocument.createElement("input")).type="hidden",n.classList.add("aux-input"),r.appendChild(n)),n.disabled=t,n.name=a,n.value=i||""}},clamp=function clamp(e,r,a){return Math.max(e,Math.min(r,a))},assert=function assert(e,r){if(!e){var a="ASSERT: "+r;throw console.error(a),new Error(a)}},now=function now(e){return e.timeStamp||Date.now()},pointerCoord=function pointerCoord(e){if(e){var r=e.changedTouches;if(r&&r.length>0){var a=r[0];return{x:a.clientX,y:a.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},isEndSide=function isEndSide(e){var r="rtl"===document.dir;switch(e){case"start":return r;case"end":return!r;default:throw new Error('"'.concat(e,'" is not a valid value for [side]. Use "start" or "end" instead.'))}},debounceEvent=function debounceEvent(e,r){var a=e._original||e;return{_original:e,emit:debounce(a.emit.bind(a),r)}},debounce=function debounce(e,r){var a;return void 0===r&&(r=0),function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];clearTimeout(a),a=setTimeout.apply(void 0,__spreadArray([e,r],i,!1))}},shallowEqualStringMap=function shallowEqualStringMap(e,r){if(null!=e||(e={}),null!=r||(r={}),e===r)return!0;var a=Object.keys(e);if(a.length!==Object.keys(r).length)return!1;for(var i=0,t=a;i<t.length;i++){var n=t[i];if(!(n in r))return!1;if(e[n]!==r[n])return!1}return!0}},"./dist/esm-es5/ion-virtual-scroll.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_virtual_scroll:()=>VirtualScroll});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.uint32-array.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.copy-within.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.every.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.last-index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reduce-right.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.set.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.some.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.subarray.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.to-locale-string.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array-buffer.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),_helpers_32639a35_js__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("./dist/esm-es5/helpers-32639a35.js"),__awaiter=function(t,e,i,r){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function s(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){t.done?i(t.value):n(t.value).then(a,s)}l((r=r.apply(t,e||[])).next())}))},__generator=function(t,e){var r,n,o,a,i={label:0,sent:function sent(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},createNode=function createNode(t,e){var i=getTemplate(t,e);return i&&null!==t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},getTemplate=function getTemplate(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},calcCells=function calcCells(t,e,i,r,n,o,a,s,l,h,c,u){for(var f=[],d=u+c,p=c;p<d;p++){var g,v=t[p];if(n)null!=(g=n(v,p,t))&&f.push({i:h++,type:"header",value:g,index:p,height:i?i(g,p):a,reads:i?0:2,visible:!!i});if(f.push({i:h++,type:"item",value:v,index:p,height:e?e(v,p):l,reads:e?0:2,visible:!!e}),o)null!=(g=o(v,p,t))&&f.push({i:h++,type:"footer",value:g,index:p,height:r?r(g,p):s,reads:r?0:2,visible:!!r})}return f},VirtualScroll=function(){function t(t){var e=this;(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__.r)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentWillLoad=function(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")},t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):(console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),[2]);case 1:return e.scrollEl=i.sent(),this.contentEl=t,this.calcCells(),this.updateState(),[2]}}))}))},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.disconnectedCallback=function(){this.scrollEl=void 0},t.prototype.onResize=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function positionForIndex(t,e,i){var r=e.find((function(e){return"item"===e.type&&e.index===t}));return r?i[r.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){return void 0===e&&(e=-1),__awaiter(this,void 0,void 0,(function(){var i,r,n;return __generator(this,(function(o){return this.items?(i=-1===e?this.items.length-t:e,r=function findCellIndex(t,e){var i=t.length>0?t[t.length-1].index:0;return 0===e?0:e===i+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,t),n=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i),this.cells=function inplaceUpdate(t,e,i){if(0===i&&e.length>=t.length)return e;for(var r=0;r<e.length;r++)t[r+i]=e[r];return t}(this.cells,n,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate(),[2]):[2]}))}))},t.prototype.checkEnd=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.items&&this.checkRange(this.lastItemLen),[2]}))}))},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__.i)(this.readVS.bind(this)),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__.w)(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this,e=t.contentEl,i=t.scrollEl,n=0,o=t.el;null!==o&&o!==e;)n+=o.offsetTop,o=o.offsetParent;this.viewportOffset=n,i&&(this.viewportHeight=i.offsetHeight,this.currentScrollTop=i.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,i=function getViewport(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),r=this.getHeightIndex(),n=function getRange(t,e,i){for(var r=e.top,n=e.bottom,o=0;o<t.length&&!(t[o]>r);o++);for(var a=Math.max(o-i-1,0);o<t.length&&!(t[o]>=n);o++);return{offset:a,length:Math.min(o+i,t.length)-a}}(r,i,2),o=function getShouldUpdate(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length}(t,this.range,n);o&&(this.range=n,function updateVDom(t,e,i,r){for(var n=0,o=t;n<o.length;n++){var a=o[n];a.change=0,a.d=!0}for(var s=[],l=r.offset+r.length,h=function h(r){var n=i[r],o=t.find((function(t){return t.d&&t.cell===n}));if(o){var a=e[r];a!==o.top&&(o.top=a,o.change=1),o.d=!1}else s.push(n)},c=r.offset;c<l;c++)h(c);for(var u=t.filter((function(t){return t.d})),f=function f(i){var r=u.find((function(t){return t.d&&t.cell.type===i.type})),n=i.i;r?(r.d=!1,r.change=2,r.cell=i,r.top=e[n]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[n]})},d=0,p=s;d<p.length;d++)f(p[d]);t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,r,this.cells,n),this.nodeRender?function doRender(t,e,i,r){for(var n,s,o=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),a=o.length,l=0;l<i.length;l++){var h=i[l],c=h.cell;if(2===h.change){if(l<a)e(s=o[l],c,l);else{var u=createNode(t,c.type);(s=null!==(n=e(u,c,l))&&void 0!==n?n:u).classList.add("virtual-item"),t.appendChild(s)}s.$ionCell=c}else s=o[l];0!==h.change&&(s.style.transform="translate3d(0,".concat(h.top,"px,0)"));var f=c.visible;h.visible!==f&&(f?s.classList.remove("virtual-loading"):s.classList.add("virtual-loading"),h.visible=f),c.reads>0&&(r(c,s),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__.f)(this))},t.prototype.updateCellHeight=function(t,e){var i=this,r=function r(){if(e.$ionCell===t){var r=window.getComputedStyle(e),n=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));i.setCellHeight(t,n)}};e?(0,_helpers_32639a35_js__WEBPACK_IMPORTED_MODULE_46__.d)(e,r):r()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)},t.prototype.updateState=function(){var t=!!(this.scrollEl&&this.cells.length>0);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function resizeBuffer(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function calcHeightIndex(t,e,i){for(var r=t[i],n=i;n<t.length;n++)t[n]=r,r+=e[n].height;return r}(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,r=e.value,n=e.index;switch(i){case"item":return this.renderItem(r,n);case"header":return this.renderHeader(r,n);case"footer":return this.renderFooter(r,n)}},t.prototype.render=function(){var t=this;return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__.h)(_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__.H,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__.h)(VirtualProxy,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))},Object.defineProperty(t.prototype,"el",{get:function get(){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_45__.d)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!1,configurable:!0}),t}(),VirtualProxy=function VirtualProxy(t,e,i){var r=t.dom;return i.map(e,(function(t,e){var i=r[e],n=t.vattrs||{},o=n.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},n),{class:o,style:Object.assign(Object.assign({},n.style),{transform:"translate3d(0,".concat(i.top,"px,0)")})})})}))};VirtualScroll.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},"./node_modules/core-js/internals/array-buffer-basic-detection.js":module=>{module.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},"./node_modules/core-js/internals/array-buffer.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__("./node_modules/core-js/internals/global.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),NATIVE_ARRAY_BUFFER=__webpack_require__("./node_modules/core-js/internals/array-buffer-basic-detection.js"),FunctionName=__webpack_require__("./node_modules/core-js/internals/function-name.js"),createNonEnumerableProperty=__webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js"),defineBuiltIns=__webpack_require__("./node_modules/core-js/internals/define-built-ins.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),anInstance=__webpack_require__("./node_modules/core-js/internals/an-instance.js"),toIntegerOrInfinity=__webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js"),toLength=__webpack_require__("./node_modules/core-js/internals/to-length.js"),toIndex=__webpack_require__("./node_modules/core-js/internals/to-index.js"),IEEE754=__webpack_require__("./node_modules/core-js/internals/ieee754.js"),getPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js"),setPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js"),getOwnPropertyNames=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-names.js").f,defineProperty=__webpack_require__("./node_modules/core-js/internals/object-define-property.js").f,arrayFill=__webpack_require__("./node_modules/core-js/internals/array-fill.js"),arraySlice=__webpack_require__("./node_modules/core-js/internals/array-slice-simple.js"),setToStringTag=__webpack_require__("./node_modules/core-js/internals/set-to-string-tag.js"),InternalStateModule=__webpack_require__("./node_modules/core-js/internals/internal-state.js"),PROPER_FUNCTION_NAME=FunctionName.PROPER,CONFIGURABLE_FUNCTION_NAME=FunctionName.CONFIGURABLE,getInternalState=InternalStateModule.get,setInternalState=InternalStateModule.set,NativeArrayBuffer=global.ArrayBuffer,$ArrayBuffer=NativeArrayBuffer,ArrayBufferPrototype=$ArrayBuffer&&$ArrayBuffer.prototype,$DataView=global.DataView,DataViewPrototype=$DataView&&$DataView.prototype,ObjectPrototype=Object.prototype,Array=global.Array,RangeError=global.RangeError,fill=uncurryThis(arrayFill),reverse=uncurryThis([].reverse),packIEEE754=IEEE754.pack,unpackIEEE754=IEEE754.unpack,packInt8=function(number){return[255&number]},packInt16=function(number){return[255&number,number>>8&255]},packInt32=function(number){return[255&number,number>>8&255,number>>16&255,number>>24&255]},unpackInt32=function(buffer){return buffer[3]<<24|buffer[2]<<16|buffer[1]<<8|buffer[0]},packFloat32=function(number){return packIEEE754(number,23,4)},packFloat64=function(number){return packIEEE754(number,52,8)},addGetter=function(Constructor,key){defineProperty(Constructor.prototype,key,{get:function(){return getInternalState(this)[key]}})},get=function(view,count,index,isLittleEndian){var intIndex=toIndex(index),store=getInternalState(view);if(intIndex+count>store.byteLength)throw RangeError("Wrong index");var bytes=getInternalState(store.buffer).bytes,start=intIndex+store.byteOffset,pack=arraySlice(bytes,start,start+count);return isLittleEndian?pack:reverse(pack)},set=function(view,count,index,conversion,value,isLittleEndian){var intIndex=toIndex(index),store=getInternalState(view);if(intIndex+count>store.byteLength)throw RangeError("Wrong index");for(var bytes=getInternalState(store.buffer).bytes,start=intIndex+store.byteOffset,pack=conversion(+value),i=0;i<count;i++)bytes[start+i]=pack[isLittleEndian?i:count-i-1]};if(NATIVE_ARRAY_BUFFER){var INCORRECT_ARRAY_BUFFER_NAME=PROPER_FUNCTION_NAME&&"ArrayBuffer"!==NativeArrayBuffer.name;if(fails((function(){NativeArrayBuffer(1)}))&&fails((function(){new NativeArrayBuffer(-1)}))&&!fails((function(){return new NativeArrayBuffer,new NativeArrayBuffer(1.5),new NativeArrayBuffer(NaN),1!=NativeArrayBuffer.length||INCORRECT_ARRAY_BUFFER_NAME&&!CONFIGURABLE_FUNCTION_NAME})))INCORRECT_ARRAY_BUFFER_NAME&&CONFIGURABLE_FUNCTION_NAME&&createNonEnumerableProperty(NativeArrayBuffer,"name","ArrayBuffer");else{($ArrayBuffer=function ArrayBuffer(length){return anInstance(this,ArrayBufferPrototype),new NativeArrayBuffer(toIndex(length))}).prototype=ArrayBufferPrototype;for(var key,keys=getOwnPropertyNames(NativeArrayBuffer),j=0;keys.length>j;)(key=keys[j++])in $ArrayBuffer||createNonEnumerableProperty($ArrayBuffer,key,NativeArrayBuffer[key]);ArrayBufferPrototype.constructor=$ArrayBuffer}setPrototypeOf&&getPrototypeOf(DataViewPrototype)!==ObjectPrototype&&setPrototypeOf(DataViewPrototype,ObjectPrototype);var testView=new $DataView(new $ArrayBuffer(2)),$setInt8=uncurryThis(DataViewPrototype.setInt8);testView.setInt8(0,2147483648),testView.setInt8(1,2147483649),!testView.getInt8(0)&&testView.getInt8(1)||defineBuiltIns(DataViewPrototype,{setInt8:function setInt8(byteOffset,value){$setInt8(this,byteOffset,value<<24>>24)},setUint8:function setUint8(byteOffset,value){$setInt8(this,byteOffset,value<<24>>24)}},{unsafe:!0})}else ArrayBufferPrototype=($ArrayBuffer=function ArrayBuffer(length){anInstance(this,ArrayBufferPrototype);var byteLength=toIndex(length);setInternalState(this,{bytes:fill(Array(byteLength),0),byteLength}),DESCRIPTORS||(this.byteLength=byteLength)}).prototype,DataViewPrototype=($DataView=function DataView(buffer,byteOffset,byteLength){anInstance(this,DataViewPrototype),anInstance(buffer,ArrayBufferPrototype);var bufferLength=getInternalState(buffer).byteLength,offset=toIntegerOrInfinity(byteOffset);if(offset<0||offset>bufferLength)throw RangeError("Wrong offset");if(offset+(byteLength=void 0===byteLength?bufferLength-offset:toLength(byteLength))>bufferLength)throw RangeError("Wrong length");setInternalState(this,{buffer,byteLength,byteOffset:offset}),DESCRIPTORS||(this.buffer=buffer,this.byteLength=byteLength,this.byteOffset=offset)}).prototype,DESCRIPTORS&&(addGetter($ArrayBuffer,"byteLength"),addGetter($DataView,"buffer"),addGetter($DataView,"byteLength"),addGetter($DataView,"byteOffset")),defineBuiltIns(DataViewPrototype,{getInt8:function getInt8(byteOffset){return get(this,1,byteOffset)[0]<<24>>24},getUint8:function getUint8(byteOffset){return get(this,1,byteOffset)[0]},getInt16:function getInt16(byteOffset){var bytes=get(this,2,byteOffset,arguments.length>1?arguments[1]:void 0);return(bytes[1]<<8|bytes[0])<<16>>16},getUint16:function getUint16(byteOffset){var bytes=get(this,2,byteOffset,arguments.length>1?arguments[1]:void 0);return bytes[1]<<8|bytes[0]},getInt32:function getInt32(byteOffset){return unpackInt32(get(this,4,byteOffset,arguments.length>1?arguments[1]:void 0))},getUint32:function getUint32(byteOffset){return unpackInt32(get(this,4,byteOffset,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function getFloat32(byteOffset){return unpackIEEE754(get(this,4,byteOffset,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function getFloat64(byteOffset){return unpackIEEE754(get(this,8,byteOffset,arguments.length>1?arguments[1]:void 0),52)},setInt8:function setInt8(byteOffset,value){set(this,1,byteOffset,packInt8,value)},setUint8:function setUint8(byteOffset,value){set(this,1,byteOffset,packInt8,value)},setInt16:function setInt16(byteOffset,value){set(this,2,byteOffset,packInt16,value,arguments.length>2?arguments[2]:void 0)},setUint16:function setUint16(byteOffset,value){set(this,2,byteOffset,packInt16,value,arguments.length>2?arguments[2]:void 0)},setInt32:function setInt32(byteOffset,value){set(this,4,byteOffset,packInt32,value,arguments.length>2?arguments[2]:void 0)},setUint32:function setUint32(byteOffset,value){set(this,4,byteOffset,packInt32,value,arguments.length>2?arguments[2]:void 0)},setFloat32:function setFloat32(byteOffset,value){set(this,4,byteOffset,packFloat32,value,arguments.length>2?arguments[2]:void 0)},setFloat64:function setFloat64(byteOffset,value){set(this,8,byteOffset,packFloat64,value,arguments.length>2?arguments[2]:void 0)}});setToStringTag($ArrayBuffer,"ArrayBuffer"),setToStringTag($DataView,"DataView"),module.exports={ArrayBuffer:$ArrayBuffer,DataView:$DataView}},"./node_modules/core-js/internals/ieee754.js":module=>{var $Array=Array,abs=Math.abs,pow=Math.pow,floor=Math.floor,log=Math.log,LN2=Math.LN2;module.exports={pack:function(number,mantissaLength,bytes){var exponent,mantissa,c,buffer=$Array(bytes),exponentLength=8*bytes-mantissaLength-1,eMax=(1<<exponentLength)-1,eBias=eMax>>1,rt=23===mantissaLength?pow(2,-24)-pow(2,-77):0,sign=number<0||0===number&&1/number<0?1:0,index=0;for((number=abs(number))!=number||number===1/0?(mantissa=number!=number?1:0,exponent=eMax):(exponent=floor(log(number)/LN2),number*(c=pow(2,-exponent))<1&&(exponent--,c*=2),(number+=exponent+eBias>=1?rt/c:rt*pow(2,1-eBias))*c>=2&&(exponent++,c/=2),exponent+eBias>=eMax?(mantissa=0,exponent=eMax):exponent+eBias>=1?(mantissa=(number*c-1)*pow(2,mantissaLength),exponent+=eBias):(mantissa=number*pow(2,eBias-1)*pow(2,mantissaLength),exponent=0));mantissaLength>=8;)buffer[index++]=255&mantissa,mantissa/=256,mantissaLength-=8;for(exponent=exponent<<mantissaLength|mantissa,exponentLength+=mantissaLength;exponentLength>0;)buffer[index++]=255&exponent,exponent/=256,exponentLength-=8;return buffer[--index]|=128*sign,buffer},unpack:function(buffer,mantissaLength){var mantissa,bytes=buffer.length,exponentLength=8*bytes-mantissaLength-1,eMax=(1<<exponentLength)-1,eBias=eMax>>1,nBits=exponentLength-7,index=bytes-1,sign=buffer[index--],exponent=127&sign;for(sign>>=7;nBits>0;)exponent=256*exponent+buffer[index--],nBits-=8;for(mantissa=exponent&(1<<-nBits)-1,exponent>>=-nBits,nBits+=mantissaLength;nBits>0;)mantissa=256*mantissa+buffer[index--],nBits-=8;if(0===exponent)exponent=1-eBias;else{if(exponent===eMax)return mantissa?NaN:sign?-1/0:1/0;mantissa+=pow(2,mantissaLength),exponent-=eBias}return(sign?-1:1)*mantissa*pow(2,exponent-mantissaLength)}}},"./node_modules/core-js/internals/to-index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toIntegerOrInfinity=__webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js"),toLength=__webpack_require__("./node_modules/core-js/internals/to-length.js"),$RangeError=RangeError;module.exports=function(it){if(void 0===it)return 0;var number=toIntegerOrInfinity(it),length=toLength(number);if(number!==length)throw $RangeError("Wrong length or index");return length}},"./node_modules/core-js/modules/es.array-buffer.slice.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),ArrayBufferModule=__webpack_require__("./node_modules/core-js/internals/array-buffer.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),toAbsoluteIndex=__webpack_require__("./node_modules/core-js/internals/to-absolute-index.js"),toLength=__webpack_require__("./node_modules/core-js/internals/to-length.js"),speciesConstructor=__webpack_require__("./node_modules/core-js/internals/species-constructor.js"),ArrayBuffer=ArrayBufferModule.ArrayBuffer,DataView=ArrayBufferModule.DataView,DataViewPrototype=DataView.prototype,nativeArrayBufferSlice=uncurryThis(ArrayBuffer.prototype.slice),getUint8=uncurryThis(DataViewPrototype.getUint8),setUint8=uncurryThis(DataViewPrototype.setUint8);$({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:fails((function(){return!new ArrayBuffer(2).slice(1,void 0).byteLength}))},{slice:function slice(start,end){if(nativeArrayBufferSlice&&void 0===end)return nativeArrayBufferSlice(anObject(this),start);for(var length=anObject(this).byteLength,first=toAbsoluteIndex(start,length),fin=toAbsoluteIndex(void 0===end?length:end,length),result=new(speciesConstructor(this,ArrayBuffer))(toLength(fin-first)),viewSource=new DataView(this),viewTarget=new DataView(result),index=0;first<fin;)setUint8(viewTarget,index++,getUint8(viewSource,first++));return result}})},"./node_modules/core-js/modules/es.date.now.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$Date=Date,thisTimeValue=uncurryThis($Date.prototype.getTime);$({target:"Date",stat:!0},{now:function now(){return thisTimeValue(new $Date)}})},"./node_modules/core-js/modules/es.date.to-string.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))},"./node_modules/core-js/modules/es.typed-array.uint32-array.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/internals/typed-array-constructor.js")("Uint32",(function(init){return function Uint32Array(data,byteOffset,length){return init(this,data,byteOffset,length)}}))}}]);