(self.webpackChunk_vbaitacb_core=self.webpackChunk_vbaitacb_core||[]).push([[9325],{"./dist/esm-es5/hardware-back-button-fa04d6e9.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MENU_BACK_BUTTON_PRIORITY:()=>MENU_BACK_BUTTON_PRIORITY,OVERLAY_BACK_BUTTON_PRIORITY:()=>OVERLAY_BACK_BUTTON_PRIORITY,blockHardwareBackButton:()=>blockHardwareBackButton,startHardwareBackButton:()=>startHardwareBackButton});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.number.min-safe-integer.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js");var __awaiter=function(t,n,r,e){function a(t){return t instanceof r?t:new r((function(n){n(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{c(e.next(t))}catch(t){i(t)}}function u(t){try{c(e.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):a(t.value).then(o,u)}c((e=e.apply(t,n||[])).next())}))},__generator=function(t,n){var e,a,i,o,r={label:0,sent:function sent(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(n){return c([t,n])}}function c(u){if(e)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(r=0)),r;)try{if(e=1,a&&(i=2&u[0]?a.return:u[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;switch(a=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,a=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){r=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(6===u[0]&&r.label<i[1]){r.label=i[1],i=u;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(u);break}i[2]&&r.ops.pop(),r.trys.pop();continue}u=n.call(t,r)}catch(t){u=[6,t],a=0}finally{e=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},blockHardwareBackButton=function blockHardwareBackButton(){document.addEventListener("backbutton",(function(){}))},startHardwareBackButton=function startHardwareBackButton(){var t=document,n=!1;t.addEventListener("backbutton",(function(){if(!n){var r=0,e=[],a=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function register(t,n){e.push({priority:t,handler:n,id:r++})}}});t.dispatchEvent(a);var i=function i(t){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null==t?void 0:t.handler)?null==(n=t.handler(o))?[3,2]:[4,n]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return r=e.sent(),console.error(r),[3,4];case 4:return[2]}}))}))},o=function o(){if(e.length>0){var t={priority:Number.MIN_SAFE_INTEGER,handler:function handler(){},id:-1};e.forEach((function(n){n.priority>=t.priority&&(t=n)})),n=!0,e=e.filter((function(n){return n.id!==t.id})),i(t).then((function(){return n=!1}))}};o()}}))},OVERLAY_BACK_BUTTON_PRIORITY=100,MENU_BACK_BUTTON_PRIORITY=99},"./node_modules/core-js/modules/es.number.min-safe-integer.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991})}}]);