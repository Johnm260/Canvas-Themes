// ==UserScript==
// @name         canvas themes
// @namespace    https://github.com/Johnm260/Canvas-Themes
// @version      1.0
// @description  ez
// @author       not you lmao
// @match        link to your school canvas site, for example "https://isd271.instructure.com/*"
// @grant        GM_addStyle
// ==/UserScript==
(function() {
    'use strict';
    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/Johnm260/Canvas-Themes@latest/Code.js";
    document.body.appendChild(script);
})();
