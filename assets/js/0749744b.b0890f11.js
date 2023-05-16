"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={id:"lang-operators",title:"Operators"},o=void 0,i={unversionedId:"language/basics/lang-operators",id:"language/basics/lang-operators",title:"Operators",description:"An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values.",source:"@site/docs/language/basics/lang-operators.md",sourceDirName:"language/basics",slug:"/language/basics/lang-operators",permalink:"/docs/language/basics/lang-operators",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-operators.md",tags:[],version:"current",frontMatter:{id:"lang-operators",title:"Operators"},sidebar:"Development",previous:{title:"Variant",permalink:"/docs/language/basics/lang-variant"},next:{title:"Methods",permalink:"/docs/language/basics/lang-methods"}},p={},s=[{value:"Terminology",id:"terminology",level:2},{value:"Assignment operator",id:"assignment-operator",level:2},{value:"Basic operators",id:"basic-operators",level:2},{value:"Compound assignment operators",id:"compound-assignment-operators",level:2},{value:"Short-circuit operators",id:"short-circuit-operators",level:2},{value:"Short-circuit AND operator (&amp;&amp;)",id:"short-circuit-and-operator-",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Short-circuit OR operator (||)",id:"short-circuit-or-operator-",level:3},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:"Precedence",id:"precedence",level:3},{value:"Ternary operator",id:"ternary-operator",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples-1",level:3},{value:"A simple example",id:"a-simple-example",level:4},{value:"Handling data from a table",id:"handling-data-from-a-table",level:4},{value:"Truthy and falsy",id:"truthy-and-falsy",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2")," uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values. "),(0,r.kt)("p",null,"The QodlyScript language supports the operators you may already know from other languages like C or JavaScript. The assignment operator is ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," and the equal to operator is ",(0,r.kt)("inlineCode",{parentName:"p"},"=="),". ",(0,r.kt)("a",{parentName:"p",href:"#basic-operators"},"Basic operators")," such as arithmetic operators (+, -, *, /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, or picture data types. Like JavaScript, the Qodly language supports the concept of ",(0,r.kt)("a",{parentName:"p",href:"#truthy-and-falsy"},"truthy and falsy values"),", which in use in ",(0,r.kt)("a",{parentName:"p",href:"#short-circuit-operators"},"short-cicrcuit operators"),". "),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("p",null,"The Qodly language supports ",(0,r.kt)("strong",{parentName:"p"},"binary")," and ",(0,r.kt)("strong",{parentName:"p"},"ternary")," operators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"binary operators operate on two targets (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"2 + 3"),") and appear in between their two targets."),(0,r.kt)("li",{parentName:"ul"},"ternary operators operate on three targets. Like C, QodlyScript has only one ternary operator, the ",(0,r.kt)("a",{parentName:"li",href:"#ternary-operator"},"ternary conditional operator")," (",(0,r.kt)("inlineCode",{parentName:"li"},"a ? b : c"),").")),(0,r.kt)("p",null,"The values that operators affect are operands. In the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2"),", the + symbol is a binary operator and its two operands are the values 1 and 2."),(0,r.kt)("h2",{id:"assignment-operator"},"Assignment operator"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"assignment operator")," (",(0,r.kt)("inlineCode",{parentName:"p"},"a=b"),") initializes or updates the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," with the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'myNumber=3 //assigns 3 to myNumber variable  \nmyDate=!2023/01/21! //assigns a date literal\nmyLength=length("Acme") //assigns the result of the command (4) to myLength\ncol=newCollection //col is initialized with an empty collection\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Do NOT confuse the assignment operator ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," with the equality comparison operator ",(0,r.kt)("inlineCode",{parentName:"p"},"=="),".")),(0,r.kt)("h2",{id:"basic-operators"},"Basic operators"),(0,r.kt)("p",null,"Operator results depend on the ",(0,r.kt)("strong",{parentName:"p"},"data types")," they are applied to. QodlyScript supports different operators on scalar data types. They are described with the data types, in the following sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-boolean#logical-operators"},(0,r.kt)("strong",{parentName:"a"},"Logical operators"))," (on ",(0,r.kt)("strong",{parentName:"li"},"boolean")," expressions)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-date#date-operators"},(0,r.kt)("strong",{parentName:"a"},"Date operators"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-time#time-operators"},(0,r.kt)("strong",{parentName:"a"},"Time operators"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-number#number-operators"},(0,r.kt)("strong",{parentName:"a"},"Number operators"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-number#bitwise-operators"},(0,r.kt)("strong",{parentName:"a"},"Bitwise operators"))," (on ",(0,r.kt)("strong",{parentName:"li"},"integer")," expressions)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-picture#picture-operators"},(0,r.kt)("strong",{parentName:"a"},"Picture operators"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"lang-string.md#string-operators"},(0,r.kt)("strong",{parentName:"a"},"String operators"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-null-undefined#null-operators"},(0,r.kt)("strong",{parentName:"a"},"Null operators"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-null-undefined#undefined-operators"},(0,r.kt)("strong",{parentName:"a"},"Undefined operators")))),(0,r.kt)("h2",{id:"compound-assignment-operators"},"Compound assignment operators"),(0,r.kt)("p",null,"QodlyScript provides ",(0,r.kt)("strong",{parentName:"p"},"compound assignment operators")," that combine assignment with another operation. One example is the addition assignment operator (",(0,r.kt)("inlineCode",{parentName:"p"},"+="),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"a=1 \na+=2 // a=3\n")),(0,r.kt)("p",null,"The following compound assignment operators are supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Assigns"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Addition"),(0,r.kt)("td",{parentName:"tr",align:null},"Text += Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'t+=" World"  //t=t+" World"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Number += Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n+=5 //n=n+5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Date += Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"d+=5 //d=d+5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time += Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t1+=t2 //t1=t1+t2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time += Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t1+=5 //t1=t1+5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Picture += Picture"),(0,r.kt)("td",{parentName:"tr",align:null},"Picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p1+=p2 //p1=p1+p2 (add p2 to the right of p1)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Picture += Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p1+=5 //p1=p1+5 (move p1 horizontally 5 pixels to the right)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,r.kt)("td",{parentName:"tr",align:null},"Number -= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n-=5 //n=n-5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Date -= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"d-=5 //d=d-5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time -= Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t1-=t2 //t1=t1-t2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time -= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t1-=5 //t1=t1-5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Picture -= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p1-=5 //p1=p1-5 (move p1 horizontally 5 pixels to the left)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Division"),(0,r.kt)("td",{parentName:"tr",align:null},"Number /= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n/=5 //n=n/5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time /= Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t1/=t2 //t1=t1/t2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time /= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t1/=5 //t1=t1/5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Picture /= Picture"),(0,r.kt)("td",{parentName:"tr",align:null},"Picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p1/=p2 //p1=p1/p2 (add p2 to the bottom of p1)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Picture /= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p1/=5 //p1=p1/5 (move p1 vertically 5 pixels)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,r.kt)("td",{parentName:"tr",align:null},"Text *= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'t*="abc"  //t=t*"abc"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Number *= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n*=5 //n=n*5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time *= Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t1*=t2 //t1=t1*t2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time *= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t1*=5 //t1=t1*5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Picture *= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p1*=5 //p1=p1*5 (resize p1 by 5)"))))),(0,r.kt)("p",null,"These operators apply on any ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-expressions#assignable-vs-non-assignable-expressions"},"assignable expressions")," (except pictures as object properties or collection elements)."),(0,r.kt)("p",null,'The operation "source ',(0,r.kt)("inlineCode",{parentName:"p"},"operator"),' value" is not strictly equivalent to "source = source ',(0,r.kt)("inlineCode",{parentName:"p"},"operator"),' value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as ',(0,r.kt)("inlineCode",{parentName:"p"},"getPointer()->+=1")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPointer")," method is called only once."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-text#character-reference-symbols"},"Character indexing in text")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-blob#accessing-a-scalar-blobs-bytes"},"byte indexing in blob")," do not support these operators."),(0,r.kt)("h4",{parentName:"blockquote",id:"examples"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'// Addition\nx=2\nx+=5 //x=7\n\nt="Hello" \nt+=" World" //t="Hello World" \n\nd=!2000-11-10!\nd+=10 //d=!2000-11-20!\n\n// Subtraction\nx1=10\nx1-=5 //x1=5\n\nd1=!2000-11-10!\nd1-=10 // d1=!2000-10-31!\n\n// Division\nx3=10\nx3/=2 // x3=5\n\n\n// Multiplication\nx2=10\nx2*=5 // x2=10\n\nt2="Hello" \nt2*=2 // t2="HelloHello"\n\n')),(0,r.kt)("h2",{id:"short-circuit-operators"},"Short-circuit operators"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"&&")," and ",(0,r.kt)("strong",{parentName:"p"},"||")," operators are ",(0,r.kt)("strong",{parentName:"p"},"short circuit operators"),". A short circuit operator is one that doesn't necessarily evaluate all of its operands. "),(0,r.kt)("p",null,"The difference with the single ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-boolean#logical-operators"},(0,r.kt)("strong",{parentName:"a"},"&")," and ",(0,r.kt)("strong",{parentName:"a"},"|")," boolean operators")," is that the short-circuit operators ",(0,r.kt)("strong",{parentName:"p"},"&&")," and ",(0,r.kt)("strong",{parentName:"p"},"||")," do not return a boolean value. They evaluate expressions as ",(0,r.kt)("a",{parentName:"p",href:"#truthy-and-falsy"},"truthy or falsy"),", then return one of the expressions."),(0,r.kt)("h3",{id:"short-circuit-and-operator-"},"Short-circuit AND operator (&&)"),(0,r.kt)("p",null,"The rule is as follows: "),(0,r.kt)("p",null,"Given ",(0,r.kt)("inlineCode",{parentName:"p"},"Expr1 && Expr2"),":"),(0,r.kt)("p",null,"The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are ",(0,r.kt)("a",{parentName:"p",href:"#truthy-and-falsy"},"truthy"),", the value of the last operand is returned."),(0,r.kt)("p",null,"The following table summarizes the different cases for the ",(0,r.kt)("strong",{parentName:"p"},"&&")," operator:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expr1"),(0,r.kt)("th",{parentName:"tr",align:null},"Expr2"),(0,r.kt)("th",{parentName:"tr",align:null},"Value returned"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"Expr2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"Expr2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"Expr1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"Expr1")))),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'var v : variant\n\nv="Hello" && "World" //"World"\nv=false && 0 // false\nv=0 && false // false\nv=5 && !00-00-00! // 00/00/00\nv=5 && 10 && "hello" //"hello"\n')),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Say you have an online store, and some products have a tax rate applied, and others don't. "),(0,r.kt)("p",null,"To calculate the tax, you multiply the price by the tax rate, which may not have been specified."),(0,r.kt)("p",null,"So you can write this: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"var tax : variant\n\ntax=item.taxRate && (item.price*item.taxRate)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"tax")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if ",(0,r.kt)("em",{parentName:"p"},"taxRate")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"), otherwise it will store the result of the calculation."),(0,r.kt)("h4",{id:"example-3"},"Example 3"),(0,r.kt)("p",null,"Short-circuit operators are useful in tests such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"if((myObject!=null) && (myObject.value>10))\n    //code\nend\n")),(0,r.kt)("p",null,"If myObject is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", the second argument is not executed, thus no error is thrown."),(0,r.kt)("h3",{id:"short-circuit-or-operator-"},"Short-circuit OR operator (||)"),(0,r.kt)("p",null,'The || operator returns the value of one of the specified operands. The expression is evaluated left to right and tested for possible "short-circuit" evaluation using the following rule:'),(0,r.kt)("p",null,"Given ",(0,r.kt)("inlineCode",{parentName:"p"},"Expr1 || Expr2"),":"),(0,r.kt)("p",null,"If Expr1 is ",(0,r.kt)("a",{parentName:"p",href:"#truthy-and-falsy"},"truthy"),", Expr2 is not evaluated and the calculation returns Expr1."),(0,r.kt)("p",null,"If Expr1 is ",(0,r.kt)("a",{parentName:"p",href:"#truthy-and-falsy"},"falsy"),", the calculation returns Expr2."),(0,r.kt)("p",null,"The following table summarizes the different cases and the value returned for the ",(0,r.kt)("strong",{parentName:"p"},"||")," operator:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expr1"),(0,r.kt)("th",{parentName:"tr",align:null},"Expr2"),(0,r.kt)("th",{parentName:"tr",align:null},"Value returned"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"Expr1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"Expr1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"truthy"),(0,r.kt)("td",{parentName:"tr",align:null},"Expr2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"falsy"),(0,r.kt)("td",{parentName:"tr",align:null},"Expr2")))),(0,r.kt)("h4",{id:"example-1-1"},"Example 1"),(0,r.kt)("p",null,"Say you have a dataclass named Employee. Some employees have entered a phone number, and others haven't. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"emp.phone")," could be null, and you cannot assign null to a string variable. But you can write the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'var phone : string\n\nphone=emp.phone || "n/a"\n')),(0,r.kt)("p",null,"In which case ",(0,r.kt)("inlineCode",{parentName:"p"},"phone"),' will store either a phone number or the "n/a" string. '),(0,r.kt)("h4",{id:"example-2-1"},"Example 2"),(0,r.kt)("p",null,"Given a dataclass named Person with a ",(0,r.kt)("em",{parentName:"p"},"name")," attribute, as well as a ",(0,r.kt)("em",{parentName:"p"},"maidenName")," attribute for married women."),(0,r.kt)("p",null,"The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"var name: string\n\nname=person.maidenName || person.name\n")),(0,r.kt)("h3",{id:"precedence"},"Precedence"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"||")," operators have the same precedence as the logical operators ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),", and are evaluated left to right."),(0,r.kt)("p",null,"This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"a || b && c")," is evaluated as ",(0,r.kt)("inlineCode",{parentName:"p"},"(a || b) && c"),"."),(0,r.kt)("h2",{id:"ternary-operator"},"Ternary operator"),(0,r.kt)("p",null,"The ternary conditional operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-control-flow#ifelseend"},"if\u2026else")," statements."),(0,r.kt)("p",null,"It takes three operands in the following order: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a condition followed by a question mark (?)"),(0,r.kt)("li",{parentName:"ul"},"an expression to execute if the condition is ",(0,r.kt)("a",{parentName:"li",href:"#truthy-and-falsy"},"truthy"),", followed by a colon (:) "),(0,r.kt)("li",{parentName:"ul"},"an expression to execute if the condition is ",(0,r.kt)("a",{parentName:"li",href:"#truthy-and-falsy"},"falsy"))),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"The syntax is as follows:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"condition ? exprIfTruthy : exprIfFalsy")),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("h4",{id:"a-simple-example"},"A simple example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'var age : integer\nvar beverage : string\n\nage=26\nbeverage=(age>=21) ? "Beer" : "Juice"\n\n// beverage : "Beer"\n')),(0,r.kt)("h4",{id:"handling-data-from-a-table"},"Handling data from a table"),(0,r.kt)("p",null,"This example stores a person's full name in a variable, and handles the case when no first name or last name has been specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'var fullname : string\n\n// If one of the names is missing, store the one that exists, otherwise store an empty string\nfullname=(person.firstname && person.lastname) ? (person.firstname+" "+person.lastname) : (person.lastname || person.firstname) || ""\n')),(0,r.kt)("h2",{id:"truthy-and-falsy"},"Truthy and falsy"),(0,r.kt)("p",null,"As well as a type, each value also has an inherent boolean value, generally known as either ",(0,r.kt)("strong",{parentName:"p"},"truthy")," or ",(0,r.kt)("strong",{parentName:"p"},"falsy"),". "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"truthy")," and ",(0,r.kt)("strong",{parentName:"p"},"falsy")," values are only evaluated by ",(0,r.kt)("a",{parentName:"p",href:"#short-circuit-operators"},"short-circuit")," and ",(0,r.kt)("a",{parentName:"p",href:"#ternary-operator"},"ternary")," operators.")),(0,r.kt)("p",null,"The following values are ",(0,r.kt)("strong",{parentName:"p"},"falsy"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"false"),(0,r.kt)("li",{parentName:"ul"},"null"),(0,r.kt)("li",{parentName:"ul"},"undefined"),(0,r.kt)("li",{parentName:"ul"},"null object"),(0,r.kt)("li",{parentName:"ul"},"null collection"),(0,r.kt)("li",{parentName:"ul"},"null picture"),(0,r.kt)("li",{parentName:"ul"},"null date !00-00-00!"),(0,r.kt)("li",{parentName:"ul"},'"" - Empty strings'),(0,r.kt)("li",{parentName:"ul"},"[] - Empty collections"),(0,r.kt)("li",{parentName:"ul"},"{} - Empty objects")),(0,r.kt)("p",null,"All other values are considered ",(0,r.kt)("strong",{parentName:"p"},"truthy"),", including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 - numeric zero (integer or otherwise)")),(0,r.kt)("p",null,"In QodlyScript, ",(0,r.kt)("strong",{parentName:"p"},"truthy")," and ",(0,r.kt)("strong",{parentName:"p"},"falsy")," evaluation reflects the ",(0,r.kt)("strong",{parentName:"p"},"usability")," of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle ",(0,r.kt)("em",{parentName:"p"},"undefined")," and ",(0,r.kt)("em",{parentName:"p"},"null")," values in objects and collections, so that a reduced number of ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-control-flow#if-else-end"},"if\u2026else")," statements are necessary to avoid runtime errors."),(0,r.kt)("p",null,"For example, when you use a ",(0,r.kt)("a",{parentName:"p",href:"#short-circuit-or-operator-"},"short-circuit OR operator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"value=object.value || defaultValue\n")),(0,r.kt)("p",null,"... you get the default value whenever ",(0,r.kt)("em",{parentName:"p"},"object")," does not contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property OR when it is ",(0,r.kt)("em",{parentName:"p"},"null"),". So this operator checks the existence or usability of the value instead of a specific value. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is ",(0,r.kt)("strong",{parentName:"p"},"truthy"),"."),(0,r.kt)("p",null,'Regarding values representing collections, objects, or strings, "empty" values are considered ',(0,r.kt)("strong",{parentName:"p"},"falsy"),". It is handy when you want to assign a default value whenever an empty one is encountered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'phone=emp.phone || "n/a"\n')))}m.isMDXComponent=!0}}]);