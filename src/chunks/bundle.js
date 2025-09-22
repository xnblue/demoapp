System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/cjs-loader.mjs",[],(function(e){return{execute:function(){e("default",new class{constructor(){this._registry={},this._moduleCache={}}define(e,r,t){this._registry[e]={factory:r,resolveMap:t}}require(e){return this._require(e)}throwInvalidWrapper(e,r){throw new Error(`Module '${e}' imported from '${r}' is expected be an ESM-wrapped CommonJS module but it doesn't.`)}_require(e,r){const t=this._moduleCache[e];if(t)return t.exports;const o={id:e,exports:{}};return this._moduleCache[e]=o,this._tryModuleLoad(o,e),o.exports}_resolve(e,r){return this._resolveFromInfos(e,r)||this._throwUnresolved(e,r)}_resolveFromInfos(e,r){var t;return e in cjsInfos?e:r?(null==(t=cjsInfos[r])?void 0:t.resolveCache[e])??void 0:void 0}_tryModuleLoad(e,r){let t=!0;try{this._load(e,r),t=!1}finally{t&&delete this._moduleCache[r]}}_load(e,r){const{factory:t,resolveMap:o}=this._loadWrapper(r),i=this._createRequire(e),s=o?this._createRequireWithResolveMap("function"==typeof o?o():o,i):i;t(e.exports,s,e)}_loadWrapper(e){return e in this._registry?this._registry[e]:this._loadHostProvidedModules(e)}_loadHostProvidedModules(e){return{factory:(r,t,o)=>{if("undefined"==typeof require)throw new Error(`Current environment does not provide a require() for requiring '${e}'.`);try{o.exports=require(e)}catch(r){throw new Error(`Exception thrown when calling host defined require('${e}').`,{cause:r})}}}}_createRequire(e){return r=>this._require(r,e)}_createRequireWithResolveMap(e,r){return t=>{const o=e[t];if(o)return r(o);throw new Error("Unresolved specifier "+t)}}_throwUnresolved(e,r){throw new Error(`Unable to resolve ${e} from ${parent}.`)}})}}}));

System.register("chunks:///_virtual/index.cjs",["./cjs-loader.mjs","./wrap-idb-value.cjs"],(function(e,t){var n,r;return{setters:[function(e){n=e.default},function(e){r=e.__cjsMetaURL}],execute:function(){const s=e("__cjsMetaURL",t.meta.url);n.define(s,(function(e,t,n,r,s){Object.defineProperty(e,"__esModule",{value:!0});var a=t("./wrap-idb-value.cjs");const o=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],i=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(i.get(t))return i.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=d.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!o.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,s?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&a.done]))[0]};return i.set(t,a),a}a.replaceTraps((e=>({...e,get:(t,n,r)=>c(t,n)||e.get(t,n,r),has:(t,n)=>!!c(t,n)||e.has(t,n)}))),e.unwrap=a.unwrap,e.wrap=a.wrap,e.deleteDB=function(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(e=>t(e.oldVersion,e))),a.wrap(n).then((()=>{}))},e.openDB=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const d=indexedDB.open(e,t),i=a.wrap(d);return r&&d.addEventListener("upgradeneeded",(e=>{r(a.wrap(d.result),e.oldVersion,e.newVersion,a.wrap(d.transaction),e)})),n&&d.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),i.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),i},n.exports,n.exports.__esModule,n.exports.unwrap,n.exports.wrap,n.exports.deleteDB,n.exports.openDB}),(()=>({"./wrap-idb-value.cjs":r})))}}}));

System.register("chunks:///_virtual/index.cjs.js",["./cjs-loader.mjs","./index.node.cjs.js","./tslib.js","./index.cjs3.js","./index.cjs2.js","./index.cjs4.js"],(function(e,t){var n,r,i,a,o,s;return{setters:[function(e){n=e.default},function(e){r=e.__cjsMetaURL},function(e){i=e.__cjsMetaURL},function(e){a=e.__cjsMetaURL},function(e){o=e.__cjsMetaURL},function(e){s=e.__cjsMetaURL}],execute:function(){const c=e("__cjsMetaURL",t.meta.url);n.define(c,(function(e,t,n,r,i){var a=t("@firebase/util"),o=t("tslib"),s=t("@firebase/component"),c=t("@firebase/app"),p=t("@firebase/logger");function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l,d=u(c),f=function(){function e(e,t){var n=this;this._delegate=e,this.firebase=t,c._addComponent(e,new s.Component("app-compat",(function(){return n}),"PUBLIC")),this.container=e.container}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this._delegate.automaticDataCollectionEnabled},set:function(e){this._delegate.automaticDataCollectionEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._delegate.options},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e._delegate.checkDestroyed(),t()})).then((function(){return e.firebase.INTERNAL.removeApp(e.name),c.deleteApp(e._delegate)}))},e.prototype._getService=function(e,t){var n;void 0===t&&(t=c._DEFAULT_ENTRY_NAME),this._delegate.checkDestroyed();var r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=c._DEFAULT_ENTRY_NAME),this._delegate.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){c._addComponent(this._delegate,e)},e.prototype._addOrOverwriteComponent=function(e){c._addOrOverwriteComponent(this._delegate,e)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e}(),b=((l={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",l["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",l),m=new a.ErrorFactory("app-compat","Firebase",b);
/**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */var g=
/**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
function e(){var t=
/**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
function(e){var t={},n={__esModule:!0,initializeApp:function(r,i){void 0===i&&(i={});var o=d.initializeApp(r,i);if(a.contains(t,o.name))return t[o.name];var s=new e(o,n);return t[o.name]=s,s},app:r,registerVersion:d.registerVersion,setLogLevel:d.setLogLevel,onLog:d.onLog,apps:null,SDK_VERSION:d.SDK_VERSION,INTERNAL:{registerComponent:function(t){var i=t.name,o=i.replace("-compat","");if(d._registerComponent(t)&&"PUBLIC"===t.type){var s=function(e){if(void 0===e&&(e=r()),"function"!=typeof e[o])throw m.create("invalid-app-argument",{appName:i});return e[o]()};void 0!==t.serviceProps&&a.deepExtend(s,t.serviceProps),n[o]=s,e.prototype[o]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:d}};function r(e){if(e=e||d._DEFAULT_ENTRY_NAME,!a.contains(t,e))throw m.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),r.App=e,n}(f);return t.INTERNAL=o.__assign(o.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){a.deepExtend(t,e)},createSubscribe:a.createSubscribe,ErrorFactory:a.ErrorFactory,deepExtend:a.deepExtend}),t}(),_=new p.Logger("@firebase/app-compat");
/**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
/**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
if(a.isBrowser()&&void 0!==self.firebase){_.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var v=self.firebase.SDK_VERSION;v&&v.indexOf("LITE")>=0&&_.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var h,y=g;c.registerVersion("@firebase/app-compat","0.2.13",h),n.exports=y,n.exports}),(()=>({"@firebase/util":r,tslib:i,"@firebase/component":a,"@firebase/app":o,"@firebase/logger":s})))}}}));

System.register("chunks:///_virtual/index.cjs2.js",["./cjs-loader.mjs","./index.cjs3.js","./tslib.js","./index.cjs4.js","./index.node.cjs.js","./index.cjs"],(function(e,t){var r,a,n,i,o,s;return{setters:[function(e){r=e.default},function(e){a=e.__cjsMetaURL},function(e){n=e.__cjsMetaURL},function(e){i=e.__cjsMetaURL},function(e){o=e.__cjsMetaURL},function(e){s=e.__cjsMetaURL}],execute:function(){const c=e("__cjsMetaURL",t.meta.url);r.define(c,(function(e,t,r,a,n){Object.defineProperty(e,"__esModule",{value:!0});var i=t("@firebase/component"),o=t("tslib"),s=t("@firebase/logger"),c=t("@firebase/util"),u=t("idb"),p=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")},e}();var f,l,h="@firebase/app",d="0.9.13",b=new s.Logger("@firebase/app"),g="[DEFAULT]",m=((f={})[h]="fire-core",f["@firebase/app-compat"]="fire-core-compat",f["@firebase/analytics"]="fire-analytics",f["@firebase/analytics-compat"]="fire-analytics-compat",f["@firebase/app-check"]="fire-app-check",f["@firebase/app-check-compat"]="fire-app-check-compat",f["@firebase/auth"]="fire-auth",f["@firebase/auth-compat"]="fire-auth-compat",f["@firebase/database"]="fire-rtdb",f["@firebase/database-compat"]="fire-rtdb-compat",f["@firebase/functions"]="fire-fn",f["@firebase/functions-compat"]="fire-fn-compat",f["@firebase/installations"]="fire-iid",f["@firebase/installations-compat"]="fire-iid-compat",f["@firebase/messaging"]="fire-fcm",f["@firebase/messaging-compat"]="fire-fcm-compat",f["@firebase/performance"]="fire-perf",f["@firebase/performance-compat"]="fire-perf-compat",f["@firebase/remote-config"]="fire-rc",f["@firebase/remote-config-compat"]="fire-rc-compat",f["@firebase/storage"]="fire-gcs",f["@firebase/storage-compat"]="fire-gcs-compat",f["@firebase/firestore"]="fire-fst",f["@firebase/firestore-compat"]="fire-fst-compat",f["fire-js"]="fire-js",f.firebase="fire-js-all",f),_=new Map,v=new Map;function w(e,t){try{e.container.addComponent(t)}catch(r){b.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function y(e){var t,r,a=e.name;if(v.has(a))return b.debug("There were multiple attempts to register component ".concat(a,".")),!1;v.set(a,e);try{for(var n=o.__values(_.values()),i=n.next();!i.done;i=n.next()){w(i.value,e)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return!0}function C(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}var D=((l={})["no-app"]="No Firebase App '{$appName}' has been created - call initializeApp() first",l["bad-app-name"]="Illegal App name: '{$appName}",l["duplicate-app"]="Firebase App named '{$appName}' already exists with different options or config",l["app-deleted"]="Firebase App named '{$appName}' already deleted",l["no-options"]="Need to provide options, when not being deployed to hosting via source.",l["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",l["invalid-log-argument"]="First argument to `onLog` must be null or a function.",l["idb-open"]="Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",l["idb-get"]="Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",l["idb-set"]="Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",l["idb-delete"]="Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",l),x=new c.ErrorFactory("app","Firebase",D),E=function(){function e(e,t,r){var a=this;this._isDeleted=!1,this._options=o.__assign({},e),this._config=o.__assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new i.Component("app",(function(){return a}),"PUBLIC"))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed(),this._name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed(),this._options},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"config",{get:function(){return this.checkDestroyed(),this._config},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"container",{get:function(){return this._container},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDeleted",{get:function(){return this._isDeleted},set:function(e){this._isDeleted=e},enumerable:!1,configurable:!0}),e.prototype.checkDestroyed=function(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})},e}();function j(e,t){var r,a;void 0===t&&(t={});var n=e;"object"!=typeof t&&(t={name:t});var s=o.__assign({name:g,automaticDataCollectionEnabled:!1},t),u=s.name;if("string"!=typeof u||!u)throw x.create("bad-app-name",{appName:String(u)});if(n||(n=c.getDefaultAppConfig()),!n)throw x.create("no-options");var p=_.get(u);if(p){if(c.deepEqual(n,p.options)&&c.deepEqual(s,p.config))return p;throw x.create("duplicate-app",{appName:u})}var f=new i.ComponentContainer(u);try{for(var l=o.__values(v.values()),h=l.next();!h.done;h=l.next()){var d=h.value;f.addComponent(d)}}catch(e){r={error:e}}finally{try{h&&!h.done&&(a=l.return)&&a.call(l)}finally{if(r)throw r.error}}var b=new E(n,s,f);return _.set(u,b),b}function I(e,t,r){var a,n=null!==(a=m[e])&&void 0!==a?a:e;r&&(n+="-".concat(r));var o=n.match(/\s|\//),s=t.match(/\s|\//);if(o||s){var c=['Unable to register library "'.concat(n,'" with version "').concat(t,'":')];return o&&c.push('library name "'.concat(n,'" contains illegal characters (whitespace or "/")')),o&&s&&c.push("and"),s&&c.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void b.warn(c.join(" "))}y(new i.Component("".concat(n,"-version"),(function(){return{library:n,version:t}}),"VERSION"))}
/**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
var P="firebase-heartbeat-store",S=null;function A(){return S||(S=u.openDB("firebase-heartbeat-database",1,{upgrade:function(e,t){switch(t){case 0:e.createObjectStore(P)}}}).catch((function(e){throw x.create("idb-open",{originalErrorMessage:e.message})}))),S}function O(e){return o.__awaiter(this,void 0,void 0,(function(){var t,r;return o.__generator(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,A()];case 1:return[4,a.sent().transaction(P).objectStore(P).get(N(e))];case 2:return[2,a.sent()];case 3:return(t=a.sent())instanceof c.FirebaseError?b.warn(t.message):(r=x.create("idb-get",{originalErrorMessage:null==t?void 0:t.message}),b.warn(r.message)),[3,4];case 4:return[2]}}))}))}function L(e,t){return o.__awaiter(this,void 0,void 0,(function(){var r,a,n,i;return o.__generator(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),[4,A()];case 1:return r=o.sent(),a=r.transaction(P,"readwrite"),[4,a.objectStore(P).put(t,N(e))];case 2:return o.sent(),[4,a.done];case 3:return o.sent(),[3,5];case 4:return(n=o.sent())instanceof c.FirebaseError?b.warn(n.message):(i=x.create("idb-set",{originalErrorMessage:null==n?void 0:n.message}),b.warn(i.message)),[3,5];case 5:return[2]}}))}))}function N(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */var M=function(){function e(e){var t=this;this.container=e,this._heartbeatsCache=null;var r=this.container.getProvider("app").getImmediate();this._storage=new U(r),this._heartbeatsCachePromise=this._storage.read().then((function(e){return t._heartbeatsCache=e,e}))}return e.prototype.triggerHeartbeat=function(){return o.__awaiter(this,void 0,void 0,(function(){var e,t,r,a;return o.__generator(this,(function(n){switch(n.label){case 0:return e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=k(),null!==this._heartbeatsCache?[3,2]:(a=this,[4,this._heartbeatsCachePromise]);case 1:a._heartbeatsCache=n.sent(),n.label=2;case 2:return this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((function(e){return e.date===r}))?[2]:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),[2,this._storage.overwrite(this._heartbeatsCache)])}}))}))},e.prototype.getHeartbeatsHeader=function(){return o.__awaiter(this,void 0,void 0,(function(){var e,t,r,a,n;return o.__generator(this,(function(i){switch(i.label){case 0:return null!==this._heartbeatsCache?[3,2]:[4,this._heartbeatsCachePromise];case 1:i.sent(),i.label=2;case 2:return null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length?[2,""]:(e=k(),t=function(e,t){var r,a;void 0===t&&(t=1024);var n=[],i=e.slice(),s=function(e){var r=n.find((function(t){return t.agent===e.agent}));if(r){if(r.dates.push(e.date),B(n)>t)return r.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),B(n)>t)return n.pop(),"break";i=i.slice(1)};try{for(var c=o.__values(e),u=c.next();!u.done;u=c.next()){if("break"===s(u.value))break}}catch(e){r={error:e}}finally{try{u&&!u.done&&(a=c.return)&&a.call(c)}finally{if(r)throw r.error}}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=t.heartbeatsToSend,a=t.unsentEntries,n=c.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:r})),this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,[4,this._storage.overwrite(this._heartbeatsCache)]):[3,4]);case 3:return i.sent(),[3,5];case 4:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache),i.label=5;case 5:return[2,n]}}))}))},e}();function k(){return(new Date).toISOString().substring(0,10)}var F,U=function(){function e(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e.prototype.runIndexedDBEnvironmentCheck=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){return c.isIndexedDBAvailable()?[2,c.validateIndexedDBOpenable().then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))},e.prototype.read=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){switch(e.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return e.sent()?[3,2]:[2,{heartbeats:[]}];case 2:return[4,O(this.app)];case 3:return[2,e.sent()||{heartbeats:[]}]}}))}))},e.prototype.overwrite=function(e){var t;return o.__awaiter(this,void 0,void 0,(function(){var r;return o.__generator(this,(function(a){switch(a.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return a.sent()?[3,2]:[2];case 2:return[4,this.read()];case 3:return r=a.sent(),[2,L(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})]}}))}))},e.prototype.add=function(e){var t;return o.__awaiter(this,void 0,void 0,(function(){var r;return o.__generator(this,(function(a){switch(a.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return a.sent()?[3,2]:[2];case 2:return[4,this.read()];case 3:return r=a.sent(),[2,L(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:o.__spreadArray(o.__spreadArray([],o.__read(r.heartbeats),!1),o.__read(e.heartbeats),!1)})]}}))}))},e}();function B(e){return c.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:e})).length}
/**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */F="node",y(new i.Component("platform-logger",(function(e){return new p(e)}),"PRIVATE")),y(new i.Component("heartbeat",(function(e){return new M(e)}),"PRIVATE")),I(h,d,F),I(h,d,"cjs5"),I("fire-js",""),Object.defineProperty(e,"FirebaseError",{enumerable:!0,get:function(){return c.FirebaseError}}),e.SDK_VERSION="9.23.0",e._DEFAULT_ENTRY_NAME=g,e._addComponent=w,e._addOrOverwriteComponent=function(e,t){e.container.addOrOverwriteComponent(t)},e._apps=_,e._clearComponents=function(){v.clear()}
/**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */,e._components=v,e._getProvider=C,e._registerComponent=y,e._removeServiceInstance=function(e,t,r){void 0===r&&(r=g),C(e,t).clearInstance(r)},e.deleteApp=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t;return o.__generator(this,(function(r){switch(r.label){case 0:return t=e.name,_.has(t)?(_.delete(t),[4,Promise.all(e.container.getProviders().map((function(e){return e.delete()})))]):[3,2];case 1:r.sent(),e.isDeleted=!0,r.label=2;case 2:return[2]}}))}))},e.getApp=function(e){void 0===e&&(e=g);var t=_.get(e);if(!t&&e===g&&c.getDefaultAppConfig())return j();if(!t)throw x.create("no-app",{appName:e});return t},e.getApps=function(){return Array.from(_.values())},e.initializeApp=j,e.onLog=function(e,t){if(null!==e&&"function"!=typeof e)throw x.create("invalid-log-argument");s.setUserLogHandler(e,t)},e.registerVersion=I,e.setLogLevel=function(e){s.setLogLevel(e)},r.exports,r.exports.__esModule,r.exports.FirebaseError,r.exports.SDK_VERSION,r.exports._DEFAULT_ENTRY_NAME,r.exports._addComponent,r.exports._addOrOverwriteComponent,r.exports._apps,r.exports._clearComponents,r.exports._components,r.exports._getProvider,r.exports._registerComponent,r.exports._removeServiceInstance,r.exports.deleteApp,r.exports.getApp,r.exports.getApps,r.exports.initializeApp,r.exports.onLog,r.exports.registerVersion,r.exports.setLogLevel}),(()=>({"@firebase/component":a,tslib:n,"@firebase/logger":i,"@firebase/util":o,idb:s})))}}}));

System.register("chunks:///_virtual/index.cjs3.js",["./cjs-loader.mjs","./tslib.js","./index.node.cjs.js"],(function(t,e){var n,i,r;return{setters:[function(t){n=t.default},function(t){i=t.__cjsMetaURL},function(t){r=t.__cjsMetaURL}],execute:function(){const o=t("__cjsMetaURL",e.meta.url);n.define(o,(function(t,e,n,i,r){Object.defineProperty(t,"__esModule",{value:!0});var o=e("tslib"),s=e("@firebase/util"),a=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),c="[DEFAULT]",l=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new s.Deferred;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */(t))try{this.getOrInitializeService({instanceIdentifier:c})}catch(t){}try{for(var i=o.__values(this.instancesDeferred.entries()),r=i.next();!r.done;r=i.next()){var s=o.__read(r.value,2),a=s[0],l=s[1],h=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:h});l.resolve(u)}catch(t){}}}catch(t){e={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=c),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return o.__awaiter(this,void 0,void 0,(function(){var t;return o.__generator(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(o.__spreadArray(o.__spreadArray([],o.__read(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()}))),!1),o.__read(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()}))),!1))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=c),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=c),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,r=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error("".concat(this.name,"(").concat(s,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:s,options:r});try{for(var c=o.__values(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var h=o.__read(l.value,2),u=h[0],p=h[1];s===this.normalizeInstanceIdentifier(u)&&p.resolve(a)}}catch(t){e={error:t}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);var o=this.instances.get(i);return o&&t(o,i),function(){r.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,r=this.onInitCallbacks.get(e);if(r)try{for(var s=o.__values(r),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,i=t.options,r=void 0===i?{}:i,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,e===c?void 0:e),options:r}),this.instances.set(n,o),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(t){}return o||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=c),this.component?this.component.multipleInstances?t:c:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();var h=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component ".concat(t.name," has already been registered with ").concat(this.name));e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new l(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();t.Component=a,t.ComponentContainer=h,t.Provider=l,n.exports,n.exports.__esModule,n.exports.Component,n.exports.ComponentContainer,n.exports.Provider}),(()=>({tslib:i,"@firebase/util":r})))}}}));

System.register("chunks:///_virtual/index.cjs4.js",["./cjs-loader.mjs","./tslib.js"],(function(e,r){var t,o;return{setters:[function(e){t=e.default},function(e){o=e.__cjsMetaURL}],execute:function(){const n=e("__cjsMetaURL",r.meta.url);t.define(n,(function(e,r,t,o,n){Object.defineProperty(e,"__esModule",{value:!0});var l,s,i=r("tslib"),a=[];
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */e.LogLevel=void 0,(s=e.LogLevel||(e.LogLevel={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";var g={debug:e.LogLevel.DEBUG,verbose:e.LogLevel.VERBOSE,info:e.LogLevel.INFO,warn:e.LogLevel.WARN,error:e.LogLevel.ERROR,silent:e.LogLevel.SILENT},L=e.LogLevel.INFO,u=((l={})[e.LogLevel.DEBUG]="log",l[e.LogLevel.VERBOSE]="log",l[e.LogLevel.INFO]="info",l[e.LogLevel.WARN]="warn",l[e.LogLevel.ERROR]="error",l),p=function(e,r){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];if(!(r<e.logLevel)){var n=(new Date).toISOString(),l=u[r];if(!l)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));console[l].apply(console,i.__spreadArray(["[".concat(n,"]  ").concat(e.name,":")],t,!1))}},f=function(){function r(e){this.name=e,this._logLevel=L,this._logHandler=p,this._userLogHandler=null,a.push(this)}return Object.defineProperty(r.prototype,"logLevel",{get:function(){return this._logLevel},set:function(r){if(!(r in e.LogLevel))throw new TypeError('Invalid value "'.concat(r,'" assigned to `logLevel`'));this._logLevel=r},enumerable:!1,configurable:!0}),r.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?g[e]:e},Object.defineProperty(r.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),r.prototype.debug=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.DEBUG],r,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.DEBUG],r,!1))},r.prototype.log=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.VERBOSE],r,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.VERBOSE],r,!1))},r.prototype.info=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.INFO],r,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.INFO],r,!1))},r.prototype.warn=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.WARN],r,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.WARN],r,!1))},r.prototype.error=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.ERROR],r,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.ERROR],r,!1))},r}();e.Logger=f,e.setLogLevel=function(e){a.forEach((function(r){r.setLogLevel(e)}))},e.setUserLogHandler=function(r,t){for(var o=function(o){var n=null;t&&t.level&&(n=g[t.level]),o.userLogHandler=null===r?null:function(t,o){for(var l=[],s=2;s<arguments.length;s++)l[s-2]=arguments[s];var i=l.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");o>=(null!=n?n:t.logLevel)&&r({level:e.LogLevel[o].toLowerCase(),message:i,args:l,type:t.name})}},n=0,l=a;n<l.length;n++){o(l[n])}},t.exports,t.exports.__esModule,t.exports.LogLevel,t.exports.Logger,t.exports.setLogLevel,t.exports.setUserLogHandler}),(()=>({tslib:o})))}}}));

System.register("chunks:///_virtual/index.node.cjs.js",["./cjs-loader.mjs","./tslib.js"],(function(e,t){var r,o;return{setters:[function(e){r=e.default},function(e){o=e.__cjsMetaURL}],execute:function(){const n=e("__cjsMetaURL",t.meta.url);r.define(n,(function(e,t,r,o,n){Object.defineProperty(e,"__esModule",{value:!0});var i=t("tslib"),s={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw c(t)},c=function(e){return new Error("Firebase Database ("+s.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},u=function(e){for(var t=[],r=0,o=0;o<e.length;o++){var n=e.charCodeAt(o);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296==(64512&n)&&o+1<e.length&&56320==(64512&e.charCodeAt(o+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++o)),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128)}return t},f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[],n=0;n<e.length;n+=3){var i=e[n],s=n+1<e.length,a=s?e[n+1]:0,c=n+2<e.length,u=c?e[n+2]:0,f=i>>2,h=(3&i)<<4|a>>4,p=(15&a)<<2|u>>6,l=63&u;c||(l=64,s||(p=64)),o.push(r[f],r[h],r[p],r[l])}return o.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(u(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,o=0;r<e.length;){var n=e[r++];if(n<128)t[o++]=String.fromCharCode(n);else if(n>191&&n<224){var i=e[r++];t[o++]=String.fromCharCode((31&n)<<6|63&i)}else if(n>239&&n<365){var s=((7&n)<<18|(63&(i=e[r++]))<<12|(63&(a=e[r++]))<<6|63&e[r++])-65536;t[o++]=String.fromCharCode(55296+(s>>10)),t[o++]=String.fromCharCode(56320+(1023&s))}else{i=e[r++];var a=e[r++];t[o++]=String.fromCharCode((15&n)<<12|(63&i)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[],n=0;n<e.length;){var i=r[e.charAt(n++)],s=n<e.length?r[e.charAt(n)]:0,a=++n<e.length?r[e.charAt(n)]:64,c=++n<e.length?r[e.charAt(n)]:64;if(++n,null==i||null==s||null==a||null==c)throw new h;var u=i<<2|s>>4;if(o.push(u),64!==a){var f=s<<4&240|a>>2;if(o.push(f),64!==c){var p=a<<6&192|c;o.push(p)}}}return o},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name="DecodeBase64StringError",t}return i.__extends(t,e),t}(Error),p=function(e){var t=u(e);return f.encodeByteArray(t,!0)},l=function(e){return p(e).replace(/\./g,"")},d=function(e){try{return f.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */function v(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&"__proto__"!==r&&(e[r]=v(e[r],t[r]));return e}
/**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
function b(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */var _=function(){try{return b().__FIREBASE_DEFAULTS__||function(){if("undefined"!=typeof process&&void 0!==process.env){var e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0}}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&d(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},y=function(e){var t,r;return null===(r=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},x=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,o){r?t.reject(r):t.resolve(o),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,o))}},e}();
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){var e,t=null===(e=_())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
var m=function(e){function t(r,o,n){var i=e.call(this,o)||this;return i.code=r,i.customData=n,i.name="FirebaseError",Object.setPrototypeOf(i,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,S.prototype.create),i}return i.__extends(t,e),t}(Error),S=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=t[0]||{},n="".concat(this.service,"/").concat(e),i=this.errors[e],s=i?A(i,o):"Error",a="".concat(this.serviceName,": ").concat(s," (").concat(n,")."),c=new m(n,a,o);return c},e}();function A(e,t){return e.replace(O,(function(e,r){var o=t[r];return null!=o?String(o):"<".concat(r,"?>")}))}var O=/\{\$([^}]+)}/g;
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */function C(e){return JSON.parse(e)}
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
var D=function(e){var t={},r={},o={},n="";try{var i=e.split(".");t=C(d(i[0])||""),r=C(d(i[1])||""),n=i[2],o=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:o,signature:n}};function w(e){return null!==e&&"object"==typeof e}
/**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
var T=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var o=0;o<16;o++)r[o]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(o=0;o<16;o++)r[o]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(o=16;o<80;o++){var n=r[o-3]^r[o-8]^r[o-14]^r[o-16];r[o]=4294967295&(n<<1|n>>>31)}var i,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4];for(o=0;o<80;o++){o<40?o<20?(i=f^c&(u^f),s=1518500249):(i=c^u^f,s=1859775393):o<60?(i=c&u|f&(c|u),s=2400959708):(i=c^u^f,s=3395469782);n=(a<<5|a>>>27)+i+h+s+r[o]&4294967295;h=f,f=u,u=4294967295&(c<<30|c>>>2),c=a,a=n}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,o=0,n=this.buf_,i=this.inbuf_;o<t;){if(0===i)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(n[i]=e.charCodeAt(o),++o,++i===this.blockSize){this.compress_(n),i=0;break}}else for(;o<t;)if(n[i]=e[o],++o,++i===this.blockSize){this.compress_(n),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var o=0;for(r=0;r<5;r++)for(var n=24;n>=0;n-=8)e[o]=this.chain_[r]>>n&255,++o;return e},e}();var N=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var o,n=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(o=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,o=t;r<o.length;r++){var n=o[r];if(n in e&&"function"==typeof e[n])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(o.next=M),void 0===o.error&&(o.error=M),void 0===o.complete&&(o.complete=M);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{n.finalError?o.error(n.finalError):o.complete()}catch(e){}})),this.observers.push(o),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function M(){}
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */function j(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
var B=144e5;
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
s.NODE_CLIENT=!0,e.CONSTANTS=s,e.DecodeBase64StringError=h,e.Deferred=x,e.ErrorFactory=S,e.FirebaseError=m,e.MAX_VALUE_MILLIS=B,e.RANDOM_FACTOR=.5,e.Sha1=T,e.areCookiesEnabled=function(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)},e.assert=a,e.assertionError=c,e.async=function(e,t){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}},e.base64=f,e.base64Decode=d,e.base64Encode=p,e.base64urlEncodeWithoutPadding=l,e.calculateBackoffMillis=function(e,t,r){void 0===t&&(t=1e3),void 0===r&&(r=2);var o=t*Math.pow(r,e),n=Math.round(.5*o*(Math.random()-.5)*2);return Math.min(B,o+n)}
/**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */,e.contains=
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.createMockUserToken=
/**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var r=t||"demo-project",o=e.iat||0,n=e.sub||e.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var s=i.__assign({iss:"https://securetoken.google.com/".concat(r),aud:r,iat:o,exp:o+3600,auth_time:o,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(s)),""].join(".")},e.createSubscribe=function(e,t){var r=new N(e,t);return r.subscribe.bind(r)},e.decode=D,e.deepCopy=
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
function(e){return v(void 0,e)},e.deepEqual=function e(t,r){if(t===r)return!0;for(var o=Object.keys(t),n=Object.keys(r),i=0,s=o;i<s.length;i++){var a=s[i];if(!n.includes(a))return!1;var c=t[a],u=r[a];if(w(c)&&w(u)){if(!e(c,u))return!1}else if(c!==u)return!1}for(var f=0,h=n;f<h.length;f++){a=h[f];if(!o.includes(a))return!1}return!0},e.deepExtend=v,e.errorPrefix=j,e.extractQuerystring=function(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)},e.getDefaultAppConfig=function(){var e;return null===(e=_())||void 0===e?void 0:e.config},e.getDefaultEmulatorHost=y,e.getDefaultEmulatorHostnameAndPort=function(e){var t=y(e);if(t){var r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var o=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),o]:[t.substring(0,r),o]}},e.getDefaults=_,e.getExperimentalSetting=function(e){var t;return null===(t=_())||void 0===t?void 0:t["_".concat(e)]},e.getGlobal=b,e.getModularInstance=
/**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
function(e){return e&&e._delegate?e._delegate:e},e.getUA=g,e.isAdmin=function(e){var t=D(e).claims;return"object"==typeof t&&!0===t.admin},e.isBrowser=function(){return"object"==typeof self&&self.self===self},e.isBrowserExtension=function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id},e.isElectron=function(){return g().indexOf("Electron/")>=0},e.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},e.isIE=function(){var e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},e.isIndexedDBAvailable=function(){try{return"object"==typeof indexedDB}catch(e){return!1}},e.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())},e.isNode=E,e.isNodeSdk=function(){return!0===s.NODE_CLIENT||!0===s.NODE_ADMIN},e.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},e.isSafari=function(){return!E()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},e.isUWP=function(){return g().indexOf("MSAppHost/")>=0},e.isValidFormat=function(e){var t=D(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},e.isValidTimestamp=function(e){var t=D(e).claims,r=Math.floor((new Date).getTime()/1e3),o=0,n=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?o=t.nbf:t.hasOwnProperty("iat")&&(o=t.iat),n=t.hasOwnProperty("exp")?t.exp:o+86400),!!r&&!!o&&!!n&&r>=o&&r<=n},e.issuedAtTime=function(e){var t=D(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},e.jsonEval=C,e.map=function(e,t,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=t.call(r,e[n],n,e));return o},e.ordinal=function(e){return Number.isFinite(e)?e+function(e){var t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return"th";var r=e%10;if(1===r)return"st";if(2===r)return"nd";if(3===r)return"rd";return"th"}(e):"".concat(e)},e.promiseWithTimeout=function(e,t){void 0===t&&(t=2e3);var r=new x;return setTimeout((function(){return r.reject("timeout!")}),t),e.then(r.resolve,r.reject),r.promise}
/**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */,e.querystring=function(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},o=0,n=Object.entries(e);o<n.length;o++){var i=n[o];r(i[0],i[1])}return t.length?"&"+t.join("&"):""},e.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=e.split("="),o=r[0],n=r[1];t[decodeURIComponent(o)]=decodeURIComponent(n)}})),t},e.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},e.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t++:o<2048?t+=2:o>=55296&&o<=56319?(t+=4,r++):t+=3}return t},e.stringToByteArray=function(e){for(var t=[],r=0,o=0;o<e.length;o++){var n=e.charCodeAt(o);if(n>=55296&&n<=56319){var i=n-55296;o++,a(o<e.length,"Surrogate pair missing trail surrogate."),n=65536+(i<<10)+(e.charCodeAt(o)-56320)}n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):n<65536?(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128)}return t},e.stringify=function(e){return JSON.stringify(e)},e.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},e.validateArgCount=function(e,t,r,o){var n;if(o<t?n="at least "+t:o>r&&(n=0===r?"none":"no more than "+r),n)throw new Error(e+" failed: Was called with "+o+(1===o?" argument.":" arguments.")+" Expects "+n+".")},e.validateCallback=function(e,t,r,o){if((!o||r)&&"function"!=typeof r)throw new Error(j(e,t)+"must be a valid function.")},e.validateContextObject=function(e,t,r,o){if((!o||r)&&("object"!=typeof r||null===r))throw new Error(j(e,t)+"must be a valid context object.")},e.validateIndexedDBOpenable=function(){return new Promise((function(e,t){try{var r=!0,o="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(o);n.onsuccess=function(){n.result.close(),r||self.indexedDB.deleteDatabase(o),e(!0)},n.onupgradeneeded=function(){r=!1},n.onerror=function(){var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))},e.validateNamespace=function(e,t,r){if((!r||t)&&"string"!=typeof t)throw new Error(j(e,"namespace")+"must be a valid firebase namespace.")},r.exports,r.exports.__esModule,r.exports.CONSTANTS,r.exports.DecodeBase64StringError,r.exports.Deferred,r.exports.ErrorFactory,r.exports.FirebaseError,r.exports.MAX_VALUE_MILLIS,r.exports.RANDOM_FACTOR,r.exports.Sha1,r.exports.areCookiesEnabled,r.exports.assert,r.exports.assertionError,r.exports.async,r.exports.base64,r.exports.base64Decode,r.exports.base64Encode,r.exports.base64urlEncodeWithoutPadding,r.exports.calculateBackoffMillis,r.exports.contains,r.exports.createMockUserToken,r.exports.createSubscribe,r.exports.decode,r.exports.deepCopy,r.exports.deepEqual,r.exports.deepExtend,r.exports.errorPrefix,r.exports.extractQuerystring,r.exports.getDefaultAppConfig,r.exports.getDefaultEmulatorHost,r.exports.getDefaultEmulatorHostnameAndPort,r.exports.getDefaults,r.exports.getExperimentalSetting,r.exports.getGlobal,r.exports.getModularInstance,r.exports.getUA,r.exports.isAdmin,r.exports.isBrowser,r.exports.isBrowserExtension,r.exports.isElectron,r.exports.isEmpty,r.exports.isIE,r.exports.isIndexedDBAvailable,r.exports.isMobileCordova,r.exports.isNode,r.exports.isNodeSdk,r.exports.isReactNative,r.exports.isSafari,r.exports.isUWP,r.exports.isValidFormat,r.exports.isValidTimestamp,r.exports.issuedAtTime,r.exports.jsonEval,r.exports.map,r.exports.ordinal,r.exports.promiseWithTimeout,r.exports.querystring,r.exports.querystringDecode,r.exports.safeGet,r.exports.stringLength,r.exports.stringToByteArray,r.exports.stringify,r.exports.uuidv4,r.exports.validateArgCount,r.exports.validateCallback,r.exports.validateContextObject,r.exports.validateIndexedDBOpenable,r.exports.validateNamespace}),(()=>({tslib:o})))}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(e){return{execute:function(){e({applyDecoratedDescriptor:function(e,i,r,n,l){var t={};Object.keys(n).forEach((function(e){t[e]=n[e]})),t.enumerable=!!t.enumerable,t.configurable=!!t.configurable,("value"in t||t.initializer)&&(t.writable=!0);t=r.slice().reverse().reduce((function(r,n){return n(e,i,r)||r}),t),l&&void 0!==t.initializer&&(t.value=t.initializer?t.initializer.call(l):void 0,t.initializer=void 0);void 0===t.initializer&&(Object.defineProperty(e,i,t),t=null);return t},initializerDefineProperty:function(e,i,r,n){if(!r)return;Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}})}}}));

System.register("chunks:///_virtual/tslib.js",["./cjs-loader.mjs"],(function(e,t){var r;return{setters:[function(e){r=e.default}],execute:function(){const n=e("__cjsMetaURL",t.meta.url);r.define(n,(function(e,t,r,n,o){var a,i,c,s,u,f,l,p,y,_,d,b,h,v,w,m,x,j,g,O,P,S,E,T,I,D,R,k,A,F,M,C;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,r){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,n){return e[t]=r?r(t,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],(function(r){e(n(t,n(r)))})):"object"==typeof r&&"object"==typeof r.exports?e(n(t,n(r.exports))):e(n(t))}((function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};a=function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},s=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},u=function(e,t){return function(r,n){t(r,n,e)}},f=function(e,t,r,n,o,a){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,s=n.kind,u="getter"===s?"get":"setter"===s?"set":"value",f=!t&&e?n.static?e:e.prototype:null,l=t||(f?Object.getOwnPropertyDescriptor(f,n.name):{}),p=!1,y=r.length-1;y>=0;y--){var _={};for(var d in n)_[d]="access"===d?{}:n[d];for(var d in n.access)_.access[d]=n.access[d];_.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(e||null))};var b=(0,r[y])("accessor"===s?{get:l.get,set:l.set}:l[u],_);if("accessor"===s){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw new TypeError("Object expected");(c=i(b.get))&&(l.get=c),(c=i(b.set))&&(l.set=c),(c=i(b.init))&&o.unshift(c)}else(c=i(b))&&("field"===s?o.unshift(c):l[u]=c)}f&&Object.defineProperty(f,n.name,l),p=!0},l=function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},p=function(e){return"symbol"==typeof e?e:"".concat(e)},y=function(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}s((n=n.apply(e,t||[])).next())}))},b=function(e,t){var r,n,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=c(0),i.throw=c(1),i.return=c(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},h=function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||A(t,e,r)},A=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]},v=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},w=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},m=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e},x=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n},j=function(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},g=function(e){return this instanceof g?(this.v=e,this):new g(e)},O=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),i("next"),i("throw"),i("return",(function(e){return function(t){return Promise.resolve(t).then(e,u)}})),n[Symbol.asyncIterator]=function(){return this},n;function i(e,t){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||c(e,t)}))},t&&(n[e]=t(n[e])))}function c(e,t){try{(r=o[e](t)).value instanceof g?Promise.resolve(r.value.v).then(s,u):f(a[0][2],r)}catch(e){f(a[0][3],e)}var r}function s(e){c("next",e)}function u(e){c("throw",e)}function f(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}},P=function(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:g(e[n](t)),done:!1}:o?o(t):t}:o}},S=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=v(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}},E=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};var r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},n=function(e){return(n=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t})(e)};T=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o=n(e),a=0;a<o.length;a++)"default"!==o[a]&&A(t,e,o[a]);return r(t,e),t},I=function(e){return e&&e.__esModule?e:{default:e}},D=function(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)},R=function(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r},k=function(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)},F=function(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var n,o;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose],r&&(o=n)}if("function"!=typeof n)throw new TypeError("Object not disposable.");o&&(n=function(){try{o.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t};var o="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};M=function(e){function t(t){e.error=e.hasError?new o(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var r,n=0;return function o(){for(;r=e.stack.pop();)try{if(!r.async&&1===n)return n=0,e.stack.push(r),Promise.resolve().then(o);if(r.dispose){var a=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(a).then(o,(function(e){return t(e),o()}))}else n|=1}catch(e){t(e)}if(1===n)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}()},C=function(e,t){return"string"==typeof e&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,(function(e,r,n,o,a){return r?t?".jsx":".js":!n||o&&a?n+o+"."+a.toLowerCase()+"js":e})):e},e("__extends",a),e("__assign",i),e("__rest",c),e("__decorate",s),e("__param",u),e("__esDecorate",f),e("__runInitializers",l),e("__propKey",p),e("__setFunctionName",y),e("__metadata",_),e("__awaiter",d),e("__generator",b),e("__exportStar",h),e("__createBinding",A),e("__values",v),e("__read",w),e("__spread",m),e("__spreadArrays",x),e("__spreadArray",j),e("__await",g),e("__asyncGenerator",O),e("__asyncDelegator",P),e("__asyncValues",S),e("__makeTemplateObject",E),e("__importStar",T),e("__importDefault",I),e("__classPrivateFieldGet",D),e("__classPrivateFieldSet",R),e("__classPrivateFieldIn",k),e("__addDisposableResource",F),e("__disposeResources",M),e("__rewriteRelativeImportExtension",C)})),r.exports,r.exports.__esModule,r.exports.__extends,r.exports.__assign,r.exports.__rest,r.exports.__decorate,r.exports.__param,r.exports.__esDecorate,r.exports.__runInitializers,r.exports.__propKey,r.exports.__setFunctionName,r.exports.__metadata,r.exports.__awaiter,r.exports.__generator,r.exports.__exportStar,r.exports.__createBinding,r.exports.__values,r.exports.__read,r.exports.__spread,r.exports.__spreadArrays,r.exports.__spreadArray,r.exports.__await,r.exports.__asyncGenerator,r.exports.__asyncDelegator,r.exports.__asyncValues,r.exports.__makeTemplateObject,r.exports.__importStar,r.exports.__importDefault,r.exports.__classPrivateFieldGet,r.exports.__classPrivateFieldSet,r.exports.__classPrivateFieldIn,r.exports.__addDisposableResource,r.exports.__disposeResources,r.exports.__rewriteRelativeImportExtension}),{})}}}));

System.register("chunks:///_virtual/wrap-idb-value.cjs",["./cjs-loader.mjs"],(function(e,t){var r;return{setters:[function(e){r=e.default}],execute:function(){const n=e("__cjsMetaURL",t.meta.url);r.define(n,(function(e,t,r,n,o){const s=(e,t)=>t.some((t=>e instanceof t));let a,c;const i=new WeakMap,u=new WeakMap,p=new WeakMap,f=new WeakMap,v=new WeakMap;let m={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return l(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(I(this),t),l(i.get(this))}:function(...t){return l(e.apply(I(this),t))}:function(t,...r){const n=e.call(I(this),t,...r);return p.set(n,t.sort?t.sort():[t]),l(n)}}function D(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(u.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)}));u.set(e,t)}(e),s(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,m):e)}function l(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{t(l(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",o),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&i.set(t,e)})).catch((()=>{})),v.set(t,e),t}(e);if(f.has(e))return f.get(e);const t=D(e);return t!==e&&(f.set(e,t),v.set(t,e)),t}const I=e=>v.get(e);e.instanceOfAny=s,e.replaceTraps=function(e){m=e(m)},e.reverseTransformCache=v,e.unwrap=I,e.wrap=l,r.exports,r.exports.instanceOfAny,r.exports.replaceTraps,r.exports.reverseTransformCache,r.exports.unwrap,r.exports.wrap}),{})}}}));

} }; });