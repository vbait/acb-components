(self.webpackChunk_vbait_core=self.webpackChunk_vbait_core||[]).push([[29713,63333,6254,94570,41904],{"./dist/esm-es5/gesture-controller-e2fdd40a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{G:()=>GESTURE_CONTROLLER});__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.set.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");var GestureController=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){var e;return new GestureDelegate(this,this.newID(),t.name,null!==(e=t.priority)&&void 0!==e?e:0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new BlockerDelegate(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,s=-1e4;if(i.forEach((function(t){s=Math.max(s,t)})),s===r){this.capturedId=e,i.clear();var l=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(l),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(BACKDROP_NO_SCROLL)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(BACKDROP_NO_SCROLL)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),GestureDelegate=function(){function t(t,e,r,i,s){this.id=e,this.name=r,this.disableScroll=s,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),BlockerDelegate=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),BACKDROP_NO_SCROLL="backdrop-no-scroll",GESTURE_CONTROLLER=new GestureController},"./dist/esm-es5/index-a8ecd80d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GESTURE_CONTROLLER:()=>_gesture_controller_e2fdd40a_js__WEBPACK_IMPORTED_MODULE_4__.G,createGesture:()=>createGesture});__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.date.now.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _sPassive,_gesture_controller_e2fdd40a_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm-es5/gesture-controller-e2fdd40a.js"),addEventListener=function addEventListener(e,r,t,a){var i,u,n=supportsPassive(e)?{capture:!!a.capture,passive:!!a.passive}:!!a.capture;return e.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(i="addEventListener",u="removeEventListener"),e[i](r,t,n),function(){e[u](r,t,n)}},supportsPassive=function supportsPassive(e){if(void 0===_sPassive)try{var r=Object.defineProperty({},"passive",{get:function get(){_sPassive=!0}});e.addEventListener("optsTest",(function(){}),r)}catch(e){_sPassive=!1}return!!_sPassive},getDocument=function getDocument(e){return e instanceof Document?e:e.ownerDocument},createGesture=function createGesture(e){var r=!1,t=!1,a=!0,n=!1,i=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),u=i.canStart,s=i.onWillStart,v=i.onStart,f=i.onEnd,o=i.notCaptured,c=i.onMove,l=i.threshold,d=i.passive,m=i.blurOnStart,p={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},E=function createPanRecognizer(e,r,t){var a=t*(Math.PI/180),n="x"===e,i=Math.cos(a),u=r*r,s=0,v=0,f=!1,o=0;return{start:function start(e,r){s=e,v=r,o=0,f=!0},detect:function detect(e,r){if(!f)return!1;var t=e-s,a=r-v,c=t*t+a*a;if(c<u)return!1;var l=Math.sqrt(c),d=(n?t:a)/l;return o=d>i?1:d<-i?-1:0,f=!1,!0},isGesture:function isGesture(){return 0!==o},getDirection:function getDirection(){return o}}}(i.direction,i.threshold,i.maxAngle),_=_gesture_controller_e2fdd40a_js__WEBPACK_IMPORTED_MODULE_4__.G.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),X=function X(){r&&(n=!1,c&&c(p))},Y=function Y(){return!!_.capture()&&(r=!0,a=!1,p.startX=p.currentX,p.startY=p.currentY,p.startTime=p.currentTime,s?s(p).then(h):h(),!0)},h=function h(){m&&function L(){if("undefined"!=typeof document){var e=document.activeElement;(null==e?void 0:e.blur)&&e.blur()}}(),v&&v(p),a=!0},T=function T(){r=!1,t=!1,n=!1,a=!0,_.release()},D=function D(e){var t=r,n=a;T(),n&&(calcGestureData(p,e),t?f&&f(p):o&&o(p))},P=function createPointerEvents(e,r,t,a,n){var i,u,s,v,f,o,c,l=0,d=function d(a){l=Date.now()+2e3,r(a)&&(!u&&t&&(u=addEventListener(e,"touchmove",t,n)),s||(s=addEventListener(a.target,"touchend",p,n)),v||(v=addEventListener(a.target,"touchcancel",p,n)))},m=function m(a){l>Date.now()||r(a)&&(!o&&t&&(o=addEventListener(getDocument(e),"mousemove",t,n)),c||(c=addEventListener(getDocument(e),"mouseup",E,n)))},p=function p(e){_(),a&&a(e)},E=function E(e){g(),a&&a(e)},_=function _(){u&&u(),s&&s(),v&&v(),u=s=v=void 0},g=function g(){o&&o(),c&&c(),o=c=void 0},y=function y(){_(),g()},X=function X(r){void 0===r&&(r=!0),r?(i||(i=addEventListener(e,"touchstart",d,n)),f||(f=addEventListener(e,"mousedown",m,n))):(i&&i(),f&&f(),i=f=void 0,y())};return{enable:X,stop:y,destroy:function Y(){X(!1),a=t=r=void 0}}}(i.el,(function g(e){var r=now(e);return!(t||!a)&&(updateDetail(e,p),p.startX=p.currentX,p.startY=p.currentY,p.startTime=p.currentTime=r,p.velocityX=p.velocityY=p.deltaX=p.deltaY=0,p.event=e,(!u||!1!==u(p))&&(_.release(),!!_.start()&&(t=!0,0===l?Y():(E.start(p.startX,p.startY),!0))))}),(function y(e){r?!n&&a&&(n=!0,calcGestureData(p,e),requestAnimationFrame(X)):(calcGestureData(p,e),E.detect(p.currentX,p.currentY)&&(E.isGesture()&&Y()||b()))}),D,{capture:!1,passive:d}),b=function b(){T(),P.stop(),o&&o(p)};return{enable:function enable(e){void 0===e&&(e=!0),e||(r&&D(void 0),T()),P.enable(e)},destroy:function destroy(){_.destroy(),P.destroy()}}},calcGestureData=function calcGestureData(e,r){if(r){var t=e.currentX,a=e.currentY,n=e.currentTime;updateDetail(r,e);var i=e.currentX,u=e.currentY,v=(e.currentTime=now(r))-n;if(v>0&&v<100){var f=(i-t)/v,o=(u-a)/v;e.velocityX=.7*f+.3*e.velocityX,e.velocityY=.7*o+.3*e.velocityY}e.deltaX=i-e.startX,e.deltaY=u-e.startY,e.event=r}},updateDetail=function updateDetail(e,r){var t=0,a=0;if(e){var n=e.changedTouches;if(n&&n.length>0){var i=n[0];t=i.clientX,a=i.clientY}else void 0!==e.pageX&&(t=e.pageX,a=e.pageY)}r.currentX=t,r.currentY=a},now=function now(e){return e.timeStamp||Date.now()}},"./node_modules/core-js/modules/es.date.now.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$Date=Date,thisTimeValue=uncurryThis($Date.prototype.getTime);$({target:"Date",stat:!0},{now:function now(){return thisTimeValue(new $Date)}})},"./node_modules/core-js/modules/es.date.to-string.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))}}]);