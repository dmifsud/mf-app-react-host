import{i as g}from"./mf-app-react-host/assets/_virtual___federation_fn_import-7og5U1rJ.js";import{r as v}from"./mf-app-react-host/assets/__federation_shared_react-CsUMYuEf.js";import{r as y}from"./mf-app-react-host/assets/__federation_shared_react-dom-Dnnd693R.js";var h={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=v,R=Symbol.for("react.element"),w=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,E=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function j(t,e,o){var r,s={},a=null,i=null;o!==void 0&&(a=""+o),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)S.call(e,r)&&!O.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:R,type:t,key:a,ref:i,props:s,_owner:E.current}}c.Fragment=w;c.jsx=j;c.jsxs=j;h.exports=c;var n=h.exports,f={},u=y;f.createRoot=u.createRoot,f.hydrateRoot=u.hydrateRoot;const k={"@mf-app/remote":{url:"https://dmifsud.github.io/mf-app-react-remote/mf-app-react-remote/assets/remoteEntry.js",format:"esm",from:"vite"},"@mf-app/store":{url:"https://dmifsud.github.io/mf-app-store/mf-app-store/assets/remoteEntry.js",format:"esm",from:"vite"}},C=async(t,e)=>{const o=typeof t=="function"?await t():t,r=document.createElement("script");r.type="text/javascript",r.onload=e,r.src=o,document.getElementsByTagName("head")[0].appendChild(r)};function p(t,e){return L(t).then(o=>()=>e==="webpack"&&Object.prototype.toString.call(o).indexOf("Module")>-1&&o.default?o.default:o)}function x(t,e){const o=Object.assign(t,e);for(const r of Object.keys(o))typeof o[r]=="object"&&typeof e[r]=="object"&&(o[r]=x(o[r],e[r]));return o}const _=t=>x({react:{"18.3.1":{get:()=>p(new URL("mf-app-react-host/assets/__federation_shared_react-CsUMYuEf.js",import.meta.url).href,t),loaded:1}},"react-dom":{"18.3.1":{get:()=>p(new URL("mf-app-react-host/assets/__federation_shared_react-dom-Dnnd693R.js",import.meta.url).href,t),loaded:1}},zustand:{"4.5.2":{get:()=>p(new URL("mf-app-react-host/assets/__federation_shared_zustand-DSLfHYRu.js",import.meta.url).href,t),loaded:1}}},(globalThis.__federation_shared__||{}).default||{});async function L(t){return import(t)}async function N(t){const e=k[t];if(e.inited)return e.lib;if(e.format==="var")return new Promise(o=>{const r=()=>{e.inited||(e.lib=window[t],e.lib.init(_(e.from)),e.inited=!0),o(e.lib)};return C(e.url,r)});if(["esm","systemjs"].includes(e.format))return new Promise((o,r)=>{(typeof e.url=="function"?e.url:()=>Promise.resolve(e.url))().then(a=>{import(a).then(i=>{if(!e.inited){const m=_(e.from);i.init(m),e.lib=i,e.lib.init(m),e.inited=!0}o(e.lib)}).catch(r)})})}function l(t){return t?.__esModule||t?.[Symbol.toStringTag]==="Module"?t.default:t}function d(t,e){return N(t).then(o=>o.get(e).then(r=>r()))}const T="/mf-app-react-host/assets/react-CHdo91hT.svg",U="/vite.svg",B=await d("@mf-app/remote","./components/ReactButton");let M=l(B);const P=await d("@mf-app/remote","./web-components/lit-button");let D=l(P);const A=await d("@mf-app/store","./index");let{sayHelloWorld:H}=A;const I=await d("@mf-app/store","./counter/store.counter");let V=l(I);function W(){const{count:t,inc:e}=V(),o=r=>{e(-1)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex justify-center",children:[n.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:n.jsx("img",{src:U,className:"logo",alt:"Vite logo"})}),n.jsx("a",{href:"https://react.dev",target:"_blank",children:n.jsx("img",{src:T,className:"logo react",alt:"React logo"})})]}),n.jsx("h1",{children:"Vite + React + TS + Tailwind + Web Components"}),n.jsx("div",{children:H('from "host" app')}),n.jsxs("div",{className:"card",children:[n.jsx(M,{}),n.jsx(D,{onCountUpdated:o}),n.jsxs("p",{children:["Edit ",n.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),n.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Shared store count"}),n.jsxs("p",{children:["Count: ",t]})]})]})}const $=await g("react");f.createRoot(document.getElementById("root")).render(n.jsx($.StrictMode,{children:n.jsx(W,{})}));
