"use strict";(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[66789,30287],{"./dist/esm-es5/MenuItem-d8a08267.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{M:()=>MenuItem});var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),MenuItem=function MenuItem(n){var e=n.title,i=n.icon,o=n.payload,d=n.url,t=n.disabled,u=n.onClickCallback,r=n.onBlurCallback,l=n.event,a=d&&!t?"a":"div";return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)(a,{class:{"r-dropdown-menu__menu-item":!0,"r-dropdown-menu__menu-item--disabled":t},onClick:function onClick(n){u&&u(n,o),l.emit(n,o)},onKeyDown:function onKeyDown(n){"Enter"===n.key&&u&&u(n,o),l.emit(n,o)},onBlur:function onBlur(n){r&&r(n,o)},role:d?void 0:"button",tabindex:t?void 0:0,href:d?t?"#":d:void 0,title:e},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"r-dropdown-menu-item__focus-utility",tabindex:t?void 0:-1},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"r-dropdown-menu__menu-item__container"},i&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"r-dropdown-menu__menu-item__icon"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("raul-icon",{icon:i})),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"r-dropdown-menu__menu-item__label"},e,(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))))}},"./dist/esm-es5/raul-action-menu-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{raul_action_menu_item:()=>RaulDropdownMenu});var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),_MenuItem_d8a08267_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm-es5/MenuItem-d8a08267.js"),RaulDropdownMenu=function(){function o(o){(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,o),this.clickCallback=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"clickCallback",7),this.blurCallback=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"blurCallback",7),this.optionSelected=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"optionSelected",7)}return o.prototype.render=function(){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_MenuItem_d8a08267_js__WEBPACK_IMPORTED_MODULE_1__.M,{url:this.url,disabled:this.disabled,payload:this.payload,onClickCallback:this.clickCallback,onBlurCallback:this.blurCallback,event:this.optionSelected},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},o}();RaulDropdownMenu.style='raul-action-menu{font-size:0.875rem}raul-action-menu raul-icon{font-size:1.25rem}raul-action-menu .r-dropdown-menu--show raul-icon{color:#0076CC}raul-action-menu .r-dropdown-menu__menu-item :not(.r-dropdown-menu__menu-item--disabled) .r-dropdown-menu__menu-item__label{color:#0076CC !important}raul-action-menu .r-dropdown-menu__menu-item :not(.r-dropdown-menu__menu-item--disabled) .r-dropdown-menu__menu-item__label:hover{text-decoration:underline !important}raul-dropdown-menu .r-dropdown-menu{opacity:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:inline-block}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle{position:relative;height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle:focus{outline:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle:focus .r-dropdown-menu__toggle__focus-utility{outline:1px solid #0076CC}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle .r-dropdown-menu__toggle__focus-utility{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle .r-dropdown-menu__toggle__focus-utility:focus{outline:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown{position:absolute;display:none;border-radius:0.125rem;-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);padding-top:0.5rem;padding-bottom:0.5rem;background-color:#fff;max-width:180px;z-index:2000}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown--show{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown--default{top:32px;right:0px;left:auto}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown--top{bottom:32px;right:0px;left:auto}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown--right{left:0px;right:auto}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item{color:#37474F;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;min-height:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-align:start;align-items:flex-start;opacity:1 !important}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item .r-dropdown-menu-item__focus-utility{border-width:1px;border-color:transparent;width:100%;min-height:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item .r-dropdown-menu-item__focus-utility:focus{outline:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item .r-dropdown-menu-item__focus-utility .r-dropdown-menu__menu-item__label{color:#37474F;opacity:1 !important}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item .r-dropdown-menu-item__focus-utility .r-dropdown-menu__menu-item__label:hover{text-decoration:underline}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item:focus{outline:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item:focus .r-dropdown-menu-item__focus-utility{border-width:1px;border-color:#0076CC}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item .r-dropdown-menu__menu-item__container{color:#37474F;padding-left:0.5rem;padding-right:0.5rem;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item .r-dropdown-menu__menu-item__container .r-dropdown-menu__menu-item__label{padding-left:0.5rem;padding-right:0.5rem;line-height:18px !important;font-size:12px !important;text-transform:capitalize;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item--disabled{pointer-events:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item--disabled .r-dropdown-menu__menu-item__label{color:#9BA3A7 !important}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown raul-action-menu-item .r-dropdown-menu-item--disabled:focus{outline:none}raul-dropdown-menu .r-dropdown-menu--color-active .r-dropdown-menu__menu-item__container{color:#0076CC}raul-dropdown-menu .r-dropdown-menu--emphasize-final raul-action-menu-item:last-child .r-dropdown-menu__menu-item::before{border-top-width:1px;border-color:#F7F8F9;margin-top:0.5rem;margin-bottom:0.5rem;content:"";display:block;width:100%}raul-dropdown-menu .r-dropdown-menu--dividers .r-dropdown-menu__dropdown{padding:0}raul-dropdown-menu .r-dropdown-menu--dividers .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item{border-bottom-width:1px;border-color:#F7F8F9}raul-dropdown-menu .r-dropdown-menu--dividers .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item:last-child{border-bottom:none}'}}]);