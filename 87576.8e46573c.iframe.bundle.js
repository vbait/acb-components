"use strict";(self.webpackChunk_vbait_core=self.webpackChunk_vbait_core||[]).push([[87576],{"./dist/esm-es5/raul-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{raul_button:()=>ButtonComponent});__webpack_require__("./node_modules/core-js/modules/web.timers.js");var _index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm-es5/index-0d7ccb84.js");var ButtonComponent=function(){function t(t){(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,t),this.iconOnly=!1,this.variant="secondary",this.size="default",this.type="button",this.disabled=!1,this.add=!1,this.delete=!1}return t.prototype.componentDidLoad=function(){this.btnTextEl.innerHTML||(this.iconOnly=!0)},t.prototype.render=function(){var t,o=this;return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(t={"r-button":!0},t["r-button--".concat(this.variant)]=!!this.variant,t["r-button--".concat(this.size)]=!!this.size,t)},(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"r-button__focus-ring",ref:function ref(t){return o.focusRingEl=t}}),function e(){var t=o.href?"a":"button";return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)(t,{class:"r-button__element",type:o.type,href:o.href&&!o.disabled?o.href:null,target:o.href&&!o.disabled?o.target:null,"aria-disabled":o.disabled,disabled:o.disabled,value:o.value,onMouseDown:function onMouseDown(t){return function ripple(t,o){var e=o.getBoundingClientRect(),u=e.left,l=e.top,a=e.width,b=e.height,i=a>b?a:b,c_left=u+window.scrollX,c_top=l+window.scrollY,d=t.pageX-c_left-i/2,s=t.pageY-c_top-i/2,_=document.createElement("span");_.className="r-ripple",_.style.borderRadius="50%",_.style.backgroundColor="currentColor",_.style.transform="scale(0)",_.style.position="absolute",_.style.opacity="0.3",_.style.transition="all 0.".concat(600,"s linear"),_.style.width=i+"px",_.style.height=i+"px",_.style.top=s+"px",_.style.left=d+"px",o.appendChild(_),setTimeout((function(){_.style.transform="scale(2)",_.style.opacity="0"})),setTimeout((function(){_.remove()}),650)}(t,o.focusRingEl)}})}(),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{"r-button__content":!0,"r-button__content--icon-only":this.iconOnly}},function r(){return o.add?(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("raul-icon",{icon:"add-2"}):o.delete?(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("raul-icon",{icon:"bin"}):null}(),function n(){if(o.icon&&"control"===o.variant&&!o.add&&!o.delete)return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("raul-icon",{icon:iconReference[o.icon]})}(),(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{ref:function ref(t){return o.btnTextEl=t}},(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null))))},t}(),iconReference={filter:"content-filter",delete:"bin",undo:"undo","right-arrow-v":"arrow-right-v","left-arrow-v":"arrow-left-v",refresh:"synchronize-1",edit:"pencil-1",close:"close",download:"data-download-8","right-arrow":"arrow-right-1","left-arrow":"arrow-left-1",sync:"synchronize-alert",overflow:"navigation-show-more-vertical",preview:"visible",upload:"data-upload-8",save:"floppydisk",settings:"cog-gear-settings",redo:"redo",today:"calendar-check-2",comments:"chat-bubble-square-1",call:"phone",email:"email-envelope","zoom-in":"add-2","zoom-out":"subtract-2",collapse:"shrink-diagonal-1",expand:"expand-7"};ButtonComponent.style='raul-button{display:inline-block;vertical-align:middle;font-size:0.875rem}raul-button[type=button],raul-button[type=reset],raul-button[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none}raul-button .r-button{position:relative}raul-button .r-button__content{position:relative;border-width:1px;border-color:transparent;font-size:0.875rem;font-weight:500;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:2.5rem;padding-left:1rem;padding-right:1rem;width:100%;border-radius:9999px;white-space:nowrap;min-width:5rem;-webkit-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, color 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, color 0.15s ease-in-out}raul-button .r-button__content raul-icon{margin-top:-1px;font-size:1.25rem;margin-right:0.375rem}raul-button .r-button__content--icon-only{padding:0;min-width:40px}raul-button .r-button__content--icon-only raul-icon{margin-right:0}raul-button .r-button__element{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;opacity:0;height:100%;width:100%;z-index:10;border-radius:9999px}raul-button .r-button__element[disabled],raul-button .r-button__element[aria-disabled]{pointer-events:none}body[modality=keyboard] raul-button .r-button__element:focus~.r-button__content::before{position:absolute;border-width:1px;border-color:transparent;border-radius:9999px;content:"";bottom:-4px;left:-4px;right:-4px;top:-4px}raul-button .r-button__focus-ring{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;height:100%;width:100%;z-index:10;border-radius:9999px}raul-button .r-button--small .r-button__content{font-size:0.75rem;height:2rem}raul-button .r-button--small .r-button__content--icon-only{min-width:2rem}raul-button .r-button--small .r-button__content raul-icon{font-size:1rem}raul-button .r-button--control .r-button__content,raul-button .r-button--control .r-button__element,raul-button .r-button--control .r-button__focus-ring{border-radius:0.125rem}body[modality=keyboard] raul-button .r-button--control .r-button__element:focus~.r-button__content::before{border-radius:0.125rem}raul-button .r-button--primary .r-button__content{color:#fff;background-color:#0076CC;border-color:#0076CC}raul-button .r-button--primary .r-button__focus-ring{color:#fff}raul-button .r-button--primary .r-button__element:hover~.r-button__content{background-color:#0069B7;border-color:#0069B7}raul-button .r-button--primary .r-button__element[disabled]~.r-button__content,raul-button .r-button--primary .r-button__element[aria-disabled]~.r-button__content{background-color:#EBEDEE;border-color:#EBEDEE;color:#9BA3A7}body[modality=keyboard] raul-button .r-button--primary .r-button__element:focus~.r-button__content::before{border-color:#0076CC}raul-button .r-button--secondary .r-button__content{color:#0076CC;background-color:#fff;border-color:#0076CC}raul-button .r-button--secondary .r-button__focus-ring{color:#0076CC}raul-button .r-button--secondary .r-button__element:hover~.r-button__content{border-color:#0069B7;color:#0069B7}raul-button .r-button--secondary .r-button__element[disabled]~.r-button__content,raul-button .r-button--secondary .r-button__element[aria-disabled]~.r-button__content{border-color:#C6CCD0;color:#9BA3A7}body[modality=keyboard] raul-button .r-button--secondary .r-button__element:focus~.r-button__content::before{border-color:#0076CC}raul-button .r-button--danger .r-button__content{color:#fff;background-color:#D01A1F;border-color:#D01A1F}raul-button .r-button--danger .r-button__focus-ring{color:#fff}raul-button .r-button--danger .r-button__element:hover~.r-button__content{background-color:#BA171B;border-color:#BA171B}raul-button .r-button--danger .r-button__element[disabled]~.r-button__content,raul-button .r-button--danger .r-button__element[aria-disabled]~.r-button__content{background-color:#EBEDEE;border-color:#EBEDEE;color:#9BA3A7}body[modality=keyboard] raul-button .r-button--danger .r-button__element:focus~.r-button__content::before{border-color:#D01A1F}raul-button .r-button--text .r-button__content{color:#0076CC}raul-button .r-button--text .r-button__focus-ring{color:#0076CC}raul-button .r-button--text .r-button__element:hover~.r-button__content{background-color:#E5F4FF}raul-button .r-button--text .r-button__element[disabled]~.r-button__content,raul-button .r-button--text .r-button__element[aria-disabled]~.r-button__content{color:#9BA3A7}body[modality=keyboard] raul-button .r-button--text .r-button__element:focus~.r-button__content::before{border-color:#0076CC}raul-button .r-button--reverse .r-button__content{color:#fff;background-color:rgba(55, 71, 79, 0.2)}raul-button .r-button--reverse .r-button__focus-ring{color:#fff}raul-button .r-button--reverse .r-button__element:hover~.r-button__content{background-color:rgba(55, 71, 79, 0.4)}raul-button .r-button--reverse .r-button__element[disabled]~.r-button__content,raul-button .r-button--reverse .r-button__element[aria-disabled]~.r-button__content{color:#9BA3A7}body[modality=keyboard] raul-button .r-button--reverse .r-button__element:focus~.r-button__content::before{border-color:#fff}raul-button .r-button--control .r-button__content{color:#202737;background-color:#fff;border-color:#C6CCD0}raul-button .r-button--control .r-button__focus-ring{color:#202737}raul-button .r-button--control .r-button__element:hover~.r-button__content{border-color:#C6CCD0;color:#0076CC}raul-button .r-button--control .r-button__element[disabled]~.r-button__content,raul-button .r-button--control .r-button__element[aria-disabled]~.r-button__content{border-color:#C6CCD0;color:#9BA3A7}body[modality=keyboard] raul-button .r-button--control .r-button__element:focus~.r-button__content::before{border-color:#0076CC}raul-button[icon=filter] raul-icon,raul-button[icon=edit] raul-icon,raul-button[icon=refresh] raul-icon,raul-button[icon=undo] raul-icon,raul-button[icon=redo] raul-icon,raul-button[icon=comments] raul-icon,raul-button[icon=email] raul-icon,raul-button[icon=zoom-in] raul-icon,raul-button[icon=zoom-out] raul-icon,raul-button[icon=save] raul-icon,raul-button[icon=settings] raul-icon,raul-button[icon=delete] raul-icon,raul-button[icon=download] raul-icon,raul-button[icon=upload] raul-icon,raul-button[icon=preview] raul-icon,raul-button[icon=overflow] raul-icon,raul-button[icon=close] raul-icon,raul-button[icon=sync] raul-icon{font-size:1rem}raul-button[icon=right-arrow-v] raul-icon,raul-button[icon=left-arrow-v] raul-icon,raul-button[icon=today] raul-icon{font-size:0.875rem}raul-button[icon=right-arrow] raul-icon,raul-button[icon=left-arrow] raul-icon,raul-button[icon=call] raul-icon{font-size:0.75rem}'}}]);