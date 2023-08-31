"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[443],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:e},p),{},{components:n})):a.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52203:(t,e,n)=>{n.d(e,{ZP:()=>r});var a=n(67294),o=n(86010);const r={List:function(t){let{children:e,align:n="start",justifyContent:r="start"}=t;return a.createElement("div",{className:(0,o.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===r,"justify-center":"center"===r,"justify-end":"end"===r,"justify-between":"between"===r,"justify-around":"around"===r,"justify-evenly":"evenly"===r})},e)},Item:function(t){let{children:e,width:n}=t;const r=(t=>{const e="undefined"!=typeof window&&window.matchMedia(t),[n,o]=(0,a.useState)(e.matches);return(0,a.useEffect)((()=>(e.onchange=t=>o(t.matches),()=>e.onchange=null))),n})("(max-width: 1024px)");return a.createElement("div",{className:(0,o.Z)({"flex-1":!n}),style:r?{}:{width:n}},e)}}},6842:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(52203);const i={id:"text",title:"Text"},s=void 0,l={unversionedId:"studio/design-webforms/components/text",id:"studio/design-webforms/components/text",title:"Text",description:"The Text component is a UI element designed to display text content on webforms.",source:"@site/docs/studio/design-webforms/components/text.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/text",permalink:"/docs/studio/design-webforms/components/text",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/design-webforms/components/text.md",tags:[],version:"current",frontMatter:{id:"text",title:"Text"},sidebar:"Develop",previous:{title:"Data Table",permalink:"/docs/studio/design-webforms/components/datatable"},next:{title:"Button",permalink:"/docs/studio/design-webforms/components/button"}},c={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Data Binding",id:"data-binding",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],d={toc:p};function u(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Text")," component is a UI element designed to display text content on webforms."),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Text")," component is capable of fulfilling various text display needs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Static Text"),": Use it to display unchanging content such as instructions, labels, and consistent information.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dynamic Content"),": The Text component is not limited to static text. It can display dynamic content pulled from your datasources. This dynamic feature allows you to show text that adapts and updates based on data values."))),(0,o.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,o.kt)("p",null,"Enhance the ",(0,o.kt)("strong",{parentName:"p"},"Text")," component to align with your application's requirements using the following customization options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},(0,o.kt)("span",{style:{fontWeight:"bold"}},"Style Buttons"),": Apply various text styles such as Bold, Italic, Underline, and Strikethrough to the selected portion of text."),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(11643).Z,style:{borderRadius:"6px"}})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},(0,o.kt)("span",{style:{fontWeight:"bold"}},"Toggle DataSource"),": Bind the Text component's content to a datasource, making the text content dynamic and data-driven. By inserting a placeholder in the text on the canvas and specifying the datasource path (using keywords like ",(0,o.kt)("code",null,"package.description")," or ",(0,o.kt)("code",null,"$This")," in iterative components), you can dynamically populate the text content. ",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(23117).Z,style:{borderRadius:"6px"}})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},(0,o.kt)("span",{style:{fontWeight:"bold"}},"Format Support"),": Depending on the chosen datasource, the Text component may offer format options to ensure the displayed data is presented in the desired manner like date formats."),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(75826).Z,style:{borderRadius:"6px"}})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},(0,o.kt)("span",{style:{fontWeight:"bold"}},"Toggle Link"),": Insert hyperlinks within the text content, binding them to specific text labels. You can choose whether the link opens in the same browser tab or a new tab. The link itself can be either a static URL or a dynamic value derived from datasources."),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(51360).Z,style:{borderRadius:"6px"}}))))),(0,o.kt)("h2",{id:"data-binding"},"Data Binding"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Text")," component's content can be dynamically bound to datasources through the ",(0,o.kt)("a",{parentName:"p",href:"#properties-customization"},"properties customization")," using the Toggle DataSource option. "),(0,o.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Text")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Event"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Click"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On DblClick"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user double-clicks on the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")))))}u.isMDXComponent=!0},75826:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/text_FormatSupport-7e27aff8f4ff8277f406c1b6543f0966.png"},11643:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/text_StyleButtons-c12cd1b66a1650ef6702cb24a96103ba.png"},23117:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/text_ToggleDataSource-282620a89c2d12898f9ae6ac99b14328.png"},51360:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/text_ToggleLink-b289ed839d9ab44aa2ee06404f249957.png"}}]);