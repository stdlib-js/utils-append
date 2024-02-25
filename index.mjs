// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@v0.2.0-esm/index.mjs";function l(l,f){if(!e(f))throw new TypeError(n("1Ql2y",f));if(t(l))return function(t,e){var r;for(r=0;r<e.length;r++)t.push(e[r]);return t}(l,f);if(r(l))return function(t,e){var r,s,n,l,f,m;if(s=t.length,l=e.length,r=s*t.BYTES_PER_ELEMENT+l*t.BYTES_PER_ELEMENT+t.byteOffset,t.buffer.byteLength<r)for(n=new i(o(r+1)),f=new t.constructor(n,0,s+l),m=0;m<s;m++)f[m]=t[m];else f=new t.constructor(t.buffer,t.byteOffset,s+l);for(m=0;m<l;m++)f[s+m]=e[m];return f}(l,f);if(null!==l&&"object"==typeof l&&"number"==typeof l.length&&s(l.length)&&l.length>=0)return function(t,e){var r,s;for(r=t.length,s=0;s<e.length;s++)t[r+s]=e[s];return t.length=r+e.length,t}(l,f);throw new TypeError(n("1QlAi",l))}export{l as default};
//# sourceMappingURL=index.mjs.map
