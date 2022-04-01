// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return e&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var a=function(r){return i.call(r)},o=Object.prototype.hasOwnProperty;var u=function(r,e){return null!=r&&o.call(r,e)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=u,l=f,s=n;var v=a,p=function(r){var e,t,n;if(null==r)return s.call(r);t=r[l],e=c(r,l);try{r[l]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[l]=t:delete r[l],n},g=t()?p:v,y=g;var h=Array.isArray?Array.isArray:function(r){return"[object Array]"===y(r)},m=Math.floor,d=m;var b=function(r){return d(r)===r},w=b;var E=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&w(r.length)&&r.length>=0&&r.length<=9007199254740991},j="function"==typeof Object.defineProperty?Object.defineProperty:null;var A=function(){try{return j({},"x",{}),!0}catch(r){return!1}},P=Object.defineProperty,_=Object.prototype,T=_.toString,O=_.__defineGetter__,V=_.__defineSetter__,S=_.__lookupGetter__,x=_.__lookupSetter__;var U=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(S.call(r,e)||x.call(r,e)?(n=r.__proto__,r.__proto__=_,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r},k=P,I=U,F=A()?k:I;var N=function(r,e,t){F(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},B=N;var M=function(r){return"number"==typeof r},R=Number,L=R.prototype.toString;var $=g,G=R,C=function(r){try{return L.call(r),!0}catch(r){return!1}},H=t();var W=function(r){return"object"==typeof r&&(r instanceof G||(H?C(r):"[object Number]"===$(r)))},Y=M,Z=W;var X=B,z=function(r){return Y(r)||Z(r)},q=W;X(z,"isPrimitive",M),X(z,"isObject",q);var D=z,J=Number.POSITIVE_INFINITY,K=R.NEGATIVE_INFINITY,Q=J,rr=K,er=b;var tr=function(r){return r<Q&&r>rr&&er(r)},nr=D.isPrimitive,ir=tr;var ar=function(r){return nr(r)&&ir(r)},or=D.isObject,ur=tr;var fr=function(r){return or(r)&&ur(r.valueOf())},cr=ar,lr=fr;var sr=B,vr=function(r){return cr(r)||lr(r)},pr=fr;sr(vr,"isPrimitive",ar),sr(vr,"isObject",pr);var gr=vr,yr=gr.isPrimitive;var hr=function(r){return yr(r)&&r>=0},mr=gr.isObject;var dr=function(r){return mr(r)&&r.valueOf()>=0},br=hr,wr=dr;var Er=B,jr=function(r){return br(r)||wr(r)},Ar=dr;Er(jr,"isPrimitive",hr),Er(jr,"isObject",Ar);var Pr=jr,_r=Pr.isPrimitive;var Tr=function(r){return null!==r&&"object"==typeof r&&_r(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength};var Or=function(r){return"string"==typeof r},Vr=String.prototype.valueOf;var Sr=g,xr=function(r){try{return Vr.call(r),!0}catch(r){return!1}},Ur=t();var kr=function(r){return"object"==typeof r&&(r instanceof String||(Ur?xr(r):"[object String]"===Sr(r)))},Ir=Or,Fr=kr;var Nr=B,Br=function(r){return Ir(r)||Fr(r)},Mr=kr;Nr(Br,"isPrimitive",Or),Nr(Br,"isObject",Mr);var Rr=Br;var Lr=function(r){return r!=r},$r=D.isPrimitive,Gr=Lr;var Cr=function(r){return $r(r)&&Gr(r)},Hr=D.isObject,Wr=Lr;var Yr=function(r){return Hr(r)&&Wr(r.valueOf())},Zr=Cr,Xr=Yr;var zr=B,qr=function(r){return Zr(r)||Xr(r)},Dr=Yr;zr(qr,"isPrimitive",Cr),zr(qr,"isObject",Dr);var Jr=E,Kr=gr.isPrimitive,Qr=Rr.isPrimitive,re=qr.isPrimitive;var ee=function(r,e,t){var n,i,a;if(!Jr(r)&&!Qr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Kr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Qr(r)){if(!Qr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,re(e)){for(a=i;a<n;a++)if(re(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},te=Rr.isPrimitive;var ne=function(r){if(!te(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ie=Rr.isPrimitive;var ae=function(r){if(!ie(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},oe=ne,ue=ae,fe=Rr.isPrimitive;var ce=function(r){return fe(r)&&r===ue(r)&&r!==oe(r)},le=J,se=K;var ve=function(r){return r==r&&r>se&&r<le},pe=Pr.isPrimitive,ge=Rr.isPrimitive;var ye=function(r,e){var t,n;if(!ge(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!pe(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},he=gr.isPrimitive,me=Rr.isPrimitive;var de=ye,be=function(r,e,t){var n,i;if(!me(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!me(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!he(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var we=function(r,e,t){var n=!1,i=e-r.length;return i<0||(be(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+de("0",i):de("0",i)+r,n&&(r="-"+r)),r},Ee=ce,je=ae,Ae=ne,Pe=ve,_e=D.isPrimitive,Te=we;var Oe=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Pe(n)){if(!_e(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Te(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Te(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Ee(r.specifier)?je(t):Ae(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ve=Rr.isPrimitive,Se=/[-\/\\^$*+?.()|[\]{}]/g;var xe=function(r){var e,t;if(!Ve(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Se,"\\$&"):(e=(e=r.substring(1,t)).replace(Se,"\\$&"),r=r[0]+e+r.substring(t))},Ue=/./;var ke=function(r){return"boolean"==typeof r},Ie=Boolean.prototype.toString;var Fe=g,Ne=function(r){try{return Ie.call(r),!0}catch(r){return!1}},Be=t();var Me=function(r){return"object"==typeof r&&(r instanceof Boolean||(Be?Ne(r):"[object Boolean]"===Fe(r)))},Re=ke,Le=Me;var $e=B,Ge=function(r){return Re(r)||Le(r)},Ce=Me;$e(Ge,"isPrimitive",ke),$e(Ge,"isObject",Ce);var He="object"==typeof self?self:null,We="object"==typeof window?window:null,Ye=Ge.isPrimitive,Ze=function(){return new Function("return this;")()},Xe=He,ze=We,qe=r(Object.freeze({__proto__:null}));var De=function(r){if(arguments.length){if(!Ye(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ze()}if(Xe)return Xe;if(ze)return ze;if(qe)return qe;throw new Error("unexpected error. Unable to resolve global object.")},Je=De(),Ke=Je.document&&Je.document.childNodes,Qe=Int8Array,rt=Ue,et=Ke,tt=Qe;var nt=function(){return"function"==typeof rt||"object"==typeof tt||"function"==typeof et};var it=function(){return/^\s*function\s*([^(]*)/i},at=it;B(at,"REGEXP",it());var ot=at,ut=h;var ft=function(r){return null!==r&&"object"==typeof r};B(ft,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ut(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ft));var ct=ft;var lt=g,st=ot.REGEXP,vt=function(r){return ct(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pt=function(r){var e,t,n;if(("Object"===(t=lt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=st.exec(n.toString()))return e[1]}return vt(r)?"Buffer":t},gt=pt;var yt=pt;var ht=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gt(r).toLowerCase():e},mt=function(r){return yt(r).toLowerCase()},dt=nt()?mt:ht;var bt=function(r){return"function"===dt(r)},wt=RegExp.prototype.exec;var Et=g,jt=function(r){try{return wt.call(r),!0}catch(r){return!1}},At=t();var Pt=xe,_t=bt,Tt=Rr.isPrimitive,Ot=function(r){return"object"==typeof r&&(r instanceof RegExp||(At?jt(r):"[object RegExp]"===Et(r)))};var Vt=function(r){return Math.abs(r)},St=ce,xt=ae,Ut=ne,kt=function(r,e,t){if(!Tt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Tt(e))e=Pt(e),e=new RegExp(e,"g");else if(!Ot(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Tt(t)&&!_t(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},It=ve,Ft=D.isPrimitive,Nt=Vt,Bt=/e\+(\d)$/,Mt=/e-(\d)$/,Rt=/^(\d+)$/,Lt=/^(\d+)e/,$t=/\.0$/,Gt=/\.0*e/,Ct=/(\..*[^0])0*e/;var Ht=function(r){var e,t,n=parseFloat(r.arg);if(!It(n)){if(!Ft(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Nt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=kt(t,Ct,"$1e"),t=kt(t,Gt,"e"),t=kt(t,$t,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=kt(t,Bt,"e+0$1"),t=kt(t,Mt,"e-0$1"),r.alternate&&(t=kt(t,Rt,"$1."),t=kt(t,Lt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=St(r.specifier)?xt(t):Ut(t)},Wt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Yt=ye;var Zt=Rr.isPrimitive,Xt=ee,zt=Lr,qt=Oe,Dt=Ht,Jt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Wt.exec(r);a;)(t=r.slice(e,Wt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Wt.lastIndex,a=Wt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Kt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Yt(" ",n):Yt(" ",n)+r},Qt=we,rn=String.fromCharCode;var en=function(r){var e,t,n,i,a,o,u,f,c;if(!Zt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Jt(r),o="",u=1,f=0;f<e.length;f++)if(n=e[f],Zt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Xt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,zt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,zt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=qt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!zt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=zt(a)?String(n.arg):rn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Dt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Qt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Kt(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var tn=function(r,e){var t;for(t=0;t<e.length;t++)r.push(e[t]);return r};var nn=function(r,e){var t,n;for(t=r.length,n=0;n<e.length;n++)r[t+n]=e[n];return r.length=t+e.length,r},an=g,on="function"==typeof ArrayBuffer;var un=function(r){return on&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===an(r)},fn=g,cn="function"==typeof Float64Array;var ln="function"==typeof Float64Array?Float64Array:null,sn=function(r){return cn&&r instanceof Float64Array||"[object Float64Array]"===fn(r)},vn=ln;var pn=function(){var r,e;if("function"!=typeof vn)return!1;try{e=new vn([1,3.14,-3.14,NaN]),r=sn(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var gn="function"==typeof Float64Array?Float64Array:void 0,yn=function(){throw new Error("not implemented")},hn=pn()?gn:yn,mn="function"==typeof ArrayBuffer?ArrayBuffer:null,dn=un,bn=hn,wn=mn;var En=function(){var r,e,t;if("function"!=typeof wn)return!1;try{t=new wn(16),(r=dn(t)&&"function"==typeof wn.isView)&&((e=new bn(t))[0]=-3.14,e[1]=NaN,r=r&&wn.isView(e)&&16===t.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){r=!1}return r};var jn="function"==typeof ArrayBuffer?ArrayBuffer:void 0,An=function(){throw new Error("not implemented")},Pn=En()?jn:An,_n=J,Tn=K;var On=function(r){return r===_n||r===Tn},Vn=b;var Sn=function(r){return Vn(r/2)};var xn=function(r){return Sn(r>0?r-1:r+1)},Un=Math.sqrt,kn=g,In="function"==typeof Uint32Array;var Fn="function"==typeof Uint32Array?Uint32Array:null,Nn=function(r){return In&&r instanceof Uint32Array||"[object Uint32Array]"===kn(r)},Bn=Fn;var Mn=function(){var r,e;if("function"!=typeof Bn)return!1;try{e=new Bn(e=[1,3.14,-3.14,4294967296,4294967297]),r=Nn(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Rn="function"==typeof Uint32Array?Uint32Array:void 0,Ln=function(){throw new Error("not implemented")},$n=Mn()?Rn:Ln,Gn=g,Cn="function"==typeof Uint8Array;var Hn="function"==typeof Uint8Array?Uint8Array:null,Wn=function(r){return Cn&&r instanceof Uint8Array||"[object Uint8Array]"===Gn(r)},Yn=Hn;var Zn=function(){var r,e;if("function"!=typeof Yn)return!1;try{e=new Yn(e=[1,3.14,-3.14,256,257]),r=Wn(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Xn="function"==typeof Uint8Array?Uint8Array:void 0,zn=function(){throw new Error("not implemented")},qn=Zn()?Xn:zn,Dn=g,Jn="function"==typeof Uint16Array;var Kn="function"==typeof Uint16Array?Uint16Array:null,Qn=function(r){return Jn&&r instanceof Uint16Array||"[object Uint16Array]"===Dn(r)},ri=Kn;var ei=function(){var r,e;if("function"!=typeof ri)return!1;try{e=new ri(e=[1,3.14,-3.14,65536,65537]),r=Qn(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var ti,ni="function"==typeof Uint16Array?Uint16Array:void 0,ii=function(){throw new Error("not implemented")},ai={uint16:ei()?ni:ii,uint8:qn};(ti=new ai.uint16(1))[0]=4660;var oi,ui,fi=52===new ai.uint8(ti.buffer)[0];!0===fi?(oi=1,ui=0):(oi=0,ui=1);var ci=$n,li={HIGH:oi,LOW:ui},si=new hn(1),vi=new ci(si.buffer),pi=li.HIGH,gi=li.LOW;var yi=function(r,e){return si[0]=e,r[0]=vi[pi],r[1]=vi[gi],r};var hi=function(r,e){return 1===arguments.length?yi([0,0],r):yi(r,e)},mi=$n,di=!0===fi?0:1,bi=new hn(1),wi=new mi(bi.buffer);var Ei=function(r,e){return bi[0]=r,wi[di]=e>>>0,bi[0]},ji=Ei;var Ai=function(r){return 0|r},Pi=$n,_i=!0===fi?1:0,Ti=new hn(1),Oi=new Pi(Ti.buffer);var Vi,Si,xi=function(r){return Ti[0]=r,Oi[_i]};!0===fi?(Vi=1,Si=0):(Vi=0,Si=1);var Ui=$n,ki={HIGH:Vi,LOW:Si},Ii=new hn(1),Fi=new Ui(Ii.buffer),Ni=ki.HIGH,Bi=ki.LOW;var Mi=function(r,e){return Fi[Ni]=r,Fi[Bi]=e,Ii[0]},Ri=Mi,Li=hi,$i=xi,Gi=Ri,Ci=[0,0];var Hi=function(r,e){var t,n;return Li(Ci,r),t=Ci[0],t&=2147483647,n=$i(e),Gi(t|=n&=2147483648,Ci[1])},Wi=xn,Yi=Hi,Zi=K,Xi=J;var zi=function(r,e){return e===Zi?Xi:e===Xi?0:e>0?Wi(e)?r:0:Wi(e)?Yi(Xi,r):Xi},qi=xi;var Di=function(r,e){return(2147483647&qi(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},Ji=Vt,Ki=J;var Qi=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Ji(r)<1==(e===Ki)?0:Ki},ra=$n,ea=!0===fi?1:0,ta=new hn(1),na=new ra(ta.buffer);var ia=function(r,e){return ta[0]=r,na[ea]=e>>>0,ta[0]},aa=ia;var oa=xi,ua=ji,fa=aa,ca=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},la=[1,1.5],sa=[0,.5849624872207642],va=[0,1.350039202129749e-8];var pa=ji,ga=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var ya=On,ha=Lr,ma=Vt;var da=function(r,e){return ha(e)||ya(e)?(r[0]=e,r[1]=0,r):0!==e&&ma(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var ba=xi;var wa=function(r){var e=ba(r);return(e=(2146435072&e)>>>20)-1023|0},Ea=J,ja=K,Aa=Lr,Pa=On,_a=Hi,Ta=function(r,e){return 1===arguments.length?da([0,0],r):da(r,e)},Oa=wa,Va=hi,Sa=Ri,xa=[0,0],Ua=[0,0];var ka=function(r,e){var t,n;return 0===e||0===r||Aa(r)||Pa(r)?r:(Ta(xa,r),e+=xa[1],(e+=Oa(r=xa[0]))<-1074?_a(0,r):e>1023?r<0?ja:Ea:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Va(Ua,r),t=Ua[0],t&=2148532223,n*Sa(t|=e+1023<<20,Ua[1])))};var Ia=xi,Fa=aa,Na=ji,Ba=Ai,Ma=ka,Ra=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var La=Lr,$a=xn,Ga=On,Ca=b,Ha=Un,Wa=Vt,Ya=hi,Za=ji,Xa=Ai,za=K,qa=J,Da=zi,Ja=Di,Ka=Qi,Qa=function(r,e,t){var n,i,a,o,u,f,c,l,s,v,p,g,y,h,m,d,b,w,E,j;return w=0,t<1048576&&(w-=53,t=oa(e*=9007199254740992)),w+=(t>>20)-1023|0,t=1072693248|(E=1048575&t|0),E<=235662?j=0:E<767610?j=1:(j=0,w+=1,t-=1048576),n=524288+(t>>1|536870912),u=(b=1/((e=fa(e,t))+(c=la[j])))*((d=e-c)-(o=ua(i=d*b,0))*(f=fa(0,n+=j<<18))-o*(e-(f-c))),m=(a=i*i)*a*ca(a),f=ua(f=3+(a=o*o)+(m+=u*(o+i)),0),y=(p=-7.028461650952758e-9*(s=ua(s=(d=o*f)+(b=u*f+(m-(f-3-a))*i),0))+.9617966939259756*(b-(s-d))+va[j])-((g=ua(g=(v=.9617967009544373*s)+p+(l=sa[j])+(h=w),0))-h-l-v),r[0]=g,r[1]=y,r},ro=function(r,e){var t,n,i,a,o;return t=(o=1.9259629911266175e-8*(i=e-1)-1.4426950408889634*(i*i*ga(i)))-((n=pa(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r},eo=function(r,e,t){var n,i,a,o,u,f,c,l,s,v;return v=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(n=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),e-=a=Fa(0,n)),f=(u=.6931471805599453*(t-((a=Na(a=t+e,0))-e))+-1.904654299957768e-9*a)-((c=(o=.6931471824645996*a)+u)-o),i=c-(a=c*c)*Ra(a),r=Ia(c=1-(c*i/(i-2)-(f+c*f)-c)),r=Ba(r),c=(r+=l<<20>>>0)>>20<=0?Ma(c,l):Fa(c,r)},to=1e300,no=1e-300,io=[0,0],ao=[0,0];var oo=function r(e,t){var n,i,a,o,u,f,c,l,s,v,p,g,y,h;if(La(e)||La(t))return NaN;if(Ya(io,t),u=io[0],0===io[1]){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return Ha(e);if(-.5===t)return 1/Ha(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return(e*=e)*e;if(Ga(t))return Ka(e,t)}if(Ya(io,e),o=io[0],0===io[1]){if(0===o)return Da(e,t);if(1===e)return 1;if(-1===e&&$a(t))return-1;if(Ga(e))return e===za?r(-0,-t):t<0?0:qa}if(e<0&&!1===Ca(t))return(e-e)/(e-e);if(a=Wa(e),n=2147483647&o|0,i=2147483647&u|0,c=u>>>31|0,f=(f=o>>>31|0)&&$a(t)?-1:1,i>1105199104){if(i>1139802112)return Ja(e,t);if(n<1072693247)return 1===c?f*to*to:f*no*no;if(n>1072693248)return 0===c?f*to*to:f*no*no;p=ro(ao,a)}else p=Qa(ao,a,n);if(v=(t-(l=Za(t,0)))*p[0]+t*p[1],s=l*p[0],Ya(io,g=v+s),y=Xa(io[0]),h=Xa(io[1]),y>=1083179008){if(0!=(y-1083179008|h))return f*to*to;if(v+8008566259537294e-32>g-s)return f*to*to}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|h))return f*no*no;if(v<=g-s)return f*no*no}return f*(g=eo(y,s,v))},uo=oo,fo=Math.ceil;var co=xi,lo=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},so=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))};var vo=function(r){var e,t,n,i,a,o,u,f,c,l;return i=r-1,(1048575&2+(n=co(r)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(c=(n&=1048575)-398458|0,l=440401-n|0,t=(f=(o=(a=i/(2+i))*a)*o)*lo(f),u=o*so(f)+t,(c|=l)>0?a*((e=.5*i*i)+u)-e:a*(u-i))},po=xi,go=aa,yo=ji,ho=hi,mo=Lr,bo=K,wo=vo,Eo=[0,0];var jo=function(r){var e,t,n,i,a;if(mo(r)||r<0)return NaN;if(ho(Eo,r),a=0,(t=Eo[0])<1048576){if(0==(2147483647&t|Eo[1]))return bo;a-=54,t=po(r*=0x40000000000000)}return t>=2146435072?r+r:(a+=(t>>20)-1023|0,r=go(r,(t&=1048575)|1072693248^(i=t+614244&1048576|0)),a+=i>>20|0,n=wo(r),1.6751713164886512e-10*((r-=1)+n)+1.4426950407214463*(r-(e=yo(r,0))+n)+1.4426950407214463*e+a)},Ao=Lr,Po=On,_o=uo,To=m,Oo=fo,Vo=jo,So=J;var xo=Pn,Uo=function(r){var e,t;return Ao(r)||Po(r)||0===r?r:(r<0?(r=-r,e=-1):e=1,-1074===(t=Vo(r))?r:(t=-1===e?To(t):Oo(t))>1023?So:e*_o(2,t))};var ko=h,Io=E,Fo=Tr,No=gr,Bo=en,Mo=tn,Ro=nn,Lo=function(r,e){var t,n,i,a,o,u;if(n=r.length,a=e.length,t=n*r.BYTES_PER_ELEMENT+a*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<t)for(i=new xo(Uo(t+1)),o=new r.constructor(i,0,n+a),u=0;u<n;u++)o[u]=r[u];else o=new r.constructor(r.buffer,r.byteOffset,n+a);for(u=0;u<a;u++)o[n+u]=e[u];return o};var $o=function(r,e){if(!Io(e))throw new TypeError(Bo("invalid argument. Second argument must be an array-like object. Value: `%s`.",e));if(ko(r))return Mo(r,e);if(Fo(r))return Lo(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&No(r.length)&&r.length>=0)return Ro(r,e);throw new TypeError(Bo("invalid argument. First argument must be either an Array, Typed Array, or an array-like object. Value: `%s`.",r))};export{$o as default};
//# sourceMappingURL=mod.js.map
