(function(){"use strict";function d(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,a(e,n)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},f(e)}function a(e,n){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},a(e,n)}function h(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function s(e,n,i){return h()?s=Reflect.construct.bind():s=function(r,o,p){var c=[null];c.push.apply(c,o);var b=Function.bind.apply(r,c),u=new b;return p&&a(u,p.prototype),u},s.apply(null,arguments)}function m(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function l(e){var n=typeof Map=="function"?new Map:void 0;return l=function(t){if(t===null||!m(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof n<"u"){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return s(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},l(e)}/**
 * @copyright  (C) 2019 Open Source Matters, Inc. <https://www.joomla.org>
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */window.customElements.define("joomla-hidden-mail",function(e){d(n,e);function n(){var t;return t=e.call(this)||this,t.newElement="",t.base="",t}var i=n.prototype;return i.disconnectedCallback=function(){this.innerHTML=""},i.connectedCallback=function(){var r=this;if(this.base=this.getAttribute("base")+"/",this.getAttribute("is-link")==="1"?(this.newElement=document.createElement("a"),this.newElement.setAttribute("href","mailto:"+this.constructor.b64DecodeUnicode(this.getAttribute("first"))+"@"+this.constructor.b64DecodeUnicode(this.getAttribute("last"))),[].slice.call(this.attributes).forEach(function(p,c){var b=r.attributes.item(c),u=b.nodeName;if(u&&["is-link","is-email","first","last","text"].indexOf(u)===-1){var y=r.attributes.item(c),_=y.nodeValue;r.newElement.setAttribute(u,_)}})):this.newElement=document.createElement("span"),this.getAttribute("text")){var o=this.constructor.b64DecodeUnicode(this.getAttribute("text"));o=o.replace('src="images/','src="'+this.base+"images/").replace('src="media/','src="'+this.base+"media/"),this.newElement.innerHTML=Joomla.sanitizeHtml(o)}else this.newElement.innerText=window.atob(this.getAttribute("first"))+"@"+window.atob(this.getAttribute("last"));this.removeAttribute("class"),this.removeAttribute("style"),this.innerText="",this.appendChild(this.newElement)},n.b64DecodeUnicode=function(r){return decodeURIComponent(Array.prototype.map.call(atob(r),function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""))},n}(l(HTMLElement)))})();
