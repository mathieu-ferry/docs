"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[729],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),d=o(n),g=l,s=d["".concat(p,".").concat(g)]||d[g]||k[g]||r;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=g;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[d]="string"==typeof t?t:l,i[1]=m;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4154:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={id:"lang-time",title:"Time"},i=void 0,m={unversionedId:"concepts/lang-time",id:"concepts/lang-time",title:"Time",description:"A Time attribute, variable or expression can be in the range of 0000 to 596,00000.",source:"@site/docs/concepts/lang-time.md",sourceDirName:"concepts",slug:"/concepts/lang-time",permalink:"/docs/concepts/lang-time",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/concepts/lang-time.md",tags:[],version:"current",frontMatter:{id:"lang-time",title:"Time"},sidebar:"QodlyScript",previous:{title:"Picture",permalink:"/docs/concepts/lang-picture"},next:{title:"Text",permalink:"/docs/concepts/lang-text"}},p={},o=[{value:"Time literals",id:"time-literals",level:2},{value:"Time operators",id:"time-operators",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}],u={toc:o};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Time attribute, variable or expression can be in the range of 00:00:00 to 596,000:00:00."),(0,l.kt)("p",null,"Times are in 24-hour format."),(0,l.kt)("p",null,"A time value can be treated as a number. The number returned from a time is the number of seconds since midnight (00:00:00) that time represents."),(0,l.kt)("h2",{id:"time-literals"},"Time literals"),(0,l.kt)("p",null,"A time literal constant is enclosed by question marks (?...?)."),(0,l.kt)("p",null,"A time literal constant is ordered hour:minute:second, with a colon (:) setting off each part. Times are specified in 24-hour format."),(0,l.kt)("p",null,"Here are some examples of time literals:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"?00:00:00? ` midnight\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minute, and 59 seconds\n")),(0,l.kt)("p",null,"A null time is specified by ?00:00:00?"),(0,l.kt)("h2",{id:"time-operators"},"Time operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Returns"),(0,l.kt)("th",{parentName:"tr",align:null},"Expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Addition"),(0,l.kt)("td",{parentName:"tr",align:null},"Time + Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? + ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"?03:05:07?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Time \u2013 Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? \u2013 ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:01:01?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Addition"),(0,l.kt)("td",{parentName:"tr",align:null},"Time + Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? + 65"),(0,l.kt)("td",{parentName:"tr",align:null},"7449")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Time \u2013 Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? \u2013 65"),(0,l.kt)("td",{parentName:"tr",align:null},"7319")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,l.kt)("td",{parentName:"tr",align:null},"Time * Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? * 2"),(0,l.kt)("td",{parentName:"tr",align:null},"14768")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Division"),(0,l.kt)("td",{parentName:"tr",align:null},"Time / Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? / 2"),(0,l.kt)("td",{parentName:"tr",align:null},"3692")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Longint division"),(0,l.kt)("td",{parentName:"tr",align:null},"Time \\ Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? \\ 2"),(0,l.kt)("td",{parentName:"tr",align:null},"3692")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modulo"),(0,l.kt)("td",{parentName:"tr",align:null},"Time % Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"?20:10:00? % ?04:20:00?"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:50:00?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modulo"),(0,l.kt)("td",{parentName:"tr",align:null},"Time % Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? % 2"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equality"),(0,l.kt)("td",{parentName:"tr",align:null},"Time == Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? == ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? == ?01:02:04?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,l.kt)("td",{parentName:"tr",align:null},"Time != Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? != ?01:02:04?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? != ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,l.kt)("td",{parentName:"tr",align:null},"Time > Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:04? > ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? > ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than"),(0,l.kt)("td",{parentName:"tr",align:null},"Time < Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? < ?01:02:04?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? < ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"Time >= Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? >=?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? >=?01:02:04?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"Time <= Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? <=?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:04? <=?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("p",null,"To obtain a time expression from an expression that combines a time expression with a number, use the commands ",(0,l.kt)("inlineCode",{parentName:"p"},"Time")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Time string"),"."),(0,l.kt)("p",null,"You can combine expressions of the time and number types using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Time")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Current time")," functions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"    //The following line assigns to vlSeconds the number of seconds   \n    //that will be elapsed between midnight and one hour from now\nvlSeconds=Current time+3600\n    //The following line assigns to $vHSoon the time it will be in one hour\nvhSoon=Time(Current time+3600)\n")),(0,l.kt)("p",null,"The second line could be written in a simpler way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"  // The following line assigns to $vHSoon the time it will be in one hour\n vhSoon=Current time+?01:00:00?\n")),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("p",null,"The Modulo operator can be used, more specifically, to add times that take the 24-hour format into account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"t1=?23:00:00? // It is 23:00 hours\n  // We want to add 2 and a half hours\nt2=t1+?02:30:00? // With a simple addition, t2 is ?25:30:00?\nt2=(t1+?02:30:00?)%?24:00:00? // t2 is ?01:30:00? and it is 1:30 hour the next morning\n")))}d.isMDXComponent=!0}}]);