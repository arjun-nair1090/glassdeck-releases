import{a as Ft}from"./chunk-O2XFH626.js";function fs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Mm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Aa={duration:.5,overwrite:!1,delay:0},kf,yi,Oe,En=1e8,Ae=1/En,Lf=Math.PI*2,zx=Lf/4,kx=0,bm=Math.sqrt,Hx=Math.cos,Gx=Math.sin,ai=function(t){return typeof t=="string"},Xe=function(t){return typeof t=="function"},ps=function(t){return typeof t=="number"},Uc=function(t){return typeof t>"u"},Kn=function(t){return typeof t=="object"},ji=function(t){return t!==!1},Hf=function(){return typeof window<"u"},Tc=function(t){return Xe(t)||ai(t)},Tm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ii=Array.isArray,Vx=/random\([^)]+\)/g,Wx=/,\s*/g,pm=/(?:-?\.?\d|\.)+/gi,Gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vf=/[+-]=-?[.\d]+/,Xx=/[^,'"\[\]\s]+/gi,Yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,Zn,Df,Wf,cn={},Rc={},wm,Em=function(t){return(Rc=oo(t,cn))&&Li},Oc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ra=function(t,e){return!e&&console.warn(t)},Am=function(t,e){return t&&(cn[t]=e)&&Rc&&(Rc[t]=e)||cn},Ca=function(){return 0},qx={suppressEvents:!0,isStart:!0,kill:!1},wc={suppressEvents:!0,kill:!1},Zx={suppressEvents:!0},Xf={},Vs=[],Nf={},Rm,$i={},Ef={},mm=30,Ec=[],Yf="",qf=function(t){var e=t[0],i,n;if(Kn(e)||Xe(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Ec.length;n--&&!Ec[n].targetTest(e););i=Ec[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new $f(t[n],i)))||t.splice(n,1);return t},Ws=function(t){return t._gsap||qf(An(t))[0]._gsap},Zf=function(t,e,i){return(i=t[e])&&Xe(i)?t[e]():Uc(i)&&t.getAttribute&&t.getAttribute(e)||i},Gi=function(t,e){return(t=t.split(",")).forEach(e)||t},Ye=function(t){return Math.round(t*1e5)/1e5||0},ze=function(t){return Math.round(t*1e7)/1e7||0},Tr=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},Jx=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Cc=function(){var t=Vs.length,e=Vs.slice(0),i,n;for(Nf={},Vs.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Jf=function(t){return!!(t._initted||t._startAt||t.add)},Cm=function(t,e,i,n){Vs.length&&!yi&&Cc(),t.render(e,i,n||!!(yi&&e<0&&Jf(t))),Vs.length&&!yi&&Cc()},Pm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Xx).length<2?e:ai(t)?t.trim():t},Im=function(t){return t},hn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Kx=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},oo=function(t,e){for(var i in e)t[i]=e[i];return t},gm=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Kn(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Pc=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Ta=function(t){var e=t.parent||ke,i=t.keyframes?Kx(Ii(t.keyframes)):hn;if(ji(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},$x=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Lm=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},Fc=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},Xs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Qx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Uf=function(t,e,i,n){return t._startAt&&(yi?t._startAt.revert(wc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},jx=function s(t){return!t||t._ts&&s(t.parent)},_m=function(t){return t._repeat?ao(t._tTime,t=t.duration()+t._rDelay)*t:0},ao=function(t,e){var i=Math.floor(t=ze(t/e));return t&&i===t?i-1:i},Ic=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bc=function(t){return t._end=ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ae)||0))},zc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ze(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bc(t),i._dirty||yr(i,t)),t},Dm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Ic(t.rawTime(),e),(!e._dur||Da(0,e.totalDuration(),i)-e._tTime>Ae)&&e.render(i,!0)),yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Ae}},Jn=function(t,e,i,n){return e.parent&&Xs(e),e._start=ze((ps(i)?i:!i&&Lc(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:i||t!==ke?wn(t,i,e):t._time)+e._delay),e._end=ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Lm(t,e,"_first","_last",t._sort?"_start":0),Lc(e)||(t._recent=e),n||Dm(t,e),t._ts<0&&zc(t,t._tTime),t},Nm=function(t,e){return(cn.ScrollTrigger||Oc("scrollTrigger",e))&&cn.ScrollTrigger.create(e,t)},Um=function(t,e,i,n,r){if(td(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!yi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Rm!==Qi.frame)return Vs.push(t),t._lazy=[r,n],1},tv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Lc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ev=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&tv(t)&&!(!t._initted&&Lc(t))||(t._ts<0||t._dp._ts<0)&&!Lc(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Da(0,t._tDur,e),h=ao(l,a),t._yoyo&&h&1&&(o=1-o),h!==ao(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||yi||n||t._zTime===Ae||!e&&t._zTime){if(!t._initted&&Um(t,e,n,i,l))return;for(d=t._zTime,t._zTime=e||(i?Ae:0),i||(i=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Uf(t,e,i,!0),t._onUpdate&&!i&&ln(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xs(t,1),!i&&!yi&&(ln(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},iv=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},lo=function(t,e,i,n){var r=t._repeat,o=ze(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ze(o*(r+1)+t._rDelay*r):o,a>0&&!n&&zc(t,t._tTime=t._tDur*a),t.parent&&Bc(t),i||yr(t.parent,t),t},xm=function(t){return t instanceof Pi?yr(t):lo(t,t._dur)},nv={_start:0,endTime:Ca,totalDuration:Ca},wn=function s(t,e,i){var n=t.labels,r=t._recent||nv,o=t.duration()>=En?r.endTime(!1):t._dur,a,l,c;return ai(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Ii(i)?i[0]:i).totalDuration()),a>1?s(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},wa=function(t,e,i){var n=ps(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ji(l.vars.inherit)&&l.parent;o.immediateRender=ji(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Je(e[0],o,e[r+1])},Ys=function(t,e){return t||t===0?e(t):e},Da=function(t,e,i){return i<t?t:i>e?e:i},Si=function(t,e){return!ai(t)||!(e=Yx.exec(t))?"":e[1]},sv=function(t,e,i){return Ys(i,function(n){return Da(t,e,n)})},Of=[].slice,Om=function(t,e){return t&&Kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Kn(t[0]))&&!t.nodeType&&t!==Zn},rv=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return ai(n)&&!e||Om(n,1)?(r=i).push.apply(r,An(n)):i.push(n)})||i},An=function(t,e,i){return Oe&&!e&&Oe.selector?Oe.selector(t):ai(t)&&!i&&(Df||!co())?Of.call((e||Wf).querySelectorAll(t),0):Ii(t)?rv(t,i):Om(t)?Of.call(t,0):t?[t]:[]},Ff=function(t){return t=An(t)[0]||Ra("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return An(e,i.querySelectorAll?i:i===t?Ra("Invalid scope")||Wf.createElement("div"):t)}},Fm=function(t){return t.sort(function(){return .5-Math.random()})},Bm=function(t){if(Xe(t))return t;var e=Kn(t)?t:{each:t},i=Sr(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,d=n;return ai(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(f,u,p){var g=(p||e).length,m=o[g],_,v,S,y,b,w,x,M,P;if(!m){if(P=e.grid==="auto"?0:(e.grid||[1,En])[1],!P){for(x=-En;x<(x=p[P++].getBoundingClientRect().left)&&P<g;);P<g&&P--}for(m=o[g]=[],_=l?Math.min(P,g)*h-.5:n%P,v=P===En?0:l?g*d/P-.5:n/P|0,x=0,M=En,w=0;w<g;w++)S=w%P-_,y=v-(w/P|0),m[w]=b=c?Math.abs(c==="y"?y:S):bm(S*S+y*y),b>x&&(x=b),b<M&&(M=b);n==="random"&&Fm(m),m.max=x-M,m.min=M,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(P>g?g-1:c?c==="y"?g/P:P:Math.max(P,g/P))||0)*(n==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Si(e.amount||e.each)||0,i=i&&g<0?xv(i):i}return g=(m[f]-m.min)/m.max||0,ze(m.b+(i?i(g):g)*m.v)+m.u}},Bf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=ze(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(ps(i)?0:Si(i))}},zm=function(t,e){var i=Ii(t),n,r;return!i&&Kn(t)&&(n=i=t.radius||En,t.values?(t=An(t.values),(r=!ps(t[0]))&&(n*=n)):t=Bf(t.increment)),Ys(e,i?Xe(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=En,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!n||c<=n?t[h]:o,r||h===o||ps(o)?h:h+Si(o)}:Bf(t))},km=function(t,e,i,n){return Ys(Ii(t)?!e:i===!0?!!(i=0):!n,function(){return Ii(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},ov=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},av=function(t,e){return function(i){return t(parseFloat(i))+(e||Si(i))}},lv=function(t,e,i){return Gm(t,e,0,1,i)},Hm=function(t,e,i){return Ys(i,function(n){return t[~~e(n)]})},cv=function s(t,e,i){var n=e-t;return Ii(t)?Hm(t,s(0,t.length),e):Ys(i,function(r){return(n+(r-t)%n)%n+t})},hv=function s(t,e,i){var n=e-t,r=n*2;return Ii(t)?Hm(t,s(0,t.length-1),e):Ys(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},ho=function(t){return t.replace(Vx,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Wx);return km(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Gm=function(t,e,i,n,r){var o=e-t,a=n-i;return Ys(r,function(l){return i+((l-t)/o*a||0)})},uv=function s(t,e,i,n){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=ai(t),a={},l,c,h,d,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(Ii(t)&&!Ii(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var g=Math.min(f,~~p);return h[g](p-g)},i=e}else n||(t=oo(Ii(t)?[]:{},t));if(!h){for(l in e)Qf.call(a,t,l,"get",e[l]);r=function(p){return nd(p,a)||(o?t.p:t)}}}return Ys(i,r)},vm=function(t,e,i){var n=t.labels,r=En,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ln=function(t,e,i){var n=t.vars,r=n[e],o=Oe,a=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&Vs.length&&Cc(),a&&(Oe=a),h=l?r.apply(c,l):r.call(c),Oe=o,h},Ma=function(t){return Xs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!yi),t.progress()<1&&ln(t,"onInterrupt"),t},ro,Vm=[],Wm=function(t){if(t)if(t=!t.name&&t.default||t,Hf()||t.headless){var e=t.name,i=Xe(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:Ca,render:nd,add:Qf,kill:Rv,modifier:Av,rawVars:0},o={targetTest:0,get:0,getSetter:kc,aliases:{},register:0};if(co(),t!==n){if($i[e])return;hn(n,hn(Pc(t,r),o)),oo(n.prototype,oo(r,Pc(t,o))),$i[n.prop=e]=n,t.targetTest&&(Ec.push(n),Xf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Am(e,n),t.register&&t.register(Li,n,Vi)}else Vm.push(t)},Ie=255,ba={aqua:[0,Ie,Ie],lime:[0,Ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ie],navy:[0,0,128],white:[Ie,Ie,Ie],olive:[128,128,0],yellow:[Ie,Ie,0],orange:[Ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ie,0,0],pink:[Ie,192,203],cyan:[0,Ie,Ie],transparent:[Ie,Ie,Ie,0]},Af=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ie+.5|0},Xm=function(t,e,i){var n=t?ps(t)?[t>>16,t>>8&Ie,t&Ie]:0:ba.black,r,o,a,l,c,h,d,f,u,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ba[t])n=ba[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Ie,n&Ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Ie,t&Ie]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(pm),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=Af(l+1/3,r,o),n[1]=Af(l,r,o),n[2]=Af(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(Gf),i&&n.length<4&&(n[3]=1),n}else n=t.match(pm)||ba.transparent;n=n.map(Number)}return e&&!p&&(r=n[0]/Ie,o=n[1]/Ie,a=n[2]/Ie,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Ym=function(t){var e=[],i=[],n=-1;return t.split(ds).forEach(function(r){var o=r.match(br)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},ym=function(t,e,i){var n="",r=(t+n).match(ds),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=Xm(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=Ym(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(ds,"1").split(br),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(ds),d=c.length-1;a<d;a++)n+=c[a]+r[a];return n+c[d]},ds=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ba)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),fv=/hsl[a]?\(/,Kf=function(t){var e=t.join(" "),i;if(ds.lastIndex=0,ds.test(e))return i=fv.test(e),t[1]=ym(t[1],i),t[0]=ym(t[0],i,Ym(t[1])),!0},Pa,Qi=(function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,d,f,u,p=function g(m){var _=s()-n,v=m===!0,S,y,b,w;if((_>t||_<0)&&(i+=_-e),n+=_,b=n-i,S=b-o,(S>0||v)&&(w=++d.frame,f=b-d.time*1e3,d.time=b=b/1e3,o+=S+(S>=r?0:r-S),y=1),v||(l=c(g)),y)for(u=0;u<a.length;u++)a[u](b,f,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){wm&&(!Df&&Hf()&&(Zn=Df=window,Wf=Zn.document||{},cn.gsap=Li,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(Li.version),Em(Rc||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),Vm.forEach(Wm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Pa=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Pa=0,c=Ca},lagSmoothing:function(m,_){t=m||1/0,e=Math.min(_||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,_,v){var S=_?function(y,b,w,x){m(y,b,w,x),d.remove(S)}:m;return d.remove(m),a[v?"unshift":"push"](S),co(),S},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&u>=_&&u--},_listeners:a},d})(),co=function(){return!Pa&&Qi.wake()},_e={},dv=/^[\d.\-M][\d.\-,\s]/,pv=/["']/g,mv=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(pv,"").trim():+c,n=l.substr(a+1).trim();return e},gv=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},_v=function(t){var e=(t+"").split("("),i=_e[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[mv(e[1])]:gv(t).split(",").map(Pm)):_e._CE&&dv.test(t)?_e._CE("",t):i},xv=function(t){return function(e){return 1-t(1-e)}},Sr=function(t,e){return t&&(Xe(t)?t:_e[t]||_v(t))||e},wr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return Gi(t,function(a){_e[a]=cn[a]=r,_e[o=a.toLowerCase()]=i;for(var l in r)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=r[l]}),r},qm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rf=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/Lf*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*Gx((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:qm(a);return r=Lf/r,l.config=function(c,h){return s(t,c,h)},l},Cf=function s(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:qm(i);return n.config=function(r){return s(t,r)},n};Gi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;wr(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;wr("Elastic",Rf("in"),Rf("out"),Rf());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(a){return a<e?s*a*a:a<i?s*Math.pow(a-1.5/t,2)+.75:a<n?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};wr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);wr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});wr("Circ",function(s){return-(bm(1-s*s)-1)});wr("Sine",function(s){return s===1?1:-Hx(s*zx)+1});wr("Back",Cf("in"),Cf("out"),Cf());_e.SteppedEase=_e.steps=cn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-Ae;return function(a){return((n*Da(0,o,a)|0)+r)*i}}};Aa.ease=_e["quad.out"];Gi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Yf+=s+","+s+"Params,"});var $f=function(t,e){this.id=kx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Zf,this.set=e?e.getSetter:kc},Ia=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,lo(this,+e.duration,1,1),this.data=e.data,Oe&&(this._ctx=Oe,Oe.data.push(this)),Pa||Qi.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,lo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(co(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zc(this,i),!r._dp||r.parent||Dm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ae||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Cm(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_m(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_m(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ao(this._tTime,r)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-Ae?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Ic(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-Ae?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Da(-Math.abs(this._delay),a,r),n!==!1),Bc(this),Qx(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{co(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Ae,o;if(r)for(this._tTime-=Ae,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+Ae){r=!1;break}o=o._next}this.totalTime(n,r)}return this},t.startTime=function(i){if(arguments.length){this._start=ze(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Jn(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(ji(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ic(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Zx);var n=yi;return yi=i,Jf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yi=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,xm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,xm(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(wn(this,i),ji(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ji(n)),this._dur||(this._zTime=-Ae),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ae,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-Ae)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=Xe(i)?i:Im,l=function(){var h=n.then;n.then=null,r&&r(),Xe(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){Ma(this)},s})();hn(Ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ae,_prom:0,_ps:!1,_rts:1});var Pi=(function(s){Mm(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=ji(i.sortChildren),ke&&Jn(i.parent||ke,fs(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Nm(fs(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return wa(0,arguments,this),this},e.from=function(n,r,o){return wa(1,arguments,this),this},e.fromTo=function(n,r,o,a){return wa(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,Ta(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Je(n,r,wn(this,o),1),this},e.call=function(n,r,o){return Jn(this,Je.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Je(n,o,wn(this,l)),this},e.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,Ta(o).immediateRender=ji(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},e.staggerFromTo=function(n,r,o,a,l,c,h,d){return a.startAt=o,Ta(a).immediateRender=ji(a.immediateRender),this.staggerTo(n,r,a,l,c,h,d)},e.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:ze(n),d=this._zTime<0!=n<0&&(this._initted||!c),f,u,p,g,m,_,v,S,y,b,w,x;if(this!==ke&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),f=h,y=this._start,S=this._ts,_=!S,d&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,o);if(f=ze(h%m),h===l?(g=this._repeat,f=c):(b=ze(h/m),g=~~b,g&&g===b&&(f=c,g--),f>c&&(f=c)),b=ao(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),w&&g&1&&(f=c-f,x=1),g!==b&&!this._lock){var M=w&&b&1,P=M===(w&&g&1);if(g<b&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(x?0:ze(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ln(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=iv(this,ze(a),ze(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!r&&!b&&(ln(this,"onStart"),this._tTime!==h))return this;if(f>=a&&n>=0)for(u=this._first;u;){if(p=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!_){v=0,p&&(h+=this._zTime=-Ae);break}}u=p}else{u=this._last;for(var R=n<0?n:f;u;){if(p=u._prev,(u._act||R<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(R-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(R-u._start)*u._ts,r,o||yi&&Jf(u)),f!==this._time||!this._ts&&!_){v=0,p&&(h+=this._zTime=R?-Ae:Ae);break}}u=p}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Ae)._zTime=f>=a?1:-1,this._ts))return this._start=y,Bc(this),this.render(n,r,o);this._onUpdate&&!r&&ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Xs(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(ln(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(ps(r)||(r=wn(this,r,n)),!(n instanceof Ia)){if(Ii(n))return n.forEach(function(a){return o.add(a,r)}),this;if(ai(n))return this.addLabel(n,r);if(Xe(n))n=Je.delayedCall(0,n);else return this}return this!==n?Jn(this,n,r):this},e.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-En);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Je?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return ai(n)?this.removeLabel(n):Xe(n)?this.killTweensOf(n):(n.parent===this&&Fc(this,n),n===this._recent&&(this._recent=this._last),yr(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ze(Qi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=wn(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var a=Je.delayedCall(0,r||Ca,o);return a.data="isPause",this._hasPause=1,Jn(this,a,wn(this,n))},e.removePause=function(n){var r=this._first;for(n=wn(this,n);r;)r._start===n&&r.data==="isPause"&&Xs(r),r=r._next},e.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Gs!==a[l]&&a[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],a=An(n),l=this._first,c=ps(r),h;l;)l instanceof Je?Jx(l._targets,a)&&(c?(!Gs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,a=wn(o,n),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,p=Je.to(o,hn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ae,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&lo(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,d||[])}},r));return f?p.render(0):p},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,hn({startAt:{time:wn(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),vm(this,wn(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),vm(this,wn(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ae)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=ze(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return yr(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),yr(this)},e.totalDuration=function(n){var r=0,o=this,a=o._last,l=En,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Jn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ze(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;lo(o,o===ke&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(ke._ts&&(Cm(ke,Ic(n,ke)),Rm=Qi.frame),Qi.frame>=mm){mm+=tn.autoSleep||120;var r=ke._first;if((!r||!r._ts)&&tn.autoSleep&&Qi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Qi.sleep()}}},t})(Ia);hn(Pi.prototype,{_lock:0,_hasPause:0,_forcing:0});var vv=function(t,e,i,n,r,o,a){var l=new Vi(this._pt,t,e,0,1,id,null,r),c=0,h=0,d,f,u,p,g,m,_,v;for(l.b=i,l.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=ho(n)),o&&(v=[i,n],o(v,t,e),i=v[0],n=v[1]),f=i.match(wf)||[];d=wf.exec(n);)p=d[0],g=n.substring(c,d.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:p.charAt(1)==="="?Tr(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=wf.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(Vf.test(n)||_)&&(l.e=0),this._pt=l,l},Qf=function(t,e,i,n,r,o,a,l,c,h){Xe(n)&&(n=n(r||0,t,o));var d=t[e],f=i!=="get"?i:Xe(d)?c?t[e.indexOf("set")||!Xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Xe(d)?c?Tv:Jm:ed,p;if(ai(n)&&(~n.indexOf("random(")&&(n=ho(n)),n.charAt(1)==="="&&(p=Tr(f,n)+(Si(f)||0),(p||p===0)&&(n=p))),!h||f!==n||zf)return!isNaN(f*n)&&n!==""?(p=new Vi(this._pt,t,e,+f||0,n-(f||0),typeof d=="boolean"?Ev:Km,0,u),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Oc(e,n),vv.call(this,t,e,f,n,u,l||tn.stringFilter,c))},yv=function(t,e,i,n,r){if(Xe(t)&&(t=Ea(t,r,e,i,n)),!Kn(t)||t.style&&t.nodeType||Ii(t)||Tm(t))return ai(t)?Ea(t,r,e,i,n):t;var o={},a;for(a in t)o[a]=Ea(t[a],r,e,i,n);return o},jf=function(t,e,i,n,r,o){var a,l,c,h;if($i[t]&&(a=new $i[t]).init(r,a.rawVars?e[t]:yv(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new Vi(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==ro))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Gs,zf,td=function s(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,f=n.keyframes,u=n.autoRevert,p=t._dur,g=t._startAt,m=t._targets,_=t.parent,v=_&&_.data==="nested"?_.vars.targets:m,S=t._overwrite==="auto"&&!kf,y=t.timeline,b=n.easeReverse||d,w,x,M,P,R,N,L,G,C,U,B,D,K;if(y&&(!f||!r)&&(r="none"),t._ease=Sr(r,Aa.ease),t._rEase=b&&(Sr(b)||t._ease),t._from=!y&&!!n.runBackwards,t._from&&(t.ratio=1),!y||f&&!n.stagger){if(G=m[0]?Ws(m[0]).harness:0,D=G&&n[G.prop],w=Pc(n,Xf),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!u?g.render(-1,!0):g.revert(h&&p?wc:qx),g._lazy=0),o){if(Xs(t._startAt=Je.set(m,hn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&ji(l),startAt:null,delay:0,onUpdate:c&&function(){return ln(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yi||!a&&!u)&&t._startAt.revert(wc),a&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&p&&!g){if(e&&(a=!1),M=hn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ji(l),immediateRender:a,stagger:0,parent:_},w),D&&(M[G.prop]=D),Xs(t._startAt=Je.set(m,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yi?t._startAt.revert(wc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ae,Ae);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ji(l)||l&&!p,x=0;x<m.length;x++){if(R=m[x],L=R._gsap||qf(m)[x]._gsap,t._ptLookup[x]=U={},Nf[L.id]&&Vs.length&&Cc(),B=v===m?x:v.indexOf(R),G&&(C=new G).init(R,D||w,t,B,v)!==!1&&(t._pt=P=new Vi(t._pt,R,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(V){U[V]=P}),C.priority&&(N=1)),!G||D)for(M in w)$i[M]&&(C=jf(M,w,t,B,R,v))?C.priority&&(N=1):U[M]=P=Qf.call(t,R,M,"get",w[M],B,v,0,n.stringFilter);t._op&&t._op[x]&&t.kill(R,t._op[x]),S&&t._pt&&(Gs=t,ke.killTweensOf(R,U,t.globalTime(e)),K=!t.parent,Gs=0),t._pt&&l&&(Nf[L.id]=1)}N&&sd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,f&&e<=0&&y.render(En,!0,!0)},Sv=function(t,e,i,n,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return zf=1,t.vars[e]="+=0",td(t,a),zf=0,l?Ra(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(n||n===0)&&!r?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=Ye(i)+Si(d.e)),d.b&&(d.b=h.s+Si(d.b))},Mv=function(t,e){var i=t[0]?Ws(t[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return e;r=oo({},e);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},bv=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,a;if(Ii(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ea=function(t,e,i,n,r){return Xe(t)?t.call(e,i,n,r):ai(t)&&~t.indexOf("random(")?ho(t):t},Dc=Yf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zm={};Gi(Dc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Zm[s]=1});Dc=Dc.split(",");var Je=(function(s){Mm(t,s);function t(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:Ta(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=n.parent||ke,v=(Ii(i)||Tm(i)?ps(i[0]):"length"in n)?[i]:An(i),S,y,b,w,x,M,P,R;if(a._targets=v.length?qf(v):Ra("GSAP target "+i+" not found. https://gsap.com",!tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||f||Tc(c)||Tc(h)){n=a.vars;var N=n.easeReverse||n.yoyoEase;if(S=a.timeline=new Pi({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),S.kill(),S.parent=S._dp=fs(a),S._start=0,f||Tc(c)||Tc(h)){if(w=v.length,P=f&&Bm(f),Kn(f))for(x in f)~Dc.indexOf(x)&&(R||(R={}),R[x]=f[x]);for(y=0;y<w;y++)b=Pc(n,Zm),b.stagger=0,N&&(b.easeReverse=N),R&&oo(b,R),M=v[y],b.duration=+Ea(c,fs(a),y,M,v),b.delay=(+Ea(h,fs(a),y,M,v)||0)-a._delay,!f&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),S.to(M,b,P?P(y,M,v):0),S._ease=_e.none;S.duration()?c=h=0:a.timeline=0}else if(p){Ta(hn(S.vars.defaults,{ease:"none"})),S._ease=Sr(p.ease||n.ease||"none");var L=0,G,C,U;if(Ii(p))p.forEach(function(B){return S.to(v,B,">")}),S.duration();else{b={};for(x in p)x==="ease"||x==="easeEach"||bv(x,p[x],b,p.easeEach);for(x in b)for(G=b[x].sort(function(B,D){return B.t-D.t}),L=0,y=0;y<G.length;y++)C=G[y],U={ease:C.e,duration:(C.t-(y?G[y-1].t:0))/100*c},U[x]=C.v,S.to(v,U,L),L+=U.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return u===!0&&!kf&&(Gs=fs(a),ke.killTweensOf(v),Gs=0),Jn(_,fs(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!p&&a._start===ze(_._time)&&ji(d)&&jx(fs(a))&&_.data!=="nested")&&(a._tTime=-Ae,a.render(Math.max(0,-h)||0)),m&&Nm(fs(a),m),a}var e=t.prototype;return e.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-Ae&&!h?l:n<Ae?0:n,f,u,p,g,m,_,v,S;if(!c)ev(this,n,r,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,r,o);if(f=ze(d%g),d===l?(p=this._repeat,f=c):(m=ze(d/g),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),_=this._yoyo&&p&1,_&&(f=c-f),m=ao(this._tTime,g),f===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(ze(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(Um(this,h?n:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(ln(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;S&&S.render(n<0?n:S._dur*S._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Uf(this,n,r,o),ln(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&ln(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Uf(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Xs(this,1),!r&&!(h&&!a)&&(d||a||_)&&(ln(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,a,l){Pa||Qi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||td(this,c),h=this._ease(c/this._dur),Sv(this,n,r,o,a,h,c,l)?this.resetTo(n,r,o,a,1):(zc(this,0),this.parent||Lm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yi),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Gs&&Gs.vars.overwrite!==!0)._first||Ma(this),this.parent&&o!==this.timeline.totalDuration()&&lo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?An(n):a,c=this._ptLookup,h=this._pt,d,f,u,p,g,m,_;if((!r||r==="all")&&$x(a,l))return r==="all"&&(this._pt=0),Ma(this);for(d=this._op=this._op||[],r!=="all"&&(ai(r)&&(g={},Gi(r,function(v){return g[v]=1}),r=g),r=Mv(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(d[_]=r,p=f,u={}):(u=d[_]=d[_]||{},p=r);for(g in p)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Fc(this,m,"_pt"),delete f[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&h&&Ma(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return wa(1,arguments)},t.delayedCall=function(n,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,r,o){return wa(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return ke.killTweensOf(n,r,o)},t})(Ia);hn(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gi("staggerTo,staggerFrom,staggerFromTo",function(s){Je[s]=function(){var t=new Pi,e=Of.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ed=function(t,e,i){return t[e]=i},Jm=function(t,e,i){return t[e](i)},Tv=function(t,e,i,n){return t[e](n.fp,i)},wv=function(t,e,i){return t.setAttribute(e,i)},kc=function(t,e){return Xe(t[e])?Jm:Uc(t[e])&&t.setAttribute?wv:ed},Km=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ev=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},id=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},nd=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Av=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},Rv=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Fc(this,e,"_pt"):e.dep||(i=1),e=n;return!i},Cv=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},sd=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},Vi=(function(){function s(e,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||Km,this.d=l||this,this.set=c||ed,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Cv,this.m=i,this.mt=r,this.tween=n},s})();Gi(Yf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Xf[s]=1});cn.TweenMax=cn.TweenLite=Je;cn.TimelineLite=cn.TimelineMax=Pi;ke=new Pi({sortChildren:!1,defaults:Aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=Kf;var Mr=[],Ac={},Pv=[],Sm=0,Iv=0,Pf=function(t){return(Ac[t]||Pv).map(function(e){return e()})},La=function(){var t=Date.now(),e=[];t-Sm>2&&(Pf("matchMediaInit"),Mr.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=Zn.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Pf("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Sm=t,Pf("matchMedia"))},$m=(function(){function s(e,i){this.selector=i&&Ff(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Iv++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){Xe(i)&&(r=n,n=i,i=Xe);var o=this,a=function(){var c=Oe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ff(r)),Oe=o,d=n.apply(o,arguments),Xe(d)&&o._r.push(d),Oe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===Xe?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=Oe;Oe=null,i(this),Oe=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Je&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Pi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Je)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=Mr.length;o--;)Mr[o].id===this.id&&Mr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(La):a.removeEventListener("change",La)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},s})(),Lv=(function(){function s(e){this.contexts=[],this.scope=e,Oe&&Oe.data.push(this)}var t=s.prototype;return t.add=function(i,n,r){Kn(i)||(i={matches:i});var o=new $m(0,r||this.scope),a=o.conditions={},l,c,h;Oe&&!o.selector&&(o.selector=Oe.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Zn.matchMedia(i[c]),l&&(Mr.indexOf(o)<0&&Mr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(La):l.addEventListener("change",La),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(d){return o.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),Nc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Wm(n)})},timeline:function(t){return new Pi(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,i,n){ai(t)&&(t=An(t)[0]);var r=Ws(t||{}).get,o=i?Im:Pm;return i==="native"&&(i=""),t&&(e?o(($i[e]&&$i[e].get||r)(t,e,i,n)):function(a,l,c){return o(($i[a]&&$i[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=An(t),t.length>1){var n=t.map(function(h){return Li.quickSetter(h,e,i)}),r=n.length;return function(h){for(var d=r;d--;)n[d](h)}}t=t[0]||{};var o=$i[e],a=Ws(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;ro._pt=0,d.init(t,i?h+i:h,ro,0,[t]),d.render(1,d),ro._pt&&nd(1,ro)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,r=Li.to(t,hn((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Sr(t.ease,Aa.ease)),gm(Aa,t||{})},config:function(t){return gm(tn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!$i[a]&&!cn[a]&&Ra(e+" effect requires "+a+" plugin.")}),Ef[e]=function(a,l,c){return i(An(a),hn(l||{},r),c)},o&&(Pi.prototype[e]=function(a,l,c){return this.add(Ef[e](a,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){_e[t]=Sr(e)},parseEase:function(t,e){return arguments.length?Sr(t,e):_e},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Pi(t),n,r;for(i.smoothChildTiming=ji(t.smoothChildTiming),ke.remove(i),i._dp=0,i._time=i._tTime=ke._time,n=ke._first;n;)r=n._next,(e||!(!n._dur&&n instanceof Je&&n.vars.onComplete===n._targets[0]))&&Jn(i,n,n._start-n._delay),n=r;return Jn(ke,i,0),i},context:function(t,e){return t?new $m(t,e):Oe},matchMedia:function(t){return new Lv(t)},matchMediaRefresh:function(){return Mr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||La()},addEventListener:function(t,e){var i=Ac[t]||(Ac[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ac[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:cv,wrapYoyo:hv,distribute:Bm,random:km,snap:zm,normalize:lv,getUnit:Si,clamp:sv,splitColor:Xm,toArray:An,selector:Ff,mapRange:Gm,pipe:ov,unitize:av,interpolate:uv,shuffle:Fm},install:Em,effects:Ef,ticker:Qi,updateRoot:Pi.updateRoot,plugins:$i,globalTimeline:ke,core:{PropTween:Vi,globals:Am,Tween:Je,Timeline:Pi,Animation:Ia,getCache:Ws,_removeLinkedListItem:Fc,reverting:function(){return yi},context:function(t){return t&&Oe&&(Oe.data.push(t),t._ctx=Oe),Oe},suppressOverwrites:function(t){return kf=t}}};Gi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Nc[s]=Je[s]});Qi.add(Pi.updateRoot);ro=Nc.to({},{duration:0});var Dv=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Nv=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Dv(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},If=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(ai(r)&&(l={},Gi(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Nv(a,r)}}}},Li=Nc.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)yi?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},If("roundProps",Bf),If("modifiers"),If("snap",zm))||Nc;Je.version=Pi.version=Li.version="3.15.1";wm=1;Hf()&&co();var Uv=_e.Power0,Ov=_e.Power1,Fv=_e.Power2,Bv=_e.Power3,zv=_e.Power4,kv=_e.Linear,Hv=_e.Quad,Gv=_e.Cubic,Vv=_e.Quart,Wv=_e.Quint,Xv=_e.Strong,Yv=_e.Elastic,qv=_e.Back,Zv=_e.SteppedEase,Jv=_e.Bounce,Kv=_e.Sine,$v=_e.Expo,Qv=_e.Circ;var Qm,qs,fo,hd,Cr,jv,jm,ud,ty=function(){return typeof window<"u"},gs={},Rr=180/Math.PI,po=Math.PI/180,uo=Math.atan2,tg=1e8,fd=/([A-Z])/g,ey=/(left|right|width|margin|padding|x)/i,iy=/[\s,\(]\S/,$n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},od=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ny=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ry=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},oy=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},lg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ay=function(t,e,i){return t.style[e]=i},ly=function(t,e,i){return t.style.setProperty(e,i)},cy=function(t,e,i){return t._gsap[e]=i},hy=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},uy=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},fy=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},He="transform",en=He+"Origin",dy=function s(t,e){var i=this,n=this.target,r=n.style,o=n._gsap;if(t in gs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=$n[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=ms(n,a)}):this.tfm[t]=o.x?o[t]:ms(n,t),t===en&&(this.tfm.zOrigin=o.zOrigin);else return $n.transform.split(",").forEach(function(a){return s.call(i,a,e)});if(this.props.indexOf(He)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(en,e,"")),t=He}(r||e)&&this.props.push(t,e,r[t])},hg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},py=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(fd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ud(),(!r||!r.isStart)&&!i[He]&&(hg(i),n.zOrigin&&i[en]&&(i[en]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ug=function(t,e){var i={target:t,props:[],revert:py,save:dy};return t._gsap||Li.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},fg,ad=function(t,e){var i=qs.createElementNS?qs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qs.createElement(t);return i&&i.style?i:qs.createElement(t)},un=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(fd,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,mo(e)||e,1)||""},eg="O,Moz,ms,Ms,Webkit".split(","),mo=function(t,e,i){var n=e||Cr,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(eg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?eg[o]:"")+t},ld=function(){ty()&&window.document&&(Qm=window,qs=Qm.document,fo=qs.documentElement,Cr=ad("div")||{style:{}},jv=ad("div"),He=mo(He),en=He+"Origin",Cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fg=!!mo("perspective"),ud=Li.core.reverting,hd=1)},ig=function(t){var e=t.ownerSVGElement,i=ad("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),r;n.style.display="block",i.appendChild(n),fo.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),fo.removeChild(i),r},ng=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},dg=function(t){var e,i;try{e=t.getBBox()}catch{e=ig(t),i=1}return e&&(e.width||e.height)||i||(e=ig(t)),e&&!e.width&&!e.x&&!e.y?{x:+ng(t,["x","cx","x1"])||0,y:+ng(t,["y","cy","y1"])||0,width:0,height:0}:e},pg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&dg(t))},Js=function(t,e){if(e){var i=t.style,n;e in gs&&e!==en&&(e=He),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(fd,"-$1").toLowerCase())):i.removeAttribute(e)}},Zs=function(t,e,i,n,r,o){var a=new Vi(t._pt,e,i,0,1,o?cg:lg);return t._pt=a,a.b=n,a.e=r,t._props.push(i),a},sg={deg:1,rad:1,turn:1},my={grid:1,flex:1},Ks=function s(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=Cr.style,l=ey.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=n==="px",u=n==="%",p,g,m,_;if(n===o||!r||sg[n]||sg[o])return r;if(o!=="px"&&!f&&(r=s(t,e,i,"px")),_=t.getCTM&&pg(t),(u||o==="%")&&(gs[e]||~e.indexOf("adius")))return p=_?t.getBBox()[l?"width":"height"]:t[h],Ye(u?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(f?o:n),g=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===qs||!g.appendChild)&&(g=qs.body),m=g._gsap,m&&u&&m.width&&l&&m.time===Qi.time&&!m.uncache)return Ye(r/m.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+n,p=t[h],v?t.style[e]=v:Js(t,e)}else(u||o==="%")&&!my[un(g,"display")]&&(a.position=un(t,"position")),g===t&&(a.position="static"),g.appendChild(Cr),p=Cr[h],g.removeChild(Cr),a.position="absolute";return l&&u&&(m=Ws(g),m.time=Qi.time,m.width=g[h]),Ye(f?p*r/d:p&&r?d/p*r:0)},ms=function(t,e,i,n){var r;return hd||ld(),e in $n&&e!=="transform"&&(e=$n[e],~e.indexOf(",")&&(e=e.split(",")[0])),gs[e]&&e!=="transform"?(r=Oa(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Gc(un(t,en))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Hc[e]&&Hc[e](t,e,i)||un(t,e)||Zf(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Ks(t,e,r,i)+i:r},gy=function(t,e,i,n){if(!i||i==="none"){var r=mo(e,t,1),o=r&&un(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=un(t,"borderTopColor"))}var a=new Vi(this._pt,t.style,e,0,1,id),l=0,c=0,h,d,f,u,p,g,m,_,v,S,y,b;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=un(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=t.style[e],t.style[e]=n,n=un(t,e)||n,g?t.style[e]=g:Js(t,e)),h=[i,n],Kf(h),i=h[0],n=h[1],f=i.match(br)||[],b=n.match(br)||[],b.length){for(;d=br.exec(n);)m=d[0],v=n.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(g=f[c++]||"")&&(u=parseFloat(g)||0,y=g.substr((u+"").length),m.charAt(1)==="="&&(m=Tr(u,m)+y),_=parseFloat(m),S=m.substr((_+"").length),l=br.lastIndex-S.length,S||(S=S||tn.units[e]||y,l===n.length&&(n+=S,a.e+=S)),y!==S&&(u=Ks(t,e,g,S)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:_-u,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?cg:lg;return Vf.test(n)&&(a.e=0),this._pt=a,a},rg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_y=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=rg[i]||i,e[1]=rg[n]||n,e.join(" ")},xy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],gs[a]&&(l=1,a=a==="transformOrigin"?en:He),Js(i,a);l&&(Js(i,He),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Oa(i,1),o.uncache=1,hg(n)))}},Hc={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new Vi(t._pt,e,i,0,0,xy);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},Ua=[1,0,0,1,0,0],mg={},gg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},og=function(t){var e=un(t,He);return gg(e)?Ua:e.substr(7).match(Gf).map(Ye)},dd=function(t,e){var i=t._gsap||Ws(t),n=t.style,r=og(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ua:r):(r===Ua&&!t.offsetParent&&t!==fo&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,fo.appendChild(t)),r=og(t),l?n.display=l:Js(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):fo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},cd=function(t,e,i,n,r,o){var a=t._gsap,l=r||dd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],p=l[1],g=l[2],m=l[3],_=l[4],v=l[5],S=e.split(" "),y=parseFloat(S[0])||0,b=parseFloat(S[1])||0,w,x,M,P;i?l!==Ua&&(x=u*m-p*g)&&(M=y*(m/x)+b*(-g/x)+(g*v-m*_)/x,P=y*(-p/x)+b*(u/x)-(u*v-p*_)/x,y=M,b=P):(w=dg(t),y=w.x+(~S[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(S[1]||S[0]).indexOf("%")?b/100*w.height:b)),n||n!==!1&&a.smooth?(_=y-c,v=b-h,a.xOffset=d+(_*u+v*g)-_,a.yOffset=f+(_*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[en]="0px 0px",o&&(Zs(o,a,"xOrigin",c,y),Zs(o,a,"yOrigin",h,b),Zs(o,a,"xOffset",d,a.xOffset),Zs(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+b)},Oa=function(t,e){var i=t._gsap||new $f(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=un(t,en)||"0",h,d,f,u,p,g,m,_,v,S,y,b,w,x,M,P,R,N,L,G,C,U,B,D,K,V,A,W,ht,wt,X,ot;return h=d=f=g=m=_=v=S=y=0,u=p=1,i.svg=!!(t.getCTM&&pg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[He]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[He]!=="none"?l[He]:"")),n.scale=n.rotate=n.translate="none"),x=dd(t,i.svg),i.svg&&(i.uncache?(K=t.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",D=""):D=!e&&t.getAttribute("data-svg-origin"),cd(t,D||c,!!D||i.originIsAbsolute,i.smooth!==!1,x)),b=i.xOrigin||0,w=i.yOrigin||0,x!==Ua&&(N=x[0],L=x[1],G=x[2],C=x[3],h=U=x[4],d=B=x[5],x.length===6?(u=Math.sqrt(N*N+L*L),p=Math.sqrt(C*C+G*G),g=N||L?uo(L,N)*Rr:0,v=G||C?uo(G,C)*Rr+g:0,v&&(p*=Math.abs(Math.cos(v*po))),i.svg&&(h-=b-(b*N+w*G),d-=w-(b*L+w*C))):(ot=x[6],wt=x[7],A=x[8],W=x[9],ht=x[10],X=x[11],h=x[12],d=x[13],f=x[14],M=uo(ot,ht),m=M*Rr,M&&(P=Math.cos(-M),R=Math.sin(-M),D=U*P+A*R,K=B*P+W*R,V=ot*P+ht*R,A=U*-R+A*P,W=B*-R+W*P,ht=ot*-R+ht*P,X=wt*-R+X*P,U=D,B=K,ot=V),M=uo(-G,ht),_=M*Rr,M&&(P=Math.cos(-M),R=Math.sin(-M),D=N*P-A*R,K=L*P-W*R,V=G*P-ht*R,X=C*R+X*P,N=D,L=K,G=V),M=uo(L,N),g=M*Rr,M&&(P=Math.cos(M),R=Math.sin(M),D=N*P+L*R,K=U*P+B*R,L=L*P-N*R,B=B*P-U*R,N=D,U=K),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),u=Ye(Math.sqrt(N*N+L*L+G*G)),p=Ye(Math.sqrt(B*B+ot*ot)),M=uo(U,B),v=Math.abs(M)>2e-4?M*Rr:0,y=X?1/(X<0?-X:X):0),i.svg&&(D=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!gg(un(t,He)),D&&t.setAttribute("transform",D))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Ye(u),i.scaleY=Ye(p),i.rotation=Ye(g)+a,i.rotationX=Ye(m)+a,i.rotationY=Ye(_)+a,i.skewX=v+a,i.skewY=S+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[en]=Gc(c)),i.xOffset=i.yOffset=0,i.force3D=tn.force3D,i.renderTransform=i.svg?yy:fg?_g:vy,i.uncache=0,i},Gc=function(t){return(t=t.split(" "))[0]+" "+t[1]},rd=function(t,e,i){var n=Si(e);return Ye(parseFloat(e)+parseFloat(Ks(t,"x",i+"px",n)))+n},vy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_g(t,e)},Er="0deg",Na="0px",Ar=") ",_g=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,f=i.skewX,u=i.skewY,p=i.scaleX,g=i.scaleY,m=i.transformPerspective,_=i.force3D,v=i.target,S=i.zOrigin,y="",b=_==="auto"&&t&&t!==1||_===!0;if(S&&(d!==Er||h!==Er)){var w=parseFloat(h)*po,x=Math.sin(w),M=Math.cos(w),P;w=parseFloat(d)*po,P=Math.cos(w),o=rd(v,o,x*P*-S),a=rd(v,a,-Math.sin(w)*-S),l=rd(v,l,M*P*-S+S)}m!==Na&&(y+="perspective("+m+Ar),(n||r)&&(y+="translate("+n+"%, "+r+"%) "),(b||o!==Na||a!==Na||l!==Na)&&(y+=l!==Na||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ar),c!==Er&&(y+="rotate("+c+Ar),h!==Er&&(y+="rotateY("+h+Ar),d!==Er&&(y+="rotateX("+d+Ar),(f!==Er||u!==Er)&&(y+="skew("+f+", "+u+Ar),(p!==1||g!==1)&&(y+="scale("+p+", "+g+Ar),v.style[He]=y||"translate(0, 0)"},yy=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,f=i.scaleY,u=i.target,p=i.xOrigin,g=i.yOrigin,m=i.xOffset,_=i.yOffset,v=i.forceCSS,S=parseFloat(o),y=parseFloat(a),b,w,x,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=po,c*=po,b=Math.cos(l)*d,w=Math.sin(l)*d,x=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(h*=po,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),b*=P,w*=P)),b=Ye(b),w=Ye(w),x=Ye(x),M=Ye(M)):(b=d,M=f,w=x=0),(S&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=Ks(u,"x",o,"px"),y=Ks(u,"y",a,"px")),(p||g||m||_)&&(S=Ye(S+p-(p*b+g*x)+m),y=Ye(y+g-(p*w+g*M)+_)),(n||r)&&(P=u.getBBox(),S=Ye(S+n/100*P.width),y=Ye(y+r/100*P.height)),P="matrix("+b+","+w+","+x+","+M+","+S+","+y+")",u.setAttribute("transform",P),v&&(u.style[He]=P)},Sy=function(t,e,i,n,r){var o=360,a=ai(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Rr:1),c=l-n,h=n+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*tg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*tg)%o-~~(c/o)*o)),t._pt=f=new Vi(t._pt,e,i,n,c,ny),f.e=h,f.u="deg",t._props.push(i),f},ag=function(t,e){for(var i in e)t[i]=e[i];return t},My=function(t,e,i){var n=ag({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,f,u,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[He]=e,a=Oa(i,1),Js(i,He),i.setAttribute("transform",c)):(c=getComputedStyle(i)[He],o[He]=e,a=Oa(i,1),o[He]=c);for(l in gs)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=Si(c),p=Si(h),d=u!==p?Ks(i,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new Vi(t._pt,a,l,d,f-d,od),t._pt.u=p||0,t._props.push(l));ag(a,n)};Gi("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(a){return t<2?s+a:"border"+a+s});Hc[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(p){return ms(a,p,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(p,g){return u[p]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,u,d)}});var pd={name:"css",register:ld,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,a=t.style,l=i.vars.startAt,c,h,d,f,u,p,g,m,_,v,S,y,b,w,x,M,P;hd||ld(),this.styles=this.styles||ug(t),M=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(h=e[g],!($i[g]&&jf(g,e,i,n,t,r)))){if(u=typeof h,p=Hc[g],u==="function"&&(h=h.call(i,n,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=ho(h)),p)p(this,t,g,h,i)&&(x=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",ds.lastIndex=0,ds.test(c)||(m=Si(c),_=Si(h),_?m!==_&&(c=Ks(t,g,c,_)+_):m&&(h+=m)),this.add(a,"setProperty",c,h,n,r,0,0,g),o.push(g),M.push(g,0,a[g]);else if(u!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,t,r):l[g],ai(c)&&~c.indexOf("random(")&&(c=ho(c)),Si(c+"")||c==="auto"||(c+=tn.units[g]||Si(ms(t,g))||""),(c+"").charAt(1)==="="&&(c=ms(t,g))):c=ms(t,g),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),g in $n&&(g==="autoAlpha"&&(f===1&&ms(t,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,a.visibility),Zs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=$n[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in gs,S){if(this.styles.save(g),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=un(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=un(t,"perspective"),R?t.style.perspective=R:Js(t,"perspective")}d=parseFloat(h)}if(y||(b=t._gsap,b.renderTransform&&!e.parseTransform||Oa(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,y=this._pt=new Vi(this._pt,a,He,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new Vi(this._pt,b,"scaleY",b.scaleY,(v?Tr(b.scaleY,v+d):d)-b.scaleY||0,od),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){M.push(en,0,a[en]),h=_y(h),b.svg?cd(t,h,0,w,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==b.zOrigin&&Zs(this,b,"zOrigin",b.zOrigin,_),Zs(this,a,g,Gc(c),Gc(h)));continue}else if(g==="svgOrigin"){cd(t,h,1,w,0,this);continue}else if(g in mg){Sy(this,b,g,f,v?Tr(f,v+h):h);continue}else if(g==="smoothOrigin"){Zs(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){My(this,h,t);continue}}else g in a||(g=mo(g)||g);if(S||(d||d===0)&&(f||f===0)&&!iy.test(h)&&g in a)m=(c+"").substr((f+"").length),d||(d=0),_=Si(h)||(g in tn.units?tn.units[g]:m),m!==_&&(f=Ks(t,g,c,_)),this._pt=new Vi(this._pt,S?b:a,g,f,(v?Tr(f,v+d):d)-f,!S&&(_==="px"||g==="zIndex")&&e.autoRound!==!1?oy:od),this._pt.u=_||0,S&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=ry):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=sy);else if(g in a)gy.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,n,r);else if(g!=="parseTransform"){Oc(g,h);continue}S||(g in a?M.push(g,0,a[g]):typeof t[g]=="function"?M.push(g,2,t[g]()):M.push(g,1,c||t[g])),o.push(g)}}x&&sd(this)},render:function(t,e){if(e.tween._time||!ud())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:ms,aliases:$n,getSetter:function(t,e,i){var n=$n[e];return n&&n.indexOf(",")<0&&(e=n),e in gs&&e!==en&&(t._gsap.x||ms(t,"x"))?i&&jm===i?e==="scale"?hy:cy:(jm=i||{})&&(e==="scale"?uy:fy):t.style&&!Uc(t.style[e])?ay:~e.indexOf("-")?ly:kc(t,e)},core:{_removeProperty:Js,_getMatrix:dd}};Li.utils.checkPrefix=mo;Li.core.getStyleSaver=ug;(function(s,t,e,i){var n=Gi(s+","+t+","+e,function(r){gs[r]=1});Gi(t,function(r){tn.units[r]="deg",mg[r]=1}),$n[n[13]]=s+","+t,Gi(i,function(r){var o=r.split(":");$n[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){tn.units[s]="px"});Li.registerPlugin(pd);var we=Li.registerPlugin(pd)||Li,NE=we.core.Tween;function xg(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function by(s,t,e){return t&&xg(s.prototype,t),e&&xg(s,e),s}var Mi,Xc,Ty,nn,$s,Qs,_o,yg,Pr,xo,Sg,_s,kn,Mg,bg=function(){return Mi||typeof window<"u"&&(Mi=window.gsap)&&Mi.registerPlugin&&Mi},Tg=1,go=[],oe=[],Hn=[],Ba=Date.now,md=function(t,e){return e},wy=function(){var t=xo.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,oe),n.push.apply(n,Hn),oe=i,Hn=n,md=function(o,a){return e[o](a)}},vs=function(t,e){return~Hn.indexOf(t)&&Hn[Hn.indexOf(t)+1][e]},za=function(t){return!!~Sg.indexOf(t)},Xi=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:n!==!1,capture:!!r})},Wi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Vc="scrollLeft",Wc="scrollTop",gd=function(){return _s&&_s.isPressed||oe.cache++},Yc=function(t,e){var i=function n(r){if(r||r===0){Tg&&nn.history.scrollRestoration!=="manual"&&(nn.history.scrollRestoration="manual");var o=_s&&_s.isPressed;r=n.v=Math.round(r)||(_s&&_s.iOS?1:0),t(r),n.cacheID=oe.cache,o&&md("ss",r)}else(e||oe.cache!==n.cacheID||md("ref"))&&(n.cacheID=oe.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},Di={s:Vc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yc(function(s){return arguments.length?nn.scrollTo(s,ei.sc()):nn.pageXOffset||$s[Vc]||Qs[Vc]||_o[Vc]||0})},ei={s:Wc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Di,sc:Yc(function(s){return arguments.length?nn.scrollTo(Di.sc(),s):nn.pageYOffset||$s[Wc]||Qs[Wc]||_o[Wc]||0})},Yi=function(t,e){return(e&&e._ctx&&e._ctx.selector||Mi.utils.toArray)(t)[0]||(typeof t=="string"&&Mi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ey=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},xs=function(t,e){var i=e.s,n=e.sc;za(t)&&(t=$s.scrollingElement||Qs);var r=oe.indexOf(t),o=n===ei.sc?1:2;!~r&&(r=oe.push(t)-1),oe[r+o]||Xi(t,"scroll",gd);var a=oe[r+o],l=a||(oe[r+o]=Yc(vs(t,i),!0)||(za(t)?n:Yc(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=Mi.getProperty(t,"scrollBehavior")==="smooth"),l},qc=function(t,e,i){var n=t,r=t,o=Ba(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,g){var m=Ba();g||m-o>l?(r=n,n=p,a=o,o=m):i?n+=p:n=r+(p-r)/(m-a)*(o-a)},d=function(){r=n=i?0:n,a=o=0},f=function(p){var g=a,m=r,_=Ba();return(p||p===0)&&p!==n&&h(p),o===a||_-a>c?0:(n+(i?m:-m))/((i?_:o)-g)*1e3};return{update:h,reset:d,getVelocity:f}},Fa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},vg=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},wg=function(){xo=Mi.core.globals().ScrollTrigger,xo&&xo.core&&wy()},Eg=function(t){return Mi=t||bg(),!Xc&&Mi&&typeof document<"u"&&document.body&&(nn=window,$s=document,Qs=$s.documentElement,_o=$s.body,Sg=[nn,$s,Qs,_o],Ty=Mi.utils.clamp,Mg=Mi.core.context||function(){},Pr="onpointerenter"in _o?"pointer":"mouse",yg=qe.isTouch=nn.matchMedia&&nn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in nn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,kn=qe.eventTypes=("ontouchstart"in Qs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Tg=0},500),Xc=1),xo||wg(),Xc};Di.op=ei;oe.cache=0;var qe=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(i){Xc||Eg(Mi)||console.warn("Please gsap.registerPlugin(Observer)"),xo||wg();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,f=i.onStopDelay,u=i.ignore,p=i.wheelSpeed,g=i.event,m=i.onDragStart,_=i.onDragEnd,v=i.onDrag,S=i.onPress,y=i.onRelease,b=i.onRight,w=i.onLeft,x=i.onUp,M=i.onDown,P=i.onChangeX,R=i.onChangeY,N=i.onChange,L=i.onToggleX,G=i.onToggleY,C=i.onHover,U=i.onHoverEnd,B=i.onMove,D=i.ignoreCheck,K=i.isNormalizer,V=i.onGestureStart,A=i.onGestureEnd,W=i.onWheel,ht=i.onEnable,wt=i.onDisable,X=i.onClick,ot=i.scrollSpeed,_t=i.capture,Rt=i.allowClicks,gt=i.lockAxis,Nt=i.onLockAxis;this.target=a=Yi(a)||Qs,this.vars=i,u&&(u=Mi.utils.toArray(u)),n=n||1e-9,r=r||0,p=p||1,ot=ot||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(nn.getComputedStyle(_o).lineHeight)||22);var me,Ut,at,ct,$,lt,ut,k=this,xt=0,Xt=0,Ot=i.passive||!h&&i.passive!==!1,Bt=xs(a,Di),Kt=xs(a,ei),se=Bt(),F=Kt(),re=~o.indexOf("touch")&&!~o.indexOf("pointer")&&kn[0]==="pointerdown",Jt=za(a),$t=a.ownerDocument||$s,yt=[0,0,0],ge=[0,0,0],Ht=0,Yt=function(){return Ht=Ba()},I=function(Tt,rt){return(k.event=Tt)&&u&&Ey(Tt.target,u)||rt&&re&&Tt.pointerType!=="touch"||D&&D(Tt,rt)},T=function(){k._vx.reset(),k._vy.reset(),Ut.pause(),d&&d(k)},q=function(){var Tt=k.deltaX=vg(yt),rt=k.deltaY=vg(ge),it=Math.abs(Tt)>=n,At=Math.abs(rt)>=n;N&&(it||At)&&N(k,Tt,rt,yt,ge),it&&(b&&k.deltaX>0&&b(k),w&&k.deltaX<0&&w(k),P&&P(k),L&&k.deltaX<0!=xt<0&&L(k),xt=k.deltaX,yt[0]=yt[1]=yt[2]=0),At&&(M&&k.deltaY>0&&M(k),x&&k.deltaY<0&&x(k),R&&R(k),G&&k.deltaY<0!=Xt<0&&G(k),Xt=k.deltaY,ge[0]=ge[1]=ge[2]=0),(ct||at)&&(B&&B(k),at&&(m&&at===1&&m(k),v&&v(k),at=0),ct=!1),lt&&!(lt=!1)&&Nt&&Nt(k),$&&(W(k),$=!1),me=0},ft=function(Tt,rt,it){yt[it]+=Tt,ge[it]+=rt,k._vx.update(Tt),k._vy.update(rt),c?me||(me=requestAnimationFrame(q)):q()},st=function(Tt,rt){gt&&!ut&&(k.axis=ut=Math.abs(Tt)>Math.abs(rt)?"x":"y",lt=!0),ut!=="y"&&(yt[2]+=Tt,k._vx.update(Tt,!0)),ut!=="x"&&(ge[2]+=rt,k._vy.update(rt,!0)),c?me||(me=requestAnimationFrame(q)):q()},St=function(Tt){if(!I(Tt,1)){Tt=Fa(Tt,h);var rt=Tt.clientX,it=Tt.clientY,At=rt-k.x,nt=it-k.y,Lt=k.isDragging;k.x=rt,k.y=it,(Lt||(At||nt)&&(Math.abs(k.startX-rt)>=r||Math.abs(k.startY-it)>=r))&&(at||(at=Lt?2:1),Lt||(k.isDragging=!0),st(At,nt))}},Et=k.onPress=function(dt){I(dt,1)||dt&&dt.button||(k.axis=ut=null,Ut.pause(),k.isPressed=!0,dt=Fa(dt),xt=Xt=0,k.startX=k.x=dt.clientX,k.startY=k.y=dt.clientY,k._vx.reset(),k._vy.reset(),Xi(K?a:$t,kn[1],St,Ot,!0),k.deltaX=k.deltaY=0,S&&S(k))},Z=k.onRelease=function(dt){if(!I(dt,1)){Wi(K?a:$t,kn[1],St,!0);var Tt=!isNaN(k.y-k.startY),rt=k.isDragging,it=rt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),At=Fa(dt);!it&&Tt&&(k._vx.reset(),k._vy.reset(),h&&Rt&&Mi.delayedCall(.08,function(){if(Ba()-Ht>300&&!dt.defaultPrevented){if(dt.target.click)dt.target.click();else if($t.createEvent){var nt=$t.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,nn,1,At.screenX,At.screenY,At.clientX,At.clientY,!1,!1,!1,!1,0,null),dt.target.dispatchEvent(nt)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,d&&rt&&!K&&Ut.restart(!0),at&&q(),_&&rt&&_(k),y&&y(k,it)}},et=function(Tt){return Tt.touches&&Tt.touches.length>1&&(k.isGesturing=!0)&&V(Tt,k.isDragging)},vt=function(){return(k.isGesturing=!1)||A(k)},O=function(Tt){if(!I(Tt)){var rt=Bt(),it=Kt();ft((rt-se)*ot,(it-F)*ot,1),se=rt,F=it,d&&Ut.restart(!0)}},tt=function(Tt){if(!I(Tt)){Tt=Fa(Tt,h),W&&($=!0);var rt=(Tt.deltaMode===1?l:Tt.deltaMode===2?nn.innerHeight:1)*p;ft(Tt.deltaX*rt,Tt.deltaY*rt,0),d&&!K&&Ut.restart(!0)}},j=function(Tt){if(!I(Tt)){var rt=Tt.clientX,it=Tt.clientY,At=rt-k.x,nt=it-k.y;k.x=rt,k.y=it,ct=!0,d&&Ut.restart(!0),(At||nt)&&st(At,nt)}},Mt=function(Tt){k.event=Tt,C(k)},pt=function(Tt){k.event=Tt,U(k)},bt=function(Tt){return I(Tt)||Fa(Tt,h)&&X(k)};Ut=k._dc=Mi.delayedCall(f||.25,T).pause(),k.deltaX=k.deltaY=0,k._vx=qc(0,50,!0),k._vy=qc(0,50,!0),k.scrollX=Bt,k.scrollY=Kt,k.isDragging=k.isGesturing=k.isPressed=!1,Mg(this),k.enable=function(dt){return k.isEnabled||(Xi(Jt?$t:a,"scroll",gd),o.indexOf("scroll")>=0&&Xi(Jt?$t:a,"scroll",O,Ot,_t),o.indexOf("wheel")>=0&&Xi(a,"wheel",tt,Ot,_t),(o.indexOf("touch")>=0&&yg||o.indexOf("pointer")>=0)&&(Xi(a,kn[0],Et,Ot,_t),Xi($t,kn[2],Z),Xi($t,kn[3],Z),Rt&&Xi(a,"click",Yt,!0,!0),X&&Xi(a,"click",bt),V&&Xi($t,"gesturestart",et),A&&Xi($t,"gestureend",vt),C&&Xi(a,Pr+"enter",Mt),U&&Xi(a,Pr+"leave",pt),B&&Xi(a,Pr+"move",j)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=ct=at=!1,k._vx.reset(),k._vy.reset(),se=Bt(),F=Kt(),dt&&dt.type&&Et(dt),ht&&ht(k)),k},k.disable=function(){k.isEnabled&&(go.filter(function(dt){return dt!==k&&za(dt.target)}).length||Wi(Jt?$t:a,"scroll",gd),k.isPressed&&(k._vx.reset(),k._vy.reset(),Wi(K?a:$t,kn[1],St,!0)),Wi(Jt?$t:a,"scroll",O,_t),Wi(a,"wheel",tt,_t),Wi(a,kn[0],Et,_t),Wi($t,kn[2],Z),Wi($t,kn[3],Z),Wi(a,"click",Yt,!0),Wi(a,"click",bt),Wi($t,"gesturestart",et),Wi($t,"gestureend",vt),Wi(a,Pr+"enter",Mt),Wi(a,Pr+"leave",pt),Wi(a,Pr+"move",j),k.isEnabled=k.isPressed=k.isDragging=!1,wt&&wt(k))},k.kill=k.revert=function(){k.disable();var dt=go.indexOf(k);dt>=0&&go.splice(dt,1),_s===k&&(_s=0)},go.push(k),K&&za(a)&&(_s=k),k.enable(g)},by(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();qe.version="3.15.1";qe.create=function(s){return new qe(s)};qe.register=Eg;qe.getAll=function(){return go.slice()};qe.getById=function(s){return go.filter(function(t){return t.vars.id===s})[0]};bg()&&Mi.registerPlugin(qe);var zt,Mo,ce,Ee,pn,be,Pd,ch,Qa,Ya,Ha,Zc,Ni,fh,bd,Zi,Ag,Rg,bo,Wg,_d,Xg,qi,Td,Yg,qg,js,wd,Id,To,Ld,tr,Ed,xd,Jc=1,Ui=Date.now,vd=Ui(),Pn=0,Ga=0,Cg=function(t,e,i){var n=dn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},Pg=function(t,e){return e&&(!dn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Ay=function s(){return Ga&&requestAnimationFrame(s)},Ig=function(){return fh=1},Lg=function(){return fh=0},Qn=function(t){return t},Va=function(t){return Math.round(t*1e5)/1e5||0},Zg=function(){return typeof window<"u"},Jg=function(){return zt||Zg()&&(zt=window.gsap)&&zt.registerPlugin&&zt},Or=function(t){return!!~Pd.indexOf(t)},Kg=function(t){return(t==="Height"?Ld:ce["inner"+t])||pn["client"+t]||be["client"+t]},$g=function(t){return vs(t,"getBoundingClientRect")||(Or(t)?function(){return lh.width=ce.innerWidth,lh.height=Ld,lh}:function(){return ys(t)})},Ry=function(t,e,i){var n=i.d,r=i.d2,o=i.a;return(o=vs(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?Kg(r):t["client"+r])||0}},Cy=function(t,e){return!e||~Hn.indexOf(t)?$g(t):function(){return lh}},jn=function(t,e){var i=e.s,n=e.d2,r=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=vs(t,i))?o()-$g(t)()[r]:Or(t)?(pn[i]||be[i])-Kg(n):t[i]-t["offset"+n])},Kc=function(t,e){for(var i=0;i<bo.length;i+=3)(!e||~e.indexOf(bo[i+1]))&&t(bo[i],bo[i+1],bo[i+2])},dn=function(t){return typeof t=="string"},Oi=function(t){return typeof t=="function"},Wa=function(t){return typeof t=="number"},Ir=function(t){return typeof t=="object"},ka=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},vo=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},yo=Math.abs,Qg="left",jg="top",Dd="right",Nd="bottom",Dr="width",Nr="height",qa="Right",Za="Left",Ja="Top",Ka="Bottom",ii="padding",Rn="margin",Eo="Width",Ud="Height",li="px",Cn=function(t){return ce.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Py=function(t){var e=Cn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Dg=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},ys=function(t,e){var i=e&&Cn(t)[bd]!=="matrix(1, 0, 0, 1, 0, 0)"&&zt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},hh=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},t0=function(t){var e=[],i=t.labels,n=t.duration(),r;for(r in i)e.push(i[r]/n);return e},Iy=function(t){return function(e){return zt.utils.snap(t0(t),e)}},Od=function(t){var e=zt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return e(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=e(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:e(r<0?n-t:n+t)}},Ly=function(t){return function(e,i){return Od(t0(t))(e,i.direction)}},$c=function(t,e,i,n){return i.split(",").forEach(function(r){return t(e,r,n)})},gi=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:!n,capture:!!r})},mi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Qc=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},Ng={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jc={toggleActions:"play",anticipatePin:0},uh={top:0,left:0,center:.5,bottom:1,right:1},sh=function(t,e){if(dn(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in uh?uh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},th=function(t,e,i,n,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,p=Ee.createElement("div"),g=Or(i)||vs(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,_=g?be:i.tagName==="IFRAME"?i.contentDocument.body:i,v=t.indexOf("start")!==-1,S=v?c:h,y="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(n===ei?Dd:Nd)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+n.op.d2],rh(p,0,n,v),p},rh=function(t,e,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+Eo]=1,r["border"+a+Eo]=0,r[i.p]=e+"px",zt.set(t,r)},le=[],Ad={},ja,Ug=function(){return Ui()-Pn>34&&(ja||(ja=requestAnimationFrame(Ss)))},So=function(){(!qi||!qi.isPressed||qi.startX>be.clientWidth)&&(oe.cache++,qi?ja||(ja=requestAnimationFrame(Ss)):Ss(),Pn||Br("scrollStart"),Pn=Ui())},yd=function(){qg=ce.innerWidth,Yg=ce.innerHeight},Xa=function(t){oe.cache++,(t===!0||!Ni&&!Xg&&!Ee.fullscreenElement&&!Ee.webkitFullscreenElement&&(!Td||qg!==ce.innerWidth||Math.abs(ce.innerHeight-Yg)>ce.innerHeight*.25))&&ch.restart(!0)},Fr={},Dy=[],e0=function s(){return mi(ne,"scrollEnd",s)||Lr(!0)},Br=function(t){return Fr[t]&&Fr[t].map(function(e){return e()})||Dy},fn=[],i0=function(t){for(var e=0;e<fn.length;e+=5)(!t||fn[e+4]&&fn[e+4].query===t)&&(fn[e].style.cssText=fn[e+1],fn[e].getBBox&&fn[e].setAttribute("transform",fn[e+2]||""),fn[e+3].uncache=1)},n0=function(){oe.cache++,oe.forEach(function(t){return Oi(t)&&(t.rec=t())})},Fd=function(t,e){var i;for(Zi=0;Zi<le.length;Zi++)i=le[Zi],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));tr=!0,e&&i0(e),e||Br("revert")},s0=function(t,e){oe.cache++,(e||!Ji)&&oe.forEach(function(i){return Oi(i)&&i.cacheID++&&(i.rec=0)}),dn(t)&&(Id=t,ce.history.scrollRestoration!==t&&(ce.history.scrollRestoration=t))},Ji,Ur=0,Og,Ny=function(){if(Og!==Ur){var t=Og=Ur;requestAnimationFrame(function(){return t===Ur&&Lr(!0)})}},r0=function(){be.appendChild(To),Ld=!qi&&To.offsetHeight||ce.innerHeight,be.removeChild(To)},Fg=function(t){return Qa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Lr=function(t,e){if(pn=Ee.documentElement,be=Ee.body,Pd=[ce,Ee,pn,be],Pn&&!t&&!tr){gi(ne,"scrollEnd",e0);return}r0(),Ji=ne.isRefreshing=!0,tr||n0();var i=Br("refreshInit");Wg&&ne.sort(),e||Fd(),oe.forEach(function(n){Oi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),le.slice(0).forEach(function(n){return n.refresh()}),tr=!1,le.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),Ed=1,Fg(!0),le.forEach(function(n){var r=jn(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),Fg(!1),Ed=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),oe.forEach(function(n){Oi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),s0(Id,1),ch.pause(),Ur++,Ji=2,Ss(2),le.forEach(function(n){return Oi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Ji=ne.isRefreshing=!1,Br("refresh")},Rd=0,oh=1,$a,Ss=function(t){if(t===2||!Ji&&!tr){ne.isUpdating=!0,$a&&$a.update(0);var e=le.length,i=Ui(),n=i-vd>=50,r=e&&le[0].scroll();if(oh=Rd>r?-1:1,Ji||(Rd=r),n&&(Pn&&!fh&&i-Pn>200&&(Pn=0,Br("scrollEnd")),Ha=vd,vd=i),oh<0){for(Zi=e;Zi-- >0;)le[Zi]&&le[Zi].update(0,n);oh=1}else for(Zi=0;Zi<e;Zi++)le[Zi]&&le[Zi].update(0,n);ne.isUpdating=!1}ja=0},Cd=[Qg,jg,Nd,Dd,Rn+Ka,Rn+qa,Rn+Ja,Rn+Za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ah=Cd.concat([Dr,Nr,"boxSizing","max"+Eo,"max"+Ud,"position",Rn,ii,ii+Ja,ii+qa,ii+Ka,ii+Za]),Uy=function(t,e,i){wo(i);var n=t._gsap;if(n.spacerIsNative)wo(n.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Sd=function(t,e,i,n){if(!t._gsap.swappedIn){for(var r=Cd.length,o=e.style,a=t.style,l;r--;)l=Cd[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Nd]=a[Dd]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Dr]=hh(t,Di)+li,o[Nr]=hh(t,ei)+li,o[ii]=a[Rn]=a[jg]=a[Qg]="0",wo(n),a[Dr]=a["max"+Eo]=i[Dr],a[Nr]=a["max"+Ud]=i[Nr],a[ii]=i[ii],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Oy=/([A-Z])/g,wo=function(t){if(t){var e=t.t.style,i=t.length,n=0,r,o;for((t.t._gsap||zt.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],r=t[n],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Oy,"-$1").toLowerCase())}},eh=function(t){for(var e=ah.length,i=t.style,n=[],r=0;r<e;r++)n.push(ah[r],i[ah[r]]);return n.t=t,n},Fy=function(t,e,i){for(var n=[],r=t.length,o=i?8:0,a;o<r;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},lh={left:0,top:0},Bg=function(t,e,i,n,r,o,a,l,c,h,d,f,u,p){Oi(t)&&(t=t(l)),dn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?sh("0"+t.substr(3),i):0));var g=u?u.time():0,m,_,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Wa(t))u&&(t=zt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&rh(a,i,n,!0);else{Oi(e)&&(e=e(l));var S=(t||"0").split(" "),y,b,w,x;v=Yi(e,l)||be,y=ys(v)||{},(!y||!y.left&&!y.top)&&Cn(v).display==="none"&&(x=v.style.display,v.style.display="block",y=ys(v),x?v.style.display=x:v.style.removeProperty("display")),b=sh(S[0],y[n.d]),w=sh(S[1]||"0",i),t=y[n.p]-c[n.p]-h+b+r-w,a&&rh(a,w,n,i-w<20||a._isStart&&w>20),i-=i-w}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var M=t+i,P=o._isStart;m="scroll"+n.d2,rh(o,M,n,P&&M>20||!P&&(d?Math.max(be[m],pn[m]):o.parentNode[m])<=M+1),d&&(c=ys(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+li))}return u&&v&&(m=ys(v),u.seek(f),_=ys(v),u._caScrollDist=m[n.p]-_[n.p],t=t/u._caScrollDist*f),u&&u.seek(g),u?t:Math.round(t)},By=/(webkit|moz|length|cssText|inset)/i,zg=function(t,e,i,n){if(t.parentNode!==e){var r=t.style,o,a;if(e===be){t._stOrig=r.cssText,a=Cn(t);for(o in a)!+o&&!By.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=t._stOrig;zt.core.getCache(t).uncache=1,e.appendChild(t)}},o0=function(t,e,i){var n=e,r=n;return function(o){var a=Math.round(t());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},ih=function(t,e,i){var n={};n[e.p]="+="+i,zt.set(t,n)},kg=function(t,e){var i=xs(t,e),n="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,p={};c=c||i();var g=o0(i,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return g(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&Ss()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=zt.to(t,l),f};return t[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},gi(t,"wheel",i.wheelHandler),ne.isTouch&&gi(t,"touchmove",i.wheelHandler),r},ne=(function(){function s(e,i){Mo||s.register(zt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wd(this),this.init(e,i)}var t=s.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ga){this.update=this.refresh=this.kill=Qn;return}i=Dg(dn(i)||Wa(i)||i.nodeType?{trigger:i}:i,jc);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,p=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,v=r.onSnapComplete,S=r.once,y=r.snap,b=r.pinReparent,w=r.pinSpacer,x=r.containerAnimation,M=r.fastScrollEnd,P=r.preventOverlaps,R=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Di:ei,N=!d&&d!==0,L=Yi(i.scroller||ce),G=zt.core.getCache(L),C=Or(L),U=("pinType"in i?i.pinType:vs(L,"pinType")||C&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],D=N&&i.toggleActions.split(" "),K="markers"in i?i.markers:jc.markers,V=C?0:parseFloat(Cn(L)["border"+R.p2+Eo])||0,A=this,W=i.onRefreshInit&&function(){return i.onRefreshInit(A)},ht=Ry(L,C,R),wt=Cy(L,C),X=0,ot=0,_t=0,Rt=xs(L,R),gt,Nt,me,Ut,at,ct,$,lt,ut,k,xt,Xt,Ot,Bt,Kt,se,F,re,Jt,$t,yt,ge,Ht,Yt,I,T,q,ft,st,St,Et,Z,et,vt,O,tt,j,Mt,pt;if(A._startClamp=A._endClamp=!1,A._dir=R,m*=45,A.scroller=L,A.scroll=x?x.time.bind(x):Rt,Ut=Rt(),tr&&Rt.rec==null&&(Rt.rec=Ut),A.vars=i,n=n||i.animation,"refreshPriority"in i&&(Wg=1,i.refreshPriority===-9999&&($a=A)),G.tweenScroll=G.tweenScroll||{top:kg(L,ei),left:kg(L,Di)},A.tweenTo=gt=G.tweenScroll[R.p],A.scrubDuration=function(it){et=Wa(it)&&it,et?Z?Z.duration(it):Z=zt.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return _&&_(A)}}):(Z&&Z.progress(1).kill(),Z=0)},n&&(n.vars.lazy=!1,n._initted&&!A.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),A.animation=n.pause(),n.scrollTrigger=A,A.scrubDuration(d),St=0,l||(l=n.vars.id)),y&&((!Ir(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in be.style&&zt.set(C?[be,pn]:L,{scrollBehavior:"auto"}),oe.forEach(function(it){return Oi(it)&&it.target===(C?Ee.scrollingElement||pn:L)&&(it.smooth=!1)}),me=Oi(y.snapTo)?y.snapTo:y.snapTo==="labels"?Iy(n):y.snapTo==="labelsDirectional"?Ly(n):y.directional!==!1?function(it,At){return Od(y.snapTo)(it,Ui()-ot<500?0:At.direction)}:zt.utils.snap(y.snapTo),vt=y.duration||{min:.1,max:2},vt=Ir(vt)?Ya(vt.min,vt.max):Ya(vt,vt),O=zt.delayedCall(y.delay||et/2||.1,function(){var it=Rt(),At=Ui()-ot<500,nt=gt.tween;if((At||Math.abs(A.getVelocity())<10)&&!nt&&!fh&&X!==it){var Lt=(it-ct)/Bt,fe=n&&!N?n.totalProgress():Lt,ee=At?0:(fe-Et)/(Ui()-Ha)*1e3||0,Ne=zt.utils.clamp(-Lt,1-Lt,yo(ee/2)*ee/.185),Qe=Lt+(y.inertia===!1?0:Ne),Ue,Re,Me=y,si=Me.onStart,Ce=Me.onInterrupt,Ai=Me.onComplete;if(Ue=me(Qe,A),Wa(Ue)||(Ue=Qe),Re=Math.max(0,Math.round(ct+Ue*Bt)),it<=$&&it>=ct&&Re!==it){if(nt&&!nt._initted&&nt.data<=yo(Re-it))return;y.inertia===!1&&(Ne=Ue-Lt),gt(Re,{duration:vt(yo(Math.max(yo(Qe-fe),yo(Ue-fe))*.185/ee/.05||0)),ease:y.ease||"power3",data:yo(Re-it),onInterrupt:function(){return O.restart(!0)&&Ce&&vo(A,Ce)},onComplete:function(){A.update(),X=Rt(),n&&!N&&(Z?Z.resetTo("totalProgress",Ue,n._tTime/n._tDur):n.progress(Ue)),St=Et=n&&!N?n.totalProgress():A.progress,v&&v(A),Ai&&vo(A,Ai)}},it,Ne*Bt,Re-it-Ne*Bt),si&&vo(A,si,gt.tween)}}else A.isActive&&X!==it&&O.restart(!0)}).pause()),l&&(Ad[l]=A),f=A.trigger=Yi(f||u!==!0&&u),pt=f&&f._gsap&&f._gsap.stRevert,pt&&(pt=pt(A)),u=u===!0?f:Yi(u),dn(a)&&(a={targets:f,className:a}),u&&(p===!1||p===Rn||(p=!p&&u.parentNode&&u.parentNode.style&&Cn(u.parentNode).display==="flex"?!1:ii),A.pin=u,Nt=zt.core.getCache(u),Nt.spacer?Kt=Nt.pinState:(w&&(w=Yi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Nt.spacerIsNative=!!w,w&&(Nt.spacerState=eh(w))),Nt.spacer=re=w||Ee.createElement("div"),re.classList.add("pin-spacer"),l&&re.classList.add("pin-spacer-"+l),Nt.pinState=Kt=eh(u)),i.force3D!==!1&&zt.set(u,{force3D:!0}),A.spacer=re=Nt.spacer,st=Cn(u),Yt=st[p+R.os2],$t=zt.getProperty(u),yt=zt.quickSetter(u,R.a,li),Sd(u,re,st),F=eh(u)),K){Xt=Ir(K)?Dg(K,Ng):Ng,k=th("scroller-start",l,L,R,Xt,0),xt=th("scroller-end",l,L,R,Xt,0,k),Jt=k["offset"+R.op.d2];var bt=Yi(vs(L,"content")||L);lt=this.markerStart=th("start",l,bt,R,Xt,Jt,0,x),ut=this.markerEnd=th("end",l,bt,R,Xt,Jt,0,x),x&&(Mt=zt.quickSetter([lt,ut],R.a,li)),!U&&!(Hn.length&&vs(L,"fixedMarkers")===!0)&&(Py(C?be:L),zt.set([k,xt],{force3D:!0}),T=zt.quickSetter(k,R.a,li),ft=zt.quickSetter(xt,R.a,li))}if(x){var dt=x.vars.onUpdate,Tt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){A.update(0,0,1),dt&&dt.apply(x,Tt||[])})}if(A.previous=function(){return le[le.indexOf(A)-1]},A.next=function(){return le[le.indexOf(A)+1]},A.revert=function(it,At){if(!At)return A.kill(!0);var nt=it!==!1||!A.enabled,Lt=Ni;nt!==A.isReverted&&(nt&&(tt=Math.max(Rt(),A.scroll.rec||0),_t=A.progress,j=n&&n.progress()),lt&&[lt,ut,k,xt].forEach(function(fe){return fe.style.display=nt?"none":"block"}),nt&&(Ni=A,A.update(nt)),u&&(!b||!A.isActive)&&(nt?Uy(u,re,Kt):Sd(u,re,Cn(u),I)),nt||A.update(nt),Ni=Lt,A.isReverted=nt)},A.refresh=function(it,At,nt,Lt){if(!((Ni||!A.enabled)&&!At)){if(u&&it&&Pn){gi(s,"scrollEnd",e0);return}!Ji&&W&&W(A),Ni=A,gt.tween&&!nt&&(gt.tween.kill(),gt.tween=0),Z&&Z.pause(),g&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Y){return Y.vars.immediateRender&&Y.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var fe=ht(),ee=wt(),Ne=x?x.duration():jn(L,R),Qe=Bt<=.01||!Bt,Ue=0,Re=Lt||0,Me=Ir(nt)?nt.end:i.end,si=i.endTrigger||f,Ce=Ir(nt)?nt.start:i.start||(i.start===0||!f?0:u?"0 0":"0 100%"),Ai=A.pinnedContainer=i.pinnedContainer&&Yi(i.pinnedContainer,A),on=f&&Math.max(0,le.indexOf(A))||0,Ve=on,je,ri,an,so,oi,We,Tn,Sa,Mc,ks,E,z,Q;for(K&&Ir(nt)&&(z=zt.getProperty(k,R.p),Q=zt.getProperty(xt,R.p));Ve-- >0;)We=le[Ve],We.end||We.refresh(0,1)||(Ni=A),Tn=We.pin,Tn&&(Tn===f||Tn===u||Tn===Ai)&&!We.isReverted&&(ks||(ks=[]),ks.unshift(We),We.revert(!0,!0)),We!==le[Ve]&&(on--,Ve--);for(Oi(Ce)&&(Ce=Ce(A)),Ce=Cg(Ce,"start",A),ct=Bg(Ce,f,fe,R,Rt(),lt,k,A,ee,V,U,Ne,x,A._startClamp&&"_startClamp")||(u?-.001:0),Oi(Me)&&(Me=Me(A)),dn(Me)&&!Me.indexOf("+=")&&(~Me.indexOf(" ")?Me=(dn(Ce)?Ce.split(" ")[0]:"")+Me:(Ue=sh(Me.substr(2),fe),Me=dn(Ce)?Ce:(x?zt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,ct):ct)+Ue,si=f)),Me=Cg(Me,"end",A),$=Math.max(ct,Bg(Me||(si?"100% 0":Ne),si,fe,R,Rt()+Ue,ut,xt,A,ee,V,U,Ne,x,A._endClamp&&"_endClamp"))||-.001,Ue=0,Ve=on;Ve--;)We=le[Ve]||{},Tn=We.pin,Tn&&We.start-We._pinPush<=ct&&!x&&We.end>0&&(je=We.end-(A._startClamp?Math.max(0,We.start):We.start),(Tn===f&&We.start-We._pinPush<ct||Tn===Ai)&&isNaN(Ce)&&(Ue+=je*(1-We.progress)),Tn===u&&(Re+=je));if(ct+=Ue,$+=Ue,A._startClamp&&(A._startClamp+=Ue),A._endClamp&&!Ji&&(A._endClamp=$||-.001,$=Math.min($,jn(L,R))),Bt=$-ct||(ct-=.01)&&.001,Qe&&(_t=zt.utils.clamp(0,1,zt.utils.normalize(ct,$,tt))),A._pinPush=Re,lt&&Ue&&(je={},je[R.a]="+="+Ue,Ai&&(je[R.p]="-="+Rt()),zt.set([lt,ut],je)),u&&!(Ed&&A.end>=jn(L,R)))je=Cn(u),so=R===ei,an=Rt(),ge=parseFloat($t(R.a))+Re,!Ne&&$>1&&(E=(C?Ee.scrollingElement||pn:L).style,E={style:E,value:E["overflow"+R.a.toUpperCase()]},C&&Cn(be)["overflow"+R.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+R.a.toUpperCase()]="scroll")),Sd(u,re,je),F=eh(u),ri=ys(u,!0),Sa=U&&xs(L,so?Di:ei)(),p?(I=[p+R.os2,Bt+Re+li],I.t=re,Ve=p===ii?hh(u,R)+Bt+Re:0,Ve&&(I.push(R.d,Ve+li),re.style.flexBasis!=="auto"&&(re.style.flexBasis=Ve+li)),wo(I),Ai&&le.forEach(function(Y){Y.pin===Ai&&Y.vars.pinSpacing!==!1&&(Y._subPinOffset=!0)}),U&&Rt(tt)):(Ve=hh(u,R),Ve&&re.style.flexBasis!=="auto"&&(re.style.flexBasis=Ve+li)),U&&(oi={top:ri.top+(so?an-ct:Sa)+li,left:ri.left+(so?Sa:an-ct)+li,boxSizing:"border-box",position:"fixed"},oi[Dr]=oi["max"+Eo]=Math.ceil(ri.width)+li,oi[Nr]=oi["max"+Ud]=Math.ceil(ri.height)+li,oi[Rn]=oi[Rn+Ja]=oi[Rn+qa]=oi[Rn+Ka]=oi[Rn+Za]="0",oi[ii]=je[ii],oi[ii+Ja]=je[ii+Ja],oi[ii+qa]=je[ii+qa],oi[ii+Ka]=je[ii+Ka],oi[ii+Za]=je[ii+Za],se=Fy(Kt,oi,b),Ji&&Rt(0)),n?(Mc=n._initted,_d(1),n.render(n.duration(),!0,!0),Ht=$t(R.a)-ge+Bt+Re,q=Math.abs(Bt-Ht)>1,U&&q&&se.splice(se.length-2,2),n.render(0,!0,!0),Mc||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),_d(0)):Ht=Bt,E&&(E.value?E.style["overflow"+R.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+R.a));else if(f&&Rt()&&!x)for(ri=f.parentNode;ri&&ri!==be;)ri._pinOffset&&(ct-=ri._pinOffset,$-=ri._pinOffset),ri=ri.parentNode;ks&&ks.forEach(function(Y){return Y.revert(!1,!0)}),A.start=ct,A.end=$,Ut=at=Ji?tt:Rt(),!x&&!Ji&&!tr&&(Ut<tt&&Rt(tt),A.scroll.rec=0),A.revert(!1,!0),ot=Ui(),O&&(X=-1,O.restart(!0)),Ni=0,n&&N&&(n._initted||j)&&n.progress()!==j&&n.progress(j||0,!0).render(n.time(),!0,!0),(Qe||_t!==A.progress||x||g||n&&!n._initted)&&(n&&!N&&(n._initted||_t||n.vars.immediateRender!==!1)&&n.totalProgress(x&&ct<-.001&&!_t?zt.utils.normalize(ct,$,0):_t,!0),A.progress=Qe||(Ut-ct)/Bt===_t?0:_t),u&&p&&(re._pinOffset=Math.round(A.progress*Ht)),Z&&Z.invalidate(),isNaN(z)||(z-=zt.getProperty(k,R.p),Q-=zt.getProperty(xt,R.p),ih(k,R,z),ih(lt,R,z-(Lt||0)),ih(xt,R,Q),ih(ut,R,Q-(Lt||0))),Qe&&!Ji&&A.update(),h&&!Ji&&!Ot&&(Ot=!0,h(A),Ot=!1)}},A.getVelocity=function(){return(Rt()-at)/(Ui()-Ha)*1e3||0},A.endAnimation=function(){ka(A.callbackAnimation),n&&(Z?Z.progress(1):n.paused()?N||ka(n,A.direction<0,1):ka(n,n.reversed()))},A.labelToScroll=function(it){return n&&n.labels&&(ct||A.refresh()||ct)+n.labels[it]/n.duration()*Bt||0},A.getTrailing=function(it){var At=le.indexOf(A),nt=A.direction>0?le.slice(0,At).reverse():le.slice(At+1);return(dn(it)?nt.filter(function(Lt){return Lt.vars.preventOverlaps===it}):nt).filter(function(Lt){return A.direction>0?Lt.end<=ct:Lt.start>=$})},A.update=function(it,At,nt){if(!(x&&!nt&&!it)){var Lt=Ji===!0?tt:A.scroll(),fe=it?0:(Lt-ct)/Bt,ee=fe<0?0:fe>1?1:fe||0,Ne=A.progress,Qe,Ue,Re,Me,si,Ce,Ai,on;if(At&&(at=Ut,Ut=x?Rt():Lt,y&&(Et=St,St=n&&!N?n.totalProgress():ee)),m&&u&&!Ni&&!Jc&&Pn&&(!ee&&ct<Lt+(Lt-at)/(Ui()-Ha)*m?ee=1e-4:ee===1&&$>Lt+(Lt-at)/(Ui()-Ha)*m&&(ee=.9999)),ee!==Ne&&A.enabled){if(Qe=A.isActive=!!ee&&ee<1,Ue=!!Ne&&Ne<1,Ce=Qe!==Ue,si=Ce||!!ee!=!!Ne,A.direction=ee>Ne?1:-1,A.progress=ee,si&&!Ni&&(Re=ee&&!Ne?0:ee===1?1:Ne===1?2:3,N&&(Me=!Ce&&D[Re+1]!=="none"&&D[Re+1]||D[Re],on=n&&(Me==="complete"||Me==="reset"||Me in n))),P&&(Ce||on)&&(on||d||!n)&&(Oi(P)?P(A):A.getTrailing(P).forEach(function(an){return an.endAnimation()})),N||(Z&&!Ni&&!Jc?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",ee,n._tTime/n._tDur):(Z.vars.totalProgress=ee,Z.invalidate().restart())):n&&n.totalProgress(ee,!!(Ni&&(ot||it)))),u){if(it&&p&&(re.style[p+R.os2]=Yt),!U)yt(Va(ge+Ht*ee));else if(si){if(Ai=!it&&ee>Ne&&$+1>Lt&&Lt+1>=jn(L,R),b)if(!it&&(Qe||Ai)){var Ve=ys(u,!0),je=Lt-ct;zg(u,be,Ve.top+(R===ei?je:0)+li,Ve.left+(R===ei?0:je)+li)}else zg(u,re);wo(Qe||Ai?se:F),q&&ee<1&&Qe||yt(ge+(ee===1&&!Ai?Ht:0))}}y&&!gt.tween&&!Ni&&!Jc&&O.restart(!0),a&&(Ce||S&&ee&&(ee<1||!xd))&&Qa(a.targets).forEach(function(an){return an.classList[Qe||S?"add":"remove"](a.className)}),o&&!N&&!it&&o(A),si&&!Ni?(N&&(on&&(Me==="complete"?n.pause().totalProgress(1):Me==="reset"?n.restart(!0).pause():Me==="restart"?n.restart(!0):n[Me]()),o&&o(A)),(Ce||!xd)&&(c&&Ce&&vo(A,c),B[Re]&&vo(A,B[Re]),S&&(ee===1?A.kill(!1,1):B[Re]=0),Ce||(Re=ee===1?1:3,B[Re]&&vo(A,B[Re]))),M&&!Qe&&Math.abs(A.getVelocity())>(Wa(M)?M:2500)&&(ka(A.callbackAnimation),Z?Z.progress(1):ka(n,Me==="reverse"?1:!ee,1))):N&&o&&!Ni&&o(A)}if(ft){var ri=x?Lt/x.duration()*(x._caScrollDist||0):Lt;T(ri+(k._isFlipped?1:0)),ft(ri)}Mt&&Mt(-Lt/x.duration()*(x._caScrollDist||0))}},A.enable=function(it,At){A.enabled||(A.enabled=!0,gi(L,"resize",Xa),C||gi(L,"scroll",So),W&&gi(s,"refreshInit",W),it!==!1&&(A.progress=_t=0,Ut=at=X=Rt()),At!==!1&&A.refresh())},A.getTween=function(it){return it&&gt?gt.tween:Z},A.setPositions=function(it,At,nt,Lt){if(x){var fe=x.scrollTrigger,ee=x.duration(),Ne=fe.end-fe.start;it=fe.start+Ne*it/ee,At=fe.start+Ne*At/ee}A.refresh(!1,!1,{start:Pg(it,nt&&!!A._startClamp),end:Pg(At,nt&&!!A._endClamp)},Lt),A.update()},A.adjustPinSpacing=function(it){if(I&&it){var At=I.indexOf(R.d)+1;I[At]=parseFloat(I[At])+it+li,I[1]=parseFloat(I[1])+it+li,wo(I)}},A.disable=function(it,At){if(it!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,At||Z&&Z.pause(),tt=0,Nt&&(Nt.uncache=1),W&&mi(s,"refreshInit",W),O&&(O.pause(),gt.tween&&gt.tween.kill()&&(gt.tween=0)),!C)){for(var nt=le.length;nt--;)if(le[nt].scroller===L&&le[nt]!==A)return;mi(L,"resize",Xa),C||mi(L,"scroll",So)}},A.kill=function(it,At){A.disable(it,At),Z&&!At&&Z.kill(),l&&delete Ad[l];var nt=le.indexOf(A);nt>=0&&le.splice(nt,1),nt===Zi&&oh>0&&Zi--,nt=0,le.forEach(function(Lt){return Lt.scroller===A.scroller&&(nt=1)}),nt||Ji||tr||(A.scroll.rec=0),n&&(n.scrollTrigger=null,it&&n.revert({kill:!1}),At||n.kill()),lt&&[lt,ut,k,xt].forEach(function(Lt){return Lt.parentNode&&Lt.parentNode.removeChild(Lt)}),$a===A&&($a=0),u&&(Nt&&(Nt.uncache=1),nt=0,le.forEach(function(Lt){return Lt.pin===u&&nt++}),nt||(Nt.spacer=0)),i.onKill&&i.onKill(A)},le.push(A),A.enable(!1,!1),pt&&pt(A),n&&n.add&&!Bt){var rt=A.update;A.update=function(){A.update=rt,oe.cache++,ct||$||A.refresh()},zt.delayedCall(.01,A.update),Bt=.01,ct=$=0}else A.refresh();u&&Ny()},s.register=function(i){return Mo||(zt=i||Jg(),Zg()&&window.document&&s.enable(),Mo=Ga),Mo},s.defaults=function(i){if(i)for(var n in i)jc[n]=i[n];return jc},s.disable=function(i,n){Ga=0,le.forEach(function(o){return o[n?"kill":"disable"](i)}),mi(ce,"wheel",So),mi(Ee,"scroll",So),clearInterval(Zc),mi(Ee,"touchcancel",Qn),mi(be,"touchstart",Qn),$c(mi,Ee,"pointerdown,touchstart,mousedown",Ig),$c(mi,Ee,"pointerup,touchend,mouseup",Lg),ch.kill(),Kc(mi);for(var r=0;r<oe.length;r+=3)Qc(mi,oe[r],oe[r+1]),Qc(mi,oe[r],oe[r+2])},s.enable=function(){if(ce=window,Ee=document,pn=Ee.documentElement,be=Ee.body,zt){if(Qa=zt.utils.toArray,Ya=zt.utils.clamp,wd=zt.core.context||Qn,_d=zt.core.suppressOverwrites||Qn,Id=ce.history.scrollRestoration||"auto",Rd=ce.pageYOffset||0,zt.core.globals("ScrollTrigger",s),be){Ga=1,To=document.createElement("div"),To.style.height="100vh",To.style.position="absolute",r0(),Ay(),qe.register(zt),s.isTouch=qe.isTouch,js=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Td=qe.isTouch===1,gi(ce,"wheel",So),Pd=[ce,Ee,pn,be],zt.matchMedia?(s.matchMedia=function(h){var d=zt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},zt.addEventListener("matchMediaInit",function(){n0(),Fd()}),zt.addEventListener("matchMediaRevert",function(){return i0()}),zt.addEventListener("matchMedia",function(){Lr(0,1),Br("matchMedia")}),zt.matchMedia().add("(orientation: portrait)",function(){return yd(),yd})):console.warn("Requires GSAP 3.11.0 or later"),yd(),gi(Ee,"scroll",So);var i=be.hasAttribute("style"),n=be.style,r=n.borderTopStyle,o=zt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=ys(be),ei.m=Math.round(a.top+ei.sc())||0,Di.m=Math.round(a.left+Di.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(be.setAttribute("style",""),be.removeAttribute("style")),Zc=setInterval(Ug,250),zt.delayedCall(.5,function(){return Jc=0}),gi(Ee,"touchcancel",Qn),gi(be,"touchstart",Qn),$c(gi,Ee,"pointerdown,touchstart,mousedown",Ig),$c(gi,Ee,"pointerup,touchend,mouseup",Lg),bd=zt.utils.checkPrefix("transform"),ah.push(bd),Mo=Ui(),ch=zt.delayedCall(.2,Lr).pause(),bo=[Ee,"visibilitychange",function(){var h=ce.innerWidth,d=ce.innerHeight;Ee.hidden?(Ag=h,Rg=d):(Ag!==h||Rg!==d)&&Xa()},Ee,"DOMContentLoaded",Lr,ce,"load",Lr,ce,"resize",Xa],Kc(gi),le.forEach(function(h){return h.enable(0,1)}),l=0;l<oe.length;l+=3)Qc(mi,oe[l],oe[l+1]),Qc(mi,oe[l],oe[l+2])}else if(Ee){var c=function h(){s.enable(),Ee.removeEventListener("DOMContentLoaded",h)};Ee.addEventListener("DOMContentLoaded",c)}}},s.config=function(i){"limitCallbacks"in i&&(xd=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Zc)||(Zc=n)&&setInterval(Ug,n),"ignoreMobileResize"in i&&(Td=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Kc(mi)||Kc(gi,i.autoRefreshEvents||"none"),Xg=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=Yi(i),o=oe.indexOf(r),a=Or(r);~o&&oe.splice(o,a?6:2),n&&(a?Hn.unshift(ce,n,be,n,pn,n):Hn.unshift(r,n))},s.clearMatchMedia=function(i){le.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(dn(i)?Yi(i):i).getBoundingClientRect(),a=o[r?Dr:Nr]*n||0;return r?o.right-a>0&&o.left+a<ce.innerWidth:o.bottom-a>0&&o.top+a<ce.innerHeight},s.positionInViewport=function(i,n,r){dn(i)&&(i=Yi(i));var o=i.getBoundingClientRect(),a=o[r?Dr:Nr],l=n==null?a/2:n in uh?uh[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/ce.innerWidth:(o.top+l)/ce.innerHeight},s.killAll=function(i){if(le.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=Fr.killAll||[];Fr={},n.forEach(function(r){return r()})}},s})();ne.version="3.15.1";ne.saveStyles=function(s){return s?Qa(s).forEach(function(t){if(t&&t.style){var e=fn.indexOf(t);e>=0&&fn.splice(e,5),fn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),zt.core.getCache(t),wd())}}):fn};ne.revert=function(s,t){return Fd(!s,t)};ne.create=function(s,t){return new ne(s,t)};ne.refresh=function(s){return s?Xa(!0):(Mo||ne.register())&&Lr(!0)};ne.update=function(s){return++oe.cache&&Ss(s===!0?2:0)};ne.clearScrollMemory=s0;ne.maxScroll=function(s,t){return jn(s,t?Di:ei)};ne.getScrollFunc=function(s,t){return xs(Yi(s),t?Di:ei)};ne.getById=function(s){return Ad[s]};ne.getAll=function(){return le.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ne.isScrolling=function(){return!!Pn};ne.snapDirectional=Od;ne.addEventListener=function(s,t){var e=Fr[s]||(Fr[s]=[]);~e.indexOf(t)||e.push(t)};ne.removeEventListener=function(s,t){var e=Fr[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};ne.batch=function(s,t){var e=[],i={},n=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=zt.delayedCall(n,function(){h(d,f),d=[],f=[]}).pause();return function(p){d.length||u.restart(!0),d.push(p.trigger),f.push(p),r<=d.length&&u.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Oi(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Oi(r)&&(r=r(),gi(ne,"refresh",function(){return r=t.batchMax()})),Qa(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(ne.create(c))}),e};var Hg=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},Md=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===pn&&s(be,e)},nh={auto:1,scroll:1},zy=function(t){var e=t.event,i=t.target,n=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||zt.core.getCache(r),a=Ui(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==be&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(nh[(l=Cn(r)).overflowY]||nh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!Or(r)&&(nh[(l=Cn(r)).overflowY]||nh[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},a0=function(t,e,i,n){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&zy,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&gi(Ee,qe.eventTypes[0],Vg,!1,!0)},onDisable:function(){return mi(Ee,qe.eventTypes[0],Vg,!0)}})},ky=/(input|label|select|textarea)/i,Gg,Vg=function(t){var e=ky.test(t.target.tagName);(e||Gg)&&(t._gsapAllow=!0,Gg=e)},Hy=function(t){Ir(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Yi(t.target)||pn,h=zt.core.globals().ScrollSmoother,d=h&&h.get(),f=js&&(t.content&&Yi(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=xs(c,ei),p=xs(c,Di),g=1,m=(qe.isTouch&&ce.visualViewport?ce.visualViewport.scale*ce.visualViewport.width:ce.outerWidth)/ce.innerWidth,_=0,v=Oi(n)?function(){return n(a)}:function(){return n||2.8},S,y,b=a0(c,t.type,!0,r),w=function(){return y=!1},x=Qn,M=Qn,P=function(){l=jn(c,ei),M=Ya(js?1:0,l),i&&(x=Ya(0,jn(c,Di))),S=Ur},R=function(){f._gsap.y=Va(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(y){requestAnimationFrame(w);var K=Va(a.deltaY/2),V=M(u.v-K);if(f&&V!==u.v+u.offset){u.offset=V-u.v;var A=Va((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",f._gsap.y=A+"px",u.cacheID=oe.cache,Ss()}return!0}u.offset&&R(),y=!0},L,G,C,U,B=function(){P(),L.isActive()&&L.vars.scrollY>l&&(u()>l?L.progress(1)&&u(l):L.resetTo("scrollY",l))};return f&&zt.set(f,{y:"+=0"}),t.ignoreCheck=function(D){return js&&D.type==="touchmove"&&N(D)||g>1.05&&D.type!=="touchstart"||a.isGesturing||D.touches&&D.touches.length>1},t.onPress=function(){y=!1;var D=g;g=Va((ce.visualViewport&&ce.visualViewport.scale||1)/m),L.pause(),D!==g&&Md(c,g>1.01?!0:i?!1:"x"),G=p(),C=u(),P(),S=Ur},t.onRelease=t.onGestureStart=function(D,K){if(u.offset&&R(),!K)U.restart(!0);else{oe.cache++;var V=v(),A,W;i&&(A=p(),W=A+V*.05*-D.velocityX/.227,V*=Hg(p,A,W,jn(c,Di)),L.vars.scrollX=x(W)),A=u(),W=A+V*.05*-D.velocityY/.227,V*=Hg(u,A,W,jn(c,ei)),L.vars.scrollY=M(W),L.invalidate().duration(V).play(.01),(js&&L.vars.scrollY>=l||A>=l-1)&&zt.to({},{onUpdate:B,duration:V})}o&&o(D)},t.onWheel=function(){L._ts&&L.pause(),Ui()-_>1e3&&(S=0,_=Ui())},t.onChange=function(D,K,V,A,W){if(Ur!==S&&P(),K&&i&&p(x(A[2]===K?G+(D.startX-D.x):p()+K-A[1])),V){u.offset&&R();var ht=W[2]===V,wt=ht?C+D.startY-D.y:u()+V-W[1],X=M(wt);ht&&wt!==X&&(C+=X-wt),u(X)}(V||K)&&Ss()},t.onEnable=function(){Md(c,i?!1:"x"),ne.addEventListener("refresh",B),gi(ce,"resize",B),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),b.enable()},t.onDisable=function(){Md(c,!0),mi(ce,"resize",B),ne.removeEventListener("refresh",B),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=js,js&&!u()&&u(1),js&&zt.ticker.add(Qn),U=a._dc,L=zt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:o0(u,u(),function(){return L.pause()})},onUpdate:Ss,onComplete:U.vars.onComplete}),a};ne.sort=function(s){if(Oi(s))return le.sort(s);var t=ce.pageYOffset||0;return ne.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ce.innerHeight}),le.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ne.observe=function(s){return new qe(s)};ne.normalizeScroll=function(s){if(typeof s>"u")return qi;if(s===!0&&qi)return qi.enable();if(s===!1){qi&&qi.kill(),qi=s;return}var t=s instanceof qe?s:Hy(s);return qi&&qi.target===t.target&&qi.kill(),Or(t.target)&&(qi=t),t};ne.core={_getVelocityProp:qc,_inputObserver:a0,_scrollers:oe,_proxies:Hn,bridge:{ss:function(){Pn||Br("scrollStart"),Pn=Ui()},ref:function(){return Ni}}};Jg()&&zt.registerPlugin(ne);var tl,el,l0=typeof Symbol=="function"?Symbol():"_split",zd,Gy=()=>zd||Ro.register(window.gsap),c0=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,il=s=>s?typeof s=="string"?il(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...il(e)):t.push(e),t),[]):[s]:[],h0=s=>il(s).filter(t=>t&&t.nodeType===1),dh=[],Bd=function(){},Vy={add:s=>s()},Wy=/\s+/g,u0=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),ph={left:0,top:0,width:0,height:0},Xy=(s,t)=>{for(;++t<s.length&&s[t]===ph;);return s[t]||ph},f0=({element:s,html:t,ariaL:e,ariaH:i})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),i?s.setAttribute("aria-hidden",i):s.removeAttribute("aria-hidden")},d0=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||dh),i=s.length,n,r,o,a;if(e.size)for(;--i>-1;){r=s[i];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(n=0,a=r;o.startsWith(a+=s[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){s[i]=o,s.splice(i+1,n);break}}}}return s},p0=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),Ao=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),kd=(s,t,e)=>{let i=t[s+"sClass"]||"",{tag:n="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let d=document.createElement(n),f=e.length+1;return i&&(d.className=i+(l?" "+i+f:"")),o&&d.style.setProperty("--"+s,f+""),r!=="none"&&d.setAttribute("aria-hidden","true"),n!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(i=i.replace("++","")),c.collection=e,c},Yy=(s,t,e,i)=>{let n=kd("line",e,i),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},m0=(s,t,e,i,n,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),f=0,{wordDelimiter:u,reduceWhiteSpace:p=!0,prepareText:g}=t,m=s.getBoundingClientRect(),_=m,v=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",S=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,b=e.collection,w,x,M,P,R,N,L,G,C,U,B,D,K,V,A,W,ht,wt;for(typeof u=="object"?(M=u.delimiter||u,x=u.replaceWith||""):x=u===""?"":u||" ",w=x!==" ";f<d.length;f++)if(P=d[f],P.nodeType===3){for(A=P.textContent||"",p?A=A.replace(Wy," "):v&&(A=A.replace(/\n/g,x+`
`)),g&&(A=g(A,s)),P.textContent=A,R=x||M?A.split(M||x):A.match(a)||dh,ht=R[R.length-1],G=w?ht.slice(-1)===" ":!ht,ht||R.pop(),_=m,L=w?R[0].charAt(0)===" ":!R[0],L&&Ao(" ",s,P),R[0]||R.shift(),d0(R,l),r&&c||(P.textContent=""),C=1;C<=R.length;C++)if(W=R[C-1],!p&&v&&W.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),Ao(document.createElement("br"),s,P),W=W.slice(1)),!p&&W==="")Ao(x,s,P);else if(W===" ")s.insertBefore(document.createTextNode(" "),P);else{if(w&&W.charAt(0)===" "&&Ao(" ",s,P),y&&C===1&&!L&&b.indexOf(y.parentNode)>-1?(N=b[b.length-1],N.appendChild(document.createTextNode(i?"":W))):(N=e(i?"":W),Ao(N,s,P),y&&C===1&&!L&&N.insertBefore(y,N.firstChild)),i){if(B=c0?d0([...c0.segment(W)].map(X=>X.segment),l):W.match(a)||dh,l){let X=W.match(l);X&&X.some(ot=>B.indexOf(ot)<0)&&(B=W.match(a)||dh)}for(wt=0;wt<B.length;wt++)N.appendChild(B[wt]===" "?document.createTextNode(" "):i(B[wt]))}if(r&&c){if(A=P.textContent=A.substring(W.length+1,A.length),U=N.getBoundingClientRect(),U.top>_.top&&(S?U.left>=_.left:U.left<=_.left)){for(D=s.cloneNode(),K=s.childNodes[0];K&&K!==N;)V=K,K=K.nextSibling,D.appendChild(V);s.parentNode.insertBefore(D,s),n&&p0(D)}_=U}(C<R.length||G)&&Ao(C>=R.length?" ":w&&W.slice(-1)===" "?" "+x:x,s,P)}s.removeChild(P),y=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(b.indexOf(P.previousSibling)>-1&&b[b.length-1].appendChild(P),y=P):(m0(P,t,e,i,n,r,o,a,l,!0),y=0),n&&p0(P))},g0=class _0{constructor(t,e){this.isSplit=!1,Gy(),this.elements=h0(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[l0])==null||o._data.orig.filter(({element:a})=>a===r).forEach(f0)),r[l0]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let r=i.length,o;for(;r--;){o=i[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},Bd(this),this.split(e)}split(t){return(this._ctx||Vy).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,u=d&&!f&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=p?new RegExp(p.source+"|"+u0.source,"gu"):u0,m=!!t.ignore&&h0(t.ignore),{orig:_,animTime:v,obs:S}=this._data,y;(d||f||h)&&(this.elements.forEach((b,w)=>{_[w]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},i==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):i==="hidden"&&b.setAttribute("aria-hidden","true");let x=[],M=[],P=[],R=d?kd("char",t,x):null,N=kd("word",t,M),L,G,C,U;if(m0(b,t,N,R,u,n&&(h||u),m,g,p,!1),h){let B=il(b.childNodes),D=Yy(b,B,t,P),K,V=[],A=0,W=window.getComputedStyle(b).direction==="rtl",ht=B.map(ot=>ot.nodeType===1?ot.getBoundingClientRect():ph),wt=ph,X;for(L=0;L<B.length;L++)K=B[L],K.nodeType===1&&(K.nodeName==="BR"?((!L||B[L-1].nodeName!=="BR")&&(V.push(K),D(A,L+1)),A=L+1,wt=Xy(ht,L)):(X=ht[L],L&&X.top>wt.top&&(W?X.left+X.width>wt.left+1:X.left<wt.left+wt.width-1)&&(D(A,L),A=L),wt=X));A<L&&D(A,L),V.forEach(ot=>{var _t;return(_t=ot.parentNode)==null?void 0:_t.removeChild(ot)})}if(!f){for(L=0;L<M.length;L++)if(G=M[L],d||!G.nextSibling||G.nextSibling.nodeType!==3)if(r&&!h){for(C=document.createElement("span"),C.style.whiteSpace="nowrap";G.firstChild;)C.appendChild(G.firstChild);G.replaceWith(C)}else G.replaceWith(...G.childNodes);else U=G.nextSibling,U&&U.nodeType===3&&(U.textContent=(G.textContent||"")+(U.textContent||""),G.remove());M.length=0,b.normalize()}this.lines.push(...P),this.words.push(...M),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let w=b.cloneNode();return b.replaceWith(w),w.appendChild(b),b.className&&(w.className=b.className.trim().split(" ").map(x=>x+"-mask").join(" ")),w.style.overflow="clip",w.style.verticalAlign="top",w}))),this.isSplit=!0,el&&h&&a&&el.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((b,w)=>{_[w].width=b.offsetWidth,S&&S.observe(b)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),el?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(f0),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new _0(t,e)}static register(t){tl=tl||t||window.gsap,tl&&(il=tl.utils.toArray,Bd=tl.core.context||Bd),!zd&&window.innerWidth>0&&(el=document.fonts,zd=!0)}};g0.version="3.15.1";var Ro=g0;var x0="1.3.29";function S0(s,t,e){return Math.max(s,Math.min(t,e))}function qy(s,t,e){return(1-e)*s+e*t}function Zy(s,t,e,i){return qy(s,t,1-Math.exp(-e*i))}function Jy(s,t){return(s%t+t)%t}var Ky=.5,$y=class{constructor(){Ft(this,"isRunning",!1);Ft(this,"value",0);Ft(this,"from",0);Ft(this,"to",0);Ft(this,"currentTime",0);Ft(this,"lerp");Ft(this,"duration");Ft(this,"easing");Ft(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=S0(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Zy(this.value,this.to,this.lerp*60,s),Math.abs(this.to-this.value)<Ky&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Qy(s,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,i)},t)}}var jy=class{constructor(s,t,{autoResize:e=!0,debounce:i=250}={}){Ft(this,"wrapper");Ft(this,"content");Ft(this,"width",0);Ft(this,"height",0);Ft(this,"scrollHeight",0);Ft(this,"scrollWidth",0);Ft(this,"debouncedResize");Ft(this,"wrapperResizeObserver");Ft(this,"contentResizeObserver");Ft(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ft(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ft(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=Qy(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},M0=class{constructor(){Ft(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},tS=100/6,er={passive:!1};function v0(s,t){return s===1?tS:s===2?t:1}var eS=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Ft(this,"element");Ft(this,"options");Ft(this,"touchStart",{x:0,y:0});Ft(this,"lastDelta",{x:0,y:0});Ft(this,"window",{width:0,height:0});Ft(this,"emitter",new M0);Ft(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Ft(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});Ft(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Ft(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:i}=s,n=v0(i,this.window.width),r=v0(i,this.window.height);t*=n,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Ft(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,er),this.element.addEventListener("touchstart",this.onTouchStart,er),this.element.addEventListener("touchmove",this.onTouchMove,er),this.element.addEventListener("touchend",this.onTouchEnd,er)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,er),this.element.removeEventListener("touchstart",this.onTouchStart,er),this.element.removeEventListener("touchmove",this.onTouchMove,er),this.element.removeEventListener("touchend",this.onTouchEnd,er)}},y0=s=>Math.min(1,1.001-2**(-10*s)),nl=new WeakMap,b0=class T0{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:i=t,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:a=1.7,duration:l,easing:c,lerp:h=.1,infinite:d=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:m=!0,prevent:_,virtualScroll:v,overscroll:S=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:w=!1,allowNestedScroll:x=!1,__experimental__naiveDimensions:M=!1,naiveDimensions:P=M,stopInertiaOnNavigate:R=!1,respectReducedMotion:N=!0}={}){Ft(this,"_isScrolling",!1);Ft(this,"_isStopped",!1);Ft(this,"_isLocked",!1);Ft(this,"_preventNextNativeScrollEvent",!1);Ft(this,"_resetVelocityTimeout",null);Ft(this,"_rafId",null);Ft(this,"_isDraggingSelection",!1);Ft(this,"nestedInstances",new Set);Ft(this,"_nestedSweepFrame",0);Ft(this,"_isAdopted",!1);Ft(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ft(this,"isTouching");Ft(this,"isIos");Ft(this,"time",0);Ft(this,"userData",{});Ft(this,"lastVelocity",0);Ft(this,"velocity",0);Ft(this,"direction",0);Ft(this,"options");Ft(this,"targetScroll");Ft(this,"animatedScroll");Ft(this,"animate",new $y);Ft(this,"emitter",new M0);Ft(this,"dimensions");Ft(this,"virtualScroll");Ft(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Ft(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ft(this,"onTransitionEnd",t=>{t.propertyName?.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Ft(this,"onClick",t=>{let e=t.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),i=new URL(window.location.href);if(this.options.anchors){let n=e.find(r=>i.host===r.host&&i.pathname===r.pathname&&r.hash);if(n){let r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>i.host===n.host&&i.pathname!==n.pathname)){this.reset();return}});Ft(this,"onPointerDown",t=>{t.button===1&&this.reset()});Ft(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;let{deltaX:e,deltaY:i,event:n}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let a=e===0&&i===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&e===0,c=this.options.allowNestedScroll==="smooth";if(a||l&&!c)return;let h=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical";if(this._isAdopted&&h!==(this.isHorizontal?"horizontal":"vertical"))return;let d=n.composedPath();d=d.slice(0,d.indexOf(this.rootElement));let f=this.options.prevent,u=v=>typeof f=="function"&&f?.(v)||v.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&v.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&v.hasAttribute?.("data-lenis-prevent-horizontal")||r&&v.hasAttribute?.("data-lenis-prevent-touch")||o&&v.hasAttribute?.("data-lenis-prevent-wheel"),p=d.find(v=>v instanceof HTMLElement&&(u(v)||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:i})));if(p){c&&(o&&this.options.smoothWheel||r&&this.options.syncTouch)&&!d.slice(d.indexOf(p)).some(v=>v instanceof HTMLElement&&u(v))&&this.isNestedAdoptable(p)&&this.adoptNestedScroller(p,t);return}if(l)return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),this.settleNativeScrollLater(),n.lenisStopPropagation=!0;return}let g=i;this.options.gestureOrientation==="both"?g=Math.abs(i)>Math.abs(e)?i:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&(this._isAdopted?g:i)>0||this.animatedScroll===this.limit&&(this._isAdopted?g:i)<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let m=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(g=Math.sign(g)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+g,{programmatic:!1,...m?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ft(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.settleNativeScrollLater()}});Ft(this,"raf",t=>{let e=t-(this.time||t);if(this.time=t,this.animate.advance(e*.001),this.nestedInstances.size>0){for(let i of this.nestedInstances)i.raf(t);++this._nestedSweepFrame>=60&&(this._nestedSweepFrame=0,this.sweepNestedInstances())}this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=x0,window.lenis||(window.lenis={}),window.lenis.version=x0,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof l=="number"&&typeof c!="function"?c=y0:typeof c=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:t,content:e,eventsTarget:i,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:a,duration:l,easing:c,lerp:h,infinite:d,gestureOrientation:u,orientation:f,touchMultiplier:p,wheelMultiplier:g,autoResize:m,prevent:_,virtualScroll:v,overscroll:S,autoRaf:y,anchors:b,autoToggle:w,allowNestedScroll:x,naiveDimensions:P,stopInertiaOnNavigate:R,respectReducedMotion:N},this.dimensions=new jy(t,e,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new eS(i,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),nl.set(this.rootElement,this),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}static get(t){return nl.get(t)}destroy(){for(let t of this.nestedInstances)t.destroy();this.nestedInstances.clear(),nl.get(this.rootElement)===this&&nl.delete(this.rootElement),this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){let t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let i=t.targetTouches[0]??t.changedTouches[0];if(!i)return!1;let n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;let r=n[0],o=n[n.length-1],a=40,l=Math.hypot(i.clientX-r.left,i.clientY-r.top)<=a,c=Math.hypot(i.clientX-o.right,i.clientY-o.bottom)<=a;return l||c}resize(){this.sweepNestedInstances(),this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}settleNativeScrollLater(){this._resetVelocityTimeout!==null&&clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=setTimeout(()=>{this._resetVelocityTimeout=null,this.isScrolling!=="smooth"&&(this.isScrolling===!1&&this.velocity===0||(this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()))},400)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:i=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:l=r?this.options.easing:void 0,onStart:c,onComplete:h,force:d=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?i=!0:(o=1,a=void 0,l=void 0)),(this.isStopped||this.isLocked)&&!d)return;let u=t,p=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(g=u),g){if(this.options.wrapper!==window){let b=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?b.left:b.top}let m=g.getBoundingClientRect(),_=getComputedStyle(g),v=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),S=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?m.left:m.top)+this.animatedScroll-(Number.isNaN(v)?0:v)-(Number.isNaN(y)?0:y)}}if(typeof u=="number"){if(u+=p,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;let g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=S0(0,u,this.limit);if(u===this.targetScroll){c?.(this),h?.(this);return}if(this.userData=f??{},i){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof a=="number"&&typeof l!="function"?l=y0:typeof l=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,u,{duration:a,easing:l,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c?.(this)},onUpdate:(g,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),m||this.emit(),m&&(this.reset(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}sweepNestedInstances(){for(let t of this.nestedInstances)t.rootElement.isConnected||(this.nestedInstances.delete(t),t.destroy())}isNestedAdoptable(t){return!(nl.has(t)||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t.isContentEditable)}adoptNestedScroller(t,e){let i=getComputedStyle(t),n=["auto","overlay","scroll"].includes(i.overflowX)&&t.scrollWidth>t.clientWidth,r=["auto","overlay","scroll"].includes(i.overflowY)&&t.scrollHeight>t.clientHeight,o=n&&!r?"horizontal":"vertical",a=window.lenis?.horizontal,l=new T0({wrapper:t,content:t.firstElementChild??t,eventsTarget:t,orientation:o,gestureOrientation:o,smoothWheel:this.options.smoothWheel,syncTouch:this.options.syncTouch,syncTouchLerp:this.options.syncTouchLerp,touchInertiaExponent:this.options.touchInertiaExponent,duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,touchMultiplier:this.options.touchMultiplier,wheelMultiplier:this.options.wheelMultiplier,autoResize:this.options.autoResize,prevent:this.options.prevent,overscroll:this.options.overscroll,allowNestedScroll:this.options.allowNestedScroll,naiveDimensions:this.options.naiveDimensions,respectReducedMotion:this.options.respectReducedMotion,infinite:!1,anchors:!1,autoToggle:!1,stopInertiaOnNavigate:!1,autoRaf:!1});l._isAdopted=!0,window.lenis&&(window.lenis.horizontal=a),this.nestedInstances.add(l),e.event.type.includes("touch")&&(l.virtualScroll.touchStart.x=this.virtualScroll.touchStart.x,l.virtualScroll.touchStart.y=this.virtualScroll.touchStart.y,l.virtualScroll.lastDelta.x=this.virtualScroll.lastDelta.x,l.virtualScroll.lastDelta.y=this.virtualScroll.lastDelta.y),l.onVirtualScroll(e)}hasNestedScroll(t,{deltaX:e,deltaY:i}){let n=Date.now();t._lenis||(t._lenis={});let r=t._lenis,o,a,l,c,h,d,f,u,p,g;if(n-(r.time??0)>2e3){r.time=Date.now();let x=window.getComputedStyle(t);if(r.computedStyle=x,o=["auto","overlay","scroll"].includes(x.overflowX),a=["auto","overlay","scroll"].includes(x.overflowY),h=["auto"].includes(x.overscrollBehaviorX),d=["auto"].includes(x.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=a,!(o||a))return!1;f=t.scrollWidth,u=t.scrollHeight,p=t.clientWidth,g=t.clientHeight,l=f>p,c=u>g,r.isScrollableX=l,r.isScrollableY=c,r.scrollWidth=f,r.scrollHeight=u,r.clientWidth=p,r.clientHeight=g,r.hasOverscrollBehaviorX=h,r.hasOverscrollBehaviorY=d}else l=r.isScrollableX,c=r.isScrollableY,o=r.hasOverflowX,a=r.hasOverflowY,f=r.scrollWidth,u=r.scrollHeight,p=r.clientWidth,g=r.clientHeight,h=r.hasOverscrollBehaviorX,d=r.hasOverscrollBehaviorY;if(!(o&&l||a&&c))return!1;let m=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical",_,v,S,y,b,w;if(m==="horizontal")_=Math.round(t.scrollLeft),v=f-p,S=e,y=o,b=l,w=h;else if(m==="vertical")_=Math.round(t.scrollTop),v=u-g,S=i,y=a,b=c,w=d;else return!1;return!w&&(_>=v||_<=0)?!0:(S>0?_<v:_>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Jy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(let t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};var o_=0,Mp=1,a_=2;var $l=1,l_=2,oa=3,pr=0,wi=1,Nn=2,Ds=0,aa=1,mr=2,bp=3,Tp=4,c_=5;var $r=100,h_=101,u_=102,f_=103,d_=104,p_=200,m_=201,g_=202,__=203,wp=204,Ep=205,x_=206,v_=207,y_=208,S_=209,M_=210,b_=211,T_=212,w_=213,E_=214,Vh=0,Wh=1,Xh=2,Xo=3,Yh=4,qh=5,Zh=6,Jh=7,wu=0,A_=1,R_=2,as=0,Ql=1,jl=2,tc=3,ec=4,ic=5,nc=6,Qr=7;var Ap=300,jr=301,la=302,Eu=303,Au=304,Kh=1e3,es=1001,$h=1002,xi=1003,C_=1004;var sc=1005;var ci=1006,Ru=1007;var Ns=1008;var rn=1009,Rp=1010,Cp=1011,ca=1012,Cu=1013,Yn=1014,Un=1015,ui=1016,Pu=1017,Iu=1018,to=1020,Pp=35902,Ip=35899,Lp=1021,Dp=1022,qn=1023,Rs=1026,Us=1027,Lu=1028,Du=1029,gr=1030,Nu=1031;var Uu=1033,rc=33776,oc=33777,ac=33778,lc=33779,Ou=35840,Fu=35841,Bu=35842,zu=35843,ku=36196,Hu=37492,Gu=37496,Vu=37488,Wu=37489,cc=37490,Xu=37491,Yu=37808,qu=37809,Zu=37810,Ju=37811,Ku=37812,$u=37813,Qu=37814,ju=37815,tf=37816,ef=37817,nf=37818,sf=37819,rf=37820,of=37821,af=36492,lf=36494,cf=36495,hf=36283,uf=36284,hc=36285,ff=36286;var gl=2300,Qh=2301,kh=2302,up=2303,fp=2400,dp=2401,pp=2402;var P_=3200;var uc=0,I_=1,Os="",bi="srgb",_l="srgb-linear",xl="linear",ve="srgb";var Hh=7680;var L_=519,D_=512,N_=513,U_=514,Np=515,O_=516,F_=517,Up=518,Op=519,B_=35044;var Fp="300 es",Ln=2e3,Yo=2001;function iS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function nS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function z_(){let s=qo("canvas");return s.style.display="block",s}var w0={},Zo=null;function Bp(...s){let t="THREE."+s.shift();Zo?Zo("log",t,...s):console.log(t,...s)}function k_(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Zt(...s){s=k_(s);let t="THREE."+s.shift();if(Zo)Zo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Qt(...s){s=k_(s);let t="THREE."+s.shift();if(Zo)Zo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Vr(...s){let t=s.join(" ");t in w0||(w0[t]=!0,Zt(...s))}function H_(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var G_={[Vh]:Vh,[Xh]:Zh,[Yh]:Yh,[Xo]:qh,[Wh]:Wh,[Zh]:Xh,[Jh]:Jh,[qh]:Xo},ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],E0=1234567,fl=Math.PI/180,Jo=180/Math.PI;function eo(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fi[s&255]+Fi[s>>8&255]+Fi[s>>16&255]+Fi[s>>24&255]+"-"+Fi[t&255]+Fi[t>>8&255]+"-"+Fi[t>>16&15|64]+Fi[t>>24&255]+"-"+Fi[e&63|128]+Fi[e>>8&255]+"-"+Fi[e>>16&255]+Fi[e>>24&255]+Fi[i&255]+Fi[i>>8&255]+Fi[i>>16&255]+Fi[i>>24&255]).toLowerCase()}function he(s,t,e){return Math.max(t,Math.min(e,s))}function zp(s,t){return(s%t+t)%t}function sS(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function rS(s,t,e){return s!==t?(e-s)/(t-s):0}function dl(s,t,e){return(1-e)*s+e*t}function oS(s,t,e,i){return dl(s,t,1-Math.exp(-e*i))}function aS(s,t=1){return t-Math.abs(zp(s,t*2)-t)}function lS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function cS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function hS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function uS(s,t){return s+Math.random()*(t-s)}function fS(s){return s*(.5-Math.random())}function dS(s){s!==void 0&&(E0=s);let t=E0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pS(s){return s*fl}function mS(s){return s*Jo}function gS(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function _S(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xS(s,t,e,i,n){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),u=r((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Hp(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function V_(s,t){if(t.constructor===Float32Array)return s;let e=Hp(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function W_(s,t){if(t.constructor===Float32Array)return s;let e=Hp(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Gp={DEG2RAD:fl,RAD2DEG:Jo,generateUUID:eo,clamp:he,euclideanModulo:zp,mapLinear:sS,inverseLerp:rS,lerp:dl,damp:oS,pingpong:aS,smoothstep:lS,smootherstep:cS,randInt:hS,randFloat:uS,randFloatSpread:fS,seededRandom:dS,degToRad:pS,radToDeg:mS,isPowerOfTwo:gS,ceilPowerOfTwo:_S,floorPowerOfTwo:kp,setQuaternionFromProperEuler:xS,normalize:W_,denormalize:V_},Zp=class Zp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;var mt=Zp,xn=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],f=r[o+0],u=r[o+1],p=r[o+2],g=r[o+3];if(d!==g||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*g;m<0&&(f=-f,u=-u,p=-p,g=-g,m=-m);let _=1-a;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);_=Math.sin(_*v)/S,a=Math.sin(a*v)/S,l=l*_+f*a,c=c*_+u*a,h=h*_+p*a,d=d*_+g*a}else{l=l*_+f*a,c=c*_+u*a,h=h*_+p*a,d=d*_+g*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),f=l(i/2),u=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-n)*u}else if(i>a&&i>d){let u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(n+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(n+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-a);this._w=(o-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Jp=class Jp{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(A0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(A0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hd.copy(this).projectOnVector(t),this.sub(Hd)}reflect(t){return this.sub(Hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jp.prototype.isVector3=!0;var H=Jp,Hd=new H,A0=new xn,Kp=class Kp{constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],p=i[8],g=n[0],m=n[3],_=n[6],v=n[1],S=n[4],y=n[7],b=n[2],w=n[5],x=n[8];return r[0]=o*g+a*v+l*b,r[3]=o*m+a*S+l*w,r[6]=o*_+a*y+l*x,r[1]=c*g+h*v+d*b,r[4]=c*m+h*S+d*w,r[7]=c*_+h*y+d*x,r[2]=f*g+u*v+p*b,r[5]=f*m+u*S+p*w,r[8]=f*_+u*y+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+i*f+n*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=d*g,t[1]=(n*c-h*i)*g,t[2]=(a*i-n*o)*g,t[3]=f*g,t[4]=(h*e-n*l)*g,t[5]=(n*r-a*e)*g,t[6]=u*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gd.makeScale(t,e)),this}rotate(t){return Vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gd.makeRotation(-t)),this}translate(t,e){return Vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Kp.prototype.isMatrix3=!0;var te=Kp,Gd=new te,R0=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){let s={enabled:!0,workingColorSpace:_l,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(n.r=As(n.r),n.g=As(n.g),n.b=As(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(n.r=Wo(n.r),n.g=Wo(n.g),n.b=Wo(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Os?xl:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[_l]:{primaries:t,whitePoint:i,transfer:xl,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),s}var ue=vS();function As(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Co,jh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Co===void 0&&(Co=qo("canvas")),Co.width=t.width,Co.height=t.height;let n=Co.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Co}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(As(e[i]/255)*255):e[i]=As(e[i]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yS=0,Ko=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=eo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Vd(n[o].image)):r.push(Vd(n[o]))}else r=Vd(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var SS=0,Wd=new H,Ti=class s extends ns{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=es,n=es,r=ci,o=Ns,a=qn,l=rn,c=s.DEFAULT_ANISOTROPY,h=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=eo(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ti.DEFAULT_IMAGE=null;Ti.DEFAULT_MAPPING=Ap;Ti.DEFAULT_ANISOTROPY=1;var $p=class $p{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(u+1)/2,b=(_+1)/2,w=(h+f)/4,x=(d+g)/4,M=(p+m)/4;return S>y&&S>b?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=w/i,r=x/i):y>b?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=w/n,r=M/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=x/r,n=M/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-g)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$p.prototype.isVector4=!0;var Fe=$p,tu=class extends ns{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ti({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ko(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends tu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vl=class extends Ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xi,this.minFilter=xi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eu=class extends Ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xi,this.minFilter=xi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Tu=class Tu{constructor(t,e,i,n,r,o,a,l,c,h,d,f,u,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,f,u,p,g,m)}set(t,e,i,n,r,o,a,l,c,h,d,f,u,p,g,m){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=n,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=f,_[3]=u,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tu().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Po.setFromMatrixColumn(t,0).length(),r=1/Po.setFromMatrixColumn(t,1).length(),o=1/Po.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,p=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,p=c*h,g=c*d;e[0]=f+g*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,p=c*h,g=c*d;e[0]=f-g*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,p=a*h,g=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+g,e[1]=l*d,e[5]=g*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-g*d}else if(t.order==="XZY"){let f=o*l,u=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+g,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MS,t,bS)}lookAt(t,e,i){let n=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),ir.crossVectors(i,mn),ir.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),ir.crossVectors(i,mn)),ir.normalize(),mh.crossVectors(mn,ir),n[0]=ir.x,n[4]=mh.x,n[8]=mn.x,n[1]=ir.y,n[5]=mh.y,n[9]=mn.y,n[2]=ir.z,n[6]=mh.z,n[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],p=i[2],g=i[6],m=i[10],_=i[14],v=i[3],S=i[7],y=i[11],b=i[15],w=n[0],x=n[4],M=n[8],P=n[12],R=n[1],N=n[5],L=n[9],G=n[13],C=n[2],U=n[6],B=n[10],D=n[14],K=n[3],V=n[7],A=n[11],W=n[15];return r[0]=o*w+a*R+l*C+c*K,r[4]=o*x+a*N+l*U+c*V,r[8]=o*M+a*L+l*B+c*A,r[12]=o*P+a*G+l*D+c*W,r[1]=h*w+d*R+f*C+u*K,r[5]=h*x+d*N+f*U+u*V,r[9]=h*M+d*L+f*B+u*A,r[13]=h*P+d*G+f*D+u*W,r[2]=p*w+g*R+m*C+_*K,r[6]=p*x+g*N+m*U+_*V,r[10]=p*M+g*L+m*B+_*A,r[14]=p*P+g*G+m*D+_*W,r[3]=v*w+S*R+y*C+b*K,r[7]=v*x+S*N+y*U+b*V,r[11]=v*M+S*L+y*B+b*A,r[15]=v*P+S*G+y*D+b*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],g=t[7],m=t[11],_=t[15],v=l*u-c*f,S=a*u-c*d,y=a*f-l*d,b=o*u-c*h,w=o*f-l*h,x=o*d-a*h;return e*(g*v-m*S+_*y)-i*(p*v-m*b+_*w)+n*(p*S-g*b+_*x)-r*(p*y-g*w+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],g=t[13],m=t[14],_=t[15],v=e*a-i*o,S=e*l-n*o,y=e*c-r*o,b=i*l-n*a,w=i*c-r*a,x=n*c-r*l,M=h*g-d*p,P=h*m-f*p,R=h*_-u*p,N=d*m-f*g,L=d*_-u*g,G=f*_-u*m,C=v*G-S*L+y*N+b*R-w*P+x*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=(a*G-l*L+c*N)*U,t[1]=(n*L-i*G-r*N)*U,t[2]=(g*x-m*w+_*b)*U,t[3]=(f*w-d*x-u*b)*U,t[4]=(l*R-o*G-c*P)*U,t[5]=(e*G-n*R+r*P)*U,t[6]=(m*y-p*x-_*S)*U,t[7]=(h*x-f*y+u*S)*U,t[8]=(o*L-a*R+c*M)*U,t[9]=(i*R-e*L-r*M)*U,t[10]=(p*w-g*y+_*v)*U,t[11]=(d*y-h*w-u*v)*U,t[12]=(a*P-o*N-l*M)*U,t[13]=(e*N-i*P+n*M)*U,t[14]=(g*S-p*b-m*v)*U,t[15]=(h*b-d*S+f*v)*U,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,g=o*h,m=o*d,_=a*d,v=l*c,S=l*h,y=l*d,b=i.x,w=i.y,x=i.z;return n[0]=(1-(g+_))*b,n[1]=(u+y)*b,n[2]=(p-S)*b,n[3]=0,n[4]=(u-y)*w,n[5]=(1-(f+_))*w,n[6]=(m+v)*w,n[7]=0,n[8]=(p+S)*x,n[9]=(m-v)*x,n[10]=(1-(f+g))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Po.set(n[0],n[1],n[2]).length(),a=Po.set(n[4],n[5],n[6]).length(),l=Po.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,h=1/a,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=Ln,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Ln)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Ln,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),f=-(e+t)/(e-t),u=-(i+n)/(i-n),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Ln)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Yo)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Tu.prototype.isMatrix4=!0;var Se=Tu,Po=new H,Gn=new Se,MS=new H(0,0,0),bS=new H(1,1,1),ir=new H,mh=new H,mn=new H,P0=new Se,I0=new xn,Dn=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return P0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(P0,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return I0.setFromEuler(this),this.setFromQuaternion(I0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var yl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},TS=0,L0=new H,Io=new xn,Ms=new Se,gh=new H,sl=new H,wS=new H,ES=new xn,D0=new H(1,0,0),N0=new H(0,1,0),U0=new H(0,0,1),O0={type:"added"},AS={type:"removed"},Lo={type:"childadded",child:null},Xd={type:"childremoved",child:null},$e=class s extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new Dn,i=new xn,n=new H(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Se},normalMatrix:{value:new te}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Io.setFromAxisAngle(t,e),this.quaternion.multiply(Io),this}rotateOnWorldAxis(t,e){return Io.setFromAxisAngle(t,e),this.quaternion.premultiply(Io),this}rotateX(t){return this.rotateOnAxis(D0,t)}rotateY(t){return this.rotateOnAxis(N0,t)}rotateZ(t){return this.rotateOnAxis(U0,t)}translateOnAxis(t,e){return L0.copy(t).applyQuaternion(this.quaternion),this.position.add(L0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(D0,t)}translateY(t){return this.translateOnAxis(N0,t)}translateZ(t){return this.translateOnAxis(U0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gh.copy(t):gh.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(sl,gh,this.up):Ms.lookAt(gh,sl,this.up),this.quaternion.setFromRotationMatrix(Ms),n&&(Ms.extractRotation(n.matrixWorld),Io.setFromRotationMatrix(Ms),this.quaternion.premultiply(Io.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(O0),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(AS),Xd.child=t,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(O0),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,wS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new H(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},RS={type:"move"},$o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,i),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},_h={h:0,s:0,l:0};function Yd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ue.workingColorSpace){if(t=zp(t,1),e=he(e,0,1),i=he(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yd(o,r,t+1/3),this.g=Yd(o,r,t),this.b=Yd(o,r,t-1/3)}return ue.colorSpaceToWorking(this,n),this}setStyle(t,e=bi){function i(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bi){let i=X_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=Wo(t.r),this.g=Wo(t.g),this.b=Wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bi){return ue.workingToColorSpace(Bi.copy(this),t),Math.round(he(Bi.r*255,0,255))*65536+Math.round(he(Bi.g*255,0,255))*256+Math.round(he(Bi.b*255,0,255))}getHexString(t=bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Bi.copy(this),e);let i=Bi.r,n=Bi.g,r=Bi.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Bi.copy(this),e),t.r=Bi.r,t.g=Bi.g,t.b=Bi.b,t}getStyle(t=bi){ue.workingToColorSpace(Bi.copy(this),t);let e=Bi.r,i=Bi.g,n=Bi.b;return t!==bi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(_h);let i=dl(nr.h,_h.h,e),n=dl(nr.s,_h.s,e),r=dl(nr.l,_h.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bi=new qt;qt.NAMES=X_;var Sl=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wr=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new H,bs=new H,qd=new H,Ts=new H,Do=new H,No=new H,F0=new H,Zd=new H,Jd=new H,Kd=new H,$d=new Fe,Qd=new Fe,jd=new Fe,ar=class s{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Vn.subVectors(t,e),n.cross(Vn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Vn.subVectors(n,e),bs.subVectors(i,e),qd.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(bs),l=Vn.dot(qd),c=bs.dot(bs),h=bs.dot(qd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(o,Ts.y),l.addScaledVector(a,Ts.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return $d.setScalar(0),Qd.setScalar(0),jd.setScalar(0),$d.fromBufferAttribute(t,e),Qd.fromBufferAttribute(t,i),jd.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector($d,r.x),o.addScaledVector(Qd,r.y),o.addScaledVector(jd,r.z),o}static isFrontFacing(t,e,i,n){return Vn.subVectors(i,e),bs.subVectors(t,e),Vn.cross(bs).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Vn.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;Do.subVectors(n,i),No.subVectors(r,i),Zd.subVectors(t,i);let l=Do.dot(Zd),c=No.dot(Zd);if(l<=0&&c<=0)return e.copy(i);Jd.subVectors(t,n);let h=Do.dot(Jd),d=No.dot(Jd);if(h>=0&&d<=h)return e.copy(n);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Do,o);Kd.subVectors(t,r);let u=Do.dot(Kd),p=No.dot(Kd);if(p>=0&&u<=p)return e.copy(r);let g=u*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(No,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return F0.subVectors(r,n),a=(d-h)/(d-h+(u-p)),e.copy(n).addScaledVector(F0,a);let _=1/(m+g+f);return o=g*_,a=f*_,e.copy(i).addScaledVector(Do,o).addScaledVector(No,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ss=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xh.copy(i.boundingBox)),xh.applyMatrix4(t.matrixWorld),this.union(xh)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rl),vh.subVectors(this.max,rl),Uo.subVectors(t.a,rl),Oo.subVectors(t.b,rl),Fo.subVectors(t.c,rl),sr.subVectors(Oo,Uo),rr.subVectors(Fo,Oo),zr.subVectors(Uo,Fo);let e=[0,-sr.z,sr.y,0,-rr.z,rr.y,0,-zr.z,zr.y,sr.z,0,-sr.x,rr.z,0,-rr.x,zr.z,0,-zr.x,-sr.y,sr.x,0,-rr.y,rr.x,0,-zr.y,zr.x,0];return!tp(e,Uo,Oo,Fo,vh)||(e=[1,0,0,0,1,0,0,0,1],!tp(e,Uo,Oo,Fo,vh))?!1:(yh.crossVectors(sr,rr),e=[yh.x,yh.y,yh.z],tp(e,Uo,Oo,Fo,vh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ws=[new H,new H,new H,new H,new H,new H,new H,new H],Wn=new H,xh=new ss,Uo=new H,Oo=new H,Fo=new H,sr=new H,rr=new H,zr=new H,rl=new H,vh=new H,yh=new H,kr=new H;function tp(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){kr.fromArray(s,r);let a=n.x*Math.abs(kr.x)+n.y*Math.abs(kr.y)+n.z*Math.abs(kr.z),l=t.dot(kr),c=e.dot(kr),h=i.dot(kr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ni=new H,Sh=new mt,CS=0,sn=class extends ns{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=B_,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=t!==void 0?Hp(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sh.fromBufferAttribute(this,e),Sh.applyMatrix3(t),this.setXY(e,Sh.x,Sh.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix3(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):V_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):W_(t,this.array)}};var Ml=class extends sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var bl=class extends sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Te=class extends sn{constructor(t,e,i){super(new Float32Array(t),e,i)}},PS=new ss,ol=new H,ep=new H,Cs=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):PS.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);let e=ol.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ol,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ep.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(ep)),this.expandByPoint(ol.copy(t.center).sub(ep))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},IS=0,In=new Se,ip=new $e,Bo=new H,gn=new ss,al=new ss,_i=new H,hi=class s extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iS(t)?bl:Ml)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,i){return In.makeTranslation(t,e,i),this.applyMatrix4(In),this}scale(t,e,i){return In.makeScale(t,e,i),this.applyMatrix4(In),this}lookAt(t){return ip.lookAt(t),ip.updateMatrix(),this.applyMatrix4(ip.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(_i.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(_i),_i.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(_i)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];al.setFromBufferAttribute(a),this.morphTargetsRelative?(_i.addVectors(gn.min,al.min),gn.expandByPoint(_i),_i.addVectors(gn.max,al.max),gn.expandByPoint(_i)):(gn.expandByPoint(al.min),gn.expandByPoint(al.max))}gn.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)_i.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(_i));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_i.fromBufferAttribute(a,c),l&&(Bo.fromBufferAttribute(t,c),_i.add(Bo)),n=Math.max(n,i.distanceToSquared(_i))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new H,l[P]=new H;let h=new H,d=new H,f=new H,u=new mt,p=new mt,g=new mt,m=new H,_=new H;function v(P,R,N){c[P]=c[R]=c[N]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,R),f.fromBufferAttribute(i,N),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,N),d.sub(h),f.sub(h),p.sub(u),g.sub(u);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),_.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),a[P].add(m),a[R].add(m),a[N].add(m),l[P].add(_),l[R].add(_),l[N].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,R=S.length;P<R;++P){let N=S[P],L=N.start,G=N.count;for(let C=L,U=L+G;C<U;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let y=new H,b=new H,w=new H,x=new H;function M(P){w.fromBufferAttribute(n,P),x.copy(w);let R=a[P];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),b.crossVectors(x,R);let L=b.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,R=i.count;P<R;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let n=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let f=0,u=t.count;f<u;f+=3){let p=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_i.fromBufferAttribute(t,e),_i.normalize(),t.setXYZ(e,_i.x,_i.y,_i.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*h;for(let _=0;_<h;_++)f[p++]=c[u++]}return new sn(f,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var np=new H,LS=new H,DS=new te,Xn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=np.subVectors(i,e).cross(LS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(np),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||DS.getNormalMatrix(t),n=this.coplanarPoint(np).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},NS=0,rs=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=aa,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Ep,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hh,this.stencilZFail=Hh,this.stencilZPass=Hh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new mt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Es=new H,sp=new H,Mh=new H,bh=new H,Tl=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Es.copy(this.origin).addScaledVector(this.direction,e),Es.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){sp.copy(t).add(e).multiplyScalar(.5),Mh.copy(e).sub(t).normalize(),bh.copy(this.origin).sub(sp);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Mh),a=bh.dot(this.direction),l=-bh.dot(Mh),c=bh.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let g=1/h;d*=g,f*=g,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(sp).addScaledVector(Mh,f),u}intersectSphere(t,e){if(t.radius<0)return null;Es.subVectors(t.center,this.origin);let i=Es.dot(this.direction),n=Es.dot(Es)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Es)!==null}intersectTriangle(t,e,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,g=e.y-o.y,m=e.z-o.z,_=i.x-o.x,v=i.y-o.y,S=i.z-o.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(h),x,M,P,R,N,L,G,C,U,B,D,K;if(y>=b&&y>=w?(P=l,L=d,U=p,K=_,l>=0?(x=c,M=h,R=f,N=u,G=g,C=m,B=v,D=S):(x=h,M=c,R=u,N=f,G=m,C=g,B=S,D=v)):b>=w?(P=c,L=f,U=g,K=v,c>=0?(x=h,M=l,R=u,N=d,G=m,C=p,B=S,D=_):(x=l,M=h,R=d,N=u,G=p,C=m,B=_,D=S)):(P=h,L=u,U=m,K=S,h>=0?(x=l,M=c,R=d,N=f,G=p,C=g,B=_,D=v):(x=c,M=l,R=f,N=d,G=g,C=p,B=v,D=_)),P===0)return null;let V=x/P,A=M/P,W=1/P,ht=R-V*L,wt=N-A*L,X=G-V*U,ot=C-A*U,_t=B-V*K,Rt=D-A*K,gt=_t*ot-Rt*X,Nt=ht*Rt-wt*_t,me=X*wt-ot*ht;if(n){if(gt<0||Nt<0||me<0)return null}else if((gt<0||Nt<0||me<0)&&(gt>0||Nt>0||me>0))return null;let Ut=gt+Nt+me;if(Ut===0)return null;let at=W*(gt*L+Nt*U+me*K);return(Ut>0?at<0:at>0)?null:this.at(at/Ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},B0=new Se,Hr=new Tl,Th=new Cs,z0=new H,wh=new H,Eh=new H,Ah=new H,rp=new H,Rh=new H,k0=new H,Ch=new H,jt=class extends $e{constructor(t=new hi,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Rh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(rp.fromBufferAttribute(d,t),o?Rh.addScaledVector(rp,h):Rh.addScaledVector(rp.sub(e),h))}e.add(Rh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Th.copy(i.boundingSphere),Th.applyMatrix4(r),Hr.copy(t.ray).recast(t.near),!(Th.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Th,z0)===null||Hr.origin.distanceToSquared(z0)>(t.far-t.near)**2))&&(B0.copy(r).invert(),Hr.copy(t.ray).applyMatrix4(B0),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hr)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let m=f[p],_=o[m.materialIndex],v=Math.max(m.start,u.start),S=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,b=S;y<b;y+=3){let w=a.getX(y),x=a.getX(y+1),M=a.getX(y+2);n=Ph(this,_,t,i,c,h,d,w,x,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let m=p,_=g;m<_;m+=3){let v=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);n=Ph(this,o,t,i,c,h,d,v,S,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let m=f[p],_=o[m.materialIndex],v=Math.max(m.start,u.start),S=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,b=S;y<b;y+=3){let w=y,x=y+1,M=y+2;n=Ph(this,_,t,i,c,h,d,w,x,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=p,_=g;m<_;m+=3){let v=m,S=m+1,y=m+2;n=Ph(this,o,t,i,c,h,d,v,S,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function US(s,t,e,i,n,r,o,a){let l;if(t.side===wi?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===pr,a),l===null)return null;Ch.copy(a),Ch.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ch);return c<e.near||c>e.far?null:{distance:c,point:Ch.clone(),object:s}}function Ph(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,wh),s.getVertexPosition(l,Eh),s.getVertexPosition(c,Ah);let h=US(s,t,e,i,wh,Eh,Ah,k0);if(h){let d=new H;ar.getBarycoord(k0,wh,Eh,Ah,d),n&&(h.uv=ar.getInterpolatedAttribute(n,a,l,c,d,new mt)),r&&(h.uv1=ar.getInterpolatedAttribute(r,a,l,c,d,new mt)),o&&(h.normal=ar.getInterpolatedAttribute(o,a,l,c,d,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};ar.getNormal(wh,Eh,Ah,f.normal),h.face=f,h.barycoord=d}return h}var Xr=class extends Ti{constructor(t=null,e=1,i=1,n,r,o,a,l,c=xi,h=xi,d,f){super(null,o,a,l,c,h,n,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wl=class extends sn{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zo=new Se,H0=new Se,Ih=[],G0=new ss,OS=new Se,ll=new jt,cl=new Cs,Yr=class extends jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,OS)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ss),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zo),G0.copy(t.boundingBox).applyMatrix4(zo),this.boundingBox.union(G0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zo),cl.copy(t.boundingSphere).applyMatrix4(zo),this.boundingSphere.union(cl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(ll.geometry=this.geometry,ll.material=this.material,ll.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(i),t.ray.intersectsSphere(cl)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,zo),H0.multiplyMatrices(i,zo),ll.matrixWorld=H0,ll.raycast(t,Ih);for(let o=0,a=Ih.length;o<a;o++){let l=Ih[o];l.instanceId=r,l.object=this,e.push(l)}Ih.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xr(new Float32Array(n*this.count),n,this.count,Lu,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gr=new Cs,FS=new mt(.5,.5),Lh=new H,lr=class{constructor(t=new Xn,e=new Xn,i=new Xn,n=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln,i=!1){let n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],g=r[9],m=r[10],_=r[11],v=r[12],S=r[13],y=r[14],b=r[15];if(n[0].setComponents(c-o,u-h,_-p,b-v).normalize(),n[1].setComponents(c+o,u+h,_+p,b+v).normalize(),n[2].setComponents(c+a,u+d,_+g,b+S).normalize(),n[3].setComponents(c-a,u-d,_-g,b-S).normalize(),i)n[4].setComponents(l,f,m,y).normalize(),n[5].setComponents(c-l,u-f,_-m,b-y).normalize();else if(n[4].setComponents(c-l,u-f,_-m,b-y).normalize(),e===Ln)n[5].setComponents(c+l,u+f,_+m,b+y).normalize();else if(e===Yo)n[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(t){Gr.center.set(0,0,0);let e=FS.distanceTo(t.center);return Gr.radius=.7071067811865476+e,Gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Lh.x=n.normal.x>0?t.max.x:t.min.x,Lh.y=n.normal.y>0?t.max.y:t.min.y,Lh.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Lh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},V0=new Se,iu=class s{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];V0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new lr),i[n].setFromProjectionMatrix(V0,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new lr),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Qo=class extends rs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},nu=new H,su=new H,W0=new Se,hl=new Tl,Dh=new Cs,op=new H,X0=new H,ru=class extends $e{constructor(t=new hi,e=new Qo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)nu.fromBufferAttribute(e,n-1),su.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=nu.distanceTo(su);t.setAttribute("lineDistance",new Te(i,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dh.copy(i.boundingSphere),Dh.applyMatrix4(n),Dh.radius+=r,t.ray.intersectsSphere(Dh)===!1)return;W0.copy(n).invert(),hl.copy(t.ray).applyMatrix4(W0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=u,m=p-1;g<m;g+=c){let _=h.getX(g),v=h.getX(g+1),S=Nh(this,t,hl,l,_,v,g);S&&e.push(S)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(u),_=Nh(this,t,hl,l,g,m,p-1);_&&e.push(_)}}else{let u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=u,m=p-1;g<m;g+=c){let _=Nh(this,t,hl,l,g,g+1,g);_&&e.push(_)}if(this.isLineLoop){let g=Nh(this,t,hl,l,p-1,u,p-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nh(s,t,e,i,n,r,o){let a=s.geometry.attributes.position;if(nu.fromBufferAttribute(a,n),su.fromBufferAttribute(a,r),e.distanceSqToSegment(nu,su,op,X0)>i)return;op.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(op);if(!(c<t.near||c>t.far))return{distance:c,point:X0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var El=class extends ru{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Al=class extends Ti{constructor(t,e,i,n,r=ci,o=ci,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var Rl=class extends Ti{constructor(t=[],e=jr,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cl=class extends Ti{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ps=class extends Ti{constructor(t,e,i=Yn,n,r,o,a=xi,l=xi,c,h=Rs,d=1){if(h!==Rs&&h!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ko(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Pl=class extends Ps{constructor(t,e=Yn,i=jr,n,r,o=xi,a=xi,l,c=Rs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Il=class extends Ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},os=class s extends hi{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function p(g,m,_,v,S,y,b,w,x,M,P){let R=y/x,N=b/M,L=y/2,G=b/2,C=w/2,U=x+1,B=M+1,D=0,K=0,V=new H;for(let A=0;A<B;A++){let W=A*N-G;for(let ht=0;ht<U;ht++){let wt=ht*R-L;V[g]=wt*v,V[m]=W*S,V[_]=C,c.push(V.x,V.y,V.z),V[g]=0,V[m]=0,V[_]=w>0?1:-1,h.push(V.x,V.y,V.z),d.push(ht/x),d.push(1-A/M),D+=1}}for(let A=0;A<M;A++)for(let W=0;W<x;W++){let ht=f+W+U*A,wt=f+W+U*(A+1),X=f+(W+1)+U*(A+1),ot=f+(W+1)+U*A;l.push(ht,wt,ot),l.push(wt,X,ot),K+=6}a.addGroup(u,K,P),u+=K,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qr=class s extends hi{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,g=[],m=i/2,_=0;v(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(u,2));function v(){let y=new H,b=new H,w=0,x=(e-t)/i;for(let M=0;M<=r;M++){let P=[],R=M/r,N=R*(e-t)+t;for(let L=0;L<=n;L++){let G=L/n,C=G*l+a,U=Math.sin(C),B=Math.cos(C);b.x=N*U,b.y=-R*i+m,b.z=N*B,d.push(b.x,b.y,b.z),y.set(U,x,B).normalize(),f.push(y.x,y.y,y.z),u.push(G,1-R),P.push(p++)}g.push(P)}for(let M=0;M<n;M++)for(let P=0;P<r;P++){let R=g[P][M],N=g[P+1][M],L=g[P+1][M+1],G=g[P][M+1];(t>0||P!==0)&&(h.push(R,N,G),w+=3),(e>0||P!==r-1)&&(h.push(N,L,G),w+=3)}c.addGroup(_,w,0),_+=w}function S(y){let b=p,w=new mt,x=new H,M=0,P=y===!0?t:e,R=y===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,m*R,0),f.push(0,R,0),u.push(.5,.5),p++;let N=p;for(let L=0;L<=n;L++){let C=L/n*l+a,U=Math.cos(C),B=Math.sin(C);x.x=P*B,x.y=m*R,x.z=P*U,d.push(x.x,x.y,x.z),f.push(0,R,0),w.x=U*.5+.5,w.y=B*.5*R+.5,u.push(w.x,w.y),p++}for(let L=0;L<n;L++){let G=b+L,C=N+L;y===!0?h.push(C,C+1,G):h.push(C+1,C,G),M+=3}c.addGroup(_,M,y===!0?1:2),_+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,u=(o-h)/f;return(n+u)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new mt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new H,n=[],r=[],o=[],a=new H,l=new Se;for(let u=0;u<=t;u++){let p=u/t;n[u]=this.getTangentAt(p,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(he(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(n[u],r[u])}if(e===!0){let u=Math.acos(he(r[0].dot(r[t]),-1,1));u/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],u*p)),o[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},jo=class extends yn{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ou=class extends jo{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vp(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,n(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Y0=new H,q0=new H,ap=new Vp,lp=new Vp,cp=new Vp,ta=class extends yn{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new H){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(q0.subVectors(n[0],n[1]).add(n[0]),c=q0);let d=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Y0.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Y0),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),ap.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,g,m),lp.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,g,m),cp.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(ap.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),lp.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),cp.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(ap.calc(l),lp.calc(l),cp.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new H().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Z0(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function BS(s,t){let e=1-s;return e*e*t}function zS(s,t){return 2*(1-s)*s*t}function kS(s,t){return s*s*t}function pl(s,t,e,i){return BS(s,t)+zS(s,e)+kS(s,i)}function HS(s,t){let e=1-s;return e*e*e*t}function GS(s,t){let e=1-s;return 3*e*e*s*t}function VS(s,t){return 3*(1-s)*s*s*t}function WS(s,t){return s*s*s*t}function ml(s,t,e,i,n){return HS(s,t)+GS(s,e)+VS(s,i)+WS(s,n)}var Ll=class extends yn{constructor(t=new mt,e=new mt,i=new mt,n=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new mt){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ml(t,n.x,r.x,o.x,a.x),ml(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},au=class extends yn{constructor(t=new H,e=new H,i=new H,n=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new H){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ml(t,n.x,r.x,o.x,a.x),ml(t,n.y,r.y,o.y,a.y),ml(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dl=class extends yn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lu=class extends yn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends yn{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(pl(t,n.x,r.x,o.x),pl(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends yn{constructor(t=new H,e=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new H){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(pl(t,n.x,r.x,o.x),pl(t,n.y,r.y,o.y),pl(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ol=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(Z0(a,l.x,c.x,h.x,d.x),Z0(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new mt().fromArray(n))}return this}},cu=Object.freeze({__proto__:null,ArcCurve:ou,CatmullRomCurve3:ta,CubicBezierCurve:Ll,CubicBezierCurve3:au,EllipseCurve:jo,LineCurve:Dl,LineCurve3:lu,QuadraticBezierCurve:Nl,QuadraticBezierCurve3:Ul,SplineCurve:Ol}),hu=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new cu[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Fl=class extends hu{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Dl(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Nl(this.currentPoint.clone(),new mt(t,e),new mt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new Ll(this.currentPoint.clone(),new mt(t,e),new mt(i,n),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ol(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){let c=new jo(t,e,i,n,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cr=class extends Fl{constructor(t){super(t),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Fl().fromJSON(n))}return this}};function XS(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=Y_(s,0,n,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=KS(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<n;f+=e){let u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Bl(r,o,e,a,l,c,0),o}function Y_(s,t,e,i,n){let r;if(n===aM(s,t,e,i)>0)for(let o=t;o<e;o+=i)r=J0(o/i|0,s[o],s[o+1],r);else for(let o=e-i;o>=t;o-=i)r=J0(o/i|0,s[o],s[o+1],r);return r&&ea(r,r.next)&&(kl(r),r=r.next),r}function Zr(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(ea(e,e.next)||Ge(e.prev,e,e.next)===0)){if(kl(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Bl(s,t,e,i,n,r,o){if(!s)return;!o&&r&&eM(s,i,n,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?qS(s,i,n,r):YS(s)){t.push(l.i,s.i,c.i),kl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=ZS(Zr(s),t),Bl(s,t,e,i,n,r,2)):o===2&&JS(s,t,e,i,n,r):Bl(Zr(s),t,e,i,n,r,1);break}}}function YS(s){let t=s.prev,e=s,i=s.next;if(Ge(t,e,i)>=0)return!1;let n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(n,r,o),d=Math.min(a,l,c),f=Math.max(n,r,o),u=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&ul(n,a,r,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function qS(s,t,e,i){let n=s.prev,r=s,o=s.next;if(Ge(n,r,o)>=0)return!1;let a=n.x,l=r.x,c=o.x,h=n.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),g=Math.max(a,l,c),m=Math.max(h,d,f),_=mp(u,p,t,e,i),v=mp(g,m,t,e,i),S=s.prevZ,y=s.nextZ;for(;S&&S.z>=_&&y&&y.z<=v;){if(S.x>=u&&S.x<=g&&S.y>=p&&S.y<=m&&S!==n&&S!==o&&ul(a,h,l,d,c,f,S.x,S.y)&&Ge(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=u&&y.x<=g&&y.y>=p&&y.y<=m&&y!==n&&y!==o&&ul(a,h,l,d,c,f,y.x,y.y)&&Ge(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=_;){if(S.x>=u&&S.x<=g&&S.y>=p&&S.y<=m&&S!==n&&S!==o&&ul(a,h,l,d,c,f,S.x,S.y)&&Ge(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=g&&y.y>=p&&y.y<=m&&y!==n&&y!==o&&ul(a,h,l,d,c,f,y.x,y.y)&&Ge(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ZS(s,t){let e=s;do{let i=e.prev,n=e.next.next;!ea(i,n)&&Z_(i,e,e.next,n)&&zl(i,n)&&zl(n,i)&&(t.push(i.i,e.i,n.i),kl(e),kl(e.next),e=s=n),e=e.next}while(e!==s);return Zr(e)}function JS(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sM(o,a)){let l=J_(o,a);o=Zr(o,o.next),l=Zr(l,l.next),Bl(o,t,e,i,n,r,0),Bl(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function KS(s,t,e,i){let n=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=Y_(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(nM(c))}n.sort($S);for(let r=0;r<n.length;r++)e=QS(n[r],e);return e}function $S(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function QS(s,t){let e=jS(s,t);if(!e)return t;let i=J_(e,s);return Zr(i,i.next),Zr(e,e.next)}function jS(s,t){let e=t,i=s.x,n=s.y,r=-1/0,o;if(ea(s,e))return e;do{if(ea(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&q_(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){let d=Math.abs(n-e.y)/(i-e.x);zl(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&tM(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function tM(s,t){return Ge(s.prev,s,t.prev)<0&&Ge(t.next,s,s.next)<0}function eM(s,t,e,i){let n=s;do n.z===0&&(n.z=mp(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,iM(n)}function iM(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,e*=2}while(t>1);return s}function mp(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function nM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function q_(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function ul(s,t,e,i,n,r,o,a){return!(s===o&&t===a)&&q_(s,t,e,i,n,r,o,a)}function sM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!rM(s,t)&&(zl(s,t)&&zl(t,s)&&oM(s,t)&&(Ge(s.prev,s,t.prev)||Ge(s,t.prev,t))||ea(s,t)&&Ge(s.prev,s,s.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ea(s,t){return s.x===t.x&&s.y===t.y}function Z_(s,t,e,i){let n=Oh(Ge(s,t,e)),r=Oh(Ge(s,t,i)),o=Oh(Ge(e,i,s)),a=Oh(Ge(e,i,t));return!!(n!==r&&o!==a||n===0&&Uh(s,e,t)||r===0&&Uh(s,i,t)||o===0&&Uh(e,s,i)||a===0&&Uh(e,t,i))}function Uh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Oh(s){return s>0?1:s<0?-1:0}function rM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Z_(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function zl(s,t){return Ge(s.prev,s,s.next)<0?Ge(s,t,s.next)>=0&&Ge(s,s.prev,t)>=0:Ge(s,t,s.prev)<0||Ge(s,s.next,t)<0}function oM(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function J_(s,t){let e=gp(s.i,s.x,s.y),i=gp(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function J0(s,t,e,i){let n=gp(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function kl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function gp(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function aM(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var _p=class{static triangulate(t,e,i=2){return XS(t,e,i)}},is=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];K0(t),$0(i,t);let o=t.length;e.forEach(K0);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,$0(i,e[l]);let a=_p.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function K0(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function $0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var hr=class s extends hi{constructor(t=new cr([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Te(n,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,_=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:lM,S,y=!1,b,w,x,M;if(_){S=_.getSpacedPoints(h),y=!0,f=!1;let $=_.isCatmullRomCurve3?_.closed:!1;b=_.computeFrenetFrames(h,$),w=new H,x=new H,M=new H}f||(m=0,u=0,p=0,g=0);let P=a.extractPoints(c),R=P.shape,N=P.holes;if(!is.isClockWise(R)){R=R.reverse();for(let $=0,lt=N.length;$<lt;$++){let ut=N[$];is.isClockWise(ut)&&(N[$]=ut.reverse())}}function G($){let ut=10000000000000001e-36,k=$[0];for(let xt=1;xt<=$.length;xt++){let Xt=xt%$.length,Ot=$[Xt],Bt=Ot.x-k.x,Kt=Ot.y-k.y,se=Bt*Bt+Kt*Kt,F=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(k.x),Math.abs(k.y)),re=ut*F*F;if(se<=re){$.splice(Xt,1),xt--;continue}k=Ot}}G(R),N.forEach(G);let C=N.length,U=R;for(let $=0;$<C;$++){let lt=N[$];R=R.concat(lt)}function B($,lt,ut){return lt||Qt("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(lt,ut)}let D=R.length;function K($,lt,ut){let k,xt,Xt,Ot=$.x-lt.x,Bt=$.y-lt.y,Kt=ut.x-$.x,se=ut.y-$.y,F=Ot*Ot+Bt*Bt,re=Ot*se-Bt*Kt;if(Math.abs(re)>Number.EPSILON){let Jt=Math.sqrt(F),$t=Math.sqrt(Kt*Kt+se*se),yt=lt.x-Bt/Jt,ge=lt.y+Ot/Jt,Ht=ut.x-se/$t,Yt=ut.y+Kt/$t,I=((Ht-yt)*se-(Yt-ge)*Kt)/(Ot*se-Bt*Kt);k=yt+Ot*I-$.x,xt=ge+Bt*I-$.y;let T=k*k+xt*xt;if(T<=2)return new mt(k,xt);Xt=Math.sqrt(T/2)}else{let Jt=!1;Ot>Number.EPSILON?Kt>Number.EPSILON&&(Jt=!0):Ot<-Number.EPSILON?Kt<-Number.EPSILON&&(Jt=!0):Math.sign(Bt)===Math.sign(se)&&(Jt=!0),Jt?(k=-Bt,xt=Ot,Xt=Math.sqrt(F)):(k=Ot,xt=Bt,Xt=Math.sqrt(F/2))}return new mt(k/Xt,xt/Xt)}let V=[];for(let $=0,lt=U.length,ut=lt-1,k=$+1;$<lt;$++,ut++,k++)ut===lt&&(ut=0),k===lt&&(k=0),V[$]=K(U[$],U[ut],U[k]);let A=[],W,ht=V.concat();for(let $=0,lt=C;$<lt;$++){let ut=N[$];W=[];for(let k=0,xt=ut.length,Xt=xt-1,Ot=k+1;k<xt;k++,Xt++,Ot++)Xt===xt&&(Xt=0),Ot===xt&&(Ot=0),W[k]=K(ut[k],ut[Xt],ut[Ot]);A.push(W),ht=ht.concat(W)}let wt;if(m===0)wt=is.triangulateShape(U,N);else{let $=[],lt=[];for(let ut=0;ut<m;ut++){let k=ut/m,xt=u*Math.cos(k*Math.PI/2),Xt=p*Math.sin(k*Math.PI/2)+g;for(let Ot=0,Bt=U.length;Ot<Bt;Ot++){let Kt=B(U[Ot],V[Ot],Xt);Nt(Kt.x,Kt.y,-xt),k===0&&$.push(Kt)}for(let Ot=0,Bt=C;Ot<Bt;Ot++){let Kt=N[Ot];W=A[Ot];let se=[];for(let F=0,re=Kt.length;F<re;F++){let Jt=B(Kt[F],W[F],Xt);Nt(Jt.x,Jt.y,-xt),k===0&&se.push(Jt)}k===0&&lt.push(se)}}wt=is.triangulateShape($,lt)}let X=wt.length,ot=p+g;for(let $=0;$<D;$++){let lt=f?B(R[$],ht[$],ot):R[$];y?(x.copy(b.normals[0]).multiplyScalar(lt.x),w.copy(b.binormals[0]).multiplyScalar(lt.y),M.copy(S[0]).add(x).add(w),Nt(M.x,M.y,M.z)):Nt(lt.x,lt.y,0)}for(let $=1;$<=h;$++)for(let lt=0;lt<D;lt++){let ut=f?B(R[lt],ht[lt],ot):R[lt];y?(x.copy(b.normals[$]).multiplyScalar(ut.x),w.copy(b.binormals[$]).multiplyScalar(ut.y),M.copy(S[$]).add(x).add(w),Nt(M.x,M.y,M.z)):Nt(ut.x,ut.y,d/h*$)}for(let $=m-1;$>=0;$--){let lt=$/m,ut=u*Math.cos(lt*Math.PI/2),k=p*Math.sin(lt*Math.PI/2)+g;for(let xt=0,Xt=U.length;xt<Xt;xt++){let Ot=B(U[xt],V[xt],k);Nt(Ot.x,Ot.y,d+ut)}for(let xt=0,Xt=N.length;xt<Xt;xt++){let Ot=N[xt];W=A[xt];for(let Bt=0,Kt=Ot.length;Bt<Kt;Bt++){let se=B(Ot[Bt],W[Bt],k);y?Nt(se.x,se.y+S[h-1].y,S[h-1].x+ut):Nt(se.x,se.y,d+ut)}}}_t(),Rt();function _t(){let $=n.length/3;if(f){let lt=0,ut=D*lt;for(let k=0;k<X;k++){let xt=wt[k];me(xt[2]+ut,xt[1]+ut,xt[0]+ut)}lt=h+m*2,ut=D*lt;for(let k=0;k<X;k++){let xt=wt[k];me(xt[0]+ut,xt[1]+ut,xt[2]+ut)}}else{for(let lt=0;lt<X;lt++){let ut=wt[lt];me(ut[2],ut[1],ut[0])}for(let lt=0;lt<X;lt++){let ut=wt[lt];me(ut[0]+D*h,ut[1]+D*h,ut[2]+D*h)}}i.addGroup($,n.length/3-$,0)}function Rt(){let $=n.length/3,lt=0;gt(U,lt),lt+=U.length;for(let ut=0,k=N.length;ut<k;ut++){let xt=N[ut];gt(xt,lt),lt+=xt.length}i.addGroup($,n.length/3-$,1)}function gt($,lt){let ut=$.length;for(;--ut>=0;){let k=ut,xt=ut-1;xt<0&&(xt=$.length-1);for(let Xt=0,Ot=h+m*2;Xt<Ot;Xt++){let Bt=D*Xt,Kt=D*(Xt+1),se=lt+k+Bt,F=lt+xt+Bt,re=lt+xt+Kt,Jt=lt+k+Kt;Ut(se,F,re,Jt)}}}function Nt($,lt,ut){l.push($),l.push(lt),l.push(ut)}function me($,lt,ut){at($),at(lt),at(ut);let k=n.length/3,xt=v.generateTopUV(i,n,k-3,k-2,k-1);ct(xt[0]),ct(xt[1]),ct(xt[2])}function Ut($,lt,ut,k){at($),at(lt),at(k),at(lt),at(ut),at(k);let xt=n.length/3,Xt=v.generateSideWallUV(i,n,xt-6,xt-3,xt-2,xt-1);ct(Xt[0]),ct(Xt[1]),ct(Xt[3]),ct(Xt[1]),ct(Xt[2]),ct(Xt[3])}function at($){n.push(l[$*3+0]),n.push(l[$*3+1]),n.push(l[$*3+2])}function ct($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return cM(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new cu[n.type]().fromJSON(n)),new s(i,t.options)}},lM={generateTopUV:function(s,t,e,i,n){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],f=t[n*3],u=t[n*3+1],p=t[n*3+2],g=t[r*3],m=t[r*3+1],_=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-d),new mt(f,1-p),new mt(g,1-_)]:[new mt(a,1-l),new mt(h,1-d),new mt(u,1-p),new mt(m,1-_)]}};function cM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class s extends hi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],g=[],m=[];for(let _=0;_<h;_++){let v=_*f-o;for(let S=0;S<c;S++){let y=S*d-r;p.push(y,-v,0),g.push(0,0,1),m.push(S/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){let S=v+c*_,y=v+c*(_+1),b=v+1+c*(_+1),w=v+1+c*_;u.push(S,y,w),u.push(y,b,w)}this.setIndex(u),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hl=class s extends hi{constructor(t=new cr([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Te(n,3)),this.setAttribute("normal",new Te(r,3)),this.setAttribute("uv",new Te(o,2));function c(h){let d=n.length/3,f=h.extractPoints(e),u=f.shape,p=f.holes;is.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,_=p.length;m<_;m++){let v=p[m];is.isClockWise(v)===!0&&(p[m]=v.reverse())}let g=is.triangulateShape(u,p);for(let m=0,_=p.length;m<_;m++){let v=p[m];u=u.concat(v)}for(let m=0,_=u.length;m<_;m++){let v=u[m];n.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,_=g.length;m<_;m++){let v=g[m],S=v[0]+d,y=v[1]+d,b=v[2]+d;i.push(S,y,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return hM(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let o=e[t.shapes[n]];i.push(o)}return new s(i,t.curveSegments)}};function hM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var Gl=class s extends hi{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new H,f=new H,u=[],p=[],g=[],m=[];for(let _=0;_<=i;_++){let v=[],S=_/i,y=o+S*a,b=t*Math.cos(y),w=Math.sqrt(t*t-b*b),x=0;_===0&&o===0?x=.5/e:_===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let P=M/e,R=n+P*r;d.x=-w*Math.cos(R),d.y=b,d.z=w*Math.sin(R),p.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),m.push(P+x,1-S),v.push(c++)}h.push(v)}for(let _=0;_<i;_++)for(let v=0;v<e;v++){let S=h[_][v+1],y=h[_][v],b=h[_+1][v],w=h[_+1][v+1];(_!==0||o>0)&&u.push(S,y,w),(_!==i-1||l<Math.PI)&&u.push(y,b,w)}this.setIndex(u),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vl=class s extends hi{constructor(t=new Ul(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new mt,h=new H,d=[],f=[],u=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(u,2));function g(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),v(),_()}function m(S){h=t.getPointAt(S/e,h);let y=o.normals[S],b=o.binormals[S];for(let w=0;w<=n;w++){let x=w/n*Math.PI*2,M=Math.sin(x),P=-Math.cos(x);l.x=P*y.x+M*b.x,l.y=P*y.y+M*b.y,l.z=P*y.z+M*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function _(){for(let S=1;S<=e;S++)for(let y=1;y<=n;y++){let b=(n+1)*(S-1)+(y-1),w=(n+1)*S+(y-1),x=(n+1)*S+y,M=(n+1)*(S-1)+y;p.push(b,w,M),p.push(w,x,M)}}function v(){for(let S=0;S<=e;S++)for(let y=0;y<=n;y++)c.x=S/e,c.y=y/n,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new cu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function io(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Q0(n))n.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Q0(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ki(s){let t={};for(let e=0;e<s.length;e++){let i=io(s[e]);for(let n in i)t[n]=i[n]}return t}function Q0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function uM(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Fs={clone:io,merge:ki},fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(n.value);break;case"v2":this.uniforms[i].value=new mt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new H().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Fe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new te().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ia=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ki=class extends rs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ls=class extends Ki{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Vr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Vr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wl=class extends rs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=wu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},uu=class extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fu=class extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ko(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Fh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ur=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},du=class extends ur{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fp,endingEnd:fp}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case dp:r=t,a=2*e-i;break;case pp:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dp:o=t,l=2*i-e;break;case pp:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(i-e)/(n-e),g=p*p,m=g*p,_=-f*m+2*f*g-f*p,v=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*p+1,S=(-1-u)*m+(1.5+u)*g+.5*p,y=u*m-u*g;for(let b=0;b!==a;++b)r[b]=_*o[h+b]+v*o[c+b]+S*o[l+b]+y*o[d+b];return r}},pu=class extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},mu=class extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},gu=class extends ur{interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(n-e),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let f=a*2,u=t-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],_=u*f+p*2,v=d[_],S=d[_+1],y=t*f+p*2,b=h[y],w=h[y+1],x=mM(i,e,v,b,n);r[p]=K_(x,g,S,w,m)}return r}};function K_(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function pM(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function mM(s,t,e,i,n){let r=(s-t)/(n-t);for(let o=0;o<8;o++){let a=K_(r,t,e,i,n)-s;if(Math.abs(a)<1e-10)break;let l=pM(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Sn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ko(e,this.TimeBufferType),this.values=ko(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ko(t.times,Array),values:ko(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Fh(t.settings)&&(i.settings={inTangents:ko(t.settings.inTangents,Array),outTangents:ko(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case gl:e=this.InterpolantFactoryMethodDiscrete;break;case Qh:e=this.InterpolantFactoryMethodLinear;break;case kh:e=this.InterpolantFactoryMethodSmooth;break;case up:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return Qh;case this.InterpolantFactoryMethodSmooth:return kh;case this.InterpolantFactoryMethodBezier:return up}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Fh(this.settings)&&(j0(this.settings.inTangents,t),j0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Fh(this.settings)&&(t_(this.settings.inTangents,t),t_(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&nS(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===kh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,f=d-i,u=d+i;for(let p=0;p!==i;++p){let g=e[d+p];if(g!==e[f+p]||g!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let u=0;u!==i;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Fh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function j0(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function t_(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Qh;var fr=class extends Sn{constructor(t,e,i){super(t,e,i)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=gl;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var _u=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};_u.prototype.ValueTypeName="color";var xu=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};xu.prototype.ValueTypeName="number";var vu=class extends ur{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xl=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new vu(this.times,this.values,this.getValueSize(),t)}};Xl.prototype.ValueTypeName="quaternion";Xl.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends Sn{constructor(t,e,i){super(t,e,i)}};dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=gl;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};yu.prototype.ValueTypeName="vector";var Gh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(e_(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!e_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function e_(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Su=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$_=new Su,na=class{constructor(t){this.manager=t!==void 0?t:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ho=new WeakMap,Mu=class extends na{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Gh.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Ho.get(o);d===void 0&&(d=[],Ho.set(o,d)),d.push({onLoad:e,onError:n})}return o}let a=qo("img");function l(){h(),e&&e(this);let d=Ho.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}Ho.delete(this),r.manager.itemEnd(t)}function c(d){h(),n&&n(d),Gh.remove(`image:${t}`);let f=Ho.get(this)||[];for(let u=0;u<f.length;u++){let p=f[u];p.onError&&p.onError(d)}Ho.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Gh.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var Yl=class extends na{constructor(t){super(t)}load(t,e,i,n){let r=new Ti,o=new Mu(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}},ql=class extends $e{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var hp=new Se,i_=new H,n_=new H,Zl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;i_.setFromMatrixPosition(t.matrixWorld),e.position.copy(i_),n_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(n_),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){hp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(hp,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Yo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(hp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bh=new H,zh=new xn,ts=new H,Jl=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bh,zh,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bh,zh,ts.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Bh,zh,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bh,zh,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},or=new H,s_=new mt,r_=new mt,zi=class extends Jl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(or.x,or.y).multiplyScalar(-t/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-t/or.z)}getViewSize(t,e){return this.getViewBounds(t,s_,r_),e.subVectors(r_,s_)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fl*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xp=class extends Zl{constructor(){super(new zi(90,1,.5,500)),this.isPointLightShadow=!0}},Jr=class extends ql{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new xp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Kr=class extends Jl{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vp=class extends Zl{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new vp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Go=-90,Vo=1,ra=class extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new zi(Go,Vo,t,e);n.layers=this.layers,this.add(n);let r=new zi(Go,Vo,t,e);r.layers=this.layers,this.add(r);let o=new zi(Go,Vo,t,e);o.layers=this.layers,this.add(o);let a=new zi(Go,Vo,t,e);a.layers=this.layers,this.add(a);let l=new zi(Go,Vo,t,e);l.layers=this.layers,this.add(l);let c=new zi(Go,Vo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=g,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},bu=class extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Kl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=gM.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function gM(){this._document.hidden===!1&&this.reset()}var Xp="\\[\\]\\.:\\/",_M=new RegExp("["+Xp+"]","g"),Yp="[^"+Xp+"]",xM="[^"+Xp.replace("\\.","")+"]",vM=/((?:WC+[\/:])*)/.source.replace("WC",Yp),yM=/(WCOD+)?/.source.replace("WCOD",xM),SM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yp),MM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yp),bM=new RegExp("^"+vM+yM+SM+MM+"$"),TM=["material","materials","bones","map"],yp=class{constructor(t,e,i){let n=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_M,"")}static parseTrackName(t){let e=bM.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);TM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=yp;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YE=new Float32Array(1);var Qp=class Qp{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Qp.prototype.isMatrix2=!0;var Sp=Qp;function qp(s,t,e,i){let n=wM(i);switch(e){case Lp:return s*t;case Lu:return s*t/n.components*n.byteLength;case Du:return s*t/n.components*n.byteLength;case gr:return s*t*2/n.components*n.byteLength;case Nu:return s*t*2/n.components*n.byteLength;case Dp:return s*t*3/n.components*n.byteLength;case qn:return s*t*4/n.components*n.byteLength;case Uu:return s*t*4/n.components*n.byteLength;case rc:case oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ac:case lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fu:case zu:return Math.max(s,16)*Math.max(t,8)/4;case Ou:case Bu:return Math.max(s,8)*Math.max(t,8)/2;case ku:case Hu:case Vu:case Wu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gu:case cc:case Xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ju:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $u:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ju:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case tf:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ef:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case nf:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case of:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case af:case lf:case cf:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hf:case uf:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hc:case ff:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wM(s){switch(s){case rn:case Rp:return{byteLength:1,components:1};case ca:case Cp:case ui:return{byteLength:2,components:1};case Pu:case Iu:return{byteLength:2,components:4};case Yn:case Cu:case Un:return{byteLength:4,components:1};case Pp:case Ip:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function vx(){let s=null,t=!1,e=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function AM(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],g=d[u];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,d[f]=g)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let g=d[u];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var RM=`#ifdef USE_ALPHAHASH
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
}`,ae={alphahash_fragment:RM,alphahash_pars_fragment:CM,alphamap_fragment:PM,alphamap_pars_fragment:IM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:NM,aomap_pars_fragment:UM,batching_pars_vertex:OM,batching_vertex:FM,begin_vertex:BM,beginnormal_vertex:zM,bsdfs:kM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:YM,color_fragment:qM,color_pars_fragment:ZM,color_pars_vertex:JM,color_vertex:KM,common:$M,defaultnormal_vertex:QM,displacementmap_pars_vertex:jM,displacementmap_vertex:tb,emissivemap_fragment:eb,emissivemap_pars_fragment:ib,colorspace_fragment:nb,colorspace_pars_fragment:sb,envmap_fragment:rb,envmap_common_pars_fragment:ob,envmap_pars_fragment:ab,envmap_pars_vertex:lb,envmap_physical_pars_fragment:vb,envmap_vertex:cb,fog_vertex:hb,fog_pars_vertex:ub,fog_fragment:fb,fog_pars_fragment:db,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:_b,lights_pars_begin:xb,lights_toon_fragment:yb,lights_toon_pars_fragment:Sb,lights_phong_fragment:Mb,lights_phong_pars_fragment:bb,lights_physical_fragment:Tb,lights_physical_pars_fragment:wb,lights_fragment_begin:Eb,lights_fragment_maps:Ab,lights_fragment_end:Rb,lightprobes_pars_fragment:Cb,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Ib,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Db,map_fragment:Nb,map_pars_fragment:Ub,map_particle_fragment:Ob,map_particle_pars_fragment:Fb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:zb,morphinstance_vertex:kb,morphcolor_vertex:Hb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Vb,morphtarget_vertex:Wb,normal_fragment_begin:Xb,normal_fragment_maps:Yb,normal_pars_fragment:qb,normal_pars_vertex:Zb,normal_vertex:Jb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:tT,opaque_fragment:eT,packing:iT,premultiplied_alpha_fragment:nT,project_vertex:sT,dithering_fragment:rT,dithering_pars_fragment:oT,roughnessmap_fragment:aT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:hT,shadowmap_vertex:uT,shadowmask_pars_fragment:fT,skinbase_vertex:dT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:_T,specularmap_pars_fragment:xT,tonemapping_fragment:vT,tonemapping_pars_fragment:yT,transmission_fragment:ST,transmission_pars_fragment:MT,uv_pars_fragment:bT,uv_pars_vertex:TT,uv_vertex:wT,worldpos_vertex:ET,background_vert:AT,background_frag:RT,backgroundCube_vert:CT,backgroundCube_frag:PT,cube_vert:IT,cube_frag:LT,depth_vert:DT,depth_frag:NT,distance_vert:UT,distance_frag:OT,equirect_vert:FT,equirect_frag:BT,linedashed_vert:zT,linedashed_frag:kT,meshbasic_vert:HT,meshbasic_frag:GT,meshlambert_vert:VT,meshlambert_frag:WT,meshmatcap_vert:XT,meshmatcap_frag:YT,meshnormal_vert:qT,meshnormal_frag:ZT,meshphong_vert:JT,meshphong_frag:KT,meshphysical_vert:$T,meshphysical_frag:QT,meshtoon_vert:jT,meshtoon_frag:t1,points_vert:e1,points_frag:i1,shadow_vert:n1,shadow_frag:s1,sprite_vert:r1,sprite_frag:o1},It={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},cs={basic:{uniforms:ki([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:ki([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:ki([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:ki([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:ki([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new qt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:ki([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:ki([It.points,It.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:ki([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:ki([It.common,It.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:ki([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:ki([It.sprite,It.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:ki([It.common,It.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:ki([It.lights,It.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};cs.physical={uniforms:ki([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var df={r:0,b:0,g:0},a1=new Se,yx=new te;yx.set(-1,0,0,0,1,0,0,0,1);function l1(s,t,e,i,n,r){let o=new qt(0),a=n===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=t.get(S,y)}return S}function p(v){let S=!1,y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,S){let y=u(S);y&&y.isCubeTexture?(c===void 0&&(c=new jt(new os(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:io(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a1.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yx),c.material.toneMapped=ue.getTransfer(y.colorSpace)!==ve,(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new jt(new Is(2,2),new Ze({name:"BackgroundMaterial",uniforms:io(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(df,Wp(s)),e.buffers.color.setClear(df.r,df.g,df.b,S,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:g,dispose:_}}function c1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,o=!1;function a(N,L,G,C,U){let B=!1,D=d(N,C,G,L);r!==D&&(r=D,c(r.object)),B=u(N,C,G,U),B&&p(N,C,G,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(N,L,G,C),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,L,G,C){let U=C.wireframe===!0,B=i[L.id];B===void 0&&(B={},i[L.id]=B);let D=N.isInstancedMesh===!0?N.id:0,K=B[D];K===void 0&&(K={},B[D]=K);let V=K[G.id];V===void 0&&(V={},K[G.id]=V);let A=V[U];return A===void 0&&(A=f(l()),V[U]=A),A}function f(N){let L=[],G=[],C=[];for(let U=0;U<e;U++)L[U]=0,G[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:C,object:N,attributes:{},index:null}}function u(N,L,G,C){let U=r.attributes,B=L.attributes,D=0,K=G.getAttributes();for(let V in K)if(K[V].location>=0){let W=U[V],ht=B[V];if(ht===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ht=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ht=N.instanceColor)),W===void 0||W.attribute!==ht||ht&&W.data!==ht.data)return!0;D++}return r.attributesNum!==D||r.index!==C}function p(N,L,G,C){let U={},B=L.attributes,D=0,K=G.getAttributes();for(let V in K)if(K[V].location>=0){let W=B[V];W===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));let ht={};ht.attribute=W,W&&W.data&&(ht.data=W.data),U[V]=ht,D++}r.attributes=U,r.attributesNum=D,r.index=C}function g(){let N=r.newAttributes;for(let L=0,G=N.length;L<G;L++)N[L]=0}function m(N){_(N,0)}function _(N,L){let G=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;G[N]=1,C[N]===0&&(s.enableVertexAttribArray(N),C[N]=1),U[N]!==L&&(s.vertexAttribDivisor(N,L),U[N]=L)}function v(){let N=r.newAttributes,L=r.enabledAttributes;for(let G=0,C=L.length;G<C;G++)L[G]!==N[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function S(N,L,G,C,U,B,D){D===!0?s.vertexAttribIPointer(N,L,G,U,B):s.vertexAttribPointer(N,L,G,C,U,B)}function y(N,L,G,C){g();let U=C.attributes,B=G.getAttributes(),D=L.defaultAttributeValues;for(let K in B){let V=B[K];if(V.location>=0){let A=U[K];if(A===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(A=N.instanceColor)),A!==void 0){let W=A.normalized,ht=A.itemSize,wt=t.get(A);if(wt===void 0)continue;let X=wt.buffer,ot=wt.type,_t=wt.bytesPerElement,Rt=ot===s.INT||ot===s.UNSIGNED_INT||A.gpuType===Cu;if(A.isInterleavedBufferAttribute){let gt=A.data,Nt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,me=A.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Ut=0;Ut<V.locationSize;Ut++)_(V.location+Ut,gt.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Ut=0;Ut<V.locationSize;Ut++)S(V.location+Ut,ht/V.locationSize,ot,W,Nt*_t,(me+ht/V.locationSize*Ut)*_t,Rt)}else{if(A.isInstancedBufferAttribute){for(let gt=0;gt<V.locationSize;gt++)_(V.location+gt,A.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let gt=0;gt<V.locationSize;gt++)m(V.location+gt);s.bindBuffer(s.ARRAY_BUFFER,X);for(let gt=0;gt<V.locationSize;gt++)S(V.location+gt,ht/V.locationSize,ot,W,ht*_t,ht/V.locationSize*gt*_t,Rt)}}else if(D!==void 0){let W=D[K];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(V.location,W);break;case 3:s.vertexAttrib3fv(V.location,W);break;case 4:s.vertexAttrib4fv(V.location,W);break;default:s.vertexAttrib1fv(V.location,W)}}}}v()}function b(){P();for(let N in i){let L=i[N];for(let G in L){let C=L[G];for(let U in C){let B=C[U];for(let D in B)h(B[D].object),delete B[D];delete C[U]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;let L=i[N.id];for(let G in L){let C=L[G];for(let U in C){let B=C[U];for(let D in B)h(B[D].object),delete B[D];delete C[U]}}delete i[N.id]}function x(N){for(let L in i){let G=i[L];for(let C in G){let U=G[C];if(U[N.id]===void 0)continue;let B=U[N.id];for(let D in B)h(B[D].object),delete B[D];delete U[N.id]}}}function M(N){for(let L in i){let G=i[L],C=N.isInstancedMesh===!0?N.id:0,U=G[C];if(U!==void 0){for(let B in U){let D=U[B];for(let K in D)h(D[K].object),delete D[K];delete U[B]}delete G[C],Object.keys(G).length===0&&delete i[L]}}}function P(){R(),o=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function h1(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function u1(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(x){return!(x!==qn&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==rn&&x!==Un&&!M&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:w}}function f1(s){let t=this,e=null,i=0,n=!1,r=!1,o=new Xn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,_=s.get(d);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,S=v*4,y=_.clippingState||null;l.value=y,y=h(p,f,S,u);for(let b=0;b!==S;++b)y[b]=e[b];_.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let _=u+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let S=0,y=u;S!==g;++S,y+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}var pc=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Rl(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new os(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wi,blending:Ds});r.uniforms.tEquirect.value=e;let o=new jt(n,r),a=e.minFilter;return e.minFilter===Ns&&(e.minFilter=ci),new ra(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Q_=256,d1=3,p1=20,Sx=256,Mx=16,m1=3,g1=new H,_1=new qt,ua=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ra(1,10,null),this._boxMesh=new jt(new os(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:o=256,position:a=g1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,g=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(t.background=l.getClearColor(_1));let m=new ra(i,n,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=g,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Q_,kp(t))}_fromTexture(t,e){t.mapping===jr||t.mapping===la?this._setSize(t.image.length===0?Q_:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=j_(t,!1,!1),i=Math.log2(t)-d1;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=j_(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===jr||t.mapping===la?(this._cubemapMaterial===null&&(this._cubemapMaterial=ex()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tx()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=x1(),this._integrationMaterial=v1());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Mx);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-m1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Sx*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=y1());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function j_(s,t,e){return new pc(s,{minFilter:Ns,generateMipmaps:t,type:ui,colorSpace:_l,depthBuffer:e})}function mc(s,t,e){return new Ze({name:s,uniforms:t,vertexShader:ae.cube_vert,fragmentShader:e,side:wi,blending:Ds,depthTest:!1,depthWrite:!1})}function x1(){return mc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function S1(s){let t=new WeakMap,e=new WeakMap,i=null;function n(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Eu||u===Au)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let g=new pc(p.height);return g.fromEquirectangularTexture(s,f),t.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===Eu||u===Au,g=u===jr||u===la;if(p||g){let m=e.get(f),_=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return i===null&&(i=new ua(s)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new ua(s)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Eu?f.mapping=jr:u===Au&&(f.mapping=la),f}function l(f){let u=0,p=6;for(let g=0;g<p;g++)f[g]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function M1(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Vr("WebGLRenderer: "+i+" extension not supported."),n}}}function b1(s,t,e,i){let n={},r=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let g=r.get(p);g&&(t.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,g){return n[g.id]!==void 0||(g.addEventListener("dispose",a),n[g.id]=new WeakRef(g),o.register(g,g.id,g),e.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)t.update(g[m],s.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,_=0;if(m===void 0)return;let v=g!==null?g.array.length:m.array.length/3-1,S=m.count>=65535?bl:Ml,y=new S(Math.ceil(v/3)*6,1),b=y.array;if(g!==null){let x=g.array;_=g.version;for(let M=0,P=0;M<v;M+=3){let R=x[M+0],N=x[M+1],L=x[M+2];b[P++]=R,b[P++]=N,b[P++]=N,b[P++]=L,b[P++]=L,b[P++]=R}}else{_=m.version;for(let x=0,M=0;x<v;x+=3){let P=x+0,R=x+1,N=x+2;b[M++]=P,b[M++]=R,b[M++]=R,b[M++]=N,b[M++]=N,b[M++]=P}}y.version=_;let w=r.get(p);w&&t.remove(w),r.set(p,y)}function f(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in n){let g=n[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function T1(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(i,f,r,d*o,u),e.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,u);let g=0;for(let m=0;m<u;m++)g+=f[m];e.update(g,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function w1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function E1(s,t,e){let i=new WeakMap,n=new Fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;u===!0&&(S=1),p===!0&&(S=2),g===!0&&(S=3);let y=a.attributes.position.count*S,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*b*4*d),x=new vl(w,y,b,d);x.type=Un,x.needsUpdate=!0;let M=S*4;for(let R=0;R<d;R++){let N=m[R],L=_[R],G=v[R],C=y*b*4*R;for(let U=0;U<N.count;U++){let B=U*M;u===!0&&(n.fromBufferAttribute(N,U),w[C+B+0]=n.x,w[C+B+1]=n.y,w[C+B+2]=n.z,w[C+B+3]=0),p===!0&&(n.fromBufferAttribute(L,U),w[C+B+4]=n.x,w[C+B+5]=n.y,w[C+B+6]=n.z,w[C+B+7]=0),g===!0&&(n.fromBufferAttribute(G,U),w[C+B+8]=n.x,w[C+B+9]=n.y,w[C+B+10]=n.z,w[C+B+11]=G.itemSize===4?n.w:1)}}f={count:d,texture:x,size:new mt(y,b)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let g=0;g<c.length;g++)u+=c[g];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function A1(s,t,e,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var R1={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[Qr]:"NEUTRAL_TONE_MAPPING",[ic]:"CUSTOM_TONE_MAPPING"};function C1(s,t,e,i,n,r){let o=new Ke(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new hi;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));let d=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new jt(h,d),u=new Kr(-1,1,1,-1,0,1),p=null,g=null,m=!1,_,v=null,S=[],y=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let x=0;x<S.length;x++){let M=S[x];M.setSize&&M.setSize(b,w)}},this.setEffects=function(b){S=b,y=S.length>0&&S[0].isRenderPass===!0;let w=o.width,x=o.height;S.length>0&&a===null&&(a=new Ke(w,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(w,x,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&S.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ps(w,x),r===!0&&(c.format=Us,c.type=to)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<S.length;P++){let R=S[P];R.setSize&&R.setSize(w,x),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===as&&S.length===0)return!1;if(v=w,w!==null){let x=w.width,M=w.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return y===!1&&b.setRenderTarget(o),_=b.toneMapping,b.toneMapping=as,!0},this.hasRenderPass=function(){return y},this.end=function(b,w){b.toneMapping=_,m=!0;let x=o,M=a;for(let P=0;P<S.length;P++){let R=S[P];R.enabled!==!1&&(R.render(b,M,x,w),R.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,d.defines={},ue.getTransfer(p)===ve&&(d.defines.SRGB_TRANSFER="");let P=R1[g];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(f,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var bx=new Ti,Tx=new Ps(1,1),wx=new Pl(1),Ex=new vl,Ax=new eu,Rx=new Rl,ix=[],nx=[],sx=new Float32Array(16),rx=new Float32Array(9),ox=new Float32Array(4);function fa(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=ix[n];if(r===void 0&&(r=new Float32Array(n),ix[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fi(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function di(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function gf(s,t){let e=nx[t];e===void 0&&(e=new Int32Array(t),nx[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function P1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function I1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fi(e,t))return;s.uniform2fv(this.addr,t),di(e,t)}}function L1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fi(e,t))return;s.uniform3fv(this.addr,t),di(e,t)}}function D1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fi(e,t))return;s.uniform4fv(this.addr,t),di(e,t)}}function N1(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(fi(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),di(e,t)}else{if(fi(e,i))return;ox.set(i),s.uniformMatrix2fv(this.addr,!1,ox),di(e,i)}}function U1(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(fi(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),di(e,t)}else{if(fi(e,i))return;rx.set(i),s.uniformMatrix3fv(this.addr,!1,rx),di(e,i)}}function O1(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(fi(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),di(e,t)}else{if(fi(e,i))return;sx.set(i),s.uniformMatrix4fv(this.addr,!1,sx),di(e,i)}}function F1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function B1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fi(e,t))return;s.uniform2iv(this.addr,t),di(e,t)}}function z1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fi(e,t))return;s.uniform3iv(this.addr,t),di(e,t)}}function k1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fi(e,t))return;s.uniform4iv(this.addr,t),di(e,t)}}function H1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function G1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fi(e,t))return;s.uniform2uiv(this.addr,t),di(e,t)}}function V1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fi(e,t))return;s.uniform3uiv(this.addr,t),di(e,t)}}function W1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fi(e,t))return;s.uniform4uiv(this.addr,t),di(e,t)}}function _f(s){return s.version===0&&(s.compareFunction=Op,s.needsUpdate=!0),s}function X1(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=_f(Tx):r=bx,e.setTexture2D(t||r,n)}function Y1(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ax,n)}function q1(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=_f(wx):r=Rx,e.setTextureCube(t||r,n)}function Z1(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ex,n)}function J1(s){switch(s){case 5126:return P1;case 35664:return I1;case 35665:return L1;case 35666:return D1;case 35674:return N1;case 35675:return U1;case 35676:return O1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return k1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Z1}}function K1(s,t){s.uniform1fv(this.addr,t)}function $1(s,t){let e=fa(t,this.size,2);s.uniform2fv(this.addr,e)}function Q1(s,t){let e=fa(t,this.size,3);s.uniform3fv(this.addr,e)}function j1(s,t){let e=fa(t,this.size,4);s.uniform4fv(this.addr,e)}function tw(s,t){let e=fa(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ew(s,t){let e=fa(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function iw(s,t){let e=fa(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function nw(s,t){s.uniform1iv(this.addr,t)}function sw(s,t){s.uniform2iv(this.addr,t)}function rw(s,t){s.uniform3iv(this.addr,t)}function ow(s,t){s.uniform4iv(this.addr,t)}function aw(s,t){s.uniform1uiv(this.addr,t)}function lw(s,t){s.uniform2uiv(this.addr,t)}function cw(s,t){s.uniform3uiv(this.addr,t)}function hw(s,t){s.uniform4uiv(this.addr,t)}function uw(s,t,e){let i=this.cache,n=t.length,r=gf(e,n);fi(i,r)||(s.uniform1iv(this.addr,r),di(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=_f(Tx):o=bx;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function fw(s,t,e){let i=this.cache,n=t.length,r=gf(e,n);fi(i,r)||(s.uniform1iv(this.addr,r),di(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Ax,r[o])}function dw(s,t,e){let i=this.cache,n=t.length,r=gf(e,n);fi(i,r)||(s.uniform1iv(this.addr,r),di(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=_f(wx):o=Rx;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,r[a])}function pw(s,t,e){let i=this.cache,n=t.length,r=gf(e,n);fi(i,r)||(s.uniform1iv(this.addr,r),di(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Ex,r[o])}function mw(s){switch(s){case 5126:return K1;case 35664:return $1;case 35665:return Q1;case 35666:return j1;case 35674:return tw;case 35675:return ew;case 35676:return iw;case 5124:case 35670:return nw;case 35667:case 35671:return sw;case 35668:case 35672:return rw;case 35669:case 35673:return ow;case 5125:return aw;case 36294:return lw;case 36295:return cw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return pw}}var em=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=J1(e.type)}},im=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mw(e.type)}},nm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},jp=/(\w+)(\])?(\[|\.)?/g;function ax(s,t){s.seq.push(t),s.map[t.id]=t}function gw(s,t,e){let i=s.name,n=i.length;for(jp.lastIndex=0;;){let r=jp.exec(i),o=jp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){ax(e,c===void 0?new em(a,s,t):new im(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new nm(a),ax(e,d)),e=d}}}var ha=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);gw(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function lx(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var _w=37297,xw=0;function vw(s,t){let e=s.split(`
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
#define LOW_PRECISION`),t}var Lw={[$l]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function Dw(s){return Lw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nw={[la]:"ENVMAP_MODE_REFRACTION"};function Uw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Nw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ow={[wu]:"ENVMAP_BLENDING_MULTIPLY",[A_]:"ENVMAP_BLENDING_MIX",[R_]:"ENVMAP_BLENDING_ADD"};function Fw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ow[s.combine]||"ENVMAP_BLENDING_NONE"}function Bw(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Dw(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Uw(e),d=Fw(e),f=ww(e),u=Ew(r),p=n.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(dc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(dc).join(`
`),m.length>0&&(m+=`
`)):(g=[px(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dc).join(`
`),m=[px(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?ae.tonemapping_pars_fragment:"",e.toneMapping!==as?bw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Sw("linearToOutputTexel",e.outputColorSpace),Tw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dc).join(`
`)),o=sm(o),o=ux(o,e),o=fx(o,e),a=sm(a),a=ux(a,e),a=fx(a,e),o=dx(o),a=dx(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+o,S=_+m+a,y=lx(n,n.VERTEX_SHADER,v),b=lx(n,n.FRAGMENT_SHADER,S);n.attachShader(p,y),n.attachShader(p,b),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(R){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(p)||"",L=n.getShaderInfoLog(y)||"",G=n.getShaderInfoLog(b)||"",C=N.trim(),U=L.trim(),B=G.trim(),D=!0,K=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,y,b);else{let V=hx(n,y,"vertex"),A=hx(n,b,"fragment");Qt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+V+`
`+A)}else C!==""?Zt("WebGLProgram: Program Info Log:",C):(U===""||B==="")&&(K=!1);K&&(R.diagnostics={runnable:D,programLog:C,vertexShader:{log:U,prefix:g},fragmentShader:{log:B,prefix:m}})}n.deleteShader(y),n.deleteShader(b),x=new ha(n,p),M=Aw(n,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(p,_w)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xw++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var zw=0,rm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new om(t),e.set(t,i)),i}},om=class{constructor(t){this.id=zw++,this.code=t,this.usedTimes=0}};function kw(s){return s===gr||s===cc||s===hc}function Hw(s,t,e,i,n,r){let o=new yl,a=new rm,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,P,R,N,L){let G=R.fog,C=N.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=t.get(x.envMap||U,B),K=f[x.type],V=i.precision;x.precision!==null&&(V=i.getMaxPrecision(x.precision),V!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));let A=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,W=A!==void 0?A.length:0,ht=0;C.morphAttributes.position!==void 0&&(ht=1),C.morphAttributes.normal!==void 0&&(ht=2),C.morphAttributes.color!==void 0&&(ht=3);let wt,X,ot,_t;if(K){let nt=cs[K];wt=nt.vertexShader,X=nt.fragmentShader}else{wt=x.vertexShader,X=x.fragmentShader;let nt=a.getVertexShaderStage(x),Lt=a.getFragmentShaderStage(x);a.update(x,nt,Lt),ot=nt.id,_t=Lt.id}let Rt=s.getRenderTarget(),gt=s.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,Ut=!!x.map,at=!!x.matcap,ct=!!D,$=ct&&D.isPMREMTexture===!0,lt=!!x.aoMap,ut=!!x.lightMap,k=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Xt=!!x.displacementMap,Ot=!!x.emissiveMap,Bt=!!x.metalnessMap,Kt=!!x.roughnessMap,se=x.anisotropy>0,F=x.clearcoat>0,re=x.diffuseRoughness>0,Jt=x.dispersion>0,$t=x.retroreflectivity>0,yt=x.iridescence>0,ge=x.sheen>0,Ht=x.transmission>0,Yt=se&&!!x.anisotropyMap,I=F&&!!x.clearcoatMap,T=F&&!!x.clearcoatNormalMap,q=F&&!!x.clearcoatRoughnessMap,ft=re&&!!x.diffuseRoughnessMap,st=yt&&!!x.iridescenceMap,St=yt&&!!x.iridescenceThicknessMap,Et=ge&&!!x.sheenColorMap,Z=ge&&!!x.sheenRoughnessMap,et=!!x.specularMap,vt=!!x.specularColorMap,O=!!x.specularIntensityMap,tt=Ht&&!!x.transmissionMap,j=Ht&&!!x.thicknessMap,Mt=!!x.gradientMap,pt=!!x.alphaMap,bt=x.alphaTest>0,dt=!!x.alphaHash,Tt=!!x.extensions,rt=as;x.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(rt=s.toneMapping);let it=$?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,At={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:wt,fragmentShader:X,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:_t,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:at,envMap:ct,envMapMode:ct&&D.mapping,envMapPMREM:$,envMapMaxLod:$?it.length-1:null,envMapSize:$?it[0].width:null,aoMap:lt,lightMap:ut,bumpMap:k,normalMap:xt,displacementMap:Xt,emissiveMap:Ot,normalMapObjectSpace:xt&&x.normalMapType===I_,normalMapTangentSpace:xt&&x.normalMapType===uc,packedNormalMap:xt&&x.normalMapType===uc&&kw(x.normalMap.format),metalnessMap:Bt,roughnessMap:Kt,anisotropy:se,anisotropyMap:Yt,clearcoat:F,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:q,diffuseRoughness:re,diffuseRoughnessMap:ft,dispersion:Jt,retroreflection:$t,iridescence:yt,iridescenceMap:st,iridescenceThicknessMap:St,sheen:ge,sheenColorMap:Et,sheenRoughnessMap:Z,specularMap:et,specularColorMap:vt,specularIntensityMap:O,transmission:Ht,transmissionMap:tt,thicknessMap:j,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===aa&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:bt,alphaHash:dt,combine:x.combine,mapUv:Ut&&u(x.map.channel),aoMapUv:lt&&u(x.aoMap.channel),lightMapUv:ut&&u(x.lightMap.channel),bumpMapUv:k&&u(x.bumpMap.channel),normalMapUv:xt&&u(x.normalMap.channel),displacementMapUv:Xt&&u(x.displacementMap.channel),emissiveMapUv:Ot&&u(x.emissiveMap.channel),metalnessMapUv:Bt&&u(x.metalnessMap.channel),roughnessMapUv:Kt&&u(x.roughnessMap.channel),anisotropyMapUv:Yt&&u(x.anisotropyMap.channel),clearcoatMapUv:I&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:st&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:St&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&u(x.sheenRoughnessMap.channel),specularMapUv:et&&u(x.specularMap.channel),specularColorMapUv:vt&&u(x.specularColorMap.channel),specularIntensityMapUv:O&&u(x.specularIntensityMap.channel),transmissionMapUv:tt&&u(x.transmissionMap.channel),thicknessMapUv:j&&u(x.thicknessMap.channel),alphaMapUv:pt&&u(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(xt||se),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ut||pt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ht,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===wi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&x.extensions.multiDraw===!0||me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function g(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(M,x),_(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function _(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let M=f[x.type],P;if(M){let R=cs[M];P=Fs.clone(R.uniforms)}else P=x.uniforms;return P}function S(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new Bw(s,M,x,n),c.push(P),h.set(M,P)),P}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:w}}function Gw(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Vw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function mx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gx(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,g,m,_){let v=s[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:m,group:_},s[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=o(f),v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=m,v.group=_),t++,v}function l(f,u,p,g,m,_,v){v.reversedDepth===!0&&(m=-m);let S=a(f,u,p,g,m,_);p.transmission>0?i.push(S):p.transparent===!0?n.push(S):e.push(S)}function c(f,u,p,g,m,_){let v=a(f,u,p,g,m,_);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||Vw),i.length>1&&i.sort(u||mx),n.length>1&&n.sort(u||mx)}function d(){for(let f=t,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function Ww(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new gx,s.set(i,[o])):n>=r.length?(o=new gx,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new qt};break;case"SpotLight":e={position:new H,direction:new H,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function Yw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var qw=0;function Zw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Jw(s){let t=new Xw,e=Yw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let n=new H,r=new Se,o=new Se;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,p=0,g=0,m=0,_=0,v=0,S=0,y=0,b=0,w=0,x=0,M=0,P=0,R=0;c.sort(Zw);for(let L=0,G=c.length;L<G;L++){let C=c[L],U=C.color,B=C.intensity,D=C.distance,K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gr?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*B,d+=U.g*B,f+=U.b*B;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],B);R++}else if(C.isSunLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let A=C.shadow,W=e.get(C);W.shadowIntensity=A.intensity,W.shadowBias=A.bias,W.shadowNormalBias=A.normalBias,W.shadowRadius=A.radius,W.shadowMapSize.copy(A.mapSize).multiply(A.getFrameExtents()),i.sunShadow[p]=W,i.sunShadowMap[p]=K;let ht=A.getViewportCount();for(let wt=0;wt<ht;wt++)i.sunShadowMatrix[g+wt]=A.getMatrix(wt),i.sunShadowCascade[g+wt]=A._cascadeData[wt];g+=ht,p++}i.sun[u]=V,u++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let A=C.shadow,W=e.get(C);W.shadowIntensity=A.intensity,W.shadowBias=A.bias,W.shadowNormalBias=A.normalBias,W.shadowRadius=A.radius,W.shadowMapSize=A.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=V,m++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(B),V.distance=D,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[v]=V;let A=C.shadow;if(C.map&&(i.spotLightMap[M]=C.map,M++,A.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[v]=A.matrix,C.castShadow){let W=e.get(C);W.shadowIntensity=A.intensity,W.shadowBias=A.bias,W.shadowNormalBias=A.normalBias,W.shadowRadius=A.radius,W.shadowMapSize=A.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=K,x++}v++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(U).multiplyScalar(B),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[S]=V,S++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let A=C.shadow,W=e.get(C);W.shadowIntensity=A.intensity,W.shadowBias=A.bias,W.shadowNormalBias=A.normalBias,W.shadowRadius=A.radius,W.shadowMapSize=A.mapSize,W.shadowCameraNear=A.camera.near,W.shadowCameraFar=A.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=C.shadow.matrix,w++}i.point[_]=V,_++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(B),V.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[y]=V,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=It.LTC_FLOAT_1,i.rectAreaLTC2=It.LTC_FLOAT_2):(i.rectAreaLTC1=It.LTC_HALF_1,i.rectAreaLTC2=It.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.sunLength!==u||N.directionalLength!==m||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==S||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==x||N.numSpotMaps!==M||N.numLightProbes!==R)&&(i.sun.length=u,i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=_,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-P,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.sunLength=u,N.directionalLength=m,N.pointLength=_,N.spotLength=v,N.rectAreaLength=S,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=x,N.numSpotMaps=M,N.numLightProbes=R,i.version=qw++)}function l(c,h){let d=0,f=0,u=0,p=0,g=0,m=0,_=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let y=c[v];if(y.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),d++}else if(y.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(_),f++}else if(y.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(_),p++}else if(y.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),o.identity(),r.copy(y.matrixWorld),r.premultiply(_),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),u++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:i}}function _x(s){let t=new Jw(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Kw(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new _x(s),t.set(n,[a])):r>=o.length?(a=new _x(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var $w=`void main() {
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
}`,jw=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],tE=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xx=new Se,fc=new H,tm=new H;function eE(s,t,e){let i=new lr,n=new mt,r=new mt,o=new Fe,a=new uu,l=new fu,c={},h=e.maxTextureSize,d={[pr]:wi,[wi]:pr,[Nn]:Nn},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:$w,fragmentShader:Qw}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new hi;p.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new jt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let _=this.type;this.render=function(w,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===l_&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$l);let P=s.getRenderTarget(),R=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ds),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let G=_!==this.type;G&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=w.length;C<U;C++){let B=w[C],D=B.shadow;if(D===void 0){Zt("WebGLShadowMap:",B,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;n.copy(D.mapSize);let K=D.getFrameExtents();n.multiply(K),r.copy(D.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/K.x),n.x=r.x*K.x,D.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/K.y),n.y=r.y*K.y,D.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(D.camera._reversedDepth=V,D.map===null||G===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===oa){if(B.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Ke(n.x,n.y,{format:gr,type:ui,minFilter:ci,magFilter:ci,generateMipmaps:!1}),D.map.texture.name=B.name+".shadowMap",D.map.depthTexture=new Ps(n.x,n.y,Un),D.map.depthTexture.name=B.name+".shadowMapDepth",D.map.depthTexture.format=Rs,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=xi,D.map.depthTexture.magFilter=xi}else B.isPointLight?(D.map=new pc(n.x),D.map.depthTexture=new Pl(n.x,Yn)):(D.map=new Ke(n.x,n.y),D.map.depthTexture=new Ps(n.x,n.y,Yn)),D.map.depthTexture.name=B.name+".shadowMap",D.map.depthTexture.format=Rs,this.type===$l?(D.map.depthTexture.compareFunction=V?Up:Np,D.map.depthTexture.minFilter=ci,D.map.depthTexture.magFilter=ci):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=xi,D.map.depthTexture.magFilter=xi);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==n.x||D.map.height!==n.y)&&D.map.setSize(n.x,n.y);let A=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();B.isPointLight!==!0&&D.updateMatrices(B,M);let W=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:M.layers;for(let ht=0;ht<A;ht++){let wt=D.getCamera(ht);if(B.isPointLight){let X=D.camera,ot=D.matrix,_t=B.distance||X.far;_t!==X.far&&(X.far=_t,X.updateProjectionMatrix()),fc.setFromMatrixPosition(B.matrixWorld),X.position.copy(fc),tm.copy(X.position),tm.add(jw[ht]),X.up.copy(tE[ht]),X.lookAt(tm),X.updateMatrixWorld(),ot.makeTranslation(-fc.x,-fc.y,-fc.z),xx.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),D._frustum.setFromProjectionMatrix(xx,X.coordinateSystem,X.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)s.setRenderTarget(D.map,ht),s.clear();else{ht===0&&(s.setRenderTarget(D.map),s.clear());let X=D.getViewport(ht);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),L.viewport(o)}i=D.getFrustum(ht),y(x,M,wt,B,W,this.type)}D.isPointLightShadow!==!0&&this.type===oa&&v(D,M),D.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(P,R,N)};function v(w,x){let M=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ke(n.x,n.y,{format:gr,type:ui}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,M,f,g,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,M,u,g,null)}function S(w,x,M,P){let R=null,N=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)R=N;else if(R=M.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=R.uuid,G=x.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let U=C[G];U===void 0&&(U=R.clone(),C[G]=U,x.addEventListener("dispose",b)),R=U}if(R.visible=x.visible,R.wireframe=x.wireframe,P===oa?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=s.properties.get(R);L.light=M}return R}function y(w,x,M,P,R,N){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===oa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let C=t.update(w),U=w.material;if(Array.isArray(U)){let B=C.groups;for(let D=0,K=B.length;D<K;D++){let V=B[D],A=U[V.materialIndex];if(A&&A.visible){let W=S(w,A,P,N);w.onBeforeShadow(s,w,x,M,C,W,V),s.renderBufferDirect(M,null,C,W,w,V),w.onAfterShadow(s,w,x,M,C,W,V)}}}else if(U.visible){let B=S(w,U,P,N);w.onBeforeShadow(s,w,x,M,C,B,null),s.renderBufferDirect(M,null,C,B,w,null),w.onAfterShadow(s,w,x,M,C,B,null)}}let G=w.children;for(let C=0,U=G.length;C<U;C++)y(G[C],x,M,P,R,N)}function b(w){w.target.removeEventListener("dispose",b);for(let M in c){let P=c[M],R=w.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function iE(s,t){function e(){let O=!1,tt=new Fe,j=null,Mt=new Fe(0,0,0,0);return{setMask:function(pt){j!==pt&&!O&&(s.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){O=pt},setClear:function(pt,bt,dt,Tt,rt){rt===!0&&(pt*=Tt,bt*=Tt,dt*=Tt),tt.set(pt,bt,dt,Tt),Mt.equals(tt)===!1&&(s.clearColor(pt,bt,dt,Tt),Mt.copy(tt))},reset:function(){O=!1,j=null,Mt.set(-1,0,0,0)}}}function i(){let O=!1,tt=!1,j=null,Mt=null,pt=null;return{setReversed:function(bt){if(tt!==bt){let dt=t.get("EXT_clip_control");bt?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),tt=bt;let Tt=pt;pt=null,this.setClear(Tt)}},getReversed:function(){return tt},setTest:function(bt){bt?gt(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(bt){j!==bt&&!O&&(s.depthMask(bt),j=bt)},setFunc:function(bt){if(tt&&(bt=G_[bt]),Mt!==bt){switch(bt){case Vh:s.depthFunc(s.NEVER);break;case Wh:s.depthFunc(s.ALWAYS);break;case Xh:s.depthFunc(s.LESS);break;case Xo:s.depthFunc(s.LEQUAL);break;case Yh:s.depthFunc(s.EQUAL);break;case qh:s.depthFunc(s.GEQUAL);break;case Zh:s.depthFunc(s.GREATER);break;case Jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=bt}},setLocked:function(bt){O=bt},setClear:function(bt){pt!==bt&&(pt=bt,tt&&(bt=1-bt),s.clearDepth(bt))},reset:function(){O=!1,j=null,Mt=null,pt=null,tt=!1}}}function n(){let O=!1,tt=null,j=null,Mt=null,pt=null,bt=null,dt=null,Tt=null,rt=null;return{setTest:function(it){O||(it?gt(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(it){tt!==it&&!O&&(s.stencilMask(it),tt=it)},setFunc:function(it,At,nt){(j!==it||Mt!==At||pt!==nt)&&(s.stencilFunc(it,At,nt),j=it,Mt=At,pt=nt)},setOp:function(it,At,nt){(bt!==it||dt!==At||Tt!==nt)&&(s.stencilOp(it,At,nt),bt=it,dt=At,Tt=nt)},setLocked:function(it){O=it},setClear:function(it){rt!==it&&(s.clearStencil(it),rt=it)},reset:function(){O=!1,tt=null,j=null,Mt=null,pt=null,bt=null,dt=null,Tt=null,rt=null}}}let r=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],g=null,m=!1,_=null,v=null,S=null,y=null,b=null,w=null,x=null,M=new qt(0,0,0),P=0,R=!1,N=null,L=null,G=null,C=null,U=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,K=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=K>=2);let A=null,W={},ht=s.getParameter(s.SCISSOR_BOX),wt=s.getParameter(s.VIEWPORT),X=new Fe().fromArray(ht),ot=new Fe().fromArray(wt);function _t(O,tt,j,Mt){let pt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(O,bt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<j;dt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(tt+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return bt}let Rt={};Rt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(s.DEPTH_TEST),o.setFunc(Xo),k(!1),xt(Mp),gt(s.CULL_FACE),lt(Ds);function gt(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Nt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function me(O,tt){return f[O]!==tt?(s.bindFramebuffer(O,tt),f[O]=tt,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=tt),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function Ut(O,tt){let j=p,Mt=!1;if(O){j=u.get(tt),j===void 0&&(j=[],u.set(tt,j));let pt=O.textures;if(j.length!==pt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,dt=pt.length;bt<dt;bt++)j[bt]=s.COLOR_ATTACHMENT0+bt;j.length=pt.length,Mt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,Mt=!0);Mt&&s.drawBuffers(j)}function at(O){return g!==O?(s.useProgram(O),g=O,!0):!1}let ct={[$r]:s.FUNC_ADD,[h_]:s.FUNC_SUBTRACT,[u_]:s.FUNC_REVERSE_SUBTRACT};ct[f_]=s.MIN,ct[d_]=s.MAX;let $={[p_]:s.ZERO,[m_]:s.ONE,[g_]:s.SRC_COLOR,[wp]:s.SRC_ALPHA,[M_]:s.SRC_ALPHA_SATURATE,[y_]:s.DST_COLOR,[x_]:s.DST_ALPHA,[__]:s.ONE_MINUS_SRC_COLOR,[Ep]:s.ONE_MINUS_SRC_ALPHA,[S_]:s.ONE_MINUS_DST_COLOR,[v_]:s.ONE_MINUS_DST_ALPHA,[b_]:s.CONSTANT_COLOR,[T_]:s.ONE_MINUS_CONSTANT_COLOR,[w_]:s.CONSTANT_ALPHA,[E_]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(O,tt,j,Mt,pt,bt,dt,Tt,rt,it){if(O===Ds){m===!0&&(Nt(s.BLEND),m=!1);return}if(m===!1&&(gt(s.BLEND),m=!0),O!==c_){if(O!==_||it!==R){if((v!==$r||b!==$r)&&(s.blendEquation(s.FUNC_ADD),v=$r,b=$r),it)switch(O){case aa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mr:s.blendFunc(s.ONE,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",O);break}else switch(O){case aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bp:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tp:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",O);break}S=null,y=null,w=null,x=null,M.set(0,0,0),P=0,_=O,R=it}return}pt=pt||tt,bt=bt||j,dt=dt||Mt,(tt!==v||pt!==b)&&(s.blendEquationSeparate(ct[tt],ct[pt]),v=tt,b=pt),(j!==S||Mt!==y||bt!==w||dt!==x)&&(s.blendFuncSeparate($[j],$[Mt],$[bt],$[dt]),S=j,y=Mt,w=bt,x=dt),(Tt.equals(M)===!1||rt!==P)&&(s.blendColor(Tt.r,Tt.g,Tt.b,rt),M.copy(Tt),P=rt),_=O,R=!1}function ut(O,tt){O.side===Nn?Nt(s.CULL_FACE):gt(s.CULL_FACE);let j=O.side===wi;tt&&(j=!j),k(j),O.blending===aa&&O.transparent===!1?lt(Ds):lt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Mt=O.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ot(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function k(O){N!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),N=O)}function xt(O){O!==o_?(gt(s.CULL_FACE),O!==L&&(O===Mp?s.cullFace(s.BACK):O===a_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),L=O}function Xt(O){O!==G&&(D&&s.lineWidth(O),G=O)}function Ot(O,tt,j){O?(gt(s.POLYGON_OFFSET_FILL),(C!==tt||U!==j)&&(C=tt,U=j,o.getReversed()&&(tt=-tt,j=-j),s.polygonOffset(tt,j))):Nt(s.POLYGON_OFFSET_FILL)}function Bt(O){O?gt(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function Kt(O){O===void 0&&(O=s.TEXTURE0+B-1),A!==O&&(s.activeTexture(O),A=O)}function se(O,tt,j){j===void 0&&(A===null?j=s.TEXTURE0+B-1:j=A);let Mt=W[j];Mt===void 0&&(Mt={type:void 0,texture:void 0},W[j]=Mt),(Mt.type!==O||Mt.texture!==tt)&&(A!==j&&(s.activeTexture(j),A=j),s.bindTexture(O,tt||Rt[O]),Mt.type=O,Mt.texture=tt)}function F(){let O=W[A];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function re(){try{s.compressedTexImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Jt(){try{s.compressedTexImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function $t(){try{s.texSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function yt(){try{s.texSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ge(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Yt(){try{s.texStorage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function I(){try{s.texStorage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function T(){try{s.texImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function q(){try{s.texImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ft(O){return d[O]!==void 0?d[O]:s.getParameter(O)}function st(O,tt){d[O]!==tt&&(s.pixelStorei(O,tt),d[O]=tt)}function St(O){X.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),X.copy(O))}function Et(O){ot.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ot.copy(O))}function Z(O,tt){let j=c.get(tt);j===void 0&&(j=new WeakMap,c.set(tt,j));let Mt=j.get(O);Mt===void 0&&(Mt=s.getUniformBlockIndex(tt,O.name),s.uniformBlockBinding(tt,Mt,Mt),j.set(O,Mt))}function et(O,tt,j){let pt=c.get(tt).get(O);l[pt]!==j&&(s.bindBufferBase(s.UNIFORM_BUFFER,pt,j),l[pt]=j)}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},A=null,W={},f={},l={},u=new WeakMap,p=[],g=null,m=!1,_=null,v=null,S=null,y=null,b=null,w=null,x=null,M=new qt(0,0,0),P=0,R=!1,N=null,L=null,G=null,C=null,U=null,X.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Nt,bindFramebuffer:me,drawBuffers:Ut,useProgram:at,setBlending:lt,setMaterial:ut,setFlipSided:k,setCullFace:xt,setLineWidth:Xt,setPolygonOffset:Ot,setScissorTest:Bt,activeTexture:Kt,bindTexture:se,unbindTexture:F,compressedTexImage2D:re,compressedTexImage3D:Jt,texImage2D:T,texImage3D:q,pixelStorei:st,getParameter:ft,updateUBOMapping:Z,uniformBlockBinding:et,texStorage2D:Yt,texStorage3D:I,texSubImage2D:$t,texSubImage3D:yt,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ht,scissor:St,viewport:Et,reset:vt}}function nE(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,g=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,T){return m?new OffscreenCanvas(I,T):qo("canvas")}function v(I,T,q){let ft=1,st=Yt(I);if((st.width>q||st.height>q)&&(ft=q/Math.max(st.width,st.height)),ft<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let St=Math.floor(ft*st.width),Et=Math.floor(ft*st.height);f===void 0&&(f=_(St,Et));let Z=T?_(St,Et):f;return Z.width=St,Z.height=Et,Z.getContext("2d").drawImage(I,0,0,St,Et),Zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+St+"x"+Et+")."),Z}else return"data"in I&&Zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function S(I){return I.generateMipmaps}function y(I){s.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(I,T,q,ft,st,St=!1){if(I!==null){if(s[I]!==void 0)return s[I];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Et;ft&&(Et=t.get("EXT_texture_norm16"),Et||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=T;if(T===s.RED&&(q===s.FLOAT&&(Z=s.R32F),q===s.HALF_FLOAT&&(Z=s.R16F),q===s.UNSIGNED_BYTE&&(Z=s.R8),q===s.UNSIGNED_SHORT&&Et&&(Z=Et.R16_EXT),q===s.SHORT&&Et&&(Z=Et.R16_SNORM_EXT)),T===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(Z=s.R8UI),q===s.UNSIGNED_SHORT&&(Z=s.R16UI),q===s.UNSIGNED_INT&&(Z=s.R32UI),q===s.BYTE&&(Z=s.R8I),q===s.SHORT&&(Z=s.R16I),q===s.INT&&(Z=s.R32I)),T===s.RG&&(q===s.FLOAT&&(Z=s.RG32F),q===s.HALF_FLOAT&&(Z=s.RG16F),q===s.UNSIGNED_BYTE&&(Z=s.RG8),q===s.UNSIGNED_SHORT&&Et&&(Z=Et.RG16_EXT),q===s.SHORT&&Et&&(Z=Et.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(Z=s.RG8UI),q===s.UNSIGNED_SHORT&&(Z=s.RG16UI),q===s.UNSIGNED_INT&&(Z=s.RG32UI),q===s.BYTE&&(Z=s.RG8I),q===s.SHORT&&(Z=s.RG16I),q===s.INT&&(Z=s.RG32I)),T===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),q===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),q===s.UNSIGNED_INT&&(Z=s.RGB32UI),q===s.BYTE&&(Z=s.RGB8I),q===s.SHORT&&(Z=s.RGB16I),q===s.INT&&(Z=s.RGB32I)),T===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),q===s.UNSIGNED_INT&&(Z=s.RGBA32UI),q===s.BYTE&&(Z=s.RGBA8I),q===s.SHORT&&(Z=s.RGBA16I),q===s.INT&&(Z=s.RGBA32I)),T===s.RGB&&(q===s.UNSIGNED_SHORT&&Et&&(Z=Et.RGB16_EXT),q===s.SHORT&&Et&&(Z=Et.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),T===s.RGBA){let et=St?xl:ue.getTransfer(st);q===s.FLOAT&&(Z=s.RGBA32F),q===s.HALF_FLOAT&&(Z=s.RGBA16F),q===s.UNSIGNED_BYTE&&(Z=et===ve?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Et&&(Z=Et.RGBA16_EXT),q===s.SHORT&&Et&&(Z=Et.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(I,T){let q;return I?T===null||T===Yn||T===to?q=s.DEPTH24_STENCIL8:T===Un?q=s.DEPTH32F_STENCIL8:T===ca&&(q=s.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yn||T===to?q=s.DEPTH_COMPONENT24:T===Un?q=s.DEPTH_COMPONENT32F:T===ca&&(q=s.DEPTH_COMPONENT16),q}function M(I,T){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==xi&&I.minFilter!==ci?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function P(I){let T=new WeakRef(I);i.get(I).__ref=T,p.add(T),g.register(I,T,T)}function R(I){let T=i.get(I).__ref;T!==void 0&&(p.delete(T),g.unregister(T))}function N(I){G(I.target)}function L(I){C(I.target)}function G(I){I.removeEventListener("dispose",N),R(I),B(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function C(I){I.removeEventListener("dispose",L),R(I),K(I)}function U(){for(let I of p){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?C(T):G(T))}p.clear(),d.clear()}function B(I){let T=i.get(I);if(T.__webglInit===void 0)return;let q=I.source,ft=u.get(q);if(ft){let st=ft[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(I),Object.keys(ft).length===0&&u.delete(q)}i.remove(I)}function D(I){let T=i.get(I);s.deleteTexture(T.__webglTexture);let q=I.source,ft=u.get(q);delete ft[T.__cacheKey],o.memory.textures--}function K(I){let T=i.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let q=I.depthTexture;if(q&&q.renderTarget===I&&G(q),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(T.__webglFramebuffer[st]))for(let St=0;St<T.__webglFramebuffer[st].length;St++)s.deleteFramebuffer(T.__webglFramebuffer[st][St]);else s.deleteFramebuffer(T.__webglFramebuffer[st]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[st])}else{if(Array.isArray(T.__webglFramebuffer))for(let st=0;st<T.__webglFramebuffer.length;st++)s.deleteFramebuffer(T.__webglFramebuffer[st]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let st=0;st<T.__webglColorRenderbuffer.length;st++)T.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[st]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ft=I.textures;for(let st=0,St=ft.length;st<St;st++){let Et=i.get(ft[st]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),o.memory.textures--),i.remove(ft[st])}i.remove(I)}let V=0;function A(){V=0}function W(){return V}function ht(I){V=I}function wt(){let I=V;return I>=n.maxTextures&&Zt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),V+=1,I}function X(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function ot(I,T){let q=i.get(I);if(I.isVideoTexture&&ge(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let ft=I.image;if(ft===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(q,I,T);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+T)}function _t(I,T){let q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){ut(q,I,T);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+T)}function Rt(I,T){let q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){ut(q,I,T);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+T)}function gt(I,T){let q=i.get(I);if(I.version>0&&q.__version!==I.version){k(q,I,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+T)}let Nt={[Kh]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[$h]:s.MIRRORED_REPEAT},me={[xi]:s.NEAREST,[C_]:s.NEAREST_MIPMAP_NEAREST,[sc]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[Ru]:s.LINEAR_MIPMAP_NEAREST,[Ns]:s.LINEAR_MIPMAP_LINEAR},Ut={[D_]:s.NEVER,[Op]:s.ALWAYS,[N_]:s.LESS,[Np]:s.LEQUAL,[U_]:s.EQUAL,[Up]:s.GEQUAL,[O_]:s.GREATER,[F_]:s.NOTEQUAL};function at(I,T){if(T.type===Un&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ci||T.magFilter===Ru||T.magFilter===sc||T.magFilter===Ns||T.minFilter===ci||T.minFilter===Ru||T.minFilter===sc||T.minFilter===Ns)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Nt[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Nt[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Nt[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,me[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,me[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==sc&&T.minFilter!==Ns||T.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ct(I,T){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",N),P(T));let ft=T.source,st=u.get(ft);st===void 0&&(st={},u.set(ft,st));let St=X(T);if(St!==I.__cacheKey){st[St]===void 0&&(st[St]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),st[St].usedTimes++;let Et=st[I.__cacheKey];Et!==void 0&&(st[I.__cacheKey].usedTimes--,Et.usedTimes===0&&D(T)),I.__cacheKey=St,I.__webglTexture=st[St].texture}return q}function $(I,T,q){return Math.floor(Math.floor(I/q)/T)}function lt(I,T,q,ft){let St=I.updateRanges;if(St.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,q,ft,T.data);else{St.sort((O,tt)=>O.start-tt.start);let Et=0;for(let O=1;O<St.length;O++){let tt=St[Et],j=St[O],Mt=tt.start+tt.count,pt=$(j.start,T.width,4),bt=$(tt.start,T.width,4);j.start<=Mt+1&&pt===bt&&$(j.start+j.count-1,T.width,4)===pt?tt.count=Math.max(tt.count,j.start+j.count-tt.start):(++Et,St[Et]=j)}St.length=Et+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let O=0,tt=St.length;O<tt;O++){let j=St[O],Mt=Math.floor(j.start/4),pt=Math.ceil(j.count/4),bt=Mt%T.width,dt=Math.floor(Mt/T.width),Tt=pt,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt),e.texSubImage2D(s.TEXTURE_2D,0,bt,dt,Tt,rt,q,ft,T.data)}I.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function ut(I,T,q){let ft=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=s.TEXTURE_3D);let st=ct(I,T),St=T.source;e.bindTexture(ft,I.__webglTexture,s.TEXTURE0+q);let Et=i.get(St);if(St.version!==Et.__version||st===!0){if(e.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let rt=ue.getPrimaries(ue.workingColorSpace),it=T.colorSpace===Os?null:ue.getPrimaries(T.colorSpace),At=T.colorSpace===Os||rt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let et=v(T.image,!1,n.maxTextureSize);et=Ht(T,et);let vt=r.convert(T.format,T.colorSpace),O=r.convert(T.type),tt=w(T.internalFormat,vt,O,T.normalized,T.colorSpace,T.isVideoTexture);at(ft,T);let j,Mt=T.mipmaps,pt=T.isVideoTexture!==!0,bt=Et.__version===void 0||st===!0,dt=St.dataReady,Tt=M(T,et);if(T.isDepthTexture)tt=x(T.format===Us,T.type),bt&&(pt?e.texStorage2D(s.TEXTURE_2D,1,tt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,tt,et.width,et.height,0,vt,O,null));else if(T.isDataTexture)if(Mt.length>0){pt&&bt&&e.texStorage2D(s.TEXTURE_2D,Tt,tt,Mt[0].width,Mt[0].height);for(let rt=0,it=Mt.length;rt<it;rt++)j=Mt[rt],pt?dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,vt,O,j.data):e.texImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,vt,O,j.data);T.generateMipmaps=!1}else pt?(bt&&e.texStorage2D(s.TEXTURE_2D,Tt,tt,et.width,et.height),dt&&lt(T,et,vt,O)):e.texImage2D(s.TEXTURE_2D,0,tt,et.width,et.height,0,vt,O,et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){pt&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,tt,Mt[0].width,Mt[0].height,et.depth);for(let rt=0,it=Mt.length;rt<it;rt++)if(j=Mt[rt],T.format!==qn)if(vt!==null)if(pt){if(dt)if(T.layerUpdates.size>0){let At=qp(j.width,j.height,T.format,T.type);for(let nt of T.layerUpdates){let Lt=j.data.subarray(nt*At/j.data.BYTES_PER_ELEMENT,(nt+1)*At/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,nt,j.width,j.height,1,vt,Lt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,j.width,j.height,et.depth,vt,j.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,tt,j.width,j.height,et.depth,0,j.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?dt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,j.width,j.height,et.depth,vt,O,j.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,tt,j.width,j.height,et.depth,0,vt,O,j.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{pt&&bt&&e.texStorage2D(s.TEXTURE_2D,Tt,tt,Mt[0].width,Mt[0].height);for(let rt=0,it=Mt.length;rt<it;rt++)j=Mt[rt],T.format!==qn?vt!==null?pt?dt&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,vt,j.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,j.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,vt,O,j.data):e.texImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,vt,O,j.data)}else if(T.isDataArrayTexture)if(pt){if(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,tt,et.width,et.height,et.depth),dt)if(T.layerUpdates.size>0){let rt=qp(et.width,et.height,T.format,T.type);for(let it of T.layerUpdates){let At=et.data.subarray(it*rt/et.data.BYTES_PER_ELEMENT,(it+1)*rt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,et.width,et.height,1,vt,O,At)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,O,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,et.width,et.height,et.depth,0,vt,O,et.data);else if(T.isData3DTexture)pt?(bt&&e.texStorage3D(s.TEXTURE_3D,Tt,tt,et.width,et.height,et.depth),dt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,O,et.data)):e.texImage3D(s.TEXTURE_3D,0,tt,et.width,et.height,et.depth,0,vt,O,et.data);else if(T.isFramebufferTexture){if(bt)if(pt)e.texStorage2D(s.TEXTURE_2D,Tt,tt,et.width,et.height);else{let rt=et.width,it=et.height;for(let At=0;At<Tt;At++)e.texImage2D(s.TEXTURE_2D,At,tt,rt,it,0,vt,O,null),rt>>=1,it>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),et.parentNode!==rt){rt.appendChild(et),d.add(T),rt.onpaint=it=>{let At=it.changedElements;for(let nt of d)At.includes(nt.image)&&(nt.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{let At=s.RGBA,nt=s.RGBA,Lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,At,nt,Lt,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(pt&&bt){let rt=Yt(Mt[0]);e.texStorage2D(s.TEXTURE_2D,Tt,tt,rt.width,rt.height)}for(let rt=0,it=Mt.length;rt<it;rt++)j=Mt[rt],pt?dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,vt,O,j):e.texImage2D(s.TEXTURE_2D,rt,tt,vt,O,j);T.generateMipmaps=!1}else if(pt){if(bt){let rt=Yt(et);e.texStorage2D(s.TEXTURE_2D,Tt,tt,rt.width,rt.height)}dt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,O,et)}else e.texImage2D(s.TEXTURE_2D,0,tt,vt,O,et);S(T)&&T.mipmapsAutoUpdate===!0&&y(ft),Et.__version=St.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function k(I,T,q){if(T.image.length!==6)return;let ft=ct(I,T),st=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+q);let St=i.get(st);if(st.version!==St.__version||ft===!0){e.activeTexture(s.TEXTURE0+q);let Et=ue.getPrimaries(ue.workingColorSpace),Z=T.colorSpace===Os?null:ue.getPrimaries(T.colorSpace),et=T.colorSpace===Os||Et===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let vt=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,tt=[];for(let nt=0;nt<6;nt++)!vt&&!O?tt[nt]=v(T.image[nt],!0,n.maxCubemapSize):tt[nt]=O?T.image[nt].image:T.image[nt],tt[nt]=Ht(T,tt[nt]);let j=tt[0],Mt=r.convert(T.format,T.colorSpace),pt=r.convert(T.type),bt=w(T.internalFormat,Mt,pt,T.normalized,T.colorSpace),dt=T.isVideoTexture!==!0,Tt=St.__version===void 0||ft===!0,rt=st.dataReady,it=M(T,j);at(s.TEXTURE_CUBE_MAP,T);let At;if(T.isDepthTexture){if(bt=x(T.format===Us,T.type),Tt)if(dt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,bt,j.width,j.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,bt,j.width,j.height,0,Mt,pt,null)}else if(vt){dt&&Tt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,bt,j.width,j.height);for(let nt=0;nt<6;nt++){At=tt[nt].mipmaps;for(let Lt=0;Lt<At.length;Lt++){let fe=At[Lt];T.format!==qn?Mt!==null?dt?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,0,0,fe.width,fe.height,Mt,fe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,bt,fe.width,fe.height,0,fe.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,0,0,fe.width,fe.height,Mt,pt,fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,bt,fe.width,fe.height,0,Mt,pt,fe.data)}}}else{if(At=T.mipmaps,dt&&Tt){At.length>0&&it++;let nt=Yt(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,bt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(O){dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,tt[nt].width,tt[nt].height,Mt,pt,tt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,bt,tt[nt].width,tt[nt].height,0,Mt,pt,tt[nt].data);for(let Lt=0;Lt<At.length;Lt++){let ee=At[Lt].image[nt].image;dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,0,0,ee.width,ee.height,Mt,pt,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,bt,ee.width,ee.height,0,Mt,pt,ee.data)}}else{dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Mt,pt,tt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,bt,Mt,pt,tt[nt]);for(let Lt=0;Lt<At.length;Lt++){let fe=At[Lt];dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,0,0,Mt,pt,fe.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,bt,Mt,pt,fe.image[nt])}}}S(T)&&T.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),St.__version=st.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function xt(I,T,q,ft,st,St){let Et=r.convert(q.format,q.colorSpace),Z=r.convert(q.type),et=w(q.internalFormat,Et,Z,q.normalized,q.colorSpace),vt=i.get(T),O=i.get(q);if(O.__renderTarget=T,!vt.__hasExternalTextures){let tt=Math.max(1,T.width>>St),j=Math.max(1,T.height>>St);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,St,et,tt,j,T.depth,0,Et,Z,null):e.texImage2D(st,St,et,tt,j,0,Et,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),yt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,st,O.__webglTexture,0,$t(T)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,st,O.__webglTexture,St),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(I,T,q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){let ft=T.depthTexture,st=ft&&ft.isDepthTexture?ft.type:null,St=x(T.stencilBuffer,st),Et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;yt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(T),St,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(T),St,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,St,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,I)}else{let ft=T.textures;for(let st=0;st<ft.length;st++){let St=ft[st],Et=r.convert(St.format,St.colorSpace),Z=r.convert(St.type),et=w(St.internalFormat,Et,Z,St.normalized,St.colorSpace);yt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(T),et,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(T),et,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,et,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(I,T,q){let ft=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(T.depthTexture);st.__renderTarget=T;let St=ft?T.depthTexture.image[0]:T.depthTexture.image;(!st.__webglTexture||St.width!==T.width||St.height!==T.height)&&(St.width=T.width,St.height=T.height,T.depthTexture.needsUpdate=!0),ft?gt(T.depthTexture,0):ot(T.depthTexture,0);let Et=st.__webglTexture,Z=$t(T),et=ft?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,vt=T.depthTexture.format===Us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Rs)yt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,et,Et,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,vt,et,Et,0);else if(T.depthTexture.format===Us)yt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,et,Et,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,vt,et,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(I){let T=i.get(I),q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let ft=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){let st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",st)};ft.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=ft}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let ft=0;ft<6;ft++)Ot(T.__webglFramebuffer[ft],I,ft);else I.texture.mipmaps.length>0?Ot(T.__webglFramebuffer[0],I,0):Ot(T.__webglFramebuffer,I,0);else if(q){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=s.createRenderbuffer(),Xt(T.__webglDepthbuffer[ft],I,!1);else{let st=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,St)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Xt(T.__webglDepthbuffer,I,!1);else{let st=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,St)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(I,T,q){let ft=i.get(I);T!==void 0&&xt(ft.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Bt(I)}function se(I){let T=I.texture,q=i.get(I),ft=i.get(T);I.addEventListener("dispose",L),P(I);let st=I.textures,St=I.isWebGLCubeRenderTarget===!0,Et=st.length>1;if(Et||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=T.version,o.memory.textures++),St){q.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(T.mipmaps.length>0){q.__webglFramebuffer[Z]=[];for(let et=0;et<T.mipmaps.length;et++)q.__webglFramebuffer[Z][et]=s.createFramebuffer()}else q.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Z=0;Z<T.mipmaps.length;Z++)q.__webglFramebuffer[Z]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Et)for(let Z=0,et=st.length;Z<et;Z++){let vt=i.get(st[Z]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&yt(I)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Z=0;Z<st.length;Z++){let et=st[Z];q.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Z]);let vt=r.convert(et.format,et.colorSpace),O=r.convert(et.type),tt=w(et.internalFormat,vt,O,et.normalized,et.colorSpace,I.isXRRenderTarget===!0),j=$t(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,j,tt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,q.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(St){e.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),at(s.TEXTURE_CUBE_MAP,T);for(let Z=0;Z<6;Z++)if(T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)xt(q.__webglFramebuffer[Z][et],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et);else xt(q.__webglFramebuffer[Z],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);S(T)?y(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let Z=0,et=st.length;Z<et;Z++){let vt=st[Z],O=i.get(vt),tt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(tt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,O.__webglTexture),at(tt,vt),xt(q.__webglFramebuffer,I,vt,s.COLOR_ATTACHMENT0+Z,tt,0),S(vt)&&y(tt)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Z=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,ft.__webglTexture),at(Z,T),T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)xt(q.__webglFramebuffer[et],I,T,s.COLOR_ATTACHMENT0,Z,et);else xt(q.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,Z,0);S(T)?y(Z):T.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&Bt(I)}function F(I){let T=I.textures;for(let q=0,ft=T.length;q<ft;q++){let st=T[q];if(S(st)&&st.mipmapsAutoUpdate===!0){let St=b(I),Et=i.get(st).__webglTexture;e.bindTexture(St,Et),y(St),e.unbindTexture()}}}let re=[];function Jt(I){if(I.samples>0){if(yt(I)===!1){let T=I.textures,q=I.width,ft=I.height,st=s.COLOR_BUFFER_BIT,St=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=i.get(I),Z=T.length>1;if(Z)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);let O=i.get(T[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,q,ft,0,0,q,ft,st,s.NEAREST),l===!0&&(re.length=0,re.push(s.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&re.push(St),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);let O=i.get(T[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,O,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function $t(I){return Math.min(n.maxSamples,I.samples)}function yt(I){let T=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ge(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Ht(I,T){let q=I.colorSpace,ft=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==_l&&q!==Os&&(ue.getTransfer(q)===ve?(ft!==qn||st!==rn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",q)),T}function Yt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=wt,this.resetTextureUnits=A,this.getTextureUnits=W,this.setTextureUnits=ht,this.setTexture2D=ot,this.setTexture2DArray=_t,this.setTexture3D=Rt,this.setTextureCube=gt,this.rebindTextures=Kt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=yt,this.dispose=U}function sE(s,t){function e(i,n=Os){let r,o=ue.getTransfer(n);if(i===rn)return s.UNSIGNED_BYTE;if(i===Pu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Iu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Pp)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ip)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rp)return s.BYTE;if(i===Cp)return s.SHORT;if(i===ca)return s.UNSIGNED_SHORT;if(i===Cu)return s.INT;if(i===Yn)return s.UNSIGNED_INT;if(i===Un)return s.FLOAT;if(i===ui)return s.HALF_FLOAT;if(i===Lp)return s.ALPHA;if(i===Dp)return s.RGB;if(i===qn)return s.RGBA;if(i===Rs)return s.DEPTH_COMPONENT;if(i===Us)return s.DEPTH_STENCIL;if(i===Lu)return s.RED;if(i===Du)return s.RED_INTEGER;if(i===gr)return s.RG;if(i===Nu)return s.RG_INTEGER;if(i===Uu)return s.RGBA_INTEGER;if(i===rc||i===oc||i===ac||i===lc)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===rc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ou||i===Fu||i===Bu||i===zu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ku||i===Hu||i===Gu||i===Vu||i===Wu||i===cc||i===Xu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ku||i===Hu)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vu)return r.COMPRESSED_R11_EAC;if(i===Wu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cc)return r.COMPRESSED_RG11_EAC;if(i===Xu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yu||i===qu||i===Zu||i===Ju||i===Ku||i===$u||i===Qu||i===ju||i===tf||i===ef||i===nf||i===sf||i===rf||i===of)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ju)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ku)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$u)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ju)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ef)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sf)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rf)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===of)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===af||i===lf||i===cf)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===af)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hf||i===uf||i===hc||i===ff)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===hf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ff)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var rE=`
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

}`,am=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Il(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ze({vertexShader:rE,fragmentShader:oE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lm=class extends ns{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,g=typeof XRWebGLBinding<"u",m=new am,_={},v=e.getContextAttributes(),S=null,y=null,b=[],w=[],x=new mt,M=null,P=null,R=new zi;R.viewport=new Fe;let N=new zi;N.viewport=new Fe;let L=[R,N],G=new bu,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ot=b[X];return ot===void 0&&(ot=new $o,b[X]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(X){let ot=b[X];return ot===void 0&&(ot=new $o,b[X]=ot),ot.getGripSpace()},this.getHand=function(X){let ot=b[X];return ot===void 0&&(ot=new $o,b[X]=ot),ot.getHandSpace()};function B(X){let ot=w.indexOf(X.inputSource);if(ot===-1)return;let _t=b[ot];_t!==void 0&&(_t.update(X.inputSource,X.frame,c||o),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function D(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",D),n.removeEventListener("inputsourceschange",K);for(let X=0;X<b.length;X++){let ot=w[X];ot!==null&&(w[X]=null,b[X].disconnect(ot))}C=null,U=null,m.reset();for(let X in _)delete _[X];if(t.setRenderTarget(S),u=null,f=null,d=null,n=null,y=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),P!==null){let X=P.camera;X.fov=P.fov,X.zoom=P.zoom,X.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(S=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",D),n.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Rt=null,gt=null;v.depth&&(gt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?Us:Rs,Rt=v.stencil?to:Yn);let Nt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Nt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ke(f.textureWidth,f.textureHeight,{format:qn,type:rn,depthTexture:new Ps(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,e,_t),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ke(u.framebufferWidth,u.framebufferHeight,{format:qn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),wt.setContext(n),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(X){for(let ot=0;ot<X.removed.length;ot++){let _t=X.removed[ot],Rt=w.indexOf(_t);Rt>=0&&(w[Rt]=null,b[Rt].disconnect(_t))}for(let ot=0;ot<X.added.length;ot++){let _t=X.added[ot],Rt=w.indexOf(_t);if(Rt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=w.length){w.push(_t),Rt=Nt;break}else if(w[Nt]===null){w[Nt]=_t,Rt=Nt;break}if(Rt===-1)break}let gt=b[Rt];gt&&gt.connect(_t)}}function V(X,ot){ot===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ot.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let ot=X.near,_t=X.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),G.near=N.near=R.near=ot,G.far=N.far=R.far=_t,(C!==G.near||U!==G.far)&&(n.updateRenderState({depthNear:G.near,depthFar:G.far}),C=G.near,U=G.far),G.layers.mask=X.layers.mask|6,R.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let Rt=X.parent,gt=G.cameras;V(G,Rt);for(let Nt=0;Nt<gt.length;Nt++)V(gt[Nt],Rt);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&X.isPerspectiveCamera&&(P={camera:X,fov:X.fov,zoom:X.zoom}),A(X,G,Rt)};function A(X,ot,_t){_t===null?X.matrix.copy(ot.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(ot.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Jo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(X){return _[X]};let W=null;function ht(X,ot){if(h=ot.getViewerPose(c||o),p=ot,h!==null){let _t=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Rt=!1;_t.length!==G.cameras.length&&(G.cameras.length=0,Rt=!0);for(let Ut=0;Ut<_t.length;Ut++){let at=_t[Ut],ct=null;if(u!==null)ct=u.getViewport(at);else{let lt=d.getViewSubImage(f,at);ct=lt.viewport,Ut===0&&(t.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(y))}let $=L[Ut];$===void 0&&($=new zi,$.layers.enable(Ut),$.viewport=new Fe,L[Ut]=$),$.matrix.fromArray(at.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(at.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ct.x,ct.y,ct.width,ct.height),Ut===0&&(G.matrix.copy($.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Rt===!0&&G.cameras.push($)}let gt=n.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Ut=d.getDepthInformation(_t[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,n.renderState)}if(gt&&gt.includes("camera-access")&&g){t.state.unbindTexture(),d=i.getBinding();for(let Ut=0;Ut<_t.length;Ut++){let at=_t[Ut].camera;if(at){let ct=_[at];ct||(ct=new Il,_[at]=ct);let $=d.getCameraImage(at);ct.sourceTexture=$}}}}for(let _t=0;_t<b.length;_t++){let Rt=w[_t],gt=b[_t];Rt!==null&&gt!==void 0&&gt.update(Rt,ot,c||o)}W&&W(X,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),p=null}let wt=new vx;wt.setAnimationLoop(ht),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}},aE=new Se,Cx=new te;Cx.set(-1,0,0,0,1,0,0,0,1);function lE(s,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function i(m,_){_.color.getRGB(m.fogColor.value,Wp(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function n(m,_,v,S,y){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),d(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),f(m,_),_.isMeshPhysicalMaterial&&u(m,_,y)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),g(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,v,S):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===wi&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===wi&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let v=t.get(_),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(aE.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cx),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,S){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=S*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function f(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function u(m,_,v){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===wi&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){let v=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function cE(s,t,e,i){let n={},r={};function o(v,S){let y=S.program;i.uniformBlockBinding(v,y,n[v.id])}function a(v,S){let y=n[v.id];y===void 0&&(p(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",m));let b=S.program;i.updateUBOMapping(v,b);let w=t.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let S=s.createBuffer(),y=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(v){let S=n[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,x=y.length;w<x;w++){let M=y[w];if(Array.isArray(M))for(let P=0,R=M.length;P<R;P++)h(M[P],w,P,b);else h(M,w,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,S,y,b){if(f(v,S,y,b)===!0){let w=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let R=x[P],N=g(R,!0);d(R,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}function d(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function f(v,S,y,b){let w=v.value,x=S+"_"+y;if(Array.isArray(w)){b[x]===void 0&&(b[x]=[]);let M=b[x],P=!1;for(let R=0;R<w.length;R++)u(w[R],M,R)===!0&&(P=!0);return P}return u(w,b,x)}function u(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{let b=S[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){let S=v.uniforms,y=0,b=16;for(let x=0,M=S.length;x<M;x++){let P=Array.isArray(S[x])?S[x]:[S[x]];for(let R=0,N=P.length;R<N;R++){let L=P[R],G=Array.isArray(L.value)?L.value:[L.value],C=Array.isArray(S[x])||Array.isArray(L.value),U=y;for(let D=0,K=G.length;D<K;D++){let V=G[D],A=g(V,C),W=y%b,ht=W%A.boundary,wt=W+ht;y+=ht,wt!==0&&b-wt<A.storage&&(y+=b-wt),D===0&&(U=y),y+=A.storage}let B=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new B((y-U)/Float32Array.BYTES_PER_ELEMENT),L.__offset=U}}let w=y%b;return w>0&&(y+=b-w),v.__size=y,v.__cache={},this}function g(v,S){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let S=v.target;S.removeEventListener("dispose",m),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function _(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:o,update:a,dispose:_}}var hE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ls=null;function uE(){return ls===null&&(ls=new Xr(hE,16,16,gr,ui),ls.name="DFG_LUT",ls.minFilter=ci,ls.magFilter=ci,ls.wrapS=es,ls.wrapT=es,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}var mf=class{constructor(t={}){let{canvas:e=z_(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=rn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=u,m=new Set([Uu,Nu,Du]),_=new Set([rn,Yn,ca,to,Pu,Iu]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,w=null,x=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,L=null,G=null,C=null,U=null;this._outputColorSpace=bi;let B=0,D=0,K=null,V=-1,A=null,W=new Fe,ht=new Fe,wt=null,X=new qt(0),ot=0,_t=e.width,Rt=e.height,gt=1,Nt=null,me=null,Ut=new Fe(0,0,_t,Rt),at=new Fe(0,0,_t,Rt),ct=!1,$=new lr,lt=new iu,ut=!1,k=!1,xt=new Se,Xt=new H,Ot=new Fe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function se(){return K===null?gt:1}let F=i;function re(E,z){return e.getContext(E,z)}let Jt,$t,yt,ge,Ht,Yt,I,T,q,ft,st,St,Et,Z,et,vt,O,tt,j,Mt,pt,bt,dt;try{let E={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",nt,!1),F===null){let z="webgl2";if(F=re(z,E),F===null)throw re(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(E){throw e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Qt("WebGLRenderer: "+E.message),E}function Tt(){Jt=new M1(F),Jt.init(),pt=new sE(F,Jt),$t=new u1(F,Jt,t,pt),yt=new iE(F,Jt),$t.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),G=F.createFramebuffer(),C=F.createFramebuffer(),U=F.createFramebuffer(),ge=new w1(F),Ht=new Gw,Yt=new nE(F,Jt,yt,Ht,$t,pt,ge),I=new S1(R),T=new AM(F),bt=new c1(F,T),q=new b1(F,T,ge,bt),ft=new A1(F,q,T,bt,ge),tt=new E1(F,$t,Yt),et=new f1(Ht),st=new Hw(R,I,Jt,$t,bt,et),St=new lE(R,Ht),Et=new Ww,Z=new Kw(Jt),O=new l1(R,I,yt,ft,p,l),vt=new eE(R,ft,$t),dt=new cE(F,ge,$t,yt),j=new h1(F,Jt,ge),Mt=new T1(F,Jt,ge),ge.programs=st.programs,R.capabilities=$t,R.extensions=Jt,R.properties=Ht,R.renderLists=Et,R.shadowMap=vt,R.state=yt,R.info=ge}g!==rn&&(P=new C1(g,e.width,e.height,a,n,r));let rt=new lm(R,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(E){E!==void 0&&(gt=E,this.setSize(_t,Rt,!1))},this.getSize=function(E){return E.set(_t,Rt)},this.setSize=function(E,z,Q=!0){if(rt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=E,Rt=z,e.width=Math.floor(E*gt),e.height=Math.floor(z*gt),Q===!0&&(e.style.width=E+"px",e.style.height=z+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(_t*gt,Rt*gt).floor()},this.setDrawingBufferSize=function(E,z,Q){_t=E,Rt=z,gt=Q,e.width=Math.floor(E*Q),e.height=Math.floor(z*Q),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(g===rn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(Ut)},this.setViewport=function(E,z,Q,Y){E.isVector4?Ut.set(E.x,E.y,E.z,E.w):Ut.set(E,z,Q,Y),yt.viewport(W.copy(Ut).multiplyScalar(se()).round())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,z,Q,Y){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,z,Q,Y),yt.scissor(ht.copy(at).multiplyScalar(se()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(E){yt.setScissorTest(ct=E)},this.setOpaqueSort=function(E){Nt=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Q=!0){let Y=0;if(E){let J=!1;if(K!==null){let Pt=K.texture.format;J=m.has(Pt)}if(J){let Pt=K.texture.type,kt=_.has(Pt),Ct=O.getClearColor(),Dt=O.getClearAlpha(),Wt=Ct.r,ie=Ct.g,de=Ct.b;kt?(v[0]=Wt,v[1]=ie,v[2]=de,v[3]=Dt,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=Wt,S[1]=ie,S[2]=de,S[3]=Dt,F.clearBufferiv(F.COLOR,0,S))}else Y|=F.COLOR_BUFFER_BIT}z&&(Y|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),O.dispose(),Et.dispose(),Z.dispose(),Yt.dispose(),Ht.dispose(),I.dispose(),ft.dispose(),q.dispose(),bt.dispose(),dt.dispose(),st.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Re),rt.removeEventListener("sessionend",Me),si.stop()};function it(E){E.preventDefault(),Bp("WebGLRenderer: Context Lost."),N=!0}function At(){Bp("WebGLRenderer: Context Restored."),N=!1;let E=ge.autoReset,z=vt.enabled,Q=vt.autoUpdate,Y=vt.needsUpdate,J=vt.type;Tt(),ge.autoReset=E,vt.enabled=z,vt.autoUpdate=Q,vt.needsUpdate=Y,vt.type=J}function nt(E){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){let z=E.target;z.removeEventListener("dispose",Lt),fe(z)}function fe(E){ee(E),Ht.remove(E)}function ee(E){let z=Ht.get(E).programs;z!==void 0&&(z.forEach(function(Q){st.releaseProgram(Q)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Q,Y,J,Pt){z===null&&(z=Bt);let kt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ct=Tn(E,z,Q,Y,J);yt.setMaterial(Y,kt);let Dt=Q.index,Wt=1;if(Y.wireframe===!0){if(Dt=q.getWireframeAttribute(Q),Dt===void 0)return;Wt=2}let ie=Q.drawRange,de=Q.attributes.position,Gt=ie.start*Wt,pe=(ie.start+ie.count)*Wt;Pt!==null&&(Gt=Math.max(Gt,Pt.start*Wt),pe=Math.min(pe,(Pt.start+Pt.count)*Wt)),Dt!==null?(Gt=Math.max(Gt,0),pe=Math.min(pe,Dt.count)):de!=null&&(Gt=Math.max(Gt,0),pe=Math.min(pe,de.count));let ti=pe-Gt;if(ti<0||ti===1/0)return;bt.setup(J,Y,Ct,Q,Dt);let Le,Pe=j;if(Dt!==null&&(Le=T.get(Dt),Pe=Mt,Pe.setIndex(Le)),J.isMesh)Y.wireframe===!0?(yt.setLineWidth(Y.wireframeLinewidth*se()),Pe.setMode(F.LINES)):Pe.setMode(F.TRIANGLES);else if(J.isLine){let Ri=Y.linewidth;Ri===void 0&&(Ri=1),yt.setLineWidth(Ri*se()),J.isLineSegments?Pe.setMode(F.LINES):J.isLineLoop?Pe.setMode(F.LINE_LOOP):Pe.setMode(F.LINE_STRIP)}else J.isPoints?Pe.setMode(F.POINTS):J.isSprite&&Pe.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Ri=J._multiDrawStarts,Vt=J._multiDrawCounts,Hi=J._multiDrawCount,ye=Dt?T.get(Dt).bytesPerElement:1,xr=Ht.get(Y).currentProgram.getUniforms();for(let Ci=0;Ci<Hi;Ci++)xr.setValue(F,"_gl_DrawID",Ci),Pe.render(Ri[Ci]/ye,Vt[Ci])}else if(J.isInstancedMesh)Pe.renderInstances(Gt,ti,J.count);else if(Q.isInstancedBufferGeometry){let Ri=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Vt=Math.min(Q.instanceCount,Ri);Pe.renderInstances(Gt,ti,Vt)}else Pe.render(Gt,ti)};function Ne(E,z,Q,Y){L!==null&&E.isNodeMaterial&&L.setObject(Y,E),ut===!0&&et.setState(E,Q,!1),E.transparent===!0&&E.side===Nn&&E.forceSinglePass===!1?(E.side=wi,E.needsUpdate=!0,an(E,z,Y),E.side=pr,E.needsUpdate=!0,an(E,z,Y),E.side=Nn):an(E,z,Y)}this.compile=function(E,z,Q=null){Q===null&&(Q=E),L!==null&&L.renderStart(E,z,Q),w=Z.get(Q),w.init(z),M.push(w),Q.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),E!==Q&&E.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),k=this.localClippingEnabled,ut=et.init(this.clippingPlanes,k),ut===!0&&et.setGlobalState(this.clippingPlanes,z),L!==null&&vt.render(w.state.shadowsArray,Q,z);let Y=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Pt=J.material;if(Pt)if(Array.isArray(Pt))for(let kt=0;kt<Pt.length;kt++){let Ct=Pt[kt];Ne(Ct,Q,z,J),Y.add(Ct)}else Ne(Pt,Q,z,J),Y.add(Pt)}),w=M.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(E,z,Q=null){let Y=this.compile(E,z,Q);return new Promise(J=>{function Pt(){if(Y.forEach(function(kt){let Dt=Ht.get(kt).currentProgram;(Dt===void 0||Dt.isReady())&&Y.delete(kt)}),Y.size===0){J(E);return}setTimeout(Pt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Qe=null;function Ue(E){Qe&&Qe(E)}function Re(){si.stop()}function Me(){si.start()}let si=new vx;si.setAnimationLoop(Ue),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(E){Qe=E,rt.setAnimationLoop(E),E===null?si.stop():si.start()},rt.addEventListener("sessionstart",Re),rt.addEventListener("sessionend",Me),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(E,z);let Q=rt.enabled===!0&&rt.isPresenting===!0,Y=P!==null&&(K===null||Q)&&P.begin(R,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(z),z=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,z,K),w=Z.get(E,M.length),w.init(z),w.state.textureUnits=Yt.getTextureUnits(),M.push(w),xt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?lt.setFromArrayCamera(z):$.setFromProjectionMatrix(xt,Ln,z.reversedDepth),k=this.localClippingEnabled,ut=et.init(this.clippingPlanes,k),b=Et.get(E,x.length),b.init(),x.push(b),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let kt=R.xr.getDepthSensingMesh();kt!==null&&Ce(kt,z,-1/0,R.sortObjects)}Ce(E,z,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(w.state.lightsArray),R.sortObjects===!0&&b.sort(Nt,me),Kt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Kt&&O.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),ut===!0&&et.beginShadows();let J=w.state.shadowsArray;if(vt.render(J,E,z),ut===!0&&et.endShadows(),(Y&&P.hasRenderPass())===!1){let kt=b.opaque,Ct=b.transmissive;if(w.setupLights(),z.isArrayCamera){let Dt=z.cameras;if(Ct.length>0)for(let Wt=0,ie=Dt.length;Wt<ie;Wt++){let de=Dt[Wt];on(kt,Ct,E,de)}Kt&&O.render(E);for(let Wt=0,ie=Dt.length;Wt<ie;Wt++){let de=Dt[Wt];Ai(b,E,de,de.viewport)}}else Ct.length>0&&on(kt,Ct,E,z),Kt&&O.render(E),Ai(b,E,z)}K!==null&&D===0&&(Yt.updateMultisampleRenderTarget(K),Yt.updateRenderTargetMipmap(K)),Y&&P.end(R),E.isScene===!0&&E.onAfterRender(R,E,z),bt.resetDefaultState(),V=-1,A=null,M.pop(),M.length>0?(w=M[M.length-1],Yt.setTextureUnits(w.state.textureUnits),ut===!0&&et.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,L!==null&&L.renderEnd()};function Ce(E,z,Q,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let kt=z.isArrayCamera?lt:$;if(!E.frustumCulled||E.intersectsFrustum(kt)){Y&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);let Ct=ft.update(E),Dt=E.material;Dt.visible&&b.push(E,Ct,Dt,Q,Ot.z,null,z)}}else if(E.isMesh||E.isLine||E.isPoints){let kt=z.isArrayCamera?lt:$;if(!E.frustumCulled||E.intersectsFrustum(kt)){let Ct=ft.update(E),Dt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ot.copy(Ct.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(Dt)){let Wt=Ct.groups;for(let ie=0,de=Wt.length;ie<de;ie++){let Gt=Wt[ie],pe=Dt[Gt.materialIndex];pe&&pe.visible&&b.push(E,Ct,pe,Q,Ot.z,Gt,z)}}else Dt.visible&&b.push(E,Ct,Dt,Q,Ot.z,null,z)}}}let Pt=E.children;for(let kt=0,Ct=Pt.length;kt<Ct;kt++)Ce(Pt[kt],z,Q,Y)}function Ai(E,z,Q,Y){let{opaque:J,transmissive:Pt,transparent:kt}=E;w.setupLightsView(Q),ut===!0&&et.setGlobalState(R.clippingPlanes,Q),Y&&yt.viewport(W.copy(Y)),J.length>0&&Ve(J,z,Q),Pt.length>0&&Ve(Pt,z,Q),kt.length>0&&Ve(kt,z,Q),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function on(E,z,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Gt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Ke(1,1,{generateMipmaps:!0,type:Gt?ui:rn,minFilter:Ns,samples:Math.max(4,$t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Pt=w.state.transmissionRenderTarget[Y.id],kt=Y.viewport||W;Pt.setSize(kt.z*R.transmissionResolutionScale,kt.w*R.transmissionResolutionScale);let Ct=R.getRenderTarget(),Dt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Pt),R.getClearColor(X),ot=R.getClearAlpha(),ot<1&&R.setClearColor(16777215,.5),R.clear(),Kt&&O.render(Q);let ie=R.toneMapping;R.toneMapping=as;let de=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),ut===!0&&et.setGlobalState(R.clippingPlanes,Y),Ve(E,Q,Y),Yt.updateMultisampleRenderTarget(Pt),Yt.updateRenderTargetMipmap(Pt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let pe=0,ti=z.length;pe<ti;pe++){let Le=z[pe],{object:Pe,geometry:Ri,material:Vt,group:Hi}=Le;if(Vt.side===Nn&&Pe.layers.test(Y.layers)){let ye=Vt.side;Vt.side=wi,Vt.needsUpdate=!0,je(Pe,Q,Y,Ri,Vt,Hi),Vt.side=ye,Vt.needsUpdate=!0,Gt=!0}}Gt===!0&&(Yt.updateMultisampleRenderTarget(Pt),Yt.updateRenderTargetMipmap(Pt))}R.setRenderTarget(Ct,Dt,Wt),R.setClearColor(X,ot),de!==void 0&&(Y.viewport=de),R.toneMapping=ie}function Ve(E,z,Q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Pt=E.length;J<Pt;J++){let kt=E[J],{object:Ct,geometry:Dt,group:Wt}=kt,ie=kt.material;ie.allowOverride===!0&&Y!==null&&(ie=Y),Ct.layers.test(Q.layers)&&je(Ct,z,Q,Dt,ie,Wt)}}function je(E,z,Q,Y,J,Pt){L!==null&&J.isNodeMaterial&&L.setObject(E,J),E.onBeforeRender(R,z,Q,Y,J,Pt),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(R,z,Q,Y,E,Pt),J.transparent===!0&&J.side===Nn&&J.forceSinglePass===!1?(J.side=wi,J.needsUpdate=!0,R.renderBufferDirect(Q,z,Y,J,E,Pt),J.side=pr,J.needsUpdate=!0,R.renderBufferDirect(Q,z,Y,J,E,Pt),J.side=Nn):R.renderBufferDirect(Q,z,Y,J,E,Pt),E.onAfterRender(R,z,Q,Y,J,Pt)}function ri(E){let z=0;for(let Q of E)Q.texture!==null&&z++;return z}function an(E,z,Q){z.isScene!==!0&&(z=Bt);let Y=Ht.get(E),J=w.state.lights,Pt=w.state.shadowsArray,kt=J.state.version,Ct=st.getParameters(E,J.state,Pt,z,Q,w.state.lightProbeGridArray),Dt=st.getProgramCacheKey(Ct),Wt=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=I.get(E.envMap||Y.environment,ie),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",Lt),Wt=new Map,Y.programs=Wt,Y.programVariants=new Map);let de=Wt.get(Dt);if(de!==void 0){if(Y.currentProgram===de&&Y.lightsStateVersion===kt)return We(E,Ct),de}else Ct.uniforms=st.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Q,Ct),E.onBeforeCompile(Ct,R),de=st.acquireProgram(Ct,Dt),Wt.set(Dt,de),Y.uniforms=Ct.uniforms;let Gt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Gt.clippingPlanes=et.uniform),We(E,Ct),Y.needsLights=Mc(E),Y.lightsStateVersion=kt,Y.needsLights&&(Gt.ambientLightColor.value=J.state.ambient,Gt.lightProbe.value=J.state.probe,Gt.sunLights.value=J.state.sun,Gt.sunLightShadows.value=J.state.sunShadow,Gt.directionalLights.value=J.state.directional,Gt.directionalLightShadows.value=J.state.directionalShadow,Gt.spotLights.value=J.state.spot,Gt.spotLightShadows.value=J.state.spotShadow,Gt.rectAreaLights.value=J.state.rectArea,Gt.ltc_1.value=J.state.rectAreaLTC1,Gt.ltc_2.value=J.state.rectAreaLTC2,Gt.pointLights.value=J.state.point,Gt.pointLightShadows.value=J.state.pointShadow,Gt.hemisphereLights.value=J.state.hemi,Gt.sunShadowMatrix.value=J.state.sunShadowMatrix,Gt.sunShadowCascade.value=J.state.sunShadowCascade,Gt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Gt.spotLightMatrix.value=J.state.spotLightMatrix,Gt.spotLightMap.value=J.state.spotLightMap,Gt.pointShadowMatrix.value=J.state.pointShadowMatrix),Y.numLightProbeGrids=ri(w.state.lightProbeGridArray),Y.currentProgram=de,Y.uniformsList=null,de}function so(E,z,Q,Y,J){let Pt=Ht.get(E),kt=Pt.currentProgram.id+","+Y+","+J,Ct=Pt.programVariants.get(kt);return Ct===void 0?(Ct=an(E,z,Q),Pt.programVariants.set(kt,Ct)):(Pt.currentProgram=Ct,Pt.uniformsList=null,Pt.outputColorSpace=Y,Pt.toneMapping=J),Ct}function oi(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=ha.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function We(E,z){let Q=Ht.get(E);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function Tn(E,z,Q,Y,J){z.isScene!==!0&&(z=Bt),Yt.resetTextureUnits();let Pt=z.fog,kt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Ct=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ue.workingColorSpace,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=I.get(Y.envMap||kt,Dt),ie=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,de=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Gt=!!Q.morphAttributes.position,pe=!!Q.morphAttributes.normal,ti=!!Q.morphAttributes.color,Le=as;Y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=R.toneMapping);let Pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ri=Pe!==void 0?Pe.length:0,Vt=Ht.get(Y),Hi=w.state.lights;if(ut===!0&&(k===!0||E!==A)){let Be=E===A&&Y.id===V;et.setState(Y,E,Be)}let ye=!1,xr=!1;Y.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==Hi.state.version||J.isBatchedMesh&&Vt.batching===!1||!J.isBatchedMesh&&Vt.batching===!0||J.isBatchedMesh&&Vt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Vt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Vt.instancing===!1||!J.isInstancedMesh&&Vt.instancing===!0||J.isSkinnedMesh&&Vt.skinning===!1||!J.isSkinnedMesh&&Vt.skinning===!0||J.isInstancedMesh&&Vt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Vt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Vt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Vt.instancingMorph===!1&&J.morphTexture!==null||Vt.envMap!==Wt||Y.fog===!0&&Vt.fog!==Pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==et.numPlanes||Vt.numIntersection!==et.numIntersection)||Vt.vertexAlphas!==ie||Vt.vertexTangents!==de||Vt.morphTargets!==Gt||Vt.morphNormals!==pe||Vt.morphColors!==ti||Vt.morphTargetsCount!==Ri||Vt.numLightProbeGrids!==ri(w.state.lightProbeGridArray)?ye=!0:(Vt.outputColorSpace!==Ct||Vt.toneMapping!==Le)&&(xr=!0):(ye=!0,Vt.__version=Y.version);let Ci=Vt.currentProgram;(ye===!0||xr===!0)&&(Ci=xr===!0?so(Y,z,J,Ct,Le):an(Y,z,J),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,Ci,Vt));let bc=!1,Hs=!1,vr=!1,xe=Ci.getUniforms(),vi=Vt.uniforms;if(yt.useProgram(Ci.program)&&(bc=!0,Hs=!0,vr=!0),Y.id!==V&&(V=Y.id,Hs=!0),bc||A!==E){yt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(F,"projectionMatrix",E.projectionMatrix),xe.setValue(F,"viewMatrix",E.matrixWorldInverse);let pi=xe.map.cameraPosition;pi!==void 0&&pi.setValue(F,Xt.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,Hs=!0,vr=!0)}if(Vt.needsLights&&(Hi.state.sunShadowMap.length>0&&xe.setValue(F,"sunShadowMap",Hi.state.sunShadowMap,Yt),Hi.state.directionalShadowMap.length>0&&xe.setValue(F,"directionalShadowMap",Hi.state.directionalShadowMap,Yt),Hi.state.spotShadowMap.length>0&&xe.setValue(F,"spotShadowMap",Hi.state.spotShadowMap,Yt),Hi.state.pointShadowMap.length>0&&xe.setValue(F,"pointShadowMap",Hi.state.pointShadowMap,Yt)),J.isSkinnedMesh){xe.setOptional(F,J,"bindMatrix"),xe.setOptional(F,J,"bindMatrixInverse");let Be=J.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),xe.setValue(F,"boneTexture",Be.boneTexture,Yt))}J.isBatchedMesh&&(xe.setOptional(F,J,"batchingTexture"),xe.setValue(F,"batchingTexture",J._matricesTexture,Yt),xe.setOptional(F,J,"batchingIdTexture"),xe.setValue(F,"batchingIdTexture",J._indirectTexture,Yt),xe.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&xe.setValue(F,"batchingColorTexture",J._colorsTexture,Yt));let zn=Q.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&tt.update(J,Q,Ci),(Hs||Vt.receiveShadow!==J.receiveShadow)&&(Vt.receiveShadow=J.receiveShadow,xe.setValue(F,"receiveShadow",J.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(vi.envMapIntensity.value=z.environmentIntensity),vi.dfgLUT!==void 0&&(vi.dfgLUT.value=uE()),Hs){if(xe.setValue(F,"toneMappingExposure",R.toneMappingExposure),Vt.needsLights&&Sa(vi,vr),Pt&&Y.fog===!0&&St.refreshFogUniforms(vi,Pt),St.refreshMaterialUniforms(vi,Y,gt,Rt,w.state.transmissionRenderTarget[E.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){let Be=y,pi=0;for(let us of w.state.lightProbeGridArray)us.texture!==null&&(Be.textures[pi]=us.texture,Be.min[pi]=us.boundingBox.min,Be.max[pi]=us.boundingBox.max,Be.resolution[pi]=us.resolution,pi++);for(let us in Be)Be[us].length=pi;vi.probesSH.value=Be.textures,vi.probesMin.value=Be.min,vi.probesMax.value=Be.max,vi.probesResolution.value=Be.resolution}ha.upload(F,oi(Vt),vi,Yt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ha.upload(F,oi(Vt),vi,Yt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(F,"center",J.center),xe.setValue(F,"modelViewMatrix",J.modelViewMatrix),xe.setValue(F,"normalMatrix",J.normalMatrix),xe.setValue(F,"modelMatrix",J.matrixWorld),Y.uniformsGroups!==void 0){let Be=Y.uniformsGroups;for(let pi=0,us=Be.length;pi<us;pi++){let dm=Be[pi];dt.update(dm,Ci),dt.bind(dm,Ci)}}return Ci}function Sa(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Mc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,z,Q){let Y=Ht.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ht.get(E.texture).__webglTexture=z,Ht.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let Q=Ht.get(E);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Q=0){K=E,B=z,D=Q;let Y=null,J=!1,Pt=!1;if(E){let Ct=Ht.get(E);if(Ct.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(F.FRAMEBUFFER,Ct.__webglFramebuffer),W.copy(E.viewport),ht.copy(E.scissor),wt=E.scissorTest,yt.viewport(W),yt.scissor(ht),yt.setScissorTest(wt),V=-1;return}else if(Ct.__webglFramebuffer===void 0)Yt.setupRenderTarget(E);else if(Ct.__hasExternalTextures)Yt.rebindTextures(E,Ht.get(E.texture).__webglTexture,Ht.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ie=E.depthTexture;if(Ct.__boundDepthTexture!==ie){if(ie!==null&&Ht.has(ie)&&(E.width!==ie.image.width||E.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Pt=!0);let Wt=Ht.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?Y=Wt[z][Q]:Y=Wt[z],J=!0):E.samples>0&&Yt.useMultisampledRTT(E)===!1?Y=Ht.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[Q]:Y=Wt,W.copy(E.viewport),ht.copy(E.scissor),wt=E.scissorTest}else W.copy(Ut).multiplyScalar(gt).floor(),ht.copy(at).multiplyScalar(gt).floor(),wt=ct;if(Q!==0&&(Y=G),yt.bindFramebuffer(F.FRAMEBUFFER,Y)&&yt.drawBuffers(E,Y),yt.viewport(W),yt.scissor(ht),yt.setScissorTest(wt),J){let Ct=Ht.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ct.__webglTexture,Q)}else if(Pt){let Ct=z;for(let Dt=0;Dt<E.textures.length;Dt++){let Wt=Ht.get(E.textures[Dt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Dt,Wt.__webglTexture,Q,Ct)}}else if(E!==null&&Q!==0){let Ct=Ht.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ct.__webglTexture,Q)}V=-1};function ks(E){let z=Ht.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=$t.textureFormatReadable(E.format),z.__typeReadable=$t.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,Q,Y,J,Pt,kt,Ct=0){if(!(E&&E.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&kt!==void 0&&(Dt=Dt[kt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){yt.bindFramebuffer(F.FRAMEBUFFER,Dt);try{let Wt=E.textures[Ct],ie=Wt.format,de=Wt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ct);let Gt=ks(Wt);if(Gt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&Q>=0&&Q<=E.height-J&&F.readPixels(z,Q,Y,J,pt.convert(ie),pt.convert(de),Pt)}finally{let Wt=K!==null?Ht.get(K).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(E,z,Q,Y,J,Pt,kt,Ct=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&kt!==void 0&&(Dt=Dt[kt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(z>=0&&z<=E.width-Y&&Q>=0&&Q<=E.height-J){yt.bindFramebuffer(F.FRAMEBUFFER,Dt);let Wt=E.textures[Ct],ie=Wt.format,de=Wt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ct);let Gt=ks(Wt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,Pt.byteLength,F.STREAM_READ),F.readPixels(z,Q,Y,J,pt.convert(ie),pt.convert(de),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ti=K!==null?Ht.get(K).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,ti);let Le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await H_(F,Le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Pt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pe),F.deleteSync(Le),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Q=0){let Y=Math.pow(2,-Q),J=Math.floor(E.image.width*Y),Pt=Math.floor(E.image.height*Y),kt=z!==null?z.x:0,Ct=z!==null?z.y:0;Yt.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,kt,Ct,J,Pt),yt.unbindTexture()},this.copyTextureToTexture=function(E,z,Q=null,Y=null,J=0,Pt=0){let kt,Ct,Dt,Wt,ie,de,Gt,pe,ti,Le=E.isCompressedTexture?E.mipmaps[Pt]:E.image;if(Q!==null)kt=Q.max.x-Q.min.x,Ct=Q.max.y-Q.min.y,Dt=Q.isBox3?Q.max.z-Q.min.z:1,Wt=Q.min.x,ie=Q.min.y,de=Q.isBox3?Q.min.z:0;else{let xe=Math.pow(2,-J);kt=Math.floor(Le.width*xe),Ct=Math.floor(Le.height*xe),E.isDataArrayTexture?Dt=Le.depth:E.isData3DTexture?Dt=Math.floor(Le.depth*xe):Dt=1,Wt=0,ie=0,de=0}Y!==null?(Gt=Y.x,pe=Y.y,ti=Y.z):(Gt=0,pe=0,ti=0);let Pe=pt.convert(z.format),Ri=pt.convert(z.type),Vt;z.isData3DTexture?(Yt.setTexture3D(z,0),Vt=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Yt.setTexture2DArray(z,0),Vt=F.TEXTURE_2D_ARRAY):(Yt.setTexture2D(z,0),Vt=F.TEXTURE_2D),yt.activeTexture(F.TEXTURE0),yt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),yt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),yt.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);let Hi=yt.getParameter(F.UNPACK_ROW_LENGTH),ye=yt.getParameter(F.UNPACK_IMAGE_HEIGHT),xr=yt.getParameter(F.UNPACK_SKIP_PIXELS),Ci=yt.getParameter(F.UNPACK_SKIP_ROWS),bc=yt.getParameter(F.UNPACK_SKIP_IMAGES);yt.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),yt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),yt.pixelStorei(F.UNPACK_SKIP_PIXELS,Wt),yt.pixelStorei(F.UNPACK_SKIP_ROWS,ie),yt.pixelStorei(F.UNPACK_SKIP_IMAGES,de);let Hs=E.isDataArrayTexture||E.isData3DTexture,vr=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let xe=Ht.get(E),vi=Ht.get(z),zn=Ht.get(xe.__renderTarget),Be=Ht.get(vi.__renderTarget);yt.bindFramebuffer(F.READ_FRAMEBUFFER,zn.__webglFramebuffer),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let pi=0;pi<Dt;pi++)Hs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(E).__webglTexture,J,de+pi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(z).__webglTexture,Pt,ti+pi)),F.blitFramebuffer(Wt,ie,Wt+kt,ie+Ct,Gt,pe,Gt+kt,pe+Ct,F.DEPTH_BUFFER_BIT,F.NEAREST);yt.bindFramebuffer(F.READ_FRAMEBUFFER,null),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||Ht.has(E)){let xe=Ht.get(E),vi=Ht.get(z);yt.bindFramebuffer(F.READ_FRAMEBUFFER,C),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let zn=0;zn<Dt;zn++)Hs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,J,de+zn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,J),vr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vi.__webglTexture,Pt,ti+zn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vi.__webglTexture,Pt),J!==0?F.blitFramebuffer(Wt,ie,Wt+kt,ie+Ct,Gt,pe,Gt+kt,pe+Ct,F.COLOR_BUFFER_BIT,F.NEAREST):vr?F.copyTexSubImage3D(Vt,Pt,Gt,pe,ti+zn,Wt,ie,kt,Ct):F.copyTexSubImage2D(Vt,Pt,Gt,pe,Wt,ie,kt,Ct);yt.bindFramebuffer(F.READ_FRAMEBUFFER,null),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vr?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Vt,Pt,Gt,pe,ti,kt,Ct,Dt,Pe,Ri,Le.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Vt,Pt,Gt,pe,ti,kt,Ct,Dt,Pe,Le.data):F.texSubImage3D(Vt,Pt,Gt,pe,ti,kt,Ct,Dt,Pe,Ri,Le):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Pt,Gt,pe,kt,Ct,Pe,Ri,Le.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Pt,Gt,pe,Le.width,Le.height,Pe,Le.data):F.texSubImage2D(F.TEXTURE_2D,Pt,Gt,pe,kt,Ct,Pe,Ri,Le);yt.pixelStorei(F.UNPACK_ROW_LENGTH,Hi),yt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),yt.pixelStorei(F.UNPACK_SKIP_PIXELS,xr),yt.pixelStorei(F.UNPACK_SKIP_ROWS,Ci),yt.pixelStorei(F.UNPACK_SKIP_IMAGES,bc),Pt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&F.generateMipmap(Vt),yt.unbindTexture()},this.initRenderTarget=function(E){Ht.get(E).__webglFramebuffer===void 0&&Yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Yt.setTextureCube(E,0):E.isData3DTexture?Yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Yt.setTexture2DArray(E,0):Yt.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){B=0,D=0,K=null,yt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var gc=new H;function On(s,t,e,i,n,r){let o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;gc.copy(t),gc[i]=0,gc.normalize();let c=.5*o/(o+a),h=1-gc.angleTo(s)/l;return Math.sign(gc[e])===1?h*c:a/(o+a)+c+c*(1-h)}var hs=class s extends os{constructor(t=1,e=1,i=1,n=2,r=.1){let o=n*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new H,c=new H,h=new H(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,g=new H,m=.5/o;for(let _=0,v=0;_<d.length;_+=3,v+=2)switch(l.fromArray(d,_),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[_+0]=h.x*Math.sign(l.x)+c.x*r,d[_+1]=h.y*Math.sign(l.y)+c.y*r,d[_+2]=h.z*Math.sign(l.z)+c.z*r,f[_+0]=c.x,f[_+1]=c.y,f[_+2]=c.z,Math.floor(_/p)){case 0:g.set(1,0,0),u[v+0]=On(g,c,"z","y",r,i),u[v+1]=1-On(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),u[v+0]=1-On(g,c,"z","y",r,i),u[v+1]=1-On(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),u[v+0]=1-On(g,c,"x","z",r,t),u[v+1]=On(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),u[v+0]=1-On(g,c,"x","z",r,t),u[v+1]=1-On(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),u[v+0]=1-On(g,c,"x","y",r,t),u[v+1]=1-On(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),u[v+0]=On(g,c,"x","y",r,t),u[v+1]=1-On(g,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var xf=class extends Wr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new os;t.deleteAttribute("uv");let e=new Ki({side:wi}),i=new Ki,n=new Jr(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Yr(t,i,6),a=new $e;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new jt(t,da(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new jt(t,da(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new jt(t,da(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new jt(t,da(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new jt(t,da(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new jt(t,da(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function da(s){return new Wl({color:0,emissive:16777215,emissiveIntensity:s})}var pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dE=new Kr(-1,1,1,-1,0,1),cm=class extends hi{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}},pE=new cm,_r=class{constructor(t){this._mesh=new jt(pE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var vf=class extends Mn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fs.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _r(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _c=class extends Mn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},yf=class extends Mn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Sf=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new mt);this._width=i.width,this._height=i.height,e=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vf(pa),this.copyPass.material.blending=Ds,this.timer=new Kl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_c!==void 0&&(o instanceof _c?i=!0:o instanceof yf&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mf=class extends Mn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new qt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Px={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ma=class s extends Mn{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(r,o,{type:ui,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ke(r,o,{type:ui,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ke(r,o,{type:ui,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Px;this.highPassUniforms=Fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new mt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fs.clone(pa.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:mr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new qt,this._oldClearAlpha=1,this._basic=new vn,this._fsQuad=new _r(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new mt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new Ze({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};ma.BlurDirectionX=new mt(1,0);ma.BlurDirectionY=new mt(0,1);var xc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var bf=class extends Mn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fs.clone(xc.uniforms),this.material=new ia({name:xc.name,uniforms:this.uniforms,vertexShader:xc.vertexShader,fragmentShader:xc.fragmentShader}),this._fsQuad=new _r(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ic&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Bn="Archivo, system-ui, sans-serif",mE='ui-monospace, "Cascadia Mono", Consolas, Menlo, monospace',bn="#f2f2f2",hm="#a8a8a8",ga="#757575",_a="#e3372d",gE="#0a0a0a";function va(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function um(s){return new Promise((t,e)=>{let i=new Image;i.onload=()=>t(i),i.onerror=()=>e(new Error("could not load "+s)),i.src=s})}function Fn(s,t,e,i=Bn,n="normal",r=0){s.font=`${t} ${e}px ${i}`,"fontStretch"in s&&(s.fontStretch=n),"letterSpacing"in s&&(s.letterSpacing=r+"px")}var _E=s=>(s=Math.max(0,Math.floor(s)),String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"));function Ix(s,{sec:t,answered:e,cursor:i}){let n=s.canvas.width,r=s.canvas.height;s.fillStyle="#0c0c0c",s.fillRect(0,0,n,r),s.fillStyle="#161616",s.fillRect(0,0,n,52),["#3a3a3a","#3a3a3a","#3a3a3a"].forEach((d,f)=>{s.fillStyle=d,s.beginPath(),s.arc(34+f*26,26,7,0,Math.PI*2),s.fill()}),Fn(s,500,20,Bn,"normal",1),s.fillStyle=ga,s.textAlign="center",s.fillText("claude  \xB7  storefront",n/2,33),s.textAlign="left";let o=64;Fn(s,400,27,mE),s.fillStyle=bn,s.fillText("> Build the site and run the end-to-end tests",o,128),s.fillStyle=e?ga:_a,s.fillText("\u25CF",o,198),s.fillStyle=bn,s.fillText("Bash(npm run build && npx playwright test)",o+30,198),s.fillStyle=ga,s.fillText("  \u2514 Builds the site, then runs the tests",o,240),s.fillStyle=bn,s.fillText("Do you want to proceed?",o,330),s.fillText("\u276F 1. Yes",o,380),s.fillStyle=hm,s.fillText("  2. No",o,426),e?(s.fillStyle=bn,s.fillText("\u2713 Allowed from Glassdeck on the phone",o,512),s.fillStyle=ga,s.fillText("  Running npm run build\u2026",o,556)):i&&(s.fillStyle=bn,s.fillRect(o+128,404,15,30));let a=n-64-330,l=100,c=330,h=160;s.strokeStyle=e?"#3e3e3e":_a,s.lineWidth=3,s.strokeRect(a,l,c,h),Fn(s,600,20,Bn,"expanded",5),s.fillStyle=e?ga:_a,s.fillText(e?"ANSWERED":"WAITING",a+28,l+44),Fn(s,300,84,Bn,"expanded",2),s.fillStyle=e?ga:bn,s.fillText(_E(t),a+24,l+132)}function Lx(s,{qr:t,scan:e,paired:i}){let n=s.canvas.width,r=s.canvas.height;s.fillStyle=gE,s.fillRect(0,0,n,r);let o=90;Fn(s,300,60,Bn,"expanded",9),s.fillStyle=bn,s.fillText("GLASSDECK",o,170),s.fillStyle=_a,s.fillRect(o,200,150,9),Fn(s,500,44,Bn,"semi-expanded"),s.fillStyle=bn,s.fillText(i?"Phone paired":"Pair a phone",o,310),Fn(s,400,25,Bn),s.fillStyle=hm,i?(s.fillText("The panel is open on your phone.",o,362),s.fillText("Add it to the Home Screen to finish.",o,400)):(s.fillText("Scan this code with your phone's camera.",o,362),s.fillText("Same Wi-Fi, or Tailscale away from home.",o,400));let a=420,l=n-90-a,c=(r-a)/2;s.fillStyle="#fff",xa(s,l,c,a,a,18),s.fill();let h=34;if(s.imageSmoothingEnabled=!1,s.drawImage(t,l+h,c+h,a-h*2,a-h*2),s.imageSmoothingEnabled=!0,i)s.fillStyle="rgba(10,10,10,.82)",xa(s,l,c,a,a,18),s.fill(),s.strokeStyle=bn,s.lineWidth=10,s.beginPath(),s.moveTo(l+a*.32,c+a*.52),s.lineTo(l+a*.45,c+a*.64),s.lineTo(l+a*.7,c+a*.38),s.stroke();else if(e>=0){let d=c+10+e*(a-20),f=s.createLinearGradient(0,d-40,0,d+4);f.addColorStop(0,"rgba(227,55,45,0)"),f.addColorStop(1,"rgba(227,55,45,.45)"),s.fillStyle=f,s.fillRect(l,d-40,a,44),s.fillStyle=_a,s.fillRect(l-12,d,a+24,4)}}function Dx(s,{qr:t,t:e,found:i,icon:n}){let r=s.canvas.width,o=s.canvas.height,a=s.createRadialGradient(r/2,o/2,40,r/2,o/2,r*.6);a.addColorStop(0,"#1d1d1d"),a.addColorStop(1,"#070707"),s.fillStyle=a,s.fillRect(0,0,r,o);let l=o*.62,c=(r-l)/2,h=(o-l)/2-o*.03;s.fillStyle="#e9e9e9",xa(s,c,h,l,l,10),s.fill();let d=l*.08;s.imageSmoothingEnabled=!1,s.drawImage(t,c+d,h+d,l-d*2,l-d*2),s.imageSmoothingEnabled=!0;let f=26,u=46;if(s.strokeStyle=i?bn:"rgba(242,242,242,.8)",s.lineWidth=6,[[c-f,h-f,1,1],[c+l+f,h-f,-1,1],[c-f,h+l+f,1,-1],[c+l+f,h+l+f,-1,-1]].forEach(([p,g,m,_])=>{s.beginPath(),s.moveTo(p,g+_*u),s.lineTo(p,g),s.lineTo(p+m*u,g),s.stroke()}),i){let m=(r-470)/2,_=o-74-34;s.fillStyle="rgba(242,242,242,.96)",xa(s,m,_,470,74,74/2),s.fill(),n&&s.drawImage(n,m+14,_+11,52,52),Fn(s,600,28,Bn),s.fillStyle="#111",s.fillText("Open Glassdeck",m+84,_+47)}else{let p=h+(Math.sin(e*3)+1)/2*l;s.fillStyle=_a,s.fillRect(c-20,p-2,l+40,4)}Fn(s,600,22,Bn,"expanded",4),s.fillStyle=i?bn:hm,s.textAlign="center",s.fillText(i?"GLASSDECK FOUND":"SCANNING",r/2,52),s.textAlign="left"}function Nx(s,{icon:t}){let e=s.canvas.width,i=s.canvas.height;s.fillStyle="#0b0b0b",s.fillRect(0,0,e,i),s.strokeStyle="rgba(62,62,62,.7)",s.lineWidth=2;for(let a=0;a<9;a++){let l=i*.55+a*30;s.beginPath();for(let c=0;c<=e;c+=12){let h=(c-e*.5)/(e*.18),d=l-(40+a*6)*Math.exp(-h*h)-12*Math.sin(c*.01+a);c?s.lineTo(c,d):s.moveTo(c,d)}s.stroke()}Fn(s,600,26,Bn),s.fillStyle=bn,s.fillText("10:24",64,54);let n=168,r=(e-n)/2,o=i*.22;s.save(),xa(s,r,o,n,n,38),s.clip(),s.drawImage(t,r,o,n,n),s.restore(),s.strokeStyle="#2b2b2b",s.lineWidth=2,xa(s,r,o,n,n,38),s.stroke(),Fn(s,500,28,Bn),s.fillStyle=bn,s.textAlign="center",s.fillText("Glassdeck",e/2,o+n+46),s.textAlign="left"}function Ux(s,t){let e=s.canvas.width;s.clearRect(0,0,e,e),Fn(s,500,e*.5,Bn),s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle",s.fillText(t,e/2,e/2+2)}function Ox(s){let t=s.canvas.width,e=s.canvas.height,i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(0,0,0,.85)"),i.addColorStop(.6,"rgba(0,0,0,.35)"),i.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)}function xa(s,t,e,i,n,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+i,e,t+i,e+n,r),s.arcTo(t+i,e+n,t,e+n,r),s.arcTo(t,e+n,t,e,r),s.arcTo(t,e,t+i,e,r),s.closePath()}var no=new qt("#e3372d"),Fx=["hero","night","perm","wait","system","procs","music","mixer","deck","trackpad","ai","dev","weather","now-music"];function Bs(s,t,e){let i=new cr,n=-s/2,r=-t/2;return i.moveTo(n+e,r),i.lineTo(n+s-e,r),i.absarc(n+s-e,r+e,e,-Math.PI/2,0,!1),i.lineTo(n+s,r+t-e),i.absarc(n+s-e,r+t-e,e,0,Math.PI/2,!1),i.lineTo(n+e,r+t),i.absarc(n+e,r+t-e,e,Math.PI/2,Math.PI,!1),i.lineTo(n,r+e),i.absarc(n+e,r+e,e,Math.PI,Math.PI*1.5,!1),i}function vc(s,t=24){let e=new Hl(s,t);e.computeBoundingBox();let i=e.boundingBox,n=e.attributes.position,r=e.attributes.uv;for(let o=0;o<n.count;o++)r.setXY(o,(n.getX(o)-i.min.x)/(i.max.x-i.min.x),(n.getY(o)-i.min.y)/(i.max.y-i.min.y));return r.needsUpdate=!0,e}function yc(s){let t=new Cl(s);return t.colorSpace=bi,t.anisotropy=4,t}var fm=class{constructor(t,e,i){this.name=t,this.holder=e,this.poster=i.load(`media/${t}.jpg`),this.poster.colorSpace=bi,this.video=null,this.tex=null,this.live=!1,this.tried=-1e9}ensure(){if(this.video)return;let t=document.createElement("video");t.muted=!0,t.defaultMuted=!0,t.loop=!0,t.playsInline=!0,t.setAttribute("playsinline",""),t.setAttribute("muted",""),t.preload="auto",t.src=`media/${this.name}.mp4`,t.addEventListener("playing",()=>{this.live=!0}),this.holder.appendChild(t),this.video=t,this.tex=new Al(t),this.tex.colorSpace=bi,this.tex.minFilter=ci,this.tex.generateMipmaps=!1}want(t){if(t){this.ensure();let e=performance.now();if(this.video.paused&&e-this.tried>2e3){this.tried=e;let i=this.video.play();i&&i.catch&&i.catch(()=>{})}}else this.video&&!this.video.paused&&this.video.pause()}texture(){return this.live&&this.video.readyState>=2?(this.video.paused||(this.tex.needsUpdate=!0),this.tex):this.poster}},vE=`
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
}`;function yE(s,t){let o=s*t*4,a=new Float32Array(o*3),l=new Float32Array(o),c=[],h=0;for(let g=0;g<s;g++){let m=-3.2+-62.8*(g/(s-1))**1.15,_=h;for(let v=0;v<t;v++){let S=-36+72*v/(t-1);for(let y=0;y<4;y++)a[h*3]=S,a[h*3+1]=0,a[h*3+2]=m,l[h]=y,h++}for(let v=0;v<t-1;v++){let S=_+v*4,y=S+4;c.push(S,S+1,y,y,S+1,y+1),c.push(S+2,S+3,y+2,y+2,S+3,y+3)}}let d=new hi;d.setAttribute("position",new sn(a,3)),d.setAttribute("aKind",new sn(l,1)),d.setIndex(c);let f={uTime:{value:0},uAmp:{value:1},uBase:{value:-1.7},uPx:{value:.002},uWaveZ:{value:-100},uWaveAmt:{value:0},uRed:{value:no.clone()}},u=new Ze({uniforms:f,vertexShader:vE+`
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
      }`,fog:!1}),p=new jt(d,u);return p.frustumCulled=!1,{mesh:p,uniforms:f}}function SE(){let s=new _n,t=1.74,e=.82,i=.13,n=new hr(Bs(t,e,i),{depth:.06,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:5,curveSegments:28});n.translate(0,0,-.03);let r=new Ki({color:2763309,metalness:1,roughness:.5,envMapIntensity:.45});s.add(new jt(n,r));let o=new jt(vc(Bs(t,e,i)),new Ls({color:131586,roughness:.2,metalness:0,clearcoat:.4,clearcoatRoughness:.2,envMapIntensity:.35}));o.position.z=.0425,s.add(o);let a=1.623,l=.75,c={tA:{value:null},tB:{value:null},uMix:{value:1},uBright:{value:1},uRed:{value:no.clone()}},h=new Ze({uniforms:c,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`,toneMapped:!1}),d=new jt(vc(Bs(a,l,.085)),h);d.position.z=.0432,s.add(d);let f=new jt(vc(Bs(.036,.17,.018)),new vn({color:0}));f.position.set(-a/2+.045,0,.0436),s.add(f);let u=new jt(vc(Bs(t-.01,e-.01,i)),new Ls({color:2302758,roughness:.55,metalness:.2,clearcoat:.3}));u.position.z=-.0425,u.rotation.y=Math.PI,s.add(u);let p=new jt(new hr(Bs(.36,.36,.08),{depth:.012,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:3,curveSegments:16}),new Ls({color:2763309,roughness:.25,metalness:.6,clearcoat:1}));p.rotation.y=Math.PI,p.position.set(.62,.17,-.043),s.add(p);let g=new Ls({color:329224,roughness:.05,metalness:.2,clearcoat:1}),m=new Ki({color:7829372,metalness:1,roughness:.25});[[.56,.23],[.56,.11],[.68,.17]].forEach(([b,w])=>{let x=new jt(new qr(.058,.058,.022,32),m);x.rotation.x=Math.PI/2,x.position.set(b,w,-.066);let M=new jt(new qr(.044,.044,.024,32),g);M.rotation.x=Math.PI/2,M.position.set(b,w,-.067),s.add(x,M)});let _=new $e;_.position.set(.6,.17,-.08),s.add(_);let v=new Ki({color:3815998,metalness:1,roughness:.5,envMapIntensity:.45});[[-.42,.2],[-.12,.13],[.08,.13]].forEach(([b,w])=>{let x=new jt(new hs(w,.02,.028,2,.008),v);x.position.set(b,e/2+.014,0),s.add(x)});let S=new hi().setFromPoints(Bs(t+.04,e+.04,i+.02).getPoints(48)),y=[0,1,2].map(()=>{let b=new El(S,new Qo({color:no.clone().multiplyScalar(4),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return b.position.z=0,s.add(b),b});return{group:s,screenU:c,rings:y,camAnchor:_}}function ME(){let s=new _n,t=new Ki({color:1184275,roughness:.5,metalness:.15}),e=new jt(new hs(6.6,.1,2.9,3,.03),t);e.position.set(0,-.05,-.2),s.add(e);let i=new Ki({color:1907999,metalness:.9,roughness:.38}),n=new _n;n.position.set(-.5,1.15,-.85);let r=new jt(new hr(Bs(2.72,1.58,.05),{depth:.04,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:3,curveSegments:12}),i);r.position.z=-.05;let o=new jt(vc(Bs(2.7,1.56,.045)),new Ls({color:197379,roughness:.15,clearcoat:1}));o.position.z=5e-4;let a=va(1280,720),l=yc(a),c=new jt(new Is(2.6,1.4625),new vn({map:l,color:14606046,toneMapped:!1}));c.position.z=.002,n.add(r,o,c);let h=new jt(new hs(.2,1.05,.06,2,.025),i);h.position.set(-.5,.55,-1),h.rotation.x=-.12;let d=new jt(new hs(.95,.03,.52,2,.012),i);d.position.set(-.5,.015,-.92),s.add(n,h,d);let f=new _n;f.position.set(-.5,0,.42);let u=new jt(new hs(1.96,.05,.66,3,.022),i);u.position.y=.025,f.add(u);let p=new hs(.104,.03,.104,2,.012),g=new Ki({color:1579034,roughness:.55,metalness:.1}),m=15,_=5,v=.122,S=new Yr(p,g,m*_),y=new Se,b=0;for(let A=0;A<_;A++)for(let W=0;W<m;W++){let ht=(W-(m-1)/2)*v,wt=(A-(_-1)/2)*v,X=A===0&&W===1||A===4&&W>=4&&W<=10;y.makeScale(X?0:1,X?0:1,X?0:1),y.setPosition(ht,.065,wt),S.setMatrixAt(b++,y)}f.add(S);let w=new jt(new hs(v*7-.018,.03,.104,2,.012),g);w.position.set(0,.065,2*v),f.add(w);let x=new Ki({color:1579034,roughness:.5,emissive:no.clone(),emissiveIntensity:0}),M=new jt(p,x);M.position.set((1-(m-1)/2)*v,.065,-2*v);let P=va(64,64);Ux(P.getContext("2d"),"1");let R=new jt(new Is(.07,.07),new vn({map:yc(P),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.85}));R.rotation.x=-Math.PI/2,R.position.set(M.position.x,.081,M.position.z),f.add(M,R),s.add(f);let N=new _n;N.position.set(1.78,0,.3),N.rotation.y=-.32;let L=new cr;L.moveTo(.17,0),L.lineTo(.17,.05),L.lineTo(.11,.05),L.lineTo(.11-.25*.4,.45),L.lineTo(-.13,.45),L.lineTo(-.13,0),L.lineTo(.17,0);let G=new hr(L,{depth:.46,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:2});G.translate(0,0,-.23);let C=new jt(G,i);C.rotation.y=-Math.PI/2,N.add(C),s.add(N);let U=new $e,B=.05+.246*Math.cos(.245);U.position.set(0,B,.11-.25*(B-.05)+.03),U.rotation.set(-.245,0,0,"YXZ"),N.add(U);let D=va(128,128);Ox(D.getContext("2d"));let K=yc(D),V=(A,W,ht,wt,X=0,ot=.7)=>{let _t=new jt(new Is(A,W),new vn({map:K,transparent:!0,depthWrite:!1,opacity:ot,toneMapped:!1}));_t.rotation.set(-Math.PI/2,0,X),_t.position.set(ht,.002,wt),s.add(_t)};return V(2.5,1.1,-.5,.42),V(1.5,.9,-.5,-.92),V(.9,.7,1.78,.3,.32,.8),{group:s,monCanvas:a,monTex:l,oneMat:x,stand:N,dockLocal:U,monitor:n}}function bE(s,t){let e=s.clone().lerp(t,.5).add(new H(0,.95,.35)),i=new ta([s,e,t]),n=new Vl(i,160,.009,8,!1),r={uHead:{value:0},uAmt:{value:0},uRed:{value:no.clone()}},o=new Ze({uniforms:r,transparent:!0,depthWrite:!1,blending:mr,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uHead, uAmt; uniform vec3 uRed; varying vec2 vUv;
      void main(){
        float t = vUv.x;
        float tail = smoothstep(uHead - 0.35, uHead, t) * step(t, uHead);
        float trail = 0.12 * step(t, uHead);
        float a = max(tail, trail) * uAmt;
        gl_FragColor = vec4(uRed * 6.0 * a, a);
        #include <colorspace_fragment>
      }`}),a=new jt(n,o),l=new jt(new Gl(.03,16,12),new vn({color:no.clone().multiplyScalar(8),toneMapped:!1,transparent:!0}));return{tube:a,head:l,u:r,curve:i}}function TE(){let s=new qr(.42,.03,1,32,1,!0);s.translate(0,.5,0),s.rotateX(Math.PI/2);let t=new vn({color:no.clone().multiplyScalar(.9),transparent:!0,opacity:0,depthWrite:!1,blending:mr,side:Nn,toneMapped:!1});return new jt(s,t)}async function Bx(s,{mobile:t,post:e}){let i=new mf({canvas:s,antialias:!e,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:2)),i.toneMapping=Qr,i.toneMappingExposure=1.05;let n=new Wr;n.background=new qt(657930),n.fog=new Sl(657930,18,70);let r=new ua(i);n.environment=r.fromScene(new xf,.04).texture,n.environmentIntensity=.32,r.dispose();let o=new sa(16777215,1.6);o.position.set(3,6,5);let a=new Jr(14890797,6,9,2);a.position.set(2.4,2.8,-2.6);let l=new sa(10134712,.35);l.position.set(-5,2,2),n.add(o,a,l);let c=new zi(30,1,.05,200),h=yE(t?52:84,t?150:240);n.add(h.mesh);let d=ME();n.add(d.group),d.group.updateMatrixWorld(!0);let f=SE();f.group.rotation.order="YXZ",n.add(f.group);let u=new H,p=new xn;d.dockLocal.getWorldPosition(u),d.dockLocal.getWorldQuaternion(p);let g=new Dn().setFromQuaternion(p,"YXZ"),m=new H(0,0,1).applyQuaternion(p),_=bE(new H(.335,1.52,-.83),u.clone().add(new H(0,.05,.02)));n.add(_.tube,_.head);let v=TE();n.add(v);let[S,y]=await Promise.all([um("media/qr.png"),um("icon-180.png")]);document.fonts&&document.fonts.load&&await Promise.all([document.fonts.load("300 40px Archivo"),document.fonts.load("600 40px Archivo")]).catch(()=>{});let b=document.createElement("div");b.setAttribute("aria-hidden","true"),b.style.cssText="position:fixed;left:0;bottom:0;width:4px;height:4px;overflow:hidden;opacity:0.01;pointer-events:none;z-index:-1",document.body.appendChild(b);let w=new Yl,x=Object.fromEntries(Fx.map(at=>[at,new fm(at,b,w)])),M=va(1344,622),P=va(1344,622),R=yc(M),N=yc(P);Nx(P.getContext("2d"),{icon:y}),N.needsUpdate=!0;let L=new Xr(new Uint8Array([0,0,0,255]),1,1);L.needsUpdate=!0;let G=null,C=null;if(e){let at=new Ke(1,1,{type:ui,samples:4});G=new Sf(i,at),G.addPass(new Mf(n,c)),C=new ma(new mt(1,1),.42,.5,1),G.addPass(C),G.addPass(new bf)}let U="black",B="black",D=1,K=at=>at==="black"?L:at==="scan"?R:at==="home"?N:x[at]?x[at].texture():L;function V(at){at!==U&&(B=U,U=at,D=0)}let A="";function W(at,ct){let $=at+JSON.stringify(ct);if($===A)return;A=$;let lt=d.monCanvas.getContext("2d");at==="pairing"?Lx(lt,{qr:S,...ct}):at==="off"?(lt.fillStyle="#050505",lt.fillRect(0,0,lt.canvas.width,lt.canvas.height)):Ix(lt,ct),d.monTex.needsUpdate=!0}let ht="";function wt(at,ct){let $=ct?"found":Math.round(at*30).toString();$!==ht&&(ht=$,Dx(M.getContext("2d"),{qr:S,t:at,found:ct,icon:y}),R.needsUpdate=!0)}let X=1,ot=1;function _t(at,ct){X=at,ot=ct,i.setSize(at,ct,!1),c.aspect=at/ct,c.updateProjectionMatrix(),G&&(G.setSize(at,ct),C.setSize(at,ct))}let Rt=new H,gt=new H,Nt=new xn,me=new H(0,1,0);function Ut(at,ct,$,lt){let ut=X/ot,k=ut<.95,xt=k?Math.min(2.3,(1.6/ut)**.62):Math.max(1,(1.55/ut)**.6);Rt.set(at.camX-at.tgtX,at.camY-at.tgtY,at.camZ-at.tgtZ).multiplyScalar(xt),c.position.set(at.tgtX+Rt.x,at.tgtY+Rt.y,at.tgtZ+Rt.z),c.lookAt(at.tgtX,at.tgtY,at.tgtZ);let Xt=k?at.mox:at.ox,Ot=k?at.moy:at.oy;c.setViewOffset(X,ot,-Xt*X,-Ot*ot,X,ot),h.uniforms.uPx.value=2*Math.tan(Gp.degToRad(c.fov/2))/ot;let Bt=at.float,Kt=ct.ring>0?Math.sin($*95)*.006*ct.ring:0;f.group.position.set(at.phX+Math.sin($*.7)*.03*Bt+Kt,at.phY+Math.sin($*.9)*.05*Bt,at.phZ),f.group.rotation.set(at.phRX+Math.sin($*.6)*.04*Bt,at.phRY+Math.sin($*.45)*.06*Bt,at.phRZ+Kt*2,"YXZ"),f.group.scale.setScalar(at.phS),D=Math.min(1,D+lt/.55);let se=D<1?1-Math.pow(1-D,3):1;f.screenU.tA.value=K(B),f.screenU.tB.value=K(U),f.screenU.uMix.value=se,f.screenU.uBright.value+=(ct.bright-f.screenU.uBright.value)*Math.min(1,lt*6);for(let F of Fx)x[F].want(F===U||F===B&&D<1);for(let F of ct.preload)x[F]&&x[F].ensure();if((U==="scan"||B==="scan")&&wt($,ct.found),f.rings.forEach((F,re)=>{let Jt=($*1.1+re/3)%1;F.scale.setScalar(1+Jt*.55),F.material.opacity=ct.ring*(1-Jt)*.9,F.visible=ct.ring>.01}),_.u.uHead.value=ct.pulse,_.u.uAmt.value=ct.pulseAmt,_.tube.visible=ct.pulseAmt>.001,_.curve.getPointAt(Math.min(1,Math.max(0,ct.pulse)),_.head.position),_.head.visible=ct.pulseAmt>.001&&ct.pulse>.001&&ct.pulse<.999,d.oneMat.emissiveIntensity=ct.key*(.9+.5*Math.sin($*4)),v.visible=ct.beam>.01,v.visible){f.group.updateMatrixWorld(!0),f.camAnchor.getWorldPosition(Rt),gt.set(-.5+(980/1280-.5)*2.6,1.15,-.845);let F=Rt.distanceTo(gt);v.position.copy(Rt),v.scale.set(1,1,F),v.lookAt(gt),v.material.opacity=.14*ct.beam*(.8+.2*Math.sin($*7))}h.uniforms.uTime.value=$,h.uniforms.uAmp.value=at.amp,h.uniforms.uWaveZ.value=ct.waveZ,h.uniforms.uWaveAmt.value=ct.waveAmt,G?G.render(lt):i.render(n,c)}return{renderer:i,render:Ut,resize:_t,setScreen:V,setMonitor:W,dock:{x:u.x,y:u.y,z:u.z,rx:g.x,ry:g.y,rz:g.z,front:m},preloadAll(at){at.forEach(ct=>x[ct]&&x[ct].ensure())}}}we.registerPlugin(ne,Ro);var Ei=Math.PI*2,zs=s=>Math.min(1,Math.max(0,s)),Tf=s=>s*s*(3-2*s),Sc=(s,t,e,i=.02)=>zs((s-t)/i)*zs((e-s)/i),ya=["system","procs","music","mixer","deck","trackpad","ai","dev","weather","night"],wE=["camX","camY","camZ","tgtX","tgtY","tgtZ","phX","phY","phZ","phRX","phRY","phRZ","phS","float","amp","ox","oy","mox","moy","mtX","dim"];async function kP(){let s=document.documentElement,t=document.getElementById("gl"),e=matchMedia("(pointer: coarse)").matches||innerWidth<760,i=await Bx(t,{mobile:e,post:!e}),n=document.createElement("div");n.style.cssText="position:absolute;top:0;left:0;width:1px;height:100lvh;visibility:hidden;pointer-events:none",document.body.appendChild(n);let r=0;function o(C){let U=innerWidth,B=Math.max(n.offsetHeight||0,innerHeight);!C&&U===r&&Math.abs(B-t.height/i.renderer.getPixelRatio())<2||(r=U,i.resize(U,B))}o(!0),addEventListener("resize",()=>o(!1));let a=new b0({lerp:.09});a.on("scroll",ne.update),we.ticker.add(C=>a.raf(C*1e3)),we.ticker.lagSmoothing(0);let l=["top","ai","pages","setup","tour","downloads","faq"],c={},h=innerHeight,d=[],f=0,u=0,p=0,g=i.dock,m=g.front;function _(){let C=(V,A)=>c[V].top+A*Math.max(1,c[V].h-h),U={phX:g.x,phY:g.y,phZ:g.z,phRX:g.rx,phRZ:0,phS:.6,float:0},B=(V,A,W)=>{let ht=Math.cos(A),wt=Math.sin(A),X=m.x*ht+m.z*wt,ot=-m.x*wt+m.z*ht;return{camX:g.x+X*V,camY:g.y+W,camZ:g.z+ot*V,tgtX:g.x,tgtY:g.y+.02,tgtZ:g.z}},D={camX:.2,camY:6.2,camZ:3.3,tgtX:0,tgtY:5.97,tgtZ:-2,phX:0,phY:6,phZ:-2,phRX:.1,phRY:-.42,phRZ:.04,phS:1,float:1,amp:1,ox:0,oy:.045,mox:0,moy:-.13,mtX:0,dim:0},K=[[0,D],[h*.3,{...D,camZ:2.8,camY:6.15,phRY:-.12,phRX:.2}],[(h*.3+C("ai",0))/2,{camX:.6,camY:3.5,camZ:5.4,tgtX:.6,tgtY:2.4,tgtZ:-.6,phX:.95,phY:3.4,phZ:-.6,phRX:.35,phRY:Math.PI-.2,phRZ:-.2,phS:.8,float:.2,amp:.8,ox:.05,oy:0,mox:0,moy:.05,mtX:0,dim:0}],[C("ai",0),{camX:-.3,camY:1.8,camZ:6.1,tgtX:-.5,tgtY:.95,tgtZ:-.6,...U,phRY:g.ry+Ei,amp:.55,ox:.3,oy:.02,mox:0,moy:.17,mtX:0,dim:0}],[C("ai",.32),{camX:-.25,camY:1.62,camZ:5.3,tgtX:-.4,tgtY:1,tgtZ:-.6,...U,phRY:g.ry+Ei,amp:.55,ox:.3,oy:.02,mox:0,moy:.16,mtX:0,dim:0}],[C("ai",.47),{camX:.95,camY:2.25,camZ:9.2,tgtX:.45,tgtY:.75,tgtZ:-.4,...U,phRY:g.ry+Ei,amp:.7,ox:.28,oy:.02,mox:0,moy:.16,mtX:1.4,dim:0}],[C("ai",.55),{...B(5.2,0,.8),...U,phRY:g.ry+Ei,amp:.72,ox:.28,oy:0,mox:0,moy:.16,mtX:0,dim:0}],[C("ai",.66),{...B(3,.15,.3),...U,phRY:g.ry+Ei,amp:.7,ox:.27,oy:0,mox:0,moy:.16,mtX:0,dim:0}],[C("ai",1),{...B(2.8,.3,.36),...U,phRY:g.ry+Ei,amp:.75,ox:.27,oy:0,mox:0,moy:.16,mtX:0,dim:0}],[C("pages",0),{camX:.3,camY:5.46,camZ:5.2,tgtX:.3,tgtY:5.4,tgtZ:.6,phX:.3,phY:5.4,phZ:.6,phRX:.05,phRY:-.26+Ei,phRZ:0,phS:1,float:.55,amp:1,ox:.13,oy:.02,mox:0,moy:.02,mtX:0,dim:0}],[C("pages",1),{camX:-.1,camY:5.6,camZ:5.1,tgtX:.3,tgtY:5.4,tgtZ:.6,phX:.3,phY:5.4,phZ:.6,phRX:.08,phRY:.26+Ei,phRZ:0,phS:1,float:.55,amp:1.15,ox:.13,oy:.02,mox:0,moy:.02,mtX:0,dim:0}],[C("setup",0),{camX:-.5,camY:1.3,camZ:5.7,tgtX:-.5,tgtY:1.12,tgtZ:-.85,phX:1.6,phY:1.9,phZ:.5,phRX:.1,phRY:-.5+Ei,phRZ:0,phS:.6,float:.7,amp:.7,ox:.2,oy:0,mox:0,moy:.13,mtX:0,dim:0}],[C("setup",.3),{camX:-.42,camY:1.28,camZ:5.35,tgtX:-.45,tgtY:1.12,tgtZ:-.85,phX:1.5,phY:1.8,phZ:.6,phRX:.1,phRY:-.4+Ei,phRZ:0,phS:.6,float:.7,amp:.7,ox:.2,oy:0,mox:0,moy:.13,mtX:0,dim:0}],[C("setup",.45),{camX:2.35,camY:1.5,camZ:4.4,tgtX:0,tgtY:1.1,tgtZ:-.45,phX:.3,phY:1.13,phZ:-.02,phRX:0,phRY:.42+Ei,phRZ:0,phS:.6,float:.15,amp:.7,ox:.25,oy:0,mox:0,moy:.13,mtX:.15,dim:0}],[C("setup",.62),{camX:2.15,camY:1.45,camZ:4.1,tgtX:.05,tgtY:1.1,tgtZ:-.45,phX:.3,phY:1.13,phZ:-.02,phRX:0,phRY:.42+Ei,phRZ:0,phS:.6,float:.15,amp:.7,ox:.25,oy:0,mox:0,moy:.13,mtX:.15,dim:0}],[C("setup",.8),{...B(2.9,-.25,.4),...U,phRY:g.ry+Ei,amp:.8,ox:.24,oy:0,mox:0,moy:.15,mtX:0,dim:0}],[C("setup",1),{...B(2.7,-.1,.32),...U,phRY:g.ry+Ei,amp:.85,ox:.24,oy:0,mox:0,moy:.15,mtX:0,dim:0}],[c.tour.top-h*.2,{camX:.6,camY:3.3,camZ:8.6,tgtX:.3,tgtY:.7,tgtZ:-.6,...U,phRY:g.ry+Ei,amp:1.1,ox:0,oy:0,mox:0,moy:0,mtX:0,dim:.84}],[c.downloads.top-h*.1,{...B(2.7,.6,.22),...U,phRY:g.ry+Ei,amp:1.6,ox:.22,oy:0,mox:0,moy:0,mtX:0,dim:.22}],[c.faq.top-h*.3,{camX:2.2,camY:2.2,camZ:5.5,tgtX:.6,tgtY:.6,tgtZ:-.5,...U,phRY:g.ry+Ei,amp:1.3,ox:0,oy:0,mox:0,moy:0,mtX:0,dim:.92}]];return K.sort((V,A)=>V[0]-A[0]),K}function v(){h=innerHeight,f=Math.max(...[".beats",".pages-head",".steps-wrap"].map(C=>document.querySelector(C)?.getBoundingClientRect().right||0)),u=parseFloat(getComputedStyle(document.querySelector(".top-in")).paddingRight)||0,p=document.querySelector(".rail")?.getBoundingClientRect().left||0;for(let C of l){let U=document.getElementById(C),B=U.getBoundingClientRect();c[C]={top:B.top+scrollY,h:U.offsetHeight}}d=_()}v(),ne.addEventListener("refresh",v);function S(C){for(let[U,B]of[[c.ai.top+c.ai.h-h,c.pages.top],[c.pages.top+c.pages.h-h,c.setup.top]]){let D=(C-U)/Math.max(1,B-U);if(D>0&&D<1)return D<.4?Tf(D/.4):D>.6?Tf((1-D)/.4):1}return 0}let y={};function b(C){let U=0;for(;U<d.length-2&&C>d[U+1][0];)U++;let[B,D]=d[U],[K,V]=d[U+1],A=Tf(zs((C-B)/Math.max(1,K-B)));for(let W of wE)y[W]=D[W]+(V[W]-D[W])*A;return y}let w=(C,U)=>zs((U-c[C].top)/Math.max(1,c[C].h-h)),x={bright:1,ring:0,pulse:0,pulseAmt:0,key:0,beam:0,waveZ:-100,waveAmt:0,found:!1,preload:[]};function M(C,U){x.bright=1,x.ring=0,x.pulse=0,x.pulseAmt=0,x.key=0,x.beam=0,x.waveAmt=0,x.found=!1,x.preload=[];let B=(h*.3+c.ai.top)/2,D=c.pages.top-h*.5,K=c.setup.top-h*.5,V=c.tour.top-h*.5;if(C<B)i.setScreen("hero"),C<c.ai.top-h*.08?i.setMonitor("off"):i.setMonitor("terminal",{sec:0,answered:!1,cursor:!1}),x.preload=["night","perm"];else if(C<D){let A=w("ai",C),W=A>.63;i.setMonitor("terminal",{sec:W?1380:Math.round(Tf(zs((A-.02)/.3))*1380),answered:W,cursor:Math.floor(U*2)%2===0}),x.key=Sc(A,-1,.5,.04),x.pulse=zs((A-.4)/.1),x.pulseAmt=Sc(A,.39,.55,.02),x.ring=Sc(A,.5,.64,.02),x.waveZ=-3-zs((A-.5)/.14)*60,x.waveAmt=Sc(A,.5,.66,.02),(A>.495||C<c.ai.top-h*.08)&&i.setMonitor("off"),A<.5?(i.setScreen("night"),x.bright=.85):A<.66?i.setScreen("perm"):i.setScreen("wait"),x.preload=["perm","wait","system"]}else if(C<K){let A=w("pages",C),W=Math.min(ya.length-1,Math.floor(A*ya.length));i.setScreen(ya[W]),i.setMonitor("off"),x.preload=[ya[Math.min(ya.length-1,W+1)],W>0?ya[W-1]:"system"]}else if(C<V){let A=w("setup",C),W=A>=.42&&A<.6,ht=A>=.6;A>.67?i.setMonitor("off"):i.setMonitor("pairing",{scan:W?Math.round(U*.55%1*60)/60:-1,paired:ht}),x.beam=Sc(A,.42,.6,.03),x.found=A>=.56,A<.38?(i.setScreen("black"),x.bright=0):A<.7?i.setScreen("scan"):A<.86?i.setScreen("home"):i.setScreen("now-music"),x.preload=["now-music"]}else{let A=C>c.downloads.top-h*.6;i.setScreen(A?"hero":"now-music"),i.setMonitor("off"),A&&(x.waveZ=-3-U*.18%1*62,x.waveAmt=.6)}return x}let P={p:0},R=scrollY,N=performance.now(),L=N;function G(){let C=performance.now(),U=Math.min(.1,(C-N)/1e3);N=C;let B=(C-L)/1e3;R+=(scrollY-R)*(1-Math.exp(-U*8)),Math.abs(scrollY-R)<.5&&(R=scrollY);let D=b(R),K=1-zs(R/(h*.3)),V=1-P.p;D.phY-=V*1.5*K,D.phRY-=V*2.6*K,D.phRX+=V*.5*K,D.amp*=.12+.88*P.p;let A=innerWidth/innerHeight<.95;if(A)D.tgtX+=D.mtX,D.camX+=D.mtX;else if(D.ox>0){let W=innerWidth,ht=R>c.pages.top-h*.5&&R<c.setup.top-h*.5,wt=ht&&p>f?p-24:W-u-Math.max(0,(W-1280)/4),X=Math.max(1,wt-f),ot=zs(D.ox/.22);D.ox=((f+wt)/2/W-.5)*ot+D.ox*(1-ot);let _t=1+(Math.max(1,Math.min(1.7,(ht?.66:.92)*h/X))-1)*ot;D.camX=D.tgtX+(D.camX-D.tgtX)*_t,D.camY=D.tgtY+(D.camY-D.tgtY)*_t,D.camZ=D.tgtZ+(D.camZ-D.tgtZ)*_t}D.dim=Math.max(D.dim,S(R),A&&R>c.downloads.top-h*.6?.72:0),t.style.opacity=String((1-D.dim)*Math.min(1,P.p*3)),!(D.dim>.985)&&i.render(D,M(R,B),B,U)}we.ticker.add(G),await(document.fonts?document.fonts.ready:Promise.resolve()),EE(a),s.classList.add("gl-ready"),window.__gdReady=!0,we.to(P,{p:1,duration:2.6,ease:"power3.out",delay:.1}),ne.refresh()}function EE(s){let t=new Ro(".wordmark",{type:"chars",mask:"chars"});we.from(t.chars,{yPercent:118,duration:1.35,ease:"expo.out",stagger:.045,delay:.15}),we.from(".hero .bar",{scaleX:0,transformOrigin:"0 50%",duration:1.1,ease:"expo.out",delay:.55}),we.from(".hero-copy > *",{y:26,autoAlpha:0,duration:1,ease:"power3.out",stagger:.09,delay:.75});let e=we.timeline({scrollTrigger:{trigger:"#top",start:"top top",end:"bottom top",scrub:.5}});t.masks.forEach((f,u)=>e.to(f,{yPercent:-(70+u*37%5*28),ease:"none",duration:1},0)),e.to(".wordmark",{autoAlpha:0,ease:"none",duration:.5},.2).to(".hero .bar",{scaleX:0,transformOrigin:"0 50%",ease:"none",duration:.4},0).to(".hero-copy",{y:-60,autoAlpha:0,ease:"none",duration:.3},0);let i=we.utils.toArray(".story .beat"),n=[[0,.17],[.19,.38],[.4,.62],[.64,2]],r=we.timeline({scrollTrigger:{trigger:"#ai",start:"top top",end:"bottom bottom",scrub:.6}});i.forEach((f,u)=>{let p=new Ro(f.querySelector("h2"),{type:"words"}).words,g=f.querySelectorAll(":scope > :not(h2)"),[m,_]=n[u];u===0?we.set(f,{autoAlpha:1}):(we.set(f,{autoAlpha:0}),r.set(f,{autoAlpha:1},m),r.fromTo(p,{autoAlpha:0,y:24},{autoAlpha:1,y:0,stagger:.003,duration:.04,ease:"power3.out"},m),g.length&&r.fromTo(g,{y:22,autoAlpha:0},{y:0,autoAlpha:1,duration:.04,ease:"power2.out"},m+.02)),_<1.5&&(r.to(p,{autoAlpha:0,y:-18,stagger:.002,duration:.03,ease:"power2.in"},_-.04),g.length&&r.to(g,{autoAlpha:0,duration:.03},_-.04),r.set(f,{autoAlpha:0},_))}),r.set({},{},1);let o=we.utils.toArray(".gallery li"),a=o.length,l=we.timeline({scrollTrigger:{trigger:"#pages",start:"top top",end:"bottom bottom",scrub:.4}});o.forEach((f,u)=>{let p=f.querySelectorAll(".num, b"),g=f.querySelector("span:not(.num)"),m=u/a,_=(u+1)/a;u===0?we.set(f,{autoAlpha:1}):(we.set(f,{autoAlpha:0}),l.set(f,{autoAlpha:1},m),l.fromTo(p,{autoAlpha:0,y:28},{autoAlpha:1,y:0,duration:.03,stagger:.006,ease:"power3.out"},m),l.fromTo(g,{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.03},m+.012)),u<a-1&&(l.to(p,{autoAlpha:0,y:-20,duration:.025,stagger:.005,ease:"power2.in"},_-.03),l.to(g,{autoAlpha:0,duration:.02},_-.03),l.set(f,{autoAlpha:0},_))}),l.set({},{},1);let c=we.utils.toArray(".rail li");ne.create({trigger:"#pages",start:"top top",end:"bottom bottom",onUpdate(f){let u=Math.min(a-1,Math.floor(f.progress*a));c.forEach((p,g)=>p.classList.toggle("on",g===u))}}),c.forEach((f,u)=>f.classList.toggle("on",u===0));let h=we.utils.toArray(".steps li");we.fromTo(".steps-fill",{scaleY:0},{scaleY:1,ease:"none",transformOrigin:"50% 0",scrollTrigger:{trigger:"#setup",start:"top top",end:"bottom bottom",scrub:.3}}),ne.create({trigger:"#setup",start:"top top",end:"bottom bottom",onUpdate(f){let u=f.progress,p=u<.38?0:u<.7?1:2;h.forEach((g,m)=>g.classList.toggle("on",m===p))}}),h.forEach((f,u)=>f.classList.toggle("on",u===0));for(let f of["#ai","#pages","#setup"])we.fromTo(`${f} .sticky`,{autoAlpha:1},{autoAlpha:0,ease:"none",immediateRender:!1,scrollTrigger:{trigger:f,start:"bottom bottom",end:"bottom 72%",scrub:!0}});we.fromTo(".tour-video",{scale:.78,borderRadius:44},{scale:1,borderRadius:14,ease:"none",scrollTrigger:{trigger:".tour-video",start:"top bottom",end:"center 55%",scrub:.4}}),we.utils.toArray(".tour h2, .downloads h2, .faq h2").forEach(f=>{let u=new Ro(f,{type:"lines,words",mask:"lines"}).words;we.from(u,{yPercent:115,duration:1.1,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:f,start:"top 88%",once:!0}})});let d=we.utils.toArray(".dl-list li");we.set(d,{autoAlpha:0,y:36}),ne.batch(d,{start:"top 92%",once:!0,onEnter:f=>we.to(f,{autoAlpha:1,y:0,duration:.9,ease:"power3.out",stagger:.1})}),document.querySelectorAll('a[href^="#"]:not(.skip)').forEach(f=>{f.addEventListener("click",u=>{let p=f.getAttribute("href"),g=p.length>1&&document.querySelector(p);g&&(u.preventDefault(),s.scrollTo(g,{duration:1.6}),history.replaceState(null,"",p))})})}export{kP as start};
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
