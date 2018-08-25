!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.BotChat = e() : t.BotChat = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e),
            i.l = !0,
            i.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.i = function(t) {
            return t
        }
        ,
        e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return e.d(n, "a", n),
            n
        }
        ,
        e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        e.p = "",
        e(e.s = 171)
    }([function(t, e, n) {
        "use strict";
        var r = n(16)
          , i = n(416)
          , o = n(81)
          , s = function() {
            function t(t) {
                this._isScalar = !1,
                t && (this._subscribe = t)
            }
            return t.prototype.lift = function(e) {
                var n = new t;
                return n.source = this,
                n.operator = e,
                n
            }
            ,
            t.prototype.subscribe = function(t, e, n) {
                var r = this.operator
                  , o = i.toSubscriber(t, e, n);
                if (r ? r.call(o, this.source) : o.add(this.source ? this._subscribe(o) : this._trySubscribe(o)),
                o.syncErrorThrowable && (o.syncErrorThrowable = !1,
                o.syncErrorThrown))
                    throw o.syncErrorValue;
                return o
            }
            ,
            t.prototype._trySubscribe = function(t) {
                try {
                    return this._subscribe(t)
                } catch (e) {
                    t.syncErrorThrown = !0,
                    t.syncErrorValue = e,
                    t.error(e)
                }
            }
            ,
            t.prototype.forEach = function(t, e) {
                var n = this;
                if (e || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? e = r.root.Rx.config.Promise : r.root.Promise && (e = r.root.Promise)),
                !e)
                    throw new Error("no Promise impl found");
                return new e(function(e, r) {
                    var i;
                    i = n.subscribe(function(e) {
                        if (i)
                            try {
                                t(e)
                            } catch (t) {
                                r(t),
                                i.unsubscribe()
                            }
                        else
                            t(e)
                    }, r, e)
                }
                )
            }
            ,
            t.prototype._subscribe = function(t) {
                return this.source.subscribe(t)
            }
            ,
            t.prototype[o.observable] = function() {
                return this
            }
            ,
            t.create = function(e) {
                return new t(e)
            }
            ,
            t
        }();
        e.Observable = s
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r, o, s, a, c) {
            if (i(e),
            !t) {
                var u;
                if (void 0 === e)
                    u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, r, o, s, a, c]
                      , p = 0;
                    u = new Error(e.replace(/%s/g, function() {
                        return l[p++]
                    })),
                    u.name = "Invariant Violation"
                }
                throw u.framesToPop = 1,
                u
            }
        }
        var i = function(t) {};
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return Object.prototype.toString.call(t)
        }
        function i(t) {
            return "[object String]" === r(t)
        }
        function o(t, e) {
            return C.call(t, e)
        }
        function s(t) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
                if (e) {
                    if ("object" != typeof e)
                        throw new TypeError(e + "must be object");
                    Object.keys(e).forEach(function(n) {
                        t[n] = e[n]
                    })
                }
            }),
            t
        }
        function a(t, e, n) {
            return [].concat(t.slice(0, e), n, t.slice(e + 1))
        }
        function c(t) {
            return !(t >= 55296 && t <= 57343) && (!(t >= 64976 && t <= 65007) && (65535 != (65535 & t) && 65534 != (65535 & t) && (!(t >= 0 && t <= 8) && (11 !== t && (!(t >= 14 && t <= 31) && (!(t >= 127 && t <= 159) && !(t > 1114111)))))))
        }
        function u(t) {
            if (t > 65535) {
                t -= 65536;
                var e = 55296 + (t >> 10)
                  , n = 56320 + (1023 & t);
                return String.fromCharCode(e, n)
            }
            return String.fromCharCode(t)
        }
        function l(t, e) {
            var n = 0;
            return o(E, e) ? E[e] : 35 === e.charCodeAt(0) && k.test(e) && (n = "x" === e[1].toLowerCase() ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10),
            c(n)) ? u(n) : t
        }
        function p(t) {
            return t.indexOf("\\") < 0 ? t : t.replace(w, "$1")
        }
        function h(t) {
            return t.indexOf("\\") < 0 && t.indexOf("&") < 0 ? t : t.replace(x, function(t, e, n) {
                return e || l(t, n)
            })
        }
        function d(t) {
            return O[t]
        }
        function f(t) {
            return A.test(t) ? t.replace(T, d) : t
        }
        function m(t) {
            return t.replace(I, "\\$&")
        }
        function g(t) {
            switch (t) {
            case 9:
            case 32:
                return !0
            }
            return !1
        }
        function y(t) {
            if (t >= 8192 && t <= 8202)
                return !0;
            switch (t) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
                return !0
            }
            return !1
        }
        function v(t) {
            return P.test(t)
        }
        function b(t) {
            switch (t) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
                return !0;
            default:
                return !1
            }
        }
        function _(t) {
            return t.trim().replace(/\s+/g, " ").toUpperCase()
        }
        var C = Object.prototype.hasOwnProperty
          , w = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g
          , S = /&([a-z#][a-z0-9]{1,31});/gi
          , x = new RegExp(w.source + "|" + S.source,"gi")
          , k = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i
          , E = n(94)
          , A = /[&<>"]/
          , T = /[&<>"]/g
          , O = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        }
          , I = /[.?*+^$[\]\\(){}|-]/g
          , P = n(84);
        e.lib = {},
        e.lib.mdurl = n(98),
        e.lib.ucmicro = n(421),
        e.assign = s,
        e.isString = i,
        e.has = o,
        e.unescapeMd = p,
        e.unescapeAll = h,
        e.isValidEntityCode = c,
        e.fromCodePoint = u,
        e.escapeHtml = f,
        e.arrayReplaceAt = a,
        e.isSpace = g,
        e.isWhiteSpace = y,
        e.isMdAsciiPunct = b,
        e.isPunctChar = v,
        e.escapeRE = m,
        e.normalizeReference = _
    }
    , function(t, e, n) {
        "use strict";
        var r = n(11)
          , i = r;
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++)
                n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var i = new Error(n);
            throw i.name = "Invariant Violation",
            i.framesToPop = 1,
            i
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (null === t || void 0 === t)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var i = Object.getOwnPropertySymbols
          , o = Object.prototype.hasOwnProperty
          , s = Object.prototype.propertyIsEnumerable;
        t.exports = function() {
            try {
                if (!Object.assign)
                    return !1;
                var t = new String("abc");
                if (t[5] = "de",
                "5" === Object.getOwnPropertyNames(t)[0])
                    return !1;
                for (var e = {}, n = 0; n < 10; n++)
                    e["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                }).join(""))
                    return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    r[t] = t
                }),
                "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var n, a, c = r(t), u = 1; u < arguments.length; u++) {
                n = Object(arguments[u]);
                for (var l in n)
                    o.call(n, l) && (c[l] = n[l]);
                if (i) {
                    a = i(n);
                    for (var p = 0; p < a.length; p++)
                        s.call(n, a[p]) && (c[a[p]] = n[a[p]])
                }
            }
            return c
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return 1 === t.nodeType && t.getAttribute(f) === String(e) || 8 === t.nodeType && t.nodeValue === " react-text: " + e + " " || 8 === t.nodeType && t.nodeValue === " react-empty: " + e + " "
        }
        function i(t) {
            for (var e; e = t._renderedComponent; )
                t = e;
            return t
        }
        function o(t, e) {
            var n = i(t);
            n._hostNode = e,
            e[g] = n
        }
        function s(t) {
            var e = t._hostNode;
            e && (delete e[g],
            t._hostNode = null)
        }
        function a(t, e) {
            if (!(t._flags & m.hasCachedChildNodes)) {
                var n = t._renderedChildren
                  , s = e.firstChild;
                t: for (var a in n)
                    if (n.hasOwnProperty(a)) {
                        var c = n[a]
                          , u = i(c)._domID;
                        if (0 !== u) {
                            for (; null !== s; s = s.nextSibling)
                                if (r(s, u)) {
                                    o(c, s);
                                    continue t
                                }
                            p("32", u)
                        }
                    }
                t._flags |= m.hasCachedChildNodes
            }
        }
        function c(t) {
            if (t[g])
                return t[g];
            for (var e = []; !t[g]; ) {
                if (e.push(t),
                !t.parentNode)
                    return null;
                t = t.parentNode
            }
            for (var n, r; t && (r = t[g]); t = e.pop())
                n = r,
                e.length && a(r, t);
            return n
        }
        function u(t) {
            var e = c(t);
            return null != e && e._hostNode === t ? e : null
        }
        function l(t) {
            if (void 0 === t._hostNode && p("33"),
            t._hostNode)
                return t._hostNode;
            for (var e = []; !t._hostNode; )
                e.push(t),
                t._hostParent || p("34"),
                t = t._hostParent;
            for (; e.length; t = e.pop())
                a(t, t._hostNode);
            return t._hostNode
        }
        var p = n(4)
          , h = n(23)
          , d = n(106)
          , f = (n(1),
        h.ID_ATTRIBUTE_NAME)
          , m = d
          , g = "__reactInternalInstance$" + Math.random().toString(36).slice(2)
          , y = {
            getClosestInstanceFromNode: c,
            getInstanceFromNode: u,
            getNodeFromInstance: l,
            precacheChildNodes: a,
            precacheNode: o,
            uncacheNode: s
        };
        t.exports = y
    }
    , function(t, e, n) {
        "use strict";
        var r = !("undefined" == typeof window || !window.document || !window.document.createElement)
          , i = {
            canUseDOM: r,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
            isInWorker: !r
        };
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(83)
          , o = n(20)
          , s = n(139)
          , a = n(82)
          , c = function(t) {
            function e(n, r, i) {
                switch (t.call(this),
                this.syncErrorValue = null,
                this.syncErrorThrown = !1,
                this.syncErrorThrowable = !1,
                this.isStopped = !1,
                arguments.length) {
                case 0:
                    this.destination = s.empty;
                    break;
                case 1:
                    if (!n) {
                        this.destination = s.empty;
                        break
                    }
                    if ("object" == typeof n) {
                        n instanceof e ? (this.destination = n,
                        this.destination.add(this)) : (this.syncErrorThrowable = !0,
                        this.destination = new u(this,n));
                        break
                    }
                default:
                    this.syncErrorThrowable = !0,
                    this.destination = new u(this,n,r,i)
                }
            }
            return r(e, t),
            e.prototype[a.rxSubscriber] = function() {
                return this
            }
            ,
            e.create = function(t, n, r) {
                var i = new e(t,n,r);
                return i.syncErrorThrowable = !1,
                i
            }
            ,
            e.prototype.next = function(t) {
                this.isStopped || this._next(t)
            }
            ,
            e.prototype.error = function(t) {
                this.isStopped || (this.isStopped = !0,
                this._error(t))
            }
            ,
            e.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0,
                this._complete())
            }
            ,
            e.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0,
                t.prototype.unsubscribe.call(this))
            }
            ,
            e.prototype._next = function(t) {
                this.destination.next(t)
            }
            ,
            e.prototype._error = function(t) {
                this.destination.error(t),
                this.unsubscribe()
            }
            ,
            e.prototype._complete = function() {
                this.destination.complete(),
                this.unsubscribe()
            }
            ,
            e.prototype._unsubscribeAndRecycle = function() {
                var t = this
                  , e = t._parent
                  , n = t._parents;
                return this._parent = null,
                this._parents = null,
                this.unsubscribe(),
                this.closed = !1,
                this.isStopped = !1,
                this._parent = e,
                this._parents = n,
                this
            }
            ,
            e
        }(o.Subscription);
        e.Subscriber = c;
        var u = function(t) {
            function e(e, n, r, o) {
                t.call(this),
                this._parentSubscriber = e;
                var a, c = this;
                i.isFunction(n) ? a = n : n && (a = n.next,
                r = n.error,
                o = n.complete,
                n !== s.empty && (c = Object.create(n),
                i.isFunction(c.unsubscribe) && this.add(c.unsubscribe.bind(c)),
                c.unsubscribe = this.unsubscribe.bind(this))),
                this._context = c,
                this._next = a,
                this._error = r,
                this._complete = o
            }
            return r(e, t),
            e.prototype.next = function(t) {
                if (!this.isStopped && this._next) {
                    var e = this._parentSubscriber;
                    e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }
            ,
            e.prototype.error = function(t) {
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._error)
                        e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t),
                        this.unsubscribe()) : (this.__tryOrUnsub(this._error, t),
                        this.unsubscribe());
                    else {
                        if (!e.syncErrorThrowable)
                            throw this.unsubscribe(),
                            t;
                        e.syncErrorValue = t,
                        e.syncErrorThrown = !0,
                        this.unsubscribe()
                    }
                }
            }
            ,
            e.prototype.complete = function() {
                var t = this;
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._complete) {
                        var n = function() {
                            return t._complete.call(t._context)
                        };
                        e.syncErrorThrowable ? (this.__tryOrSetError(e, n),
                        this.unsubscribe()) : (this.__tryOrUnsub(n),
                        this.unsubscribe())
                    } else
                        this.unsubscribe()
                }
            }
            ,
            e.prototype.__tryOrUnsub = function(t, e) {
                try {
                    t.call(this._context, e)
                } catch (t) {
                    throw this.unsubscribe(),
                    t
                }
            }
            ,
            e.prototype.__tryOrSetError = function(t, e, n) {
                try {
                    e.call(this._context, n)
                } catch (e) {
                    return t.syncErrorValue = e,
                    t.syncErrorThrown = !0,
                    !0
                }
                return !1
            }
            ,
            e.prototype._unsubscribe = function() {
                var t = this._parentSubscriber;
                this._context = null,
                this._parentSubscriber = null,
                t.unsubscribe()
            }
            ,
            e
        }(c)
    }
    , function(t, e, n) {
        "use strict";
        t.exports = n(25)
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            function n() {
                this.constructor = t
            }
            v(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        function i(t, e) {
            var n = {};
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                    e.indexOf(r[i]) < 0 && (n[r[i]] = t[r[i]]);
            return n
        }
        function o(t, e, n, r) {
            var i, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, r);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
            return o > 3 && s && Object.defineProperty(e, n, s),
            s
        }
        function s(t, e) {
            return function(n, r) {
                e(n, r, t)
            }
        }
        function a(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
        function c(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    t.done ? i(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        }
        function u(t, e) {
            function n(t) {
                return function(e) {
                    return r([t, e])
                }
            }
            function r(n) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (i = 1,
                        o && (s = o[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(o, n[1])).done)
                            return s;
                        switch (o = 0,
                        s && (n = [0, s.value]),
                        n[0]) {
                        case 0:
                        case 1:
                            s = n;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: n[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            o = n[1],
                            n = [0];
                            continue;
                        case 7:
                            n = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (s = c.trys,
                            !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                                c.label = n[1];
                                break
                            }
                            if (6 === n[0] && c.label < s[1]) {
                                c.label = s[1],
                                s = n;
                                break
                            }
                            if (s && c.label < s[2]) {
                                c.label = s[2],
                                c.ops.push(n);
                                break
                            }
                            s[2] && c.ops.pop(),
                            c.trys.pop();
                            continue
                        }
                        n = e.call(t, c)
                    } catch (t) {
                        n = [6, t],
                        o = 0
                    } finally {
                        i = s = 0
                    }
                if (5 & n[0])
                    throw n[1];
                return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                }
            }
            var i, o, s, a, c = {
                label: 0,
                sent: function() {
                    if (1 & s[0])
                        throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: n(0),
                throw: n(1),
                return: n(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a
        }
        function l(t, e) {
            for (var n in t)
                e.hasOwnProperty(n) || (e[n] = t[n])
        }
        function p(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator]
              , n = 0;
            return e ? e.call(t) : {
                next: function() {
                    return t && n >= t.length && (t = void 0),
                    {
                        value: t && t[n++],
                        done: !t
                    }
                }
            }
        }
        function h(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, i, o = n.call(t), s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
                    s.push(r.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return s
        }
        function d() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(h(arguments[e]));
            return t
        }
        function f(t) {
            return this instanceof f ? (this.v = t,
            this) : new f(t)
        }
        function m(t, e, n) {
            function r(t) {
                l[t] && (u[t] = function(e) {
                    return new Promise(function(n, r) {
                        p.push([t, e, n, r]) > 1 || i(t, e)
                    }
                    )
                }
                )
            }
            function i(t, e) {
                try {
                    o(l[t](e))
                } catch (t) {
                    c(p[0][3], t)
                }
            }
            function o(t) {
                t.value instanceof f ? Promise.resolve(t.value.v).then(s, a) : c(p[0][2], t)
            }
            function s(t) {
                i("next", t)
            }
            function a(t) {
                i("throw", t)
            }
            function c(t, e) {
                t(e),
                p.shift(),
                p.length && i(p[0][0], p[0][1])
            }
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var u, l = n.apply(t, e || []), p = [];
            return u = {},
            r("next"),
            r("throw"),
            r("return"),
            u[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            u
        }
        function g(t) {
            function e(e, i) {
                t[e] && (n[e] = function(n) {
                    return (r = !r) ? {
                        value: f(t[e](n)),
                        done: "return" === e
                    } : i ? i(n) : n
                }
                )
            }
            var n, r;
            return n = {},
            e("next"),
            e("throw", function(t) {
                throw t
            }),
            e("return"),
            n[Symbol.iterator] = function() {
                return this
            }
            ,
            n
        }
        function y(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e = t[Symbol.asyncIterator];
            return e ? e.call(t) : "function" == typeof p ? p(t) : t[Symbol.iterator]()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.__extends = r,
        n.d(e, "__assign", function() {
            return b
        }),
        e.__rest = i,
        e.__decorate = o,
        e.__param = s,
        e.__metadata = a,
        e.__awaiter = c,
        e.__generator = u,
        e.__exportStar = l,
        e.__values = p,
        e.__read = h,
        e.__spread = d,
        e.__await = f,
        e.__asyncGenerator = m,
        e.__asyncDelegator = g,
        e.__asyncValues = y;
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        var v = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
          , b = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) {
                e = arguments[n];
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            return t
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return function() {
                return t
            }
        }
        var i = function() {};
        i.thatReturns = r,
        i.thatReturnsFalse = r(!1),
        i.thatReturnsTrue = r(!0),
        i.thatReturnsNull = r(null),
        i.thatReturnsThis = function() {
            return this
        }
        ,
        i.thatReturnsArgument = function(t) {
            return t
        }
        ,
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        var r = null;
        t.exports = {
            debugTool: r
        }
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            A.ReactReconcileTransaction && C || l("123")
        }
        function i() {
            this.reinitializeTransaction(),
            this.dirtyComponentsLength = null,
            this.callbackQueue = h.getPooled(),
            this.reconcileTransaction = A.ReactReconcileTransaction.getPooled(!0)
        }
        function o(t, e, n, i, o, s) {
            return r(),
            C.batchedUpdates(t, e, n, i, o, s)
        }
        function s(t, e) {
            return t._mountOrder - e._mountOrder
        }
        function a(t) {
            var e = t.dirtyComponentsLength;
            e !== y.length && l("124", e, y.length),
            y.sort(s),
            v++;
            for (var n = 0; n < e; n++) {
                var r = y[n]
                  , i = r._pendingCallbacks;
                r._pendingCallbacks = null;
                var o;
                if (f.logTopLevelRenders) {
                    var a = r;
                    r._currentElement.type.isReactTopLevelWrapper && (a = r._renderedComponent),
                    o = "React update: " + a.getName(),
                    console.time(o)
                }
                if (m.performUpdateIfNecessary(r, t.reconcileTransaction, v),
                o && console.timeEnd(o),
                i)
                    for (var c = 0; c < i.length; c++)
                        t.callbackQueue.enqueue(i[c], r.getPublicInstance())
            }
        }
        function c(t) {
            if (r(),
            !C.isBatchingUpdates)
                return void C.batchedUpdates(c, t);
            y.push(t),
            null == t._updateBatchNumber && (t._updateBatchNumber = v + 1)
        }
        function u(t, e) {
            C.isBatchingUpdates || l("125"),
            b.enqueue(t, e),
            _ = !0
        }
        var l = n(4)
          , p = n(5)
          , h = n(104)
          , d = n(19)
          , f = n(109)
          , m = n(24)
          , g = n(45)
          , y = (n(1),
        [])
          , v = 0
          , b = h.getPooled()
          , _ = !1
          , C = null
          , w = {
            initialize: function() {
                this.dirtyComponentsLength = y.length
            },
            close: function() {
                this.dirtyComponentsLength !== y.length ? (y.splice(0, this.dirtyComponentsLength),
                k()) : y.length = 0
            }
        }
          , S = {
            initialize: function() {
                this.callbackQueue.reset()
            },
            close: function() {
                this.callbackQueue.notifyAll()
            }
        }
          , x = [w, S];
        p(i.prototype, g, {
            getTransactionWrappers: function() {
                return x
            },
            destructor: function() {
                this.dirtyComponentsLength = null,
                h.release(this.callbackQueue),
                this.callbackQueue = null,
                A.ReactReconcileTransaction.release(this.reconcileTransaction),
                this.reconcileTransaction = null
            },
            perform: function(t, e, n) {
                return g.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, t, e, n)
            }
        }),
        d.addPoolingTo(i);
        var k = function() {
            for (; y.length || _; ) {
                if (y.length) {
                    var t = i.getPooled();
                    t.perform(a, null, t),
                    i.release(t)
                }
                if (_) {
                    _ = !1;
                    var e = b;
                    b = h.getPooled(),
                    e.notifyAll(),
                    h.release(e)
                }
            }
        }
          , E = {
            injectReconcileTransaction: function(t) {
                t || l("126"),
                A.ReactReconcileTransaction = t
            },
            injectBatchingStrategy: function(t) {
                t || l("127"),
                "function" != typeof t.batchedUpdates && l("128"),
                "boolean" != typeof t.isBatchingUpdates && l("129"),
                C = t
            }
        }
          , A = {
            ReactReconcileTransaction: null,
            batchedUpdates: o,
            enqueueUpdate: c,
            flushBatchedUpdates: k,
            injection: E,
            asap: u
        };
        t.exports = A
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            this.dispatchConfig = t,
            this._targetInst = e,
            this.nativeEvent = n;
            var i = this.constructor.Interface;
            for (var o in i)
                if (i.hasOwnProperty(o)) {
                    var a = i[o];
                    a ? this[o] = a(n) : "target" === o ? this.target = r : this[o] = n[o]
                }
            var c = null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue;
            return this.isDefaultPrevented = c ? s.thatReturnsTrue : s.thatReturnsFalse,
            this.isPropagationStopped = s.thatReturnsFalse,
            this
        }
        var i = n(5)
          , o = n(19)
          , s = n(11)
          , a = (n(3),
        ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"])
          , c = {
            type: null,
            target: null,
            currentTarget: s.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
        i(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1),
                this.isDefaultPrevented = s.thatReturnsTrue)
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0),
                this.isPropagationStopped = s.thatReturnsTrue)
            },
            persist: function() {
                this.isPersistent = s.thatReturnsTrue
            },
            isPersistent: s.thatReturnsFalse,
            destructor: function() {
                var t = this.constructor.Interface;
                for (var e in t)
                    this[e] = null;
                for (var n = 0; n < a.length; n++)
                    this[a[n]] = null
            }
        }),
        r.Interface = c,
        r.augmentClass = function(t, e) {
            var n = this
              , r = function() {};
            r.prototype = n.prototype;
            var s = new r;
            i(s, t.prototype),
            t.prototype = s,
            t.prototype.constructor = t,
            t.Interface = i({}, n.Interface, e),
            t.augmentClass = n.augmentClass,
            o.addPoolingTo(t, o.fourArgumentPooler)
        }
        ,
        o.addPoolingTo(r, o.fourArgumentPooler),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            current: null
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        (function(t) {
            var n = "undefined" != typeof window && window
              , r = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self
              , i = void 0 !== t && t
              , o = n || i || r;
            e.root = o,
            function() {
                if (!o)
                    throw new Error("RxJS could not find any global context (window, self, global)")
            }()
        }
        ).call(e, n(37))
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(8)
          , o = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return r(e, t),
            e.prototype.notifyNext = function(t, e, n, r, i) {
                this.destination.next(e)
            }
            ,
            e.prototype.notifyError = function(t, e) {
                this.destination.error(t)
            }
            ,
            e.prototype.notifyComplete = function(t) {
                this.destination.complete()
            }
            ,
            e
        }(i.Subscriber);
        e.OuterSubscriber = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            var h = new l.InnerSubscriber(t,n,r);
            if (h.closed)
                return null;
            if (e instanceof c.Observable)
                return e._isScalar ? (h.next(e.value),
                h.complete(),
                null) : e.subscribe(h);
            if (o.isArrayLike(e)) {
                for (var d = 0, f = e.length; d < f && !h.closed; d++)
                    h.next(e[d]);
                h.closed || h.complete()
            } else {
                if (s.isPromise(e))
                    return e.then(function(t) {
                        h.closed || (h.next(t),
                        h.complete())
                    }, function(t) {
                        return h.error(t)
                    }).then(null, function(t) {
                        i.root.setTimeout(function() {
                            throw t
                        })
                    }),
                    h;
                if (e && "function" == typeof e[u.iterator])
                    for (var m = e[u.iterator](); ; ) {
                        var g = m.next();
                        if (g.done) {
                            h.complete();
                            break
                        }
                        if (h.next(g.value),
                        h.closed)
                            break
                    }
                else if (e && "function" == typeof e[p.observable]) {
                    var y = e[p.observable]();
                    if ("function" == typeof y.subscribe)
                        return y.subscribe(new l.InnerSubscriber(t,n,r));
                    h.error(new TypeError("Provided object does not correctly implement Symbol.observable"))
                } else {
                    var v = a.isObject(e) ? "an invalid object" : "'" + e + "'"
                      , b = "You provided " + v + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
                    h.error(new TypeError(b))
                }
            }
            return null
        }
        var i = n(16)
          , o = n(155)
          , s = n(157)
          , a = n(156)
          , c = n(0)
          , u = n(80)
          , l = n(359)
          , p = n(81);
        e.subscribeToResult = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(4)
          , i = (n(1),
        function(t) {
            var e = this;
            if (e.instancePool.length) {
                var n = e.instancePool.pop();
                return e.call(n, t),
                n
            }
            return new e(t)
        }
        )
          , o = function(t, e) {
            var n = this;
            if (n.instancePool.length) {
                var r = n.instancePool.pop();
                return n.call(r, t, e),
                r
            }
            return new n(t,e)
        }
          , s = function(t, e, n) {
            var r = this;
            if (r.instancePool.length) {
                var i = r.instancePool.pop();
                return r.call(i, t, e, n),
                i
            }
            return new r(t,e,n)
        }
          , a = function(t, e, n, r) {
            var i = this;
            if (i.instancePool.length) {
                var o = i.instancePool.pop();
                return i.call(o, t, e, n, r),
                o
            }
            return new i(t,e,n,r)
        }
          , c = function(t) {
            var e = this;
            t instanceof e || r("25"),
            t.destructor(),
            e.instancePool.length < e.poolSize && e.instancePool.push(t)
        }
          , u = i
          , l = function(t, e) {
            var n = t;
            return n.instancePool = [],
            n.getPooled = e || u,
            n.poolSize || (n.poolSize = 10),
            n.release = c,
            n
        }
          , p = {
            addPoolingTo: l,
            oneArgumentPooler: i,
            twoArgumentPooler: o,
            threeArgumentPooler: s,
            fourArgumentPooler: a
        };
        t.exports = p
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t.reduce(function(t, e) {
                return t.concat(e instanceof u.UnsubscriptionError ? e.errors : e)
            }, [])
        }
        var i = n(50)
          , o = n(156)
          , s = n(83)
          , a = n(36)
          , c = n(28)
          , u = n(413)
          , l = function() {
            function t(t) {
                this.closed = !1,
                this._parent = null,
                this._parents = null,
                this._subscriptions = null,
                t && (this._unsubscribe = t)
            }
            return t.prototype.unsubscribe = function() {
                var t, e = !1;
                if (!this.closed) {
                    var n = this
                      , l = n._parent
                      , p = n._parents
                      , h = n._unsubscribe
                      , d = n._subscriptions;
                    this.closed = !0,
                    this._parent = null,
                    this._parents = null,
                    this._subscriptions = null;
                    for (var f = -1, m = p ? p.length : 0; l; )
                        l.remove(this),
                        l = ++f < m && p[f] || null;
                    if (s.isFunction(h)) {
                        var g = a.tryCatch(h).call(this);
                        g === c.errorObject && (e = !0,
                        t = t || (c.errorObject.e instanceof u.UnsubscriptionError ? r(c.errorObject.e.errors) : [c.errorObject.e]))
                    }
                    if (i.isArray(d))
                        for (f = -1,
                        m = d.length; ++f < m; ) {
                            var y = d[f];
                            if (o.isObject(y)) {
                                var g = a.tryCatch(y.unsubscribe).call(y);
                                if (g === c.errorObject) {
                                    e = !0,
                                    t = t || [];
                                    var v = c.errorObject.e;
                                    v instanceof u.UnsubscriptionError ? t = t.concat(r(v.errors)) : t.push(v)
                                }
                            }
                        }
                    if (e)
                        throw new u.UnsubscriptionError(t)
                }
            }
            ,
            t.prototype.add = function(e) {
                if (!e || e === t.EMPTY)
                    return t.EMPTY;
                if (e === this)
                    return this;
                var n = e;
                switch (typeof e) {
                case "function":
                    n = new t(e);
                case "object":
                    if (n.closed || "function" != typeof n.unsubscribe)
                        return n;
                    if (this.closed)
                        return n.unsubscribe(),
                        n;
                    if ("function" != typeof n._addParent) {
                        var r = n;
                        n = new t,
                        n._subscriptions = [r]
                    }
                    break;
                default:
                    throw new Error("unrecognized teardown " + e + " added to Subscription.")
                }
                return (this._subscriptions || (this._subscriptions = [])).push(n),
                n._addParent(this),
                n
            }
            ,
            t.prototype.remove = function(t) {
                var e = this._subscriptions;
                if (e) {
                    var n = e.indexOf(t);
                    -1 !== n && e.splice(n, 1)
                }
            }
            ,
            t.prototype._addParent = function(t) {
                var e = this
                  , n = e._parent
                  , r = e._parents;
                n && n !== t ? r ? -1 === r.indexOf(t) && r.push(t) : this._parents = [t] : this._parent = t
            }
            ,
            t.EMPTY = function(t) {
                return t.closed = !0,
                t
            }(new t),
            t
        }();
        e.Subscription = l
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return 1 === t.length ? t : v[t]
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(10)
          , o = n(9)
          , s = n(59)
          , a = n(52)
          , c = n(34)
          , u = n(179)
          , l = n(29)
          , p = n(38)
          , h = n(40)
          , d = n(175)
          , f = n(176)
          , m = n(177)
          , g = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.store = h.createStore(),
                n.resizeListener = function() {
                    return n.setSize()
                }
                ,
                n._handleCardAction = n.handleCardAction.bind(n),
                n._handleKeyDownCapture = n.handleKeyDownCapture.bind(n),
                n._saveChatviewPanelRef = n.saveChatviewPanelRef.bind(n),
                n._saveHistoryRef = n.saveHistoryRef.bind(n),
                n._saveShellRef = n.saveShellRef.bind(n),
                l.log("BotChat.Chat props", e),
                n.store.dispatch({
                    type: "Set_Locale",
                    locale: e.locale || window.navigator.userLanguage || window.navigator.language || "en"
                }),
                e.adaptiveCardsHostConfig && n.store.dispatch({
                    type: "Set_AdaptiveCardsHostConfig",
                    payload: e.adaptiveCardsHostConfig
                });
                var r = e.chatTitle;
                return e.formatOptions && (console.warn('DEPRECATED: "formatOptions.showHeader" is deprecated, use "chatTitle" instead. See https://github.com/Microsoft/BotFramework-WebChat/blob/master/CHANGELOG.md#formatoptionsshowheader-is-deprecated-use-chattitle-instead.'),
                void 0 !== e.formatOptions.showHeader && void 0 === e.chatTitle && (r = e.formatOptions.showHeader)),
                void 0 !== r && n.store.dispatch({
                    type: "Set_Chat_Title",
                    chatTitle: r
                }),
                n.store.dispatch({
                    type: "Toggle_Upload_Button",
                    showUploadButton: !1 !== e.showUploadButton
                }),
                e.sendTyping && n.store.dispatch({
                    type: "Set_Send_Typing",
                    sendTyping: e.sendTyping
                }),
                e.speechOptions && (p.Speech.SpeechRecognizer.setSpeechRecognizer(e.speechOptions.speechRecognizer),
                p.Speech.SpeechSynthesizer.setSpeechSynthesizer(e.speechOptions.speechSynthesizer)),
                n
            }
            return i.__extends(e, t),
            e.prototype.handleIncomingActivity = function(t) {
                var e = this.store.getState();
                switch (t.type) {
                case "message":
                    this.store.dispatch({
                        type: t.from.id === e.connection.user.id ? "Receive_Sent_Message" : "Receive_Message",
                        activity: t
                    });
                    break;
                case "typing":
                    t.from.id !== e.connection.user.id && this.store.dispatch({
                        type: "Show_Typing",
                        activity: t
                    })
                }
            }
            ,
            e.prototype.setSize = function() {
                this.store.dispatch({
                    type: "Set_Size",
                    width: this.chatviewPanelRef.offsetWidth,
                    height: this.chatviewPanelRef.offsetHeight
                })
            }
            ,
            e.prototype.handleCardAction = function() {
                var t = s.findDOMNode(this.historyRef);
                t && t.focus()
            }
            ,
            e.prototype.handleKeyDownCapture = function(t) {
                var e = t.target
                  , n = u.getTabIndex(e);
                if (!(t.altKey || t.ctrlKey || t.metaKey || !r(t.key) && "Backspace" !== t.key) && (e === s.findDOMNode(this.historyRef) || "number" != typeof n || n < 0)) {
                    t.stopPropagation();
                    var i = void 0;
                    /(^|\s)Edge\/16\./.test(navigator.userAgent) && (i = r(t.key)),
                    this.shellRef.focus(i)
                }
            }
            ,
            e.prototype.saveChatviewPanelRef = function(t) {
                this.chatviewPanelRef = t
            }
            ,
            e.prototype.saveHistoryRef = function(t) {
                this.historyRef = t && t.getWrappedInstance()
            }
            ,
            e.prototype.saveShellRef = function(t) {
                this.shellRef = t && t.getWrappedInstance()
            }
            ,
            e.prototype.componentDidMount = function() {
                var t = this;
                this.setSize();
                var e = this.props.directLine ? this.botConnection = new a.DirectLine(this.props.directLine) : this.props.botConnection;
                "window" === this.props.resize && window.addEventListener("resize", this.resizeListener),
                this.store.dispatch({
                    type: "Start_Connection",
                    user: this.props.user,
                    bot: this.props.bot,
                    botConnection: e,
                    selectedActivity: this.props.selectedActivity
                }),
                this.connectionStatusSubscription = e.connectionStatus$.subscribe(function(n) {
                    if (t.props.speechOptions && t.props.speechOptions.speechRecognizer) {
                        var r = e.referenceGrammarId;
                        r && (t.props.speechOptions.speechRecognizer.referenceGrammarId = r)
                    }
                    t.store.dispatch({
                        type: "Connection_Change",
                        connectionStatus: n
                    })
                }),
                this.activitySubscription = e.activity$.subscribe(function(e) {
                    return t.handleIncomingActivity(e)
                }, function(t) {
                    return l.log("activity$ error", t)
                }),
                this.props.selectedActivity && (this.selectedActivitySubscription = this.props.selectedActivity.subscribe(function(e) {
                    t.store.dispatch({
                        type: "Select_Activity",
                        selectedActivity: e.activity || t.store.getState().history.activities.find(function(t) {
                            return t.id === e.id
                        })
                    })
                }))
            }
            ,
            e.prototype.componentWillUnmount = function() {
                this.connectionStatusSubscription.unsubscribe(),
                this.activitySubscription.unsubscribe(),
                this.selectedActivitySubscription && this.selectedActivitySubscription.unsubscribe(),
                this.botConnection && this.botConnection.end(),
                window.removeEventListener("resize", this.resizeListener)
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                this.props.adaptiveCardsHostConfig !== t.adaptiveCardsHostConfig && this.store.dispatch({
                    type: "Set_AdaptiveCardsHostConfig",
                    payload: t.adaptiveCardsHostConfig
                }),
                this.props.showUploadButton !== t.showUploadButton && this.store.dispatch({
                    type: "Toggle_Upload_Button",
                    showUploadButton: t.showUploadButton
                }),
                this.props.chatTitle !== t.chatTitle && this.store.dispatch({
                    type: "Set_Chat_Title",
                    chatTitle: t.chatTitle
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.store.getState();
                return l.log("BotChat.Chat state", t),
                o.createElement(c.Provider, {
                    store: this.store
                }, o.createElement("div", {
                    className: "wc-chatview-panel",
                    onKeyDownCapture: this._handleKeyDownCapture,
                    ref: this._saveChatviewPanelRef
                }, !!t.format.chatTitle && o.createElement("div", {
                    className: "wc-header"
                }, o.createElement("span", null, "string" == typeof t.format.chatTitle ? t.format.chatTitle : t.format.strings.title)), o.createElement(f.MessagePane, null, o.createElement(d.History, {
                    onCardAction: this._handleCardAction,
                    ref: this._saveHistoryRef
                })), o.createElement(m.Shell, {
                    ref: this._saveShellRef
                }), "detect" === this.props.resize && o.createElement(y, {
                    onresize: this.resizeListener
                })))
            }
            ,
            e
        }(o.Component);
        e.Chat = g,
        e.doCardAction = function(t, n, r, i) {
            return function(o, s) {
                var a = "string" == typeof s ? s : void 0
                  , c = "object" == typeof s ? s : void 0;
                switch (o) {
                case "imBack":
                    "string" == typeof a && i(a, n, r);
                    break;
                case "postBack":
                    e.sendPostBack(t, a, c, n, r);
                    break;
                case "call":
                case "openUrl":
                case "playAudio":
                case "playVideo":
                case "showImage":
                case "downloadFile":
                    window.open(a);
                    break;
                case "signin":
                    var u = window.open();
                    t.getSessionId ? t.getSessionId().subscribe(function(t) {
                        l.log("received sessionId: " + t),
                        u.location.href = a + encodeURIComponent("&code_challenge=" + t)
                    }, function(t) {
                        l.log("failed to get sessionId", t)
                    }) : u.location.href = a;
                    break;
                default:
                    l.log("unknown button type", o)
                }
            }
        }
        ,
        e.sendPostBack = function(t, e, n, r, i) {
            t.postActivity({
                type: "message",
                text: e,
                value: n,
                from: r,
                locale: i
            }).subscribe(function(t) {
                return l.log("success sending postBack", t)
            }, function(t) {
                return l.log("failed to send postBack", t)
            })
        }
        ,
        e.renderIfNonempty = function(t, e) {
            if (void 0 !== t && null !== t && ("string" != typeof t || t.length > 0))
                return e(t)
        }
        ,
        e.classList = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return t.filter(Boolean).join(" ")
        }
        ;
        var y = function(t) {
            return o.createElement("iframe", {
                style: {
                    border: "none",
                    height: "100%",
                    left: 0,
                    margin: "1px 0 0",
                    opacity: 0,
                    pointerEvents: "none",
                    position: "absolute",
                    top: "-100%",
                    visibility: "hidden",
                    width: "100%"
                },
                ref: function(e) {
                    e && (e.contentWindow.onresize = t.onresize)
                }
            })
        }
          , v = {
            Add: "+",
            Decimal: ".",
            Divide: "/",
            Multiply: "*",
            Subtract: "-"
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (f) {
                var e = t.node
                  , n = t.children;
                if (n.length)
                    for (var r = 0; r < n.length; r++)
                        m(e, n[r], null);
                else
                    null != t.html ? p(e, t.html) : null != t.text && d(e, t.text)
            }
        }
        function i(t, e) {
            t.parentNode.replaceChild(e.node, t),
            r(e)
        }
        function o(t, e) {
            f ? t.children.push(e) : t.node.appendChild(e.node)
        }
        function s(t, e) {
            f ? t.html = e : p(t.node, e)
        }
        function a(t, e) {
            f ? t.text = e : d(t.node, e)
        }
        function c() {
            return this.node.nodeName
        }
        function u(t) {
            return {
                node: t,
                children: [],
                html: null,
                text: null,
                toString: c
            }
        }
        var l = n(61)
          , p = n(47)
          , h = n(69)
          , d = n(122)
          , f = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent)
          , m = h(function(t, e, n) {
            11 === e.node.nodeType || 1 === e.node.nodeType && "object" === e.node.nodeName.toLowerCase() && (null == e.node.namespaceURI || e.node.namespaceURI === l.html) ? (r(e),
            t.insertBefore(e.node, n)) : (t.insertBefore(e.node, n),
            r(e))
        });
        u.insertTreeBefore = m,
        u.replaceChildWithTree = i,
        u.queueChild = o,
        u.queueHTML = s,
        u.queueText = a,
        t.exports = u
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return (t & e) === e
        }
        var i = n(4)
          , o = (n(1),
        {
            MUST_USE_PROPERTY: 1,
            HAS_BOOLEAN_VALUE: 4,
            HAS_NUMERIC_VALUE: 8,
            HAS_POSITIVE_NUMERIC_VALUE: 24,
            HAS_OVERLOADED_BOOLEAN_VALUE: 32,
            injectDOMPropertyConfig: function(t) {
                var e = o
                  , n = t.Properties || {}
                  , s = t.DOMAttributeNamespaces || {}
                  , c = t.DOMAttributeNames || {}
                  , u = t.DOMPropertyNames || {}
                  , l = t.DOMMutationMethods || {};
                t.isCustomAttribute && a._isCustomAttributeFunctions.push(t.isCustomAttribute);
                for (var p in n) {
                    a.properties.hasOwnProperty(p) && i("48", p);
                    var h = p.toLowerCase()
                      , d = n[p]
                      , f = {
                        attributeName: h,
                        attributeNamespace: null,
                        propertyName: p,
                        mutationMethod: null,
                        mustUseProperty: r(d, e.MUST_USE_PROPERTY),
                        hasBooleanValue: r(d, e.HAS_BOOLEAN_VALUE),
                        hasNumericValue: r(d, e.HAS_NUMERIC_VALUE),
                        hasPositiveNumericValue: r(d, e.HAS_POSITIVE_NUMERIC_VALUE),
                        hasOverloadedBooleanValue: r(d, e.HAS_OVERLOADED_BOOLEAN_VALUE)
                    };
                    if (f.hasBooleanValue + f.hasNumericValue + f.hasOverloadedBooleanValue <= 1 || i("50", p),
                    c.hasOwnProperty(p)) {
                        var m = c[p];
                        f.attributeName = m
                    }
                    s.hasOwnProperty(p) && (f.attributeNamespace = s[p]),
                    u.hasOwnProperty(p) && (f.propertyName = u[p]),
                    l.hasOwnProperty(p) && (f.mutationMethod = l[p]),
                    a.properties[p] = f
                }
            }
        })
          , s = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"
          , a = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            ROOT_ATTRIBUTE_NAME: "data-reactroot",
            ATTRIBUTE_NAME_START_CHAR: s,
            ATTRIBUTE_NAME_CHAR: s + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
            properties: {},
            getPossibleStandardName: null,
            _isCustomAttributeFunctions: [],
            isCustomAttribute: function(t) {
                for (var e = 0; e < a._isCustomAttributeFunctions.length; e++) {
                    if ((0,
                    a._isCustomAttributeFunctions[e])(t))
                        return !0
                }
                return !1
            },
            injection: o
        };
        t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            i.attachRefs(this, this._currentElement)
        }
        var i = n(303)
          , o = (n(12),
        n(3),
        {
            mountComponent: function(t, e, n, i, o, s) {
                var a = t.mountComponent(e, n, i, o, s);
                return t._currentElement && null != t._currentElement.ref && e.getReactMountReady().enqueue(r, t),
                a
            },
            getHostNode: function(t) {
                return t.getHostNode()
            },
            unmountComponent: function(t, e) {
                i.detachRefs(t, t._currentElement),
                t.unmountComponent(e)
            },
            receiveComponent: function(t, e, n, o) {
                var s = t._currentElement;
                if (e !== s || o !== t._context) {
                    var a = i.shouldUpdateRefs(s, e);
                    a && i.detachRefs(t, s),
                    t.receiveComponent(e, n, o),
                    a && t._currentElement && null != t._currentElement.ref && n.getReactMountReady().enqueue(r, t)
                }
            },
            performUpdateIfNecessary: function(t, e, n) {
                t._updateBatchNumber === n && t.performUpdateIfNecessary(e)
            }
        });
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5)
          , i = n(128)
          , o = n(341)
          , s = n(342)
          , a = n(26)
          , c = n(343)
          , u = n(344)
          , l = n(345)
          , p = n(349)
          , h = a.createElement
          , d = a.createFactory
          , f = a.cloneElement
          , m = r
          , g = function(t) {
            return t
        }
          , y = {
            Children: {
                map: o.map,
                forEach: o.forEach,
                count: o.count,
                toArray: o.toArray,
                only: p
            },
            Component: i.Component,
            PureComponent: i.PureComponent,
            createElement: h,
            cloneElement: f,
            isValidElement: a.isValidElement,
            PropTypes: c,
            createClass: l,
            createFactory: d,
            createMixin: g,
            DOM: s,
            version: u,
            __spread: m
        };
        t.exports = y
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return void 0 !== t.ref
        }
        function i(t) {
            return void 0 !== t.key
        }
        var o = n(5)
          , s = n(15)
          , a = (n(3),
        n(132),
        Object.prototype.hasOwnProperty)
          , c = n(130)
          , u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        }
          , l = function(t, e, n, r, i, o, s) {
            var a = {
                $$typeof: c,
                type: t,
                key: e,
                ref: n,
                props: s,
                _owner: o
            };
            return a
        };
        l.createElement = function(t, e, n) {
            var o, c = {}, p = null, h = null;
            if (null != e) {
                r(e) && (h = e.ref),
                i(e) && (p = "" + e.key),
                void 0 === e.__self ? null : e.__self,
                void 0 === e.__source ? null : e.__source;
                for (o in e)
                    a.call(e, o) && !u.hasOwnProperty(o) && (c[o] = e[o])
            }
            var d = arguments.length - 2;
            if (1 === d)
                c.children = n;
            else if (d > 1) {
                for (var f = Array(d), m = 0; m < d; m++)
                    f[m] = arguments[m + 2];
                c.children = f
            }
            if (t && t.defaultProps) {
                var g = t.defaultProps;
                for (o in g)
                    void 0 === c[o] && (c[o] = g[o])
            }
            return l(t, p, h, 0, 0, s.current, c)
        }
        ,
        l.createFactory = function(t) {
            var e = l.createElement.bind(null, t);
            return e.type = t,
            e
        }
        ,
        l.cloneAndReplaceKey = function(t, e) {
            return l(t.type, e, t.ref, t._self, t._source, t._owner, t.props)
        }
        ,
        l.cloneElement = function(t, e, n) {
            var c, p = o({}, t.props), h = t.key, d = t.ref, f = (t._self,
            t._source,
            t._owner);
            if (null != e) {
                r(e) && (d = e.ref,
                f = s.current),
                i(e) && (h = "" + e.key);
                var m;
                t.type && t.type.defaultProps && (m = t.type.defaultProps);
                for (c in e)
                    a.call(e, c) && !u.hasOwnProperty(c) && (void 0 === e[c] && void 0 !== m ? p[c] = m[c] : p[c] = e[c])
            }
            var g = arguments.length - 2;
            if (1 === g)
                p.children = n;
            else if (g > 1) {
                for (var y = Array(g), v = 0; v < g; v++)
                    y[v] = arguments[v + 2];
                p.children = y
            }
            return l(t.type, h, d, 0, 0, f, p)
        }
        ,
        l.isValidElement = function(t) {
            return "object" == typeof t && null !== t && t.$$typeof === c
        }
        ,
        t.exports = l
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(0)
          , o = n(8)
          , s = n(20)
          , a = n(154)
          , c = n(361)
          , u = n(82)
          , l = function(t) {
            function e(e) {
                t.call(this, e),
                this.destination = e
            }
            return r(e, t),
            e
        }(o.Subscriber);
        e.SubjectSubscriber = l;
        var p = function(t) {
            function e() {
                t.call(this),
                this.observers = [],
                this.closed = !1,
                this.isStopped = !1,
                this.hasError = !1,
                this.thrownError = null
            }
            return r(e, t),
            e.prototype[u.rxSubscriber] = function() {
                return new l(this)
            }
            ,
            e.prototype.lift = function(t) {
                var e = new h(this,this);
                return e.operator = t,
                e
            }
            ,
            e.prototype.next = function(t) {
                if (this.closed)
                    throw new a.ObjectUnsubscribedError;
                if (!this.isStopped)
                    for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++)
                        r[i].next(t)
            }
            ,
            e.prototype.error = function(t) {
                if (this.closed)
                    throw new a.ObjectUnsubscribedError;
                this.hasError = !0,
                this.thrownError = t,
                this.isStopped = !0;
                for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++)
                    r[i].error(t);
                this.observers.length = 0
            }
            ,
            e.prototype.complete = function() {
                if (this.closed)
                    throw new a.ObjectUnsubscribedError;
                this.isStopped = !0;
                for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++)
                    n[r].complete();
                this.observers.length = 0
            }
            ,
            e.prototype.unsubscribe = function() {
                this.isStopped = !0,
                this.closed = !0,
                this.observers = null
            }
            ,
            e.prototype._trySubscribe = function(e) {
                if (this.closed)
                    throw new a.ObjectUnsubscribedError;
                return t.prototype._trySubscribe.call(this, e)
            }
            ,
            e.prototype._subscribe = function(t) {
                if (this.closed)
                    throw new a.ObjectUnsubscribedError;
                return this.hasError ? (t.error(this.thrownError),
                s.Subscription.EMPTY) : this.isStopped ? (t.complete(),
                s.Subscription.EMPTY) : (this.observers.push(t),
                new c.SubjectSubscription(this,t))
            }
            ,
            e.prototype.asObservable = function() {
                var t = new i.Observable;
                return t.source = this,
                t
            }
            ,
            e.create = function(t, e) {
                return new h(t,e)
            }
            ,
            e
        }(i.Observable);
        e.Subject = p;
        var h = function(t) {
            function e(e, n) {
                t.call(this),
                this.destination = e,
                this.source = n
            }
            return r(e, t),
            e.prototype.next = function(t) {
                var e = this.destination;
                e && e.next && e.next(t)
            }
            ,
            e.prototype.error = function(t) {
                var e = this.destination;
                e && e.error && this.destination.error(t)
            }
            ,
            e.prototype.complete = function() {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }
            ,
            e.prototype._subscribe = function(t) {
                return this.source ? this.source.subscribe(t) : s.Subscription.EMPTY
            }
            ,
            e
        }(p);
        e.AnonymousSubject = h
    }
    , function(t, e, n) {
        "use strict";
        e.errorObject = {
            e: {}
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.log = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            "undefined" != typeof window && window.botchatDebug && t && console.log.apply(console, [t].concat(e))
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return "button" === t || "input" === t || "select" === t || "textarea" === t
        }
        function i(t, e, n) {
            switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                return !(!n.disabled || !r(e));
            default:
                return !1
            }
        }
        var o = n(4)
          , s = n(62)
          , a = n(63)
          , c = n(67)
          , u = n(115)
          , l = n(116)
          , p = (n(1),
        {})
          , h = null
          , d = function(t, e) {
            t && (a.executeDispatchesInOrder(t, e),
            t.isPersistent() || t.constructor.release(t))
        }
          , f = function(t) {
            return d(t, !0)
        }
          , m = function(t) {
            return d(t, !1)
        }
          , g = function(t) {
            return "." + t._rootNodeID
        }
          , y = {
            injection: {
                injectEventPluginOrder: s.injectEventPluginOrder,
                injectEventPluginsByName: s.injectEventPluginsByName
            },
            putListener: function(t, e, n) {
                "function" != typeof n && o("94", e, typeof n);
                var r = g(t);
                (p[e] || (p[e] = {}))[r] = n;
                var i = s.registrationNameModules[e];
                i && i.didPutListener && i.didPutListener(t, e, n)
            },
            getListener: function(t, e) {
                var n = p[e];
                if (i(e, t._currentElement.type, t._currentElement.props))
                    return null;
                var r = g(t);
                return n && n[r]
            },
            deleteListener: function(t, e) {
                var n = s.registrationNameModules[e];
                n && n.willDeleteListener && n.willDeleteListener(t, e);
                var r = p[e];
                if (r) {
                    delete r[g(t)]
                }
            },
            deleteAllListeners: function(t) {
                var e = g(t);
                for (var n in p)
                    if (p.hasOwnProperty(n) && p[n][e]) {
                        var r = s.registrationNameModules[n];
                        r && r.willDeleteListener && r.willDeleteListener(t, n),
                        delete p[n][e]
                    }
            },
            extractEvents: function(t, e, n, r) {
                for (var i, o = s.plugins, a = 0; a < o.length; a++) {
                    var c = o[a];
                    if (c) {
                        var l = c.extractEvents(t, e, n, r);
                        l && (i = u(i, l))
                    }
                }
                return i
            },
            enqueueEvents: function(t) {
                t && (h = u(h, t))
            },
            processEventQueue: function(t) {
                var e = h;
                h = null,
                t ? l(e, f) : l(e, m),
                h && o("95"),
                c.rethrowCaughtError()
            },
            __purge: function() {
                p = {}
            },
            __getListenerBank: function() {
                return p
            }
        };
        t.exports = y
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            var r = e.dispatchConfig.phasedRegistrationNames[n];
            return y(t, r)
        }
        function i(t, e, n) {
            var i = r(t, n, e);
            i && (n._dispatchListeners = m(n._dispatchListeners, i),
            n._dispatchInstances = m(n._dispatchInstances, t))
        }
        function o(t) {
            t && t.dispatchConfig.phasedRegistrationNames && f.traverseTwoPhase(t._targetInst, i, t)
        }
        function s(t) {
            if (t && t.dispatchConfig.phasedRegistrationNames) {
                var e = t._targetInst
                  , n = e ? f.getParentInstance(e) : null;
                f.traverseTwoPhase(n, i, t)
            }
        }
        function a(t, e, n) {
            if (n && n.dispatchConfig.registrationName) {
                var r = n.dispatchConfig.registrationName
                  , i = y(t, r);
                i && (n._dispatchListeners = m(n._dispatchListeners, i),
                n._dispatchInstances = m(n._dispatchInstances, t))
            }
        }
        function c(t) {
            t && t.dispatchConfig.registrationName && a(t._targetInst, null, t)
        }
        function u(t) {
            g(t, o)
        }
        function l(t) {
            g(t, s)
        }
        function p(t, e, n, r) {
            f.traverseEnterLeave(n, r, a, t, e)
        }
        function h(t) {
            g(t, c)
        }
        var d = n(30)
          , f = n(63)
          , m = n(115)
          , g = n(116)
          , y = (n(3),
        d.getListener)
          , v = {
            accumulateTwoPhaseDispatches: u,
            accumulateTwoPhaseDispatchesSkipTarget: l,
            accumulateDirectDispatches: h,
            accumulateEnterLeaveDispatches: p
        };
        t.exports = v
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            remove: function(t) {
                t._reactInternalInstance = void 0
            },
            get: function(t) {
                return t._reactInternalInstance
            },
            has: function(t) {
                return void 0 !== t._reactInternalInstance
            },
            set: function(t, e) {
                t._reactInternalInstance = e
            }
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(14)
          , o = n(72)
          , s = {
            view: function(t) {
                if (t.view)
                    return t.view;
                var e = o(t);
                if (e.window === e)
                    return e;
                var n = e.ownerDocument;
                return n ? n.defaultView || n.parentWindow : window
            },
            detail: function(t) {
                return t.detail || 0
            }
        };
        i.augmentClass(r, s),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(330)
          , i = n(124)
          , o = n(331);
        n.d(e, "Provider", function() {
            return r.a
        }),
        n.d(e, "createProvider", function() {
            return r.b
        }),
        n.d(e, "connectAdvanced", function() {
            return i.a
        }),
        n.d(e, "connect", function() {
            return o.a
        })
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++)
                n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var i = new Error(n);
            throw i.name = "Invariant Violation",
            i.framesToPop = 1,
            i
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            try {
                return o.apply(this, arguments)
            } catch (t) {
                return s.errorObject.e = t,
                s.errorObject
            }
        }
        function i(t) {
            return o = t,
            r
        }
        var o, s = n(28);
        e.tryCatch = i
    }
    , function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return void 0 === e && (e = ["moz", "ms", "webkit"]),
            [""].concat(e).reduce(function(e, n) {
                return e || window[n + t]
            }, null)
        }
        function i(t, e) {
            return new Promise(function(n, r) {
                var i = function() {
                    t.removeEventListener(e, o),
                    t.removeEventListener(e, s)
                }
                  , o = function(t) {
                    i(),
                    r(t)
                }
                  , s = function(t) {
                    i(),
                    n(t)
                };
                t.addEventListener(e, s),
                t.addEventListener("error", o)
            }
            )
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(10)
          , s = n(197);
        !function(t) {
            var e = function() {
                function t() {}
                return t.setSpeechRecognizer = function(e) {
                    t.instance = e
                }
                ,
                t.startRecognizing = function(e, n, r, i, s, a) {
                    return void 0 === e && (e = "en-US"),
                    void 0 === r && (r = null),
                    void 0 === i && (i = null),
                    void 0 === s && (s = null),
                    void 0 === a && (a = null),
                    o.__awaiter(this, void 0, void 0, function() {
                        return o.__generator(this, function(o) {
                            switch (o.label) {
                            case 0:
                                return t.speechIsAvailable() ? e && t.instance.locale !== e ? [4, t.instance.stopRecognizing()] : [3, 2] : [2];
                            case 1:
                                o.sent(),
                                t.instance.locale = e,
                                o.label = 2;
                            case 2:
                                return t.instance.setGrammars(n),
                                t.alreadyRecognizing() ? [4, t.stopRecognizing()] : [3, 4];
                            case 3:
                                o.sent(),
                                o.label = 4;
                            case 4:
                                return t.instance.onIntermediateResult = r,
                                t.instance.onFinalResult = i,
                                t.instance.onAudioStreamingToService = s,
                                t.instance.onRecognitionFailed = a,
                                [4, t.instance.startRecognizing()];
                            case 5:
                                return o.sent(),
                                [2]
                            }
                        })
                    })
                }
                ,
                t.stopRecognizing = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        return o.__generator(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return t.speechIsAvailable() ? [4, t.instance.stopRecognizing()] : [2];
                            case 1:
                                return e.sent(),
                                [2]
                            }
                        })
                    })
                }
                ,
                t.warmup = function() {
                    t.speechIsAvailable() && t.instance.warmup()
                }
                ,
                t.speechIsAvailable = function() {
                    return null != t.instance && t.instance.speechIsAvailable()
                }
                ,
                t.alreadyRecognizing = function() {
                    return !!t.instance && t.instance.isStreamingToService
                }
                ,
                t
            }();
            e.instance = null,
            t.SpeechRecognizer = e;
            var n = function() {
                function t() {}
                return t.setSpeechSynthesizer = function(e) {
                    t.instance = e
                }
                ,
                t.speak = function(e, n, r, i) {
                    void 0 === r && (r = null),
                    void 0 === i && (i = null),
                    null != t.instance && t.instance.speak(e, n, r, i)
                }
                ,
                t.stopSpeaking = function() {
                    null != t.instance && t.instance.stopSpeaking()
                }
                ,
                t
            }();
            n.instance = null,
            t.SpeechSynthesizer = n;
            var a = function() {
                function t() {
                    var t = this;
                    if (this.locale = null,
                    this.isStreamingToService = !1,
                    this.onIntermediateResult = null,
                    this.onFinalResult = null,
                    this.onAudioStreamingToService = null,
                    this.onRecognitionFailed = null,
                    this.recognizer = null,
                    !window.webkitSpeechRecognition)
                        return void console.error("This browser does not support speech recognition");
                    this.recognizer = new window.webkitSpeechRecognition,
                    this.recognizer.lang = "en-US",
                    this.recognizer.interimResults = !0,
                    this.recognizer.onaudiostart = function() {
                        t.onAudioStreamingToService && t.onAudioStreamingToService()
                    }
                    ,
                    this.recognizer.onresult = function(e) {
                        if (null != e.results && 0 !== e.length) {
                            var n = e.results[0];
                            if (!0 === n.isFinal && null != t.onFinalResult)
                                t.onFinalResult(n[0].transcript);
                            else if (!1 === n.isFinal && null != t.onIntermediateResult) {
                                for (var r = "", i = 0; i < e.results.length; ++i)
                                    r += e.results[i][0].transcript;
                                t.onIntermediateResult(r)
                            }
                        }
                    }
                    ,
                    this.recognizer.onerror = function(e) {
                        throw t.onRecognitionFailed && t.onRecognitionFailed(),
                        e
                    }
                    ,
                    this.recognizer.onend = function() {
                        t.isStreamingToService = !1
                    }
                }
                return t.prototype.speechIsAvailable = function() {
                    return null != this.recognizer
                }
                ,
                t.prototype.warmup = function() {}
                ,
                t.prototype.startRecognizing = function() {
                    return this.isStreamingToService = !0,
                    this.recognizer.start(),
                    i(this.recognizer, "start").then(function() {})
                }
                ,
                t.prototype.stopRecognizing = function() {
                    return this.isStreamingToService ? (this.recognizer.stop(),
                    i(this.recognizer, "end").then(function() {})) : Promise.resolve()
                }
                ,
                t.prototype.setGrammars = function(t) {
                    void 0 === t && (t = []);
                    var e = new (r("SpeechGrammarList"));
                    if (!e)
                        return void (t.length && console.warn("This browser does not support speech grammar list"));
                    if (t.length) {
                        var n = s.default("listenfor");
                        n.public.rule("hint", t.join(" | ")),
                        e.addFromString(n.stringify()),
                        this.recognizer.grammars = e
                    }
                }
                ,
                t
            }();
            t.BrowserSpeechRecognizer = a;
            var c = function() {
                function t() {
                    this.lastOperation = null,
                    this.audioElement = null,
                    this.speakRequests = []
                }
                return t.prototype.speak = function(t, e, n, r) {
                    var i = this;
                    if (void 0 === n && (n = null),
                    void 0 === r && (r = null),
                    "SpeechSynthesisUtterance"in window && t) {
                        if (null === this.audioElement) {
                            var o = document.createElement("audio");
                            o.id = "player",
                            o.autoplay = !0,
                            this.audioElement = o
                        }
                        var s = new Array;
                        if ("<" === t[0]) {
                            0 !== t.indexOf("<speak") && (t = "<speak>\n" + t + "\n</speak>\n");
                            var a = new DOMParser
                              , c = a.parseFromString(t, "text/xml")
                              , l = c.documentElement.childNodes;
                            this.processNodes(l, s)
                        } else
                            s.push(t);
                        var p = function() {
                            null !== r && r(),
                            i.speakRequests.length && (i.speakRequests[0].completed(),
                            i.speakRequests.splice(0, 1)),
                            i.speakRequests.length && i.playNextTTS(i.speakRequests[0], 0)
                        }
                          , h = new u(s,e,function(t) {
                            i.lastOperation = t
                        }
                        ,n,p);
                        0 === this.speakRequests.length ? (this.speakRequests = [h],
                        this.playNextTTS(this.speakRequests[0], 0)) : this.speakRequests.push(h)
                    }
                }
                ,
                t.prototype.stopSpeaking = function() {
                    if ("SpeechSynthesisUtterance"in window != !1 && this.speakRequests.length) {
                        this.audioElement && this.audioElement.pause(),
                        this.speakRequests.forEach(function(t) {
                            t.abandon()
                        }),
                        this.speakRequests = [];
                        var t = window.speechSynthesis;
                        (t.speaking || t.pending) && (this.lastOperation && (this.lastOperation.onend = null),
                        t.cancel())
                    }
                }
                ,
                t.prototype.playNextTTS = function(t, e) {
                    var n = this
                      , r = function() {
                        n.playNextTTS(t, e + 1)
                    };
                    if (e < t.speakChunks.length) {
                        var i = t.speakChunks[e];
                        if ("number" == typeof i)
                            setTimeout(r, i);
                        else if (0 === i.indexOf("http")) {
                            var o = this.audioElement;
                            o.src = i,
                            o.onended = r,
                            o.onerror = r,
                            o.play()
                        } else {
                            var s = new SpeechSynthesisUtterance;
                            s.text = i,
                            s.lang = t.lang,
                            s.onstart = 0 === e ? t.onSpeakingStarted : null,
                            s.onend = r,
                            s.onerror = r,
                            t.onSpeakQueued && t.onSpeakQueued(s),
                            window.speechSynthesis.speak(s)
                        }
                    } else
                        t.onSpeakingFinished && t.onSpeakingFinished()
                }
                ,
                t.prototype.processNodes = function(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        switch (r.nodeName) {
                        case "p":
                            this.processNodes(r.childNodes, e),
                            e.push(250);
                            break;
                        case "break":
                            if (r.attributes.getNamedItem("strength")) {
                                var i = r.attributes.getNamedItem("strength").nodeValue;
                                "weak" === i || ("medium" === i ? e.push(50) : "strong" === i ? e.push(100) : "x-strong" === i && e.push(250))
                            } else
                                r.attributes.getNamedItem("time") && e.push(JSON.parse(r.attributes.getNamedItem("time").value));
                            break;
                        case "audio":
                            r.attributes.getNamedItem("src") && e.push(r.attributes.getNamedItem("src").value);
                            break;
                        case "say-as":
                        case "prosody":
                        case "emphasis":
                        case "w":
                        case "phoneme":
                        case "voice":
                            this.processNodes(r.childNodes, e);
                            break;
                        default:
                            e.push(r.textContent)
                        }
                    }
                }
                ,
                t
            }();
            t.BrowserSpeechSynthesizer = c;
            var u = function() {
                function t(t, e, n, r, i) {
                    void 0 === n && (n = null),
                    void 0 === r && (r = null),
                    void 0 === i && (i = null),
                    this._onSpeakQueued = null,
                    this._onSpeakingStarted = null,
                    this._onSpeakingFinished = null,
                    this._speakChunks = [],
                    this._lang = null,
                    this._onSpeakQueued = n,
                    this._onSpeakingStarted = r,
                    this._onSpeakingFinished = i,
                    this._speakChunks = t,
                    this._lang = e
                }
                return t.prototype.abandon = function() {
                    this._speakChunks = []
                }
                ,
                t.prototype.completed = function() {
                    this._speakChunks = []
                }
                ,
                Object.defineProperty(t.prototype, "onSpeakQueued", {
                    get: function() {
                        return this._onSpeakQueued
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "onSpeakingStarted", {
                    get: function() {
                        return this._onSpeakingStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "onSpeakingFinished", {
                    get: function() {
                        return this._onSpeakingFinished
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "speakChunks", {
                    get: function() {
                        return this._speakChunks
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "lang", {
                    get: function() {
                        return this._lang
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            }()
        }(e.Speech || (e.Speech = {}))
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        !function(t) {
            t[t.Auto = 0] = "Auto",
            t[t.Stretch = 1] = "Stretch",
            t[t.Small = 2] = "Small",
            t[t.Medium = 3] = "Medium",
            t[t.Large = 4] = "Large"
        }(e.Size || (e.Size = {}));
        !function(t) {
            t[t.Small = 0] = "Small",
            t[t.Default = 1] = "Default",
            t[t.Medium = 2] = "Medium",
            t[t.Large = 3] = "Large",
            t[t.ExtraLarge = 4] = "ExtraLarge"
        }(e.TextSize || (e.TextSize = {}));
        !function(t) {
            t[t.None = 0] = "None",
            t[t.Small = 1] = "Small",
            t[t.Default = 2] = "Default",
            t[t.Medium = 3] = "Medium",
            t[t.Large = 4] = "Large",
            t[t.ExtraLarge = 5] = "ExtraLarge",
            t[t.Padding = 6] = "Padding"
        }(e.Spacing || (e.Spacing = {}));
        !function(t) {
            t[t.Lighter = 0] = "Lighter",
            t[t.Default = 1] = "Default",
            t[t.Bolder = 2] = "Bolder"
        }(e.TextWeight || (e.TextWeight = {}));
        !function(t) {
            t[t.Default = 0] = "Default",
            t[t.Dark = 1] = "Dark",
            t[t.Light = 2] = "Light",
            t[t.Accent = 3] = "Accent",
            t[t.Good = 4] = "Good",
            t[t.Warning = 5] = "Warning",
            t[t.Attention = 6] = "Attention"
        }(e.TextColor || (e.TextColor = {}));
        !function(t) {
            t[t.Left = 0] = "Left",
            t[t.Center = 1] = "Center",
            t[t.Right = 2] = "Right"
        }(e.HorizontalAlignment || (e.HorizontalAlignment = {}));
        !function(t) {
            t[t.Top = 0] = "Top",
            t[t.Center = 1] = "Center",
            t[t.Bottom = 2] = "Bottom"
        }(e.VerticalAlignment || (e.VerticalAlignment = {}));
        !function(t) {
            t[t.Left = 0] = "Left",
            t[t.Center = 1] = "Center",
            t[t.Right = 2] = "Right",
            t[t.Stretch = 3] = "Stretch"
        }(e.ActionAlignment || (e.ActionAlignment = {}));
        !function(t) {
            t[t.Default = 0] = "Default",
            t[t.Person = 1] = "Person"
        }(e.ImageStyle || (e.ImageStyle = {}));
        !function(t) {
            t[t.Inline = 0] = "Inline",
            t[t.Popup = 1] = "Popup"
        }(e.ShowCardActionMode || (e.ShowCardActionMode = {}));
        !function(t) {
            t[t.Horizontal = 0] = "Horizontal",
            t[t.Vertical = 1] = "Vertical"
        }(e.Orientation || (e.Orientation = {}));
        !function(t) {
            t[t.Stretch = 0] = "Stretch",
            t[t.RepeatHorizontally = 1] = "RepeatHorizontally",
            t[t.RepeatVertically = 2] = "RepeatVertically",
            t[t.Repeat = 3] = "Repeat"
        }(e.BackgroundImageMode || (e.BackgroundImageMode = {}));
        !function(t) {
            t.Default = "default",
            t.Emphasis = "emphasis"
        }(e.ContainerStyle || (e.ContainerStyle = {}));
        !function(t) {
            t[t.Hint = 0] = "Hint",
            t[t.ActionTypeNotAllowed = 1] = "ActionTypeNotAllowed",
            t[t.CollectionCantBeEmpty = 2] = "CollectionCantBeEmpty",
            t[t.Deprecated = 3] = "Deprecated",
            t[t.ElementTypeNotAllowed = 4] = "ElementTypeNotAllowed",
            t[t.InteractivityNotAllowed = 5] = "InteractivityNotAllowed",
            t[t.InvalidPropertyValue = 6] = "InvalidPropertyValue",
            t[t.MissingCardType = 7] = "MissingCardType",
            t[t.PropertyCantBeNull = 8] = "PropertyCantBeNull",
            t[t.TooManyActions = 9] = "TooManyActions",
            t[t.UnknownActionType = 10] = "UnknownActionType",
            t[t.UnknownElementType = 11] = "UnknownElementType",
            t[t.UnsupportedCardVersion = 12] = "UnsupportedCardVersion"
        }(e.ValidationError || (e.ValidationError = {}));
        !function(t) {
            t[t.FullyInContainer = 0] = "FullyInContainer",
            t[t.Overflowing = 1] = "Overflowing",
            t[t.FullyOutOfContainer = 2] = "FullyOutOfContainer"
        }(e.ContainerFitStatus || (e.ContainerFitStatus = {}))
    }
    , function(t, e, n) {
        "use strict";
        var r = this;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, o = n(10), s = n(41), a = n(52), c = n(29), u = n(38), l = n(178);
        !function(t) {
            t[t.STOPPED = 0] = "STOPPED",
            t[t.STARTING = 1] = "STARTING",
            t[t.STARTED = 2] = "STARTED",
            t[t.STOPPING = 3] = "STOPPING"
        }(i = e.ListeningState || (e.ListeningState = {})),
        e.sendMessage = function(t, e, n) {
            return {
                type: "Send_Message",
                activity: {
                    type: "message",
                    text: t,
                    from: e,
                    locale: n,
                    textFormat: "plain",
                    timestamp: (new Date).toISOString()
                }
            }
        }
        ,
        e.sendFiles = function(t, e, n) {
            return {
                type: "Send_Message",
                activity: {
                    type: "message",
                    attachments: p(t),
                    from: e,
                    locale: n
                }
            }
        }
        ;
        var p = function(t) {
            for (var e = [], n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e.push({
                    contentType: i.type,
                    contentUrl: window.URL.createObjectURL(i),
                    name: i.name
                })
            }
            return e
        };
        e.shell = function(t, e) {
            switch (void 0 === t && (t = {
                input: "",
                sendTyping: !1,
                listeningState: i.STOPPED,
                lastInputViaSpeech: !1
            }),
            e.type) {
            case "Update_Input":
                return o.__assign({}, t, {
                    input: e.input,
                    lastInputViaSpeech: "speech" === e.source
                });
            case "Listening_Start":
                return o.__assign({}, t, {
                    listeningState: i.STARTED
                });
            case "Listening_Stop":
                return o.__assign({}, t, {
                    listeningState: i.STOPPED
                });
            case "Listening_Starting":
                return o.__assign({}, t, {
                    listeningState: i.STARTING
                });
            case "Listening_Stopping":
                return o.__assign({}, t, {
                    listeningState: i.STOPPING
                });
            case "Send_Message":
                return o.__assign({}, t, {
                    input: ""
                });
            case "Set_Send_Typing":
                return o.__assign({}, t, {
                    sendTyping: e.sendTyping
                });
            case "Card_Action_Clicked":
                return o.__assign({}, t, {
                    lastInputViaSpeech: !1
                });
            default:
                return t
            }
        }
        ,
        e.format = function(t, e) {
            switch (void 0 === t && (t = {
                chatTitle: !0,
                locale: "en-us",
                showUploadButton: !0,
                strings: l.defaultStrings,
                carouselMargin: void 0
            }),
            e.type) {
            case "Set_Chat_Title":
                return o.__assign({}, t, {
                    chatTitle: void 0 === e.chatTitle || e.chatTitle
                });
            case "Set_Locale":
                return o.__assign({}, t, {
                    locale: e.locale,
                    strings: l.strings(e.locale)
                });
            case "Set_Measurements":
                return o.__assign({}, t, {
                    carouselMargin: e.carouselMargin
                });
            case "Toggle_Upload_Button":
                return o.__assign({}, t, {
                    showUploadButton: e.showUploadButton
                });
            default:
                return t
            }
        }
        ,
        e.size = function(t, e) {
            switch (void 0 === t && (t = {
                width: void 0,
                height: void 0
            }),
            e.type) {
            case "Set_Size":
                return o.__assign({}, t, {
                    width: e.width,
                    height: e.height
                });
            default:
                return t
            }
        }
        ,
        e.connection = function(t, e) {
            switch (void 0 === t && (t = {
                connectionStatus: a.ConnectionStatus.Uninitialized,
                botConnection: void 0,
                selectedActivity: void 0,
                user: void 0,
                bot: void 0
            }),
            e.type) {
            case "Start_Connection":
                return o.__assign({}, t, {
                    botConnection: e.botConnection,
                    user: e.user,
                    bot: e.bot,
                    selectedActivity: e.selectedActivity
                });
            case "Connection_Change":
                return o.__assign({}, t, {
                    connectionStatus: e.connectionStatus
                });
            default:
                return t
            }
        }
        ;
        var h = function(t, e, n) {
            return t.slice(0, e).concat([n], t.slice(e + 1))
        };
        e.history = function(t, e) {
            switch (void 0 === t && (t = {
                activities: [],
                clientActivityBase: Date.now().toString() + Math.random().toString().substr(1) + ".",
                clientActivityCounter: 0,
                selectedActivity: null
            }),
            c.log("history action", e),
            e.type) {
            case "Receive_Sent_Message":
                if (!e.activity.channelData || !e.activity.channelData.clientActivityId)
                    return t;
                var n = t.activities.findIndex(function(t) {
                    return t.channelData && t.channelData.clientActivityId === e.activity.channelData.clientActivityId
                });
                if (-1 !== n) {
                    var r = t.activities[n];
                    return o.__assign({}, t, {
                        activities: h(t.activities, n, r),
                        selectedActivity: t.selectedActivity === r ? e.activity : t.selectedActivity
                    })
                }
            case "Receive_Message":
                return t.activities.find(function(t) {
                    return t.id === e.activity.id
                }) ? t : o.__assign({}, t, {
                    activities: t.activities.filter(function(t) {
                        return "typing" !== t.type
                    }).concat([e.activity], t.activities.filter(function(t) {
                        return t.from.id !== e.activity.from.id && "typing" === t.type
                    }))
                });
            case "Send_Message":
                return o.__assign({}, t, {
                    activities: t.activities.filter(function(t) {
                        return "typing" !== t.type
                    }).concat([o.__assign({}, e.activity, {
                        timestamp: (new Date).toISOString(),
                        channelData: {
                            clientActivityId: t.clientActivityBase + t.clientActivityCounter
                        }
                    })], t.activities.filter(function(t) {
                        return "typing" === t.type
                    })),
                    clientActivityCounter: t.clientActivityCounter + 1
                });
            case "Send_Message_Retry":
                var i = t.activities.find(function(t) {
                    return t.channelData && t.channelData.clientActivityId === e.clientActivityId
                })
                  , s = void 0 === i.id ? i : o.__assign({}, i, {
                    id: void 0
                });
                return o.__assign({}, t, {
                    activities: t.activities.filter(function(t) {
                        return "typing" !== t.type && t !== i
                    }).concat([s], t.activities.filter(function(t) {
                        return "typing" === t.type
                    })),
                    selectedActivity: t.selectedActivity === i ? s : t.selectedActivity
                });
            case "Send_Message_Succeed":
            case "Send_Message_Fail":
                var a = t.activities.findIndex(function(t) {
                    return t.channelData && t.channelData.clientActivityId === e.clientActivityId
                });
                if (-1 === a)
                    return t;
                var u = t.activities[a];
                if (u.id && "retry" !== u.id)
                    return t;
                var l = o.__assign({}, u, {
                    id: "Send_Message_Succeed" === e.type ? e.id : null
                });
                return o.__assign({}, t, {
                    activities: h(t.activities, a, l),
                    clientActivityCounter: t.clientActivityCounter + 1,
                    selectedActivity: t.selectedActivity === u ? l : t.selectedActivity
                });
            case "Show_Typing":
                return o.__assign({}, t, {
                    activities: t.activities.filter(function(t) {
                        return "typing" !== t.type
                    }).concat(t.activities.filter(function(t) {
                        return t.from.id !== e.activity.from.id && "typing" === t.type
                    }), [e.activity])
                });
            case "Clear_Typing":
                return o.__assign({}, t, {
                    activities: t.activities.filter(function(t) {
                        return t.id !== e.id
                    }),
                    selectedActivity: t.selectedActivity && t.selectedActivity.id === e.id ? null : t.selectedActivity
                });
            case "Select_Activity":
                return e.selectedActivity === t.selectedActivity ? t : o.__assign({}, t, {
                    selectedActivity: e.selectedActivity
                });
            case "Take_SuggestedAction":
                var p = t.activities.findIndex(function(t) {
                    return t === e.message
                })
                  , d = t.activities[p]
                  , f = o.__assign({}, d, {
                    suggestedActions: void 0
                });
                return o.__assign({}, t, {
                    activities: h(t.activities, p, f),
                    selectedActivity: t.selectedActivity === d ? f : t.selectedActivity
                });
            default:
                return t
            }
        }
        ,
        e.adaptiveCards = function(t, e) {
            switch (void 0 === t && (t = {
                hostConfig: null
            }),
            e.type) {
            case "Set_AdaptiveCardsHostConfig":
                return o.__assign({}, t, {
                    hostConfig: e.payload && (e.payload instanceof s.HostConfig ? e.payload : new s.HostConfig(e.payload))
                });
            default:
                return t
            }
        }
        ;
        var d = {
            type: null
        }
          , f = function(t, e) {
            var n = t.speak;
            if ((!n && null == t.textFormat || "plain" === t.textFormat) && (n = t.text),
            !n && t.channelData && t.channelData.speechOutput && t.channelData.speechOutput.speakText && (n = t.channelData.speechOutput.speakText),
            !n && t.attachments && t.attachments.length > 0)
                for (var r = 0; r < t.attachments.length; r++) {
                    var i = t;
                    if (i.attachments[r].content && i.attachments[r].content.speak) {
                        n = i.attachments[r].content.speak;
                        break
                    }
                }
            return {
                type: "Speak_SSML",
                ssml: n,
                locale: t.locale || e,
                autoListenAfterSpeak: "expectingInput" === t.inputHint || t.channelData && "WaitingForAnswerToQuestion" === t.channelData.botState
            }
        }
          , m = n(77)
          , g = n(0);
        n(142),
        n(143),
        n(144),
        n(145),
        n(146),
        n(371),
        n(147),
        n(375),
        n(376),
        n(362),
        n(140),
        n(141);
        var y = function(t, e) {
            return t.ofType("Send_Message").map(function(t) {
                var n = e.getState();
                return {
                    type: "Send_Message_Try",
                    clientActivityId: n.history.clientActivityBase + (n.history.clientActivityCounter - 1)
                }
            })
        }
          , v = function(t, e) {
            return t.ofType("Send_Message_Try").flatMap(function(t) {
                var n = e.getState()
                  , r = t.clientActivityId
                  , i = n.history.activities.find(function(t) {
                    return t.channelData && t.channelData.clientActivityId === r
                });
                if (!i)
                    return c.log("trySendMessage: activity not found"),
                    g.Observable.empty();
                if (1 === n.history.clientActivityCounter) {
                    var o = {
                        type: "ClientCapabilities",
                        requiresBotState: !0,
                        supportsTts: !0,
                        supportsListening: !0
                    };
                    i.entities = null == i.entities ? [o] : i.entities.concat([o])
                }
                return n.connection.botConnection.postActivity(i).map(function(t) {
                    return {
                        type: "Send_Message_Succeed",
                        clientActivityId: r,
                        id: t
                    }
                }).catch(function(t) {
                    return g.Observable.of({
                        type: "Send_Message_Fail",
                        clientActivityId: r
                    })
                })
            })
        }
          , b = g.Observable.bindCallback(u.Speech.SpeechSynthesizer.speak)
          , _ = function(t, e) {
            return t.ofType("Speak_SSML").filter(function(t) {
                return t.ssml
            }).mergeMap(function(t) {
                var e = null
                  , n = function() {
                    return d
                };
                return t.autoListenAfterSpeak && (e = function() {
                    return u.Speech.SpeechRecognizer.warmup()
                }
                ,
                n = function() {
                    return {
                        type: "Listening_Starting"
                    }
                }
                ),
                b(t.ssml, t.locale, e).map(n).catch(function(t) {
                    return g.Observable.of(d)
                })
            }).merge(t.ofType("Speak_SSML").map(function(t) {
                return {
                    type: "Listening_Stopping"
                }
            }))
        }
          , C = function(t, e) {
            return t.ofType("Receive_Message").filter(function(t) {
                return t.activity && e.getState().shell.lastInputViaSpeech
            }).map(function(t) {
                return f(t.activity, e.getState().format.locale)
            })
        }
          , w = function(t) {
            return t.ofType("Update_Input", "Listening_Starting", "Send_Message", "Card_Action_Clicked", "Stop_Speaking").do(u.Speech.SpeechSynthesizer.stopSpeaking).map(function(t) {
                return d
            })
        }
          , S = function(t, e) {
            return t.ofType("Listening_Stopping", "Card_Action_Clicked").do(function() {
                return o.__awaiter(r, void 0, void 0, function() {
                    return o.__generator(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, u.Speech.SpeechRecognizer.stopRecognizing()];
                        case 1:
                            return t.sent(),
                            e.dispatch({
                                type: "Listening_Stop"
                            }),
                            [2]
                        }
                    })
                })
            }).map(function(t) {
                return d
            })
        }
          , x = function(t, n) {
            return t.ofType("Listening_Starting").do(function(t) {
                return o.__awaiter(r, void 0, void 0, function() {
                    var t, r, i, s, a, c, l, p, h;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return t = n.getState(),
                            r = t.history.activities,
                            i = t.format.locale,
                            s = r.slice().reverse().find(function(t) {
                                return "message" === t.type
                            }),
                            a = s && s.listenFor,
                            c = function(t) {
                                n.dispatch({
                                    type: "Update_Input",
                                    input: t,
                                    source: "speech"
                                })
                            }
                            ,
                            l = function(t) {
                                t = t.replace(/^[.\s]+|[.\s]+$/g, ""),
                                c(t),
                                n.dispatch({
                                    type: "Listening_Stopping"
                                }),
                                n.dispatch(e.sendMessage(t, n.getState().connection.user, i))
                            }
                            ,
                            p = function() {
                                n.dispatch({
                                    type: "Listening_Start"
                                })
                            }
                            ,
                            h = function() {
                                n.dispatch({
                                    type: "Listening_Stopping"
                                })
                            }
                            ,
                            [4, u.Speech.SpeechRecognizer.startRecognizing(i, a, c, l, p, h)];
                        case 1:
                            return o.sent(),
                            [2]
                        }
                    })
                })
            }).map(function(t) {
                return d
            })
        }
          , k = function(t, e) {
            var n = t.ofType("Update_Input", "Listening_Stopping");
            return t.ofType("Listening_Start").mergeMap(function(t) {
                return g.Observable.of({
                    type: "Listening_Stopping"
                }).delay(5e3).takeUntil(n)
            })
        }
          , E = function(t) {
            return t.ofType("Send_Message_Retry").map(function(t) {
                return {
                    type: "Send_Message_Try",
                    clientActivityId: t.clientActivityId
                }
            })
        }
          , A = function(t, e) {
            return t.ofType("Send_Message_Succeed", "Send_Message_Fail", "Show_Typing", "Clear_Typing").map(function(t) {
                var n = e.getState();
                return n.connection.selectedActivity && n.connection.selectedActivity.next({
                    activity: n.history.selectedActivity
                }),
                d
            })
        }
          , T = function(t) {
            return t.ofType("Show_Typing").delay(3e3).map(function(t) {
                return {
                    type: "Clear_Typing",
                    id: t.activity.id
                }
            })
        }
          , O = function(t, e) {
            return t.ofType("Update_Input").map(function(t) {
                return e.getState()
            }).filter(function(t) {
                return t.shell.sendTyping
            }).throttleTime(3e3).do(function(t) {
                return c.log("sending typing")
            }).flatMap(function(t) {
                return t.connection.botConnection.postActivity({
                    type: "typing",
                    from: t.connection.user
                }).map(function(t) {
                    return d
                }).catch(function(t) {
                    return g.Observable.of(d)
                })
            })
        }
          , I = n(77)
          , P = n(353);
        e.createStore = function() {
            return I.createStore(I.combineReducers({
                adaptiveCards: e.adaptiveCards,
                connection: e.connection,
                format: e.format,
                history: e.history,
                shell: e.shell,
                size: e.size
            }), m.applyMiddleware(P.createEpicMiddleware(P.combineEpics(A, y, v, E, T, O, _, C, x, S, w, k))))
        }
    }
    , function(t, e, n) {
        (function(e) {
            t.exports = e.AdaptiveCards = n(166)
        }
        ).call(e, n(37))
    }
    , function(t, e, n) {
        "use strict";
        var r = {};
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return Object.prototype.hasOwnProperty.call(t, m) || (t[m] = d++,
            p[t[m]] = {}),
            p[t[m]]
        }
        var i, o = n(5), s = n(62), a = n(295), c = n(114), u = n(327), l = n(73), p = {}, h = !1, d = 0, f = {
            topAbort: "abort",
            topAnimationEnd: u("animationend") || "animationend",
            topAnimationIteration: u("animationiteration") || "animationiteration",
            topAnimationStart: u("animationstart") || "animationstart",
            topBlur: "blur",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topChange: "change",
            topClick: "click",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topScroll: "scroll",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topSelectionChange: "selectionchange",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTextInput: "textInput",
            topTimeUpdate: "timeupdate",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topTransitionEnd: u("transitionend") || "transitionend",
            topVolumeChange: "volumechange",
            topWaiting: "waiting",
            topWheel: "wheel"
        }, m = "_reactListenersID" + String(Math.random()).slice(2), g = o({}, a, {
            ReactEventListener: null,
            injection: {
                injectReactEventListener: function(t) {
                    t.setHandleTopLevel(g.handleTopLevel),
                    g.ReactEventListener = t
                }
            },
            setEnabled: function(t) {
                g.ReactEventListener && g.ReactEventListener.setEnabled(t)
            },
            isEnabled: function() {
                return !(!g.ReactEventListener || !g.ReactEventListener.isEnabled())
            },
            listenTo: function(t, e) {
                for (var n = e, i = r(n), o = s.registrationNameDependencies[t], a = 0; a < o.length; a++) {
                    var c = o[a];
                    i.hasOwnProperty(c) && i[c] || ("topWheel" === c ? l("wheel") ? g.ReactEventListener.trapBubbledEvent("topWheel", "wheel", n) : l("mousewheel") ? g.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", n) : g.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", n) : "topScroll" === c ? l("scroll", !0) ? g.ReactEventListener.trapCapturedEvent("topScroll", "scroll", n) : g.ReactEventListener.trapBubbledEvent("topScroll", "scroll", g.ReactEventListener.WINDOW_HANDLE) : "topFocus" === c || "topBlur" === c ? (l("focus", !0) ? (g.ReactEventListener.trapCapturedEvent("topFocus", "focus", n),
                    g.ReactEventListener.trapCapturedEvent("topBlur", "blur", n)) : l("focusin") && (g.ReactEventListener.trapBubbledEvent("topFocus", "focusin", n),
                    g.ReactEventListener.trapBubbledEvent("topBlur", "focusout", n)),
                    i.topBlur = !0,
                    i.topFocus = !0) : f.hasOwnProperty(c) && g.ReactEventListener.trapBubbledEvent(c, f[c], n),
                    i[c] = !0)
                }
            },
            trapBubbledEvent: function(t, e, n) {
                return g.ReactEventListener.trapBubbledEvent(t, e, n)
            },
            trapCapturedEvent: function(t, e, n) {
                return g.ReactEventListener.trapCapturedEvent(t, e, n)
            },
            supportsEventPageXY: function() {
                if (!document.createEvent)
                    return !1;
                var t = document.createEvent("MouseEvent");
                return null != t && "pageX"in t
            },
            ensureScrollValueMonitoring: function() {
                if (void 0 === i && (i = g.supportsEventPageXY()),
                !i && !h) {
                    var t = c.refreshScrollValues;
                    g.ReactEventListener.monitorScrollValue(t),
                    h = !0
                }
            }
        });
        t.exports = g
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(33)
          , o = n(114)
          , s = n(71)
          , a = {
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: s,
            button: function(t) {
                var e = t.button;
                return "which"in t ? e : 2 === e ? 2 : 4 === e ? 1 : 0
            },
            buttons: null,
            relatedTarget: function(t) {
                return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
            },
            pageX: function(t) {
                return "pageX"in t ? t.pageX : t.clientX + o.currentScrollLeft
            },
            pageY: function(t) {
                return "pageY"in t ? t.pageY : t.clientY + o.currentScrollTop
            }
        };
        i.augmentClass(r, a),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(4)
          , i = (n(1),
        {})
          , o = {
            reinitializeTransaction: function() {
                this.transactionWrappers = this.getTransactionWrappers(),
                this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [],
                this._isInTransaction = !1
            },
            _isInTransaction: !1,
            getTransactionWrappers: null,
            isInTransaction: function() {
                return !!this._isInTransaction
            },
            perform: function(t, e, n, i, o, s, a, c) {
                this.isInTransaction() && r("27");
                var u, l;
                try {
                    this._isInTransaction = !0,
                    u = !0,
                    this.initializeAll(0),
                    l = t.call(e, n, i, o, s, a, c),
                    u = !1
                } finally {
                    try {
                        if (u)
                            try {
                                this.closeAll(0)
                            } catch (t) {}
                        else
                            this.closeAll(0)
                    } finally {
                        this._isInTransaction = !1
                    }
                }
                return l
            },
            initializeAll: function(t) {
                for (var e = this.transactionWrappers, n = t; n < e.length; n++) {
                    var r = e[n];
                    try {
                        this.wrapperInitData[n] = i,
                        this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null
                    } finally {
                        if (this.wrapperInitData[n] === i)
                            try {
                                this.initializeAll(n + 1)
                            } catch (t) {}
                    }
                }
            },
            closeAll: function(t) {
                this.isInTransaction() || r("28");
                for (var e = this.transactionWrappers, n = t; n < e.length; n++) {
                    var o, s = e[n], a = this.wrapperInitData[n];
                    try {
                        o = !0,
                        a !== i && s.close && s.close.call(this, a),
                        o = !1
                    } finally {
                        if (o)
                            try {
                                this.closeAll(n + 1)
                            } catch (t) {}
                    }
                }
                this.wrapperInitData.length = 0
            }
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = "" + t
              , n = o.exec(e);
            if (!n)
                return e;
            var r, i = "", s = 0, a = 0;
            for (s = n.index; s < e.length; s++) {
                switch (e.charCodeAt(s)) {
                case 34:
                    r = "&quot;";
                    break;
                case 38:
                    r = "&amp;";
                    break;
                case 39:
                    r = "&#x27;";
                    break;
                case 60:
                    r = "&lt;";
                    break;
                case 62:
                    r = "&gt;";
                    break;
                default:
                    continue
                }
                a !== s && (i += e.substring(a, s)),
                a = s + 1,
                i += r
            }
            return a !== s ? i + e.substring(a, s) : i
        }
        function i(t) {
            return "boolean" == typeof t || "number" == typeof t ? "" + t : r(t)
        }
        var o = /["'&<>]/;
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        var r, i = n(7), o = n(61), s = /^[ \r\n\t\f]/, a = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/, c = n(69), u = c(function(t, e) {
            if (t.namespaceURI !== o.svg || "innerHTML"in t)
                t.innerHTML = e;
            else {
                r = r || document.createElement("div"),
                r.innerHTML = "<svg>" + e + "</svg>";
                for (var n = r.firstChild; n.firstChild; )
                    t.appendChild(n.firstChild)
            }
        });
        if (i.canUseDOM) {
            var l = document.createElement("div");
            l.innerHTML = " ",
            "" === l.innerHTML && (u = function(t, e) {
                if (t.parentNode && t.parentNode.replaceChild(t, t),
                s.test(e) || "<" === e[0] && a.test(e)) {
                    t.innerHTML = String.fromCharCode(65279) + e;
                    var n = t.firstChild;
                    1 === n.data.length ? t.removeChild(n) : n.deleteData(0, 1)
                } else
                    t.innerHTML = e
            }
            ),
            l = null
        }
        t.exports = u
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(0)
          , o = n(148)
          , s = n(49)
          , a = n(158)
          , c = function(t) {
            function e(e, n) {
                t.call(this),
                this.array = e,
                this.scheduler = n,
                n || 1 !== e.length || (this._isScalar = !0,
                this.value = e[0])
            }
            return r(e, t),
            e.create = function(t, n) {
                return new e(t,n)
            }
            ,
            e.of = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n - 0] = arguments[n];
                var r = t[t.length - 1];
                a.isScheduler(r) ? t.pop() : r = null;
                var i = t.length;
                return i > 1 ? new e(t,r) : 1 === i ? new o.ScalarObservable(t[0],r) : new s.EmptyObservable(r)
            }
            ,
            e.dispatch = function(t) {
                var e = t.array
                  , n = t.index
                  , r = t.count
                  , i = t.subscriber;
                if (n >= r)
                    return void i.complete();
                i.next(e[n]),
                i.closed || (t.index = n + 1,
                this.schedule(t))
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this.array
                  , r = n.length
                  , i = this.scheduler;
                if (i)
                    return i.schedule(e.dispatch, 0, {
                        array: n,
                        index: 0,
                        count: r,
                        subscriber: t
                    });
                for (var o = 0; o < r && !t.closed; o++)
                    t.next(n[o]);
                t.complete()
            }
            ,
            e
        }(i.Observable);
        e.ArrayObservable = c
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(0)
          , o = function(t) {
            function e(e) {
                t.call(this),
                this.scheduler = e
            }
            return r(e, t),
            e.create = function(t) {
                return new e(t)
            }
            ,
            e.dispatch = function(t) {
                t.subscriber.complete()
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this.scheduler;
                if (n)
                    return n.schedule(e.dispatch, 0, {
                        subscriber: t
                    });
                t.complete()
            }
            ,
            e
        }(i.Observable);
        e.EmptyObservable = o
    }
    , function(t, e, n) {
        "use strict";
        e.isArray = Array.isArray || function(t) {
            return t && "number" == typeof t.length
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(41)
          , o = n(9)
          , s = n(170)
          , a = n(172)
          , c = /\^application\/vnd\.microsoft\.card\./i;
        e.queryParams = function(t) {
            return t.substr(1).split("&").reduce(function(t, e) {
                var n = e.split("=");
                return t[decodeURIComponent(n[0])] = decodeURIComponent(n[1]),
                t
            }, {})
        }
        ;
        var u = function(t) {
            return Object.keys(t).map(function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e].toString())
            }).join("&")
        }
          , l = function(t) {
            return null != t && void 0 !== t
        }
          , p = function(t) {
            return o.createElement("iframe", {
                src: "https://youtube.com/embed/" + t.embedId + "?" + u({
                    modestbranding: "1",
                    loop: t.loop ? "1" : "0",
                    autoplay: t.autoPlay ? "1" : "0"
                })
            })
        }
          , h = function(t) {
            return o.createElement("iframe", {
                src: "https://player.vimeo.com/video/" + t.embedId + "?" + u({
                    title: "0",
                    byline: "0",
                    portrait: "0",
                    badge: "0",
                    autoplay: t.autoPlay ? "1" : "0",
                    loop: t.loop ? "1" : "0"
                })
            })
        }
          , d = function(t) {
            var n = document.createElement("a");
            n.href = t.src;
            var i = e.queryParams(n.search)
              , s = n.pathname.substr(1).split("/");
            switch (n.hostname) {
            case "youtube.com":
            case "youtu.be":
            case "www.youtube.com":
            case "www.youtu.be":
                return o.createElement(p, {
                    embedId: "youtube.com" === n.hostname || "www.youtube.com" === n.hostname ? i.v : s[s.length - 1],
                    autoPlay: t.autoPlay,
                    loop: t.loop
                });
            case "www.vimeo.com":
            case "vimeo.com":
                return o.createElement(h, {
                    embedId: s[s.length - 1],
                    autoPlay: t.autoPlay,
                    loop: t.loop
                });
            default:
                return o.createElement("video", r.__assign({
                    controls: !0
                }, t))
            }
        }
          , f = function(t) {
            switch (t.type) {
            case "video":
                return o.createElement(d, r.__assign({}, t));
            case "audio":
                return o.createElement("audio", r.__assign({
                    controls: !0
                }, t));
            default:
                return o.createElement("img", r.__assign({}, t))
            }
        }
          , m = function(t) {
            return c.test(t.contentType) ? o.createElement("span", null, t.format.strings.unknownCard.replace("%1", t.contentType)) : t.contentUrl ? o.createElement("div", null, o.createElement("a", {
                className: "wc-link-download",
                href: t.contentUrl,
                target: "_blank",
                title: t.contentUrl
            }, o.createElement("div", {
                className: "wc-text-download"
            }, t.name || t.format.strings.unknownFile.replace("%1", t.contentType)), o.createElement("div", {
                className: "wc-icon-download"
            }))) : o.createElement("span", null, t.format.strings.unknownFile.replace("%1", t.contentType))
        }
          , g = function(t) {
            return "gif" === t.slice(2 + (t.lastIndexOf(".") - 1 >>> 0)).toLowerCase() ? "image" : "video"
        };
        e.AttachmentView = function(t) {
            if (t.attachment) {
                var e = t.attachment
                  , n = function(e) {
                    return e && function(n) {
                        t.onCardAction(e.type, e.value),
                        n.stopPropagation()
                    }
                }
                  , r = function(e, n) {
                    return n.media && 0 !== n.media.length ? n.media.map(function(r, i) {
                        var s = "string" == typeof e ? e : e(r.url);
                        return o.createElement(f, {
                            type: s,
                            src: r.url,
                            onLoad: t.onImageLoad,
                            poster: n.image && n.image.url,
                            autoPlay: n.autostart,
                            loop: n.autoloop,
                            key: i
                        })
                    }) : null
                };
                switch (e.contentType) {
                case "application/vnd.microsoft.card.hero":
                    if (!e.content)
                        return null;
                    var c = new a.AdaptiveCardBuilder;
                    return e.content.images && e.content.images.forEach(function(t) {
                        return c.addImage(t.url, null, t.tap)
                    }),
                    c.addCommon(e.content),
                    o.createElement(s.default, {
                        className: "hero",
                        nativeCard: c.card,
                        onImageLoad: t.onImageLoad,
                        onCardAction: t.onCardAction,
                        onClick: n(e.content.tap)
                    });
                case "application/vnd.microsoft.card.thumbnail":
                    if (!e.content)
                        return null;
                    var u = new a.AdaptiveCardBuilder;
                    if (e.content.images && e.content.images.length > 0) {
                        var p = u.addColumnSet([75, 25]);
                        u.addTextBlock(e.content.title, {
                            size: i.TextSize.Medium,
                            weight: i.TextWeight.Bolder
                        }, p[0]),
                        u.addTextBlock(e.content.subtitle, {
                            isSubtle: !0,
                            wrap: !0
                        }, p[0]),
                        u.addImage(e.content.images[0].url, p[1], e.content.images[0].tap),
                        u.addTextBlock(e.content.text, {
                            wrap: !0
                        }),
                        u.addButtons(e.content.buttons)
                    } else
                        u.addCommon(e.content);
                    return o.createElement(s.default, {
                        className: "thumbnail",
                        nativeCard: u.card,
                        onImageLoad: t.onImageLoad,
                        onCardAction: t.onCardAction,
                        onClick: n(e.content.tap)
                    });
                case "application/vnd.microsoft.card.video":
                    return e.content && e.content.media && 0 !== e.content.media.length ? o.createElement(s.default, {
                        className: "video",
                        nativeCard: a.buildCommonCard(e.content),
                        onCardAction: t.onCardAction
                    }, r("video", e.content)) : null;
                case "application/vnd.microsoft.card.animation":
                    return e.content && e.content.media && 0 !== e.content.media.length ? o.createElement(s.default, {
                        className: "animation",
                        nativeCard: a.buildCommonCard(e.content),
                        onCardAction: t.onCardAction
                    }, r(g, e.content)) : null;
                case "application/vnd.microsoft.card.audio":
                    return e.content && e.content.media && 0 !== e.content.media.length ? o.createElement(s.default, {
                        className: "audio",
                        nativeCard: a.buildCommonCard(e.content),
                        onCardAction: t.onCardAction
                    }, r("audio", e.content)) : null;
                case "application/vnd.microsoft.card.signin":
                    return e.content ? o.createElement(s.default, {
                        className: "signin",
                        nativeCard: a.buildCommonCard(e.content),
                        onCardAction: t.onCardAction
                    }) : null;
                case "application/vnd.microsoft.card.oauth":
                    return e.content ? o.createElement(s.default, {
                        className: "signin",
                        nativeCard: a.buildOAuthCard(e.content),
                        onCardAction: t.onCardAction
                    }) : null;
                case "application/vnd.microsoft.card.receipt":
                    if (!e.content)
                        return null;
                    var h = new a.AdaptiveCardBuilder;
                    h.addTextBlock(e.content.title, {
                        size: i.TextSize.Medium,
                        weight: i.TextWeight.Bolder
                    });
                    var d = h.addColumnSet([75, 25]);
                    if (e.content.facts && e.content.facts.map(function(t, e) {
                        h.addTextBlock(t.key, {
                            size: i.TextSize.Medium
                        }, d[0]),
                        h.addTextBlock(t.value, {
                            size: i.TextSize.Medium,
                            horizontalAlignment: i.HorizontalAlignment.Right
                        }, d[1])
                    }),
                    e.content.items && e.content.items.map(function(t, e) {
                        if (t.image) {
                            var n = h.addColumnSet([15, 75, 10]);
                            h.addImage(t.image.url, n[0], t.image.tap),
                            h.addTextBlock(t.title, {
                                size: i.TextSize.Medium,
                                weight: i.TextWeight.Bolder,
                                wrap: !0
                            }, n[1]),
                            h.addTextBlock(t.subtitle, {
                                size: i.TextSize.Medium,
                                wrap: !0
                            }, n[1]),
                            h.addTextBlock(t.price, {
                                horizontalAlignment: i.HorizontalAlignment.Right
                            }, n[2])
                        } else {
                            var r = h.addColumnSet([75, 25]);
                            h.addTextBlock(t.title, {
                                size: i.TextSize.Medium,
                                weight: i.TextWeight.Bolder,
                                wrap: !0
                            }, r[0]),
                            h.addTextBlock(t.subtitle, {
                                size: i.TextSize.Medium,
                                wrap: !0
                            }, r[0]),
                            h.addTextBlock(t.price, {
                                horizontalAlignment: i.HorizontalAlignment.Right
                            }, r[1])
                        }
                    }),
                    l(e.content.vat)) {
                        var y = h.addColumnSet([75, 25]);
                        h.addTextBlock(t.format.strings.receiptVat, {
                            size: i.TextSize.Medium,
                            weight: i.TextWeight.Bolder
                        }, y[0]),
                        h.addTextBlock(e.content.vat, {
                            horizontalAlignment: i.HorizontalAlignment.Right
                        }, y[1])
                    }
                    if (l(e.content.tax)) {
                        var v = h.addColumnSet([75, 25]);
                        h.addTextBlock(t.format.strings.receiptTax, {
                            size: i.TextSize.Medium,
                            weight: i.TextWeight.Bolder
                        }, v[0]),
                        h.addTextBlock(e.content.tax, {
                            horizontalAlignment: i.HorizontalAlignment.Right
                        }, v[1])
                    }
                    if (l(e.content.total)) {
                        var b = h.addColumnSet([75, 25]);
                        h.addTextBlock(t.format.strings.receiptTotal, {
                            size: i.TextSize.Medium,
                            weight: i.TextWeight.Bolder
                        }, b[0]),
                        h.addTextBlock(e.content.total, {
                            horizontalAlignment: i.HorizontalAlignment.Right,
                            size: i.TextSize.Medium,
                            weight: i.TextWeight.Bolder
                        }, b[1])
                    }
                    return h.addButtons(e.content.buttons),
                    o.createElement(s.default, {
                        className: "receipt",
                        nativeCard: h.card,
                        onCardAction: t.onCardAction,
                        onClick: n(e.content.tap)
                    });
                case "application/vnd.microsoft.card.adaptive":
                    return e.content ? o.createElement(s.default, {
                        jsonCard: e.content,
                        onImageLoad: t.onImageLoad,
                        onCardAction: t.onCardAction
                    }) : null;
                case "application/vnd.microsoft.card.flex":
                    return e.content ? o.createElement(s.default, {
                        className: "flex",
                        nativeCard: a.buildCommonCard(e.content),
                        onCardAction: t.onCardAction
                    }, function(e) {
                        return e && e.length > 0 && o.createElement(f, {
                            src: e[0].url,
                            onLoad: t.onImageLoad,
                            onClick: n(e[0].tap),
                            alt: e[0].alt
                        })
                    }(e.content.images)) : null;
                case "image/svg+xml":
                case "image/png":
                case "image/jpg":
                case "image/jpeg":
                case "image/gif":
                    return o.createElement(f, {
                        src: e.contentUrl,
                        onLoad: t.onImageLoad
                    });
                case "audio/mpeg":
                case "audio/mp4":
                    return o.createElement(f, {
                        type: "audio",
                        src: e.contentUrl
                    });
                case "video/mp4":
                    return o.createElement(f, {
                        type: "video",
                        poster: e.thumbnailUrl,
                        src: e.contentUrl,
                        onLoad: t.onImageLoad
                    });
                default:
                    var _ = t.attachment;
                    return o.createElement(m, {
                        format: t.format,
                        contentType: _.contentType,
                        contentUrl: _.contentUrl,
                        name: _.name
                    })
                }
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__rest || function(t, e) {
            var n = {};
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                    e.indexOf(r[i]) < 0 && (n[r[i]] = t[r[i]]);
            return n
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(358)
          , o = n(0);
        n(142),
        n(369),
        n(370),
        n(143),
        n(144),
        n(145),
        n(146),
        n(147),
        n(372),
        n(373),
        n(374),
        n(363),
        n(140),
        n(364),
        n(366),
        n(141),
        n(368);
        var s;
        !function(t) {
            t[t.Uninitialized = 0] = "Uninitialized",
            t[t.Connecting = 1] = "Connecting",
            t[t.Online = 2] = "Online",
            t[t.ExpiredToken = 3] = "ExpiredToken",
            t[t.FailedToConnect = 4] = "FailedToConnect",
            t[t.Ended = 5] = "Ended"
        }(s = e.ConnectionStatus || (e.ConnectionStatus = {}));
        var a = new Error("expired token")
          , c = new Error("conversation ended")
          , u = new Error("failed to connect")
          , l = {
            log: function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                "undefined" != typeof window && window.botchatDebug && t && console.log.apply(console, [t].concat(e))
            }
        }
          , p = function() {
            function t(t) {
                this.connectionStatus$ = new i.BehaviorSubject(s.Uninitialized),
                this.domain = "https://directline.botframework.com/v3/directline",
                this.watermark = "",
                this.pollingInterval = 1e3,
                this.secret = t.secret,
                this.token = t.secret || t.token,
                this.webSocket = (void 0 === t.webSocket || t.webSocket) && "undefined" != typeof WebSocket && void 0 !== WebSocket,
                t.domain && (this.domain = t.domain),
                t.conversationId && (this.conversationId = t.conversationId),
                t.watermark && (this.webSocket ? console.warn("Watermark was ignored: it is not supported using websockets at the moment") : this.watermark = t.watermark),
                t.streamUrl && (t.token && t.conversationId ? this.streamUrl = t.streamUrl : console.warn("streamUrl was ignored: you need to provide a token and a conversationid")),
                void 0 !== t.pollingInterval && (this.pollingInterval = t.pollingInterval),
                this.activity$ = (this.webSocket ? this.webSocketActivity$() : this.pollingGetActivity$()).share()
            }
            return t.prototype.checkConnection = function(t) {
                var e = this;
                void 0 === t && (t = !1);
                var n = this.connectionStatus$.flatMap(function(t) {
                    return t === s.Uninitialized ? (e.connectionStatus$.next(s.Connecting),
                    e.token && e.streamUrl ? (e.connectionStatus$.next(s.Online),
                    o.Observable.of(t)) : e.startConversation().do(function(t) {
                        e.conversationId = t.conversationId,
                        e.token = e.secret || t.token,
                        e.streamUrl = t.streamUrl,
                        e.referenceGrammarId = t.referenceGrammarId,
                        e.secret || e.refreshTokenLoop(),
                        e.connectionStatus$.next(s.Online)
                    }, function(t) {
                        e.connectionStatus$.next(s.FailedToConnect)
                    }).map(function(e) {
                        return t
                    })) : o.Observable.of(t)
                }).filter(function(t) {
                    return t != s.Uninitialized && t != s.Connecting
                }).flatMap(function(t) {
                    switch (t) {
                    case s.Ended:
                        return o.Observable.throw(c);
                    case s.FailedToConnect:
                        return o.Observable.throw(u);
                    case s.ExpiredToken:
                        return o.Observable.throw(a);
                    default:
                        return o.Observable.of(null)
                    }
                });
                return t ? n.take(1) : n
            }
            ,
            t.prototype.expiredToken = function() {
                var t = this.connectionStatus$.getValue();
                t != s.Ended && t != s.FailedToConnect && this.connectionStatus$.next(s.ExpiredToken)
            }
            ,
            t.prototype.startConversation = function() {
                var t = this.conversationId ? this.domain + "/conversations/" + this.conversationId + "?watermark=" + this.watermark : this.domain + "/conversations"
                  , e = this.conversationId ? "GET" : "POST";
                return o.Observable.ajax({
                    method: e,
                    url: t,
                    timeout: 2e4,
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + this.token
                    }
                }).map(function(t) {
                    return t.response
                }).retryWhen(function(t) {
                    return t.mergeMap(function(t) {
                        return t.status >= 400 && t.status < 600 ? o.Observable.throw(t) : o.Observable.of(t)
                    }).delay(2e4).take(45)
                })
            }
            ,
            t.prototype.refreshTokenLoop = function() {
                var t = this;
                this.tokenRefreshSubscription = o.Observable.interval(9e5).flatMap(function(e) {
                    return t.refreshToken()
                }).subscribe(function(e) {
                    l.log("refreshing token", e, "at", new Date),
                    t.token = e
                })
            }
            ,
            t.prototype.refreshToken = function() {
                var t = this;
                return this.checkConnection(!0).flatMap(function(e) {
                    return o.Observable.ajax({
                        method: "POST",
                        url: t.domain + "/tokens/refresh",
                        timeout: 2e4,
                        headers: {
                            Authorization: "Bearer " + t.token
                        }
                    }).map(function(t) {
                        return t.response.token
                    }).retryWhen(function(e) {
                        return e.mergeMap(function(e) {
                            return 403 === e.status ? (t.expiredToken(),
                            o.Observable.throw(e)) : o.Observable.of(e)
                        }).delay(2e4).take(45)
                    })
                })
            }
            ,
            t.prototype.reconnect = function(t) {
                this.token = t.token,
                this.streamUrl = t.streamUrl,
                this.connectionStatus$.getValue() === s.ExpiredToken && this.connectionStatus$.next(s.Online)
            }
            ,
            t.prototype.end = function() {
                this.tokenRefreshSubscription && this.tokenRefreshSubscription.unsubscribe(),
                this.connectionStatus$.next(s.Ended)
            }
            ,
            t.prototype.getSessionId = function() {
                var t = this;
                return l.log("getSessionId"),
                this.checkConnection(!0).flatMap(function(e) {
                    return o.Observable.ajax({
                        method: "GET",
                        url: t.domain + "/session/getsessionid",
                        withCredentials: !0,
                        timeout: 2e4,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + t.token
                        }
                    }).map(function(t) {
                        return l.log("getSessionId response: " + t.response.sessionId),
                        t.response.sessionId
                    }).catch(function(e) {
                        return t.catchPostError(e)
                    })
                }).catch(function(e) {
                    return t.catchExpiredToken(e)
                })
            }
            ,
            t.prototype.postActivity = function(t) {
                var e = this;
                return "message" === t.type && t.attachments && t.attachments.length > 0 ? this.postMessageWithAttachments(t) : (l.log("postActivity", t),
                this.checkConnection(!0).flatMap(function(n) {
                    return o.Observable.ajax({
                        method: "POST",
                        url: e.domain + "/conversations/" + e.conversationId + "/activities",
                        body: t,
                        timeout: 2e4,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + e.token
                        }
                    }).map(function(t) {
                        return t.response.id
                    }).catch(function(t) {
                        return e.catchPostError(t)
                    })
                }).catch(function(t) {
                    return e.catchExpiredToken(t)
                }))
            }
            ,
            t.prototype.postMessageWithAttachments = function(t) {
                var e, n = this, i = t.attachments, s = r(t, ["attachments"]);
                return this.checkConnection(!0).flatMap(function(t) {
                    return e = new FormData,
                    e.append("activity", new Blob([JSON.stringify(s)],{
                        type: "application/vnd.microsoft.activity"
                    })),
                    o.Observable.from(i || []).flatMap(function(t) {
                        return o.Observable.ajax({
                            method: "GET",
                            url: t.contentUrl,
                            responseType: "arraybuffer"
                        }).do(function(n) {
                            return e.append("file", new Blob([n.response],{
                                type: t.contentType
                            }), t.name)
                        })
                    }).count()
                }).flatMap(function(t) {
                    return o.Observable.ajax({
                        method: "POST",
                        url: n.domain + "/conversations/" + n.conversationId + "/upload?userId=" + s.from.id,
                        body: e,
                        timeout: 2e4,
                        headers: {
                            Authorization: "Bearer " + n.token
                        }
                    }).map(function(t) {
                        return t.response.id
                    }).catch(function(t) {
                        return n.catchPostError(t)
                    })
                }).catch(function(t) {
                    return n.catchPostError(t)
                })
            }
            ,
            t.prototype.catchPostError = function(t) {
                if (403 === t.status)
                    this.expiredToken();
                else if (t.status >= 400 && t.status < 500)
                    return o.Observable.throw(t);
                return o.Observable.of("retry")
            }
            ,
            t.prototype.catchExpiredToken = function(t) {
                return t === a ? o.Observable.of("retry") : o.Observable.throw(t)
            }
            ,
            t.prototype.pollingGetActivity$ = function() {
                var t = this;
                return o.Observable.interval(this.pollingInterval).combineLatest(this.checkConnection()).flatMap(function(e) {
                    return o.Observable.ajax({
                        method: "GET",
                        url: t.domain + "/conversations/" + t.conversationId + "/activities?watermark=" + t.watermark,
                        timeout: 2e4,
                        headers: {
                            Accept: "application/json",
                            Authorization: "Bearer " + t.token
                        }
                    }).catch(function(e) {
                        return 403 === e.status && t.expiredToken(),
                        o.Observable.empty()
                    }).map(function(t) {
                        return t.response
                    }).flatMap(function(e) {
                        return t.observableFromActivityGroup(e)
                    })
                }).catch(function(t) {
                    return o.Observable.empty()
                })
            }
            ,
            t.prototype.observableFromActivityGroup = function(t) {
                return t.watermark && (this.watermark = t.watermark),
                o.Observable.from(t.activities)
            }
            ,
            t.prototype.webSocketActivity$ = function() {
                var t = this;
                return this.checkConnection().flatMap(function(e) {
                    return t.observableWebSocket().retryWhen(function(e) {
                        return e.mergeMap(function(e) {
                            return t.reconnectToConversation()
                        })
                    })
                }).flatMap(function(e) {
                    return t.observableFromActivityGroup(e)
                })
            }
            ,
            t.prototype.observableWebSocket = function() {
                var t = this;
                return o.Observable.create(function(e) {
                    l.log("creating WebSocket", t.streamUrl);
                    var n, r = new WebSocket(t.streamUrl);
                    return r.onopen = function(t) {
                        l.log("WebSocket open", t),
                        n = o.Observable.interval(2e4).subscribe(function(t) {
                            return r.send("")
                        })
                    }
                    ,
                    r.onclose = function(t) {
                        l.log("WebSocket close", t),
                        n && n.unsubscribe(),
                        e.error(t)
                    }
                    ,
                    r.onmessage = function(t) {
                        return t.data && e.next(JSON.parse(t.data))
                    }
                    ,
                    function() {
                        0 !== r.readyState && 1 !== r.readyState || r.close()
                    }
                })
            }
            ,
            t.prototype.reconnectToConversation = function() {
                var t = this;
                return this.checkConnection(!0).flatMap(function(e) {
                    return o.Observable.ajax({
                        method: "GET",
                        url: t.domain + "/conversations/" + t.conversationId + "?watermark=" + t.watermark,
                        timeout: 2e4,
                        headers: {
                            Accept: "application/json",
                            Authorization: "Bearer " + t.token
                        }
                    }).do(function(e) {
                        t.secret || (t.token = e.response.token),
                        t.streamUrl = e.response.streamUrl
                    }).map(function(t) {
                        return null
                    }).retryWhen(function(e) {
                        return e.mergeMap(function(e) {
                            return 403 === e.status && t.expiredToken(),
                            o.Observable.of(e)
                        }).delay(2e4).take(45)
                    })
                })
            }
            ,
            t
        }();
        e.DirectLine = p
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t || e
        }
        function i(t) {
            return void 0 === t || null === t || "" === t
        }
        function o(t, e) {
            null != e && void 0 != e && t.appendChild(e)
        }
        function s(t, e, n) {
            if (i(e))
                return n;
            for (var r in t) {
                if (parseInt(r, 10) >= 0) {
                    var o = t[r];
                    if (o && "string" == typeof o && o.toLowerCase() === e.toLowerCase())
                        return parseInt(r, 10)
                }
            }
            return n
        }
        function a(t, e, n) {
            return "string" == typeof e ? s(t, e, n) : "number" == typeof e ? r(e, n) : n
        }
        function c(t, e) {
            if (t.spacing > 0 || t.lineThickness > 0) {
                var n = document.createElement("div");
                return e == f.Orientation.Horizontal ? t.lineThickness ? (n.style.marginTop = t.spacing / 2 + "px",
                n.style.paddingTop = t.spacing / 2 + "px",
                n.style.borderTop = t.lineThickness + "px solid " + u(t.lineColor)) : n.style.height = t.spacing + "px" : t.lineThickness ? (n.style.marginLeft = t.spacing / 2 + "px",
                n.style.paddingLeft = t.spacing / 2 + "px",
                n.style.borderLeft = t.lineThickness + "px solid " + u(t.lineColor)) : n.style.width = t.spacing + "px",
                n.style.overflow = "hidden",
                n
            }
            return null
        }
        function u(t) {
            var e = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi
              , n = e.exec(t);
            if (n && n[4]) {
                var r = parseInt(n[1], 16) / 255;
                return "rgba(" + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + "," + parseInt(n[4], 16) + "," + r + ")"
            }
            return t
        }
        function l(t, e, n) {
            var r = function() {
                return e - t.scrollHeight >= -1
            };
            if (!r()) {
                for (var i = t.innerHTML, o = function(e) {
                    t.innerHTML = i.substring(0, e) + "..."
                }, s = p(i), a = 0, c = s.length, u = 0; a < c; ) {
                    var l = Math.floor((a + c) / 2);
                    o(s[l]),
                    r() ? (u = s[l],
                    a = l + 1) : c = l
                }
                if (o(u),
                n && e - t.scrollHeight >= n - 1) {
                    for (var d = h(i, u); d < i.length && (o(d),
                    r()); )
                        u = d,
                        d = h(i, d);
                    o(u)
                }
            }
        }
        function p(t) {
            for (var e = [], n = h(t, -1); n < t.length; )
                " " == t[n] && e.push(n),
                n = h(t, n);
            return e
        }
        function h(t, e) {
            for (e += 1; e < t.length && "<" == t[e]; )
                for (; e < t.length && ">" != t[e++]; )
                    ;
            return e
        }
        function d(t, e) {
            var n = t.offsetTop;
            return n + t.clientHeight <= e ? f.ContainerFitStatus.FullyInContainer : n < e ? f.ContainerFitStatus.Overflowing : f.ContainerFitStatus.FullyOutOfContainer
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = n(39);
        e.ContentTypes = {
            applicationJson: "application/json",
            applicationXWwwFormUrlencoded: "application/x-www-form-urlencoded"
        },
        e.getValueOrDefault = r,
        e.isNullOrEmpty = i,
        e.appendChild = o,
        e.getEnumValueOrDefault = s,
        e.parseHostConfigEnum = a,
        e.renderSeparation = c,
        e.stringToCssColor = u;
        var m = function() {
            function t() {
                this._isProcessed = !1,
                this._original = null,
                this._processed = null
            }
            return t.prototype.substituteInputValues = function(t, n) {
                this._processed = this._original;
                for (var r, i = /\{{2}([a-z0-9_$@]+).value\}{2}/gi; null != (r = i.exec(this._original)); ) {
                    for (var o = null, s = 0; s < t.length; s++)
                        if (t[s].id.toLowerCase() == r[1].toLowerCase()) {
                            o = t[s];
                            break
                        }
                    if (o) {
                        var a = "";
                        o.value && (a = o.value),
                        n === e.ContentTypes.applicationJson ? (a = JSON.stringify(a),
                        a = a.slice(1, -1)) : n === e.ContentTypes.applicationXWwwFormUrlencoded && (a = encodeURIComponent(a)),
                        this._processed = this._processed.replace(r[0], a)
                    }
                }
                this._isProcessed = !0
            }
            ,
            t.prototype.get = function() {
                return this._isProcessed ? this._processed : this._original
            }
            ,
            t.prototype.set = function(t) {
                this._original = t,
                this._isProcessed = !1
            }
            ,
            t
        }();
        e.StringWithSubstitutions = m,
        e.truncate = l,
        e.getFitStatus = d
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t !== t && e !== e
        }
        function i(t, e) {
            if (r(t, e))
                return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e)
                return !1;
            var n = Object.keys(t)
              , i = Object.keys(e);
            if (n.length !== i.length)
                return !1;
            for (var s = 0; s < n.length; s++)
                if (!o.call(e, n[s]) || !r(t[n[s]], e[n[s]]))
                    return !1;
            return !0
        }
        var o = Object.prototype.hasOwnProperty;
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t, e) {
            if (!e)
                throw new TypeError("illegal rule token");
            return "<" + t + "> = " + e
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (!n.i(s.a)(t) || n.i(i.a)(t) != a)
                return !1;
            var e = n.i(o.a)(t);
            if (null === e)
                return !0;
            var r = p.call(e, "constructor") && e.constructor;
            return "function" == typeof r && r instanceof r && l.call(r) == h
        }
        var i = n(207)
          , o = n(209)
          , s = n(214)
          , a = "[object Object]"
          , c = Function.prototype
          , u = Object.prototype
          , l = c.toString
          , p = u.hasOwnProperty
          , h = l.call(Object);
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            this.__rules__ = [],
            this.__cache__ = null
        }
        r.prototype.__find__ = function(t) {
            for (var e = 0; e < this.__rules__.length; e++)
                if (this.__rules__[e].name === t)
                    return e;
            return -1
        }
        ,
        r.prototype.__compile__ = function() {
            var t = this
              , e = [""];
            t.__rules__.forEach(function(t) {
                t.enabled && t.alt.forEach(function(t) {
                    e.indexOf(t) < 0 && e.push(t)
                })
            }),
            t.__cache__ = {},
            e.forEach(function(e) {
                t.__cache__[e] = [],
                t.__rules__.forEach(function(n) {
                    n.enabled && (e && n.alt.indexOf(e) < 0 || t.__cache__[e].push(n.fn))
                })
            })
        }
        ,
        r.prototype.at = function(t, e, n) {
            var r = this.__find__(t)
              , i = n || {};
            if (-1 === r)
                throw new Error("Parser rule not found: " + t);
            this.__rules__[r].fn = e,
            this.__rules__[r].alt = i.alt || [],
            this.__cache__ = null
        }
        ,
        r.prototype.before = function(t, e, n, r) {
            var i = this.__find__(t)
              , o = r || {};
            if (-1 === i)
                throw new Error("Parser rule not found: " + t);
            this.__rules__.splice(i, 0, {
                name: e,
                enabled: !0,
                fn: n,
                alt: o.alt || []
            }),
            this.__cache__ = null
        }
        ,
        r.prototype.after = function(t, e, n, r) {
            var i = this.__find__(t)
              , o = r || {};
            if (-1 === i)
                throw new Error("Parser rule not found: " + t);
            this.__rules__.splice(i + 1, 0, {
                name: e,
                enabled: !0,
                fn: n,
                alt: o.alt || []
            }),
            this.__cache__ = null
        }
        ,
        r.prototype.push = function(t, e, n) {
            var r = n || {};
            this.__rules__.push({
                name: t,
                enabled: !0,
                fn: e,
                alt: r.alt || []
            }),
            this.__cache__ = null
        }
        ,
        r.prototype.enable = function(t, e) {
            Array.isArray(t) || (t = [t]);
            var n = [];
            return t.forEach(function(t) {
                var r = this.__find__(t);
                if (r < 0) {
                    if (e)
                        return;
                    throw new Error("Rules manager: invalid rule name " + t)
                }
                this.__rules__[r].enabled = !0,
                n.push(t)
            }, this),
            this.__cache__ = null,
            n
        }
        ,
        r.prototype.enableOnly = function(t, e) {
            Array.isArray(t) || (t = [t]),
            this.__rules__.forEach(function(t) {
                t.enabled = !1
            }),
            this.enable(t, e)
        }
        ,
        r.prototype.disable = function(t, e) {
            Array.isArray(t) || (t = [t]);
            var n = [];
            return t.forEach(function(t) {
                var r = this.__find__(t);
                if (r < 0) {
                    if (e)
                        return;
                    throw new Error("Rules manager: invalid rule name " + t)
                }
                this.__rules__[r].enabled = !1,
                n.push(t)
            }, this),
            this.__cache__ = null,
            n
        }
        ,
        r.prototype.getRules = function(t) {
            return null === this.__cache__ && this.__compile__(),
            this.__cache__[t] || []
        }
        ,
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            this.type = t,
            this.tag = e,
            this.attrs = null,
            this.map = null,
            this.nesting = n,
            this.level = 0,
            this.children = null,
            this.content = "",
            this.markup = "",
            this.info = "",
            this.meta = null,
            this.block = !1,
            this.hidden = !1
        }
        r.prototype.attrIndex = function(t) {
            var e, n, r;
            if (!this.attrs)
                return -1;
            for (e = this.attrs,
            n = 0,
            r = e.length; n < r; n++)
                if (e[n][0] === t)
                    return n;
            return -1
        }
        ,
        r.prototype.attrPush = function(t) {
            this.attrs ? this.attrs.push(t) : this.attrs = [t]
        }
        ,
        r.prototype.attrSet = function(t, e) {
            var n = this.attrIndex(t)
              , r = [t, e];
            n < 0 ? this.attrPush(r) : this.attrs[n] = r
        }
        ,
        r.prototype.attrGet = function(t) {
            var e = this.attrIndex(t)
              , n = null;
            return e >= 0 && (n = this.attrs[e][1]),
            n
        }
        ,
        r.prototype.attrJoin = function(t, e) {
            var n = this.attrIndex(t);
            n < 0 ? this.attrPush([t, e]) : this.attrs[n][1] = this.attrs[n][1] + " " + e
        }
        ,
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        t.exports = n(280)
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return Array.isArray(e) && (e = e[1]),
            e ? e.nextSibling : t.firstChild
        }
        function i(t, e, n) {
            l.insertTreeBefore(t, e, n)
        }
        function o(t, e, n) {
            Array.isArray(e) ? a(t, e[0], e[1], n) : m(t, e, n)
        }
        function s(t, e) {
            if (Array.isArray(e)) {
                var n = e[1];
                e = e[0],
                c(t, e, n),
                t.removeChild(n)
            }
            t.removeChild(e)
        }
        function a(t, e, n, r) {
            for (var i = e; ; ) {
                var o = i.nextSibling;
                if (m(t, i, r),
                i === n)
                    break;
                i = o
            }
        }
        function c(t, e, n) {
            for (; ; ) {
                var r = e.nextSibling;
                if (r === n)
                    break;
                t.removeChild(r)
            }
        }
        function u(t, e, n) {
            var r = t.parentNode
              , i = t.nextSibling;
            i === e ? n && m(r, document.createTextNode(n), i) : n ? (f(i, n),
            c(r, i, e)) : c(r, t, e)
        }
        var l = n(22)
          , p = n(272)
          , h = (n(6),
        n(12),
        n(69))
          , d = n(47)
          , f = n(122)
          , m = h(function(t, e, n) {
            t.insertBefore(e, n)
        })
          , g = p.dangerouslyReplaceNodeWithMarkup
          , y = {
            dangerouslyReplaceNodeWithMarkup: g,
            replaceDelimitedText: u,
            processUpdates: function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    switch (a.type) {
                    case "INSERT_MARKUP":
                        i(t, a.content, r(t, a.afterNode));
                        break;
                    case "MOVE_EXISTING":
                        o(t, a.fromNode, r(t, a.afterNode));
                        break;
                    case "SET_MARKUP":
                        d(t, a.content);
                        break;
                    case "TEXT_CONTENT":
                        f(t, a.content);
                        break;
                    case "REMOVE_NODE":
                        s(t, a.fromNode)
                    }
                }
            }
        };
        t.exports = y
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            if (a)
                for (var t in c) {
                    var e = c[t]
                      , n = a.indexOf(t);
                    if (n > -1 || s("96", t),
                    !u.plugins[n]) {
                        e.extractEvents || s("97", t),
                        u.plugins[n] = e;
                        var r = e.eventTypes;
                        for (var o in r)
                            i(r[o], e, o) || s("98", o, t)
                    }
                }
        }
        function i(t, e, n) {
            u.eventNameDispatchConfigs.hasOwnProperty(n) && s("99", n),
            u.eventNameDispatchConfigs[n] = t;
            var r = t.phasedRegistrationNames;
            if (r) {
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        var a = r[i];
                        o(a, e, n)
                    }
                return !0
            }
            return !!t.registrationName && (o(t.registrationName, e, n),
            !0)
        }
        function o(t, e, n) {
            u.registrationNameModules[t] && s("100", t),
            u.registrationNameModules[t] = e,
            u.registrationNameDependencies[t] = e.eventTypes[n].dependencies
        }
        var s = n(4)
          , a = (n(1),
        null)
          , c = {}
          , u = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            possibleRegistrationNames: null,
            injectEventPluginOrder: function(t) {
                a && s("101"),
                a = Array.prototype.slice.call(t),
                r()
            },
            injectEventPluginsByName: function(t) {
                var e = !1;
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var i = t[n];
                        c.hasOwnProperty(n) && c[n] === i || (c[n] && s("102", n),
                        c[n] = i,
                        e = !0)
                    }
                e && r()
            },
            getPluginModuleForEvent: function(t) {
                var e = t.dispatchConfig;
                if (e.registrationName)
                    return u.registrationNameModules[e.registrationName] || null;
                if (void 0 !== e.phasedRegistrationNames) {
                    var n = e.phasedRegistrationNames;
                    for (var r in n)
                        if (n.hasOwnProperty(r)) {
                            var i = u.registrationNameModules[n[r]];
                            if (i)
                                return i
                        }
                }
                return null
            },
            _resetEventPlugins: function() {
                a = null;
                for (var t in c)
                    c.hasOwnProperty(t) && delete c[t];
                u.plugins.length = 0;
                var e = u.eventNameDispatchConfigs;
                for (var n in e)
                    e.hasOwnProperty(n) && delete e[n];
                var r = u.registrationNameModules;
                for (var i in r)
                    r.hasOwnProperty(i) && delete r[i]
            }
        };
        t.exports = u
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return "topMouseUp" === t || "topTouchEnd" === t || "topTouchCancel" === t
        }
        function i(t) {
            return "topMouseMove" === t || "topTouchMove" === t
        }
        function o(t) {
            return "topMouseDown" === t || "topTouchStart" === t
        }
        function s(t, e, n, r) {
            var i = t.type || "unknown-event";
            t.currentTarget = y.getNodeFromInstance(r),
            e ? m.invokeGuardedCallbackWithCatch(i, n, t) : m.invokeGuardedCallback(i, n, t),
            t.currentTarget = null
        }
        function a(t, e) {
            var n = t._dispatchListeners
              , r = t._dispatchInstances;
            if (Array.isArray(n))
                for (var i = 0; i < n.length && !t.isPropagationStopped(); i++)
                    s(t, e, n[i], r[i]);
            else
                n && s(t, e, n, r);
            t._dispatchListeners = null,
            t._dispatchInstances = null
        }
        function c(t) {
            var e = t._dispatchListeners
              , n = t._dispatchInstances;
            if (Array.isArray(e)) {
                for (var r = 0; r < e.length && !t.isPropagationStopped(); r++)
                    if (e[r](t, n[r]))
                        return n[r]
            } else if (e && e(t, n))
                return n;
            return null
        }
        function u(t) {
            var e = c(t);
            return t._dispatchInstances = null,
            t._dispatchListeners = null,
            e
        }
        function l(t) {
            var e = t._dispatchListeners
              , n = t._dispatchInstances;
            Array.isArray(e) && f("103"),
            t.currentTarget = e ? y.getNodeFromInstance(n) : null;
            var r = e ? e(t) : null;
            return t.currentTarget = null,
            t._dispatchListeners = null,
            t._dispatchInstances = null,
            r
        }
        function p(t) {
            return !!t._dispatchListeners
        }
        var h, d, f = n(4), m = n(67), g = (n(1),
        n(3),
        {
            injectComponentTree: function(t) {
                h = t
            },
            injectTreeTraversal: function(t) {
                d = t
            }
        }), y = {
            isEndish: r,
            isMoveish: i,
            isStartish: o,
            executeDirectDispatch: l,
            executeDispatchesInOrder: a,
            executeDispatchesInOrderStopAtTrue: u,
            hasDispatches: p,
            getInstanceFromNode: function(t) {
                return h.getInstanceFromNode(t)
            },
            getNodeFromInstance: function(t) {
                return h.getNodeFromInstance(t)
            },
            isAncestor: function(t, e) {
                return d.isAncestor(t, e)
            },
            getLowestCommonAncestor: function(t, e) {
                return d.getLowestCommonAncestor(t, e)
            },
            getParentInstance: function(t) {
                return d.getParentInstance(t)
            },
            traverseTwoPhase: function(t, e, n) {
                return d.traverseTwoPhase(t, e, n)
            },
            traverseEnterLeave: function(t, e, n, r, i) {
                return d.traverseEnterLeave(t, e, n, r, i)
            },
            injection: g
        };
        t.exports = y
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + t).replace(/[=:]/g, function(t) {
                return e[t]
            })
        }
        function i(t) {
            var e = /(=0|=2)/g
              , n = {
                "=0": "=",
                "=2": ":"
            };
            return ("" + ("." === t[0] && "$" === t[1] ? t.substring(2) : t.substring(1))).replace(e, function(t) {
                return n[t]
            })
        }
        var o = {
            escape: r,
            unescape: i
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            null != t.checkedLink && null != t.valueLink && a("87")
        }
        function i(t) {
            r(t),
            (null != t.value || null != t.onChange) && a("88")
        }
        function o(t) {
            r(t),
            (null != t.checked || null != t.onChange) && a("89")
        }
        function s(t) {
            if (t) {
                var e = t.getName();
                if (e)
                    return " Check the render method of `" + e + "`."
            }
            return ""
        }
        var a = n(4)
          , c = n(301)
          , u = n(100)
          , l = n(25)
          , p = u(l.isValidElement)
          , h = (n(1),
        n(3),
        {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0
        })
          , d = {
            value: function(t, e, n) {
                return !t[e] || h[t.type] || t.onChange || t.readOnly || t.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
            },
            checked: function(t, e, n) {
                return !t[e] || t.onChange || t.readOnly || t.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
            },
            onChange: p.func
        }
          , f = {}
          , m = {
            checkPropTypes: function(t, e, n) {
                for (var r in d) {
                    if (d.hasOwnProperty(r))
                        var i = d[r](e, r, t, "prop", null, c);
                    if (i instanceof Error && !(i.message in f)) {
                        f[i.message] = !0;
                        s(n)
                    }
                }
            },
            getValue: function(t) {
                return t.valueLink ? (i(t),
                t.valueLink.value) : t.value
            },
            getChecked: function(t) {
                return t.checkedLink ? (o(t),
                t.checkedLink.value) : t.checked
            },
            executeOnChange: function(t, e) {
                return t.valueLink ? (i(t),
                t.valueLink.requestChange(e.target.value)) : t.checkedLink ? (o(t),
                t.checkedLink.requestChange(e.target.checked)) : t.onChange ? t.onChange.call(void 0, e) : void 0
            }
        };
        t.exports = m
    }
    , function(t, e, n) {
        "use strict";
        var r = n(4)
          , i = (n(1),
        !1)
          , o = {
            replaceNodeWithMarkup: null,
            processChildrenUpdates: null,
            injection: {
                injectEnvironment: function(t) {
                    i && r("104"),
                    o.replaceNodeWithMarkup = t.replaceNodeWithMarkup,
                    o.processChildrenUpdates = t.processChildrenUpdates,
                    i = !0
                }
            }
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            try {
                e(n)
            } catch (t) {
                null === i && (i = t)
            }
        }
        var i = null
          , o = {
            invokeGuardedCallback: r,
            invokeGuardedCallbackWithCatch: r,
            rethrowCaughtError: function() {
                if (i) {
                    var t = i;
                    throw i = null,
                    t
                }
            }
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            c.enqueueUpdate(t)
        }
        function i(t) {
            var e = typeof t;
            if ("object" !== e)
                return e;
            var n = t.constructor && t.constructor.name || e
              , r = Object.keys(t);
            return r.length > 0 && r.length < 20 ? n + " (keys: " + r.join(", ") + ")" : n
        }
        function o(t, e) {
            var n = a.get(t);
            if (!n) {
                return null
            }
            return n
        }
        var s = n(4)
          , a = (n(15),
        n(32))
          , c = (n(12),
        n(13))
          , u = (n(1),
        n(3),
        {
            isMounted: function(t) {
                var e = a.get(t);
                return !!e && !!e._renderedComponent
            },
            enqueueCallback: function(t, e, n) {
                u.validateCallback(e, n);
                var i = o(t);
                if (!i)
                    return null;
                i._pendingCallbacks ? i._pendingCallbacks.push(e) : i._pendingCallbacks = [e],
                r(i)
            },
            enqueueCallbackInternal: function(t, e) {
                t._pendingCallbacks ? t._pendingCallbacks.push(e) : t._pendingCallbacks = [e],
                r(t)
            },
            enqueueForceUpdate: function(t) {
                var e = o(t, "forceUpdate");
                e && (e._pendingForceUpdate = !0,
                r(e))
            },
            enqueueReplaceState: function(t, e, n) {
                var i = o(t, "replaceState");
                i && (i._pendingStateQueue = [e],
                i._pendingReplaceState = !0,
                void 0 !== n && null !== n && (u.validateCallback(n, "replaceState"),
                i._pendingCallbacks ? i._pendingCallbacks.push(n) : i._pendingCallbacks = [n]),
                r(i))
            },
            enqueueSetState: function(t, e) {
                var n = o(t, "setState");
                if (n) {
                    (n._pendingStateQueue || (n._pendingStateQueue = [])).push(e),
                    r(n)
                }
            },
            enqueueElementInternal: function(t, e, n) {
                t._pendingElement = e,
                t._context = n,
                r(t)
            },
            validateCallback: function(t, e) {
                t && "function" != typeof t && s("122", e, i(t))
            }
        });
        t.exports = u
    }
    , function(t, e, n) {
        "use strict";
        var r = function(t) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
                MSApp.execUnsafeLocalFunction(function() {
                    return t(e, n, r, i)
                })
            }
            : t
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e, n = t.keyCode;
            return "charCode"in t ? 0 === (e = t.charCode) && 13 === n && (e = 13) : e = n,
            e >= 32 || 13 === e ? e : 0
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = this
              , n = e.nativeEvent;
            if (n.getModifierState)
                return n.getModifierState(t);
            var r = o[t];
            return !!r && !!n[r]
        }
        function i(t) {
            return r
        }
        var o = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.target || t.srcElement || window;
            return e.correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        /**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
        function r(t, e) {
            if (!o.canUseDOM || e && !("addEventListener"in document))
                return !1;
            var n = "on" + t
              , r = n in document;
            if (!r) {
                var s = document.createElement("div");
                s.setAttribute(n, "return;"),
                r = "function" == typeof s[n]
            }
            return !r && i && "wheel" === t && (r = document.implementation.hasFeature("Events.wheel", "3.0")),
            r
        }
        var i, o = n(7);
        o.canUseDOM && (i = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = null === t || !1 === t
              , r = null === e || !1 === e;
            if (n || r)
                return n === r;
            var i = typeof t
              , o = typeof e;
            return "string" === i || "number" === i ? "string" === o || "number" === o : "object" === o && t.type === e.type && t.key === e.key
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = (n(5),
        n(11))
          , i = (n(3),
        r);
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t);
            try {
                throw new Error(t)
            } catch (t) {}
        }
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(136)
          , i = n(356)
          , o = n(355)
          , s = n(354)
          , a = n(135);
        n(137);
        n.d(e, "createStore", function() {
            return r.b
        }),
        n.d(e, "combineReducers", function() {
            return i.a
        }),
        n.d(e, "bindActionCreators", function() {
            return o.a
        }),
        n.d(e, "applyMiddleware", function() {
            return s.a
        }),
        n.d(e, "compose", function() {
            return a.a
        })
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if ("function" != typeof t)
                throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return this.lift(new s(t,e))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(8);
        e.map = r;
        var s = function() {
            function t(t, e) {
                this.project = t,
                this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new a(t,this.project,this.thisArg))
            }
            ,
            t
        }();
        e.MapOperator = s;
        var a = function(t) {
            function e(e, n, r) {
                t.call(this, e),
                this.project = n,
                this.count = 0,
                this.thisArg = r || this
            }
            return i(e, t),
            e.prototype._next = function(t) {
                var e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }
            ,
            e
        }(o.Subscriber)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(410)
          , i = n(411);
        e.async = new i.AsyncScheduler(r.AsyncAction)
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.Symbol;
            if ("function" == typeof e)
                return e.iterator || (e.iterator = e("iterator polyfill")),
                e.iterator;
            var n = t.Set;
            if (n && "function" == typeof (new n)["@@iterator"])
                return "@@iterator";
            var r = t.Map;
            if (r)
                for (var i = Object.getOwnPropertyNames(r.prototype), o = 0; o < i.length; ++o) {
                    var s = i[o];
                    if ("entries" !== s && "size" !== s && r.prototype[s] === r.prototype.entries)
                        return s
                }
            return "@@iterator"
        }
        var i = n(16);
        e.symbolIteratorPonyfill = r,
        e.iterator = r(i.root),
        e.$$iterator = e.iterator
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e, n = t.Symbol;
            return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"),
            n.observable = e) : e = "@@observable",
            e
        }
        var i = n(16);
        e.getSymbolObservable = r,
        e.observable = r(i.root),
        e.$$observable = e.observable
    }
    , function(t, e, n) {
        "use strict";
        var r = n(16)
          , i = r.root.Symbol;
        e.rxSubscriber = "function" == typeof i && "function" == typeof i.for ? i.for("rxSubscriber") : "@@rxSubscriber",
        e.$$rxSubscriber = e.rxSubscriber
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return "function" == typeof t
        }
        e.isFunction = r
    }
    , function(t, e) {
        t.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(39)
          , o = n(53)
          , s = function() {
            function t(t) {
                this.default = "#000000",
                this.subtle = "#666666",
                t && (this.default = t.default || this.default,
                this.subtle = t.subtle || this.subtle)
            }
            return t
        }();
        e.TextColorDefinition = s;
        var a = function() {
            function t(t) {
                this.allowCustomStyle = !1,
                t && (this.allowCustomStyle = t.allowCustomStyle || this.allowCustomStyle)
            }
            return t
        }();
        e.AdaptiveCardConfig = a;
        var c = function() {
            function t(t) {
                this.imageSize = i.Size.Medium,
                this.maxImageHeight = 100,
                t && (this.imageSize = null != t.imageSize ? t.imageSize : this.imageSize,
                this.maxImageHeight = o.getValueOrDefault(t.maxImageHeight, 100))
            }
            return t.prototype.toJSON = function() {
                return {
                    imageSize: i.Size[this.imageSize],
                    maxImageHeight: this.maxImageHeight
                }
            }
            ,
            t
        }();
        e.ImageSetConfig = c;
        var u = function() {
            function t(t) {
                this.size = i.TextSize.Default,
                this.color = i.TextColor.Default,
                this.isSubtle = !1,
                this.weight = i.TextWeight.Default,
                this.wrap = !0,
                t && (this.size = o.parseHostConfigEnum(i.TextSize, t.size, i.TextSize.Default),
                this.color = o.parseHostConfigEnum(i.TextColor, t.color, i.TextColor.Default),
                this.isSubtle = t.isSubtle || this.isSubtle,
                this.weight = o.parseHostConfigEnum(i.TextWeight, t.weight, i.TextWeight.Default),
                this.wrap = null != t.wrap ? t.wrap : this.wrap)
            }
            return t.prototype.toJSON = function() {
                return {
                    size: i.TextSize[this.size],
                    color: i.TextColor[this.color],
                    isSubtle: this.isSubtle,
                    weight: i.TextWeight[this.weight],
                    warp: this.wrap
                }
            }
            ,
            t
        }();
        e.FactTextDefinition = u;
        var l = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.maxWidth = 150,
                n.weight = i.TextWeight.Bolder,
                e && (n.maxWidth = null != e.maxWidth ? e.maxWidth : n.maxWidth),
                n
            }
            return r(e, t),
            e
        }(u);
        e.FactTitleDefinition = l;
        var p = function() {
            function t(t) {
                this.title = new l,
                this.value = new u,
                this.spacing = 10,
                t && (this.title = new l(t.title),
                this.value = new u(t.value),
                this.spacing = t.spacing && null != t.spacing ? t.spacing && t.spacing : this.spacing)
            }
            return t
        }();
        e.FactSetConfig = p;
        var h = function() {
            function t(t) {
                this.actionMode = i.ShowCardActionMode.Inline,
                this.inlineTopMargin = 16,
                this.style = i.ContainerStyle.Emphasis,
                t && (this.actionMode = o.parseHostConfigEnum(i.ShowCardActionMode, t.actionMode, i.ShowCardActionMode.Inline),
                this.inlineTopMargin = null != t.inlineTopMargin ? t.inlineTopMargin : this.inlineTopMargin,
                this.style = t.style && "string" == typeof t.style ? t.style : i.ContainerStyle.Emphasis)
            }
            return t.prototype.toJSON = function() {
                return {
                    actionMode: i.ShowCardActionMode[this.actionMode],
                    inlineTopMargin: this.inlineTopMargin,
                    style: this.style
                }
            }
            ,
            t
        }();
        e.ShowCardActionConfig = h;
        var d = function() {
            function t(t) {
                this.maxActions = 5,
                this.spacing = i.Spacing.Default,
                this.buttonSpacing = 20,
                this.showCard = new h,
                this.preExpandSingleShowCardAction = !1,
                this.actionsOrientation = i.Orientation.Horizontal,
                this.actionAlignment = i.ActionAlignment.Left,
                t && (this.maxActions = null != t.maxActions ? t.maxActions : this.maxActions,
                this.spacing = o.parseHostConfigEnum(i.Spacing, t.spacing && t.spacing, i.Spacing.Default),
                this.buttonSpacing = null != t.buttonSpacing ? t.buttonSpacing : this.buttonSpacing,
                this.showCard = new h(t.showCard),
                this.preExpandSingleShowCardAction = o.getValueOrDefault(t.preExpandSingleShowCardAction, !1),
                this.actionsOrientation = o.parseHostConfigEnum(i.Orientation, t.actionsOrientation, i.Orientation.Horizontal),
                this.actionAlignment = o.parseHostConfigEnum(i.ActionAlignment, t.actionAlignment, i.ActionAlignment.Left))
            }
            return t.prototype.toJSON = function() {
                return {
                    maxActions: this.maxActions,
                    spacing: i.Spacing[this.spacing],
                    buttonSpacing: this.buttonSpacing,
                    showCard: this.showCard,
                    preExpandSingleShowCardAction: this.preExpandSingleShowCardAction,
                    actionsOrientation: i.Orientation[this.actionsOrientation],
                    actionAlignment: i.ActionAlignment[this.actionAlignment]
                }
            }
            ,
            t
        }();
        e.ActionsConfig = d;
        var f = function() {
            function t(t) {
                this.foregroundColors = {
                    default: new s,
                    dark: new s,
                    light: new s,
                    accent: new s,
                    good: new s,
                    warning: new s,
                    attention: new s
                },
                this.parse(t)
            }
            return t.prototype.getTextColorDefinitionOrDefault = function(t, e) {
                return new s(t || e)
            }
            ,
            t.prototype.parse = function(t) {
                t && (this.backgroundColor = t.backgroundColor,
                t.foregroundColors && (this.foregroundColors.default = this.getTextColorDefinitionOrDefault(t.foregroundColors.default, {
                    default: "#333333",
                    subtle: "#EE333333"
                }),
                this.foregroundColors.dark = this.getTextColorDefinitionOrDefault(t.foregroundColors.dark, {
                    default: "#000000",
                    subtle: "#66000000"
                }),
                this.foregroundColors.light = this.getTextColorDefinitionOrDefault(t.foregroundColors.light, {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                }),
                this.foregroundColors.accent = this.getTextColorDefinitionOrDefault(t.foregroundColors.accent, {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                }),
                this.foregroundColors.good = this.getTextColorDefinitionOrDefault(t.foregroundColors.good, {
                    default: "#54A254",
                    subtle: "#DD54A254"
                }),
                this.foregroundColors.warning = this.getTextColorDefinitionOrDefault(t.foregroundColors.warning, {
                    default: "#E69500",
                    subtle: "#DDE69500"
                }),
                this.foregroundColors.attention = this.getTextColorDefinitionOrDefault(t.foregroundColors.attention, {
                    default: "#CC3300",
                    subtle: "#DDCC3300"
                })))
            }
            ,
            Object.defineProperty(t.prototype, "isBuiltIn", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }();
        e.ContainerStyleDefinition = f;
        var m = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r(e, t),
            Object.defineProperty(e.prototype, "isBuiltIn", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(f)
          , g = function() {
            function t(t) {
                if (this._allStyles = {},
                this._allStyles[i.ContainerStyle.Default] = new m,
                this._allStyles[i.ContainerStyle.Emphasis] = new m,
                t) {
                    this._allStyles[i.ContainerStyle.Default].parse(t[i.ContainerStyle.Default]),
                    this._allStyles[i.ContainerStyle.Emphasis].parse(t[i.ContainerStyle.Emphasis]);
                    var e = t.customStyles;
                    if (e && Array.isArray(e))
                        for (var n = 0, r = e; n < r.length; n++) {
                            var o = r[n];
                            if (o) {
                                var s = o.name;
                                s && "string" == typeof s && (this._allStyles.hasOwnProperty(s) ? this._allStyles[s].parse(o.style) : this._allStyles[s] = new f(o.style))
                            }
                        }
                }
            }
            return t.prototype.toJSON = function() {
                var t = this
                  , e = [];
                Object.keys(this._allStyles).forEach(function(n) {
                    t._allStyles[n].isBuiltIn || e.push({
                        name: n,
                        style: t._allStyles[n]
                    })
                });
                var n = {
                    default: this.default,
                    emphasis: this.emphasis
                };
                return e.length > 0 && (n.customStyles = e),
                n
            }
            ,
            t.prototype.getStyleByName = function(t, e) {
                return void 0 === e && (e = null),
                this._allStyles.hasOwnProperty(t) ? this._allStyles[t] : e
            }
            ,
            Object.defineProperty(t.prototype, "default", {
                get: function() {
                    return this._allStyles[i.ContainerStyle.Default]
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "emphasis", {
                get: function() {
                    return this._allStyles[i.ContainerStyle.Emphasis]
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }();
        e.ContainerStyleSet = g;
        var y = function() {
            function t(t) {
                this.choiceSetInputValueSeparator = ",",
                this.supportsInteractivity = !0,
                this.fontFamily = "Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif",
                this.spacing = {
                    small: 3,
                    default: 8,
                    medium: 20,
                    large: 30,
                    extraLarge: 40,
                    padding: 15
                },
                this.separator = {
                    lineThickness: 1,
                    lineColor: "#EEEEEE"
                },
                this.fontSizes = {
                    small: 12,
                    default: 14,
                    medium: 17,
                    large: 21,
                    extraLarge: 26
                },
                this.fontWeights = {
                    lighter: 200,
                    default: 400,
                    bolder: 600
                },
                this.imageSizes = {
                    small: 40,
                    medium: 80,
                    large: 160
                },
                this.containerStyles = new g,
                this.actions = new d,
                this.adaptiveCard = new a,
                this.imageSet = new c,
                this.factSet = new p,
                t && (("string" == typeof t || t instanceof String) && (t = JSON.parse(t)),
                this.choiceSetInputValueSeparator = t && "string" == typeof t.choiceSetInputValueSeparator ? t.choiceSetInputValueSeparator : this.choiceSetInputValueSeparator,
                this.supportsInteractivity = t && "boolean" == typeof t.supportsInteractivity ? t.supportsInteractivity : this.supportsInteractivity,
                this.fontFamily = t.fontFamily || this.fontFamily,
                this.fontSizes = {
                    small: t.fontSizes && t.fontSizes.small || this.fontSizes.small,
                    default: t.fontSizes && t.fontSizes.default || this.fontSizes.default,
                    medium: t.fontSizes && t.fontSizes.medium || this.fontSizes.medium,
                    large: t.fontSizes && t.fontSizes.large || this.fontSizes.large,
                    extraLarge: t.fontSizes && t.fontSizes.extraLarge || this.fontSizes.extraLarge
                },
                this.fontWeights = {
                    lighter: t.fontWeights && t.fontWeights.lighter || this.fontWeights.lighter,
                    default: t.fontWeights && t.fontWeights.default || this.fontWeights.default,
                    bolder: t.fontWeights && t.fontWeights.bolder || this.fontWeights.bolder
                },
                this.imageSizes = {
                    small: t.imageSizes && t.imageSizes.small || this.imageSizes.small,
                    medium: t.imageSizes && t.imageSizes.medium || this.imageSizes.medium,
                    large: t.imageSizes && t.imageSizes.large || this.imageSizes.large
                },
                this.containerStyles = new g(t.containerStyles),
                this.spacing = {
                    small: t.spacing && t.spacing.small || this.spacing.small,
                    default: t.spacing && t.spacing.default || this.spacing.default,
                    medium: t.spacing && t.spacing.medium || this.spacing.medium,
                    large: t.spacing && t.spacing.large || this.spacing.large,
                    extraLarge: t.spacing && t.spacing.extraLarge || this.spacing.extraLarge,
                    padding: t.spacing && t.spacing.padding || this.spacing.padding
                },
                this.separator = {
                    lineThickness: t.separator && t.separator.lineThickness || this.separator.lineThickness,
                    lineColor: t.separator && t.separator.lineColor || this.separator.lineColor
                },
                this.actions = new d(t.actions || this.actions),
                this.adaptiveCard = new a(t.adaptiveCard || this.adaptiveCard),
                this.imageSet = new c(t.imageSet),
                this.factSet = new p(t.factSet))
            }
            return t.prototype.getEffectiveSpacing = function(t) {
                switch (t) {
                case i.Spacing.Small:
                    return this.spacing.small;
                case i.Spacing.Default:
                    return this.spacing.default;
                case i.Spacing.Medium:
                    return this.spacing.medium;
                case i.Spacing.Large:
                    return this.spacing.large;
                case i.Spacing.ExtraLarge:
                    return this.spacing.extraLarge;
                case i.Spacing.Padding:
                    return this.spacing.padding;
                default:
                    return 0
                }
            }
            ,
            t
        }();
        e.HostConfig = y
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(9);
        n(365),
        n(367);
        var o = n(0)
          , s = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return r.__extends(e, t),
            e.prototype.clearScrollTimers = function() {
                clearInterval(this.scrollStartTimer),
                clearInterval(this.scrollSyncTimer),
                clearTimeout(this.scrollDurationTimer),
                document.body.removeChild(this.animateDiv),
                this.animateDiv = null,
                this.scrollStartTimer = null,
                this.scrollSyncTimer = null,
                this.scrollDurationTimer = null
            }
            ,
            e.prototype.updateScrollButtons = function() {
                this.prevButton.disabled = !this.scrollDiv || Math.round(this.scrollDiv.scrollLeft) <= 0,
                this.nextButton.disabled = !this.scrollDiv || Math.round(this.scrollDiv.scrollLeft) >= Math.round(this.scrollDiv.scrollWidth - this.scrollDiv.offsetWidth)
            }
            ,
            e.prototype.componentDidMount = function() {
                var t = this;
                this.scrollDiv.style.marginBottom = -(this.scrollDiv.offsetHeight - this.scrollDiv.clientHeight) + "px",
                this.scrollSubscription = o.Observable.fromEvent(this.scrollDiv, "scroll").subscribe(function(e) {
                    t.updateScrollButtons()
                }),
                this.clickSubscription = o.Observable.merge(o.Observable.fromEvent(this.prevButton, "click").map(function(t) {
                    return -1
                }), o.Observable.fromEvent(this.nextButton, "click").map(function(t) {
                    return 1
                })).subscribe(function(e) {
                    t.scrollBy(e)
                }),
                this.updateScrollButtons()
            }
            ,
            e.prototype.componentDidUpdate = function() {
                this.scrollDiv.scrollLeft = 0,
                this.updateScrollButtons()
            }
            ,
            e.prototype.componentWillUnmount = function() {
                this.scrollSubscription.unsubscribe(),
                this.clickSubscription.unsubscribe()
            }
            ,
            e.prototype.scrollAmount = function(t) {
                if ("item" === this.props.scrollUnit) {
                    var e = this.scrollDiv.querySelector("ul > li");
                    return e ? t * e.offsetWidth : 0
                }
                return t * (this.scrollDiv.offsetWidth - 70)
            }
            ,
            e.prototype.scrollBy = function(t) {
                var e = this
                  , n = "wc-animate-scroll";
                this.animateDiv && (n = "wc-animate-scroll-rapid",
                this.clearScrollTimers());
                var r = this.scrollAmount(t)
                  , i = this.scrollDiv.scrollLeft
                  , o = i + r;
                o = Math.max(o, 0),
                o = Math.min(o, this.scrollDiv.scrollWidth - this.scrollDiv.offsetWidth),
                i !== o && (Math.abs(o - i) < 60 && (n = "wc-animate-scroll-near"),
                this.animateDiv = document.createElement("div"),
                this.animateDiv.className = n,
                this.animateDiv.style.left = i + "px",
                document.body.appendChild(this.animateDiv),
                this.scrollSyncTimer = window.setInterval(function() {
                    var t = parseFloat(getComputedStyle(e.animateDiv).left);
                    e.scrollDiv.scrollLeft = t
                }, 1),
                this.scrollStartTimer = window.setTimeout(function() {
                    e.animateDiv.style.left = o + "px";
                    var t = 1e3 * parseFloat(getComputedStyle(e.animateDiv).transitionDuration);
                    t ? (t += 50,
                    e.scrollDurationTimer = window.setTimeout(function() {
                        return e.clearScrollTimers()
                    }, t)) : e.clearScrollTimers()
                }, 1))
            }
            ,
            e.prototype.render = function() {
                var t = this;
                return i.createElement("div", null, i.createElement("button", {
                    className: "scroll previous",
                    disabled: !0,
                    ref: function(e) {
                        return t.prevButton = e
                    },
                    type: "button"
                }, i.createElement("svg", null, i.createElement("path", {
                    d: this.props.prevSvgPathData
                }))), i.createElement("div", {
                    className: "wc-hscroll-outer"
                }, i.createElement("div", {
                    className: "wc-hscroll",
                    ref: function(e) {
                        return t.scrollDiv = e
                    }
                }, this.props.children)), i.createElement("button", {
                    className: "scroll next",
                    disabled: !0,
                    ref: function(e) {
                        return t.nextButton = e
                    },
                    type: "button"
                }, i.createElement("svg", null, i.createElement("path", {
                    d: this.props.nextSvgPathData
                }))))
            }
            ,
            e
        }(i.Component);
        e.HScroll = s
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (t && 0 !== t.length) {
                var e = t[t.length - 1];
                return "message" === e.type && e.suggestedActions && e.suggestedActions.actions.length > 0 ? e : void 0
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.activityWithSuggestedActions = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(11)
          , i = {
            listen: function(t, e, n) {
                return t.addEventListener ? (t.addEventListener(e, n, !1),
                {
                    remove: function() {
                        t.removeEventListener(e, n, !1)
                    }
                }) : t.attachEvent ? (t.attachEvent("on" + e, n),
                {
                    remove: function() {
                        t.detachEvent("on" + e, n)
                    }
                }) : void 0
            },
            capture: function(t, e, n) {
                return t.addEventListener ? (t.addEventListener(e, n, !0),
                {
                    remove: function() {
                        t.removeEventListener(e, n, !0)
                    }
                }) : {
                    remove: r
                }
            },
            registerDefault: function() {}
        };
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            try {
                t.focus()
            } catch (t) {}
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0)))
                return null;
            try {
                return t.activeElement || t.body
            } catch (e) {
                return t.body
            }
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.RULE = "rule",
        e.WORD = "word",
        e.ALTERNATIVE = "alt"
    }
    , function(t, e, n) {
        "use strict";
        var r = n(213)
          , i = r.a.Symbol;
        e.a = i
    }
    , function(t, e, n) {
        "use strict";
        t.exports = n(220)
    }
    , function(t, e, n) {
        "use strict";
        t.exports = n(181)
    }
    , function(t, e, n) {
        "use strict";
        var r = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>"
          , i = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>"
          , o = new RegExp("^(?:" + r + "|" + i + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")
          , s = new RegExp("^(?:" + r + "|" + i + ")");
        t.exports.HTML_TAG_RE = o,
        t.exports.HTML_OPEN_CLOSE_TAG_RE = s
    }
    , function(t, e, n) {
        "use strict";
        t.exports.tokenize = function(t, e) {
            var n, r, i, o = t.pos, s = t.src.charCodeAt(o);
            if (e)
                return !1;
            if (95 !== s && 42 !== s)
                return !1;
            for (r = t.scanDelims(t.pos, 42 === s),
            n = 0; n < r.length; n++)
                i = t.push("text", "", 0),
                i.content = String.fromCharCode(s),
                t.delimiters.push({
                    marker: s,
                    length: r.length,
                    jump: n,
                    token: t.tokens.length - 1,
                    level: t.level,
                    end: -1,
                    open: r.can_open,
                    close: r.can_close
                });
            return t.pos += r.length,
            !0
        }
        ,
        t.exports.postProcess = function(t) {
            var e, n, r, i, o, s, a = t.delimiters, c = t.delimiters.length;
            for (e = 0; e < c; e++)
                n = a[e],
                95 !== n.marker && 42 !== n.marker || -1 !== n.end && (r = a[n.end],
                s = e + 1 < c && a[e + 1].end === n.end - 1 && a[e + 1].token === n.token + 1 && a[n.end - 1].token === r.token - 1 && a[e + 1].marker === n.marker,
                o = String.fromCharCode(n.marker),
                i = t.tokens[n.token],
                i.type = s ? "strong_open" : "em_open",
                i.tag = s ? "strong" : "em",
                i.nesting = 1,
                i.markup = s ? o + o : o,
                i.content = "",
                i = t.tokens[r.token],
                i.type = s ? "strong_close" : "em_close",
                i.tag = s ? "strong" : "em",
                i.nesting = -1,
                i.markup = s ? o + o : o,
                i.content = "",
                s && (t.tokens[a[e + 1].token].content = "",
                t.tokens[a[n.end - 1].token].content = "",
                e++))
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports.tokenize = function(t, e) {
            var n, r, i, o, s, a = t.pos, c = t.src.charCodeAt(a);
            if (e)
                return !1;
            if (126 !== c)
                return !1;
            if (r = t.scanDelims(t.pos, !0),
            o = r.length,
            s = String.fromCharCode(c),
            o < 2)
                return !1;
            for (o % 2 && (i = t.push("text", "", 0),
            i.content = s,
            o--),
            n = 0; n < o; n += 2)
                i = t.push("text", "", 0),
                i.content = s + s,
                t.delimiters.push({
                    marker: c,
                    jump: n,
                    token: t.tokens.length - 1,
                    level: t.level,
                    end: -1,
                    open: r.can_open,
                    close: r.can_close
                });
            return t.pos += r.length,
            !0
        }
        ,
        t.exports.postProcess = function(t) {
            var e, n, r, i, o, s = [], a = t.delimiters, c = t.delimiters.length;
            for (e = 0; e < c; e++)
                r = a[e],
                126 === r.marker && -1 !== r.end && (i = a[r.end],
                o = t.tokens[r.token],
                o.type = "s_open",
                o.tag = "s",
                o.nesting = 1,
                o.markup = "~~",
                o.content = "",
                o = t.tokens[i.token],
                o.type = "s_close",
                o.tag = "s",
                o.nesting = -1,
                o.markup = "~~",
                o.content = "",
                "text" === t.tokens[i.token - 1].type && "~" === t.tokens[i.token - 1].content && s.push(i.token - 1));
            for (; s.length; ) {
                for (e = s.pop(),
                n = e + 1; n < t.tokens.length && "s_close" === t.tokens[n].type; )
                    n++;
                n--,
                e !== n && (o = t.tokens[n],
                t.tokens[n] = t.tokens[e],
                t.tokens[e] = o)
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports.encode = n(260),
        t.exports.decode = n(259),
        t.exports.format = n(261),
        t.exports.parse = n(262)
    }
    , function(t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(t) {
            if (l === setTimeout)
                return setTimeout(t, 0);
            if ((l === n || !l) && setTimeout)
                return l = setTimeout,
                setTimeout(t, 0);
            try {
                return l(t, 0)
            } catch (e) {
                try {
                    return l.call(null, t, 0)
                } catch (e) {
                    return l.call(this, t, 0)
                }
            }
        }
        function o(t) {
            if (p === clearTimeout)
                return clearTimeout(t);
            if ((p === r || !p) && clearTimeout)
                return p = clearTimeout,
                clearTimeout(t);
            try {
                return p(t)
            } catch (e) {
                try {
                    return p.call(null, t)
                } catch (e) {
                    return p.call(this, t)
                }
            }
        }
        function s() {
            m && d && (m = !1,
            d.length ? f = d.concat(f) : g = -1,
            f.length && a())
        }
        function a() {
            if (!m) {
                var t = i(s);
                m = !0;
                for (var e = f.length; e; ) {
                    for (d = f,
                    f = []; ++g < e; )
                        d && d[g].run();
                    g = -1,
                    e = f.length
                }
                d = null,
                m = !1,
                o(t)
            }
        }
        function c(t, e) {
            this.fun = t,
            this.array = e
        }
        function u() {}
        var l, p, h = t.exports = {};
        !function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                l = n
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                p = r
            }
        }();
        var d, f = [], m = !1, g = -1;
        h.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            f.push(new c(t,e)),
            1 !== f.length || m || i(a)
        }
        ,
        c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        h.title = "browser",
        h.browser = !0,
        h.env = {},
        h.argv = [],
        h.version = "",
        h.versions = {},
        h.on = u,
        h.addListener = u,
        h.once = u,
        h.off = u,
        h.removeListener = u,
        h.removeAllListeners = u,
        h.emit = u,
        h.prependListener = u,
        h.prependOnceListener = u,
        h.listeners = function(t) {
            return []
        }
        ,
        h.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        h.cwd = function() {
            return "/"
        }
        ,
        h.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        h.umask = function() {
            return 0
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(265);
        t.exports = function(t) {
            return r(t, !1)
        }
    }
    , function(t, e, n) {
        t.exports = n(264)()
    }
    , function(t, e, n) {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t + e.charAt(0).toUpperCase() + e.substring(1)
        }
        var i = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        }
          , o = ["Webkit", "ms", "Moz", "O"];
        Object.keys(i).forEach(function(t) {
            o.forEach(function(e) {
                i[r(e, t)] = i[t]
            })
        });
        var s = {
            background: {
                backgroundAttachment: !0,
                backgroundColor: !0,
                backgroundImage: !0,
                backgroundPositionX: !0,
                backgroundPositionY: !0,
                backgroundRepeat: !0
            },
            backgroundPosition: {
                backgroundPositionX: !0,
                backgroundPositionY: !0
            },
            border: {
                borderWidth: !0,
                borderStyle: !0,
                borderColor: !0
            },
            borderBottom: {
                borderBottomWidth: !0,
                borderBottomStyle: !0,
                borderBottomColor: !0
            },
            borderLeft: {
                borderLeftWidth: !0,
                borderLeftStyle: !0,
                borderLeftColor: !0
            },
            borderRight: {
                borderRightWidth: !0,
                borderRightStyle: !0,
                borderRightColor: !0
            },
            borderTop: {
                borderTopWidth: !0,
                borderTopStyle: !0,
                borderTopColor: !0
            },
            font: {
                fontStyle: !0,
                fontVariant: !0,
                fontWeight: !0,
                fontSize: !0,
                lineHeight: !0,
                fontFamily: !0
            },
            outline: {
                outlineWidth: !0,
                outlineStyle: !0,
                outlineColor: !0
            }
        }
          , a = {
            isUnitlessNumber: i,
            shorthandPropertyExpansions: s
        };
        t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = n(4)
          , o = n(19)
          , s = (n(1),
        function() {
            function t(e) {
                r(this, t),
                this._callbacks = null,
                this._contexts = null,
                this._arg = e
            }
            return t.prototype.enqueue = function(t, e) {
                this._callbacks = this._callbacks || [],
                this._callbacks.push(t),
                this._contexts = this._contexts || [],
                this._contexts.push(e)
            }
            ,
            t.prototype.notifyAll = function() {
                var t = this._callbacks
                  , e = this._contexts
                  , n = this._arg;
                if (t && e) {
                    t.length !== e.length && i("24"),
                    this._callbacks = null,
                    this._contexts = null;
                    for (var r = 0; r < t.length; r++)
                        t[r].call(e[r], n);
                    t.length = 0,
                    e.length = 0
                }
            }
            ,
            t.prototype.checkpoint = function() {
                return this._callbacks ? this._callbacks.length : 0
            }
            ,
            t.prototype.rollback = function(t) {
                this._callbacks && this._contexts && (this._callbacks.length = t,
                this._contexts.length = t)
            }
            ,
            t.prototype.reset = function() {
                this._callbacks = null,
                this._contexts = null
            }
            ,
            t.prototype.destructor = function() {
                this.reset()
            }
            ,
            t
        }());
        t.exports = o.addPoolingTo(s)
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return !!u.hasOwnProperty(t) || !c.hasOwnProperty(t) && (a.test(t) ? (u[t] = !0,
            !0) : (c[t] = !0,
            !1))
        }
        function i(t, e) {
            return null == e || t.hasBooleanValue && !e || t.hasNumericValue && isNaN(e) || t.hasPositiveNumericValue && e < 1 || t.hasOverloadedBooleanValue && !1 === e
        }
        var o = n(23)
          , s = (n(6),
        n(12),
        n(328))
          , a = (n(3),
        new RegExp("^[" + o.ATTRIBUTE_NAME_START_CHAR + "][" + o.ATTRIBUTE_NAME_CHAR + "]*$"))
          , c = {}
          , u = {}
          , l = {
            createMarkupForID: function(t) {
                return o.ID_ATTRIBUTE_NAME + "=" + s(t)
            },
            setAttributeForID: function(t, e) {
                t.setAttribute(o.ID_ATTRIBUTE_NAME, e)
            },
            createMarkupForRoot: function() {
                return o.ROOT_ATTRIBUTE_NAME + '=""'
            },
            setAttributeForRoot: function(t) {
                t.setAttribute(o.ROOT_ATTRIBUTE_NAME, "")
            },
            createMarkupForProperty: function(t, e) {
                var n = o.properties.hasOwnProperty(t) ? o.properties[t] : null;
                if (n) {
                    if (i(n, e))
                        return "";
                    var r = n.attributeName;
                    return n.hasBooleanValue || n.hasOverloadedBooleanValue && !0 === e ? r + '=""' : r + "=" + s(e)
                }
                return o.isCustomAttribute(t) ? null == e ? "" : t + "=" + s(e) : null
            },
            createMarkupForCustomAttribute: function(t, e) {
                return r(t) && null != e ? t + "=" + s(e) : ""
            },
            setValueForProperty: function(t, e, n) {
                var r = o.properties.hasOwnProperty(e) ? o.properties[e] : null;
                if (r) {
                    var s = r.mutationMethod;
                    if (s)
                        s(t, n);
                    else {
                        if (i(r, n))
                            return void this.deleteValueForProperty(t, e);
                        if (r.mustUseProperty)
                            t[r.propertyName] = n;
                        else {
                            var a = r.attributeName
                              , c = r.attributeNamespace;
                            c ? t.setAttributeNS(c, a, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === n ? t.setAttribute(a, "") : t.setAttribute(a, "" + n)
                        }
                    }
                } else if (o.isCustomAttribute(e))
                    return void l.setValueForAttribute(t, e, n)
            },
            setValueForAttribute: function(t, e, n) {
                if (r(e)) {
                    null == n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)
                }
            },
            deleteValueForAttribute: function(t, e) {
                t.removeAttribute(e)
            },
            deleteValueForProperty: function(t, e) {
                var n = o.properties.hasOwnProperty(e) ? o.properties[e] : null;
                if (n) {
                    var r = n.mutationMethod;
                    if (r)
                        r(t, void 0);
                    else if (n.mustUseProperty) {
                        var i = n.propertyName;
                        n.hasBooleanValue ? t[i] = !1 : t[i] = ""
                    } else
                        t.removeAttribute(n.attributeName)
                } else
                    o.isCustomAttribute(e) && t.removeAttribute(e)
            }
        };
        t.exports = l
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            hasCachedChildNodes: 1
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            if (this._rootNodeID && this._wrapperState.pendingUpdate) {
                this._wrapperState.pendingUpdate = !1;
                var t = this._currentElement.props
                  , e = a.getValue(t);
                null != e && i(this, Boolean(t.multiple), e)
            }
        }
        function i(t, e, n) {
            var r, i, o = c.getNodeFromInstance(t).options;
            if (e) {
                for (r = {},
                i = 0; i < n.length; i++)
                    r["" + n[i]] = !0;
                for (i = 0; i < o.length; i++) {
                    var s = r.hasOwnProperty(o[i].value);
                    o[i].selected !== s && (o[i].selected = s)
                }
            } else {
                for (r = "" + n,
                i = 0; i < o.length; i++)
                    if (o[i].value === r)
                        return void (o[i].selected = !0);
                o.length && (o[0].selected = !0)
            }
        }
        function o(t) {
            var e = this._currentElement.props
              , n = a.executeOnChange(e, t);
            return this._rootNodeID && (this._wrapperState.pendingUpdate = !0),
            u.asap(r, this),
            n
        }
        var s = n(5)
          , a = n(65)
          , c = n(6)
          , u = n(13)
          , l = (n(3),
        !1)
          , p = {
            getHostProps: function(t, e) {
                return s({}, e, {
                    onChange: t._wrapperState.onChange,
                    value: void 0
                })
            },
            mountWrapper: function(t, e) {
                var n = a.getValue(e);
                t._wrapperState = {
                    pendingUpdate: !1,
                    initialValue: null != n ? n : e.defaultValue,
                    listeners: null,
                    onChange: o.bind(t),
                    wasMultiple: Boolean(e.multiple)
                },
                void 0 === e.value || void 0 === e.defaultValue || l || (l = !0)
            },
            getSelectValueContext: function(t) {
                return t._wrapperState.initialValue
            },
            postUpdateWrapper: function(t) {
                var e = t._currentElement.props;
                t._wrapperState.initialValue = void 0;
                var n = t._wrapperState.wasMultiple;
                t._wrapperState.wasMultiple = Boolean(e.multiple);
                var r = a.getValue(e);
                null != r ? (t._wrapperState.pendingUpdate = !1,
                i(t, Boolean(e.multiple), r)) : n !== Boolean(e.multiple) && (null != e.defaultValue ? i(t, Boolean(e.multiple), e.defaultValue) : i(t, Boolean(e.multiple), e.multiple ? [] : ""))
            }
        };
        t.exports = p
    }
    , function(t, e, n) {
        "use strict";
        var r, i = {
            injectEmptyComponentFactory: function(t) {
                r = t
            }
        }, o = {
            create: function(t) {
                return r(t)
            }
        };
        o.injection = i,
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            logTopLevelRenders: !1
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return a || s("111", t.type),
            new a(t)
        }
        function i(t) {
            return new c(t)
        }
        function o(t) {
            return t instanceof c
        }
        var s = n(4)
          , a = (n(1),
        null)
          , c = null
          , u = {
            injectGenericComponentClass: function(t) {
                a = t
            },
            injectTextComponentClass: function(t) {
                c = t
            }
        }
          , l = {
            createInternalComponent: r,
            createInstanceForText: i,
            isTextComponent: o,
            injection: u
        };
        t.exports = l
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return o(document.documentElement, t)
        }
        var i = n(288)
          , o = n(184)
          , s = n(89)
          , a = n(90)
          , c = {
            hasSelectionCapabilities: function(t) {
                var e = t && t.nodeName && t.nodeName.toLowerCase();
                return e && ("input" === e && "text" === t.type || "textarea" === e || "true" === t.contentEditable)
            },
            getSelectionInformation: function() {
                var t = a();
                return {
                    focusedElem: t,
                    selectionRange: c.hasSelectionCapabilities(t) ? c.getSelection(t) : null
                }
            },
            restoreSelection: function(t) {
                var e = a()
                  , n = t.focusedElem
                  , i = t.selectionRange;
                e !== n && r(n) && (c.hasSelectionCapabilities(n) && c.setSelection(n, i),
                s(n))
            },
            getSelection: function(t) {
                var e;
                if ("selectionStart"in t)
                    e = {
                        start: t.selectionStart,
                        end: t.selectionEnd
                    };
                else if (document.selection && t.nodeName && "input" === t.nodeName.toLowerCase()) {
                    var n = document.selection.createRange();
                    n.parentElement() === t && (e = {
                        start: -n.moveStart("character", -t.value.length),
                        end: -n.moveEnd("character", -t.value.length)
                    })
                } else
                    e = i.getOffsets(t);
                return e || {
                    start: 0,
                    end: 0
                }
            },
            setSelection: function(t, e) {
                var n = e.start
                  , r = e.end;
                if (void 0 === r && (r = n),
                "selectionStart"in t)
                    t.selectionStart = n,
                    t.selectionEnd = Math.min(r, t.value.length);
                else if (document.selection && t.nodeName && "input" === t.nodeName.toLowerCase()) {
                    var o = t.createTextRange();
                    o.collapse(!0),
                    o.moveStart("character", n),
                    o.moveEnd("character", r - n),
                    o.select()
                } else
                    i.setOffsets(t, e)
            }
        };
        t.exports = c
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            for (var n = Math.min(t.length, e.length), r = 0; r < n; r++)
                if (t.charAt(r) !== e.charAt(r))
                    return r;
            return t.length === e.length ? -1 : n
        }
        function i(t) {
            return t ? t.nodeType === N ? t.documentElement : t.firstChild : null
        }
        function o(t) {
            return t.getAttribute && t.getAttribute(P) || ""
        }
        function s(t, e, n, r, i) {
            var o;
            if (C.logTopLevelRenders) {
                var s = t._currentElement.props.child
                  , a = s.type;
                o = "React mount: " + ("string" == typeof a ? a : a.displayName || a.name),
                console.time(o)
            }
            var c = x.mountComponent(t, n, null, b(t, e), i, 0);
            o && console.timeEnd(o),
            t._renderedComponent._topLevelWrapper = t,
            z._mountImageIntoNode(c, e, t, r, n)
        }
        function a(t, e, n, r) {
            var i = E.ReactReconcileTransaction.getPooled(!n && _.useCreateElement);
            i.perform(s, null, t, e, i, n, r),
            E.ReactReconcileTransaction.release(i)
        }
        function c(t, e, n) {
            for (x.unmountComponent(t, n),
            e.nodeType === N && (e = e.documentElement); e.lastChild; )
                e.removeChild(e.lastChild)
        }
        function u(t) {
            var e = i(t);
            if (e) {
                var n = v.getInstanceFromNode(e);
                return !(!n || !n._hostParent)
            }
        }
        function l(t) {
            return !(!t || t.nodeType !== M && t.nodeType !== N && t.nodeType !== R)
        }
        function p(t) {
            var e = i(t)
              , n = e && v.getInstanceFromNode(e);
            return n && !n._hostParent ? n : null
        }
        function h(t) {
            var e = p(t);
            return e ? e._hostContainerInfo._topLevelWrapper : null
        }
        var d = n(4)
          , f = n(22)
          , m = n(23)
          , g = n(25)
          , y = n(43)
          , v = (n(15),
        n(6))
          , b = n(282)
          , _ = n(284)
          , C = n(109)
          , w = n(32)
          , S = (n(12),
        n(298))
          , x = n(24)
          , k = n(68)
          , E = n(13)
          , A = n(42)
          , T = n(120)
          , O = (n(1),
        n(47))
          , I = n(74)
          , P = (n(3),
        m.ID_ATTRIBUTE_NAME)
          , D = m.ROOT_ATTRIBUTE_NAME
          , M = 1
          , N = 9
          , R = 11
          , L = {}
          , j = 1
          , F = function() {
            this.rootID = j++
        };
        F.prototype.isReactComponent = {},
        F.prototype.render = function() {
            return this.props.child
        }
        ,
        F.isReactTopLevelWrapper = !0;
        var z = {
            TopLevelWrapper: F,
            _instancesByReactRootID: L,
            scrollMonitor: function(t, e) {
                e()
            },
            _updateRootComponent: function(t, e, n, r, i) {
                return z.scrollMonitor(r, function() {
                    k.enqueueElementInternal(t, e, n),
                    i && k.enqueueCallbackInternal(t, i)
                }),
                t
            },
            _renderNewRootComponent: function(t, e, n, r) {
                l(e) || d("37"),
                y.ensureScrollValueMonitoring();
                var i = T(t, !1);
                E.batchedUpdates(a, i, e, n, r);
                var o = i._instance.rootID;
                return L[o] = i,
                i
            },
            renderSubtreeIntoContainer: function(t, e, n, r) {
                return null != t && w.has(t) || d("38"),
                z._renderSubtreeIntoContainer(t, e, n, r)
            },
            _renderSubtreeIntoContainer: function(t, e, n, r) {
                k.validateCallback(r, "ReactDOM.render"),
                g.isValidElement(e) || d("39", "string" == typeof e ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof e ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != e && void 0 !== e.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
                var s, a = g.createElement(F, {
                    child: e
                });
                if (t) {
                    var c = w.get(t);
                    s = c._processChildContext(c._context)
                } else
                    s = A;
                var l = h(n);
                if (l) {
                    var p = l._currentElement
                      , f = p.props.child;
                    if (I(f, e)) {
                        var m = l._renderedComponent.getPublicInstance()
                          , y = r && function() {
                            r.call(m)
                        }
                        ;
                        return z._updateRootComponent(l, a, s, n, y),
                        m
                    }
                    z.unmountComponentAtNode(n)
                }
                var v = i(n)
                  , b = v && !!o(v)
                  , _ = u(n)
                  , C = b && !l && !_
                  , S = z._renderNewRootComponent(a, n, C, s)._renderedComponent.getPublicInstance();
                return r && r.call(S),
                S
            },
            render: function(t, e, n) {
                return z._renderSubtreeIntoContainer(null, t, e, n)
            },
            unmountComponentAtNode: function(t) {
                l(t) || d("40");
                var e = h(t);
                if (!e) {
                    u(t),
                    1 === t.nodeType && t.hasAttribute(D);
                    return !1
                }
                return delete L[e._instance.rootID],
                E.batchedUpdates(c, e, t, !1),
                !0
            },
            _mountImageIntoNode: function(t, e, n, o, s) {
                if (l(e) || d("41"),
                o) {
                    var a = i(e);
                    if (S.canReuseMarkup(t, a))
                        return void v.precacheNode(n, a);
                    var c = a.getAttribute(S.CHECKSUM_ATTR_NAME);
                    a.removeAttribute(S.CHECKSUM_ATTR_NAME);
                    var u = a.outerHTML;
                    a.setAttribute(S.CHECKSUM_ATTR_NAME, c);
                    var p = t
                      , h = r(p, u)
                      , m = " (client) " + p.substring(h - 20, h + 20) + "\n (server) " + u.substring(h - 20, h + 20);
                    e.nodeType === N && d("42", m)
                }
                if (e.nodeType === N && d("43"),
                s.useCreateElement) {
                    for (; e.lastChild; )
                        e.removeChild(e.lastChild);
                    f.insertTreeBefore(e, t, null)
                } else
                    O(e, t),
                    v.precacheNode(n, e.firstChild)
            }
        };
        t.exports = z
    }
    , function(t, e, n) {
        "use strict";
        var r = n(4)
          , i = n(25)
          , o = (n(1),
        {
            HOST: 0,
            COMPOSITE: 1,
            EMPTY: 2,
            getType: function(t) {
                return null === t || !1 === t ? o.EMPTY : i.isValidElement(t) ? "function" == typeof t.type ? o.COMPOSITE : o.HOST : void r("26", t)
            }
        });
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: function(t) {
                r.currentScrollLeft = t.x,
                r.currentScrollTop = t.y
            }
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return null == e && i("30"),
            null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e),
            t) : (t.push(e),
            t) : Array.isArray(e) ? [t].concat(e) : [t, e]
        }
        var i = n(4);
        n(1);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            for (var e; (e = t._renderedNodeType) === i.COMPOSITE; )
                t = t._renderedComponent;
            return e === i.HOST ? t._renderedComponent : e === i.EMPTY ? null : void 0
        }
        var i = n(113);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            return !o && i.canUseDOM && (o = "textContent"in document.documentElement ? "textContent" : "innerText"),
            o
        }
        var i = n(7)
          , o = null;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.type
              , n = t.nodeName;
            return n && "input" === n.toLowerCase() && ("checkbox" === e || "radio" === e)
        }
        function i(t) {
            return t._wrapperState.valueTracker
        }
        function o(t, e) {
            t._wrapperState.valueTracker = e
        }
        function s(t) {
            delete t._wrapperState.valueTracker
        }
        function a(t) {
            var e;
            return t && (e = r(t) ? "" + t.checked : t.value),
            e
        }
        var c = n(6)
          , u = {
            _getTrackerFromNode: function(t) {
                return i(c.getInstanceFromNode(t))
            },
            track: function(t) {
                if (!i(t)) {
                    var e = c.getNodeFromInstance(t)
                      , n = r(e) ? "checked" : "value"
                      , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n)
                      , u = "" + e[n];
                    e.hasOwnProperty(n) || "function" != typeof a.get || "function" != typeof a.set || (Object.defineProperty(e, n, {
                        enumerable: a.enumerable,
                        configurable: !0,
                        get: function() {
                            return a.get.call(this)
                        },
                        set: function(t) {
                            u = "" + t,
                            a.set.call(this, t)
                        }
                    }),
                    o(t, {
                        getValue: function() {
                            return u
                        },
                        setValue: function(t) {
                            u = "" + t
                        },
                        stopTracking: function() {
                            s(t),
                            delete e[n]
                        }
                    }))
                }
            },
            updateValueIfChanged: function(t) {
                if (!t)
                    return !1;
                var e = i(t);
                if (!e)
                    return u.track(t),
                    !0;
                var n = e.getValue()
                  , r = a(c.getNodeFromInstance(t));
                return r !== n && (e.setValue(r),
                !0)
            },
            stopTracking: function(t) {
                var e = i(t);
                e && e.stopTracking()
            }
        };
        t.exports = u
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (t) {
                var e = t.getName();
                if (e)
                    return " Check the render method of `" + e + "`."
            }
            return ""
        }
        function i(t) {
            return "function" == typeof t && void 0 !== t.prototype && "function" == typeof t.prototype.mountComponent && "function" == typeof t.prototype.receiveComponent
        }
        function o(t, e) {
            var n;
            if (null === t || !1 === t)
                n = u.create(o);
            else if ("object" == typeof t) {
                var a = t
                  , c = a.type;
                if ("function" != typeof c && "string" != typeof c) {
                    var h = "";
                    h += r(a._owner),
                    s("130", null == c ? c : typeof c, h)
                }
                "string" == typeof a.type ? n = l.createInternalComponent(a) : i(a.type) ? (n = new a.type(a),
                n.getHostNode || (n.getHostNode = n.getNativeNode)) : n = new p(a)
            } else
                "string" == typeof t || "number" == typeof t ? n = l.createInstanceForText(t) : s("131", typeof t);
            return n._mountIndex = 0,
            n._mountImage = null,
            n
        }
        var s = n(4)
          , a = n(5)
          , c = n(279)
          , u = n(108)
          , l = n(110)
          , p = (n(347),
        n(1),
        n(3),
        function(t) {
            this.construct(t)
        }
        );
        a(p.prototype, c, {
            _instantiateReactComponent: o
        }),
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t && t.nodeName && t.nodeName.toLowerCase();
            return "input" === e ? !!i[t.type] : "textarea" === e
        }
        var i = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(7)
          , i = n(46)
          , o = n(47)
          , s = function(t, e) {
            if (e) {
                var n = t.firstChild;
                if (n && n === t.lastChild && 3 === n.nodeType)
                    return void (n.nodeValue = e)
            }
            t.textContent = e
        };
        r.canUseDOM && ("textContent"in document.documentElement || (s = function(t, e) {
            if (3 === t.nodeType)
                return void (t.nodeValue = e);
            o(t, i(e))
        }
        )),
        t.exports = s
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t && "object" == typeof t && null != t.key ? u.escape(t.key) : e.toString(36)
        }
        function i(t, e, n, o) {
            var h = typeof t;
            if ("undefined" !== h && "boolean" !== h || (t = null),
            null === t || "string" === h || "number" === h || "object" === h && t.$$typeof === a)
                return n(o, t, "" === e ? l + r(t, 0) : e),
                1;
            var d, f, m = 0, g = "" === e ? l : e + p;
            if (Array.isArray(t))
                for (var y = 0; y < t.length; y++)
                    d = t[y],
                    f = g + r(d, y),
                    m += i(d, f, n, o);
            else {
                var v = c(t);
                if (v) {
                    var b, _ = v.call(t);
                    if (v !== t.entries)
                        for (var C = 0; !(b = _.next()).done; )
                            d = b.value,
                            f = g + r(d, C++),
                            m += i(d, f, n, o);
                    else
                        for (; !(b = _.next()).done; ) {
                            var w = b.value;
                            w && (d = w[1],
                            f = g + u.escape(w[0]) + p + r(d, 0),
                            m += i(d, f, n, o))
                        }
                } else if ("object" === h) {
                    var S = ""
                      , x = String(t);
                    s("31", "[object Object]" === x ? "object with keys {" + Object.keys(t).join(", ") + "}" : x, S)
                }
            }
            return m
        }
        function o(t, e, n) {
            return null == t ? 0 : i(t, "", e, n)
        }
        var s = n(4)
          , a = (n(15),
        n(294))
          , c = n(325)
          , u = (n(1),
        n(64))
          , l = (n(3),
        ".")
          , p = ":";
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function s(t, e) {
            var n = {};
            for (var r in t)
                e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }
        function a() {}
        function c(t, e) {
            var n = {
                run: function(r) {
                    try {
                        var i = t(e.getState(), r);
                        (i !== n.props || n.error) && (n.shouldComponentUpdate = !0,
                        n.props = i,
                        n.error = null)
                    } catch (t) {
                        n.shouldComponentUpdate = !0,
                        n.error = t
                    }
                }
            };
            return n
        }
        function u(t) {
            var e, u, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, h = l.getDisplayName, _ = void 0 === h ? function(t) {
                return "ConnectAdvanced(" + t + ")"
            }
            : h, C = l.methodName, w = void 0 === C ? "connectAdvanced" : C, S = l.renderCountProp, x = void 0 === S ? void 0 : S, k = l.shouldHandleStateChanges, E = void 0 === k || k, A = l.storeKey, T = void 0 === A ? "store" : A, O = l.withRef, I = void 0 !== O && O, P = s(l, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]), D = T + "Subscription", M = v++, N = (e = {},
            e[T] = g.a,
            e[D] = g.b,
            e), R = (u = {},
            u[D] = g.b,
            u);
            return function(e) {
                d()("function" == typeof e, "You must pass a component to the function returned by connect. Instead received " + JSON.stringify(e));
                var s = e.displayName || e.name || "Component"
                  , u = _(s)
                  , l = y({}, P, {
                    getDisplayName: _,
                    methodName: w,
                    renderCountProp: x,
                    shouldHandleStateChanges: E,
                    storeKey: T,
                    withRef: I,
                    displayName: u,
                    wrappedComponentName: s,
                    WrappedComponent: e
                })
                  , h = function(s) {
                    function p(t, e) {
                        r(this, p);
                        var n = i(this, s.call(this, t, e));
                        return n.version = M,
                        n.state = {},
                        n.renderCount = 0,
                        n.store = t[T] || e[T],
                        n.propsMode = Boolean(t[T]),
                        n.setWrappedInstance = n.setWrappedInstance.bind(n),
                        d()(n.store, 'Could not find "' + T + '" in either the context or props of "' + u + '". Either wrap the root component in a <Provider>, or explicitly pass "' + T + '" as a prop to "' + u + '".'),
                        n.initSelector(),
                        n.initSubscription(),
                        n
                    }
                    return o(p, s),
                    p.prototype.getChildContext = function() {
                        var t, e = this.propsMode ? null : this.subscription;
                        return t = {},
                        t[D] = e || this.context[D],
                        t
                    }
                    ,
                    p.prototype.componentDidMount = function() {
                        E && (this.subscription.trySubscribe(),
                        this.selector.run(this.props),
                        this.selector.shouldComponentUpdate && this.forceUpdate())
                    }
                    ,
                    p.prototype.componentWillReceiveProps = function(t) {
                        this.selector.run(t)
                    }
                    ,
                    p.prototype.shouldComponentUpdate = function() {
                        return this.selector.shouldComponentUpdate
                    }
                    ,
                    p.prototype.componentWillUnmount = function() {
                        this.subscription && this.subscription.tryUnsubscribe(),
                        this.subscription = null,
                        this.notifyNestedSubs = a,
                        this.store = null,
                        this.selector.run = a,
                        this.selector.shouldComponentUpdate = !1
                    }
                    ,
                    p.prototype.getWrappedInstance = function() {
                        return d()(I, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + w + "() call."),
                        this.wrappedInstance
                    }
                    ,
                    p.prototype.setWrappedInstance = function(t) {
                        this.wrappedInstance = t
                    }
                    ,
                    p.prototype.initSelector = function() {
                        var e = t(this.store.dispatch, l);
                        this.selector = c(e, this.store),
                        this.selector.run(this.props)
                    }
                    ,
                    p.prototype.initSubscription = function() {
                        if (E) {
                            var t = (this.propsMode ? this.props : this.context)[D];
                            this.subscription = new m.a(this.store,t,this.onStateChange.bind(this)),
                            this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
                        }
                    }
                    ,
                    p.prototype.onStateChange = function() {
                        this.selector.run(this.props),
                        this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate,
                        this.setState(b)) : this.notifyNestedSubs()
                    }
                    ,
                    p.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                        this.componentDidUpdate = void 0,
                        this.notifyNestedSubs()
                    }
                    ,
                    p.prototype.isSubscribed = function() {
                        return Boolean(this.subscription) && this.subscription.isSubscribed()
                    }
                    ,
                    p.prototype.addExtraProps = function(t) {
                        if (!(I || x || this.propsMode && this.subscription))
                            return t;
                        var e = y({}, t);
                        return I && (e.ref = this.setWrappedInstance),
                        x && (e[x] = this.renderCount++),
                        this.propsMode && this.subscription && (e[D] = this.subscription),
                        e
                    }
                    ,
                    p.prototype.render = function() {
                        var t = this.selector;
                        if (t.shouldComponentUpdate = !1,
                        t.error)
                            throw t.error;
                        return n.i(f.createElement)(e, this.addExtraProps(t.props))
                    }
                    ,
                    p
                }(f.Component);
                return h.WrappedComponent = e,
                h.displayName = u,
                h.childContextTypes = R,
                h.contextTypes = N,
                h.propTypes = N,
                p()(h, e)
            }
        }
        var l = n(194)
          , p = n.n(l)
          , h = n(195)
          , d = n.n(h)
          , f = n(9)
          , m = (n.n(f),
        n(337))
          , g = n(126);
        e.a = u;
        var y = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
          , v = 0
          , b = {}
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return function(e, n) {
                function r() {
                    return i
                }
                var i = t(e, n);
                return r.dependsOnOwnProps = !1,
                r
            }
        }
        function i(t) {
            return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps ? Boolean(t.dependsOnOwnProps) : 1 !== t.length
        }
        function o(t, e) {
            return function(e, n) {
                var r = (n.displayName,
                function(t, e) {
                    return r.dependsOnOwnProps ? r.mapToProps(t, e) : r.mapToProps(t)
                }
                );
                return r.dependsOnOwnProps = !0,
                r.mapToProps = function(e, n) {
                    r.mapToProps = t,
                    r.dependsOnOwnProps = i(t);
                    var o = r(e, n);
                    return "function" == typeof o && (r.mapToProps = o,
                    r.dependsOnOwnProps = i(o),
                    o = r(e, n)),
                    o
                }
                ,
                r
            }
        }
        n(127);
        e.b = r,
        e.a = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(101)
          , i = n.n(r);
        n.d(e, "b", function() {
            return o
        }),
        n.d(e, "a", function() {
            return s
        });
        var o = i.a.shape({
            trySubscribe: i.a.func.isRequired,
            tryUnsubscribe: i.a.func.isRequired,
            notifyNestedSubs: i.a.func.isRequired,
            isSubscribed: i.a.func.isRequired
        })
          , s = i.a.shape({
            subscribe: i.a.func.isRequired,
            dispatch: i.a.func.isRequired,
            getState: i.a.func.isRequired
        })
    }
    , function(t, e, n) {
        "use strict";
        n(56),
        n(76)
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            this.props = t,
            this.context = e,
            this.refs = u,
            this.updater = n || c
        }
        function i(t, e, n) {
            this.props = t,
            this.context = e,
            this.refs = u,
            this.updater = n || c
        }
        function o() {}
        var s = n(35)
          , a = n(5)
          , c = n(131)
          , u = (n(132),
        n(42));
        n(1),
        n(348);
        r.prototype.isReactComponent = {},
        r.prototype.setState = function(t, e) {
            "object" != typeof t && "function" != typeof t && null != t && s("85"),
            this.updater.enqueueSetState(this, t),
            e && this.updater.enqueueCallback(this, e, "setState")
        }
        ,
        r.prototype.forceUpdate = function(t) {
            this.updater.enqueueForceUpdate(this),
            t && this.updater.enqueueCallback(this, t, "forceUpdate")
        }
        ;
        o.prototype = r.prototype,
        i.prototype = new o,
        i.prototype.constructor = i,
        a(i.prototype, r.prototype),
        i.prototype.isPureReactComponent = !0,
        t.exports = {
            Component: r,
            PureComponent: i
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = Function.prototype.toString
              , n = Object.prototype.hasOwnProperty
              , r = RegExp("^" + e.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            try {
                var i = e.call(t);
                return r.test(i)
            } catch (t) {
                return !1
            }
        }
        function i(t) {
            var e = u(t);
            if (e) {
                var n = e.childIDs;
                l(t),
                n.forEach(i)
            }
        }
        function o(t, e, n) {
            return "\n    in " + (t || "Unknown") + (e ? " (at " + e.fileName.replace(/^.*[\\\/]/, "") + ":" + e.lineNumber + ")" : n ? " (created by " + n + ")" : "")
        }
        function s(t) {
            return null == t ? "#empty" : "string" == typeof t || "number" == typeof t ? "#text" : "string" == typeof t.type ? t.type : t.type.displayName || t.type.name || "Unknown"
        }
        function a(t) {
            var e, n = k.getDisplayName(t), r = k.getElement(t), i = k.getOwnerID(t);
            return i && (e = k.getDisplayName(i)),
            o(n, r && r._source, e)
        }
        var c, u, l, p, h, d, f, m = n(35), g = n(15), y = (n(1),
        n(3),
        "function" == typeof Array.from && "function" == typeof Map && r(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && r(Map.prototype.keys) && "function" == typeof Set && r(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && r(Set.prototype.keys));
        if (y) {
            var v = new Map
              , b = new Set;
            c = function(t, e) {
                v.set(t, e)
            }
            ,
            u = function(t) {
                return v.get(t)
            }
            ,
            l = function(t) {
                v.delete(t)
            }
            ,
            p = function() {
                return Array.from(v.keys())
            }
            ,
            h = function(t) {
                b.add(t)
            }
            ,
            d = function(t) {
                b.delete(t)
            }
            ,
            f = function() {
                return Array.from(b.keys())
            }
        } else {
            var _ = {}
              , C = {}
              , w = function(t) {
                return "." + t
            }
              , S = function(t) {
                return parseInt(t.substr(1), 10)
            };
            c = function(t, e) {
                var n = w(t);
                _[n] = e
            }
            ,
            u = function(t) {
                var e = w(t);
                return _[e]
            }
            ,
            l = function(t) {
                var e = w(t);
                delete _[e]
            }
            ,
            p = function() {
                return Object.keys(_).map(S)
            }
            ,
            h = function(t) {
                var e = w(t);
                C[e] = !0
            }
            ,
            d = function(t) {
                var e = w(t);
                delete C[e]
            }
            ,
            f = function() {
                return Object.keys(C).map(S)
            }
        }
        var x = []
          , k = {
            onSetChildren: function(t, e) {
                var n = u(t);
                n || m("144"),
                n.childIDs = e;
                for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                      , o = u(i);
                    o || m("140"),
                    null == o.childIDs && "object" == typeof o.element && null != o.element && m("141"),
                    o.isMounted || m("71"),
                    null == o.parentID && (o.parentID = t),
                    o.parentID !== t && m("142", i, o.parentID, t)
                }
            },
            onBeforeMountComponent: function(t, e, n) {
                c(t, {
                    element: e,
                    parentID: n,
                    text: null,
                    childIDs: [],
                    isMounted: !1,
                    updateCount: 0
                })
            },
            onBeforeUpdateComponent: function(t, e) {
                var n = u(t);
                n && n.isMounted && (n.element = e)
            },
            onMountComponent: function(t) {
                var e = u(t);
                e || m("144"),
                e.isMounted = !0,
                0 === e.parentID && h(t)
            },
            onUpdateComponent: function(t) {
                var e = u(t);
                e && e.isMounted && e.updateCount++
            },
            onUnmountComponent: function(t) {
                var e = u(t);
                if (e) {
                    e.isMounted = !1;
                    0 === e.parentID && d(t)
                }
                x.push(t)
            },
            purgeUnmountedComponents: function() {
                if (!k._preventPurging) {
                    for (var t = 0; t < x.length; t++) {
                        i(x[t])
                    }
                    x.length = 0
                }
            },
            isMounted: function(t) {
                var e = u(t);
                return !!e && e.isMounted
            },
            getCurrentStackAddendum: function(t) {
                var e = "";
                if (t) {
                    var n = s(t)
                      , r = t._owner;
                    e += o(n, t._source, r && r.getName())
                }
                var i = g.current
                  , a = i && i._debugID;
                return e += k.getStackAddendumByID(a)
            },
            getStackAddendumByID: function(t) {
                for (var e = ""; t; )
                    e += a(t),
                    t = k.getParentID(t);
                return e
            },
            getChildIDs: function(t) {
                var e = u(t);
                return e ? e.childIDs : []
            },
            getDisplayName: function(t) {
                var e = k.getElement(t);
                return e ? s(e) : null
            },
            getElement: function(t) {
                var e = u(t);
                return e ? e.element : null
            },
            getOwnerID: function(t) {
                var e = k.getElement(t);
                return e && e._owner ? e._owner._debugID : null
            },
            getParentID: function(t) {
                var e = u(t);
                return e ? e.parentID : null
            },
            getSource: function(t) {
                var e = u(t)
                  , n = e ? e.element : null;
                return null != n ? n._source : null
            },
            getText: function(t) {
                var e = k.getElement(t);
                return "string" == typeof e ? e : "number" == typeof e ? "" + e : null
            },
            getUpdateCount: function(t) {
                var e = u(t);
                return e ? e.updateCount : 0
            },
            getRootIDs: f,
            getRegisteredIDs: p,
            pushNonStandardWarningStack: function(t, e) {
                if ("function" == typeof console.reactStack) {
                    var n = []
                      , r = g.current
                      , i = r && r._debugID;
                    try {
                        for (t && n.push({
                            name: i ? k.getDisplayName(i) : null,
                            fileName: e ? e.fileName : null,
                            lineNumber: e ? e.lineNumber : null
                        }); i; ) {
                            var o = k.getElement(i)
                              , s = k.getParentID(i)
                              , a = k.getOwnerID(i)
                              , c = a ? k.getDisplayName(a) : null
                              , u = o && o._source;
                            n.push({
                                name: c,
                                fileName: u ? u.fileName : null,
                                lineNumber: u ? u.lineNumber : null
                            }),
                            i = s
                        }
                    } catch (t) {}
                    console.reactStack(n)
                }
            },
            popNonStandardWarningStack: function() {
                "function" == typeof console.reactStackEnd && console.reactStackEnd()
            }
        };
        t.exports = k
    }
    , function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = (n(3),
        {
            isMounted: function(t) {
                return !1
            },
            enqueueCallback: function(t, e) {},
            enqueueForceUpdate: function(t) {},
            enqueueReplaceState: function(t, e) {},
            enqueueSetState: function(t, e) {}
        });
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = !1;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ActionsObservable = void 0;
        var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n),
                r && t(e, r),
                e
            }
        }()
          , a = n(0)
          , c = n(151)
          , u = n(149)
          , l = n(152);
        e.ActionsObservable = function(t) {
            function e(t) {
                r(this, e);
                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n.source = t,
                n
            }
            return o(e, t),
            s(e, null, [{
                key: "of",
                value: function() {
                    return new this(c.of.apply(void 0, arguments))
                }
            }, {
                key: "from",
                value: function(t, e) {
                    return new this((0,
                    u.from)(t, e))
                }
            }]),
            s(e, [{
                key: "lift",
                value: function(t) {
                    var n = new e(this);
                    return n.operator = t,
                    n
                }
            }, {
                key: "ofType",
                value: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    return l.filter.call(this, function(t) {
                        var n = t.type
                          , r = e.length;
                        if (1 === r)
                            return n === e[0];
                        for (var i = 0; i < r; i++)
                            if (e[i] === n)
                                return !0;
                        return !1
                    })
                }
            }]),
            e
        }(a.Observable)
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.EPIC_END = "@@redux-observable/EPIC_END"
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return 0 === e.length ? function(t) {
                return t
            }
            : 1 === e.length ? e[0] : e.reduce(function(t, e) {
                return function() {
                    return t(e.apply(void 0, arguments))
                }
            })
        }
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, o) {
            function c() {
                v === y && (v = y.slice())
            }
            function u() {
                return g
            }
            function l(t) {
                if ("function" != typeof t)
                    throw new Error("Expected listener to be a function.");
                var e = !0;
                return c(),
                v.push(t),
                function() {
                    if (e) {
                        e = !1,
                        c();
                        var n = v.indexOf(t);
                        v.splice(n, 1)
                    }
                }
            }
            function p(t) {
                if (!n.i(i.a)(t))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === t.type)
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (b)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    b = !0,
                    g = m(g, t)
                } finally {
                    b = !1
                }
                for (var e = y = v, r = 0; r < e.length; r++) {
                    (0,
                    e[r])()
                }
                return t
            }
            function h(t) {
                if ("function" != typeof t)
                    throw new Error("Expected the nextReducer to be a function.");
                m = t,
                p({
                    type: a.INIT
                })
            }
            function d() {
                var t, e = l;
                return t = {
                    subscribe: function(t) {
                        function n() {
                            t.next && t.next(u())
                        }
                        if ("object" != typeof t)
                            throw new TypeError("Expected the observer to be an object.");
                        return n(),
                        {
                            unsubscribe: e(n)
                        }
                    }
                },
                t[s.a] = function() {
                    return this
                }
                ,
                t
            }
            var f;
            if ("function" == typeof e && void 0 === o && (o = e,
            e = void 0),
            void 0 !== o) {
                if ("function" != typeof o)
                    throw new Error("Expected the enhancer to be a function.");
                return o(r)(t, e)
            }
            if ("function" != typeof t)
                throw new Error("Expected the reducer to be a function.");
            var m = t
              , g = e
              , y = []
              , v = y
              , b = !1;
            return p({
                type: a.INIT
            }),
            f = {
                dispatch: p,
                subscribe: l,
                getState: u,
                replaceReducer: h
            },
            f[s.a] = d,
            f
        }
        var i = n(56)
          , o = n(417)
          , s = n.n(o);
        n.d(e, "a", function() {
            return a
        }),
        e.b = r;
        var a = {
            INIT: "@@redux/INIT"
        }
    }
    , function(t, e, n) {
        "use strict"
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = function() {
            function t(t, e, n) {
                this.kind = t,
                this.value = e,
                this.error = n,
                this.hasValue = "N" === t
            }
            return t.prototype.observe = function(t) {
                switch (this.kind) {
                case "N":
                    return t.next && t.next(this.value);
                case "E":
                    return t.error && t.error(this.error);
                case "C":
                    return t.complete && t.complete()
                }
            }
            ,
            t.prototype.do = function(t, e, n) {
                switch (this.kind) {
                case "N":
                    return t && t(this.value);
                case "E":
                    return e && e(this.error);
                case "C":
                    return n && n()
                }
            }
            ,
            t.prototype.accept = function(t, e, n) {
                return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
            }
            ,
            t.prototype.toObservable = function() {
                switch (this.kind) {
                case "N":
                    return r.Observable.of(this.value);
                case "E":
                    return r.Observable.throw(this.error);
                case "C":
                    return r.Observable.empty()
                }
                throw new Error("unexpected notification kind value")
            }
            ,
            t.createNext = function(e) {
                return void 0 !== e ? new t("N",e) : t.undefinedValueNotification
            }
            ,
            t.createError = function(e) {
                return new t("E",void 0,e)
            }
            ,
            t.createComplete = function() {
                return t.completeNotification
            }
            ,
            t.completeNotification = new t("C"),
            t.undefinedValueNotification = new t("N",void 0),
            t
        }();
        e.Notification = i
    }
    , function(t, e, n) {
        "use strict";
        e.empty = {
            closed: !0,
            next: function(t) {},
            error: function(t) {
                throw t
            },
            complete: function() {}
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(389);
        r.Observable.empty = i.empty
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(151);
        r.Observable.of = i.of
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(393);
        r.Observable.prototype.catch = i._catch,
        r.Observable.prototype._catch = i._catch
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(396);
        r.Observable.prototype.delay = i.delay
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(397);
        r.Observable.prototype.do = i._do,
        r.Observable.prototype._do = i._do
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(152);
        r.Observable.prototype.filter = i.filter
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(78);
        r.Observable.prototype.map = i.map
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(399);
        r.Observable.prototype.mergeMap = i.mergeMap,
        r.Observable.prototype.flatMap = i.mergeMap
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(0)
          , o = function(t) {
            function e(e, n) {
                t.call(this),
                this.value = e,
                this.scheduler = n,
                this._isScalar = !0,
                n && (this._isScalar = !1)
            }
            return r(e, t),
            e.create = function(t, n) {
                return new e(t,n)
            }
            ,
            e.dispatch = function(t) {
                var e = t.done
                  , n = t.value
                  , r = t.subscriber;
                if (e)
                    return void r.complete();
                r.next(n),
                r.closed || (t.done = !0,
                this.schedule(t))
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this.value
                  , r = this.scheduler;
                if (r)
                    return r.schedule(e.dispatch, 0, {
                        done: !1,
                        value: n,
                        subscriber: t
                    });
                t.next(n),
                t.closed || t.complete()
            }
            ,
            e
        }(i.Observable);
        e.ScalarObservable = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(382);
        e.from = r.FromObservable.create
    }
    , function(t, e, n) {
        "use strict";
        var r = n(153);
        e.merge = r.mergeStatic
    }
    , function(t, e, n) {
        "use strict";
        var r = n(48);
        e.of = r.ArrayObservable.of
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return this.lift(new s(t,e))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(8);
        e.filter = r;
        var s = function() {
            function t(t, e) {
                this.predicate = t,
                this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new a(t,this.predicate,this.thisArg))
            }
            ,
            t
        }()
          , a = function(t) {
            function e(e, n, r) {
                t.call(this, e),
                this.predicate = n,
                this.thisArg = r,
                this.count = 0
            }
            return i(e, t),
            e.prototype._next = function(t) {
                var e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                e && this.destination.next(t)
            }
            ,
            e
        }(o.Subscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e - 0] = arguments[e];
            return this.lift.call(i.apply(void 0, [this].concat(t)))
        }
        function i() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e - 0] = arguments[e];
            var n = Number.POSITIVE_INFINITY
              , r = null
              , i = t[t.length - 1];
            return c.isScheduler(i) ? (r = t.pop(),
            t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof i && (n = t.pop()),
            null === r && 1 === t.length && t[0]instanceof o.Observable ? t[0] : new s.ArrayObservable(t,r).lift(new a.MergeAllOperator(n))
        }
        var o = n(0)
          , s = n(48)
          , a = n(398)
          , c = n(158);
        e.merge = r,
        e.mergeStatic = i
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = function(t) {
            function e() {
                var e = t.call(this, "object unsubscribed");
                this.name = e.name = "ObjectUnsubscribedError",
                this.stack = e.stack,
                this.message = e.message
            }
            return r(e, t),
            e
        }(Error);
        e.ObjectUnsubscribedError = i
    }
    , function(t, e, n) {
        "use strict";
        e.isArrayLike = function(t) {
            return t && "number" == typeof t.length
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return null != t && "object" == typeof t
        }
        e.isObject = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        e.isPromise = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t && "function" == typeof t.schedule
        }
        e.isScheduler = r
    }
    , function(t, e) {
        t.exports = /[\0-\x1F\x7F-\x9F]/
    }
    , function(t, e) {
        t.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
    }
    , function(t, e) {
        t.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
    }
    , function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}
            ,
            t.paths = [],
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }),
            Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }),
            t.webpackPolyfill = 1),
            t
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(9)
          , o = n(59)
          , s = n(21)
          , a = n(29);
        e.App = function(t, e) {
            a.log("BotChat.App props", t),
            o.render(i.createElement(c, t), e)
        }
        ;
        var c = function(t) {
            return i.createElement("div", {
                className: "wc-app"
            }, i.createElement(s.Chat, r.__assign({}, t)))
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t
        }();
        e.SpeechOptions = r
    }
    , function(t, e) {
        t.exports = {
            supportsInteractivity: !0,
            spacing: {
                small: 4,
                default: 8,
                medium: 16,
                large: 24,
                extraLarge: 32,
                padding: 8
            },
            separator: {
                lineThickness: 1,
                lineColor: "#cccccc"
            },
            fontFamily: '"Segoe UI", sans-serif',
            fontSizes: {
                small: 12,
                default: 13,
                medium: 15,
                large: 17,
                extraLarge: 19
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 700
            },
            containerStyles: {
                default: {
                    backgroundColor: "#00000000",
                    foregroundColors: {
                        default: {
                            default: "#000000",
                            subtle: "#808c95"
                        },
                        accent: {
                            default: "#2e89fc",
                            subtle: "#802E8901"
                        },
                        attention: {
                            default: "#ffd800",
                            subtle: "#CCFFD800"
                        },
                        good: {
                            default: "#00ff00",
                            subtle: "#CC00FF00"
                        },
                        warning: {
                            default: "#ff0000",
                            subtle: "#CCFF0000"
                        }
                    }
                },
                emphasis: {
                    backgroundColor: "#08000000",
                    foregroundColors: {
                        default: {
                            default: "#333333",
                            subtle: "#EE333333"
                        },
                        accent: {
                            default: "#2e89fc",
                            subtle: "#882E89FC"
                        },
                        attention: {
                            default: "#cc3300",
                            subtle: "#DDCC3300"
                        },
                        good: {
                            default: "#54a254",
                            subtle: "#DD54A254"
                        },
                        warning: {
                            default: "#e69500",
                            subtle: "#DDE69500"
                        }
                    }
                }
            },
            imageSizes: {
                small: 40,
                medium: 80,
                large: 160
            },
            actions: {
                maxActions: 100,
                spacing: "default",
                buttonSpacing: 8,
                showCard: {
                    actionMode: "inline",
                    inlineTopMargin: 8
                },
                actionsOrientation: "vertical",
                actionAlignment: "stretch"
            },
            adaptiveCard: {
                allowCustomStyle: !1
            },
            imageSet: {
                imageSize: "medium",
                maxImageHeight: 100
            },
            factSet: {
                title: {
                    color: "default",
                    size: "default",
                    isSubtle: !1,
                    weight: "bolder",
                    wrap: !0,
                    maxWidth: 150
                },
                value: {
                    color: "default",
                    size: "default",
                    isSubtle: !1,
                    weight: "default",
                    wrap: !0
                },
                spacing: 8
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            for (var n in t)
                e.hasOwnProperty(n) || (e[n] = t[n])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        r(n(167)),
        r(n(39)),
        r(n(85));
        var i = n(53);
        e.getEnumValueOrDefault = i.getEnumValueOrDefault
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            t && t.setCollection(e)
        }
        function i(t, e) {
            if (e)
                for (var n = 0; n < e.length; n++)
                    if (t.getJsonTypeName() === e[n])
                        return !1;
            return !0
        }
        function o(t) {
            var e = t.type
              , n = X.actionTypeRegistry.createInstance(e);
            return n ? n.parse(t) : p({
                error: d.ValidationError.UnknownActionType,
                message: "Unknown action type: " + e
            }),
            n
        }
        function s(t, e) {
            var n = t.getRootElement()
              , r = n && n.onAnchorClicked ? n.onAnchorClicked : X.onAnchorClicked;
            return null != r && r(n, e)
        }
        function a(t) {
            var e = t.parent.getRootElement()
              , n = e && e.onExecuteAction ? e.onExecuteAction : X.onExecuteAction;
            n && (t.prepare(t.parent.getRootElement().getAllInputs()),
            n(t))
        }
        function c(t, e) {
            var n = t.parent.getRootElement()
              , r = n && n.onInlineCardExpanded ? n.onInlineCardExpanded : X.onInlineCardExpanded;
            r && r(t, e)
        }
        function u(t, e) {
            void 0 === e && (e = !0);
            var n = t.getRootElement();
            e && n.updateLayout();
            var r = n
              , i = r && r.onElementVisibilityChanged ? r.onElementVisibilityChanged : X.onElementVisibilityChanged;
            null != i && i(t)
        }
        function l(t, e) {
            var n = t.getRootElement()
              , r = n && n.onParseElement ? n.onParseElement : X.onParseElement;
            null != r && r(t, e)
        }
        function p(t) {
            null != X.onParseError && X.onParseError(t)
        }
        var h = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var d = n(39)
          , f = n(53)
          , m = n(85)
          , g = n(168);
        e.createActionInstance = o;
        var y = function() {
            function t(t, e, n, r) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                void 0 === r && (r = 0),
                this.left = 0,
                this.top = 0,
                this.right = 0,
                this.bottom = 0,
                this.top = t,
                this.right = e,
                this.bottom = n,
                this.left = r
            }
            return t
        }();
        e.SpacingDefinition = y;
        var v = function() {
            function t(t, e, n, r) {
                void 0 === t && (t = d.Spacing.None),
                void 0 === e && (e = d.Spacing.None),
                void 0 === n && (n = d.Spacing.None),
                void 0 === r && (r = d.Spacing.None),
                this.top = d.Spacing.None,
                this.right = d.Spacing.None,
                this.bottom = d.Spacing.None,
                this.left = d.Spacing.None,
                this.top = t,
                this.right = e,
                this.bottom = n,
                this.left = r
            }
            return t.prototype.toSpacingDefinition = function(t) {
                return new y(t.getEffectiveSpacing(this.top),t.getEffectiveSpacing(this.right),t.getEffectiveSpacing(this.bottom),t.getEffectiveSpacing(this.left))
            }
            ,
            t
        }();
        e.PaddingDefinition = v;
        var b = function() {
            function t() {
                this._lang = void 0,
                this._hostConfig = null,
                this._internalPadding = null,
                this._parent = null,
                this._renderedElement = null,
                this._separatorElement = null,
                this._isVisible = !0,
                this._truncatedDueToOverflow = !1,
                this._defaultRenderedElementDisplayMode = null,
                this._padding = null,
                this.horizontalAlignment = null,
                this.spacing = d.Spacing.Default,
                this.separator = !1,
                this.height = "auto"
            }
            return t.prototype.internalRenderSeparator = function() {
                return f.renderSeparation({
                    spacing: this.hostConfig.getEffectiveSpacing(this.spacing),
                    lineThickness: this.separator ? this.hostConfig.separator.lineThickness : null,
                    lineColor: this.separator ? this.hostConfig.separator.lineColor : null
                }, this.separatorOrientation)
            }
            ,
            t.prototype.updateRenderedElementVisibility = function() {
                this._renderedElement && (this._renderedElement.style.display = this._isVisible ? this._defaultRenderedElementDisplayMode : "none"),
                this._separatorElement && (this._separatorElement.style.display = this._isVisible ? this._defaultRenderedElementDisplayMode : "none")
            }
            ,
            t.prototype.hideElementDueToOverflow = function() {
                this._renderedElement && this._isVisible && (this._renderedElement.style.visibility = "hidden",
                this._isVisible = !1,
                u(this, !1))
            }
            ,
            t.prototype.showElementHiddenDueToOverflow = function() {
                this._renderedElement && !this._isVisible && (this._renderedElement.style.visibility = null,
                this._isVisible = !0,
                u(this, !1))
            }
            ,
            t.prototype.handleOverflow = function(t) {
                if (this.isVisible || this.isHiddenDueToOverflow()) {
                    var e = this.truncateOverflow(t);
                    this._truncatedDueToOverflow = e || this._truncatedDueToOverflow,
                    e ? e && !this._isVisible && this.showElementHiddenDueToOverflow() : this.hideElementDueToOverflow()
                }
            }
            ,
            t.prototype.resetOverflow = function() {
                var t = !1;
                return this._truncatedDueToOverflow && (this.undoOverflowTruncation(),
                this._truncatedDueToOverflow = !1,
                t = !0),
                this.isHiddenDueToOverflow && this.showElementHiddenDueToOverflow(),
                t
            }
            ,
            t.prototype.internalGetNonZeroPadding = function(t, e, n, r, i) {
                void 0 === e && (e = !0),
                void 0 === n && (n = !0),
                void 0 === r && (r = !0),
                void 0 === i && (i = !0),
                e && t.top == d.Spacing.None && (t.top = this.internalPadding.top),
                n && t.right == d.Spacing.None && (t.right = this.internalPadding.right),
                r && t.bottom == d.Spacing.None && (t.bottom = this.internalPadding.bottom),
                i && t.left == d.Spacing.None && (t.left = this.internalPadding.left),
                this.parent && this.parent.internalGetNonZeroPadding(t, e && this.isAtTheVeryTop(), n && this.isAtTheVeryRight(), r && this.isAtTheVeryBottom(), i && this.isAtTheVeryLeft())
            }
            ,
            t.prototype.adjustRenderedElementSize = function(t) {
                "auto" === this.height ? t.style.flex = "0 0 auto" : t.style.flex = "1 1 100%"
            }
            ,
            t.prototype.showBottomSpacer = function(t) {
                this.parent && this.parent.showBottomSpacer(t)
            }
            ,
            t.prototype.hideBottomSpacer = function(t) {
                this.parent && this.parent.hideBottomSpacer(t)
            }
            ,
            t.prototype.truncateOverflow = function(t) {
                return !1
            }
            ,
            t.prototype.undoOverflowTruncation = function() {}
            ,
            Object.defineProperty(t.prototype, "useDefaultSizing", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "allowCustomPadding", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "defaultPadding", {
                get: function() {
                    return new v
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "internalPadding", {
                get: function() {
                    return this._padding ? this._padding : this._internalPadding && this.allowCustomPadding ? this._internalPadding : this.defaultPadding
                },
                set: function(t) {
                    this._internalPadding = t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "separatorOrientation", {
                get: function() {
                    return d.Orientation.Horizontal
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.getPadding = function() {
                return this._padding
            }
            ,
            t.prototype.setPadding = function(t) {
                this._padding = t,
                this._padding && (X.useAutomaticContainerBleeding = !1)
            }
            ,
            t.prototype.setParent = function(t) {
                this._parent = t
            }
            ,
            t.prototype.getNonZeroPadding = function() {
                var t = new v;
                return this.internalGetNonZeroPadding(t),
                t
            }
            ,
            t.prototype.getForbiddenElementTypes = function() {
                return null
            }
            ,
            t.prototype.getForbiddenActionTypes = function() {
                return null
            }
            ,
            t.prototype.parse = function(t) {
                l(this, t),
                this.id = t.id,
                this.speak = t.speak,
                this.horizontalAlignment = f.getEnumValueOrDefault(d.HorizontalAlignment, t.horizontalAlignment, null),
                this.spacing = f.getEnumValueOrDefault(d.Spacing, t.spacing, d.Spacing.Default),
                this.separator = t.separator;
                var e = t.separation;
                void 0 !== e && ("none" === e ? (this.spacing = d.Spacing.None,
                this.separator = !1) : "strong" === e ? (this.spacing = d.Spacing.Large,
                this.separator = !0) : "default" === e && (this.spacing = d.Spacing.Default,
                this.separator = !1),
                p({
                    error: d.ValidationError.Deprecated,
                    message: 'The "separation" property is deprecated and will be removed. Use the "spacing" and "separator" properties instead.'
                }));
                var n = t.height;
                "auto" !== n && "stretch" !== n || (this.height = n)
            }
            ,
            t.prototype.validate = function() {
                return []
            }
            ,
            t.prototype.render = function() {
                return this._renderedElement = this.internalRender(),
                this._separatorElement = this.internalRenderSeparator(),
                this._renderedElement && (this._renderedElement.style.boxSizing = "border-box",
                this._defaultRenderedElementDisplayMode = this._renderedElement.style.display,
                this.adjustRenderedElementSize(this._renderedElement),
                this.updateLayout(!1),
                this.updateRenderedElementVisibility()),
                this._renderedElement
            }
            ,
            t.prototype.updateLayout = function(t) {
                void 0 === t && (t = !0)
            }
            ,
            t.prototype.isRendered = function() {
                return this._renderedElement && this._renderedElement.offsetHeight > 0
            }
            ,
            t.prototype.isAtTheVeryTop = function() {
                return !this.parent || this.parent.isFirstElement(this) && this.parent.isAtTheVeryTop()
            }
            ,
            t.prototype.isFirstElement = function(t) {
                return !0
            }
            ,
            t.prototype.isAtTheVeryBottom = function() {
                return !this.parent || this.parent.isLastElement(this) && this.parent.isAtTheVeryBottom()
            }
            ,
            t.prototype.isLastElement = function(t) {
                return !0
            }
            ,
            t.prototype.isAtTheVeryLeft = function() {
                return !this.parent || this.parent.isLeftMostElement(this) && this.parent.isAtTheVeryLeft()
            }
            ,
            t.prototype.isLeftMostElement = function(t) {
                return !0
            }
            ,
            t.prototype.isAtTheVeryRight = function() {
                return !this.parent || this.parent.isRightMostElement(this) && this.parent.isAtTheVeryRight()
            }
            ,
            t.prototype.isRightMostElement = function(t) {
                return !0
            }
            ,
            t.prototype.isHiddenDueToOverflow = function() {
                return this._renderedElement && "hidden" == this._renderedElement.style.visibility
            }
            ,
            t.prototype.canContentBleed = function() {
                return !this.parent || this.parent.canContentBleed()
            }
            ,
            t.prototype.getRootElement = function() {
                for (var t = this; t.parent; )
                    t = t.parent;
                return t
            }
            ,
            t.prototype.getParentContainer = function() {
                for (var t = this.parent; t; ) {
                    if (t instanceof H)
                        return t;
                    t = t.parent
                }
                return null
            }
            ,
            t.prototype.getAllInputs = function() {
                return []
            }
            ,
            t.prototype.getElementById = function(t) {
                return this.id === t ? this : null
            }
            ,
            t.prototype.getActionById = function(t) {
                return null
            }
            ,
            Object.defineProperty(t.prototype, "lang", {
                get: function() {
                    return this._lang ? this._lang : this.parent ? this.parent.lang : void 0
                },
                set: function(t) {
                    if (t && "" != t) {
                        if (!/^[a-z]{2,3}$/gi.exec(t))
                            throw new Error("Invalid language identifier: " + t)
                    }
                    this._lang = t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "hostConfig", {
                get: function() {
                    return this._hostConfig ? this._hostConfig : this.parent ? this.parent.hostConfig : tt
                },
                set: function(t) {
                    this._hostConfig = t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isInteractive", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isStandalone", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "parent", {
                get: function() {
                    return this._parent
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isVisible", {
                get: function() {
                    return this._isVisible
                },
                set: function(t) {
                    X.useAdvancedCardBottomTruncation && !t && this.undoOverflowTruncation(),
                    this._isVisible != t && (this._isVisible = t,
                    this.updateRenderedElementVisibility(),
                    this._renderedElement && u(this))
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "renderedElement", {
                get: function() {
                    return this._renderedElement
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "separatorElement", {
                get: function() {
                    return this._separatorElement
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }();
        e.CardElement = b;
        var _ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.size = d.TextSize.Default,
                e.weight = d.TextWeight.Default,
                e.color = d.TextColor.Default,
                e.isSubtle = !1,
                e.wrap = !1,
                e.useMarkdown = !0,
                e
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                var t = this;
                if (f.isNullOrEmpty(this.text))
                    return null;
                var e = document.createElement("div");
                switch (e.style.overflow = "hidden",
                this.hostConfig.fontFamily && (e.style.fontFamily = this.hostConfig.fontFamily),
                this.horizontalAlignment) {
                case d.HorizontalAlignment.Center:
                    e.style.textAlign = "center";
                    break;
                case d.HorizontalAlignment.Right:
                    e.style.textAlign = "right";
                    break;
                default:
                    e.style.textAlign = "left"
                }
                var n;
                switch (this.size) {
                case d.TextSize.Small:
                    n = this.hostConfig.fontSizes.small;
                    break;
                case d.TextSize.Medium:
                    n = this.hostConfig.fontSizes.medium;
                    break;
                case d.TextSize.Large:
                    n = this.hostConfig.fontSizes.large;
                    break;
                case d.TextSize.ExtraLarge:
                    n = this.hostConfig.fontSizes.extraLarge;
                    break;
                default:
                    n = this.hostConfig.fontSizes.default
                }
                this._computedLineHeight = 1.33 * n,
                e.style.fontSize = n + "px",
                e.style.lineHeight = this._computedLineHeight + "px";
                var r, i = this.getParentContainer(), o = this.hostConfig.containerStyles.getStyleByName(i ? i.style : d.ContainerStyle.Default, this.hostConfig.containerStyles.default), a = this.color ? this.color : d.TextColor.Default;
                switch (a) {
                case d.TextColor.Accent:
                    r = o.foregroundColors.accent;
                    break;
                case d.TextColor.Dark:
                    r = o.foregroundColors.dark;
                    break;
                case d.TextColor.Light:
                    r = o.foregroundColors.light;
                    break;
                case d.TextColor.Good:
                    r = o.foregroundColors.good;
                    break;
                case d.TextColor.Warning:
                    r = o.foregroundColors.warning;
                    break;
                case d.TextColor.Attention:
                    r = o.foregroundColors.attention;
                    break;
                default:
                    r = o.foregroundColors.default
                }
                e.style.color = f.stringToCssColor(this.isSubtle ? r.subtle : r.default);
                var c;
                switch (this.weight) {
                case d.TextWeight.Lighter:
                    c = this.hostConfig.fontWeights.lighter;
                    break;
                case d.TextWeight.Bolder:
                    c = this.hostConfig.fontWeights.bolder;
                    break;
                default:
                    c = this.hostConfig.fontWeights.default
                }
                e.style.fontWeight = c.toString();
                var u = g.formatText(this.lang, this.text);
                if (e.innerHTML = this.useMarkdown ? X.processMarkdown(u) : u,
                e.firstElementChild instanceof HTMLElement) {
                    var l = e.firstElementChild;
                    l.style.marginTop = "0px",
                    l.style.width = "100%",
                    this.wrap || (l.style.overflow = "hidden",
                    l.style.textOverflow = "ellipsis")
                }
                e.lastElementChild instanceof HTMLElement && (e.lastElementChild.style.marginBottom = "0px");
                for (var p = e.getElementsByTagName("a"), h = 0; h < p.length; h++) {
                    var m = p[h];
                    m.classList.add("ac-anchor"),
                    m.target = "_blank",
                    m.onclick = function(e) {
                        s(t, e.target) && e.preventDefault()
                    }
                }
                return this.wrap ? (e.style.wordWrap = "break-word",
                this.maxLines > 0 && (e.style.maxHeight = this._computedLineHeight * this.maxLines + "px",
                e.style.overflow = "hidden")) : (e.style.whiteSpace = "nowrap",
                e.style.textOverflow = "ellipsis"),
                (X.useAdvancedTextBlockTruncation || X.useAdvancedCardBottomTruncation) && (this._originalInnerHtml = e.innerHTML),
                e
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.text = e.text;
                var n = e.size;
                n && "string" == typeof n && "normal" === n.toLowerCase() ? (this.size = d.TextSize.Default,
                p({
                    error: d.ValidationError.Deprecated,
                    message: 'The TextBlock.size value "normal" is deprecated and will be removed. Use "default" instead.'
                })) : this.size = f.getEnumValueOrDefault(d.TextSize, n, this.size);
                var r = e.weight;
                r && "string" == typeof r && "normal" === r.toLowerCase() ? (this.weight = d.TextWeight.Default,
                p({
                    error: d.ValidationError.Deprecated,
                    message: 'The TextBlock.weight value "normal" is deprecated and will be removed. Use "default" instead.'
                })) : this.weight = f.getEnumValueOrDefault(d.TextWeight, r, this.weight),
                this.color = f.getEnumValueOrDefault(d.TextColor, e.color, this.color),
                this.isSubtle = e.isSubtle,
                this.wrap = void 0 !== e.wrap && e.wrap,
                this.maxLines = e.maxLines
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "TextBlock"
            }
            ,
            e.prototype.renderSpeech = function() {
                return null != this.speak ? this.speak + "\n" : this.text ? "<s>" + this.text + "</s>\n" : null
            }
            ,
            e.prototype.updateLayout = function(t) {
                if (void 0 === t && (t = !1),
                X.useAdvancedTextBlockTruncation && this.maxLines && this.isRendered()) {
                    this.restoreOriginalContent();
                    var e = this._computedLineHeight * this.maxLines;
                    this.truncateIfSupported(e)
                }
            }
            ,
            e.prototype.truncateOverflow = function(t) {
                return t >= this._computedLineHeight && this.truncateIfSupported(t)
            }
            ,
            e.prototype.undoOverflowTruncation = function() {
                if (this.restoreOriginalContent(),
                X.useAdvancedTextBlockTruncation && this.maxLines) {
                    var t = this._computedLineHeight * this.maxLines;
                    this.truncateIfSupported(t)
                }
            }
            ,
            e.prototype.restoreOriginalContent = function() {
                var t = this.maxLines ? this._computedLineHeight * this.maxLines + "px" : null;
                this.renderedElement.style.maxHeight = t,
                this.renderedElement.innerHTML = this._originalInnerHtml
            }
            ,
            e.prototype.truncateIfSupported = function(t) {
                var e = this.renderedElement.children
                  , n = !e.length;
                if (n || 1 == e.length && "p" == e[0].tagName.toLowerCase()) {
                    var r = n ? this.renderedElement : e[0];
                    return f.truncate(r, t, this._computedLineHeight),
                    !0
                }
                return !1
            }
            ,
            e
        }(b);
        e.TextBlock = _;
        var C = function() {
            function t() {}
            return t.prototype.renderSpeech = function() {
                return null != this.speak ? this.speak + "\n" : "<s>" + this.name + " " + this.value + "</s>\n"
            }
            ,
            t
        }();
        e.Fact = C;
        var w = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.facts = [],
                e
            }
            return h(e, t),
            Object.defineProperty(e.prototype, "useDefaultSizing", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.internalRender = function() {
                var t = null;
                if (this.facts.length > 0) {
                    t = document.createElement("table"),
                    t.style.borderWidth = "0px",
                    t.style.borderSpacing = "0px",
                    t.style.borderStyle = "none",
                    t.style.borderCollapse = "collapse",
                    t.style.display = "block",
                    t.style.overflow = "hidden";
                    for (var e = 0; e < this.facts.length; e++) {
                        var n = document.createElement("tr");
                        e > 0 && (n.style.marginTop = this.hostConfig.factSet.spacing + "px");
                        var r = document.createElement("td");
                        r.style.padding = "0",
                        this.hostConfig.factSet.title.maxWidth && (r.style.maxWidth = this.hostConfig.factSet.title.maxWidth + "px"),
                        r.style.verticalAlign = "top";
                        var i = new _;
                        i.hostConfig = this.hostConfig,
                        i.text = this.facts[e].name,
                        i.size = this.hostConfig.factSet.title.size,
                        i.color = this.hostConfig.factSet.title.color,
                        i.isSubtle = this.hostConfig.factSet.title.isSubtle,
                        i.weight = this.hostConfig.factSet.title.weight,
                        i.wrap = this.hostConfig.factSet.title.wrap,
                        i.spacing = d.Spacing.None,
                        f.appendChild(r, i.render()),
                        f.appendChild(n, r),
                        r = document.createElement("td"),
                        r.style.padding = "0px 0px 0px 10px",
                        r.style.verticalAlign = "top",
                        i = new _,
                        i.hostConfig = this.hostConfig,
                        i.text = this.facts[e].value,
                        i.size = this.hostConfig.factSet.value.size,
                        i.color = this.hostConfig.factSet.value.color,
                        i.isSubtle = this.hostConfig.factSet.value.isSubtle,
                        i.weight = this.hostConfig.factSet.value.weight,
                        i.wrap = this.hostConfig.factSet.value.wrap,
                        i.spacing = d.Spacing.None,
                        f.appendChild(r, i.render()),
                        f.appendChild(n, r),
                        f.appendChild(t, n)
                    }
                }
                return t
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "FactSet"
            }
            ,
            e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e),
                null != e.facts) {
                    var n = e.facts;
                    this.facts = [];
                    for (var r = 0; r < n.length; r++) {
                        var i = new C;
                        i.name = n[r].title,
                        i.value = n[r].value,
                        i.speak = n[r].speak,
                        this.facts.push(i)
                    }
                }
            }
            ,
            e.prototype.renderSpeech = function() {
                if (null != this.speak)
                    return this.speak + "\n";
                var t = null;
                if (this.facts.length > 0) {
                    t = "";
                    for (var e = 0; e < this.facts.length; e++) {
                        var n = this.facts[e].renderSpeech();
                        n && (t += n)
                    }
                }
                return "<p>" + t + "\n</p>\n"
            }
            ,
            e
        }(b);
        e.FactSet = w;
        var S = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.style = d.ImageStyle.Default,
                e.size = d.Size.Auto,
                e.pixelWidth = null,
                e.pixelHeight = null,
                e.altText = "",
                e
            }
            return h(e, t),
            Object.defineProperty(e.prototype, "useDefaultSizing", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.internalRender = function() {
                var t = this
                  , e = null;
                if (!f.isNullOrEmpty(this.url)) {
                    switch (e = document.createElement("div"),
                    e.classList.add("ac-image"),
                    e.style.display = "flex",
                    e.style.alignItems = "flex-start",
                    null != this.selectAction && this.hostConfig.supportsInteractivity && (e.tabIndex = 0,
                    e.setAttribute("role", "button"),
                    e.setAttribute("aria-label", this.selectAction.title),
                    e.classList.add("ac-selectable")),
                    e.onkeypress = function(e) {
                        t.selectAction && (13 != e.keyCode && 32 != e.keyCode || t.selectAction.execute())
                    }
                    ,
                    e.onclick = function(e) {
                        t.selectAction && (t.selectAction.execute(),
                        e.cancelBubble = !0)
                    }
                    ,
                    this.horizontalAlignment) {
                    case d.HorizontalAlignment.Center:
                        e.style.justifyContent = "center";
                        break;
                    case d.HorizontalAlignment.Right:
                        e.style.justifyContent = "flex-end";
                        break;
                    default:
                        e.style.justifyContent = "flex-start"
                    }
                    var n = document.createElement("img");
                    if (n.style.maxHeight = "100%",
                    n.style.minWidth = "0",
                    this.pixelWidth || this.pixelHeight)
                        this.pixelWidth && (n.style.width = this.pixelWidth + "px"),
                        this.pixelHeight && (n.style.height = this.pixelHeight + "px");
                    else
                        switch (this.size) {
                        case d.Size.Stretch:
                            n.style.width = "100%";
                            break;
                        case d.Size.Auto:
                            n.style.maxWidth = "100%";
                            break;
                        case d.Size.Small:
                            n.style.width = this.hostConfig.imageSizes.small + "px";
                            break;
                        case d.Size.Large:
                            n.style.width = this.hostConfig.imageSizes.large + "px";
                            break;
                        case d.Size.Medium:
                            n.style.width = this.hostConfig.imageSizes.medium + "px"
                        }
                    this.style === d.ImageStyle.Person && (n.style.borderRadius = "50%",
                    n.style.backgroundPosition = "50% 50%",
                    n.style.backgroundRepeat = "no-repeat"),
                    f.isNullOrEmpty(this.backgroundColor) || (n.style.backgroundColor = f.stringToCssColor(this.backgroundColor)),
                    n.src = this.url,
                    n.alt = this.altText,
                    e.appendChild(n)
                }
                return e
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "Image"
            }
            ,
            e.prototype.getActionById = function(e) {
                var n = t.prototype.getActionById.call(this, e);
                return !n && this.selectAction && (n = this.selectAction.getActionById(e)),
                n
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.url = e.url;
                var n = e.style;
                n && "string" == typeof n && "normal" === n.toLowerCase() ? (this.style = d.ImageStyle.Default,
                p({
                    error: d.ValidationError.Deprecated,
                    message: 'The Image.style value "normal" is deprecated and will be removed. Use "default" instead.'
                })) : this.style = f.getEnumValueOrDefault(d.ImageStyle, n, this.style),
                this.size = f.getEnumValueOrDefault(d.Size, e.size, this.size),
                this.altText = e.altText;
                var r = e.selectAction;
                void 0 != r && (this.selectAction = o(r)),
                e.pixelWidth && "number" == typeof e.pixelWidth && (this.pixelWidth = e.pixelWidth),
                e.pixelHeight && "number" == typeof e.pixelHeight && (this.pixelHeight = e.pixelHeight)
            }
            ,
            e.prototype.renderSpeech = function() {
                return null != this.speak ? this.speak + "\n" : null
            }
            ,
            Object.defineProperty(e.prototype, "selectAction", {
                get: function() {
                    return this._selectAction
                },
                set: function(t) {
                    this._selectAction = t,
                    this._selectAction && this._selectAction.setParent(this)
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(b);
        e.Image = S;
        var x = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._images = [],
                e.imageSize = d.Size.Medium,
                e
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                var t = null;
                if (this._images.length > 0) {
                    t = document.createElement("div"),
                    t.style.display = "flex",
                    t.style.flexWrap = "wrap";
                    for (var e = 0; e < this._images.length; e++) {
                        var n = this._images[e].render();
                        n.style.display = "inline-flex",
                        n.style.margin = "0px",
                        n.style.marginRight = "10px",
                        n.style.maxHeight = this.hostConfig.imageSet.maxImageHeight + "px",
                        f.appendChild(t, n)
                    }
                }
                return t
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "ImageSet"
            }
            ,
            e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e),
                this.imageSize = f.getEnumValueOrDefault(d.Size, e.imageSize, d.Size.Medium),
                null != e.images) {
                    var n = e.images;
                    this._images = [];
                    for (var r = 0; r < n.length; r++) {
                        var i = new S;
                        i.parse(n[r]),
                        i.size = this.imageSize,
                        this.addImage(i)
                    }
                }
            }
            ,
            e.prototype.addImage = function(t) {
                if (t.parent)
                    throw new Error("This image already belongs to another ImageSet");
                this._images.push(t),
                t.setParent(this)
            }
            ,
            e.prototype.renderSpeech = function() {
                if (null != this.speak)
                    return this.speak;
                var t = null;
                if (this._images.length > 0) {
                    t = "";
                    for (var e = 0; e < this._images.length; e++)
                        t += this._images[e].renderSpeech()
                }
                return t
            }
            ,
            e
        }(b);
        e.ImageSet = x;
        var k = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t),
            e.prototype.validate = function() {
                return this.id ? [] : [{
                    error: d.ValidationError.PropertyCantBeNull,
                    message: "All inputs must have a unique Id"
                }]
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.id = e.id,
                this.defaultValue = e.value
            }
            ,
            e.prototype.renderSpeech = function() {
                return null != this.speak ? this.speak : this.title ? "<s>" + this.title + "</s>\n" : null
            }
            ,
            e.prototype.getAllInputs = function() {
                return [this]
            }
            ,
            Object.defineProperty(e.prototype, "isInteractive", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(b);
        e.Input = k;
        var E = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                return this.isMultiline ? (this._textareaElement = document.createElement("textarea"),
                this._textareaElement.className = "ac-input ac-textInput ac-multiline",
                this._textareaElement.style.width = "100%",
                this._textareaElement.tabIndex = 0,
                f.isNullOrEmpty(this.placeholder) || (this._textareaElement.placeholder = this.placeholder,
                this._textareaElement.setAttribute("aria-label", this.placeholder)),
                f.isNullOrEmpty(this.defaultValue) || (this._textareaElement.value = this.defaultValue),
                this.maxLength > 0 && (this._textareaElement.maxLength = this.maxLength),
                this._textareaElement) : (this._inputElement = document.createElement("input"),
                this._inputElement.type = "text",
                this._inputElement.className = "ac-input ac-textInput",
                this._inputElement.style.width = "100%",
                this._inputElement.tabIndex = 0,
                f.isNullOrEmpty(this.placeholder) || (this._inputElement.placeholder = this.placeholder,
                this._inputElement.setAttribute("aria-label", this.placeholder)),
                f.isNullOrEmpty(this.defaultValue) || (this._inputElement.value = this.defaultValue),
                this.maxLength > 0 && (this._inputElement.maxLength = this.maxLength),
                this._inputElement)
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "Input.Text"
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.maxLength = e.maxLength,
                this.isMultiline = e.isMultiline,
                this.placeholder = e.placeholder
            }
            ,
            Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this.isMultiline ? this._textareaElement ? this._textareaElement.value : null : this._inputElement ? this._inputElement.value : null
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(k);
        e.TextInput = E;
        var A = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.valueOn = "true",
                e.valueOff = "false",
                e
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                var t = document.createElement("div");
                t.className = "ac-input",
                t.style.width = "100%",
                t.style.display = "flex",
                this._checkboxInputElement = document.createElement("input"),
                this._checkboxInputElement.type = "checkbox",
                this._checkboxInputElement.style.display = "inline-block",
                this._checkboxInputElement.style.verticalAlign = "middle",
                this._checkboxInputElement.style.margin = "0",
                this._checkboxInputElement.style.flex = "0 0 auto",
                this._checkboxInputElement.setAttribute("aria-label", this.title),
                this._checkboxInputElement.tabIndex = 0,
                this.defaultValue == this.valueOn && (this._checkboxInputElement.checked = !0);
                var e = new _;
                e.hostConfig = this.hostConfig,
                e.text = this.title,
                e.useMarkdown = X.useMarkdownInRadioButtonAndCheckbox;
                var n = e.render();
                n.style.display = "inline-block",
                n.style.marginLeft = "6px",
                n.style.verticalAlign = "middle";
                document.createElement("div");
                return f.appendChild(t, this._checkboxInputElement),
                f.appendChild(t, n),
                t
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "Input.Toggle"
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.title = e.title,
                this.valueOn = f.getValueOrDefault(e.valueOn, this.valueOn),
                this.valueOff = f.getValueOrDefault(e.valueOff, this.valueOff)
            }
            ,
            Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._checkboxInputElement ? this._checkboxInputElement.checked ? this.valueOn : this.valueOff : null
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(k);
        e.ToggleInput = A;
        var T = function() {
            function t() {}
            return t
        }();
        e.Choice = T;
        var O = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.choices = [],
                e
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                if (this.isMultiSelect) {
                    var t = this.defaultValue ? this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator) : null
                      , e = document.createElement("div");
                    e.className = "ac-input",
                    e.style.width = "100%",
                    this._toggleInputs = [];
                    for (var n = 0; n < this.choices.length; n++) {
                        var r = document.createElement("input");
                        r.type = "checkbox",
                        r.style.margin = "0",
                        r.style.display = "inline-block",
                        r.style.verticalAlign = "middle",
                        r.value = this.choices[n].value,
                        r.style.flex = "0 0 auto",
                        r.setAttribute("aria-label", this.choices[n].title),
                        t && t.indexOf(this.choices[n].value) >= 0 && (r.checked = !0),
                        this._toggleInputs.push(r);
                        var i = new _;
                        i.hostConfig = this.hostConfig,
                        i.text = this.choices[n].title,
                        i.useMarkdown = X.useMarkdownInRadioButtonAndCheckbox;
                        var o = i.render();
                        o.style.display = "inline-block",
                        o.style.marginLeft = "6px",
                        o.style.verticalAlign = "middle";
                        var s = document.createElement("div");
                        s.style.display = "flex",
                        f.appendChild(s, r),
                        f.appendChild(s, o),
                        f.appendChild(e, s)
                    }
                    return e
                }
                if (this.isCompact) {
                    this._selectElement = document.createElement("select"),
                    this._selectElement.className = "ac-input ac-multichoiceInput",
                    this._selectElement.style.width = "100%";
                    var a = document.createElement("option");
                    a.selected = !0,
                    a.disabled = !0,
                    a.hidden = !0,
                    this.placeholder && (a.text = this.placeholder),
                    f.appendChild(this._selectElement, a);
                    for (var n = 0; n < this.choices.length; n++) {
                        var a = document.createElement("option");
                        a.value = this.choices[n].value,
                        a.text = this.choices[n].title,
                        a.setAttribute("aria-label", this.choices[n].title),
                        this.choices[n].value == this.defaultValue && (a.selected = !0),
                        f.appendChild(this._selectElement, a)
                    }
                    return this._selectElement
                }
                var e = document.createElement("div");
                e.className = "ac-input",
                e.style.width = "100%",
                this._toggleInputs = [];
                for (var n = 0; n < this.choices.length; n++) {
                    var c = document.createElement("input");
                    c.type = "radio",
                    c.style.margin = "0",
                    c.style.display = "inline-block",
                    c.style.verticalAlign = "middle",
                    c.name = this.id,
                    c.value = this.choices[n].value,
                    c.style.flex = "0 0 auto",
                    c.setAttribute("aria-label", this.choices[n].title),
                    this.choices[n].value == this.defaultValue && (c.checked = !0),
                    this._toggleInputs.push(c);
                    var i = new _;
                    i.hostConfig = this.hostConfig,
                    i.text = this.choices[n].title,
                    i.useMarkdown = X.useMarkdownInRadioButtonAndCheckbox;
                    var o = i.render();
                    o.style.display = "inline-block",
                    o.style.marginLeft = "6px",
                    o.style.verticalAlign = "middle";
                    var s = document.createElement("div");
                    s.style.display = "flex",
                    f.appendChild(s, c),
                    f.appendChild(s, o),
                    f.appendChild(e, s)
                }
                return e
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "Input.ChoiceSet"
            }
            ,
            e.prototype.validate = function() {
                var t = [];
                0 == this.choices.length && (t = [{
                    error: d.ValidationError.CollectionCantBeEmpty,
                    message: "An Input.ChoiceSet must have at least one choice defined."
                }]);
                for (var e = 0; e < this.choices.length; e++)
                    if (!this.choices[e].title || !this.choices[e].value) {
                        t = t.concat([{
                            error: d.ValidationError.PropertyCantBeNull,
                            message: "All choices in an Input.ChoiceSet must have their title and value properties set."
                        }]);
                        break
                    }
                return t
            }
            ,
            e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e),
                this.isCompact = !("expanded" === e.style),
                this.isMultiSelect = e.isMultiSelect,
                this.placeholder = e.placeholder,
                void 0 != e.choices) {
                    var n = e.choices;
                    this.choices = [];
                    for (var r = 0; r < n.length; r++) {
                        var i = new T;
                        i.title = n[r].title,
                        i.value = n[r].value,
                        this.choices.push(i)
                    }
                }
            }
            ,
            Object.defineProperty(e.prototype, "value", {
                get: function() {
                    if (this.isMultiSelect) {
                        if (!this._toggleInputs || 0 == this._toggleInputs.length)
                            return null;
                        for (var t = "", e = 0; e < this._toggleInputs.length; e++)
                            this._toggleInputs[e].checked && ("" != t && (t += this.hostConfig.choiceSetInputValueSeparator),
                            t += this._toggleInputs[e].value);
                        return "" == t ? null : t
                    }
                    if (this.isCompact)
                        return this._selectElement ? this._selectElement.value : null;
                    if (!this._toggleInputs || 0 == this._toggleInputs.length)
                        return null;
                    for (var e = 0; e < this._toggleInputs.length; e++)
                        if (this._toggleInputs[e].checked)
                            return this._toggleInputs[e].value;
                    return null
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(k);
        e.ChoiceSetInput = O;
        var I = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                return this._numberInputElement = document.createElement("input"),
                this._numberInputElement.setAttribute("type", "number"),
                this._numberInputElement.className = "ac-input ac-numberInput",
                this._numberInputElement.setAttribute("min", this.min),
                this._numberInputElement.setAttribute("max", this.max),
                this._numberInputElement.style.width = "100%",
                this._numberInputElement.tabIndex = 0,
                f.isNullOrEmpty(this.defaultValue) || (this._numberInputElement.value = this.defaultValue),
                f.isNullOrEmpty(this.placeholder) || (this._numberInputElement.placeholder = this.placeholder,
                this._numberInputElement.setAttribute("aria-label", this.placeholder)),
                this._numberInputElement
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "Input.Number"
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.placeholder = e.placeholder,
                this.min = e.min,
                this.max = e.max
            }
            ,
            Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._numberInputElement ? this._numberInputElement.value : null
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(k);
        e.NumberInput = I;
        var P = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                return this._dateInputElement = document.createElement("input"),
                this._dateInputElement.setAttribute("type", "date"),
                this._dateInputElement.className = "ac-input ac-dateInput",
                this._dateInputElement.style.width = "100%",
                f.isNullOrEmpty(this.defaultValue) || (this._dateInputElement.value = this.defaultValue),
                this._dateInputElement
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "Input.Date"
            }
            ,
            Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._dateInputElement ? this._dateInputElement.value : null
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(k);
        e.DateInput = P;
        var D = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                return this._timeInputElement = document.createElement("input"),
                this._timeInputElement.setAttribute("type", "time"),
                this._timeInputElement.className = "ac-input ac-timeInput",
                this._timeInputElement.style.width = "100%",
                f.isNullOrEmpty(this.defaultValue) || (this._timeInputElement.value = this.defaultValue),
                this._timeInputElement
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "Input.Time"
            }
            ,
            Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._timeInputElement ? this._timeInputElement.value : null
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(k);
        e.TimeInput = D;
        var M;
        !function(t) {
            t[t.Normal = 0] = "Normal",
            t[t.Expanded = 1] = "Expanded",
            t[t.Subdued = 2] = "Subdued"
        }(M || (M = {}));
        var N = function() {
            function t(t) {
                var e = this;
                this._element = null,
                this._state = M.Normal,
                this.onClick = null,
                this._action = t,
                this._element = document.createElement("button"),
                this._element.type = "button",
                this._element.style.overflow = "hidden",
                this._element.style.whiteSpace = "nowrap",
                this._element.style.textOverflow = "ellipsis",
                this._element.onclick = function(t) {
                    e.click()
                }
                ,
                this.updateCssStyle()
            }
            return t.prototype.click = function() {
                null != this.onClick && this.onClick(this)
            }
            ,
            t.prototype.updateCssStyle = function() {
                switch (this._element.className = "ac-pushButton",
                this._action instanceof B && this._element.classList.add("expandable"),
                this._state) {
                case M.Expanded:
                    this._element.classList.add("expanded");
                    break;
                case M.Subdued:
                    this._element.classList.add("subdued")
                }
            }
            ,
            Object.defineProperty(t.prototype, "action", {
                get: function() {
                    return this._action
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "text", {
                get: function() {
                    return this._text
                },
                set: function(t) {
                    this._text = t,
                    this._element.innerText = this._text,
                    this._element.setAttribute("aria-label", this._text)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "element", {
                get: function() {
                    return this._element
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "state", {
                get: function() {
                    return this._state
                },
                set: function(t) {
                    this._state = t,
                    this.updateCssStyle()
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }()
          , R = function() {
            function t() {
                this._parent = null,
                this._actionCollection = null
            }
            return t.prototype.setParent = function(t) {
                this._parent = t
            }
            ,
            t.prototype.execute = function() {
                a(this)
            }
            ,
            t.prototype.setCollection = function(t) {
                this._actionCollection = t
            }
            ,
            t.prototype.setStatus = function(t) {
                if (null != this._actionCollection)
                    if (t) {
                        var e = new Q;
                        e.parse(t),
                        this._actionCollection.showStatusCard(e)
                    } else
                        this._actionCollection.hideStatusCard()
            }
            ,
            t.prototype.validate = function() {
                return []
            }
            ,
            t.prototype.prepare = function(t) {}
            ,
            t.prototype.parse = function(t) {
                this.id = t.id,
                this.title = t.title
            }
            ,
            t.prototype.getAllInputs = function() {
                return []
            }
            ,
            t.prototype.getActionById = function(t) {
                if (this.id == t)
                    return this
            }
            ,
            Object.defineProperty(t.prototype, "parent", {
                get: function() {
                    return this._parent
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }();
        e.Action = R;
        var L = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._isPrepared = !1,
                e
            }
            return h(e, t),
            e.prototype.getJsonTypeName = function() {
                return "Action.Submit"
            }
            ,
            e.prototype.prepare = function(t) {
                this._originalData ? this._processedData = JSON.parse(JSON.stringify(this._originalData)) : this._processedData = {};
                for (var e = 0; e < t.length; e++) {
                    null != t[e].value && (this._processedData[t[e].id] = t[e].value)
                }
                this._isPrepared = !0
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.data = e.data
            }
            ,
            Object.defineProperty(e.prototype, "data", {
                get: function() {
                    return this._isPrepared ? this._processedData : this._originalData
                },
                set: function(t) {
                    this._originalData = t,
                    this._isPrepared = !1
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(R);
        e.SubmitAction = L;
        var j = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t),
            e.prototype.getJsonTypeName = function() {
                return "Action.OpenUrl"
            }
            ,
            e.prototype.validate = function() {
                return this.url ? [] : [{
                    error: d.ValidationError.PropertyCantBeNull,
                    message: "An Action.OpenUrl must have its url property set."
                }]
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.url = e.url
            }
            ,
            e
        }(R);
        e.OpenUrlAction = j;
        var F = function() {
            function t() {
                this._value = new f.StringWithSubstitutions
            }
            return t.prototype.prepare = function(t) {
                this._value.substituteInputValues(t, f.ContentTypes.applicationXWwwFormUrlencoded)
            }
            ,
            Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this._value.get()
                },
                set: function(t) {
                    this._value.set(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }();
        e.HttpHeader = F;
        var z = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._url = new f.StringWithSubstitutions,
                e._body = new f.StringWithSubstitutions,
                e._headers = [],
                e
            }
            return h(e, t),
            e.prototype.getJsonTypeName = function() {
                return "Action.Http"
            }
            ,
            e.prototype.validate = function() {
                var t = [];
                if (this.url || (t = [{
                    error: d.ValidationError.PropertyCantBeNull,
                    message: "An Action.Http must have its url property set."
                }]),
                this.headers.length > 0)
                    for (var e = 0; e < this.headers.length; e++)
                        if (!this.headers[e].name || !this.headers[e].value) {
                            t = t.concat([{
                                error: d.ValidationError.PropertyCantBeNull,
                                message: "All headers of an Action.Http must have their name and value properties set."
                            }]);
                            break
                        }
                return t
            }
            ,
            e.prototype.prepare = function(t) {
                this._url.substituteInputValues(t, f.ContentTypes.applicationXWwwFormUrlencoded);
                for (var e = f.ContentTypes.applicationJson, n = 0; n < this._headers.length; n++)
                    this._headers[n].prepare(t),
                    this._headers[n].name && "content-type" == this._headers[n].name.toLowerCase() && (e = this._headers[n].value);
                this._body.substituteInputValues(t, e)
            }
            ,
            e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e),
                this.url = e.url,
                this.method = e.method,
                this.body = e.body,
                null != e.headers) {
                    var n = e.headers;
                    this._headers = [];
                    for (var r = 0; r < n.length; r++) {
                        var i = new F;
                        i.name = n[r].name,
                        i.value = n[r].value,
                        this.headers.push(i)
                    }
                }
            }
            ,
            Object.defineProperty(e.prototype, "url", {
                get: function() {
                    return this._url.get()
                },
                set: function(t) {
                    this._url.set(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "body", {
                get: function() {
                    return this._body.get()
                },
                set: function(t) {
                    this._body.set(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "headers", {
                get: function() {
                    return this._headers
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(R);
        e.HttpAction = z;
        var B = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.card = new Q,
                e
            }
            return h(e, t),
            e.prototype.getJsonTypeName = function() {
                return "Action.ShowCard"
            }
            ,
            e.prototype.validate = function() {
                return this.card.validate()
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e),
                this.card.parse(e.card)
            }
            ,
            e.prototype.setParent = function(e) {
                t.prototype.setParent.call(this, e),
                this.card.setParent(e)
            }
            ,
            e.prototype.getAllInputs = function() {
                return this.card.getAllInputs()
            }
            ,
            e.prototype.getActionById = function(e) {
                var n = t.prototype.getActionById.call(this, e);
                return n || (n = this.card.getActionById(e)),
                n
            }
            ,
            e
        }(R);
        e.ShowCardAction = B;
        var U = function() {
            function t(t) {
                this._actionButtons = [],
                this._expandedAction = null,
                this._renderedActionCount = 0,
                this._statusCard = null,
                this._actionCard = null,
                this.items = [],
                this.onHideActionCardPane = null,
                this.onShowActionCardPane = null,
                this._owner = t
            }
            return t.prototype.showStatusCard = function(t) {
                t.setParent(this._owner),
                this._statusCard = t.render(),
                this.refreshContainer()
            }
            ,
            t.prototype.hideStatusCard = function() {
                this._statusCard = null,
                this.refreshContainer()
            }
            ,
            t.prototype.refreshContainer = function() {
                if (this._actionCardContainer.innerHTML = "",
                null === this._actionCard && null === this._statusCard)
                    return this._actionCardContainer.style.padding = "0px",
                    this._actionCardContainer.style.marginTop = "0px",
                    void (this.onHideActionCardPane && this.onHideActionCardPane());
                this.onShowActionCardPane && this.onShowActionCardPane(null),
                this._actionCardContainer.style.marginTop = this._renderedActionCount > 0 ? this._owner.hostConfig.actions.showCard.inlineTopMargin + "px" : "0px";
                var t = this._owner.getNonZeroPadding().toSpacingDefinition(this._owner.hostConfig);
                null !== this._actionCard && (this._actionCard.style.paddingLeft = t.left + "px",
                this._actionCard.style.paddingRight = t.right + "px",
                this._actionCard.style.marginLeft = "-" + t.left + "px",
                this._actionCard.style.marginRight = "-" + t.right + "px",
                f.appendChild(this._actionCardContainer, this._actionCard)),
                null !== this._statusCard && (this._statusCard.style.paddingLeft = t.left + "px",
                this._statusCard.style.paddingRight = t.right + "px",
                this._statusCard.style.marginLeft = "-" + t.left + "px",
                this._statusCard.style.marginRight = "-" + t.right + "px",
                f.appendChild(this._actionCardContainer, this._statusCard))
            }
            ,
            t.prototype.hideActionCard = function() {
                this._expandedAction && c(this._expandedAction, !1),
                this._expandedAction = null,
                this._actionCard = null,
                this.refreshContainer()
            }
            ,
            t.prototype.showActionCard = function(t, e) {
                if (void 0 === e && (e = !1),
                null != t.card) {
                    t.card.suppressStyle = e;
                    var n = t.card.render();
                    this._actionCard = n,
                    this._expandedAction = t,
                    this.refreshContainer(),
                    c(t, !0)
                }
            }
            ,
            t.prototype.actionClicked = function(t) {
                if (t.action instanceof B)
                    if (this.hideStatusCard(),
                    this._owner.hostConfig.actions.showCard.actionMode === d.ShowCardActionMode.Popup)
                        t.action.execute();
                    else if (t.action === this._expandedAction) {
                        for (var e = 0; e < this._actionButtons.length; e++)
                            this._actionButtons[e].state = M.Normal;
                        this.hideActionCard()
                    } else {
                        for (var e = 0; e < this._actionButtons.length; e++)
                            this._actionButtons[e] !== t && (this._actionButtons[e].state = M.Subdued);
                        t.state = M.Expanded,
                        this.showActionCard(t.action, !(this._owner.isAtTheVeryLeft() && this._owner.isAtTheVeryRight()))
                    }
                else {
                    for (var e = 0; e < this._actionButtons.length; e++)
                        this._actionButtons[e].state = M.Normal;
                    this.hideStatusCard(),
                    this.hideActionCard(),
                    t.action.execute()
                }
            }
            ,
            t.prototype.getActionById = function(t) {
                for (var e = null, n = 0; n < this.items.length && !(e = this.items[n].getActionById(t)); n++)
                    ;
                return e
            }
            ,
            t.prototype.validate = function() {
                var t = [];
                this._owner.hostConfig.actions.maxActions && this.items.length > this._owner.hostConfig.actions.maxActions && t.push({
                    error: d.ValidationError.TooManyActions,
                    message: "A maximum of " + this._owner.hostConfig.actions.maxActions + " actions are allowed."
                }),
                this.items.length > 0 && !this._owner.hostConfig.supportsInteractivity && t.push({
                    error: d.ValidationError.InteractivityNotAllowed,
                    message: "Interactivity is not allowed."
                });
                for (var e = 0; e < this.items.length; e++)
                    i(this.items[e], this._owner.getForbiddenActionTypes()) || t.push({
                        error: d.ValidationError.ActionTypeNotAllowed,
                        message: "Actions of type " + this.items[e].getJsonTypeName() + " are not allowe."
                    });
                for (var e = 0; e < this.items.length; e++)
                    t = t.concat(this.items[e].validate());
                return t
            }
            ,
            t.prototype.render = function(t) {
                var e = this;
                if (!this._owner.hostConfig.supportsInteractivity)
                    return null;
                var n = document.createElement("div");
                this._actionCardContainer = document.createElement("div"),
                this._renderedActionCount = 0;
                var r = this._owner.hostConfig.actions.maxActions ? Math.min(this._owner.hostConfig.actions.maxActions, this.items.length) : this.items.length
                  , o = this._owner.getForbiddenActionTypes();
                if (X.preExpandSingleShowCardAction && 1 == r && this.items[0]instanceof B && i(this.items[a], o))
                    this.showActionCard(this.items[0], !0),
                    this._renderedActionCount = 1;
                else {
                    var s = document.createElement("div");
                    if (s.style.display = "flex",
                    t == d.Orientation.Horizontal)
                        if (s.style.flexDirection = "row",
                        this._owner.horizontalAlignment && this._owner.hostConfig.actions.actionAlignment != d.ActionAlignment.Stretch)
                            switch (this._owner.horizontalAlignment) {
                            case d.HorizontalAlignment.Center:
                                s.style.justifyContent = "center";
                                break;
                            case d.HorizontalAlignment.Right:
                                s.style.justifyContent = "flex-end";
                                break;
                            default:
                                s.style.justifyContent = "flex-start"
                            }
                        else
                            switch (this._owner.hostConfig.actions.actionAlignment) {
                            case d.ActionAlignment.Center:
                                s.style.justifyContent = "center";
                                break;
                            case d.ActionAlignment.Right:
                                s.style.justifyContent = "flex-end";
                                break;
                            default:
                                s.style.justifyContent = "flex-start"
                            }
                    else if (s.style.flexDirection = "column",
                    this._owner.horizontalAlignment && this._owner.hostConfig.actions.actionAlignment != d.ActionAlignment.Stretch)
                        switch (this._owner.horizontalAlignment) {
                        case d.HorizontalAlignment.Center:
                            s.style.alignItems = "center";
                            break;
                        case d.HorizontalAlignment.Right:
                            s.style.alignItems = "flex-end";
                            break;
                        default:
                            s.style.alignItems = "flex-start"
                        }
                    else
                        switch (this._owner.hostConfig.actions.actionAlignment) {
                        case d.ActionAlignment.Center:
                            s.style.alignItems = "center";
                            break;
                        case d.ActionAlignment.Right:
                            s.style.alignItems = "flex-end";
                            break;
                        case d.ActionAlignment.Stretch:
                            s.style.alignItems = "stretch";
                            break;
                        default:
                            s.style.alignItems = "flex-start"
                        }
                    for (var a = 0; a < this.items.length; a++)
                        if (i(this.items[a], o)) {
                            var c = new N(this.items[a]);
                            if (c.element.style.overflow = "hidden",
                            c.element.style.overflow = "table-cell",
                            c.element.style.flex = this._owner.hostConfig.actions.actionAlignment === d.ActionAlignment.Stretch ? "0 1 100%" : "0 1 auto",
                            c.text = this.items[a].title,
                            c.onClick = function(t) {
                                e.actionClicked(t)
                            }
                            ,
                            this._actionButtons.push(c),
                            s.appendChild(c.element),
                            ++this._renderedActionCount >= this._owner.hostConfig.actions.maxActions || a == this.items.length - 1)
                                break;
                            if (this._owner.hostConfig.actions.buttonSpacing > 0) {
                                var u = document.createElement("div");
                                t === d.Orientation.Horizontal ? (u.style.flex = "0 0 auto",
                                u.style.width = this._owner.hostConfig.actions.buttonSpacing + "px") : u.style.height = this._owner.hostConfig.actions.buttonSpacing + "px",
                                f.appendChild(s, u)
                            }
                        }
                    var l = document.createElement("div");
                    l.style.overflow = "hidden",
                    l.appendChild(s),
                    f.appendChild(n, l)
                }
                return f.appendChild(n, this._actionCardContainer),
                this._renderedActionCount > 0 ? n : null
            }
            ,
            t.prototype.addAction = function(t) {
                if (t.parent)
                    throw new Error("The action already belongs to another element.");
                this.items.push(t),
                t.setParent(this._owner),
                r(t, this)
            }
            ,
            t.prototype.clear = function() {
                this.items = []
            }
            ,
            t.prototype.getAllInputs = function() {
                for (var t = [], e = 0; e < this.items.length; e++) {
                    var n = this.items[e];
                    t = t.concat(n.getAllInputs())
                }
                return t
            }
            ,
            t
        }()
          , V = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.orientation = null,
                e._actionCollection = new U(e),
                e._actionCollection.onHideActionCardPane = function() {
                    e.showBottomSpacer(e)
                }
                ,
                e._actionCollection.onShowActionCardPane = function(t) {
                    e.hideBottomSpacer(e)
                }
                ,
                e
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                return this._actionCollection.render(this.orientation ? this.orientation : this.hostConfig.actions.actionsOrientation)
            }
            ,
            e.prototype.getJsonTypeName = function() {
                return "ActionSet"
            }
            ,
            e.prototype.validate = function() {
                return this._actionCollection.validate()
            }
            ,
            e.prototype.parse = function(e, n) {
                void 0 === n && (n = "items"),
                t.prototype.parse.call(this, e);
                var r = e.orientation;
                if (r && (this.orientation = f.getEnumValueOrDefault(d.Orientation, r, d.Orientation.Horizontal)),
                void 0 != e.actions)
                    for (var i = e.actions, s = 0; s < i.length; s++)
                        this.addAction(o(i[s]))
            }
            ,
            e.prototype.addAction = function(t) {
                null != t && this._actionCollection.addAction(t)
            }
            ,
            e.prototype.getAllInputs = function() {
                return this._actionCollection.getAllInputs()
            }
            ,
            e.prototype.renderSpeech = function() {
                return ""
            }
            ,
            Object.defineProperty(e.prototype, "isInteractive", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(b);
        e.ActionSet = V;
        var q = function() {
            function t() {
                this.mode = d.BackgroundImageMode.Stretch,
                this.horizontalAlignment = d.HorizontalAlignment.Left,
                this.verticalAlignment = d.VerticalAlignment.Top
            }
            return t.prototype.parse = function(t) {
                this.url = t.url,
                this.mode = f.getEnumValueOrDefault(d.BackgroundImageMode, t.mode, this.mode),
                this.horizontalAlignment = f.getEnumValueOrDefault(d.HorizontalAlignment, t.horizontalAlignment, this.horizontalAlignment),
                this.verticalAlignment = f.getEnumValueOrDefault(d.VerticalAlignment, t.verticalAlignment, this.verticalAlignment)
            }
            ,
            t.prototype.apply = function(t) {
                if (this.url) {
                    switch (t.style.backgroundImage = "url('" + this.url + "')",
                    this.mode) {
                    case d.BackgroundImageMode.Repeat:
                        t.style.backgroundRepeat = "repeat";
                        break;
                    case d.BackgroundImageMode.RepeatHorizontally:
                        t.style.backgroundRepeat = "repeat-x";
                        break;
                    case d.BackgroundImageMode.RepeatVertically:
                        t.style.backgroundRepeat = "repeat-y";
                        break;
                    case d.BackgroundImageMode.Stretch:
                    default:
                        t.style.backgroundRepeat = "no-repeat",
                        t.style.backgroundSize = "cover"
                    }
                    switch (this.horizontalAlignment) {
                    case d.HorizontalAlignment.Center:
                        t.style.backgroundPositionX = "center";
                        break;
                    case d.HorizontalAlignment.Right:
                        t.style.backgroundPositionX = "right"
                    }
                    switch (this.verticalAlignment) {
                    case d.VerticalAlignment.Center:
                        t.style.backgroundPositionY = "center";
                        break;
                    case d.VerticalAlignment.Bottom:
                        t.style.backgroundPositionY = "bottom"
                    }
                }
            }
            ,
            t
        }();
        e.BackgroundImage = q;
        var H = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._items = [],
                e._style = null,
                e.verticalContentAlignment = d.VerticalAlignment.Top,
                e
            }
            return h(e, t),
            e.prototype.isElementAllowed = function(t, e) {
                if (!this.hostConfig.supportsInteractivity && t.isInteractive)
                    return !1;
                if (e)
                    for (var n = 0; n < e.length; n++)
                        if (t.getJsonTypeName() === e[n])
                            return !1;
                return !0
            }
            ,
            Object.defineProperty(e.prototype, "hasExplicitStyle", {
                get: function() {
                    return null != this._style
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.showBottomSpacer = function(e) {
                e && !this.isLastElement(e) || (this.applyPadding(),
                t.prototype.showBottomSpacer.call(this, e))
            }
            ,
            e.prototype.hideBottomSpacer = function(e) {
                e && !this.isLastElement(e) || (this.renderedElement && (this.renderedElement.style.paddingBottom = "0px"),
                t.prototype.hideBottomSpacer.call(this, e))
            }
            ,
            e.prototype.applyPadding = function() {
                if (this.padding) {
                    if (this.renderedElement) {
                        var t = this.padding.toSpacingDefinition(this.hostConfig);
                        this.renderedElement.style.paddingTop = t.top + "px",
                        this.renderedElement.style.paddingRight = t.right + "px",
                        this.renderedElement.style.paddingBottom = t.bottom + "px",
                        this.renderedElement.style.paddingLeft = t.left + "px"
                    }
                } else if (this.hasBackground) {
                    var e = new y
                      , t = new y
                      , n = !!this.parent && this.parent.canContentBleed() && X.useAutomaticContainerBleeding;
                    if (n) {
                        var r = this.getNonZeroPadding()
                          , i = new v(r.top,r.right,r.bottom,r.left);
                        this.isAtTheVeryTop() || (r.top = d.Spacing.None,
                        i.top = d.Spacing.None),
                        this.isAtTheVeryBottom() || (r.bottom = d.Spacing.None,
                        i.bottom = d.Spacing.None),
                        this.isAtTheVeryLeft() || (r.left = d.Spacing.None,
                        i.left = d.Spacing.None),
                        this.isAtTheVeryRight() || (r.right = d.Spacing.None,
                        i.right = d.Spacing.None),
                        r.left == d.Spacing.None && r.right == d.Spacing.None || (r.left == d.Spacing.None && (r.left = r.right),
                        r.right == d.Spacing.None && (r.right = r.left)),
                        r.top == d.Spacing.None && r.bottom == d.Spacing.None || (r.top == d.Spacing.None && (r.top = r.bottom),
                        r.bottom == d.Spacing.None && (r.bottom = r.top)),
                        r.top == d.Spacing.None && r.right == d.Spacing.None && r.bottom == d.Spacing.None && r.left == d.Spacing.None || (r.top == d.Spacing.None && (r.top = d.Spacing.Default),
                        r.right == d.Spacing.None && (r.right = d.Spacing.Default),
                        r.bottom == d.Spacing.None && (r = Object.assign({}, r, {
                            bottom: d.Spacing.Default
                        })),
                        r.left == d.Spacing.None && (r = Object.assign({}, r, {
                            left: d.Spacing.Default
                        }))),
                        r.top == d.Spacing.None && r.right == d.Spacing.None && r.bottom == d.Spacing.None && r.left == d.Spacing.None && (r = new v(d.Spacing.Padding,d.Spacing.Padding,d.Spacing.Padding,d.Spacing.Padding)),
                        e = i.toSpacingDefinition(this.hostConfig),
                        t = r.toSpacingDefinition(this.hostConfig)
                    } else
                        t = new v(d.Spacing.Padding,d.Spacing.Padding,d.Spacing.Padding,d.Spacing.Padding).toSpacingDefinition(this.hostConfig);
                    this.renderedElement && (this.renderedElement.style.marginTop = "-" + e.top + "px",
                    this.renderedElement.style.marginRight = "-" + e.right + "px",
                    this.renderedElement.style.marginBottom = "-" + e.bottom + "px",
                    this.renderedElement.style.marginLeft = "-" + e.left + "px",
                    this.renderedElement.style.paddingTop = t.top + "px",
                    this.renderedElement.style.paddingRight = t.right + "px",
                    this.renderedElement.style.paddingBottom = t.bottom + "px",
                    this.renderedElement.style.paddingLeft = t.left + "px"),
                    this.separatorElement && (this.separatorOrientation == d.Orientation.Horizontal ? (this.separatorElement.style.marginLeft = "-" + e.left + "px",
                    this.separatorElement.style.marginRight = "-" + e.right + "px") : (this.separatorElement.style.marginTop = "-" + e.top + "px",
                    this.separatorElement.style.marginBottom = "-" + e.bottom + "px"))
                }
            }
            ,
            e.prototype.internalRender = function() {
                var t = this
                  , e = document.createElement("div");
                switch (e.className = "ac-container",
                e.style.display = "flex",
                e.style.flexDirection = "column",
                X.useAdvancedCardBottomTruncation && (e.style.minHeight = "-webkit-min-content"),
                this.verticalContentAlignment) {
                case d.VerticalAlignment.Center:
                    e.style.justifyContent = "center";
                    break;
                case d.VerticalAlignment.Bottom:
                    e.style.justifyContent = "flex-end";
                    break;
                default:
                    e.style.justifyContent = "flex-start"
                }
                if (this.hasBackground) {
                    this.backgroundImage && this.backgroundImage.apply(e);
                    var n = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.default);
                    f.isNullOrEmpty(n.backgroundColor) || (e.style.backgroundColor = f.stringToCssColor(n.backgroundColor))
                }
                if (this.selectAction && this.hostConfig.supportsInteractivity && (e.classList.add("ac-selectable"),
                e.tabIndex = 0,
                e.setAttribute("role", "button"),
                e.setAttribute("aria-label", this.selectAction.title),
                e.onclick = function(e) {
                    null != t.selectAction && (t.selectAction.execute(),
                    e.cancelBubble = !0)
                }
                ,
                e.onkeypress = function(e) {
                    null != t.selectAction && (13 != e.keyCode && 32 != e.keyCode || t.selectAction.execute())
                }
                ),
                this._items.length > 0)
                    for (var r = 0, i = 0; i < this._items.length; i++) {
                        var o = this.isElementAllowed(this._items[i], this.getForbiddenElementTypes()) ? this._items[i].render() : null;
                        o && (r > 0 && this._items[i].separatorElement && (this._items[i].separatorElement.style.flex = "0 0 auto",
                        f.appendChild(e, this._items[i].separatorElement)),
                        f.appendChild(e, o),
                        r++)
                    }
                return e
            }
            ,
            e.prototype.truncateOverflow = function(t) {
                for (var e = this.renderedElement.offsetTop + t + 1, n = function(t) {
                    var r = t.renderedElement;
                    if (r)
                        switch (f.getFitStatus(r, e)) {
                        case d.ContainerFitStatus.FullyInContainer:
                            t.resetOverflow() && n(t);
                            break;
                        case d.ContainerFitStatus.Overflowing:
                            var i = e - r.offsetTop;
                            t.handleOverflow(i);
                            break;
                        case d.ContainerFitStatus.FullyOutOfContainer:
                            t.handleOverflow(0)
                        }
                }, r = 0, i = this._items; r < i.length; r++) {
                    var o = i[r];
                    n(o)
                }
                return !0
            }
            ,
            e.prototype.undoOverflowTruncation = function() {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].resetOverflow()
                }
            }
            ,
            Object.defineProperty(e.prototype, "hasBackground", {
                get: function() {
                    var t = this.getParentContainer();
                    return void 0 != this.backgroundImage || this.hasExplicitStyle && !!t && t.style != this.style
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "defaultStyle", {
                get: function() {
                    return d.ContainerStyle.Default
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "allowCustomStyle", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "style", {
                get: function() {
                    return this.allowCustomStyle && this._style && this.hostConfig.containerStyles.getStyleByName(this._style) ? this._style : this.defaultStyle
                },
                set: function(t) {
                    this._style = t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "padding", {
                get: function() {
                    return this.getPadding()
                },
                set: function(t) {
                    this.setPadding(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getJsonTypeName = function() {
                return "Container"
            }
            ,
            e.prototype.isFirstElement = function(t) {
                for (var e = 0; e < this._items.length; e++)
                    if (this._items[e].isVisible)
                        return this._items[e] == t;
                return !1
            }
            ,
            e.prototype.isLastElement = function(t) {
                for (var e = this._items.length - 1; e >= 0; e--)
                    if (this._items[e].isVisible)
                        return this._items[e] == t;
                return !1
            }
            ,
            e.prototype.validate = function() {
                var t = [];
                if (this._style) {
                    this.hostConfig.containerStyles.getStyleByName(this._style) || t.push({
                        error: d.ValidationError.InvalidPropertyValue,
                        message: "Unknown container style: " + this._style
                    })
                }
                for (var e = 0; e < this._items.length; e++)
                    !this.hostConfig.supportsInteractivity && this._items[e].isInteractive && t.push({
                        error: d.ValidationError.InteractivityNotAllowed,
                        message: "Interactivity is not allowed."
                    }),
                    this.isElementAllowed(this._items[e], this.getForbiddenElementTypes()) || t.push({
                        error: d.ValidationError.InteractivityNotAllowed,
                        message: "Elements of type " + this._items[e].getJsonTypeName() + " are not allowed in this container."
                    }),
                    t = t.concat(this._items[e].validate());
                return t
            }
            ,
            e.prototype.parse = function(e, n) {
                void 0 === n && (n = "items"),
                t.prototype.parse.call(this, e);
                var r = e.backgroundImage;
                if (r && (this.backgroundImage = new q,
                "string" == typeof r ? (this.backgroundImage.url = r,
                this.backgroundImage.mode = d.BackgroundImageMode.Stretch) : "object" == typeof r && (this.backgroundImage = new q,
                this.backgroundImage.parse(e.backgroundImage))),
                this.verticalContentAlignment = f.getEnumValueOrDefault(d.VerticalAlignment, e.verticalContentAlignment, this.verticalContentAlignment),
                this._style = e.style,
                null != e[n]) {
                    var i = e[n];
                    this.clear();
                    for (var s = 0; s < i.length; s++) {
                        var a = i[s].type
                          , c = X.elementTypeRegistry.createInstance(a);
                        c ? (this.addItem(c),
                        c.parse(i[s])) : p({
                            error: d.ValidationError.UnknownElementType,
                            message: "Unknown element type: " + a
                        })
                    }
                }
                var u = e.selectAction;
                void 0 != u && (this.selectAction = o(u))
            }
            ,
            e.prototype.addItem = function(t) {
                if (t.parent)
                    throw new Error("The element already belongs to another container.");
                if (!t.isStandalone)
                    throw new Error("Elements of type " + t.getJsonTypeName() + " cannot be used as standalone elements.");
                this._items.push(t),
                t.setParent(this)
            }
            ,
            e.prototype.clear = function() {
                this._items = []
            }
            ,
            e.prototype.canContentBleed = function() {
                return !this.hasBackground && t.prototype.canContentBleed.call(this)
            }
            ,
            e.prototype.getAllInputs = function() {
                for (var t = [], e = 0; e < this._items.length; e++) {
                    var n = this._items[e];
                    t = t.concat(n.getAllInputs())
                }
                return t
            }
            ,
            e.prototype.getElementById = function(e) {
                var n = t.prototype.getElementById.call(this, e);
                if (!n)
                    for (var r = 0; r < this._items.length && !(n = this._items[r].getElementById(e)); r++)
                        ;
                return n
            }
            ,
            e.prototype.getActionById = function(e) {
                var n = t.prototype.getActionById.call(this, e);
                if (!n && (this.selectAction && (n = this.selectAction.getActionById(e)),
                !n))
                    for (var r = 0; r < this._items.length && !(n = this._items[r].getActionById(e)); r++)
                        ;
                return n
            }
            ,
            e.prototype.renderSpeech = function() {
                if (null != this.speak)
                    return this.speak;
                var t = null;
                if (this._items.length > 0) {
                    t = "";
                    for (var e = 0; e < this._items.length; e++) {
                        var n = this._items[e].renderSpeech();
                        n && (t += n)
                    }
                }
                return t
            }
            ,
            e.prototype.updateLayout = function(t) {
                if (void 0 === t && (t = !0),
                this.applyPadding(),
                t)
                    for (var e = 0; e < this._items.length; e++)
                        this._items[e].updateLayout()
            }
            ,
            Object.defineProperty(e.prototype, "selectAction", {
                get: function() {
                    return this._selectAction
                },
                set: function(t) {
                    this._selectAction = t,
                    this._selectAction && this._selectAction.setParent(this)
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(b);
        e.Container = H;
        var W = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._computedWeight = 0,
                e.width = "auto",
                e.pixelWidth = 0,
                e
            }
            return h(e, t),
            e.prototype.adjustRenderedElementSize = function(t) {
                t.style.minWidth = "0",
                this.pixelWidth > 0 ? t.style.flex = "0 0 " + this.pixelWidth + "px" : "number" == typeof this.width ? t.style.flex = "1 1 " + (this._computedWeight > 0 ? this._computedWeight : this.width) + "%" : "auto" === this.width ? t.style.flex = "0 1 auto" : t.style.flex = "1 1 50px"
            }
            ,
            Object.defineProperty(e.prototype, "separatorOrientation", {
                get: function() {
                    return d.Orientation.Vertical
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getJsonTypeName = function() {
                return "Column"
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e);
                var n = e.width;
                void 0 === n && void 0 !== (n = e.size) && p({
                    error: d.ValidationError.Deprecated,
                    message: 'The "Column.size" property is deprecated and will be removed. Use the "Column.width" property instead.'
                });
                var r = !1;
                if ("number" == typeof n)
                    n <= 0 && (r = !0);
                else if ("string" == typeof n) {
                    if ("auto" != n && "stretch" != n) {
                        var i = parseInt(n);
                        isNaN(i) ? r = !0 : n = i
                    }
                } else
                    n && (r = !0);
                r ? p({
                    error: d.ValidationError.InvalidPropertyValue,
                    message: "Invalid column width: " + n
                }) : this.width = n
            }
            ,
            Object.defineProperty(e.prototype, "isStandalone", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(H);
        e.Column = W;
        var G = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._columns = [],
                e
            }
            return h(e, t),
            e.prototype.applyPadding = function() {
                if (this.padding && this.renderedElement) {
                    var t = this.padding.toSpacingDefinition(this.hostConfig);
                    this.renderedElement.style.paddingTop = t.top + "px",
                    this.renderedElement.style.paddingRight = t.right + "px",
                    this.renderedElement.style.paddingBottom = t.bottom + "px",
                    this.renderedElement.style.paddingLeft = t.left + "px"
                }
            }
            ,
            e.prototype.internalRender = function() {
                var t = this;
                if (this._columns.length > 0) {
                    var e = document.createElement("div");
                    switch (e.className = "ac-columnSet",
                    e.style.display = "flex",
                    X.useAdvancedCardBottomTruncation && (e.style.minHeight = "-webkit-min-content"),
                    this.selectAction && this.hostConfig.supportsInteractivity && (e.classList.add("ac-selectable"),
                    e.onclick = function(e) {
                        t.selectAction.execute(),
                        e.cancelBubble = !0
                    }
                    ),
                    this.horizontalAlignment) {
                    case d.HorizontalAlignment.Center:
                        e.style.justifyContent = "center";
                        break;
                    case d.HorizontalAlignment.Right:
                        e.style.justifyContent = "flex-end";
                        break;
                    default:
                        e.style.justifyContent = "flex-start"
                    }
                    for (var n = 0, r = 0; r < this._columns.length; r++)
                        "number" == typeof this._columns[r].width && (n += this._columns[r].width);
                    for (var i = 0, r = 0; r < this._columns.length; r++) {
                        if ("number" == typeof this._columns[r].width && n > 0) {
                            var o = 100 / n * this._columns[r].width;
                            this._columns[r]._computedWeight = o
                        }
                        var s = this._columns[r].render();
                        s && (i > 0 && this._columns[r].separatorElement && (this._columns[r].separatorElement.style.flex = "0 0 auto",
                        f.appendChild(e, this._columns[r].separatorElement)),
                        f.appendChild(e, s),
                        i++)
                    }
                    return i > 0 ? e : null
                }
                return null
            }
            ,
            e.prototype.truncateOverflow = function(t) {
                for (var e = 0, n = this._columns; e < n.length; e++) {
                    n[e].handleOverflow(t)
                }
                return !0
            }
            ,
            e.prototype.undoOverflowTruncation = function() {
                for (var t = 0, e = this._columns; t < e.length; t++) {
                    e[t].resetOverflow()
                }
            }
            ,
            Object.defineProperty(e.prototype, "padding", {
                get: function() {
                    return this.getPadding()
                },
                set: function(t) {
                    this.setPadding(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getJsonTypeName = function() {
                return "ColumnSet"
            }
            ,
            e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e);
                var n = e.selectAction;
                if (void 0 != n && (this.selectAction = o(n)),
                null != e.columns) {
                    var r = e.columns;
                    this._columns = [];
                    for (var i = 0; i < r.length; i++) {
                        var s = new W;
                        s.parse(r[i]),
                        this.addColumn(s)
                    }
                }
            }
            ,
            e.prototype.validate = function() {
                for (var t = [], e = 0, n = 0, r = 0; r < this._columns.length; r++)
                    "number" == typeof this._columns[r].width ? e++ : "stretch" === this._columns[r].width && n++,
                    t = t.concat(this._columns[r].validate());
                return e > 0 && n > 0 && t.push({
                    error: d.ValidationError.Hint,
                    message: "It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space."
                }),
                t
            }
            ,
            e.prototype.updateLayout = function(t) {
                if (void 0 === t && (t = !0),
                this.applyPadding(),
                t)
                    for (var e = 0; e < this._columns.length; e++)
                        this._columns[e].updateLayout()
            }
            ,
            e.prototype.addColumn = function(t) {
                if (t.parent)
                    throw new Error("This column already belongs to another ColumnSet.");
                this._columns.push(t),
                t.setParent(this)
            }
            ,
            e.prototype.isLeftMostElement = function(t) {
                return 0 == this._columns.indexOf(t)
            }
            ,
            e.prototype.isRightMostElement = function(t) {
                return this._columns.indexOf(t) == this._columns.length - 1
            }
            ,
            e.prototype.getAllInputs = function() {
                for (var t = [], e = 0; e < this._columns.length; e++)
                    t = t.concat(this._columns[e].getAllInputs());
                return t
            }
            ,
            e.prototype.getElementById = function(e) {
                var n = t.prototype.getElementById.call(this, e);
                if (!n)
                    for (var r = 0; r < this._columns.length && !(n = this._columns[r].getElementById(e)); r++)
                        ;
                return n
            }
            ,
            e.prototype.getActionById = function(t) {
                for (var e = null, n = 0; n < this._columns.length && !(e = this._columns[n].getActionById(t)); n++)
                    ;
                return e
            }
            ,
            e.prototype.renderSpeech = function() {
                if (null != this.speak)
                    return this.speak;
                var t = "";
                if (this._columns.length > 0)
                    for (var e = 0; e < this._columns.length; e++)
                        t += this._columns[e].renderSpeech();
                return t
            }
            ,
            Object.defineProperty(e.prototype, "selectAction", {
                get: function() {
                    return this._selectAction
                },
                set: function(t) {
                    this._selectAction = t,
                    this._selectAction && this._selectAction.setParent(this)
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(b);
        e.ColumnSet = G;
        var K = function() {
            function t(t, e) {
                void 0 === t && (t = 1),
                void 0 === e && (e = 1),
                this._isValid = !0,
                this._major = t,
                this._minor = e
            }
            return t.parse = function(e) {
                if (!e)
                    return null;
                var n = new t;
                n._versionString = e;
                var r = /(\d+).(\d+)/gi
                  , i = r.exec(e);
                return null != i && 3 == i.length ? (n._major = parseInt(i[1]),
                n._minor = parseInt(i[2])) : n._isValid = !1,
                n
            }
            ,
            t.prototype.toString = function() {
                return this._isValid ? this._major + "." + this._minor : this._versionString
            }
            ,
            Object.defineProperty(t.prototype, "major", {
                get: function() {
                    return this._major
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "minor", {
                get: function() {
                    return this._minor
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isValid", {
                get: function() {
                    return this._isValid
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }();
        e.Version = K;
        var $ = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._actionCollection = new U(e),
                e._actionCollection.onHideActionCardPane = function() {
                    e.showBottomSpacer(null)
                }
                ,
                e._actionCollection.onShowActionCardPane = function(t) {
                    e.hideBottomSpacer(null)
                }
                ,
                e
            }
            return h(e, t),
            e.prototype.internalRender = function() {
                var e = t.prototype.internalRender.call(this)
                  , n = this._actionCollection.render(this.hostConfig.actions.actionsOrientation);
                return n && (f.appendChild(e, f.renderSeparation({
                    spacing: this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing),
                    lineThickness: null,
                    lineColor: null
                }, d.Orientation.Horizontal)),
                f.appendChild(e, n)),
                e.children.length > 0 ? e : null
            }
            ,
            e.prototype.getActionById = function(e) {
                var n = this._actionCollection.getActionById(e);
                return n || t.prototype.getActionById.call(this, e)
            }
            ,
            e.prototype.parse = function(e, n) {
                if (void 0 === n && (n = "items"),
                t.prototype.parse.call(this, e, n),
                void 0 != e.actions)
                    for (var r = e.actions, i = 0; i < r.length; i++) {
                        var s = o(r[i]);
                        null != s && this.addAction(s)
                    }
            }
            ,
            e.prototype.validate = function() {
                var e = t.prototype.validate.call(this);
                return this._actionCollection && (e = e.concat(this._actionCollection.validate())),
                e
            }
            ,
            e.prototype.isLastElement = function(e) {
                return t.prototype.isLastElement.call(this, e) && 0 == this._actionCollection.items.length
            }
            ,
            e.prototype.addAction = function(t) {
                this._actionCollection.addAction(t)
            }
            ,
            e.prototype.clear = function() {
                t.prototype.clear.call(this),
                this._actionCollection.clear()
            }
            ,
            e.prototype.getAllInputs = function() {
                return t.prototype.getAllInputs.call(this).concat(this._actionCollection.getAllInputs())
            }
            ,
            Object.defineProperty(e.prototype, "isStandalone", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(H);
        e.ContainerWithActions = $;
        var Y = function() {
            function t() {
                this._items = [],
                this.reset()
            }
            return t.prototype.findTypeRegistration = function(t) {
                for (var e = 0; e < this._items.length; e++)
                    if (this._items[e].typeName === t)
                        return this._items[e];
                return null
            }
            ,
            t.prototype.clear = function() {
                this._items = []
            }
            ,
            t.prototype.registerType = function(t, e) {
                var n = this.findTypeRegistration(t);
                null != n ? n.createInstance = e : (n = {
                    typeName: t,
                    createInstance: e
                },
                this._items.push(n))
            }
            ,
            t.prototype.unregisterType = function(t) {
                for (var e = 0; e < this._items.length; e++)
                    if (this._items[e].typeName === t)
                        return void this._items.splice(e, 1)
            }
            ,
            t.prototype.createInstance = function(t) {
                var e = this.findTypeRegistration(t);
                return e ? e.createInstance() : null
            }
            ,
            t
        }();
        e.TypeRegistry = Y;
        var Z = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t),
            e.prototype.reset = function() {
                this.clear(),
                this.registerType("Container", function() {
                    return new H
                }),
                this.registerType("TextBlock", function() {
                    return new _
                }),
                this.registerType("Image", function() {
                    return new S
                }),
                this.registerType("ImageSet", function() {
                    return new x
                }),
                this.registerType("FactSet", function() {
                    return new w
                }),
                this.registerType("ColumnSet", function() {
                    return new G
                }),
                this.registerType("Input.Text", function() {
                    return new E
                }),
                this.registerType("Input.Date", function() {
                    return new P
                }),
                this.registerType("Input.Time", function() {
                    return new D
                }),
                this.registerType("Input.Number", function() {
                    return new I
                }),
                this.registerType("Input.ChoiceSet", function() {
                    return new O
                }),
                this.registerType("Input.Toggle", function() {
                    return new A
                })
            }
            ,
            e
        }(Y);
        e.ElementTypeRegistry = Z;
        var J = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t),
            e.prototype.reset = function() {
                this.clear(),
                this.registerType("Action.OpenUrl", function() {
                    return new j
                }),
                this.registerType("Action.Submit", function() {
                    return new L
                }),
                this.registerType("Action.ShowCard", function() {
                    return new B
                })
            }
            ,
            e
        }(Y);
        e.ActionTypeRegistry = J;
        var X = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._cardTypeName = "AdaptiveCard",
                e.onAnchorClicked = null,
                e.onExecuteAction = null,
                e.onElementVisibilityChanged = null,
                e.onInlineCardExpanded = null,
                e.onParseElement = null,
                e.version = new K(1,0),
                e
            }
            return h(e, t),
            e.prototype.isVersionSupported = function() {
                return !!this.bypassVersionCheck || !(!this.version || e.currentVersion.major < this.version.major || e.currentVersion.major == this.version.major && e.currentVersion.minor < this.version.minor)
            }
            ,
            e.prototype.showBottomSpacer = function(t) {
                t && !this.isLastElement(t) || this.applyPadding()
            }
            ,
            e.prototype.hideBottomSpacer = function(t) {
                t && !this.isLastElement(t) || this.renderedElement && (this.renderedElement.style.paddingBottom = "0px")
            }
            ,
            e.prototype.applyPadding = function() {
                var t = this.padding ? this.padding.toSpacingDefinition(this.hostConfig) : this.internalPadding.toSpacingDefinition(this.hostConfig);
                this.renderedElement.style.paddingTop = t.top + "px",
                this.renderedElement.style.paddingRight = t.right + "px",
                this.renderedElement.style.paddingBottom = t.bottom + "px",
                this.renderedElement.style.paddingLeft = t.left + "px"
            }
            ,
            e.prototype.internalRender = function() {
                var n = t.prototype.internalRender.call(this);
                return e.useAdvancedCardBottomTruncation && (n.style.minHeight = null),
                n
            }
            ,
            Object.defineProperty(e.prototype, "bypassVersionCheck", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "defaultPadding", {
                get: function() {
                    return new v(d.Spacing.Padding,d.Spacing.Padding,d.Spacing.Padding,d.Spacing.Padding)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "allowCustomPadding", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "allowCustomStyle", {
                get: function() {
                    return this.hostConfig.adaptiveCard && this.hostConfig.adaptiveCard.allowCustomStyle
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "hasBackground", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getJsonTypeName = function() {
                return "AdaptiveCard"
            }
            ,
            e.prototype.validate = function() {
                var n = [];
                return "AdaptiveCard" != this._cardTypeName && n.push({
                    error: d.ValidationError.MissingCardType,
                    message: 'Invalid or missing card type. Make sure the card\'s type property is set to "AdaptiveCard".'
                }),
                this.bypassVersionCheck || this.version && this.version.isValid ? this.isVersionSupported() || n.push({
                    error: d.ValidationError.UnsupportedCardVersion,
                    message: "The specified card version (" + this.version + ") is not supported. The maximum supported card version is " + e.currentVersion
                }) : n.push({
                    error: d.ValidationError.PropertyCantBeNull,
                    message: this.version ? "Invalid version: " + this.version : "The version property must be specified."
                }),
                n.concat(t.prototype.validate.call(this))
            }
            ,
            e.prototype.parse = function(e) {
                this._cardTypeName = e.type;
                var n = e.lang;
                if (n && "string" == typeof n)
                    try {
                        this.lang = n
                    } catch (t) {
                        p({
                            error: d.ValidationError.InvalidPropertyValue,
                            message: t.message
                        })
                    }
                this.version = K.parse(e.version),
                this.fallbackText = e.fallbackText,
                t.prototype.parse.call(this, e, "body")
            }
            ,
            e.prototype.render = function(e) {
                var n;
                return this.isVersionSupported() ? (n = t.prototype.render.call(this)) && (n.tabIndex = 0,
                f.isNullOrEmpty(this.speak) || n.setAttribute("aria-label", this.speak)) : (n = document.createElement("div"),
                n.innerHTML = this.fallbackText ? this.fallbackText : "The specified card version is not supported."),
                e && (e.appendChild(n),
                this.updateLayout()),
                n
            }
            ,
            e.prototype.updateLayout = function(n) {
                if (void 0 === n && (n = !0),
                t.prototype.updateLayout.call(this, n),
                e.useAdvancedCardBottomTruncation && this.isRendered()) {
                    var r = this.renderedElement
                      , i = this.hostConfig.getEffectiveSpacing(d.Spacing.Default);
                    this.handleOverflow(r.offsetHeight - i)
                }
            }
            ,
            e.prototype.canContentBleed = function() {
                return !0
            }
            ,
            e.currentVersion = new K(1,0),
            e.useAutomaticContainerBleeding = !1,
            e.preExpandSingleShowCardAction = !1,
            e.useAdvancedTextBlockTruncation = !0,
            e.useAdvancedCardBottomTruncation = !1,
            e.useMarkdownInRadioButtonAndCheckbox = !0,
            e.elementTypeRegistry = new Z,
            e.actionTypeRegistry = new J,
            e.onAnchorClicked = null,
            e.onExecuteAction = null,
            e.onElementVisibilityChanged = null,
            e.onInlineCardExpanded = null,
            e.onParseElement = null,
            e.onParseError = null,
            e.processMarkdown = function(t) {
                return window.markdownit ? window.markdownit().render(t) : t
            }
            ,
            e
        }($);
        e.AdaptiveCard = X;
        var Q = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.suppressStyle = !1,
                e
            }
            return h(e, t),
            Object.defineProperty(e.prototype, "bypassVersionCheck", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "defaultPadding", {
                get: function() {
                    return new v(this.suppressStyle ? d.Spacing.None : d.Spacing.Padding,d.Spacing.Padding,this.suppressStyle ? d.Spacing.None : d.Spacing.Padding,d.Spacing.Padding)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "defaultStyle", {
                get: function() {
                    return this.suppressStyle ? d.ContainerStyle.Default : this.hostConfig.actions.showCard.style ? this.hostConfig.actions.showCard.style : d.ContainerStyle.Emphasis
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.render = function(e) {
                var n = t.prototype.render.call(this, e);
                return n.setAttribute("aria-live", "polite"),
                n.removeAttribute("tabindex"),
                n
            }
            ,
            e.prototype.getForbiddenActionTypes = function() {
                return [B]
            }
            ,
            e
        }(X)
          , tt = new m.HostConfig({
            supportsInteractivity: !0,
            fontFamily: "Segoe UI",
            spacing: {
                small: 10,
                default: 20,
                medium: 30,
                large: 40,
                extraLarge: 50,
                padding: 20
            },
            separator: {
                lineThickness: 1,
                lineColor: "#EEEEEE"
            },
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            },
            imageSizes: {
                small: 40,
                medium: 80,
                large: 160
            },
            containerStyles: {
                default: {
                    backgroundColor: "#FFFFFF",
                    foregroundColors: {
                        default: {
                            default: "#333333",
                            subtle: "#EE333333"
                        },
                        dark: {
                            default: "#000000",
                            subtle: "#66000000"
                        },
                        light: {
                            default: "#FFFFFF",
                            subtle: "#33000000"
                        },
                        accent: {
                            default: "#2E89FC",
                            subtle: "#882E89FC"
                        },
                        attention: {
                            default: "#cc3300",
                            subtle: "#DDcc3300"
                        },
                        good: {
                            default: "#54a254",
                            subtle: "#DD54a254"
                        },
                        warning: {
                            default: "#e69500",
                            subtle: "#DDe69500"
                        }
                    }
                },
                emphasis: {
                    backgroundColor: "#08000000",
                    foregroundColors: {
                        default: {
                            default: "#333333",
                            subtle: "#EE333333"
                        },
                        dark: {
                            default: "#000000",
                            subtle: "#66000000"
                        },
                        light: {
                            default: "#FFFFFF",
                            subtle: "#33000000"
                        },
                        accent: {
                            default: "#2E89FC",
                            subtle: "#882E89FC"
                        },
                        attention: {
                            default: "#cc3300",
                            subtle: "#DDcc3300"
                        },
                        good: {
                            default: "#54a254",
                            subtle: "#DD54a254"
                        },
                        warning: {
                            default: "#e69500",
                            subtle: "#DDe69500"
                        }
                    }
                }
            },
            actions: {
                maxActions: 5,
                spacing: d.Spacing.Default,
                buttonSpacing: 10,
                showCard: {
                    actionMode: d.ShowCardActionMode.Inline,
                    inlineTopMargin: 16
                },
                actionsOrientation: d.Orientation.Horizontal,
                actionAlignment: d.ActionAlignment.Left
            },
            adaptiveCard: {
                allowCustomStyle: !1
            },
            imageSet: {
                imageSize: d.Size.Medium,
                maxImageHeight: 100
            },
            factSet: {
                title: {
                    color: d.TextColor.Default,
                    size: d.TextSize.Default,
                    isSubtle: !1,
                    weight: d.TextWeight.Bolder,
                    wrap: !0,
                    maxWidth: 150
                },
                value: {
                    color: d.TextColor.Default,
                    size: d.TextSize.Default,
                    isSubtle: !1,
                    weight: d.TextWeight.Default,
                    wrap: !0
                },
                spacing: 10
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            for (var n = [new s(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g), new a(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)], r = e, i = 0; i < n.length; i++)
                r = n[i].format(t, r);
            return r
        }
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t) {
                this._regularExpression = t
            }
            return t.prototype.format = function(t, e) {
                for (var n, r = e; null != (n = this._regularExpression.exec(e)); )
                    r = r.replace(n[0], this.internalFormat(t, n));
                return r
            }
            ,
            t
        }()
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.internalFormat = function(t, e) {
                var n = new Date(Date.parse(e[1]))
                  , r = void 0 != e[2] ? e[2].toLowerCase() : "compact";
                return "compact" != r ? n.toLocaleDateString(t, {
                    day: "numeric",
                    weekday: r,
                    month: r,
                    year: "numeric"
                }) : n.toLocaleDateString()
            }
            ,
            e
        }(o)
          , a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.internalFormat = function(t, e) {
                return new Date(Date.parse(e[1])).toLocaleTimeString(t, {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
            ,
            e
        }(o);
        e.formatText = r
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(9)
          , o = n(51)
          , s = n(173)
          , a = n(174)
          , c = function(t) {
            var e = t.attachments
              , n = t.attachmentLayout
              , a = r.__rest(t, ["attachments", "attachmentLayout"]);
            return e && 0 !== e.length ? "carousel" === n ? i.createElement(s.Carousel, r.__assign({
                attachments: e
            }, a)) : i.createElement("div", {
                className: "wc-list"
            }, e.map(function(e, n) {
                return i.createElement(o.AttachmentView, {
                    key: n,
                    attachment: e,
                    format: t.format,
                    onCardAction: t.onCardAction,
                    onImageLoad: t.onImageLoad
                })
            })) : null
        }
          , u = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return r.__extends(e, t),
            e.prototype.shouldComponentUpdate = function(t) {
                return this.props.activity !== t.activity || this.props.format !== t.format || "message" === this.props.activity.type && "carousel" === this.props.activity.attachmentLayout && this.props.size !== t.size
            }
            ,
            e.prototype.render = function() {
                var t = this.props
                  , e = t.activity
                  , n = r.__rest(t, ["activity"]);
                switch (e.type) {
                case "message":
                    return i.createElement("div", null, i.createElement(a.FormattedText, {
                        text: e.text,
                        format: e.textFormat,
                        onImageLoad: n.onImageLoad
                    }), i.createElement(c, {
                        attachments: e.attachments,
                        attachmentLayout: e.attachmentLayout,
                        format: n.format,
                        onCardAction: n.onCardAction,
                        onImageLoad: n.onImageLoad,
                        size: n.size
                    }));
                case "typing":
                    return i.createElement("div", {
                        className: "wc-typing"
                    })
                }
            }
            ,
            e
        }(i.Component);
        e.ActivityView = u
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (!t.actions)
                return t;
            var e = t.actions.reduce(function(t, e) {
                switch (e.type) {
                case "Action.Submit":
                    break;
                case "Action.ShowCard":
                    t.push(i.__assign({}, e, {
                        card: r(e.card)
                    }));
                    break;
                default:
                    t.push(e)
                }
                return t
            }, []);
            return i.__assign({}, t, {
                nextActions: e
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(10)
          , o = n(41)
          , s = n(93)
          , a = n(9)
          , c = n(59)
          , u = n(34)
          , l = n(165)
          , p = n(21)
          , h = new s({
            breaks: !0,
            html: !1,
            linkify: !0,
            typographer: !0,
            xhtmlOut: !0
        });
        o.AdaptiveCard.processMarkdown = function(t) {
            return h.render(t)
        }
        ;
        var d = new o.HostConfig(l)
          , f = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.handleImageLoad = n.handleImageLoad.bind(n),
                n.onClick = n.onClick.bind(n),
                n.saveDiv = n.saveDiv.bind(n),
                n
            }
            return i.__extends(e, t),
            e.prototype.saveDiv = function(t) {
                this.divRef = t
            }
            ,
            e.prototype.onClick = function(t) {
                if (this.props.onClick)
                    switch (t.target.tagName) {
                    case "A":
                    case "AUDIO":
                    case "VIDEO":
                    case "BUTTON":
                    case "INPUT":
                    case "LABEL":
                    case "TEXTAREA":
                    case "SELECT":
                        break;
                    default:
                        this.props.onClick(t)
                    }
            }
            ,
            e.prototype.onExecuteAction = function(t) {
                if (t instanceof o.OpenUrlAction)
                    window.open(t.url);
                else if (t instanceof o.SubmitAction && void 0 !== t.data)
                    if ("object" == typeof t.data && t.data.__isBotFrameworkCardAction) {
                        var e = t.data;
                        this.props.onCardAction(e.type, e.value)
                    } else
                        this.props.onCardAction("string" == typeof t.data ? "imBack" : "postBack", t.data)
            }
            ,
            e.prototype.componentDidMount = function() {
                this.mountAdaptiveCards()
            }
            ,
            e.prototype.componentDidUpdate = function(t) {
                t.hostConfig === this.props.hostConfig && t.jsonCard === this.props.jsonCard && t.nativeCard === this.props.nativeCard || (this.unmountAdaptiveCards(),
                this.mountAdaptiveCards())
            }
            ,
            e.prototype.handleImageLoad = function() {
                this.props.onImageLoad && this.props.onImageLoad.apply(this, arguments)
            }
            ,
            e.prototype.unmountAdaptiveCards = function() {
                var t = c.findDOMNode(this.divRef);
                [].forEach.call(t.children, function(e) {
                    return t.removeChild(e)
                })
            }
            ,
            e.prototype.mountAdaptiveCards = function() {
                var t = this
                  , e = this.props.nativeCard || new o.AdaptiveCard;
                e.hostConfig = this.props.hostConfig || d;
                var n = [];
                if (!this.props.nativeCard && this.props.jsonCard && (this.props.jsonCard.version = this.props.jsonCard.version || "0.5",
                e.parse(r(this.props.jsonCard)),
                n = e.validate()),
                e.onExecuteAction = function(e) {
                    return t.onExecuteAction(e)
                }
                ,
                0 === n.length) {
                    var i = void 0;
                    try {
                        i = e.render()
                    } catch (t) {
                        var s = {
                            error: -1,
                            message: t
                        };
                        n.push(s),
                        t.stack && (s.message += "\n" + t.stack)
                    }
                    if (i) {
                        if (this.props.onImageLoad) {
                            var a = i.querySelectorAll("img");
                            a && a.length > 0 && Array.prototype.forEach.call(a, function(e) {
                                e.addEventListener("load", t.handleImageLoad)
                            })
                        }
                        return void c.findDOMNode(this.divRef).appendChild(i)
                    }
                }
                n.length > 0 && (console.log("Error(s) rendering AdaptiveCard:"),
                n.forEach(function(t) {
                    return console.log(t.message)
                }),
                this.setState({
                    errors: n.map(function(t) {
                        return t.message
                    })
                }))
            }
            ,
            e.prototype.render = function() {
                var t, e = this.state && this.state.errors && this.state.errors.length > 0;
                return t = e ? a.createElement("div", null, a.createElement("svg", {
                    className: "error-icon",
                    viewBox: "0 0 15 12.01"
                }, a.createElement("path", {
                    d: "M7.62 8.63v-.38H.94a.18.18 0 0 1-.19-.19V.94A.18.18 0 0 1 .94.75h10.12a.18.18 0 0 1 .19.19v3.73H12V.94a.91.91 0 0 0-.07-.36 1 1 0 0 0-.5-.5.91.91 0 0 0-.37-.08H.94a.91.91 0 0 0-.37.07 1 1 0 0 0-.5.5.91.91 0 0 0-.07.37v7.12a.91.91 0 0 0 .07.36 1 1 0 0 0 .5.5.91.91 0 0 0 .37.08h6.72c-.01-.12-.04-.24-.04-.37z M11.62 5.26a3.27 3.27 0 0 1 1.31.27 3.39 3.39 0 0 1 1.8 1.8 3.36 3.36 0 0 1 0 2.63 3.39 3.39 0 0 1-1.8 1.8 3.36 3.36 0 0 1-2.62 0 3.39 3.39 0 0 1-1.8-1.8 3.36 3.36 0 0 1 0-2.63 3.39 3.39 0 0 1 1.8-1.8 3.27 3.27 0 0 1 1.31-.27zm0 6a2.53 2.53 0 0 0 1-.21A2.65 2.65 0 0 0 14 9.65a2.62 2.62 0 0 0 0-2 2.65 2.65 0 0 0-1.39-1.39 2.62 2.62 0 0 0-2 0A2.65 2.65 0 0 0 9.2 7.61a2.62 2.62 0 0 0 0 2A2.65 2.65 0 0 0 10.6 11a2.53 2.53 0 0 0 1.02.26zM13 7.77l-.86.86.86.86-.53.53-.86-.86-.86.86-.53-.53.86-.86-.86-.86.53-.53.86.86.86-.86zM1.88 7.13h2.25V4.88H1.88zm.75-1.5h.75v.75h-.75zM5.63 2.63h4.5v.75h-4.5zM1.88 4.13h2.25V1.88H1.88zm.75-1.5h.75v.75h-.75zM9 5.63H5.63v.75h2.64A4 4 0 0 1 9 5.63z"
                })), a.createElement("div", {
                    className: "error-text"
                }, "Can't render card")) : this.props.children ? a.createElement("div", {
                    className: "non-adaptive-content"
                }, this.props.children) : null,
                a.createElement("div", {
                    className: p.classList("wc-card", "wc-adaptive-card", this.props.className, e && "error"),
                    onClick: this.onClick
                }, t, a.createElement("div", {
                    ref: this.saveDiv
                }))
            }
            ,
            e
        }(a.Component);
        e.default = u.connect(function(t) {
            return {
                hostConfig: t.adaptiveCards.hostConfig
            }
        }, {}, function(t, e, n) {
            return i.__assign({}, n, t)
        })(f)
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(163);
        e.App = r.App;
        var i = n(21);
        e.Chat = i.Chat,
        function(t) {
            for (var n in t)
                e.hasOwnProperty(n) || (e[n] = t[n])
        }(n(52));
        var o = n(51);
        e.queryParams = o.queryParams;
        var s = n(164);
        e.SpeechOptions = s.SpeechOptions;
        var a = n(38);
        e.Speech = a.Speech
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(41)
          , o = function() {
            function t() {
                this.card = new i.AdaptiveCard,
                this.container = new i.Container,
                this.card.addItem(this.container)
            }
            return t.prototype.addColumnSet = function(t, e) {
                e = e || this.container;
                var n = new i.ColumnSet;
                return e.addItem(n),
                t.map(function(t) {
                    var e = new i.Column;
                    return e.width = t,
                    n.addColumn(e),
                    e
                })
            }
            ,
            t.prototype.addItems = function(t, e) {
                e = e || this.container,
                t.forEach(function(t) {
                    return e.addItem(t)
                })
            }
            ,
            t.prototype.addTextBlock = function(t, e, n) {
                if (n = n || this.container,
                void 0 !== t) {
                    var r = new i.TextBlock;
                    for (var o in e)
                        r[o] = e[o];
                    r.text = t,
                    n.addItem(r)
                }
            }
            ,
            t.prototype.addButtons = function(e, n) {
                var r = this;
                e && e.forEach(function(e) {
                    r.card.addAction(t.addCardAction(e, n))
                })
            }
            ,
            t.addCardAction = function(t, e) {
                if ("imBack" === t.type || "postBack" === t.type) {
                    var n = new i.SubmitAction
                      , o = r.__assign({
                        __isBotFrameworkCardAction: !0
                    }, t);
                    return n.data = o,
                    n.title = t.title,
                    n
                }
                if ("signin" === t.type && e) {
                    var n = new i.SubmitAction
                      , o = r.__assign({
                        __isBotFrameworkCardAction: !0
                    }, t);
                    return n.data = o,
                    n.title = t.title,
                    n
                }
                var n = new i.OpenUrlAction
                  , o = r.__assign({
                    __isBotFrameworkCardAction: !0
                }, t);
                return n.title = t.title,
                n.url = "call" === t.type ? "tel:" + t.value : t.value,
                n
            }
            ,
            t.prototype.addCommonHeaders = function(t) {
                this.addTextBlock(t.title, {
                    size: i.TextSize.Medium,
                    weight: i.TextWeight.Bolder
                }),
                this.addTextBlock(t.subtitle, {
                    isSubtle: !0,
                    wrap: !0
                }),
                this.addTextBlock(t.text, {
                    wrap: !0
                })
            }
            ,
            t.prototype.addCommon = function(t) {
                this.addCommonHeaders(t),
                this.addButtons(t.buttons)
            }
            ,
            t.prototype.addImage = function(e, n, r) {
                n = n || this.container;
                var o = new i.Image;
                o.url = e,
                o.size = i.Size.Stretch,
                r && (o.selectAction = t.addCardAction(r)),
                n.addItem(o)
            }
            ,
            t
        }();
        e.AdaptiveCardBuilder = o,
        e.buildCommonCard = function(t) {
            if (!t)
                return null;
            var e = new o;
            return e.addCommon(t),
            e.card
        }
        ,
        e.buildOAuthCard = function(t) {
            if (!t)
                return null;
            var e = new o;
            return e.addCommonHeaders(t),
            e.addButtons(t.buttons, !0),
            e.card
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(9)
          , o = n(51)
          , s = n(86)
          , a = n(29)
          , c = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return r.__extends(e, t),
            e.prototype.updateContentWidth = function() {
                var t = this.props.size.width - this.props.format.carouselMargin;
                this.root.style.width = "",
                this.root.offsetWidth > t && (this.root.style.width = t.toString() + "px",
                this.hscroll.updateScrollButtons())
            }
            ,
            e.prototype.componentDidMount = function() {
                this.updateContentWidth()
            }
            ,
            e.prototype.componentDidUpdate = function() {
                this.updateContentWidth()
            }
            ,
            e.prototype.render = function() {
                var t = this;
                return i.createElement("div", {
                    className: "wc-carousel",
                    ref: function(e) {
                        return t.root = e
                    }
                }, i.createElement(s.HScroll, {
                    ref: function(e) {
                        return t.hscroll = e
                    },
                    prevSvgPathData: "M 16.5 22 L 19 19.5 L 13.5 14 L 19 8.5 L 16.5 6 L 8.5 14 L 16.5 22 Z",
                    nextSvgPathData: "M 12.5 22 L 10 19.5 L 15.5 14 L 10 8.5 L 12.5 6 L 20.5 14 L 12.5 22 Z",
                    scrollUnit: "item"
                }, i.createElement(u, r.__assign({}, this.props))))
            }
            ,
            e
        }(i.PureComponent);
        e.Carousel = c;
        var u = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r.__extends(e, t),
            e.prototype.render = function() {
                a.log("rendering CarouselAttachments");
                var t = this.props
                  , e = (t.attachments,
                r.__rest(t, ["attachments"]));
                return i.createElement("ul", null, this.props.attachments.map(function(t, n) {
                    return i.createElement("li", {
                        key: n,
                        className: "wc-carousel-item"
                    }, i.createElement(o.AttachmentView, {
                        attachment: t,
                        format: e.format,
                        onCardAction: e.onCardAction,
                        onImageLoad: e.onImageLoad
                    }))
                }))
            }
            ,
            e
        }(i.PureComponent)
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(93)
          , i = n(9);
        e.FormattedText = function(t) {
            if (!t.text || "" === t.text)
                return null;
            switch (t.format) {
            case "xml":
            case "plain":
                return o(t.text);
            default:
                return c(t.text, t.onImageLoad)
            }
        }
        ;
        var o = function(t) {
            var e = t.replace("\r", "").split("\n")
              , n = e.map(function(t, e) {
                return i.createElement("span", {
                    key: e
                }, t, i.createElement("br", null))
            });
            return i.createElement("span", {
                className: "format-plain"
            }, n)
        }
          , s = new r({
            html: !1,
            xhtmlOut: !0,
            breaks: !0,
            linkify: !0,
            typographer: !0
        })
          , a = s.renderer.rules.link_open || function(t, e, n, r, i) {
            return i.renderToken(t, e, n)
        }
        ;
        s.renderer.rules.link_open = function(t, e, n, r, i) {
            var o = t[e].attrIndex("target");
            return o < 0 ? t[e].attrPush(["target", "_blank"]) : t[e].attrs[o][1] = "_blank",
            a(t, e, n, r, i)
        }
        ;
        var c = function(t, e) {
            var n;
            if (t.trim()) {
                n = t.replace(/<br\s*\/?>/gi, "\n").replace(/\[(.*?)\]\((.*?)( +".*?"){0,1}\)/gi, function(t, e, n, r) {
                    return "[" + e + "](" + s.normalizeLink(n) + (void 0 === r ? "" : r) + ")"
                }).split(/\n *\n|\r\n *\r\n|\r *\r/).map(function(t) {
                    return s.render(t)
                }).join("<br/>")
            } else
                n = t.replace(/ */, "Â ");
            return i.createElement("div", {
                className: "format-markdown",
                dangerouslySetInnerHTML: {
                    __html: n
                }
            })
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(9)
          , o = n(34)
          , s = n(169)
          , a = n(87)
          , c = n(21)
          , u = n(29)
          , l = n(40)
          , p = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.scrollToBottom = !0,
                n.measurableCarousel = function() {
                    return i.createElement(g, {
                        ref: function(t) {
                            return n.carouselActivity = t
                        },
                        activity: {
                            type: "message",
                            id: "",
                            from: {
                                id: ""
                            },
                            attachmentLayout: "carousel"
                        },
                        format: null,
                        fromMe: !1,
                        onClickActivity: null,
                        onClickRetry: null,
                        selected: !1,
                        showTimestamp: !1
                    }, i.createElement("div", {
                        style: {
                            width: n.largeWidth
                        }
                    }, "Â "))
                }
                ,
                n
            }
            return r.__extends(e, t),
            e.prototype.componentWillUpdate = function(t) {
                var e = 1;
                !this.props.hasActivityWithSuggestedActions && t.hasActivityWithSuggestedActions && (e = 40),
                this.scrollToBottom = Math.abs(this.scrollMe.scrollHeight - this.scrollMe.scrollTop - this.scrollMe.offsetHeight) <= e
            }
            ,
            e.prototype.componentDidUpdate = function() {
                if (void 0 === this.props.format.carouselMargin) {
                    var t = f(this.carouselActivity.messageDiv) - this.largeWidth
                      , e = this.carouselActivity.messageDiv.offsetParent;
                    if (e) {
                        var n = e.offsetWidth - t
                          , r = this.props.size.width - n;
                        u.log("history measureMessage " + r),
                        this.props.setMeasurements(r),
                        this.carouselActivity = null
                    }
                }
                this.autoscroll()
            }
            ,
            e.prototype.autoscroll = function() {
                var t = Math.max(0, d(this.scrollMe) - this.scrollContent.offsetHeight);
                this.scrollContent.style.marginTop = t + "px";
                var e = this.props.activities[this.props.activities.length - 1]
                  , n = e && this.props.isFromMe && this.props.isFromMe(e);
                (this.scrollToBottom || n) && (this.scrollMe.scrollTop = this.scrollMe.scrollHeight - this.scrollMe.offsetHeight)
            }
            ,
            e.prototype.doCardAction = function(t, e) {
                return this.props.onClickCardAction(),
                this.props.onCardAction && this.props.onCardAction(),
                this.props.doCardAction(t, e)
            }
            ,
            e.prototype.render = function() {
                var t = this;
                u.log("History props", this);
                var e;
                void 0 !== this.props.size.width && (void 0 === this.props.format.carouselMargin ? (this.largeWidth = 2 * this.props.size.width,
                e = i.createElement(this.measurableCarousel, null)) : e = this.props.activities.map(function(e, n) {
                    return ("message" !== e.type || e.text || e.attachments && !!e.attachments.length) && i.createElement(g, {
                        format: t.props.format,
                        key: "message" + n,
                        activity: e,
                        showTimestamp: n === t.props.activities.length - 1 || n + 1 < t.props.activities.length && m(e, t.props.activities[n + 1]),
                        selected: t.props.isSelected(e),
                        fromMe: t.props.isFromMe(e),
                        onClickActivity: t.props.onClickActivity(e),
                        onClickRetry: function(n) {
                            n.preventDefault(),
                            n.stopPropagation(),
                            t.props.onClickRetry(e)
                        }
                    }, i.createElement(s.ActivityView, {
                        format: t.props.format,
                        size: t.props.size,
                        activity: e,
                        onCardAction: function(e, n) {
                            return t.doCardAction(e, n)
                        },
                        onImageLoad: function() {
                            return t.autoscroll()
                        }
                    }))
                }));
                var n = c.classList("wc-message-groups", !this.props.format.chatTitle && "no-header");
                return i.createElement("div", {
                    className: n,
                    ref: function(e) {
                        return t.scrollMe = e || t.scrollMe
                    },
                    role: "log",
                    tabIndex: 0
                }, i.createElement("div", {
                    className: "wc-message-group-content",
                    ref: function(e) {
                        e && (t.scrollContent = e)
                    }
                }, e))
            }
            ,
            e
        }(i.Component);
        e.HistoryView = p,
        e.History = o.connect(function(t) {
            return {
                format: t.format,
                size: t.size,
                activities: t.history.activities,
                hasActivityWithSuggestedActions: !!a.activityWithSuggestedActions(t.history.activities),
                connectionSelectedActivity: t.connection.selectedActivity,
                selectedActivity: t.history.selectedActivity,
                botConnection: t.connection.botConnection,
                user: t.connection.user
            }
        }, {
            setMeasurements: function(t) {
                return {
                    type: "Set_Measurements",
                    carouselMargin: t
                }
            },
            onClickRetry: function(t) {
                return {
                    type: "Send_Message_Retry",
                    clientActivityId: t.channelData.clientActivityId
                }
            },
            onClickCardAction: function() {
                return {
                    type: "Card_Action_Clicked"
                }
            },
            sendMessage: l.sendMessage
        }, function(t, e, n) {
            return {
                format: t.format,
                size: t.size,
                activities: t.activities,
                hasActivityWithSuggestedActions: t.hasActivityWithSuggestedActions,
                setMeasurements: e.setMeasurements,
                onClickRetry: e.onClickRetry,
                onClickCardAction: e.onClickCardAction,
                doCardAction: c.doCardAction(t.botConnection, t.user, t.format.locale, e.sendMessage),
                isFromMe: function(e) {
                    return e.from.id === t.user.id
                },
                isSelected: function(e) {
                    return e === t.selectedActivity
                },
                onClickActivity: function(e) {
                    return t.connectionSelectedActivity && function() {
                        return t.connectionSelectedActivity.next({
                            activity: e
                        })
                    }
                },
                onCardAction: n.onCardAction
            }
        }, {
            withRef: !0
        })(p);
        var h = function(t, e) {
            var n = window.getComputedStyle(t)
              , r = {};
            return e.forEach(function(t) {
                return r[t] = parseInt(n.getPropertyValue(t))
            }),
            r
        }
          , d = function(t) {
            var e = h(t, ["padding-top", "padding-bottom"]);
            return t.offsetHeight - e["padding-top"] - e["padding-bottom"]
        }
          , f = function(t) {
            var e = h(t, ["padding-left", "padding-right"]);
            return t.offsetWidth + e["padding-left"] + e["padding-right"]
        }
          , m = function(t, e) {
            return Date.parse(e.timestamp) - Date.parse(t.timestamp) > 3e5
        }
          , g = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return r.__extends(e, t),
            e.prototype.render = function() {
                var t, e = this;
                switch (this.props.activity.id) {
                case void 0:
                    t = i.createElement("span", null, this.props.format.strings.messageSending);
                    break;
                case null:
                    t = i.createElement("span", null, this.props.format.strings.messageFailed);
                    break;
                case "retry":
                    t = i.createElement("span", null, this.props.format.strings.messageFailed, " ", i.createElement("a", {
                        href: ".",
                        onClick: this.props.onClickRetry
                    }, this.props.format.strings.messageRetry));
                    break;
                default:
                    var n = void 0;
                    this.props.showTimestamp && (n = this.props.format.strings.timeSent.replace("%1", new Date(this.props.activity.timestamp).toLocaleTimeString())),
                    t = i.createElement("span", null, this.props.activity.from.name || this.props.activity.from.id, n)
                }
                var r = this.props.fromMe ? "me" : "bot"
                  , o = c.classList("wc-message-wrapper", this.props.activity.attachmentLayout || "list", this.props.onClickActivity && "clickable")
                  , s = c.classList("wc-message-content", this.props.selected && "selected");

                return i.createElement("div", {
                    "data-activity-id": this.props.activity.id,
                    className: o,
                    onClick: this.props.onClickActivity
                },
                    i.createElement("img", {
                        className: "icon-" + r, src: "Images/bots.svg", width: "28px", height: "auto", float: "left" 
                }), 
                i.createElement("div", {
                    className: "wc-message wc-message-from-" + r,
                    ref: function(t) {
                        return e.messageDiv = t
                    }
                }, i.createElement("div", {
                    className: s
                }, i.createElement("svg", {
                    className: "wc-message-callout"
                }, i.createElement("path", {
                    className: "point-left",
                    d: "m0,6 l6 6 v-12 z"
                }), i.createElement("path", {
                    className: "point-right",
                    d: "m6,6 l-6 6 v-12 z"
                })), this.props.children)), i.createElement("div", {
                    className: "wc-message-from wc-message-from-" + r
                }, t)
            )
            }
            ,
            e
        }(i.Component);
        e.WrappedActivity = g
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(9)
          , o = n(34)
          , s = n(87)
          , a = n(21)
          , c = n(86)
          , u = n(40)
          , l = function(t) {
            return i.createElement("div", {
                className: a.classList("wc-message-pane", t.activityWithSuggestedActions && "show-actions")
            }, t.children, i.createElement("div", {
                className: "wc-suggested-actions"
            }, i.createElement(p, r.__assign({}, t))))
        }
          , p = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return r.__extends(e, t),
            e.prototype.actionClick = function(t, e) {
                this.props.activityWithSuggestedActions && (this.props.takeSuggestedAction(this.props.activityWithSuggestedActions),
                this.props.doCardAction(e.type, e.value),
                t.stopPropagation())
            }
            ,
            e.prototype.shouldComponentUpdate = function(t) {
                return !!t.activityWithSuggestedActions
            }
            ,
            e.prototype.render = function() {
                var t = this;
                return this.props.activityWithSuggestedActions ? i.createElement(c.HScroll, {
                    prevSvgPathData: "M 16.5 22 L 19 19.5 L 13.5 14 L 19 8.5 L 16.5 6 L 8.5 14 L 16.5 22 Z",
                    nextSvgPathData: "M 12.5 22 L 10 19.5 L 15.5 14 L 10 8.5 L 12.5 6 L 20.5 14 L 12.5 22 Z",
                    scrollUnit: "page"
                }, i.createElement("ul", null, this.props.activityWithSuggestedActions.suggestedActions.actions.map(function(e, n) {
                    return i.createElement("li", {
                        key: n
                    }, i.createElement("button", {
                        type: "button",
                        onClick: function(n) {
                            return t.actionClick(n, e)
                        },
                        title: e.title
                    }, e.title))
                }))) : null
            }
            ,
            e
        }(i.Component);
        e.MessagePane = o.connect(function(t) {
            return {
                activityWithSuggestedActions: s.activityWithSuggestedActions(t.history.activities),
                botConnection: t.connection.botConnection,
                user: t.connection.user,
                locale: t.format.locale
            }
        }, {
            takeSuggestedAction: function(t) {
                return {
                    type: "Take_SuggestedAction",
                    message: t
                }
            },
            sendMessage: u.sendMessage
        }, function(t, e, n) {
            return {
                activityWithSuggestedActions: t.activityWithSuggestedActions,
                takeSuggestedAction: e.takeSuggestedAction,
                children: n.children,
                doCardAction: a.doCardAction(t.botConnection, t.user, t.locale, e.sendMessage)
            }
        })(l)
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(10)
          , i = n(9)
          , o = n(34)
          , s = n(21)
          , a = n(38)
          , c = n(40)
          , u = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r.__extends(e, t),
            e.prototype.sendMessage = function() {
                this.props.inputText.trim().length > 0 && this.props.sendMessage(this.props.inputText)
            }
            ,
            e.prototype.handleSendButtonKeyPress = function(t) {
                "Enter" !== t.key && " " !== t.key || (t.preventDefault(),
                this.sendMessage(),
                this.textInput.focus())
            }
            ,
            e.prototype.handleUploadButtonKeyPress = function(t) {
                "Enter" !== t.key && " " !== t.key || (t.preventDefault(),
                this.fileInput.click())
            }
            ,
            e.prototype.onKeyPress = function(t) {
                "Enter" === t.key && this.sendMessage()
            }
            ,
            e.prototype.onClickSend = function() {
                this.sendMessage()
            }
            ,
            e.prototype.onChangeFile = function() {
                this.fileInput.files.length && (this.props.sendFiles(this.fileInput.files),
                this.fileInput.value = null),
                this.textInput.focus()
            }
            ,
            e.prototype.onTextInputFocus = function() {
                this.props.listeningState === c.ListeningState.STARTED && this.props.stopListening()
            }
            ,
            e.prototype.onClickMic = function() {
                this.props.listeningState === c.ListeningState.STARTED ? this.props.stopListening() : this.props.listeningState === c.ListeningState.STOPPED && this.props.startListening()
            }
            ,
            e.prototype.focus = function(t) {
                this.textInput.focus(),
                t && this.props.onChangeText(this.props.inputText + t)
            }
            ,
            e.prototype.render = function() {
                var t = this
                  , e = s.classList("wc-console", this.props.inputText.length > 0 && "has-text", this.props.showUploadButton && "has-upload-button")
                  , n = this.props.listeningState !== c.ListeningState.STOPPED || a.Speech.SpeechRecognizer.speechIsAvailable() && !this.props.inputText.length
                  , r = s.classList("wc-send", n && "hidden")
                  , o = s.classList("wc-mic", !n && "hidden", this.props.listeningState === c.ListeningState.STARTED && "active", this.props.listeningState !== c.ListeningState.STARTED && "inactive")
                  , u = this.props.listeningState === c.ListeningState.STARTED ? this.props.strings.listeningIndicator : this.props.strings.consolePlaceholder;
                return i.createElement("div", {
                    className: e
                }, this.props.showUploadButton && i.createElement("label", {
                    className: "wc-upload",
                    htmlFor: "wc-upload-input",
                    onKeyPress: function(e) {
                        return t.handleUploadButtonKeyPress(e)
                    },
                    tabIndex: 0
                }, i.createElement("svg", null, i.createElement("path", {
                    d: "M19.96 4.79m-2 0a2 2 0 0 1 4 0 2 2 0 0 1-4 0zM8.32 4.19L2.5 15.53 22.45 15.53 17.46 8.56 14.42 11.18 8.32 4.19ZM1.04 1L1.04 17 24.96 17 24.96 1 1.04 1ZM1.03 0L24.96 0C25.54 0 26 0.45 26 0.99L26 17.01C26 17.55 25.53 18 24.96 18L1.03 18C0.46 18 0 17.55 0 17.01L0 0.99C0 0.45 0.47 0 1.03 0Z"
                }))), this.props.showUploadButton && i.createElement("input", {
                    id: "wc-upload-input",
                    tabIndex: -1,
                    type: "file",
                    ref: function(e) {
                        return t.fileInput = e
                    },
                    multiple: !0,
                    onChange: function() {
                        return t.onChangeFile()
                    },
                    "aria-label": this.props.strings.uploadFile,
                    role: "button"
                }), i.createElement("div", {
                    className: "wc-textbox"
                }, i.createElement("input", {
                    type: "text",
                    className: "wc-shellinput",
                    ref: function(e) {
                        return t.textInput = e
                    },
                    autoFocus: !0,
                    value: this.props.inputText,
                    onChange: function(e) {
                        return t.props.onChangeText(t.textInput.value)
                    },
                    onKeyPress: function(e) {
                        return t.onKeyPress(e)
                    },
                    onFocus: function() {
                        return t.onTextInputFocus()
                    },
                    placeholder: u,
                    "aria-label": this.props.inputText ? null : u,
                    "aria-live": "polite"
                })), i.createElement("button", {
                    className: r,
                    onClick: function() {
                        return t.onClickSend()
                    },
                    "aria-label": this.props.strings.send,
                    role: "button",
                    onKeyPress: function(e) {
                        return t.handleSendButtonKeyPress(e)
                    },
                    tabIndex: 0,
                    type: "button"
                }, i.createElement("svg", null, i.createElement("path", {
                    d: "M26.79 9.38A0.31 0.31 0 0 0 26.79 8.79L0.41 0.02C0.36 0 0.34 0 0.32 0 0.14 0 0 0.13 0 0.29 0 0.33 0.01 0.37 0.03 0.41L3.44 9.08 0.03 17.76A0.29 0.29 0 0 0 0.01 17.8 0.28 0.28 0 0 0 0.01 17.86C0.01 18.02 0.14 18.16 0.3 18.16A0.3 0.3 0 0 0 0.41 18.14L26.79 9.38ZM0.81 0.79L24.84 8.79 3.98 8.79 0.81 0.79ZM3.98 9.37L24.84 9.37 0.81 17.37 3.98 9.37Z"
                }))), i.createElement("button", {
                    className: o,
                    onClick: function() {
                        return t.onClickMic()
                    },
                    "aria-label": this.props.strings.speak,
                    role: "button",
                    tabIndex: 0,
                    type: "button"
                }, i.createElement("svg", {
                    width: "28",
                    height: "22",
                    viewBox: "0 0 58 58"
                }, i.createElement("path", {
                    d: "M 44 28 C 43.448 28 43 28.447 43 29 L 43 35 C 43 42.72 36.72 49 29 49 C 21.28 49 15 42.72 15 35 L 15 29 C 15 28.447 14.552 28 14 28 C 13.448 28 13 28.447 13 29 L 13 35 C 13 43.485 19.644 50.429 28 50.949 L 28 56 L 23 56 C 22.448 56 22 56.447 22 57 C 22 57.553 22.448 58 23 58 L 35 58 C 35.552 58 36 57.553 36 57 C 36 56.447 35.552 56 35 56 L 30 56 L 30 50.949 C 38.356 50.429 45 43.484 45 35 L 45 29 C 45 28.447 44.552 28 44 28 Z"
                }), i.createElement("path", {
                    id: "micFilling",
                    d: "M 28.97 44.438 L 28.97 44.438 C 23.773 44.438 19.521 40.033 19.521 34.649 L 19.521 11.156 C 19.521 5.772 23.773 1.368 28.97 1.368 L 28.97 1.368 C 34.166 1.368 38.418 5.772 38.418 11.156 L 38.418 34.649 C 38.418 40.033 34.166 44.438 28.97 44.438 Z"
                }), i.createElement("path", {
                    d: "M 29 46 C 35.065 46 40 41.065 40 35 L 40 11 C 40 4.935 35.065 0 29 0 C 22.935 0 18 4.935 18 11 L 18 35 C 18 41.065 22.935 46 29 46 Z M 20 11 C 20 6.037 24.038 2 29 2 C 33.962 2 38 6.037 38 11 L 38 35 C 38 39.963 33.962 44 29 44 C 24.038 44 20 39.963 20 35 L 20 11 Z"
                }))))
            }
            ,
            e
        }(i.Component);
        e.Shell = o.connect(function(t) {
            return {
                inputText: t.shell.input,
                showUploadButton: t.format.showUploadButton,
                strings: t.format.strings,
                locale: t.format.locale,
                user: t.connection.user,
                listeningState: t.shell.listeningState
            }
        }, {
            onChangeText: function(t) {
                return {
                    type: "Update_Input",
                    input: t,
                    source: "text"
                }
            },
            stopListening: function() {
                return {
                    type: "Listening_Stopping"
                }
            },
            startListening: function() {
                return {
                    type: "Listening_Starting"
                }
            },
            sendMessage: c.sendMessage,
            sendFiles: c.sendFiles
        }, function(t, e, n) {
            return {
                inputText: t.inputText,
                showUploadButton: t.showUploadButton,
                strings: t.strings,
                listeningState: t.listeningState,
                onChangeText: e.onChangeText,
                sendMessage: function(n) {
                    return e.sendMessage(n, t.user, t.locale)
                },
                sendFiles: function(n) {
                    return e.sendFiles(n, t.user, t.locale)
                },
                startListening: function() {
                    return e.startListening()
                },
                stopListening: function() {
                    return e.stopListening()
                }
            }
        }, {
            withRef: !0
        })(u)
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t = t && t.toLowerCase(),
            t in i ? t : t.startsWith("cs") ? "cs-cz" : t.startsWith("da") ? "da-dk" : t.startsWith("de") ? "de-de" : t.startsWith("el") ? "el-gr" : t.startsWith("es") ? "es-es" : t.startsWith("fi") ? "fi-fi" : t.startsWith("fr") ? "fr-fr" : t.startsWith("hu") ? "hu-hu" : t.startsWith("it") ? "it-it" : t.startsWith("ja") ? "ja-jp" : t.startsWith("ko") ? "ko-kr" : t.startsWith("lv") ? "lv-lv" : t.startsWith("nb") || t.startsWith("nn") || t.startsWith("no") ? "nb-no" : t.startsWith("nl") ? "nl-nl" : t.startsWith("pl") ? "pl-pl" : t.startsWith("pt") ? "pt-br" === t ? "pt-br" : "pt-pt" : t.startsWith("ru") ? "ru-ru" : t.startsWith("sv") ? "sv-se" : t.startsWith("tr") ? "tr-tr" : t.startsWith("zh") ? "zh-hk" === t || "zh-mo" === t || "zh-tw" === t ? "zh-hant" : "zh-hans" : "en-us"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = {
            "en-us": {
                title: "Chat",
                send: "Send",
                unknownFile: "[File of type '%1']",
                unknownCard: "[Unknown Card '%1']",
                receiptVat: "VAT",
                receiptTax: "Tax",
                receiptTotal: "Total",
                messageRetry: "retry",
                messageFailed: "couldn't send",
                messageSending: "sending",
                timeSent: " at %1",
                consolePlaceholder: "Type your message...",
                listeningIndicator: "Listening...",
                uploadFile: "Upload file",
                speak: "Speak"
            },
            "ja-jp": {
                title: "ãƒãƒ£ãƒƒãƒˆ",
                send: "é€ä¿¡",
                unknownFile: "[ãƒ•ã‚¡ã‚¤ãƒ«ã‚¿ã‚¤ãƒ— '%1']",
                unknownCard: "[ä¸æ˜Žãªã‚«ãƒ¼ãƒ‰ '%1']",
                receiptVat: "æ¶ˆè²»ç¨Ž",
                receiptTax: "ç¨Ž",
                receiptTotal: "åˆè¨ˆ",
                messageRetry: "å†é€",
                messageFailed: "é€ä¿¡ã§ãã¾ã›ã‚“ã§ã—ãŸã€‚",
                messageSending: "é€ä¿¡ä¸­",
                timeSent: " %1",
                consolePlaceholder: "ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„...",
                listeningIndicator: "è´ã„ã¦ã¾ã™...",
                uploadFile: "",
                speak: ""
            },
            "nb-no": {
                title: "Chat",
                send: "Send",
                unknownFile: "[Fil av typen '%1']",
                unknownCard: "[Ukjent Kort '%1']",
                receiptVat: "MVA",
                receiptTax: "Skatt",
                receiptTotal: "Totalt",
                messageRetry: "prÃ¸v igjen",
                messageFailed: "kunne ikke sende",
                messageSending: "sender",
                timeSent: " %1",
                consolePlaceholder: "Skriv inn melding...",
                listeningIndicator: "Lytter...",
                uploadFile: "Last opp fil",
                speak: "Snakk"
            },
            "da-dk": {
                title: "Chat",
                send: "Send",
                unknownFile: "[Fil af typen '%1']",
                unknownCard: "[Ukendt kort '%1']",
                receiptVat: "Moms",
                receiptTax: "Skat",
                receiptTotal: "Total",
                messageRetry: "prÃ¸v igen",
                messageFailed: "ikke sendt",
                messageSending: "sender",
                timeSent: " kl %1",
                consolePlaceholder: "Skriv din besked...",
                listeningIndicator: "Lytter...",
                uploadFile: "",
                speak: ""
            },
            "de-de": {
                title: "Chat",
                send: "Senden",
                unknownFile: "[Datei vom Typ '%1']",
                unknownCard: "[Unbekannte Card '%1']",
                receiptVat: "VAT",
                receiptTax: "MwSt.",
                receiptTotal: "Gesamtbetrag",
                messageRetry: "wiederholen",
                messageFailed: "konnte nicht senden",
                messageSending: "sendet",
                timeSent: " um %1",
                consolePlaceholder: "Verfasse eine Nachricht...",
                listeningIndicator: "HÃ¶ren...",
                uploadFile: "",
                speak: ""
            },
            "pl-pl": {
                title: "Chat",
                send: "WyÅ›lij",
                unknownFile: "[Plik typu '%1']",
                unknownCard: "[Nieznana karta '%1']",
                receiptVat: "VAT",
                receiptTax: "Podatek",
                receiptTotal: "Razem",
                messageRetry: "wyÅ›lij ponownie",
                messageFailed: "wysÅ‚anie nieudane",
                messageSending: "wysyÅ‚anie",
                timeSent: " o %1",
                consolePlaceholder: "Wpisz swojÄ… wiadomoÅ›Ä‡...",
                listeningIndicator: "SÅ‚uchanie...",
                uploadFile: "WyÅ›lij plik",
                speak: "MÃ³w"
            },
            "ru-ru": {
                title: "Ð§Ð°Ñ‚",
                send: "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",
                unknownFile: "[ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ñ‹Ð¹ Ñ‚Ð¸Ð¿ '%1']",
                unknownCard: "[ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ ÐºÐ°Ñ€Ñ‚Ð° '%1']",
                receiptVat: "VAT",
                receiptTax: "ÐÐ°Ð»Ð¾Ð³",
                receiptTotal: "Ð˜Ñ‚Ð¾Ð³Ð¾",
                messageRetry: "Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚ÑŒ",
                messageFailed: "Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",
                messageSending: "Ð¾Ñ‚Ð¿Ñ€Ð°Ð²ÐºÐ°",
                timeSent: " Ð² %1",
                consolePlaceholder: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð²Ð°ÑˆÐµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ...",
                listeningIndicator: "Ð¿Ñ€Ð¾ÑÐ»ÑƒÑˆÐ¸Ð²Ð°Ð½Ð¸Ðµ...",
                uploadFile: "",
                speak: ""
            },
            "nl-nl": {
                title: "Chat",
                send: "Verstuur",
                unknownFile: "[Bestand van het type '%1']",
                unknownCard: "[Onbekende kaart '%1']",
                receiptVat: "VAT",
                receiptTax: "BTW",
                receiptTotal: "Totaal",
                messageRetry: "opnieuw",
                messageFailed: "versturen mislukt",
                messageSending: "versturen",
                timeSent: " om %1",
                consolePlaceholder: "Typ je bericht...",
                listeningIndicator: "Aan het luisteren...",
                uploadFile: "Bestand uploaden",
                speak: "Spreek"
            },
            "lv-lv": {
                title: "TÄ“rzÄ“Å¡ana",
                send: "SÅ«tÄ«t",
                unknownFile: "[NezinÄms tips '%1']",
                unknownCard: "[NezinÄma kartÄ«te '%1']",
                receiptVat: "VAT",
                receiptTax: "Nodoklis",
                receiptTotal: "Kopsumma",
                messageRetry: "MÄ“Ä£inÄt vÄ“lreiz",
                messageFailed: "NeizdevÄs nosÅ«tÄ«t",
                messageSending: "NosÅ«tÄ«Å¡ana",
                timeSent: " %1",
                consolePlaceholder: "Ierakstiet savu ziÅ†u...",
                listeningIndicator: "Klausoties...",
                uploadFile: "",
                speak: ""
            },
            "pt-br": {
                title: "Bate-papo",
                send: "Enviar",
                unknownFile: "[Arquivo do tipo '%1']",
                unknownCard: "[CartÃ£o desconhecido '%1']",
                receiptVat: "VAT",
                receiptTax: "Imposto",
                receiptTotal: "Total",
                messageRetry: "repetir",
                messageFailed: "nÃ£o pude enviar",
                messageSending: "enviando",
                timeSent: " Ã s %1",
                consolePlaceholder: "Digite sua mensagem...",
                listeningIndicator: "Ouvindo...",
                uploadFile: "",
                speak: ""
            },
            "fr-fr": {
                title: "Chat",
                send: "Envoyer",
                unknownFile: "[Fichier de type '%1']",
                unknownCard: "[Carte inconnue '%1']",
                receiptVat: "TVA",
                receiptTax: "Taxe",
                receiptTotal: "Total",
                messageRetry: "rÃ©essayer",
                messageFailed: "envoi impossible",
                messageSending: "envoi",
                timeSent: " Ã  %1",
                consolePlaceholder: "Ã‰crivez votre message...",
                listeningIndicator: "Ã‰coute...",
                uploadFile: "",
                speak: ""
            },
            "es-es": {
                title: "Chat",
                send: "Enviar",
                unknownFile: "[Archivo de tipo '%1']",
                unknownCard: "[Tarjeta desconocida '%1']",
                receiptVat: "IVA",
                receiptTax: "Impuestos",
                receiptTotal: "Total",
                messageRetry: "reintentar",
                messageFailed: "no enviado",
                messageSending: "enviando",
                timeSent: " a las %1",
                consolePlaceholder: "Escribe tu mensaje...",
                listeningIndicator: "Escuchando...",
                uploadFile: "",
                speak: ""
            },
            "el-gr": {
                title: "Î£Ï…Î½Î¿Î¼Î¹Î»Î¯Î±",
                send: "Î‘Ï€Î¿ÏƒÏ„Î¿Î»Î®",
                unknownFile: "[Î‘ÏÏ‡ÎµÎ¯Î¿ Ï„ÏÏ€Î¿Ï… '%1']",
                unknownCard: "[Î‘Î³Î½Ï‰ÏƒÏ„Î· ÎšÎ¬ÏÏ„Î± '%1']",
                receiptVat: "VAT",
                receiptTax: "Î¦Î Î‘",
                receiptTotal: "Î£ÏÎ½Î¿Î»Î¿",
                messageRetry: "Î´Î¿ÎºÎ¹Î¼Î®",
                messageFailed: "Î±Ï€Î¿Ï„Ï…Ï‡Î¯Î±",
                messageSending: "Î±Ï€Î¿ÏƒÏ„Î¿Î»Î®",
                timeSent: " Ï„Î·Î½ %1",
                consolePlaceholder: "Î Î»Î·ÎºÏ„ÏÎ¿Î»ÏŒÎ³Î·ÏƒÎ· Î¼Î·Î½ÏÎ¼Î±Ï„Î¿Ï‚...",
                listeningIndicator: "Î‘ÎºÎ¿ÏÎ³Î¿Î½Ï„Î±Ï‚...",
                uploadFile: "",
                speak: ""
            },
            "it-it": {
                title: "Chat",
                send: "Invia",
                unknownFile: "[File di tipo '%1']",
                unknownCard: "[Card sconosciuta '%1']",
                receiptVat: "VAT",
                receiptTax: "Tasse",
                receiptTotal: "Totale",
                messageRetry: "riprova",
                messageFailed: "impossibile inviare",
                messageSending: "invio",
                timeSent: " %1",
                consolePlaceholder: "Scrivi il tuo messaggio...",
                listeningIndicator: "Ascoltando...",
                uploadFile: "",
                speak: ""
            },
            "zh-hans": {
                title: "èŠå¤©",
                send: "å‘é€",
                unknownFile: "[ç±»åž‹ä¸º'%1'çš„æ–‡ä»¶]",
                unknownCard: "[æœªçŸ¥çš„'%1'å¡ç‰‡]",
                receiptVat: "æ¶ˆè´¹ç¨Ž",
                receiptTax: "ç¨Ž",
                receiptTotal: "å…±è®¡",
                messageRetry: "é‡è¯•",
                messageFailed: "æ— æ³•å‘é€",
                messageSending: "æ­£åœ¨å‘é€",
                timeSent: " ç”¨æ—¶ %1",
                consolePlaceholder: "è¾“å…¥ä½ çš„æ¶ˆæ¯...",
                listeningIndicator: "æ­£åœ¨å€¾å¬...",
                uploadFile: "ä¸Šä¼ æ–‡ä»¶",
                speak: "å‘è¨€"
            },
            "zh-hant": {
                title: "èŠå¤©",
                send: "ç™¼é€",
                unknownFile: "[é¡žåž‹ç‚º'%1'çš„æ–‡ä»¶]",
                unknownCard: "[æœªçŸ¥çš„'%1'å¡ç‰‡]",
                receiptVat: "æ¶ˆè²»ç¨…",
                receiptTax: "ç¨Ž",
                receiptTotal: "ç¸½å…±",
                messageRetry: "é‡è©¦",
                messageFailed: "ç„¡æ³•ç™¼é€",
                messageSending: "æ­£åœ¨ç™¼é€",
                timeSent: " æ–¼ %1",
                consolePlaceholder: "è¼¸å…¥ä½ çš„è¨Šæ¯...",
                listeningIndicator: "æ­£åœ¨è†è½...",
                uploadFile: "ä¸Šè¼‰æª”æ¡ˆ",
                speak: "ç™¼è¨€"
            },
            "zh-yue": {
                title: "å‚¾åˆ",
                send: "å‚³é€",
                unknownFile: "[é¡žåž‹ä¿‚'%1'å˜…æ–‡ä»¶]",
                unknownCard: "[å””çŸ¥'%1'ä¿‚å’©å¡ç‰‡]",
                receiptVat: "æ¶ˆè²»ç¨…",
                receiptTax: "ç¨Ž",
                receiptTotal: "ç¸½å…±",
                messageRetry: "å†åšŸä¸€æ¬¡",
                messageFailed: "å‚³é€å””å€’",
                messageSending: "è€Œå®¶å‚³é€ç·Š",
                timeSent: " å–º %1",
                consolePlaceholder: "è¼¸å…¥ä½ å˜…è¨Šæ¯...",
                listeningIndicator: "è½ç·Šä½ è¬›å˜¢...",
                uploadFile: "ä¸Šè¼‰æª”æ¡ˆ",
                speak: "è¬›å˜¢"
            },
            "cs-cz": {
                title: "Chat",
                send: "Odeslat",
                unknownFile: "[Soubor typu '%1']",
                unknownCard: "[NeznÃ¡mÃ¡ karta '%1']",
                receiptVat: "DPH",
                receiptTax: "DaÅˆ z prod.",
                receiptTotal: "Celkem",
                messageRetry: "opakovat",
                messageFailed: "nepodaÅ™ilo se odeslat",
                messageSending: "OdesÃ­lÃ¡nÃ­",
                timeSent: " v %1",
                consolePlaceholder: "NapiÅ¡te svou zprÃ¡vu...",
                listeningIndicator: "PoslouchÃ¡m...",
                uploadFile: "NahrÃ¡t soubor",
                speak: "PouÅ¾Ã­t hlas"
            },
            "ko-kr": {
                title: "ì±„íŒ…",
                send: "ì „ì†¡",
                unknownFile: "[íŒŒì¼ í˜•ì‹ '%1']",
                unknownCard: "[ì•Œìˆ˜ì—†ëŠ” íƒ€ìž…ì˜ ì¹´ë“œ '%1']",
                receiptVat: "ë¶€ê°€ì„¸",
                receiptTax: "ì„¸ì•¡",
                receiptTotal: "í•©ê³„",
                messageRetry: "ìž¬ì „ì†¡",
                messageFailed: "ì „ì†¡í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤",
                messageSending: "ì „ì†¡ì¤‘",
                timeSent: " %1",
                consolePlaceholder: "ë©”ì„¸ì§€ë¥¼ ìž…ë ¥í•˜ì„¸ìš”...",
                listeningIndicator: "ìˆ˜ì‹ ì¤‘...",
                uploadFile: "",
                speak: ""
            },
            "hu-hu": {
                title: "CsevegÃ©s",
                send: "KÃ¼ldÃ©s",
                unknownFile: "[FÃ¡jltÃ­pus '%1']",
                unknownCard: "[Ismeretlen kÃ¡rtya '%1']",
                receiptVat: "ÃFA",
                receiptTax: "AdÃ³",
                receiptTotal: "Ã–sszesen",
                messageRetry: "prÃ³bÃ¡lja Ãºjra",
                messageFailed: "nem sikerÃ¼lt elkÃ¼ldeni",
                messageSending: "kÃ¼ldÃ©s",
                timeSent: "%2 ekkor: %1",
                consolePlaceholder: "Ãrja be Ã¼zenetÃ©t...",
                listeningIndicator: "FigyelÃ©s...",
                uploadFile: "",
                speak: ""
            },
            "sv-se": {
                title: "Chatt",
                send: "Skicka",
                unknownFile: "[Filtyp '%1']",
                unknownCard: "[OkÃ¤nt kort '%1']",
                receiptVat: "Moms",
                receiptTax: "Skatt",
                receiptTotal: "Totalt",
                messageRetry: "fÃ¶rsÃ¶k igen",
                messageFailed: "kunde inte skicka",
                messageSending: "skickar",
                timeSent: "%2 %1",
                consolePlaceholder: "Skriv ett meddelande...",
                listeningIndicator: "Lyssnar...",
                uploadFile: "",
                speak: ""
            },
            "tr-tr": {
                title: "Sohbet",
                send: "GÃ¶nder",
                unknownFile: "[Dosya tÃ¼rÃ¼: '%1']",
                unknownCard: "[Bilinmeyen Kart: '%1']",
                receiptVat: "KDV",
                receiptTax: "Vergi",
                receiptTotal: "Toplam",
                messageRetry: "yeniden deneyin",
                messageFailed: "gÃ¶nderilemedi",
                messageSending: "gÃ¶nderiliyor",
                timeSent: "%2, %1",
                consolePlaceholder: "Ä°letinizi yazÄ±n...",
                listeningIndicator: "Dinliyor...",
                uploadFile: "",
                speak: ""
            },
            "pt-pt": {
                title: "Chat",
                send: "Enviar",
                unknownFile: '[Ficheiro do tipo "%1"]',
                unknownCard: '[CartÃ£o Desconhecido "%1"]',
                receiptVat: "IVA",
                receiptTax: "Imposto",
                receiptTotal: "Total",
                messageRetry: "repetir",
                messageFailed: "nÃ£o foi possÃ­vel enviar",
                messageSending: "a enviar",
                timeSent: "%2 em %1",
                consolePlaceholder: "Escreva a sua mensagem...",
                listeningIndicator: "A Escutar...",
                uploadFile: "",
                speak: ""
            },
            "fi-fi": {
                title: "Chat",
                send: "LÃ¤hetÃ¤",
                unknownFile: "[Tiedosto tyyppiÃ¤ '%1']",
                unknownCard: "[Tuntematon kortti '%1']",
                receiptVat: "ALV",
                receiptTax: "Vero",
                receiptTotal: "YhteensÃ¤",
                messageRetry: "yritÃ¤ uudelleen",
                messageFailed: "ei voitu lÃ¤hettÃ¤Ã¤",
                messageSending: "lÃ¤hettÃ¤Ã¤",
                timeSent: " klo %1",
                consolePlaceholder: "Kirjoita viesti...",
                listeningIndicator: "Kuuntelee...",
                uploadFile: "Lataa tiedosto",
                speak: "Puhu"
            }
        };
        e.defaultStrings = i["en-us"],
        e.strings = function(t) {
            return i[r(t)]
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.tabIndex;
            if (s) {
                var n = t.attributes.getNamedItem("tabindex");
                if (!n || !n.specified)
                    return ~i.indexOf(t.nodeName.toLowerCase()) ? 0 : null
            } else if (!~e) {
                var r = t.getAttribute("tabindex");
                if (null === r || "" === r && !o)
                    return null
            }
            return e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = ["a", "body", "button", "frame", "iframe", "img", "input", "isindex", "object", "select", "textarea"]
          , o = /Firefox\//i.test(navigator.userAgent)
          , s = /Trident\//i.test(navigator.userAgent);
        e.getTabIndex = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t
        }
        function i(t, e, n) {
            function i(t, e) {
                var n = v.hasOwnProperty(e) ? v[e] : null;
                w.hasOwnProperty(e) && a("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", e),
                t && a("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", e)
            }
            function u(t, n) {
                if (n) {
                    a("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),
                    a(!e(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                    var r = t.prototype
                      , o = r.__reactAutoBindPairs;
                    n.hasOwnProperty(c) && b.mixins(t, n.mixins);
                    for (var s in n)
                        if (n.hasOwnProperty(s) && s !== c) {
                            var u = n[s]
                              , l = r.hasOwnProperty(s);
                            if (i(l, s),
                            b.hasOwnProperty(s))
                                b[s](t, u);
                            else {
                                var p = v.hasOwnProperty(s)
                                  , f = "function" == typeof u
                                  , m = f && !p && !l && !1 !== n.autobind;
                                if (m)
                                    o.push(s, u),
                                    r[s] = u;
                                else if (l) {
                                    var g = v[s];
                                    a(p && ("DEFINE_MANY_MERGED" === g || "DEFINE_MANY" === g), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", g, s),
                                    "DEFINE_MANY_MERGED" === g ? r[s] = h(r[s], u) : "DEFINE_MANY" === g && (r[s] = d(r[s], u))
                                } else
                                    r[s] = u
                            }
                        }
                } else
                    ;
            }
            function l(t, e) {
                if (e)
                    for (var n in e) {
                        var r = e[n];
                        if (e.hasOwnProperty(n)) {
                            var i = n in b;
                            a(!i, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                            var o = n in t;
                            a(!o, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n),
                            t[n] = r
                        }
                    }
            }
            function p(t, e) {
                a(t && e && "object" == typeof t && "object" == typeof e, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
                for (var n in e)
                    e.hasOwnProperty(n) && (a(void 0 === t[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n),
                    t[n] = e[n]);
                return t
            }
            function h(t, e) {
                return function() {
                    var n = t.apply(this, arguments)
                      , r = e.apply(this, arguments);
                    if (null == n)
                        return r;
                    if (null == r)
                        return n;
                    var i = {};
                    return p(i, n),
                    p(i, r),
                    i
                }
            }
            function d(t, e) {
                return function() {
                    t.apply(this, arguments),
                    e.apply(this, arguments)
                }
            }
            function f(t, e) {
                var n = e.bind(t);
                return n
            }
            function m(t) {
                for (var e = t.__reactAutoBindPairs, n = 0; n < e.length; n += 2) {
                    var r = e[n]
                      , i = e[n + 1];
                    t[r] = f(t, i)
                }
            }
            function g(t) {
                var e = r(function(t, r, i) {
                    this.__reactAutoBindPairs.length && m(this),
                    this.props = t,
                    this.context = r,
                    this.refs = s,
                    this.updater = i || n,
                    this.state = null;
                    var o = this.getInitialState ? this.getInitialState() : null;
                    a("object" == typeof o && !Array.isArray(o), "%s.getInitialState(): must return an object or null", e.displayName || "ReactCompositeComponent"),
                    this.state = o
                });
                e.prototype = new S,
                e.prototype.constructor = e,
                e.prototype.__reactAutoBindPairs = [],
                y.forEach(u.bind(null, e)),
                u(e, _),
                u(e, t),
                u(e, C),
                e.getDefaultProps && (e.defaultProps = e.getDefaultProps()),
                a(e.prototype.render, "createClass(...): Class specification must implement a `render` method.");
                for (var i in v)
                    e.prototype[i] || (e.prototype[i] = null);
                return e
            }
            var y = []
              , v = {
                mixins: "DEFINE_MANY",
                statics: "DEFINE_MANY",
                propTypes: "DEFINE_MANY",
                contextTypes: "DEFINE_MANY",
                childContextTypes: "DEFINE_MANY",
                getDefaultProps: "DEFINE_MANY_MERGED",
                getInitialState: "DEFINE_MANY_MERGED",
                getChildContext: "DEFINE_MANY_MERGED",
                render: "DEFINE_ONCE",
                componentWillMount: "DEFINE_MANY",
                componentDidMount: "DEFINE_MANY",
                componentWillReceiveProps: "DEFINE_MANY",
                shouldComponentUpdate: "DEFINE_ONCE",
                componentWillUpdate: "DEFINE_MANY",
                componentDidUpdate: "DEFINE_MANY",
                componentWillUnmount: "DEFINE_MANY",
                updateComponent: "OVERRIDE_BASE"
            }
              , b = {
                displayName: function(t, e) {
                    t.displayName = e
                },
                mixins: function(t, e) {
                    if (e)
                        for (var n = 0; n < e.length; n++)
                            u(t, e[n])
                },
                childContextTypes: function(t, e) {
                    t.childContextTypes = o({}, t.childContextTypes, e)
                },
                contextTypes: function(t, e) {
                    t.contextTypes = o({}, t.contextTypes, e)
                },
                getDefaultProps: function(t, e) {
                    t.getDefaultProps ? t.getDefaultProps = h(t.getDefaultProps, e) : t.getDefaultProps = e
                },
                propTypes: function(t, e) {
                    t.propTypes = o({}, t.propTypes, e)
                },
                statics: function(t, e) {
                    l(t, e)
                },
                autobind: function() {}
            }
              , _ = {
                componentDidMount: function() {
                    this.__isMounted = !0
                }
            }
              , C = {
                componentWillUnmount: function() {
                    this.__isMounted = !1
                }
            }
              , w = {
                replaceState: function(t, e) {
                    this.updater.enqueueReplaceState(this, t, e)
                },
                isMounted: function() {
                    return !!this.__isMounted
                }
            }
              , S = function() {};
            return o(S.prototype, t.prototype, w),
            g
        }
        var o = n(5)
          , s = n(42)
          , a = n(1)
          , c = "mixins";
        t.exports = i
    }
    , function(t, e) {
        t.exports = {
            Aacute: "Ã",
            aacute: "Ã¡",
            Abreve: "Ä‚",
            abreve: "Äƒ",
            ac: "âˆ¾",
            acd: "âˆ¿",
            acE: "âˆ¾Ì³",
            Acirc: "Ã‚",
            acirc: "Ã¢",
            acute: "Â´",
            Acy: "Ð",
            acy: "Ð°",
            AElig: "Ã†",
            aelig: "Ã¦",
            af: "â¡",
            Afr: "ð”„",
            afr: "ð”ž",
            Agrave: "Ã€",
            agrave: "Ã ",
            alefsym: "â„µ",
            aleph: "â„µ",
            Alpha: "Î‘",
            alpha: "Î±",
            Amacr: "Ä€",
            amacr: "Ä",
            amalg: "â¨¿",
            amp: "&",
            AMP: "&",
            andand: "â©•",
            And: "â©“",
            and: "âˆ§",
            andd: "â©œ",
            andslope: "â©˜",
            andv: "â©š",
            ang: "âˆ ",
            ange: "â¦¤",
            angle: "âˆ ",
            angmsdaa: "â¦¨",
            angmsdab: "â¦©",
            angmsdac: "â¦ª",
            angmsdad: "â¦«",
            angmsdae: "â¦¬",
            angmsdaf: "â¦­",
            angmsdag: "â¦®",
            angmsdah: "â¦¯",
            angmsd: "âˆ¡",
            angrt: "âˆŸ",
            angrtvb: "âŠ¾",
            angrtvbd: "â¦",
            angsph: "âˆ¢",
            angst: "Ã…",
            angzarr: "â¼",
            Aogon: "Ä„",
            aogon: "Ä…",
            Aopf: "ð”¸",
            aopf: "ð•’",
            apacir: "â©¯",
            ap: "â‰ˆ",
            apE: "â©°",
            ape: "â‰Š",
            apid: "â‰‹",
            apos: "'",
            ApplyFunction: "â¡",
            approx: "â‰ˆ",
            approxeq: "â‰Š",
            Aring: "Ã…",
            aring: "Ã¥",
            Ascr: "ð’œ",
            ascr: "ð’¶",
            Assign: "â‰”",
            ast: "*",
            asymp: "â‰ˆ",
            asympeq: "â‰",
            Atilde: "Ãƒ",
            atilde: "Ã£",
            Auml: "Ã„",
            auml: "Ã¤",
            awconint: "âˆ³",
            awint: "â¨‘",
            backcong: "â‰Œ",
            backepsilon: "Ï¶",
            backprime: "â€µ",
            backsim: "âˆ½",
            backsimeq: "â‹",
            Backslash: "âˆ–",
            Barv: "â«§",
            barvee: "âŠ½",
            barwed: "âŒ…",
            Barwed: "âŒ†",
            barwedge: "âŒ…",
            bbrk: "âŽµ",
            bbrktbrk: "âŽ¶",
            bcong: "â‰Œ",
            Bcy: "Ð‘",
            bcy: "Ð±",
            bdquo: "â€ž",
            becaus: "âˆµ",
            because: "âˆµ",
            Because: "âˆµ",
            bemptyv: "â¦°",
            bepsi: "Ï¶",
            bernou: "â„¬",
            Bernoullis: "â„¬",
            Beta: "Î’",
            beta: "Î²",
            beth: "â„¶",
            between: "â‰¬",
            Bfr: "ð”…",
            bfr: "ð”Ÿ",
            bigcap: "â‹‚",
            bigcirc: "â—¯",
            bigcup: "â‹ƒ",
            bigodot: "â¨€",
            bigoplus: "â¨",
            bigotimes: "â¨‚",
            bigsqcup: "â¨†",
            bigstar: "â˜…",
            bigtriangledown: "â–½",
            bigtriangleup: "â–³",
            biguplus: "â¨„",
            bigvee: "â‹",
            bigwedge: "â‹€",
            bkarow: "â¤",
            blacklozenge: "â§«",
            blacksquare: "â–ª",
            blacktriangle: "â–´",
            blacktriangledown: "â–¾",
            blacktriangleleft: "â—‚",
            blacktriangleright: "â–¸",
            blank: "â£",
            blk12: "â–’",
            blk14: "â–‘",
            blk34: "â–“",
            block: "â–ˆ",
            bne: "=âƒ¥",
            bnequiv: "â‰¡âƒ¥",
            bNot: "â«­",
            bnot: "âŒ",
            Bopf: "ð”¹",
            bopf: "ð•“",
            bot: "âŠ¥",
            bottom: "âŠ¥",
            bowtie: "â‹ˆ",
            boxbox: "â§‰",
            boxdl: "â”",
            boxdL: "â••",
            boxDl: "â•–",
            boxDL: "â•—",
            boxdr: "â”Œ",
            boxdR: "â•’",
            boxDr: "â•“",
            boxDR: "â•”",
            boxh: "â”€",
            boxH: "â•",
            boxhd: "â”¬",
            boxHd: "â•¤",
            boxhD: "â•¥",
            boxHD: "â•¦",
            boxhu: "â”´",
            boxHu: "â•§",
            boxhU: "â•¨",
            boxHU: "â•©",
            boxminus: "âŠŸ",
            boxplus: "âŠž",
            boxtimes: "âŠ ",
            boxul: "â”˜",
            boxuL: "â•›",
            boxUl: "â•œ",
            boxUL: "â•",
            boxur: "â””",
            boxuR: "â•˜",
            boxUr: "â•™",
            boxUR: "â•š",
            boxv: "â”‚",
            boxV: "â•‘",
            boxvh: "â”¼",
            boxvH: "â•ª",
            boxVh: "â•«",
            boxVH: "â•¬",
            boxvl: "â”¤",
            boxvL: "â•¡",
            boxVl: "â•¢",
            boxVL: "â•£",
            boxvr: "â”œ",
            boxvR: "â•ž",
            boxVr: "â•Ÿ",
            boxVR: "â• ",
            bprime: "â€µ",
            breve: "Ë˜",
            Breve: "Ë˜",
            brvbar: "Â¦",
            bscr: "ð’·",
            Bscr: "â„¬",
            bsemi: "â",
            bsim: "âˆ½",
            bsime: "â‹",
            bsolb: "â§…",
            bsol: "\\",
            bsolhsub: "âŸˆ",
            bull: "â€¢",
            bullet: "â€¢",
            bump: "â‰Ž",
            bumpE: "âª®",
            bumpe: "â‰",
            Bumpeq: "â‰Ž",
            bumpeq: "â‰",
            Cacute: "Ä†",
            cacute: "Ä‡",
            capand: "â©„",
            capbrcup: "â©‰",
            capcap: "â©‹",
            cap: "âˆ©",
            Cap: "â‹’",
            capcup: "â©‡",
            capdot: "â©€",
            CapitalDifferentialD: "â……",
            caps: "âˆ©ï¸€",
            caret: "â",
            caron: "Ë‡",
            Cayleys: "â„­",
            ccaps: "â©",
            Ccaron: "ÄŒ",
            ccaron: "Ä",
            Ccedil: "Ã‡",
            ccedil: "Ã§",
            Ccirc: "Äˆ",
            ccirc: "Ä‰",
            Cconint: "âˆ°",
            ccups: "â©Œ",
            ccupssm: "â©",
            Cdot: "ÄŠ",
            cdot: "Ä‹",
            cedil: "Â¸",
            Cedilla: "Â¸",
            cemptyv: "â¦²",
            cent: "Â¢",
            centerdot: "Â·",
            CenterDot: "Â·",
            cfr: "ð” ",
            Cfr: "â„­",
            CHcy: "Ð§",
            chcy: "Ñ‡",
            check: "âœ“",
            checkmark: "âœ“",
            Chi: "Î§",
            chi: "Ï‡",
            circ: "Ë†",
            circeq: "â‰—",
            circlearrowleft: "â†º",
            circlearrowright: "â†»",
            circledast: "âŠ›",
            circledcirc: "âŠš",
            circleddash: "âŠ",
            CircleDot: "âŠ™",
            circledR: "Â®",
            circledS: "â“ˆ",
            CircleMinus: "âŠ–",
            CirclePlus: "âŠ•",
            CircleTimes: "âŠ—",
            cir: "â—‹",
            cirE: "â§ƒ",
            cire: "â‰—",
            cirfnint: "â¨",
            cirmid: "â«¯",
            cirscir: "â§‚",
            ClockwiseContourIntegral: "âˆ²",
            CloseCurlyDoubleQuote: "â€",
            CloseCurlyQuote: "â€™",
            clubs: "â™£",
            clubsuit: "â™£",
            colon: ":",
            Colon: "âˆ·",
            Colone: "â©´",
            colone: "â‰”",
            coloneq: "â‰”",
            comma: ",",
            commat: "@",
            comp: "âˆ",
            compfn: "âˆ˜",
            complement: "âˆ",
            complexes: "â„‚",
            cong: "â‰…",
            congdot: "â©­",
            Congruent: "â‰¡",
            conint: "âˆ®",
            Conint: "âˆ¯",
            ContourIntegral: "âˆ®",
            copf: "ð•”",
            Copf: "â„‚",
            coprod: "âˆ",
            Coproduct: "âˆ",
            copy: "Â©",
            COPY: "Â©",
            copysr: "â„—",
            CounterClockwiseContourIntegral: "âˆ³",
            crarr: "â†µ",
            cross: "âœ—",
            Cross: "â¨¯",
            Cscr: "ð’ž",
            cscr: "ð’¸",
            csub: "â«",
            csube: "â«‘",
            csup: "â«",
            csupe: "â«’",
            ctdot: "â‹¯",
            cudarrl: "â¤¸",
            cudarrr: "â¤µ",
            cuepr: "â‹ž",
            cuesc: "â‹Ÿ",
            cularr: "â†¶",
            cularrp: "â¤½",
            cupbrcap: "â©ˆ",
            cupcap: "â©†",
            CupCap: "â‰",
            cup: "âˆª",
            Cup: "â‹“",
            cupcup: "â©Š",
            cupdot: "âŠ",
            cupor: "â©…",
            cups: "âˆªï¸€",
            curarr: "â†·",
            curarrm: "â¤¼",
            curlyeqprec: "â‹ž",
            curlyeqsucc: "â‹Ÿ",
            curlyvee: "â‹Ž",
            curlywedge: "â‹",
            curren: "Â¤",
            curvearrowleft: "â†¶",
            curvearrowright: "â†·",
            cuvee: "â‹Ž",
            cuwed: "â‹",
            cwconint: "âˆ²",
            cwint: "âˆ±",
            cylcty: "âŒ­",
            dagger: "â€ ",
            Dagger: "â€¡",
            daleth: "â„¸",
            darr: "â†“",
            Darr: "â†¡",
            dArr: "â‡“",
            dash: "â€",
            Dashv: "â«¤",
            dashv: "âŠ£",
            dbkarow: "â¤",
            dblac: "Ë",
            Dcaron: "ÄŽ",
            dcaron: "Ä",
            Dcy: "Ð”",
            dcy: "Ð´",
            ddagger: "â€¡",
            ddarr: "â‡Š",
            DD: "â……",
            dd: "â…†",
            DDotrahd: "â¤‘",
            ddotseq: "â©·",
            deg: "Â°",
            Del: "âˆ‡",
            Delta: "Î”",
            delta: "Î´",
            demptyv: "â¦±",
            dfisht: "â¥¿",
            Dfr: "ð”‡",
            dfr: "ð”¡",
            dHar: "â¥¥",
            dharl: "â‡ƒ",
            dharr: "â‡‚",
            DiacriticalAcute: "Â´",
            DiacriticalDot: "Ë™",
            DiacriticalDoubleAcute: "Ë",
            DiacriticalGrave: "`",
            DiacriticalTilde: "Ëœ",
            diam: "â‹„",
            diamond: "â‹„",
            Diamond: "â‹„",
            diamondsuit: "â™¦",
            diams: "â™¦",
            die: "Â¨",
            DifferentialD: "â…†",
            digamma: "Ï",
            disin: "â‹²",
            div: "Ã·",
            divide: "Ã·",
            divideontimes: "â‹‡",
            divonx: "â‹‡",
            DJcy: "Ð‚",
            djcy: "Ñ’",
            dlcorn: "âŒž",
            dlcrop: "âŒ",
            dollar: "$",
            Dopf: "ð”»",
            dopf: "ð••",
            Dot: "Â¨",
            dot: "Ë™",
            DotDot: "âƒœ",
            doteq: "â‰",
            doteqdot: "â‰‘",
            DotEqual: "â‰",
            dotminus: "âˆ¸",
            dotplus: "âˆ”",
            dotsquare: "âŠ¡",
            doublebarwedge: "âŒ†",
            DoubleContourIntegral: "âˆ¯",
            DoubleDot: "Â¨",
            DoubleDownArrow: "â‡“",
            DoubleLeftArrow: "â‡",
            DoubleLeftRightArrow: "â‡”",
            DoubleLeftTee: "â«¤",
            DoubleLongLeftArrow: "âŸ¸",
            DoubleLongLeftRightArrow: "âŸº",
            DoubleLongRightArrow: "âŸ¹",
            DoubleRightArrow: "â‡’",
            DoubleRightTee: "âŠ¨",
            DoubleUpArrow: "â‡‘",
            DoubleUpDownArrow: "â‡•",
            DoubleVerticalBar: "âˆ¥",
            DownArrowBar: "â¤“",
            downarrow: "â†“",
            DownArrow: "â†“",
            Downarrow: "â‡“",
            DownArrowUpArrow: "â‡µ",
            DownBreve: "Ì‘",
            downdownarrows: "â‡Š",
            downharpoonleft: "â‡ƒ",
            downharpoonright: "â‡‚",
            DownLeftRightVector: "â¥",
            DownLeftTeeVector: "â¥ž",
            DownLeftVectorBar: "â¥–",
            DownLeftVector: "â†½",
            DownRightTeeVector: "â¥Ÿ",
            DownRightVectorBar: "â¥—",
            DownRightVector: "â‡",
            DownTeeArrow: "â†§",
            DownTee: "âŠ¤",
            drbkarow: "â¤",
            drcorn: "âŒŸ",
            drcrop: "âŒŒ",
            Dscr: "ð’Ÿ",
            dscr: "ð’¹",
            DScy: "Ð…",
            dscy: "Ñ•",
            dsol: "â§¶",
            Dstrok: "Ä",
            dstrok: "Ä‘",
            dtdot: "â‹±",
            dtri: "â–¿",
            dtrif: "â–¾",
            duarr: "â‡µ",
            duhar: "â¥¯",
            dwangle: "â¦¦",
            DZcy: "Ð",
            dzcy: "ÑŸ",
            dzigrarr: "âŸ¿",
            Eacute: "Ã‰",
            eacute: "Ã©",
            easter: "â©®",
            Ecaron: "Äš",
            ecaron: "Ä›",
            Ecirc: "ÃŠ",
            ecirc: "Ãª",
            ecir: "â‰–",
            ecolon: "â‰•",
            Ecy: "Ð­",
            ecy: "Ñ",
            eDDot: "â©·",
            Edot: "Ä–",
            edot: "Ä—",
            eDot: "â‰‘",
            ee: "â…‡",
            efDot: "â‰’",
            Efr: "ð”ˆ",
            efr: "ð”¢",
            eg: "âªš",
            Egrave: "Ãˆ",
            egrave: "Ã¨",
            egs: "âª–",
            egsdot: "âª˜",
            el: "âª™",
            Element: "âˆˆ",
            elinters: "â§",
            ell: "â„“",
            els: "âª•",
            elsdot: "âª—",
            Emacr: "Ä’",
            emacr: "Ä“",
            empty: "âˆ…",
            emptyset: "âˆ…",
            EmptySmallSquare: "â—»",
            emptyv: "âˆ…",
            EmptyVerySmallSquare: "â–«",
            emsp13: "â€„",
            emsp14: "â€…",
            emsp: "â€ƒ",
            ENG: "ÅŠ",
            eng: "Å‹",
            ensp: "â€‚",
            Eogon: "Ä˜",
            eogon: "Ä™",
            Eopf: "ð”¼",
            eopf: "ð•–",
            epar: "â‹•",
            eparsl: "â§£",
            eplus: "â©±",
            epsi: "Îµ",
            Epsilon: "Î•",
            epsilon: "Îµ",
            epsiv: "Ïµ",
            eqcirc: "â‰–",
            eqcolon: "â‰•",
            eqsim: "â‰‚",
            eqslantgtr: "âª–",
            eqslantless: "âª•",
            Equal: "â©µ",
            equals: "=",
            EqualTilde: "â‰‚",
            equest: "â‰Ÿ",
            Equilibrium: "â‡Œ",
            equiv: "â‰¡",
            equivDD: "â©¸",
            eqvparsl: "â§¥",
            erarr: "â¥±",
            erDot: "â‰“",
            escr: "â„¯",
            Escr: "â„°",
            esdot: "â‰",
            Esim: "â©³",
            esim: "â‰‚",
            Eta: "Î—",
            eta: "Î·",
            ETH: "Ã",
            eth: "Ã°",
            Euml: "Ã‹",
            euml: "Ã«",
            euro: "â‚¬",
            excl: "!",
            exist: "âˆƒ",
            Exists: "âˆƒ",
            expectation: "â„°",
            exponentiale: "â…‡",
            ExponentialE: "â…‡",
            fallingdotseq: "â‰’",
            Fcy: "Ð¤",
            fcy: "Ñ„",
            female: "â™€",
            ffilig: "ï¬ƒ",
            fflig: "ï¬€",
            ffllig: "ï¬„",
            Ffr: "ð”‰",
            ffr: "ð”£",
            filig: "ï¬",
            FilledSmallSquare: "â—¼",
            FilledVerySmallSquare: "â–ª",
            fjlig: "fj",
            flat: "â™­",
            fllig: "ï¬‚",
            fltns: "â–±",
            fnof: "Æ’",
            Fopf: "ð”½",
            fopf: "ð•—",
            forall: "âˆ€",
            ForAll: "âˆ€",
            fork: "â‹”",
            forkv: "â«™",
            Fouriertrf: "â„±",
            fpartint: "â¨",
            frac12: "Â½",
            frac13: "â…“",
            frac14: "Â¼",
            frac15: "â…•",
            frac16: "â…™",
            frac18: "â…›",
            frac23: "â…”",
            frac25: "â…–",
            frac34: "Â¾",
            frac35: "â…—",
            frac38: "â…œ",
            frac45: "â…˜",
            frac56: "â…š",
            frac58: "â…",
            frac78: "â…ž",
            frasl: "â„",
            frown: "âŒ¢",
            fscr: "ð’»",
            Fscr: "â„±",
            gacute: "Çµ",
            Gamma: "Î“",
            gamma: "Î³",
            Gammad: "Ïœ",
            gammad: "Ï",
            gap: "âª†",
            Gbreve: "Äž",
            gbreve: "ÄŸ",
            Gcedil: "Ä¢",
            Gcirc: "Äœ",
            gcirc: "Ä",
            Gcy: "Ð“",
            gcy: "Ð³",
            Gdot: "Ä ",
            gdot: "Ä¡",
            ge: "â‰¥",
            gE: "â‰§",
            gEl: "âªŒ",
            gel: "â‹›",
            geq: "â‰¥",
            geqq: "â‰§",
            geqslant: "â©¾",
            gescc: "âª©",
            ges: "â©¾",
            gesdot: "âª€",
            gesdoto: "âª‚",
            gesdotol: "âª„",
            gesl: "â‹›ï¸€",
            gesles: "âª”",
            Gfr: "ð”Š",
            gfr: "ð”¤",
            gg: "â‰«",
            Gg: "â‹™",
            ggg: "â‹™",
            gimel: "â„·",
            GJcy: "Ðƒ",
            gjcy: "Ñ“",
            gla: "âª¥",
            gl: "â‰·",
            glE: "âª’",
            glj: "âª¤",
            gnap: "âªŠ",
            gnapprox: "âªŠ",
            gne: "âªˆ",
            gnE: "â‰©",
            gneq: "âªˆ",
            gneqq: "â‰©",
            gnsim: "â‹§",
            Gopf: "ð”¾",
            gopf: "ð•˜",
            grave: "`",
            GreaterEqual: "â‰¥",
            GreaterEqualLess: "â‹›",
            GreaterFullEqual: "â‰§",
            GreaterGreater: "âª¢",
            GreaterLess: "â‰·",
            GreaterSlantEqual: "â©¾",
            GreaterTilde: "â‰³",
            Gscr: "ð’¢",
            gscr: "â„Š",
            gsim: "â‰³",
            gsime: "âªŽ",
            gsiml: "âª",
            gtcc: "âª§",
            gtcir: "â©º",
            gt: ">",
            GT: ">",
            Gt: "â‰«",
            gtdot: "â‹—",
            gtlPar: "â¦•",
            gtquest: "â©¼",
            gtrapprox: "âª†",
            gtrarr: "â¥¸",
            gtrdot: "â‹—",
            gtreqless: "â‹›",
            gtreqqless: "âªŒ",
            gtrless: "â‰·",
            gtrsim: "â‰³",
            gvertneqq: "â‰©ï¸€",
            gvnE: "â‰©ï¸€",
            Hacek: "Ë‡",
            hairsp: "â€Š",
            half: "Â½",
            hamilt: "â„‹",
            HARDcy: "Ðª",
            hardcy: "ÑŠ",
            harrcir: "â¥ˆ",
            harr: "â†”",
            hArr: "â‡”",
            harrw: "â†­",
            Hat: "^",
            hbar: "â„",
            Hcirc: "Ä¤",
            hcirc: "Ä¥",
            hearts: "â™¥",
            heartsuit: "â™¥",
            hellip: "â€¦",
            hercon: "âŠ¹",
            hfr: "ð”¥",
            Hfr: "â„Œ",
            HilbertSpace: "â„‹",
            hksearow: "â¤¥",
            hkswarow: "â¤¦",
            hoarr: "â‡¿",
            homtht: "âˆ»",
            hookleftarrow: "â†©",
            hookrightarrow: "â†ª",
            hopf: "ð•™",
            Hopf: "â„",
            horbar: "â€•",
            HorizontalLine: "â”€",
            hscr: "ð’½",
            Hscr: "â„‹",
            hslash: "â„",
            Hstrok: "Ä¦",
            hstrok: "Ä§",
            HumpDownHump: "â‰Ž",
            HumpEqual: "â‰",
            hybull: "âƒ",
            hyphen: "â€",
            Iacute: "Ã",
            iacute: "Ã­",
            ic: "â£",
            Icirc: "ÃŽ",
            icirc: "Ã®",
            Icy: "Ð˜",
            icy: "Ð¸",
            Idot: "Ä°",
            IEcy: "Ð•",
            iecy: "Ðµ",
            iexcl: "Â¡",
            iff: "â‡”",
            ifr: "ð”¦",
            Ifr: "â„‘",
            Igrave: "ÃŒ",
            igrave: "Ã¬",
            ii: "â…ˆ",
            iiiint: "â¨Œ",
            iiint: "âˆ­",
            iinfin: "â§œ",
            iiota: "â„©",
            IJlig: "Ä²",
            ijlig: "Ä³",
            Imacr: "Äª",
            imacr: "Ä«",
            image: "â„‘",
            ImaginaryI: "â…ˆ",
            imagline: "â„",
            imagpart: "â„‘",
            imath: "Ä±",
            Im: "â„‘",
            imof: "âŠ·",
            imped: "Æµ",
            Implies: "â‡’",
            incare: "â„…",
            in: "âˆˆ",
            infin: "âˆž",
            infintie: "â§",
            inodot: "Ä±",
            intcal: "âŠº",
            int: "âˆ«",
            Int: "âˆ¬",
            integers: "â„¤",
            Integral: "âˆ«",
            intercal: "âŠº",
            Intersection: "â‹‚",
            intlarhk: "â¨—",
            intprod: "â¨¼",
            InvisibleComma: "â£",
            InvisibleTimes: "â¢",
            IOcy: "Ð",
            iocy: "Ñ‘",
            Iogon: "Ä®",
            iogon: "Ä¯",
            Iopf: "ð•€",
            iopf: "ð•š",
            Iota: "Î™",
            iota: "Î¹",
            iprod: "â¨¼",
            iquest: "Â¿",
            iscr: "ð’¾",
            Iscr: "â„",
            isin: "âˆˆ",
            isindot: "â‹µ",
            isinE: "â‹¹",
            isins: "â‹´",
            isinsv: "â‹³",
            isinv: "âˆˆ",
            it: "â¢",
            Itilde: "Ä¨",
            itilde: "Ä©",
            Iukcy: "Ð†",
            iukcy: "Ñ–",
            Iuml: "Ã",
            iuml: "Ã¯",
            Jcirc: "Ä´",
            jcirc: "Äµ",
            Jcy: "Ð™",
            jcy: "Ð¹",
            Jfr: "ð”",
            jfr: "ð”§",
            jmath: "È·",
            Jopf: "ð•",
            jopf: "ð•›",
            Jscr: "ð’¥",
            jscr: "ð’¿",
            Jsercy: "Ðˆ",
            jsercy: "Ñ˜",
            Jukcy: "Ð„",
            jukcy: "Ñ”",
            Kappa: "Îš",
            kappa: "Îº",
            kappav: "Ï°",
            Kcedil: "Ä¶",
            kcedil: "Ä·",
            Kcy: "Ðš",
            kcy: "Ðº",
            Kfr: "ð”Ž",
            kfr: "ð”¨",
            kgreen: "Ä¸",
            KHcy: "Ð¥",
            khcy: "Ñ…",
            KJcy: "ÐŒ",
            kjcy: "Ñœ",
            Kopf: "ð•‚",
            kopf: "ð•œ",
            Kscr: "ð’¦",
            kscr: "ð“€",
            lAarr: "â‡š",
            Lacute: "Ä¹",
            lacute: "Äº",
            laemptyv: "â¦´",
            lagran: "â„’",
            Lambda: "Î›",
            lambda: "Î»",
            lang: "âŸ¨",
            Lang: "âŸª",
            langd: "â¦‘",
            langle: "âŸ¨",
            lap: "âª…",
            Laplacetrf: "â„’",
            laquo: "Â«",
            larrb: "â‡¤",
            larrbfs: "â¤Ÿ",
            larr: "â†",
            Larr: "â†ž",
            lArr: "â‡",
            larrfs: "â¤",
            larrhk: "â†©",
            larrlp: "â†«",
            larrpl: "â¤¹",
            larrsim: "â¥³",
            larrtl: "â†¢",
            latail: "â¤™",
            lAtail: "â¤›",
            lat: "âª«",
            late: "âª­",
            lates: "âª­ï¸€",
            lbarr: "â¤Œ",
            lBarr: "â¤Ž",
            lbbrk: "â²",
            lbrace: "{",
            lbrack: "[",
            lbrke: "â¦‹",
            lbrksld: "â¦",
            lbrkslu: "â¦",
            Lcaron: "Ä½",
            lcaron: "Ä¾",
            Lcedil: "Ä»",
            lcedil: "Ä¼",
            lceil: "âŒˆ",
            lcub: "{",
            Lcy: "Ð›",
            lcy: "Ð»",
            ldca: "â¤¶",
            ldquo: "â€œ",
            ldquor: "â€ž",
            ldrdhar: "â¥§",
            ldrushar: "â¥‹",
            ldsh: "â†²",
            le: "â‰¤",
            lE: "â‰¦",
            LeftAngleBracket: "âŸ¨",
            LeftArrowBar: "â‡¤",
            leftarrow: "â†",
            LeftArrow: "â†",
            Leftarrow: "â‡",
            LeftArrowRightArrow: "â‡†",
            leftarrowtail: "â†¢",
            LeftCeiling: "âŒˆ",
            LeftDoubleBracket: "âŸ¦",
            LeftDownTeeVector: "â¥¡",
            LeftDownVectorBar: "â¥™",
            LeftDownVector: "â‡ƒ",
            LeftFloor: "âŒŠ",
            leftharpoondown: "â†½",
            leftharpoonup: "â†¼",
            leftleftarrows: "â‡‡",
            leftrightarrow: "â†”",
            LeftRightArrow: "â†”",
            Leftrightarrow: "â‡”",
            leftrightarrows: "â‡†",
            leftrightharpoons: "â‡‹",
            leftrightsquigarrow: "â†­",
            LeftRightVector: "â¥Ž",
            LeftTeeArrow: "â†¤",
            LeftTee: "âŠ£",
            LeftTeeVector: "â¥š",
            leftthreetimes: "â‹‹",
            LeftTriangleBar: "â§",
            LeftTriangle: "âŠ²",
            LeftTriangleEqual: "âŠ´",
            LeftUpDownVector: "â¥‘",
            LeftUpTeeVector: "â¥ ",
            LeftUpVectorBar: "â¥˜",
            LeftUpVector: "â†¿",
            LeftVectorBar: "â¥’",
            LeftVector: "â†¼",
            lEg: "âª‹",
            leg: "â‹š",
            leq: "â‰¤",
            leqq: "â‰¦",
            leqslant: "â©½",
            lescc: "âª¨",
            les: "â©½",
            lesdot: "â©¿",
            lesdoto: "âª",
            lesdotor: "âªƒ",
            lesg: "â‹šï¸€",
            lesges: "âª“",
            lessapprox: "âª…",
            lessdot: "â‹–",
            lesseqgtr: "â‹š",
            lesseqqgtr: "âª‹",
            LessEqualGreater: "â‹š",
            LessFullEqual: "â‰¦",
            LessGreater: "â‰¶",
            lessgtr: "â‰¶",
            LessLess: "âª¡",
            lesssim: "â‰²",
            LessSlantEqual: "â©½",
            LessTilde: "â‰²",
            lfisht: "â¥¼",
            lfloor: "âŒŠ",
            Lfr: "ð”",
            lfr: "ð”©",
            lg: "â‰¶",
            lgE: "âª‘",
            lHar: "â¥¢",
            lhard: "â†½",
            lharu: "â†¼",
            lharul: "â¥ª",
            lhblk: "â–„",
            LJcy: "Ð‰",
            ljcy: "Ñ™",
            llarr: "â‡‡",
            ll: "â‰ª",
            Ll: "â‹˜",
            llcorner: "âŒž",
            Lleftarrow: "â‡š",
            llhard: "â¥«",
            lltri: "â—º",
            Lmidot: "Ä¿",
            lmidot: "Å€",
            lmoustache: "âŽ°",
            lmoust: "âŽ°",
            lnap: "âª‰",
            lnapprox: "âª‰",
            lne: "âª‡",
            lnE: "â‰¨",
            lneq: "âª‡",
            lneqq: "â‰¨",
            lnsim: "â‹¦",
            loang: "âŸ¬",
            loarr: "â‡½",
            lobrk: "âŸ¦",
            longleftarrow: "âŸµ",
            LongLeftArrow: "âŸµ",
            Longleftarrow: "âŸ¸",
            longleftrightarrow: "âŸ·",
            LongLeftRightArrow: "âŸ·",
            Longleftrightarrow: "âŸº",
            longmapsto: "âŸ¼",
            longrightarrow: "âŸ¶",
            LongRightArrow: "âŸ¶",
            Longrightarrow: "âŸ¹",
            looparrowleft: "â†«",
            looparrowright: "â†¬",
            lopar: "â¦…",
            Lopf: "ð•ƒ",
            lopf: "ð•",
            loplus: "â¨­",
            lotimes: "â¨´",
            lowast: "âˆ—",
            lowbar: "_",
            LowerLeftArrow: "â†™",
            LowerRightArrow: "â†˜",
            loz: "â—Š",
            lozenge: "â—Š",
            lozf: "â§«",
            lpar: "(",
            lparlt: "â¦“",
            lrarr: "â‡†",
            lrcorner: "âŒŸ",
            lrhar: "â‡‹",
            lrhard: "â¥­",
            lrm: "â€Ž",
            lrtri: "âŠ¿",
            lsaquo: "â€¹",
            lscr: "ð“",
            Lscr: "â„’",
            lsh: "â†°",
            Lsh: "â†°",
            lsim: "â‰²",
            lsime: "âª",
            lsimg: "âª",
            lsqb: "[",
            lsquo: "â€˜",
            lsquor: "â€š",
            Lstrok: "Å",
            lstrok: "Å‚",
            ltcc: "âª¦",
            ltcir: "â©¹",
            lt: "<",
            LT: "<",
            Lt: "â‰ª",
            ltdot: "â‹–",
            lthree: "â‹‹",
            ltimes: "â‹‰",
            ltlarr: "â¥¶",
            ltquest: "â©»",
            ltri: "â—ƒ",
            ltrie: "âŠ´",
            ltrif: "â—‚",
            ltrPar: "â¦–",
            lurdshar: "â¥Š",
            luruhar: "â¥¦",
            lvertneqq: "â‰¨ï¸€",
            lvnE: "â‰¨ï¸€",
            macr: "Â¯",
            male: "â™‚",
            malt: "âœ ",
            maltese: "âœ ",
            Map: "â¤…",
            map: "â†¦",
            mapsto: "â†¦",
            mapstodown: "â†§",
            mapstoleft: "â†¤",
            mapstoup: "â†¥",
            marker: "â–®",
            mcomma: "â¨©",
            Mcy: "Ðœ",
            mcy: "Ð¼",
            mdash: "â€”",
            mDDot: "âˆº",
            measuredangle: "âˆ¡",
            MediumSpace: "âŸ",
            Mellintrf: "â„³",
            Mfr: "ð”",
            mfr: "ð”ª",
            mho: "â„§",
            micro: "Âµ",
            midast: "*",
            midcir: "â«°",
            mid: "âˆ£",
            middot: "Â·",
            minusb: "âŠŸ",
            minus: "âˆ’",
            minusd: "âˆ¸",
            minusdu: "â¨ª",
            MinusPlus: "âˆ“",
            mlcp: "â«›",
            mldr: "â€¦",
            mnplus: "âˆ“",
            models: "âŠ§",
            Mopf: "ð•„",
            mopf: "ð•ž",
            mp: "âˆ“",
            mscr: "ð“‚",
            Mscr: "â„³",
            mstpos: "âˆ¾",
            Mu: "Îœ",
            mu: "Î¼",
            multimap: "âŠ¸",
            mumap: "âŠ¸",
            nabla: "âˆ‡",
            Nacute: "Åƒ",
            nacute: "Å„",
            nang: "âˆ âƒ’",
            nap: "â‰‰",
            napE: "â©°Ì¸",
            napid: "â‰‹Ì¸",
            napos: "Å‰",
            napprox: "â‰‰",
            natural: "â™®",
            naturals: "â„•",
            natur: "â™®",
            nbsp: "Â ",
            nbump: "â‰ŽÌ¸",
            nbumpe: "â‰Ì¸",
            ncap: "â©ƒ",
            Ncaron: "Å‡",
            ncaron: "Åˆ",
            Ncedil: "Å…",
            ncedil: "Å†",
            ncong: "â‰‡",
            ncongdot: "â©­Ì¸",
            ncup: "â©‚",
            Ncy: "Ð",
            ncy: "Ð½",
            ndash: "â€“",
            nearhk: "â¤¤",
            nearr: "â†—",
            neArr: "â‡—",
            nearrow: "â†—",
            ne: "â‰ ",
            nedot: "â‰Ì¸",
            NegativeMediumSpace: "â€‹",
            NegativeThickSpace: "â€‹",
            NegativeThinSpace: "â€‹",
            NegativeVeryThinSpace: "â€‹",
            nequiv: "â‰¢",
            nesear: "â¤¨",
            nesim: "â‰‚Ì¸",
            NestedGreaterGreater: "â‰«",
            NestedLessLess: "â‰ª",
            NewLine: "\n",
            nexist: "âˆ„",
            nexists: "âˆ„",
            Nfr: "ð”‘",
            nfr: "ð”«",
            ngE: "â‰§Ì¸",
            nge: "â‰±",
            ngeq: "â‰±",
            ngeqq: "â‰§Ì¸",
            ngeqslant: "â©¾Ì¸",
            nges: "â©¾Ì¸",
            nGg: "â‹™Ì¸",
            ngsim: "â‰µ",
            nGt: "â‰«âƒ’",
            ngt: "â‰¯",
            ngtr: "â‰¯",
            nGtv: "â‰«Ì¸",
            nharr: "â†®",
            nhArr: "â‡Ž",
            nhpar: "â«²",
            ni: "âˆ‹",
            nis: "â‹¼",
            nisd: "â‹º",
            niv: "âˆ‹",
            NJcy: "ÐŠ",
            njcy: "Ñš",
            nlarr: "â†š",
            nlArr: "â‡",
            nldr: "â€¥",
            nlE: "â‰¦Ì¸",
            nle: "â‰°",
            nleftarrow: "â†š",
            nLeftarrow: "â‡",
            nleftrightarrow: "â†®",
            nLeftrightarrow: "â‡Ž",
            nleq: "â‰°",
            nleqq: "â‰¦Ì¸",
            nleqslant: "â©½Ì¸",
            nles: "â©½Ì¸",
            nless: "â‰®",
            nLl: "â‹˜Ì¸",
            nlsim: "â‰´",
            nLt: "â‰ªâƒ’",
            nlt: "â‰®",
            nltri: "â‹ª",
            nltrie: "â‹¬",
            nLtv: "â‰ªÌ¸",
            nmid: "âˆ¤",
            NoBreak: "â ",
            NonBreakingSpace: "Â ",
            nopf: "ð•Ÿ",
            Nopf: "â„•",
            Not: "â«¬",
            not: "Â¬",
            NotCongruent: "â‰¢",
            NotCupCap: "â‰­",
            NotDoubleVerticalBar: "âˆ¦",
            NotElement: "âˆ‰",
            NotEqual: "â‰ ",
            NotEqualTilde: "â‰‚Ì¸",
            NotExists: "âˆ„",
            NotGreater: "â‰¯",
            NotGreaterEqual: "â‰±",
            NotGreaterFullEqual: "â‰§Ì¸",
            NotGreaterGreater: "â‰«Ì¸",
            NotGreaterLess: "â‰¹",
            NotGreaterSlantEqual: "â©¾Ì¸",
            NotGreaterTilde: "â‰µ",
            NotHumpDownHump: "â‰ŽÌ¸",
            NotHumpEqual: "â‰Ì¸",
            notin: "âˆ‰",
            notindot: "â‹µÌ¸",
            notinE: "â‹¹Ì¸",
            notinva: "âˆ‰",
            notinvb: "â‹·",
            notinvc: "â‹¶",
            NotLeftTriangleBar: "â§Ì¸",
            NotLeftTriangle: "â‹ª",
            NotLeftTriangleEqual: "â‹¬",
            NotLess: "â‰®",
            NotLessEqual: "â‰°",
            NotLessGreater: "â‰¸",
            NotLessLess: "â‰ªÌ¸",
            NotLessSlantEqual: "â©½Ì¸",
            NotLessTilde: "â‰´",
            NotNestedGreaterGreater: "âª¢Ì¸",
            NotNestedLessLess: "âª¡Ì¸",
            notni: "âˆŒ",
            notniva: "âˆŒ",
            notnivb: "â‹¾",
            notnivc: "â‹½",
            NotPrecedes: "âŠ€",
            NotPrecedesEqual: "âª¯Ì¸",
            NotPrecedesSlantEqual: "â‹ ",
            NotReverseElement: "âˆŒ",
            NotRightTriangleBar: "â§Ì¸",
            NotRightTriangle: "â‹«",
            NotRightTriangleEqual: "â‹­",
            NotSquareSubset: "âŠÌ¸",
            NotSquareSubsetEqual: "â‹¢",
            NotSquareSuperset: "âŠÌ¸",
            NotSquareSupersetEqual: "â‹£",
            NotSubset: "âŠ‚âƒ’",
            NotSubsetEqual: "âŠˆ",
            NotSucceeds: "âŠ",
            NotSucceedsEqual: "âª°Ì¸",
            NotSucceedsSlantEqual: "â‹¡",
            NotSucceedsTilde: "â‰¿Ì¸",
            NotSuperset: "âŠƒâƒ’",
            NotSupersetEqual: "âŠ‰",
            NotTilde: "â‰",
            NotTildeEqual: "â‰„",
            NotTildeFullEqual: "â‰‡",
            NotTildeTilde: "â‰‰",
            NotVerticalBar: "âˆ¤",
            nparallel: "âˆ¦",
            npar: "âˆ¦",
            nparsl: "â«½âƒ¥",
            npart: "âˆ‚Ì¸",
            npolint: "â¨”",
            npr: "âŠ€",
            nprcue: "â‹ ",
            nprec: "âŠ€",
            npreceq: "âª¯Ì¸",
            npre: "âª¯Ì¸",
            nrarrc: "â¤³Ì¸",
            nrarr: "â†›",
            nrArr: "â‡",
            nrarrw: "â†Ì¸",
            nrightarrow: "â†›",
            nRightarrow: "â‡",
            nrtri: "â‹«",
            nrtrie: "â‹­",
            nsc: "âŠ",
            nsccue: "â‹¡",
            nsce: "âª°Ì¸",
            Nscr: "ð’©",
            nscr: "ð“ƒ",
            nshortmid: "âˆ¤",
            nshortparallel: "âˆ¦",
            nsim: "â‰",
            nsime: "â‰„",
            nsimeq: "â‰„",
            nsmid: "âˆ¤",
            nspar: "âˆ¦",
            nsqsube: "â‹¢",
            nsqsupe: "â‹£",
            nsub: "âŠ„",
            nsubE: "â«…Ì¸",
            nsube: "âŠˆ",
            nsubset: "âŠ‚âƒ’",
            nsubseteq: "âŠˆ",
            nsubseteqq: "â«…Ì¸",
            nsucc: "âŠ",
            nsucceq: "âª°Ì¸",
            nsup: "âŠ…",
            nsupE: "â«†Ì¸",
            nsupe: "âŠ‰",
            nsupset: "âŠƒâƒ’",
            nsupseteq: "âŠ‰",
            nsupseteqq: "â«†Ì¸",
            ntgl: "â‰¹",
            Ntilde: "Ã‘",
            ntilde: "Ã±",
            ntlg: "â‰¸",
            ntriangleleft: "â‹ª",
            ntrianglelefteq: "â‹¬",
            ntriangleright: "â‹«",
            ntrianglerighteq: "â‹­",
            Nu: "Î",
            nu: "Î½",
            num: "#",
            numero: "â„–",
            numsp: "â€‡",
            nvap: "â‰âƒ’",
            nvdash: "âŠ¬",
            nvDash: "âŠ­",
            nVdash: "âŠ®",
            nVDash: "âŠ¯",
            nvge: "â‰¥âƒ’",
            nvgt: ">âƒ’",
            nvHarr: "â¤„",
            nvinfin: "â§ž",
            nvlArr: "â¤‚",
            nvle: "â‰¤âƒ’",
            nvlt: "<âƒ’",
            nvltrie: "âŠ´âƒ’",
            nvrArr: "â¤ƒ",
            nvrtrie: "âŠµâƒ’",
            nvsim: "âˆ¼âƒ’",
            nwarhk: "â¤£",
            nwarr: "â†–",
            nwArr: "â‡–",
            nwarrow: "â†–",
            nwnear: "â¤§",
            Oacute: "Ã“",
            oacute: "Ã³",
            oast: "âŠ›",
            Ocirc: "Ã”",
            ocirc: "Ã´",
            ocir: "âŠš",
            Ocy: "Ðž",
            ocy: "Ð¾",
            odash: "âŠ",
            Odblac: "Å",
            odblac: "Å‘",
            odiv: "â¨¸",
            odot: "âŠ™",
            odsold: "â¦¼",
            OElig: "Å’",
            oelig: "Å“",
            ofcir: "â¦¿",
            Ofr: "ð”’",
            ofr: "ð”¬",
            ogon: "Ë›",
            Ograve: "Ã’",
            ograve: "Ã²",
            ogt: "â§",
            ohbar: "â¦µ",
            ohm: "Î©",
            oint: "âˆ®",
            olarr: "â†º",
            olcir: "â¦¾",
            olcross: "â¦»",
            oline: "â€¾",
            olt: "â§€",
            Omacr: "ÅŒ",
            omacr: "Å",
            Omega: "Î©",
            omega: "Ï‰",
            Omicron: "ÎŸ",
            omicron: "Î¿",
            omid: "â¦¶",
            ominus: "âŠ–",
            Oopf: "ð•†",
            oopf: "ð• ",
            opar: "â¦·",
            OpenCurlyDoubleQuote: "â€œ",
            OpenCurlyQuote: "â€˜",
            operp: "â¦¹",
            oplus: "âŠ•",
            orarr: "â†»",
            Or: "â©”",
            or: "âˆ¨",
            ord: "â©",
            order: "â„´",
            orderof: "â„´",
            ordf: "Âª",
            ordm: "Âº",
            origof: "âŠ¶",
            oror: "â©–",
            orslope: "â©—",
            orv: "â©›",
            oS: "â“ˆ",
            Oscr: "ð’ª",
            oscr: "â„´",
            Oslash: "Ã˜",
            oslash: "Ã¸",
            osol: "âŠ˜",
            Otilde: "Ã•",
            otilde: "Ãµ",
            otimesas: "â¨¶",
            Otimes: "â¨·",
            otimes: "âŠ—",
            Ouml: "Ã–",
            ouml: "Ã¶",
            ovbar: "âŒ½",
            OverBar: "â€¾",
            OverBrace: "âž",
            OverBracket: "âŽ´",
            OverParenthesis: "âœ",
            para: "Â¶",
            parallel: "âˆ¥",
            par: "âˆ¥",
            parsim: "â«³",
            parsl: "â«½",
            part: "âˆ‚",
            PartialD: "âˆ‚",
            Pcy: "ÐŸ",
            pcy: "Ð¿",
            percnt: "%",
            period: ".",
            permil: "â€°",
            perp: "âŠ¥",
            pertenk: "â€±",
            Pfr: "ð”“",
            pfr: "ð”­",
            Phi: "Î¦",
            phi: "Ï†",
            phiv: "Ï•",
            phmmat: "â„³",
            phone: "â˜Ž",
            Pi: "Î ",
            pi: "Ï€",
            pitchfork: "â‹”",
            piv: "Ï–",
            planck: "â„",
            planckh: "â„Ž",
            plankv: "â„",
            plusacir: "â¨£",
            plusb: "âŠž",
            pluscir: "â¨¢",
            plus: "+",
            plusdo: "âˆ”",
            plusdu: "â¨¥",
            pluse: "â©²",
            PlusMinus: "Â±",
            plusmn: "Â±",
            plussim: "â¨¦",
            plustwo: "â¨§",
            pm: "Â±",
            Poincareplane: "â„Œ",
            pointint: "â¨•",
            popf: "ð•¡",
            Popf: "â„™",
            pound: "Â£",
            prap: "âª·",
            Pr: "âª»",
            pr: "â‰º",
            prcue: "â‰¼",
            precapprox: "âª·",
            prec: "â‰º",
            preccurlyeq: "â‰¼",
            Precedes: "â‰º",
            PrecedesEqual: "âª¯",
            PrecedesSlantEqual: "â‰¼",
            PrecedesTilde: "â‰¾",
            preceq: "âª¯",
            precnapprox: "âª¹",
            precneqq: "âªµ",
            precnsim: "â‹¨",
            pre: "âª¯",
            prE: "âª³",
            precsim: "â‰¾",
            prime: "â€²",
            Prime: "â€³",
            primes: "â„™",
            prnap: "âª¹",
            prnE: "âªµ",
            prnsim: "â‹¨",
            prod: "âˆ",
            Product: "âˆ",
            profalar: "âŒ®",
            profline: "âŒ’",
            profsurf: "âŒ“",
            prop: "âˆ",
            Proportional: "âˆ",
            Proportion: "âˆ·",
            propto: "âˆ",
            prsim: "â‰¾",
            prurel: "âŠ°",
            Pscr: "ð’«",
            pscr: "ð“…",
            Psi: "Î¨",
            psi: "Ïˆ",
            puncsp: "â€ˆ",
            Qfr: "ð””",
            qfr: "ð”®",
            qint: "â¨Œ",
            qopf: "ð•¢",
            Qopf: "â„š",
            qprime: "â—",
            Qscr: "ð’¬",
            qscr: "ð“†",
            quaternions: "â„",
            quatint: "â¨–",
            quest: "?",
            questeq: "â‰Ÿ",
            quot: '"',
            QUOT: '"',
            rAarr: "â‡›",
            race: "âˆ½Ì±",
            Racute: "Å”",
            racute: "Å•",
            radic: "âˆš",
            raemptyv: "â¦³",
            rang: "âŸ©",
            Rang: "âŸ«",
            rangd: "â¦’",
            range: "â¦¥",
            rangle: "âŸ©",
            raquo: "Â»",
            rarrap: "â¥µ",
            rarrb: "â‡¥",
            rarrbfs: "â¤ ",
            rarrc: "â¤³",
            rarr: "â†’",
            Rarr: "â† ",
            rArr: "â‡’",
            rarrfs: "â¤ž",
            rarrhk: "â†ª",
            rarrlp: "â†¬",
            rarrpl: "â¥…",
            rarrsim: "â¥´",
            Rarrtl: "â¤–",
            rarrtl: "â†£",
            rarrw: "â†",
            ratail: "â¤š",
            rAtail: "â¤œ",
            ratio: "âˆ¶",
            rationals: "â„š",
            rbarr: "â¤",
            rBarr: "â¤",
            RBarr: "â¤",
            rbbrk: "â³",
            rbrace: "}",
            rbrack: "]",
            rbrke: "â¦Œ",
            rbrksld: "â¦Ž",
            rbrkslu: "â¦",
            Rcaron: "Å˜",
            rcaron: "Å™",
            Rcedil: "Å–",
            rcedil: "Å—",
            rceil: "âŒ‰",
            rcub: "}",
            Rcy: "Ð ",
            rcy: "Ñ€",
            rdca: "â¤·",
            rdldhar: "â¥©",
            rdquo: "â€",
            rdquor: "â€",
            rdsh: "â†³",
            real: "â„œ",
            realine: "â„›",
            realpart: "â„œ",
            reals: "â„",
            Re: "â„œ",
            rect: "â–­",
            reg: "Â®",
            REG: "Â®",
            ReverseElement: "âˆ‹",
            ReverseEquilibrium: "â‡‹",
            ReverseUpEquilibrium: "â¥¯",
            rfisht: "â¥½",
            rfloor: "âŒ‹",
            rfr: "ð”¯",
            Rfr: "â„œ",
            rHar: "â¥¤",
            rhard: "â‡",
            rharu: "â‡€",
            rharul: "â¥¬",
            Rho: "Î¡",
            rho: "Ï",
            rhov: "Ï±",
            RightAngleBracket: "âŸ©",
            RightArrowBar: "â‡¥",
            rightarrow: "â†’",
            RightArrow: "â†’",
            Rightarrow: "â‡’",
            RightArrowLeftArrow: "â‡„",
            rightarrowtail: "â†£",
            RightCeiling: "âŒ‰",
            RightDoubleBracket: "âŸ§",
            RightDownTeeVector: "â¥",
            RightDownVectorBar: "â¥•",
            RightDownVector: "â‡‚",
            RightFloor: "âŒ‹",
            rightharpoondown: "â‡",
            rightharpoonup: "â‡€",
            rightleftarrows: "â‡„",
            rightleftharpoons: "â‡Œ",
            rightrightarrows: "â‡‰",
            rightsquigarrow: "â†",
            RightTeeArrow: "â†¦",
            RightTee: "âŠ¢",
            RightTeeVector: "â¥›",
            rightthreetimes: "â‹Œ",
            RightTriangleBar: "â§",
            RightTriangle: "âŠ³",
            RightTriangleEqual: "âŠµ",
            RightUpDownVector: "â¥",
            RightUpTeeVector: "â¥œ",
            RightUpVectorBar: "â¥”",
            RightUpVector: "â†¾",
            RightVectorBar: "â¥“",
            RightVector: "â‡€",
            ring: "Ëš",
            risingdotseq: "â‰“",
            rlarr: "â‡„",
            rlhar: "â‡Œ",
            rlm: "â€",
            rmoustache: "âŽ±",
            rmoust: "âŽ±",
            rnmid: "â«®",
            roang: "âŸ­",
            roarr: "â‡¾",
            robrk: "âŸ§",
            ropar: "â¦†",
            ropf: "ð•£",
            Ropf: "â„",
            roplus: "â¨®",
            rotimes: "â¨µ",
            RoundImplies: "â¥°",
            rpar: ")",
            rpargt: "â¦”",
            rppolint: "â¨’",
            rrarr: "â‡‰",
            Rrightarrow: "â‡›",
            rsaquo: "â€º",
            rscr: "ð“‡",
            Rscr: "â„›",
            rsh: "â†±",
            Rsh: "â†±",
            rsqb: "]",
            rsquo: "â€™",
            rsquor: "â€™",
            rthree: "â‹Œ",
            rtimes: "â‹Š",
            rtri: "â–¹",
            rtrie: "âŠµ",
            rtrif: "â–¸",
            rtriltri: "â§Ž",
            RuleDelayed: "â§´",
            ruluhar: "â¥¨",
            rx: "â„ž",
            Sacute: "Åš",
            sacute: "Å›",
            sbquo: "â€š",
            scap: "âª¸",
            Scaron: "Å ",
            scaron: "Å¡",
            Sc: "âª¼",
            sc: "â‰»",
            sccue: "â‰½",
            sce: "âª°",
            scE: "âª´",
            Scedil: "Åž",
            scedil: "ÅŸ",
            Scirc: "Åœ",
            scirc: "Å",
            scnap: "âªº",
            scnE: "âª¶",
            scnsim: "â‹©",
            scpolint: "â¨“",
            scsim: "â‰¿",
            Scy: "Ð¡",
            scy: "Ñ",
            sdotb: "âŠ¡",
            sdot: "â‹…",
            sdote: "â©¦",
            searhk: "â¤¥",
            searr: "â†˜",
            seArr: "â‡˜",
            searrow: "â†˜",
            sect: "Â§",
            semi: ";",
            seswar: "â¤©",
            setminus: "âˆ–",
            setmn: "âˆ–",
            sext: "âœ¶",
            Sfr: "ð”–",
            sfr: "ð”°",
            sfrown: "âŒ¢",
            sharp: "â™¯",
            SHCHcy: "Ð©",
            shchcy: "Ñ‰",
            SHcy: "Ð¨",
            shcy: "Ñˆ",
            ShortDownArrow: "â†“",
            ShortLeftArrow: "â†",
            shortmid: "âˆ£",
            shortparallel: "âˆ¥",
            ShortRightArrow: "â†’",
            ShortUpArrow: "â†‘",
            shy: "Â­",
            Sigma: "Î£",
            sigma: "Ïƒ",
            sigmaf: "Ï‚",
            sigmav: "Ï‚",
            sim: "âˆ¼",
            simdot: "â©ª",
            sime: "â‰ƒ",
            simeq: "â‰ƒ",
            simg: "âªž",
            simgE: "âª ",
            siml: "âª",
            simlE: "âªŸ",
            simne: "â‰†",
            simplus: "â¨¤",
            simrarr: "â¥²",
            slarr: "â†",
            SmallCircle: "âˆ˜",
            smallsetminus: "âˆ–",
            smashp: "â¨³",
            smeparsl: "â§¤",
            smid: "âˆ£",
            smile: "âŒ£",
            smt: "âªª",
            smte: "âª¬",
            smtes: "âª¬ï¸€",
            SOFTcy: "Ð¬",
            softcy: "ÑŒ",
            solbar: "âŒ¿",
            solb: "â§„",
            sol: "/",
            Sopf: "ð•Š",
            sopf: "ð•¤",
            spades: "â™ ",
            spadesuit: "â™ ",
            spar: "âˆ¥",
            sqcap: "âŠ“",
            sqcaps: "âŠ“ï¸€",
            sqcup: "âŠ”",
            sqcups: "âŠ”ï¸€",
            Sqrt: "âˆš",
            sqsub: "âŠ",
            sqsube: "âŠ‘",
            sqsubset: "âŠ",
            sqsubseteq: "âŠ‘",
            sqsup: "âŠ",
            sqsupe: "âŠ’",
            sqsupset: "âŠ",
            sqsupseteq: "âŠ’",
            square: "â–¡",
            Square: "â–¡",
            SquareIntersection: "âŠ“",
            SquareSubset: "âŠ",
            SquareSubsetEqual: "âŠ‘",
            SquareSuperset: "âŠ",
            SquareSupersetEqual: "âŠ’",
            SquareUnion: "âŠ”",
            squarf: "â–ª",
            squ: "â–¡",
            squf: "â–ª",
            srarr: "â†’",
            Sscr: "ð’®",
            sscr: "ð“ˆ",
            ssetmn: "âˆ–",
            ssmile: "âŒ£",
            sstarf: "â‹†",
            Star: "â‹†",
            star: "â˜†",
            starf: "â˜…",
            straightepsilon: "Ïµ",
            straightphi: "Ï•",
            strns: "Â¯",
            sub: "âŠ‚",
            Sub: "â‹",
            subdot: "âª½",
            subE: "â«…",
            sube: "âŠ†",
            subedot: "â«ƒ",
            submult: "â«",
            subnE: "â«‹",
            subne: "âŠŠ",
            subplus: "âª¿",
            subrarr: "â¥¹",
            subset: "âŠ‚",
            Subset: "â‹",
            subseteq: "âŠ†",
            subseteqq: "â«…",
            SubsetEqual: "âŠ†",
            subsetneq: "âŠŠ",
            subsetneqq: "â«‹",
            subsim: "â«‡",
            subsub: "â«•",
            subsup: "â«“",
            succapprox: "âª¸",
            succ: "â‰»",
            succcurlyeq: "â‰½",
            Succeeds: "â‰»",
            SucceedsEqual: "âª°",
            SucceedsSlantEqual: "â‰½",
            SucceedsTilde: "â‰¿",
            succeq: "âª°",
            succnapprox: "âªº",
            succneqq: "âª¶",
            succnsim: "â‹©",
            succsim: "â‰¿",
            SuchThat: "âˆ‹",
            sum: "âˆ‘",
            Sum: "âˆ‘",
            sung: "â™ª",
            sup1: "Â¹",
            sup2: "Â²",
            sup3: "Â³",
            sup: "âŠƒ",
            Sup: "â‹‘",
            supdot: "âª¾",
            supdsub: "â«˜",
            supE: "â«†",
            supe: "âŠ‡",
            supedot: "â«„",
            Superset: "âŠƒ",
            SupersetEqual: "âŠ‡",
            suphsol: "âŸ‰",
            suphsub: "â«—",
            suplarr: "â¥»",
            supmult: "â«‚",
            supnE: "â«Œ",
            supne: "âŠ‹",
            supplus: "â«€",
            supset: "âŠƒ",
            Supset: "â‹‘",
            supseteq: "âŠ‡",
            supseteqq: "â«†",
            supsetneq: "âŠ‹",
            supsetneqq: "â«Œ",
            supsim: "â«ˆ",
            supsub: "â«”",
            supsup: "â«–",
            swarhk: "â¤¦",
            swarr: "â†™",
            swArr: "â‡™",
            swarrow: "â†™",
            swnwar: "â¤ª",
            szlig: "ÃŸ",
            Tab: "\t",
            target: "âŒ–",
            Tau: "Î¤",
            tau: "Ï„",
            tbrk: "âŽ´",
            Tcaron: "Å¤",
            tcaron: "Å¥",
            Tcedil: "Å¢",
            tcedil: "Å£",
            Tcy: "Ð¢",
            tcy: "Ñ‚",
            tdot: "âƒ›",
            telrec: "âŒ•",
            Tfr: "ð”—",
            tfr: "ð”±",
            there4: "âˆ´",
            therefore: "âˆ´",
            Therefore: "âˆ´",
            Theta: "Î˜",
            theta: "Î¸",
            thetasym: "Ï‘",
            thetav: "Ï‘",
            thickapprox: "â‰ˆ",
            thicksim: "âˆ¼",
            ThickSpace: "âŸâ€Š",
            ThinSpace: "â€‰",
            thinsp: "â€‰",
            thkap: "â‰ˆ",
            thksim: "âˆ¼",
            THORN: "Ãž",
            thorn: "Ã¾",
            tilde: "Ëœ",
            Tilde: "âˆ¼",
            TildeEqual: "â‰ƒ",
            TildeFullEqual: "â‰…",
            TildeTilde: "â‰ˆ",
            timesbar: "â¨±",
            timesb: "âŠ ",
            times: "Ã—",
            timesd: "â¨°",
            tint: "âˆ­",
            toea: "â¤¨",
            topbot: "âŒ¶",
            topcir: "â«±",
            top: "âŠ¤",
            Topf: "ð•‹",
            topf: "ð•¥",
            topfork: "â«š",
            tosa: "â¤©",
            tprime: "â€´",
            trade: "â„¢",
            TRADE: "â„¢",
            triangle: "â–µ",
            triangledown: "â–¿",
            triangleleft: "â—ƒ",
            trianglelefteq: "âŠ´",
            triangleq: "â‰œ",
            triangleright: "â–¹",
            trianglerighteq: "âŠµ",
            tridot: "â—¬",
            trie: "â‰œ",
            triminus: "â¨º",
            TripleDot: "âƒ›",
            triplus: "â¨¹",
            trisb: "â§",
            tritime: "â¨»",
            trpezium: "â¢",
            Tscr: "ð’¯",
            tscr: "ð“‰",
            TScy: "Ð¦",
            tscy: "Ñ†",
            TSHcy: "Ð‹",
            tshcy: "Ñ›",
            Tstrok: "Å¦",
            tstrok: "Å§",
            twixt: "â‰¬",
            twoheadleftarrow: "â†ž",
            twoheadrightarrow: "â† ",
            Uacute: "Ãš",
            uacute: "Ãº",
            uarr: "â†‘",
            Uarr: "â†Ÿ",
            uArr: "â‡‘",
            Uarrocir: "â¥‰",
            Ubrcy: "ÐŽ",
            ubrcy: "Ñž",
            Ubreve: "Å¬",
            ubreve: "Å­",
            Ucirc: "Ã›",
            ucirc: "Ã»",
            Ucy: "Ð£",
            ucy: "Ñƒ",
            udarr: "â‡…",
            Udblac: "Å°",
            udblac: "Å±",
            udhar: "â¥®",
            ufisht: "â¥¾",
            Ufr: "ð”˜",
            ufr: "ð”²",
            Ugrave: "Ã™",
            ugrave: "Ã¹",
            uHar: "â¥£",
            uharl: "â†¿",
            uharr: "â†¾",
            uhblk: "â–€",
            ulcorn: "âŒœ",
            ulcorner: "âŒœ",
            ulcrop: "âŒ",
            ultri: "â—¸",
            Umacr: "Åª",
            umacr: "Å«",
            uml: "Â¨",
            UnderBar: "_",
            UnderBrace: "âŸ",
            UnderBracket: "âŽµ",
            UnderParenthesis: "â",
            Union: "â‹ƒ",
            UnionPlus: "âŠŽ",
            Uogon: "Å²",
            uogon: "Å³",
            Uopf: "ð•Œ",
            uopf: "ð•¦",
            UpArrowBar: "â¤’",
            uparrow: "â†‘",
            UpArrow: "â†‘",
            Uparrow: "â‡‘",
            UpArrowDownArrow: "â‡…",
            updownarrow: "â†•",
            UpDownArrow: "â†•",
            Updownarrow: "â‡•",
            UpEquilibrium: "â¥®",
            upharpoonleft: "â†¿",
            upharpoonright: "â†¾",
            uplus: "âŠŽ",
            UpperLeftArrow: "â†–",
            UpperRightArrow: "â†—",
            upsi: "Ï…",
            Upsi: "Ï’",
            upsih: "Ï’",
            Upsilon: "Î¥",
            upsilon: "Ï…",
            UpTeeArrow: "â†¥",
            UpTee: "âŠ¥",
            upuparrows: "â‡ˆ",
            urcorn: "âŒ",
            urcorner: "âŒ",
            urcrop: "âŒŽ",
            Uring: "Å®",
            uring: "Å¯",
            urtri: "â—¹",
            Uscr: "ð’°",
            uscr: "ð“Š",
            utdot: "â‹°",
            Utilde: "Å¨",
            utilde: "Å©",
            utri: "â–µ",
            utrif: "â–´",
            uuarr: "â‡ˆ",
            Uuml: "Ãœ",
            uuml: "Ã¼",
            uwangle: "â¦§",
            vangrt: "â¦œ",
            varepsilon: "Ïµ",
            varkappa: "Ï°",
            varnothing: "âˆ…",
            varphi: "Ï•",
            varpi: "Ï–",
            varpropto: "âˆ",
            varr: "â†•",
            vArr: "â‡•",
            varrho: "Ï±",
            varsigma: "Ï‚",
            varsubsetneq: "âŠŠï¸€",
            varsubsetneqq: "â«‹ï¸€",
            varsupsetneq: "âŠ‹ï¸€",
            varsupsetneqq: "â«Œï¸€",
            vartheta: "Ï‘",
            vartriangleleft: "âŠ²",
            vartriangleright: "âŠ³",
            vBar: "â«¨",
            Vbar: "â««",
            vBarv: "â«©",
            Vcy: "Ð’",
            vcy: "Ð²",
            vdash: "âŠ¢",
            vDash: "âŠ¨",
            Vdash: "âŠ©",
            VDash: "âŠ«",
            Vdashl: "â«¦",
            veebar: "âŠ»",
            vee: "âˆ¨",
            Vee: "â‹",
            veeeq: "â‰š",
            vellip: "â‹®",
            verbar: "|",
            Verbar: "â€–",
            vert: "|",
            Vert: "â€–",
            VerticalBar: "âˆ£",
            VerticalLine: "|",
            VerticalSeparator: "â˜",
            VerticalTilde: "â‰€",
            VeryThinSpace: "â€Š",
            Vfr: "ð”™",
            vfr: "ð”³",
            vltri: "âŠ²",
            vnsub: "âŠ‚âƒ’",
            vnsup: "âŠƒâƒ’",
            Vopf: "ð•",
            vopf: "ð•§",
            vprop: "âˆ",
            vrtri: "âŠ³",
            Vscr: "ð’±",
            vscr: "ð“‹",
            vsubnE: "â«‹ï¸€",
            vsubne: "âŠŠï¸€",
            vsupnE: "â«Œï¸€",
            vsupne: "âŠ‹ï¸€",
            Vvdash: "âŠª",
            vzigzag: "â¦š",
            Wcirc: "Å´",
            wcirc: "Åµ",
            wedbar: "â©Ÿ",
            wedge: "âˆ§",
            Wedge: "â‹€",
            wedgeq: "â‰™",
            weierp: "â„˜",
            Wfr: "ð”š",
            wfr: "ð”´",
            Wopf: "ð•Ž",
            wopf: "ð•¨",
            wp: "â„˜",
            wr: "â‰€",
            wreath: "â‰€",
            Wscr: "ð’²",
            wscr: "ð“Œ",
            xcap: "â‹‚",
            xcirc: "â—¯",
            xcup: "â‹ƒ",
            xdtri: "â–½",
            Xfr: "ð”›",
            xfr: "ð”µ",
            xharr: "âŸ·",
            xhArr: "âŸº",
            Xi: "Îž",
            xi: "Î¾",
            xlarr: "âŸµ",
            xlArr: "âŸ¸",
            xmap: "âŸ¼",
            xnis: "â‹»",
            xodot: "â¨€",
            Xopf: "ð•",
            xopf: "ð•©",
            xoplus: "â¨",
            xotime: "â¨‚",
            xrarr: "âŸ¶",
            xrArr: "âŸ¹",
            Xscr: "ð’³",
            xscr: "ð“",
            xsqcup: "â¨†",
            xuplus: "â¨„",
            xutri: "â–³",
            xvee: "â‹",
            xwedge: "â‹€",
            Yacute: "Ã",
            yacute: "Ã½",
            YAcy: "Ð¯",
            yacy: "Ñ",
            Ycirc: "Å¶",
            ycirc: "Å·",
            Ycy: "Ð«",
            ycy: "Ñ‹",
            yen: "Â¥",
            Yfr: "ð”œ",
            yfr: "ð”¶",
            YIcy: "Ð‡",
            yicy: "Ñ—",
            Yopf: "ð•",
            yopf: "ð•ª",
            Yscr: "ð’´",
            yscr: "ð“Ž",
            YUcy: "Ð®",
            yucy: "ÑŽ",
            yuml: "Ã¿",
            Yuml: "Å¸",
            Zacute: "Å¹",
            zacute: "Åº",
            Zcaron: "Å½",
            zcaron: "Å¾",
            Zcy: "Ð—",
            zcy: "Ð·",
            Zdot: "Å»",
            zdot: "Å¼",
            zeetrf: "â„¨",
            ZeroWidthSpace: "â€‹",
            Zeta: "Î–",
            zeta: "Î¶",
            zfr: "ð”·",
            Zfr: "â„¨",
            ZHcy: "Ð–",
            zhcy: "Ð¶",
            zigrarr: "â‡",
            zopf: "ð•«",
            Zopf: "â„¤",
            Zscr: "ð’µ",
            zscr: "ð“",
            zwj: "â€",
            zwnj: "â€Œ"
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t.replace(i, function(t, e) {
                return e.toUpperCase()
            })
        }
        var i = /-(.)/g;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return i(t.replace(o, "ms-"))
        }
        var i = n(182)
          , o = /^-ms-/;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return !(!t || !e) && (t === e || !i(t) && (i(e) ? r(t, e.parentNode) : "contains"in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
        }
        var i = n(192);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.length;
            if ((Array.isArray(t) || "object" != typeof t && "function" != typeof t) && s(!1),
            "number" != typeof e && s(!1),
            0 === e || e - 1 in t || s(!1),
            "function" == typeof t.callee && s(!1),
            t.hasOwnProperty)
                try {
                    return Array.prototype.slice.call(t)
                } catch (t) {}
            for (var n = Array(e), r = 0; r < e; r++)
                n[r] = t[r];
            return n
        }
        function i(t) {
            return !!t && ("object" == typeof t || "function" == typeof t) && "length"in t && !("setInterval"in t) && "number" != typeof t.nodeType && (Array.isArray(t) || "callee"in t || "item"in t)
        }
        function o(t) {
            return i(t) ? Array.isArray(t) ? t.slice() : r(t) : [t]
        }
        var s = n(1);
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.match(l);
            return e && e[1].toLowerCase()
        }
        function i(t, e) {
            var n = u;
            u || c(!1);
            var i = r(t)
              , o = i && a(i);
            if (o) {
                n.innerHTML = o[1] + t + o[2];
                for (var l = o[0]; l--; )
                    n = n.lastChild
            } else
                n.innerHTML = t;
            var p = n.getElementsByTagName("script");
            p.length && (e || c(!1),
            s(p).forEach(e));
            for (var h = Array.from(n.childNodes); n.lastChild; )
                n.removeChild(n.lastChild);
            return h
        }
        var o = n(7)
          , s = n(185)
          , a = n(187)
          , c = n(1)
          , u = o.canUseDOM ? document.createElement("div") : null
          , l = /^\s*<(\w+)/;
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return s || o(!1),
            h.hasOwnProperty(t) || (t = "*"),
            a.hasOwnProperty(t) || (s.innerHTML = "*" === t ? "<link />" : "<" + t + "></" + t + ">",
            a[t] = !s.firstChild),
            a[t] ? h[t] : null
        }
        var i = n(7)
          , o = n(1)
          , s = i.canUseDOM ? document.createElement("div") : null
          , a = {}
          , c = [1, '<select multiple="true">', "</select>"]
          , u = [1, "<table>", "</table>"]
          , l = [3, "<table><tbody><tr>", "</tr></tbody></table>"]
          , p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"]
          , h = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: c,
            option: c,
            caption: u,
            colgroup: u,
            tbody: u,
            tfoot: u,
            thead: u,
            td: l,
            th: l
        };
        ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"].forEach(function(t) {
            h[t] = p,
            a[t] = !0
        }),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t.Window && t instanceof t.Window ? {
                x: t.pageXOffset || t.document.documentElement.scrollLeft,
                y: t.pageYOffset || t.document.documentElement.scrollTop
            } : {
                x: t.scrollLeft,
                y: t.scrollTop
            }
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t.replace(i, "-$1").toLowerCase()
        }
        var i = /([A-Z])/g;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return i(t).replace(o, "-ms-")
        }
        var i = n(189)
          , o = /^ms-/;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t ? t.ownerDocument || t : document
              , n = e.defaultView || window;
            return !(!t || !("function" == typeof n.Node ? t instanceof n.Node : "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName))
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return i(t) && 3 == t.nodeType
        }
        var i = n(191);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = {};
            return function(n) {
                return e.hasOwnProperty(n) || (e[n] = t.call(this, n)),
                e[n]
            }
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            arguments: !0,
            arity: !0
        }
          , o = "function" == typeof Object.getOwnPropertySymbols;
        t.exports = function(t, e, n) {
            if ("string" != typeof e) {
                var s = Object.getOwnPropertyNames(e);
                o && (s = s.concat(Object.getOwnPropertySymbols(e)));
                for (var a = 0; a < s.length; ++a)
                    if (!(r[s[a]] || i[s[a]] || n && n[s[a]]))
                        try {
                            t[s[a]] = e[s[a]]
                        } catch (t) {}
            }
            return t
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = function(t, e, n, r, i, o, s, a) {
            if (!t) {
                var c;
                if (void 0 === e)
                    c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, i, o, s, a]
                      , l = 0;
                    c = new Error(e.replace(/%s/g, function() {
                        return u[l++]
                    })),
                    c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1,
                c
            }
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        ;
        e.default = function(t, e) {
            return Object.keys(e).reduce(function(n, o) {
                return i({}, n, r({}, o, function(n, r, s) {
                    t(n, r, i({}, e[o], {
                        options: s
                    }))
                }))
            }, {})
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.types = void 0;
        var i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
          , o = n(196)
          , s = r(o)
          , a = n(199)
          , c = r(a)
          , u = n(91)
          , l = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t,
            e
        }(u)
          , p = {
            version: "V1.0",
            lang: "en",
            encoding: "utf-8"
        };
        e.types = l;
        e.default = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t)
                throw new TypeError("expects name.");
            var n = i({}, p, e)
              , r = []
              , o = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "<NULL>"
                  , n = arguments[2];
                return r.push([t, e, n])
            }
              , a = function(t, e, n) {
                return o(t, e, i({}, n, {
                    public: !0
                }))
            }
              , u = {
                rule: {
                    type: l.RULE
                },
                word: {
                    type: l.WORD
                },
                alt: {
                    type: l.ALTERNATIVE
                }
            }
              , h = (0,
            s.default)(o, u)
              , d = (0,
            s.default)(a, u);
            return i({}, h, {
                public: i({}, d),
                rules: function() {
                    return r.concat()
                },
                stringify: function() {
                    return (0,
                    c.default)(n, t, r)
                }
            })
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(t) {
            return ["#JSGF", t.version, t.encoding, t.lang].filter(Boolean).join(" ")
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function i(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
            return Array.from(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(198)
          , s = r(o)
          , a = n(200)
          , c = r(a)
          , u = n(201)
          , l = r(u);
        e.default = function(t, e, n) {
            var r = [];
            return r.push((0,
            s.default)(t)),
            r.push((0,
            c.default)(e)),
            r.push("\n"),
            r.push.apply(r, i((0,
            l.default)(n))),
            r.reduce(function(t, e) {
                return /^\s+$/.test(e) ? "" + t + e : t + (t ? "\n" : "") + e + ";"
            }, "")
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t) {
            return "grammar " + t
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e) {
                var n = []
                  , r = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value),
                    !e || n.length !== e); r = !0)
                        ;
                } catch (t) {
                    i = !0,
                    o = t
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }
            return function(e, n) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , i = n(203)
          , o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i);
        e.default = function(t) {
            return t.map(function(t) {
                var e = r(t, 3)
                  , n = e[0]
                  , i = e[1]
                  , s = e[2]
                  , a = o.default[s.type](n, i, s.options);
                return s.public ? "public " + a : a
            })
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(55)
          , i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
        e.default = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.group
              , o = n.optional
              , s = [];
            if (!Array.isArray(e))
                throw new TypeError("expects Array for group rules.");
            return r && s.push(o ? "[" : "("),
            e = e.map(function(t) {
                return Array.isArray(t) ? "/" + t[1] + "/ " + t[0] : t
            }),
            s.push(e.join(" | ")),
            r && s.push(o ? "]" : ")"),
            (0,
            i.default)(t, s.join(" "))
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(91), a = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t,
            e
        }(s), c = n(55), u = r(c), l = n(204), p = r(l), h = n(202), d = r(h);
        e.default = (o = {},
        i(o, a.RULE, u.default),
        i(o, a.WORD, p.default),
        i(o, a.ALTERNATIVE, d.default),
        o)
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(55)
          , i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
        e.default = function(t, e) {
            return /\s+/.test(e) && (e = '"' + e + '"'),
            (0,
            i.default)(t, e)
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
                e && Object.keys(e).forEach(function(n) {
                    t[n] = e[n]
                })
            }),
            t
        }
        function i(t) {
            return Object.prototype.toString.call(t)
        }
        function o(t) {
            return "[object String]" === i(t)
        }
        function s(t) {
            return "[object Object]" === i(t)
        }
        function a(t) {
            return "[object RegExp]" === i(t)
        }
        function c(t) {
            return "[object Function]" === i(t)
        }
        function u(t) {
            return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }
        function l(t) {
            return Object.keys(t || {}).reduce(function(t, e) {
                return t || v.hasOwnProperty(e)
            }, !1)
        }
        function p(t) {
            t.__index__ = -1,
            t.__text_cache__ = ""
        }
        function h(t) {
            return function(e, n) {
                var r = e.slice(n);
                return t.test(r) ? r.match(t)[0].length : 0
            }
        }
        function d() {
            return function(t, e) {
                e.normalize(t)
            }
        }
        function f(t) {
            function e(t) {
                return t.replace("%TLDS%", i.src_tlds)
            }
            function r(t, e) {
                throw new Error('(LinkifyIt) Invalid schema "' + t + '": ' + e)
            }
            var i = t.re = n(206)(t.__opts__)
              , l = t.__tlds__.slice();
            t.onCompile(),
            t.__tlds_replaced__ || l.push(_),
            l.push(i.src_xn),
            i.src_tlds = l.join("|"),
            i.email_fuzzy = RegExp(e(i.tpl_email_fuzzy), "i"),
            i.link_fuzzy = RegExp(e(i.tpl_link_fuzzy), "i"),
            i.link_no_ip_fuzzy = RegExp(e(i.tpl_link_no_ip_fuzzy), "i"),
            i.host_fuzzy_test = RegExp(e(i.tpl_host_fuzzy_test), "i");
            var f = [];
            t.__compiled__ = {},
            Object.keys(t.__schemas__).forEach(function(e) {
                var n = t.__schemas__[e];
                if (null !== n) {
                    var i = {
                        validate: null,
                        link: null
                    };
                    return t.__compiled__[e] = i,
                    s(n) ? (a(n.validate) ? i.validate = h(n.validate) : c(n.validate) ? i.validate = n.validate : r(e, n),
                    void (c(n.normalize) ? i.normalize = n.normalize : n.normalize ? r(e, n) : i.normalize = d())) : o(n) ? void f.push(e) : void r(e, n)
                }
            }),
            f.forEach(function(e) {
                t.__compiled__[t.__schemas__[e]] && (t.__compiled__[e].validate = t.__compiled__[t.__schemas__[e]].validate,
                t.__compiled__[e].normalize = t.__compiled__[t.__schemas__[e]].normalize)
            }),
            t.__compiled__[""] = {
                validate: null,
                normalize: d()
            };
            var m = Object.keys(t.__compiled__).filter(function(e) {
                return e.length > 0 && t.__compiled__[e]
            }).map(u).join("|");
            t.re.schema_test = RegExp("(^|(?!_)(?:[><ï½œ]|" + i.src_ZPCc + "))(" + m + ")", "i"),
            t.re.schema_search = RegExp("(^|(?!_)(?:[><ï½œ]|" + i.src_ZPCc + "))(" + m + ")", "ig"),
            t.re.pretest = RegExp("(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@", "i"),
            p(t)
        }
        function m(t, e) {
            var n = t.__index__
              , r = t.__last_index__
              , i = t.__text_cache__.slice(n, r);
            this.schema = t.__schema__.toLowerCase(),
            this.index = n + e,
            this.lastIndex = r + e,
            this.raw = i,
            this.text = i,
            this.url = i
        }
        function g(t, e) {
            var n = new m(t,e);
            return t.__compiled__[n.schema].normalize(n, t),
            n
        }
        function y(t, e) {
            if (!(this instanceof y))
                return new y(t,e);
            e || l(t) && (e = t,
            t = {}),
            this.__opts__ = r({}, v, e),
            this.__index__ = -1,
            this.__last_index__ = -1,
            this.__schema__ = "",
            this.__text_cache__ = "",
            this.__schemas__ = r({}, b, t),
            this.__compiled__ = {},
            this.__tlds__ = C,
            this.__tlds_replaced__ = !1,
            this.re = {},
            f(this)
        }
        var v = {
            fuzzyLink: !0,
            fuzzyEmail: !0,
            fuzzyIP: !1
        }
          , b = {
            "http:": {
                validate: function(t, e, n) {
                    var r = t.slice(e);
                    return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,"i")),
                    n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
                }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
                validate: function(t, e, n) {
                    var r = t.slice(e);
                    return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,"i")),
                    n.re.no_http.test(r) ? e >= 3 && ":" === t[e - 3] ? 0 : e >= 3 && "/" === t[e - 3] ? 0 : r.match(n.re.no_http)[0].length : 0
                }
            },
            "mailto:": {
                validate: function(t, e, n) {
                    var r = t.slice(e);
                    return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict,"i")),
                    n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
                }
            }
        }
          , _ = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"
          , C = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|Ñ€Ñ„".split("|");
        y.prototype.add = function(t, e) {
            return this.__schemas__[t] = e,
            f(this),
            this
        }
        ,
        y.prototype.set = function(t) {
            return this.__opts__ = r(this.__opts__, t),
            this
        }
        ,
        y.prototype.test = function(t) {
            if (this.__text_cache__ = t,
            this.__index__ = -1,
            !t.length)
                return !1;
            var e, n, r, i, o, s, a, c;
            if (this.re.schema_test.test(t))
                for (a = this.re.schema_search,
                a.lastIndex = 0; null !== (e = a.exec(t)); )
                    if (i = this.testSchemaAt(t, e[2], a.lastIndex)) {
                        this.__schema__ = e[2],
                        this.__index__ = e.index + e[1].length,
                        this.__last_index__ = e.index + e[0].length + i;
                        break
                    }
            return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = n.index + n[1].length,
            (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "",
            this.__index__ = o,
            this.__last_index__ = n.index + n[0].length)),
            this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && t.indexOf("@") >= 0 && null !== (r = t.match(this.re.email_fuzzy)) && (o = r.index + r[1].length,
            s = r.index + r[0].length,
            (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:",
            this.__index__ = o,
            this.__last_index__ = s)),
            this.__index__ >= 0
        }
        ,
        y.prototype.pretest = function(t) {
            return this.re.pretest.test(t)
        }
        ,
        y.prototype.testSchemaAt = function(t, e, n) {
            return this.__compiled__[e.toLowerCase()] ? this.__compiled__[e.toLowerCase()].validate(t, n, this) : 0
        }
        ,
        y.prototype.match = function(t) {
            var e = 0
              , n = [];
            this.__index__ >= 0 && this.__text_cache__ === t && (n.push(g(this, e)),
            e = this.__last_index__);
            for (var r = e ? t.slice(e) : t; this.test(r); )
                n.push(g(this, e)),
                r = r.slice(this.__last_index__),
                e += this.__last_index__;
            return n.length ? n : null
        }
        ,
        y.prototype.tlds = function(t, e) {
            return t = Array.isArray(t) ? t : [t],
            e ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(t, e, n) {
                return t !== n[e - 1]
            }).reverse(),
            f(this),
            this) : (this.__tlds__ = t.slice(),
            this.__tlds_replaced__ = !0,
            f(this),
            this)
        }
        ,
        y.prototype.normalize = function(t) {
            t.schema || (t.url = "http://" + t.url),
            "mailto:" !== t.schema || /^mailto:/i.test(t.url) || (t.url = "mailto:" + t.url)
        }
        ,
        y.prototype.onCompile = function() {}
        ,
        t.exports = y
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = {};
            e.src_Any = n(161).source,
            e.src_Cc = n(159).source,
            e.src_Z = n(160).source,
            e.src_P = n(84).source,
            e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"),
            e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
            return e.src_pseudo_letter = "(?:(?![><ï½œ]|" + e.src_ZPCc + ")" + e.src_Any + ")",
            e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?",
            e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
            e.src_host_terminator = "(?=$|[><ï½œ]|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))",
            e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|[><ï½œ]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + e.src_ZCc + ").|\\!(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?",
            e.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',
            e.src_xn = "xn--[a-z0-9\\-]{1,59}",
            e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})",
            e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-(?!-)|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))",
            e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))",
            e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))",
            e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))",
            e.src_host_strict = e.src_host + e.src_host_terminator,
            e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator,
            e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator,
            e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator,
            e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator,
            e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))",
            e.tpl_email_fuzzy = "(^|[><ï½œ]|\\(|" + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")",
            e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|ï½œ]|" + e.src_ZPCc + "))((?![$+<=>^`|ï½œ])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")",
            e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|ï½œ]|" + e.src_ZPCc + "))((?![$+<=>^`|ï½œ])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")",
            e
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return null == t ? void 0 === t ? c : a : u && u in Object(t) ? n.i(o.a)(t) : n.i(s.a)(t)
        }
        var i = n(92)
          , o = n(210)
          , s = n(211)
          , a = "[object Null]"
          , c = "[object Undefined]"
          , u = i.a ? i.a.toStringTag : void 0;
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.a = n
        }
        ).call(e, n(37))
    }
    , function(t, e, n) {
        "use strict";
        var r = n(212)
          , i = n.i(r.a)(Object.getPrototypeOf, Object);
        e.a = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = s.call(t, c)
              , n = t[c];
            try {
                t[c] = void 0;
                var r = !0
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? t[c] = n : delete t[c]),
            i
        }
        var i = n(92)
          , o = Object.prototype
          , s = o.hasOwnProperty
          , a = o.toString
          , c = i.a ? i.a.toStringTag : void 0;
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return o.call(t)
        }
        var i = Object.prototype
          , o = i.toString;
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return function(n) {
                return t(e(n))
            }
        }
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(208)
          , i = "object" == typeof self && self && self.Object === Object && self
          , o = r.a || i || Function("return this")();
        e.a = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return null != t && "object" == typeof t
        }
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        t.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
    }
    , function(t, e, n) {
        "use strict";
        e.parseLinkLabel = n(218),
        e.parseLinkDestination = n(217),
        e.parseLinkTitle = n(219)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).isSpace
          , i = n(2).unescapeAll;
        t.exports = function(t, e, n) {
            var o, s, a = e, c = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (60 === t.charCodeAt(e)) {
                for (e++; e < n; ) {
                    if (10 === (o = t.charCodeAt(e)) || r(o))
                        return c;
                    if (62 === o)
                        return c.pos = e + 1,
                        c.str = i(t.slice(a + 1, e)),
                        c.ok = !0,
                        c;
                    92 === o && e + 1 < n ? e += 2 : e++
                }
                return c
            }
            for (s = 0; e < n && 32 !== (o = t.charCodeAt(e)) && !(o < 32 || 127 === o); )
                if (92 === o && e + 1 < n)
                    e += 2;
                else {
                    if (40 === o && ++s > 1)
                        break;
                    if (41 === o && --s < 0)
                        break;
                    e++
                }
            return a === e ? c : (c.str = i(t.slice(a, e)),
            c.lines = 0,
            c.pos = e,
            c.ok = !0,
            c)
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n) {
            var r, i, o, s, a = -1, c = t.posMax, u = t.pos;
            for (t.pos = e + 1,
            r = 1; t.pos < c; ) {
                if (93 === (o = t.src.charCodeAt(t.pos)) && 0 === --r) {
                    i = !0;
                    break
                }
                if (s = t.pos,
                t.md.inline.skipToken(t),
                91 === o)
                    if (s === t.pos - 1)
                        r++;
                    else if (n)
                        return t.pos = u,
                        -1
            }
            return i && (a = t.pos),
            t.pos = u,
            a
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).unescapeAll;
        t.exports = function(t, e, n) {
            var i, o, s = 0, a = e, c = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (e >= n)
                return c;
            if (34 !== (o = t.charCodeAt(e)) && 39 !== o && 40 !== o)
                return c;
            for (e++,
            40 === o && (o = 41); e < n; ) {
                if ((i = t.charCodeAt(e)) === o)
                    return c.pos = e + 1,
                    c.lines = s,
                    c.str = r(t.slice(a + 1, e)),
                    c.ok = !0,
                    c;
                10 === i ? s++ : 92 === i && e + 1 < n && (e++,
                10 === t.charCodeAt(e) && s++),
                e++
            }
            return c
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.trim().toLowerCase();
            return !y.test(e) || !!v.test(e)
        }
        function i(t) {
            var e = f.parse(t, !0);
            if (e.hostname && (!e.protocol || b.indexOf(e.protocol) >= 0))
                try {
                    e.hostname = m.toASCII(e.hostname)
                } catch (t) {}
            return f.encode(f.format(e))
        }
        function o(t) {
            var e = f.parse(t, !0);
            if (e.hostname && (!e.protocol || b.indexOf(e.protocol) >= 0))
                try {
                    e.hostname = m.toUnicode(e.hostname)
                } catch (t) {}
            return f.decode(f.format(e))
        }
        function s(t, e) {
            if (!(this instanceof s))
                return new s(t,e);
            e || a.isString(t) || (e = t || {},
            t = "default"),
            this.inline = new h,
            this.block = new p,
            this.core = new l,
            this.renderer = new u,
            this.linkify = new d,
            this.validateLink = r,
            this.normalizeLink = i,
            this.normalizeLinkText = o,
            this.utils = a,
            this.helpers = a.assign({}, c),
            this.options = {},
            this.configure(t),
            e && this.set(e)
        }
        var a = n(2)
          , c = n(216)
          , u = n(227)
          , l = n(222)
          , p = n(221)
          , h = n(223)
          , d = n(205)
          , f = n(98)
          , m = n(266)
          , g = {
            default: n(225),
            zero: n(226),
            commonmark: n(224)
        }
          , y = /^(vbscript|javascript|file|data):/
          , v = /^data:image\/(gif|png|jpeg|webp);/
          , b = ["http:", "https:", "mailto:"];
        s.prototype.set = function(t) {
            return a.assign(this.options, t),
            this
        }
        ,
        s.prototype.configure = function(t) {
            var e, n = this;
            if (a.isString(t) && (e = t,
            !(t = g[e])))
                throw new Error('Wrong `markdown-it` preset "' + e + '", check name');
            if (!t)
                throw new Error("Wrong `markdown-it` preset, can't be empty");
            return t.options && n.set(t.options),
            t.components && Object.keys(t.components).forEach(function(e) {
                t.components[e].rules && n[e].ruler.enableOnly(t.components[e].rules),
                t.components[e].rules2 && n[e].ruler2.enableOnly(t.components[e].rules2)
            }),
            this
        }
        ,
        s.prototype.enable = function(t, e) {
            var n = [];
            Array.isArray(t) || (t = [t]),
            ["core", "block", "inline"].forEach(function(e) {
                n = n.concat(this[e].ruler.enable(t, !0))
            }, this),
            n = n.concat(this.inline.ruler2.enable(t, !0));
            var r = t.filter(function(t) {
                return n.indexOf(t) < 0
            });
            if (r.length && !e)
                throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
            return this
        }
        ,
        s.prototype.disable = function(t, e) {
            var n = [];
            Array.isArray(t) || (t = [t]),
            ["core", "block", "inline"].forEach(function(e) {
                n = n.concat(this[e].ruler.disable(t, !0))
            }, this),
            n = n.concat(this.inline.ruler2.disable(t, !0));
            var r = t.filter(function(t) {
                return n.indexOf(t) < 0
            });
            if (r.length && !e)
                throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
            return this
        }
        ,
        s.prototype.use = function(t) {
            var e = [this].concat(Array.prototype.slice.call(arguments, 1));
            return t.apply(t, e),
            this
        }
        ,
        s.prototype.parse = function(t, e) {
            if ("string" != typeof t)
                throw new Error("Input data should be a String");
            var n = new this.core.State(t,this,e);
            return this.core.process(n),
            n.tokens
        }
        ,
        s.prototype.render = function(t, e) {
            return e = e || {},
            this.renderer.render(this.parse(t, e), this.options, e)
        }
        ,
        s.prototype.parseInline = function(t, e) {
            var n = new this.core.State(t,this,e);
            return n.inlineMode = !0,
            this.core.process(n),
            n.tokens
        }
        ,
        s.prototype.renderInline = function(t, e) {
            return e = e || {},
            this.renderer.render(this.parseInline(t, e), this.options, e)
        }
        ,
        t.exports = s
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            this.ruler = new i;
            for (var t = 0; t < o.length; t++)
                this.ruler.push(o[t][0], o[t][1], {
                    alt: (o[t][2] || []).slice()
                })
        }
        var i = n(57)
          , o = [["table", n(239), ["paragraph", "reference"]], ["code", n(229)], ["fence", n(230), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", n(228), ["paragraph", "reference", "list"]], ["hr", n(232), ["paragraph", "reference", "blockquote", "list"]], ["list", n(235), ["paragraph", "reference", "blockquote"]], ["reference", n(237)], ["heading", n(231), ["paragraph", "reference", "blockquote"]], ["lheading", n(234)], ["html_block", n(233), ["paragraph", "reference", "blockquote"]], ["paragraph", n(236)]];
        r.prototype.tokenize = function(t, e, n) {
            for (var r, i = this.ruler.getRules(""), o = i.length, s = e, a = !1, c = t.md.options.maxNesting; s < n && (t.line = s = t.skipEmptyLines(s),
            !(s >= n)) && !(t.sCount[s] < t.blkIndent); ) {
                if (t.level >= c) {
                    t.line = n;
                    break
                }
                for (r = 0; r < o && !i[r](t, s, n, !1); r++)
                    ;
                t.tight = !a,
                t.isEmpty(t.line - 1) && (a = !0),
                (s = t.line) < n && t.isEmpty(s) && (a = !0,
                s++,
                t.line = s)
            }
        }
        ,
        r.prototype.parse = function(t, e, n, r) {
            var i;
            t && (i = new this.State(t,e,n,r),
            this.tokenize(i, i.line, i.lineMax))
        }
        ,
        r.prototype.State = n(238),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            this.ruler = new i;
            for (var t = 0; t < o.length; t++)
                this.ruler.push(o[t][0], o[t][1])
        }
        var i = n(57)
          , o = [["normalize", n(243)], ["block", n(240)], ["inline", n(241)], ["linkify", n(242)], ["replacements", n(244)], ["smartquotes", n(245)]];
        r.prototype.process = function(t) {
            var e, n, r;
            for (r = this.ruler.getRules(""),
            e = 0,
            n = r.length; e < n; e++)
                r[e](t)
        }
        ,
        r.prototype.State = n(246),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            var t;
            for (this.ruler = new i,
            t = 0; t < o.length; t++)
                this.ruler.push(o[t][0], o[t][1]);
            for (this.ruler2 = new i,
            t = 0; t < s.length; t++)
                this.ruler2.push(s[t][0], s[t][1])
        }
        var i = n(57)
          , o = [["text", n(257)], ["newline", n(255)], ["escape", n(251)], ["backticks", n(248)], ["strikethrough", n(97).tokenize], ["emphasis", n(96).tokenize], ["link", n(254)], ["image", n(253)], ["autolink", n(247)], ["html_inline", n(252)], ["entity", n(250)]]
          , s = [["balance_pairs", n(249)], ["strikethrough", n(97).postProcess], ["emphasis", n(96).postProcess], ["text_collapse", n(258)]];
        r.prototype.skipToken = function(t) {
            var e, n, r = t.pos, i = this.ruler.getRules(""), o = i.length, s = t.md.options.maxNesting, a = t.cache;
            if (void 0 !== a[r])
                return void (t.pos = a[r]);
            if (t.level < s)
                for (n = 0; n < o && (t.level++,
                e = i[n](t, !0),
                t.level--,
                !e); n++)
                    ;
            else
                t.pos = t.posMax;
            e || t.pos++,
            a[r] = t.pos
        }
        ,
        r.prototype.tokenize = function(t) {
            for (var e, n, r = this.ruler.getRules(""), i = r.length, o = t.posMax, s = t.md.options.maxNesting; t.pos < o; ) {
                if (t.level < s)
                    for (n = 0; n < i && !(e = r[n](t, !1)); n++)
                        ;
                if (e) {
                    if (t.pos >= o)
                        break
                } else
                    t.pending += t.src[t.pos++]
            }
            t.pending && t.pushPending()
        }
        ,
        r.prototype.parse = function(t, e, n, r) {
            var i, o, s, a = new this.State(t,e,n,r);
            for (this.tokenize(a),
            o = this.ruler2.getRules(""),
            s = o.length,
            i = 0; i < s; i++)
                o[i](a)
        }
        ,
        r.prototype.State = n(256),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        t.exports = {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "â€œâ€â€˜â€™",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["normalize", "block", "inline"]
                },
                block: {
                    rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
                },
                inline: {
                    rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                    rules2: ["balance_pairs", "emphasis", "text_collapse"]
                }
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "â€œâ€â€˜â€™",
                highlight: null,
                maxNesting: 100
            },
            components: {
                core: {},
                block: {},
                inline: {}
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "â€œâ€â€˜â€™",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["normalize", "block", "inline"]
                },
                block: {
                    rules: ["paragraph"]
                },
                inline: {
                    rules: ["text"],
                    rules2: ["balance_pairs", "text_collapse"]
                }
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            this.rules = i({}, a)
        }
        var i = n(2).assign
          , o = n(2).unescapeAll
          , s = n(2).escapeHtml
          , a = {};
        a.code_inline = function(t, e, n, r, i) {
            var o = t[e];
            return "<code" + i.renderAttrs(o) + ">" + s(t[e].content) + "</code>"
        }
        ,
        a.code_block = function(t, e, n, r, i) {
            var o = t[e];
            return "<pre" + i.renderAttrs(o) + "><code>" + s(t[e].content) + "</code></pre>\n"
        }
        ,
        a.fence = function(t, e, n, r, i) {
            var a, c, u, l, p = t[e], h = p.info ? o(p.info).trim() : "", d = "";
            return h && (d = h.split(/\s+/g)[0]),
            a = n.highlight ? n.highlight(p.content, d) || s(p.content) : s(p.content),
            0 === a.indexOf("<pre") ? a + "\n" : h ? (c = p.attrIndex("class"),
            u = p.attrs ? p.attrs.slice() : [],
            c < 0 ? u.push(["class", n.langPrefix + d]) : u[c][1] += " " + n.langPrefix + d,
            l = {
                attrs: u
            },
            "<pre><code" + i.renderAttrs(l) + ">" + a + "</code></pre>\n") : "<pre><code" + i.renderAttrs(p) + ">" + a + "</code></pre>\n"
        }
        ,
        a.image = function(t, e, n, r, i) {
            var o = t[e];
            return o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, n, r),
            i.renderToken(t, e, n)
        }
        ,
        a.hardbreak = function(t, e, n) {
            return n.xhtmlOut ? "<br />\n" : "<br>\n"
        }
        ,
        a.softbreak = function(t, e, n) {
            return n.breaks ? n.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
        }
        ,
        a.text = function(t, e) {
            return s(t[e].content)
        }
        ,
        a.html_block = function(t, e) {
            return t[e].content
        }
        ,
        a.html_inline = function(t, e) {
            return t[e].content
        }
        ,
        r.prototype.renderAttrs = function(t) {
            var e, n, r;
            if (!t.attrs)
                return "";
            for (r = "",
            e = 0,
            n = t.attrs.length; e < n; e++)
                r += " " + s(t.attrs[e][0]) + '="' + s(t.attrs[e][1]) + '"';
            return r
        }
        ,
        r.prototype.renderToken = function(t, e, n) {
            var r, i = "", o = !1, s = t[e];
            return s.hidden ? "" : (s.block && -1 !== s.nesting && e && t[e - 1].hidden && (i += "\n"),
            i += (-1 === s.nesting ? "</" : "<") + s.tag,
            i += this.renderAttrs(s),
            0 === s.nesting && n.xhtmlOut && (i += " /"),
            s.block && (o = !0,
            1 === s.nesting && e + 1 < t.length && (r = t[e + 1],
            "inline" === r.type || r.hidden ? o = !1 : -1 === r.nesting && r.tag === s.tag && (o = !1))),
            i += o ? ">\n" : ">")
        }
        ,
        r.prototype.renderInline = function(t, e, n) {
            for (var r, i = "", o = this.rules, s = 0, a = t.length; s < a; s++)
                r = t[s].type,
                void 0 !== o[r] ? i += o[r](t, s, e, n, this) : i += this.renderToken(t, s, e);
            return i
        }
        ,
        r.prototype.renderInlineAsText = function(t, e, n) {
            for (var r = "", i = 0, o = t.length; i < o; i++)
                "text" === t[i].type ? r += t[i].content : "image" === t[i].type && (r += this.renderInlineAsText(t[i].children, e, n));
            return r
        }
        ,
        r.prototype.render = function(t, e, n) {
            var r, i, o, s = "", a = this.rules;
            for (r = 0,
            i = t.length; r < i; r++)
                o = t[r].type,
                "inline" === o ? s += this.renderInline(t[r].children, e, n) : void 0 !== a[o] ? s += a[t[r].type](t, r, e, n, this) : s += this.renderToken(t, r, e, n);
            return s
        }
        ,
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).isSpace;
        t.exports = function(t, e, n, i) {
            var o, s, a, c, u, l, p, h, d, f, m, g, y, v, b, _, C, w, S, x, k = t.lineMax, E = t.bMarks[e] + t.tShift[e], A = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            if (62 !== t.src.charCodeAt(E++))
                return !1;
            if (i)
                return !0;
            for (c = f = t.sCount[e] + E - (t.bMarks[e] + t.tShift[e]),
            32 === t.src.charCodeAt(E) ? (E++,
            c++,
            f++,
            o = !1,
            C = !0) : 9 === t.src.charCodeAt(E) ? (C = !0,
            (t.bsCount[e] + f) % 4 == 3 ? (E++,
            c++,
            f++,
            o = !1) : o = !0) : C = !1,
            m = [t.bMarks[e]],
            t.bMarks[e] = E; E < A && (s = t.src.charCodeAt(E),
            r(s)); )
                9 === s ? f += 4 - (f + t.bsCount[e] + (o ? 1 : 0)) % 4 : f++,
                E++;
            for (g = [t.bsCount[e]],
            t.bsCount[e] = t.sCount[e] + 1 + (C ? 1 : 0),
            p = E >= A,
            b = [t.sCount[e]],
            t.sCount[e] = f - c,
            _ = [t.tShift[e]],
            t.tShift[e] = E - t.bMarks[e],
            S = t.md.block.ruler.getRules("blockquote"),
            v = t.parentType,
            t.parentType = "blockquote",
            d = e + 1; d < n && (u = t.sCount[d] < t.blkIndent,
            E = t.bMarks[d] + t.tShift[d],
            A = t.eMarks[d],
            !(E >= A)); d++)
                if (62 !== t.src.charCodeAt(E++) || u) {
                    if (p)
                        break;
                    for (w = !1,
                    a = 0,
                    l = S.length; a < l; a++)
                        if (S[a](t, d, n, !0)) {
                            w = !0;
                            break
                        }
                    if (w) {
                        t.lineMax = d,
                        0 !== t.blkIndent && (m.push(t.bMarks[d]),
                        g.push(t.bsCount[d]),
                        _.push(t.tShift[d]),
                        b.push(t.sCount[d]),
                        t.sCount[d] -= t.blkIndent);
                        break
                    }
                    if (u)
                        break;
                    m.push(t.bMarks[d]),
                    g.push(t.bsCount[d]),
                    _.push(t.tShift[d]),
                    b.push(t.sCount[d]),
                    t.sCount[d] = -1
                } else {
                    for (c = f = t.sCount[d] + E - (t.bMarks[d] + t.tShift[d]),
                    32 === t.src.charCodeAt(E) ? (E++,
                    c++,
                    f++,
                    o = !1,
                    C = !0) : 9 === t.src.charCodeAt(E) ? (C = !0,
                    (t.bsCount[d] + f) % 4 == 3 ? (E++,
                    c++,
                    f++,
                    o = !1) : o = !0) : C = !1,
                    m.push(t.bMarks[d]),
                    t.bMarks[d] = E; E < A && (s = t.src.charCodeAt(E),
                    r(s)); )
                        9 === s ? f += 4 - (f + t.bsCount[d] + (o ? 1 : 0)) % 4 : f++,
                        E++;
                    p = E >= A,
                    g.push(t.bsCount[d]),
                    t.bsCount[d] = t.sCount[d] + 1 + (C ? 1 : 0),
                    b.push(t.sCount[d]),
                    t.sCount[d] = f - c,
                    _.push(t.tShift[d]),
                    t.tShift[d] = E - t.bMarks[d]
                }
            for (y = t.blkIndent,
            t.blkIndent = 0,
            x = t.push("blockquote_open", "blockquote", 1),
            x.markup = ">",
            x.map = h = [e, 0],
            t.md.block.tokenize(t, e, d),
            x = t.push("blockquote_close", "blockquote", -1),
            x.markup = ">",
            t.lineMax = k,
            t.parentType = v,
            h[1] = t.line,
            a = 0; a < _.length; a++)
                t.bMarks[a + e] = m[a],
                t.tShift[a + e] = _[a],
                t.sCount[a + e] = b[a],
                t.bsCount[a + e] = g[a];
            return t.blkIndent = y,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n) {
            var r, i, o;
            if (t.sCount[e] - t.blkIndent < 4)
                return !1;
            for (i = r = e + 1; r < n; )
                if (t.isEmpty(r))
                    r++;
                else {
                    if (!(t.sCount[r] - t.blkIndent >= 4))
                        break;
                    r++,
                    i = r
                }
            return t.line = i,
            o = t.push("code_block", "code", 0),
            o.content = t.getLines(e, i, 4 + t.blkIndent, !0),
            o.map = [e, t.line],
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n, r) {
            var i, o, s, a, c, u, l, p = !1, h = t.bMarks[e] + t.tShift[e], d = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            if (h + 3 > d)
                return !1;
            if (126 !== (i = t.src.charCodeAt(h)) && 96 !== i)
                return !1;
            if (c = h,
            h = t.skipChars(h, i),
            (o = h - c) < 3)
                return !1;
            if (l = t.src.slice(c, h),
            s = t.src.slice(h, d),
            s.indexOf(String.fromCharCode(i)) >= 0)
                return !1;
            if (r)
                return !0;
            for (a = e; !(++a >= n) && (h = c = t.bMarks[a] + t.tShift[a],
            d = t.eMarks[a],
            !(h < d && t.sCount[a] < t.blkIndent)); )
                if (t.src.charCodeAt(h) === i && !(t.sCount[a] - t.blkIndent >= 4 || (h = t.skipChars(h, i)) - c < o || (h = t.skipSpaces(h)) < d)) {
                    p = !0;
                    break
                }
            return o = t.sCount[e],
            t.line = a + (p ? 1 : 0),
            u = t.push("fence", "code", 0),
            u.info = s,
            u.content = t.getLines(e + 1, a, o, !0),
            u.markup = l,
            u.map = [e, t.line],
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).isSpace;
        t.exports = function(t, e, n, i) {
            var o, s, a, c, u = t.bMarks[e] + t.tShift[e], l = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            if (35 !== (o = t.src.charCodeAt(u)) || u >= l)
                return !1;
            for (s = 1,
            o = t.src.charCodeAt(++u); 35 === o && u < l && s <= 6; )
                s++,
                o = t.src.charCodeAt(++u);
            return !(s > 6 || u < l && !r(o)) && (!!i || (l = t.skipSpacesBack(l, u),
            a = t.skipCharsBack(l, 35, u),
            a > u && r(t.src.charCodeAt(a - 1)) && (l = a),
            t.line = e + 1,
            c = t.push("heading_open", "h" + String(s), 1),
            c.markup = "########".slice(0, s),
            c.map = [e, t.line],
            c = t.push("inline", "", 0),
            c.content = t.src.slice(u, l).trim(),
            c.map = [e, t.line],
            c.children = [],
            c = t.push("heading_close", "h" + String(s), -1),
            c.markup = "########".slice(0, s),
            !0))
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).isSpace;
        t.exports = function(t, e, n, i) {
            var o, s, a, c, u = t.bMarks[e] + t.tShift[e], l = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            if (42 !== (o = t.src.charCodeAt(u++)) && 45 !== o && 95 !== o)
                return !1;
            for (s = 1; u < l; ) {
                if ((a = t.src.charCodeAt(u++)) !== o && !r(a))
                    return !1;
                a === o && s++
            }
            return !(s < 3) && (!!i || (t.line = e + 1,
            c = t.push("hr", "hr", 0),
            c.map = [e, t.line],
            c.markup = Array(s + 1).join(String.fromCharCode(o)),
            !0))
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(215)
          , i = n(95).HTML_OPEN_CLOSE_TAG_RE
          , o = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [new RegExp("^</?(" + r.join("|") + ")(?=(\\s|/?>|$))","i"), /^$/, !0], [new RegExp(i.source + "\\s*$"), /^$/, !1]];
        t.exports = function(t, e, n, r) {
            var i, s, a, c, u = t.bMarks[e] + t.tShift[e], l = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            if (!t.md.options.html)
                return !1;
            if (60 !== t.src.charCodeAt(u))
                return !1;
            for (c = t.src.slice(u, l),
            i = 0; i < o.length && !o[i][0].test(c); i++)
                ;
            if (i === o.length)
                return !1;
            if (r)
                return o[i][2];
            if (s = e + 1,
            !o[i][1].test(c))
                for (; s < n && !(t.sCount[s] < t.blkIndent); s++)
                    if (u = t.bMarks[s] + t.tShift[s],
                    l = t.eMarks[s],
                    c = t.src.slice(u, l),
                    o[i][1].test(c)) {
                        0 !== c.length && s++;
                        break
                    }
            return t.line = s,
            a = t.push("html_block", "", 0),
            a.map = [e, s],
            a.content = t.getLines(e, s, t.blkIndent, !0),
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n) {
            var r, i, o, s, a, c, u, l, p, h, d = e + 1, f = t.md.block.ruler.getRules("paragraph");
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            for (h = t.parentType,
            t.parentType = "paragraph"; d < n && !t.isEmpty(d); d++)
                if (!(t.sCount[d] - t.blkIndent > 3)) {
                    if (t.sCount[d] >= t.blkIndent && (c = t.bMarks[d] + t.tShift[d],
                    u = t.eMarks[d],
                    c < u && (45 === (p = t.src.charCodeAt(c)) || 61 === p) && (c = t.skipChars(c, p),
                    (c = t.skipSpaces(c)) >= u))) {
                        l = 61 === p ? 1 : 2;
                        break
                    }
                    if (!(t.sCount[d] < 0)) {
                        for (i = !1,
                        o = 0,
                        s = f.length; o < s; o++)
                            if (f[o](t, d, n, !0)) {
                                i = !0;
                                break
                            }
                        if (i)
                            break
                    }
                }
            return !!l && (r = t.getLines(e, d, t.blkIndent, !1).trim(),
            t.line = d + 1,
            a = t.push("heading_open", "h" + String(l), 1),
            a.markup = String.fromCharCode(p),
            a.map = [e, t.line],
            a = t.push("inline", "", 0),
            a.content = r,
            a.map = [e, t.line - 1],
            a.children = [],
            a = t.push("heading_close", "h" + String(l), -1),
            a.markup = String.fromCharCode(p),
            t.parentType = h,
            !0)
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n, r, i, o;
            return r = t.bMarks[e] + t.tShift[e],
            i = t.eMarks[e],
            n = t.src.charCodeAt(r++),
            42 !== n && 45 !== n && 43 !== n ? -1 : r < i && (o = t.src.charCodeAt(r),
            !s(o)) ? -1 : r
        }
        function i(t, e) {
            var n, r = t.bMarks[e] + t.tShift[e], i = r, o = t.eMarks[e];
            if (i + 1 >= o)
                return -1;
            if ((n = t.src.charCodeAt(i++)) < 48 || n > 57)
                return -1;
            for (; ; ) {
                if (i >= o)
                    return -1;
                n = t.src.charCodeAt(i++);
                {
                    if (!(n >= 48 && n <= 57)) {
                        if (41 === n || 46 === n)
                            break;
                        return -1
                    }
                    if (i - r >= 10)
                        return -1
                }
            }
            return i < o && (n = t.src.charCodeAt(i),
            !s(n)) ? -1 : i
        }
        function o(t, e) {
            var n, r, i = t.level + 2;
            for (n = e + 2,
            r = t.tokens.length - 2; n < r; n++)
                t.tokens[n].level === i && "paragraph_open" === t.tokens[n].type && (t.tokens[n + 2].hidden = !0,
                t.tokens[n].hidden = !0,
                n += 2)
        }
        var s = n(2).isSpace;
        t.exports = function(t, e, n, a) {
            var c, u, l, p, h, d, f, m, g, y, v, b, _, C, w, S, x, k, E, A, T, O, I, P, D, M, N, R, L = !1, j = !0;
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            if (a && "paragraph" === t.parentType && t.tShift[e] >= t.blkIndent && (L = !0),
            (I = i(t, e)) >= 0) {
                if (f = !0,
                D = t.bMarks[e] + t.tShift[e],
                _ = Number(t.src.substr(D, I - D - 1)),
                L && 1 !== _)
                    return !1
            } else {
                if (!((I = r(t, e)) >= 0))
                    return !1;
                f = !1
            }
            if (L && t.skipSpaces(I) >= t.eMarks[e])
                return !1;
            if (b = t.src.charCodeAt(I - 1),
            a)
                return !0;
            for (v = t.tokens.length,
            f ? (R = t.push("ordered_list_open", "ol", 1),
            1 !== _ && (R.attrs = [["start", _]])) : R = t.push("bullet_list_open", "ul", 1),
            R.map = y = [e, 0],
            R.markup = String.fromCharCode(b),
            w = e,
            P = !1,
            N = t.md.block.ruler.getRules("list"),
            E = t.parentType,
            t.parentType = "list"; w < n; ) {
                for (O = I,
                C = t.eMarks[w],
                d = S = t.sCount[w] + I - (t.bMarks[e] + t.tShift[e]); O < C && (c = t.src.charCodeAt(O),
                s(c)); )
                    9 === c ? S += 4 - (S + t.bsCount[w]) % 4 : S++,
                    O++;
                if (u = O,
                h = u >= C ? 1 : S - d,
                h > 4 && (h = 1),
                p = d + h,
                R = t.push("list_item_open", "li", 1),
                R.markup = String.fromCharCode(b),
                R.map = m = [e, 0],
                x = t.blkIndent,
                T = t.tight,
                A = t.tShift[e],
                k = t.sCount[e],
                t.blkIndent = p,
                t.tight = !0,
                t.tShift[e] = u - t.bMarks[e],
                t.sCount[e] = S,
                u >= C && t.isEmpty(e + 1) ? t.line = Math.min(t.line + 2, n) : t.md.block.tokenize(t, e, n, !0),
                t.tight && !P || (j = !1),
                P = t.line - e > 1 && t.isEmpty(t.line - 1),
                t.blkIndent = x,
                t.tShift[e] = A,
                t.sCount[e] = k,
                t.tight = T,
                R = t.push("list_item_close", "li", -1),
                R.markup = String.fromCharCode(b),
                w = e = t.line,
                m[1] = w,
                u = t.bMarks[e],
                w >= n)
                    break;
                if (t.sCount[w] < t.blkIndent)
                    break;
                for (M = !1,
                l = 0,
                g = N.length; l < g; l++)
                    if (N[l](t, w, n, !0)) {
                        M = !0;
                        break
                    }
                if (M)
                    break;
                if (f) {
                    if ((I = i(t, w)) < 0)
                        break
                } else if ((I = r(t, w)) < 0)
                    break;
                if (b !== t.src.charCodeAt(I - 1))
                    break
            }
            return R = f ? t.push("ordered_list_close", "ol", -1) : t.push("bullet_list_close", "ul", -1),
            R.markup = String.fromCharCode(b),
            y[1] = w,
            t.line = w,
            t.parentType = E,
            j && o(t, v),
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            var n, r, i, o, s, a, c = e + 1, u = t.md.block.ruler.getRules("paragraph"), l = t.lineMax;
            for (a = t.parentType,
            t.parentType = "paragraph"; c < l && !t.isEmpty(c); c++)
                if (!(t.sCount[c] - t.blkIndent > 3 || t.sCount[c] < 0)) {
                    for (r = !1,
                    i = 0,
                    o = u.length; i < o; i++)
                        if (u[i](t, c, l, !0)) {
                            r = !0;
                            break
                        }
                    if (r)
                        break
                }
            return n = t.getLines(e, c, t.blkIndent, !1).trim(),
            t.line = c,
            s = t.push("paragraph_open", "p", 1),
            s.map = [e, t.line],
            s = t.push("inline", "", 0),
            s.content = n,
            s.map = [e, t.line],
            s.children = [],
            s = t.push("paragraph_close", "p", -1),
            t.parentType = a,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).normalizeReference
          , i = n(2).isSpace;
        t.exports = function(t, e, n, o) {
            var s, a, c, u, l, p, h, d, f, m, g, y, v, b, _, C, w = 0, S = t.bMarks[e] + t.tShift[e], x = t.eMarks[e], k = e + 1;
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            if (91 !== t.src.charCodeAt(S))
                return !1;
            for (; ++S < x; )
                if (93 === t.src.charCodeAt(S) && 92 !== t.src.charCodeAt(S - 1)) {
                    if (S + 1 === x)
                        return !1;
                    if (58 !== t.src.charCodeAt(S + 1))
                        return !1;
                    break
                }
            for (u = t.lineMax,
            _ = t.md.block.ruler.getRules("reference"),
            m = t.parentType,
            t.parentType = "reference"; k < u && !t.isEmpty(k); k++)
                if (!(t.sCount[k] - t.blkIndent > 3 || t.sCount[k] < 0)) {
                    for (b = !1,
                    p = 0,
                    h = _.length; p < h; p++)
                        if (_[p](t, k, u, !0)) {
                            b = !0;
                            break
                        }
                    if (b)
                        break
                }
            for (v = t.getLines(e, k, t.blkIndent, !1).trim(),
            x = v.length,
            S = 1; S < x; S++) {
                if (91 === (s = v.charCodeAt(S)))
                    return !1;
                if (93 === s) {
                    f = S;
                    break
                }
                10 === s ? w++ : 92 === s && ++S < x && 10 === v.charCodeAt(S) && w++
            }
            if (f < 0 || 58 !== v.charCodeAt(f + 1))
                return !1;
            for (S = f + 2; S < x; S++)
                if (10 === (s = v.charCodeAt(S)))
                    w++;
                else if (!i(s))
                    break;
            if (g = t.md.helpers.parseLinkDestination(v, S, x),
            !g.ok)
                return !1;
            if (l = t.md.normalizeLink(g.str),
            !t.md.validateLink(l))
                return !1;
            for (S = g.pos,
            w += g.lines,
            a = S,
            c = w,
            y = S; S < x; S++)
                if (10 === (s = v.charCodeAt(S)))
                    w++;
                else if (!i(s))
                    break;
            for (g = t.md.helpers.parseLinkTitle(v, S, x),
            S < x && y !== S && g.ok ? (C = g.str,
            S = g.pos,
            w += g.lines) : (C = "",
            S = a,
            w = c); S < x && (s = v.charCodeAt(S),
            i(s)); )
                S++;
            if (S < x && 10 !== v.charCodeAt(S) && C)
                for (C = "",
                S = a,
                w = c; S < x && (s = v.charCodeAt(S),
                i(s)); )
                    S++;
            return !(S < x && 10 !== v.charCodeAt(S)) && (!!(d = r(v.slice(1, f))) && (!!o || (void 0 === t.env.references && (t.env.references = {}),
            void 0 === t.env.references[d] && (t.env.references[d] = {
                title: C,
                href: l
            }),
            t.parentType = m,
            t.line = e + w + 1,
            !0)))
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            var i, s, a, c, u, l, p, h;
            for (this.src = t,
            this.md = e,
            this.env = n,
            this.tokens = r,
            this.bMarks = [],
            this.eMarks = [],
            this.tShift = [],
            this.sCount = [],
            this.bsCount = [],
            this.blkIndent = 0,
            this.line = 0,
            this.lineMax = 0,
            this.tight = !1,
            this.ddIndent = -1,
            this.parentType = "root",
            this.level = 0,
            this.result = "",
            s = this.src,
            h = !1,
            a = c = l = p = 0,
            u = s.length; c < u; c++) {
                if (i = s.charCodeAt(c),
                !h) {
                    if (o(i)) {
                        l++,
                        9 === i ? p += 4 - p % 4 : p++;
                        continue
                    }
                    h = !0
                }
                10 !== i && c !== u - 1 || (10 !== i && c++,
                this.bMarks.push(a),
                this.eMarks.push(c),
                this.tShift.push(l),
                this.sCount.push(p),
                this.bsCount.push(0),
                h = !1,
                l = 0,
                p = 0,
                a = c + 1)
            }
            this.bMarks.push(s.length),
            this.eMarks.push(s.length),
            this.tShift.push(0),
            this.sCount.push(0),
            this.bsCount.push(0),
            this.lineMax = this.bMarks.length - 1
        }
        var i = n(58)
          , o = n(2).isSpace;
        r.prototype.push = function(t, e, n) {
            var r = new i(t,e,n);
            return r.block = !0,
            n < 0 && this.level--,
            r.level = this.level,
            n > 0 && this.level++,
            this.tokens.push(r),
            r
        }
        ,
        r.prototype.isEmpty = function(t) {
            return this.bMarks[t] + this.tShift[t] >= this.eMarks[t]
        }
        ,
        r.prototype.skipEmptyLines = function(t) {
            for (var e = this.lineMax; t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
                ;
            return t
        }
        ,
        r.prototype.skipSpaces = function(t) {
            for (var e, n = this.src.length; t < n && (e = this.src.charCodeAt(t),
            o(e)); t++)
                ;
            return t
        }
        ,
        r.prototype.skipSpacesBack = function(t, e) {
            if (t <= e)
                return t;
            for (; t > e; )
                if (!o(this.src.charCodeAt(--t)))
                    return t + 1;
            return t
        }
        ,
        r.prototype.skipChars = function(t, e) {
            for (var n = this.src.length; t < n && this.src.charCodeAt(t) === e; t++)
                ;
            return t
        }
        ,
        r.prototype.skipCharsBack = function(t, e, n) {
            if (t <= n)
                return t;
            for (; t > n; )
                if (e !== this.src.charCodeAt(--t))
                    return t + 1;
            return t
        }
        ,
        r.prototype.getLines = function(t, e, n, r) {
            var i, s, a, c, u, l, p, h = t;
            if (t >= e)
                return "";
            for (l = new Array(e - t),
            i = 0; h < e; h++,
            i++) {
                for (s = 0,
                p = c = this.bMarks[h],
                u = h + 1 < e || r ? this.eMarks[h] + 1 : this.eMarks[h]; c < u && s < n; ) {
                    if (a = this.src.charCodeAt(c),
                    o(a))
                        9 === a ? s += 4 - (s + this.bsCount[h]) % 4 : s++;
                    else {
                        if (!(c - p < this.tShift[h]))
                            break;
                        s++
                    }
                    c++
                }
                l[i] = s > n ? new Array(s - n + 1).join(" ") + this.src.slice(c, u) : this.src.slice(c, u)
            }
            return l.join("")
        }
        ,
        r.prototype.Token = i,
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = t.bMarks[e] + t.blkIndent
              , r = t.eMarks[e];
            return t.src.substr(n, r - n)
        }
        function i(t) {
            var e, n = [], r = 0, i = t.length, o = 0, s = 0, a = !1, c = 0;
            for (e = t.charCodeAt(r); r < i; )
                96 === e ? a ? (a = !1,
                c = r) : o % 2 == 0 && (a = !0,
                c = r) : 124 !== e || o % 2 != 0 || a || (n.push(t.substring(s, r)),
                s = r + 1),
                92 === e ? o++ : o = 0,
                r++,
                r === i && a && (a = !1,
                r = c + 1),
                e = t.charCodeAt(r);
            return n.push(t.substring(s)),
            n
        }
        var o = n(2).isSpace;
        t.exports = function(t, e, n, s) {
            var a, c, u, l, p, h, d, f, m, g, y, v;
            if (e + 2 > n)
                return !1;
            if (p = e + 1,
            t.sCount[p] < t.blkIndent)
                return !1;
            if (t.sCount[p] - t.blkIndent >= 4)
                return !1;
            if ((u = t.bMarks[p] + t.tShift[p]) >= t.eMarks[p])
                return !1;
            if (124 !== (a = t.src.charCodeAt(u++)) && 45 !== a && 58 !== a)
                return !1;
            for (; u < t.eMarks[p]; ) {
                if (124 !== (a = t.src.charCodeAt(u)) && 45 !== a && 58 !== a && !o(a))
                    return !1;
                u++
            }
            for (c = r(t, e + 1),
            h = c.split("|"),
            m = [],
            l = 0; l < h.length; l++) {
                if (!(g = h[l].trim())) {
                    if (0 === l || l === h.length - 1)
                        continue;
                    return !1
                }
                if (!/^:?-+:?$/.test(g))
                    return !1;
                58 === g.charCodeAt(g.length - 1) ? m.push(58 === g.charCodeAt(0) ? "center" : "right") : 58 === g.charCodeAt(0) ? m.push("left") : m.push("")
            }
            if (c = r(t, e).trim(),
            -1 === c.indexOf("|"))
                return !1;
            if (t.sCount[e] - t.blkIndent >= 4)
                return !1;
            if (h = i(c.replace(/^\||\|$/g, "")),
            (d = h.length) > m.length)
                return !1;
            if (s)
                return !0;
            for (f = t.push("table_open", "table", 1),
            f.map = y = [e, 0],
            f = t.push("thead_open", "thead", 1),
            f.map = [e, e + 1],
            f = t.push("tr_open", "tr", 1),
            f.map = [e, e + 1],
            l = 0; l < h.length; l++)
                f = t.push("th_open", "th", 1),
                f.map = [e, e + 1],
                m[l] && (f.attrs = [["style", "text-align:" + m[l]]]),
                f = t.push("inline", "", 0),
                f.content = h[l].trim(),
                f.map = [e, e + 1],
                f.children = [],
                f = t.push("th_close", "th", -1);
            for (f = t.push("tr_close", "tr", -1),
            f = t.push("thead_close", "thead", -1),
            f = t.push("tbody_open", "tbody", 1),
            f.map = v = [e + 2, 0],
            p = e + 2; p < n && !(t.sCount[p] < t.blkIndent) && (c = r(t, p).trim(),
            -1 !== c.indexOf("|")) && !(t.sCount[p] - t.blkIndent >= 4); p++) {
                for (h = i(c.replace(/^\||\|$/g, "")),
                f = t.push("tr_open", "tr", 1),
                l = 0; l < d; l++)
                    f = t.push("td_open", "td", 1),
                    m[l] && (f.attrs = [["style", "text-align:" + m[l]]]),
                    f = t.push("inline", "", 0),
                    f.content = h[l] ? h[l].trim() : "",
                    f.children = [],
                    f = t.push("td_close", "td", -1);
                f = t.push("tr_close", "tr", -1)
            }
            return f = t.push("tbody_close", "tbody", -1),
            f = t.push("table_close", "table", -1),
            y[1] = v[1] = p,
            t.line = p,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e;
            t.inlineMode ? (e = new t.Token("inline","",0),
            e.content = t.src,
            e.map = [0, 1],
            e.children = [],
            t.tokens.push(e)) : t.md.block.parse(t.src, t.md, t.env, t.tokens)
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e, n, r, i = t.tokens;
            for (n = 0,
            r = i.length; n < r; n++)
                e = i[n],
                "inline" === e.type && t.md.inline.parse(e.content, t.md, t.env, e.children)
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return /^<a[>\s]/i.test(t)
        }
        function i(t) {
            return /^<\/a\s*>/i.test(t)
        }
        var o = n(2).arrayReplaceAt;
        t.exports = function(t) {
            var e, n, s, a, c, u, l, p, h, d, f, m, g, y, v, b, _, C = t.tokens;
            if (t.md.options.linkify)
                for (n = 0,
                s = C.length; n < s; n++)
                    if ("inline" === C[n].type && t.md.linkify.pretest(C[n].content))
                        for (a = C[n].children,
                        g = 0,
                        e = a.length - 1; e >= 0; e--)
                            if (u = a[e],
                            "link_close" !== u.type) {
                                if ("html_inline" === u.type && (r(u.content) && g > 0 && g--,
                                i(u.content) && g++),
                                !(g > 0) && "text" === u.type && t.md.linkify.test(u.content)) {
                                    for (h = u.content,
                                    _ = t.md.linkify.match(h),
                                    l = [],
                                    m = u.level,
                                    f = 0,
                                    p = 0; p < _.length; p++)
                                        y = _[p].url,
                                        v = t.md.normalizeLink(y),
                                        t.md.validateLink(v) && (b = _[p].text,
                                        b = _[p].schema ? "mailto:" !== _[p].schema || /^mailto:/i.test(b) ? t.md.normalizeLinkText(b) : t.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : t.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, ""),
                                        d = _[p].index,
                                        d > f && (c = new t.Token("text","",0),
                                        c.content = h.slice(f, d),
                                        c.level = m,
                                        l.push(c)),
                                        c = new t.Token("link_open","a",1),
                                        c.attrs = [["href", v]],
                                        c.level = m++,
                                        c.markup = "linkify",
                                        c.info = "auto",
                                        l.push(c),
                                        c = new t.Token("text","",0),
                                        c.content = b,
                                        c.level = m,
                                        l.push(c),
                                        c = new t.Token("link_close","a",-1),
                                        c.level = --m,
                                        c.markup = "linkify",
                                        c.info = "auto",
                                        l.push(c),
                                        f = _[p].lastIndex);
                                    f < h.length && (c = new t.Token("text","",0),
                                    c.content = h.slice(f),
                                    c.level = m,
                                    l.push(c)),
                                    C[n].children = a = o(a, e, l)
                                }
                            } else
                                for (e--; a[e].level !== u.level && "link_open" !== a[e].type; )
                                    e--
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g
          , i = /\u0000/g;
        t.exports = function(t) {
            var e;
            e = t.src.replace(r, "\n"),
            e = e.replace(i, "ï¿½"),
            t.src = e
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return u[e.toLowerCase()]
        }
        function i(t) {
            var e, n, i = 0;
            for (e = t.length - 1; e >= 0; e--)
                n = t[e],
                "text" !== n.type || i || (n.content = n.content.replace(c, r)),
                "link_open" === n.type && "auto" === n.info && i--,
                "link_close" === n.type && "auto" === n.info && i++
        }
        function o(t) {
            var e, n, r = 0;
            for (e = t.length - 1; e >= 0; e--)
                n = t[e],
                "text" !== n.type || r || s.test(n.content) && (n.content = n.content.replace(/\+-/g, "Â±").replace(/\.{2,}/g, "â€¦").replace(/([?!])â€¦/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1â€”$2").replace(/(^|\s)--(\s|$)/gm, "$1â€“$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1â€“$2")),
                "link_open" === n.type && "auto" === n.info && r--,
                "link_close" === n.type && "auto" === n.info && r++
        }
        var s = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/
          , a = /\((c|tm|r|p)\)/i
          , c = /\((c|tm|r|p)\)/gi
          , u = {
            c: "Â©",
            r: "Â®",
            p: "Â§",
            tm: "â„¢"
        };
        t.exports = function(t) {
            var e;
            if (t.md.options.typographer)
                for (e = t.tokens.length - 1; e >= 0; e--)
                    "inline" === t.tokens[e].type && (a.test(t.tokens[e].content) && i(t.tokens[e].children),
                    s.test(t.tokens[e].content) && o(t.tokens[e].children))
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            return t.substr(0, e) + n + t.substr(e + 1)
        }
        function i(t, e) {
            var n, i, c, p, h, d, f, m, g, y, v, b, _, C, w, S, x, k, E, A, T;
            for (E = [],
            n = 0; n < t.length; n++) {
                for (i = t[n],
                f = t[n].level,
                x = E.length - 1; x >= 0 && !(E[x].level <= f); x--)
                    ;
                if (E.length = x + 1,
                "text" === i.type) {
                    c = i.content,
                    h = 0,
                    d = c.length;
                    t: for (; h < d && (u.lastIndex = h,
                    p = u.exec(c)); ) {
                        if (w = S = !0,
                        h = p.index + 1,
                        k = "'" === p[0],
                        g = 32,
                        p.index - 1 >= 0)
                            g = c.charCodeAt(p.index - 1);
                        else
                            for (x = n - 1; x >= 0; x--)
                                if ("text" === t[x].type) {
                                    g = t[x].content.charCodeAt(t[x].content.length - 1);
                                    break
                                }
                        if (y = 32,
                        h < d)
                            y = c.charCodeAt(h);
                        else
                            for (x = n + 1; x < t.length; x++)
                                if ("text" === t[x].type) {
                                    y = t[x].content.charCodeAt(0);
                                    break
                                }
                        if (v = a(g) || s(String.fromCharCode(g)),
                        b = a(y) || s(String.fromCharCode(y)),
                        _ = o(g),
                        C = o(y),
                        C ? w = !1 : b && (_ || v || (w = !1)),
                        _ ? S = !1 : v && (C || b || (S = !1)),
                        34 === y && '"' === p[0] && g >= 48 && g <= 57 && (S = w = !1),
                        w && S && (w = !1,
                        S = b),
                        w || S) {
                            if (S)
                                for (x = E.length - 1; x >= 0 && (m = E[x],
                                !(E[x].level < f)); x--)
                                    if (m.single === k && E[x].level === f) {
                                        m = E[x],
                                        k ? (A = e.md.options.quotes[2],
                                        T = e.md.options.quotes[3]) : (A = e.md.options.quotes[0],
                                        T = e.md.options.quotes[1]),
                                        i.content = r(i.content, p.index, T),
                                        t[m.token].content = r(t[m.token].content, m.pos, A),
                                        h += T.length - 1,
                                        m.token === n && (h += A.length - 1),
                                        c = i.content,
                                        d = c.length,
                                        E.length = x;
                                        continue t
                                    }
                            w ? E.push({
                                token: n,
                                pos: p.index,
                                single: k,
                                level: f
                            }) : S && k && (i.content = r(i.content, p.index, l))
                        } else
                            k && (i.content = r(i.content, p.index, l))
                    }
                }
            }
        }
        var o = n(2).isWhiteSpace
          , s = n(2).isPunctChar
          , a = n(2).isMdAsciiPunct
          , c = /['"]/
          , u = /['"]/g
          , l = "â€™";
        t.exports = function(t) {
            var e;
            if (t.md.options.typographer)
                for (e = t.tokens.length - 1; e >= 0; e--)
                    "inline" === t.tokens[e].type && c.test(t.tokens[e].content) && i(t.tokens[e].children, t)
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            this.src = t,
            this.env = n,
            this.tokens = [],
            this.inlineMode = !1,
            this.md = e
        }
        var i = n(58);
        r.prototype.Token = i,
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/
          , i = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
        t.exports = function(t, e) {
            var n, o, s, a, c, u, l = t.pos;
            return 60 === t.src.charCodeAt(l) && (n = t.src.slice(l),
            !(n.indexOf(">") < 0) && (i.test(n) ? (o = n.match(i),
            a = o[0].slice(1, -1),
            c = t.md.normalizeLink(a),
            !!t.md.validateLink(c) && (e || (u = t.push("link_open", "a", 1),
            u.attrs = [["href", c]],
            u.markup = "autolink",
            u.info = "auto",
            u = t.push("text", "", 0),
            u.content = t.md.normalizeLinkText(a),
            u = t.push("link_close", "a", -1),
            u.markup = "autolink",
            u.info = "auto"),
            t.pos += o[0].length,
            !0)) : !!r.test(n) && (s = n.match(r),
            a = s[0].slice(1, -1),
            c = t.md.normalizeLink("mailto:" + a),
            !!t.md.validateLink(c) && (e || (u = t.push("link_open", "a", 1),
            u.attrs = [["href", c]],
            u.markup = "autolink",
            u.info = "auto",
            u = t.push("text", "", 0),
            u.content = t.md.normalizeLinkText(a),
            u = t.push("link_close", "a", -1),
            u.markup = "autolink",
            u.info = "auto"),
            t.pos += s[0].length,
            !0))))
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            var n, r, i, o, s, a, c = t.pos;
            if (96 !== t.src.charCodeAt(c))
                return !1;
            for (n = c,
            c++,
            r = t.posMax; c < r && 96 === t.src.charCodeAt(c); )
                c++;
            for (i = t.src.slice(n, c),
            o = s = c; -1 !== (o = t.src.indexOf("`", s)); ) {
                for (s = o + 1; s < r && 96 === t.src.charCodeAt(s); )
                    s++;
                if (s - o === i.length)
                    return e || (a = t.push("code_inline", "code", 0),
                    a.markup = i,
                    a.content = t.src.slice(c, o).replace(/[ \n]+/g, " ").trim()),
                    t.pos = s,
                    !0
            }
            return e || (t.pending += i),
            t.pos += i.length,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e, n, r, i, o = t.delimiters, s = t.delimiters.length;
            for (e = 0; e < s; e++)
                if (r = o[e],
                r.close)
                    for (n = e - r.jump - 1; n >= 0; ) {
                        if (i = o[n],
                        i.open && i.marker === r.marker && i.end < 0 && i.level === r.level) {
                            var a = (i.close || r.open) && void 0 !== i.length && void 0 !== r.length && (i.length + r.length) % 3 == 0;
                            if (!a) {
                                r.jump = e - n,
                                r.open = !1,
                                i.end = e,
                                i.jump = 0;
                                break
                            }
                        }
                        n -= i.jump + 1
                    }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(94)
          , i = n(2).has
          , o = n(2).isValidEntityCode
          , s = n(2).fromCodePoint
          , a = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i
          , c = /^&([a-z][a-z0-9]{1,31});/i;
        t.exports = function(t, e) {
            var n, u, l = t.pos, p = t.posMax;
            if (38 !== t.src.charCodeAt(l))
                return !1;
            if (l + 1 < p)
                if (35 === t.src.charCodeAt(l + 1)) {
                    if (u = t.src.slice(l).match(a))
                        return e || (n = "x" === u[1][0].toLowerCase() ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10),
                        t.pending += s(o(n) ? n : 65533)),
                        t.pos += u[0].length,
                        !0
                } else if ((u = t.src.slice(l).match(c)) && i(r, u[1]))
                    return e || (t.pending += r[u[1]]),
                    t.pos += u[0].length,
                    !0;
            return e || (t.pending += "&"),
            t.pos++,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        for (var r = n(2).isSpace, i = [], o = 0; o < 256; o++)
            i.push(0);
        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
            i[t.charCodeAt(0)] = 1
        }),
        t.exports = function(t, e) {
            var n, o = t.pos, s = t.posMax;
            if (92 !== t.src.charCodeAt(o))
                return !1;
            if (++o < s) {
                if ((n = t.src.charCodeAt(o)) < 256 && 0 !== i[n])
                    return e || (t.pending += t.src[o]),
                    t.pos += 2,
                    !0;
                if (10 === n) {
                    for (e || t.push("hardbreak", "br", 0),
                    o++; o < s && (n = t.src.charCodeAt(o),
                    r(n)); )
                        o++;
                    return t.pos = o,
                    !0
                }
            }
            return e || (t.pending += "\\"),
            t.pos++,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = 32 | t;
            return e >= 97 && e <= 122
        }
        var i = n(95).HTML_TAG_RE;
        t.exports = function(t, e) {
            var n, o, s, a, c = t.pos;
            return !!t.md.options.html && (s = t.posMax,
            !(60 !== t.src.charCodeAt(c) || c + 2 >= s) && (!(33 !== (n = t.src.charCodeAt(c + 1)) && 63 !== n && 47 !== n && !r(n)) && (!!(o = t.src.slice(c).match(i)) && (e || (a = t.push("html_inline", "", 0),
            a.content = t.src.slice(c, c + o[0].length)),
            t.pos += o[0].length,
            !0))))
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).normalizeReference
          , i = n(2).isSpace;
        t.exports = function(t, e) {
            var n, o, s, a, c, u, l, p, h, d, f, m, g, y = "", v = t.pos, b = t.posMax;
            if (33 !== t.src.charCodeAt(t.pos))
                return !1;
            if (91 !== t.src.charCodeAt(t.pos + 1))
                return !1;
            if (u = t.pos + 2,
            (c = t.md.helpers.parseLinkLabel(t, t.pos + 1, !1)) < 0)
                return !1;
            if ((l = c + 1) < b && 40 === t.src.charCodeAt(l)) {
                for (l++; l < b && (o = t.src.charCodeAt(l),
                i(o) || 10 === o); l++)
                    ;
                if (l >= b)
                    return !1;
                for (g = l,
                h = t.md.helpers.parseLinkDestination(t.src, l, t.posMax),
                h.ok && (y = t.md.normalizeLink(h.str),
                t.md.validateLink(y) ? l = h.pos : y = ""),
                g = l; l < b && (o = t.src.charCodeAt(l),
                i(o) || 10 === o); l++)
                    ;
                if (h = t.md.helpers.parseLinkTitle(t.src, l, t.posMax),
                l < b && g !== l && h.ok)
                    for (d = h.str,
                    l = h.pos; l < b && (o = t.src.charCodeAt(l),
                    i(o) || 10 === o); l++)
                        ;
                else
                    d = "";
                if (l >= b || 41 !== t.src.charCodeAt(l))
                    return t.pos = v,
                    !1;
                l++
            } else {
                if (void 0 === t.env.references)
                    return !1;
                if (l < b && 91 === t.src.charCodeAt(l) ? (g = l + 1,
                l = t.md.helpers.parseLinkLabel(t, l),
                l >= 0 ? a = t.src.slice(g, l++) : l = c + 1) : l = c + 1,
                a || (a = t.src.slice(u, c)),
                !(p = t.env.references[r(a)]))
                    return t.pos = v,
                    !1;
                y = p.href,
                d = p.title
            }
            return e || (s = t.src.slice(u, c),
            t.md.inline.parse(s, t.md, t.env, m = []),
            f = t.push("image", "img", 0),
            f.attrs = n = [["src", y], ["alt", ""]],
            f.children = m,
            f.content = s,
            d && n.push(["title", d])),
            t.pos = l,
            t.posMax = b,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).normalizeReference
          , i = n(2).isSpace;
        t.exports = function(t, e) {
            var n, o, s, a, c, u, l, p, h, d, f = "", m = t.pos, g = t.posMax, y = t.pos, v = !0;
            if (91 !== t.src.charCodeAt(t.pos))
                return !1;
            if (c = t.pos + 1,
            (a = t.md.helpers.parseLinkLabel(t, t.pos, !0)) < 0)
                return !1;
            if ((u = a + 1) < g && 40 === t.src.charCodeAt(u)) {
                for (v = !1,
                u++; u < g && (o = t.src.charCodeAt(u),
                i(o) || 10 === o); u++)
                    ;
                if (u >= g)
                    return !1;
                for (y = u,
                l = t.md.helpers.parseLinkDestination(t.src, u, t.posMax),
                l.ok && (f = t.md.normalizeLink(l.str),
                t.md.validateLink(f) ? u = l.pos : f = ""),
                y = u; u < g && (o = t.src.charCodeAt(u),
                i(o) || 10 === o); u++)
                    ;
                if (l = t.md.helpers.parseLinkTitle(t.src, u, t.posMax),
                u < g && y !== u && l.ok)
                    for (h = l.str,
                    u = l.pos; u < g && (o = t.src.charCodeAt(u),
                    i(o) || 10 === o); u++)
                        ;
                else
                    h = "";
                (u >= g || 41 !== t.src.charCodeAt(u)) && (v = !0),
                u++
            }
            if (v) {
                if (void 0 === t.env.references)
                    return !1;
                if (u < g && 91 === t.src.charCodeAt(u) ? (y = u + 1,
                u = t.md.helpers.parseLinkLabel(t, u),
                u >= 0 ? s = t.src.slice(y, u++) : u = a + 1) : u = a + 1,
                s || (s = t.src.slice(c, a)),
                !(p = t.env.references[r(s)]))
                    return t.pos = m,
                    !1;
                f = p.href,
                h = p.title
            }
            return e || (t.pos = c,
            t.posMax = a,
            d = t.push("link_open", "a", 1),
            d.attrs = n = [["href", f]],
            h && n.push(["title", h]),
            t.md.inline.tokenize(t),
            d = t.push("link_close", "a", -1)),
            t.pos = u,
            t.posMax = g,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2).isSpace;
        t.exports = function(t, e) {
            var n, i, o = t.pos;
            if (10 !== t.src.charCodeAt(o))
                return !1;
            for (n = t.pending.length - 1,
            i = t.posMax,
            e || (n >= 0 && 32 === t.pending.charCodeAt(n) ? n >= 1 && 32 === t.pending.charCodeAt(n - 1) ? (t.pending = t.pending.replace(/ +$/, ""),
            t.push("hardbreak", "br", 0)) : (t.pending = t.pending.slice(0, -1),
            t.push("softbreak", "br", 0)) : t.push("softbreak", "br", 0)),
            o++; o < i && r(t.src.charCodeAt(o)); )
                o++;
            return t.pos = o,
            !0
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            this.src = t,
            this.env = n,
            this.md = e,
            this.tokens = r,
            this.pos = 0,
            this.posMax = this.src.length,
            this.level = 0,
            this.pending = "",
            this.pendingLevel = 0,
            this.cache = {},
            this.delimiters = []
        }
        var i = n(58)
          , o = n(2).isWhiteSpace
          , s = n(2).isPunctChar
          , a = n(2).isMdAsciiPunct;
        r.prototype.pushPending = function() {
            var t = new i("text","",0);
            return t.content = this.pending,
            t.level = this.pendingLevel,
            this.tokens.push(t),
            this.pending = "",
            t
        }
        ,
        r.prototype.push = function(t, e, n) {
            this.pending && this.pushPending();
            var r = new i(t,e,n);
            return n < 0 && this.level--,
            r.level = this.level,
            n > 0 && this.level++,
            this.pendingLevel = this.level,
            this.tokens.push(r),
            r
        }
        ,
        r.prototype.scanDelims = function(t, e) {
            var n, r, i, c, u, l, p, h, d, f = t, m = !0, g = !0, y = this.posMax, v = this.src.charCodeAt(t);
            for (n = t > 0 ? this.src.charCodeAt(t - 1) : 32; f < y && this.src.charCodeAt(f) === v; )
                f++;
            return i = f - t,
            r = f < y ? this.src.charCodeAt(f) : 32,
            p = a(n) || s(String.fromCharCode(n)),
            d = a(r) || s(String.fromCharCode(r)),
            l = o(n),
            h = o(r),
            h ? m = !1 : d && (l || p || (m = !1)),
            l ? g = !1 : p && (h || d || (g = !1)),
            e ? (c = m,
            u = g) : (c = m && (!g || p),
            u = g && (!m || d)),
            {
                can_open: c,
                can_close: u,
                length: i
            }
        }
        ,
        r.prototype.Token = i,
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            switch (t) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
                return !0;
            default:
                return !1
            }
        }
        t.exports = function(t, e) {
            for (var n = t.pos; n < t.posMax && !r(t.src.charCodeAt(n)); )
                n++;
            return n !== t.pos && (e || (t.pending += t.src.slice(t.pos, n)),
            t.pos = n,
            !0)
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e, n, r = 0, i = t.tokens, o = t.tokens.length;
            for (e = n = 0; e < o; e++)
                r += i[e].nesting,
                i[e].level = r,
                "text" === i[e].type && e + 1 < o && "text" === i[e + 1].type ? i[e + 1].content = i[e].content + i[e + 1].content : (e !== n && (i[n] = i[e]),
                n++);
            e !== n && (i.length = n)
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e, n, r = o[t];
            if (r)
                return r;
            for (r = o[t] = [],
            e = 0; e < 128; e++)
                n = String.fromCharCode(e),
                r.push(n);
            for (e = 0; e < t.length; e++)
                n = t.charCodeAt(e),
                r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
            return r
        }
        function i(t, e) {
            var n;
            return "string" != typeof e && (e = i.defaultChars),
            n = r(e),
            t.replace(/(%[a-f0-9]{2})+/gi, function(t) {
                var e, r, i, o, s, a, c, u = "";
                for (e = 0,
                r = t.length; e < r; e += 3)
                    i = parseInt(t.slice(e + 1, e + 3), 16),
                    i < 128 ? u += n[i] : 192 == (224 & i) && e + 3 < r && 128 == (192 & (o = parseInt(t.slice(e + 4, e + 6), 16))) ? (c = i << 6 & 1984 | 63 & o,
                    u += c < 128 ? "ï¿½ï¿½" : String.fromCharCode(c),
                    e += 3) : 224 == (240 & i) && e + 6 < r && (o = parseInt(t.slice(e + 4, e + 6), 16),
                    s = parseInt(t.slice(e + 7, e + 9), 16),
                    128 == (192 & o) && 128 == (192 & s)) ? (c = i << 12 & 61440 | o << 6 & 4032 | 63 & s,
                    u += c < 2048 || c >= 55296 && c <= 57343 ? "ï¿½ï¿½ï¿½" : String.fromCharCode(c),
                    e += 6) : 240 == (248 & i) && e + 9 < r && (o = parseInt(t.slice(e + 4, e + 6), 16),
                    s = parseInt(t.slice(e + 7, e + 9), 16),
                    a = parseInt(t.slice(e + 10, e + 12), 16),
                    128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a)) ? (c = i << 18 & 1835008 | o << 12 & 258048 | s << 6 & 4032 | 63 & a,
                    c < 65536 || c > 1114111 ? u += "ï¿½ï¿½ï¿½ï¿½" : (c -= 65536,
                    u += String.fromCharCode(55296 + (c >> 10), 56320 + (1023 & c))),
                    e += 9) : u += "ï¿½";
                return u
            })
        }
        var o = {};
        i.defaultChars = ";/?:@&=+$,#",
        i.componentChars = "",
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e, n, r = o[t];
            if (r)
                return r;
            for (r = o[t] = [],
            e = 0; e < 128; e++)
                n = String.fromCharCode(e),
                /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
            for (e = 0; e < t.length; e++)
                r[t.charCodeAt(e)] = t[e];
            return r
        }
        function i(t, e, n) {
            var o, s, a, c, u, l = "";
            for ("string" != typeof e && (n = e,
            e = i.defaultChars),
            void 0 === n && (n = !0),
            u = r(e),
            o = 0,
            s = t.length; o < s; o++)
                if (a = t.charCodeAt(o),
                n && 37 === a && o + 2 < s && /^[0-9a-f]{2}$/i.test(t.slice(o + 1, o + 3)))
                    l += t.slice(o, o + 3),
                    o += 2;
                else if (a < 128)
                    l += u[a];
                else if (a >= 55296 && a <= 57343) {
                    if (a >= 55296 && a <= 56319 && o + 1 < s && (c = t.charCodeAt(o + 1)) >= 56320 && c <= 57343) {
                        l += encodeURIComponent(t[o] + t[o + 1]),
                        o++;
                        continue
                    }
                    l += "%EF%BF%BD"
                } else
                    l += encodeURIComponent(t[o]);
            return l
        }
        var o = {};
        i.defaultChars = ";/?:@&=+$,-_.!~*'()#",
        i.componentChars = "-_.!~*'()",
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = "";
            return e += t.protocol || "",
            e += t.slashes ? "//" : "",
            e += t.auth ? t.auth + "@" : "",
            t.hostname && -1 !== t.hostname.indexOf(":") ? e += "[" + t.hostname + "]" : e += t.hostname || "",
            e += t.port ? ":" + t.port : "",
            e += t.pathname || "",
            e += t.search || "",
            e += t.hash || ""
        }
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            this.protocol = null,
            this.slashes = null,
            this.auth = null,
            this.port = null,
            this.hostname = null,
            this.hash = null,
            this.search = null,
            this.pathname = null
        }
        function i(t, e) {
            if (t && t instanceof r)
                return t;
            var n = new r;
            return n.parse(t, e),
            n
        }
        var o = /^([a-z0-9.+-]+:)/i
          , s = /:[0-9]*$/
          , a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
          , c = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
          , u = ["{", "}", "|", "\\", "^", "`"].concat(c)
          , l = ["'"].concat(u)
          , p = ["%", "/", "?", ";", "#"].concat(l)
          , h = ["/", "?", "#"]
          , d = /^[+a-z0-9A-Z_-]{0,63}$/
          , f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
          , m = {
            javascript: !0,
            "javascript:": !0
        }
          , g = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };
        r.prototype.parse = function(t, e) {
            var n, r, i, s, c, u = t;
            if (u = u.trim(),
            !e && 1 === t.split("#").length) {
                var l = a.exec(u);
                if (l)
                    return this.pathname = l[1],
                    l[2] && (this.search = l[2]),
                    this
            }
            var y = o.exec(u);
            if (y && (y = y[0],
            i = y.toLowerCase(),
            this.protocol = y,
            u = u.substr(y.length)),
            (e || y || u.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(c = "//" === u.substr(0, 2)) || y && m[y] || (u = u.substr(2),
            this.slashes = !0)),
            !m[y] && (c || y && !g[y])) {
                var v = -1;
                for (n = 0; n < h.length; n++)
                    -1 !== (s = u.indexOf(h[n])) && (-1 === v || s < v) && (v = s);
                var b, _;
                for (_ = -1 === v ? u.lastIndexOf("@") : u.lastIndexOf("@", v),
                -1 !== _ && (b = u.slice(0, _),
                u = u.slice(_ + 1),
                this.auth = b),
                v = -1,
                n = 0; n < p.length; n++)
                    -1 !== (s = u.indexOf(p[n])) && (-1 === v || s < v) && (v = s);
                -1 === v && (v = u.length),
                ":" === u[v - 1] && v--;
                var C = u.slice(0, v);
                u = u.slice(v),
                this.parseHost(C),
                this.hostname = this.hostname || "";
                var w = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!w) {
                    var S = this.hostname.split(/\./);
                    for (n = 0,
                    r = S.length; n < r; n++) {
                        var x = S[n];
                        if (x && !x.match(d)) {
                            for (var k = "", E = 0, A = x.length; E < A; E++)
                                x.charCodeAt(E) > 127 ? k += "x" : k += x[E];
                            if (!k.match(d)) {
                                var T = S.slice(0, n)
                                  , O = S.slice(n + 1)
                                  , I = x.match(f);
                                I && (T.push(I[1]),
                                O.unshift(I[2])),
                                O.length && (u = O.join(".") + u),
                                this.hostname = T.join(".");
                                break
                            }
                        }
                    }
                }
                this.hostname.length > 255 && (this.hostname = ""),
                w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
            }
            var P = u.indexOf("#");
            -1 !== P && (this.hash = u.substr(P),
            u = u.slice(0, P));
            var D = u.indexOf("?");
            return -1 !== D && (this.search = u.substr(D),
            u = u.slice(0, D)),
            u && (this.pathname = u),
            g[i] && this.hostname && !this.pathname && (this.pathname = ""),
            this
        }
        ,
        r.prototype.parseHost = function(t) {
            var e = s.exec(t);
            e && (e = e[0],
            ":" !== e && (this.port = e.substr(1)),
            t = t.substr(0, t.length - e.length)),
            t && (this.hostname = t)
        }
        ,
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r, i) {}
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(11)
          , i = n(1)
          , o = n(102);
        t.exports = function() {
            function t(t, e, n, r, s, a) {
                a !== o && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }
            function e() {
                return t
            }
            t.isRequired = t;
            var n = {
                array: t,
                bool: t,
                func: t,
                number: t,
                object: t,
                string: t,
                symbol: t,
                any: t,
                arrayOf: e,
                element: t,
                instanceOf: e,
                node: t,
                objectOf: e,
                oneOf: e,
                oneOfType: e,
                shape: e
            };
            return n.checkPropTypes = r,
            n.PropTypes = n,
            n
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(11)
          , i = n(1)
          , o = n(3)
          , s = n(102)
          , a = n(263);
        t.exports = function(t, e) {
            function n(t) {
                var e = t && (x && t[x] || t[k]);
                if ("function" == typeof e)
                    return e
            }
            function c(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t !== t && e !== e
            }
            function u(t) {
                this.message = t,
                this.stack = ""
            }
            function l(t) {
                function n(n, r, o, a, c, l, p) {
                    if (a = a || E,
                    l = l || o,
                    p !== s)
                        if (e)
                            i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        else
                            ;return null == r[o] ? n ? new u(null === r[o] ? "The " + c + " `" + l + "` is marked as required in `" + a + "`, but its value is `null`." : "The " + c + " `" + l + "` is marked as required in `" + a + "`, but its value is `undefined`.") : null : t(r, o, a, c, l)
                }
                var r = n.bind(null, !1);
                return r.isRequired = n.bind(null, !0),
                r
            }
            function p(t) {
                function e(e, n, r, i, o, s) {
                    var a = e[n];
                    if (_(a) !== t)
                        return new u("Invalid " + i + " `" + o + "` of type `" + C(a) + "` supplied to `" + r + "`, expected `" + t + "`.");
                    return null
                }
                return l(e)
            }
            function h(t) {
                function e(e, n, r, i, o) {
                    if ("function" != typeof t)
                        return new u("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                    var a = e[n];
                    if (!Array.isArray(a)) {
                        return new u("Invalid " + i + " `" + o + "` of type `" + _(a) + "` supplied to `" + r + "`, expected an array.")
                    }
                    for (var c = 0; c < a.length; c++) {
                        var l = t(a, c, r, i, o + "[" + c + "]", s);
                        if (l instanceof Error)
                            return l
                    }
                    return null
                }
                return l(e)
            }
            function d(t) {
                function e(e, n, r, i, o) {
                    if (!(e[n]instanceof t)) {
                        var s = t.name || E;
                        return new u("Invalid " + i + " `" + o + "` of type `" + S(e[n]) + "` supplied to `" + r + "`, expected instance of `" + s + "`.")
                    }
                    return null
                }
                return l(e)
            }
            function f(t) {
                function e(e, n, r, i, o) {
                    for (var s = e[n], a = 0; a < t.length; a++)
                        if (c(s, t[a]))
                            return null;
                    return new u("Invalid " + i + " `" + o + "` of value `" + s + "` supplied to `" + r + "`, expected one of " + JSON.stringify(t) + ".")
                }
                return Array.isArray(t) ? l(e) : r.thatReturnsNull
            }
            function m(t) {
                function e(e, n, r, i, o) {
                    if ("function" != typeof t)
                        return new u("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                    var a = e[n]
                      , c = _(a);
                    if ("object" !== c)
                        return new u("Invalid " + i + " `" + o + "` of type `" + c + "` supplied to `" + r + "`, expected an object.");
                    for (var l in a)
                        if (a.hasOwnProperty(l)) {
                            var p = t(a, l, r, i, o + "." + l, s);
                            if (p instanceof Error)
                                return p
                        }
                    return null
                }
                return l(e)
            }
            function g(t) {
                function e(e, n, r, i, o) {
                    for (var a = 0; a < t.length; a++) {
                        if (null == (0,
                        t[a])(e, n, r, i, o, s))
                            return null
                    }
                    return new u("Invalid " + i + " `" + o + "` supplied to `" + r + "`.")
                }
                if (!Array.isArray(t))
                    return r.thatReturnsNull;
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    if ("function" != typeof i)
                        return o(!1, "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.", w(i), n),
                        r.thatReturnsNull
                }
                return l(e)
            }
            function y(t) {
                function e(e, n, r, i, o) {
                    var a = e[n]
                      , c = _(a);
                    if ("object" !== c)
                        return new u("Invalid " + i + " `" + o + "` of type `" + c + "` supplied to `" + r + "`, expected `object`.");
                    for (var l in t) {
                        var p = t[l];
                        if (p) {
                            var h = p(a, l, r, i, o + "." + l, s);
                            if (h)
                                return h
                        }
                    }
                    return null
                }
                return l(e)
            }
            function v(e) {
                switch (typeof e) {
                case "number":
                case "string":
                case "undefined":
                    return !0;
                case "boolean":
                    return !e;
                case "object":
                    if (Array.isArray(e))
                        return e.every(v);
                    if (null === e || t(e))
                        return !0;
                    var r = n(e);
                    if (!r)
                        return !1;
                    var i, o = r.call(e);
                    if (r !== e.entries) {
                        for (; !(i = o.next()).done; )
                            if (!v(i.value))
                                return !1
                    } else
                        for (; !(i = o.next()).done; ) {
                            var s = i.value;
                            if (s && !v(s[1]))
                                return !1
                        }
                    return !0;
                default:
                    return !1
                }
            }
            function b(t, e) {
                return "symbol" === t || ("Symbol" === e["@@toStringTag"] || "function" == typeof Symbol && e instanceof Symbol)
            }
            function _(t) {
                var e = typeof t;
                return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : b(e, t) ? "symbol" : e
            }
            function C(t) {
                if (void 0 === t || null === t)
                    return "" + t;
                var e = _(t);
                if ("object" === e) {
                    if (t instanceof Date)
                        return "date";
                    if (t instanceof RegExp)
                        return "regexp"
                }
                return e
            }
            function w(t) {
                var e = C(t);
                switch (e) {
                case "array":
                case "object":
                    return "an " + e;
                case "boolean":
                case "date":
                case "regexp":
                    return "a " + e;
                default:
                    return e
                }
            }
            function S(t) {
                return t.constructor && t.constructor.name ? t.constructor.name : E
            }
            var x = "function" == typeof Symbol && Symbol.iterator
              , k = "@@iterator"
              , E = "<<anonymous>>"
              , A = {
                array: p("array"),
                bool: p("boolean"),
                func: p("function"),
                number: p("number"),
                object: p("object"),
                string: p("string"),
                symbol: p("symbol"),
                any: function() {
                    return l(r.thatReturnsNull)
                }(),
                arrayOf: h,
                element: function() {
                    function e(e, n, r, i, o) {
                        var s = e[n];
                        if (!t(s)) {
                            return new u("Invalid " + i + " `" + o + "` of type `" + _(s) + "` supplied to `" + r + "`, expected a single ReactElement.")
                        }
                        return null
                    }
                    return l(e)
                }(),
                instanceOf: d,
                node: function() {
                    function t(t, e, n, r, i) {
                        return v(t[e]) ? null : new u("Invalid " + r + " `" + i + "` supplied to `" + n + "`, expected a ReactNode.")
                    }
                    return l(t)
                }(),
                objectOf: m,
                oneOf: f,
                oneOfType: g,
                shape: y
            };
            return u.prototype = Error.prototype,
            A.checkPropTypes = a,
            A.PropTypes = A,
            A
        }
    }
    , function(t, e, n) {
        (function(t, r) {
            var i;
            !function(o) {
                function s(t) {
                    throw new RangeError(D[t])
                }
                function a(t, e) {
                    for (var n = t.length, r = []; n--; )
                        r[n] = e(t[n]);
                    return r
                }
                function c(t, e) {
                    var n = t.split("@")
                      , r = "";
                    return n.length > 1 && (r = n[0] + "@",
                    t = n[1]),
                    t = t.replace(P, "."),
                    r + a(t.split("."), e).join(".")
                }
                function u(t) {
                    for (var e, n, r = [], i = 0, o = t.length; i < o; )
                        e = t.charCodeAt(i++),
                        e >= 55296 && e <= 56319 && i < o ? (n = t.charCodeAt(i++),
                        56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                        i--)) : r.push(e);
                    return r
                }
                function l(t) {
                    return a(t, function(t) {
                        var e = "";
                        return t > 65535 && (t -= 65536,
                        e += R(t >>> 10 & 1023 | 55296),
                        t = 56320 | 1023 & t),
                        e += R(t)
                    }).join("")
                }
                function p(t) {
                    return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : C
                }
                function h(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                }
                function d(t, e, n) {
                    var r = 0;
                    for (t = n ? N(t / k) : t >> 1,
                    t += N(t / e); t > M * S >> 1; r += C)
                        t = N(t / M);
                    return N(r + (M + 1) * t / (t + x))
                }
                function f(t) {
                    var e, n, r, i, o, a, c, u, h, f, m = [], g = t.length, y = 0, v = A, b = E;
                    for (n = t.lastIndexOf(T),
                    n < 0 && (n = 0),
                    r = 0; r < n; ++r)
                        t.charCodeAt(r) >= 128 && s("not-basic"),
                        m.push(t.charCodeAt(r));
                    for (i = n > 0 ? n + 1 : 0; i < g; ) {
                        for (o = y,
                        a = 1,
                        c = C; i >= g && s("invalid-input"),
                        u = p(t.charCodeAt(i++)),
                        (u >= C || u > N((_ - y) / a)) && s("overflow"),
                        y += u * a,
                        h = c <= b ? w : c >= b + S ? S : c - b,
                        !(u < h); c += C)
                            f = C - h,
                            a > N(_ / f) && s("overflow"),
                            a *= f;
                        e = m.length + 1,
                        b = d(y - o, e, 0 == o),
                        N(y / e) > _ - v && s("overflow"),
                        v += N(y / e),
                        y %= e,
                        m.splice(y++, 0, v)
                    }
                    return l(m)
                }
                function m(t) {
                    var e, n, r, i, o, a, c, l, p, f, m, g, y, v, b, x = [];
                    for (t = u(t),
                    g = t.length,
                    e = A,
                    n = 0,
                    o = E,
                    a = 0; a < g; ++a)
                        (m = t[a]) < 128 && x.push(R(m));
                    for (r = i = x.length,
                    i && x.push(T); r < g; ) {
                        for (c = _,
                        a = 0; a < g; ++a)
                            (m = t[a]) >= e && m < c && (c = m);
                        for (y = r + 1,
                        c - e > N((_ - n) / y) && s("overflow"),
                        n += (c - e) * y,
                        e = c,
                        a = 0; a < g; ++a)
                            if (m = t[a],
                            m < e && ++n > _ && s("overflow"),
                            m == e) {
                                for (l = n,
                                p = C; f = p <= o ? w : p >= o + S ? S : p - o,
                                !(l < f); p += C)
                                    b = l - f,
                                    v = C - f,
                                    x.push(R(h(f + b % v, 0))),
                                    l = N(b / v);
                                x.push(R(h(l, 0))),
                                o = d(n, y, r == i),
                                n = 0,
                                ++r
                            }
                        ++n,
                        ++e
                    }
                    return x.join("")
                }
                function g(t) {
                    return c(t, function(t) {
                        return O.test(t) ? f(t.slice(4).toLowerCase()) : t
                    })
                }
                function y(t) {
                    return c(t, function(t) {
                        return I.test(t) ? "xn--" + m(t) : t
                    })
                }
                var v = ("object" == typeof e && e && e.nodeType,
                "object" == typeof t && t && t.nodeType,
                "object" == typeof r && r);
                var b, _ = 2147483647, C = 36, w = 1, S = 26, x = 38, k = 700, E = 72, A = 128, T = "-", O = /^xn--/, I = /[^\x20-\x7E]/, P = /[\x2E\u3002\uFF0E\uFF61]/g, D = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, M = C - w, N = Math.floor, R = String.fromCharCode;
                b = {
                    version: "1.4.1",
                    ucs2: {
                        decode: u,
                        encode: l
                    },
                    decode: f,
                    encode: m,
                    toASCII: y,
                    toUnicode: g
                },
                void 0 !== (i = function() {
                    return b
                }
                .call(e, n, e, t)) && (t.exports = i)
            }()
        }
        ).call(e, n(162)(t), n(37))
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            Properties: {
                "aria-current": 0,
                "aria-details": 0,
                "aria-disabled": 0,
                "aria-hidden": 0,
                "aria-invalid": 0,
                "aria-keyshortcuts": 0,
                "aria-label": 0,
                "aria-roledescription": 0,
                "aria-autocomplete": 0,
                "aria-checked": 0,
                "aria-expanded": 0,
                "aria-haspopup": 0,
                "aria-level": 0,
                "aria-modal": 0,
                "aria-multiline": 0,
                "aria-multiselectable": 0,
                "aria-orientation": 0,
                "aria-placeholder": 0,
                "aria-pressed": 0,
                "aria-readonly": 0,
                "aria-required": 0,
                "aria-selected": 0,
                "aria-sort": 0,
                "aria-valuemax": 0,
                "aria-valuemin": 0,
                "aria-valuenow": 0,
                "aria-valuetext": 0,
                "aria-atomic": 0,
                "aria-busy": 0,
                "aria-live": 0,
                "aria-relevant": 0,
                "aria-dropeffect": 0,
                "aria-grabbed": 0,
                "aria-activedescendant": 0,
                "aria-colcount": 0,
                "aria-colindex": 0,
                "aria-colspan": 0,
                "aria-controls": 0,
                "aria-describedby": 0,
                "aria-errormessage": 0,
                "aria-flowto": 0,
                "aria-labelledby": 0,
                "aria-owns": 0,
                "aria-posinset": 0,
                "aria-rowcount": 0,
                "aria-rowindex": 0,
                "aria-rowspan": 0,
                "aria-setsize": 0
            },
            DOMAttributeNames: {},
            DOMPropertyNames: {}
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(6)
          , i = n(89)
          , o = {
            focusDOMComponent: function() {
                i(r.getNodeFromInstance(this))
            }
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return (t.ctrlKey || t.altKey || t.metaKey) && !(t.ctrlKey && t.altKey)
        }
        function i(t) {
            switch (t) {
            case "topCompositionStart":
                return k.compositionStart;
            case "topCompositionEnd":
                return k.compositionEnd;
            case "topCompositionUpdate":
                return k.compositionUpdate
            }
        }
        function o(t, e) {
            return "topKeyDown" === t && e.keyCode === v
        }
        function s(t, e) {
            switch (t) {
            case "topKeyUp":
                return -1 !== y.indexOf(e.keyCode);
            case "topKeyDown":
                return e.keyCode !== v;
            case "topKeyPress":
            case "topMouseDown":
            case "topBlur":
                return !0;
            default:
                return !1
            }
        }
        function a(t) {
            var e = t.detail;
            return "object" == typeof e && "data"in e ? e.data : null
        }
        function c(t, e, n, r) {
            var c, u;
            if (b ? c = i(t) : A ? s(t, n) && (c = k.compositionEnd) : o(t, n) && (c = k.compositionStart),
            !c)
                return null;
            w && (A || c !== k.compositionStart ? c === k.compositionEnd && A && (u = A.getData()) : A = f.getPooled(r));
            var l = m.getPooled(c, e, n, r);
            if (u)
                l.data = u;
            else {
                var p = a(n);
                null !== p && (l.data = p)
            }
            return h.accumulateTwoPhaseDispatches(l),
            l
        }
        function u(t, e) {
            switch (t) {
            case "topCompositionEnd":
                return a(e);
            case "topKeyPress":
                return e.which !== S ? null : (E = !0,
                x);
            case "topTextInput":
                var n = e.data;
                return n === x && E ? null : n;
            default:
                return null
            }
        }
        function l(t, e) {
            if (A) {
                if ("topCompositionEnd" === t || !b && s(t, e)) {
                    var n = A.getData();
                    return f.release(A),
                    A = null,
                    n
                }
                return null
            }
            switch (t) {
            case "topPaste":
                return null;
            case "topKeyPress":
                return e.which && !r(e) ? String.fromCharCode(e.which) : null;
            case "topCompositionEnd":
                return w ? null : e.data;
            default:
                return null
            }
        }
        function p(t, e, n, r) {
            var i;
            if (!(i = C ? u(t, n) : l(t, n)))
                return null;
            var o = g.getPooled(k.beforeInput, e, n, r);
            return o.data = i,
            h.accumulateTwoPhaseDispatches(o),
            o
        }
        var h = n(31)
          , d = n(7)
          , f = n(275)
          , m = n(312)
          , g = n(315)
          , y = [9, 13, 27, 32]
          , v = 229
          , b = d.canUseDOM && "CompositionEvent"in window
          , _ = null;
        d.canUseDOM && "documentMode"in document && (_ = document.documentMode);
        var C = d.canUseDOM && "TextEvent"in window && !_ && !function() {
            var t = window.opera;
            return "object" == typeof t && "function" == typeof t.version && parseInt(t.version(), 10) <= 12
        }()
          , w = d.canUseDOM && (!b || _ && _ > 8 && _ <= 11)
          , S = 32
          , x = String.fromCharCode(S)
          , k = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
            }
        }
          , E = !1
          , A = null
          , T = {
            eventTypes: k,
            extractEvents: function(t, e, n, r) {
                return [c(t, e, n, r), p(t, e, n, r)]
            }
        };
        t.exports = T
    }
    , function(t, e, n) {
        "use strict";
        var r = n(103)
          , i = n(7)
          , o = (n(12),
        n(183),
        n(321))
          , s = n(190)
          , a = n(193)
          , c = (n(3),
        a(function(t) {
            return s(t)
        }))
          , u = !1
          , l = "cssFloat";
        if (i.canUseDOM) {
            var p = document.createElement("div").style;
            try {
                p.font = ""
            } catch (t) {
                u = !0
            }
            void 0 === document.documentElement.style.cssFloat && (l = "styleFloat")
        }
        var h = {
            createMarkupForStyles: function(t, e) {
                var n = "";
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var i = 0 === r.indexOf("--")
                          , s = t[r];
                        null != s && (n += c(r) + ":",
                        n += o(r, s, e, i) + ";")
                    }
                return n || null
            },
            setValueForStyles: function(t, e, n) {
                var i = t.style;
                for (var s in e)
                    if (e.hasOwnProperty(s)) {
                        var a = 0 === s.indexOf("--")
                          , c = o(s, e[s], n, a);
                        if ("float" !== s && "cssFloat" !== s || (s = l),
                        a)
                            i.setProperty(s, c);
                        else if (c)
                            i[s] = c;
                        else {
                            var p = u && r.shorthandPropertyExpansions[s];
                            if (p)
                                for (var h in p)
                                    i[h] = "";
                            else
                                i[s] = ""
                        }
                    }
            }
        };
        t.exports = h
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            var r = E.getPooled(P.change, t, e, n);
            return r.type = "change",
            w.accumulateTwoPhaseDispatches(r),
            r
        }
        function i(t) {
            var e = t.nodeName && t.nodeName.toLowerCase();
            return "select" === e || "input" === e && "file" === t.type
        }
        function o(t) {
            var e = r(M, t, T(t));
            k.batchedUpdates(s, e)
        }
        function s(t) {
            C.enqueueEvents(t),
            C.processEventQueue(!1)
        }
        function a(t, e) {
            D = t,
            M = e,
            D.attachEvent("onchange", o)
        }
        function c() {
            D && (D.detachEvent("onchange", o),
            D = null,
            M = null)
        }
        function u(t, e) {
            var n = A.updateValueIfChanged(t)
              , r = !0 === e.simulated && L._allowSimulatedPassThrough;
            if (n || r)
                return t
        }
        function l(t, e) {
            if ("topChange" === t)
                return e
        }
        function p(t, e, n) {
            "topFocus" === t ? (c(),
            a(e, n)) : "topBlur" === t && c()
        }
        function h(t, e) {
            D = t,
            M = e,
            D.attachEvent("onpropertychange", f)
        }
        function d() {
            D && (D.detachEvent("onpropertychange", f),
            D = null,
            M = null)
        }
        function f(t) {
            "value" === t.propertyName && u(M, t) && o(t)
        }
        function m(t, e, n) {
            "topFocus" === t ? (d(),
            h(e, n)) : "topBlur" === t && d()
        }
        function g(t, e, n) {
            if ("topSelectionChange" === t || "topKeyUp" === t || "topKeyDown" === t)
                return u(M, n)
        }
        function y(t) {
            var e = t.nodeName;
            return e && "input" === e.toLowerCase() && ("checkbox" === t.type || "radio" === t.type)
        }
        function v(t, e, n) {
            if ("topClick" === t)
                return u(e, n)
        }
        function b(t, e, n) {
            if ("topInput" === t || "topChange" === t)
                return u(e, n)
        }
        function _(t, e) {
            if (null != t) {
                var n = t._wrapperState || e._wrapperState;
                if (n && n.controlled && "number" === e.type) {
                    var r = "" + e.value;
                    e.getAttribute("value") !== r && e.setAttribute("value", r)
                }
            }
        }
        var C = n(30)
          , w = n(31)
          , S = n(7)
          , x = n(6)
          , k = n(13)
          , E = n(14)
          , A = n(119)
          , T = n(72)
          , O = n(73)
          , I = n(121)
          , P = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"]
            }
        }
          , D = null
          , M = null
          , N = !1;
        S.canUseDOM && (N = O("change") && (!document.documentMode || document.documentMode > 8));
        var R = !1;
        S.canUseDOM && (R = O("input") && (!("documentMode"in document) || document.documentMode > 9));
        var L = {
            eventTypes: P,
            _allowSimulatedPassThrough: !0,
            _isInputEventSupported: R,
            extractEvents: function(t, e, n, o) {
                var s, a, c = e ? x.getNodeFromInstance(e) : window;
                if (i(c) ? N ? s = l : a = p : I(c) ? R ? s = b : (s = g,
                a = m) : y(c) && (s = v),
                s) {
                    var u = s(t, e, n);
                    if (u) {
                        return r(u, n, o)
                    }
                }
                a && a(t, c, e),
                "topBlur" === t && _(e, c)
            }
        };
        t.exports = L
    }
    , function(t, e, n) {
        "use strict";
        var r = n(4)
          , i = n(22)
          , o = n(7)
          , s = n(186)
          , a = n(11)
          , c = (n(1),
        {
            dangerouslyReplaceNodeWithMarkup: function(t, e) {
                if (o.canUseDOM || r("56"),
                e || r("57"),
                "HTML" === t.nodeName && r("58"),
                "string" == typeof e) {
                    var n = s(e, a)[0];
                    t.parentNode.replaceChild(n, t)
                } else
                    i.replaceChildWithTree(t, e)
            }
        });
        t.exports = c
    }
    , function(t, e, n) {
        "use strict";
        var r = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(31)
          , i = n(6)
          , o = n(44)
          , s = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["topMouseOut", "topMouseOver"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["topMouseOut", "topMouseOver"]
            }
        }
          , a = {
            eventTypes: s,
            extractEvents: function(t, e, n, a) {
                if ("topMouseOver" === t && (n.relatedTarget || n.fromElement))
                    return null;
                if ("topMouseOut" !== t && "topMouseOver" !== t)
                    return null;
                var c;
                if (a.window === a)
                    c = a;
                else {
                    var u = a.ownerDocument;
                    c = u ? u.defaultView || u.parentWindow : window
                }
                var l, p;
                if ("topMouseOut" === t) {
                    l = e;
                    var h = n.relatedTarget || n.toElement;
                    p = h ? i.getClosestInstanceFromNode(h) : null
                } else
                    l = null,
                    p = e;
                if (l === p)
                    return null;
                var d = null == l ? c : i.getNodeFromInstance(l)
                  , f = null == p ? c : i.getNodeFromInstance(p)
                  , m = o.getPooled(s.mouseLeave, l, n, a);
                m.type = "mouseleave",
                m.target = d,
                m.relatedTarget = f;
                var g = o.getPooled(s.mouseEnter, p, n, a);
                return g.type = "mouseenter",
                g.target = f,
                g.relatedTarget = d,
                r.accumulateEnterLeaveDispatches(m, g, l, p),
                [m, g]
            }
        };
        t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            this._root = t,
            this._startText = this.getText(),
            this._fallbackText = null
        }
        var i = n(5)
          , o = n(19)
          , s = n(118);
        i(r.prototype, {
            destructor: function() {
                this._root = null,
                this._startText = null,
                this._fallbackText = null
            },
            getText: function() {
                return "value"in this._root ? this._root.value : this._root[s()]
            },
            getData: function() {
                if (this._fallbackText)
                    return this._fallbackText;
                var t, e, n = this._startText, r = n.length, i = this.getText(), o = i.length;
                for (t = 0; t < r && n[t] === i[t]; t++)
                    ;
                var s = r - t;
                for (e = 1; e <= s && n[r - e] === i[o - e]; e++)
                    ;
                var a = e > 1 ? 1 - e : void 0;
                return this._fallbackText = i.slice(t, a),
                this._fallbackText
            }
        }),
        o.addPoolingTo(r),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(23)
          , i = r.injection.MUST_USE_PROPERTY
          , o = r.injection.HAS_BOOLEAN_VALUE
          , s = r.injection.HAS_NUMERIC_VALUE
          , a = r.injection.HAS_POSITIVE_NUMERIC_VALUE
          , c = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE
          , u = {
            isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + r.ATTRIBUTE_NAME_CHAR + "]*$")),
            Properties: {
                accept: 0,
                acceptCharset: 0,
                accessKey: 0,
                action: 0,
                allowFullScreen: o,
                allowTransparency: 0,
                alt: 0,
                as: 0,
                async: o,
                autoComplete: 0,
                autoPlay: o,
                capture: o,
                cellPadding: 0,
                cellSpacing: 0,
                charSet: 0,
                challenge: 0,
                checked: i | o,
                cite: 0,
                classID: 0,
                className: 0,
                cols: a,
                colSpan: 0,
                content: 0,
                contentEditable: 0,
                contextMenu: 0,
                controls: o,
                coords: 0,
                crossOrigin: 0,
                data: 0,
                dateTime: 0,
                default: o,
                defer: o,
                dir: 0,
                disabled: o,
                download: c,
                draggable: 0,
                encType: 0,
                form: 0,
                formAction: 0,
                formEncType: 0,
                formMethod: 0,
                formNoValidate: o,
                formTarget: 0,
                frameBorder: 0,
                headers: 0,
                height: 0,
                hidden: o,
                high: 0,
                href: 0,
                hrefLang: 0,
                htmlFor: 0,
                httpEquiv: 0,
                icon: 0,
                id: 0,
                inputMode: 0,
                integrity: 0,
                is: 0,
                keyParams: 0,
                keyType: 0,
                kind: 0,
                label: 0,
                lang: 0,
                list: 0,
                loop: o,
                low: 0,
                manifest: 0,
                marginHeight: 0,
                marginWidth: 0,
                max: 0,
                maxLength: 0,
                media: 0,
                mediaGroup: 0,
                method: 0,
                min: 0,
                minLength: 0,
                multiple: i | o,
                muted: i | o,
                name: 0,
                nonce: 0,
                noValidate: o,
                open: o,
                optimum: 0,
                pattern: 0,
                placeholder: 0,
                playsInline: o,
                poster: 0,
                preload: 0,
                profile: 0,
                radioGroup: 0,
                readOnly: o,
                referrerPolicy: 0,
                rel: 0,
                required: o,
                reversed: o,
                role: 0,
                rows: a,
                rowSpan: s,
                sandbox: 0,
                scope: 0,
                scoped: o,
                scrolling: 0,
                seamless: o,
                selected: i | o,
                shape: 0,
                size: a,
                sizes: 0,
                span: a,
                spellCheck: 0,
                src: 0,
                srcDoc: 0,
                srcLang: 0,
                srcSet: 0,
                start: s,
                step: 0,
                style: 0,
                summary: 0,
                tabIndex: 0,
                target: 0,
                title: 0,
                type: 0,
                useMap: 0,
                value: 0,
                width: 0,
                wmode: 0,
                wrap: 0,
                about: 0,
                datatype: 0,
                inlist: 0,
                prefix: 0,
                property: 0,
                resource: 0,
                typeof: 0,
                vocab: 0,
                autoCapitalize: 0,
                autoCorrect: 0,
                autoSave: 0,
                color: 0,
                itemProp: 0,
                itemScope: o,
                itemType: 0,
                itemID: 0,
                itemRef: 0,
                results: 0,
                security: 0,
                unselectable: 0
            },
            DOMAttributeNames: {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            },
            DOMPropertyNames: {},
            DOMMutationMethods: {
                value: function(t, e) {
                    if (null == e)
                        return t.removeAttribute("value");
                    "number" !== t.type || !1 === t.hasAttribute("value") ? t.setAttribute("value", "" + e) : t.validity && !t.validity.badInput && t.ownerDocument.activeElement !== t && t.setAttribute("value", "" + e)
                }
            }
        };
        t.exports = u
    }
    , function(t, e, n) {
        "use strict";
        (function(e) {
            function r(t, e, n, r) {
                var i = void 0 === t[n];
                null != e && i && (t[n] = o(e, !0))
            }
            var i = n(24)
              , o = n(120)
              , s = (n(64),
            n(74))
              , a = n(123);
            n(3);
            void 0 !== e && n.i({
                NODE_ENV: "production"
            });
            var c = {
                instantiateChildren: function(t, e, n, i) {
                    if (null == t)
                        return null;
                    var o = {};
                    return a(t, r, o),
                    o
                },
                updateChildren: function(t, e, n, r, a, c, u, l, p) {
                    if (e || t) {
                        var h, d;
                        for (h in e)
                            if (e.hasOwnProperty(h)) {
                                d = t && t[h];
                                var f = d && d._currentElement
                                  , m = e[h];
                                if (null != d && s(f, m))
                                    i.receiveComponent(d, m, a, l),
                                    e[h] = d;
                                else {
                                    d && (r[h] = i.getHostNode(d),
                                    i.unmountComponent(d, !1));
                                    var g = o(m, !0);
                                    e[h] = g;
                                    var y = i.mountComponent(g, a, c, u, l, p);
                                    n.push(y)
                                }
                            }
                        for (h in t)
                            !t.hasOwnProperty(h) || e && e.hasOwnProperty(h) || (d = t[h],
                            r[h] = i.getHostNode(d),
                            i.unmountComponent(d, !1))
                    }
                },
                unmountChildren: function(t, e) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var r = t[n];
                            i.unmountComponent(r, e)
                        }
                }
            };
            t.exports = c
        }
        ).call(e, n(99))
    }
    , function(t, e, n) {
        "use strict";
        var r = n(60)
          , i = n(285)
          , o = {
            processChildrenUpdates: i.dangerouslyProcessChildrenUpdates,
            replaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {}
        function i(t) {
            return !(!t.prototype || !t.prototype.isReactComponent)
        }
        function o(t) {
            return !(!t.prototype || !t.prototype.isPureReactComponent)
        }
        var s = n(4)
          , a = n(5)
          , c = n(25)
          , u = n(66)
          , l = n(15)
          , p = n(67)
          , h = n(32)
          , d = (n(12),
        n(113))
          , f = n(24)
          , m = n(42)
          , g = (n(1),
        n(54))
          , y = n(74)
          , v = (n(3),
        {
            ImpureClass: 0,
            PureClass: 1,
            StatelessFunctional: 2
        });
        r.prototype.render = function() {
            var t = h.get(this)._currentElement.type
              , e = t(this.props, this.context, this.updater);
            return e
        }
        ;
        var b = 1
          , _ = {
            construct: function(t) {
                this._currentElement = t,
                this._rootNodeID = 0,
                this._compositeType = null,
                this._instance = null,
                this._hostParent = null,
                this._hostContainerInfo = null,
                this._updateBatchNumber = null,
                this._pendingElement = null,
                this._pendingStateQueue = null,
                this._pendingReplaceState = !1,
                this._pendingForceUpdate = !1,
                this._renderedNodeType = null,
                this._renderedComponent = null,
                this._context = null,
                this._mountOrder = 0,
                this._topLevelWrapper = null,
                this._pendingCallbacks = null,
                this._calledComponentWillUnmount = !1
            },
            mountComponent: function(t, e, n, a) {
                this._context = a,
                this._mountOrder = b++,
                this._hostParent = e,
                this._hostContainerInfo = n;
                var u, l = this._currentElement.props, p = this._processContext(a), d = this._currentElement.type, f = t.getUpdateQueue(), g = i(d), y = this._constructComponent(g, l, p, f);
                g || null != y && null != y.render ? o(d) ? this._compositeType = v.PureClass : this._compositeType = v.ImpureClass : (u = y,
                null === y || !1 === y || c.isValidElement(y) || s("105", d.displayName || d.name || "Component"),
                y = new r(d),
                this._compositeType = v.StatelessFunctional);
                y.props = l,
                y.context = p,
                y.refs = m,
                y.updater = f,
                this._instance = y,
                h.set(y, this);
                var _ = y.state;
                void 0 === _ && (y.state = _ = null),
                ("object" != typeof _ || Array.isArray(_)) && s("106", this.getName() || "ReactCompositeComponent"),
                this._pendingStateQueue = null,
                this._pendingReplaceState = !1,
                this._pendingForceUpdate = !1;
                var C;
                return C = y.unstable_handleError ? this.performInitialMountWithErrorHandling(u, e, n, t, a) : this.performInitialMount(u, e, n, t, a),
                y.componentDidMount && t.getReactMountReady().enqueue(y.componentDidMount, y),
                C
            },
            _constructComponent: function(t, e, n, r) {
                return this._constructComponentWithoutOwner(t, e, n, r)
            },
            _constructComponentWithoutOwner: function(t, e, n, r) {
                var i = this._currentElement.type;
                return t ? new i(e,n,r) : i(e, n, r)
            },
            performInitialMountWithErrorHandling: function(t, e, n, r, i) {
                var o, s = r.checkpoint();
                try {
                    o = this.performInitialMount(t, e, n, r, i)
                } catch (a) {
                    r.rollback(s),
                    this._instance.unstable_handleError(a),
                    this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)),
                    s = r.checkpoint(),
                    this._renderedComponent.unmountComponent(!0),
                    r.rollback(s),
                    o = this.performInitialMount(t, e, n, r, i)
                }
                return o
            },
            performInitialMount: function(t, e, n, r, i) {
                var o = this._instance
                  , s = 0;
                o.componentWillMount && (o.componentWillMount(),
                this._pendingStateQueue && (o.state = this._processPendingState(o.props, o.context))),
                void 0 === t && (t = this._renderValidatedComponent());
                var a = d.getType(t);
                this._renderedNodeType = a;
                var c = this._instantiateReactComponent(t, a !== d.EMPTY);
                this._renderedComponent = c;
                var u = f.mountComponent(c, r, e, n, this._processChildContext(i), s);
                return u
            },
            getHostNode: function() {
                return f.getHostNode(this._renderedComponent)
            },
            unmountComponent: function(t) {
                if (this._renderedComponent) {
                    var e = this._instance;
                    if (e.componentWillUnmount && !e._calledComponentWillUnmount)
                        if (e._calledComponentWillUnmount = !0,
                        t) {
                            var n = this.getName() + ".componentWillUnmount()";
                            p.invokeGuardedCallback(n, e.componentWillUnmount.bind(e))
                        } else
                            e.componentWillUnmount();
                    this._renderedComponent && (f.unmountComponent(this._renderedComponent, t),
                    this._renderedNodeType = null,
                    this._renderedComponent = null,
                    this._instance = null),
                    this._pendingStateQueue = null,
                    this._pendingReplaceState = !1,
                    this._pendingForceUpdate = !1,
                    this._pendingCallbacks = null,
                    this._pendingElement = null,
                    this._context = null,
                    this._rootNodeID = 0,
                    this._topLevelWrapper = null,
                    h.remove(e)
                }
            },
            _maskContext: function(t) {
                var e = this._currentElement.type
                  , n = e.contextTypes;
                if (!n)
                    return m;
                var r = {};
                for (var i in n)
                    r[i] = t[i];
                return r
            },
            _processContext: function(t) {
                var e = this._maskContext(t);
                return e
            },
            _processChildContext: function(t) {
                var e, n = this._currentElement.type, r = this._instance;
                if (r.getChildContext && (e = r.getChildContext()),
                e) {
                    "object" != typeof n.childContextTypes && s("107", this.getName() || "ReactCompositeComponent");
                    for (var i in e)
                        i in n.childContextTypes || s("108", this.getName() || "ReactCompositeComponent", i);
                    return a({}, t, e)
                }
                return t
            },
            _checkContextTypes: function(t, e, n) {},
            receiveComponent: function(t, e, n) {
                var r = this._currentElement
                  , i = this._context;
                this._pendingElement = null,
                this.updateComponent(e, r, t, i, n)
            },
            performUpdateIfNecessary: function(t) {
                null != this._pendingElement ? f.receiveComponent(this, this._pendingElement, t, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(t, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
            },
            updateComponent: function(t, e, n, r, i) {
                var o = this._instance;
                null == o && s("136", this.getName() || "ReactCompositeComponent");
                var a, c = !1;
                this._context === i ? a = o.context : (a = this._processContext(i),
                c = !0);
                var u = e.props
                  , l = n.props;
                e !== n && (c = !0),
                c && o.componentWillReceiveProps && o.componentWillReceiveProps(l, a);
                var p = this._processPendingState(l, a)
                  , h = !0;
                this._pendingForceUpdate || (o.shouldComponentUpdate ? h = o.shouldComponentUpdate(l, p, a) : this._compositeType === v.PureClass && (h = !g(u, l) || !g(o.state, p))),
                this._updateBatchNumber = null,
                h ? (this._pendingForceUpdate = !1,
                this._performComponentUpdate(n, l, p, a, t, i)) : (this._currentElement = n,
                this._context = i,
                o.props = l,
                o.state = p,
                o.context = a)
            },
            _processPendingState: function(t, e) {
                var n = this._instance
                  , r = this._pendingStateQueue
                  , i = this._pendingReplaceState;
                if (this._pendingReplaceState = !1,
                this._pendingStateQueue = null,
                !r)
                    return n.state;
                if (i && 1 === r.length)
                    return r[0];
                for (var o = a({}, i ? r[0] : n.state), s = i ? 1 : 0; s < r.length; s++) {
                    var c = r[s];
                    a(o, "function" == typeof c ? c.call(n, o, t, e) : c)
                }
                return o
            },
            _performComponentUpdate: function(t, e, n, r, i, o) {
                var s, a, c, u = this._instance, l = Boolean(u.componentDidUpdate);
                l && (s = u.props,
                a = u.state,
                c = u.context),
                u.componentWillUpdate && u.componentWillUpdate(e, n, r),
                this._currentElement = t,
                this._context = o,
                u.props = e,
                u.state = n,
                u.context = r,
                this._updateRenderedComponent(i, o),
                l && i.getReactMountReady().enqueue(u.componentDidUpdate.bind(u, s, a, c), u)
            },
            _updateRenderedComponent: function(t, e) {
                var n = this._renderedComponent
                  , r = n._currentElement
                  , i = this._renderValidatedComponent()
                  , o = 0;
                if (y(r, i))
                    f.receiveComponent(n, i, t, this._processChildContext(e));
                else {
                    var s = f.getHostNode(n);
                    f.unmountComponent(n, !1);
                    var a = d.getType(i);
                    this._renderedNodeType = a;
                    var c = this._instantiateReactComponent(i, a !== d.EMPTY);
                    this._renderedComponent = c;
                    var u = f.mountComponent(c, t, this._hostParent, this._hostContainerInfo, this._processChildContext(e), o);
                    this._replaceNodeWithMarkup(s, u, n)
                }
            },
            _replaceNodeWithMarkup: function(t, e, n) {
                u.replaceNodeWithMarkup(t, e, n)
            },
            _renderValidatedComponentWithoutOwnerOrContext: function() {
                var t = this._instance;
                return t.render()
            },
            _renderValidatedComponent: function() {
                var t;
                if (this._compositeType !== v.StatelessFunctional) {
                    l.current = this;
                    try {
                        t = this._renderValidatedComponentWithoutOwnerOrContext()
                    } finally {
                        l.current = null
                    }
                } else
                    t = this._renderValidatedComponentWithoutOwnerOrContext();
                return null === t || !1 === t || c.isValidElement(t) || s("109", this.getName() || "ReactCompositeComponent"),
                t
            },
            attachRef: function(t, e) {
                var n = this.getPublicInstance();
                null == n && s("110");
                var r = e.getPublicInstance();
                (n.refs === m ? n.refs = {} : n.refs)[t] = r
            },
            detachRef: function(t) {
                delete this.getPublicInstance().refs[t]
            },
            getName: function() {
                var t = this._currentElement.type
                  , e = this._instance && this._instance.constructor;
                return t.displayName || e && e.displayName || t.name || e && e.name || null
            },
            getPublicInstance: function() {
                var t = this._instance;
                return this._compositeType === v.StatelessFunctional ? null : t
            },
            _instantiateReactComponent: null
        };
        t.exports = _
    }
    , function(t, e, n) {
        "use strict";
        var r = n(6)
          , i = n(293)
          , o = n(112)
          , s = n(24)
          , a = n(13)
          , c = n(306)
          , u = n(322)
          , l = n(117)
          , p = n(329);
        n(3);
        i.inject();
        var h = {
            findDOMNode: u,
            render: o.render,
            unmountComponentAtNode: o.unmountComponentAtNode,
            version: c,
            unstable_batchedUpdates: a.batchedUpdates,
            unstable_renderSubtreeIntoContainer: p
        };
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
            ComponentTree: {
                getClosestInstanceFromNode: r.getClosestInstanceFromNode,
                getNodeFromInstance: function(t) {
                    return t._renderedComponent && (t = l(t)),
                    t ? r.getNodeFromInstance(t) : null
                }
            },
            Mount: o,
            Reconciler: s
        });
        t.exports = h
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (t) {
                var e = t._currentElement._owner || null;
                if (e) {
                    var n = e.getName();
                    if (n)
                        return " This DOM node was rendered by `" + n + "`."
                }
            }
            return ""
        }
        function i(t, e) {
            e && (Y[t._tag] && (null != e.children || null != e.dangerouslySetInnerHTML) && g("137", t._tag, t._currentElement._owner ? " Check the render method of " + t._currentElement._owner.getName() + "." : ""),
            null != e.dangerouslySetInnerHTML && (null != e.children && g("60"),
            "object" == typeof e.dangerouslySetInnerHTML && q in e.dangerouslySetInnerHTML || g("61")),
            null != e.style && "object" != typeof e.style && g("62", r(t)))
        }
        function o(t, e, n, r) {
            if (!(r instanceof N)) {
                var i = t._hostContainerInfo
                  , o = i._node && i._node.nodeType === W
                  , a = o ? i._node : i._ownerDocument;
                B(e, a),
                r.getReactMountReady().enqueue(s, {
                    inst: t,
                    registrationName: e,
                    listener: n
                })
            }
        }
        function s() {
            var t = this;
            x.putListener(t.inst, t.registrationName, t.listener)
        }
        function a() {
            var t = this;
            O.postMountWrapper(t)
        }
        function c() {
            var t = this;
            D.postMountWrapper(t)
        }
        function u() {
            var t = this;
            I.postMountWrapper(t)
        }
        function l() {
            L.track(this)
        }
        function p() {
            var t = this;
            t._rootNodeID || g("63");
            var e = z(t);
            switch (e || g("64"),
            t._tag) {
            case "iframe":
            case "object":
                t._wrapperState.listeners = [E.trapBubbledEvent("topLoad", "load", e)];
                break;
            case "video":
            case "audio":
                t._wrapperState.listeners = [];
                for (var n in G)
                    G.hasOwnProperty(n) && t._wrapperState.listeners.push(E.trapBubbledEvent(n, G[n], e));
                break;
            case "source":
                t._wrapperState.listeners = [E.trapBubbledEvent("topError", "error", e)];
                break;
            case "img":
                t._wrapperState.listeners = [E.trapBubbledEvent("topError", "error", e), E.trapBubbledEvent("topLoad", "load", e)];
                break;
            case "form":
                t._wrapperState.listeners = [E.trapBubbledEvent("topReset", "reset", e), E.trapBubbledEvent("topSubmit", "submit", e)];
                break;
            case "input":
            case "select":
            case "textarea":
                t._wrapperState.listeners = [E.trapBubbledEvent("topInvalid", "invalid", e)]
            }
        }
        function h() {
            P.postUpdateWrapper(this)
        }
        function d(t) {
            X.call(J, t) || (Z.test(t) || g("65", t),
            J[t] = !0)
        }
        function f(t, e) {
            return t.indexOf("-") >= 0 || null != e.is
        }
        function m(t) {
            var e = t.type;
            d(e),
            this._currentElement = t,
            this._tag = e.toLowerCase(),
            this._namespaceURI = null,
            this._renderedChildren = null,
            this._previousStyle = null,
            this._previousStyleCopy = null,
            this._hostNode = null,
            this._hostParent = null,
            this._rootNodeID = 0,
            this._domID = 0,
            this._hostContainerInfo = null,
            this._wrapperState = null,
            this._topLevelWrapper = null,
            this._flags = 0
        }
        var g = n(4)
          , y = n(5)
          , v = n(268)
          , b = n(270)
          , _ = n(22)
          , C = n(61)
          , w = n(23)
          , S = n(105)
          , x = n(30)
          , k = n(62)
          , E = n(43)
          , A = n(106)
          , T = n(6)
          , O = n(286)
          , I = n(287)
          , P = n(107)
          , D = n(290)
          , M = (n(12),
        n(299))
          , N = n(304)
          , R = (n(11),
        n(46))
          , L = (n(1),
        n(73),
        n(54),
        n(119))
          , j = (n(75),
        n(3),
        A)
          , F = x.deleteListener
          , z = T.getNodeFromInstance
          , B = E.listenTo
          , U = k.registrationNameModules
          , V = {
            string: !0,
            number: !0
        }
          , q = "__html"
          , H = {
            children: null,
            dangerouslySetInnerHTML: null,
            suppressContentEditableWarning: null
        }
          , W = 11
          , G = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        }
          , K = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }
          , $ = {
            listing: !0,
            pre: !0,
            textarea: !0
        }
          , Y = y({
            menuitem: !0
        }, K)
          , Z = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/
          , J = {}
          , X = {}.hasOwnProperty
          , Q = 1;
        m.displayName = "ReactDOMComponent",
        m.Mixin = {
            mountComponent: function(t, e, n, r) {
                this._rootNodeID = Q++,
                this._domID = n._idCounter++,
                this._hostParent = e,
                this._hostContainerInfo = n;
                var o = this._currentElement.props;
                switch (this._tag) {
                case "audio":
                case "form":
                case "iframe":
                case "img":
                case "link":
                case "object":
                case "source":
                case "video":
                    this._wrapperState = {
                        listeners: null
                    },
                    t.getReactMountReady().enqueue(p, this);
                    break;
                case "input":
                    O.mountWrapper(this, o, e),
                    o = O.getHostProps(this, o),
                    t.getReactMountReady().enqueue(l, this),
                    t.getReactMountReady().enqueue(p, this);
                    break;
                case "option":
                    I.mountWrapper(this, o, e),
                    o = I.getHostProps(this, o);
                    break;
                case "select":
                    P.mountWrapper(this, o, e),
                    o = P.getHostProps(this, o),
                    t.getReactMountReady().enqueue(p, this);
                    break;
                case "textarea":
                    D.mountWrapper(this, o, e),
                    o = D.getHostProps(this, o),
                    t.getReactMountReady().enqueue(l, this),
                    t.getReactMountReady().enqueue(p, this)
                }
                i(this, o);
                var s, h;
                null != e ? (s = e._namespaceURI,
                h = e._tag) : n._tag && (s = n._namespaceURI,
                h = n._tag),
                (null == s || s === C.svg && "foreignobject" === h) && (s = C.html),
                s === C.html && ("svg" === this._tag ? s = C.svg : "math" === this._tag && (s = C.mathml)),
                this._namespaceURI = s;
                var d;
                if (t.useCreateElement) {
                    var f, m = n._ownerDocument;
                    if (s === C.html)
                        if ("script" === this._tag) {
                            var g = m.createElement("div")
                              , y = this._currentElement.type;
                            g.innerHTML = "<" + y + "></" + y + ">",
                            f = g.removeChild(g.firstChild)
                        } else
                            f = o.is ? m.createElement(this._currentElement.type, o.is) : m.createElement(this._currentElement.type);
                    else
                        f = m.createElementNS(s, this._currentElement.type);
                    T.precacheNode(this, f),
                    this._flags |= j.hasCachedChildNodes,
                    this._hostParent || S.setAttributeForRoot(f),
                    this._updateDOMProperties(null, o, t);
                    var b = _(f);
                    this._createInitialChildren(t, o, r, b),
                    d = b
                } else {
                    var w = this._createOpenTagMarkupAndPutListeners(t, o)
                      , x = this._createContentMarkup(t, o, r);
                    d = !x && K[this._tag] ? w + "/>" : w + ">" + x + "</" + this._currentElement.type + ">"
                }
                switch (this._tag) {
                case "input":
                    t.getReactMountReady().enqueue(a, this),
                    o.autoFocus && t.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "textarea":
                    t.getReactMountReady().enqueue(c, this),
                    o.autoFocus && t.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "select":
                case "button":
                    o.autoFocus && t.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "option":
                    t.getReactMountReady().enqueue(u, this)
                }
                return d
            },
            _createOpenTagMarkupAndPutListeners: function(t, e) {
                var n = "<" + this._currentElement.type;
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var i = e[r];
                        if (null != i)
                            if (U.hasOwnProperty(r))
                                i && o(this, r, i, t);
                            else {
                                "style" === r && (i && (i = this._previousStyleCopy = y({}, e.style)),
                                i = b.createMarkupForStyles(i, this));
                                var s = null;
                                null != this._tag && f(this._tag, e) ? H.hasOwnProperty(r) || (s = S.createMarkupForCustomAttribute(r, i)) : s = S.createMarkupForProperty(r, i),
                                s && (n += " " + s)
                            }
                    }
                return t.renderToStaticMarkup ? n : (this._hostParent || (n += " " + S.createMarkupForRoot()),
                n += " " + S.createMarkupForID(this._domID))
            },
            _createContentMarkup: function(t, e, n) {
                var r = ""
                  , i = e.dangerouslySetInnerHTML;
                if (null != i)
                    null != i.__html && (r = i.__html);
                else {
                    var o = V[typeof e.children] ? e.children : null
                      , s = null != o ? null : e.children;
                    if (null != o)
                        r = R(o);
                    else if (null != s) {
                        var a = this.mountChildren(s, t, n);
                        r = a.join("")
                    }
                }
                return $[this._tag] && "\n" === r.charAt(0) ? "\n" + r : r
            },
            _createInitialChildren: function(t, e, n, r) {
                var i = e.dangerouslySetInnerHTML;
                if (null != i)
                    null != i.__html && _.queueHTML(r, i.__html);
                else {
                    var o = V[typeof e.children] ? e.children : null
                      , s = null != o ? null : e.children;
                    if (null != o)
                        "" !== o && _.queueText(r, o);
                    else if (null != s)
                        for (var a = this.mountChildren(s, t, n), c = 0; c < a.length; c++)
                            _.queueChild(r, a[c])
                }
            },
            receiveComponent: function(t, e, n) {
                var r = this._currentElement;
                this._currentElement = t,
                this.updateComponent(e, r, t, n)
            },
            updateComponent: function(t, e, n, r) {
                var o = e.props
                  , s = this._currentElement.props;
                switch (this._tag) {
                case "input":
                    o = O.getHostProps(this, o),
                    s = O.getHostProps(this, s);
                    break;
                case "option":
                    o = I.getHostProps(this, o),
                    s = I.getHostProps(this, s);
                    break;
                case "select":
                    o = P.getHostProps(this, o),
                    s = P.getHostProps(this, s);
                    break;
                case "textarea":
                    o = D.getHostProps(this, o),
                    s = D.getHostProps(this, s)
                }
                switch (i(this, s),
                this._updateDOMProperties(o, s, t),
                this._updateDOMChildren(o, s, t, r),
                this._tag) {
                case "input":
                    O.updateWrapper(this);
                    break;
                case "textarea":
                    D.updateWrapper(this);
                    break;
                case "select":
                    t.getReactMountReady().enqueue(h, this)
                }
            },
            _updateDOMProperties: function(t, e, n) {
                var r, i, s;
                for (r in t)
                    if (!e.hasOwnProperty(r) && t.hasOwnProperty(r) && null != t[r])
                        if ("style" === r) {
                            var a = this._previousStyleCopy;
                            for (i in a)
                                a.hasOwnProperty(i) && (s = s || {},
                                s[i] = "");
                            this._previousStyleCopy = null
                        } else
                            U.hasOwnProperty(r) ? t[r] && F(this, r) : f(this._tag, t) ? H.hasOwnProperty(r) || S.deleteValueForAttribute(z(this), r) : (w.properties[r] || w.isCustomAttribute(r)) && S.deleteValueForProperty(z(this), r);
                for (r in e) {
                    var c = e[r]
                      , u = "style" === r ? this._previousStyleCopy : null != t ? t[r] : void 0;
                    if (e.hasOwnProperty(r) && c !== u && (null != c || null != u))
                        if ("style" === r)
                            if (c ? c = this._previousStyleCopy = y({}, c) : this._previousStyleCopy = null,
                            u) {
                                for (i in u)
                                    !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (s = s || {},
                                    s[i] = "");
                                for (i in c)
                                    c.hasOwnProperty(i) && u[i] !== c[i] && (s = s || {},
                                    s[i] = c[i])
                            } else
                                s = c;
                        else if (U.hasOwnProperty(r))
                            c ? o(this, r, c, n) : u && F(this, r);
                        else if (f(this._tag, e))
                            H.hasOwnProperty(r) || S.setValueForAttribute(z(this), r, c);
                        else if (w.properties[r] || w.isCustomAttribute(r)) {
                            var l = z(this);
                            null != c ? S.setValueForProperty(l, r, c) : S.deleteValueForProperty(l, r)
                        }
                }
                s && b.setValueForStyles(z(this), s, this)
            },
            _updateDOMChildren: function(t, e, n, r) {
                var i = V[typeof t.children] ? t.children : null
                  , o = V[typeof e.children] ? e.children : null
                  , s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html
                  , a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html
                  , c = null != i ? null : t.children
                  , u = null != o ? null : e.children
                  , l = null != i || null != s
                  , p = null != o || null != a;
                null != c && null == u ? this.updateChildren(null, n, r) : l && !p && this.updateTextContent(""),
                null != o ? i !== o && this.updateTextContent("" + o) : null != a ? s !== a && this.updateMarkup("" + a) : null != u && this.updateChildren(u, n, r)
            },
            getHostNode: function() {
                return z(this)
            },
            unmountComponent: function(t) {
                switch (this._tag) {
                case "audio":
                case "form":
                case "iframe":
                case "img":
                case "link":
                case "object":
                case "source":
                case "video":
                    var e = this._wrapperState.listeners;
                    if (e)
                        for (var n = 0; n < e.length; n++)
                            e[n].remove();
                    break;
                case "input":
                case "textarea":
                    L.stopTracking(this);
                    break;
                case "html":
                case "head":
                case "body":
                    g("66", this._tag)
                }
                this.unmountChildren(t),
                T.uncacheNode(this),
                x.deleteAllListeners(this),
                this._rootNodeID = 0,
                this._domID = 0,
                this._wrapperState = null
            },
            getPublicInstance: function() {
                return z(this)
            }
        },
        y(m.prototype, m.Mixin, M.Mixin),
        t.exports = m
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = {
                _topLevelWrapper: t,
                _idCounter: 1,
                _ownerDocument: e ? e.nodeType === i ? e : e.ownerDocument : null,
                _node: e,
                _tag: e ? e.nodeName.toLowerCase() : null,
                _namespaceURI: e ? e.namespaceURI : null
            };
            return n
        }
        var i = (n(75),
        9);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5)
          , i = n(22)
          , o = n(6)
          , s = function(t) {
            this._currentElement = null,
            this._hostNode = null,
            this._hostParent = null,
            this._hostContainerInfo = null,
            this._domID = 0
        };
        r(s.prototype, {
            mountComponent: function(t, e, n, r) {
                var s = n._idCounter++;
                this._domID = s,
                this._hostParent = e,
                this._hostContainerInfo = n;
                var a = " react-empty: " + this._domID + " ";
                if (t.useCreateElement) {
                    var c = n._ownerDocument
                      , u = c.createComment(a);
                    return o.precacheNode(this, u),
                    i(u)
                }
                return t.renderToStaticMarkup ? "" : "\x3c!--" + a + "--\x3e"
            },
            receiveComponent: function() {},
            getHostNode: function() {
                return o.getNodeFromInstance(this)
            },
            unmountComponent: function() {
                o.uncacheNode(this)
            }
        }),
        t.exports = s
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            useCreateElement: !0,
            useFiber: !1
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(60)
          , i = n(6)
          , o = {
            dangerouslyProcessChildrenUpdates: function(t, e) {
                var n = i.getNodeFromInstance(t);
                r.processUpdates(n, e)
            }
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            this._rootNodeID && h.updateWrapper(this)
        }
        function i(t) {
            return "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
        function o(t) {
            var e = this._currentElement.props
              , n = u.executeOnChange(e, t);
            p.asap(r, this);
            var i = e.name;
            if ("radio" === e.type && null != i) {
                for (var o = l.getNodeFromInstance(this), a = o; a.parentNode; )
                    a = a.parentNode;
                for (var c = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), h = 0; h < c.length; h++) {
                    var d = c[h];
                    if (d !== o && d.form === o.form) {
                        var f = l.getInstanceFromNode(d);
                        f || s("90"),
                        p.asap(r, f)
                    }
                }
            }
            return n
        }
        var s = n(4)
          , a = n(5)
          , c = n(105)
          , u = n(65)
          , l = n(6)
          , p = n(13)
          , h = (n(1),
        n(3),
        {
            getHostProps: function(t, e) {
                var n = u.getValue(e)
                  , r = u.getChecked(e);
                return a({
                    type: void 0,
                    step: void 0,
                    min: void 0,
                    max: void 0
                }, e, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: null != n ? n : t._wrapperState.initialValue,
                    checked: null != r ? r : t._wrapperState.initialChecked,
                    onChange: t._wrapperState.onChange
                })
            },
            mountWrapper: function(t, e) {
                var n = e.defaultValue;
                t._wrapperState = {
                    initialChecked: null != e.checked ? e.checked : e.defaultChecked,
                    initialValue: null != e.value ? e.value : n,
                    listeners: null,
                    onChange: o.bind(t),
                    controlled: i(e)
                }
            },
            updateWrapper: function(t) {
                var e = t._currentElement.props
                  , n = e.checked;
                null != n && c.setValueForProperty(l.getNodeFromInstance(t), "checked", n || !1);
                var r = l.getNodeFromInstance(t)
                  , i = u.getValue(e);
                if (null != i)
                    if (0 === i && "" === r.value)
                        r.value = "0";
                    else if ("number" === e.type) {
                        var o = parseFloat(r.value, 10) || 0;
                        (i != o || i == o && r.value != i) && (r.value = "" + i)
                    } else
                        r.value !== "" + i && (r.value = "" + i);
                else
                    null == e.value && null != e.defaultValue && r.defaultValue !== "" + e.defaultValue && (r.defaultValue = "" + e.defaultValue),
                    null == e.checked && null != e.defaultChecked && (r.defaultChecked = !!e.defaultChecked)
            },
            postMountWrapper: function(t) {
                var e = t._currentElement.props
                  , n = l.getNodeFromInstance(t);
                switch (e.type) {
                case "submit":
                case "reset":
                    break;
                case "color":
                case "date":
                case "datetime":
                case "datetime-local":
                case "month":
                case "time":
                case "week":
                    n.value = "",
                    n.value = n.defaultValue;
                    break;
                default:
                    n.value = n.value
                }
                var r = n.name;
                "" !== r && (n.name = ""),
                n.defaultChecked = !n.defaultChecked,
                n.defaultChecked = !n.defaultChecked,
                "" !== r && (n.name = r)
            }
        });
        t.exports = h
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = "";
            return o.Children.forEach(t, function(t) {
                null != t && ("string" == typeof t || "number" == typeof t ? e += t : c || (c = !0))
            }),
            e
        }
        var i = n(5)
          , o = n(25)
          , s = n(6)
          , a = n(107)
          , c = (n(3),
        !1)
          , u = {
            mountWrapper: function(t, e, n) {
                var i = null;
                if (null != n) {
                    var o = n;
                    "optgroup" === o._tag && (o = o._hostParent),
                    null != o && "select" === o._tag && (i = a.getSelectValueContext(o))
                }
                var s = null;
                if (null != i) {
                    var c;
                    if (c = null != e.value ? e.value + "" : r(e.children),
                    s = !1,
                    Array.isArray(i)) {
                        for (var u = 0; u < i.length; u++)
                            if ("" + i[u] === c) {
                                s = !0;
                                break
                            }
                    } else
                        s = "" + i === c
                }
                t._wrapperState = {
                    selected: s
                }
            },
            postMountWrapper: function(t) {
                var e = t._currentElement.props;
                if (null != e.value) {
                    s.getNodeFromInstance(t).setAttribute("value", e.value)
                }
            },
            getHostProps: function(t, e) {
                var n = i({
                    selected: void 0,
                    children: void 0
                }, e);
                null != t._wrapperState.selected && (n.selected = t._wrapperState.selected);
                var o = r(e.children);
                return o && (n.children = o),
                n
            }
        };
        t.exports = u
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return t === n && e === r
        }
        function i(t) {
            var e = document.selection
              , n = e.createRange()
              , r = n.text.length
              , i = n.duplicate();
            i.moveToElementText(t),
            i.setEndPoint("EndToStart", n);
            var o = i.text.length;
            return {
                start: o,
                end: o + r
            }
        }
        function o(t) {
            var e = window.getSelection && window.getSelection();
            if (!e || 0 === e.rangeCount)
                return null;
            var n = e.anchorNode
              , i = e.anchorOffset
              , o = e.focusNode
              , s = e.focusOffset
              , a = e.getRangeAt(0);
            try {
                a.startContainer.nodeType,
                a.endContainer.nodeType
            } catch (t) {
                return null
            }
            var c = r(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset)
              , u = c ? 0 : a.toString().length
              , l = a.cloneRange();
            l.selectNodeContents(t),
            l.setEnd(a.startContainer, a.startOffset);
            var p = r(l.startContainer, l.startOffset, l.endContainer, l.endOffset)
              , h = p ? 0 : l.toString().length
              , d = h + u
              , f = document.createRange();
            f.setStart(n, i),
            f.setEnd(o, s);
            var m = f.collapsed;
            return {
                start: m ? d : h,
                end: m ? h : d
            }
        }
        function s(t, e) {
            var n, r, i = document.selection.createRange().duplicate();
            void 0 === e.end ? (n = e.start,
            r = n) : e.start > e.end ? (n = e.end,
            r = e.start) : (n = e.start,
            r = e.end),
            i.moveToElementText(t),
            i.moveStart("character", n),
            i.setEndPoint("EndToStart", i),
            i.moveEnd("character", r - n),
            i.select()
        }
        function a(t, e) {
            if (window.getSelection) {
                var n = window.getSelection()
                  , r = t[l()].length
                  , i = Math.min(e.start, r)
                  , o = void 0 === e.end ? i : Math.min(e.end, r);
                if (!n.extend && i > o) {
                    var s = o;
                    o = i,
                    i = s
                }
                var a = u(t, i)
                  , c = u(t, o);
                if (a && c) {
                    var p = document.createRange();
                    p.setStart(a.node, a.offset),
                    n.removeAllRanges(),
                    i > o ? (n.addRange(p),
                    n.extend(c.node, c.offset)) : (p.setEnd(c.node, c.offset),
                    n.addRange(p))
                }
            }
        }
        var c = n(7)
          , u = n(326)
          , l = n(118)
          , p = c.canUseDOM && "selection"in document && !("getSelection"in window)
          , h = {
            getOffsets: p ? i : o,
            setOffsets: p ? s : a
        };
        t.exports = h
    }
    , function(t, e, n) {
        "use strict";
        var r = n(4)
          , i = n(5)
          , o = n(60)
          , s = n(22)
          , a = n(6)
          , c = n(46)
          , u = (n(1),
        n(75),
        function(t) {
            this._currentElement = t,
            this._stringText = "" + t,
            this._hostNode = null,
            this._hostParent = null,
            this._domID = 0,
            this._mountIndex = 0,
            this._closingComment = null,
            this._commentNodes = null
        }
        );
        i(u.prototype, {
            mountComponent: function(t, e, n, r) {
                var i = n._idCounter++
                  , o = " react-text: " + i + " ";
                if (this._domID = i,
                this._hostParent = e,
                t.useCreateElement) {
                    var u = n._ownerDocument
                      , l = u.createComment(o)
                      , p = u.createComment(" /react-text ")
                      , h = s(u.createDocumentFragment());
                    return s.queueChild(h, s(l)),
                    this._stringText && s.queueChild(h, s(u.createTextNode(this._stringText))),
                    s.queueChild(h, s(p)),
                    a.precacheNode(this, l),
                    this._closingComment = p,
                    h
                }
                var d = c(this._stringText);
                return t.renderToStaticMarkup ? d : "\x3c!--" + o + "--\x3e" + d + "\x3c!-- /react-text --\x3e"
            },
            receiveComponent: function(t, e) {
                if (t !== this._currentElement) {
                    this._currentElement = t;
                    var n = "" + t;
                    if (n !== this._stringText) {
                        this._stringText = n;
                        var r = this.getHostNode();
                        o.replaceDelimitedText(r[0], r[1], n)
                    }
                }
            },
            getHostNode: function() {
                var t = this._commentNodes;
                if (t)
                    return t;
                if (!this._closingComment)
                    for (var e = a.getNodeFromInstance(this), n = e.nextSibling; ; ) {
                        if (null == n && r("67", this._domID),
                        8 === n.nodeType && " /react-text " === n.nodeValue) {
                            this._closingComment = n;
                            break
                        }
                        n = n.nextSibling
                    }
                return t = [this._hostNode, this._closingComment],
                this._commentNodes = t,
                t
            },
            unmountComponent: function() {
                this._closingComment = null,
                this._commentNodes = null,
                a.uncacheNode(this)
            }
        }),
        t.exports = u
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            this._rootNodeID && l.updateWrapper(this)
        }
        function i(t) {
            var e = this._currentElement.props
              , n = a.executeOnChange(e, t);
            return u.asap(r, this),
            n
        }
        var o = n(4)
          , s = n(5)
          , a = n(65)
          , c = n(6)
          , u = n(13)
          , l = (n(1),
        n(3),
        {
            getHostProps: function(t, e) {
                return null != e.dangerouslySetInnerHTML && o("91"),
                s({}, e, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + t._wrapperState.initialValue,
                    onChange: t._wrapperState.onChange
                })
            },
            mountWrapper: function(t, e) {
                var n = a.getValue(e)
                  , r = n;
                if (null == n) {
                    var s = e.defaultValue
                      , c = e.children;
                    null != c && (null != s && o("92"),
                    Array.isArray(c) && (c.length <= 1 || o("93"),
                    c = c[0]),
                    s = "" + c),
                    null == s && (s = ""),
                    r = s
                }
                t._wrapperState = {
                    initialValue: "" + r,
                    listeners: null,
                    onChange: i.bind(t)
                }
            },
            updateWrapper: function(t) {
                var e = t._currentElement.props
                  , n = c.getNodeFromInstance(t)
                  , r = a.getValue(e);
                if (null != r) {
                    var i = "" + r;
                    i !== n.value && (n.value = i),
                    null == e.defaultValue && (n.defaultValue = i)
                }
                null != e.defaultValue && (n.defaultValue = e.defaultValue)
            },
            postMountWrapper: function(t) {
                var e = c.getNodeFromInstance(t)
                  , n = e.textContent;
                n === t._wrapperState.initialValue && (e.value = n)
            }
        });
        t.exports = l
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            "_hostNode"in t || c("33"),
            "_hostNode"in e || c("33");
            for (var n = 0, r = t; r; r = r._hostParent)
                n++;
            for (var i = 0, o = e; o; o = o._hostParent)
                i++;
            for (; n - i > 0; )
                t = t._hostParent,
                n--;
            for (; i - n > 0; )
                e = e._hostParent,
                i--;
            for (var s = n; s--; ) {
                if (t === e)
                    return t;
                t = t._hostParent,
                e = e._hostParent
            }
            return null
        }
        function i(t, e) {
            "_hostNode"in t || c("35"),
            "_hostNode"in e || c("35");
            for (; e; ) {
                if (e === t)
                    return !0;
                e = e._hostParent
            }
            return !1
        }
        function o(t) {
            return "_hostNode"in t || c("36"),
            t._hostParent
        }
        function s(t, e, n) {
            for (var r = []; t; )
                r.push(t),
                t = t._hostParent;
            var i;
            for (i = r.length; i-- > 0; )
                e(r[i], "captured", n);
            for (i = 0; i < r.length; i++)
                e(r[i], "bubbled", n)
        }
        function a(t, e, n, i, o) {
            for (var s = t && e ? r(t, e) : null, a = []; t && t !== s; )
                a.push(t),
                t = t._hostParent;
            for (var c = []; e && e !== s; )
                c.push(e),
                e = e._hostParent;
            var u;
            for (u = 0; u < a.length; u++)
                n(a[u], "bubbled", i);
            for (u = c.length; u-- > 0; )
                n(c[u], "captured", o)
        }
        var c = n(4);
        n(1);
        t.exports = {
            isAncestor: i,
            getLowestCommonAncestor: r,
            getParentInstance: o,
            traverseTwoPhase: s,
            traverseEnterLeave: a
        }
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            this.reinitializeTransaction()
        }
        var i = n(5)
          , o = n(13)
          , s = n(45)
          , a = n(11)
          , c = {
            initialize: a,
            close: function() {
                h.isBatchingUpdates = !1
            }
        }
          , u = {
            initialize: a,
            close: o.flushBatchedUpdates.bind(o)
        }
          , l = [u, c];
        i(r.prototype, s, {
            getTransactionWrappers: function() {
                return l
            }
        });
        var p = new r
          , h = {
            isBatchingUpdates: !1,
            batchedUpdates: function(t, e, n, r, i, o) {
                var s = h.isBatchingUpdates;
                return h.isBatchingUpdates = !0,
                s ? t(e, n, r, i, o) : p.perform(t, null, e, n, r, i, o)
            }
        };
        t.exports = h
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            S || (S = !0,
            v.EventEmitter.injectReactEventListener(y),
            v.EventPluginHub.injectEventPluginOrder(a),
            v.EventPluginUtils.injectComponentTree(h),
            v.EventPluginUtils.injectTreeTraversal(f),
            v.EventPluginHub.injectEventPluginsByName({
                SimpleEventPlugin: w,
                EnterLeaveEventPlugin: c,
                ChangeEventPlugin: s,
                SelectEventPlugin: C,
                BeforeInputEventPlugin: o
            }),
            v.HostComponent.injectGenericComponentClass(p),
            v.HostComponent.injectTextComponentClass(m),
            v.DOMProperty.injectDOMPropertyConfig(i),
            v.DOMProperty.injectDOMPropertyConfig(u),
            v.DOMProperty.injectDOMPropertyConfig(_),
            v.EmptyComponent.injectEmptyComponentFactory(function(t) {
                return new d(t)
            }),
            v.Updates.injectReconcileTransaction(b),
            v.Updates.injectBatchingStrategy(g),
            v.Component.injectEnvironment(l))
        }
        var i = n(267)
          , o = n(269)
          , s = n(271)
          , a = n(273)
          , c = n(274)
          , u = n(276)
          , l = n(278)
          , p = n(281)
          , h = n(6)
          , d = n(283)
          , f = n(291)
          , m = n(289)
          , g = n(292)
          , y = n(296)
          , v = n(297)
          , b = n(302)
          , _ = n(307)
          , C = n(308)
          , w = n(309)
          , S = !1;
        t.exports = {
            inject: r
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            i.enqueueEvents(t),
            i.processEventQueue(!1)
        }
        var i = n(30)
          , o = {
            handleTopLevel: function(t, e, n, o) {
                r(i.extractEvents(t, e, n, o))
            }
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            for (; t._hostParent; )
                t = t._hostParent;
            var e = p.getNodeFromInstance(t)
              , n = e.parentNode;
            return p.getClosestInstanceFromNode(n)
        }
        function i(t, e) {
            this.topLevelType = t,
            this.nativeEvent = e,
            this.ancestors = []
        }
        function o(t) {
            var e = d(t.nativeEvent)
              , n = p.getClosestInstanceFromNode(e)
              , i = n;
            do {
                t.ancestors.push(i),
                i = i && r(i)
            } while (i);for (var o = 0; o < t.ancestors.length; o++)
                n = t.ancestors[o],
                m._handleTopLevel(t.topLevelType, n, t.nativeEvent, d(t.nativeEvent))
        }
        function s(t) {
            t(f(window))
        }
        var a = n(5)
          , c = n(88)
          , u = n(7)
          , l = n(19)
          , p = n(6)
          , h = n(13)
          , d = n(72)
          , f = n(188);
        a(i.prototype, {
            destructor: function() {
                this.topLevelType = null,
                this.nativeEvent = null,
                this.ancestors.length = 0
            }
        }),
        l.addPoolingTo(i, l.twoArgumentPooler);
        var m = {
            _enabled: !0,
            _handleTopLevel: null,
            WINDOW_HANDLE: u.canUseDOM ? window : null,
            setHandleTopLevel: function(t) {
                m._handleTopLevel = t
            },
            setEnabled: function(t) {
                m._enabled = !!t
            },
            isEnabled: function() {
                return m._enabled
            },
            trapBubbledEvent: function(t, e, n) {
                return n ? c.listen(n, e, m.dispatchEvent.bind(null, t)) : null
            },
            trapCapturedEvent: function(t, e, n) {
                return n ? c.capture(n, e, m.dispatchEvent.bind(null, t)) : null
            },
            monitorScrollValue: function(t) {
                var e = s.bind(null, t);
                c.listen(window, "scroll", e)
            },
            dispatchEvent: function(t, e) {
                if (m._enabled) {
                    var n = i.getPooled(t, e);
                    try {
                        h.batchedUpdates(o, n)
                    } finally {
                        i.release(n)
                    }
                }
            }
        };
        t.exports = m
    }
    , function(t, e, n) {
        "use strict";
        var r = n(23)
          , i = n(30)
          , o = n(63)
          , s = n(66)
          , a = n(108)
          , c = n(43)
          , u = n(110)
          , l = n(13)
          , p = {
            Component: s.injection,
            DOMProperty: r.injection,
            EmptyComponent: a.injection,
            EventPluginHub: i.injection,
            EventPluginUtils: o.injection,
            EventEmitter: c.injection,
            HostComponent: u.injection,
            Updates: l.injection
        };
        t.exports = p
    }
    , function(t, e, n) {
        "use strict";
        var r = n(320)
          , i = /\/?>/
          , o = /^<\!\-\-/
          , s = {
            CHECKSUM_ATTR_NAME: "data-react-checksum",
            addChecksumToMarkup: function(t) {
                var e = r(t);
                return o.test(t) ? t : t.replace(i, " " + s.CHECKSUM_ATTR_NAME + '="' + e + '"$&')
            },
            canReuseMarkup: function(t, e) {
                var n = e.getAttribute(s.CHECKSUM_ATTR_NAME);
                return n = n && parseInt(n, 10),
                r(t) === n
            }
        };
        t.exports = s
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            return {
                type: "INSERT_MARKUP",
                content: t,
                fromIndex: null,
                fromNode: null,
                toIndex: n,
                afterNode: e
            }
        }
        function i(t, e, n) {
            return {
                type: "MOVE_EXISTING",
                content: null,
                fromIndex: t._mountIndex,
                fromNode: h.getHostNode(t),
                toIndex: n,
                afterNode: e
            }
        }
        function o(t, e) {
            return {
                type: "REMOVE_NODE",
                content: null,
                fromIndex: t._mountIndex,
                fromNode: e,
                toIndex: null,
                afterNode: null
            }
        }
        function s(t) {
            return {
                type: "SET_MARKUP",
                content: t,
                fromIndex: null,
                fromNode: null,
                toIndex: null,
                afterNode: null
            }
        }
        function a(t) {
            return {
                type: "TEXT_CONTENT",
                content: t,
                fromIndex: null,
                fromNode: null,
                toIndex: null,
                afterNode: null
            }
        }
        function c(t, e) {
            return e && (t = t || [],
            t.push(e)),
            t
        }
        function u(t, e) {
            p.processChildrenUpdates(t, e)
        }
        var l = n(4)
          , p = n(66)
          , h = (n(32),
        n(12),
        n(15),
        n(24))
          , d = n(277)
          , f = (n(11),
        n(323))
          , m = (n(1),
        {
            Mixin: {
                _reconcilerInstantiateChildren: function(t, e, n) {
                    return d.instantiateChildren(t, e, n)
                },
                _reconcilerUpdateChildren: function(t, e, n, r, i, o) {
                    var s, a = 0;
                    return s = f(e, a),
                    d.updateChildren(t, s, n, r, i, this, this._hostContainerInfo, o, a),
                    s
                },
                mountChildren: function(t, e, n) {
                    var r = this._reconcilerInstantiateChildren(t, e, n);
                    this._renderedChildren = r;
                    var i = []
                      , o = 0;
                    for (var s in r)
                        if (r.hasOwnProperty(s)) {
                            var a = r[s]
                              , c = 0
                              , u = h.mountComponent(a, e, this, this._hostContainerInfo, n, c);
                            a._mountIndex = o++,
                            i.push(u)
                        }
                    return i
                },
                updateTextContent: function(t) {
                    var e = this._renderedChildren;
                    d.unmountChildren(e, !1);
                    for (var n in e)
                        e.hasOwnProperty(n) && l("118");
                    u(this, [a(t)])
                },
                updateMarkup: function(t) {
                    var e = this._renderedChildren;
                    d.unmountChildren(e, !1);
                    for (var n in e)
                        e.hasOwnProperty(n) && l("118");
                    u(this, [s(t)])
                },
                updateChildren: function(t, e, n) {
                    this._updateChildren(t, e, n)
                },
                _updateChildren: function(t, e, n) {
                    var r = this._renderedChildren
                      , i = {}
                      , o = []
                      , s = this._reconcilerUpdateChildren(r, t, o, i, e, n);
                    if (s || r) {
                        var a, l = null, p = 0, d = 0, f = 0, m = null;
                        for (a in s)
                            if (s.hasOwnProperty(a)) {
                                var g = r && r[a]
                                  , y = s[a];
                                g === y ? (l = c(l, this.moveChild(g, m, p, d)),
                                d = Math.max(g._mountIndex, d),
                                g._mountIndex = p) : (g && (d = Math.max(g._mountIndex, d)),
                                l = c(l, this._mountChildAtIndex(y, o[f], m, p, e, n)),
                                f++),
                                p++,
                                m = h.getHostNode(y)
                            }
                        for (a in i)
                            i.hasOwnProperty(a) && (l = c(l, this._unmountChild(r[a], i[a])));
                        l && u(this, l),
                        this._renderedChildren = s
                    }
                },
                unmountChildren: function(t) {
                    var e = this._renderedChildren;
                    d.unmountChildren(e, t),
                    this._renderedChildren = null
                },
                moveChild: function(t, e, n, r) {
                    if (t._mountIndex < r)
                        return i(t, e, n)
                },
                createChild: function(t, e, n) {
                    return r(n, e, t._mountIndex)
                },
                removeChild: function(t, e) {
                    return o(t, e)
                },
                _mountChildAtIndex: function(t, e, n, r, i, o) {
                    return t._mountIndex = r,
                    this.createChild(t, n, e)
                },
                _unmountChild: function(t, e) {
                    var n = this.removeChild(t, e);
                    return t._mountIndex = null,
                    n
                }
            }
        });
        t.exports = m
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return !(!t || "function" != typeof t.attachRef || "function" != typeof t.detachRef)
        }
        var i = n(4)
          , o = (n(1),
        {
            addComponentAsRefTo: function(t, e, n) {
                r(n) || i("119"),
                n.attachRef(e, t)
            },
            removeComponentAsRefFrom: function(t, e, n) {
                r(n) || i("120");
                var o = n.getPublicInstance();
                o && o.refs[e] === t.getPublicInstance() && n.detachRef(e)
            }
        });
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            this.reinitializeTransaction(),
            this.renderToStaticMarkup = !1,
            this.reactMountReady = o.getPooled(null),
            this.useCreateElement = t
        }
        var i = n(5)
          , o = n(104)
          , s = n(19)
          , a = n(43)
          , c = n(111)
          , u = (n(12),
        n(45))
          , l = n(68)
          , p = {
            initialize: c.getSelectionInformation,
            close: c.restoreSelection
        }
          , h = {
            initialize: function() {
                var t = a.isEnabled();
                return a.setEnabled(!1),
                t
            },
            close: function(t) {
                a.setEnabled(t)
            }
        }
          , d = {
            initialize: function() {
                this.reactMountReady.reset()
            },
            close: function() {
                this.reactMountReady.notifyAll()
            }
        }
          , f = [p, h, d]
          , m = {
            getTransactionWrappers: function() {
                return f
            },
            getReactMountReady: function() {
                return this.reactMountReady
            },
            getUpdateQueue: function() {
                return l
            },
            checkpoint: function() {
                return this.reactMountReady.checkpoint()
            },
            rollback: function(t) {
                this.reactMountReady.rollback(t)
            },
            destructor: function() {
                o.release(this.reactMountReady),
                this.reactMountReady = null
            }
        };
        i(r.prototype, u, m),
        s.addPoolingTo(r),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            "function" == typeof t ? t(e.getPublicInstance()) : o.addComponentAsRefTo(e, t, n)
        }
        function i(t, e, n) {
            "function" == typeof t ? t(null) : o.removeComponentAsRefFrom(e, t, n)
        }
        var o = n(300)
          , s = {};
        s.attachRefs = function(t, e) {
            if (null !== e && "object" == typeof e) {
                var n = e.ref;
                null != n && r(n, t, e._owner)
            }
        }
        ,
        s.shouldUpdateRefs = function(t, e) {
            var n = null
              , r = null;
            null !== t && "object" == typeof t && (n = t.ref,
            r = t._owner);
            var i = null
              , o = null;
            return null !== e && "object" == typeof e && (i = e.ref,
            o = e._owner),
            n !== i || "string" == typeof i && o !== r
        }
        ,
        s.detachRefs = function(t, e) {
            if (null !== e && "object" == typeof e) {
                var n = e.ref;
                null != n && i(n, t, e._owner)
            }
        }
        ,
        t.exports = s
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            this.reinitializeTransaction(),
            this.renderToStaticMarkup = t,
            this.useCreateElement = !1,
            this.updateQueue = new a(this)
        }
        var i = n(5)
          , o = n(19)
          , s = n(45)
          , a = (n(12),
        n(305))
          , c = []
          , u = {
            enqueue: function() {}
        }
          , l = {
            getTransactionWrappers: function() {
                return c
            },
            getReactMountReady: function() {
                return u
            },
            getUpdateQueue: function() {
                return this.updateQueue
            },
            destructor: function() {},
            checkpoint: function() {},
            rollback: function() {}
        };
        i(r.prototype, s, l),
        o.addPoolingTo(r),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = n(68)
          , o = (n(3),
        function() {
            function t(e) {
                r(this, t),
                this.transaction = e
            }
            return t.prototype.isMounted = function(t) {
                return !1
            }
            ,
            t.prototype.enqueueCallback = function(t, e, n) {
                this.transaction.isInTransaction() && i.enqueueCallback(t, e, n)
            }
            ,
            t.prototype.enqueueForceUpdate = function(t) {
                this.transaction.isInTransaction() && i.enqueueForceUpdate(t)
            }
            ,
            t.prototype.enqueueReplaceState = function(t, e) {
                this.transaction.isInTransaction() && i.enqueueReplaceState(t, e)
            }
            ,
            t.prototype.enqueueSetState = function(t, e) {
                this.transaction.isInTransaction() && i.enqueueSetState(t, e)
            }
            ,
            t
        }());
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        t.exports = "15.6.1"
    }
    , function(t, e, n) {
        "use strict";
        var r = {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        }
          , i = {
            accentHeight: "accent-height",
            accumulate: 0,
            additive: 0,
            alignmentBaseline: "alignment-baseline",
            allowReorder: "allowReorder",
            alphabetic: 0,
            amplitude: 0,
            arabicForm: "arabic-form",
            ascent: 0,
            attributeName: "attributeName",
            attributeType: "attributeType",
            autoReverse: "autoReverse",
            azimuth: 0,
            baseFrequency: "baseFrequency",
            baseProfile: "baseProfile",
            baselineShift: "baseline-shift",
            bbox: 0,
            begin: 0,
            bias: 0,
            by: 0,
            calcMode: "calcMode",
            capHeight: "cap-height",
            clip: 0,
            clipPath: "clip-path",
            clipRule: "clip-rule",
            clipPathUnits: "clipPathUnits",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            contentScriptType: "contentScriptType",
            contentStyleType: "contentStyleType",
            cursor: 0,
            cx: 0,
            cy: 0,
            d: 0,
            decelerate: 0,
            descent: 0,
            diffuseConstant: "diffuseConstant",
            direction: 0,
            display: 0,
            divisor: 0,
            dominantBaseline: "dominant-baseline",
            dur: 0,
            dx: 0,
            dy: 0,
            edgeMode: "edgeMode",
            elevation: 0,
            enableBackground: "enable-background",
            end: 0,
            exponent: 0,
            externalResourcesRequired: "externalResourcesRequired",
            fill: 0,
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            filter: 0,
            filterRes: "filterRes",
            filterUnits: "filterUnits",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            focusable: 0,
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            format: 0,
            from: 0,
            fx: 0,
            fy: 0,
            g1: 0,
            g2: 0,
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            glyphRef: "glyphRef",
            gradientTransform: "gradientTransform",
            gradientUnits: "gradientUnits",
            hanging: 0,
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            ideographic: 0,
            imageRendering: "image-rendering",
            in: 0,
            in2: 0,
            intercept: 0,
            k: 0,
            k1: 0,
            k2: 0,
            k3: 0,
            k4: 0,
            kernelMatrix: "kernelMatrix",
            kernelUnitLength: "kernelUnitLength",
            kerning: 0,
            keyPoints: "keyPoints",
            keySplines: "keySplines",
            keyTimes: "keyTimes",
            lengthAdjust: "lengthAdjust",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            limitingConeAngle: "limitingConeAngle",
            local: 0,
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            markerHeight: "markerHeight",
            markerUnits: "markerUnits",
            markerWidth: "markerWidth",
            mask: 0,
            maskContentUnits: "maskContentUnits",
            maskUnits: "maskUnits",
            mathematical: 0,
            mode: 0,
            numOctaves: "numOctaves",
            offset: 0,
            opacity: 0,
            operator: 0,
            order: 0,
            orient: 0,
            orientation: 0,
            origin: 0,
            overflow: 0,
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pathLength: "pathLength",
            patternContentUnits: "patternContentUnits",
            patternTransform: "patternTransform",
            patternUnits: "patternUnits",
            pointerEvents: "pointer-events",
            points: 0,
            pointsAtX: "pointsAtX",
            pointsAtY: "pointsAtY",
            pointsAtZ: "pointsAtZ",
            preserveAlpha: "preserveAlpha",
            preserveAspectRatio: "preserveAspectRatio",
            primitiveUnits: "primitiveUnits",
            r: 0,
            radius: 0,
            refX: "refX",
            refY: "refY",
            renderingIntent: "rendering-intent",
            repeatCount: "repeatCount",
            repeatDur: "repeatDur",
            requiredExtensions: "requiredExtensions",
            requiredFeatures: "requiredFeatures",
            restart: 0,
            result: 0,
            rotate: 0,
            rx: 0,
            ry: 0,
            scale: 0,
            seed: 0,
            shapeRendering: "shape-rendering",
            slope: 0,
            spacing: 0,
            specularConstant: "specularConstant",
            specularExponent: "specularExponent",
            speed: 0,
            spreadMethod: "spreadMethod",
            startOffset: "startOffset",
            stdDeviation: "stdDeviation",
            stemh: 0,
            stemv: 0,
            stitchTiles: "stitchTiles",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            string: 0,
            stroke: 0,
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeMiterlimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            surfaceScale: "surfaceScale",
            systemLanguage: "systemLanguage",
            tableValues: "tableValues",
            targetX: "targetX",
            targetY: "targetY",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            textLength: "textLength",
            to: 0,
            transform: 0,
            u1: 0,
            u2: 0,
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicode: 0,
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            values: 0,
            vectorEffect: "vector-effect",
            version: 0,
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            viewBox: "viewBox",
            viewTarget: "viewTarget",
            visibility: 0,
            widths: 0,
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            x: 0,
            xHeight: "x-height",
            x1: 0,
            x2: 0,
            xChannelSelector: "xChannelSelector",
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type",
            xmlBase: "xml:base",
            xmlns: 0,
            xmlnsXlink: "xmlns:xlink",
            xmlLang: "xml:lang",
            xmlSpace: "xml:space",
            y: 0,
            y1: 0,
            y2: 0,
            yChannelSelector: "yChannelSelector",
            z: 0,
            zoomAndPan: "zoomAndPan"
        }
          , o = {
            Properties: {},
            DOMAttributeNamespaces: {
                xlinkActuate: r.xlink,
                xlinkArcrole: r.xlink,
                xlinkHref: r.xlink,
                xlinkRole: r.xlink,
                xlinkShow: r.xlink,
                xlinkTitle: r.xlink,
                xlinkType: r.xlink,
                xmlBase: r.xml,
                xmlLang: r.xml,
                xmlSpace: r.xml
            },
            DOMAttributeNames: {}
        };
        Object.keys(i).forEach(function(t) {
            o.Properties[t] = 0,
            i[t] && (o.DOMAttributeNames[t] = i[t])
        }),
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if ("selectionStart"in t && c.hasSelectionCapabilities(t))
                return {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            if (window.getSelection) {
                var e = window.getSelection();
                return {
                    anchorNode: e.anchorNode,
                    anchorOffset: e.anchorOffset,
                    focusNode: e.focusNode,
                    focusOffset: e.focusOffset
                }
            }
            if (document.selection) {
                var n = document.selection.createRange();
                return {
                    parentElement: n.parentElement(),
                    text: n.text,
                    top: n.boundingTop,
                    left: n.boundingLeft
                }
            }
        }
        function i(t, e) {
            if (v || null == m || m !== l())
                return null;
            var n = r(m);
            if (!y || !h(y, n)) {
                y = n;
                var i = u.getPooled(f.select, g, t, e);
                return i.type = "select",
                i.target = m,
                o.accumulateTwoPhaseDispatches(i),
                i
            }
            return null
        }
        var o = n(31)
          , s = n(7)
          , a = n(6)
          , c = n(111)
          , u = n(14)
          , l = n(90)
          , p = n(121)
          , h = n(54)
          , d = s.canUseDOM && "documentMode"in document && document.documentMode <= 11
          , f = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"]
            }
        }
          , m = null
          , g = null
          , y = null
          , v = !1
          , b = !1
          , _ = {
            eventTypes: f,
            extractEvents: function(t, e, n, r) {
                if (!b)
                    return null;
                var o = e ? a.getNodeFromInstance(e) : window;
                switch (t) {
                case "topFocus":
                    (p(o) || "true" === o.contentEditable) && (m = o,
                    g = e,
                    y = null);
                    break;
                case "topBlur":
                    m = null,
                    g = null,
                    y = null;
                    break;
                case "topMouseDown":
                    v = !0;
                    break;
                case "topContextMenu":
                case "topMouseUp":
                    return v = !1,
                    i(n, r);
                case "topSelectionChange":
                    if (d)
                        break;
                case "topKeyDown":
                case "topKeyUp":
                    return i(n, r)
                }
                return null
            },
            didPutListener: function(t, e, n) {
                "onSelect" === e && (b = !0)
            }
        };
        t.exports = _
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return "." + t._rootNodeID
        }
        function i(t) {
            return "button" === t || "input" === t || "select" === t || "textarea" === t
        }
        var o = n(4)
          , s = n(88)
          , a = n(31)
          , c = n(6)
          , u = n(310)
          , l = n(311)
          , p = n(14)
          , h = n(314)
          , d = n(316)
          , f = n(44)
          , m = n(313)
          , g = n(317)
          , y = n(318)
          , v = n(33)
          , b = n(319)
          , _ = n(11)
          , C = n(70)
          , w = (n(1),
        {})
          , S = {};
        ["abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function(t) {
            var e = t[0].toUpperCase() + t.slice(1)
              , n = "on" + e
              , r = "top" + e
              , i = {
                phasedRegistrationNames: {
                    bubbled: n,
                    captured: n + "Capture"
                },
                dependencies: [r]
            };
            w[t] = i,
            S[r] = i
        });
        var x = {}
          , k = {
            eventTypes: w,
            extractEvents: function(t, e, n, r) {
                var i = S[t];
                if (!i)
                    return null;
                var s;
                switch (t) {
                case "topAbort":
                case "topCanPlay":
                case "topCanPlayThrough":
                case "topDurationChange":
                case "topEmptied":
                case "topEncrypted":
                case "topEnded":
                case "topError":
                case "topInput":
                case "topInvalid":
                case "topLoad":
                case "topLoadedData":
                case "topLoadedMetadata":
                case "topLoadStart":
                case "topPause":
                case "topPlay":
                case "topPlaying":
                case "topProgress":
                case "topRateChange":
                case "topReset":
                case "topSeeked":
                case "topSeeking":
                case "topStalled":
                case "topSubmit":
                case "topSuspend":
                case "topTimeUpdate":
                case "topVolumeChange":
                case "topWaiting":
                    s = p;
                    break;
                case "topKeyPress":
                    if (0 === C(n))
                        return null;
                case "topKeyDown":
                case "topKeyUp":
                    s = d;
                    break;
                case "topBlur":
                case "topFocus":
                    s = h;
                    break;
                case "topClick":
                    if (2 === n.button)
                        return null;
                case "topDoubleClick":
                case "topMouseDown":
                case "topMouseMove":
                case "topMouseUp":
                case "topMouseOut":
                case "topMouseOver":
                case "topContextMenu":
                    s = f;
                    break;
                case "topDrag":
                case "topDragEnd":
                case "topDragEnter":
                case "topDragExit":
                case "topDragLeave":
                case "topDragOver":
                case "topDragStart":
                case "topDrop":
                    s = m;
                    break;
                case "topTouchCancel":
                case "topTouchEnd":
                case "topTouchMove":
                case "topTouchStart":
                    s = g;
                    break;
                case "topAnimationEnd":
                case "topAnimationIteration":
                case "topAnimationStart":
                    s = u;
                    break;
                case "topTransitionEnd":
                    s = y;
                    break;
                case "topScroll":
                    s = v;
                    break;
                case "topWheel":
                    s = b;
                    break;
                case "topCopy":
                case "topCut":
                case "topPaste":
                    s = l
                }
                s || o("86", t);
                var c = s.getPooled(i, e, n, r);
                return a.accumulateTwoPhaseDispatches(c),
                c
            },
            didPutListener: function(t, e, n) {
                if ("onClick" === e && !i(t._tag)) {
                    var o = r(t)
                      , a = c.getNodeFromInstance(t);
                    x[o] || (x[o] = s.listen(a, "click", _))
                }
            },
            willDeleteListener: function(t, e) {
                if ("onClick" === e && !i(t._tag)) {
                    var n = r(t);
                    x[n].remove(),
                    delete x[n]
                }
            }
        };
        t.exports = k
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(14)
          , o = {
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        };
        i.augmentClass(r, o),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(14)
          , o = {
            clipboardData: function(t) {
                return "clipboardData"in t ? t.clipboardData : window.clipboardData
            }
        };
        i.augmentClass(r, o),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(14)
          , o = {
            data: null
        };
        i.augmentClass(r, o),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(44)
          , o = {
            dataTransfer: null
        };
        i.augmentClass(r, o),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(33)
          , o = {
            relatedTarget: null
        };
        i.augmentClass(r, o),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(14)
          , o = {
            data: null
        };
        i.augmentClass(r, o),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(33)
          , o = n(70)
          , s = n(324)
          , a = n(71)
          , c = {
            key: s,
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: a,
            charCode: function(t) {
                return "keypress" === t.type ? o(t) : 0
            },
            keyCode: function(t) {
                return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            },
            which: function(t) {
                return "keypress" === t.type ? o(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            }
        };
        i.augmentClass(r, c),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(33)
          , o = n(71)
          , s = {
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: o
        };
        i.augmentClass(r, s),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(14)
          , o = {
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        };
        i.augmentClass(r, o),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return i.call(this, t, e, n, r)
        }
        var i = n(44)
          , o = {
            deltaX: function(t) {
                return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        };
        i.augmentClass(r, o),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            for (var e = 1, n = 0, r = 0, o = t.length, s = -4 & o; r < s; ) {
                for (var a = Math.min(r + 4096, s); r < a; r += 4)
                    n += (e += t.charCodeAt(r)) + (e += t.charCodeAt(r + 1)) + (e += t.charCodeAt(r + 2)) + (e += t.charCodeAt(r + 3));
                e %= i,
                n %= i
            }
            for (; r < o; r++)
                n += e += t.charCodeAt(r);
            return e %= i,
            n %= i,
            e | n << 16
        }
        var i = 65521;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            if (null == e || "boolean" == typeof e || "" === e)
                return "";
            var i = isNaN(e);
            if (r || i || 0 === e || o.hasOwnProperty(t) && o[t])
                return "" + e;
            if ("string" == typeof e) {
                e = e.trim()
            }
            return e + "px"
        }
        var i = n(103)
          , o = (n(3),
        i.isUnitlessNumber);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (null == t)
                return null;
            if (1 === t.nodeType)
                return t;
            var e = s.get(t);
            if (e)
                return e = a(e),
                e ? o.getNodeFromInstance(e) : null;
            "function" == typeof t.render ? i("44") : i("45", Object.keys(t))
        }
        var i = n(4)
          , o = (n(15),
        n(6))
          , s = n(32)
          , a = n(117);
        n(1),
        n(3);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        (function(e) {
            function r(t, e, n, r) {
                if (t && "object" == typeof t) {
                    var i = t
                      , o = void 0 === i[n];
                    o && null != e && (i[n] = e)
                }
            }
            function i(t, e) {
                if (null == t)
                    return t;
                var n = {};
                return o(t, r, n),
                n
            }
            var o = (n(64),
            n(123));
            n(3);
            void 0 !== e && n.i({
                NODE_ENV: "production"
            }),
            t.exports = i
        }
        ).call(e, n(99))
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (t.key) {
                var e = o[t.key] || t.key;
                if ("Unidentified" !== e)
                    return e
            }
            if ("keypress" === t.type) {
                var n = i(t);
                return 13 === n ? "Enter" : String.fromCharCode(n)
            }
            return "keydown" === t.type || "keyup" === t.type ? s[t.keyCode] || "Unidentified" : ""
        }
        var i = n(70)
          , o = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }
          , s = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        };
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t && (i && t[i] || t[o]);
            if ("function" == typeof e)
                return e
        }
        var i = "function" == typeof Symbol && Symbol.iterator
          , o = "@@iterator";
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            for (; t && t.firstChild; )
                t = t.firstChild;
            return t
        }
        function i(t) {
            for (; t; ) {
                if (t.nextSibling)
                    return t.nextSibling;
                t = t.parentNode
            }
        }
        function o(t, e) {
            for (var n = r(t), o = 0, s = 0; n; ) {
                if (3 === n.nodeType) {
                    if (s = o + n.textContent.length,
                    o <= e && s >= e)
                        return {
                            node: n,
                            offset: e - o
                        };
                    o = s
                }
                n = r(i(n))
            }
        }
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = {};
            return n[t.toLowerCase()] = e.toLowerCase(),
            n["Webkit" + t] = "webkit" + e,
            n["Moz" + t] = "moz" + e,
            n["ms" + t] = "MS" + e,
            n["O" + t] = "o" + e.toLowerCase(),
            n
        }
        function i(t) {
            if (a[t])
                return a[t];
            if (!s[t])
                return t;
            var e = s[t];
            for (var n in e)
                if (e.hasOwnProperty(n) && n in c)
                    return a[t] = e[n];
            return ""
        }
        var o = n(7)
          , s = {
            animationend: r("Animation", "AnimationEnd"),
            animationiteration: r("Animation", "AnimationIteration"),
            animationstart: r("Animation", "AnimationStart"),
            transitionend: r("Transition", "TransitionEnd")
        }
          , a = {}
          , c = {};
        o.canUseDOM && (c = document.createElement("div").style,
        "AnimationEvent"in window || (delete s.animationend.animation,
        delete s.animationiteration.animation,
        delete s.animationstart.animation),
        "TransitionEvent"in window || delete s.transitionend.transition),
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return '"' + i(t) + '"'
        }
        var i = n(46);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(112);
        t.exports = r.renderSubtreeIntoContainer
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function s() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store", n = arguments[1], s = n || e + "Subscription", c = function(t) {
                function n(o, s) {
                    r(this, n);
                    var a = i(this, t.call(this, o, s));
                    return a[e] = o.store,
                    a
                }
                return o(n, t),
                n.prototype.getChildContext = function() {
                    var t;
                    return t = {},
                    t[e] = this[e],
                    t[s] = null,
                    t
                }
                ,
                n.prototype.render = function() {
                    return a.Children.only(this.props.children)
                }
                ,
                n
            }(a.Component);
            return c.propTypes = {
                store: l.a.isRequired,
                children: u.a.element.isRequired
            },
            c.childContextTypes = (t = {},
            t[e] = l.a.isRequired,
            t[s] = l.b,
            t),
            c.displayName = "Provider",
            c
        }
        var a = n(9)
          , c = (n.n(a),
        n(101))
          , u = n.n(c)
          , l = n(126);
        n(76);
        e.b = s;
        e.a = s()
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = {};
            for (var r in t)
                e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }
        function i(t, e, n) {
            for (var r = e.length - 1; r >= 0; r--) {
                var i = e[r](t);
                if (i)
                    return i
            }
            return function(e, r) {
                throw new Error("Invalid value of type " + typeof t + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
            }
        }
        function o(t, e) {
            return t === e
        }
        var s = n(124)
          , a = n(338)
          , c = n(332)
          , u = n(333)
          , l = n(334)
          , p = n(335)
          , h = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        ;
        e.a = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.connectHOC
              , n = void 0 === e ? s.a : e
              , d = t.mapStateToPropsFactories
              , f = void 0 === d ? u.a : d
              , m = t.mapDispatchToPropsFactories
              , g = void 0 === m ? c.a : m
              , y = t.mergePropsFactories
              , v = void 0 === y ? l.a : y
              , b = t.selectorFactory
              , _ = void 0 === b ? p.a : b;
            return function(t, e, s) {
                var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , u = c.pure
                  , l = void 0 === u || u
                  , p = c.areStatesEqual
                  , d = void 0 === p ? o : p
                  , m = c.areOwnPropsEqual
                  , y = void 0 === m ? a.a : m
                  , b = c.areStatePropsEqual
                  , C = void 0 === b ? a.a : b
                  , w = c.areMergedPropsEqual
                  , S = void 0 === w ? a.a : w
                  , x = r(c, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"])
                  , k = i(t, f, "mapStateToProps")
                  , E = i(e, g, "mapDispatchToProps")
                  , A = i(s, v, "mergeProps");
                return n(_, h({
                    methodName: "connect",
                    getDisplayName: function(t) {
                        return "Connect(" + t + ")"
                    },
                    shouldHandleStateChanges: Boolean(t),
                    initMapStateToProps: k,
                    initMapDispatchToProps: E,
                    initMergeProps: A,
                    pure: l,
                    areStatesEqual: d,
                    areOwnPropsEqual: y,
                    areStatePropsEqual: C,
                    areMergedPropsEqual: S
                }, x))
            }
        }()
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return "function" == typeof t ? n.i(a.a)(t, "mapDispatchToProps") : void 0
        }
        function i(t) {
            return t ? void 0 : n.i(a.b)(function(t) {
                return {
                    dispatch: t
                }
            })
        }
        function o(t) {
            return t && "object" == typeof t ? n.i(a.b)(function(e) {
                return n.i(s.bindActionCreators)(t, e)
            }) : void 0
        }
        var s = n(77)
          , a = n(125);
        e.a = [r, i, o]
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return "function" == typeof t ? n.i(o.a)(t, "mapStateToProps") : void 0
        }
        function i(t) {
            return t ? void 0 : n.i(o.b)(function() {
                return {}
            })
        }
        var o = n(125);
        e.a = [r, i]
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            return a({}, n, t, e)
        }
        function i(t) {
            return function(e, n) {
                var r = (n.displayName,
                n.pure)
                  , i = n.areMergedPropsEqual
                  , o = !1
                  , s = void 0;
                return function(e, n, a) {
                    var c = t(e, n, a);
                    return o ? r && i(c, s) || (s = c) : (o = !0,
                    s = c),
                    s
                }
            }
        }
        function o(t) {
            return "function" == typeof t ? i(t) : void 0
        }
        function s(t) {
            return t ? void 0 : function() {
                return r
            }
        }
        var a = (n(127),
        Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        );
        e.a = [o, s]
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = {};
            for (var r in t)
                e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }
        function i(t, e, n, r) {
            return function(i, o) {
                return n(t(i, o), e(r, o), o)
            }
        }
        function o(t, e, n, r, i) {
            function o(i, o) {
                return f = i,
                m = o,
                g = t(f, m),
                y = e(r, m),
                v = n(g, y, m),
                d = !0,
                v
            }
            function s() {
                return g = t(f, m),
                e.dependsOnOwnProps && (y = e(r, m)),
                v = n(g, y, m)
            }
            function a() {
                return t.dependsOnOwnProps && (g = t(f, m)),
                e.dependsOnOwnProps && (y = e(r, m)),
                v = n(g, y, m)
            }
            function c() {
                var e = t(f, m)
                  , r = !h(e, g);
                return g = e,
                r && (v = n(g, y, m)),
                v
            }
            function u(t, e) {
                var n = !p(e, m)
                  , r = !l(t, f);
                return f = t,
                m = e,
                n && r ? s() : n ? a() : r ? c() : v
            }
            var l = i.areStatesEqual
              , p = i.areOwnPropsEqual
              , h = i.areStatePropsEqual
              , d = !1
              , f = void 0
              , m = void 0
              , g = void 0
              , y = void 0
              , v = void 0;
            return function(t, e) {
                return d ? u(t, e) : o(t, e)
            }
        }
        function s(t, e) {
            var n = e.initMapStateToProps
              , s = e.initMapDispatchToProps
              , a = e.initMergeProps
              , c = r(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"])
              , u = n(t, c)
              , l = s(t, c)
              , p = a(t, c);
            return (c.pure ? o : i)(u, l, p, t, c)
        }
        n(336);
        e.a = s
    }
    , function(t, e, n) {
        "use strict";
        n(76)
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i() {
            var t = []
              , e = [];
            return {
                clear: function() {
                    e = o,
                    t = o
                },
                notify: function() {
                    for (var n = t = e, r = 0; r < n.length; r++)
                        n[r]()
                },
                subscribe: function(n) {
                    var r = !0;
                    return e === t && (e = t.slice()),
                    e.push(n),
                    function() {
                        r && t !== o && (r = !1,
                        e === t && (e = t.slice()),
                        e.splice(e.indexOf(n), 1))
                    }
                }
            }
        }
        n.d(e, "a", function() {
            return a
        });
        var o = null
          , s = {
            notify: function() {}
        }
          , a = function() {
            function t(e, n, i) {
                r(this, t),
                this.store = e,
                this.parentSub = n,
                this.onStateChange = i,
                this.unsubscribe = null,
                this.listeners = s
            }
            return t.prototype.addNestedSub = function(t) {
                return this.trySubscribe(),
                this.listeners.subscribe(t)
            }
            ,
            t.prototype.notifyNestedSubs = function() {
                this.listeners.notify()
            }
            ,
            t.prototype.isSubscribed = function() {
                return Boolean(this.unsubscribe)
            }
            ,
            t.prototype.trySubscribe = function() {
                this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange),
                this.listeners = i())
            }
            ,
            t.prototype.tryUnsubscribe = function() {
                this.unsubscribe && (this.unsubscribe(),
                this.unsubscribe = null,
                this.listeners.clear(),
                this.listeners = s)
            }
            ,
            t
        }()
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t !== t && e !== e
        }
        function i(t, e) {
            if (r(t, e))
                return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e)
                return !1;
            var n = Object.keys(t)
              , i = Object.keys(e);
            if (n.length !== i.length)
                return !1;
            for (var s = 0; s < n.length; s++)
                if (!o.call(e, n[s]) || !r(t[n[s]], e[n[s]]))
                    return !1;
            return !0
        }
        e.a = i;
        var o = Object.prototype.hasOwnProperty
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + t).replace(/[=:]/g, function(t) {
                return e[t]
            })
        }
        function i(t) {
            var e = /(=0|=2)/g
              , n = {
                "=0": "=",
                "=2": ":"
            };
            return ("" + ("." === t[0] && "$" === t[1] ? t.substring(2) : t.substring(1))).replace(e, function(t) {
                return n[t]
            })
        }
        var o = {
            escape: r,
            unescape: i
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(35)
          , i = (n(1),
        function(t) {
            var e = this;
            if (e.instancePool.length) {
                var n = e.instancePool.pop();
                return e.call(n, t),
                n
            }
            return new e(t)
        }
        )
          , o = function(t, e) {
            var n = this;
            if (n.instancePool.length) {
                var r = n.instancePool.pop();
                return n.call(r, t, e),
                r
            }
            return new n(t,e)
        }
          , s = function(t, e, n) {
            var r = this;
            if (r.instancePool.length) {
                var i = r.instancePool.pop();
                return r.call(i, t, e, n),
                i
            }
            return new r(t,e,n)
        }
          , a = function(t, e, n, r) {
            var i = this;
            if (i.instancePool.length) {
                var o = i.instancePool.pop();
                return i.call(o, t, e, n, r),
                o
            }
            return new i(t,e,n,r)
        }
          , c = function(t) {
            var e = this;
            t instanceof e || r("25"),
            t.destructor(),
            e.instancePool.length < e.poolSize && e.instancePool.push(t)
        }
          , u = i
          , l = function(t, e) {
            var n = t;
            return n.instancePool = [],
            n.getPooled = e || u,
            n.poolSize || (n.poolSize = 10),
            n.release = c,
            n
        }
          , p = {
            addPoolingTo: l,
            oneArgumentPooler: i,
            twoArgumentPooler: o,
            threeArgumentPooler: s,
            fourArgumentPooler: a
        };
        t.exports = p
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return ("" + t).replace(_, "$&/")
        }
        function i(t, e) {
            this.func = t,
            this.context = e,
            this.count = 0
        }
        function o(t, e, n) {
            var r = t.func
              , i = t.context;
            r.call(i, e, t.count++)
        }
        function s(t, e, n) {
            if (null == t)
                return t;
            var r = i.getPooled(e, n);
            y(t, o, r),
            i.release(r)
        }
        function a(t, e, n, r) {
            this.result = t,
            this.keyPrefix = e,
            this.func = n,
            this.context = r,
            this.count = 0
        }
        function c(t, e, n) {
            var i = t.result
              , o = t.keyPrefix
              , s = t.func
              , a = t.context
              , c = s.call(a, e, t.count++);
            Array.isArray(c) ? u(c, i, n, g.thatReturnsArgument) : null != c && (m.isValidElement(c) && (c = m.cloneAndReplaceKey(c, o + (!c.key || e && e.key === c.key ? "" : r(c.key) + "/") + n)),
            i.push(c))
        }
        function u(t, e, n, i, o) {
            var s = "";
            null != n && (s = r(n) + "/");
            var u = a.getPooled(e, s, i, o);
            y(t, c, u),
            a.release(u)
        }
        function l(t, e, n) {
            if (null == t)
                return t;
            var r = [];
            return u(t, r, null, e, n),
            r
        }
        function p(t, e, n) {
            return null
        }
        function h(t, e) {
            return y(t, p, null)
        }
        function d(t) {
            var e = [];
            return u(t, e, null, g.thatReturnsArgument),
            e
        }
        var f = n(340)
          , m = n(26)
          , g = n(11)
          , y = n(350)
          , v = f.twoArgumentPooler
          , b = f.fourArgumentPooler
          , _ = /\/+/g;
        i.prototype.destructor = function() {
            this.func = null,
            this.context = null,
            this.count = 0
        }
        ,
        f.addPoolingTo(i, v),
        a.prototype.destructor = function() {
            this.result = null,
            this.keyPrefix = null,
            this.func = null,
            this.context = null,
            this.count = 0
        }
        ,
        f.addPoolingTo(a, b);
        var C = {
            forEach: s,
            map: l,
            mapIntoWithKeyPrefixInternal: u,
            count: h,
            toArray: d
        };
        t.exports = C
    }
    , function(t, e, n) {
        "use strict";
        var r = n(26)
          , i = r.createFactory
          , o = {
            a: i("a"),
            abbr: i("abbr"),
            address: i("address"),
            area: i("area"),
            article: i("article"),
            aside: i("aside"),
            audio: i("audio"),
            b: i("b"),
            base: i("base"),
            bdi: i("bdi"),
            bdo: i("bdo"),
            big: i("big"),
            blockquote: i("blockquote"),
            body: i("body"),
            br: i("br"),
            button: i("button"),
            canvas: i("canvas"),
            caption: i("caption"),
            cite: i("cite"),
            code: i("code"),
            col: i("col"),
            colgroup: i("colgroup"),
            data: i("data"),
            datalist: i("datalist"),
            dd: i("dd"),
            del: i("del"),
            details: i("details"),
            dfn: i("dfn"),
            dialog: i("dialog"),
            div: i("div"),
            dl: i("dl"),
            dt: i("dt"),
            em: i("em"),
            embed: i("embed"),
            fieldset: i("fieldset"),
            figcaption: i("figcaption"),
            figure: i("figure"),
            footer: i("footer"),
            form: i("form"),
            h1: i("h1"),
            h2: i("h2"),
            h3: i("h3"),
            h4: i("h4"),
            h5: i("h5"),
            h6: i("h6"),
            head: i("head"),
            header: i("header"),
            hgroup: i("hgroup"),
            hr: i("hr"),
            html: i("html"),
            i: i("i"),
            iframe: i("iframe"),
            img: i("img"),
            input: i("input"),
            ins: i("ins"),
            kbd: i("kbd"),
            keygen: i("keygen"),
            label: i("label"),
            legend: i("legend"),
            li: i("li"),
            link: i("link"),
            main: i("main"),
            map: i("map"),
            mark: i("mark"),
            menu: i("menu"),
            menuitem: i("menuitem"),
            meta: i("meta"),
            meter: i("meter"),
            nav: i("nav"),
            noscript: i("noscript"),
            object: i("object"),
            ol: i("ol"),
            optgroup: i("optgroup"),
            option: i("option"),
            output: i("output"),
            p: i("p"),
            param: i("param"),
            picture: i("picture"),
            pre: i("pre"),
            progress: i("progress"),
            q: i("q"),
            rp: i("rp"),
            rt: i("rt"),
            ruby: i("ruby"),
            s: i("s"),
            samp: i("samp"),
            script: i("script"),
            section: i("section"),
            select: i("select"),
            small: i("small"),
            source: i("source"),
            span: i("span"),
            strong: i("strong"),
            style: i("style"),
            sub: i("sub"),
            summary: i("summary"),
            sup: i("sup"),
            table: i("table"),
            tbody: i("tbody"),
            td: i("td"),
            textarea: i("textarea"),
            tfoot: i("tfoot"),
            th: i("th"),
            thead: i("thead"),
            time: i("time"),
            title: i("title"),
            tr: i("tr"),
            track: i("track"),
            u: i("u"),
            ul: i("ul"),
            var: i("var"),
            video: i("video"),
            wbr: i("wbr"),
            circle: i("circle"),
            clipPath: i("clipPath"),
            defs: i("defs"),
            ellipse: i("ellipse"),
            g: i("g"),
            image: i("image"),
            line: i("line"),
            linearGradient: i("linearGradient"),
            mask: i("mask"),
            path: i("path"),
            pattern: i("pattern"),
            polygon: i("polygon"),
            polyline: i("polyline"),
            radialGradient: i("radialGradient"),
            rect: i("rect"),
            stop: i("stop"),
            svg: i("svg"),
            text: i("text"),
            tspan: i("tspan")
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(26)
          , i = r.isValidElement
          , o = n(100);
        t.exports = o(i)
    }
    , function(t, e, n) {
        "use strict";
        t.exports = "15.6.1"
    }
    , function(t, e, n) {
        "use strict";
        var r = n(128)
          , i = r.Component
          , o = n(26)
          , s = o.isValidElement
          , a = n(131)
          , c = n(180);
        t.exports = c(i, s, a)
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t && (i && t[i] || t[o]);
            if ("function" == typeof e)
                return e
        }
        var i = "function" == typeof Symbol && Symbol.iterator
          , o = "@@iterator";
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            return i++
        }
        var i = 1;
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = function() {};
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return o.isValidElement(t) || i("143"),
            t
        }
        var i = n(35)
          , o = n(26);
        n(1);
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return t && "object" == typeof t && null != t.key ? u.escape(t.key) : e.toString(36)
        }
        function i(t, e, n, o) {
            var h = typeof t;
            if ("undefined" !== h && "boolean" !== h || (t = null),
            null === t || "string" === h || "number" === h || "object" === h && t.$$typeof === a)
                return n(o, t, "" === e ? l + r(t, 0) : e),
                1;
            var d, f, m = 0, g = "" === e ? l : e + p;
            if (Array.isArray(t))
                for (var y = 0; y < t.length; y++)
                    d = t[y],
                    f = g + r(d, y),
                    m += i(d, f, n, o);
            else {
                var v = c(t);
                if (v) {
                    var b, _ = v.call(t);
                    if (v !== t.entries)
                        for (var C = 0; !(b = _.next()).done; )
                            d = b.value,
                            f = g + r(d, C++),
                            m += i(d, f, n, o);
                    else
                        for (; !(b = _.next()).done; ) {
                            var w = b.value;
                            w && (d = w[1],
                            f = g + u.escape(w[0]) + p + r(d, 0),
                            m += i(d, f, n, o))
                        }
                } else if ("object" === h) {
                    var S = ""
                      , x = String(t);
                    s("31", "[object Object]" === x ? "object with keys {" + Object.keys(t).join(", ") + "}" : x, S)
                }
            }
            return m
        }
        function o(t, e, n) {
            return null == t ? 0 : i(t, "", e, n)
        }
        var s = n(35)
          , a = (n(15),
        n(130))
          , c = n(346)
          , u = (n(1),
        n(339))
          , l = (n(3),
        ".")
          , p = ":";
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
            return Array.from(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.combineEpics = void 0;
        var i = n(150);
        e.combineEpics = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return function() {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                    n[o] = arguments[o];
                return i.merge.apply(void 0, r(e.map(function(t) {
                    var e = t.apply(void 0, n);
                    if (!e)
                        throw new TypeError('combineEpics: one of the provided Epics "' + (t.name || "<anonymous>") + "\" does not return a stream. Double check you're not missing a return statement!");
                    return e
                })))
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l
              , n = e.adapter
              , r = void 0 === n ? u : n;
            if ("function" != typeof t)
                throw new TypeError("You must provide a root Epic to createEpicMiddleware");
            var p = new i.Subject
              , h = r.input(new a.ActionsObservable(p))
              , d = new i.Subject
              , f = void 0
              , m = function(e) {
                return f = e,
                function(e) {
                    var n;
                    return (n = o.map.call(d, function(t) {
                        var e = t(h, f);
                        if (!e)
                            throw new TypeError('Your root Epic "' + (t.name || "<anonymous>") + "\" does not return a stream. Double check you're not missing a return statement!");
                        return e
                    }),
                    s.switchMap).call(n, function(t) {
                        return r.output(t)
                    }).subscribe(f.dispatch),
                    d.next(t),
                    function(t) {
                        var n = e(t);
                        return p.next(t),
                        n
                    }
                }
            };
            return m.replaceEpic = function(t) {
                f.dispatch({
                    type: c.EPIC_END
                }),
                d.next(t)
            }
            ,
            m
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.createEpicMiddleware = r;
        var i = n(27)
          , o = n(78)
          , s = n(404)
          , a = n(133)
          , c = n(134)
          , u = {
            input: function(t) {
                return t
            },
            output: function(t) {
                return t
            }
        }
          , l = {
            adapter: u
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(352);
        Object.defineProperty(e, "createEpicMiddleware", {
            enumerable: !0,
            get: function() {
                return r.createEpicMiddleware
            }
        });
        var i = n(133);
        Object.defineProperty(e, "ActionsObservable", {
            enumerable: !0,
            get: function() {
                return i.ActionsObservable
            }
        });
        var o = n(351);
        Object.defineProperty(e, "combineEpics", {
            enumerable: !0,
            get: function() {
                return o.combineEpics
            }
        });
        var s = n(134);
        Object.defineProperty(e, "EPIC_END", {
            enumerable: !0,
            get: function() {
                return s.EPIC_END
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return function(t) {
                return function(n, r, s) {
                    var a = t(n, r, s)
                      , c = a.dispatch
                      , u = []
                      , l = {
                        getState: a.getState,
                        dispatch: function(t) {
                            return c(t)
                        }
                    };
                    return u = e.map(function(t) {
                        return t(l)
                    }),
                    c = i.a.apply(void 0, u)(a.dispatch),
                    o({}, a, {
                        dispatch: c
                    })
                }
            }
        }
        var i = n(135);
        e.a = r;
        var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        }
        function i(t, e) {
            if ("function" == typeof t)
                return r(t, e);
            if ("object" != typeof t || null === t)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
                var s = n[o]
                  , a = t[s];
                "function" == typeof a && (i[s] = r(a, e))
            }
            return i
        }
        e.a = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = e && e.type;
            return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        }
        function i(t) {
            Object.keys(t).forEach(function(e) {
                var n = t[e];
                if (void 0 === n(void 0, {
                    type: s.a.INIT
                }))
                    throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                if (void 0 === n(void 0, {
                    type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                }))
                    throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + s.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
            })
        }
        function o(t) {
            for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
                var s = e[o];
                "function" == typeof t[s] && (n[s] = t[s])
            }
            var a = Object.keys(n)
              , c = void 0;
            try {
                i(n)
            } catch (t) {
                c = t
            }
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments[1];
                if (c)
                    throw c;
                for (var i = !1, o = {}, s = 0; s < a.length; s++) {
                    var u = a[s]
                      , l = n[u]
                      , p = t[u]
                      , h = l(p, e);
                    if (void 0 === h) {
                        var d = r(u, e);
                        throw new Error(d)
                    }
                    o[u] = h,
                    i = i || h !== p
                }
                return i ? o : t
            }
        }
        var s = n(136);
        n(56),
        n(137);
        e.a = o
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(27)
          , o = n(20)
          , s = function(t) {
            function e() {
                t.apply(this, arguments),
                this.value = null,
                this.hasNext = !1,
                this.hasCompleted = !1
            }
            return r(e, t),
            e.prototype._subscribe = function(e) {
                return this.hasError ? (e.error(this.thrownError),
                o.Subscription.EMPTY) : this.hasCompleted && this.hasNext ? (e.next(this.value),
                e.complete(),
                o.Subscription.EMPTY) : t.prototype._subscribe.call(this, e)
            }
            ,
            e.prototype.next = function(t) {
                this.hasCompleted || (this.value = t,
                this.hasNext = !0)
            }
            ,
            e.prototype.error = function(e) {
                this.hasCompleted || t.prototype.error.call(this, e)
            }
            ,
            e.prototype.complete = function() {
                this.hasCompleted = !0,
                this.hasNext && t.prototype.next.call(this, this.value),
                t.prototype.complete.call(this)
            }
            ,
            e
        }(i.Subject);
        e.AsyncSubject = s
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(27)
          , o = n(154)
          , s = function(t) {
            function e(e) {
                t.call(this),
                this._value = e
            }
            return r(e, t),
            Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this.getValue()
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype._subscribe = function(e) {
                var n = t.prototype._subscribe.call(this, e);
                return n && !n.closed && e.next(this._value),
                n
            }
            ,
            e.prototype.getValue = function() {
                if (this.hasError)
                    throw this.thrownError;
                if (this.closed)
                    throw new o.ObjectUnsubscribedError;
                return this._value
            }
            ,
            e.prototype.next = function(e) {
                t.prototype.next.call(this, this._value = e)
            }
            ,
            e
        }(i.Subject);
        e.BehaviorSubject = s
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(8)
          , o = function(t) {
            function e(e, n, r) {
                t.call(this),
                this.parent = e,
                this.outerValue = n,
                this.outerIndex = r,
                this.index = 0
            }
            return r(e, t),
            e.prototype._next = function(t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }
            ,
            e.prototype._error = function(t) {
                this.parent.notifyError(t, this),
                this.unsubscribe()
            }
            ,
            e.prototype._complete = function() {
                this.parent.notifyComplete(this),
                this.unsubscribe()
            }
            ,
            e
        }(i.Subscriber);
        e.InnerSubscriber = o
    }
    , function(t, e, n) {
        "use strict";
        var r = function() {
            function t(e, n) {
                void 0 === n && (n = t.now),
                this.SchedulerAction = e,
                this.now = n
            }
            return t.prototype.schedule = function(t, e, n) {
                return void 0 === e && (e = 0),
                new this.SchedulerAction(this,t).schedule(n, e)
            }
            ,
            t.now = Date.now ? Date.now : function() {
                return +new Date
            }
            ,
            t
        }();
        e.Scheduler = r
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(20)
          , o = function(t) {
            function e(e, n) {
                t.call(this),
                this.subject = e,
                this.subscriber = n,
                this.closed = !1
            }
            return r(e, t),
            e.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var t = this.subject
                      , e = t.observers;
                    if (this.subject = null,
                    e && 0 !== e.length && !t.isStopped && !t.closed) {
                        var n = e.indexOf(this.subscriber);
                        -1 !== n && e.splice(n, 1)
                    }
                }
            }
            ,
            e
        }(i.Subscription);
        e.SubjectSubscription = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(386);
        r.Observable.bindCallback = i.bindCallback
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(388);
        r.Observable.ajax = i.ajax
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(149);
        r.Observable.from = i.from
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(390);
        r.Observable.fromEvent = i.fromEvent
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(391);
        r.Observable.interval = i.interval
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(150);
        r.Observable.merge = i.merge
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(392);
        r.Observable.throw = i._throw
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(394);
        r.Observable.prototype.combineLatest = i.combineLatest
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(395);
        r.Observable.prototype.count = i.count
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(153);
        r.Observable.prototype.merge = i.merge
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(402);
        r.Observable.prototype.retryWhen = i.retryWhen
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(403);
        r.Observable.prototype.share = i.share
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(405);
        r.Observable.prototype.take = i.take
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(406);
        r.Observable.prototype.takeUntil = i.takeUntil
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(408);
        r.Observable.prototype.throttleTime = i.throttleTime
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(0)
          , o = n(148)
          , s = n(49)
          , a = function(t) {
            function e(e, n) {
                t.call(this),
                this.arrayLike = e,
                this.scheduler = n,
                n || 1 !== e.length || (this._isScalar = !0,
                this.value = e[0])
            }
            return r(e, t),
            e.create = function(t, n) {
                var r = t.length;
                return 0 === r ? new s.EmptyObservable : 1 === r ? new o.ScalarObservable(t[0],n) : new e(t,n)
            }
            ,
            e.dispatch = function(t) {
                var e = t.arrayLike
                  , n = t.index
                  , r = t.length
                  , i = t.subscriber;
                if (!i.closed) {
                    if (n >= r)
                        return void i.complete();
                    i.next(e[n]),
                    t.index = n + 1,
                    this.schedule(t)
                }
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this
                  , r = n.arrayLike
                  , i = n.scheduler
                  , o = r.length;
                if (i)
                    return i.schedule(e.dispatch, 0, {
                        arrayLike: r,
                        index: 0,
                        length: o,
                        subscriber: t
                    });
                for (var s = 0; s < o && !t.closed; s++)
                    t.next(r[s]);
                t.complete()
            }
            ,
            e
        }(i.Observable);
        e.ArrayLikeObservable = a
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.value
              , n = t.subject;
            n.next(e),
            n.complete()
        }
        function i(t) {
            var e = t.err;
            t.subject.error(e)
        }
        var o = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , s = n(0)
          , a = n(36)
          , c = n(28)
          , u = n(357)
          , l = function(t) {
            function e(e, n, r, i, o) {
                t.call(this),
                this.callbackFunc = e,
                this.selector = n,
                this.args = r,
                this.context = i,
                this.scheduler = o
            }
            return o(e, t),
            e.create = function(t, n, r) {
                return void 0 === n && (n = void 0),
                function() {
                    for (var i = [], o = 0; o < arguments.length; o++)
                        i[o - 0] = arguments[o];
                    return new e(t,n,i,this,r)
                }
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this.callbackFunc
                  , r = this.args
                  , i = this.scheduler
                  , o = this.subject;
                if (i)
                    return i.schedule(e.dispatch, 0, {
                        source: this,
                        subscriber: t,
                        context: this.context
                    });
                if (!o) {
                    o = this.subject = new u.AsyncSubject;
                    var s = function t() {
                        for (var e = [], n = 0; n < arguments.length; n++)
                            e[n - 0] = arguments[n];
                        var r = t.source
                          , i = r.selector
                          , o = r.subject;
                        if (i) {
                            var s = a.tryCatch(i).apply(this, e);
                            s === c.errorObject ? o.error(c.errorObject.e) : (o.next(s),
                            o.complete())
                        } else
                            o.next(e.length <= 1 ? e[0] : e),
                            o.complete()
                    };
                    s.source = this;
                    a.tryCatch(n).apply(this.context, r.concat(s)) === c.errorObject && o.error(c.errorObject.e)
                }
                return o.subscribe(t)
            }
            ,
            e.dispatch = function(t) {
                var e = this
                  , n = t.source
                  , o = t.subscriber
                  , s = t.context
                  , l = n.callbackFunc
                  , p = n.args
                  , h = n.scheduler
                  , d = n.subject;
                if (!d) {
                    d = n.subject = new u.AsyncSubject;
                    var f = function t() {
                        for (var n = [], o = 0; o < arguments.length; o++)
                            n[o - 0] = arguments[o];
                        var s = t.source
                          , u = s.selector
                          , l = s.subject;
                        if (u) {
                            var p = a.tryCatch(u).apply(this, n);
                            p === c.errorObject ? e.add(h.schedule(i, 0, {
                                err: c.errorObject.e,
                                subject: l
                            })) : e.add(h.schedule(r, 0, {
                                value: p,
                                subject: l
                            }))
                        } else {
                            var d = n.length <= 1 ? n[0] : n;
                            e.add(h.schedule(r, 0, {
                                value: d,
                                subject: l
                            }))
                        }
                    };
                    f.source = n;
                    a.tryCatch(l).apply(s, p.concat(f)) === c.errorObject && d.error(c.errorObject.e)
                }
                e.add(d.subscribe(o))
            }
            ,
            e
        }(s.Observable);
        e.BoundCallbackObservable = l
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(27)
          , o = n(0)
          , s = n(8)
          , a = n(20)
          , c = function(t) {
            function e(e, n) {
                t.call(this),
                this.source = e,
                this.subjectFactory = n,
                this._refCount = 0,
                this._isComplete = !1
            }
            return r(e, t),
            e.prototype._subscribe = function(t) {
                return this.getSubject().subscribe(t)
            }
            ,
            e.prototype.getSubject = function() {
                var t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()),
                this._subject
            }
            ,
            e.prototype.connect = function() {
                var t = this._connection;
                return t || (this._isComplete = !1,
                t = this._connection = new a.Subscription,
                t.add(this.source.subscribe(new l(this.getSubject(),this))),
                t.closed ? (this._connection = null,
                t = a.Subscription.EMPTY) : this._connection = t),
                t
            }
            ,
            e.prototype.refCount = function() {
                return this.lift(new p(this))
            }
            ,
            e
        }(o.Observable);
        e.ConnectableObservable = c;
        var u = c.prototype;
        e.connectableObservableDescriptor = {
            operator: {
                value: null
            },
            _refCount: {
                value: 0,
                writable: !0
            },
            _subject: {
                value: null,
                writable: !0
            },
            _connection: {
                value: null,
                writable: !0
            },
            _subscribe: {
                value: u._subscribe
            },
            _isComplete: {
                value: u._isComplete,
                writable: !0
            },
            getSubject: {
                value: u.getSubject
            },
            connect: {
                value: u.connect
            },
            refCount: {
                value: u.refCount
            }
        };
        var l = function(t) {
            function e(e, n) {
                t.call(this, e),
                this.connectable = n
            }
            return r(e, t),
            e.prototype._error = function(e) {
                this._unsubscribe(),
                t.prototype._error.call(this, e)
            }
            ,
            e.prototype._complete = function() {
                this.connectable._isComplete = !0,
                this._unsubscribe(),
                t.prototype._complete.call(this)
            }
            ,
            e.prototype._unsubscribe = function() {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._connection;
                    t._refCount = 0,
                    t._subject = null,
                    t._connection = null,
                    e && e.unsubscribe()
                }
            }
            ,
            e
        }(i.SubjectSubscriber)
          , p = function() {
            function t(t) {
                this.connectable = t
            }
            return t.prototype.call = function(t, e) {
                var n = this.connectable;
                n._refCount++;
                var r = new h(t,n)
                  , i = e.subscribe(r);
                return r.closed || (r.connection = n.connect()),
                i
            }
            ,
            t
        }()
          , h = function(t) {
            function e(e, n) {
                t.call(this, e),
                this.connectable = n
            }
            return r(e, t),
            e.prototype._unsubscribe = function() {
                var t = this.connectable;
                if (!t)
                    return void (this.connection = null);
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0)
                    return void (this.connection = null);
                if (t._refCount = e - 1,
                e > 1)
                    return void (this.connection = null);
                var n = this.connection
                  , r = t._connection;
                this.connection = null,
                !r || n && r !== n || r.unsubscribe()
            }
            ,
            e
        }(s.Subscriber)
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(0)
          , o = function(t) {
            function e(e, n) {
                t.call(this),
                this.error = e,
                this.scheduler = n
            }
            return r(e, t),
            e.create = function(t, n) {
                return new e(t,n)
            }
            ,
            e.dispatch = function(t) {
                var e = t.error;
                t.subscriber.error(e)
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this.error
                  , r = this.scheduler;
                if (t.syncErrorThrowable = !0,
                r)
                    return r.schedule(e.dispatch, 0, {
                        error: n,
                        subscriber: t
                    });
                t.error(n)
            }
            ,
            e
        }(i.Observable);
        e.ErrorObservable = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return !!t && "function" == typeof t.addListener && "function" == typeof t.removeListener
        }
        function i(t) {
            return !!t && "function" == typeof t.on && "function" == typeof t.off
        }
        function o(t) {
            return !!t && "[object NodeList]" === f.call(t)
        }
        function s(t) {
            return !!t && "[object HTMLCollection]" === f.call(t)
        }
        function a(t) {
            return !!t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
        }
        var c = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , u = n(0)
          , l = n(36)
          , p = n(83)
          , h = n(28)
          , d = n(20)
          , f = Object.prototype.toString
          , m = function(t) {
            function e(e, n, r, i) {
                t.call(this),
                this.sourceObj = e,
                this.eventName = n,
                this.selector = r,
                this.options = i
            }
            return c(e, t),
            e.create = function(t, n, r, i) {
                return p.isFunction(r) && (i = r,
                r = void 0),
                new e(t,n,i,r)
            }
            ,
            e.setupSubscription = function(t, n, c, u, l) {
                var p;
                if (o(t) || s(t))
                    for (var h = 0, f = t.length; h < f; h++)
                        e.setupSubscription(t[h], n, c, u, l);
                else if (a(t)) {
                    var m = t;
                    t.addEventListener(n, c, l),
                    p = function() {
                        return m.removeEventListener(n, c)
                    }
                } else if (i(t)) {
                    var g = t;
                    t.on(n, c),
                    p = function() {
                        return g.off(n, c)
                    }
                } else {
                    if (!r(t))
                        throw new TypeError("Invalid event target");
                    var y = t;
                    t.addListener(n, c),
                    p = function() {
                        return y.removeListener(n, c)
                    }
                }
                u.add(new d.Subscription(p))
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this.sourceObj
                  , r = this.eventName
                  , i = this.options
                  , o = this.selector
                  , s = o ? function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n - 0] = arguments[n];
                    var r = l.tryCatch(o).apply(void 0, e);
                    r === h.errorObject ? t.error(h.errorObject.e) : t.next(r)
                }
                : function(e) {
                    return t.next(e)
                }
                ;
                e.setupSubscription(n, r, s, t, i)
            }
            ,
            e
        }(u.Observable);
        e.FromEventObservable = m
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(50)
          , o = n(155)
          , s = n(157)
          , a = n(385)
          , c = n(384)
          , u = n(48)
          , l = n(377)
          , p = n(80)
          , h = n(0)
          , d = n(401)
          , f = n(81)
          , m = function(t) {
            function e(e, n) {
                t.call(this, null),
                this.ish = e,
                this.scheduler = n
            }
            return r(e, t),
            e.create = function(t, n) {
                if (null != t) {
                    if ("function" == typeof t[f.observable])
                        return t instanceof h.Observable && !n ? t : new e(t,n);
                    if (i.isArray(t))
                        return new u.ArrayObservable(t,n);
                    if (s.isPromise(t))
                        return new a.PromiseObservable(t,n);
                    if ("function" == typeof t[p.iterator] || "string" == typeof t)
                        return new c.IteratorObservable(t,n);
                    if (o.isArrayLike(t))
                        return new l.ArrayLikeObservable(t,n)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }
            ,
            e.prototype._subscribe = function(t) {
                var e = this.ish
                  , n = this.scheduler;
                return null == n ? e[f.observable]().subscribe(t) : e[f.observable]().subscribe(new d.ObserveOnSubscriber(t,n,0))
            }
            ,
            e
        }(h.Observable);
        e.FromObservable = m
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(415)
          , o = n(0)
          , s = n(79)
          , a = function(t) {
            function e(e, n) {
                void 0 === e && (e = 0),
                void 0 === n && (n = s.async),
                t.call(this),
                this.period = e,
                this.scheduler = n,
                (!i.isNumeric(e) || e < 0) && (this.period = 0),
                n && "function" == typeof n.schedule || (this.scheduler = s.async)
            }
            return r(e, t),
            e.create = function(t, n) {
                return void 0 === t && (t = 0),
                void 0 === n && (n = s.async),
                new e(t,n)
            }
            ,
            e.dispatch = function(t) {
                var e = t.index
                  , n = t.subscriber
                  , r = t.period;
                n.next(e),
                n.closed || (t.index += 1,
                this.schedule(t, r))
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this.period
                  , r = this.scheduler;
                t.add(r.schedule(e.dispatch, n, {
                    index: 0,
                    subscriber: t,
                    period: n
                }))
            }
            ,
            e
        }(o.Observable);
        e.IntervalObservable = a
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t[l.iterator];
            if (!e && "string" == typeof t)
                return new h(t);
            if (!e && void 0 !== t.length)
                return new d(t);
            if (!e)
                throw new TypeError("object is not iterable");
            return t[l.iterator]()
        }
        function i(t) {
            var e = +t.length;
            return isNaN(e) ? 0 : 0 !== e && o(e) ? (e = s(e) * Math.floor(Math.abs(e)),
            e <= 0 ? 0 : e > f ? f : e) : e
        }
        function o(t) {
            return "number" == typeof t && c.root.isFinite(t)
        }
        function s(t) {
            var e = +t;
            return 0 === e ? e : isNaN(e) ? e : e < 0 ? -1 : 1
        }
        var a = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , c = n(16)
          , u = n(0)
          , l = n(80)
          , p = function(t) {
            function e(e, n) {
                if (t.call(this),
                this.scheduler = n,
                null == e)
                    throw new Error("iterator cannot be null.");
                this.iterator = r(e)
            }
            return a(e, t),
            e.create = function(t, n) {
                return new e(t,n)
            }
            ,
            e.dispatch = function(t) {
                var e = t.index
                  , n = t.hasError
                  , r = t.iterator
                  , i = t.subscriber;
                if (n)
                    return void i.error(t.error);
                var o = r.next();
                return o.done ? void i.complete() : (i.next(o.value),
                t.index = e + 1,
                i.closed ? void ("function" == typeof r.return && r.return()) : void this.schedule(t))
            }
            ,
            e.prototype._subscribe = function(t) {
                var n = this
                  , r = n.iterator
                  , i = n.scheduler;
                if (i)
                    return i.schedule(e.dispatch, 0, {
                        index: 0,
                        iterator: r,
                        subscriber: t
                    });
                for (; ; ) {
                    var o = r.next();
                    if (o.done) {
                        t.complete();
                        break
                    }
                    if (t.next(o.value),
                    t.closed) {
                        "function" == typeof r.return && r.return();
                        break
                    }
                }
            }
            ,
            e
        }(u.Observable);
        e.IteratorObservable = p;
        var h = function() {
            function t(t, e, n) {
                void 0 === e && (e = 0),
                void 0 === n && (n = t.length),
                this.str = t,
                this.idx = e,
                this.len = n
            }
            return t.prototype[l.iterator] = function() {
                return this
            }
            ,
            t.prototype.next = function() {
                return this.idx < this.len ? {
                    done: !1,
                    value: this.str.charAt(this.idx++)
                } : {
                    done: !0,
                    value: void 0
                }
            }
            ,
            t
        }()
          , d = function() {
            function t(t, e, n) {
                void 0 === e && (e = 0),
                void 0 === n && (n = i(t)),
                this.arr = t,
                this.idx = e,
                this.len = n
            }
            return t.prototype[l.iterator] = function() {
                return this
            }
            ,
            t.prototype.next = function() {
                return this.idx < this.len ? {
                    done: !1,
                    value: this.arr[this.idx++]
                } : {
                    done: !0,
                    value: void 0
                }
            }
            ,
            t
        }()
          , f = Math.pow(2, 53) - 1
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = t.value
              , n = t.subscriber;
            n.closed || (n.next(e),
            n.complete())
        }
        function i(t) {
            var e = t.err
              , n = t.subscriber;
            n.closed || n.error(e)
        }
        var o = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , s = n(16)
          , a = n(0)
          , c = function(t) {
            function e(e, n) {
                t.call(this),
                this.promise = e,
                this.scheduler = n
            }
            return o(e, t),
            e.create = function(t, n) {
                return new e(t,n)
            }
            ,
            e.prototype._subscribe = function(t) {
                var e = this
                  , n = this.promise
                  , o = this.scheduler;
                if (null == o)
                    this._isScalar ? t.closed || (t.next(this.value),
                    t.complete()) : n.then(function(n) {
                        e.value = n,
                        e._isScalar = !0,
                        t.closed || (t.next(n),
                        t.complete())
                    }, function(e) {
                        t.closed || t.error(e)
                    }).then(null, function(t) {
                        s.root.setTimeout(function() {
                            throw t
                        })
                    });
                else if (this._isScalar) {
                    if (!t.closed)
                        return o.schedule(r, 0, {
                            value: this.value,
                            subscriber: t
                        })
                } else
                    n.then(function(n) {
                        e.value = n,
                        e._isScalar = !0,
                        t.closed || t.add(o.schedule(r, 0, {
                            value: n,
                            subscriber: t
                        }))
                    }, function(e) {
                        t.closed || t.add(o.schedule(i, 0, {
                            err: e,
                            subscriber: t
                        }))
                    }).then(null, function(t) {
                        s.root.setTimeout(function() {
                            throw t
                        })
                    })
            }
            ,
            e
        }(a.Observable);
        e.PromiseObservable = c
    }
    , function(t, e, n) {
        "use strict";
        var r = n(378);
        e.bindCallback = r.BoundCallbackObservable.create
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            if (h.root.XMLHttpRequest)
                return new h.root.XMLHttpRequest;
            if (h.root.XDomainRequest)
                return new h.root.XDomainRequest;
            throw new Error("CORS is not supported by your browser")
        }
        function i() {
            if (h.root.XMLHttpRequest)
                return new h.root.XMLHttpRequest;
            var t = void 0;
            try {
                for (var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], n = 0; n < 3; n++)
                    try {
                        if (t = e[n],
                        new h.root.ActiveXObject(t))
                            break
                    } catch (t) {}
                return new h.root.ActiveXObject(t)
            } catch (t) {
                throw new Error("XMLHttpRequest is not supported by your browser")
            }
        }
        function o(t, e) {
            return void 0 === e && (e = null),
            new v({
                method: "GET",
                url: t,
                headers: e
            })
        }
        function s(t, e, n) {
            return new v({
                method: "POST",
                url: t,
                body: e,
                headers: n
            })
        }
        function a(t, e) {
            return new v({
                method: "DELETE",
                url: t,
                headers: e
            })
        }
        function c(t, e, n) {
            return new v({
                method: "PUT",
                url: t,
                body: e,
                headers: n
            })
        }
        function u(t, e, n) {
            return new v({
                method: "PATCH",
                url: t,
                body: e,
                headers: n
            })
        }
        function l(t, e) {
            return new v({
                method: "GET",
                url: t,
                responseType: "json",
                headers: e
            }).lift(new y.MapOperator(function(t, e) {
                return t.response
            }
            ,null))
        }
        var p = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , h = n(16)
          , d = n(36)
          , f = n(28)
          , m = n(0)
          , g = n(8)
          , y = n(78);
        e.ajaxGet = o,
        e.ajaxPost = s,
        e.ajaxDelete = a,
        e.ajaxPut = c,
        e.ajaxPatch = u,
        e.ajaxGetJSON = l;
        var v = function(t) {
            function e(e) {
                t.call(this);
                var n = {
                    async: !0,
                    createXHR: function() {
                        return this.crossDomain ? r.call(this) : i()
                    },
                    crossDomain: !1,
                    withCredentials: !1,
                    headers: {},
                    method: "GET",
                    responseType: "json",
                    timeout: 0
                };
                if ("string" == typeof e)
                    n.url = e;
                else
                    for (var o in e)
                        e.hasOwnProperty(o) && (n[o] = e[o]);
                this.request = n
            }
            return p(e, t),
            e.prototype._subscribe = function(t) {
                return new b(t,this.request)
            }
            ,
            e.create = function() {
                var t = function(t) {
                    return new e(t)
                };
                return t.get = o,
                t.post = s,
                t.delete = a,
                t.put = c,
                t.patch = u,
                t.getJSON = l,
                t
            }(),
            e
        }(m.Observable);
        e.AjaxObservable = v;
        var b = function(t) {
            function e(e, n) {
                t.call(this, e),
                this.request = n,
                this.done = !1;
                var r = n.headers = n.headers || {};
                n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                "Content-Type"in r || h.root.FormData && n.body instanceof h.root.FormData || void 0 === n.body || (r["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"),
                n.body = this.serializeBody(n.body, n.headers["Content-Type"]),
                this.send()
            }
            return p(e, t),
            e.prototype.next = function(t) {
                this.done = !0;
                var e = this
                  , n = e.xhr
                  , r = e.request
                  , i = e.destination
                  , o = new _(t,n,r);
                i.next(o)
            }
            ,
            e.prototype.send = function() {
                var t = this
                  , e = t.request
                  , n = t.request
                  , r = n.user
                  , i = n.method
                  , o = n.url
                  , s = n.async
                  , a = n.password
                  , c = n.headers
                  , u = n.body
                  , l = e.createXHR
                  , p = d.tryCatch(l).call(e);
                if (p === f.errorObject)
                    this.error(f.errorObject.e);
                else {
                    this.xhr = p,
                    this.setupEvents(p, e);
                    if ((r ? d.tryCatch(p.open).call(p, i, o, s, r, a) : d.tryCatch(p.open).call(p, i, o, s)) === f.errorObject)
                        return this.error(f.errorObject.e),
                        null;
                    if (s && (p.timeout = e.timeout,
                    p.responseType = e.responseType),
                    "withCredentials"in p && (p.withCredentials = !!e.withCredentials),
                    this.setHeaders(p, c),
                    (u ? d.tryCatch(p.send).call(p, u) : d.tryCatch(p.send).call(p)) === f.errorObject)
                        return this.error(f.errorObject.e),
                        null
                }
                return p
            }
            ,
            e.prototype.serializeBody = function(t, e) {
                if (!t || "string" == typeof t)
                    return t;
                if (h.root.FormData && t instanceof h.root.FormData)
                    return t;
                if (e) {
                    var n = e.indexOf(";");
                    -1 !== n && (e = e.substring(0, n))
                }
                switch (e) {
                case "application/x-www-form-urlencoded":
                    return Object.keys(t).map(function(e) {
                        return encodeURI(e) + "=" + encodeURI(t[e])
                    }).join("&");
                case "application/json":
                    return JSON.stringify(t);
                default:
                    return t
                }
            }
            ,
            e.prototype.setHeaders = function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && t.setRequestHeader(n, e[n])
            }
            ,
            e.prototype.setupEvents = function(t, e) {
                function n(t) {
                    var e = n
                      , r = e.subscriber
                      , i = e.progressSubscriber
                      , o = e.request;
                    i && i.error(t),
                    r.error(new w(this,o))
                }
                function r(t) {
                    var e = r
                      , n = e.subscriber
                      , i = e.progressSubscriber
                      , o = e.request;
                    if (4 === this.readyState) {
                        var s = 1223 === this.status ? 204 : this.status
                          , a = "text" === this.responseType ? this.response || this.responseText : this.response;
                        0 === s && (s = a ? 200 : 0),
                        200 <= s && s < 300 ? (i && i.complete(),
                        n.next(t),
                        n.complete()) : (i && i.error(t),
                        n.error(new C("ajax error " + s,this,o)))
                    }
                }
                var i = e.progressSubscriber;
                if (t.ontimeout = n,
                n.request = e,
                n.subscriber = this,
                n.progressSubscriber = i,
                t.upload && "withCredentials"in t) {
                    if (i) {
                        var o;
                        o = function(t) {
                            o.progressSubscriber.next(t)
                        }
                        ,
                        h.root.XDomainRequest ? t.onprogress = o : t.upload.onprogress = o,
                        o.progressSubscriber = i
                    }
                    var s;
                    s = function(t) {
                        var e = s
                          , n = e.progressSubscriber
                          , r = e.subscriber
                          , i = e.request;
                        n && n.error(t),
                        r.error(new C("ajax error",this,i))
                    }
                    ,
                    t.onerror = s,
                    s.request = e,
                    s.subscriber = this,
                    s.progressSubscriber = i
                }
                t.onreadystatechange = r,
                r.subscriber = this,
                r.progressSubscriber = i,
                r.request = e
            }
            ,
            e.prototype.unsubscribe = function() {
                var e = this
                  , n = e.done
                  , r = e.xhr;
                !n && r && 4 !== r.readyState && "function" == typeof r.abort && r.abort(),
                t.prototype.unsubscribe.call(this)
            }
            ,
            e
        }(g.Subscriber);
        e.AjaxSubscriber = b;
        var _ = function() {
            function t(t, e, n) {
                switch (this.originalEvent = t,
                this.xhr = e,
                this.request = n,
                this.status = e.status,
                this.responseType = e.responseType || n.responseType,
                this.responseType) {
                case "json":
                    this.response = "response"in e ? e.responseType ? e.response : JSON.parse(e.response || e.responseText || "null") : JSON.parse(e.responseText || "null");
                    break;
                case "xml":
                    this.response = e.responseXML;
                    break;
                case "text":
                default:
                    this.response = "response"in e ? e.response : e.responseText
                }
            }
            return t
        }();
        e.AjaxResponse = _;
        var C = function(t) {
            function e(e, n, r) {
                t.call(this, e),
                this.message = e,
                this.xhr = n,
                this.request = r,
                this.status = n.status
            }
            return p(e, t),
            e
        }(Error);
        e.AjaxError = C;
        var w = function(t) {
            function e(e, n) {
                t.call(this, "ajax timeout", e, n)
            }
            return p(e, t),
            e
        }(C);
        e.AjaxTimeoutError = w
    }
    , function(t, e, n) {
        "use strict";
        var r = n(387);
        e.ajax = r.AjaxObservable.create
    }
    , function(t, e, n) {
        "use strict";
        var r = n(49);
        e.empty = r.EmptyObservable.create
    }
    , function(t, e, n) {
        "use strict";
        var r = n(381);
        e.fromEvent = r.FromEventObservable.create
    }
    , function(t, e, n) {
        "use strict";
        var r = n(383);
        e.interval = r.IntervalObservable.create
    }
    , function(t, e, n) {
        "use strict";
        var r = n(380);
        e._throw = r.ErrorObservable.create
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = new a(t)
              , n = this.lift(e);
            return e.caught = n
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(17)
          , s = n(18);
        e._catch = r;
        var a = function() {
            function t(t) {
                this.selector = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t,this.selector,this.caught))
            }
            ,
            t
        }()
          , c = function(t) {
            function e(e, n, r) {
                t.call(this, e),
                this.selector = n,
                this.caught = r
            }
            return i(e, t),
            e.prototype.error = function(e) {
                if (!this.isStopped) {
                    var n = void 0;
                    try {
                        n = this.selector(e, this.caught)
                    } catch (e) {
                        return void t.prototype.error.call(this, e)
                    }
                    this._unsubscribeAndRecycle(),
                    this.add(s.subscribeToResult(this, n))
                }
            }
            ,
            e
        }(o.OuterSubscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e - 0] = arguments[e];
            var n = null;
            return "function" == typeof t[t.length - 1] && (n = t.pop()),
            1 === t.length && s.isArray(t[0]) && (t = t[0].slice()),
            t.unshift(this),
            this.lift.call(new o.ArrayObservable(t), new l(n))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(48)
          , s = n(50)
          , a = n(17)
          , c = n(18)
          , u = {};
        e.combineLatest = r;
        var l = function() {
            function t(t) {
                this.project = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new p(t,this.project))
            }
            ,
            t
        }();
        e.CombineLatestOperator = l;
        var p = function(t) {
            function e(e, n) {
                t.call(this, e),
                this.project = n,
                this.active = 0,
                this.values = [],
                this.observables = []
            }
            return i(e, t),
            e.prototype._next = function(t) {
                this.values.push(u),
                this.observables.push(t)
            }
            ,
            e.prototype._complete = function() {
                var t = this.observables
                  , e = t.length;
                if (0 === e)
                    this.destination.complete();
                else {
                    this.active = e,
                    this.toRespond = e;
                    for (var n = 0; n < e; n++) {
                        var r = t[n];
                        this.add(c.subscribeToResult(this, r, r, n))
                    }
                }
            }
            ,
            e.prototype.notifyComplete = function(t) {
                0 == (this.active -= 1) && this.destination.complete()
            }
            ,
            e.prototype.notifyNext = function(t, e, n, r, i) {
                var o = this.values
                  , s = o[n]
                  , a = this.toRespond ? s === u ? --this.toRespond : this.toRespond : 0;
                o[n] = e,
                0 === a && (this.project ? this._tryProject(o) : this.destination.next(o.slice()))
            }
            ,
            e.prototype._tryProject = function(t) {
                var e;
                try {
                    e = this.project.apply(this, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }
            ,
            e
        }(a.OuterSubscriber);
        e.CombineLatestSubscriber = p
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return this.lift(new s(t,this))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(8);
        e.count = r;
        var s = function() {
            function t(t, e) {
                this.predicate = t,
                this.source = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new a(t,this.predicate,this.source))
            }
            ,
            t
        }()
          , a = function(t) {
            function e(e, n, r) {
                t.call(this, e),
                this.predicate = n,
                this.source = r,
                this.count = 0,
                this.index = 0
            }
            return i(e, t),
            e.prototype._next = function(t) {
                this.predicate ? this._tryPredicate(t) : this.count++
            }
            ,
            e.prototype._tryPredicate = function(t) {
                var e;
                try {
                    e = this.predicate(t, this.index++, this.source)
                } catch (t) {
                    return void this.destination.error(t)
                }
                e && this.count++
            }
            ,
            e.prototype._complete = function() {
                this.destination.next(this.count),
                this.destination.complete()
            }
            ,
            e
        }(o.Subscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            void 0 === e && (e = o.async);
            var n = s.isDate(t)
              , r = n ? +t - e.now() : Math.abs(t);
            return this.lift(new u(r,e))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(79)
          , s = n(414)
          , a = n(8)
          , c = n(138);
        e.delay = r;
        var u = function() {
            function t(t, e) {
                this.delay = t,
                this.scheduler = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new l(t,this.delay,this.scheduler))
            }
            ,
            t
        }()
          , l = function(t) {
            function e(e, n, r) {
                t.call(this, e),
                this.delay = n,
                this.scheduler = r,
                this.queue = [],
                this.active = !1,
                this.errored = !1
            }
            return i(e, t),
            e.dispatch = function(t) {
                for (var e = t.source, n = e.queue, r = t.scheduler, i = t.destination; n.length > 0 && n[0].time - r.now() <= 0; )
                    n.shift().notification.observe(i);
                if (n.length > 0) {
                    var o = Math.max(0, n[0].time - r.now());
                    this.schedule(t, o)
                } else
                    e.active = !1
            }
            ,
            e.prototype._schedule = function(t) {
                this.active = !0,
                this.add(t.schedule(e.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: t
                }))
            }
            ,
            e.prototype.scheduleNotification = function(t) {
                if (!0 !== this.errored) {
                    var e = this.scheduler
                      , n = new p(e.now() + this.delay,t);
                    this.queue.push(n),
                    !1 === this.active && this._schedule(e)
                }
            }
            ,
            e.prototype._next = function(t) {
                this.scheduleNotification(c.Notification.createNext(t))
            }
            ,
            e.prototype._error = function(t) {
                this.errored = !0,
                this.queue = [],
                this.destination.error(t)
            }
            ,
            e.prototype._complete = function() {
                this.scheduleNotification(c.Notification.createComplete())
            }
            ,
            e
        }(a.Subscriber)
          , p = function() {
            function t(t, e) {
                this.time = t,
                this.notification = e
            }
            return t
        }()
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            return this.lift(new s(t,e,n))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(8);
        e._do = r;
        var s = function() {
            function t(t, e, n) {
                this.nextOrObserver = t,
                this.error = e,
                this.complete = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new a(t,this.nextOrObserver,this.error,this.complete))
            }
            ,
            t
        }()
          , a = function(t) {
            function e(e, n, r, i) {
                t.call(this, e);
                var s = new o.Subscriber(n,r,i);
                s.syncErrorThrowable = !0,
                this.add(s),
                this.safeSubscriber = s
            }
            return i(e, t),
            e.prototype._next = function(t) {
                var e = this.safeSubscriber;
                e.next(t),
                e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.next(t)
            }
            ,
            e.prototype._error = function(t) {
                var e = this.safeSubscriber;
                e.error(t),
                e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.error(t)
            }
            ,
            e.prototype._complete = function() {
                var t = this.safeSubscriber;
                t.complete(),
                t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.complete()
            }
            ,
            e
        }(o.Subscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return void 0 === t && (t = Number.POSITIVE_INFINITY),
            this.lift(new a(t))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(17)
          , s = n(18);
        e.mergeAll = r;
        var a = function() {
            function t(t) {
                this.concurrent = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t,this.concurrent))
            }
            ,
            t
        }();
        e.MergeAllOperator = a;
        var c = function(t) {
            function e(e, n) {
                t.call(this, e),
                this.concurrent = n,
                this.hasCompleted = !1,
                this.buffer = [],
                this.active = 0
            }
            return i(e, t),
            e.prototype._next = function(t) {
                this.active < this.concurrent ? (this.active++,
                this.add(s.subscribeToResult(this, t))) : this.buffer.push(t)
            }
            ,
            e.prototype._complete = function() {
                this.hasCompleted = !0,
                0 === this.active && 0 === this.buffer.length && this.destination.complete()
            }
            ,
            e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.remove(t),
                this.active--,
                e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }
            ,
            e
        }(o.OuterSubscriber);
        e.MergeAllSubscriber = c
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            return void 0 === n && (n = Number.POSITIVE_INFINITY),
            "number" == typeof e && (n = e,
            e = null),
            this.lift(new a(t,e,n))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(18)
          , s = n(17);
        e.mergeMap = r;
        var a = function() {
            function t(t, e, n) {
                void 0 === n && (n = Number.POSITIVE_INFINITY),
                this.project = t,
                this.resultSelector = e,
                this.concurrent = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t,this.project,this.resultSelector,this.concurrent))
            }
            ,
            t
        }();
        e.MergeMapOperator = a;
        var c = function(t) {
            function e(e, n, r, i) {
                void 0 === i && (i = Number.POSITIVE_INFINITY),
                t.call(this, e),
                this.project = n,
                this.resultSelector = r,
                this.concurrent = i,
                this.hasCompleted = !1,
                this.buffer = [],
                this.active = 0,
                this.index = 0
            }
            return i(e, t),
            e.prototype._next = function(t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }
            ,
            e.prototype._tryNext = function(t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.active++,
                this._innerSub(e, t, n)
            }
            ,
            e.prototype._innerSub = function(t, e, n) {
                this.add(o.subscribeToResult(this, t, e, n))
            }
            ,
            e.prototype._complete = function() {
                this.hasCompleted = !0,
                0 === this.active && 0 === this.buffer.length && this.destination.complete()
            }
            ,
            e.prototype.notifyNext = function(t, e, n, r, i) {
                this.resultSelector ? this._notifyResultSelector(t, e, n, r) : this.destination.next(e)
            }
            ,
            e.prototype._notifyResultSelector = function(t, e, n, r) {
                var i;
                try {
                    i = this.resultSelector(t, e, n, r)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(i)
            }
            ,
            e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.remove(t),
                this.active--,
                e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }
            ,
            e
        }(s.OuterSubscriber);
        e.MergeMapSubscriber = c
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n;
            if (n = "function" == typeof t ? t : function() {
                return t
            }
            ,
            "function" == typeof e)
                return this.lift(new o(n,e));
            var r = Object.create(this, i.connectableObservableDescriptor);
            return r.source = this,
            r.subjectFactory = n,
            r
        }
        var i = n(379);
        e.multicast = r;
        var o = function() {
            function t(t, e) {
                this.subjectFactory = t,
                this.selector = e
            }
            return t.prototype.call = function(t, e) {
                var n = this.selector
                  , r = this.subjectFactory()
                  , i = n(r).subscribe(t);
                return i.add(e.subscribe(r)),
                i
            }
            ,
            t
        }();
        e.MulticastOperator = o
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return void 0 === e && (e = 0),
            this.lift(new a(t,e))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(8)
          , s = n(138);
        e.observeOn = r;
        var a = function() {
            function t(t, e) {
                void 0 === e && (e = 0),
                this.scheduler = t,
                this.delay = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t,this.scheduler,this.delay))
            }
            ,
            t
        }();
        e.ObserveOnOperator = a;
        var c = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = 0),
                t.call(this, e),
                this.scheduler = n,
                this.delay = r
            }
            return i(e, t),
            e.dispatch = function(t) {
                var e = t.notification
                  , n = t.destination;
                e.observe(n),
                this.unsubscribe()
            }
            ,
            e.prototype.scheduleMessage = function(t) {
                this.add(this.scheduler.schedule(e.dispatch, this.delay, new u(t,this.destination)))
            }
            ,
            e.prototype._next = function(t) {
                this.scheduleMessage(s.Notification.createNext(t))
            }
            ,
            e.prototype._error = function(t) {
                this.scheduleMessage(s.Notification.createError(t))
            }
            ,
            e.prototype._complete = function() {
                this.scheduleMessage(s.Notification.createComplete())
            }
            ,
            e
        }(o.Subscriber);
        e.ObserveOnSubscriber = c;
        var u = function() {
            function t(t, e) {
                this.notification = t,
                this.destination = e
            }
            return t
        }();
        e.ObserveOnMessage = u
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return this.lift(new l(t,this))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(27)
          , s = n(36)
          , a = n(28)
          , c = n(17)
          , u = n(18);
        e.retryWhen = r;
        var l = function() {
            function t(t, e) {
                this.notifier = t,
                this.source = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new p(t,this.notifier,this.source))
            }
            ,
            t
        }()
          , p = function(t) {
            function e(e, n, r) {
                t.call(this, e),
                this.notifier = n,
                this.source = r
            }
            return i(e, t),
            e.prototype.error = function(e) {
                if (!this.isStopped) {
                    var n = this.errors
                      , r = this.retries
                      , i = this.retriesSubscription;
                    if (r)
                        this.errors = null,
                        this.retriesSubscription = null;
                    else {
                        if (n = new o.Subject,
                        (r = s.tryCatch(this.notifier)(n)) === a.errorObject)
                            return t.prototype.error.call(this, a.errorObject.e);
                        i = u.subscribeToResult(this, r)
                    }
                    this._unsubscribeAndRecycle(),
                    this.errors = n,
                    this.retries = r,
                    this.retriesSubscription = i,
                    n.next(e)
                }
            }
            ,
            e.prototype._unsubscribe = function() {
                var t = this
                  , e = t.errors
                  , n = t.retriesSubscription;
                e && (e.unsubscribe(),
                this.errors = null),
                n && (n.unsubscribe(),
                this.retriesSubscription = null),
                this.retries = null
            }
            ,
            e.prototype.notifyNext = function(t, e, n, r, i) {
                var o = this
                  , s = o.errors
                  , a = o.retries
                  , c = o.retriesSubscription;
                this.errors = null,
                this.retries = null,
                this.retriesSubscription = null,
                this._unsubscribeAndRecycle(),
                this.errors = s,
                this.retries = a,
                this.retriesSubscription = c,
                this.source.subscribe(this)
            }
            ,
            e
        }(c.OuterSubscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            return new s.Subject
        }
        function i() {
            return o.multicast.call(this, r).refCount()
        }
        var o = n(400)
          , s = n(27);
        e.share = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return this.lift(new a(t,e))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(17)
          , s = n(18);
        e.switchMap = r;
        var a = function() {
            function t(t, e) {
                this.project = t,
                this.resultSelector = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t,this.project,this.resultSelector))
            }
            ,
            t
        }()
          , c = function(t) {
            function e(e, n, r) {
                t.call(this, e),
                this.project = n,
                this.resultSelector = r,
                this.index = 0
            }
            return i(e, t),
            e.prototype._next = function(t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this._innerSub(e, t, n)
            }
            ,
            e.prototype._innerSub = function(t, e, n) {
                var r = this.innerSubscription;
                r && r.unsubscribe(),
                this.add(this.innerSubscription = s.subscribeToResult(this, t, e, n))
            }
            ,
            e.prototype._complete = function() {
                var e = this.innerSubscription;
                e && !e.closed || t.prototype._complete.call(this)
            }
            ,
            e.prototype._unsubscribe = function() {
                this.innerSubscription = null
            }
            ,
            e.prototype.notifyComplete = function(e) {
                this.remove(e),
                this.innerSubscription = null,
                this.isStopped && t.prototype._complete.call(this)
            }
            ,
            e.prototype.notifyNext = function(t, e, n, r, i) {
                this.resultSelector ? this._tryNotifyNext(t, e, n, r) : this.destination.next(e)
            }
            ,
            e.prototype._tryNotifyNext = function(t, e, n, r) {
                var i;
                try {
                    i = this.resultSelector(t, e, n, r)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(i)
            }
            ,
            e
        }(o.OuterSubscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return 0 === t ? new a.EmptyObservable : this.lift(new c(t))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(8)
          , s = n(412)
          , a = n(49);
        e.take = r;
        var c = function() {
            function t(t) {
                if (this.total = t,
                this.total < 0)
                    throw new s.ArgumentOutOfRangeError
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new u(t,this.total))
            }
            ,
            t
        }()
          , u = function(t) {
            function e(e, n) {
                t.call(this, e),
                this.total = n,
                this.count = 0
            }
            return i(e, t),
            e.prototype._next = function(t) {
                var e = this.total
                  , n = ++this.count;
                n <= e && (this.destination.next(t),
                n === e && (this.destination.complete(),
                this.unsubscribe()))
            }
            ,
            e
        }(o.Subscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return this.lift(new a(t))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(17)
          , s = n(18);
        e.takeUntil = r;
        var a = function() {
            function t(t) {
                this.notifier = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t,this.notifier))
            }
            ,
            t
        }()
          , c = function(t) {
            function e(e, n) {
                t.call(this, e),
                this.notifier = n,
                this.add(s.subscribeToResult(this, n))
            }
            return i(e, t),
            e.prototype.notifyNext = function(t, e, n, r, i) {
                this.complete()
            }
            ,
            e.prototype.notifyComplete = function() {}
            ,
            e
        }(o.OuterSubscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r(t, n) {
            return void 0 === n && (n = e.defaultThrottleConfig),
            this.lift(new a(t,n.leading,n.trailing))
        }
        var i = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , o = n(17)
          , s = n(18);
        e.defaultThrottleConfig = {
            leading: !0,
            trailing: !1
        },
        e.throttle = r;
        var a = function() {
            function t(t, e, n) {
                this.durationSelector = t,
                this.leading = e,
                this.trailing = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t,this.durationSelector,this.leading,this.trailing))
            }
            ,
            t
        }()
          , c = function(t) {
            function e(e, n, r, i) {
                t.call(this, e),
                this.destination = e,
                this.durationSelector = n,
                this._leading = r,
                this._trailing = i,
                this._hasTrailingValue = !1
            }
            return i(e, t),
            e.prototype._next = function(t) {
                if (this.throttled)
                    this._trailing && (this._hasTrailingValue = !0,
                    this._trailingValue = t);
                else {
                    var e = this.tryDurationSelector(t);
                    e && this.add(this.throttled = s.subscribeToResult(this, e)),
                    this._leading && (this.destination.next(t),
                    this._trailing && (this._hasTrailingValue = !0,
                    this._trailingValue = t))
                }
            }
            ,
            e.prototype.tryDurationSelector = function(t) {
                try {
                    return this.durationSelector(t)
                } catch (t) {
                    return this.destination.error(t),
                    null
                }
            }
            ,
            e.prototype._unsubscribe = function() {
                var t = this
                  , e = t.throttled;
                t._trailingValue,
                t._hasTrailingValue,
                t._trailing;
                this._trailingValue = null,
                this._hasTrailingValue = !1,
                e && (this.remove(e),
                this.throttled = null,
                e.unsubscribe())
            }
            ,
            e.prototype._sendTrailing = function() {
                var t = this
                  , e = t.destination
                  , n = t.throttled
                  , r = t._trailing
                  , i = t._trailingValue
                  , o = t._hasTrailingValue;
                n && r && o && (e.next(i),
                this._trailingValue = null,
                this._hasTrailingValue = !1)
            }
            ,
            e.prototype.notifyNext = function(t, e, n, r, i) {
                this._sendTrailing(),
                this._unsubscribe()
            }
            ,
            e.prototype.notifyComplete = function() {
                this._sendTrailing(),
                this._unsubscribe()
            }
            ,
            e
        }(o.OuterSubscriber)
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            return void 0 === e && (e = a.async),
            void 0 === n && (n = c.defaultThrottleConfig),
            this.lift(new u(t,e,n.leading,n.trailing))
        }
        function i(t) {
            t.subscriber.clearThrottle()
        }
        var o = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , s = n(8)
          , a = n(79)
          , c = n(407);
        e.throttleTime = r;
        var u = function() {
            function t(t, e, n, r) {
                this.duration = t,
                this.scheduler = e,
                this.leading = n,
                this.trailing = r
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new l(t,this.duration,this.scheduler,this.leading,this.trailing))
            }
            ,
            t
        }()
          , l = function(t) {
            function e(e, n, r, i, o) {
                t.call(this, e),
                this.duration = n,
                this.scheduler = r,
                this.leading = i,
                this.trailing = o,
                this._hasTrailingValue = !1,
                this._trailingValue = null
            }
            return o(e, t),
            e.prototype._next = function(t) {
                this.throttled ? this.trailing && (this._trailingValue = t,
                this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(i, this.duration, {
                    subscriber: this
                })),
                this.leading && this.destination.next(t))
            }
            ,
            e.prototype.clearThrottle = function() {
                var t = this.throttled;
                t && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue),
                this._trailingValue = null,
                this._hasTrailingValue = !1),
                t.unsubscribe(),
                this.remove(t),
                this.throttled = null)
            }
            ,
            e
        }(s.Subscriber)
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(20)
          , o = function(t) {
            function e(e, n) {
                t.call(this)
            }
            return r(e, t),
            e.prototype.schedule = function(t, e) {
                return void 0 === e && (e = 0),
                this
            }
            ,
            e
        }(i.Subscription);
        e.Action = o
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(16)
          , o = n(409)
          , s = function(t) {
            function e(e, n) {
                t.call(this, e, n),
                this.scheduler = e,
                this.work = n,
                this.pending = !1
            }
            return r(e, t),
            e.prototype.schedule = function(t, e) {
                if (void 0 === e && (e = 0),
                this.closed)
                    return this;
                this.state = t,
                this.pending = !0;
                var n = this.id
                  , r = this.scheduler;
                return null != n && (this.id = this.recycleAsyncId(r, n, e)),
                this.delay = e,
                this.id = this.id || this.requestAsyncId(r, this.id, e),
                this
            }
            ,
            e.prototype.requestAsyncId = function(t, e, n) {
                return void 0 === n && (n = 0),
                i.root.setInterval(t.flush.bind(t, this), n)
            }
            ,
            e.prototype.recycleAsyncId = function(t, e, n) {
                return void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending ? e : i.root.clearInterval(e) && void 0 || void 0
            }
            ,
            e.prototype.execute = function(t, e) {
                if (this.closed)
                    return new Error("executing a cancelled action");
                this.pending = !1;
                var n = this._execute(t, e);
                if (n)
                    return n;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }
            ,
            e.prototype._execute = function(t, e) {
                var n = !1
                  , r = void 0;
                try {
                    this.work(t)
                } catch (t) {
                    n = !0,
                    r = !!t && t || new Error(t)
                }
                if (n)
                    return this.unsubscribe(),
                    r
            }
            ,
            e.prototype._unsubscribe = function() {
                var t = this.id
                  , e = this.scheduler
                  , n = e.actions
                  , r = n.indexOf(this);
                this.work = null,
                this.state = null,
                this.pending = !1,
                this.scheduler = null,
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                this.delay = null
            }
            ,
            e
        }(o.Action);
        e.AsyncAction = s
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = n(360)
          , o = function(t) {
            function e() {
                t.apply(this, arguments),
                this.actions = [],
                this.active = !1,
                this.scheduled = void 0
            }
            return r(e, t),
            e.prototype.flush = function(t) {
                var e = this.actions;
                if (this.active)
                    return void e.push(t);
                var n;
                this.active = !0;
                do {
                    if (n = t.execute(t.state, t.delay))
                        break
                } while (t = e.shift());if (this.active = !1,
                n) {
                    for (; t = e.shift(); )
                        t.unsubscribe();
                    throw n
                }
            }
            ,
            e
        }(i.Scheduler);
        e.AsyncScheduler = o
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = function(t) {
            function e() {
                var e = t.call(this, "argument out of range");
                this.name = e.name = "ArgumentOutOfRangeError",
                this.stack = e.stack,
                this.message = e.message
            }
            return r(e, t),
            e
        }(Error);
        e.ArgumentOutOfRangeError = i
    }
    , function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var r in e)
                e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
          , i = function(t) {
            function e(e) {
                t.call(this),
                this.errors = e;
                var n = Error.call(this, e ? e.length + " errors occurred during unsubscription:\n  " + e.map(function(t, e) {
                    return e + 1 + ") " + t.toString()
                }).join("\n  ") : "");
                this.name = n.name = "UnsubscriptionError",
                this.stack = n.stack,
                this.message = n.message
            }
            return r(e, t),
            e
        }(Error);
        e.UnsubscriptionError = i
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t instanceof Date && !isNaN(+t)
        }
        e.isDate = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return !i.isArray(t) && t - parseFloat(t) + 1 >= 0
        }
        var i = n(50);
        e.isNumeric = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            if (t) {
                if (t instanceof i.Subscriber)
                    return t;
                if (t[o.rxSubscriber])
                    return t[o.rxSubscriber]()
            }
            return t || e || n ? new i.Subscriber(t,e,n) : new i.Subscriber(s.empty)
        }
        var i = n(8)
          , o = n(82)
          , s = n(139);
        e.toSubscriber = r
    }
    , function(t, e, n) {
        t.exports = n(418)
    }
    , function(t, e, n) {
        "use strict";
        (function(t, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, o = n(419), s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(o);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = (0,
            s.default)(i);
            e.default = a
        }
        ).call(e, n(37), n(162)(t))
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e, n = t.Symbol;
            return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"),
            n.observable = e) : e = "@@observable",
            e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = r
    }
    , function(t, e) {
        t.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
    }
    , function(t, e, n) {
        "use strict";
        e.Any = n(161),
        e.Cc = n(159),
        e.Cf = n(420),
        e.P = n(84),
        e.Z = n(160)
    }
    ])
});
//# sourceMappingURL=botchat.js.map
