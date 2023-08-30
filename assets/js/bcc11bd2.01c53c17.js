"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(67294),a=n(86010);const i={List:function(e){let{children:t,align:n="start",justifyContent:i="start"}=e;return o.createElement("div",{className:(0,a.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===i,"justify-center":"center"===i,"justify-end":"end"===i,"justify-between":"between"===i,"justify-around":"around"===i,"justify-evenly":"evenly"===i})},t)},Item:function(e){let{children:t,width:n}=e;const i=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,a]=(0,o.useState)(t.matches);return(0,o.useEffect)((()=>(t.onchange=e=>a(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return o.createElement("div",{className:(0,a.Z)({"flex-1":!n}),style:i?{}:{width:n}},t)}}},81738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),i=n(52203);const s={id:"selectbox",title:"Select Box"},r=void 0,l={unversionedId:"studio/design-webforms/components/selectbox",id:"studio/design-webforms/components/selectbox",title:"Select Box",description:"The Select Box component is a UI element designed for users to choose an item from a list of Stylebox components. It provides a streamlined way to select from various options within a dropdown-style interface. Each option in the list is represented as a Stylebox component.",source:"@site/docs/studio/design-webforms/components/selectbox.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/selectbox",permalink:"/docs/studio/design-webforms/components/selectbox",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/design-webforms/components/selectbox.md",tags:[],version:"current",frontMatter:{id:"selectbox",title:"Select Box"},sidebar:"Studio",previous:{title:"Style Box",permalink:"/docs/studio/design-webforms/components/stylebox"},next:{title:"Tabs",permalink:"/docs/studio/design-webforms/components/tabs"}},c={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Data Integration",id:"data-integration",level:2},{value:"<u>Data Binding</u>",id:"data-binding",level:3},{value:"<u>Data Display</u>",id:"data-display",level:3},{value:"Showcase",id:"showcase",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],d={toc:p};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Select Box")," component is a UI element designed for users to choose an item from a list of Stylebox components. It provides a streamlined way to select from various options within a dropdown-style interface. Each option in the list is represented as a Stylebox component."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"Select Box")," component is part of the iterative components category, which enables you to iterate over a dataset to facilitate user selections.")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The Select Box component finds application in various scenarios where a single value needs to be selected from a predefined list. Common use cases include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Employee Allocation"),": In resource management applications, the Select Box component can assist in assigning employees to projects or tasks by providing a dropdown list of available team members.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Task Priority Selection"),": When managing tasks within a backoffice application, users might need to assign priorities to tasks. The Select Box component can offer a dropdown list of priority levels, simplifying the process of assigning importance to tasks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Department Selection for Ticketing"),": In a support ticketing system, users can choose the department or category to which a ticket belongs. The Select Box component streamlines this process by offering a dropdown menu of available departments, ensuring that tickets are routed to the appropriate team."))),(0,a.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,a.kt)("p",null,"Enhance the Select Box component to align with your application's requirements using the following customization options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Placeholder"),": Display a text as a dimmed placeholder in the select box."),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:n(36695).Z,style:{borderRadius:"6px"}})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Number of items"),": Specify the maximum number of items to display simultaneously in the component."),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:n(38527).Z,style:{borderRadius:"6px"}})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Show length"),": Adds a string indicating the total number of items within the component. You can customize this pattern to suit your requirements, ensuring users have a clear understanding of the available options."),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:n(76156).Z,style:{borderRadius:"6px"}})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Enable search"),": Adds a search area to the top of the component. This empowers users to filter the displayed options by entering specific characters. Developers have the flexibility to define the datasource attribute(s) to be searched within, enhancing the efficiency of option discovery."),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:n(39760).Z,style:{borderRadius:"6px"}}))))),(0,a.kt)("h2",{id:"data-integration"},"Data Integration"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Select Box")," component is data-bound, meaning it relies on an external data source to populate its options. This allows the component to display and interact with data."),(0,a.kt)("h3",{id:"data-binding"},(0,a.kt)("u",null,"Data Binding")),(0,a.kt)("p",null,"To associate data with the ",(0,a.kt)("strong",{parentName:"p"},"Select Box")," component, follow these steps:"),(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Navigate to the Properties Panel"),": Access the Data Access category located within the Properties panel for the Select Box component."),(0,a.kt)("br",null),(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Define the Datasource"),": Specify the appropriate Datasource that contains the data you want to display within the Select Box. For instance, you can select an entity selection, such as the ",(0,a.kt)("code",null,"Destination")," dataclass.")),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:n(66768).Z,style:{borderRadius:"6px"}}))),(0,a.kt)("h3",{id:"data-display"},(0,a.kt)("u",null,"Data Display")),(0,a.kt)("p",null,"To associate data iterated over a datasource, you can follow these additional steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Access the Select Box"),": Within the Select Box component, locate the embedded Stylebox.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add a Component"),": Add a Text component or other relevant components within the Stylebox.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure the Component"),": Click on the component you've added to enter its editing mode. The process of configuring components varies based on their type:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Toggle Datasource"),": Prepare to connect the component to the datasource in the next step by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Toggle Datasource")," button.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Properties Panel"),": In the next step, you'll configure them through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Data Access")," category in the Properties panel. ")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(i.ZP.Item,{width:"60%"},(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Choose the Iterator"),": Choose the iterator corresponding to the iterated data (e.g., ",(0,a.kt)("code",null,"$This"),") to represent the current data item.")," ",(0,a.kt)("br",null),(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Choose the Attribute"),": Once you've selected the iterator, choose the specific attribute that you want to display within the component. This could be attributes like the name of the destination, the country, or any other relevant information. ")),(0,a.kt)(i.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:n(28270).Z,style:{borderRadius:"6px"}}))))),(0,a.kt)("h2",{id:"showcase"},"Showcase"),(0,a.kt)("p",null,"Here's a glimpse of how the ",(0,a.kt)("strong",{parentName:"p"},"Select Box")," component will look and behave in action:"),(0,a.kt)("img",{alt:"explorer",src:n(25371).Z,style:{borderRadius:"6px"}}),(0,a.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Select Box")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Click"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Select"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when an item within the component is selected.")))))}m.isMDXComponent=!0},66768:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selectBox_DataBinding-ca9cfcf01731a7bc44330de108b9de11.png"},28270:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selectBox_DataDisplay-eab1cfda948368ef667cbca280ebf98d.png"},39760:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selectBox_EnableSearch-8964822b6bbfbdbeb252fa7bdeddcd6c.png"},38527:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selectBox_NumberOfItems-1efcbc6636cd4de894d9462b3d7fa2d3.png"},36695:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selectBox_Placeholder-78154dd472984565811bc076ca88f4db.png"},25371:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selectBox_Preview-5c7b9f2faf890ca289b256fa6ac31d98.gif"},76156:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selectBox_ShowLength-b51c667aa5667a69f1a5ed99fbab7ff7.png"}}]);