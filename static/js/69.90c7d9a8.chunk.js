(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[69],{1535:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return m}));var a=n(47),r=n(314),o=function(e){return e[r.a]},i=Object(a.a)(o,(function(e){return e})),c=Object(a.a)((function(e){return e[r.b]}),(function(e){return e})),l=Object(a.a)(o,(function(e){return e?Object.values(e):[]})),s=Object(a.a)(c,(function(e){var t=e.map((function(e){return e.assetAddress})),n=new Set(t);return Array.from(n)})),d=Object(a.a)(c,(function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))})),m=Object(a.a)(l,s,(function(e,t){return e.sort((function(e,t){return e.name.localeCompare(t.name)})).filter((function(e){var n=e.address;return t.includes(n)}))}))},2776:function(e,t,n){"use strict";n.r(t);var a,r=n(48),o=n(19),i=n(0),c=n.n(i),l=n(3),s=n(14),d=(n(16),n(15)),m=n(400),u=n(18),f=i.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.raised,o=void 0!==r&&r,c=Object(s.a)(e,["classes","className","raised"]);return i.createElement(m.a,Object(l.a)({className:Object(d.default)(n.root,a),elevation:o?8:1,ref:t},c))})),p=Object(u.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(f),b=n(395),g=n(499),x=n(55),h=n(132),v=n.n(h),O=n(156),w=n(241),C=n(11),j=Object(b.a)({item:{backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 0 10px 0 rgba(33, 48, 77, 0.10)",boxSizing:"border-box",cursor:function(e){return e.granted?"pointer":"default"},display:"flex",flexDirection:"column",flexGrow:"1",minHeight:"250px",minWidth:"0",position:"relative","&:hover .showOnHover":{opacity:"1"},"&:active .showOnHover":{opacity:"1"}},mainContent:{display:"flex",flexDirection:"column",flexGrow:"1",position:"relative",zIndex:"1"},extraContent:{alignItems:"center",backgroundColor:"rgba(255, 243, 226, 0.6)",bottom:"0",cursor:"pointer",display:"flex",justifyContent:"center",left:"0",opacity:"0",position:"absolute",right:"0",top:"0",transition:"opacity 0.15s ease-out",zIndex:"5"},image:{backgroundColor:function(e){return"#".concat(e.backgroundColor)||!1},backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"contain",borderRadius:"8px",height:"178px",flexGrow:"1",width:"100%"},textContainer:{boxSizing:"border-box",color:C.fontColor,flexShrink:"0",fontSize:"12px",lineHeight:"1.4",padding:"15px 22px 20px"},title:{fontWeight:"bold",margin:"0",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},text:{margin:"0",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},buttonIcon:{fontSize:16,marginRight:C.sm},sendButton:{borderRadius:C.xs,minWidth:"85px","& > span":{fontSize:"14px"}}}),S=function(e){var t=e.data,n=e.onSend,a=Object(x.f)(w.b),r=j({backgroundColor:t.color,granted:a});return i.createElement("div",{className:r.item},i.createElement("div",{className:r.mainContent},i.createElement("div",{className:r.image,style:{backgroundImage:"url(".concat(t.image,")")}}),i.createElement("div",{className:r.textContainer},t.name&&i.createElement("h3",{className:r.title,title:t.name},t.name),t.description&&i.createElement("p",{className:r.text,title:t.description},t.description))),a&&i.createElement("div",{className:v()(r.extraContent,"showOnHover")},i.createElement(O.a,{className:r.sendButton,color:"primary",onClick:n,size:"small",variant:"contained"},"Send")))},k=n(86),E=n(1535),N=n(545),y=n(188),z=Object(b.a)(Object(g.a)({cardInner:{boxSizing:"border-box",maxWidth:"100%",padding:"52px 54px"},cardOuter:{boxShadow:"1px 2px 10px 0 rgba(212, 212, 211, 0.59)"},gridRow:(a={boxSizing:"border-box",columnGap:"30px",display:"grid",gridTemplateColumns:"1fr",marginBottom:"45px",maxWidth:"100%",rowGap:"45px","&:last-child":{marginBottom:"0"}},Object(o.a)(a,"@media (min-width: ".concat(C.screenXs,"px)"),{gridTemplateColumns:"1fr 1fr"}),Object(o.a)(a,"@media (min-width: ".concat(C.screenSm,"px)"),{gridTemplateColumns:"1fr 1fr 1fr 1fr"}),a),title:{alignItems:"center",display:"flex",margin:"0 0 18px"},titleImg:{backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"contain",borderRadius:"50%",height:"45px",margin:"0 10px 0 0",width:"45px"},titleText:{color:C.fontColor,fontSize:"18px",fontWeight:"normal",lineHeight:"1.2",margin:"0"},titleFiller:{backgroundColor:"#e8e7e6",flexGrow:1,height:"2px",marginLeft:"40px"},noData:{fontSize:C.lg,textAlign:"center"}}));t.default=function(){var e=Object(y.d)().trackEvent,t=z(),n=c.a.useState(),a=Object(r.a)(n,2),o=a[0],l=a[1],s=c.a.useState(!1),d=Object(r.a)(s,2),m=d[0],u=d[1],f=Object(x.f)(E.d),b=Object(x.f)(E.a);Object(i.useEffect)((function(){e({category:y.a,action:"Collectibles"})}),[e]);return c.a.createElement(p,{className:t.cardOuter},c.a.createElement("div",{className:t.cardInner},0===b.length&&c.a.createElement(k.a,{className:t.noData},"No collectibles available"),b.length>0&&b.map((function(e){return c.a.createElement(c.a.Fragment,{key:e.slug},c.a.createElement("div",{className:t.title},c.a.createElement("div",{className:t.titleImg,style:{backgroundImage:"url(".concat(e.image||"",")")}}),c.a.createElement("h2",{className:t.titleText},e.name),c.a.createElement("div",{className:t.titleFiller})),c.a.createElement("div",{className:t.gridRow},f.filter((function(t){var n=t.assetAddress;return e.address===n})).map((function(t){return c.a.createElement(S,{data:t,key:"".concat(e.slug,"_").concat(t.tokenId),onSend:function(){return function(e){l(e),u(!0)}(t)}})}))))}))),c.a.createElement(N.a,{activeScreenType:"sendCollectible",isOpen:m,onClose:function(){return u(!1)},selectedToken:o}))}}}]);
//# sourceMappingURL=69.90c7d9a8.chunk.js.map