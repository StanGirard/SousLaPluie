/*!
 * simply v0.2.7
 * Copyright 2019 antidoteFredo <hello@antidotefredo.ninja> (https://github.com/antidotefredoninja/simply)
 * Licensed under GPLv3
 */
! function i(l, a, u) {
    function s(r, e) { if (!a[r]) { if (!l[r]) { var t = "function" == typeof require && require; if (!e && t) return t(r, !0); if (c) return c(r, !0); var n = new Error("Cannot find module '" + r + "'"); throw n.code = "MODULE_NOT_FOUND", n } var o = a[r] = { exports: {} };
            l[r][0].call(o.exports, function(e) { return s(l[r][1][e] || e) }, o, o.exports, i, l, a, u) } return a[r].exports } for (var c = "function" == typeof require && require, e = 0; e < u.length; e++) s(u[e]); return s }({ 1: [function(e, r, t) { r.exports = function(e, r) { if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function") } }, {}], 2: [function(e, r, t) {
        function n(e, r) { for (var t = 0; t < r.length; t++) { var n = r[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } }
        r.exports = function(e, r, t) { return r && n(e.prototype, r), t && n(e, t), e } }, {}], 3: [function(e, r, t) { r.exports = function(e, r, t) { return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e } }, {}], 4: [function(e, r, t) { r.exports = function(e) { return e && e.__esModule ? e : { default: e } } }, {}], 5: [function(e, r, t) {
        function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function o(e) { return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? r.exports = o = function(e) { return n(e) } : r.exports = o = function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e) }, o(e) }
        r.exports = o }, {}], 6: [function(i, t, e) {
        (function(B) { var e, r;
            e = this, r = function() { var q = void 0 !== i && "undefined" == typeof window,
                    t = new Map,
                    n = new Map,
                    j = [];
                j.total = 0; var w = [],
                    T = [];

                function r() { t.clear(), n.clear(), w = [], T = [] }

                function D(e) { for (var r = -9007199254740991, t = e.length - 1; 0 <= t; --t) { var n = e[t]; if (null !== n) { var o = n.score;
                            r < o && (r = o) } } return -9007199254740991 === r ? null : r }

                function E(e, r) { var t = e[r]; if (void 0 !== t) return t; var n = r;
                    Array.isArray(r) || (n = r.split(".")); for (var o = n.length, i = -1; e && ++i < o;) e = e[n[i]]; return e }

                function P(e) { return "object" == typeof e } var o = function() { var i = [],
                            l = 0,
                            e = {};

                        function r() { for (var e = 0, r = i[e], t = 1; t < l;) { var n = t + 1;
                                e = t, n < l && i[n].score < i[t].score && (e = n), i[e - 1 >> 1] = i[e], t = 1 + (e << 1) } for (var o = e - 1 >> 1; 0 < e && r.score < i[o].score; o = (e = o) - 1 >> 1) i[e] = i[o];
                            i[e] = r } return e.add = function(e) { var r = l;
                            i[l++] = e; for (var t = r - 1 >> 1; 0 < r && e.score < i[t].score; t = (r = t) - 1 >> 1) i[r] = i[t];
                            i[r] = e }, e.poll = function() { if (0 !== l) { var e = i[0]; return i[0] = i[--l], r(), e } }, e.peek = function(e) { if (0 !== l) return i[0] }, e.replaceTop = function(e) { i[0] = e, r() }, e },
                    k = o(); return function e(I) { var _ = { single: function(e, r, t) { return e ? (P(e) || (e = _.getPreparedSearch(e)), r ? (P(r) || (r = _.getPrepared(r)), ((t && void 0 !== t.allowTypo ? t.allowTypo : !I || void 0 === I.allowTypo || I.allowTypo) ? _.algorithm : _.algorithmNoTypo)(e, r, e[0])) : null) : null }, go: function(e, r, t) { if (!e) return j; var n = (e = _.prepareSearch(e))[0],
                                o = t && t.threshold || I && I.threshold || -9007199254740991,
                                i = t && t.limit || I && I.limit || 9007199254740991,
                                l = (t && void 0 !== t.allowTypo ? t.allowTypo : !I || void 0 === I.allowTypo || I.allowTypo) ? _.algorithm : _.algorithmNoTypo,
                                a = 0,
                                u = 0,
                                s = r.length; if (t && t.keys)
                                for (var c = t.scoreFn || D, f = t.keys, p = f.length, d = s - 1; 0 <= d; --d) { for (var h = r[d], y = new Array(p), v = p - 1; 0 <= v; --v)(b = E(h, g = f[v])) ? (P(b) || (b = _.getPrepared(b)), y[v] = l(e, b, n)) : y[v] = null;
                                    y.obj = h; var m = c(y);
                                    null !== m && (m < o || (y.score = m, a < i ? (k.add(y), ++a) : (++u, m > k.peek().score && k.replaceTop(y)))) } else if (t && t.key) { var g = t.key; for (d = s - 1; 0 <= d; --d)(b = E(h = r[d], g)) && (P(b) || (b = _.getPrepared(b)), null !== (w = l(e, b, n)) && (w.score < o || (w = { target: w.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: w.score, indexes: w.indexes, obj: h }, a < i ? (k.add(w), ++a) : (++u, w.score > k.peek().score && k.replaceTop(w))))) } else
                                    for (d = s - 1; 0 <= d; --d) { var b, w;
                                        (b = r[d]) && (P(b) || (b = _.getPrepared(b)), null !== (w = l(e, b, n)) && (w.score < o || (a < i ? (k.add(w), ++a) : (++u, w.score > k.peek().score && k.replaceTop(w))))) }
                                if (0 === a) return j;
                            var T = new Array(a); for (d = a - 1; 0 <= d; --d) T[d] = k.poll(); return T.total = a + u, T }, goAsync: function(A, S, L) { var C = !1,
                                e = new Promise(function(d, h) { if (!A) return d(j); var y = (A = _.prepareSearch(A))[0],
                                        v = o(),
                                        m = S.length - 1,
                                        g = L && L.threshold || I && I.threshold || -9007199254740991,
                                        b = L && L.limit || I && I.limit || 9007199254740991,
                                        w = (L && void 0 !== L.allowTypo ? L.allowTypo : !I || void 0 === I.allowTypo || I.allowTypo) ? _.algorithm : _.algorithmNoTypo,
                                        T = 0,
                                        k = 0;

                                    function x() { if (C) return h("canceled"); var e = Date.now(); if (L && L.keys)
                                            for (var r = L.scoreFn || D, t = L.keys, n = t.length; 0 <= m; --m) { for (var o = S[m], i = new Array(n), l = n - 1; 0 <= l; --l)(s = E(o, u = t[l])) ? (P(s) || (s = _.getPrepared(s)), i[l] = w(A, s, y)) : i[l] = null;
                                                i.obj = o; var a = r(i); if (null !== a && !(a < g) && (i.score = a, T < b ? (v.add(i), ++T) : (++k, a > v.peek().score && v.replaceTop(i)), m % 1e3 == 0 && 10 <= Date.now() - e)) return void(q ? B(x) : setTimeout(x)) } else if (L && L.key) { for (var u = L.key; 0 <= m; --m)
                                                    if ((s = E(o = S[m], u)) && (P(s) || (s = _.getPrepared(s)), null !== (c = w(A, s, y)) && !(c.score < g) && (c = { target: c.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: c.score, indexes: c.indexes, obj: o }, T < b ? (v.add(c), ++T) : (++k, c.score > v.peek().score && v.replaceTop(c)), m % 1e3 == 0 && 10 <= Date.now() - e))) return void(q ? B(x) : setTimeout(x)) } else
                                                for (; 0 <= m; --m) { var s, c; if ((s = S[m]) && (P(s) || (s = _.getPrepared(s)), null !== (c = w(A, s, y)) && !(c.score < g) && (T < b ? (v.add(c), ++T) : (++k, c.score > v.peek().score && v.replaceTop(c)), m % 1e3 == 0 && 10 <= Date.now() - e))) return void(q ? B(x) : setTimeout(x)) }
                                            if (0 === T) return d(j);
                                        for (var f = new Array(T), p = T - 1; 0 <= p; --p) f[p] = v.poll();
                                        f.total = T + k, d(f) }
                                    q ? B(x) : x() }); return e.cancel = function() { C = !0 }, e }, highlight: function(e, r, t) { if (null === e) return null;
                            void 0 === r && (r = "<b>"), void 0 === t && (t = "</b>"); for (var n = "", o = 0, i = !1, l = e.target, a = l.length, u = e.indexes, s = 0; s < a; ++s) { var c = l[s]; if (u[o] === s) { if (i || (i = !0, n += r), ++o === u.length) { n += c + t + l.substr(s + 1); break } } else i && (i = !1, n += t);
                                n += c } return n }, prepare: function(e) { if (e) return { target: e, _targetLowerCodes: _.prepareLowerCodes(e), _nextBeginningIndexes: null, score: null, indexes: null, obj: null } }, prepareSlow: function(e) { if (e) return { target: e, _targetLowerCodes: _.prepareLowerCodes(e), _nextBeginningIndexes: _.prepareNextBeginningIndexes(e), score: null, indexes: null, obj: null } }, prepareSearch: function(e) { if (e) return _.prepareLowerCodes(e) }, getPrepared: function(e) { if (999 < e.length) return _.prepare(e); var r = t.get(e); return void 0 !== r || (r = _.prepare(e), t.set(e, r)), r }, getPreparedSearch: function(e) { if (999 < e.length) return _.prepareSearch(e); var r = n.get(e); return void 0 !== r || (r = _.prepareSearch(e), n.set(e, r)), r }, algorithm: function(e, r, t) { for (var n = r._targetLowerCodes, o = e.length, i = n.length, l = 0, a = 0, u = 0, s = 0;;) { if (t === n[a]) { if (w[s++] = a, ++l === o) break;
                                    t = e[0 === u ? l : u === l ? l + 1 : u === l - 1 ? l - 1 : l] } if (i <= ++a)
                                    for (;;) { if (l <= 1) return null; if (0 === u) { if (t === e[--l]) continue;
                                            u = l } else { if (1 === u) return null; if ((t = e[1 + (l = --u)]) === e[l]) continue }
                                        a = w[(s = l) - 1] + 1; break } } var c = l = 0,
                                f = !1,
                                p = 0,
                                d = r._nextBeginningIndexes;
                            null === d && (d = r._nextBeginningIndexes = _.prepareNextBeginningIndexes(r.target)); var h = a = 0 === w[0] ? 0 : d[w[0] - 1]; if (a !== i)
                                for (;;)
                                    if (i <= a) { if (l <= 0) { if (o - 2 < ++c) break; if (e[c] === e[c + 1]) continue;
                                            a = h; continue }--l, a = d[T[--p]] } else if (e[0 === c ? l : c === l ? l + 1 : c === l - 1 ? l - 1 : l] === n[a]) { if (T[p++] = a, ++l === o) { f = !0; break }++a } else a = d[a]; if (f) var y = T,
                                v = p;
                            else y = w, v = s; for (var m = 0, g = -1, b = 0; b < o; ++b) g !== (a = y[b]) - 1 && (m -= a), g = a; for (f ? 0 !== c && (m += -20) : (m *= 1e3, 0 !== u && (m += -20)), m -= i - o, r.score = m, r.indexes = new Array(v), b = v - 1; 0 <= b; --b) r.indexes[b] = y[b]; return r }, algorithmNoTypo: function(e, r, t) { for (var n = r._targetLowerCodes, o = e.length, i = n.length, l = 0, a = 0, u = 0;;) { if (t === n[a]) { if (w[u++] = a, ++l === o) break;
                                    t = e[l] } if (i <= ++a) return null } var s = !1,
                                c = l = 0,
                                f = r._nextBeginningIndexes; if (null === f && (f = r._nextBeginningIndexes = _.prepareNextBeginningIndexes(r.target)), (a = 0 === w[0] ? 0 : f[w[0] - 1]) !== i)
                                for (;;)
                                    if (i <= a) { if (l <= 0) break;--l, a = f[T[--c]] } else if (e[l] === n[a]) { if (T[c++] = a, ++l === o) { s = !0; break }++a } else a = f[a]; if (s) var p = T,
                                d = c;
                            else p = w, d = u; for (var h = 0, y = -1, v = 0; v < o; ++v) y !== (a = p[v]) - 1 && (h -= a), y = a; for (s || (h *= 1e3), h -= i - o, r.score = h, r.indexes = new Array(d), v = d - 1; 0 <= v; --v) r.indexes[v] = p[v]; return r }, prepareLowerCodes: function(e) { for (var r = e.length, t = [], n = e.toLowerCase(), o = 0; o < r; ++o) t[o] = n.charCodeAt(o); return t }, prepareBeginningIndexes: function(e) { for (var r = e.length, t = [], n = 0, o = !1, i = !1, l = 0; l < r; ++l) { var a = e.charCodeAt(l),
                                    u = 65 <= a && a <= 90,
                                    s = u || 97 <= a && a <= 122 || 48 <= a && a <= 57,
                                    c = u && !o || !i || !s;
                                o = u, i = s, c && (t[n++] = l) } return t }, prepareNextBeginningIndexes: function(e) { for (var r = e.length, t = _.prepareBeginningIndexes(e), n = [], o = t[0], i = 0, l = 0; l < r; ++l) l < o ? n[l] = o : (o = t[++i], n[l] = void 0 === o ? r : o); return n }, cleanup: r, new: e }; return _ }() }, "function" == typeof define && define.amd ? define([], r) : "object" == typeof t && t.exports ? t.exports = r() : e.fuzzysort = r() }).call(this, i("timers").setImmediate) }, { timers: 8 }], 7: [function(e, r, t) { var n, o, i = r.exports = {};

        function l() { throw new Error("setTimeout has not been defined") }

        function a() { throw new Error("clearTimeout has not been defined") }

        function u(r) { if (n === setTimeout) return setTimeout(r, 0); if ((n === l || !n) && setTimeout) return n = setTimeout, setTimeout(r, 0); try { return n(r, 0) } catch (e) { try { return n.call(null, r, 0) } catch (e) { return n.call(this, r, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : l } catch (e) { n = l } try { o = "function" == typeof clearTimeout ? clearTimeout : a } catch (e) { o = a } }(); var s, c = [],
            f = !1,
            p = -1;

        function d() { f && s && (f = !1, s.length ? c = s.concat(c) : p = -1, c.length && h()) }

        function h() { if (!f) { var e = u(d);
                f = !0; for (var r = c.length; r;) { for (s = c, c = []; ++p < r;) s && s[p].run();
                    p = -1, r = c.length }
                s = null, f = !1,
                    function(r) { if (o === clearTimeout) return clearTimeout(r); if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(r); try { o(r) } catch (e) { try { return o.call(null, r) } catch (e) { return o.call(this, r) } } }(e) } }

        function y(e, r) { this.fun = e, this.array = r }

        function v() {}
        i.nextTick = function(e) { var r = new Array(arguments.length - 1); if (1 < arguments.length)
                for (var t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
            c.push(new y(e, r)), 1 !== c.length || f || u(h) }, y.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) { return [] }, i.binding = function(e) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(e) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 } }, {}], 8: [function(u, e, s) {
        (function(e, r) { var n = u("process/browser.js").nextTick,
                t = Function.prototype.apply,
                o = Array.prototype.slice,
                i = {},
                l = 0;

            function a(e, r) { this._id = e, this._clearFn = r }
            s.setTimeout = function() { return new a(t.call(setTimeout, window, arguments), clearTimeout) }, s.setInterval = function() { return new a(t.call(setInterval, window, arguments), clearInterval) }, s.clearTimeout = s.clearInterval = function(e) { e.close() }, a.prototype.unref = a.prototype.ref = function() {}, a.prototype.close = function() { this._clearFn.call(window, this._id) }, s.enroll = function(e, r) { clearTimeout(e._idleTimeoutId), e._idleTimeout = r }, s.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, s._unrefActive = s.active = function(e) { clearTimeout(e._idleTimeoutId); var r = e._idleTimeout;
                0 <= r && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, r)) }, s.setImmediate = "function" == typeof e ? e : function(e) { var r = l++,
                    t = !(arguments.length < 2) && o.call(arguments, 1); return i[r] = !0, n(function() { i[r] && (t ? e.apply(null, t) : e.call(null), s.clearImmediate(r)) }), r }, s.clearImmediate = "function" == typeof r ? r : function(e) { delete i[e] } }).call(this, u("timers").setImmediate, u("timers").clearImmediate) }, { "process/browser.js": 7, timers: 8 }], 9: [function(e, r, t) { "use strict"; var n = e("@babel/runtime/helpers/interopRequireDefault"),
            o = n(e("@babel/runtime/helpers/defineProperty")),
            i = n(e("@babel/runtime/helpers/typeof")),
            l = n(e("@babel/runtime/helpers/classCallCheck")),
            a = n(e("@babel/runtime/helpers/createClass")),
            u = e("fuzzysort"),
            s = function() {
                function n(e) {
                    (0, l.default)(this, n), this.check = !1; var r = { url: siteUrl, key: "", version: "v3", input: "#search-field", results: "#search-results", defaultValue: "", template: function(e) { return '<a href="'.concat(siteUrl, "/").concat(e.slug, '/">').concat(e.title, "</a>") }, options: { keys: ["title"], limit: 10, threshold: -3500, allowTypo: !1 }, api: { resource: "posts", parameters: { limit: "all", fields: ["title", "slug"], filter: "", include: "", order: "", formats: "", page: "" } }, on: { beforeDisplay: function() {}, afterDisplay: function() {}, beforeFetch: function() { return document.body.classList.add("is-loading") }, afterFetch: function() { return setTimeout(function() { document.body.classList.remove("is-loading") }, 4e3) } } },
                        t = this.mergeDeep(r, e);
                    Object.assign(this, t), this.init() } return (0, a.default)(n, [{ key: "mergeDeep", value: function(r, t) { var n = this; return r && "object" === (0, i.default)(r) && !Array.isArray(r) && null !== r && t && "object" === (0, i.default)(t) && !Array.isArray(t) && null !== t && Object.keys(t).forEach(function(e) { t[e] && "object" === (0, i.default)(t[e]) && !Array.isArray(t[e]) && null !== t[e] ? (r[e] || Object.assign(r, (0, o.default)({}, e, {})), n.mergeDeep(r[e], t[e])) : Object.assign(r, (0, o.default)({}, e, t[e])) }), r } }, { key: "fetch", value: function() { var r = this;
                        this.on.beforeFetch(); var e = new GhostContentAPI({ url: this.url, key: this.key, version: this.version }),
                            t = {},
                            n = this.api.parameters; for (var o in n) "" !== n[o] && (t[o] = n[o]);
                        e[this.api.resource].browse(t).then(function(e) { r.search(e) }).catch(function(e) { console.error(e) }) } }, { key: "createElementFromHTML", value: function(e) { var r = document.createElement("div"); return r.innerHTML = e.trim(), r.firstChild } }, { key: "displayResults", value: function(e) { if (null !== document.querySelectorAll(this.results)[0].firstChild && "" !== document.querySelectorAll(this.results)[0].firstChild)
                            for (; document.querySelectorAll(this.results)[0].firstChild;) document.querySelectorAll(this.results)[0].removeChild(document.querySelectorAll(this.results)[0].firstChild); var r = document.querySelectorAll(this.input)[0].value; "" !== this.defaultValue && (r = this.defaultValue); var t = u.go(r, e, { keys: this.options.keys, limit: this.options.limit, allowTypo: this.options.allowTypo, threshold: this.options.threshold }); for (var n in t) n < t.length && document.querySelectorAll(this.results)[0].appendChild(this.createElementFromHTML(this.template(t[n].obj)));
                        this.on.afterDisplay(t), this.defaultValue = "" } }, { key: "search", value: function(e) { var r = this;
                        this.on.afterFetch(e), this.check = !0, "" !== this.defaultValue && (this.on.beforeDisplay(), this.displayResults(e)), document.querySelectorAll(this.input)[0].addEventListener("keyup", function() { r.on.beforeDisplay(), r.displayResults(e) }) } }, { key: "checkArgs", value: function() { return document.querySelectorAll(this.input).length ? document.querySelectorAll(this.results).length ? "" === this.url ? (console.log("Content API Client Library host missing. Please set the host. Must not end in a trailing slash."), !1) : "" !== this.key || (console.log('Content API Client Library key missing. Please set the key. Hex string copied from the "Integrations" screen in Ghost Admin.'), !1) : (console.log("Results not found."), !1) : (console.log("Input not found."), !1) } }, { key: "validate", value: function() { return !!this.checkArgs() } }, { key: "init", value: function() { var e = this;
                        this.validate() && ("" !== this.defaultValue && (document.querySelectorAll(this.input)[0].value = this.defaultValue, window.onload = function() { e.check || e.fetch() }), document.querySelectorAll(this.input)[0].addEventListener("focus", function() { e.check || e.fetch() })) } }]), n }();
        r.exports = s }, { "@babel/runtime/helpers/classCallCheck": 1, "@babel/runtime/helpers/createClass": 2, "@babel/runtime/helpers/defineProperty": 3, "@babel/runtime/helpers/interopRequireDefault": 4, "@babel/runtime/helpers/typeof": 5, fuzzysort: 6 }], 10: [function(e, r, t) { "use strict"; var p = e("@babel/runtime/helpers/interopRequireDefault")(e("./app/app.search"));! function(l, t) { var e = t.querySelector.bind(t),
                r = t.querySelectorAll.bind(t),
                n = t.body,
                o = e("#search-field"),
                a = e("#search-results"),
                i = e(".js-search-message"),
                u = { outer: 0, scroll: 0 };
            e(".js-search-open").classList.remove("u-hide"); var s = { on: { afterDisplay: function(e) { c(), u = { outer: a.offsetHeight, scroll: a.scrollHeight }, 0 === e.total && "" !== o.value ? i.classList.remove("u-hide") : i.classList.add("u-hide") } } };

            function c(e, r) { if (e = e || 0, r = r || "up", !(l.innerWidth < 768)) { var t = a.querySelectorAll("a"); if (t.length) { var n = a.querySelector("a.search-result--active");
                        n && n.classList.remove("search-result--active"), t[e].classList.add("search-result--active"); var o = t[e].offsetTop,
                            i = 0; "down" === r && o > u.outer / 2 ? i = o - u.outer / 2 : "up" === r && (i = o < u.scroll - u.outer / 2 ? o - u.outer / 2 : u.scroll), a.scrollTo(0, i) } } }

            function f(e) { e.preventDefault(); var r = e.keyCode;
                27 === r ? (n.classList.remove("has-search"), t.removeEventListener("keyup", f)) : 13 === r ? (o.blur(), function() { var e = a.querySelector("a.search-result--active");
                    e && e.click() }()) : 38 === r || 40 === r ? function(e) { var r, t = 0,
                        n = a.querySelector(".search-result--active");
                    n && (t = [].slice.call(n.parentNode.children).indexOf(n)), o.blur(), 38 === e ? (r = "up", t <= 0 ? (o.focus(), t = 0) : t -= 1) : (r = "down", t >= a.querySelectorAll("a").length - 1 ? t = a.querySelectorAll("a").length - 1 : t += 1), c(t, r) }(r) : 191 === r && (o.focus(), o.setSelectionRange(0, o.value.length)) }
            Object.assign(s, searchSettings), r(".js-search-open").forEach(function(e) { return e.addEventListener("click", function(e) { e.preventDefault(), n.classList.add("has-search"), o.focus(), 768 < l.innerWidth && t.addEventListener("keyup", f) }) }), r(".js-search-close").forEach(function(e) { return e.addEventListener("click", function(e) { e.preventDefault(), n.classList.remove("has-search"), t.removeEventListener("keyup", f) }) }), new p.default(s) }(window, document) }, { "./app/app.search": 9, "@babel/runtime/helpers/interopRequireDefault": 4 }] }, {}, [10]);