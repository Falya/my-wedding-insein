!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var a=r(n(2)),o=r(n(3)),i=r(n(4)),s=r(n(5)),l=r(n(6));function r(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".loader-div");e.classList.add("animated","fadeOut"),0==e.style.opacity&&(e.style.display="none",document.body.style.overflow="visible"),(0,a.default)(),(0,o.default)(),(0,i.default)(),(0,s.default)(),(0,l.default)()})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementsByClassName("slider")[0].getElementsByClassName("a-slide"),t=document.querySelector(".slick-dots"),n=t.getElementsByTagName("li"),a=1;function o(t){t>e.length&&(a=1),t<1&&(a=e.length);for(var o=0;o<e.length;o++)e[o].style.display="none",e[o].classList.remove("animated","fadeIn");for(var i=0;i<n.length;i++)n[i].classList.remove("slick-active");e[a-1].classList.add("animated","fadeIn"),e[a-1].style.display="",n[a-1].classList.add("slick-active")}function i(e){o(a=e)}o(a);setInterval(function(){!function(e){o(a+=e)}(1)},3e3);t.addEventListener("click",function(e){for(var t=e.target,a=0;a<=n.length;a++)"LI"==t.tagName&&t==n[a-1]&&i(a)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementsByClassName("header-login__button")[0],t=document.getElementsByClassName("footer-login__button")[0],n=document.querySelector(".overlay"),a=document.querySelector(".popup"),o=document.querySelector(".popup-close");function i(){n.style.display="block",n.classList.add("animated","fadeIn"),l(),a.classList.add("animated","flipInX")}function s(){a.classList.remove("animated","flipInX"),a.classList.add("animated","flipOutX"),n.classList.remove("animated","fadeIn"),n.classList.add("animated","fadeOut"),setTimeout(function(){n.style.display="",n.classList.remove("animated","fadeOut"),a.classList.remove("animated","flipOutX")},1e3)}function l(){var e=document.documentElement.clientWidth,t=a.offsetWidth,n=(e-t)/2;a.style.left=n+"px"}e.addEventListener("click",function(){i()}),t.addEventListener("click",function(){i()}),o.addEventListener("click",s),n.addEventListener("click",function(e){var t=e.target;t.classList.contains("overlay")&&s()}),window.addEventListener("resize",l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementsByClassName("popup-form")[0],t=e.getElementsByTagName("input");e.querySelector(".popup-form__btn");function n(e){var t="+375 (__) ___-__-__",n=0,a=t.replace(/\D/g,""),o=this.value.replace(/\D/g,"");a.length>=o.length&&(o=a),this.value=t.replace(/./g,function(a){return/[_\d]/.test(a)&&n<o.length?o.charAt(n++):n>=o.length&&t.lengtth>=n?"(__) ___ __ __":"Backspace"!=e.key||isNaN(o.charAt(n))?a:""}),"blur"==e.type?4==this.value.length&&(this.value=""):function(e,t,n){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var a=t.createTextRange();a.collapse(!0),a.moveEnd("character",e),a.moveStart("character",e),a.select()}}(this.value.length,this)}t[0].onkeypress=function(e){var t=(e||window.event).keyCode;if(t<1040||t>1103)return 1105==t||32==t},t[1].setAttribute("pattern","\\+375 \\([0-9]{2}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}"),t[1].addEventListener("input",n,!1),t[1].addEventListener("focus",n,!1),t[1].addEventListener("blur",n,!1),t[1].addEventListener("keydown",n,!1),function(n){close=document.querySelector(".popup-close"),n.addEventListener("submit",function(o){o.preventDefault();var i=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div");i.classList.add("status","animated"),n.parentNode.appendChild(i),i.style.width=e.clientWidth+"px";var r=new FormData(n);r.append("name",t[0].value),r.append("phone",t[1].value),r.append("email",t[2].value),new Promise(function(t,n){var a=new XMLHttpRequest;a.open("POST","../../server.php"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){a.readyState<4?(i.style.display="block",i.classList.add("fadeIn"),e.classList.add("blur"),i.appendChild(s),s.classList.add("circle-loader"),console.log("loading")):4===a.readyState&&(200==a.status&&a.status<300?(console.log("success"),t()):(n(),console.log("fail")))},a.send(r)}).then(function(){s.appendChild(l),s.classList.add("load-complete"),l.classList.add("draw","checkmark"),setTimeout(function(){i.classList.remove("fadeIn"),i.classList.add("fadeOut"),s.classList.remove("load-complete"),l.classList.remove("draw","checkmark"),setTimeout(function(){i.style.display="none",i.classList.remove("fadeOut"),e.classList.remove("blur"),close.click()},500)},2e3)}).catch(function(){i.style.display="block",i.classList.add("fadeIn"),i.innerHTML=a.failure,setTimeout(function(){i.classList.add("fadeOut"),i.style.display="none",i.classList.remove("fadeOut"),e.classList.remove("blur")},2e3)}).then(function(){for(var e=0;e<t.length;e++)t[e].value=""})})}(e);var a=new Object;a.failure="Что-то пошло не так... 404"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function e(e){window.scrollTo(0,e)}document.querySelector("header").addEventListener("click",function(t){t.preventDefault();var n=t.target,a=navigator.userAgent;if(n.hasAttribute("href")){var o=document.getElementById(n.getAttribute("href").slice(1));if(a.search(/Edge/)>0)!function(e,t){var n=Date.now();requestAnimationFrame(function a(){var o=Date.now()-n;o>t&&(o=t),e(o),o<t&&requestAnimationFrame(a)})}(function(e){window.scrollBy(0,o.getBoundingClientRect().top/20-3)},1200);else{var i=o.getBoundingClientRect().top+30,s=document.documentElement.scrollTop;!function(e,t,n,a){var o=Date.now();requestAnimationFrame(function i(){var s=Date.now()-o,l=s/a;s>a&&(s=a),l>1&&(l=1);var r=function(e){return 1-Math.sin(Math.acos(e))}(l),c=0;c=n>0?Math.min(t+1e4*r,t+n):Math.max(t-1e4*r,t+n),e(c),c!=t+n&&requestAnimationFrame(i)})}(e,s,i,1200)}console.log("target",o)}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelector(".header-button__main"),t=document.querySelector(".portfolio-button__main");function n(){document.location.href="../../site-builder.php"}e.addEventListener("click",n),t.addEventListener("click",n)}}]);
//# sourceMappingURL=bundle.js.map