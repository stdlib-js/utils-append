"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var g=i(function(j,y){
function m(r,e){var t;for(t=0;t<e.length;t++)r.push(e[t]);return r}y.exports=m
});var d=i(function(o,h){
function x(r,e){var t,n;for(t=r.length,n=0;n<e.length;n++)r[t+n]=e[n];return r.length=t+e.length,r}h.exports=x
});var E=i(function(C,b){
var A=require('@stdlib/array-buffer/dist'),L=require('@stdlib/math-base-special-ceil2/dist');function _(r,e){var t,n,p,u,v,s,f,a;if(u=r.length,s=e.length,t=u*r.BYTES_PER_ELEMENT,n=s*r.BYTES_PER_ELEMENT,p=t+n+r.byteOffset,r.buffer.byteLength<p)for(v=new A(L(p+1)),f=new r.constructor(v,0,u+s),a=0;a<u;a++)f[a]=r[a];else f=new r.constructor(r.buffer,r.byteOffset,u+s);for(a=0;a<s;a++)f[u+a]=e[a];return f}b.exports=_
});var w=i(function(F,T){
var k=require('@stdlib/assert-is-array/dist'),B=require('@stdlib/assert-is-collection/dist'),O=require('@stdlib/assert-is-typed-array-like/dist'),S=require('@stdlib/assert-is-integer/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),M=g(),N=d(),P=E();function R(r,e){if(!B(e))throw new TypeError(q('1Ql2y',e));if(k(r))return M(r,e);if(O(r))return P(r,e);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&S(r.length)&&r.length>=0)return N(r,e);throw new TypeError(q('1QlAi',r))}T.exports=R
});var V=w();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
