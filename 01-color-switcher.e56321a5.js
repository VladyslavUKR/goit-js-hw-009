const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(a){e.hasAttribute("disabled")&&(e.removeAttribute("disabled"),t.setAttribute("disabled","disabled"),d=setInterval((()=>document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3))})),e.addEventListener("click",(function(){t.hasAttribute("disabled")&&(clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","disabled"))}));
//# sourceMappingURL=01-color-switcher.e56321a5.js.map
