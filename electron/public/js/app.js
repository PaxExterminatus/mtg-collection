(function(t){function e(e){for(var a,i,c=e[0],o=e[1],l=e[2],u=0,h=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var o=r[i];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},s={app:0},n=[];function i(t){return c.p+"js/"+({"chunk.page.about":"chunk.page.about","chunk.page.collection":"chunk.page.collection","chunk.page.exchange":"chunk.page.exchange"}[t]||t)+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=s[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=a);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var l=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(u);var r=s[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){r("cd49"),t.exports=r("4f87")},3455:function(t,e){},"4f87":function(t,e,r){},8385:function(t,e){},cd49:function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"application"},[r("div",{staticClass:"counter-panel"},[t._v(" cards: "+t._s(t.counter.cards)+", "),r("a",{on:{click:t.collection.add}},[t._v("add")])]),r("div",{staticClass:"application-content-box"},[r("nav",{staticClass:"aside-main"},[r("router-link",{attrs:{to:"/"}},[t._v("Adding")]),r("router-link",{attrs:{to:"/collection"}},[t._v("Collection")]),r("router-link",{attrs:{to:"/exchange"}},[t._v("Exchange")]),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("keep-alive",[r("router-view",{staticClass:"application-content"})],1),r("div")],1)])},n=[],i=r("9ab4"),c=r("60a3");let o=class extends c["c"]{get counter(){return{cards:this.$store.state.collection.cards.length}}get collection(){return this.$store.state.collection}};o=Object(i["a"])([c["a"]],o);var l=o,u=l,d=r("2877"),h=Object(d["a"])(u,s,n,!1,null,null,null),v=h.exports,p=r("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page adding"},[r("h1",{staticClass:"title h1"},[t._v("Adding")]),r("div",{staticClass:"form-box adding"},[r("div",{staticClass:"flex-tbl lang"},[r("a",{staticClass:"btn",class:{selected:"en"===t.item.lang},on:{click:function(e){t.item.lang="en"}}},[t._v("EN")]),r("a",{staticClass:"btn",class:{selected:"ru"===t.item.lang},on:{click:function(e){t.item.lang="ru"}}},[t._v("RU")]),r("a",{staticClass:"btn",class:{selected:t.item.foil},on:{click:function(e){t.item.foil=!t.item.foil}}},[t._v("FOIL")]),r("a",{staticClass:"btn to-right"},[t._v("?")])]),r("div",{directives:[{name:"tab-trap",rawName:"v-tab-trap"}],staticClass:"form-line"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.code,expression:"item.code"}],staticClass:"form-input",attrs:{title:"code",tabindex:""},domProps:{value:t.item.code},on:{input:function(e){e.target.composing||t.$set(t.item,"code",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.number,expression:"item.number"}],staticClass:"form-input",attrs:{title:"number",tabindex:""},domProps:{value:t.item.number},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.show(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"arrow-up",void 0,e.key,void 0)?null:t.item.numberPlus(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"arrow-down",void 0,e.key,void 0)?null:t.item.numberMinus(e)}],input:function(e){e.target.composing||t.$set(t.item,"number",e.target.value)}}}),r("a",{staticClass:"btn",attrs:{tabindex:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save(e)},click:t.save}},[t._v("save")])]),t.card?[r("div",{staticClass:"flex-tbl"},[r("dropdown-menu",[r("div",{staticClass:"btn"},[t._v("scryfall")]),r("template",{slot:"menu"},[r("a",{attrs:{target:"_blank",href:t.card.url.scryfall.set}},[t._v("set")]),r("a",{attrs:{target:"_blank",href:t.card.url.scryfall.card}},[t._v("card")])])],2)],1),r("card-information-cmp",{attrs:{card:t.card}})]:t._e()],2)])},f=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-info"},[r("div",{staticClass:"card-images"},[r("img",{staticClass:"card-cover selected",attrs:{src:t.card.images.cover,alt:t.card.name.oracle,title:t.card.name.oracle},on:{click:t.select}}),r("img",{staticClass:"card-cover",attrs:{src:t.card.images.translate,alt:t.card.name.translate,title:t.card.name.translate},on:{click:t.select}})]),r("div",{staticClass:"grid-tbl"},[r("div",[t._v("Release")]),r("div",[t._v(t._s(t.card.releasedDate))]),r("div",[t._v("Set")]),r("div",[t._v(t._s(t.card.set.name)+" ["+t._s(t.card.set.code)+"]")]),r("div",[t._v("Rarity")]),r("div",[t._v(t._s(t.card.rarity))]),r("div",{staticClass:"tbl-row"},[t._v("Translate")]),r("div",[t._v("Имя")]),r("div",[t._v(t._s(t.card.name.translate))]),r("div",[t._v("Тип")]),r("div",[t._v(t._s(t.card.type.translate))]),r("div",[t._v("Текст")]),r("div",{domProps:{innerHTML:t._s(t.card.text.translate)}}),t.card.flavor.translate?[r("div",[t._v("Описание")]),r("div",{domProps:{innerHTML:t._s(t.card.flavor.translate)}})]:t._e(),r("div",{staticClass:"tbl-row"},[t._v("Oracle")]),r("div",[t._v("Name")]),r("div",[t._v(t._s(t.card.name.oracle))]),r("div",[t._v("Type")]),r("div",[t._v(t._s(t.card.type.line))]),r("div",[t._v("Text")]),r("div",{domProps:{innerHTML:t._s(t.card.text.oracle)}}),t.card.flavor.oracle?[r("div",[t._v("Flavor")]),r("div",{domProps:{innerHTML:t._s(t.card.flavor.oracle)}})]:t._e(),r("div",[t._v("Prices")]),r("div",{staticClass:"flex-tbl"},[r("div",[t._v("USD")]),r("div",[t._v(t._s(t.card.prices.usd))]),r("div",[t._v("FOIL")]),r("div",[t._v(t._s(t.card.prices.usd_foil))]),r("div",[t._v("EUR")]),r("div",[t._v(t._s(t.card.prices.eur))]),r("div",[t._v("TIX")]),r("div",[t._v(t._s(t.card.prices.tix))])])],2)])},b=[];let _=class extends c["c"]{select(t){const e=document.querySelectorAll(".card-cover");e.forEach(t=>{t.classList.remove("selected")});const r=t.target;r.classList.add("selected")}};Object(i["a"])([Object(c["b"])()],_.prototype,"card",void 0),_=Object(i["a"])([Object(c["a"])({directives:{},components:{}})],_);var y=_,x=y,k=Object(d["a"])(x,g,b,!1,null,null,null),C=k.exports,w=r("bc3a"),O=r.n(w);class j{constructor(t,e,r=t){this.first=t,this.last=e,this.current=r}}var L=j;r("8385"),r("3455");class T{constructor(t,e,r=t){this.state=new L(t,e,r)}next(t=1){for(let e=0;e<t;e+=1)this.state.current+=1;return this}prev(t=1){for(let e=0;e<t;e+=1)this.state.current-=1;return this}get current(){return this.state.current}get done(){return this.state.current===this.state.last}get value(){const t=this.current;return this.next(),t}[Symbol.iterator](){return{next:()=>{return this.done?{done:this.done}:{value:this.value}}}}}class P extends T{next(t=1){return this.state.current===this.state.last?this.state.current=this.state.first:this.state.current++,this}prev(t=1){return this.state.current===this.state.first?this.state.current=this.state.last:this.state.current--,this}}const S={inserted(t){const e=t.querySelectorAll("[tabindex]"),r=new P(0,e.length-1),a=e[r.current];a.focus(),document.addEventListener("keydown",t=>{if("Tab"===t.key){t.preventDefault(),t.shiftKey?r.prev():r.next();const a=e[r.current];a.focus()}})},update(t,e){}};class N{static get notNumber(){return/[^0-9]/g}static get notLatinLetters(){return/[^a-zA-Z]/g}}class $ extends String{constructor(t){super(),this.str=t}get numbers(){return this.str.replace(N.notNumber,"")||""}get latinLetters(){return this.str.replace(N.notLatinLetters,"")||""}get holdNumbers(){return this.str=this.numbers,this}get holdLetters(){return this.str=this.latinLetters,this}get useSlashNToBr(){return this.str=this.str.replace(/\n/g,"<br>"),this}get getSlashNToBr(){return this.str.replace(/\n/g,"<br>")}get value(){return this.str}}function E(t){return new $(t)}class M{constructor(){this.data={code:"",number:"",type:"card",lang:"ru",foil:!1}}set code(t){this.data.code=" ",this.data.code=E(t).latinLetters.toUpperCase()}get code(){return this.data.code}set number(t){this.data.number=" ",this.data.number=E(t).numbers}get number(){return this.data.number}get type(){return this.data.type}set type(t){this.data.type=t}get lang(){return this.data.lang}set lang(t){this.data.lang=t}get foil(){return this.data.foil}set foil(t){this.data.foil=t}get json(){return this.data}get asNumber(){return+this.number}numberPlus(){this.number=String(this.asNumber+1)}numberMinus(){this.asNumber<=1?this.number="1":this.number=String(this.asNumber-1)}}r("e058"),r("dcfb");class A{constructor(t,e){this.oracle=t,this.translate=e}get images(){return{cover:this.oracle.image_uris.border_crop,translate:this.translate.image_uris.border_crop}}get object(){return this.oracle.object}get name(){return{oracle:this.oracle.name,translate:this.translate.printed_name}}get lang(){return this.oracle.lang}get releasedDate(){return this.oracle.released_at}get set(){return{code:this.oracle.set.toUpperCase(),name:this.oracle.set_name}}get rarity(){return this.oracle.rarity}get type(){return{line:this.oracle.type_line,translate:this.translate.printed_type_line}}get text(){return{oracle:E(this.oracle.oracle_text).getSlashNToBr,translate:E(this.translate.printed_text).getSlashNToBr}}get flavor(){return{oracle:this.oracle.flavor_text,translate:this.translate.flavor_text}}get prices(){return this.oracle.prices}get url(){return{scryfall:{set:this.oracle.scryfall_set_uri,card:this.oracle.scryfall_uri}}}}var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dropdown-menu-cmp",on:{click:t.relay}},[t._t("default"),t.state?r("div",{staticClass:"dropdown-menu"},[t._t("menu")],2):t._e()],2)},D=[];let U=class extends c["c"]{constructor(){super(...arguments),this.state=!1}relay(){this.state=!this.state}};U=Object(i["a"])([Object(c["a"])({directives:{},components:{}})],U);var B=U,H=B,I=Object(d["a"])(H,q,D,!1,null,null,null),R=I.exports;let F=class extends c["c"]{constructor(){super(...arguments),this.item=new M,this.oracle=null,this.translate=null,this.card=null}get collection(){return this.$store.state.collection}show(){const t=`https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}`,e=`https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}+lang:${this.item.lang}`;O.a.get(t).then(t=>{this.oracle=t.data.data[0],this.init()}),O.a.get(e).then(t=>{this.translate=t.data.data[0],this.init()})}save(){this.collection.add(this.item.json)}init(){this.oracle&&this.translate&&(this.card=new A(this.oracle,this.translate))}};F=Object(i["a"])([Object(c["a"])({directives:{tabTrap:S},components:{CardInformationCmp:C,DropdownMenu:R}})],F);var J=F,z=J,K=Object(d["a"])(z,m,f,!1,null,null,null),X=K.exports;a["a"].use(p["a"]);const Z=[{path:"/",name:"home",component:X},{path:"/collection",name:"collection",component:()=>r.e("chunk.page.collection").then(r.bind(null,"95d4"))},{path:"/exchange",name:"exchange",component:()=>r.e("chunk.page.exchange").then(r.bind(null,"5c44"))},{path:"/about",name:"about",component:()=>r.e("chunk.page.about").then(r.bind(null,"fa0e"))}],G=new p["a"]({mode:"history",base:"/",routes:Z});var Q=G,V=r("2f62"),W=r("675f");class Y{constructor(){this.cards=[]}load(){O.a.get("http://localhost:9990/api/collection").then(t=>{it.commit("collection.load",t.data.cards)})}add(t){O.a.post("http://localhost:9990/api/collection",t).then(e=>{it.commit("collection.add",t)})}}class tt{constructor(){this.collection=new Y,this.collection.load()}}class et extends W["b"]{}class rt extends W["a"]{}class at extends W["d"]{["collection.load"](t){this.state.collection.cards=t}["collection.add"](t){this.state.collection.cards.push(t)}}var st=new W["c"]({state:tt,getters:et,mutations:at,actions:rt});a["a"].use(V["b"]);const nt=Object(W["e"])(st);var it=nt;a["a"].config.productionTip=!1,new a["a"]({router:Q,store:it,render:t=>t(v)}).$mount("#app")},dcfb:function(t,e){},e058:function(t,e){}});
//# sourceMappingURL=app.js.map