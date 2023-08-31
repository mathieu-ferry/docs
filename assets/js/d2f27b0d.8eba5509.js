"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7252],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var s=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,s,r=function(e,t){if(null==e)return{};var i,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},d=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(i),g=r,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return i?s.createElement(h,n(n({ref:t},d),{},{components:i})):s.createElement(h,n({ref:t},d))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,n=new Array(a);n[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,n[1]=o;for(var c=2;c<a;c++)n[c]=i[c];return s.createElement.apply(null,n)}return s.createElement.apply(null,i)}g.displayName="MDXCreateElement"},87981:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=i(87462),r=(i(67294),i(3905));const a={id:"datastorePermissions",title:"Datastore Permissions"},n=void 0,o={unversionedId:"studio/roles/datastorePermissions",id:"studio/roles/datastorePermissions",title:"Datastore Permissions",description:"Datastore permissions play a pivotal role in controlling access to the entirety of your website's Datastore. These permissions act as sentinels, guarding your website's Datastore, which encompasses all Dataclasses and Entities. The strategic establishment of these permissions at the Datastore level assumes paramount importance, as it serves as the first line of defense against unauthorized entry and unauthorized alterations to mission-critical data.",source:"@site/docs/studio/roles/datastorePermissions.md",sourceDirName:"studio/roles",slug:"/studio/roles/datastorePermissions",permalink:"/docs/studio/roles/datastorePermissions",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/roles/datastorePermissions.md",tags:[],version:"current",frontMatter:{id:"datastorePermissions",title:"Datastore Permissions"},sidebar:"Studio",previous:{title:"Roles and Privileges",permalink:"/docs/studio/roles/rolesPrivilegesOverview"},next:{title:"DataClass Permissions",permalink:"/docs/studio/roles/dataClassPermissions"}},l={},c=[{value:"Risk of Unrestricted Access",id:"risk-of-unrestricted-access",level:2},{value:"Achieving Utmost Access Control",id:"achieving-utmost-access-control",level:2},{value:"Introducing Restricted Privilege",id:"introducing-restricted-privilege",level:3},{value:"Setting Datastore Permissions",id:"setting-datastore-permissions",level:3},{value:"Guest Privilege: A Balancing Act",id:"guest-privilege-a-balancing-act",level:2},{value:"Introducing the Guest Privilege",id:"introducing-the-guest-privilege",level:3},{value:"Configuring the Guest Privilege",id:"configuring-the-guest-privilege",level:3},{value:"Guest Privilege Read Access",id:"guest-privilege-read-access",level:3},{value:"Model Editor Approach",id:"model-editor-approach",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Datastore permissions play a pivotal role in controlling access to the entirety of your website's Datastore. These permissions act as sentinels, guarding your website's Datastore, which encompasses all Dataclasses and Entities. The strategic establishment of these permissions at the Datastore level assumes paramount importance, as it serves as the first line of defense against unauthorized entry and unauthorized alterations to mission-critical data. "),(0,r.kt)("h2",{id:"risk-of-unrestricted-access"},"Risk of Unrestricted Access"),(0,r.kt)("p",null,"However, when these permissions are not thoughtfully set up, your application operates under the specter of unregulated access. In this unsettling scenario, every user enjoys unregulated access to all resources within the Datastore, which, unfortunately, brings with it inherent risks. "),(0,r.kt)("p",null,"To highlight this vulnerability, let's illustrate it practically: Imagine yourself as an unauthorized user without profile verification. Should you attempt an HTTP request to the REST API endpoint corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Package")," Dataclass, you will promptly grasp the substantial threat of unchecked data access. This scenario grants you the ability to execute various actions at will, including accessing confidential information of users, a risk that extends uniformly to all other Dataclasses."),(0,r.kt)("img",{alt:"explorer",src:i(62773).Z,style:{borderRadius:"6px"}}),(0,r.kt)("h2",{id:"achieving-utmost-access-control"},"Achieving Utmost Access Control"),(0,r.kt)("p",null,'In response to the potential risks posed by unrestricted access, Qodly offers a robust remedy \u2013 a strategy underpinned by controlled and fortified data interactions. This approach, known as "All Data Inaccessible by Default", shifts the paradigm to a more proactive and vigilant stance, mitigating the inherent vulnerabilities of unregulated access.'),(0,r.kt)("h3",{id:"introducing-restricted-privilege"},"Introducing Restricted Privilege"),(0,r.kt)("p",null,"At the core of the Datastore Lockdown strategy lies the concept of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege. This privilege operates as a safeguarding mechanism. It restricts all actions on the Datastore, thereby rendering it inaccessible until specific permissions are meticulously set up. This ensures that users, even those without explicitly defined roles or privileges, are unable to access any resources within the Datastore."),(0,r.kt)("h3",{id:"setting-datastore-permissions"},"Setting Datastore Permissions"),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege created, as shown in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/studio/roles/rolesPrivilegesOverview"},(0,r.kt)("strong",{parentName:"a"},"Roles and Privileges"))," section, your next step involves selecting it. You can navigate resources through the intuitive user interface by either choosing ",(0,r.kt)("inlineCode",{parentName:"p"},"ds")," from the dropdown list to signify the Datastore resource or directly typing ",(0,r.kt)("inlineCode",{parentName:"p"},"ds")," into the search bar."),(0,r.kt)("img",{alt:"explorer",src:i(28450).Z,style:{borderRadius:"6px"}}),(0,r.kt)("p",null,"Setting permissions to the Datastore itself entails associating comprehensive permissions, ranging from ",(0,r.kt)("inlineCode",{parentName:"p"},"Read")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Execute"),". By setting all permissions for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ds")," ressource and not associating this privilege with any role, the Datastore is protected against malicious access attempts. This safeguarding mechanism effectively transforms the website into a trove, living up to its name. "),(0,r.kt)("p",null,'Attempting to access the same REST API Endpoints will result in a "No permission to read for the Package dataclass" response, a rule that extends across all Dataclasses.'),(0,r.kt)("img",{alt:"explorer",src:i(11003).Z,style:{borderRadius:"6px"}}),(0,r.kt)("h2",{id:"guest-privilege-a-balancing-act"},"Guest Privilege: A Balancing Act"),(0,r.kt)("p",null,"While the pursuit of utmost access control is a foundational goal, there arise situations demanding an alternative strategy \u2013 one attuned to unconnected users or visitors and fleeting interactions. That's when the concept of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege emerges, a central figure in the path toward all-encompassing data access control, skillfully poised to navigate this nuanced equilibrium."),(0,r.kt)("h3",{id:"introducing-the-guest-privilege"},"Introducing the Guest Privilege"),(0,r.kt)("p",null,"When a role lacks specific privileges, Qodly seamlessly bestows the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege upon that ",(0,r.kt)("inlineCode",{parentName:"p"},"Session"),". It allows users lacking defined privileges to engage in controlled actions, such as accessing non-restricted resources, while curbing their ability to partake in potentially harmful activities involving other resources. This measured and cautious approach ensures that users interact with your application within well-defined boundaries."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege grants access to all resources if no explicit permissions are in place.")),(0,r.kt)("h3",{id:"configuring-the-guest-privilege"},"Configuring the Guest Privilege"),(0,r.kt)("p",null,"It's worth noting that the groundwork for such interactions is already laid within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Privileges")," tab. Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege comes into existence as a default presence, ready to extend a welcoming hand to those sojourners who grace your digital corridors without without yet having established a formal identity."),(0,r.kt)("img",{alt:"explorer",src:i(63882).Z,style:{borderRadius:"6px"}}),(0,r.kt)("h3",{id:"guest-privilege-read-access"},"Guest Privilege Read Access"),(0,r.kt)("p",null,"To grant the read access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege, a deliberate transition is required. This procedure entails relinquishing complete permissions control over the Datastore from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege. Subsequently, the focus shifts to specifically assigning the read permission to the Datastore, thereby endowing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege with the sole capability of read access."),(0,r.kt)("img",{alt:"explorer",src:i(85678).Z,style:{borderRadius:"6px"}}),(0,r.kt)("p",null,"Through this transition, you bestow the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege with the ability for informed discovery, enabling access to a wealth of data, including details about flights, hotels, activities, and more, all while ensuring that critical information remains safeguarded against unauthorized modifications. "),(0,r.kt)("img",{alt:"explorer",src:i(26494).Z,style:{borderRadius:"6px"}}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"However, it's essential to acknowledge that not all data should be made accessible to users. Sensitive User data, confidential Reporting documents, and other private information must remain restricted.")),(0,r.kt)("p",null,"To navigate this intricate balance between data accessibility and security, we turn our attention to the next crucial step: utilizing ",(0,r.kt)("a",{parentName:"p",href:"/docs/studio/roles/dataClassPermissions"},(0,r.kt)("strong",{parentName:"a"},"DataClass Permissions"))," to selectively shape and control access to specific sets of data."),(0,r.kt)("h2",{id:"model-editor-approach"},"Model Editor Approach"),(0,r.kt)("p",null,'Using the Model Editor, effortlessly configure Datastore permissions by linking privileges to permissions like "create", "read", "update", and "delete". This interface empowers control over operations within the Datastore. Permissions management for the Datastore becomes straightforward through the Model Editor\'s streamlined dropdown selection, allowing easy allocation of desired privileges.'),(0,r.kt)("img",{alt:"explorer",src:i(86589).Z,style:{borderRadius:"6px"}}))}u.isMDXComponent=!0},86589:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/ModelEditor_datastorePermissions-27e7c984624ebeed99cdb257ca9e65dc.png"},63882:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/guestPrivilege-495374236b583e0c2033dd38600dbb37.png"},26494:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/packages-4f78c36cb1c681e50b193edd257ffe38.png"},85678:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/readAccessGuestPrivilege-d805b71d8af0fc5edcf16692b420b848.png"},11003:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/restrictedAccess-3323fbb03ac5ea9b4b04c888c4db040b.png"},28450:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/restrictedPrivilege-5cd3cc21ae1c31fe9da9f67abb8a94c0.png"},62773:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/unrestrictedAccess-11700dac3d2e2aeea65b5c28ded777b6.png"}}]);