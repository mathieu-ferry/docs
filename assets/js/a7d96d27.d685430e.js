"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[6055],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49526:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"ZipArchiveClass",title:"ZIPArchive"},i=void 0,o={unversionedId:"language/ZipArchiveClass",id:"language/ZipArchiveClass",title:"ZIPArchive",description:'A QodlyScript ZIP archive is a File or folder object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save space or transfer files via mediums which may have size limitations (e.g., email or network).',source:"@site/docs/language/ZipArchiveClass.md",sourceDirName:"language",slug:"/language/ZipArchiveClass",permalink:"/docs/language/ZipArchiveClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/ZipArchiveClass.md",tags:[],version:"current",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"Programming",previous:{title:"WebServer",permalink:"/docs/language/WebServerClass"},next:{title:"ZIPFile",permalink:"/docs/language/ZipFileClass"}},p={},s=[{value:"Example",id:"example",level:3},{value:"Commands",id:"commands",level:3},{value:"Properties",id:"properties",level:3},{value:"zipCreateArchive",id:"zipcreatearchive",level:2},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"zipReadArchive",id:"zipreadarchive",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-6",level:4},{value:".root",id:"root",level:2},{value:"Description",id:"description-2",level:4}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A QodlyScript ZIP archive is a ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"folder"),' object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save space or transfer files via mediums which may have size limitations (e.g., email or network).'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You create a ZIP archive with the ",(0,r.kt)("a",{parentName:"li",href:"#zipcreatearchive"},"zipCreateArchive")," command."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/language/ZipFileClass"},(0,r.kt)("inlineCode",{parentName:"a"},"ZIPFile"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/ZipFolderClass"},(0,r.kt)("inlineCode",{parentName:"a"},"ZIPFolder"))," instances are available through the ",(0,r.kt)("a",{parentName:"li",href:"#root"},(0,r.kt)("inlineCode",{parentName:"a"},"root"))," property (",(0,r.kt)("inlineCode",{parentName:"li"},"ZIPFolder"),") of the object returned by ",(0,r.kt)("a",{parentName:"li",href:"#zipreadearchive"},"zipReadArchive")," command.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"To retrieve and view the contents of a ZIP file object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var path, archive : 4D.File\nvar zipFile : 4D.ZipFile\nvar zipFolder : 4D.ZipFolder\nvar txt : string\n\npath=folder(fk desktop folder).file("MyDocs/Archive.zip")\narchive=zipReadArchive(path)\nzipFolder=archive.root // store the zip main folder\nzipFile=zipFolder.files()[0] //read the first zipped file\n\nIf(zipFile.extension=".txt")\n txt=zipFile.getText()\nEnd if\n')),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#zipcreatearchive"},(0,r.kt)("strong",{parentName:"a"},"zipCreateArchive")," ( ",(0,r.kt)("em",{parentName:"a"},"fileToZip")," : 4D.File , ",(0,r.kt)("em",{parentName:"a"},"destinationFile")," : 4D.File ) : object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},"zipCreateArchive")," ( ",(0,r.kt)("em",{parentName:"a"},"folderToZip")," : 4D.Folder , ",(0,r.kt)("em",{parentName:"a"},"destinationFile")," : 4D.File { , ",(0,r.kt)("em",{parentName:"a"},"options")," : integer }) : object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},"zipCreateArchive")," ( ",(0,r.kt)("em",{parentName:"a"},"zipStructure")," : object , ",(0,r.kt)("em",{parentName:"a"},"destinationFile")," : 4D.File ) : object"),"\xa0","\xa0","\xa0","\xa0","creates a compressed ZIP archive object and returns the status of the operation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#zipreadarchive"},(0,r.kt)("strong",{parentName:"a"},"zipReadArchive")," ( ",(0,r.kt)("em",{parentName:"a"},"zipFile")," : 4D.File { , ",(0,r.kt)("em",{parentName:"a"},"password")," : string }) : 4D.ZipArchive"),"\xa0","\xa0","\xa0","\xa0","retrieves the contents of ",(0,r.kt)("em",{parentName:"td"},"zipFile")," and returns it as a ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.ZipArchive")," object")))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#root"},(0,r.kt)("strong",{parentName:"a"},".root")," : 4D.ZipFolder"),"\xa0",",","\xa0",",","\xa0",",","\xa0",",a virtual folder providing access to the contents of the ZIP archive")))),(0,r.kt)("h2",{id:"zipcreatearchive"},"zipCreateArchive"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"zipCreateArchive")," ( ",(0,r.kt)("em",{parentName:"p"},"fileToZip")," : 4D.File , ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"zipCreateArchive")," ( ",(0,r.kt)("em",{parentName:"p"},"folderToZip")," : 4D.Folder , ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File { , ",(0,r.kt)("em",{parentName:"p"},"options")," : integer }) : object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"zipCreateArchive")," ( ",(0,r.kt)("em",{parentName:"p"},"zipStructure")," : object , ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileToZip"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.File"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"File or folder object to compress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"folderToZip"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.Folder"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"File or folder object to compress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zipStructure"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"File or folder object to compress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"destinationFile"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.File"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination file for the archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"folderToZip")," option: ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Without enclosing folder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Status object")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zipCreateArchive")," command creates a compressed ZIP archive object and returns the status of the operation."),(0,r.kt)("p",null,"You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"fileToZip"),": You simply pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File")," to compress.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"folderToZip"),": You pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Folder")," to compress. In this case, the ",(0,r.kt)("em",{parentName:"p"},"options")," parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"zipCreateArchive")," will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Without enclosing folder")," constant in the ",(0,r.kt)("em",{parentName:"p"},"options")," parameter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"zipStructure"),": You pass an object describing the ZIP archive object. The following properties are available to define the structure:"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compression"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": Deflate compression (default)"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": LZMA compression"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": XZ compression"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression none"),": No compression"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"level"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Compression level. Possible values: 1 to 10. A lower value will produce a larger file, while a higher value will produce a smaller file. Compression level has however an impact on performance. Default values if omitted: ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": 6"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": 4"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": 4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encryption"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The encryption to use if a password is set:",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES128"),": AES encryption using 128-bit key."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES192"),": AES encryption using 192-bit key."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES256"),": AES encryption using 256-bit key (default if password is set)."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption none"),": Data is not encrypted (default if no password is set)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A password to use if encryption is required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"a collection of ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.File")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.Folder")," objects or"),(0,r.kt)("li",null,"a collection of objects with the following properties:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Property"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"source"),(0,r.kt)("td",null,"4D.File or 4D.Folder"),(0,r.kt)("td",null,"File or folder")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"destination"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"(optional) - Specify a relative filepath to change the organization of the contents of the archive")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"(optional) - ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Ignore invisible files")," or 0 to compress all of the file"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.Function"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback formula that will receive the compression progress (0 - 100) in $1.")))),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," parameter, pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File"),' object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software.'),(0,r.kt)("p",null,"Once an archive is created, you can use the ",(0,r.kt)("a",{parentName:"p",href:"#zip-read-archive"},"zipReadArchive")," command to access it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Status object")),(0,r.kt)("p",null,"The returned status object contains the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statusText"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Error message (if any):",(0,r.kt)("li",null,"Cannot open ZIP archive"),(0,r.kt)("li",null,"Cannot create ZIP archive"),(0,r.kt)("li",null,"Password is required for encryption"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Status code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True if archive created successfully, else false")))),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"To compress a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var zfile, destination : 4D.File\n var status : object\n\n destination=file("/SOURCES/MyDocs/file.zip")\n zfile=file("/SOURCES/MyDocs/text.txt")\n\n status=zipCreateArchive(zfile,destination)\n')),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"To compress a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Folder")," without the folder itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var zfolder : 4D.Folder\n var destination : 4D.File\n var status : object\n\n destination=file("/SOURCES/MyDocs/Images.zip")\n zfolder=folder("/SOURCES/MyDocs/Images")\n\n status=zipCreateArchive(zfolder,destination,ZIP Without enclosing folder)\n')),(0,r.kt)("h4",{id:"example-3"},"Example 3"),(0,r.kt)("p",null,"To compress a ZIP archive structure with a password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var destination : 4D.File\n var zip,status : object\n\n destination=file("/SOURCES/MyDocs/Archive.zip")\n\n zip=newObject\n zip.files=folder("/SOURCES/MyDocs/Resources").folders()\n zip.password="password"\n\n status=zipCreateArchive(zip,destination)\n\n')),(0,r.kt)("h4",{id:"example-4"},"Example 4"),(0,r.kt)("p",null,"You want to pass a collection of folders and files to compress to the ",(0,r.kt)("em",{parentName:"p"},"zipStructure")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var destination : 4D.File\n var zip,err : object\n zip=newObject\n zip.files=newCollection\n zip.files.push(newObject("source",file("/SOURCES/Tests/text.txt")))\n zip.files.push(newObject("source",file("/SOURCES/Tests/text2.txt")))\n zip.files.push(newObject("source",file("/SOURCES/Images/image.png")))\n\n destination=file("/SOURCES/file.zip")\n err=zipCreateArchive(zip,destination)\n')),(0,r.kt)("h4",{id:"example-5"},"Example 5"),(0,r.kt)("p",null,"You want to use an alternative compression algorithm with a high compression level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var destination : 4D.File\nvar zip, err : object\n\nzip=newObject\nzip.files=newCollection\nzip.files.push(folder("/SOURCES/images"))\nzip.compression=ZIP Compression LZMA\nzip.level=7 //default is 4\n\ndestination=file("/SOURCES/images.zip")\nerr=zipCreateArchive(zip, destination)\n')),(0,r.kt)("h2",{id:"zipreadarchive"},"zipReadArchive"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"zipReadArchive")," ( ",(0,r.kt)("em",{parentName:"p"},"zipFile")," : 4D.File { , ",(0,r.kt)("em",{parentName:"p"},"password")," : string }) : 4D.ZipArchive"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zipFile"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.File"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Zip archive file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"ZIP archive password if any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.ZipArchive"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Archive object")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zipReadArchive")," command retrieves the contents of ",(0,r.kt)("em",{parentName:"p"},"zipFile")," and returns it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," object."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use functions such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/Document#copyto"},"file.copyTo()")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/Directory#copyto"},"folder.copyTo()"),".")),(0,r.kt)("p",null,"Pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File")," object referencing the compressed ZIP archive in the ",(0,r.kt)("em",{parentName:"p"},"zipFile")," parameter. The target archive file will be opened until the ",(0,r.kt)("inlineCode",{parentName:"p"},"zipReadArchive")," has finished executing and all contents/references have been extracted/released, then it will be closed automatically."),(0,r.kt)("p",null,"If the ",(0,r.kt)("em",{parentName:"p"},"zipFile")," is password protected, you need to use the optional ",(0,r.kt)("em",{parentName:"p"},"password")," parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Archive object")),(0,r.kt)("p",null,"The returned ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," object contains a single ",(0,r.kt)("a",{parentName:"p",href:"#root"},(0,r.kt)("inlineCode",{parentName:"a"},"root"))," property whose value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipFolder")," object. This folder describes the whole contents of the ZIP archive."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("p",null,"To retrieve and view the contents of a ZIP file object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var archive : 4D.ZipArchive\n var path : 4D.File\n\n path=file("/SOURCES/MyDocs/Archive.zip")\n archive=zipReadArchive(path)\n')),(0,r.kt)("p",null,"To retrieve the list of the files and folders in the archive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," folders=archive.root.folders()\n files=archive.root.files()\n")),(0,r.kt)("p",null,"To read the contents of a file without extracting it from the root folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'\n if(files[i].extension==".txt")\n    txt=files[i].getText()\n else\n    blob=files[i].getContent()\n end\n')),(0,r.kt)("p",null,"To extract from the root folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  //extract a file\n folderResult=files[i].copyTo(folder("/SOURCES/MyDocs"))\n\n  //extract all files\n folderResult=archive.root.copyTo(folder("/SOURCES/MyDocs"))\n')),(0,r.kt)("h2",{id:"root"},".root"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".root")," : 4D.ZipFolder"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".root")," property contains a virtual folder providing access to the contents of the ZIP archive."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," folder and its contents can be manipulated with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/ZipFileClass"},"ZipFile")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/ZipFolderClass"},"ZipFolder")," functions and properties."),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."))}c.isMDXComponent=!0}}]);