(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const H=globalThis,W=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Q=new WeakMap;let lt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const ut=r=>new lt(typeof r=="string"?r:r+"",void 0,J),R=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new lt(e,r,J)},ft=(r,t)=>{if(W)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Y=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ut(e)})(r):r;const{is:gt,defineProperty:mt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:_t,getOwnPropertySymbols:bt,getPrototypeOf:yt}=Object,j=globalThis,X=j.trustedTypes,vt=X?X.emptyScript:"",At=j.reactiveElementPolyfillSupport,E=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?vt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Z=(r,t)=>!gt(r,t),tt={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&mt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=$t(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const l=i?.call(this);n?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,s=[..._t(e),...bt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Y(i))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:N;this._$Em=i;const l=o.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){const o=this.constructor;if(i===!1&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??Z)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,At?.({ReactiveElement:A}),(j.reactiveElementVersions??=[]).push("2.1.2");const F=globalThis,et=r=>r,T=F.trustedTypes,st=T?T.createPolicy("lit-html",{createHTML:r=>r}):void 0,ct="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+g,xt=`<${ht}>`,y=document,C=()=>y.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",K=Array.isArray,wt=r=>K(r)||typeof r?.[Symbol.iterator]=="function",I=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,rt=/>/g,$=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,ot=/"/g,dt=/^(?:script|style|textarea|title)$/i,St=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=St(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),at=new WeakMap,b=y.createTreeWalker(y,129);function pt(r,t){if(!K(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const Et=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=S;for(let l=0;l<e;l++){const a=r[l];let h,p,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===S?p[1]==="!--"?o=it:p[1]!==void 0?o=rt:p[2]!==void 0?(dt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=$):p[3]!==void 0&&(o=$):o===$?p[0]===">"?(o=i??S,c=-1):p[1]===void 0?c=-2:(c=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?$:p[3]==='"'?ot:nt):o===ot||o===nt?o=$:o===it||o===rt?o=S:(o=$,i=void 0);const f=o===$&&r[l+1].startsWith("/>")?" ":"";n+=o===S?a+xt:c>=0?(s.push(h),a.slice(0,c)+ct+a.slice(c)+g+f):a+g+(c===-2?l:f)}return[pt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[h,p]=Et(t,e);if(this.el=O.createElement(h,s),b.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=b.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ct)){const u=p[o++],f=i.getAttribute(c).split(g),M=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:M[2],strings:f,ctor:M[1]==="."?Pt:M[1]==="?"?Ot:M[1]==="@"?Ut:D}),i.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(dt.test(i.tagName)){const c=i.textContent.split(g),u=c.length-1;if(u>0){i.textContent=T?T.emptyScript:"";for(let f=0;f<u;f++)i.append(c[f],C()),b.nextNode(),a.push({type:2,index:++n});i.append(c[u],C())}}}else if(i.nodeType===8)if(i.data===ht)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:n}),c+=g.length-1}n++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function w(r,t,e=r,s){if(t===x)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const n=P(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=w(r,i._$AS(r,t.values),i,s)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??y).importNode(e,!0);b.currentNode=i;let n=b.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new U(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new kt(n,this,t)),this._$AV.push(h),a=s[++l]}o!==a?.index&&(n=b.nextNode(),o++)}return b.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(pt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new Ct(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new O(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new U(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=et(t).nextSibling;et(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const l=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=w(this,l[s+a],e,a),h===x&&(h=this._$AH[a]),o||=!P(h)||h!==this._$AH[a],h===d?t=d:t!==d&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ot extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ut extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===x)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const Mt=F.litHtmlPolyfillSupport;Mt?.(O,U),(F.litHtmlVersions??=[]).push("3.3.2");const Ht=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=e?.renderBefore??null;s._$litPart$=i=new U(t.insertBefore(C(),n),n,void 0,e??{})}return i._$AI(r),i};const G=globalThis;class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}}m._$litElement$=!0,m.finalized=!0,G.litElementHydrateSupport?.({LitElement:m});const Nt=G.litElementPolyfillSupport;Nt?.({LitElement:m});(G.litElementVersions??=[]).push("4.2.2");const z=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};const Tt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:Z},Rt=(r=Tt,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,r,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,r,!0,l)}}throw Error("Unsupported decorator location: "+s)};function jt(r){return(t,e)=>typeof e=="object"?Rt(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}function L(r){return jt({...r,state:!0,attribute:!1})}var Dt=Object.getOwnPropertyDescriptor,zt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Dt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(i)||i);return i};let B=class extends m{render(){return _`
      <div class="ring-container">
        <div class="glowing-ring"></div>
        <section class="hero">
          <h1 class="title">Italia JS</h1>
          <p class="slogan">La community JavaScript italiana</p>
          <div class="cta-container">
            <a href="https://discord.com/invite/3cQtvAK9" target="_blank" class="cta-button">
             <svg class="discord-icon" width="40" height="40" viewBox="0 0 127.14 96.36" fill="white">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg> 
              <span>Unisciti a Discord</span>
            </a>
          </div>
        </section>
      </div>
    `}};B.styles=R`
    :host {
      display: block;
      text-align: center;
      padding: 0; /* Removed padding to help with height */
      position: relative;
    }

    .ring-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem 1rem; /* Reduced padding */
    }

    .glowing-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 450px; /* Slightly smaller */
      height: 450px;
      border-radius: 50%;
      border: 2px solid rgba(189, 0, 255, 0.3);
      box-shadow: 0 0 50px rgba(189, 0, 255, 0.2), inset 0 0 50px rgba(189, 0, 255, 0.2);
      z-index: -1;
      pointer-events: none;
    }
    
    .glowing-ring::before {
       content: '';
       position: absolute;
       inset: -2px;
       border-radius: 50%;
       background: conic-gradient(from 0deg, transparent, rgba(189, 0, 255, 0.8), transparent 60%);
       animation: spin 10s linear infinite;
       mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
       -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
       mask-composite: exclude;
       -webkit-mask-composite: xor;
       padding: 2px;
    }

    @media (max-width: 600px) {
      .glowing-ring {
        width: 300px;
        height: 300px;
      }
    }

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      z-index: 1;
    }

    .title {
      font-size: 5rem;
      font-weight: 800;
      margin: 0;
      background: linear-gradient(90deg, #60a5fa, #c084fc, #f472b6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      line-height: 1.1;
      letter-spacing: -2px;
      filter: drop-shadow(0 0 20px rgba(192, 132, 252, 0.4));
    }
    
    @media (min-width: 768px) {
      .title {
        font-size: 7rem;
      }
    }

    .slogan {
      font-size: 1.5rem;
      color: #e2e8f0;
      opacity: 0.9;
      margin: 0;
      font-weight: 300;
      letter-spacing: 0.5px;
    }

    .cta-container {
      margin-top: 2rem;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem; /* Space between icon and text */
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
      color: white;
      padding: 0.75rem 2rem; /* Adjusted padding */
      border-radius: 50px;
      font-size: 1.25rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.3);
      animation: pulse-glow 2s infinite ease-in-out;
    }

    .cta-button:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 0 40px rgba(6, 182, 212, 0.9);
      filter: brightness(1.2);
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse-glow {
      0% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); }
      50% { box-shadow: 0 0 35px rgba(6, 182, 212, 0.9); }
      100% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); }
    }
  `;B=zt([z("hero-section")],B);var Lt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,k=(r,t,e,s)=>{for(var i=s>1?void 0:s?It(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Lt(t,e,i),i};let v=class extends m{constructor(){super(...arguments),this._presenceCount=null,this._memberCount=null,this._loading=!0,this._error=!1}async connectedCallback(){super.connectedCallback(),await this.fetchDiscordStats()}async fetchDiscordStats(){try{const r=await fetch("https://discord.com/api/v9/invites/3cQtvAK9?with_counts=true");if(!r.ok)throw new Error("Failed to fetch stats");const t=await r.json();this._presenceCount=t.approximate_presence_count,this._memberCount=t.approximate_member_count,this._loading=!1}catch(r){console.error(r),this._error=!0,this._loading=!1}}render(){return this._error?_``:_`
      <div class="stats-card">
        ${this._loading?_`<div class="loading">In caricamento...</div>`:_`
            <div class="stat-section">
              <div class="stat-content">
                <span class="count">${this._memberCount}</span>
                <span class="label">Membri Totali</span>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="stat-section">
              <div class="stat-content">
                <span class="count online">${this._presenceCount}</span>
                <span class="label">Online Ora</span>
              </div>
            </div>
          `}
      </div>
    `}};v.styles=R`
    :host {
      display: block;
      margin: 3rem auto;
      max-width: 600px;
    }

    .stats-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 0;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      position: relative;
    }
    
    /* Simulate the gradient glow at the bottom from the image */
    .stats-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #00ffff, #bd00ff);
      opacity: 0.7;
    }

    .stat-section {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem 3rem;
      flex: 1;
      justify-content: center;
    }

    .discord-icon {
      width: 50px;
      height: auto;
      filter: drop-shadow(0 0 5px rgba(255,255,255,0.5));
    }

    .stat-content {
      display: flex;
      flex-direction: column;
      align-items: center; /* Centered alignment as requested ("always align to each other") */
    }

    .count {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1;
      color: white;
      text-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    
    .count.online {
      color: #00ff88; /* Bright Neon Green */
      text-shadow: 0 0 10px rgba(0, 255, 136, 0.4);
    }

    .label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-top: 0.5rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
      white-space: nowrap; /* Prevent wrapping */
    }

    .divider {
      width: 1px;
      align-self: stretch;
      background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);
    }
    
    .loading {
      padding: 2rem;
      color: white;
      width: 100%;
      text-align: center;
    }

    @media (max-width: 600px) {
      .stats-card {
        flex-direction: column;
      }
      .stat-section {
        width: 100%;
        padding: 1.5rem;
      }
      .divider {
        width: 80%;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
      }
    }
  `;k([L()],v.prototype,"_presenceCount",2);k([L()],v.prototype,"_memberCount",2);k([L()],v.prototype,"_loading",2);k([L()],v.prototype,"_error",2);v=k([z("discord-stats")],v);var Bt=Object.getOwnPropertyDescriptor,qt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Bt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(i)||i);return i};let q=class extends m{render(){return _`
      <footer>
        <div class="links">
          <a href="https://twitter.com/italia_js" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/italia-js" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://github.com/italia-js/code-of-conduct" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Italia JS
        </div>
      </footer>
    `}};q.styles=R`
    :host {
      display: block;
      margin-top: auto;
      padding: 2rem 0;
      border-top: 1px solid rgba(128, 128, 128, 0.1);
    }

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .links {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      opacity: 0.7;
      transition: opacity 0.2s;
    }

    a:hover {
      opacity: 1;
      color: var(--primary-color);
    }

    .copyright {
      font-size: 0.875rem;
      opacity: 0.5;
    }
  `;q=qt([z("footer-section")],q);var Vt=Object.getOwnPropertyDescriptor,Wt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Vt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(i)||i);return i};let V=class extends m{render(){return _`
      <main>
        <hero-section></hero-section>
        <discord-stats></discord-stats>
      </main>
      <footer-section></footer-section>
    `}};V.styles=R`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
      box-sizing: border-box;
      width: 100%;
      padding-top: 5vh; /* Added top spacing */
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center; /* Center vertically */
      align-items: center;
      gap: 1rem; /* Reduced gap */
    }
  `;V=Wt([z("italia-js")],V);
