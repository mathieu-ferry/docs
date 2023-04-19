"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9740],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,c=u["".concat(p,".").concat(m)]||u[m]||k[m]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"DataClassAttributeClass",title:"DataClassAttribute"},i=void 0,o={unversionedId:"language/DataClassAttributeClass",id:"language/DataClassAttributeClass",title:"DataClassAttribute",description:"Dataclass attributes are available as properties of their respective classes. For example:",source:"@site/docs/language/DataClassAttributeClass.md",sourceDirName:"language",slug:"/language/DataClassAttributeClass",permalink:"/docs/language/DataClassAttributeClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/DataClassAttributeClass.md",tags:[],version:"current",frontMatter:{id:"DataClassAttributeClass",title:"DataClassAttribute"},sidebar:"QodlyScript",previous:{title:"DataClass",permalink:"/docs/language/DataClassClass"},next:{title:"DataStore",permalink:"/docs/language/DataStoreClass"}},p={},d=[{value:"Functions and properties",id:"functions-and-properties",level:3},{value:".autoFilled",id:"autofilled",level:2},{value:"Description",id:"description",level:4},{value:".exposed",id:"exposed",level:2},{value:"Description",id:"description-1",level:4},{value:".fieldNumber",id:"fieldnumber",level:2},{value:"Description",id:"description-2",level:4},{value:".fieldType",id:"fieldtype",level:2},{value:"Description",id:"description-3",level:4},{value:"See also",id:"see-also",level:4},{value:".indexed",id:"indexed",level:2},{value:"Description",id:"description-4",level:4},{value:".inverseName",id:"inversename",level:2},{value:"Description",id:"description-5",level:4},{value:".keywordIndexed",id:"keywordindexed",level:2},{value:"Description",id:"description-6",level:4},{value:".kind",id:"kind",level:2},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example",level:4},{value:".mandatory",id:"mandatory",level:2},{value:"Description",id:"description-8",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-9",level:4},{value:"Example",id:"example-1",level:4},{value:".readOnly",id:"readonly",level:2},{value:"Description",id:"description-10",level:4},{value:".relatedDataClass",id:"relateddataclass",level:2},{value:"Description",id:"description-11",level:4},{value:"Example",id:"example-2",level:4},{value:".type",id:"type",level:2},{value:"Description",id:"description-12",level:4},{value:"See also",id:"see-also-1",level:4},{value:".unique",id:"unique",level:2},{value:"Description",id:"description-13",level:4}],s={toc:d};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dataclass attributes are available as properties of their respective classes. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' nameAttribute=ds.Company.name //reference to class attribute\n revenuesAttribute=ds.Company["revenues"] //alternate way\n')),(0,r.kt)("p",null,"This code assigns to ",(0,r.kt)("inlineCode",{parentName:"p"},"nameAttribute")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"revenuesAttribute")," references to the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"revenues")," attributes of the Company class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/EntityClass"},(0,r.kt)("strong",{parentName:"a"},"Entities")),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DataClassAttribute")," objects have properties that you can read to get information about your dataclass attributes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dataclass attribute objects can be modified, but the underlying model will not be altered.")),(0,r.kt)("h3",{id:"functions-and-properties"},"Functions and properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#autofilled"},(0,r.kt)("strong",{parentName:"a"},".autoFilled")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","contains True if the attribute value is automatically filled by Qodly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#exposed"},(0,r.kt)("strong",{parentName:"a"},".exposed")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","true if the attribute is exposed in REST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#fieldnumber"},(0,r.kt)("strong",{parentName:"a"},".fieldNumber")," : Integer"),"\xa0","\xa0","\xa0","\xa0","contains the internal Qodly database field number of the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#fieldtype"},(0,r.kt)("strong",{parentName:"a"},".fieldType")," : Integer"),"\xa0","\xa0","\xa0","\xa0","contains the Qodly database field type of the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#indexed"},(0,r.kt)("strong",{parentName:"a"},".indexed")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","contains ",(0,r.kt)("strong",{parentName:"td"},"True")," if there is a B-tree or a Cluster B-tree index on the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#inversename"},(0,r.kt)("strong",{parentName:"a"},".inverseName")," : Text"),"\xa0","\xa0","\xa0","\xa0","returns the name of the attribute which is at the other side of the relation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#keywordindexed"},(0,r.kt)("strong",{parentName:"a"},".keywordIndexed")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","contains ",(0,r.kt)("strong",{parentName:"td"},"True")," if there is a keyword index on the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#kind"},(0,r.kt)("strong",{parentName:"a"},".kind")," : Text"),"\xa0","\xa0","\xa0","\xa0","returns the category of the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mandatory"},(0,r.kt)("strong",{parentName:"a"},".mandatory")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","contains True if Null value input is rejected for the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#name"},(0,r.kt)("strong",{parentName:"a"},".name")," : Text"),"\xa0","\xa0","\xa0","\xa0","returns the name of the ",(0,r.kt)("inlineCode",{parentName:"td"},"dataClassAttribute")," object as string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#readonly"},(0,r.kt)("strong",{parentName:"a"},".readOnly")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","true if the attribute is read-only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#relateddataclass"},(0,r.kt)("strong",{parentName:"a"},".relatedDataClass")," : Text"),"\xa0","\xa0","\xa0","\xa0","returns the name of the dataclass related to the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#type"},(0,r.kt)("strong",{parentName:"a"},".type")," : Text"),"\xa0","\xa0","\xa0","\xa0","contains the conceptual value type of the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#unique"},(0,r.kt)("strong",{parentName:"a"},".unique")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","contains True if the attribute value must be unique")))),(0,r.kt)("h2",{id:"autofilled"},".autoFilled"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".autoFilled")," : Boolean"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".autoFilled")," property contains True if the attribute value is automatically filled by Qodly. This property corresponds to the ",(0,r.kt)("strong",{parentName:"p"},"autosequence")," model attribute property. "),(0,r.kt)("p",null,"This property is not returned if ",(0,r.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Bool(dataClassAttribute.autoFilled)")," to get a valid value (false) even if ",(0,r.kt)("inlineCode",{parentName:"p"},".autoFilled")," is not returned.")),(0,r.kt)("h2",{id:"exposed"},".exposed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".exposed")," : Boolean"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".exposed")," property is true if the attribute is exposed in REST."),(0,r.kt)("h2",{id:"fieldnumber"},".fieldNumber"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".fieldNumber")," : Integer"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".fieldNumber")," property contains the internal Qodly database field number of the attribute."),(0,r.kt)("p",null,"This property is not returned if ",(0,r.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Num(dataClassAttribute.fieldNumber)")," to get a valid value (0) even if ",(0,r.kt)("inlineCode",{parentName:"p"},".fieldNumber")," is not returned.")),(0,r.kt)("h2",{id:"fieldtype"},".fieldType"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".fieldType")," : Integer"),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".fieldType")," property contains the Qodly database field type of the attribute. It depends on the attribute kind (see ",(0,r.kt)("a",{parentName:"p",href:"#kind"},(0,r.kt)("inlineCode",{parentName:"a"},".kind")),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"dataClassAttribute.kind"),(0,r.kt)("th",{parentName:"tr",align:null},"fieldType"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage"),(0,r.kt)("td",{parentName:"tr",align:null},"Corresponding Qodly database field type, see ","[",(0,r.kt)("inlineCode",{parentName:"td"},"Value type"),"]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relatedEntity"),(0,r.kt)("td",{parentName:"tr",align:null},"38 (",(0,r.kt)("inlineCode",{parentName:"td"},"Is object"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relatedEntities"),(0,r.kt)("td",{parentName:"tr",align:null},"42 (",(0,r.kt)("inlineCode",{parentName:"td"},"Is collection"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"scalar: corresponding Qodly field type, see ","[",(0,r.kt)("inlineCode",{parentName:"td"},"Value type"),"]"),(0,r.kt)("li",null,"entity: 38 (",(0,r.kt)("inlineCode",{parentName:"td"},"Is object"),")"),(0,r.kt)("li",null,"entity selection: 42 (",(0,r.kt)("inlineCode",{parentName:"td"},"Is collection)")))))),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#type"},(0,r.kt)("inlineCode",{parentName:"a"},".type"))),(0,r.kt)("h2",{id:"indexed"},".indexed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".indexed")," : Boolean"),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".indexed")," property contains ",(0,r.kt)("strong",{parentName:"p"},"True")," if there is a B-tree or a Cluster B-tree index on the attribute.  "),(0,r.kt)("p",null,"This property is not returned if ",(0,r.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Bool(dataClassAttribute.indexed)")," to get a valid value (false) even if ",(0,r.kt)("inlineCode",{parentName:"p"},".indexed")," is not returned.")),(0,r.kt)("h2",{id:"inversename"},".inverseName"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".inverseName")," : Text"),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".inverseName")," property returns the name of the attribute which is at the other side of the relation.  "),(0,r.kt)("p",null,"This property is not returned if ",(0,r.kt)("inlineCode",{parentName:"p"},".kind"),' = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"String(dataClassAttribute.inverseName)"),' to get a valid value ("") even if ',(0,r.kt)("inlineCode",{parentName:"p"},".inverseName")," is not returned.  ")),(0,r.kt)("h2",{id:"keywordindexed"},".keywordIndexed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".keywordIndexed")," : Boolean"),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".keywordIndexed")," property contains ",(0,r.kt)("strong",{parentName:"p"},"True")," if there is a keyword index on the attribute.  "),(0,r.kt)("p",null,"This property is not returned if ",(0,r.kt)("a",{parentName:"p",href:"#kind"},(0,r.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Bool(dataClassAttribute.keywordIndexed)")," to get a valid value (false) even if ",(0,r.kt)("inlineCode",{parentName:"p"},".keywordIndexed")," is not returned.")),(0,r.kt)("h2",{id:"kind"},".kind"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".kind")," : Text"),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".kind")," property returns the category of the attribute. Returned value can be one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute'),(0,r.kt)("li",{parentName:"ul"},'"calculated": computed attribute, i.e. defined through a ',(0,r.kt)("a",{parentName:"li",href:"../concepts/orda/orda-classes#function-get-attributename"},(0,r.kt)("inlineCode",{parentName:"a"},"get")," function"),"."),(0,r.kt)("li",{parentName:"ul"},'"relatedEntity": N -> 1 relation attribute (reference to an entity)'),(0,r.kt)("li",{parentName:"ul"},'"relatedEntities": 1 -> N relation attribute (reference to an entity selection)')),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Given the following dataclass and relation:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(159).Z,width:"252",height:"188"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var attKind : Text\n attKind=ds.Employee.lastname.kind //"storage"\n attKind=ds.Employee.manager.kind //"relatedEntity"\n attKind=ds.Employee.directReports.kind //"relatedEntities"\n')),(0,r.kt)("h2",{id:"mandatory"},".mandatory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".mandatory")," : Boolean"),(0,r.kt)("h4",{id:"description-8"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".mandatory")," property contains True if Null value input is rejected for the attribute."),(0,r.kt)("p",null,"This property is not returned if ",(0,r.kt)("a",{parentName:"p",href:"#kind"},(0,r.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Bool(dataClassAttribute.mandatory)")," to get a valid value (false) even if ",(0,r.kt)("inlineCode",{parentName:"p"},".mandatory")," is not returned.")),(0,r.kt)("h2",{id:"name"},".name"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".name")," : Text"),(0,r.kt)("h4",{id:"description-9"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".name")," property returns the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataClassAttribute")," object as string."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var attName : Text\n attName=ds.Employee.lastname.name //attName="lastname"\n')),(0,r.kt)("h2",{id:"readonly"},".readOnly"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".readOnly")," : Boolean"),(0,r.kt)("h4",{id:"description-10"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".readOnly")," property is true if the attribute is read-only."),(0,r.kt)("p",null,"For example, computed attributes without ",(0,r.kt)("a",{parentName:"p",href:"../basics/orda/orda-classes#function-set-attributename"},(0,r.kt)("inlineCode",{parentName:"a"},"set")," function")," are read-only. "),(0,r.kt)("h2",{id:"relateddataclass"},".relatedDataClass"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".relatedDataClass")," : Text"),(0,r.kt)("h4",{id:"description-11"},"Description"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'This property is only available with attributes of the "relatedEntity" or "relatedEntities" ',(0,r.kt)("a",{parentName:"p",href:"#kind"},(0,r.kt)("inlineCode",{parentName:"a"},".kind"))," property.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".relatedDataClass")," property returns the name of the dataclass related to the attribute."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"Given the following tables and relations:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2090).Z,width:"555",height:"253"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var relClass1, relClassN : Text\n relClass1=ds.Employee.employer.relatedDataClass //relClass1="Company"\n relClassN=ds.Employee.directReports.relatedDataClass //relClassN="Employee"\n')),(0,r.kt)("h2",{id:"type"},".type"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".type")," : Text"),(0,r.kt)("h4",{id:"description-12"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".type")," property contains the conceptual value type of the attribute, useful for generic programming."),(0,r.kt)("p",null,"The conceptual value type depends on the attribute ",(0,r.kt)("a",{parentName:"p",href:"#kind"},(0,r.kt)("inlineCode",{parentName:"a"},".kind")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"dataClassAttribute.kind"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage"),(0,r.kt)("td",{parentName:"tr",align:null},'"blob", "bool", "date", "image", "number", "object", or "string"'),(0,r.kt)("td",{parentName:"tr",align:null},'"number" is returned for any numeric types including duration. "string" is returned for uuid, string and text attribute types. "blob" attributes are ',(0,r.kt)("a",{parentName:"td",href:"../basics/lang-blob.md"},"blob objects"),", they are handled using the ",(0,r.kt)("a",{parentName:"td",href:"/docs/language/BlobClass"},"Blob class"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relatedEntity"),(0,r.kt)("td",{parentName:"tr",align:null},"related dataClass name"),(0,r.kt)("td",{parentName:"tr",align:null},'Ex: "Companies"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relatedEntities"),(0,r.kt)("td",{parentName:"tr",align:null},'related dataClass name + "Selection" suffix'),(0,r.kt)("td",{parentName:"tr",align:null},'Ex: "EmployeeSelection"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,'storage: type ("blob", "number", etc.)'),(0,r.kt)("li",null,"entity: dataClass name"),(0,r.kt)("li",null,'entity selection: dataClass name + "Selection"')),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"see-also-1"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#fieldtype"},(0,r.kt)("inlineCode",{parentName:"a"},".fieldType"))),(0,r.kt)("h2",{id:"unique"},".unique"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".unique")," : Boolean"),(0,r.kt)("h4",{id:"description-13"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".unique"),' property contains True if the attribute value must be unique. This property corresponds to the "Unique" 4D field property.'),(0,r.kt)("p",null,"This property is not returned if ",(0,r.kt)("a",{parentName:"p",href:"#kind"},(0,r.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Bool(dataClassAttribute.unique)")," to get a valid value (false) even if ",(0,r.kt)("inlineCode",{parentName:"p"},".unique")," is not returned.")))}u.isMDXComponent=!0},159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/structure4-0b2586d7d2e698bc89518744f189dc9a.png"},2090:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/structure5-dbcc7304c4819759ae9b3c13e36c0f21.png"}}]);