(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[102],{1348:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),o=(e(336),e(528));e(91),e(431),e(430),e(337);function i(n,t,e,r,a,o,i){try{var s=n[o](i),u=s.value}catch(c){return void e(c)}s.done?t(u):Promise.resolve(u).then(r,a)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function s(n){i(o,r,a,s,u,"next",n)}function u(n){i(o,r,a,s,u,"throw",n)}s(void 0)}))}}t.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.heading,e=n.description,r=n.icon,i=n.html,u=n.button;return function(){var n=s(a.a.mark((function n(s){var c,d,l,f;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=s.wallet,d=s.address,l=s.stateSyncStatus,f=s.stateStore,null!==d){n.next=5;break}if(!l.address){n.next=5;break}return n.next=5,new Promise((function(n){l.address&&l.address.then(n),setTimeout((function(){null===d&&n(void 0)}),500)}));case 5:if(f.address.get()||!c||!c.name){n.next=7;break}return n.abrupt("return",{heading:t||"Login and Authorize Your Wallet",description:e||"This dapp requires access to your wallet, please login and authorize access to your ".concat(c.name," accounts to continue."),eventCode:"loginFail",action:c.connect,icon:r||o.g,html:i,button:u});case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=102.ba213f5e.chunk.js.map