(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7844672f"],{"1bba":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"main"},n._l(5,(function(e){return t("div",{key:e,staticClass:"items"},[n._v(n._s(e))])})),0)},r=[],c=(t("a15b"),t("d4ec"),t("bee2"),function(n){n.sound()}),u=function n(){n.prototype.sound=function(){console.log("嘎嘎嘎")}},a=function n(){n.prototype.sound=function(){console.log("咯咯咯")}},i=function n(){n.prototype.sound=function(){console.log("汪汪汪")}},f=function(n){n.show instanceof Function&&n.show()},s={show:function(){console.log("百度地图")}},l=function(){var n="sven";return{getName:function(){return n}}},d=function(){var n={},e=function(){for(var n=1,e=0,t=arguments.length;e<t;e++)n*=arguments[e];return n};return function(){var t=Array.prototype.join.call(arguments,",");return t in n?n[t]:n[t]=e.apply(null,arguments)}}(),p=function(n){this.receiver=n};p.prototype.execute=function(){this.receiver.open()},p.prototype.undo=function(){this.receiver.close()};var b={makeSound:c,Duck:u,Chicken:a,Dog:i,renderMap:f,baiduMap:s,myObject:l,mult:d},m={name:"demo1",data:function(){return{nodes:""}},mounted:function(){b.makeSound(new b.Duck),b.makeSound(new b.Chicken),b.makeSound(new b.Dog),b.renderMap(b.baiduMap),console.log(b.myObject().getName()),console.log(b.myObject().__name),console.log(b.mult(1,2,3))},methods:{mult:function(){return function(){var n=Array.prototype.join.call(arguments,",");if(n in caches)return caches[n];for(var e=1,t=0,o=arguments.length;t<o;t++)e*=arguments[t];return caches[n]=e}}}},v=m,h=t("2877"),y=Object(h["a"])(v,o,r,!1,null,"d14f0fe2",null);e["default"]=y.exports},"7a82":function(n,e,t){var o=t("23e7"),r=t("83ab"),c=t("9bf2");o({target:"Object",stat:!0,forced:!r,sham:!r},{defineProperty:c.f})},a15b:function(n,e,t){"use strict";var o=t("23e7"),r=t("44ad"),c=t("fc6a"),u=t("a640"),a=[].join,i=r!=Object,f=u("join",",");o({target:"Array",proto:!0,forced:i||!f},{join:function(n){return a.call(c(this),void 0===n?",":n)}})},bee2:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));t("7a82");function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function r(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}},d4ec:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,"a",(function(){return o}))}}]);