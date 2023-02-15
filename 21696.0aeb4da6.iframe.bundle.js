"use strict";(self.webpackChunk_vbait_core=self.webpackChunk_vbait_core||[]).push([[21696],{"./dist/esm-es5/ios.transition-fe464820.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{iosTransitionAnimation:()=>iosTransitionAnimation,shadow:()=>shadow});__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js");var _animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm-es5/animation-6af445b7.js"),_index_a16344bf_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm-es5/index-a16344bf.js"),getClonedElement=(__webpack_require__("./dist/esm-es5/helpers-32639a35.js"),__webpack_require__("./dist/esm-es5/index-5aa6aa3e.js"),__webpack_require__("./dist/esm-es5/index-0d7ccb84.js"),function getClonedElement(t){return document.querySelector("".concat(t,".ion-cloned-element"))}),shadow=function shadow(t){return t.shadowRoot||t},getLargeTitle=function getLargeTitle(t){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),a="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){var o=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=o?o.querySelector(a):null}return t.querySelector(a)},getBackButton=function getBackButton(t,e){var a="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o=[];if(null!=a){var r=a.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=r&&(o=r.querySelectorAll("ion-buttons"))}else o=t.querySelectorAll("ion-buttons");for(var n=0,i=o;n<i.length;n++){var l=i[n],c=l.closest("ion-header"),s=c&&!c.classList.contains("header-collapse-condense-inactive"),f=l.querySelector("ion-back-button"),d=l.classList.contains("buttons-collapse"),m="start"===l.slot||""===l.slot;if(null!==f&&m&&(d&&s&&e||!d))return f}return null},animateBackButton=function animateBackButton(t,e,a,o,r,n){var i=e?"calc(100% - ".concat(n.right+4,"px)"):"".concat(n.left-4,"px"),l=e?"7px":"-7px",c=e?"-4px":"4px",s=e?"-4px":"4px",f=e?"right":"left",d=e?"left":"right",m=[{offset:0,opacity:0,transform:"translate3d(".concat(l,", ").concat(r.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(c,", ").concat(n.top-46,"px, 0) scale(1)")}],v=[{offset:0,opacity:1,transform:"translate3d(".concat(c,", ").concat(n.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(l,", ").concat(r.top-40,"px, 0) scale(2.1)")}],p=a?v:m,u=[{offset:0,opacity:0,transform:"translate3d(".concat(s,", ").concat(n.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(s,", ").concat(n.top-46,"px, 0) scale(1)")}],y=[{offset:0,opacity:1,transform:"translate3d(".concat(s,", ").concat(n.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(s,", ").concat(n.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(s,", ").concat(n.top-41,"px, 0) scale(0.6)")}],g=a?y:u,b=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),A=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),S=getClonedElement("ion-back-button"),T=shadow(S).querySelector(".button-text"),h=shadow(S).querySelector("ion-icon");S.text=o.text,S.mode=o.mode,S.icon=o.icon,S.color=o.color,S.disabled=o.disabled,S.style.setProperty("display","block"),S.style.setProperty("position","fixed"),A.addElement(h),b.addElement(T),b.beforeStyles({"transform-origin":"".concat(f," center")}).beforeAddWrite((function(){o.style.setProperty("display","none"),S.style.setProperty(f,i)})).afterAddWrite((function(){o.style.setProperty("display",""),S.style.setProperty("display","none"),S.style.removeProperty(f)})).keyframes(p),A.beforeStyles({"transform-origin":"".concat(d," center")}).keyframes(g),t.addAnimation([b,A])},animateLargeTitle=function animateLargeTitle(t,e,a,o,r,n){var i,l=e?"calc(100% - ".concat(r.right,"px)"):"".concat(r.left,"px"),c=e?"-18px":"18px",s=e?"right":"left",f=[{offset:0,opacity:0,transform:"translate3d(".concat(c,", ").concat(n.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(r.top-2,"px, 0) scale(1)")}],d=[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(r.top-2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(c,", ").concat(n.top-4,"px, 0) scale(0.5)")}],m=a?f:d,v=getClonedElement("ion-title"),p=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();v.innerText=o.innerText,v.size=o.size,v.color=o.color,p.addElement(v),p.beforeStyles((i={"transform-origin":"".concat(s," center"),height:"46px",display:"",position:"relative"},i[s]=l,i)).beforeAddWrite((function(){o.style.setProperty("display","none")})).afterAddWrite((function(){o.style.setProperty("display",""),v.style.setProperty("display","none")})).keyframes(m),t.addAnimation(p)},iosTransitionAnimation=function iosTransitionAnimation(t,e){var a;try{var r="opacity",n="transform",i="0%",c="rtl"===t.ownerDocument.dir,s=c?"-99.5%":"99.5%",f=c?"33%":"-33%",d=e.enteringEl,m=e.leavingEl,v="back"===e.direction,p=d.querySelector(":scope > ion-content"),u=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),y=d.querySelectorAll(":scope > ion-header > ion-toolbar"),g=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),b=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();if(g.addElement(d).duration((null!==(a=e.duration)&&void 0!==a?a:0)||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),m&&null!=t){var A=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();A.addElement(t),g.addAnimation(A)}if(p||0!==y.length||0!==u.length?(b.addElement(p),b.addElement(u)):b.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(b),v?b.beforeClearStyles([r]).fromTo("transform","translateX(".concat(f,")"),"translateX(".concat(i,")")).fromTo(r,.8,1):b.beforeClearStyles([r]).fromTo("transform","translateX(".concat(s,")"),"translateX(".concat(i,")")),p){var S=shadow(p).querySelector(".transition-effect");if(S){var T=S.querySelector(".transition-cover"),h=S.querySelector(".transition-shadow"),x=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),E=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),q=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();x.addElement(S).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),E.addElement(T).beforeClearStyles([r]).fromTo(r,0,.1),q.addElement(h).beforeClearStyles([r]).fromTo(r,.03,.7),x.addAnimation([E,q]),b.addAnimation([x])}}var X=d.querySelector("ion-header.header-collapse-condense"),C=function createLargeTitleTransition(t,e,a,o,r){var n=getBackButton(o,a),i=getLargeTitle(r),l=getLargeTitle(o),c=getBackButton(r,a),s=null!==n&&null!==i&&!a,f=null!==l&&null!==c&&a;if(s){var d=i.getBoundingClientRect(),m=n.getBoundingClientRect();animateLargeTitle(t,e,a,i,d,m),animateBackButton(t,e,a,n,d,m)}else if(f){var v=l.getBoundingClientRect(),p=c.getBoundingClientRect();animateLargeTitle(t,e,a,l,v,p),animateBackButton(t,e,a,c,v,p)}return{forward:s,backward:f}}(g,c,v,d,m),k=C.forward,w=C.backward;if(y.forEach((function(t){var e=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();e.addElement(t),g.addAnimation(e);var a=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();a.addElement(t.querySelector("ion-title"));var m,o=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),n=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),l=t.closest("ion-header"),d=null==l?void 0:l.classList.contains("header-collapse-condense-inactive");m=v?n.filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!d||!e})):n.filter((function(t){return!t.classList.contains("buttons-collapse")})),o.addElement(m);var p=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();p.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var u=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();u.addElement(shadow(t).querySelector(".toolbar-background"));var y=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),b=t.querySelector("ion-back-button");if(b&&y.addElement(b),e.addAnimation([a,o,p,u,y]),o.fromTo(r,.01,1),p.fromTo(r,.01,1),v)d||a.fromTo("transform","translateX(".concat(f,")"),"translateX(".concat(i,")")).fromTo(r,.01,1),p.fromTo("transform","translateX(".concat(f,")"),"translateX(".concat(i,")")),y.fromTo(r,.01,1);else if(X||a.fromTo("transform","translateX(".concat(s,")"),"translateX(".concat(i,")")).fromTo(r,.01,1),p.fromTo("transform","translateX(".concat(s,")"),"translateX(".concat(i,")")),u.beforeClearStyles([r,"transform"]),(null==l?void 0:l.translucent)?u.fromTo("transform",c?"translateX(-100%)":"translateX(100%)","translateX(0px)"):u.fromTo(r,.01,"var(--opacity)"),k||y.fromTo(r,.01,1),b&&!k){var S=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();S.addElement(shadow(b).querySelector(".button-text")).fromTo("transform",c?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(S)}})),m){var B=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),L=m.querySelector(":scope > ion-content"),P=m.querySelectorAll(":scope > ion-header > ion-toolbar"),R=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(L||0!==P.length||0!==R.length?(B.addElement(L),B.addElement(R)):B.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(B),v){B.beforeClearStyles([r]).fromTo("transform","translateX(".concat(i,")"),c?"translateX(-100%)":"translateX(100%)");var I=(0,_index_a16344bf_js__WEBPACK_IMPORTED_MODULE_8__.g)(m);g.afterAddWrite((function(){"normal"===g.getDirection()&&I.style.setProperty("display","none")}))}else B.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(f,")")).fromTo(r,1,.8);if(L){var N=shadow(L).querySelector(".transition-effect");if(N){var j=N.querySelector(".transition-cover"),W=N.querySelector(".transition-shadow"),D=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),O=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),z=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();D.addElement(N).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),O.addElement(j).beforeClearStyles([r]).fromTo(r,.1,0),z.addElement(W).beforeClearStyles([r]).fromTo(r,.7,.03),D.addAnimation([O,z]),B.addAnimation([D])}}P.forEach((function(t){var e=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();e.addElement(t);var a=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();a.addElement(t.querySelector("ion-title"));var o=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),l=t.querySelectorAll("ion-buttons,[menuToggle]"),s=t.closest("ion-header"),d=null==s?void 0:s.classList.contains("header-collapse-condense-inactive"),m=Array.from(l).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!d||!e}));o.addElement(m);var p=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),u=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&p.addElement(u);var y=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();y.addElement(shadow(t).querySelector(".toolbar-background"));var b=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)(),A=t.querySelector("ion-back-button");if(A&&b.addElement(A),e.addAnimation([a,o,p,b,y]),g.addAnimation(e),b.fromTo(r,.99,0),o.fromTo(r,.99,0),p.fromTo(r,.99,0),v){if(d||a.fromTo("transform","translateX(".concat(i,")"),c?"translateX(-100%)":"translateX(100%)").fromTo(r,.99,0),p.fromTo("transform","translateX(".concat(i,")"),c?"translateX(-100%)":"translateX(100%)"),y.beforeClearStyles([r,"transform"]),(null==s?void 0:s.translucent)?y.fromTo("transform","translateX(0px)",c?"translateX(-100%)":"translateX(100%)"):y.fromTo(r,"var(--opacity)",0),A&&!w){var T=(0,_animation_6af445b7_js__WEBPACK_IMPORTED_MODULE_7__.c)();T.addElement(shadow(A).querySelector(".button-text")).fromTo("transform","translateX(".concat(i,")"),"translateX(".concat((c?-124:124)+"px",")")),e.addAnimation(T)}}else d||a.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(f,")")).fromTo(r,.99,0).afterClearStyles([n,r]),p.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(f,")")).afterClearStyles([n,r]),b.afterClearStyles([r]),a.afterClearStyles([r]),o.afterClearStyles([r])}))}return g}catch(t){throw t}}}}]);