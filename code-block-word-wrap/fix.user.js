// ==UserScript==
// @name        Confluence Code Block Word Wrap
// @namespace   featherbear://confluence/code-word-wrap
// @match       https://*.atlassian.net/*
// @grant       none
// @version     1.0
// @author      featherbear
// @description 20/03/2023, 18:52:58
// ==/UserScript==

setTimeout(function() {
  const styleTag = document.createElement('style')
  let spacing = '3em';
  
   // TODO: Auto update, subscribe
  const css = `
code:not([contenteditable=true]) {
    white-space: pre-wrap;
    max-width: min(90%, 760px);

    padding-left: ${spacing};
    text-indent: 0;
}

code:not([contenteditable=true]) span.linenumber {
  transform: translateX(-${spacing});
  margin-right: -${spacing};
}
`
  
  styleTag.innerHTML = css.replace(/;/g, ' !important;');
  document.body.appendChild(styleTag)
  
  console.log(document.querySelector('code'));
  
  console.log("Injected CSS override");
}, 0);
