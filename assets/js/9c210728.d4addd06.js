"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9679],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,g=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},53999:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={id:"lang-data-types",title:"Data types"},i=void 0,p={unversionedId:"language/basics/lang-data-types",id:"language/basics/lang-data-types",title:"Data types",description:"Overview",source:"@site/docs/language/basics/lang-data-types.md",sourceDirName:"language/basics",slug:"/language/basics/lang-data-types",permalink:"/docs/language/basics/lang-data-types",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-data-types.md",tags:[],version:"current",frontMatter:{id:"lang-data-types",title:"Data types"},sidebar:"Develop",previous:{title:"Variables",permalink:"/docs/language/basics/lang-variables"},next:{title:"BLOB",permalink:"/docs/language/basics/lang-blob"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"type",id:"type",level:2},{value:"Description",id:"description",level:4},{value:"valueType",id:"valuetype",level:2},{value:"Description",id:"description-1",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Converting data types",id:"converting-data-types",level:2}],m={toc:d};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In Qodly, data are handled according to their type in two places: the datastore and the QodlyScript language."),(0,r.kt)("p",null,"Although they are usually equivalent, some data types available at the datastore level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Variable declaration"),(0,r.kt)("th",{parentName:"tr",align:null},"Datastore support (type)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-blob"},"blob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var blob")),(0,r.kt)("td",{parentName:"tr",align:null},"blob")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var 4D.Blob")),(0,r.kt)("td",{parentName:"tr",align:null},"object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-boolean"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-collection"},"collection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var collection")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-date"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var date")),(0,r.kt)("td",{parentName:"tr",align:null},"date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-null-undefined"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-number"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var integer"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"var number")),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-object"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var object")),(0,r.kt)("td",{parentName:"tr",align:null},"object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-picture"},"picture")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var picture")),(0,r.kt)("td",{parentName:"tr",align:null},"image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-text"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var string")),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-time"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var time")),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-null-undefined"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/basics/lang-variant"},"variant")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var variant")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Variant is actually not a ",(0,r.kt)("em",{parentName:"p"},"data")," type but a ",(0,r.kt)("em",{parentName:"p"},"variable")," type that can contain a value of any other data type. ")),(0,r.kt)("h2",{id:"type"},"type"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type")," ( ",(0,r.kt)("em",{parentName:"p"},"var")," : any ) : integer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"var"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable to be tested")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Data type number")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," command returns a numeric value that indicates the type of variable you have passed in the ",(0,r.kt)("em",{parentName:"p"},"var")," parameter. "),(0,r.kt)("p",null,"Qodly provides the following predefined constants:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Constant"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kBlob"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kBoolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kCollection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kDate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kInteger"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kNull"),(0,r.kt)("td",{parentName:"tr",align:"left"},"255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kObject"),(0,r.kt)("td",{parentName:"tr",align:"left"},"38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kPicture"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kString"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kUndefined"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kVariant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"12")))),(0,r.kt)("p",null,"You can apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," function to variables and sequential parameters ($1, $2...) of a method."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You cannot apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," function to scalar expressions such as object properties (emp.name) or collection elements (myColl","[5]","). To do this, you must use the ",(0,r.kt)("a",{parentName:"p",href:"#valuetype"},(0,r.kt)("inlineCode",{parentName:"a"},"valueType"))," command.")),(0,r.kt)("h2",{id:"valuetype"},"valueType"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"valueType")," ( ",(0,r.kt)("em",{parentName:"p"},"expression")," : any ) : integer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expression"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Expression whose resulting value to be tested")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Data type number")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"valueType")," command returns the type of the value resulting from the evaluation of the ",(0,r.kt)("em",{parentName:"p"},"expression")," you passed as parameter. "),(0,r.kt)("p",null,"The command returns a numeric value that can be compared with one of the following constants provided by Qodly:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Constant"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kBlob"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kBoolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kCollection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kDate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kInteger"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kNull"),(0,r.kt)("td",{parentName:"tr",align:"left"},"255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kObject"),(0,r.kt)("td",{parentName:"tr",align:"left"},"38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kPicture"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kString"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kUndefined"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kVariant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"12")))),(0,r.kt)("p",null,"This command is designed to return the type of a scalar expression, i.e. the value stored in or returned by the ",(0,r.kt)("em",{parentName:"p"},"expression")," parameter. In particular, it can be applied to the following Qodly expressions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"object properties (emp.name),"),(0,r.kt)("li",{parentName:"ul"},"collection elements (myCol","[5]",").")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Numerical object properties are always considered number values:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'var o : object\nvar vType : integer\no=newObject("value",42)\nvType=valueType(o.value) //vType=kNumber\n'))),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"You want to handle the various possible types of an object property value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"switch\n    :(valueType(o.value)==kNumber)\n  //handle a numeric value\n    :(valueType(o.value)==kString)\n  //handle a string\n    :(valueType(o.value)==kObject)\n  //handle a sub-object\n       ...\nend\n")),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"You want to sum up all numeric values in a collection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var col : collection\nvar colSum : number\ncol=newCollection("Hello",20,"World2",15,50,currentDate,true,10)\nfor(i,0,col.length-1) //-1 since collections start at 0\n    if(valueType(col[i])==kNumber)\n       colSum=colSum+col[i]\n    end\nend\n')),(0,r.kt)("h2",{id:"converting-data-types"},"Converting data types"),(0,r.kt)("p",null,'QodlyScript contains operators and commands to convert between data types, where such conversions are meaningful. QodlyScript enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.'),(0,r.kt)("p",null,"The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type to Convert"),(0,r.kt)("th",{parentName:"tr",align:null},"to String"),(0,r.kt)("th",{parentName:"tr",align:null},"to Number"),(0,r.kt)("th",{parentName:"tr",align:null},"to Date"),(0,r.kt)("th",{parentName:"tr",align:null},"to Time"),(0,r.kt)("th",{parentName:"tr",align:null},"to Boolean"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String (1)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"num")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number (2)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"num")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"(1) Strings formatted in JSON can be converted into scalar data, objects, or collections using the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonParse")," command."),(0,r.kt)("p",null,"(2) Time values can be treated as numbers."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.")))}k.isMDXComponent=!0}}]);