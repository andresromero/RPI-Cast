// Copyright 2013-2014 mb@w69b.com
(function() {
    var k = void 0,
        l = !0,
        m = null,
        q = !1,
        r, s = this;

    function aa() {}

    function t(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function u(a) {
        return "array" == t(a)
    }

    function ba(a) {
        var b = t(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function w(a) {
        return "string" == typeof a
    }

    function x(a) {
        var b = typeof a;
        return "object" == b && a != m || "function" == b
    }

    function y(a) {
        return a[ca] || (a[ca] = ++da)
    }
    var ca = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        da = 0;

    function ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function fa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ga(a, b, c) {
        ga = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
        return ga.apply(m, arguments)
    }

    function ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    }
    var ia = Date.now || function() {
        return +new Date
    };

    function z(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.da = b.prototype;
        a.prototype = new c
    };

    function A() {
        0 != ja && (this.ia = Error().stack, y(this))
    }
    var ja = 0;

    function B(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, B) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    }
    z(B, Error);
    B.prototype.name = "CustomError";

    function ka(a, b) {
        var c = String(a).toLowerCase(),
            d = String(b).toLowerCase();
        return c < d ? -1 : c == d ? 0 : 1
    }

    function la(a) {
        if (!ma.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(na, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(oa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(pa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(qa, "&quot;"));
        return a
    }
    var na = /&/g,
        oa = /</g,
        pa = />/g,
        qa = /\"/g,
        ma = /[&<>\"]/;

    function ra(a) {
        if (-1 != a.indexOf("&"))
            if ("document" in s) var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                c = document.createElement("div"),
                a = a.replace(sa, function(a, g) {
                    var e = b[a];
                    if (e) return e;
                    if ("#" == g.charAt(0)) {
                        var f = Number("0" + g.substr(1));
                        isNaN(f) || (e = String.fromCharCode(f))
                    }
                    e || (c.innerHTML = a + " ", e = c.firstChild.nodeValue.slice(0, -1));
                    return b[a] = e
                });
            else a = a.replace(/&([^;]+);/g, function(a, b) {
                switch (b) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        if ("#" ==
                            b.charAt(0)) {
                            var c = Number("0" + b.substr(1));
                            if (!isNaN(c)) return String.fromCharCode(c)
                        }
                        return a
                }
            });
        return a
    }
    var sa = /&([^;\s<&]+);?/g;
    var C = Array.prototype,
        ta = C.indexOf ? function(a, b, c) {
            return C.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (w(a)) return !w(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ua = C.forEach ? function(a, b, c) {
            C.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, g = w(a) ? a.split("") : a, e = 0; e < d; e++) e in g && b.call(c, g[e], e, a)
        },
        va = C.filter ? function(a, b, c) {
            return C.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, g = [], e = 0, f = w(a) ?
                a.split("") : a, h = 0; h < d; h++)
                if (h in f) {
                    var j = f[h];
                    b.call(c, j, h, a) && (g[e++] = j)
                }
            return g
        },
        wa = C.map ? function(a, b, c) {
            return C.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, g = Array(d), e = w(a) ? a.split("") : a, f = 0; f < d; f++) f in e && (g[f] = b.call(c, e[f], f, a));
            return g
        },
        xa = C.every ? function(a, b, c) {
            return C.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, g = w(a) ? a.split("") : a, e = 0; e < d; e++)
                if (e in g && !b.call(c, g[e], e, a)) return q;
            return l
        };

    function ya(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function za(a, b, c) {
        return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
    }

    function Aa(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            u(d) ? b.push.apply(b, Aa.apply(m, d)) : b.push(d)
        }
        return b
    };
    var D, Ba, Ca, Da;

    function Ea() {
        return s.navigator ? s.navigator.userAgent : m
    }
    Da = Ca = Ba = D = q;
    var Fa;
    if (Fa = Ea()) {
        var Ga = s.navigator;
        D = 0 == Fa.indexOf("Opera");
        Ba = !D && -1 != Fa.indexOf("MSIE");
        Ca = !D && -1 != Fa.indexOf("WebKit");
        Da = !D && !Ca && "Gecko" == Ga.product
    }
    var Ha = D,
        F = Ba,
        G = Da,
        H = Ca,
        Ia = s.navigator,
        Ja = -1 != (Ia && Ia.platform || "").indexOf("Mac");

    function Ka() {
        var a = s.document;
        return a ? a.documentMode : k
    }
    var La;
    a: {
        var Ma = "",
            I;
        if (Ha && s.opera) var Na = s.opera.version,
            Ma = "function" == typeof Na ? Na() : Na;
        else if (G ? I = /rv\:([^\);]+)(\)|;)/ : F ? I = /MSIE\s+([^\);]+)(\)|;)/ : H && (I = /WebKit\/(\S+)/), I) var Oa = I.exec(Ea()),
            Ma = Oa ? Oa[1] : "";
        if (F) {
            var Pa = Ka();
            if (Pa > parseFloat(Ma)) {
                La = String(Pa);
                break a
            }
        }
        La = Ma
    }
    var Qa = {};

    function J(a) {
        var b;
        if (!(b = Qa[a])) {
            b = 0;
            for (var c = String(La).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(c.length, d.length), e = 0; 0 == b && e < g; e++) {
                var f = c[e] || "",
                    h = d[e] || "",
                    j = RegExp("(\\d*)(\\D*)", "g"),
                    n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var i = j.exec(f) || ["", "", ""],
                        p = n.exec(h) || ["", "", ""];
                    if (0 == i[0].length && 0 == p[0].length) break;
                    b = ((0 == i[1].length ? 0 : parseInt(i[1], 10)) < (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? -1 : (0 == i[1].length ? 0 : parseInt(i[1],
                        10)) > (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? 1 : 0) || ((0 == i[2].length) < (0 == p[2].length) ? -1 : (0 == i[2].length) > (0 == p[2].length) ? 1 : 0) || (i[2] < p[2] ? -1 : i[2] > p[2] ? 1 : 0)
                } while (0 == b)
            }
            b = Qa[a] = 0 <= b
        }
        return b
    }
    var Sa = s.document,
        Ta = !Sa || !F ? k : Ka() || ("CSS1Compat" == Sa.compatMode ? parseInt(La, 10) : 5);
    var Ua = !F || F && 9 <= Ta,
        Va = F && !J("9");
    !H || J("528");
    G && J("1.9b") || F && J("8") || Ha && J("9.5") || H && J("528");
    G && !J("8") || F && J("9");

    function K(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    K.prototype.i = q;
    K.prototype.defaultPrevented = q;
    K.prototype.s = l;
    K.prototype.preventDefault = function() {
        this.defaultPrevented = l;
        this.s = q
    };

    function Wa(a) {
        Wa[" "](a);
        return a
    }
    Wa[" "] = aa;

    function L(a, b) {
        a && this.p(a, b)
    }
    z(L, K);
    r = L.prototype;
    r.target = m;
    r.relatedTarget = m;
    r.offsetX = 0;
    r.offsetY = 0;
    r.clientX = 0;
    r.clientY = 0;
    r.screenX = 0;
    r.screenY = 0;
    r.button = 0;
    r.keyCode = 0;
    r.charCode = 0;
    r.ctrlKey = q;
    r.altKey = q;
    r.shiftKey = q;
    r.metaKey = q;
    r.Z = q;
    r.L = m;
    r.p = function(a, b) {
        var c = this.type = a.type;
        K.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (G) {
                var g;
                a: {
                    try {
                        Wa(d.nodeName);
                        g = l;
                        break a
                    } catch (e) {}
                    g = q
                }
                g || (d = m)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = H || a.offsetX !== k ? a.offsetX : a.layerX;
        this.offsetY = H || a.offsetY !== k ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== k ? a.clientX : a.pageX;
        this.clientY = a.clientY !== k ? a.clientY : a.pageY;
        this.screenX = a.screenX ||
            0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Z = Ja ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.L = a;
        a.defaultPrevented && this.preventDefault();
        delete this.i
    };
    r.preventDefault = function() {
        L.da.preventDefault.call(this);
        var a = this.L;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = q, Va) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };

    function Xa() {}
    var Ya = 0;
    r = Xa.prototype;
    r.key = 0;
    r.j = q;
    r.H = q;
    r.p = function(a, b, c, d, g, e) {
        if ("function" == t(a)) this.N = l;
        else if (a && a.handleEvent && "function" == t(a.handleEvent)) this.N = q;
        else throw Error("Invalid listener argument");
        this.n = a;
        this.R = b;
        this.src = c;
        this.type = d;
        this.capture = !!g;
        this.B = e;
        this.H = q;
        this.key = ++Ya;
        this.j = q
    };
    r.handleEvent = function(a) {
        return this.N ? this.n.call(this.B || this.src, a) : this.n.handleEvent.call(this.n, a)
    };

    function Za(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function $a(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    }

    function ab(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function M(a, b) {
        for (var c, d, g = 1; g < arguments.length; g++) {
            d = arguments[g];
            for (c in d) a[c] = d[c];
            for (var e = 0; e < bb.length; e++) c = bb[e], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var N = {},
        O = {},
        P = {},
        Q = {};

    function cb(a, b, c, d, g) {
        if (b) {
            if (u(b)) {
                for (var e = 0; e < b.length; e++) cb(a, b[e], c, d, g);
                return m
            }
            var d = !!d,
                f = O;
            b in f || (f[b] = {
                b: 0,
                c: 0
            });
            f = f[b];
            d in f || (f[d] = {
                b: 0,
                c: 0
            }, f.b++);
            var f = f[d],
                h = y(a),
                j;
            f.c++;
            if (f[h]) {
                j = f[h];
                for (e = 0; e < j.length; e++)
                    if (f = j[e], f.n == c && f.B == g) {
                        if (f.j) break;
                        return j[e].key
                    }
            } else j = f[h] = [], f.b++;
            var n = db,
                i = Ua ? function(a) {
                    return n.call(i.src, i.key, a)
                } : function(a) {
                    a = n.call(i.src, i.key, a);
                    if (!a) return a
                },
                e = i;
            e.src = a;
            f = new Xa;
            f.p(c, e, a, b, d, g);
            c = f.key;
            e.key = c;
            j.push(f);
            N[c] = f;
            P[h] || (P[h] = []);
            P[h].push(f);
            a.addEventListener ? (a == s || !a.J) && a.addEventListener(b, e, d) : a.attachEvent(b in Q ? Q[b] : Q[b] = "on" + b, e);
            return c
        }
        throw Error("Invalid event type");
    }

    function eb(a, b, c, d, g) {
        if (u(b))
            for (var e = 0; e < b.length; e++) eb(a, b[e], c, d, g);
        else {
            d = !!d;
            a: {
                e = O;
                if (b in e && (e = e[b], d in e && (e = e[d], a = y(a), e[a]))) {
                    a = e[a];
                    break a
                }
                a = m
            }
            if (a)
                for (e = 0; e < a.length; e++)
                    if (a[e].n == c && a[e].capture == d && a[e].B == g) {
                        fb(a[e].key);
                        break
                    }
        }
    }

    function fb(a) {
        if (N[a]) {
            var b = N[a];
            if (!b.j) {
                var c = b.src,
                    d = b.type,
                    g = b.R,
                    e = b.capture;
                c.removeEventListener ? (c == s || !c.J) && c.removeEventListener(d, g, e) : c.detachEvent && c.detachEvent(d in Q ? Q[d] : Q[d] = "on" + d, g);
                c = y(c);
                if (P[c]) {
                    var g = P[c],
                        f = ta(g, b);
                    0 <= f && C.splice.call(g, f, 1);
                    0 == g.length && delete P[c]
                }
                b.j = l;
                if (b = O[d][e][c]) b.O = l, gb(d, e, c, b);
                delete N[a]
            }
        }
    }

    function gb(a, b, c, d) {
        if (!d.r && d.O) {
            for (var g = 0, e = 0; g < d.length; g++) d[g].j ? d[g].R.src = m : (g != e && (d[e] = d[g]), e++);
            d.length = e;
            d.O = q;
            0 == e && (delete O[a][b][c], O[a][b].b--, 0 == O[a][b].b && (delete O[a][b], O[a].b--), 0 == O[a].b && delete O[a])
        }
    }

    function R(a, b, c, d, g) {
        var e = 1,
            b = y(b);
        if (a[b]) {
            a.c--;
            a = a[b];
            a.r ? a.r++ : a.r = 1;
            try {
                for (var f = a.length, h = 0; h < f; h++) {
                    var j = a[h];
                    j && !j.j && (e &= hb(j, g) !== q)
                }
            } finally {
                a.r--, gb(c, d, b, a)
            }
        }
        return Boolean(e)
    }

    function hb(a, b) {
        a.H && fb(a.key);
        return a.handleEvent(b)
    }

    function db(a, b) {
        if (!N[a]) return l;
        var c = N[a],
            d = c.type,
            g = O;
        if (!(d in g)) return l;
        var g = g[d],
            e, f;
        if (!Ua) {
            var h;
            if (!(h = b)) a: {
                h = ["window", "event"];
                for (var j = s; e = h.shift();)
                    if (j[e] != m) j = j[e];
                    else {
                        h = m;
                        break a
                    }
                h = j
            }
            e = h;
            h = l in g;
            j = q in g;
            if (h) {
                if (0 > e.keyCode || e.returnValue != k) return l;
                a: {
                    var n = q;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (i) {
                        n = l
                    }
                    if (n || e.returnValue == k) e.returnValue = l
                }
            }
            n = new L;
            n.p(e, this);
            e = l;
            try {
                if (h) {
                    for (var p = [], E = n.currentTarget; E; E = E.parentNode) p.push(E);
                    f = g[l];
                    f.c = f.b;
                    for (var v = p.length -
                        1; !n.i && 0 <= v && f.c; v--) n.currentTarget = p[v], e &= R(f, p[v], d, l, n);
                    if (j) {
                        f = g[q];
                        f.c = f.b;
                        for (v = 0; !n.i && v < p.length && f.c; v++) n.currentTarget = p[v], e &= R(f, p[v], d, q, n)
                    }
                } else e = hb(c, n)
            } finally {
                p && (p.length = 0)
            }
            return e
        }
        d = new L(b, this);
        return e = hb(c, d)
    };

    function ib(a) {
        A.call(this);
        this.m = a;
        this.a = []
    }
    z(ib, A);
    var jb = [];

    function kb(a, b, c, d) {
        u(c) || (jb[0] = c, c = jb);
        for (var g = 0; g < c.length; g++) {
            var e = cb(b, c[g], d || a, q, a.m || a);
            a.a.push(e)
        }
    }
    ib.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function S() {
        this.e = "pending";
        this.f = []
    }

    function lb() {
        B.call(this, "Multiple attempts to set the state of this Result")
    }
    z(lb, B);
    S.prototype.getError = function() {
        return this.U
    };

    function T(a, b) {
        if ("pending" == a.e) {
            a.o = b;
            for (a.e = "success"; a.f.length;) a.f.shift()(a)
        } else throw new lb;
    }

    function U(a, b) {
        if ("pending" == a.e) {
            a.U = b;
            for (a.e = "error"; a.f.length;) a.f.shift()(a)
        } else throw new lb;
    };

    function mb(a, b, c) {
        b = c ? ga(b, c) : b;
        "pending" == a.e ? a.f.push(b) : b(a)
    }

    function nb(a, b, c) {
        mb(a, function(a) {
            "error" == a.e && b.call(this, a)
        }, c)
    }

    function ob(a, b) {
        var c = new S;
        mb(a, function(a) {
            "success" == a.e ? T(c, b(a.o)) : U(c, a.getError())
        });
        return c
    }

    function pb(a) {
        function b() {
            xa(d, c) && T(g, d)
        }

        function c(a) {
            return "pending" != a.e
        }
        var d = ya(arguments),
            g = new S;
        ua(d, function(a) {
            mb(a, b)
        });
        return g
    };

    function qb(a) {
        if ("function" == typeof a.l) return a.l();
        if (w(a)) return a.split("");
        if (ba(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return ab(a)
    };

    function rb(a, b) {
        this.g = {};
        this.a = [];
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.u(a)
    }
    r = rb.prototype;
    r.b = 0;
    r.ga = 0;
    r.l = function() {
        sb(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.g[this.a[b]]);
        return a
    };

    function sb(a) {
        if (a.b != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Object.prototype.hasOwnProperty.call(a.g, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.b != a.a.length) {
            for (var g = {}, c = b = 0; b < a.a.length;) d = a.a[b], Object.prototype.hasOwnProperty.call(g, d) || (a.a[c++] = d, g[d] = 1), b++;
            a.a.length = c
        }
    }
    r.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.g, a) || (this.b++, this.a.push(a), this.ga++);
        this.g[a] = b
    };
    r.u = function(a) {
        var b;
        if (a instanceof rb) sb(a), b = a.a.concat(), a = a.l();
        else {
            b = [];
            var c = 0,
                d;
            for (d in a) b[c++] = d;
            a = ab(a)
        }
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    };

    function tb(a) {
        this.g = new rb;
        a && this.u(a)
    }

    function ub(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + y(a) : b.substr(0, 1) + a
    }
    tb.prototype.add = function(a) {
        this.g.set(ub(a), a)
    };
    tb.prototype.u = function(a) {
        for (var a = qb(a), b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    tb.prototype.contains = function(a) {
        a = ub(a);
        return Object.prototype.hasOwnProperty.call(this.g.g, a)
    };
    tb.prototype.l = function() {
        return this.g.l()
    };

    function vb() {
        A.call(this)
    }
    z(vb, A);
    r = vb.prototype;
    r.J = l;
    r.Q = m;
    r.addEventListener = function(a, b, c, d) {
        cb(this, a, b, c, d)
    };
    r.removeEventListener = function(a, b, c, d) {
        eb(this, a, b, c, d)
    };
    r.dispatchEvent = function(a) {
        var b = a.type || a,
            c = O;
        if (b in c) {
            if (w(a)) a = new K(a, this);
            else if (a instanceof K) a.target = a.target || this;
            else {
                var d = a,
                    a = new K(b, this);
                M(a, d)
            }
            var d = 1,
                g, c = c[b],
                b = l in c,
                e;
            if (b) {
                g = [];
                for (e = this; e; e = e.Q) g.push(e);
                e = c[l];
                e.c = e.b;
                for (var f = g.length - 1; !a.i && 0 <= f && e.c; f--) a.currentTarget = g[f], d &= R(e, g[f], a.type, l, a) && a.s != q
            }
            if (q in c)
                if (e = c[q], e.c = e.b, b)
                    for (f = 0; !a.i && f < g.length && e.c; f++) a.currentTarget = g[f], d &= R(e, g[f], a.type, q, a) && a.s != q;
                else
                    for (g = this; !a.i && g && e.c; g = g.Q) a.currentTarget =
                        g, d &= R(e, g, a.type, q, a) && a.s != q;
            a = Boolean(d)
        } else a = l;
        return a
    };

    function V(a, b) {
        A.call(this);
        this.q = a || 1;
        this.t = b || wb;
        this.v = ga(this.ea, this);
        this.C = ia()
    }
    z(V, vb);
    V.prototype.enabled = q;
    var wb = s.window;
    V.prototype.d = m;
    V.prototype.ea = function() {
        if (this.enabled) {
            var a = ia() - this.C;
            0 < a && a < 0.8 * this.q ? this.d = this.t.setTimeout(this.v, this.q - a) : (this.dispatchEvent(xb), this.enabled && (this.d = this.t.setTimeout(this.v, this.q), this.C = ia()))
        }
    };
    V.prototype.start = function() {
        this.enabled = l;
        this.d || (this.d = this.t.setTimeout(this.v, this.q), this.C = ia())
    };
    V.prototype.stop = function() {
        this.enabled = q;
        this.d && (this.t.clearTimeout(this.d), this.d = m)
    };
    var xb = "tick";

    function yb(a, b) {
        this.k = [];
        this.D = [];
        this.G = q;
        this.d = new V(zb);
        this.m = new ib(this);
        kb(this.m, this.d, xb, this.Y);
        this.V = b ? a.bind(b) : a
    }
    var zb = 2E3;
    z(yb, A);
    yb.prototype.Y = function() {
        for (var a = [], b = 0; b < this.k.length; ++b) {
            var c = this.k[b];
            if (c.src || c.children.length != this.D[b]) a.push(b), window.console.log("monitor change"), this.V(c)
        }
        a.forEach(function(a) {
            C.splice.call(this.k, a, 1);
            C.splice.call(this.D, a, 1)
        }, this);
        0 == this.k.length && (this.d.stop(), this.G = q)
    };
    var Ab = !F || F && 9 <= Ta;
    !G && !F || F && F && 9 <= Ta || G && J("1.9.1");
    F && J("9");

    function Bb(a, b) {
        var c;
        c = a.className;
        c = w(c) && c.match(/\S+/g) || [];
        for (var d = za(arguments, 1), g = c.length + d.length, e = c, f = 0; f < d.length; f++) 0 <= ta(e, d[f]) || e.push(d[f]);
        a.className = c.join(" ");
        return c.length == g
    };

    function W(a, b) {
        this.width = a;
        this.height = b
    }
    W.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    W.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    W.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Cb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Db(a, b, c) {
        var d = arguments,
            g = document,
            e = d[0],
            f = d[1];
        if (!Ab && f && (f.name || f.type)) {
            e = ["<", e];
            f.name && e.push(' name="', la(f.name), '"');
            if (f.type) {
                e.push(' type="', la(f.type), '"');
                var h = {};
                M(h, f);
                delete h.type;
                f = h
            }
            e.push(">");
            e = e.join("")
        }
        e = g.createElement(e);
        if (f)
            if (w(f)) e.className = f;
            else if (u(f)) Bb.apply(m, [e].concat(f));
        else {
            var j = e;
            Za(f, function(a, b) {
                "style" == b ? j.style.cssText = a : "class" == b ? j.className = a : "for" == b ? j.htmlFor = a : b in Cb ? j.setAttribute(Cb[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 ==
                    b.lastIndexOf("data-", 0) ? j.setAttribute(b, a) : j[b] = a
            })
        } if (2 < d.length)
            for (var n = g, i = e, g = function(a) {
                a && i.appendChild(w(a) ? n.createTextNode(a) : a)
            }, f = 2; f < d.length; f++)
                if (h = d[f], ba(h) && !(x(h) && 0 < h.nodeType)) {
                    var p;
                    a: {
                        if (h && "number" == typeof h.length) {
                            if (x(h)) {
                                p = "function" == typeof h.item || "string" == typeof h.item;
                                break a
                            }
                            if ("function" == t(h)) {
                                p = "function" == typeof h.item;
                                break a
                            }
                        }
                        p = q
                    }
                    ua(p ? ya(h) : h, g)
                } else g(h);
        return e
    };

    function Eb(a, b) {
        var c;
        if (b instanceof W) c = b.height, b = b.width;
        else throw Error("missing height argument");
        a.style.width = Fb(b);
        a.style.height = Fb(c)
    }

    function Fb(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }

    function Gb(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = H && !b && !c;
        return (b === k || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), F && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new W(b.right - b.left, b.bottom - b.top)) : new W(b, c)
    };
    var Hb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function Ib(a, b, c) {
        if (u(b))
            for (var d = 0; d < b.length; d++) Ib(a, String(b[d]), c);
        else b != m && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }

    function Jb(a, b, c) {
        for (c = c || 0; c < b.length; c += 2) Ib(b[c], b[c + 1], a);
        return a
    }

    function Kb(a, b) {
        var c = 2 == arguments.length ? Jb([a], arguments[1], 0) : Jb([a], arguments, 1);
        if (c[1]) {
            var d = c[0],
                g = d.indexOf("#");
            0 <= g && (c.push(d.substr(g)), c[0] = d = d.substr(0, g));
            g = d.indexOf("?");
            0 > g ? c[1] = "?" : g == d.length - 1 && (c[1] = k)
        }
        return c.join("")
    };

    function Lb(a) {
        var b = Mb(a),
            c;
        try {
            c = JSON.parse(a)
        } catch (d) {
            c = m
        }
        return (b ? $a(b) : 0) > (c ? $a(c) : 0) ? b : c
    }

    function Nb(a, b) {
        var c = [];
        Ob(c, b, a);
        c = Aa(c);
        return c = c.filter(function(a) {
            return w(a) || "number" == typeof a
        })
    }

    function Pb(a) {
        if (!w(a)) return [];
        a = a.match(/(https?:\/\/[^\s"<>\]\[]+)/g);
        return u(a) && (a = a.filter(Qb), a.length) ? a : []
    }

    function Ob(a, b, c) {
        u(c) ? c.forEach(ha(Ob, a, b)) : x(c) && Za(c, function(c, g) {
            g.toLowerCase() == b.toLowerCase() ? a.push(c) : Ob(a, b, c)
        })
    }

    function Mb(a) {
        var b = {};
        a.split("&").forEach(function(a) {
            var d = a.indexOf("=");
            if (0 < d) {
                var g = a.slice(0, d),
                    a = a.slice(d + 1);
                try {
                    g = decodeURIComponent(g.replace(/\+/g, " "))
                } catch (e) {}
                try {
                    a = decodeURIComponent(a.replace(/\+/g, " "))
                } catch (f) {}
                if (0 == a.lastIndexOf("[[JSON]]", 0)) {
                    var d = RegExp,
                        h;
                    h = "[[JSON]]".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
                    d = d(h, "");
                    a = a.replace(d, "")
                }
                X(a) || (d = Lb(a)) && (a = d);
                b[g] = a
            }
        });
        return 0 < $a(b) ? b : m
    }

    function Qb(a) {
        if (!X(a)) return q;
        var b, c = a.toLowerCase().match(Hb)[5] || m;
        b = c && decodeURIComponent(c);
        return !b ? q : ".avi .divx .flv .mp4 .mpeg .mpg".split(" ").some(function(a) {
            return -1 != b.indexOf(a)
        }) && Rb(a)
    }

    function Rb(a) {
        if (!X(a)) return q;
        var b;
        b = (a = a.toLowerCase().match(Hb)[5] || m) && decodeURIComponent(a);
        return !b ? q : !".swf .html .jpg .jpeg .png .gif".split(" ").some(function(a) {
            return -1 != b.indexOf(a)
        })
    }

    function X(a) {
        return w(a) && (0 == ka("http://", a.substr(0, 7)) || 0 == ka("https://", a.substr(0, 8)))
    };

    function Sb() {};
    var Tb;

    function Ub() {}
    z(Ub, Sb);
    Tb = new Ub;

    function Vb(a) {
        var b = new S;
        nb(b, function() {});
        a: {
            var c = {},
                d = function(a) {
                    T(b, a)
                } || aa,
                g = function(a) {
                    U(b, a)
                } || aa,
                e, f, h;
            b: {
                if (!Tb.M && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                    for (var j = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < j.length; n++) {
                        var i = j[n];
                        try {
                            new ActiveXObject(i);
                            h = Tb.M = i;
                            break b
                        } catch (p) {}
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
                }
                h = Tb.M
            }
            f = h ? new ActiveXObject(h) : new XMLHttpRequest;
            try {
                f.open("GET", a, l)
            } catch (E) {
                g(new Y("Error opening XHR: " + E.message, a, f));
                break a
            }
            f.onreadystatechange = function() {
                if (4 == f.readyState) {
                    window.clearTimeout(e);
                    var b;
                    a: switch (f.status) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            b = l;
                            break a;
                        default:
                            b = q
                    }
                    if (!b && (b = 0 === f.status)) b = a.match(Hb)[1] || m, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = b ? b.toLowerCase() : "", b = !("http" == b || "https" == b || "" == b);
                    b ? d(f) : g(new Wb(f.status, a, f))
                }
            };
            if (c.headers)
                for (var v in c.headers) f.setRequestHeader(v,
                    c.headers[v]);
            c.withCredentials && (f.withCredentials = c.withCredentials);
            c.W && f.overrideMimeType(c.W);
            0 < c.fa && (e = window.setTimeout(function() {
                f.onreadystatechange = aa;
                f.abort();
                g(new Xb(a, f))
            }, c.fa));
            try {
                f.send(m)
            } catch (Ra) {
                g(new Y("Error sending XHR: " + Ra.message, a, f))
            }
        }
        return ob(b, Yb)
    }

    function Yb(a) {
        return a.responseText
    }

    function Y(a, b, c) {
        B.call(this, a + ", url=" + b);
        this.url = b;
        this.ja = c
    }
    z(Y, B);
    Y.prototype.name = "XhrError";

    function Wb(a, b, c) {
        Y.call(this, "Request Failed, status=" + a, b, c);
        this.status = a
    }
    z(Wb, Y);
    Wb.prototype.name = "XhrHttpError";

    function Xb(a, b) {
        Y.call(this, "Request timed out", a, b)
    }
    z(Xb, Y);
    Xb.prototype.name = "XhrTimeoutError";
    window.console.log.bind(window.console);

    function Zb(a) {
        this.h = a;
        this.f = [this.$, this.aa, this.ba]
    }
    r = Zb.prototype;
    r.F = function() {
        var a = [];
        this.f.forEach(function(b) {
            (b = b.call(this)) && a.push(b)
        }, this);
        return $b(a)
    };

    function $b(a) {
        var b = new S;
        0 < a.length ? (a = pb.apply(pb, a), mb(a, function(a) {
            var d = [];
            a.o.forEach(function(a) {
                "success" == a.e && a.o && d.push.apply(d, a.o)
            });
            0 < d.length ? T(b, d) : U(b, m)
        })) : U(b, m);
        return b
    }
    r.$ = function() {
        var a;
        ["domain", "file", "filekey"].every(function(a) {
            return w(this.h[a])
        }, this) ? (a = this.h, a = Kb(a.domain + "/api/player.api.php", "file", a.file, "key", a.filekey), a = ac(a)) : a = m;
        return a
    };
    r.ba = function() {
        var a, b = this.h,
            c = [];
        ["playlist", "feedurl", "xmlurl", "configuration", "config"].forEach(function(a) {
            c = c.concat(Nb(b, a))
        });
        a = c;
        var d = a.filter(Qb),
            g = new S;
        if (0 < d.length) return T(g, d), g;
        a = a.filter(function(a) {
            return X(a) || w(a) && 0 == a.lastIndexOf("/", 0)
        });
        return 0 < a.length ? $b(a.map(this.ca, this)) : m
    };
    r.ca = function(a) {
        a = Vb(a);
        a = ob(a, Pb);
        return ob(a, function(a) {
            return a.map(ra)
        })
    };
    r.aa = function() {
        var a = this.h["premium.token"];
        if (!w(a)) return m;
        a = Kb("/player_api/info", "token", a);
        return ac(a)
    };

    function ac(a) {
        a = Vb(a);
        a = ob(a, Mb);
        return ob(a, function(a) {
            return a && X(a.url) ? [a.url] : m
        })
    };

    function bc(a) {
        function b(a) {
            for (var f = 0, g = 0, j = a; j < c.length; ++j)
                if (a = c[j], 0 == f)
                    if ('"' == a[0]) d.push(a), f++;
                    else {
                        if ("}" == a) {
                            for (;
                                "," == d.slice(-1);) d.pop();
                            d.push(a);
                            return j
                        }
                    } else if (1 == f) ":" == a && (d.push(a), f++);
            else if (2 == f)
                if ("{" == a) d.push(a), j = b(j + 1), f++;
                else if ("[" == a) {
                d.push(a);
                a: {
                    a = 0;
                    for (j += 1; j < c.length; ++j) {
                        var n = c[j];
                        if (0 == a)
                            if ('"' == n[0]) d.push(n), a++;
                            else {
                                if ("]" == n) {
                                    d.push(n);
                                    break a
                                }
                                "{" == n && (d.push(n), j = b(j + 1), a++)
                            } else if (1 == a)
                            if ("," == n) d.push(n), a = 0;
                            else if ("]" == n) {
                            d.push(n);
                            break a
                        }
                    }
                    j =
                        c.length - 1
                }
                f++
            } else '"' == a[0] && (d.push(a), f++);
            else if (3 == f)
                if ("," == a) d.push(a), f = 0;
                else if ("}" == a)
                if (0 < g) g--;
                else return d.push(a), j;
            else "{" == a && g++;
            return c.length - 1
        }
        if ("{" != a[0]) return m;
        var c = [];
        a.forEach(function(a) {
            '"' == a[0] || "'" == a[0] ? c.push('"' + a.substr(1, a.length - 2) + '"') : 0 <= ":{}[],".split("").indexOf(a) ? c.push(a) : /\s+/.test(a) || c.push('"' + a + '"')
        });
        var d = [];
        d.push(c[0]);
        b(1);
        a = d.join(" ");
        try {
            return JSON.parse(a)
        } catch (g) {
            return m
        }
    };
    var Z = {
            string1: /"(?:(?:\\\n|\\"|[^"\n]))*?"/,
            string2: /'(?:(?:\\\n|\\'|[^'\n]))*?'/,
            comment1: /\/\*[\s\S]*?\*\//,
            comment2: /\/\/.*?\n/,
            whitespace: /\s+/,
            keyword: RegExp("/\\b(?:var|let|for|if|else|in|class|function|return|with|case|break|switch|export|new|while|do|throw|catch)\\b"),
            regexp: /\/(?:(?:\\\/|[^\/]))*?\//,
            name: /[a-zA-Z_\$][a-zA-Z_\$0-9]*/,
            number: /\d+(?:\.\d+)?(?:e[+-]?\d+)?/,
            parens: /[\(\)]/,
            curly: /[{}]/,
            square: /[\[\]]/,
            punct: /[;.:\?\^%<>=!&|+\-,]/
        },
        cc = function(a) {
            var b = za(arguments, 0);
            return RegExp("(" +
                b.map(function(a) {
                    a = a.toString();
                    return "(?:" + a.substring(1, a.length - 1) + ")"
                }).join("|") + ")")
        }(Z.string1, Z.string2, Z.comment1, Z.comment2, Z.regexp, Z.whitespace, Z.name, Z.number, Z.parens, Z.curly, Z.square, Z.punct);

    function dc(a) {
        return a.split(cc).filter(function(a, c) {
            if (c % 2) return l;
            if ("" !== a) throw Error("invalid token:" + JSON.stringify(a));
            return q
        })
    }
    for (var ec in Z);

    function fc(a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
            var d = a[c];
            "(" == d ? b++ : ")" == d && b--;
            if (0 == b) return c
        }
        return -1
    };

    function gc() {
        this.f = [this.ha, this.T, this.S]
    }
    r = gc.prototype;
    r.F = function(a) {
        var b = {},
            c;
        var d = m,
            g = 0,
            e = a.id || a.name;
        if (e) {
            var f = /jwplayer\s*\(\s*["']([^"']+?)["']\s*\)\s*.\s*setup/gm;
            c = document.querySelectorAll("script:not([src])");
            wa(c, function(a) {
                return a.innerHTML
            }).forEach(function(a) {
                for (var b;
                    (b = f.exec(a)) !== m;)
                    if (b[1] == e) {
                        b = dc(a.substr(f.lastIndex));
                        if ("(" != b[0]) throw Error();
                        b = b.slice(1, fc(b));
                        if (b = bc(b)) d ? d["call_" + g] = b : d = b, g++
                    }
            });
            c = d
        } else c = m;
        c && M(b, c);
        if (c = hc(a, "flashvars"))(c = Lb(c)) && M(b, c);
        (c = hc(a, "movie")) || (c = hc(a, "src"));
        if (c && (c = c.match(Hb)[6] ||
            m))(c = Lb(c)) && c && M(b, c);
        if (!b) return b = new S, U(b, m), b;
        window.console.log(JSON.stringify(b));
        var h = [],
            h = [];
        this.h = b;
        this.f.forEach(function(a) {
            a = a.call(this);
            u(a) ? h.push.apply(h, a) : w(a) && h.push(a)
        }, this);
        var j = {},
            h = h.filter(function(a) {
                var b = a.url,
                    c = j.hasOwnProperty(b);
                c && (!j[b].label && a.label) && (j[b].label = a.label);
                j[b] = a;
                return !c
            }),
            n = Nb(b, "key");
        0 < n.length && (h = h.map(function(a) {
            a.url = Kb(a.url, "key", n[0]);
            return a
        }));
        c = h;
        if (0 < c.length) return b = new S, T(b, c), b;
        c = b["proxy.link"];
        if (!c || !X(c)) a = q;
        else {
            var i;
            c: {
                i = 9 == a.nodeType ? a : a.ownerDocument || a.document;
                if (i.defaultView && i.defaultView.getComputedStyle && (i = i.defaultView.getComputedStyle(a, m))) {
                    i = i.display || i.getPropertyValue("display") || "";
                    break c
                }
                i = ""
            }
            i || (i = (a.currentStyle ? a.currentStyle.display : m) || a.style && a.style.display);
            if ("none" != i) i = Gb(a);
            else {
                i = a.style;
                var p = i.display,
                    E = i.visibility,
                    v = i.position;
                i.visibility = "hidden";
                i.position = "absolute";
                i.display = "inline";
                var Ra = Gb(a);
                i.display = p;
                i.position = v;
                i.visibility = E;
                i = Ra
            }
            p = Db("div", "mb-videoget-framed", [Db("a", {
                href: c,
                target: "_blank"
            }, "Maximize in new Tab (" + c + ")")]);
            i.width = Math.min(window.innerWidth, Math.max(i.width, 600));
            i.height = Math.min(window.innerHeight, Math.max(i.height, 800));
            c = Db("iframe", {
                src: c
            });
            Eb(p, i);
            i.height -= 30;
            Eb(c, i);
            c.style.overflow = "scroll";
            p.appendChild(c);
            a.parentNode && a.parentNode.insertBefore(p, a);
            a && a.parentNode && a.parentNode.removeChild(a);
            a = l
        }
        return a ? m : (new Zb(b)).F()
    };
    r.ha = function() {
        var a = this.h,
            b = a.clip_id,
            a = a.js_getConfig;
        if (b && w(a)) {
            a = a.match(/\d+_\d+/);
            if (!a) return m;
            var a = "clip" + a[0],
                c = window[a];
            if (!x(c)) return m;
            a = Nb(c, "signature");
            if (1 > a.length) return m;
            var a = a[0],
                d = Nb(c, "timestamp");
            if (1 > d.length) return m;
            d = d[0];
            c = Nb(c, "hd");
            c = 0 < c.length && c[0];
            return {
                url: Kb("http://player.vimeo.com/play_redirect", "clip_id", b, "sig", a, "time", d, "quality", c ? "hd" : "sd", "codecs", "H264,VP8,VP6")
            }
        }
        return m
    };
    r.T = function() {
        var a = [];
        this.z(a, this.h);
        return a
    };
    r.S = function() {
        var a = [];
        this.w(a, this.h);
        return a
    };
    r.z = function(a, b) {
        Qb(b) ? a.push({
            url: b
        }) : u(b) ? b.forEach(ha(this.z, a), this) : x(b) && this.z(a, ab(b))
    };
    r.w = function(a, b) {
        u(b) ? b.forEach(ha(this.w, a), this) : x(b) && Za(b, function(c, d) {
            if (("url" == d || "file" == d) && Rb(c)) {
                var g = {
                    url: c
                };
                w(b.label) && (g.label = b.label);
                a.push(g)
            } else this.w(a, c)
        }, this)
    };

    function hc(a, b) {
        var c = a.tagName.toLowerCase(),
            d = m;
        "object" == c ? (c = va(ya(a.getElementsByTagName("param")), function(a) {
            return a.name.toLowerCase() == b
        }), 0 < c.length && (d = c[0].value)) : "embed" == c && (d = a.getAttribute(b));
        return d
    };

    function ic() {
        A.call(this);
        this.A = m;
        this.m = new ib(this);
        this.I = k;
        this.K = new tb
    }
    z(ic, A);
    ic.prototype.X = function(a) {
        var b = a.target,
            a = y(b);
        if (!this.K.contains(a))
            if (this.K.add(a), a = b.tagName.toLowerCase(), window.console.log("detected " + a), "video" == a) this.P(b);
            else if ("object" == a || "embed" == a) b.querySelector("video") || b.querySelector('embed[type^="video/"]') ? window.console.log("ignoring non-flash object") : ("embed" == b.tagName.toLowerCase() && w(b.type) && 0 == ka("video/", b.type.substr(0, 6)) && X(b.src) ? (jc(this, b, {
            sources: [{
                url: encodeURI(b.src)
            }],
            referer: window.location.href
        }), a = l) : a = q, a || (a = (new gc).F(b),
            a !== m && (mb(a, function(a) {
                "success" == a.e && (a = {
                    sources: a.o.map(function(a) {
                        if (w(a)) return {
                            url: encodeURI(a)
                        };
                        a.url = encodeURI(a.url);
                        return a
                    })
                }, jc(this, b, a))
            }, this), nb(a, function() {
                jc(this, b, m)
            }, this))))
    };
    ic.prototype.P = function(a) {
        var b = [];
        a.src && b.push({
            url: encodeURI(a.src)
        });
        ua(a.getElementsByTagName("source"), function(a) {
            a.src && b.push({
                url: encodeURI(a.src)
            })
        });
        if (0 < b.length) jc(this, a, {
            sources: b,
            referer: window.location.href
        });
        else {
            this.A || (this.A = new yb(this.P, this));
            var c = this.A;
            c.k.push(a);
            c.D.push(a.children.length);
            c.G || (c.d.start(), c.G = l)
        }
    };

    function jc(a, b, c) {
        c && (c.origin = window.location.href);
        a.I(b, c)
    };

    function kc(a) {
        var b = new ic;
        b.I = a;
        kb(b.m, document, "webkitAnimationStart", b.X)
    }
    var lc = ["libvget", "detect"],
        $ = s;
    !(lc[0] in $) && $.execScript && $.execScript("var " + lc[0]);
    for (var mc; lc.length && (mc = lc.shift());)!lc.length && kc !== k ? $[mc] = kc : $ = $[mc] ? $[mc] : $[mc] = {};
})();