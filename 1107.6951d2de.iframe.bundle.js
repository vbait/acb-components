"use strict";(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[1107],{"./dist/esm-es5/raul-alert.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{raul_alert:()=>RaulAlert});__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),RaulAlert=function(){function r(r){(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.r)(this,r),this.raulAlertDismiss=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.e)(this,"raulAlertDismiss",7),this.variant="information",this.dismissable=!1,this.rounded=!1}return r.prototype.componentWillLoad=function(){this.heading||console.error("Heading text is required for Raul alert component")},r.prototype.dismiss=function(){var r=this;this.el.classList.add("r-alert--fadeout"),setTimeout((function(){r.el.remove(),r.raulAlertDismiss.emit()}),1e3)},r.prototype.render=function(){var r,e=this;return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:(r={"r-alert":!0},r["r-alert__".concat(this.variant)]=!0,r["r-alert__rounded"]=this.rounded,r)},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"r-alert__heading"},this.heading,this.dismissable&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"r-alert__heading__close-button",onClick:function onClick(){return e.dismiss()},role:"button",tabindex:0,onKeyPress:function onKeyPress(r){"Enter"===r.key&&e.dismiss()}},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.h)("raul-icon",{icon:"close"}))),this.content&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"r-alert__content"},this.content),this.ctaMessage&&this.ctaUrl?(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.h)("a",{href:this.ctaUrl},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"r-alert__cta"},this.ctaMessage)):null)},Object.defineProperty(r.prototype,"el",{get:function get(){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_2__.d)(this)},enumerable:!1,configurable:!0}),r}();RaulAlert.style="raul-alert{font-size:0.875rem;display:block}raul-alert.r-alert--fadeout{opacity:0;-webkit-transition:opacity ease 1s;transition:opacity ease 1s}raul-alert .r-alert{width:100%;padding:1rem;font-size:0.875rem;height:auto}raul-alert .r-alert__rounded{border-radius:2px}raul-alert .r-alert__information{background-color:#E5F4FF;border-left:12px solid #0076CC}raul-alert .r-alert__information a{color:#0076CC}raul-alert .r-alert__success{background-color:#E7F3EB;border-left:12px solid #139C3E}raul-alert .r-alert__success a{color:#139C3E}raul-alert .r-alert__warning{background-color:#FEF8EA;border-left:12px solid #FEC12D}raul-alert .r-alert__warning a{color:#FEC12D}raul-alert .r-alert__danger{background-color:#FAE8E9;border-left:12px solid #D01A1F}raul-alert .r-alert__danger a{color:#D01A1F}raul-alert .r-alert__warning a{color:#BC8701}raul-alert .r-alert .r-alert__heading{font-weight:600;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}raul-alert .r-alert .r-alert__heading .r-alert__heading__close-button{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;height:2rem;width:2rem;min-height:32px;min-width:32px;margin-top:-4px;margin-right:-8px;cursor:pointer;color:rgba(32, 39, 55, 0.65)}raul-alert .r-alert .r-alert__heading .r-alert__heading__close-button:hover{color:#202737}raul-alert .r-alert .r-alert__content{padding-bottom:0.25rem;color:rgba(32, 39, 55, 0.8)}raul-alert .r-alert a{display:inline-block;text-decoration:none}raul-alert .r-alert a:focus{outline-color:#0076CC}"}}]);