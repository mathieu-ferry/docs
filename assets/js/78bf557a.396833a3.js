"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),A=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=A(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=A(a),d=l,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var A=2;A<r;A++)s[A]=a[A];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3148:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>A});var n=a(7462),l=(a(7294),a(3905));const r={id:"styling",title:"Styling"},s=void 0,o={unversionedId:"design-webforms/styling",id:"design-webforms/styling",title:"Styling",description:"Once a component is on the Canvas, you can customize its look using styling tools.",source:"@site/docs/design-webforms/styling.md",sourceDirName:"design-webforms",slug:"/design-webforms/styling",permalink:"/docs/design-webforms/styling",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/design-webforms/styling.md",tags:[],version:"current",frontMatter:{id:"styling",title:"Styling"}},i={},A=[{value:"Styles Library",id:"styles-library",level:3},{value:"Inspect button",id:"inspect-button",level:4},{value:"Properties panel",id:"properties-panel",level:3},{value:"Example",id:"example",level:4},{value:"Overriding style properties",id:"overriding-style-properties",level:3},{value:"Working with CSS",id:"working-with-css",level:2},{value:"Exporting styles as CSS classes for reuse",id:"exporting-styles-as-css-classes-for-reuse",level:3},{value:"Naming CSS classes",id:"naming-css-classes",level:3},{value:"Editing a CSS class",id:"editing-a-css-class",level:3},{value:"See also",id:"see-also",level:2}],p={toc:A};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Once a component is on the Canvas, you can customize its look using styling tools."),(0,l.kt)("h3",{id:"styles-library"},"Styles Library"),(0,l.kt)("p",null,"One way of styling components is by dragging CSS classes from the Styles Library and dropping them on the components."),(0,l.kt)("p",null,"The Styles Library offers three types of styles: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Local: Styles you create"),(0,l.kt)("li",{parentName:"ul"},"Theme: Predefined CSS classes"),(0,l.kt)("li",{parentName:"ul"},"Shared: Shared CSS classes")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"styles-library",src:a(5745).Z,width:"241",height:"307"})),(0,l.kt)("p",null,"Local styles can only be used in the Webforms in which they are created, while theme and shared CSS classes are usable by all Webforms through the whole project."),(0,l.kt)("p",null,"Theme classes cannot be modified. "),(0,l.kt)("p",null,'To create a local CSS class, click the "+" button and enter a name and let the ',(0,l.kt)("strong",{parentName:"p"},"Export as Shared")," option unchecked.\nTo create a shared CSS class, check the ",(0,l.kt)("strong",{parentName:"p"},"Export as Shared")," option. "),(0,l.kt)("p",null,"Local and shared CSS class code can be edited in the Contextual panel at the bottom. "),(0,l.kt)("p",null,"You can convert a local CSS to a shared CSS by clicking on the following button in the Contextual panel:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"CSS-convert",src:a(457).Z,width:"166",height:"42"})),(0,l.kt)("h4",{id:"inspect-button"},"Inspect button"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Inspect")," option ",(0,l.kt)("img",{alt:"styles-library",src:a(5664).Z,width:"42",height:"50"}),"  allows you to check where your CSS classes are used in your webforms. Toggle the option by clicking the icon, then mouse over a CSS class to highlight its location in your webform. "),(0,l.kt)("h3",{id:"properties-panel"},"Properties panel"),(0,l.kt)("p",null,"The Properties panel gives you extremely granular control over your elements. "),(0,l.kt)("p",null,"After you select an element, you can edit its properties using this panel. This includes style properties (as a rule, component properties and styling are separated)."),(0,l.kt)("p",null,"Using the Properties panel, you can bind a CSS class to the element and define values individually."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"styles-library",src:a(2578).Z,width:"750",height:"411"})),(0,l.kt)("p",null,"Some visual properties such as grid areas or datatable columns can be edited directly on the canvas."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,"To add a red background to a Button component: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"from the Styles library:\ndrag the ",(0,l.kt)("inlineCode",{parentName:"p"},"bg-red-500")," class from the Styles library and drop it on the Button component.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"using the Properties Panel:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"select the Button component, and under Style, choose a red color for the background."),(0,l.kt)("li",{parentName:"ul"},"select the Button component, then in the Properties panel, select the ",(0,l.kt)("inlineCode",{parentName:"li"},"bg-red-500")," class in the CSS section.")))),(0,l.kt)("h3",{id:"overriding-style-properties"},"Overriding style properties"),(0,l.kt)("p",null,"Selecting a component displays its style properties in the Properties Panel. Values set by CSS classes are displayed in italics. For example, assigning the ",(0,l.kt)("inlineCode",{parentName:"p"},"bg-red-500")," class to the component will get the Background property to display ",(0,l.kt)("em",{parentName:"p"},"rgb(239,68,68)"),"."),(0,l.kt)("p",null,"Modifying these values overrides the initial value for that property. Overriden CSS properties have a blue dot in front of them. "),(0,l.kt)("p",null,"You can export the new values to create a new CSS class."),(0,l.kt)("h2",{id:"working-with-css"},"Working with CSS"),(0,l.kt)("h3",{id:"exporting-styles-as-css-classes-for-reuse"},"Exporting styles as CSS classes for reuse"),(0,l.kt)("p",null,"You can export the style of an element as a CSS class to reuse it later: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Select a an element on the canvas, the tooltip appears."),(0,l.kt)("li",{parentName:"ol"},"Click the CSS icon in the tooltip and enter a name for the new CSS class. "),(0,l.kt)("li",{parentName:"ol"},"If you want to export a shared CSS, check the ",(0,l.kt)("strong",{parentName:"li"},"Export as shared")," option."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Export"),".")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This does not export all the styles of the component, only the properties you override.")),(0,l.kt)("p",null,"This exports the ",(0,l.kt)("a",{parentName:"p",href:"#overriding-style-properties"},"new style properties")," of the element as a new local or shared CSS class. Now it appears as a choice in the Styles library and in the property list, and you can apply the class to other elements on your canvas. "),(0,l.kt)("h3",{id:"naming-css-classes"},"Naming CSS classes"),(0,l.kt)("p",null,"If both a shared and a local CSS classes have the same name:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"in the Webform source, the shared CSS is placed first and the local one is placed in second"),(0,l.kt)("li",{parentName:"ul"},"as a result, if one of them is applied to a component, they are both applied and some local CSS properties may override the shared ones.")),(0,l.kt)("h3",{id:"editing-a-css-class"},"Editing a CSS class"),(0,l.kt)("p",null,"Once a local or shared class is created, you can hover over it in the Styles Library and click the ",(0,l.kt)("strong",{parentName:"p"},"Edit Class")," button next to its name to edit the CSS directly. The changes apply to all the components using this class."),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("p",null,"If you're not familiar with CSS properties and styles, or you need a refresher, here are a few useful links and tools:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn CSS on the ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance"},"MDN website")),(0,l.kt)("li",{parentName:"ul"},"A guide to ",(0,l.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},"flexbox properties")," on css-tricks.com"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://getcssscan.com/css-box-shadow-examples"},"Box-shadow examples"),", ",(0,l.kt)("a",{parentName:"li",href:"https://cssgenerator.org/box-shadow-css-generator.html"},"box-shadow generator"))))}c.isMDXComponent=!0},5664:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/properties-panel-506cf2591ff27311120ebffd9ce6dd04.png"},457:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},5745:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);