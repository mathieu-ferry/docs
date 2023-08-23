"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={id:"radio",title:"Radio",hide_title:!0},r=void 0,s={unversionedId:"studio/design-webforms/components/radio",id:"studio/design-webforms/components/radio",title:"Radio",description:"Component Overview",source:"@site/docs/studio/design-webforms/components/radio.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/radio",permalink:"/docs/studio/design-webforms/components/radio",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/design-webforms/components/radio.md",tags:[],version:"current",frontMatter:{id:"radio",title:"Radio",hide_title:!0},sidebar:"Studio",previous:{title:"File Upload",permalink:"/docs/studio/design-webforms/components/fileupload"},next:{title:"Range Input",permalink:"/docs/studio/design-webforms/components/rangeinput"}},l={},p=[{value:"Component Overview",id:"component-overview",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Customization",id:"customization",level:2},{value:"Data-Binding",id:"data-binding",level:2},{value:"Data Display",id:"data-display",level:3},{value:"Data Interaction",id:"data-interaction",level:3},{value:"Triggers and Events",id:"triggers-and-events",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"component-overview"},"Component Overview"),(0,o.kt)("p",null,"The Radio component is a crucial user interface element that facilitates single or multiple selections from a predefined list of values. By utilizing radio buttons, you empower users to make clear and distinct choices within a set of options, enhancing their interaction experience."),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"Radio component serve various purposes in user interfaces, including:"),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"Enhance the Radio component to align with your application's requirements using the following customization options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type: ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mode: The Radio Button component offers two distinct selection modes:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Single Selection: Users can choose only one option at a time, ensuring that their selections are distinct and non-overlapping.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Multiple Selection: Users can choose multiple options that are relevant to their needs.  ")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Default Value: Set a default value for the radio button, ensuring that a specific option is pre-selected when the component is loaded.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Options: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Adding Options: Incorporate new options by utilizing the "+" button within the Radio Button component. Each option can be customized with a label and a corresponding value, enhancing the clarity of user selections.'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Label: A descriptive text label for each option")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Value: A distinct value to each option, enabling effective backend processing and data handling based on the selections made by users.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Duplicating Options: Duplicate existing options to maintain consistent configurations across the list of choices.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Removing Options: Remove options as needed to refine the list."))))),(0,o.kt)("h2",{id:"data-binding"},"Data-Binding"),(0,o.kt)("p",null,"The Radio component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform. This feature empowers developers to create responsive and data-driven user experiences."),(0,o.kt)("h3",{id:"data-display"},"Data Display"),(0,o.kt)("p",null,"( \u2622\ufe0f to be done \u2622\ufe0f )"),(0,o.kt)("h3",{id:"data-interaction"},"Data Interaction"),(0,o.kt)("p",null,"( \u2622\ufe0f to be done \u2622\ufe0f )"),(0,o.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,o.kt)("p",null,'The Radio Button component primarily responds to the "On Change" event, triggering actions when users select different options. This interaction allows you to create dynamic and responsive interfaces based on user choices.'))}d.isMDXComponent=!0}}]);