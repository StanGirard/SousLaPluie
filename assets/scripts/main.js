/*!
 * simply v0.2.7
 * Copyright 2019 antidoteFredo <hello@antidotefredo.ninja> (https://github.com/antidotefredoninja/simply)
 * Licensed under GPLv3
 */
! function i(a, l, s) {
    function c(t, e) { if (!l[t]) { if (!a[t]) { var n = "function" == typeof require && require; if (!e && n) return n(t, !0); if (u) return u(t, !0); var r = new Error("Cannot find module '" + t + "'"); throw r.code = "MODULE_NOT_FOUND", r } var o = l[t] = { exports: {} };
            a[t][0].call(o.exports, function(e) { return c(a[t][1][e] || e) }, o, o.exports, i, a, l, s) } return l[t].exports } for (var u = "function" == typeof require && require, e = 0; e < s.length; e++) c(s[e]); return c }({ 1: [function(e, t, n) { t.exports = function(e) { if (Array.isArray(e)) return e } }, {}], 2: [function(e, t, n) { t.exports = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, {}], 3: [function(e, t, n) {
        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        t.exports = function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e } }, {}], 4: [function(e, t, n) { t.exports = function(e) { return e && e.__esModule ? e : { default: e } } }, {}], 5: [function(e, t, n) { t.exports = function(e, t) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) { var n = [],
                    r = !0,
                    o = !1,
                    i = void 0; try { for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, i = e } finally { try { r || null == l.return || l.return() } finally { if (o) throw i } } return n } } }, {}], 6: [function(e, t, n) { t.exports = function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") } }, {}], 7: [function(e, t, n) { var r = e("./arrayWithHoles"),
            o = e("./iterableToArrayLimit"),
            i = e("./nonIterableRest");
        t.exports = function(e, t) { return r(e) || o(e, t) || i() } }, { "./arrayWithHoles": 1, "./iterableToArrayLimit": 5, "./nonIterableRest": 6 }], 8: [function(e, t, n) {
        function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function o(e) { return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? t.exports = o = function(e) { return r(e) } : t.exports = o = function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e) }, o(e) }
        t.exports = o }, {}], 9: [function(e, t, n) { t.exports = e("regenerator-runtime") }, { "regenerator-runtime": 12 }], 10: [function(e, t, n) { var r, o;
        r = "undefined" != typeof window ? window : {}, o = function(c, N, u) { "use strict"; var R, D; if (function() { var e; var t = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: true, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: true, ricTimeout: 0, throttleDelay: 125 };
                    D = c.lazySizesConfig || c.lazysizesConfig || {}; for (e in t) { if (!(e in D)) { D[e] = t[e] } } }(), !N || !N.getElementsByClassName) { return { init: function() {}, cfg: D, noSupport: true } } var P = N.documentElement,
                r = c.HTMLPictureElement,
                W = "addEventListener",
                F = "getAttribute",
                I = c[W].bind(c),
                B = c.setTimeout,
                G = c.requestAnimationFrame || B,
                l = c.requestIdleCallback,
                Y = /^picture$/i,
                o = ["load", "error", "lazyincluded", "_lazyloaded"],
                n = {},
                U = Array.prototype.forEach,
                $ = function(e, t) { if (!n[t]) { n[t] = new RegExp("(\\s|^)" + t + "(\\s|$)") } return n[t].test(e[F]("class") || "") && n[t] },
                V = function(e, t) { if (!$(e, t)) { e.setAttribute("class", (e[F]("class") || "").trim() + " " + t) } },
                J = function(e, t) { var n; if (n = $(e, t)) { e.setAttribute("class", (e[F]("class") || "").replace(n, " ")) } },
                X = function(t, n, e) { var r = e ? W : "removeEventListener"; if (e) { X(t, n) }
                    o.forEach(function(e) { t[r](e, n) }) },
                Z = function(e, t, n, r, o) { var i = N.createEvent("Event"); if (!n) { n = {} }
                    n.instance = R;
                    i.initEvent(t, !r, !o);
                    i.detail = n;
                    e.dispatchEvent(i); return i },
                K = function(e, t) { var n; if (!r && (n = c.picturefill || D.pf)) { if (t && t.src && !e[F]("srcset")) { e.setAttribute("srcset", t.src) }
                        n({ reevaluate: true, elements: [e] }) } else if (t && t.src) { e.src = t.src } },
                Q = function(e, t) { return (getComputedStyle(e, null) || {})[t] },
                a = function(e, t, n) { n = n || e.offsetWidth; while (n < D.minSize && t && !e._lazysizesWidth) { n = t.offsetWidth;
                        t = t.parentNode } return n },
                ee = function() { var n, r; var t = []; var o = []; var i = t; var a = function() { var e = i;
                        i = t.length ? o : t;
                        n = true;
                        r = false; while (e.length) { e.shift()() }
                        n = false }; var e = function(e, t) { if (n && !t) { e.apply(this, arguments) } else { i.push(e); if (!r) { r = true;
                                (N.hidden ? B : G)(a) } } };
                    e._lsFlush = a; return e }(),
                te = function(n, e) { return e ? function() { ee(n) } : function() { var e = this; var t = arguments;
                        ee(function() { n.apply(e, t) }) } },
                ne = function(e) { var n; var r = 0; var o = D.throttleDelay; var i = D.ricTimeout; var t = function() { n = false;
                        r = u.now();
                        e() }; var a = l && i > 49 ? function() { l(t, { timeout: i }); if (i !== D.ricTimeout) { i = D.ricTimeout } } : te(function() { B(t) }, true); return function(e) { var t; if (e = e === true) { i = 33 } if (n) { return }
                        n = true;
                        t = o - (u.now() - r); if (t < 0) { t = 0 } if (e || t < 9) { a() } else { B(a, t) } } },
                re = function(e) { var t, n; var r = 99; var o = function() { t = null;
                        e() }; var i = function() { var e = u.now() - n; if (e < r) { B(i, r - e) } else {
                            (l || o)(o) } }; return function() { n = u.now(); if (!t) { t = B(i, r) } } },
                e = function() { var m, p, d, h, e; var v, y, g, b, z, w, E; var i = /^img$/i; var f = /^iframe$/i; var L = "onscroll" in c && !/(gle|ing)bot/.test(navigator.userAgent); var x = 0; var C = 0; var _ = 0; var k = -1; var S = function(e) { _--; if (!e || _ < 0 || !e.target) { _ = 0 } }; var A = function(e) { if (E == null) { E = Q(N.body, "visibility") == "hidden" } return E || !(Q(e.parentNode, "visibility") == "hidden" && Q(e, "visibility") == "hidden") }; var j = function(e, t) { var n; var r = e; var o = A(e);
                        g -= t;
                        w += t;
                        b -= t;
                        z += t; while (o && (r = r.offsetParent) && r != N.body && r != P) { o = (Q(r, "opacity") || 1) > 0; if (o && Q(r, "overflow") != "visible") { n = r.getBoundingClientRect();
                                o = z > n.left && b < n.right && w > n.top - 1 && g < n.bottom + 1 } } return o }; var t = function() { var e, t, n, r, o, i, a, l, s, c, u, d; var f = R.elements; if ((h = D.loadMode) && _ < 8 && (e = f.length)) { t = 0;
                            k++; for (; t < e; t++) { if (!f[t] || f[t]._lazyRace) { continue } if (!L || R.prematureUnveil && R.prematureUnveil(f[t])) { M(f[t]); continue } if (!(l = f[t][F]("data-expand")) || !(i = l * 1)) { i = C } if (!c) { c = !D.expand || D.expand < 1 ? P.clientHeight > 500 && P.clientWidth > 500 ? 500 : 370 : D.expand;
                                    R._defEx = c;
                                    u = c * D.expFactor;
                                    d = D.hFac;
                                    E = null; if (C < u && _ < 1 && k > 2 && h > 2 && !N.hidden) { C = u;
                                        k = 0 } else if (h > 1 && k > 1 && _ < 6) { C = c } else { C = x } } if (s !== i) { v = innerWidth + i * d;
                                    y = innerHeight + i;
                                    a = i * -1;
                                    s = i }
                                n = f[t].getBoundingClientRect(); if ((w = n.bottom) >= a && (g = n.top) <= y && (z = n.right) >= a * d && (b = n.left) <= v && (w || z || b || g) && (D.loadHidden || A(f[t])) && (p && _ < 3 && !l && (h < 3 || k < 4) || j(f[t], i))) { M(f[t]);
                                    o = true; if (_ > 9) { break } } else if (!o && p && !r && _ < 4 && k < 4 && h > 2 && (m[0] || D.preloadAfterLoad) && (m[0] || !l && (w || z || b || g || f[t][F](D.sizesAttr) != "auto"))) { r = m[0] || f[t] } } if (r && !o) { M(r) } } }; var n = ne(t); var O = function(e) { var t = e.target; if (t._lazyCache) { delete t._lazyCache; return }
                        S(e);
                        V(t, D.loadedClass);
                        J(t, D.loadingClass);
                        X(t, q);
                        Z(t, "lazyloaded") }; var r = te(O); var q = function(e) { r({ target: e.target }) }; var T = function(t, n) { try { t.contentWindow.location.replace(n) } catch (e) { t.src = n } }; var H = function(e) { var t; var n = e[F](D.srcsetAttr); if (t = D.customMedia[e[F]("data-media") || e[F]("media")]) { e.setAttribute("media", t) } if (n) { e.setAttribute("srcset", n) } }; var a = te(function(t, e, n, r, o) { var i, a, l, s, c, u; if (!(c = Z(t, "lazybeforeunveil", e)).defaultPrevented) { if (r) { if (n) { V(t, D.autosizesClass) } else { t.setAttribute("sizes", r) } }
                            a = t[F](D.srcsetAttr);
                            i = t[F](D.srcAttr); if (o) { l = t.parentNode;
                                s = l && Y.test(l.nodeName || "") }
                            u = e.firesLoad || "src" in t && (a || i || s);
                            c = { target: t };
                            V(t, D.loadingClass); if (u) { clearTimeout(d);
                                d = B(S, 2500);
                                X(t, q, true) } if (s) { U.call(l.getElementsByTagName("source"), H) } if (a) { t.setAttribute("srcset", a) } else if (i && !s) { if (f.test(t.nodeName)) { T(t, i) } else { t.src = i } } if (o && (a || s)) { K(t, { src: i }) } } if (t._lazyRace) { delete t._lazyRace }
                        J(t, D.lazyClass);
                        ee(function() { var e = t.complete && t.naturalWidth > 1; if (!u || e) { if (e) { V(t, "ls-is-cached") }
                                O(c);
                                t._lazyCache = true;
                                B(function() { if ("_lazyCache" in t) { delete t._lazyCache } }, 9) } if (t.loading == "lazy") { _-- } }, true) }); var M = function(e) { if (e._lazyRace) { return } var t; var n = i.test(e.nodeName); var r = n && (e[F](D.sizesAttr) || e[F]("sizes")); var o = r == "auto"; if ((o || !p) && n && (e[F]("src") || e.srcset) && !e.complete && !$(e, D.errorClass) && $(e, D.lazyClass)) { return }
                        t = Z(e, "lazyunveilread").detail; if (o) { oe.updateElem(e, true, e.offsetWidth) }
                        e._lazyRace = true;
                        _++;
                        a(e, t, o, r, n) }; var o = re(function() { D.loadMode = 3;
                        n() }); var l = function() { if (D.loadMode == 3) { D.loadMode = 2 }
                        o() }; var s = function() { if (p) { return } if (u.now() - e < 999) { B(s, 999); return }
                        p = true;
                        D.loadMode = 3;
                        n();
                        I("scroll", l, true) }; return { _: function() { e = u.now();
                            R.elements = N.getElementsByClassName(D.lazyClass);
                            m = N.getElementsByClassName(D.lazyClass + " " + D.preloadClass);
                            I("scroll", n, true);
                            I("resize", n, true);
                            I("pageshow", function(e) { if (e.persisted) { var t = N.querySelectorAll("." + D.loadingClass); if (t.length && t.forEach) { G(function() { t.forEach(function(e) { if (e.complete) { M(e) } }) }) } } }); if (c.MutationObserver) { new MutationObserver(n).observe(P, { childList: true, subtree: true, attributes: true }) } else { P[W]("DOMNodeInserted", n, true);
                                P[W]("DOMAttrModified", n, true);
                                setInterval(n, 999) }
                            I("hashchange", n, true);
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) { N[W](e, n, true) }); if (/d$|^c/.test(N.readyState)) { s() } else { I("load", s);
                                N[W]("DOMContentLoaded", n);
                                B(s, 2e4) } if (R.elements.length) { t();
                                ee._lsFlush() } else { n() } }, checkElems: n, unveil: M, _aLSL: l } }(),
                oe = function() { var n; var i = te(function(e, t, n, r) { var o, i, a;
                        e._lazysizesWidth = r;
                        r += "px";
                        e.setAttribute("sizes", r); if (Y.test(t.nodeName || "")) { o = t.getElementsByTagName("source"); for (i = 0, a = o.length; i < a; i++) { o[i].setAttribute("sizes", r) } } if (!n.detail.dataAttr) { K(e, n.detail) } }); var r = function(e, t, n) { var r; var o = e.parentNode; if (o) { n = a(e, o, n);
                            r = Z(e, "lazybeforesizes", { width: n, dataAttr: !!t }); if (!r.defaultPrevented) { n = r.detail.width; if (n && n !== e._lazysizesWidth) { i(e, o, r, n) } } } }; var e = function() { var e; var t = n.length; if (t) { e = 0; for (; e < t; e++) { r(n[e]) } } }; var t = re(e); return { _: function() { n = N.getElementsByClassName(D.autosizesClass);
                            I("resize", t) }, checkElems: t, updateElem: r } }(),
                t = function() { if (!t.i && N.getElementsByClassName) { t.i = true;
                        oe._();
                        e._() } }; return B(function() { D.init && t() }), R = { cfg: D, autoSizer: oe, loader: e, init: t, uP: K, aC: V, rC: J, hC: $, fire: Z, gW: a, rAF: ee } }(r, r.document, Date), r.lazySizes = o, "object" == typeof t && t.exports && (t.exports = o) }, {}], 11: [function(e, t, n) { var r, o;
        r = this, o = function() { "use strict";

            function n(e) { return "IMG" === e.tagName }

            function x(e) { return e && 1 === e.nodeType }

            function C(e) { return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase() }

            function d(e) { try { return Array.isArray(e) ? e.filter(n) : (t = e, NodeList.prototype.isPrototypeOf(t) ? [].slice.call(e).filter(n) : x(e) ? [e].filter(n) : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)).filter(n) : []) } catch (e) { throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom") } var t }

            function _(e, t) { var n = k({ bubbles: !1, cancelable: !1, detail: void 0 }, t); if ("function" == typeof window.CustomEvent) return new CustomEvent(e, n); var r = document.createEvent("CustomEvent"); return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r } var k = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }; return function(e, t) { void 0 === t && (t = {}); var n = t.insertAt; if ("undefined" != typeof document) { var r = document.head || document.getElementsByTagName("head")[0],
                            o = document.createElement("style");
                        o.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e)) } }(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),
                function e(t, n) {
                    function r() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var o = t.reduce(function(e, t) { return [].concat(e, d(t)) }, []); return o.filter(function(e) { return -1 === y.indexOf(e) }).forEach(function(e) { y.push(e), e.classList.add("medium-zoom-image") }), s.forEach(function(e) { var t = e.type,
                                n = e.listener,
                                r = e.options;
                            o.forEach(function(e) { e.addEventListener(t, n, r) }) }), L }

                    function o() {
                        function p() { var e = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, left: 0, top: 0, right: 0, bottom: 0 },
                                t = void 0,
                                n = void 0; if (z.container)
                                if (z.container instanceof Object) t = (e = k({}, e, z.container)).width - e.left - e.right - 2 * z.margin, n = e.height - e.top - e.bottom - 2 * z.margin;
                                else { var r = (x(z.container) ? z.container : document.querySelector(z.container)).getBoundingClientRect(),
                                        o = r.width,
                                        i = r.height,
                                        a = r.left,
                                        l = r.top;
                                    e = k({}, e, { width: o, height: i, left: a, top: l }) }
                            t = t || e.width - 2 * z.margin, n = n || e.height - 2 * z.margin; var s = w.zoomedHd || w.original,
                                c = C(s) ? t : s.naturalWidth || t,
                                u = C(s) ? n : s.naturalHeight || n,
                                d = s.getBoundingClientRect(),
                                f = d.top,
                                m = d.left,
                                p = d.width,
                                h = d.height,
                                v = Math.min(c, t) / p,
                                y = Math.min(u, n) / h,
                                g = Math.min(v, y),
                                b = "scale(" + g + ") translate3d(" + ((t - p) / 2 - m + z.margin + e.left) / g + "px, " + ((n - h) / 2 - f + z.margin + e.top) / g + "px, 0)";
                            w.zoomed.style.transform = b, w.zoomedHd && (w.zoomedHd.style.transform = b) } var h = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target; return new l(function(t) { if (h && -1 === y.indexOf(h)) t(L);
                            else if (w.zoomed) t(L);
                            else { if (h) w.original = h;
                                else { if (!(0 < y.length)) return void t(L); var e = y;
                                    w.original = e[0] } var n, r, o, i, a, l, s, c, u; if (w.original.dispatchEvent(_("medium-zoom:open", { detail: { zoom: L } })), b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, g = !0, w.zoomed = (o = (r = (n = w.original).getBoundingClientRect()).top, i = r.left, a = r.width, l = r.height, s = n.cloneNode(), c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, u = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0, s.removeAttribute("id"), s.style.position = "absolute", s.style.top = o + c + "px", s.style.left = i + u + "px", s.style.width = a + "px", s.style.height = l + "px", s.style.transform = "", s), document.body.appendChild(E), z.template) { var d = x(z.template) ? z.template : document.querySelector(z.template);
                                    w.template = document.createElement("div"), w.template.appendChild(d.content.cloneNode(!0)), document.body.appendChild(w.template) } if (document.body.appendChild(w.zoomed), window.requestAnimationFrame(function() { document.body.classList.add("medium-zoom--opened") }), w.original.classList.add("medium-zoom-image--hidden"), w.zoomed.classList.add("medium-zoom-image--opened"), w.zoomed.addEventListener("click", v), w.zoomed.addEventListener("transitionend", function e() { g = !1, w.zoomed.removeEventListener("transitionend", e), w.original.dispatchEvent(_("medium-zoom:opened", { detail: { zoom: L } })), t(L) }), w.original.getAttribute("data-zoom-src")) { w.zoomedHd = w.zoomed.cloneNode(), w.zoomedHd.removeAttribute("srcset"), w.zoomedHd.removeAttribute("sizes"), w.zoomedHd.src = w.zoomed.getAttribute("data-zoom-src"), w.zoomedHd.onerror = function() { clearInterval(f), console.warn("Unable to reach the zoom image target " + w.zoomedHd.src), w.zoomedHd = null, p() }; var f = setInterval(function() { w.zoomedHd.complete && (clearInterval(f), w.zoomedHd.classList.add("medium-zoom-image--opened"), w.zoomedHd.addEventListener("click", v), document.body.appendChild(w.zoomedHd), p()) }, 10) } else if (w.original.hasAttribute("srcset")) { w.zoomedHd = w.zoomed.cloneNode(), w.zoomedHd.removeAttribute("sizes"); var m = w.zoomedHd.addEventListener("load", function() { w.zoomedHd.removeEventListener("load", m), w.zoomedHd.classList.add("medium-zoom-image--opened"), w.zoomedHd.addEventListener("click", v), document.body.appendChild(w.zoomedHd), p() }) } else p() } }) }

                    function i() { var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target; return w.original ? v() : o({ target: e }) } var a = 1 < arguments.length && void 0 !== n ? n : {},
                        l = window.Promise || function(e) {
                            function t() {}
                            e(t, t) },
                        v = function() { return new l(function(t) {!g && w.original ? (g = !0, document.body.classList.remove("medium-zoom--opened"), w.zoomed.style.transform = "", w.zoomedHd && (w.zoomedHd.style.transform = ""), w.template && (w.template.style.transition = "opacity 150ms", w.template.style.opacity = 0), w.original.dispatchEvent(_("medium-zoom:close", { detail: { zoom: L } })), w.zoomed.addEventListener("transitionend", function e() { w.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(w.zoomed), w.zoomedHd && document.body.removeChild(w.zoomedHd), document.body.removeChild(E), w.zoomed.classList.remove("medium-zoom-image--opened"), w.template && document.body.removeChild(w.template), g = !1, w.zoomed.removeEventListener("transitionend", e), w.original.dispatchEvent(_("medium-zoom:closed", { detail: { zoom: L } })), w.original = null, w.zoomed = null, w.zoomedHd = null, w.template = null, t(L) })) : t(L) }) },
                        y = [],
                        s = [],
                        g = !1,
                        b = 0,
                        z = a,
                        w = { original: null, zoomed: null, zoomedHd: null, template: null }; "[object Object]" === Object.prototype.toString.call(t) ? z = t : !t && "string" != typeof t || r(t); var c, u, E = (c = (z = k({ margin: 0, background: "#fff", scrollOffset: 40, container: null, template: null }, z)).background, (u = document.createElement("div")).classList.add("medium-zoom-overlay"), u.style.background = c, u);
                    document.addEventListener("click", function(e) { var t = e.target;
                        t !== E ? -1 !== y.indexOf(t) && i({ target: t }) : v() }), document.addEventListener("keyup", function(e) { 27 === (e.keyCode || e.which) && v() }), document.addEventListener("scroll", function() { if (!g && w.original) { var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                            Math.abs(b - e) > z.scrollOffset && setTimeout(v, 150) } }), window.addEventListener("resize", v); var L = { open: o, close: v, toggle: i, update: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e; if (e.background && (E.style.background = e.background), e.container && e.container instanceof Object && (t.container = k({}, z.container, e.container)), e.template) { var n = x(e.template) ? e.template : document.querySelector(e.template);
                                t.template = n } return z = k({}, z, t), y.forEach(function(e) { e.dispatchEvent(_("medium-zoom:update", { detail: { zoom: L } })) }), L }, clone: function() { return e(k({}, z, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {})) }, attach: r, detach: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            w.zoomed && v(); var r = 0 < t.length ? t.reduce(function(e, t) { return [].concat(e, d(t)) }, []) : y; return r.forEach(function(e) { e.classList.remove("medium-zoom-image"), e.dispatchEvent(_("medium-zoom:detach", { detail: { zoom: L } })) }), y = y.filter(function(e) { return -1 === r.indexOf(e) }), L }, on: function(t, n) { var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; return y.forEach(function(e) { e.addEventListener("medium-zoom:" + t, n, r) }), s.push({ type: "medium-zoom:" + t, listener: n, options: r }), L }, off: function(t, n) { var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; return y.forEach(function(e) { e.removeEventListener("medium-zoom:" + t, n, r) }), s = s.filter(function(e) { return !(e.type === "medium-zoom:" + t && e.listener.toString() === n.toString()) }), L }, getOptions: function() { return z }, getImages: function() { return y }, getZoomedImage: function() { return w.original } }; return L } }, "object" == typeof n && void 0 !== t ? t.exports = o() : "function" == typeof define && define.amd ? define(o) : r.mediumZoom = o() }, {}], 12: [function(e, t, n) { var r = function(i) { "use strict"; var s, e = Object.prototype,
                c = e.hasOwnProperty,
                t = "function" == typeof Symbol ? Symbol : {},
                o = t.iterator || "@@iterator",
                n = t.asyncIterator || "@@asyncIterator",
                r = t.toStringTag || "@@toStringTag";

            function a(e, t, n, r) { var o = t && t.prototype instanceof l ? t : l,
                    i = Object.create(o.prototype),
                    a = new k(r || []); return i._invoke = function(i, a, l) { var s = d; return function(e, t) { if (s === m) throw new Error("Generator is already running"); if (s === p) { if ("throw" === e) throw t; return A() } for (l.method = e, l.arg = t;;) { var n = l.delegate; if (n) { var r = x(n, l); if (r) { if (r === h) continue; return r } } if ("next" === l.method) l.sent = l._sent = l.arg;
                            else if ("throw" === l.method) { if (s === d) throw s = p, l.arg;
                                l.dispatchException(l.arg) } else "return" === l.method && l.abrupt("return", l.arg);
                            s = m; var o = u(i, a, l); if ("normal" === o.type) { if (s = l.done ? p : f, o.arg === h) continue; return { value: o.arg, done: l.done } } "throw" === o.type && (s = p, l.method = "throw", l.arg = o.arg) } } }(e, n, a), i }

            function u(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }
            i.wrap = a; var d = "suspendedStart",
                f = "suspendedYield",
                m = "executing",
                p = "completed",
                h = {};

            function l() {}

            function v() {}

            function y() {} var g = {};
            g[o] = function() { return this }; var b = Object.getPrototypeOf,
                z = b && b(b(S([])));
            z && z !== e && c.call(z, o) && (g = z); var w = y.prototype = l.prototype = Object.create(g);

            function E(e) {
                ["next", "throw", "return"].forEach(function(t) { e[t] = function(e) { return this._invoke(t, e) } }) }

            function L(s) { var t;
                this._invoke = function(n, r) {
                    function e() { return new Promise(function(e, t) {! function t(e, n, r, o) { var i = u(s[e], s, n); if ("throw" !== i.type) { var a = i.arg,
                                        l = a.value; return l && "object" == typeof l && c.call(l, "__await") ? Promise.resolve(l.__await).then(function(e) { t("next", e, r, o) }, function(e) { t("throw", e, r, o) }) : Promise.resolve(l).then(function(e) { a.value = e, r(a) }, function(e) { return t("throw", e, r, o) }) }
                                o(i.arg) }(n, r, e, t) }) } return t = t ? t.then(e, e) : e() } }

            function x(e, t) { var n = e.iterator[t.method]; if (n === s) { if (t.delegate = null, "throw" === t.method) { if (e.iterator.return && (t.method = "return", t.arg = s, x(e, t), "throw" === t.method)) return h;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method") } return h } var r = u(n, e.iterator, t.arg); if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, h; var o = r.arg; return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = s), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h) }

            function C(e) { var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) }

            function _(e) { var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t }

            function k(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(C, this), this.reset(!0) }

            function S(t) { if (t) { var e = t[o]; if (e) return e.call(t); if ("function" == typeof t.next) return t; if (!isNaN(t.length)) { var n = -1,
                            r = function e() { for (; ++n < t.length;)
                                    if (c.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = s, e.done = !0, e }; return r.next = r } } return { next: A } }

            function A() { return { value: s, done: !0 } } return v.prototype = w.constructor = y, y.constructor = v, y[r] = v.displayName = "GeneratorFunction", i.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name)) }, i.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, r in e || (e[r] = "GeneratorFunction")), e.prototype = Object.create(w), e }, i.awrap = function(e) { return { __await: e } }, E(L.prototype), L.prototype[n] = function() { return this }, i.AsyncIterator = L, i.async = function(e, t, n, r) { var o = new L(a(e, t, n, r)); return i.isGeneratorFunction(t) ? o : o.next().then(function(e) { return e.done ? e.value : o.next() }) }, E(w), w[r] = "Generator", w[o] = function() { return this }, w.toString = function() { return "[object Generator]" }, i.keys = function(n) { var r = []; for (var e in n) r.push(e); return r.reverse(),
                    function e() { for (; r.length;) { var t = r.pop(); if (t in n) return e.value = t, e.done = !1, e } return e.done = !0, e } }, i.values = S, k.prototype = { constructor: k, reset: function(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = s, this.done = !1, this.delegate = null, this.method = "next", this.arg = s, this.tryEntries.forEach(_), !e)
                        for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = s) }, stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval }, dispatchException: function(n) { if (this.done) throw n; var r = this;

                    function e(e, t) { return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = s), !!t } for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var o = this.tryEntries[t],
                            i = o.completion; if ("root" === o.tryLoc) return e("end"); if (o.tryLoc <= this.prev) { var a = c.call(o, "catchLoc"),
                                l = c.call(o, "finallyLoc"); if (a && l) { if (this.prev < o.catchLoc) return e(o.catchLoc, !0); if (this.prev < o.finallyLoc) return e(o.finallyLoc) } else if (a) { if (this.prev < o.catchLoc) return e(o.catchLoc, !0) } else { if (!l) throw new Error("try statement without catch or finally"); if (this.prev < o.finallyLoc) return e(o.finallyLoc) } } } }, abrupt: function(e, t) { for (var n = this.tryEntries.length - 1; 0 <= n; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && c.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var o = r; break } }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null); var i = o ? o.completion : {}; return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i) }, complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h }, finish: function(e) { for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), h } }, catch: function(e) { for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var n = this.tryEntries[t]; if (n.tryLoc === e) { var r = n.completion; if ("throw" === r.type) { var o = r.arg;
                                _(n) } return o } } throw new Error("illegal catch attempt") }, delegateYield: function(e, t, n) { return this.delegate = { iterator: S(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = s), h } }, i }("object" == typeof t ? t.exports : {}); try { regeneratorRuntime = r } catch (e) { Function("r", "regeneratorRuntime = r")(r) } }, {}], 13: [function(e, t, n) { "use strict"; var r = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var o = r(e("@babel/runtime/regenerator"));
        n.default = function(t) { var n, r; return o.default.async(function(e) { for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, o.default.awrap(fetch(t));
                    case 2:
                        return n = e.sent, e.next = 5, o.default.awrap(n.json());
                    case 5:
                        return r = e.sent, e.abrupt("return", r);
                    case 7:
                    case "end":
                        return e.stop() } }) } }, { "@babel/runtime/helpers/interopRequireDefault": 4, "@babel/runtime/regenerator": 9 }], 14: [function(e, t, n) { "use strict"; var r = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;

        function i(e, t, n) { var r = function(e) { return e.map(function(e) { return [Math.random(), e] }).sort(function(e, t) { return e[0] - t[0] }).map(function(e) { return e[1] }) }(e.data).slice(0, 6),
                o = document.createElement("a");
            o.classList = "instagram-name button button--large button--dark", o.href = "https://www.instagram.com/".concat(t), o.target = "_blank", o.rel = "noopener noreferrer", o.innerHTML = '<svg class="icon"><use xlink:href="#icon-instagram"></use></svg> '.concat(t); var i = document.createElement("div");
            i.classList = "row no-gutters", r.map(function(e) { var t = function(e) { return '<div class="col s4 l2">\n    <a href="'.concat(e.link, '" class="instagram-img u-relative u-overflowHidden u-sizeFullWidth u-block u-bgGray" target="_blank" rel="noopener noreferrer">\n      <img class="u-absolute0 u-image blur-up lazyload" src="').concat(e.images.low_resolution.url, '" alt=""/>\n      <div class="instagram-hover u-absolute0 u-flexCenter u-justify-content-center u-fontWeightMedium u-textColorWhite u-fontSize20 zindex2">\n        <span><svg class="icon top2"><use xlink:href="#icon-heart"></use></svg> ').concat(e.likes.count, '</span>\n        <span><svg class="icon top2"><use xlink:href="#icon-comments"></use></svg> ').concat(e.comments.count, "</span>\n      </div>\n    </a>\n  </div>") }(e);
                i.innerHTML += t }), n.classList.remove("u-hide"), n.appendChild(i), n.appendChild(o) } var a = r(e("@babel/runtime/regenerator")),
            l = r(e("./app.fetch"));
        n.default = function(t, n) { var r, o; return a.default.async(function(e) { for (;;) switch (e.prev = e.next) {
                    case 0:
                        return r = "https://api.instagram.com/v1/users/".concat(t.userId, "/media/recent/?access_token=").concat(t.token, "&count=10&callback=?"), e.prev = 1, e.next = 4, a.default.awrap((0, l.default)(r));
                    case 4:
                        o = e.sent, i(o, t.userName, n), e.next = 11; break;
                    case 8:
                        e.prev = 8, e.t0 = e.catch(1), n.remove();
                    case 11:
                    case "end":
                        return e.stop() } }, null, null, [
                [1, 8]
            ]) } }, { "./app.fetch": 13, "@babel/runtime/helpers/interopRequireDefault": 4, "@babel/runtime/regenerator": 9 }], 15: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.loadScript = function(e, t) { var n = document.createElement("script");
            n.src = e, n.defer = !0, n.async = !0, t && n.addEventListener("load", t), document.body.appendChild(n) } }, {}], 16: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var s = e("./app.variables");
        n.default = function() {
            function e() { var e = window.scrollY; if (Math.abs(a - e) <= 5) return !1;
                r && (300 < e ? r.classList.add("fade") : r.classList.remove("fade")), o && (60 <= e ? t.classList.remove("is-transparent") : t.classList.add("is-transparent")), l <= e ? function(e) { n && n.classList.remove("is-visible"), l = e }(e) : function(e) { n && n.classList.add("is-visible"), l = e }(e), a = e } var t = document.body,
                n = (0, s.qs)(".share-sticky"),
                r = (0, s.qs)(".js-back-to-top"),
                o = t.closest(".has-cover"),
                i = !1,
                a = 0,
                l = 0;
            window.addEventListener("scroll", function() { return i = !0 }, { passive: !0 }), setInterval(function() { i && (e(), i = !1) }, 250) } }, { "./app.variables": 18 }], 17: [function(e, t, n) { "use strict"; var r = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var a = r(e("@babel/runtime/helpers/slicedToArray")),
            l = e("./app.variables");
        n.default = function(t) {
            (0, l.qsa)(".js-social-media").forEach(function(e) { return function(i) { Object.entries(t).forEach(function(e) { var t = (0, a.default)(e, 2),
                            n = t[0],
                            r = t[1]; if ("string" == typeof r[0] && l.urlRegexp.test(r[0])) { var o = document.createElement("a");
                            o.href = r[0], o.title = r[1], o.target = "_blank", o.rel = "noopener noreferrer", o.innerHTML = '<svg class="icon icon--'.concat(n, '"><use xlink:href="#icon-').concat(n, '"></use></svg>'), i.appendChild(o) } }) }(e) }) } }, { "./app.variables": 18, "@babel/runtime/helpers/interopRequireDefault": 4, "@babel/runtime/helpers/slicedToArray": 7 }], 18: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.iframeVideo = n.urlRegexp = n.qsa = n.qs = void 0; var r = document.querySelector.bind(document);
        n.qs = r; var o = document.querySelectorAll.bind(document);
        n.qsa = o;
        n.urlRegexp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/;
        n.iframeVideo = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="dailymotion.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="player.twitch.tv"]', 'iframe[src*="kickstarter.com"][src*="video.html"]'] }, {}], 19: [function(e, t, n) { "use strict"; var r = e("@babel/runtime/helpers/interopRequireDefault");
        e("lazysizes"); var o = r(e("./util/Router")),
            i = r(e("./routes/common")),
            a = r(e("./routes/post")),
            l = r(e("./routes/video")),
            s = new o.default({ common: i.default, isArticle: a.default, isVideo: l.default });
        window.addEventListener("load", s.loadEvents(), !1) }, { "./routes/common": 20, "./routes/post": 21, "./routes/video": 22, "./util/Router": 23, "@babel/runtime/helpers/interopRequireDefault": 4, lazysizes: 10 }], 20: [function(e, t, n) { "use strict"; var r = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var o = r(e("@babel/runtime/helpers/typeof")),
            i = e("../app/app.variables"),
            a = e("../app/app.load-style-script"),
            l = r(e("../app/app.soncial-media")),
            s = r(e("../app/app.scroll")),
            c = { init: function() { "object" === ("undefined" == typeof followSocialMedia ? "undefined" : (0, o.default)(followSocialMedia)) && null !== followSocialMedia && (0, l.default)(followSocialMedia) }, finalize: function() {
                    (0, i.qs)(".js-menu-toggle").addEventListener("click", function(e) { e.preventDefault(), document.body.classList.toggle("has-menu") }); var e = (0, i.qs)(".js-dark-mode");
                    e && e.addEventListener("click", function(e) { e.preventDefault(); var t = document.documentElement; "light" === t.getAttribute("data-theme") ? (t.setAttribute("data-theme", "dark"), localStorage.setItem("selected-theme", "dark")) : (t.setAttribute("data-theme", "light"), localStorage.setItem("selected-theme", "light")) }), (0, i.qsa)(".js-m-subscribe-toggle").forEach(function(e) { return e.addEventListener("click", function(e) { e.preventDefault(), (0, i.qs)(".m-subscribe").classList.toggle("active") }) }); var t = (0, i.qs)(".js-back-to-top");
                    t && t.addEventListener("click", function(e) { if (e.preventDefault(), window) try { window.scroll({ top: 0, left: 0, behavior: "smooth" }) } catch (e) { window.scrollTo(0, 0) } }), "undefined" != typeof searchSettings && "undefined" != typeof siteSearch && (0, a.loadScript)("https://unpkg.com/@tryghost/content-api@1.3.4/umd/content-api.min.js", function() {
                        (0, a.loadScript)(siteSearch) }), (0, s.default)() } };
        n.default = c }, { "../app/app.load-style-script": 15, "../app/app.scroll": 16, "../app/app.soncial-media": 17, "../app/app.variables": 18, "@babel/runtime/helpers/interopRequireDefault": 4, "@babel/runtime/helpers/typeof": 8 }], 21: [function(e, t, n) { "use strict"; var r = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var o = r(e("@babel/runtime/helpers/typeof")),
            i = r(e("medium-zoom")),
            a = e("../app/app.variables"),
            l = e("../app/app.load-style-script"),
            s = r(e("../app/app.instagram")),
            c = { init: function() { var e = (0, a.qsa)(a.iframeVideo.join(","));
                    e.length && e.forEach(function(e) { var t = document.createElement("div");
                        t.className = "video-responsive", e.parentNode.insertBefore(t, e), t.appendChild(e) }) }, finalize: function() {
                    (0, a.qsa)(".kg-gallery-image > img").forEach(function(e) { var t = e.closest(".kg-gallery-image"),
                            n = e.attributes.width.value / e.attributes.height.value;
                        t.style.flex = n + " 1 0%" }), (0, a.qsa)(".post-body img").forEach(function(e) { return !e.closest("a") && e.classList.add("simply-zoom") }), (0, i.default)(".simply-zoom", { margin: 20, background: "hsla(0,0%,100%,.85)" }), (0, a.qsa)('code[class*="language-"]').length && "undefined" != typeof sitePrismJs && (0, l.loadScript)(sitePrismJs); var e = (0, a.qs)(".js-instagram"); "object" === ("undefined" == typeof instagramFeed ? "undefined" : (0, o.default)(instagramFeed)) && null !== instagramFeed && e && (0, s.default)(instagramFeed, e), (0, a.qsa)(".js-share").forEach(function(e) { return e.addEventListener("click", function(e) { var t = window,
                                n = document,
                                r = void 0 !== t.screenLeft ? t.screenLeft : t.screenX,
                                o = void 0 !== t.screenTop ? t.screenTop : t.screenY,
                                i = (t.innerWidth ? t.innerWidth : n.documentElement.clientWidth ? n.documentElement.clientWidth : t.screen.width) / 2 - 320 + r,
                                a = (t.innerHeight ? t.innerHeight : n.documentElement.clientHeight ? n.documentElement.clientHeight : t.screen.height) / 2 - 200 + o,
                                l = t.open(e.currentTarget.href, "share-window", "scrollbars=yes, width=".concat(640, ", height=").concat(400, ", top=").concat(a, ", left=").concat(i));
                            t.focus && l.focus(), e.preventDefault() }) }) } };
        n.default = c }, { "../app/app.instagram": 14, "../app/app.load-style-script": 15, "../app/app.variables": 18, "@babel/runtime/helpers/interopRequireDefault": 4, "@babel/runtime/helpers/typeof": 8, "medium-zoom": 11 }], 22: [function(e, t, n) { "use strict"; var r = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var o = r(e("@babel/runtime/helpers/typeof")),
            i = e("../app/app.variables"),
            a = e("../app/app.load-style-script"),
            l = { init: function() { var e = (0, i.qs)(".video-post-format"),
                        t = (0, i.qs)(".post-body").querySelectorAll(i.iframeVideo.join(","))[0]; if (t && (e.classList.remove("u-hide"), t.closest(".kg-embed-card") ? e.appendChild(t.closest(".kg-embed-card")) : e.appendChild(t.parentNode), "object" === ("undefined" == typeof youTube ? "undefined" : (0, o.default)(youTube)) || null !== youTube)) { var n = '\n      <span class="channel-name" style="margin-right:16px">Subscribe to '.concat(youTube.name, '</span>\n      <div class="g-ytsubscribe" data-channelid="').concat(youTube.channelId, '" data-layout="default" data-count="default"></div>\n    '),
                            r = document.createElement("div");
                        r.className = "video-subscribe u-flex u-marginTop20 u-h-b-md", r.innerHTML = n, e.appendChild(r), (0, a.loadScript)("https://apis.google.com/js/platform.js") } } };
        n.default = l }, { "../app/app.load-style-script": 15, "../app/app.variables": 18, "@babel/runtime/helpers/interopRequireDefault": 4, "@babel/runtime/helpers/typeof": 8 }], 23: [function(e, t, n) { "use strict"; var r = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var o = r(e("@babel/runtime/helpers/classCallCheck")),
            i = r(e("@babel/runtime/helpers/createClass")),
            a = r(e("./camelCase")),
            l = function() {
                function t(e) {
                    (0, o.default)(this, t), this.routes = e } return (0, i.default)(t, [{ key: "fire", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "init",
                            n = 2 < arguments.length ? arguments[2] : void 0,
                            r = "" !== e && this.routes[e] && "function" == typeof this.routes[e][t];
                        r && this.routes[e][t](n) } }, { key: "loadEvents", value: function() { var t = this;
                        this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(a.default).forEach(function(e) { t.fire(e), t.fire(e, "finalize") }), this.fire("common", "finalize") } }]), t }();
        n.default = l }, { "./camelCase": 24, "@babel/runtime/helpers/classCallCheck": 2, "@babel/runtime/helpers/createClass": 3, "@babel/runtime/helpers/interopRequireDefault": 4 }], 24: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        n.default = function(e) { return "".concat(e.charAt(0).toLowerCase()).concat(e.replace(/[\W_]/g, "|").split("|").map(function(e) { return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)) }).join("").slice(1)) } }, {}] }, {}, [19]);