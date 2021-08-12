(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[64],{1451:function(e,a,t){"use strict";var n=t(13),r=t(69),i=t(133),o=t.n(i),c=t(0),s=t(1458),l=t.n(s),d=t(84),m=o.a.bind(l.a);a.a=function(e){var a=e.align,t=e.children,i=e.className,o=void 0===i?"":i,s=e.color,l=e.margin,u=e.tag,g=e.testId,f=e.truncate,b=Object(r.a)(e,["align","children","className","color","margin","tag","testId","truncate"]),p=m(o,"heading",a,u,l?Object(d.a)(l,"margin"):void 0,s,{truncate:f});return c.createElement(u,Object(n.a)(Object(n.a)({},b),{},{className:p,"data-testid":g||""}),t)}},1458:function(e,a,t){e.exports={heading:"Heading_heading__3Wz9P",h1:"Heading_h1__MXfCA",h2:"Heading_h2__3X6Ts",h3:"Heading_h3__1k2fD",h4:"Heading_h4__1YCmR",center:"Heading_center__28MHY",right:"Heading_right__1fQM1",truncate:"Heading_truncate__2Lq93",marginSm:"Heading_marginSm__13YwX",marginMd:"Heading_marginMd__2AnZN",marginLg:"Heading_marginLg__2ZfEq",marginXl:"Heading_marginXl__3RHt7",soft:"Heading_soft__2Zu43",medium:"Heading_medium__2X8Z-",dark:"Heading_dark__Ds2QB",fancy:"Heading_fancy__1Wx6l",warning:"Heading_warning__2lrZC",primary:"Heading_primary__2hOk2",secondary:"Heading_secondary__37lKs",disabled:"Heading_disabled__30DjG",error:"Heading_error__t5ujr",white:"Heading_white__2gkIK"}},2772:function(e,a,t){"use strict";t.r(a),t.d(a,"SAFE_NAME_INPUT_TEST_ID",(function(){return fe})),t.d(a,"SAFE_NAME_SUBMIT_BTN_TEST_ID",(function(){return be})),t.d(a,"SAFE_NAME_UPDATE_SAFE_BTN_TEST_ID",(function(){return pe}));var n,r=t(1),i=t.n(r),o=t(12),c=t(48),s=t(25),l=t(23),d=t(395),m=t(0),u=t.n(m),g=t(55),f=t(24),b=t(499),p=t(11),_=Object(b.a)({formContainer:{padding:p.lg},root:{display:"flex",maxWidth:"460px"},saveBtn:{fontWeight:p.boldFont,marginRight:p.sm},controlsRow:{borderTop:"2px solid ".concat(p.border),bottom:0,boxSizing:"border-box",padding:p.lg,position:"absolute",width:"100%"}}),h=t(332),E=t(1392),O=t(1399),j=t(1398),v=t(524),x=t(139),S=t(156),C=t(118),N=t(1451),w=t(86),y=t(107),T=t(212),I=t(166),H=t(115),k=t(87),A=t(54),G=t(65),D=t(321),L=t(525),F=t.n(L),U=Object(d.a)(Object(b.a)({heading:{padding:"".concat(p.sm," ").concat(p.lg),justifyContent:"space-between",boxSizing:"border-box",height:"74px"},headingText:{fontSize:p.lg},close:{height:"35px",width:"35px"},modalContent:{padding:"".concat(p.md," ").concat(p.lg)},gasCostsContainer:{backgroundColor:p.background,padding:"0 ".concat(p.lg)}})),B=t(52),M=t(111),R=t(155),P=t(148),z=t.n(P),X=t(120),V=t(560),W=t(105),Y=function(e,a){var t=Object(X.j)(),n=[{to:e,value:"0",data:Object(X.d)(e,a).methods.changeMasterCopy(t).encodeABI()},{to:e,value:"0",data:function(e){var a=z()(B.l,">=1.1.0"),t=Object(X.c)(),n=Object(X.d)(e,B.l);return a?n.methods.setFallbackHandler(t).encodeABI():W.a}(e)}];return Object(V.a)(n)},Z=t(429),q=t(1424),J=t(1410),K=t(1427),Q=t(1420),$=t(1423),ee=function(e){var a=e.onClose,t=e.safeAddress,n=e.safeCurrentVersion,r=U(),i=Object(g.e)(),o=Object(m.useState)(W.a),s=Object(c.a)(o,2),l=s[0],d=s[1],f=Object(J.b)({txRecipient:Object(X.g)(),txData:l,txAmount:"0",operation:G.b}),b=f.gasCostFormatted,p=f.txEstimationExecutionStatus,_=f.isExecution,E=f.isCreation,O=f.isOffChainSignature,j=f.gasPriceFormatted,v=f.gasLimit,S=f.gasEstimation,C=Object(K.a)(p),N=Object(c.a)(C,1)[0];Object(m.useEffect)((function(){var e=Y(t,n);d(e)}),[t,n]);var T="Update Safe";return h.a.LOADING===N&&(T=p===J.a.LOADING?"Estimating":"Updating"),u.a.createElement($.a,{isOffChainSignature:O,isExecution:_,ethGasLimit:v,ethGasPrice:j,safeTxGas:S.toString()},(function(e,n){return u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{align:"center",className:r.heading,grow:!0},u.a.createElement(w.a,{className:r.headingText,noMargin:!0,weight:"bolder"},"Update to new Safe version"),u.a.createElement(D.a,{disableRipple:!0,onClick:a},u.a.createElement(F.a,{className:r.close}))),u.a.createElement(R.a,null),u.a.createElement(x.a,{className:r.modalContent},u.a.createElement(y.a,null,u.a.createElement(w.a,null,"Update now to take advantage of new features and the highest security standards available."),u.a.createElement(x.a,null,"To check details about updates added by this smart contract version please visit"," ",u.a.createElement(M.a,{target:"_blank",to:"https://github.com/gnosis/safe-contracts/releases/tag/v".concat(B.l)},"latest Gnosis Safe contracts changelog")),u.a.createElement(w.a,null,"You will need to confirm this update just like any other transaction. This means other owners will have to confirm the update in case more than one confirmation is required for this Safe.")),u.a.createElement(Q.a,{txParameters:e,onEdit:n,compact:!1,isTransactionCreation:E,isTransactionExecution:_,isOffChainSignature:O})),p===J.a.LOADING?null:u.a.createElement(x.a,{className:r.gasCostsContainer},u.a.createElement(q.a,{gasCostFormatted:b,isExecution:_,isCreation:E,isOffChainSignature:O,txEstimationExecutionStatus:p})),u.a.createElement(h.b.Footer,{withoutBorder:N!==h.a.LOADING},u.a.createElement(h.b.Footer.Buttons,{cancelButtonProps:{onClick:a,text:"Cancel"},confirmButtonProps:{onClick:function(){return function(e){i(Object(Z.b)({safeAddress:t,to:Object(X.g)(),valueInWei:"0",txData:l,txNonce:e.safeNonce,safeTxGas:e.safeTxGas?Number(e.safeTxGas):void 0,ethParameters:e,notifiedTransaction:"STANDARD_TX",operation:G.b})),a()}(e)},status:N,text:T}})))}))},ae=t(241),te=t(198),ne=t(67),re=t(188),ie=t(122),oe=t.n(ie),ce=t(22),se=t(149),le=t.n(se);!function(e){e.GNOSIS="Gnosis",e.CIRCLES="Circles"}(n||(n={}));var de,me,ue=function(e){var a=e.version.toLowerCase().includes(n.CIRCLES.toLowerCase()),t=e.version.indexOf("-");return{address:e.address,version:a?e.version.substring(0,t):e.version,deployer:a?n.CIRCLES:n.GNOSIS,deployerRepoUrl:a?"https://github.com/CirclesUBI/safe-contracts/releases":"https://github.com/gnosis/safe-contracts/releases"}},ge=le()(Object(o.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(Object(ce.t)(),"/about/master-copies/"),e.prev=1,e.next=4,oe.a.get(a);case 4:return t=e.sent,e.abrupt("return",t.data.map(ue));case 8:e.prev=8,e.t0=e.catch(1),console.error("Fetching data from master-copies errored",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))),fe="safe-name-input",be="change-safe-name-btn",pe="update-safe-name-btn",_e=Object(d.a)(_),he=Object(f.default)(l.Link)(de||(de=Object(s.a)(["\n  margin: 12px 0 0 0;\n"]))),Ee=Object(f.default)(l.Icon)(me||(me=Object(s.a)(["\n  position: relative;\n  top: 3px;\n  left: 6px;\n"])));a.default=function(){var e=_e(),a=Object(g.f)(ae.b),t=Object(g.f)(ne.k),r=Object(g.f)(ne.i),s=r.address,d=r.name,f=r.needsUpdate,b=r.currentVersion,p=Object(g.e)(),_=Object(re.d)().trackEvent,D=Object(m.useState)(!1),L=Object(c.a)(D,2),F=L[0],U=L[1],B=Object(m.useState)(),M=Object(c.a)(B,2),R=M[0],P=M[1],z=function(){U((function(e){return!e}))},V=function(){U(!0)};return Object(m.useEffect)((function(){_({category:re.a,action:"Settings",label:"Details"})}),[_]),Object(m.useEffect)((function(){s&&function(){var e=Object(o.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:return a=e.sent,e.next=5,Object(X.e)(s);case 5:t=e.sent,n=null===a||void 0===a?void 0:a.find((function(e){return Object(A.f)(e.address,t)})),P(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]),u.a.createElement(O.a,{onSubmit:function(e){p(Object(I.b)(Object(T.b)({address:s,name:e.safeName}))),p(Object(te.b)({address:s,loadedViaUrl:!1}));var a=Object(k.c)(G.c.SAFE_NAME_CHANGE_TX);p(Object(H.b)(Object(k.b)(a.afterExecution.noMoreConfirmationsNeeded)))}},(function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(x.a,{className:e.formContainer},u.a.createElement(N.a,{tag:"h2"},"Contract Version"),u.a.createElement(y.a,{align:"end",grow:!0},u.a.createElement(he,{rel:"noreferrer noopener",target:"_blank",href:null===R||void 0===R?void 0:R.deployerRepoUrl},u.a.createElement(l.Text,{size:"xl",as:"span",color:"primary"},R?R.deployer===n.GNOSIS?b:"".concat(b,"-").concat(R.deployer):"",R&&R.deployer===n.GNOSIS&&f?" (there's a newer version: ".concat(t,")"):""),u.a.createElement(Ee,{size:"sm",type:"externalLink",color:"primary"}))),f&&a?u.a.createElement(y.a,{align:"end",grow:!0},u.a.createElement(w.a,null,u.a.createElement(S.a,{className:e.saveBtn,color:"primary",onClick:V,size:"small",testId:pe,variant:"contained"},"Update Safe"))):null),u.a.createElement(x.a,{className:e.formContainer},u.a.createElement(N.a,{tag:"h2"},"Modify Safe name"),u.a.createElement(w.a,null,"You can change the name of this Safe. This name is only stored locally and never shared with Gnosis or any third parties."),u.a.createElement(x.a,{className:e.root},u.a.createElement(E.a,{component:j.a,defaultValue:d,name:"safeName",placeholder:"Safe name*",testId:fe,text:"Safe name*",type:"text",validate:Object(v.c)(v.p,v.r)}))),u.a.createElement(y.a,{align:"end",className:e.controlsRow,grow:!0},u.a.createElement(C.a,{end:"xs"},u.a.createElement(S.a,{className:e.saveBtn,color:"primary",size:"small",testId:be,type:"submit",variant:"contained"},"Save"))),u.a.createElement(h.c,{description:"Update Safe",handleClose:z,open:F,title:"Update Safe"},u.a.createElement(ee,{onClose:z,safeAddress:s,safeCurrentVersion:b})))}))}}}]);
//# sourceMappingURL=64.2573d954.chunk.js.map