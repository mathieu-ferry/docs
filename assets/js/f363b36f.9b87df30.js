"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5293],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(h,i(i({ref:e},p),{},{components:a})):n.createElement(h,i({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25242:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={id:"DataStoreClass",title:"DataStore"},i=void 0,s={unversionedId:"language/DataStoreClass",id:"language/DataStoreClass",title:"DataStore",description:"A Datastore is the interface object provided by ORDA to reference and access a database. The Datastore object is returned by the ds command, a shortcut to the main datastore.",source:"@site/docs/language/DataStoreClass.md",sourceDirName:"language",slug:"/language/DataStoreClass",permalink:"/docs/language/DataStoreClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/DataStoreClass.md",tags:[],version:"current",frontMatter:{id:"DataStoreClass",title:"DataStore"},sidebar:"Develop",previous:{title:"DataClass",permalink:"/docs/language/DataClassClass"},next:{title:"Date and Time",permalink:"/docs/language/dateandtime"}},o={},d=[{value:"Commands",id:"commands",level:3},{value:"Functions and properties",id:"functions-and-properties",level:3},{value:"ds",id:"ds",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:".cancelTransaction()",id:"canceltransaction",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<em>.dataclassName</em>",id:"dataclassname",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-2",level:4},{value:".isAdminProtected()",id:"isadminprotected",level:2},{value:"Description",id:"description-3",level:4},{value:"See also",id:"see-also",level:4},{value:".setAdminProtection()",id:"setadminprotection",level:2},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-3",level:4},{value:"See also",id:"see-also-1",level:4},{value:".startTransaction()",id:"starttransaction",level:2},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-4",level:4},{value:".validateTransaction()",id:"validatetransaction",level:2},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-5",level:4}],p={toc:d};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/docs/orda/data-model#datastore"},"Datastore")," is the interface object provided by ORDA to reference and access a database. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Datastore")," object is returned by the ",(0,r.kt)("a",{parentName:"p",href:"#ds"},"ds")," command, a shortcut to the main datastore."),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ds"},(0,r.kt)("strong",{parentName:"a"},"ds")," : cs.DataStore "),"\xa0","\xa0","\xa0","\xa0","returns a reference to the datastore matching the current Qodly database")))),(0,r.kt)("h3",{id:"functions-and-properties"},"Functions and properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#canceltransaction"},(0,r.kt)("strong",{parentName:"a"},".cancelTransaction"),"()"),"\xa0","\xa0","\xa0","\xa0","cancels the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#dataclassname"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("em",{parentName:"strong"},".dataclassName"))," : 4D.DataClass"),"\xa0","\xa0","\xa0","\xa0","all attributes of the dataclass as objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#isadminprotected"},(0,r.kt)("strong",{parentName:"a"},".isAdminProtected"),"() : boolean"),"\xa0","\xa0","\xa0","\xa0","returns ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if Data Explorer access has been disabled for the working session")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#setadminprotection"},(0,r.kt)("strong",{parentName:"a"},".setAdminProtection"),"( ",(0,r.kt)("em",{parentName:"a"},"status")," : boolean )"),"\xa0","\xa0","\xa0","\xa0","allows disabling any data access on the ",(0,r.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html#webadmin-settings"},"web admin port"),", including for the ",(0,r.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/en/Admin/dataExplorer.html"},"Data Explorer")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"WebAdmin")," sessions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#starttransaction"},(0,r.kt)("strong",{parentName:"a"},".startTransaction"),"()"),"\xa0","\xa0","\xa0","\xa0","starts a transaction in the current process on the database matching the datastore to which it applies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#validatetransaction"},(0,r.kt)("strong",{parentName:"a"},".validateTransaction"),"() "),"\xa0","\xa0","\xa0","\xa0","accepts the transaction")))),(0,r.kt)("h2",{id:"ds"},"ds"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ds")," : cs.DataStore "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"cs.DataStore"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to the datastore")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ds")," command returns a reference to the datastore matching the current Qodly database."),(0,r.kt)("p",null,"The datastore is opened automatically and available directly through ",(0,r.kt)("inlineCode",{parentName:"p"},"ds"),"."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Using the datastore on the Qodly database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' result=ds.Employee.query("firstName = :1","S@")\n')),(0,r.kt)("h2",{id:"canceltransaction"},".cancelTransaction()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".cancelTransaction"),"()"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".cancelTransaction()")," function cancels the transaction opened by the ",(0,r.kt)("a",{parentName:"p",href:"#starttransaction"},(0,r.kt)("inlineCode",{parentName:"a"},".startTransaction()"))," function at the corresponding level in the current process for the specified datastore."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".cancelTransaction()")," function cancels any changes made to the data during the transaction."),(0,r.kt)("p",null,"You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the ",(0,r.kt)("a",{parentName:"p",href:"#validatetransactions"},(0,r.kt)("inlineCode",{parentName:"a"},".validateTransaction()"))," function."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,"See example for the ",(0,r.kt)("a",{parentName:"p",href:"#starttransaction"},(0,r.kt)("inlineCode",{parentName:"a"},".startTransaction()"))," function."),(0,r.kt)("h2",{id:"dataclassname"},(0,r.kt)("em",{parentName:"h2"},".dataclassName")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},".dataclassName"))," : 4D.DataClass"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Each dataclass in a datastore is available as a property of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/orda/data-model#datastore"},"DataStore object"),". The returned cs.object contains all attributes of the dataclass as objects."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," var emp : cs.Employee\n var sel : cs.EmployeeSelection\n emp=ds.Employee //emp contains the Employee dataclass\n sel=emp.all() //gets an entity selection of all employees\n\n  //you could also write directly:\n sel=ds.Employee.all()\n")),(0,r.kt)("h2",{id:"isadminprotected"},".isAdminProtected()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".isAdminProtected"),"() : boolean"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"true if the Data Explorer access is disabled, false if it is enabled (default)")))),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".isAdminProtected()")," function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if Data Explorer access has been disabled for the working session."),(0,r.kt)("p",null,"By default, the Data Explorer access is granted for ",(0,r.kt)("inlineCode",{parentName:"p"},"webAdmin")," sessions, but it can be disabled to prevent any data access from administrators (see the ",(0,r.kt)("a",{parentName:"p",href:"#setadminprotection"},(0,r.kt)("inlineCode",{parentName:"a"},".setAdminProtection()"))," function)."),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#setadminprotection"},(0,r.kt)("inlineCode",{parentName:"a"},".setAdminProtection()"))),(0,r.kt)("h2",{id:"setadminprotection"},".setAdminProtection()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".setAdminProtection"),"( ",(0,r.kt)("em",{parentName:"p"},"status")," : boolean )"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"true to disable Data Explorer access to data on the ",(0,r.kt)("inlineCode",{parentName:"td"},"webAdmin")," port, false (default) to grant access")))),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".setAdminProtection()")," function allows disabling any data access on the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html#webadmin-settings"},"web admin port"),", including for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/dataExplorer.html"},"Data Explorer")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAdmin")," sessions."),(0,r.kt)("p",null,"By default when the function is not called, access to data is always granted on the web administration port for a session with ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAdmin")," privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html#access-key"},"access key")," settings."),(0,r.kt)("p",null,"In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAdmin")," privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"You create a ",(0,r.kt)("em",{parentName:"p"},"protectDataFile")," project method to call before deployments for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," ds.setAdminProtection(true) //Disables the Data Explorer data access\n")),(0,r.kt)("h4",{id:"see-also-1"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#isadminprotected"},(0,r.kt)("inlineCode",{parentName:"a"},".isAdminProtected()"))),(0,r.kt)("h2",{id:"starttransaction"},".startTransaction()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".startTransaction"),"()"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".startTransaction()")," function starts a transaction in the current process on the database matching the datastore to which it applies. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If this method is called on the main datastore (i.e. the datastore returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ds")," command), the transaction is applied to all operations performed on the main datastore and on the underlying database.")),(0,r.kt)("p",null,"You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the ",(0,r.kt)("inlineCode",{parentName:"p"},".validateTransaction()")," function."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var connect,status : object\n var person : cs.PersonsEntity\n var ds : cs.DataStore\n var choice : string\n var error : boolean\n\n ds.startTransaction()\n person=ds.Persons.query("lastname==:1","Peters").first()\n\n if(person!=null)\n    person.lastname="Smith"\n    status=person.save()\n end\n ...\n ...\n if(lastErrors[0].errCode!=0)\n    ds.cancelTransaction()\n else\n    ds.validateTransaction()\n end\n')),(0,r.kt)("h2",{id:"validatetransaction"},".validateTransaction()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".validateTransaction"),"() "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".validateTransaction()")," function accepts the transaction that was started with ",(0,r.kt)("a",{parentName:"p",href:"#starttransaction"},(0,r.kt)("inlineCode",{parentName:"a"},".startTransaction()"))," at the corresponding level."),(0,r.kt)("p",null,"The function saves the changes to the data that occurred during the transaction."),(0,r.kt)("p",null,"You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("p",null,"See example for ",(0,r.kt)("a",{parentName:"p",href:"#starttransaction"},(0,r.kt)("inlineCode",{parentName:"a"},".startTransaction()")),"."))}c.isMDXComponent=!0}}]);