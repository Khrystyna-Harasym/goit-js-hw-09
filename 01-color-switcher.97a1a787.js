!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;t.addEventListener("click",(function(){n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3),t.setAttribute("disabled","")})),e.addEventListener("click",(function(){clearInterval(n),e.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.97a1a787.js.map
