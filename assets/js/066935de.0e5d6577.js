"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5967],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),u=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return r.createElement(m.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=u(a),k=n,N=d["".concat(m,".").concat(k)]||d[k]||c[k]||l;return a?r.createElement(N,i(i({ref:e},o),{},{components:a})):r.createElement(N,i({ref:e},o))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[d]="string"==typeof t?t:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5776:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={id:"pictures",title:"Pictures"},i=void 0,p={unversionedId:"language/pictures",id:"language/pictures",title:"Pictures",description:"Pictures Commands",source:"@site/docs/language/pictures.md",sourceDirName:"language",slug:"/language/pictures",permalink:"/docs/language/pictures",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/pictures.md",tags:[],version:"current",frontMatter:{id:"pictures",title:"Pictures"},sidebar:"QodlyScript",previous:{title:"Object",permalink:"/docs/language/object"},next:{title:"Session",permalink:"/docs/language/SessionClass"}},m={},u=[{value:"Pictures Commands",id:"pictures-commands",level:2},{value:"blobToPicture",id:"blobtopicture",level:2},{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"combinePictures",id:"combinepictures",level:2},{value:"Description",id:"description-1",level:4},{value:"See also",id:"see-also-1",level:4},{value:"convertPicture",id:"convertpicture",level:2},{value:"Description",id:"description-2",level:4},{value:"createThumbnail",id:"createthumbnail",level:2},{value:"Description",id:"description-3",level:4},{value:"equalPictures",id:"equalpictures",level:2},{value:"Description",id:"description-4",level:4},{value:"getPictureFileName",id:"getpicturefilename",level:2},{value:"Description",id:"description-5",level:4},{value:"See also",id:"see-also-2",level:4},{value:"getPictureMetadata",id:"getpicturemetadata",level:2},{value:"Description",id:"description-6",level:4},{value:"See also",id:"see-also-3",level:4},{value:"pictureProperties",id:"pictureproperties",level:2},{value:"Description",id:"description-7",level:4},{value:"See also",id:"see-also-4",level:4},{value:"pictureSize",id:"picturesize",level:2},{value:"Description",id:"description-8",level:4},{value:"See also",id:"see-also-5",level:4}],o={toc:u};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pictures-commands"},"Pictures Commands"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#picturesize"},(0,n.kt)("strong",{parentName:"a"},"pictureSize")," ( ",(0,n.kt)("em",{parentName:"a"},"aPicture")," : picture) : integer"),"\xa0","\xa0","\xa0","\xa0","returns the size of ",(0,n.kt)("em",{parentName:"td"},"aPicture")," in bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#pictureproperties"},(0,n.kt)("strong",{parentName:"a"},"pictureProperties")," ( ",(0,n.kt)("em",{parentName:"a"},"aPicture")," : picture , ",(0,n.kt)("em",{parentName:"a"},"width")," : number , ",(0,n.kt)("em",{parentName:"a"},"height")," : number , ",(0,n.kt)("em",{parentName:"a"},"hOffset")," : integer , ",(0,n.kt)("em",{parentName:"a"},"vOffset")," : integer , ",(0,n.kt)("em",{parentName:"a"},"mode")," : integer )"),"\xa0","\xa0","\xa0","\xa0","returns information about the picture you pass in ",(0,n.kt)("em",{parentName:"td"},"aPicture"))))),(0,n.kt)("h2",{id:"blobtopicture"},"blobToPicture"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"combinePictures")," ( ",(0,n.kt)("em",{parentName:"p"},"pictureBlob")," : blob , ",(0,n.kt)("em",{parentName:"p"},"aPicture")," : picture , ",(0,n.kt)("em",{parentName:"p"},"codec")," : string )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pictureBlob"),(0,n.kt)("td",{parentName:"tr",align:null},"blob"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Blob containing a picture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"aPicture"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture from blob")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"codec"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture codec ID")))),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"blobToPicture")," command inserts a picture stored in a blob into a Qodly picture variable or field, regardless its original format."),(0,n.kt)("h4",{id:"see-also"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#picturetoblob"},(0,n.kt)("inlineCode",{parentName:"a"},"pictureToBlob"))),(0,n.kt)("h2",{id:"combinepictures"},"combinePictures"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"combinePictures")," ( ",(0,n.kt)("em",{parentName:"p"},"resultingPict")," : picture , ",(0,n.kt)("em",{parentName:"p"},"pict1")," : picture  , ",(0,n.kt)("em",{parentName:"p"},"operator")," : integer , ",(0,n.kt)("em",{parentName:"p"},"pict2")," : picture , ",(0,n.kt)("em",{parentName:"p"},"horOffset")," : integer , ",(0,n.kt)("em",{parentName:"p"},"vertOffset")," : integer )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resultingPict"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture resulting from combination")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pict1"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Blob containing a picture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operator"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"First picture to combine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pict2"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Second picture to combinee")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"horOffset"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Horizontal offset for superimposition")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vertOffset"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Vertical offset for superimposition")))),(0,n.kt)("h4",{id:"description-1"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"combinePictures")," command combines the ",(0,n.kt)("em",{parentName:"p"},"pict1")," and ",(0,n.kt)("em",{parentName:"p"},"pict2")," pictures in operator mode in order to produce a third, ",(0,n.kt)("em",{parentName:"p"},"resultingPict"),"."),(0,n.kt)("h4",{id:"see-also-1"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#transformpicture"},(0,n.kt)("inlineCode",{parentName:"a"},"transformPicture"))),(0,n.kt)("h2",{id:"convertpicture"},"convertPicture"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"convertPicture")," ( ",(0,n.kt)("em",{parentName:"p"},"aPicture")," : picture , *",(0,n.kt)("em",{parentName:"p"}," :   , "),"codec",(0,n.kt)("em",{parentName:"p"}," : string , "),"compression* : number )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"aPicture"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture to be converted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Converted picture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"codec"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture Codec ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"compression"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Quality of compression")))),(0,n.kt)("h4",{id:"description-2"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"convertPicture")," command converts ",(0,n.kt)("em",{parentName:"p"},"aPicture")," into a new type."),(0,n.kt)("h2",{id:"createthumbnail"},"createThumbnail"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"createThumbnail")," ( ",(0,n.kt)("em",{parentName:"p"},"source")," : picture , ",(0,n.kt)("em",{parentName:"p"},"dest")," : picture , ",(0,n.kt)("em",{parentName:"p"},"width")," : integer , ",(0,n.kt)("em",{parentName:"p"},"height")," : integer , ",(0,n.kt)("em",{parentName:"p"},"mode")," : integer , ",(0,n.kt)("em",{parentName:"p"},"depth")," : integer )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"4D picture field or variable to convert as a thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dest"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Resulting thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"width"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Thumbnail width in pixels, Default value = 48")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"height"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Thumbnail height in pixels, Default value = 48")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mode"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Thumbnail creation mode Default value = Scaled to fit prop centered (6)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"depth"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Obsolete, do not use")))),(0,n.kt)("h4",{id:"description-3"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"createThumbnail")," command returns a thumbnail from a given source picture. Thumbnails are usually used for picture preview within multimedia software or Web sites."),(0,n.kt)("h2",{id:"equalpictures"},"equalPictures"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"equalPictures")," ( ",(0,n.kt)("em",{parentName:"p"},"picture1")," : picture field, picture variable , ",(0,n.kt)("em",{parentName:"p"},"picture2")," : picture field, picture variable , ",(0,n.kt)("em",{parentName:"p"},"mask")," : picture field, picture variable ) : boolean "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"picture1"),(0,n.kt)("td",{parentName:"tr",align:null},"picture field, picture variable"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Original source picture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"picture2"),(0,n.kt)("td",{parentName:"tr",align:null},"picture field, picture variable"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture to compare")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mask"),(0,n.kt)("td",{parentName:"tr",align:null},"picture field, picture variable"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Resulting mask")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"True if both pictures are identical; otherwise, False")))),(0,n.kt)("h4",{id:"description-4"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"equalPictures")," command precisely compares both the dimensions and the contents of two pictures. "),(0,n.kt)("h2",{id:"getpicturefilename"},"getPictureFileName"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"getPictureFileName")," ( ",(0,n.kt)("em",{parentName:"p"},"aPicture ")," : picture field, picture variable ) : string "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"aPicture"),(0,n.kt)("td",{parentName:"tr",align:null},"picture field, picture variable"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture for which to get default name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Default name of picture file")))),(0,n.kt)("h4",{id:"description-5"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getPictureFileName")," command returns the current default name of the picture passed as paramete. "),(0,n.kt)("p",null,"The default name is used when exporting the picture to a disk file. It can be set automatically based on the original name of the picture file imported into the picture field or variable, or using the ",(0,n.kt)("a",{parentName:"p",href:"#setpicturefilename"},(0,n.kt)("inlineCode",{parentName:"a"},"setPictureFileName"))," command."),(0,n.kt)("p",null,"If the picture does not have a default name, the command returns an empty string."),(0,n.kt)("h4",{id:"see-also-2"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#setpicturefilename"},(0,n.kt)("inlineCode",{parentName:"a"},"setPictureFileName"))),(0,n.kt)("h2",{id:"getpicturemetadata"},"getPictureMetadata"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"getPictureMetadata")," ( ",(0,n.kt)("em",{parentName:"p"},"aPicture ")," : picture , ",(0,n.kt)("em",{parentName:"p"},"metaName")," : string , ",(0,n.kt)("em",{parentName:"p"},"metaContents")," : variable )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"aPicture"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture whose metadata you want to get")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metaName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Name or path of block to get")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metaContents"),(0,n.kt)("td",{parentName:"tr",align:null},"variable"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Metadata contents")))),(0,n.kt)("h4",{id:"description-6"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getPictureMetadata")," command can be used to read the contents of the metadata (or meta-tags) found in ",(0,n.kt)("em",{parentName:"p"},"aPicture")," (picture field or variable). For more information about metadata, please refer to the description of the ",(0,n.kt)("a",{parentName:"p",href:"#setpicturemetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"setPictureMetadata"))," command."),(0,n.kt)("h4",{id:"see-also-3"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#setpicturemetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"setPictureMetadata"))),(0,n.kt)("h2",{id:"pictureproperties"},"pictureProperties"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"pictureProperties")," ( ",(0,n.kt)("em",{parentName:"p"},"aPicture")," : picture , ",(0,n.kt)("em",{parentName:"p"},"width")," : number , ",(0,n.kt)("em",{parentName:"p"},"height")," : number , ",(0,n.kt)("em",{parentName:"p"},"hOffset")," : integer , ",(0,n.kt)("em",{parentName:"p"},"vOffset")," : integer , ",(0,n.kt)("em",{parentName:"p"},"mode")," : integer )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"aPicture"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture for which to get information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"width"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Width of the picture expressed in pixels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"height"),(0,n.kt)("td",{parentName:"tr",align:null},"reak"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Height of the picture expressed in pixels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hOffset"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Horizontal offset when displayed on background")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vOffset"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Vertical offset when displayed on background")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mode"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer mode when displayed on background")))),(0,n.kt)("h4",{id:"description-7"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pictureProperties")," command returns information about the picture you pass in ",(0,n.kt)("em",{parentName:"p"},"aPicture"),". "),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"width")," and ",(0,n.kt)("em",{parentName:"p"},"height")," parameters return the width and height of the picture."),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"hOffset"),", ",(0,n.kt)("em",{parentName:"p"},"vOffset"),", and ",(0,n.kt)("em",{parentName:"p"},"mode")," parameters return the horizontal and vertical positions and the transfer mode of the picture when displayed on the background in a form (\u201cOn Background\u201d)."),(0,n.kt)("h4",{id:"see-also-4"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#picturesize"},(0,n.kt)("inlineCode",{parentName:"a"},"pictureSize"))),(0,n.kt)("h2",{id:"picturesize"},"pictureSize"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"pictureSize")," ( ",(0,n.kt)("em",{parentName:"p"},"aPicture")," : picture) : integer"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"aPicture"),(0,n.kt)("td",{parentName:"tr",align:null},"picture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"Picture for which to return the size in bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"Size in bytes of the picture")))),(0,n.kt)("h4",{id:"description-8"},"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"pictureSize")," returns the size of ",(0,n.kt)("em",{parentName:"p"},"aPicture")," in bytes. "),(0,n.kt)("h4",{id:"see-also-5"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#pictureproperties"},(0,n.kt)("inlineCode",{parentName:"a"},"pictureProperties"))))}d.isMDXComponent=!0}}]);