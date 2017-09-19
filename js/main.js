function toggleClass(e,t){if(e&&t){var n=e.className,i=n.indexOf(t);-1===i?n+=" "+t:n=n.substr(0,i)+n.substr(i+t.length),e.className=n}}function set_next(e){return e+1<gradients.length?e+1:0}function calc_step_size(e,t){return(e-t)/steps_total}function calc_steps(){for(var e in rgb_values)if(rgb_values.hasOwnProperty(e))for(var t=0;t<3;t++)rgb_values[e][t]=gradients[currentIndex][e][t],rgb_steps[e][t]=calc_step_size(gradients[nextIndex][e][t],rgb_values[e][t])}function updateGradient(){for(var e in rgb_values)if(rgb_values.hasOwnProperty(e))for(var t=0;t<3;t++)rgb_values[e][t]+=rgb_steps[e][t];var n="rgb("+(0|rgb_values.start[0])+","+(0|rgb_values.start[1])+","+(0|rgb_values.start[2])+")",i="rgb("+(0|rgb_values.stop[0])+","+(0|rgb_values.stop[1])+","+(0|rgb_values.stop[2])+")";if(n!=color1||i!=color2){color1=n,color2=i,div_style.backgroundImage="-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))";for(var t=0;t<4;t++)div_style.backgroundImage=prefixes[t]+"linear-gradient(45deg, "+color1+", "+color2+")"}steps_count++,steps_count>steps_total&&(steps_count=0,currentIndex=set_next(currentIndex),nextIndex=set_next(nextIndex),calc_steps()),-1!=div_style.backgroundImage.indexOf("gradient")&&window.requestAnimationFrame(updateGradient)}function startCount(){function e(){if((t-=1)<=0)return clearInterval(n),void(document.getElementById("timer").innerHTML="");document.getElementById("timer").innerHTML=t}var t=21,n=setInterval(e,1e3)}function showTimer(){document.getElementsByClassName("timer-cont")[0].style.opacity="1"}function hideTimer(){document.getElementsByClassName("timer-cont")[0].style.opacity="0"}window.Modernizr=function(e,t,n){function i(e){v.cssText=e}function o(e,t){return i(C.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var i in e){var o=e[i];if(!a(o,"-")&&v[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,i){for(var o in e){var a=t[e[o]];if(a!==n)return!1===i?e[o]:r(a,"function")?a.bind(i||t):a}return!1}function l(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?c(o,t):(o=(e+" "+B.join(i+" ")+i).split(" "),s(o,t,n))}var d,u,m={},f=t.documentElement,g="modernizr",p=t.createElement(g),v=p.style,h=t.createElement("input"),y=":)",b={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",k=T.split(" "),B=T.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},w={},x={},L={},I=[],S=I.slice,_=function(e,n,i,o){var r,a,c,s,l=t.createElement("div"),d=t.body,u=d||t.createElement("body");if(parseInt(i,10))for(;i--;)c=t.createElement("div"),c.id=o?o[i]:g+(i+1),l.appendChild(c);return r=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),l.id=g,(d?l:u).innerHTML+=r,u.appendChild(l),d||(u.style.background="",u.style.overflow="hidden",s=f.style.overflow,f.style.overflow="hidden",f.appendChild(u)),a=n(l,e),d?l.parentNode.removeChild(l):(u.parentNode.removeChild(u),f.style.overflow=s),!!a},N=function(){function e(e,o){o=o||t.createElement(i[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=r(o[e],"function"),r(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),A={}.hasOwnProperty;u=r(A,"undefined")||r(A.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=S.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=t.prototype;var r=new o,a=t.apply(r,n.concat(S.call(arguments)));return Object(a)===a?a:r}return t.apply(e,n.concat(S.call(arguments)))};return i}),w.flexbox=function(){return l("flexWrap")},w.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},w.canvastext=function(){return!!m.canvas&&!!r(t.createElement("canvas").getContext("2d").fillText,"function")},w.webgl=function(){return!!e.WebGLRenderingContext},w.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:_(["@media (",C.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},w.geolocation=function(){return"geolocation"in navigator},w.postmessage=function(){return!!e.postMessage},w.websqldatabase=function(){return!!e.openDatabase},w.indexedDB=function(){return!!l("indexedDB",e)},w.hashchange=function(){return N("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},w.history=function(){return!!e.history&&!!history.pushState},w.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},w.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},w.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),a(v.backgroundColor,"rgba")},w.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),a(v.backgroundColor,"rgba")||a(v.backgroundColor,"hsla")},w.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},w.backgroundsize=function(){return l("backgroundSize")},w.borderimage=function(){return l("borderImage")},w.borderradius=function(){return l("borderRadius")},w.boxshadow=function(){return l("boxShadow")},w.textshadow=function(){return""===t.createElement("div").style.textShadow},w.opacity=function(){return o("opacity:.55"),/^0.55$/.test(v.opacity)},w.cssanimations=function(){return l("animationName")},w.csscolumns=function(){return l("columnCount")},w.cssgradients=function(){var e="background-image:";return i((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+C.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),a(v.backgroundImage,"gradient")},w.cssreflections=function(){return l("boxReflect")},w.csstransforms=function(){return!!l("transform")},w.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in f.style&&_("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},w.csstransitions=function(){return l("transition")},w.fontface=function(){var e;return _('@font-face {font-family:"font";src:url("https://")}',function(n,i){var o=t.getElementById("smodernizr"),r=o.sheet||o.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(i.split(" ")[0])}),e},w.generatedcontent=function(){var e;return _(["#",g,"{font:0/0 a}#",g,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},w.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},w.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},w.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},w.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},w.webworkers=function(){return!!e.Worker},w.applicationcache=function(){return!!e.applicationCache},w.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},w.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==E.svg},w.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(b.call(t.createElementNS(E.svg,"animate")))},w.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(E.svg,"clipPath")))};for(var O in w)u(w,O)&&(d=O.toLowerCase(),m[d]=w[O](),I.push((m[d]?"":"no-")+d));return m.input||function(){m.input=function(n){for(var i=0,o=n.length;i<o;i++)L[n[i]]=n[i]in h;return L.list&&(L.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),L}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var i,o,r,a=0,c=e.length;a<c;a++)h.setAttribute("type",o=e[a]),i="text"!==h.type,i&&(h.value=y,h.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&h.style.WebkitAppearance!==n?(f.appendChild(h),r=t.defaultView,i=r.getComputedStyle&&"textfield"!==r.getComputedStyle(h,null).WebkitAppearance&&0!==h.offsetHeight,f.removeChild(h)):/^(search|tel)$/.test(o)||(i=/^(url|email)$/.test(o)?h.checkValidity&&!1===h.checkValidity():h.value!=y)),x[e[a]]=!!i;return x}("search tel url email datetime date month week time datetime-local number range color".split(" "))}(),m.addTest=function(e,t){if("object"==typeof e)for(var i in e)u(e,i)&&m.addTest(i,e[i]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,f.className+=" "+(t?"":"no-")+e,m[e]=t}return m},i(""),p=h=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[g]];return t||(t={},p++,e[g]=p,v[p]=t),t}function r(e,n,i){if(n||(n=t),d)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():f.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||m.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function a(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),a=0,c=i(),s=c.length;a<s;a++)r.createElement(c[a]);return r}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return h.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,t.frag)}function s(e){e||(e=t);var i=o(e);return h.shivCSS&&!l&&!i.hasCSS&&(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||c(e,i),e}var l,d,u=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",p=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){l=!0,d=!0}}();var h={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==u.shivCSS,supportsUnknownElements:d,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:s,createElement:r,createDocumentFragment:a};e.html5=h,s(t)}(this,t),m._version="2.8.3",m._prefixes=C,m._domPrefixes=B,m._cssomPrefixes=k,m.hasEvent=N,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=_,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+I.join(" "),m}(this,this.document),function(e,t,n){function i(e){return"[object Function]"==v.call(e)}function o(e){return"string"==typeof e}function r(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();y=1,e?e.t?g(function(){("c"==e.t?m.injectCss:m.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,i,o,r,s,l){function d(t){if(!f&&a(u.readyState)&&(b.r=f=1,!y&&c(),u.onload=u.onreadystatechange=null,t)){"img"!=e&&g(function(){T.removeChild(u)},50);for(var i in x[n])x[n].hasOwnProperty(i)&&x[n][i].onload()}}var l=l||m.errorTimeout,u=t.createElement(e),f=0,v=0,b={t:i,s:n,e:r,a:s,x:l};1===x[n]&&(v=1,x[n]=[]),"object"==e?u.data=n:(u.src=n,u.type=e),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){d.call(this,v)},h.splice(o,0,b),"img"!=e&&(v||2===x[n]?(T.insertBefore(u,C?null:p),g(d,l)):x[n].push(u))}function l(e,t,n,i,r){return y=0,t=t||"j",o(e)?s("c"==t?B:k,e,t,this.i++,n,i,r):(h.splice(this.i++,0,e),1==h.length&&c()),this}function d(){var e=m;return e.loader={load:l,i:0},e}var u,m,f=t.documentElement,g=e.setTimeout,p=t.getElementsByTagName("script")[0],v={}.toString,h=[],y=0,b="MozAppearance"in f.style,C=b&&!!t.createRange().compareNode,T=C?f:p.parentNode,f=e.opera&&"[object Opera]"==v.call(e.opera),f=!!t.attachEvent&&!f,k=b?"object":f?"script":"img",B=f?"script":k,E=Array.isArray||function(e){return"[object Array]"==v.call(e)},w=[],x={},L={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};m=function(e){function t(e){var t,n,i,e=e.split("!"),o=w.length,r=e.pop(),a=e.length,r={url:r,origUrl:r,prefixes:e};for(n=0;n<a;n++)i=e[n].split("="),(t=L[i.shift()])&&(r=t(r,i));for(n=0;n<o;n++)r=w[n](r);return r}function a(e,o,r,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=i(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,r,a,c):(x[s.url]?s.noexec=!0:x[s.url]=1,r.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(i(o)||i(l))&&r.load(function(){d(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),x[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(u=function(){var e=[].slice.call(arguments);m.apply(this,e),f()}),a(e,u,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(i(u)?u=function(){var e=[].slice.call(arguments);m.apply(this,e),f()}:u[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(m[s])),a(e[s],u,t,s,l))}else!n&&f()}var c,s,l=!!e.test,d=e.load||e.both,u=e.callback||r,m=u,f=e.complete||r;n(l?e.yep:e.nope,!!d),d&&n(d)}var s,l,u=this.yepnope.loader;if(o(e))a(e,0,u,0);else if(E(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,u,0):E(l)?m(l):Object(l)===l&&c(l,u);else Object(e)===e&&c(e,u)},m.addPrefix=function(e,t){L[e]=t},m.addFilter=function(e){w.push(e)},m.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",u=function(){t.removeEventListener("DOMContentLoaded",u,0),t.readyState="complete"},0)),e.yepnope=d(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,i,o,s,l){var d,u,f=t.createElement("script"),o=o||m.errorTimeout;f.src=e;for(u in i)f.setAttribute(u,i[u]);n=l?c:n||r,f.onreadystatechange=f.onload=function(){!d&&a(f.readyState)&&(d=1,n(),f.onload=f.onreadystatechange=null)},g(function(){d||(d=1,n(1))},o),s?f.onload():p.parentNode.insertBefore(f,p)},e.yepnope.injectCss=function(e,n,i,o,a,s){var l,o=t.createElement("link"),n=s?c:n||r;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in i)o.setAttribute(l,i[l]);a||(p.parentNode.insertBefore(o,p),g(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};var elNav=document.getElementById("main-nav"),navClose=document.getElementsByClassName("cd-nav-trigger")[0],elNavCont=document.getElementById("showContacts"),modalDonate=document.getElementById("myModal"),btnDonate=document.getElementById("myBtn"),spanDonate=document.getElementsByClassName("close")[0];elNav&&document.getElementById("main-nav").addEventListener("click",function(){toggleClass(document.getElementById("main-nav"),"nav-is-visible")}),elNavCont&&document.getElementById("showContacts").addEventListener("click",function(){toggleClass(document.getElementById("contacts"),"contacts-show")}),closeContacts=function(){document.getElementById("contacts").classList.remove("contacts-show")},btnDonate&&(btnDonate.onclick=function(){modalDonate.style.display="block"}),window.onclick=function(e){e.target==modalDonate&&(modalDonate.style.display="none"),e.target!==navClose&&document.getElementById("main-nav").classList.remove("nav-is-visible")},spanDonate&&(spanDonate.onclick=function(){modalDonate.style.display="none"}),function(e,t,n){(t[n]=t[n]||[]).push(function(){try{t.yaCounter45080769=new Ya.Metrika({id:45080769,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(e){}});var i=e.getElementsByTagName("script")[0],o=e.createElement("script"),r=function(){i.parentNode.insertBefore(o,i)};o.type="text/javascript",o.async=!0,o.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",r,!1):r()}(document,window,"yandex_metrika_callbacks");var x=screen.width,y=screen.height;window.addEventListener("orientationchange",function(){location.reload()});var addLinearCont=function(){document.getElementById("anim-main").classList.add("linear-cont")},removeContCircle=function(){document.getElementById("anim-circle").classList.add("main-circle-hide"),document.getElementById("anim-main").classList.remove("linear-cont")},addMainCircle=function(){document.getElementById("anim-circle").classList.add("main-circle")},hideBtn=function(){document.getElementById("startanim").classList.add("btn-hide"),document.getElementById("main-nav").classList.add("cd-stretchy-nav-hide")},hideTooltip=function(){document.getElementById("tp-hide").classList.add("tooltip-hide")},showBtn=function(){document.getElementById("tomain").classList.remove("btn-end-hide"),document.getElementById("tomain").classList.add("btn-end-show"),document.getElementById("main-nav").classList.remove("cd-stretchy-nav-hide")},addCircleBlinking=function(){document.getElementById("anim-circle").classList.add("circle-blinking"),startCount(),showTimer()},addCircleOrbitBlinking=function(){document.getElementById("anim-circle").classList.remove("orbit-circle"),document.getElementById("anim-circle").classList.remove("orbit-circle-4x3"),document.getElementById("anim-circle").classList.add("main-circle"),document.getElementById("anim-circle").classList.add("circle-blinking"),startCount(),showTimer()},removeCircleBlinking=function(){document.getElementById("anim-circle").classList.remove("circle-blinking"),setTimeout(hideTimer,5e3)},addTopBotAnim=function(){document.getElementById("anim-main").classList.add("circle-top-bot")},addLeftRightAnim=function(){document.getElementById("anim-main").classList.remove("circle-top-bot"),document.getElementById("anim-main").classList.add("circle-left-right")},addTopRightBotLeftAnim=function(){document.getElementById("anim-main").classList.remove("circle-left-right"),document.getElementById("anim-main").classList.add("circle-topright-botleft")},addTopLeftBotRightAnim=function(){document.getElementById("anim-main").classList.remove("circle-topright-botleft"),document.getElementById("anim-main").classList.add("circle-topleft-botright")},addCircleSquareClockwise=function(){document.getElementById("anim-main").classList.remove("circle-topleft-botright"),document.getElementById("anim-main").classList.add("circle-square-clockwise")},addCircleSquareCounterclockWise=function(){document.getElementById("anim-main").classList.remove("circle-square-clockwise"),document.getElementById("anim-main").classList.add("circle-square-counterclock-wise")},addCircleOrbitClockwise=function(){document.getElementById("anim-main").classList.remove("circle-square-counterclock-wise"),document.getElementById("anim-circle").classList.remove("main-circle"),x>=y?document.getElementById("anim-circle").classList.add("orbit-circle"):document.getElementById("anim-circle").classList.add("orbit-circle-4x3"),document.getElementById("anim-main").classList.add("circle-orbit-clockwise")},addCircleOrbitCounterclockWise=function(){document.getElementById("anim-main").classList.remove("circle-orbit-clockwise"),document.getElementById("anim-main").classList.add("circle-orbit-counterclock-wise")},addCircleSnakeRightLeft=function(){document.getElementById("anim-main").classList.remove("circle-orbit-counterclock-wise"),document.getElementById("anim-main").classList.add("circle-snake-right-left")},elAnim=document.getElementById("startanim");elAnim&&(startanim.onclick=function(){setTimeout(addLinearCont,500),setTimeout(addMainCircle,500),setTimeout(addCircleBlinking,1e3),setTimeout(removeCircleBlinking,16e3),setTimeout(hideBtn,500),setTimeout(hideTooltip,500),setTimeout(addTopBotAnim,22e3),setTimeout(addLeftRightAnim,42e3),x>1&&x<=1083?(setTimeout(addCircleBlinking,59e3),setTimeout(removeCircleBlinking,74e3),setTimeout(addTopRightBotLeftAnim,79e3),setTimeout(addTopLeftBotRightAnim,96e3),setTimeout(addCircleBlinking,113e3),setTimeout(removeCircleBlinking,128e3),setTimeout(addCircleSquareClockwise,133e3),setTimeout(addCircleBlinking,171e3),setTimeout(removeCircleBlinking,186e3),setTimeout(addCircleSquareCounterclockWise,191e3),setTimeout(addCircleBlinking,231e3),setTimeout(removeCircleBlinking,246e3),setTimeout(addCircleOrbitClockwise,251e3),setTimeout(addCircleOrbitCounterclockWise,27e4),setTimeout(addCircleOrbitBlinking,291e3),setTimeout(removeCircleBlinking,306e3),setTimeout(addCircleSnakeRightLeft,311e3),setTimeout(removeContCircle,342e3),setTimeout(showBtn,343e3)):x>1083&&x<=1643?(setTimeout(addCircleBlinking,62e3),setTimeout(removeCircleBlinking,77e3),setTimeout(addTopRightBotLeftAnim,82e3),setTimeout(addTopLeftBotRightAnim,102e3),setTimeout(addCircleBlinking,122e3),setTimeout(removeCircleBlinking,137e3),setTimeout(addCircleSquareClockwise,142e3),setTimeout(addCircleBlinking,186e3),setTimeout(removeCircleBlinking,201e3),setTimeout(addCircleSquareCounterclockWise,206e3),setTimeout(addCircleBlinking,25e4),setTimeout(removeCircleBlinking,265e3),setTimeout(addCircleOrbitClockwise,27e4),setTimeout(addCircleOrbitCounterclockWise,289e3),setTimeout(addCircleOrbitBlinking,31e4),setTimeout(removeCircleBlinking,325e3),setTimeout(addCircleSnakeRightLeft,33e4),setTimeout(removeContCircle,361e3),setTimeout(showBtn,362e3)):x>1643&&x<=3008?(setTimeout(addCircleBlinking,65e3),setTimeout(removeCircleBlinking,8e4),setTimeout(addTopRightBotLeftAnim,85e3),setTimeout(addTopLeftBotRightAnim,108e3),setTimeout(addCircleBlinking,131e3),setTimeout(removeCircleBlinking,146e3),setTimeout(addCircleSquareClockwise,151e3),setTimeout(addCircleBlinking,201e3),setTimeout(removeCircleBlinking,216e3),setTimeout(addCircleSquareCounterclockWise,221e3),setTimeout(addCircleBlinking,271e3),setTimeout(removeCircleBlinking,286e3),setTimeout(addCircleOrbitClockwise,291e3),setTimeout(addCircleOrbitCounterclockWise,31e4),setTimeout(addCircleOrbitBlinking,331e3),setTimeout(removeCircleBlinking,346e3),setTimeout(addCircleSnakeRightLeft,351e3),setTimeout(removeContCircle,382e3),setTimeout(showBtn,383e3)):x>3008&&(setTimeout(addCircleBlinking,74e3),setTimeout(removeCircleBlinking,89e3),setTimeout(addTopRightBotLeftAnim,94e3),setTimeout(addTopLeftBotRightAnim,126e3),setTimeout(addCircleBlinking,158e3),setTimeout(removeCircleBlinking,173e3),setTimeout(addCircleSquareClockwise,178e3),setTimeout(addCircleBlinking,234e3),setTimeout(removeCircleBlinking,249e3),setTimeout(addCircleSquareCounterclockWise,254e3),setTimeout(addCircleBlinking,31e4),setTimeout(removeCircleBlinking,325e3),setTimeout(addCircleOrbitClockwise,33e4),setTimeout(addCircleOrbitCounterclockWise,349e3),setTimeout(addCircleOrbitBlinking,37e4),setTimeout(removeCircleBlinking,385e3),setTimeout(addCircleSnakeRightLeft,39e4),setTimeout(removeContCircle,421e3),setTimeout(showBtn,422e3))});var elGradient=document.getElementById("gradient");if(elGradient){var $div=document.getElementById("gradient"),gradients=[{start:[11,72,107],stop:[103,178,111]},{start:[24,90,157],stop:[68,160,141]},{start:[11,135,147],stop:[69,104,220]}],transition_time=14,currentIndex=0,nextIndex=1,steps_count=0,steps_total=Math.round(60*transition_time),rgb_steps={start:[0,0,0],stop:[0,0,0]},rgb_values={start:[0,0,0],stop:[0,0,0]},prefixes=["-webkit-","-moz-","-o-","-ms-",""],div_style=$div.style,color1,color2;calc_steps(),window.requestAnimationFrame(updateGradient)}