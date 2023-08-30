"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3551],{3905:(t,e,A)=>{A.d(e,{Zo:()=>c,kt:()=>g});var n=A(67294);function a(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function i(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),A.push.apply(A,n)}return A}function l(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?i(Object(A),!0).forEach((function(e){a(t,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):i(Object(A)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))}))}return t}function o(t,e){if(null==t)return{};var A,n,a=function(t,e){if(null==t)return{};var A,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)A=i[n],e.indexOf(A)>=0||(a[A]=t[A]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)A=i[n],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(a[A]=t[A])}return a}var r=n.createContext({}),s=function(t){var e=n.useContext(r),A=e;return t&&(A="function"==typeof t?t(e):l(l({},e),t)),A},c=function(t){var e=s(t.components);return n.createElement(r.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var A=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=s(A),u=a,g=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return A?n.createElement(g,l(l({ref:e},c),{},{components:A})):n.createElement(g,l({ref:e},c))}));function g(t,e){var A=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=A.length,l=new Array(i);l[0]=u;var o={};for(var r in e)hasOwnProperty.call(e,r)&&(o[r]=e[r]);o.originalType=t,o[p]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=A[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,A)}u.displayName="MDXCreateElement"},52203:(t,e,A)=>{A.d(e,{ZP:()=>i});var n=A(67294),a=A(86010);const i={List:function(t){let{children:e,align:A="start",justifyContent:i="start"}=t;return n.createElement("div",{className:(0,a.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===A,"items-center":"center"===A,"items-end":"end"===A},{"justify-start":"start"===i,"justify-center":"center"===i,"justify-end":"end"===i,"justify-between":"between"===i,"justify-around":"around"===i,"justify-evenly":"evenly"===i})},e)},Item:function(t){let{children:e,width:A}=t;const i=(t=>{const e="undefined"!=typeof window&&window.matchMedia(t),[A,a]=(0,n.useState)(e.matches);return(0,n.useEffect)((()=>(e.onchange=t=>a(t.matches),()=>e.onchange=null))),A})("(max-width: 1024px)");return n.createElement("div",{className:(0,a.Z)({"flex-1":!A}),style:i?{}:{width:A}},e)}}},21653:(t,e,A)=>{A.r(e),A.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=A(87462),a=(A(67294),A(3905)),i=A(52203);const l={id:"tabs",title:"Tabs"},o=void 0,r={unversionedId:"studio/design-webforms/components/tabs",id:"studio/design-webforms/components/tabs",title:"Tabs",description:"The Tabs component is a versatile UI element designed to organize components within a tabs system, providing an intuitive way to navigate through different sections of your webform.",source:"@site/docs/studio/design-webforms/components/tabs.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/tabs",permalink:"/docs/studio/design-webforms/components/tabs",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/design-webforms/components/tabs.md",tags:[],version:"current",frontMatter:{id:"tabs",title:"Tabs"},sidebar:"Studio",previous:{title:"Select Box",permalink:"/docs/studio/design-webforms/components/selectbox"},next:{title:"Webform Loader",permalink:"/docs/studio/design-webforms/components/webformloader"}},s={},c=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Data Binding",id:"data-binding",level:2},{value:"Showcase",id:"showcase",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],p={toc:c};function d(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Tabs")," component is a versatile UI element designed to organize components within a tabs system, providing an intuitive way to navigate through different sections of your webform."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Each tab within the Tabs component includes an embedded Stylebox, fostering organized content structuring and alignment. ")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The Tabs component proves invaluable across a range of scenarios where content organization and easy navigation are paramount:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Multifunctional Interfaces"),": Implement the Tabs component in applications with diverse features or sections, such as dashboards. Users can quickly switch between different aspects of the application while enjoying a clear visual separation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Form Navigation"),": Integrate tabs within lengthy forms or multi-step processes. Users can navigate through different sections of the form seamlessly, focusing on relevant data input without feeling overwhelmed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Content Categorization"),": Apply the Tabs component to categorize and display content, such as articles or product listings. This enables users to access specific categories with minimal effort, enhancing content discoverability."))),(0,a.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,a.kt)("p",null,"Enhance the Tabs component to align with your application's requirements using the following customization options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Variant Selection"),": Choose the variant that aligns with your design:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Line Variant"),': Select the "Line" variant for tabs with an underlined styling effect.'),(0,a.kt)("br",null),(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Enclosed Variant"),': Opt for the "Enclosed" variant to showcase tabs with a bordered presentation. This choice adds an additional layer of style to your tabs.')),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:A(3539).Z,style:{borderRadius:"6px"}})))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Adding Tabs"),": Incorporate new tabs with ease using the intuitive tab management system:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Using the Plus Button"),": Add new tabs effortlessly by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," button within the Tabs component. Each tab can be individually configured, allowing you to fine-tune attributes such as:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Title Customization"),": Modify tab titles to precisely reflect the content or functionality associated with each tab."),(0,a.kt)("br",null),(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Tab Duplication"),": Duplicate existing tabs to replicate configurations quickly by clicking on the ",(0,a.kt)("img",{alt:"explorer",src:A(97480).Z,style:{borderRadius:"6px",height:"25px",width:"25px"}})," icon."),(0,a.kt)("br",null),(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Tab Removal"),": Delete tabs that no longer serve a purpose by clicking on the ",(0,a.kt)("img",{alt:"explorer",src:A(86129).Z,style:{borderRadius:"6px",height:"25px",width:"25px"}})," icon."),(0,a.kt)("br",null),(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Moving Tab"),": Arrange tabs to your preferred position by clicking on the ",(0,a.kt)("img",{alt:"explorer",src:A(74522).Z,style:{borderRadius:"6px",height:"25px",width:"25px"}})," icon")),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:A(93227).Z,style:{borderRadius:"6px"}})))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Direct Canvas Addition"),": Directly add new tabs onto the canvas using the ",(0,a.kt)("code",null,"+")," icon."),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:A(89294).Z,style:{borderRadius:"6px"}}))))))),(0,a.kt)("h2",{id:"data-binding"},"Data Binding"),(0,a.kt)("p",null,"When it comes to data-binding, it's important to note that the ",(0,a.kt)("strong",{parentName:"p"},"Tabs")," component itself is not inherently data-bound. Unlike components like the ",(0,a.kt)("strong",{parentName:"p"},"DataTable")," that derive their content from specified datasources, the ",(0,a.kt)("strong",{parentName:"p"},"Tabs")," component primarily focuses on organizing and presenting content through clickable tabs."),(0,a.kt)("h2",{id:"showcase"},"Showcase"),(0,a.kt)("p",null,"Although the ",(0,a.kt)("strong",{parentName:"p"},"Tabs")," component isn't inherently data-bound, you can still create dynamic, data-driven experiences by embedding components within each tab's Stylebox. Here's a glimpse of how the ",(0,a.kt)("strong",{parentName:"p"},"Tabs")," component will look and behave in action:"),(0,a.kt)("img",{alt:"explorer",src:A(73689).Z,style:{borderRadius:"6px"}}),(0,a.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Tabs")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Click"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On DblClick"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user double-clicks on the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")))))}d.isMDXComponent=!0},74522:(t,e,A)=>{A.d(e,{Z:()=>n});const n="data:image/png;base64,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"},86129:(t,e,A)=>{A.d(e,{Z:()=>n});const n="data:image/png;base64,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"},97480:(t,e,A)=>{A.d(e,{Z:()=>n});const n="data:image/png;base64,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"},89294:(t,e,A)=>{A.d(e,{Z:()=>n});const n=A.p+"assets/images/tab_CanvasAddition-0cca990bbbe404142d205363c4c1f60f.png"},93227:(t,e,A)=>{A.d(e,{Z:()=>n});const n=A.p+"assets/images/tabs_PlusButtonAddition-808737159def366db0f0af7133a210a7.png"},73689:(t,e,A)=>{A.d(e,{Z:()=>n});const n=A.p+"assets/images/tabs_Preview-ace703a8adff8bbf42e11283023619a7.gif"},3539:(t,e,A)=>{A.d(e,{Z:()=>n});const n=A.p+"assets/images/tabs_VariantSelection-be15b24f8b6531e965c10eeaa7a19930.png"}}]);