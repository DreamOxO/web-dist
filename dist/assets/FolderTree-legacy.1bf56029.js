!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(_){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=L(a,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=f(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(_){return{type:"throw",arg:_}}}e.wrap=h;var s={};function d(){}function p(){}function g(){}var v={};l(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=g.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,a,u,c){var l=f(r[i],r,a);if("throw"!==l.type){var h=l.arg,s=h.value;return s&&"object"==t(s)&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(s).then((function(t){h.value=t,u(h)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=g,l(w,"constructor",g),l(g,"constructor",p),p.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},e}function e(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void e(l)}u.done?r(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.2d1ac336.js","./index-legacy.ee06cdf6.js"],(function(t){"use strict";var e,i,a,u,c,l,h,f,s,d,p,g,v,y,m,w,b,x,L,E,k,S,O,C,_,j,$,P,F,I,N,A,G,T,z,H,M,R;return{setters:[function(t){e=t.aP,i=t.a,a=t.h,u=t.I,c=t.S,l=t.C,h=t.al,f=t.M,s=t.y,d=t.bk,p=t.z,g=t.A,v=t.B,y=t.D,m=t.m,w=t.ae,b=t.bL,x=t.bM,L=t.a$,E=t.bN,k=t._,S=t.bO,O=t.x,C=t.r,_=t.bP,j=t.as,$=t.aE,P=t.a7,F=t.N,I=t.ac,N=t.p,A=t.a8,G=t.H,T=t.d,z=t.bQ,H=t.bh},function(t){M=t.j,R=t.k}],execute:function(){var B=z(),Y=t("F",(function(t){var r,e=o(m("/"),2),n=e[0],i=e[1];return null===(r=t.handle)||void 0===r||r.call(t,{setPath:i}),a(w,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return a(B.Provider,{get value(){var r,e,o,a;return{value:n,onChange:function(r){i(r),t.onChange(r)},autoOpen:null!==(r=t.autoOpen)&&void 0!==r&&r,forceRoot:null!==(e=t.forceRoot)&&void 0!==e&&e,showEmptyIcon:null!==(o=t.showEmptyIcon)&&void 0!==o&&o,showHiddenFolder:null===(a=t.showHiddenFolder)||void 0===a||a}},get children(){return a(D,{path:"/"})}})}})})),D=function t(i){var u=b().isHidePath,l=o(m(),2),f=l[0],s=l[1],d=x(B),p=d.value,g=d.onChange,v=d.forceRoot,y=d.autoOpen,z=d.showEmptyIcon,Y=d.showHiddenFolder,D=o(L((function(){return E(i.path,k(),v)})),2),Q=D[0],U=D[1],V=!1,W=function(){var t=n(r().mark((function t(){var e,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(e=f())||void 0===e||!e.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,U();case 4:n=t.sent,H(n,(function(t){V=!0,s(t)}),(function(){q()&&J()}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=e(),q=X.isOpen,J=X.onToggle,K=function(){return p()===i.path},Z=S(i.path),tt=function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(y){t.next=2;break}return t.abrupt("return");case 2:Z(e)&&(q()||J(),V||W());case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}();O(C(p,tt));return a(c,{get when(){return Y||!(u(i.path)&&!Z(p()))},get children(){return a(w,{get children(){return[a(h,{spacing:"$2",get children(){return[a(c,{get when(){return!Q()},get fallback(){return a(_,{size:"sm",get color(){return j()}})},get children(){return a(c,{get when(){return!Boolean(z&&void 0!==f()&&!(null!==(t=f())&&void 0!==t&&t.length));var t},get fallback(){return a($,{get color(){return j()},as:M})},get children(){return a($,{get color(){return j()},as:R,get transform(){return q()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:function(){J(),q()&&W()}})}})}}),a(P,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return K()?"$info8":"transparent"},get _hover(){return{bgColor:K()?"$info8":F()}},onClick:function(){g(i.path)},get children(){return I((function(){return"/"===i.path}),!0)()?"root":N(i.path)}})]}}),a(c,{get when(){return q()},get children(){return a(A,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return a(G,{get each(){return f()},children:function(r){return a(t,{get path(){return T(i.path,r.name)}})}})}})}})]}})}})};t("M",(function(t){var r,e=i(),n=o(m(null!==(r=t.defaultValue)&&void 0!==r?r:"/"),2),u=n[0],h=n[1],d=o(m(),2),w=d[0],b=d[1];return O((function(){var r;t.opened&&(null===(r=w())||void 0===r||r.setPath(u()))})),a(y,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[a(f,{}),a(s,{get children(){return[a(p,{w:"$full",css:{overflowWrap:"break-word"},get children(){return t.header}}),a(g,{get children(){return[I((function(){return t.children})),a(Y,{onChange:h,handle:function(t){return b(t)},autoOpen:!0})]}}),a(v,{display:"flex",gap:"$2",get children(){return[a(c,{get when(){return t.footerSlot},get children(){return t.footerSlot}}),a(l,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return e("global.cancel")}}),a(l,{get loading(){return t.loading},onClick:function(){var r;return null===(r=t.onSubmit)||void 0===r?void 0:r.call(t,u())},get children(){return e("global.ok")}})]}})]}})]}})})),t("a",(function(t){var r=e(),n=r.isOpen,o=r.onOpen,m=r.onClose,w=i();return[a(h,{w:"$full",spacing:"$2",get children(){return[a(u,{get id(){return t.id},get value(){return t.value},onInput:function(r){return t.onChange(r.currentTarget.value)},get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?o:function(){}},get placeholder(){return w("global.".concat(t.onlyFolder?"choose_folder":"choose_or_input_path"))}}),a(c,{get when(){return!t.onlyFolder},get children(){return a(l,{onClick:o,get children(){return w("global.choose")}})}})]}}),a(y,{size:"xl",get opened(){return n()},onClose:m,get children(){return[a(f,{}),a(s,{get children(){return[a(d,{}),a(p,{get children(){return w("global.choose_folder")}}),a(g,{get children(){return a(Y,{forceRoot:!0,get onChange(){return t.onChange}})}}),a(v,{get children(){return a(l,{onClick:m,get children(){return w("global.confirm")}})}})]}})]}})]}))}}}))}();
