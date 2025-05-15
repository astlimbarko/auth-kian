(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Wn=globalThis||void 0||self;/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ou(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const qe={},Si=[],An=()=>{},aE=()=>!1,ja=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),au=t=>t.startsWith("onUpdate:"),pt=Object.assign,cu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cE=Object.prototype.hasOwnProperty,Fe=(t,e)=>cE.call(t,e),de=Array.isArray,Ci=t=>lo(t)==="[object Map]",Qi=t=>lo(t)==="[object Set]",wf=t=>lo(t)==="[object Date]",Ee=t=>typeof t=="function",at=t=>typeof t=="string",kn=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",sg=t=>(Ke(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),og=Object.prototype.toString,lo=t=>og.call(t),lE=t=>lo(t).slice(8,-1),ag=t=>lo(t)==="[object Object]",lu=t=>at(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bs=ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uE=/-(\w)/g,rn=qa(t=>t.replace(uE,(e,n)=>n?n.toUpperCase():"")),hE=/\B([A-Z])/g,oi=qa(t=>t.replace(hE,"-$1").toLowerCase()),Ha=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),$c=qa(t=>t?`on${Ha(t)}`:""),mr=(t,e)=>!Object.is(t,e),Go=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fE=t=>{const e=at(t)?Number(t):NaN;return isNaN(e)?t:e};let Tf;const za=()=>Tf||(Tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof Wn<"u"?Wn:{});function uu(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=at(r)?mE(r):uu(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(at(t)||Ke(t))return t}const dE=/;(?![^(]*\))/g,pE=/:([^]+)/,gE=/\/\*[^]*?\*\//g;function mE(t){const e={};return t.replace(gE,"").split(dE).forEach(n=>{if(n){const r=n.split(pE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ka(t){let e="";if(at(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=Ka(t[n]);r&&(e+=r+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _E="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yE=ou(_E);function lg(t){return!!t||t===""}function vE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Zr(t[r],e[r]);return n}function Zr(t,e){if(t===e)return!0;let n=wf(t),r=wf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=kn(t),r=kn(e),n||r)return t===e;if(n=de(t),r=de(e),n||r)return n&&r?vE(t,e):!1;if(n=Ke(t),r=Ke(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Zr(t[o],e[o]))return!1}}return String(t)===String(e)}function hu(t,e){return t.findIndex(n=>Zr(n,e))}const ug=t=>!!(t&&t.__v_isRef===!0),_r=t=>at(t)?t:t==null?"":de(t)||Ke(t)&&(t.toString===og||!Ee(t.toString))?ug(t)?_r(t.value):JSON.stringify(t,hg,2):String(t),hg=(t,e)=>ug(e)?hg(t,e.value):Ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[jc(r,s)+" =>"]=i,n),{})}:Qi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jc(n))}:kn(e)?jc(e):Ke(e)&&!de(e)&&!ag(e)?String(e):e,jc=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class EE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function wE(){return zt}let ze;const qc=new WeakSet;class fg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qc.has(this)&&(qc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,If(this),gg(this);const e=ze,n=ln;ze=this,ln=!0;try{return this.fn()}finally{mg(this),ze=e,ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pu(e);this.deps=this.depsTail=void 0,If(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let dg=0,Rs,Ss;function pg(t,e=!1){if(t.flags|=8,e){t.next=Ss,Ss=t;return}t.next=Rs,Rs=t}function fu(){dg++}function du(){if(--dg>0)return;if(Ss){let e=Ss;for(Ss=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Rs;){let e=Rs;for(Rs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mg(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),pu(r),TE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function ml(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_g(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _g(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$s))return;t.globalVersion=$s;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ml(t)){t.flags&=-3;return}const n=ze,r=ln;ze=t,ln=!0;try{gg(t);const i=t.fn(t._value);(e.version===0||mr(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ze=n,ln=r,mg(t),t.flags&=-3}}function pu(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)pu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function TE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ln=!0;const yg=[];function Nr(){yg.push(ln),ln=!1}function Vr(){const t=yg.pop();ln=t===void 0?!0:t}function If(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ze;ze=void 0;try{e()}finally{ze=n}}}let $s=0;class IE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ze||!ln||ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ze)n=this.activeLink=new IE(ze,this),ze.deps?(n.prevDep=ze.depsTail,ze.depsTail.nextDep=n,ze.depsTail=n):ze.deps=ze.depsTail=n,vg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ze.depsTail,n.nextDep=void 0,ze.depsTail.nextDep=n,ze.depsTail=n,ze.deps===n&&(ze.deps=r)}return n}trigger(e){this.version++,$s++,this.notify(e)}notify(e){fu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{du()}}}function vg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)vg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _l=new WeakMap,Jr=Symbol(""),yl=Symbol(""),js=Symbol("");function Rt(t,e,n){if(ln&&ze){let r=_l.get(t);r||_l.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new gu),i.map=r,i.key=n),i.track()}}function Bn(t,e,n,r,i,s){const o=_l.get(t);if(!o){$s++;return}const c=l=>{l&&l.trigger()};if(fu(),e==="clear")o.forEach(c);else{const l=de(t),h=l&&lu(n);if(l&&n==="length"){const u=Number(r);o.forEach((m,y)=>{(y==="length"||y===js||!kn(y)&&y>=u)&&c(m)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(js)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Jr)),Ci(t)&&c(o.get(yl)));break;case"delete":l||(c(o.get(Jr)),Ci(t)&&c(o.get(yl)));break;case"set":Ci(t)&&c(o.get(Jr));break}}du()}function yi(t){const e=Ve(t);return e===t?e:(Rt(e,"iterate",js),un(t)?e:e.map(Nt))}function mu(t){return Rt(t=Ve(t),"iterate",js),t}const AE={__proto__:null,[Symbol.iterator](){return Hc(this,Symbol.iterator,Nt)},concat(...t){return yi(this).concat(...t.map(e=>de(e)?yi(e):e))},entries(){return Hc(this,"entries",t=>(t[1]=Nt(t[1]),t))},every(t,e){return Mn(this,"every",t,e,void 0,arguments)},filter(t,e){return Mn(this,"filter",t,e,n=>n.map(Nt),arguments)},find(t,e){return Mn(this,"find",t,e,Nt,arguments)},findIndex(t,e){return Mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mn(this,"findLast",t,e,Nt,arguments)},findLastIndex(t,e){return Mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return zc(this,"includes",t)},indexOf(...t){return zc(this,"indexOf",t)},join(t){return yi(this).join(t)},lastIndexOf(...t){return zc(this,"lastIndexOf",t)},map(t,e){return Mn(this,"map",t,e,void 0,arguments)},pop(){return gs(this,"pop")},push(...t){return gs(this,"push",t)},reduce(t,...e){return Af(this,"reduce",t,e)},reduceRight(t,...e){return Af(this,"reduceRight",t,e)},shift(){return gs(this,"shift")},some(t,e){return Mn(this,"some",t,e,void 0,arguments)},splice(...t){return gs(this,"splice",t)},toReversed(){return yi(this).toReversed()},toSorted(t){return yi(this).toSorted(t)},toSpliced(...t){return yi(this).toSpliced(...t)},unshift(...t){return gs(this,"unshift",t)},values(){return Hc(this,"values",Nt)}};function Hc(t,e,n){const r=mu(t),i=r[e]();return r!==t&&!un(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const bE=Array.prototype;function Mn(t,e,n,r,i,s){const o=mu(t),c=o!==t&&!un(t),l=o[e];if(l!==bE[e]){const m=l.apply(t,s);return c?Nt(m):m}let h=n;o!==t&&(c?h=function(m,y){return n.call(this,Nt(m),y,t)}:n.length>2&&(h=function(m,y){return n.call(this,m,y,t)}));const u=l.call(o,h,r);return c&&i?i(u):u}function Af(t,e,n,r){const i=mu(t);let s=n;return i!==t&&(un(t)?n.length>3&&(s=function(o,c,l){return n.call(this,o,c,l,t)}):s=function(o,c,l){return n.call(this,o,Nt(c),l,t)}),i[e](s,...r)}function zc(t,e,n){const r=Ve(t);Rt(r,"iterate",js);const i=r[e](...n);return(i===-1||i===!1)&&vu(n[0])?(n[0]=Ve(n[0]),r[e](...n)):i}function gs(t,e,n=[]){Nr(),fu();const r=Ve(t)[e].apply(t,n);return du(),Vr(),r}const RE=ou("__proto__,__v_isRef,__isVue"),Eg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function SE(t){kn(t)||(t=String(t));const e=Ve(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class wg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?LE:bg:s?Ag:Ig).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=de(e);if(!i){let l;if(o&&(l=AE[n]))return l;if(n==="hasOwnProperty")return SE}const c=Reflect.get(e,n,Pt(e)?e:r);return(kn(n)?Eg.has(n):RE(n))||(i||Rt(e,"get",n),s)?c:Pt(c)?o&&lu(n)?c:c.value:Ke(c)?i?Sg(c):Wa(c):c}}class Tg extends wg{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const l=ei(s);if(!un(r)&&!ei(r)&&(s=Ve(s),r=Ve(r)),!de(e)&&Pt(s)&&!Pt(r))return l?!1:(s.value=r,!0)}const o=de(e)&&lu(n)?Number(n)<e.length:Fe(e,n),c=Reflect.set(e,n,r,Pt(e)?e:i);return e===Ve(i)&&(o?mr(r,s)&&Bn(e,"set",n,r):Bn(e,"add",n,r)),c}deleteProperty(e,n){const r=Fe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Bn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!kn(n)||!Eg.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",de(e)?"length":Jr),Reflect.ownKeys(e)}}class CE extends wg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const PE=new Tg,kE=new CE,xE=new Tg(!0);const vl=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function DE(t,e,n){return function(...r){const i=this.__v_raw,s=Ve(i),o=Ci(s),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=i[t](...r),u=n?vl:e?El:Nt;return!e&&Rt(s,"iterate",l?yl:Jr),{next(){const{value:m,done:y}=h.next();return y?{value:m,done:y}:{value:c?[u(m[0]),u(m[1])]:u(m),done:y}},[Symbol.iterator](){return this}}}}function Fo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function OE(t,e){const n={get(i){const s=this.__v_raw,o=Ve(s),c=Ve(i);t||(mr(i,c)&&Rt(o,"get",i),Rt(o,"get",c));const{has:l}=Lo(o),h=e?vl:t?El:Nt;if(l.call(o,i))return h(s.get(i));if(l.call(o,c))return h(s.get(c));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&Rt(Ve(i),"iterate",Jr),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=Ve(s),c=Ve(i);return t||(mr(i,c)&&Rt(o,"has",i),Rt(o,"has",c)),i===c?s.has(i):s.has(i)||s.has(c)},forEach(i,s){const o=this,c=o.__v_raw,l=Ve(c),h=e?vl:t?El:Nt;return!t&&Rt(l,"iterate",Jr),c.forEach((u,m)=>i.call(s,h(u),h(m),o))}};return pt(n,t?{add:Fo("add"),set:Fo("set"),delete:Fo("delete"),clear:Fo("clear")}:{add(i){!e&&!un(i)&&!ei(i)&&(i=Ve(i));const s=Ve(this);return Lo(s).has.call(s,i)||(s.add(i),Bn(s,"add",i,i)),this},set(i,s){!e&&!un(s)&&!ei(s)&&(s=Ve(s));const o=Ve(this),{has:c,get:l}=Lo(o);let h=c.call(o,i);h||(i=Ve(i),h=c.call(o,i));const u=l.call(o,i);return o.set(i,s),h?mr(s,u)&&Bn(o,"set",i,s):Bn(o,"add",i,s),this},delete(i){const s=Ve(this),{has:o,get:c}=Lo(s);let l=o.call(s,i);l||(i=Ve(i),l=o.call(s,i)),c&&c.call(s,i);const h=s.delete(i);return l&&Bn(s,"delete",i,void 0),h},clear(){const i=Ve(this),s=i.size!==0,o=i.clear();return s&&Bn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=DE(i,t,e)}),n}function _u(t,e){const n=OE(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Fe(n,i)&&i in r?n:r,i,s)}const NE={get:_u(!1,!1)},VE={get:_u(!1,!0)},ME={get:_u(!0,!1)};const Ig=new WeakMap,Ag=new WeakMap,bg=new WeakMap,LE=new WeakMap;function FE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function UE(t){return t.__v_skip||!Object.isExtensible(t)?0:FE(lE(t))}function Wa(t){return ei(t)?t:yu(t,!1,PE,NE,Ig)}function Rg(t){return yu(t,!1,xE,VE,Ag)}function Sg(t){return yu(t,!0,kE,ME,bg)}function yu(t,e,n,r,i){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=UE(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return i.set(t,c),c}function Cs(t){return ei(t)?Cs(t.__v_raw):!!(t&&t.__v_isReactive)}function ei(t){return!!(t&&t.__v_isReadonly)}function un(t){return!!(t&&t.__v_isShallow)}function vu(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function BE(t){return!Fe(t,"__v_skip")&&Object.isExtensible(t)&&cg(t,"__v_skip",!0),t}const Nt=t=>Ke(t)?Wa(t):t,El=t=>Ke(t)?Sg(t):t;function Pt(t){return t?t.__v_isRef===!0:!1}function tt(t){return Cg(t,!1)}function $E(t){return Cg(t,!0)}function Cg(t,e){return Pt(t)?t:new jE(t,e)}class jE{constructor(e,n){this.dep=new gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:Nt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||un(e)||ei(e);e=r?e:Ve(e),mr(e,n)&&(this._rawValue=e,this._value=r?e:Nt(e),this.dep.trigger())}}function Pi(t){return Pt(t)?t.value:t}const qE={get:(t,e,n)=>e==="__v_raw"?t:Pi(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Pt(i)&&!Pt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Pg(t){return Cs(t)?t:new Proxy(t,qE)}class HE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return pg(this,!0),!0}get value(){const e=this.dep.track();return _g(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zE(t,e,n=!1){let r,i;return Ee(t)?r=t:(r=t.get,i=t.set),new HE(r,i,n)}const Uo={},fa=new WeakMap;let zr;function KE(t,e=!1,n=zr){if(n){let r=fa.get(n);r||fa.set(n,r=[]),r.push(t)}}function WE(t,e,n=qe){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:c,call:l}=n,h=Y=>i?Y:un(Y)||i===!1||i===0?$n(Y,1):$n(Y);let u,m,y,E,D=!1,M=!1;if(Pt(t)?(m=()=>t.value,D=un(t)):Cs(t)?(m=()=>h(t),D=!0):de(t)?(M=!0,D=t.some(Y=>Cs(Y)||un(Y)),m=()=>t.map(Y=>{if(Pt(Y))return Y.value;if(Cs(Y))return h(Y);if(Ee(Y))return l?l(Y,2):Y()})):Ee(t)?e?m=l?()=>l(t,2):t:m=()=>{if(y){Nr();try{y()}finally{Vr()}}const Y=zr;zr=u;try{return l?l(t,3,[E]):t(E)}finally{zr=Y}}:m=An,e&&i){const Y=m,ge=i===!0?1/0:i;m=()=>$n(Y(),ge)}const F=wE(),z=()=>{u.stop(),F&&F.active&&cu(F.effects,u)};if(s&&e){const Y=e;e=(...ge)=>{Y(...ge),z()}}let K=M?new Array(t.length).fill(Uo):Uo;const Q=Y=>{if(!(!(u.flags&1)||!u.dirty&&!Y))if(e){const ge=u.run();if(i||D||(M?ge.some((fe,P)=>mr(fe,K[P])):mr(ge,K))){y&&y();const fe=zr;zr=u;try{const P=[ge,K===Uo?void 0:M&&K[0]===Uo?[]:K,E];l?l(e,3,P):e(...P),K=ge}finally{zr=fe}}}else u.run()};return c&&c(Q),u=new fg(m),u.scheduler=o?()=>o(Q,!1):Q,E=Y=>KE(Y,!1,u),y=u.onStop=()=>{const Y=fa.get(u);if(Y){if(l)l(Y,4);else for(const ge of Y)ge();fa.delete(u)}},e?r?Q(!0):K=u.run():o?o(Q.bind(null,!0),!0):u.run(),z.pause=u.pause.bind(u),z.resume=u.resume.bind(u),z.stop=z,z}function $n(t,e=1/0,n){if(e<=0||!Ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Pt(t))$n(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)$n(t[r],e,n);else if(Qi(t)||Ci(t))t.forEach(r=>{$n(r,e,n)});else if(ag(t)){for(const r in t)$n(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&$n(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uo(t,e,n,r){try{return r?t(...r):t()}catch(i){Ga(i,e,n)}}function hn(t,e,n,r){if(Ee(t)){const i=uo(t,e,n,r);return i&&sg(i)&&i.catch(s=>{Ga(s,e,n)}),i}if(de(t)){const i=[];for(let s=0;s<t.length;s++)i.push(hn(t[s],e,n,r));return i}}function Ga(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let m=0;m<u.length;m++)if(u[m](t,l,h)===!1)return}c=c.parent}if(s){Nr(),uo(s,null,10,[t,l,h]),Vr();return}}GE(t,n,i,r,o)}function GE(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const Vt=[];let _n=-1;const ki=[];let or=null,Ei=0;const kg=Promise.resolve();let da=null;function Eu(t){const e=da||kg;return t?e.then(this?t.bind(this):t):e}function QE(t){let e=_n+1,n=Vt.length;for(;e<n;){const r=e+n>>>1,i=Vt[r],s=qs(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function wu(t){if(!(t.flags&1)){const e=qs(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=qs(n)?Vt.push(t):Vt.splice(QE(e),0,t),t.flags|=1,xg()}}function xg(){da||(da=kg.then(Og))}function YE(t){de(t)?ki.push(...t):or&&t.id===-1?or.splice(Ei+1,0,t):t.flags&1||(ki.push(t),t.flags|=1),xg()}function bf(t,e,n=_n+1){for(;n<Vt.length;n++){const r=Vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Dg(t){if(ki.length){const e=[...new Set(ki)].sort((n,r)=>qs(n)-qs(r));if(ki.length=0,or){or.push(...e);return}for(or=e,Ei=0;Ei<or.length;Ei++){const n=or[Ei];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}or=null,Ei=0}}const qs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Og(t){try{for(_n=0;_n<Vt.length;_n++){const e=Vt[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),uo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<Vt.length;_n++){const e=Vt[_n];e&&(e.flags&=-2)}_n=-1,Vt.length=0,Dg(),da=null,(Vt.length||ki.length)&&Og()}}let Bt=null,Ng=null;function pa(t){const e=Bt;return Bt=t,Ng=t&&t.type.__scopeId||null,e}function Vg(t,e=Bt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Mf(-1);const s=pa(e);let o;try{o=t(...i)}finally{pa(s),r._d&&Mf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ps(t,e){if(Bt===null)return t;const n=ec(Bt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,c,l=qe]=e[i];s&&(Ee(s)&&(s={mounted:s,updated:s}),s.deep&&$n(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function $r(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const c=i[o];s&&(c.oldValue=s[o].value);let l=c.dir[r];l&&(Nr(),hn(l,n,8,[t.el,c,t,e]),Vr())}}const JE=Symbol("_vte"),Mg=t=>t.__isTeleport,ar=Symbol("_leaveCb"),Bo=Symbol("_enterCb");function XE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ja(()=>{t.isMounted=!0}),zg(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],Lg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},Fg=t=>{const e=t.subTree;return e.component?Fg(e.component):e},ZE={name:"BaseTransition",props:Lg,setup(t,{slots:e}){const n=J0(),r=XE();return()=>{const i=e.default&&$g(e.default(),!0);if(!i||!i.length)return;const s=Ug(i),o=Ve(t),{mode:c}=o;if(r.isLeaving)return Kc(s);const l=Rf(s);if(!l)return Kc(s);let h=wl(l,o,r,n,m=>h=m);l.type!==Ut&&Hs(l,h);let u=n.subTree&&Rf(n.subTree);if(u&&u.type!==Ut&&!Wr(l,u)&&Fg(n).type!==Ut){let m=wl(u,o,r,n);if(Hs(u,m),c==="out-in"&&l.type!==Ut)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete m.afterLeave,u=void 0},Kc(s);c==="in-out"&&l.type!==Ut?m.delayLeave=(y,E,D)=>{const M=Bg(r,u);M[String(u.key)]=u,y[ar]=()=>{E(),y[ar]=void 0,delete h.delayedLeave,u=void 0},h.delayedLeave=()=>{D(),delete h.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Ug(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ut){e=n;break}}return e}const e0=ZE;function Bg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function wl(t,e,n,r,i){const{appear:s,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:u,onEnterCancelled:m,onBeforeLeave:y,onLeave:E,onAfterLeave:D,onLeaveCancelled:M,onBeforeAppear:F,onAppear:z,onAfterAppear:K,onAppearCancelled:Q}=e,Y=String(t.key),ge=Bg(n,t),fe=(T,C)=>{T&&hn(T,r,9,C)},P=(T,C)=>{const k=C[1];fe(T,C),de(T)?T.every(S=>S.length<=1)&&k():T.length<=1&&k()},I={mode:o,persisted:c,beforeEnter(T){let C=l;if(!n.isMounted)if(s)C=F||l;else return;T[ar]&&T[ar](!0);const k=ge[Y];k&&Wr(t,k)&&k.el[ar]&&k.el[ar](),fe(C,[T])},enter(T){let C=h,k=u,S=m;if(!n.isMounted)if(s)C=z||h,k=K||u,S=Q||m;else return;let A=!1;const Me=T[Bo]=rt=>{A||(A=!0,rt?fe(S,[T]):fe(k,[T]),I.delayedLeave&&I.delayedLeave(),T[Bo]=void 0)};C?P(C,[T,Me]):Me()},leave(T,C){const k=String(t.key);if(T[Bo]&&T[Bo](!0),n.isUnmounting)return C();fe(y,[T]);let S=!1;const A=T[ar]=Me=>{S||(S=!0,C(),Me?fe(M,[T]):fe(D,[T]),T[ar]=void 0,ge[k]===t&&delete ge[k])};ge[k]=t,E?P(E,[T,A]):A()},clone(T){const C=wl(T,e,n,r,i);return i&&i(C),C}};return I}function Kc(t){if(Qa(t))return t=Ar(t),t.children=null,t}function Rf(t){if(!Qa(t))return Mg(t.type)&&t.children?Ug(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ee(n.default))return n.default()}}function Hs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $g(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===wn?(o.patchFlag&128&&i++,r=r.concat($g(o.children,e,c))):(e||o.type!==Ut)&&r.push(c!=null?Ar(o,{key:c}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jg(t,e){return Ee(t)?pt({name:t.name},e,{setup:t}):t}function qg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ga(t,e,n,r,i=!1){if(de(t)){t.forEach((D,M)=>ga(D,e&&(de(e)?e[M]:e),n,r,i));return}if(ks(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ga(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?ec(r.component):r.el,o=i?null:s,{i:c,r:l}=t,h=e&&e.r,u=c.refs===qe?c.refs={}:c.refs,m=c.setupState,y=Ve(m),E=m===qe?()=>!1:D=>Fe(y,D);if(h!=null&&h!==l&&(at(h)?(u[h]=null,E(h)&&(m[h]=null)):Pt(h)&&(h.value=null)),Ee(l))uo(l,c,12,[o,u]);else{const D=at(l),M=Pt(l);if(D||M){const F=()=>{if(t.f){const z=D?E(l)?m[l]:u[l]:l.value;i?de(z)&&cu(z,s):de(z)?z.includes(s)||z.push(s):D?(u[l]=[s],E(l)&&(m[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else D?(u[l]=o,E(l)&&(m[l]=o)):M&&(l.value=o,t.k&&(u[t.k]=o))};o?(F.id=-1,Ht(F,n)):F()}}}za().requestIdleCallback;za().cancelIdleCallback;const ks=t=>!!t.type.__asyncLoader,Qa=t=>t.type.__isKeepAlive;function t0(t,e){Hg(t,"a",e)}function n0(t,e){Hg(t,"da",e)}function Hg(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ya(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Qa(i.parent.vnode)&&r0(r,e,n,i),i=i.parent}}function r0(t,e,n,r){const i=Ya(e,t,r,!0);ho(()=>{cu(r[e],i)},n)}function Ya(t,e,n=yt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Nr();const c=fo(n),l=hn(e,n,t,o);return c(),Vr(),l});return r?i.unshift(s):i.push(s),s}}const Xn=t=>(e,n=yt)=>{(!Ks||t==="sp")&&Ya(t,(...r)=>e(...r),n)},i0=Xn("bm"),Ja=Xn("m"),s0=Xn("bu"),o0=Xn("u"),zg=Xn("bum"),ho=Xn("um"),a0=Xn("sp"),c0=Xn("rtg"),l0=Xn("rtc");function u0(t,e=yt){Ya("ec",t,e)}const h0="components";function f0(t,e){return p0(h0,t,!0,e)||t}const d0=Symbol.for("v-ndc");function p0(t,e,n=!0,r=!1){const i=Bt||yt;if(i){const s=i.type;{const c=nw(s,!1);if(c&&(c===e||c===rn(e)||c===Ha(rn(e))))return s}const o=Sf(i[t]||s[t],e)||Sf(i.appContext[t],e);return!o&&r?s:o}}function Sf(t,e){return t&&(t[e]||t[rn(e)]||t[Ha(rn(e))])}const Tl=t=>t?dm(t)?ec(t):Tl(t.parent):null,xs=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tl(t.parent),$root:t=>Tl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wg(t),$forceUpdate:t=>t.f||(t.f=()=>{wu(t.update)}),$nextTick:t=>t.n||(t.n=Eu.bind(t.proxy)),$watch:t=>V0.bind(t)}),Wc=(t,e)=>t!==qe&&!t.__isScriptSetup&&Fe(t,e),g0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Wc(r,e))return o[e]=1,r[e];if(i!==qe&&Fe(i,e))return o[e]=2,i[e];if((h=t.propsOptions[0])&&Fe(h,e))return o[e]=3,s[e];if(n!==qe&&Fe(n,e))return o[e]=4,n[e];Il&&(o[e]=0)}}const u=xs[e];let m,y;if(u)return e==="$attrs"&&Rt(t.attrs,"get",""),u(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==qe&&Fe(n,e))return o[e]=4,n[e];if(y=l.config.globalProperties,Fe(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Wc(i,e)?(i[e]=n,!0):r!==qe&&Fe(r,e)?(r[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let c;return!!n[o]||t!==qe&&Fe(t,o)||Wc(e,o)||(c=s[0])&&Fe(c,o)||Fe(r,o)||Fe(xs,o)||Fe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cf(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Il=!0;function m0(t){const e=Wg(t),n=t.proxy,r=t.ctx;Il=!1,e.beforeCreate&&Pf(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:c,provide:l,inject:h,created:u,beforeMount:m,mounted:y,beforeUpdate:E,updated:D,activated:M,deactivated:F,beforeDestroy:z,beforeUnmount:K,destroyed:Q,unmounted:Y,render:ge,renderTracked:fe,renderTriggered:P,errorCaptured:I,serverPrefetch:T,expose:C,inheritAttrs:k,components:S,directives:A,filters:Me}=e;if(h&&_0(h,r,null),o)for(const Ce in o){const be=o[Ce];Ee(be)&&(r[Ce]=be.bind(n))}if(i){const Ce=i.call(n,n);Ke(Ce)&&(t.data=Wa(Ce))}if(Il=!0,s)for(const Ce in s){const be=s[Ce],xt=Ee(be)?be.bind(n,n):Ee(be.get)?be.get.bind(n,n):An,jt=!Ee(be)&&Ee(be.set)?be.set.bind(n):An,Lt=Ct({get:xt,set:jt});Object.defineProperty(r,Ce,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:Ge=>Lt.value=Ge})}if(c)for(const Ce in c)Kg(c[Ce],r,n,Ce);if(l){const Ce=Ee(l)?l.call(n):l;Reflect.ownKeys(Ce).forEach(be=>{Qo(be,Ce[be])})}u&&Pf(u,t,"c");function We(Ce,be){de(be)?be.forEach(xt=>Ce(xt.bind(n))):be&&Ce(be.bind(n))}if(We(i0,m),We(Ja,y),We(s0,E),We(o0,D),We(t0,M),We(n0,F),We(u0,I),We(l0,fe),We(c0,P),We(zg,K),We(ho,Y),We(a0,T),de(C))if(C.length){const Ce=t.exposed||(t.exposed={});C.forEach(be=>{Object.defineProperty(Ce,be,{get:()=>n[be],set:xt=>n[be]=xt})})}else t.exposed||(t.exposed={});ge&&t.render===An&&(t.render=ge),k!=null&&(t.inheritAttrs=k),S&&(t.components=S),A&&(t.directives=A),T&&qg(t)}function _0(t,e,n=An){de(t)&&(t=Al(t));for(const r in t){const i=t[r];let s;Ke(i)?"default"in i?s=bn(i.from||r,i.default,!0):s=bn(i.from||r):s=bn(i),Pt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Pf(t,e,n){hn(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kg(t,e,n,r){let i=r.includes(".")?am(n,r):()=>n[r];if(at(t)){const s=e[t];Ee(s)&&Xr(i,s)}else if(Ee(t))Xr(i,t.bind(n));else if(Ke(t))if(de(t))t.forEach(s=>Kg(s,e,n,r));else{const s=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(s)&&Xr(i,s,t)}}function Wg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,c=s.get(e);let l;return c?l=c:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(h=>ma(l,h,o,!0)),ma(l,e,o)),Ke(e)&&s.set(e,l),l}function ma(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ma(t,s,n,!0),i&&i.forEach(o=>ma(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=y0[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const y0={data:kf,props:xf,emits:xf,methods:ys,computed:ys,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:ys,directives:ys,watch:E0,provide:kf,inject:v0};function kf(t,e){return e?t?function(){return pt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function v0(t,e){return ys(Al(t),Al(e))}function Al(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function ys(t,e){return t?pt(Object.create(null),t,e):e}function xf(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:pt(Object.create(null),Cf(t),Cf(e??{})):e}function E0(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function Gg(){return{app:null,config:{isNativeTag:aE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w0=0;function T0(t,e){return function(r,i=null){Ee(r)||(r=pt({},r)),i!=null&&!Ke(i)&&(i=null);const s=Gg(),o=new WeakSet,c=[];let l=!1;const h=s.app={_uid:w0++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:iw,get config(){return s.config},set config(u){},use(u,...m){return o.has(u)||(u&&Ee(u.install)?(o.add(u),u.install(h,...m)):Ee(u)&&(o.add(u),u(h,...m))),h},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),h},component(u,m){return m?(s.components[u]=m,h):s.components[u]},directive(u,m){return m?(s.directives[u]=m,h):s.directives[u]},mount(u,m,y){if(!l){const E=h._ceVNode||lt(r,i);return E.appContext=s,y===!0?y="svg":y===!1&&(y=void 0),t(E,u,y),l=!0,h._container=u,u.__vue_app__=h,ec(E.component)}},onUnmount(u){c.push(u)},unmount(){l&&(hn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(u,m){return s.provides[u]=m,h},runWithContext(u){const m=xi;xi=h;try{return u()}finally{xi=m}}};return h}}let xi=null;function Qo(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function bn(t,e,n=!1){const r=yt||Bt;if(r||xi){const i=xi?xi._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ee(e)?e.call(r&&r.proxy):e}}const Qg={},Yg=()=>Object.create(Qg),Jg=t=>Object.getPrototypeOf(t)===Qg;function I0(t,e,n,r=!1){const i={},s=Yg();t.propsDefaults=Object.create(null),Xg(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Rg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function A0(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,c=Ve(i),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let y=u[m];if(Xa(t.emitsOptions,y))continue;const E=e[y];if(l)if(Fe(s,y))E!==s[y]&&(s[y]=E,h=!0);else{const D=rn(y);i[D]=bl(l,c,D,E,t,!1)}else E!==s[y]&&(s[y]=E,h=!0)}}}else{Xg(t,e,i,s)&&(h=!0);let u;for(const m in c)(!e||!Fe(e,m)&&((u=oi(m))===m||!Fe(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=bl(l,c,m,void 0,t,!0)):delete i[m]);if(s!==c)for(const m in s)(!e||!Fe(e,m))&&(delete s[m],h=!0)}h&&Bn(t.attrs,"set","")}function Xg(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(bs(l))continue;const h=e[l];let u;i&&Fe(i,u=rn(l))?!s||!s.includes(u)?n[u]=h:(c||(c={}))[u]=h:Xa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(s){const l=Ve(n),h=c||qe;for(let u=0;u<s.length;u++){const m=s[u];n[m]=bl(i,l,m,h[m],t,!Fe(h,m))}}return o}function bl(t,e,n,r,i,s){const o=t[n];if(o!=null){const c=Fe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(l)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const u=fo(i);r=h[n]=l.call(null,e),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!c?r=!1:o[1]&&(r===""||r===oi(n))&&(r=!0))}return r}const b0=new WeakMap;function Zg(t,e,n=!1){const r=n?b0:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},c=[];let l=!1;if(!Ee(t)){const u=m=>{l=!0;const[y,E]=Zg(m,e,!0);pt(o,y),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ke(t)&&r.set(t,Si),Si;if(de(s))for(let u=0;u<s.length;u++){const m=rn(s[u]);Df(m)&&(o[m]=qe)}else if(s)for(const u in s){const m=rn(u);if(Df(m)){const y=s[u],E=o[m]=de(y)||Ee(y)?{type:y}:pt({},y),D=E.type;let M=!1,F=!0;if(de(D))for(let z=0;z<D.length;++z){const K=D[z],Q=Ee(K)&&K.name;if(Q==="Boolean"){M=!0;break}else Q==="String"&&(F=!1)}else M=Ee(D)&&D.name==="Boolean";E[0]=M,E[1]=F,(M||Fe(E,"default"))&&c.push(m)}}const h=[o,c];return Ke(t)&&r.set(t,h),h}function Df(t){return t[0]!=="$"&&!bs(t)}const em=t=>t[0]==="_"||t==="$stable",Tu=t=>de(t)?t.map(Tn):[Tn(t)],R0=(t,e,n)=>{if(e._n)return e;const r=Vg((...i)=>Tu(e(...i)),n);return r._c=!1,r},tm=(t,e,n)=>{const r=t._ctx;for(const i in t){if(em(i))continue;const s=t[i];if(Ee(s))e[i]=R0(i,s,r);else if(s!=null){const o=Tu(s);e[i]=()=>o}}},nm=(t,e)=>{const n=Tu(e);t.slots.default=()=>n},rm=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},S0=(t,e,n)=>{const r=t.slots=Yg();if(t.vnode.shapeFlag&32){const i=e._;i?(rm(r,e,n),n&&cg(r,"_",i,!0)):tm(e,r)}else e&&nm(t,e)},C0=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=qe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?s=!1:rm(i,e,n):(s=!e.$stable,tm(e,i)),o=e}else e&&(nm(t,e),o={default:1});if(s)for(const c in i)!em(c)&&o[c]==null&&delete i[c]},Ht=j0;function P0(t){return k0(t)}function k0(t,e){const n=za();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:c,createComment:l,setText:h,setElementText:u,parentNode:m,nextSibling:y,setScopeId:E=An,insertStaticContent:D}=t,M=(b,R,O,$=null,q=null,j=null,te=void 0,X=null,J=!!R.dynamicChildren)=>{if(b===R)return;b&&!Wr(b,R)&&($=B(b),Ge(b,q,j,!0),b=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:W,ref:ue,shapeFlag:ne}=R;switch(W){case Za:F(b,R,O,$);break;case Ut:z(b,R,O,$);break;case Yo:b==null&&K(R,O,$,te);break;case wn:S(b,R,O,$,q,j,te,X,J);break;default:ne&1?ge(b,R,O,$,q,j,te,X,J):ne&6?A(b,R,O,$,q,j,te,X,J):(ne&64||ne&128)&&W.process(b,R,O,$,q,j,te,X,J,se)}ue!=null&&q&&ga(ue,b&&b.ref,j,R||b,!R)},F=(b,R,O,$)=>{if(b==null)r(R.el=c(R.children),O,$);else{const q=R.el=b.el;R.children!==b.children&&h(q,R.children)}},z=(b,R,O,$)=>{b==null?r(R.el=l(R.children||""),O,$):R.el=b.el},K=(b,R,O,$)=>{[b.el,b.anchor]=D(b.children,R,O,$,b.el,b.anchor)},Q=({el:b,anchor:R},O,$)=>{let q;for(;b&&b!==R;)q=y(b),r(b,O,$),b=q;r(R,O,$)},Y=({el:b,anchor:R})=>{let O;for(;b&&b!==R;)O=y(b),i(b),b=O;i(R)},ge=(b,R,O,$,q,j,te,X,J)=>{R.type==="svg"?te="svg":R.type==="math"&&(te="mathml"),b==null?fe(R,O,$,q,j,te,X,J):T(b,R,q,j,te,X,J)},fe=(b,R,O,$,q,j,te,X)=>{let J,W;const{props:ue,shapeFlag:ne,transition:oe,dirs:ce}=b;if(J=b.el=o(b.type,j,ue&&ue.is,ue),ne&8?u(J,b.children):ne&16&&I(b.children,J,null,$,q,Gc(b,j),te,X),ce&&$r(b,null,$,"created"),P(J,b,b.scopeId,te,$),ue){for(const ve in ue)ve!=="value"&&!bs(ve)&&s(J,ve,null,ue[ve],j,$);"value"in ue&&s(J,"value",null,ue.value,j),(W=ue.onVnodeBeforeMount)&&mn(W,$,b)}ce&&$r(b,null,$,"beforeMount");const le=x0(q,oe);le&&oe.beforeEnter(J),r(J,R,O),((W=ue&&ue.onVnodeMounted)||le||ce)&&Ht(()=>{W&&mn(W,$,b),le&&oe.enter(J),ce&&$r(b,null,$,"mounted")},q)},P=(b,R,O,$,q)=>{if(O&&E(b,O),$)for(let j=0;j<$.length;j++)E(b,$[j]);if(q){let j=q.subTree;if(R===j||lm(j.type)&&(j.ssContent===R||j.ssFallback===R)){const te=q.vnode;P(b,te,te.scopeId,te.slotScopeIds,q.parent)}}},I=(b,R,O,$,q,j,te,X,J=0)=>{for(let W=J;W<b.length;W++){const ue=b[W]=X?cr(b[W]):Tn(b[W]);M(null,ue,R,O,$,q,j,te,X)}},T=(b,R,O,$,q,j,te)=>{const X=R.el=b.el;let{patchFlag:J,dynamicChildren:W,dirs:ue}=R;J|=b.patchFlag&16;const ne=b.props||qe,oe=R.props||qe;let ce;if(O&&jr(O,!1),(ce=oe.onVnodeBeforeUpdate)&&mn(ce,O,R,b),ue&&$r(R,b,O,"beforeUpdate"),O&&jr(O,!0),(ne.innerHTML&&oe.innerHTML==null||ne.textContent&&oe.textContent==null)&&u(X,""),W?C(b.dynamicChildren,W,X,O,$,Gc(R,q),j):te||be(b,R,X,null,O,$,Gc(R,q),j,!1),J>0){if(J&16)k(X,ne,oe,O,q);else if(J&2&&ne.class!==oe.class&&s(X,"class",null,oe.class,q),J&4&&s(X,"style",ne.style,oe.style,q),J&8){const le=R.dynamicProps;for(let ve=0;ve<le.length;ve++){const Te=le[ve],ft=ne[Te],_=oe[Te];(_!==ft||Te==="value")&&s(X,Te,ft,_,q,O)}}J&1&&b.children!==R.children&&u(X,R.children)}else!te&&W==null&&k(X,ne,oe,O,q);((ce=oe.onVnodeUpdated)||ue)&&Ht(()=>{ce&&mn(ce,O,R,b),ue&&$r(R,b,O,"updated")},$)},C=(b,R,O,$,q,j,te)=>{for(let X=0;X<R.length;X++){const J=b[X],W=R[X],ue=J.el&&(J.type===wn||!Wr(J,W)||J.shapeFlag&70)?m(J.el):O;M(J,W,ue,null,$,q,j,te,!0)}},k=(b,R,O,$,q)=>{if(R!==O){if(R!==qe)for(const j in R)!bs(j)&&!(j in O)&&s(b,j,R[j],null,q,$);for(const j in O){if(bs(j))continue;const te=O[j],X=R[j];te!==X&&j!=="value"&&s(b,j,X,te,q,$)}"value"in O&&s(b,"value",R.value,O.value,q)}},S=(b,R,O,$,q,j,te,X,J)=>{const W=R.el=b?b.el:c(""),ue=R.anchor=b?b.anchor:c("");let{patchFlag:ne,dynamicChildren:oe,slotScopeIds:ce}=R;ce&&(X=X?X.concat(ce):ce),b==null?(r(W,O,$),r(ue,O,$),I(R.children||[],O,ue,q,j,te,X,J)):ne>0&&ne&64&&oe&&b.dynamicChildren?(C(b.dynamicChildren,oe,O,q,j,te,X),(R.key!=null||q&&R===q.subTree)&&im(b,R,!0)):be(b,R,O,ue,q,j,te,X,J)},A=(b,R,O,$,q,j,te,X,J)=>{R.slotScopeIds=X,b==null?R.shapeFlag&512?q.ctx.activate(R,O,$,te,J):Me(R,O,$,q,j,te,J):rt(b,R,J)},Me=(b,R,O,$,q,j,te)=>{const X=b.component=Y0(b,$,q);if(Qa(b)&&(X.ctx.renderer=se),X0(X,!1,te),X.asyncDep){if(q&&q.registerDep(X,We,te),!b.el){const J=X.subTree=lt(Ut);z(null,J,R,O)}}else We(X,b,R,O,q,j,te)},rt=(b,R,O)=>{const $=R.component=b.component;if(B0(b,R,O))if($.asyncDep&&!$.asyncResolved){Ce($,R,O);return}else $.next=R,$.update();else R.el=b.el,$.vnode=R},We=(b,R,O,$,q,j,te)=>{const X=()=>{if(b.isMounted){let{next:ne,bu:oe,u:ce,parent:le,vnode:ve}=b;{const p=sm(b);if(p){ne&&(ne.el=ve.el,Ce(b,ne,te)),p.asyncDep.then(()=>{b.isUnmounted||X()});return}}let Te=ne,ft;jr(b,!1),ne?(ne.el=ve.el,Ce(b,ne,te)):ne=ve,oe&&Go(oe),(ft=ne.props&&ne.props.onVnodeBeforeUpdate)&&mn(ft,le,ne,ve),jr(b,!0);const _=Nf(b),d=b.subTree;b.subTree=_,M(d,_,m(d.el),B(d),b,q,j),ne.el=_.el,Te===null&&$0(b,_.el),ce&&Ht(ce,q),(ft=ne.props&&ne.props.onVnodeUpdated)&&Ht(()=>mn(ft,le,ne,ve),q)}else{let ne;const{el:oe,props:ce}=R,{bm:le,m:ve,parent:Te,root:ft,type:_}=b,d=ks(R);jr(b,!1),le&&Go(le),!d&&(ne=ce&&ce.onVnodeBeforeMount)&&mn(ne,Te,R),jr(b,!0);{ft.ce&&ft.ce._injectChildStyle(_);const p=b.subTree=Nf(b);M(null,p,O,$,b,q,j),R.el=p.el}if(ve&&Ht(ve,q),!d&&(ne=ce&&ce.onVnodeMounted)){const p=R;Ht(()=>mn(ne,Te,p),q)}(R.shapeFlag&256||Te&&ks(Te.vnode)&&Te.vnode.shapeFlag&256)&&b.a&&Ht(b.a,q),b.isMounted=!0,R=O=$=null}};b.scope.on();const J=b.effect=new fg(X);b.scope.off();const W=b.update=J.run.bind(J),ue=b.job=J.runIfDirty.bind(J);ue.i=b,ue.id=b.uid,J.scheduler=()=>wu(ue),jr(b,!0),W()},Ce=(b,R,O)=>{R.component=b;const $=b.vnode.props;b.vnode=R,b.next=null,A0(b,R.props,$,O),C0(b,R.children,O),Nr(),bf(b),Vr()},be=(b,R,O,$,q,j,te,X,J=!1)=>{const W=b&&b.children,ue=b?b.shapeFlag:0,ne=R.children,{patchFlag:oe,shapeFlag:ce}=R;if(oe>0){if(oe&128){jt(W,ne,O,$,q,j,te,X,J);return}else if(oe&256){xt(W,ne,O,$,q,j,te,X,J);return}}ce&8?(ue&16&&gt(W,q,j),ne!==W&&u(O,ne)):ue&16?ce&16?jt(W,ne,O,$,q,j,te,X,J):gt(W,q,j,!0):(ue&8&&u(O,""),ce&16&&I(ne,O,$,q,j,te,X,J))},xt=(b,R,O,$,q,j,te,X,J)=>{b=b||Si,R=R||Si;const W=b.length,ue=R.length,ne=Math.min(W,ue);let oe;for(oe=0;oe<ne;oe++){const ce=R[oe]=J?cr(R[oe]):Tn(R[oe]);M(b[oe],ce,O,null,q,j,te,X,J)}W>ue?gt(b,q,j,!0,!1,ne):I(R,O,$,q,j,te,X,J,ne)},jt=(b,R,O,$,q,j,te,X,J)=>{let W=0;const ue=R.length;let ne=b.length-1,oe=ue-1;for(;W<=ne&&W<=oe;){const ce=b[W],le=R[W]=J?cr(R[W]):Tn(R[W]);if(Wr(ce,le))M(ce,le,O,null,q,j,te,X,J);else break;W++}for(;W<=ne&&W<=oe;){const ce=b[ne],le=R[oe]=J?cr(R[oe]):Tn(R[oe]);if(Wr(ce,le))M(ce,le,O,null,q,j,te,X,J);else break;ne--,oe--}if(W>ne){if(W<=oe){const ce=oe+1,le=ce<ue?R[ce].el:$;for(;W<=oe;)M(null,R[W]=J?cr(R[W]):Tn(R[W]),O,le,q,j,te,X,J),W++}}else if(W>oe)for(;W<=ne;)Ge(b[W],q,j,!0),W++;else{const ce=W,le=W,ve=new Map;for(W=le;W<=oe;W++){const V=R[W]=J?cr(R[W]):Tn(R[W]);V.key!=null&&ve.set(V.key,W)}let Te,ft=0;const _=oe-le+1;let d=!1,p=0;const w=new Array(_);for(W=0;W<_;W++)w[W]=0;for(W=ce;W<=ne;W++){const V=b[W];if(ft>=_){Ge(V,q,j,!0);continue}let U;if(V.key!=null)U=ve.get(V.key);else for(Te=le;Te<=oe;Te++)if(w[Te-le]===0&&Wr(V,R[Te])){U=Te;break}U===void 0?Ge(V,q,j,!0):(w[U-le]=W+1,U>=p?p=U:d=!0,M(V,R[U],O,null,q,j,te,X,J),ft++)}const x=d?D0(w):Si;for(Te=x.length-1,W=_-1;W>=0;W--){const V=le+W,U=R[V],Ie=V+1<ue?R[V+1].el:$;w[W]===0?M(null,U,O,Ie,q,j,te,X,J):d&&(Te<0||W!==x[Te]?Lt(U,O,Ie,2):Te--)}}},Lt=(b,R,O,$,q=null)=>{const{el:j,type:te,transition:X,children:J,shapeFlag:W}=b;if(W&6){Lt(b.component.subTree,R,O,$);return}if(W&128){b.suspense.move(R,O,$);return}if(W&64){te.move(b,R,O,se);return}if(te===wn){r(j,R,O);for(let ne=0;ne<J.length;ne++)Lt(J[ne],R,O,$);r(b.anchor,R,O);return}if(te===Yo){Q(b,R,O);return}if($!==2&&W&1&&X)if($===0)X.beforeEnter(j),r(j,R,O),Ht(()=>X.enter(j),q);else{const{leave:ne,delayLeave:oe,afterLeave:ce}=X,le=()=>r(j,R,O),ve=()=>{ne(j,()=>{le(),ce&&ce()})};oe?oe(j,le,ve):ve()}else r(j,R,O)},Ge=(b,R,O,$=!1,q=!1)=>{const{type:j,props:te,ref:X,children:J,dynamicChildren:W,shapeFlag:ue,patchFlag:ne,dirs:oe,cacheIndex:ce}=b;if(ne===-2&&(q=!1),X!=null&&ga(X,null,O,b,!0),ce!=null&&(R.renderCache[ce]=void 0),ue&256){R.ctx.deactivate(b);return}const le=ue&1&&oe,ve=!ks(b);let Te;if(ve&&(Te=te&&te.onVnodeBeforeUnmount)&&mn(Te,R,b),ue&6)Ye(b.component,O,$);else{if(ue&128){b.suspense.unmount(O,$);return}le&&$r(b,null,R,"beforeUnmount"),ue&64?b.type.remove(b,R,O,se,$):W&&!W.hasOnce&&(j!==wn||ne>0&&ne&64)?gt(W,R,O,!1,!0):(j===wn&&ne&384||!q&&ue&16)&&gt(J,R,O),$&&Qe(b)}(ve&&(Te=te&&te.onVnodeUnmounted)||le)&&Ht(()=>{Te&&mn(Te,R,b),le&&$r(b,null,R,"unmounted")},O)},Qe=b=>{const{type:R,el:O,anchor:$,transition:q}=b;if(R===wn){Be(O,$);return}if(R===Yo){Y(b);return}const j=()=>{i(O),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(b.shapeFlag&1&&q&&!q.persisted){const{leave:te,delayLeave:X}=q,J=()=>te(O,j);X?X(b.el,j,J):J()}else j()},Be=(b,R)=>{let O;for(;b!==R;)O=y(b),i(b),b=O;i(R)},Ye=(b,R,O)=>{const{bum:$,scope:q,job:j,subTree:te,um:X,m:J,a:W}=b;Of(J),Of(W),$&&Go($),q.stop(),j&&(j.flags|=8,Ge(te,b,R,O)),X&&Ht(X,R),Ht(()=>{b.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},gt=(b,R,O,$=!1,q=!1,j=0)=>{for(let te=j;te<b.length;te++)Ge(b[te],R,O,$,q)},B=b=>{if(b.shapeFlag&6)return B(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const R=y(b.anchor||b.el),O=R&&R[JE];return O?y(O):R};let re=!1;const ee=(b,R,O)=>{b==null?R._vnode&&Ge(R._vnode,null,null,!0):M(R._vnode||null,b,R,null,null,null,O),R._vnode=b,re||(re=!0,bf(),Dg(),re=!1)},se={p:M,um:Ge,m:Lt,r:Qe,mt:Me,mc:I,pc:be,pbc:C,n:B,o:t};return{render:ee,hydrate:void 0,createApp:T0(ee)}}function Gc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function x0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function im(t,e,n=!1){const r=t.children,i=e.children;if(de(r)&&de(i))for(let s=0;s<r.length;s++){const o=r[s];let c=i[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[s]=cr(i[s]),c.el=o.el),!n&&c.patchFlag!==-2&&im(o,c)),c.type===Za&&(c.el=o.el)}}function D0(t){const e=t.slice(),n=[0];let r,i,s,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(i=n[n.length-1],t[i]<h){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)c=s+o>>1,t[n[c]]<h?s=c+1:o=c;h<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function sm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sm(e)}function Of(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const O0=Symbol.for("v-scx"),N0=()=>bn(O0);function Xr(t,e,n){return om(t,e,n)}function om(t,e,n=qe){const{immediate:r,deep:i,flush:s,once:o}=n,c=pt({},n),l=e&&r||!e&&s!=="post";let h;if(Ks){if(s==="sync"){const E=N0();h=E.__watcherHandles||(E.__watcherHandles=[])}else if(!l){const E=()=>{};return E.stop=An,E.resume=An,E.pause=An,E}}const u=yt;c.call=(E,D,M)=>hn(E,u,D,M);let m=!1;s==="post"?c.scheduler=E=>{Ht(E,u&&u.suspense)}:s!=="sync"&&(m=!0,c.scheduler=(E,D)=>{D?E():wu(E)}),c.augmentJob=E=>{e&&(E.flags|=4),m&&(E.flags|=2,u&&(E.id=u.uid,E.i=u))};const y=WE(t,e,c);return Ks&&(h?h.push(y):l&&y()),y}function V0(t,e,n){const r=this.proxy,i=at(t)?t.includes(".")?am(r,t):()=>r[t]:t.bind(r,r);let s;Ee(e)?s=e:(s=e.handler,n=e);const o=fo(this),c=om(i,s.bind(r),n);return o(),c}function am(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const M0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rn(e)}Modifiers`]||t[`${oi(e)}Modifiers`];function L0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||qe;let i=n;const s=e.startsWith("update:"),o=s&&M0(r,e.slice(7));o&&(o.trim&&(i=n.map(u=>at(u)?u.trim():u)),o.number&&(i=n.map(ha)));let c,l=r[c=$c(e)]||r[c=$c(rn(e))];!l&&s&&(l=r[c=$c(oi(e))]),l&&hn(l,t,6,i);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,hn(h,t,6,i)}}function cm(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},c=!1;if(!Ee(t)){const l=h=>{const u=cm(h,e,!0);u&&(c=!0,pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!c?(Ke(t)&&r.set(t,null),null):(de(s)?s.forEach(l=>o[l]=null):pt(o,s),Ke(t)&&r.set(t,o),o)}function Xa(t,e){return!t||!ja(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,oi(e))||Fe(t,e))}function Nf(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:c,emit:l,render:h,renderCache:u,props:m,data:y,setupState:E,ctx:D,inheritAttrs:M}=t,F=pa(t);let z,K;try{if(n.shapeFlag&4){const Y=i||r,ge=Y;z=Tn(h.call(ge,Y,u,m,E,y,D)),K=c}else{const Y=e;z=Tn(Y.length>1?Y(m,{attrs:c,slots:o,emit:l}):Y(m,null)),K=e.props?c:F0(c)}}catch(Y){Ds.length=0,Ga(Y,t,1),z=lt(Ut)}let Q=z;if(K&&M!==!1){const Y=Object.keys(K),{shapeFlag:ge}=Q;Y.length&&ge&7&&(s&&Y.some(au)&&(K=U0(K,s)),Q=Ar(Q,K,!1,!0))}return n.dirs&&(Q=Ar(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Hs(Q,n.transition),z=Q,pa(F),z}const F0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ja(n))&&((e||(e={}))[n]=t[n]);return e},U0=(t,e)=>{const n={};for(const r in t)(!au(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function B0(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:c,patchFlag:l}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Vf(r,o,h):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const y=u[m];if(o[y]!==r[y]&&!Xa(h,y))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Vf(r,o,h):!0:!!o;return!1}function Vf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Xa(n,s))return!0}return!1}function $0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const lm=t=>t.__isSuspense;function j0(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):YE(t)}const wn=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),Yo=Symbol.for("v-stc"),Ds=[];let Wt=null;function Mt(t=!1){Ds.push(Wt=t?null:[])}function q0(){Ds.pop(),Wt=Ds[Ds.length-1]||null}let zs=1;function Mf(t,e=!1){zs+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function um(t){return t.dynamicChildren=zs>0?Wt||Si:null,q0(),zs>0&&Wt&&Wt.push(t),t}function Kt(t,e,n,r,i,s){return um(ae(t,e,n,r,i,s,!0))}function hm(t,e,n,r,i){return um(lt(t,e,n,r,i,!0))}function _a(t){return t?t.__v_isVNode===!0:!1}function Wr(t,e){return t.type===e.type&&t.key===e.key}const fm=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?at(t)||Pt(t)||Ee(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function ae(t,e=null,n=null,r=0,i=null,s=t===wn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fm(e),ref:e&&Jo(e),scopeId:Ng,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Bt};return c?(Au(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=at(n)?8:16),zs>0&&!o&&Wt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Wt.push(l),l}const lt=H0;function H0(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===d0)&&(t=Ut),_a(t)){const c=Ar(t,e,!0);return n&&Au(c,n),zs>0&&!s&&Wt&&(c.shapeFlag&6?Wt[Wt.indexOf(t)]=c:Wt.push(c)),c.patchFlag=-2,c}if(rw(t)&&(t=t.__vccOpts),e){e=z0(e);let{class:c,style:l}=e;c&&!at(c)&&(e.class=Ka(c)),Ke(l)&&(vu(l)&&!de(l)&&(l=pt({},l)),e.style=uu(l))}const o=at(t)?1:lm(t)?128:Mg(t)?64:Ke(t)?4:Ee(t)?2:0;return ae(t,e,n,r,i,o,s,!0)}function z0(t){return t?vu(t)||Jg(t)?pt({},t):t:null}function Ar(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:c,transition:l}=t,h=e?W0(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&fm(h),ref:e&&e.ref?n&&s?de(s)?s.concat(Jo(e)):[s,Jo(e)]:Jo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ar(t.ssContent),ssFallback:t.ssFallback&&Ar(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Hs(u,l.clone(u)),u}function Iu(t=" ",e=0){return lt(Za,null,t,e)}function K0(t,e){const n=lt(Yo,null,t);return n.staticCount=e,n}function ya(t="",e=!1){return e?(Mt(),hm(Ut,null,t)):lt(Ut,null,t)}function Tn(t){return t==null||typeof t=="boolean"?lt(Ut):de(t)?lt(wn,null,t.slice()):_a(t)?cr(t):lt(Za,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ar(t)}function Au(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Au(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Jg(e)?e._ctx=Bt:i===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),r&64?(n=16,e=[Iu(e)]):n=8);t.children=e,t.shapeFlag|=n}function W0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ka([e.class,r.class]));else if(i==="style")e.style=uu([e.style,r.style]);else if(ja(i)){const s=e[i],o=r[i];o&&s!==o&&!(de(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function mn(t,e,n,r=null){hn(t,e,7,[n,r])}const G0=Gg();let Q0=0;function Y0(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||G0,s={uid:Q0++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new EE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zg(r,i),emitsOptions:cm(r,i),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=L0.bind(null,s),t.ce&&t.ce(s),s}let yt=null;const J0=()=>yt||Bt;let va,Rl;{const t=za(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};va=e("__VUE_INSTANCE_SETTERS__",n=>yt=n),Rl=e("__VUE_SSR_SETTERS__",n=>Ks=n)}const fo=t=>{const e=yt;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Lf=()=>{yt&&yt.scope.off(),va(null)};function dm(t){return t.vnode.shapeFlag&4}let Ks=!1;function X0(t,e=!1,n=!1){e&&Rl(e);const{props:r,children:i}=t.vnode,s=dm(t);I0(t,r,s,e),S0(t,i,n);const o=s?Z0(t,e):void 0;return e&&Rl(!1),o}function Z0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,g0);const{setup:r}=n;if(r){Nr();const i=t.setupContext=r.length>1?tw(t):null,s=fo(t),o=uo(r,t,0,[t.props,i]),c=sg(o);if(Vr(),s(),(c||t.sp)&&!ks(t)&&qg(t),c){if(o.then(Lf,Lf),e)return o.then(l=>{Ff(t,l)}).catch(l=>{Ga(l,t,0)});t.asyncDep=o}else Ff(t,o)}else pm(t)}function Ff(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=Pg(e)),pm(t)}function pm(t,e,n){const r=t.type;t.render||(t.render=r.render||An);{const i=fo(t);Nr();try{m0(t)}finally{Vr(),i()}}}const ew={get(t,e){return Rt(t,"get",""),t[e]}};function tw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ew),slots:t.slots,emit:t.emit,expose:e}}function ec(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pg(BE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xs)return xs[n](t)},has(e,n){return n in e||n in xs}})):t.proxy}function nw(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function rw(t){return Ee(t)&&"__vccOpts"in t}const Ct=(t,e)=>zE(t,e,Ks);function bu(t,e,n){const r=arguments.length;return r===2?Ke(e)&&!de(e)?_a(e)?lt(t,null,[e]):lt(t,e):lt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_a(n)&&(n=[n]),lt(t,e,n))}const iw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sl;const Uf=typeof window<"u"&&window.trustedTypes;if(Uf)try{Sl=Uf.createPolicy("vue",{createHTML:t=>t})}catch{}const gm=Sl?t=>Sl.createHTML(t):t=>t,sw="http://www.w3.org/2000/svg",ow="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,Bf=Un&&Un.createElement("template"),aw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Un.createElementNS(sw,t):e==="mathml"?Un.createElementNS(ow,t):n?Un.createElement(t,{is:n}):Un.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Bf.innerHTML=gm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Bf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},rr="transition",ms="animation",Ws=Symbol("_vtc"),mm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cw=pt({},Lg,mm),lw=t=>(t.displayName="Transition",t.props=cw,t),uw=lw((t,{slots:e})=>bu(e0,hw(t),e)),qr=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},$f=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function hw(t){const e={};for(const S in t)S in mm||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:h=o,appearToClass:u=c,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,D=fw(i),M=D&&D[0],F=D&&D[1],{onBeforeEnter:z,onEnter:K,onEnterCancelled:Q,onLeave:Y,onLeaveCancelled:ge,onBeforeAppear:fe=z,onAppear:P=K,onAppearCancelled:I=Q}=e,T=(S,A,Me,rt)=>{S._enterCancelled=rt,Hr(S,A?u:c),Hr(S,A?h:o),Me&&Me()},C=(S,A)=>{S._isLeaving=!1,Hr(S,m),Hr(S,E),Hr(S,y),A&&A()},k=S=>(A,Me)=>{const rt=S?P:K,We=()=>T(A,S,Me);qr(rt,[A,We]),jf(()=>{Hr(A,S?l:s),Ln(A,S?u:c),$f(rt)||qf(A,r,M,We)})};return pt(e,{onBeforeEnter(S){qr(z,[S]),Ln(S,s),Ln(S,o)},onBeforeAppear(S){qr(fe,[S]),Ln(S,l),Ln(S,h)},onEnter:k(!1),onAppear:k(!0),onLeave(S,A){S._isLeaving=!0;const Me=()=>C(S,A);Ln(S,m),S._enterCancelled?(Ln(S,y),Kf()):(Kf(),Ln(S,y)),jf(()=>{S._isLeaving&&(Hr(S,m),Ln(S,E),$f(Y)||qf(S,r,F,Me))}),qr(Y,[S,Me])},onEnterCancelled(S){T(S,!1,void 0,!0),qr(Q,[S])},onAppearCancelled(S){T(S,!0,void 0,!0),qr(I,[S])},onLeaveCancelled(S){C(S),qr(ge,[S])}})}function fw(t){if(t==null)return null;if(Ke(t))return[Qc(t.enter),Qc(t.leave)];{const e=Qc(t);return[e,e]}}function Qc(t){return fE(t)}function Ln(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ws]||(t[Ws]=new Set)).add(e)}function Hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ws];n&&(n.delete(e),n.size||(t[Ws]=void 0))}function jf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let dw=0;function qf(t,e,n,r){const i=t._endId=++dw,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:c,propCount:l}=pw(t,e);if(!o)return r();const h=o+"end";let u=0;const m=()=>{t.removeEventListener(h,y),s()},y=E=>{E.target===t&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},c+1),t.addEventListener(h,y)}function pw(t,e){const n=window.getComputedStyle(t),r=D=>(n[D]||"").split(", "),i=r(`${rr}Delay`),s=r(`${rr}Duration`),o=Hf(i,s),c=r(`${ms}Delay`),l=r(`${ms}Duration`),h=Hf(c,l);let u=null,m=0,y=0;e===rr?o>0&&(u=rr,m=o,y=s.length):e===ms?h>0&&(u=ms,m=h,y=l.length):(m=Math.max(o,h),u=m>0?o>h?rr:ms:null,y=u?u===rr?s.length:l.length:0);const E=u===rr&&/\b(transform|all)(,|$)/.test(r(`${rr}Property`).toString());return{type:u,timeout:m,propCount:y,hasTransform:E}}function Hf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>zf(n)+zf(t[r])))}function zf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Kf(){return document.body.offsetHeight}function gw(t,e,n){const r=t[Ws];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wf=Symbol("_vod"),mw=Symbol("_vsh"),_w=Symbol(""),yw=/(^|;)\s*display\s*:/;function vw(t,e,n){const r=t.style,i=at(n);let s=!1;if(n&&!i){if(e)if(at(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Xo(r,c,"")}else for(const o in e)n[o]==null&&Xo(r,o,"");for(const o in n)o==="display"&&(s=!0),Xo(r,o,n[o])}else if(i){if(e!==n){const o=r[_w];o&&(n+=";"+o),r.cssText=n,s=yw.test(n)}}else e&&t.removeAttribute("style");Wf in t&&(t[Wf]=s?r.display:"",t[mw]&&(r.display="none"))}const Gf=/\s*!important$/;function Xo(t,e,n){if(de(n))n.forEach(r=>Xo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ew(t,e);Gf.test(n)?t.setProperty(oi(r),n.replace(Gf,""),"important"):t[r]=n}}const Qf=["Webkit","Moz","ms"],Yc={};function Ew(t,e){const n=Yc[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return Yc[e]=r;r=Ha(r);for(let i=0;i<Qf.length;i++){const s=Qf[i]+r;if(s in t)return Yc[e]=s}return e}const Yf="http://www.w3.org/1999/xlink";function Jf(t,e,n,r,i,s=yE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yf,e.slice(6,e.length)):t.setAttributeNS(Yf,e,n):n==null||s&&!lg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":kn(n)?String(n):n)}function Xf(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?gm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=lg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function jn(t,e,n,r){t.addEventListener(e,n,r)}function ww(t,e,n,r){t.removeEventListener(e,n,r)}const Zf=Symbol("_vei");function Tw(t,e,n,r,i=null){const s=t[Zf]||(t[Zf]={}),o=s[e];if(r&&o)o.value=r;else{const[c,l]=Iw(e);if(r){const h=s[e]=Rw(r,i);jn(t,c,h,l)}else o&&(ww(t,c,o,l),s[e]=void 0)}}const ed=/(?:Once|Passive|Capture)$/;function Iw(t){let e;if(ed.test(t)){e={};let r;for(;r=t.match(ed);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):oi(t.slice(2)),e]}let Jc=0;const Aw=Promise.resolve(),bw=()=>Jc||(Aw.then(()=>Jc=0),Jc=Date.now());function Rw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;hn(Sw(r,n.value),e,5,[r])};return n.value=t,n.attached=bw(),n}function Sw(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const td=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cw=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?gw(t,r,o):e==="style"?vw(t,n,r):ja(e)?au(e)||Tw(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pw(t,e,r,o))?(Xf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jf(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!at(r))?Xf(t,rn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jf(t,e,r,o))};function Pw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&td(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return td(e)&&at(n)?!1:e in t}const br=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>Go(e,n):e};function kw(t){t.target.composing=!0}function nd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tn=Symbol("_assign"),Gs={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[tn]=br(i);const s=r||i.props&&i.props.type==="number";jn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),s&&(c=ha(c)),t[tn](c)}),n&&jn(t,"change",()=>{t.value=t.value.trim()}),e||(jn(t,"compositionstart",kw),jn(t,"compositionend",nd),jn(t,"change",nd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[tn]=br(o),t.composing)return;const c=(s||t.type==="number")&&!/^0\d/.test(t.value)?ha(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l))}},_m={deep:!0,created(t,e,n){t[tn]=br(n),jn(t,"change",()=>{const r=t._modelValue,i=Fi(t),s=t.checked,o=t[tn];if(de(r)){const c=hu(r,i),l=c!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const h=[...r];h.splice(c,1),o(h)}}else if(Qi(r)){const c=new Set(r);s?c.add(i):c.delete(i),o(c)}else o(ym(t,s))})},mounted:rd,beforeUpdate(t,e,n){t[tn]=br(n),rd(t,e,n)}};function rd(t,{value:e,oldValue:n},r){t._modelValue=e;let i;if(de(e))i=hu(e,r.props.value)>-1;else if(Qi(e))i=e.has(r.props.value);else{if(e===n)return;i=Zr(e,ym(t,!0))}t.checked!==i&&(t.checked=i)}const xw={created(t,{value:e},n){t.checked=Zr(e,n.props.value),t[tn]=br(n),jn(t,"change",()=>{t[tn](Fi(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[tn]=br(r),e!==n&&(t.checked=Zr(e,r.props.value))}},Dw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Qi(e);jn(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ha(Fi(o)):Fi(o));t[tn](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,Eu(()=>{t._assigning=!1})}),t[tn]=br(r)},mounted(t,{value:e}){id(t,e)},beforeUpdate(t,e,n){t[tn]=br(n)},updated(t,{value:e}){t._assigning||id(t,e)}};function id(t,e){const n=t.multiple,r=de(e);if(!(n&&!r&&!Qi(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],c=Fi(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=hu(e,c)>-1}else o.selected=e.has(c);else if(Zr(Fi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fi(t){return"_value"in t?t._value:t.value}function ym(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ow={created(t,e,n){$o(t,e,n,null,"created")},mounted(t,e,n){$o(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){$o(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){$o(t,e,n,r,"updated")}};function Nw(t,e){switch(t){case"SELECT":return Dw;case"TEXTAREA":return Gs;default:switch(e){case"checkbox":return _m;case"radio":return xw;default:return Gs}}}function $o(t,e,n,r,i){const o=Nw(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,r)}const Vw=["ctrl","shift","alt","meta"],Mw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Vw.some(n=>t[`${n}Key`]&&!e.includes(n))},vm=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const c=Mw[e[o]];if(c&&c(i,e))return}return t(i,...s)})},Lw=pt({patchProp:Cw},aw);let sd;function Fw(){return sd||(sd=P0(Lw))}const Uw=(...t)=>{const e=Fw().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=$w(r);if(!i)return;const s=e._component;!Ee(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Bw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Bw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $w(t){return at(t)?document.querySelector(t):t}const jw={__name:"App",setup(t){return(e,n)=>{const r=f0("router-view");return Mt(),hm(r)}}};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wi=typeof document<"u";function Em(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Em(t.default)}const Le=Object.assign;function Xc(t,e){const n={};for(const r in e){const i=e[r];n[r]=fn(i)?i.map(t):t(i)}return n}const Os=()=>{},fn=Array.isArray,wm=/#/g,Hw=/&/g,zw=/\//g,Kw=/=/g,Ww=/\?/g,Tm=/\+/g,Gw=/%5B/g,Qw=/%5D/g,Im=/%5E/g,Yw=/%60/g,Am=/%7B/g,Jw=/%7C/g,bm=/%7D/g,Xw=/%20/g;function Ru(t){return encodeURI(""+t).replace(Jw,"|").replace(Gw,"[").replace(Qw,"]")}function Zw(t){return Ru(t).replace(Am,"{").replace(bm,"}").replace(Im,"^")}function Cl(t){return Ru(t).replace(Tm,"%2B").replace(Xw,"+").replace(wm,"%23").replace(Hw,"%26").replace(Yw,"`").replace(Am,"{").replace(bm,"}").replace(Im,"^")}function eT(t){return Cl(t).replace(Kw,"%3D")}function tT(t){return Ru(t).replace(wm,"%23").replace(Ww,"%3F")}function nT(t){return t==null?"":tT(t).replace(zw,"%2F")}function Qs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const rT=/\/$/,iT=t=>t.replace(rT,"");function Zc(t,e,n="/"){let r,i={},s="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=cT(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:Qs(o)}}function sT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function od(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oT(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ui(e.matched[r],n.matched[i])&&Rm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ui(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!aT(t[n],e[n]))return!1;return!0}function aT(t,e){return fn(t)?ad(t,e):fn(e)?ad(e,t):t===e}function ad(t,e){return fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ys;(function(t){t.pop="pop",t.push="push"})(Ys||(Ys={}));var Ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ns||(Ns={}));function lT(t){if(!t)if(wi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iT(t)}const uT=/^[^#]+#/;function hT(t,e){return t.replace(uT,"#")+e}function fT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tc=()=>({left:window.scrollX,top:window.scrollY});function dT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=fT(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const Pl=new Map;function pT(t,e){Pl.set(t,e)}function gT(t){const e=Pl.get(t);return Pl.delete(t),e}let mT=()=>location.protocol+"//"+location.host;function Sm(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let c=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(c);return l[0]!=="/"&&(l="/"+l),od(l,"")}return od(n,t)+r+i}function _T(t,e,n,r){let i=[],s=[],o=null;const c=({state:y})=>{const E=Sm(t,location),D=n.value,M=e.value;let F=0;if(y){if(n.value=E,e.value=y,o&&o===D){o=null;return}F=M?y.position-M.position:0}else r(E);i.forEach(z=>{z(n.value,D,{delta:F,type:Ys.pop,direction:F?F>0?Ns.forward:Ns.back:Ns.unknown})})};function l(){o=n.value}function h(y){i.push(y);const E=()=>{const D=i.indexOf(y);D>-1&&i.splice(D,1)};return s.push(E),E}function u(){const{history:y}=window;y.state&&y.replaceState(Le({},y.state,{scroll:tc()}),"")}function m(){for(const y of s)y();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:h,destroy:m}}function ld(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?tc():null}}function yT(t){const{history:e,location:n}=window,r={value:Sm(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,h,u){const m=t.indexOf("#"),y=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+l:mT()+t+l;try{e[u?"replaceState":"pushState"](h,"",y),i.value=h}catch(E){console.error(E),n[u?"replace":"assign"](y)}}function o(l,h){const u=Le({},e.state,ld(i.value.back,l,i.value.forward,!0),h,{position:i.value.position});s(l,u,!0),r.value=l}function c(l,h){const u=Le({},i.value,e.state,{forward:l,scroll:tc()});s(u.current,u,!0);const m=Le({},ld(r.value,l,null),{position:u.position+1},h);s(l,m,!1),r.value=l}return{location:r,state:i,push:c,replace:o}}function vT(t){t=lT(t);const e=yT(t),n=_T(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Le({location:"",base:t,go:r,createHref:hT.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ET(t){return typeof t=="string"||t&&typeof t=="object"}function Cm(t){return typeof t=="string"||typeof t=="symbol"}const Pm=Symbol("");var ud;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ud||(ud={}));function Bi(t,e){return Le(new Error,{type:t,[Pm]:!0},e)}function Fn(t,e){return t instanceof Error&&Pm in t&&(e==null||!!(t.type&e))}const hd="[^/]+?",wT={sensitive:!1,strict:!1,start:!0,end:!0},TT=/[.+*?^${}()[\]/\\]/g;function IT(t,e){const n=Le({},wT,e),r=[];let i=n.start?"^":"";const s=[];for(const h of t){const u=h.length?[]:[90];n.strict&&!h.length&&(i+="/");for(let m=0;m<h.length;m++){const y=h[m];let E=40+(n.sensitive?.25:0);if(y.type===0)m||(i+="/"),i+=y.value.replace(TT,"\\$&"),E+=40;else if(y.type===1){const{value:D,repeatable:M,optional:F,regexp:z}=y;s.push({name:D,repeatable:M,optional:F});const K=z||hd;if(K!==hd){E+=10;try{new RegExp(`(${K})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${D}" (${K}): `+Y.message)}}let Q=M?`((?:${K})(?:/(?:${K}))*)`:`(${K})`;m||(Q=F&&h.length<2?`(?:/${Q})`:"/"+Q),F&&(Q+="?"),i+=Q,E+=20,F&&(E+=-8),M&&(E+=-20),K===".*"&&(E+=-50)}u.push(E)}r.push(u)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(h){const u=h.match(o),m={};if(!u)return null;for(let y=1;y<u.length;y++){const E=u[y]||"",D=s[y-1];m[D.name]=E&&D.repeatable?E.split("/"):E}return m}function l(h){let u="",m=!1;for(const y of t){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const E of y)if(E.type===0)u+=E.value;else if(E.type===1){const{value:D,repeatable:M,optional:F}=E,z=D in h?h[D]:"";if(fn(z)&&!M)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const K=fn(z)?z.join("/"):z;if(!K)if(F)y.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${D}"`);u+=K}}return u||"/"}return{re:o,score:r,keys:s,parse:c,stringify:l}}function AT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function km(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=AT(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(fd(r))return 1;if(fd(i))return-1}return i.length-r.length}function fd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bT={type:0,value:""},RT=/[a-zA-Z0-9_]/;function ST(t){if(!t)return[[]];if(t==="/")return[[bT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let c=0,l,h="",u="";function m(){h&&(n===0?s.push({type:0,value:h}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:h,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function y(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&m(),o()):l===":"?(m(),n=1):y();break;case 4:y(),n=r;break;case 1:l==="("?n=2:RT.test(l)?y():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),m(),o(),i}function CT(t,e,n){const r=IT(ST(t.path),n),i=Le(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function PT(t,e){const n=[],r=new Map;e=md({strict:!1,end:!0,sensitive:!1},e);function i(m){return r.get(m)}function s(m,y,E){const D=!E,M=pd(m);M.aliasOf=E&&E.record;const F=md(e,m),z=[M];if("alias"in m){const Y=typeof m.alias=="string"?[m.alias]:m.alias;for(const ge of Y)z.push(pd(Le({},M,{components:E?E.record.components:M.components,path:ge,aliasOf:E?E.record:M})))}let K,Q;for(const Y of z){const{path:ge}=Y;if(y&&ge[0]!=="/"){const fe=y.record.path,P=fe[fe.length-1]==="/"?"":"/";Y.path=y.record.path+(ge&&P+ge)}if(K=CT(Y,y,F),E?E.alias.push(K):(Q=Q||K,Q!==K&&Q.alias.push(K),D&&m.name&&!gd(K)&&o(m.name)),xm(K)&&l(K),M.children){const fe=M.children;for(let P=0;P<fe.length;P++)s(fe[P],K,E&&E.children[P])}E=E||K}return Q?()=>{o(Q)}:Os}function o(m){if(Cm(m)){const y=r.get(m);y&&(r.delete(m),n.splice(n.indexOf(y),1),y.children.forEach(o),y.alias.forEach(o))}else{const y=n.indexOf(m);y>-1&&(n.splice(y,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function c(){return n}function l(m){const y=DT(m,n);n.splice(y,0,m),m.record.name&&!gd(m)&&r.set(m.record.name,m)}function h(m,y){let E,D={},M,F;if("name"in m&&m.name){if(E=r.get(m.name),!E)throw Bi(1,{location:m});F=E.record.name,D=Le(dd(y.params,E.keys.filter(Q=>!Q.optional).concat(E.parent?E.parent.keys.filter(Q=>Q.optional):[]).map(Q=>Q.name)),m.params&&dd(m.params,E.keys.map(Q=>Q.name))),M=E.stringify(D)}else if(m.path!=null)M=m.path,E=n.find(Q=>Q.re.test(M)),E&&(D=E.parse(M),F=E.record.name);else{if(E=y.name?r.get(y.name):n.find(Q=>Q.re.test(y.path)),!E)throw Bi(1,{location:m,currentLocation:y});F=E.record.name,D=Le({},y.params,m.params),M=E.stringify(D)}const z=[];let K=E;for(;K;)z.unshift(K.record),K=K.parent;return{name:F,path:M,params:D,matched:z,meta:xT(z)}}t.forEach(m=>s(m));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:h,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:i}}function dd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:kT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function kT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xT(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function md(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function DT(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;km(t,e[s])<0?r=s:n=s+1}const i=OT(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function OT(t){let e=t;for(;e=e.parent;)if(xm(e)&&km(t,e)===0)return e}function xm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function NT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Tm," "),o=s.indexOf("="),c=Qs(o<0?s:s.slice(0,o)),l=o<0?null:Qs(s.slice(o+1));if(c in e){let h=e[c];fn(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function _d(t){let e="";for(let n in t){const r=t[n];if(n=eT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(r)?r.map(s=>s&&Cl(s)):[r&&Cl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function VT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=fn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const MT=Symbol(""),yd=Symbol(""),nc=Symbol(""),Dm=Symbol(""),kl=Symbol("");function _s(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function lr(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((c,l)=>{const h=y=>{y===!1?l(Bi(4,{from:n,to:e})):y instanceof Error?l(y):ET(y)?l(Bi(2,{from:e,to:y})):(o&&r.enterCallbacks[i]===o&&typeof y=="function"&&o.push(y),c())},u=s(()=>t.call(r&&r.instances[i],e,n,h));let m=Promise.resolve(u);t.length<3&&(m=m.then(h)),m.catch(y=>l(y))})}function el(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Em(l)){const u=(l.__vccOpts||l)[e];u&&s.push(lr(u,n,r,o,c,i))}else{let h=l();s.push(()=>h.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const m=qw(u)?u.default:u;o.mods[c]=u,o.components[c]=m;const E=(m.__vccOpts||m)[e];return E&&lr(E,n,r,o,c,i)()}))}}return s}function vd(t){const e=bn(nc),n=bn(Dm),r=Ct(()=>{const l=Pi(t.to);return e.resolve(l)}),i=Ct(()=>{const{matched:l}=r.value,{length:h}=l,u=l[h-1],m=n.matched;if(!u||!m.length)return-1;const y=m.findIndex(Ui.bind(null,u));if(y>-1)return y;const E=Ed(l[h-2]);return h>1&&Ed(u)===E&&m[m.length-1].path!==E?m.findIndex(Ui.bind(null,l[h-2])):y}),s=Ct(()=>i.value>-1&&$T(n.params,r.value.params)),o=Ct(()=>i.value>-1&&i.value===n.matched.length-1&&Rm(n.params,r.value.params));function c(l={}){if(BT(l)){const h=e[Pi(t.replace)?"replace":"push"](Pi(t.to)).catch(Os);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:s,isExactActive:o,navigate:c}}function LT(t){return t.length===1?t[0]:t}const FT=jg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vd,setup(t,{slots:e}){const n=Wa(vd(t)),{options:r}=bn(nc),i=Ct(()=>({[wd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&LT(e.default(n));return t.custom?s:bu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),UT=FT;function BT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $T(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!fn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Ed(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wd=(t,e,n)=>t??e??n,jT=jg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=bn(kl),i=Ct(()=>t.route||r.value),s=bn(yd,0),o=Ct(()=>{let h=Pi(s);const{matched:u}=i.value;let m;for(;(m=u[h])&&!m.components;)h++;return h}),c=Ct(()=>i.value.matched[o.value]);Qo(yd,Ct(()=>o.value+1)),Qo(MT,c),Qo(kl,i);const l=tt();return Xr(()=>[l.value,c.value,t.name],([h,u,m],[y,E,D])=>{u&&(u.instances[m]=h,E&&E!==u&&h&&h===y&&(u.leaveGuards.size||(u.leaveGuards=E.leaveGuards),u.updateGuards.size||(u.updateGuards=E.updateGuards))),h&&u&&(!E||!Ui(u,E)||!y)&&(u.enterCallbacks[m]||[]).forEach(M=>M(h))},{flush:"post"}),()=>{const h=i.value,u=t.name,m=c.value,y=m&&m.components[u];if(!y)return Td(n.default,{Component:y,route:h});const E=m.props[u],D=E?E===!0?h.params:typeof E=="function"?E(h):E:null,F=bu(y,Le({},D,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(m.instances[u]=null)},ref:l}));return Td(n.default,{Component:F,route:h})||F}}});function Td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qT=jT;function HT(t){const e=PT(t.routes,t),n=t.parseQuery||NT,r=t.stringifyQuery||_d,i=t.history,s=_s(),o=_s(),c=_s(),l=$E(ir);let h=ir;wi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xc.bind(null,B=>""+B),m=Xc.bind(null,nT),y=Xc.bind(null,Qs);function E(B,re){let ee,se;return Cm(B)?(ee=e.getRecordMatcher(B),se=re):se=B,e.addRoute(se,ee)}function D(B){const re=e.getRecordMatcher(B);re&&e.removeRoute(re)}function M(){return e.getRoutes().map(B=>B.record)}function F(B){return!!e.getRecordMatcher(B)}function z(B,re){if(re=Le({},re||l.value),typeof B=="string"){const O=Zc(n,B,re.path),$=e.resolve({path:O.path},re),q=i.createHref(O.fullPath);return Le(O,$,{params:y($.params),hash:Qs(O.hash),redirectedFrom:void 0,href:q})}let ee;if(B.path!=null)ee=Le({},B,{path:Zc(n,B.path,re.path).path});else{const O=Le({},B.params);for(const $ in O)O[$]==null&&delete O[$];ee=Le({},B,{params:m(O)}),re.params=m(re.params)}const se=e.resolve(ee,re),Re=B.hash||"";se.params=u(y(se.params));const b=sT(r,Le({},B,{hash:Zw(Re),path:se.path})),R=i.createHref(b);return Le({fullPath:b,hash:Re,query:r===_d?VT(B.query):B.query||{}},se,{redirectedFrom:void 0,href:R})}function K(B){return typeof B=="string"?Zc(n,B,l.value.path):Le({},B)}function Q(B,re){if(h!==B)return Bi(8,{from:re,to:B})}function Y(B){return P(B)}function ge(B){return Y(Le(K(B),{replace:!0}))}function fe(B){const re=B.matched[B.matched.length-1];if(re&&re.redirect){const{redirect:ee}=re;let se=typeof ee=="function"?ee(B):ee;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=K(se):{path:se},se.params={}),Le({query:B.query,hash:B.hash,params:se.path!=null?{}:B.params},se)}}function P(B,re){const ee=h=z(B),se=l.value,Re=B.state,b=B.force,R=B.replace===!0,O=fe(ee);if(O)return P(Le(K(O),{state:typeof O=="object"?Le({},Re,O.state):Re,force:b,replace:R}),re||ee);const $=ee;$.redirectedFrom=re;let q;return!b&&oT(r,se,ee)&&(q=Bi(16,{to:$,from:se}),Lt(se,se,!0,!1)),(q?Promise.resolve(q):C($,se)).catch(j=>Fn(j)?Fn(j,2)?j:jt(j):be(j,$,se)).then(j=>{if(j){if(Fn(j,2))return P(Le({replace:R},K(j.to),{state:typeof j.to=="object"?Le({},Re,j.to.state):Re,force:b}),re||$)}else j=S($,se,!0,R,Re);return k($,se,j),j})}function I(B,re){const ee=Q(B,re);return ee?Promise.reject(ee):Promise.resolve()}function T(B){const re=Be.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(B):B()}function C(B,re){let ee;const[se,Re,b]=zT(B,re);ee=el(se.reverse(),"beforeRouteLeave",B,re);for(const O of se)O.leaveGuards.forEach($=>{ee.push(lr($,B,re))});const R=I.bind(null,B,re);return ee.push(R),gt(ee).then(()=>{ee=[];for(const O of s.list())ee.push(lr(O,B,re));return ee.push(R),gt(ee)}).then(()=>{ee=el(Re,"beforeRouteUpdate",B,re);for(const O of Re)O.updateGuards.forEach($=>{ee.push(lr($,B,re))});return ee.push(R),gt(ee)}).then(()=>{ee=[];for(const O of b)if(O.beforeEnter)if(fn(O.beforeEnter))for(const $ of O.beforeEnter)ee.push(lr($,B,re));else ee.push(lr(O.beforeEnter,B,re));return ee.push(R),gt(ee)}).then(()=>(B.matched.forEach(O=>O.enterCallbacks={}),ee=el(b,"beforeRouteEnter",B,re,T),ee.push(R),gt(ee))).then(()=>{ee=[];for(const O of o.list())ee.push(lr(O,B,re));return ee.push(R),gt(ee)}).catch(O=>Fn(O,8)?O:Promise.reject(O))}function k(B,re,ee){c.list().forEach(se=>T(()=>se(B,re,ee)))}function S(B,re,ee,se,Re){const b=Q(B,re);if(b)return b;const R=re===ir,O=wi?history.state:{};ee&&(se||R?i.replace(B.fullPath,Le({scroll:R&&O&&O.scroll},Re)):i.push(B.fullPath,Re)),l.value=B,Lt(B,re,ee,R),jt()}let A;function Me(){A||(A=i.listen((B,re,ee)=>{if(!Ye.listening)return;const se=z(B),Re=fe(se);if(Re){P(Le(Re,{replace:!0,force:!0}),se).catch(Os);return}h=se;const b=l.value;wi&&pT(cd(b.fullPath,ee.delta),tc()),C(se,b).catch(R=>Fn(R,12)?R:Fn(R,2)?(P(Le(K(R.to),{force:!0}),se).then(O=>{Fn(O,20)&&!ee.delta&&ee.type===Ys.pop&&i.go(-1,!1)}).catch(Os),Promise.reject()):(ee.delta&&i.go(-ee.delta,!1),be(R,se,b))).then(R=>{R=R||S(se,b,!1),R&&(ee.delta&&!Fn(R,8)?i.go(-ee.delta,!1):ee.type===Ys.pop&&Fn(R,20)&&i.go(-1,!1)),k(se,b,R)}).catch(Os)}))}let rt=_s(),We=_s(),Ce;function be(B,re,ee){jt(B);const se=We.list();return se.length?se.forEach(Re=>Re(B,re,ee)):console.error(B),Promise.reject(B)}function xt(){return Ce&&l.value!==ir?Promise.resolve():new Promise((B,re)=>{rt.add([B,re])})}function jt(B){return Ce||(Ce=!B,Me(),rt.list().forEach(([re,ee])=>B?ee(B):re()),rt.reset()),B}function Lt(B,re,ee,se){const{scrollBehavior:Re}=t;if(!wi||!Re)return Promise.resolve();const b=!ee&&gT(cd(B.fullPath,0))||(se||!ee)&&history.state&&history.state.scroll||null;return Eu().then(()=>Re(B,re,b)).then(R=>R&&dT(R)).catch(R=>be(R,B,re))}const Ge=B=>i.go(B);let Qe;const Be=new Set,Ye={currentRoute:l,listening:!0,addRoute:E,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:M,resolve:z,options:t,push:Y,replace:ge,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:s.add,beforeResolve:o.add,afterEach:c.add,onError:We.add,isReady:xt,install(B){const re=this;B.component("RouterLink",UT),B.component("RouterView",qT),B.config.globalProperties.$router=re,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Pi(l)}),wi&&!Qe&&l.value===ir&&(Qe=!0,Y(i.location).catch(Re=>{}));const ee={};for(const Re in ir)Object.defineProperty(ee,Re,{get:()=>l.value[Re],enumerable:!0});B.provide(nc,re),B.provide(Dm,Rg(ee)),B.provide(kl,l);const se=B.unmount;Be.add(B),B.unmount=function(){Be.delete(B),Be.size<1&&(h=ir,A&&A(),A=null,l.value=ir,Qe=!1,Ce=!1),se()}}};function gt(B){return B.reduce((re,ee)=>re.then(()=>T(ee)),Promise.resolve())}return Ye}function zT(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const c=e.matched[o];c&&(t.matched.find(h=>Ui(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Ui(h,l))||i.push(l))}return[n,r,i]}function Om(){return bn(nc)}function KT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nm={exports:{}},st=Nm.exports={},yn,vn;function xl(){throw new Error("setTimeout has not been defined")}function Dl(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?yn=setTimeout:yn=xl}catch{yn=xl}try{typeof clearTimeout=="function"?vn=clearTimeout:vn=Dl}catch{vn=Dl}})();function Vm(t){if(yn===setTimeout)return setTimeout(t,0);if((yn===xl||!yn)&&setTimeout)return yn=setTimeout,setTimeout(t,0);try{return yn(t,0)}catch{try{return yn.call(null,t,0)}catch{return yn.call(this,t,0)}}}function WT(t){if(vn===clearTimeout)return clearTimeout(t);if((vn===Dl||!vn)&&clearTimeout)return vn=clearTimeout,clearTimeout(t);try{return vn(t)}catch{try{return vn.call(null,t)}catch{return vn.call(this,t)}}}var qn=[],Di=!1,Gr,Zo=-1;function GT(){!Di||!Gr||(Di=!1,Gr.length?qn=Gr.concat(qn):Zo=-1,qn.length&&Mm())}function Mm(){if(!Di){var t=Vm(GT);Di=!0;for(var e=qn.length;e;){for(Gr=qn,qn=[];++Zo<e;)Gr&&Gr[Zo].run();Zo=-1,e=qn.length}Gr=null,Di=!1,WT(t)}}st.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];qn.push(new Lm(t,e)),qn.length===1&&!Di&&Vm(Mm)};function Lm(t,e){this.fun=t,this.array=e}Lm.prototype.run=function(){this.fun.apply(null,this.array)};st.title="browser";st.browser=!0;st.env={};st.argv=[];st.version="";st.versions={};function Zn(){}st.on=Zn;st.addListener=Zn;st.once=Zn;st.off=Zn;st.removeListener=Zn;st.removeAllListeners=Zn;st.emit=Zn;st.prependListener=Zn;st.prependOnceListener=Zn;st.listeners=function(t){return[]};st.binding=function(t){throw new Error("process.binding is not supported")};st.cwd=function(){return"/"};st.chdir=function(t){throw new Error("process.chdir is not supported")};st.umask=function(){return 0};var QT=Nm.exports;const YT=KT(QT),JT=()=>{};var Id={};/**
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
 */const Fm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],c=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,c=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,u=s>>2,m=(s&3)<<4|c>>4;let y=(c&15)<<2|h>>6,E=h&63;l||(E=64,o||(y=64)),r.push(n[u],n[m],n[y],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new ZT;const y=s<<2|c>>4;if(r.push(y),h!==64){const E=c<<4&240|h>>2;if(r.push(E),m!==64){const D=h<<6&192|m;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eI=function(t){const e=Fm(t);return Um.encodeByteArray(e,!0)},Ea=function(t){return eI(t).replace(/\./g,"")},Bm=function(t){try{return Um.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Wn<"u")return Wn;throw new Error("Unable to locate global object.")}/**
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
 */const nI=()=>tI().__FIREBASE_DEFAULTS__,rI=()=>{if(typeof YT>"u"||typeof Id>"u")return;const t=Id.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bm(t[1]);return e&&JSON.parse(e)},rc=()=>{try{return JT()||nI()||rI()||iI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$m=t=>{var e,n;return(n=(e=rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sI=t=>{const e=$m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jm=()=>{var t;return(t=rc())===null||t===void 0?void 0:t.config},qm=t=>{var e;return(e=rc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class oI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ea(JSON.stringify(n)),Ea(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function lI(){var t;const e=(t=rc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(Wn.process)==="[object process]"}catch{return!1}}function uI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Su(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dI(){return!lI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cu(){try{return typeof indexedDB=="object"}catch{return!1}}function Pu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Hm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pI="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pI,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gI(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new gn(i,c,r)}}function gI(t,e){return t.replace(mI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mI=/\{\$([^}]+)}/g;function _I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ad(s)&&Ad(o)){if(!Rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ad(t){return t!==null&&typeof t=="object"}/**
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
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Es(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yI(t,e){const n=new vI(t,e);return n.subscribe.bind(n)}class vI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tl),i.error===void 0&&(i.error=tl),i.complete===void 0&&(i.complete=tl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tl(){}/**
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
 */const wI=1e3,TI=2,II=4*60*60*1e3,AI=.5;function bd(t,e=wI,n=TI){const r=e*Math.pow(n,t),i=Math.round(AI*r*(Math.random()-.5)*2);return Math.min(II,r+i)}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class bI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SI(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(t){return t===Kr?void 0:t}function SI(t){return t.instantiationMode==="EAGER"}/**
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
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const PI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},kI=Pe.INFO,xI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},DI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ic{constructor(e){this.name=e,this._logLevel=kI,this._logHandler=DI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const OI=(t,e)=>e.some(n=>t instanceof n);let Rd,Sd;function NI(){return Rd||(Rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VI(){return Sd||(Sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zm=new WeakMap,Ol=new WeakMap,Km=new WeakMap,nl=new WeakMap,ku=new WeakMap;function MI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zm.set(n,t)}).catch(()=>{}),ku.set(e,t),e}function LI(t){if(Ol.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ol.set(t,e)}let Nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Km.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FI(t){Nl=t(Nl)}function UI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rl(this),e,...n);return Km.set(r,e.sort?e.sort():[e]),yr(r)}:VI().includes(t)?function(...e){return t.apply(rl(this),e),yr(zm.get(this))}:function(...e){return yr(t.apply(rl(this),e))}}function BI(t){return typeof t=="function"?UI(t):(t instanceof IDBTransaction&&LI(t),OI(t,NI())?new Proxy(t,Nl):t)}function yr(t){if(t instanceof IDBRequest)return MI(t);if(nl.has(t))return nl.get(t);const e=BI(t);return e!==t&&(nl.set(t,e),ku.set(e,t)),e}const rl=t=>ku.get(t);function Wm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const $I=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],il=new Map;function Cd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(il.get(e))return il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$I.includes(n)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&l.done]))[0]};return il.set(e,s),s}FI(t=>({...t,get:(e,n,r)=>Cd(e,n)||t.get(e,n,r),has:(e,n)=>!!Cd(e,n)||t.has(e,n)}));/**
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
 */class qI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vl="@firebase/app",Pd="0.11.4";/**
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
 */const Gn=new ic("@firebase/app"),zI="@firebase/app-compat",KI="@firebase/analytics-compat",WI="@firebase/analytics",GI="@firebase/app-check-compat",QI="@firebase/app-check",YI="@firebase/auth",JI="@firebase/auth-compat",XI="@firebase/database",ZI="@firebase/data-connect",eA="@firebase/database-compat",tA="@firebase/functions",nA="@firebase/functions-compat",rA="@firebase/installations",iA="@firebase/installations-compat",sA="@firebase/messaging",oA="@firebase/messaging-compat",aA="@firebase/performance",cA="@firebase/performance-compat",lA="@firebase/remote-config",uA="@firebase/remote-config-compat",hA="@firebase/storage",fA="@firebase/storage-compat",dA="@firebase/firestore",pA="@firebase/vertexai",gA="@firebase/firestore-compat",mA="firebase",_A="11.6.0";/**
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
 */const Ml="[DEFAULT]",yA={[Vl]:"fire-core",[zI]:"fire-core-compat",[WI]:"fire-analytics",[KI]:"fire-analytics-compat",[QI]:"fire-app-check",[GI]:"fire-app-check-compat",[YI]:"fire-auth",[JI]:"fire-auth-compat",[XI]:"fire-rtdb",[ZI]:"fire-data-connect",[eA]:"fire-rtdb-compat",[tA]:"fire-fn",[nA]:"fire-fn-compat",[rA]:"fire-iid",[iA]:"fire-iid-compat",[sA]:"fire-fcm",[oA]:"fire-fcm-compat",[aA]:"fire-perf",[cA]:"fire-perf-compat",[lA]:"fire-rc",[uA]:"fire-rc-compat",[hA]:"fire-gcs",[fA]:"fire-gcs-compat",[dA]:"fire-fst",[gA]:"fire-fst-compat",[pA]:"fire-vertex","fire-js":"fire-js",[mA]:"fire-js-all"};/**
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
 */const wa=new Map,vA=new Map,Ll=new Map;function kd(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Ll.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;Ll.set(e,t);for(const n of wa.values())kd(n,t);for(const n of vA.values())kd(n,t);return!0}function ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t==null?!1:t.settings!==void 0}/**
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
 */const EA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new ai("app","Firebase",EA);/**
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
 */class wA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yi=_A;function Gm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ml,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=jm()),!n)throw vr.create("no-options");const s=wa.get(i);if(s){if(Rr(n,s.options)&&Rr(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new CI(i);for(const l of Ll.values())o.addComponent(l);const c=new wA(n,r,o);return wa.set(i,c),c}function xu(t=Ml){const e=wa.get(t);if(!e&&t===Ml&&jm())return Gm();if(!e)throw vr.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=yA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(c.join(" "));return}xn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const TA="firebase-heartbeat-database",IA=1,Js="firebase-heartbeat-store";let sl=null;function Qm(){return sl||(sl=Wm(TA,IA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Js)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),sl}async function AA(t){try{const n=(await Qm()).transaction(Js),r=await n.objectStore(Js).get(Ym(t));return await n.done,r}catch(e){if(e instanceof gn)Gn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function xd(t,e){try{const r=(await Qm()).transaction(Js,"readwrite");await r.objectStore(Js).put(e,Ym(t)),await r.done}catch(n){if(n instanceof gn)Gn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function Ym(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bA=1024,RA=30;class SA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>RA){const o=kA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dd(),{heartbeatsToSend:r,unsentEntries:i}=CA(this._heartbeatsCache.heartbeats),s=Ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function Dd(){return new Date().toISOString().substring(0,10)}function CA(t,e=bA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Od(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cu()?Pu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Od(t){return Ea(JSON.stringify({version:2,heartbeats:t})).length}function kA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function xA(t){xn(new dn("platform-logger",e=>new qI(e),"PRIVATE")),xn(new dn("heartbeat",e=>new SA(e),"PRIVATE")),nn(Vl,Pd,t),nn(Vl,Pd,"esm2017"),nn("fire-js","")}xA("");var DA="firebase",OA="11.6.0";/**
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
 */nn(DA,OA,"app");const Jm="@firebase/installations",Du="0.6.13";/**
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
 */const Xm=1e4,Zm=`w:${Du}`,e_="FIS_v2",NA="https://firebaseinstallations.googleapis.com/v1",VA=60*60*1e3,MA="installations",LA="Installations";/**
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
 */const FA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ti=new ai(MA,LA,FA);function t_(t){return t instanceof gn&&t.code.includes("request-failed")}/**
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
 */function n_({projectId:t}){return`${NA}/projects/${t}/installations`}function r_(t){return{token:t.token,requestStatus:2,expiresIn:BA(t.expiresIn),creationTime:Date.now()}}async function i_(t,e){const r=(await e.json()).error;return ti.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function s_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function UA(t,{refreshToken:e}){const n=s_(t);return n.append("Authorization",$A(e)),n}async function o_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function BA(t){return Number(t.replace("s","000"))}function $A(t){return`${e_} ${t}`}/**
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
 */async function jA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=n_(t),i=s_(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:e_,appId:t.appId,sdkVersion:Zm},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await o_(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:r_(h.authToken)}}else throw await i_("Create Installation",l)}/**
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
 */function a_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function qA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const HA=/^[cdef][\w-]{21}$/,Fl="";function zA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=KA(t);return HA.test(n)?n:Fl}catch{return Fl}}function KA(t){return qA(t).substr(0,22)}/**
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
 */function sc(t){return`${t.appName}!${t.appId}`}/**
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
 */const c_=new Map;function l_(t,e){const n=sc(t);u_(n,e),WA(n,e)}function u_(t,e){const n=c_.get(t);if(n)for(const r of n)r(e)}function WA(t,e){const n=GA();n&&n.postMessage({key:t,fid:e}),QA()}let Qr=null;function GA(){return!Qr&&"BroadcastChannel"in self&&(Qr=new BroadcastChannel("[Firebase] FID Change"),Qr.onmessage=t=>{u_(t.data.key,t.data.fid)}),Qr}function QA(){c_.size===0&&Qr&&(Qr.close(),Qr=null)}/**
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
 */const YA="firebase-installations-database",JA=1,ni="firebase-installations-store";let ol=null;function Ou(){return ol||(ol=Wm(YA,JA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}})),ol}async function Ta(t,e){const n=sc(t),i=(await Ou()).transaction(ni,"readwrite"),s=i.objectStore(ni),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&l_(t,e.fid),e}async function h_(t){const e=sc(t),r=(await Ou()).transaction(ni,"readwrite");await r.objectStore(ni).delete(e),await r.done}async function oc(t,e){const n=sc(t),i=(await Ou()).transaction(ni,"readwrite"),s=i.objectStore(ni),o=await s.get(n),c=e(o);return c===void 0?await s.delete(n):await s.put(c,n),await i.done,c&&(!o||o.fid!==c.fid)&&l_(t,c.fid),c}/**
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
 */async function Nu(t){let e;const n=await oc(t.appConfig,r=>{const i=XA(r),s=ZA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Fl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function XA(t){const e=t||{fid:zA(),registrationStatus:0};return f_(e)}function ZA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ti.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=eb(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tb(t)}:{installationEntry:e}}async function eb(t,e){try{const n=await jA(t,e);return Ta(t.appConfig,n)}catch(n){throw t_(n)&&n.customData.serverCode===409?await h_(t.appConfig):await Ta(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tb(t){let e=await Nd(t.appConfig);for(;e.registrationStatus===1;)await a_(100),e=await Nd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Nu(t);return r||n}return e}function Nd(t){return oc(t,e=>{if(!e)throw ti.create("installation-not-found");return f_(e)})}function f_(t){return nb(t)?{fid:t.fid,registrationStatus:0}:t}function nb(t){return t.registrationStatus===1&&t.registrationTime+Xm<Date.now()}/**
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
 */async function rb({appConfig:t,heartbeatServiceProvider:e},n){const r=ib(t,n),i=UA(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:Zm,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await o_(()=>fetch(r,c));if(l.ok){const h=await l.json();return r_(h)}else throw await i_("Generate Auth Token",l)}function ib(t,{fid:e}){return`${n_(t)}/${e}/authTokens:generate`}/**
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
 */async function Vu(t,e=!1){let n;const r=await oc(t.appConfig,s=>{if(!d_(s))throw ti.create("not-registered");const o=s.authToken;if(!e&&ab(o))return s;if(o.requestStatus===1)return n=sb(t,e),s;{if(!navigator.onLine)throw ti.create("app-offline");const c=lb(s);return n=ob(t,c),c}});return n?await n:r.authToken}async function sb(t,e){let n=await Vd(t.appConfig);for(;n.authToken.requestStatus===1;)await a_(100),n=await Vd(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vu(t,e):r}function Vd(t){return oc(t,e=>{if(!d_(e))throw ti.create("not-registered");const n=e.authToken;return ub(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ob(t,e){try{const n=await rb(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ta(t.appConfig,r),n}catch(n){if(t_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await h_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ta(t.appConfig,r)}throw n}}function d_(t){return t!==void 0&&t.registrationStatus===2}function ab(t){return t.requestStatus===2&&!cb(t)}function cb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+VA}function lb(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ub(t){return t.requestStatus===1&&t.requestTime+Xm<Date.now()}/**
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
 */async function hb(t){const e=t,{installationEntry:n,registrationPromise:r}=await Nu(e);return r?r.catch(console.error):Vu(e).catch(console.error),n.fid}/**
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
 */async function fb(t,e=!1){const n=t;return await db(n),(await Vu(n,e)).token}async function db(t){const{registrationPromise:e}=await Nu(t);e&&await e}/**
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
 */function pb(t){if(!t||!t.options)throw al("App Configuration");if(!t.name)throw al("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw al(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function al(t){return ti.create("missing-app-config-values",{valueName:t})}/**
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
 */const p_="installations",gb="installations-internal",mb=t=>{const e=t.getProvider("app").getImmediate(),n=pb(e),r=ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_b=t=>{const e=t.getProvider("app").getImmediate(),n=ci(e,p_).getImmediate();return{getId:()=>hb(n),getToken:i=>fb(n,i)}};function yb(){xn(new dn(p_,mb,"PUBLIC")),xn(new dn(gb,_b,"PRIVATE"))}yb();nn(Jm,Du);nn(Jm,Du,"esm2017");/**
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
 */const Ia="analytics",vb="firebase_id",Eb="origin",wb=60*1e3,Tb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mu="https://www.googletagmanager.com/gtag/js";/**
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
 */const $t=new ic("@firebase/analytics");/**
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
 */const Ib={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Gt=new ai("analytics","Analytics",Ib);/**
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
 */function Ab(t){if(!t.startsWith(Mu)){const e=Gt.create("invalid-gtag-resource",{gtagURL:t});return $t.warn(e.message),""}return t}function g_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function bb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Rb(t,e){const n=bb("firebase-js-sdk-policy",{createScriptURL:Ab}),r=document.createElement("script"),i=`${Mu}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Sb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Cb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await g_(n)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(c){$t.error(c)}t("config",i,s)}async function Pb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await g_(n);for(const l of o){const h=c.find(m=>m.measurementId===l),u=h&&e[h.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){$t.error(s)}}function kb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[c,l]=o;await Pb(t,e,n,c,l)}else if(s==="config"){const[c,l]=o;await Cb(t,e,n,r,c,l)}else if(s==="consent"){const[c,l]=o;t("consent",c,l)}else if(s==="get"){const[c,l,h]=o;t("get",c,l,h)}else if(s==="set"){const[c]=o;t("set",c)}else t(s,...o)}catch(c){$t.error(c)}}return i}function xb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=kb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Db(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Mu)&&n.src.includes(t))return n;return null}/**
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
 */const Ob=30,Nb=1e3;class Vb{constructor(e={},n=Nb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const m_=new Vb;function Mb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Lb(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Mb(r)},s=Tb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Gt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function Fb(t,e=m_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Gt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Gt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new $b;return setTimeout(async()=>{c.abort()},wb),__({appId:r,apiKey:i,measurementId:s},o,c,e)}async function __(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=m_){var s;const{appId:o,measurementId:c}=t;try{await Ub(r,e)}catch(l){if(c)return $t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await Lb(t);return i.deleteThrottleMetadata(o),l}catch(l){const h=l;if(!Bb(h)){if(i.deleteThrottleMetadata(o),c)return $t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:c};throw l}const u=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?bd(n,i.intervalMillis,Ob):bd(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,m),$t.debug(`Calling attemptFetch again in ${u} millis`),__(t,m,r,i)}}function Ub(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Bb(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $b{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function jb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function qb(){if(Cu())try{await Pu()}catch(t){return $t.warn(Gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return $t.warn(Gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hb(t,e,n,r,i,s,o){var c;const l=Fb(t);l.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&$t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>$t.error(E)),e.push(l);const h=qb().then(E=>{if(E)return r.getId()}),[u,m]=await Promise.all([l,h]);Db(s)||Rb(s,u.measurementId),i("js",new Date);const y=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return y[Eb]="firebase",y.update=!0,m!=null&&(y[vb]=m),i("config",u.measurementId,y),u.measurementId}/**
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
 */class zb{constructor(e){this.app=e}_delete(){return delete Vs[this.app.options.appId],Promise.resolve()}}let Vs={},Md=[];const Ld={};let cl="dataLayer",Kb="gtag",Fd,y_,Ud=!1;function Wb(){const t=[];if(Su()&&t.push("This is a browser extension environment."),Hm()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Gt.create("invalid-analytics-context",{errorInfo:e});$t.warn(n.message)}}function Gb(t,e,n){Wb();const r=t.options.appId;if(!r)throw Gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Gt.create("no-api-key");if(Vs[r]!=null)throw Gt.create("already-exists",{id:r});if(!Ud){Sb(cl);const{wrappedGtag:s,gtagCore:o}=xb(Vs,Md,Ld,cl,Kb);y_=s,Fd=o,Ud=!0}return Vs[r]=Hb(t,Md,Ld,e,Fd,cl,n),new zb(t)}function Qb(t=xu()){t=Et(t);const e=ci(t,Ia);return e.isInitialized()?e.getImmediate():Yb(t)}function Yb(t,e={}){const n=ci(t,Ia);if(n.isInitialized()){const i=n.getImmediate();if(Rr(e,n.getOptions()))return i;throw Gt.create("already-initialized")}return n.initialize({options:e})}async function Jb(){if(Su()||!Hm()||!Cu())return!1;try{return await Pu()}catch{return!1}}function Xb(t,e,n,r){t=Et(t),jb(y_,Vs[t.app.options.appId],e,n,r).catch(i=>$t.error(i))}const Bd="@firebase/analytics",$d="0.10.12";function Zb(){xn(new dn(Ia,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Gb(r,i,n)},"PUBLIC")),xn(new dn("analytics-internal",t,"PRIVATE")),nn(Bd,$d),nn(Bd,$d,"esm2017");function t(e){try{const n=e.getProvider(Ia).getImmediate();return{logEvent:(r,i,s)=>Xb(n,r,i,s)}}catch(n){throw Gt.create("interop-component-reg-failed",{reason:n})}}}Zb();var v_={},ac={};ac.byteLength=nR;ac.toByteArray=iR;ac.fromByteArray=aR;var In=[],Jt=[],eR=typeof Uint8Array<"u"?Uint8Array:Array,ll="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var vi=0,tR=ll.length;vi<tR;++vi)In[vi]=ll[vi],Jt[ll.charCodeAt(vi)]=vi;Jt[45]=62;Jt[95]=63;function E_(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function nR(t){var e=E_(t),n=e[0],r=e[1];return(n+r)*3/4-r}function rR(t,e,n){return(e+n)*3/4-n}function iR(t){var e,n=E_(t),r=n[0],i=n[1],s=new eR(rR(t,r,i)),o=0,c=i>0?r-4:r,l;for(l=0;l<c;l+=4)e=Jt[t.charCodeAt(l)]<<18|Jt[t.charCodeAt(l+1)]<<12|Jt[t.charCodeAt(l+2)]<<6|Jt[t.charCodeAt(l+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=Jt[t.charCodeAt(l)]<<2|Jt[t.charCodeAt(l+1)]>>4,s[o++]=e&255),i===1&&(e=Jt[t.charCodeAt(l)]<<10|Jt[t.charCodeAt(l+1)]<<4|Jt[t.charCodeAt(l+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}function sR(t){return In[t>>18&63]+In[t>>12&63]+In[t>>6&63]+In[t&63]}function oR(t,e,n){for(var r,i=[],s=e;s<n;s+=3)r=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(t[s+2]&255),i.push(sR(r));return i.join("")}function aR(t){for(var e,n=t.length,r=n%3,i=[],s=16383,o=0,c=n-r;o<c;o+=s)i.push(oR(t,o,o+s>c?c:o+s));return r===1?(e=t[n-1],i.push(In[e>>2]+In[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],i.push(In[e>>10]+In[e>>4&63]+In[e<<2&63]+"=")),i.join("")}var Lu={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Lu.read=function(t,e,n,r,i){var s,o,c=i*8-r-1,l=(1<<c)-1,h=l>>1,u=-7,m=n?i-1:0,y=n?-1:1,E=t[e+m];for(m+=y,s=E&(1<<-u)-1,E>>=-u,u+=c;u>0;s=s*256+t[e+m],m+=y,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=r;u>0;o=o*256+t[e+m],m+=y,u-=8);if(s===0)s=1-h;else{if(s===l)return o?NaN:(E?-1:1)*(1/0);o=o+Math.pow(2,r),s=s-h}return(E?-1:1)*o*Math.pow(2,s-r)};Lu.write=function(t,e,n,r,i,s){var o,c,l,h=s*8-i-1,u=(1<<h)-1,m=u>>1,y=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=r?0:s-1,D=r?1:-1,M=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(c=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+m>=1?e+=y/l:e+=y*Math.pow(2,1-m),e*l>=2&&(o++,l/=2),o+m>=u?(c=0,o=u):o+m>=1?(c=(e*l-1)*Math.pow(2,i),o=o+m):(c=e*Math.pow(2,m-1)*Math.pow(2,i),o=0));i>=8;t[n+E]=c&255,E+=D,c/=256,i-=8);for(o=o<<i|c,h+=i;h>0;t[n+E]=o&255,E+=D,o/=256,h-=8);t[n+E-D]|=M*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=ac,n=Lu,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=u,t.SlowBuffer=ge,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i;const{Uint8Array:s,ArrayBuffer:o,SharedArrayBuffer:c}=globalThis;u.TYPED_ARRAY_SUPPORT=l(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function l(){try{const _=new s(1),d={foo:function(){return 42}};return Object.setPrototypeOf(d,s.prototype),Object.setPrototypeOf(_,d),_.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function h(_){if(_>i)throw new RangeError('The value "'+_+'" is invalid for option "size"');const d=new s(_);return Object.setPrototypeOf(d,u.prototype),d}function u(_,d,p){if(typeof _=="number"){if(typeof d=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return D(_)}return m(_,d,p)}u.poolSize=8192;function m(_,d,p){if(typeof _=="string")return M(_,d);if(o.isView(_))return z(_);if(_==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof _);if(ce(_,o)||_&&ce(_.buffer,o)||typeof c<"u"&&(ce(_,c)||_&&ce(_.buffer,c)))return K(_,d,p);if(typeof _=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const w=_.valueOf&&_.valueOf();if(w!=null&&w!==_)return u.from(w,d,p);const x=Q(_);if(x)return x;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof _[Symbol.toPrimitive]=="function")return u.from(_[Symbol.toPrimitive]("string"),d,p);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof _)}u.from=function(_,d,p){return m(_,d,p)},Object.setPrototypeOf(u.prototype,s.prototype),Object.setPrototypeOf(u,s);function y(_){if(typeof _!="number")throw new TypeError('"size" argument must be of type number');if(_<0)throw new RangeError('The value "'+_+'" is invalid for option "size"')}function E(_,d,p){return y(_),_<=0?h(_):d!==void 0?typeof p=="string"?h(_).fill(d,p):h(_).fill(d):h(_)}u.alloc=function(_,d,p){return E(_,d,p)};function D(_){return y(_),h(_<0?0:Y(_)|0)}u.allocUnsafe=function(_){return D(_)},u.allocUnsafeSlow=function(_){return D(_)};function M(_,d){if((typeof d!="string"||d==="")&&(d="utf8"),!u.isEncoding(d))throw new TypeError("Unknown encoding: "+d);const p=fe(_,d)|0;let w=h(p);const x=w.write(_,d);return x!==p&&(w=w.slice(0,x)),w}function F(_){const d=_.length<0?0:Y(_.length)|0,p=h(d);for(let w=0;w<d;w+=1)p[w]=_[w]&255;return p}function z(_){if(ce(_,s)){const d=new s(_);return K(d.buffer,d.byteOffset,d.byteLength)}return F(_)}function K(_,d,p){if(d<0||_.byteLength<d)throw new RangeError('"offset" is outside of buffer bounds');if(_.byteLength<d+(p||0))throw new RangeError('"length" is outside of buffer bounds');let w;return d===void 0&&p===void 0?w=new s(_):p===void 0?w=new s(_,d):w=new s(_,d,p),Object.setPrototypeOf(w,u.prototype),w}function Q(_){if(u.isBuffer(_)){const d=Y(_.length)|0,p=h(d);return p.length===0||_.copy(p,0,0,d),p}if(_.length!==void 0)return typeof _.length!="number"||le(_.length)?h(0):F(_);if(_.type==="Buffer"&&Array.isArray(_.data))return F(_.data)}function Y(_){if(_>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return _|0}function ge(_){return+_!=_&&(_=0),u.alloc(+_)}u.isBuffer=function(d){return d!=null&&d._isBuffer===!0&&d!==u.prototype},u.compare=function(d,p){if(ce(d,s)&&(d=u.from(d,d.offset,d.byteLength)),ce(p,s)&&(p=u.from(p,p.offset,p.byteLength)),!u.isBuffer(d)||!u.isBuffer(p))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(d===p)return 0;let w=d.length,x=p.length;for(let V=0,U=Math.min(w,x);V<U;++V)if(d[V]!==p[V]){w=d[V],x=p[V];break}return w<x?-1:x<w?1:0},u.isEncoding=function(d){switch(String(d).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(d,p){if(!Array.isArray(d))throw new TypeError('"list" argument must be an Array of Buffers');if(d.length===0)return u.alloc(0);let w;if(p===void 0)for(p=0,w=0;w<d.length;++w)p+=d[w].length;const x=u.allocUnsafe(p);let V=0;for(w=0;w<d.length;++w){let U=d[w];if(ce(U,s))V+U.length>x.length?(u.isBuffer(U)||(U=u.from(U)),U.copy(x,V)):s.prototype.set.call(x,U,V);else if(u.isBuffer(U))U.copy(x,V);else throw new TypeError('"list" argument must be an Array of Buffers');V+=U.length}return x};function fe(_,d){if(u.isBuffer(_))return _.length;if(o.isView(_)||ce(_,o))return _.byteLength;if(typeof _!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof _);const p=_.length,w=arguments.length>2&&arguments[2]===!0;if(!w&&p===0)return 0;let x=!1;for(;;)switch(d){case"ascii":case"latin1":case"binary":return p;case"utf8":case"utf-8":return J(_).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p*2;case"hex":return p>>>1;case"base64":return ne(_).length;default:if(x)return w?-1:J(_).length;d=(""+d).toLowerCase(),x=!0}}u.byteLength=fe;function P(_,d,p){let w=!1;if((d===void 0||d<0)&&(d=0),d>this.length||((p===void 0||p>this.length)&&(p=this.length),p<=0)||(p>>>=0,d>>>=0,p<=d))return"";for(_||(_="utf8");;)switch(_){case"hex":return Ge(this,d,p);case"utf8":case"utf-8":return Ce(this,d,p);case"ascii":return jt(this,d,p);case"latin1":case"binary":return Lt(this,d,p);case"base64":return We(this,d,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Qe(this,d,p);default:if(w)throw new TypeError("Unknown encoding: "+_);_=(_+"").toLowerCase(),w=!0}}u.prototype._isBuffer=!0;function I(_,d,p){const w=_[d];_[d]=_[p],_[p]=w}u.prototype.swap16=function(){const d=this.length;if(d%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let p=0;p<d;p+=2)I(this,p,p+1);return this},u.prototype.swap32=function(){const d=this.length;if(d%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let p=0;p<d;p+=4)I(this,p,p+3),I(this,p+1,p+2);return this},u.prototype.swap64=function(){const d=this.length;if(d%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let p=0;p<d;p+=8)I(this,p,p+7),I(this,p+1,p+6),I(this,p+2,p+5),I(this,p+3,p+4);return this},u.prototype.toString=function(){const d=this.length;return d===0?"":arguments.length===0?Ce(this,0,d):P.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(d){if(!u.isBuffer(d))throw new TypeError("Argument must be a Buffer");return this===d?!0:u.compare(this,d)===0},u.prototype.inspect=function(){let d="";const p=t.INSPECT_MAX_BYTES;return d=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(d+=" ... "),"<Buffer "+d+">"},r&&(u.prototype[r]=u.prototype.inspect),u.prototype.compare=function(d,p,w,x,V){if(ce(d,s)&&(d=u.from(d,d.offset,d.byteLength)),!u.isBuffer(d))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof d);if(p===void 0&&(p=0),w===void 0&&(w=d?d.length:0),x===void 0&&(x=0),V===void 0&&(V=this.length),p<0||w>d.length||x<0||V>this.length)throw new RangeError("out of range index");if(x>=V&&p>=w)return 0;if(x>=V)return-1;if(p>=w)return 1;if(p>>>=0,w>>>=0,x>>>=0,V>>>=0,this===d)return 0;let U=V-x,Ie=w-p;const He=Math.min(U,Ie),$e=this.slice(x,V),Je=d.slice(p,w);for(let Oe=0;Oe<He;++Oe)if($e[Oe]!==Je[Oe]){U=$e[Oe],Ie=Je[Oe];break}return U<Ie?-1:Ie<U?1:0};function T(_,d,p,w,x){if(_.length===0)return-1;if(typeof p=="string"?(w=p,p=0):p>2147483647?p=2147483647:p<-2147483648&&(p=-2147483648),p=+p,le(p)&&(p=x?0:_.length-1),p<0&&(p=_.length+p),p>=_.length){if(x)return-1;p=_.length-1}else if(p<0)if(x)p=0;else return-1;if(typeof d=="string"&&(d=u.from(d,w)),u.isBuffer(d))return d.length===0?-1:C(_,d,p,w,x);if(typeof d=="number")return d=d&255,typeof s.prototype.indexOf=="function"?x?s.prototype.indexOf.call(_,d,p):s.prototype.lastIndexOf.call(_,d,p):C(_,[d],p,w,x);throw new TypeError("val must be string, number or Buffer")}function C(_,d,p,w,x){let V=1,U=_.length,Ie=d.length;if(w!==void 0&&(w=String(w).toLowerCase(),w==="ucs2"||w==="ucs-2"||w==="utf16le"||w==="utf-16le")){if(_.length<2||d.length<2)return-1;V=2,U/=2,Ie/=2,p/=2}function He(Je,Oe){return V===1?Je[Oe]:Je.readUInt16BE(Oe*V)}let $e;if(x){let Je=-1;for($e=p;$e<U;$e++)if(He(_,$e)===He(d,Je===-1?0:$e-Je)){if(Je===-1&&(Je=$e),$e-Je+1===Ie)return Je*V}else Je!==-1&&($e-=$e-Je),Je=-1}else for(p+Ie>U&&(p=U-Ie),$e=p;$e>=0;$e--){let Je=!0;for(let Oe=0;Oe<Ie;Oe++)if(He(_,$e+Oe)!==He(d,Oe)){Je=!1;break}if(Je)return $e}return-1}u.prototype.includes=function(d,p,w){return this.indexOf(d,p,w)!==-1},u.prototype.indexOf=function(d,p,w){return T(this,d,p,w,!0)},u.prototype.lastIndexOf=function(d,p,w){return T(this,d,p,w,!1)};function k(_,d,p,w){p=Number(p)||0;const x=_.length-p;w?(w=Number(w),w>x&&(w=x)):w=x;const V=d.length;w>V/2&&(w=V/2);let U;for(U=0;U<w;++U){const Ie=parseInt(d.substr(U*2,2),16);if(le(Ie))return U;_[p+U]=Ie}return U}function S(_,d,p,w){return oe(J(d,_.length-p),_,p,w)}function A(_,d,p,w){return oe(W(d),_,p,w)}function Me(_,d,p,w){return oe(ne(d),_,p,w)}function rt(_,d,p,w){return oe(ue(d,_.length-p),_,p,w)}u.prototype.write=function(d,p,w,x){if(p===void 0)x="utf8",w=this.length,p=0;else if(w===void 0&&typeof p=="string")x=p,w=this.length,p=0;else if(isFinite(p))p=p>>>0,isFinite(w)?(w=w>>>0,x===void 0&&(x="utf8")):(x=w,w=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const V=this.length-p;if((w===void 0||w>V)&&(w=V),d.length>0&&(w<0||p<0)||p>this.length)throw new RangeError("Attempt to write outside buffer bounds");x||(x="utf8");let U=!1;for(;;)switch(x){case"hex":return k(this,d,p,w);case"utf8":case"utf-8":return S(this,d,p,w);case"ascii":case"latin1":case"binary":return A(this,d,p,w);case"base64":return Me(this,d,p,w);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rt(this,d,p,w);default:if(U)throw new TypeError("Unknown encoding: "+x);x=(""+x).toLowerCase(),U=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function We(_,d,p){return d===0&&p===_.length?e.fromByteArray(_):e.fromByteArray(_.slice(d,p))}function Ce(_,d,p){p=Math.min(_.length,p);const w=[];let x=d;for(;x<p;){const V=_[x];let U=null,Ie=V>239?4:V>223?3:V>191?2:1;if(x+Ie<=p){let He,$e,Je,Oe;switch(Ie){case 1:V<128&&(U=V);break;case 2:He=_[x+1],(He&192)===128&&(Oe=(V&31)<<6|He&63,Oe>127&&(U=Oe));break;case 3:He=_[x+1],$e=_[x+2],(He&192)===128&&($e&192)===128&&(Oe=(V&15)<<12|(He&63)<<6|$e&63,Oe>2047&&(Oe<55296||Oe>57343)&&(U=Oe));break;case 4:He=_[x+1],$e=_[x+2],Je=_[x+3],(He&192)===128&&($e&192)===128&&(Je&192)===128&&(Oe=(V&15)<<18|(He&63)<<12|($e&63)<<6|Je&63,Oe>65535&&Oe<1114112&&(U=Oe))}}U===null?(U=65533,Ie=1):U>65535&&(U-=65536,w.push(U>>>10&1023|55296),U=56320|U&1023),w.push(U),x+=Ie}return xt(w)}const be=4096;function xt(_){const d=_.length;if(d<=be)return String.fromCharCode.apply(String,_);let p="",w=0;for(;w<d;)p+=String.fromCharCode.apply(String,_.slice(w,w+=be));return p}function jt(_,d,p){let w="";p=Math.min(_.length,p);for(let x=d;x<p;++x)w+=String.fromCharCode(_[x]&127);return w}function Lt(_,d,p){let w="";p=Math.min(_.length,p);for(let x=d;x<p;++x)w+=String.fromCharCode(_[x]);return w}function Ge(_,d,p){const w=_.length;(!d||d<0)&&(d=0),(!p||p<0||p>w)&&(p=w);let x="";for(let V=d;V<p;++V)x+=ve[_[V]];return x}function Qe(_,d,p){const w=_.slice(d,p);let x="";for(let V=0;V<w.length-1;V+=2)x+=String.fromCharCode(w[V]+w[V+1]*256);return x}u.prototype.slice=function(d,p){const w=this.length;d=~~d,p=p===void 0?w:~~p,d<0?(d+=w,d<0&&(d=0)):d>w&&(d=w),p<0?(p+=w,p<0&&(p=0)):p>w&&(p=w),p<d&&(p=d);const x=this.subarray(d,p);return Object.setPrototypeOf(x,u.prototype),x};function Be(_,d,p){if(_%1!==0||_<0)throw new RangeError("offset is not uint");if(_+d>p)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(d,p,w){d=d>>>0,p=p>>>0,w||Be(d,p,this.length);let x=this[d],V=1,U=0;for(;++U<p&&(V*=256);)x+=this[d+U]*V;return x},u.prototype.readUintBE=u.prototype.readUIntBE=function(d,p,w){d=d>>>0,p=p>>>0,w||Be(d,p,this.length);let x=this[d+--p],V=1;for(;p>0&&(V*=256);)x+=this[d+--p]*V;return x},u.prototype.readUint8=u.prototype.readUInt8=function(d,p){return d=d>>>0,p||Be(d,1,this.length),this[d]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(d,p){return d=d>>>0,p||Be(d,2,this.length),this[d]|this[d+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(d,p){return d=d>>>0,p||Be(d,2,this.length),this[d]<<8|this[d+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(d,p){return d=d>>>0,p||Be(d,4,this.length),(this[d]|this[d+1]<<8|this[d+2]<<16)+this[d+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(d,p){return d=d>>>0,p||Be(d,4,this.length),this[d]*16777216+(this[d+1]<<16|this[d+2]<<8|this[d+3])},u.prototype.readBigUInt64LE=Te(function(d){d=d>>>0,q(d,"offset");const p=this[d],w=this[d+7];(p===void 0||w===void 0)&&j(d,this.length-8);const x=p+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24,V=this[++d]+this[++d]*2**8+this[++d]*2**16+w*2**24;return BigInt(x)+(BigInt(V)<<BigInt(32))}),u.prototype.readBigUInt64BE=Te(function(d){d=d>>>0,q(d,"offset");const p=this[d],w=this[d+7];(p===void 0||w===void 0)&&j(d,this.length-8);const x=p*2**24+this[++d]*2**16+this[++d]*2**8+this[++d],V=this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+w;return(BigInt(x)<<BigInt(32))+BigInt(V)}),u.prototype.readIntLE=function(d,p,w){d=d>>>0,p=p>>>0,w||Be(d,p,this.length);let x=this[d],V=1,U=0;for(;++U<p&&(V*=256);)x+=this[d+U]*V;return V*=128,x>=V&&(x-=Math.pow(2,8*p)),x},u.prototype.readIntBE=function(d,p,w){d=d>>>0,p=p>>>0,w||Be(d,p,this.length);let x=p,V=1,U=this[d+--x];for(;x>0&&(V*=256);)U+=this[d+--x]*V;return V*=128,U>=V&&(U-=Math.pow(2,8*p)),U},u.prototype.readInt8=function(d,p){return d=d>>>0,p||Be(d,1,this.length),this[d]&128?(255-this[d]+1)*-1:this[d]},u.prototype.readInt16LE=function(d,p){d=d>>>0,p||Be(d,2,this.length);const w=this[d]|this[d+1]<<8;return w&32768?w|4294901760:w},u.prototype.readInt16BE=function(d,p){d=d>>>0,p||Be(d,2,this.length);const w=this[d+1]|this[d]<<8;return w&32768?w|4294901760:w},u.prototype.readInt32LE=function(d,p){return d=d>>>0,p||Be(d,4,this.length),this[d]|this[d+1]<<8|this[d+2]<<16|this[d+3]<<24},u.prototype.readInt32BE=function(d,p){return d=d>>>0,p||Be(d,4,this.length),this[d]<<24|this[d+1]<<16|this[d+2]<<8|this[d+3]},u.prototype.readBigInt64LE=Te(function(d){d=d>>>0,q(d,"offset");const p=this[d],w=this[d+7];(p===void 0||w===void 0)&&j(d,this.length-8);const x=this[d+4]+this[d+5]*2**8+this[d+6]*2**16+(w<<24);return(BigInt(x)<<BigInt(32))+BigInt(p+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24)}),u.prototype.readBigInt64BE=Te(function(d){d=d>>>0,q(d,"offset");const p=this[d],w=this[d+7];(p===void 0||w===void 0)&&j(d,this.length-8);const x=(p<<24)+this[++d]*2**16+this[++d]*2**8+this[++d];return(BigInt(x)<<BigInt(32))+BigInt(this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+w)}),u.prototype.readFloatLE=function(d,p){return d=d>>>0,p||Be(d,4,this.length),n.read(this,d,!0,23,4)},u.prototype.readFloatBE=function(d,p){return d=d>>>0,p||Be(d,4,this.length),n.read(this,d,!1,23,4)},u.prototype.readDoubleLE=function(d,p){return d=d>>>0,p||Be(d,8,this.length),n.read(this,d,!0,52,8)},u.prototype.readDoubleBE=function(d,p){return d=d>>>0,p||Be(d,8,this.length),n.read(this,d,!1,52,8)};function Ye(_,d,p,w,x,V){if(!u.isBuffer(_))throw new TypeError('"buffer" argument must be a Buffer instance');if(d>x||d<V)throw new RangeError('"value" argument is out of bounds');if(p+w>_.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(d,p,w,x){if(d=+d,p=p>>>0,w=w>>>0,!x){const Ie=Math.pow(2,8*w)-1;Ye(this,d,p,w,Ie,0)}let V=1,U=0;for(this[p]=d&255;++U<w&&(V*=256);)this[p+U]=d/V&255;return p+w},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(d,p,w,x){if(d=+d,p=p>>>0,w=w>>>0,!x){const Ie=Math.pow(2,8*w)-1;Ye(this,d,p,w,Ie,0)}let V=w-1,U=1;for(this[p+V]=d&255;--V>=0&&(U*=256);)this[p+V]=d/U&255;return p+w},u.prototype.writeUint8=u.prototype.writeUInt8=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,1,255,0),this[p]=d&255,p+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,2,65535,0),this[p]=d&255,this[p+1]=d>>>8,p+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,2,65535,0),this[p]=d>>>8,this[p+1]=d&255,p+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,4,4294967295,0),this[p+3]=d>>>24,this[p+2]=d>>>16,this[p+1]=d>>>8,this[p]=d&255,p+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,4,4294967295,0),this[p]=d>>>24,this[p+1]=d>>>16,this[p+2]=d>>>8,this[p+3]=d&255,p+4};function gt(_,d,p,w,x){$(d,w,x,_,p,7);let V=Number(d&BigInt(4294967295));_[p++]=V,V=V>>8,_[p++]=V,V=V>>8,_[p++]=V,V=V>>8,_[p++]=V;let U=Number(d>>BigInt(32)&BigInt(4294967295));return _[p++]=U,U=U>>8,_[p++]=U,U=U>>8,_[p++]=U,U=U>>8,_[p++]=U,p}function B(_,d,p,w,x){$(d,w,x,_,p,7);let V=Number(d&BigInt(4294967295));_[p+7]=V,V=V>>8,_[p+6]=V,V=V>>8,_[p+5]=V,V=V>>8,_[p+4]=V;let U=Number(d>>BigInt(32)&BigInt(4294967295));return _[p+3]=U,U=U>>8,_[p+2]=U,U=U>>8,_[p+1]=U,U=U>>8,_[p]=U,p+8}u.prototype.writeBigUInt64LE=Te(function(d,p=0){return gt(this,d,p,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=Te(function(d,p=0){return B(this,d,p,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(d,p,w,x){if(d=+d,p=p>>>0,!x){const He=Math.pow(2,8*w-1);Ye(this,d,p,w,He-1,-He)}let V=0,U=1,Ie=0;for(this[p]=d&255;++V<w&&(U*=256);)d<0&&Ie===0&&this[p+V-1]!==0&&(Ie=1),this[p+V]=(d/U>>0)-Ie&255;return p+w},u.prototype.writeIntBE=function(d,p,w,x){if(d=+d,p=p>>>0,!x){const He=Math.pow(2,8*w-1);Ye(this,d,p,w,He-1,-He)}let V=w-1,U=1,Ie=0;for(this[p+V]=d&255;--V>=0&&(U*=256);)d<0&&Ie===0&&this[p+V+1]!==0&&(Ie=1),this[p+V]=(d/U>>0)-Ie&255;return p+w},u.prototype.writeInt8=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,1,127,-128),d<0&&(d=255+d+1),this[p]=d&255,p+1},u.prototype.writeInt16LE=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,2,32767,-32768),this[p]=d&255,this[p+1]=d>>>8,p+2},u.prototype.writeInt16BE=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,2,32767,-32768),this[p]=d>>>8,this[p+1]=d&255,p+2},u.prototype.writeInt32LE=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,4,2147483647,-2147483648),this[p]=d&255,this[p+1]=d>>>8,this[p+2]=d>>>16,this[p+3]=d>>>24,p+4},u.prototype.writeInt32BE=function(d,p,w){return d=+d,p=p>>>0,w||Ye(this,d,p,4,2147483647,-2147483648),d<0&&(d=4294967295+d+1),this[p]=d>>>24,this[p+1]=d>>>16,this[p+2]=d>>>8,this[p+3]=d&255,p+4},u.prototype.writeBigInt64LE=Te(function(d,p=0){return gt(this,d,p,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=Te(function(d,p=0){return B(this,d,p,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function re(_,d,p,w,x,V){if(p+w>_.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("Index out of range")}function ee(_,d,p,w,x){return d=+d,p=p>>>0,x||re(_,d,p,4),n.write(_,d,p,w,23,4),p+4}u.prototype.writeFloatLE=function(d,p,w){return ee(this,d,p,!0,w)},u.prototype.writeFloatBE=function(d,p,w){return ee(this,d,p,!1,w)};function se(_,d,p,w,x){return d=+d,p=p>>>0,x||re(_,d,p,8),n.write(_,d,p,w,52,8),p+8}u.prototype.writeDoubleLE=function(d,p,w){return se(this,d,p,!0,w)},u.prototype.writeDoubleBE=function(d,p,w){return se(this,d,p,!1,w)},u.prototype.copy=function(d,p,w,x){if(!u.isBuffer(d))throw new TypeError("argument should be a Buffer");if(w||(w=0),!x&&x!==0&&(x=this.length),p>=d.length&&(p=d.length),p||(p=0),x>0&&x<w&&(x=w),x===w||d.length===0||this.length===0)return 0;if(p<0)throw new RangeError("targetStart out of bounds");if(w<0||w>=this.length)throw new RangeError("Index out of range");if(x<0)throw new RangeError("sourceEnd out of bounds");x>this.length&&(x=this.length),d.length-p<x-w&&(x=d.length-p+w);const V=x-w;return this===d&&typeof s.prototype.copyWithin=="function"?this.copyWithin(p,w,x):s.prototype.set.call(d,this.subarray(w,x),p),V},u.prototype.fill=function(d,p,w,x){if(typeof d=="string"){if(typeof p=="string"?(x=p,p=0,w=this.length):typeof w=="string"&&(x=w,w=this.length),x!==void 0&&typeof x!="string")throw new TypeError("encoding must be a string");if(typeof x=="string"&&!u.isEncoding(x))throw new TypeError("Unknown encoding: "+x);if(d.length===1){const U=d.charCodeAt(0);(x==="utf8"&&U<128||x==="latin1")&&(d=U)}}else typeof d=="number"?d=d&255:typeof d=="boolean"&&(d=Number(d));if(p<0||this.length<p||this.length<w)throw new RangeError("Out of range index");if(w<=p)return this;p=p>>>0,w=w===void 0?this.length:w>>>0,d||(d=0);let V;if(typeof d=="number")for(V=p;V<w;++V)this[V]=d;else{const U=u.isBuffer(d)?d:u.from(d,x),Ie=U.length;if(Ie===0)throw new TypeError('The value "'+d+'" is invalid for argument "value"');for(V=0;V<w-p;++V)this[V+p]=U[V%Ie]}return this};const Re={};function b(_,d,p){Re[_]=class extends p{constructor(){super(),Object.defineProperty(this,"message",{value:d.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${_}]`,this.stack,delete this.name}get code(){return _}set code(x){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:x,writable:!0})}toString(){return`${this.name} [${_}]: ${this.message}`}}}b("ERR_BUFFER_OUT_OF_BOUNDS",function(_){return _?`${_} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),b("ERR_INVALID_ARG_TYPE",function(_,d){return`The "${_}" argument must be of type number. Received type ${typeof d}`},TypeError),b("ERR_OUT_OF_RANGE",function(_,d,p){let w=`The value of "${_}" is out of range.`,x=p;return Number.isInteger(p)&&Math.abs(p)>2**32?x=R(String(p)):typeof p=="bigint"&&(x=String(p),(p>BigInt(2)**BigInt(32)||p<-(BigInt(2)**BigInt(32)))&&(x=R(x)),x+="n"),w+=` It must be ${d}. Received ${x}`,w},RangeError);function R(_){let d="",p=_.length;const w=_[0]==="-"?1:0;for(;p>=w+4;p-=3)d=`_${_.slice(p-3,p)}${d}`;return`${_.slice(0,p)}${d}`}function O(_,d,p){q(d,"offset"),(_[d]===void 0||_[d+p]===void 0)&&j(d,_.length-(p+1))}function $(_,d,p,w,x,V){if(_>p||_<d){const U=typeof d=="bigint"?"n":"";let Ie;throw d===0||d===BigInt(0)?Ie=`>= 0${U} and < 2${U} ** ${(V+1)*8}${U}`:Ie=`>= -(2${U} ** ${(V+1)*8-1}${U}) and < 2 ** ${(V+1)*8-1}${U}`,new Re.ERR_OUT_OF_RANGE("value",Ie,_)}O(w,x,V)}function q(_,d){if(typeof _!="number")throw new Re.ERR_INVALID_ARG_TYPE(d,"number",_)}function j(_,d,p){throw Math.floor(_)!==_?(q(_,p),new Re.ERR_OUT_OF_RANGE("offset","an integer",_)):d<0?new Re.ERR_BUFFER_OUT_OF_BOUNDS:new Re.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${d}`,_)}const te=/[^+/0-9A-Za-z-_]/g;function X(_){if(_=_.split("=")[0],_=_.trim().replace(te,""),_.length<2)return"";for(;_.length%4!==0;)_=_+"=";return _}function J(_,d){d=d||1/0;let p;const w=_.length;let x=null;const V=[];for(let U=0;U<w;++U){if(p=_.charCodeAt(U),p>55295&&p<57344){if(!x){if(p>56319){(d-=3)>-1&&V.push(239,191,189);continue}else if(U+1===w){(d-=3)>-1&&V.push(239,191,189);continue}x=p;continue}if(p<56320){(d-=3)>-1&&V.push(239,191,189),x=p;continue}p=(x-55296<<10|p-56320)+65536}else x&&(d-=3)>-1&&V.push(239,191,189);if(x=null,p<128){if((d-=1)<0)break;V.push(p)}else if(p<2048){if((d-=2)<0)break;V.push(p>>6|192,p&63|128)}else if(p<65536){if((d-=3)<0)break;V.push(p>>12|224,p>>6&63|128,p&63|128)}else if(p<1114112){if((d-=4)<0)break;V.push(p>>18|240,p>>12&63|128,p>>6&63|128,p&63|128)}else throw new Error("Invalid code point")}return V}function W(_){const d=[];for(let p=0;p<_.length;++p)d.push(_.charCodeAt(p)&255);return d}function ue(_,d){let p,w,x;const V=[];for(let U=0;U<_.length&&!((d-=2)<0);++U)p=_.charCodeAt(U),w=p>>8,x=p%256,V.push(x),V.push(w);return V}function ne(_){return e.toByteArray(X(_))}function oe(_,d,p,w){let x;for(x=0;x<w&&!(x+p>=d.length||x>=_.length);++x)d[x+p]=_[x];return x}function ce(_,d){return _ instanceof d||_!=null&&_.constructor!=null&&_.constructor.name!=null&&_.constructor.name===d.name}function le(_){return _!==_}const ve=function(){const _="0123456789abcdef",d=new Array(256);for(let p=0;p<16;++p){const w=p*16;for(let x=0;x<16;++x)d[w+x]=_[p]+_[x]}return d}();function Te(_){return typeof BigInt>"u"?ft:_}function ft(){throw new Error("BigInt not supported")}})(v_);const cR=v_.Buffer;var jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Wn<"u"?Wn:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,w_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function T(){}T.prototype=I.prototype,P.D=I.prototype,P.prototype=new T,P.prototype.constructor=P,P.C=function(C,k,S){for(var A=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)A[Me-2]=arguments[Me];return I.prototype[k].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(P,I,T){T||(T=0);var C=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)C[k]=I.charCodeAt(T++)|I.charCodeAt(T++)<<8|I.charCodeAt(T++)<<16|I.charCodeAt(T++)<<24;else for(k=0;16>k;++k)C[k]=I[T++]|I[T++]<<8|I[T++]<<16|I[T++]<<24;I=P.g[0],T=P.g[1],k=P.g[2];var S=P.g[3],A=I+(S^T&(k^S))+C[0]+3614090360&4294967295;I=T+(A<<7&4294967295|A>>>25),A=S+(k^I&(T^k))+C[1]+3905402710&4294967295,S=I+(A<<12&4294967295|A>>>20),A=k+(T^S&(I^T))+C[2]+606105819&4294967295,k=S+(A<<17&4294967295|A>>>15),A=T+(I^k&(S^I))+C[3]+3250441966&4294967295,T=k+(A<<22&4294967295|A>>>10),A=I+(S^T&(k^S))+C[4]+4118548399&4294967295,I=T+(A<<7&4294967295|A>>>25),A=S+(k^I&(T^k))+C[5]+1200080426&4294967295,S=I+(A<<12&4294967295|A>>>20),A=k+(T^S&(I^T))+C[6]+2821735955&4294967295,k=S+(A<<17&4294967295|A>>>15),A=T+(I^k&(S^I))+C[7]+4249261313&4294967295,T=k+(A<<22&4294967295|A>>>10),A=I+(S^T&(k^S))+C[8]+1770035416&4294967295,I=T+(A<<7&4294967295|A>>>25),A=S+(k^I&(T^k))+C[9]+2336552879&4294967295,S=I+(A<<12&4294967295|A>>>20),A=k+(T^S&(I^T))+C[10]+4294925233&4294967295,k=S+(A<<17&4294967295|A>>>15),A=T+(I^k&(S^I))+C[11]+2304563134&4294967295,T=k+(A<<22&4294967295|A>>>10),A=I+(S^T&(k^S))+C[12]+1804603682&4294967295,I=T+(A<<7&4294967295|A>>>25),A=S+(k^I&(T^k))+C[13]+4254626195&4294967295,S=I+(A<<12&4294967295|A>>>20),A=k+(T^S&(I^T))+C[14]+2792965006&4294967295,k=S+(A<<17&4294967295|A>>>15),A=T+(I^k&(S^I))+C[15]+1236535329&4294967295,T=k+(A<<22&4294967295|A>>>10),A=I+(k^S&(T^k))+C[1]+4129170786&4294967295,I=T+(A<<5&4294967295|A>>>27),A=S+(T^k&(I^T))+C[6]+3225465664&4294967295,S=I+(A<<9&4294967295|A>>>23),A=k+(I^T&(S^I))+C[11]+643717713&4294967295,k=S+(A<<14&4294967295|A>>>18),A=T+(S^I&(k^S))+C[0]+3921069994&4294967295,T=k+(A<<20&4294967295|A>>>12),A=I+(k^S&(T^k))+C[5]+3593408605&4294967295,I=T+(A<<5&4294967295|A>>>27),A=S+(T^k&(I^T))+C[10]+38016083&4294967295,S=I+(A<<9&4294967295|A>>>23),A=k+(I^T&(S^I))+C[15]+3634488961&4294967295,k=S+(A<<14&4294967295|A>>>18),A=T+(S^I&(k^S))+C[4]+3889429448&4294967295,T=k+(A<<20&4294967295|A>>>12),A=I+(k^S&(T^k))+C[9]+568446438&4294967295,I=T+(A<<5&4294967295|A>>>27),A=S+(T^k&(I^T))+C[14]+3275163606&4294967295,S=I+(A<<9&4294967295|A>>>23),A=k+(I^T&(S^I))+C[3]+4107603335&4294967295,k=S+(A<<14&4294967295|A>>>18),A=T+(S^I&(k^S))+C[8]+1163531501&4294967295,T=k+(A<<20&4294967295|A>>>12),A=I+(k^S&(T^k))+C[13]+2850285829&4294967295,I=T+(A<<5&4294967295|A>>>27),A=S+(T^k&(I^T))+C[2]+4243563512&4294967295,S=I+(A<<9&4294967295|A>>>23),A=k+(I^T&(S^I))+C[7]+1735328473&4294967295,k=S+(A<<14&4294967295|A>>>18),A=T+(S^I&(k^S))+C[12]+2368359562&4294967295,T=k+(A<<20&4294967295|A>>>12),A=I+(T^k^S)+C[5]+4294588738&4294967295,I=T+(A<<4&4294967295|A>>>28),A=S+(I^T^k)+C[8]+2272392833&4294967295,S=I+(A<<11&4294967295|A>>>21),A=k+(S^I^T)+C[11]+1839030562&4294967295,k=S+(A<<16&4294967295|A>>>16),A=T+(k^S^I)+C[14]+4259657740&4294967295,T=k+(A<<23&4294967295|A>>>9),A=I+(T^k^S)+C[1]+2763975236&4294967295,I=T+(A<<4&4294967295|A>>>28),A=S+(I^T^k)+C[4]+1272893353&4294967295,S=I+(A<<11&4294967295|A>>>21),A=k+(S^I^T)+C[7]+4139469664&4294967295,k=S+(A<<16&4294967295|A>>>16),A=T+(k^S^I)+C[10]+3200236656&4294967295,T=k+(A<<23&4294967295|A>>>9),A=I+(T^k^S)+C[13]+681279174&4294967295,I=T+(A<<4&4294967295|A>>>28),A=S+(I^T^k)+C[0]+3936430074&4294967295,S=I+(A<<11&4294967295|A>>>21),A=k+(S^I^T)+C[3]+3572445317&4294967295,k=S+(A<<16&4294967295|A>>>16),A=T+(k^S^I)+C[6]+76029189&4294967295,T=k+(A<<23&4294967295|A>>>9),A=I+(T^k^S)+C[9]+3654602809&4294967295,I=T+(A<<4&4294967295|A>>>28),A=S+(I^T^k)+C[12]+3873151461&4294967295,S=I+(A<<11&4294967295|A>>>21),A=k+(S^I^T)+C[15]+530742520&4294967295,k=S+(A<<16&4294967295|A>>>16),A=T+(k^S^I)+C[2]+3299628645&4294967295,T=k+(A<<23&4294967295|A>>>9),A=I+(k^(T|~S))+C[0]+4096336452&4294967295,I=T+(A<<6&4294967295|A>>>26),A=S+(T^(I|~k))+C[7]+1126891415&4294967295,S=I+(A<<10&4294967295|A>>>22),A=k+(I^(S|~T))+C[14]+2878612391&4294967295,k=S+(A<<15&4294967295|A>>>17),A=T+(S^(k|~I))+C[5]+4237533241&4294967295,T=k+(A<<21&4294967295|A>>>11),A=I+(k^(T|~S))+C[12]+1700485571&4294967295,I=T+(A<<6&4294967295|A>>>26),A=S+(T^(I|~k))+C[3]+2399980690&4294967295,S=I+(A<<10&4294967295|A>>>22),A=k+(I^(S|~T))+C[10]+4293915773&4294967295,k=S+(A<<15&4294967295|A>>>17),A=T+(S^(k|~I))+C[1]+2240044497&4294967295,T=k+(A<<21&4294967295|A>>>11),A=I+(k^(T|~S))+C[8]+1873313359&4294967295,I=T+(A<<6&4294967295|A>>>26),A=S+(T^(I|~k))+C[15]+4264355552&4294967295,S=I+(A<<10&4294967295|A>>>22),A=k+(I^(S|~T))+C[6]+2734768916&4294967295,k=S+(A<<15&4294967295|A>>>17),A=T+(S^(k|~I))+C[13]+1309151649&4294967295,T=k+(A<<21&4294967295|A>>>11),A=I+(k^(T|~S))+C[4]+4149444226&4294967295,I=T+(A<<6&4294967295|A>>>26),A=S+(T^(I|~k))+C[11]+3174756917&4294967295,S=I+(A<<10&4294967295|A>>>22),A=k+(I^(S|~T))+C[2]+718787259&4294967295,k=S+(A<<15&4294967295|A>>>17),A=T+(S^(k|~I))+C[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+S&4294967295}r.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var T=I-this.blockSize,C=this.B,k=this.h,S=0;S<I;){if(k==0)for(;S<=T;)i(this,P,S),S+=this.blockSize;if(typeof P=="string"){for(;S<I;)if(C[k++]=P.charCodeAt(S++),k==this.blockSize){i(this,C),k=0;break}}else for(;S<I;)if(C[k++]=P[S++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=I},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var T=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=T&255,T/=256;for(this.u(P),P=Array(16),I=T=0;4>I;++I)for(var C=0;32>C;C+=8)P[T++]=this.g[I]>>>C&255;return P};function s(P,I){var T=c;return Object.prototype.hasOwnProperty.call(T,P)?T[P]:T[P]=I(P)}function o(P,I){this.h=I;for(var T=[],C=!0,k=P.length-1;0<=k;k--){var S=P[k]|0;C&&S==I||(T[k]=S,C=!1)}this.g=T}var c={};function l(P){return-128<=P&&128>P?s(P,function(I){return new o([I|0],0>I?-1:0)}):new o([P|0],0>P?-1:0)}function h(P){if(isNaN(P)||!isFinite(P))return m;if(0>P)return F(h(-P));for(var I=[],T=1,C=0;P>=T;C++)I[C]=P/T|0,T*=4294967296;return new o(I,0)}function u(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return F(u(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(I,8)),C=m,k=0;k<P.length;k+=8){var S=Math.min(8,P.length-k),A=parseInt(P.substring(k,k+S),I);8>S?(S=h(Math.pow(I,S)),C=C.j(S).add(h(A))):(C=C.j(T),C=C.add(h(A)))}return C}var m=l(0),y=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(M(this))return-F(this).m();for(var P=0,I=1,T=0;T<this.g.length;T++){var C=this.i(T);P+=(0<=C?C:4294967296+C)*I,I*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(D(this))return"0";if(M(this))return"-"+F(this).toString(P);for(var I=h(Math.pow(P,6)),T=this,C="";;){var k=Y(T,I).g;T=z(T,k.j(I));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(P);if(T=k,D(T))return S+C;for(;6>S.length;)S="0"+S;C=S+C}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function D(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function M(P){return P.h==-1}t.l=function(P){return P=z(this,P),M(P)?-1:D(P)?0:1};function F(P){for(var I=P.g.length,T=[],C=0;C<I;C++)T[C]=~P.g[C];return new o(T,~P.h).add(y)}t.abs=function(){return M(this)?F(this):this},t.add=function(P){for(var I=Math.max(this.g.length,P.g.length),T=[],C=0,k=0;k<=I;k++){var S=C+(this.i(k)&65535)+(P.i(k)&65535),A=(S>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);C=A>>>16,S&=65535,A&=65535,T[k]=A<<16|S}return new o(T,T[T.length-1]&-2147483648?-1:0)};function z(P,I){return P.add(F(I))}t.j=function(P){if(D(this)||D(P))return m;if(M(this))return M(P)?F(this).j(F(P)):F(F(this).j(P));if(M(P))return F(this.j(F(P)));if(0>this.l(E)&&0>P.l(E))return h(this.m()*P.m());for(var I=this.g.length+P.g.length,T=[],C=0;C<2*I;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<P.g.length;k++){var S=this.i(C)>>>16,A=this.i(C)&65535,Me=P.i(k)>>>16,rt=P.i(k)&65535;T[2*C+2*k]+=A*rt,K(T,2*C+2*k),T[2*C+2*k+1]+=S*rt,K(T,2*C+2*k+1),T[2*C+2*k+1]+=A*Me,K(T,2*C+2*k+1),T[2*C+2*k+2]+=S*Me,K(T,2*C+2*k+2)}for(C=0;C<I;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=I;C<2*I;C++)T[C]=0;return new o(T,0)};function K(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function Q(P,I){this.g=P,this.h=I}function Y(P,I){if(D(I))throw Error("division by zero");if(D(P))return new Q(m,m);if(M(P))return I=Y(F(P),I),new Q(F(I.g),F(I.h));if(M(I))return I=Y(P,F(I)),new Q(F(I.g),I.h);if(30<P.g.length){if(M(P)||M(I))throw Error("slowDivide_ only works with positive integers.");for(var T=y,C=I;0>=C.l(P);)T=ge(T),C=ge(C);var k=fe(T,1),S=fe(C,1);for(C=fe(C,2),T=fe(T,2);!D(C);){var A=S.add(C);0>=A.l(P)&&(k=k.add(T),S=A),C=fe(C,1),T=fe(T,1)}return I=z(P,k.j(I)),new Q(k,I)}for(k=m;0<=P.l(I);){for(T=Math.max(1,Math.floor(P.m()/I.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),S=h(T),A=S.j(I);M(A)||0<A.l(P);)T-=C,S=h(T),A=S.j(I);D(S)&&(S=y),k=k.add(S),P=z(P,A)}return new Q(k,P)}t.A=function(P){return Y(this,P).h},t.and=function(P){for(var I=Math.max(this.g.length,P.g.length),T=[],C=0;C<I;C++)T[C]=this.i(C)&P.i(C);return new o(T,this.h&P.h)},t.or=function(P){for(var I=Math.max(this.g.length,P.g.length),T=[],C=0;C<I;C++)T[C]=this.i(C)|P.i(C);return new o(T,this.h|P.h)},t.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),T=[],C=0;C<I;C++)T[C]=this.i(C)^P.i(C);return new o(T,this.h^P.h)};function ge(P){for(var I=P.g.length+1,T=[],C=0;C<I;C++)T[C]=P.i(C)<<1|P.i(C-1)>>>31;return new o(T,P.h)}function fe(P,I){var T=I>>5;I%=32;for(var C=P.g.length-T,k=[],S=0;S<C;S++)k[S]=0<I?P.i(S+T)>>>I|P.i(S+T+1)<<32-I:P.i(S+T);return new o(k,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,w_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=u,Er=o}).apply(typeof jd<"u"?jd:typeof self<"u"?self:typeof window<"u"?window:{});var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Wn<"u"?Wn:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T_,ws,I_,ea,Ul,A_,b_,R_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,g){return a==Array.prototype||a==Object.prototype||(a[f]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof jo=="object"&&jo];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(a,f){if(f)e:{var g=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var N=a[v];if(!(N in g))break e;g=g[N]}a=a[a.length-1],v=g[a],f=f(v),f!=v&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}function s(a,f){a instanceof String&&(a+="");var g=0,v=!1,N={next:function(){if(!v&&g<a.length){var L=g++;return{value:f(L,a[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function h(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function u(a,f,g){return a.call.apply(a.bind,arguments)}function m(a,f,g){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,v),a.apply(f,N)}}return function(){return a.apply(f,arguments)}}function y(a,f,g){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:m,y.apply(null,arguments)}function E(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function D(a,f){function g(){}g.prototype=f.prototype,a.aa=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(v,N,L){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return f.prototype[N].apply(v,Z)}}function M(a){const f=a.length;if(0<f){const g=Array(f);for(let v=0;v<f;v++)g[v]=a[v];return g}return[]}function F(a,f){for(let g=1;g<arguments.length;g++){const v=arguments[g];if(l(v)){const N=a.length||0,L=v.length||0;a.length=N+L;for(let Z=0;Z<L;Z++)a[N+Z]=v[Z]}else a.push(v)}}class z{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function K(a){return/^[\s\xa0]*$/.test(a)}function Q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Y(a){return Y[" "](a),a}Y[" "]=function(){};var ge=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function fe(a,f,g){for(const v in a)f.call(g,a[v],v,a)}function P(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function I(a){const f={};for(const g in a)f[g]=a[g];return f}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,f){let g,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(g in v)a[g]=v[g];for(let L=0;L<T.length;L++)g=T[L],Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}}function k(a){var f=1;a=a.split(":");const g=[];for(;0<f&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function S(a){c.setTimeout(()=>{throw a},0)}function A(){var a=xt;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Me{constructor(){this.h=this.g=null}add(f,g){const v=rt.get();v.set(f,g),this.h?this.h.next=v:this.g=v,this.h=v}}var rt=new z(()=>new We,a=>a.reset());class We{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,be=!1,xt=new Me,jt=()=>{const a=c.Promise.resolve(void 0);Ce=()=>{a.then(Lt)}};var Lt=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(g){S(g)}var f=rt;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}be=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Be=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};c.addEventListener("test",g,f),c.removeEventListener("test",g,f)}catch{}return a}();function Ye(a,f){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(ge){e:{try{Y(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ye.aa.h.call(this)}}D(Ye,Qe);var gt={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),re=0;function ee(a,f,g,v,N){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!v,this.ha=N,this.key=++re,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,f,g,v,N){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var Z=R(a,f,v,N);return-1<Z?(f=a[Z],g||(f.fa=!1)):(f=new ee(f,this.src,L,!!v,N),f.fa=g,a.push(f)),f};function b(a,f){var g=f.type;if(g in a.g){var v=a.g[g],N=Array.prototype.indexOf.call(v,f,void 0),L;(L=0<=N)&&Array.prototype.splice.call(v,N,1),L&&(se(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function R(a,f,g,v){for(var N=0;N<a.length;++N){var L=a[N];if(!L.da&&L.listener==f&&L.capture==!!g&&L.ha==v)return N}return-1}var O="closure_lm_"+(1e6*Math.random()|0),$={};function q(a,f,g,v,N){if(Array.isArray(f)){for(var L=0;L<f.length;L++)q(a,f[L],g,v,N);return null}return g=ce(g),a&&a[B]?a.K(f,g,h(v)?!!v.capture:!1,N):j(a,f,g,!1,v,N)}function j(a,f,g,v,N,L){if(!f)throw Error("Invalid event type");var Z=h(N)?!!N.capture:!!N,je=ne(a);if(je||(a[O]=je=new Re(a)),g=je.add(f,g,v,Z,L),g.proxy)return g;if(v=te(),g.proxy=v,v.src=a,v.listener=g,a.addEventListener)Be||(N=Z),N===void 0&&(N=!1),a.addEventListener(f.toString(),v,N);else if(a.attachEvent)a.attachEvent(W(f.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function te(){function a(g){return f.call(a.src,a.listener,g)}const f=ue;return a}function X(a,f,g,v,N){if(Array.isArray(f))for(var L=0;L<f.length;L++)X(a,f[L],g,v,N);else v=h(v)?!!v.capture:!!v,g=ce(g),a&&a[B]?(a=a.i,f=String(f).toString(),f in a.g&&(L=a.g[f],g=R(L,g,v,N),-1<g&&(se(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete a.g[f],a.h--)))):a&&(a=ne(a))&&(f=a.g[f.toString()],a=-1,f&&(a=R(f,g,v,N)),(g=-1<a?f[a]:null)&&J(g))}function J(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[B])b(f.i,a);else{var g=a.type,v=a.proxy;f.removeEventListener?f.removeEventListener(g,v,a.capture):f.detachEvent?f.detachEvent(W(g),v):f.addListener&&f.removeListener&&f.removeListener(v),(g=ne(f))?(b(g,a),g.h==0&&(g.src=null,f[O]=null)):se(a)}}}function W(a){return a in $?$[a]:$[a]="on"+a}function ue(a,f){if(a.da)a=!0;else{f=new Ye(f,this);var g=a.listener,v=a.ha||a.src;a.fa&&J(a),a=g.call(v,f)}return a}function ne(a){return a=a[O],a instanceof Re?a:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[oe]||(a[oe]=function(f){return a.handleEvent(f)}),a[oe])}function le(){Ge.call(this),this.i=new Re(this),this.M=this,this.F=null}D(le,Ge),le.prototype[B]=!0,le.prototype.removeEventListener=function(a,f,g,v){X(this,a,f,g,v)};function ve(a,f){var g,v=a.F;if(v)for(g=[];v;v=v.F)g.push(v);if(a=a.M,v=f.type||f,typeof f=="string")f=new Qe(f,a);else if(f instanceof Qe)f.target=f.target||a;else{var N=f;f=new Qe(v,a),C(f,N)}if(N=!0,g)for(var L=g.length-1;0<=L;L--){var Z=f.g=g[L];N=Te(Z,v,!0,f)&&N}if(Z=f.g=a,N=Te(Z,v,!0,f)&&N,N=Te(Z,v,!1,f)&&N,g)for(L=0;L<g.length;L++)Z=f.g=g[L],N=Te(Z,v,!1,f)&&N}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var g=a.g[f],v=0;v<g.length;v++)se(g[v]);delete a.g[f],a.h--}}this.F=null},le.prototype.K=function(a,f,g,v){return this.i.add(String(a),f,!1,g,v)},le.prototype.L=function(a,f,g,v){return this.i.add(String(a),f,!0,g,v)};function Te(a,f,g,v){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,L=0;L<f.length;++L){var Z=f[L];if(Z&&!Z.da&&Z.capture==g){var je=Z.listener,mt=Z.ha||Z.src;Z.fa&&b(a.i,Z),N=je.call(mt,v)!==!1&&N}}return N&&!v.defaultPrevented}function ft(a,f,g){if(typeof a=="function")g&&(a=y(a,g));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:c.setTimeout(a,f||0)}function _(a){a.g=ft(()=>{a.g=null,a.i&&(a.i=!1,_(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class d extends Ge{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:_(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function p(a){Ge.call(this),this.h=a,this.g={}}D(p,Ge);var w=[];function x(a){fe(a.g,function(f,g){this.g.hasOwnProperty(g)&&J(f)},a),a.g={}}p.prototype.N=function(){p.aa.N.call(this),x(this)},p.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var V=c.JSON.stringify,U=c.JSON.parse,Ie=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function He(){}He.prototype.h=null;function $e(a){return a.h||(a.h=a.i())}function Je(){}var Oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sc(){Qe.call(this,"d")}D(Sc,Qe);function Cc(){Qe.call(this,"c")}D(Cc,Qe);var Lr={},xh=null;function To(){return xh=xh||new le}Lr.La="serverreachability";function Dh(a){Qe.call(this,Lr.La,a)}D(Dh,Qe);function is(a){const f=To();ve(f,new Dh(f))}Lr.STAT_EVENT="statevent";function Oh(a,f){Qe.call(this,Lr.STAT_EVENT,a),this.stat=f}D(Oh,Qe);function Dt(a){const f=To();ve(f,new Oh(f,a))}Lr.Ma="timingevent";function Nh(a,f){Qe.call(this,Lr.Ma,a),this.size=f}D(Nh,Qe);function ss(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},f)}function os(){this.g=!0}os.prototype.xa=function(){this.g=!1};function Fv(a,f,g,v,N,L){a.info(function(){if(a.g)if(L)for(var Z="",je=L.split("&"),mt=0;mt<je.length;mt++){var Ne=je[mt].split("=");if(1<Ne.length){var Tt=Ne[0];Ne=Ne[1];var It=Tt.split("_");Z=2<=It.length&&It[1]=="type"?Z+(Tt+"="+Ne+"&"):Z+(Tt+"=redacted&")}}else Z=null;else Z=L;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+f+`
`+g+`
`+Z})}function Uv(a,f,g,v,N,L,Z){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+f+`
`+g+`
`+L+" "+Z})}function pi(a,f,g,v){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+$v(a,g)+(v?" "+v:"")})}function Bv(a,f){a.info(function(){return"TIMEOUT: "+f})}os.prototype.info=function(){};function $v(a,f){if(!a.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var v=g[a];if(!(2>v.length)){var N=v[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var Z=1;Z<N.length;Z++)N[Z]=""}}}}return V(g)}catch{return f}}var Io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function Ao(){}D(Ao,He),Ao.prototype.g=function(){return new XMLHttpRequest},Ao.prototype.i=function(){return{}},Pc=new Ao;function er(a,f,g,v){this.j=a,this.i=f,this.l=g,this.R=v||1,this.U=new p(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mh}function Mh(){this.i=null,this.g="",this.h=!1}var Lh={},kc={};function xc(a,f,g){a.L=1,a.v=Co(Nn(f)),a.m=g,a.P=!0,Fh(a,null)}function Fh(a,f){a.F=Date.now(),bo(a),a.A=Nn(a.v);var g=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Xh(g.i,"t",v),a.C=0,g=a.j.J,a.h=new Mh,a.g=_f(a.j,g?f:null,!a.m),0<a.O&&(a.M=new d(y(a.Y,a,a.g),a.O)),f=a.U,g=a.g,v=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(w[0]=N.toString()),N=w);for(var L=0;L<N.length;L++){var Z=q(g,N[L],v||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=a.H?I(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),is(),Fv(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const f=this.M;f&&Vn(a)==3?f.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const It=Vn(this.g);var f=this.g.Ba();const _i=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||of(this.g)))){this.J||It!=4||f==7||(f==8||0>=_i?is(3):is(2)),Dc(this);var g=this.g.Z();this.X=g;t:if(Uh(this)){var v=of(this.g);a="";var N=v.length,L=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),as(this);var Z="";break t}this.h.i=new c.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,a+=this.h.i.decode(v[f],{stream:!(L&&f==N-1)});v.length=0,this.h.g+=a,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=g==200,Uv(this.i,this.u,this.A,this.l,this.R,It,g),this.o){if(this.T&&!this.K){t:{if(this.g){var je,mt=this.g;if((je=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(je)){var Ne=je;break t}}Ne=null}if(g=Ne)pi(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oc(this,g);else{this.o=!1,this.s=3,Dt(12),Fr(this),as(this);break e}}if(this.P){g=!0;let sn;for(;!this.J&&this.C<Z.length;)if(sn=jv(this,Z),sn==kc){It==4&&(this.s=4,Dt(14),g=!1),pi(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Lh){this.s=4,Dt(15),pi(this.i,this.l,Z,"[Invalid Chunk]"),g=!1;break}else pi(this.i,this.l,sn,null),Oc(this,sn);if(Uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||Z.length!=0||this.h.h||(this.s=1,Dt(16),g=!1),this.o=this.o&&g,!g)pi(this.i,this.l,Z,"[Invalid Chunked Response]"),Fr(this),as(this);else if(0<Z.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Uc(Tt),Tt.M=!0,Dt(11))}}else pi(this.i,this.l,Z,null),Oc(this,Z);It==4&&Fr(this),this.o&&!this.J&&(It==4?df(this.j,this):(this.o=!1,bo(this)))}else sE(this.g),g==400&&0<Z.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Fr(this),as(this)}}}catch{}finally{}};function Uh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jv(a,f){var g=a.C,v=f.indexOf(`
`,g);return v==-1?kc:(g=Number(f.substring(g,v)),isNaN(g)?Lh:(v+=1,v+g>f.length?kc:(f=f.slice(v,v+g),a.C=v+g,f)))}er.prototype.cancel=function(){this.J=!0,Fr(this)};function bo(a){a.S=Date.now()+a.I,Bh(a,a.I)}function Bh(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ss(y(a.ba,a),f)}function Dc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Bv(this.i,this.A),this.L!=2&&(is(),Dt(17)),Fr(this),this.s=2,as(this)):Bh(this,this.S-a)};function as(a){a.j.G==0||a.J||df(a.j,a)}function Fr(a){Dc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,x(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Oc(a,f){try{var g=a.j;if(g.G!=0&&(g.g==a||Nc(g.h,a))){if(!a.K&&Nc(g.h,a)&&g.G==3){try{var v=g.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)No(g),Do(g);else break e;Fc(g),Dt(18)}}else g.za=N[1],0<g.za-g.T&&37500>N[2]&&g.F&&g.v==0&&!g.C&&(g.C=ss(y(g.Za,g),6e3));if(1>=qh(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Br(g,11)}else if((a.K||g.g==a)&&No(g),!K(f))for(N=g.Da.g.parse(f),f=0;f<N.length;f++){let Ne=N[f];if(g.T=Ne[0],Ne=Ne[1],g.G==2)if(Ne[0]=="c"){g.K=Ne[1],g.ia=Ne[2];const Tt=Ne[3];Tt!=null&&(g.la=Tt,g.j.info("VER="+g.la));const It=Ne[4];It!=null&&(g.Aa=It,g.j.info("SVER="+g.Aa));const _i=Ne[5];_i!=null&&typeof _i=="number"&&0<_i&&(v=1.5*_i,g.L=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const sn=a.g;if(sn){const Mo=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var L=v.h;L.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Vc(L,L.h),L.h=null))}if(v.D){const Bc=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(v.ya=Bc,Xe(v.I,v.D,Bc))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),v=g;var Z=a;if(v.qa=mf(v,v.J?v.ia:null,v.W),Z.K){Hh(v.h,Z);var je=Z,mt=v.L;mt&&(je.I=mt),je.B&&(Dc(je),bo(je)),v.g=Z}else hf(v);0<g.i.length&&Oo(g)}else Ne[0]!="stop"&&Ne[0]!="close"||Br(g,7);else g.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Br(g,7):Lc(g):Ne[0]!="noop"&&g.l&&g.l.ta(Ne),g.v=0)}}is(4)}catch{}}var qv=class{constructor(a,f){this.g=a,this.map=f}};function $h(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qh(a){return a.h?1:a.g?a.g.size:0}function Nc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Vc(a,f){a.g?a.g.add(f):a.h=f}function Hh(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}$h.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.D);return f}return M(a.i)}function Hv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var f=[],g=a.length,v=0;v<g;v++)f.push(a[v]);return f}f=[],g=0;for(v in a)f[g++]=a[v];return f}function zv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var f=[];a=a.length;for(var g=0;g<a;g++)f.push(g);return f}f=[],g=0;for(const v in a)f[g++]=v;return f}}}function Kh(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var g=zv(a),v=Hv(a),N=v.length,L=0;L<N;L++)f.call(void 0,v[L],g&&g[L],a)}var Wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kv(a,f){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var v=a[g].indexOf("="),N=null;if(0<=v){var L=a[g].substring(0,v);N=a[g].substring(v+1)}else L=a[g];f(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ur){this.h=a.h,Ro(this,a.j),this.o=a.o,this.g=a.g,So(this,a.s),this.l=a.l;var f=a.i,g=new us;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Gh(this,g),this.m=a.m}else a&&(f=String(a).match(Wh))?(this.h=!1,Ro(this,f[1]||"",!0),this.o=cs(f[2]||""),this.g=cs(f[3]||"",!0),So(this,f[4]),this.l=cs(f[5]||"",!0),Gh(this,f[6]||"",!0),this.m=cs(f[7]||"")):(this.h=!1,this.i=new us(null,this.h))}Ur.prototype.toString=function(){var a=[],f=this.j;f&&a.push(ls(f,Qh,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(ls(f,Qh,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(ls(g,g.charAt(0)=="/"?Qv:Gv,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",ls(g,Jv)),a.join("")};function Nn(a){return new Ur(a)}function Ro(a,f,g){a.j=g?cs(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function So(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Gh(a,f,g){f instanceof us?(a.i=f,Xv(a.i,a.h)):(g||(f=ls(f,Yv)),a.i=new us(f,a.h))}function Xe(a,f,g){a.i.set(f,g)}function Co(a){return Xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function cs(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ls(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,Wv),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Wv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Qh=/[#\/\?@]/g,Gv=/[#\?:]/g,Qv=/[#\?]/g,Yv=/[#\?@]/g,Jv=/#/g;function us(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&Kv(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=us.prototype,t.add=function(a,f){tr(this),this.i=null,a=gi(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function Yh(a,f){tr(a),f=gi(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Jh(a,f){return tr(a),f=gi(a,f),a.g.has(f)}t.forEach=function(a,f){tr(this),this.g.forEach(function(g,v){g.forEach(function(N){a.call(f,N,v,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let v=0;v<f.length;v++){const N=a[v];for(let L=0;L<N.length;L++)g.push(f[v])}return g},t.V=function(a){tr(this);let f=[];if(typeof a=="string")Jh(this,a)&&(f=f.concat(this.g.get(gi(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)f=f.concat(a[g])}return f},t.set=function(a,f){return tr(this),this.i=null,a=gi(this,a),Jh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Xh(a,f,g){Yh(a,f),0<g.length&&(a.i=null,a.g.set(gi(a,f),M(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var v=f[g];const L=encodeURIComponent(String(v)),Z=this.V(v);for(v=0;v<Z.length;v++){var N=L;Z[v]!==""&&(N+="="+encodeURIComponent(String(Z[v]))),a.push(N)}}return this.i=a.join("&")};function gi(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Xv(a,f){f&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(g,v){var N=v.toLowerCase();v!=N&&(Yh(this,v),Xh(this,N,g))},a)),a.j=f}function Zv(a,f){const g=new os;if(c.Image){const v=new Image;v.onload=E(nr,g,"TestLoadImage: loaded",!0,f,v),v.onerror=E(nr,g,"TestLoadImage: error",!1,f,v),v.onabort=E(nr,g,"TestLoadImage: abort",!1,f,v),v.ontimeout=E(nr,g,"TestLoadImage: timeout",!1,f,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else f(!1)}function eE(a,f){const g=new os,v=new AbortController,N=setTimeout(()=>{v.abort(),nr(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(N),L.ok?nr(g,"TestPingServer: ok",!0,f):nr(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),nr(g,"TestPingServer: error",!1,f)})}function nr(a,f,g,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(g)}catch{}}function tE(){this.g=new Ie}function nE(a,f,g){const v=g||"";try{Kh(a,function(N,L){let Z=N;h(N)&&(Z=V(N)),f.push(v+L+"="+encodeURIComponent(Z))})}catch(N){throw f.push(v+"type="+encodeURIComponent("_badmap")),N}}function Po(a){this.l=a.Ub||null,this.j=a.eb||!1}D(Po,He),Po.prototype.g=function(){return new ko(this.l,this.j)},Po.prototype.i=function(a){return function(){return a}}({});function ko(a,f){le.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ko,le),t=ko.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||c).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?hs(this):fs(this),this.readyState==3&&Zh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,hs(this))},t.Qa=function(a){this.g&&(this.response=a,hs(this))},t.ga=function(){this.g&&hs(this)};function hs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fs(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ef(a){let f="";return fe(a,function(g,v){f+=v,f+=":",f+=g,f+=`\r
`}),f}function Mc(a,f,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=ef(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Xe(a,f,g))}function et(a){le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(et,le);var rE=/^https?$/i,iE=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?$e(this.o):$e(Pc),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(L){tf(this,L);return}if(a=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)g.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())g.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),N=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(iE,f,void 0))||v||N||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Z]of g)this.g.setRequestHeader(L,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sf(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){tf(this,L)}};function tf(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,nf(a),xo(a)}function nf(a){a.A||(a.A=!0,ve(a,"complete"),ve(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ve(this,"complete"),ve(this,"abort"),xo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xo(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?rf(this):this.bb())},t.bb=function(){rf(this)};function rf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Vn(a)!=4||a.Z()!=2)){if(a.u&&Vn(a)==4)ft(a.Ea,0,a);else if(ve(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const Z=a.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var v;if(v=Z===0){var N=String(a.D).match(Wh)[1]||null;!N&&c.self&&c.self.location&&(N=c.self.location.protocol.slice(0,-1)),v=!rE.test(N?N.toLowerCase():"")}g=v}if(g)ve(a,"complete"),ve(a,"success");else{a.m=6;try{var L=2<Vn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",nf(a)}}finally{xo(a)}}}}function xo(a,f){if(a.g){sf(a);const g=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ve(a,"ready");try{g.onreadystatechange=v}catch{}}}function sf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),U(f)}};function of(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sE(a){const f={};a=(a.g&&2<=Vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(K(a[v]))continue;var g=k(a[v]);const N=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=f[N]||[];f[N]=L,L.push(g)}P(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function af(a){this.Aa=0,this.i=[],this.j=new os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,a),this.cb=ds("retryDelaySeedMs",1e4,a),this.Wa=ds("forwardChannelMaxRetries",2,a),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $h(a&&a.concurrentRequestLimit),this.Da=new tE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=af.prototype,t.la=8,t.G=1,t.connect=function(a,f,g,v){Dt(0),this.W=a,this.H=f||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.I=mf(this,null,this.W),Oo(this)};function Lc(a){if(cf(a),a.G==3){var f=a.U++,g=Nn(a.I);if(Xe(g,"SID",a.K),Xe(g,"RID",f),Xe(g,"TYPE","terminate"),ps(a,g),f=new er(a,a.j,f),f.L=2,f.v=Co(Nn(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&c.Image&&(new Image().src=f.v,g=!0),g||(f.g=_f(f.j,null),f.g.ea(f.v)),f.F=Date.now(),bo(f)}gf(a)}function Do(a){a.g&&(Uc(a),a.g.cancel(),a.g=null)}function cf(a){Do(a),a.u&&(c.clearTimeout(a.u),a.u=null),No(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Oo(a){if(!jh(a.h)&&!a.s){a.s=!0;var f=a.Ga;Ce||jt(),be||(Ce(),be=!0),xt.add(f,a),a.B=0}}function oE(a,f){return qh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ss(y(a.Ga,a,f),pf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new er(this,this.j,a);let L=this.o;if(this.S&&(L?(L=I(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=uf(this,N,f),g=Nn(this.I),Xe(g,"RID",a),Xe(g,"CVER",22),this.D&&Xe(g,"X-HTTP-Session-Id",this.D),ps(this,g),L&&(this.O?f="headers="+encodeURIComponent(String(ef(L)))+"&"+f:this.m&&Mc(g,this.m,L)),Vc(this.h,N),this.Ua&&Xe(g,"TYPE","init"),this.P?(Xe(g,"$req",f),Xe(g,"SID","null"),N.T=!0,xc(N,g,null)):xc(N,g,f),this.G=2}}else this.G==3&&(a?lf(this,a):this.i.length==0||jh(this.h)||lf(this))};function lf(a,f){var g;f?g=f.l:g=a.U++;const v=Nn(a.I);Xe(v,"SID",a.K),Xe(v,"RID",g),Xe(v,"AID",a.T),ps(a,v),a.m&&a.o&&Mc(v,a.m,a.o),g=new er(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),f&&(a.i=f.D.concat(a.i)),f=uf(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,g),xc(g,v,f)}function ps(a,f){a.H&&fe(a.H,function(g,v){Xe(f,v,g)}),a.l&&Kh({},function(g,v){Xe(f,v,g)})}function uf(a,f,g){g=Math.min(a.i.length,g);var v=a.l?y(a.l.Na,a.l,a):null;e:{var N=a.i;let L=-1;for(;;){const Z=["count="+g];L==-1?0<g?(L=N[0].g,Z.push("ofs="+L)):L=0:Z.push("ofs="+L);let je=!0;for(let mt=0;mt<g;mt++){let Ne=N[mt].g;const Tt=N[mt].map;if(Ne-=L,0>Ne)L=Math.max(0,N[mt].g-100),je=!1;else try{nE(Tt,Z,"req"+Ne+"_")}catch{v&&v(Tt)}}if(je){v=Z.join("&");break e}}}return a=a.i.splice(0,g),f.D=a,v}function hf(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Ce||jt(),be||(Ce(),be=!0),xt.add(f,a),a.v=0}}function Fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ss(y(a.Fa,a),pf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ss(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),Do(this),ff(this))};function Uc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function ff(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Nn(a.qa);Xe(f,"RID","rpc"),Xe(f,"SID",a.K),Xe(f,"AID",a.T),Xe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Xe(f,"TO",a.ja),Xe(f,"TYPE","xmlhttp"),ps(a,f),a.m&&a.o&&Mc(f,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=Co(Nn(f)),g.m=null,g.P=!0,Fh(g,a)}t.Za=function(){this.C!=null&&(this.C=null,Do(this),Fc(this),Dt(19))};function No(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function df(a,f){var g=null;if(a.g==f){No(a),Uc(a),a.g=null;var v=2}else if(Nc(a.h,f))g=f.D,Hh(a.h,f),v=1;else return;if(a.G!=0){if(f.o)if(v==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var N=a.B;v=To(),ve(v,new Nh(v,g)),Oo(a)}else hf(a);else if(N=f.s,N==3||N==0&&0<f.X||!(v==1&&oE(a,f)||v==2&&Fc(a)))switch(g&&0<g.length&&(f=a.h,f.i=f.i.concat(g)),N){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function pf(a,f){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*f}function Br(a,f){if(a.j.info("Error code "+f),f==2){var g=y(a.fb,a),v=a.Xa;const N=!v;v=new Ur(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ro(v,"https"),Co(v),N?Zv(v.toString(),g):eE(v.toString(),g)}else Dt(2);a.G=0,a.l&&a.l.sa(f),gf(a),cf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function gf(a){if(a.G=0,a.ka=[],a.l){const f=zh(a.h);(f.length!=0||a.i.length!=0)&&(F(a.ka,f),F(a.ka,a.i),a.h.i.length=0,M(a.i),a.i.length=0),a.l.ra()}}function mf(a,f,g){var v=g instanceof Ur?Nn(g):new Ur(g);if(v.g!="")f&&(v.g=f+"."+v.g),So(v,v.s);else{var N=c.location;v=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var L=new Ur(null);v&&Ro(L,v),f&&(L.g=f),N&&So(L,N),g&&(L.l=g),v=L}return g=a.D,f=a.ya,g&&f&&Xe(v,g,f),Xe(v,"VER",a.la),ps(a,v),v}function _f(a,f,g){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new et(new Po({eb:g})):new et(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yf(){}t=yf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vo(){}Vo.prototype.g=function(a,f){return new qt(a,f)};function qt(a,f){le.call(this),this.g=new af(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!K(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!K(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new mi(this)}D(qt,le),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Lc(this.g)},qt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=V(a),a=g);f.i.push(new qv(f.Ya++,a)),f.G==3&&Oo(f)},qt.prototype.N=function(){this.g.l=null,delete this.j,Lc(this.g),delete this.g,qt.aa.N.call(this)};function vf(a){Sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}D(vf,Sc);function Ef(){Cc.call(this),this.status=1}D(Ef,Cc);function mi(a){this.g=a}D(mi,yf),mi.prototype.ua=function(){ve(this.g,"a")},mi.prototype.ta=function(a){ve(this.g,new vf(a))},mi.prototype.sa=function(a){ve(this.g,new Ef)},mi.prototype.ra=function(){ve(this.g,"b")},Vo.prototype.createWebChannel=Vo.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,R_=function(){return new Vo},b_=function(){return To()},A_=Lr,Ul={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Io.NO_ERROR=0,Io.TIMEOUT=8,Io.HTTP_ERROR=6,ea=Io,Vh.COMPLETE="complete",I_=Vh,Je.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",le.prototype.listen=le.prototype.K,ws=Je,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,T_=et}).apply(typeof jo<"u"?jo:typeof self<"u"?self:typeof window<"u"?window:{});const qd="@firebase/firestore",Hd="4.7.10";/**
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
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
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
 */let Ji="11.5.0";/**
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
 */const ri=new ic("@firebase/firestore");function Ti(){return ri.logLevel}function ie(t,...e){if(ri.logLevel<=Pe.DEBUG){const n=e.map(Fu);ri.debug(`Firestore (${Ji}): ${t}`,...n)}}function Qn(t,...e){if(ri.logLevel<=Pe.ERROR){const n=e.map(Fu);ri.error(`Firestore (${Ji}): ${t}`,...n)}}function $i(t,...e){if(ri.logLevel<=Pe.WARN){const n=e.map(Fu);ri.warn(`Firestore (${Ji}): ${t}`,...n)}}function Fu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function Ue(t,e){t||_e()}function we(t,e){return t}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class S_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class uR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hR{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new S_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new bt(e)}}class fR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class dR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new fR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pR{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,on(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ue(this.o===void 0);const r=s=>{s.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new zd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new zd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function C_(){return new TextEncoder}/**
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
 */class P_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=gR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function Bl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Se(r,i);{const s=C_(),o=mR(s.encode(Kd(t,n)),s.encode(Kd(e,n)));return o!==0?o:Se(r,i)}}n+=r>65535?2:1}return Se(t.length,e.length)}function Kd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function mR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Se(t[n],e[n]);return Se(t.length,e.length)}function ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Wd=-62135596800,Gd=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Gd);return new ut(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Wd)throw new he(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gd}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new ut(0,0))}static max(){return new ye(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qd="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=En.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Se(e.length,n.length)}static compareSegments(e,n){const r=En.isNumericId(e),i=En.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?En.extractNumericId(e).compare(En.extractNumericId(n)):Bl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Er.fromString(e.substring(4,e.length-2))}}class nt extends En{construct(e,n,r){return new nt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new he(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const _R=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends En{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return _R.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qd}static keyField(){return new vt([Qd])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new he(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new he(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new he(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new he(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(nt.fromString(e))}static fromName(e){return new pe(nt.fromString(e).popFirst(5))}static empty(){return new pe(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new nt(e.slice()))}}/**
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
 */const Xs=-1;function yR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ye.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Sr(i,pe.empty(),e)}function vR(t){return new Sr(t.readTime,t.key,Xs)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(ye.min(),pe.empty(),Xs)}static max(){return new Sr(ye.max(),pe.empty(),Xs)}}function ER(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
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
 */const wR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xi(t){if(t.code!==G.FAILED_PRECONDITION||t.message!==wR)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(i=>i?H.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new H((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;n(e[h]).next(u=>{o[h]=u,++c,c===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new H((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function IR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class cc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}cc.ae=-1;/**
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
 */const Uu=-1;function lc(t){return t==null}function Aa(t){return t===0&&1/t==-1/0}function AR(t){return typeof t=="number"&&Number.isInteger(t)&&!Aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const k_="";function bR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yd(e)),e=RR(t.get(n),e);return Yd(e)}function RR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case k_:n+="";break;default:n+=s}}return n}function Yd(t){return t+k_+""}/**
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
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}}class qo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,n,r,i,s){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xd(this.data.getIterator())}getIteratorFrom(e){return new Xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class Xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class an{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new an([])}unionWith(e){let n=new ht(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class D_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new D_("Invalid base64 string: "+s):s}}(e);return new wt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const SR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=SR.exec(t);if(Ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */const O_="server_timestamp",N_="__type__",V_="__previous_value__",M_="__local_write_time__";function Bu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[N_])===null||n===void 0?void 0:n.stringValue)===O_}function uc(t){const e=t.mapValue.fields[V_];return Bu(e)?uc(e):e}function Zs(t){const e=Cr(t.mapValue.fields[M_].timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class CR{constructor(e,n,r,i,s,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const ba="(default)";class eo{constructor(e,n){this.projectId=e,this.database=n||ba}static empty(){return new eo("","")}get isDefaultDatabase(){return this.database===ba}isEqual(e){return e instanceof eo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const L_="__type__",PR="__max__",Ho={mapValue:{}},F_="__vector__",Ra="value";function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bu(t)?4:xR(t)?9007199254740991:kR(t)?10:11:_e()}function Dn(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zs(t).isEqual(Zs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Cr(i.timestampValue),c=Cr(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pr(i.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return it(i.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return it(i.integerValue)===it(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=it(i.doubleValue),c=it(s.doubleValue);return o===c?Aa(o)===Aa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Jd(o)!==Jd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Dn(o[l],c[l])))return!1;return!0}(t,e);default:return _e()}}function to(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=kr(t),r=kr(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const c=it(s.integerValue||s.doubleValue),l=it(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Zd(t.timestampValue,e.timestampValue);case 4:return Zd(Zs(t),Zs(e));case 5:return Bl(t.stringValue,e.stringValue);case 6:return function(s,o){const c=Pr(s),l=Pr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const u=Se(c[h],l[h]);if(u!==0)return u}return Se(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const c=Se(it(s.latitude),it(o.latitude));return c!==0?c:Se(it(s.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ep(t.arrayValue,e.arrayValue);case 10:return function(s,o){var c,l,h,u;const m=s.fields||{},y=o.fields||{},E=(c=m[Ra])===null||c===void 0?void 0:c.arrayValue,D=(l=y[Ra])===null||l===void 0?void 0:l.arrayValue,M=Se(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((u=D==null?void 0:D.values)===null||u===void 0?void 0:u.length)||0);return M!==0?M:ep(E,D)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ho.mapValue&&o===Ho.mapValue)return 0;if(s===Ho.mapValue)return 1;if(o===Ho.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=o.fields||{},u=Object.keys(h);l.sort(),u.sort();for(let m=0;m<l.length&&m<u.length;++m){const y=Bl(l[m],u[m]);if(y!==0)return y;const E=qi(c[l[m]],h[u[m]]);if(E!==0)return E}return Se(l.length,u.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Zd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Cr(t),r=Cr(e),i=Se(n.seconds,r.seconds);return i!==0?i:Se(n.nanos,r.nanos)}function ep(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=qi(n[i],r[i]);if(s)return s}return Se(n.length,r.length)}function Hi(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return pe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$l(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$l(n.fields[o])}`;return i+"}"}(t.mapValue):_e()}function ta(t){switch(kr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uc(t);return e?16+ta(e):16;case 5:return 2*t.stringValue.length;case 6:return Pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ta(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return li(r.fields,(s,o)=>{i+=s.length+ta(o)}),i}(t.mapValue);default:throw _e()}}function jl(t){return!!t&&"integerValue"in t}function $u(t){return!!t&&"arrayValue"in t}function tp(t){return!!t&&"nullValue"in t}function np(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function na(t){return!!t&&"mapValue"in t}function kR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[L_])===null||n===void 0?void 0:n.stringValue)===F_}function Ms(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ms(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ms(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===PR}/**
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
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ms(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=c.popLast()}o?r[c.lastSegment()]=Ms(o):i.push(c.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];na(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){li(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xt(Ms(this.value))}}function U_(t){const e=[];return li(t.fields,(n,r)=>{const i=new vt([n]);if(na(r)){const s=U_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new an(e)}/**
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
 */class St{constructor(e,n,r,i,s,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new St(e,0,ye.min(),ye.min(),ye.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,i){return new St(e,1,n,ye.min(),r,i,0)}static newNoDocument(e,n){return new St(e,2,n,ye.min(),ye.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,ye.min(),ye.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sa{constructor(e,n){this.position=e,this.inclusive=n}}function rp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=pe.comparator(pe.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ip(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function DR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class B_{}class ct extends B_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NR(e,n,r):n==="array-contains"?new LR(e,r):n==="in"?new FR(e,r):n==="not-in"?new UR(e,r):n==="array-contains-any"?new BR(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VR(e,r):new MR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qi(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends B_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new On(e,n)}matches(e){return $_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function $_(t){return t.op==="and"}function j_(t){return OR(t)&&$_(t)}function OR(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function ql(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(j_(t))return t.filters.map(e=>ql(e)).join(",");{const e=t.filters.map(n=>ql(n)).join(",");return`${t.op}(${e})`}}function q_(t,e){return t instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&q_(o,i.filters[c]),!0):!1}(t,e):void _e()}function H_(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Hi(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(H_).join(" ,")+"}"}(t):"Filter"}class NR extends ct{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class VR extends ct{constructor(e,n){super(e,"in",n),this.keys=z_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MR extends ct{constructor(e,n){super(e,"not-in",n),this.keys=z_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class LR extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $u(n)&&to(n.arrayValue,this.value)}}class FR extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&to(this.value.arrayValue,n)}}class UR extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(to(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!to(this.value.arrayValue,n)}}class BR extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>to(this.value.arrayValue,r))}}/**
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
 */class $R{constructor(e,n=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.le=null}}function sp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $R(t,e,n,r,i,s,o)}function ju(t){const e=we(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ql(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.le=n}return e.le}function qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!q_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ip(t.startAt,e.startAt)&&ip(t.endAt,e.endAt)}function Hl(t){return pe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class hc{constructor(e,n=null,r=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function jR(t,e,n,r,i,s,o,c){return new hc(t,e,n,r,i,s,o,c)}function fc(t){return new hc(t)}function op(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qR(t){return t.collectionGroup!==null}function Ls(t){const e=we(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ht(vt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new Ca(s,r))}),n.has(vt.keyField().canonicalString())||e.he.push(new Ca(vt.keyField(),r))}return e.he}function Rn(t){const e=we(t);return e.Pe||(e.Pe=HR(e,Ls(t))),e.Pe}function HR(t,e){if(t.limitType==="F")return sp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ca(i.field,s)});const n=t.endAt?new Sa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sa(t.startAt.position,t.startAt.inclusive):null;return sp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zl(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dc(t,e){return qu(Rn(t),Rn(e))&&t.limitType===e.limitType}function K_(t){return`${ju(Rn(t))}|lt:${t.limitType}`}function Ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>H_(i)).join(", ")}]`),lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Hi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Hi(i)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function pc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):pe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,c,l){const h=rp(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Ls(r),i)||r.endAt&&!function(o,c,l){const h=rp(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Ls(r),i))}(t,e)}function zR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function W_(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=KR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KR(t,e,n){const r=t.field.isKeyField()?pe.comparator(e.key,n.key):function(s,o,c){const l=o.data.field(s),h=c.data.field(s);return l!==null&&h!==null?qi(l,h):_e()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return _e()}}/**
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
 */class ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return x_(this.inner)}size(){return this.innerSize}}/**
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
 */const WR=new Ze(pe.comparator);function Yn(){return WR}const G_=new Ze(pe.comparator);function Ts(...t){let e=G_;for(const n of t)e=e.insert(n.key,n);return e}function Q_(t){let e=G_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return Fs()}function Y_(){return Fs()}function Fs(){return new ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const GR=new Ze(pe.comparator),QR=new ht(pe.comparator);function ke(...t){let e=QR;for(const n of t)e=e.add(n);return e}const YR=new ht(Se);function JR(){return YR}/**
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
 */function Hu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Aa(e)?"-0":e}}function J_(t){return{integerValue:""+t}}function XR(t,e){return AR(e)?J_(e):Hu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class gc{constructor(){this._=void 0}}function ZR(t,e,n){return t instanceof Pa?function(i,s){const o={fields:{[N_]:{stringValue:O_},[M_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Bu(s)&&(s=uc(s)),s&&(o.fields[V_]=s),{mapValue:o}}(n,e):t instanceof no?Z_(t,e):t instanceof ro?ey(t,e):function(i,s){const o=X_(i,s),c=ap(o)+ap(i.Ie);return jl(o)&&jl(i.Ie)?J_(c):Hu(i.serializer,c)}(t,e)}function eS(t,e,n){return t instanceof no?Z_(t,e):t instanceof ro?ey(t,e):n}function X_(t,e){return t instanceof ka?function(r){return jl(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pa extends gc{}class no extends gc{constructor(e){super(),this.elements=e}}function Z_(t,e){const n=ty(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ro extends gc{constructor(e){super(),this.elements=e}}function ey(t,e){let n=ty(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class ka extends gc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function ap(t){return it(t.integerValue||t.doubleValue)}function ty(t){return $u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tS(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof no&&i instanceof no||r instanceof ro&&i instanceof ro?ji(r.elements,i.elements,Dn):r instanceof ka&&i instanceof ka?Dn(r.Ie,i.Ie):r instanceof Pa&&i instanceof Pa}(t.transform,e.transform)}class nS{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function ny(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iy(t.key,Kn.none()):new go(t.key,t.data,Kn.none());{const n=t.data,r=Xt.empty();let i=new ht(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hi(t.key,r,new an(i.toArray()),Kn.none())}}function rS(t,e,n){t instanceof go?function(i,s,o){const c=i.value.clone(),l=lp(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(i,s,o){if(!ra(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=lp(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(ry(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Us(t,e,n,r){return t instanceof go?function(s,o,c,l){if(!ra(s.precondition,o))return c;const h=s.value.clone(),u=up(s.fieldTransforms,l,o);return h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof hi?function(s,o,c,l){if(!ra(s.precondition,o))return c;const h=up(s.fieldTransforms,l,o),u=o.data;return u.setAll(ry(s)),u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,c){return ra(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function iS(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=X_(r.transform,i||null);s!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,s))}return n||null}function cp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ji(r,i,(s,o)=>tS(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends mc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hi extends mc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ry(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lp(t,e,n){const r=new Map;Ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,eS(o,c,n[i]))}return r}function up(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZR(s,o,e))}return r}class iy extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sS extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oS{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rS(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Y_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=n.has(i.key)?null:c;const l=ny(o,c);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>cp(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>cp(n,r))}}class zu{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ue(e.mutations.length===r.length);let i=function(){return GR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zu(e,n,r,i)}}/**
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
 */class aS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class cS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ot,xe;function lS(t){switch(t){case G.OK:return _e();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return _e()}}function sy(t){if(t===void 0)return Qn("GRPC error has no .code"),G.UNKNOWN;switch(t){case ot.OK:return G.OK;case ot.CANCELLED:return G.CANCELLED;case ot.UNKNOWN:return G.UNKNOWN;case ot.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ot.INTERNAL:return G.INTERNAL;case ot.UNAVAILABLE:return G.UNAVAILABLE;case ot.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ot.NOT_FOUND:return G.NOT_FOUND;case ot.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ot.ABORTED:return G.ABORTED;case ot.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ot.DATA_LOSS:return G.DATA_LOSS;default:return _e()}}(xe=ot||(ot={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const uS=new Er([4294967295,4294967295],0);function hp(t){const e=C_().encode(t),n=new w_;return n.update(e),new Uint8Array(n.digest())}function fp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Er([n,r],0),new Er([i,s],0)]}class Ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Is(`Invalid padding: ${n}`);if(r<0)throw new Is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Is(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Is(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Er.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Er.fromNumber(r)));return i.compare(uS)===1&&(i=new Er([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=hp(e),[r,i]=fp(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ku(s,i,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const n=hp(e),[r,i]=fp(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _c(ye.min(),i,new Ze(Se),Yn(),ke())}}class mo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mo(r,n,ke(),ke(),ke())}}/**
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
 */class ia{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class oy{constructor(e,n){this.targetId=e,this.ge=n}}class ay{constructor(e,n,r=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class dp{constructor(){this.pe=0,this.ye=pp(),this.we=wt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ke(),n=ke(),r=ke();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:_e()}}),new mo(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=pp()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ue(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class hS{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Yn(),this.$e=zo(),this.Ue=zo(),this.Ke=new Ze(Se)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:_e()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(Hl(s))if(r===0){const o=new pe(s.path);this.ze(n,o,St.newNoDocument(o,ye.min()))}else Ue(r===1);else{const o=this.et(n);if(o!==r){const c=this.tt(e),l=c?this.nt(c,e,o):1;if(l!==0){this.Ye(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,c;try{o=Pr(r).toUint8Array()}catch(l){if(l instanceof D_)return $i("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ku(o,i,s)}catch(l){return $i(l instanceof Is?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const c=this.Xe(o);if(c){if(s.current&&Hl(c.target)){const l=new pe(c.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,St.newNoDocument(l,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=ke();this.Ue.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Xe(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new _c(e,n,this.Ke,this.Qe,r);return this.Qe=Yn(),this.$e=zo(),this.Ue=zo(),this.Ke=new Ze(Se),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new dp,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ht(Se),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ht(Se),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new dp),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function zo(){return new Ze(pe.comparator)}function pp(){return new Ze(pe.comparator)}const fS={asc:"ASCENDING",desc:"DESCENDING"},dS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pS={and:"AND",or:"OR"};class gS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kl(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mS(t,e){return xa(t,e.toTimestamp())}function Sn(t){return Ue(!!t),ye.fromTimestamp(function(n){const r=Cr(n);return new ut(r.seconds,r.nanos)}(t))}function Wu(t,e){return Wl(t,e).canonicalString()}function Wl(t,e){const n=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ly(t){const e=nt.fromString(t);return Ue(py(e)),e}function Gl(t,e){return Wu(t.databaseId,e.path)}function ul(t,e){const n=ly(e);if(n.get(1)!==t.databaseId.projectId)throw new he(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new he(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new pe(hy(n))}function uy(t,e){return Wu(t.databaseId,e)}function _S(t){const e=ly(t);return e.length===4?nt.emptyPath():hy(e)}function Ql(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hy(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gp(t,e,n){return{name:Gl(t,e),fields:n.value.mapValue.fields}}function yS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,u){return h.useProto3Json?(Ue(u===void 0||typeof u=="string"),wt.fromBase64String(u||"")):(Ue(u===void 0||u instanceof cR||u instanceof Uint8Array),wt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const u=h.code===void 0?G.UNKNOWN:sy(h.code);return new he(u,h.message||"")}(o);n=new ay(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ul(t,r.document.name),s=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):ye.min(),c=new Xt({mapValue:{fields:r.document.fields}}),l=St.newFoundDocument(i,s,o,c),h=r.targetIds||[],u=r.removedTargetIds||[];n=new ia(h,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ul(t,r.document),s=r.readTime?Sn(r.readTime):ye.min(),o=St.newNoDocument(i,s),c=r.removedTargetIds||[];n=new ia([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ul(t,r.document),s=r.removedTargetIds||[];n=new ia([],s,i,null)}else{if(!("filter"in e))return _e();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cS(i,s),c=r.targetId;n=new oy(c,o)}}return n}function vS(t,e){let n;if(e instanceof go)n={update:gp(t,e.key,e.value)};else if(e instanceof iy)n={delete:Gl(t,e.key)};else if(e instanceof hi)n={update:gp(t,e.key,e.data),updateMask:CS(e.fieldMask)};else{if(!(e instanceof sS))return _e();n={verify:Gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof Pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof no)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ka)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:mS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_e()}(t,e.precondition)),n}function ES(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Sn(i.updateTime):Sn(s);return o.isEqual(ye.min())&&(o=Sn(s)),new nS(o,i.transformResults||[])}(n,e))):[]}function wS(t,e){return{documents:[uy(t,e.path)]}}function TS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=uy(t,i);const s=function(h){if(h.length!==0)return dy(On.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(u=>function(y){return{field:Ai(y.field),direction:bS(y.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Kl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:i}}function IS(t){let e=_S(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ue(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(m){const y=fy(m);return y instanceof On&&j_(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(D){return new Ca(bi(D.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(y))}(n.orderBy));let c=null;n.limit&&(c=function(m){let y;return y=typeof m=="object"?m.value:m,lc(y)?null:y}(n.limit));let l=null;n.startAt&&(l=function(m){const y=!!m.before,E=m.values||[];return new Sa(E,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,E=m.values||[];return new Sa(E,y)}(n.endAt)),jR(e,i,o,s,c,"F",l,h)}function AS(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bi(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=bi(n.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bi(n.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bi(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(bi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>fy(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return _e()}}(n.compositeFilter.op))}(t):_e()}function bS(t){return fS[t]}function RS(t){return dS[t]}function SS(t){return pS[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function bi(t){return vt.fromServerFormat(t.fieldPath)}function dy(t){return t instanceof ct?function(n){if(n.op==="=="){if(np(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(tp(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(np(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(tp(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:RS(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(i=>dy(i));return r.length===1?r[0]:{compositeFilter:{op:SS(n.op),filters:r}}}(t):_e()}function CS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function py(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gr{constructor(e,n,r,i,s=ye.min(),o=ye.min(),c=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class PS{constructor(e){this.Tt=e}}function kS(t){const e=IS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zl(e,e.limit,"L"):e}/**
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
 */class xS{constructor(){this.Tn=new DS}addToCollectionParentIndex(e,n){return this.Tn.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Sr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class DS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ht(nt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const mp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gy=41943040;class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(gy,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
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
 */class zi{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new zi(0)}static Kn(){return new zi(-1)}}/**
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
 */const _p="LruGarbageCollector",OS=1048576;function yp([t,e],[n,r]){const i=Se(t,n);return i===0?Se(e,r):i}class NS{constructor(e){this.Hn=e,this.buffer=new ht(yp),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();yp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class VS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ie(_p,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zi(n)?ie(_p,"Ignoring IndexedDB error during garbage collection: ",n):await Xi(n)}await this.er(3e5)})}}class MS{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return H.resolve(cc.ae);const r=new NS(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(mp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mp):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,c,l,h;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Ti()<=Pe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-u}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function LS(t,e){return new MS(t,e)}/**
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
 */class FS{constructor(){this.changes=new ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class US{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class BS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Us(r.mutation,i,an.empty(),ut.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ke()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ts();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ke()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,i){let s=Yn();const o=Fs(),c=function(){return Fs()}();return n.forEach((l,h)=>{const u=r.get(h.key);i.has(h.key)&&(u===void 0||u.mutation instanceof hi)?s=s.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),Us(u.mutation,h,u.mutation.getFieldMask(),ut.now())):o.set(h.key,an.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,u)=>o.set(h,u)),n.forEach((h,u)=>{var m;return c.set(h,new US(u,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Fs();let i=new Ze((o,c)=>o-c),s=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let u=r.get(l)||an.empty();u=c.applyToLocalView(h,u),r.set(l,u);const m=(i.get(c.batchId)||ke()).add(l);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,u=l.value,m=Y_();u.forEach(y=>{if(!s.has(y)){const E=ny(n.get(y),r.get(y));E!==null&&m.set(y,E),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return pe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):H.resolve(Yr());let c=Xs,l=s;return o.next(h=>H.forEach(h,(u,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(u)?H.resolve():this.remoteDocumentCache.getEntry(e,u).next(y=>{l=l.insert(u,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,ke())).next(u=>({batchId:c,changes:Q_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next(r=>{let i=Ts();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ts();return this.indexManager.getCollectionParents(e,s).next(c=>H.forEach(c,l=>{const h=function(m,y){return new hc(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(u=>{u.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,h)=>{const u=h.getKey();o.get(u)===null&&(o=o.insert(u,St.newInvalidDocument(u)))});let c=Ts();return o.forEach((l,h)=>{const u=s.get(l);u!==void 0&&Us(u.mutation,h,an.empty(),ut.now()),pc(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class $S{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return H.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Sn(i.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:kS(i.bundledQuery),readTime:Sn(i.readTime)}}(n)),H.resolve()}}/**
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
 */class jS{constructor(){this.overlays=new Ze(pe.comparator),this.Rr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return H.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new pe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return H.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ze((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let u=s.get(h.largestBatchId);u===null&&(u=Yr(),s=s.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const c=Yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,u)=>c.set(h,u)),!(c.size()>=i)););return H.resolve(c)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aS(n,r));let s=this.Rr.get(n);s===void 0&&(s=ke(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class qS{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class Gu{constructor(){this.Vr=new ht(dt.mr),this.gr=new ht(dt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new dt(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new pe(new nt([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new pe(new nt([])),r=new dt(n,e),i=new dt(n,e+1);let s=ke();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return pe.comparator(e.key,n.key)||Se(e.Cr,n.Cr)}static pr(e,n){return Se(e.Cr,n.Cr)||pe.comparator(e.key,n.key)}}/**
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
 */class HS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new ht(dt.mr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oS(s,n,r,i);this.mutationQueue.push(o);for(const c of i)this.Mr=this.Mr.add(new dt(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return H.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Uu:this.Fr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const c=this.Or(o.Cr);s.push(c)}),H.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(Se);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],c=>{r=r.add(c.Cr)})}),H.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;pe.isDocumentKey(s)||(s=s.child(""));const o=new dt(new pe(s),0);let c=new ht(Se);return this.Mr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.Cr)),!0)},o),H.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ue(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return H.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new dt(n,0),i=this.Mr.firstAfterOrEqual(r);return H.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zS{constructor(e){this.kr=e,this.docs=function(){return new Ze(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():St.newInvalidDocument(i))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,c=new pe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:u}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ER(vR(u),r)<=0||(i.has(u.key)||pc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return H.resolve(s)}getAllFromCollectionGroup(e,n,r,i){_e()}qr(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KS(this)}getSize(e){return H.resolve(this.size)}}class KS extends FS{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class WS{constructor(e){this.persistence=e,this.Qr=new ui(n=>ju(n),qu),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Gu,this.targetCount=0,this.Kr=zi.Un()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),H.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.zn(n),H.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),H.waitFor(s).next(()=>i)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),H.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Ur.containsKey(n))}}/**
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
 */class my{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new cc(0),this.zr=!1,this.zr=!0,this.jr=new qS,this.referenceDelegate=e(this),this.Hr=new WS(this),this.indexManager=new xS,this.remoteDocumentCache=function(i){return new zS(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new PS(n),this.Yr=new $S(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new HS(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const i=new GS(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return H.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class GS extends TR{constructor(e){super(),this.currentSequenceNumber=e}}class Qu{constructor(e){this.persistence=e,this.ti=new Gu,this.ni=null}static ri(e){return new Qu(e)}get ii(){if(this.ni)return this.ni;throw _e()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),H.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ii,r=>{const i=pe.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,ye.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return H.or([()=>H.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Da{constructor(e,n){this.persistence=e,this.oi=new ui(r=>bR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=LS(this,n)}static ri(e,n){return new Da(e,n)}Zr(){}Xr(e){return H.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return H.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?H.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(c=>{c||(r++,s.removeEntry(o,ye.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),H.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),H.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ta(e.data.value)),n}ar(e,n,r){return H.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return H.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Yu{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=ke(),i=ke();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yu(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class QS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YS{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return dI()?8:IR(kt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QS;return this._s(e,n,o).next(c=>{if(s.result=c,this.Xi)return this.us(e,n,o,c.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(Ti()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),H.resolve()):(Ti()<=Pe.DEBUG&&ie("QueryEngine","Query:",Ii(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Ti()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):H.resolve())}rs(e,n){if(op(n))return H.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zl(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ke(...s);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.cs(n,c);return this.ls(n,h,o,l.readTime)?this.rs(e,zl(n,null,"F")):this.hs(e,h,n,l)}))})))}ss(e,n,r,i){return op(n)||i.isEqual(ye.min())?H.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?H.resolve(null):(Ti()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ii(n)),this.hs(e,o,n,yR(i,Xs)).next(c=>c))})}cs(e,n){let r=new ht(W_(e));return n.forEach((i,s)=>{pc(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return Ti()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Ii(n)),this.ns.getDocumentsMatchingQuery(e,n,Sr.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Ju="LocalStore",JS=3e8;class XS{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new Ze(Se),this.Is=new ui(s=>ju(s),qu),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function ZS(t,e,n,r){return new XS(t,e,n,r)}async function _y(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let l=ke();for(const h of i){o.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}for(const h of s){c.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:c}))})})}function eC(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,h,u){const m=h.batch,y=m.keys();let E=H.resolve();return y.forEach(D=>{E=E.next(()=>u.getEntry(l,D)).next(M=>{const F=h.docVersions.get(D);Ue(F!==null),M.version.compareTo(F)<0&&(m.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),u.addEntry(M)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ke();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yy(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function tC(t,e){const n=we(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const c=[];e.targetChanges.forEach((u,m)=>{const y=i.get(m);if(!y)return;c.push(n.Hr.removeMatchingKeys(s,u.removedDocuments,m).next(()=>n.Hr.addMatchingKeys(s,u.addedDocuments,m)));let E=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(wt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):u.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(u.resumeToken,r)),i=i.insert(m,E),function(M,F,z){return M.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=JS?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(y,E,u)&&c.push(n.Hr.updateTargetData(s,E))});let l=Yn(),h=ke();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),c.push(nC(s,o,e.documentUpdates).next(u=>{l=u.Vs,h=u.fs})),!r.isEqual(ye.min())){const u=n.Hr.getLastRemoteSnapshotVersion(s).next(m=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(u)}return H.waitFor(c).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(n.Ts=i,s))}function nC(t,e,n){let r=ke(),i=ke();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((c,l)=>{const h=s.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(ye.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ie(Ju,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Vs:o,fs:i}})}function rC(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Uu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iC(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,H.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Yl(t,e,n){const r=we(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zi(o))throw o;ie(Ju,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function vp(t,e,n){const r=we(t);let i=ye.min(),s=ke();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,u){const m=we(l),y=m.Is.get(u);return y!==void 0?H.resolve(m.Ts.get(y)):m.Hr.getTargetData(h,u)}(r,o,Rn(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:ye.min(),n?s:ke())).next(c=>(sC(r,zR(e),c),{documents:c,gs:s})))}function sC(t,e,n){let r=t.Es.get(e)||ye.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class Ep{constructor(){this.activeTargetIds=JR()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oC{constructor(){this.ho=new Ep,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aC{To(e){}shutdown(){}}/**
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
 */const wp="ConnectivityMonitor";class Tp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ie(wp,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ie(wp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ko=null;function Jl(){return Ko===null?Ko=function(){return 268435456+Math.round(2147483648*Math.random())}():Ko++,"0x"+Ko.toString(16)}/**
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
 */const hl="RestConnection",cC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lC{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===ba?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,n,r,i,s){const o=Jl(),c=this.bo(e,n.toUriEncodedString());ie(hl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,i,s),this.vo(e,c,l,r).then(h=>(ie(hl,`Received RPC '${e}' ${o}: `,h),h),h=>{throw $i(hl,`RPC '${e}' ${o} failed with error: `,h,"url: ",c,"request:",r),h})}Co(e,n,r,i,s,o){return this.So(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ji}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,n){const r=cC[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class uC{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const At="WebChannelConnection";class hC extends lC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Jl();return new Promise((o,c)=>{const l=new T_;l.setWithCredentials(!0),l.listenOnce(I_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ea.NO_ERROR:const u=l.getResponseJson();ie(At,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ea.TIMEOUT:ie(At,`RPC '${e}' ${s} timed out`),c(new he(G.DEADLINE_EXCEEDED,"Request time out"));break;case ea.HTTP_ERROR:const m=l.getStatus();if(ie(At,`RPC '${e}' ${s} failed with status:`,m,"response text:",l.getResponseText()),m>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const E=y==null?void 0:y.error;if(E&&E.status&&E.message){const D=function(F){const z=F.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(z)>=0?z:G.UNKNOWN}(E.status);c(new he(D,E.message))}else c(new he(G.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new he(G.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{ie(At,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);ie(At,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",h,r,15)})}Wo(e,n,r){const i=Jl(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=R_(),c=b_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");ie(At,`Creating RPC '${e}' stream ${i}: ${u}`,l);const m=o.createWebChannel(u,l);let y=!1,E=!1;const D=new uC({Fo:F=>{E?ie(At,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(y||(ie(At,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),ie(At,`RPC '${e}' stream ${i} sending:`,F),m.send(F))},Mo:()=>m.close()}),M=(F,z,K)=>{F.listen(z,Q=>{try{K(Q)}catch(Y){setTimeout(()=>{throw Y},0)}})};return M(m,ws.EventType.OPEN,()=>{E||(ie(At,`RPC '${e}' stream ${i} transport opened.`),D.Qo())}),M(m,ws.EventType.CLOSE,()=>{E||(E=!0,ie(At,`RPC '${e}' stream ${i} transport closed`),D.Uo())}),M(m,ws.EventType.ERROR,F=>{E||(E=!0,$i(At,`RPC '${e}' stream ${i} transport errored:`,F),D.Uo(new he(G.UNAVAILABLE,"The operation could not be completed")))}),M(m,ws.EventType.MESSAGE,F=>{var z;if(!E){const K=F.data[0];Ue(!!K);const Q=K,Y=(Q==null?void 0:Q.error)||((z=Q[0])===null||z===void 0?void 0:z.error);if(Y){ie(At,`RPC '${e}' stream ${i} received error:`,Y);const ge=Y.status;let fe=function(T){const C=ot[T];if(C!==void 0)return sy(C)}(ge),P=Y.message;fe===void 0&&(fe=G.INTERNAL,P="Unknown error status: "+ge+" with message "+Y.message),E=!0,D.Uo(new he(fe,P)),m.close()}else ie(At,`RPC '${e}' stream ${i} received:`,K),D.Ko(K)}}),M(c,A_.STAT_EVENT,F=>{F.stat===Ul.PROXY?ie(At,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===Ul.NOPROXY&&ie(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function fl(){return typeof document<"u"?document:null}/**
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
 */function yc(t){return new gS(t,!0)}/**
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
 */class vy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&ie("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Ip="PersistentStream";class Ey{constructor(e,n,r,i,s,o,c,l){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new vy(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===G.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new he(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ie(Ip,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ie(Ip,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fC extends Ey{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=yS(this.serializer,e),r=function(s){if(!("targetChange"in s))return ye.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?Sn(o.readTime):ye.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Ql(this.serializer),n.addTarget=function(s,o){let c;const l=o.target;if(c=Hl(l)?{documents:wS(s,l)}:{query:TS(s,l).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=cy(s,o.resumeToken);const h=Kl(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ye.min())>0){c.readTime=xa(s,o.snapshotVersion.toTimestamp());const h=Kl(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=AS(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Ql(this.serializer),n.removeTarget=e,this.I_(n)}}class dC extends Ey{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=ES(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Ql(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vS(this.serializer,r))};this.I_(n)}}/**
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
 */class pC{}class gC extends pC{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new he(G.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Wl(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new he(G.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,Wl(n,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new he(G.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class mC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Qn(n),this.N_=!1):ie("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ii="RemoteStore";class _C{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{fi(this)&&(ie(ii,"Restarting streams for network reachability change."),await async function(l){const h=we(l);h.W_.add(4),await _o(h),h.j_.set("Unknown"),h.W_.delete(4),await vc(h)}(this))})}),this.j_=new mC(r,i)}}async function vc(t){if(fi(t))for(const e of t.G_)await e(!0)}async function _o(t){for(const e of t.G_)await e(!1)}function wy(t,e){const n=we(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),th(n)?eh(n):es(n).c_()&&Zu(n,e))}function Xu(t,e){const n=we(t),r=es(n);n.K_.delete(e),r.c_()&&Ty(n,e),n.K_.size===0&&(r.c_()?r.P_():fi(n)&&n.j_.set("Unknown"))}function Zu(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}es(t).y_(e)}function Ty(t,e){t.H_.Ne(e),es(t).w_(e)}function eh(t){t.H_=new hS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),es(t).start(),t.j_.B_()}function th(t){return fi(t)&&!es(t).u_()&&t.K_.size>0}function fi(t){return we(t).W_.size===0}function Iy(t){t.H_=void 0}async function yC(t){t.j_.set("Online")}async function vC(t){t.K_.forEach((e,n)=>{Zu(t,e)})}async function EC(t,e){Iy(t),th(t)?(t.j_.q_(e),eh(t)):t.j_.set("Unknown")}async function wC(t,e,n){if(t.j_.set("Online"),e instanceof ay&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.K_.delete(c),i.H_.removeTarget(c))}(t,e)}catch(r){ie(ii,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oa(t,r)}else if(e instanceof ia?t.H_.We(e):e instanceof oy?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ye.min()))try{const r=await yy(t.localStore);n.compareTo(r)>=0&&await function(s,o){const c=s.H_.ot(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.K_.get(h);u&&s.K_.set(h,u.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const u=s.K_.get(l);if(!u)return;s.K_.set(l,u.withResumeToken(wt.EMPTY_BYTE_STRING,u.snapshotVersion)),Ty(s,l);const m=new gr(u.target,l,h,u.sequenceNumber);Zu(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ie(ii,"Failed to raise snapshot:",r),await Oa(t,r)}}async function Oa(t,e,n){if(!Zi(e))throw e;t.W_.add(1),await _o(t),t.j_.set("Offline"),n||(n=()=>yy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(ii,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await vc(t)})}function Ay(t,e){return e().catch(n=>Oa(t,n,e))}async function Ec(t){const e=we(t),n=xr(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Uu;for(;TC(e);)try{const i=await rC(e.localStore,r);if(i===null){e.U_.length===0&&n.P_();break}r=i.batchId,IC(e,i)}catch(i){await Oa(e,i)}by(e)&&Ry(e)}function TC(t){return fi(t)&&t.U_.length<10}function IC(t,e){t.U_.push(e);const n=xr(t);n.c_()&&n.S_&&n.b_(e.mutations)}function by(t){return fi(t)&&!xr(t).u_()&&t.U_.length>0}function Ry(t){xr(t).start()}async function AC(t){xr(t).C_()}async function bC(t){const e=xr(t);for(const n of t.U_)e.b_(n.mutations)}async function RC(t,e,n){const r=t.U_.shift(),i=zu.from(r,e,n);await Ay(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ec(t)}async function SC(t,e){e&&xr(t).S_&&await async function(r,i){if(function(o){return lS(o)&&o!==G.ABORTED}(i.code)){const s=r.U_.shift();xr(r).h_(),await Ay(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ec(r)}}(t,e),by(t)&&Ry(t)}async function Ap(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ie(ii,"RemoteStore received new credentials");const r=fi(n);n.W_.add(3),await _o(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await vc(n)}async function CC(t,e){const n=we(t);e?(n.W_.delete(2),await vc(n)):e||(n.W_.add(2),await _o(n),n.j_.set("Unknown"))}function es(t){return t.J_||(t.J_=function(n,r,i){const s=we(n);return s.M_(),new fC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:yC.bind(null,t),No:vC.bind(null,t),Lo:EC.bind(null,t),p_:wC.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),th(t)?eh(t):t.j_.set("Unknown")):(await t.J_.stop(),Iy(t))})),t.J_}function xr(t){return t.Y_||(t.Y_=function(n,r,i){const s=we(n);return s.M_(),new dC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:AC.bind(null,t),Lo:SC.bind(null,t),D_:bC.bind(null,t),v_:RC.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Ec(t)):(await t.Y_.stop(),t.U_.length>0&&(ie(ii,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class nh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,c=new nh(e,n,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Zi(t))return new he(G.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Oi{static emptySet(e){return new Oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||pe.comparator(n.key,r.key):(n,r)=>pe.comparator(n.key,r.key),this.keyedMap=Ts(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class bp{constructor(){this.Z_=new Ze(pe.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):_e():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,i,s,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ki(e,n,Oi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class PC{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class kC{constructor(){this.queries=Rp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=we(n),s=i.queries;i.queries=Rp(),s.forEach((o,c)=>{for(const l of c.ta)l.onError(r)})})(this,new he(G.ABORTED,"Firestore shutting down"))}}function Rp(){return new ui(t=>K_(t),dc)}async function Sy(t,e){const n=we(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new PC,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const c=rh(o,`Initialization of query '${Ii(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&ih(n)}async function Cy(t,e){const n=we(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xC(t,e){const n=we(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const c of o.ta)c.oa(i)&&(r=!0);o.ea=i}}r&&ih(n)}function DC(t,e,n){const r=we(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function ih(t){t.ia.forEach(e=>{e.next()})}var Xl,Sp;(Sp=Xl||(Xl={}))._a="default",Sp.Cache="cache";class Py{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Xl.Cache}}/**
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
 */class ky{constructor(e){this.key=e}}class xy{constructor(e){this.key=e}}class OC{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ke(),this.mutatedKeys=ke(),this.ya=W_(e),this.wa=new Oi(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new bp,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,m)=>{const y=i.get(u),E=pc(this.query,m)?m:null,D=!!y&&this.mutatedKeys.has(y.key),M=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let F=!1;y&&E?y.data.isEqual(E.data)?D!==M&&(r.track({type:3,doc:E}),F=!0):this.va(y,E)||(r.track({type:2,doc:E}),F=!0,(l&&this.ya(E,l)>0||h&&this.ya(E,h)<0)&&(c=!0)):!y&&E?(r.track({type:0,doc:E}),F=!0):y&&!E&&(r.track({type:1,doc:y}),F=!0,(l||h)&&(c=!0)),F&&(E?(o=o.add(E),s=M?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{wa:o,Da:r,ls:c,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((u,m)=>function(E,D){const M=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return M(E)-M(D)}(u.type,m.type)||this.ya(u.doc,m.doc)),this.Ca(r),i=i!=null&&i;const c=n&&!i?this.Fa():[],l=this.pa.size===0&&this.current&&!i?1:0,h=l!==this.ga;return this.ga=l,o.length!==0||h?{snapshot:new Ki(this.query,e.wa,s,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new bp,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ke(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new xy(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new ky(r))}),n}Oa(e){this.fa=e.gs,this.pa=ke();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Ki.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const sh="SyncEngine";class NC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VC{constructor(e){this.key=e,this.Ba=!1}}class MC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new ui(c=>K_(c),dc),this.qa=new Map,this.Qa=new Set,this.$a=new Ze(pe.comparator),this.Ua=new Map,this.Ka=new Gu,this.Wa={},this.Ga=new Map,this.za=zi.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function LC(t,e,n=!0){const r=Ly(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Dy(r,e,n,!0),i}async function FC(t,e){const n=Ly(t);await Dy(n,e,!0,!1)}async function Dy(t,e,n,r){const i=await iC(t.localStore,Rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let c;return r&&(c=await UC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&wy(t.remoteStore,i),c}async function UC(t,e,n,r,i){t.Ha=(m,y,E)=>async function(M,F,z,K){let Q=F.view.ba(z);Q.ls&&(Q=await vp(M.localStore,F.query,!1).then(({documents:P})=>F.view.ba(P,Q)));const Y=K&&K.targetChanges.get(F.targetId),ge=K&&K.targetMismatches.get(F.targetId)!=null,fe=F.view.applyChanges(Q,M.isPrimaryClient,Y,ge);return Pp(M,F.targetId,fe.Ma),fe.snapshot}(t,m,y,E);const s=await vp(t.localStore,e,!0),o=new OC(e,s.gs),c=o.ba(s.documents),l=mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(c,t.isPrimaryClient,l);Pp(t,n,h.Ma);const u=new NC(e,n,o);return t.ka.set(e,u),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function BC(t,e,n){const r=we(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!dc(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yl(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Xu(r.remoteStore,i.targetId),Zl(r,i.targetId)}).catch(Xi)):(Zl(r,i.targetId),await Yl(r.localStore,i.targetId,!0))}async function $C(t,e){const n=we(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xu(n.remoteStore,r.targetId))}async function jC(t,e,n){const r=QC(t);try{const i=await function(o,c){const l=we(o),h=ut.now(),u=c.reduce((E,D)=>E.add(D.key),ke());let m,y;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let D=Yn(),M=ke();return l.ds.getEntries(E,u).next(F=>{D=F,D.forEach((z,K)=>{K.isValidDocument()||(M=M.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,D)).next(F=>{m=F;const z=[];for(const K of c){const Q=iS(K,m.get(K.key).overlayedDocument);Q!=null&&z.push(new hi(K.key,Q,U_(Q.value.mapValue),Kn.exists(!0)))}return l.mutationQueue.addMutationBatch(E,h,z,c)}).next(F=>{y=F;const z=F.applyToLocalDocumentSet(m,M);return l.documentOverlayCache.saveOverlays(E,F.batchId,z)})}).then(()=>({batchId:y.batchId,changes:Q_(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let h=o.Wa[o.currentUser.toKey()];h||(h=new Ze(Se)),h=h.insert(c,l),o.Wa[o.currentUser.toKey()]=h}(r,i.batchId,n),await yo(r,i.changes),await Ec(r.remoteStore)}catch(i){const s=rh(i,"Failed to persist write");n.reject(s)}}async function Oy(t,e){const n=we(t);try{const r=await tC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ua.get(s);o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?Ue(o.Ba):i.removedDocuments.size>0&&(Ue(o.Ba),o.Ba=!1))}),await yo(n,r,e)}catch(r){await Xi(r)}}function Cp(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const c=o.view.sa(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=we(o);l.onlineState=c;let h=!1;l.queries.forEach((u,m)=>{for(const y of m.ta)y.sa(c)&&(h=!0)}),h&&ih(l)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qC(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ua.get(e),s=i&&i.key;if(s){let o=new Ze(pe.comparator);o=o.insert(s,St.newNoDocument(s,ye.min()));const c=ke().add(s),l=new _c(ye.min(),new Map,new Ze(Se),o,c);await Oy(r,l),r.$a=r.$a.remove(s),r.Ua.delete(e),oh(r)}else await Yl(r.localStore,e,!1).then(()=>Zl(r,e,n)).catch(Xi)}async function HC(t,e){const n=we(t),r=e.batch.batchId;try{const i=await eC(n.localStore,e);Vy(n,r,null),Ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yo(n,i)}catch(i){await Xi(i)}}async function zC(t,e,n){const r=we(t);try{const i=await function(o,c){const l=we(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let u;return l.mutationQueue.lookupMutationBatch(h,c).next(m=>(Ue(m!==null),u=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,u,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,u)).next(()=>l.localDocuments.getDocuments(h,u))})}(r.localStore,e);Vy(r,e,n),Ny(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yo(r,i)}catch(i){await Xi(i)}}function Ny(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Vy(t,e,n){const r=we(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||My(t,r)})}function My(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Xu(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),oh(t))}function Pp(t,e,n){for(const r of n)r instanceof ky?(t.Ka.addReference(r.key,e),KC(t,r)):r instanceof xy?(ie(sh,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||My(t,r.key)):_e()}function KC(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(ie(sh,"New document in limbo: "+n),t.Qa.add(r),oh(t))}function oh(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new pe(nt.fromString(e)),r=t.za.next();t.Ua.set(r,new VC(n)),t.$a=t.$a.insert(n,r),wy(t.remoteStore,new gr(Rn(fc(n.path)),r,"TargetPurposeLimboResolution",cc.ae))}}async function yo(t,e,n){const r=we(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{o.push(r.Ha(l,e,n).then(h=>{var u;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(u=n==null?void 0:n.targetChanges.get(l.targetId))===null||u===void 0?void 0:u.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Yu.Yi(l.targetId,h);s.push(m)}}))}),await Promise.all(o),r.La.p_(i),await async function(l,h){const u=we(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>H.forEach(h,y=>H.forEach(y.Hi,E=>u.persistence.referenceDelegate.addReference(m,y.targetId,E)).next(()=>H.forEach(y.Ji,E=>u.persistence.referenceDelegate.removeReference(m,y.targetId,E)))))}catch(m){if(!Zi(m))throw m;ie(Ju,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const E=u.Ts.get(y),D=E.snapshotVersion,M=E.withLastLimboFreeSnapshotVersion(D);u.Ts=u.Ts.insert(y,M)}}}(r.localStore,s))}async function WC(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ie(sh,"User change. New user:",e.toKey());const r=await _y(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(c=>{c.forEach(l=>{l.reject(new he(G.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yo(n,r.Rs)}}function GC(t,e){const n=we(t),r=n.Ua.get(e);if(r&&r.Ba)return ke().add(r.key);{let i=ke();const s=n.qa.get(e);if(!s)return i;for(const o of s){const c=n.ka.get(o);i=i.unionWith(c.view.Sa)}return i}}function Ly(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qC.bind(null,e),e.La.p_=xC.bind(null,e.eventManager),e.La.Ja=DC.bind(null,e.eventManager),e}function QC(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zC.bind(null,e),e}class Na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return ZS(this.persistence,new YS,e.initialUser,this.serializer)}Xa(e){return new my(Qu.ri,this.serializer)}Za(e){return new oC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Na.provider={build:()=>new Na};class YC extends Na{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ue(this.persistence.referenceDelegate instanceof Da);const r=this.persistence.referenceDelegate.garbageCollector;return new VS(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new my(r=>Da.ri(r,n),this.serializer)}}class eu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WC.bind(null,this.syncEngine),await CC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kC}()}createDatastore(e){const n=yc(e.databaseInfo.databaseId),r=function(s){return new hC(s)}(e.databaseInfo);return function(s,o,c,l){return new gC(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,c){return new _C(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Cp(this.syncEngine,n,0),function(){return Tp.D()?new Tp:new aC}())}createSyncEngine(e,n){return function(i,s,o,c,l,h,u){const m=new MC(i,s,o,c,l,h);return u&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=we(i);ie(ii,"RemoteStore shutting down."),s.W_.add(5),await _o(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}eu.provider={build:()=>new eu};/**
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
 *//**
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
 */class Fy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Dr="FirestoreClient";class JC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=P_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ie(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ie(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dl(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _y(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XC(t);ie(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ap(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ap(e.remoteStore,i)),t._onlineComponents=e}async function XC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Dr,"Using user provided OfflineComponentProvider");try{await dl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===G.FAILED_PRECONDITION||i.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;$i("Error using user provided cache. Falling back to memory cache: "+n),await dl(t,new Na)}}else ie(Dr,"Using default OfflineComponentProvider"),await dl(t,new YC(void 0));return t._offlineComponents}async function Uy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Dr,"Using user provided OnlineComponentProvider"),await kp(t,t._uninitializedComponentsProvider._online)):(ie(Dr,"Using default OnlineComponentProvider"),await kp(t,new eu))),t._onlineComponents}function ZC(t){return Uy(t).then(e=>e.syncEngine)}async function tu(t){const e=await Uy(t),n=e.eventManager;return n.onListen=LC.bind(null,e.syncEngine),n.onUnlisten=BC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$C.bind(null,e.syncEngine),n}function eP(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const u=new Fy({next:y=>{u.su(),o.enqueueAndForget(()=>Cy(s,m));const E=y.docs.has(c);!E&&y.fromCache?h.reject(new he(G.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&y.fromCache&&l&&l.source==="server"?h.reject(new he(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Py(fc(c.path),u,{includeMetadataChanges:!0,Ta:!0});return Sy(s,m)}(await tu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function By(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const xp=new Map;/**
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
 */function tP(t,e,n){if(!n)throw new he(G.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nP(t,e,n,r){if(e===!0&&r===!0)throw new he(G.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dp(t){if(!pe.isDocumentKey(t))throw new he(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function Tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new he(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ah(t);throw new he(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const $y="firestore.googleapis.com",Op=!0;class Np{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new he(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$y,this.ssl=Op}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Op;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OS)throw new he(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=By((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ch{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Np({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Np(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lR;switch(r.type){case"firstParty":return new dR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new he(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xp.get(n);r&&(ie("ComponentProvider","Removing Datastore"),xp.delete(n),r.terminate())}(this),Promise.resolve()}}function rP(t,e,n,r={}){var i;const s=(t=Tr(t,ch))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;s.host!==$y&&s.host!==c&&$i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},s),{host:c,ssl:!1,emulatorOptions:r});if(!Rr(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,u;if(typeof r.mockUserToken=="string")h=r.mockUserToken,u=bt.MOCK_USER;else{h=aI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new he(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new bt(m)}t._authCredentials=new uR(new S_(h,u))}}/**
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
 */class wc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wc(this.firestore,e,this._query)}}class Qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new io(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class io extends wc{constructor(e,n,r){super(e,n,fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new pe(e))}withConverter(e){return new io(this.firestore,e,this._path)}}function lh(t,e,...n){if(t=Et(t),arguments.length===1&&(e=P_.newId()),tP("doc","path",e),t instanceof ch){const r=nt.fromString(e,...n);return Dp(r),new Qt(t,null,new pe(r))}{if(!(t instanceof Qt||t instanceof io))throw new he(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return Dp(r),new Qt(t.firestore,t instanceof io?t.converter:null,new pe(r))}}/**
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
 */const Vp="AsyncQueue";class Mp{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new vy(this,"async_queue_retry"),this.Su=()=>{const r=fl();r&&ie(Vp,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new wr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Zi(e))throw e;ie(Vp,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=nh.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&_e()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function Lp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class so extends ch{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Mp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mp(e),this._firestoreClient=void 0,await e}}}function iP(t,e){const n=typeof t=="object"?t:xu(),r=typeof t=="string"?t:ba,i=ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sI("firestore");s&&rP(i,...s)}return i}function uh(t){if(t._terminated)throw new he(G.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||sP(t),t._firestoreClient}function sP(t){var e,n,r;const i=t._freezeSettings(),s=function(c,l,h,u){return new CR(c,l,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,By(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new JC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(wt.fromBase64String(e))}catch(n){throw new he(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wi(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jy{constructor(e){this._methodName=e}}/**
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
 */class fh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class dh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const oP=/^__.*__$/;class aP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}function qy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class ph{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Va(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(qy(this.Lu)&&oP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class cP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yc(e)}ju(e,n,r,i=!1){return new ph({Lu:e,methodName:n,zu:r,path:vt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lP(t){const e=t._freezeSettings(),n=yc(t._databaseId);return new cP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uP(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);Wy("Data must be an object, but it was:",o,r);const c=zy(r,o);let l,h;if(s.merge)l=new an(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const m of s.mergeFields){const y=hP(e,m,n);if(!o.contains(y))throw new he(G.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);dP(u,y)||u.push(y)}l=new an(u),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new aP(new Xt(c),l,h)}function Hy(t,e){if(Ky(t=Et(t)))return Wy("Unsupported field value:",e,t),zy(t,e);if(t instanceof jy)return function(r,i){if(!qy(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let l=Hy(c,i.Ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ut.fromDate(r);return{timestampValue:xa(i.serializer,s)}}if(r instanceof ut){const s=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xa(i.serializer,s)}}if(r instanceof fh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wi)return{bytesValue:cy(i.serializer,r._byteString)};if(r instanceof Qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dh)return function(o,c){return{mapValue:{fields:{[L_]:{stringValue:F_},[Ra]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Wu("VectorValues must only contain numeric values.");return Hu(c.serializer,h)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${ah(r)}`)}(t,e)}function zy(t,e){const n={};return x_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,i)=>{const s=Hy(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ky(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof fh||t instanceof Wi||t instanceof Qt||t instanceof jy||t instanceof dh)}function Wy(t,e,n){if(!Ky(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ah(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function hP(t,e,n){if((e=Et(e))instanceof hh)return e._internalPath;if(typeof e=="string")return Gy(t,e);throw Va("Field path arguments must be of type string or ",t,!1,void 0,n)}const fP=new RegExp("[~\\*/\\[\\]]");function Gy(t,e,n){if(e.search(fP)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hh(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Va(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new he(G.INVALID_ARGUMENT,c+t+l)}function dP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Qy{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pP extends Qy{data(){return super.data()}}function Yy(t,e){return typeof e=="string"?Gy(t,e):e instanceof hh?e._internalPath:e._delegate._internalPath}/**
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
 */function gP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new he(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mP{convertValue(e,n="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return li(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Ra].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>it(o.doubleValue));return new dh(s)}convertGeoPoint(e){return new fh(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zs(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=nt.fromString(e);Ue(py(r));const i=new eo(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function _P(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class As{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jy extends Qy{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sa extends Jy{data(e={}){return super.data(e)}}class yP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new As(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sa(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const l=new sa(i._firestore,i._userDataWriter,c.doc.key,c.doc,new As(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new sa(i._firestore,i._userDataWriter,c.doc.key,c.doc,new As(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,u=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),u=o.indexOf(c.doc.key)),{type:vP(c.type),doc:l,oldIndex:h,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
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
 */function EP(t){t=Tr(t,Qt);const e=Tr(t.firestore,so);return eP(uh(e),t._key).then(n=>Zy(e,t,n))}class Xy extends mP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function gh(t,e,n){t=Tr(t,Qt);const r=Tr(t.firestore,so),i=_P(t.converter,e);return TP(r,[uP(lP(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Kn.none())])}function wP(t,...e){var n,r,i;t=Et(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Lp(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Lp(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let l,h,u;if(t instanceof Qt)h=Tr(t.firestore,so),u=fc(t._key.path),l={next:m=>{e[o]&&e[o](Zy(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Tr(t,wc);h=Tr(m.firestore,so),u=m._query;const y=new Xy(h);l={next:E=>{e[o]&&e[o](new yP(h,y,m,E))},error:e[o+1],complete:e[o+2]},gP(t._query)}return function(y,E,D,M){const F=new Fy(M),z=new Py(E,F,D);return y.asyncQueue.enqueueAndForget(async()=>Sy(await tu(y),z)),()=>{F.su(),y.asyncQueue.enqueueAndForget(async()=>Cy(await tu(y),z))}}(uh(h),u,c,l)}function TP(t,e){return function(r,i){const s=new wr;return r.asyncQueue.enqueueAndForget(async()=>jC(await ZC(r),i,s)),s.promise}(uh(t),e)}function Zy(t,e,n){const r=n.docs.get(e._key),i=new Xy(t);return new Jy(t,i,e._key,r,new As(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ji=i})(Yi),xn(new dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new so(new hR(r.getProvider("auth-internal")),new pR(o,r.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new he(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eo(h.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),nn(qd,Hd,e),nn(qd,Hd,"esm2017")})();function mh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IP=ev,tv=new ai("auth","Firebase",ev());/**
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
 */const Ma=new ic("@firebase/auth");function AP(t,...e){Ma.logLevel<=Pe.WARN&&Ma.warn(`Auth (${Yi}): ${t}`,...e)}function oa(t,...e){Ma.logLevel<=Pe.ERROR&&Ma.error(`Auth (${Yi}): ${t}`,...e)}/**
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
 */function pn(t,...e){throw _h(t,...e)}function Cn(t,...e){return _h(t,...e)}function nv(t,e,n){const r=Object.assign(Object.assign({},IP()),{[e]:n});return new ai("auth","Firebase",r).create(e,{appName:t.name})}function Ir(t){return nv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _h(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tv.create(t,...e)}function me(t,e,...n){if(!t)throw _h(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function Jn(t,e){t||Hn(e)}/**
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
 */function nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bP(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function RP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bP()||Su()||"connection"in navigator)?navigator.onLine:!0}function SP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=cI()||hI()}get(){return RP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yh(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kP=new vo(3e4,6e4);function di(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mr(t,e,n,r,i={}){return iv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=po(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},s);return uI()||(h.referrerPolicy="no-referrer"),rv.fetch()(await sv(t,t.config.apiHost,n,c),h)})}async function iv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CP),e);try{const i=new DP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw nv(t,u,h);pn(t,u)}}catch(i){if(i instanceof gn)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function Tc(t,e,n,r,i={}){const s=await Mr(t,e,n,r,i);return"mfaPendingCredential"in s&&pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function sv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?yh(t.config,i):`${t.config.apiScheme}://${i}`;return PP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function xP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),kP.get())})}}function Wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}function Up(t){return t!==void 0&&t.enterprise!==void 0}class OP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NP(t,e){return Mr(t,"GET","/v2/recaptchaConfig",di(t,e))}/**
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
 */async function VP(t,e){return Mr(t,"POST","/v1/accounts:delete",e)}async function La(t,e){return Mr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MP(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=vh(r);me(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bs(pl(i.auth_time)),issuedAtTime:Bs(pl(i.iat)),expirationTime:Bs(pl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pl(t){return Number(t)*1e3}function vh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bm(n);return i?JSON.parse(i):(oa("Failed to decode base64 JWT payload"),null)}catch(i){return oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bp(t){const e=vh(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&LP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await oo(t,La(n,{idToken:r}));me(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ov(s.providerUserInfo):[],c=BP(t.providerData,o),l=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),u=l?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ru(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,m)}async function UP(t){const e=Et(t);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ov(t){return t.map(e=>{var{providerId:n}=e,r=mh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $P(t,e){const n=await iv(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await sv(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",rv.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jP(t,e){return Mr(t,"POST","/v2/accounts:revokeToken",di(t,e))}/**
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
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Bp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $P(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ni;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(me(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(me(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
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
 */function sr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ru(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await oo(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MP(this,e)}reload(){return UP(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await oo(this,VP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,c,l,h,u;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,K=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Q,emailVerified:Y,isAnonymous:ge,providerData:fe,stsTokenManager:P}=n;me(Q&&P,e,"internal-error");const I=Ni.fromJSON(this.name,P);me(typeof Q=="string",e,"internal-error"),sr(m,e.name),sr(y,e.name),me(typeof Y=="boolean",e,"internal-error"),me(typeof ge=="boolean",e,"internal-error"),sr(E,e.name),sr(D,e.name),sr(M,e.name),sr(F,e.name),sr(z,e.name),sr(K,e.name);const T=new cn({uid:Q,auth:e,email:y,emailVerified:Y,displayName:m,isAnonymous:ge,photoURL:D,phoneNumber:E,tenantId:M,stsTokenManager:I,createdAt:z,lastLoginAt:K});return fe&&Array.isArray(fe)&&(T.providerData=fe.map(C=>Object.assign({},C))),F&&(T._redirectEventId=F),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ni;i.updateFromServerResponse(n);const s=new cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];me(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ov(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Ni;c.updateFromIdToken(r);const l=new cn({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ru(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
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
 */const $p=new Map;function zn(t){Jn(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
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
 */class av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}av.type="NONE";const iu=av;/**
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
 */function aa(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=aa(this.userKey,i.apiKey,s),this.fullPersistenceKey=aa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await La(this.auth,{idToken:e}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,e):null}return cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(zn(iu),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||zn(iu);const o=aa(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const u=await h._get(o);if(u){let m;if(typeof u=="string"){const y=await La(e,{idToken:u}).catch(()=>{});if(!y)break;m=await cn._fromGetAccountInfoResponse(e,y,u)}else m=cn._fromJSON(e,u);h!==s&&(c=m),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vi(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Vi(s,e,r))}}/**
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
 */function jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dv(e))return"Blackberry";if(pv(e))return"Webos";if(lv(e))return"Safari";if((e.includes("chrome/")||uv(e))&&!e.includes("edge/"))return"Chrome";if(fv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cv(t=kt()){return/firefox\//i.test(t)}function lv(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uv(t=kt()){return/crios\//i.test(t)}function hv(t=kt()){return/iemobile/i.test(t)}function fv(t=kt()){return/android/i.test(t)}function dv(t=kt()){return/blackberry/i.test(t)}function pv(t=kt()){return/webos/i.test(t)}function Eh(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qP(t=kt()){var e;return Eh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HP(){return fI()&&document.documentMode===10}function gv(t=kt()){return Eh(t)||fv(t)||pv(t)||dv(t)||/windows phone/i.test(t)||hv(t)}/**
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
 */function mv(t,e=[]){let n;switch(t){case"Browser":n=jp(kt());break;case"Worker":n=`${jp(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
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
 */class zP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function KP(t,e={}){return Mr(t,"GET","/v2/passwordPolicy",di(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const WP=6;class GP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class QP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qp(this),this.idTokenSubscription=new qp(this),this.beforeStateQueue=new zP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await La(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Ir(this));const n=e?Et(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KP(this),n=new GP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ts(t){return Et(t)}class qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=yI(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YP(t){Ic=t}function _v(t){return Ic.loadJS(t)}function JP(){return Ic.recaptchaEnterpriseScript}function XP(){return Ic.gapiScript}function ZP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class e1{constructor(){this.enterprise=new t1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class t1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const n1="recaptcha-enterprise",yv="NO_RECAPTCHA";class r1{constructor(e){this.type=n1,this.auth=ts(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{NP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new OP(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;Up(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(yv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new e1().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!n&&Up(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=JP();l.length!==0&&(l+=c),_v(l).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Hp(t,e,n,r=!1,i=!1){const s=new r1(t);let o;if(i)o=yv;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function zp(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Hp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Hp(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function i1(t,e){const n=ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Rr(s,e??{}))return i;pn(i,"already-initialized")}return n.initialize({options:e})}function s1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function o1(t,e,n){const r=ts(t);me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=vv(e),{host:o,port:c}=a1(e),l=c===null?"":`:${c}`,h={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),me(Rr(h,r.config.emulator)&&Rr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,c1()}function vv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function a1(t){const e=vv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kp(o)}}}function Kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function c1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function l1(t,e){return Mr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function u1(t,e){return Tc(t,"POST","/v1/accounts:signInWithPassword",di(t,e))}/**
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
 */async function h1(t,e){return Tc(t,"POST","/v1/accounts:signInWithEmailLink",di(t,e))}async function f1(t,e){return Tc(t,"POST","/v1/accounts:signInWithEmailLink",di(t,e))}/**
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
 */class ao extends wh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zp(e,n,"signInWithPassword",u1);case"emailLink":return h1(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zp(e,r,"signUpPassword",l1);case"emailLink":return f1(e,{idToken:n,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Mi(t,e){return Tc(t,"POST","/v1/accounts:signInWithIdp",di(t,e))}/**
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
 */const d1="http://localhost";class si extends wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:d1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
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
 */function p1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g1(t){const e=vs(Es(t)).link,n=e?vs(Es(e)).deep_link_id:null,r=vs(Es(t)).deep_link_id;return(r?vs(Es(r)).link:null)||r||n||e||t}class Th{constructor(e){var n,r,i,s,o,c;const l=vs(Es(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,m=p1((i=l.mode)!==null&&i!==void 0?i:null);me(h&&u&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=g1(e);try{return new Th(n)}catch{return null}}}/**
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
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,n){return ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Th.parseLink(n);return me(r,"argument-error"),ao._fromEmailAndCode(e,r.code,r.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends Ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends Eo{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class hr extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
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
 */class fr extends Eo{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class dr extends Eo{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cn._fromIdTokenResponse(e,r,i),o=Wp(r);return new Gi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wp(r);return new Gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ua extends gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ua(e,n,r,i)}}function wv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(t,s,e,r):s})}async function m1(t,e,n=!1){const r=await oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gi._forOperation(t,"link",r)}/**
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
 */async function _1(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(Ir(r));const i="reauthenticate";try{const s=await oo(t,wv(r,i,e,t),n);me(s.idToken,r,"internal-error");const o=vh(s.idToken);me(o,r,"internal-error");const{sub:c}=o;return me(t.uid===c,r,"user-mismatch"),Gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),s}}/**
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
 */async function Tv(t,e,n=!1){if(on(t.app))return Promise.reject(Ir(t));const r="signIn",i=await wv(t,r,e),s=await Gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function y1(t,e){return Tv(ts(t),e)}/**
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
 */async function v1(t){const e=ts(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function E1(t,e,n){return on(t.app)?Promise.reject(Ir(t)):y1(Et(t),ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&v1(t),r})}/**
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
 */function w1(t,e){return Et(t).setPersistence(e)}function T1(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function I1(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function A1(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function b1(t){return Et(t).signOut()}const Ba="__sak";/**
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
 */class Iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const R1=1e3,S1=10;class Av extends Iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,S1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},R1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Av.type="LOCAL";const Ih=Av;/**
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
 */class bv extends Iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bv.type="SESSION";const Ac=bv;/**
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
 */function C1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async h=>h(n.origin,s)),l=await C1(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
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
 */function Ah(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class P1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const h=Ah("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(y.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pn(){return window}function k1(t){Pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Rv(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function x1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function O1(){return Rv()?self:null}/**
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
 */const Sv="firebaseLocalStorageDb",N1=1,$a="firebaseLocalStorage",Cv="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rc(t,e){return t.transaction([$a],e?"readwrite":"readonly").objectStore($a)}function V1(){const t=indexedDB.deleteDatabase(Sv);return new wo(t).toPromise()}function su(){const t=indexedDB.open(Sv,N1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($a,{keyPath:Cv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($a)?e(r):(r.close(),await V1(),e(await su()))})})}async function Gp(t,e,n){const r=Rc(t,!0).put({[Cv]:e,value:n});return new wo(r).toPromise()}async function M1(t,e){const n=Rc(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function Qp(t,e){const n=Rc(t,!0).delete(e);return new wo(n).toPromise()}const L1=800,F1=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(O1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await x1(),!this.activeServiceWorker)return;this.sender=new P1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await su();return await Gp(e,Ba,"1"),await Qp(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>M1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rc(i,!1).getAll();return new wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),L1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const U1=Pv;new vo(3e4,6e4);/**
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
 */function B1(t,e){return e?zn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bh extends wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $1(t){return Tv(t.auth,new bh(t),t.bypassAuthState)}function j1(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),_1(n,new bh(t),t.bypassAuthState)}async function q1(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),m1(n,new bh(t),t.bypassAuthState)}/**
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
 */class kv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $1;case"linkViaPopup":case"linkViaRedirect":return q1;case"reauthViaPopup":case"reauthViaRedirect":return j1;default:pn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H1=new vo(2e3,1e4);class Ri extends kv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Ah();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H1.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const z1="pendingRedirect",ca=new Map;class K1 extends kv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const r=await W1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W1(t,e){const n=Y1(e),r=Q1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function G1(t,e){ca.set(t._key(),e)}function Q1(t){return zn(t._redirectPersistence)}function Y1(t){return aa(z1,t.config.apiKey,t.name)}async function J1(t,e,n=!1){if(on(t.app))return Promise.reject(Ir(t));const r=ts(t),i=B1(r,e),o=await new K1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const X1=10*60*1e3;class Z1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yp(e))}saveEventToCache(e){this.cachedEventUids.add(Yp(e)),this.lastProcessedEventTime=Date.now()}}function Yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xv(t);default:return!1}}/**
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
 */async function tk(t,e={}){return Mr(t,"GET","/v1/projects",e)}/**
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
 */const nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rk=/^https?/;async function ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tk(t);for(const n of e)try{if(sk(n))return}catch{}pn(t,"unauthorized-domain")}function sk(t){const e=nu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rk.test(n))return!1;if(nk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ok=new vo(3e4,6e4);function Jp(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ak(t){return new Promise((e,n)=>{var r,i,s;function o(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(Cn(t,"network-request-failed"))},timeout:ok.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const c=ZP("iframefcb");return Pn()[c]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},_v(`${XP()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw la=null,e})}let la=null;function ck(t){return la=la||ak(t),la}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lk=new vo(5e3,15e3),uk="__/auth/iframe",hk="emulator/auth/iframe",fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pk(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yh(e,hk):`https://${t.config.authDomain}/${uk}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=dk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${po(r).slice(1)}`}async function gk(t){const e=await ck(t),n=Pn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:pk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),c=Pn().setTimeout(()=>{s(o)},lk.get());function l(){Pn().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_k=500,yk=600,vk="_blank",Ek="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wk(t,e,n,r=_k,i=yk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},mk),{width:r.toString(),height:i.toString(),top:s,left:o}),h=kt().toLowerCase();n&&(c=uv(h)?vk:n),cv(h)&&(e=e||Ek,l.scrollbars="yes");const u=Object.entries(l).reduce((y,[E,D])=>`${y}${E}=${D},`,"");if(qP(h)&&c!=="_self")return Tk(e||"",c),new Xp(null);const m=window.open(e||"",c,u);me(m,t,"popup-blocked");try{m.focus()}catch{}return new Xp(m)}function Tk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ik="__/auth/handler",Ak="emulator/auth/handler",bk=encodeURIComponent("fac");async function Zp(t,e,n,r,i,s){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof Ev){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_I(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,m]of Object.entries({}))o[u]=m}if(e instanceof Eo){const u=e.getScopes().filter(m=>m!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await t._getAppCheckToken(),h=l?`#${bk}=${encodeURIComponent(l)}`:"";return`${Rk(t)}?${po(c).slice(1)}${h}`}function Rk({config:t}){return t.emulator?yh(t,Ak):`https://${t.authDomain}/${Ik}`}/**
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
 */const gl="webStorageSupport";class Sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ac,this._completeRedirectFn=J1,this._overrideRedirectResult=G1}async _openPopup(e,n,r,i){var s;Jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zp(e,n,r,nu(),i);return wk(e,o,Ah())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zp(e,n,r,nu(),i);return k1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gk(e),r=new Z1(e);return n.register("authEvent",i=>(me(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gl,{type:gl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gl];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gv()||lv()||Eh()}}const Ck=Sk;var eg="@firebase/auth",tg="1.10.0";/**
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
 */class Pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xk(t){xn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mv(t)},h=new QP(r,i,s,l);return s1(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new dn("auth-internal",e=>{const n=ts(e.getProvider("auth").getImmediate());return(r=>new Pk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(eg,tg,kk(t)),nn(eg,tg,"esm2017")}/**
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
 */const Dk=5*60,Ok=qm("authIdTokenMaxAge")||Dk;let ng=null;const Nk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ok)return;const i=n==null?void 0:n.token;ng!==i&&(ng=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vk(t=xu()){const e=ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i1(t,{popupRedirectResolver:Ck,persistence:[U1,Ih,Ac]}),r=qm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Nk(s.toString());I1(n,o,()=>o(n.currentUser)),T1(n,c=>o(c))}}const i=$m("auth");return i&&o1(n,`http://${i}`),n}function Mk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Mk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xk("Browser");const Ae={log:(...t)=>{},info:(...t)=>{},warn:(...t)=>{},error:(...t)=>{console.error(...t)},debug:(...t)=>{}},Lk={apiKey:"AIzaSyAmzn4bCs0uLaC7siqJeLclBZvpBVFOgoY",authDomain:"envios-kian.firebaseapp.com",projectId:"envios-kian",storageBucket:"envios-kian.firebasestorage.app",messagingSenderId:"1087472686228",appId:"1:1087472686228:web:de9213d01012f29e6cd081",measurementId:"G-P8TBPYNPJS"},Rh=Gm(Lk);Jb().then(t=>{t&&Qb(Rh)}).catch(t=>{Ae.error("Error al verificar compatibilidad con Analytics:",t)});const Sh=iP(Rh),Or=Vk(Rh);if(typeof window<"u"&&window.firebaseAuthOptions){const t=window.firebaseAuthOptions.persistenceType||"LOCAL",e={LOCAL:Ih,SESSION:Ac,NONE:iu};Or.setPersistence(e[t]).catch(n=>{Ae.error("Error configurando persistencia de autenticación:",n)})}const co={TOKEN_CHECK:15*60*1e3,TOKEN_REFRESH:45*60*1e3,TOKEN_WARNING:5*60*1e3,INACTIVITY:20*60*1e3};let De={tokenExpiration:null,lastActivity:null,isMonitoring:!1,isTokenRefreshing:!1,timers:{session:null,inactivity:null},callbacks:{onWarning:null,onExpired:null,onInactivity:null},eventListeners:[]};const Ch=()=>{De.lastActivity=Date.now()},Fk=()=>{["mousedown","mousemove","keypress","scroll","touchstart"].forEach(e=>{const n=()=>Ch();document.addEventListener(e,n,{passive:!0}),De.eventListeners.push({event:e,listener:n})})},Uk=()=>{De.eventListeners.forEach(({event:t,listener:e})=>{document.removeEventListener(t,e)}),De.eventListeners=[]},Ph=async()=>{if(!De.isMonitoring||!De.lastActivity)return;Date.now()-De.lastActivity>=co.INACTIVITY?(kh(),De.callbacks.onInactivity?await De.callbacks.onInactivity():await ua()):De.timers.inactivity=setTimeout(Ph,6e4)},Bk=async()=>{const t=Or.currentUser;if(!t){ua();return}try{const e=await t.getIdTokenResult(),r=new Date(e.expirationTime).getTime()-Date.now();r<=0?ua():r<=co.TOKEN_WARNING?(De.callbacks.onWarning&&De.callbacks.onWarning(r),await rg()):r<=co.TOKEN_REFRESH&&await rg()}catch(e){Ae.error("Error al verificar sesión:",e),ua()}},rg=async()=>{if(De.isTokenRefreshing)return!0;try{De.isTokenRefreshing=!0;const t=Or.currentUser;return t?(await t.getIdToken(!0),Ae.debug("Token renovado exitosamente"),!0):!1}catch(t){return Ae.error("Error al renovar token:",t),!1}finally{De.isTokenRefreshing=!1}},ua=async()=>{kh(),De.callbacks.onExpired&&De.callbacks.onExpired(),await Ov()},$k=(t={})=>{De.isMonitoring||(De.callbacks={...De.callbacks,...t},De.isMonitoring=!0,Ch(),Fk(),De.timers.session=setInterval(Bk,co.TOKEN_CHECK),De.timers.inactivity=setTimeout(Ph,6e4))},kh=()=>{De.isMonitoring&&(clearInterval(De.timers.session),clearTimeout(De.timers.inactivity),Uk(),De={...De,isMonitoring:!1,lastActivity:null,timers:{session:null,inactivity:null}})},jk=()=>{De.isMonitoring&&(Ch(),clearTimeout(De.timers.inactivity),De.timers.inactivity=setTimeout(Ph,6e4))},qk=async()=>{const t=Or.currentUser;if(!t)return!1;try{const e=await t.getIdTokenResult();return new Date(e.expirationTime).getTime()>Date.now()}catch{return!1}},Hk=()=>{if(!De.isMonitoring||!De.lastActivity)return 0;const t=Date.now()-De.lastActivity;return Math.max(0,co.INACTIVITY-t)},Dv={startMonitoring:$k,stopMonitoring:kh,resetInactivityTimer:jk,isSessionActive:qk,getRemainingInactivityTime:Hk},zk=async(t,e,n=!1)=>{try{Ae.debug("Iniciando sesión:",t),await w1(Or,n?Ih:Ac);const r=await E1(Or,t,e);return Dv.startMonitoring({onWarning:i=>{Ae.warn(`Sesión expirando en ${Math.ceil(i/1e3/60)} minutos`)},onExpired:()=>{Ae.warn("Sesión expirada")}}),{success:!0,user:r.user}}catch(r){return Ae.error("Error al iniciar sesión:",r),{success:!1,error:Gk(r.code)}}},Ov=async()=>{try{return Dv.stopMonitoring(),await b1(Or),Ae.debug("Sesión cerrada exitosamente"),{success:!0}}catch(t){return Ae.error("Error al cerrar sesión:",t),{success:!1,error:t.message}}},Kk=()=>new Promise((t,e)=>{const n=A1(Or,r=>{n(),t(r)},e)}),Wk=async()=>{try{return!!await Kk()}catch(t){return Ae.error("Error al verificar autenticación:",t),!1}},Gk=t=>({"auth/invalid-credential":"Credenciales inválidas","auth/user-not-found":"Usuario no encontrado","auth/wrong-password":"Contraseña incorrecta","auth/too-many-requests":"Demasiados intentos fallidos","auth/network-request-failed":"Error de conexión"})[t]||"Error al iniciar sesión",rs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Qk={class:"login-container"},Yk={class:"login-box"},Jk={key:0,class:"error-message"},Xk={class:"input-group"},Zk={class:"input-group"},ex=["type"],tx={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},nx={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},rx={class:"remember-me"},ix={class:"remember-me-label"},sx=["disabled"],ox={key:0,class:"loader"},ax={class:"footer"},cx={__name:"AdminLogin",setup(t){Ja(()=>{const h=document.createElement("link");h.href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",h.rel="stylesheet",h.crossOrigin="anonymous",document.head.appendChild(h);const u=`
    body, html {
      background: linear-gradient(135deg, #f5f7fa, #e9edf2) !important;
      background-color: transparent !important;
      background-image: linear-gradient(135deg, #f5f7fa, #e9edf2) !important;
      margin: 0 !important;
      padding: 0 !important;
      min-height: 100vh !important;
      min-width: 100vw !important;
      overflow-x: hidden !important;
    }
  `,m=document.createElement("style");m.setAttribute("id","login-gradient-style"),m.textContent=u,document.head.appendChild(m)}),ho(()=>{const h=document.getElementById("login-gradient-style");h&&h.remove(),document.body.style.background="white",document.documentElement.style.background="white"});const e=tt(""),n=tt(""),r=tt(""),i=tt(!1),s=tt(!1),o=tt(!1),c=Om(),l=async()=>{var h,u,m,y,E,D;r.value="",i.value=!0;try{if(await new Promise(F=>setTimeout(F,800)),!e.value.includes("@")){r.value="Ange en giltig e-postadress.",i.value=!1;return}console.log("Intentando autenticación con Firebase para:",e.value);const M=await zk(e.value,n.value,o.value);if(M.success){console.log("Usuario autenticado con Firebase:",M.user),localStorage.setItem("adminAutenticado","true"),c.push("/admin/panel");return}else console.error("Error de Firebase:",M.error),((h=M.error)==null?void 0:h.code)==="auth/invalid-credential"?r.value="Felaktiga uppgifter. Försök igen.":((u=M.error)==null?void 0:u.code)==="auth/too-many-requests"?r.value="För många försök. Försök igen senare.":((m=M.error)==null?void 0:m.code)==="auth/user-not-found"?r.value="Användaren hittades inte.":((y=M.error)==null?void 0:y.code)==="auth/wrong-password"?r.value="Felaktigt lösenord.":((E=M.error)==null?void 0:E.code)==="auth/network-request-failed"?r.value="Nätverksfel. Kontrollera din anslutning.":r.value=`Ett fel uppstod vid inloggningen: ${((D=M.error)==null?void 0:D.code)||"okänt fel"}`}catch(M){console.error("Error inesperado al iniciar sesión:",M),r.value=`Ett fel uppstod vid inloggningen: ${M.message||"okänt fel"}`}finally{i.value=!1}};return(h,u)=>(Mt(),Kt("div",Qk,[ae("div",Yk,[u[10]||(u[10]=ae("h1",{class:"header"},"ENVIOS KIAN",-1)),u[11]||(u[11]=ae("p",{class:"subheader"},"ADMINISTRATIV PANEL",-1)),lt(uw,{name:"fade"},{default:Vg(()=>[ae("form",{onSubmit:vm(l,["prevent"]),class:"login-form"},[r.value?(Mt(),Kt("div",Jk,[u[4]||(u[4]=ae("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"error-icon"},[ae("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)),ae("span",null,_r(r.value),1)])):ya("",!0),ae("div",Xk,[u[5]||(u[5]=ae("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"input-icon"},[ae("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),ae("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})],-1)),Ps(ae("input",{"onUpdate:modelValue":u[0]||(u[0]=m=>e.value=m),type:"email",placeholder:"E-post",required:"",autocomplete:"email",name:"email",inputmode:"email"},null,512),[[Gs,e.value]])]),ae("div",Zk,[u[8]||(u[8]=ae("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"input-icon"},[ae("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})],-1)),Ps(ae("input",{type:s.value?"text":"password","onUpdate:modelValue":u[1]||(u[1]=m=>n.value=m),placeholder:"Lösenord",required:""},null,8,ex),[[Ow,n.value]]),ae("button",{type:"button",onClick:u[2]||(u[2]=m=>s.value=!s.value),class:"password-toggle"},[s.value?(Mt(),Kt("svg",tx,u[6]||(u[6]=[ae("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"},null,-1),ae("path",{"fill-rule":"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule":"evenodd"},null,-1)]))):(Mt(),Kt("svg",nx,u[7]||(u[7]=[ae("path",{"fill-rule":"evenodd",d:"M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z","clip-rule":"evenodd"},null,-1),ae("path",{d:"M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z"},null,-1)])))])]),ae("div",rx,[ae("label",ix,[Ps(ae("input",{type:"checkbox","onUpdate:modelValue":u[3]||(u[3]=m=>o.value=m),class:"remember-me-checkbox"},null,512),[[_m,o.value]]),u[9]||(u[9]=ae("span",null,"Kom ihåg mig",-1))])]),ae("button",{type:"submit",disabled:i.value,class:"login-button"},[i.value?(Mt(),Kt("span",ox)):ya("",!0),ae("span",null,_r(i.value?"Loggar in...":"Logga in"),1)],8,sx)],32)]),_:1})]),ae("div",ax,[ae("p",null,"© "+_r(new Date().getFullYear())+" Envios Kian · Alla rättigheter förbehållna",1)])]))}},lx=rs(cx,[["__scopeId","data-v-d5b184b2"]]),Li={precioEstandar:1.0989011,precioEspecial:1.1111111,umbralEspecial:5e3},Nv=async()=>{try{const t=lh(Sh,"configuracion","precios"),e=await EP(t);return e.exists()?e.data():(Ae.debug("No hay precios configurados, usando valores por defecto"),await gh(t,Li),Li)}catch(t){return Ae.error("Error al obtener precios:",t),Li}},ux=async(t,e)=>{try{Ae.debug("preciosService: Iniciando guardarPrecios con valores:",t,e);const n=lh(Sh,"configuracion","precios");Ae.debug("preciosService: Referencia al documento creada");const r={precioEstandar:t,precioEspecial:e,umbralEspecial:Li.umbralEspecial,ultimaActualizacion:new Date().toISOString()};return Ae.debug("preciosService: Datos a guardar:",r),Ae.debug("preciosService: Intentando setDoc..."),await gh(n,r),Ae.debug("preciosService: setDoc completado exitosamente"),{success:!0,mensaje:"Precios actualizados correctamente"}}catch(n){throw Ae.error("Error detallado al guardar precios:",n),Ae.error("Tipo de error:",n.name),Ae.error("Mensaje de error:",n.message),Ae.error("Código de error:",n.code),Ae.error("Stack trace:",n.stack),new Error("Error al guardar precios: "+n.message)}},hx=t=>{const e=lh(Sh,"configuracion","precios");return wP(e,r=>{if(r.exists()){const i=r.data();t({success:!0,data:i})}else gh(e,Li).then(()=>{t({success:!0,data:Li})}).catch(i=>{Ae.error("Error al crear documento:",i),t({success:!1,error:i.message})})},r=>{Ae.error("Error en listener:",r),t({success:!1,error:r.message})})},Zt=tt(null),en=tt(null),Vv=tt(5e3),fx=tt(!1),ig=tt(!0);let pr=null;const dx=async()=>{try{ig.value=!0,Ae.debug("Valores iniciales antes de cargar:"),Ae.debug("PRECIO_ESTANDAR:",Zt.value),Ae.debug("PRECIO_ESPECIAL:",en.value);const t=await Nv();Ae.debug("Precios obtenidos de Firebase:",t),Zt.value=t.precioEstandar,en.value=t.precioEspecial,Vv.value=t.umbralEspecial,Ae.debug("Valores después de cargar:"),Ae.debug("PRECIO_ESTANDAR:",Zt.value),Ae.debug("PRECIO_ESPECIAL:",en.value),fx.value=!0,Ae.debug("Precios cargados desde Firebase:",t);const e=new CustomEvent("precios-cargados",{detail:{success:!0,precios:{estandar:Zt.value,especial:en.value}}});window.dispatchEvent(e),px()}catch(t){Ae.error("Error al cargar precios:",t);const e=new CustomEvent("precios-error",{detail:{error:t.message}});window.dispatchEvent(e)}finally{ig.value=!1}},px=()=>{pr||(pr=hx(t=>{if(t.success&&t.data){Ae.debug("Datos actualizados recibidos por listener:",t.data),Zt.value=t.data.precioEstandar,en.value=t.data.precioEspecial,t.data.umbralEspecial&&(Vv.value=t.data.umbralEspecial);const e=new CustomEvent("precios-actualizados",{detail:{success:!0,precios:{estandar:Zt.value,especial:en.value},tiempoReal:!0}});window.dispatchEvent(e)}else if(!t.success){Ae.error("Error en listener:",t.error);const e=new CustomEvent("precios-error",{detail:{error:t.error}});window.dispatchEvent(e)}}),typeof window<"u"&&window.addEventListener("beforeunload",()=>{pr&&(pr(),pr=null)}))};dx();async function gx(t,e){try{Ae.debug("Intentando guardar en Firebase...");const n=await ux(t,e);Ae.debug("Resultado de Firebase:",n),Zt.value=t,en.value=e;const r=new CustomEvent("precios-actualizados",{detail:{success:!0,precios:{estandar:t,especial:e}}});return window.dispatchEvent(r),!0}catch(n){Ae.error("Error detallado al actualizar tasas:",n),Ae.error("Mensaje de error:",n.message),Ae.error("Stack trace:",n.stack);const r=new CustomEvent("precios-error",{detail:{error:n.message}});throw window.dispatchEvent(r),n}}typeof window<"u"&&window.addEventListener("beforeunload",()=>{pr&&(pr(),pr=null)});const mx={class:"admin-header"},_x={__name:"CabeceraAdmin",emits:["cerrar-sesion"],setup(t,{emit:e}){const n=e,r=()=>{n("cerrar-sesion")};return(i,s)=>(Mt(),Kt("header",mx,[ae("div",{class:"header-content"},[s[1]||(s[1]=K0('<div class="logo-title" data-v-5b148ece><div class="logo-container" data-v-5b148ece><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="logo-icon" data-v-5b148ece><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-v-5b148ece></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-5b148ece></path></svg></div><div data-v-5b148ece><h1 data-v-5b148ece>Administrativ Panel</h1><p data-v-5b148ece>Envios Kian</p></div></div>',1)),ae("button",{onClick:r,class:"logout-button"},s[0]||(s[0]=[ae("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"button-icon"},[ae("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 3a1 1 0 00-1-1H7a1 1 0 00-1 1v1a1 1 0 001 1h6a1 1 0 001-1V6zm-7.25 4.937a.75.75 0 01.344-.657l2.25-1.5a.75.75 0 01.812 0l2.25 1.5a.75.75 0 010 1.307l-2.25 1.5a.75.75 0 01-.812 0l-2.25-1.5a.75.75 0 01-.344-.65V10.5h-1V9.937z","clip-rule":"evenodd"})],-1),Iu(" Logga ut ")]))])]))}},yx=rs(_x,[["__scopeId","data-v-5b148ece"]]),vx={class:"form-container"},Ex={class:"price-form"},wx={class:"price-card"},Tx={class:"price-input-container"},Ix={class:"input-wrapper"},Ax={class:"price-card"},bx={class:"price-input-container"},Rx={class:"input-wrapper"},Sx={class:"form-actions"},Cx=["disabled"],Px={key:0,class:"loader"},kx={__name:"FormularioPrecios",props:{valorEstandarInicial:{type:String,required:!0},valorEspecialInicial:{type:String,required:!0},estaGuardando:{type:Boolean,default:!1}},emits:["guardar"],setup(t,{emit:e}){const n=t,r=e,i=tt(n.valorEstandarInicial),s=tt(n.valorEspecialInicial),o=tt(n.estaGuardando),c=()=>{console.log("FormularioPrecios: Actualizando valores"),console.log("valorEstandarInicial:",n.valorEstandarInicial),console.log("valorEspecialInicial:",n.valorEspecialInicial),n.valorEstandarInicial&&n.valorEstandarInicial!==""&&(i.value=n.valorEstandarInicial),n.valorEspecialInicial&&n.valorEspecialInicial!==""&&(s.value=n.valorEspecialInicial),o.value=n.estaGuardando,console.log("Valores actualizados:"),console.log("precioEstandar:",i.value),console.log("precioEspecial:",s.value)};Xr(()=>n.valorEstandarInicial,c),Xr(()=>n.valorEspecialInicial,c),Xr(()=>n.estaGuardando,()=>o.value=n.estaGuardando);const l=()=>{r("guardar",{estandar:parseFloat(i.value),especial:parseFloat(s.value)})};return(h,u)=>(Mt(),Kt("div",vx,[ae("form",{onSubmit:vm(l,["prevent"])},[ae("div",Ex,[ae("div",wx,[u[3]||(u[3]=ae("div",{class:"price-card-header"},[ae("h3",null,"Standardpris")],-1)),ae("div",Tx,[ae("div",Ix,[Ps(ae("input",{type:"number",step:"0.0000001",min:"0","onUpdate:modelValue":u[0]||(u[0]=m=>i.value=m),id:"precioEstandar",placeholder:"1.0989011",required:""},null,512),[[Gs,i.value]]),u[2]||(u[2]=ae("span",{class:"currency-indicator"},"Bs.",-1))])])]),ae("div",Ax,[u[5]||(u[5]=ae("div",{class:"price-card-header"},[ae("h3",null,"Specialpris")],-1)),ae("div",bx,[ae("div",Rx,[Ps(ae("input",{type:"number",step:"0.0000001",min:"0","onUpdate:modelValue":u[1]||(u[1]=m=>s.value=m),id:"precioEspecial",placeholder:"1.1111111",required:""},null,512),[[Gs,s.value]]),u[4]||(u[4]=ae("span",{class:"currency-indicator"},"Bs.",-1))])])]),ae("div",Sx,[ae("button",{type:"submit",class:"save-button",disabled:o.value},[o.value?(Mt(),Kt("span",Px)):ya("",!0),Iu(" "+_r(o.value?"Sparar...":"Spara ändringar"),1)],8,Cx)])])],32)]))}},xx=rs(kx,[["__scopeId","data-v-a2ef8052"]]),Dx={class:"notificacion-icono"},Ox={class:"notificacion-mensaje"},Nx={__name:"NotificacionToast",props:{duracion:{type:Number,default:3e3}},setup(t,{expose:e}){const n=t,r=tt(!1),i=tt(""),s=tt("notificacion-exito"),o=tt("✓");let c=null;const l=m=>{u(m,"notificacion-exito","✓")},h=m=>{u(m,"notificacion-error","✕")},u=(m,y,E)=>{c&&(clearTimeout(c),c=null),r.value=!1,setTimeout(()=>{i.value=m,s.value=y,o.value=E,r.value=!0,console.log(`Mostrando notificación: ${m}`,new Date().toISOString()),c=setTimeout(()=>{const D=document.querySelector(".notificacion");D?(D.classList.add("fadeout"),setTimeout(()=>{r.value=!1,console.log("Notificación ocultada",new Date().toISOString())},300)):r.value=!1,c=null},n.duracion-300)},100)};return ho(()=>{c&&(clearTimeout(c),c=null)}),e({mostrarExito:l,mostrarError:h}),(m,y)=>r.value?(Mt(),Kt("div",{key:0,class:Ka(["notificacion",s.value])},[ae("div",Dx,_r(o.value),1),ae("div",Ox,_r(i.value),1)],2)):ya("",!0)}},Vx=rs(Nx,[["__scopeId","data-v-0d4b37c0"]]),Mx={class:"admin-footer"},Lx={__name:"PieAdmin",setup(t){const e=Ct(()=>new Date().getFullYear());return(n,r)=>(Mt(),Kt("div",Mx,[ae("p",null,"Envios Kian Administrativ Panel © "+_r(e.value),1)]))}},Fx=rs(Lx,[["__scopeId","data-v-6d538052"]]),Ux={class:"admin-container"},Bx={class:"admin-main"},$x={key:0,class:"loading-overlay"},jx={key:1,class:"main-card"},qx={__name:"AdminPanel",setup(t){const e=Om(),n=Ct(()=>s.value?"":Zt.value.toString()),r=Ct(()=>s.value?"":en.value.toString()),i=tt(!1),s=tt(!0),o=tt(null),c=E=>{var D;console.error(E),(D=o.value)==null||D.mostrarError(E)},l=E=>{var D;console.log("Precios actualizados:",E.detail),(D=o.value)==null||D.mostrarExito("Priserna har uppdaterats")},h=E=>{var D;console.error("Error al actualizar precios:",E.detail.error),(D=o.value)==null||D.mostrarError("Fel vid uppdatering av priser")};Ja(async()=>{localStorage.getItem("adminAutenticado")==="true"?(await u(),window.addEventListener("precios-actualizados",l),window.addEventListener("precios-error",h)):e.push("/admin/login")}),ho(()=>{window.removeEventListener("precios-actualizados",l),window.removeEventListener("precios-error",h)});const u=async()=>{try{s.value=!0;const E=await Nv();console.log("AdminPanel: Precios cargados desde Firebase:",E),E&&(Zt.value=E.precioEstandar,en.value=E.precioEspecial,console.log("AdminPanel: Precios actualizados:"),console.log("PRECIO_ESTANDAR:",Zt.value),console.log("PRECIO_ESPECIAL:",en.value))}catch(E){c("Error al cargar los precios: "+E.message),console.error("Error al cargar precios:",E)}finally{s.value=!1}},m=async E=>{var D,M,F;i.value=!0;try{if(isNaN(E.estandar)||isNaN(E.especial)||E.estandar<=0||E.especial<=0)throw new Error("Los valores deben ser números positivos");console.log("Valores a guardar:",E.estandar,E.especial);try{await gx(E.estandar,E.especial),console.log("Precios guardados exitosamente en Firebase"),(D=o.value)==null||D.mostrarExito("Priserna har uppdaterats")}catch(z){throw console.error("Error específico de Firebase:",z),(M=o.value)==null||M.mostrarError(`Error: ${z.message}`),z}}catch(z){console.error("Error al guardar precios:",z),(F=o.value)==null||F.mostrarError(`Fel vid uppdatering av priser: ${z.message}`)}finally{i.value=!1}},y=async()=>{try{const E=await Ov();E.success?console.log("Sesión cerrada exitosamente"):console.error("Error al cerrar sesión:",E.error)}catch(E){console.error("Error al cerrar sesión:",E)}finally{localStorage.removeItem("adminAutenticado"),e.push("/admin/login")}};return Ct(()=>(console.log("AdminPanel: Computando precioEstandarActual:",Zt.value),Zt.value)),Ct(()=>(console.log("AdminPanel: Computando precioEspecialActual:",en.value),en.value)),(E,D)=>(Mt(),Kt("div",Ux,[lt(yx,{onCerrarSesion:y}),ae("main",Bx,[D[1]||(D[1]=ae("div",{class:"page-header"},[ae("h2",null,"Prisinställningar")],-1)),s.value?(Mt(),Kt("div",$x,D[0]||(D[0]=[ae("div",{class:"loading-spinner"},null,-1),ae("div",{class:"loading-text"},"Cargando precios...",-1)]))):(Mt(),Kt("div",jx,[lt(xx,{"valor-estandar-inicial":n.value,"valor-especial-inicial":r.value,"esta-guardando":i.value,onGuardar:m},null,8,["valor-estandar-inicial","valor-especial-inicial","esta-guardando"])])),lt(Fx)]),lt(Vx,{ref_key:"notificacion",ref:o,duracion:3e3},null,512)]))}},Hx=rs(qx,[["__scopeId","data-v-4047afb9"]]),zx=[{path:"/",redirect:"/admin/login"},{path:"/admin",redirect:"/admin/panel"},{path:"/admin/login",name:"AdminLogin",component:lx},{path:"/admin/panel",name:"AdminPanel",component:Hx,meta:{requiereAutenticacion:!0}}],Mv=HT({history:vT(),routes:zx});Mv.beforeEach(async(t,e,n)=>{if(t.matched.some(r=>r.meta.requiereAutenticacion))try{await Wk()?(console.log("Usuario autenticado con Firebase"),n()):(console.log("Verificando autenticación con localStorage como fallback"),localStorage.getItem("adminAutenticado")==="true"?(console.log("Usuario autenticado con localStorage"),n()):(console.log("Usuario no autenticado, redirigiendo al login"),n({name:"AdminLogin"})))}catch(r){console.error("Error al verificar autenticación:",r),localStorage.getItem("adminAutenticado")==="true"?n():n({name:"AdminLogin"})}else n()});const Lv=Uw(jw);Lv.use(Mv);{const t={...console};console.log=()=>{},console.debug=()=>{},console.info=()=>{},console.warn=t.warn,console.error=t.error}typeof window<"u"&&!window.electronAPI&&(window.electronAPI={guardarPreciosEnArchivo:async(t,e)=>{try{console.log("Guardando precios en el archivo físico...",t,e);const n=await fetch("/api/actualizar-precios",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({estandar:t,especial:e})});if(!n.ok){const i=await n.json();throw new Error(i.error||"Error al guardar precios")}const r=await n.json();return console.log("✅ Precios guardados correctamente:",r),r.success&&setTimeout(()=>{const i=new CustomEvent("precios-actualizados",{detail:{success:!0,precios:{estandar:t,especial:e}}});console.log("Emitiendo evento precios-actualizados"),window.dispatchEvent(i)},300),r}catch(n){throw console.error("Error al guardar precios en el archivo:",n),setTimeout(()=>{const r=new CustomEvent("precios-error",{detail:{error:n.message}});console.log("Emitiendo evento precios-error"),window.dispatchEvent(r)},300),n}}});Lv.mount("#app");
