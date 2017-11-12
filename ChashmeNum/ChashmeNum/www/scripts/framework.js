(function (a) {
    var b = {};

    function c(e) {
        if (b[e]) {
            return b[e].exports
        }
        var d = b[e] = {
            exports: {},
            id: e,
            loaded: false
        };
        a[e].call(d.exports, d, d.exports, c);
        d.loaded = true;
        return d.exports
    }
    c.m = a;
    c.c = b;
    c.p = "/";
    return c(0)
})([function (b, a, c) {
    c(4);
    c(5);
    c(6);
    c(7);
    c(8);
    c(9);
    c(1);
    c(10);
    c(11);
    c(12);
    c(13);
    c(14);
    c(15);
    c(16);
    b.exports = c(17)
}, function (f, I, g) {
    var y = {};
    var F = {};
    var B = [];
    var x = window.Framework || [];
    var k = window.jQuery;
    var w = k(window);
    var o = k(document);
    var b = k.isFunction;
    var H = y._ = g(18);
    var c = g(3) && k.tram;
    var h = false;
    var q = false;
    var l = window.Modernizr;
    var i = function () { };
    c.config.hideBackface = false;
    c.config.keepInherited = true;
    y.define = function (M, K, L) {
        if (F[M]) {
            j(F[M])
        }
        var J = F[M] = K(k, H, L) || {};
        e(J);
        return J
    };
    y.require = function (J) {
        return F[J]
    };

    function e(J) {
        if (y.env()) {
            b(J.design) && w.on("__wf_design", J.design);
            b(J.preview) && w.on("__wf_preview", J.preview)
        }
        b(J.destroy) && w.on("__wf_destroy", J.destroy);
        if (J.ready && b(J.ready)) {
            t(J)
        }
    }

    function t(J) {
        if (h) {
            J.ready();
            return
        }
        if (H.contains(B, J.ready)) {
            return
        }
        B.push(J.ready)
    }

    function j(J) {
        b(J.design) && w.off("__wf_design", J.design);
        b(J.preview) && w.off("__wf_preview", J.preview);
        b(J.destroy) && w.off("__wf_destroy", J.destroy);
        if (J.ready && b(J.ready)) {
            u(J)
        }
    }

    function u(J) {
        B = H.filter(B, function (K) {
            return K !== J.ready
        })
    }
    y.push = function (J) {
        if (h) {
            b(J) && J();
            return
        }
        x.push(J)
    };
    y.env = function (L) {
        var K = window.__wf_design;
        var J = typeof K !== "undefined";
        if (!L) {
            return J
        }
        if (L === "design") {
            return J && K
        }
        if (L === "preview") {
            return J && !K
        }
        if (L === "slug") {
            return J && window.__wf_slug
        }
        if (L === "editor") {
            return window.FrameworkEditor
        }
        if (L === "test") {
            return window.__wf_test
        }
        if (L === "frame") {
            return window !== window.top
        }
    };
    var G = navigator.userAgent.toLowerCase();
    var E = navigator.appVersion.toLowerCase();
    var n = y.env.touch = ("ontouchstart" in window) || window.DocumentTouch && document instanceof window.DocumentTouch;
    var v = y.env.chrome = /chrome/.test(G) && /Google/.test(navigator.vendor) && parseInt(E.match(/chrome\/(\d+)\./)[1], 10);
    var p = y.env.ios = l && l.ios;
    y.env.safari = /safari/.test(G) && !v && !p;
    var a;
    n && o.on("touchstart mousedown", function (J) {
        a = J.target
    });
    y.validClick = n ? function (J) {
        return J === a || k.contains(J, a)
    } : function () {
        return true
    };
    var s = "resize.framework orientationchange.framework load.framework";
    var m = "scroll.framework " + s;
    y.resize = A(w, s);
    y.scroll = A(w, m);
    y.redraw = A();

    function A(M, L) {
        var J = [];
        var K = {};
        K.up = H.throttle(function (N) {
            H.each(J, function (O) {
                O(N)
            })
        });
        if (M && L) {
            M.on(L, K.up)
        }
        K.on = function (N) {
            if (typeof N !== "function") {
                return
            }
            if (H.contains(J, N)) {
                return
            }
            J.push(N)
        };
        K.off = function (N) {
            if (!arguments.length) {
                J = [];
                return
            }
            J = H.filter(J, function (O) {
                return O !== N
            })
        };
        return K
    }
    y.location = function (J) {
        window.location = J
    };
    y.app = y.env() ? {} : null;
    if (y.app) {
        var D = new Event("__wf_redraw");
        y.app.redrawElement = function (J, K) {
            K.dispatchEvent(D)
        };
        y.location = function (J) {
            window.dispatchEvent(new CustomEvent("__wf_location", {
                detail: J
            }))
        }
    }
    y.ready = function () {
        h = true;
        if (q) {
            z()
        } else {
            H.each(B, d)
        }
        H.each(x, d);
        y.resize.up()
    };

    function d(J) {
        b(J) && J()
    }

    function z() {
        q = false;
        H.each(F, e)
    }
    var C;
    y.load = function (J) {
        C.then(J)
    };

    function r() {
        if (C) {
            C.reject();
            w.off("load", C.resolve)
        }
        C = new k.Deferred();
        w.on("load", C.resolve)
    }
    y.destroy = function (J) {
        J = J || {};
        q = true;
        w.triggerHandler("__wf_destroy");
        if (J.domready != null) {
            h = J.domready
        }
        H.each(F, j);
        y.resize.off();
        y.scroll.off();
        y.redraw.off();
        B = [];
        x = [];
        if (C.state() === "pending") {
            r()
        }
    };
    k(y.ready);
    r();
    f.exports = window.Framework = y
}, function (d, c) {
    var g = window.jQuery;
    var f = {};
    var b = [];
    var e = ".w-ix";
    var a = {
        reset: function (h, j) {
            j.__wf_intro = null
        },
        intro: function (h, j) {
            if (j.__wf_intro) {
                return
            }
            j.__wf_intro = true;
            g(j).triggerHandler(f.types.INTRO)
        },
        outro: function (h, j) {
            if (!j.__wf_intro) {
                return
            }
            j.__wf_intro = null;
            g(j).triggerHandler(f.types.OUTRO)
        }
    };
    f.triggers = {};
    f.types = {
        INTRO: "w-ix-intro" + e,
        OUTRO: "w-ix-outro" + e
    };
    f.init = function () {
        var k = b.length;
        for (var j = 0; j < k; j++) {
            var h = b[j];
            h[0](0, h[1])
        }
        b = [];
        g.extend(f.triggers, a)
    };
    f.async = function () {
        for (var h in a) {
            var i = a[h];
            if (!a.hasOwnProperty(h)) {
                continue
            }
            f.triggers[h] = function (j, k) {
                b.push([i, k])
            }
        }
    };
    f.async();
    d.exports = f
}, function (b, a) {;
    window.tram = function (a1) {
        function a0(e, d) {
            var f = new ao.Bare;
            return f.init(e, d)
        }

        function aZ(c) {
            return c.replace(/[A-Z]/g, function (d) {
                return "-" + d.toLowerCase()
            })
        }

        function aY(g) {
            var f = parseInt(g.slice(1), 16),
                j = f >> 16 & 255,
                i = f >> 8 & 255,
                h = 255 & f;
            return [j, i, h]
        }

        function aX(e, d, f) {
            return "#" + (1 << 24 | e << 16 | d << 8 | f).toString(16).slice(1)
        }

        function aW() { }

        function aV(d, c) {
            a2("Type warning: Expected: [" + d + "] Got: [" + typeof c + "] " + c)
        }

        function aU(e, d, f) {
            a2("Units do not match [" + e + "]: " + d + ", " + f)
        }

        function aT(f, e, h) {
            if (void 0 !== e && (h = e), void 0 === f) {
                return h
            }
            var g = h;
            return aa.test(f) || !aB.test(f) ? g = parseInt(f, 10) : aB.test(f) && (g = 1000 * parseFloat(f)), 0 > g && (g = 0), g === g ? g : h
        }

        function aS(g) {
            for (var f = -1, j = g ? g.length : 0, i = []; ++f < j;) {
                var h = g[f];
                h && i.push(h)
            }
            return i
        }
        var aR = function (i, h, n) {
            function m(c) {
                return "object" == typeof c
            }

            function l(c) {
                return "function" == typeof c
            }

            function k() { }

            function j(o, g) {
                function f() {
                    var q = new e;
                    return l(q.init) && q.init.apply(q, arguments), q
                }

                function e() { }
                g === n && (g = o, o = Object), f.Bare = e;
                var d, c = k[i] = o[i],
                    p = e[i] = f[i] = new k;
                return p.constructor = f, f.mixin = function (q) {
                    return e[i] = f[i] = j(f, q)[i], f
                }, f.open = function (q) {
                    if (d = {}, l(q) ? d = q.call(f, p, c, f, o) : m(q) && (d = q), m(d)) {
                        for (var r in d) {
                            h.call(d, r) && (p[r] = d[r])
                        }
                    }
                    return l(p.init) || (p.init = o), f
                }, f.open(g)
            }
            return j
        }("prototype", {}.hasOwnProperty),
            aQ = {
                ease: ["ease", function (h, g, l, k) {
                    var j = (h /= k) * h,
                        i = j * h;
                    return g + l * (-2.75 * i * j + 11 * j * j + -15.5 * i + 8 * j + 0.25 * h)
                }],
                "ease-in": ["ease-in", function (h, g, l, k) {
                    var j = (h /= k) * h,
                        i = j * h;
                    return g + l * (-1 * i * j + 3 * j * j + -3 * i + 2 * j)
                }],
                "ease-out": ["ease-out", function (h, g, l, k) {
                    var j = (h /= k) * h,
                        i = j * h;
                    return g + l * (0.3 * i * j + -1.6 * j * j + 2.2 * i + -1.8 * j + 1.9 * h)
                }],
                "ease-in-out": ["ease-in-out", function (h, g, l, k) {
                    var j = (h /= k) * h,
                        i = j * h;
                    return g + l * (2 * i * j + -5 * j * j + 2 * i + 2 * j)
                }],
                linear: ["linear", function (f, e, h, g) {
                    return h * f / g + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (f, e, h, g) {
                    return h * (f /= g) * f + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (f, e, h, g) {
                    return -h * (f /= g) * (f - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (f, e, h, g) {
                    return (f /= g / 2) < 1 ? h / 2 * f * f + e : -h / 2 * (--f * (f - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (f, e, h, g) {
                    return h * (f /= g) * f * f + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (f, e, h, g) {
                    return h * ((f = f / g - 1) * f * f + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (f, e, h, g) {
                    return (f /= g / 2) < 1 ? h / 2 * f * f * f + e : h / 2 * ((f -= 2) * f * f + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (f, e, h, g) {
                    return h * (f /= g) * f * f * f + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (f, e, h, g) {
                    return -h * ((f = f / g - 1) * f * f * f - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (f, e, h, g) {
                    return (f /= g / 2) < 1 ? h / 2 * f * f * f * f + e : -h / 2 * ((f -= 2) * f * f * f - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (f, e, h, g) {
                    return h * (f /= g) * f * f * f * f + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (f, e, h, g) {
                    return h * ((f = f / g - 1) * f * f * f * f + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (f, e, h, g) {
                    return (f /= g / 2) < 1 ? h / 2 * f * f * f * f * f + e : h / 2 * ((f -= 2) * f * f * f * f + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (f, e, h, g) {
                    return -h * Math.cos(f / g * (Math.PI / 2)) + h + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (f, e, h, g) {
                    return h * Math.sin(f / g * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (f, e, h, g) {
                    return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (f, e, h, g) {
                    return 0 === f ? e : h * Math.pow(2, 10 * (f / g - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (f, e, h, g) {
                    return f === g ? e + h : h * (-Math.pow(2, -10 * f / g) + 1) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (f, e, h, g) {
                    return 0 === f ? e : f === g ? e + h : (f /= g / 2) < 1 ? h / 2 * Math.pow(2, 10 * (f - 1)) + e : h / 2 * (-Math.pow(2, -10 * --f) + 2) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (f, e, h, g) {
                    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (f, e, h, g) {
                    return h * Math.sqrt(1 - (f = f / g - 1) * f) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (f, e, h, g) {
                    return (f /= g / 2) < 1 ? -h / 2 * (Math.sqrt(1 - f * f) - 1) + e : h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (g, f, j, i, h) {
                    return void 0 === h && (h = 1.70158), j * (g /= i) * g * ((h + 1) * g - h) + f
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (g, f, j, i, h) {
                    return void 0 === h && (h = 1.70158), j * ((g = g / i - 1) * g * ((h + 1) * g + h) + 1) + f
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (g, f, j, i, h) {
                    return void 0 === h && (h = 1.70158), (g /= i / 2) < 1 ? j / 2 * g * g * (((h *= 1.525) + 1) * g - h) + f : j / 2 * ((g -= 2) * g * (((h *= 1.525) + 1) * g + h) + 2) + f
                }]
            },
            aP = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            aO = document,
            aN = window,
            aM = "bkwld-tram",
            aL = /[\-\.0-9]/g,
            aK = /[A-Z]/,
            aJ = "number",
            aI = /^(rgb|#)/,
            aH = /(em|cm|mm|in|pt|pc|px)$/,
            aG = /(em|cm|mm|in|pt|pc|px|%)$/,
            aF = /(deg|rad|turn)$/,
            aE = "unitless",
            aD = /(all|none) 0s ease 0s/,
            aC = /^(width|height)$/,
            aA = " ",
            az = aO.createElement("a"),
            ay = ["Webkit", "Moz", "O", "ms"],
            ax = ["-webkit-", "-moz-", "-o-", "-ms-"],
            aw = function (g) {
                if (g in az.style) {
                    return {
                        dom: g,
                        css: g
                    }
                }
                var f, j, i = "",
                    h = g.split("-");
                for (f = 0; f < h.length; f++) {
                    i += h[f].charAt(0).toUpperCase() + h[f].slice(1)
                }
                for (f = 0; f < ay.length; f++) {
                    if (j = ay[f] + i, j in az.style) {
                        return {
                            dom: j,
                            css: ax[f] + g
                        }
                    }
                }
            },
            av = a0.support = {
                bind: Function.prototype.bind,
                transform: aw("transform"),
                transition: aw("transition"),
                backface: aw("backface-visibility"),
                timing: aw("transition-timing-function")
            };
        if (av.transition) {
            var au = av.timing.dom;
            if (az.style[au] = aQ["ease-in-back"][0], !az.style[au]) {
                for (var at in aP) {
                    aQ[at][0] = aP[at]
                }
            }
        }
        var ar = a0.frame = function () {
            var c = aN.requestAnimationFrame || aN.webkitRequestAnimationFrame || aN.mozRequestAnimationFrame || aN.oRequestAnimationFrame || aN.msRequestAnimationFrame;
            return c && av.bind ? c.bind(aN) : function (d) {
                aN.setTimeout(d, 16)
            }
        }(),
            aq = a0.now = function () {
                var d = aN.performance,
                    c = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
                return c && av.bind ? c.bind(d) : Date.now || function () {
                    return +new Date
                }
            }(),
            ap = aR(function (M) {
                function L(k, h) {
                    var q = aS(("" + k).split(aA)),
                        o = q[0];
                    h = h || {};
                    var n = ac[o];
                    if (!n) {
                        return a2("Unsupported property: " + o)
                    }
                    if (!h.weak || !this.props[o]) {
                        var m = n[0],
                            l = this.props[o];
                        return l || (l = this.props[o] = new m.Bare), l.init(this.$el, q, n, h), l
                    }
                }

                function K(k, d, s) {
                    if (k) {
                        var q = typeof k;
                        if (d || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == q && d) {
                            return this.timer = new ai({
                                duration: k,
                                context: this,
                                complete: H
                            }), void (this.active = !0)
                        }
                        if ("string" == q && d) {
                            switch (k) {
                                case "hide":
                                    D.call(this);
                                    break;
                                case "stop":
                                    G.call(this);
                                    break;
                                case "redraw":
                                    C.call(this);
                                    break;
                                default:
                                    L.call(this, k, s && s[1])
                            }
                            return H.call(this)
                        }
                        if ("function" == q) {
                            return void k.call(this, this)
                        }
                        if ("object" == q) {
                            var o = 0;
                            y.call(this, k, function (f, e) {
                                f.span > o && (o = f.span), f.stop(), f.animate(e)
                            }, function (e) {
                                "wait" in e && (o = aT(e.wait, 0))
                            }), A.call(this), o > 0 && (this.timer = new ai({
                                duration: o,
                                context: this
                            }), this.active = !0, d && (this.timer.complete = H));
                            var n = this,
                                m = !1,
                                h = {};
                            ar(function () {
                                y.call(n, k, function (e) {
                                    e.active && (m = !0, h[e.name] = e.nextStyle)
                                }), m && n.$el.css(h)
                            })
                        }
                    }
                }

                function J(d) {
                    d = aT(d, 0), this.active ? this.queue.push({
                        options: d
                    }) : (this.timer = new ai({
                        duration: d,
                        context: this,
                        complete: H
                    }), this.active = !0)
                }

                function I(d) {
                    return this.active ? (this.queue.push({
                        options: d,
                        args: arguments
                    }), void (this.timer.complete = H)) : a2("No active transition timer. Use start() or wait() before then().")
                }

                function H() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var d = this.queue.shift();
                        K.call(this, d.options, !0, d.args)
                    }
                }

                function G(e) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var d;
                    "string" == typeof e ? (d = {}, d[e] = 1) : d = "object" == typeof e && null != e ? e : this.props, y.call(this, d, r), A.call(this)
                }

                function F(d) {
                    G.call(this, d), y.call(this, d, p, j)
                }

                function E(d) {
                    "string" != typeof d && (d = "block"), this.el.style.display = d
                }

                function D() {
                    G.call(this), this.el.style.display = "none"
                }

                function C() {
                    this.el.offsetHeight
                }

                function B() {
                    G.call(this), a1.removeData(this.el, aM), this.$el = this.el = null
                }

                function A() {
                    var e, d, f = [];
                    this.upstream && f.push(this.upstream);
                    for (e in this.props) {
                        d = this.props[e], d.active && f.push(d.string)
                    }
                    f = f.join(","), this.style !== f && (this.style = f, this.el.style[av.transition.dom] = f)
                }

                function y(u, t, s) {
                    var q, o, n, m, l = t !== r,
                        d = {};
                    for (q in u) {
                        n = u[q], q in ab ? (d.transform || (d.transform = {}), d.transform[q] = n) : (aK.test(q) && (q = aZ(q)), q in ac ? d[q] = n : (m || (m = {}), m[q] = n))
                    }
                    for (q in d) {
                        if (n = d[q], o = this.props[q], !o) {
                            if (!l) {
                                continue
                            }
                            o = L.call(this, q)
                        }
                        t.call(this, o, n)
                    }
                    s && m && s.call(this, m)
                }

                function r(d) {
                    d.stop()
                }

                function p(e, d) {
                    e.set(d)
                }

                function j(d) {
                    this.$el.css(d)
                }

                function i(d, e) {
                    M[d] = function () {
                        return this.children ? c.call(this, e, arguments) : (this.el && e.apply(this, arguments), this)
                    }
                }

                function c(f, e) {
                    var h, g = this.children.length;
                    for (h = 0; g > h; h++) {
                        f.apply(this.children[h], e)
                    }
                    return this
                }
                M.init = function (d) {
                    if (this.$el = a1(d), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ag.keepInherited && !ag.fallback) {
                        var e = ae(this.el, "transition");
                        e && !aD.test(e) && (this.upstream = e)
                    }
                    av.backface && ag.hideBackface && af(this.el, av.backface.css, "hidden")
                }, i("add", L), i("start", K), i("wait", J), i("then", I), i("next", H), i("stop", G), i("set", F), i("show", E), i("hide", D), i("redraw", C), i("destroy", B)
            }),
            ao = aR(ap, function (d) {
                function e(f, h) {
                    var g = a1.data(f, aM) || a1.data(f, aM, new ap.Bare);
                    return g.el || g.init(f), h ? g.start(h) : g
                }
                d.init = function (c, i) {
                    var h = a1(c);
                    if (!h.length) {
                        return this
                    }
                    if (1 === h.length) {
                        return e(h[0], i)
                    }
                    var g = [];
                    return h.each(function (j, f) {
                        g.push(e(f, i))
                    }), this.children = g, this
                }
            }),
            an = aR(function (g) {
                function e() {
                    var d = this.get();
                    this.update("auto");
                    var c = this.get();
                    return this.update(d), c
                }

                function j(f, d, k) {
                    return void 0 !== d && (k = d), f in aQ ? f : k
                }

                function i(d) {
                    var c = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(d);
                    return (c ? aX(c[1], c[2], c[3]) : d).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var h = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                g.init = function (f, c, m, l) {
                    this.$el = f, this.el = f[0];
                    var k = c[0];
                    m[2] && (k = m[2]), ad[k] && (k = ad[k]), this.name = k, this.type = m[1], this.duration = aT(c[1], this.duration, h.duration), this.ease = j(c[2], this.ease, h.ease), this.delay = aT(c[3], this.delay, h.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = aC.test(this.name), this.unit = l.unit || this.unit || ag.defaultUnit, this.angle = l.angle || this.angle || ag.defaultAngle, ag.fallback || l.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + aA + this.duration + "ms" + ("ease" != this.ease ? aA + aQ[this.ease][0] : "") + (this.delay ? aA + this.delay + "ms" : ""))
                }, g.set = function (c) {
                    c = this.convert(c, this.type), this.update(c), this.redraw()
                }, g.transition = function (c) {
                    this.active = !0, c = this.convert(c, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == c && (c = e.call(this))), this.nextStyle = c
                }, g.fallback = function (d) {
                    var f = this.el.style[this.name] || this.convert(this.get(), this.type);
                    d = this.convert(d, this.type), this.auto && ("auto" == f && (f = this.convert(this.get(), this.type)), "auto" == d && (d = e.call(this))), this.tween = new aj({
                        from: f,
                        to: d,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, g.get = function () {
                    return ae(this.el, this.name)
                }, g.update = function (c) {
                    af(this.el, this.name, c)
                }, g.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, af(this.el, this.name, this.get()));
                    var c = this.tween;
                    c && c.context && c.destroy()
                }, g.convert = function (k, d) {
                    if ("auto" == k && this.auto) {
                        return k
                    }
                    var n, m = "number" == typeof k,
                        l = "string" == typeof k;
                    switch (d) {
                        case aJ:
                            if (m) {
                                return k
                            }
                            if (l && "" === k.replace(aL, "")) {
                                return +k
                            }
                            n = "number(unitless)";
                            break;
                        case aI:
                            if (l) {
                                if ("" === k && this.original) {
                                    return this.original
                                }
                                if (d.test(k)) {
                                    return "#" == k.charAt(0) && 7 == k.length ? k : i(k)
                                }
                            }
                            n = "hex or rgb string";
                            break;
                        case aH:
                            if (m) {
                                return k + this.unit
                            }
                            if (l && d.test(k)) {
                                return k
                            }
                            n = "number(px) or string(unit)";
                            break;
                        case aG:
                            if (m) {
                                return k + this.unit
                            }
                            if (l && d.test(k)) {
                                return k
                            }
                            n = "number(px) or string(unit or %)";
                            break;
                        case aF:
                            if (m) {
                                return k + this.angle
                            }
                            if (l && d.test(k)) {
                                return k
                            }
                            n = "number(deg) or string(angle)";
                            break;
                        case aE:
                            if (m) {
                                return k
                            }
                            if (l && aG.test(k)) {
                                return k
                            }
                            n = "number(unitless) or string(unit or %)"
                    }
                    return aV(n, k), k
                }, g.redraw = function () {
                    this.el.offsetHeight
                }
            }),
            am = aR(an, function (d, c) {
                d.init = function () {
                    c.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), aI))
                }
            }),
            al = aR(an, function (d, c) {
                d.init = function () {
                    c.init.apply(this, arguments), this.animate = this.fallback
                }, d.get = function () {
                    return this.$el[this.name]()
                }, d.update = function (e) {
                    this.$el[this.name](e)
                }
            }),
            ak = aR(an, function (e, d) {
                function f(i, h) {
                    var n, m, l, k, j;
                    for (n in i) {
                        k = ab[n], l = k[0], m = k[1] || n, j = this.convert(i[n], l), h.call(this, m, j, l)
                    }
                }
                e.init = function () {
                    d.init.apply(this, arguments), this.current || (this.current = {}, ab.perspective && ag.perspective && (this.current.perspective = ag.perspective, af(this.el, this.name, this.style(this.current)), this.redraw()))
                }, e.set = function (c) {
                    f.call(this, c, function (h, g) {
                        this.current[h] = g
                    }), af(this.el, this.name, this.style(this.current)), this.redraw()
                }, e.transition = function (h) {
                    var g = this.values(h);
                    this.tween = new ah({
                        current: this.current,
                        values: g,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var j, i = {};
                    for (j in this.current) {
                        i[j] = j in g ? g[j] : this.current[j]
                    }
                    this.active = !0, this.nextStyle = this.style(i)
                }, e.fallback = function (g) {
                    var c = this.values(g);
                    this.tween = new ah({
                        current: this.current,
                        values: c,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, e.update = function () {
                    af(this.el, this.name, this.style(this.current))
                }, e.style = function (h) {
                    var g, i = "";
                    for (g in h) {
                        i += g + "(" + h[g] + ") "
                    }
                    return i
                }, e.values = function (g) {
                    var c, h = {};
                    return f.call(this, g, function (i, k, j) {
                        h[i] = k, void 0 === this.current[i] && (c = 0, ~i.indexOf("scale") && (c = 1), this.current[i] = this.convert(c, j))
                    }), h
                }
            }),
            aj = aR(function (s) {
                function r(c) {
                    1 === e.push(c) && ar(q)
                }

                function q() {
                    var i, g, k, j = e.length;
                    if (j) {
                        for (ar(q), g = aq(), i = j; i--;) {
                            k = e[i], k && k.render(g)
                        }
                    }
                }

                function p(g) {
                    var j, i = a1.inArray(g, e);
                    i >= 0 && (j = e.slice(i + 1), e.length = i, j.length && (e = e.concat(j)))
                }

                function l(c) {
                    return Math.round(c * d) / d
                }

                function h(i, g, j) {
                    return aX(i[0] + j * (g[0] - i[0]), i[1] + j * (g[1] - i[1]), i[2] + j * (g[2] - i[2]))
                }
                var f = {
                    ease: aQ.ease[1],
                    from: 0,
                    to: 1
                };
                s.init = function (i) {
                    this.duration = i.duration || 0, this.delay = i.delay || 0;
                    var g = i.ease || f.ease;
                    aQ[g] && (g = aQ[g][1]), "function" != typeof g && (g = f.ease), this.ease = g, this.update = i.update || aW, this.complete = i.complete || aW, this.context = i.context || this, this.name = i.name;
                    var k = i.from,
                        j = i.to;
                    void 0 === k && (k = f.from), void 0 === j && (j = f.to), this.unit = i.unit || "", "number" == typeof k && "number" == typeof j ? (this.begin = k, this.change = j - k) : this.format(j, k), this.value = this.begin + this.unit, this.start = aq(), i.autoplay !== !1 && this.play()
                }, s.play = function () {
                    this.active || (this.start || (this.start = aq()), this.active = !0, r(this))
                }, s.stop = function () {
                    this.active && (this.active = !1, p(this))
                }, s.render = function (i) {
                    var g, k = i - this.start;
                    if (this.delay) {
                        if (k <= this.delay) {
                            return
                        }
                        k -= this.delay
                    }
                    if (k < this.duration) {
                        var j = this.ease(k, 0, 1, this.duration);
                        return g = this.startRGB ? h(this.startRGB, this.endRGB, j) : l(this.begin + j * this.change), this.value = g + this.unit, void this.update.call(this.context, this.value)
                    }
                    g = this.endHex || this.begin + this.change, this.value = g + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, s.format = function (i, g) {
                    if (g += "", i += "", "#" == i.charAt(0)) {
                        return this.startRGB = aY(g), this.endRGB = aY(i), this.endHex = i, this.begin = 0, void (this.change = 1)
                    }
                    if (!this.unit) {
                        var k = g.replace(aL, ""),
                            j = i.replace(aL, "");
                        k !== j && aU("tween", g, i), this.unit = k
                    }
                    g = parseFloat(g), i = parseFloat(i), this.begin = this.value = g, this.change = i - g
                }, s.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = aW
                };
                var e = [],
                    d = 1000
            }),
            ai = aR(aj, function (c) {
                c.init = function (d) {
                    this.duration = d.duration || 0, this.complete = d.complete || aW, this.context = d.context, this.play()
                }, c.render = function (e) {
                    var d = e - this.start;
                    d < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            ah = aR(aj, function (d, c) {
                d.init = function (f) {
                    this.context = f.context, this.update = f.update, this.tweens = [], this.current = f.current;
                    var e, g;
                    for (e in f.values) {
                        g = f.values[e], this.current[e] !== g && this.tweens.push(new aj({
                            name: e,
                            from: this.current[e],
                            to: g,
                            duration: f.duration,
                            delay: f.delay,
                            ease: f.ease,
                            autoplay: !1
                        }))
                    }
                    this.play()
                }, d.render = function (g) {
                    var f, j, i = this.tweens.length,
                        h = !1;
                    for (f = i; f--;) {
                        j = this.tweens[f], j.context && (j.render(g), this.current[j.name] = j.value, h = !0)
                    }
                    return h ? void (this.update && this.update.call(this.context)) : this.destroy()
                }, d.destroy = function () {
                    if (c.destroy.call(this), this.tweens) {
                        var e, f = this.tweens.length;
                        for (e = f; e--;) {
                            this.tweens[e].destroy()
                        }
                        this.tweens = null, this.current = null
                    }
                }
            }),
            ag = a0.config = {
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !av.transition,
                agentTests: []
            };
        a0.fallback = function (d) {
            if (!av.transition) {
                return ag.fallback = !0
            }
            ag.agentTests.push("(" + d + ")");
            var c = new RegExp(ag.agentTests.join("|"), "i");
            ag.fallback = c.test(navigator.userAgent)
        }, a0.fallback("6.0.[2-5] Safari"), a0.tween = function (c) {
            return new aj(c)
        }, a0.delay = function (e, d, f) {
            return new ai({
                complete: d,
                duration: e,
                context: f
            })
        }, a1.fn.tram = function (c) {
            return a0.call(null, this, c)
        };
        var af = a1.style,
            ae = a1.css,
            ad = {
                transform: av.transform && av.transform.css
            },
            ac = {
                color: [am, aI],
                background: [am, aI, "background-color"],
                "outline-color": [am, aI],
                "border-color": [am, aI],
                "border-top-color": [am, aI],
                "border-right-color": [am, aI],
                "border-bottom-color": [am, aI],
                "border-left-color": [am, aI],
                "border-width": [an, aH],
                "border-top-width": [an, aH],
                "border-right-width": [an, aH],
                "border-bottom-width": [an, aH],
                "border-left-width": [an, aH],
                "border-spacing": [an, aH],
                "letter-spacing": [an, aH],
                margin: [an, aH],
                "margin-top": [an, aH],
                "margin-right": [an, aH],
                "margin-bottom": [an, aH],
                "margin-left": [an, aH],
                padding: [an, aH],
                "padding-top": [an, aH],
                "padding-right": [an, aH],
                "padding-bottom": [an, aH],
                "padding-left": [an, aH],
                "outline-width": [an, aH],
                opacity: [an, aJ],
                top: [an, aG],
                right: [an, aG],
                bottom: [an, aG],
                left: [an, aG],
                "font-size": [an, aG],
                "text-indent": [an, aG],
                "word-spacing": [an, aG],
                width: [an, aG],
                "min-width": [an, aG],
                "max-width": [an, aG],
                height: [an, aG],
                "min-height": [an, aG],
                "max-height": [an, aG],
                "line-height": [an, aE],
                "scroll-top": [al, aJ, "scrollTop"],
                "scroll-left": [al, aJ, "scrollLeft"]
            },
            ab = {};
        av.transform && (ac.transform = [ak], ab = {
            x: [aG, "translateX"],
            y: [aG, "translateY"],
            rotate: [aF],
            rotateX: [aF],
            rotateY: [aF],
            scale: [aJ],
            scaleX: [aJ],
            scaleY: [aJ],
            skew: [aF],
            skewX: [aF],
            skewY: [aF]
        }), av.transform && av.backface && (ab.z = [aG, "translateZ"], ab.rotateZ = [aF], ab.scaleZ = [aJ], ab.perspective = [aH]);
        var aa = /ms/,
            aB = /s|\./,
            a2 = function () {
                var d = "warn",
                    c = window.console;
                return c && c[d] ? function (e) {
                    c[d](e)
                } : aW
            }();
        return a1.tram = a0
    }(window.jQuery)
}, function (c, b, d) {
    var a = d(1);
    a.define("brand", c.exports = function (j, g) {
        var h = {};
        var e = j("html");
        var i = j("body");
        var f = window.location;
        var k = a.env();
        h.ready = function () { };
        return h
    })
}, function (d, b, e) {
    var a = e(1);
    var c = e(2);
    a.define("dropdown", d.exports = function (i, A) {
        var p = {};
        var f = i.tram;
        var k = i(document);
        var x;
        var z;
        var v = a.env();
        var m = ".w-dropdown";
        var u = "w--open";
        var j = "w-close" + m;
        var h = c.triggers;
        p.ready = p.design = p.preview = t;

        function t() {
            z = v && a.env("design");
            x = k.find(m);
            x.each(r)
        }

        function r(C, D) {
            var B = i(D);
            var E = i.data(D, m);
            if (!E) {
                E = i.data(D, m, {
                    open: false,
                    el: B,
                    config: {}
                })
            }
            E.list = B.children(".w-dropdown-list");
            E.toggle = B.children(".w-dropdown-toggle");
            E.links = E.list.children(".w-dropdown-link");
            E.outside = w(E);
            E.complete = o(E);
            B.off(m);
            E.toggle.off(m);
            y(E);
            if (E.nav) {
                E.nav.off(m)
            }
            E.nav = B.closest(".w-nav");
            E.nav.on(j, g(E));
            if (z) {
                B.on("setting" + m, g(E))
            } else {
                E.toggle.on("tap" + m, s(E));
                B.on(j, g(E));
                v && q(E)
            }
        }

        function y(B) {
            B.config = {
                hover: +B.el.attr("data-hover"),
                delay: +B.el.attr("data-delay") || 0
            }
        }

        function g(B) {
            return function (C, D) {
                D = D || {};
                if (C.type === "w-close") {
                    return q(B)
                }
                if (C.type === "setting") {
                    y(B);
                    D.open === true && n(B, true);
                    D.open === false && q(B, true);
                    return
                }
            }
        }

        function s(B) {
            return A.debounce(function (C) {
                B.open ? q(B) : n(B)
            })
        }

        function n(C, B) {
            if (C.open) {
                return
            }
            l(C);
            C.open = true;
            C.list.addClass(u);
            C.toggle.addClass(u);
            h.intro(0, C.el[0]);
            a.redraw.up();
            if (!z) {
                k.on("tap" + m, C.outside)
            }
            window.clearTimeout(C.delayId)
        }

        function q(D, B) {
            if (!D.open) {
                return
            }
            D.open = false;
            var C = D.config;
            h.outro(0, D.el[0]);
            k.off("tap" + m, D.outside);
            window.clearTimeout(D.delayId);
            if (!C.delay || B) {
                return D.complete()
            }
            D.delayId = window.setTimeout(D.complete, C.delay)
        }

        function l(C) {
            var B = C.el[0];
            x.each(function (E, D) {
                var F = i(D);
                if (F.is(B) || F.has(B).length) {
                    return
                }
                F.triggerHandler(j)
            })
        }

        function w(B) {
            if (B.outside) {
                k.off("tap" + m, B.outside)
            }
            return A.debounce(function (D) {
                if (!B.open) {
                    return
                }
                var C = i(D.target);
                if (C.closest(".w-dropdown-toggle").length) {
                    return
                }
                if (!B.el.is(C.closest(m))) {
                    q(B)
                }
            })
        }

        function o(B) {
            return function () {
                B.list.removeClass(u);
                B.toggle.removeClass(u)
            }
        }
        return p
    })
}, function (c, b, d) {
    var a = d(1);
    a.define("edit", c.exports = function (i, r, t) {
        t = t || {};
        if (a.env("test") || a.env("frame")) {
            if (!t.fixture) {
                return {
                    exit: 1
                }
            }
        }
        var l = {};
        var e = i(window);
        var n = document.location;
        var f = "hashchange";
        var j;
        var q = t.load || o;
        if (localStorage && localStorage.getItem && localStorage.getItem("FrameworkEditor")) {
            q()
        } else {
            if (n.search) {
                if (/[?&](edit)(?:[=&?]|$)/.test(n.search) || /\?edit$/.test(n.href)) {
                    q()
                }
            } else {
                e.on(f, p).triggerHandler(f)
            }
        }

        function p() {
            if (j) {
                return
            }
            if (/\?edit/.test(n.hash)) {
                q()
            }
        }

        function o() {
            j = true;
            window.FrameworkEditor = true;
            e.off(f, p);
            i.ajax({
                url: g(("https://editor-api.framework.com") + "/api/editor/view"),
                xhrFields: {
                    withCredentials: true
                },
                dataType: "json",
                crossDomain: true,
                success: s
            })
        }

        function s(u) {
            if (!u) {
                console.error("Could not load editor data");
                return
            }
            h(k(u.scriptPath), function () {
                window.FrameworkEditor(u)
            })
        }

        function h(v, u) {
            i.ajax({
                type: "GET",
                url: v,
                dataType: "script",
                cache: true
            }).then(u, m)
        }

        function m(u, w, v) {
            console.error("Could not load editor script: " + w);
            throw v
        }

        function k(u) {
            return (u.indexOf("//") >= 0) ? u : g(("https://editor-api.framework.com") + u)
        }

        function g(u) {
            return u.replace(/([^:])\/\//g, "$1/")
        }
        return l
    })
}, function (c, b, d) {
    var a = d(1);
    a.define("forms", c.exports = function (h, C) {
        var p = {};
        d(19);
        var k = h(document);
        var x;
        var m = window.location;
        var D = window.XDomainRequest && !window.atob;
        var o = ".w-form";
        var y;
        var n = /e(\-)?mail/i;
        var e = /^\S+@\S+$/;
        var f = window.alert;
        var u;
        var q = /list-manage[1-9]?.com/i;
        var j = C.debounce(function () {
            f("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
        }, 100);
        p.ready = function () {
            w();
            if (!u) {
                t()
            }
        };
        p.preview = p.design = function () {
            w()
        };

        function w() {
            y = h("html").attr("data-wf-site");
            x = h(o + " form");
            if (!x.length) {
                return
            }
            x.each(s)
        }

        function s(F, H) {
            var E = h(H);
            var J = h.data(H, o);
            if (!J) {
                J = h.data(H, o, {
                    form: E
                })
            }
            B(J);
            var G = E.closest("div.w-form");
            J.done = G.find("> .w-form-done");
            J.fail = G.find("> .w-form-fail");
            var I = J.action = E.attr("action");
            J.handler = null;
            J.redirect = E.attr("data-redirect");
            if (q.test(I)) {
                J.handler = v;
                return
            }
            if (I) {
                return
            }
            if (y) {
                J.handler = i;
                return
            }
            j()
        }

        function t() {
            u = true;
            k.on("submit", o + " form", function (E) {
                var F = h.data(this, o);
                if (F.handler) {
                    F.evt = E;
                    F.handler(F)
                }
            })
        }

        function B(F) {
            var E = F.btn = F.form.find(':input[type="submit"]');
            F.wait = F.btn.attr("data-wait") || null;
            F.success = false;
            E.prop("disabled", false);
            F.label && E.val(F.label)
        }

        function A(F) {
            var E = F.btn;
            var G = F.wait;
            E.prop("disabled", true);
            if (G) {
                F.label = E.val();
                E.val(G)
            }
        }

        function z(G, E) {
            var F = null;
            E = E || {};
            G.find(':input:not([type="submit"])').each(function (I, K) {
                var M = h(K);
                var J = M.attr("type");
                var H = M.attr("data-name") || M.attr("name") || ("Field " + (I + 1));
                var L = M.val();
                if (J === "checkbox") {
                    L = M.is(":checked")
                }
                if (J === "radio") {
                    if (E[H] === null || typeof E[H] === "string") {
                        return
                    }
                    L = G.find('input[name="' + M.attr("name") + '"]:checked').val() || null
                }
                if (typeof L === "string") {
                    L = h.trim(L)
                }
                E[H] = L;
                F = F || r(M, H, L)
            });
            return F
        }

        function r(H, F, G) {
            var E = null;
            if (!H.attr("required")) {
                return null
            }
            if (!G) {
                E = "Please fill out the required field: " + F
            } else {
                if (n.test(F) || n.test(H.attr("type"))) {
                    if (!e.test(G)) {
                        E = "Please enter a valid email address for: " + F
                    }
                }
            }
            return E
        }

        function i(H) {
            B(H);
            var G = H.form;
            var I = {
                name: G.attr("data-name") || G.attr("name") || "Untitled Form",
                source: m.href,
                test: a.env(),
                fields: {}
            };
            l(H);
            var E = z(G, I.fields);
            if (E) {
                return f(E)
            }
            A(H);
            if (!y) {
                g(H);
                return
            }
            var F = ("https://framework.com") + "/api/v1/form/" + y;
            if (D && F.indexOf(("https://framework.com")) >= 0) {
                F = F.replace(("https://framework.com"), ("http://formdata.framework.com"))
            }
            h.ajax({
                url: F,
                type: "POST",
                data: I,
                dataType: "json",
                crossDomain: true
            }).done(function () {
                H.success = true;
                g(H)
            }).fail(function (J, L, K) {
                g(H)
            })
        }

        function v(J) {
            B(J);
            var I = J.form;
            var K = {};
            if (/^https/.test(m.href) && !/^https/.test(J.action)) {
                I.attr("method", "post");
                return
            }
            l(J);
            var E = z(I, K);
            if (E) {
                return f(E)
            }
            A(J);
            var L;
            C.each(K, function (N, M) {
                if (n.test(M)) {
                    K.EMAIL = N
                }
                if (/^((full[ _-]?)?name)$/i.test(M)) {
                    L = N
                }
                if (/^(first[ _-]?name)$/i.test(M)) {
                    K.FNAME = N
                }
                if (/^(last[ _-]?name)$/i.test(M)) {
                    K.LNAME = N
                }
            });
            if (L && !K.FNAME) {
                L = L.split(" ");
                K.FNAME = L[0];
                K.LNAME = K.LNAME || L[1]
            }
            var G = J.action.replace("/post?", "/post-json?") + "&c=?";
            var H = G.indexOf("u=") + 2;
            H = G.substring(H, G.indexOf("&", H));
            var F = G.indexOf("id=") + 3;
            F = G.substring(F, G.indexOf("&", F));
            K["b_" + H + "_" + F] = "";
            h.ajax({
                url: G,
                data: K,
                dataType: "jsonp"
            }).done(function (M) {
                J.success = (M.result === "success" || /already/.test(M.msg));
                if (!J.success) {
                    console.info("MailChimp error: " + M.msg)
                }
                g(J)
            }).fail(function (M, O, N) {
                g(J)
            })
        }

        function g(G) {
            var F = G.form;
            var E = F.closest("div.w-form");
            var I = G.redirect;
            var H = G.success;
            if (H && I) {
                a.location(I);
                return
            }
            G.done.toggle(H);
            G.fail.toggle(!H);
            F.toggle(!H);
            B(G)
        }

        function l(E) {
            E.evt && E.evt.preventDefault();
            E.evt = null
        }
        return p
    })
}, function (c, b, d) {
    var a = d(1);
    a.define("gplus", c.exports = function (i, f) {
        var k = i(document);
        var g = {};
        var e;
        g.ready = function () {
            if (!a.env() && !e) {
                j()
            }
        };

        function j() {
            k.find(".w-widget-gplus").length && h()
        }

        function h() {
            e = true;
            i.getScript("https://apis.google.com/js/plusone.js")
        }
        return g
    })
}, function (d, b, e) {
    var a = e(1);
    var c = e(2);
    a.define("ix", d.exports = function (l, J) {
        var u = {};
        var I;
        var w = l(window);
        var q = ".w-ix";
        var h = l.tram;
        var C = a.env;
        var F = C();
        var y = C.chrome && C.chrome < 35;
        var z = "none 0s ease 0s";
        var K = l();
        var H = {};
        var v = [];
        var o = [];
        var E = [];
        var p;
        var B = 1;
        var s = {
            tabs: ".w-tab-link, .w-tab-pane",
            dropdown: ".w-dropdown",
            slider: ".w-slide",
            navbar: ".w-nav"
        };
        u.init = function (L) {
            setTimeout(function () {
                G(L)
            }, 1)
        };
        u.preview = function () {
            I = false;
            B = 100;
            setTimeout(function () {
                G(window.__wf_ix)
            }, 1)
        };
        u.design = function () {
            I = true;
            u.destroy()
        };
        u.destroy = function () {
            p = true;
            K.each(g);
            a.scroll.off(i);
            c.async();
            v = [];
            o = [];
            E = []
        };
        u.ready = function () {
            if (H && p) {
                p = false;
                A()
            }
        };
        u.run = t;
        u.style = F ? k : r;

        function G(L) {
            if (!L) {
                return
            }
            H = {};
            J.each(L, function (M) {
                H[M.slug] = M.value
            });
            A()
        }

        function A() {
            var L = l("[data-ix]");
            if (!L.length) {
                return
            }
            L.each(g);
            L.each(x);
            if (v.length) {
                a.scroll.on(i);
                setTimeout(i, 1)
            }
            if (o.length) {
                a.load(f)
            }
            if (E.length) {
                setTimeout(n, B)
            }
            c.init();
            a.redraw.up()
        }

        function x(N, P) {
            var M = l(P);
            var Q = M.attr("data-ix");
            var L = H[Q];
            if (!L) {
                return
            }
            var O = L.triggers;
            if (!O) {
                return
            }
            u.style(M, L.style);
            J.each(O, function (T) {
                var Y = {};
                var W = T.type;
                var X = T.stepsB && T.stepsB.length;

                function V() {
                    t(T, M, {
                        group: "A"
                    })
                }

                function S() {
                    t(T, M, {
                        group: "B"
                    })
                }
                if (W === "load") {
                    (T.preload && !F) ? o.push(V) : E.push(V);
                    return
                }
                if (W === "click") {
                    M.on("click" + q, function (Z) {
                        if (!a.validClick(Z.currentTarget)) {
                            return
                        }
                        if (M.attr("href") === "#") {
                            Z.preventDefault()
                        }
                        t(T, M, {
                            group: Y.clicked ? "B" : "A"
                        });
                        if (X) {
                            Y.clicked = !Y.clicked
                        }
                    });
                    K = K.add(M);
                    return
                }
                if (W === "hover") {
                    M.on("mouseenter" + q, V);
                    M.on("mouseleave" + q, S);
                    K = K.add(M);
                    return
                }
                if (W === "scroll") {
                    v.push({
                        el: M,
                        trigger: T,
                        state: {
                            active: false
                        },
                        offsetTop: m(T.offsetTop),
                        offsetBot: m(T.offsetBot)
                    });
                    return
                }
                var U = s[W];
                if (U) {
                    var R = M.closest(U);
                    R.on(c.types.INTRO, V).on(c.types.OUTRO, S);
                    K = K.add(R);
                    return
                }
            })
        }

        function m(M) {
            if (!M) {
                return 0
            }
            M = M + "";
            var L = parseInt(M, 10);
            if (L !== L) {
                return 0
            }
            if (M.indexOf("%") > 0) {
                L = L / 100;
                if (L >= 1) {
                    L = 0.999
                }
            }
            return L
        }

        function g(L, M) {
            l(M).off(q)
        }

        function i() {
            var Q = w.scrollTop();
            var P = w.height();
            var V = v.length;
            for (var T = 0; T < V; T++) {
                var U = v[T];
                var Y = U.el;
                var O = U.trigger;
                var S = O.stepsB && O.stepsB.length;
                var M = U.state;
                var W = Y.offset().top;
                var X = Y.outerHeight();
                var N = U.offsetTop;
                var L = U.offsetBot;
                if (N < 1 && N > 0) {
                    N *= P
                }
                if (L < 1 && L > 0) {
                    L *= P
                }
                var R = (W + X - N >= Q && W + L <= Q + P);
                if (R === M.active) {
                    continue
                }
                if (R === false && !S) {
                    continue
                }
                M.active = R;
                t(O, Y, {
                    group: R ? "A" : "B"
                })
            }
        }

        function f() {
            var M = o.length;
            for (var L = 0; L < M; L++) {
                o[L]()
            }
        }

        function n() {
            var M = E.length;
            for (var L = 0; L < M; L++) {
                E[L]()
            }
        }

        function t(M, X, L, Q) {
            L = L || {};
            var O = L.done;
            if (I && !L.force) {
                return
            }
            var V = L.group || "A";
            var R = M["loop" + V];
            var S = M["steps" + V];
            if (!S || !S.length) {
                return
            }
            if (S.length < 2) {
                R = false
            }
            if (!Q) {
                var N = M.selector;
                if (N) {
                    X = (M.descend ? X.find(N) : M.siblings ? X.siblings(N) : l(N));
                    if (F) {
                        X.attr("data-ix-affect", 1)
                    }
                }
                if (y) {
                    X.addClass("w-ix-emptyfix")
                }
            }
            var T = h(X);
            var W = {};
            for (var P = 0; P < S.length; P++) {
                j(T, S[P], W)
            }

            function U() {
                if (R) {
                    return t(M, X, L, true)
                }
                if (W.width === "auto") {
                    T.set({
                        width: "auto"
                    })
                }
                if (W.height === "auto") {
                    T.set({
                        height: "auto"
                    })
                }
                O && O()
            }
            W.start ? T.then(U) : U()
        }

        function j(U, L, V) {
            var N = "add";
            var M = "start";
            if (V.start) {
                N = M = "then"
            }
            var T = L.transition;
            if (T) {
                T = T.split(",");
                for (var O = 0; O < T.length; O++) {
                    var S = T[O];
                    U[N](S)
                }
            }
            var R = D(L) || {};
            if (R.width != null) {
                V.width = R.width
            }
            if (R.height != null) {
                V.height = R.height
            }
            if (T == null) {
                if (V.start) {
                    U.then(function () {
                        var W = this.queue;
                        this.set(R);
                        if (R.display) {
                            U.redraw();
                            a.redraw.up()
                        }
                        this.queue = W;
                        this.next()
                    })
                } else {
                    U.set(R);
                    if (R.display) {
                        U.redraw();
                        a.redraw.up()
                    }
                }
                var P = R.wait;
                if (P != null) {
                    U.wait(P);
                    V.start = true
                }
            } else {
                if (R.display) {
                    var Q = R.display;
                    delete R.display;
                    if (V.start) {
                        U.then(function () {
                            var W = this.queue;
                            this.set({
                                display: Q
                            }).redraw();
                            a.redraw.up();
                            this.queue = W;
                            this.next()
                        })
                    } else {
                        U.set({
                            display: Q
                        }).redraw();
                        a.redraw.up()
                    }
                }
                U[M](R);
                V.start = true
            }
        }

        function k(M, O) {
            var L = h(M);
            M.css("transition", "");
            var N = M.css("transition");
            if (N === z) {
                N = L.upstream = null
            }
            L.upstream = z;
            L.set(D(O));
            L.upstream = N
        }

        function r(L, M) {
            h(L).set(D(M))
        }

        function D(O) {
            var M = {};
            var N = false;
            for (var L in O) {
                if (L === "transition") {
                    continue
                }
                M[L] = O[L];
                N = true
            }
            return N ? M : null
        }
        return u
    })
}, function (c, b, e) {
    var a = e(1);

    function d(t, E, n) {
        var f = n.tram;
        var w = Array.isArray;
        var z = "w-lightbox";
        var H = z + "-";
        var h = /(^|\s+)/g;
        var B = [];
        var g;
        var p;
        var o;

        function j(O, N) {
            B = w(O) ? O : [O];
            if (!p) {
                j.build()
            }
            if (B.length > 1) {
                p.items = p.empty;
                B.forEach(function (Q) {
                    var R = K("thumbnail");
                    var P = K("item").append(R);
                    p.items = p.items.add(P);
                    k(Q.thumbnailUrl || Q.url, function (S) {
                        if (S.prop("width") > S.prop("height")) {
                            x(S, "wide")
                        } else {
                            x(S, "tall")
                        }
                        R.append(x(S, "thumbnail-image"))
                    })
                });
                p.strip.empty().append(p.items);
                x(p.content, "group")
            }
            f(A(p.lightbox, "hide").focus()).add("opacity .3s").start({
                opacity: 1
            });
            x(p.html, "noscroll");
            return j.show(N || 0)
        }
        j.build = function () {
            j.destroy();
            p = {
                html: n(E.documentElement),
                empty: n()
            };
            p.arrowLeft = K("control left inactive");
            p.arrowRight = K("control right inactive");
            p.close = K("control close");
            p.spinner = K("spinner");
            p.strip = K("strip");
            o = new q(p.spinner, i("hide"));
            p.content = K("content").append(p.spinner, p.arrowLeft, p.arrowRight, p.close);
            p.container = K("container").append(p.content, p.strip);
            p.lightbox = K("backdrop hide").append(p.container);
            p.strip.on("tap", G("item"), l);
            p.content.on("swipe", s).on("tap", G("left"), C).on("tap", G("right"), F).on("tap", G("close"), v).on("tap", G("image, caption"), F);
            p.container.on("tap", G("view, strip"), v).on("dragstart", G("img"), r);
            p.lightbox.on("keydown", M).on("focusin", L);
            n("body").append(p.lightbox.prop("tabIndex", 0));
            return j
        };
        j.destroy = function () {
            if (!p) {
                return
            }
            A(p.html, "noscroll");
            p.lightbox.remove();
            p = undefined
        };
        j.show = function (O) {
            if (O === g) {
                return
            }
            var P = B[O];
            if (!P) {
                return j.hide()
            }
            var Q = g;
            g = O;
            o.show();
            var N = P.html && J(P.width, P.height) || P.url;
            k(N, function (U) {
                if (O !== g) {
                    return
                }
                var T = K("figure", "figure").append(x(U, "image"));
                var V = K("frame").append(T);
                var X = K("view").append(V);
                var R, S;
                if (P.html) {
                    R = n(P.html);
                    S = R.is("iframe");
                    if (S) {
                        R.on("load", W)
                    }
                    T.append(x(R, "embed"))
                }
                if (P.caption) {
                    T.append(K("caption", "figcaption").text(P.caption))
                }
                p.spinner.before(X);
                if (!S) {
                    W()
                }

                function W() {
                    o.hide();
                    if (O !== g) {
                        X.remove();
                        return
                    }
                    I(p.arrowLeft, "inactive", O <= 0);
                    I(p.arrowRight, "inactive", O >= B.length - 1);
                    if (p.view) {
                        f(p.view).add("opacity .3s").start({
                            opacity: 0
                        }).then(y(p.view));
                        f(X).add("opacity .3s").add("transform .3s").set({
                            x: O > Q ? "80px" : "-80px"
                        }).start({
                            opacity: 1,
                            x: 0
                        })
                    } else {
                        X.css("opacity", 1)
                    }
                    p.view = X;
                    if (p.items) {
                        x(A(p.items, "active").eq(O), "active")
                    }
                }
            });
            return j
        };
        j.hide = function () {
            f(p.lightbox).add("opacity .3s").start({
                opacity: 0
            }).then(m);
            return j
        };
        j.prev = function () {
            if (g > 0) {
                j.show(g - 1)
            }
        };
        j.next = function () {
            if (g < B.length - 1) {
                j.show(g + 1)
            }
        };

        function D(N) {
            return function (O) {
                if (this !== O.target) {
                    return
                }
                O.stopPropagation();
                O.preventDefault();
                N()
            }
        }
        var C = D(j.prev);
        var F = D(j.next);
        var v = D(j.hide);
        var l = function (O) {
            var N = n(this).index();
            O.preventDefault();
            j.show(N)
        };
        var s = function (N, O) {
            N.preventDefault();
            if (O.direction === "left") {
                j.next()
            } else {
                if (O.direction === "right") {
                    j.prev()
                }
            }
        };
        var L = function () {
            this.focus()
        };

        function r(N) {
            N.preventDefault()
        }

        function M(N) {
            var O = N.keyCode;
            if (O === 27) {
                j.hide()
            } else {
                if (O === 37) {
                    j.prev()
                } else {
                    if (O === 39) {
                        j.next()
                    }
                }
            }
        }

        function m() {
            if (p) {
                A(p.html, "noscroll");
                x(p.lightbox, "hide");
                p.strip.empty();
                p.view && p.view.remove();
                A(p.content, "group");
                x(p.arrowLeft, "inactive");
                x(p.arrowRight, "inactive");
                g = p.view = undefined
            }
        }

        function k(N, P) {
            var O = K("img", "img");
            O.one("load", function () {
                P(O)
            });
            O.attr("src", N);
            return O
        }

        function y(N) {
            return function () {
                N.remove()
            }
        }

        function q(P, O, N) {
            this.$element = P;
            this.className = O;
            this.delay = N || 200;
            this.hide()
        }
        q.prototype.show = function () {
            var N = this;
            if (N.timeoutId) {
                return
            }
            N.timeoutId = setTimeout(function () {
                N.$element.removeClass(N.className);
                delete N.timeoutId
            }, N.delay)
        };
        q.prototype.hide = function () {
            var N = this;
            if (N.timeoutId) {
                clearTimeout(N.timeoutId);
                delete N.timeoutId;
                return
            }
            N.$element.addClass(N.className)
        };

        function i(N, O) {
            return N.replace(h, (O ? " ." : " ") + H)
        }

        function G(N) {
            return i(N, true)
        }

        function x(N, O) {
            return N.addClass(i(O))
        }

        function A(N, O) {
            return N.removeClass(i(O))
        }

        function I(N, P, O) {
            return N.toggleClass(i(P), O)
        }

        function K(O, N) {
            return x(n(E.createElement(N || "div")), O)
        }

        function u(N) {
            return typeof N === "object" && N != null && !w(N)
        }

        function J(P, N) {
            var O = '<svg xmlns="http://www.w3.org/2000/svg" width="' + P + '" height="' + N + '"/>';
            return "data:image/svg+xml;charset=utf-8," + encodeURI(O)
        } (function () {
            var O = t.navigator.userAgent;
            var R = /(iPhone|iPad|iPod);[^OS]*OS (\d)/;
            var Q = O.match(R);
            var N = O.indexOf("Android ") > -1 && O.indexOf("Chrome") === -1;
            if (!N && (!Q || Q[2] > 7)) {
                return
            }
            var S = E.createElement("style");
            E.head.appendChild(S);
            t.addEventListener("orientationchange", P, true);

            function P() {
                var V = t.innerHeight;
                var U = t.innerWidth;
                var T = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + V + "px}.w-lightbox-view {width:" + U + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + (0.86 * V) + "px}.w-lightbox-image {max-width:" + U + "px;max-height:" + V + "px}.w-lightbox-group .w-lightbox-image {max-height:" + (0.86 * V) + "px}.w-lightbox-strip {padding: 0 " + (0.01 * V) + "px}.w-lightbox-item {width:" + (0.1 * V) + "px;padding:" + (0.02 * V) + "px " + (0.01 * V) + "px}.w-lightbox-thumbnail {height:" + (0.1 * V) + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + (0.96 * V) + "px}.w-lightbox-content {margin-top:" + (0.02 * V) + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + (0.84 * V) + "px}.w-lightbox-image {max-width:" + (0.96 * U) + "px;max-height:" + (0.96 * V) + "px}.w-lightbox-group .w-lightbox-image {max-width:" + (0.823 * U) + "px;max-height:" + (0.84 * V) + "px}}";
                S.textContent = T
            }
            P()
        })();
        return j
    }
    a.define("lightbox", c.exports = function (n, q) {
        var p = {};
        var k = d(window, document, n);
        var m = n(document);
        var l;
        var j;
        var s;
        var o = a.env();
        var i = ".w-lightbox";
        var h;
        p.ready = p.design = p.preview = r;

        function r() {
            s = o && a.env("design");
            l = n(document.body);
            k.destroy();
            h = {};
            j = m.find(i);
            j.frameworkLightBox()
        }
        jQuery.fn.extend({
            frameworkLightBox: function () {
                var u = this;
                n.each(u, function (v, w) {
                    var x = n.data(w, i);
                    if (!x) {
                        x = n.data(w, i, {
                            el: n(w),
                            mode: "images",
                            images: [],
                            embed: ""
                        })
                    }
                    x.el.off(i);
                    g(x);
                    if (s) {
                        x.el.on("setting" + i, g.bind(null, x))
                    } else {
                        x.el.on("tap" + i, t(x)).on("click" + i, function (y) {
                            y.preventDefault()
                        })
                    }
                })
            }
        });

        function g(w) {
            var u = w.el.children(".w-json").html();
            var y, v;
            if (!u) {
                w.items = [];
                return
            }
            try {
                u = JSON.parse(u)
            } catch (x) {
                console.error("Malformed lightbox JSON configuration.", x)
            }
            f(u);
            y = u.group;
            if (y) {
                v = h[y];
                if (!v) {
                    v = h[y] = []
                }
                w.items = v;
                if (u.items.length) {
                    w.index = v.length;
                    v.push.apply(v, u.items)
                }
            } else {
                w.items = u.items
            }
        }

        function t(u) {
            return function () {
                u.items.length && k(u.items, u.index || 0)
            }
        }

        function f(u) {
            if (u.images) {
                u.images.forEach(function (v) {
                    v.type = "image"
                });
                u.items = u.images
            }
            if (u.embed) {
                u.embed.type = "video";
                u.items = [u.embed]
            }
            if (u.groupId) {
                u.group = u.groupId
            }
        }
        return p
    })
}, function (c, b, d) {
    var a = d(1);
    a.define("links", c.exports = function (g, v) {
        var l = {};
        var o = g(window);
        var u;
        var s = a.env();
        var e = window.location;
        var j = document.createElement("a");
        var r = "w--current";
        var n = /^#[a-zA-Z][\w:.-]*$/;
        var i = /index\.(html|php)$/;
        var h = /\/$/;
        var m;
        var k;
        l.ready = l.design = l.preview = q;

        function q() {
            u = s && a.env("design");
            k = a.env("slug") || e.pathname || "";
            a.scroll.off(f);
            m = [];
            var w = document.links;
            for (var x = 0; x < w.length; ++x) {
                p(w[x])
            }
            if (m.length) {
                a.scroll.on(f);
                f()
            }
        }

        function p(z) {
            var x = (u && z.getAttribute("href-disabled")) || z.getAttribute("href");
            j.href = x;
            if (x.indexOf(":") >= 0) {
                return
            }
            var w = g(z);
            if (x.indexOf("#") === 0 && n.test(x)) {
                var A = g(x);
                A.length && m.push({
                    link: w,
                    sec: A,
                    active: false
                });
                return
            }
            if (x === "#") {
                return
            }
            var y = (j.href === e.href) || (x === k) || (i.test(x) && h.test(k));
            t(w, r, y)
        }

        function f() {
            var w = o.scrollTop();
            var x = o.height();
            v.each(m, function (A) {
                var z = A.link;
                var B = A.sec;
                var D = B.offset().top;
                var y = B.outerHeight();
                var E = x * 0.5;
                var C = (B.is(":visible") && D + y - E >= w && D + E <= w + x);
                if (A.active === C) {
                    return
                }
                A.active = C;
                t(z, r, C);
                if (u) {
                    z[0].__wf_current = C
                }
            })
        }

        function t(w, x, z) {
            var y = w.hasClass(x);
            if (z && y) {
                return
            }
            if (!z && !y) {
                return
            }
            z ? w.addClass(x) : w.removeClass(x)
        }
        return l
    })
}, function (c, b, d) {
    var a = d(1);
    a.define("maps", c.exports = function (j, t) {
        var m = {};
        var i = j(document);
        var k = null;
        var n;
        var g = ".w-widget-map";
        m.ready = function () {
            if (!a.env()) {
                f()
            }
        };
        m.preview = function () {
            n = i.find(g);
            a.resize.off(o);
            if (n.length) {
                a.resize.on(o);
                o()
            }
        };
        m.design = function (u) {
            n = i.find(g);
            a.resize.off(o);
            n.length && t.defer(o)
        };
        m.destroy = l;

        function o() {
            if (n.length && a.app) {
                n.each(a.app.redrawElement)
            }
        }

        function f() {
            n = i.find(g);
            if (!n.length) {
                return
            }
            if (k === null) {
                j.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded");
                window._wf_maps_loaded = u
            } else {
                u()
            }

            function u() {
                window._wf_maps_loaded = function () { };
                k = window.google;
                n.each(e);
                l();
                q()
            }
        }

        function l() {
            a.resize.off(h);
            a.redraw.off(h)
        }

        function q() {
            a.resize.on(h);
            a.redraw.on(h)
        }

        function e(u, v) {
            var w = j(v).data();
            p(v, w)
        }

        function h() {
            n.each(s)
        }

        function s(u, v) {
            var w = p(v);
            k.maps.event.trigger(w.map, "resize");
            w.setMapPosition()
        }
        var r = "w-widget-map";

        function p(w, z) {
            var v = j.data(w, r);
            if (v) {
                return v
            }
            var E = j(w);
            v = j.data(w, r, {
                latLng: "51.511214,-0.119824",
                tooltip: "",
                style: "roadmap",
                zoom: 12,
                marker: new k.maps.Marker({
                    draggable: false
                }),
                infowindow: new k.maps.InfoWindow({
                    disableAutoPan: true
                })
            });
            var x = z.widgetLatlng || v.latLng;
            v.latLng = x;
            var B = x.split(",");
            var A = new k.maps.LatLng(B[0], B[1]);
            v.latLngObj = A;
            var y = (a.env.touch && z.disableTouch) ? false : true;
            v.map = new k.maps.Map(w, {
                center: v.latLngObj,
                zoom: v.zoom,
                maxZoom: 18,
                mapTypeControl: false,
                panControl: false,
                streetViewControl: false,
                scrollwheel: !z.disableScroll,
                draggable: y,
                zoomControl: true,
                zoomControlOptions: {
                    style: k.maps.ZoomControlStyle.SMALL
                },
                mapTypeId: v.style
            });
            v.marker.setMap(v.map);
            v.setMapPosition = function () {
                v.map.setCenter(v.latLngObj);
                var F = 0;
                var H = 0;
                var G = E.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
                F -= parseInt(G.paddingLeft, 10);
                F += parseInt(G.paddingRight, 10);
                H -= parseInt(G.paddingTop, 10);
                H += parseInt(G.paddingBottom, 10);
                if (F || H) {
                    v.map.panBy(F, H)
                }
                E.css("position", "")
            };
            k.maps.event.addListener(v.map, "tilesloaded", function () {
                k.maps.event.clearListeners(v.map, "tilesloaded");
                v.setMapPosition()
            });
            v.setMapPosition();
            v.marker.setPosition(v.latLngObj);
            v.infowindow.setPosition(v.latLngObj);
            var D = z.widgetTooltip;
            if (D) {
                v.tooltip = D;
                v.infowindow.setContent(D);
                if (!v.infowindowOpen) {
                    v.infowindow.open(v.map, v.marker);
                    v.infowindowOpen = true
                }
            }
            var u = z.widgetStyle;
            if (u) {
                v.map.setMapTypeId(u)
            }
            var C = z.widgetZoom;
            if (C != null) {
                v.zoom = C;
                v.map.setZoom(+C)
            }
            k.maps.event.addListener(v.marker, "click", function () {
                window.open("https://maps.google.com/?z=" + v.zoom + "&daddr=" + v.latLng)
            });
            return v
        }
        return m
    })
}, function (d, b, e) {
    var a = e(1);
    var c = e(2);
    a.define("navbar", d.exports = function (k, M) {
        var p = {};
        var g = k.tram;
        var r = k(window);
        var l = k(document);
        var w;
        var t;
        var L;
        var G = a.env();
        var C = '<div class="w-nav-overlay" data-wf-ignore />';
        var n = ".w-nav";
        var f = "w--open";
        var F = "w--nav-menu-open";
        var K = "w--nav-link-open";
        var j = c.triggers;
        p.ready = p.design = p.preview = z;
        p.destroy = E;

        function z() {
            L = G && a.env("design");
            w = k(document.body);
            t = l.find(n);
            if (!t.length) {
                return
            }
            t.each(s);
            E();
            u()
        }

        function E() {
            a.resize.off(m)
        }

        function u() {
            a.resize.on(m)
        }

        function m() {
            t.each(I)
        }

        function s(P, Q) {
            var O = k(Q);
            var R = k.data(Q, n);
            if (!R) {
                R = k.data(Q, n, {
                    open: false,
                    el: O,
                    config: {}
                })
            }
            R.menu = O.find(".w-nav-menu");
            R.links = R.menu.find(".w-nav-link");
            R.dropdowns = R.menu.find(".w-dropdown");
            R.button = O.find(".w-nav-button");
            R.container = O.find(".w-container");
            R.outside = H(R);
            R.el.off(n);
            R.button.off(n);
            R.menu.off(n);
            J(R);
            if (L) {
                N(R);
                R.el.on("setting" + n, h(R))
            } else {
                i(R);
                R.button.on("tap" + n, v(R));
                R.menu.on("click" + n, "a", B(R))
            }
            I(P, Q)
        }

        function N(O) {
            if (!O.overlay) {
                return
            }
            q(O, true);
            O.overlay.remove();
            O.overlay = null
        }

        function i(O) {
            if (O.overlay) {
                return
            }
            O.overlay = k(C).appendTo(O.el);
            O.parent = O.menu.parent();
            q(O, true)
        }

        function J(R) {
            var P = {};
            var O = R.config || {};
            var Q = P.animation = R.el.attr("data-animation") || "default";
            P.animOver = /^over/.test(Q);
            P.animDirect = /left$/.test(Q) ? -1 : 1;
            if (O.animation !== Q) {
                R.open && M.defer(D, R)
            }
            P.easing = R.el.attr("data-easing") || "ease";
            P.easing2 = R.el.attr("data-easing2") || "ease";
            var S = R.el.attr("data-duration");
            P.duration = S != null ? +S : 400;
            P.docHeight = R.el.attr("data-doc-height");
            R.config = P
        }

        function h(O) {
            return function (Q, R) {
                R = R || {};
                var P = r.width();
                J(O);
                R.open === true && o(O, true);
                R.open === false && q(O, true);
                O.open && M.defer(function () {
                    if (P !== r.width()) {
                        D(O)
                    }
                })
            }
        }

        function D(O) {
            if (!O.open) {
                return
            }
            q(O, true);
            o(O, true)
        }

        function v(O) {
            return M.debounce(function (P) {
                O.open ? q(O) : o(O)
            })
        }

        function B(O) {
            return function (P) {
                var R = k(this);
                var Q = R.attr("href");
                if (!a.validClick(P.currentTarget)) {
                    P.preventDefault();
                    return
                }
                if (Q && Q.indexOf("#") === 0 && O.open) {
                    q(O)
                }
            }
        }

        function H(O) {
            if (O.outside) {
                l.off("tap" + n, O.outside)
            }
            return M.debounce(function (P) {
                if (!O.open) {
                    return
                }
                var Q = k(P.target).closest(".w-nav-menu");
                if (!O.menu.is(Q)) {
                    q(O)
                }
            })
        }

        function I(O, P) {
            var R = k.data(P, n);
            var S = R.collapsed = R.button.css("display") !== "none";
            if (R.open && !S && !L) {
                q(R, true)
            }
            if (R.container.length) {
                var Q = x(R);
                R.links.each(Q);
                R.dropdowns.each(Q)
            }
            if (R.open) {
                y(R)
            }
        }
        var A = "max-width";

        function x(O) {
            var P = O.container.css(A);
            if (P === "none") {
                P = ""
            }
            return function (Q, R) {
                R = k(R);
                R.css(A, "");
                if (R.css(A) === "none") {
                    R.css(A, P)
                }
            }
        }

        function o(W, S) {
            if (W.open) {
                return
            }
            W.open = true;
            W.menu.addClass(F);
            W.links.addClass(K);
            W.button.addClass(f);
            var R = W.config;
            var T = R.animation;
            if (T === "none" || !g.support.transform) {
                S = true
            }
            var Y = y(W);
            var Q = W.menu.outerHeight(true);
            var X = W.menu.outerWidth(true);
            var O = W.el.height();
            var P = W.el[0];
            I(0, P);
            j.intro(0, P);
            a.redraw.up();
            if (!L) {
                l.on("tap" + n, W.outside)
            }
            if (S) {
                return
            }
            var U = "transform " + R.duration + "ms " + R.easing;
            if (W.overlay) {
                W.overlay.show().append(W.menu)
            }
            if (R.animOver) {
                g(W.menu).add(U).set({
                    x: R.animDirect * X,
                    height: Y
                }).start({
                    x: 0
                });
                W.overlay && W.overlay.width(X);
                return
            }
            var V = O + Q;
            g(W.menu).add(U).set({
                y: -V
            }).start({
                y: 0
            })
        }

        function y(P) {
            var O = P.config;
            var Q = O.docHeight ? l.height() : w.height();
            if (O.animOver) {
                P.menu.height(Q)
            } else {
                if (P.el.css("position") !== "fixed") {
                    Q -= P.el.height()
                }
            }
            P.overlay && P.overlay.height(Q);
            return Q
        }

        function q(W, S) {
            if (!W.open) {
                return
            }
            W.open = false;
            W.button.removeClass(f);
            var R = W.config;
            if (R.animation === "none" || !g.support.transform) {
                S = true
            }
            var T = R.animation;
            j.outro(0, W.el[0]);
            l.off("tap" + n, W.outside);
            if (S) {
                g(W.menu).stop();
                O();
                return
            }
            var U = "transform " + R.duration + "ms " + R.easing2;
            var Q = W.menu.outerHeight(true);
            var X = W.menu.outerWidth(true);
            var P = W.el.height();
            if (R.animOver) {
                g(W.menu).add(U).start({
                    x: X * R.animDirect
                }).then(O);
                return
            }
            var V = P + Q;
            g(W.menu).add(U).start({
                y: -V
            }).then(O);

            function O() {
                W.menu.height("");
                g(W.menu).set({
                    x: 0,
                    y: 0
                });
                W.menu.removeClass(F);
                W.links.removeClass(K);
                if (W.overlay && W.overlay.children().length) {
                    W.menu.appendTo(W.parent);
                    W.overlay.attr("style", "").hide()
                }
                W.el.triggerHandler("w-close")
            }
        }
        return p
    })
}, function (c, b, d) {
    var a = d(1);
    a.define("scroll", c.exports = function (h, q) {
        var g = h(document);
        var l = window;
        var k = l.location;
        var m = e() ? null : l.history;
        var j = /^[a-zA-Z][\w:.-]*$/;

        function e() {
            try {
                return !!l.frameElement
            } catch (r) {
                return true
            }
        }

        function o() {
            if (k.hash) {
                i(k.hash.substring(1))
            }
            var r = k.href.split("#")[0];
            g.on("click", "a", function (u) {
                if (a.env("design")) {
                    return
                }
                if (window.$.mobile && h(u.currentTarget).hasClass("ui-link")) {
                    return
                }
                if (this.getAttribute("href") === "#") {
                    u.preventDefault();
                    return
                }
                var t = this.href.split("#");
                var s = t[0] === r ? t[1] : null;
                if (s) {
                    i(s, u)
                }
            })
        }

        function i(t, s) {
            if (!j.test(t)) {
                return
            }
            var r = h("#" + t);
            if (!r.length) {
                return
            }
            if (s) {
                s.preventDefault();
                s.stopPropagation()
            }
            if (k.hash !== t && m && m.pushState) {
                var x = m.state && m.state.hash;
                if (x !== t) {
                    m.pushState({
                        hash: t
                    }, "", "#" + t)
                }
            }
            var w = a.env("editor") ? ".w-editor-body" : "body";
            var v = h("header, " + w + " > .header, " + w + " > .w-nav:not([data-no-scroll])");
            var u = v.css("position") === "fixed" ? v.outerHeight() : 0;
            l.setTimeout(function () {
                n(r, u)
            }, s ? 0 : 300)
        }

        function n(t, z) {
            var s = h(l).scrollTop();
            var y = t.offset().top - z;
            if (t.data("scroll") === "mid") {
                var v = h(l).height() - z;
                var B = t.outerHeight();
                if (B < v) {
                    y -= Math.round((v - B) / 2)
                }
            }
            var A = 1;
            h("body").add(t).each(function (C) {
                var D = parseFloat(h(this).attr("data-scroll-time"), 10);
                if (!isNaN(D) && (D === 0 || D > 0)) {
                    A = D
                }
            });
            if (!Date.now) {
                Date.now = function () {
                    return new Date().getTime()
                }
            }
            var w = Date.now();
            var r = l.requestAnimationFrame || l.mozRequestAnimationFrame || l.webkitRequestAnimationFrame || function (C) {
                l.setTimeout(C, 15)
            };
            var x = (472.143 * Math.log(Math.abs(s - y) + 125) - 2000) * A;
            var u = function () {
                var C = Date.now() - w;
                l.scroll(0, p(s, y, C, x));
                if (C <= x) {
                    r(u)
                }
            };
            u()
        }

        function p(u, s, r, t) {
            if (r > t) {
                return s
            }
            return u + (s - u) * f(r / t)
        }

        function f(r) {
            return r < 0.5 ? 4 * r * r * r : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1
        }
        return {
            ready: o
        }
    })
}, function (d, b, e) {
    var a = e(1);
    var c = e(2);
    a.define("slider", d.exports = function (k, J) {
        var t = {};
        var f = k.tram;
        var m = k(document);
        var j;
        var I;
        var E = a.env();
        var q = ".w-slider";
        var y = '<div class="w-slider-dot" data-wf-ignore />';
        var i = c.triggers;
        var A;
        var s;
        t.ready = function () {
            B()
        };
        t.design = function () {
            I = true;
            B()
        };
        t.preview = function () {
            I = false;
            B()
        };
        t.redraw = function () {
            s = true;
            B()
        };
        t.destroy = D;

        function B() {
            j = m.find(q);
            if (!j.length) {
                return
            }
            j.filter(":visible").each(u);
            s = null;
            if (A) {
                return
            }
            D();
            x()
        }

        function D() {
            a.resize.off(h);
            a.redraw.off(t.redraw)
        }

        function x() {
            a.resize.on(h);
            a.redraw.on(t.redraw)
        }

        function h() {
            j.filter(":visible").each(H)
        }

        function u(L, M) {
            var K = k(M);
            var N = k.data(M, q);
            if (!N) {
                N = k.data(M, q, {
                    index: 0,
                    depth: 1,
                    el: K,
                    config: {}
                })
            }
            N.mask = K.children(".w-slider-mask");
            N.left = K.children(".w-slider-arrow-left");
            N.right = K.children(".w-slider-arrow-right");
            N.nav = K.children(".w-slider-nav");
            N.slides = N.mask.children(".w-slide");
            N.slides.each(i.reset);
            if (s) {
                N.maskWidth = 0
            }
            if (!f.support.transform) {
                N.left.hide();
                N.right.hide();
                N.nav.hide();
                A = true;
                return
            }
            N.el.off(q);
            N.left.off(q);
            N.right.off(q);
            N.nav.off(q);
            G(N);
            if (I) {
                N.el.on("setting" + q, g(N));
                r(N);
                N.hasTimer = false
            } else {
                N.el.on("swipe" + q, g(N));
                N.left.on("tap" + q, l(N));
                N.right.on("tap" + q, w(N));
                if (N.config.autoplay && !N.hasTimer) {
                    N.hasTimer = true;
                    N.timerCount = 1;
                    n(N)
                }
            }
            N.nav.on("tap" + q, "> div", g(N));
            if (!E) {
                N.mask.contents().filter(function () {
                    return this.nodeType === 3
                }).remove()
            }
            H(L, M)
        }

        function G(N) {
            var L = {};
            L.crossOver = 0;
            L.animation = N.el.attr("data-animation") || "slide";
            if (L.animation === "outin") {
                L.animation = "cross";
                L.crossOver = 0.5
            }
            L.easing = N.el.attr("data-easing") || "ease";
            var O = N.el.attr("data-duration");
            L.duration = O != null ? +O : 500;
            if (+N.el.attr("data-infinite")) {
                L.infinite = true
            }
            if (+N.el.attr("data-disable-swipe")) {
                L.disableSwipe = true
            }
            if (+N.el.attr("data-hide-arrows")) {
                L.hideArrows = true
            } else {
                if (N.config.hideArrows) {
                    N.left.show();
                    N.right.show()
                }
            }
            if (+N.el.attr("data-autoplay")) {
                L.autoplay = true;
                L.delay = +N.el.attr("data-delay") || 2000;
                L.timerMax = +N.el.attr("data-autoplay-limit");
                var M = "mousedown" + q + " touchstart" + q;
                if (!I) {
                    N.el.off(M).one(M, function () {
                        r(N)
                    })
                }
            }
            var K = N.right.width();
            L.edge = K ? K + 40 : 100;
            N.config = L
        }

        function l(K) {
            return function (L) {
                p(K, {
                    index: K.index - 1,
                    vector: -1
                })
            }
        }

        function w(K) {
            return function (L) {
                p(K, {
                    index: K.index + 1,
                    vector: 1
                })
            }
        }

        function v(M, L) {
            var K = null;
            if (L === M.slides.length) {
                B();
                C(M)
            }
            J.each(M.anchors, function (O, N) {
                k(O.els).each(function (P, Q) {
                    if (k(Q).index() === L) {
                        K = N
                    }
                })
            });
            if (K != null) {
                p(M, {
                    index: K,
                    immediate: true
                })
            }
        }

        function n(M) {
            r(M);
            var L = M.config;
            var K = L.timerMax;
            if (K && M.timerCount++ > K) {
                return
            }
            M.timerId = window.setTimeout(function () {
                if (M.timerId == null || I) {
                    return
                }
                w(M)();
                n(M)
            }, L.delay)
        }

        function r(K) {
            window.clearTimeout(K.timerId);
            K.timerId = null
        }

        function g(K) {
            return function (L, N) {
                N = N || {};
                var M = K.config;
                if (I && L.type === "setting") {
                    if (N.select === "prev") {
                        return l(K)()
                    }
                    if (N.select === "next") {
                        return w(K)()
                    }
                    G(K);
                    C(K);
                    if (N.select == null) {
                        return
                    }
                    v(K, N.select);
                    return
                }
                if (L.type === "swipe") {
                    if (M.disableSwipe) {
                        return
                    }
                    if (a.env("editor")) {
                        return
                    }
                    if (N.direction === "left") {
                        return w(K)()
                    }
                    if (N.direction === "right") {
                        return l(K)()
                    }
                    return
                }
                if (K.nav.has(L.target).length) {
                    p(K, {
                        index: k(L.target).index()
                    })
                }
            }
        }

        function p(af, N) {
            N = N || {};
            var ae = af.config;
            var U = af.anchors;
            af.previous = af.index;
            var S = N.index;
            var Z = {};
            if (S < 0) {
                S = U.length - 1;
                if (ae.infinite) {
                    Z.x = -af.endX;
                    Z.from = 0;
                    Z.to = U[0].width
                }
            } else {
                if (S >= U.length) {
                    S = 0;
                    if (ae.infinite) {
                        Z.x = U[U.length - 1].width;
                        Z.from = -U[U.length - 1].x;
                        Z.to = Z.from - Z.x
                    }
                }
            }
            af.index = S;
            var R = af.nav.children().eq(af.index).addClass("w-active");
            af.nav.children().not(R).removeClass("w-active");
            if (ae.hideArrows) {
                af.index === U.length - 1 ? af.right.hide() : af.right.show();
                af.index === 0 ? af.left.hide() : af.left.show()
            }
            var T = af.offsetX || 0;
            var ab = af.offsetX = -U[af.index].x;
            var Q = {
                x: ab,
                opacity: 1,
                visibility: ""
            };
            var ad = k(U[af.index].els);
            var Y = k(U[af.previous] && U[af.previous].els);
            var ac = af.slides.not(ad);
            var aa = ae.animation;
            var X = ae.easing;
            var K = Math.round(ae.duration);
            var M = N.vector || (af.index > af.previous ? 1 : -1);
            var O = "opacity " + K + "ms " + X;
            var L = "transform " + K + "ms " + X;
            if (!I) {
                ad.each(i.intro);
                ac.each(i.outro)
            }
            if (N.immediate && !s) {
                f(ad).set(Q);
                P();
                return
            }
            if (af.index === af.previous) {
                return
            }
            if (aa === "cross") {
                var V = Math.round(K - K * ae.crossOver);
                var W = Math.round(K - V);
                O = "opacity " + V + "ms " + X;
                f(Y).set({
                    visibility: ""
                }).add(O).start({
                    opacity: 0
                });
                f(ad).set({
                    visibility: "",
                    x: ab,
                    opacity: 0,
                    zIndex: af.depth++
                }).add(O).wait(W).then({
                    opacity: 1
                }).then(P);
                return
            }
            if (aa === "fade") {
                f(Y).set({
                    visibility: ""
                }).stop();
                f(ad).set({
                    visibility: "",
                    x: ab,
                    opacity: 0,
                    zIndex: af.depth++
                }).add(O).start({
                    opacity: 1
                }).then(P);
                return
            }
            if (aa === "over") {
                Q = {
                    x: af.endX
                };
                f(Y).set({
                    visibility: ""
                }).stop();
                f(ad).set({
                    visibility: "",
                    zIndex: af.depth++,
                    x: ab + U[af.index].width * M
                }).add(L).start({
                    x: ab
                }).then(P);
                return
            }
            if (ae.infinite && Z.x) {
                f(af.slides.not(Y)).set({
                    visibility: "",
                    x: Z.x
                }).add(L).start({
                    x: ab
                });
                f(Y).set({
                    visibility: "",
                    x: Z.from
                }).add(L).start({
                    x: Z.to
                });
                af.shifted = Y
            } else {
                if (ae.infinite && af.shifted) {
                    f(af.shifted).set({
                        visibility: "",
                        x: T
                    });
                    af.shifted = null
                }
                f(af.slides).set({
                    visibility: ""
                }).add(L).start({
                    x: ab
                })
            }

            function P() {
                ad = k(U[af.index].els);
                ac = af.slides.not(ad);
                if (aa !== "slide") {
                    Q.visibility = "hidden"
                }
                f(ac).set(Q)
            }
        }

        function H(K, L) {
            var M = k.data(L, q);
            if (z(M)) {
                return C(M)
            }
            if (I && F(M)) {
                C(M)
            }
        }

        function C(P) {
            var L = 1;
            var R = 0;
            var N = 0;
            var O = 0;
            var Q = P.maskWidth;
            var K = Q - P.config.edge;
            if (K < 0) {
                K = 0
            }
            P.anchors = [{
                els: [],
                x: 0,
                width: 0
            }];
            P.slides.each(function (S, T) {
                if (N - R > K) {
                    L++;
                    R += Q;
                    P.anchors[L - 1] = {
                        els: [],
                        x: N,
                        width: 0
                    }
                }
                O = k(T).outerWidth(true);
                N += O;
                P.anchors[L - 1].width += O;
                P.anchors[L - 1].els.push(T)
            });
            P.endX = N;
            if (I) {
                P.pages = null
            }
            if (P.nav.length && P.pages !== L) {
                P.pages = L;
                o(P)
            }
            var M = P.index;
            if (M >= L) {
                M = L - 1
            }
            p(P, {
                immediate: true,
                index: M
            })
        }

        function o(M) {
            var O = [];
            var L;
            var N = M.el.attr("data-nav-spacing");
            if (N) {
                N = parseFloat(N) + "px"
            }
            for (var K = 0; K < M.pages; K++) {
                L = k(y);
                if (M.nav.hasClass("w-num")) {
                    L.text(K + 1)
                }
                if (N != null) {
                    L.css({
                        "margin-left": N,
                        "margin-right": N
                    })
                }
                O.push(L)
            }
            M.nav.empty().append(O)
        }

        function z(K) {
            var L = K.mask.width();
            if (K.maskWidth !== L) {
                K.maskWidth = L;
                return true
            }
            return false
        }

        function F(L) {
            var K = 0;
            L.slides.each(function (M, N) {
                K += k(N).outerWidth(true)
            });
            if (L.slidesWidth !== K) {
                L.slidesWidth = K;
                return true
            }
            return false
        }
        return t
    })
}, function (d, b, e) {
    var a = e(1);
    var c = e(2);
    a.define("tabs", d.exports = function (j, D) {
        var q = {};
        var f = j.tram;
        var r = j(window);
        var l = j(document);
        var g;
        var n;
        var z = a.env;
        var m = z.safari;
        var B = z();
        var v = "data-w-tab";
        var o = ".w-tabs";
        var x = "w--current";
        var h = "w--tab-active";
        var i = c.triggers;
        var p;
        q.ready = q.design = q.preview = w;
        q.redraw = function () {
            p = true;
            w()
        };
        q.destroy = function () {
            g = l.find(o);
            if (!g.length) {
                return
            }
            g.each(t);
            A()
        };

        function w() {
            n = B && a.env("design");
            g = l.find(o);
            if (!g.length) {
                return
            }
            g.each(s);
            a.env("preview") && g.each(t);
            p = null;
            A();
            u()
        }

        function A() {
            a.redraw.off(q.redraw)
        }

        function u() {
            a.redraw.on(q.redraw)
        }

        function t(F, G) {
            var E = j(G);
            var H = j.data(G, o);
            if (!H) {
                return
            }
            H.links && H.links.each(i.reset);
            H.panes && H.panes.each(i.reset)
        }

        function s(G, I) {
            var F = j(I);
            var J = j.data(I, o);
            if (!J) {
                J = j.data(I, o, {
                    el: F,
                    config: {}
                })
            }
            J.current = null;
            J.menu = F.children(".w-tab-menu");
            J.links = J.menu.children(".w-tab-link");
            J.content = F.children(".w-tab-content");
            J.panes = J.content.children(".w-tab-pane");
            J.el.off(o);
            J.links.off(o);
            C(J);
            if (!n) {
                J.links.on("click" + o, k(J));
                var E = J.links.filter("." + x);
                var H = E.attr(v);
                H && y(J, {
                    tab: H,
                    immediate: true
                })
            }
        }

        function C(I) {
            var G = {};
            var F = I.config || {};
            G.easing = I.el.attr("data-easing") || "ease";
            var H = +I.el.attr("data-duration-in");
            H = G.intro = H === H ? H : 0;
            var E = +I.el.attr("data-duration-out");
            E = G.outro = E === E ? E : 0;
            G.immediate = !H && !E;
            I.config = G
        }

        function k(E) {
            return function (F) {
                var G = F.currentTarget.getAttribute(v);
                G && y(E, {
                    tab: G
                })
            }
        }

        function y(I, N) {
            N = N || {};
            var H = I.config;
            var L = H.easing;
            var G = N.tab;
            if (G === I.current) {
                return
            }
            I.current = G;
            I.links.each(function (P, Q) {
                var O = j(Q);
                if (Q.getAttribute(v) === G) {
                    O.addClass(x).each(i.intro)
                } else {
                    if (O.hasClass(x)) {
                        O.removeClass(x).each(i.outro)
                    }
                }
            });
            var K = [];
            var J = [];
            I.panes.each(function (P, Q) {
                var O = j(Q);
                if (Q.getAttribute(v) === G) {
                    K.push(Q)
                } else {
                    if (O.hasClass(h)) {
                        J.push(Q)
                    }
                }
            });
            var E = j(K);
            var F = j(J);
            if (N.immediate || H.immediate) {
                E.addClass(h).each(i.intro);
                F.removeClass(h);
                if (!p) {
                    a.redraw.up()
                }
                return
            }
            if (F.length && H.outro) {
                F.each(i.outro);
                f(F).add("opacity " + H.outro + "ms " + L, {
                    fallback: m
                }).start({
                    opacity: 0
                }).then(M)
            } else {
                M()
            }

            function M() {
                F.removeClass(h).removeAttr("style");
                E.addClass(h).each(i.intro);
                a.redraw.up();
                if (!H.intro) {
                    return f(E).set({
                        opacity: 1
                    })
                }
                f(E).set({
                    opacity: 0
                }).redraw().add("opacity " + H.intro + "ms " + L, {
                    fallback: m
                }).start({
                    opacity: 1
                })
            }
        }
        return q
    })
}, function (c, b, d) {
    var a = d(1);
    a.define("touch", c.exports = function (i, f) {
        var h = {};
        var k = !document.addEventListener;
        var e = window.getSelection;
        if (k) {
            i.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }
        }
        h.init = function (l) {
            if (k) {
                return null
            }
            l = typeof l === "string" ? i(l).get(0) : l;
            return l ? new g(l) : null
        };

        function g(p) {
            var r = false;
            var l = false;
            var u = false;
            var m = Math.min(Math.round(window.innerWidth * 0.04), 40);
            var v, t, o;
            p.addEventListener("touchstart", n, false);
            p.addEventListener("touchmove", q, false);
            p.addEventListener("touchend", s, false);
            p.addEventListener("touchcancel", x, false);
            p.addEventListener("mousedown", n, false);
            p.addEventListener("mousemove", q, false);
            p.addEventListener("mouseup", s, false);
            p.addEventListener("mouseout", x, false);

            function n(y) {
                var z = y.touches;
                if (z && z.length > 1) {
                    return
                }
                r = true;
                l = false;
                if (z) {
                    u = true;
                    v = z[0].clientX;
                    t = z[0].clientY
                } else {
                    v = y.clientX;
                    t = y.clientY
                }
                o = v
            }

            function q(B) {
                if (!r) {
                    return
                }
                if (u && B.type === "mousemove") {
                    B.preventDefault();
                    B.stopPropagation();
                    return
                }
                var C = B.touches;
                var z = C ? C[0].clientX : B.clientX;
                var D = C ? C[0].clientY : B.clientY;
                var A = z - o;
                o = z;
                if (Math.abs(A) > m && e && e() + "" === "") {
                    j("swipe", B, {
                        direction: A > 0 ? "right" : "left"
                    });
                    x()
                }
                if (Math.abs(z - v) > 10 || Math.abs(D - t) > 10) {
                    l = true
                }
            }

            function s(y) {
                if (!r) {
                    return
                }
                r = false;
                if (u && y.type === "mouseup") {
                    y.preventDefault();
                    y.stopPropagation();
                    u = false;
                    return
                }
                if (!l) {
                    j("tap", y)
                }
            }

            function x(y) {
                r = false
            }

            function w() {
                p.removeEventListener("touchstart", n, false);
                p.removeEventListener("touchmove", q, false);
                p.removeEventListener("touchend", s, false);
                p.removeEventListener("touchcancel", x, false);
                p.removeEventListener("mousedown", n, false);
                p.removeEventListener("mousemove", q, false);
                p.removeEventListener("mouseup", s, false);
                p.removeEventListener("mouseout", x, false);
                p = null
            }
            this.destroy = w
        }

        function j(m, l, o) {
            var n = i.Event(m, {
                originalEvent: l
            });
            i(l.target).trigger(n, o)
        }
        h.instance = h.init(document);
        return h
    })
}, function (b, a, e) {
    var d = window.$;
    var c = e(3) && d.tram;;
    b.exports = (function () {
        var E = {};
        E.VERSION = "1.6.0-Framework";
        var i = {};
        var q = Array.prototype,
            D = Object.prototype,
            F = Function.prototype;
        var p = q.push,
            x = q.slice,
            n = q.concat,
            z = D.toString,
            u = D.hasOwnProperty;
        var t = q.forEach,
            o = q.map,
            B = q.reduce,
            l = q.reduceRight,
            s = q.filter,
            g = q.every,
            A = q.some,
            y = q.indexOf,
            m = q.lastIndexOf,
            j = Array.isArray,
            C = Object.keys,
            r = F.bind;
        var k = E.each = E.forEach = function (M, J, I) {
            if (M == null) {
                return M
            }
            if (t && M.forEach === t) {
                M.forEach(J, I)
            } else {
                if (M.length === +M.length) {
                    for (var H = 0, L = M.length; H < L; H++) {
                        if (J.call(I, M[H], H, M) === i) {
                            return
                        }
                    }
                } else {
                    var K = E.keys(M);
                    for (var H = 0, L = K.length; H < L; H++) {
                        if (J.call(I, M[K[H]], K[H], M) === i) {
                            return
                        }
                    }
                }
            }
            return M
        };
        E.map = E.collect = function (K, J, I) {
            var H = [];
            if (K == null) {
                return H
            }
            if (o && K.map === o) {
                return K.map(J, I)
            }
            k(K, function (N, L, M) {
                H.push(J.call(I, N, L, M))
            });
            return H
        };
        E.find = E.detect = function (K, I, J) {
            var H;
            v(K, function (N, L, M) {
                if (I.call(J, N, L, M)) {
                    H = N;
                    return true
                }
            });
            return H
        };
        E.filter = E.select = function (K, H, J) {
            var I = [];
            if (K == null) {
                return I
            }
            if (s && K.filter === s) {
                return K.filter(H, J)
            }
            k(K, function (N, L, M) {
                if (H.call(J, N, L, M)) {
                    I.push(N)
                }
            });
            return I
        };
        var v = E.some = E.any = function (K, I, J) {
            I || (I = E.identity);
            var H = false;
            if (K == null) {
                return H
            }
            if (A && K.some === A) {
                return K.some(I, J)
            }
            k(K, function (N, L, M) {
                if (H || (H = I.call(J, N, L, M))) {
                    return i
                }
            });
            return !!H
        };
        E.contains = E.include = function (I, H) {
            if (I == null) {
                return false
            }
            if (y && I.indexOf === y) {
                return I.indexOf(H) != -1
            }
            return v(I, function (J) {
                return J === H
            })
        };
        E.delay = function (I, J) {
            var H = x.call(arguments, 2);
            return setTimeout(function () {
                return I.apply(null, H)
            }, J)
        };
        E.defer = function (H) {
            return E.delay.apply(E, [H, 1].concat(x.call(arguments, 1)))
        };
        E.throttle = function (J) {
            var K, H, I;
            return function () {
                if (K) {
                    return
                }
                K = true;
                H = arguments;
                I = this;
                c.frame(function () {
                    K = false;
                    J.apply(I, H)
                })
            }
        };
        E.debounce = function (J, L, I) {
            var O, N, H, M, P;
            var K = function () {
                var Q = E.now() - M;
                if (Q < L) {
                    O = setTimeout(K, L - Q)
                } else {
                    O = null;
                    if (!I) {
                        P = J.apply(H, N);
                        H = N = null
                    }
                }
            };
            return function () {
                H = this;
                N = arguments;
                M = E.now();
                var Q = I && !O;
                if (!O) {
                    O = setTimeout(K, L)
                }
                if (Q) {
                    P = J.apply(H, N);
                    H = N = null
                }
                return P
            }
        };
        E.defaults = function (K) {
            if (!E.isObject(K)) {
                return K
            }
            for (var H = 1, I = arguments.length; H < I; H++) {
                var J = arguments[H];
                for (var L in J) {
                    if (K[L] === void 0) {
                        K[L] = J[L]
                    }
                }
            }
            return K
        };
        E.keys = function (J) {
            if (!E.isObject(J)) {
                return []
            }
            if (C) {
                return C(J)
            }
            var I = [];
            for (var H in J) {
                if (E.has(J, H)) {
                    I.push(H)
                }
            }
            return I
        };
        E.has = function (I, H) {
            return u.call(I, H)
        };
        E.isObject = function (H) {
            return H === Object(H)
        };
        E.now = Date.now || function () {
            return new Date().getTime()
        };
        E.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var w = /(.)^/;
        var f = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        };
        var h = /\\|'|\r|\n|\u2028|\u2029/g;
        var G = function (H) {
            return "\\" + f[H]
        };
        E.template = function (Q, K, N) {
            if (!K && N) {
                K = N
            }
            K = E.defaults({}, K, E.templateSettings);
            var L = RegExp([(K.escape || w).source, (K.interpolate || w).source, (K.evaluate || w).source].join("|") + "|$", "g");
            var M = 0;
            var H = "__p+='";
            Q.replace(L, function (S, T, R, V, U) {
                H += Q.slice(M, U).replace(h, G);
                M = U + S.length;
                if (T) {
                    H += "'+\n((__t=(" + T + "))==null?'':_.escape(__t))+\n'"
                } else {
                    if (R) {
                        H += "'+\n((__t=(" + R + "))==null?'':__t)+\n'"
                    } else {
                        if (V) {
                            H += "';\n" + V + "\n__p+='"
                        }
                    }
                }
                return S
            });
            H += "';\n";
            if (!K.variable) {
                H = "with(obj||{}){\n" + H + "}\n"
            }
            H = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + H + "return __p;\n";
            try {
                var J = new Function(K.variable || "obj", "_", H)
            } catch (O) {
                O.source = H;
                throw O
            }
            var P = function (R) {
                return J.call(this, R, E)
            };
            var I = K.variable || "obj";
            P.source = "function(" + I + "){\n" + H + "}";
            return P
        };
        return E
    }())
}, function (b, a) {;
    b.exports = function (d) {
        if (d.support.cors || !d.ajaxTransport || !window.XDomainRequest) {
            return
        }
        var e = /^https?:\/\//i;
        var f = /^get|post$/i;
        var c = new RegExp("^" + location.protocol, "i");
        d.ajaxTransport("* text html xml json", function (h, j, i) {
            if (!h.crossDomain || !h.async || !f.test(h.type) || !e.test(h.url) || !c.test(h.url)) {
                return
            }
            var g = null;
            return {
                send: function (n, l) {
                    var k = "";
                    var m = (j.dataType || "").toLowerCase();
                    g = new XDomainRequest;
                    if (/^\d+$/.test(j.timeout)) {
                        g.timeout = j.timeout
                    }
                    g.ontimeout = function () {
                        l(500, "timeout")
                    };
                    g.onload = function () {
                        var t = "Content-Length: " + g.responseText.length + "\r\nContent-Type: " + g.contentType;
                        var o = {
                            code: 200,
                            message: "success"
                        };
                        var q = {
                            text: g.responseText
                        };
                        try {
                            if (m === "html" || /text\/html/i.test(g.contentType)) {
                                q.html = g.responseText
                            } else {
                                if (m === "json" || m !== "text" && /\/json/i.test(g.contentType)) {
                                    try {
                                        q.json = d.parseJSON(g.responseText)
                                    } catch (s) {
                                        o.code = 500;
                                        o.message = "parseerror"
                                    }
                                } else {
                                    if (m === "xml" || m !== "text" && /\/xml/i.test(g.contentType)) {
                                        var r = new ActiveXObject("Microsoft.XMLDOM");
                                        r.async = false;
                                        try {
                                            r.loadXML(g.responseText)
                                        } catch (s) {
                                            r = undefined
                                        }
                                        if (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) {
                                            o.code = 500;
                                            o.message = "parseerror";
                                            throw "Invalid XML: " + g.responseText
                                        }
                                        q.xml = r
                                    }
                                }
                            }
                        } catch (p) {
                            throw p
                        } finally {
                            l(o.code, o.message, q, t)
                        }
                    };
                    g.onprogress = function () { };
                    g.onerror = function () {
                        l(500, "error", {
                            text: g.responseText
                        })
                    };
                    if (j.data) {
                        k = d.type(j.data) === "string" ? j.data : d.param(j.data)
                    }
                    g.open(h.type, h.url);
                    g.send(k)
                },
                abort: function () {
                    if (g) {
                        g.abort()
                    }
                }
            }
        })
    }(window.jQuery)
}]);
Framework.require("ix").init([{
    slug: "menu-mask",
    name: "Menu Mask",
    value: {
        style: {
            opacity: 0
        },
        triggers: [{
            type: "navbar",
            stepsA: [{
                display: "block"
            }, {
                opacity: 0.7000000000000001,
                transition: "opacity 500ms ease 0ms"
            }],
            stepsB: [{
                opacity: 0,
                transition: "opacity 500ms ease 0ms"
            }, {
                display: "none"
            }]
        }]
    }
}, {
    slug: "list-item",
    name: "List Item",
    value: {
        style: {
            opacity: 0,
            x: "-26px",
            y: "0px"
        },
        triggers: [{
            type: "scroll",
            stepsA: [{
                opacity: 1,
                transition: "transform 500ms ease-out-quint 0ms, opacity 500ms ease-out-quint 0ms",
                x: "0px",
                y: "0px"
            }],
            stepsB: []
        }]
    }
}, {
    slug: "search-box",
    name: "Search Box",
    value: {
        style: {},
        triggers: [{
            type: "click",
            selector: ".body",
            stepsA: [{
                transition: "transform 500ms ease-out-quint 0ms",
                x: "0px",
                y: "0px"
            }],
            stepsB: [{
                transition: "transform 500ms ease-out-quint 0ms",
                x: "0px",
                y: "-69px"
            }]
        }, {
            type: "click",
            selector: ".news-mask",
            stepsA: [{
                display: "block"
            }, {
                opacity: 1,
                transition: "opacity 500ms ease-out-quint 0ms"
            }],
            stepsB: [{
                opacity: 0,
                transition: "opacity 500ms ease-out-quint 0ms"
            }, {
                display: "none"
            }]
        }]
    }
}, {
    slug: "hide-navbar-icons",
    name: "Hide Navbar Icons",
    value: {
        style: {},
        triggers: [{
            type: "navbar",
            selector: ".navbar-button",
            stepsA: [{
                opacity: 0,
                transition: "opacity 200ms ease 0ms"
            }],
            stepsB: [{
                wait: 200
            }, {
                opacity: 1,
                transition: "opacity 500ms ease 0ms"
            }]
        }]
    }
}]);