(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),i=(a(79),a(80),a(67)),l=a(37),s=a(142),u=a(137),m=a(143),d=a(145),p=a(144),g=a(30),E="GET_USER_DATA",f="https://api.github.com/users/",h={data:{},username:"",loading:!1,error:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case E:return Object(g.a)({},e,{loading:!0,error:!1,data:h.data});case"RECEIVED_USER_DATA_SUCCESS":return Object(g.a)({},e,{data:n,loading:!1});case"RECEIVED_USER_DATA_FAILED":return Object(g.a)({},e,{loading:!1,error:!0});case"USER_INPUT":return Object(g.a)({},e,{username:n});default:return e}},y=a(23),x=function(e){return e||h},v=function(){return Object(y.a)(x,function(e){return e.username})},w=function(){return{type:"RECEIVED_USER_DATA_FAILED"}},j=function(e){return{type:"RECEIVED_USER_DATA_SUCCESS",payload:e}},S=a(135),C=a(136),O=a(57),F=a.n(O),T=Object(S.a)({container:{display:"flex",alignContent:"center",justifyContent:"center",marginTop:50,marginLeft:35,marginRight:35,overflowWrap:"break-word"},icon:{paddingRight:10,fontSize:50,color:"#ea8685"},text:{color:"#fff",marginTop:10,wordWrap:"break-word"}}),N=function(e){var t=e.error,a=T();return r.a.createElement("div",{className:a.container},r.a.createElement(F.a,{className:a.icon}),r.a.createElement(C.a,{variant:"h5",gutterBottom:!0,className:a.text},t))},_=a(146),A=a(140),R=a(139),k=a(138),U=Object(S.a)({card:{width:400,backgroundColor:"#ecf0f1"},text:{color:"#353b48"},subHeader:{color:"#34495e",fontWeight:600},media:{height:250,objectFit:"contain"},btn:{textDecorationLine:"none",width:"100%",backgroundColor:"#45aaf2",color:"#F2F2F2",borderRadius:5}}),D=function(e){var t=e.data,a=t.avatar_url,n=t.name,o=t.login,c=t.bio,i=t.html_url,l=t.location,s=t.followers,m=t.following,d=t.public_repos,g=U();return r.a.createElement("div",{style:{flexGrow:1}},r.a.createElement(u.a,{container:!0,style:{marginTop:50,justifyContent:"center"}},r.a.createElement(_.a,{className:g.card},r.a.createElement("div",{style:{display:"flex",alignContent:"center",justifyContent:"center"}},r.a.createElement(k.a,{image:a,style:{height:250,width:250,objectFit:"contain",margin:10}})),r.a.createElement(R.a,null,r.a.createElement(C.a,{variant:"h5",component:"h2",className:g.subHeader},n),r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary",component:"p",className:g.text},"@",o),r.a.createElement(C.a,{variant:"subtitle2",color:"textPrimary",component:"p",className:g.text},c),r.a.createElement(C.a,{variant:"body2",color:"textPrimary",component:"p",className:g.text},l),r.a.createElement(u.a,{container:!0,style:{marginTop:10}},r.a.createElement(u.a,{item:!0,sm:4},r.a.createElement(C.a,{variant:"h6",color:"textPrimary",component:"p",align:"center",className:g.subHeader},m),r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary",component:"p",align:"center",className:g.text},"Following")),r.a.createElement(u.a,{item:!0,sm:4},r.a.createElement(C.a,{variant:"h6",color:"textPrimary",component:"p",align:"center",className:g.subHeader},s),r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary",component:"p",align:"center",className:g.text},"Followers")),r.a.createElement(u.a,{item:!0,sm:4},r.a.createElement(C.a,{variant:"h6",color:"textPrimary",component:"p",align:"center",className:g.subHeader},d),r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary",component:"p",align:"center",className:g.text},"Repos")))),r.a.createElement(A.a,{style:{justifyContent:"center",flexGrow:1}},r.a.createElement("a",{href:i,target:"_blank",className:g.btn,rel:"noopener noreferrer"},r.a.createElement(p.a,{size:"medium",variant:"contained",fullWidth:!0,style:{backgroundColor:"inherit",color:"inherit"}},"Go to page"))))))},I=a(141),W=function(){return r.a.createElement("div",{style:{display:"flex",alignContent:"center",justifyContent:"center",marginTop:50}},r.a.createElement(I.a,null))},P=a(63),G=a.n(P),H=Object(S.a)({header:{color:"#F2F2F2",textAlign:"center",marginTop:"100px",fontWeight:500},icon:{fontSize:75,paddingRight:10},subheading:{color:"#F2F2F2",textAlign:"center",marginTop:"15px",fontStyle:"italic"}}),L=function(){var e=H();return r.a.createElement(u.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(C.a,{variant:"h1",color:"textSecondary",className:e.header},r.a.createElement(G.a,{className:e.icon}),"Git User"),r.a.createElement(C.a,{variant:"h6",color:"textSecondary",className:e.subheading},"Input a git user's username to get a link to their page."))},z=Object(S.a)({header:{color:"#F2F2F2",textAlign:"center",marginTop:"100px",fontWeight:500},icon:{fontSize:75,paddingRight:10},goBtnStyle:{padding:"10px"}}),B=Object(y.b)({data:Object(y.a)(x,function(e){return e.data}),username:v(),loading:Object(y.a)(x,function(e){return e.loading}),error:Object(y.a)(x,function(e){return e.error})}),V=Object(l.b)(B,function(e){return{onUserInput:function(t){return e({type:"USER_INPUT",payload:t.target.value})},onClear:function(){return e({type:"CLEAR_STATE"})},onSubmit:function(){return e({type:E})}}})(function(e){var t=e.data,a=e.username,o=e.loading,c=e.error,l=e.onSubmit,g=(e.onClear,e.onUserInput),E=z(),f=Object(n.useState)(""),h=Object(i.a)(f,2),b=h[0],y=h[1],x=c?r.a.createElement(N,{error:"@".concat(b," doesn't exist. Try another user.")}):null,v=0!==Object.keys(t).length?r.a.createElement(D,{data:t}):null,w=o?r.a.createElement(W,null):null;return r.a.createElement(s.a,{fixed:!0},r.a.createElement(u.a,{container:!0,spacing:10,direction:"column",alignContent:"center",alignItems:"stretch",style:{minHeight:"100vh",minWidth:"100vh"}},r.a.createElement(m.a,{width:"80%",justifyContent:"center"},r.a.createElement(L,null),r.a.createElement(m.a,{display:"flex",justifyContent:"center",width:"100%"},r.a.createElement(m.a,{width:"70%",color:"primary",marginTop:5},r.a.createElement(d.a,{fullWidth:!0,onChange:g,autoFocus:!0,placeholder:"Enter a github username",style:{color:"#F2F2F2",fontSize:20}})),r.a.createElement(m.a,{width:"15%",paddingLeft:5,paddingTop:6},r.a.createElement(p.a,{variant:"contained",fullWidth:!0,onClick:function(){""!==a.trim()&&(y(a),l())},className:E.goBtnStyle},"Go")))),x,w,v))});var J=function(){return r.a.createElement("div",null,r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(94);var M=a(66),$=a(21),q=a(25),K=a.n(q),Q=a(29),X=a(64),Y=a.n(X),Z=K.a.mark(ae),ee=K.a.mark(ne),te=K.a.mark(re);function ae(){var e,t;return K.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Q.c)(v());case 3:return t=a.sent,a.next=6,Y.a.get(f+t).then(function(t){e=t});case 6:return a.next=8,Object(Q.b)(j(e.data));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(Q.b)(w());case 14:case"end":return a.stop()}},Z,null,[[0,10]])}function ne(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.d)(E,ae);case 2:case"end":return e.stop()}},ee)}function re(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([ne()]);case 2:case"end":return e.stop()}},te)}var oe=a(65),ce=Object(M.a)(),ie=Object($.createStore)(b,Object(oe.composeWithDevTools)(Object($.applyMiddleware)(ce)));ce.run(re);var le=ie;c.a.render(r.a.createElement(l.a,{store:le},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a(113)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.d12bab75.chunk.js.map