/**
 * @copyright  (C) 2019 Open Source Matters, Inc. <https://www.joomla.org>
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */window.customElements.define("joomla-hidden-mail",class extends HTMLElement{constructor(){super(),this.newElement="",this.base=""}disconnectedCallback(){this.innerHTML=""}connectedCallback(){if(this.base=`${this.getAttribute("base")}/`,this.getAttribute("is-link")==="1"?(this.newElement=document.createElement("a"),this.newElement.setAttribute("href",`mailto:${this.constructor.b64DecodeUnicode(this.getAttribute("first"))}@${this.constructor.b64DecodeUnicode(this.getAttribute("last"))}`),[].slice.call(this.attributes).forEach((t,e)=>{const{nodeName:i}=this.attributes.item(e);if(i&&["is-link","is-email","first","last","text"].indexOf(i)===-1){const{nodeValue:s}=this.attributes.item(e);this.newElement.setAttribute(i,s)}})):this.newElement=document.createElement("span"),this.getAttribute("text")){let t=this.constructor.b64DecodeUnicode(this.getAttribute("text"));t=t.replace('src="images/',`src="${this.base}images/`).replace('src="media/',`src="${this.base}media/`),this.newElement.innerHTML=Joomla.sanitizeHtml(t)}else this.newElement.innerText=`${window.atob(this.getAttribute("first"))}@${window.atob(this.getAttribute("last"))}`;this.removeAttribute("class"),this.removeAttribute("style"),this.innerText="",this.appendChild(this.newElement)}static b64DecodeUnicode(t){return decodeURIComponent(Array.prototype.map.call(atob(t),e=>`%${`00${e.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""))}});
