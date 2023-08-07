"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[8967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>A,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},A=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),c=l(r),w=o,p=c["".concat(d,".").concat(w)]||c[w]||u[w]||i;return r?n.createElement(p,a(a({ref:t},A),{},{components:r})):n.createElement(p,a({ref:t},A))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=w;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},92938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"rendering",title:"Rendering a webform"},a=void 0,s={unversionedId:"studio/rendering",id:"studio/rendering",title:"Rendering a webform",description:"A webform describes your application's look and behavior. After or while you design a webform, you can render it to see its final result.",source:"@site/docs/studio/rendering.md",sourceDirName:"studio",slug:"/studio/rendering",permalink:"/docs/studio/rendering",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/rendering.md",tags:[],version:"current",frontMatter:{id:"rendering",title:"Rendering a webform"},sidebar:"Studio",previous:{title:"Events and standard actions",permalink:"/docs/studio/design-webforms/events"},next:{title:"Settings",permalink:"/docs/studio/settings"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"How to render a webform",id:"how-to-render-a-webform",level:2},{value:"Preview in studio",id:"preview-in-studio",level:3},{value:"Preview in a browser window",id:"preview-in-a-browser-window",level:3},{value:"Preview form in a new tab",id:"preview-form-in-a-new-tab",level:4},{value:"Preview (all site)",id:"preview-all-site",level:4}],A={toc:l};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},A,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A webform describes your application's look and behavior. After or while you design a webform, you can ",(0,o.kt)("em",{parentName:"p"},"render")," it to see its final result."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,'Qodly Studio does not generate HTML code directly. When you drop components on the canvas, when you map datasources to components, or when you configure an event, Qodly Studio places your work in a JSON file. This JSON file, the webform, cannot directly be opened in a web browser. It is "rendered" either when you preview it in the Studio, or when you choose to render it in a dedicated browser tab.'),(0,o.kt)("p",null,"At runtime, webforms are generated and interpreted by the built-in renderer engine."),(0,o.kt)("p",null,"Each webform has its own URL on the Qodly Web server."),(0,o.kt)("p",null,"The following diagram describes how data flows to and from the studio:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"workflow-diagram",src:r(48201).Z,width:"1223",height:"781"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The embedded Studio web server provides a secured web access and allows previewing webforms inside Qodly Studio."),(0,o.kt)("li",{parentName:"ul"},"The Qodly web server is exposed as REST server and the renderer communicates with it using REST requests."),(0,o.kt)("li",{parentName:"ul"},"The webforms are deployed with the application, and end-users render them in their browsers. ")),(0,o.kt)("h2",{id:"how-to-render-a-webform"},"How to render a webform"),(0,o.kt)("p",null,"Webforms can be rendered in the Qodly Studio IDE or in a browser window. Note that the database resource access control will or will not be applied to the rendered page(s) depending on the renderer. Preview buttons are all available from the webform editor."),(0,o.kt)("h3",{id:"preview-in-studio"},"Preview in studio"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preview-button",src:r(81308).Z,width:"87",height:"58"})),(0,o.kt)("p",null,"This button allows you to render the current page directly in the webform editor window. "),(0,o.kt)("p",null,"In this case, the webform is rendered by the Qodly Studio embedded web server. This allows you to see all dataclasses, functions and attributes, even if they are not exposed as REST resources (they are greyed out), or even if permission actions are configured."),(0,o.kt)("h3",{id:"preview-in-a-browser-window"},"Preview in a browser window"),(0,o.kt)("p",null,"You can render the current webform or the whole website in a browser window. In both cases, the webform is rendered by Qodly web renderer engine. The renderer engine ",(0,o.kt)("strong",{parentName:"p"},"applies the REST resource restrictions and permission actions")," that might have been configured defined in your Qodly project. This means that only exposed resources are rendered in the browser. "),(0,o.kt)("h4",{id:"preview-form-in-a-new-tab"},"Preview form in a new tab"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preview-button-tab",src:r(17286).Z,width:"102",height:"52"})),(0,o.kt)("p",null,"This button allows you to display the current webform in a browser window tab."),(0,o.kt)("h4",{id:"preview-all-site"},"Preview (all site)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preview-button-tab",src:r(8874).Z,width:"106",height:"44"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Preview")," button of the Qodly toolbar displays the start page which is ",(0,o.kt)("a",{parentName:"p",href:"/docs/studio/settings/#application"},"defined in the Settings")," in a browser window tab."))}c.isMDXComponent=!0},81308:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},8874:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},17286:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAA0CAIAAAD3+9rJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAjkSURBVGhD7Zp/TFvXFcefbX7/cJQMqlDYljkJARR+JAMcaTUjg1ULKCt4CgIpJJpwl8UqDIeEoC7EjQqFBFtkTaYqtH/EkRbyO0oKURfMkCCswKphmhazthgIoEWYitgmwANs77x3L8axTern8MMa/siyzznvvnvf+/q8+871M2vPnj3EquPvFcRhe2PHVYymuen5SeysJP39/Vu3bsUOQbDx5+rCYnGw9QosSycusDaSsVnLMO6ydOICnIiICGyuIj4cf2zZERu381fpqcIDb72R8ovw8DCj0TSuHcfb7Jg1zmBrJZmYmNi0aRN2ILvXZC4L8tmILSsCAwOOl0lAKewv8PAz5YXav87MkNi3YnJ2AlsriVvMZfZs2LDho08u2OsFvPmb9A8/qvXz98O+q4SFsrLSfeAVFvpKZ80sy7Zv3y4UCmNjYzdv3gzu06dPe3p6bt68OTg4iBo4iX2WyT88Gxcfix1HNDe1VFfUYGcB57NM+Kb3sd/7s1gssE0m89mPpxta5tCmH8TFLONwOKWlpVeuXMnKypqcnKyhmZqaAgXr6+uLiorQ0bhGEj/RWi/5ufP/ULZgZ4G0X+/96ZafYIchPt5E4UGsF8Bms4rywTUjlynOSlZVVZWdnQ2GWq0uLCz08/Pz8vI6evQofAMQzMvLKy8vpxu6QvKeJGzRjDwZqXq/pkh87NtvvsMhGptmzvP6a2wfnxe+0cAAVsRmFy9Pp3aDVBIIBMhubGzctWtXWVnZqVOnduzYAS6K79u3LzMzE9lM4XKDsGWF+us+8dtFZytlkNQo8np4GDKY8l+t6fnUCzmlnzQ9HV/JLDMajdiisppNkvjmBYbJZEI2ABcvthhCkrPYsuOrx73PJnTIdrkQg+7fuzA1PYMPFeQrPz815+xUZotTB3Hv3r2WFjy5QCrBlJ+bmwupNzAwsH//fhRvbm6+f/8+spky/GQEW1b4+/v/QSy6/LePI34cjiJDg0+Q4QL/7J5vasciNX8++8VXi0nAFGdLWZBs48aN0dHRISEhiYmJWq0Wdjxx4kRUVBRsvX79Okx2qKUz2JSyume6rN/9FjsE8Xl7Z2z8zoqq93b/PAGSGgXNZvN5+cXnz58jF8GolB2fMH3/zNzdO/+wfR4MHHWCVyplocjIycmJiYmBIgPOAYqMx48f37p1C90EnMe+yCg/825K6hvYccTfHzyUnT2PnQUYlbKv/Yi1f68PGJ+2zI59z0AymyLDXar/4OCgi5f+stQEP6AZ/JO4ZHp6GvsLrOvq32CYFL9d+Ki1HftWPPj0s8I/Suz1WivcaI2JiE+IjdkZE7lj+9zcHNRlPd1ffvOfb/E2O9Yky9xOMkasowvTZF6s5lxmWTpxgbWRzGx2vSyysCyduMDaXJgclre/t4NFEiOm5yaNZldLeCbYlFBrIxnAYXl5c/zYLI7DZVBi0m54/+Jf/0auNXA9mszGOeOM0TyPQyuMzVy2Nj9kA2bCNG+anTORUMHbvHYnJVRUvZ+a9ssvv1Zphr6z2Qq7wI6wO+5o5bGp/t2lLrMQFxdXXV3tSwMGuHiD2+BekoFAtbW1IBZywQDX3VRzI8mQXgEBAdinAdfdVHM8l8GSG1urRXx8vL1eCG9v77S0tI6OjvHxJZ/OrRDot2/bXzIiIyORlZqaeuTIkW3btnG5XBTxAOj1+r6+vhs3brS34/UvVWRATqWkpJw7dw6FPDiktLS0tbUV8o6NrsFDhw6hDR6WAkkEclHTP3xs2bKFjntYEpAIpRe+YwYFvery5f8ei0RuV8q6P9RchvLNChJuE4CD/428FK1SVq9mthOprpcptdhxC0aU9So9tm1BWjnKMpUs65i8rq5OJhHJVAwkCI0XCni4cHcSX55AGB+KnVVDe0dUqcK2LeOdzZqXn7PjC5OX8c7x48f/XH3IcFGpVSkkdQppTh01yIhSKs4X5eeLFZBOmnpxvQbtoFZIG0e0PXXNanBItUKcD63EUuUIAa2kjVQekZ2yt+g+6MjCg0t1c12PlqCHgG8I9qE6XoTuSiQSlSmUd8oUi6epVZZVKurLqB3oQZgMqm2tU6ja5BJZK7RwNIChS0H1nGNzLBaSaFDKYborDl7t1el0w02nC64Og7u3omOG2tB/+UBNN91krKH4ZJNu+GrBpV7wZjpOFzfozGO3Cyq6zbqmk8UNY3Sr7poDl/vNvZdON+ko52TxSap5/9Vi6BXTXVFwe8xqiN5LB+guaaCrgtuo6fDtgkjofAEYCm/RNRwtbtIxGxQdKOBggO6KyIVQ/+WDp9FRYZBWXli5F9FrNGq1ngh/55P0UEJF8KLp602ratP3qCQSBdiGcd9cMiIzW3NNTfD0D4jsd7kEmgI0nUrNAClRgkkaCL6eiE72uaYiw/vIjMLk5k6N1rcvmZ9HN7UCD0GEhHC1lq9W0zmacRit5yIEGQIqgxf5GY/ewg0PN2hIjdqVQR0PAAYK8eKjRjVwUjYTh2PJQqOT+Xy7KQaiEWRGbR50SI6oNL5cgitI18gbG0ki44xlDuMlCBLSq8/wIaBVdxrC4awyg2WKNlJwmBc9Xn/3LhGVLsRtfwAeP+SahhRGQFekuquN4OG4PS4O6nCAzh41KQyFkH50NJgLnzYwKjKiD5fMfiCWyiolIvloMNUrV5DtI63j5VLHiuFmlggeSCSVMqn4WJtvOLVejRYYLqj5Cb5EaAJPeSciYelTfxFueongbo5IKpOWfdAXnIyjjmA2aGi0oOeiFO6MDgdI8OmTwklKRaI2YUm6/XqbBRcnfHR1dSHfw0tITqZU9ZSyjPFIxhiPZIzBkln+XOlhKSwSYckGBgaQ4WEpLBKx0c/bCgVVn3p4CUgikIt6XAJLgaGhod7e3rCwsMDAQMszMQ+AwWBQqVRyufzRo0fgstlsFp/PR/+qRssogG6JHzJZ3HUFuvLQOzA4OMjj8ZCLJaOFWhTI4noAmQCYxUAyi0tN/8hCBnoHLSk51zEWBUAQBIqDge+YyAes26HI+sSiABIEQYUI4n85tsTF0aaJ3wAAAABJRU5ErkJggg=="},48201:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/workflow-de3b6a743da903cd3ad846ac3823beee.png"}}]);