"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[821],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,b=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"lang-variables",title:"Variables"},i=void 0,s={unversionedId:"language/basics/lang-variables",id:"language/basics/lang-variables",title:"Variables",description:"Variables store data temporarily in memory.",source:"@site/docs/language/basics/lang-variables.md",sourceDirName:"language/basics",slug:"/language/basics/lang-variables",permalink:"/docs/language/basics/lang-variables",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-variables.md",tags:[],version:"current",frontMatter:{id:"lang-variables",title:"Variables"},sidebar:"Development",previous:{title:"Basics",permalink:"/docs/category/language"},next:{title:"Data types",permalink:"/docs/language/basics/lang-data-types"}},o={},p=[{value:"Declaring Variables",id:"declaring-variables",level:2},{value:"Examples",id:"examples",level:4},{value:"Assigning Data",id:"assigning-data",level:2},{value:"Sharing Variable Values",id:"sharing-variable-values",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variables")," store data temporarily in memory. "),(0,r.kt)("p",null,"When you set up your Qodly database, you specify the names and types of attributes that you want to use. Variables are much the same\u2014you also give them names and different types (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-data-types"},"Data types"),")."),(0,r.kt)("p",null,"Once created, you can use a variable wherever you need it in your code. For example, you might need to store a string variable in an attribute of same type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"myEntity.text=MyString //put the MyString variable contents into the text attribute\n")),(0,r.kt)("p",null,"Variables are language objects; you can create and use variables that will never appear on the screen. In your web forms, you can display variables on the screen, enter data into them, and print them in reports. "),(0,r.kt)("h2",{id:"declaring-variables"},"Declaring Variables"),(0,r.kt)("p",null,"You create variables by declaring them. When variables are declared, they are initialized to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-data-types#default-values"},(0,r.kt)("strong",{parentName:"a"},"default value corresponding to their type")),", which they will keep during the session as long as they have not been ",(0,r.kt)("a",{parentName:"p",href:"#assigning-data"},"assigned"),". "),(0,r.kt)("p",null,"You declare variables using the ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," keyword. It allows you to create basic variables (integer, string...) and to bind object variables with classes. To declare a variable of any type with the ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," keyword, use the following syntax:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"var <varName>{, <varName2>,...}{ : <varType>}")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"varName")," is the variable name, it must comply with the ",(0,r.kt)("a",{parentName:"p",href:"Concepts/identifiers.md"},"rules")," about identifiers."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"varType")," can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("a",{parentName:"li",href:"Concepts/data-types.md"},"basic type"),", in which case the variable contains a value of the declared type,"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("a",{parentName:"li",href:"Concepts/classes.md"},"class reference")," (4D class or user class), in which case the variable contains a reference to an object of the defined class.")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"varType")," is omitted, a variable of the ",(0,r.kt)("strong",{parentName:"p"},"variant")," type is created."),(0,r.kt)("p",null,"The following table lists all supported ",(0,r.kt)("inlineCode",{parentName:"p"},"varType")," values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"varType"),(0,r.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"String (text) value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},"Date value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"Time value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Long integer value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"number value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"picture")),(0,r.kt)("td",{parentName:"tr",align:null},"Picture value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blob")),(0,r.kt)("td",{parentName:"tr",align:null},"Scalar Blob value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collection")),(0,r.kt)("td",{parentName:"tr",align:null},"Collection value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:null},"Variant value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Object with default class (4D.Object)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4D.<className>")),(0,r.kt)("td",{parentName:"tr",align:null},"Object of the 4D class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cs.<className>")),(0,r.kt)("td",{parentName:"tr",align:null},"Object of the user class name")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"var myString : string  //a string variable\nvar myDate1, myDate2 : date  //several date variables\nvar myFile : 4D.File  //a file class object variable\nvar aSquare : cs.Rectangle  //a user class object variable\nvar myVar //a variant variable\nvar o : object //a generic object variable\n//equivalent to:  \nvar o : 4D.Object\nvar myClass : cs.MyClass\nvar dataclass : cs.Employee //ORDA dataclass class\nvar entity : cs.EmployeeEntity //ORDA entity class\n")),(0,r.kt)("h2",{id:"assigning-data"},"Assigning Data"),(0,r.kt)("p",null,"Data can be put into and copied out of variables. Putting data into a variable is called ",(0,r.kt)("strong",{parentName:"p"},"assigning the data to the variable")," and is done with the assignment operator (=). The assignment operator is also used to assign data to dataclass attributes."),(0,r.kt)("p",null,"You write the name of the variable that you want to be assigned on the left side of the assignment operator. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"MyNumber=3\n")),(0,r.kt)("p",null,"puts the number 3 into the variable ",(0,r.kt)("em",{parentName:"p"},"MyNumber"),". If ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," already had a value, then the number 3 replaces it."),(0,r.kt)("p",null,"Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," in an attribute called ",(0,r.kt)("em",{parentName:"p"},"size"),", you would write ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," on the right side of the assignment operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"myEntity.size=MyNumber\n")),(0,r.kt)("p",null,"In this case, ",(0,r.kt)("em",{parentName:"p"},"myEntity.size")," would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language."),(0,r.kt)("h2",{id:"sharing-variable-values"},"Sharing Variable Values"),(0,r.kt)("p",null,"A variable is local to a method, i.e. it is accessible only within the method in which it was created and not accessible outside of that method. "),(0,r.kt)("p",null,"When the method finishes, the variable is erased from memory. This is fine when a variable is needed only once and only in this method."),(0,r.kt)("p",null,"If you want to share values between methods, you can pass the variables as ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-parameters"},"parameters")," to the called methods. "),(0,r.kt)("p",null,"If you want to store value during the session, it is recommended to use the ",(0,r.kt)("a",{parentName:"p",href:"../SessionClass.md#storage"},"session storage")," shared object."))}d.isMDXComponent=!0}}]);