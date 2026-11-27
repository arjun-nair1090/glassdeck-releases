import{a as Ft}from"./chunk-O2XFH626.js";function fs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Mm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Aa={duration:.5,overwrite:!1,delay:0},kf,yi,Oe,En=1e8,Ae=1/En,Lf=Math.PI*2,zx=Lf/4,kx=0,bm=Math.sqrt,Hx=Math.cos,Gx=Math.sin,ai=function(t){return typeof t=="string"},Xe=function(t){return typeof t=="function"},ps=function(t){return typeof t=="number"},Uc=function(t){return typeof t>"u"},Kn=function(t){return typeof t=="object"},ji=function(t){return t!==!1},Hf=function(){return typeof window<"u"},Tc=function(t){return Xe(t)||ai(t)},Tm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ii=Array.isArray,Vx=/random\([^)]+\)/g,Wx=/,\s*/g,pm=/(?:-?\.?\d|\.)+/gi,Gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vf=/[+-]=-?[.\d]+/,Xx=/[^,'"\[\]\s]+/gi,Yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,Zn,Df,Wf,cn={},Rc={},wm,Em=function(t){return(Rc=oo(t,cn))&&Li},Oc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ra=function(t,e){return!e&&console.warn(t)},Am=function(t,e){return t&&(cn[t]=e)&&Rc&&(Rc[t]=e)||cn},Ca=function(){return 0},qx={suppressEvents:!0,isStart:!0,kill:!1},wc={suppressEvents:!0,kill:!1},Zx={suppressEvents:!0},Xf={},Vs=[],Nf={},Rm,$i={},Ef={},mm=30,Ec=[],Yf="",qf=function(t){var e=t[0],i,n;if(Kn(e)||Xe(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Ec.length;n--&&!Ec[n].targetTest(e););i=Ec[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new $f(t[n],i)))||t.splice(n,1);return t},Ws=function(t){return t._gsap||qf(An(t))[0]._gsap},Zf=function(t,e,i){return(i=t[e])&&Xe(i)?t[e]():Uc(i)&&t.getAttribute&&t.getAttribute(e)||i},Gi=function(t,e){return(t=t.split(",")).forEach(e)||t},Ye=function(t){return Math.round(t*1e5)/1e5||0},ze=function(t){return Math.round(t*1e7)/1e7||0},Tr=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},Jx=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Cc=function(){var t=Vs.length,e=Vs.slice(0),i,n;for(Nf={},Vs.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Jf=function(t){return!!(t._initted||t._startAt||t.add)},Cm=function(t,e,i,n){Vs.length&&!yi&&Cc(),t.render(e,i,n||!!(yi&&e<0&&Jf(t))),Vs.length&&!yi&&Cc()},Pm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Xx).length<2?e:ai(t)?t.trim():t},Im=function(t){return t},hn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Kx=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},oo=function(t,e){for(var i in e)t[i]=e[i];return t},gm=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Kn(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Pc=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Ta=function(t){var e=t.parent||ke,i=t.keyframes?Kx(Ii(t.keyframes)):hn;if(ji(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},$x=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Lm=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},Fc=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},Xs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Qx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Uf=function(t,e,i,n){return t._startAt&&(yi?t._startAt.revert(wc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},jx=function s(t){return!t||t._ts&&s(t.parent)},_m=function(t){return t._repeat?ao(t._tTime,t=t.duration()+t._rDelay)*t:0},ao=function(t,e){var i=Math.floor(t=ze(t/e));return t&&i===t?i-1:i},Ic=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bc=function(t){return t._end=ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ae)||0))},zc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ze(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bc(t),i._dirty||yr(i,t)),t},Dm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Ic(t.rawTime(),e),(!e._dur||Da(0,e.totalDuration(),i)-e._tTime>Ae)&&e.render(i,!0)),yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Ae}},Jn=function(t,e,i,n){return e.parent&&Xs(e),e._start=ze((ps(i)?i:!i&&Lc(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:i||t!==ke?wn(t,i,e):t._time)+e._delay),e._end=ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Lm(t,e,"_first","_last",t._sort?"_start":0),Lc(e)||(t._recent=e),n||Dm(t,e),t._ts<0&&zc(t,t._tTime),t},Nm=function(t,e){return(cn.ScrollTrigger||Oc("scrollTrigger",e))&&cn.ScrollTrigger.create(e,t)},Um=function(t,e,i,n,r){if(td(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!yi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Rm!==Qi.frame)return Vs.push(t),t._lazy=[r,n],1},tv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Lc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ev=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&tv(t)&&!(!t._initted&&Lc(t))||(t._ts<0||t._dp._ts<0)&&!Lc(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Da(0,t._tDur,e),h=ao(l,a),t._yoyo&&h&1&&(o=1-o),h!==ao(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||yi||n||t._zTime===Ae||!e&&t._zTime){if(!t._initted&&Um(t,e,n,i,l))return;for(d=t._zTime,t._zTime=e||(i?Ae:0),i||(i=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Uf(t,e,i,!0),t._onUpdate&&!i&&ln(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xs(t,1),!i&&!yi&&(ln(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},iv=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},lo=function(t,e,i,n){var r=t._repeat,o=ze(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ze(o*(r+1)+t._rDelay*r):o,a>0&&!n&&zc(t,t._tTime=t._tDur*a),t.parent&&Bc(t),i||yr(t.parent,t),t},xm=function(t){return t instanceof Pi?yr(t):lo(t,t._dur)},nv={_start:0,endTime:Ca,totalDuration:Ca},wn=function s(t,e,i){var n=t.labels,r=t._recent||nv,o=t.duration()>=En?r.endTime(!1):t._dur,a,l,c;return ai(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Ii(i)?i[0]:i).totalDuration()),a>1?s(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},wa=function(t,e,i){var n=ps(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ji(l.vars.inherit)&&l.parent;o.immediateRender=ji(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Je(e[0],o,e[r+1])},Ys=function(t,e){return t||t===0?e(t):e},Da=function(t,e,i){return i<t?t:i>e?e:i},Si=function(t,e){return!ai(t)||!(e=Yx.exec(t))?"":e[1]},sv=function(t,e,i){return Ys(i,function(n){return Da(t,e,n)})},Of=[].slice,Om=function(t,e){return t&&Kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Kn(t[0]))&&!t.nodeType&&t!==Zn},rv=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return ai(n)&&!e||Om(n,1)?(r=i).push.apply(r,An(n)):i.push(n)})||i},An=function(t,e,i){return Oe&&!e&&Oe.selector?Oe.selector(t):ai(t)&&!i&&(Df||!co())?Of.call((e||Wf).querySelectorAll(t),0):Ii(t)?rv(t,i):Om(t)?Of.call(t,0):t?[t]:[]},Ff=function(t){return t=An(t)[0]||Ra("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return An(e,i.querySelectorAll?i:i===t?Ra("Invalid scope")||Wf.createElement("div"):t)}},Fm=function(t){return t.sort(function(){return .5-Math.random()})},Bm=function(t){if(Xe(t))return t;var e=Kn(t)?t:{each:t},i=Sr(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,d=n;return ai(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(f,u,m){var _=(m||e).length,p=o[_],g,v,M,y,b,w,x,S,C;if(!p){if(C=e.grid==="auto"?0:(e.grid||[1,En])[1],!C){for(x=-En;x<(x=m[C++].getBoundingClientRect().left)&&C<_;);C<_&&C--}for(p=o[_]=[],g=l?Math.min(C,_)*h-.5:n%C,v=C===En?0:l?_*d/C-.5:n/C|0,x=0,S=En,w=0;w<_;w++)M=w%C-g,y=v-(w/C|0),p[w]=b=c?Math.abs(c==="y"?y:M):bm(M*M+y*y),b>x&&(x=b),b<S&&(S=b);n==="random"&&Fm(p),p.max=x-S,p.min=S,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(C>_?_-1:c?c==="y"?_/C:C:Math.max(C,_/C))||0)*(n==="edges"?-1:1),p.b=_<0?r-_:r,p.u=Si(e.amount||e.each)||0,i=i&&_<0?xv(i):i}return _=(p[f]-p.min)/p.max||0,ze(p.b+(i?i(_):_)*p.v)+p.u}},Bf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=ze(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(ps(i)?0:Si(i))}},zm=function(t,e){var i=Ii(t),n,r;return!i&&Kn(t)&&(n=i=t.radius||En,t.values?(t=An(t.values),(r=!ps(t[0]))&&(n*=n)):t=Bf(t.increment)),Ys(e,i?Xe(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=En,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!n||c<=n?t[h]:o,r||h===o||ps(o)?h:h+Si(o)}:Bf(t))},km=function(t,e,i,n){return Ys(Ii(t)?!e:i===!0?!!(i=0):!n,function(){return Ii(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},ov=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},av=function(t,e){return function(i){return t(parseFloat(i))+(e||Si(i))}},lv=function(t,e,i){return Gm(t,e,0,1,i)},Hm=function(t,e,i){return Ys(i,function(n){return t[~~e(n)]})},cv=function s(t,e,i){var n=e-t;return Ii(t)?Hm(t,s(0,t.length),e):Ys(i,function(r){return(n+(r-t)%n)%n+t})},hv=function s(t,e,i){var n=e-t,r=n*2;return Ii(t)?Hm(t,s(0,t.length-1),e):Ys(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},ho=function(t){return t.replace(Vx,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Wx);return km(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Gm=function(t,e,i,n,r){var o=e-t,a=n-i;return Ys(r,function(l){return i+((l-t)/o*a||0)})},uv=function s(t,e,i,n){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=ai(t),a={},l,c,h,d,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(Ii(t)&&!Ii(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},i=e}else n||(t=oo(Ii(t)?[]:{},t));if(!h){for(l in e)Qf.call(a,t,l,"get",e[l]);r=function(m){return nd(m,a)||(o?t.p:t)}}}return Ys(i,r)},vm=function(t,e,i){var n=t.labels,r=En,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ln=function(t,e,i){var n=t.vars,r=n[e],o=Oe,a=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&Vs.length&&Cc(),a&&(Oe=a),h=l?r.apply(c,l):r.call(c),Oe=o,h},Ma=function(t){return Xs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!yi),t.progress()<1&&ln(t,"onInterrupt"),t},ro,Vm=[],Wm=function(t){if(t)if(t=!t.name&&t.default||t,Hf()||t.headless){var e=t.name,i=Xe(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:Ca,render:nd,add:Qf,kill:Rv,modifier:Av,rawVars:0},o={targetTest:0,get:0,getSetter:kc,aliases:{},register:0};if(co(),t!==n){if($i[e])return;hn(n,hn(Pc(t,r),o)),oo(n.prototype,oo(r,Pc(t,o))),$i[n.prop=e]=n,t.targetTest&&(Ec.push(n),Xf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Am(e,n),t.register&&t.register(Li,n,Vi)}else Vm.push(t)},Ie=255,ba={aqua:[0,Ie,Ie],lime:[0,Ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ie],navy:[0,0,128],white:[Ie,Ie,Ie],olive:[128,128,0],yellow:[Ie,Ie,0],orange:[Ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ie,0,0],pink:[Ie,192,203],cyan:[0,Ie,Ie],transparent:[Ie,Ie,Ie,0]},Af=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ie+.5|0},Xm=function(t,e,i){var n=t?ps(t)?[t>>16,t>>8&Ie,t&Ie]:0:ba.black,r,o,a,l,c,h,d,f,u,m;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ba[t])n=ba[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Ie,n&Ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Ie,t&Ie]}else if(t.substr(0,3)==="hsl"){if(n=m=t.match(pm),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=Af(l+1/3,r,o),n[1]=Af(l,r,o),n[2]=Af(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(Gf),i&&n.length<4&&(n[3]=1),n}else n=t.match(pm)||ba.transparent;n=n.map(Number)}return e&&!m&&(r=n[0]/Ie,o=n[1]/Ie,a=n[2]/Ie,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Ym=function(t){var e=[],i=[],n=-1;return t.split(ds).forEach(function(r){var o=r.match(br)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},ym=function(t,e,i){var n="",r=(t+n).match(ds),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=Xm(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=Ym(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(ds,"1").split(br),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(ds),d=c.length-1;a<d;a++)n+=c[a]+r[a];return n+c[d]},ds=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ba)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),fv=/hsl[a]?\(/,Kf=function(t){var e=t.join(" "),i;if(ds.lastIndex=0,ds.test(e))return i=fv.test(e),t[1]=ym(t[1],i),t[0]=ym(t[0],i,Ym(t[1])),!0},Pa,Qi=(function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,d,f,u,m=function _(p){var g=s()-n,v=p===!0,M,y,b,w;if((g>t||g<0)&&(i+=g-e),n+=g,b=n-i,M=b-o,(M>0||v)&&(w=++d.frame,f=b-d.time*1e3,d.time=b=b/1e3,o+=M+(M>=r?0:r-M),y=1),v||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](b,f,w,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){wm&&(!Df&&Hf()&&(Zn=Df=window,Wf=Zn.document||{},cn.gsap=Li,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(Li.version),Em(Rc||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),Vm.forEach(Wm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Pa=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Pa=0,c=Ca},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var M=g?function(y,b,w,x){p(y,b,w,x),d.remove(M)}:p;return d.remove(p),a[v?"unshift":"push"](M),co(),M},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),co=function(){return!Pa&&Qi.wake()},_e={},dv=/^[\d.\-M][\d.\-,\s]/,pv=/["']/g,mv=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(pv,"").trim():+c,n=l.substr(a+1).trim();return e},gv=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},_v=function(t){var e=(t+"").split("("),i=_e[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[mv(e[1])]:gv(t).split(",").map(Pm)):_e._CE&&dv.test(t)?_e._CE("",t):i},xv=function(t){return function(e){return 1-t(1-e)}},Sr=function(t,e){return t&&(Xe(t)?t:_e[t]||_v(t))||e},wr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return Gi(t,function(a){_e[a]=cn[a]=r,_e[o=a.toLowerCase()]=i;for(var l in r)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=r[l]}),r},qm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rf=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/Lf*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*Gx((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:qm(a);return r=Lf/r,l.config=function(c,h){return s(t,c,h)},l},Cf=function s(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:qm(i);return n.config=function(r){return s(t,r)},n};Gi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;wr(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;wr("Elastic",Rf("in"),Rf("out"),Rf());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(a){return a<e?s*a*a:a<i?s*Math.pow(a-1.5/t,2)+.75:a<n?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};wr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);wr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});wr("Circ",function(s){return-(bm(1-s*s)-1)});wr("Sine",function(s){return s===1?1:-Hx(s*zx)+1});wr("Back",Cf("in"),Cf("out"),Cf());_e.SteppedEase=_e.steps=cn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-Ae;return function(a){return((n*Da(0,o,a)|0)+r)*i}}};Aa.ease=_e["quad.out"];Gi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Yf+=s+","+s+"Params,"});var $f=function(t,e){this.id=kx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Zf,this.set=e?e.getSetter:kc},Ia=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,lo(this,+e.duration,1,1),this.data=e.data,Oe&&(this._ctx=Oe,Oe.data.push(this)),Pa||Qi.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,lo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(co(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zc(this,i),!r._dp||r.parent||Dm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ae||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Cm(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_m(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_m(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ao(this._tTime,r)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-Ae?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Ic(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-Ae?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Da(-Math.abs(this._delay),a,r),n!==!1),Bc(this),Qx(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{co(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Ae,o;if(r)for(this._tTime-=Ae,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+Ae){r=!1;break}o=o._next}this.totalTime(n,r)}return this},t.startTime=function(i){if(arguments.length){this._start=ze(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Jn(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(ji(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ic(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Zx);var n=yi;return yi=i,Jf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yi=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,xm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,xm(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(wn(this,i),ji(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ji(n)),this._dur||(this._zTime=-Ae),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ae,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-Ae)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=Xe(i)?i:Im,l=function(){var h=n.then;n.then=null,r&&r(),Xe(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){Ma(this)},s})();hn(Ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ae,_prom:0,_ps:!1,_rts:1});var Pi=(function(s){Mm(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=ji(i.sortChildren),ke&&Jn(i.parent||ke,fs(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Nm(fs(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return wa(0,arguments,this),this},e.from=function(n,r,o){return wa(1,arguments,this),this},e.fromTo=function(n,r,o,a){return wa(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,Ta(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Je(n,r,wn(this,o),1),this},e.call=function(n,r,o){return Jn(this,Je.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Je(n,o,wn(this,l)),this},e.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,Ta(o).immediateRender=ji(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},e.staggerFromTo=function(n,r,o,a,l,c,h,d){return a.startAt=o,Ta(a).immediateRender=ji(a.immediateRender),this.staggerTo(n,r,a,l,c,h,d)},e.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:ze(n),d=this._zTime<0!=n<0&&(this._initted||!c),f,u,m,_,p,g,v,M,y,b,w,x;if(this!==ke&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),f=h,y=this._start,M=this._ts,g=!M,d&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,o);if(f=ze(h%p),h===l?(_=this._repeat,f=c):(b=ze(h/p),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=ao(this._tTime,p),!a&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,x=1),_!==b&&!this._lock){var S=w&&b&1,C=S===(w&&_&1);if(_<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(x?0:ze(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ln(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=iv(this,ze(a),ze(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!r&&!b&&(ln(this,"onStart"),this._tTime!==h))return this;if(f>=a&&n>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Ae);break}}u=m}else{u=this._last;for(var A=n<0?n:f;u;){if(m=u._prev,(u._act||A<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,r,o||yi&&Jf(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=A?-Ae:Ae);break}}u=m}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Ae)._zTime=f>=a?1:-1,this._ts))return this._start=y,Bc(this),this.render(n,r,o);this._onUpdate&&!r&&ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Xs(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(ln(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(ps(r)||(r=wn(this,r,n)),!(n instanceof Ia)){if(Ii(n))return n.forEach(function(a){return o.add(a,r)}),this;if(ai(n))return this.addLabel(n,r);if(Xe(n))n=Je.delayedCall(0,n);else return this}return this!==n?Jn(this,n,r):this},e.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-En);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Je?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return ai(n)?this.removeLabel(n):Xe(n)?this.killTweensOf(n):(n.parent===this&&Fc(this,n),n===this._recent&&(this._recent=this._last),yr(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ze(Qi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=wn(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var a=Je.delayedCall(0,r||Ca,o);return a.data="isPause",this._hasPause=1,Jn(this,a,wn(this,n))},e.removePause=function(n){var r=this._first;for(n=wn(this,n);r;)r._start===n&&r.data==="isPause"&&Xs(r),r=r._next},e.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Gs!==a[l]&&a[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],a=An(n),l=this._first,c=ps(r),h;l;)l instanceof Je?Jx(l._targets,a)&&(c?(!Gs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,a=wn(o,n),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=Je.to(o,hn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ae,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&lo(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},r));return f?m.render(0):m},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,hn({startAt:{time:wn(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),vm(this,wn(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),vm(this,wn(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ae)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=ze(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return yr(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),yr(this)},e.totalDuration=function(n){var r=0,o=this,a=o._last,l=En,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Jn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ze(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;lo(o,o===ke&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(ke._ts&&(Cm(ke,Ic(n,ke)),Rm=Qi.frame),Qi.frame>=mm){mm+=tn.autoSleep||120;var r=ke._first;if((!r||!r._ts)&&tn.autoSleep&&Qi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Qi.sleep()}}},t})(Ia);hn(Pi.prototype,{_lock:0,_hasPause:0,_forcing:0});var vv=function(t,e,i,n,r,o,a){var l=new Vi(this._pt,t,e,0,1,id,null,r),c=0,h=0,d,f,u,m,_,p,g,v;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=ho(n)),o&&(v=[i,n],o(v,t,e),i=v[0],n=v[1]),f=i.match(wf)||[];d=wf.exec(n);)m=d[0],_=n.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?Tr(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=wf.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(Vf.test(n)||g)&&(l.e=0),this._pt=l,l},Qf=function(t,e,i,n,r,o,a,l,c,h){Xe(n)&&(n=n(r||0,t,o));var d=t[e],f=i!=="get"?i:Xe(d)?c?t[e.indexOf("set")||!Xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Xe(d)?c?Tv:Jm:ed,m;if(ai(n)&&(~n.indexOf("random(")&&(n=ho(n)),n.charAt(1)==="="&&(m=Tr(f,n)+(Si(f)||0),(m||m===0)&&(n=m))),!h||f!==n||zf)return!isNaN(f*n)&&n!==""?(m=new Vi(this._pt,t,e,+f||0,n-(f||0),typeof d=="boolean"?Ev:Km,0,u),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&Oc(e,n),vv.call(this,t,e,f,n,u,l||tn.stringFilter,c))},yv=function(t,e,i,n,r){if(Xe(t)&&(t=Ea(t,r,e,i,n)),!Kn(t)||t.style&&t.nodeType||Ii(t)||Tm(t))return ai(t)?Ea(t,r,e,i,n):t;var o={},a;for(a in t)o[a]=Ea(t[a],r,e,i,n);return o},jf=function(t,e,i,n,r,o){var a,l,c,h;if($i[t]&&(a=new $i[t]).init(r,a.rawVars?e[t]:yv(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new Vi(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==ro))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Gs,zf,td=function s(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,f=n.keyframes,u=n.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,M=t._overwrite==="auto"&&!kf,y=t.timeline,b=n.easeReverse||d,w,x,S,C,A,D,L,G,I,N,F,U,W;if(y&&(!f||!r)&&(r="none"),t._ease=Sr(r,Aa.ease),t._rEase=b&&(Sr(b)||t._ease),t._from=!y&&!!n.runBackwards,t._from&&(t.ratio=1),!y||f&&!n.stagger){if(G=p[0]?Ws(p[0]).harness:0,U=G&&n[G.prop],w=Pc(n,Xf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&m?wc:qx),_._lazy=0),o){if(Xs(t._startAt=Je.set(p,hn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ji(l),startAt:null,delay:0,onUpdate:c&&function(){return ln(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yi||!a&&!u)&&t._startAt.revert(wc),a&&m&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),S=hn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ji(l),immediateRender:a,stagger:0,parent:g},w),U&&(S[G.prop]=U),Xs(t._startAt=Je.set(p,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yi?t._startAt.revert(wc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ae,Ae);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&ji(l)||l&&!m,x=0;x<p.length;x++){if(A=p[x],L=A._gsap||qf(p)[x]._gsap,t._ptLookup[x]=N={},Nf[L.id]&&Vs.length&&Cc(),F=v===p?x:v.indexOf(A),G&&(I=new G).init(A,U||w,t,F,v)!==!1&&(t._pt=C=new Vi(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(X){N[X]=C}),I.priority&&(D=1)),!G||U)for(S in w)$i[S]&&(I=jf(S,w,t,F,A,v))?I.priority&&(D=1):N[S]=C=Qf.call(t,A,S,"get",w[S],F,v,0,n.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),M&&t._pt&&(Gs=t,ke.killTweensOf(A,N,t.globalTime(e)),W=!t.parent,Gs=0),t._pt&&l&&(Nf[L.id]=1)}D&&sd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,f&&e<=0&&y.render(En,!0,!0)},Sv=function(t,e,i,n,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return zf=1,t.vars[e]="+=0",td(t,a),zf=0,l?Ra(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(n||n===0)&&!r?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=Ye(i)+Si(d.e)),d.b&&(d.b=h.s+Si(d.b))},Mv=function(t,e){var i=t[0]?Ws(t[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return e;r=oo({},e);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},bv=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,a;if(Ii(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ea=function(t,e,i,n,r){return Xe(t)?t.call(e,i,n,r):ai(t)&&~t.indexOf("random(")?ho(t):t},Dc=Yf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zm={};Gi(Dc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Zm[s]=1});Dc=Dc.split(",");var Je=(function(s){Mm(t,s);function t(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:Ta(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=n.parent||ke,v=(Ii(i)||Tm(i)?ps(i[0]):"length"in n)?[i]:An(i),M,y,b,w,x,S,C,A;if(a._targets=v.length?qf(v):Ra("GSAP target "+i+" not found. https://gsap.com",!tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||f||Tc(c)||Tc(h)){n=a.vars;var D=n.easeReverse||n.yoyoEase;if(M=a.timeline=new Pi({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),M.kill(),M.parent=M._dp=fs(a),M._start=0,f||Tc(c)||Tc(h)){if(w=v.length,C=f&&Bm(f),Kn(f))for(x in f)~Dc.indexOf(x)&&(A||(A={}),A[x]=f[x]);for(y=0;y<w;y++)b=Pc(n,Zm),b.stagger=0,D&&(b.easeReverse=D),A&&oo(b,A),S=v[y],b.duration=+Ea(c,fs(a),y,S,v),b.delay=(+Ea(h,fs(a),y,S,v)||0)-a._delay,!f&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),M.to(S,b,C?C(y,S,v):0),M._ease=_e.none;M.duration()?c=h=0:a.timeline=0}else if(m){Ta(hn(M.vars.defaults,{ease:"none"})),M._ease=Sr(m.ease||n.ease||"none");var L=0,G,I,N;if(Ii(m))m.forEach(function(F){return M.to(v,F,">")}),M.duration();else{b={};for(x in m)x==="ease"||x==="easeEach"||bv(x,m[x],b,m.easeEach);for(x in b)for(G=b[x].sort(function(F,U){return F.t-U.t}),L=0,y=0;y<G.length;y++)I=G[y],N={ease:I.e,duration:(I.t-(y?G[y-1].t:0))/100*c},N[x]=I.v,M.to(v,N,L),L+=N.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return u===!0&&!kf&&(Gs=fs(a),ke.killTweensOf(v),Gs=0),Jn(g,fs(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!m&&a._start===ze(g._time)&&ji(d)&&jx(fs(a))&&g.data!=="nested")&&(a._tTime=-Ae,a.render(Math.max(0,-h)||0)),p&&Nm(fs(a),p),a}var e=t.prototype;return e.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-Ae&&!h?l:n<Ae?0:n,f,u,m,_,p,g,v,M;if(!c)ev(this,n,r,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+n,r,o);if(f=ze(d%_),d===l?(m=this._repeat,f=c):(p=ze(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=ao(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(ze(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Um(this,h?n:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(ln(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;M&&M.render(n<0?n:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Uf(this,n,r,o),ln(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&ln(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Uf(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Xs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(ln(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,a,l){Pa||Qi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||td(this,c),h=this._ease(c/this._dur),Sv(this,n,r,o,a,h,c,l)?this.resetTo(n,r,o,a,1):(zc(this,0),this.parent||Lm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yi),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Gs&&Gs.vars.overwrite!==!0)._first||Ma(this),this.parent&&o!==this.timeline.totalDuration()&&lo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?An(n):a,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!r||r==="all")&&$x(a,l))return r==="all"&&(this._pt=0),Ma(this);for(d=this._op=this._op||[],r!=="all"&&(ai(r)&&(_={},Gi(r,function(v){return _[v]=1}),r=_),r=Mv(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,m=f,u={}):(u=d[g]=d[g]||{},m=r);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Fc(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Ma(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return wa(1,arguments)},t.delayedCall=function(n,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,r,o){return wa(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return ke.killTweensOf(n,r,o)},t})(Ia);hn(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gi("staggerTo,staggerFrom,staggerFromTo",function(s){Je[s]=function(){var t=new Pi,e=Of.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ed=function(t,e,i){return t[e]=i},Jm=function(t,e,i){return t[e](i)},Tv=function(t,e,i,n){return t[e](n.fp,i)},wv=function(t,e,i){return t.setAttribute(e,i)},kc=function(t,e){return Xe(t[e])?Jm:Uc(t[e])&&t.setAttribute?wv:ed},Km=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ev=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},id=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},nd=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Av=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},Rv=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Fc(this,e,"_pt"):e.dep||(i=1),e=n;return!i},Cv=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},sd=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},Vi=(function(){function s(e,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||Km,this.d=l||this,this.set=c||ed,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Cv,this.m=i,this.mt=r,this.tween=n},s})();Gi(Yf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Xf[s]=1});cn.TweenMax=cn.TweenLite=Je;cn.TimelineLite=cn.TimelineMax=Pi;ke=new Pi({sortChildren:!1,defaults:Aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=Kf;var Mr=[],Ac={},Pv=[],Sm=0,Iv=0,Pf=function(t){return(Ac[t]||Pv).map(function(e){return e()})},La=function(){var t=Date.now(),e=[];t-Sm>2&&(Pf("matchMediaInit"),Mr.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=Zn.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Pf("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Sm=t,Pf("matchMedia"))},$m=(function(){function s(e,i){this.selector=i&&Ff(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Iv++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){Xe(i)&&(r=n,n=i,i=Xe);var o=this,a=function(){var c=Oe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ff(r)),Oe=o,d=n.apply(o,arguments),Xe(d)&&o._r.push(d),Oe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===Xe?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=Oe;Oe=null,i(this),Oe=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Je&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Pi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Je)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=Mr.length;o--;)Mr[o].id===this.id&&Mr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(La):a.removeEventListener("change",La)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},s})(),Lv=(function(){function s(e){this.contexts=[],this.scope=e,Oe&&Oe.data.push(this)}var t=s.prototype;return t.add=function(i,n,r){Kn(i)||(i={matches:i});var o=new $m(0,r||this.scope),a=o.conditions={},l,c,h;Oe&&!o.selector&&(o.selector=Oe.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Zn.matchMedia(i[c]),l&&(Mr.indexOf(o)<0&&Mr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(La):l.addEventListener("change",La),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(d){return o.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),Nc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Wm(n)})},timeline:function(t){return new Pi(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,i,n){ai(t)&&(t=An(t)[0]);var r=Ws(t||{}).get,o=i?Im:Pm;return i==="native"&&(i=""),t&&(e?o(($i[e]&&$i[e].get||r)(t,e,i,n)):function(a,l,c){return o(($i[a]&&$i[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=An(t),t.length>1){var n=t.map(function(h){return Li.quickSetter(h,e,i)}),r=n.length;return function(h){for(var d=r;d--;)n[d](h)}}t=t[0]||{};var o=$i[e],a=Ws(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;ro._pt=0,d.init(t,i?h+i:h,ro,0,[t]),d.render(1,d),ro._pt&&nd(1,ro)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,r=Li.to(t,hn((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Sr(t.ease,Aa.ease)),gm(Aa,t||{})},config:function(t){return gm(tn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!$i[a]&&!cn[a]&&Ra(e+" effect requires "+a+" plugin.")}),Ef[e]=function(a,l,c){return i(An(a),hn(l||{},r),c)},o&&(Pi.prototype[e]=function(a,l,c){return this.add(Ef[e](a,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){_e[t]=Sr(e)},parseEase:function(t,e){return arguments.length?Sr(t,e):_e},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Pi(t),n,r;for(i.smoothChildTiming=ji(t.smoothChildTiming),ke.remove(i),i._dp=0,i._time=i._tTime=ke._time,n=ke._first;n;)r=n._next,(e||!(!n._dur&&n instanceof Je&&n.vars.onComplete===n._targets[0]))&&Jn(i,n,n._start-n._delay),n=r;return Jn(ke,i,0),i},context:function(t,e){return t?new $m(t,e):Oe},matchMedia:function(t){return new Lv(t)},matchMediaRefresh:function(){return Mr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||La()},addEventListener:function(t,e){var i=Ac[t]||(Ac[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ac[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:cv,wrapYoyo:hv,distribute:Bm,random:km,snap:zm,normalize:lv,getUnit:Si,clamp:sv,splitColor:Xm,toArray:An,selector:Ff,mapRange:Gm,pipe:ov,unitize:av,interpolate:uv,shuffle:Fm},install:Em,effects:Ef,ticker:Qi,updateRoot:Pi.updateRoot,plugins:$i,globalTimeline:ke,core:{PropTween:Vi,globals:Am,Tween:Je,Timeline:Pi,Animation:Ia,getCache:Ws,_removeLinkedListItem:Fc,reverting:function(){return yi},context:function(t){return t&&Oe&&(Oe.data.push(t),t._ctx=Oe),Oe},suppressOverwrites:function(t){return kf=t}}};Gi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Nc[s]=Je[s]});Qi.add(Pi.updateRoot);ro=Nc.to({},{duration:0});var Dv=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Nv=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Dv(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},If=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(ai(r)&&(l={},Gi(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Nv(a,r)}}}},Li=Nc.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)yi?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},If("roundProps",Bf),If("modifiers"),If("snap",zm))||Nc;Je.version=Pi.version=Li.version="3.15.1";wm=1;Hf()&&co();var Uv=_e.Power0,Ov=_e.Power1,Fv=_e.Power2,Bv=_e.Power3,zv=_e.Power4,kv=_e.Linear,Hv=_e.Quad,Gv=_e.Cubic,Vv=_e.Quart,Wv=_e.Quint,Xv=_e.Strong,Yv=_e.Elastic,qv=_e.Back,Zv=_e.SteppedEase,Jv=_e.Bounce,Kv=_e.Sine,$v=_e.Expo,Qv=_e.Circ;var Qm,qs,fo,hd,Cr,jv,jm,ud,ty=function(){return typeof window<"u"},gs={},Rr=180/Math.PI,po=Math.PI/180,uo=Math.atan2,tg=1e8,fd=/([A-Z])/g,ey=/(left|right|width|margin|padding|x)/i,iy=/[\s,\(]\S/,$n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},od=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ny=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ry=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},oy=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},lg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ay=function(t,e,i){return t.style[e]=i},ly=function(t,e,i){return t.style.setProperty(e,i)},cy=function(t,e,i){return t._gsap[e]=i},hy=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},uy=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},fy=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},He="transform",en=He+"Origin",dy=function s(t,e){var i=this,n=this.target,r=n.style,o=n._gsap;if(t in gs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=$n[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=ms(n,a)}):this.tfm[t]=o.x?o[t]:ms(n,t),t===en&&(this.tfm.zOrigin=o.zOrigin);else return $n.transform.split(",").forEach(function(a){return s.call(i,a,e)});if(this.props.indexOf(He)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(en,e,"")),t=He}(r||e)&&this.props.push(t,e,r[t])},hg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},py=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(fd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ud(),(!r||!r.isStart)&&!i[He]&&(hg(i),n.zOrigin&&i[en]&&(i[en]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ug=function(t,e){var i={target:t,props:[],revert:py,save:dy};return t._gsap||Li.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},fg,ad=function(t,e){var i=qs.createElementNS?qs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qs.createElement(t);return i&&i.style?i:qs.createElement(t)},un=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(fd,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,mo(e)||e,1)||""},eg="O,Moz,ms,Ms,Webkit".split(","),mo=function(t,e,i){var n=e||Cr,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(eg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?eg[o]:"")+t},ld=function(){ty()&&window.document&&(Qm=window,qs=Qm.document,fo=qs.documentElement,Cr=ad("div")||{style:{}},jv=ad("div"),He=mo(He),en=He+"Origin",Cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fg=!!mo("perspective"),ud=Li.core.reverting,hd=1)},ig=function(t){var e=t.ownerSVGElement,i=ad("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),r;n.style.display="block",i.appendChild(n),fo.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),fo.removeChild(i),r},ng=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},dg=function(t){var e,i;try{e=t.getBBox()}catch{e=ig(t),i=1}return e&&(e.width||e.height)||i||(e=ig(t)),e&&!e.width&&!e.x&&!e.y?{x:+ng(t,["x","cx","x1"])||0,y:+ng(t,["y","cy","y1"])||0,width:0,height:0}:e},pg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&dg(t))},Js=function(t,e){if(e){var i=t.style,n;e in gs&&e!==en&&(e=He),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(fd,"-$1").toLowerCase())):i.removeAttribute(e)}},Zs=function(t,e,i,n,r,o){var a=new Vi(t._pt,e,i,0,1,o?cg:lg);return t._pt=a,a.b=n,a.e=r,t._props.push(i),a},sg={deg:1,rad:1,turn:1},my={grid:1,flex:1},Ks=function s(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=Cr.style,l=ey.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=n==="px",u=n==="%",m,_,p,g;if(n===o||!r||sg[n]||sg[o])return r;if(o!=="px"&&!f&&(r=s(t,e,i,"px")),g=t.getCTM&&pg(t),(u||o==="%")&&(gs[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Ye(u?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(f?o:n),_=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===qs||!_.appendChild)&&(_=qs.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Qi.time&&!p.uncache)return Ye(r/p.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+n,m=t[h],v?t.style[e]=v:Js(t,e)}else(u||o==="%")&&!my[un(_,"display")]&&(a.position=un(t,"position")),_===t&&(a.position="static"),_.appendChild(Cr),m=Cr[h],_.removeChild(Cr),a.position="absolute";return l&&u&&(p=Ws(_),p.time=Qi.time,p.width=_[h]),Ye(f?m*r/d:m&&r?d/m*r:0)},ms=function(t,e,i,n){var r;return hd||ld(),e in $n&&e!=="transform"&&(e=$n[e],~e.indexOf(",")&&(e=e.split(",")[0])),gs[e]&&e!=="transform"?(r=Oa(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Gc(un(t,en))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Hc[e]&&Hc[e](t,e,i)||un(t,e)||Zf(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Ks(t,e,r,i)+i:r},gy=function(t,e,i,n){if(!i||i==="none"){var r=mo(e,t,1),o=r&&un(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=un(t,"borderTopColor"))}var a=new Vi(this._pt,t.style,e,0,1,id),l=0,c=0,h,d,f,u,m,_,p,g,v,M,y,b;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=un(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=t.style[e],t.style[e]=n,n=un(t,e)||n,_?t.style[e]=_:Js(t,e)),h=[i,n],Kf(h),i=h[0],n=h[1],f=i.match(br)||[],b=n.match(br)||[],b.length){for(;d=br.exec(n);)p=d[0],v=n.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=Tr(u,p)+y),g=parseFloat(p),M=p.substr((g+"").length),l=br.lastIndex-M.length,M||(M=M||tn.units[e]||y,l===n.length&&(n+=M,a.e+=M)),y!==M&&(u=Ks(t,e,_,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?cg:lg;return Vf.test(n)&&(a.e=0),this._pt=a,a},rg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_y=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=rg[i]||i,e[1]=rg[n]||n,e.join(" ")},xy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],gs[a]&&(l=1,a=a==="transformOrigin"?en:He),Js(i,a);l&&(Js(i,He),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Oa(i,1),o.uncache=1,hg(n)))}},Hc={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new Vi(t._pt,e,i,0,0,xy);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},Ua=[1,0,0,1,0,0],mg={},gg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},og=function(t){var e=un(t,He);return gg(e)?Ua:e.substr(7).match(Gf).map(Ye)},dd=function(t,e){var i=t._gsap||Ws(t),n=t.style,r=og(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ua:r):(r===Ua&&!t.offsetParent&&t!==fo&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,fo.appendChild(t)),r=og(t),l?n.display=l:Js(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):fo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},cd=function(t,e,i,n,r,o){var a=t._gsap,l=r||dd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],M=e.split(" "),y=parseFloat(M[0])||0,b=parseFloat(M[1])||0,w,x,S,C;i?l!==Ua&&(x=u*p-m*_)&&(S=y*(p/x)+b*(-_/x)+(_*v-p*g)/x,C=y*(-m/x)+b*(u/x)-(u*v-m*g)/x,y=S,b=C):(w=dg(t),y=w.x+(~M[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(M[1]||M[0]).indexOf("%")?b/100*w.height:b)),n||n!==!1&&a.smooth?(g=y-c,v=b-h,a.xOffset=d+(g*u+v*_)-g,a.yOffset=f+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[en]="0px 0px",o&&(Zs(o,a,"xOrigin",c,y),Zs(o,a,"yOrigin",h,b),Zs(o,a,"xOffset",d,a.xOffset),Zs(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+b)},Oa=function(t,e){var i=t._gsap||new $f(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=un(t,en)||"0",h,d,f,u,m,_,p,g,v,M,y,b,w,x,S,C,A,D,L,G,I,N,F,U,W,X,R,V,ot,Mt,Y,at;return h=d=f=_=p=g=v=M=y=0,u=m=1,i.svg=!!(t.getCTM&&pg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[He]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[He]!=="none"?l[He]:"")),n.scale=n.rotate=n.translate="none"),x=dd(t,i.svg),i.svg&&(i.uncache?(W=t.getBBox(),c=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),cd(t,U||c,!!U||i.originIsAbsolute,i.smooth!==!1,x)),b=i.xOrigin||0,w=i.yOrigin||0,x!==Ua&&(D=x[0],L=x[1],G=x[2],I=x[3],h=N=x[4],d=F=x[5],x.length===6?(u=Math.sqrt(D*D+L*L),m=Math.sqrt(I*I+G*G),_=D||L?uo(L,D)*Rr:0,v=G||I?uo(G,I)*Rr+_:0,v&&(m*=Math.abs(Math.cos(v*po))),i.svg&&(h-=b-(b*D+w*G),d-=w-(b*L+w*I))):(at=x[6],Mt=x[7],R=x[8],V=x[9],ot=x[10],Y=x[11],h=x[12],d=x[13],f=x[14],S=uo(at,ot),p=S*Rr,S&&(C=Math.cos(-S),A=Math.sin(-S),U=N*C+R*A,W=F*C+V*A,X=at*C+ot*A,R=N*-A+R*C,V=F*-A+V*C,ot=at*-A+ot*C,Y=Mt*-A+Y*C,N=U,F=W,at=X),S=uo(-G,ot),g=S*Rr,S&&(C=Math.cos(-S),A=Math.sin(-S),U=D*C-R*A,W=L*C-V*A,X=G*C-ot*A,Y=I*A+Y*C,D=U,L=W,G=X),S=uo(L,D),_=S*Rr,S&&(C=Math.cos(S),A=Math.sin(S),U=D*C+L*A,W=N*C+F*A,L=L*C-D*A,F=F*C-N*A,D=U,N=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=Ye(Math.sqrt(D*D+L*L+G*G)),m=Ye(Math.sqrt(F*F+at*at)),S=uo(N,F),v=Math.abs(S)>2e-4?S*Rr:0,y=Y?1/(Y<0?-Y:Y):0),i.svg&&(U=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!gg(un(t,He)),U&&t.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Ye(u),i.scaleY=Ye(m),i.rotation=Ye(_)+a,i.rotationX=Ye(p)+a,i.rotationY=Ye(g)+a,i.skewX=v+a,i.skewY=M+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[en]=Gc(c)),i.xOffset=i.yOffset=0,i.force3D=tn.force3D,i.renderTransform=i.svg?yy:fg?_g:vy,i.uncache=0,i},Gc=function(t){return(t=t.split(" "))[0]+" "+t[1]},rd=function(t,e,i){var n=Si(e);return Ye(parseFloat(e)+parseFloat(Ks(t,"x",i+"px",n)))+n},vy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_g(t,e)},Er="0deg",Na="0px",Ar=") ",_g=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,f=i.skewX,u=i.skewY,m=i.scaleX,_=i.scaleY,p=i.transformPerspective,g=i.force3D,v=i.target,M=i.zOrigin,y="",b=g==="auto"&&t&&t!==1||g===!0;if(M&&(d!==Er||h!==Er)){var w=parseFloat(h)*po,x=Math.sin(w),S=Math.cos(w),C;w=parseFloat(d)*po,C=Math.cos(w),o=rd(v,o,x*C*-M),a=rd(v,a,-Math.sin(w)*-M),l=rd(v,l,S*C*-M+M)}p!==Na&&(y+="perspective("+p+Ar),(n||r)&&(y+="translate("+n+"%, "+r+"%) "),(b||o!==Na||a!==Na||l!==Na)&&(y+=l!==Na||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ar),c!==Er&&(y+="rotate("+c+Ar),h!==Er&&(y+="rotateY("+h+Ar),d!==Er&&(y+="rotateX("+d+Ar),(f!==Er||u!==Er)&&(y+="skew("+f+", "+u+Ar),(m!==1||_!==1)&&(y+="scale("+m+", "+_+Ar),v.style[He]=y||"translate(0, 0)"},yy=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,f=i.scaleY,u=i.target,m=i.xOrigin,_=i.yOrigin,p=i.xOffset,g=i.yOffset,v=i.forceCSS,M=parseFloat(o),y=parseFloat(a),b,w,x,S,C;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=po,c*=po,b=Math.cos(l)*d,w=Math.sin(l)*d,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=po,C=Math.tan(c-h),C=Math.sqrt(1+C*C),x*=C,S*=C,h&&(C=Math.tan(h),C=Math.sqrt(1+C*C),b*=C,w*=C)),b=Ye(b),w=Ye(w),x=Ye(x),S=Ye(S)):(b=d,S=f,w=x=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=Ks(u,"x",o,"px"),y=Ks(u,"y",a,"px")),(m||_||p||g)&&(M=Ye(M+m-(m*b+_*x)+p),y=Ye(y+_-(m*w+_*S)+g)),(n||r)&&(C=u.getBBox(),M=Ye(M+n/100*C.width),y=Ye(y+r/100*C.height)),C="matrix("+b+","+w+","+x+","+S+","+M+","+y+")",u.setAttribute("transform",C),v&&(u.style[He]=C)},Sy=function(t,e,i,n,r){var o=360,a=ai(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Rr:1),c=l-n,h=n+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*tg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*tg)%o-~~(c/o)*o)),t._pt=f=new Vi(t._pt,e,i,n,c,ny),f.e=h,f.u="deg",t._props.push(i),f},ag=function(t,e){for(var i in e)t[i]=e[i];return t},My=function(t,e,i){var n=ag({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,f,u,m;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[He]=e,a=Oa(i,1),Js(i,He),i.setAttribute("transform",c)):(c=getComputedStyle(i)[He],o[He]=e,a=Oa(i,1),o[He]=c);for(l in gs)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=Si(c),m=Si(h),d=u!==m?Ks(i,l,c,m):parseFloat(c),f=parseFloat(h),t._pt=new Vi(t._pt,a,l,d,f-d,od),t._pt.u=m||0,t._props.push(l));ag(a,n)};Gi("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(a){return t<2?s+a:"border"+a+s});Hc[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(m){return ms(a,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var pd={name:"css",register:ld,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,a=t.style,l=i.vars.startAt,c,h,d,f,u,m,_,p,g,v,M,y,b,w,x,S,C;hd||ld(),this.styles=this.styles||ug(t),S=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(h=e[_],!($i[_]&&jf(_,e,i,n,t,r)))){if(u=typeof h,m=Hc[_],u==="function"&&(h=h.call(i,n,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=ho(h)),m)m(this,t,_,h,i)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ds.lastIndex=0,ds.test(c)||(p=Si(c),g=Si(h),g?p!==g&&(c=Ks(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,n,r,0,0,_),o.push(_),S.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,t,r):l[_],ai(c)&&~c.indexOf("random(")&&(c=ho(c)),Si(c+"")||c==="auto"||(c+=tn.units[_]||Si(ms(t,_))||""),(c+"").charAt(1)==="="&&(c=ms(t,_))):c=ms(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in $n&&(_==="autoAlpha"&&(f===1&&ms(t,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),Zs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=$n[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in gs,M){if(this.styles.save(_),C=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=un(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=un(t,"perspective"),A?t.style.perspective=A:Js(t,"perspective")}d=parseFloat(h)}if(y||(b=t._gsap,b.renderTransform&&!e.parseTransform||Oa(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,y=this._pt=new Vi(this._pt,a,He,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new Vi(this._pt,b,"scaleY",b.scaleY,(v?Tr(b.scaleY,v+d):d)-b.scaleY||0,od),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(en,0,a[en]),h=_y(h),b.svg?cd(t,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&Zs(this,b,"zOrigin",b.zOrigin,g),Zs(this,a,_,Gc(c),Gc(h)));continue}else if(_==="svgOrigin"){cd(t,h,1,w,0,this);continue}else if(_ in mg){Sy(this,b,_,f,v?Tr(f,v+h):h);continue}else if(_==="smoothOrigin"){Zs(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){My(this,h,t);continue}}else _ in a||(_=mo(_)||_);if(M||(d||d===0)&&(f||f===0)&&!iy.test(h)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),g=Si(h)||(_ in tn.units?tn.units[_]:p),p!==g&&(f=Ks(t,_,c,g)),this._pt=new Vi(this._pt,M?b:a,_,f,(v?Tr(f,v+d):d)-f,!M&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?oy:od),this._pt.u=g||0,M&&C!==h?(this._pt.b=c,this._pt.e=C,this._pt.r=ry):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=sy);else if(_ in a)gy.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,n,r);else if(_!=="parseTransform"){Oc(_,h);continue}M||(_ in a?S.push(_,0,a[_]):typeof t[_]=="function"?S.push(_,2,t[_]()):S.push(_,1,c||t[_])),o.push(_)}}x&&sd(this)},render:function(t,e){if(e.tween._time||!ud())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:ms,aliases:$n,getSetter:function(t,e,i){var n=$n[e];return n&&n.indexOf(",")<0&&(e=n),e in gs&&e!==en&&(t._gsap.x||ms(t,"x"))?i&&jm===i?e==="scale"?hy:cy:(jm=i||{})&&(e==="scale"?uy:fy):t.style&&!Uc(t.style[e])?ay:~e.indexOf("-")?ly:kc(t,e)},core:{_removeProperty:Js,_getMatrix:dd}};Li.utils.checkPrefix=mo;Li.core.getStyleSaver=ug;(function(s,t,e,i){var n=Gi(s+","+t+","+e,function(r){gs[r]=1});Gi(t,function(r){tn.units[r]="deg",mg[r]=1}),$n[n[13]]=s+","+t,Gi(i,function(r){var o=r.split(":");$n[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){tn.units[s]="px"});Li.registerPlugin(pd);var we=Li.registerPlugin(pd)||Li,NE=we.core.Tween;function xg(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function by(s,t,e){return t&&xg(s.prototype,t),e&&xg(s,e),s}var Mi,Xc,Ty,nn,$s,Qs,_o,yg,Pr,xo,Sg,_s,kn,Mg,bg=function(){return Mi||typeof window<"u"&&(Mi=window.gsap)&&Mi.registerPlugin&&Mi},Tg=1,go=[],oe=[],Hn=[],Ba=Date.now,md=function(t,e){return e},wy=function(){var t=xo.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,oe),n.push.apply(n,Hn),oe=i,Hn=n,md=function(o,a){return e[o](a)}},vs=function(t,e){return~Hn.indexOf(t)&&Hn[Hn.indexOf(t)+1][e]},za=function(t){return!!~Sg.indexOf(t)},Xi=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:n!==!1,capture:!!r})},Wi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Vc="scrollLeft",Wc="scrollTop",gd=function(){return _s&&_s.isPressed||oe.cache++},Yc=function(t,e){var i=function n(r){if(r||r===0){Tg&&nn.history.scrollRestoration!=="manual"&&(nn.history.scrollRestoration="manual");var o=_s&&_s.isPressed;r=n.v=Math.round(r)||(_s&&_s.iOS?1:0),t(r),n.cacheID=oe.cache,o&&md("ss",r)}else(e||oe.cache!==n.cacheID||md("ref"))&&(n.cacheID=oe.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},Di={s:Vc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yc(function(s){return arguments.length?nn.scrollTo(s,ei.sc()):nn.pageXOffset||$s[Vc]||Qs[Vc]||_o[Vc]||0})},ei={s:Wc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Di,sc:Yc(function(s){return arguments.length?nn.scrollTo(Di.sc(),s):nn.pageYOffset||$s[Wc]||Qs[Wc]||_o[Wc]||0})},Yi=function(t,e){return(e&&e._ctx&&e._ctx.selector||Mi.utils.toArray)(t)[0]||(typeof t=="string"&&Mi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ey=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},xs=function(t,e){var i=e.s,n=e.sc;za(t)&&(t=$s.scrollingElement||Qs);var r=oe.indexOf(t),o=n===ei.sc?1:2;!~r&&(r=oe.push(t)-1),oe[r+o]||Xi(t,"scroll",gd);var a=oe[r+o],l=a||(oe[r+o]=Yc(vs(t,i),!0)||(za(t)?n:Yc(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=Mi.getProperty(t,"scrollBehavior")==="smooth"),l},qc=function(t,e,i){var n=t,r=t,o=Ba(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Ba();_||p-o>l?(r=n,n=m,a=o,o=p):i?n+=m:n=r+(m-r)/(p-a)*(o-a)},d=function(){r=n=i?0:n,a=o=0},f=function(m){var _=a,p=r,g=Ba();return(m||m===0)&&m!==n&&h(m),o===a||g-a>c?0:(n+(i?p:-p))/((i?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},Fa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},vg=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},wg=function(){xo=Mi.core.globals().ScrollTrigger,xo&&xo.core&&wy()},Eg=function(t){return Mi=t||bg(),!Xc&&Mi&&typeof document<"u"&&document.body&&(nn=window,$s=document,Qs=$s.documentElement,_o=$s.body,Sg=[nn,$s,Qs,_o],Ty=Mi.utils.clamp,Mg=Mi.core.context||function(){},Pr="onpointerenter"in _o?"pointer":"mouse",yg=qe.isTouch=nn.matchMedia&&nn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in nn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,kn=qe.eventTypes=("ontouchstart"in Qs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Tg=0},500),Xc=1),xo||wg(),Xc};Di.op=ei;oe.cache=0;var qe=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(i){Xc||Eg(Mi)||console.warn("Please gsap.registerPlugin(Observer)"),xo||wg();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,f=i.onStopDelay,u=i.ignore,m=i.wheelSpeed,_=i.event,p=i.onDragStart,g=i.onDragEnd,v=i.onDrag,M=i.onPress,y=i.onRelease,b=i.onRight,w=i.onLeft,x=i.onUp,S=i.onDown,C=i.onChangeX,A=i.onChangeY,D=i.onChange,L=i.onToggleX,G=i.onToggleY,I=i.onHover,N=i.onHoverEnd,F=i.onMove,U=i.ignoreCheck,W=i.isNormalizer,X=i.onGestureStart,R=i.onGestureEnd,V=i.onWheel,ot=i.onEnable,Mt=i.onDisable,Y=i.onClick,at=i.scrollSpeed,_t=i.capture,At=i.allowClicks,dt=i.lockAxis,Nt=i.onLockAxis;this.target=a=Yi(a)||Qs,this.vars=i,u&&(u=Mi.utils.toArray(u)),n=n||1e-9,r=r||0,m=m||1,at=at||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(nn.getComputedStyle(_o).lineHeight)||22);var me,Ut,lt,ht,$,ct,ut,k=this,xt=0,Xt=0,Ot=i.passive||!h&&i.passive!==!1,Bt=xs(a,Di),Kt=xs(a,ei),se=Bt(),B=Kt(),re=~o.indexOf("touch")&&!~o.indexOf("pointer")&&kn[0]==="pointerdown",Jt=za(a),$t=a.ownerDocument||$s,yt=[0,0,0],ge=[0,0,0],Ht=0,Yt=function(){return Ht=Ba()},P=function(wt,rt){return(k.event=wt)&&u&&Ey(wt.target,u)||rt&&re&&wt.pointerType!=="touch"||U&&U(wt,rt)},T=function(){k._vx.reset(),k._vy.reset(),Ut.pause(),d&&d(k)},Z=function(){var wt=k.deltaX=vg(yt),rt=k.deltaY=vg(ge),it=Math.abs(wt)>=n,Rt=Math.abs(rt)>=n;D&&(it||Rt)&&D(k,wt,rt,yt,ge),it&&(b&&k.deltaX>0&&b(k),w&&k.deltaX<0&&w(k),C&&C(k),L&&k.deltaX<0!=xt<0&&L(k),xt=k.deltaX,yt[0]=yt[1]=yt[2]=0),Rt&&(S&&k.deltaY>0&&S(k),x&&k.deltaY<0&&x(k),A&&A(k),G&&k.deltaY<0!=Xt<0&&G(k),Xt=k.deltaY,ge[0]=ge[1]=ge[2]=0),(ht||lt)&&(F&&F(k),lt&&(p&&lt===1&&p(k),v&&v(k),lt=0),ht=!1),ct&&!(ct=!1)&&Nt&&Nt(k),$&&(V(k),$=!1),me=0},ft=function(wt,rt,it){yt[it]+=wt,ge[it]+=rt,k._vx.update(wt),k._vy.update(rt),c?me||(me=requestAnimationFrame(Z)):Z()},st=function(wt,rt){dt&&!ut&&(k.axis=ut=Math.abs(wt)>Math.abs(rt)?"x":"y",ct=!0),ut!=="y"&&(yt[2]+=wt,k._vx.update(wt,!0)),ut!=="x"&&(ge[2]+=rt,k._vy.update(rt,!0)),c?me||(me=requestAnimationFrame(Z)):Z()},St=function(wt){if(!P(wt,1)){wt=Fa(wt,h);var rt=wt.clientX,it=wt.clientY,Rt=rt-k.x,nt=it-k.y,Lt=k.isDragging;k.x=rt,k.y=it,(Lt||(Rt||nt)&&(Math.abs(k.startX-rt)>=r||Math.abs(k.startY-it)>=r))&&(lt||(lt=Lt?2:1),Lt||(k.isDragging=!0),st(Rt,nt))}},Et=k.onPress=function(pt){P(pt,1)||pt&&pt.button||(k.axis=ut=null,Ut.pause(),k.isPressed=!0,pt=Fa(pt),xt=Xt=0,k.startX=k.x=pt.clientX,k.startY=k.y=pt.clientY,k._vx.reset(),k._vy.reset(),Xi(W?a:$t,kn[1],St,Ot,!0),k.deltaX=k.deltaY=0,M&&M(k))},J=k.onRelease=function(pt){if(!P(pt,1)){Wi(W?a:$t,kn[1],St,!0);var wt=!isNaN(k.y-k.startY),rt=k.isDragging,it=rt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Rt=Fa(pt);!it&&wt&&(k._vx.reset(),k._vy.reset(),h&&At&&Mi.delayedCall(.08,function(){if(Ba()-Ht>300&&!pt.defaultPrevented){if(pt.target.click)pt.target.click();else if($t.createEvent){var nt=$t.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,nn,1,Rt.screenX,Rt.screenY,Rt.clientX,Rt.clientY,!1,!1,!1,!1,0,null),pt.target.dispatchEvent(nt)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,d&&rt&&!W&&Ut.restart(!0),lt&&Z(),g&&rt&&g(k),y&&y(k,it)}},et=function(wt){return wt.touches&&wt.touches.length>1&&(k.isGesturing=!0)&&X(wt,k.isDragging)},vt=function(){return(k.isGesturing=!1)||R(k)},O=function(wt){if(!P(wt)){var rt=Bt(),it=Kt();ft((rt-se)*at,(it-B)*at,1),se=rt,B=it,d&&Ut.restart(!0)}},tt=function(wt){if(!P(wt)){wt=Fa(wt,h),V&&($=!0);var rt=(wt.deltaMode===1?l:wt.deltaMode===2?nn.innerHeight:1)*m;ft(wt.deltaX*rt,wt.deltaY*rt,0),d&&!W&&Ut.restart(!0)}},j=function(wt){if(!P(wt)){var rt=wt.clientX,it=wt.clientY,Rt=rt-k.x,nt=it-k.y;k.x=rt,k.y=it,ht=!0,d&&Ut.restart(!0),(Rt||nt)&&st(Rt,nt)}},bt=function(wt){k.event=wt,I(k)},mt=function(wt){k.event=wt,N(k)},Tt=function(wt){return P(wt)||Fa(wt,h)&&Y(k)};Ut=k._dc=Mi.delayedCall(f||.25,T).pause(),k.deltaX=k.deltaY=0,k._vx=qc(0,50,!0),k._vy=qc(0,50,!0),k.scrollX=Bt,k.scrollY=Kt,k.isDragging=k.isGesturing=k.isPressed=!1,Mg(this),k.enable=function(pt){return k.isEnabled||(Xi(Jt?$t:a,"scroll",gd),o.indexOf("scroll")>=0&&Xi(Jt?$t:a,"scroll",O,Ot,_t),o.indexOf("wheel")>=0&&Xi(a,"wheel",tt,Ot,_t),(o.indexOf("touch")>=0&&yg||o.indexOf("pointer")>=0)&&(Xi(a,kn[0],Et,Ot,_t),Xi($t,kn[2],J),Xi($t,kn[3],J),At&&Xi(a,"click",Yt,!0,!0),Y&&Xi(a,"click",Tt),X&&Xi($t,"gesturestart",et),R&&Xi($t,"gestureend",vt),I&&Xi(a,Pr+"enter",bt),N&&Xi(a,Pr+"leave",mt),F&&Xi(a,Pr+"move",j)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=ht=lt=!1,k._vx.reset(),k._vy.reset(),se=Bt(),B=Kt(),pt&&pt.type&&Et(pt),ot&&ot(k)),k},k.disable=function(){k.isEnabled&&(go.filter(function(pt){return pt!==k&&za(pt.target)}).length||Wi(Jt?$t:a,"scroll",gd),k.isPressed&&(k._vx.reset(),k._vy.reset(),Wi(W?a:$t,kn[1],St,!0)),Wi(Jt?$t:a,"scroll",O,_t),Wi(a,"wheel",tt,_t),Wi(a,kn[0],Et,_t),Wi($t,kn[2],J),Wi($t,kn[3],J),Wi(a,"click",Yt,!0),Wi(a,"click",Tt),Wi($t,"gesturestart",et),Wi($t,"gestureend",vt),Wi(a,Pr+"enter",bt),Wi(a,Pr+"leave",mt),Wi(a,Pr+"move",j),k.isEnabled=k.isPressed=k.isDragging=!1,Mt&&Mt(k))},k.kill=k.revert=function(){k.disable();var pt=go.indexOf(k);pt>=0&&go.splice(pt,1),_s===k&&(_s=0)},go.push(k),W&&za(a)&&(_s=k),k.enable(_)},by(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();qe.version="3.15.1";qe.create=function(s){return new qe(s)};qe.register=Eg;qe.getAll=function(){return go.slice()};qe.getById=function(s){return go.filter(function(t){return t.vars.id===s})[0]};bg()&&Mi.registerPlugin(qe);var zt,Mo,ce,Ee,pn,be,Pd,ch,Qa,Ya,Ha,Zc,Ni,fh,bd,Zi,Ag,Rg,bo,Wg,_d,Xg,qi,Td,Yg,qg,js,wd,Id,To,Ld,tr,Ed,xd,Jc=1,Ui=Date.now,vd=Ui(),Pn=0,Ga=0,Cg=function(t,e,i){var n=dn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},Pg=function(t,e){return e&&(!dn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Ay=function s(){return Ga&&requestAnimationFrame(s)},Ig=function(){return fh=1},Lg=function(){return fh=0},Qn=function(t){return t},Va=function(t){return Math.round(t*1e5)/1e5||0},Zg=function(){return typeof window<"u"},Jg=function(){return zt||Zg()&&(zt=window.gsap)&&zt.registerPlugin&&zt},Or=function(t){return!!~Pd.indexOf(t)},Kg=function(t){return(t==="Height"?Ld:ce["inner"+t])||pn["client"+t]||be["client"+t]},$g=function(t){return vs(t,"getBoundingClientRect")||(Or(t)?function(){return lh.width=ce.innerWidth,lh.height=Ld,lh}:function(){return ys(t)})},Ry=function(t,e,i){var n=i.d,r=i.d2,o=i.a;return(o=vs(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?Kg(r):t["client"+r])||0}},Cy=function(t,e){return!e||~Hn.indexOf(t)?$g(t):function(){return lh}},jn=function(t,e){var i=e.s,n=e.d2,r=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=vs(t,i))?o()-$g(t)()[r]:Or(t)?(pn[i]||be[i])-Kg(n):t[i]-t["offset"+n])},Kc=function(t,e){for(var i=0;i<bo.length;i+=3)(!e||~e.indexOf(bo[i+1]))&&t(bo[i],bo[i+1],bo[i+2])},dn=function(t){return typeof t=="string"},Oi=function(t){return typeof t=="function"},Wa=function(t){return typeof t=="number"},Ir=function(t){return typeof t=="object"},ka=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},vo=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},yo=Math.abs,Qg="left",jg="top",Dd="right",Nd="bottom",Dr="width",Nr="height",qa="Right",Za="Left",Ja="Top",Ka="Bottom",ii="padding",Rn="margin",Eo="Width",Ud="Height",li="px",Cn=function(t){return ce.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Py=function(t){var e=Cn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Dg=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},ys=function(t,e){var i=e&&Cn(t)[bd]!=="matrix(1, 0, 0, 1, 0, 0)"&&zt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},hh=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},t0=function(t){var e=[],i=t.labels,n=t.duration(),r;for(r in i)e.push(i[r]/n);return e},Iy=function(t){return function(e){return zt.utils.snap(t0(t),e)}},Od=function(t){var e=zt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return e(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=e(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:e(r<0?n-t:n+t)}},Ly=function(t){return function(e,i){return Od(t0(t))(e,i.direction)}},$c=function(t,e,i,n){return i.split(",").forEach(function(r){return t(e,r,n)})},gi=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:!n,capture:!!r})},mi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Qc=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},Ng={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jc={toggleActions:"play",anticipatePin:0},uh={top:0,left:0,center:.5,bottom:1,right:1},sh=function(t,e){if(dn(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in uh?uh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},th=function(t,e,i,n,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,m=Ee.createElement("div"),_=Or(i)||vs(i,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?be:i.tagName==="IFRAME"?i.contentDocument.body:i,v=t.indexOf("start")!==-1,M=v?c:h,y="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(n===ei?Dd:Nd)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+n.op.d2],rh(m,0,n,v),m},rh=function(t,e,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+Eo]=1,r["border"+a+Eo]=0,r[i.p]=e+"px",zt.set(t,r)},le=[],Ad={},ja,Ug=function(){return Ui()-Pn>34&&(ja||(ja=requestAnimationFrame(Ss)))},So=function(){(!qi||!qi.isPressed||qi.startX>be.clientWidth)&&(oe.cache++,qi?ja||(ja=requestAnimationFrame(Ss)):Ss(),Pn||Br("scrollStart"),Pn=Ui())},yd=function(){qg=ce.innerWidth,Yg=ce.innerHeight},Xa=function(t){oe.cache++,(t===!0||!Ni&&!Xg&&!Ee.fullscreenElement&&!Ee.webkitFullscreenElement&&(!Td||qg!==ce.innerWidth||Math.abs(ce.innerHeight-Yg)>ce.innerHeight*.25))&&ch.restart(!0)},Fr={},Dy=[],e0=function s(){return mi(ne,"scrollEnd",s)||Lr(!0)},Br=function(t){return Fr[t]&&Fr[t].map(function(e){return e()})||Dy},fn=[],i0=function(t){for(var e=0;e<fn.length;e+=5)(!t||fn[e+4]&&fn[e+4].query===t)&&(fn[e].style.cssText=fn[e+1],fn[e].getBBox&&fn[e].setAttribute("transform",fn[e+2]||""),fn[e+3].uncache=1)},n0=function(){oe.cache++,oe.forEach(function(t){return Oi(t)&&(t.rec=t())})},Fd=function(t,e){var i;for(Zi=0;Zi<le.length;Zi++)i=le[Zi],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));tr=!0,e&&i0(e),e||Br("revert")},s0=function(t,e){oe.cache++,(e||!Ji)&&oe.forEach(function(i){return Oi(i)&&i.cacheID++&&(i.rec=0)}),dn(t)&&(Id=t,ce.history.scrollRestoration!==t&&(ce.history.scrollRestoration=t))},Ji,Ur=0,Og,Ny=function(){if(Og!==Ur){var t=Og=Ur;requestAnimationFrame(function(){return t===Ur&&Lr(!0)})}},r0=function(){be.appendChild(To),Ld=!qi&&To.offsetHeight||ce.innerHeight,be.removeChild(To)},Fg=function(t){return Qa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Lr=function(t,e){if(pn=Ee.documentElement,be=Ee.body,Pd=[ce,Ee,pn,be],Pn&&!t&&!tr){gi(ne,"scrollEnd",e0);return}r0(),Ji=ne.isRefreshing=!0,tr||n0();var i=Br("refreshInit");Wg&&ne.sort(),e||Fd(),oe.forEach(function(n){Oi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),le.slice(0).forEach(function(n){return n.refresh()}),tr=!1,le.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),Ed=1,Fg(!0),le.forEach(function(n){var r=jn(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),Fg(!1),Ed=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),oe.forEach(function(n){Oi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),s0(Id,1),ch.pause(),Ur++,Ji=2,Ss(2),le.forEach(function(n){return Oi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Ji=ne.isRefreshing=!1,Br("refresh")},Rd=0,oh=1,$a,Ss=function(t){if(t===2||!Ji&&!tr){ne.isUpdating=!0,$a&&$a.update(0);var e=le.length,i=Ui(),n=i-vd>=50,r=e&&le[0].scroll();if(oh=Rd>r?-1:1,Ji||(Rd=r),n&&(Pn&&!fh&&i-Pn>200&&(Pn=0,Br("scrollEnd")),Ha=vd,vd=i),oh<0){for(Zi=e;Zi-- >0;)le[Zi]&&le[Zi].update(0,n);oh=1}else for(Zi=0;Zi<e;Zi++)le[Zi]&&le[Zi].update(0,n);ne.isUpdating=!1}ja=0},Cd=[Qg,jg,Nd,Dd,Rn+Ka,Rn+qa,Rn+Ja,Rn+Za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ah=Cd.concat([Dr,Nr,"boxSizing","max"+Eo,"max"+Ud,"position",Rn,ii,ii+Ja,ii+qa,ii+Ka,ii+Za]),Uy=function(t,e,i){wo(i);var n=t._gsap;if(n.spacerIsNative)wo(n.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Sd=function(t,e,i,n){if(!t._gsap.swappedIn){for(var r=Cd.length,o=e.style,a=t.style,l;r--;)l=Cd[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Nd]=a[Dd]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Dr]=hh(t,Di)+li,o[Nr]=hh(t,ei)+li,o[ii]=a[Rn]=a[jg]=a[Qg]="0",wo(n),a[Dr]=a["max"+Eo]=i[Dr],a[Nr]=a["max"+Ud]=i[Nr],a[ii]=i[ii],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Oy=/([A-Z])/g,wo=function(t){if(t){var e=t.t.style,i=t.length,n=0,r,o;for((t.t._gsap||zt.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],r=t[n],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Oy,"-$1").toLowerCase())}},eh=function(t){for(var e=ah.length,i=t.style,n=[],r=0;r<e;r++)n.push(ah[r],i[ah[r]]);return n.t=t,n},Fy=function(t,e,i){for(var n=[],r=t.length,o=i?8:0,a;o<r;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},lh={left:0,top:0},Bg=function(t,e,i,n,r,o,a,l,c,h,d,f,u,m){Oi(t)&&(t=t(l)),dn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?sh("0"+t.substr(3),i):0));var _=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Wa(t))u&&(t=zt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&rh(a,i,n,!0);else{Oi(e)&&(e=e(l));var M=(t||"0").split(" "),y,b,w,x;v=Yi(e,l)||be,y=ys(v)||{},(!y||!y.left&&!y.top)&&Cn(v).display==="none"&&(x=v.style.display,v.style.display="block",y=ys(v),x?v.style.display=x:v.style.removeProperty("display")),b=sh(M[0],y[n.d]),w=sh(M[1]||"0",i),t=y[n.p]-c[n.p]-h+b+r-w,a&&rh(a,w,n,i-w<20||a._isStart&&w>20),i-=i-w}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var S=t+i,C=o._isStart;p="scroll"+n.d2,rh(o,S,n,C&&S>20||!C&&(d?Math.max(be[p],pn[p]):o.parentNode[p])<=S+1),d&&(c=ys(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+li))}return u&&v&&(p=ys(v),u.seek(f),g=ys(v),u._caScrollDist=p[n.p]-g[n.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},By=/(webkit|moz|length|cssText|inset)/i,zg=function(t,e,i,n){if(t.parentNode!==e){var r=t.style,o,a;if(e===be){t._stOrig=r.cssText,a=Cn(t);for(o in a)!+o&&!By.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=t._stOrig;zt.core.getCache(t).uncache=1,e.appendChild(t)}},o0=function(t,e,i){var n=e,r=n;return function(o){var a=Math.round(t());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},ih=function(t,e,i){var n={};n[e.p]="+="+i,zt.set(t,n)},kg=function(t,e){var i=xs(t,e),n="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,m={};c=c||i();var _=o0(i,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[n]=a,l.inherit=!1,l.modifiers=m,m[n]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&Ss()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=zt.to(t,l),f};return t[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},gi(t,"wheel",i.wheelHandler),ne.isTouch&&gi(t,"touchmove",i.wheelHandler),r},ne=(function(){function s(e,i){Mo||s.register(zt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wd(this),this.init(e,i)}var t=s.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ga){this.update=this.refresh=this.kill=Qn;return}i=Dg(dn(i)||Wa(i)||i.nodeType?{trigger:i}:i,jc);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,M=r.once,y=r.snap,b=r.pinReparent,w=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Di:ei,D=!d&&d!==0,L=Yi(i.scroller||ce),G=zt.core.getCache(L),I=Or(L),N=("pinType"in i?i.pinType:vs(L,"pinType")||I&&"fixed")==="fixed",F=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],U=D&&i.toggleActions.split(" "),W="markers"in i?i.markers:jc.markers,X=I?0:parseFloat(Cn(L)["border"+A.p2+Eo])||0,R=this,V=i.onRefreshInit&&function(){return i.onRefreshInit(R)},ot=Ry(L,I,A),Mt=Cy(L,I),Y=0,at=0,_t=0,At=xs(L,A),dt,Nt,me,Ut,lt,ht,$,ct,ut,k,xt,Xt,Ot,Bt,Kt,se,B,re,Jt,$t,yt,ge,Ht,Yt,P,T,Z,ft,st,St,Et,J,et,vt,O,tt,j,bt,mt;if(R._startClamp=R._endClamp=!1,R._dir=A,p*=45,R.scroller=L,R.scroll=x?x.time.bind(x):At,Ut=At(),tr&&At.rec==null&&(At.rec=Ut),R.vars=i,n=n||i.animation,"refreshPriority"in i&&(Wg=1,i.refreshPriority===-9999&&($a=R)),G.tweenScroll=G.tweenScroll||{top:kg(L,ei),left:kg(L,Di)},R.tweenTo=dt=G.tweenScroll[A.p],R.scrubDuration=function(it){et=Wa(it)&&it,et?J?J.duration(it):J=zt.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return g&&g(R)}}):(J&&J.progress(1).kill(),J=0)},n&&(n.vars.lazy=!1,n._initted&&!R.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),R.animation=n.pause(),n.scrollTrigger=R,R.scrubDuration(d),St=0,l||(l=n.vars.id)),y&&((!Ir(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in be.style&&zt.set(I?[be,pn]:L,{scrollBehavior:"auto"}),oe.forEach(function(it){return Oi(it)&&it.target===(I?Ee.scrollingElement||pn:L)&&(it.smooth=!1)}),me=Oi(y.snapTo)?y.snapTo:y.snapTo==="labels"?Iy(n):y.snapTo==="labelsDirectional"?Ly(n):y.directional!==!1?function(it,Rt){return Od(y.snapTo)(it,Ui()-at<500?0:Rt.direction)}:zt.utils.snap(y.snapTo),vt=y.duration||{min:.1,max:2},vt=Ir(vt)?Ya(vt.min,vt.max):Ya(vt,vt),O=zt.delayedCall(y.delay||et/2||.1,function(){var it=At(),Rt=Ui()-at<500,nt=dt.tween;if((Rt||Math.abs(R.getVelocity())<10)&&!nt&&!fh&&Y!==it){var Lt=(it-ht)/Bt,fe=n&&!D?n.totalProgress():Lt,ee=Rt?0:(fe-Et)/(Ui()-Ha)*1e3||0,Ne=zt.utils.clamp(-Lt,1-Lt,yo(ee/2)*ee/.185),Qe=Lt+(y.inertia===!1?0:Ne),Ue,Re,Me=y,si=Me.onStart,Ce=Me.onInterrupt,Ai=Me.onComplete;if(Ue=me(Qe,R),Wa(Ue)||(Ue=Qe),Re=Math.max(0,Math.round(ht+Ue*Bt)),it<=$&&it>=ht&&Re!==it){if(nt&&!nt._initted&&nt.data<=yo(Re-it))return;y.inertia===!1&&(Ne=Ue-Lt),dt(Re,{duration:vt(yo(Math.max(yo(Qe-fe),yo(Ue-fe))*.185/ee/.05||0)),ease:y.ease||"power3",data:yo(Re-it),onInterrupt:function(){return O.restart(!0)&&Ce&&vo(R,Ce)},onComplete:function(){R.update(),Y=At(),n&&!D&&(J?J.resetTo("totalProgress",Ue,n._tTime/n._tDur):n.progress(Ue)),St=Et=n&&!D?n.totalProgress():R.progress,v&&v(R),Ai&&vo(R,Ai)}},it,Ne*Bt,Re-it-Ne*Bt),si&&vo(R,si,dt.tween)}}else R.isActive&&Y!==it&&O.restart(!0)}).pause()),l&&(Ad[l]=R),f=R.trigger=Yi(f||u!==!0&&u),mt=f&&f._gsap&&f._gsap.stRevert,mt&&(mt=mt(R)),u=u===!0?f:Yi(u),dn(a)&&(a={targets:f,className:a}),u&&(m===!1||m===Rn||(m=!m&&u.parentNode&&u.parentNode.style&&Cn(u.parentNode).display==="flex"?!1:ii),R.pin=u,Nt=zt.core.getCache(u),Nt.spacer?Kt=Nt.pinState:(w&&(w=Yi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Nt.spacerIsNative=!!w,w&&(Nt.spacerState=eh(w))),Nt.spacer=re=w||Ee.createElement("div"),re.classList.add("pin-spacer"),l&&re.classList.add("pin-spacer-"+l),Nt.pinState=Kt=eh(u)),i.force3D!==!1&&zt.set(u,{force3D:!0}),R.spacer=re=Nt.spacer,st=Cn(u),Yt=st[m+A.os2],$t=zt.getProperty(u),yt=zt.quickSetter(u,A.a,li),Sd(u,re,st),B=eh(u)),W){Xt=Ir(W)?Dg(W,Ng):Ng,k=th("scroller-start",l,L,A,Xt,0),xt=th("scroller-end",l,L,A,Xt,0,k),Jt=k["offset"+A.op.d2];var Tt=Yi(vs(L,"content")||L);ct=this.markerStart=th("start",l,Tt,A,Xt,Jt,0,x),ut=this.markerEnd=th("end",l,Tt,A,Xt,Jt,0,x),x&&(bt=zt.quickSetter([ct,ut],A.a,li)),!N&&!(Hn.length&&vs(L,"fixedMarkers")===!0)&&(Py(I?be:L),zt.set([k,xt],{force3D:!0}),T=zt.quickSetter(k,A.a,li),ft=zt.quickSetter(xt,A.a,li))}if(x){var pt=x.vars.onUpdate,wt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),pt&&pt.apply(x,wt||[])})}if(R.previous=function(){return le[le.indexOf(R)-1]},R.next=function(){return le[le.indexOf(R)+1]},R.revert=function(it,Rt){if(!Rt)return R.kill(!0);var nt=it!==!1||!R.enabled,Lt=Ni;nt!==R.isReverted&&(nt&&(tt=Math.max(At(),R.scroll.rec||0),_t=R.progress,j=n&&n.progress()),ct&&[ct,ut,k,xt].forEach(function(fe){return fe.style.display=nt?"none":"block"}),nt&&(Ni=R,R.update(nt)),u&&(!b||!R.isActive)&&(nt?Uy(u,re,Kt):Sd(u,re,Cn(u),P)),nt||R.update(nt),Ni=Lt,R.isReverted=nt)},R.refresh=function(it,Rt,nt,Lt){if(!((Ni||!R.enabled)&&!Rt)){if(u&&it&&Pn){gi(s,"scrollEnd",e0);return}!Ji&&V&&V(R),Ni=R,dt.tween&&!nt&&(dt.tween.kill(),dt.tween=0),J&&J.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(q){return q.vars.immediateRender&&q.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var fe=ot(),ee=Mt(),Ne=x?x.duration():jn(L,A),Qe=Bt<=.01||!Bt,Ue=0,Re=Lt||0,Me=Ir(nt)?nt.end:i.end,si=i.endTrigger||f,Ce=Ir(nt)?nt.start:i.start||(i.start===0||!f?0:u?"0 0":"0 100%"),Ai=R.pinnedContainer=i.pinnedContainer&&Yi(i.pinnedContainer,R),on=f&&Math.max(0,le.indexOf(R))||0,Ve=on,je,ri,an,so,oi,We,Tn,Sa,Mc,ks,E,z,Q;for(W&&Ir(nt)&&(z=zt.getProperty(k,A.p),Q=zt.getProperty(xt,A.p));Ve-- >0;)We=le[Ve],We.end||We.refresh(0,1)||(Ni=R),Tn=We.pin,Tn&&(Tn===f||Tn===u||Tn===Ai)&&!We.isReverted&&(ks||(ks=[]),ks.unshift(We),We.revert(!0,!0)),We!==le[Ve]&&(on--,Ve--);for(Oi(Ce)&&(Ce=Ce(R)),Ce=Cg(Ce,"start",R),ht=Bg(Ce,f,fe,A,At(),ct,k,R,ee,X,N,Ne,x,R._startClamp&&"_startClamp")||(u?-.001:0),Oi(Me)&&(Me=Me(R)),dn(Me)&&!Me.indexOf("+=")&&(~Me.indexOf(" ")?Me=(dn(Ce)?Ce.split(" ")[0]:"")+Me:(Ue=sh(Me.substr(2),fe),Me=dn(Ce)?Ce:(x?zt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,ht):ht)+Ue,si=f)),Me=Cg(Me,"end",R),$=Math.max(ht,Bg(Me||(si?"100% 0":Ne),si,fe,A,At()+Ue,ut,xt,R,ee,X,N,Ne,x,R._endClamp&&"_endClamp"))||-.001,Ue=0,Ve=on;Ve--;)We=le[Ve]||{},Tn=We.pin,Tn&&We.start-We._pinPush<=ht&&!x&&We.end>0&&(je=We.end-(R._startClamp?Math.max(0,We.start):We.start),(Tn===f&&We.start-We._pinPush<ht||Tn===Ai)&&isNaN(Ce)&&(Ue+=je*(1-We.progress)),Tn===u&&(Re+=je));if(ht+=Ue,$+=Ue,R._startClamp&&(R._startClamp+=Ue),R._endClamp&&!Ji&&(R._endClamp=$||-.001,$=Math.min($,jn(L,A))),Bt=$-ht||(ht-=.01)&&.001,Qe&&(_t=zt.utils.clamp(0,1,zt.utils.normalize(ht,$,tt))),R._pinPush=Re,ct&&Ue&&(je={},je[A.a]="+="+Ue,Ai&&(je[A.p]="-="+At()),zt.set([ct,ut],je)),u&&!(Ed&&R.end>=jn(L,A)))je=Cn(u),so=A===ei,an=At(),ge=parseFloat($t(A.a))+Re,!Ne&&$>1&&(E=(I?Ee.scrollingElement||pn:L).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},I&&Cn(be)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),Sd(u,re,je),B=eh(u),ri=ys(u,!0),Sa=N&&xs(L,so?Di:ei)(),m?(P=[m+A.os2,Bt+Re+li],P.t=re,Ve=m===ii?hh(u,A)+Bt+Re:0,Ve&&(P.push(A.d,Ve+li),re.style.flexBasis!=="auto"&&(re.style.flexBasis=Ve+li)),wo(P),Ai&&le.forEach(function(q){q.pin===Ai&&q.vars.pinSpacing!==!1&&(q._subPinOffset=!0)}),N&&At(tt)):(Ve=hh(u,A),Ve&&re.style.flexBasis!=="auto"&&(re.style.flexBasis=Ve+li)),N&&(oi={top:ri.top+(so?an-ht:Sa)+li,left:ri.left+(so?Sa:an-ht)+li,boxSizing:"border-box",position:"fixed"},oi[Dr]=oi["max"+Eo]=Math.ceil(ri.width)+li,oi[Nr]=oi["max"+Ud]=Math.ceil(ri.height)+li,oi[Rn]=oi[Rn+Ja]=oi[Rn+qa]=oi[Rn+Ka]=oi[Rn+Za]="0",oi[ii]=je[ii],oi[ii+Ja]=je[ii+Ja],oi[ii+qa]=je[ii+qa],oi[ii+Ka]=je[ii+Ka],oi[ii+Za]=je[ii+Za],se=Fy(Kt,oi,b),Ji&&At(0)),n?(Mc=n._initted,_d(1),n.render(n.duration(),!0,!0),Ht=$t(A.a)-ge+Bt+Re,Z=Math.abs(Bt-Ht)>1,N&&Z&&se.splice(se.length-2,2),n.render(0,!0,!0),Mc||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),_d(0)):Ht=Bt,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(f&&At()&&!x)for(ri=f.parentNode;ri&&ri!==be;)ri._pinOffset&&(ht-=ri._pinOffset,$-=ri._pinOffset),ri=ri.parentNode;ks&&ks.forEach(function(q){return q.revert(!1,!0)}),R.start=ht,R.end=$,Ut=lt=Ji?tt:At(),!x&&!Ji&&!tr&&(Ut<tt&&At(tt),R.scroll.rec=0),R.revert(!1,!0),at=Ui(),O&&(Y=-1,O.restart(!0)),Ni=0,n&&D&&(n._initted||j)&&n.progress()!==j&&n.progress(j||0,!0).render(n.time(),!0,!0),(Qe||_t!==R.progress||x||_||n&&!n._initted)&&(n&&!D&&(n._initted||_t||n.vars.immediateRender!==!1)&&n.totalProgress(x&&ht<-.001&&!_t?zt.utils.normalize(ht,$,0):_t,!0),R.progress=Qe||(Ut-ht)/Bt===_t?0:_t),u&&m&&(re._pinOffset=Math.round(R.progress*Ht)),J&&J.invalidate(),isNaN(z)||(z-=zt.getProperty(k,A.p),Q-=zt.getProperty(xt,A.p),ih(k,A,z),ih(ct,A,z-(Lt||0)),ih(xt,A,Q),ih(ut,A,Q-(Lt||0))),Qe&&!Ji&&R.update(),h&&!Ji&&!Ot&&(Ot=!0,h(R),Ot=!1)}},R.getVelocity=function(){return(At()-lt)/(Ui()-Ha)*1e3||0},R.endAnimation=function(){ka(R.callbackAnimation),n&&(J?J.progress(1):n.paused()?D||ka(n,R.direction<0,1):ka(n,n.reversed()))},R.labelToScroll=function(it){return n&&n.labels&&(ht||R.refresh()||ht)+n.labels[it]/n.duration()*Bt||0},R.getTrailing=function(it){var Rt=le.indexOf(R),nt=R.direction>0?le.slice(0,Rt).reverse():le.slice(Rt+1);return(dn(it)?nt.filter(function(Lt){return Lt.vars.preventOverlaps===it}):nt).filter(function(Lt){return R.direction>0?Lt.end<=ht:Lt.start>=$})},R.update=function(it,Rt,nt){if(!(x&&!nt&&!it)){var Lt=Ji===!0?tt:R.scroll(),fe=it?0:(Lt-ht)/Bt,ee=fe<0?0:fe>1?1:fe||0,Ne=R.progress,Qe,Ue,Re,Me,si,Ce,Ai,on;if(Rt&&(lt=Ut,Ut=x?At():Lt,y&&(Et=St,St=n&&!D?n.totalProgress():ee)),p&&u&&!Ni&&!Jc&&Pn&&(!ee&&ht<Lt+(Lt-lt)/(Ui()-Ha)*p?ee=1e-4:ee===1&&$>Lt+(Lt-lt)/(Ui()-Ha)*p&&(ee=.9999)),ee!==Ne&&R.enabled){if(Qe=R.isActive=!!ee&&ee<1,Ue=!!Ne&&Ne<1,Ce=Qe!==Ue,si=Ce||!!ee!=!!Ne,R.direction=ee>Ne?1:-1,R.progress=ee,si&&!Ni&&(Re=ee&&!Ne?0:ee===1?1:Ne===1?2:3,D&&(Me=!Ce&&U[Re+1]!=="none"&&U[Re+1]||U[Re],on=n&&(Me==="complete"||Me==="reset"||Me in n))),C&&(Ce||on)&&(on||d||!n)&&(Oi(C)?C(R):R.getTrailing(C).forEach(function(an){return an.endAnimation()})),D||(J&&!Ni&&!Jc?(J._dp._time-J._start!==J._time&&J.render(J._dp._time-J._start),J.resetTo?J.resetTo("totalProgress",ee,n._tTime/n._tDur):(J.vars.totalProgress=ee,J.invalidate().restart())):n&&n.totalProgress(ee,!!(Ni&&(at||it)))),u){if(it&&m&&(re.style[m+A.os2]=Yt),!N)yt(Va(ge+Ht*ee));else if(si){if(Ai=!it&&ee>Ne&&$+1>Lt&&Lt+1>=jn(L,A),b)if(!it&&(Qe||Ai)){var Ve=ys(u,!0),je=Lt-ht;zg(u,be,Ve.top+(A===ei?je:0)+li,Ve.left+(A===ei?0:je)+li)}else zg(u,re);wo(Qe||Ai?se:B),Z&&ee<1&&Qe||yt(ge+(ee===1&&!Ai?Ht:0))}}y&&!dt.tween&&!Ni&&!Jc&&O.restart(!0),a&&(Ce||M&&ee&&(ee<1||!xd))&&Qa(a.targets).forEach(function(an){return an.classList[Qe||M?"add":"remove"](a.className)}),o&&!D&&!it&&o(R),si&&!Ni?(D&&(on&&(Me==="complete"?n.pause().totalProgress(1):Me==="reset"?n.restart(!0).pause():Me==="restart"?n.restart(!0):n[Me]()),o&&o(R)),(Ce||!xd)&&(c&&Ce&&vo(R,c),F[Re]&&vo(R,F[Re]),M&&(ee===1?R.kill(!1,1):F[Re]=0),Ce||(Re=ee===1?1:3,F[Re]&&vo(R,F[Re]))),S&&!Qe&&Math.abs(R.getVelocity())>(Wa(S)?S:2500)&&(ka(R.callbackAnimation),J?J.progress(1):ka(n,Me==="reverse"?1:!ee,1))):D&&o&&!Ni&&o(R)}if(ft){var ri=x?Lt/x.duration()*(x._caScrollDist||0):Lt;T(ri+(k._isFlipped?1:0)),ft(ri)}bt&&bt(-Lt/x.duration()*(x._caScrollDist||0))}},R.enable=function(it,Rt){R.enabled||(R.enabled=!0,gi(L,"resize",Xa),I||gi(L,"scroll",So),V&&gi(s,"refreshInit",V),it!==!1&&(R.progress=_t=0,Ut=lt=Y=At()),Rt!==!1&&R.refresh())},R.getTween=function(it){return it&&dt?dt.tween:J},R.setPositions=function(it,Rt,nt,Lt){if(x){var fe=x.scrollTrigger,ee=x.duration(),Ne=fe.end-fe.start;it=fe.start+Ne*it/ee,Rt=fe.start+Ne*Rt/ee}R.refresh(!1,!1,{start:Pg(it,nt&&!!R._startClamp),end:Pg(Rt,nt&&!!R._endClamp)},Lt),R.update()},R.adjustPinSpacing=function(it){if(P&&it){var Rt=P.indexOf(A.d)+1;P[Rt]=parseFloat(P[Rt])+it+li,P[1]=parseFloat(P[1])+it+li,wo(P)}},R.disable=function(it,Rt){if(it!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Rt||J&&J.pause(),tt=0,Nt&&(Nt.uncache=1),V&&mi(s,"refreshInit",V),O&&(O.pause(),dt.tween&&dt.tween.kill()&&(dt.tween=0)),!I)){for(var nt=le.length;nt--;)if(le[nt].scroller===L&&le[nt]!==R)return;mi(L,"resize",Xa),I||mi(L,"scroll",So)}},R.kill=function(it,Rt){R.disable(it,Rt),J&&!Rt&&J.kill(),l&&delete Ad[l];var nt=le.indexOf(R);nt>=0&&le.splice(nt,1),nt===Zi&&oh>0&&Zi--,nt=0,le.forEach(function(Lt){return Lt.scroller===R.scroller&&(nt=1)}),nt||Ji||tr||(R.scroll.rec=0),n&&(n.scrollTrigger=null,it&&n.revert({kill:!1}),Rt||n.kill()),ct&&[ct,ut,k,xt].forEach(function(Lt){return Lt.parentNode&&Lt.parentNode.removeChild(Lt)}),$a===R&&($a=0),u&&(Nt&&(Nt.uncache=1),nt=0,le.forEach(function(Lt){return Lt.pin===u&&nt++}),nt||(Nt.spacer=0)),i.onKill&&i.onKill(R)},le.push(R),R.enable(!1,!1),mt&&mt(R),n&&n.add&&!Bt){var rt=R.update;R.update=function(){R.update=rt,oe.cache++,ht||$||R.refresh()},zt.delayedCall(.01,R.update),Bt=.01,ht=$=0}else R.refresh();u&&Ny()},s.register=function(i){return Mo||(zt=i||Jg(),Zg()&&window.document&&s.enable(),Mo=Ga),Mo},s.defaults=function(i){if(i)for(var n in i)jc[n]=i[n];return jc},s.disable=function(i,n){Ga=0,le.forEach(function(o){return o[n?"kill":"disable"](i)}),mi(ce,"wheel",So),mi(Ee,"scroll",So),clearInterval(Zc),mi(Ee,"touchcancel",Qn),mi(be,"touchstart",Qn),$c(mi,Ee,"pointerdown,touchstart,mousedown",Ig),$c(mi,Ee,"pointerup,touchend,mouseup",Lg),ch.kill(),Kc(mi);for(var r=0;r<oe.length;r+=3)Qc(mi,oe[r],oe[r+1]),Qc(mi,oe[r],oe[r+2])},s.enable=function(){if(ce=window,Ee=document,pn=Ee.documentElement,be=Ee.body,zt){if(Qa=zt.utils.toArray,Ya=zt.utils.clamp,wd=zt.core.context||Qn,_d=zt.core.suppressOverwrites||Qn,Id=ce.history.scrollRestoration||"auto",Rd=ce.pageYOffset||0,zt.core.globals("ScrollTrigger",s),be){Ga=1,To=document.createElement("div"),To.style.height="100vh",To.style.position="absolute",r0(),Ay(),qe.register(zt),s.isTouch=qe.isTouch,js=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Td=qe.isTouch===1,gi(ce,"wheel",So),Pd=[ce,Ee,pn,be],zt.matchMedia?(s.matchMedia=function(h){var d=zt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},zt.addEventListener("matchMediaInit",function(){n0(),Fd()}),zt.addEventListener("matchMediaRevert",function(){return i0()}),zt.addEventListener("matchMedia",function(){Lr(0,1),Br("matchMedia")}),zt.matchMedia().add("(orientation: portrait)",function(){return yd(),yd})):console.warn("Requires GSAP 3.11.0 or later"),yd(),gi(Ee,"scroll",So);var i=be.hasAttribute("style"),n=be.style,r=n.borderTopStyle,o=zt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=ys(be),ei.m=Math.round(a.top+ei.sc())||0,Di.m=Math.round(a.left+Di.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(be.setAttribute("style",""),be.removeAttribute("style")),Zc=setInterval(Ug,250),zt.delayedCall(.5,function(){return Jc=0}),gi(Ee,"touchcancel",Qn),gi(be,"touchstart",Qn),$c(gi,Ee,"pointerdown,touchstart,mousedown",Ig),$c(gi,Ee,"pointerup,touchend,mouseup",Lg),bd=zt.utils.checkPrefix("transform"),ah.push(bd),Mo=Ui(),ch=zt.delayedCall(.2,Lr).pause(),bo=[Ee,"visibilitychange",function(){var h=ce.innerWidth,d=ce.innerHeight;Ee.hidden?(Ag=h,Rg=d):(Ag!==h||Rg!==d)&&Xa()},Ee,"DOMContentLoaded",Lr,ce,"load",Lr,ce,"resize",Xa],Kc(gi),le.forEach(function(h){return h.enable(0,1)}),l=0;l<oe.length;l+=3)Qc(mi,oe[l],oe[l+1]),Qc(mi,oe[l],oe[l+2])}else if(Ee){var c=function h(){s.enable(),Ee.removeEventListener("DOMContentLoaded",h)};Ee.addEventListener("DOMContentLoaded",c)}}},s.config=function(i){"limitCallbacks"in i&&(xd=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Zc)||(Zc=n)&&setInterval(Ug,n),"ignoreMobileResize"in i&&(Td=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Kc(mi)||Kc(gi,i.autoRefreshEvents||"none"),Xg=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=Yi(i),o=oe.indexOf(r),a=Or(r);~o&&oe.splice(o,a?6:2),n&&(a?Hn.unshift(ce,n,be,n,pn,n):Hn.unshift(r,n))},s.clearMatchMedia=function(i){le.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(dn(i)?Yi(i):i).getBoundingClientRect(),a=o[r?Dr:Nr]*n||0;return r?o.right-a>0&&o.left+a<ce.innerWidth:o.bottom-a>0&&o.top+a<ce.innerHeight},s.positionInViewport=function(i,n,r){dn(i)&&(i=Yi(i));var o=i.getBoundingClientRect(),a=o[r?Dr:Nr],l=n==null?a/2:n in uh?uh[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/ce.innerWidth:(o.top+l)/ce.innerHeight},s.killAll=function(i){if(le.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=Fr.killAll||[];Fr={},n.forEach(function(r){return r()})}},s})();ne.version="3.15.1";ne.saveStyles=function(s){return s?Qa(s).forEach(function(t){if(t&&t.style){var e=fn.indexOf(t);e>=0&&fn.splice(e,5),fn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),zt.core.getCache(t),wd())}}):fn};ne.revert=function(s,t){return Fd(!s,t)};ne.create=function(s,t){return new ne(s,t)};ne.refresh=function(s){return s?Xa(!0):(Mo||ne.register())&&Lr(!0)};ne.update=function(s){return++oe.cache&&Ss(s===!0?2:0)};ne.clearScrollMemory=s0;ne.maxScroll=function(s,t){return jn(s,t?Di:ei)};ne.getScrollFunc=function(s,t){return xs(Yi(s),t?Di:ei)};ne.getById=function(s){return Ad[s]};ne.getAll=function(){return le.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ne.isScrolling=function(){return!!Pn};ne.snapDirectional=Od;ne.addEventListener=function(s,t){var e=Fr[s]||(Fr[s]=[]);~e.indexOf(t)||e.push(t)};ne.removeEventListener=function(s,t){var e=Fr[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};ne.batch=function(s,t){var e=[],i={},n=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=zt.delayedCall(n,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),r<=d.length&&u.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Oi(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Oi(r)&&(r=r(),gi(ne,"refresh",function(){return r=t.batchMax()})),Qa(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(ne.create(c))}),e};var Hg=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},Md=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===pn&&s(be,e)},nh={auto:1,scroll:1},zy=function(t){var e=t.event,i=t.target,n=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||zt.core.getCache(r),a=Ui(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==be&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(nh[(l=Cn(r)).overflowY]||nh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!Or(r)&&(nh[(l=Cn(r)).overflowY]||nh[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},a0=function(t,e,i,n){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&zy,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&gi(Ee,qe.eventTypes[0],Vg,!1,!0)},onDisable:function(){return mi(Ee,qe.eventTypes[0],Vg,!0)}})},ky=/(input|label|select|textarea)/i,Gg,Vg=function(t){var e=ky.test(t.target.tagName);(e||Gg)&&(t._gsapAllow=!0,Gg=e)},Hy=function(t){Ir(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Yi(t.target)||pn,h=zt.core.globals().ScrollSmoother,d=h&&h.get(),f=js&&(t.content&&Yi(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=xs(c,ei),m=xs(c,Di),_=1,p=(qe.isTouch&&ce.visualViewport?ce.visualViewport.scale*ce.visualViewport.width:ce.outerWidth)/ce.innerWidth,g=0,v=Oi(n)?function(){return n(a)}:function(){return n||2.8},M,y,b=a0(c,t.type,!0,r),w=function(){return y=!1},x=Qn,S=Qn,C=function(){l=jn(c,ei),S=Ya(js?1:0,l),i&&(x=Ya(0,jn(c,Di))),M=Ur},A=function(){f._gsap.y=Va(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var W=Va(a.deltaY/2),X=S(u.v-W);if(f&&X!==u.v+u.offset){u.offset=X-u.v;var R=Va((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",u.cacheID=oe.cache,Ss()}return!0}u.offset&&A(),y=!0},L,G,I,N,F=function(){C(),L.isActive()&&L.vars.scrollY>l&&(u()>l?L.progress(1)&&u(l):L.resetTo("scrollY",l))};return f&&zt.set(f,{y:"+=0"}),t.ignoreCheck=function(U){return js&&U.type==="touchmove"&&D(U)||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){y=!1;var U=_;_=Va((ce.visualViewport&&ce.visualViewport.scale||1)/p),L.pause(),U!==_&&Md(c,_>1.01?!0:i?!1:"x"),G=m(),I=u(),C(),M=Ur},t.onRelease=t.onGestureStart=function(U,W){if(u.offset&&A(),!W)N.restart(!0);else{oe.cache++;var X=v(),R,V;i&&(R=m(),V=R+X*.05*-U.velocityX/.227,X*=Hg(m,R,V,jn(c,Di)),L.vars.scrollX=x(V)),R=u(),V=R+X*.05*-U.velocityY/.227,X*=Hg(u,R,V,jn(c,ei)),L.vars.scrollY=S(V),L.invalidate().duration(X).play(.01),(js&&L.vars.scrollY>=l||R>=l-1)&&zt.to({},{onUpdate:F,duration:X})}o&&o(U)},t.onWheel=function(){L._ts&&L.pause(),Ui()-g>1e3&&(M=0,g=Ui())},t.onChange=function(U,W,X,R,V){if(Ur!==M&&C(),W&&i&&m(x(R[2]===W?G+(U.startX-U.x):m()+W-R[1])),X){u.offset&&A();var ot=V[2]===X,Mt=ot?I+U.startY-U.y:u()+X-V[1],Y=S(Mt);ot&&Mt!==Y&&(I+=Y-Mt),u(Y)}(X||W)&&Ss()},t.onEnable=function(){Md(c,i?!1:"x"),ne.addEventListener("refresh",F),gi(ce,"resize",F),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),b.enable()},t.onDisable=function(){Md(c,!0),mi(ce,"resize",F),ne.removeEventListener("refresh",F),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=js,js&&!u()&&u(1),js&&zt.ticker.add(Qn),N=a._dc,L=zt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:o0(u,u(),function(){return L.pause()})},onUpdate:Ss,onComplete:N.vars.onComplete}),a};ne.sort=function(s){if(Oi(s))return le.sort(s);var t=ce.pageYOffset||0;return ne.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ce.innerHeight}),le.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ne.observe=function(s){return new qe(s)};ne.normalizeScroll=function(s){if(typeof s>"u")return qi;if(s===!0&&qi)return qi.enable();if(s===!1){qi&&qi.kill(),qi=s;return}var t=s instanceof qe?s:Hy(s);return qi&&qi.target===t.target&&qi.kill(),Or(t.target)&&(qi=t),t};ne.core={_getVelocityProp:qc,_inputObserver:a0,_scrollers:oe,_proxies:Hn,bridge:{ss:function(){Pn||Br("scrollStart"),Pn=Ui()},ref:function(){return Ni}}};Jg()&&zt.registerPlugin(ne);var tl,el,l0=typeof Symbol=="function"?Symbol():"_split",zd,Gy=()=>zd||Ro.register(window.gsap),c0=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,il=s=>s?typeof s=="string"?il(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...il(e)):t.push(e),t),[]):[s]:[],h0=s=>il(s).filter(t=>t&&t.nodeType===1),dh=[],Bd=function(){},Vy={add:s=>s()},Wy=/\s+/g,u0=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),ph={left:0,top:0,width:0,height:0},Xy=(s,t)=>{for(;++t<s.length&&s[t]===ph;);return s[t]||ph},f0=({element:s,html:t,ariaL:e,ariaH:i})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),i?s.setAttribute("aria-hidden",i):s.removeAttribute("aria-hidden")},d0=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||dh),i=s.length,n,r,o,a;if(e.size)for(;--i>-1;){r=s[i];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(n=0,a=r;o.startsWith(a+=s[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){s[i]=o,s.splice(i+1,n);break}}}}return s},p0=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),Ao=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),kd=(s,t,e)=>{let i=t[s+"sClass"]||"",{tag:n="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let d=document.createElement(n),f=e.length+1;return i&&(d.className=i+(l?" "+i+f:"")),o&&d.style.setProperty("--"+s,f+""),r!=="none"&&d.setAttribute("aria-hidden","true"),n!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(i=i.replace("++","")),c.collection=e,c},Yy=(s,t,e,i)=>{let n=kd("line",e,i),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},m0=(s,t,e,i,n,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),f=0,{wordDelimiter:u,reduceWhiteSpace:m=!0,prepareText:_}=t,p=s.getBoundingClientRect(),g=p,v=!m&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",M=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,b=e.collection,w,x,S,C,A,D,L,G,I,N,F,U,W,X,R,V,ot,Mt;for(typeof u=="object"?(S=u.delimiter||u,x=u.replaceWith||""):x=u===""?"":u||" ",w=x!==" ";f<d.length;f++)if(C=d[f],C.nodeType===3){for(R=C.textContent||"",m?R=R.replace(Wy," "):v&&(R=R.replace(/\n/g,x+`
`)),_&&(R=_(R,s)),C.textContent=R,A=x||S?R.split(S||x):R.match(a)||dh,ot=A[A.length-1],G=w?ot.slice(-1)===" ":!ot,ot||A.pop(),g=p,L=w?A[0].charAt(0)===" ":!A[0],L&&Ao(" ",s,C),A[0]||A.shift(),d0(A,l),r&&c||(C.textContent=""),I=1;I<=A.length;I++)if(V=A[I-1],!m&&v&&V.charAt(0)===`
`&&((h=C.previousSibling)==null||h.remove(),Ao(document.createElement("br"),s,C),V=V.slice(1)),!m&&V==="")Ao(x,s,C);else if(V===" ")s.insertBefore(document.createTextNode(" "),C);else{if(w&&V.charAt(0)===" "&&Ao(" ",s,C),y&&I===1&&!L&&b.indexOf(y.parentNode)>-1?(D=b[b.length-1],D.appendChild(document.createTextNode(i?"":V))):(D=e(i?"":V),Ao(D,s,C),y&&I===1&&!L&&D.insertBefore(y,D.firstChild)),i){if(F=c0?d0([...c0.segment(V)].map(Y=>Y.segment),l):V.match(a)||dh,l){let Y=V.match(l);Y&&Y.some(at=>F.indexOf(at)<0)&&(F=V.match(a)||dh)}for(Mt=0;Mt<F.length;Mt++)D.appendChild(F[Mt]===" "?document.createTextNode(" "):i(F[Mt]))}if(r&&c){if(R=C.textContent=R.substring(V.length+1,R.length),N=D.getBoundingClientRect(),N.top>g.top&&(M?N.left>=g.left:N.left<=g.left)){for(U=s.cloneNode(),W=s.childNodes[0];W&&W!==D;)X=W,W=W.nextSibling,U.appendChild(X);s.parentNode.insertBefore(U,s),n&&p0(U)}g=N}(I<A.length||G)&&Ao(I>=A.length?" ":w&&V.slice(-1)===" "?" "+x:x,s,C)}s.removeChild(C),y=0}else C.nodeType===1&&(o&&o.indexOf(C)>-1?(b.indexOf(C.previousSibling)>-1&&b[b.length-1].appendChild(C),y=C):(m0(C,t,e,i,n,r,o,a,l,!0),y=0),n&&p0(C))},g0=class _0{constructor(t,e){this.isSplit=!1,Gy(),this.elements=h0(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[l0])==null||o._data.orig.filter(({element:a})=>a===r).forEach(f0)),r[l0]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let r=i.length,o;for(;r--;){o=i[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},Bd(this),this.split(e)}split(t){return(this._ctx||Vy).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,u=d&&!f&&!h,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=m?new RegExp(m.source+"|"+u0.source,"gu"):u0,p=!!t.ignore&&h0(t.ignore),{orig:g,animTime:v,obs:M}=this._data,y;(d||f||h)&&(this.elements.forEach((b,w)=>{g[w]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},i==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):i==="hidden"&&b.setAttribute("aria-hidden","true");let x=[],S=[],C=[],A=d?kd("char",t,x):null,D=kd("word",t,S),L,G,I,N;if(m0(b,t,D,A,u,n&&(h||u),p,_,m,!1),h){let F=il(b.childNodes),U=Yy(b,F,t,C),W,X=[],R=0,V=window.getComputedStyle(b).direction==="rtl",ot=F.map(at=>at.nodeType===1?at.getBoundingClientRect():ph),Mt=ph,Y;for(L=0;L<F.length;L++)W=F[L],W.nodeType===1&&(W.nodeName==="BR"?((!L||F[L-1].nodeName!=="BR")&&(X.push(W),U(R,L+1)),R=L+1,Mt=Xy(ot,L)):(Y=ot[L],L&&Y.top>Mt.top&&(V?Y.left+Y.width>Mt.left+1:Y.left<Mt.left+Mt.width-1)&&(U(R,L),R=L),Mt=Y));R<L&&U(R,L),X.forEach(at=>{var _t;return(_t=at.parentNode)==null?void 0:_t.removeChild(at)})}if(!f){for(L=0;L<S.length;L++)if(G=S[L],d||!G.nextSibling||G.nextSibling.nodeType!==3)if(r&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";G.firstChild;)I.appendChild(G.firstChild);G.replaceWith(I)}else G.replaceWith(...G.childNodes);else N=G.nextSibling,N&&N.nodeType===3&&(N.textContent=(G.textContent||"")+(N.textContent||""),G.remove());S.length=0,b.normalize()}this.lines.push(...C),this.words.push(...S),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let w=b.cloneNode();return b.replaceWith(w),w.appendChild(b),b.className&&(w.className=b.className.trim().split(" ").map(x=>x+"-mask").join(" ")),w.style.overflow="clip",w.style.verticalAlign="top",w}))),this.isSplit=!0,el&&h&&a&&el.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((b,w)=>{g[w].width=b.offsetWidth,M&&M.observe(b)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),el?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(f0),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new _0(t,e)}static register(t){tl=tl||t||window.gsap,tl&&(il=tl.utils.toArray,Bd=tl.core.context||Bd),!zd&&window.innerWidth>0&&(el=document.fonts,zd=!0)}};g0.version="3.15.1";var Ro=g0;var x0="1.3.29";function S0(s,t,e){return Math.max(s,Math.min(t,e))}function qy(s,t,e){return(1-e)*s+e*t}function Zy(s,t,e,i){return qy(s,t,1-Math.exp(-e*i))}function Jy(s,t){return(s%t+t)%t}var Ky=.5,$y=class{constructor(){Ft(this,"isRunning",!1);Ft(this,"value",0);Ft(this,"from",0);Ft(this,"to",0);Ft(this,"currentTime",0);Ft(this,"lerp");Ft(this,"duration");Ft(this,"easing");Ft(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=S0(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Zy(this.value,this.to,this.lerp*60,s),Math.abs(this.to-this.value)<Ky&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Qy(s,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,i)},t)}}var jy=class{constructor(s,t,{autoResize:e=!0,debounce:i=250}={}){Ft(this,"wrapper");Ft(this,"content");Ft(this,"width",0);Ft(this,"height",0);Ft(this,"scrollHeight",0);Ft(this,"scrollWidth",0);Ft(this,"debouncedResize");Ft(this,"wrapperResizeObserver");Ft(this,"contentResizeObserver");Ft(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ft(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ft(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=Qy(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},M0=class{constructor(){Ft(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},tS=100/6,er={passive:!1};function v0(s,t){return s===1?tS:s===2?t:1}var eS=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Ft(this,"element");Ft(this,"options");Ft(this,"touchStart",{x:0,y:0});Ft(this,"lastDelta",{x:0,y:0});Ft(this,"window",{width:0,height:0});Ft(this,"emitter",new M0);Ft(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Ft(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});Ft(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Ft(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:i}=s,n=v0(i,this.window.width),r=v0(i,this.window.height);t*=n,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Ft(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,er),this.element.addEventListener("touchstart",this.onTouchStart,er),this.element.addEventListener("touchmove",this.onTouchMove,er),this.element.addEventListener("touchend",this.onTouchEnd,er)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,er),this.element.removeEventListener("touchstart",this.onTouchStart,er),this.element.removeEventListener("touchmove",this.onTouchMove,er),this.element.removeEventListener("touchend",this.onTouchEnd,er)}},y0=s=>Math.min(1,1.001-2**(-10*s)),nl=new WeakMap,b0=class T0{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:i=t,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:a=1.7,duration:l,easing:c,lerp:h=.1,infinite:d=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:_=1,autoResize:p=!0,prevent:g,virtualScroll:v,overscroll:M=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:w=!1,allowNestedScroll:x=!1,__experimental__naiveDimensions:S=!1,naiveDimensions:C=S,stopInertiaOnNavigate:A=!1,respectReducedMotion:D=!0}={}){Ft(this,"_isScrolling",!1);Ft(this,"_isStopped",!1);Ft(this,"_isLocked",!1);Ft(this,"_preventNextNativeScrollEvent",!1);Ft(this,"_resetVelocityTimeout",null);Ft(this,"_rafId",null);Ft(this,"_isDraggingSelection",!1);Ft(this,"nestedInstances",new Set);Ft(this,"_nestedSweepFrame",0);Ft(this,"_isAdopted",!1);Ft(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ft(this,"isTouching");Ft(this,"isIos");Ft(this,"time",0);Ft(this,"userData",{});Ft(this,"lastVelocity",0);Ft(this,"velocity",0);Ft(this,"direction",0);Ft(this,"options");Ft(this,"targetScroll");Ft(this,"animatedScroll");Ft(this,"animate",new $y);Ft(this,"emitter",new M0);Ft(this,"dimensions");Ft(this,"virtualScroll");Ft(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Ft(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ft(this,"onTransitionEnd",t=>{t.propertyName?.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Ft(this,"onClick",t=>{let e=t.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),i=new URL(window.location.href);if(this.options.anchors){let n=e.find(r=>i.host===r.host&&i.pathname===r.pathname&&r.hash);if(n){let r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>i.host===n.host&&i.pathname!==n.pathname)){this.reset();return}});Ft(this,"onPointerDown",t=>{t.button===1&&this.reset()});Ft(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;let{deltaX:e,deltaY:i,event:n}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let a=e===0&&i===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&e===0,c=this.options.allowNestedScroll==="smooth";if(a||l&&!c)return;let h=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical";if(this._isAdopted&&h!==(this.isHorizontal?"horizontal":"vertical"))return;let d=n.composedPath();d=d.slice(0,d.indexOf(this.rootElement));let f=this.options.prevent,u=v=>typeof f=="function"&&f?.(v)||v.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&v.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&v.hasAttribute?.("data-lenis-prevent-horizontal")||r&&v.hasAttribute?.("data-lenis-prevent-touch")||o&&v.hasAttribute?.("data-lenis-prevent-wheel"),m=d.find(v=>v instanceof HTMLElement&&(u(v)||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:i})));if(m){c&&(o&&this.options.smoothWheel||r&&this.options.syncTouch)&&!d.slice(d.indexOf(m)).some(v=>v instanceof HTMLElement&&u(v))&&this.isNestedAdoptable(m)&&this.adoptNestedScroller(m,t);return}if(l)return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),this.settleNativeScrollLater(),n.lenisStopPropagation=!0;return}let _=i;this.options.gestureOrientation==="both"?_=Math.abs(i)>Math.abs(e)?i:e:this.options.gestureOrientation==="horizontal"&&(_=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&(this._isAdopted?_:i)>0||this.animatedScroll===this.limit&&(this._isAdopted?_:i)<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let p=r&&this.options.syncTouch,g=r&&n.type==="touchend";g&&(_=Math.sign(_)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+_,{programmatic:!1,...p?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ft(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.settleNativeScrollLater()}});Ft(this,"raf",t=>{let e=t-(this.time||t);if(this.time=t,this.animate.advance(e*.001),this.nestedInstances.size>0){for(let i of this.nestedInstances)i.raf(t);++this._nestedSweepFrame>=60&&(this._nestedSweepFrame=0,this.sweepNestedInstances())}this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=x0,window.lenis||(window.lenis={}),window.lenis.version=x0,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof l=="number"&&typeof c!="function"?c=y0:typeof c=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:t,content:e,eventsTarget:i,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:a,duration:l,easing:c,lerp:h,infinite:d,gestureOrientation:u,orientation:f,touchMultiplier:m,wheelMultiplier:_,autoResize:p,prevent:g,virtualScroll:v,overscroll:M,autoRaf:y,anchors:b,autoToggle:w,allowNestedScroll:x,naiveDimensions:C,stopInertiaOnNavigate:A,respectReducedMotion:D},this.dimensions=new jy(t,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new eS(i,{touchMultiplier:m,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),nl.set(this.rootElement,this),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}static get(t){return nl.get(t)}destroy(){for(let t of this.nestedInstances)t.destroy();this.nestedInstances.clear(),nl.get(this.rootElement)===this&&nl.delete(this.rootElement),this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){let t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let i=t.targetTouches[0]??t.changedTouches[0];if(!i)return!1;let n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;let r=n[0],o=n[n.length-1],a=40,l=Math.hypot(i.clientX-r.left,i.clientY-r.top)<=a,c=Math.hypot(i.clientX-o.right,i.clientY-o.bottom)<=a;return l||c}resize(){this.sweepNestedInstances(),this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}settleNativeScrollLater(){this._resetVelocityTimeout!==null&&clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=setTimeout(()=>{this._resetVelocityTimeout=null,this.isScrolling!=="smooth"&&(this.isScrolling===!1&&this.velocity===0||(this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()))},400)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:i=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:l=r?this.options.easing:void 0,onStart:c,onComplete:h,force:d=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?i=!0:(o=1,a=void 0,l=void 0)),(this.isStopped||this.isLocked)&&!d)return;let u=t,m=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let _=null;if(typeof u=="string"?(_=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),_||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(_=u),_){if(this.options.wrapper!==window){let b=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?b.left:b.top}let p=_.getBoundingClientRect(),g=getComputedStyle(_),v=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),M=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?p.left:p.top)+this.animatedScroll-(Number.isNaN(v)?0:v)-(Number.isNaN(y)?0:y)}}if(typeof u=="number"){if(u+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;let _=u-this.animatedScroll;_>this.limit/2?u-=this.limit:_<-this.limit/2&&(u+=this.limit)}}else u=S0(0,u,this.limit);if(u===this.targetScroll){c?.(this),h?.(this);return}if(this.userData=f??{},i){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof a=="number"&&typeof l!="function"?l=y0:typeof l=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,u,{duration:a,easing:l,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c?.(this)},onUpdate:(_,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),p||this.emit(),p&&(this.reset(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}sweepNestedInstances(){for(let t of this.nestedInstances)t.rootElement.isConnected||(this.nestedInstances.delete(t),t.destroy())}isNestedAdoptable(t){return!(nl.has(t)||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t.isContentEditable)}adoptNestedScroller(t,e){let i=getComputedStyle(t),n=["auto","overlay","scroll"].includes(i.overflowX)&&t.scrollWidth>t.clientWidth,r=["auto","overlay","scroll"].includes(i.overflowY)&&t.scrollHeight>t.clientHeight,o=n&&!r?"horizontal":"vertical",a=window.lenis?.horizontal,l=new T0({wrapper:t,content:t.firstElementChild??t,eventsTarget:t,orientation:o,gestureOrientation:o,smoothWheel:this.options.smoothWheel,syncTouch:this.options.syncTouch,syncTouchLerp:this.options.syncTouchLerp,touchInertiaExponent:this.options.touchInertiaExponent,duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,touchMultiplier:this.options.touchMultiplier,wheelMultiplier:this.options.wheelMultiplier,autoResize:this.options.autoResize,prevent:this.options.prevent,overscroll:this.options.overscroll,allowNestedScroll:this.options.allowNestedScroll,naiveDimensions:this.options.naiveDimensions,respectReducedMotion:this.options.respectReducedMotion,infinite:!1,anchors:!1,autoToggle:!1,stopInertiaOnNavigate:!1,autoRaf:!1});l._isAdopted=!0,window.lenis&&(window.lenis.horizontal=a),this.nestedInstances.add(l),e.event.type.includes("touch")&&(l.virtualScroll.touchStart.x=this.virtualScroll.touchStart.x,l.virtualScroll.touchStart.y=this.virtualScroll.touchStart.y,l.virtualScroll.lastDelta.x=this.virtualScroll.lastDelta.x,l.virtualScroll.lastDelta.y=this.virtualScroll.lastDelta.y),l.onVirtualScroll(e)}hasNestedScroll(t,{deltaX:e,deltaY:i}){let n=Date.now();t._lenis||(t._lenis={});let r=t._lenis,o,a,l,c,h,d,f,u,m,_;if(n-(r.time??0)>2e3){r.time=Date.now();let x=window.getComputedStyle(t);if(r.computedStyle=x,o=["auto","overlay","scroll"].includes(x.overflowX),a=["auto","overlay","scroll"].includes(x.overflowY),h=["auto"].includes(x.overscrollBehaviorX),d=["auto"].includes(x.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=a,!(o||a))return!1;f=t.scrollWidth,u=t.scrollHeight,m=t.clientWidth,_=t.clientHeight,l=f>m,c=u>_,r.isScrollableX=l,r.isScrollableY=c,r.scrollWidth=f,r.scrollHeight=u,r.clientWidth=m,r.clientHeight=_,r.hasOverscrollBehaviorX=h,r.hasOverscrollBehaviorY=d}else l=r.isScrollableX,c=r.isScrollableY,o=r.hasOverflowX,a=r.hasOverflowY,f=r.scrollWidth,u=r.scrollHeight,m=r.clientWidth,_=r.clientHeight,h=r.hasOverscrollBehaviorX,d=r.hasOverscrollBehaviorY;if(!(o&&l||a&&c))return!1;let p=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical",g,v,M,y,b,w;if(p==="horizontal")g=Math.round(t.scrollLeft),v=f-m,M=e,y=o,b=l,w=h;else if(p==="vertical")g=Math.round(t.scrollTop),v=u-_,M=i,y=a,b=c,w=d;else return!1;return!w&&(g>=v||g<=0)?!0:(M>0?g<v:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Jy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(let t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};var o_=0,Mp=1,a_=2;var $l=1,l_=2,oa=3,pr=0,wi=1,Nn=2,Ds=0,aa=1,mr=2,bp=3,Tp=4,c_=5;var $r=100,h_=101,u_=102,f_=103,d_=104,p_=200,m_=201,g_=202,__=203,wp=204,Ep=205,x_=206,v_=207,y_=208,S_=209,M_=210,b_=211,T_=212,w_=213,E_=214,Vh=0,Wh=1,Xh=2,Xo=3,Yh=4,qh=5,Zh=6,Jh=7,wu=0,A_=1,R_=2,as=0,Ql=1,jl=2,tc=3,ec=4,ic=5,nc=6,Qr=7;var Ap=300,jr=301,la=302,Eu=303,Au=304,Kh=1e3,es=1001,$h=1002,xi=1003,C_=1004;var sc=1005;var ci=1006,Ru=1007;var Ns=1008;var rn=1009,Rp=1010,Cp=1011,ca=1012,Cu=1013,Yn=1014,Un=1015,ui=1016,Pu=1017,Iu=1018,to=1020,Pp=35902,Ip=35899,Lp=1021,Dp=1022,qn=1023,Rs=1026,Us=1027,Lu=1028,Du=1029,gr=1030,Nu=1031;var Uu=1033,rc=33776,oc=33777,ac=33778,lc=33779,Ou=35840,Fu=35841,Bu=35842,zu=35843,ku=36196,Hu=37492,Gu=37496,Vu=37488,Wu=37489,cc=37490,Xu=37491,Yu=37808,qu=37809,Zu=37810,Ju=37811,Ku=37812,$u=37813,Qu=37814,ju=37815,tf=37816,ef=37817,nf=37818,sf=37819,rf=37820,of=37821,af=36492,lf=36494,cf=36495,hf=36283,uf=36284,hc=36285,ff=36286;var gl=2300,Qh=2301,kh=2302,up=2303,fp=2400,dp=2401,pp=2402;var P_=3200;var uc=0,I_=1,Os="",bi="srgb",_l="srgb-linear",xl="linear",ve="srgb";var Hh=7680;var L_=519,D_=512,N_=513,U_=514,Np=515,O_=516,F_=517,Up=518,Op=519,B_=35044;var Fp="300 es",Ln=2e3,Yo=2001;function iS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function nS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function z_(){let s=qo("canvas");return s.style.display="block",s}var w0={},Zo=null;function Bp(...s){let t="THREE."+s.shift();Zo?Zo("log",t,...s):console.log(t,...s)}function k_(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Zt(...s){s=k_(s);let t="THREE."+s.shift();if(Zo)Zo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Qt(...s){s=k_(s);let t="THREE."+s.shift();if(Zo)Zo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Vr(...s){let t=s.join(" ");t in w0||(w0[t]=!0,Zt(...s))}function H_(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var G_={[Vh]:Vh,[Xh]:Zh,[Yh]:Yh,[Xo]:qh,[Wh]:Wh,[Zh]:Xh,[Jh]:Jh,[qh]:Xo},ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],E0=1234567,fl=Math.PI/180,Jo=180/Math.PI;function eo(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fi[s&255]+Fi[s>>8&255]+Fi[s>>16&255]+Fi[s>>24&255]+"-"+Fi[t&255]+Fi[t>>8&255]+"-"+Fi[t>>16&15|64]+Fi[t>>24&255]+"-"+Fi[e&63|128]+Fi[e>>8&255]+"-"+Fi[e>>16&255]+Fi[e>>24&255]+Fi[i&255]+Fi[i>>8&255]+Fi[i>>16&255]+Fi[i>>24&255]).toLowerCase()}function he(s,t,e){return Math.max(t,Math.min(e,s))}function zp(s,t){return(s%t+t)%t}function sS(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function rS(s,t,e){return s!==t?(e-s)/(t-s):0}function dl(s,t,e){return(1-e)*s+e*t}function oS(s,t,e,i){return dl(s,t,1-Math.exp(-e*i))}function aS(s,t=1){return t-Math.abs(zp(s,t*2)-t)}function lS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function cS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function hS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function uS(s,t){return s+Math.random()*(t-s)}function fS(s){return s*(.5-Math.random())}function dS(s){s!==void 0&&(E0=s);let t=E0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pS(s){return s*fl}function mS(s){return s*Jo}function gS(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function _S(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xS(s,t,e,i,n){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),u=r((i-t)/2),m=o((i-t)/2);switch(n){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*u,a*h,a*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Hp(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function V_(s,t){if(t.constructor===Float32Array)return s;let e=Hp(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function W_(s,t){if(t.constructor===Float32Array)return s;let e=Hp(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Gp={DEG2RAD:fl,RAD2DEG:Jo,generateUUID:eo,clamp:he,euclideanModulo:zp,mapLinear:sS,inverseLerp:rS,lerp:dl,damp:oS,pingpong:aS,smoothstep:lS,smootherstep:cS,randInt:hS,randFloat:uS,randFloatSpread:fS,seededRandom:dS,degToRad:pS,radToDeg:mS,isPowerOfTwo:gS,ceilPowerOfTwo:_S,floorPowerOfTwo:kp,setQuaternionFromProperEuler:xS,normalize:W_,denormalize:V_},Zp=class Zp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;var gt=Zp,xn=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],f=r[o+0],u=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),f=l(i/2),u=l(n/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-n)*u}else if(i>a&&i>d){let u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(n+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(n+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-a);this._w=(o-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Jp=class Jp{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(A0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(A0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hd.copy(this).projectOnVector(t),this.sub(Hd)}reflect(t){return this.sub(Hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jp.prototype.isVector3=!0;var H=Jp,Hd=new H,A0=new xn,Kp=class Kp{constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],m=i[8],_=n[0],p=n[3],g=n[6],v=n[1],M=n[4],y=n[7],b=n[2],w=n[5],x=n[8];return r[0]=o*_+a*v+l*b,r[3]=o*p+a*M+l*w,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*b,r[4]=c*p+h*M+d*w,r[7]=c*g+h*y+d*x,r[2]=f*_+u*v+m*b,r[5]=f*p+u*M+m*w,r[8]=f*g+u*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=e*d+i*f+n*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(n*c-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=f*_,t[4]=(h*e-n*l)*_,t[5]=(n*r-a*e)*_,t[6]=u*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gd.makeScale(t,e)),this}rotate(t){return Vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gd.makeRotation(-t)),this}translate(t,e){return Vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Kp.prototype.isMatrix3=!0;var te=Kp,Gd=new te,R0=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){let s={enabled:!0,workingColorSpace:_l,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(n.r=As(n.r),n.g=As(n.g),n.b=As(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(n.r=Wo(n.r),n.g=Wo(n.g),n.b=Wo(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Os?xl:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[_l]:{primaries:t,whitePoint:i,transfer:xl,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),s}var ue=vS();function As(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Co,jh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Co===void 0&&(Co=qo("canvas")),Co.width=t.width,Co.height=t.height;let n=Co.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Co}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(As(e[i]/255)*255):e[i]=As(e[i]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yS=0,Ko=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=eo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Vd(n[o].image)):r.push(Vd(n[o]))}else r=Vd(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var SS=0,Wd=new H,Ti=class s extends ns{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=es,n=es,r=ci,o=Ns,a=qn,l=rn,c=s.DEFAULT_ANISOTROPY,h=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=eo(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ti.DEFAULT_IMAGE=null;Ti.DEFAULT_MAPPING=Ap;Ti.DEFAULT_ANISOTROPY=1;var $p=class $p{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,y=(u+1)/2,b=(g+1)/2,w=(h+f)/4,x=(d+_)/4,S=(m+p)/4;return M>y&&M>b?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=w/i,r=x/i):y>b?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=w/n,r=S/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=x/r,n=S/r),this.set(i,n,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$p.prototype.isVector4=!0;var Fe=$p,tu=class extends ns{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ti({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ko(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends tu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vl=class extends Ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xi,this.minFilter=xi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eu=class extends Ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xi,this.minFilter=xi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Tu=class Tu{constructor(t,e,i,n,r,o,a,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,f,u,m,_,p)}set(t,e,i,n,r,o,a,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tu().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Po.setFromMatrixColumn(t,0).length(),r=1/Po.setFromMatrixColumn(t,1).length(),o=1/Po.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MS,t,bS)}lookAt(t,e,i){let n=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),ir.crossVectors(i,mn),ir.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),ir.crossVectors(i,mn)),ir.normalize(),mh.crossVectors(mn,ir),n[0]=ir.x,n[4]=mh.x,n[8]=mn.x,n[1]=ir.y,n[5]=mh.y,n[9]=mn.y,n[2]=ir.z,n[6]=mh.z,n[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],m=i[2],_=i[6],p=i[10],g=i[14],v=i[3],M=i[7],y=i[11],b=i[15],w=n[0],x=n[4],S=n[8],C=n[12],A=n[1],D=n[5],L=n[9],G=n[13],I=n[2],N=n[6],F=n[10],U=n[14],W=n[3],X=n[7],R=n[11],V=n[15];return r[0]=o*w+a*A+l*I+c*W,r[4]=o*x+a*D+l*N+c*X,r[8]=o*S+a*L+l*F+c*R,r[12]=o*C+a*G+l*U+c*V,r[1]=h*w+d*A+f*I+u*W,r[5]=h*x+d*D+f*N+u*X,r[9]=h*S+d*L+f*F+u*R,r[13]=h*C+d*G+f*U+u*V,r[2]=m*w+_*A+p*I+g*W,r[6]=m*x+_*D+p*N+g*X,r[10]=m*S+_*L+p*F+g*R,r[14]=m*C+_*G+p*U+g*V,r[3]=v*w+M*A+y*I+b*W,r[7]=v*x+M*D+y*N+b*X,r[11]=v*S+M*L+y*F+b*R,r[15]=v*C+M*G+y*U+b*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*u-c*f,M=a*u-c*d,y=a*f-l*d,b=o*u-c*h,w=o*f-l*h,x=o*d-a*h;return e*(_*v-p*M+g*y)-i*(m*v-p*b+g*w)+n*(m*M-_*b+g*x)-r*(m*y-_*w+p*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*a-i*o,M=e*l-n*o,y=e*c-r*o,b=i*l-n*a,w=i*c-r*a,x=n*c-r*l,S=h*_-d*m,C=h*p-f*m,A=h*g-u*m,D=d*p-f*_,L=d*g-u*_,G=f*g-u*p,I=v*G-M*L+y*D+b*A-w*C+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/I;return t[0]=(a*G-l*L+c*D)*N,t[1]=(n*L-i*G-r*D)*N,t[2]=(_*x-p*w+g*b)*N,t[3]=(f*w-d*x-u*b)*N,t[4]=(l*A-o*G-c*C)*N,t[5]=(e*G-n*A+r*C)*N,t[6]=(p*y-m*x-g*M)*N,t[7]=(h*x-f*y+u*M)*N,t[8]=(o*L-a*A+c*S)*N,t[9]=(i*A-e*L-r*S)*N,t[10]=(m*w-_*y+g*v)*N,t[11]=(d*y-h*w-u*v)*N,t[12]=(a*C-o*D-l*S)*N,t[13]=(e*D-i*C+n*S)*N,t[14]=(_*M-m*b-p*v)*N,t[15]=(h*b-d*M+f*v)*N,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,_=o*h,p=o*d,g=a*d,v=l*c,M=l*h,y=l*d,b=i.x,w=i.y,x=i.z;return n[0]=(1-(_+g))*b,n[1]=(u+y)*b,n[2]=(m-M)*b,n[3]=0,n[4]=(u-y)*w,n[5]=(1-(f+g))*w,n[6]=(p+v)*w,n[7]=0,n[8]=(m+M)*x,n[9]=(p-v)*x,n[10]=(1-(f+_))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Po.set(n[0],n[1],n[2]).length(),a=Po.set(n[4],n[5],n[6]).length(),l=Po.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,h=1/a,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=Ln,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Ln)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Yo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Ln,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),f=-(e+t)/(e-t),u=-(i+n)/(i-n),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Ln)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Yo)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Tu.prototype.isMatrix4=!0;var Se=Tu,Po=new H,Gn=new Se,MS=new H(0,0,0),bS=new H(1,1,1),ir=new H,mh=new H,mn=new H,P0=new Se,I0=new xn,Dn=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return P0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(P0,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return I0.setFromEuler(this),this.setFromQuaternion(I0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var yl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},TS=0,L0=new H,Io=new xn,Ms=new Se,gh=new H,sl=new H,wS=new H,ES=new xn,D0=new H(1,0,0),N0=new H(0,1,0),U0=new H(0,0,1),O0={type:"added"},AS={type:"removed"},Lo={type:"childadded",child:null},Xd={type:"childremoved",child:null},$e=class s extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new Dn,i=new xn,n=new H(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Se},normalMatrix:{value:new te}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Io.setFromAxisAngle(t,e),this.quaternion.multiply(Io),this}rotateOnWorldAxis(t,e){return Io.setFromAxisAngle(t,e),this.quaternion.premultiply(Io),this}rotateX(t){return this.rotateOnAxis(D0,t)}rotateY(t){return this.rotateOnAxis(N0,t)}rotateZ(t){return this.rotateOnAxis(U0,t)}translateOnAxis(t,e){return L0.copy(t).applyQuaternion(this.quaternion),this.position.add(L0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(D0,t)}translateY(t){return this.translateOnAxis(N0,t)}translateZ(t){return this.translateOnAxis(U0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gh.copy(t):gh.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(sl,gh,this.up):Ms.lookAt(gh,sl,this.up),this.quaternion.setFromRotationMatrix(Ms),n&&(Ms.extractRotation(n.matrixWorld),Io.setFromRotationMatrix(Ms),this.quaternion.premultiply(Io.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(O0),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(AS),Xd.child=t,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(O0),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,wS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new H(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},RS={type:"move"},$o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},_h={h:0,s:0,l:0};function Yd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ue.workingColorSpace){if(t=zp(t,1),e=he(e,0,1),i=he(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yd(o,r,t+1/3),this.g=Yd(o,r,t),this.b=Yd(o,r,t-1/3)}return ue.colorSpaceToWorking(this,n),this}setStyle(t,e=bi){function i(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bi){let i=X_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=Wo(t.r),this.g=Wo(t.g),this.b=Wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bi){return ue.workingToColorSpace(Bi.copy(this),t),Math.round(he(Bi.r*255,0,255))*65536+Math.round(he(Bi.g*255,0,255))*256+Math.round(he(Bi.b*255,0,255))}getHexString(t=bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Bi.copy(this),e);let i=Bi.r,n=Bi.g,r=Bi.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Bi.copy(this),e),t.r=Bi.r,t.g=Bi.g,t.b=Bi.b,t}getStyle(t=bi){ue.workingToColorSpace(Bi.copy(this),t);let e=Bi.r,i=Bi.g,n=Bi.b;return t!==bi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(_h);let i=dl(nr.h,_h.h,e),n=dl(nr.s,_h.s,e),r=dl(nr.l,_h.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bi=new qt;qt.NAMES=X_;var Sl=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wr=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new H,bs=new H,qd=new H,Ts=new H,Do=new H,No=new H,F0=new H,Zd=new H,Jd=new H,Kd=new H,$d=new Fe,Qd=new Fe,jd=new Fe,ar=class s{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Vn.subVectors(t,e),n.cross(Vn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Vn.subVectors(n,e),bs.subVectors(i,e),qd.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(bs),l=Vn.dot(qd),c=bs.dot(bs),h=bs.dot(qd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(o,Ts.y),l.addScaledVector(a,Ts.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return $d.setScalar(0),Qd.setScalar(0),jd.setScalar(0),$d.fromBufferAttribute(t,e),Qd.fromBufferAttribute(t,i),jd.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector($d,r.x),o.addScaledVector(Qd,r.y),o.addScaledVector(jd,r.z),o}static isFrontFacing(t,e,i,n){return Vn.subVectors(i,e),bs.subVectors(t,e),Vn.cross(bs).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Vn.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;Do.subVectors(n,i),No.subVectors(r,i),Zd.subVectors(t,i);let l=Do.dot(Zd),c=No.dot(Zd);if(l<=0&&c<=0)return e.copy(i);Jd.subVectors(t,n);let h=Do.dot(Jd),d=No.dot(Jd);if(h>=0&&d<=h)return e.copy(n);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Do,o);Kd.subVectors(t,r);let u=Do.dot(Kd),m=No.dot(Kd);if(m>=0&&u<=m)return e.copy(r);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(No,a);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return F0.subVectors(r,n),a=(d-h)/(d-h+(u-m)),e.copy(n).addScaledVector(F0,a);let g=1/(p+_+f);return o=_*g,a=f*g,e.copy(i).addScaledVector(Do,o).addScaledVector(No,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ss=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xh.copy(i.boundingBox)),xh.applyMatrix4(t.matrixWorld),this.union(xh)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rl),vh.subVectors(this.max,rl),Uo.subVectors(t.a,rl),Oo.subVectors(t.b,rl),Fo.subVectors(t.c,rl),sr.subVectors(Oo,Uo),rr.subVectors(Fo,Oo),zr.subVectors(Uo,Fo);let e=[0,-sr.z,sr.y,0,-rr.z,rr.y,0,-zr.z,zr.y,sr.z,0,-sr.x,rr.z,0,-rr.x,zr.z,0,-zr.x,-sr.y,sr.x,0,-rr.y,rr.x,0,-zr.y,zr.x,0];return!tp(e,Uo,Oo,Fo,vh)||(e=[1,0,0,0,1,0,0,0,1],!tp(e,Uo,Oo,Fo,vh))?!1:(yh.crossVectors(sr,rr),e=[yh.x,yh.y,yh.z],tp(e,Uo,Oo,Fo,vh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ws=[new H,new H,new H,new H,new H,new H,new H,new H],Wn=new H,xh=new ss,Uo=new H,Oo=new H,Fo=new H,sr=new H,rr=new H,zr=new H,rl=new H,vh=new H,yh=new H,kr=new H;function tp(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){kr.fromArray(s,r);let a=n.x*Math.abs(kr.x)+n.y*Math.abs(kr.y)+n.z*Math.abs(kr.z),l=t.dot(kr),c=e.dot(kr),h=i.dot(kr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ni=new H,Sh=new gt,CS=0,sn=class extends ns{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=B_,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=t!==void 0?Hp(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sh.fromBufferAttribute(this,e),Sh.applyMatrix3(t),this.setXY(e,Sh.x,Sh.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix3(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):V_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):W_(t,this.array)}};var Ml=class extends sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var bl=class extends sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Te=class extends sn{constructor(t,e,i){super(new Float32Array(t),e,i)}},PS=new ss,ol=new H,ep=new H,Cs=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):PS.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);let e=ol.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ol,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ep.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(ep)),this.expandByPoint(ol.copy(t.center).sub(ep))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},IS=0,In=new Se,ip=new $e,Bo=new H,gn=new ss,al=new ss,_i=new H,hi=class s extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iS(t)?bl:Ml)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,i){return In.makeTranslation(t,e,i),this.applyMatrix4(In),this}scale(t,e,i){return In.makeScale(t,e,i),this.applyMatrix4(In),this}lookAt(t){return ip.lookAt(t),ip.updateMatrix(),this.applyMatrix4(ip.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(_i.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(_i),_i.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(_i)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];al.setFromBufferAttribute(a),this.morphTargetsRelative?(_i.addVectors(gn.min,al.min),gn.expandByPoint(_i),_i.addVectors(gn.max,al.max),gn.expandByPoint(_i)):(gn.expandByPoint(al.min),gn.expandByPoint(al.max))}gn.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)_i.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(_i));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_i.fromBufferAttribute(a,c),l&&(Bo.fromBufferAttribute(t,c),_i.add(Bo)),n=Math.max(n,i.distanceToSquared(_i))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new H,l[C]=new H;let h=new H,d=new H,f=new H,u=new gt,m=new gt,_=new gt,p=new H,g=new H;function v(C,A,D){c[C]=c[A]=c[D]=1,h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,A),f.fromBufferAttribute(i,D),u.fromBufferAttribute(r,C),m.fromBufferAttribute(r,A),_.fromBufferAttribute(r,D),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),a[C].add(p),a[A].add(p),a[D].add(p),l[C].add(g),l[A].add(g),l[D].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,A=M.length;C<A;++C){let D=M[C],L=D.start,G=D.count;for(let I=L,N=L+G;I<N;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new H,b=new H,w=new H,x=new H;function S(C){w.fromBufferAttribute(n,C),x.copy(w);let A=a[C];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),b.crossVectors(x,A);let L=b.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,A=i.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let n=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_i.fromBufferAttribute(t,e),_i.normalize(),t.setXYZ(e,_i.x,_i.y,_i.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new sn(f,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var np=new H,LS=new H,DS=new te,Xn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=np.subVectors(i,e).cross(LS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(np),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||DS.getNormalMatrix(t),n=this.coplanarPoint(np).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},NS=0,rs=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=aa,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Ep,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hh,this.stencilZFail=Hh,this.stencilZPass=Hh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Es=new H,sp=new H,Mh=new H,bh=new H,Tl=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Es.copy(this.origin).addScaledVector(this.direction,e),Es.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){sp.copy(t).add(e).multiplyScalar(.5),Mh.copy(e).sub(t).normalize(),bh.copy(this.origin).sub(sp);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Mh),a=bh.dot(this.direction),l=-bh.dot(Mh),c=bh.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(sp).addScaledVector(Mh,f),u}intersectSphere(t,e){if(t.radius<0)return null;Es.subVectors(t.center,this.origin);let i=Es.dot(this.direction),n=Es.dot(Es)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Es)!==null}intersectTriangle(t,e,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=i.x-o.x,v=i.y-o.y,M=i.z-o.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(h),x,S,C,A,D,L,G,I,N,F,U,W;if(y>=b&&y>=w?(C=l,L=d,N=m,W=g,l>=0?(x=c,S=h,A=f,D=u,G=_,I=p,F=v,U=M):(x=h,S=c,A=u,D=f,G=p,I=_,F=M,U=v)):b>=w?(C=c,L=f,N=_,W=v,c>=0?(x=h,S=l,A=u,D=d,G=p,I=m,F=M,U=g):(x=l,S=h,A=d,D=u,G=m,I=p,F=g,U=M)):(C=h,L=u,N=p,W=M,h>=0?(x=l,S=c,A=d,D=f,G=m,I=_,F=g,U=v):(x=c,S=l,A=f,D=d,G=_,I=m,F=v,U=g)),C===0)return null;let X=x/C,R=S/C,V=1/C,ot=A-X*L,Mt=D-R*L,Y=G-X*N,at=I-R*N,_t=F-X*W,At=U-R*W,dt=_t*at-At*Y,Nt=ot*At-Mt*_t,me=Y*Mt-at*ot;if(n){if(dt<0||Nt<0||me<0)return null}else if((dt<0||Nt<0||me<0)&&(dt>0||Nt>0||me>0))return null;let Ut=dt+Nt+me;if(Ut===0)return null;let lt=V*(dt*L+Nt*N+me*W);return(Ut>0?lt<0:lt>0)?null:this.at(lt/Ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},B0=new Se,Hr=new Tl,Th=new Cs,z0=new H,wh=new H,Eh=new H,Ah=new H,rp=new H,Rh=new H,k0=new H,Ch=new H,jt=class extends $e{constructor(t=new hi,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Rh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(rp.fromBufferAttribute(d,t),o?Rh.addScaledVector(rp,h):Rh.addScaledVector(rp.sub(e),h))}e.add(Rh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Th.copy(i.boundingSphere),Th.applyMatrix4(r),Hr.copy(t.ray).recast(t.near),!(Th.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Th,z0)===null||Hr.origin.distanceToSquared(z0)>(t.far-t.near)**2))&&(B0.copy(r).invert(),Hr.copy(t.ray).applyMatrix4(B0),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hr)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),M=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,b=M;y<b;y+=3){let w=a.getX(y),x=a.getX(y+1),S=a.getX(y+2);n=Ph(this,g,t,i,c,h,d,w,x,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);n=Ph(this,o,t,i,c,h,d,v,M,y),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,b=M;y<b;y+=3){let w=y,x=y+1,S=y+2;n=Ph(this,g,t,i,c,h,d,w,x,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=p,M=p+1,y=p+2;n=Ph(this,o,t,i,c,h,d,v,M,y),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function US(s,t,e,i,n,r,o,a){let l;if(t.side===wi?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===pr,a),l===null)return null;Ch.copy(a),Ch.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ch);return c<e.near||c>e.far?null:{distance:c,point:Ch.clone(),object:s}}function Ph(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,wh),s.getVertexPosition(l,Eh),s.getVertexPosition(c,Ah);let h=US(s,t,e,i,wh,Eh,Ah,k0);if(h){let d=new H;ar.getBarycoord(k0,wh,Eh,Ah,d),n&&(h.uv=ar.getInterpolatedAttribute(n,a,l,c,d,new gt)),r&&(h.uv1=ar.getInterpolatedAttribute(r,a,l,c,d,new gt)),o&&(h.normal=ar.getInterpolatedAttribute(o,a,l,c,d,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};ar.getNormal(wh,Eh,Ah,f.normal),h.face=f,h.barycoord=d}return h}var Xr=class extends Ti{constructor(t=null,e=1,i=1,n,r,o,a,l,c=xi,h=xi,d,f){super(null,o,a,l,c,h,n,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wl=class extends sn{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zo=new Se,H0=new Se,Ih=[],G0=new ss,OS=new Se,ll=new jt,cl=new Cs,Yr=class extends jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,OS)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ss),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zo),G0.copy(t.boundingBox).applyMatrix4(zo),this.boundingBox.union(G0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zo),cl.copy(t.boundingSphere).applyMatrix4(zo),this.boundingSphere.union(cl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(ll.geometry=this.geometry,ll.material=this.material,ll.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(i),t.ray.intersectsSphere(cl)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,zo),H0.multiplyMatrices(i,zo),ll.matrixWorld=H0,ll.raycast(t,Ih);for(let o=0,a=Ih.length;o<a;o++){let l=Ih[o];l.instanceId=r,l.object=this,e.push(l)}Ih.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xr(new Float32Array(n*this.count),n,this.count,Lu,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gr=new Cs,FS=new gt(.5,.5),Lh=new H,lr=class{constructor(t=new Xn,e=new Xn,i=new Xn,n=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln,i=!1){let n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],M=r[13],y=r[14],b=r[15];if(n[0].setComponents(c-o,u-h,g-m,b-v).normalize(),n[1].setComponents(c+o,u+h,g+m,b+v).normalize(),n[2].setComponents(c+a,u+d,g+_,b+M).normalize(),n[3].setComponents(c-a,u-d,g-_,b-M).normalize(),i)n[4].setComponents(l,f,p,y).normalize(),n[5].setComponents(c-l,u-f,g-p,b-y).normalize();else if(n[4].setComponents(c-l,u-f,g-p,b-y).normalize(),e===Ln)n[5].setComponents(c+l,u+f,g+p,b+y).normalize();else if(e===Yo)n[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(t){Gr.center.set(0,0,0);let e=FS.distanceTo(t.center);return Gr.radius=.7071067811865476+e,Gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Lh.x=n.normal.x>0?t.max.x:t.min.x,Lh.y=n.normal.y>0?t.max.y:t.min.y,Lh.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Lh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},V0=new Se,iu=class s{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];V0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new lr),i[n].setFromProjectionMatrix(V0,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new lr),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Qo=class extends rs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},nu=new H,su=new H,W0=new Se,hl=new Tl,Dh=new Cs,op=new H,X0=new H,ru=class extends $e{constructor(t=new hi,e=new Qo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)nu.fromBufferAttribute(e,n-1),su.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=nu.distanceTo(su);t.setAttribute("lineDistance",new Te(i,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dh.copy(i.boundingSphere),Dh.applyMatrix4(n),Dh.radius+=r,t.ray.intersectsSphere(Dh)===!1)return;W0.copy(n).invert(),hl.copy(t.ray).applyMatrix4(W0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=u,p=m-1;_<p;_+=c){let g=h.getX(_),v=h.getX(_+1),M=Nh(this,t,hl,l,g,v,_);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(m-1),p=h.getX(u),g=Nh(this,t,hl,l,_,p,m-1);g&&e.push(g)}}else{let u=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=u,p=m-1;_<p;_+=c){let g=Nh(this,t,hl,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=Nh(this,t,hl,l,m-1,u,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nh(s,t,e,i,n,r,o){let a=s.geometry.attributes.position;if(nu.fromBufferAttribute(a,n),su.fromBufferAttribute(a,r),e.distanceSqToSegment(nu,su,op,X0)>i)return;op.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(op);if(!(c<t.near||c>t.far))return{distance:c,point:X0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var El=class extends ru{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Al=class extends Ti{constructor(t,e,i,n,r=ci,o=ci,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var Rl=class extends Ti{constructor(t=[],e=jr,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cl=class extends Ti{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ps=class extends Ti{constructor(t,e,i=Yn,n,r,o,a=xi,l=xi,c,h=Rs,d=1){if(h!==Rs&&h!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ko(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Pl=class extends Ps{constructor(t,e=Yn,i=jr,n,r,o=xi,a=xi,l,c=Rs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Il=class extends Ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},os=class s extends hi{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,r,4),m("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function m(_,p,g,v,M,y,b,w,x,S,C){let A=y/x,D=b/S,L=y/2,G=b/2,I=w/2,N=x+1,F=S+1,U=0,W=0,X=new H;for(let R=0;R<F;R++){let V=R*D-G;for(let ot=0;ot<N;ot++){let Mt=ot*A-L;X[_]=Mt*v,X[p]=V*M,X[g]=I,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(ot/x),d.push(1-R/S),U+=1}}for(let R=0;R<S;R++)for(let V=0;V<x;V++){let ot=f+V+N*R,Mt=f+V+N*(R+1),Y=f+(V+1)+N*(R+1),at=f+(V+1)+N*R;l.push(ot,Mt,at),l.push(Mt,Y,at),W+=6}a.addGroup(u,W,C),u+=W,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qr=class s extends hi{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],f=[],u=[],m=0,_=[],p=i/2,g=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(u,2));function v(){let y=new H,b=new H,w=0,x=(e-t)/i;for(let S=0;S<=r;S++){let C=[],A=S/r,D=A*(e-t)+t;for(let L=0;L<=n;L++){let G=L/n,I=G*l+a,N=Math.sin(I),F=Math.cos(I);b.x=D*N,b.y=-A*i+p,b.z=D*F,d.push(b.x,b.y,b.z),y.set(N,x,F).normalize(),f.push(y.x,y.y,y.z),u.push(G,1-A),C.push(m++)}_.push(C)}for(let S=0;S<n;S++)for(let C=0;C<r;C++){let A=_[C][S],D=_[C+1][S],L=_[C+1][S+1],G=_[C][S+1];(t>0||C!==0)&&(h.push(A,D,G),w+=3),(e>0||C!==r-1)&&(h.push(D,L,G),w+=3)}c.addGroup(g,w,0),g+=w}function M(y){let b=m,w=new gt,x=new H,S=0,C=y===!0?t:e,A=y===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,p*A,0),f.push(0,A,0),u.push(.5,.5),m++;let D=m;for(let L=0;L<=n;L++){let I=L/n*l+a,N=Math.cos(I),F=Math.sin(I);x.x=C*F,x.y=p*A,x.z=C*N,d.push(x.x,x.y,x.z),f.push(0,A,0),w.x=N*.5+.5,w.y=F*.5*A+.5,u.push(w.x,w.y),m++}for(let L=0;L<n;L++){let G=b+L,I=D+L;y===!0?h.push(I,I+1,G):h.push(I+1,I,G),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,u=(o-h)/f;return(n+u)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new gt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new H,n=[],r=[],o=[],a=new H,l=new Se;for(let u=0;u<=t;u++){let m=u/t;n[u]=this.getTangentAt(m,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(he(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(n[u],r[u])}if(e===!0){let u=Math.acos(he(r[0].dot(r[t]),-1,1));u/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],u*m)),o[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},jo=class extends yn{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ou=class extends jo{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vp(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,n(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Y0=new H,q0=new H,ap=new Vp,lp=new Vp,cp=new Vp,ta=class extends yn{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new H){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(q0.subVectors(n[0],n[1]).add(n[0]),c=q0);let d=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Y0.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Y0),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),ap.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,p),lp.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,p),cp.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(ap.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),lp.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),cp.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(ap.calc(l),lp.calc(l),cp.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new H().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Z0(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function BS(s,t){let e=1-s;return e*e*t}function zS(s,t){return 2*(1-s)*s*t}function kS(s,t){return s*s*t}function pl(s,t,e,i){return BS(s,t)+zS(s,e)+kS(s,i)}function HS(s,t){let e=1-s;return e*e*e*t}function GS(s,t){let e=1-s;return 3*e*e*s*t}function VS(s,t){return 3*(1-s)*s*s*t}function WS(s,t){return s*s*s*t}function ml(s,t,e,i,n){return HS(s,t)+GS(s,e)+VS(s,i)+WS(s,n)}var Ll=class extends yn{constructor(t=new gt,e=new gt,i=new gt,n=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new gt){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ml(t,n.x,r.x,o.x,a.x),ml(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},au=class extends yn{constructor(t=new H,e=new H,i=new H,n=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new H){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ml(t,n.x,r.x,o.x,a.x),ml(t,n.y,r.y,o.y,a.y),ml(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dl=class extends yn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lu=class extends yn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends yn{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(pl(t,n.x,r.x,o.x),pl(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends yn{constructor(t=new H,e=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new H){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(pl(t,n.x,r.x,o.x),pl(t,n.y,r.y,o.y),pl(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ol=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(Z0(a,l.x,c.x,h.x,d.x),Z0(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new gt().fromArray(n))}return this}},cu=Object.freeze({__proto__:null,ArcCurve:ou,CatmullRomCurve3:ta,CubicBezierCurve:Ll,CubicBezierCurve3:au,EllipseCurve:jo,LineCurve:Dl,LineCurve3:lu,QuadraticBezierCurve:Nl,QuadraticBezierCurve3:Ul,SplineCurve:Ol}),hu=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new cu[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Fl=class extends hu{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Dl(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Nl(this.currentPoint.clone(),new gt(t,e),new gt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new Ll(this.currentPoint.clone(),new gt(t,e),new gt(i,n),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ol(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){let c=new jo(t,e,i,n,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cr=class extends Fl{constructor(t){super(t),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Fl().fromJSON(n))}return this}};function XS(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=Y_(s,0,n,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=KS(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<n;f+=e){let u=s[f],m=s[f+1];u<a&&(a=u),m<l&&(l=m),u>h&&(h=u),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Bl(r,o,e,a,l,c,0),o}function Y_(s,t,e,i,n){let r;if(n===aM(s,t,e,i)>0)for(let o=t;o<e;o+=i)r=J0(o/i|0,s[o],s[o+1],r);else for(let o=e-i;o>=t;o-=i)r=J0(o/i|0,s[o],s[o+1],r);return r&&ea(r,r.next)&&(kl(r),r=r.next),r}function Zr(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(ea(e,e.next)||Ge(e.prev,e,e.next)===0)){if(kl(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Bl(s,t,e,i,n,r,o){if(!s)return;!o&&r&&eM(s,i,n,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?qS(s,i,n,r):YS(s)){t.push(l.i,s.i,c.i),kl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=ZS(Zr(s),t),Bl(s,t,e,i,n,r,2)):o===2&&JS(s,t,e,i,n,r):Bl(Zr(s),t,e,i,n,r,1);break}}}function YS(s){let t=s.prev,e=s,i=s.next;if(Ge(t,e,i)>=0)return!1;let n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(n,r,o),d=Math.min(a,l,c),f=Math.max(n,r,o),u=Math.max(a,l,c),m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&ul(n,a,r,l,o,c,m.x,m.y)&&Ge(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qS(s,t,e,i){let n=s.prev,r=s,o=s.next;if(Ge(n,r,o)>=0)return!1;let a=n.x,l=r.x,c=o.x,h=n.y,d=r.y,f=o.y,u=Math.min(a,l,c),m=Math.min(h,d,f),_=Math.max(a,l,c),p=Math.max(h,d,f),g=mp(u,m,t,e,i),v=mp(_,p,t,e,i),M=s.prevZ,y=s.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=p&&M!==n&&M!==o&&ul(a,h,l,d,c,f,M.x,M.y)&&Ge(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=u&&y.x<=_&&y.y>=m&&y.y<=p&&y!==n&&y!==o&&ul(a,h,l,d,c,f,y.x,y.y)&&Ge(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=p&&M!==n&&M!==o&&ul(a,h,l,d,c,f,M.x,M.y)&&Ge(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=_&&y.y>=m&&y.y<=p&&y!==n&&y!==o&&ul(a,h,l,d,c,f,y.x,y.y)&&Ge(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ZS(s,t){let e=s;do{let i=e.prev,n=e.next.next;!ea(i,n)&&Z_(i,e,e.next,n)&&zl(i,n)&&zl(n,i)&&(t.push(i.i,e.i,n.i),kl(e),kl(e.next),e=s=n),e=e.next}while(e!==s);return Zr(e)}function JS(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sM(o,a)){let l=J_(o,a);o=Zr(o,o.next),l=Zr(l,l.next),Bl(o,t,e,i,n,r,0),Bl(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function KS(s,t,e,i){let n=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=Y_(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(nM(c))}n.sort($S);for(let r=0;r<n.length;r++)e=QS(n[r],e);return e}function $S(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function QS(s,t){let e=jS(s,t);if(!e)return t;let i=J_(e,s);return Zr(i,i.next),Zr(e,e.next)}function jS(s,t){let e=t,i=s.x,n=s.y,r=-1/0,o;if(ea(s,e))return e;do{if(ea(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&q_(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){let d=Math.abs(n-e.y)/(i-e.x);zl(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&tM(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function tM(s,t){return Ge(s.prev,s,t.prev)<0&&Ge(t.next,s,s.next)<0}function eM(s,t,e,i){let n=s;do n.z===0&&(n.z=mp(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,iM(n)}function iM(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,e*=2}while(t>1);return s}function mp(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function nM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function q_(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function ul(s,t,e,i,n,r,o,a){return!(s===o&&t===a)&&q_(s,t,e,i,n,r,o,a)}function sM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!rM(s,t)&&(zl(s,t)&&zl(t,s)&&oM(s,t)&&(Ge(s.prev,s,t.prev)||Ge(s,t.prev,t))||ea(s,t)&&Ge(s.prev,s,s.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ea(s,t){return s.x===t.x&&s.y===t.y}function Z_(s,t,e,i){let n=Oh(Ge(s,t,e)),r=Oh(Ge(s,t,i)),o=Oh(Ge(e,i,s)),a=Oh(Ge(e,i,t));return!!(n!==r&&o!==a||n===0&&Uh(s,e,t)||r===0&&Uh(s,i,t)||o===0&&Uh(e,s,i)||a===0&&Uh(e,t,i))}function Uh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Oh(s){return s>0?1:s<0?-1:0}function rM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Z_(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function zl(s,t){return Ge(s.prev,s,s.next)<0?Ge(s,t,s.next)>=0&&Ge(s,s.prev,t)>=0:Ge(s,t,s.prev)<0||Ge(s,s.next,t)<0}function oM(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function J_(s,t){let e=gp(s.i,s.x,s.y),i=gp(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function J0(s,t,e,i){let n=gp(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function kl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function gp(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function aM(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var _p=class{static triangulate(t,e,i=2){return XS(t,e,i)}},is=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];K0(t),$0(i,t);let o=t.length;e.forEach(K0);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,$0(i,e[l]);let a=_p.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function K0(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function $0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var hr=class s extends hi{constructor(t=new cr([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Te(n,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:lM,M,y=!1,b,w,x,S;if(g){M=g.getSpacedPoints(h),y=!0,f=!1;let $=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,$),w=new H,x=new H,S=new H}f||(p=0,u=0,m=0,_=0);let C=a.extractPoints(c),A=C.shape,D=C.holes;if(!is.isClockWise(A)){A=A.reverse();for(let $=0,ct=D.length;$<ct;$++){let ut=D[$];is.isClockWise(ut)&&(D[$]=ut.reverse())}}function G($){let ut=10000000000000001e-36,k=$[0];for(let xt=1;xt<=$.length;xt++){let Xt=xt%$.length,Ot=$[Xt],Bt=Ot.x-k.x,Kt=Ot.y-k.y,se=Bt*Bt+Kt*Kt,B=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(k.x),Math.abs(k.y)),re=ut*B*B;if(se<=re){$.splice(Xt,1),xt--;continue}k=Ot}}G(A),D.forEach(G);let I=D.length,N=A;for(let $=0;$<I;$++){let ct=D[$];A=A.concat(ct)}function F($,ct,ut){return ct||Qt("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(ct,ut)}let U=A.length;function W($,ct,ut){let k,xt,Xt,Ot=$.x-ct.x,Bt=$.y-ct.y,Kt=ut.x-$.x,se=ut.y-$.y,B=Ot*Ot+Bt*Bt,re=Ot*se-Bt*Kt;if(Math.abs(re)>Number.EPSILON){let Jt=Math.sqrt(B),$t=Math.sqrt(Kt*Kt+se*se),yt=ct.x-Bt/Jt,ge=ct.y+Ot/Jt,Ht=ut.x-se/$t,Yt=ut.y+Kt/$t,P=((Ht-yt)*se-(Yt-ge)*Kt)/(Ot*se-Bt*Kt);k=yt+Ot*P-$.x,xt=ge+Bt*P-$.y;let T=k*k+xt*xt;if(T<=2)return new gt(k,xt);Xt=Math.sqrt(T/2)}else{let Jt=!1;Ot>Number.EPSILON?Kt>Number.EPSILON&&(Jt=!0):Ot<-Number.EPSILON?Kt<-Number.EPSILON&&(Jt=!0):Math.sign(Bt)===Math.sign(se)&&(Jt=!0),Jt?(k=-Bt,xt=Ot,Xt=Math.sqrt(B)):(k=Ot,xt=Bt,Xt=Math.sqrt(B/2))}return new gt(k/Xt,xt/Xt)}let X=[];for(let $=0,ct=N.length,ut=ct-1,k=$+1;$<ct;$++,ut++,k++)ut===ct&&(ut=0),k===ct&&(k=0),X[$]=W(N[$],N[ut],N[k]);let R=[],V,ot=X.concat();for(let $=0,ct=I;$<ct;$++){let ut=D[$];V=[];for(let k=0,xt=ut.length,Xt=xt-1,Ot=k+1;k<xt;k++,Xt++,Ot++)Xt===xt&&(Xt=0),Ot===xt&&(Ot=0),V[k]=W(ut[k],ut[Xt],ut[Ot]);R.push(V),ot=ot.concat(V)}let Mt;if(p===0)Mt=is.triangulateShape(N,D);else{let $=[],ct=[];for(let ut=0;ut<p;ut++){let k=ut/p,xt=u*Math.cos(k*Math.PI/2),Xt=m*Math.sin(k*Math.PI/2)+_;for(let Ot=0,Bt=N.length;Ot<Bt;Ot++){let Kt=F(N[Ot],X[Ot],Xt);Nt(Kt.x,Kt.y,-xt),k===0&&$.push(Kt)}for(let Ot=0,Bt=I;Ot<Bt;Ot++){let Kt=D[Ot];V=R[Ot];let se=[];for(let B=0,re=Kt.length;B<re;B++){let Jt=F(Kt[B],V[B],Xt);Nt(Jt.x,Jt.y,-xt),k===0&&se.push(Jt)}k===0&&ct.push(se)}}Mt=is.triangulateShape($,ct)}let Y=Mt.length,at=m+_;for(let $=0;$<U;$++){let ct=f?F(A[$],ot[$],at):A[$];y?(x.copy(b.normals[0]).multiplyScalar(ct.x),w.copy(b.binormals[0]).multiplyScalar(ct.y),S.copy(M[0]).add(x).add(w),Nt(S.x,S.y,S.z)):Nt(ct.x,ct.y,0)}for(let $=1;$<=h;$++)for(let ct=0;ct<U;ct++){let ut=f?F(A[ct],ot[ct],at):A[ct];y?(x.copy(b.normals[$]).multiplyScalar(ut.x),w.copy(b.binormals[$]).multiplyScalar(ut.y),S.copy(M[$]).add(x).add(w),Nt(S.x,S.y,S.z)):Nt(ut.x,ut.y,d/h*$)}for(let $=p-1;$>=0;$--){let ct=$/p,ut=u*Math.cos(ct*Math.PI/2),k=m*Math.sin(ct*Math.PI/2)+_;for(let xt=0,Xt=N.length;xt<Xt;xt++){let Ot=F(N[xt],X[xt],k);Nt(Ot.x,Ot.y,d+ut)}for(let xt=0,Xt=D.length;xt<Xt;xt++){let Ot=D[xt];V=R[xt];for(let Bt=0,Kt=Ot.length;Bt<Kt;Bt++){let se=F(Ot[Bt],V[Bt],k);y?Nt(se.x,se.y+M[h-1].y,M[h-1].x+ut):Nt(se.x,se.y,d+ut)}}}_t(),At();function _t(){let $=n.length/3;if(f){let ct=0,ut=U*ct;for(let k=0;k<Y;k++){let xt=Mt[k];me(xt[2]+ut,xt[1]+ut,xt[0]+ut)}ct=h+p*2,ut=U*ct;for(let k=0;k<Y;k++){let xt=Mt[k];me(xt[0]+ut,xt[1]+ut,xt[2]+ut)}}else{for(let ct=0;ct<Y;ct++){let ut=Mt[ct];me(ut[2],ut[1],ut[0])}for(let ct=0;ct<Y;ct++){let ut=Mt[ct];me(ut[0]+U*h,ut[1]+U*h,ut[2]+U*h)}}i.addGroup($,n.length/3-$,0)}function At(){let $=n.length/3,ct=0;dt(N,ct),ct+=N.length;for(let ut=0,k=D.length;ut<k;ut++){let xt=D[ut];dt(xt,ct),ct+=xt.length}i.addGroup($,n.length/3-$,1)}function dt($,ct){let ut=$.length;for(;--ut>=0;){let k=ut,xt=ut-1;xt<0&&(xt=$.length-1);for(let Xt=0,Ot=h+p*2;Xt<Ot;Xt++){let Bt=U*Xt,Kt=U*(Xt+1),se=ct+k+Bt,B=ct+xt+Bt,re=ct+xt+Kt,Jt=ct+k+Kt;Ut(se,B,re,Jt)}}}function Nt($,ct,ut){l.push($),l.push(ct),l.push(ut)}function me($,ct,ut){lt($),lt(ct),lt(ut);let k=n.length/3,xt=v.generateTopUV(i,n,k-3,k-2,k-1);ht(xt[0]),ht(xt[1]),ht(xt[2])}function Ut($,ct,ut,k){lt($),lt(ct),lt(k),lt(ct),lt(ut),lt(k);let xt=n.length/3,Xt=v.generateSideWallUV(i,n,xt-6,xt-3,xt-2,xt-1);ht(Xt[0]),ht(Xt[1]),ht(Xt[3]),ht(Xt[1]),ht(Xt[2]),ht(Xt[3])}function lt($){n.push(l[$*3+0]),n.push(l[$*3+1]),n.push(l[$*3+2])}function ht($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return cM(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new cu[n.type]().fromJSON(n)),new s(i,t.options)}},lM={generateTopUV:function(s,t,e,i,n){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new gt(r,o),new gt(a,l),new gt(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],f=t[n*3],u=t[n*3+1],m=t[n*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-d),new gt(f,1-m),new gt(_,1-g)]:[new gt(a,1-l),new gt(h,1-d),new gt(u,1-m),new gt(p,1-g)]}};function cM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class s extends hi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-o;for(let M=0;M<c;M++){let y=M*d-r;m.push(y,-v,0),_.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let M=v+c*g,y=v+c*(g+1),b=v+1+c*(g+1),w=v+1+c*g;u.push(M,y,w),u.push(y,b,w)}this.setIndex(u),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hl=class s extends hi{constructor(t=new cr([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Te(n,3)),this.setAttribute("normal",new Te(r,3)),this.setAttribute("uv",new Te(o,2));function c(h){let d=n.length/3,f=h.extractPoints(e),u=f.shape,m=f.holes;is.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,g=m.length;p<g;p++){let v=m[p];is.isClockWise(v)===!0&&(m[p]=v.reverse())}let _=is.triangulateShape(u,m);for(let p=0,g=m.length;p<g;p++){let v=m[p];u=u.concat(v)}for(let p=0,g=u.length;p<g;p++){let v=u[p];n.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,g=_.length;p<g;p++){let v=_[p],M=v[0]+d,y=v[1]+d,b=v[2]+d;i.push(M,y,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return hM(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let o=e[t.shapes[n]];i.push(o)}return new s(i,t.curveSegments)}};function hM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var Gl=class s extends hi{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new H,f=new H,u=[],m=[],_=[],p=[];for(let g=0;g<=i;g++){let v=[],M=g/i,y=o+M*a,b=t*Math.cos(y),w=Math.sqrt(t*t-b*b),x=0;g===0&&o===0?x=.5/e:g===i&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let C=S/e,A=n+C*r;d.x=-w*Math.cos(A),d.y=b,d.z=w*Math.sin(A),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(C+x,1-M),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let M=h[g][v+1],y=h[g][v],b=h[g+1][v],w=h[g+1][v+1];(g!==0||o>0)&&u.push(M,y,w),(g!==i-1||l<Math.PI)&&u.push(y,b,w)}this.setIndex(u),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vl=class s extends hi{constructor(t=new Ul(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new gt,h=new H,d=[],f=[],u=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(u,2));function _(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),v(),g()}function p(M){h=t.getPointAt(M/e,h);let y=o.normals[M],b=o.binormals[M];for(let w=0;w<=n;w++){let x=w/n*Math.PI*2,S=Math.sin(x),C=-Math.cos(x);l.x=C*y.x+S*b.x,l.y=C*y.y+S*b.y,l.z=C*y.z+S*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let y=1;y<=n;y++){let b=(n+1)*(M-1)+(y-1),w=(n+1)*M+(y-1),x=(n+1)*M+y,S=(n+1)*(M-1)+y;m.push(b,w,S),m.push(w,x,S)}}function v(){for(let M=0;M<=e;M++)for(let y=0;y<=n;y++)c.x=M/e,c.y=y/n,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new cu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function io(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Q0(n))n.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Q0(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ki(s){let t={};for(let e=0;e<s.length;e++){let i=io(s[e]);for(let n in i)t[n]=i[n]}return t}function Q0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function uM(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Fs={clone:io,merge:ki},fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(n.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new H().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Fe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new te().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ia=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ki=class extends rs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ls=class extends Ki{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Vr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Vr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wl=class extends rs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=wu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},uu=class extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fu=class extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ko(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Fh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ur=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},du=class extends ur{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fp,endingEnd:fp}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case dp:r=t,a=2*e-i;break;case pp:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dp:o=t,l=2*i-e;break;case pp:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(i-e)/(n-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,M=(-1-u)*p+(1.5+u)*_+.5*m,y=u*p-u*_;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+v*o[c+b]+M*o[l+b]+y*o[d+b];return r}},pu=class extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},mu=class extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},gu=class extends ur{interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(n-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,u=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=u*f+m*2,v=d[g],M=d[g+1],y=t*f+m*2,b=h[y],w=h[y+1],x=mM(i,e,v,b,n);r[m]=K_(x,_,M,w,p)}return r}};function K_(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function pM(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function mM(s,t,e,i,n){let r=(s-t)/(n-t);for(let o=0;o<8;o++){let a=K_(r,t,e,i,n)-s;if(Math.abs(a)<1e-10)break;let l=pM(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Sn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ko(e,this.TimeBufferType),this.values=ko(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ko(t.times,Array),values:ko(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Fh(t.settings)&&(i.settings={inTangents:ko(t.settings.inTangents,Array),outTangents:ko(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case gl:e=this.InterpolantFactoryMethodDiscrete;break;case Qh:e=this.InterpolantFactoryMethodLinear;break;case kh:e=this.InterpolantFactoryMethodSmooth;break;case up:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return Qh;case this.InterpolantFactoryMethodSmooth:return kh;case this.InterpolantFactoryMethodBezier:return up}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Fh(this.settings)&&(j0(this.settings.inTangents,t),j0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Fh(this.settings)&&(t_(this.settings.inTangents,t),t_(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&nS(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===kh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,f=d-i,u=d+i;for(let m=0;m!==i;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let u=0;u!==i;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Fh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function j0(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function t_(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Qh;var fr=class extends Sn{constructor(t,e,i){super(t,e,i)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=gl;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var _u=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};_u.prototype.ValueTypeName="color";var xu=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};xu.prototype.ValueTypeName="number";var vu=class extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xl=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new vu(this.times,this.values,this.getValueSize(),t)}};Xl.prototype.ValueTypeName="quaternion";Xl.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends Sn{constructor(t,e,i){super(t,e,i)}};dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=gl;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};yu.prototype.ValueTypeName="vector";var Gh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(e_(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!e_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function e_(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Su=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$_=new Su,na=class{constructor(t){this.manager=t!==void 0?t:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ho=new WeakMap,Mu=class extends na{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Gh.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Ho.get(o);d===void 0&&(d=[],Ho.set(o,d)),d.push({onLoad:e,onError:n})}return o}let a=qo("img");function l(){h(),e&&e(this);let d=Ho.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}Ho.delete(this),r.manager.itemEnd(t)}function c(d){h(),n&&n(d),Gh.remove(`image:${t}`);let f=Ho.get(this)||[];for(let u=0;u<f.length;u++){let m=f[u];m.onError&&m.onError(d)}Ho.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Gh.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var Yl=class extends na{constructor(t){super(t)}load(t,e,i,n){let r=new Ti,o=new Mu(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}},ql=class extends $e{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var hp=new Se,i_=new H,n_=new H,Zl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;i_.setFromMatrixPosition(t.matrixWorld),e.position.copy(i_),n_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(n_),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){hp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(hp,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Yo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(hp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bh=new H,zh=new xn,ts=new H,Jl=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bh,zh,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bh,zh,ts.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Bh,zh,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bh,zh,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},or=new H,s_=new gt,r_=new gt,zi=class extends Jl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(or.x,or.y).multiplyScalar(-t/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-t/or.z)}getViewSize(t,e){return this.getViewBounds(t,s_,r_),e.subVectors(r_,s_)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fl*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xp=class extends Zl{constructor(){super(new zi(90,1,.5,500)),this.isPointLightShadow=!0}},Jr=class extends ql{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new xp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Kr=class extends Jl{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vp=class extends Zl{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new vp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Go=-90,Vo=1,ra=class extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new zi(Go,Vo,t,e);n.layers=this.layers,this.add(n);let r=new zi(Go,Vo,t,e);r.layers=this.layers,this.add(r);let o=new zi(Go,Vo,t,e);o.layers=this.layers,this.add(o);let a=new zi(Go,Vo,t,e);a.layers=this.layers,this.add(a);let l=new zi(Go,Vo,t,e);l.layers=this.layers,this.add(l);let c=new zi(Go,Vo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},bu=class extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Kl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=gM.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function gM(){this._document.hidden===!1&&this.reset()}var Xp="\\[\\]\\.:\\/",_M=new RegExp("["+Xp+"]","g"),Yp="[^"+Xp+"]",xM="[^"+Xp.replace("\\.","")+"]",vM=/((?:WC+[\/:])*)/.source.replace("WC",Yp),yM=/(WCOD+)?/.source.replace("WCOD",xM),SM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yp),MM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yp),bM=new RegExp("^"+vM+yM+SM+MM+"$"),TM=["material","materials","bones","map"],yp=class{constructor(t,e,i){let n=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_M,"")}static parseTrackName(t){let e=bM.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);TM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=yp;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YE=new Float32Array(1);var Qp=class Qp{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Qp.prototype.isMatrix2=!0;var Sp=Qp;function qp(s,t,e,i){let n=wM(i);switch(e){case Lp:return s*t;case Lu:return s*t/n.components*n.byteLength;case Du:return s*t/n.components*n.byteLength;case gr:return s*t*2/n.components*n.byteLength;case Nu:return s*t*2/n.components*n.byteLength;case Dp:return s*t*3/n.components*n.byteLength;case qn:return s*t*4/n.components*n.byteLength;case Uu:return s*t*4/n.components*n.byteLength;case rc:case oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ac:case lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fu:case zu:return Math.max(s,16)*Math.max(t,8)/4;case Ou:case Bu:return Math.max(s,8)*Math.max(t,8)/2;case ku:case Hu:case Vu:case Wu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gu:case cc:case Xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ju:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $u:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ju:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case tf:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ef:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case nf:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case of:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case af:case lf:case cf:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hf:case uf:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hc:case ff:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wM(s){switch(s){case rn:case Rp:return{byteLength:1,components:1};case ca:case Cp:case ui:return{byteLength:2,components:1};case Pu:case Iu:return{byteLength:2,components:4};case Yn:case Cu:case Un:return{byteLength:4,components:1};case Pp:case Ip:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function vx(){let s=null,t=!1,e=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function AM(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ST=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ET=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,AT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:RM,alphahash_pars_fragment:CM,alphamap_fragment:PM,alphamap_pars_fragment:IM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:NM,aomap_pars_fragment:UM,batching_pars_vertex:OM,batching_vertex:FM,begin_vertex:BM,beginnormal_vertex:zM,bsdfs:kM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:YM,color_fragment:qM,color_pars_fragment:ZM,color_pars_vertex:JM,color_vertex:KM,common:$M,defaultnormal_vertex:QM,displacementmap_pars_vertex:jM,displacementmap_vertex:tb,emissivemap_fragment:eb,emissivemap_pars_fragment:ib,colorspace_fragment:nb,colorspace_pars_fragment:sb,envmap_fragment:rb,envmap_common_pars_fragment:ob,envmap_pars_fragment:ab,envmap_pars_vertex:lb,envmap_physical_pars_fragment:vb,envmap_vertex:cb,fog_vertex:hb,fog_pars_vertex:ub,fog_fragment:fb,fog_pars_fragment:db,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:_b,lights_pars_begin:xb,lights_toon_fragment:yb,lights_toon_pars_fragment:Sb,lights_phong_fragment:Mb,lights_phong_pars_fragment:bb,lights_physical_fragment:Tb,lights_physical_pars_fragment:wb,lights_fragment_begin:Eb,lights_fragment_maps:Ab,lights_fragment_end:Rb,lightprobes_pars_fragment:Cb,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Ib,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Db,map_fragment:Nb,map_pars_fragment:Ub,map_particle_fragment:Ob,map_particle_pars_fragment:Fb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:zb,morphinstance_vertex:kb,morphcolor_vertex:Hb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Vb,morphtarget_vertex:Wb,normal_fragment_begin:Xb,normal_fragment_maps:Yb,normal_pars_fragment:qb,normal_pars_vertex:Zb,normal_vertex:Jb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:tT,opaque_fragment:eT,packing:iT,premultiplied_alpha_fragment:nT,project_vertex:sT,dithering_fragment:rT,dithering_pars_fragment:oT,roughnessmap_fragment:aT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:hT,shadowmap_vertex:uT,shadowmask_pars_fragment:fT,skinbase_vertex:dT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:_T,specularmap_pars_fragment:xT,tonemapping_fragment:vT,tonemapping_pars_fragment:yT,transmission_fragment:ST,transmission_pars_fragment:MT,uv_pars_fragment:bT,uv_pars_vertex:TT,uv_vertex:wT,worldpos_vertex:ET,background_vert:AT,background_frag:RT,backgroundCube_vert:CT,backgroundCube_frag:PT,cube_vert:IT,cube_frag:LT,depth_vert:DT,depth_frag:NT,distance_vert:UT,distance_frag:OT,equirect_vert:FT,equirect_frag:BT,linedashed_vert:zT,linedashed_frag:kT,meshbasic_vert:HT,meshbasic_frag:GT,meshlambert_vert:VT,meshlambert_frag:WT,meshmatcap_vert:XT,meshmatcap_frag:YT,meshnormal_vert:qT,meshnormal_frag:ZT,meshphong_vert:JT,meshphong_frag:KT,meshphysical_vert:$T,meshphysical_frag:QT,meshtoon_vert:jT,meshtoon_frag:t1,points_vert:e1,points_frag:i1,shadow_vert:n1,shadow_frag:s1,sprite_vert:r1,sprite_frag:o1},It={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},cs={basic:{uniforms:ki([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:ki([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:ki([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:ki([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:ki([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new qt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:ki([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:ki([It.points,It.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:ki([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:ki([It.common,It.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:ki([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:ki([It.sprite,It.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:ki([It.common,It.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:ki([It.lights,It.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};cs.physical={uniforms:ki([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var df={r:0,b:0,g:0},a1=new Se,yx=new te;yx.set(-1,0,0,0,1,0,0,0,1);function l1(s,t,e,i,n,r){let o=new qt(0),a=n===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=t.get(M,y)}return M}function m(v){let M=!1,y=u(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),M=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,M){let y=u(M);y&&y.isCubeTexture?(c===void 0&&(c=new jt(new os(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:io(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a1.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yx),c.material.toneMapped=ue.getTransfer(y.colorSpace)!==ve,(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new jt(new Is(2,2),new Ze({name:"BackgroundMaterial",uniforms:io(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(df,Wp(s)),e.buffers.color.setClear(df.r,df.g,df.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function c1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,o=!1;function a(D,L,G,I,N){let F=!1,U=d(D,I,G,L);r!==U&&(r=U,c(r.object)),F=u(D,I,G,N),F&&m(D,I,G,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(D,L,G,I),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,L,G,I){let N=I.wireframe===!0,F=i[L.id];F===void 0&&(F={},i[L.id]=F);let U=D.isInstancedMesh===!0?D.id:0,W=F[U];W===void 0&&(W={},F[U]=W);let X=W[G.id];X===void 0&&(X={},W[G.id]=X);let R=X[N];return R===void 0&&(R=f(l()),X[N]=R),R}function f(D){let L=[],G=[],I=[];for(let N=0;N<e;N++)L[N]=0,G[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,L,G,I){let N=r.attributes,F=L.attributes,U=0,W=G.getAttributes();for(let X in W)if(W[X].location>=0){let V=N[X],ot=F[X];if(ot===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor)),V===void 0||V.attribute!==ot||ot&&V.data!==ot.data)return!0;U++}return r.attributesNum!==U||r.index!==I}function m(D,L,G,I){let N={},F=L.attributes,U=0,W=G.getAttributes();for(let X in W)if(W[X].location>=0){let V=F[X];V===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));let ot={};ot.attribute=V,V&&V.data&&(ot.data=V.data),N[X]=ot,U++}r.attributes=N,r.attributesNum=U,r.index=I}function _(){let D=r.newAttributes;for(let L=0,G=D.length;L<G;L++)D[L]=0}function p(D){g(D,0)}function g(D,L){let G=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;G[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),N[D]!==L&&(s.vertexAttribDivisor(D,L),N[D]=L)}function v(){let D=r.newAttributes,L=r.enabledAttributes;for(let G=0,I=L.length;G<I;G++)L[G]!==D[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function M(D,L,G,I,N,F,U){U===!0?s.vertexAttribIPointer(D,L,G,N,F):s.vertexAttribPointer(D,L,G,I,N,F)}function y(D,L,G,I){_();let N=I.attributes,F=G.getAttributes(),U=L.defaultAttributeValues;for(let W in F){let X=F[W];if(X.location>=0){let R=N[W];if(R===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let V=R.normalized,ot=R.itemSize,Mt=t.get(R);if(Mt===void 0)continue;let Y=Mt.buffer,at=Mt.type,_t=Mt.bytesPerElement,At=at===s.INT||at===s.UNSIGNED_INT||R.gpuType===Cu;if(R.isInterleavedBufferAttribute){let dt=R.data,Nt=dt.isInterleavedBuffer===!0?dt.stride:dt.itemSize,me=R.offset;if(dt.isInstancedInterleavedBuffer||dt.isInstancedBufferAttribute){for(let Ut=0;Ut<X.locationSize;Ut++)g(X.location+Ut,dt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ut=0;Ut<X.locationSize;Ut++)p(X.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Ut=0;Ut<X.locationSize;Ut++)M(X.location+Ut,ot/X.locationSize,at,V,Nt*_t,(me+ot/X.locationSize*Ut)*_t,At)}else{if(R.isInstancedBufferAttribute){for(let dt=0;dt<X.locationSize;dt++)g(X.location+dt,R.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let dt=0;dt<X.locationSize;dt++)p(X.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let dt=0;dt<X.locationSize;dt++)M(X.location+dt,ot/X.locationSize,at,V,ot*_t,ot/X.locationSize*dt*_t,At)}}else if(U!==void 0){let V=U[W];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(X.location,V);break;case 3:s.vertexAttrib3fv(X.location,V);break;case 4:s.vertexAttrib4fv(X.location,V);break;default:s.vertexAttrib1fv(X.location,V)}}}}v()}function b(){C();for(let D in i){let L=i[D];for(let G in L){let I=L[G];for(let N in I){let F=I[N];for(let U in F)h(F[U].object),delete F[U];delete I[N]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let L=i[D.id];for(let G in L){let I=L[G];for(let N in I){let F=I[N];for(let U in F)h(F[U].object),delete F[U];delete I[N]}}delete i[D.id]}function x(D){for(let L in i){let G=i[L];for(let I in G){let N=G[I];if(N[D.id]===void 0)continue;let F=N[D.id];for(let U in F)h(F[U].object),delete F[U];delete N[D.id]}}}function S(D){for(let L in i){let G=i[L],I=D.isInstancedMesh===!0?D.id:0,N=G[I];if(N!==void 0){for(let F in N){let U=N[F];for(let W in U)h(U[W].object),delete U[W];delete N[F]}delete G[I],Object.keys(G).length===0&&delete i[L]}}}function C(){A(),o=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function h1(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function u1(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(x){return!(x!==qn&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==rn&&x!==Un&&!S&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:w}}function f1(s){let t=this,e=null,i=0,n=!1,r=!1,o=new Xn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!n||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:i,M=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,M,u);for(let b=0;b!==M;++b)y[b]=e[b];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=u;M!==_;++M,y+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var pc=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Rl(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new os(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wi,blending:Ds});r.uniforms.tEquirect.value=e;let o=new jt(n,r),a=e.minFilter;return e.minFilter===Ns&&(e.minFilter=ci),new ra(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Q_=256,d1=3,p1=20,Sx=256,Mx=16,m1=3,g1=new H,_1=new qt,ua=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ra(1,10,null),this._boxMesh=new jt(new os(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:o=256,position:a=g1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(_1));let p=new ra(i,n,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Q_,kp(t))}_fromTexture(t,e){t.mapping===jr||t.mapping===la?this._setSize(t.image.length===0?Q_:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=j_(t,!1,!1),i=Math.log2(t)-d1;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=j_(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===jr||t.mapping===la?(this._cubemapMaterial===null&&(this._cubemapMaterial=ex()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tx()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=x1(),this._integrationMaterial=v1());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Mx);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-m1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Sx*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=y1());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function j_(s,t,e){return new pc(s,{minFilter:Ns,generateMipmaps:t,type:ui,colorSpace:_l,depthBuffer:e})}function mc(s,t,e){return new Ze({name:s,uniforms:t,vertexShader:ae.cube_vert,fragmentShader:e,side:wi,blending:Ds,depthTest:!1,depthWrite:!1})}function x1(){return mc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function v1(){return mc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function y1(){return mc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${p1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function tx(){return mc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ex(){return mc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function S1(s){let t=new WeakMap,e=new WeakMap,i=null;function n(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Eu||u===Au)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new pc(m.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Eu||u===Au,_=u===jr||u===la;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new ua(s)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new ua(s)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===Eu?f.mapping=jr:u===Au&&(f.mapping=la),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function M1(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Vr("WebGLRenderer: "+i+" extension not supported."),n}}}function b1(s,t,e,i){let n={},r=new WeakMap,o=new FinalizationRegistry(m=>delete n[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete n[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return n[_.id]!==void 0||(_.addEventListener("dispose",a),n[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,M=p.count>=65535?bl:Ml,y=new M(Math.ceil(v/3)*6,1),b=y.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,C=0;S<v;S+=3){let A=x[S+0],D=x[S+1],L=x[S+2];b[C++]=A,b[C++]=D,b[C++]=D,b[C++]=L,b[C++]=L,b[C++]=A}}else{g=p.version;for(let x=0,S=0;x<v;x+=3){let C=x+0,A=x+1,D=x+2;b[S++]=C,b[S++]=A,b[S++]=A,b[S++]=D,b[S++]=D,b[S++]=C}}y.version=g;let w=r.get(m);w&&t.remove(w),r.set(m,y)}function f(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function u(){for(let m in n){let _=n[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function T1(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(i,f,r,d*o,u),e.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function w1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function E1(s,t,e){let i=new WeakMap,n=new Fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let C=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;u===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*b*4*d),x=new vl(w,y,b,d);x.type=Un,x.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let D=p[A],L=g[A],G=v[A],I=y*b*4*A;for(let N=0;N<D.count;N++){let F=N*S;u===!0&&(n.fromBufferAttribute(D,N),w[I+F+0]=n.x,w[I+F+1]=n.y,w[I+F+2]=n.z,w[I+F+3]=0),m===!0&&(n.fromBufferAttribute(L,N),w[I+F+4]=n.x,w[I+F+5]=n.y,w[I+F+6]=n.z,w[I+F+7]=0),_===!0&&(n.fromBufferAttribute(G,N),w[I+F+8]=n.x,w[I+F+9]=n.y,w[I+F+10]=n.z,w[I+F+11]=G.itemSize===4?n.w:1)}}f={count:d,texture:x,size:new gt(y,b)},i.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function A1(s,t,e,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var R1={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[Qr]:"NEUTRAL_TONE_MAPPING",[ic]:"CUSTOM_TONE_MAPPING"};function C1(s,t,e,i,n,r){let o=new Ke(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new hi;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));let d=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new jt(h,d),u=new Kr(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,M=[],y=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){M=b,y=M.length>0&&M[0].isRenderPass===!0;let w=o.width,x=o.height;M.length>0&&a===null&&(a=new Ke(w,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(w,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ps(w,x),r===!0&&(c.format=Us,c.type=to)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){let A=M[C];A.setSize&&A.setSize(w,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,w){if(p||b.toneMapping===as&&M.length===0)return!1;if(v=w,w!==null){let x=w.width,S=w.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=as,!0},this.hasRenderPass=function(){return y},this.end=function(b,w){b.toneMapping=g,p=!0;let x=o,S=a;for(let C=0;C<M.length;C++){let A=M[C];A.enabled!==!1&&(A.render(b,S,x,w),A.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,d.defines={},ue.getTransfer(m)===ve&&(d.defines.SRGB_TRANSFER="");let C=R1[_];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var bx=new Ti,Tx=new Ps(1,1),wx=new Pl(1),Ex=new vl,Ax=new eu,Rx=new Rl,ix=[],nx=[],sx=new Float32Array(16),rx=new Float32Array(9),ox=new Float32Array(4);function fa(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=ix[n];if(r===void 0&&(r=new Float32Array(n),ix[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fi(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function di(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function gf(s,t){let e=nx[t];e===void 0&&(e=new Int32Array(t),nx[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function P1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function I1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fi(e,t))return;s.uniform2fv(this.addr,t),di(e,t)}}function L1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fi(e,t))return;s.uniform3fv(this.addr,t),di(e,t)}}function D1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fi(e,t))return;s.uniform4fv(this.addr,t),di(e,t)}}function N1(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(fi(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),di(e,t)}else{if(fi(e,i))return;ox.set(i),s.uniformMatrix2fv(this.addr,!1,ox),di(e,i)}}function U1(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(fi(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),di(e,t)}else{if(fi(e,i))return;rx.set(i),s.uniformMatrix3fv(this.addr,!1,rx),di(e,i)}}function O1(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(fi(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),di(e,t)}else{if(fi(e,i))return;sx.set(i),s.uniformMatrix4fv(this.addr,!1,sx),di(e,i)}}function F1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function B1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fi(e,t))return;s.uniform2iv(this.addr,t),di(e,t)}}function z1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fi(e,t))return;s.uniform3iv(this.addr,t),di(e,t)}}function k1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fi(e,t))return;s.uniform4iv(this.addr,t),di(e,t)}}function H1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function G1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fi(e,t))return;s.uniform2uiv(this.addr,t),di(e,t)}}function V1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fi(e,t))return;s.uniform3uiv(this.addr,t),di(e,t)}}function W1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fi(e,t))return;s.uniform4uiv(this.addr,t),di(e,t)}}function _f(s){return s.version===0&&(s.compareFunction=Op,s.needsUpdate=!0),s}function X1(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=_f(Tx):r=bx,e.setTexture2D(t||r,n)}function Y1(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ax,n)}function q1(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=_f(wx):r=Rx,e.setTextureCube(t||r,n)}function Z1(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ex,n)}function J1(s){switch(s){case 5126:return P1;case 35664:return I1;case 35665:return L1;case 35666:return D1;case 35674:return N1;case 35675:return U1;case 35676:return O1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return k1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Z1}}function K1(s,t){s.uniform1fv(this.addr,t)}function $1(s,t){let e=fa(t,this.size,2);s.uniform2fv(this.addr,e)}function Q1(s,t){let e=fa(t,this.size,3);s.uniform3fv(this.addr,e)}function j1(s,t){let e=fa(t,this.size,4);s.uniform4fv(this.addr,e)}function tw(s,t){let e=fa(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ew(s,t){let e=fa(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function iw(s,t){let e=fa(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function nw(s,t){s.uniform1iv(this.addr,t)}function sw(s,t){s.uniform2iv(this.addr,t)}function rw(s,t){s.uniform3iv(this.addr,t)}function ow(s,t){s.uniform4iv(this.addr,t)}function aw(s,t){s.uniform1uiv(this.addr,t)}function lw(s,t){s.uniform2uiv(this.addr,t)}function cw(s,t){s.uniform3uiv(this.addr,t)}function hw(s,t){s.uniform4uiv(this.addr,t)}function uw(s,t,e){let i=this.cache,n=t.length,r=gf(e,n);fi(i,r)||(s.uniform1iv(this.addr,r),di(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=_f(Tx):o=bx;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function fw(s,t,e){let i=this.cache,n=t.length,r=gf(e,n);fi(i,r)||(s.uniform1iv(this.addr,r),di(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Ax,r[o])}function dw(s,t,e){let i=this.cache,n=t.length,r=gf(e,n);fi(i,r)||(s.uniform1iv(this.addr,r),di(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=_f(wx):o=Rx;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,r[a])}function pw(s,t,e){let i=this.cache,n=t.length,r=gf(e,n);fi(i,r)||(s.uniform1iv(this.addr,r),di(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Ex,r[o])}function mw(s){switch(s){case 5126:return K1;case 35664:return $1;case 35665:return Q1;case 35666:return j1;case 35674:return tw;case 35675:return ew;case 35676:return iw;case 5124:case 35670:return nw;case 35667:case 35671:return sw;case 35668:case 35672:return rw;case 35669:case 35673:return ow;case 5125:return aw;case 36294:return lw;case 36295:return cw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return pw}}var em=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=J1(e.type)}},im=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mw(e.type)}},nm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},jp=/(\w+)(\])?(\[|\.)?/g;function ax(s,t){s.seq.push(t),s.map[t.id]=t}function gw(s,t,e){let i=s.name,n=i.length;for(jp.lastIndex=0;;){let r=jp.exec(i),o=jp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){ax(e,c===void 0?new em(a,s,t):new im(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new nm(a),ax(e,d)),e=d}}}var ha=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);gw(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function lx(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var _w=37297,xw=0;function vw(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var cx=new te;function yw(s){ue._getMatrix(cx,ue.workingColorSpace,s);let t=`mat3( ${cx.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case xl:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function hx(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+vw(s.getShaderSource(t),a)}else return r}function Sw(s,t){let e=yw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Mw={[Ql]:"Linear",[jl]:"Reinhard",[tc]:"Cineon",[ec]:"ACESFilmic",[nc]:"AgX",[Qr]:"Neutral",[ic]:"Custom"};function bw(s,t){let e=Mw[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pf=new H;function Tw(){ue.getLuminanceCoefficients(pf);let s=pf.x.toFixed(4),t=pf.y.toFixed(4),e=pf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dc).join(`
`)}function Ew(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Aw(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function dc(s){return s!==""}function ux(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fx(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function sm(s){return s.replace(Rw,Cw)}function Cw(s,t){let e=ae[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return sm(e)}var Pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dx(s){return s.replace(Pw,Iw)}function Iw(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function px(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Lw={[$l]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function Dw(s){return Lw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nw={[la]:"ENVMAP_MODE_REFRACTION"};function Uw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Nw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ow={[wu]:"ENVMAP_BLENDING_MULTIPLY",[A_]:"ENVMAP_BLENDING_MIX",[R_]:"ENVMAP_BLENDING_ADD"};function Fw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ow[s.combine]||"ENVMAP_BLENDING_NONE"}function Bw(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Dw(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Uw(e),d=Fw(e),f=ww(e),u=Ew(r),m=n.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(dc).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(dc).join(`
`),p.length>0&&(p+=`
`)):(_=[px(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dc).join(`
`),p=[px(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?ae.tonemapping_pars_fragment:"",e.toneMapping!==as?bw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Sw("linearToOutputTexel",e.outputColorSpace),Tw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dc).join(`
`)),o=sm(o),o=ux(o,e),o=fx(o,e),a=sm(a),a=ux(a,e),a=fx(a,e),o=dx(o),a=dx(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,M=g+p+a,y=lx(n,n.VERTEX_SHADER,v),b=lx(n,n.FRAGMENT_SHADER,M);n.attachShader(m,y),n.attachShader(m,b),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function w(A){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(m)||"",L=n.getShaderInfoLog(y)||"",G=n.getShaderInfoLog(b)||"",I=D.trim(),N=L.trim(),F=G.trim(),U=!0,W=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,m,y,b);else{let X=hx(n,y,"vertex"),R=hx(n,b,"fragment");Qt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+X+`
`+R)}else I!==""?Zt("WebGLProgram: Program Info Log:",I):(N===""||F==="")&&(W=!1);W&&(A.diagnostics={runnable:U,programLog:I,vertexShader:{log:N,prefix:_},fragmentShader:{log:F,prefix:p}})}n.deleteShader(y),n.deleteShader(b),x=new ha(n,m),S=Aw(n,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(m,_w)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xw++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=b,this}var zw=0,rm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new om(t),e.set(t,i)),i}},om=class{constructor(t){this.id=zw++,this.code=t,this.usedTimes=0}};function kw(s){return s===gr||s===cc||s===hc}function Hw(s,t,e,i,n,r){let o=new yl,a=new rm,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,C,A,D,L){let G=A.fog,I=D.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=t.get(x.envMap||N,F),W=f[x.type],X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,V=R!==void 0?R.length:0,ot=0;I.morphAttributes.position!==void 0&&(ot=1),I.morphAttributes.normal!==void 0&&(ot=2),I.morphAttributes.color!==void 0&&(ot=3);let Mt,Y,at,_t;if(W){let nt=cs[W];Mt=nt.vertexShader,Y=nt.fragmentShader}else{Mt=x.vertexShader,Y=x.fragmentShader;let nt=a.getVertexShaderStage(x),Lt=a.getFragmentShaderStage(x);a.update(x,nt,Lt),at=nt.id,_t=Lt.id}let At=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Nt=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Ut=!!x.map,lt=!!x.matcap,ht=!!U,$=ht&&U.isPMREMTexture===!0,ct=!!x.aoMap,ut=!!x.lightMap,k=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Xt=!!x.displacementMap,Ot=!!x.emissiveMap,Bt=!!x.metalnessMap,Kt=!!x.roughnessMap,se=x.anisotropy>0,B=x.clearcoat>0,re=x.diffuseRoughness>0,Jt=x.dispersion>0,$t=x.retroreflectivity>0,yt=x.iridescence>0,ge=x.sheen>0,Ht=x.transmission>0,Yt=se&&!!x.anisotropyMap,P=B&&!!x.clearcoatMap,T=B&&!!x.clearcoatNormalMap,Z=B&&!!x.clearcoatRoughnessMap,ft=re&&!!x.diffuseRoughnessMap,st=yt&&!!x.iridescenceMap,St=yt&&!!x.iridescenceThicknessMap,Et=ge&&!!x.sheenColorMap,J=ge&&!!x.sheenRoughnessMap,et=!!x.specularMap,vt=!!x.specularColorMap,O=!!x.specularIntensityMap,tt=Ht&&!!x.transmissionMap,j=Ht&&!!x.thicknessMap,bt=!!x.gradientMap,mt=!!x.alphaMap,Tt=x.alphaTest>0,pt=!!x.alphaHash,wt=!!x.extensions,rt=as;x.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(rt=s.toneMapping);let it=$?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Rt={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:Mt,fragmentShader:Y,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:_t,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&D.instanceColor!==null,instancingMorph:Nt&&D.morphTexture!==null,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:lt,envMap:ht,envMapMode:ht&&U.mapping,envMapPMREM:$,envMapMaxLod:$?it.length-1:null,envMapSize:$?it[0].width:null,aoMap:ct,lightMap:ut,bumpMap:k,normalMap:xt,displacementMap:Xt,emissiveMap:Ot,normalMapObjectSpace:xt&&x.normalMapType===I_,normalMapTangentSpace:xt&&x.normalMapType===uc,packedNormalMap:xt&&x.normalMapType===uc&&kw(x.normalMap.format),metalnessMap:Bt,roughnessMap:Kt,anisotropy:se,anisotropyMap:Yt,clearcoat:B,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:re,diffuseRoughnessMap:ft,dispersion:Jt,retroreflection:$t,iridescence:yt,iridescenceMap:st,iridescenceThicknessMap:St,sheen:ge,sheenColorMap:Et,sheenRoughnessMap:J,specularMap:et,specularColorMap:vt,specularIntensityMap:O,transmission:Ht,transmissionMap:tt,thicknessMap:j,gradientMap:bt,opaque:x.transparent===!1&&x.blending===aa&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:Tt,alphaHash:pt,combine:x.combine,mapUv:Ut&&u(x.map.channel),aoMapUv:ct&&u(x.aoMap.channel),lightMapUv:ut&&u(x.lightMap.channel),bumpMapUv:k&&u(x.bumpMap.channel),normalMapUv:xt&&u(x.normalMap.channel),displacementMapUv:Xt&&u(x.displacementMap.channel),emissiveMapUv:Ot&&u(x.emissiveMap.channel),metalnessMapUv:Bt&&u(x.metalnessMap.channel),roughnessMapUv:Kt&&u(x.roughnessMap.channel),anisotropyMapUv:Yt&&u(x.anisotropyMap.channel),clearcoatMapUv:P&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:st&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:St&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&u(x.sheenRoughnessMap.channel),specularMapUv:et&&u(x.specularMap.channel),specularColorMapUv:vt&&u(x.specularColorMap.channel),specularIntensityMapUv:O&&u(x.specularIntensityMap.channel),transmissionMapUv:tt&&u(x.transmissionMap.channel),thicknessMapUv:j&&u(x.thicknessMap.channel),alphaMapUv:mt&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||se),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ut||mt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ot,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===wi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:wt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&x.extensions.multiDraw===!0||me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let S=f[x.type],C;if(S){let A=cs[S];C=Fs.clone(A.uniforms)}else C=x.uniforms;return C}function M(x,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new Bw(s,S,x,n),c.push(C),h.set(S,C)),C}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:w}}function Gw(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Vw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function mx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gx(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,_,p,g){let v=s[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},s[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),t++,v}function l(f,u,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let M=a(f,u,m,_,p,g);m.transmission>0?i.push(M):m.transparent===!0?n.push(M):e.push(M)}function c(f,u,m,_,p,g){let v=a(f,u,m,_,p,g);m.transmission>0?i.unshift(v):m.transparent===!0?n.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||Vw),i.length>1&&i.sort(u||mx),n.length>1&&n.sort(u||mx)}function d(){for(let f=t,u=s.length;f<u;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function Ww(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new gx,s.set(i,[o])):n>=r.length?(o=new gx,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new qt};break;case"SpotLight":e={position:new H,direction:new H,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function Yw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var qw=0;function Zw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Jw(s){let t=new Xw,e=Yw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let n=new H,r=new Se,o=new Se;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,v=0,M=0,y=0,b=0,w=0,x=0,S=0,C=0,A=0;c.sort(Zw);for(let L=0,G=c.length;L<G;L++){let I=c[L],N=I.color,F=I.intensity,U=I.distance,W=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===gr?W=I.shadow.map.texture:W=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*F,d+=N.g*F,f+=N.b*F;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],F);A++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,V=e.get(I);V.shadowIntensity=R.intensity,V.shadowBias=R.bias,V.shadowNormalBias=R.normalBias,V.shadowRadius=R.radius,V.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[m]=V,i.sunShadowMap[m]=W;let ot=R.getViewportCount();for(let Mt=0;Mt<ot;Mt++)i.sunShadowMatrix[_+Mt]=R.getMatrix(Mt),i.sunShadowCascade[_+Mt]=R._cascadeData[Mt];_+=ot,m++}i.sun[u]=X,u++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,V=e.get(I);V.shadowIntensity=R.intensity,V.shadowBias=R.bias,V.shadowNormalBias=R.normalBias,V.shadowRadius=R.radius,V.shadowMapSize=R.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=I.shadow.matrix,b++}i.directional[p]=X,p++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(N).multiplyScalar(F),X.distance=U,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[v]=X;let R=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,R.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[v]=R.matrix,I.castShadow){let V=e.get(I);V.shadowIntensity=R.intensity,V.shadowBias=R.bias,V.shadowNormalBias=R.normalBias,V.shadowRadius=R.radius,V.shadowMapSize=R.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=W,x++}v++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(N).multiplyScalar(F),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=X,M++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let R=I.shadow,V=e.get(I);V.shadowIntensity=R.intensity,V.shadowBias=R.bias,V.shadowNormalBias=R.normalBias,V.shadowRadius=R.radius,V.shadowMapSize=R.mapSize,V.shadowCameraNear=R.camera.near,V.shadowCameraFar=R.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=X,g++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(F),X.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[y]=X,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=It.LTC_FLOAT_1,i.rectAreaLTC2=It.LTC_FLOAT_2):(i.rectAreaLTC1=It.LTC_HALF_1,i.rectAreaLTC2=It.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.sunLength!==u||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==M||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==A)&&(i.sun.length=u,i.directional.length=p,i.spot.length=v,i.rectArea.length=M,i.point.length=g,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,D.sunLength=u,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=M,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=A,i.version=qw++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),f++}else if(y.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let b=i.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function _x(s){let t=new Jw(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Kw(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new _x(s),t.set(n,[a])):r>=o.length?(a=new _x(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var $w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jw=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],tE=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xx=new Se,fc=new H,tm=new H;function eE(s,t,e){let i=new lr,n=new gt,r=new gt,o=new Fe,a=new uu,l=new fu,c={},h=e.maxTextureSize,d={[pr]:wi,[wi]:pr,[Nn]:Nn},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:$w,fragmentShader:Qw}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new hi;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new jt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let g=this.type;this.render=function(w,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===l_&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$l);let C=s.getRenderTarget(),A=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ds),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let G=g!==this.type;G&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(N=>N.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,N=w.length;I<N;I++){let F=w[I],U=F.shadow;if(U===void 0){Zt("WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);let W=U.getFrameExtents();n.multiply(W),r.copy(U.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/W.x),n.x=r.x*W.x,U.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/W.y),n.y=r.y*W.y,U.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=X,U.map===null||G===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===oa){if(F.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ke(n.x,n.y,{format:gr,type:ui,minFilter:ci,magFilter:ci,generateMipmaps:!1}),U.map.texture.name=F.name+".shadowMap",U.map.depthTexture=new Ps(n.x,n.y,Un),U.map.depthTexture.name=F.name+".shadowMapDepth",U.map.depthTexture.format=Rs,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=xi,U.map.depthTexture.magFilter=xi}else F.isPointLight?(U.map=new pc(n.x),U.map.depthTexture=new Pl(n.x,Yn)):(U.map=new Ke(n.x,n.y),U.map.depthTexture=new Ps(n.x,n.y,Yn)),U.map.depthTexture.name=F.name+".shadowMap",U.map.depthTexture.format=Rs,this.type===$l?(U.map.depthTexture.compareFunction=X?Up:Np,U.map.depthTexture.minFilter=ci,U.map.depthTexture.magFilter=ci):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=xi,U.map.depthTexture.magFilter=xi);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==n.x||U.map.height!==n.y)&&U.map.setSize(n.x,n.y);let R=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();F.isPointLight!==!0&&U.updateMatrices(F,S);let V=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let ot=0;ot<R;ot++){let Mt=U.getCamera(ot);if(F.isPointLight){let Y=U.camera,at=U.matrix,_t=F.distance||Y.far;_t!==Y.far&&(Y.far=_t,Y.updateProjectionMatrix()),fc.setFromMatrixPosition(F.matrixWorld),Y.position.copy(fc),tm.copy(Y.position),tm.add(jw[ot]),Y.up.copy(tE[ot]),Y.lookAt(tm),Y.updateMatrixWorld(),at.makeTranslation(-fc.x,-fc.y,-fc.z),xx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),U._frustum.setFromProjectionMatrix(xx,Y.coordinateSystem,Y.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,ot),s.clear();else{ot===0&&(s.setRenderTarget(U.map),s.clear());let Y=U.getViewport(ot);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(o)}i=U.getFrustum(ot),y(x,S,Mt,F,V,this.type)}U.isPointLightShadow!==!0&&this.type===oa&&v(U,S),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(C,A,D)};function v(w,x){let S=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ke(n.x,n.y,{format:gr,type:ui}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,S,f,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,S,u,_,null)}function M(w,x,S,C){let A=null,D=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=A.uuid,G=x.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let N=I[G];N===void 0&&(N=A.clone(),I[G]=N,x.addEventListener("dispose",b)),A=N}if(A.visible=x.visible,A.wireframe=x.wireframe,C===oa?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=s.properties.get(A);L.light=S}return A}function y(w,x,S,C,A,D){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===oa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=t.update(w),N=w.material;if(Array.isArray(N)){let F=I.groups;for(let U=0,W=F.length;U<W;U++){let X=F[U],R=N[X.materialIndex];if(R&&R.visible){let V=M(w,R,C,D);w.onBeforeShadow(s,w,x,S,I,V,X),s.renderBufferDirect(S,null,I,V,w,X),w.onAfterShadow(s,w,x,S,I,V,X)}}}else if(N.visible){let F=M(w,N,C,D);w.onBeforeShadow(s,w,x,S,I,F,null),s.renderBufferDirect(S,null,I,F,w,null),w.onAfterShadow(s,w,x,S,I,F,null)}}let G=w.children;for(let I=0,N=G.length;I<N;I++)y(G[I],x,S,C,A,D)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let C=c[S],A=w.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function iE(s,t){function e(){let O=!1,tt=new Fe,j=null,bt=new Fe(0,0,0,0);return{setMask:function(mt){j!==mt&&!O&&(s.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){O=mt},setClear:function(mt,Tt,pt,wt,rt){rt===!0&&(mt*=wt,Tt*=wt,pt*=wt),tt.set(mt,Tt,pt,wt),bt.equals(tt)===!1&&(s.clearColor(mt,Tt,pt,wt),bt.copy(tt))},reset:function(){O=!1,j=null,bt.set(-1,0,0,0)}}}function i(){let O=!1,tt=!1,j=null,bt=null,mt=null;return{setReversed:function(Tt){if(tt!==Tt){let pt=t.get("EXT_clip_control");Tt?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),tt=Tt;let wt=mt;mt=null,this.setClear(wt)}},getReversed:function(){return tt},setTest:function(Tt){Tt?dt(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(Tt){j!==Tt&&!O&&(s.depthMask(Tt),j=Tt)},setFunc:function(Tt){if(tt&&(Tt=G_[Tt]),bt!==Tt){switch(Tt){case Vh:s.depthFunc(s.NEVER);break;case Wh:s.depthFunc(s.ALWAYS);break;case Xh:s.depthFunc(s.LESS);break;case Xo:s.depthFunc(s.LEQUAL);break;case Yh:s.depthFunc(s.EQUAL);break;case qh:s.depthFunc(s.GEQUAL);break;case Zh:s.depthFunc(s.GREATER);break;case Jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=Tt}},setLocked:function(Tt){O=Tt},setClear:function(Tt){mt!==Tt&&(mt=Tt,tt&&(Tt=1-Tt),s.clearDepth(Tt))},reset:function(){O=!1,j=null,bt=null,mt=null,tt=!1}}}function n(){let O=!1,tt=null,j=null,bt=null,mt=null,Tt=null,pt=null,wt=null,rt=null;return{setTest:function(it){O||(it?dt(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(it){tt!==it&&!O&&(s.stencilMask(it),tt=it)},setFunc:function(it,Rt,nt){(j!==it||bt!==Rt||mt!==nt)&&(s.stencilFunc(it,Rt,nt),j=it,bt=Rt,mt=nt)},setOp:function(it,Rt,nt){(Tt!==it||pt!==Rt||wt!==nt)&&(s.stencilOp(it,Rt,nt),Tt=it,pt=Rt,wt=nt)},setLocked:function(it){O=it},setClear:function(it){rt!==it&&(s.clearStencil(it),rt=it)},reset:function(){O=!1,tt=null,j=null,bt=null,mt=null,Tt=null,pt=null,wt=null,rt=null}}}let r=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,M=null,y=null,b=null,w=null,x=null,S=new qt(0,0,0),C=0,A=!1,D=null,L=null,G=null,I=null,N=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,W=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=W>=1):X.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=W>=2);let R=null,V={},ot=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),Y=new Fe().fromArray(ot),at=new Fe().fromArray(Mt);function _t(O,tt,j,bt){let mt=new Uint8Array(4),Tt=s.createTexture();s.bindTexture(O,Tt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<j;pt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(tt+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return Tt}let At={};At[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),o.setFunc(Xo),k(!1),xt(Mp),dt(s.CULL_FACE),ct(Ds);function dt(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Nt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function me(O,tt){return f[O]!==tt?(s.bindFramebuffer(O,tt),f[O]=tt,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=tt),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function Ut(O,tt){let j=m,bt=!1;if(O){j=u.get(tt),j===void 0&&(j=[],u.set(tt,j));let mt=O.textures;if(j.length!==mt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let Tt=0,pt=mt.length;Tt<pt;Tt++)j[Tt]=s.COLOR_ATTACHMENT0+Tt;j.length=mt.length,bt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,bt=!0);bt&&s.drawBuffers(j)}function lt(O){return _!==O?(s.useProgram(O),_=O,!0):!1}let ht={[$r]:s.FUNC_ADD,[h_]:s.FUNC_SUBTRACT,[u_]:s.FUNC_REVERSE_SUBTRACT};ht[f_]=s.MIN,ht[d_]=s.MAX;let $={[p_]:s.ZERO,[m_]:s.ONE,[g_]:s.SRC_COLOR,[wp]:s.SRC_ALPHA,[M_]:s.SRC_ALPHA_SATURATE,[y_]:s.DST_COLOR,[x_]:s.DST_ALPHA,[__]:s.ONE_MINUS_SRC_COLOR,[Ep]:s.ONE_MINUS_SRC_ALPHA,[S_]:s.ONE_MINUS_DST_COLOR,[v_]:s.ONE_MINUS_DST_ALPHA,[b_]:s.CONSTANT_COLOR,[T_]:s.ONE_MINUS_CONSTANT_COLOR,[w_]:s.CONSTANT_ALPHA,[E_]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(O,tt,j,bt,mt,Tt,pt,wt,rt,it){if(O===Ds){p===!0&&(Nt(s.BLEND),p=!1);return}if(p===!1&&(dt(s.BLEND),p=!0),O!==c_){if(O!==g||it!==A){if((v!==$r||b!==$r)&&(s.blendEquation(s.FUNC_ADD),v=$r,b=$r),it)switch(O){case aa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mr:s.blendFunc(s.ONE,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",O);break}else switch(O){case aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bp:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tp:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",O);break}M=null,y=null,w=null,x=null,S.set(0,0,0),C=0,g=O,A=it}return}mt=mt||tt,Tt=Tt||j,pt=pt||bt,(tt!==v||mt!==b)&&(s.blendEquationSeparate(ht[tt],ht[mt]),v=tt,b=mt),(j!==M||bt!==y||Tt!==w||pt!==x)&&(s.blendFuncSeparate($[j],$[bt],$[Tt],$[pt]),M=j,y=bt,w=Tt,x=pt),(wt.equals(S)===!1||rt!==C)&&(s.blendColor(wt.r,wt.g,wt.b,rt),S.copy(wt),C=rt),g=O,A=!1}function ut(O,tt){O.side===Nn?Nt(s.CULL_FACE):dt(s.CULL_FACE);let j=O.side===wi;tt&&(j=!j),k(j),O.blending===aa&&O.transparent===!1?ct(Ds):ct(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let bt=O.stencilWrite;a.setTest(bt),bt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ot(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function k(O){D!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),D=O)}function xt(O){O!==o_?(dt(s.CULL_FACE),O!==L&&(O===Mp?s.cullFace(s.BACK):O===a_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),L=O}function Xt(O){O!==G&&(U&&s.lineWidth(O),G=O)}function Ot(O,tt,j){O?(dt(s.POLYGON_OFFSET_FILL),(I!==tt||N!==j)&&(I=tt,N=j,o.getReversed()&&(tt=-tt,j=-j),s.polygonOffset(tt,j))):Nt(s.POLYGON_OFFSET_FILL)}function Bt(O){O?dt(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function Kt(O){O===void 0&&(O=s.TEXTURE0+F-1),R!==O&&(s.activeTexture(O),R=O)}function se(O,tt,j){j===void 0&&(R===null?j=s.TEXTURE0+F-1:j=R);let bt=V[j];bt===void 0&&(bt={type:void 0,texture:void 0},V[j]=bt),(bt.type!==O||bt.texture!==tt)&&(R!==j&&(s.activeTexture(j),R=j),s.bindTexture(O,tt||At[O]),bt.type=O,bt.texture=tt)}function B(){let O=V[R];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function re(){try{s.compressedTexImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Jt(){try{s.compressedTexImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function $t(){try{s.texSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function yt(){try{s.texSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ge(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Yt(){try{s.texStorage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function P(){try{s.texStorage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function T(){try{s.texImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Z(){try{s.texImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ft(O){return d[O]!==void 0?d[O]:s.getParameter(O)}function st(O,tt){d[O]!==tt&&(s.pixelStorei(O,tt),d[O]=tt)}function St(O){Y.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Y.copy(O))}function Et(O){at.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),at.copy(O))}function J(O,tt){let j=c.get(tt);j===void 0&&(j=new WeakMap,c.set(tt,j));let bt=j.get(O);bt===void 0&&(bt=s.getUniformBlockIndex(tt,O.name),s.uniformBlockBinding(tt,bt,bt),j.set(O,bt))}function et(O,tt,j){let mt=c.get(tt).get(O);l[mt]!==j&&(s.bindBufferBase(s.UNIFORM_BUFFER,mt,j),l[mt]=j)}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,V={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,M=null,y=null,b=null,w=null,x=null,S=new qt(0,0,0),C=0,A=!1,D=null,L=null,G=null,I=null,N=null,Y.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Nt,bindFramebuffer:me,drawBuffers:Ut,useProgram:lt,setBlending:ct,setMaterial:ut,setFlipSided:k,setCullFace:xt,setLineWidth:Xt,setPolygonOffset:Ot,setScissorTest:Bt,activeTexture:Kt,bindTexture:se,unbindTexture:B,compressedTexImage2D:re,compressedTexImage3D:Jt,texImage2D:T,texImage3D:Z,pixelStorei:st,getParameter:ft,updateUBOMapping:J,uniformBlockBinding:et,texStorage2D:Yt,texStorage3D:P,texSubImage2D:$t,texSubImage3D:yt,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ht,scissor:St,viewport:Et,reset:vt}}function nE(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(P=>m.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return p?new OffscreenCanvas(P,T):qo("canvas")}function v(P,T,Z){let ft=1,st=Yt(P);if((st.width>Z||st.height>Z)&&(ft=Z/Math.max(st.width,st.height)),ft<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let St=Math.floor(ft*st.width),Et=Math.floor(ft*st.height);f===void 0&&(f=g(St,Et));let J=T?g(St,Et):f;return J.width=St,J.height=Et,J.getContext("2d").drawImage(P,0,0,St,Et),Zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+St+"x"+Et+")."),J}else return"data"in P&&Zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function M(P){return P.generateMipmaps}function y(P){s.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,T,Z,ft,st,St=!1){if(P!==null){if(s[P]!==void 0)return s[P];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Et;ft&&(Et=t.get("EXT_texture_norm16"),Et||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=T;if(T===s.RED&&(Z===s.FLOAT&&(J=s.R32F),Z===s.HALF_FLOAT&&(J=s.R16F),Z===s.UNSIGNED_BYTE&&(J=s.R8),Z===s.UNSIGNED_SHORT&&Et&&(J=Et.R16_EXT),Z===s.SHORT&&Et&&(J=Et.R16_SNORM_EXT)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(J=s.R8UI),Z===s.UNSIGNED_SHORT&&(J=s.R16UI),Z===s.UNSIGNED_INT&&(J=s.R32UI),Z===s.BYTE&&(J=s.R8I),Z===s.SHORT&&(J=s.R16I),Z===s.INT&&(J=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(J=s.RG32F),Z===s.HALF_FLOAT&&(J=s.RG16F),Z===s.UNSIGNED_BYTE&&(J=s.RG8),Z===s.UNSIGNED_SHORT&&Et&&(J=Et.RG16_EXT),Z===s.SHORT&&Et&&(J=Et.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(J=s.RG8UI),Z===s.UNSIGNED_SHORT&&(J=s.RG16UI),Z===s.UNSIGNED_INT&&(J=s.RG32UI),Z===s.BYTE&&(J=s.RG8I),Z===s.SHORT&&(J=s.RG16I),Z===s.INT&&(J=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(J=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(J=s.RGB16UI),Z===s.UNSIGNED_INT&&(J=s.RGB32UI),Z===s.BYTE&&(J=s.RGB8I),Z===s.SHORT&&(J=s.RGB16I),Z===s.INT&&(J=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),Z===s.UNSIGNED_INT&&(J=s.RGBA32UI),Z===s.BYTE&&(J=s.RGBA8I),Z===s.SHORT&&(J=s.RGBA16I),Z===s.INT&&(J=s.RGBA32I)),T===s.RGB&&(Z===s.UNSIGNED_SHORT&&Et&&(J=Et.RGB16_EXT),Z===s.SHORT&&Et&&(J=Et.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),T===s.RGBA){let et=St?xl:ue.getTransfer(st);Z===s.FLOAT&&(J=s.RGBA32F),Z===s.HALF_FLOAT&&(J=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(J=et===ve?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Et&&(J=Et.RGBA16_EXT),Z===s.SHORT&&Et&&(J=Et.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(P,T){let Z;return P?T===null||T===Yn||T===to?Z=s.DEPTH24_STENCIL8:T===Un?Z=s.DEPTH32F_STENCIL8:T===ca&&(Z=s.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yn||T===to?Z=s.DEPTH_COMPONENT24:T===Un?Z=s.DEPTH_COMPONENT32F:T===ca&&(Z=s.DEPTH_COMPONENT16),Z}function S(P,T){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==xi&&P.minFilter!==ci?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){let T=new WeakRef(P);i.get(P).__ref=T,m.add(T),_.register(P,T,T)}function A(P){let T=i.get(P).__ref;T!==void 0&&(m.delete(T),_.unregister(T))}function D(P){G(P.target)}function L(P){I(P.target)}function G(P){P.removeEventListener("dispose",D),A(P),F(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function I(P){P.removeEventListener("dispose",L),A(P),W(P)}function N(){for(let P of m){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):G(T))}m.clear(),d.clear()}function F(P){let T=i.get(P);if(T.__webglInit===void 0)return;let Z=P.source,ft=u.get(Z);if(ft){let st=ft[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&U(P),Object.keys(ft).length===0&&u.delete(Z)}i.remove(P)}function U(P){let T=i.get(P);s.deleteTexture(T.__webglTexture);let Z=P.source,ft=u.get(Z);delete ft[T.__cacheKey],o.memory.textures--}function W(P){let T=i.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Z=P.depthTexture;if(Z&&Z.renderTarget===P&&G(Z),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(T.__webglFramebuffer[st]))for(let St=0;St<T.__webglFramebuffer[st].length;St++)s.deleteFramebuffer(T.__webglFramebuffer[st][St]);else s.deleteFramebuffer(T.__webglFramebuffer[st]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[st])}else{if(Array.isArray(T.__webglFramebuffer))for(let st=0;st<T.__webglFramebuffer.length;st++)s.deleteFramebuffer(T.__webglFramebuffer[st]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let st=0;st<T.__webglColorRenderbuffer.length;st++)T.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[st]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ft=P.textures;for(let st=0,St=ft.length;st<St;st++){let Et=i.get(ft[st]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),o.memory.textures--),i.remove(ft[st])}i.remove(P)}let X=0;function R(){X=0}function V(){return X}function ot(P){X=P}function Mt(){let P=X;return P>=n.maxTextures&&Zt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,P}function Y(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function at(P,T){let Z=i.get(P);if(P.isVideoTexture&&ge(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){let ft=P.image;if(ft===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Z,P,T);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function _t(P,T){let Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){ut(Z,P,T);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function At(P,T){let Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){ut(Z,P,T);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function dt(P,T){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){k(Z,P,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}let Nt={[Kh]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[$h]:s.MIRRORED_REPEAT},me={[xi]:s.NEAREST,[C_]:s.NEAREST_MIPMAP_NEAREST,[sc]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[Ru]:s.LINEAR_MIPMAP_NEAREST,[Ns]:s.LINEAR_MIPMAP_LINEAR},Ut={[D_]:s.NEVER,[Op]:s.ALWAYS,[N_]:s.LESS,[Np]:s.LEQUAL,[U_]:s.EQUAL,[Up]:s.GEQUAL,[O_]:s.GREATER,[F_]:s.NOTEQUAL};function lt(P,T){if(T.type===Un&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ci||T.magFilter===Ru||T.magFilter===sc||T.magFilter===Ns||T.minFilter===ci||T.minFilter===Ru||T.minFilter===sc||T.minFilter===Ns)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Nt[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Nt[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Nt[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,me[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,me[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==sc&&T.minFilter!==Ns||T.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ht(P,T){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",D),C(T));let ft=T.source,st=u.get(ft);st===void 0&&(st={},u.set(ft,st));let St=Y(T);if(St!==P.__cacheKey){st[St]===void 0&&(st[St]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),st[St].usedTimes++;let Et=st[P.__cacheKey];Et!==void 0&&(st[P.__cacheKey].usedTimes--,Et.usedTimes===0&&U(T)),P.__cacheKey=St,P.__webglTexture=st[St].texture}return Z}function $(P,T,Z){return Math.floor(Math.floor(P/Z)/T)}function ct(P,T,Z,ft){let St=P.updateRanges;if(St.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,Z,ft,T.data);else{St.sort((O,tt)=>O.start-tt.start);let Et=0;for(let O=1;O<St.length;O++){let tt=St[Et],j=St[O],bt=tt.start+tt.count,mt=$(j.start,T.width,4),Tt=$(tt.start,T.width,4);j.start<=bt+1&&mt===Tt&&$(j.start+j.count-1,T.width,4)===mt?tt.count=Math.max(tt.count,j.start+j.count-tt.start):(++Et,St[Et]=j)}St.length=Et+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let O=0,tt=St.length;O<tt;O++){let j=St[O],bt=Math.floor(j.start/4),mt=Math.ceil(j.count/4),Tt=bt%T.width,pt=Math.floor(bt/T.width),wt=mt,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,pt),e.texSubImage2D(s.TEXTURE_2D,0,Tt,pt,wt,rt,Z,ft,T.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function ut(P,T,Z){let ft=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=s.TEXTURE_3D);let st=ht(P,T),St=T.source;e.bindTexture(ft,P.__webglTexture,s.TEXTURE0+Z);let Et=i.get(St);if(St.version!==Et.__version||st===!0){if(e.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let rt=ue.getPrimaries(ue.workingColorSpace),it=T.colorSpace===Os?null:ue.getPrimaries(T.colorSpace),Rt=T.colorSpace===Os||rt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let et=v(T.image,!1,n.maxTextureSize);et=Ht(T,et);let vt=r.convert(T.format,T.colorSpace),O=r.convert(T.type),tt=w(T.internalFormat,vt,O,T.normalized,T.colorSpace,T.isVideoTexture);lt(ft,T);let j,bt=T.mipmaps,mt=T.isVideoTexture!==!0,Tt=Et.__version===void 0||st===!0,pt=St.dataReady,wt=S(T,et);if(T.isDepthTexture)tt=x(T.format===Us,T.type),Tt&&(mt?e.texStorage2D(s.TEXTURE_2D,1,tt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,tt,et.width,et.height,0,vt,O,null));else if(T.isDataTexture)if(bt.length>0){mt&&Tt&&e.texStorage2D(s.TEXTURE_2D,wt,tt,bt[0].width,bt[0].height);for(let rt=0,it=bt.length;rt<it;rt++)j=bt[rt],mt?pt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,vt,O,j.data):e.texImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,vt,O,j.data);T.generateMipmaps=!1}else mt?(Tt&&e.texStorage2D(s.TEXTURE_2D,wt,tt,et.width,et.height),pt&&ct(T,et,vt,O)):e.texImage2D(s.TEXTURE_2D,0,tt,et.width,et.height,0,vt,O,et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){mt&&Tt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,tt,bt[0].width,bt[0].height,et.depth);for(let rt=0,it=bt.length;rt<it;rt++)if(j=bt[rt],T.format!==qn)if(vt!==null)if(mt){if(pt)if(T.layerUpdates.size>0){let Rt=qp(j.width,j.height,T.format,T.type);for(let nt of T.layerUpdates){let Lt=j.data.subarray(nt*Rt/j.data.BYTES_PER_ELEMENT,(nt+1)*Rt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,nt,j.width,j.height,1,vt,Lt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,j.width,j.height,et.depth,vt,j.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,tt,j.width,j.height,et.depth,0,j.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,j.width,j.height,et.depth,vt,O,j.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,tt,j.width,j.height,et.depth,0,vt,O,j.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{mt&&Tt&&e.texStorage2D(s.TEXTURE_2D,wt,tt,bt[0].width,bt[0].height);for(let rt=0,it=bt.length;rt<it;rt++)j=bt[rt],T.format!==qn?vt!==null?mt?pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,vt,j.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,j.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?pt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,vt,O,j.data):e.texImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,vt,O,j.data)}else if(T.isDataArrayTexture)if(mt){if(Tt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,tt,et.width,et.height,et.depth),pt)if(T.layerUpdates.size>0){let rt=qp(et.width,et.height,T.format,T.type);for(let it of T.layerUpdates){let Rt=et.data.subarray(it*rt/et.data.BYTES_PER_ELEMENT,(it+1)*rt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,et.width,et.height,1,vt,O,Rt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,O,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,et.width,et.height,et.depth,0,vt,O,et.data);else if(T.isData3DTexture)mt?(Tt&&e.texStorage3D(s.TEXTURE_3D,wt,tt,et.width,et.height,et.depth),pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,O,et.data)):e.texImage3D(s.TEXTURE_3D,0,tt,et.width,et.height,et.depth,0,vt,O,et.data);else if(T.isFramebufferTexture){if(Tt)if(mt)e.texStorage2D(s.TEXTURE_2D,wt,tt,et.width,et.height);else{let rt=et.width,it=et.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,tt,rt,it,0,vt,O,null),rt>>=1,it>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),et.parentNode!==rt){rt.appendChild(et),d.add(T),rt.onpaint=it=>{let Rt=it.changedElements;for(let nt of d)Rt.includes(nt.image)&&(nt.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{let Rt=s.RGBA,nt=s.RGBA,Lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Rt,nt,Lt,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(bt.length>0){if(mt&&Tt){let rt=Yt(bt[0]);e.texStorage2D(s.TEXTURE_2D,wt,tt,rt.width,rt.height)}for(let rt=0,it=bt.length;rt<it;rt++)j=bt[rt],mt?pt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,vt,O,j):e.texImage2D(s.TEXTURE_2D,rt,tt,vt,O,j);T.generateMipmaps=!1}else if(mt){if(Tt){let rt=Yt(et);e.texStorage2D(s.TEXTURE_2D,wt,tt,rt.width,rt.height)}pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,O,et)}else e.texImage2D(s.TEXTURE_2D,0,tt,vt,O,et);M(T)&&T.mipmapsAutoUpdate===!0&&y(ft),Et.__version=St.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function k(P,T,Z){if(T.image.length!==6)return;let ft=ht(P,T),st=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Z);let St=i.get(st);if(st.version!==St.__version||ft===!0){e.activeTexture(s.TEXTURE0+Z);let Et=ue.getPrimaries(ue.workingColorSpace),J=T.colorSpace===Os?null:ue.getPrimaries(T.colorSpace),et=T.colorSpace===Os||Et===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let vt=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,tt=[];for(let nt=0;nt<6;nt++)!vt&&!O?tt[nt]=v(T.image[nt],!0,n.maxCubemapSize):tt[nt]=O?T.image[nt].image:T.image[nt],tt[nt]=Ht(T,tt[nt]);let j=tt[0],bt=r.convert(T.format,T.colorSpace),mt=r.convert(T.type),Tt=w(T.internalFormat,bt,mt,T.normalized,T.colorSpace),pt=T.isVideoTexture!==!0,wt=St.__version===void 0||ft===!0,rt=st.dataReady,it=S(T,j);lt(s.TEXTURE_CUBE_MAP,T);let Rt;if(T.isDepthTexture){if(Tt=x(T.format===Us,T.type),wt)if(pt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,Tt,j.width,j.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Tt,j.width,j.height,0,bt,mt,null)}else if(vt){pt&&wt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Tt,j.width,j.height);for(let nt=0;nt<6;nt++){Rt=tt[nt].mipmaps;for(let Lt=0;Lt<Rt.length;Lt++){let fe=Rt[Lt];T.format!==qn?bt!==null?pt?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,0,0,fe.width,fe.height,bt,fe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,Tt,fe.width,fe.height,0,fe.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,0,0,fe.width,fe.height,bt,mt,fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,Tt,fe.width,fe.height,0,bt,mt,fe.data)}}}else{if(Rt=T.mipmaps,pt&&wt){Rt.length>0&&it++;let nt=Yt(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Tt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(O){pt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,tt[nt].width,tt[nt].height,bt,mt,tt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Tt,tt[nt].width,tt[nt].height,0,bt,mt,tt[nt].data);for(let Lt=0;Lt<Rt.length;Lt++){let ee=Rt[Lt].image[nt].image;pt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,0,0,ee.width,ee.height,bt,mt,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,Tt,ee.width,ee.height,0,bt,mt,ee.data)}}else{pt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt,mt,tt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Tt,bt,mt,tt[nt]);for(let Lt=0;Lt<Rt.length;Lt++){let fe=Rt[Lt];pt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,0,0,bt,mt,fe.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,Tt,bt,mt,fe.image[nt])}}}M(T)&&T.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),St.__version=st.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function xt(P,T,Z,ft,st,St){let Et=r.convert(Z.format,Z.colorSpace),J=r.convert(Z.type),et=w(Z.internalFormat,Et,J,Z.normalized,Z.colorSpace),vt=i.get(T),O=i.get(Z);if(O.__renderTarget=T,!vt.__hasExternalTextures){let tt=Math.max(1,T.width>>St),j=Math.max(1,T.height>>St);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,St,et,tt,j,T.depth,0,Et,J,null):e.texImage2D(st,St,et,tt,j,0,Et,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),yt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,st,O.__webglTexture,0,$t(T)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,st,O.__webglTexture,St),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(P,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let ft=T.depthTexture,st=ft&&ft.isDepthTexture?ft.type:null,St=x(T.stencilBuffer,st),Et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;yt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(T),St,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(T),St,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,St,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,P)}else{let ft=T.textures;for(let st=0;st<ft.length;st++){let St=ft[st],Et=r.convert(St.format,St.colorSpace),J=r.convert(St.type),et=w(St.internalFormat,Et,J,St.normalized,St.colorSpace);yt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(T),et,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(T),et,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,et,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(P,T,Z){let ft=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(T.depthTexture);st.__renderTarget=T;let St=ft?T.depthTexture.image[0]:T.depthTexture.image;(!st.__webglTexture||St.width!==T.width||St.height!==T.height)&&(St.width=T.width,St.height=T.height,T.depthTexture.needsUpdate=!0),ft?dt(T.depthTexture,0):at(T.depthTexture,0);let Et=st.__webglTexture,J=$t(T),et=ft?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,vt=T.depthTexture.format===Us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Rs)yt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,et,Et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,vt,et,Et,0);else if(T.depthTexture.format===Us)yt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,et,Et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,vt,et,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(P){let T=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ft=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){let st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",st)};ft.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=ft}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let ft=0;ft<6;ft++)Ot(T.__webglFramebuffer[ft],P,ft);else P.texture.mipmaps.length>0?Ot(T.__webglFramebuffer[0],P,0):Ot(T.__webglFramebuffer,P,0);else if(Z){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=s.createRenderbuffer(),Xt(T.__webglDepthbuffer[ft],P,!1);else{let st=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,St)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Xt(T.__webglDepthbuffer,P,!1);else{let st=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,St)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(P,T,Z){let ft=i.get(P);T!==void 0&&xt(ft.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Bt(P)}function se(P){let T=P.texture,Z=i.get(P),ft=i.get(T);P.addEventListener("dispose",L),C(P);let st=P.textures,St=P.isWebGLCubeRenderTarget===!0,Et=st.length>1;if(Et||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=T.version,o.memory.textures++),St){Z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(T.mipmaps.length>0){Z.__webglFramebuffer[J]=[];for(let et=0;et<T.mipmaps.length;et++)Z.__webglFramebuffer[J][et]=s.createFramebuffer()}else Z.__webglFramebuffer[J]=s.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let J=0;J<T.mipmaps.length;J++)Z.__webglFramebuffer[J]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Et)for(let J=0,et=st.length;J<et;J++){let vt=i.get(st[J]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&yt(P)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let J=0;J<st.length;J++){let et=st[J];Z.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[J]);let vt=r.convert(et.format,et.colorSpace),O=r.convert(et.type),tt=w(et.internalFormat,vt,O,et.normalized,et.colorSpace,P.isXRRenderTarget===!0),j=$t(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,j,tt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,Z.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(St){e.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),lt(s.TEXTURE_CUBE_MAP,T);for(let J=0;J<6;J++)if(T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)xt(Z.__webglFramebuffer[J][et],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,et);else xt(Z.__webglFramebuffer[J],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);M(T)?y(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let J=0,et=st.length;J<et;J++){let vt=st[J],O=i.get(vt),tt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,O.__webglTexture),lt(tt,vt),xt(Z.__webglFramebuffer,P,vt,s.COLOR_ATTACHMENT0+J,tt,0),M(vt)&&y(tt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,ft.__webglTexture),lt(J,T),T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)xt(Z.__webglFramebuffer[et],P,T,s.COLOR_ATTACHMENT0,J,et);else xt(Z.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,J,0);M(T)?y(J):T.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&Bt(P)}function B(P){let T=P.textures;for(let Z=0,ft=T.length;Z<ft;Z++){let st=T[Z];if(M(st)&&st.mipmapsAutoUpdate===!0){let St=b(P),Et=i.get(st).__webglTexture;e.bindTexture(St,Et),y(St),e.unbindTexture()}}}let re=[];function Jt(P){if(P.samples>0){if(yt(P)===!1){let T=P.textures,Z=P.width,ft=P.height,st=s.COLOR_BUFFER_BIT,St=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=i.get(P),J=T.length>1;if(J)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);let O=i.get(T[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,Z,ft,0,0,Z,ft,st,s.NEAREST),l===!0&&(re.length=0,re.push(s.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&re.push(St),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);let O=i.get(T[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,O,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function $t(P){return Math.min(n.maxSamples,P.samples)}function yt(P){let T=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ge(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Ht(P,T){let Z=P.colorSpace,ft=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==_l&&Z!==Os&&(ue.getTransfer(Z)===ve?(ft!==qn||st!==rn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",Z)),T}function Yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Mt,this.resetTextureUnits=R,this.getTextureUnits=V,this.setTextureUnits=ot,this.setTexture2D=at,this.setTexture2DArray=_t,this.setTexture3D=At,this.setTextureCube=dt,this.rebindTextures=Kt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=yt,this.dispose=N}function sE(s,t){function e(i,n=Os){let r,o=ue.getTransfer(n);if(i===rn)return s.UNSIGNED_BYTE;if(i===Pu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Iu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Pp)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ip)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rp)return s.BYTE;if(i===Cp)return s.SHORT;if(i===ca)return s.UNSIGNED_SHORT;if(i===Cu)return s.INT;if(i===Yn)return s.UNSIGNED_INT;if(i===Un)return s.FLOAT;if(i===ui)return s.HALF_FLOAT;if(i===Lp)return s.ALPHA;if(i===Dp)return s.RGB;if(i===qn)return s.RGBA;if(i===Rs)return s.DEPTH_COMPONENT;if(i===Us)return s.DEPTH_STENCIL;if(i===Lu)return s.RED;if(i===Du)return s.RED_INTEGER;if(i===gr)return s.RG;if(i===Nu)return s.RG_INTEGER;if(i===Uu)return s.RGBA_INTEGER;if(i===rc||i===oc||i===ac||i===lc)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===rc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ou||i===Fu||i===Bu||i===zu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ku||i===Hu||i===Gu||i===Vu||i===Wu||i===cc||i===Xu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ku||i===Hu)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vu)return r.COMPRESSED_R11_EAC;if(i===Wu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cc)return r.COMPRESSED_RG11_EAC;if(i===Xu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yu||i===qu||i===Zu||i===Ju||i===Ku||i===$u||i===Qu||i===ju||i===tf||i===ef||i===nf||i===sf||i===rf||i===of)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ju)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ku)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$u)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ju)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ef)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sf)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rf)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===of)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===af||i===lf||i===cf)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===af)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hf||i===uf||i===hc||i===ff)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===hf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ff)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var rE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,am=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Il(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ze({vertexShader:rE,fragmentShader:oE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lm=class extends ns{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding<"u",p=new am,g={},v=e.getContextAttributes(),M=null,y=null,b=[],w=[],x=new gt,S=null,C=null,A=new zi;A.viewport=new Fe;let D=new zi;D.viewport=new Fe;let L=[A,D],G=new bu,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=b[Y];return at===void 0&&(at=new $o,b[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=b[Y];return at===void 0&&(at=new $o,b[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=b[Y];return at===void 0&&(at=new $o,b[Y]=at),at.getHandSpace()};function F(Y){let at=w.indexOf(Y.inputSource);if(at===-1)return;let _t=b[at];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",W);for(let Y=0;Y<b.length;Y++){let at=w[Y];at!==null&&(w[Y]=null,b[Y].disconnect(at))}I=null,N=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(M),u=null,f=null,d=null,n=null,y=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),C!==null){let Y=C.camera;Y.fov=C.fov,Y.zoom=C.zoom,Y.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",U),n.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,At=null,dt=null;v.depth&&(dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?Us:Rs,At=v.stencil?to:Yn);let Nt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Nt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ke(f.textureWidth,f.textureHeight,{format:qn,type:rn,depthTexture:new Ps(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,e,_t),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ke(u.framebufferWidth,u.framebufferHeight,{format:qn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Mt.setContext(n),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(Y){for(let at=0;at<Y.removed.length;at++){let _t=Y.removed[at],At=w.indexOf(_t);At>=0&&(w[At]=null,b[At].disconnect(_t))}for(let at=0;at<Y.added.length;at++){let _t=Y.added[at],At=w.indexOf(_t);if(At===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=w.length){w.push(_t),At=Nt;break}else if(w[Nt]===null){w[Nt]=_t,At=Nt;break}if(At===-1)break}let dt=b[At];dt&&dt.connect(_t)}}function X(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let at=Y.near,_t=Y.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),G.near=D.near=A.near=at,G.far=D.far=A.far=_t,(I!==G.near||N!==G.far)&&(n.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,N=G.far),G.layers.mask=Y.layers.mask|6,A.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let At=Y.parent,dt=G.cameras;X(G,At);for(let Nt=0;Nt<dt.length;Nt++)X(dt[Nt],At);G.projectionMatrix.copy(A.projectionMatrix),G.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&Y.isPerspectiveCamera&&(C={camera:Y,fov:Y.fov,zoom:Y.zoom}),R(Y,G,At)};function R(Y,at,_t){_t===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Y){return g[Y]};let V=null;function ot(Y,at){if(h=at.getViewerPose(c||o),m=at,h!==null){let _t=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let At=!1;_t.length!==G.cameras.length&&(G.cameras.length=0,At=!0);for(let Ut=0;Ut<_t.length;Ut++){let lt=_t[Ut],ht=null;if(u!==null)ht=u.getViewport(lt);else{let ct=d.getViewSubImage(f,lt);ht=ct.viewport,Ut===0&&(t.setRenderTargetTextures(y,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(y))}let $=L[Ut];$===void 0&&($=new zi,$.layers.enable(Ut),$.viewport=new Fe,L[Ut]=$),$.matrix.fromArray(lt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(lt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ht.x,ht.y,ht.width,ht.height),Ut===0&&(G.matrix.copy($.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),At===!0&&G.cameras.push($)}let dt=n.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Ut=d.getDepthInformation(_t[0]);Ut&&Ut.isValid&&Ut.texture&&p.init(Ut,n.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Ut=0;Ut<_t.length;Ut++){let lt=_t[Ut].camera;if(lt){let ht=g[lt];ht||(ht=new Il,g[lt]=ht);let $=d.getCameraImage(lt);ht.sourceTexture=$}}}}for(let _t=0;_t<b.length;_t++){let At=w[_t],dt=b[_t];At!==null&&dt!==void 0&&dt.update(At,at,c||o)}V&&V(Y,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),m=null}let Mt=new vx;Mt.setAnimationLoop(ot),this.setAnimationLoop=function(Y){V=Y},this.dispose=function(){}}},aE=new Se,Cx=new te;Cx.set(-1,0,0,0,1,0,0,0,1);function lE(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Wp(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,v,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===wi&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===wi&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),M=v.envMap,y=v.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(aE.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Cx),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wi&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function cE(s,t,e,i){let n={},r={};function o(v,M){let y=M.program;i.uniformBlockBinding(v,y,n[v.id])}function a(v,M){let y=n[v.id];y===void 0&&(m(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",p));let b=M.program;i.updateUBOMapping(v,b);let w=t.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let M=s.createBuffer(),y=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(v){let M=n[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,x=y.length;w<x;w++){let S=y[w];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],w,C,b);else h(S,w,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,M,y,b){if(f(v,M,y,b)===!0){let w=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let C=0;C<x.length;C++){let A=x[C],D=_(A,!0);d(A,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}function d(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function f(v,M,y,b){let w=v.value,x=M+"_"+y;if(Array.isArray(w)){b[x]===void 0&&(b[x]=[]);let S=b[x],C=!1;for(let A=0;A<w.length;A++)u(w[A],S,A)===!0&&(C=!0);return C}return u(w,b,x)}function u(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let b=M[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(v){let M=v.uniforms,y=0,b=16;for(let x=0,S=M.length;x<S;x++){let C=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,D=C.length;A<D;A++){let L=C[A],G=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(M[x])||Array.isArray(L.value),N=y;for(let U=0,W=G.length;U<W;U++){let X=G[U],R=_(X,I),V=y%b,ot=V%R.boundary,Mt=V+ot;y+=ot,Mt!==0&&b-Mt<R.storage&&(y+=b-Mt),U===0&&(N=y),y+=R.storage}let F=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new F((y-N)/Float32Array.BYTES_PER_ELEMENT),L.__offset=N}}let w=y%b;return w>0&&(y+=b-w),v.__size=y,v.__cache={},this}function _(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let M=v.target;M.removeEventListener("dispose",p),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function g(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:o,update:a,dispose:g}}var hE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ls=null;function uE(){return ls===null&&(ls=new Xr(hE,16,16,gr,ui),ls.name="DFG_LUT",ls.minFilter=ci,ls.magFilter=ci,ls.wrapS=es,ls.wrapT=es,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}var mf=class{constructor(t={}){let{canvas:e=z_(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=rn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let _=u,p=new Set([Uu,Nu,Du]),g=new Set([rn,Yn,ca,to,Pu,Iu]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,w=null,x=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,L=null,G=null,I=null,N=null;this._outputColorSpace=bi;let F=0,U=0,W=null,X=-1,R=null,V=new Fe,ot=new Fe,Mt=null,Y=new qt(0),at=0,_t=e.width,At=e.height,dt=1,Nt=null,me=null,Ut=new Fe(0,0,_t,At),lt=new Fe(0,0,_t,At),ht=!1,$=new lr,ct=new iu,ut=!1,k=!1,xt=new Se,Xt=new H,Ot=new Fe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function se(){return W===null?dt:1}let B=i;function re(E,z){return e.getContext(E,z)}let Jt,$t,yt,ge,Ht,Yt,P,T,Z,ft,st,St,Et,J,et,vt,O,tt,j,bt,mt,Tt,pt;try{let E={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),B===null){let z="webgl2";if(B=re(z,E),B===null)throw re(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(E){throw e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Qt("WebGLRenderer: "+E.message),E}function wt(){Jt=new M1(B),Jt.init(),mt=new sE(B,Jt),$t=new u1(B,Jt,t,mt),yt=new iE(B,Jt),$t.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),G=B.createFramebuffer(),I=B.createFramebuffer(),N=B.createFramebuffer(),ge=new w1(B),Ht=new Gw,Yt=new nE(B,Jt,yt,Ht,$t,mt,ge),P=new S1(A),T=new AM(B),Tt=new c1(B,T),Z=new b1(B,T,ge,Tt),ft=new A1(B,Z,T,Tt,ge),tt=new E1(B,$t,Yt),et=new f1(Ht),st=new Hw(A,P,Jt,$t,Tt,et),St=new lE(A,Ht),Et=new Ww,J=new Kw(Jt),O=new l1(A,P,yt,ft,m,l),vt=new eE(A,ft,$t),pt=new cE(B,ge,$t,yt),j=new h1(B,Jt,ge),bt=new T1(B,Jt,ge),ge.programs=st.programs,A.capabilities=$t,A.extensions=Jt,A.properties=Ht,A.renderLists=Et,A.shadowMap=vt,A.state=yt,A.info=ge}_!==rn&&(C=new C1(_,e.width,e.height,a,n,r));let rt=new lm(A,B);this.xr=rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(E){E!==void 0&&(dt=E,this.setSize(_t,At,!1))},this.getSize=function(E){return E.set(_t,At)},this.setSize=function(E,z,Q=!0){if(rt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=E,At=z,e.width=Math.floor(E*dt),e.height=Math.floor(z*dt),Q===!0&&(e.style.width=E+"px",e.style.height=z+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(_t*dt,At*dt).floor()},this.setDrawingBufferSize=function(E,z,Q){_t=E,At=z,dt=Q,e.width=Math.floor(E*Q),e.height=Math.floor(z*Q),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(_===rn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(V)},this.getViewport=function(E){return E.copy(Ut)},this.setViewport=function(E,z,Q,q){E.isVector4?Ut.set(E.x,E.y,E.z,E.w):Ut.set(E,z,Q,q),yt.viewport(V.copy(Ut).multiplyScalar(se()).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,z,Q,q){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,z,Q,q),yt.scissor(ot.copy(lt).multiplyScalar(se()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){yt.setScissorTest(ht=E)},this.setOpaqueSort=function(E){Nt=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Q=!0){let q=0;if(E){let K=!1;if(W!==null){let Pt=W.texture.format;K=p.has(Pt)}if(K){let Pt=W.texture.type,kt=g.has(Pt),Ct=O.getClearColor(),Dt=O.getClearAlpha(),Wt=Ct.r,ie=Ct.g,de=Ct.b;kt?(v[0]=Wt,v[1]=ie,v[2]=de,v[3]=Dt,B.clearBufferuiv(B.COLOR,0,v)):(M[0]=Wt,M[1]=ie,M[2]=de,M[3]=Dt,B.clearBufferiv(B.COLOR,0,M))}else q|=B.COLOR_BUFFER_BIT}z&&(q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),O.dispose(),Et.dispose(),J.dispose(),Yt.dispose(),Ht.dispose(),P.dispose(),ft.dispose(),Z.dispose(),Tt.dispose(),pt.dispose(),st.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Re),rt.removeEventListener("sessionend",Me),si.stop()};function it(E){E.preventDefault(),Bp("WebGLRenderer: Context Lost."),D=!0}function Rt(){Bp("WebGLRenderer: Context Restored."),D=!1;let E=ge.autoReset,z=vt.enabled,Q=vt.autoUpdate,q=vt.needsUpdate,K=vt.type;wt(),ge.autoReset=E,vt.enabled=z,vt.autoUpdate=Q,vt.needsUpdate=q,vt.type=K}function nt(E){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){let z=E.target;z.removeEventListener("dispose",Lt),fe(z)}function fe(E){ee(E),Ht.remove(E)}function ee(E){let z=Ht.get(E).programs;z!==void 0&&(z.forEach(function(Q){st.releaseProgram(Q)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Q,q,K,Pt){z===null&&(z=Bt);let kt=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ct=Tn(E,z,Q,q,K);yt.setMaterial(q,kt);let Dt=Q.index,Wt=1;if(q.wireframe===!0){if(Dt=Z.getWireframeAttribute(Q),Dt===void 0)return;Wt=2}let ie=Q.drawRange,de=Q.attributes.position,Gt=ie.start*Wt,pe=(ie.start+ie.count)*Wt;Pt!==null&&(Gt=Math.max(Gt,Pt.start*Wt),pe=Math.min(pe,(Pt.start+Pt.count)*Wt)),Dt!==null?(Gt=Math.max(Gt,0),pe=Math.min(pe,Dt.count)):de!=null&&(Gt=Math.max(Gt,0),pe=Math.min(pe,de.count));let ti=pe-Gt;if(ti<0||ti===1/0)return;Tt.setup(K,q,Ct,Q,Dt);let Le,Pe=j;if(Dt!==null&&(Le=T.get(Dt),Pe=bt,Pe.setIndex(Le)),K.isMesh)q.wireframe===!0?(yt.setLineWidth(q.wireframeLinewidth*se()),Pe.setMode(B.LINES)):Pe.setMode(B.TRIANGLES);else if(K.isLine){let Ri=q.linewidth;Ri===void 0&&(Ri=1),yt.setLineWidth(Ri*se()),K.isLineSegments?Pe.setMode(B.LINES):K.isLineLoop?Pe.setMode(B.LINE_LOOP):Pe.setMode(B.LINE_STRIP)}else K.isPoints?Pe.setMode(B.POINTS):K.isSprite&&Pe.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ri=K._multiDrawStarts,Vt=K._multiDrawCounts,Hi=K._multiDrawCount,ye=Dt?T.get(Dt).bytesPerElement:1,xr=Ht.get(q).currentProgram.getUniforms();for(let Ci=0;Ci<Hi;Ci++)xr.setValue(B,"_gl_DrawID",Ci),Pe.render(Ri[Ci]/ye,Vt[Ci])}else if(K.isInstancedMesh)Pe.renderInstances(Gt,ti,K.count);else if(Q.isInstancedBufferGeometry){let Ri=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Vt=Math.min(Q.instanceCount,Ri);Pe.renderInstances(Gt,ti,Vt)}else Pe.render(Gt,ti)};function Ne(E,z,Q,q){L!==null&&E.isNodeMaterial&&L.setObject(q,E),ut===!0&&et.setState(E,Q,!1),E.transparent===!0&&E.side===Nn&&E.forceSinglePass===!1?(E.side=wi,E.needsUpdate=!0,an(E,z,q),E.side=pr,E.needsUpdate=!0,an(E,z,q),E.side=Nn):an(E,z,q)}this.compile=function(E,z,Q=null){Q===null&&(Q=E),L!==null&&L.renderStart(E,z,Q),w=J.get(Q),w.init(z),S.push(w),Q.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),E!==Q&&E.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),k=this.localClippingEnabled,ut=et.init(this.clippingPlanes,k),ut===!0&&et.setGlobalState(this.clippingPlanes,z),L!==null&&vt.render(w.state.shadowsArray,Q,z);let q=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Pt=K.material;if(Pt)if(Array.isArray(Pt))for(let kt=0;kt<Pt.length;kt++){let Ct=Pt[kt];Ne(Ct,Q,z,K),q.add(Ct)}else Ne(Pt,Q,z,K),q.add(Pt)}),w=S.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(E,z,Q=null){let q=this.compile(E,z,Q);return new Promise(K=>{function Pt(){if(q.forEach(function(kt){let Dt=Ht.get(kt).currentProgram;(Dt===void 0||Dt.isReady())&&q.delete(kt)}),q.size===0){K(E);return}setTimeout(Pt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Qe=null;function Ue(E){Qe&&Qe(E)}function Re(){si.stop()}function Me(){si.start()}let si=new vx;si.setAnimationLoop(Ue),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(E){Qe=E,rt.setAnimationLoop(E),E===null?si.stop():si.start()},rt.addEventListener("sessionstart",Re),rt.addEventListener("sessionend",Me),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,z);let Q=rt.enabled===!0&&rt.isPresenting===!0,q=C!==null&&(W===null||Q)&&C.begin(A,W);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(z),z=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,z,W),w=J.get(E,S.length),w.init(z),w.state.textureUnits=Yt.getTextureUnits(),S.push(w),xt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?ct.setFromArrayCamera(z):$.setFromProjectionMatrix(xt,Ln,z.reversedDepth),k=this.localClippingEnabled,ut=et.init(this.clippingPlanes,k),b=Et.get(E,x.length),b.init(),x.push(b),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let kt=A.xr.getDepthSensingMesh();kt!==null&&Ce(kt,z,-1/0,A.sortObjects)}Ce(E,z,0,A.sortObjects),b.finish(),L!==null&&L.updateLights(w.state.lightsArray),A.sortObjects===!0&&b.sort(Nt,me),Kt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Kt&&O.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),ut===!0&&et.beginShadows();let K=w.state.shadowsArray;if(vt.render(K,E,z),ut===!0&&et.endShadows(),(q&&C.hasRenderPass())===!1){let kt=b.opaque,Ct=b.transmissive;if(w.setupLights(),z.isArrayCamera){let Dt=z.cameras;if(Ct.length>0)for(let Wt=0,ie=Dt.length;Wt<ie;Wt++){let de=Dt[Wt];on(kt,Ct,E,de)}Kt&&O.render(E);for(let Wt=0,ie=Dt.length;Wt<ie;Wt++){let de=Dt[Wt];Ai(b,E,de,de.viewport)}}else Ct.length>0&&on(kt,Ct,E,z),Kt&&O.render(E),Ai(b,E,z)}W!==null&&U===0&&(Yt.updateMultisampleRenderTarget(W),Yt.updateRenderTargetMipmap(W)),q&&C.end(A),E.isScene===!0&&E.onAfterRender(A,E,z),Tt.resetDefaultState(),X=-1,R=null,S.pop(),S.length>0?(w=S[S.length-1],Yt.setTextureUnits(w.state.textureUnits),ut===!0&&et.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,L!==null&&L.renderEnd()};function Ce(E,z,Q,q){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let kt=z.isArrayCamera?ct:$;if(!E.frustumCulled||E.intersectsFrustum(kt)){q&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);let Ct=ft.update(E),Dt=E.material;Dt.visible&&b.push(E,Ct,Dt,Q,Ot.z,null,z)}}else if(E.isMesh||E.isLine||E.isPoints){let kt=z.isArrayCamera?ct:$;if(!E.frustumCulled||E.intersectsFrustum(kt)){let Ct=ft.update(E),Dt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ot.copy(Ct.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(Dt)){let Wt=Ct.groups;for(let ie=0,de=Wt.length;ie<de;ie++){let Gt=Wt[ie],pe=Dt[Gt.materialIndex];pe&&pe.visible&&b.push(E,Ct,pe,Q,Ot.z,Gt,z)}}else Dt.visible&&b.push(E,Ct,Dt,Q,Ot.z,null,z)}}}let Pt=E.children;for(let kt=0,Ct=Pt.length;kt<Ct;kt++)Ce(Pt[kt],z,Q,q)}function Ai(E,z,Q,q){let{opaque:K,transmissive:Pt,transparent:kt}=E;w.setupLightsView(Q),ut===!0&&et.setGlobalState(A.clippingPlanes,Q),q&&yt.viewport(V.copy(q)),K.length>0&&Ve(K,z,Q),Pt.length>0&&Ve(Pt,z,Q),kt.length>0&&Ve(kt,z,Q),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function on(E,z,Q,q){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){let Gt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new Ke(1,1,{generateMipmaps:!0,type:Gt?ui:rn,minFilter:Ns,samples:Math.max(4,$t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Pt=w.state.transmissionRenderTarget[q.id],kt=q.viewport||V;Pt.setSize(kt.z*A.transmissionResolutionScale,kt.w*A.transmissionResolutionScale);let Ct=A.getRenderTarget(),Dt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Pt),A.getClearColor(Y),at=A.getClearAlpha(),at<1&&A.setClearColor(16777215,.5),A.clear(),Kt&&O.render(Q);let ie=A.toneMapping;A.toneMapping=as;let de=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),ut===!0&&et.setGlobalState(A.clippingPlanes,q),Ve(E,Q,q),Yt.updateMultisampleRenderTarget(Pt),Yt.updateRenderTargetMipmap(Pt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let pe=0,ti=z.length;pe<ti;pe++){let Le=z[pe],{object:Pe,geometry:Ri,material:Vt,group:Hi}=Le;if(Vt.side===Nn&&Pe.layers.test(q.layers)){let ye=Vt.side;Vt.side=wi,Vt.needsUpdate=!0,je(Pe,Q,q,Ri,Vt,Hi),Vt.side=ye,Vt.needsUpdate=!0,Gt=!0}}Gt===!0&&(Yt.updateMultisampleRenderTarget(Pt),Yt.updateRenderTargetMipmap(Pt))}A.setRenderTarget(Ct,Dt,Wt),A.setClearColor(Y,at),de!==void 0&&(q.viewport=de),A.toneMapping=ie}function Ve(E,z,Q){let q=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Pt=E.length;K<Pt;K++){let kt=E[K],{object:Ct,geometry:Dt,group:Wt}=kt,ie=kt.material;ie.allowOverride===!0&&q!==null&&(ie=q),Ct.layers.test(Q.layers)&&je(Ct,z,Q,Dt,ie,Wt)}}function je(E,z,Q,q,K,Pt){L!==null&&K.isNodeMaterial&&L.setObject(E,K),E.onBeforeRender(A,z,Q,q,K,Pt),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(A,z,Q,q,E,Pt),K.transparent===!0&&K.side===Nn&&K.forceSinglePass===!1?(K.side=wi,K.needsUpdate=!0,A.renderBufferDirect(Q,z,q,K,E,Pt),K.side=pr,K.needsUpdate=!0,A.renderBufferDirect(Q,z,q,K,E,Pt),K.side=Nn):A.renderBufferDirect(Q,z,q,K,E,Pt),E.onAfterRender(A,z,Q,q,K,Pt)}function ri(E){let z=0;for(let Q of E)Q.texture!==null&&z++;return z}function an(E,z,Q){z.isScene!==!0&&(z=Bt);let q=Ht.get(E),K=w.state.lights,Pt=w.state.shadowsArray,kt=K.state.version,Ct=st.getParameters(E,K.state,Pt,z,Q,w.state.lightProbeGridArray),Dt=st.getProgramCacheKey(Ct),Wt=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=P.get(E.envMap||q.environment,ie),q.envMapRotation=q.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",Lt),Wt=new Map,q.programs=Wt,q.programVariants=new Map);let de=Wt.get(Dt);if(de!==void 0){if(q.currentProgram===de&&q.lightsStateVersion===kt)return We(E,Ct),de}else Ct.uniforms=st.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Q,Ct),E.onBeforeCompile(Ct,A),de=st.acquireProgram(Ct,Dt),Wt.set(Dt,de),q.uniforms=Ct.uniforms;let Gt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Gt.clippingPlanes=et.uniform),We(E,Ct),q.needsLights=Mc(E),q.lightsStateVersion=kt,q.needsLights&&(Gt.ambientLightColor.value=K.state.ambient,Gt.lightProbe.value=K.state.probe,Gt.sunLights.value=K.state.sun,Gt.sunLightShadows.value=K.state.sunShadow,Gt.directionalLights.value=K.state.directional,Gt.directionalLightShadows.value=K.state.directionalShadow,Gt.spotLights.value=K.state.spot,Gt.spotLightShadows.value=K.state.spotShadow,Gt.rectAreaLights.value=K.state.rectArea,Gt.ltc_1.value=K.state.rectAreaLTC1,Gt.ltc_2.value=K.state.rectAreaLTC2,Gt.pointLights.value=K.state.point,Gt.pointLightShadows.value=K.state.pointShadow,Gt.hemisphereLights.value=K.state.hemi,Gt.sunShadowMatrix.value=K.state.sunShadowMatrix,Gt.sunShadowCascade.value=K.state.sunShadowCascade,Gt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Gt.spotLightMatrix.value=K.state.spotLightMatrix,Gt.spotLightMap.value=K.state.spotLightMap,Gt.pointShadowMatrix.value=K.state.pointShadowMatrix),q.numLightProbeGrids=ri(w.state.lightProbeGridArray),q.currentProgram=de,q.uniformsList=null,de}function so(E,z,Q,q,K){let Pt=Ht.get(E),kt=Pt.currentProgram.id+","+q+","+K,Ct=Pt.programVariants.get(kt);return Ct===void 0?(Ct=an(E,z,Q),Pt.programVariants.set(kt,Ct)):(Pt.currentProgram=Ct,Pt.uniformsList=null,Pt.outputColorSpace=q,Pt.toneMapping=K),Ct}function oi(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=ha.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function We(E,z){let Q=Ht.get(E);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function Tn(E,z,Q,q,K){z.isScene!==!0&&(z=Bt),Yt.resetTextureUnits();let Pt=z.fog,kt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Ct=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ue.workingColorSpace,Dt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Wt=P.get(q.envMap||kt,Dt),ie=q.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,de=!!Q.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Gt=!!Q.morphAttributes.position,pe=!!Q.morphAttributes.normal,ti=!!Q.morphAttributes.color,Le=as;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Le=A.toneMapping);let Pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ri=Pe!==void 0?Pe.length:0,Vt=Ht.get(q),Hi=w.state.lights;if(ut===!0&&(k===!0||E!==R)){let Be=E===R&&q.id===X;et.setState(q,E,Be)}let ye=!1,xr=!1;q.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==Hi.state.version||K.isBatchedMesh&&Vt.batching===!1||!K.isBatchedMesh&&Vt.batching===!0||K.isBatchedMesh&&Vt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Vt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Vt.instancing===!1||!K.isInstancedMesh&&Vt.instancing===!0||K.isSkinnedMesh&&Vt.skinning===!1||!K.isSkinnedMesh&&Vt.skinning===!0||K.isInstancedMesh&&Vt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Vt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Vt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Vt.instancingMorph===!1&&K.morphTexture!==null||Vt.envMap!==Wt||q.fog===!0&&Vt.fog!==Pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==et.numPlanes||Vt.numIntersection!==et.numIntersection)||Vt.vertexAlphas!==ie||Vt.vertexTangents!==de||Vt.morphTargets!==Gt||Vt.morphNormals!==pe||Vt.morphColors!==ti||Vt.morphTargetsCount!==Ri||Vt.numLightProbeGrids!==ri(w.state.lightProbeGridArray)?ye=!0:(Vt.outputColorSpace!==Ct||Vt.toneMapping!==Le)&&(xr=!0):(ye=!0,Vt.__version=q.version);let Ci=Vt.currentProgram;(ye===!0||xr===!0)&&(Ci=xr===!0?so(q,z,K,Ct,Le):an(q,z,K),L&&q.isNodeMaterial&&L.onUpdateProgram(q,Ci,Vt));let bc=!1,Hs=!1,vr=!1,xe=Ci.getUniforms(),vi=Vt.uniforms;if(yt.useProgram(Ci.program)&&(bc=!0,Hs=!0,vr=!0),q.id!==X&&(X=q.id,Hs=!0),bc||R!==E){yt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(B,"projectionMatrix",E.projectionMatrix),xe.setValue(B,"viewMatrix",E.matrixWorldInverse);let pi=xe.map.cameraPosition;pi!==void 0&&pi.setValue(B,Xt.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&xe.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xe.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,Hs=!0,vr=!0)}if(Vt.needsLights&&(Hi.state.sunShadowMap.length>0&&xe.setValue(B,"sunShadowMap",Hi.state.sunShadowMap,Yt),Hi.state.directionalShadowMap.length>0&&xe.setValue(B,"directionalShadowMap",Hi.state.directionalShadowMap,Yt),Hi.state.spotShadowMap.length>0&&xe.setValue(B,"spotShadowMap",Hi.state.spotShadowMap,Yt),Hi.state.pointShadowMap.length>0&&xe.setValue(B,"pointShadowMap",Hi.state.pointShadowMap,Yt)),K.isSkinnedMesh){xe.setOptional(B,K,"bindMatrix"),xe.setOptional(B,K,"bindMatrixInverse");let Be=K.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),xe.setValue(B,"boneTexture",Be.boneTexture,Yt))}K.isBatchedMesh&&(xe.setOptional(B,K,"batchingTexture"),xe.setValue(B,"batchingTexture",K._matricesTexture,Yt),xe.setOptional(B,K,"batchingIdTexture"),xe.setValue(B,"batchingIdTexture",K._indirectTexture,Yt),xe.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&xe.setValue(B,"batchingColorTexture",K._colorsTexture,Yt));let zn=Q.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&tt.update(K,Q,Ci),(Hs||Vt.receiveShadow!==K.receiveShadow)&&(Vt.receiveShadow=K.receiveShadow,xe.setValue(B,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(vi.envMapIntensity.value=z.environmentIntensity),vi.dfgLUT!==void 0&&(vi.dfgLUT.value=uE()),Hs){if(xe.setValue(B,"toneMappingExposure",A.toneMappingExposure),Vt.needsLights&&Sa(vi,vr),Pt&&q.fog===!0&&St.refreshFogUniforms(vi,Pt),St.refreshMaterialUniforms(vi,q,dt,At,w.state.transmissionRenderTarget[E.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){let Be=y,pi=0;for(let us of w.state.lightProbeGridArray)us.texture!==null&&(Be.textures[pi]=us.texture,Be.min[pi]=us.boundingBox.min,Be.max[pi]=us.boundingBox.max,Be.resolution[pi]=us.resolution,pi++);for(let us in Be)Be[us].length=pi;vi.probesSH.value=Be.textures,vi.probesMin.value=Be.min,vi.probesMax.value=Be.max,vi.probesResolution.value=Be.resolution}ha.upload(B,oi(Vt),vi,Yt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ha.upload(B,oi(Vt),vi,Yt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xe.setValue(B,"center",K.center),xe.setValue(B,"modelViewMatrix",K.modelViewMatrix),xe.setValue(B,"normalMatrix",K.normalMatrix),xe.setValue(B,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){let Be=q.uniformsGroups;for(let pi=0,us=Be.length;pi<us;pi++){let dm=Be[pi];pt.update(dm,Ci),pt.bind(dm,Ci)}}return Ci}function Sa(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Mc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(E,z,Q){let q=Ht.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ht.get(E.texture).__webglTexture=z,Ht.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Q,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let Q=Ht.get(E);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Q=0){W=E,F=z,U=Q;let q=null,K=!1,Pt=!1;if(E){let Ct=Ht.get(E);if(Ct.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(B.FRAMEBUFFER,Ct.__webglFramebuffer),V.copy(E.viewport),ot.copy(E.scissor),Mt=E.scissorTest,yt.viewport(V),yt.scissor(ot),yt.setScissorTest(Mt),X=-1;return}else if(Ct.__webglFramebuffer===void 0)Yt.setupRenderTarget(E);else if(Ct.__hasExternalTextures)Yt.rebindTextures(E,Ht.get(E.texture).__webglTexture,Ht.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ie=E.depthTexture;if(Ct.__boundDepthTexture!==ie){if(ie!==null&&Ht.has(ie)&&(E.width!==ie.image.width||E.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Pt=!0);let Wt=Ht.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?q=Wt[z][Q]:q=Wt[z],K=!0):E.samples>0&&Yt.useMultisampledRTT(E)===!1?q=Ht.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?q=Wt[Q]:q=Wt,V.copy(E.viewport),ot.copy(E.scissor),Mt=E.scissorTest}else V.copy(Ut).multiplyScalar(dt).floor(),ot.copy(lt).multiplyScalar(dt).floor(),Mt=ht;if(Q!==0&&(q=G),yt.bindFramebuffer(B.FRAMEBUFFER,q)&&yt.drawBuffers(E,q),yt.viewport(V),yt.scissor(ot),yt.setScissorTest(Mt),K){let Ct=Ht.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ct.__webglTexture,Q)}else if(Pt){let Ct=z;for(let Dt=0;Dt<E.textures.length;Dt++){let Wt=Ht.get(E.textures[Dt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Dt,Wt.__webglTexture,Q,Ct)}}else if(E!==null&&Q!==0){let Ct=Ht.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,Q)}X=-1};function ks(E){let z=Ht.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=$t.textureFormatReadable(E.format),z.__typeReadable=$t.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,Q,q,K,Pt,kt,Ct=0){if(!(E&&E.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&kt!==void 0&&(Dt=Dt[kt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){yt.bindFramebuffer(B.FRAMEBUFFER,Dt);try{let Wt=E.textures[Ct],ie=Wt.format,de=Wt.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ct);let Gt=ks(Wt);if(Gt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-q&&Q>=0&&Q<=E.height-K&&B.readPixels(z,Q,q,K,mt.convert(ie),mt.convert(de),Pt)}finally{let Wt=W!==null?Ht.get(W).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(E,z,Q,q,K,Pt,kt,Ct=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&kt!==void 0&&(Dt=Dt[kt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(z>=0&&z<=E.width-q&&Q>=0&&Q<=E.height-K){yt.bindFramebuffer(B.FRAMEBUFFER,Dt);let Wt=E.textures[Ct],ie=Wt.format,de=Wt.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ct);let Gt=ks(Wt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pe),B.bufferData(B.PIXEL_PACK_BUFFER,Pt.byteLength,B.STREAM_READ),B.readPixels(z,Q,q,K,mt.convert(ie),mt.convert(de),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let ti=W!==null?Ht.get(W).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,ti);let Le=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await H_(B,Le,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(pe),B.deleteSync(Le),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Q=0){let q=Math.pow(2,-Q),K=Math.floor(E.image.width*q),Pt=Math.floor(E.image.height*q),kt=z!==null?z.x:0,Ct=z!==null?z.y:0;Yt.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,kt,Ct,K,Pt),yt.unbindTexture()},this.copyTextureToTexture=function(E,z,Q=null,q=null,K=0,Pt=0){let kt,Ct,Dt,Wt,ie,de,Gt,pe,ti,Le=E.isCompressedTexture?E.mipmaps[Pt]:E.image;if(Q!==null)kt=Q.max.x-Q.min.x,Ct=Q.max.y-Q.min.y,Dt=Q.isBox3?Q.max.z-Q.min.z:1,Wt=Q.min.x,ie=Q.min.y,de=Q.isBox3?Q.min.z:0;else{let xe=Math.pow(2,-K);kt=Math.floor(Le.width*xe),Ct=Math.floor(Le.height*xe),E.isDataArrayTexture?Dt=Le.depth:E.isData3DTexture?Dt=Math.floor(Le.depth*xe):Dt=1,Wt=0,ie=0,de=0}q!==null?(Gt=q.x,pe=q.y,ti=q.z):(Gt=0,pe=0,ti=0);let Pe=mt.convert(z.format),Ri=mt.convert(z.type),Vt;z.isData3DTexture?(Yt.setTexture3D(z,0),Vt=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Yt.setTexture2DArray(z,0),Vt=B.TEXTURE_2D_ARRAY):(Yt.setTexture2D(z,0),Vt=B.TEXTURE_2D),yt.activeTexture(B.TEXTURE0),yt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),yt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),yt.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Hi=yt.getParameter(B.UNPACK_ROW_LENGTH),ye=yt.getParameter(B.UNPACK_IMAGE_HEIGHT),xr=yt.getParameter(B.UNPACK_SKIP_PIXELS),Ci=yt.getParameter(B.UNPACK_SKIP_ROWS),bc=yt.getParameter(B.UNPACK_SKIP_IMAGES);yt.pixelStorei(B.UNPACK_ROW_LENGTH,Le.width),yt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le.height),yt.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),yt.pixelStorei(B.UNPACK_SKIP_ROWS,ie),yt.pixelStorei(B.UNPACK_SKIP_IMAGES,de);let Hs=E.isDataArrayTexture||E.isData3DTexture,vr=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let xe=Ht.get(E),vi=Ht.get(z),zn=Ht.get(xe.__renderTarget),Be=Ht.get(vi.__renderTarget);yt.bindFramebuffer(B.READ_FRAMEBUFFER,zn.__webglFramebuffer),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let pi=0;pi<Dt;pi++)Hs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ht.get(E).__webglTexture,K,de+pi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ht.get(z).__webglTexture,Pt,ti+pi)),B.blitFramebuffer(Wt,ie,Wt+kt,ie+Ct,Gt,pe,Gt+kt,pe+Ct,B.DEPTH_BUFFER_BIT,B.NEAREST);yt.bindFramebuffer(B.READ_FRAMEBUFFER,null),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||Ht.has(E)){let xe=Ht.get(E),vi=Ht.get(z);yt.bindFramebuffer(B.READ_FRAMEBUFFER,I),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,N);for(let zn=0;zn<Dt;zn++)Hs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xe.__webglTexture,K,de+zn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xe.__webglTexture,K),vr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vi.__webglTexture,Pt,ti+zn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vi.__webglTexture,Pt),K!==0?B.blitFramebuffer(Wt,ie,Wt+kt,ie+Ct,Gt,pe,Gt+kt,pe+Ct,B.COLOR_BUFFER_BIT,B.NEAREST):vr?B.copyTexSubImage3D(Vt,Pt,Gt,pe,ti+zn,Wt,ie,kt,Ct):B.copyTexSubImage2D(Vt,Pt,Gt,pe,Wt,ie,kt,Ct);yt.bindFramebuffer(B.READ_FRAMEBUFFER,null),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vr?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Vt,Pt,Gt,pe,ti,kt,Ct,Dt,Pe,Ri,Le.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Vt,Pt,Gt,pe,ti,kt,Ct,Dt,Pe,Le.data):B.texSubImage3D(Vt,Pt,Gt,pe,ti,kt,Ct,Dt,Pe,Ri,Le):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pt,Gt,pe,kt,Ct,Pe,Ri,Le.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pt,Gt,pe,Le.width,Le.height,Pe,Le.data):B.texSubImage2D(B.TEXTURE_2D,Pt,Gt,pe,kt,Ct,Pe,Ri,Le);yt.pixelStorei(B.UNPACK_ROW_LENGTH,Hi),yt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ye),yt.pixelStorei(B.UNPACK_SKIP_PIXELS,xr),yt.pixelStorei(B.UNPACK_SKIP_ROWS,Ci),yt.pixelStorei(B.UNPACK_SKIP_IMAGES,bc),Pt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&B.generateMipmap(Vt),yt.unbindTexture()},this.initRenderTarget=function(E){Ht.get(E).__webglFramebuffer===void 0&&Yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Yt.setTextureCube(E,0):E.isData3DTexture?Yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Yt.setTexture2DArray(E,0):Yt.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){F=0,U=0,W=null,yt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var gc=new H;function On(s,t,e,i,n,r){let o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;gc.copy(t),gc[i]=0,gc.normalize();let c=.5*o/(o+a),h=1-gc.angleTo(s)/l;return Math.sign(gc[e])===1?h*c:a/(o+a)+c+c*(1-h)}var hs=class s extends os{constructor(t=1,e=1,i=1,n=2,r=.1){let o=n*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new H,c=new H,h=new H(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,m=d.length/6,_=new H,p=.5/o;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/m)){case 0:_.set(1,0,0),u[v+0]=On(_,c,"z","y",r,i),u[v+1]=1-On(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),u[v+0]=1-On(_,c,"z","y",r,i),u[v+1]=1-On(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),u[v+0]=1-On(_,c,"x","z",r,t),u[v+1]=On(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),u[v+0]=1-On(_,c,"x","z",r,t),u[v+1]=1-On(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),u[v+0]=1-On(_,c,"x","y",r,t),u[v+1]=1-On(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),u[v+0]=On(_,c,"x","y",r,t),u[v+1]=1-On(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var xf=class extends Wr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new os;t.deleteAttribute("uv");let e=new Ki({side:wi}),i=new Ki,n=new Jr(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Yr(t,i,6),a=new $e;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new jt(t,da(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new jt(t,da(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new jt(t,da(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new jt(t,da(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new jt(t,da(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new jt(t,da(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function da(s){return new Wl({color:0,emissive:16777215,emissiveIntensity:s})}var pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dE=new Kr(-1,1,1,-1,0,1),cm=class extends hi{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}},pE=new cm,_r=class{constructor(t){this._mesh=new jt(pE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var vf=class extends Mn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fs.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _r(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _c=class extends Mn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},yf=class extends Mn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Sf=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new gt);this._width=i.width,this._height=i.height,e=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vf(pa),this.copyPass.material.blending=Ds,this.timer=new Kl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_c!==void 0&&(o instanceof _c?i=!0:o instanceof yf&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mf=class extends Mn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new qt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Px={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ma=class s extends Mn{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new gt(t.x,t.y):new gt(256,256),this.clearColor=new qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(r,o,{type:ui,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ke(r,o,{type:ui,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ke(r,o,{type:ui,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Px;this.highPassUniforms=Fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new gt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fs.clone(pa.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:mr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new qt,this._oldClearAlpha=1,this._basic=new vn,this._fsQuad=new _r(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new gt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new Ze({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new gt(.5,.5)},direction:{value:new gt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ma.BlurDirectionX=new gt(1,0);ma.BlurDirectionY=new gt(0,1);var xc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var bf=class extends Mn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fs.clone(xc.uniforms),this.material=new ia({name:xc.name,uniforms:this.uniforms,vertexShader:xc.vertexShader,fragmentShader:xc.fragmentShader}),this._fsQuad=new _r(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ic&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Bn="Archivo, system-ui, sans-serif",mE='ui-monospace, "Cascadia Mono", Consolas, Menlo, monospace',bn="#f2f2f2",hm="#a8a8a8",ga="#757575",_a="#e3372d",gE="#0a0a0a";function va(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function um(s){return new Promise((t,e)=>{let i=new Image;i.onload=()=>t(i),i.onerror=()=>e(new Error("could not load "+s)),i.src=s})}function Fn(s,t,e,i=Bn,n="normal",r=0){s.font=`${t} ${e}px ${i}`,"fontStretch"in s&&(s.fontStretch=n),"letterSpacing"in s&&(s.letterSpacing=r+"px")}var _E=s=>(s=Math.max(0,Math.floor(s)),String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"));function Ix(s,{sec:t,answered:e,cursor:i}){let n=s.canvas.width,r=s.canvas.height;s.fillStyle="#0c0c0c",s.fillRect(0,0,n,r),s.fillStyle="#161616",s.fillRect(0,0,n,52),["#3a3a3a","#3a3a3a","#3a3a3a"].forEach((d,f)=>{s.fillStyle=d,s.beginPath(),s.arc(34+f*26,26,7,0,Math.PI*2),s.fill()}),Fn(s,500,20,Bn,"normal",1),s.fillStyle=ga,s.textAlign="center",s.fillText("claude  \xB7  storefront",n/2,33),s.textAlign="left";let o=64;Fn(s,400,27,mE),s.fillStyle=bn,s.fillText("> Build the site and run the end-to-end tests",o,128),s.fillStyle=e?ga:_a,s.fillText("\u25CF",o,198),s.fillStyle=bn,s.fillText("Bash(npm run build && npx playwright test)",o+30,198),s.fillStyle=ga,s.fillText("  \u2514 Builds the site, then runs the tests",o,240),s.fillStyle=bn,s.fillText("Do you want to proceed?",o,330),s.fillText("\u276F 1. Yes",o,380),s.fillStyle=hm,s.fillText("  2. No",o,426),e?(s.fillStyle=bn,s.fillText("\u2713 Allowed from Glassdeck on the phone",o,512),s.fillStyle=ga,s.fillText("  Running npm run build\u2026",o,556)):i&&(s.fillStyle=bn,s.fillRect(o+128,404,15,30));let a=n-64-330,l=100,c=330,h=160;s.strokeStyle=e?"#3e3e3e":_a,s.lineWidth=3,s.strokeRect(a,l,c,h),Fn(s,600,20,Bn,"expanded",5),s.fillStyle=e?ga:_a,s.fillText(e?"ANSWERED":"WAITING",a+28,l+44),Fn(s,300,84,Bn,"expanded",2),s.fillStyle=e?ga:bn,s.fillText(_E(t),a+24,l+132)}function Lx(s,{qr:t,scan:e,paired:i}){let n=s.canvas.width,r=s.canvas.height;s.fillStyle=gE,s.fillRect(0,0,n,r);let o=90;Fn(s,300,60,Bn,"expanded",9),s.fillStyle=bn,s.fillText("GLASSDECK",o,170),s.fillStyle=_a,s.fillRect(o,200,150,9),Fn(s,500,44,Bn,"semi-expanded"),s.fillStyle=bn,s.fillText(i?"Phone paired":"Pair a phone",o,310),Fn(s,400,25,Bn),s.fillStyle=hm,i?(s.fillText("The panel is open on your phone.",o,362),s.fillText("Add it to the Home Screen to finish.",o,400)):(s.fillText("Scan this code with your phone's camera.",o,362),s.fillText("Same Wi-Fi, or Tailscale away from home.",o,400));let a=420,l=n-90-a,c=(r-a)/2;s.fillStyle="#fff",xa(s,l,c,a,a,18),s.fill();let h=34;if(s.imageSmoothingEnabled=!1,s.drawImage(t,l+h,c+h,a-h*2,a-h*2),s.imageSmoothingEnabled=!0,i)s.fillStyle="rgba(10,10,10,.82)",xa(s,l,c,a,a,18),s.fill(),s.strokeStyle=bn,s.lineWidth=10,s.beginPath(),s.moveTo(l+a*.32,c+a*.52),s.lineTo(l+a*.45,c+a*.64),s.lineTo(l+a*.7,c+a*.38),s.stroke();else if(e>=0){let d=c+10+e*(a-20),f=s.createLinearGradient(0,d-40,0,d+4);f.addColorStop(0,"rgba(227,55,45,0)"),f.addColorStop(1,"rgba(227,55,45,.45)"),s.fillStyle=f,s.fillRect(l,d-40,a,44),s.fillStyle=_a,s.fillRect(l-12,d,a+24,4)}}function Dx(s,{qr:t,t:e,found:i,icon:n}){let r=s.canvas.width,o=s.canvas.height,a=s.createRadialGradient(r/2,o/2,40,r/2,o/2,r*.6);a.addColorStop(0,"#1d1d1d"),a.addColorStop(1,"#070707"),s.fillStyle=a,s.fillRect(0,0,r,o);let l=o*.62,c=(r-l)/2,h=(o-l)/2-o*.03;s.fillStyle="#e9e9e9",xa(s,c,h,l,l,10),s.fill();let d=l*.08;s.imageSmoothingEnabled=!1,s.drawImage(t,c+d,h+d,l-d*2,l-d*2),s.imageSmoothingEnabled=!0;let f=26,u=46;if(s.strokeStyle=i?bn:"rgba(242,242,242,.8)",s.lineWidth=6,[[c-f,h-f,1,1],[c+l+f,h-f,-1,1],[c-f,h+l+f,1,-1],[c+l+f,h+l+f,-1,-1]].forEach(([m,_,p,g])=>{s.beginPath(),s.moveTo(m,_+g*u),s.lineTo(m,_),s.lineTo(m+p*u,_),s.stroke()}),i){let p=(r-470)/2,g=o-74-34;s.fillStyle="rgba(242,242,242,.96)",xa(s,p,g,470,74,74/2),s.fill(),n&&s.drawImage(n,p+14,g+11,52,52),Fn(s,600,28,Bn),s.fillStyle="#111",s.fillText("Open Glassdeck",p+84,g+47)}else{let m=h+(Math.sin(e*3)+1)/2*l;s.fillStyle=_a,s.fillRect(c-20,m-2,l+40,4)}Fn(s,600,22,Bn,"expanded",4),s.fillStyle=i?bn:hm,s.textAlign="center",s.fillText(i?"GLASSDECK FOUND":"SCANNING",r/2,52),s.textAlign="left"}function Nx(s,{icon:t}){let e=s.canvas.width,i=s.canvas.height;s.fillStyle="#0b0b0b",s.fillRect(0,0,e,i),s.strokeStyle="rgba(62,62,62,.7)",s.lineWidth=2;for(let a=0;a<9;a++){let l=i*.55+a*30;s.beginPath();for(let c=0;c<=e;c+=12){let h=(c-e*.5)/(e*.18),d=l-(40+a*6)*Math.exp(-h*h)-12*Math.sin(c*.01+a);c?s.lineTo(c,d):s.moveTo(c,d)}s.stroke()}Fn(s,600,26,Bn),s.fillStyle=bn,s.fillText("10:24",64,54);let n=168,r=(e-n)/2,o=i*.22;s.save(),xa(s,r,o,n,n,38),s.clip(),s.drawImage(t,r,o,n,n),s.restore(),s.strokeStyle="#2b2b2b",s.lineWidth=2,xa(s,r,o,n,n,38),s.stroke(),Fn(s,500,28,Bn),s.fillStyle=bn,s.textAlign="center",s.fillText("Glassdeck",e/2,o+n+46),s.textAlign="left"}function Ux(s,t){let e=s.canvas.width;s.clearRect(0,0,e,e),Fn(s,500,e*.5,Bn),s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle",s.fillText(t,e/2,e/2+2)}function Ox(s){let t=s.canvas.width,e=s.canvas.height,i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(0,0,0,.85)"),i.addColorStop(.6,"rgba(0,0,0,.35)"),i.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)}function xa(s,t,e,i,n,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+i,e,t+i,e+n,r),s.arcTo(t+i,e+n,t,e+n,r),s.arcTo(t,e+n,t,e,r),s.arcTo(t,e,t+i,e,r),s.closePath()}var no=new qt("#e3372d"),Fx=["hero","night","perm","wait","system","procs","music","mixer","deck","trackpad","ai","dev","weather","now-music"];function Bs(s,t,e){let i=new cr,n=-s/2,r=-t/2;return i.moveTo(n+e,r),i.lineTo(n+s-e,r),i.absarc(n+s-e,r+e,e,-Math.PI/2,0,!1),i.lineTo(n+s,r+t-e),i.absarc(n+s-e,r+t-e,e,0,Math.PI/2,!1),i.lineTo(n+e,r+t),i.absarc(n+e,r+t-e,e,Math.PI/2,Math.PI,!1),i.lineTo(n,r+e),i.absarc(n+e,r+e,e,Math.PI,Math.PI*1.5,!1),i}function vc(s,t=24){let e=new Hl(s,t);e.computeBoundingBox();let i=e.boundingBox,n=e.attributes.position,r=e.attributes.uv;for(let o=0;o<n.count;o++)r.setXY(o,(n.getX(o)-i.min.x)/(i.max.x-i.min.x),(n.getY(o)-i.min.y)/(i.max.y-i.min.y));return r.needsUpdate=!0,e}function yc(s){let t=new Cl(s);return t.colorSpace=bi,t.anisotropy=4,t}var fm=class{constructor(t,e,i){this.name=t,this.holder=e,this.poster=i.load(`media/${t}.jpg`),this.poster.colorSpace=bi,this.video=null,this.tex=null,this.live=!1,this.tried=-1e9}ensure(){if(this.video)return;let t=document.createElement("video");t.muted=!0,t.defaultMuted=!0,t.loop=!0,t.playsInline=!0,t.setAttribute("playsinline",""),t.setAttribute("muted",""),t.preload="auto",t.src=`media/${this.name}.mp4`,t.addEventListener("playing",()=>{this.live=!0}),this.holder.appendChild(t),this.video=t,this.tex=new Al(t),this.tex.colorSpace=bi,this.tex.minFilter=ci,this.tex.generateMipmaps=!1}want(t){if(t){this.ensure();let e=performance.now();if(this.video.paused&&e-this.tried>2e3){this.tried=e;let i=this.video.play();i&&i.catch&&i.catch(()=>{})}}else this.video&&!this.video.paused&&this.video.pause()}texture(){return this.live&&this.video.readyState>=2?(this.video.paused||(this.tex.needsUpdate=!0),this.tex):this.poster}},vE=`
uniform float uTime, uAmp, uBase;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++){ v += a * noise(p); p = p * 2.03 + 7.1; a *= 0.5; } return v; }
float ridge(vec2 xz){
  vec2 p = xz * vec2(0.13, 0.19) + vec2(0.0, uTime * 0.045);
  float h = pow(fbm(p), 1.7) * 4.2;
  float centre = exp(-pow(xz.x / 10.0, 2.0));
  return h * (0.3 + 1.0 * centre) * uAmp;
}`;function yE(s,t){let o=s*t*4,a=new Float32Array(o*3),l=new Float32Array(o),c=[],h=0;for(let _=0;_<s;_++){let p=-3.2+-62.8*(_/(s-1))**1.15,g=h;for(let v=0;v<t;v++){let M=-36+72*v/(t-1);for(let y=0;y<4;y++)a[h*3]=M,a[h*3+1]=0,a[h*3+2]=p,l[h]=y,h++}for(let v=0;v<t-1;v++){let M=g+v*4,y=M+4;c.push(M,M+1,y,y,M+1,y+1),c.push(M+2,M+3,y+2,y+2,M+3,y+3)}}let d=new hi;d.setAttribute("position",new sn(a,3)),d.setAttribute("aKind",new sn(l,1)),d.setIndex(c);let f={uTime:{value:0},uAmp:{value:1},uBase:{value:-1.7},uPx:{value:.002},uWaveZ:{value:-100},uWaveAmt:{value:0},uRed:{value:no.clone()}},u=new Ze({uniforms:f,vertexShader:vE+`
      attribute float aKind;
      uniform float uPx;
      varying float vLine, vDepth, vZ, vH;
      void main(){
        vec3 p = position;
        float h = ridge(p.xz);
        vec4 mv0 = modelViewMatrix * vec4(p.x, uBase + h, p.z, 1.0);
        float depth = -mv0.z;
        float px = depth * uPx;                       // one screen pixel at this depth, in world units
        float y = uBase + h;
        if (aKind > 0.5 && aKind < 1.5) y -= px * 1.3;   // bottom of the 1.3 px line
        if (aKind > 1.5 && aKind < 2.5) y -= px * 1.1;   // curtain starts just under the line
        if (aKind > 2.5) y = uBase - 9.0;
        vLine = aKind < 1.5 ? 1.0 : 0.0;
        vDepth = depth; vZ = p.z; vH = h;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p.x, y, p.z, 1.0);
      }`,fragmentShader:`
      uniform float uWaveZ, uWaveAmt; uniform vec3 uRed;
      varying float vLine, vDepth, vZ, vH;
      void main(){
        vec3 bg = vec3(0.00304);                      // #0a0a0a in linear light
        float near = smoothstep(58.0, 4.0, vDepth);
        vec3 line = mix(vec3(0.010), vec3(0.075), near) + vH * 0.012;
        float wave = exp(-pow((vZ - uWaveZ) / 1.8, 2.0)) * uWaveAmt;
        line = mix(line, uRed * 1.6, clamp(wave, 0.0, 1.0));
        float fog = smoothstep(66.0, 46.0, vDepth);
        vec3 c = mix(bg, mix(bg, line, vLine), fog);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,fog:!1}),m=new jt(d,u);return m.frustumCulled=!1,{mesh:m,uniforms:f}}function SE(){let s=new _n,t=1.74,e=.82,i=.13,n=new hr(Bs(t,e,i),{depth:.06,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:5,curveSegments:28});n.translate(0,0,-.03);let r=new Ki({color:2763309,metalness:1,roughness:.5,envMapIntensity:.45});s.add(new jt(n,r));let o=new jt(vc(Bs(t,e,i)),new Ls({color:131586,roughness:.2,metalness:0,clearcoat:.4,clearcoatRoughness:.2,envMapIntensity:.35}));o.position.z=.0425,s.add(o);let a=1.623,l=.75,c={tA:{value:null},tB:{value:null},uMix:{value:1},uBright:{value:1},uRed:{value:no.clone()}},h=new Ze({uniforms:c,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D tA, tB; uniform float uMix, uBright; uniform vec3 uRed; varying vec2 vUv;
      void main(){
        vec3 a = texture2D(tA, vUv).rgb, b = texture2D(tB, vUv).rgb;
        float edge = uMix * 1.08 - 0.04;
        vec3 c = mix(a, b, step(vUv.x, edge));
        float wiping = step(0.001, uMix) * step(uMix, 0.999);
        float line = smoothstep(0.012, 0.0, abs(vUv.x - edge)) * wiping;
        c = mix(c, uRed * 5.0, line);
        gl_FragColor = vec4(c * uBright * 0.9, 1.0);      // white UI stays under the bloom threshold
        #include <colorspace_fragment>
      }`,toneMapped:!1}),d=new jt(vc(Bs(a,l,.085)),h);d.position.z=.0432,s.add(d);let f=new jt(vc(Bs(.036,.17,.018)),new vn({color:0}));f.position.set(-a/2+.045,0,.0436),s.add(f);let u=new jt(vc(Bs(t-.01,e-.01,i)),new Ls({color:2302758,roughness:.55,metalness:.2,clearcoat:.3}));u.position.z=-.0425,u.rotation.y=Math.PI,s.add(u);let m=new jt(new hr(Bs(.36,.36,.08),{depth:.012,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:3,curveSegments:16}),new Ls({color:2763309,roughness:.25,metalness:.6,clearcoat:1}));m.rotation.y=Math.PI,m.position.set(.62,.17,-.043),s.add(m);let _=new Ls({color:329224,roughness:.05,metalness:.2,clearcoat:1}),p=new Ki({color:7829372,metalness:1,roughness:.25});[[.56,.23],[.56,.11],[.68,.17]].forEach(([b,w])=>{let x=new jt(new qr(.058,.058,.022,32),p);x.rotation.x=Math.PI/2,x.position.set(b,w,-.066);let S=new jt(new qr(.044,.044,.024,32),_);S.rotation.x=Math.PI/2,S.position.set(b,w,-.067),s.add(x,S)});let g=new $e;g.position.set(.6,.17,-.08),s.add(g);let v=new Ki({color:3815998,metalness:1,roughness:.5,envMapIntensity:.45});[[-.42,.2],[-.12,.13],[.08,.13]].forEach(([b,w])=>{let x=new jt(new hs(w,.02,.028,2,.008),v);x.position.set(b,e/2+.014,0),s.add(x)});let M=new hi().setFromPoints(Bs(t+.04,e+.04,i+.02).getPoints(48)),y=[0,1,2].map(()=>{let b=new El(M,new Qo({color:no.clone().multiplyScalar(4),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return b.position.z=0,s.add(b),b});return{group:s,screenU:c,rings:y,camAnchor:g}}function ME(){let s=new _n,t=new Ki({color:1184275,roughness:.5,metalness:.15}),e=new jt(new hs(6.6,.1,2.9,3,.03),t);e.position.set(0,-.05,-.2),s.add(e);let i=new Ki({color:1907999,metalness:.9,roughness:.38}),n=new _n;n.position.set(-.5,1.15,-.85);let r=new jt(new hr(Bs(2.72,1.58,.05),{depth:.04,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:3,curveSegments:12}),i);r.position.z=-.05;let o=new jt(vc(Bs(2.7,1.56,.045)),new Ls({color:197379,roughness:.15,clearcoat:1}));o.position.z=5e-4;let a=va(1280,720),l=yc(a),c=new jt(new Is(2.6,1.4625),new vn({map:l,color:14606046,toneMapped:!1}));c.position.z=.002,n.add(r,o,c);let h=new jt(new hs(.2,1.05,.06,2,.025),i);h.position.set(-.5,.55,-1),h.rotation.x=-.12;let d=new jt(new hs(.95,.03,.52,2,.012),i);d.position.set(-.5,.015,-.92),s.add(n,h,d);let f=new _n;f.position.set(-.5,0,.42);let u=new jt(new hs(1.96,.05,.66,3,.022),i);u.position.y=.025,f.add(u);let m=new hs(.104,.03,.104,2,.012),_=new Ki({color:1579034,roughness:.55,metalness:.1}),p=15,g=5,v=.122,M=new Yr(m,_,p*g),y=new Se,b=0;for(let R=0;R<g;R++)for(let V=0;V<p;V++){let ot=(V-(p-1)/2)*v,Mt=(R-(g-1)/2)*v,Y=R===0&&V===1||R===4&&V>=4&&V<=10;y.makeScale(Y?0:1,Y?0:1,Y?0:1),y.setPosition(ot,.065,Mt),M.setMatrixAt(b++,y)}f.add(M);let w=new jt(new hs(v*7-.018,.03,.104,2,.012),_);w.position.set(0,.065,2*v),f.add(w);let x=new Ki({color:1579034,roughness:.5,emissive:no.clone(),emissiveIntensity:0}),S=new jt(m,x);S.position.set((1-(p-1)/2)*v,.065,-2*v);let C=va(64,64);Ux(C.getContext("2d"),"1");let A=new jt(new Is(.07,.07),new vn({map:yc(C),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.85}));A.rotation.x=-Math.PI/2,A.position.set(S.position.x,.081,S.position.z),f.add(S,A),s.add(f);let D=new _n;D.position.set(1.78,0,.3),D.rotation.y=-.32;let L=new cr;L.moveTo(.17,0),L.lineTo(.17,.05),L.lineTo(.11,.05),L.lineTo(.11-.25*.4,.45),L.lineTo(-.13,.45),L.lineTo(-.13,0),L.lineTo(.17,0);let G=new hr(L,{depth:.46,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:2});G.translate(0,0,-.23);let I=new jt(G,i);I.rotation.y=-Math.PI/2,D.add(I),s.add(D);let N=new $e,F=.05+.246*Math.cos(.245);N.position.set(0,F,.11-.25*(F-.05)+.03),N.rotation.set(-.245,0,0,"YXZ"),D.add(N);let U=va(128,128);Ox(U.getContext("2d"));let W=yc(U),X=(R,V,ot,Mt,Y=0,at=.7)=>{let _t=new jt(new Is(R,V),new vn({map:W,transparent:!0,depthWrite:!1,opacity:at,toneMapped:!1}));_t.rotation.set(-Math.PI/2,0,Y),_t.position.set(ot,.002,Mt),s.add(_t)};return X(2.5,1.1,-.5,.42),X(1.5,.9,-.5,-.92),X(.9,.7,1.78,.3,.32,.8),{group:s,monCanvas:a,monTex:l,oneMat:x,stand:D,dockLocal:N,monitor:n}}function bE(s,t){let e=s.clone().lerp(t,.5).add(new H(0,.95,.35)),i=new ta([s,e,t]),n=new Vl(i,160,.009,8,!1),r={uHead:{value:0},uAmt:{value:0},uRed:{value:no.clone()}},o=new Ze({uniforms:r,transparent:!0,depthWrite:!1,blending:mr,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uHead, uAmt; uniform vec3 uRed; varying vec2 vUv;
      void main(){
        float t = vUv.x;
        float tail = smoothstep(uHead - 0.35, uHead, t) * step(t, uHead);
        float trail = 0.12 * step(t, uHead);
        float a = max(tail, trail) * uAmt;
        gl_FragColor = vec4(uRed * 6.0 * a, a);
        #include <colorspace_fragment>
      }`}),a=new jt(n,o),l=new jt(new Gl(.03,16,12),new vn({color:no.clone().multiplyScalar(8),toneMapped:!1,transparent:!0}));return{tube:a,head:l,u:r,curve:i}}function TE(){let s=new qr(.42,.03,1,32,1,!0);s.translate(0,.5,0),s.rotateX(Math.PI/2);let t=new vn({color:no.clone().multiplyScalar(.9),transparent:!0,opacity:0,depthWrite:!1,blending:mr,side:Nn,toneMapped:!1});return new jt(s,t)}async function Bx(s,{mobile:t,post:e}){let i=new mf({canvas:s,antialias:!e,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:2)),i.toneMapping=Qr,i.toneMappingExposure=1.05;let n=new Wr;n.background=new qt(657930),n.fog=new Sl(657930,18,70);let r=new ua(i);n.environment=r.fromScene(new xf,.04).texture,n.environmentIntensity=.32,r.dispose();let o=new sa(16777215,1.6);o.position.set(3,6,5);let a=new Jr(14890797,6,9,2);a.position.set(2.4,2.8,-2.6);let l=new sa(10134712,.35);l.position.set(-5,2,2),n.add(o,a,l);let c=new zi(30,1,.05,200),h=yE(t?52:84,t?150:240);n.add(h.mesh);let d=ME();n.add(d.group),d.group.updateMatrixWorld(!0);let f=SE();f.group.rotation.order="YXZ",n.add(f.group);let u=new H,m=new xn;d.dockLocal.getWorldPosition(u),d.dockLocal.getWorldQuaternion(m);let _=new Dn().setFromQuaternion(m,"YXZ"),p=new H(0,0,1).applyQuaternion(m),g=bE(new H(.335,1.52,-.83),u.clone().add(new H(0,.05,.02)));n.add(g.tube,g.head);let v=TE();n.add(v);let[M,y]=await Promise.all([um("media/qr.png"),um("icon-180.png")]);document.fonts&&document.fonts.load&&await Promise.all([document.fonts.load("300 40px Archivo"),document.fonts.load("600 40px Archivo")]).catch(()=>{});let b=document.createElement("div");b.setAttribute("aria-hidden","true"),b.style.cssText="position:fixed;left:0;bottom:0;width:4px;height:4px;overflow:hidden;opacity:0.01;pointer-events:none;z-index:-1",document.body.appendChild(b);let w=new Yl,x=Object.fromEntries(Fx.map(lt=>[lt,new fm(lt,b,w)])),S=va(1344,622),C=va(1344,622),A=yc(S),D=yc(C);Nx(C.getContext("2d"),{icon:y}),D.needsUpdate=!0;let L=new Xr(new Uint8Array([0,0,0,255]),1,1);L.needsUpdate=!0;let G=null,I=null;if(e){let lt=new Ke(1,1,{type:ui,samples:4});G=new Sf(i,lt),G.addPass(new Mf(n,c)),I=new ma(new gt(1,1),.42,.5,1),G.addPass(I),G.addPass(new bf)}let N="black",F="black",U=1,W=lt=>lt==="black"?L:lt==="scan"?A:lt==="home"?D:x[lt]?x[lt].texture():L;function X(lt){lt!==N&&(F=N,N=lt,U=0)}let R="";function V(lt,ht){let $=lt+JSON.stringify(ht);if($===R)return;R=$;let ct=d.monCanvas.getContext("2d");lt==="pairing"?Lx(ct,{qr:M,...ht}):lt==="off"?(ct.fillStyle="#050505",ct.fillRect(0,0,ct.canvas.width,ct.canvas.height)):Ix(ct,ht),d.monTex.needsUpdate=!0}let ot="";function Mt(lt,ht){let $=ht?"found":Math.round(lt*30).toString();$!==ot&&(ot=$,Dx(S.getContext("2d"),{qr:M,t:lt,found:ht,icon:y}),A.needsUpdate=!0)}let Y=1,at=1;function _t(lt,ht){Y=lt,at=ht,i.setSize(lt,ht,!1),c.aspect=lt/ht,c.updateProjectionMatrix(),G&&(G.setSize(lt,ht),I.setSize(lt,ht))}let At=new H,dt=new H,Nt=new xn,me=new H(0,1,0);function Ut(lt,ht,$,ct){let ut=Y/at,k=ut<.95,xt=k?Math.min(2.3,(1.6/ut)**.62):Math.max(1,(1.55/ut)**.6);At.set(lt.camX-lt.tgtX,lt.camY-lt.tgtY,lt.camZ-lt.tgtZ).multiplyScalar(xt),c.position.set(lt.tgtX+At.x,lt.tgtY+At.y,lt.tgtZ+At.z),c.lookAt(lt.tgtX,lt.tgtY,lt.tgtZ);let Xt=k?lt.mox:lt.ox,Ot=k?lt.moy:lt.oy;c.setViewOffset(Y,at,-Xt*Y,-Ot*at,Y,at),h.uniforms.uPx.value=2*Math.tan(Gp.degToRad(c.fov/2))/at;let Bt=lt.float,Kt=ht.ring>0?Math.sin($*95)*.006*ht.ring:0;f.group.position.set(lt.phX+Math.sin($*.7)*.03*Bt+Kt,lt.phY+Math.sin($*.9)*.05*Bt,lt.phZ),f.group.rotation.set(lt.phRX+Math.sin($*.6)*.04*Bt,lt.phRY+Math.sin($*.45)*.06*Bt,lt.phRZ+Kt*2,"YXZ"),f.group.scale.setScalar(lt.phS),U=Math.min(1,U+ct/.55);let se=U<1?1-Math.pow(1-U,3):1;f.screenU.tA.value=W(F),f.screenU.tB.value=W(N),f.screenU.uMix.value=se,f.screenU.uBright.value+=(ht.bright-f.screenU.uBright.value)*Math.min(1,ct*6);for(let B of Fx)x[B].want(B===N||B===F&&U<1);for(let B of ht.preload)x[B]&&x[B].ensure();if((N==="scan"||F==="scan")&&Mt($,ht.found),f.rings.forEach((B,re)=>{let Jt=($*1.1+re/3)%1;B.scale.setScalar(1+Jt*.55),B.material.opacity=ht.ring*(1-Jt)*.9,B.visible=ht.ring>.01}),g.u.uHead.value=ht.pulse,g.u.uAmt.value=ht.pulseAmt,g.tube.visible=ht.pulseAmt>.001,g.curve.getPointAt(Math.min(1,Math.max(0,ht.pulse)),g.head.position),g.head.visible=ht.pulseAmt>.001&&ht.pulse>.001&&ht.pulse<.999,d.oneMat.emissiveIntensity=ht.key*(.9+.5*Math.sin($*4)),v.visible=ht.beam>.01,v.visible){f.group.updateMatrixWorld(!0),f.camAnchor.getWorldPosition(At),dt.set(-.5+(980/1280-.5)*2.6,1.15,-.845);let B=At.distanceTo(dt);v.position.copy(At),v.scale.set(1,1,B),v.lookAt(dt),v.material.opacity=.14*ht.beam*(.8+.2*Math.sin($*7))}h.uniforms.uTime.value=$,h.uniforms.uAmp.value=lt.amp,h.uniforms.uWaveZ.value=ht.waveZ,h.uniforms.uWaveAmt.value=ht.waveAmt,G?G.render(ct):i.render(n,c)}return{renderer:i,render:Ut,resize:_t,setScreen:X,setMonitor:V,dock:{x:u.x,y:u.y,z:u.z,rx:_.x,ry:_.y,rz:_.z,front:p},preloadAll(lt){lt.forEach(ht=>x[ht]&&x[ht].ensure())}}}we.registerPlugin(ne,Ro);var Ei=Math.PI*2,zs=s=>Math.min(1,Math.max(0,s)),Tf=s=>s*s*(3-2*s),Sc=(s,t,e,i=.02)=>zs((s-t)/i)*zs((e-s)/i),ya=["system","procs","music","mixer","deck","trackpad","ai","dev","weather","night"],wE=["camX","camY","camZ","tgtX","tgtY","tgtZ","phX","phY","phZ","phRX","phRY","phRZ","phS","float","amp","ox","oy","mox","moy","mtX","dim"];async function kP(){let s=document.documentElement,t=document.getElementById("gl"),e=matchMedia("(pointer: coarse)").matches||innerWidth<760,i=await Bx(t,{mobile:e,post:!e}),n=document.createElement("div");n.style.cssText="position:absolute;top:0;left:0;width:1px;height:100lvh;visibility:hidden;pointer-events:none",document.body.appendChild(n);let r=0;function o(N){let F=innerWidth,U=Math.max(n.offsetHeight||0,innerHeight);!N&&F===r&&Math.abs(U-t.height/i.renderer.getPixelRatio())<2||(r=F,i.resize(F,U))}o(!0),addEventListener("resize",()=>o(!1));let a=new b0({lerp:.09});a.on("scroll",ne.update),we.ticker.add(N=>a.raf(N*1e3)),we.ticker.lagSmoothing(0);let l=["top","ai","pages","setup","tour","downloads","faq"],c={},h=innerHeight,d=[],f=0,u=0,m=0,_=0,p=i.dock,g=p.front;function v(){let N=(R,V)=>c[R].top+V*Math.max(1,c[R].h-h),F={phX:p.x,phY:p.y,phZ:p.z,phRX:p.rx,phRZ:0,phS:.6,float:0},U=(R,V,ot)=>{let Mt=Math.cos(V),Y=Math.sin(V),at=g.x*Mt+g.z*Y,_t=-g.x*Y+g.z*Mt;return{camX:p.x+at*R,camY:p.y+ot,camZ:p.z+_t*R,tgtX:p.x,tgtY:p.y+.02,tgtZ:p.z}},W={camX:.2,camY:6.2,camZ:3.3,tgtX:0,tgtY:5.97,tgtZ:-2,phX:0,phY:6,phZ:-2,phRX:.1,phRY:-.42,phRZ:.04,phS:1,float:1,amp:1,ox:0,oy:.045,mox:0,moy:-.13,mtX:0,dim:0},X=[[0,W],[h*.3,{...W,camZ:2.8,camY:6.15,phRY:-.12,phRX:.2}],[(h*.3+N("ai",0))/2,{camX:.6,camY:3.5,camZ:5.4,tgtX:.6,tgtY:2.4,tgtZ:-.6,phX:.95,phY:3.4,phZ:-.6,phRX:.35,phRY:Math.PI-.2,phRZ:-.2,phS:.8,float:.2,amp:.8,ox:.05,oy:0,mox:0,moy:.05,mtX:0,dim:0}],[N("ai",0),{camX:-.3,camY:1.8,camZ:6.1,tgtX:-.5,tgtY:.95,tgtZ:-.6,...F,phRY:p.ry+Ei,amp:.55,ox:.3,oy:.02,mox:0,moy:.17,mtX:0,dim:0}],[N("ai",.32),{camX:-.25,camY:1.62,camZ:5.3,tgtX:-.4,tgtY:1,tgtZ:-.6,...F,phRY:p.ry+Ei,amp:.55,ox:.3,oy:.02,mox:0,moy:.16,mtX:0,dim:0}],[N("ai",.47),{camX:.95,camY:2.25,camZ:9.2,tgtX:.45,tgtY:.75,tgtZ:-.4,...F,phRY:p.ry+Ei,amp:.7,ox:.28,oy:.02,mox:0,moy:.16,mtX:1.4,dim:0}],[N("ai",.55),{...U(5.2,-.4,.8),...F,phRY:p.ry+Ei,amp:.72,ox:.28,oy:0,mox:0,moy:.16,mtX:0,dim:0}],[N("ai",.66),{...U(3,-.45,.3),...F,phRY:p.ry+Ei,amp:.7,ox:.27,oy:0,mox:0,moy:.16,mtX:0,dim:0}],[N("ai",1),{...U(2.8,-.35,.36),...F,phRY:p.ry+Ei,amp:.75,ox:.27,oy:0,mox:0,moy:.16,mtX:0,dim:0}],[N("pages",0),{camX:.3,camY:5.46,camZ:5.2,tgtX:.3,tgtY:5.4,tgtZ:.6,phX:.3,phY:5.4,phZ:.6,phRX:.05,phRY:-.26+Ei,phRZ:0,phS:1,float:.55,amp:1,ox:.13,oy:.02,mox:0,moy:.02,mtX:0,dim:0}],[N("pages",1),{camX:-.1,camY:5.6,camZ:5.1,tgtX:.3,tgtY:5.4,tgtZ:.6,phX:.3,phY:5.4,phZ:.6,phRX:.08,phRY:.26+Ei,phRZ:0,phS:1,float:.55,amp:1.15,ox:.13,oy:.02,mox:0,moy:.02,mtX:0,dim:0}],[N("setup",0),{camX:-.5,camY:1.3,camZ:5.7,tgtX:-.5,tgtY:1.12,tgtZ:-.85,phX:1.6,phY:1.9,phZ:.5,phRX:.1,phRY:-.5+Ei,phRZ:0,phS:.6,float:.7,amp:.7,ox:.2,oy:0,mox:0,moy:.13,mtX:0,dim:0}],[N("setup",.3),{camX:-.42,camY:1.28,camZ:5.35,tgtX:-.45,tgtY:1.12,tgtZ:-.85,phX:1.5,phY:1.8,phZ:.6,phRX:.1,phRY:-.4+Ei,phRZ:0,phS:.6,float:.7,amp:.7,ox:.2,oy:0,mox:0,moy:.13,mtX:0,dim:0}],[N("setup",.45),{camX:2.35,camY:1.5,camZ:4.4,tgtX:0,tgtY:1.1,tgtZ:-.45,phX:.3,phY:1.13,phZ:-.02,phRX:0,phRY:.42+Ei,phRZ:0,phS:.6,float:.15,amp:.7,ox:.25,oy:0,mox:0,moy:.13,mtX:.15,dim:0}],[N("setup",.62),{camX:2.15,camY:1.45,camZ:4.1,tgtX:.05,tgtY:1.1,tgtZ:-.45,phX:.3,phY:1.13,phZ:-.02,phRX:0,phRY:.42+Ei,phRZ:0,phS:.6,float:.15,amp:.7,ox:.25,oy:0,mox:0,moy:.13,mtX:.15,dim:0}],[N("setup",.8),{...U(2.9,-.25,.4),...F,phRY:p.ry+Ei,amp:.8,ox:.24,oy:0,mox:0,moy:.15,mtX:0,dim:0}],[N("setup",1),{...U(2.7,-.1,.32),...F,phRY:p.ry+Ei,amp:.85,ox:.24,oy:0,mox:0,moy:.15,mtX:0,dim:0}],[c.tour.top-h*.2,{camX:.6,camY:3.3,camZ:8.6,tgtX:.3,tgtY:.7,tgtZ:-.6,...F,phRY:p.ry+Ei,amp:1.1,ox:0,oy:0,mox:0,moy:0,mtX:0,dim:.84}],[c.downloads.top-h*.1,{...U(2.7,.6,.22),...F,phRY:p.ry+Ei,amp:1.6,ox:.22,oy:0,mox:0,moy:0,mtX:0,dim:.22}],[c.faq.top-h*.3,{camX:2.2,camY:2.2,camZ:5.5,tgtX:.6,tgtY:.6,tgtZ:-.5,...F,phRY:p.ry+Ei,amp:1.3,ox:0,oy:0,mox:0,moy:0,mtX:0,dim:.92}]];return X.sort((R,V)=>R[0]-V[0]),X}function M(){h=innerHeight,f=Math.max(...[".beats",".pages-head",".steps-wrap"].map(N=>document.querySelector(N)?.getBoundingClientRect().right||0)),u=parseFloat(getComputedStyle(document.querySelector(".top-in")).paddingRight)||0,m=document.querySelector(".rail")?.getBoundingClientRect().left||0,_=document.querySelector(".dl-list")?.getBoundingClientRect().right||0;for(let N of l){let F=document.getElementById(N),U=F.getBoundingClientRect();c[N]={top:U.top+scrollY,h:F.offsetHeight}}d=v()}M(),ne.addEventListener("refresh",M);function y(N){for(let[F,U]of[[c.ai.top+c.ai.h-h,c.pages.top],[c.pages.top+c.pages.h-h,c.setup.top]]){let W=(N-F)/Math.max(1,U-F);if(W>0&&W<1)return W<.4?Tf(W/.4):W>.6?Tf((1-W)/.4):1}return 0}let b={};function w(N){let F=0;for(;F<d.length-2&&N>d[F+1][0];)F++;let[U,W]=d[F],[X,R]=d[F+1],V=Tf(zs((N-U)/Math.max(1,X-U)));for(let ot of wE)b[ot]=W[ot]+(R[ot]-W[ot])*V;return b}let x=(N,F)=>zs((F-c[N].top)/Math.max(1,c[N].h-h)),S={bright:1,ring:0,pulse:0,pulseAmt:0,key:0,beam:0,waveZ:-100,waveAmt:0,found:!1,preload:[]};function C(N,F){S.bright=1,S.ring=0,S.pulse=0,S.pulseAmt=0,S.key=0,S.beam=0,S.waveAmt=0,S.found=!1,S.preload=[];let U=(h*.3+c.ai.top)/2,W=c.pages.top-h*.5,X=c.setup.top-h*.5,R=c.tour.top-h*.5;if(N<U)i.setScreen("hero"),N<c.ai.top-h*.08?i.setMonitor("off"):i.setMonitor("terminal",{sec:0,answered:!1,cursor:!1}),S.preload=["night","perm"];else if(N<W){let V=x("ai",N),ot=V>.63;i.setMonitor("terminal",{sec:ot?1380:Math.round(Tf(zs((V-.02)/.3))*1380),answered:ot,cursor:Math.floor(F*2)%2===0}),S.key=Sc(V,-1,.5,.04),S.pulse=zs((V-.4)/.1),S.pulseAmt=Sc(V,.39,.55,.02),S.ring=Sc(V,.5,.64,.02),S.waveZ=-3-zs((V-.5)/.14)*60,S.waveAmt=Sc(V,.5,.66,.02),(V>.495||N<c.ai.top-h*.08)&&i.setMonitor("off"),V<.5?(i.setScreen("night"),S.bright=.85):V<.66?i.setScreen("perm"):i.setScreen("wait"),S.preload=["perm","wait","system"]}else if(N<X){let V=x("pages",N),ot=Math.min(ya.length-1,Math.floor(V*ya.length));i.setScreen(ya[ot]),i.setMonitor("off"),S.preload=[ya[Math.min(ya.length-1,ot+1)],ot>0?ya[ot-1]:"system"]}else if(N<R){let V=x("setup",N),ot=V>=.42&&V<.6,Mt=V>=.6;V>.67?i.setMonitor("off"):i.setMonitor("pairing",{scan:ot?Math.round(F*.55%1*60)/60:-1,paired:Mt}),S.beam=Sc(V,.42,.6,.03),S.found=V>=.56,V<.38?(i.setScreen("black"),S.bright=0):V<.7?i.setScreen("scan"):V<.86?i.setScreen("home"):i.setScreen("now-music"),S.preload=["now-music"]}else{let V=N>c.downloads.top-h*.6;i.setScreen(V?"hero":"now-music"),i.setMonitor("off"),V&&(S.waveZ=-3-F*.18%1*62,S.waveAmt=.6)}return S}let A={p:0},D=scrollY,L=performance.now(),G=L;function I(){let N=performance.now(),F=Math.min(.1,(N-L)/1e3);L=N;let U=(N-G)/1e3;D+=(scrollY-D)*(1-Math.exp(-F*8)),Math.abs(scrollY-D)<.5&&(D=scrollY);let W=w(D),X=1-zs(D/(h*.3)),R=1-A.p;W.phY-=R*1.5*X,W.phRY-=R*2.6*X,W.phRX+=R*.5*X,W.amp*=.12+.88*A.p;let V=innerWidth/innerHeight<.95;if(V)W.tgtX+=W.mtX,W.camX+=W.mtX;else if(W.ox>0){let ot=innerWidth,Mt=D>c.pages.top-h*.5&&D<c.setup.top-h*.5,Y=Mt&&m>f?m-24:ot-u-Math.max(0,(ot-1280)/4),at=D>c.downloads.top-h*.6?_+32:f,_t=Math.max(1,Y-at),At=zs(W.ox/.22);W.ox=((at+Y)/2/ot-.5)*At+W.ox*(1-At);let dt=1+(Math.max(1,Math.min(1.7,(Mt?.66:.92)*h/_t))-1)*At;W.camX=W.tgtX+(W.camX-W.tgtX)*dt,W.camY=W.tgtY+(W.camY-W.tgtY)*dt,W.camZ=W.tgtZ+(W.camZ-W.tgtZ)*dt}W.dim=Math.max(W.dim,y(D),V&&D>c.downloads.top-h*.6?.72:0),t.style.opacity=String((1-W.dim)*Math.min(1,A.p*3)),!(W.dim>.985)&&i.render(W,C(D,U),U,F)}we.ticker.add(I),await(document.fonts?document.fonts.ready:Promise.resolve()),EE(a),s.classList.add("gl-ready"),window.__gdReady=!0,we.to(A,{p:1,duration:2.6,ease:"power3.out",delay:.1}),ne.refresh()}function EE(s){let t=new Ro(".wordmark",{type:"chars",mask:"chars"});we.from(t.chars,{yPercent:118,duration:1.35,ease:"expo.out",stagger:.045,delay:.15}),we.from(".hero .bar",{scaleX:0,transformOrigin:"0 50%",duration:1.1,ease:"expo.out",delay:.55}),we.from(".hero-copy > *",{y:26,autoAlpha:0,duration:1,ease:"power3.out",stagger:.09,delay:.75});let e=we.timeline({scrollTrigger:{trigger:"#top",start:"top top",end:"bottom top",scrub:.5}});t.masks.forEach((f,u)=>e.to(f,{yPercent:-(70+u*37%5*28),ease:"none",duration:1},0)),e.to(".wordmark",{autoAlpha:0,ease:"none",duration:.5},.2).to(".hero .bar",{scaleX:0,transformOrigin:"0 50%",ease:"none",duration:.4},0).to(".hero-copy",{y:-60,autoAlpha:0,ease:"none",duration:.18},0);let i=we.utils.toArray(".story .beat"),n=[[0,.17],[.19,.38],[.4,.62],[.64,2]],r=we.timeline({scrollTrigger:{trigger:"#ai",start:"top top",end:"bottom bottom",scrub:.6}});i.forEach((f,u)=>{let m=new Ro(f.querySelector("h2"),{type:"words"}).words,_=f.querySelectorAll(":scope > :not(h2)"),[p,g]=n[u];u===0?we.set(f,{autoAlpha:1}):(we.set(f,{autoAlpha:0}),r.set(f,{autoAlpha:1},p),r.fromTo(m,{autoAlpha:0,y:24},{autoAlpha:1,y:0,stagger:.003,duration:.04,ease:"power3.out"},p),_.length&&r.fromTo(_,{y:22,autoAlpha:0},{y:0,autoAlpha:1,duration:.04,ease:"power2.out"},p+.02)),g<1.5&&(r.to(m,{autoAlpha:0,y:-18,stagger:.002,duration:.03,ease:"power2.in"},g-.04),_.length&&r.to(_,{autoAlpha:0,duration:.03},g-.04),r.set(f,{autoAlpha:0},g))}),r.set({},{},1);let o=we.utils.toArray(".gallery li"),a=o.length,l=we.timeline({scrollTrigger:{trigger:"#pages",start:"top top",end:"bottom bottom",scrub:.4}});o.forEach((f,u)=>{let m=f.querySelectorAll(".num, b"),_=f.querySelector("span:not(.num)"),p=u/a,g=(u+1)/a;u===0?we.set(f,{autoAlpha:1}):(we.set(f,{autoAlpha:0}),l.set(f,{autoAlpha:1},p),l.fromTo(m,{autoAlpha:0,y:28},{autoAlpha:1,y:0,duration:.03,stagger:.006,ease:"power3.out"},p),l.fromTo(_,{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.03},p+.012)),u<a-1&&(l.to(m,{autoAlpha:0,y:-20,duration:.025,stagger:.005,ease:"power2.in"},g-.03),l.to(_,{autoAlpha:0,duration:.02},g-.03),l.set(f,{autoAlpha:0},g))}),l.set({},{},1);let c=we.utils.toArray(".rail li");ne.create({trigger:"#pages",start:"top top",end:"bottom bottom",onUpdate(f){let u=Math.min(a-1,Math.floor(f.progress*a));c.forEach((m,_)=>m.classList.toggle("on",_===u))}}),c.forEach((f,u)=>f.classList.toggle("on",u===0));let h=we.utils.toArray(".steps li");we.fromTo(".steps-fill",{scaleY:0},{scaleY:1,ease:"none",transformOrigin:"50% 0",scrollTrigger:{trigger:"#setup",start:"top top",end:"bottom bottom",scrub:.3}}),ne.create({trigger:"#setup",start:"top top",end:"bottom bottom",onUpdate(f){let u=f.progress,m=u<.38?0:u<.7?1:2;h.forEach((_,p)=>_.classList.toggle("on",p===m))}}),h.forEach((f,u)=>f.classList.toggle("on",u===0));for(let f of["#ai","#pages","#setup"])we.fromTo(`${f} .sticky`,{autoAlpha:1},{autoAlpha:0,ease:"none",immediateRender:!1,scrollTrigger:{trigger:f,start:"bottom bottom",end:"bottom 72%",scrub:!0}});we.fromTo(".tour-video",{scale:.78,borderRadius:44},{scale:1,borderRadius:14,ease:"none",scrollTrigger:{trigger:".tour-video",start:"top bottom",end:"center 55%",scrub:.4}}),we.utils.toArray(".tour h2, .downloads h2, .faq h2").forEach(f=>{let u=new Ro(f,{type:"lines,words",mask:"lines"}).words;we.from(u,{yPercent:115,duration:1.1,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:f,start:"top 88%",once:!0}})});let d=we.utils.toArray(".dl-list li");we.set(d,{autoAlpha:0,y:36}),ne.batch(d,{start:"top 92%",once:!0,onEnter:f=>we.to(f,{autoAlpha:1,y:0,duration:.9,ease:"power3.out",stagger:.1})}),document.querySelectorAll('a[href^="#"]:not(.skip)').forEach(f=>{f.addEventListener("click",u=>{let m=f.getAttribute("href"),_=m.length>1&&document.querySelector(m);_&&(u.preventDefault(),s.scrollTo(_,{duration:1.6}),history.replaceState(null,"",m))})})}export{kP as start};
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
