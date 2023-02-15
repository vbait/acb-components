"use strict";(self.webpackChunk_vbait_core=self.webpackChunk_vbait_core||[]).push([[77274],{"./dist/esm-es5/ion-icon.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_icon:()=>Icon});__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var CACHED_MAP,parser,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./dist/esm-es5/index-0d7ccb84.js"),getNamedUrl=function getNamedUrl(e){var t=function getIconMap(){if("undefined"==typeof window)return new Map;if(!CACHED_MAP){var e=window;e.Ionicons=e.Ionicons||{},CACHED_MAP=e.Ionicons.map=e.Ionicons.map||new Map}return CACHED_MAP}().get(e);return t||(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_17__.j)("svg/".concat(e,".svg"))},getName=function getName(e,t,i,n,o){return i="ios"===(i&&toLower(i))?"ios":"md",n&&"ios"===i?e=toLower(n):o&&"md"===i?e=toLower(o):(e||!t||isSrc(t)||(e=t),isStr(e)&&(e=toLower(e))),isStr(e)&&""!==e.trim()?""!==e.replace(/[a-z]|-|\d/gi,"")?null:e:null},getSrc=function getSrc(e){return isStr(e)&&(e=e.trim(),isSrc(e))?e:null},isSrc=function isSrc(e){return e.length>0&&/(\/|\.)/.test(e)},isStr=function isStr(e){return"string"==typeof e},toLower=function toLower(e){return e.toLowerCase()},isRTL=function isRTL(e){return e&&""!==e.dir?"rtl"===e.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())},isValid=function isValid(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var t=0;t<e.attributes.length;t++){var i=e.attributes[t].name;if(isStr(i)&&0===i.toLowerCase().indexOf("on"))return!1}for(t=0;t<e.childNodes.length;t++)if(!isValid(e.childNodes[t]))return!1}return!0},ioniconContent=new Map,requests=new Map,getSvgContent=function getSvgContent(e,t){var i=requests.get(e);if(!i){if("undefined"==typeof fetch||"undefined"==typeof document)return ioniconContent.set(e,""),Promise.resolve();if(function isSvgDataUrl(e){return e.startsWith("data:image/svg+xml")}(e)&&function isEncodedDataUrl(e){return-1!==e.indexOf(";utf8,")}(e)){parser||(parser=new DOMParser);var o=parser.parseFromString(e,"text/html").querySelector("svg");return o&&ioniconContent.set(e,o.outerHTML),Promise.resolve()}i=fetch(e).then((function(i){if(i.ok)return i.text().then((function(i){i&&!1!==t&&(i=function validateContent(e){var t=document.createElement("div");t.innerHTML=e;for(var i=t.childNodes.length-1;i>=0;i--)"svg"!==t.childNodes[i].nodeName.toLowerCase()&&t.removeChild(t.childNodes[i]);var n=t.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()){var o=n.getAttribute("class")||"";if(n.setAttribute("class",(o+" s-ion-icon").trim()),isValid(n))return t.innerHTML}return""}(i)),ioniconContent.set(e,i||"")}));ioniconContent.set(e,"")})),requests.set(e,i)}return i},Icon=function(){function e(e){var t=this;(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_17__.r)(this,e),this.iconName=null,this.inheritedAttributes={},this.isVisible=!1,this.mode=getIonMode(),this.lazy=!1,this.sanitize=!0,this.hasAriaHidden=function(){var e=t.el;return e.hasAttribute("aria-hidden")&&"true"===e.getAttribute("aria-hidden")}}return e.prototype.componentWillLoad=function(){this.inheritedAttributes=function inheritAttributes(e,t){void 0===t&&(t=[]);var i={};return t.forEach((function(t){e.hasAttribute(t)&&(null!==e.getAttribute(t)&&(i[t]=e.getAttribute(t)),e.removeAttribute(t))})),i}(this.el,["aria-label"])},e.prototype.connectedCallback=function(){var e=this;this.waitUntilVisible(this.el,"50px",(function(){e.isVisible=!0,e.loadIcon()}))},e.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.waitUntilVisible=function(e,t,i){var n=this;if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){var o=this.io=new window.IntersectionObserver((function(e){e[0].isIntersecting&&(o.disconnect(),n.io=void 0,i())}),{rootMargin:t});o.observe(e)}else i()},e.prototype.loadIcon=function(){var e=this;if(this.isVisible){var t=function getUrl(e){var t=getSrc(e.src);if(t)return t;if(t=getName(e.name,e.icon,e.mode,e.ios,e.md))return getNamedUrl(t);if(e.icon){if(t=getSrc(e.icon))return t;if(t=getSrc(e.icon[e.mode]))return t}return null}(this);t&&(ioniconContent.has(t)?this.svgContent=ioniconContent.get(t):getSvgContent(t,this.sanitize).then((function(){return e.svgContent=ioniconContent.get(t)})))}var i=this.iconName=getName(this.name,this.icon,this.mode,this.ios,this.md);i&&(this.ariaLabel=i.replace(/\-/g," "))},e.prototype.render=function(){var e,t,i=this,n=i.iconName,o=i.ariaLabel,r=i.el,s=i.inheritedAttributes,a=this.mode||"md",c=this.flipRtl||n&&(n.indexOf("arrow")>-1||n.indexOf("chevron")>-1)&&!1!==this.flipRtl;return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_17__.h)(_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_17__.H,Object.assign({"aria-label":void 0===o||this.hasAriaHidden()?null:o,role:"img",class:Object.assign(Object.assign((e={},e[a]=!0,e),createColorClasses(this.color)),(t={},t["icon-".concat(this.size)]=!!this.size,t["flip-rtl"]=!!c&&isRTL(r),t))},s),this.svgContent?(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"icon-inner",innerHTML:this.svgContent}):(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_17__.h)("div",{class:"icon-inner"}))},Object.defineProperty(e,"assetsDirs",{get:function get(){return["svg"]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"el",{get:function get(){return(0,_index_0d7ccb84_js__WEBPACK_IMPORTED_MODULE_17__.d)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}},enumerable:!1,configurable:!0}),e}(),getIonMode=function getIonMode(){return"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md"},createColorClasses=function createColorClasses(e){var t;return e?((t={"ion-color":!0})["ion-color-".concat(e)]=!0,t):null};Icon.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},"./node_modules/core-js/modules/es.array.index-of.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),$indexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),nativeIndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!nativeIndexOf&&1/nativeIndexOf([1],1,-0)<0;$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!arrayMethodIsStrict("indexOf")},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?nativeIndexOf(this,searchElement,fromIndex)||0:$indexOf(this,searchElement,fromIndex)}})}}]);