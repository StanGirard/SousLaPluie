/*!
 * simply v0.2.7
 * Copyright 2019 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */!function o(s,u,l){function c(r,e){if(!u[r]){if(!s[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(f)return f(r,!0);var t=new Error("Cannot find module '"+r+"'");throw t.code="MODULE_NOT_FOUND",t}var i=u[r]={exports:{}};s[r][0].call(i.exports,function(e){return c(s[r][1][e]||e)},i,i.exports,o,s,u,l)}return u[r].exports}for(var f="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,r,n){"use strict";!function(n,t){var i=t.querySelector("link[rel=next]");if(i){var o=t.querySelector(".feed-entry-content");if(o){var r=300,s=!1,u=!1,l=n.scrollY,c=n.innerHeight,f=t.documentElement.scrollHeight;n.addEventListener("scroll",d,{passive:!0}),n.addEventListener("resize",p),a()}}function v(){if(404===this.status)return n.removeEventListener("scroll",d),void n.removeEventListener("resize",p);var e=this.response.querySelector(".feed-entry-wrap");o.appendChild(e);var r=this.response.querySelector("link[rel=next]");r?i.href=r.href:(n.removeEventListener("scroll",d),n.removeEventListener("resize",p)),f=t.documentElement.scrollHeight,u=s=!1}function e(){if(!u)if(l+c<=f-r)s=!1;else{u=!0;var e=new n.XMLHttpRequest;e.responseType="document",e.addEventListener("load",v),e.open("GET",i.href),e.send(null)}}function a(){s||n.requestAnimationFrame(e),s=!0}function d(){l=n.scrollY,a()}function p(){c=n.innerHeight,f=t.documentElement.scrollHeight,a()}}(window,document)},{}]},{},[1]);