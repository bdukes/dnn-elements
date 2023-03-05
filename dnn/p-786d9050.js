import{m as n}from"./p-febe2d5f.js";import"./p-4ab0c800.js";import"./p-0e94f5ee.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var r=Object.defineProperty;var t=Object.getOwnPropertyDescriptor;var e=Object.getOwnPropertyNames;var i=Object.prototype.hasOwnProperty;var u=(n,u,o,a)=>{if(u&&typeof u==="object"||typeof u==="function"){for(let s of e(u))if(!i.call(n,s)&&s!==o)r(n,s,{get:()=>u[s],enumerable:!(a=t(u,s))||a.enumerable})}return n};var o=(n,r,t)=>(u(n,r,"default"),t&&u(t,r,"default"));var a={};o(a,n);var s=2*60*1e3;var c=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(n){this._defaults=n;this._worker=null;this._client=null;this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),30*1e3);this._lastUsedTime=0;this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){if(this._worker){this._worker.dispose();this._worker=null}this._client=null}dispose(){clearInterval(this._idleCheckInterval);this._configChangeListener.dispose();this._stopWorker()}_checkIfIdle(){if(!this._worker){return}let n=Date.now()-this._lastUsedTime;if(n>s){this._stopWorker()}}_getClient(){this._lastUsedTime=Date.now();if(!this._client){this._worker=a.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}});this._client=this._worker.getProxy()}return this._client}getLanguageServiceWorker(...n){let r;return this._getClient().then((n=>{r=n})).then((r=>{if(this._worker){return this._worker.withSyncedResources(n)}})).then((n=>r))}};var f;(function(n){n.MIN_VALUE=-2147483648;n.MAX_VALUE=2147483647})(f||(f={}));var v;(function(n){n.MIN_VALUE=0;n.MAX_VALUE=2147483647})(v||(v={}));var h;(function(n){function r(n,r){if(n===Number.MAX_VALUE){n=v.MAX_VALUE}if(r===Number.MAX_VALUE){r=v.MAX_VALUE}return{line:n,character:r}}n.create=r;function t(n){var r=n;return mn.objectLiteral(r)&&mn.uinteger(r.line)&&mn.uinteger(r.character)}n.is=t})(h||(h={}));var d;(function(n){function r(n,r,t,e){if(mn.uinteger(n)&&mn.uinteger(r)&&mn.uinteger(t)&&mn.uinteger(e)){return{start:h.create(n,r),end:h.create(t,e)}}else if(h.is(n)&&h.is(r)){return{start:n,end:r}}else{throw new Error("Range#create called with invalid arguments["+n+", "+r+", "+t+", "+e+"]")}}n.create=r;function t(n){var r=n;return mn.objectLiteral(r)&&h.is(r.start)&&h.is(r.end)}n.is=t})(d||(d={}));var l;(function(n){function r(n,r){return{uri:n,range:r}}n.create=r;function t(n){var r=n;return mn.defined(r)&&d.is(r.range)&&(mn.string(r.uri)||mn.undefined(r.uri))}n.is=t})(l||(l={}));var g;(function(n){function r(n,r,t,e){return{targetUri:n,targetRange:r,targetSelectionRange:t,originSelectionRange:e}}n.create=r;function t(n){var r=n;return mn.defined(r)&&d.is(r.targetRange)&&mn.string(r.targetUri)&&(d.is(r.targetSelectionRange)||mn.undefined(r.targetSelectionRange))&&(d.is(r.originSelectionRange)||mn.undefined(r.originSelectionRange))}n.is=t})(g||(g={}));var w;(function(n){function r(n,r,t,e){return{red:n,green:r,blue:t,alpha:e}}n.create=r;function t(n){var r=n;return mn.numberRange(r.red,0,1)&&mn.numberRange(r.green,0,1)&&mn.numberRange(r.blue,0,1)&&mn.numberRange(r.alpha,0,1)}n.is=t})(w||(w={}));var m;(function(n){function r(n,r){return{range:n,color:r}}n.create=r;function t(n){var r=n;return d.is(r.range)&&w.is(r.color)}n.is=t})(m||(m={}));var b;(function(n){function r(n,r,t){return{label:n,textEdit:r,additionalTextEdits:t}}n.create=r;function t(n){var r=n;return mn.string(r.label)&&(mn.undefined(r.textEdit)||_.is(r))&&(mn.undefined(r.additionalTextEdits)||mn.typedArray(r.additionalTextEdits,_.is))}n.is=t})(b||(b={}));var p;(function(n){n["Comment"]="comment";n["Imports"]="imports";n["Region"]="region"})(p||(p={}));var j;(function(n){function r(n,r,t,e,i){var u={startLine:n,endLine:r};if(mn.defined(t)){u.startCharacter=t}if(mn.defined(e)){u.endCharacter=e}if(mn.defined(i)){u.kind=i}return u}n.create=r;function t(n){var r=n;return mn.uinteger(r.startLine)&&mn.uinteger(r.startLine)&&(mn.undefined(r.startCharacter)||mn.uinteger(r.startCharacter))&&(mn.undefined(r.endCharacter)||mn.uinteger(r.endCharacter))&&(mn.undefined(r.kind)||mn.string(r.kind))}n.is=t})(j||(j={}));var x;(function(n){function r(n,r){return{location:n,message:r}}n.create=r;function t(n){var r=n;return mn.defined(r)&&l.is(r.location)&&mn.string(r.message)}n.is=t})(x||(x={}));var k;(function(n){n.Error=1;n.Warning=2;n.Information=3;n.Hint=4})(k||(k={}));var y;(function(n){n.Unnecessary=1;n.Deprecated=2})(y||(y={}));var I;(function(n){function r(n){var r=n;return r!==void 0&&r!==null&&mn.string(r.href)}n.is=r})(I||(I={}));var O;(function(n){function r(n,r,t,e,i,u){var o={range:n,message:r};if(mn.defined(t)){o.severity=t}if(mn.defined(e)){o.code=e}if(mn.defined(i)){o.source=i}if(mn.defined(u)){o.relatedInformation=u}return o}n.create=r;function t(n){var r;var t=n;return mn.defined(t)&&d.is(t.range)&&mn.string(t.message)&&(mn.number(t.severity)||mn.undefined(t.severity))&&(mn.integer(t.code)||mn.string(t.code)||mn.undefined(t.code))&&(mn.undefined(t.codeDescription)||mn.string((r=t.codeDescription)===null||r===void 0?void 0:r.href))&&(mn.string(t.source)||mn.undefined(t.source))&&(mn.undefined(t.relatedInformation)||mn.typedArray(t.relatedInformation,x.is))}n.is=t})(O||(O={}));var E;(function(n){function r(n,r){var t=[];for(var e=2;e<arguments.length;e++){t[e-2]=arguments[e]}var i={title:n,command:r};if(mn.defined(t)&&t.length>0){i.arguments=t}return i}n.create=r;function t(n){var r=n;return mn.defined(r)&&mn.string(r.title)&&mn.string(r.command)}n.is=t})(E||(E={}));var _;(function(n){function r(n,r){return{range:n,newText:r}}n.replace=r;function t(n,r){return{range:{start:n,end:n},newText:r}}n.insert=t;function e(n){return{range:n,newText:""}}n.del=e;function i(n){var r=n;return mn.objectLiteral(r)&&mn.string(r.newText)&&d.is(r.range)}n.is=i})(_||(_={}));var T;(function(n){function r(n,r,t){var e={label:n};if(r!==void 0){e.needsConfirmation=r}if(t!==void 0){e.description=t}return e}n.create=r;function t(n){var r=n;return r!==void 0&&mn.objectLiteral(r)&&mn.string(r.label)&&(mn.boolean(r.needsConfirmation)||r.needsConfirmation===void 0)&&(mn.string(r.description)||r.description===void 0)}n.is=t})(T||(T={}));var S;(function(n){function r(n){var r=n;return typeof r==="string"}n.is=r})(S||(S={}));var C;(function(n){function r(n,r,t){return{range:n,newText:r,annotationId:t}}n.replace=r;function t(n,r,t){return{range:{start:n,end:n},newText:r,annotationId:t}}n.insert=t;function e(n,r){return{range:n,newText:"",annotationId:r}}n.del=e;function i(n){var r=n;return _.is(r)&&(T.is(r.annotationId)||S.is(r.annotationId))}n.is=i})(C||(C={}));var D;(function(n){function r(n,r){return{textDocument:n,edits:r}}n.create=r;function t(n){var r=n;return mn.defined(r)&&U.is(r.textDocument)&&Array.isArray(r.edits)}n.is=t})(D||(D={}));var R;(function(n){function r(n,r,t){var e={kind:"create",uri:n};if(r!==void 0&&(r.overwrite!==void 0||r.ignoreIfExists!==void 0)){e.options=r}if(t!==void 0){e.annotationId=t}return e}n.create=r;function t(n){var r=n;return r&&r.kind==="create"&&mn.string(r.uri)&&(r.options===void 0||(r.options.overwrite===void 0||mn.boolean(r.options.overwrite))&&(r.options.ignoreIfExists===void 0||mn.boolean(r.options.ignoreIfExists)))&&(r.annotationId===void 0||S.is(r.annotationId))}n.is=t})(R||(R={}));var N;(function(n){function r(n,r,t,e){var i={kind:"rename",oldUri:n,newUri:r};if(t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)){i.options=t}if(e!==void 0){i.annotationId=e}return i}n.create=r;function t(n){var r=n;return r&&r.kind==="rename"&&mn.string(r.oldUri)&&mn.string(r.newUri)&&(r.options===void 0||(r.options.overwrite===void 0||mn.boolean(r.options.overwrite))&&(r.options.ignoreIfExists===void 0||mn.boolean(r.options.ignoreIfExists)))&&(r.annotationId===void 0||S.is(r.annotationId))}n.is=t})(N||(N={}));var W;(function(n){function r(n,r,t){var e={kind:"delete",uri:n};if(r!==void 0&&(r.recursive!==void 0||r.ignoreIfNotExists!==void 0)){e.options=r}if(t!==void 0){e.annotationId=t}return e}n.create=r;function t(n){var r=n;return r&&r.kind==="delete"&&mn.string(r.uri)&&(r.options===void 0||(r.options.recursive===void 0||mn.boolean(r.options.recursive))&&(r.options.ignoreIfNotExists===void 0||mn.boolean(r.options.ignoreIfNotExists)))&&(r.annotationId===void 0||S.is(r.annotationId))}n.is=t})(W||(W={}));var L;(function(n){function r(n){var r=n;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every((function(n){if(mn.string(n.kind)){return R.is(n)||N.is(n)||W.is(n)}else{return D.is(n)}})))}n.is=r})(L||(L={}));var A=function(){function n(n,r){this.edits=n;this.changeAnnotations=r}n.prototype.insert=function(n,r,t){var e;var i;if(t===void 0){e=_.insert(n,r)}else if(S.is(t)){i=t;e=C.insert(n,r,t)}else{this.assertChangeAnnotations(this.changeAnnotations);i=this.changeAnnotations.manage(t);e=C.insert(n,r,i)}this.edits.push(e);if(i!==void 0){return i}};n.prototype.replace=function(n,r,t){var e;var i;if(t===void 0){e=_.replace(n,r)}else if(S.is(t)){i=t;e=C.replace(n,r,t)}else{this.assertChangeAnnotations(this.changeAnnotations);i=this.changeAnnotations.manage(t);e=C.replace(n,r,i)}this.edits.push(e);if(i!==void 0){return i}};n.prototype.delete=function(n,r){var t;var e;if(r===void 0){t=_.del(n)}else if(S.is(r)){e=r;t=C.del(n,r)}else{this.assertChangeAnnotations(this.changeAnnotations);e=this.changeAnnotations.manage(r);t=C.del(n,e)}this.edits.push(t);if(e!==void 0){return e}};n.prototype.add=function(n){this.edits.push(n)};n.prototype.all=function(){return this.edits};n.prototype.clear=function(){this.edits.splice(0,this.edits.length)};n.prototype.assertChangeAnnotations=function(n){if(n===void 0){throw new Error("Text edit change is not configured to manage change annotations.")}};return n}();var M=function(){function n(n){this._annotations=n===void 0?Object.create(null):n;this._counter=0;this._size=0}n.prototype.all=function(){return this._annotations};Object.defineProperty(n.prototype,"size",{get:function(){return this._size},enumerable:false,configurable:true});n.prototype.manage=function(n,r){var t;if(S.is(n)){t=n}else{t=this.nextId();r=n}if(this._annotations[t]!==void 0){throw new Error("Id "+t+" is already in use.")}if(r===void 0){throw new Error("No annotation provided for id "+t)}this._annotations[t]=r;this._size++;return t};n.prototype.nextId=function(){this._counter++;return this._counter.toString()};return n}();(function(){function n(n){var r=this;this._textEditChanges=Object.create(null);if(n!==void 0){this._workspaceEdit=n;if(n.documentChanges){this._changeAnnotations=new M(n.changeAnnotations);n.changeAnnotations=this._changeAnnotations.all();n.documentChanges.forEach((function(n){if(D.is(n)){var t=new A(n.edits,r._changeAnnotations);r._textEditChanges[n.textDocument.uri]=t}}))}else if(n.changes){Object.keys(n.changes).forEach((function(t){var e=new A(n.changes[t]);r._textEditChanges[t]=e}))}}else{this._workspaceEdit={}}}Object.defineProperty(n.prototype,"edit",{get:function(){this.initDocumentChanges();if(this._changeAnnotations!==void 0){if(this._changeAnnotations.size===0){this._workspaceEdit.changeAnnotations=void 0}else{this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()}}return this._workspaceEdit},enumerable:false,configurable:true});n.prototype.getTextEditChange=function(n){if(U.is(n)){this.initDocumentChanges();if(this._workspaceEdit.documentChanges===void 0){throw new Error("Workspace edit is not configured for document changes.")}var r={uri:n.uri,version:n.version};var t=this._textEditChanges[r.uri];if(!t){var e=[];var i={textDocument:r,edits:e};this._workspaceEdit.documentChanges.push(i);t=new A(e,this._changeAnnotations);this._textEditChanges[r.uri]=t}return t}else{this.initChanges();if(this._workspaceEdit.changes===void 0){throw new Error("Workspace edit is not configured for normal text edit changes.")}var t=this._textEditChanges[n];if(!t){var e=[];this._workspaceEdit.changes[n]=e;t=new A(e);this._textEditChanges[n]=t}return t}};n.prototype.initDocumentChanges=function(){if(this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0){this._changeAnnotations=new M;this._workspaceEdit.documentChanges=[];this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()}};n.prototype.initChanges=function(){if(this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0){this._workspaceEdit.changes=Object.create(null)}};n.prototype.createFile=function(n,r,t){this.initDocumentChanges();if(this._workspaceEdit.documentChanges===void 0){throw new Error("Workspace edit is not configured for document changes.")}var e;if(T.is(r)||S.is(r)){e=r}else{t=r}var i;var u;if(e===void 0){i=R.create(n,t)}else{u=S.is(e)?e:this._changeAnnotations.manage(e);i=R.create(n,t,u)}this._workspaceEdit.documentChanges.push(i);if(u!==void 0){return u}};n.prototype.renameFile=function(n,r,t,e){this.initDocumentChanges();if(this._workspaceEdit.documentChanges===void 0){throw new Error("Workspace edit is not configured for document changes.")}var i;if(T.is(t)||S.is(t)){i=t}else{e=t}var u;var o;if(i===void 0){u=N.create(n,r,e)}else{o=S.is(i)?i:this._changeAnnotations.manage(i);u=N.create(n,r,e,o)}this._workspaceEdit.documentChanges.push(u);if(o!==void 0){return o}};n.prototype.deleteFile=function(n,r,t){this.initDocumentChanges();if(this._workspaceEdit.documentChanges===void 0){throw new Error("Workspace edit is not configured for document changes.")}var e;if(T.is(r)||S.is(r)){e=r}else{t=r}var i;var u;if(e===void 0){i=W.create(n,t)}else{u=S.is(e)?e:this._changeAnnotations.manage(e);i=W.create(n,t,u)}this._workspaceEdit.documentChanges.push(i);if(u!==void 0){return u}};return n})();var z;(function(n){function r(n){return{uri:n}}n.create=r;function t(n){var r=n;return mn.defined(r)&&mn.string(r.uri)}n.is=t})(z||(z={}));var F;(function(n){function r(n,r){return{uri:n,version:r}}n.create=r;function t(n){var r=n;return mn.defined(r)&&mn.string(r.uri)&&mn.integer(r.version)}n.is=t})(F||(F={}));var U;(function(n){function r(n,r){return{uri:n,version:r}}n.create=r;function t(n){var r=n;return mn.defined(r)&&mn.string(r.uri)&&(r.version===null||mn.integer(r.version))}n.is=t})(U||(U={}));var H;(function(n){function r(n,r,t,e){return{uri:n,languageId:r,version:t,text:e}}n.create=r;function t(n){var r=n;return mn.defined(r)&&mn.string(r.uri)&&mn.string(r.languageId)&&mn.integer(r.version)&&mn.string(r.text)}n.is=t})(H||(H={}));var $;(function(n){n.PlainText="plaintext";n.Markdown="markdown"})($||($={}));(function(n){function r(r){var t=r;return t===n.PlainText||t===n.Markdown}n.is=r})($||($={}));var q;(function(n){function r(n){var r=n;return mn.objectLiteral(n)&&$.is(r.kind)&&mn.string(r.value)}n.is=r})(q||(q={}));var P;(function(n){n.Text=1;n.Method=2;n.Function=3;n.Constructor=4;n.Field=5;n.Variable=6;n.Class=7;n.Interface=8;n.Module=9;n.Property=10;n.Unit=11;n.Value=12;n.Enum=13;n.Keyword=14;n.Snippet=15;n.Color=16;n.File=17;n.Reference=18;n.Folder=19;n.EnumMember=20;n.Constant=21;n.Struct=22;n.Event=23;n.Operator=24;n.TypeParameter=25})(P||(P={}));var V;(function(n){n.PlainText=1;n.Snippet=2})(V||(V={}));var B;(function(n){n.Deprecated=1})(B||(B={}));var G;(function(n){function r(n,r,t){return{newText:n,insert:r,replace:t}}n.create=r;function t(n){var r=n;return r&&mn.string(r.newText)&&d.is(r.insert)&&d.is(r.replace)}n.is=t})(G||(G={}));var J;(function(n){n.asIs=1;n.adjustIndentation=2})(J||(J={}));var K;(function(n){function r(n){return{label:n}}n.create=r})(K||(K={}));var Q;(function(n){function r(n,r){return{items:n?n:[],isIncomplete:!!r}}n.create=r})(Q||(Q={}));var X;(function(n){function r(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}n.fromPlainText=r;function t(n){var r=n;return mn.string(r)||mn.objectLiteral(r)&&mn.string(r.language)&&mn.string(r.value)}n.is=t})(X||(X={}));var Y;(function(n){function r(n){var r=n;return!!r&&mn.objectLiteral(r)&&(q.is(r.contents)||X.is(r.contents)||mn.typedArray(r.contents,X.is))&&(n.range===void 0||d.is(n.range))}n.is=r})(Y||(Y={}));var Z;(function(n){function r(n,r){return r?{label:n,documentation:r}:{label:n}}n.create=r})(Z||(Z={}));var nn;(function(n){function r(n,r){var t=[];for(var e=2;e<arguments.length;e++){t[e-2]=arguments[e]}var i={label:n};if(mn.defined(r)){i.documentation=r}if(mn.defined(t)){i.parameters=t}else{i.parameters=[]}return i}n.create=r})(nn||(nn={}));var rn;(function(n){n.Text=1;n.Read=2;n.Write=3})(rn||(rn={}));var tn;(function(n){function r(n,r){var t={range:n};if(mn.number(r)){t.kind=r}return t}n.create=r})(tn||(tn={}));var en;(function(n){n.File=1;n.Module=2;n.Namespace=3;n.Package=4;n.Class=5;n.Method=6;n.Property=7;n.Field=8;n.Constructor=9;n.Enum=10;n.Interface=11;n.Function=12;n.Variable=13;n.Constant=14;n.String=15;n.Number=16;n.Boolean=17;n.Array=18;n.Object=19;n.Key=20;n.Null=21;n.EnumMember=22;n.Struct=23;n.Event=24;n.Operator=25;n.TypeParameter=26})(en||(en={}));var un;(function(n){n.Deprecated=1})(un||(un={}));var on;(function(n){function r(n,r,t,e,i){var u={name:n,kind:r,location:{uri:e,range:t}};if(i){u.containerName=i}return u}n.create=r})(on||(on={}));var an;(function(n){function r(n,r,t,e,i,u){var o={name:n,detail:r,kind:t,range:e,selectionRange:i};if(u!==void 0){o.children=u}return o}n.create=r;function t(n){var r=n;return r&&mn.string(r.name)&&mn.number(r.kind)&&d.is(r.range)&&d.is(r.selectionRange)&&(r.detail===void 0||mn.string(r.detail))&&(r.deprecated===void 0||mn.boolean(r.deprecated))&&(r.children===void 0||Array.isArray(r.children))&&(r.tags===void 0||Array.isArray(r.tags))}n.is=t})(an||(an={}));var sn;(function(n){n.Empty="";n.QuickFix="quickfix";n.Refactor="refactor";n.RefactorExtract="refactor.extract";n.RefactorInline="refactor.inline";n.RefactorRewrite="refactor.rewrite";n.Source="source";n.SourceOrganizeImports="source.organizeImports";n.SourceFixAll="source.fixAll"})(sn||(sn={}));var cn;(function(n){function r(n,r){var t={diagnostics:n};if(r!==void 0&&r!==null){t.only=r}return t}n.create=r;function t(n){var r=n;return mn.defined(r)&&mn.typedArray(r.diagnostics,O.is)&&(r.only===void 0||mn.typedArray(r.only,mn.string))}n.is=t})(cn||(cn={}));var fn;(function(n){function r(n,r,t){var e={title:n};var i=true;if(typeof r==="string"){i=false;e.kind=r}else if(E.is(r)){e.command=r}else{e.edit=r}if(i&&t!==void 0){e.kind=t}return e}n.create=r;function t(n){var r=n;return r&&mn.string(r.title)&&(r.diagnostics===void 0||mn.typedArray(r.diagnostics,O.is))&&(r.kind===void 0||mn.string(r.kind))&&(r.edit!==void 0||r.command!==void 0)&&(r.command===void 0||E.is(r.command))&&(r.isPreferred===void 0||mn.boolean(r.isPreferred))&&(r.edit===void 0||L.is(r.edit))}n.is=t})(fn||(fn={}));var vn;(function(n){function r(n,r){var t={range:n};if(mn.defined(r)){t.data=r}return t}n.create=r;function t(n){var r=n;return mn.defined(r)&&d.is(r.range)&&(mn.undefined(r.command)||E.is(r.command))}n.is=t})(vn||(vn={}));var hn;(function(n){function r(n,r){return{tabSize:n,insertSpaces:r}}n.create=r;function t(n){var r=n;return mn.defined(r)&&mn.uinteger(r.tabSize)&&mn.boolean(r.insertSpaces)}n.is=t})(hn||(hn={}));var dn;(function(n){function r(n,r,t){return{range:n,target:r,data:t}}n.create=r;function t(n){var r=n;return mn.defined(r)&&d.is(r.range)&&(mn.undefined(r.target)||mn.string(r.target))}n.is=t})(dn||(dn={}));var ln;(function(n){function r(n,r){return{range:n,parent:r}}n.create=r;function t(r){var t=r;return t!==void 0&&d.is(t.range)&&(t.parent===void 0||n.is(t.parent))}n.is=t})(ln||(ln={}));var gn;(function(n){function r(n,r,t,e){return new wn(n,r,t,e)}n.create=r;function t(n){var r=n;return mn.defined(r)&&mn.string(r.uri)&&(mn.undefined(r.languageId)||mn.string(r.languageId))&&mn.uinteger(r.lineCount)&&mn.func(r.getText)&&mn.func(r.positionAt)&&mn.func(r.offsetAt)?true:false}n.is=t;function e(n,r){var t=n.getText();var e=i(r,(function(n,r){var t=n.range.start.line-r.range.start.line;if(t===0){return n.range.start.character-r.range.start.character}return t}));var u=t.length;for(var o=e.length-1;o>=0;o--){var a=e[o];var s=n.offsetAt(a.range.start);var c=n.offsetAt(a.range.end);if(c<=u){t=t.substring(0,s)+a.newText+t.substring(c,t.length)}else{throw new Error("Overlapping edit")}u=s}return t}n.applyEdits=e;function i(n,r){if(n.length<=1){return n}var t=n.length/2|0;var e=n.slice(0,t);var u=n.slice(t);i(e,r);i(u,r);var o=0;var a=0;var s=0;while(o<e.length&&a<u.length){var c=r(e[o],u[a]);if(c<=0){n[s++]=e[o++]}else{n[s++]=u[a++]}}while(o<e.length){n[s++]=e[o++]}while(a<u.length){n[s++]=u[a++]}return n}})(gn||(gn={}));var wn=function(){function n(n,r,t,e){this._uri=n;this._languageId=r;this._version=t;this._content=e;this._lineOffsets=void 0}Object.defineProperty(n.prototype,"uri",{get:function(){return this._uri},enumerable:false,configurable:true});Object.defineProperty(n.prototype,"languageId",{get:function(){return this._languageId},enumerable:false,configurable:true});Object.defineProperty(n.prototype,"version",{get:function(){return this._version},enumerable:false,configurable:true});n.prototype.getText=function(n){if(n){var r=this.offsetAt(n.start);var t=this.offsetAt(n.end);return this._content.substring(r,t)}return this._content};n.prototype.update=function(n,r){this._content=n.text;this._version=r;this._lineOffsets=void 0};n.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){var n=[];var r=this._content;var t=true;for(var e=0;e<r.length;e++){if(t){n.push(e);t=false}var i=r.charAt(e);t=i==="\r"||i==="\n";if(i==="\r"&&e+1<r.length&&r.charAt(e+1)==="\n"){e++}}if(t&&r.length>0){n.push(r.length)}this._lineOffsets=n}return this._lineOffsets};n.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var r=this.getLineOffsets();var t=0,e=r.length;if(e===0){return h.create(0,n)}while(t<e){var i=Math.floor((t+e)/2);if(r[i]>n){e=i}else{t=i+1}}var u=t-1;return h.create(u,n-r[u])};n.prototype.offsetAt=function(n){var r=this.getLineOffsets();if(n.line>=r.length){return this._content.length}else if(n.line<0){return 0}var t=r[n.line];var e=n.line+1<r.length?r[n.line+1]:this._content.length;return Math.max(Math.min(t+n.character,e),t)};Object.defineProperty(n.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:false,configurable:true});return n}();var mn;(function(n){var r=Object.prototype.toString;function t(n){return typeof n!=="undefined"}n.defined=t;function e(n){return typeof n==="undefined"}n.undefined=e;function i(n){return n===true||n===false}n.boolean=i;function u(n){return r.call(n)==="[object String]"}n.string=u;function o(n){return r.call(n)==="[object Number]"}n.number=o;function a(n,t,e){return r.call(n)==="[object Number]"&&t<=n&&n<=e}n.numberRange=a;function s(n){return r.call(n)==="[object Number]"&&-2147483648<=n&&n<=2147483647}n.integer=s;function c(n){return r.call(n)==="[object Number]"&&0<=n&&n<=2147483647}n.uinteger=c;function f(n){return r.call(n)==="[object Function]"}n.func=f;function v(n){return n!==null&&typeof n==="object"}n.objectLiteral=v;function h(n,r){return Array.isArray(n)&&n.every(r)}n.typedArray=h})(mn||(mn={}));var bn=class{constructor(n,r,t){this._languageId=n;this._worker=r;const e=n=>{let r=n.getLanguageId();if(r!==this._languageId){return}let t;this._listener[n.uri.toString()]=n.onDidChangeContent((()=>{window.clearTimeout(t);t=window.setTimeout((()=>this._doValidate(n.uri,r)),500)}));this._doValidate(n.uri,r)};const i=n=>{a.editor.setModelMarkers(n,this._languageId,[]);let r=n.uri.toString();let t=this._listener[r];if(t){t.dispose();delete this._listener[r]}};this._disposables.push(a.editor.onDidCreateModel(e));this._disposables.push(a.editor.onWillDisposeModel(i));this._disposables.push(a.editor.onDidChangeModelLanguage((n=>{i(n.model);e(n.model)})));this._disposables.push(t((n=>{a.editor.getModels().forEach((n=>{if(n.getLanguageId()===this._languageId){i(n);e(n)}}))})));this._disposables.push({dispose:()=>{a.editor.getModels().forEach(i);for(let n in this._listener){this._listener[n].dispose()}}});a.editor.getModels().forEach(e)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((n=>n&&n.dispose()));this._disposables.length=0}_doValidate(n,r){this._worker(n).then((r=>r.doValidation(n.toString()))).then((t=>{const e=t.map((r=>jn(n,r)));let i=a.editor.getModel(n);if(i&&i.getLanguageId()===r){a.editor.setModelMarkers(i,r,e)}})).then(void 0,(n=>{console.error(n)}))}};function pn(n){switch(n){case k.Error:return a.MarkerSeverity.Error;case k.Warning:return a.MarkerSeverity.Warning;case k.Information:return a.MarkerSeverity.Info;case k.Hint:return a.MarkerSeverity.Hint;default:return a.MarkerSeverity.Info}}function jn(n,r){let t=typeof r.code==="number"?String(r.code):r.code;return{severity:pn(r.severity),startLineNumber:r.range.start.line+1,startColumn:r.range.start.character+1,endLineNumber:r.range.end.line+1,endColumn:r.range.end.character+1,message:r.message,code:t,source:r.source}}var xn=class{constructor(n,r){this._worker=n;this._triggerCharacters=r}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(n,r,t,e){const i=n.uri;return this._worker(i).then((n=>n.doComplete(i.toString(),kn(r)))).then((t=>{if(!t){return}const e=n.getWordUntilPosition(r);const i=new a.Range(r.lineNumber,e.startColumn,r.lineNumber,e.endColumn);const u=t.items.map((n=>{const r={label:n.label,insertText:n.insertText||n.label,sortText:n.sortText,filterText:n.filterText,documentation:n.documentation,detail:n.detail,command:Tn(n.command),range:i,kind:En(n.kind)};if(n.textEdit){if(On(n.textEdit)){r.range={insert:In(n.textEdit.insert),replace:In(n.textEdit.replace)}}else{r.range=In(n.textEdit.range)}r.insertText=n.textEdit.newText}if(n.additionalTextEdits){r.additionalTextEdits=n.additionalTextEdits.map(_n)}if(n.insertTextFormat===V.Snippet){r.insertTextRules=a.languages.CompletionItemInsertTextRule.InsertAsSnippet}return r}));return{isIncomplete:t.isIncomplete,suggestions:u}}))}};function kn(n){if(!n){return void 0}return{character:n.column-1,line:n.lineNumber-1}}function yn(n){if(!n){return void 0}return{start:{line:n.startLineNumber-1,character:n.startColumn-1},end:{line:n.endLineNumber-1,character:n.endColumn-1}}}function In(n){if(!n){return void 0}return new a.Range(n.start.line+1,n.start.character+1,n.end.line+1,n.end.character+1)}function On(n){return typeof n.insert!=="undefined"&&typeof n.replace!=="undefined"}function En(n){const r=a.languages.CompletionItemKind;switch(n){case P.Text:return r.Text;case P.Method:return r.Method;case P.Function:return r.Function;case P.Constructor:return r.Constructor;case P.Field:return r.Field;case P.Variable:return r.Variable;case P.Class:return r.Class;case P.Interface:return r.Interface;case P.Module:return r.Module;case P.Property:return r.Property;case P.Unit:return r.Unit;case P.Value:return r.Value;case P.Enum:return r.Enum;case P.Keyword:return r.Keyword;case P.Snippet:return r.Snippet;case P.Color:return r.Color;case P.File:return r.File;case P.Reference:return r.Reference}return r.Property}function _n(n){if(!n){return void 0}return{range:In(n.range),text:n.newText}}function Tn(n){return n&&n.command==="editor.action.triggerSuggest"?{id:n.command,title:n.title,arguments:n.arguments}:void 0}var Sn=class{constructor(n){this._worker=n}provideHover(n,r,t){let e=n.uri;return this._worker(e).then((n=>n.doHover(e.toString(),kn(r)))).then((n=>{if(!n){return}return{range:In(n.range),contents:Rn(n.contents)}}))}};function Cn(n){return n&&typeof n==="object"&&typeof n.kind==="string"}function Dn(n){if(typeof n==="string"){return{value:n}}if(Cn(n)){if(n.kind==="plaintext"){return{value:n.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}}return{value:n.value}}return{value:"```"+n.language+"\n"+n.value+"\n```\n"}}function Rn(n){if(!n){return void 0}if(Array.isArray(n)){return n.map(Dn)}return[Dn(n)]}var Nn=class{constructor(n){this._worker=n}provideDocumentHighlights(n,r,t){const e=n.uri;return this._worker(e).then((n=>n.findDocumentHighlights(e.toString(),kn(r)))).then((n=>{if(!n){return}return n.map((n=>({range:In(n.range),kind:Wn(n.kind)})))}))}};function Wn(n){switch(n){case rn.Read:return a.languages.DocumentHighlightKind.Read;case rn.Write:return a.languages.DocumentHighlightKind.Write;case rn.Text:return a.languages.DocumentHighlightKind.Text}return a.languages.DocumentHighlightKind.Text}var Ln=class{constructor(n){this._worker=n}provideDefinition(n,r,t){const e=n.uri;return this._worker(e).then((n=>n.findDefinition(e.toString(),kn(r)))).then((n=>{if(!n){return}return[An(n)]}))}};function An(n){return{uri:a.Uri.parse(n.uri),range:In(n.range)}}var Mn=class{constructor(n){this._worker=n}provideReferences(n,r,t,e){const i=n.uri;return this._worker(i).then((n=>n.findReferences(i.toString(),kn(r)))).then((n=>{if(!n){return}return n.map(An)}))}};var zn=class{constructor(n){this._worker=n}provideRenameEdits(n,r,t,e){const i=n.uri;return this._worker(i).then((n=>n.doRename(i.toString(),kn(r),t))).then((n=>Fn(n)))}};function Fn(n){if(!n||!n.changes){return void 0}let r=[];for(let t in n.changes){const e=a.Uri.parse(t);for(let i of n.changes[t]){r.push({resource:e,versionId:void 0,textEdit:{range:In(i.range),text:i.newText}})}}return{edits:r}}var Un=class{constructor(n){this._worker=n}provideDocumentSymbols(n,r){const t=n.uri;return this._worker(t).then((n=>n.findDocumentSymbols(t.toString()))).then((n=>{if(!n){return}return n.map((n=>({name:n.name,detail:"",containerName:n.containerName,kind:Hn(n.kind),range:In(n.location.range),selectionRange:In(n.location.range),tags:[]})))}))}};function Hn(n){let r=a.languages.SymbolKind;switch(n){case en.File:return r.Array;case en.Module:return r.Module;case en.Namespace:return r.Namespace;case en.Package:return r.Package;case en.Class:return r.Class;case en.Method:return r.Method;case en.Property:return r.Property;case en.Field:return r.Field;case en.Constructor:return r.Constructor;case en.Enum:return r.Enum;case en.Interface:return r.Interface;case en.Function:return r.Function;case en.Variable:return r.Variable;case en.Constant:return r.Constant;case en.String:return r.String;case en.Number:return r.Number;case en.Boolean:return r.Boolean;case en.Array:return r.Array}return r.Function}var $n=class{constructor(n){this._worker=n}provideLinks(n,r){const t=n.uri;return this._worker(t).then((n=>n.findDocumentLinks(t.toString()))).then((n=>{if(!n){return}return{links:n.map((n=>({range:In(n.range),url:n.target})))}}))}};var qn=class{constructor(n){this._worker=n}provideDocumentFormattingEdits(n,r,t){const e=n.uri;return this._worker(e).then((n=>n.format(e.toString(),null,Vn(r)).then((n=>{if(!n||n.length===0){return}return n.map(_n)}))))}};var Pn=class{constructor(n){this._worker=n}provideDocumentRangeFormattingEdits(n,r,t,e){const i=n.uri;return this._worker(i).then((n=>n.format(i.toString(),yn(r),Vn(t)).then((n=>{if(!n||n.length===0){return}return n.map(_n)}))))}};function Vn(n){return{tabSize:n.tabSize,insertSpaces:n.insertSpaces}}var Bn=class{constructor(n){this._worker=n}provideDocumentColors(n,r){const t=n.uri;return this._worker(t).then((n=>n.findDocumentColors(t.toString()))).then((n=>{if(!n){return}return n.map((n=>({color:n.color,range:In(n.range)})))}))}provideColorPresentations(n,r,t){const e=n.uri;return this._worker(e).then((n=>n.getColorPresentations(e.toString(),r.color,yn(r.range)))).then((n=>{if(!n){return}return n.map((n=>{let r={label:n.label};if(n.textEdit){r.textEdit=_n(n.textEdit)}if(n.additionalTextEdits){r.additionalTextEdits=n.additionalTextEdits.map(_n)}return r}))}))}};var Gn=class{constructor(n){this._worker=n}provideFoldingRanges(n,r,t){const e=n.uri;return this._worker(e).then((n=>n.getFoldingRanges(e.toString(),r))).then((n=>{if(!n){return}return n.map((n=>{const r={start:n.startLine+1,end:n.endLine+1};if(typeof n.kind!=="undefined"){r.kind=Jn(n.kind)}return r}))}))}};function Jn(n){switch(n){case p.Comment:return a.languages.FoldingRangeKind.Comment;case p.Imports:return a.languages.FoldingRangeKind.Imports;case p.Region:return a.languages.FoldingRangeKind.Region}return void 0}var Kn=class{constructor(n){this._worker=n}provideSelectionRanges(n,r,t){const e=n.uri;return this._worker(e).then((n=>n.getSelectionRanges(e.toString(),r.map(kn)))).then((n=>{if(!n){return}return n.map((n=>{const r=[];while(n){r.push({range:In(n.range)});n=n.parent}return r}))}))}};function Qn(n){const r=[];const t=[];const e=new c(n);r.push(e);const i=(...n)=>e.getLanguageServiceWorker(...n);function u(){const{languageId:r,modeConfiguration:e}=n;Yn(t);if(e.completionItems){t.push(a.languages.registerCompletionItemProvider(r,new xn(i,["/","-",":"])))}if(e.hovers){t.push(a.languages.registerHoverProvider(r,new Sn(i)))}if(e.documentHighlights){t.push(a.languages.registerDocumentHighlightProvider(r,new Nn(i)))}if(e.definitions){t.push(a.languages.registerDefinitionProvider(r,new Ln(i)))}if(e.references){t.push(a.languages.registerReferenceProvider(r,new Mn(i)))}if(e.documentSymbols){t.push(a.languages.registerDocumentSymbolProvider(r,new Un(i)))}if(e.rename){t.push(a.languages.registerRenameProvider(r,new zn(i)))}if(e.colors){t.push(a.languages.registerColorProvider(r,new Bn(i)))}if(e.foldingRanges){t.push(a.languages.registerFoldingRangeProvider(r,new Gn(i)))}if(e.diagnostics){t.push(new bn(r,i,n.onDidChange))}if(e.selectionRanges){t.push(a.languages.registerSelectionRangeProvider(r,new Kn(i)))}if(e.documentFormattingEdits){t.push(a.languages.registerDocumentFormattingEditProvider(r,new qn(i)))}if(e.documentRangeFormattingEdits){t.push(a.languages.registerDocumentRangeFormattingEditProvider(r,new Pn(i)))}}u();r.push(Xn(t));return Xn(r)}function Xn(n){return{dispose:()=>Yn(n)}}function Yn(n){while(n.length){n.pop().dispose()}}export{xn as CompletionAdapter,Ln as DefinitionAdapter,bn as DiagnosticsAdapter,Bn as DocumentColorAdapter,qn as DocumentFormattingEditProvider,Nn as DocumentHighlightAdapter,$n as DocumentLinkAdapter,Pn as DocumentRangeFormattingEditProvider,Un as DocumentSymbolAdapter,Gn as FoldingRangeAdapter,Sn as HoverAdapter,Mn as ReferenceAdapter,zn as RenameAdapter,Kn as SelectionRangeAdapter,c as WorkerManager,kn as fromPosition,yn as fromRange,Qn as setupMode,In as toRange,_n as toTextEdit};
//# sourceMappingURL=p-786d9050.js.map