"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var g=i(function(j,y){"use strict";function m(r,e){var t;for(t=0;t<e.length;t++)r.push(e[t]);return r}y.exports=m});var d=i(function(o,h){"use strict";function x(r,e){var t,n;for(t=r.length,n=0;n<e.length;n++)r[t+n]=e[n];return r.length=t+e.length,r}h.exports=x});var E=i(function(C,b){"use strict";var A=require("@stdlib/array-buffer"),L=require("@stdlib/math-base-special-ceil2");function _(r,e){var t,n,p,u,v,s,f,a;if(u=r.length,s=e.length,t=u*r.BYTES_PER_ELEMENT,n=s*r.BYTES_PER_ELEMENT,p=t+n+r.byteOffset,r.buffer.byteLength<p)for(v=new A(L(p+1)),f=new r.constructor(v,0,u+s),a=0;a<u;a++)f[a]=r[a];else f=new r.constructor(r.buffer,r.byteOffset,u+s);for(a=0;a<s;a++)f[u+a]=e[a];return f}b.exports=_});var w=i(function(F,T){"use strict";var k=require("@stdlib/assert-is-array"),B=require("@stdlib/assert-is-collection"),O=require("@stdlib/assert-is-typed-array-like"),S=require("@stdlib/assert-is-integer"),q=require("@stdlib/string-format"),M=g(),N=d(),P=E();function R(r,e){if(!B(e))throw new TypeError(q("invalid argument. Second argument must be an array-like object. Value: `%s`.",e));if(k(r))return M(r,e);if(O(r))return P(r,e);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&S(r.length)&&r.length>=0)return N(r,e);throw new TypeError(q("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}T.exports=R});var V=w();module.exports=V;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
