"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3320],{17179:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var r=s(67294),n=s(52263);const a=JSON.parse('{"ds":"DataStoreClass","newCollection":"CollectionClass","newSharedcollection":"CollectionClass","MAIL":"MailAttachmentClass","File":"FileClass","folder":"FolderClass","formula":"FunctionClass","newSignal":"SignalClass","session":"SessionClass","webEvent":"WebForm","webForm":"WebForm","IMAP":"IMAPTransporterClass","webServer":"WebServerClass","addToDate":"dateandtime","currentDate":"dateandtime","currentTime":"dateandtime","date":"dateandtime","dayNumber":"dateandtime","dayOf":"dateandtime","milliseconds":"dateandtime","monthOf":"dateandtime","time":"dateandtime","timeString":"dateandtime","timestamp":"dateandtime","yearOf":"dateandtime","bool":"boolean","false":"boolean","not":"boolean","true":"boolean","cs":"language","currentMethodName":"language","null":"language","this":"language","trace":"language","type":"language","undefined":"language","valueType":"language","abs":"objects","arctan":"math","cos":"math","dec":"math","exp":"math","int":"math","log":"math","mod":"math","round":"math","random":"math","setRealComparisonLevel":"math","sin":"math","squareRoot":"math","tan":"math","trunc":"math","abort":"interruptions","assert":"interruptions","asserted":"interruptions","getAssertEnabled":"interruptions","lastErrors":"interruptions","methodCalledOnError":"interruptions","onErrCall":"interruptions","setAssertEnabled":"interruptions","throw":"interruptions","zipCreateArchive":"ZipArchiveClass","zipReadArchive":"ZipArchiveClass","jsonParse":"json","jsonResolvePointers":"json","jsonStringify":"json","jsonValidate":"json","blobToPicture":"pictures","combinePictures":"pictures","convertPicture":"pictures","createThumbnail":"pictures","equalPictures":"pictures","getPictureFileName":"pictures","getPictureMetadata":"pictures","pictureProperties":"pictures","pictureSize":"pictures","abortProcessByID":"process","callWorker":"process","changeString":"string","clearSemaphore":"process","currentProcess":"process","currentProcessName":"process","delayProcess":"process","getProcessActivity":"process","highestProcessNumber":"process","killWorker":"process","processNumber":"process","processProperties":"process","processState":"process","semaphore":"process","testSemaphore":"process","instanceOf":"objects","newObject":"objects","newSharedObject":"objects","objectClass":"objects","objectCopy":"objects","objectEntries":"objects","objectIsDefined":"objects","objectIsEmpty":"objects","objectIsShared":"objects","objectKeys":"objects","objectRemove":"objects","objectValues":"objects","storage":"objects","char":"string","characterCode":"string","compareStrings":"string","convertFromString":"string","convertToString":"string","deleteString":"string","insertString":"string","length":"string","lowercase":"string","matchRegex":"string","num":"string","position":"string","replaceString":"string","splitString":"string","string":"string","substring":"string","uppercase":"string"}');function o(){const e=(0,n.Z)(),t=JSON.stringify(a),s=e.siteConfig.baseUrl;return r.createElement("script",{dangerouslySetInnerHTML:{__html:`\n              ( function() {\n              const commands = JSON.parse('${t}')\n              const url = new URL(window.location.href);\n              const classWanted = url.searchParams.get("class");\n              const memberWanted = url.searchParams.get("member");\n              const commandWanted = url.searchParams.get("command");\n              const commandFile = commands[commandWanted];\n              let finalUrl = ""\n              if(!memberWanted)\n              {\n                finalUrl = "${s}" + "language/" + commandFile + "#" + commandWanted.toLowerCase();\n              }\n              else\n              {\n                finalUrl = "${s}" + "language/" + classWanted + "Class" + "#" + memberWanted.toLowerCase();\n              }\n              window.location.href = finalUrl\n            })();\n                `}})}}}]);