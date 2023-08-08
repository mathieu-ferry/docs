"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=n.createContext({}),d=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(r.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=s,m=u["".concat(r,".").concat(h)]||u[h]||p[h]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},35842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const l={id:"overview",title:"The ORDA Concept"},i=void 0,o={unversionedId:"orda/overview",id:"orda/overview",title:"The ORDA Concept",description:"ORDA stands for Object Relational Data Access. It is an enhanced technology allowing to access both the model and the data of a database through objects.",source:"@site/docs/orda/overview.md",sourceDirName:"orda",slug:"/orda/overview",permalink:"/docs/orda/overview",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/orda/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"The ORDA Concept"}},r={},d=[{value:"Why use ORDA?",id:"why-use-orda",level:3},{value:"How to use ORDA?",id:"how-to-use-orda",level:3},{value:"Glossary",id:"glossary",level:2},{value:"<em>any</em> data type",id:"any-data-type",level:4},{value:"Attribute",id:"attribute",level:4},{value:"AttributePath",id:"attributepath",level:4},{value:"Calculated attribute",id:"calculated-attribute",level:4},{value:"Class code",id:"class-code",level:4},{value:"Class function",id:"class-function",level:4},{value:"Data model class",id:"data-model-class",level:4},{value:"Data model object",id:"data-model-object",level:4},{value:"Data model function",id:"data-model-function",level:4},{value:"Dataclass",id:"dataclass",level:4},{value:"DataClass class",id:"dataclass-class",level:4},{value:"Datastore",id:"datastore",level:4},{value:"DataStore class",id:"datastore-class",level:4},{value:"DataStoreImplementation",id:"datastoreimplementation",level:4},{value:"Deep copy",id:"deep-copy",level:4},{value:"ds",id:"ds",level:4},{value:"Entity",id:"entity",level:4},{value:"Entity selection",id:"entity-selection",level:4},{value:"Function",id:"function",level:4},{value:"Generic class",id:"generic-class",level:4},{value:"Lazy loading",id:"lazy-loading",level:4},{value:"Main datastore",id:"main-datastore",level:4},{value:"Optimistic Lock",id:"optimistic-lock",level:4},{value:"ORDA",id:"orda",level:4},{value:"Pessimistic Lock",id:"pessimistic-lock",level:4},{value:"Property",id:"property",level:4},{value:"PropertyPath",id:"propertypath",level:4},{value:"Regular class",id:"regular-class",level:4},{value:"Related dataclass",id:"related-dataclass",level:4},{value:"Relation attribute",id:"relation-attribute",level:4},{value:"Related entities",id:"related-entities",level:4},{value:"Session",id:"session",level:4},{value:"Shallow copy",id:"shallow-copy",level:4},{value:"Stamp",id:"stamp",level:4},{value:"Storage attribute",id:"storage-attribute",level:4}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"ORDA stands for ",(0,s.kt)("strong",{parentName:"p"},"Object Relational Data Access"),". It is an enhanced technology allowing to access both the model and the data of a database through objects."),(0,s.kt)("p",null,"Relations are transparently included in the concept, in combination with ",(0,s.kt)("a",{parentName:"p",href:"#lazy-loading"},"lazy loading"),", to remove all the typical hassles of data selection or transfer from the developer."),(0,s.kt)("p",null,"With ORDA, data is accessed through an abstraction layer, the ",(0,s.kt)("a",{parentName:"p",href:"/docs/orda/data-model#datastore"},"datastore"),". A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a ",(0,s.kt)("a",{parentName:"p",href:"/docs/orda/data-model#dataclass"},"dataclass")," object, a field is an ",(0,s.kt)("a",{parentName:"p",href:"/docs/orda/data-model##attribute"},"attribute")," of a dataclass, and records are accessed through ",(0,s.kt)("a",{parentName:"p",href:"/docs/orda/data-model#entity"},"entities")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/orda/data-model#entity-selection"},"entity selections"),". "),(0,s.kt)("h3",{id:"why-use-orda"},"Why use ORDA?"),(0,s.kt)("p",null,"Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts."),(0,s.kt)("p",null,"Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure."),(0,s.kt)("p",null,"In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections."),(0,s.kt)("p",null,'A query returns a list of entities called an entity selection, which fulfills the role of a SQL query\u2019s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.'),(0,s.kt)("h3",{id:"how-to-use-orda"},"How to use ORDA?"),(0,s.kt)("p",null,"Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically mapped upon the underlying database structure. "),(0,s.kt)("p",null,"ORDA objects can be handled like standard objects, but they automatically benefit from specific properties and methods."),(0,s.kt)("p",null,"ORDA objects are created and instanciated when necessary (you do not need to create them). However, ORDA data model objects are associated with ",(0,s.kt)("a",{parentName:"p",href:"/docs/orda/orda-classes"},"classes")," where you can add custom functions and define ",(0,s.kt)("a",{parentName:"p",href:"/docs/orda/orda-classes#computed-attributes"},"computed attributes"),"."),(0,s.kt)("h2",{id:"glossary"},"Glossary"),(0,s.kt)("p",null,"Here is an reminder for the main concepts handled by ORDA."),(0,s.kt)("h4",{id:"any-data-type"},(0,s.kt)("em",{parentName:"h4"},"any")," data type"),(0,s.kt)("p",null,'In this documentation, "any" data type is used to designate the various type of values that can be stored within dataclass attributes. It includes:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"number"),(0,s.kt)("li",{parentName:"ul"},"string"),(0,s.kt)("li",{parentName:"ul"},"null"),(0,s.kt)("li",{parentName:"ul"},"boolean"),(0,s.kt)("li",{parentName:"ul"},"date"),(0,s.kt)("li",{parentName:"ul"},"object"),(0,s.kt)("li",{parentName:"ul"},"collection"),(0,s.kt)("li",{parentName:"ul"},"picture(","*",")")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(","*",") picture type is not supported by statistical methods such as")," ",(0,s.kt)("inlineCode",{parentName:"p"},"entitySelection.max( )"),"."),(0,s.kt)("h4",{id:"attribute"},"Attribute"),(0,s.kt)("p",null,"An attribute is the smallest storage cell in a relational database (see also ",(0,s.kt)("a",{parentName:"p",href:"#relation-attribute"},"Relation attribute"),"). Do not confuse dataclass attributes and entity attributes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In a dataclass object, each property is a dataclass attribute that maps to a corresponding field in the corresponding table (same name and type)."),(0,s.kt)("li",{parentName:"ul"},"In an entity object, entity attributes are properties that contain values for the corresponding datastore attributes.")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Attributes")," and ",(0,s.kt)("em",{parentName:"p"},"properties"),' are similar concepts. "Attribute" is used to designate dataclass properties that store data, while "property" is more generic and defines a piece of data stored within an object. '),(0,s.kt)("h4",{id:"attributepath"},"AttributePath"),(0,s.kt)("p",null,"An attributePath is the path of an attribute inside a given dataclass or entity. See also ",(0,s.kt)("a",{parentName:"p",href:"#propertyPath"},"PropertyPath"),"."),(0,s.kt)("h4",{id:"calculated-attribute"},"Calculated attribute"),(0,s.kt)("p",null,'A calculated attribute doesn\'t actually store information. Instead, it determines its value based on other values from the same entity or from other entities, attributes or functions. When a calculated attribute is referenced, the underlying "calculation" is evaluated to determine the value. Calculated attributes may even be assigned values where user-defined code determines what to do during the assignment.'),(0,s.kt)("h4",{id:"class-code"},"Class code"),(0,s.kt)("p",null,"Code for the user class function(s). "),(0,s.kt)("h4",{id:"class-function"},"Class function"),(0,s.kt)("p",null,"ORDA objects such as datastores, dataclasses, entity selections, and entities, define classes of objects. They provide specific functions to directly interact with them. These functions are called class functions. Such functions are used by calling them on an instance of the object."),(0,s.kt)("p",null,"For example, the ",(0,s.kt)("inlineCode",{parentName:"p"},"query()")," function is a dataclass class function. If you have stored a dataclass object in the ",(0,s.kt)("inlineCode",{parentName:"p"},"$myClass")," variable, you can write:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-code4d"},'$myClass.query("name = smith")\n')),(0,s.kt)("h4",{id:"data-model-class"},"Data model class"),(0,s.kt)("p",null,"Extended class available for a data model object. "),(0,s.kt)("h4",{id:"data-model-object"},"Data model object"),(0,s.kt)("p",null,"Database objects available through the ORDA concept, i.e. datastore, dataclasses, entities and entity selections."),(0,s.kt)("h4",{id:"data-model-function"},"Data model function"),(0,s.kt)("p",null,"Function of an ORDA data model class."),(0,s.kt)("h4",{id:"dataclass"},"Dataclass"),(0,s.kt)("p",null,"A dataclass is an object model that describes the data. Tables in the database provided by the datastore are handled through dataclasses. Each table in the database provided by the datastore has a corresponding dataclass with the same name. Each field of the table is an attribute of the dataclass."),(0,s.kt)("p",null,"A dataclass is related to a single datastore."),(0,s.kt)("h4",{id:"dataclass-class"},"DataClass class"),(0,s.kt)("p",null,"Class for specific dataclass objects, in which you can add custom functions. "),(0,s.kt)("h4",{id:"datastore"},"Datastore"),(0,s.kt)("p",null,"A datastore is the interface object provided by ORDA to reference a model and access its data. The model, returned by the ",(0,s.kt)("inlineCode",{parentName:"p"},"ds")," command, is available as a datastore (the main datastore)."),(0,s.kt)("p",null,"A datastore provides:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a connection to a database"),(0,s.kt)("li",{parentName:"ul"},"a set of dataclasses to work with the database")),(0,s.kt)("h4",{id:"datastore-class"},"DataStore class"),(0,s.kt)("p",null,"Class for datastore objects, in which you can add custom functions. "),(0,s.kt)("h4",{id:"datastoreimplementation"},"DataStoreImplementation"),(0,s.kt)("p",null,"Internal name of the generic DataStore class in the ",(0,s.kt)("inlineCode",{parentName:"p"},"4D")," class store."),(0,s.kt)("h4",{id:"deep-copy"},"Deep copy"),(0,s.kt)("p",null,"A deep copy duplicates an object and all the references it contains. After a deep copy, a copied collection contains duplicated elements and thus, new references, of all of the orginal elements. See also ",(0,s.kt)("a",{parentName:"p",href:"#shallow-copy"},"Shallow copy"),"."),(0,s.kt)("h4",{id:"ds"},"ds"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ds")," is the language command that returns a ",(0,s.kt)("a",{parentName:"p",href:"dsMapping.md#datastore"},"datastore")," object reference. It matches the datastore available upon the Qodly database."),(0,s.kt)("h4",{id:"entity"},"Entity"),(0,s.kt)("p",null,"An entity is an object that corresponds to a dataclass model. An entity contains the same attributes as the dataclass."),(0,s.kt)("p",null,"An entity can be seen as an instance of the dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains related data. The purpose of the entity is to manage data (create, update, delete)."),(0,s.kt)("h4",{id:"entity-selection"},"Entity selection"),(0,s.kt)("p",null,"An entity selection is an object. When querying the datastore, an entity selection is returned. An entity selection is a set of references to entities related to the same dataclass."),(0,s.kt)("p",null,"An entity selection contains:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a set of 0 to X entity references,"),(0,s.kt)("li",{parentName:"ul"},"a length property (always),"),(0,s.kt)("li",{parentName:"ul"},"queryPlan and queryPath properties (if asked while querying).")),(0,s.kt)("p",null,"An entity selection can also be empty."),(0,s.kt)("h4",{id:"function"},"Function"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"#class-function"},"Class function"),"."),(0,s.kt)("h4",{id:"generic-class"},"Generic class"),(0,s.kt)("p",null,"Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in user extended classes, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"EmployeeEntity"),". "),(0,s.kt)("h4",{id:"lazy-loading"},"Lazy loading"),(0,s.kt)("p",null,"Since entities are managed as references, data is loaded only when necessary, i.e. when accessing it in the code or through interface widgets. This optimization principle is called lazy loading."),(0,s.kt)("h4",{id:"main-datastore"},"Main datastore"),(0,s.kt)("p",null,"The Datastore object matching the opened Qodly database (standalone or client/server). The main datastore is returned by the ",(0,s.kt)("inlineCode",{parentName:"p"},"ds")," command. "),(0,s.kt)("h4",{id:"optimistic-lock"},"Optimistic Lock"),(0,s.kt)("p",null,'In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. Optimistic locking is only available in ORDA implementation. See also "Pessimistic lock".'),(0,s.kt)("h4",{id:"orda"},"ORDA"),(0,s.kt)("p",null,"Object Relational Data Access. See ",(0,s.kt)("a",{parentName:"p",href:"overview"},"What is ORDA?")),(0,s.kt)("h4",{id:"pessimistic-lock"},"Pessimistic Lock"),(0,s.kt)("p",null,'A "pessimistic lock" means that an entity is locked prior to its being accessed, using the ',(0,s.kt)("inlineCode",{parentName:"p"},"entity.lock()")," function. Other processes can neither update nor drop the entity until it is unlocked. See also ",(0,s.kt)("a",{parentName:"p",href:"#optimistic-lock"},"Optimistic lock"),"."),(0,s.kt)("h4",{id:"property"},"Property"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"#attribute"},"Attribute"),"."),(0,s.kt)("h4",{id:"propertypath"},"PropertyPath"),(0,s.kt)("p",null,'A propertyPath is the path to a property in a given object. If the property is nested in several levels, each level separated is by a dot (".").'),(0,s.kt)("h4",{id:"regular-class"},"Regular class"),(0,s.kt)("p",null,"User class not related to an ORDA object."),(0,s.kt)("h4",{id:"related-dataclass"},"Related dataclass"),(0,s.kt)("p",null,"These are dataclasses linked by relation attributes."),(0,s.kt)("h4",{id:"relation-attribute"},"Relation attribute"),(0,s.kt)("p",null,"Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB."),(0,s.kt)("li",{parentName:"ul"},"One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.")),(0,s.kt)("p",null,"A dataclass can have recursive relation attributes."),(0,s.kt)("p",null,"In an entity, the value of a relation attribute can be an entity or an entity selection."),(0,s.kt)("h4",{id:"related-entities"},"Related entities"),(0,s.kt)("p",null,"A related entity can be seen as the instance of a relation attribute in a dataclass."),(0,s.kt)("p",null,"Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses."),(0,s.kt)("h4",{id:"session"},"Session"),(0,s.kt)("p",null,"When a user connects to a Qodly application, a Session object is created on the Server (HTTP). A session cookie is generated. "),(0,s.kt)("p",null,"Each Session object provides a ",(0,s.kt)("inlineCode",{parentName:"p"},".storage")," property which is a shared object. Privileges are associated to user sessions. "),(0,s.kt)("h4",{id:"shallow-copy"},"Shallow copy"),(0,s.kt)("p",null,"A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. See also ",(0,s.kt)("a",{parentName:"p",href:"#deep-copy"},"Deep copy"),"."),(0,s.kt)("h4",{id:"stamp"},"Stamp"),(0,s.kt)("p",null,'Used in "optimistic" locking technology. All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, ORDA can prevent concurrent modifications on the same entities.'),(0,s.kt)("h4",{id:"storage-attribute"},"Storage attribute"),(0,s.kt)("p",null,"A storage attribute (sometimes referred to as a scalar attribute) is the most basic type of attribute in a datastore class and most directly corresponds to a field in a relational database. A storage attribute holds a single value for each entity in the class."))}u.isMDXComponent=!0}}]);