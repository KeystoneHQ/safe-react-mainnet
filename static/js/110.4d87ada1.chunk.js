(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[110],{1323:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=(n(336),n(528));n(91),n(431),n(430),n(337);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){s(i,r,o,c,a,"next",e)}function a(e){s(i,r,o,c,a,"throw",e)}c(void 0)}))}}t.default=function(e){var t=e.networkId,r=e.preferred,c=e.label,u=e.iconSrc,s=e.svg,f=e.buttonPosition,p=e.modalZIndex,b=e.apiKey,d=e.buildEnv,h=e.enableLogging,w=e.enabledVerifiers,g=e.loginConfig,v=e.showTorusButton,y=e.integrity,O=e.whiteLabel,m=e.loginMethod,j=e.rpcUrl;return{name:c||"Torus",svg:s||'<svg width="257" height="277" viewBox="0 0 257 277" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="153.889" height="82.0741" fill="#0364FF" />\n<rect x="71.8135" width="82.0741" height="277" fill="#0364FF" />\n<path d="M215.443 82.0741C238.107 82.0741 256.48 63.7012 256.48 41.037C256.48 18.3729 238.107 0 215.443 \n0C192.779 0 174.406 18.3729 174.406 41.037C174.406 63.7012 192.779 82.0741 215.443 82.0741Z" fill="#0364FF" />\n</svg>',iconSrc:u,wallet:function(){var e=l(o.a.mark((function e(r){var c,u,s,P,k;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.createModernProviderInterface,e.next=3,n.e(35).then(n.t.bind(null,2376,7));case 3:return u=e.sent,s=u.default,P=new s({buttonPosition:f,modalZIndex:p,apiKey:b}),e.next=8,P.init({buildEnv:d,enableLogging:h,network:{host:j||Object(i.m)(t),chainId:t,networkName:"".concat(Object(i.m)(t)," Network")},showTorusButton:v,enabledVerifiers:w,loginConfig:g,integrity:y,whiteLabel:O});case 8:return k=P.provider,e.abrupt("return",{provider:k,interface:a(a({},c(k)),{},{name:"Torus",dashboard:function(){return P.showWallet("home")},connect:function(){var e=l(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.login({verifier:m});case 2:return t=e.sent,e.abrupt("return",{message:t[0]});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),disconnect:function(){return P.cleanUp()}}),instance:P});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:r}}}}]);
//# sourceMappingURL=110.4d87ada1.chunk.js.map