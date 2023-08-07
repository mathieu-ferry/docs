"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[249],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),k=l,N=u["".concat(i,".").concat(k)]||u[k]||d[k]||r;return a?n.createElement(N,o(o({ref:t},m),{},{components:a})):n.createElement(N,o({ref:t},m))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},95900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={id:"boolean",title:"Boolean"},o=void 0,p={unversionedId:"language/boolean",id:"language/boolean",title:"Boolean",description:"Commands",source:"@site/docs/language/boolean.md",sourceDirName:"language",slug:"/language/boolean",permalink:"/docs/language/boolean",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/boolean.md",tags:[],version:"current",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"Programming",previous:{title:"Blob",permalink:"/docs/language/BlobClass"},next:{title:"Class",permalink:"/docs/language/ClassClass"}},i={},s=[{value:"Commands",id:"commands",level:3},{value:"bool",id:"bool",level:2},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"See also",id:"see-also",level:4},{value:"false",id:"false",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also-1",level:4},{value:"not",id:"not",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-1",level:4},{value:"See also",id:"see-also-2",level:4},{value:"true",id:"true",level:2},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-2",level:4},{value:"See also",id:"see-also-3",level:4}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#bool"},(0,l.kt)("strong",{parentName:"a"},"bool")," ( ",(0,l.kt)("em",{parentName:"a"},"expression")," : any ) : boolean"),"\xa0","\xa0","\xa0","\xa0","returns the boolean form of the expression you passed in ",(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#false"},(0,l.kt)("strong",{parentName:"a"},"false")," : boolean"),"\xa0","\xa0","\xa0","\xa0","returns the boolean value false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#not"},(0,l.kt)("strong",{parentName:"a"},"not")," ( ",(0,l.kt)("em",{parentName:"a"},"aBoolean")," : boolean ) : boolean"),"\xa0","\xa0","\xa0","\xa0","returns the negation of ",(0,l.kt)("em",{parentName:"td"},"aBoolean"),", changing true to false or false to true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#true"},(0,l.kt)("strong",{parentName:"a"},"true")," : boolean"),"\xa0","\xa0","\xa0","\xa0","returns the boolean value true")))),(0,l.kt)("h2",{id:"bool"},"bool"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"bool")," ( ",(0,l.kt)("em",{parentName:"p"},"expression")," : any ) : boolean"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Expression for which to return the boolean form")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean form of the expression")))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")," command returns the boolean form of the expression you passed in ",(0,l.kt)("em",{parentName:"p"},"any"),"."),(0,l.kt)("p",null,"The command can return the following values, depending on the ",(0,l.kt)("em",{parentName:"p"},"expression")," result type:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Expression result type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Return of the bool command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false if false, otherwise true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false if 0, other true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"other types"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,l.kt)("p",null,"This command is useful when the code expects a boolean value, and when the evaluation of the expression could result in a different type (e.g. if it evaluates to ",(0,l.kt)("strong",{parentName:"p"},"null")," or ",(0,l.kt)("strong",{parentName:"p"},"undefined"),")."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"},'var result : boolean\nresult=bool(1)  //true\nresult=bool(0)  //false\nresult=bool("hello")  //false\n\nvar o : object\no={test: 42}\nresult=bool(o.test)  //true\nresult=bool(o.otherTest)  //false\n\n')),(0,l.kt)("h4",{id:"see-also"},"See also"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/language/dateandtime#date"},(0,l.kt)("inlineCode",{parentName:"a"},"date")),(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/language/string#num"},(0,l.kt)("inlineCode",{parentName:"a"},"num")),(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/language/string#string"},(0,l.kt)("inlineCode",{parentName:"a"},"string")),(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/language/dateandtime#time"},(0,l.kt)("inlineCode",{parentName:"a"},"time"))),(0,l.kt)("h2",{id:"false"},"false"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"false")," : boolean"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"false")," returns the boolean value false."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,"The following example sets the variable ",(0,l.kt)("em",{parentName:"p"},"vbOptions")," to false:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"}," var vbOptions : boolean\n vbOptions=false\n")),(0,l.kt)("h4",{id:"see-also-1"},"See also"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#not"},(0,l.kt)("inlineCode",{parentName:"a"},"not")),(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"#true"},(0,l.kt)("inlineCode",{parentName:"a"},"true"))),(0,l.kt)("h2",{id:"not"},"not"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"not")," ( ",(0,l.kt)("em",{parentName:"p"},"aBoolean")," : boolean ) : boolean"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aBoolean"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean value to negate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Opposite of aBoolean")))),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"not")," function returns the negation of ",(0,l.kt)("em",{parentName:"p"},"aBoolean"),", changing true to false or false to true."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("p",null,"This example first assigns ",(0,l.kt)("strong",{parentName:"p"},"true")," to a variable, then changes the variable value to ",(0,l.kt)("strong",{parentName:"p"},"false"),", and then back to ",(0,l.kt)("strong",{parentName:"p"},"true"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"}," var vResult : boolean\n vResult=true // vResult is set to true\n vResult=not(vResult) // vResult is set to false\n vResult=not(vResult) // vResult is set to true\n")),(0,l.kt)("h4",{id:"see-also-2"},"See also"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#false"},(0,l.kt)("inlineCode",{parentName:"a"},"false")),(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"#true"},(0,l.kt)("inlineCode",{parentName:"a"},"true"))),(0,l.kt)("h2",{id:"true"},"true"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"true")," : boolean"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," returns the boolean value true."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("p",null,"The following example sets the variable ",(0,l.kt)("em",{parentName:"p"},"vbOptions")," to true:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"}," var vbOptions : boolean\n vbOptions=true\n")),(0,l.kt)("h4",{id:"see-also-3"},"See also"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#false"},(0,l.kt)("inlineCode",{parentName:"a"},"false")),(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"#not"},(0,l.kt)("inlineCode",{parentName:"a"},"not"))))}u.isMDXComponent=!0}}]);