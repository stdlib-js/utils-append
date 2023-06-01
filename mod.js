// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var u=n()?function(r){var n,u,i,f,a;if(null==r)return t.call(r);u=r[o],a=o,n=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(n){return t.call(r)}return i=t.call(r),n?r[o]=u:delete r[o],i}:function(r){return t.call(r)};var i=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)},f=Math.floor;function a(r){return f(r)===r}var c="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty,l=Object.prototype,v=l.toString,p=l.__defineGetter__,b=l.__defineSetter__,s=l.__lookupGetter__,h=l.__lookupSetter__;var w=function(){try{return c({},"x",{}),!0}catch(r){return!1}}()?y:function(r,n,t){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===v.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(s.call(r,n)||h.call(r,n)?(e=r.__proto__,r.__proto__=l,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&p&&p.call(r,n,t.get),i&&b&&b.call(r,n,t.set),r};function g(r,n,t){w(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function A(r){return"number"==typeof r}var m=Number,_=m.prototype.toString;var d=n();function E(r){return"object"==typeof r&&(r instanceof m||(d?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function j(r){return A(r)||E(r)}g(j,"isPrimitive",A),g(j,"isObject",E);var U=Number.POSITIVE_INFINITY,O=m.NEGATIVE_INFINITY;function N(r){return r<U&&r>O&&a(r)}function S(r){return A(r)&&N(r)}function T(r){return E(r)&&N(r.valueOf())}function I(r){return S(r)||T(r)}function P(r){return S(r)&&r>=0}function F(r){return T(r)&&r.valueOf()>=0}function B(r){return P(r)||F(r)}function L(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}g(I,"isPrimitive",S),g(I,"isObject",T),g(B,"isPrimitive",P),g(B,"isObject",F);var H="function"==typeof ArrayBuffer;var G="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null;var V,Y="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M([1,3.14,-3.14,NaN]),t=n,r=(G&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var R=V,W="function"==typeof ArrayBuffer?ArrayBuffer:null;var k,x="function"==typeof ArrayBuffer?ArrayBuffer:void 0;k=function(){var r,n,t,e;if("function"!=typeof W)return!1;try{t=new W(16),e=t,(r=(H&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e))&&"function"==typeof W.isView)&&((n=new R(t))[0]=-3.14,n[1]=NaN,r=r&&W.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var C=k;function q(r){return r!=r}function z(r){return r===U||r===O}function D(r){return a(r/2)}function J(r){return D(r>0?r-1:r+1)}var K=Math.sqrt;function Q(r){return Math.abs(r)}var X="function"==typeof Uint32Array;var Z="function"==typeof Uint32Array?Uint32Array:null;var $,rr="function"==typeof Uint32Array?Uint32Array:void 0;$=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(X&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr=$,tr="function"==typeof Uint8Array;var er="function"==typeof Uint8Array?Uint8Array:null;var or,ur="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,256,257]),t=n,r=(tr&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var ir=or,fr="function"==typeof Uint16Array;var ar="function"==typeof Uint16Array?Uint16Array:null;var cr,yr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(fr&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var lr,vr={uint16:cr,uint8:ir};(lr=new vr.uint16(1))[0]=4660;var pr,br,sr=52===new vr.uint8(lr.buffer)[0];!0===sr?(pr=1,br=0):(pr=0,br=1);var hr={HIGH:pr,LOW:br},wr=new R(1),gr=new nr(wr.buffer),Ar=hr.HIGH,mr=hr.LOW;function _r(r,n,t,e){return wr[0]=r,n[e]=gr[Ar],n[e+t]=gr[mr],n}function dr(r){return _r(r,[0,0],1,0)}g(dr,"assign",_r);var Er=!0===sr?0:1,jr=new R(1),Ur=new nr(jr.buffer);function Or(r,n){return jr[0]=r,Ur[Er]=n>>>0,jr[0]}function Nr(r){return 0|r}var Sr,Tr,Ir=!0===sr?1:0,Pr=new R(1),Fr=new nr(Pr.buffer);function Br(r){return Pr[0]=r,Fr[Ir]}!0===sr?(Sr=1,Tr=0):(Sr=0,Tr=1);var Lr={HIGH:Sr,LOW:Tr},Hr=new R(1),Gr=new nr(Hr.buffer),Mr=Lr.HIGH,Vr=Lr.LOW;function Yr(r,n){return Gr[Mr]=r,Gr[Vr]=n,Hr[0]}var Rr=[0,0];function Wr(r,n){var t,e;return dr.assign(r,Rr,1,0),t=Rr[0],t&=2147483647,e=Br(n),Yr(t|=e&=2147483648,Rr[1])}var kr=!0===sr?1:0,xr=new R(1),Cr=new nr(xr.buffer);function qr(r,n){return xr[0]=r,Cr[kr]=n>>>0,xr[0]}var zr=[1,1.5],Dr=[0,.5849624872207642],Jr=[0,1.350039202129749e-8];function Kr(r,n,t,e){return q(r)||z(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Q(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}g((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=[0,0],Xr=[0,0];function Zr(r,n){var t,e;return 0===n||0===r||q(r)||z(r)?r:(Kr(r,Qr,1,0),n+=Qr[1],n+=function(r){var n=Br(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Qr[0]),n<-1074?Wr(0,r):n>1023?r<0?O:U:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,dr.assign(r,Xr,1,0),t=Xr[0],t&=2148532223,e*Yr(t|=n+1023<<20,Xr[1])))}var $r=1e300,rn=1e-300,nn=[0,0],tn=[0,0];function en(r,n){var t,e,o,u,i,f,c,y,l,v,p,b,s,h;if(q(r)||q(n))return NaN;if(dr.assign(n,nn,1,0),i=nn[0],0===nn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return K(r);if(-.5===n)return 1/K(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(z(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Q(r)<1==(n===U)?0:U}(r,n)}if(dr.assign(r,nn,1,0),u=nn[0],0===nn[1]){if(0===u)return function(r,n){return n===O?U:n===U?0:n>0?J(n)?r:0:J(n)?Wr(U,r):U}(r,n);if(1===r)return 1;if(-1===r&&J(n))return-1;if(z(r))return r===O?en(-0,-n):n<0?0:U}if(r<0&&!1===a(n))return(r-r)/(r-r);if(o=Q(r),t=2147483647&u|0,e=2147483647&i|0,c=i>>>31|0,f=(f=u>>>31|0)&&J(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Br(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===c?f*$r*$r:f*rn*rn;if(t>1072693248)return 0===c?f*$r*$r:f*rn*rn;p=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Or(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(tn,o)}else p=function(r,n,t){var e,o,u,i,f,a,c,y,l,v,p,b,s,h,w,g,A,m,_,d,E;return m=0,t<1048576&&(m-=53,t=Br(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(_=1048575&t|0),_<=235662?d=0:_<767610?d=1:(d=0,m+=1,t-=1048576),i=Or(o=(g=(n=qr(n,t))-(c=zr[d]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=qr(0,e+=d<<18),w=(u=o*o)*u*(0===(E=u)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),a=Or(a=3+(u=i*i)+(w+=(f=A*(g-i*a-i*(n-(a-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(l=Or(l=(g=i*a)+(A=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(A-(l-g))+Jr[d])-((b=Or(b=(v=.9617967009544373*l)+p+(y=Dr[d])+(h=m),0))-h-y-v),r[0]=b,r[1]=s,r}(tn,o,t);if(b=(v=(n-(y=Or(n,0)))*p[0]+n*p[1])+(l=y*p[0]),dr.assign(b,nn,1,0),s=Nr(nn[0]),h=Nr(nn[1]),s>=1083179008){if(0!=(s-1083179008|h))return f*$r*$r;if(v+8008566259537294e-32>b-l)return f*$r*$r}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|h))return f*rn*rn;if(v<=b-l)return f*rn*rn}return b=function(r,n,t){var e,o,u,i,f,a,c,y,l,v,p;return v=((l=2147483647&r|0)>>20)-1023|0,y=0,l>1071644672&&(e=((y=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-v>>>0,r<0&&(y=-y),n-=u=qr(0,e)),r=Nr(r=Br(c=1-((c=(i=.6931471824645996*(u=Or(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=y<<20>>>0)>>20<=0?Zr(c,y):qr(c,r)}(s,l,v),f*b}var on=Math.ceil;var un=[0,0];function fn(r){var n,t,e,o,u;if(q(r)||r<0)return NaN;if(dr.assign(r,un,1,0),u=0,(t=un[0])<1048576){if(0==(2147483647&t|un[1]))return O;u-=54,t=Br(r*=0x40000000000000)}return t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,e=function(r){var n,t,e,o,u,i,f,a,c,y,l;return u=r-1,(1048575&2+(o=Br(r)))<3?0===u?0:u*u*(.3333333333333333*u-.5):(y=(o&=1048575)-398458|0,l=440401-o|0,t=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(y|=l)>0?i*((n=.5*u*u)+a)-n:i*(a-u))}(r=qr(r,t|1072693248^o)),1.6751713164886512e-10*((r-=1)+e)+1.4426950407214463*(r-(n=Or(r,0))+e)+1.4426950407214463*n+u)}function an(r,n){var t,e,o,u,i,a,c,y,l;if(e=r.length,u=n.length,t=e*r.BYTES_PER_ELEMENT+u*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<t)for(o=new C(q(c=t+1)||z(c)||0===c?c:(c<0?(c=-c,y=-1):y=1,-1074===(l=fn(c))?c:(l=-1===y?f(l):on(l))>1023?U:y*en(2,l))),i=new r.constructor(o,0,e+u),a=0;a<e;a++)i[a]=r[a];else i=new r.constructor(r.buffer,r.byteOffset,e+u);for(a=0;a<u;a++)i[e+a]=n[a];return i}function cn(r,n){if(!("object"==typeof(t=n)&&null!==t&&"number"==typeof t.length&&a(t.length)&&t.length>=0&&t.length<=9007199254740991))throw new TypeError(L("0iE3A",n));var t;if(i(r))return function(r,n){var t;for(t=0;t<n.length;t++)r.push(n[t]);return r}(r,n);if(function(r){return null!==r&&"object"==typeof r&&P(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}(r))return an(r,n);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&I(r.length)&&r.length>=0)return function(r,n){var t,e;for(t=r.length,e=0;e<n.length;e++)r[t+e]=n[e];return r.length=t+n.length,r}(r,n);throw new TypeError(L("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}export{cn as default};
//# sourceMappingURL=mod.js.map