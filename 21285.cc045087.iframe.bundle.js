"use strict";(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[21285],{"./dist/esm-es5/raul-accordion-item-panel.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{raul_accordion_item_panel:()=>RaulAccordionItemPanel});__webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),RaulAccordionItemPanel=function(){function e(e){(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.r)(this,e)}return e.prototype.expandedChanged=function(){this.expanded?this.expand(this.el):this.collapse(this.el)},e.prototype.height=function(e){var t=e.offsetHeight;if(!t){var n=e.style.display;e.style.display="block",t=e.offsetHeight,e.style.display=n||""}return t},e.prototype.expand=function(e){var t=this.height(e),n=1e3*parseFloat(getComputedStyle(e).transitionDuration);e.classList.add("collapsing"),e.style.display="block",e.style.overflow="hidden",e.style.height="0",setTimeout((function(){e.style.height="".concat(t,"px"),setTimeout((function(){e.style.height=e.style.overflow="",e.classList.remove("collapsing")}),n)}),25)},e.prototype.collapse=function(e){var t=this.height(e),n=1e3*parseFloat(getComputedStyle(e).transitionDuration);e.classList.add("expanding"),e.style.overflow="hidden",e.style.height="".concat(t,"px"),setTimeout((function(){e.style.height="0",setTimeout((function(){e.style.height=e.style.overflow=e.style.display="",e.classList.remove("expanding")}),n)}),25)},e.prototype.render=function(){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.h)(_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.H,{id:"".concat(this.name,"-panel"),"aria-labelledby":"".concat(this.name,"-header")},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.h)("div",{class:"r-accordion__item__panel__content"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot",null)))},Object.defineProperty(e.prototype,"el",{get:function get(){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{expanded:["expandedChanged"]}},enumerable:!1,configurable:!0}),e}()}}]);