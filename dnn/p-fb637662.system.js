System.register(["./p-646cfb1b.system.js"],(function(e){"use strict";return{setters:[function(t){e("Debounce",t.D)}],execute:function(){var t=function(){function e(e){var t=this;this.getServiceRoot=function(e){var t=window.top.dnn.getVar("sf_siteRoot","/");t+="API/"+e+"/";return t};this.getTabId=function(){var e=window.top.dnn.getVar("sf_tabId","-1");return parseInt(e)};this.getModuleId=function(){return t._moduleId};this.getAntiForgeryValue=function(){var e=document.querySelector("input[name=__RequestVerificationToken]");if(e!=null){return e.value}else{return null}};this.getModuleHeaders=function(){var e=new Headers;if(t.getTabId()>-1){e.append("ModuleId",t._moduleId.toString());e.append("TabId",t.getTabId().toString())}var n=t.getAntiForgeryValue();if(n!=null){e.append("RequestVerificationToken",n)}return e};this._moduleId=e}return e}();e("DnnServicesFramework",t)}}}));
//# sourceMappingURL=p-fb637662.system.js.map