(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[43],{1353:function(e,t,n){"use strict";n.r(t);var a=n(48),r=n(23),c=n(321),i=n(395),o=n(525),s=n.n(o),l=n(0),u=n.n(l),d=n(55),m=n(1419),b=n(1399),f=n(139),p=n(118),g=n(155),h=n(86),v=n(107),E=n(1426),O=n(332),j=n(1443),x=n(1392),k=function(e){var t=e.field,n=e.set,a=e.to;return u.a.createElement(x.a,{name:n,subscription:{}},(function(e){var n=e.input.onChange;return u.a.createElement(j.a,{name:t},(function(){n(a)}))}))},y=n(333),I=n(1535),S=n(1431),w=n(1463),C=n(22),N=n(54),A=n(119),R=n(1582),V=n(1384),M=n(576),T=n(11),D=n(499),F=Object(D.a)({container:{minHeight:"55px",padding:0,width:"100%"},tokenData:{padding:0,margin:0,lineHeight:"14px"},tokenImage:{marginRight:T.sm}}),z=Object(D.a)({selectMenu:{paddingRight:0},tokenImage:{marginRight:T.sm}}),B=n(1432),P=n(524),H=n(126),_=n(1406),L=Object(i.a)(F),q=function(e){var t=e.tokenId,n=e.tokens,a=L(),r=t&&n?n.find((function(e){var n=e.tokenId;return t===n})):null,c=Object(A.b)({charsStart:40,charsEnd:0});return u.a.createElement(M.a,{className:a.container},r?u.a.createElement(u.a.Fragment,null,u.a.createElement(R.a,{className:a.tokenImage},u.a.createElement(H.a,{alt:r.description,height:28,onError:_.a,src:r.image})),u.a.createElement(V.a,{className:a.tokenData,primary:c(r.name),secondary:"token ID: ".concat(c(r.tokenId.toString()))})):u.a.createElement(h.a,{color:"disabled",size:"md",style:{opacity:.5},weight:"light"},"Select a token*"))},W=Object(i.a)(z),Q=function(e){var t=e.initialValue,n=e.tokens,a=W();return u.a.createElement(x.a,{className:a.selectMenu,component:B.a,disabled:!n.length,initialValue:t,name:"nftTokenId",renderValue:function(e){return u.a.createElement(q,{tokenId:e,tokens:n})},validate:P.p},n.map((function(e){return u.a.createElement(M.a,{key:"".concat(e.assetAddress,"-").concat(e.tokenId),value:e.tokenId},u.a.createElement(R.a,{className:a.tokenImage},u.a.createElement(H.a,{alt:e.name,height:28,onError:_.a,src:e.image})),u.a.createElement(V.a,{primary:e.name,secondary:"token ID: ".concat(e.tokenId)}))})))},U=Object(D.a)({heading:{padding:"".concat(T.md," ").concat(T.lg),justifyContent:"flex-start",boxSizing:"border-box",height:"74px"},annotation:{letterSpacing:"-1px",color:T.secondaryText,marginRight:"auto",marginLeft:"20px"},manage:{fontSize:T.lg},closeIcon:{height:"35px",width:"35px"},qrCodeBtn:{cursor:"pointer"},formContainer:{padding:"".concat(T.md," ").concat(T.lg)},buttonRow:{height:"84px",justifyContent:"center",gap:"16px"}}),J=Object(D.a)({container:{minHeight:"55px",padding:0,width:"100%"},tokenData:{padding:0,margin:0,lineHeight:"14px"},tokenImage:{display:"block",marginRight:T.sm,height:28,width:"auto"}}),K=Object(D.a)({selectMenu:{paddingRight:0},tokenImage:{marginRight:T.sm}}),G=n(245),X=Object(i.a)(J),Y=function(e){var t=e.assetAddress,n=e.assets,a=X(),r=t?n[t]:null,c=Object(A.b)({charsStart:40,charsEnd:0});return u.a.createElement(M.a,{className:a.container},r&&r.numberOfTokens?u.a.createElement(u.a.Fragment,null,u.a.createElement(R.a,null,u.a.createElement(H.a,{className:a.tokenImage,alt:r.name,onError:_.a,src:r.image})),u.a.createElement(V.a,{className:a.tokenData,primary:c(r.name),secondary:"".concat(Object(G.a)(r.numberOfTokens.toString())," ").concat(r.symbol)})):u.a.createElement(h.a,{color:"disabled",size:"md",style:{opacity:.5},weight:"light"},"Select an asset*"))},Z=Object(i.a)(K),$=function(e){var t=e.assets,n=e.initialValue,a=Z(),r=X(),c=Object.keys(t);return u.a.createElement(x.a,{className:a.selectMenu,component:B.a,disabled:!c.length,initialValue:n,name:"assetAddress",renderValue:function(e){return u.a.createElement(Y,{assetAddress:e,assets:t})},validate:P.p},c.map((function(e){var n=t[e];return u.a.createElement(M.a,{key:n.slug,value:e},u.a.createElement(R.a,null,u.a.createElement(H.a,{className:r.tokenImage,alt:n.name,onError:_.a,src:n.image})),u.a.createElement(V.a,{primary:n.name,secondary:"Count: ".concat(Object(G.a)(n.numberOfTokens.toString())," ").concat(n.symbol)}))})))},ee={setMax:function(e,t,n){n.changeValue(t,"amount",(function(){return e[0]}))},onTokenChange:function(e,t,n){n.changeValue(t,"amount",(function(){return""}))},setRecipient:function(e,t,n){n.changeValue(t,"recipientAddress",(function(){return e[0]}))}},te=Object(i.a)(U);t.default=function(e){var t=e.initialValues,n=e.onClose,i=e.onNext,o=e.recipientAddress,j=e.selectedToken,x=te(),R=Object(d.f)(I.b),V=Object(d.f)(I.c),M=Object(d.f)(y.f),T=Object(l.useState)((function(){var e,n={address:o||"",name:""};if(!(null===t||void 0===t?void 0:t.recipientAddress)&&!o)return n;var a=null!==(e=null===t||void 0===t?void 0:t.recipientAddress)&&void 0!==e?e:o,r=M.find((function(e){var t=e.address;return Object(N.f)(a,t)}));return r||n})),D=Object(a.a)(T,2),F=D[0],z=D[1],B=Object(l.useState)(!0),P=Object(a.a)(B,2),H=P[0],_=P[1],L=Object(l.useState)(!1),q=Object(a.a)(L,2),W=q[0],U=q[1];u.a.useMemo((function(){null===F&&H&&_(!1)}),[F,H]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{align:"center",className:x.heading,grow:!0},u.a.createElement(h.a,{className:x.manage,noMargin:!0,weight:"bolder"},"Send collectible"),u.a.createElement(h.a,{className:x.annotation},"1 of 2"),u.a.createElement(c.a,{disableRipple:!0,onClick:n},u.a.createElement(s.a,{className:x.closeIcon}))),u.a.createElement(g.a,null),u.a.createElement(b.a,{formMutators:ee,initialValues:t,onSubmit:function(e){e.recipientAddress||(e.recipientAddress=null===F||void 0===F?void 0:F.address),e.recipientName=null===F||void 0===F?void 0:F.name,e.assetName=R[e.assetAddress].name,i(e)}},(function(){var e,t=arguments.length<=2?void 0:arguments[2],a=arguments.length<=3?void 0:arguments[3],c=t.values.assetAddress,i=V.filter((function(e){return e.assetAddress===c})),o=function(e,t){var n,r,c=e;c.startsWith("ethereum:")&&(c=c.replace("ethereum:",""));var i=null!==(n=null===(r=M[c])||void 0===r?void 0:r.name)&&void 0!==n?n:"";a.setRecipient(c),z({name:null!==i&&void 0!==i?i:"",address:c}),t()},s=!W;return F&&(s=!F.address),u.a.createElement(u.a.Fragment,null,u.a.createElement(k,{field:"assetAddress",set:"nftTokenId",to:""}),u.a.createElement(f.a,{className:x.formContainer},u.a.createElement(S.a,null),u.a.createElement(m.a,{withArrow:!0}),F&&F.address?u.a.createElement("div",{onKeyDown:function(e){Object(A.a)(e.key,"Tab")||z({address:"",name:""})},onClick:function(){z({address:"",name:""})},role:"listbox",tabIndex:0},u.a.createElement(v.a,{margin:"xs"},u.a.createElement(h.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},"Recipient")),u.a.createElement(v.a,{align:"center",margin:"md"},u.a.createElement(p.a,{xs:12},u.a.createElement(r.EthHashInfo,{hash:F.address,name:F.name,showAvatar:!0,showCopyBtn:!0,explorerUrl:Object(C.d)(F.address)})))):u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{margin:"md"},u.a.createElement(p.a,{xs:11},u.a.createElement(w.a,{fieldMutator:a.setRecipient,pristine:H,setIsValidAddress:U,setSelectedEntry:z})),u.a.createElement(p.a,{center:"xs",className:x,middle:"xs",xs:1},u.a.createElement(E.a,{handleScan:o})))),u.a.createElement(v.a,{margin:"xs"},u.a.createElement(p.a,{between:"lg"},u.a.createElement(h.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},"Collectible"))),u.a.createElement(v.a,{margin:"sm"},u.a.createElement(p.a,null,u.a.createElement($,{assets:R,initialValue:null!==(e=null===j||void 0===j?void 0:j.assetAddress)&&void 0!==e?e:null===j||void 0===j?void 0:j.tokenAddress}))),u.a.createElement(v.a,{margin:"xs"},u.a.createElement(p.a,{between:"lg"},u.a.createElement(h.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},"Token ID"))),u.a.createElement(v.a,{margin:"md"},u.a.createElement(p.a,null,u.a.createElement(Q,{initialValue:null===j||void 0===j?void 0:j.tokenId,tokens:i})))),u.a.createElement(O.b.Footer,null,u.a.createElement(O.b.Footer.Buttons,{cancelButtonProps:{onClick:n},confirmButtonProps:{disabled:s,testId:"review-tx-btn",text:"Review"}})))})))}},1392:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1391);t.a=function(e){var t=Object.assign({},e);return r.a.createElement(c.a,t)}},1399:function(e,t,n){"use strict";var a=n(69),r=n(0),c=n(1391),i=function(e){return{padding:"0 ".concat(e,"%"),flexDirection:"column",flex:"1 0 auto"}};t.a=function(e){var t=e.children,n=e.decorators,o=e.formMutators,s=e.initialValues,l=e.onSubmit,u=e.padding,d=void 0===u?0:u,m=e.subscription,b=e.testId,f=void 0===b?"":b,p=e.validation;return r.createElement(c.b,{decorators:n,initialValues:s,mutators:o,onSubmit:l,render:function(e){var n=e.handleSubmit,c=Object(a.a)(e,["handleSubmit"]);return r.createElement("form",{"data-testid":f,onSubmit:n,style:i(d)},t(c.submitting,c.validating,c,c.form.mutators))},subscription:m,validate:p})}},1406:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1409),r=function(e){var t=e.currentTarget;/token_placeholder/.test(t.src)||(t.src=a.a)};n(432)},1408:function(e,t,n){"use strict";var a=n(69),r=n(5),c=n(7),i=n(8),o=n(9),s=n(0),l=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(a.a)(e,["children"]);return s.createElement("b",n,t)}}]),n}(s.PureComponent);t.a=l},1409:function(e,t,n){"use strict";t.a=n.p+"static/media/token_placeholder.c1abe466.svg"},1412:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(48),r=n(321),c=n(395),i=n(525),o=n.n(i),s=n(0),l=n(1441),u=n.n(l),d=n(11),m=n(499),b=Object(m.a)({heading:{padding:d.lg,justifyContent:"space-between",maxHeight:"75px",boxSizing:"border-box"},loaderContainer:{width:"100%",height:"100%"},close:{height:"25px",width:"25px",color:d.secondaryText},detailsContainer:{backgroundColor:d.background,maxHeight:"450px"},buttonRow:{height:"84px",justifyContent:"center"},button:{"&:last-child":{marginLeft:d.sm}}}),f=n(332),p=n(139),g=n(156),h=n(118),v=n(155),E=n(86),O=n(107),j=Object(c.a)(b),x=function(e){var t=e.isOpen,n=e.onClose,c=e.onScan,i=j(),l=Object(s.useState)(!1),d=Object(a.a)(l,2),m=d[0],b=d[1],x=Object(s.useState)(null),k=Object(a.a)(x,2),y=k[0],I=k[1],S=Object(s.useState)(!1),w=Object(a.a)(S,2),C=w[0],N=w[1],A=s.createRef(),R=s.useCallback((function(){A.current.openImageDialog()}),[A]);Object(s.useEffect)((function(){m||!C||y||(b(!0),R())}),[C,R,m,b,y]);var V=function(e,t){if(e)return console.error("QR code error",e),void("NotAllowedError"===e.name||"PermissionDismissedError"===e.name?(N(!0),b(!1)):I("The QR could not be read"));t?c(t):C&&I("The QR could not be read")};return s.createElement(f.c,{description:"Receive Tokens Form",handleClose:n,open:t,title:"Receive Tokens"},s.createElement(O.a,{align:"center",className:i.heading,grow:!0},s.createElement(E.a,{noMargin:!0,size:"xl"},"Scan QR"),s.createElement(r.a,{disableRipple:!0,onClick:n},s.createElement(o.a,{className:i.close}))),s.createElement(v.a,null),s.createElement(h.a,{className:i.detailsContainer,layout:"column",middle:"xs"},y&&s.createElement(p.a,{padding:"md",margin:"md"},y),s.createElement(u.a,{legacyMode:C,onError:function(e){return V(e,null)},onScan:function(e){return V(null,e)},ref:A,style:{width:"400px",height:"400px"},facingMode:"user"})),s.createElement(v.a,null),s.createElement(O.a,{align:"center",className:i.buttonRow},s.createElement(g.a,{className:i.button,color:"secondary",minWidth:154,onClick:n},"Close"),s.createElement(g.a,{className:i.button,color:"primary",minWidth:154,onClick:function(){N(!0),I(null),b(!1)},variant:"contained"},"Upload an image")))}},1418:function(e,t,n){"use strict";t.a=n.p+"static/media/qrcode.fec1b6d8.svg"},1419:function(e,t,n){"use strict";var a,r,c=n(25),i=n(0),o=n.n(i),s=n(24),l=n(23),u=s.default.div(a||(a=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px 0;\n\n  svg {\n    margin: 0 12px 0 4px;\n  }\n"]))),d=Object(s.default)(l.Divider)(r||(r=Object(c.a)(["\n  width: 100%;\n"])));t.a=function(e){var t=e.withArrow;return o.a.createElement(u,null,t&&o.a.createElement(l.Icon,{type:"arrowDown",size:"md"}),o.a.createElement(d,null))}},1426:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(48),r=n(395),c=n(0),i=n.n(c),o=n(1418),s=n(1412),l=n(126),u=Object(r.a)({qrCodeBtn:{cursor:"pointer"}}),d=function(e){var t=e.handleScan,n=u(),r=Object(c.useState)(!1),d=Object(a.a)(r,2),m=d[0],b=d[1],f=function(){b(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{alt:"Scan QR",className:n.qrCodeBtn,height:20,onClick:function(){b(!0)},role:"button",src:o.a,testId:"qr-icon"}),m&&i.a.createElement(s.a,{isOpen:m,onClose:f,onScan:function(e){t(e,f)}}))}},1431:function(e,t,n){"use strict";var a,r=n(25),c=n(0),i=n.n(c),o=n(55),s=n(23),l=n(24),u=n(22),d=n(67),m=n(86),b=n(1408),f=n(11),p=n(139),g=Object(u.k)().nativeCoin,h=Object(l.default)(p.a)(a||(a=Object(r.a)(["\n  font-size: 12px;\n  line-height: 1.08;\n  letter-spacing: -0.5px;\n  background-color: ",";\n  width: fit-content;\n  padding: 5px 10px;\n  margin-top: ",";\n  margin-left: 40px;\n  border-radius: 3px;\n"])),f.border,f.xs);t.a=function(){var e=Object(o.f)(d.i),t=e.address,n=e.ethBalance,a=e.name;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.EthHashInfo,{hash:t,name:a,explorerUrl:Object(u.d)(t),showAvatar:!0,showCopyBtn:!0}),n&&i.a.createElement(h,null,i.a.createElement(m.a,{noMargin:!0},"Balance: ",i.a.createElement(b.a,{"data-testid":"current-eth-balance"},"".concat(n," ").concat(g.symbol)))))}},1432:function(e,t,n){"use strict";var a=n(13),r=n(69),c=n(500),i=n(502),o=n(1310),s=n(506),l=n(0),u=n.n(l),d={minWidth:"100%"};t.a=function(e){var t=e.classes,n=e.disableError,l=e.formControlProps,m=e.input,b=m.name,f=m.onChange,p=m.value,g=Object(r.a)(m,["name","onChange","value"]),h=e.label,v=e.meta,E=e.renderValue,O=Object(r.a)(e,["classes","disableError","formControlProps","input","label","meta","renderValue"]),j=(v.submitError&&!v.dirtySinceLastSubmit||v.error)&&v.touched&&!n,x=Object(a.a)(Object(a.a)({},g),{},{name:b});return u.a.createElement(c.a,Object.assign({},l,{error:j,style:d}),u.a.createElement(o.a,{htmlFor:b},h),u.a.createElement(s.a,Object.assign({classes:t,inputProps:x,onChange:f,renderValue:E,value:p},O)),j&&u.a.createElement(i.a,null,v.error||v.submitError))}},1443:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n(1391);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a.Component,a.Component;var o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={previous:t.input.value},n}i(t,e);var n=t.prototype;return n.componentDidUpdate=function(){var e=this.props,t=e.children,n=e.input.value,a=this.state.previous;n!==a&&(this.setState({previous:n}),t(n,a))},n.render=function(){return null},t}(a.Component),s=function(e){var t=e.name,n=e.children;return Object(a.createElement)(r.a,{name:t,subscription:{value:!0},allowNull:!0,render:function(e){return Object(a.createElement)(o,c({},e,{children:n}))}})};a.Component},1463:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return R}));var a=n(69),r=n(48),c=n(13),i=n(1),o=n.n(i),s=n(12),l=n(23),u=n(586),d=n(2771),m=n(0),b=n.n(m),f=n(55),p=n(524),g=n(22),h=n(17),v=n(333),E=n(150),O=n(54),j=n(30),x=n(395),k=n(499),y=Object(x.a)(Object(k.a)({root:{overflow:"hidden",borderRadius:4,fontSize:"15px",width:"500px"}})),I=Object(x.a)(Object(k.a)({root:{fontSize:"14px",width:"420px"}})),S=n(119),w=n(29),C=Object(g.j)(),N=function(e){var t=e.addressBookEntries,n=e.fieldMutator,a=e.label,r=void 0===a?"Recipient":a,i=e.setIsValidAddress,m=e.setSelectedEntry,f=e.setValidationText,v=e.validationText,x=function(e){m(e),n(e.address)},k=function(e){var n=Object(p.j)(e);if(i(!n),!n){var a=Object(E.b)(t,{inputValue:e});return 1===a.length?a[0]:e}f(n)},N=function(){var e=Object(s.a)(o.a.mark((function e(t,a,r){var c,i,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next="input"===e.t0?3:31;break;case 3:if(c=Object(S.c)(a)){e.next=6;break}return e.abrupt("break",31);case 6:if(!Object(g.u)(h.b.DOMAIN_LOOKUP)||!Object(O.e)(c)&&!Object(O.d)(c)){e.next=24;break}return i="",e.prev=8,e.next=11,Object(j.b)(c);case 11:i=e.sent,e.next=17;break;case 14:e.prev=14,e.t1=e.catch(8),Object(w.c)(w.b._101,e.t1.message);case 17:if(s=k(i)){e.next=21;break}return n(""),e.abrupt("break",31);case 21:return x("string"===typeof s?{address:i,name:c,chainId:C}:s),e.abrupt("break",31);case 24:if(l=k(c)){e.next=28;break}return n(""),e.abrupt("break",31);case 28:return x("string"===typeof l?{address:l,name:"",chainId:C}:l),e.abrupt("break",31);case 31:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(t,n,a){return e.apply(this,arguments)}}(),A=y(),R=I();return b.a.createElement(d.a,{closeIcon:null,openOnFocus:!1,filterOptions:E.b,freeSolo:!0,onChange:function(e,t,n){switch(n){case"select-option":var a=t,r=a.address,c=a.name,i=a.chainId;x({address:r,name:c,chainId:i})}},onInputChange:N,options:t,id:"address-book-input",renderInput:function(e){return b.a.createElement(u.a,Object.assign({},e,{autoFocus:!0,error:!!v,fullWidth:!0,variant:"filled",label:v||r,InputLabelProps:{shrink:!0,required:!0,classes:A},InputProps:Object(c.a)(Object(c.a)({},e.InputProps),{},{classes:R})}))},getOptionLabel:function(e){return e.address},renderOption:function(e){var t=e.address,n=e.name;return b.a.createElement(l.EthHashInfo,{hash:t,name:n,showAvatar:!0})},role:"listbox",style:{display:"flex",flexGrow:1}})},A=function(e){var t=Object(f.f)(v.f),n=Object(m.useState)(""),a=Object(r.a)(n,2),c=a[0],i=a[1];return Object(m.useEffect)((function(){e.errorMsg&&i(e.errorMsg)}),[e.errorMsg]),b.a.createElement(N,Object.assign({addressBookEntries:t,setValidationText:i,validationText:c},e))},R=function(e){var t=e.setIsValidAddress,n=e.setSelectedEntry,c=Object(a.a)(e,["setIsValidAddress","setSelectedEntry"]),i=Object(f.f)(v.f),l=Object(m.useState)([]),u=Object(r.a)(l,2),d=u[0],g=u[1],h=Object(m.useState)(""),O=Object(r.a)(h,2),j=O[0],x=O[1];Object(m.useEffect)((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.c)(i);case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var k=function(){var e=Object(s.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===a||void 0===a?void 0:a.address)){e.next=7;break}return e.next=3,Object(p.k)(a.address);case 3:r=e.sent,t(!r),x(null!==r&&void 0!==r?r:""),n(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return b.a.createElement(N,Object.assign({addressBookEntries:d,setIsValidAddress:t,setSelectedEntry:k,setValidationText:x,validationText:j},c))}},1535:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n(47),r=n(314),c=function(e){return e[r.a]},i=Object(a.a)(c,(function(e){return e})),o=Object(a.a)((function(e){return e[r.b]}),(function(e){return e})),s=Object(a.a)(c,(function(e){return e?Object.values(e):[]})),l=Object(a.a)(o,(function(e){var t=e.map((function(e){return e.assetAddress})),n=new Set(t);return Array.from(n)})),u=Object(a.a)(o,(function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))})),d=Object(a.a)(s,l,(function(e,t){return e.sort((function(e,t){return e.name.localeCompare(t.name)})).filter((function(e){var n=e.address;return t.includes(n)}))}))},1582:function(e,t,n){"use strict";var a=n(3),r=n(14),c=n(0),i=(n(16),n(15)),o=n(18),s=n(191),l=c.forwardRef((function(e,t){var n=e.classes,o=e.className,l=Object(r.a)(e,["classes","className"]),u=c.useContext(s.a);return c.createElement("div",Object(a.a)({className:Object(i.default)(n.root,o,"flex-start"===u.alignItems&&n.alignItemsFlexStart),ref:t},l))}));t.a=Object(o.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(l)}}]);
//# sourceMappingURL=43.0061c6eb.chunk.js.map