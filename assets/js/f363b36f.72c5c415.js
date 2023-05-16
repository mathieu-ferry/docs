"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5293],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"DataStoreClass",title:"DataStore"},i=void 0,s={unversionedId:"language/DataStoreClass",id:"language/DataStoreClass",title:"DataStore",description:"A Datastore is the interface object provided by ORDA to reference and access a database. The Datastore object is returned by the ds command, a shortcut to the main datastore.",source:"@site/docs/language/DataStoreClass.md",sourceDirName:"language",slug:"/language/DataStoreClass",permalink:"/docs/language/DataStoreClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/DataStoreClass.md",tags:[],version:"current",frontMatter:{id:"DataStoreClass",title:"DataStore"},sidebar:"Development",previous:{title:"DataClassAttribute",permalink:"/docs/language/DataClassAttributeClass"},next:{title:"Date and Time",permalink:"/docs/language/dateandtime"}},o={},p=[{value:"Commands",id:"commands",level:3},{value:"Functions and properties",id:"functions-and-properties",level:3},{value:"ds",id:"ds",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:".cancelTransaction()",id:"canceltransaction",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<em>.dataclassName</em>",id:"dataclassname",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-2",level:4},{value:".isAdminProtected()",id:"isadminprotected",level:2},{value:"Description",id:"description-3",level:4},{value:"See also",id:"see-also",level:4},{value:".setAdminProtection()",id:"setadminprotection",level:2},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-3",level:4},{value:"See also",id:"see-also-1",level:4},{value:".startRequestLog()",id:"startrequestlog",level:2},{value:"Description",id:"description-5",level:4},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:".startTransaction()",id:"starttransaction",level:2},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-4",level:4},{value:".stopRequestLog()",id:"stoprequestlog",level:2},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-5",level:4},{value:".validateTransaction()",id:"validatetransaction",level:2},{value:"Description",id:"description-8",level:4},{value:"Example",id:"example-6",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"../../concepts/orda/data-model.md#datastore"},"Datastore")," is the interface object provided by ORDA to reference and access a database. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Datastore")," object is returned by the ",(0,r.kt)("a",{parentName:"p",href:"#ds"},"ds")," command, a shortcut to the main datastore."),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ds"},(0,r.kt)("strong",{parentName:"a"},"ds")," : cs.DataStore "),"\xa0","\xa0","\xa0","\xa0","returns a reference to the datastore matching the current Qodly database")))),(0,r.kt)("h3",{id:"functions-and-properties"},"Functions and properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#canceltransaction"},(0,r.kt)("strong",{parentName:"a"},".cancelTransaction()")),"\xa0","\xa0","\xa0","\xa0","cancels the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#dataclassname"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("em",{parentName:"strong"},".dataclassName"))," : 4D.DataClass"),"\xa0","\xa0","\xa0","\xa0","contains a description of the dataclass")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#isadminprotected"},(0,r.kt)("strong",{parentName:"a"},".isAdminProtected()")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","returns ",(0,r.kt)("inlineCode",{parentName:"td"},"True")," if Data Explorer access has been disabled for the working session")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#setadminprotection"},(0,r.kt)("strong",{parentName:"a"},".setAdminProtection"),"( ",(0,r.kt)("em",{parentName:"a"},"status")," : Boolean )"),"\xa0","\xa0","\xa0","\xa0","allows disabling any data access on the ",(0,r.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html#webadmin-settings"},"web admin port"),", including for the ",(0,r.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/en/Admin/dataExplorer.html"},"Data Explorer")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"WebAdmin")," sessions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#startrequestlog"},(0,r.kt)("strong",{parentName:"a"},".startRequestLog"),"()",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".startRequestLog"),"( ",(0,r.kt)("em",{parentName:"a"},"file")," : 4D.File )",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".startRequestLog"),"( ",(0,r.kt)("em",{parentName:"a"},"reqNum")," : Integer )"),"\xa0","\xa0","\xa0","\xa0","starts the logging of ORDA requests on the client side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#starttransaction"},(0,r.kt)("strong",{parentName:"a"},".startTransaction()")),"\xa0","\xa0","\xa0","\xa0","starts a transaction in the current process on the database matching the datastore to which it applies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#stoprequestlog"},(0,r.kt)("strong",{parentName:"a"},".stopRequestLog()"),"  "),"\xa0","\xa0","\xa0","\xa0","stops any logging of ORDA requests on the client side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#validatetransaction"},(0,r.kt)("strong",{parentName:"a"},".validateTransaction()"),"  "),"\xa0","\xa0","\xa0","\xa0","accepts the transaction")))),(0,r.kt)("h2",{id:"ds"},"ds"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ds")," : cs.DataStore "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"cs.DataStore"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to the datastore")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ds")," command returns a reference to the datastore matching the current Qodly database."),(0,r.kt)("p",null,"The datastore is opened automatically and available directly through ",(0,r.kt)("inlineCode",{parentName:"p"},"ds"),"."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Using the datastore on the Qodly database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' result=ds.Employee.query("firstName = :1","S@")\n')),(0,r.kt)("h2",{id:"canceltransaction"},".cancelTransaction()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".cancelTransaction()")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".cancelTransaction()")," function cancels the transaction opened by the ",(0,r.kt)("a",{parentName:"p",href:"#starttransaction"},(0,r.kt)("inlineCode",{parentName:"a"},".startTransaction()"))," function at the corresponding level in the current process for the specified datastore."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".cancelTransaction()")," function cancels any changes made to the data during the transaction."),(0,r.kt)("p",null,"You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the ",(0,r.kt)("a",{parentName:"p",href:"#validatetransactions"},(0,r.kt)("inlineCode",{parentName:"a"},".validateTransaction()"))," function."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,"See example for the ",(0,r.kt)("a",{parentName:"p",href:"#starttransaction"},(0,r.kt)("inlineCode",{parentName:"a"},".startTransaction()"))," function."),(0,r.kt)("h2",{id:"dataclassname"},(0,r.kt)("em",{parentName:"h2"},".dataclassName")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},".dataclassName"))," : 4D.DataClass"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Each dataclass in a datastore is available as a property of the ",(0,r.kt)("a",{parentName:"p",href:"../../concepts/orda/data-model.md#datastore"},"DataStore object"),". The returned object contains a description of the dataclass."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," var emp : cs.Employee\n var sel : cs.EmployeeSelection\n emp=ds.Employee //emp contains the Employee dataclass\n sel=emp.all() //gets an entity selection of all employees\n\n  //you could also write directly:\n sel=ds.Employee.all()\n")),(0,r.kt)("h2",{id:"isadminprotected"},".isAdminProtected()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".isAdminProtected()")," : Boolean"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the Data Explorer access is disabled, False if it is enabled (default)")))),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".isAdminProtected()")," function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if Data Explorer access has been disabled for the working session."),(0,r.kt)("p",null,"By default, the Data Explorer access is granted for ",(0,r.kt)("inlineCode",{parentName:"p"},"webAdmin")," sessions, but it can be disabled to prevent any data access from administrators (see the ",(0,r.kt)("a",{parentName:"p",href:"#setadminprotection"},(0,r.kt)("inlineCode",{parentName:"a"},".setAdminProtection()"))," function)."),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#setadminprotection"},(0,r.kt)("inlineCode",{parentName:"a"},".setAdminProtection()"))),(0,r.kt)("h2",{id:"setadminprotection"},".setAdminProtection()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".setAdminProtection"),"( ",(0,r.kt)("em",{parentName:"p"},"status")," : Boolean )"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"True to disable Data Explorer access to data on the ",(0,r.kt)("inlineCode",{parentName:"td"},"webAdmin")," port, False (default) to grant access")))),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".setAdminProtection()")," function allows disabling any data access on the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html#webadmin-settings"},"web admin port"),", including for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/dataExplorer.html"},"Data Explorer")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAdmin")," sessions."),(0,r.kt)("p",null,"By default when the function is not called, access to data is always granted on the web administration port for a session with ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAdmin")," privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html#access-key"},"access key")," settings."),(0,r.kt)("p",null,"In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAdmin")," privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"You create a ",(0,r.kt)("em",{parentName:"p"},"protectDataFile")," project method to call before deployments for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," ds.setAdminProtection(True) //Disables the Data Explorer data access\n")),(0,r.kt)("h4",{id:"see-also-1"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#isadminprotected"},(0,r.kt)("inlineCode",{parentName:"a"},".isAdminProtected()"))),(0,r.kt)("h2",{id:"startrequestlog"},".startRequestLog()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".startRequestLog"),"()",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},".startRequestLog"),"( ",(0,r.kt)("em",{parentName:"p"},"file")," : 4D.File )",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},".startRequestLog"),"( ",(0,r.kt)("em",{parentName:"p"},"reqNum")," : Integer )"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.File"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"File object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reqNum"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of requests to keep in memory")))),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".startRequestLog()")," function starts the logging of ORDA requests on the client side."),(0,r.kt)("p",null,"This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations."),(0,r.kt)("p",null,"The ORDA request log can be sent to a file or to memory, depending on the parameter type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you passed a ",(0,r.kt)("em",{parentName:"li"},"file")," object created with the ",(0,r.kt)("inlineCode",{parentName:"li"},"File")," command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.",(0,r.kt)("br",null),"If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it.\nIf ",(0,r.kt)("inlineCode",{parentName:"li"},".startRequestLog( )")," is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ","]"," character must be manually appended at the end of the file to perform a JSON validation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you passed a ",(0,r.kt)("em",{parentName:"p"},"reqNum")," integer, the log in memory is emptied (if any) and a new log is initialized. It will keep ",(0,r.kt)("em",{parentName:"p"},"reqNum")," requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).",(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"p"},".startRequestLog()")," is called with a ",(0,r.kt)("em",{parentName:"p"},"reqNum")," while a logging was previously started in a file, the file logging is stopped.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you did not pass any parameter, the log is started in memory. If ",(0,r.kt)("inlineCode",{parentName:"p"},".startRequestLog()")," was previously called with a ",(0,r.kt)("em",{parentName:"p"},"reqNum")," (before a ",(0,r.kt)("inlineCode",{parentName:"p"},".stopRequestLog()"),"), the log data is stacked in memory until the next time the log is emptied or ",(0,r.kt)("inlineCode",{parentName:"p"},".stopRequestLog()")," is called."))),(0,r.kt)("p",null,"For a description of the ORDA request log format, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/debugLogFiles.html#orda-client-requests"},(0,r.kt)("strong",{parentName:"a"},"ORDA client requests"))," section."),(0,r.kt)("h4",{id:"example-1-1"},"Example 1"),(0,r.kt)("p",null,"You want to log ORDA client requests in a file and use the log sequence number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var $file : 4D.File\n var $e : cs.PersonsEntity\n\n $file:=File("/LOGS/ORDARequests.txt") //logs folder\n\n SET DATABASE PARAMETER(Client Log Recording;1) //to trigger the global log sequence number\n ds.startRequestLog($file)\n $e:=ds.Persons.get(30001) //send a request\n ds.stopRequestLog()\n SET DATABASE PARAMETER(Client Log Recording;0)\n')),(0,r.kt)("h4",{id:"example-2-1"},"Example 2"),(0,r.kt)("p",null,"You want to log ORDA client requests in memory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var $es : cs.PersonsSelection\n var $log : Collection\n\n ds.startRequestLog(3) //keep 3 requests in memory\n\n $es:=ds.Persons.query("name=:1";"Marie")\n $es:=ds.Persons.query("name IN :1";New collection("Marie"))\n $es:=ds.Persons.query("name=:1";"So@")\n\n $log:=ds.getRequestLog()\n ALERT("The longest request lasted: "+String($log.max("duration"))+" ms")\n')),(0,r.kt)("h2",{id:"starttransaction"},".startTransaction()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".startTransaction()")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".startTransaction()")," function starts a transaction in the current process on the database matching the datastore to which it applies. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If this method is called on the main datastore (i.e. the datastore returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ds")," command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.")),(0,r.kt)("p",null,"You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the ",(0,r.kt)("inlineCode",{parentName:"p"},".validateTransaction()")," function."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var $connect; $status : Object\n var $person : cs.PersonsEntity\n var $ds : cs.DataStore\n var $choice : Text\n var $error : Boolean\n\n Case of\n    :($choice="local")\n       $ds:=ds\n    :($choice="remote")\n       $connect:=New object("hostname";"111.222.3.4:8044")\n       $ds:=Open datastore($connect;"myRemoteDS")\n End case\n\n $ds.startTransaction()\n $person:=$ds.Persons.query("lastname=:1";"Peters").first()\n\n If($person#Null)\n    $person.lastname:="Smith"\n    $status:=$person.save()\n End if\n ...\n ...\n If($error)\n    $ds.cancelTransaction()\n Else\n    $ds.validateTransaction()\n End if\n')),(0,r.kt)("h2",{id:"stoprequestlog"},".stopRequestLog()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".stopRequestLog()"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".stopRequestLog()")," function stops any logging of ORDA requests on the client side (in file or in memory). It is particularly useful when logging in a file, since it actually closes the opened document on disk."),(0,r.kt)("p",null,"This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("p",null,"See examples for ",(0,r.kt)("a",{parentName:"p",href:"#startrequestlog"},(0,r.kt)("inlineCode",{parentName:"a"},".startRequestLog()")),"."),(0,r.kt)("h2",{id:"validatetransaction"},".validateTransaction()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".validateTransaction()"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description-8"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".validateTransaction()")," function accepts the transaction that was started with ",(0,r.kt)("a",{parentName:"p",href:"#starttransaction"},(0,r.kt)("inlineCode",{parentName:"a"},".startTransaction()"))," at the corresponding level on the specified datastore."),(0,r.kt)("p",null,"The function saves the changes to the data on the datastore that occurred during the transaction."),(0,r.kt)("p",null,"You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("p",null,"See example for ",(0,r.kt)("a",{parentName:"p",href:"#starttransaction"},(0,r.kt)("inlineCode",{parentName:"a"},".startTransaction()")),"."))}m.isMDXComponent=!0}}]);