(self.webpackChunk_vbait_core=self.webpackChunk_vbait_core||[]).push([[9262,91058],{"./dist/esm-es5/raul-menu_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{raul_menu:()=>RaulMenu,raul_menu_dropdown:()=>RaulMenuDropdown});__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var _index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm-es5/index-0d7ccb84.js"),_popper_c0e2495a_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/esm-es5/popper-c0e2495a.js"),RaulMenu=function(){function e(e){(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.r)(this,e),this.raulMenuClose=(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"raulMenuClose",7),this.raulMenuOpen=(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"raulMenuOpen",7),this.raulMenuClick=(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"raulMenuClick",7),this.popper=null,this.dropdownId="raul-dropdown-".concat(dropdownCount++),this.open=!1,this.items=[],this.exclusive=!1,this.textSize="sm",this.textUnderline=!0,this.variant="links",this.border=!1}return e.prototype.componentDidUnload=function(){this.checkIfDropdownExists()},e.prototype.handleClickWrapper=function(e){this.open=!this.open,this.toggleMenuEl=e.target},e.prototype.handleOutsideClick=function(e){var o=!this.el.contains(e.target),n=e.target.querySelector("button"),t=!0;n&&(t=!n.disabled),this.open&&o&&t&&(this.open=!1)},e.prototype.handleKeydown=function(e){if(["Escape","Esc"].includes(e.key))this.open=!1;else if(["Tab"].includes(e.key)&&this.open&&this.items){var o=+e.target.getAttribute("item-index"),n=this.items.length-1;(e.shiftKey&&0===o||!e.shiftKey&&o===n)&&(this.open=!1)}},e.prototype.handleOpen=function(){this.open?this.createDropdown():this.destroyDropdown()},e.prototype.checkIfDropdownExists=function(){var e=document.getElementById(this.dropdownId);e&&e.remove()},e.prototype.createDropdown=function(){var e=this;if(!this.popper){document.body.appendChild(this.createDropdownElement());var o=this.dropdownRef();o.items=this.items,o.exclusive=this.exclusive,o.textSize=this.textSize,o.textUnderline=this.textUnderline,o.border=this.border,o.variant=this.variant,setTimeout((function(){e.popper=new _popper_c0e2495a_js__WEBPACK_IMPORTED_MODULE_5__.P(e.el,o,{placement:"bottom-start",modifiers:{offset:{offset:"0, 10px"},computeStyle:{gpuAcceleration:!1}}}),requestAnimationFrame((function(){e.dropdownRef().classList.add("r-menu-dropdown--open")}))}),50),this.raulMenuOpen.emit({value:!0}),this.menuEl=document.getElementById(this.dropdownId),this.menuEl.addEventListener("raulMenuDropdownClick",(function(o){o.stopPropagation(),e.raulMenuClick.emit(o.detail)}))}},e.prototype.destroyDropdown=function(){var e=this;this.popper&&(this.dropdownRef().classList.remove("r-menu-dropdown--open"),setTimeout((function(){e.dropdownRef().parentNode.removeChild(e.dropdownRef()),e.popper.destroy(),e.popper=null,e.menuEl=null}),150),this.toggleMenuEl.focus(),this.raulMenuClose.emit({value:!1}))},e.prototype.dropdownRef=function(){return document.getElementById(this.dropdownId)},e.prototype.createDropdownElement=function(){var e=document.createElement("raul-menu-dropdown");return e.id=this.dropdownId,e},Object.defineProperty(e.prototype,"el",{get:function get(){return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{open:["handleOpen"]}},enumerable:!1,configurable:!0}),e}(),dropdownCount=0;RaulMenu.style="raul-menu{display:inline-block}";var RaulMenuDropdown=function(){function e(e){(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.r)(this,e),this.raulMenuDropdownClick=(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"raulMenuDropdownClick",7),this.items=null,this.exclusive=!1,this.textSize="sm",this.variant="links",this.textUnderline=!0,this.border=!1}return e.prototype.componentDidLoad=function(){this.componentEl&&this.componentEl.focus()},e.prototype.handleClick=function(e,o){o.onClick&&o.onClick(e),this.raulMenuDropdownClick.emit(o)},e.prototype.render=function(){var e,o=this;return this.items&&(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.h)("div",{class:(e={"r-menu-dropdown":!0},e["r-menu-dropdown--".concat(this.variant)]=!0,e),tabindex:"0",ref:function ref(e){return o.componentEl=e}},this.items.map((function(e,r){return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.h)("div",{class:{"r-menu-dropdown__item":!0,"r-menu-dropdown__item--border":o.border}},function n(e,o){return e&&o&&(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.h)("div",{class:"r-menu-dropdown__spacer"})}(o.exclusive,r===o.items.length-1),function t(e,n){var t,r=e.url?"a":"button";return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.h)(r,{href:e.url?e.url:null,id:"r-menu-dropdown__button-".concat(n),class:(t={"r-menu-dropdown__button":!0,"r-menu-dropdown__button--disabled":e.disabled,"r-menu-dropdown__button--destructive":e.destructive,"r-menu-dropdown__button--underline":o.textUnderline,"r-menu-dropdown__button--border":o.border},t["r-text-".concat(o.textSize)]=!0,t),"aria-label":e.value?e.value:e.text,disabled:e.url?null:e.disabled,title:e.text,"item-index":n,onClick:function onClick(n){return o.handleClick(n,e)}},e.icon&&(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_4__.h)("raul-icon",{icon:e.icon}),e.text)}(e,r))})))},e}();RaulMenuDropdown.style='raul-menu-dropdown{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear;position:fixed;top:0;left:0;z-index:999999}raul-menu-dropdown .r-menu-dropdown{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear;border-radius:0.125rem;-webkit-box-shadow:0 8px 16px 0 rgba(82, 97, 115, 0.18);box-shadow:0 8px 16px 0 rgba(82, 97, 115, 0.18);background-color:#fff}raul-menu-dropdown .r-menu-dropdown--links{padding-top:0.5rem;padding-bottom:0.5rem}raul-menu-dropdown .r-menu-dropdown--links .r-menu-dropdown__item{color:#0076CC}raul-menu-dropdown .r-menu-dropdown--items .r-menu-dropdown__item{padding-top:0.25rem;padding-bottom:0.25rem;color:#202737}body[modality=keyboard] raul-menu-dropdown .r-menu-dropdown--items .r-menu-dropdown__button:focus{outline:none}body[modality=keyboard] raul-menu-dropdown .r-menu-dropdown--items .r-menu-dropdown__button:focus raul-icon{color:#0076CC}body[modality=keyboard] raul-menu-dropdown .r-menu-dropdown:focus{outline:none}body[modality=keyboard] raul-menu-dropdown .r-menu-dropdown .r-menu-dropdown__item:focus{outline:1px solid #0076CC}raul-menu-dropdown .r-menu-dropdown .r-menu-dropdown__item--border{border-width:1px;border-left-width:0;border-right-width:0;border-top-width:0;border-color:#EBEDEE}raul-menu-dropdown .r-menu-dropdown .r-menu-dropdown__item--border:last-child{border-bottom-width:0}raul-menu-dropdown .r-menu-dropdown__button{padding-left:1rem;padding-right:1rem;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;position:relative;display:block;line-height:2rem}raul-menu-dropdown .r-menu-dropdown__button--destructive{color:#D01A1F}raul-menu-dropdown .r-menu-dropdown__button--disabled{color:#9BA3A7;pointer-events:none}raul-menu-dropdown .r-menu-dropdown__button--icon raul-icon{padding-right:0.5rem}raul-menu-dropdown .r-menu-dropdown__button--underline:hover{text-decoration:underline}body[modality=keyboard] raul-menu-dropdown .r-menu-dropdown__button:focus{outline:1px solid #0076CC}raul-menu-dropdown .r-menu-dropdown__button raul-icon{margin-right:0.5rem;margin-top:-2px;font-size:inherit}raul-menu-dropdown .r-menu-dropdown__spacer::before{border-top-width:1px;border-color:#F7F8F9;content:"";display:block;width:100%;margin-top:8px;margin-bottom:8px}raul-menu-dropdown.r-menu-dropdown--open{opacity:1}raul-menu-dropdown.r-menu-dropdown--open .r-menu-dropdown{opacity:1}'},"./node_modules/core-js/internals/number-parse-int.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("./node_modules/core-js/internals/global.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("./node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("./node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"./node_modules/core-js/modules/es.parse-int.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("./node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})}}]);