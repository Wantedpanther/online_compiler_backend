(this.webpackJsonpcodex=this.webpackJsonpcodex||[]).push([[0],{107:function(e,a,t){e.exports=t(157)},112:function(e,a,t){},113:function(e,a,t){},156:function(e,a,t){},157:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),l=t(13),c=t.n(l),r=(t(112),t(42)),i=t(15),s=t(16),d=(t(113),t(192)),m=t(204),p=t(197),u=t(99),g=Object(u.a)({palette:{type:"dark",primary:{main:"#2196F3"},typography:{fontFamily:'"Poppins", sans-serif',color:"white"},text:{primary:"#fff",hint:"#fff"},background:{paper:"#19202b"}}}),f=t(96),b=t.n(f),h=(t(121),t(122),t(123),t(124),t(125),t(126),t(127),t(128),t(202)),x=t(206),v=t(207),E=t(198),y=t(208),w=t(159),k=t(200),S=t(71),C=t.n(S),N=t(69);N.a.initializeApp({apiKey:"AIzaSyA2KhsWCTk8FQDpB440p4sJEeXq_NJ-1d8",authDomain:"rhythm-3ef06.firebaseapp.com",databaseURL:"https://rhythm-3ef06.firebaseio.com",projectId:"rhythm-3ef06",storageBucket:"rhythm-3ef06.appspot.com",messagingSenderId:"917983204838",appId:"1:917983204838:web:68cacc66e0f9940946b227",measurementId:"G-XYSWYMDDRH"}),N.a.analytics();var O=N.a,I=t(97),j=t.n(I),T=Object(d.a)((function(e){return Object(m.a)({body:{display:"grid",gridGap:"0 20px",gridTemplateRows:"calc(100% - 200px) 200px","& .ace_gutter":{backgroundColor:"#19202b"},"& .ace_editor":{backgroundColor:"#19202b"},"& .ace_support.ace_function":{color:"#2196F3"},[e.breakpoints.up("sm")]:{gridTemplateRows:"unset",gridTemplateColumns:"calc(100% - 350px) 330px"}},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},editor:{height:"100% !important",width:"100% !important",borderBottom:"2px solid #2196F3","& *":{fontFamily:"monospace"},[e.breakpoints.up("sm")]:{borderBottom:"none",borderRight:"2px solid #2196F3"}},output:{display:"grid",gridTemplateRows:"auto 1fr auto"},selectlang:{height:"32px",margin:"7px 0",textAlign:"left !important"},runPanel:{textAlign:"left !important"},runBtn:{marginRight:10},inputModal:{height:"fit-content",width:"90%",maxHeight:500,maxWidth:400,background:"#19202b",borderRadius:"5px",padding:15,textAlign:"left","& text":{display:"block",color:"#2196F3",fontSize:"20px"},"& smallertext":{display:"block",fontSize:"14px"}},modalInput:{width:"100%",marginTop:"10px"},runBtnOnModal:{marginTop:"20px"},buttonProgress:{color:"white",margin:"auto"},outputTitle:{color:"#2196F3",margin:"7px 0",textAlign:"left !important"},outputTerminal:{textAlign:"left",color:"white",overflow:"auto",whiteSpace:"pre-line",fontFamily:"monospace",fontSize:"17px"}})}));var z=function(e){var a=e.storeAt,t=e.index,n=T(),l=o.a.useState(16),c=Object(s.a)(l,2),r=(c[0],c[1]),i=o.a.useState(!0),d=Object(s.a)(i,2),m=d[0],u=d[1],f=o.a.useState(""),S=Object(s.a)(f,2),N=S[0],I=S[1],z=o.a.useState("c_cpp"),B=Object(s.a)(z,2),A=B[0],L=B[1],P=o.a.useState(""),F=Object(s.a)(P,2),R=F[0],D=F[1],J=o.a.useState(""),M=Object(s.a)(J,2),_=M[0],G=M[1],W=o.a.useState(!1),X=Object(s.a)(W,2),H=X[0],q=X[1],K=o.a.useState(!1),Y=Object(s.a)(K,2),Q=Y[0],U=Y[1],V=o.a.useState(""),Z=Object(s.a)(V,2),$=Z[0],ee=Z[1],ae=!0;function te(){return o.a.createElement(h.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:N,onChange:function(e){I(e.target.value)},variant:"outlined",className:n.selectlang,disabled:Q,disabled:ae},o.a.createElement(x.a,{value:"cpp"},"C++"))}return localStorage.getItem("codex-codes")&&JSON.parse(localStorage.getItem("codex-codes"))[t].key===a.substring(a.indexOf("/")+1)&&(ae=!1),console.log("Let edit: "+ae),console.log(a),window.addEventListener("resize",(function(e){window.innerWidth>600?r(20):r(14)})),o.a.useEffect((function(){window.innerWidth>600?r(20):r(14),O.database().ref(a).once("value").then((function(e){u(!1),I(e.val().language),D(e.val().code)}))}),[]),o.a.useEffect((function(){if(""!==N){var e={cpp:"c_cpp",java:"java",c:"c_cpp",cs:"csharp",rb:"ruby",py:"python",kt:"kotlin",swift:"swift"};console.log(e[N]),L(e[N])}if(""!==N&&!ae&&(O.database().ref(a+"/language").set(N),localStorage.getItem("codex-codes"))){var n=JSON.parse(localStorage.getItem("codex-codes"));n[t].lang=N,localStorage.setItem("codex-codes",JSON.stringify(n))}}),[N]),o.a.useEffect((function(){""===R.trim()||ae||O.database().ref(a+"/code").set(R)}),[R]),o.a.createElement(p.a,{theme:g},o.a.createElement(v.a,{className:n.backdrop,open:m,onClick:function(){u(!1)}},o.a.createElement(E.a,{color:"primary"})),o.a.createElement(v.a,{className:n.backdrop,open:H,onClick:function(){q(!1),U(!1)}},o.a.createElement("div",{className:n.inputModal,onClick:function(e){e.stopPropagation()}},o.a.createElement("text",null,"Input"),o.a.createElement("smallertext",null,"If your code requires an input, please type it down below otherwise leave it empty. For multiple inputs, type in all your inputs line by line."),o.a.createElement(y.a,{id:"outlined-basic",label:"STD Input",variant:"filled",className:n.modalInput,value:$,onChange:function(e){ee(e.target.value)},spellCheck:!1,rowsMax:7,multiline:!0}),o.a.createElement(w.a,{variant:"contained",color:"primary",className:n.runBtnOnModal,startIcon:o.a.createElement(C.a,null),onClick:function(){q(!1),U(!0);var e={method:"post",url:"http://ec2-15-228-5-65.sa-east-1.compute.amazonaws.com/api",headers:{"Content-Type":"application/json"},data:{code:R,language:N,input:$}};j()(e).then((function(e){var a,t;console.log(e.data),U(!1),(null===(a=e.data)||void 0===a?void 0:a.output)&&G(e.data.output),(null===(t=e.data)||void 0===t?void 0:t.error)&&G((function(a){var t;return a+(null===(t=e.data)||void 0===t?void 0:t.error)}))})).catch((function(e){U(!1),G(e)}))}},"Run"))),o.a.createElement("div",{className:n.body},o.a.createElement(b.a,{mode:A,theme:"dracula",onChange:function(e){D(e)},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,fontSize:20,showPrintMargin:!1},value:R,className:n.editor,readOnly:ae}),o.a.createElement("div",{className:n.output},o.a.createElement("div",{className:n.outputTitle},"Output"),o.a.createElement("div",{className:n.outputTerminal},"".concat(_)),o.a.createElement("div",{className:n.runPanel},o.a.createElement(w.a,{size:"small",variant:"contained",color:"primary",className:n.runBtn,startIcon:o.a.createElement(C.a,null),onClick:function(){q(!0)},disabled:Q},"Run"),o.a.createElement(te,null),Q&&o.a.createElement(k.a,{size:14,className:n.buttonProgress})))))},B=Object(d.a)((function(e){return Object(m.a)({editorPage:{height:"100%",width:"100%",display:"grid",gridGap:"14px",gridTemplateRows:"auto 1fr"},brandingLogo:{cursor:"pointer",display:"flex",justifyContent:"start",alignItems:"center",gap:"5px",color:"#2f9bff",fontSize:"26px",textDecoration:"none"},header:{display:"grid",gridTemplateColumns:"repeat(3,1fr)","& > *":{margin:"auto 0"}},codeTitle:{color:"#2196F3",backgroundColor:"transparent",border:"none",outline:"none",textAlign:"center",height:"100%",width:"100%"},body:{height:"100%",width:"100%",display:"grid",gridTemplateRows:"70% 30%"}})}));var A=function(e){var a=B(),t=(Object(i.g)(),o.a.useState("")),n=Object(s.a)(t,2),l=n[0],c=n[1],d=o.a.useState(!1),m=Object(s.a)(d,2),u=m[0],f=m[1];return o.a.useEffect((function(){O.database().ref("CodeX/"+e.match.params.editorID+"/className").once("value").then((function(e){c(e.val())})),localStorage.getItem("codex-codes")&&JSON.parse(localStorage.getItem("codex-codes"))[e.match.params.editorIndex].key===e.match.params.editorID&&f(!0)}),[]),o.a.useEffect((function(){if(""!==l.trim()&&u&&(O.database().ref("CodeX/"+e.match.params.editorID+"/className").set(l),console.log(localStorage.getItem("codex-codes")),localStorage.getItem("codex-codes"))){var a=JSON.parse(localStorage.getItem("codex-codes"));a[e.match.params.editorIndex].name=l,localStorage.setItem("codex-codes",JSON.stringify(a))}}),[l]),o.a.createElement(p.a,{theme:g},o.a.createElement("div",{className:a.editorPage},o.a.createElement("div",{className:a.header},o.a.createElement(r.b,{to:"/",className:a.brandingLogo},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 640 512",fill:"#2f9bff"},o.a.createElement("path",{d:"M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"})),o.a.createElement("span",null,"CodeCompiler")),o.a.createElement("input",{value:l,onChange:function(e){c(e.target.value)},className:a.codeTitle,spellCheck:!1,readOnly:!u})),o.a.createElement(z,{storeAt:"CodeX/"+e.match.params.editorID,index:e.match.params.editorIndex})))},L=t(100),P=(t(156),t(199)),F=t(209),R=t(201),D=Object(d.a)((function(e){return Object(m.a)({codeBlock:{display:"inline-block",height:"fit-content",width:"fit-content",borderRadius:"5px",border:"2px solid #2196F3",paddingBottom:"40px",cursor:"pointer",margin:"0px 4px 10px 4px","& :hover":{color:"white"}},title:{color:"#2196F3",padding:7,borderBottom:"2px solid #2196F3",fontSize:"14px"}})}));var J=function(e){var a=e.blockTitle,t=e.blockLang,n=e.blockLink,l=D(),c=Object(i.g)(),r=o.a.useState(a),d=Object(s.a)(r,2),m=d[0];return d[1],o.a.createElement("div",{className:l.codeBlock,onClick:function(){c.push(n)}},o.a.createElement("div",{className:l.title},m+"."+t))},M=Object(d.a)((function(e){return Object(m.a)({codeBlocks:{textAlign:"left"}})}));var _=function(e){var a=e.classCodes,t=M();return console.log(a),o.a.createElement("div",{className:t.codeBlocks},a.map((function(e,a){return o.a.createElement(J,{key:e.key,blockTitle:e.name,blockLang:e.lang,blockLink:"/"+a+"/"+e.key})})))},G=Object(d.a)((function(e){return Object(m.a)({homePage:{height:"100%",width:"100%"},header:{width:"100%",display:"grid",gridGap:"20px 0",gridTemplateColumns:"repeat(3, 33.5%)",textAlign:"center","& > *":{margin:"auto 0"},[e.breakpoints.down("sm")]:{gridTemplateColumns:"unset",gridTemplateRows:"repeat(3, auto)"}},brandingLogo:{cursor:"pointer",display:"flex",justifyContent:"start",alignItems:"center",gap:"5px",color:"#2f9bff",fontSize:"26px",textDecoration:"none"},buttonGroup:{"& .MuiButton-outlinedPrimary":{borderWidth:"3px"},margin:"auto",width:"100%",[e.breakpoints.down("sm")]:{margin:0}},button:{width:"100%","& span":{textTransform:"none",color:"#fff"}},codeblocks:{width:"100%",marginTop:"10px",height:"calc(100% - 65px)",[e.breakpoints.down("sm")]:{height:"calc(100% - 115px)"}},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},createClassModal:{height:"fit-content",width:"90%",maxHeight:300,maxWidth:400,background:"#19202b",borderRadius:"5px",padding:15,textAlign:"left","& span":{display:"block"}},modalTitle:{fontSize:"20px"},modalDesc:{color:"#2196F3",fontSize:"13px"},modalInput:{width:"100%",marginTop:"10px"},modalSelect:{width:"100%",marginTop:"20px"},modalButton:{margin:"20px 10px 4px 0"}})}));var W=function(){var e=G(),a=Object(i.g)(),t=o.a.useState(g),n=Object(s.a)(t,2),l=n[0],c=(n[1],o.a.useState(!1)),d=Object(s.a)(c,2),m=d[0],u=d[1],f=o.a.useState([]),b=Object(s.a)(f,2),E=b[0],k=b[1];function S(){var t=o.a.useState(""),n=Object(s.a)(t,2),l=n[0],c=n[1],r=o.a.useState("cpp"),i=Object(s.a)(r,2),d=i[0],p=i[1];function g(){return o.a.createElement(P.a,{variant:"filled",className:e.modalSelect},o.a.createElement(F.a,{id:"demo-simple-select-filled-label"},"Language"),o.a.createElement(h.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:d,onChange:function(e){p(e.target.value)}},o.a.createElement(x.a,{value:"py"},"Python3"),o.a.createElement(x.a,{value:"c"},"C"),o.a.createElement(x.a,{value:"cpp"},"C++"),o.a.createElement(x.a,{value:"java"},"Java"),o.a.createElement(x.a,{value:"cs"},"C#"),o.a.createElement(x.a,{value:"go"},"Golang"),o.a.createElement(x.a,{value:"js"},"NodeJS")))}return o.a.createElement(v.a,{className:e.backdrop,open:m,onClick:function(){u(!1)}},o.a.createElement("div",{className:e.createClassModal,onClick:function(e){e.stopPropagation()}},o.a.createElement("span",{className:e.modalTitle},"Create New Class"),o.a.createElement("span",{className:e.modalDesc},"Please enter a proper class name and choose language"),o.a.createElement(y.a,{id:"outlined-basic",label:"Class Name",variant:"filled",className:e.modalInput,value:l,onChange:function(e){c(e.target.value)}}),o.a.createElement(g,null),o.a.createElement(w.a,{variant:"contained",color:"primary",className:e.modalButton,onClick:function(){console.log("Creating new class..."),O.database().ref("CodeX").push({className:l,language:d,code:""}).then((function(e){console.log(E),k([].concat(Object(L.a)(E),[{name:l,key:e.key,lang:d}])),a.push("/"+E.length+"/"+e.key)})),u(!1)}},"Create New Class"),o.a.createElement(w.a,{variant:"outlined",color:"secondary",className:e.modalButton,onClick:function(){u(!1)}},"Cancel")))}return o.a.useEffect((function(){localStorage.getItem("codex-codes")&&k(JSON.parse(localStorage.getItem("codex-codes")))}),[]),o.a.useEffect((function(){localStorage.setItem("codex-codes",JSON.stringify(E))}),[E]),o.a.createElement("div",{className:e.homePage},o.a.createElement(p.a,{theme:l},o.a.createElement("div",{className:e.header},o.a.createElement(r.b,{to:"/",className:e.brandingLogo},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 640 512",fill:"#2f9bff"},o.a.createElement("path",{d:"M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"})),o.a.createElement("span",null,"CodeCompiler")),o.a.createElement(R.a,{size:"small",color:"primary","aria-label":"large outlined primary button group",className:e.buttonGroup},o.a.createElement(w.a,{className:e.button,onClick:function(){u(!0)}},"New Code"))),o.a.createElement("div",{className:e.codeblocks},o.a.createElement(_,{classCodes:E})),o.a.createElement(S,null)))};var X=function(){return o.a.createElement(r.a,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/",component:W}),o.a.createElement(i.b,{exact:!0,path:"/:editorIndex/:editorID",component:A}),o.a.createElement(i.a,{to:"/"})))},H=Object(d.a)((function(e){return Object(m.a)({dynamicPage:{height:"100%",width:"100%"}})}));function q(){var e=H();return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:e.dynamicPage},o.a.createElement(X,null)))}var K=document.getElementById("root");c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),K)}},[[107,1,2]]]);
//# sourceMappingURL=main.44f9ded2.chunk.js.map