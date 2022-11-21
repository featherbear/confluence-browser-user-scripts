// ==UserScript==
// @name         Confluence Document Emoji Auto Input Focus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @match        https://*.atlassian.net/wiki/spaces/*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  document.addEventListener('load', () => new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type !== 'childList' || mutation.addedNodes.length == 0) continue

      for (let node of mutation.addedNodes) {
        let target = document.querySelector('div[data-emoji-picker-container] input')
        if (target) {
          target.focus();
          setTimeout(() => target.focus(), 0)
          return
        }
      }
    }
  }).observe(document.querySelector('div.atlaskit-portal-container'), {
    childList: true,
  })
  )
})();