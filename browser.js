// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"",a=e()?function(r){var e,i,a,u,f;if(null==r)return n.call(r);i=r[o],f=o,e=null!=(u=r)&&t.call(u,f);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=i:delete r[o],a}:function(r){return n.call(r)},u=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)},f=Math.floor;function c(r){return f(r)===r}var l=9007199254740991,s="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function y(r){return"number"==typeof r}function g(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function h(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+g(i):g(i)+r,t&&(r="-"+r)),r}var d=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function v(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!y(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=h(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=h(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===b.call(r.specifier)?b.call(n):d.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function w(r){return"string"==typeof r}var m=Math.abs,A=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,j=/e\+(\d)$/,S=/e-(\d)$/,T=/^(\d+)$/,U=/^(\d+)e/,I=/\.0$/,O=/\.0*e/,x=/(\..*[^0])0*e/;function N(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":m(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=_.call(n,x,"$1e"),n=_.call(n,O,"e"),n=_.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_.call(n,j,"e+0$1"),n=_.call(n,S,"e-0$1"),r.alternate&&(n=_.call(n,T,"$1."),n=_.call(n,U,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===E.call(r.specifier)?E.call(n):A.call(n)}function k(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function F(r,e,n){var t=e-r.length;return t<0?r:r=n?r+k(t):k(t)+r}var V=String.fromCharCode,L=isNaN,P=Array.isArray;function B(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,n,t,i,o,a,u,f,c;if(!P(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(w(t=r[f]))a+=t;else{if(e=void 0!==t.precision,!(t=B(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,L(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,L(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=v(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!L(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=L(o)?String(t.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=N(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=h(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=F(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function C(r){var e,n,t,i;for(n=[],i=0,t=$.exec(r);t;)(e=r.slice(i,$.lastIndex-t[0].length)).length&&n.push(e),n.push(G(t)),i=$.lastIndex,t=$.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function H(r){return"string"==typeof r}function M(r){var e,n,t;if(!H(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=C(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return R.apply(null,n)}var W=Object.prototype,Y=W.toString,Z=W.__defineGetter__,Q=W.__defineSetter__,X=W.__lookupGetter__,q=W.__lookupSetter__,z=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Y.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Y.call(n))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(X.call(r,e)||q.call(r,e)?(t=r.__proto__,r.__proto__=W,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(r,e,n.get),a&&Q&&Q.call(r,e,n.set),r};function D(r,e,n){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function J(r){return"number"==typeof r}var K=Number,rr=K.prototype.toString,er=e();function nr(r){return"object"==typeof r&&(r instanceof K||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===a(r)))}function tr(r){return J(r)||nr(r)}D(tr,"isPrimitive",J),D(tr,"isObject",nr);var ir=Number.POSITIVE_INFINITY,or=K.NEGATIVE_INFINITY;function ar(r){return r<ir&&r>or&&c(r)}function ur(r){return J(r)&&ar(r)}function fr(r){return nr(r)&&ar(r.valueOf())}function cr(r){return ur(r)||fr(r)}function lr(r){return ur(r)&&r>=0}function sr(r){return fr(r)&&r.valueOf()>=0}function pr(r){return lr(r)||sr(r)}function yr(){var r,e=arguments,n=e[0],t="https://stdlib.io/e/"+n+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}D(cr,"isPrimitive",ur),D(cr,"isObject",fr),D(pr,"isPrimitive",lr),D(pr,"isObject",sr);var gr,hr="function"==typeof ArrayBuffer,dr="function"==typeof Float64Array,br="function"==typeof Float64Array?Float64Array:null,vr="function"==typeof Float64Array?Float64Array:void 0;gr=function(){var r,e,n;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,NaN]),n=e,r=(dr&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,mr=gr,Ar="function"==typeof ArrayBuffer?ArrayBuffer:null,Er="function"==typeof ArrayBuffer?ArrayBuffer:void 0;wr=function(){var r,e,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(16),t=n,(r=(hr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===a(t))&&"function"==typeof Ar.isView)&&((e=new mr(n))[0]=-3.14,e[1]=NaN,r=r&&Ar.isView(e)&&16===n.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r=wr;function jr(r){return r!=r}function Sr(r){return r===ir||r===or}function Tr(r){return c(r/2)}function Ur(r){return Tr(r>0?r-1:r+1)}var Ir=Math.sqrt;function Or(r){return Math.abs(r)}var xr,Nr="function"==typeof Uint32Array,kr="function"==typeof Uint32Array?Uint32Array:null,Fr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,e,n;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Nr&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Vr,Lr=xr,Pr="function"==typeof Uint8Array,Br="function"==typeof Uint8Array?Uint8Array:null,Rr="function"==typeof Uint8Array?Uint8Array:void 0;Vr=function(){var r,e,n;if("function"!=typeof Br)return!1;try{e=new Br(e=[1,3.14,-3.14,256,257]),n=e,r=(Pr&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var $r,Gr=Vr,Cr="function"==typeof Uint16Array,Hr="function"==typeof Uint16Array?Uint16Array:null,Mr="function"==typeof Uint16Array?Uint16Array:void 0;$r=function(){var r,e,n;if("function"!=typeof Hr)return!1;try{e=new Hr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Cr&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Wr,Yr={uint16:$r,uint8:Gr};(Wr=new Yr.uint16(1))[0]=4660;var Zr,Qr,Xr=52===new Yr.uint8(Wr.buffer)[0];!0===Xr?(Zr=1,Qr=0):(Zr=0,Qr=1);var qr={HIGH:Zr,LOW:Qr},zr=new mr(1),Dr=new Lr(zr.buffer),Jr=qr.HIGH,Kr=qr.LOW;function re(r,e,n,t){return zr[0]=r,e[t]=Dr[Jr],e[t+n]=Dr[Kr],e}function ee(r){return re(r,[0,0],1,0)}D(ee,"assign",re);var ne=!0===Xr?0:1,te=new mr(1),ie=new Lr(te.buffer);function oe(r,e){return te[0]=r,ie[ne]=e>>>0,te[0]}function ae(r){return 0|r}var ue,fe,ce=2147483647,le=!0===Xr?1:0,se=new mr(1),pe=new Lr(se.buffer);function ye(r){return se[0]=r,pe[le]}!0===Xr?(ue=1,fe=0):(ue=0,fe=1);var ge={HIGH:ue,LOW:fe},he=new mr(1),de=new Lr(he.buffer),be=ge.HIGH,ve=ge.LOW;function we(r,e){return de[be]=r,de[ve]=e,he[0]}var me=[0,0];function Ae(r,e){var n,t;return ee.assign(r,me,1,0),n=me[0],n&=ce,t=ye(e),we(n|=t&=2147483648,me[1])}var Ee=!0===Xr?1:0,_e=new mr(1),je=new Lr(_e.buffer);function Se(r,e){return _e[0]=r,je[Ee]=e>>>0,_e[0]}var Te=1023,Ue=1048576,Ie=[1,1.5],Oe=[0,.5849624872207642],xe=[0,1.350039202129749e-8];function Ne(r,e,n,t){return jr(r)||Sr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Or(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}D((function(r){return Ne(r,[0,0],1,0)}),"assign",Ne);var ke=[0,0],Fe=[0,0];function Ve(r,e){var n,t;return 0===e||0===r||jr(r)||Sr(r)?r:(Ne(r,ke,1,0),e+=ke[1],e+=function(r){var e=ye(r);return(e=(2146435072&e)>>>20)-Te|0}(r=ke[0]),e<-1074?Ae(0,r):e>1023?r<0?or:ir:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ee.assign(r,Fe,1,0),n=Fe[0],n&=2148532223,t*we(n|=e+Te<<20,Fe[1])))}var Le=1048575,Pe=1048576,Be=1083179008,Re=1e300,$e=1e-300,Ge=[0,0],Ce=[0,0];function He(r,e){var n,t,i,o,a,u,f,l,s,p,y,g,h,d;if(jr(r)||jr(e))return NaN;if(ee.assign(e,Ge,1,0),a=Ge[0],0===Ge[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Ir(r);if(-.5===e)return 1/Ir(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Sr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Or(r)<1==(e===ir)?0:ir}(r,e)}if(ee.assign(r,Ge,1,0),o=Ge[0],0===Ge[1]){if(0===o)return function(r,e){return e===or?ir:e===ir?0:e>0?Ur(e)?r:0:Ur(e)?Ae(ir,r):ir}(r,e);if(1===r)return 1;if(-1===r&&Ur(e))return-1;if(Sr(r))return r===or?He(-0,-e):e<0?0:ir}if(r<0&&!1===c(e))return(r-r)/(r-r);if(i=Or(r),n=o&ce|0,t=a&ce|0,f=a>>>31|0,u=(u=o>>>31|0)&&Ur(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(ye(r)&ce)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Re*Re:u*$e*$e;if(n>1072693248)return 0===f?u*Re*Re:u*$e*$e;y=function(r,e){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=oe(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=n,r}(Ce,i)}else y=function(r,e,n){var t,i,o,a,u,f,c,l,s,p,y,g,h,d,b,v,w,m,A,E,_;return m=0,n<Ue&&(m-=53,n=ye(e*=9007199254740992)),m+=(n>>20)-Te|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=Ue),a=oe(i=(v=(e=Se(e,n))-(c=Ie[E]))*(w=1/(e+c)),0),t=524288+(n>>1|536870912),f=Se(0,t+=E<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=oe(f=3+(o=a*a)+(b+=(u=w*(v-a*f-a*(e-(f-c))))*(a+i)),0),h=(y=-7.028461650952758e-9*(s=oe(s=(v=a*f)+(w=u*f+(b-(f-3-o))*i),0))+.9617966939259756*(w-(s-v))+xe[E])-((g=oe(g=(p=.9617967009544373*s)+y+(l=Oe[E])+(d=m),0))-d-l-p),r[0]=g,r[1]=h,r}(Ce,i,n);if(g=(p=(e-(l=oe(e,0)))*y[0]+e*y[1])+(s=l*y[0]),ee.assign(g,Ge,1,0),h=ae(Ge[0]),d=ae(Ge[1]),h>=Be){if(0!=(h-Be|d))return u*Re*Re;if(p+8008566259537294e-32>g-s)return u*Re*Re}else if((h&ce)>=1083231232){if(0!=(h-3230714880|d))return u*$e*$e;if(p<=g-s)return u*$e*$e}return g=function(r,e,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&ce|0)>>20)-Te|0,c=0,l>1071644672&&(i=Se(0,((c=r+(Pe>>s+1)>>>0)&~(Le>>(s=((c&ce)>>20)-Te|0)))>>>0),c=(c&Le|Pe)>>20-s>>>0,r<0&&(c=-c),e-=i),r=ae(r=ye(f=1-((f=(o=.6931471824645996*(i=oe(i=n+e,0)))+(a=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Ve(f,c):Se(f,r)}(h,s,p),u*g}var Me=Math.ceil,We=1048575,Ye=1.4426950407214463,Ze=[0,0];function Qe(r){var e,n,t,i,o;if(jr(r)||r<0)return NaN;if(ee.assign(r,Ze,1,0),o=0,(n=Ze[0])<1048576){if(0==(n&ce|Ze[1]))return or;o-=54,n=ye(r*=0x40000000000000)}return n>=2146435072?r+r:(o+=(n>>20)-Te|0,o+=(i=614244+(n&=Le)&1048576|0)>>20|0,t=function(r){var e,n,t,i,o,a,u,f,c,l,s;return i=ye(r),o=r-1,(We&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(l=(i&=We)-398458|0,s=440401-i|0,n=(c=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),t=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=t+n,(l|=s)>0?a*((e=.5*o*o)+f)-e:a*(f-o))}(r=Se(r,n|1072693248^i)),1.6751713164886512e-10*((r-=1)+t)+(r-(e=oe(r,0))+t)*Ye+e*Ye+o)}function Xe(r,e){var n,t,i,o,a,u,c,l,s;if(t=r.length,o=e.length,n=t*r.BYTES_PER_ELEMENT+o*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<n)for(i=new _r(jr(c=n+1)||Sr(c)||0===c?c:(c<0?(c=-c,l=-1):l=1,-1074===(s=Qe(c))?c:(s=-1===l?f(s):Me(s))>1023?ir:l*He(2,s))),a=new r.constructor(i,0,t+o),u=0;u<t;u++)a[u]=r[u];else a=new r.constructor(r.buffer,r.byteOffset,t+o);for(u=0;u<o;u++)a[t+u]=e[u];return a}return function(r,e){if(!("object"==typeof(n=e)&&null!==n&&"number"==typeof n.length&&c(n.length)&&n.length>=0&&n.length<=l))throw new TypeError(yr("1Ql2y,Ix",e));var n;if(u(r))return function(r,e){var n;for(n=0;n<e.length;n++)r.push(e[n]);return r}(r,e);if(function(r){return null!==r&&"object"==typeof r&&lr(r.length)&&r.length<=l&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}(r))return Xe(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&cr(r.length)&&r.length>=0)return function(r,e){var n,t;for(n=r.length,t=0;t<e.length;t++)r[n+t]=e[t];return r.length=n+e.length,r}(r,e);throw new TypeError(yr("1QlAi,Og",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).append=e();
//# sourceMappingURL=browser.js.map
