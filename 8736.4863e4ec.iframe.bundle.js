"use strict";(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[8736,30287],{"./dist/esm-es5/MenuItem-d8a08267.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{M:()=>MenuItem});var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),MenuItem=function MenuItem(n){var e=n.title,i=n.icon,o=n.payload,d=n.url,t=n.disabled,u=n.onClickCallback,r=n.onBlurCallback,l=n.event,a=d&&!t?"a":"div";return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)(a,{class:{"r-dropdown-menu__menu-item":!0,"r-dropdown-menu__menu-item--disabled":t},onClick:function onClick(n){u&&u(n,o),l.emit(n,o)},onKeyDown:function onKeyDown(n){"Enter"===n.key&&u&&u(n,o),l.emit(n,o)},onBlur:function onBlur(n){r&&r(n,o)},role:d?void 0:"button",tabindex:t?void 0:0,href:d?t?"#":d:void 0,title:e},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"r-dropdown-menu-item__focus-utility",tabindex:t?void 0:-1},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"r-dropdown-menu__menu-item__container"},i&&(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"r-dropdown-menu__menu-item__icon"},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("raul-icon",{icon:i})),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"r-dropdown-menu__menu-item__label"},e,(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))))}},"./dist/esm-es5/raul-dropdown-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{raul_dropdown_menu:()=>RaulDropdownMenu});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/esm-es5/index-da7bb7a5.js"),_MenuItem_d8a08267_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/esm-es5/MenuItem-d8a08267.js"),__awaiter=function(e,n,o,r){function t(e){return e instanceof o?e:new o((function(n){n(e)}))}return new(o||(o=Promise))((function(o,d){function i(e){try{p(r.next(e))}catch(e){d(e)}}function u(e){try{p(r.throw(e))}catch(e){d(e)}}function p(e){e.done?o(e.value):t(e.value).then(i,u)}p((r=r.apply(e,n||[])).next())}))},__generator=function(e,n){var r,t,d,i,o={label:0,sent:function sent(){if(1&d[0])throw d[1];return d[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(n){return p([e,n])}}function p(u){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(o=0)),o;)try{if(r=1,t&&(d=2&u[0]?t.return:u[0]?t.throw||((d=t.return)&&d.call(t),0):t.next)&&!(d=d.call(t,u[1])).done)return d;switch(t=0,d&&(u=[2&u[0],d.value]),u[0]){case 0:case 1:d=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,t=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(d=o.trys,(d=d.length>0&&d[d.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!d||u[1]>d[0]&&u[1]<d[3])){o.label=u[1];break}if(6===u[0]&&o.label<d[1]){o.label=d[1],d=u;break}if(d&&o.label<d[2]){o.label=d[2],o.ops.push(u);break}d[2]&&o.ops.pop(),o.trys.pop();continue}u=n.call(e,o)}catch(e){u=[6,e],t=0}finally{r=d=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},RaulDropdownMenu=function(){function e(e){var n=this;(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.r)(this,e),this.optionSelected=(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.e)(this,"optionSelected",7),this.open=!1,this.top=!1,this.right=!1,this.openMutated=!1,this.dividers=!1,this.emphasizeFinal=!1,this.color="primary",this.disabled=!1,this.handleToggleClick=function(){n.open=!n.open},this.handleKeyDown=function(e){"Enter"===e.key&&(n.open=!n.open)},this.handleMenuItemClick=function(e){n.optionSelected.emit(e)},this.handleMenuItemBlur=function(e){requestAnimationFrame((function(){var o=n.dropdown.querySelectorAll(".r-dropdown-menu__menu-item").length;e.target===n.dropdown.querySelectorAll(".r-dropdown-menu__menu-item")[o-1]&&document.activeElement!==n.dropdown.querySelectorAll(".r-dropdown-menu__menu-item")[o-2]&&(n.open=!1)}))},this.handleEscape=function(e){["Escape","Esc"].includes(e.key)&&(n.open=!1,n.toggle.focus())}}return e.prototype.componentDidLoad=function(){var e=this;window.addEventListener("click",(function(n){!e.open||e.dropdown.contains(n.target)||e.toggle.contains(n.target)||(e.open=!1)}),!0)},e.prototype.handleOpenChange=function(e,n){e&&!n&&(this.openMutated=!0),e||(this.top=!1,this.right=!1)},e.prototype.componentDidRender=function(){this.open&&this.openMutated&&this.checkViewportCollision(),this.openMutated=!1},e.prototype.checkViewportCollision=function(){var e=this.dropdown.getBoundingClientRect();this.top=e.bottom>window.innerHeight,this.right=e.right<e.width},e.prototype.closeMenu=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return this.open=!1,[2]}))}))},e.prototype.render=function(){var e=this;return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{class:{"r-dropdown-menu":!0,"r-dropdown-menu--dividers":this.dividers,"r-dropdown-menu--emphasize-final":this.emphasizeFinal,"r-dropdown-menu--color-active":"active"===this.color,"r-dropdown-menu--show":this.open},onKeyDown:this.handleEscape},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{onClick:this.handleToggleClick,class:"r-dropdown-menu__toggle",role:"button",tabIndex:0,onKeyDown:this.handleKeyDown,ref:function ref(n){return e.toggle=n}},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{class:"r-dropdown-menu__toggle__focus-utility",tabindex:-1},(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot",{name:"toggle"}))),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.h)("div",{ref:function ref(n){return e.dropdown=n},class:{"r-dropdown-menu__dropdown":!0,"r-dropdown-menu__dropdown--show":this.open,"r-dropdown-menu__dropdown--default":!this.top&&!this.right,"r-dropdown-menu__dropdown--top":this.top,"r-dropdown-menu__dropdown--right":this.right}},this.items&&this.items.map((function(n){return(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.h)(_MenuItem_d8a08267_js__WEBPACK_IMPORTED_MODULE_13__.M,Object.assign({},n,{onBlurCallback:e.handleMenuItemBlur,onClickCallback:e.handleMenuItemClick,disabled:e.disabled}))})),(0,_index_da7bb7a5_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot",null)))},Object.defineProperty(e,"watchers",{get:function get(){return{open:["handleOpenChange"]}},enumerable:!1,configurable:!0}),e}();RaulDropdownMenu.style='raul-dropdown-menu .r-dropdown-menu{opacity:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:inline-block}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle{position:relative;height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle:focus{outline:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle:focus .r-dropdown-menu__toggle__focus-utility{outline:1px solid #0076CC}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle .r-dropdown-menu__toggle__focus-utility{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__toggle .r-dropdown-menu__toggle__focus-utility:focus{outline:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown{position:absolute;display:none;border-radius:0.125rem;-webkit-box-shadow:0 8px 16px 0 rgba(82, 97, 115, 0.18);box-shadow:0 8px 16px 0 rgba(82, 97, 115, 0.18);padding-top:0.5rem;padding-bottom:0.5rem;background-color:#fff;max-width:180px;z-index:2000}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown--show{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown--default{top:32px;right:0px;left:auto}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown--top{bottom:32px;right:0px;left:auto}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown--right{left:0px;right:auto}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item{color:#37474F;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;min-height:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-align:start;align-items:flex-start;opacity:1 !important}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item .r-dropdown-menu-item__focus-utility{border-width:1px;border-color:transparent;width:100%;min-height:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item .r-dropdown-menu-item__focus-utility:focus{outline:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item .r-dropdown-menu-item__focus-utility .r-dropdown-menu__menu-item__label{color:#37474F;opacity:1 !important}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item .r-dropdown-menu-item__focus-utility .r-dropdown-menu__menu-item__label:hover{text-decoration:underline}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item:focus{outline:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item:focus .r-dropdown-menu-item__focus-utility{border-width:1px;border-color:#0076CC}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item .r-dropdown-menu__menu-item__container{color:#37474F;padding-left:0.5rem;padding-right:0.5rem;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item .r-dropdown-menu__menu-item__container .r-dropdown-menu__menu-item__label{padding-left:0.5rem;padding-right:0.5rem;line-height:18px !important;font-size:12px !important;text-transform:capitalize;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item--disabled{pointer-events:none}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item--disabled .r-dropdown-menu__menu-item__label{color:#9BA3A7 !important}raul-dropdown-menu .r-dropdown-menu .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item--disabled:focus{outline:none}raul-dropdown-menu .r-dropdown-menu--color-active .r-dropdown-menu__menu-item__container{color:#0076CC}raul-dropdown-menu .r-dropdown-menu--emphasize-final raul-action-menu-item:last-child .r-dropdown-menu__menu-item::before{border-top-width:1px;border-color:#F7F8F9;margin-top:0.5rem;margin-bottom:0.5rem;content:"";display:block;width:100%}raul-dropdown-menu .r-dropdown-menu--dividers .r-dropdown-menu__dropdown{padding:0}raul-dropdown-menu .r-dropdown-menu--dividers .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item{border-bottom-width:1px;border-color:#F7F8F9}raul-dropdown-menu .r-dropdown-menu--dividers .r-dropdown-menu__dropdown .r-dropdown-menu__menu-item:last-child{border-bottom:none}'}}]);