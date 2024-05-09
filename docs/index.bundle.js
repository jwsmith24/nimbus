(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>A});var o=t(354),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: grid;\n  background-color: gray;\n\n  grid-template-columns: 1fr;\n  grid-template-rows: 40px 0.7fr 0.3fr;\n  justify-content: center;\n}\n/* Top bar */\n.menu-bar {\n  display: grid;\n  grid-row: 1/2;\n  grid-column: 1/2;\n\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n\n  height: 40px;\n  background-color: rebeccapurple;\n  font-weight: bold;\n  align-content: center;\n  align-items: center;\n}\n\n#drop-down {\n  padding: 5px;\n  grid-column: 1/2;\n}\n\n#location {\n  grid-column: 2/3;\n  text-align: center;\n}\n/* Current Wx Data */\n.data {\n  grid-row: 2/3;\n  grid-column: 1/2;\n  text-align: center;\n}\n\n/* Forecast cluster */\n\n.forecast {\n  grid-row: 3/4;\n  grid-column: 1/2;\n  text-align: center;\n}\n\n.menu-options {\n  list-style-type: none;\n  position: absolute;\n  top: 50px;\n  left: -30px;\n}\n\n.menu-options > * {\n  background-color: white;\n}\n\n#location-popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 30px;\n  border-radius: 5px;\n}\n\n.location-form {\n  display: grid;\n  width: min-content;\n  justify-self: center;\n  align-self: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(auto-fit, 30px);\n}\n#location-popup h2 {\n  margin-bottom: 18px;\n}\n\n.location-buttons {\n  padding: 18px;\n  display: flex;\n  justify-content: space-evenly;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;CAEC;AACD;EACE,SAAS;AACX;AACA;;;;CAIC;AACD;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;CAEC;AACD;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;CAEC;AACD;;;;EAIE,aAAa;AACf;AACA;;CAEC;AACD;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;CAEC;AACD;;EAEE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,sBAAsB;;EAEtB,0BAA0B;EAC1B,oCAAoC;EACpC,uBAAuB;AACzB;AACA,YAAY;AACZ;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;;EAEhB,kCAAkC;EAClC,uBAAuB;;EAEvB,YAAY;EACZ,+BAA+B;EAC/B,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA,oBAAoB;AACpB;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,qBAAqB;;AAErB;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,0BAA0B;EAC1B,0CAA0C;AAC5C;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,6BAA6B;AAC/B",sourcesContent:["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: grid;\n  background-color: gray;\n\n  grid-template-columns: 1fr;\n  grid-template-rows: 40px 0.7fr 0.3fr;\n  justify-content: center;\n}\n/* Top bar */\n.menu-bar {\n  display: grid;\n  grid-row: 1/2;\n  grid-column: 1/2;\n\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n\n  height: 40px;\n  background-color: rebeccapurple;\n  font-weight: bold;\n  align-content: center;\n  align-items: center;\n}\n\n#drop-down {\n  padding: 5px;\n  grid-column: 1/2;\n}\n\n#location {\n  grid-column: 2/3;\n  text-align: center;\n}\n/* Current Wx Data */\n.data {\n  grid-row: 2/3;\n  grid-column: 1/2;\n  text-align: center;\n}\n\n/* Forecast cluster */\n\n.forecast {\n  grid-row: 3/4;\n  grid-column: 1/2;\n  text-align: center;\n}\n\n.menu-options {\n  list-style-type: none;\n  position: absolute;\n  top: 50px;\n  left: -30px;\n}\n\n.menu-options > * {\n  background-color: white;\n}\n\n#location-popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 30px;\n  border-radius: 5px;\n}\n\n.location-form {\n  display: grid;\n  width: min-content;\n  justify-self: center;\n  align-self: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(auto-fit, 30px);\n}\n#location-popup h2 {\n  margin-bottom: 18px;\n}\n\n.location-buttons {\n  padding: 18px;\n  display: flex;\n  justify-content: space-evenly;\n}\n"],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],s=o.base?c[0]+o.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var d=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var g=r(u,o);o.byIndex=A,e.splice(A,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var c=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n="240bfc06d13fa4a6c479581cad040e61";function e(n){return n-273}const o=document.getElementById("city-name"),r=document.getElementById("states"),a=document.getElementById("country"),i=document.getElementById("update-button"),A=document.getElementById("cancel-button"),c=document.getElementById("location-popup"),s=document.querySelector(".location-form"),l=document.getElementById("change-location");let p;var d=t(72),u=t.n(d),g=t(825),m=t.n(g),f=t(659),C=t.n(f),E=t(56),B=t.n(E),h=t(540),v=t.n(h),y=t(113),b=t.n(y),x=t(208),w={};w.styleTagTransform=b(),w.setAttributes=B(),w.insert=C().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=v(),u()(x.A,w),x.A&&x.A.locals&&x.A.locals,i.addEventListener("click",(t=>{t.preventDefault(),async function(){console.log("hi from update location in location.js"),p=await async function(){const e={city:o.value,state:r.value,country:a.value};return await async function(e){const t=`${e.city},${e.state},${e.country}`,o=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=5&appid=${n}`);console.log("Geo Response: ");const r=await o.json();return console.log(r),{lat:r[0].lat,long:r[0].lon}}(e)}(),async function(t){console.log("LAT: "+t.lat),console.log("LONG: "+t.long);const o=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t.lat}&lon=${t.long}&appid=${n}`);!function(n){const t={currentTemp:Math.round(e(n.main.temp)),highTemp:Math.round(e(n.main.temp_max)),lowTemp:Math.round(e(n.main.temp_min)),feelsLike:Math.round(e(n.main.feels_like)),description:n.weather[0].description};console.log(t)}(await o.json())}(p)}(),c.close()})),A.addEventListener("click",(n=>{n.preventDefault(),s.reset(),c.close()})),l.addEventListener("click",(()=>{c.showModal()}))})()})();
//# sourceMappingURL=index.bundle.js.map