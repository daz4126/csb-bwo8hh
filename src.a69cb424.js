parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{"./../fonts/Monoton/Monoton-Regular.ttf":[["Monoton-Regular.16849ea8.ttf","iZJ7"],"iZJ7"],"./../images/car.png":[["car.423237cc.png","nL1g"],"nL1g"]}],"vwZF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WeakMapSet=exports.MapSet=void 0;class e extends Map{set(e,t){return super.set(e,t),t}}exports.MapSet=e;class t extends WeakMap{set(e,t){return super.set(e,t),t}}exports.WeakMapSet=t;
},{}],"YE1S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,r=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g,t=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,a=/[\x01\x02]/g;var s=(s,l,i)=>{let n=0;return s.join("").trim().replace(r,(r,a,s,l)=>{let n=a+s.replace(t,"=$2$1").trimEnd();return l.length&&(n+=i||e.test(a)?" /":"></"+a),"<"+n+">"}).replace(a,e=>""===e?"\x3c!--"+l+n+++"--\x3e":l+n++)};exports.default=s;
},{}],"c2kc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.persistent=exports.diffable=void 0;const e=1,t=111,s=({firstChild:e,lastChild:t})=>{const s=document.createRange();return s.setStartAfter(e),s.setEndAfter(t),s.deleteContents(),e},r=(e,t)=>111===e.nodeType?1/t<0?t?s(e):e.lastChild:t?e.valueOf():e.firstChild:e;exports.diffable=r;const l=e=>{const{firstChild:t,lastChild:s}=e;if(t===s)return s||e;const{childNodes:r}=e,l=[...r];return{ELEMENT_NODE:1,nodeType:111,firstChild:t,lastChild:s,valueOf:()=>(r.length!==l.length&&e.append(...l),e)}};exports.persistent=l;
},{}],"YsDC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.slice=exports.isArray=exports.indexOf=void 0;const{isArray:e}=Array;exports.isArray=e;const{indexOf:r,slice:s}=[];exports.slice=s,exports.indexOf=r;
},{}],"rwPv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.text=exports.setter=exports.ref=exports.foreign=exports.event=exports.data=exports.boolean=exports.attribute=exports.aria=exports.Foreign=void 0;var t=require("uarray");let e=!1;class r{constructor(t,r){e=!0,this._=((...e)=>t(...e,r))}}exports.Foreign=r;const o=(t,e)=>new r(t,e);exports.foreign=o;const s=t=>e=>{for(const r in e){const o="role"===r?r:`aria-${r}`,s=e[r];null==s?t.removeAttribute(o):t.setAttribute(o,s)}};exports.aria=s;const n=(t,o)=>{let s,n=!0;const i=document.createAttributeNS(null,o);return u=>{if(s!==u)if(null==(s=u))n||(t.removeAttributeNode(i),n=!0);else{const s=e&&u instanceof r?u._(t,o):u;null==s?(n||t.removeAttributeNode(i),n=!0):(i.value=s,n&&(t.setAttributeNodeNS(i),n=!1))}}};exports.attribute=n;const i=(t,e,r)=>o=>{r!==!!o&&((r=!!o)?t.setAttribute(e,""):t.removeAttribute(e))};exports.boolean=i;const u=({dataset:t})=>e=>{for(const r in e){const o=e[r];null==o?delete t[r]:t[r]=o}};exports.data=u;const a=(e,r)=>{let o,s,n=r.slice(2);return!(r in e)&&(s=r.toLowerCase())in e&&(n=s.slice(2)),r=>{const s=(0,t.isArray)(r)?r:[r,!1];o!==s[0]&&(o&&e.removeEventListener(n,o,s[1]),(o=s[0])&&e.addEventListener(n,o,s[1]))}};exports.event=a;const c=t=>{let e;return r=>{e!==r&&(e=r,"function"==typeof r?r(t):r.current=t)}};exports.ref=c;const l=(t,e)=>"dataset"===e?u(t):r=>{t[e]=r};exports.setter=l;const x=t=>{let e;return r=>{e!=r&&(e=r,t.textContent=null==r?"":r)}};exports.text=x;
},{"uarray":"YsDC"}],"Fmvn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=(e,t,l,r,s)=>{const i=l.length;let o=t.length,f=i,n=0,a=0,c=null;for(;n<o||a<f;)if(o===n){const t=f<i?a?r(l[a-1],-0).nextSibling:r(l[f-a],0):s;for(;a<f;)e.insertBefore(r(l[a++],1),t)}else if(f===a)for(;n<o;)c&&c.has(t[n])||e.removeChild(r(t[n],-1)),n++;else if(t[n]===l[a])n++,a++;else if(t[o-1]===l[f-1])o--,f--;else if(t[n]===l[f-1]&&l[a]===t[o-1]){const s=r(t[--o],-1).nextSibling;e.insertBefore(r(l[a++],1),r(t[n++],-1).nextSibling),e.insertBefore(r(l[--f],1),s),t[o]=l[f]}else{if(!c){c=new Map;let e=a;for(;e<f;)c.set(l[e],e++)}if(c.has(t[n])){const s=c.get(t[n]);if(a<s&&s<f){let i=n,d=1;for(;++i<o&&i<f&&c.get(t[i])===s+d;)d++;if(d>s-a){const i=r(t[n],0);for(;a<s;)e.insertBefore(r(l[a++],1),i)}else e.replaceChild(r(l[a++],1),r(t[n++],-1))}else n++}else e.removeChild(r(t[n++],-1))}return l};exports.default=e;
},{}],"AYZM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isArray=exports.indexOf=exports.importNode=exports.createTreeWalker=exports.createTextNode=exports.createContent=void 0;const{isArray:e,prototype:t}=Array;exports.isArray=e;const{indexOf:r}=t;exports.indexOf=r;const{createDocumentFragment:o,createElement:n,createElementNS:s,createTextNode:c,createTreeWalker:p,importNode:a}=new Proxy(document,{get:(e,t)=>e[t].bind(e)});exports.importNode=a,exports.createTreeWalker=p,exports.createTextNode=c;const x=e=>{const t=n("template");return t.innerHTML=e,t.content};let d;const i=e=>{d||(d=s("http://www.w3.org/2000/svg","svg")),d.innerHTML=e;const t=o();return t.append(...d.childNodes),t},l=(e,t)=>t?i(e):x(e);exports.createContent=l;
},{}],"fkRO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handlers=o;var e=require("@webreflection/uwire"),r=require("uhandlers"),t=a(require("udomdiff")),n=require("./utils.js");function a(e){return e&&e.__esModule?e:{default:e}}const s=({childNodes:e},r)=>e[r],i=(r,n,a)=>(0,t.default)(r.parentNode,n,a,e.diffable,r),c=e=>{let r,t,a=[];const s=c=>{switch(typeof c){case"string":case"number":case"boolean":r!==c&&(r=c,t||(t=(0,n.createTextNode)("")),t.data=c,a=i(e,a,[t]));break;case"object":case"undefined":if(null==c){r!=c&&(r=c,a=i(e,a,[]));break}if((0,n.isArray)(c)){r=c,0===c.length?a=i(e,a,[]):"object"==typeof c[0]?a=i(e,a,c):s(String(c));break}r!==c&&"ELEMENT_NODE"in c&&(r=c,a=i(e,a,11===c.nodeType?[...c.childNodes]:[c]));break;case"function":s(c(e))}};return s},u=(e,t)=>{switch(t[0]){case"?":return(0,r.boolean)(e,t.slice(1),!1);case".":return(0,r.setter)(e,t.slice(1));case"@":return(0,r.event)(e,"on"+t.slice(1));case"o":if("n"===t[1])return(0,r.event)(e,t)}switch(t){case"ref":return(0,r.ref)(e);case"aria":return(0,r.aria)(e)}return(0,r.attribute)(e,t)};function o(e){const{type:t,path:n}=e,a=n.reduceRight(s,this);return"node"===t?c(a):"attr"===t?u(a,e.name):(0,r.text)(a)}
},{"@webreflection/uwire":"c2kc","uhandlers":"rwPv","udomdiff":"Fmvn","./utils.js":"AYZM"}],"PQw8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unroll=exports.createCache=exports.Hole=void 0;var e=require("@webreflection/mapset"),t=o(require("@webreflection/uparser")),r=require("@webreflection/uwire"),n=require("./handlers.js"),s=require("./utils.js");function o(e){return e&&e.__esModule?e:{default:e}}const l=e=>{const t=[];let{parentNode:r}=e;for(;r;)t.push(s.indexOf.call(r.childNodes,e)),e=r,({parentNode:r}=e);return t},a="isµ",u=new e.WeakMapSet,i=/^(?:textarea|script|style|title|plaintext|xmp)$/,c=()=>({stack:[],entry:null,wire:null});exports.createCache=c;const p=(e,t)=>{const{content:r,updates:n}=h(e,t);return{type:e,template:t,content:r,updates:n,wire:null}},d=(e,r)=>{const n="svg"===e,o=(0,t.default)(r,"isµ",n),a=(0,s.createContent)(o,n),u=(0,s.createTreeWalker)(a,129),c=[],p=r.length-1;let d=0,h=`isµ${d}`;for(;d<p;){const e=u.nextNode();if(!e)throw`bad template: ${o}`;if(8===e.nodeType)e.data===h&&(c.push({type:"node",path:l(e)}),h=`isµ${++d}`);else{for(;e.hasAttribute(h);)c.push({type:"attr",path:l(e),name:e.getAttribute(h)}),e.removeAttribute(h),h=`isµ${++d}`;i.test(e.localName)&&e.textContent.trim()===`\x3c!--${h}--\x3e`&&(e.textContent="",c.push({type:"text",path:l(e)}),h=`isµ${++d}`)}}return{content:a,nodes:c}},h=(e,t)=>{const{content:r,nodes:o}=u.get(t)||u.set(t,d(e,t)),l=(0,s.importNode)(r,!0);return{content:l,updates:o.map(n.handlers,l)}},x=(e,{type:t,template:n,values:s})=>{const o=f(e,s);let{entry:l}=e;l&&l.template===n&&l.type===t||(e.entry=l=p(t,n));const{content:a,updates:u,wire:i}=l;for(let r=0;r<o;r++)u[r](s[r]);return i||(l.wire=(0,r.persistent)(a))};exports.unroll=x;const f=({stack:e},t)=>{const{length:r}=t;for(let n=0;n<r;n++){const r=t[n];r instanceof y?t[n]=x(e[n]||(e[n]={stack:[],entry:null,wire:null}),r):(0,s.isArray)(r)?f(e[n]||(e[n]={stack:[],entry:null,wire:null}),r):e[n]=null}return r<e.length&&e.splice(r),r};class y{constructor(e,t,r){this.type=e,this.template=t,this.values=r}}exports.Hole=y;
},{"@webreflection/mapset":"vwZF","@webreflection/uparser":"YE1S","@webreflection/uwire":"c2kc","./handlers.js":"fkRO","./utils.js":"AYZM"}],"SNC7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Hole",{enumerable:!0,get:function(){return t.Hole}}),exports.svg=exports.render=exports.html=void 0;var e=require("@webreflection/mapset"),t=require("./rabbit.js");const r=r=>{const n=new e.WeakMapSet;return Object.assign((e,...n)=>new t.Hole(r,e,n),{for(o,s){const l=n.get(o)||n.set(o,new e.MapSet);return l.get(s)||l.set(s,(e=>(n,...o)=>(0,t.unroll)(e,{type:r,template:n,values:o}))((0,t.createCache)()))},node:(e,...n)=>(0,t.unroll)((0,t.createCache)(),new t.Hole(r,e,n)).valueOf()})},n=new e.WeakMapSet,o=(e,r)=>{const o="function"==typeof r?r():r,s=n.get(e)||n.set(e,(0,t.createCache)()),l=o instanceof t.Hole?(0,t.unroll)(s,o):o;return l!==s.wire&&(s.wire=l,e.replaceChildren(l.valueOf())),e};exports.render=o;const s=r("html");exports.html=s;const l=r("svg");exports.svg=l;
},{"@webreflection/mapset":"vwZF","./rabbit.js":"PQw8"}],"mluS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"HTML",{enumerable:!0,get:function(){return e.html}}),Object.defineProperty(exports,"SVG",{enumerable:!0,get:function(){return e.svg}}),exports.Nanny=exports.default=t,Object.defineProperty(exports,"html",{enumerable:!0,get:function(){return e.html}}),Object.defineProperty(exports,"svg",{enumerable:!0,get:function(){return e.svg}});var e=require("uhtml");function t(t,a=window.location.pathname){const r=t.Routes||[];(t={...t,...t.Calculate?t.Calculate(t):{}}).Evaluate=(()=>({...t})),t.JSON=(()=>JSON.stringify(t)),t.HTML=e.html,t.SVG=e.svg,t.Update=((e,a=!0)=>(t.Before&&(t={...t,...t.Before(t)}),(t={...t,..."function"==typeof e?e(t):e,...t.Calculate?t.Calculate({...t,..."function"==typeof e?e(t):e}):{}}).After&&(t={...t,...t.After(t)}),t.LocalStorageKey&&localStorage.setItem(t.LocalStorageKey,JSON.stringify(t)),t.Debug&&console.log(t.JSON()),a&&n(),t));const o=e=>("/"===e?["/"]:e.split("/").filter(e=>""!==e)).reduce((e,t)=>{const a=e.routes.find(e=>":"===e.path[0]);return e.routes.find(e=>e.path===t)?{...e.routes.find(e=>e.path===t),params:e.params}:{...a,params:{...e.params,[a.path.slice(1)]:t}}},{routes:r});function n(){if(r.length){const e=o(a);document.title=e.title||document.title,e.update&&(t={...t,...e.params?e.update(e.params)(t):e.update(t)}),e.view&&(t.Content=e.view(t))}(0,e.render)(t.Element||document.body,t.View(t))}return t.LocalStorageKey&&localStorage.getItem(t.LocalStorageKey)&&(t={...t,...JSON.parse(localStorage.getItem(t.LocalStorageKey))}),r.length&&(t.Link=(e=>t=>{t.preventDefault(),a=e||t.target.attributes.href.value,window.history.pushState({Path:a},a,`${a}`),n()}),window.addEventListener("popstate",e=>{a=window.location.pathname,n()})),t.Initiate&&(t={...t,...t.Initiate(t)}),n(),t.Debug&&console.log(t.JSON()),t.Update}
},{"uhtml":"SNC7"}],"FZVW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.zip=exports.unique=exports.takeRange=exports.take=exports.tail=exports.sum=exports.stepRange=exports.sort=exports.shuffle=exports.reverse=exports.replicate=exports.replaceAt=exports.replace=exports.removeAt=exports.remove=exports.range=exports.product=exports.prepend=exports.min=exports.max=exports.last=exports.isEqual=exports.isEmpty=exports.insert=exports.init=exports.first=exports.drop=exports.default=exports.cycle=exports.combine=exports.append=exports.alphaRange=void 0;const e=(e,t,s=1)=>[...Array(Math.floor(t/s))].map((t,r)=>e+r*s).filter(e=>e<=t);exports.range=e;const t=(e,t,s=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"])=>s.slice(s.indexOf(e),s.indexOf(t)+1);exports.alphaRange=t;const s=(e,t,s)=>[...Array(Math.floor(t/s))].map((e,t)=>(t+1)*s);exports.stepRange=s;const r=(e,t,s)=>[...Array(s)].map((s,r)=>e+r*(t-e));exports.takeRange=r;const o=(e,t)=>[...Array(t)].map(t=>e);exports.replicate=o;const p=(e,t)=>[...Array(t)].flatMap(t=>e).filter((e,s)=>s<t);exports.cycle=p;const n=e=>[...e].reverse();exports.reverse=n;const a=e=>[...e].sort((e,t)=>e-t);exports.sort=a;const x=e=>e.reduce((e,t)=>e+t,0);exports.sum=x;const c=e=>e.reduce((e,t)=>e*t);exports.product=c;const l=e=>0===e.length;exports.isEmpty=l;const i=e=>e[0];exports.first=i;const m=e=>e[e.length-1];exports.last=m;const u=e=>Math.max(...e);exports.max=u;const f=e=>Math.min(...e);exports.min=f;const d=(e,t,s)=>[...e.slice(0,t),s,...e.slice(t+1,e.length)];exports.replaceAt=d;const h=(e,t,s)=>e.map(e=>e===t?s:e);exports.replace=h;const g=(e,t,s)=>[...e.slice(0,t),s,...e.slice(t,e.length)];exports.insert=g;const v=(e,t)=>[...e,t];exports.append=v;const y=(e,t)=>[t,...e];exports.prepend=y;const A=(e,t)=>e.filter(e=>e!==t);exports.remove=A;const M=(e,t)=>e.filter((e,s)=>s!==t);exports.removeAt=M;const R=e=>e.slice(0,e.length-1);exports.init=R;const k=e=>e.slice(1,e.length);exports.tail=k;const q=(e,t)=>e.slice(0,t);exports.take=q;const E=(e,t)=>e.slice(t);exports.drop=E;const b=e=>[...new Set(e)];exports.unique=b;const z=(e,t)=>e.filter((e,s)=>e===t[s]).length===e.length;exports.isEqual=z;const O=(e,t,s)=>e.map(e=>t.map(t=>s(e,t))).flat();exports.combine=O;const j=(e,t)=>e.map((e,s)=>t[s]?[e,t[s]]:null).filter(Boolean);exports.zip=j;const w=e=>{const t=[...e];for(let s,r=t.length-1;r;r--)s=Math.floor(Math.random()*(r+1)),[t[r],t[s]]=[t[s],t[r]];return t};exports.shuffle=w;const B={range:e,alphaRange:t,takeRange:r,replicate:o,cycle:p,reverse:n,sort:a,sum:x,product:c,isEmpty:l,first:i,last:m,max:u,min:f,replaceAt:d,replace:h,insert:g,append:v,prepend:y,remove:A,removeAt:M,init:R,tail:k,take:q,drop:E,unique:b,isEqual:z,combine:O,zip:j,shuffle:w};var P=B;exports.default=P;
},{}],"ogrC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{question:"While travelling at the correct speed limit, another driver attempts to overtake you. What should you do?",answers:["Nothing, let them overtake.","Shout at them and stick 2 fingers up as they pass","Take their details and report them to the Police."]},{question:"On a long motorway journey, you're feeling sleepy. What should you do?",answers:["Leave the motorway, then stop and rest.","Drive faster so you get to your destination faster.","Pull up on the hard shoulder, put your sleep socks on and have a nap."]},{question:"You forget to put your glasses on to drive. What should you do?",answers:["Not drive until you get your glasses.","Drive to Barnard Castle to test your eyesight.","Just squint and drive a bit slower than usual."]},{question:"On a motorway, what is the purpose of the right hand lane?",answers:["For overtaking.","A place to stop if you break down or need a rest.","For driving as fast as possible."]},{question:"You are approaching a zebra crossing and some pedestrians are waiting to cross, what do you do?",answers:["Slow down and prepare to stop.","Flash your lights and wave to them so they hurry up and cross.","Speed up so they jump out of the way to avoid getting smushed."]},{question:"Excessive or uneven tyre wear can be caused by what?",answers:["Faulty suspension.","Giving too many lifts to fat people.","Driving in reverse too often."]},{question:"While driving down a main road, a car pulls out from a side street right in front of you, what do you do?",answers:["Slow down and prepare to stop.","Beep them and flash your lights and swear excessively loudly at them.","Catch up to them at the next set of traffic lights and challenge them to a race."]},{question:"While driving in slippery and wet conditions, how much of a gap should you leave betwen you and the vehicle in front?",answers:["A four second gap.","You should be close enough that they can see you in their rearview mirror.","Why are you even behind them? Overtake as soon as possible."]},{question:"While driving in the dark, on a clear night, with oncoming traffic, which lights should you use?",answers:["Dipped headlights.","Full beam headlights.","No lights at all."]},{question:"The driver behind is following very closely, what should you do?",answers:["Slow down and increase the gap between you and the car in front."," Speed up to increase the gap between you and the car behind.","Slam your brakes on so they smush into the back of you."]},{question:"When driving in icy conditions, what should you do?",answers:["Drive in the highest gear possible.","Drive as fast as possible.","Use the handbrake to skid round corners."]},{question:"What makes a road a dual carriageway?",answers:["It has two a central reservation.","You're allowed to drive as fast as you like.","It has two lanes."]},{question:"What is the maximum speed limit on a motoway if you are towing a trailer?",answers:["60mph.","50mph.","You're not allowed to tow a trailer on the motorway."]},{question:"When are you allowed to drive on the pavement?",answers:["To drive into a property.","Any time you want to smush some pedestrians.","To get round another vehicle on a single carriagway."]},{question:"Who are diamond-shaped signs for?",answers:["Tram drivers only.","Everybody needs to follow the signs.","Nobody - signs are for idiots."]},{question:"What should you do if a farmer herding sheep asks you to stop?",answers:["Stop and switch off your engine.","Ignore them and play dodgems with the sheep.","Beep your horn until the sheep have moved."]},{question:"You are driving at the speed limit and another driver drives up quickly behind you and flashes their lights. What should you do?",answers:["Let them pass.","Slow down and don't let them pass.","Speed up and don't let them pass."]},{question:"Which emergency vehicle is fitted with a green flashing light?",answers:["A doctor's car.","Ambulances on the way to a hospital.","Feminist Emergency Trucks."]},{question:"There is a bus lane on your left. There are no times of operation dispalyed, when can you drive in it?",answers:["Never. It's for busses only at all times.","After 6pm.","Any time, as long as you have passengers like a bus."]},{question:"What should you do when overtaking a horse and rider?",answers:["Drive past slowly and carefully, leaving plenty of room.","Beep your horn and shout at them until they move out of the way.","Go past as fast as possible, shouting 'Yeehaw!'"]},{question:"When following another vehicle on an unlit road at night, what should you do?",answers:["Use dipped headlights.","Turn your lights off so you don't dazzle them.","Put your lights on full beam so they can see you."]},{question:"When you come up to a mini-roundabout, what shoud you do?",answers:["Give way to other vehicles on the right.","Give way to other vehicles on the left.","Drive straight over the middle of the roundabout."]},{question:"You want to reverse into a side road, but you're not sure if it's clear, what should you do?",answers:["Dont' be lazy - get out of the car and check.","Use your rearview and side mirrors to check if it's clear.","Just reverse into the street anyway - anybody in the way will move when they see you coming."]},{question:"What could happen if you leave your fog lights on when it's not foggy?",answers:["You could get pulled over by the police for breaking the law.","The lights might run out and be no use next time it's foggy.","The engine will lose power because the lights are on for too long."]},{question:"While driving on a busy main road, you realise you are driving in the wrong direction, what should you do?",answers:["Pull into a side road and turn around.","Slam the car in reverse and drive the way you want to go, but backwards.","Immediately execuate a 3-point turn in the middle of the road."]},{question:"What difference will having a roof rack on your car make?",answers:["It will increase your car's fuel consumption.","It will make your car go slower.","It means you can carry a canoe, even if it looks a bit silly."]},{question:"What difference will having a roof rack on your car make?",answers:["It will increase your car's fuel consumption.","It will make your car go slower.","It will decrease your car's chance of being involved in an accident."]},{question:"When turning left into a side road, what should you look out for the most?",answers:["That you don't smush any pedestrians.","You don't smash the wing mirrors off any parked cars.","You don't accidently bump your car over the curb."]},{question:"You are driving down a steep hill, what should you look out for the most?",answers:["Drive in a low gear and apply the brakes carefully.","Drive as fast as you can and as close as possible to the car in front.","Take the car out of gear and 'cruise' to save petrol consumption."]},{question:"As you are driving, you see a bus stopped at a bus stop ahead. What should you do?",answers:["Slow down and be ready to give way to the bus if it pulls out.","Accelerate past the bus, being careful not so smush any passengers as they get off.","Stop behind the bus and wait for it to leave."]},{question:"You are approaching a roundabout and see a pedestrian about to cross, who should give way?",answers:["You, pedestrains annoyingly always have the right of way.","It depends who was there first.","The pedestrian should give way, they will clearly come off worse if they get hit by a car."]},{question:"If you have to slow down suddenly on a motorway because of a hazard, what should you do to warn other drivers?",answers:["Turn on your hazard warning lights.","Beep your horn and flash your headlights.","There's no need to warn them, they'll see the hazard themselves."]},{question:"When driving through a flooded area, what should you do?",answers:["Test your brakes as soon as possible.","Get out of the car and swim.","Drive faster to splash pedestrians as much as possible."]},{question:"When does a new car need an MOT certificate?",answers:["Three years after purchase.","One year after purchase.","Before it is sold to somebody else."]},{question:"What is the national speed limit on the outside lane of a motorway?",answers:["70mph.","100mph.","You can drive as fast as you like in the outside lane."]},{question:"What should the left-hand lane of the motorway be used for?",answers:["Driving like a normal person.","It's should only be used by slow drivers and lorries.","It is reserved cars about to leave the motorway at the next junction."]},{question:"If you are involved in a traffic accident, what is the first thing you should you do?",answers:["Stop and wait at the scene.","Get away from the scene as quickly as possible.","Phone your insurance company and say you have whiplash."]},{question:"You are stuck behind a cyclist at traffic lights. What should you do when the lights change?",answers:["Give the cyclist lots of time and room to move.","Beep your horn to make sure they know the lights have changed and get moving quickly.","Drive around them quickly to make sure you get through the lights."]},{question:"A police officer flashes their headlights at you and points left, what should you do?",answers:["Pull over as soon as possible.","Wave back at them.","Turn left at the next junction."]},{question:"You are driving behind a large truck and it indicates right, but starts to move left, what should you do?",answers:["Slow down and give it time to turn.","Beep your horn to alert them they are moving the wrong way.","Overtake them quickly so you're not in the way."]},{question:"How many years do you need to have held a full driving license before you can supervise learner drivers?",answers:["Three years.","Five years.","You can supervise learner drivers as soon as you've passed your test."]},{question:"If you are overtaking a motorcyclist in strong winds what should you do?",answers:["Give as wide a berth as possible as you breeze by.","Breeze past as fast as possible to minimise the time it takes.","Breeze past as close to the motorcylist as possible."]},{question:"When approaching an unmarked crossroads, who has right of way?",answers:["Nobody, so be prepared to stop and give way.","Whichever vehicle gets there first.","The biggest vehicle."]},{question:"It is miffing it down on the motorway and visibility is bad, what should you do?",answers:["Turn on your dipped headlights.","Turn on your fog lights.","Drive as fast as possible to make lots of water spray up."]},{question:"Your mobile phone rings while you're driving. When is it okay to answer?",answers:["When you have pulled over and stopped the engine.","If it's an important call from your Mum or Dad.","If there are no other vehicles on the road."]},{question:"What must you do if you want to park on a 40mph road at night?",answers:["Park on the left with your parking lights on.","Park on the right with your parking lights on.","Park on any side with no lights on."]},{question:"When driving in good and dry conditions, how far away from the car in front should you be?",answers:["Two seconds.","You should be as close as possible as it is more fuel efficient.","Two car lengths."]},{question:"While driving on a main road, a car cuts right in front of you. What should you do?",answers:["Slow down to increase the distance between you and them.","Overtake them at the next opportunity.","Beep your horn at them and flash your lights to make sure they know you're there."]},{question:"Which of the following vehicles use a blue flashing light?",answers:["Bomb disposal vehicle.","Motorway maintenance vehicle.","Snow ploughs."]},{question:"You're being followed by an ambulance with blue flashing lights, what should you do?",answers:["Pull over as soon as it's safe to do so.","Slam on the brakes and stop as soon as possible.","Drive faster and try and outrun it."]},{question:"You're travelling along this narrow country road. How should you pass the cyclist?",answers:["Leave plenty of room as you pass.","Beep your horn at them so they know you're there.","Go past as quickly as possibly so they know you are the faster vehicle."]},{question:"What should you do before stopping?",answers:["Check your mirrors and signal.","Beep your horn three times.","Take the car out of gear."]},{question:"What should you do when you're approaching traffic lights that have been on green for some time?",answers:["Be ready to stop.","Accelerate towards them to make sure you make it through.","Slam your brakes on in case they change."]},{question:"Why should you never wave people across at pedestrian crossings?",answers:["Another vehicle might be coming and smush them.","Why are you letting them go? If you have right of way, take it.","They might think you're trying to make friends with them."]},{question:"What's the purpose of road humps, chicanes and narrowings?",answers:["To slow traffic down in congested areas.","To make driving as frustrating as possible.","To damage your car's suspension."]},{question:"How does old age affect an drivers's driving ability?",answers:["Their reactions slow down as they get older.","Older drivers are far superior - especially drivers in their forties.","They get annoyed at the smallest things and shout abuse at younger drivers."]},{question:"What should you do if you want to overtake a tractor but aren't sure that it's safe?",answers:["Wait behind it if you're not sure.","Keep beeping your horn until it pulls over.","Speed round it quickly, it's only a tractor and goes about 3mph."]},{question:"What does this sign mean?",image:"minspeed.gif",answers:["End of minimum speed limit.","Don't drive over 30mph.","No slow coaches allowed - make sure you drive faster than 30mph."]},{question:"What does this sign mean?",image:"pedestrians.jpeg",answers:["Warning - people may be walking in the road.","Warning - children are sometimes abducted in this area.","OG holding hands with Tommy Shelby."]},{question:"What does this sign mean?",image:"vehicles.jpeg",answers:["No vehicles allowed.","Warning - flying motorbikes in the area.","Only cars and motorbikes allowed on this road."]}],o=e;exports.default=o;
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e,t,n,r,o,s,i=c(require("nanny-state")),a=require("jog-list"),u=c(require("./questions.js"));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return v(e)||y(e)||h(e)||m()}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}function y(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function v(e){if(Array.isArray(e))return q(e)}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=new Audio("../sounds/vroom.wav"),w=new Audio("../sounds/screech.wav"),O=new Audio("../sounds/horn.wav"),j=function(i){var c,f,d=function(e){return function(t){O.play(),i.Update(p(p({},N),{},{questions:e?(0,a.shuffle)(u.default.filter(function(e,t){return i.mistakes.includes(t)})):(0,a.shuffle)(u.default)}))}};return i.HTML(e||(e=l(['\n<h1><span class="JOG"><span class="J">J</span>O<span class="G">G</span></span> Driving Schoo<span id="L-plate">l</span></h1>\n<div id="game">\n<h2 id="score">Score: ',"</h2>\n",'\n<div id="car" style=','></div>\n</div>\n<footer>\n  <p>Another beatifully unconventional <span class="JOG"><span class="J">J</span>O<span class="G">G</span></span> production made with 💜 in <a href="https://github.com/daz4126/Nanny-State" title="Nanny State">Nanny State</a>.</p>\n  <p><small><a href="https://www.flaticon.com/free-icons/car" title="car icons">Car icons created by DinosoftLabs - Flaticon</a></small></p>\n  </footer>'])),i.score,i.questionNumber<i.questions.length&&i.questionNumber<10?i.HTML(t||(t=l(['<p id="question">',") ","",'</p>\n<div id="answers">\n','   \n</div>\n<h2 id="fredback">',"</h2>\n"])),i.questionNumber+1,i.questions[i.questionNumber].question,i.questions[i.questionNumber].image?i.HTML(n||(n=l(["<img src=",' alt="road sign">'])),"../images/".concat(i.questions[i.questionNumber].image)):"",(0,a.shuffle)(i.questions[i.questionNumber].answers).map(function(e){return i.HTML(r||(r=l(["<button onclick=",">","</button>"])),function(e){return function(t){console.log(i.questions.length);var n=e===i.questions[i.questionNumber].answers[0],r=u.default.findIndex(function(e){return e.question===i.questions[i.questionNumber].question});n?(g.play(),setTimeout(function(e){g.pause(),g.currentTime=0},1950)):(w.play(),setTimeout(function(e){w.pause(),w.currentTime=0},1e3)),i.Update({score:n?i.score+1:i.score,fredback:n?"Correct!":"Wrong!",questionNumber:i.questionNumber+1,mistakes:n?i.mistakes.filter(function(e,t){return t!==r}):[].concat(b(i.mistakes),[r])})}}(e),e)}),i.fredback):i.HTML(o||(o=l(['<div id="game-over">\n      <h2>',"</h2>\n      <h2>Why don't you have another go?</h2>\n    </div>\n<button onclick=",">All Questions</button>\n",""])),(c=i.score,f=i.questionNumber,c/f<.2?"Oh dear, you'd probably manage to crash in a stationary vehicle":c/f<.6?"Not great, you should stick to Mario Kart":c/f<1?"Not bad, you probably won't smush into anyone at least":"Yeehaw! You're practically an F1 driver!"),d(!1),i.mistakes.length?i.HTML(s||(s=l(["<button onclick=",">Practice Your Mistakes</button>"])),d(!0)):""),"left: ".concat(i.screenSize/10*i.score,"px"))},N={questions:(0,a.shuffle)(u.default),score:0,questionNumber:0,mistakes:[],screenSize:window.innerWidth,fredback:"Hope this helps you smush your theory OG! xx",View:j};(0,i.default)(N);
},{"./styles.css":"D9Nj","nanny-state":"mluS","jog-list":"FZVW","./questions.js":"ogrC"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-bwo8hh/src.a69cb424.js.map