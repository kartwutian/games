var _SETTINGS = {
	API: {
		Enabled: !1,
		Log: {
			Events: {
				InitializeGame: !0,
				EndGame: !0,
				Level: {
					Begin: !0,
					End: !0,
					Win: !0,
					Lose: !0,
					Draw: !0
				}
			}
		}
	},
	Ad: {
		Mobile: {
			Preroll: {
				Enabled: !1,
				Duration: 5,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGamePreroll: 40,
						MobileAdInGamePreroll2: 40,
						MobileAdInGamePreroll3: 20
					}
				}
			},
			Header: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameHeader: 40,
						MobileAdInGameHeader2: 40,
						MobileAdInGameHeader3: 20
					}
				}
			},
			Footer: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameFooter: 40,
						MobileAdInGameFooter2: 40,
						MobileAdInGameFooter3: 20
					}
				}
			},
			End: {
				Enabled: !1,
				Duration: 1,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameEnd: 40,
						MobileAdInGameEnd2: 40,
						MobileAdInGameEnd3: 20
					}
				}
			}
		}
	},
	Language: {
		Default: "en"
	},
	DeveloperBranding: {
		Splash: {
			Enabled: !1
		},
		Logo: {
			Enabled: !1,
			Link: "http://google.com",
			LinkEnabled: !1,
			NewWindow: !0,
			Width: 166,
			Height: 61
		}
	},
	Branding: {
		Splash: {
			Enabled: !1
		},
		Logo: {
			Enabled: !1,
			Link: "http://google.com",
			LinkEnabled: !1,
			NewWindow: !0,
			Width: 166,
			Height: 61
		}
	},
	MoreGames: {
		Enabled: !1,
		Link: "http://www.marketjs.com/game/links/mobile",
		NewWindow: !0
	}
};
var _STRINGS = {
	Ad: {
		Mobile: {
			Preroll: {
				ReadyIn: "The game is ready in ",
				Loading: "Your game is loading...",
				Close: "Close"
			},
			Header: {
				ReadyIn: "The game is ready in ",
				Loading: "Your game is loading...",
				Close: "Close"
			},
			End: {
				ReadyIn: "Advertisement ends in ",
				Loading: "Please wait ...",
				Close: "Close"
			}
		}
	},
	Splash: {
		Loading: "LOADING",
		LogoLine1: "Some text here",
		LogoLine2: "powered by MarketJS",
		LogoLine3: "none",
		TapToStart: "TAP TO START"
	},
	Game: {
		SelectPlayer: "Select Player",
		Win: "You win!",
		Lose: "You lose!",
		Score: "Score",
		Time: "Time",
		SelectSkin: "SELECT SKIN",
		NewSKin: "NEW SKIN",
		LevelCleared: "LEVEL CLEARED",
		LevelSkipped: "LEVEL SKIPPED",
		Tutorial1: "TAP AND HOLD",
		Tutorial2: "TO START SWING",
		Tutorial3: "NEAREST",
		Tutorial4: "HANGER",
		Go: "GO",
		Level: "LEVEL",
		Skins: "SKINS",
		UnlockAtLevel: "UNLOCK AT LEVEL",
		CurrentSkin: "CURRENT SKIN",
		Settings: "SETTINGS",
		Paused: "PAUSED"
	},
	Results: {
		Title: "High score"
	}
};
var MobileAdInGamePreroll = { 
};
var MobileAdInGameHeader = { 
};
var MobileAdInGameFooter = { 
};
var MobileAdInGameEnd = { 
};
! function(b, c) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function(b) {
		if (!b.document) throw Error("jQuery requires a window with a document");
		return c(b)
	} : c(b)
}("undefined" != typeof window ? window : this, function(b, c) {
	function d(b, c) {
		c = c || X;
		var d = c.createElement("script");
		d.text = b;
		c.head.appendChild(d).parentNode.removeChild(d)
	}

	function f(b) {
		var c = !!b && "length" in b && b.length,
			d = p.type(b);
		return "function" !== d && !p.isWindow(b) && ("array" === d || 0 === c || "number" ==
			typeof c && 0 < c && c - 1 in b)
	}

	function e(b, c) {
		return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
	}

	function j(b, c, d) {
		return p.isFunction(c) ? p.grep(b, function(b, ca) {
			return !!c.call(b, ca, b) !== d
		}) : c.nodeType ? p.grep(b, function(b) {
			return b === c !== d
		}) : "string" != typeof c ? p.grep(b, function(b) {
			return -1 < Ka.call(c, b) !== d
		}) : Hc.test(c) ? p.filter(c, b, d) : (c = p.filter(c, b), p.grep(b, function(b) {
			return -1 < Ka.call(c, b) !== d && 1 === b.nodeType
		}))
	}

	function n(b, c) {
		for (;
			(b = b[c]) && 1 !== b.nodeType;);
		return b
	}

	function l(b) {
		return b
	}

	function g(b) {
		throw b;
	}

	function r(b, c, d, g) {
		var m;
		try {
			b && p.isFunction(m = b.promise) ? m.call(b).done(c).fail(d) : b && p.isFunction(m = b.then) ? m.call(b, c, d) : c.apply(void 0, [b].slice(g))
		} catch (e) {
			d.apply(void 0, [e])
		}
	}

	function z() {
		X.removeEventListener("DOMContentLoaded", z);
		b.removeEventListener("load", z);
		p.ready()
	}

	function y() {
		this.expando = p.expando + y.uid++
	}

	function A(b, c, d) {
		var g;
		if (void 0 === d && 1 === b.nodeType)
			if (g = "data-" + c.replace(Ic, "-$&").toLowerCase(), d = b.getAttribute(g), "string" == typeof d) {
				try {
					d = "true" ===
						d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : Jc.test(d) ? JSON.parse(d) : d)
				} catch (m) {}
				ra.set(b, c, d)
			} else d = void 0;
		return d
	}

	function B(b, c, d, g) {
		var m, e = 1,
			u = 20,
			f = g ? function() {
				return g.cur()
			} : function() {
				return p.css(b, c, "")
			},
			j = f(),
			s = d && d[3] || (p.cssNumber[c] ? "" : "px"),
			q = (p.cssNumber[c] || "px" !== s && +j) && nb.exec(p.css(b, c));
		if (q && q[3] !== s) {
			s = s || q[3];
			d = d || [];
			q = +j || 1;
			do e = e || ".5", q /= e, p.style(b, c, q + s); while (e !== (e = f() / j) && 1 !== e && --u)
		}
		return d && (q = +q || +j || 0, m = d[1] ? q + (d[1] + 1) * d[2] : +d[2], g && (g.unit = s, g.start = q,
			g.end = m)), m
	}

	function I(b, c) {
		for (var d, g, m = [], e = 0, u = b.length; e < u; e++)
			if (g = b[e], g.style)
				if (d = g.style.display, c) {
					if ("none" === d && (m[e] = S.get(g, "display") || null, m[e] || (g.style.display = "")), "" === g.style.display && Bb(g)) {
						d = m;
						var f = e,
							j, q = void 0;
						j = g.ownerDocument;
						var s = g.nodeName;
						j = (g = Zb[s]) ? g : (q = j.body.appendChild(j.createElement(s)), g = p.css(q, "display"), q.parentNode.removeChild(q), "none" === g && (g = "block"), Zb[s] = g, g);
						d[f] = j
					}
				} else "none" !== d && (m[e] = "none", S.set(g, "display", d));
		for (e = 0; e < u; e++) null != m[e] && (b[e].style.display =
			m[e]);
		return b
	}

	function D(b, c) {
		var d;
		return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && e(b, c) ? p.merge([b], d) : d
	}

	function t(b, c) {
		for (var d = 0, g = b.length; d < g; d++) S.set(b[d], "globalEval", !c || S.get(c[d], "globalEval"))
	}

	function G(b, c, d, g, m) {
		for (var e, u, f, j, q = c.createDocumentFragment(), s = [], l = 0, N = b.length; l < N; l++)
			if (e = b[l], e || 0 === e)
				if ("object" === p.type(e)) p.merge(s, e.nodeType ? [e] : e);
				else if (Kc.test(e)) {
			u =
				u || q.appendChild(c.createElement("div"));
			f = ($b.exec(e) || ["", ""])[1].toLowerCase();
			f = ta[f] || ta._default;
			u.innerHTML = f[1] + p.htmlPrefilter(e) + f[2];
			for (f = f[0]; f--;) u = u.lastChild;
			p.merge(s, u.childNodes);
			u = q.firstChild;
			u.textContent = ""
		} else s.push(c.createTextNode(e));
		q.textContent = "";
		for (l = 0; e = s[l++];)
			if (g && -1 < p.inArray(e, g)) m && m.push(e);
			else if (j = p.contains(e.ownerDocument, e), u = D(q.appendChild(e), "script"), j && t(u), d)
			for (f = 0; e = u[f++];) ac.test(e.type || "") && d.push(e);
		return q
	}

	function E() {
		return !0
	}

	function L() {
		return !1
	}

	function M() {
		try {
			return X.activeElement
		} catch (b) {}
	}

	function Q(b, c, d, g, e, m) {
		var u, f;
		if ("object" == typeof c) {
			"string" != typeof d && (g = g || d, d = void 0);
			for (f in c) Q(b, f, d, g, c[f], m);
			return b
		}
		if (null == g && null == e ? (e = d, g = d = void 0) : null == e && ("string" == typeof d ? (e = g, g = void 0) : (e = g, g = d, d = void 0)), !1 === e) e = L;
		else if (!e) return b;
		return 1 === m && (u = e, e = function(b) {
			return p().off(b), u.apply(this, arguments)
		}, e.guid = u.guid || (u.guid = p.guid++)), b.each(function() {
			p.event.add(this, c, e, g, d)
		})
	}

	function J(b, c) {
		return e(b, "table") &&
			e(11 !== c.nodeType ? c : c.firstChild, "tr") ? p(">tbody", b)[0] || b : b
	}

	function fa(b) {
		return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
	}

	function O(b) {
		var c = Lc.exec(b.type);
		return c ? b.type = c[1] : b.removeAttribute("type"), b
	}

	function P(b, c) {
		var d, g, e, m, u, f;
		if (1 === c.nodeType) {
			if (S.hasData(b) && (d = S.access(b), g = S.set(c, d), f = d.events))
				for (e in delete g.handle, g.events = {}, f) {
					d = 0;
					for (g = f[e].length; d < g; d++) p.event.add(c, e, f[e][d])
				}
			ra.hasData(b) && (m = ra.access(b), u = p.extend({}, m), ra.set(c, u))
		}
	}

	function aa(b, c,
		g, e) {
		c = bb.apply([], c);
		var m, u, f, j, q = 0,
			s = b.length,
			l = s - 1,
			N = c[0],
			r = p.isFunction(N);
		if (r || 1 < s && "string" == typeof N && !da.checkClone && Mc.test(N)) return b.each(function(d) {
			var m = b.eq(d);
			r && (c[0] = N.call(this, d, m.html()));
			aa(m, c, g, e)
		});
		if (s && (m = G(c, b[0].ownerDocument, !1, b, e), u = m.firstChild, 1 === m.childNodes.length && (m = u), u || e)) {
			u = p.map(D(m, "script"), fa);
			for (f = u.length; q < s; q++) j = m, q !== l && (j = p.clone(j, !0, !0), f && p.merge(u, D(j, "script"))), g.call(b[q], j, q);
			if (f) {
				m = u[u.length - 1].ownerDocument;
				p.map(u, O);
				for (q = 0; q <
					f; q++) j = u[q], ac.test(j.type || "") && !S.access(j, "globalEval") && p.contains(m, j) && (j.src ? p._evalUrl && p._evalUrl(j.src) : d(j.textContent.replace(Oc, ""), m))
			}
		}
		return b
	}

	function U(b, c, d) {
		for (var g = c ? p.filter(c, b) : b, e = 0; null != (c = g[e]); e++) d || 1 !== c.nodeType || p.cleanData(D(c)), c.parentNode && (d && p.contains(c.ownerDocument, c) && t(D(c, "script")), c.parentNode.removeChild(c));
		return b
	}

	function q(b, c, d) {
		var g, e, m, u, f = b.style;
		return d = d || Cb(b), d && (u = d.getPropertyValue(c) || d[c], "" !== u || p.contains(b.ownerDocument, b) ||
			(u = p.style(b, c)), !da.pixelMarginRight() && Rb.test(u) && bc.test(c) && (g = f.width, e = f.minWidth, m = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = d.width, f.width = g, f.minWidth = e, f.maxWidth = m)), void 0 !== u ? u + "" : u
	}

	function x(b, c) {
		return {
			get: function() {
				return b() ? void delete this.get : (this.get = c).apply(this, arguments)
			}
		}
	}

	function F(b) {
		var c = p.cssProps[b];
		if (!c) {
			var c = p.cssProps,
				d;
			a: if (d = b, !(d in cc)) {
				for (var g = d[0].toUpperCase() + d.slice(1), e = dc.length; e--;)
					if (d = dc[e] + g, d in cc) break a;
				d = void 0
			}
			c = c[b] = d || b
		}
		return c
	}

	function C(b, c, d) {
		return (b = nb.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c
	}

	function H(b, c, d, g, e) {
		var m = 0;
		for (c = d === (g ? "border" : "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2) "margin" === d && (m += p.css(b, d + Ta[c], !0, e)), g ? ("content" === d && (m -= p.css(b, "padding" + Ta[c], !0, e)), "margin" !== d && (m -= p.css(b, "border" + Ta[c] + "Width", !0, e))) : (m += p.css(b, "padding" + Ta[c], !0, e), "padding" !== d && (m += p.css(b, "border" + Ta[c] + "Width", !0, e)));
		return m
	}

	function Z(b, c, d) {
		var g, e = Cb(b),
			m = q(b, c, e),
			u = "border-box" === p.css(b, "boxSizing", !1,
				e);
		return Rb.test(m) ? m : (g = u && (da.boxSizingReliable() || m === b.style[c]), "auto" === m && (m = b["offset" + c[0].toUpperCase() + c.slice(1)]), m = parseFloat(m) || 0, m + H(b, c, d || (u ? "border" : "content"), g, e) + "px")
	}

	function R(b, c, d, g, e) {
		return new R.prototype.init(b, c, d, g, e)
	}

	function m() {
		Db && (!1 === X.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(m) : b.setTimeout(m, p.fx.interval), p.fx.tick())
	}

	function s() {
		return b.setTimeout(function() {
			cb = void 0
		}), cb = p.now()
	}

	function K(b, c) {
		var d, g = 0,
			e = {
				height: b
			};
		for (c = c ? 1 : 0; 4 > g; g +=
			2 - c) d = Ta[g], e["margin" + d] = e["padding" + d] = b;
		return c && (e.opacity = e.width = b), e
	}

	function u(b, c, d) {
		for (var g, e = (N.tweeners[c] || []).concat(N.tweeners["*"]), m = 0, u = e.length; m < u; m++)
			if (g = e[m].call(d, c, b)) return g
	}

	function N(b, c, d) {
		var g, e, m = 0,
			f = N.prefilters.length,
			j = p.Deferred().always(function() {
				delete q.elem
			}),
			q = function() {
				if (e) return !1;
				for (var c = cb || s(), c = Math.max(0, l.startTime + l.duration - c), d = 1 - (c / l.duration || 0), g = 0, m = l.tweens.length; g < m; g++) l.tweens[g].run(d);
				return j.notifyWith(b, [l, d, c]), 1 > d && m ? c :
					(m || j.notifyWith(b, [l, 1, 0]), j.resolveWith(b, [l]), !1)
			},
			l = j.promise({
				elem: b,
				props: p.extend({}, c),
				opts: p.extend(!0, {
					specialEasing: {},
					easing: p.easing._default
				}, d),
				originalProperties: c,
				originalOptions: d,
				startTime: cb || s(),
				duration: d.duration,
				tweens: [],
				createTween: function(c, d) {
					var g = p.Tween(b, l.opts, c, d, l.opts.specialEasing[c] || l.opts.easing);
					return l.tweens.push(g), g
				},
				stop: function(c) {
					var d = 0,
						g = c ? l.tweens.length : 0;
					if (e) return this;
					for (e = !0; d < g; d++) l.tweens[d].run(1);
					return c ? (j.notifyWith(b, [l, 1, 0]), j.resolveWith(b, [l, c])) : j.rejectWith(b, [l, c]), this
				}
			});
		c = l.props;
		d = l.opts.specialEasing;
		var r, x, C, V;
		for (g in c)
			if (r = p.camelCase(g), x = d[r], C = c[g], Array.isArray(C) && (x = C[1], C = c[g] = C[0]), g !== r && (c[r] = C, delete c[g]), V = p.cssHooks[r], V && "expand" in V)
				for (g in C = V.expand(C), delete c[r], C) g in c || (c[g] = C[g], d[g] = x);
			else d[r] = x;
		for (; m < f; m++)
			if (g = N.prefilters[m].call(l, b, c, l.opts)) return p.isFunction(g.stop) && (p._queueHooks(l.elem, l.opts.queue).stop = p.proxy(g.stop, g)), g;
		return p.map(c, u, l), p.isFunction(l.opts.start) && l.opts.start.call(b,
			l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), p.fx.timer(p.extend(q, {
			elem: b,
			anim: l,
			queue: l.opts.queue
		})), l
	}

	function V(b) {
		return (b.match(ua) || []).join(" ")
	}

	function ha(b) {
		return b.getAttribute && b.getAttribute("class") || ""
	}

	function ia(b, c, d, g) {
		var e;
		if (Array.isArray(c)) p.each(c, function(c, e) {
			d || Pc.test(b) ? g(b, e) : ia(b + "[" + ("object" == typeof e && null != e ? c : "") + "]", e, d, g)
		});
		else if (d || "object" !== p.type(c)) g(b, c);
		else
			for (e in c) ia(b + "[" + e + "]", c[e],
				d, g)
	}

	function la(b) {
		return function(c, d) {
			"string" != typeof c && (d = c, c = "*");
			var g, e = 0,
				m = c.toLowerCase().match(ua) || [];
			if (p.isFunction(d))
				for (; g = m[e++];) "+" === g[0] ? (g = g.slice(1) || "*", (b[g] = b[g] || []).unshift(d)) : (b[g] = b[g] || []).push(d)
		}
	}

	function oa(b, c, d, g) {
		function e(f) {
			var j;
			return m[f] = !0, p.each(b[f] || [], function(b, ca) {
				var f = ca(c, d, g);
				return "string" != typeof f || u || m[f] ? u ? !(j = f) : void 0 : (c.dataTypes.unshift(f), e(f), !1)
			}), j
		}
		var m = {},
			u = b === Sb;
		return e(c.dataTypes[0]) || !m["*"] && e("*")
	}

	function pa(b, c) {
		var d,
			g, e = p.ajaxSettings.flatOptions || {};
		for (d in c) void 0 !== c[d] && ((e[d] ? b : g || (g = {}))[d] = c[d]);
		return g && p.extend(!0, b, g), b
	}
	var va = [],
		X = b.document,
		Eb = Object.getPrototypeOf,
		za = va.slice,
		bb = va.concat,
		db = va.push,
		Ka = va.indexOf,
		La = {},
		eb = La.toString,
		Ma = La.hasOwnProperty,
		ob = Ma.toString,
		pb = ob.call(Object),
		da = {},
		p = function(b, c) {
			return new p.fn.init(b, c)
		},
		qb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		Fb = /^-ms-/,
		Gb = /-([a-z])/g,
		rb = function(b, c) {
			return c.toUpperCase()
		};
	p.fn = p.prototype = {
		jquery: "3.2.1",
		constructor: p,
		length: 0,
		toArray: function() {
			return za.call(this)
		},
		get: function(b) {
			return null == b ? za.call(this) : 0 > b ? this[b + this.length] : this[b]
		},
		pushStack: function(b) {
			b = p.merge(this.constructor(), b);
			return b.prevObject = this, b
		},
		each: function(b) {
			return p.each(this, b)
		},
		map: function(b) {
			return this.pushStack(p.map(this, function(c, d) {
				return b.call(c, d, c)
			}))
		},
		slice: function() {
			return this.pushStack(za.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(b) {
			var c = this.length;
			b = +b + (0 > b ? c : 0);
			return this.pushStack(0 <= b && b < c ? [this[b]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: db,
		sort: va.sort,
		splice: va.splice
	};
	p.extend = p.fn.extend = function() {
		var b, c, d, g, e, m, u = arguments[0] || {},
			f = 1,
			j = arguments.length,
			q = !1;
		"boolean" == typeof u && (q = u, u = arguments[f] || {}, f++);
		"object" == typeof u || p.isFunction(u) || (u = {});
		for (f === j && (u = this, f--); f < j; f++)
			if (null != (b = arguments[f]))
				for (c in b) d = u[c], g = b[c], u !== g && (q && g && (p.isPlainObject(g) || (e = Array.isArray(g))) ? (e ? (e = !1, m = d &&
					Array.isArray(d) ? d : []) : m = d && p.isPlainObject(d) ? d : {}, u[c] = p.extend(q, m, g)) : void 0 !== g && (u[c] = g));
		return u
	};
	p.extend({
		expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(b) {
			throw Error(b);
		},
		noop: function() {},
		isFunction: function(b) {
			return "function" === p.type(b)
		},
		isWindow: function(b) {
			return null != b && b === b.window
		},
		isNumeric: function(b) {
			var c = p.type(b);
			return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
		},
		isPlainObject: function(b) {
			var c, d;
			return !(!b || "[object Object]" !==
				eb.call(b)) && (!(c = Eb(b)) || (d = Ma.call(c, "constructor") && c.constructor, "function" == typeof d && ob.call(d) === pb))
		},
		isEmptyObject: function(b) {
			for (var c in b) return !1;
			return !0
		},
		type: function(b) {
			return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? La[eb.call(b)] || "object" : typeof b
		},
		globalEval: function(b) {
			d(b)
		},
		camelCase: function(b) {
			return b.replace(Fb, "ms-").replace(Gb, rb)
		},
		each: function(b, c) {
			var d, g = 0;
			if (f(b))
				for (d = b.length; g < d && !1 !== c.call(b[g], g, b[g]); g++);
			else
				for (g in b)
					if (!1 === c.call(b[g], g,
							b[g])) break;
			return b
		},
		trim: function(b) {
			return null == b ? "" : (b + "").replace(qb, "")
		},
		makeArray: function(b, c) {
			var d = c || [];
			return null != b && (f(Object(b)) ? p.merge(d, "string" == typeof b ? [b] : b) : db.call(d, b)), d
		},
		inArray: function(b, c, d) {
			return null == c ? -1 : Ka.call(c, b, d)
		},
		merge: function(b, c) {
			for (var d = +c.length, g = 0, e = b.length; g < d; g++) b[e++] = c[g];
			return b.length = e, b
		},
		grep: function(b, c, d) {
			for (var g = [], e = 0, m = b.length, u = !d; e < m; e++) d = !c(b[e], e), d !== u && g.push(b[e]);
			return g
		},
		map: function(b, c, d) {
			var g, e, m = 0,
				u = [];
			if (f(b))
				for (g =
					b.length; m < g; m++) e = c(b[m], m, d), null != e && u.push(e);
			else
				for (m in b) e = c(b[m], m, d), null != e && u.push(e);
			return bb.apply([], u)
		},
		guid: 1,
		proxy: function(b, c) {
			var d, g, e;
			if ("string" == typeof c && (d = b[c], c = b, b = d), p.isFunction(b)) return g = za.call(arguments, 2), e = function() {
				return b.apply(c || this, g.concat(za.call(arguments)))
			}, e.guid = b.guid = b.guid || p.guid++, e
		},
		now: Date.now,
		support: da
	});
	"function" == typeof Symbol && (p.fn[Symbol.iterator] = va[Symbol.iterator]);
	p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
		function(b, c) {
			La["[object " + c + "]"] = c.toLowerCase()
		});
	var Aa, fb = b,
		ba = function(b, c, d, g) {
			var e, m, u, f, j, q = c && c.ownerDocument,
				s = c ? c.nodeType : 9;
			if (d = d || [], "string" != typeof b || !b || 1 !== s && 9 !== s && 11 !== s) return d;
			if (!g && ((c ? c.ownerDocument || c : wa) !== Y && xa(c), c = c || Y, ma)) {
				if (11 !== s && (f = Qc.exec(b)))
					if (e = f[1])
						if (9 === s) {
							if (!(m = c.getElementById(e))) return d;
							if (m.id === e) return d.push(m), d
						} else {
							if (q && (m = q.getElementById(e)) && sb(c, m) && m.id === e) return d.push(m), d
						}
				else {
					if (f[2]) return Na.apply(d, c.getElementsByTagName(b)),
						d;
					if ((e = f[3]) && ea.getElementsByClassName && c.getElementsByClassName) return Na.apply(d, c.getElementsByClassName(e)), d
				}
				if (ea.qsa && !Hb[b + " "] && (!ka || !ka.test(b))) {
					if (1 !== s) q = c, j = b;
					else if ("object" !== c.nodeName.toLowerCase()) {
						(u = c.getAttribute("id")) ? u = u.replace(ec, fc): c.setAttribute("id", u = ja);
						m = Oa(b);
						for (e = m.length; e--;) m[e] = "#" + u + " " + Ua(m[e]);
						j = m.join(",");
						q = Tb.test(b) && gb(c.parentNode) || c
					}
					if (j) try {
						return Na.apply(d, q.querySelectorAll(j)), d
					} catch (l) {} finally {
						u === ja && c.removeAttribute("id")
					}
				}
			}
			return hb(b.replace(Ib,
				"$1"), c, d, g)
		},
		ib = function() {
			function b(d, g) {
				return c.push(d + " ") > W.cacheLength && delete b[c.shift()], b[d + " "] = g
			}
			var c = [];
			return b
		},
		qa = function(b) {
			return b[ja] = !0, b
		},
		sa = function(b) {
			var c = Y.createElement("fieldset");
			try {
				return !!b(c)
			} catch (d) {
				return !1
			} finally {
				c.parentNode && c.parentNode.removeChild(c)
			}
		},
		jb = function(b, c) {
			for (var d = b.split("|"), g = d.length; g--;) W.attrHandle[d[g]] = c
		},
		tb = function(b, c) {
			var d = c && b,
				g = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
			if (g) return g;
			if (d)
				for (; d = d.nextSibling;)
					if (d ===
						c) return -1;
			return b ? 1 : -1
		},
		ub = function(b) {
			return function(c) {
				return "input" === c.nodeName.toLowerCase() && c.type === b
			}
		},
		Jb = function(b) {
			return function(c) {
				var d = c.nodeName.toLowerCase();
				return ("input" === d || "button" === d) && c.type === b
			}
		},
		vb = function(b) {
			return function(c) {
				return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b : c.disabled === b : c.isDisabled === b || c.isDisabled !== !b && Rc(c) === b : c.disabled === b : "label" in c && c.disabled === b
			}
		},
		Da = function(b) {
			return qa(function(c) {
				return c = +c, qa(function(d, g) {
					for (var e, m = b([], d.length, c), u = m.length; u--;) d[e = m[u]] && (d[e] = !(g[e] = d[e]))
				})
			})
		},
		gb = function(b) {
			return b && "undefined" != typeof b.getElementsByTagName && b
		},
		wb = function() {},
		Ua = function(b) {
			for (var c = 0, d = b.length, g = ""; c < d; c++) g += b[c].value;
			return g
		},
		Va = function(b, c, d) {
			var g = c.dir,
				e = c.next,
				m = e || g,
				u = d && "parentNode" === m,
				f = Sc++;
			return c.first ? function(c, d, e) {
				for (; c = c[g];)
					if (1 === c.nodeType || u) return b(c, d, e);
				return !1
			} : function(c, d, j) {
				var q, s, l, T = [Ea, f];
				if (j)
					for (; c = c[g];) {
						if ((1 === c.nodeType ||
								u) && b(c, d, j)) return !0
					} else
						for (; c = c[g];)
							if (1 === c.nodeType || u)
								if (l = c[ja] || (c[ja] = {}), s = l[c.uniqueID] || (l[c.uniqueID] = {}), e && e === c.nodeName.toLowerCase()) c = c[g] || c;
								else {
									if ((q = s[m]) && q[0] === Ea && q[1] === f) return T[2] = q[2];
									if (s[m] = T, T[2] = b(c, d, j)) return !0
								}
				return !1
			}
		},
		Wa = function(b) {
			return 1 < b.length ? function(c, d, g) {
				for (var e = b.length; e--;)
					if (!b[e](c, d, g)) return !1;
				return !0
			} : b[0]
		},
		Pa = function(b, c, d, g, e) {
			for (var m, u = [], f = 0, j = b.length, q = null != c; f < j; f++)(m = b[f]) && (d && !d(m, g, e) || (u.push(m), q && c.push(f)));
			return u
		},
		Xa = function(b, c, d, g, e, m) {
			return g && !g[ja] && (g = Xa(g)), e && !e[ja] && (e = Xa(e, m)), qa(function(m, u, f, j) {
				var q, s, l = [],
					N = [],
					r = u.length,
					p;
				if (!(p = m)) {
					p = c || "*";
					for (var x = f.nodeType ? [f] : f, C = [], V = 0, K = x.length; V < K; V++) ba(p, x[V], C);
					p = C
				}
				p = !b || !m && c ? p : Pa(p, l, b, f, j);
				x = d ? e || (m ? b : r || g) ? [] : u : p;
				if (d && d(p, x, f, j), g) {
					q = Pa(x, N);
					g(q, [], f, j);
					for (f = q.length; f--;)(s = q[f]) && (x[N[f]] = !(p[N[f]] = s))
				}
				if (m) {
					if (e || b) {
						if (e) {
							q = [];
							for (f = x.length; f--;)(s = x[f]) && q.push(p[f] = s);
							e(null, x = [], q, j)
						}
						for (f = x.length; f--;)(s = x[f]) && -1 < (q = e ? Ya(m, s) :
							l[f]) && (m[q] = !(u[q] = s))
					}
				} else x = Pa(x === u ? x.splice(r, x.length) : x), e ? e(null, u, x, j) : Na.apply(u, x)
			})
		},
		Za = function(b) {
			var c, d, g, e = b.length,
				m = W.relative[b[0].type];
			d = m || W.relative[" "];
			for (var u = m ? 1 : 0, f = Va(function(b) {
					return b === c
				}, d, !0), j = Va(function(b) {
					return -1 < Ya(c, b)
				}, d, !0), q = [function(b, d, g) {
					b = !m && (g || d !== Qa) || ((c = d).nodeType ? f(b, d, g) : j(b, d, g));
					return c = null, b
				}]; u < e; u++)
				if (d = W.relative[b[u].type]) q = [Va(Wa(q), d)];
				else {
					if (d = W.filter[b[u].type].apply(null, b[u].matches), d[ja]) {
						for (g = ++u; g < e && !W.relative[b[g].type]; g++);
						return Xa(1 < u && Wa(q), 1 < u && Ua(b.slice(0, u - 1).concat({
							value: " " === b[u - 2].type ? "*" : ""
						})).replace(Ib, "$1"), d, u < g && Za(b.slice(u, g)), g < e && Za(b = b.slice(g)), g < e && Ua(b))
					}
					q.push(d)
				}
			return Wa(q)
		},
		Fa, ea, W, Ra, kb, Oa, $a, hb, Qa, ya, Ga, xa, Y, na, ma, ka, Ba, Sa, sb, ja = "sizzle" + 1 * new Date,
		wa = fb.document,
		Ea = 0,
		Sc = 0,
		gc = ib(),
		hc = ib(),
		Hb = ib(),
		Ub = function(b, c) {
			return b === c && (Ga = !0), 0
		},
		Tc = {}.hasOwnProperty,
		ab = [],
		Uc = ab.pop,
		Vc = ab.push,
		Na = ab.push,
		ic = ab.slice,
		Ya = function(b, c) {
			for (var d = 0, g = b.length; d < g; d++)
				if (b[d] === c) return d;
			return -1
		},
		Wc = /[\x20\t\r\n\f]+/g,
		Ib = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
		Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
		Yc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
		Zc = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
		$c = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
		ad = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
		Kb = {
			ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
			ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
			PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
			CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
			bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
			needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
				"i")
		},
		bd = /^(?:input|select|textarea|button)$/i,
		cd = /^h\d$/i,
		xb = /^[^{]+\{\s*\[native \w/,
		Qc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		Tb = /[+~]/,
		Ha = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
		Ia = function(b, c, d) {
			b = "0x" + c - 65536;
			return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
		},
		ec = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fc = function(b, c) {
			return c ? "\x00" === b ? "\ufffd" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b
		},
		jc = function() {
			xa()
		},
		Rc = Va(function(b) {
			return !0 === b.disabled && ("form" in b || "label" in b)
		}, {
			dir: "parentNode",
			next: "legend"
		});
	try {
		Na.apply(ab = ic.call(wa.childNodes), wa.childNodes), ab[wa.childNodes.length].nodeType
	} catch (Fd) {
		Na = {
			apply: ab.length ? function(b, c) {
				Vc.apply(b, ic.call(c))
			} : function(b, c) {
				for (var d = b.length, g = 0; b[d++] = c[g++];);
				b.length = d - 1
			}
		}
	}
	ea = ba.support = {};
	kb = ba.isXML = function(b) {
		b = b && (b.ownerDocument || b).documentElement;
		return !!b && "HTML" !== b.nodeName
	};
	xa = ba.setDocument = function(b) {
		var c, d;
		b = b ? b.ownerDocument || b :
			wa;
		return b !== Y && 9 === b.nodeType && b.documentElement ? (Y = b, na = Y.documentElement, ma = !kb(Y), wa !== Y && (d = Y.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", jc, !1) : d.attachEvent && d.attachEvent("onunload", jc)), ea.attributes = sa(function(b) {
				return b.className = "i", !b.getAttribute("className")
			}), ea.getElementsByTagName = sa(function(b) {
				return b.appendChild(Y.createComment("")), !b.getElementsByTagName("*").length
			}), ea.getElementsByClassName = xb.test(Y.getElementsByClassName), ea.getById = sa(function(b) {
				return na.appendChild(b).id =
					ja, !Y.getElementsByName || !Y.getElementsByName(ja).length
			}), ea.getById ? (W.filter.ID = function(b) {
				var c = b.replace(Ha, Ia);
				return function(b) {
					return b.getAttribute("id") === c
				}
			}, W.find.ID = function(b, c) {
				if ("undefined" != typeof c.getElementById && ma) {
					var d = c.getElementById(b);
					return d ? [d] : []
				}
			}) : (W.filter.ID = function(b) {
				var c = b.replace(Ha, Ia);
				return function(b) {
					return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
				}
			}, W.find.ID = function(b, c) {
				if ("undefined" != typeof c.getElementById &&
					ma) {
					var d, g, e, ca = c.getElementById(b);
					if (ca) {
						if (d = ca.getAttributeNode("id"), d && d.value === b) return [ca];
						e = c.getElementsByName(b);
						for (g = 0; ca = e[g++];)
							if (d = ca.getAttributeNode("id"), d && d.value === b) return [ca]
					}
					return []
				}
			}), W.find.TAG = ea.getElementsByTagName ? function(b, c) {
				return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : ea.qsa ? c.querySelectorAll(b) : void 0
			} : function(b, c) {
				var d, g = [],
					e = 0,
					ca = c.getElementsByTagName(b);
				if ("*" === b) {
					for (; d = ca[e++];) 1 === d.nodeType && g.push(d);
					return g
				}
				return ca
			},
			W.find.CLASS = ea.getElementsByClassName && function(b, c) {
				if ("undefined" != typeof c.getElementsByClassName && ma) return c.getElementsByClassName(b)
			}, Ba = [], ka = [], (ea.qsa = xb.test(Y.querySelectorAll)) && (sa(function(b) {
				na.appendChild(b).innerHTML = "<a id='" + ja + "'></a><select id='" + ja + "-\r\\' msallowcapture=''><option selected=''></option></select>";
				b.querySelectorAll("[msallowcapture^='']").length && ka.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
				b.querySelectorAll("[selected]").length || ka.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
				b.querySelectorAll("[id~=" + ja + "-]").length || ka.push("~=");
				b.querySelectorAll(":checked").length || ka.push(":checked");
				b.querySelectorAll("a#" + ja + "+*").length || ka.push(".#.+[+~]")
			}), sa(function(b) {
				b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var c = Y.createElement("input");
				c.setAttribute("type", "hidden");
				b.appendChild(c).setAttribute("name", "D");
				b.querySelectorAll("[name=d]").length && ka.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
				2 !== b.querySelectorAll(":enabled").length &&
					ka.push(":enabled", ":disabled");
				na.appendChild(b).disabled = !0;
				2 !== b.querySelectorAll(":disabled").length && ka.push(":enabled", ":disabled");
				b.querySelectorAll("*,:x");
				ka.push(",.*:")
			})), (ea.matchesSelector = xb.test(Sa = na.matches || na.webkitMatchesSelector || na.mozMatchesSelector || na.oMatchesSelector || na.msMatchesSelector)) && sa(function(b) {
				ea.disconnectedMatch = Sa.call(b, "*");
				Sa.call(b, "[s!='']:x");
				Ba.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
			}),
			ka = ka.length && RegExp(ka.join("|")), Ba = Ba.length && RegExp(Ba.join("|")), c = xb.test(na.compareDocumentPosition), sb = c || xb.test(na.contains) ? function(b, c) {
				var d = 9 === b.nodeType ? b.documentElement : b,
					g = c && c.parentNode;
				return b === g || !(!g || 1 !== g.nodeType || !(d.contains ? d.contains(g) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(g)))
			} : function(b, c) {
				if (c)
					for (; c = c.parentNode;)
						if (c === b) return !0;
				return !1
			}, Ub = c ? function(b, c) {
				if (b === c) return Ga = !0, 0;
				var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
				return d ? d : (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !ea.sortDetached && c.compareDocumentPosition(b) === d ? b === Y || b.ownerDocument === wa && sb(wa, b) ? -1 : c === Y || c.ownerDocument === wa && sb(wa, c) ? 1 : ya ? Ya(ya, b) - Ya(ya, c) : 0 : 4 & d ? -1 : 1)
			} : function(b, c) {
				if (b === c) return Ga = !0, 0;
				var d, g = 0;
				d = b.parentNode;
				var e = c.parentNode,
					ca = [b],
					m = [c];
				if (!d || !e) return b === Y ? -1 : c === Y ? 1 : d ? -1 : e ? 1 : ya ? Ya(ya, b) - Ya(ya, c) : 0;
				if (d === e) return tb(b, c);
				for (d = b; d = d.parentNode;) ca.unshift(d);
				for (d = c; d = d.parentNode;) m.unshift(d);
				for (; ca[g] === m[g];) g++;
				return g ? tb(ca[g], m[g]) : ca[g] === wa ? -1 : m[g] === wa ? 1 : 0
			}, Y) : Y
	};
	ba.matches = function(b, c) {
		return ba(b, null, null, c)
	};
	ba.matchesSelector = function(b, c) {
		if ((b.ownerDocument || b) !== Y && xa(b), c = c.replace(Zc, "='$1']"), ea.matchesSelector && ma && !Hb[c + " "] && (!Ba || !Ba.test(c)) && (!ka || !ka.test(c))) try {
			var d = Sa.call(b, c);
			if (d || ea.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
		} catch (g) {}
		return 0 < ba(c, Y, null, [b]).length
	};
	ba.contains = function(b, c) {
		return (b.ownerDocument || b) !== Y && xa(b),
			sb(b, c)
	};
	ba.attr = function(b, c) {
		(b.ownerDocument || b) !== Y && xa(b);
		var d = W.attrHandle[c.toLowerCase()],
			d = d && Tc.call(W.attrHandle, c.toLowerCase()) ? d(b, c, !ma) : void 0;
		return void 0 !== d ? d : ea.attributes || !ma ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null
	};
	ba.escape = function(b) {
		return (b + "").replace(ec, fc)
	};
	ba.error = function(b) {
		throw Error("Syntax error, unrecognized expression: " + b);
	};
	ba.uniqueSort = function(b) {
		var c, d = [],
			g = 0,
			e = 0;
		if (Ga = !ea.detectDuplicates, ya = !ea.sortStable && b.slice(0),
			b.sort(Ub), Ga) {
			for (; c = b[e++];) c === b[e] && (g = d.push(e));
			for (; g--;) b.splice(d[g], 1)
		}
		return ya = null, b
	};
	Ra = ba.getText = function(b) {
		var c, d = "",
			g = 0;
		if (c = b.nodeType)
			if (1 === c || 9 === c || 11 === c) {
				if ("string" == typeof b.textContent) return b.textContent;
				for (b = b.firstChild; b; b = b.nextSibling) d += Ra(b)
			} else {
				if (3 === c || 4 === c) return b.nodeValue
			}
		else
			for (; c = b[g++];) d += Ra(c);
		return d
	};
	W = ba.selectors = {
		cacheLength: 50,
		createPseudo: qa,
		match: Kb,
		attrHandle: {},
		find: {},
		relative: {
			">": {
				dir: "parentNode",
				first: !0
			},
			" ": {
				dir: "parentNode"
			},
			"+": {
				dir: "previousSibling",
				first: !0
			},
			"~": {
				dir: "previousSibling"
			}
		},
		preFilter: {
			ATTR: function(b) {
				return b[1] = b[1].replace(Ha, Ia), b[3] = (b[3] || b[4] || b[5] || "").replace(Ha, Ia), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
			},
			CHILD: function(b) {
				return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || ba.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && ba.error(b[0]), b
			},
			PSEUDO: function(b) {
				var c, d = !b[6] && b[2];
				return Kb.CHILD.test(b[0]) ? null : (b[3] ?
					b[2] = b[4] || b[5] || "" : d && $c.test(d) && (c = Oa(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3))
			}
		},
		filter: {
			TAG: function(b) {
				var c = b.replace(Ha, Ia).toLowerCase();
				return "*" === b ? function() {
					return !0
				} : function(b) {
					return b.nodeName && b.nodeName.toLowerCase() === c
				}
			},
			CLASS: function(b) {
				var c = gc[b + " "];
				return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && gc(b, function(b) {
					return c.test("string" == typeof b.className && b.className || "undefined" !=
						typeof b.getAttribute && b.getAttribute("class") || "")
				})
			},
			ATTR: function(b, c, d) {
				return function(g) {
					g = ba.attr(g, b);
					return null == g ? "!=" === c : !c || (g += "", "=" === c ? g === d : "!=" === c ? g !== d : "^=" === c ? d && 0 === g.indexOf(d) : "*=" === c ? d && -1 < g.indexOf(d) : "$=" === c ? d && g.slice(-d.length) === d : "~=" === c ? -1 < (" " + g.replace(Wc, " ") + " ").indexOf(d) : "|=" === c && (g === d || g.slice(0, d.length + 1) === d + "-"))
				}
			},
			CHILD: function(b, c, d, g, e) {
				var m = "nth" !== b.slice(0, 3),
					u = "last" !== b.slice(-4),
					f = "of-type" === c;
				return 1 === g && 0 === e ? function(b) {
						return !!b.parentNode
					} :
					function(c, d, j) {
						var q, s, l, T, N, r;
						d = m !== u ? "nextSibling" : "previousSibling";
						var x = c.parentNode,
							p = f && c.nodeName.toLowerCase();
						j = !j && !f;
						var C = !1;
						if (x) {
							if (m) {
								for (; d;) {
									for (T = c; T = T[d];)
										if (f ? T.nodeName.toLowerCase() === p : 1 === T.nodeType) return !1;
									r = d = "only" === b && !r && "nextSibling"
								}
								return !0
							}
							if (r = [u ? x.firstChild : x.lastChild], u && j) {
								T = x;
								l = T[ja] || (T[ja] = {});
								s = l[T.uniqueID] || (l[T.uniqueID] = {});
								q = s[b] || [];
								C = (N = q[0] === Ea && q[1]) && q[2];
								for (T = N && x.childNodes[N]; T = ++N && T && T[d] || (C = N = 0) || r.pop();)
									if (1 === T.nodeType && ++C && T ===
										c) {
										s[b] = [Ea, N, C];
										break
									}
							} else if (j && (T = c, l = T[ja] || (T[ja] = {}), s = l[T.uniqueID] || (l[T.uniqueID] = {}), q = s[b] || [], N = q[0] === Ea && q[1], C = N), !1 === C)
								for (;
									(T = ++N && T && T[d] || (C = N = 0) || r.pop()) && (!(f ? T.nodeName.toLowerCase() === p : 1 === T.nodeType) || !++C || !(j && (l = T[ja] || (T[ja] = {}), s = l[T.uniqueID] || (l[T.uniqueID] = {}), s[b] = [Ea, C]), T === c)););
							return C -= e, C === g || 0 === C % g && 0 <= C / g
						}
					}
			},
			PSEUDO: function(b, c) {
				var d, g = W.pseudos[b] || W.setFilters[b.toLowerCase()] || ba.error("unsupported pseudo: " + b);
				return g[ja] ? g(c) : 1 < g.length ? (d = [b,
					b, "", c
				], W.setFilters.hasOwnProperty(b.toLowerCase()) ? qa(function(b, d) {
					for (var e, m = g(b, c), u = m.length; u--;) e = Ya(b, m[u]), b[e] = !(d[e] = m[u])
				}) : function(b) {
					return g(b, 0, d)
				}) : g
			}
		},
		pseudos: {
			not: qa(function(b) {
				var c = [],
					d = [],
					g = $a(b.replace(Ib, "$1"));
				return g[ja] ? qa(function(b, c, d, e) {
					var m;
					d = g(b, null, e, []);
					for (e = b.length; e--;)(m = d[e]) && (b[e] = !(c[e] = m))
				}) : function(b, e, m) {
					return c[0] = b, g(c, null, m, d), c[0] = null, !d.pop()
				}
			}),
			has: qa(function(b) {
				return function(c) {
					return 0 < ba(b, c).length
				}
			}),
			contains: qa(function(b) {
				return b =
					b.replace(Ha, Ia),
					function(c) {
						return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
					}
			}),
			lang: qa(function(b) {
				return ad.test(b || "") || ba.error("unsupported lang: " + b), b = b.replace(Ha, Ia).toLowerCase(),
					function(c) {
						var d;
						do
							if (d = ma ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
						return !1
					}
			}),
			target: function(b) {
				var c = fb.location && fb.location.hash;
				return c && c.slice(1) === b.id
			},
			root: function(b) {
				return b ===
					na
			},
			focus: function(b) {
				return b === Y.activeElement && (!Y.hasFocus || Y.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
			},
			enabled: vb(!1),
			disabled: vb(!0),
			checked: function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && !!b.checked || "option" === c && !!b.selected
			},
			selected: function(b) {
				return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
			},
			empty: function(b) {
				for (b = b.firstChild; b; b = b.nextSibling)
					if (6 > b.nodeType) return !1;
				return !0
			},
			parent: function(b) {
				return !W.pseudos.empty(b)
			},
			header: function(b) {
				return cd.test(b.nodeName)
			},
			input: function(b) {
				return bd.test(b.nodeName)
			},
			button: function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && "button" === b.type || "button" === c
			},
			text: function(b) {
				var c;
				return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
			},
			first: Da(function() {
				return [0]
			}),
			last: Da(function(b, c) {
				return [c - 1]
			}),
			eq: Da(function(b, c, d) {
				return [0 > d ? d + c : d]
			}),
			even: Da(function(b, c) {
				for (var d = 0; d < c; d += 2) b.push(d);
				return b
			}),
			odd: Da(function(b, c) {
				for (var d = 1; d <
					c; d += 2) b.push(d);
				return b
			}),
			lt: Da(function(b, c, d) {
				for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
				return b
			}),
			gt: Da(function(b, c, d) {
				for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
				return b
			})
		}
	};
	W.pseudos.nth = W.pseudos.eq;
	for (Fa in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) W.pseudos[Fa] = ub(Fa);
	for (Fa in {
			submit: !0,
			reset: !0
		}) W.pseudos[Fa] = Jb(Fa);
	wb.prototype = W.filters = W.pseudos;
	W.setFilters = new wb;
	Oa = ba.tokenize = function(b, c) {
		var d, g, e, m, u, f, j;
		if (u = hc[b + " "]) return c ? 0 : u.slice(0);
		u = b;
		f = [];
		for (j = W.preFilter; u;) {
			d && !(g = Xc.exec(u)) ||
				(g && (u = u.slice(g[0].length) || u), f.push(e = []));
			d = !1;
			(g = Yc.exec(u)) && (d = g.shift(), e.push({
				value: d,
				type: g[0].replace(Ib, " ")
			}), u = u.slice(d.length));
			for (m in W.filter) !(g = Kb[m].exec(u)) || j[m] && !(g = j[m](g)) || (d = g.shift(), e.push({
				value: d,
				type: m,
				matches: g
			}), u = u.slice(d.length));
			if (!d) break
		}
		return c ? u.length : u ? ba.error(b) : hc(b, f).slice(0)
	};
	Aa = ($a = ba.compile = function(b, c) {
		var d, g = [],
			e = [],
			m = Hb[b + " "];
		if (!m) {
			c || (c = Oa(b));
			for (d = c.length; d--;) m = Za(c[d]), m[ja] ? g.push(m) : e.push(m);
			d = Hb;
			var u = 0 < g.length,
				f = 0 < e.length,
				m = function(b, c, d, m, ca) {
					var j, q, s, l = 0,
						N = "0",
						T = b && [],
						r = [],
						x = Qa,
						p = b || f && W.find.TAG("*", ca),
						C = Ea += null == x ? 1 : Math.random() || 0.1,
						V = p.length;
					for (ca && (Qa = c === Y || c || ca); N !== V && null != (j = p[N]); N++) {
						if (f && j) {
							q = 0;
							for (c || j.ownerDocument === Y || (xa(j), d = !ma); s = e[q++];)
								if (s(j, c || Y, d)) {
									m.push(j);
									break
								}
							ca && (Ea = C)
						}
						u && ((j = !s && j) && l--, b && T.push(j))
					}
					if (l += N, u && N !== l) {
						for (q = 0; s = g[q++];) s(T, r, c, d);
						if (b) {
							if (0 < l)
								for (; N--;) T[N] || r[N] || (r[N] = Uc.call(m));
							r = Pa(r)
						}
						Na.apply(m, r);
						ca && !b && 0 < r.length && 1 < l + g.length && ba.uniqueSort(m)
					}
					return ca &&
						(Ea = C, Qa = x), T
				},
				m = u ? qa(m) : m,
				m = d(b, m);
			m.selector = b
		}
		return m
	}, hb = ba.select = function(b, c, d, g) {
		var e, m, u, f, j, q = "function" == typeof b && b,
			s = !g && Oa(b = q.selector || b);
		if (d = d || [], 1 === s.length) {
			if (m = s[0] = s[0].slice(0), 2 < m.length && "ID" === (u = m[0]).type && 9 === c.nodeType && ma && W.relative[m[1].type]) {
				if (c = (W.find.ID(u.matches[0].replace(Ha, Ia), c) || [])[0], !c) return d;
				q && (c = c.parentNode);
				b = b.slice(m.shift().value.length)
			}
			for (e = Kb.needsContext.test(b) ? 0 : m.length; e-- && !(u = m[e], W.relative[f = u.type]);)
				if ((j = W.find[f]) && (g =
						j(u.matches[0].replace(Ha, Ia), Tb.test(m[0].type) && gb(c.parentNode) || c))) {
					if (m.splice(e, 1), b = g.length && Ua(m), !b) return Na.apply(d, g), d;
					break
				}
		}
		return (q || $a(b, s))(g, c, !ma, d, !c || Tb.test(b) && gb(c.parentNode) || c), d
	}, ea.sortStable = ja.split("").sort(Ub).join("") === ja, ea.detectDuplicates = !!Ga, xa(), ea.sortDetached = sa(function(b) {
		return 1 & b.compareDocumentPosition(Y.createElement("fieldset"))
	}), sa(function(b) {
		return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
	}) || jb("type|href|height|width",
		function(b, c, d) {
			if (!d) return b.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
		}), ea.attributes && sa(function(b) {
		return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
	}) || jb("value", function(b, c, d) {
		if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue
	}), sa(function(b) {
		return null == b.getAttribute("disabled")
	}) || jb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b,
		c, d) {
		var g;
		if (!d) return !0 === b[c] ? c.toLowerCase() : (g = b.getAttributeNode(c)) && g.specified ? g.value : null
	}), ba);
	p.find = Aa;
	p.expr = Aa.selectors;
	p.expr[":"] = p.expr.pseudos;
	p.uniqueSort = p.unique = Aa.uniqueSort;
	p.text = Aa.getText;
	p.isXMLDoc = Aa.isXML;
	p.contains = Aa.contains;
	p.escapeSelector = Aa.escape;
	var lb = function(b, c, d) {
			for (var g = [], e = void 0 !== d;
				(b = b[c]) && 9 !== b.nodeType;)
				if (1 === b.nodeType) {
					if (e && p(b).is(d)) break;
					g.push(b)
				}
			return g
		},
		kc = function(b, c) {
			for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
			return d
		},
		lc = p.expr.match.needsContext,
		mc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		Hc = /^.[^:#\[\.,]*$/;
	p.filter = function(b, c, d) {
		var g = c[0];
		return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === g.nodeType ? p.find.matchesSelector(g, b) ? [g] : [] : p.find.matches(b, p.grep(c, function(b) {
			return 1 === b.nodeType
		}))
	};
	p.fn.extend({
		find: function(b) {
			var c, d, g = this.length,
				e = this;
			if ("string" != typeof b) return this.pushStack(p(b).filter(function() {
				for (c = 0; c < g; c++)
					if (p.contains(e[c], this)) return !0
			}));
			d =
				this.pushStack([]);
			for (c = 0; c < g; c++) p.find(b, e[c], d);
			return 1 < g ? p.uniqueSort(d) : d
		},
		filter: function(b) {
			return this.pushStack(j(this, b || [], !1))
		},
		not: function(b) {
			return this.pushStack(j(this, b || [], !0))
		},
		is: function(b) {
			return !!j(this, "string" == typeof b && lc.test(b) ? p(b) : b || [], !1).length
		}
	});
	var nc, dd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(p.fn.init = function(b, c, d) {
		var g, e;
		if (!b) return this;
		if (d = d || nc, "string" == typeof b) {
			if (g = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : dd.exec(b), !g || !g[1] &&
				c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
			if (g[1]) {
				if (c = c instanceof p ? c[0] : c, p.merge(this, p.parseHTML(g[1], c && c.nodeType ? c.ownerDocument || c : X, !0)), mc.test(g[1]) && p.isPlainObject(c))
					for (g in c) p.isFunction(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
				return this
			}
			return e = X.getElementById(g[2]), e && (this[0] = e, this.length = 1), this
		}
		return b.nodeType ? (this[0] = b, this.length = 1, this) : p.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(p) : p.makeArray(b, this)
	}).prototype = p.fn;
	nc = p(X);
	var ed = /^(?:parents|prev(?:Until|All))/,
		fd = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	p.fn.extend({
		has: function(b) {
			var c = p(b, this),
				d = c.length;
			return this.filter(function() {
				for (var b = 0; b < d; b++)
					if (p.contains(this, c[b])) return !0
			})
		},
		closest: function(b, c) {
			var d, g = 0,
				e = this.length,
				m = [],
				u = "string" != typeof b && p(b);
			if (!lc.test(b))
				for (; g < e; g++)
					for (d = this[g]; d && d !== c; d = d.parentNode)
						if (11 > d.nodeType && (u ? -1 < u.index(d) : 1 === d.nodeType && p.find.matchesSelector(d, b))) {
							m.push(d);
							break
						}
			return this.pushStack(1 < m.length ? p.uniqueSort(m) : m)
		},
		index: function(b) {
			return b ?
				"string" == typeof b ? Ka.call(p(b), this[0]) : Ka.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(b, c) {
			return this.pushStack(p.uniqueSort(p.merge(this.get(), p(b, c))))
		},
		addBack: function(b) {
			return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
		}
	});
	p.each({
			parent: function(b) {
				return (b = b.parentNode) && 11 !== b.nodeType ? b : null
			},
			parents: function(b) {
				return lb(b, "parentNode")
			},
			parentsUntil: function(b, c, d) {
				return lb(b, "parentNode", d)
			},
			next: function(b) {
				return n(b,
					"nextSibling")
			},
			prev: function(b) {
				return n(b, "previousSibling")
			},
			nextAll: function(b) {
				return lb(b, "nextSibling")
			},
			prevAll: function(b) {
				return lb(b, "previousSibling")
			},
			nextUntil: function(b, c, d) {
				return lb(b, "nextSibling", d)
			},
			prevUntil: function(b, c, d) {
				return lb(b, "previousSibling", d)
			},
			siblings: function(b) {
				return kc((b.parentNode || {}).firstChild, b)
			},
			children: function(b) {
				return kc(b.firstChild)
			},
			contents: function(b) {
				return e(b, "iframe") ? b.contentDocument : (e(b, "template") && (b = b.content || b), p.merge([], b.childNodes))
			}
		},
		function(b, c) {
			p.fn[b] = function(d, g) {
				var e = p.map(this, c, d);
				return "Until" !== b.slice(-5) && (g = d), g && "string" == typeof g && (e = p.filter(g, e)), 1 < this.length && (fd[b] || p.uniqueSort(e), ed.test(b) && e.reverse()), this.pushStack(e)
			}
		});
	var ua = /[^\x20\t\r\n\f]+/g;
	p.Callbacks = function(b) {
		var c;
		if ("string" == typeof b) {
			var d = {};
			c = (p.each(b.match(ua) || [], function(b, c) {
				d[c] = !0
			}), d)
		} else c = p.extend({}, b);
		b = c;
		var g, e, m, u, f = [],
			j = [],
			q = -1,
			s = function() {
				u = u || b.once;
				for (m = g = !0; j.length; q = -1)
					for (e = j.shift(); ++q < f.length;) !1 === f[q].apply(e[0],
						e[1]) && b.stopOnFalse && (q = f.length, e = !1);
				b.memory || (e = !1);
				g = !1;
				u && (f = e ? [] : "")
			},
			l = {
				add: function() {
					return f && (e && !g && (q = f.length - 1, j.push(e)), function Nc(c) {
						p.each(c, function(c, d) {
							p.isFunction(d) ? b.unique && l.has(d) || f.push(d) : d && d.length && "string" !== p.type(d) && Nc(d)
						})
					}(arguments), e && !g && s()), this
				},
				remove: function() {
					return p.each(arguments, function(b, c) {
						for (var d; - 1 < (d = p.inArray(c, f, d));) f.splice(d, 1), d <= q && q--
					}), this
				},
				has: function(b) {
					return b ? -1 < p.inArray(b, f) : 0 < f.length
				},
				empty: function() {
					return f &&
						(f = []), this
				},
				disable: function() {
					return u = j = [], f = e = "", this
				},
				disabled: function() {
					return !f
				},
				lock: function() {
					return u = j = [], e || g || (f = e = ""), this
				},
				locked: function() {
					return !!u
				},
				fireWith: function(b, c) {
					return u || (c = c || [], c = [b, c.slice ? c.slice() : c], j.push(c), g || s()), this
				},
				fire: function() {
					return l.fireWith(this, arguments), this
				},
				fired: function() {
					return !!m
				}
			};
		return l
	};
	p.extend({
		Deferred: function(c) {
			var d = [
					["notify", "progress", p.Callbacks("memory"), p.Callbacks("memory"), 2],
					["resolve", "done", p.Callbacks("once memory"),
						p.Callbacks("once memory"), 0, "resolved"
					],
					["reject", "fail", p.Callbacks("once memory"), p.Callbacks("once memory"), 1, "rejected"]
				],
				e = "pending",
				m = {
					state: function() {
						return e
					},
					always: function() {
						return u.done(arguments).fail(arguments), this
					},
					"catch": function(b) {
						return m.then(null, b)
					},
					pipe: function() {
						var b = arguments;
						return p.Deferred(function(c) {
							p.each(d, function(d, g) {
								var e = p.isFunction(b[g[4]]) && b[g[4]];
								u[g[1]](function() {
									var b = e && e.apply(this, arguments);
									b && p.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) :
										c[g[0] + "With"](this, e ? [b] : arguments)
								})
							});
							b = null
						}).promise()
					},
					then: function(c, e, m) {
						function u(c, d, e, m) {
							return function() {
								var j = this,
									q = arguments,
									s = function() {
										var b, s;
										if (!(c < f)) {
											if (b = e.apply(j, q), b === d.promise()) throw new TypeError("Thenable self-resolution");
											s = b && ("object" == typeof b || "function" == typeof b) && b.then;
											p.isFunction(s) ? m ? s.call(b, u(f, d, l, m), u(f, d, g, m)) : (f++, s.call(b, u(f, d, l, m), u(f, d, g, m), u(f, d, l, d.notifyWith))) : (e !== l && (j = void 0, q = [b]), (m || d.resolveWith)(j, q))
										}
									},
									ca = m ? s : function() {
										try {
											s()
										} catch (b) {
											p.Deferred.exceptionHook &&
												p.Deferred.exceptionHook(b, ca.stackTrace), c + 1 >= f && (e !== g && (j = void 0, q = [b]), d.rejectWith(j, q))
										}
									};
								c ? ca() : (p.Deferred.getStackHook && (ca.stackTrace = p.Deferred.getStackHook()), b.setTimeout(ca))
							}
						}
						var f = 0;
						return p.Deferred(function(b) {
							d[0][3].add(u(0, b, p.isFunction(m) ? m : l, b.notifyWith));
							d[1][3].add(u(0, b, p.isFunction(c) ? c : l));
							d[2][3].add(u(0, b, p.isFunction(e) ? e : g))
						}).promise()
					},
					promise: function(b) {
						return null != b ? p.extend(b, m) : m
					}
				},
				u = {};
			return p.each(d, function(b, c) {
				var g = c[2],
					f = c[5];
				m[c[1]] = g.add;
				f && g.add(function() {
					e =
						f
				}, d[3 - b][2].disable, d[0][2].lock);
				g.add(c[3].fire);
				u[c[0]] = function() {
					return u[c[0] + "With"](this === u ? void 0 : this, arguments), this
				};
				u[c[0] + "With"] = g.fireWith
			}), m.promise(u), c && c.call(u, u), u
		},
		when: function(b) {
			var c = arguments.length,
				d = c,
				g = Array(d),
				e = za.call(arguments),
				m = p.Deferred(),
				u = function(b) {
					return function(d) {
						g[b] = this;
						e[b] = 1 < arguments.length ? za.call(arguments) : d;
						--c || m.resolveWith(g, e)
					}
				};
			if (1 >= c && (r(b, m.done(u(d)).resolve, m.reject, !c), "pending" === m.state() || p.isFunction(e[d] && e[d].then))) return m.then();
			for (; d--;) r(e[d], u(d), m.reject);
			return m.promise()
		}
	});
	var gd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	p.Deferred.exceptionHook = function(c, d) {
		b.console && b.console.warn && c && gd.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d)
	};
	p.readyException = function(c) {
		b.setTimeout(function() {
			throw c;
		})
	};
	var Vb = p.Deferred();
	p.fn.ready = function(b) {
		return Vb.then(b)["catch"](function(b) {
			p.readyException(b)
		}), this
	};
	p.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(b) {
			(!0 ===
				b ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== b && 0 < --p.readyWait || Vb.resolveWith(X, [p]))
		}
	});
	p.ready.then = Vb.then;
	"complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? b.setTimeout(p.ready) : (X.addEventListener("DOMContentLoaded", z), b.addEventListener("load", z));
	var Ja = function(b, c, d, g, e, m, u) {
			var f = 0,
				j = b.length,
				q = null == d;
			if ("object" === p.type(d))
				for (f in e = !0, d) Ja(b, c, f, d[f], !0, m, u);
			else if (void 0 !== g && (e = !0, p.isFunction(g) || (u = !0), q && (u ? (c.call(b, g), c = null) : (q = c, c = function(b,
					c, d) {
					return q.call(p(b), d)
				})), c))
				for (; f < j; f++) c(b[f], d, u ? g : g.call(b[f], f, c(b[f], d)));
			return e ? b : q ? c.call(b) : j ? c(b[0], d) : m
		},
		Lb = function(b) {
			return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
		};
	y.uid = 1;
	y.prototype = {
		cache: function(b) {
			var c = b[this.expando];
			return c || (c = {}, Lb(b) && (b.nodeType ? b[this.expando] = c : Object.defineProperty(b, this.expando, {
				value: c,
				configurable: !0
			}))), c
		},
		set: function(b, c, d) {
			var g;
			b = this.cache(b);
			if ("string" == typeof c) b[p.camelCase(c)] = d;
			else
				for (g in c) b[p.camelCase(g)] = c[g];
			return b
		},
		get: function(b, c) {
			return void 0 === c ? this.cache(b) : b[this.expando] && b[this.expando][p.camelCase(c)]
		},
		access: function(b, c, d) {
			return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d : c)
		},
		remove: function(b, c) {
			var d, g = b[this.expando];
			if (void 0 !== g) {
				if (void 0 !== c) {
					Array.isArray(c) ? c = c.map(p.camelCase) : (c = p.camelCase(c), c = c in g ? [c] : c.match(ua) || []);
					for (d = c.length; d--;) delete g[c[d]]
				}(void 0 === c || p.isEmptyObject(g)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
			}
		},
		hasData: function(b) {
			b = b[this.expando];
			return void 0 !== b && !p.isEmptyObject(b)
		}
	};
	var S = new y,
		ra = new y,
		Jc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ic = /[A-Z]/g;
	p.extend({
		hasData: function(b) {
			return ra.hasData(b) || S.hasData(b)
		},
		data: function(b, c, d) {
			return ra.access(b, c, d)
		},
		removeData: function(b, c) {
			ra.remove(b, c)
		},
		_data: function(b, c, d) {
			return S.access(b, c, d)
		},
		_removeData: function(b, c) {
			S.remove(b, c)
		}
	});
	p.fn.extend({
		data: function(b, c) {
			var d, g, e, m = this[0],
				u = m && m.attributes;
			if (void 0 === b) {
				if (this.length && (e = ra.get(m),
						1 === m.nodeType && !S.get(m, "hasDataAttrs"))) {
					for (d = u.length; d--;) u[d] && (g = u[d].name, 0 === g.indexOf("data-") && (g = p.camelCase(g.slice(5)), A(m, g, e[g])));
					S.set(m, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof b ? this.each(function() {
				ra.set(this, b)
			}) : Ja(this, function(c) {
				var d;
				if (m && void 0 === c) {
					if ((d = ra.get(m, b), void 0 !== d) || (d = A(m, b), void 0 !== d)) return d
				} else this.each(function() {
					ra.set(this, b, c)
				})
			}, null, c, 1 < arguments.length, null, !0)
		},
		removeData: function(b) {
			return this.each(function() {
				ra.remove(this, b)
			})
		}
	});
	p.extend({
		queue: function(b, c, d) {
			var g;
			if (b) return c = (c || "fx") + "queue", g = S.get(b, c), d && (!g || Array.isArray(d) ? g = S.access(b, c, p.makeArray(d)) : g.push(d)), g || []
		},
		dequeue: function(b, c) {
			c = c || "fx";
			var d = p.queue(b, c),
				g = d.length,
				e = d.shift(),
				m = p._queueHooks(b, c),
				u = function() {
					p.dequeue(b, c)
				};
			"inprogress" === e && (e = d.shift(), g--);
			e && ("fx" === c && d.unshift("inprogress"), delete m.stop, e.call(b, u, m));
			!g && m && m.empty.fire()
		},
		_queueHooks: function(b, c) {
			var d = c + "queueHooks";
			return S.get(b, d) || S.access(b, d, {
				empty: p.Callbacks("once memory").add(function() {
					S.remove(b, [c + "queue", d])
				})
			})
		}
	});
	p.fn.extend({
		queue: function(b, c) {
			var d = 2;
			return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? p.queue(this[0], b) : void 0 === c ? this : this.each(function() {
				var d = p.queue(this, b, c);
				p._queueHooks(this, b);
				"fx" === b && "inprogress" !== d[0] && p.dequeue(this, b)
			})
		},
		dequeue: function(b) {
			return this.each(function() {
				p.dequeue(this, b)
			})
		},
		clearQueue: function(b) {
			return this.queue(b || "fx", [])
		},
		promise: function(b, c) {
			var d, g = 1,
				e = p.Deferred(),
				m = this,
				u = this.length,
				f = function() {
					--g || e.resolveWith(m, [m])
				};
			"string" != typeof b && (c = b, b = void 0);
			for (b = b || "fx"; u--;)(d = S.get(m[u], b + "queueHooks")) && d.empty && (g++, d.empty.add(f));
			return f(), e.promise(c)
		}
	});
	var oc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		nb = RegExp("^(?:([+-])=|)(" + oc + ")([a-z%]*)$", "i"),
		Ta = ["Top", "Right", "Bottom", "Left"],
		Bb = function(b, c) {
			return b = c || b, "none" === b.style.display || "" === b.style.display && p.contains(b.ownerDocument, b) && "none" === p.css(b, "display")
		},
		pc = function(b, c, d, g) {
			var e, m = {};
			for (e in c) m[e] = b.style[e], b.style[e] = c[e];
			d =
				d.apply(b, g || []);
			for (e in c) b.style[e] = m[e];
			return d
		},
		Zb = {};
	p.fn.extend({
		show: function() {
			return I(this, !0)
		},
		hide: function() {
			return I(this)
		},
		toggle: function(b) {
			return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
				Bb(this) ? p(this).show() : p(this).hide()
			})
		}
	});
	var qc = /^(?:checkbox|radio)$/i,
		$b = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		ac = /^$|\/(?:java|ecma)script/i,
		ta = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ta.optgroup = ta.option;
	ta.tbody = ta.tfoot = ta.colgroup = ta.caption = ta.thead;
	ta.th = ta.td;
	var Kc = /<|&#?\w+;/,
		Mb = X.createDocumentFragment().appendChild(X.createElement("div")),
		Nb = X.createElement("input");
	Nb.setAttribute("type", "radio");
	Nb.setAttribute("checked", "checked");
	Nb.setAttribute("name", "t");
	Mb.appendChild(Nb);
	da.checkClone = Mb.cloneNode(!0).cloneNode(!0).lastChild.checked;
	Mb.innerHTML =
		"<textarea>x</textarea>";
	da.noCloneChecked = !!Mb.cloneNode(!0).lastChild.defaultValue;
	!0;
	var Ob = X.documentElement,
		hd = /^key/,
		id = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rc = /^([^.]*)(?:\.(.+)|)/;
	p.event = {
		global: {},
		add: function(b, c, d, g, e) {
			var m, u, f, j, q, s, l, N, r, x;
			if (q = S.get(b)) {
				d.handler && (m = d, d = m.handler, e = m.selector);
				e && p.find.matchesSelector(Ob, e);
				d.guid || (d.guid = p.guid++);
				(j = q.events) || (j = q.events = {});
				(u = q.handle) || (u = q.handle = function(c) {
					return "undefined" != typeof p && p.event.triggered !== c.type ?
						p.event.dispatch.apply(b, arguments) : void 0
				});
				c = (c || "").match(ua) || [""];
				for (q = c.length; q--;) f = rc.exec(c[q]) || [], r = x = f[1], f = (f[2] || "").split(".").sort(), r && (l = p.event.special[r] || {}, r = (e ? l.delegateType : l.bindType) || r, l = p.event.special[r] || {}, s = p.extend({
					type: r,
					origType: x,
					data: g,
					handler: d,
					guid: d.guid,
					selector: e,
					needsContext: e && p.expr.match.needsContext.test(e),
					namespace: f.join(".")
				}, m), (N = j[r]) || (N = j[r] = [], N.delegateCount = 0, l.setup && !1 !== l.setup.call(b, g, f, u) || b.addEventListener && b.addEventListener(r,
					u)), l.add && (l.add.call(b, s), s.handler.guid || (s.handler.guid = d.guid)), e ? N.splice(N.delegateCount++, 0, s) : N.push(s), p.event.global[r] = !0)
			}
		},
		remove: function(b, c, d, g, e) {
			var m, u, f, j, q, s, l, N, r, x, C, V = S.hasData(b) && S.get(b);
			if (V && (j = V.events)) {
				c = (c || "").match(ua) || [""];
				for (q = c.length; q--;)
					if (f = rc.exec(c[q]) || [], r = C = f[1], x = (f[2] || "").split(".").sort(), r) {
						l = p.event.special[r] || {};
						r = (g ? l.delegateType : l.bindType) || r;
						N = j[r] || [];
						f = f[2] && RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)");
						for (u = m = N.length; m--;) s =
							N[m], !e && C !== s.origType || d && d.guid !== s.guid || f && !f.test(s.namespace) || g && g !== s.selector && ("**" !== g || !s.selector) || (N.splice(m, 1), s.selector && N.delegateCount--, l.remove && l.remove.call(b, s));
						u && !N.length && (l.teardown && !1 !== l.teardown.call(b, x, V.handle) || p.removeEvent(b, r, V.handle), delete j[r])
					} else
						for (r in j) p.event.remove(b, r + c[q], d, g, !0);
				p.isEmptyObject(j) && S.remove(b, "handle events")
			}
		},
		dispatch: function(b) {
			var c = p.event.fix(b),
				d, g, e, m, u, f, j = Array(arguments.length);
			g = (S.get(this, "events") || {})[c.type] ||
				[];
			var q = p.event.special[c.type] || {};
			j[0] = c;
			for (d = 1; d < arguments.length; d++) j[d] = arguments[d];
			if (c.delegateTarget = this, !q.preDispatch || !1 !== q.preDispatch.call(this, c)) {
				f = p.event.handlers.call(this, c, g);
				for (d = 0;
					(m = f[d++]) && !c.isPropagationStopped();) {
					c.currentTarget = m.elem;
					for (g = 0;
						(u = m.handlers[g++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(u.namespace) || (c.handleObj = u, c.data = u.data, e = ((p.event.special[u.origType] || {}).handle || u.handler).apply(m.elem, j), void 0 !== e && !1 ===
						(c.result = e) && (c.preventDefault(), c.stopPropagation()))
				}
				return q.postDispatch && q.postDispatch.call(this, c), c.result
			}
		},
		handlers: function(b, c) {
			var d, g, e, m, u, f = [],
				j = c.delegateCount,
				q = b.target;
			if (j && q.nodeType && !("click" === b.type && 1 <= b.button))
				for (; q !== this; q = q.parentNode || this)
					if (1 === q.nodeType && ("click" !== b.type || !0 !== q.disabled)) {
						m = [];
						u = {};
						for (d = 0; d < j; d++) g = c[d], e = g.selector + " ", void 0 === u[e] && (u[e] = g.needsContext ? -1 < p(e, this).index(q) : p.find(e, this, null, [q]).length), u[e] && m.push(g);
						m.length && f.push({
							elem: q,
							handlers: m
						})
					}
			return q = this, j < c.length && f.push({
				elem: q,
				handlers: c.slice(j)
			}), f
		},
		addProp: function(b, c) {
			Object.defineProperty(p.Event.prototype, b, {
				enumerable: !0,
				configurable: !0,
				get: p.isFunction(c) ? function() {
					if (this.originalEvent) return c(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[b]
				},
				set: function(c) {
					Object.defineProperty(this, b, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: c
					})
				}
			})
		},
		fix: function(b) {
			return b[p.expando] ? b : new p.Event(b)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== M() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === M() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && e(this, "input")) return this.click(), !1
				},
				_default: function(b) {
					return e(b.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(b) {
					void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
				}
			}
		}
	};
	p.removeEvent = function(b, c, d) {
		b.removeEventListener &&
			b.removeEventListener(c, d)
	};
	p.Event = function(b, c) {
		return this instanceof p.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? E : L, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && p.extend(this, c), this.timeStamp = b && b.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(b, c)
	};
	p.Event.prototype = {
		constructor: p.Event,
		isDefaultPrevented: L,
		isPropagationStopped: L,
		isImmediatePropagationStopped: L,
		isSimulated: !1,
		preventDefault: function() {
			var b = this.originalEvent;
			this.isDefaultPrevented = E;
			b && !this.isSimulated && b.preventDefault()
		},
		stopPropagation: function() {
			var b = this.originalEvent;
			this.isPropagationStopped = E;
			b && !this.isSimulated && b.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var b = this.originalEvent;
			this.isImmediatePropagationStopped = E;
			b && !this.isSimulated && b.stopImmediatePropagation();
			this.stopPropagation()
		}
	};
	p.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(b) {
			var c = b.button;
			return null == b.which && hd.test(b.type) ? null != b.charCode ? b.charCode : b.keyCode : !b.which && void 0 !== c && id.test(b.type) ?
				1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : b.which
		}
	}, p.event.addProp);
	p.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(b, c) {
		p.event.special[b] = {
			delegateType: c,
			bindType: c,
			handle: function(b) {
				var d, g = b.relatedTarget,
					e = b.handleObj;
				return g && (g === this || p.contains(this, g)) || (b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c), d
			}
		}
	});
	p.fn.extend({
		on: function(b, c, d, g) {
			return Q(this, b, c, d, g)
		},
		one: function(b, c, d, g) {
			return Q(this, b, c, d, g, 1)
		},
		off: function(b,
			c, d) {
			var g, e;
			if (b && b.preventDefault && b.handleObj) return g = b.handleObj, p(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
			if ("object" == typeof b) {
				for (e in b) this.off(e, c, b[e]);
				return this
			}
			return !1 !== c && "function" != typeof c || (d = c, c = void 0), !1 === d && (d = L), this.each(function() {
				p.event.remove(this, b, d, c)
			})
		}
	});
	var jd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		kd = /<script|<style|<link/i,
		Mc = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Lc = /^true\/(.*)/,
		Oc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	p.extend({
		htmlPrefilter: function(b) {
			return b.replace(jd, "<$1></$2>")
		},
		clone: function(b, c, d) {
			var g, e, m, u, f = b.cloneNode(!0),
				q = p.contains(b.ownerDocument, b);
			if (!da.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || p.isXMLDoc(b))) {
				u = D(f);
				m = D(b);
				g = 0;
				for (e = m.length; g < e; g++) {
					var j = m[g],
						s = u[g],
						l = s.nodeName.toLowerCase();
					"input" === l && qc.test(j.type) ? s.checked = j.checked : "input" !== l && "textarea" !== l || (s.defaultValue = j.defaultValue)
				}
			}
			if (c)
				if (d) {
					m =
						m || D(b);
					u = u || D(f);
					g = 0;
					for (e = m.length; g < e; g++) P(m[g], u[g])
				} else P(b, f);
			return u = D(f, "script"), 0 < u.length && t(u, !q && D(b, "script")), f
		},
		cleanData: function(b) {
			for (var c, d, g, e = p.event.special, m = 0; void 0 !== (d = b[m]); m++)
				if (Lb(d)) {
					if (c = d[S.expando]) {
						if (c.events)
							for (g in c.events) e[g] ? p.event.remove(d, g) : p.removeEvent(d, g, c.handle);
						d[S.expando] = void 0
					}
					d[ra.expando] && (d[ra.expando] = void 0)
				}
		}
	});
	p.fn.extend({
		detach: function(b) {
			return U(this, b, !0)
		},
		remove: function(b) {
			return U(this, b)
		},
		text: function(b) {
			return Ja(this,
				function(b) {
					return void 0 === b ? p.text(this) : this.empty().each(function() {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
					})
				}, null, b, arguments.length)
		},
		append: function() {
			return aa(this, arguments, function(b) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && J(this, b).appendChild(b)
			})
		},
		prepend: function() {
			return aa(this, arguments, function(b) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var c = J(this, b);
					c.insertBefore(b, c.firstChild)
				}
			})
		},
		before: function() {
			return aa(this,
				arguments,
				function(b) {
					this.parentNode && this.parentNode.insertBefore(b, this)
				})
		},
		after: function() {
			return aa(this, arguments, function(b) {
				this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
			})
		},
		empty: function() {
			for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (p.cleanData(D(b, !1)), b.textContent = "");
			return this
		},
		clone: function(b, c) {
			return b = null != b && b, c = null == c ? b : c, this.map(function() {
				return p.clone(this, b, c)
			})
		},
		html: function(b) {
			return Ja(this, function(b) {
				var c = this[0] || {},
					d = 0,
					g = this.length;
				if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
				if ("string" == typeof b && !kd.test(b) && !ta[($b.exec(b) || ["", ""])[1].toLowerCase()]) {
					b = p.htmlPrefilter(b);
					try {
						for (; d < g; d++) c = this[d] || {}, 1 === c.nodeType && (p.cleanData(D(c, !1)), c.innerHTML = b);
						c = 0
					} catch (e) {}
				}
				c && this.empty().append(b)
			}, null, b, arguments.length)
		},
		replaceWith: function() {
			var b = [];
			return aa(this, arguments, function(c) {
				var d = this.parentNode;
				0 > p.inArray(this, b) && (p.cleanData(D(this)), d && d.replaceChild(c, this))
			}, b)
		}
	});
	p.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(b, c) {
		p.fn[b] = function(b) {
			for (var d = [], g = p(b), e = g.length - 1, m = 0; m <= e; m++) b = m === e ? this : this.clone(!0), p(g[m])[c](b), db.apply(d, b.get());
			return this.pushStack(d)
		}
	});
	var bc = /^margin/,
		Rb = RegExp("^(" + oc + ")(?!px)[a-z%]+$", "i"),
		Cb = function(c) {
			var d = c.ownerDocument.defaultView;
			return d && d.opener || (d = b), d.getComputedStyle(c)
		},
		Qb = function() {
			if (Ca) {
				Ca.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
				Ca.innerHTML = "";
				Ob.appendChild(Pb);
				var c = b.getComputedStyle(Ca);
				sc = "1%" !== c.top;
				tc = "2px" === c.marginLeft;
				uc = "4px" === c.width;
				Ca.style.marginRight = "50%";
				vc = "4px" === c.marginRight;
				Ob.removeChild(Pb);
				Ca = null
			}
		},
		sc, uc, vc, tc, Pb = X.createElement("div"),
		Ca = X.createElement("div");
	Ca.style && (Ca.style.backgroundClip = "content-box", Ca.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === Ca.style.backgroundClip, Pb.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
		Pb.appendChild(Ca), p.extend(da, {
			pixelPosition: function() {
				return Qb(), sc
			},
			boxSizingReliable: function() {
				return Qb(), uc
			},
			pixelMarginRight: function() {
				return Qb(), vc
			},
			reliableMarginLeft: function() {
				return Qb(), tc
			}
		}));
	!0;
	var ld = /^(none|table(?!-c[ea]).+)/,
		wc = /^--/,
		md = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		xc = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		dc = ["Webkit", "Moz", "ms"],
		cc = X.createElement("div").style;
	p.extend({
		cssHooks: {
			opacity: {
				get: function(b, c) {
					if (c) {
						var d = q(b, "opacity");
						return "" ===
							d ? "1" : d
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(b, c, d, g) {
			if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
				var e, m, u, f = p.camelCase(c),
					j = wc.test(c),
					q = b.style;
				return j || (c = F(f)), u = p.cssHooks[c] || p.cssHooks[f], void 0 === d ? u && "get" in u && void 0 !== (e = u.get(b, !1, g)) ? e : q[c] : (m = typeof d, "string" === m && (e = nb.exec(d)) && e[1] &&
					(d = B(b, c, e), m = "number"), null != d && d === d && ("number" === m && (d += e && e[3] || (p.cssNumber[f] ? "" : "px")), da.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (q[c] = "inherit"), u && "set" in u && void 0 === (d = u.set(b, d, g)) || (j ? q.setProperty(c, d) : q[c] = d)), void 0)
			}
		},
		css: function(b, c, d, g) {
			var e, m, u, f = p.camelCase(c);
			return wc.test(c) || (c = F(f)), u = p.cssHooks[c] || p.cssHooks[f], u && "get" in u && (e = u.get(b, !0, d)), void 0 === e && (e = q(b, c, g)), "normal" === e && c in xc && (e = xc[c]), "" === d || d ? (m = parseFloat(e), !0 === d || isFinite(m) ? m || 0 : e) :
				e
		}
	});
	p.each(["height", "width"], function(b, c) {
		p.cssHooks[c] = {
			get: function(b, d, g) {
				if (d) return !ld.test(p.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? Z(b, c, g) : pc(b, md, function() {
					return Z(b, c, g)
				})
			},
			set: function(b, d, g) {
				var e, m = g && Cb(b);
				g = g && H(b, c, g, "border-box" === p.css(b, "boxSizing", !1, m), m);
				return g && (e = nb.exec(d)) && "px" !== (e[3] || "px") && (b.style[c] = d, d = p.css(b, c)), C(b, d, g)
			}
		}
	});
	p.cssHooks.marginLeft = x(da.reliableMarginLeft, function(b, c) {
		if (c) return (parseFloat(q(b, "marginLeft")) ||
			b.getBoundingClientRect().left - pc(b, {
				marginLeft: 0
			}, function() {
				return b.getBoundingClientRect().left
			})) + "px"
	});
	p.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(b, c) {
		p.cssHooks[b + c] = {
			expand: function(d) {
				var g = 0,
					e = {};
				for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > g; g++) e[b + Ta[g] + c] = d[g] || d[g - 2] || d[0];
				return e
			}
		};
		bc.test(b) || (p.cssHooks[b + c].set = C)
	});
	p.fn.extend({
		css: function(b, c) {
			return Ja(this, function(b, c, d) {
				var g, e = {},
					m = 0;
				if (Array.isArray(c)) {
					d = Cb(b);
					for (g = c.length; m < g; m++) e[c[m]] = p.css(b, c[m], !1,
						d);
					return e
				}
				return void 0 !== d ? p.style(b, c, d) : p.css(b, c)
			}, b, c, 1 < arguments.length)
		}
	});
	p.Tween = R;
	R.prototype = {
		constructor: R,
		init: function(b, c, d, g, e, m) {
			this.elem = b;
			this.prop = d;
			this.easing = e || p.easing._default;
			this.options = c;
			this.start = this.now = this.cur();
			this.end = g;
			this.unit = m || (p.cssNumber[d] ? "" : "px")
		},
		cur: function() {
			var b = R.propHooks[this.prop];
			return b && b.get ? b.get(this) : R.propHooks._default.get(this)
		},
		run: function(b) {
			var c, d = R.propHooks[this.prop];
			return this.options.duration ? this.pos = c = p.easing[this.easing](b,
				this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : R.propHooks._default.set(this), this
		}
	};
	R.prototype.init.prototype = R.prototype;
	R.propHooks = {
		_default: {
			get: function(b) {
				var c;
				return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = p.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0)
			},
			set: function(b) {
				p.fx.step[b.prop] ? p.fx.step[b.prop](b) :
					1 !== b.elem.nodeType || null == b.elem.style[p.cssProps[b.prop]] && !p.cssHooks[b.prop] ? b.elem[b.prop] = b.now : p.style(b.elem, b.prop, b.now + b.unit)
			}
		}
	};
	R.propHooks.scrollTop = R.propHooks.scrollLeft = {
		set: function(b) {
			b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
		}
	};
	p.easing = {
		linear: function(b) {
			return b
		},
		swing: function(b) {
			return 0.5 - Math.cos(b * Math.PI) / 2
		},
		_default: "swing"
	};
	p.fx = R.prototype.init;
	p.fx.step = {};
	var cb, Db, nd = /^(?:toggle|show|hide)$/,
		od = /queueHooks$/;
	p.Animation = p.extend(N, {
		tweeners: {
			"*": [function(b,
				c) {
				var d = this.createTween(b, c);
				return B(d.elem, b, nb.exec(c), d), d
			}]
		},
		tweener: function(b, c) {
			p.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(ua);
			for (var d, g = 0, e = b.length; g < e; g++) d = b[g], N.tweeners[d] = N.tweeners[d] || [], N.tweeners[d].unshift(c)
		},
		prefilters: [function(b, c, d) {
			var g, e, m, f, q, j, s, l, N = "width" in c || "height" in c,
				r = this,
				x = {},
				C = b.style,
				V = b.nodeType && Bb(b),
				K = S.get(b, "fxshow");
			d.queue || (f = p._queueHooks(b, "fx"), null == f.unqueued && (f.unqueued = 0, q = f.empty.fire, f.empty.fire = function() {
					f.unqueued || q()
				}), f.unqueued++,
				r.always(function() {
					r.always(function() {
						f.unqueued--;
						p.queue(b, "fx").length || f.empty.fire()
					})
				}));
			for (g in c)
				if (e = c[g], nd.test(e)) {
					if (delete c[g], m = m || "toggle" === e, e === (V ? "hide" : "show")) {
						if ("show" !== e || !K || void 0 === K[g]) continue;
						V = !0
					}
					x[g] = K && K[g] || p.style(b, g)
				}
			if (j = !p.isEmptyObject(c), j || !p.isEmptyObject(x))
				for (g in N && 1 === b.nodeType && (d.overflow = [C.overflow, C.overflowX, C.overflowY], s = K && K.display, null == s && (s = S.get(b, "display")), l = p.css(b, "display"), "none" === l && (s ? l = s : (I([b], !0), s = b.style.display ||
						s, l = p.css(b, "display"), I([b]))), ("inline" === l || "inline-block" === l && null != s) && "none" === p.css(b, "float") && (j || (r.done(function() {
						C.display = s
					}), null == s && (l = C.display, s = "none" === l ? "" : l)), C.display = "inline-block")), d.overflow && (C.overflow = "hidden", r.always(function() {
						C.overflow = d.overflow[0];
						C.overflowX = d.overflow[1];
						C.overflowY = d.overflow[2]
					})), j = !1, x) j || (K ? "hidden" in K && (V = K.hidden) : K = S.access(b, "fxshow", {
					display: s
				}), m && (K.hidden = !V), V && I([b], !0), r.done(function() {
					V || I([b]);
					S.remove(b, "fxshow");
					for (g in x) p.style(b,
						g, x[g])
				})), j = u(V ? K[g] : 0, g, r), g in K || (K[g] = j.start, V && (j.end = j.start, j.start = 0))
		}],
		prefilter: function(b, c) {
			c ? N.prefilters.unshift(b) : N.prefilters.push(b)
		}
	});
	p.speed = function(b, c, d) {
		var g = b && "object" == typeof b ? p.extend({}, b) : {
			complete: d || !d && c || p.isFunction(b) && b,
			duration: b,
			easing: d && c || c && !p.isFunction(c) && c
		};
		return p.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in p.fx.speeds ? g.duration = p.fx.speeds[g.duration] : g.duration = p.fx.speeds._default), null != g.queue && !0 !== g.queue || (g.queue =
			"fx"), g.old = g.complete, g.complete = function() {
			p.isFunction(g.old) && g.old.call(this);
			g.queue && p.dequeue(this, g.queue)
		}, g
	};
	p.fn.extend({
		fadeTo: function(b, c, d, g) {
			return this.filter(Bb).css("opacity", 0).show().end().animate({
				opacity: c
			}, b, d, g)
		},
		animate: function(b, c, d, g) {
			var e = p.isEmptyObject(b),
				m = p.speed(c, d, g);
			c = function() {
				var c = N(this, p.extend({}, b), m);
				(e || S.get(this, "finish")) && c.stop(!0)
			};
			return c.finish = c, e || !1 === m.queue ? this.each(c) : this.queue(m.queue, c)
		},
		stop: function(b, c, d) {
			var g = function(b) {
				var c =
					b.stop;
				delete b.stop;
				c(d)
			};
			return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function() {
				var c = !0,
					e = null != b && b + "queueHooks",
					m = p.timers,
					u = S.get(this);
				if (e) u[e] && u[e].stop && g(u[e]);
				else
					for (e in u) u[e] && u[e].stop && od.test(e) && g(u[e]);
				for (e = m.length; e--;) m[e].elem !== this || null != b && m[e].queue !== b || (m[e].anim.stop(d), c = !1, m.splice(e, 1));
				!c && d || p.dequeue(this, b)
			})
		},
		finish: function(b) {
			return !1 !== b && (b = b || "fx"), this.each(function() {
				var c, d = S.get(this),
					g = d[b + "queue"];
				c = d[b + "queueHooks"];
				var e = p.timers,
					m = g ? g.length : 0;
				d.finish = !0;
				p.queue(this, b, []);
				c && c.stop && c.stop.call(this, !0);
				for (c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
				for (c = 0; c < m; c++) g[c] && g[c].finish && g[c].finish.call(this);
				delete d.finish
			})
		}
	});
	p.each(["toggle", "show", "hide"], function(b, c) {
		var d = p.fn[c];
		p.fn[c] = function(b, g, e) {
			return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(K(c, !0), b, g, e)
		}
	});
	p.each({
		slideDown: K("show"),
		slideUp: K("hide"),
		slideToggle: K("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(b, c) {
		p.fn[b] = function(b, d, g) {
			return this.animate(c, b, d, g)
		}
	});
	p.timers = [];
	p.fx.tick = function() {
		var b, c = 0,
			d = p.timers;
		for (cb = p.now(); c < d.length; c++) b = d[c], b() || d[c] !== b || d.splice(c--, 1);
		d.length || p.fx.stop();
		cb = void 0
	};
	p.fx.timer = function(b) {
		p.timers.push(b);
		p.fx.start()
	};
	p.fx.interval = 13;
	p.fx.start = function() {
		Db || (Db = !0, m())
	};
	p.fx.stop = function() {
		Db = null
	};
	p.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	p.fn.delay = function(c, d) {
		return c = p.fx ? p.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function(d, g) {
			var e = b.setTimeout(d, c);
			g.stop = function() {
				b.clearTimeout(e)
			}
		})
	};
	var mb = X.createElement("input"),
		pd = X.createElement("select").appendChild(X.createElement("option"));
	mb.type = "checkbox";
	da.checkOn = "" !== mb.value;
	da.optSelected = pd.selected;
	mb = X.createElement("input");
	mb.value = "t";
	mb.type = "radio";
	da.radioValue = "t" === mb.value;
	var yc, yb = p.expr.attrHandle;
	p.fn.extend({
		attr: function(b, c) {
			return Ja(this, p.attr, b,
				c, 1 < arguments.length)
		},
		removeAttr: function(b) {
			return this.each(function() {
				p.removeAttr(this, b)
			})
		}
	});
	p.extend({
		attr: function(b, c, d) {
			var g, e, m = b.nodeType;
			if (3 !== m && 8 !== m && 2 !== m) return "undefined" == typeof b.getAttribute ? p.prop(b, c, d) : (1 === m && p.isXMLDoc(b) || (e = p.attrHooks[c.toLowerCase()] || (p.expr.match.bool.test(c) ? yc : void 0)), void 0 !== d ? null === d ? void p.removeAttr(b, c) : e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : (b.setAttribute(c, d + ""), d) : e && "get" in e && null !== (g = e.get(b, c)) ? g : (g = p.find.attr(b, c), null ==
				g ? void 0 : g))
		},
		attrHooks: {
			type: {
				set: function(b, c) {
					if (!da.radioValue && "radio" === c && e(b, "input")) {
						var d = b.value;
						return b.setAttribute("type", c), d && (b.value = d), c
					}
				}
			}
		},
		removeAttr: function(b, c) {
			var d, g = 0,
				e = c && c.match(ua);
			if (e && 1 === b.nodeType)
				for (; d = e[g++];) b.removeAttribute(d)
		}
	});
	yc = {
		set: function(b, c, d) {
			return !1 === c ? p.removeAttr(b, d) : b.setAttribute(d, d), d
		}
	};
	p.each(p.expr.match.bool.source.match(/\w+/g), function(b, c) {
		var d = yb[c] || p.find.attr;
		yb[c] = function(b, c, g) {
			var e, m, u = c.toLowerCase();
			return g || (m = yb[u],
				yb[u] = e, e = null != d(b, c, g) ? u : null, yb[u] = m), e
		}
	});
	var qd = /^(?:input|select|textarea|button)$/i,
		rd = /^(?:a|area)$/i;
	p.fn.extend({
		prop: function(b, c) {
			return Ja(this, p.prop, b, c, 1 < arguments.length)
		},
		removeProp: function(b) {
			return this.each(function() {
				delete this[p.propFix[b] || b]
			})
		}
	});
	p.extend({
		prop: function(b, c, d) {
			var g, e, m = b.nodeType;
			if (3 !== m && 8 !== m && 2 !== m) return 1 === m && p.isXMLDoc(b) || (c = p.propFix[c] || c, e = p.propHooks[c]), void 0 !== d ? e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : b[c] = d : e && "get" in e && null !== (g = e.get(b,
				c)) ? g : b[c]
		},
		propHooks: {
			tabIndex: {
				get: function(b) {
					var c = p.find.attr(b, "tabindex");
					return c ? parseInt(c, 10) : qd.test(b.nodeName) || rd.test(b.nodeName) && b.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});
	da.optSelected || (p.propHooks.selected = {
		get: function(b) {
			b = b.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		},
		set: function(b) {
			b = b.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	});
	p.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
		function() {
			p.propFix[this.toLowerCase()] = this
		});
	p.fn.extend({
		addClass: function(b) {
			var c, d, g, e, m, u, f = 0;
			if (p.isFunction(b)) return this.each(function(c) {
				p(this).addClass(b.call(this, c, ha(this)))
			});
			if ("string" == typeof b && b)
				for (c = b.match(ua) || []; d = this[f++];)
					if (e = ha(d), g = 1 === d.nodeType && " " + V(e) + " ") {
						for (u = 0; m = c[u++];) 0 > g.indexOf(" " + m + " ") && (g += m + " ");
						g = V(g);
						e !== g && d.setAttribute("class", g)
					}
			return this
		},
		removeClass: function(b) {
			var c, d, g, e, m, u, f = 0;
			if (p.isFunction(b)) return this.each(function(c) {
				p(this).removeClass(b.call(this,
					c, ha(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof b && b)
				for (c = b.match(ua) || []; d = this[f++];)
					if (e = ha(d), g = 1 === d.nodeType && " " + V(e) + " ") {
						for (u = 0; m = c[u++];)
							for (; - 1 < g.indexOf(" " + m + " ");) g = g.replace(" " + m + " ", " ");
						g = V(g);
						e !== g && d.setAttribute("class", g)
					}
			return this
		},
		toggleClass: function(b, c) {
			var d = typeof b;
			return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : p.isFunction(b) ? this.each(function(d) {
					p(this).toggleClass(b.call(this, d, ha(this), c), c)
				}) :
				this.each(function() {
					var c, g, e, m;
					if ("string" === d) {
						g = 0;
						e = p(this);
						for (m = b.match(ua) || []; c = m[g++];) e.hasClass(c) ? e.removeClass(c) : e.addClass(c)
					} else void 0 !== b && "boolean" !== d || (c = ha(this), c && S.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : S.get(this, "__className__") || ""))
				})
		},
		hasClass: function(b) {
			var c, d = 0;
			for (b = " " + b + " "; c = this[d++];)
				if (1 === c.nodeType && -1 < (" " + V(ha(c)) + " ").indexOf(b)) return !0;
			return !1
		}
	});
	var sd = /\r/g;
	p.fn.extend({
		val: function(b) {
			var c, d, g, e = this[0];
			if (arguments.length) return g = p.isFunction(b), this.each(function(d) {
				var e;
				1 === this.nodeType && (e = g ? b.call(this, d, p(this).val()) : b, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = p.map(e, function(b) {
					return null == b ? "" : b + ""
				})), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, e, "value") || (this.value = e))
			});
			if (e) return c = p.valHooks[e.type] || p.valHooks[e.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(e, "value")) ? d : (d = e.value, "string" == typeof d ?
				d.replace(sd, "") : null == d ? "" : d)
		}
	});
	p.extend({
		valHooks: {
			option: {
				get: function(b) {
					var c = p.find.attr(b, "value");
					return null != c ? c : V(p.text(b))
				}
			},
			select: {
				get: function(b) {
					var c, d, g = b.options,
						m = b.selectedIndex,
						u = "select-one" === b.type,
						f = u ? null : [],
						j = u ? m + 1 : g.length;
					for (d = 0 > m ? j : u ? m : 0; d < j; d++)
						if (c = g[d], (c.selected || d === m) && !c.disabled && (!c.parentNode.disabled || !e(c.parentNode, "optgroup"))) {
							if (b = p(c).val(), u) return b;
							f.push(b)
						}
					return f
				},
				set: function(b, c) {
					for (var d, g, e = b.options, m = p.makeArray(c), u = e.length; u--;) g =
						e[u], (g.selected = -1 < p.inArray(p.valHooks.option.get(g), m)) && (d = !0);
					return d || (b.selectedIndex = -1), m
				}
			}
		}
	});
	p.each(["radio", "checkbox"], function() {
		p.valHooks[this] = {
			set: function(b, c) {
				if (Array.isArray(c)) return b.checked = -1 < p.inArray(p(b).val(), c)
			}
		};
		da.checkOn || (p.valHooks[this].get = function(b) {
			return null === b.getAttribute("value") ? "on" : b.value
		})
	});
	var zc = /^(?:focusinfocus|focusoutblur)$/;
	p.extend(p.event, {
		trigger: function(c, d, g, e) {
			var m, u, f, j, q, s, l, N = [g || X],
				r = Ma.call(c, "type") ? c.type : c;
			m = Ma.call(c, "namespace") ?
				c.namespace.split(".") : [];
			if (u = f = g = g || X, 3 !== g.nodeType && 8 !== g.nodeType && !zc.test(r + p.event.triggered) && (-1 < r.indexOf(".") && (m = r.split("."), r = m.shift(), m.sort()), q = 0 > r.indexOf(":") && "on" + r, c = c[p.expando] ? c : new p.Event(r, "object" == typeof c && c), c.isTrigger = e ? 2 : 3, c.namespace = m.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = g), d = null == d ? [c] : p.makeArray(d, [c]), l = p.event.special[r] || {}, e || !l.trigger || !1 !== l.trigger.apply(g,
					d))) {
				if (!e && !l.noBubble && !p.isWindow(g)) {
					j = l.delegateType || r;
					for (zc.test(j + r) || (u = u.parentNode); u; u = u.parentNode) N.push(u), f = u;
					f === (g.ownerDocument || X) && N.push(f.defaultView || f.parentWindow || b)
				}
				for (m = 0;
					(u = N[m++]) && !c.isPropagationStopped();) c.type = 1 < m ? j : l.bindType || r, (s = (S.get(u, "events") || {})[c.type] && S.get(u, "handle")) && s.apply(u, d), (s = q && u[q]) && s.apply && Lb(u) && (c.result = s.apply(u, d), !1 === c.result && c.preventDefault());
				return c.type = r, e || c.isDefaultPrevented() || l._default && !1 !== l._default.apply(N.pop(),
					d) || !Lb(g) || q && p.isFunction(g[r]) && !p.isWindow(g) && (f = g[q], f && (g[q] = null), p.event.triggered = r, g[r](), p.event.triggered = void 0, f && (g[q] = f)), c.result
			}
		},
		simulate: function(b, c, d) {
			b = p.extend(new p.Event, d, {
				type: b,
				isSimulated: !0
			});
			p.event.trigger(b, null, c)
		}
	});
	p.fn.extend({
		trigger: function(b, c) {
			return this.each(function() {
				p.event.trigger(b, c, this)
			})
		},
		triggerHandler: function(b, c) {
			var d = this[0];
			if (d) return p.event.trigger(b, c, d, !0)
		}
	});
	p.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
		function(b, c) {
			p.fn[c] = function(b, d) {
				return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
			}
		});
	p.fn.extend({
		hover: function(b, c) {
			return this.mouseenter(b).mouseleave(c || b)
		}
	});
	da.focusin = "onfocusin" in b;
	da.focusin || p.each({
		focus: "focusin",
		blur: "focusout"
	}, function(b, c) {
		var d = function(b) {
			p.event.simulate(c, b.target, p.event.fix(b))
		};
		p.event.special[c] = {
			setup: function() {
				var g = this.ownerDocument || this,
					e = S.access(g, c);
				e || g.addEventListener(b, d, !0);
				S.access(g, c, (e || 0) + 1)
			},
			teardown: function() {
				var g =
					this.ownerDocument || this,
					e = S.access(g, c) - 1;
				e ? S.access(g, c, e) : (g.removeEventListener(b, d, !0), S.remove(g, c))
			}
		}
	});
	var zb = b.location,
		Ac = p.now(),
		Wb = /\?/;
	p.parseXML = function(c) {
		var d;
		if (!c || "string" != typeof c) return null;
		try {
			d = (new b.DOMParser).parseFromString(c, "text/xml")
		} catch (g) {
			d = void 0
		}
		return d && !d.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + c), d
	};
	var Pc = /\[\]$/,
		Bc = /\r?\n/g,
		td = /^(?:submit|button|image|reset|file)$/i,
		ud = /^(?:input|select|textarea|keygen)/i;
	p.param = function(b,
		c) {
		var d, g = [],
			e = function(b, c) {
				var d = p.isFunction(c) ? c() : c;
				g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "" : d)
			};
		if (Array.isArray(b) || b.jquery && !p.isPlainObject(b)) p.each(b, function() {
			e(this.name, this.value)
		});
		else
			for (d in b) ia(d, b[d], c, e);
		return g.join("&")
	};
	p.fn.extend({
		serialize: function() {
			return p.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var b = p.prop(this, "elements");
				return b ? p.makeArray(b) : this
			}).filter(function() {
				var b = this.type;
				return this.name &&
					!p(this).is(":disabled") && ud.test(this.nodeName) && !td.test(b) && (this.checked || !qc.test(b))
			}).map(function(b, c) {
				var d = p(this).val();
				return null == d ? null : Array.isArray(d) ? p.map(d, function(b) {
					return {
						name: c.name,
						value: b.replace(Bc, "\r\n")
					}
				}) : {
					name: c.name,
					value: d.replace(Bc, "\r\n")
				}
			}).get()
		}
	});
	var vd = /%20/g,
		wd = /#.*$/,
		xd = /([?&])_=[^&]*/,
		yd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		zd = /^(?:GET|HEAD)$/,
		Ad = /^\/\//,
		Cc = {},
		Sb = {},
		Dc = "*/".concat("*"),
		Xb = X.createElement("a");
	Xb.href = zb.href;
	p.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: zb.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(zb.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dc,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": p.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(b, c) {
			return c ? pa(pa(b, p.ajaxSettings), c) : pa(p.ajaxSettings, b)
		},
		ajaxPrefilter: la(Cc),
		ajaxTransport: la(Sb),
		ajax: function(c, d) {
			function g(c, d, f, q) {
				var N, r, F, R, ha = d;
				if (!s) {
					s = !0;
					j && b.clearTimeout(j);
					e = void 0;
					u = q || "";
					H.readyState = 0 < c ? 4 : 0;
					q = 200 <= c && 300 > c || 304 === c;
					if (f) {
						F = x;
						for (var y = H, n, A, Z, ia, B = F.contents, E = F.dataTypes;
							"*" === E[0];) E.shift(), void 0 === n && (n = F.mimeType || y.getResponseHeader("Content-Type"));
						if (n)
							for (A in B)
								if (B[A] && B[A].test(n)) {
									E.unshift(A);
									break
								}
						if (E[0] in f) Z = E[0];
						else {
							for (A in f) {
								if (!E[0] || F.converters[A + " " + E[0]]) {
									Z = A;
									break
								}
								ia || (ia = A)
							}
							Z = Z || ia
						}
						f = Z ? (Z !== E[0] && E.unshift(Z), f[Z]) : void 0;
						F = f
					}
					var pa;
					a: {
						f = x;n = F;A = H;Z = q;
						var la, G, oa;F = {};y = f.dataTypes.slice();
						if (y[1])
							for (la in f.converters) F[la.toLowerCase()] = f.converters[la];
						for (ia = y.shift(); ia;)
							if (f.responseFields[ia] && (A[f.responseFields[ia]] = n), !oa && Z && f.dataFilter && (n = f.dataFilter(n, f.dataType)), oa = ia, ia = y.shift())
								if ("*" === ia) ia = oa;
								else if ("*" !== oa && oa !== ia) {
							if (la = F[oa + " " + ia] || F["* " + ia], !la)
								for (pa in F)
									if (G = pa.split(" "), G[1] === ia && (la = F[oa + " " + G[0]] || F["* " + G[0]])) {
										!0 === la ? la = F[pa] : !0 !== F[pa] && (ia = G[0], y.unshift(G[1]));
										break
									}
							if (!0 !== la)
								if (la && f["throws"]) n = la(n);
								else try {
									n = la(n)
								} catch (va) {
									pa = {
										state: "parsererror",
										error: la ? va : "No conversion from " + oa + " to " + ia
									};
									break a
								}
						}
						pa = {
							state: "success",
							data: n
						}
					}
					F = pa;
					q ? (x.ifModified && (R = H.getResponseHeader("Last-Modified"), R && (p.lastModified[m] = R), R = H.getResponseHeader("etag"), R && (p.etag[m] =
						R)), 204 === c || "HEAD" === x.type ? ha = "nocontent" : 304 === c ? ha = "notmodified" : (ha = F.state, N = F.data, r = F.error, q = !r)) : (r = ha, !c && ha || (ha = "error", 0 > c && (c = 0)));
					H.status = c;
					H.statusText = (d || ha) + "";
					q ? K.resolveWith(C, [N, ha, H]) : K.rejectWith(C, [H, ha, r]);
					H.statusCode(z);
					z = void 0;
					l && V.trigger(q ? "ajaxSuccess" : "ajaxError", [H, x, q ? N : r]);
					t.fireWith(C, [H, ha]);
					l && (V.trigger("ajaxComplete", [H, x]), --p.active || p.event.trigger("ajaxStop"))
				}
			}
			"object" == typeof c && (d = c, c = void 0);
			d = d || {};
			var e, m, u, f, j, q, s, l, N, r, x = p.ajaxSetup({}, d),
				C =
				x.context || x,
				V = x.context && (C.nodeType || C.jquery) ? p(C) : p.event,
				K = p.Deferred(),
				t = p.Callbacks("once memory"),
				z = x.statusCode || {},
				F = {},
				R = {},
				ha = "canceled",
				H = {
					readyState: 0,
					getResponseHeader: function(b) {
						var c;
						if (s) {
							if (!f)
								for (f = {}; c = yd.exec(u);) f[c[1].toLowerCase()] = c[2];
							c = f[b.toLowerCase()]
						}
						return null == c ? null : c
					},
					getAllResponseHeaders: function() {
						return s ? u : null
					},
					setRequestHeader: function(b, c) {
						return null == s && (b = R[b.toLowerCase()] = R[b.toLowerCase()] || b, F[b] = c), this
					},
					overrideMimeType: function(b) {
						return null ==
							s && (x.mimeType = b), this
					},
					statusCode: function(b) {
						var c;
						if (b)
							if (s) H.always(b[H.status]);
							else
								for (c in b) z[c] = [z[c], b[c]];
						return this
					},
					abort: function(b) {
						b = b || ha;
						return e && e.abort(b), g(0, b), this
					}
				};
			if (K.promise(H), x.url = ((c || x.url || zb.href) + "").replace(Ad, zb.protocol + "//"), x.type = d.method || d.type || x.method || x.type, x.dataTypes = (x.dataType || "*").toLowerCase().match(ua) || [""], null == x.crossDomain) {
				q = X.createElement("a");
				try {
					q.href = x.url, q.href = q.href, x.crossDomain = Xb.protocol + "//" + Xb.host != q.protocol + "//" +
						q.host
				} catch (y) {
					x.crossDomain = !0
				}
			}
			if (x.data && x.processData && "string" != typeof x.data && (x.data = p.param(x.data, x.traditional)), oa(Cc, x, d, H), s) return H;
			(l = p.event && x.global) && 0 === p.active++ && p.event.trigger("ajaxStart");
			x.type = x.type.toUpperCase();
			x.hasContent = !zd.test(x.type);
			m = x.url.replace(wd, "");
			x.hasContent ? x.data && x.processData && 0 === (x.contentType || "").indexOf("application/x-www-form-urlencoded") && (x.data = x.data.replace(vd, "+")) : (r = x.url.slice(m.length), x.data && (m += (Wb.test(m) ? "&" : "?") + x.data, delete x.data), !1 === x.cache && (m = m.replace(xd, "$1"), r = (Wb.test(m) ? "&" : "?") + "_=" + Ac++ + r), x.url = m + r);
			x.ifModified && (p.lastModified[m] && H.setRequestHeader("If-Modified-Since", p.lastModified[m]), p.etag[m] && H.setRequestHeader("If-None-Match", p.etag[m]));
			(x.data && x.hasContent && !1 !== x.contentType || d.contentType) && H.setRequestHeader("Content-Type", x.contentType);
			H.setRequestHeader("Accept", x.dataTypes[0] && x.accepts[x.dataTypes[0]] ? x.accepts[x.dataTypes[0]] + ("*" !== x.dataTypes[0] ? ", " + Dc + "; q=0.01" : "") : x.accepts["*"]);
			for (N in x.headers) H.setRequestHeader(N,
				x.headers[N]);
			if (x.beforeSend && (!1 === x.beforeSend.call(C, H, x) || s)) return H.abort();
			if (ha = "abort", t.add(x.complete), H.done(x.success), H.fail(x.error), e = oa(Sb, x, d, H)) {
				if (H.readyState = 1, l && V.trigger("ajaxSend", [H, x]), s) return H;
				x.async && 0 < x.timeout && (j = b.setTimeout(function() {
					H.abort("timeout")
				}, x.timeout));
				try {
					s = !1, e.send(F, g)
				} catch (n) {
					if (s) throw n;
					g(-1, n)
				}
			} else g(-1, "No Transport");
			return H
		},
		getJSON: function(b, c, d) {
			return p.get(b, c, d, "json")
		},
		getScript: function(b, c) {
			return p.get(b, void 0, c, "script")
		}
	});
	p.each(["get", "post"], function(b, c) {
		p[c] = function(b, d, g, e) {
			return p.isFunction(d) && (e = e || g, g = d, d = void 0), p.ajax(p.extend({
				url: b,
				type: c,
				dataType: e,
				data: d,
				success: g
			}, p.isPlainObject(b) && b))
		}
	});
	p._evalUrl = function(b) {
		return p.ajax({
			url: b,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	};
	p.fn.extend({
		wrapAll: function(b) {
			var c;
			return this[0] && (p.isFunction(b) && (b = b.call(this[0])), c = p(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
				for (var b =
						this; b.firstElementChild;) b = b.firstElementChild;
				return b
			}).append(this)), this
		},
		wrapInner: function(b) {
			return p.isFunction(b) ? this.each(function(c) {
				p(this).wrapInner(b.call(this, c))
			}) : this.each(function() {
				var c = p(this),
					d = c.contents();
				d.length ? d.wrapAll(b) : c.append(b)
			})
		},
		wrap: function(b) {
			var c = p.isFunction(b);
			return this.each(function(d) {
				p(this).wrapAll(c ? b.call(this, d) : b)
			})
		},
		unwrap: function(b) {
			return this.parent(b).not("body").each(function() {
				p(this).replaceWith(this.childNodes)
			}), this
		}
	});
	p.expr.pseudos.hidden =
		function(b) {
			return !p.expr.pseudos.visible(b)
		};
	p.expr.pseudos.visible = function(b) {
		return !(!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length)
	};
	p.ajaxSettings.xhr = function() {
		try {
			return new b.XMLHttpRequest
		} catch (c) {}
	};
	var Bd = {
			"0": 200,
			1223: 204
		},
		Ab = p.ajaxSettings.xhr();
	da.cors = !!Ab && "withCredentials" in Ab;
	da.ajax = Ab = !!Ab;
	p.ajaxTransport(function(c) {
		var d, g;
		if (da.cors || Ab && !c.crossDomain) return {
			send: function(e, m) {
				var u, f = c.xhr();
				if (f.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
					for (u in c.xhrFields) f[u] =
						c.xhrFields[u];
				c.mimeType && f.overrideMimeType && f.overrideMimeType(c.mimeType);
				c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
				for (u in e) f.setRequestHeader(u, e[u]);
				d = function(b) {
					return function() {
						d && (d = g = f.onload = f.onerror = f.onabort = f.onreadystatechange = null, "abort" === b ? f.abort() : "error" === b ? "number" != typeof f.status ? m(0, "error") : m(f.status, f.statusText) : m(Bd[f.status] || f.status, f.statusText, "text" !== (f.responseType || "text") || "string" != typeof f.responseText ? {
							binary: f.response
						} : {
							text: f.responseText
						}, f.getAllResponseHeaders()))
					}
				};
				f.onload = d();
				g = f.onerror = d("error");
				void 0 !== f.onabort ? f.onabort = g : f.onreadystatechange = function() {
					4 === f.readyState && b.setTimeout(function() {
						d && g()
					})
				};
				d = d("abort");
				try {
					f.send(c.hasContent && c.data || null)
				} catch (q) {
					if (d) throw q;
				}
			},
			abort: function() {
				d && d()
			}
		}
	});
	p.ajaxPrefilter(function(b) {
		b.crossDomain && (b.contents.script = !1)
	});
	p.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(b) {
				return p.globalEval(b), b
			}
		}
	});
	p.ajaxPrefilter("script", function(b) {
		void 0 === b.cache && (b.cache = !1);
		b.crossDomain && (b.type = "GET")
	});
	p.ajaxTransport("script", function(b) {
		if (b.crossDomain) {
			var c, d;
			return {
				send: function(g, e) {
					c = p("<script>").prop({
						charset: b.scriptCharset,
						src: b.url
					}).on("load error", d = function(b) {
						c.remove();
						d = null;
						b && e("error" === b.type ? 404 : 200, b.type)
					});
					X.head.appendChild(c[0])
				},
				abort: function() {
					d && d()
				}
			}
		}
	});
	var Ec = [],
		Yb = /(=)\?(?=&|$)|\?\?/;
	p.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var b = Ec.pop() || p.expando + "_" + Ac++;
			return this[b] = !0, b
		}
	});
	p.ajaxPrefilter("json jsonp", function(c, d, g) {
		var e, m, u, f = !1 !== c.jsonp && (Yb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && Yb.test(c.data) && "data");
		if (f || "jsonp" === c.dataTypes[0]) return e = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, f ? c[f] = c[f].replace(Yb, "$1" + e) : !1 !== c.jsonp && (c.url += (Wb.test(c.url) ? "&" : "?") + c.jsonp +
			"=" + e), c.converters["script json"] = function() {
			return u || p.error(e + " was not called"), u[0]
		}, c.dataTypes[0] = "json", m = b[e], b[e] = function() {
			u = arguments
		}, g.always(function() {
			void 0 === m ? p(b).removeProp(e) : b[e] = m;
			c[e] && (c.jsonpCallback = d.jsonpCallback, Ec.push(e));
			u && p.isFunction(m) && m(u[0]);
			u = m = void 0
		}), "script"
	});
	var Cd = da,
		Fc, Gc = X.implementation.createHTMLDocument("").body;
	Fc = (Gc.innerHTML = "<form></form><form></form>", 2 === Gc.childNodes.length);
	Cd.createHTMLDocument = Fc;
	p.parseHTML = function(b, c, d) {
		if ("string" !=
			typeof b) return [];
		"boolean" == typeof c && (d = c, c = !1);
		var g, e, m;
		return c || (da.createHTMLDocument ? (c = X.implementation.createHTMLDocument(""), g = c.createElement("base"), g.href = X.location.href, c.head.appendChild(g)) : c = X), e = mc.exec(b), m = !d && [], e ? [c.createElement(e[1])] : (e = G([b], c, m), m && m.length && p(m).remove(), p.merge([], e.childNodes))
	};
	p.fn.load = function(b, c, d) {
		var g, e, m, u = this,
			f = b.indexOf(" ");
		return -1 < f && (g = V(b.slice(f)), b = b.slice(0, f)), p.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (e = "POST"), 0 <
			u.length && p.ajax({
				url: b,
				type: e || "GET",
				dataType: "html",
				data: c
			}).done(function(b) {
				m = arguments;
				u.html(g ? p("<div>").append(p.parseHTML(b)).find(g) : b)
			}).always(d && function(b, c) {
				u.each(function() {
					d.apply(this, m || [b.responseText, c, b])
				})
			}), this
	};
	p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
		p.fn[c] = function(b) {
			return this.on(c, b)
		}
	});
	p.expr.pseudos.animated = function(b) {
		return p.grep(p.timers, function(c) {
			return b === c.elem
		}).length
	};
	p.offset = {
		setOffset: function(b,
			c, d) {
			var g, e, m, u, f, q, j = p.css(b, "position"),
				s = p(b),
				l = {};
			"static" === j && (b.style.position = "relative");
			f = s.offset();
			m = p.css(b, "top");
			q = p.css(b, "left");
			("absolute" === j || "fixed" === j) && -1 < (m + q).indexOf("auto") ? (g = s.position(), u = g.top, e = g.left) : (u = parseFloat(m) || 0, e = parseFloat(q) || 0);
			p.isFunction(c) && (c = c.call(b, d, p.extend({}, f)));
			null != c.top && (l.top = c.top - f.top + u);
			null != c.left && (l.left = c.left - f.left + e);
			"using" in c ? c.using.call(b, l) : s.css(l)
		}
	};
	p.fn.extend({
		offset: function(b) {
			if (arguments.length) return void 0 ===
				b ? this : this.each(function(c) {
					p.offset.setOffset(this, b, c)
				});
			var c, d, g, e, m = this[0];
			if (m) return m.getClientRects().length ? (g = m.getBoundingClientRect(), c = m.ownerDocument, d = c.documentElement, e = c.defaultView, {
				top: g.top + e.pageYOffset - d.clientTop,
				left: g.left + e.pageXOffset - d.clientLeft
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if (this[0]) {
				var b, c, d = this[0],
					g = {
						top: 0,
						left: 0
					};
				return "fixed" === p.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), e(b[0], "html") || (g = b.offset()), g = {
					top: g.top +
						p.css(b[0], "borderTopWidth", !0),
					left: g.left + p.css(b[0], "borderLeftWidth", !0)
				}), {
					top: c.top - g.top - p.css(d, "marginTop", !0),
					left: c.left - g.left - p.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var b = this.offsetParent; b && "static" === p.css(b, "position");) b = b.offsetParent;
				return b || Ob
			})
		}
	});
	p.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(b, c) {
		var d = "pageYOffset" === c;
		p.fn[b] = function(g) {
			return Ja(this, function(b, g, e) {
				var m;
				return p.isWindow(b) ? m = b : 9 === b.nodeType &&
					(m = b.defaultView), void 0 === e ? m ? m[c] : b[g] : void(m ? m.scrollTo(d ? m.pageXOffset : e, d ? e : m.pageYOffset) : b[g] = e)
			}, b, g, arguments.length)
		}
	});
	p.each(["top", "left"], function(b, c) {
		p.cssHooks[c] = x(da.pixelPosition, function(b, d) {
			if (d) return d = q(b, c), Rb.test(d) ? p(b).position()[c] + "px" : d
		})
	});
	p.each({
		Height: "height",
		Width: "width"
	}, function(b, c) {
		p.each({
			padding: "inner" + b,
			content: c,
			"": "outer" + b
		}, function(d, g) {
			p.fn[g] = function(e, m) {
				var u = arguments.length && (d || "boolean" != typeof e),
					f = d || (!0 === e || !0 === m ? "margin" : "border");
				return Ja(this, function(c, d, e) {
					var m;
					return p.isWindow(c) ? 0 === g.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (m = c.documentElement, Math.max(c.body["scroll" + b], m["scroll" + b], c.body["offset" + b], m["offset" + b], m["client" + b])) : void 0 === e ? p.css(c, d, f) : p.style(c, d, e, f)
				}, c, u ? e : void 0, u)
			}
		})
	});
	p.fn.extend({
		bind: function(b, c, d) {
			return this.on(b, null, c, d)
		},
		unbind: function(b, c) {
			return this.off(b, null, c)
		},
		delegate: function(b, c, d, g) {
			return this.on(c, b, d, g)
		},
		undelegate: function(b,
			c, d) {
			return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
		}
	});
	p.holdReady = function(b) {
		b ? p.readyWait++ : p.ready(!0)
	};
	p.isArray = Array.isArray;
	p.parseJSON = JSON.parse;
	p.nodeName = e;
	"function" == typeof define && define.amd && define("jquery", [], function() {
		return p
	});
	var Dd = b.jQuery,
		Ed = b.$;
	return p.noConflict = function(c) {
		return b.$ === p && (b.$ = Ed), c && b.jQuery === p && (b.jQuery = Dd), p
	}, c || (b.jQuery = b.$ = p), p
});

function getInternetExplorerVersion() {
	var b = -1;
	"Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
	return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
	for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
		var f = c[d].split("=");
		if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1])
	}
};
this.jukebox = {};
jukebox.Player = function(b, c) {
	this.id = ++jukebox.__jukeboxId;
	this.origin = c || null;
	this.settings = {};
	for (var d in this.defaults) this.settings[d] = this.defaults[d];
	if ("[object Object]" === Object.prototype.toString.call(b))
		for (var f in b) this.settings[f] = b[f];
	"[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
	this.resource = this.isPlaying = null;
	this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] ||
		null;
	if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
	this.__init();
	return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
	defaults: {
		resources: [],
		autoplay: !1,
		spritemap: {},
		flashMediaElement: "./swf/FlashMediaElement.swf",
		timeout: 1E3
	},
	__addToManager: function() {
		!0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
	},
	__init: function() {
		var b = this,
			c = this.settings,
			d = {},
			f;
		jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
		if (!0 === d.html5audio) {
			this.context = new Audio;
			this.context.src = this.resource;
			if (null === this.origin) {
				var e = function(c) {
					b.__addToManager(c)
				};
				this.context.addEventListener("canplaythrough", e, !0);
				window.setTimeout(function() {
					b.context.removeEventListener("canplaythrough", e, !0);
					e("timeout")
				}, c.timeout)
			}
			this.context.autobuffer = !0;
			this.context.preload = !0;
			for (f in this.HTML5API) this[f] = this.HTML5API[f];
			1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
				Date.now() : +new Date, this.play(c.autoplay));
			1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
				null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
			}), window.addEventListener("pageshow", function() {
				b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
			}))
		} else if (!0 === d.flashaudio) {
			for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
			d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
			this.__initFlashContext(d);
			!0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
		} else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
	},
	__initFlashContext: function(b) {
		var c, d = this.settings.flashMediaElement,
			f, e = {
				flashvars: b.join("&"),
				quality: "high",
				bgcolor: "#000000",
				wmode: "transparent",
				allowscriptaccess: "always",
				allowfullscreen: "true"
			};
		if (navigator.userAgent.match(/MSIE/)) {
			c = document.createElement("div");
			document.getElementsByTagName("body")[0].appendChild(c);
			var j = document.createElement("object");
			j.id = "jukebox-flashstream-" + this.id;
			j.setAttribute("type", "application/x-shockwave-flash");
			j.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
			j.setAttribute("width", "0");
			j.setAttribute("height", "0");
			e.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
			e.flashvars = b.join("&amp;");
			for (f in e) b = document.createElement("param"), b.setAttribute("name", f), b.setAttribute("value", e[f]), j.appendChild(b);
			c.outerHTML = j.outerHTML;
			this.context = document.getElementById("jukebox-flashstream-" + this.id)
		} else {
			c =
				document.createElement("embed");
			c.id = "jukebox-flashstream-" + this.id;
			c.setAttribute("type", "application/x-shockwave-flash");
			c.setAttribute("width", "100");
			c.setAttribute("height", "100");
			e.play = !1;
			e.loop = !1;
			e.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
			for (f in e) c.setAttribute(f, e[f]);
			document.getElementsByTagName("body")[0].appendChild(c);
			this.context = c
		}
	},
	backgroundHackForiOS: function() {
		if (void 0 !== this.backgroundMusic) {
			var b = Date.now ? Date.now() : +new Date;
			void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
				b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
		}
	},
	play: function(b, c) {
		if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
		else {
			var d = this.settings.spritemap,
				f;
			if (void 0 !== d[b]) f = d[b].start;
			else if ("number" === typeof b) {
				f = b;
				for (var e in d)
					if (f >= d[e].start && f <=
						d[e].end) {
						b = e;
						break
					}
			}
			void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
		}
	},
	stop: function() {
		this.__lastPosition = 0;
		this.isPlaying = null;
		this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
		return !0
	},
	pause: function() {
		this.isPlaying = null;
		this.__lastPosition = this.getCurrentTime();
		this.context.pause();
		return this.__lastPosition
	},
	resume: function(b) {
		b = "number" ===
			typeof b ? b : this.__lastPosition;
		if (null !== b) return this.play(b), this.__lastPosition = null, !0;
		this.context.play();
		return !1
	},
	HTML5API: {
		getVolume: function() {
			return this.context.volume || 1
		},
		setVolume: function(b) {
			this.context.volume = b;
			return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
		},
		getCurrentTime: function() {
			return this.context.currentTime || 0
		},
		setCurrentTime: function(b) {
			try {
				return this.context.currentTime = b, !0
			} catch (c) {
				return !1
			}
		}
	},
	FLASHAPI: {
		getVolume: function() {
			return this.context && "function" === typeof this.context.getVolume ?
				this.context.getVolume() : 1
		},
		setVolume: function(b) {
			return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
		},
		getCurrentTime: function() {
			return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
		},
		setCurrentTime: function(b) {
			return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
		}
	}
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
	this.features = {};
	this.codecs = {};
	this.__players = {};
	this.__playersLength = 0;
	this.__clones = {};
	this.__queue = [];
	this.settings = {};
	for (var c in this.defaults) this.settings[c] = this.defaults[c];
	if ("[object Object]" === Object.prototype.toString.call(b))
		for (var d in b) this.settings[d] = b[d];
	this.__detectFeatures();
	jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
		jukebox.Manager.loop()
	}, 20) : !0
};
jukebox.Manager.prototype = {
	defaults: {
		useFlash: !1,
		useGameLoop: !1
	},
	__detectFeatures: function() {
		var b = window.Audio && new Audio;
		if (b && b.canPlayType && !1 === this.settings.useFlash) {
			for (var c = [{
						e: "3gp",
						m: ["audio/3gpp", "audio/amr"]
					}, {
						e: "aac",
						m: ["audio/aac", "audio/aacp"]
					}, {
						e: "amr",
						m: ["audio/amr", "audio/3gpp"]
					}, {
						e: "caf",
						m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
					}, {
						e: "m4a",
						m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
					}, {
						e: "mp3",
						m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
					}, {
						e: "mpga",
						m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
					}, {
						e: "mp4",
						m: ["audio/mp4", "video/mp4"]
					}, {
						e: "ogg",
						m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
					}, {
						e: "wav",
						m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
					}, {
						e: "webm",
						m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
					}],
					d, f, e = 0, j = c.length; e < j; e++)
				if (f = c[e].e, c[e].m.length && "object" === typeof c[e].m)
					for (var n = 0, l = c[e].m.length; n < l; n++)
						if (d = c[e].m[n], "" !== b.canPlayType(d)) {
							this.codecs[f] = d;
							break
						} else this.codecs[f] || (this.codecs[f] = !1);
			this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
			this.features.channels = 8;
			b.volume = 0.1337;
			this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
			navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
		}
		this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
		if (window.ActiveXObject) try {
			new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
		} catch (g) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
		!0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
			this.features.volume = !0, this.features.channels = 1)
	},
	__getPlayerById: function(b) {
		return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
	},
	__getClone: function(b, c) {
		for (var d in this.__clones) {
			var f = this.__clones[d];
			if (null === f.isPlaying && f.origin === b) return f
		}
		if ("[object Object]" === Object.prototype.toString.call(c)) {
			d = {};
			for (var e in c) d[e] = c[e];
			d.autoplay = !1;
			e = new jukebox.Player(d, b);
			e.isClone = !0;
			e.wasReady = !1;
			return this.__clones[e.id] = e
		}
		return null
	},
	loop: function() {
		if (0 !== this.__playersLength)
			if (this.__queue.length &&
				this.__playersLength < this.features.channels) {
				var b = this.__queue[0],
					c = this.__getPlayerById(b.origin);
				if (null !== c) {
					var d = this.__getClone(b.origin, c.settings);
					null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
				}
				this.__queue.splice(0, 1)
			} else
				for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
					c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
	},
	getPlayableResource: function(b) {
		"[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
		for (var c = 0, d = b.length; c < d; c++) {
			var f = b[c],
				e = f.match(/\.([^\.]*)$/)[1];
			if (e && this.codecs[e]) return f
		}
		return null
	},
	add: function(b) {
		return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
	},
	remove: function(b) {
		return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
	},
	addToQueue: function(b, c) {
		return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
			pointer: b,
			origin: c
		}), !0) : !1
	}
};
(function() {
	var b = function() {
		this.init()
	};
	b.prototype = {
		init: function() {
			var b = this || c;
			b._counter = 1E3;
			b._codecs = {};
			b._howls = [];
			b._muted = !1;
			b._volume = 1;
			b._canPlayEvent = "canplaythrough";
			b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
			b.masterGain = null;
			b.noAudio = !1;
			b.usingWebAudio = !0;
			b.autoSuspend = !0;
			b.ctx = null;
			b.mobileAutoEnable = !0;
			b._setup();
			return b
		},
		volume: function(b) {
			var d = this || c;
			b = parseFloat(b);
			d.ctx || l();
			if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
				d._volume = b;
				if (d._muted) return d;
				d.usingWebAudio && d.masterGain.gain.setValueAtTime(b, c.ctx.currentTime);
				for (var e = 0; e < d._howls.length; e++)
					if (!d._howls[e]._webAudio)
						for (var f = d._howls[e]._getSoundIds(), j = 0; j < f.length; j++) {
							var n = d._howls[e]._soundById(f[j]);
							n && n._node && (n._node.volume = n._volume * b)
						}
				return d
			}
			return d._volume
		},
		mute: function(b) {
			var d = this || c;
			d.ctx || l();
			d._muted = b;
			d.usingWebAudio && d.masterGain.gain.setValueAtTime(b ? 0 : d._volume, c.ctx.currentTime);
			for (var e = 0; e < d._howls.length; e++)
				if (!d._howls[e]._webAudio)
					for (var f = d._howls[e]._getSoundIds(),
							j = 0; j < f.length; j++) {
						var n = d._howls[e]._soundById(f[j]);
						n && n._node && (n._node.muted = b ? !0 : n._muted)
					}
			return d
		},
		unload: function() {
			for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
			b.usingWebAudio && (b.ctx && "undefined" !== typeof b.ctx.close) && (b.ctx.close(), b.ctx = null, l());
			return b
		},
		codecs: function(b) {
			return (this || c)._codecs[b.replace(/^x-/, "")]
		},
		_setup: function() {
			var b = this || c;
			b.state = b.ctx ? b.ctx.state || "running" : "running";
			b._autoSuspend();
			if (!b.usingWebAudio)
				if ("undefined" !== typeof Audio) try {
					var d =
						new Audio;
					"undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
				} catch (e) {
					b.noAudio = !0
				} else b.noAudio = !0;
			try {
				d = new Audio, d.muted && (b.noAudio = !0)
			} catch (f) {}
			b.noAudio || b._setupCodecs();
			return b
		},
		_setupCodecs: function() {
			var b = this || c,
				d = null;
			try {
				d = "undefined" !== typeof Audio ? new Audio : null
			} catch (e) {
				return b
			}
			if (!d || "function" !== typeof d.canPlayType) return b;
			var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
				j = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
				j = j && 33 > parseInt(j[0].split("/")[1],
					10);
			b._codecs = {
				mp3: !(j || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
				mpeg: !!f,
				opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
				ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
				oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
				wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
				aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
				caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
				m4a: !!(d.canPlayType("audio/x-m4a;") ||
					d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
				mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
				weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
				webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
				dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
				flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
			};
			return b
		},
		_enableMobileAudio: function() {
			var b = this || c,
				d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
				e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
			if (!b._mobileEnabled && b.ctx && (d || e)) {
				b._mobileEnabled = !1;
				!b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
				b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
				var f = function() {
					c._autoResume();
					var d = b.ctx.createBufferSource();
					d.buffer = b._scratchBuffer;
					d.connect(b.ctx.destination);
					"undefined" === typeof d.start ? d.noteOn(0) : d.start(0);
					"function" === typeof b.ctx.resume && b.ctx.resume();
					d.onended = function() {
						d.disconnect(0);
						b._mobileEnabled = !0;
						b.mobileAutoEnable = !1;
						document.removeEventListener("touchstart", f, !0);
						document.removeEventListener("touchend", f, !0)
					}
				};
				document.addEventListener("touchstart", f, !0);
				document.addEventListener("touchend", f, !0);
				return b
			}
		},
		_autoSuspend: function() {
			var b = this;
			if (b.autoSuspend && b.ctx && "undefined" !==
				typeof b.ctx.suspend && c.usingWebAudio) {
				for (var d = 0; d < b._howls.length; d++)
					if (b._howls[d]._webAudio)
						for (var e = 0; e < b._howls[d]._sounds.length; e++)
							if (!b._howls[d]._sounds[e]._paused) return b;
				b._suspendTimer && clearTimeout(b._suspendTimer);
				b._suspendTimer = setTimeout(function() {
					b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
						b.state = "suspended";
						b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
					}))
				}, 3E4);
				return b
			}
		},
		_autoResume: function() {
			var b =
				this;
			if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.ctx.resume().then(function() {
				b.state = "running";
				for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
			}), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
		}
	};
	var c = new b,
		d = function(b) {
			!b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") :
				this.init(b)
		};
	d.prototype = {
		init: function(b) {
			var d = this;
			c.ctx || l();
			d._autoplay = b.autoplay || !1;
			d._format = "string" !== typeof b.format ? b.format : [b.format];
			d._html5 = b.html5 || !1;
			d._muted = b.mute || !1;
			d._loop = b.loop || !1;
			d._pool = b.pool || 5;
			d._preload = "boolean" === typeof b.preload ? b.preload : !0;
			d._rate = b.rate || 1;
			d._sprite = b.sprite || {};
			d._src = "string" !== typeof b.src ? b.src : [b.src];
			d._volume = void 0 !== b.volume ? b.volume : 1;
			d._xhrWithCredentials = b.xhrWithCredentials || !1;
			d._duration = 0;
			d._state = "unloaded";
			d._sounds = [];
			d._endTimers = {};
			d._queue = [];
			d._playLock = !1;
			d._onend = b.onend ? [{
				fn: b.onend
			}] : [];
			d._onfade = b.onfade ? [{
				fn: b.onfade
			}] : [];
			d._onload = b.onload ? [{
				fn: b.onload
			}] : [];
			d._onloaderror = b.onloaderror ? [{
				fn: b.onloaderror
			}] : [];
			d._onplayerror = b.onplayerror ? [{
				fn: b.onplayerror
			}] : [];
			d._onpause = b.onpause ? [{
				fn: b.onpause
			}] : [];
			d._onplay = b.onplay ? [{
				fn: b.onplay
			}] : [];
			d._onstop = b.onstop ? [{
				fn: b.onstop
			}] : [];
			d._onmute = b.onmute ? [{
				fn: b.onmute
			}] : [];
			d._onvolume = b.onvolume ? [{
				fn: b.onvolume
			}] : [];
			d._onrate = b.onrate ? [{
				fn: b.onrate
			}] : [];
			d._onseek = b.onseek ?
				[{
					fn: b.onseek
				}] : [];
			d._onresume = [];
			d._webAudio = c.usingWebAudio && !d._html5;
			"undefined" !== typeof c.ctx && (c.ctx && c.mobileAutoEnable) && c._enableMobileAudio();
			c._howls.push(d);
			d._autoplay && d._queue.push({
				event: "play",
				action: function() {
					d.play()
				}
			});
			d._preload && d.load();
			return d
		},
		load: function() {
			var b = null;
			if (c.noAudio) this._emit("loaderror", null, "No audio support.");
			else {
				"string" === typeof this._src && (this._src = [this._src]);
				for (var d = 0; d < this._src.length; d++) {
					var l, y;
					if (this._format && this._format[d]) l = this._format[d];
					else {
						y = this._src[d];
						if ("string" !== typeof y) {
							this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
							continue
						}(l = /^data:audio\/([^;,]+);/i.exec(y)) || (l = /\.([^.]+)$/.exec(y.split("?", 1)[0]));
						l && (l = l[1].toLowerCase())
					}
					l || console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
					if (l && c.codecs(l)) {
						b = this._src[d];
						break
					}
				}
				if (b) {
					this._src = b;
					this._state = "loading";
					"https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
					new f(this);
					if (this._webAudio) {
						var A = this,
							B = A._src;
						if (e[B]) A._duration = e[B].duration, n(A);
						else if (/^data:[^;]+;base64,/.test(B)) {
							b = atob(B.split(",")[1]);
							d = new Uint8Array(b.length);
							for (l = 0; l < b.length; ++l) d[l] = b.charCodeAt(l);
							j(d.buffer, A)
						} else {
							var I = new XMLHttpRequest;
							I.open("GET", B, !0);
							I.withCredentials = A._xhrWithCredentials;
							I.responseType = "arraybuffer";
							I.onload = function() {
								var b = (I.status + "")[0];
								"0" !== b && "2" !== b && "3" !== b ? A._emit("loaderror", null, "Failed loading audio file with status: " +
									I.status + ".") : j(I.response, A)
							};
							I.onerror = function() {
								A._webAudio && (A._html5 = !0, A._webAudio = !1, A._sounds = [], delete e[B], A.load())
							};
							try {
								I.send()
							} catch (D) {
								I.onerror()
							}
						}
					}
					return this
				}
				this._emit("loaderror", null, "No codec support for selected audio sources.")
			}
		},
		play: function(b, d) {
			var e = this,
				f = null;
			if ("number" === typeof b) f = b, b = null;
			else {
				if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
				if ("undefined" === typeof b) {
					b = "__default";
					for (var j = 0, l = 0; l < e._sounds.length; l++) e._sounds[l]._paused &&
						!e._sounds[l]._ended && (j++, f = e._sounds[l]._id);
					1 === j ? b = null : f = null
				}
			}
			var n = f ? e._soundById(f) : e._inactiveSound();
			if (!n) return null;
			f && !b && (b = n._sprite || "__default");
			if ("loaded" !== e._state) {
				n._sprite = b;
				n._ended = !1;
				var D = n._id;
				e._queue.push({
					event: "play",
					action: function() {
						e.play(D)
					}
				});
				return D
			}
			if (f && !n._paused) return d || e._loadQueue("play"), n._id;
			e._webAudio && c._autoResume();
			var t = Math.max(0, 0 < n._seek ? n._seek : e._sprite[b][0] / 1E3),
				G = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1E3 - t),
				E = 1E3 * G / Math.abs(n._rate);
			n._paused = !1;
			n._ended = !1;
			n._sprite = b;
			n._seek = t;
			n._start = e._sprite[b][0] / 1E3;
			n._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
			n._loop = !(!n._loop && !e._sprite[b][2]);
			var L = n._node;
			if (e._webAudio) f = function() {
				e._refreshBuffer(n);
				L.gain.setValueAtTime(n._muted || e._muted ? 0 : n._volume, c.ctx.currentTime);
				n._playStart = c.ctx.currentTime;
				"undefined" === typeof L.bufferSource.start ? n._loop ? L.bufferSource.noteGrainOn(0, t, 86400) : L.bufferSource.noteGrainOn(0, t, G) : n._loop ? L.bufferSource.start(0, t, 86400) : L.bufferSource.start(0,
					t, G);
				Infinity !== E && (e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), E));
				d || setTimeout(function() {
					e._emit("play", n._id)
				}, 0)
			}, "running" === c.state ? f() : (e.once("resume", f), e._clearTimer(n._id));
			else {
				var M = function() {
						L.currentTime = t;
						L.muted = n._muted || e._muted || c._muted || L.muted;
						L.volume = n._volume * c.volume();
						L.playbackRate = n._rate;
						try {
							var f = L.play();
							if ("undefined" !== typeof Promise && f instanceof Promise) {
								e._playLock = !0;
								var j = function() {
									e._playLock = !1;
									d || e._emit("play", n._id)
								};
								f.then(j, j)
							} else d || e._emit("play",
								n._id);
							L.playbackRate = n._rate;
							L.paused ? e._emit("playerror", n._id, "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.") : "__default" !== b || n._loop ? e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), E) : (e._endTimers[n._id] = function() {
								e._ended(n);
								L.removeEventListener("ended", e._endTimers[n._id], !1)
							}, L.addEventListener("ended", e._endTimers[n._id], !1))
						} catch (l) {
							e._emit("playerror", n._id, l)
						}
					},
					f = window && window.ejecta || !L.readyState &&
					c._navigator.isCocoonJS;
				if (3 <= L.readyState || f) M();
				else {
					var Q = function() {
						M();
						L.removeEventListener(c._canPlayEvent, Q, !1)
					};
					L.addEventListener(c._canPlayEvent, Q, !1);
					e._clearTimer(n._id)
				}
			}
			return n._id
		},
		pause: function(b, c) {
			var d = this;
			if ("loaded" !== d._state || d._playLock) return d._queue.push({
				event: "pause",
				action: function() {
					d.pause(b)
				}
			}), d;
			for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
				d._clearTimer(e[f]);
				var j = d._soundById(e[f]);
				if (j && !j._paused && (j._seek = d.seek(e[f]), j._rateSeek = 0, j._paused = !0, d._stopFade(e[f]),
						j._node))
					if (d._webAudio) {
						if (!j._node.bufferSource) continue;
						"undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0);
						d._cleanBuffer(j._node)
					} else(!isNaN(j._node.duration) || Infinity === j._node.duration) && j._node.pause();
				c || d._emit("pause", j ? j._id : null)
			}
			return d
		},
		stop: function(b, c) {
			var d = this;
			if ("loaded" !== d._state) return d._queue.push({
				event: "stop",
				action: function() {
					d.stop(b)
				}
			}), d;
			for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
				d._clearTimer(e[f]);
				var j =
					d._soundById(e[f]);
				if (j) {
					j._seek = j._start || 0;
					j._rateSeek = 0;
					j._paused = !0;
					j._ended = !0;
					d._stopFade(e[f]);
					if (j._node)
						if (d._webAudio) j._node.bufferSource && ("undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0), d._cleanBuffer(j._node));
						else if (!isNaN(j._node.duration) || Infinity === j._node.duration) j._node.currentTime = j._start || 0, j._node.pause();
					c || d._emit("stop", j._id)
				}
			}
			return d
		},
		mute: function(b, d) {
			var e = this;
			if ("loaded" !== e._state) return e._queue.push({
				event: "mute",
				action: function() {
					e.mute(b, d)
				}
			}), e;
			if ("undefined" === typeof d)
				if ("boolean" === typeof b) e._muted = b;
				else return e._muted;
			for (var f = e._getSoundIds(d), j = 0; j < f.length; j++) {
				var l = e._soundById(f[j]);
				l && (l._muted = b, l._interval && e._stopFade(l._id), e._webAudio && l._node ? l._node.gain.setValueAtTime(b ? 0 : l._volume, c.ctx.currentTime) : l._node && (l._node.muted = c._muted ? !0 : b), e._emit("mute", l._id))
			}
			return e
		},
		volume: function() {
			var b = this,
				d = arguments,
				e, f;
			if (0 === d.length) return b._volume;
			1 === d.length || 2 === d.length && "undefined" ===
				typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
			var j;
			if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
				if ("loaded" !== b._state) return b._queue.push({
					event: "volume",
					action: function() {
						b.volume.apply(b, d)
					}
				}), b;
				"undefined" === typeof f && (b._volume = e);
				f = b._getSoundIds(f);
				for (var l = 0; l < f.length; l++)
					if (j = b._soundById(f[l])) j._volume = e, d[2] || b._stopFade(f[l]), b._webAudio && j._node && !j._muted ? j._node.gain.setValueAtTime(e, c.ctx.currentTime) :
						j._node && !j._muted && (j._node.volume = e * c.volume()), b._emit("volume", j._id)
			} else return (j = f ? b._soundById(f) : b._sounds[0]) ? j._volume : 0;
			return b
		},
		fade: function(b, d, e, f) {
			var j = this;
			if ("loaded" !== j._state) return j._queue.push({
				event: "fade",
				action: function() {
					j.fade(b, d, e, f)
				}
			}), j;
			j.volume(b, f);
			for (var l = j._getSoundIds(f), n = 0; n < l.length; n++) {
				var D = j._soundById(l[n]);
				if (D) {
					f || j._stopFade(l[n]);
					if (j._webAudio && !D._muted) {
						var t = c.ctx.currentTime,
							G = t + e / 1E3;
						D._volume = b;
						D._node.gain.setValueAtTime(b, t);
						D._node.gain.linearRampToValueAtTime(d,
							G)
					}
					j._startFadeInterval(D, b, d, e, l[n], "undefined" === typeof f)
				}
			}
			return j
		},
		_startFadeInterval: function(b, c, d, e, f, j) {
			var l = this,
				n = c,
				t = d - c;
			f = Math.abs(t / 0.01);
			f = Math.max(4, 0 < f ? e / f : e);
			var G = Date.now();
			b._fadeTo = d;
			b._interval = setInterval(function() {
				var f = (Date.now() - G) / e;
				G = Date.now();
				n += t * f;
				n = Math.max(0, n);
				n = Math.min(1, n);
				n = Math.round(100 * n) / 100;
				l._webAudio ? b._volume = n : l.volume(n, b._id, !0);
				j && (l._volume = n);
				if (d < c && n <= d || d > c && n >= d) clearInterval(b._interval), b._interval = null, b._fadeTo = null, l.volume(d, b._id),
					l._emit("fade", b._id)
			}, f)
		},
		_stopFade: function(b) {
			var d = this._soundById(b);
			d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this.volume(d._fadeTo, b), d._fadeTo = null, this._emit("fade", b));
			return this
		},
		loop: function() {
			var b = arguments,
				c, d;
			if (0 === b.length) return this._loop;
			if (1 === b.length)
				if ("boolean" === typeof b[0]) this._loop = c = b[0];
				else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
			else 2 === b.length && (c = b[0], d =
				parseInt(b[1], 10));
			d = this._getSoundIds(d);
			for (var e = 0; e < d.length; e++)
				if (b = this._soundById(d[e]))
					if (b._loop = c, this._webAudio && (b._node && b._node.bufferSource) && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
			return this
		},
		rate: function() {
			var b = this,
				d = arguments,
				e, f;
			0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
			var j;
			if ("number" === typeof e) {
				if ("loaded" !== b._state) return b._queue.push({
					event: "rate",
					action: function() {
						b.rate.apply(b, d)
					}
				}), b;
				"undefined" === typeof f && (b._rate = e);
				f = b._getSoundIds(f);
				for (var l = 0; l < f.length; l++)
					if (j = b._soundById(f[l])) {
						j._rateSeek = b.seek(f[l]);
						j._playStart = b._webAudio ? c.ctx.currentTime : j._playStart;
						j._rate = e;
						b._webAudio && j._node && j._node.bufferSource ? j._node.bufferSource.playbackRate.setValueAtTime(e, c.ctx.currentTime) : j._node && (j._node.playbackRate = e);
						var n = b.seek(f[l]),
							n = 1E3 * ((b._sprite[j._sprite][0] +
								b._sprite[j._sprite][1]) / 1E3 - n) / Math.abs(j._rate);
						if (b._endTimers[f[l]] || !j._paused) b._clearTimer(f[l]), b._endTimers[f[l]] = setTimeout(b._ended.bind(b, j), n);
						b._emit("rate", j._id)
					}
			} else return (j = b._soundById(f)) ? j._rate : b._rate;
			return b
		},
		seek: function() {
			var b = this,
				d = arguments,
				e, f;
			0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : b._sounds.length && (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
			if ("undefined" ===
				typeof f) return b;
			if ("loaded" !== b._state) return b._queue.push({
				event: "seek",
				action: function() {
					b.seek.apply(b, d)
				}
			}), b;
			var j = b._soundById(f);
			if (j)
				if ("number" === typeof e && 0 <= e) {
					var l = b.playing(f);
					l && b.pause(f, !0);
					j._seek = e;
					j._ended = !1;
					b._clearTimer(f);
					l && b.play(f, !0);
					!b._webAudio && j._node && (j._node.currentTime = e);
					if (l && !b._webAudio) {
						var n = function() {
							b._playLock ? setTimeout(n, 0) : b._emit("seek", f)
						};
						setTimeout(n, 0)
					} else b._emit("seek", f)
				} else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - j._playStart :
					0, j._seek + ((j._rateSeek ? j._rateSeek - j._seek : 0) + e * Math.abs(j._rate))) : j._node.currentTime;
			return b
		},
		playing: function(b) {
			if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
			for (b = 0; b < this._sounds.length; b++)
				if (!this._sounds[b]._paused) return !0;
			return !1
		},
		duration: function(b) {
			var c = this._duration;
			(b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
			return c
		},
		state: function() {
			return this._state
		},
		unload: function() {
			for (var b = this._sounds, d = 0; d < b.length; d++) {
				b[d]._paused || this.stop(b[d]._id);
				this._webAudio || (/MSIE |Trident\//.test(c._navigator && c._navigator.userAgent) || (b[d]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
				delete b[d]._node;
				this._clearTimer(b[d]._id);
				var f = c._howls.indexOf(this);
				0 <= f && c._howls.splice(f, 1)
			}
			b = !0;
			for (d = 0; d < c._howls.length; d++)
				if (c._howls[d]._src === this._src) {
					b = !1;
					break
				}
			e && b && delete e[this._src];
			c.noAudio = !1;
			this._state = "unloaded";
			this._sounds = [];
			return null
		},
		on: function(b, c, d, e) {
			b = this["_on" + b];
			"function" === typeof c && b.push(e ? {
				id: d,
				fn: c,
				once: e
			} : {
				id: d,
				fn: c
			});
			return this
		},
		off: function(b, c, d) {
			var e = this["_on" + b],
				f = 0;
			"number" === typeof c && (d = c, c = null);
			if (c || d)
				for (f = 0; f < e.length; f++) {
					if (b = d === e[f].id, c === e[f].fn && b || !c && b) {
						e.splice(f, 1);
						break
					}
				} else if (b) this["_on" + b] = [];
				else {
					c = Object.keys(this);
					for (f = 0; f < c.length; f++) 0 === c[f].indexOf("_on") && Array.isArray(this[c[f]]) && (this[c[f]] = [])
				}
			return this
		},
		once: function(b, c, d) {
			this.on(b, c, d, 1);
			return this
		},
		_emit: function(b, c, d) {
			for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--)
				if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function(b) {
					b.call(this, c, d)
				}.bind(this, e[f].fn), 0), e[f].once && this.off(b, e[f].fn, e[f].id);
			this._loadQueue(b);
			return this
		},
		_loadQueue: function(b) {
			if (0 < this._queue.length) {
				var c = this._queue[0];
				c.event === b && (this._queue.shift(), this._loadQueue());
				b || c.action()
			}
			return this
		},
		_ended: function(b) {
			var d = b._sprite;
			if (!this._webAudio && b._node &&
				!b._node.paused && !b._node.ended && b._node.currentTime < b._stop) return setTimeout(this._ended.bind(this, b), 100), this;
			d = !(!b._loop && !this._sprite[d][2]);
			this._emit("end", b._id);
			!this._webAudio && d && this.stop(b._id, !0).play(b._id);
			if (this._webAudio && d) {
				this._emit("play", b._id);
				b._seek = b._start || 0;
				b._rateSeek = 0;
				b._playStart = c.ctx.currentTime;
				var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
				this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), e)
			}
			this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start ||
				0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
			!this._webAudio && !d && this.stop(b._id);
			return this
		},
		_clearTimer: function(b) {
			if (this._endTimers[b]) {
				if ("function" !== typeof this._endTimers[b]) clearTimeout(this._endTimers[b]);
				else {
					var c = this._soundById(b);
					c && c._node && c._node.removeEventListener("ended", this._endTimers[b], !1)
				}
				delete this._endTimers[b]
			}
			return this
		},
		_soundById: function(b) {
			for (var c = 0; c < this._sounds.length; c++)
				if (b === this._sounds[c]._id) return this._sounds[c];
			return null
		},
		_inactiveSound: function() {
			this._drain();
			for (var b = 0; b < this._sounds.length; b++)
				if (this._sounds[b]._ended) return this._sounds[b].reset();
			return new f(this)
		},
		_drain: function() {
			var b = this._pool,
				c = 0,
				d = 0;
			if (!(this._sounds.length < b)) {
				for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
				for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
			}
		},
		_getSoundIds: function(b) {
			if ("undefined" ===
				typeof b) {
				b = [];
				for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
				return b
			}
			return [b]
		},
		_refreshBuffer: function(b) {
			b._node.bufferSource = c.ctx.createBufferSource();
			b._node.bufferSource.buffer = e[this._src];
			b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
			if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
			b._node.bufferSource.playbackRate.setValueAtTime(b._rate, c.ctx.currentTime);
			return this
		},
		_cleanBuffer: function(b) {
			if (c._scratchBuffer) {
				b.bufferSource.onended = null;
				b.bufferSource.disconnect(0);
				try {
					b.bufferSource.buffer = c._scratchBuffer
				} catch (d) {}
			}
			b.bufferSource = null;
			return this
		}
	};
	var f = function(b) {
		this._parent = b;
		this.init()
	};
	f.prototype = {
		init: function() {
			var b = this._parent;
			this._muted = b._muted;
			this._loop = b._loop;
			this._volume = b._volume;
			this._rate = b._rate;
			this._seek = 0;
			this._ended = this._paused = !0;
			this._sprite = "__default";
			this._id = ++c._counter;
			b._sounds.push(this);
			this.create();
			return this
		},
		create: function() {
			var b = this._parent,
				d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
			b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent,
				this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
			return this
		},
		reset: function() {
			var b = this._parent;
			this._muted = b._muted;
			this._loop = b._loop;
			this._volume = b._volume;
			this._rate = b._rate;
			this._rateSeek = this._seek = 0;
			this._ended = this._paused = !0;
			this._sprite = "__default";
			this._id = ++c._counter;
			return this
		},
		_errorListener: function() {
			this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
			this._node.removeEventListener("error",
				this._errorFn, !1)
		},
		_loadListener: function() {
			var b = this._parent;
			b._duration = Math.ceil(10 * this._node.duration) / 10;
			0 === Object.keys(b._sprite).length && (b._sprite = {
				__default: [0, 1E3 * b._duration]
			});
			"loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
			this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
		}
	};
	var e = {},
		j = function(b, d) {
			c.ctx.decodeAudioData(b, function(b) {
				b && 0 < d._sounds.length && (e[d._src] = b, n(d, b))
			}, function() {
				d._emit("loaderror", null, "Decoding audio data failed.")
			})
		},
		n = function(b, c) {
			c && !b._duration && (b._duration = c.duration);
			0 === Object.keys(b._sprite).length && (b._sprite = {
				__default: [0, 1E3 * b._duration]
			});
			"loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
		},
		l = function() {
			try {
				"undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
			} catch (b) {
				c.usingWebAudio = !1
			}
			var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
				e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
				e = e ? parseInt(e[1], 10) : null;
			if (d && (e && 9 > e) && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
			c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.setValueAtTime(c._muted ? 0 : 1, c.ctx.currentTime), c.masterGain.connect(c.ctx.destination));
			c._setup()
		};
	"function" === typeof define && define.amd && define([], function() {
		return {
			Howler: c,
			Howl: d
		}
	});
	"undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
	"undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = f) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = f)
})();
(function() {
	HowlerGlobal.prototype._pos = [0, 0, 0];
	HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
	HowlerGlobal.prototype.stereo = function(b) {
		if (!this.ctx || !this.ctx.listener) return this;
		for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
		return this
	};
	HowlerGlobal.prototype.pos = function(b, c, d) {
		if (!this.ctx || !this.ctx.listener) return this;
		c = "number" !== typeof c ? this._pos[1] : c;
		d = "number" !== typeof d ? this._pos[2] : d;
		if ("number" === typeof b) this._pos = [b, c, d], "undefined" !== typeof this.ctx.listener.positionX ?
			(this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
		else return this._pos;
		return this
	};
	HowlerGlobal.prototype.orientation = function(b, c, d, f, g, r) {
		if (!this.ctx || !this.ctx.listener) return this;
		var z = this._orientation;
		c = "number" !==
			typeof c ? z[1] : c;
		d = "number" !== typeof d ? z[2] : d;
		f = "number" !== typeof f ? z[3] : f;
		g = "number" !== typeof g ? z[4] : g;
		r = "number" !== typeof r ? z[5] : r;
		if ("number" === typeof b) this._orientation = [b, c, d, f, g, r], "undefined" !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(b, Howler.ctx.currentTime,
			0.1), this.ctx.listener.upY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(b, c, d, f, g, r);
		else return z;
		return this
	};
	var b = Howl.prototype.init;
	Howl.prototype.init = function(c) {
		this._orientation = c.orientation || [1, 0, 0];
		this._stereo = c.stereo || null;
		this._pos = c.pos || null;
		this._pannerAttr = {
			coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
			coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ?
				c.coneOuterAngle : 360,
			coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
			distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
			maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
			panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
			refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
			rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
		};
		this._onstereo = c.onstereo ? [{
			fn: c.onstereo
		}] : [];
		this._onpos = c.onpos ?
			[{
				fn: c.onpos
			}] : [];
		this._onorientation = c.onorientation ? [{
			fn: c.onorientation
		}] : [];
		return b.call(this, c)
	};
	Howl.prototype.stereo = function(b, c) {
		var d = this;
		if (!d._webAudio) return d;
		if ("loaded" !== d._state) return d._queue.push({
			event: "stereo",
			action: function() {
				d.stereo(b, c)
			}
		}), d;
		var l = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
		if ("undefined" === typeof c)
			if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
			else return d._stereo;
		for (var g = d._getSoundIds(c), r = 0; r < g.length; r++) {
			var z = d._soundById(g[r]);
			if (z)
				if ("number" === typeof b) z._stereo = b, z._pos = [b, 0, 0], z._node && (z._pannerAttr.panningModel = "equalpower", (!z._panner || !z._panner.pan) && f(z, l), "spatial" === l ? (z._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), z._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), z._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : z._panner.pan.setValueAtTime(b, Howler.ctx.currentTime)), d._emit("stereo", z._id);
				else return z._stereo
		}
		return d
	};
	Howl.prototype.pos = function(b, c, d, l) {
		var g = this;
		if (!g._webAudio) return g;
		if ("loaded" !== g._state) return g._queue.push({
			event: "pos",
			action: function() {
				g.pos(b, c, d, l)
			}
		}), g;
		c = "number" !== typeof c ? 0 : c;
		d = "number" !== typeof d ? -0.5 : d;
		if ("undefined" === typeof l)
			if ("number" === typeof b) g._pos = [b, c, d];
			else return g._pos;
		for (var r = g._getSoundIds(l), z = 0; z < r.length; z++) {
			var y = g._soundById(r[z]);
			if (y)
				if ("number" === typeof b) y._pos = [b, c, d], y._node && ((!y._panner || y._panner.pan) && f(y, "spatial"), y._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), y._panner.positionY.setValueAtTime(c,
					Howler.ctx.currentTime), y._panner.positionZ.setValueAtTime(d, Howler.ctx.currentTime)), g._emit("pos", y._id);
				else return y._pos
		}
		return g
	};
	Howl.prototype.orientation = function(b, c, d, l) {
		var g = this;
		if (!g._webAudio) return g;
		if ("loaded" !== g._state) return g._queue.push({
			event: "orientation",
			action: function() {
				g.orientation(b, c, d, l)
			}
		}), g;
		c = "number" !== typeof c ? g._orientation[1] : c;
		d = "number" !== typeof d ? g._orientation[2] : d;
		if ("undefined" === typeof l)
			if ("number" === typeof b) g._orientation = [b, c, d];
			else return g._orientation;
		for (var r = g._getSoundIds(l), z = 0; z < r.length; z++) {
			var y = g._soundById(r[z]);
			if (y)
				if ("number" === typeof b) y._orientation = [b, c, d], y._node && (y._panner || (y._pos || (y._pos = g._pos || [0, 0, -0.5]), f(y, "spatial")), y._panner.orientationX.setValueAtTime(b, Howler.ctx.currentTime), y._panner.orientationY.setValueAtTime(c, Howler.ctx.currentTime), y._panner.orientationZ.setValueAtTime(d, Howler.ctx.currentTime)), g._emit("orientation", y._id);
				else return y._orientation
		}
		return g
	};
	Howl.prototype.pannerAttr = function() {
		var b = arguments,
			c, d;
		if (!this._webAudio) return this;
		if (0 === b.length) return this._pannerAttr;
		if (1 === b.length)
			if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (c.pannerAttr || (c.pannerAttr = {
				coneInnerAngle: c.coneInnerAngle,
				coneOuterAngle: c.coneOuterAngle,
				coneOuterGain: c.coneOuterGain,
				distanceModel: c.distanceModel,
				maxDistance: c.maxDistance,
				refDistance: c.refDistance,
				rolloffFactor: c.rolloffFactor,
				panningModel: c.panningModel
			}), this._pannerAttr = {
				coneInnerAngle: "undefined" !== typeof c.pannerAttr.coneInnerAngle ? c.pannerAttr.coneInnerAngle : this._coneInnerAngle,
				coneOuterAngle: "undefined" !== typeof c.pannerAttr.coneOuterAngle ? c.pannerAttr.coneOuterAngle : this._coneOuterAngle,
				coneOuterGain: "undefined" !== typeof c.pannerAttr.coneOuterGain ? c.pannerAttr.coneOuterGain : this._coneOuterGain,
				distanceModel: "undefined" !== typeof c.pannerAttr.distanceModel ? c.pannerAttr.distanceModel : this._distanceModel,
				maxDistance: "undefined" !== typeof c.pannerAttr.maxDistance ? c.pannerAttr.maxDistance : this._maxDistance,
				refDistance: "undefined" !== typeof c.pannerAttr.refDistance ?
					c.pannerAttr.refDistance : this._refDistance,
				rolloffFactor: "undefined" !== typeof c.pannerAttr.rolloffFactor ? c.pannerAttr.rolloffFactor : this._rolloffFactor,
				panningModel: "undefined" !== typeof c.pannerAttr.panningModel ? c.pannerAttr.panningModel : this._panningModel
			});
			else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
		else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
		d = this._getSoundIds(d);
		for (var l = 0; l < d.length; l++)
			if (b = this._soundById(d[l])) {
				var g = b._pannerAttr,
					g = {
						coneInnerAngle: "undefined" !==
							typeof c.coneInnerAngle ? c.coneInnerAngle : g.coneInnerAngle,
						coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : g.coneOuterAngle,
						coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : g.coneOuterGain,
						distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : g.distanceModel,
						maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : g.maxDistance,
						refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : g.refDistance,
						rolloffFactor: "undefined" !== typeof c.rolloffFactor ?
							c.rolloffFactor : g.rolloffFactor,
						panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : g.panningModel
					},
					r = b._panner;
				r ? (r.coneInnerAngle = g.coneInnerAngle, r.coneOuterAngle = g.coneOuterAngle, r.coneOuterGain = g.coneOuterGain, r.distanceModel = g.distanceModel, r.maxDistance = g.maxDistance, r.refDistance = g.refDistance, r.rolloffFactor = g.rolloffFactor, r.panningModel = g.panningModel) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), f(b, "spatial"))
			}
		return this
	};
	var c = Sound.prototype.init;
	Sound.prototype.init = function() {
		var b =
			this._parent;
		this._orientation = b._orientation;
		this._stereo = b._stereo;
		this._pos = b._pos;
		this._pannerAttr = b._pannerAttr;
		c.call(this);
		this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
	};
	var d = Sound.prototype.reset;
	Sound.prototype.reset = function() {
		var b = this._parent;
		this._orientation = b._orientation;
		this._pos = b._pos;
		this._pannerAttr = b._pannerAttr;
		return d.call(this)
	};
	var f = function(b, c) {
		"spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle =
			b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.panningModel = b._pannerAttr.panningModel, b._panner.positionX.setValueAtTime(b._pos[0], Howler.ctx.currentTime), b._panner.positionY.setValueAtTime(b._pos[1], Howler.ctx.currentTime),
			b._panner.positionZ.setValueAtTime(b._pos[2], Howler.ctx.currentTime), b._panner.orientationX.setValueAtTime(b._orientation[0], Howler.ctx.currentTime), b._panner.orientationY.setValueAtTime(b._orientation[1], Howler.ctx.currentTime), b._panner.orientationZ.setValueAtTime(b._orientation[2], Howler.ctx.currentTime)) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.setValueAtTime(b._stereo, Howler.ctx.currentTime));
		b._panner.connect(b._node);
		b._paused || b._parent.pause(b._id, !0).play(b._id, !0)
	}
})();
(function(b, c, d, f, e, j, n) {
	b.GoogleAnalyticsObject = e;
	b[e] = b[e] || function() {
		(b[e].q = b[e].q || []).push(arguments)
	};
	b[e].l = 1 * new Date;
	j = c.createElement(d);
	n = c.getElementsByTagName(d)[0];
	j.async = 1;
	j.src = f;
	n.parentNode.insertBefore(j, n)
})(window, document, "script", "", "ga");
ga("create", "UA-102691241-1", {
	name: "marketjs"
});
ga("marketjs.send", "pageview");
(function(b) {
	Number.prototype.map = function(b, c, d, e) {
		return d + (e - d) * ((this - b) / (c - b))
	};
	Number.prototype.limit = function(b, c) {
		return Math.min(c, Math.max(b, this))
	};
	Number.prototype.round = function(b) {
		b = Math.pow(10, b || 0);
		return Math.round(this * b) / b
	};
	Number.prototype.floor = function() {
		return Math.floor(this)
	};
	Number.prototype.ceil = function() {
		return Math.ceil(this)
	};
	Number.prototype.toInt = function() {
		return this | 0
	};
	Number.prototype.toRad = function() {
		return this / 180 * Math.PI
	};
	Number.prototype.toDeg = function() {
		return 180 *
			this / Math.PI
	};
	Array.prototype.erase = function(b) {
		for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
		return this
	};
	Array.prototype.random = function() {
		return this[Math.floor(Math.random() * this.length)]
	};
	Function.prototype.bind = Function.prototype.bind || function(b) {
		if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		var c = Array.prototype.slice.call(arguments, 1),
			d = this,
			e = function() {},
			f = function() {
				return d.apply(this instanceof e && b ?
					this : b, c.concat(Array.prototype.slice.call(arguments)))
			};
		e.prototype = this.prototype;
		f.prototype = new e;
		return f
	};
	b.ig = {
		game: null,
		debug: null,
		version: "1.23",
		global: b,
		modules: {},
		resources: [],
		ready: !1,
		baked: !1,
		nocache: "",
		ua: {},
		prefix: b.ImpactPrefix || "",
		lib: "lib/",
		_current: null,
		_loadQueue: [],
		_waitForOnload: 0,
		$: function(b) {
			return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
		},
		$new: function(b) {
			return document.createElement(b)
		},
		copy: function(b) {
			if (!b || "object" != typeof b ||
				b instanceof HTMLElement || b instanceof ig.Class) return b;
			if (b instanceof Array)
				for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
			else
				for (d in c = {}, b) c[d] = ig.copy(b[d]);
			return c
		},
		merge: function(b, c) {
			for (var d in c) {
				var e = c[d];
				if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
				else {
					if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
					ig.merge(b[d], e)
				}
			}
			return b
		},
		ksort: function(b) {
			if (!b || "object" != typeof b) return [];
			var c = [],
				d = [],
				e;
			for (e in b) c.push(e);
			c.sort();
			for (e = 0; e < c.length; e++) d.push(b[c[e]]);
			return d
		},
		setVendorAttribute: function(b, c, d) {
			var e = c.charAt(0).toUpperCase() + c.substr(1);
			b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
		},
		getVendorAttribute: function(b, c) {
			var d = c.charAt(0).toUpperCase() + c.substr(1);
			return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
		},
		normalizeVendorAttribute: function(b,
			c) {
			var d = ig.getVendorAttribute(b, c);
			!b[c] && d && (b[c] = d)
		},
		getImagePixels: function(b, c, d, e, f) {
			var j = ig.$new("canvas");
			j.width = b.width;
			j.height = b.height;
			var n = j.getContext("2d");
			ig.System.SCALE.CRISP(j, n);
			var I = ig.getVendorAttribute(n, "backingStorePixelRatio") || 1;
			ig.normalizeVendorAttribute(n, "getImageDataHD");
			var D = b.width / I,
				t = b.height / I;
			j.width = Math.ceil(D);
			j.height = Math.ceil(t);
			n.drawImage(b, 0, 0, D, t);
			return 1 === I ? n.getImageData(c, d, e, f) : n.getImageDataHD(c, d, e, f)
		},
		module: function(b) {
			if (ig._current) throw "Module '" +
				ig._current.name + "' defines nothing";
			if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
			ig._current = {
				name: b,
				requires: [],
				loaded: !1,
				body: null
			};
			ig.modules[b] = ig._current;
			ig._loadQueue.push(ig._current);
			return ig
		},
		requires: function() {
			ig._current.requires = Array.prototype.slice.call(arguments);
			return ig
		},
		defines: function(b) {
			ig._current.body = b;
			ig._current = null;
			ig._initDOMReady()
		},
		addResource: function(b) {
			ig.resources.push(b)
		},
		setNocache: function(b) {
			ig.nocache = b ? "?" + Date.now() : ""
		},
		log: function() {},
		assert: function() {},
		show: function() {},
		mark: function() {},
		_loadScript: function(b, c) {
			ig.modules[b] = {
				name: b,
				requires: [],
				loaded: !1,
				body: null
			};
			ig._waitForOnload++;
			var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
				e = ig.$new("script");
			e.type = "text/javascript";
			e.src = d;
			e.onload = function() {
				ig._waitForOnload--;
				ig._execModules()
			};
			e.onerror = function() {
				throw "Failed to load module " + b + " at " + d + " required from " + c;
			};
			ig.$("head")[0].appendChild(e)
		},
		_execModules: function() {
			for (var b = !1, c =
					0; c < ig._loadQueue.length; c++) {
				for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
					var j = d.requires[f];
					ig.modules[j] ? ig.modules[j].loaded || (e = !1) : (e = !1, ig._loadScript(j, d.name))
				}
				e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
			}
			if (b) ig._execModules();
			else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
				b = [];
				for (c = 0; c < ig._loadQueue.length; c++) {
					e = [];
					j = ig._loadQueue[c].requires;
					for (f = 0; f < j.length; f++) d = ig.modules[j[f]], (!d || !d.loaded) && e.push(j[f]);
					b.push(ig._loadQueue[c].name +
						" (requires: " + e.join(", ") + ")")
				}
				throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
			}
		},
		_DOMReady: function() {
			if (!ig.modules["dom.ready"].loaded) {
				if (!document.body) return setTimeout(ig._DOMReady, 13);
				ig.modules["dom.ready"].loaded = !0;
				ig._waitForOnload--;
				ig._execModules()
			}
			return 0
		},
		_boot: function() {
			document.location.href.match(/\?nocache/) && ig.setNocache(!0);
			ig.ua.pixelRatio =
				b.devicePixelRatio || 1;
			ig.ua.viewport = {
				width: b.innerWidth,
				height: b.innerHeight
			};
			ig.ua.screen = {
				width: b.screen.availWidth * ig.ua.pixelRatio,
				height: b.screen.availHeight * ig.ua.pixelRatio
			};
			ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
			ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
			ig.ua.iPad = /iPad/i.test(navigator.userAgent);
			ig.ua.android = /android/i.test(navigator.userAgent);
			ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
			ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
			ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
			ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
			ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
			ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
			ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
			ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
			ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
			ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
			ig.ua.touchDevice = "ontouchstart" in
				b || b.navigator.msMaxTouchPoints;
			ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
		},
		_initDOMReady: function() {
			ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
				requires: [],
				loaded: !1,
				body: null
			}, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
		}
	};
	ig.normalizeVendorAttribute(b, "requestAnimationFrame");
	if (b.requestAnimationFrame) {
		var c = 1,
			d = {};
		b.ig.setAnimation = function(e, f) {
			var j = c++;
			d[j] = !0;
			var n = function() {
				d[j] && (b.requestAnimationFrame(n, f), e())
			};
			b.requestAnimationFrame(n, f);
			return j
		};
		b.ig.clearAnimation = function(b) {
			delete d[b]
		}
	} else b.ig.setAnimation = function(c) {
		return b.setInterval(c, 1E3 / 60)
	}, b.ig.clearAnimation = function(c) {
		b.clearInterval(c)
	};
	var f = !1,
		e = /xyz/.test(function() {
			xyz
		}) ? /\bparent\b/ : /.*/,
		j = 0;
	b.ig.Class = function() {};
	var n = function(b) {
		var c = this.prototype,
			d = {},
			f;
		for (f in b) "function" ==
			typeof b[f] && "function" == typeof c[f] && e.test(b[f]) ? (d[f] = c[f], c[f] = function(b, c) {
				return function() {
					var e = this.parent;
					this.parent = d[b];
					var f = c.apply(this, arguments);
					this.parent = e;
					return f
				}
			}(f, b[f])) : c[f] = b[f]
	};
	b.ig.Class.extend = function(c) {
		function d() {
			if (!f) {
				if (this.staticInstantiate) {
					var b = this.staticInstantiate.apply(this, arguments);
					if (b) return b
				}
				for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
				this.init && this.init.apply(this, arguments)
			}
			return this
		}
		var r = this.prototype;
		f = !0;
		var z = new this;
		f = !1;
		for (var y in c) z[y] = "function" == typeof c[y] && "function" == typeof r[y] && e.test(c[y]) ? function(b, c) {
			return function() {
				var d = this.parent;
				this.parent = r[b];
				var e = c.apply(this, arguments);
				this.parent = d;
				return e
			}
		}(y, c[y]) : c[y];
		d.prototype = z;
		d.prototype.constructor = d;
		d.extend = b.ig.Class.extend;
		d.inject = n;
		d.classId = z.classId = ++j;
		return d
	};
	b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
	ig.Image = ig.Class.extend({
		data: null,
		width: 0,
		height: 0,
		loaded: !1,
		failed: !1,
		loadCallback: null,
		path: "",
		staticInstantiate: function(b) {
			return ig.Image.cache[b] || null
		},
		init: function(b) {
			this.path = b;
			this.load()
		},
		load: function(b) {
			this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
				ig.Image.cache[this.path] = this)
		},
		reload: function() {
			this.loaded = !1;
			this.data = new Image;
			this.data.onload = this.onload.bind(this);
			this.data.src = this.path + "?" + Date.now()
		},
		onload: function() {
			this.width = this.data.width;
			this.height = this.data.height;
			this.loaded = !0;
			1 != ig.system.scale && this.resize(ig.system.scale);
			this.loadCallback && this.loadCallback(this.path, !0)
		},
		onerror: function() {
			this.failed = !0;
			this.loadCallback && this.loadCallback(this.path, !1)
		},
		resize: function(b) {
			var c = ig.getImagePixels(this.data, 0, 0, this.width,
					this.height),
				d = this.width * b,
				f = this.height * b,
				e = ig.$new("canvas");
			e.width = d;
			e.height = f;
			for (var j = e.getContext("2d"), n = j.getImageData(0, 0, d, f), l = 0; l < f; l++)
				for (var g = 0; g < d; g++) {
					var r = 4 * (Math.floor(l / b) * this.width + Math.floor(g / b)),
						z = 4 * (l * d + g);
					n.data[z] = c.data[r];
					n.data[z + 1] = c.data[r + 1];
					n.data[z + 2] = c.data[r + 2];
					n.data[z + 3] = c.data[r + 3]
				}
			j.putImageData(n, 0, 0);
			this.data = e
		},
		draw: function(b, c, d, f, e, j) {
			if (this.loaded) {
				var n = ig.system.scale;
				e = (e ? e : this.width) * n;
				j = (j ? j : this.height) * n;
				ig.system.context.drawImage(this.data,
					d ? d * n : 0, f ? f * n : 0, e, j, ig.system.getDrawPos(b), ig.system.getDrawPos(c), e, j);
				ig.Image.drawCount++
			}
		},
		drawTile: function(b, c, d, f, e, j, n) {
			e = e ? e : f;
			if (this.loaded && !(f > this.width || e > this.height)) {
				var l = ig.system.scale,
					g = Math.floor(f * l),
					r = Math.floor(e * l),
					z = j ? -1 : 1,
					y = n ? -1 : 1;
				if (j || n) ig.system.context.save(), ig.system.context.scale(z, y);
				ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * l, Math.floor(d * f / this.width) * e * l, g, r, ig.system.getDrawPos(b) * z - (j ? g : 0), ig.system.getDrawPos(c) * y - (n ? r : 0), g, r);
				(j ||
					n) && ig.system.context.restore();
				ig.Image.drawCount++
			}
		}
	});
	ig.Image.drawCount = 0;
	ig.Image.cache = {};
	ig.Image.reloadCache = function() {
		for (var b in ig.Image.cache) ig.Image.cache[b].reload()
	}
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
	ig.Font = ig.Image.extend({
		widthMap: [],
		indices: [],
		firstChar: 32,
		alpha: 1,
		letterSpacing: 1,
		lineSpacing: 0,
		onload: function(b) {
			this._loadMetrics(this.data);
			this.parent(b)
		},
		widthForString: function(b) {
			if (-1 !== b.indexOf("\n")) {
				b = b.split("\n");
				for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
				return c
			}
			return this._widthForLine(b)
		},
		_widthForLine: function(b) {
			for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
				this.letterSpacing;
			return c
		},
		heightForString: function(b) {
			return b.split("\n").length * (this.height + this.lineSpacing)
		},
		draw: function(b, c, d, f) {
			"string" != typeof b && (b = b.toString());
			if (-1 !== b.indexOf("\n")) {
				b = b.split("\n");
				for (var e = this.height + this.lineSpacing, j = 0; j < b.length; j++) this.draw(b[j], c, d + j * e, f)
			} else {
				if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) j = this._widthForLine(b), c -= f == ig.Font.ALIGN.CENTER ? j / 2 : j;
				1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
				for (j = 0; j < b.length; j++) f = b.charCodeAt(j),
					c += this._drawChar(f - this.firstChar, c, d);
				1 !== this.alpha && (ig.system.context.globalAlpha = 1);
				ig.Image.drawCount += b.length
			}
		},
		_drawChar: function(b, c, d) {
			if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
			var f = ig.system.scale,
				e = this.widthMap[b] * f,
				j = (this.height - 2) * f;
			ig.system.context.drawImage(this.data, this.indices[b] * f, 0, e, j, ig.system.getDrawPos(c), ig.system.getDrawPos(d), e, j);
			return this.widthMap[b] + this.letterSpacing
		},
		_loadMetrics: function(b) {
			this.height = b.height - 1;
			this.widthMap = [];
			this.indices =
				[];
			for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, f = 0, e = 0; e < b.width; e++) {
				var j = 4 * e + 3;
				127 < c.data[j] ? f++ : 128 > c.data[j] && f && (this.widthMap.push(f), this.indices.push(e - f), d++, f = 0)
			}
			this.widthMap.push(f);
			this.indices.push(e - f)
		}
	});
	ig.Font.ALIGN = {
		LEFT: 0,
		RIGHT: 1,
		CENTER: 2
	}
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
	ig.SoundManager = ig.Class.extend({
		clips: {},
		volume: 1,
		format: null,
		init: function() {
			if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
			else {
				for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
					var d = ig.Sound.use[c];
					if (b.canPlayType(d.mime)) {
						this.format = d;
						break
					}
				}
				this.format || (ig.Sound.enabled = !1)
			}
		},
		load: function(b, c, d) {
			var f = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
			if (this.clips[b]) {
				if (c && this.clips[b].length < ig.Sound.channels)
					for (c = this.clips[b].length; c <
						ig.Sound.channels; c++) {
						var e = new Audio(f);
						e.load();
						this.clips[b].push(e)
					}
				return this.clips[b][0]
			}
			var j = new Audio(f);
			d && (j.addEventListener("canplaythrough", function l(c) {
				j.removeEventListener("canplaythrough", l, !1);
				d(b, !0, c)
			}, !1), j.addEventListener("error", function(c) {
				d(b, !1, c)
			}, !1));
			j.preload = "auto";
			j.load();
			this.clips[b] = [j];
			if (c)
				for (c = 1; c < ig.Sound.channels; c++) e = new Audio(f), e.load(), this.clips[b].push(e);
			return j
		},
		get: function(b) {
			b = this.clips[b];
			for (var c = 0, d; d = b[c++];)
				if (d.paused || d.ended) return d.ended &&
					(d.currentTime = 0), d;
			b[0].pause();
			b[0].currentTime = 0;
			return b[0]
		}
	});
	ig.Music = ig.Class.extend({
		tracks: [],
		namedTracks: {},
		currentTrack: null,
		currentIndex: 0,
		random: !1,
		_volume: 1,
		_loop: !1,
		_fadeInterval: 0,
		_fadeTimer: null,
		_endedCallbackBound: null,
		init: function() {
			this._endedCallbackBound = this._endedCallback.bind(this);
			Object.defineProperty ? (Object.defineProperty(this, "volume", {
					get: this.getVolume.bind(this),
					set: this.setVolume.bind(this)
				}), Object.defineProperty(this, "loop", {
					get: this.getLooping.bind(this),
					set: this.setLooping.bind(this)
				})) :
				this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
		},
		add: function(b, c) {
			if (ig.Sound.enabled) {
				var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
				d.loop = this._loop;
				d.volume = this._volume;
				d.addEventListener("ended", this._endedCallbackBound, !1);
				this.tracks.push(d);
				c && (this.namedTracks[c] = d);
				this.currentTrack ||
					(this.currentTrack = d)
			}
		},
		next: function() {
			this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
		},
		pause: function() {
			this.currentTrack && this.currentTrack.pause()
		},
		stop: function() {
			this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
		},
		play: function(b) {
			if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
				this.currentTrack = b);
			else if (!this.currentTrack) return;
			this.currentTrack.play()
		},
		getLooping: function() {
			return this._loop
		},
		setLooping: function(b) {
			this._loop = b;
			for (var c in this.tracks) this.tracks[c].loop = b
		},
		getVolume: function() {
			return this._volume
		},
		setVolume: function(b) {
			this._volume = b.limit(0, 1);
			for (var c in this.tracks) this.tracks[c].volume = this._volume
		},
		fadeOut: function(b) {
			this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
				50))
		},
		_fadeStep: function() {
			var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
			0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
		},
		_endedCallback: function() {
			this._loop ? this.play() : this.next()
		}
	});
	ig.Sound = ig.Class.extend({
		path: "",
		volume: 1,
		currentClip: null,
		multiChannel: !0,
		init: function(b, c) {
			this.path = b;
			this.multiChannel = !1 !== c;
			this.load()
		},
		load: function(b) {
			ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
				this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
		},
		play: function() {
			ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
		},
		stop: function() {
			this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
		}
	});
	ig.Sound.FORMAT = {
		MP3: {
			ext: "mp3",
			mime: "audio/mpeg"
		},
		M4A: {
			ext: "m4a",
			mime: "audio/mp4; codecs=mp4a"
		},
		OGG: {
			ext: "ogg",
			mime: "audio/ogg; codecs=vorbis"
		},
		WEBM: {
			ext: "webm",
			mime: "audio/webm; codecs=vorbis"
		},
		CAF: {
			ext: "caf",
			mime: "audio/x-caf"
		}
	};
	ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
	ig.Sound.channels = 4;
	ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
	ig.Loader = ig.Class.extend({
		resources: [],
		gameClass: null,
		status: 0,
		done: !1,
		_unloaded: [],
		_drawStatus: 0,
		_intervalId: 0,
		_loadCallbackBound: null,
		init: function(b, c) {
			this.gameClass = b;
			this.resources = c;
			this._loadCallbackBound = this._loadCallback.bind(this);
			for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
		},
		load: function() {
			ig.system.clear("#000");
			if (this.resources.length) {
				for (var b =
						0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
				this._intervalId = setInterval(this.draw.bind(this), 16)
			} else this.end()
		},
		loadResource: function(b) {
			b.load(this._loadCallbackBound)
		},
		end: function() {
			this.done || (this.done = !0, clearInterval(this._intervalId))
		},
		draw: function() {},
		_loadCallback: function(b, c) {
			if (c) this._unloaded.erase(b);
			else throw "Failed to load resource: " + b;
			this.status = 1 - this._unloaded.length / this.resources.length;
			0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
		}
	})
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
	ig.Timer = ig.Class.extend({
		target: 0,
		base: 0,
		last: 0,
		pausedAt: 0,
		init: function(b) {
			this.last = this.base = ig.Timer.time;
			this.target = b || 0
		},
		set: function(b) {
			this.target = b || 0;
			this.base = ig.Timer.time;
			this.pausedAt = 0
		},
		reset: function() {
			this.base = ig.Timer.time;
			this.pausedAt = 0
		},
		tick: function() {
			var b = ig.Timer.time - this.last;
			this.last = ig.Timer.time;
			return this.pausedAt ? 0 : b
		},
		delta: function() {
			return (this.pausedAt || ig.Timer.time) - this.base - this.target
		},
		pause: function() {
			this.pausedAt || (this.pausedAt =
				ig.Timer.time)
		},
		unpause: function() {
			this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
		}
	});
	ig.Timer._last = 0;
	ig.Timer.time = Number.MIN_VALUE;
	ig.Timer.timeScale = 1;
	ig.Timer.maxStep = 0.05;
	ig.Timer.step = function() {
		var b = Date.now();
		ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
		ig.Timer._last = b
	}
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
	ig.System = ig.Class.extend({
		fps: 30,
		width: 320,
		height: 240,
		realWidth: 320,
		realHeight: 240,
		scale: 1,
		tick: 0,
		animationId: 0,
		newGameClass: null,
		running: !1,
		delegate: null,
		clock: null,
		canvas: null,
		context: null,
		init: function(b, c, d, f, e) {
			this.fps = c;
			this.clock = new ig.Timer;
			this.canvas = ig.$(b);
			this.resize(d, f, e);
			this.context = this.canvas.getContext("2d");
			this.getDrawPos = ig.System.drawMode;
			1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
			ig.System.scaleMode(this.canvas, this.context)
		},
		resize: function(b, c, d) {
			this.width = b;
			this.height = c;
			this.scale = d || this.scale;
			this.realWidth = this.width * this.scale;
			this.realHeight = this.height * this.scale;
			this.canvas.width = this.realWidth;
			this.canvas.height = this.realHeight
		},
		setGame: function(b) {
			this.running ? this.newGameClass = b : this.setGameNow(b)
		},
		setGameNow: function(b) {
			ig.game = new b;
			ig.system.setDelegate(ig.game)
		},
		setDelegate: function(b) {
			if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
			else throw "System.setDelegate: No run() function in object";
		},
		stopRunLoop: function() {
			ig.clearAnimation(this.animationId);
			this.running = !1
		},
		startRunLoop: function() {
			this.stopRunLoop();
			this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
			this.running = !0
		},
		clear: function(b) {
			this.context.fillStyle = b;
			this.context.fillRect(0, 0, this.realWidth, this.realHeight)
		},
		run: function() {
			ig.Timer.step();
			this.tick = this.clock.tick();
			this.delegate.run();
			ig.input.clearPressed();
			this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
		},
		getDrawPos: null
	});
	ig.System.DRAW = {
		AUTHENTIC: function(b) {
			return Math.round(b) * this.scale
		},
		SMOOTH: function(b) {
			return Math.round(b * this.scale)
		},
		SUBPIXEL: function(b) {
			return b * this.scale
		}
	};
	ig.System.drawMode = ig.System.DRAW.SMOOTH;
	ig.System.SCALE = {
		CRISP: function(b, c) {
			ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
			b.style.imageRendering = "-moz-crisp-edges";
			b.style.imageRendering = "-o-crisp-edges";
			b.style.imageRendering = "-webkit-optimize-contrast";
			b.style.imageRendering = "crisp-edges";
			b.style.msInterpolationMode = "nearest-neighbor"
		},
		SMOOTH: function(b, c) {
			ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
			b.style.imageRendering = "";
			b.style.msInterpolationMode = ""
		}
	};
	ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
	ig.KEY = {
		MOUSE1: -1,
		MOUSE2: -3,
		MWHEEL_UP: -4,
		MWHEEL_DOWN: -5,
		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,
		PAUSE: 19,
		CAPS: 20,
		ESC: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40,
		INSERT: 45,
		DELETE: 46,
		_0: 48,
		_1: 49,
		_2: 50,
		_3: 51,
		_4: 52,
		_5: 53,
		_6: 54,
		_7: 55,
		_8: 56,
		_9: 57,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		NUMPAD_0: 96,
		NUMPAD_1: 97,
		NUMPAD_2: 98,
		NUMPAD_3: 99,
		NUMPAD_4: 100,
		NUMPAD_5: 101,
		NUMPAD_6: 102,
		NUMPAD_7: 103,
		NUMPAD_8: 104,
		NUMPAD_9: 105,
		MULTIPLY: 106,
		ADD: 107,
		SUBSTRACT: 109,
		DECIMAL: 110,
		DIVIDE: 111,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PLUS: 187,
		COMMA: 188,
		MINUS: 189,
		PERIOD: 190
	};
	ig.Input = ig.Class.extend({
		bindings: {},
		actions: {},
		presses: {},
		locks: {},
		delayedKeyup: {},
		isUsingMouse: !1,
		isUsingKeyboard: !1,
		isUsingAccelerometer: !1,
		mouse: {
			x: 0,
			y: 0
		},
		accel: {
			x: 0,
			y: 0,
			z: 0
		},
		initMouse: function() {
			if (!this.isUsingMouse) {
				this.isUsingMouse = !0;
				var b = this.mousewheel.bind(this);
				ig.system.canvas.addEventListener("mousewheel", b, !1);
				ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
				ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
				ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
				ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
				ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
				ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
					this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
			}
		},
		initKeyboard: function() {
			this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
		},
		initAccelerometer: function() {
			this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
		},
		mousewheel: function(b) {
			var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
			c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
		},
		mousemove: function(b) {
			var c =
				parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
			ig.ua.mobile && (c = ig.system.realWidth);
			var c = ig.system.scale * (c / ig.system.realWidth),
				d = {
					left: 0,
					top: 0
				};
			ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
			b = b.touches ? b.touches[0] : b;
			this.mouse.x = (b.clientX - d.left) / c;
			this.mouse.y = (b.clientY - d.top) / c
		},
		contextmenu: function(b) {
			this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
		},
		keydown: function(b) {
			var c = b.target.tagName;
			if (!("INPUT" == c || "TEXTAREA" ==
					c))
				if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
		},
		keyup: function(b) {
			var c = b.target.tagName;
			if (!("INPUT" == c || "TEXTAREA" == c))
				if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
		},
		devicemotion: function(b) {
			this.accel =
				b.accelerationIncludingGravity
		},
		bind: function(b, c) {
			0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
			this.bindings[b] = c
		},
		bindTouch: function(b, c) {
			var d = ig.$(b),
				f = this;
			d.addEventListener("touchstart", function(b) {
				f.touchStart(b, c)
			}, !1);
			d.addEventListener("touchend", function(b) {
				f.touchEnd(b, c)
			}, !1);
			d.addEventListener("MSPointerDown", function(b) {
				f.touchStart(b, c)
			}, !1);
			d.addEventListener("MSPointerUp", function(b) {
				f.touchEnd(b, c)
			}, !1)
		},
		unbind: function(b) {
			this.delayedKeyup[this.bindings[b]] = !0;
			this.bindings[b] =
				null
		},
		unbindAll: function() {
			this.bindings = {};
			this.actions = {};
			this.presses = {};
			this.locks = {};
			this.delayedKeyup = {}
		},
		state: function(b) {
			return this.actions[b]
		},
		pressed: function(b) {
			return this.presses[b]
		},
		released: function(b) {
			return !!this.delayedKeyup[b]
		},
		clearPressed: function() {
			for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
			this.delayedKeyup = {};
			this.presses = {}
		},
		touchStart: function(b, c) {
			this.actions[c] = !0;
			this.presses[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1
		},
		touchEnd: function(b,
			c) {
			this.delayedKeyup[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1
		}
	})
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
	ig.main = function(b, c, d, f, e, j, n) {
		ig.system = new ig.System(b, d, f, e, j || 1);
		ig.input = new ig.Input;
		ig.soundManager = new ig.SoundManager;
		ig.music = new ig.Music;
		ig.ready = !0;
		(new(n || ig.Loader)(c, ig.resources)).load()
	}
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
	ig.AnimationSheet = ig.Class.extend({
		width: 8,
		height: 8,
		image: null,
		init: function(b, c, d) {
			this.width = c;
			this.height = d;
			this.image = new ig.Image(b)
		}
	});
	ig.Animation = ig.Class.extend({
		sheet: null,
		timer: null,
		sequence: [],
		flip: {
			x: !1,
			y: !1
		},
		pivot: {
			x: 0,
			y: 0
		},
		frame: 0,
		tile: 0,
		loopCount: 0,
		alpha: 1,
		angle: 0,
		init: function(b, c, d, f) {
			this.sheet = b;
			this.pivot = {
				x: b.width / 2,
				y: b.height / 2
			};
			this.timer = new ig.Timer;
			this.frameTime = c;
			this.sequence = d;
			this.stop = !!f;
			this.tile = this.sequence[0]
		},
		rewind: function() {
			this.timer.set();
			this.frame = this.loopCount = 0;
			this.tile = this.sequence[0];
			return this
		},
		gotoFrame: function(b) {
			this.timer.set(this.frameTime * -b - 1E-4);
			this.update()
		},
		gotoRandomFrame: function() {
			this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
		},
		update: function() {
			var b = Math.floor(this.timer.delta() / this.frameTime);
			this.loopCount = Math.floor(b / this.sequence.length);
			this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
			this.tile = this.sequence[this.frame]
		},
		draw: function(b, c) {
			var d = Math.max(this.sheet.width, this.sheet.height);
			b > ig.system.width || (c > ig.system.height || 0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
				this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
		}
	})
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
	ig.Entity = ig.Class.extend({
		id: 0,
		settings: {},
		size: {
			x: 16,
			y: 16
		},
		offset: {
			x: 0,
			y: 0
		},
		pos: {
			x: 0,
			y: 0
		},
		last: {
			x: 0,
			y: 0
		},
		vel: {
			x: 0,
			y: 0
		},
		accel: {
			x: 0,
			y: 0
		},
		friction: {
			x: 0,
			y: 0
		},
		maxVel: {
			x: 100,
			y: 100
		},
		zIndex: 0,
		gravityFactor: 0,
		standing: !1,
		bounciness: 0,
		minBounceVelocity: 40,
		anims: {},
		animSheet: null,
		currentAnim: null,
		health: 10,
		type: 0,
		checkAgainst: 0,
		collides: 0,
		_killed: !1,
		slopeStanding: {
			min: (44).toRad(),
			max: (136).toRad()
		},
		scale: {
			x: 1,
			y: 1
		},
		_pos: {
			x: 0,
			y: 0
		},
		init: function(b, c, d) {
			this.id = ++ig.Entity._lastId;
			b || (b = 0);
			c || (c = 0);
			this.pos.x = this.last.x = this._pos.x = b;
			this.pos.y = this.last.y = this._pos.y = c;
			ig.merge(this, d)
		},
		reset: function(b, c, d) {
			var f = this.constructor.prototype;
			this.pos.x = b;
			this.pos.y = c;
			this.last.x = b;
			this.last.y = c;
			this.vel.x = f.vel.x;
			this.vel.y = f.vel.y;
			this.accel.x = f.accel.x;
			this.accel.y = f.accel.y;
			this.health = f.health;
			this._killed = f._killed;
			this.standing = f.standing;
			this.type = f.type;
			this.checkAgainst = f.checkAgainst;
			this.collides = f.collides;
			ig.merge(this, d)
		},
		addAnim: function(b, c, d, f) {
			if (!this.animSheet) throw "No animSheet to add the animation " + b + " to.";
			c = new ig.Animation(this.animSheet, c, d, f);
			this.anims[b] = c;
			this.currentAnim || (this.currentAnim = c);
			return c
		},
		update: function() {
			this.last.x = this.pos.x;
			this.last.y = this.pos.y;
			this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
			this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
			this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y,
				this.maxVel.y);
			var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
			this.handleMovementTrace(b);
			this.currentAnim && this.currentAnim.update()
		},
		getNewVelocity: function(b, c, d, f) {
			return c ? (b + c * ig.system.tick).limit(-f, f) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-f, f)
		},
		handleMovementTrace: function(b) {
			this.standing = !1;
			b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness :
				(0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
			b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
			if (b.collision.slope) {
				var c = b.collision.slope;
				if (0 < this.bounciness) {
					var d = this.vel.x * c.nx + this.vel.y * c.ny;
					this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
					this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
				} else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min &&
					c < this.slopeStanding.max && (this.standing = !0)
			}
			this.pos = b.pos
		},
		draw: function() {
			this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
		},
		kill: function() {
			ig.game.removeEntity(this)
		},
		receiveDamage: function(b) {
			this.health -= b;
			0 >= this.health && this.kill()
		},
		touches: function(b) {
			return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
		},
		distanceTo: function(b) {
			var c =
				this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
			b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
			return Math.sqrt(c * c + b * b)
		},
		angleTo: function(b) {
			return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
		},
		check: function() {},
		collideWith: function() {},
		ready: function() {},
		erase: function() {}
	});
	ig.Entity._lastId = 0;
	ig.Entity.COLLIDES = {
		NEVER: 0,
		LITE: 1,
		PASSIVE: 2,
		ACTIVE: 4,
		FIXED: 8
	};
	ig.Entity.TYPE = {
		NONE: 0,
		A: 1,
		B: 2,
		BOTH: 3
	};
	ig.Entity.checkPair = function(b, c) {
		b.checkAgainst &
			c.type && b.check(c);
		c.checkAgainst & b.type && c.check(b);
		b.collides && (c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE) && ig.Entity.solveCollision(b, c)
	};
	ig.Entity.solveCollision = function(b, c) {
		var d = null;
		if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
		else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
		b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c,
			b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
	};
	ig.Entity.seperateOnXAxis = function(b, c, d) {
		var f = b.pos.x + b.size.x - c.pos.x;
		d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -f : f, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x,
			b.pos.y, -f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
	};
	ig.Entity.seperateOnYAxis = function(b, c, d) {
		var f = b.pos.y + b.size.y - c.pos.y;
		if (d) {
			c = b === d ? c : b;
			d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
			var e = 0;
			d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, e = c.vel.x * ig.system.tick);
			b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, e, d == b ? -f : f, d.size.x, d.size.y);
			d.pos.y = b.pos.y;
			d.pos.x = b.pos.x
		} else ig.game.gravity &&
			(c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, e = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, e, -f / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, f / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
	}
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
	ig.Map = ig.Class.extend({
		tilesize: 8,
		width: 1,
		height: 1,
		data: [
			[]
		],
		name: null,
		init: function(b, c) {
			this.tilesize = b;
			this.data = c;
			this.height = c.length;
			this.width = c[0].length;
			this.pxWidth = this.width * this.tilesize;
			this.pxHeight = this.height * this.tilesize
		},
		getTile: function(b, c) {
			var d = Math.floor(b / this.tilesize),
				f = Math.floor(c / this.tilesize);
			return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
		},
		setTile: function(b, c, d) {
			b = Math.floor(b / this.tilesize);
			c = Math.floor(c /
				this.tilesize);
			0 <= b && b < this.width && (0 <= c && c < this.height) && (this.data[c][b] = d)
		}
	})
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
	ig.CollisionMap = ig.Map.extend({
		lastSlope: 1,
		tiledef: null,
		init: function(b, c, e) {
			this.parent(b, c);
			this.tiledef = e || ig.CollisionMap.defaultTileDef;
			for (var j in this.tiledef) j | 0 > this.lastSlope && (this.lastSlope = j | 0)
		},
		trace: function(b, c, e, j, n, l) {
			var g = {
					collision: {
						x: !1,
						y: !1,
						slope: !1
					},
					pos: {
						x: b,
						y: c
					},
					tile: {
						x: 0,
						y: 0
					}
				},
				r = Math.ceil(Math.max(Math.abs(e), Math.abs(j)) / this.tilesize);
			if (1 < r)
				for (var z = e / r, y = j / r, A = 0; A < r && (z || y) && !(this._traceStep(g,
						b, c, z, y, n, l, e, j, A), b = g.pos.x, c = g.pos.y, g.collision.x && (e = z = 0), g.collision.y && (j = y = 0), g.collision.slope); A++);
			else this._traceStep(g, b, c, e, j, n, l, e, j, 0);
			return g
		},
		_traceStep: function(b, c, e, j, n, l, g, r, z, y) {
			b.pos.x += j;
			b.pos.y += n;
			var A = 0;
			if (j) {
				var B = 0 < j ? l : 0,
					I = 0 > j ? this.tilesize : 0,
					A = Math.max(Math.floor(e / this.tilesize), 0),
					D = Math.min(Math.ceil((e + g) / this.tilesize), this.height);
				j = Math.floor((b.pos.x + B) / this.tilesize);
				var t = Math.floor((c + B) / this.tilesize);
				if (0 < y || j == t || 0 > t || t >= this.width) t = -1;
				if (0 <= j && j < this.width)
					for (var G =
							A; G < D && !(-1 != t && (A = this.data[G][t], 1 < A && A <= this.lastSlope && this._checkTileDef(b, A, c, e, r, z, l, g, t, G))); G++)
						if (A = this.data[G][j], 1 == A || A > this.lastSlope || 1 < A && this._checkTileDef(b, A, c, e, r, z, l, g, j, G)) {
							if (1 < A && A <= this.lastSlope && b.collision.slope) break;
							b.collision.x = !0;
							b.tile.x = A;
							c = b.pos.x = j * this.tilesize - B + I;
							r = 0;
							break
						}
			}
			if (n) {
				B = 0 < n ? g : 0;
				n = 0 > n ? this.tilesize : 0;
				A = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
				I = Math.min(Math.ceil((b.pos.x + l) / this.tilesize), this.width);
				G = Math.floor((b.pos.y + B) / this.tilesize);
				D = Math.floor((e + B) / this.tilesize);
				if (0 < y || G == D || 0 > D || D >= this.height) D = -1;
				if (0 <= G && G < this.height)
					for (j = A; j < I && !(-1 != D && (A = this.data[D][j], 1 < A && A <= this.lastSlope && this._checkTileDef(b, A, c, e, r, z, l, g, j, D))); j++)
						if (A = this.data[G][j], 1 == A || A > this.lastSlope || 1 < A && this._checkTileDef(b, A, c, e, r, z, l, g, j, G)) {
							if (1 < A && A <= this.lastSlope && b.collision.slope) break;
							b.collision.y = !0;
							b.tile.y = A;
							b.pos.y = G * this.tilesize - B + n;
							break
						}
			}
		},
		_checkTileDef: function(b, c, e, j, n, l, g, r, z, y) {
			var A = this.tiledef[c];
			if (!A) return !1;
			c = (A[2] -
				A[0]) * this.tilesize;
			var B = (A[3] - A[1]) * this.tilesize,
				I = A[4];
			g = e + n + (0 > B ? g : 0) - (z + A[0]) * this.tilesize;
			r = j + l + (0 < c ? r : 0) - (y + A[1]) * this.tilesize;
			if (0 < c * r - B * g) {
				if (0 > n * -B + l * c) return I;
				z = Math.sqrt(c * c + B * B);
				y = B / z;
				z = -c / z;
				var D = g * y + r * z,
					A = y * D,
					D = z * D;
				if (A * A + D * D >= n * n + l * l) return I || 0.5 > c * (r - l) - B * (g - n);
				b.pos.x = e + n - A;
				b.pos.y = j + l - D;
				b.collision.slope = {
					x: c,
					y: B,
					nx: y,
					ny: z
				};
				return !0
			}
			return !1
		}
	});
	var b = 1 / 3,
		c = 2 / 3;
	ig.CollisionMap.defaultTileDef = {
		5: [0, 1, 1, c, !0],
		6: [0, c, 1, b, !0],
		7: [0, b, 1, 0, !0],
		3: [0, 1, 1, 0.5, !0],
		4: [0, 0.5, 1, 0, !0],
		2: [0,
			1, 1, 0, !0
		],
		10: [0.5, 1, 1, 0, !0],
		21: [0, 1, 0.5, 0, !0],
		32: [c, 1, 1, 0, !0],
		43: [b, 1, c, 0, !0],
		54: [0, 1, b, 0, !0],
		27: [0, 0, 1, b, !0],
		28: [0, b, 1, c, !0],
		29: [0, c, 1, 1, !0],
		25: [0, 0, 1, 0.5, !0],
		26: [0, 0.5, 1, 1, !0],
		24: [0, 0, 1, 1, !0],
		11: [0, 0, 0.5, 1, !0],
		22: [0.5, 0, 1, 1, !0],
		33: [0, 0, b, 1, !0],
		44: [b, 0, c, 1, !0],
		55: [c, 0, 1, 1, !0],
		16: [1, b, 0, 0, !0],
		17: [1, c, 0, b, !0],
		18: [1, 1, 0, c, !0],
		14: [1, 0.5, 0, 0, !0],
		15: [1, 1, 0, 0.5, !0],
		13: [1, 1, 0, 0, !0],
		8: [0.5, 1, 0, 0, !0],
		19: [1, 1, 0.5, 0, !0],
		30: [b, 1, 0, 0, !0],
		41: [c, 1, b, 0, !0],
		52: [1, 1, c, 0, !0],
		38: [1, c, 0, 1, !0],
		39: [1, b, 0, c, !0],
		40: [1, 0,
			0, b, !0
		],
		36: [1, 0.5, 0, 1, !0],
		37: [1, 0, 0, 0.5, !0],
		35: [1, 0, 0, 1, !0],
		9: [1, 0, 0.5, 1, !0],
		20: [0.5, 0, 0, 1, !0],
		31: [1, 0, c, 1, !0],
		42: [c, 0, b, 1, !0],
		53: [b, 0, 0, 1, !0],
		12: [0, 0, 1, 0, !1],
		23: [1, 1, 0, 1, !1],
		34: [1, 0, 1, 1, !1],
		45: [0, 1, 0, 0, !1]
	};
	ig.CollisionMap.staticNoCollision = {
		trace: function(b, c, e, j) {
			return {
				collision: {
					x: !1,
					y: !1,
					slope: !1
				},
				pos: {
					x: b + e,
					y: c + j
				},
				tile: {
					x: 0,
					y: 0
				}
			}
		}
	}
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
	ig.BackgroundMap = ig.Map.extend({
		tiles: null,
		scroll: {
			x: 0,
			y: 0
		},
		distance: 1,
		repeat: !1,
		tilesetName: "",
		foreground: !1,
		enabled: !0,
		preRender: !1,
		preRenderedChunks: null,
		chunkSize: 512,
		debugChunks: !1,
		anims: {},
		init: function(b, c, d) {
			this.parent(b, c);
			this.setTileset(d)
		},
		setTileset: function(b) {
			this.tilesetName = b instanceof ig.Image ? b.path : b;
			this.tiles = new ig.Image(this.tilesetName);
			this.preRenderedChunks = null
		},
		setScreenPos: function(b,
			c) {
			this.scroll.x = b / this.distance;
			this.scroll.y = c / this.distance
		},
		preRenderMapToChunks: function() {
			var b = this.width * this.tilesize * ig.system.scale,
				c = this.height * this.tilesize * ig.system.scale;
			this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
			var d = Math.ceil(b / this.chunkSize),
				f = Math.ceil(c / this.chunkSize);
			this.preRenderedChunks = [];
			for (var e = 0; e < f; e++) {
				this.preRenderedChunks[e] = [];
				for (var j = 0; j < d; j++) this.preRenderedChunks[e][j] = this.preRenderChunk(j, e, j == d - 1 ? b - j * this.chunkSize : this.chunkSize, e == f - 1 ?
					c - e * this.chunkSize : this.chunkSize)
			}
		},
		preRenderChunk: function(b, c, d, f) {
			var e = d / this.tilesize / ig.system.scale + 1,
				j = f / this.tilesize / ig.system.scale + 1,
				n = b * this.chunkSize / ig.system.scale % this.tilesize,
				l = c * this.chunkSize / ig.system.scale % this.tilesize;
			b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
			c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
			var g = ig.$new("canvas");
			g.width = d;
			g.height = f;
			g.retinaResolutionEnabled = !1;
			f = g.getContext("2d");
			ig.System.scaleMode(g, f);
			d = ig.system.context;
			ig.system.context = f;
			for (f = 0; f < e; f++)
				for (var r = 0; r < j; r++)
					if (f + b < this.width && r + c < this.height) {
						var z = this.data[r + c][f + b];
						z && this.tiles.drawTile(f * this.tilesize - n, r * this.tilesize - l, z - 1, this.tilesize)
					}
			ig.system.context = d;
			return g
		},
		draw: function() {
			this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
		},
		drawPreRendered: function() {
			this.preRenderedChunks || this.preRenderMapToChunks();
			var b = ig.system.getDrawPos(this.scroll.x),
				c = ig.system.getDrawPos(this.scroll.y);
			if (this.repeat) var d =
				this.width * this.tilesize * ig.system.scale,
				b = (b % d + d) % d,
				d = this.height * this.tilesize * ig.system.scale,
				c = (c % d + d) % d;
			var d = Math.max(Math.floor(b / this.chunkSize), 0),
				f = Math.max(Math.floor(c / this.chunkSize), 0),
				e = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
				j = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
				n = this.preRenderedChunks[0].length,
				l = this.preRenderedChunks.length;
			this.repeat || (e = Math.min(e, n), j = Math.min(j, l));
			for (var g = 0; f < j; f++) {
				for (var r = 0, z = d; z < e; z++) {
					var y = this.preRenderedChunks[f % l][z % n],
						A = -b + z * this.chunkSize - r,
						B = -c + f * this.chunkSize - g;
					ig.system.context.drawImage(y, A, B);
					ig.Image.drawCount++;
					this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(A, B, this.chunkSize, this.chunkSize));
					this.repeat && (y.width < this.chunkSize && A + y.width < ig.system.realWidth) && (r += this.chunkSize - y.width, e++)
				}
				this.repeat && (y.height < this.chunkSize && B + y.height < ig.system.realHeight) && (g += this.chunkSize - y.height, j++)
			}
		},
		drawTiled: function() {
			for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
					f = (this.scroll.y / this.tilesize).toInt(), e = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, n = -e - this.tilesize, e = ig.system.width + this.tilesize - e, l = ig.system.height + this.tilesize - j, g = -1, j = -j - this.tilesize; j < l; g++, j += this.tilesize) {
				var r = g + f;
				if (r >= this.height || 0 > r) {
					if (!this.repeat) continue;
					r = (r % this.height + this.height) % this.height
				}
				for (var z = -1, y = n; y < e; z++, y += this.tilesize) {
					b = z + d;
					if (b >= this.width || 0 > b) {
						if (!this.repeat) continue;
						b = (b % this.width + this.width) % this.width
					}
					if (b = this.data[r][b])(c = this.anims[b -
						1]) ? c.draw(y, j) : this.tiles.drawTile(y, j, b - 1, this.tilesize)
				}
			}
		}
	})
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
	ig.Game = ig.Class.extend({
		clearColor: "#000000",
		gravity: 0,
		screen: {
			x: 0,
			y: 0
		},
		_rscreen: {
			x: 0,
			y: 0
		},
		entities: [],
		namedEntities: {},
		collisionMap: ig.CollisionMap.staticNoCollision,
		backgroundMaps: [],
		backgroundAnims: {},
		autoSort: !1,
		sortBy: null,
		cellSize: 64,
		_deferredKill: [],
		_levelToLoad: null,
		_doSortEntities: !1,
		staticInstantiate: function() {
			this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
			ig.game = this;
			return null
		},
		loadLevel: function(b) {
			this.screen = {
				x: 0,
				y: 0
			};
			this.entities = [];
			this.namedEntities = {};
			for (var c = 0; c < b.entities.length; c++) {
				var d = b.entities[c];
				this.spawnEntity(d.type, d.x, d.y, d.settings)
			}
			this.sortEntities();
			this.collisionMap = ig.CollisionMap.staticNoCollision;
			this.backgroundMaps = [];
			for (c = 0; c < b.layer.length; c++)
				if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
				else {
					var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
					f.anims = this.backgroundAnims[d.tilesetName] || {};
					f.repeat = d.repeat;
					f.distance = d.distance;
					f.foreground = !!d.foreground;
					f.preRender = !!d.preRender;
					f.name = d.name;
					this.backgroundMaps.push(f)
				}
			for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
		},
		loadLevelDeferred: function(b) {
			this._levelToLoad = b
		},
		getMapByName: function(b) {
			if ("collision" == b) return this.collisionMap;
			for (var c = 0; c < this.backgroundMaps.length; c++)
				if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
			return null
		},
		getEntityByName: function(b) {
			return this.namedEntities[b]
		},
		getEntitiesByType: function(b) {
			b =
				"string" === typeof b ? ig.global[b] : b;
			for (var c = [], d = 0; d < this.entities.length; d++) {
				var f = this.entities[d];
				f instanceof b && !f._killed && c.push(f)
			}
			return c
		},
		spawnEntity: function(b, c, d, f) {
			var e = "string" === typeof b ? ig.global[b] : b;
			if (!e) throw "Can't spawn entity of type " + b;
			b = new e(c, d, f || {});
			this.entities.push(b);
			b.name && (this.namedEntities[b.name] = b);
			return b
		},
		sortEntities: function() {
			this.entities.sort(this.sortBy)
		},
		sortEntitiesDeferred: function() {
			this._doSortEntities = !0
		},
		removeEntity: function(b) {
			b.name &&
				delete this.namedEntities[b.name];
			b._killed = !0;
			b.type = ig.Entity.TYPE.NONE;
			b.checkAgainst = ig.Entity.TYPE.NONE;
			b.collides = ig.Entity.COLLIDES.NEVER;
			this._deferredKill.push(b)
		},
		run: function() {
			this.update();
			this.draw()
		},
		update: function() {
			this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
			this.updateEntities();
			this.checkEntities();
			for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
			this._deferredKill = [];
			if (this._doSortEntities ||
				this.autoSort) this.sortEntities(), this._doSortEntities = !1;
			for (var c in this.backgroundAnims) {
				var b = this.backgroundAnims[c],
					d;
				for (d in b) b[d].update()
			}
		},
		updateEntities: function() {
			for (var b = 0; b < this.entities.length; b++) {
				var c = this.entities[b];
				c._killed || c.update()
			}
		},
		draw: function() {
			this.clearColor && ig.system.clear(this.clearColor);
			this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
			this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
			var b;
			for (b = 0; b < this.backgroundMaps.length; b++) {
				var c =
					this.backgroundMaps[b];
				if (c.foreground) break;
				c.setScreenPos(this.screen.x, this.screen.y);
				c.draw()
			}
			this.drawEntities();
			for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
		},
		drawEntities: function() {
			for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
		},
		checkEntities: function() {
			for (var b = {}, c = 0; c < this.entities.length; c++) {
				var d = this.entities[c];
				if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
					for (var f = {}, e = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, l = Math.floor(d.pos.x / this.cellSize); l < j; l++)
						for (var g = e; g < n; g++)
							if (b[l])
								if (b[l][g]) {
									for (var r = b[l][g], z = 0; z < r.length; z++) d.touches(r[z]) && !f[r[z].id] && (f[r[z].id] = !0, ig.Entity.checkPair(d, r[z]));
									r.push(d)
								} else b[l][g] = [d];
				else b[l] = {}, b[l][g] = [d]
			}
		}
	});
	ig.Game.SORT = {
		Z_INDEX: function(b, c) {
			return b.zIndex - c.zIndex
		},
		POS_X: function(b, c) {
			return b.pos.x + b.size.x - (c.pos.x +
				c.size.x)
		},
		POS_Y: function(b, c) {
			return c.pos.y + c.size.y - (b.pos.y + b.size.y)
		}
	}
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
	ig.System && (ig.System.SCALE = {
		CRISP: function(b, c) {
			c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
			b.style.imageRendering = "-moz-crisp-edges";
			b.style.imageRendering = "-o-crisp-edges";
			b.style.imageRendering = "-webkit-optimize-contrast";
			b.style.imageRendering = "crisp-edges";
			b.style.msInterpolationMode = "nearest-neighbor"
		},
		SMOOTH: function(b, c) {
			c.imageSmoothingEnabled = c.msImageSmoothingEnabled =
				c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
			b.style.imageRendering = "";
			b.style.msInterpolationMode = ""
		}
	}, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").requires("impact.input").defines(function() {
	var b = !1;
	try {
		b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
	} catch (c) {
		b = !0
	}
	ig.Input.inject({
		keydown: function(c) {
			var f = c.target.tagName;
			if (!("INPUT" == f || "TEXTAREA" == f))
				if (f = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > f && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), f = this.bindings[f]) this.actions[f] = !0, this.locks[f] || (this.presses[f] = !0, this.locks[f] = !0), c.stopPropagation(), c.preventDefault()
		}
	})
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
	ig.DomHandler = ig.Class.extend({
		JQUERYAVAILABLE: !1,
		init: function() {
			this.JQUERYAVAILABLE = this._jqueryAvailable()
		},
		_jqueryAvailable: function() {
			return "undefined" !== typeof jQuery
		},
		addEvent: function(b, c, d, f) {
			if (this.JQUERYAVAILABLE) b.on(c, d);
			else b.addEventListener(c, d, f)
		},
		create: function(b) {
			return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
		},
		getElementByClass: function(b) {
			return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
		},
		getElementById: function(b) {
			return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
		},
		appendChild: function(b, c) {
			this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
		},
		appendToBody: function(b) {
			this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
		},
		resize: function(b, c, d) {
			if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
			else {
				var f = b.style.visibility;
				c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
				this.attr(b, "style", c);
				b.style.visibility = f
			}
		},
		resizeOffsetLeft: function(b,
			c, d, f) {
			if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", f);
			else {
				var e = b.style.visibility;
				c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + f.toFixed(2) + "px;";
				this.attr(b, "style", c);
				b.style.visibility = e
			}
		},
		resizeOffset: function(b, c, d, f, e) {
			if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", f), b.css("top", e);
			else {
				var j = b.style.visibility;
				c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + f.toFixed(2) + "px; top: " +
					e.toFixed(2) + "px;";
				this.attr(b, "style", c);
				b.style.visibility = j
			}
		},
		css: function(b, c) {
			if (this.JQUERYAVAILABLE) b.css(c);
			else {
				var d = "",
					f;
				for (f in c) d += f + ":" + c[f] + ";";
				this.attr(b, "style", d)
			}
		},
		getOffsets: function(b) {
			return this.JQUERYAVAILABLE ? (b = b.offset(), {
				left: b.left,
				top: b.top
			}) : {
				left: b.offsetLeft,
				top: b.offsetTop
			}
		},
		attr: function(b, c, d) {
			if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
			this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
		},
		show: function(b) {
			this.JQUERYAVAILABLE ?
				(b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
		},
		hide: function(b) {
			this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
		},
		getQueryVariable: function(b) {
			for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
				var f = c[d].split("=");
				if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1])
			}
		},
		forcedDeviceDetection: function() {
			var b =
				this.getQueryVariable("device");
			if (b) switch (b) {
				case "mobile":
					console.log("serving mobile version ...");
					ig.ua.mobile = !0;
					break;
				case "desktop":
					console.log("serving desktop version ...");
					ig.ua.mobile = !1;
					break;
				default:
					console.log("serving universal version ...")
			} else console.log("serving universal version ...")
		},
		forcedDeviceRotation: function() {
			var b = this.getQueryVariable("force-rotate");
			if (b) switch (b) {
				case "portrait":
					console.log("force rotate to portrait");
					window.orientation = 0;
					break;
				case "landscape":
					console.log("force rotate to horizontal");
					window.orientation = 90;
					break;
				default:
					alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
	Vector2 = function(b, c) {
		this.x = b || 0;
		this.y = c || 0
	};
	Vector2.prototype = {
		valType: "number",
		neg: function() {
			this.x = -this.x;
			this.y = -this.y;
			return this
		},
		row: function(b) {
			typeof b === this.valType && (this.y = b);
			return this.y
		},
		col: function(b) {
			typeof b === this.valType && (this.x = b);
			return this.x
		},
		add: function(b) {
			b instanceof Vector2 ? (this.x += b.x, this.y += b.y) : (this.x += b, this.y += b);
			return this
		},
		sub: function(b) {
			b instanceof Vector2 ? (this.x -= b.x, this.y -= b.y) : (this.x -= b, this.y -=
				b);
			return this
		},
		mul: function(b) {
			b instanceof Vector2 ? (this.x *= b.x, this.y *= b.y) : (this.x *= b, this.y *= b);
			return this
		},
		div: function(b) {
			b instanceof Vector2 ? (0 != b.x && (this.x /= b.x), 0 != b.y && (this.y /= b.y)) : 0 != b && (this.x /= b, this.y /= b);
			return this
		},
		equals: function(b) {
			return this.x == b.x && this.y == b.y
		},
		dot: function(b) {
			return this.x * b.x + this.y * b.y
		},
		cross: function(b) {
			return this.x * b.y - this.y * b.x
		},
		length: function() {
			return Math.sqrt(this.dot(this))
		},
		norm: function() {
			return this.divide(this.length())
		},
		min: function() {
			return Math.min(this.x,
				this.y)
		},
		max: function() {
			return Math.max(this.x, this.y)
		},
		toAngles: function() {
			return -Math.atan2(-this.y, this.x)
		},
		angleTo: function(b) {
			return Math.acos(this.dot(b) / (this.length() * b.length()))
		},
		toArray: function(b) {
			return [this.x, this.y].slice(0, b || 2)
		},
		clone: function() {
			return new Vector2(this.x, this.y)
		},
		set: function(b, c) {
			this.x = b;
			this.y = c;
			return this
		},
		unit: function() {
			var b = this.length();
			if (0 < b) return new Vector2(this.x / b, this.y / b);
			throw "Divide by 0 error in unitVector function of vector:" + this;
		},
		turnRight: function() {
			var b =
				this.x;
			this.x = -this.y;
			this.y = b;
			return this
		},
		turnLeft: function() {
			var b = this.x;
			this.x = this.y;
			this.y = -b;
			return this
		},
		rotate: function(b) {
			var c = this.clone();
			this.x = c.x * Math.cos(b) - c.y * Math.sin(b);
			this.y = c.x * Math.sin(b) + c.y * Math.cos(b);
			return this
		}
	};
	Vector2.negative = function(b) {
		return new Vector2(-b.x, -b.y)
	};
	Vector2.add = function(b, c) {
		return c instanceof Vector2 ? new Vector2(b.x + c.x, b.y + c.y) : new Vector2(b.x + v, b.y + v)
	};
	Vector2.subtract = function(b, c) {
		return c instanceof Vector2 ? new Vector2(b.x - c.x, b.y - c.y) :
			new Vector2(b.x - v, b.y - v)
	};
	Vector2.multiply = function(b, c) {
		return c instanceof Vector2 ? new Vector2(b.x * c.x, b.y * c.y) : new Vector2(b.x * v, b.y * v)
	};
	Vector2.divide = function(b, c) {
		return c instanceof Vector2 ? new Vector2(b.x / c.x, b.y / c.y) : new Vector2(b.x / v, b.y / v)
	};
	Vector2.equals = function(b, c) {
		return b.x == c.x && b.y == c.y
	};
	Vector2.dot = function(b, c) {
		return b.x * c.x + b.y * c.y
	};
	Vector2.cross = function(b, c) {
		return b.x * c.y - b.y * c.x
	}
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
	ig.SizeHandler = ig.Class.extend({
		portraitMode: !0,
		disableStretchToFitOnMobileFlag: !1,
		enableStretchToFitOnAntiPortraitModeFlag: !0,
		enableScalingLimitsOnMobileFlag: !1,
		minScalingOnMobile: 0,
		maxScalingOnMobile: 1,
		enableStretchToFitOnDesktopFlag: !1,
		enableScalingLimitsOnDesktopFlag: !1,
		minScalingOnDesktop: 0,
		maxScalingOnDesktop: 1,
		desktop: {
			actualSize: new Vector2(window.innerWidth, window.innerHeight),
			actualResolution: new Vector2(540,
				960)
		},
		mobile: {
			actualSize: new Vector2(window.innerWidth, window.innerHeight),
			actualResolution: new Vector2(540, 960)
		},
		windowSize: new Vector2(window.innerWidth, window.innerHeight),
		scaleRatioMultiplier: new Vector2(1, 1),
		sizeRatio: new Vector2(1, 1),
		scale: 1,
		domHandler: null,
		dynamicClickableEntityDivs: {},
		coreDivsToResize: ["#canvas", "#play", "#orientate"],
		adsToResize: { 
		},
		init: function(b) {
			"true" == getQueryVariable("dev") && (this.desktop = {
				actualSize: new Vector2(window.innerWidth, window.innerHeight),
				actualResolution: new Vector2(5500, 960)
			});
			this.domHandler = b;
			if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
			this.sizeCalcs();
			this.eventListenerSetup();
			this.samsungFix()
		},
		sizeCalcs: function() {
			this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
			if (ig.ua.mobile) {
				this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
				var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
				this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
				if (this.disableStretchToFitOnMobileFlag) {
					var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
					this.enableScalingLimitsOnMobileFlag && (c = c.limit(this.minScalingOnMobile, this.maxScalingOnMobile));
					this.mobile.actualSize.x = b.x * c;
					this.mobile.actualSize.y = b.y * c;
					this.scaleRatioMultiplier.x = c;
					this.scaleRatioMultiplier.y =
						c
				} else this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1
			} else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y =
				this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1) : (c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag && (c = c.limit(this.minScalingOnDesktop, this.maxScalingOnDesktop)), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c, this.scaleRatioMultiplier.x = c, this.scaleRatioMultiplier.y = c)
		},
		resizeLayers: function() {
			for (var b = 0; b < this.coreDivsToResize.length; b++) {
				var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
				if (ig.ua.mobile)
					if (this.disableStretchToFitOnMobileFlag) {
						var d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.mobile.actualSize.x / 2),
							f = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.mobile.actualSize.y / 2);
						0 > d && (d = 0);
						0 > f && (f = 0);
						ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), d, f);
						var e = !1;
						if (e = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth)
							if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(c,
								Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0, 0);
							else {
								var e = new Vector2(window.innerWidth / this.mobile.actualResolution.y, window.innerHeight / this.mobile.actualResolution.x),
									d = Math.min(e.x, e.y),
									e = this.mobile.actualResolution.y * d,
									j = this.mobile.actualResolution.x * d,
									d = Math.floor(ig.sizeHandler.windowSize.x / 2 - e / 2),
									f = Math.floor(ig.sizeHandler.windowSize.y / 2 - j / 2);
								0 > d && (d = 0);
								0 > f && (f = 0);
								ig.domHandler.resizeOffset(c, Math.floor(e), Math.floor(j), d, f)
							}
					} else ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x),
						Math.floor(ig.sizeHandler.mobile.actualSize.y));
				else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2), f = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.desktop.actualSize.y / 2), 0 > d && (d = 0), 0 > f && (f = 0), ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y),
					d, f))
			}
			for (var n in this.adsToResize) b = ig.domHandler.getElementById("#" + n), c = ig.domHandler.getElementById("#" + n + "-Box"), e = (window.innerWidth - this.adsToResize[n]["box-width"]) / 2 + "px", d = (window.innerHeight - this.adsToResize[n]["box-height"]) / 2 + "px", b && ig.domHandler.css(b, {
				width: window.innerWidth,
				height: window.innerHeight
			}), c && ig.domHandler.css(c, {
				left: e,
				top: d
			});
			b = ig.domHandler.getElementById("#canvas");
			c = ig.domHandler.getOffsets(b);
			b = c.left;
			c = c.top;
			e = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
			for (n in this.dynamicClickableEntityDivs) {
				d = ig.domHandler.getElementById("#" + n);
				if (ig.ua.mobile) {
					var j = this.dynamicClickableEntityDivs[n].entity_pos_x,
						l = this.dynamicClickableEntityDivs[n].entity_pos_y,
						g = this.dynamicClickableEntityDivs[n].width,
						f = this.dynamicClickableEntityDivs[n].height;
					this.disableStretchToFitOnMobileFlag ? (j = Math.floor(b + j * this.scaleRatioMultiplier.x) + "px", l = Math.floor(c + l * this.scaleRatioMultiplier.y) + "px", g = Math.floor(g * this.scaleRatioMultiplier.x) + "px", f = Math.floor(f * this.scaleRatioMultiplier.y) +
						"px") : (j = Math.floor(j * this.sizeRatio.x) + "px", l = Math.floor(l * this.sizeRatio.y) + "px", g = Math.floor(g * this.sizeRatio.x) + "px", f = Math.floor(f * this.sizeRatio.y) + "px")
				} else j = this.dynamicClickableEntityDivs[n].entity_pos_x, l = this.dynamicClickableEntityDivs[n].entity_pos_y, g = this.dynamicClickableEntityDivs[n].width, f = this.dynamicClickableEntityDivs[n].height, this.enableStretchToFitOnDesktopFlag ? (j = Math.floor(j * this.sizeRatio.x) + "px", l = Math.floor(l * this.sizeRatio.y) + "px", g = Math.floor(g * this.sizeRatio.x) + "px",
					f = Math.floor(f * this.sizeRatio.y) + "px") : (j = Math.floor(b + j * this.scaleRatioMultiplier.x) + "px", l = Math.floor(c + l * this.scaleRatioMultiplier.y) + "px", g = Math.floor(g * this.scaleRatioMultiplier.x) + "px", f = Math.floor(f * this.scaleRatioMultiplier.y) + "px");
				ig.domHandler.css(d, {
					"float": "left",
					position: "absolute",
					left: j,
					top: l,
					width: g,
					height: f,
					"z-index": 3
				});
				this.dynamicClickableEntityDivs[n]["font-size"] && ig.domHandler.css(d, {
					"font-size": this.dynamicClickableEntityDivs[n]["font-size"] * e + "px"
				})
			}
			$("#ajaxbar").width(this.windowSize.x);
			$("#ajaxbar").height(this.windowSize.y)
		},
		resize: function() {
			this.sizeCalcs();
			this.resizeLayers()
		},
		reorient: function() {
			console.log("changing orientation ...");
			if (ig.ua.mobile) {
				var b = !1,
					b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
					c = this.domHandler.getElementById("#orientate"),
					d = this.domHandler.getElementById("#game");
				b ? (this.domHandler.show(c), this.domHandler.hide(d), console.log("portrait" + window.innerWidth + "," + window.innerHeight)) : (this.domHandler.show(d),
					this.domHandler.hide(c), console.log("landscape" + window.innerWidth + "," + window.innerHeight))
			}
			ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
		},
		resizeAds: function() {
			for (var b in this.adsToResize) {
				var c = ig.domHandler.getElementById("#" + b),
					d = ig.domHandler.getElementById("#" + b + "-Box"),
					f = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
					e = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
				c && ig.domHandler.css(c, {
					width: window.innerWidth,
					height: window.innerHeight
				});
				d && ig.domHandler.css(d, {
					left: f,
					top: e
				})
			}
		},
		samsungFix: function() {
			ig.ua.android && (!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
				b.preventDefault();
				return !1
			}, !1), document.addEventListener("touchmove", function(b) {
				b.preventDefault();
				return !1
			}, !1), document.addEventListener("touchend",
				function(b) {
					b.preventDefault();
					return !1
				}, !1))
		},
		orientationInterval: null,
		orientationTimeout: null,
		orientationHandler: function() {
			this.reorient();
			window.scrollTo(0, 1)
		},
		orientationDelayHandler: function() {
			null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
			null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function() {
				this.clearAllIntervals()
			}.bind(this), 2E3))
		},
		clearAllIntervals: function() {
			window.clearInterval(this.orientationInterval);
			this.orientationInterval = null;
			window.clearTimeout(this.orientationTimeout);
			this.orientationTimeout = null
		},
		eventListenerSetup: function() {
			ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
			document.ontouchmove = function(b) {
				window.scrollTo(0,
					1);
				b.preventDefault()
			};
			this.chromePullDownRefreshFix()
		},
		chromePullDownRefreshFix: function() {
			var b = window.chrome || navigator.userAgent.match("CriOS"),
				c = "ontouchstart" in document.documentElement;
			if (b && c) {
				var d = b = !1,
					f = 0,
					e = !1;
				try {
					CSS.supports("overscroll-behavior-y", "contain") && (b = !0)
				} catch (j) {}
				try {
					if (b) return document.body.style.overscrollBehaviorY = "contain"
				} catch (n) {}
				b = document.head || document.body;
				c = document.createElement("style");
				c.type = "text/css";
				c.styleSheet ? c.styleSheet.cssText = "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    " :
					c.appendChild(document.createTextNode("\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    "));
				b.appendChild(c);
				try {
					addEventListener("test", null, {
						get passive() {
							d = !0
						}
					})
				} catch (l) {}
				document.addEventListener("touchstart", function(b) {
					1 === b.touches.length && (f = b.touches[0].clientY, e = 0 === window.pageYOffset)
				}, !!d && {
					passive: !0
				});
				document.addEventListener("touchmove", function(b) {
					var c;
					if (c = e) {
						e = !1;
						c = b.touches[0].clientY;
						var d = c - f;
						c = (f = c, 0 < d)
					}
					if (c) return b.preventDefault()
				}, !!d && {
					passive: !1
				})
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
	ig.ApiHandler = ig.Class.extend({
		apiAvailable: {
			MJSPreroll: function() {
				ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE// && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
			},
			MJSHeader: function() {
				ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE //&& _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
			},
			MJSFooter: function() {
				ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE// && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
			},
			MJSEnd: function() {
				ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE //&& _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
			}
		},
		run: function(b, c) {
			if (this.apiAvailable[b]) this.apiAvailable[b](c)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
	SoundPlayer = ig.Class.extend({
		tagName: "SoundPlayer",
		stayMuteFlag: !1,
		debug: !1,
		init: function() {
			this.debug && console.log(this.tagName)
		},
		play: function(b) {
			this.debug && console.log("play sound ", b)
		},
		stop: function() {
			this.debug && console.log("stop sound ")
		},
		volume: function() {
			this.debug && console.log("set volume")
		},
		mute: function(b) {
			this.debug && console.log("mute");
			"undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
		},
		unmute: function(b) {
			this.debug &&
				console.log("unmute");
			"undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
	ImpactMusicPlayer = SoundPlayer.extend({
		tagName: "ImpactMusicPlayer",
		bgmPlaying: !1,
		soundList: {},
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
			c && c.loop && (ig.music.loop = c.loop)
		},
		play: function(b) {
			this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
		},
		stop: function() {
			this.bgmPlaying = !1;
			ig.music.pause()
		},
		volume: function(b) {
			console.log("impactmusic:", b);
			ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
		},
		getVolume: function() {
			return ig.music.volume
		},
		mute: function(b) {
			this.parent(b);
			this.bgmPlaying && this.stop()
		},
		unmute: function(b) {
			this.parent(b);
			this.play()
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
	ImpactSoundPlayer = SoundPlayer.extend({
		tagName: "ImpactSoundPlayer",
		soundList: {},
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) {
				var f = new ig.Sound(b[d].path + ".*");
				this.soundList[d] = f
			}
		},
		play: function(b) {
			this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
		},
		stop: function(b) {
			this.parent(b);
			b.stop()
		},
		volume: function(b) {
			ig.soundManager.volume =
				0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
		},
		getVolume: function() {
			return ig.soundManager.volume
		},
		mute: function(b) {
			this.parent(b);
			ig.Sound.enabled = !1
		},
		unmute: function(b) {
			this.parent(b);
			ig.Sound.enabled = !0
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
	HowlerPlayer = SoundPlayer.extend({
		tagName: "HowlerPlayer",
		soundList: {},
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) {
				var f = b[d].path,
					f = new Howl({
						src: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext]
					});
				this.soundList[d] = f
			}
		},
		play: function(b) {
			this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
		},
		stop: function(b) {
			this.parent(b);
			"object" === typeof b ?
				b.stop() : "string" === typeof b && this.soundList[b].stop()
		},
		volume: function(b) {
			for (var c in this.soundList) {
				if (0 > b) {
					this.soundList[c].volume(0);
					break
				}
				isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
			}
		},
		getVolume: function() {
			for (var b in this.soundList) return this.soundList[b].volume()
		},
		mute: function(b) {
			this.parent(b);
			Howler.mute(!0)
		},
		unmute: function(b) {
			this.parent(b);
			Howler.mute(!1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
	HowlerMusicPlayer = SoundPlayer.extend({
		tagName: "HowlerMusicPlayer",
		bgmPlaying: !1,
		soundList: {},
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) {
				var f = b[d].path,
					f = new Howl({
						src: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
						loop: !0,
						autoplay: !1,
						onend: function() {}.bind(this)
					});
				this.soundList[d] = f
			}
		},
		play: function(b) {
			if (!this.stayMuteFlag && !this.bgmPlaying)
				if ("object" === typeof b) this.bgmPlaying = !0, b.play();
				else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
			else
				for (var c in this.soundList) {
					this.soundList[c].play();
					this.bgmPlaying = !0;
					break
				}
		},
		stop: function(b) {
			this.parent(b);
			if (this.bgmPlaying) {
				for (var c in this.soundList) this.soundList[c].stop();
				this.bgmPlaying = !1
			}
		},
		volume: function(b) {
			console.log("howler", b);
			for (var c in this.soundList) {
				if (0 > b) {
					this.soundList[c].volume(0);
					break
				}
				isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
			}
		},
		getVolume: function() {
			for (var b in this.soundList) return this.soundList[b].volume()
		},
		mute: function(b) {
			this.parent(b);
			Howler.mute(!0)
		},
		unmute: function(b) {
			this.parent(b);
			Howler.mute(!1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
	JukeboxPlayer = SoundPlayer.extend({
		tagName: "JukeboxPlayer",
		bgmPlaying: !1,
		soundList: {},
		jukeboxPlayer: null,
		pausePosition: 0,
		premuteVolume: 0,
		minVolume: 0.001,
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) {
				this.soundList[d] = d;
				var f = b[d].path;
				this.jukeboxPlayer = new jukebox.Player({
					resources: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
					autoplay: !1,
					spritemap: {
						music: {
							start: b[d].startMp3,
							end: b[d].endMp3,
							loop: !0
						}
					}
				})
			}
		},
		play: function() {
			this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
		},
		stop: function() {
			this.bgmPlaying = !1;
			this.pausePosition = this.jukeboxPlayer.pause()
		},
		volume: function(b) {
			console.log("jukebox:", b);
			0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) :
				1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
		},
		getVolume: function() {
			return this.jukeboxPlayer.getVolume()
		},
		mute: function(b) {
			this.parent(b);
			this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
		},
		unmute: function(b) {
			this.parent(b);
			this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
	WebaudioMusicPlayer = SoundPlayer.extend({
		tagName: "WebaudioMusicPlayer",
		bgmPlaying: !1,
		isSupported: !1,
		muteFlag: !1,
		pausedTime: 0,
		webaudio: null,
		useHTML5Audio: !1,
		audio: null,
		inactiveAudio: null,
		codecs: null,
		reinitOnPlay: !1,
		inputList: null,
		_volume: 1,
		soundList: {},
		init: function(b) {
			this.webaudio = {
				compatibility: {},
				gainNode: null,
				buffer: null,
				source_loop: {},
				source_once: {}
			};
			try {
				Howler && Howler.ctx ? this.webaudio.context = Howler.ctx :
					ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx : (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, ig.webaudio_ctx = this.webaudio.context), this.isSupported = !0
			} catch (c) {
				console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
			}
			if (this.useHTML5Audio)
				if ("undefined" !== typeof Audio) try {
					new Audio
				} catch (d) {
					this.useHTML5Audio = !1
				} else this.useHTML5Audio = !1;
			this.useHTML5Audio && (this.audio = new Audio,
				this.isSupported = !0, this.initHTML5Audio(b));
			if (!this.isSupported) return null;
			this.webaudio && (this.inputList = b, this.initWebAudio(b))
		},
		initWebAudio: function(b) {
			ig.ua.iOS && this.initIOSWebAudioUnlock();
			this.webaudio.gainNode = this.webaudio.context.createGain();
			this.webaudio.gainNode.connect(this.webaudio.context.destination);
			this.webaudio.gainNode.gain.value = this._volume;
			this.webaudio.buffer = null;
			var c = "start",
				d = "stop",
				f = this.webaudio.context.createBufferSource();
			"function" !== typeof f.start && (c = "noteOn");
			this.webaudio.compatibility.start = c;
			"function" !== typeof f.stop && (d = "noteOff");
			this.webaudio.compatibility.stop = d;
			for (var e in b) {
				this.soundList[e] = e;
				var d = b[e].path,
					c = d + "." + ig.Sound.FORMAT.MP3.ext,
					j = d + "." + ig.Sound.FORMAT.OGG.ext;
				ig.ua.mobile ? ig.ua.iOS && (j = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (j = c), d.indexOf("win64") && (j = c));
				var n = new XMLHttpRequest;
				n.open("GET", j, !0);
				n.responseType = "arraybuffer";
				n.onload = function() {
					this.webaudio.context.decodeAudioData(n.response,
						function(b) {
							this.webaudio.buffer = b;
							this.webaudio.source_loop = {};
							this.bgmPlaying ? this.play(null, !0) : this.stop()
						}.bind(this),
						function() {
							console.log('Error decoding audio "' + j + '".')
						})
				}.bind(this);
				n.send();
				if (4 == n.readyState && "undefined" !== typeof Audio) {
					this.useHTML5Audio = !0;
					try {
						new Audio
					} catch (l) {
						this.useHTML5Audio = !1
					}
					this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b))
				}
				break
			}
		},
		initIOSWebAudioUnlock: function() {
			if (this.webaudio) {
				webaudio =
					this.webaudio;
				var b = function() {
					var c = webaudio.context,
						d = c.createBuffer(1, 1, 22050),
						f = c.createBufferSource();
					f.buffer = d;
					f.connect(c.destination);
					"undefined" === typeof f.start ? f.noteOn(0) : f.start(0);
					setTimeout(function() {
						(f.playbackState === f.PLAYING_STATE || f.playbackState === f.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
					}.bind(this), 0)
				};
				window.addEventListener("touchend", b, !1)
			}
		},
		initHTML5Audio: function(b) {
			if (this.useHTML5Audio && this.audio) {
				var c = this.audio;
				this.codecs = {};
				this.codecs = {
					mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/,
						""),
					opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
					ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
					wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
					aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
					m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
					mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
					weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,
						"")
				};
				this.is = {
					ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
					ie: Boolean(document.all && !window.opera),
					opera: Boolean(window.opera),
					chrome: Boolean(window.chrome),
					safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
				};
				this.playDelay = -60;
				this.stopDelay = 30;
				this.is.chrome && (this.playDelay = -25);
				this.is.chrome && (this.stopDelay = 25);
				this.is.ff && (this.playDelay = -25);
				this.is.ff &&
					(this.stopDelay = 85);
				this.is.opera && (this.playDelay = 5);
				this.is.opera && (this.stopDelay = 0);
				for (var d in b) {
					this.soundList[d] = d;
					var f = b[d].path,
						c = f + "." + ig.Sound.FORMAT.OGG.ext,
						f = f + "." + ig.Sound.FORMAT.MP3.ext,
						e = null;
					this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? e = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (e = f);
					if (e) {
						ig.ua.mobile ? ig.ua.iOS && (e = f) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (e = f));
						this.audio.addEventListener("error", function() {
							this.audio.error &&
								4 === this.audio.error.code && (this.isSupported = !1)
						}, !1);
						this.audio.src = e;
						this.audio._pos = 0;
						this.audio.preload = "auto";
						this.audio.volume = this._volume;
						this.inactiveAudio = new Audio;
						this.inactiveAudio.src = e;
						this.inactiveAudio._pos = 0;
						this.inactiveAudio.preload = "auto";
						this.inactiveAudio.volume = this._volume;
						this.inactiveAudio.load();
						var j = function() {
							this._duration = this.audio.duration;
							this._loaded || (this._loaded = !0);
							this.bgmPlaying ? this.play(null, !0) : this.stop();
							this.audio.removeEventListener("canplaythrough",
								j, !1)
						}.bind(this);
						this.audio.addEventListener("canplaythrough", j, !1);
						this.audio.load();
						break
					}
				}
			}
		},
		play: function(b, c) {
			if (this.isSupported)
				if (this.bgmPlaying = !0, this.webaudio) {
					if (!c && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
						if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %=
								this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0);
						try {
							this.webaudio.context.close();
							this.webaudio.context = new this.AudioContext;
							this.webaudio.gainNode = this.webaudio.context.createGain();
							this.webaudio.gainNode.connect(this.webaudio.context.destination);
							this.webaudio.gainNode.gain.value = this._volume;
							var d = "start",
								f = "stop",
								e = this.webaudio.context.createBufferSource();
							"function" !== typeof e.start && (d = "noteOn");
							this.webaudio.compatibility.start = d;
							"function" !== typeof e.stop && (f = "noteOff");
							this.webaudio.compatibility.stop = f;
							this.webaudio.source_loop = {};
							this.play(null, !0)
						} catch (j) {}
					}
					if (this.webaudio.buffer) {
						if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
							this.webaudio.source_loop = this.webaudio.context.createBufferSource();
							this.webaudio.source_loop.buffer = this.webaudio.buffer;
							this.webaudio.source_loop.loop = !0;
							this.webaudio.source_loop.connect(this.webaudio.gainNode);
							if (null == b || isNaN(b)) b = 0, this.pausedTime && (b = this.pausedTime);
							this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
							if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime +
								(this.webaudio.buffer.duration - b));
							else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
							this.webaudio.source_loop._playing = !0
						}
					} else this.bgmPlaying = !0
				} else if (this.audio) {
				var n = this.audio;
				if (!this.muteFlag)
					if (this.bgmPlaying = !0, isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime)), d = this._duration - b, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null), this._onEndTimer = setTimeout(function() {
							this.audio.currentTime = 0;
							this.audio.pause();
							this.pausedTime = 0;
							if (this.inactiveAudio) {
								var b =
									this.audio;
								this.audio = this.inactiveAudio;
								this.inactiveAudio = b
							}
							this.play()
						}.bind(this), 1E3 * d + this.playDelay), 4 === n.readyState || !n.readyState && navigator.isCocoonJS) n.readyState = 4, n.currentTime = b, n.muted = this.muteFlag || n.muted, n.volume = this._volume, setTimeout(function() {
						n.play()
					}, 0);
					else {
						clearTimeout(this._onEndTimer);
						this._onEndTimer = null;
						var l = function() {
							typeof("function" == this.play) && (this.play(), n.removeEventListener("canplaythrough", l, !1))
						}.bind(this);
						n.addEventListener("canplaythrough", l, !1)
					}
			}
		},
		stop: function() {
			this.bgmPlaying = !1;
			if (this.isSupported)
				if (this.webaudio) {
					if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
				} else if (this.audio) {
				var b =
					this.audio;
				4 == b.readyState && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null)
			}
		},
		volume: function(b) {
			if (isNaN(b) || null == b) return this.getVolume();
			this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
		},
		getVolume: function() {
			return !this.isSupported ?
				0 : this._volume
		},
		mute: function(b) {
			this.parent(b);
			!1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
		},
		unmute: function(b) {
			this.parent(b);
			!this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
	SoundInfo = ig.Class.extend({
		FORMATS: {
			OGG: ".ogg",
			MP3: ".mp3"
		},
		sfx: {
			kittyopeningSound: {
				path: "media/audio/opening/kittyopening"
			},
			staticSound: {
				path: "media/audio/play/static"
			},
			openingSound: {
				path: "media/audio/opening/opening"
			},
			click: {
				path: "media/audio/sound/click"
			},
			ropeOn: {
				path: "media/audio/sound/rope-on"
			},
			ropeOff: {
				path: "media/audio/sound/rope-off"
			},
			lose: {
				path: "media/audio/sound/lose"
			},
			win: {
				path: "media/audio/sound/win"
			},
			bounce: {
				path: "media/audio/sound/bounce"
			}
		},
		bgm: {
			background: {
				path: "media/audio/bgm",
				startOgg: 0,
				endOgg: 21.463,
				startMp3: 0,
				endMp3: 21.463
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
	ig.SoundHandler = ig.Class.extend({
		bgmPlayer: null,
		sfxPlayer: null,
		focusBlurMute: !1,
		soundInfo: new SoundInfo,
		init: function() {
			console.log("Initiating sound handler");
			this.initWindowHandler();
			ig.ua.mobile ?
				(this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
					loop: !0
				}), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
					loop: !0
				}))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
					loop: !0
				}), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
					loop: !0
				})));
			this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
		},
		checkBGM: function() {
			return this.bgmPlayer.stayMuteFlag
		},
		checkSFX: function() {
			return this.sfxPlayer.stayMuteFlag
		},
		muteSFX: function(b) {
			this.sfxPlayer && this.sfxPlayer.mute(b)
		},
		muteBGM: function(b) {
			this.bgmPlayer && this.bgmPlayer.mute(b)
		},
		unmuteSFX: function(b) {
			this.sfxPlayer && this.sfxPlayer.unmute(b)
		},
		unmuteBGM: function(b) {
			this.bgmPlayer && this.bgmPlayer.unmute(b)
		},
		muteAll: function(b) {
			this.muteSFX(b);
			this.muteBGM(b)
		},
		unmuteAll: function(b) {
			ig.gd.isFreez || (this.unmuteSFX(b), this.unmuteBGM(b))
		},
		forceMuteAll: function() {
			this.focusBlurMute || this.muteAll(!1);
			this.focusBlurMute = !0
		},
		forceUnMuteAll: function() {
			!ig.gd.isFreez &&
				this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
		},
		initWindowHandler: function() {
			"true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
				if (ig.game) {
					if (ig.gd.isFreez) return;
					ig.game.resumeGame()
				}
				ig.soundHandler && !ig.gd.isFreez && ig.soundHandler.forceUnMuteAll()
			}), $(window).blur(function() {
				ig.game && ig.game.pauseGame();
				ig.soundHandler && ig.soundHandler.forceMuteAll()
			})) : (window.onfocus = function() {
				if (ig.game) {
					if (ig.gd.isFreez) return;
					ig.game.resumeGame()
				}
				ig.soundHandler &&
					!ig.gd.isFreez && ig.soundHandler.forceUnMuteAll()
			}, window.onblur = function() {
				ig.game && ig.game.pauseGame();
				ig.soundHandler && ig.soundHandler.forceMuteAll()
			})
		},
		initPowerButtonFix: function() {
			var b = this.getHiddenProp();
			b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
			window.addEventListener("pagehide", function() {
				ig.soundHandler && ig.soundHandler.forceMuteAll()
			}, !1);
			window.addEventListener("pageshow", function() {
				ig.soundHandler && !ig.gd.isFreez && ig.soundHandler.forceUnMuteAll()
			}, !1)
		},
		getHiddenProp: function() {
			var b = ["webkit", "moz", "ms", "o"];
			if ("hidden" in document) return "hidden";
			for (var c = 0; c < b.length; c++)
				if (b[c] + "Hidden" in document) return b[c] + "Hidden";
			return null
		},
		isHidden: function() {
			var b = this.getHiddenProp();
			return !b ? !1 : document[b]
		},
		visChange: function() {
			ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && !ig.gd.isFreez && ig.soundHandler.forceUnMuteAll()
		},
		saveVolume: function() {
			this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
			this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
		},
		forceLoopBGM: function() {
			var b;
			if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
				var c = this.bgmPlayer.jukeboxPlayer;
				if (c) {
					null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
					b = Boolean(window.chrome);
					!window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
					var d = 0.1;
					ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
					c.settings.spritemap.music && (b = c.settings.spritemap.music.end -
						d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
							ig.soundHandler.forcelooped = !1
						}, d)) : c.setCurrentTime(b)))
				} else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" ==
					ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
						ig.soundHandler.forcelooped = !1
					}, d)) : ig.music.currentTrack.currentTime = c)))
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
	ig.Storage = ig.Class.extend({
		staticInstantiate: function() {
			return !ig.Storage.instance ? null : ig.Storage.instance
		},
		init: function() {
			ig.Storage.instance = this
		},
		isCapable: function() {
			return "undefined" !== typeof window.localStorage
		},
		isSet: function(b) {
			return null !== this.get(b)
		},
		initUnset: function(b, c) {
			null === this.get(b) && this.set(b, c)
		},
		get: function(b) {
			if (!this.isCapable()) return null;
			try {
				return JSON.parse(localStorage.getItem(b))
			} catch (c) {
				return window.localStorage.getItem(b)
			}
		},
		getInt: function(b) {
			return ~~this.get(b)
		},
		getFloat: function(b) {
			return parseFloat(this.get(b))
		},
		getBool: function(b) {
			return !!this.get(b)
		},
		key: function(b) {
			return this.isCapable() ? window.localStorage.key(b) : null
		},
		set: function(b, c) {
			if (!this.isCapable()) return null;
			try {
				window.localStorage.setItem(b, JSON.stringify(c))
			} catch (d) {
				console.log(d)
			}
		},
		setHighest: function(b, c) {
			c > this.getFloat(b) && this.set(b, c)
		},
		remove: function(b) {
			if (!this.isCapable()) return null;
			window.localStorage.removeItem(b)
		},
		clear: function() {
			if (!this.isCapable()) return null;
			window.localStorage.clear()
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
	Mouse = ig.Class.extend({
		bindings: {
			click: [ig.KEY.MOUSE1]
		},
		init: function() {
			ig.input.initMouse();
			for (var b in this.bindings) {
				this[b] = b;
				for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
			}
		},
		getPos: function() {
			if (ig.ua.mobile) {
				var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
					c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
				return new Vector2(b / ig.sizeHandler.scaleRatioMultiplier.x, c / ig.sizeHandler.scaleRatioMultiplier.y)
			}
			b = ig.input.mouse.x /
				ig.sizeHandler.sizeRatio.x;
			c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
			return new Vector2(b, c)
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
	Keyboard = ig.Class.extend({
		bindings: {
			jump: [ig.KEY.W, ig.KEY.UP_ARROW],
			moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
			moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
			shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
		},
		init: function() {
			for (var b in this.bindings) {
				this[b] = b;
				for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
	ig.PADKEY = {
		BUTTON_0: 0,
		PADBUTTON_1: 1,
		BUTTON_2: 2,
		BUTTON_3: 3,
		BUTTON_LEFT_BUMPER: 4,
		BUTTON_RIGHT_BUMPER: 5,
		BUTTON_LEFT_TRIGGER: 6,
		BUTTON_RIGHT_TRIGGER: 7,
		BUTTON_LEFT_JOYSTICK: 10,
		BUTTON_RIGHT_JOYSTICK: 11,
		BUTTON_DPAD_UP: 12,
		BUTTON_DPAD_DOWN: 13,
		BUTTON_DPAD_LEFT: 14,
		BUTTON_DPAD_RIGHT: 15,
		BUTTON_MENU: 16,
		AXIS_LEFT_JOYSTICK_X: 0,
		AXIS_LEFT_JOYSTICK_Y: 1,
		AXIS_RIGHT_JOYSTICK_X: 2,
		AXIS_RIGHT_JOYSTICK_Y: 3
	};
	ig.GamepadInput = ig.Class.extend({
		isInit: !1,
		isSupported: !1,
		list: [],
		bindings: {},
		states: {},
		presses: {},
		releases: {},
		downLocks: {},
		upLocks: {},
		leftStick: {
			x: 0,
			y: 0
		},
		rightStick: {
			x: 0,
			y: 0
		},
		start: function() {
			if (!this.isInit) {
				this.isInit = !0;
				var b = navigator.getGamepads || navigator.webkitGetGamepads;
				b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
				this.isSupported = b
			}
		},
		isAvailable: function() {
			return this.isInit && this.isSupported
		},
		buttonPressed: function(b) {
			return "object" == typeof b ? b.pressed :
				1 == b
		},
		buttonDown: function(b) {
			if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
		},
		buttonUp: function(b) {
			if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
		},
		clearPressed: function() {
			for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
			this.releases = {};
			this.presses = {};
			this.upLocks = {}
		},
		bind: function(b, c) {
			this.bindings[b] = c
		},
		unbind: function(b) {
			this.releases[this.bindings[b]] = !0;
			this.bindings[b] = null
		},
		unbindAll: function() {
			this.bindings = {};
			this.states = {};
			this.presses = {};
			this.releases = {};
			this.downLocks = {};
			this.upLocks = {}
		},
		state: function(b) {
			return this.states[b]
		},
		pressed: function(b) {
			return this.presses[b]
		},
		released: function(b) {
			return this.releases[b]
		},
		clamp: function(b, c, d) {
			return b < c ? c : b > d ? d : b
		},
		pollGamepads: function() {
			if (this.isSupported) {
				this.leftStick.x = 0;
				this.leftStick.y = 0;
				this.rightStick.x = 0;
				this.rightStick.y = 0;
				this.list = navigator.getGamepads();
				for (var b in this.bindings) {
					for (var c = !1, d = 0; d < this.list.length; d++) {
						var f = this.list[d];
						if (f && f.buttons && this.buttonPressed(f.buttons[b])) {
							c = !0;
							break
						}
					}
					c ? this.buttonDown(b) : this.buttonUp(b)
				}
				for (d = 0; d < this.list.length; d++)
					if ((f = this.list[d]) && f.axes) {
						b = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
						var c = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
							e = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
							f = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
						this.leftStick.x += isNaN(b) ? 0 : b;
						this.leftStick.y += isNaN(c) ? 0 : c;
						this.rightStick.x += isNaN(e) ? 0 : e;
						this.rightStick.y +=
							isNaN(f) ? 0 : f
					}
				0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
	Gamepad = ig.Class.extend({
		bindings: {
			padJump: [ig.PADKEY.BUTTON_0]
		},
		init: function() {
			ig.gamepadInput.start();
			for (var b in this.bindings)
				for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
		},
		press: function() {},
		held: function() {},
		release: function() {}
	})
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
	Multitouch = ig.Class.extend({
		init: function() {
			ig.multitouchInput.start()
		},
		getTouchesPos: function() {
			if (ig.ua.mobile) {
				if (0 < ig.multitouchInput.touches.length) {
					for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
						var d = ig.multitouchInput.touches[c];
						b.push({
							x: d.x,
							y: d.y
						})
					}
					return b
				}
				return null
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
	ig.MultitouchInput = ig.Class.extend({
		isStart: !1,
		touches: [],
		multitouchCapable: !1,
		lastEventUp: null,
		start: function() {
			this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
				this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
		},
		touchmove: function(b) {
			if (ig.ua.touchDevice) {
				var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
					d = parseInt(ig.system.canvas.offsetHeight) ||
					ig.system.realHeight,
					c = ig.system.scale * (c / ig.system.realWidth),
					d = ig.system.scale * (d / ig.system.realHeight);
				if (b.touches) {
					for (; 0 < this.touches.length;) this.touches.pop();
					!this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
					var f = {
						left: 0,
						top: 0
					};
					ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
					for (var e = 0; e < b.touches.length; e++) {
						var j = b.touches[e];
						j && this.touches.push({
							x: (j.clientX - f.left) / c,
							y: (j.clientY - f.top) / d
						})
					}
				} else this.windowMove(b)
			}
		},
		touchdown: function(b) {
			var c =
				parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
				d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale * (d / ig.system.realHeight);
			if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
			else if (ig.ua.touchDevice && b.touches) {
				for (; 0 < this.touches.length;) this.touches.pop();
				!this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
				var f = {
					left: 0,
					top: 0
				};
				ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
				for (var e = 0; e < b.touches.length; e++) {
					var j = b.touches[e];
					j && this.touches.push({
						x: (j.clientX - f.left) / c,
						y: (j.clientY - f.top) / d
					})
				}
			}
		},
		touchup: function(b) {
			var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
			parseInt(ig.system.canvas.offsetHeight);
			c = ig.system.scale * (c / ig.system.realWidth);
			if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
			else {
				this.lastEventUp = b;
				var d = {
					left: 0,
					top: 0
				};
				ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
				if (ig.ua.touchDevice) {
					b =
						(b.changedTouches[0].clientX - d.left) / c;
					for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
				}
			}
		},
		windowKeyDown: function(b) {
			var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
				d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale * (d / ig.system.realHeight);
			if (window.navigator.msPointerEnabled) {
				var f = {
					left: 0,
					top: 0
				};
				ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
				b = b.changedTouches ? b.changedTouches : [b];
				for (var e = 0; e < b.length; ++e) {
					for (var j = b[e], n = "undefined" != typeof j.identifier ? j.identifier : "undefined" != typeof j.pointerId ? j.pointerId : 1, l = (j.clientX - f.left) / c, j = (j.clientY - f.top) / d, g = 0; g < this.touches.length; ++g) this.touches[g].identifier == n && this.touches.splice(g, 1);
					this.touches.push({
						x: l,
						y: j,
						identifier: n
					})
				}
				for (c = 0; c < this.touches.length; c++);
			}
		},
		windowKeyUp: function(b) {
			b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
				1;
			for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
			for (; 0 < this.touches.length;) this.touches.pop()
		},
		windowMove: function(b) {
			var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
				d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale * (d / ig.system.realHeight),
				f = {
					left: 0,
					top: 0
				};
			ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
			if (window.navigator.msPointerEnabled)
				for (var e =
						"undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, j = 0; j < this.touches.length; ++j)
					if (this.touches[j].identifier == e) {
						var n = (b.clientY - f.top) / d;
						this.touches[j].x = (b.clientX - f.left) / c;
						this.touches[j].y = n
					}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.fake-storage").requires("impact.game").defines(function() {
	ig.FakeStorage = ig.Class.extend({
		tempData: {},
		init: function() {
			ig.FakeStorage.instance = this
		},
		initUnset: function(b, c) {
			null === this.get(b) && this.set(b, c)
		},
		set: function(b, c) {
			this.tempData[b] = JSON.stringify(c)
		},
		setHighest: function(b, c) {
			c > this.getFloat(b) && this.set(b, c)
		},
		get: function(b) {
			return "undefined" == typeof this.tempData[b] ? null : JSON.parse(this.tempData[b])
		},
		getInt: function(b) {
			return ~~this.get(b)
		},
		getFloat: function(b) {
			return parseFloat(this.get(b))
		},
		getBool: function(b) {
			return !!this.get(b)
		},
		isSet: function(b) {
			return null !== this.get(b)
		},
		remove: function(b) {
			delete this.tempData[b]
		},
		clear: function() {
			this.tempData = {}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.io.fake-storage").defines(function() {
	IoManager = ig.Class.extend({
		storage: null,
		localStorageSupport: !1,
		mouse: null,
		keyboard: null,
		multitouch: null,
		gamepad: null,
		init: function() {
			ig.multitouchInput = new ig.MultitouchInput;
			ig.gamepadInput = new ig.GamepadInput;
			this.unbindAll();
			this.initStorage();
			this.initMouse();
			this.initKeyboard()
		},
		unbindAll: function() {
			ig.input.unbindAll();
			ig.gamepadInput.unbindAll()
		},
		initStorage: function() {
			try {
				window.localStorage.setItem("test", "test"), this.storage = new ig.Storage
			} catch (b) {
				console.log("using fake storage"), this.storage = new ig.FakeStorage
			} finally {
				window.localStorage.removeItem("test")
			}
		},
		initMouse: function() {
			this.mouse = new Mouse
		},
		initKeyboard: function() {
			this.keyboard = new Keyboard
		},
		initMultitouch: function() {
			this.multitouch = new Multitouch
		},
		initGamepad: function() {
			this.gamepad =
				new Gamepad
		},
		press: function(b) {
			return ig.input.pressed(b) || this.gamepad && this.gamepad.press(b) ? !0 : !1
		},
		held: function(b) {
			return ig.input.state(b) || this.gamepad && this.gamepad.state(b) ? !0 : !1
		},
		release: function(b) {
			return ig.input.released(b) || this.gamepad && this.gamepad.released(b) ? !0 : !1
		},
		getClickPos: function() {
			return this.mouse.getPos()
		},
		getTouchesPos: function() {
			return this.multitouch.getTouchesPos()
		},
		checkOverlap: function(b, c, d, f, e) {
			return b.x > c + f || b.x < c || b.y > d + e || b.y < d ? !1 : !0
		},
		_supportsLocalStorage: function() {
			try {
				return localStorage.setItem("test",
					"test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
			} catch (b) {
				return this.localStorageSupport
			}
		},
		storageIsSet: function(b) {
			return !this.localStorageSupport ? null : this.storage.isSet(b)
		},
		storageGet: function(b) {
			return !this.localStorageSupport ? null : this.storage.get(b)
		},
		storageSet: function(b, c) {
			if (!this.localStorageSupport) return null;
			this.storage.set(b, c)
		},
		assert: function(b, c, d) {
			if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " +
				b;
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.storage-manager").requires("impact.game", "plugins.io.io-manager").defines(function() {
	ig.Game.prototype.name = "STP-Game";
	ig.Game.prototype.version = "1.0";
	ig.Game.prototype.sessionData = {};
	ig.Game.prototype.initData = function() {
		return this.sessionData = {
			sound: 0.5,
			music: 0.5,
			highscore: 0
		}
	};
	ig.Game.prototype.setupStorageManager = function() {
		"undefined" === typeof this.name ? console.error("Cannot found Game Name, Storage Manager Cancelled.") : "undefined" === typeof this.version ? console.error("Cannot found Game Version, Storage Manager Cancelled.") :
			(this.io || (this.io = new IoManager, console.log("IO Manager doesn't existed. Initialize...")), console.log("Plug in Storage Manager"), this.storage = this.io.storage, this.storageName = this.name + "-v" + this.version, this.loadAll())
	};
	ig.Game.prototype.loadAll = function() {
		var b = this.storage.get(this.storageName);
		if (null === b || "undefined" === typeof b) b = this.initData();
		for (var c in b) this.sessionData[c] = b[c];
		this.storage.set(this.storageName, b)
	};
	ig.Game.prototype.saveAll = function() {
		var b = this.storage.get(this.storageName),
			c;
		for (c in b) b[c] = this.sessionData[c];
		this.storage.set(this.storageName, b)
	};
	ig.Game.prototype.load = function(b) {
		return this.storage.get(this.storageName)[b]
	};
	ig.Game.prototype.save = function(b, c) {
		var d = this.storage.get(this.storageName);
		d[b] = c;
		this.storage.set(this.storageName, d)
	}
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
	ig.SplashLoader = ig.Loader.extend({
		desktopCoverDIVID: "play-desktop",
		splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
		splashMobile: new ig.Image("media/graphics/splash/mobile/cover.jpg"),
		loadingBar: new ig.Image("media/graphics/splash/loading/loading-bar.png"),
		loadingFill: new ig.Image("media/graphics/splash/loading/loading-fill.png"),
		customAnim: new ig.AnimationSheet("media/graphics/splash/loading/anim.png",
			256, 160),
		resources: [new ig.Image("media/graphics/splash/desktop/cover.jpg"), new ig.Image("media/graphics/splash/mobile/cover.jpg")],
		init: function(b, c) {
			this.parent(b, c);
			ig.apiHandler.run("MJSPreroll")
		},
		end: function() {
			this.parent();
			this._drawStatus = 1;
			this.draw();
			if (ig.ua.mobile) {
				var b = ig.domHandler.getElementById("#play");
				ig.domHandler.show(b);
				ig.system.setGame(MyGame)
			} else this.tapToStartDiv()
		},
		tapToStartDiv: function(b) {
			this.desktopCoverDIV = document.createElement("div");
			this.desktopCoverDIV.id = this.desktopCoverDIVID;
			this.desktopCoverDIV.setAttribute("class", "play");
			this.desktopCoverDIV.setAttribute("style", "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
			this.desktopCoverDIV.innerHTML = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: Arial;'>" +
				_STRINGS.Splash.TapToStart + "</div></div>";
			(document.getElementById("play").parentNode || document.getElementById("ajaxbar")).appendChild(this.desktopCoverDIV);
			try {
				"undefined" !== typeof ig.sizeHandler ? "undefined" !== typeof ig.sizeHandler.coreDivsToResize && (ig.sizeHandler.coreDivsToResize.push("#" + this.desktopCoverDIVID), "function" === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient()) : "undefined" !== typeof coreDivsToResize && (coreDivsToResize.push(this.desktopCoverDIVID), "function" === typeof sizeHandler &&
					sizeHandler())
			} catch (c) {
				console.log(c)
			}
			this.desktopCoverDIV.addEventListener("click", function() {
				try {
					"undefined" !== typeof ig.soundHandler ? ("undefined" !== typeof ig.soundHandler.bgmPlayer ? "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio && "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio.context && ig.soundHandler.bgmPlayer.webaudio.context.resume() : (ig.soundHandler = null, ig.soundHandler = "undefined" !== typeof ig.soundList ? new ig.SoundHandler(ig.soundList) : new ig.SoundHandler), "undefined" !== typeof ig.soundHandler.sfxPlayer ?
							"function" === typeof ig.soundHandler.sfxPlayer.play && ig.soundHandler.sfxPlayer.play("staticSound") : "undefined" !== typeof ig.soundHandler.staticSound ? "function" === typeof ig.soundHandler.staticSound.play && ig.soundHandler.staticSound.play() : "function" === typeof ig.soundHandler.playSound && ig.soundHandler.playSound("staticSound")) : "undefined" !== typeof Howl ? (ig.global.staticSound = new Howl({
							src: ["media/audio/play/static.ogg", "media/audio/play/static.mp3"]
						}), ig.global.staticSound.play()) : "undefined" !== typeof createjs &&
						"undefined" !== typeof createjs.Sound && "function" === typeof createjs.Sound.play && createjs.Sound.play("opening")
				} catch (c) {
					console.log(c)
				}
				this.setAttribute("style", "visibility: hidden;");
				"function" === typeof b && b();
				ig.gd.show(function() {
					ig.system.setGame(MyGame);
	 
				}.bind(this))
			})
		},
		setupCustomAnimation: function() {},
		animate: function() {
			ig.Timer.step()
		},
		draw: function() {
			this._drawStatus += (this.status - this._drawStatus) / 5;
			ig.system.context.fillStyle = "#000";
			ig.system.context.fillRect(0,
				0, ig.system.width, ig.system.height);
			var b = ig.system.scale,
				c, d, f, e;
			ig.ua.mobile ? (c = this.loadingBar.width, d = this.loadingBar.height, f = 0.5 * ig.system.width - c / 2, e = 7 * ig.system.height / 8 - d / 2, this.splashMobile.draw(0, 0)) : (c = this.loadingBar.width, d = this.loadingBar.height, f = 0.5 * ig.system.width - c / 2, e = 7 * ig.system.height / 8 - d / 2 - 70, this.splashDesktop.draw(0, 0));
			this.loadingBar.draw(f, e);
			1 < c * this._drawStatus && this.loadingFill.draw(f, e, -8, -7, c * this._drawStatus, d);
			ig.system.context.fillStyle = "#ffffff";
			ig.system.context.font =
				"30px arialroundedbold";
			c = _STRINGS.Splash.Loading;
			d = ig.system.width / 2 - ig.system.context.measureText(c).width / 2;
			ig.system.context.fillText(c, d, e * b - 20)
		}
	})
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
	Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
		for (var c = 0; c < this.length; ++c)
			if (this[c] === b) return c;
		return -1
	});
	ig.Entity.prototype.tweens = [];
	ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
	ig.Entity.prototype.update = function() {
		this._preTweenUpdate();
		if (0 < this.tweens.length) {
			for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
			this.tweens =
				b
		}
	};
	ig.Entity.prototype.tween = function(b, c, d) {
		b = new ig.Tween(this, b, c, d);
		this.tweens.push(b);
		return b
	};
	ig.Entity.prototype.pauseTweens = function() {
		for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
	};
	ig.Entity.prototype.resumeTweens = function() {
		for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
	};
	ig.Entity.prototype.stopTweens = function(b) {
		for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
	};
	ig.Tween = function(b, c, d, f) {
		var e = {},
			j = {},
			n = {},
			l = 0,
			g = !1,
			r = !1,
			z = !1;
		this.duration = d;
		this.paused =
			this.complete = !1;
		this.easing = ig.Tween.Easing.Linear.EaseNone;
		this.onComplete = !1;
		this.loop = this.delay = 0;
		this.loopCount = -1;
		ig.merge(this, f);
		this.loopNum = this.loopCount;
		this.chain = function(b) {
			z = b
		};
		this.initEnd = function(b, c, d) {
			if ("object" !== typeof c[b]) d[b] = c[b];
			else
				for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
		};
		this.initStart = function(b, c, d, e) {
			if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
			else
				for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
					c[b], d[b], e[b])
		};
		this.start = function() {
			this.paused = this.complete = !1;
			this.loopNum = this.loopCount;
			l = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
			r = !0;
			g = new ig.Timer;
			for (var d in c) this.initEnd(d, c, j);
			for (d in j) this.initStart(d, j, b, e), this.initDelta(d, n, b, j)
		};
		this.initDelta = function(b, c, d, e) {
			if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
			else
				for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
		};
		this.propUpdate = function(b, c, d, e, f) {
			if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
				d[b] + e[b] * f : c[b];
			else
				for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
		};
		this.propSet = function(b, c, d) {
			if ("object" !== typeof c[b]) d[b] = c[b];
			else
				for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
		};
		this.update = function() {
			if (!r) return !1;
			if (this.delay) {
				if (g.delta() < this.delay) return;
				this.delay = 0;
				g.reset()
			}
			if (this.paused || this.complete) return !1;
			var c = (g.delta() + l) / this.duration,
				c = 1 < c ? 1 : c,
				d = this.easing(c);
			for (property in n) this.propUpdate(property, b, e, n, d);
			if (1 <= c) {
				if (0 == this.loopNum ||
					!this.loop) {
					this.complete = !0;
					if (this.onComplete) this.onComplete();
					z && z.start();
					return !1
				}
				if (this.loop == ig.Tween.Loop.Revert) {
					for (property in e) this.propSet(property, e, b);
					l = 0;
					g.reset(); - 1 != this.loopNum && this.loopNum--
				} else if (this.loop == ig.Tween.Loop.Reverse) {
					c = {};
					d = {};
					ig.merge(c, j);
					ig.merge(d, e);
					ig.merge(e, c);
					ig.merge(j, d);
					for (property in j) this.initDelta(property, n, b, j);
					l = 0;
					g.reset(); - 1 != this.loopNum && this.loopNum--
				}
			}
		};
		this.pause = function() {
			this.paused = !0;
			g && g.delta && (l += g.delta())
		};
		this.resume = function() {
			this.paused = !1;
			g && g.reset && g.reset()
		};
		this.stop = function(b) {
			b && (this.loop = this.complete = this.paused = !1, l += d, this.update());
			this.complete = !0
		}
	};
	ig.Tween.Loop = {
		Revert: 1,
		Reverse: 2
	};
	ig.Tween.Easing = {
		Linear: {},
		Quadratic: {},
		Cubic: {},
		Quartic: {},
		Quintic: {},
		Sinusoidal: {},
		Exponential: {},
		Circular: {},
		Elastic: {},
		Back: {},
		Bounce: {}
	};
	ig.Tween.Easing.Linear.EaseNone = function(b) {
		return b
	};
	ig.Tween.Easing.Quadratic.EaseIn = function(b) {
		return b * b
	};
	ig.Tween.Easing.Quadratic.EaseOut = function(b) {
		return -b * (b - 2)
	};
	ig.Tween.Easing.Quadratic.EaseInOut =
		function(b) {
			return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
		};
	ig.Tween.Easing.Cubic.EaseIn = function(b) {
		return b * b * b
	};
	ig.Tween.Easing.Cubic.EaseOut = function(b) {
		return --b * b * b + 1
	};
	ig.Tween.Easing.Cubic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
	};
	ig.Tween.Easing.Quartic.EaseIn = function(b) {
		return b * b * b * b
	};
	ig.Tween.Easing.Quartic.EaseOut = function(b) {
		return -(--b * b * b * b - 1)
	};
	ig.Tween.Easing.Quartic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
	};
	ig.Tween.Easing.Quintic.EaseIn =
		function(b) {
			return b * b * b * b * b
		};
	ig.Tween.Easing.Quintic.EaseOut = function(b) {
		return (b -= 1) * b * b * b * b + 1
	};
	ig.Tween.Easing.Quintic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
	};
	ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
		return -Math.cos(b * Math.PI / 2) + 1
	};
	ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
		return Math.sin(b * Math.PI / 2)
	};
	ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
		return -0.5 * (Math.cos(Math.PI * b) - 1)
	};
	ig.Tween.Easing.Exponential.EaseIn = function(b) {
		return 0 == b ? 0 : Math.pow(2,
			10 * (b - 1))
	};
	ig.Tween.Easing.Exponential.EaseOut = function(b) {
		return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
	};
	ig.Tween.Easing.Exponential.EaseInOut = function(b) {
		return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
	};
	ig.Tween.Easing.Circular.EaseIn = function(b) {
		return -(Math.sqrt(1 - b * b) - 1)
	};
	ig.Tween.Easing.Circular.EaseOut = function(b) {
		return Math.sqrt(1 - --b * b)
	};
	ig.Tween.Easing.Circular.EaseInOut = function(b) {
		return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
	};
	ig.Tween.Easing.Elastic.EaseIn =
		function(b) {
			var c, d = 0.1,
				f = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			f || (f = 0.3);
			!d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
			return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / f))
		};
	ig.Tween.Easing.Elastic.EaseOut = function(b) {
		var c, d = 0.1,
			f = 0.4;
		if (0 == b) return 0;
		if (1 == b) return 1;
		f || (f = 0.3);
		!d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
		return d * Math.pow(2, -10 * b) * Math.sin((b - c) * 2 * Math.PI / f) + 1
	};
	ig.Tween.Easing.Elastic.EaseInOut = function(b) {
		var c, d = 0.1,
			f = 0.4;
		if (0 == b) return 0;
		if (1 == b) return 1;
		f || (f = 0.3);
		!d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
		return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / f) + 1
	};
	ig.Tween.Easing.Back.EaseIn = function(b) {
		return b * b * (2.70158 * b - 1.70158)
	};
	ig.Tween.Easing.Back.EaseOut = function(b) {
		return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
	};
	ig.Tween.Easing.Back.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
	};
	ig.Tween.Easing.Bounce.EaseIn =
		function(b) {
			return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
		};
	ig.Tween.Easing.Bounce.EaseOut = function(b) {
		return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
	};
	ig.Tween.Easing.Bounce.EaseInOut = function(b) {
		return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
	};
	ig.Tween.Interpolation = {
		Linear: function(b, c) {
			var d = b.length - 1,
				f = d * c,
				e = Math.floor(f),
				j = TWEEN.Interpolation.Utils.Linear;
			return 0 > c ? j(b[0], b[1], f) : 1 < c ? j(b[d], b[d - 1], d - f) : j(b[e], b[e + 1 > d ? d : e + 1], f - e)
		}
	}
});
ig.baked = !0;
ig.module("plugins.patches.entity-patch").requires("impact.entity").defines(function() {
	ig.Entity.inject({
		handleMovementTrace: function(b) {
			this.standing = !1;
			b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
			b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
			if (b.collision.slope) {
				var c = b.collision.slope;
				if (0 < this.bounciness) {
					var d =
						this.vel.x * c.nx + this.vel.y * c.ny;
					this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
					this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
				} else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
			}
			this.pos.x = b.pos.x;
			this.pos.y = b.pos.y
		}
	})
});
ig.baked = !0;
ig.module("plugins.tweens-handler").requires("impact.entity", "plugins.tween", "plugins.patches.entity-patch").defines(function() {
	Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
		for (var d = 0; d < this.length; ++d)
			if (this[d] === b) return d;
		return -1
	});
	ig.TweensHandler = ig.Class.extend({
		_tweens: [],
		_systemPausedTweens: [],
		init: function() {},
		getAll: function() {
			return this._tweens
		},
		removeAll: function() {
			this._tweens = []
		},
		add: function(b) {
			this._tweens.push(b)
		},
		remove: function(b) {
			b = this._tweens.indexOf(b); -
			1 !== b && this._tweens.splice(b, 1)
		},
		onSystemPause: function() {
			if (0 === this._tweens.length) return !1;
			for (var b = 0, d = null; b < this._tweens.length;) d = this._tweens[b], d._isPlaying && (this._systemPausedTweens.push(d), d.pause()), b++;
			return !0
		},
		onSystemResume: function() {
			if (0 === this._systemPausedTweens.length) return !1;
			for (var b = 0; b < this._systemPausedTweens.length;) this._systemPausedTweens[b].resume(), b++;
			this._systemPausedTweens = [];
			return !0
		},
		update: function(b, d) {
			if (0 === this._tweens.length) return !1;
			var f = 0;
			for (b = void 0 !==
				b ? b : ig.game.tweens.now(); f < this._tweens.length;) this._tweens[f].update(b) || d ? f++ : this._tweens.splice(f, 1);
			return !0
		},
		now: function() {
			return Date.now()
		}
	});
	ig.TweenDef = ig.Class.extend({
		_ent: null,
		_valuesStart: {},
		_valuesEnd: {},
		_valuesStartRepeat: {},
		_duration: 1E3,
		_repeat: 0,
		_yoyo: !1,
		_isPlaying: !1,
		_reversed: !1,
		_delayTime: 0,
		_startTime: null,
		_pauseTime: null,
		_easingFunction: ig.Tween.Easing.Linear.EaseNone,
		_interpolationFunction: ig.Tween.Interpolation.Linear,
		_chainedTweens: [],
		_onStartCallback: null,
		_onStartCallbackFired: !1,
		_onUpdateCallback: null,
		_onCompleteCallback: null,
		_onStopCallback: null,
		_onPauseCallback: null,
		_onResumeCallback: null,
		_currentElapsed: 0,
		init: function(b) {
			this._object = b
		},
		to: function(b, d) {
			this._valuesEnd = b;
			void 0 !== d && (this._duration = d);
			return this
		},
		start: function(b) {
			if (this._isPlaying) return this;
			ig.game.tweens.add(this);
			this._isPlaying = !0;
			this._onStartCallbackFired = !1;
			this._startTime = void 0 !== b ? b : ig.game.tweens.now();
			this._startTime += this._delayTime;
			for (var d in this._valuesEnd) {
				if (this._valuesEnd[d] instanceof Array) {
					if (0 === this._valuesEnd[d].length) continue;
					this._valuesEnd[d] = [this._object[d]].concat(this._valuesEnd[d])
				}
				void 0 !== this._object[d] && (this._valuesStart[d] = this._object[d], !1 === this._valuesStart[d] instanceof Array && (this._valuesStart[d] *= 1), this._valuesStartRepeat[d] = this._valuesStart[d] || 0)
			}
			return this
		},
		stop: function() {
			if (!this._isPlaying) return this;
			ig.game.tweens.remove(this);
			this._isPlaying = !1;
			null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object);
			this.stopChainedTweens();
			return this
		},
		pause: function() {
			if (!this._isPlaying) return this;
			ig.game.tweens.remove(this);
			this._isPlaying = !1;
			this._pauseTime = ig.game.tweens.now();
			null !== this._onPauseCallback && this._onPauseCallback.call(this._object, this._object);
			return this
		},
		resume: function() {
			if (this._isPlaying || !this._pauseTime) return this;
			var b = ig.game.tweens.now() - this._pauseTime;
			this._startTime += b;
			ig.game.tweens.add(this);
			this._isPlaying = !0;
			null !== this._onResumeCallback && this._onResumeCallback.call(this._object, this._object);
			this._pauseTime = null;
			return this
		},
		end: function() {
			this.update(this._startTime + this._duration);
			return this
		},
		stopChainedTweens: function() {
			for (var b = 0, d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].stop()
		},
		delay: function(b) {
			this._delayTime = b;
			return this
		},
		repeat: function(b) {
			this._repeat = b;
			return this
		},
		repeatDelay: function(b) {
			this._repeatDelayTime = b;
			return this
		},
		yoyo: function(b) {
			this._yoyo = b;
			return this
		},
		easing: function(b) {
			this._easingFunction = b;
			return this
		},
		interpolation: function(b) {
			this._interpolationFunction =
				b;
			return this
		},
		chain: function() {
			this._chainedTweens = arguments;
			return this
		},
		onStart: function(b) {
			this._onStartCallback = b;
			return this
		},
		onUpdate: function(b) {
			this._onUpdateCallback = b;
			return this
		},
		onComplete: function(b) {
			this._onCompleteCallback = b;
			return this
		},
		onStop: function(b) {
			this._onStopCallback = b;
			return this
		},
		onPause: function(b) {
			this._onPauseCallback = b;
			return this
		},
		onResume: function(b) {
			this._onResumeCallback = b;
			return this
		},
		update: function(b) {
			var d, f, e;
			if (b < this._startTime) return !0;
			!1 === this._onStartCallbackFired &&
				(null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), this._onStartCallbackFired = !0);
			f = (b - this._startTime) / this._duration;
			this._currentElapsed = f = 1 < f ? 1 : f;
			e = this._easingFunction(f);
			for (d in this._valuesEnd)
				if (void 0 !== this._valuesStart[d]) {
					var j = this._valuesStart[d] || 0,
						n = this._valuesEnd[d];
					n instanceof Array ? this._object[d] = this._interpolationFunction(n, e) : ("string" === typeof n && (n = "+" === n.charAt(0) || "-" === n.charAt(0) ? j + parseFloat(n) : parseFloat(n)), "number" === typeof n &&
						(this._object[d] = j + (n - j) * e))
				}
			null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, this._object, e);
			if (1 === f)
				if (0 < this._repeat) {
					isFinite(this._repeat) && this._repeat--;
					for (d in this._valuesStartRepeat) "string" === typeof this._valuesEnd[d] && (this._valuesStartRepeat[d] = _valuesStartRepeat[d] + parseFloat(_valuesEnd[d])), this._yoyo && (f = this._valuesStartRepeat[d], this._valuesStartRepeat[d] = this._valuesEnd[d], this._valuesEnd[d] = f), this._valuesStart[d] = this._valuesStartRepeat[d];
					this._yoyo &&
						(this._reversed = !this._reversed);
					this._startTime = void 0 !== this._repeatDelayTime ? b + this._repeatDelayTime : b + this._delayTime
				} else {
					null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object);
					b = 0;
					for (d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].start(this._startTime + this._duration);
					return !1
				}
			return !0
		}
	});
	var b = [1];
	ig.Tween.Interpolation = {
		Linear: function(b, d) {
			var f = b.length - 1,
				e = f * d,
				j = Math.floor(e),
				n = ig.Tween.Interpolation.Utils.Linear;
			return 0 > d ? n(b[0], b[1], e) :
				1 < d ? n(b[f], b[f - 1], f - e) : n(b[j], b[j + 1 > f ? f : j + 1], e - j)
		},
		Bezier: function(b, d) {
			for (var f = 0, e = b.length - 1, j = Math.pow, n = ig.Tween.Interpolation.Utils.Bernstein, l = 0; l <= e; l++) f += j(1 - d, e - l) * j(d, l) * b[l] * n(e, l);
			return f
		},
		CatmullRom: function(b, d) {
			var f = b.length - 1,
				e = f * d,
				j = Math.floor(e),
				n = ig.Tween.Interpolation.Utils.CatmullRom;
			return b[0] === b[f] ? (0 > d && (j = Math.floor(e = f * (1 + d))), n(b[(j - 1 + f) % f], b[j], b[(j + 1) % f], b[(j + 2) % f], e - j)) : 0 > d ? b[0] - (n(b[0], b[0], b[1], b[1], -e) - b[0]) : 1 < d ? b[f] - (n(b[f], b[f], b[f - 1], b[f - 1], e - f) - b[f]) : n(b[j ?
				j - 1 : 0], b[j], b[f < j + 1 ? f : j + 1], b[f < j + 2 ? f : j + 2], e - j)
		},
		Utils: {
			Linear: function(b, d, f) {
				return (d - b) * f + b
			},
			Bernstein: function(b, d) {
				var f = ig.Tween.Interpolation.Utils.Factorial;
				return f(b) / f(d) / f(b - d)
			},
			Factorial: function(c) {
				var d = 1;
				if (b[c]) return b[c];
				for (var f = c; 1 < f; f--) d *= f;
				return b[c] = d
			},
			CatmullRom: function(b, d, f, e, j) {
				b = 0.5 * (f - b);
				e = 0.5 * (e - d);
				var n = j * j;
				return (2 * d - 2 * f + b + e) * j * n + (-3 * d + 3 * f - 2 * b - e) * n + b * j + d
			}
		}
	}
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
	ig.UrlParameters = ig.Class.extend({
		init: function() {
			switch (getQueryVariable("iphone")) {
				case "true":
					ig.ua.iPhone = !0, console.log("iPhone mode")
			}
			var b = getQueryVariable("webview");
			if (b) switch (b) {
				case "true":
					ig.ua.is_uiwebview = !0, console.log("webview mode")
			}
			if (b = getQueryVariable("debug")) switch (b) {
				case "true":
					ig.game.showDebugMenu(), console.log("debug mode")
			}
			switch (getQueryVariable("view")) {
				case "stats":
					ig.game.resetPlayerStats(), ig.game.endGame()
			}
			getQueryVariable("ad")
		}
	})
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
	ig.Director = ig.Class.extend({
		init: function(b, c) {
			this.game = b;
			this.levels = [];
			this.currentLevel = 0;
			this.append(c)
		},
		loadLevel: function(b) {
			for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
				var d = ig.domHandler.getElementById("#" + c);
				ig.domHandler.hide(d)
			}
			this.currentLevel = b;
			this.game.loadLevel(this.levels[b]);
			return !0
		},
		loadLevelWithoutEntities: function(b) {
			this.currentLevel = b;
			this.game.loadLevelWithoutEntities(this.levels[b]);
			return !0
		},
		append: function(b) {
			newLevels = [];
			return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
		},
		nextLevel: function() {
			return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
		},
		previousLevel: function() {
			return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
		},
		jumpTo: function(b) {
			var c = null;
			for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
			return 0 <= c ? this.loadLevel(c) : !1
		},
		firstLevel: function() {
			return this.loadLevel(0)
		},
		lastLevel: function() {
			return this.loadLevel(this.levels.length - 1)
		},
		reloadLevel: function() {
			return this.loadLevel(this.currentLevel)
		}
	})
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
	ig.Storage = ig.Class.extend({
		staticInstantiate: function() {
			return !ig.Storage.instance ? null : ig.Storage.instance
		},
		init: function() {
			ig.Storage.instance = this
		},
		isCapable: function() {
			return "undefined" !== typeof window.localStorage
		},
		isSet: function(b) {
			return null !== this.get(b)
		},
		initUnset: function(b, c) {
			null === this.get(b) && this.set(b, c)
		},
		get: function(b) {
			if (!this.isCapable()) return null;
			try {
				return JSON.parse(localStorage.getItem(b))
			} catch (c) {
				return window.localStorage.getItem(b)
			}
		},
		getInt: function(b) {
			return ~~this.get(b)
		},
		getFloat: function(b) {
			return parseFloat(this.get(b))
		},
		getBool: function(b) {
			return !!this.get(b)
		},
		key: function(b) {
			return this.isCapable() ? window.localStorage.key(b) : null
		},
		set: function(b, c) {
			if (!this.isCapable()) return null;
			try {
				window.localStorage.setItem(b, JSON.stringify(c))
			} catch (d) {
				console.log(d)
			}
		},
		setHighest: function(b, c) {
			c > this.getFloat(b) && this.set(b, c)
		},
		remove: function(b) {
			if (!this.isCapable()) return null;
			window.localStorage.removeItem(b)
		},
		clear: function() {
			if (!this.isCapable()) return null;
			window.localStorage.clear()
		}
	})
});
ig.baked = !0;
ig.module("plugins.fullscreen").requires("impact.entity").defines(function() {
	ig.Fullscreen = {
		enableFullscreenButton: !0,
		_isEnabled: "notChecked",
		isEnabled: function() {
			"notChecked" == this._isEnabled && (this._isEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled ? !0 : !1);
			return this._isEnabled
		},
		isFullscreen: function() {
			return ig.Fullscreen.isEnabled() && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ||
				document.msFullscreenElement) ? !0 : !1
		},
		toggleFullscreen: function() {
			ig.Fullscreen.isFullscreen() ? ig.Fullscreen.exitFullscreen() : ig.Fullscreen.requestFullscreen();
			ig.sizeHandler.orientationDelayHandler()
		},
		requestFullscreen: function() {
			var b = document.documentElement;
			b.requestFullscreen ? b.requestFullscreen() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : console.log("no request fullscreen method available")
		},
		exitFullscreen: function() {
			document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : console.log("no exit fullscreen method available")
		},
		divs: {}
	};
	ig.Director.inject({
		loadLevel: function(b) {
			var c = ig.Fullscreen.divs,
				d;
			for (d in c) c = ig.domHandler.getElementById("#" + d), ig.domHandler.hide(c);
			return this.parent(b)
		}
	});
	ig.SizeHandler.inject({
		resize: function() {
			this.parent();
			var b = ig.Fullscreen.divs,
				c;
			for (c in b) {
				var d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y),
					f = ig.domHandler.getElementById("#" + c),
					e = b[c].entity_pos_x,
					j = b[c].entity_pos_y,
					n = b[c].width,
					l = b[c].height,
					g = ig.domHandler.getElementById("#canvas"),
					r = ig.domHandler.getOffsets(g);
				ig.ua.mobile ? (g = r.left, r = r.top, ig.sizeHandler.disableStretchToFitOnMobileFlag ? (e = Math.floor(g + e * ig.sizeHandler.scaleRatioMultiplier.x) + "px", j = Math.floor(r + j * ig.sizeHandler.scaleRatioMultiplier.y) +
					"px", n = Math.floor(n * ig.sizeHandler.scaleRatioMultiplier.x) + "px", l = Math.floor(l * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (e = Math.floor(e * ig.sizeHandler.sizeRatio.x) + "px", j = Math.floor(j * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(n * ig.sizeHandler.sizeRatio.x) + "px", l = Math.floor(l * ig.sizeHandler.sizeRatio.y) + "px")) : (g = r.left, r = r.top, e = Math.floor(g + e * d) + "px", j = Math.floor(r + j * d) + "px", n = Math.floor(n * d) + "px", l = Math.floor(l * d) + "px");
				ig.domHandler.css(f, {
					"float": "left",
					position: "absolute",
					left: e,
					top: j,
					width: n,
					height: l,
					"z-index": 3
				});
				b[c]["font-size"] && ig.domHandler.css(f, {
					"font-size": b[c]["font-size"] * d + "px"
				})
			}
		}
	});
	ig.FullscreenButton = ig.Entity.extend({
		enterImage: null,
		exitImage: null,
		isReady: !1,
		zIndex: 999999,
		identifier: null,
		prevPos: {
			x: 0,
			y: 0
		},
		invisImagePath: "media/graphics/misc/invisible.png",
		init: function(b, c, d) {
			this.parent(b, c, d);
			ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton ? this.enterImage.loaded ? this.initSize() : this.enterImage.loadCallback = function() {
					this.initSize()
				}.bind(this) :
				this.kill()
		},
		kill: function() {
			this.parent()
		},
		destroy: function() {
			this.parent();
			console.log("destroy")
		},
		initSize: function() {
			this.size.x = this.enterImage.width;
			this.size.y = this.enterImage.height;
			this.createClickableLayer();
			this.isReady = !0
		},
		createClickableLayer: function() {
			this.identifier = "fullscreen-button-layer";
			var b = ig.domHandler.getElementById("#" + this.identifier);
			b ? (ig.domHandler.show(b), ig.domHandler.attr(b, "onclick", "ig.Fullscreen.toggleFullscreen()")) : this.createClickableOutboundLayer()
		},
		update: function(b,
			c) {
			b = this.pos.x;
			c = this.pos.y;
			this.isReady && !(this.prevPos.x === b && this.prevPos.y === c) && (ig.Fullscreen.divs[this.identifier] = {}, ig.Fullscreen.divs[this.identifier].width = this.size.x, ig.Fullscreen.divs[this.identifier].height = this.size.y, ig.Fullscreen.divs[this.identifier].entity_pos_x = this.pos.x, ig.Fullscreen.divs[this.identifier].entity_pos_y = this.pos.y, this.prevPos.x = b, this.prevPos.y = c)
		},
		draw: function() {
			this.isReady && (ig.Fullscreen.isFullscreen() ? this.exitImage.draw(this.pos.x, this.pos.y) : this.enterImage.draw(this.pos.x,
				this.pos.y))
		},
		createClickableOutboundLayer: function() {
			var b = this.identifier,
				c = this.invisImagePath,
				d = ig.domHandler.create("div");
			ig.domHandler.attr(d, "id", b);
			ig.domHandler.attr(d, "onclick", "ig.Fullscreen.toggleFullscreen()");
			var f = ig.domHandler.create("a"),
				e = ig.domHandler.create("img");
			ig.domHandler.css(e, {
				width: "100%",
				height: "100%"
			});
			ig.domHandler.attr(e, "src", c);
			c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
			if (ig.ua.mobile) {
				var j = ig.domHandler.getElementById("#canvas"),
					j = ig.domHandler.getOffsets(j),
					n = j.left,
					l = j.top;
				console.log(j.left);
				ig.sizeHandler.disableStretchToFitOnMobileFlag ? (j = Math.floor(n + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", l = Math.floor(l + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (j = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", l = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) +
					"px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
			} else j = ig.domHandler.getElementById("#canvas"), j = ig.domHandler.getOffsets(j), n = j.left, l = j.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (j = Math.floor(n + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", l = Math.floor(l + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (j =
				Math.floor(n + this.pos.x * c) + "px", l = Math.floor(l + this.pos.y * c) + "px", n = Math.floor(this.size.x * c) + "px", c = Math.floor(this.size.y * c) + "px");
			ig.domHandler.css(d, {
				"float": "left",
				position: "absolute",
				left: j,
				top: l,
				width: n,
				height: c,
				"z-index": 3
			});
			ig.domHandler.addEvent(d, "mousemove", ig.input.mousemove.bind(ig.input), !1);
			ig.domHandler.appendChild(f, e);
			ig.domHandler.appendChild(d, f);
			ig.domHandler.appendToBody(d);
			ig.Fullscreen.divs[b] = {};
			ig.Fullscreen.divs[b].width = this.size.x;
			ig.Fullscreen.divs[b].height = this.size.y;
			ig.Fullscreen.divs[b].entity_pos_x = this.pos.x;
			ig.Fullscreen.divs[b].entity_pos_y = this.pos.y
		}
	})
});
var Box2D = {
	SCALE: 0.1
};
(function(b, c) {
	function d() {}
	var f = function() {
		var b, c, d, f, g = Function.call,
			r = Object.prototype,
			z = g.bind(r.hasOwnProperty),
			y = g.bind(r.propertyIsEnumerable),
			A = g.bind(r.toString),
			B = z(r, "__defineGetter__");
		B && (b = g.bind(r.__defineGetter__), c = g.bind(r.__defineSetter__), d = g.bind(r.__lookupGetter__), f = g.bind(r.__lookupSetter__));
		var I = function(b) {
			return null == b || "object" != typeof b && "function" != typeof b
		};
		Object.getPrototypeOf || (Object.getPrototypeOf = function(b) {
			var c = b.__proto__;
			return c || null === c ? c : "[object Function]" ===
				A(b.constructor) ? b.constructor.prototype : b instanceof Object ? r : null
		});
		g = function(b) {
			try {
				return b.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(b, "sentinel").value
			} catch (c) {
				return !1
			}
		};
		if (Object.defineProperty) {
			var D = g({});
			if (!("undefined" == typeof document || g(document.createElement("div"))) || !D) var t = Object.getOwnPropertyDescriptor
		}
		if (!Object.getOwnPropertyDescriptor || t) Object.getOwnPropertyDescriptor = function(b, c) {
			if (I(b)) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " +
				b);
			if (t) try {
				return t.call(Object, b, c)
			} catch (e) {}
			var g;
			if (!z(b, c)) return g;
			if (g = {
					enumerable: y(b, c),
					configurable: !0
				}, B) {
				var j = b.__proto__,
					E = b !== r;
				E && (b.__proto__ = r);
				var q = d(b, c),
					x = f(b, c);
				if (E && (b.__proto__ = j), q || x) return q && (g.get = q), x && (g.set = x), g
			}
			return g.value = b[c], g.writable = !0, g
		};
		if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(b) {
				return Object.keys(b)
			}), !Object.create) {
			var G;
			G = "undefined" == typeof document ? function() {
				return {
					__proto__: null
				}
			} : function() {
				var b, c, d, e, f, g = function() {
					if (!document.domain) return !1;
					try {
						return !!new ActiveXObject("htmlfile")
					} catch (b) {
						return !1
					}
				}() ? ((f = new ActiveXObject("htmlfile")).write("<script>\x3c/script>"), f.close(), e = f.parentWindow.Object.prototype, f = null, e) : (c = document.createElement("iframe"), d = document.body || document.documentElement, c.style.display = "none", d.appendChild(c), c.src = "javascript:", b = c.contentWindow.Object.prototype, d.removeChild(c), c = null, b);
				delete g.constructor;
				delete g.hasOwnProperty;
				delete g.propertyIsEnumerable;
				delete g.isPrototypeOf;
				delete g.toLocaleString;
				delete g.toString;
				delete g.valueOf;
				var j = function() {};
				return j.prototype = g, G = function() {
					return new j
				}, new j
			};
			Object.create = function(b, c) {
				var d;
				d = function() {};
				if (null === b) d = G();
				else {
					if (null !== b && I(b)) throw new TypeError("Object prototype may only be an Object or null");
					d.prototype = b;
					(d = new d).__proto__ = b
				}
				return void 0 !== c && Object.defineProperties(d, c), d
			}
		}
		var E, D = function(b) {
			try {
				return Object.defineProperty(b, "sentinel", {}), "sentinel" in b
			} catch (c) {
				return !1
			}
		};
		if (Object.defineProperty && (g = D({}), D = "undefined" ==
				typeof document || D(document.createElement("div")), !g || !D)) var L = Object.defineProperty,
			M = Object.defineProperties;
		if (!Object.defineProperty || L) Object.defineProperty = function(g, t, E) {
			if (I(g)) throw new TypeError("Object.defineProperty called on non-object: " + g);
			if (I(E)) throw new TypeError("Property description must be an object: " + E);
			if (L) try {
				return L.call(Object, g, t, E)
			} catch (G) {}
			if ("value" in E)
				if (B && (d(g, t) || f(g, t))) {
					var A = g.__proto__;
					g.__proto__ = r;
					delete g[t];
					g[t] = E.value;
					g.__proto__ = A
				} else g[t] = E.value;
			else {
				var A = "get" in E,
					y = "set" in E;
				if (!B && (A || y)) throw new TypeError("getters & setters can not be defined on this javascript engine");
				A && b(g, t, E.get);
				y && c(g, t, E.set)
			}
			return g
		};
		Object.defineProperties && !M || (Object.defineProperties = function(b, c) {
			if (M) try {
				return M.call(Object, b, c)
			} catch (d) {}
			return Object.keys(c).forEach(function(d) {
				"__proto__" !== d && Object.defineProperty(b, d, c[d])
			}), b
		});
		Object.seal || (Object.seal = function(b) {
			if (Object(b) !== b) throw new TypeError("Object.seal can only be called on Objects.");
			return b
		});
		Object.freeze || (Object.freeze = function(b) {
			if (Object(b) !== b) throw new TypeError("Object.freeze can only be called on Objects.");
			return b
		});
		try {
			Object.freeze(function() {})
		} catch (Q) {
			Object.freeze = (E = Object.freeze, function(b) {
				return "function" == typeof b ? b : E(b)
			})
		}
		Object.preventExtensions || (Object.preventExtensions = function(b) {
			if (Object(b) !== b) throw new TypeError("Object.preventExtensions can only be called on Objects.");
			return b
		});
		Object.isSealed || (Object.isSealed = function(b) {
			if (Object(b) !==
				b) throw new TypeError("Object.isSealed can only be called on Objects.");
			return !1
		});
		Object.isFrozen || (Object.isFrozen = function(b) {
			if (Object(b) !== b) throw new TypeError("Object.isFrozen can only be called on Objects.");
			return !1
		});
		Object.isExtensible || (Object.isExtensible = function(b) {
			if (Object(b) !== b) throw new TypeError("Object.isExtensible can only be called on Objects.");
			for (var c = ""; z(b, c);) c += "?";
			b[c] = !0;
			var d = z(b, c);
			return delete b[c], d
		})
	};
	"function" == typeof define && define.amd ? define(f) : "object" ==
		typeof exports ? module.exports = f() : this.returnExports = f();
	!0;
	b.inherit = function(b, c) {
		d.prototype = c.prototype;
		b.prototype = new d;
		b.prototype.constructor = b
	};
	b.generateCallback = function(b, c) {
		return function() {
			c.apply(b, arguments)
		}
	};
	b.NVector = function(b) {
		b === c && (b = 0);
		for (var d = Array(b || 0), f = 0; f < b; ++f) d[f] = 0;
		return d
	};
	b.is = function(b, d) {
		return null === b ? !1 : d instanceof Function && b instanceof d || b.constructor.__implements != c && b.constructor.__implements[d] ? !0 : !1
	};
	b.parseUInt = function(b) {
		return Math.abs(parseInt(b))
	}
})(Box2D);
var Vector = Array,
	Vector_a2j_Number = Box2D.NVector;
"undefined" === typeof Box2D && (Box2D = {});
"undefined" === typeof Box2D.Collision && (Box2D.Collision = {});
"undefined" === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
"undefined" === typeof Box2D.Common && (Box2D.Common = {});
"undefined" === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
"undefined" === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
"undefined" === typeof Box2D.Dynamics.Contacts && (Box2D.Dynamics.Contacts = {});
"undefined" === typeof Box2D.Dynamics.Controllers && (Box2D.Dynamics.Controllers = {});
"undefined" === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {});
(function() {
	function b() {
		b.b2AABB.apply(this, arguments)
	}

	function c() {
		c.b2Bound.apply(this, arguments)
	}

	function d() {
		d.b2BoundValues.apply(this, arguments);
		this.constructor === d && this.b2BoundValues.apply(this, arguments)
	}

	function f() {
		f.b2Collision.apply(this, arguments)
	}

	function e() {
		e.b2ContactID.apply(this, arguments);
		this.constructor === e && this.b2ContactID.apply(this, arguments)
	}

	function j() {
		j.b2ContactPoint.apply(this, arguments)
	}

	function n() {
		n.b2Distance.apply(this, arguments)
	}

	function l() {
		l.b2DistanceInput.apply(this,
			arguments)
	}

	function g() {
		g.b2DistanceOutput.apply(this, arguments)
	}

	function r() {
		r.b2DistanceProxy.apply(this, arguments)
	}

	function z() {
		z.b2DynamicTree.apply(this, arguments);
		this.constructor === z && this.b2DynamicTree.apply(this, arguments)
	}

	function y() {
		y.b2DynamicTreeBroadPhase.apply(this, arguments)
	}

	function A() {
		A.b2DynamicTreeNode.apply(this, arguments)
	}

	function B() {
		B.b2DynamicTreePair.apply(this, arguments)
	}

	function I() {
		I.b2Manifold.apply(this, arguments);
		this.constructor === I && this.b2Manifold.apply(this, arguments)
	}

	function D() {
		D.b2ManifoldPoint.apply(this, arguments);
		this.constructor === D && this.b2ManifoldPoint.apply(this, arguments)
	}

	function t() {
		t.b2Point.apply(this, arguments)
	}

	function G() {
		G.b2RayCastInput.apply(this, arguments);
		this.constructor === G && this.b2RayCastInput.apply(this, arguments)
	}

	function E() {
		E.b2RayCastOutput.apply(this, arguments)
	}

	function L() {
		L.b2Segment.apply(this, arguments)
	}

	function M() {
		M.b2SeparationFunction.apply(this, arguments)
	}

	function Q() {
		Q.b2Simplex.apply(this, arguments);
		this.constructor ===
			Q && this.b2Simplex.apply(this, arguments)
	}

	function J() {
		J.b2SimplexCache.apply(this, arguments)
	}

	function fa() {
		fa.b2SimplexVertex.apply(this, arguments)
	}

	function O() {
		O.b2TimeOfImpact.apply(this, arguments)
	}

	function P() {
		P.b2TOIInput.apply(this, arguments)
	}

	function aa() {
		aa.b2WorldManifold.apply(this, arguments);
		this.constructor === aa && this.b2WorldManifold.apply(this, arguments)
	}

	function U() {
		U.ClipVertex.apply(this, arguments)
	}

	function q() {
		q.Features.apply(this, arguments)
	}

	function x() {
		x.b2CircleShape.apply(this,
			arguments);
		this.constructor === x && this.b2CircleShape.apply(this, arguments)
	}

	function F() {
		F.b2EdgeChainDef.apply(this, arguments);
		this.constructor === F && this.b2EdgeChainDef.apply(this, arguments)
	}

	function C() {
		C.b2EdgeShape.apply(this, arguments);
		this.constructor === C && this.b2EdgeShape.apply(this, arguments)
	}

	function H() {
		H.b2MassData.apply(this, arguments)
	}

	function Z() {
		Z.b2PolygonShape.apply(this, arguments);
		this.constructor === Z && this.b2PolygonShape.apply(this, arguments)
	}

	function R() {
		R.b2Shape.apply(this, arguments);
		this.constructor === R && this.b2Shape.apply(this, arguments)
	}

	function m() {
		m.b2Color.apply(this, arguments);
		this.constructor === m && this.b2Color.apply(this, arguments)
	}

	function s() {
		s.b2Settings.apply(this, arguments)
	}

	function K() {
		K.b2Mat22.apply(this, arguments);
		this.constructor === K && this.b2Mat22.apply(this, arguments)
	}

	function u() {
		u.b2Mat33.apply(this, arguments);
		this.constructor === u && this.b2Mat33.apply(this, arguments)
	}

	function N() {
		N.b2Math.apply(this, arguments)
	}

	function V() {
		V.b2Sweep.apply(this, arguments)
	}

	function ha() {
		ha.b2Transform.apply(this,
			arguments);
		this.constructor === ha && this.b2Transform.apply(this, arguments)
	}

	function ia() {
		ia.b2Vec2.apply(this, arguments);
		this.constructor === ia && this.b2Vec2.apply(this, arguments)
	}

	function la() {
		la.b2Vec3.apply(this, arguments);
		this.constructor === la && this.b2Vec3.apply(this, arguments)
	}

	function oa() {
		oa.b2Body.apply(this, arguments);
		this.constructor === oa && this.b2Body.apply(this, arguments)
	}

	function pa() {
		pa.b2BodyDef.apply(this, arguments);
		this.constructor === pa && this.b2BodyDef.apply(this, arguments)
	}

	function va() {
		va.b2ContactFilter.apply(this,
			arguments)
	}

	function X() {
		X.b2ContactImpulse.apply(this, arguments)
	}

	function Eb() {
		Eb.b2ContactListener.apply(this, arguments)
	}

	function za() {
		za.b2ContactManager.apply(this, arguments);
		this.constructor === za && this.b2ContactManager.apply(this, arguments)
	}

	function bb() {
		bb.b2DebugDraw.apply(this, arguments);
		this.constructor === bb && this.b2DebugDraw.apply(this, arguments)
	}

	function db() {
		db.b2DestructionListener.apply(this, arguments)
	}

	function Ka() {
		Ka.b2FilterData.apply(this, arguments)
	}

	function La() {
		La.b2Fixture.apply(this,
			arguments);
		this.constructor === La && this.b2Fixture.apply(this, arguments)
	}

	function eb() {
		eb.b2FixtureDef.apply(this, arguments);
		this.constructor === eb && this.b2FixtureDef.apply(this, arguments)
	}

	function Ma() {
		Ma.b2Island.apply(this, arguments);
		this.constructor === Ma && this.b2Island.apply(this, arguments)
	}

	function ob() {
		ob.b2TimeStep.apply(this, arguments)
	}

	function pb() {
		pb.b2World.apply(this, arguments);
		this.constructor === pb && this.b2World.apply(this, arguments)
	}

	function da() {
		da.b2CircleContact.apply(this, arguments)
	}

	function p() {
		p.b2Contact.apply(this, arguments);
		this.constructor === p && this.b2Contact.apply(this, arguments)
	}

	function qb() {
		qb.b2ContactConstraint.apply(this, arguments);
		this.constructor === qb && this.b2ContactConstraint.apply(this, arguments)
	}

	function Fb() {
		Fb.b2ContactConstraintPoint.apply(this, arguments)
	}

	function Gb() {
		Gb.b2ContactEdge.apply(this, arguments)
	}

	function rb() {
		rb.b2ContactFactory.apply(this, arguments);
		this.constructor === rb && this.b2ContactFactory.apply(this, arguments)
	}

	function Aa() {
		Aa.b2ContactRegister.apply(this,
			arguments)
	}

	function fb() {
		fb.b2ContactResult.apply(this, arguments)
	}

	function ba() {
		ba.b2ContactSolver.apply(this, arguments);
		this.constructor === ba && this.b2ContactSolver.apply(this, arguments)
	}

	function ib() {
		ib.b2EdgeAndCircleContact.apply(this, arguments)
	}

	function qa() {
		qa.b2NullContact.apply(this, arguments);
		this.constructor === qa && this.b2NullContact.apply(this, arguments)
	}

	function sa() {
		sa.b2PolyAndCircleContact.apply(this, arguments)
	}

	function jb() {
		jb.b2PolyAndEdgeContact.apply(this, arguments)
	}

	function tb() {
		tb.b2PolygonContact.apply(this,
			arguments)
	}

	function ub() {
		ub.b2PositionSolverManifold.apply(this, arguments);
		this.constructor === ub && this.b2PositionSolverManifold.apply(this, arguments)
	}

	function Jb() {
		Jb.b2BuoyancyController.apply(this, arguments)
	}

	function vb() {
		vb.b2ConstantAccelController.apply(this, arguments)
	}

	function Da() {
		Da.b2ConstantForceController.apply(this, arguments)
	}

	function gb() {
		gb.b2Controller.apply(this, arguments)
	}

	function wb() {
		wb.b2ControllerEdge.apply(this, arguments)
	}

	function Ua() {
		Ua.b2GravityController.apply(this, arguments)
	}

	function Va() {
		Va.b2TensorDampingController.apply(this, arguments)
	}

	function Wa() {
		Wa.b2DistanceJoint.apply(this, arguments);
		this.constructor === Wa && this.b2DistanceJoint.apply(this, arguments)
	}

	function Pa() {
		Pa.b2DistanceJointDef.apply(this, arguments);
		this.constructor === Pa && this.b2DistanceJointDef.apply(this, arguments)
	}

	function Xa() {
		Xa.b2FrictionJoint.apply(this, arguments);
		this.constructor === Xa && this.b2FrictionJoint.apply(this, arguments)
	}

	function Za() {
		Za.b2FrictionJointDef.apply(this, arguments);
		this.constructor ===
			Za && this.b2FrictionJointDef.apply(this, arguments)
	}

	function Fa() {
		Fa.b2GearJoint.apply(this, arguments);
		this.constructor === Fa && this.b2GearJoint.apply(this, arguments)
	}

	function ea() {
		ea.b2GearJointDef.apply(this, arguments);
		this.constructor === ea && this.b2GearJointDef.apply(this, arguments)
	}

	function W() {
		W.b2Jacobian.apply(this, arguments)
	}

	function Ra() {
		Ra.b2Joint.apply(this, arguments);
		this.constructor === Ra && this.b2Joint.apply(this, arguments)
	}

	function kb() {
		kb.b2JointDef.apply(this, arguments);
		this.constructor ===
			kb && this.b2JointDef.apply(this, arguments)
	}

	function Oa() {
		Oa.b2JointEdge.apply(this, arguments)
	}

	function $a() {
		$a.b2LineJoint.apply(this, arguments);
		this.constructor === $a && this.b2LineJoint.apply(this, arguments)
	}

	function hb() {
		hb.b2LineJointDef.apply(this, arguments);
		this.constructor === hb && this.b2LineJointDef.apply(this, arguments)
	}

	function Qa() {
		Qa.b2MouseJoint.apply(this, arguments);
		this.constructor === Qa && this.b2MouseJoint.apply(this, arguments)
	}

	function ya() {
		ya.b2MouseJointDef.apply(this, arguments);
		this.constructor ===
			ya && this.b2MouseJointDef.apply(this, arguments)
	}

	function Ga() {
		Ga.b2PrismaticJoint.apply(this, arguments);
		this.constructor === Ga && this.b2PrismaticJoint.apply(this, arguments)
	}

	function xa() {
		xa.b2PrismaticJointDef.apply(this, arguments);
		this.constructor === xa && this.b2PrismaticJointDef.apply(this, arguments)
	}

	function Y() {
		Y.b2PulleyJoint.apply(this, arguments);
		this.constructor === Y && this.b2PulleyJoint.apply(this, arguments)
	}

	function na() {
		na.b2PulleyJointDef.apply(this, arguments);
		this.constructor === na && this.b2PulleyJointDef.apply(this,
			arguments)
	}

	function ma() {
		ma.b2RevoluteJoint.apply(this, arguments);
		this.constructor === ma && this.b2RevoluteJoint.apply(this, arguments)
	}

	function ka() {
		ka.b2RevoluteJointDef.apply(this, arguments);
		this.constructor === ka && this.b2RevoluteJointDef.apply(this, arguments)
	}

	function Ba() {
		Ba.b2WeldJoint.apply(this, arguments);
		this.constructor === Ba && this.b2WeldJoint.apply(this, arguments)
	}

	function Sa() {
		Sa.b2WeldJointDef.apply(this, arguments);
		this.constructor === Sa && this.b2WeldJointDef.apply(this, arguments)
	}
	Box2D.Collision.IBroadPhase =
		"Box2D.Collision.IBroadPhase";
	Box2D.Collision.b2AABB = b;
	Box2D.Collision.b2Bound = c;
	Box2D.Collision.b2BoundValues = d;
	Box2D.Collision.b2Collision = f;
	Box2D.Collision.b2ContactID = e;
	Box2D.Collision.b2ContactPoint = j;
	Box2D.Collision.b2Distance = n;
	Box2D.Collision.b2DistanceInput = l;
	Box2D.Collision.b2DistanceOutput = g;
	Box2D.Collision.b2DistanceProxy = r;
	Box2D.Collision.b2DynamicTree = z;
	Box2D.Collision.b2DynamicTreeBroadPhase = y;
	Box2D.Collision.b2DynamicTreeNode = A;
	Box2D.Collision.b2DynamicTreePair = B;
	Box2D.Collision.b2Manifold =
		I;
	Box2D.Collision.b2ManifoldPoint = D;
	Box2D.Collision.b2Point = t;
	Box2D.Collision.b2RayCastInput = G;
	Box2D.Collision.b2RayCastOutput = E;
	Box2D.Collision.b2Segment = L;
	Box2D.Collision.b2SeparationFunction = M;
	Box2D.Collision.b2Simplex = Q;
	Box2D.Collision.b2SimplexCache = J;
	Box2D.Collision.b2SimplexVertex = fa;
	Box2D.Collision.b2TimeOfImpact = O;
	Box2D.Collision.b2TOIInput = P;
	Box2D.Collision.b2WorldManifold = aa;
	Box2D.Collision.ClipVertex = U;
	Box2D.Collision.Features = q;
	Box2D.Collision.Shapes.b2CircleShape = x;
	Box2D.Collision.Shapes.b2EdgeChainDef =
		F;
	Box2D.Collision.Shapes.b2EdgeShape = C;
	Box2D.Collision.Shapes.b2MassData = H;
	Box2D.Collision.Shapes.b2PolygonShape = Z;
	Box2D.Collision.Shapes.b2Shape = R;
	Box2D.Common.b2internal = "Box2D.Common.b2internal";
	Box2D.Common.b2Color = m;
	Box2D.Common.b2Settings = s;
	Box2D.Common.Math.b2Mat22 = K;
	Box2D.Common.Math.b2Mat33 = u;
	Box2D.Common.Math.b2Math = N;
	Box2D.Common.Math.b2Sweep = V;
	Box2D.Common.Math.b2Transform = ha;
	Box2D.Common.Math.b2Vec2 = ia;
	Box2D.Common.Math.b2Vec3 = la;
	Box2D.Dynamics.b2Body = oa;
	Box2D.Dynamics.b2BodyDef = pa;
	Box2D.Dynamics.b2ContactFilter =
		va;
	Box2D.Dynamics.b2ContactImpulse = X;
	Box2D.Dynamics.b2ContactListener = Eb;
	Box2D.Dynamics.b2ContactManager = za;
	Box2D.Dynamics.b2DebugDraw = bb;
	Box2D.Dynamics.b2DestructionListener = db;
	Box2D.Dynamics.b2FilterData = Ka;
	Box2D.Dynamics.b2Fixture = La;
	Box2D.Dynamics.b2FixtureDef = eb;
	Box2D.Dynamics.b2Island = Ma;
	Box2D.Dynamics.b2TimeStep = ob;
	Box2D.Dynamics.b2World = pb;
	Box2D.Dynamics.Contacts.b2CircleContact = da;
	Box2D.Dynamics.Contacts.b2Contact = p;
	Box2D.Dynamics.Contacts.b2ContactConstraint = qb;
	Box2D.Dynamics.Contacts.b2ContactConstraintPoint =
		Fb;
	Box2D.Dynamics.Contacts.b2ContactEdge = Gb;
	Box2D.Dynamics.Contacts.b2ContactFactory = rb;
	Box2D.Dynamics.Contacts.b2ContactRegister = Aa;
	Box2D.Dynamics.Contacts.b2ContactResult = fb;
	Box2D.Dynamics.Contacts.b2ContactSolver = ba;
	Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = ib;
	Box2D.Dynamics.Contacts.b2NullContact = qa;
	Box2D.Dynamics.Contacts.b2PolyAndCircleContact = sa;
	Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = jb;
	Box2D.Dynamics.Contacts.b2PolygonContact = tb;
	Box2D.Dynamics.Contacts.b2PositionSolverManifold =
		ub;
	Box2D.Dynamics.Controllers.b2BuoyancyController = Jb;
	Box2D.Dynamics.Controllers.b2ConstantAccelController = vb;
	Box2D.Dynamics.Controllers.b2ConstantForceController = Da;
	Box2D.Dynamics.Controllers.b2Controller = gb;
	Box2D.Dynamics.Controllers.b2ControllerEdge = wb;
	Box2D.Dynamics.Controllers.b2GravityController = Ua;
	Box2D.Dynamics.Controllers.b2TensorDampingController = Va;
	Box2D.Dynamics.Joints.b2DistanceJoint = Wa;
	Box2D.Dynamics.Joints.b2DistanceJointDef = Pa;
	Box2D.Dynamics.Joints.b2FrictionJoint = Xa;
	Box2D.Dynamics.Joints.b2FrictionJointDef =
		Za;
	Box2D.Dynamics.Joints.b2GearJoint = Fa;
	Box2D.Dynamics.Joints.b2GearJointDef = ea;
	Box2D.Dynamics.Joints.b2Jacobian = W;
	Box2D.Dynamics.Joints.b2Joint = Ra;
	Box2D.Dynamics.Joints.b2JointDef = kb;
	Box2D.Dynamics.Joints.b2JointEdge = Oa;
	Box2D.Dynamics.Joints.b2LineJoint = $a;
	Box2D.Dynamics.Joints.b2LineJointDef = hb;
	Box2D.Dynamics.Joints.b2MouseJoint = Qa;
	Box2D.Dynamics.Joints.b2MouseJointDef = ya;
	Box2D.Dynamics.Joints.b2PrismaticJoint = Ga;
	Box2D.Dynamics.Joints.b2PrismaticJointDef = xa;
	Box2D.Dynamics.Joints.b2PulleyJoint = Y;
	Box2D.Dynamics.Joints.b2PulleyJointDef = na;
	Box2D.Dynamics.Joints.b2RevoluteJoint = ma;
	Box2D.Dynamics.Joints.b2RevoluteJointDef = ka;
	Box2D.Dynamics.Joints.b2WeldJoint = Ba;
	Box2D.Dynamics.Joints.b2WeldJointDef = Sa
})();
Box2D.postDefs = [];
(function() {
	var b = Box2D.Collision.Shapes.b2CircleShape,
		c = Box2D.Collision.Shapes.b2PolygonShape,
		d = Box2D.Collision.Shapes.b2Shape,
		f = Box2D.Common.b2Settings,
		e = Box2D.Common.Math.b2Math,
		j = Box2D.Common.Math.b2Sweep,
		n = Box2D.Common.Math.b2Transform,
		l = Box2D.Common.Math.b2Vec2,
		g = Box2D.Collision.b2AABB,
		r = Box2D.Collision.b2Bound,
		z = Box2D.Collision.b2BoundValues,
		y = Box2D.Collision.b2Collision,
		A = Box2D.Collision.b2ContactID,
		B = Box2D.Collision.b2ContactPoint,
		I = Box2D.Collision.b2Distance,
		D = Box2D.Collision.b2DistanceInput,
		t = Box2D.Collision.b2DistanceOutput,
		G = Box2D.Collision.b2DistanceProxy,
		E = Box2D.Collision.b2DynamicTree,
		L = Box2D.Collision.b2DynamicTreeBroadPhase,
		M = Box2D.Collision.b2DynamicTreeNode,
		Q = Box2D.Collision.b2DynamicTreePair,
		J = Box2D.Collision.b2Manifold,
		fa = Box2D.Collision.b2ManifoldPoint,
		O = Box2D.Collision.b2Point,
		P = Box2D.Collision.b2RayCastInput,
		aa = Box2D.Collision.b2RayCastOutput,
		U = Box2D.Collision.b2Segment,
		q = Box2D.Collision.b2SeparationFunction,
		x = Box2D.Collision.b2Simplex,
		F = Box2D.Collision.b2SimplexCache,
		C = Box2D.Collision.b2SimplexVertex,
		H = Box2D.Collision.b2TimeOfImpact,
		Z = Box2D.Collision.b2TOIInput,
		R = Box2D.Collision.b2WorldManifold,
		m = Box2D.Collision.ClipVertex,
		s = Box2D.Collision.Features,
		K = Box2D.Collision.IBroadPhase;
	g.b2AABB = function() {
		this.lowerBound = new l;
		this.upperBound = new l
	};
	g.prototype.IsValid = function() {
		var b = this.upperBound.y - this.lowerBound.y;
		return 0 <= this.upperBound.x - this.lowerBound.x && 0 <= b && this.lowerBound.IsValid() && this.upperBound.IsValid()
	};
	g.prototype.GetCenter = function() {
		return new l((this.lowerBound.x +
			this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
	};
	g.prototype.GetExtents = function() {
		return new l((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2)
	};
	g.prototype.Contains = function(b) {
		return this.lowerBound.x <= b.lowerBound.x && this.lowerBound.y <= b.lowerBound.y && b.upperBound.x <= this.upperBound.x && b.upperBound.y <= this.upperBound.y
	};
	g.prototype.RayCast = function(b, c) {
		var d = -Number.MAX_VALUE,
			e = Number.MAX_VALUE,
			m = c.p1.x,
			f = c.p1.y,
			g = c.p2.x - c.p1.x,
			j = c.p2.y - c.p1.y,
			q =
			Math.abs(j),
			s = b.normal,
			l = 0,
			x = 0,
			C = 0;
		if (Math.abs(g) < Number.MIN_VALUE) {
			if (m < this.lowerBound.x || this.upperBound.x < m) return !1
		} else if (l = 1 / g, x = (this.lowerBound.x - m) * l, l *= this.upperBound.x - m, C = -1, x > l && (C = x, x = l, l = C, C = 1), x > d && (s.x = C, s.y = 0, d = x), e = Math.min(e, l), d > e) return !1;
		if (q < Number.MIN_VALUE) {
			if (f < this.lowerBound.y || this.upperBound.y < f) return !1
		} else if (l = 1 / j, x = (this.lowerBound.y - f) * l, l *= this.upperBound.y - f, C = -1, x > l && (C = x, x = l, l = C, C = 1), x > d && (s.y = C, s.x = 0, d = x), e = Math.min(e, l), d > e) return !1;
		b.fraction = d;
		return !0
	};
	g.prototype.TestOverlap = function(b) {
		var c = b.lowerBound.y - this.upperBound.y,
			d = this.lowerBound.y - b.upperBound.y;
		return 0 < b.lowerBound.x - this.upperBound.x || 0 < c || 0 < this.lowerBound.x - b.upperBound.x || 0 < d ? !1 : !0
	};
	g.Combine = function(b, c) {
		var d = new g;
		d.Combine(b, c);
		return d
	};
	g.prototype.Combine = function(b, c) {
		this.lowerBound.x = Math.min(b.lowerBound.x, c.lowerBound.x);
		this.lowerBound.y = Math.min(b.lowerBound.y, c.lowerBound.y);
		this.upperBound.x = Math.max(b.upperBound.x, c.upperBound.x);
		this.upperBound.y = Math.max(b.upperBound.y,
			c.upperBound.y)
	};
	r.b2Bound = function() {};
	r.prototype.IsLower = function() {
		return 0 == (this.value & 1)
	};
	r.prototype.IsUpper = function() {
		return 1 == (this.value & 1)
	};
	r.prototype.Swap = function(b) {
		var c = this.value,
			d = this.proxy,
			e = this.stabbingCount;
		this.value = b.value;
		this.proxy = b.proxy;
		this.stabbingCount = b.stabbingCount;
		b.value = c;
		b.proxy = d;
		b.stabbingCount = e
	};
	z.b2BoundValues = function() {};
	z.prototype.b2BoundValues = function() {
		this.lowerValues = new Vector_a2j_Number;
		this.lowerValues[0] = 0;
		this.lowerValues[1] = 0;
		this.upperValues =
			new Vector_a2j_Number;
		this.upperValues[0] = 0;
		this.upperValues[1] = 0
	};
	y.b2Collision = function() {};
	y.ClipSegmentToLine = function(b, c, d, e) {
		void 0 === e && (e = 0);
		var m, f = 0;
		m = c[0];
		var g = m.v;
		m = c[1];
		var j = m.v,
			q = d.x * g.x + d.y * g.y - e;
		m = d.x * j.x + d.y * j.y - e;
		0 >= q && b[f++].Set(c[0]);
		0 >= m && b[f++].Set(c[1]);
		0 > q * m && (d = q / (q - m), m = b[f], m = m.v, m.x = g.x + d * (j.x - g.x), m.y = g.y + d * (j.y - g.y), m = b[f], m.id = (0 < q ? c[0] : c[1]).id, ++f);
		return f
	};
	y.EdgeSeparation = function(b, c, d, e, m) {
		void 0 === d && (d = 0);
		parseInt(b.m_vertexCount);
		var f = b.m_vertices;
		b = b.m_normals;
		var g = parseInt(e.m_vertexCount),
			j = e.m_vertices,
			q, s;
		q = c.R;
		s = b[d];
		b = q.col1.x * s.x + q.col2.x * s.y;
		e = q.col1.y * s.x + q.col2.y * s.y;
		q = m.R;
		var l = q.col1.x * b + q.col1.y * e;
		q = q.col2.x * b + q.col2.y * e;
		for (var x = 0, C = Number.MAX_VALUE, K = 0; K < g; ++K) s = j[K], s = s.x * l + s.y * q, s < C && (C = s, x = K);
		s = f[d];
		q = c.R;
		d = c.position.x + (q.col1.x * s.x + q.col2.x * s.y);
		c = c.position.y + (q.col1.y * s.x + q.col2.y * s.y);
		s = j[x];
		q = m.R;
		f = m.position.x + (q.col1.x * s.x + q.col2.x * s.y);
		m = m.position.y + (q.col1.y * s.x + q.col2.y * s.y);
		return (f - d) * b + (m - c) * e
	};
	y.FindMaxSeparation = function(b,
		c, d, e, m) {
		var f = parseInt(c.m_vertexCount),
			g = c.m_normals,
			j, q;
		q = m.R;
		j = e.m_centroid;
		var s = m.position.x + (q.col1.x * j.x + q.col2.x * j.y),
			l = m.position.y + (q.col1.y * j.x + q.col2.y * j.y);
		q = d.R;
		j = c.m_centroid;
		s -= d.position.x + (q.col1.x * j.x + q.col2.x * j.y);
		l -= d.position.y + (q.col1.y * j.x + q.col2.y * j.y);
		q = s * d.R.col1.x + l * d.R.col1.y;
		for (var l = s * d.R.col2.x + l * d.R.col2.y, s = 0, x = -Number.MAX_VALUE, C = 0; C < f; ++C) j = g[C], j = j.x * q + j.y * l, j > x && (x = j, s = C);
		g = y.EdgeSeparation(c, d, s, e, m);
		j = parseInt(0 <= s - 1 ? s - 1 : f - 1);
		q = y.EdgeSeparation(c, d, j, e, m);
		var l = parseInt(s + 1 < f ? s + 1 : 0),
			x = y.EdgeSeparation(c, d, l, e, m),
			K = 0,
			t = 0;
		if (q > g && q > x) t = -1, C = j, K = q;
		else if (x > g) t = 1, C = l, K = x;
		else return b[0] = s, g;
		for (;;)
			if (s = -1 == t ? 0 <= C - 1 ? C - 1 : f - 1 : C + 1 < f ? C + 1 : 0, g = y.EdgeSeparation(c, d, s, e, m), g > K) C = s, K = g;
			else break;
		b[0] = C;
		return K
	};
	y.FindIncidentEdge = function(b, c, d, e, m, f) {
		void 0 === e && (e = 0);
		parseInt(c.m_vertexCount);
		var g = c.m_normals,
			j = parseInt(m.m_vertexCount);
		c = m.m_vertices;
		m = m.m_normals;
		var q;
		q = d.R;
		d = g[e];
		var g = q.col1.x * d.x + q.col2.x * d.y,
			s = q.col1.y * d.x + q.col2.y * d.y;
		q = f.R;
		d = q.col1.x *
			g + q.col1.y * s;
		s = q.col2.x * g + q.col2.y * s;
		g = d;
		q = 0;
		for (var l = Number.MAX_VALUE, x = 0; x < j; ++x) d = m[x], d = g * d.x + s * d.y, d < l && (l = d, q = x);
		m = parseInt(q);
		g = parseInt(m + 1 < j ? m + 1 : 0);
		j = b[0];
		d = c[m];
		q = f.R;
		j.v.x = f.position.x + (q.col1.x * d.x + q.col2.x * d.y);
		j.v.y = f.position.y + (q.col1.y * d.x + q.col2.y * d.y);
		j.id.features.referenceEdge = e;
		j.id.features.incidentEdge = m;
		j.id.features.incidentVertex = 0;
		j = b[1];
		d = c[g];
		q = f.R;
		j.v.x = f.position.x + (q.col1.x * d.x + q.col2.x * d.y);
		j.v.y = f.position.y + (q.col1.y * d.x + q.col2.y * d.y);
		j.id.features.referenceEdge =
			e;
		j.id.features.incidentEdge = g;
		j.id.features.incidentVertex = 1
	};
	y.MakeClipPointVector = function() {
		var b = new Vector(2);
		b[0] = new m;
		b[1] = new m;
		return b
	};
	y.CollidePolygons = function(b, c, d, e, m) {
		var g;
		b.m_pointCount = 0;
		var j = c.m_radius + e.m_radius;
		y.s_edgeAO[0] = 0;
		var q = y.FindMaxSeparation(y.s_edgeAO, c, d, e, m);
		g = y.s_edgeAO[0];
		if (!(q > j)) {
			var s;
			y.s_edgeBO[0] = 0;
			var l = y.FindMaxSeparation(y.s_edgeBO, e, m, c, d);
			s = y.s_edgeBO[0];
			if (!(l > j)) {
				var x = 0,
					C = 0;
				l > 0.98 * q + 0.001 ? (q = e, e = c, c = m, x = s, b.m_type = J.e_faceB, C = 1) : (q = c, c = d, d = m,
					x = g, b.m_type = J.e_faceA, C = 0);
				g = y.s_incidentEdge;
				y.FindIncidentEdge(g, q, c, x, e, d);
				s = parseInt(q.m_vertexCount);
				m = q.m_vertices;
				var q = m[x],
					K;
				K = x + 1 < s ? m[parseInt(x + 1)] : m[0];
				x = y.s_localTangent;
				x.Set(K.x - q.x, K.y - q.y);
				x.Normalize();
				m = y.s_localNormal;
				m.x = x.y;
				m.y = -x.x;
				e = y.s_planePoint;
				e.Set(0.5 * (q.x + K.x), 0.5 * (q.y + K.y));
				l = y.s_tangent;
				s = c.R;
				l.x = s.col1.x * x.x + s.col2.x * x.y;
				l.y = s.col1.y * x.x + s.col2.y * x.y;
				var t = y.s_tangent2;
				t.x = -l.x;
				t.y = -l.y;
				x = y.s_normal;
				x.x = l.y;
				x.y = -l.x;
				var F = y.s_v11,
					H = y.s_v12;
				F.x = c.position.x + (s.col1.x *
					q.x + s.col2.x * q.y);
				F.y = c.position.y + (s.col1.y * q.x + s.col2.y * q.y);
				H.x = c.position.x + (s.col1.x * K.x + s.col2.x * K.y);
				H.y = c.position.y + (s.col1.y * K.x + s.col2.y * K.y);
				c = x.x * F.x + x.y * F.y;
				s = l.x * H.x + l.y * H.y + j;
				K = y.s_clipPoints1;
				q = y.s_clipPoints2;
				H = y.ClipSegmentToLine(K, g, t, -l.x * F.x - l.y * F.y + j);
				if (!(2 > H) && (H = y.ClipSegmentToLine(q, K, l, s), !(2 > H))) {
					b.m_localPlaneNormal.SetV(m);
					b.m_localPoint.SetV(e);
					for (e = m = 0; e < f.b2_maxManifoldPoints; ++e) g = q[e], x.x * g.v.x + x.y * g.v.y - c <= j && (l = b.m_points[m], s = d.R, t = g.v.x - d.position.x, F = g.v.y -
						d.position.y, l.m_localPoint.x = t * s.col1.x + F * s.col1.y, l.m_localPoint.y = t * s.col2.x + F * s.col2.y, l.m_id.Set(g.id), l.m_id.features.flip = C, ++m);
					b.m_pointCount = m
				}
			}
		}
	};
	y.CollideCircles = function(b, c, d, e, m) {
		b.m_pointCount = 0;
		var f, g;
		f = d.R;
		g = c.m_p;
		var q = d.position.x + (f.col1.x * g.x + f.col2.x * g.y);
		d = d.position.y + (f.col1.y * g.x + f.col2.y * g.y);
		f = m.R;
		g = e.m_p;
		q = m.position.x + (f.col1.x * g.x + f.col2.x * g.y) - q;
		m = m.position.y + (f.col1.y * g.x + f.col2.y * g.y) - d;
		f = c.m_radius + e.m_radius;
		q * q + m * m > f * f || (b.m_type = J.e_circles, b.m_localPoint.SetV(c.m_p),
			b.m_localPlaneNormal.SetZero(), b.m_pointCount = 1, b.m_points[0].m_localPoint.SetV(e.m_p), b.m_points[0].m_id.key = 0)
	};
	y.CollidePolygonAndCircle = function(b, c, d, e, m) {
		var f = b.m_pointCount = 0,
			g = 0,
			q, j;
		j = m.R;
		q = e.m_p;
		var s = m.position.y + (j.col1.y * q.x + j.col2.y * q.y),
			f = m.position.x + (j.col1.x * q.x + j.col2.x * q.y) - d.position.x,
			g = s - d.position.y;
		j = d.R;
		d = f * j.col1.x + g * j.col1.y;
		j = f * j.col2.x + g * j.col2.y;
		var l = 0,
			s = -Number.MAX_VALUE;
		m = c.m_radius + e.m_radius;
		var x = parseInt(c.m_vertexCount),
			C = c.m_vertices;
		c = c.m_normals;
		for (var K =
				0; K < x; ++K) {
			q = C[K];
			f = d - q.x;
			g = j - q.y;
			q = c[K];
			f = q.x * f + q.y * g;
			if (f > m) return;
			f > s && (s = f, l = K)
		}
		f = parseInt(l);
		g = parseInt(f + 1 < x ? f + 1 : 0);
		q = C[f];
		C = C[g];
		if (s < Number.MIN_VALUE) b.m_pointCount = 1, b.m_type = J.e_faceA, b.m_localPlaneNormal.SetV(c[l]), b.m_localPoint.x = 0.5 * (q.x + C.x), b.m_localPoint.y = 0.5 * (q.y + C.y);
		else if (s = (d - C.x) * (q.x - C.x) + (j - C.y) * (q.y - C.y), 0 >= (d - q.x) * (C.x - q.x) + (j - q.y) * (C.y - q.y)) {
			if ((d - q.x) * (d - q.x) + (j - q.y) * (j - q.y) > m * m) return;
			b.m_pointCount = 1;
			b.m_type = J.e_faceA;
			b.m_localPlaneNormal.x = d - q.x;
			b.m_localPlaneNormal.y =
				j - q.y;
			b.m_localPlaneNormal.Normalize();
			b.m_localPoint.SetV(q)
		} else if (0 >= s) {
			if ((d - C.x) * (d - C.x) + (j - C.y) * (j - C.y) > m * m) return;
			b.m_pointCount = 1;
			b.m_type = J.e_faceA;
			b.m_localPlaneNormal.x = d - C.x;
			b.m_localPlaneNormal.y = j - C.y;
			b.m_localPlaneNormal.Normalize();
			b.m_localPoint.SetV(C)
		} else {
			l = 0.5 * (q.x + C.x);
			q = 0.5 * (q.y + C.y);
			s = (d - l) * c[f].x + (j - q) * c[f].y;
			if (s > m) return;
			b.m_pointCount = 1;
			b.m_type = J.e_faceA;
			b.m_localPlaneNormal.x = c[f].x;
			b.m_localPlaneNormal.y = c[f].y;
			b.m_localPlaneNormal.Normalize();
			b.m_localPoint.Set(l,
				q)
		}
		b.m_points[0].m_localPoint.SetV(e.m_p);
		b.m_points[0].m_id.key = 0
	};
	y.TestOverlap = function(b, c) {
		var d = c.lowerBound,
			e = b.upperBound,
			m = d.x - e.x,
			f = d.y - e.y,
			d = b.lowerBound,
			e = c.upperBound,
			g = d.y - e.y;
		return 0 < m || 0 < f || 0 < d.x - e.x || 0 < g ? !1 : !0
	};
	Box2D.postDefs.push(function() {
		Box2D.Collision.b2Collision.s_incidentEdge = y.MakeClipPointVector();
		Box2D.Collision.b2Collision.s_clipPoints1 = y.MakeClipPointVector();
		Box2D.Collision.b2Collision.s_clipPoints2 = y.MakeClipPointVector();
		Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
		Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
		Box2D.Collision.b2Collision.s_localTangent = new l;
		Box2D.Collision.b2Collision.s_localNormal = new l;
		Box2D.Collision.b2Collision.s_planePoint = new l;
		Box2D.Collision.b2Collision.s_normal = new l;
		Box2D.Collision.b2Collision.s_tangent = new l;
		Box2D.Collision.b2Collision.s_tangent2 = new l;
		Box2D.Collision.b2Collision.s_v11 = new l;
		Box2D.Collision.b2Collision.s_v12 = new l;
		Box2D.Collision.b2Collision.b2CollidePolyTempVec = new l;
		Box2D.Collision.b2Collision.b2_nullFeature =
			255
	});
	A.b2ContactID = function() {
		this.features = new s
	};
	A.prototype.b2ContactID = function() {
		this.features._m_id = this
	};
	A.prototype.Set = function(b) {
		this.key = b._key
	};
	A.prototype.Copy = function() {
		var b = new A;
		b.key = this.key;
		return b
	};
	Object.defineProperty(A.prototype, "key", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._key
		}
	});
	Object.defineProperty(A.prototype, "key", {
		enumerable: !1,
		configurable: !0,
		set: function(b) {
			void 0 === b && (b = 0);
			this._key = b;
			this.features._referenceEdge = this._key & 255;
			this.features._incidentEdge =
				(this._key & 65280) >> 8 & 255;
			this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
			this.features._flip = (this._key & 4278190080) >> 24 & 255
		}
	});
	B.b2ContactPoint = function() {
		this.position = new l;
		this.velocity = new l;
		this.normal = new l;
		this.id = new A
	};
	I.b2Distance = function() {};
	I.Distance = function(b, c, d) {
		++I.b2_gjkCalls;
		var m = d.proxyA,
			g = d.proxyB,
			q = d.transformA,
			j = d.transformB,
			s = I.s_simplex;
		s.ReadCache(c, m, q, g, j);
		var x = s.m_vertices,
			C = I.s_saveA,
			K = I.s_saveB,
			t = 0;
		s.GetClosestPoint().LengthSquared();
		for (var F = 0, H, R = 0; 20 >
			R;) {
			t = s.m_count;
			for (F = 0; F < t; F++) C[F] = x[F].indexA, K[F] = x[F].indexB;
			switch (s.m_count) {
				case 1:
					break;
				case 2:
					s.Solve2();
					break;
				case 3:
					s.Solve3();
					break;
				default:
					f.b2Assert(!1)
			}
			if (3 == s.m_count) break;
			H = s.GetClosestPoint();
			H.LengthSquared();
			F = s.GetSearchDirection();
			if (F.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
			H = x[s.m_count];
			H.indexA = m.GetSupport(e.MulTMV(q.R, F.GetNegative()));
			H.wA = e.MulX(q, m.GetVertex(H.indexA));
			H.indexB = g.GetSupport(e.MulTMV(j.R, F));
			H.wB = e.MulX(j, g.GetVertex(H.indexB));
			H.w =
				e.SubtractVV(H.wB, H.wA);
			++R;
			++I.b2_gjkIters;
			for (var n = !1, F = 0; F < t; F++)
				if (H.indexA == C[F] && H.indexB == K[F]) {
					n = !0;
					break
				}
			if (n) break;
			++s.m_count
		}
		I.b2_gjkMaxIters = e.Max(I.b2_gjkMaxIters, R);
		s.GetWitnessPoints(b.pointA, b.pointB);
		b.distance = e.SubtractVV(b.pointA, b.pointB).Length();
		b.iterations = R;
		s.WriteCache(c);
		d.useRadii && (c = m.m_radius, g = g.m_radius, b.distance > c + g && b.distance > Number.MIN_VALUE ? (b.distance -= c + g, d = e.SubtractVV(b.pointB, b.pointA), d.Normalize(), b.pointA.x += c * d.x, b.pointA.y += c * d.y, b.pointB.x -= g * d.x,
			b.pointB.y -= g * d.y) : (H = new l, H.x = 0.5 * (b.pointA.x + b.pointB.x), H.y = 0.5 * (b.pointA.y + b.pointB.y), b.pointA.x = b.pointB.x = H.x, b.pointA.y = b.pointB.y = H.y, b.distance = 0))
	};
	Box2D.postDefs.push(function() {
		Box2D.Collision.b2Distance.s_simplex = new x;
		Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
		Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3)
	});
	D.b2DistanceInput = function() {};
	t.b2DistanceOutput = function() {
		this.pointA = new l;
		this.pointB = new l
	};
	G.b2DistanceProxy = function() {};
	G.prototype.Set =
		function(e) {
			switch (e.GetType()) {
				case d.e_circleShape:
					e = e instanceof b ? e : null;
					this.m_vertices = new Vector(1, !0);
					this.m_vertices[0] = e.m_p;
					this.m_count = 1;
					this.m_radius = e.m_radius;
					break;
				case d.e_polygonShape:
					e = e instanceof c ? e : null;
					this.m_vertices = e.m_vertices;
					this.m_count = e.m_vertexCount;
					this.m_radius = e.m_radius;
					break;
				default:
					f.b2Assert(!1)
			}
		};
	G.prototype.GetSupport = function(b) {
		for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_count; ++e) {
			var m = this.m_vertices[e].x * b.x + this.m_vertices[e].y *
				b.y;
			m > d && (c = e, d = m)
		}
		return c
	};
	G.prototype.GetSupportVertex = function(b) {
		for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_count; ++e) {
			var m = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
			m > d && (c = e, d = m)
		}
		return this.m_vertices[c]
	};
	G.prototype.GetVertexCount = function() {
		return this.m_count
	};
	G.prototype.GetVertex = function(b) {
		void 0 === b && (b = 0);
		f.b2Assert(0 <= b && b < this.m_count);
		return this.m_vertices[b]
	};
	E.b2DynamicTree = function() {};
	E.prototype.b2DynamicTree = function() {
		this.m_freeList =
			this.m_root = null;
		this.m_insertionCount = this.m_path = 0
	};
	E.prototype.CreateProxy = function(b, c) {
		var d = this.AllocateNode(),
			e = f.b2_aabbExtension,
			m = f.b2_aabbExtension;
		d.aabb.lowerBound.x = b.lowerBound.x - e;
		d.aabb.lowerBound.y = b.lowerBound.y - m;
		d.aabb.upperBound.x = b.upperBound.x + e;
		d.aabb.upperBound.y = b.upperBound.y + m;
		d.userData = c;
		this.InsertLeaf(d);
		return d
	};
	E.prototype.DestroyProxy = function(b) {
		this.RemoveLeaf(b);
		this.FreeNode(b)
	};
	E.prototype.MoveProxy = function(b, c, d) {
		f.b2Assert(b.IsLeaf());
		if (b.aabb.Contains(c)) return !1;
		this.RemoveLeaf(b);
		var e = f.b2_aabbExtension + f.b2_aabbMultiplier * (0 < d.x ? d.x : -d.x);
		d = f.b2_aabbExtension + f.b2_aabbMultiplier * (0 < d.y ? d.y : -d.y);
		b.aabb.lowerBound.x = c.lowerBound.x - e;
		b.aabb.lowerBound.y = c.lowerBound.y - d;
		b.aabb.upperBound.x = c.upperBound.x + e;
		b.aabb.upperBound.y = c.upperBound.y + d;
		this.InsertLeaf(b);
		return !0
	};
	E.prototype.Rebalance = function(b) {
		void 0 === b && (b = 0);
		if (null != this.m_root)
			for (var c = 0; c < b; c++) {
				for (var d = this.m_root, e = 0; !1 == d.IsLeaf();) d = this.m_path >> e & 1 ? d.child2 : d.child1, e = e + 1 & 31;
				++this.m_path;
				this.RemoveLeaf(d);
				this.InsertLeaf(d)
			}
	};
	E.prototype.GetFatAABB = function(b) {
		return b.aabb
	};
	E.prototype.GetUserData = function(b) {
		return b.userData
	};
	E.prototype.Query = function(b, c) {
		if (null != this.m_root) {
			var d = new Vector,
				e = 0;
			for (d[e++] = this.m_root; 0 < e;) {
				var m = d[--e];
				if (m.aabb.TestOverlap(c))
					if (m.IsLeaf()) {
						if (!b(m)) break
					} else d[e++] = m.child1, d[e++] = m.child2
			}
		}
	};
	E.prototype.RayCast = function(b, c) {
		if (null != this.m_root) {
			var d = c.p1,
				m = c.p2,
				f = e.SubtractVV(d, m);
			f.Normalize();
			var f = e.CrossFV(1, f),
				q = e.AbsV(f),
				j = c.maxFraction,
				s = new g,
				l = 0,
				x = 0,
				l = d.x + j * (m.x - d.x),
				x = d.y + j * (m.y - d.y);
			s.lowerBound.x = Math.min(d.x, l);
			s.lowerBound.y = Math.min(d.y, x);
			s.upperBound.x = Math.max(d.x, l);
			s.upperBound.y = Math.max(d.y, x);
			var C = new Vector,
				K = 0;
			for (C[K++] = this.m_root; 0 < K;)
				if (j = C[--K], !1 != j.aabb.TestOverlap(s) && (l = j.aabb.GetCenter(), x = j.aabb.GetExtents(), !(0 < Math.abs(f.x * (d.x - l.x) + f.y * (d.y - l.y)) - q.x * x.x - q.y * x.y)))
					if (j.IsLeaf()) {
						l = new P;
						l.p1 = c.p1;
						l.p2 = c.p2;
						l.maxFraction = c.maxFraction;
						j = b(l, j);
						if (0 == j) break;
						0 < j && (l = d.x + j * (m.x - d.x), x = d.y + j * (m.y - d.y),
							s.lowerBound.x = Math.min(d.x, l), s.lowerBound.y = Math.min(d.y, x), s.upperBound.x = Math.max(d.x, l), s.upperBound.y = Math.max(d.y, x))
					} else C[K++] = j.child1, C[K++] = j.child2
		}
	};
	E.prototype.AllocateNode = function() {
		if (this.m_freeList) {
			var b = this.m_freeList;
			this.m_freeList = b.parent;
			b.parent = null;
			b.child1 = null;
			b.child2 = null;
			return b
		}
		return new M
	};
	E.prototype.FreeNode = function(b) {
		b.parent = this.m_freeList;
		this.m_freeList = b
	};
	E.prototype.InsertLeaf = function(b) {
		++this.m_insertionCount;
		if (null == this.m_root) this.m_root =
			b, this.m_root.parent = null;
		else {
			var c = b.aabb.GetCenter(),
				d = this.m_root;
			if (!1 == d.IsLeaf()) {
				do var e = d.child1,
					d = d.child2,
					d = Math.abs((e.aabb.lowerBound.x + e.aabb.upperBound.x) / 2 - c.x) + Math.abs((e.aabb.lowerBound.y + e.aabb.upperBound.y) / 2 - c.y) < Math.abs((d.aabb.lowerBound.x + d.aabb.upperBound.x) / 2 - c.x) + Math.abs((d.aabb.lowerBound.y + d.aabb.upperBound.y) / 2 - c.y) ? e : d; while (!1 == d.IsLeaf())
			}
			c = d.parent;
			e = this.AllocateNode();
			e.parent = c;
			e.userData = null;
			e.aabb.Combine(b.aabb, d.aabb);
			if (c) {
				d.parent.child1 == d ? c.child1 =
					e : c.child2 = e;
				e.child1 = d;
				e.child2 = b;
				d.parent = e;
				b.parent = e;
				do {
					if (c.aabb.Contains(e.aabb)) break;
					c.aabb.Combine(c.child1.aabb, c.child2.aabb);
					e = c;
					c = c.parent
				} while (c)
			} else e.child1 = d, e.child2 = b, d.parent = e, this.m_root = b.parent = e
		}
	};
	E.prototype.RemoveLeaf = function(b) {
		if (b == this.m_root) this.m_root = null;
		else {
			var c = b.parent,
				d = c.parent;
			b = c.child1 == b ? c.child2 : c.child1;
			if (d) {
				d.child1 == c ? d.child1 = b : d.child2 = b;
				b.parent = d;
				for (this.FreeNode(c); d;) {
					c = d.aabb;
					d.aabb = g.Combine(d.child1.aabb, d.child2.aabb);
					if (c.Contains(d.aabb)) break;
					d = d.parent
				}
			} else this.m_root = b, b.parent = null, this.FreeNode(c)
		}
	};
	L.b2DynamicTreeBroadPhase = function() {
		this.m_tree = new E;
		this.m_moveBuffer = new Vector;
		this.m_pairBuffer = new Vector;
		this.m_pairCount = 0
	};
	L.prototype.CreateProxy = function(b, c) {
		var d = this.m_tree.CreateProxy(b, c);
		++this.m_proxyCount;
		this.BufferMove(d);
		return d
	};
	L.prototype.DestroyProxy = function(b) {
		this.UnBufferMove(b);
		--this.m_proxyCount;
		this.m_tree.DestroyProxy(b)
	};
	L.prototype.MoveProxy = function(b, c, d) {
		this.m_tree.MoveProxy(b, c, d) && this.BufferMove(b)
	};
	L.prototype.TestOverlap = function(b, c) {
		var d = this.m_tree.GetFatAABB(b),
			e = this.m_tree.GetFatAABB(c);
		return d.TestOverlap(e)
	};
	L.prototype.GetUserData = function(b) {
		return this.m_tree.GetUserData(b)
	};
	L.prototype.GetFatAABB = function(b) {
		return this.m_tree.GetFatAABB(b)
	};
	L.prototype.GetProxyCount = function() {
		return this.m_proxyCount
	};
	L.prototype.UpdatePairs = function(b) {
		for (var c = this, d = c.m_pairCount = 0, e, d = 0; d < c.m_moveBuffer.length; ++d) {
			e = c.m_moveBuffer[d];
			var m = c.m_tree.GetFatAABB(e);
			c.m_tree.Query(function(b) {
				if (b ==
					e) return !0;
				c.m_pairCount == c.m_pairBuffer.length && (c.m_pairBuffer[c.m_pairCount] = new Q);
				var d = c.m_pairBuffer[c.m_pairCount];
				d.proxyA = b < e ? b : e;
				d.proxyB = b >= e ? b : e;
				++c.m_pairCount;
				return !0
			}, m)
		}
		for (d = c.m_moveBuffer.length = 0; d < c.m_pairCount;) {
			var m = c.m_pairBuffer[d],
				f = c.m_tree.GetUserData(m.proxyA),
				g = c.m_tree.GetUserData(m.proxyB);
			b(f, g);
			for (++d; d < c.m_pairCount;) {
				f = c.m_pairBuffer[d];
				if (f.proxyA != m.proxyA || f.proxyB != m.proxyB) break;
				++d
			}
		}
	};
	L.prototype.Query = function(b, c) {
		this.m_tree.Query(b, c)
	};
	L.prototype.RayCast =
		function(b, c) {
			this.m_tree.RayCast(b, c)
		};
	L.prototype.Validate = function() {};
	L.prototype.Rebalance = function(b) {
		void 0 === b && (b = 0);
		this.m_tree.Rebalance(b)
	};
	L.prototype.BufferMove = function(b) {
		this.m_moveBuffer[this.m_moveBuffer.length] = b
	};
	L.prototype.UnBufferMove = function(b) {
		this.m_moveBuffer.splice(parseInt(this.m_moveBuffer.indexOf(b)), 1)
	};
	L.prototype.ComparePairs = function() {
		return 0
	};
	L.__implements = {};
	L.__implements[K] = !0;
	M.b2DynamicTreeNode = function() {
		this.aabb = new g
	};
	M.prototype.IsLeaf = function() {
		return null ==
			this.child1
	};
	Q.b2DynamicTreePair = function() {};
	J.b2Manifold = function() {
		this.m_pointCount = 0
	};
	J.prototype.b2Manifold = function() {
		this.m_points = new Vector(f.b2_maxManifoldPoints);
		for (var b = 0; b < f.b2_maxManifoldPoints; b++) this.m_points[b] = new fa;
		this.m_localPlaneNormal = new l;
		this.m_localPoint = new l
	};
	J.prototype.Reset = function() {
		for (var b = 0; b < f.b2_maxManifoldPoints; b++)(this.m_points[b] instanceof fa ? this.m_points[b] : null).Reset();
		this.m_localPlaneNormal.SetZero();
		this.m_localPoint.SetZero();
		this.m_pointCount =
			this.m_type = 0
	};
	J.prototype.Set = function(b) {
		this.m_pointCount = b.m_pointCount;
		for (var c = 0; c < f.b2_maxManifoldPoints; c++)(this.m_points[c] instanceof fa ? this.m_points[c] : null).Set(b.m_points[c]);
		this.m_localPlaneNormal.SetV(b.m_localPlaneNormal);
		this.m_localPoint.SetV(b.m_localPoint);
		this.m_type = b.m_type
	};
	J.prototype.Copy = function() {
		var b = new J;
		b.Set(this);
		return b
	};
	Box2D.postDefs.push(function() {
		Box2D.Collision.b2Manifold.e_circles = 1;
		Box2D.Collision.b2Manifold.e_faceA = 2;
		Box2D.Collision.b2Manifold.e_faceB =
			4
	});
	fa.b2ManifoldPoint = function() {
		this.m_localPoint = new l;
		this.m_id = new A
	};
	fa.prototype.b2ManifoldPoint = function() {
		this.Reset()
	};
	fa.prototype.Reset = function() {
		this.m_localPoint.SetZero();
		this.m_tangentImpulse = this.m_normalImpulse = 0;
		this.m_id.key = 0
	};
	fa.prototype.Set = function(b) {
		this.m_localPoint.SetV(b.m_localPoint);
		this.m_normalImpulse = b.m_normalImpulse;
		this.m_tangentImpulse = b.m_tangentImpulse;
		this.m_id.Set(b.m_id)
	};
	O.b2Point = function() {
		this.p = new l
	};
	O.prototype.Support = function() {
		return this.p
	};
	O.prototype.GetFirstVertex = function() {
		return this.p
	};
	P.b2RayCastInput = function() {
		this.p1 = new l;
		this.p2 = new l
	};
	P.prototype.b2RayCastInput = function(b, c, d) {
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		void 0 === d && (d = 1);
		b && this.p1.SetV(b);
		c && this.p2.SetV(c);
		this.maxFraction = d
	};
	aa.b2RayCastOutput = function() {
		this.normal = new l
	};
	U.b2Segment = function() {
		this.p1 = new l;
		this.p2 = new l
	};
	U.prototype.TestSegment = function(b, c, d, e) {
		void 0 === e && (e = 0);
		var m = d.p1,
			f = d.p2.x - m.x,
			g = d.p2.y - m.y;
		d = this.p2.y - this.p1.y;
		var q = -(this.p2.x -
				this.p1.x),
			j = 100 * Number.MIN_VALUE,
			s = -(f * d + g * q);
		if (s > j) {
			var l = m.x - this.p1.x,
				x = m.y - this.p1.y,
				m = l * d + x * q;
			if (0 <= m && m <= e * s && (e = -f * x + g * l, -j * s <= e && e <= s * (1 + j))) return m /= s, e = Math.sqrt(d * d + q * q), b[0] = m, c.Set(d / e, q / e), !0
		}
		return !1
	};
	U.prototype.Extend = function(b) {
		this.ExtendForward(b);
		this.ExtendBackward(b)
	};
	U.prototype.ExtendForward = function(b) {
		var c = this.p2.x - this.p1.x,
			d = this.p2.y - this.p1.y;
		b = Math.min(0 < c ? (b.upperBound.x - this.p1.x) / c : 0 > c ? (b.lowerBound.x - this.p1.x) / c : Number.POSITIVE_INFINITY, 0 < d ? (b.upperBound.y -
			this.p1.y) / d : 0 > d ? (b.lowerBound.y - this.p1.y) / d : Number.POSITIVE_INFINITY);
		this.p2.x = this.p1.x + c * b;
		this.p2.y = this.p1.y + d * b
	};
	U.prototype.ExtendBackward = function(b) {
		var c = -this.p2.x + this.p1.x,
			d = -this.p2.y + this.p1.y;
		b = Math.min(0 < c ? (b.upperBound.x - this.p2.x) / c : 0 > c ? (b.lowerBound.x - this.p2.x) / c : Number.POSITIVE_INFINITY, 0 < d ? (b.upperBound.y - this.p2.y) / d : 0 > d ? (b.lowerBound.y - this.p2.y) / d : Number.POSITIVE_INFINITY);
		this.p1.x = this.p2.x + c * b;
		this.p1.y = this.p2.y + d * b
	};
	q.b2SeparationFunction = function() {
		this.m_localPoint =
			new l;
		this.m_axis = new l
	};
	q.prototype.Initialize = function(b, c, d, m, g) {
		this.m_proxyA = c;
		this.m_proxyB = m;
		var j = parseInt(b.count);
		f.b2Assert(0 < j && 3 > j);
		var s, x, C, K, F = 0,
			t = 0;
		1 == j ? (this.m_type = q.e_points, s = this.m_proxyA.GetVertex(b.indexA[0]), x = this.m_proxyB.GetVertex(b.indexB[0]), j = s, b = d.R, c = d.position.x + (b.col1.x * j.x + b.col2.x * j.y), m = d.position.y + (b.col1.y * j.x + b.col2.y * j.y), j = x, b = g.R, C = g.position.x + (b.col1.x * j.x + b.col2.x * j.y), K = g.position.y + (b.col1.y * j.x + b.col2.y * j.y), this.m_axis.x = C - c, this.m_axis.y = K - m, this.m_axis.Normalize()) :
			(b.indexB[0] == b.indexB[1] ? (this.m_type = q.e_faceA, c = this.m_proxyA.GetVertex(b.indexA[0]), m = this.m_proxyA.GetVertex(b.indexA[1]), x = this.m_proxyB.GetVertex(b.indexB[0]), this.m_localPoint.x = 0.5 * (c.x + m.x), this.m_localPoint.y = 0.5 * (c.y + m.y), this.m_axis = e.CrossVF(e.SubtractVV(m, c), 1), this.m_axis.Normalize(), j = this.m_axis, b = d.R, F = b.col1.x * j.x + b.col2.x * j.y, t = b.col1.y * j.x + b.col2.y * j.y, j = this.m_localPoint, b = d.R, c = d.position.x + (b.col1.x * j.x + b.col2.x * j.y), m = d.position.y + (b.col1.y * j.x + b.col2.y * j.y), j = x, b = g.R, C =
				g.position.x + (b.col1.x * j.x + b.col2.x * j.y), K = g.position.y + (b.col1.y * j.x + b.col2.y * j.y), F = (C - c) * F + (K - m) * t) : b.indexA[0] == b.indexA[0] ? (this.m_type = q.e_faceB, C = this.m_proxyB.GetVertex(b.indexB[0]), K = this.m_proxyB.GetVertex(b.indexB[1]), s = this.m_proxyA.GetVertex(b.indexA[0]), this.m_localPoint.x = 0.5 * (C.x + K.x), this.m_localPoint.y = 0.5 * (C.y + K.y), this.m_axis = e.CrossVF(e.SubtractVV(K, C), 1), this.m_axis.Normalize(), j = this.m_axis, b = g.R, F = b.col1.x * j.x + b.col2.x * j.y, t = b.col1.y * j.x + b.col2.y * j.y, j = this.m_localPoint, b =
				g.R, C = g.position.x + (b.col1.x * j.x + b.col2.x * j.y), K = g.position.y + (b.col1.y * j.x + b.col2.y * j.y), j = s, b = d.R, c = d.position.x + (b.col1.x * j.x + b.col2.x * j.y), m = d.position.y + (b.col1.y * j.x + b.col2.y * j.y), F = (c - C) * F + (m - K) * t) : (c = this.m_proxyA.GetVertex(b.indexA[0]), m = this.m_proxyA.GetVertex(b.indexA[1]), C = this.m_proxyB.GetVertex(b.indexB[0]), K = this.m_proxyB.GetVertex(b.indexB[1]), e.MulX(d, s), s = e.MulMV(d.R, e.SubtractVV(m, c)), e.MulX(g, x), F = e.MulMV(g.R, e.SubtractVV(K, C)), g = s.x * s.x + s.y * s.y, x = F.x * F.x + F.y * F.y, b = e.SubtractVV(F,
				s), d = s.x * b.x + s.y * b.y, b = F.x * b.x + F.y * b.y, s = s.x * F.x + s.y * F.y, t = g * x - s * s, F = 0, 0 != t && (F = e.Clamp((s * b - d * x) / t, 0, 1)), 0 > (s * F + b) / x && (F = e.Clamp((s - d) / g, 0, 1)), s = new l, s.x = c.x + F * (m.x - c.x), s.y = c.y + F * (m.y - c.y), x = new l, x.x = C.x + F * (K.x - C.x), x.y = C.y + F * (K.y - C.y), 0 == F || 1 == F ? (this.m_type = q.e_faceB, this.m_axis = e.CrossVF(e.SubtractVV(K, C), 1), this.m_axis.Normalize(), this.m_localPoint = x) : (this.m_type = q.e_faceA, this.m_axis = e.CrossVF(e.SubtractVV(m, c), 1), this.m_localPoint = s)), 0 > F && this.m_axis.NegativeSelf())
	};
	q.prototype.Evaluate =
		function(b, c) {
			var d, m, g = 0;
			switch (this.m_type) {
				case q.e_points:
					return d = e.MulTMV(b.R, this.m_axis), m = e.MulTMV(c.R, this.m_axis.GetNegative()), d = this.m_proxyA.GetSupportVertex(d), m = this.m_proxyB.GetSupportVertex(m), d = e.MulX(b, d), m = e.MulX(c, m), (m.x - d.x) * this.m_axis.x + (m.y - d.y) * this.m_axis.y;
				case q.e_faceA:
					return g = e.MulMV(b.R, this.m_axis), d = e.MulX(b, this.m_localPoint), m = e.MulTMV(c.R, g.GetNegative()), m = this.m_proxyB.GetSupportVertex(m), m = e.MulX(c, m), (m.x - d.x) * g.x + (m.y - d.y) * g.y;
				case q.e_faceB:
					return g = e.MulMV(c.R,
						this.m_axis), m = e.MulX(c, this.m_localPoint), d = e.MulTMV(b.R, g.GetNegative()), d = this.m_proxyA.GetSupportVertex(d), d = e.MulX(b, d), (d.x - m.x) * g.x + (d.y - m.y) * g.y;
				default:
					return f.b2Assert(!1), 0
			}
		};
	Box2D.postDefs.push(function() {
		Box2D.Collision.b2SeparationFunction.e_points = 1;
		Box2D.Collision.b2SeparationFunction.e_faceA = 2;
		Box2D.Collision.b2SeparationFunction.e_faceB = 4
	});
	x.b2Simplex = function() {
		this.m_v1 = new C;
		this.m_v2 = new C;
		this.m_v3 = new C;
		this.m_vertices = new Vector(3)
	};
	x.prototype.b2Simplex = function() {
		this.m_vertices[0] =
			this.m_v1;
		this.m_vertices[1] = this.m_v2;
		this.m_vertices[2] = this.m_v3
	};
	x.prototype.ReadCache = function(b, c, d, m, g) {
		f.b2Assert(0 <= b.count && 3 >= b.count);
		var j, q;
		this.m_count = b.count;
		for (var s = this.m_vertices, l = 0; l < this.m_count; l++) {
			var x = s[l];
			x.indexA = b.indexA[l];
			x.indexB = b.indexB[l];
			j = c.GetVertex(x.indexA);
			q = m.GetVertex(x.indexB);
			x.wA = e.MulX(d, j);
			x.wB = e.MulX(g, q);
			x.w = e.SubtractVV(x.wB, x.wA);
			x.a = 0
		}
		if (1 < this.m_count && (b = b.metric, j = this.GetMetric(), j < 0.5 * b || 2 * b < j || j < Number.MIN_VALUE)) this.m_count = 0;
		0 == this.m_count &&
			(x = s[0], x.indexA = 0, x.indexB = 0, j = c.GetVertex(0), q = m.GetVertex(0), x.wA = e.MulX(d, j), x.wB = e.MulX(g, q), x.w = e.SubtractVV(x.wB, x.wA), this.m_count = 1)
	};
	x.prototype.WriteCache = function(b) {
		b.metric = this.GetMetric();
		b.count = Box2D.parseUInt(this.m_count);
		for (var c = this.m_vertices, d = 0; d < this.m_count; d++) b.indexA[d] = Box2D.parseUInt(c[d].indexA), b.indexB[d] = Box2D.parseUInt(c[d].indexB)
	};
	x.prototype.GetSearchDirection = function() {
		switch (this.m_count) {
			case 1:
				return this.m_v1.w.GetNegative();
			case 2:
				var b = e.SubtractVV(this.m_v2.w,
					this.m_v1.w);
				return 0 < e.CrossVV(b, this.m_v1.w.GetNegative()) ? e.CrossFV(1, b) : e.CrossVF(b, 1);
			default:
				return f.b2Assert(!1), new l
		}
	};
	x.prototype.GetClosestPoint = function() {
		switch (this.m_count) {
			case 0:
				return f.b2Assert(!1), new l;
			case 1:
				return this.m_v1.w;
			case 2:
				return new l(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
			default:
				return f.b2Assert(!1), new l
		}
	};
	x.prototype.GetWitnessPoints = function(b, c) {
		switch (this.m_count) {
			case 0:
				f.b2Assert(!1);
				break;
			case 1:
				b.SetV(this.m_v1.wA);
				c.SetV(this.m_v1.wB);
				break;
			case 2:
				b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
				b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
				c.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
				c.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
				break;
			case 3:
				c.x = b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
				c.y = b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
				break;
			default:
				f.b2Assert(!1)
		}
	};
	x.prototype.GetMetric = function() {
		switch (this.m_count) {
			case 0:
				return f.b2Assert(!1), 0;
			case 1:
				return 0;
			case 2:
				return e.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
			case 3:
				return e.CrossVV(e.SubtractVV(this.m_v2.w, this.m_v1.w), e.SubtractVV(this.m_v3.w, this.m_v1.w));
			default:
				return f.b2Assert(!1), 0
		}
	};
	x.prototype.Solve2 = function() {
		var b = this.m_v1.w,
			c = this.m_v2.w,
			d = e.SubtractVV(c, b),
			b = -(b.x * d.x + b.y * d.y);
		0 >= b ? this.m_count = this.m_v1.a = 1 : (c = c.x * d.x + c.y * d.y, 0 >= c ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) :
			(d = 1 / (c + b), this.m_v1.a = c * d, this.m_v2.a = b * d, this.m_count = 2))
	};
	x.prototype.Solve3 = function() {
		var b = this.m_v1.w,
			c = this.m_v2.w,
			d = this.m_v3.w,
			m = e.SubtractVV(c, b),
			f = e.Dot(b, m),
			g = e.Dot(c, m),
			f = -f,
			j = e.SubtractVV(d, b),
			q = e.Dot(b, j),
			s = e.Dot(d, j),
			q = -q,
			l = e.SubtractVV(d, c),
			x = e.Dot(c, l),
			l = e.Dot(d, l),
			x = -x,
			j = e.CrossVV(m, j),
			m = j * e.CrossVV(c, d),
			d = j * e.CrossVV(d, b),
			b = j * e.CrossVV(b, c);
		0 >= f && 0 >= q ? this.m_count = this.m_v1.a = 1 : 0 < g && 0 < f && 0 >= b ? (s = 1 / (g + f), this.m_v1.a = g * s, this.m_v2.a = f * s, this.m_count = 2) : 0 < s && 0 < q && 0 >= d ? (g = 1 / (s + q),
			this.m_v1.a = s * g, this.m_v3.a = q * g, this.m_count = 2, this.m_v2.Set(this.m_v3)) : 0 >= g && 0 >= x ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : 0 >= s && 0 >= l ? (this.m_count = this.m_v3.a = 1, this.m_v1.Set(this.m_v3)) : 0 < l && 0 < x && 0 >= m ? (g = 1 / (l + x), this.m_v2.a = l * g, this.m_v3.a = x * g, this.m_count = 2, this.m_v1.Set(this.m_v3)) : (g = 1 / (m + d + b), this.m_v1.a = m * g, this.m_v2.a = d * g, this.m_v3.a = b * g, this.m_count = 3)
	};
	F.b2SimplexCache = function() {
		this.indexA = new Vector_a2j_Number(3);
		this.indexB = new Vector_a2j_Number(3)
	};
	C.b2SimplexVertex =
		function() {};
	C.prototype.Set = function(b) {
		this.wA.SetV(b.wA);
		this.wB.SetV(b.wB);
		this.w.SetV(b.w);
		this.a = b.a;
		this.indexA = b.indexA;
		this.indexB = b.indexB
	};
	H.b2TimeOfImpact = function() {};
	H.TimeOfImpact = function(b) {
		++H.b2_toiCalls;
		var c = b.proxyA,
			d = b.proxyB,
			m = b.sweepA,
			g = b.sweepB;
		f.b2Assert(m.t0 == g.t0);
		f.b2Assert(1 - m.t0 > Number.MIN_VALUE);
		var j = c.m_radius + d.m_radius;
		b = b.tolerance;
		var q = 0,
			s = 0,
			l = 0;
		H.s_cache.count = 0;
		for (H.s_distanceInput.useRadii = !1;;) {
			m.GetTransform(H.s_xfA, q);
			g.GetTransform(H.s_xfB, q);
			H.s_distanceInput.proxyA =
				c;
			H.s_distanceInput.proxyB = d;
			H.s_distanceInput.transformA = H.s_xfA;
			H.s_distanceInput.transformB = H.s_xfB;
			I.Distance(H.s_distanceOutput, H.s_cache, H.s_distanceInput);
			if (0 >= H.s_distanceOutput.distance) {
				q = 1;
				break
			}
			H.s_fcn.Initialize(H.s_cache, c, H.s_xfA, d, H.s_xfB);
			var x = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
			if (0 >= x) {
				q = 1;
				break
			}
			0 == s && (l = x > j ? e.Max(j - b, 0.75 * j) : e.Max(x - b, 0.02 * j));
			if (x - l < 0.5 * b) {
				if (0 == s) {
					q = 1;
					break
				}
				break
			}
			var C = q,
				K = q,
				F = 1;
			m.GetTransform(H.s_xfA, F);
			g.GetTransform(H.s_xfB, F);
			var t = H.s_fcn.Evaluate(H.s_xfA,
				H.s_xfB);
			if (t >= l) {
				q = 1;
				break
			}
			for (var R = 0;;) {
				var n = 0,
					n = R & 1 ? K + (l - x) * (F - K) / (t - x) : 0.5 * (K + F);
				m.GetTransform(H.s_xfA, n);
				g.GetTransform(H.s_xfB, n);
				var Z = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
				if (e.Abs(Z - l) < 0.025 * b) {
					C = n;
					break
				}
				Z > l ? (K = n, x = Z) : (F = n, t = Z);
				++R;
				++H.b2_toiRootIters;
				if (50 == R) break
			}
			H.b2_toiMaxRootIters = e.Max(H.b2_toiMaxRootIters, R);
			if (C < (1 + 100 * Number.MIN_VALUE) * q) break;
			q = C;
			s++;
			++H.b2_toiIters;
			if (1E3 == s) break
		}
		H.b2_toiMaxIters = e.Max(H.b2_toiMaxIters, s);
		return q
	};
	Box2D.postDefs.push(function() {
		Box2D.Collision.b2TimeOfImpact.b2_toiCalls =
			0;
		Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
		Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
		Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
		Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
		Box2D.Collision.b2TimeOfImpact.s_cache = new F;
		Box2D.Collision.b2TimeOfImpact.s_distanceInput = new D;
		Box2D.Collision.b2TimeOfImpact.s_xfA = new n;
		Box2D.Collision.b2TimeOfImpact.s_xfB = new n;
		Box2D.Collision.b2TimeOfImpact.s_fcn = new q;
		Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new t
	});
	Z.b2TOIInput = function() {
		this.proxyA =
			new G;
		this.proxyB = new G;
		this.sweepA = new j;
		this.sweepB = new j
	};
	R.b2WorldManifold = function() {
		this.m_normal = new l
	};
	R.prototype.b2WorldManifold = function() {
		this.m_points = new Vector(f.b2_maxManifoldPoints);
		for (var b = 0; b < f.b2_maxManifoldPoints; b++) this.m_points[b] = new l
	};
	R.prototype.Initialize = function(b, c, d, e, m) {
		void 0 === d && (d = 0);
		void 0 === m && (m = 0);
		if (0 != b.m_pointCount) {
			var f = 0,
				g, j, q = 0,
				s = 0,
				l = 0,
				x = 0,
				C = 0;
			switch (b.m_type) {
				case J.e_circles:
					j = c.R;
					g = b.m_localPoint;
					f = c.position.x + j.col1.x * g.x + j.col2.x * g.y;
					c = c.position.y +
						j.col1.y * g.x + j.col2.y * g.y;
					j = e.R;
					g = b.m_points[0].m_localPoint;
					b = e.position.x + j.col1.x * g.x + j.col2.x * g.y;
					e = e.position.y + j.col1.y * g.x + j.col2.y * g.y;
					g = b - f;
					j = e - c;
					q = g * g + j * j;
					q > Number.MIN_VALUE * Number.MIN_VALUE ? (q = Math.sqrt(q), this.m_normal.x = g / q, this.m_normal.y = j / q) : (this.m_normal.x = 1, this.m_normal.y = 0);
					g = c + d * this.m_normal.y;
					e -= m * this.m_normal.y;
					this.m_points[0].x = 0.5 * (f + d * this.m_normal.x + (b - m * this.m_normal.x));
					this.m_points[0].y = 0.5 * (g + e);
					break;
				case J.e_faceA:
					j = c.R;
					g = b.m_localPlaneNormal;
					q = j.col1.x * g.x + j.col2.x *
						g.y;
					s = j.col1.y * g.x + j.col2.y * g.y;
					j = c.R;
					g = b.m_localPoint;
					l = c.position.x + j.col1.x * g.x + j.col2.x * g.y;
					x = c.position.y + j.col1.y * g.x + j.col2.y * g.y;
					this.m_normal.x = q;
					this.m_normal.y = s;
					for (f = 0; f < b.m_pointCount; f++) j = e.R, g = b.m_points[f].m_localPoint, C = e.position.x + j.col1.x * g.x + j.col2.x * g.y, g = e.position.y + j.col1.y * g.x + j.col2.y * g.y, this.m_points[f].x = C + 0.5 * (d - (C - l) * q - (g - x) * s - m) * q, this.m_points[f].y = g + 0.5 * (d - (C - l) * q - (g - x) * s - m) * s;
					break;
				case J.e_faceB:
					j = e.R;
					g = b.m_localPlaneNormal;
					q = j.col1.x * g.x + j.col2.x * g.y;
					s = j.col1.y *
						g.x + j.col2.y * g.y;
					j = e.R;
					g = b.m_localPoint;
					l = e.position.x + j.col1.x * g.x + j.col2.x * g.y;
					x = e.position.y + j.col1.y * g.x + j.col2.y * g.y;
					this.m_normal.x = -q;
					this.m_normal.y = -s;
					for (f = 0; f < b.m_pointCount; f++) j = c.R, g = b.m_points[f].m_localPoint, C = c.position.x + j.col1.x * g.x + j.col2.x * g.y, g = c.position.y + j.col1.y * g.x + j.col2.y * g.y, this.m_points[f].x = C + 0.5 * (m - (C - l) * q - (g - x) * s - d) * q, this.m_points[f].y = g + 0.5 * (m - (C - l) * q - (g - x) * s - d) * s
			}
		}
	};
	m.ClipVertex = function() {
		this.v = new l;
		this.id = new A
	};
	m.prototype.Set = function(b) {
		this.v.SetV(b.v);
		this.id.Set(b.id)
	};
	s.Features = function() {};
	Object.defineProperty(s.prototype, "referenceEdge", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._referenceEdge
		}
	});
	Object.defineProperty(s.prototype, "referenceEdge", {
		enumerable: !1,
		configurable: !0,
		set: function(b) {
			void 0 === b && (b = 0);
			this._referenceEdge = b;
			this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255
		}
	});
	Object.defineProperty(s.prototype, "incidentEdge", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._incidentEdge
		}
	});
	Object.defineProperty(s.prototype,
		"incidentEdge", {
			enumerable: !1,
			configurable: !0,
			set: function(b) {
				void 0 === b && (b = 0);
				this._incidentEdge = b;
				this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280
			}
		});
	Object.defineProperty(s.prototype, "incidentVertex", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._incidentVertex
		}
	});
	Object.defineProperty(s.prototype, "incidentVertex", {
		enumerable: !1,
		configurable: !0,
		set: function(b) {
			void 0 === b && (b = 0);
			this._incidentVertex = b;
			this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex <<
				16 & 16711680
		}
	});
	Object.defineProperty(s.prototype, "flip", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._flip
		}
	});
	Object.defineProperty(s.prototype, "flip", {
		enumerable: !1,
		configurable: !0,
		set: function(b) {
			void 0 === b && (b = 0);
			this._flip = b;
			this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080
		}
	})
})();
(function() {
	var b = Box2D.Common.b2Settings,
		c = Box2D.Collision.Shapes.b2CircleShape,
		d = Box2D.Collision.Shapes.b2EdgeChainDef,
		f = Box2D.Collision.Shapes.b2EdgeShape,
		e = Box2D.Collision.Shapes.b2MassData,
		j = Box2D.Collision.Shapes.b2PolygonShape,
		n = Box2D.Collision.Shapes.b2Shape,
		l = Box2D.Common.Math.b2Mat22,
		g = Box2D.Common.Math.b2Math,
		r = Box2D.Common.Math.b2Transform,
		z = Box2D.Common.Math.b2Vec2,
		y = Box2D.Collision.b2Distance,
		A = Box2D.Collision.b2DistanceInput,
		B = Box2D.Collision.b2DistanceOutput,
		I = Box2D.Collision.b2DistanceProxy,
		D = Box2D.Collision.b2SimplexCache;
	Box2D.inherit(c, Box2D.Collision.Shapes.b2Shape);
	c.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
	c.b2CircleShape = function() {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
		this.m_p = new z
	};
	c.prototype.Copy = function() {
		var b = new c;
		b.Set(this);
		return b
	};
	c.prototype.Set = function(b) {
		this.__super.Set.call(this, b);
		Box2D.is(b, c) && this.m_p.SetV((b instanceof c ? b : null).m_p)
	};
	c.prototype.TestPoint = function(b, c) {
		var d = b.R,
			e = b.position.x + (d.col1.x * this.m_p.x +
				d.col2.x * this.m_p.y),
			d = b.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y),
			e = c.x - e,
			d = c.y - d;
		return e * e + d * d <= this.m_radius * this.m_radius
	};
	c.prototype.RayCast = function(b, c, d) {
		var e = d.R,
			f = c.p1.x - (d.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y));
		d = c.p1.y - (d.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y));
		var e = c.p2.x - c.p1.x,
			g = c.p2.y - c.p1.y,
			j = f * e + d * g,
			l = e * e + g * g,
			n = j * j - l * (f * f + d * d - this.m_radius * this.m_radius);
		if (0 > n || l < Number.MIN_VALUE) return !1;
		j = -(j + Math.sqrt(n));
		return 0 <= j && j <= c.maxFraction *
			l ? (j /= l, b.fraction = j, b.normal.x = f + j * e, b.normal.y = d + j * g, b.normal.Normalize(), !0) : !1
	};
	c.prototype.ComputeAABB = function(b, c) {
		var d = c.R,
			e = c.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
			d = c.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y);
		b.lowerBound.Set(e - this.m_radius, d - this.m_radius);
		b.upperBound.Set(e + this.m_radius, d + this.m_radius)
	};
	c.prototype.ComputeMass = function(c, d) {
		void 0 === d && (d = 0);
		c.mass = d * b.b2_pi * this.m_radius * this.m_radius;
		c.center.SetV(this.m_p);
		c.I = c.mass * (0.5 * this.m_radius *
			this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
	};
	c.prototype.ComputeSubmergedArea = function(b, c, d, e) {
		void 0 === c && (c = 0);
		d = g.MulX(d, this.m_p);
		var f = -(g.Dot(b, d) - c);
		if (f < -this.m_radius + Number.MIN_VALUE) return 0;
		if (f > this.m_radius) return e.SetV(d), Math.PI * this.m_radius * this.m_radius;
		c = this.m_radius * this.m_radius;
		var j = f * f,
			f = c * (Math.asin(f / this.m_radius) + Math.PI / 2) + f * Math.sqrt(c - j);
		c = -2 / 3 * Math.pow(c - j, 1.5) / f;
		e.x = d.x + b.x * c;
		e.y = d.y + b.y * c;
		return f
	};
	c.prototype.GetLocalPosition = function() {
		return this.m_p
	};
	c.prototype.SetLocalPosition = function(b) {
		this.m_p.SetV(b)
	};
	c.prototype.GetRadius = function() {
		return this.m_radius
	};
	c.prototype.SetRadius = function(b) {
		void 0 === b && (b = 0);
		this.m_radius = b
	};
	c.prototype.b2CircleShape = function(b) {
		void 0 === b && (b = 0);
		this.__super.b2Shape.call(this);
		this.m_type = n.e_circleShape;
		this.m_radius = b
	};
	d.b2EdgeChainDef = function() {};
	d.prototype.b2EdgeChainDef = function() {
		this.vertexCount = 0;
		this.isALoop = !0;
		this.vertices = []
	};
	Box2D.inherit(f, Box2D.Collision.Shapes.b2Shape);
	f.prototype.__super =
		Box2D.Collision.Shapes.b2Shape.prototype;
	f.b2EdgeShape = function() {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
		this.s_supportVec = new z;
		this.m_v1 = new z;
		this.m_v2 = new z;
		this.m_coreV1 = new z;
		this.m_coreV2 = new z;
		this.m_normal = new z;
		this.m_direction = new z;
		this.m_cornerDir1 = new z;
		this.m_cornerDir2 = new z
	};
	f.prototype.TestPoint = function() {
		return !1
	};
	f.prototype.RayCast = function(b, c, d) {
		var e, f = c.p2.x - c.p1.x,
			g = c.p2.y - c.p1.y;
		e = d.R;
		var j = d.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
			l = d.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
			n = d.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) - l;
		d = -(d.position.x + (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) - j);
		e = 100 * Number.MIN_VALUE;
		var r = -(f * n + g * d);
		if (r > e) {
			var j = c.p1.x - j,
				A = c.p1.y - l,
				l = j * n + A * d;
			if (0 <= l && l <= c.maxFraction * r && (c = -f * A + g * j, -e * r <= c && c <= r * (1 + e))) return b.fraction = l / r, c = Math.sqrt(n * n + d * d), b.normal.x = n / c, b.normal.y = d / c, !0
		}
		return !1
	};
	f.prototype.ComputeAABB = function(b, c) {
		var d = c.R,
			e = c.position.x + (d.col1.x * this.m_v1.x +
				d.col2.x * this.m_v1.y),
			f = c.position.y + (d.col1.y * this.m_v1.x + d.col2.y * this.m_v1.y),
			g = c.position.x + (d.col1.x * this.m_v2.x + d.col2.x * this.m_v2.y),
			d = c.position.y + (d.col1.y * this.m_v2.x + d.col2.y * this.m_v2.y);
		e < g ? (b.lowerBound.x = e, b.upperBound.x = g) : (b.lowerBound.x = g, b.upperBound.x = e);
		f < d ? (b.lowerBound.y = f, b.upperBound.y = d) : (b.lowerBound.y = d, b.upperBound.y = f)
	};
	f.prototype.ComputeMass = function(b) {
		b.mass = 0;
		b.center.SetV(this.m_v1);
		b.I = 0
	};
	f.prototype.ComputeSubmergedArea = function(b, c, d, e) {
		void 0 === c && (c = 0);
		var f =
			new z(b.x * c, b.y * c),
			j = g.MulX(d, this.m_v1);
		d = g.MulX(d, this.m_v2);
		var l = g.Dot(b, j) - c;
		b = g.Dot(b, d) - c;
		if (0 < l) {
			if (0 < b) return 0;
			j.x = -b / (l - b) * j.x + l / (l - b) * d.x;
			j.y = -b / (l - b) * j.y + l / (l - b) * d.y
		} else 0 < b && (d.x = -b / (l - b) * j.x + l / (l - b) * d.x, d.y = -b / (l - b) * j.y + l / (l - b) * d.y);
		e.x = (f.x + j.x + d.x) / 3;
		e.y = (f.y + j.y + d.y) / 3;
		return 0.5 * ((j.x - f.x) * (d.y - f.y) - (j.y - f.y) * (d.x - f.x))
	};
	f.prototype.GetLength = function() {
		return this.m_length
	};
	f.prototype.GetVertex1 = function() {
		return this.m_v1
	};
	f.prototype.GetVertex2 = function() {
		return this.m_v2
	};
	f.prototype.GetCoreVertex1 = function() {
		return this.m_coreV1
	};
	f.prototype.GetCoreVertex2 = function() {
		return this.m_coreV2
	};
	f.prototype.GetNormalVector = function() {
		return this.m_normal
	};
	f.prototype.GetDirectionVector = function() {
		return this.m_direction
	};
	f.prototype.GetCorner1Vector = function() {
		return this.m_cornerDir1
	};
	f.prototype.GetCorner2Vector = function() {
		return this.m_cornerDir2
	};
	f.prototype.Corner1IsConvex = function() {
		return this.m_cornerConvex1
	};
	f.prototype.Corner2IsConvex = function() {
		return this.m_cornerConvex2
	};
	f.prototype.GetFirstVertex = function(b) {
		var c = b.R;
		return new z(b.position.x + (c.col1.x * this.m_coreV1.x + c.col2.x * this.m_coreV1.y), b.position.y + (c.col1.y * this.m_coreV1.x + c.col2.y * this.m_coreV1.y))
	};
	f.prototype.GetNextEdge = function() {
		return this.m_nextEdge
	};
	f.prototype.GetPrevEdge = function() {
		return this.m_prevEdge
	};
	f.prototype.Support = function(b, c, d) {
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var e = b.R,
			f = b.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
			g = b.position.y + (e.col1.y * this.m_coreV1.x +
				e.col2.y * this.m_coreV1.y),
			j = b.position.x + (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y);
		b = b.position.y + (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
		f * c + g * d > j * c + b * d ? (this.s_supportVec.x = f, this.s_supportVec.y = g) : (this.s_supportVec.x = j, this.s_supportVec.y = b);
		return this.s_supportVec
	};
	f.prototype.b2EdgeShape = function(c, d) {
		this.__super.b2Shape.call(this);
		this.m_type = n.e_edgeShape;
		this.m_nextEdge = this.m_prevEdge = null;
		this.m_v1 = c;
		this.m_v2 = d;
		this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y -
			this.m_v1.y);
		this.m_length = this.m_direction.Normalize();
		this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
		this.m_coreV1.Set(-b.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -b.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
		this.m_coreV2.Set(-b.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -b.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
		this.m_cornerDir1 = this.m_normal;
		this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y)
	};
	f.prototype.SetPrevEdge =
		function(b, c, d, e) {
			this.m_prevEdge = b;
			this.m_coreV1 = c;
			this.m_cornerDir1 = d;
			this.m_cornerConvex1 = e
		};
	f.prototype.SetNextEdge = function(b, c, d, e) {
		this.m_nextEdge = b;
		this.m_coreV2 = c;
		this.m_cornerDir2 = d;
		this.m_cornerConvex2 = e
	};
	e.b2MassData = function() {
		this.mass = 0;
		this.center = new z(0, 0);
		this.I = 0
	};
	Box2D.inherit(j, Box2D.Collision.Shapes.b2Shape);
	j.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
	j.b2PolygonShape = function() {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments)
	};
	j.prototype.Copy =
		function() {
			var b = new j;
			b.Set(this);
			return b
		};
	j.prototype.Set = function(b) {
		this.__super.Set.call(this, b);
		if (Box2D.is(b, j)) {
			b = b instanceof j ? b : null;
			this.m_centroid.SetV(b.m_centroid);
			this.m_vertexCount = b.m_vertexCount;
			this.Reserve(this.m_vertexCount);
			for (var c = 0; c < this.m_vertexCount; c++) this.m_vertices[c].SetV(b.m_vertices[c]), this.m_normals[c].SetV(b.m_normals[c])
		}
	};
	j.prototype.SetAsArray = function(b, c) {
		void 0 === c && (c = 0);
		for (var d = new Vector, e = 0, f, e = 0; e < b.length; ++e) f = b[e], d.push(f);
		this.SetAsVector(d,
			c)
	};
	j.AsArray = function(b, c) {
		void 0 === c && (c = 0);
		var d = new j;
		d.SetAsArray(b, c);
		return d
	};
	j.prototype.SetAsVector = function(c, d) {
		void 0 === d && (d = 0);
		0 == d && (d = c.length);
		b.b2Assert(2 <= d);
		this.m_vertexCount = d;
		this.Reserve(d);
		for (var e = 0, e = 0; e < this.m_vertexCount; e++) this.m_vertices[e].SetV(c[e]);
		for (e = 0; e < this.m_vertexCount; ++e) {
			var f = parseInt(e),
				l = parseInt(e + 1 < this.m_vertexCount ? e + 1 : 0),
				f = g.SubtractVV(this.m_vertices[l], this.m_vertices[f]);
			b.b2Assert(f.LengthSquared() > Number.MIN_VALUE);
			this.m_normals[e].SetV(g.CrossVF(f,
				1));
			this.m_normals[e].Normalize()
		}
		this.m_centroid = j.ComputeCentroid(this.m_vertices, this.m_vertexCount)
	};
	j.AsVector = function(b, c) {
		void 0 === c && (c = 0);
		var d = new j;
		d.SetAsVector(b, c);
		return d
	};
	j.prototype.SetAsBox = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.m_vertexCount = 4;
		this.Reserve(4);
		this.m_vertices[0].Set(-b, -c);
		this.m_vertices[1].Set(b, -c);
		this.m_vertices[2].Set(b, c);
		this.m_vertices[3].Set(-b, c);
		this.m_normals[0].Set(0, -1);
		this.m_normals[1].Set(1, 0);
		this.m_normals[2].Set(0, 1);
		this.m_normals[3].Set(-1,
			0);
		this.m_centroid.SetZero()
	};
	j.AsBox = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		var d = new j;
		d.SetAsBox(b, c);
		return d
	};
	j.prototype.SetAsOrientedBox = function(b, c, d, e) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = null);
		void 0 === e && (e = 0);
		this.m_vertexCount = 4;
		this.Reserve(4);
		this.m_vertices[0].Set(-b, -c);
		this.m_vertices[1].Set(b, -c);
		this.m_vertices[2].Set(b, c);
		this.m_vertices[3].Set(-b, c);
		this.m_normals[0].Set(0, -1);
		this.m_normals[1].Set(1, 0);
		this.m_normals[2].Set(0, 1);
		this.m_normals[3].Set(-1,
			0);
		this.m_centroid = d;
		b = new r;
		b.position = d;
		b.R.Set(e);
		for (d = 0; d < this.m_vertexCount; ++d) this.m_vertices[d] = g.MulX(b, this.m_vertices[d]), this.m_normals[d] = g.MulMV(b.R, this.m_normals[d])
	};
	j.AsOrientedBox = function(b, c, d, e) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = null);
		void 0 === e && (e = 0);
		var f = new j;
		f.SetAsOrientedBox(b, c, d, e);
		return f
	};
	j.prototype.SetAsEdge = function(b, c) {
		this.m_vertexCount = 2;
		this.Reserve(2);
		this.m_vertices[0].SetV(b);
		this.m_vertices[1].SetV(c);
		this.m_centroid.x = 0.5 * (b.x + c.x);
		this.m_centroid.y = 0.5 * (b.y + c.y);
		this.m_normals[0] = g.CrossVF(g.SubtractVV(c, b), 1);
		this.m_normals[0].Normalize();
		this.m_normals[1].x = -this.m_normals[0].x;
		this.m_normals[1].y = -this.m_normals[0].y
	};
	j.AsEdge = function(b, c) {
		var d = new j;
		d.SetAsEdge(b, c);
		return d
	};
	j.prototype.TestPoint = function(b, c) {
		var d;
		d = b.R;
		for (var e = c.x - b.position.x, f = c.y - b.position.y, g = e * d.col1.x + f * d.col1.y, j = e * d.col2.x + f * d.col2.y, l = 0; l < this.m_vertexCount; ++l)
			if (d = this.m_vertices[l], e = g - d.x, f = j - d.y, d = this.m_normals[l], 0 < d.x * e + d.y * f) return !1;
		return !0
	};
	j.prototype.RayCast = function(b, c, d) {
		var e = 0,
			f = c.maxFraction,
			g = 0,
			j = 0,
			l, n, g = c.p1.x - d.position.x,
			j = c.p1.y - d.position.y;
		l = d.R;
		var r = g * l.col1.x + j * l.col1.y,
			A = g * l.col2.x + j * l.col2.y,
			g = c.p2.x - d.position.x,
			j = c.p2.y - d.position.y;
		l = d.R;
		c = g * l.col1.x + j * l.col1.y - r;
		l = g * l.col2.x + j * l.col2.y - A;
		for (var y = -1, q = 0; q < this.m_vertexCount; ++q) {
			n = this.m_vertices[q];
			g = n.x - r;
			j = n.y - A;
			n = this.m_normals[q];
			g = n.x * g + n.y * j;
			j = n.x * c + n.y * l;
			if (0 == j) {
				if (0 > g) return !1
			} else 0 > j && g < e * j ? (e = g / j, y = q) : 0 < j && g < f * j && (f = g / j);
			if (f < e - Number.MIN_VALUE) return !1
		}
		return 0 <=
			y ? (b.fraction = e, l = d.R, n = this.m_normals[y], b.normal.x = l.col1.x * n.x + l.col2.x * n.y, b.normal.y = l.col1.y * n.x + l.col2.y * n.y, !0) : !1
	};
	j.prototype.ComputeAABB = function(b, c) {
		for (var d = c.R, e = this.m_vertices[0], f = c.position.x + (d.col1.x * e.x + d.col2.x * e.y), g = c.position.y + (d.col1.y * e.x + d.col2.y * e.y), j = f, l = g, n = 1; n < this.m_vertexCount; ++n) var e = this.m_vertices[n],
			r = c.position.x + (d.col1.x * e.x + d.col2.x * e.y),
			e = c.position.y + (d.col1.y * e.x + d.col2.y * e.y),
			f = f < r ? f : r,
			g = g < e ? g : e,
			j = j > r ? j : r,
			l = l > e ? l : e;
		b.lowerBound.x = f - this.m_radius;
		b.lowerBound.y = g - this.m_radius;
		b.upperBound.x = j + this.m_radius;
		b.upperBound.y = l + this.m_radius
	};
	j.prototype.ComputeMass = function(b, c) {
		void 0 === c && (c = 0);
		if (2 == this.m_vertexCount) b.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x), b.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y), b.mass = 0, b.I = 0;
		else {
			for (var d = 0, e = 0, f = 0, g = 0, j = 1 / 3, l = 0; l < this.m_vertexCount; ++l) var n = this.m_vertices[l],
				r = l + 1 < this.m_vertexCount ? this.m_vertices[parseInt(l + 1)] : this.m_vertices[0],
				A = n.x - 0,
				y = n.y - 0,
				q = r.x - 0,
				x = r.y -
				0,
				F = A * x - y * q,
				C = 0.5 * F,
				f = f + C,
				d = d + C * j * (0 + n.x + r.x),
				e = e + C * j * (0 + n.y + r.y),
				n = A,
				g = g + F * (j * (0.25 * (n * n + q * n + q * q) + (0 * n + 0 * q)) + 0 + (j * (0.25 * (y * y + x * y + x * x) + (0 * y + 0 * x)) + 0));
			b.mass = c * f;
			b.center.Set(d * (1 / f), e * (1 / f));
			b.I = c * g
		}
	};
	j.prototype.ComputeSubmergedArea = function(b, c, d, f) {
		void 0 === c && (c = 0);
		var j = g.MulTMV(d.R, b),
			l = c - g.Dot(b, d.position),
			n = new Vector_a2j_Number,
			r = 0,
			A = -1;
		c = -1;
		var y = !1;
		for (b = b = 0; b < this.m_vertexCount; ++b) {
			n[b] = g.Dot(j, this.m_vertices[b]) - l;
			var B = n[b] < -Number.MIN_VALUE;
			0 < b && (B ? y || (A = b - 1, r++) : y && (c = b - 1, r++));
			y = B
		}
		switch (r) {
			case 0:
				return y ? (b = new e, this.ComputeMass(b, 1), f.SetV(g.MulX(d, b.center)), b.mass) : 0;
			case 1:
				-1 == A ? A = this.m_vertexCount - 1 : c = this.m_vertexCount - 1
		}
		b = parseInt((A + 1) % this.m_vertexCount);
		j = parseInt((c + 1) % this.m_vertexCount);
		l = (0 - n[A]) / (n[b] - n[A]);
		n = (0 - n[c]) / (n[j] - n[c]);
		A = new z(this.m_vertices[A].x * (1 - l) + this.m_vertices[b].x * l, this.m_vertices[A].y * (1 - l) + this.m_vertices[b].y * l);
		c = new z(this.m_vertices[c].x * (1 - n) + this.m_vertices[j].x * n, this.m_vertices[c].y * (1 - n) + this.m_vertices[j].y * n);
		n = 0;
		l =
			new z;
		for (r = this.m_vertices[b]; b != j;) b = (b + 1) % this.m_vertexCount, y = b == j ? c : this.m_vertices[b], B = 0.5 * ((r.x - A.x) * (y.y - A.y) - (r.y - A.y) * (y.x - A.x)), n += B, l.x += B * (A.x + r.x + y.x) / 3, l.y += B * (A.y + r.y + y.y) / 3, r = y;
		l.Multiply(1 / n);
		f.SetV(g.MulX(d, l));
		return n
	};
	j.prototype.GetVertexCount = function() {
		return this.m_vertexCount
	};
	j.prototype.GetVertices = function() {
		return this.m_vertices
	};
	j.prototype.GetNormals = function() {
		return this.m_normals
	};
	j.prototype.GetSupport = function(b) {
		for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y *
				b.y, e = 1; e < this.m_vertexCount; ++e) {
			var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
			f > d && (c = e, d = f)
		}
		return c
	};
	j.prototype.GetSupportVertex = function(b) {
		for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_vertexCount; ++e) {
			var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
			f > d && (c = e, d = f)
		}
		return this.m_vertices[c]
	};
	j.prototype.Validate = function() {
		return !1
	};
	j.prototype.b2PolygonShape = function() {
		this.__super.b2Shape.call(this);
		this.m_type = n.e_polygonShape;
		this.m_centroid =
			new z;
		this.m_vertices = new Vector;
		this.m_normals = new Vector
	};
	j.prototype.Reserve = function(b) {
		void 0 === b && (b = 0);
		for (var c = parseInt(this.m_vertices.length); c < b; c++) this.m_vertices[c] = new z, this.m_normals[c] = new z
	};
	j.ComputeCentroid = function(b, c) {
		void 0 === c && (c = 0);
		for (var d = new z, e = 0, f = 1 / 3, g = 0; g < c; ++g) {
			var j = b[g],
				l = g + 1 < c ? b[parseInt(g + 1)] : b[0],
				n = 0.5 * ((j.x - 0) * (l.y - 0) - (j.y - 0) * (l.x - 0)),
				e = e + n;
			d.x += n * f * (0 + j.x + l.x);
			d.y += n * f * (0 + j.y + l.y)
		}
		d.x *= 1 / e;
		d.y *= 1 / e;
		return d
	};
	j.ComputeOBB = function(b, c, d) {
		void 0 === d && (d =
			0);
		for (var e = 0, f = new Vector(d + 1), e = 0; e < d; ++e) f[e] = c[e];
		f[d] = f[0];
		c = Number.MAX_VALUE;
		for (e = 1; e <= d; ++e) {
			for (var g = f[parseInt(e - 1)], j = f[e].x - g.x, l = f[e].y - g.y, n = Math.sqrt(j * j + l * l), j = j / n, l = l / n, r = -l, A = j, y = n = Number.MAX_VALUE, q = -Number.MAX_VALUE, x = -Number.MAX_VALUE, F = 0; F < d; ++F) {
				var C = f[F].x - g.x,
					H = f[F].y - g.y,
					Z = j * C + l * H,
					C = r * C + A * H;
				Z < n && (n = Z);
				C < y && (y = C);
				Z > q && (q = Z);
				C > x && (x = C)
			}
			F = (q - n) * (x - y);
			F < 0.95 * c && (c = F, b.R.col1.x = j, b.R.col1.y = l, b.R.col2.x = r, b.R.col2.y = A, j = 0.5 * (n + q), l = 0.5 * (y + x), r = b.R, b.center.x = g.x + (r.col1.x *
				j + r.col2.x * l), b.center.y = g.y + (r.col1.y * j + r.col2.y * l), b.extents.x = 0.5 * (q - n), b.extents.y = 0.5 * (x - y))
		}
	};
	Box2D.postDefs.push(function() {
		Box2D.Collision.Shapes.b2PolygonShape.s_mat = new l
	});
	n.b2Shape = function() {};
	n.prototype.Copy = function() {
		return null
	};
	n.prototype.Set = function(b) {
		this.m_radius = b.m_radius
	};
	n.prototype.GetType = function() {
		return this.m_type
	};
	n.prototype.TestPoint = function() {
		return !1
	};
	n.prototype.RayCast = function() {
		return !1
	};
	n.prototype.ComputeAABB = function() {};
	n.prototype.ComputeMass = function() {};
	n.prototype.ComputeSubmergedArea = function() {
		return 0
	};
	n.TestOverlap = function(b, c, d, e) {
		var f = new A;
		f.proxyA = new I;
		f.proxyA.Set(b);
		f.proxyB = new I;
		f.proxyB.Set(d);
		f.transformA = c;
		f.transformB = e;
		f.useRadii = !0;
		b = new D;
		b.count = 0;
		c = new B;
		y.Distance(c, b, f);
		return c.distance < 10 * Number.MIN_VALUE
	};
	n.prototype.b2Shape = function() {
		this.m_type = n.e_unknownShape;
		this.m_radius = b.b2_linearSlop
	};
	Box2D.postDefs.push(function() {
		Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
		Box2D.Collision.Shapes.b2Shape.e_circleShape =
			0;
		Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
		Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
		Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
		Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
		Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
		Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1
	})
})();
(function() {
	var b = Box2D.Common.b2Color,
		c = Box2D.Common.b2Settings,
		d = Box2D.Common.Math.b2Math;
	b.b2Color = function() {
		this._b = this._g = this._r = 0
	};
	b.prototype.b2Color = function(b, c, j) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === j && (j = 0);
		this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
		this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
		this._b = Box2D.parseUInt(255 * d.Clamp(j, 0, 1))
	};
	b.prototype.Set = function(b, c, j) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === j && (j = 0);
		this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
		this._g =
			Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
		this._b = Box2D.parseUInt(255 * d.Clamp(j, 0, 1))
	};
	Object.defineProperty(b.prototype, "r", {
		enumerable: !1,
		configurable: !0,
		set: function(b) {
			void 0 === b && (b = 0);
			this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1))
		}
	});
	Object.defineProperty(b.prototype, "g", {
		enumerable: !1,
		configurable: !0,
		set: function(b) {
			void 0 === b && (b = 0);
			this._g = Box2D.parseUInt(255 * d.Clamp(b, 0, 1))
		}
	});
	Object.defineProperty(b.prototype, "b", {
		enumerable: !1,
		configurable: !0,
		set: function(b) {
			void 0 === b && (b = 0);
			this._b = Box2D.parseUInt(255 *
				d.Clamp(b, 0, 1))
		}
	});
	Object.defineProperty(b.prototype, "color", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this._r << 16 | this._g << 8 | this._b
		}
	});
	c.b2Settings = function() {};
	c.b2MixFriction = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return Math.sqrt(b * c)
	};
	c.b2MixRestitution = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return b > c ? b : c
	};
	c.b2Assert = function(b) {
		if (!b) throw "Assertion Failed";
	};
	Box2D.postDefs.push(function() {
		Box2D.Common.b2Settings.VERSION = "2.1alpha";
		Box2D.Common.b2Settings.USHRT_MAX =
			65535;
		Box2D.Common.b2Settings.b2_pi = Math.PI;
		Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
		Box2D.Common.b2Settings.b2_aabbExtension = 0.1;
		Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
		Box2D.Common.b2Settings.b2_polygonRadius = 2 * c.b2_linearSlop;
		Box2D.Common.b2Settings.b2_linearSlop = 0.005;
		Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * c.b2_pi;
		Box2D.Common.b2Settings.b2_toiSlop = 8 * c.b2_linearSlop;
		Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
		Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
		Box2D.Common.b2Settings.b2_velocityThreshold =
			1;
		Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2;
		Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * c.b2_pi;
		Box2D.Common.b2Settings.b2_maxTranslation = 2;
		Box2D.Common.b2Settings.b2_maxTranslationSquared = c.b2_maxTranslation * c.b2_maxTranslation;
		Box2D.Common.b2Settings.b2_maxRotation = 0.5 * c.b2_pi;
		Box2D.Common.b2Settings.b2_maxRotationSquared = c.b2_maxRotation * c.b2_maxRotation;
		Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2;
		Box2D.Common.b2Settings.b2_timeToSleep = 0.5;
		Box2D.Common.b2Settings.b2_linearSleepTolerance =
			0.01;
		Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * c.b2_pi
	})
})();
(function() {
	var b = Box2D.Common.Math.b2Mat22,
		c = Box2D.Common.Math.b2Mat33,
		d = Box2D.Common.Math.b2Math,
		f = Box2D.Common.Math.b2Sweep,
		e = Box2D.Common.Math.b2Transform,
		j = Box2D.Common.Math.b2Vec2,
		n = Box2D.Common.Math.b2Vec3;
	b.b2Mat22 = function() {
		this.col1 = new j;
		this.col2 = new j
	};
	b.prototype.b2Mat22 = function() {
		this.SetIdentity()
	};
	b.FromAngle = function(c) {
		void 0 === c && (c = 0);
		var d = new b;
		d.Set(c);
		return d
	};
	b.FromVV = function(c, d) {
		var e = new b;
		e.SetVV(c, d);
		return e
	};
	b.prototype.Set = function(b) {
		void 0 === b && (b = 0);
		var c =
			Math.cos(b);
		b = Math.sin(b);
		this.col1.x = c;
		this.col2.x = -b;
		this.col1.y = b;
		this.col2.y = c
	};
	b.prototype.SetVV = function(b, c) {
		this.col1.SetV(b);
		this.col2.SetV(c)
	};
	b.prototype.Copy = function() {
		var c = new b;
		c.SetM(this);
		return c
	};
	b.prototype.SetM = function(b) {
		this.col1.SetV(b.col1);
		this.col2.SetV(b.col2)
	};
	b.prototype.AddM = function(b) {
		this.col1.x += b.col1.x;
		this.col1.y += b.col1.y;
		this.col2.x += b.col2.x;
		this.col2.y += b.col2.y
	};
	b.prototype.SetIdentity = function() {
		this.col1.x = 1;
		this.col2.x = 0;
		this.col1.y = 0;
		this.col2.y = 1
	};
	b.prototype.SetZero = function() {
		this.col1.x = 0;
		this.col2.x = 0;
		this.col1.y = 0;
		this.col2.y = 0
	};
	b.prototype.GetAngle = function() {
		return Math.atan2(this.col1.y, this.col1.x)
	};
	b.prototype.GetInverse = function(b) {
		var c = this.col1.x,
			d = this.col2.x,
			e = this.col1.y,
			f = this.col2.y,
			j = c * f - d * e;
		0 != j && (j = 1 / j);
		b.col1.x = j * f;
		b.col2.x = -j * d;
		b.col1.y = -j * e;
		b.col2.y = j * c;
		return b
	};
	b.prototype.Solve = function(b, c, d) {
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var e = this.col1.x,
			f = this.col2.x,
			j = this.col1.y,
			n = this.col2.y,
			I = e * n - f * j;
		0 != I && (I = 1 / I);
		b.x = I * (n * c - f * d);
		b.y = I * (e * d - j * c);
		return b
	};
	b.prototype.Abs = function() {
		this.col1.Abs();
		this.col2.Abs()
	};
	c.b2Mat33 = function() {
		this.col1 = new n;
		this.col2 = new n;
		this.col3 = new n
	};
	c.prototype.b2Mat33 = function(b, c, d) {
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		void 0 === d && (d = null);
		!b && !c && !d ? (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero()) : (this.col1.SetV(b), this.col2.SetV(c), this.col3.SetV(d))
	};
	c.prototype.SetVVV = function(b, c, d) {
		this.col1.SetV(b);
		this.col2.SetV(c);
		this.col3.SetV(d)
	};
	c.prototype.Copy =
		function() {
			return new c(this.col1, this.col2, this.col3)
		};
	c.prototype.SetM = function(b) {
		this.col1.SetV(b.col1);
		this.col2.SetV(b.col2);
		this.col3.SetV(b.col3)
	};
	c.prototype.AddM = function(b) {
		this.col1.x += b.col1.x;
		this.col1.y += b.col1.y;
		this.col1.z += b.col1.z;
		this.col2.x += b.col2.x;
		this.col2.y += b.col2.y;
		this.col2.z += b.col2.z;
		this.col3.x += b.col3.x;
		this.col3.y += b.col3.y;
		this.col3.z += b.col3.z
	};
	c.prototype.SetIdentity = function() {
		this.col1.x = 1;
		this.col2.x = 0;
		this.col3.x = 0;
		this.col1.y = 0;
		this.col2.y = 1;
		this.col3.y = 0;
		this.col1.z = 0;
		this.col2.z = 0;
		this.col3.z = 1
	};
	c.prototype.SetZero = function() {
		this.col1.x = 0;
		this.col2.x = 0;
		this.col3.x = 0;
		this.col1.y = 0;
		this.col2.y = 0;
		this.col3.y = 0;
		this.col1.z = 0;
		this.col2.z = 0;
		this.col3.z = 0
	};
	c.prototype.Solve22 = function(b, c, d) {
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var e = this.col1.x,
			f = this.col2.x,
			j = this.col1.y,
			n = this.col2.y,
			I = e * n - f * j;
		0 != I && (I = 1 / I);
		b.x = I * (n * c - f * d);
		b.y = I * (e * d - j * c);
		return b
	};
	c.prototype.Solve33 = function(b, c, d, e) {
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		void 0 === e && (e = 0);
		var f = this.col1.x,
			j = this.col1.y,
			n = this.col1.z,
			I = this.col2.x,
			D = this.col2.y,
			t = this.col2.z,
			G = this.col3.x,
			E = this.col3.y,
			L = this.col3.z,
			M = f * (D * L - t * E) + j * (t * G - I * L) + n * (I * E - D * G);
		0 != M && (M = 1 / M);
		b.x = M * (c * (D * L - t * E) + d * (t * G - I * L) + e * (I * E - D * G));
		b.y = M * (f * (d * L - e * E) + j * (e * G - c * L) + n * (c * E - d * G));
		b.z = M * (f * (D * e - t * d) + j * (t * c - I * e) + n * (I * d - D * c));
		return b
	};
	d.b2Math = function() {};
	d.IsValid = function(b) {
		void 0 === b && (b = 0);
		return isFinite(b)
	};
	d.Dot = function(b, c) {
		return b.x * c.x + b.y * c.y
	};
	d.CrossVV = function(b, c) {
		return b.x * c.y - b.y * c.x
	};
	d.CrossVF = function(b,
		c) {
		void 0 === c && (c = 0);
		return new j(c * b.y, -c * b.x)
	};
	d.CrossFV = function(b, c) {
		void 0 === b && (b = 0);
		return new j(-b * c.y, b * c.x)
	};
	d.MulMV = function(b, c) {
		return new j(b.col1.x * c.x + b.col2.x * c.y, b.col1.y * c.x + b.col2.y * c.y)
	};
	d.MulTMV = function(b, c) {
		return new j(d.Dot(c, b.col1), d.Dot(c, b.col2))
	};
	d.MulX = function(b, c) {
		var e = d.MulMV(b.R, c);
		e.x += b.position.x;
		e.y += b.position.y;
		return e
	};
	d.MulXT = function(b, c) {
		var e = d.SubtractVV(c, b.position),
			f = e.x * b.R.col1.x + e.y * b.R.col1.y;
		e.y = e.x * b.R.col2.x + e.y * b.R.col2.y;
		e.x = f;
		return e
	};
	d.AddVV = function(b, c) {
		return new j(b.x + c.x, b.y + c.y)
	};
	d.SubtractVV = function(b, c) {
		return new j(b.x - c.x, b.y - c.y)
	};
	d.Distance = function(b, c) {
		var d = b.x - c.x,
			e = b.y - c.y;
		return Math.sqrt(d * d + e * e)
	};
	d.DistanceSquared = function(b, c) {
		var d = b.x - c.x,
			e = b.y - c.y;
		return d * d + e * e
	};
	d.MulFV = function(b, c) {
		void 0 === b && (b = 0);
		return new j(b * c.x, b * c.y)
	};
	d.AddMM = function(c, e) {
		return b.FromVV(d.AddVV(c.col1, e.col1), d.AddVV(c.col2, e.col2))
	};
	d.MulMM = function(c, e) {
		return b.FromVV(d.MulMV(c, e.col1), d.MulMV(c, e.col2))
	};
	d.MulTMM = function(c,
		e) {
		var f = new j(d.Dot(c.col1, e.col1), d.Dot(c.col2, e.col1)),
			n = new j(d.Dot(c.col1, e.col2), d.Dot(c.col2, e.col2));
		return b.FromVV(f, n)
	};
	d.Abs = function(b) {
		void 0 === b && (b = 0);
		return 0 < b ? b : -b
	};
	d.AbsV = function(b) {
		return new j(d.Abs(b.x), d.Abs(b.y))
	};
	d.AbsM = function(c) {
		return b.FromVV(d.AbsV(c.col1), d.AbsV(c.col2))
	};
	d.Min = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return b < c ? b : c
	};
	d.MinV = function(b, c) {
		return new j(d.Min(b.x, c.x), d.Min(b.y, c.y))
	};
	d.Max = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return b > c ? b : c
	};
	d.MaxV = function(b, c) {
		return new j(d.Max(b.x, c.x), d.Max(b.y, c.y))
	};
	d.Clamp = function(b, c, d) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		return b < c ? c : b > d ? d : b
	};
	d.ClampV = function(b, c, e) {
		return d.MaxV(c, d.MinV(b, e))
	};
	d.Swap = function(b, c) {
		var d = b[0];
		b[0] = c[0];
		c[0] = d
	};
	d.Random = function() {
		return 2 * Math.random() - 1
	};
	d.RandomRange = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		var d = Math.random();
		return (c - b) * d + b
	};
	d.NextPowerOfTwo = function(b) {
		void 0 === b && (b = 0);
		b |= b >> 1 & 2147483647;
		b |=
			b >> 2 & 1073741823;
		b |= b >> 4 & 268435455;
		b |= b >> 8 & 16777215;
		return (b | b >> 16 & 65535) + 1
	};
	d.IsPowerOfTwo = function(b) {
		void 0 === b && (b = 0);
		return 0 < b && 0 == (b & b - 1)
	};
	Box2D.postDefs.push(function() {
		Box2D.Common.Math.b2Math.b2Vec2_zero = new j(0, 0);
		Box2D.Common.Math.b2Math.b2Mat22_identity = b.FromVV(new j(1, 0), new j(0, 1));
		Box2D.Common.Math.b2Math.b2Transform_identity = new e(d.b2Vec2_zero, d.b2Mat22_identity)
	});
	f.b2Sweep = function() {
		this.localCenter = new j;
		this.c0 = new j;
		this.c = new j
	};
	f.prototype.Set = function(b) {
		this.localCenter.SetV(b.localCenter);
		this.c0.SetV(b.c0);
		this.c.SetV(b.c);
		this.a0 = b.a0;
		this.a = b.a;
		this.t0 = b.t0
	};
	f.prototype.Copy = function() {
		var b = new f;
		b.localCenter.SetV(this.localCenter);
		b.c0.SetV(this.c0);
		b.c.SetV(this.c);
		b.a0 = this.a0;
		b.a = this.a;
		b.t0 = this.t0;
		return b
	};
	f.prototype.GetTransform = function(b, c) {
		void 0 === c && (c = 0);
		b.position.x = (1 - c) * this.c0.x + c * this.c.x;
		b.position.y = (1 - c) * this.c0.y + c * this.c.y;
		b.R.Set((1 - c) * this.a0 + c * this.a);
		var d = b.R;
		b.position.x -= d.col1.x * this.localCenter.x + d.col2.x * this.localCenter.y;
		b.position.y -= d.col1.y *
			this.localCenter.x + d.col2.y * this.localCenter.y
	};
	f.prototype.Advance = function(b) {
		void 0 === b && (b = 0);
		if (this.t0 < b && 1 - this.t0 > Number.MIN_VALUE) {
			var c = (b - this.t0) / (1 - this.t0);
			this.c0.x = (1 - c) * this.c0.x + c * this.c.x;
			this.c0.y = (1 - c) * this.c0.y + c * this.c.y;
			this.a0 = (1 - c) * this.a0 + c * this.a;
			this.t0 = b
		}
	};
	e.b2Transform = function() {
		this.position = new j;
		this.R = new b
	};
	e.prototype.b2Transform = function(b, c) {
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		b && (this.position.SetV(b), this.R.SetM(c))
	};
	e.prototype.Initialize = function(b,
		c) {
		this.position.SetV(b);
		this.R.SetM(c)
	};
	e.prototype.SetIdentity = function() {
		this.position.SetZero();
		this.R.SetIdentity()
	};
	e.prototype.Set = function(b) {
		this.position.SetV(b.position);
		this.R.SetM(b.R)
	};
	e.prototype.GetAngle = function() {
		return Math.atan2(this.R.col1.y, this.R.col1.x)
	};
	j.b2Vec2 = function() {};
	j.prototype.b2Vec2 = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.x = b;
		this.y = c
	};
	j.prototype.SetZero = function() {
		this.y = this.x = 0
	};
	j.prototype.Set = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.x = b;
		this.y = c
	};
	j.prototype.SetV = function(b) {
		this.x = b.x;
		this.y = b.y
	};
	j.prototype.GetNegative = function() {
		return new j(-this.x, -this.y)
	};
	j.prototype.NegativeSelf = function() {
		this.x = -this.x;
		this.y = -this.y
	};
	j.Make = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return new j(b, c)
	};
	j.prototype.Copy = function() {
		return new j(this.x, this.y)
	};
	j.prototype.Add = function(b) {
		this.x += b.x;
		this.y += b.y
	};
	j.prototype.Subtract = function(b) {
		this.x -= b.x;
		this.y -= b.y
	};
	j.prototype.Multiply = function(b) {
		void 0 === b && (b = 0);
		this.x *=
			b;
		this.y *= b
	};
	j.prototype.MulM = function(b) {
		var c = this.x;
		this.x = b.col1.x * c + b.col2.x * this.y;
		this.y = b.col1.y * c + b.col2.y * this.y
	};
	j.prototype.MulTM = function(b) {
		var c = d.Dot(this, b.col1);
		this.y = d.Dot(this, b.col2);
		this.x = c
	};
	j.prototype.CrossVF = function(b) {
		void 0 === b && (b = 0);
		var c = this.x;
		this.x = b * this.y;
		this.y = -b * c
	};
	j.prototype.CrossFV = function(b) {
		void 0 === b && (b = 0);
		var c = this.x;
		this.x = -b * this.y;
		this.y = b * c
	};
	j.prototype.MinV = function(b) {
		this.x = this.x < b.x ? this.x : b.x;
		this.y = this.y < b.y ? this.y : b.y
	};
	j.prototype.MaxV =
		function(b) {
			this.x = this.x > b.x ? this.x : b.x;
			this.y = this.y > b.y ? this.y : b.y
		};
	j.prototype.Abs = function() {
		0 > this.x && (this.x = -this.x);
		0 > this.y && (this.y = -this.y)
	};
	j.prototype.Length = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	};
	j.prototype.LengthSquared = function() {
		return this.x * this.x + this.y * this.y
	};
	j.prototype.Normalize = function() {
		var b = Math.sqrt(this.x * this.x + this.y * this.y);
		if (b < Number.MIN_VALUE) return 0;
		var c = 1 / b;
		this.x *= c;
		this.y *= c;
		return b
	};
	j.prototype.IsValid = function() {
		return d.IsValid(this.x) &&
			d.IsValid(this.y)
	};
	n.b2Vec3 = function() {};
	n.prototype.b2Vec3 = function(b, c, d) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		this.x = b;
		this.y = c;
		this.z = d
	};
	n.prototype.SetZero = function() {
		this.x = this.y = this.z = 0
	};
	n.prototype.Set = function(b, c, d) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		this.x = b;
		this.y = c;
		this.z = d
	};
	n.prototype.SetV = function(b) {
		this.x = b.x;
		this.y = b.y;
		this.z = b.z
	};
	n.prototype.GetNegative = function() {
		return new n(-this.x, -this.y, -this.z)
	};
	n.prototype.NegativeSelf = function() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z
	};
	n.prototype.Copy = function() {
		return new n(this.x, this.y, this.z)
	};
	n.prototype.Add = function(b) {
		this.x += b.x;
		this.y += b.y;
		this.z += b.z
	};
	n.prototype.Subtract = function(b) {
		this.x -= b.x;
		this.y -= b.y;
		this.z -= b.z
	};
	n.prototype.Multiply = function(b) {
		void 0 === b && (b = 0);
		this.x *= b;
		this.y *= b;
		this.z *= b
	}
})();
(function() {
	var b = Box2D.Common.Math.b2Math,
		c = Box2D.Common.Math.b2Sweep,
		d = Box2D.Common.Math.b2Transform,
		f = Box2D.Common.Math.b2Vec2,
		e = Box2D.Common.b2Color,
		j = Box2D.Common.b2Settings,
		n = Box2D.Collision.b2AABB,
		l = Box2D.Collision.b2ContactPoint,
		g = Box2D.Collision.b2DynamicTreeBroadPhase,
		r = Box2D.Collision.b2RayCastInput,
		z = Box2D.Collision.b2RayCastOutput,
		y = Box2D.Collision.Shapes.b2CircleShape,
		A = Box2D.Collision.Shapes.b2EdgeShape,
		B = Box2D.Collision.Shapes.b2MassData,
		I = Box2D.Collision.Shapes.b2PolygonShape,
		D = Box2D.Collision.Shapes.b2Shape,
		t = Box2D.Dynamics.b2Body,
		G = Box2D.Dynamics.b2BodyDef,
		E = Box2D.Dynamics.b2ContactFilter,
		L = Box2D.Dynamics.b2ContactImpulse,
		M = Box2D.Dynamics.b2ContactListener,
		Q = Box2D.Dynamics.b2ContactManager,
		J = Box2D.Dynamics.b2DebugDraw,
		fa = Box2D.Dynamics.b2DestructionListener,
		O = Box2D.Dynamics.b2FilterData,
		P = Box2D.Dynamics.b2Fixture,
		aa = Box2D.Dynamics.b2FixtureDef,
		U = Box2D.Dynamics.b2Island,
		q = Box2D.Dynamics.b2TimeStep,
		x = Box2D.Dynamics.b2World,
		F = Box2D.Dynamics.Contacts.b2Contact,
		C = Box2D.Dynamics.Contacts.b2ContactFactory,
		H = Box2D.Dynamics.Contacts.b2ContactSolver,
		Z = Box2D.Dynamics.Joints.b2Joint,
		R = Box2D.Dynamics.Joints.b2PulleyJoint;
	t.b2Body = function() {
		this.m_xf = new d;
		this.m_sweep = new c;
		this.m_linearVelocity = new f;
		this.m_force = new f
	};
	t.prototype.connectEdges = function(c, d, e) {
		void 0 === e && (e = 0);
		var f = Math.atan2(d.GetDirectionVector().y, d.GetDirectionVector().x);
		e = b.MulFV(Math.tan(0.5 * (f - e)), d.GetDirectionVector());
		e = b.SubtractVV(e, d.GetNormalVector());
		e = b.MulFV(j.b2_toiSlop, e);
		e = b.AddVV(e, d.GetVertex1());
		var g = b.AddVV(c.GetDirectionVector(),
			d.GetDirectionVector());
		g.Normalize();
		var q = 0 < b.Dot(c.GetDirectionVector(), d.GetNormalVector());
		c.SetNextEdge(d, e, g, q);
		d.SetPrevEdge(c, e, g, q);
		return f
	};
	t.prototype.CreateFixture = function(b) {
		if (!0 == this.m_world.IsLocked()) return null;
		var c = new P;
		c.Create(this, this.m_xf, b);
		this.m_flags & t.e_activeFlag && c.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
		c.m_next = this.m_fixtureList;
		this.m_fixtureList = c;
		++this.m_fixtureCount;
		c.m_body = this;
		0 < c.m_density && this.ResetMassData();
		this.m_world.m_flags |=
			x.e_newFixture;
		return c
	};
	t.prototype.CreateFixture2 = function(b, c) {
		void 0 === c && (c = 0);
		var d = new aa;
		d.shape = b;
		d.density = c;
		return this.CreateFixture(d)
	};
	t.prototype.DestroyFixture = function(b) {
		if (!0 != this.m_world.IsLocked()) {
			for (var c = this.m_fixtureList, d = null; null != c;) {
				if (c == b) {
					d ? d.m_next = b.m_next : this.m_fixtureList = b.m_next;
					break
				}
				d = c;
				c = c.m_next
			}
			for (c = this.m_contactList; c;) {
				var d = c.contact,
					c = c.next,
					e = d.GetFixtureA(),
					f = d.GetFixtureB();
				(b == e || b == f) && this.m_world.m_contactManager.Destroy(d)
			}
			this.m_flags &
				t.e_activeFlag && b.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
			b.Destroy();
			b.m_body = null;
			b.m_next = null;
			--this.m_fixtureCount;
			this.ResetMassData()
		}
	};
	t.prototype.SetPositionAndAngle = function(b, c) {
		void 0 === c && (c = 0);
		var d;
		if (!0 != this.m_world.IsLocked()) {
			this.m_xf.R.Set(c);
			this.m_xf.position.SetV(b);
			d = this.m_xf.R;
			var e = this.m_sweep.localCenter;
			this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
			this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
			this.m_sweep.c.x += this.m_xf.position.x;
			this.m_sweep.c.y += this.m_xf.position.y;
			this.m_sweep.c0.SetV(this.m_sweep.c);
			this.m_sweep.a0 = this.m_sweep.a = c;
			e = this.m_world.m_contactManager.m_broadPhase;
			for (d = this.m_fixtureList; d; d = d.m_next) d.Synchronize(e, this.m_xf, this.m_xf);
			this.m_world.m_contactManager.FindNewContacts()
		}
	};
	t.prototype.SetTransform = function(b) {
		this.SetPositionAndAngle(b.position, b.GetAngle())
	};
	t.prototype.GetTransform = function() {
		return this.m_xf
	};
	t.prototype.GetPosition = function() {
		return this.m_xf.position
	};
	t.prototype.SetPosition = function(b) {
		this.SetPositionAndAngle(b,
			this.GetAngle())
	};
	t.prototype.GetAngle = function() {
		return this.m_sweep.a
	};
	t.prototype.SetAngle = function(b) {
		void 0 === b && (b = 0);
		this.SetPositionAndAngle(this.GetPosition(), b)
	};
	t.prototype.GetWorldCenter = function() {
		return this.m_sweep.c
	};
	t.prototype.GetLocalCenter = function() {
		return this.m_sweep.localCenter
	};
	t.prototype.SetLinearVelocity = function(b) {
		this.m_type != t.b2_staticBody && this.m_linearVelocity.SetV(b)
	};
	t.prototype.GetLinearVelocity = function() {
		return this.m_linearVelocity
	};
	t.prototype.SetAngularVelocity =
		function(b) {
			void 0 === b && (b = 0);
			this.m_type != t.b2_staticBody && (this.m_angularVelocity = b)
		};
	t.prototype.GetAngularVelocity = function() {
		return this.m_angularVelocity
	};
	t.prototype.GetDefinition = function() {
		var b = new G;
		b.type = this.GetType();
		b.allowSleep = (this.m_flags & t.e_allowSleepFlag) == t.e_allowSleepFlag;
		b.angle = this.GetAngle();
		b.angularDamping = this.m_angularDamping;
		b.angularVelocity = this.m_angularVelocity;
		b.fixedRotation = (this.m_flags & t.e_fixedRotationFlag) == t.e_fixedRotationFlag;
		b.bullet = (this.m_flags &
			t.e_bulletFlag) == t.e_bulletFlag;
		b.awake = (this.m_flags & t.e_awakeFlag) == t.e_awakeFlag;
		b.linearDamping = this.m_linearDamping;
		b.linearVelocity.SetV(this.GetLinearVelocity());
		b.position = this.GetPosition();
		b.userData = this.GetUserData();
		return b
	};
	t.prototype.ApplyForce = function(b, c) {
		this.m_type == t.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_force.x += b.x, this.m_force.y += b.y, this.m_torque += (c.x - this.m_sweep.c.x) * b.y - (c.y - this.m_sweep.c.y) * b.x)
	};
	t.prototype.ApplyTorque = function(b) {
		void 0 ===
			b && (b = 0);
		this.m_type == t.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_torque += b)
	};
	t.prototype.ApplyImpulse = function(b, c) {
		this.m_type == t.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * b.x, this.m_linearVelocity.y += this.m_invMass * b.y, this.m_angularVelocity += this.m_invI * ((c.x - this.m_sweep.c.x) * b.y - (c.y - this.m_sweep.c.y) * b.x))
	};
	t.prototype.Split = function(c) {
		for (var d = this.GetLinearVelocity().Copy(), e = this.GetAngularVelocity(), f = this.GetWorldCenter(),
				j = this.m_world.CreateBody(this.GetDefinition()), g, q = this.m_fixtureList; q;)
			if (c(q)) {
				var x = q.m_next;
				g ? g.m_next = x : this.m_fixtureList = x;
				this.m_fixtureCount--;
				q.m_next = j.m_fixtureList;
				j.m_fixtureList = q;
				j.m_fixtureCount++;
				q.m_body = j;
				q = x
			} else g = q, q = q.m_next;
		this.ResetMassData();
		j.ResetMassData();
		g = this.GetWorldCenter();
		c = j.GetWorldCenter();
		g = b.AddVV(d, b.CrossFV(e, b.SubtractVV(g, f)));
		d = b.AddVV(d, b.CrossFV(e, b.SubtractVV(c, f)));
		this.SetLinearVelocity(g);
		j.SetLinearVelocity(d);
		this.SetAngularVelocity(e);
		j.SetAngularVelocity(e);
		this.SynchronizeFixtures();
		j.SynchronizeFixtures();
		return j
	};
	t.prototype.Merge = function(b) {
		var c;
		for (c = b.m_fixtureList; c;) {
			var d = c.m_next;
			b.m_fixtureCount--;
			c.m_next = this.m_fixtureList;
			this.m_fixtureList = c;
			this.m_fixtureCount++;
			c.m_body = f;
			c = d
		}
		e.m_fixtureCount = 0;
		var e = this,
			f = b;
		e.GetWorldCenter();
		f.GetWorldCenter();
		e.GetLinearVelocity().Copy();
		f.GetLinearVelocity().Copy();
		e.GetAngularVelocity();
		f.GetAngularVelocity();
		e.ResetMassData();
		this.SynchronizeFixtures()
	};
	t.prototype.GetMass = function() {
		return this.m_mass
	};
	t.prototype.GetInertia = function() {
		return this.m_I
	};
	t.prototype.GetMassData = function(b) {
		b.mass = this.m_mass;
		b.I = this.m_I;
		b.center.SetV(this.m_sweep.localCenter)
	};
	t.prototype.SetMassData = function(c) {
		j.b2Assert(!1 == this.m_world.IsLocked());
		if (!0 != this.m_world.IsLocked() && this.m_type == t.b2_dynamicBody) {
			this.m_invI = this.m_I = this.m_invMass = 0;
			this.m_mass = c.mass;
			0 >= this.m_mass && (this.m_mass = 1);
			this.m_invMass = 1 / this.m_mass;
			0 < c.I && 0 == (this.m_flags & t.e_fixedRotationFlag) && (this.m_I = c.I - this.m_mass * (c.center.x *
				c.center.x + c.center.y * c.center.y), this.m_invI = 1 / this.m_I);
			var d = this.m_sweep.c.Copy();
			this.m_sweep.localCenter.SetV(c.center);
			this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
			this.m_sweep.c.SetV(this.m_sweep.c0);
			this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
			this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - d.x)
		}
	};
	t.prototype.ResetMassData = function() {
		this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
		this.m_sweep.localCenter.SetZero();
		if (!(this.m_type ==
				t.b2_staticBody || this.m_type == t.b2_kinematicBody)) {
			for (var c = f.Make(0, 0), d = this.m_fixtureList; d; d = d.m_next)
				if (0 != d.m_density) {
					var e = d.GetMassData();
					this.m_mass += e.mass;
					c.x += e.center.x * e.mass;
					c.y += e.center.y * e.mass;
					this.m_I += e.I
				}
			0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, c.x *= this.m_invMass, c.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
			0 < this.m_I && 0 == (this.m_flags & t.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * (c.x * c.x + c.y * c.y), this.m_I *= this.m_inertiaScale, j.b2Assert(0 < this.m_I), this.m_invI = 1 /
				this.m_I) : this.m_invI = this.m_I = 0;
			d = this.m_sweep.c.Copy();
			this.m_sweep.localCenter.SetV(c);
			this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
			this.m_sweep.c.SetV(this.m_sweep.c0);
			this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
			this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - d.x)
		}
	};
	t.prototype.GetWorldPoint = function(b) {
		var c = this.m_xf.R;
		b = new f(c.col1.x * b.x + c.col2.x * b.y, c.col1.y * b.x + c.col2.y * b.y);
		b.x += this.m_xf.position.x;
		b.y += this.m_xf.position.y;
		return b
	};
	t.prototype.GetWorldVector = function(c) {
		return b.MulMV(this.m_xf.R, c)
	};
	t.prototype.GetLocalPoint = function(c) {
		return b.MulXT(this.m_xf, c)
	};
	t.prototype.GetLocalVector = function(c) {
		return b.MulTMV(this.m_xf.R, c)
	};
	t.prototype.GetLinearVelocityFromWorldPoint = function(b) {
		return new f(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x))
	};
	t.prototype.GetLinearVelocityFromLocalPoint = function(b) {
		var c = this.m_xf.R;
		b = new f(c.col1.x * b.x + c.col2.x * b.y, c.col1.y * b.x + c.col2.y * b.y);
		b.x += this.m_xf.position.x;
		b.y += this.m_xf.position.y;
		return new f(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x))
	};
	t.prototype.GetLinearDamping = function() {
		return this.m_linearDamping
	};
	t.prototype.SetLinearDamping = function(b) {
		void 0 === b && (b = 0);
		this.m_linearDamping = b
	};
	t.prototype.GetAngularDamping = function() {
		return this.m_angularDamping
	};
	t.prototype.SetAngularDamping =
		function(b) {
			void 0 === b && (b = 0);
			this.m_angularDamping = b
		};
	t.prototype.SetType = function(b) {
		void 0 === b && (b = 0);
		if (this.m_type != b) {
			this.m_type = b;
			this.ResetMassData();
			this.m_type == t.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0);
			this.SetAwake(!0);
			this.m_force.SetZero();
			this.m_torque = 0;
			for (b = this.m_contactList; b; b = b.next) b.contact.FlagForFiltering()
		}
	};
	t.prototype.GetType = function() {
		return this.m_type
	};
	t.prototype.SetBullet = function(b) {
		this.m_flags = b ? this.m_flags | t.e_bulletFlag : this.m_flags &
			~t.e_bulletFlag
	};
	t.prototype.IsBullet = function() {
		return (this.m_flags & t.e_bulletFlag) == t.e_bulletFlag
	};
	t.prototype.SetSleepingAllowed = function(b) {
		b ? this.m_flags |= t.e_allowSleepFlag : (this.m_flags &= ~t.e_allowSleepFlag, this.SetAwake(!0))
	};
	t.prototype.SetAwake = function(b) {
		b ? (this.m_flags |= t.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~t.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0)
	};
	t.prototype.IsAwake = function() {
		return (this.m_flags &
			t.e_awakeFlag) == t.e_awakeFlag
	};
	t.prototype.SetFixedRotation = function(b) {
		this.m_flags = b ? this.m_flags | t.e_fixedRotationFlag : this.m_flags & ~t.e_fixedRotationFlag;
		this.ResetMassData()
	};
	t.prototype.IsFixedRotation = function() {
		return (this.m_flags & t.e_fixedRotationFlag) == t.e_fixedRotationFlag
	};
	t.prototype.SetActive = function(b) {
		if (b != this.IsActive()) {
			var c;
			if (b) {
				this.m_flags |= t.e_activeFlag;
				b = this.m_world.m_contactManager.m_broadPhase;
				for (c = this.m_fixtureList; c; c = c.m_next) c.CreateProxy(b, this.m_xf)
			} else {
				this.m_flags &=
					~t.e_activeFlag;
				b = this.m_world.m_contactManager.m_broadPhase;
				for (c = this.m_fixtureList; c; c = c.m_next) c.DestroyProxy(b);
				for (b = this.m_contactList; b;) c = b, b = b.next, this.m_world.m_contactManager.Destroy(c.contact);
				this.m_contactList = null
			}
		}
	};
	t.prototype.IsActive = function() {
		return (this.m_flags & t.e_activeFlag) == t.e_activeFlag
	};
	t.prototype.IsSleepingAllowed = function() {
		return (this.m_flags & t.e_allowSleepFlag) == t.e_allowSleepFlag
	};
	t.prototype.GetFixtureList = function() {
		return this.m_fixtureList
	};
	t.prototype.GetJointList =
		function() {
			return this.m_jointList
		};
	t.prototype.GetControllerList = function() {
		return this.m_controllerList
	};
	t.prototype.GetContactList = function() {
		return this.m_contactList
	};
	t.prototype.GetNext = function() {
		return this.m_next
	};
	t.prototype.GetUserData = function() {
		return this.m_userData
	};
	t.prototype.SetUserData = function(b) {
		this.m_userData = b
	};
	t.prototype.GetWorld = function() {
		return this.m_world
	};
	t.prototype.b2Body = function(b, c) {
		this.m_flags = 0;
		b.bullet && (this.m_flags |= t.e_bulletFlag);
		b.fixedRotation && (this.m_flags |=
			t.e_fixedRotationFlag);
		b.allowSleep && (this.m_flags |= t.e_allowSleepFlag);
		b.awake && (this.m_flags |= t.e_awakeFlag);
		b.active && (this.m_flags |= t.e_activeFlag);
		this.m_world = c;
		this.m_xf.position.SetV(b.position);
		this.m_xf.R.Set(b.angle);
		this.m_sweep.localCenter.SetZero();
		this.m_sweep.t0 = 1;
		this.m_sweep.a0 = this.m_sweep.a = b.angle;
		var d = this.m_xf.R,
			e = this.m_sweep.localCenter;
		this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
		this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
		this.m_sweep.c.x += this.m_xf.position.x;
		this.m_sweep.c.y +=
			this.m_xf.position.y;
		this.m_sweep.c0.SetV(this.m_sweep.c);
		this.m_contactList = this.m_controllerList = this.m_jointList = null;
		this.m_controllerCount = 0;
		this.m_next = this.m_prev = null;
		this.m_linearVelocity.SetV(b.linearVelocity);
		this.m_angularVelocity = b.angularVelocity;
		this.m_linearDamping = b.linearDamping;
		this.m_angularDamping = b.angularDamping;
		this.m_force.Set(0, 0);
		this.m_sleepTime = this.m_torque = 0;
		this.m_type = b.type;
		this.m_invMass = this.m_type == t.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
		this.m_invI = this.m_I =
			0;
		this.m_inertiaScale = b.inertiaScale;
		this.m_userData = b.userData;
		this.m_fixtureList = null;
		this.m_fixtureCount = 0
	};
	t.prototype.SynchronizeFixtures = function() {
		var b = t.s_xf1;
		b.R.Set(this.m_sweep.a0);
		var c = b.R,
			d = this.m_sweep.localCenter;
		b.position.x = this.m_sweep.c0.x - (c.col1.x * d.x + c.col2.x * d.y);
		b.position.y = this.m_sweep.c0.y - (c.col1.y * d.x + c.col2.y * d.y);
		d = this.m_world.m_contactManager.m_broadPhase;
		for (c = this.m_fixtureList; c; c = c.m_next) c.Synchronize(d, b, this.m_xf)
	};
	t.prototype.SynchronizeTransform = function() {
		this.m_xf.R.Set(this.m_sweep.a);
		var b = this.m_xf.R,
			c = this.m_sweep.localCenter;
		this.m_xf.position.x = this.m_sweep.c.x - (b.col1.x * c.x + b.col2.x * c.y);
		this.m_xf.position.y = this.m_sweep.c.y - (b.col1.y * c.x + b.col2.y * c.y)
	};
	t.prototype.ShouldCollide = function(b) {
		if (this.m_type != t.b2_dynamicBody && b.m_type != t.b2_dynamicBody) return !1;
		for (var c = this.m_jointList; c; c = c.next)
			if (c.other == b && !1 == c.joint.m_collideConnected) return !1;
		return !0
	};
	t.prototype.Advance = function(b) {
		void 0 === b && (b = 0);
		this.m_sweep.Advance(b);
		this.m_sweep.c.SetV(this.m_sweep.c0);
		this.m_sweep.a =
			this.m_sweep.a0;
		this.SynchronizeTransform()
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2Body.s_xf1 = new d;
		Box2D.Dynamics.b2Body.e_islandFlag = 1;
		Box2D.Dynamics.b2Body.e_awakeFlag = 2;
		Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
		Box2D.Dynamics.b2Body.e_bulletFlag = 8;
		Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
		Box2D.Dynamics.b2Body.e_activeFlag = 32;
		Box2D.Dynamics.b2Body.b2_staticBody = 0;
		Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
		Box2D.Dynamics.b2Body.b2_dynamicBody = 2
	});
	G.b2BodyDef = function() {
		this.position =
			new f;
		this.linearVelocity = new f
	};
	G.prototype.b2BodyDef = function() {
		this.userData = null;
		this.position.Set(0, 0);
		this.angle = 0;
		this.linearVelocity.Set(0, 0);
		this.angularDamping = this.linearDamping = this.angularVelocity = 0;
		this.awake = this.allowSleep = !0;
		this.bullet = this.fixedRotation = !1;
		this.type = t.b2_staticBody;
		this.active = !0;
		this.inertiaScale = 1
	};
	E.b2ContactFilter = function() {};
	E.prototype.ShouldCollide = function(b, c) {
		var d = b.GetFilterData(),
			e = c.GetFilterData();
		return d.groupIndex == e.groupIndex && 0 != d.groupIndex ?
			0 < d.groupIndex : 0 != (d.maskBits & e.categoryBits) && 0 != (d.categoryBits & e.maskBits)
	};
	E.prototype.RayCollide = function(b, c) {
		return !b ? !0 : this.ShouldCollide(b instanceof P ? b : null, c)
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new E
	});
	L.b2ContactImpulse = function() {
		this.normalImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints);
		this.tangentImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints)
	};
	M.b2ContactListener = function() {};
	M.prototype.BeginContact = function() {};
	M.prototype.EndContact =
		function() {};
	M.prototype.PreSolve = function() {};
	M.prototype.PostSolve = function() {};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2ContactListener.b2_defaultListener = new M
	});
	Q.b2ContactManager = function() {};
	Q.prototype.b2ContactManager = function() {
		this.m_world = null;
		this.m_contactCount = 0;
		this.m_contactFilter = E.b2_defaultFilter;
		this.m_contactListener = M.b2_defaultListener;
		this.m_contactFactory = new C(this.m_allocator);
		this.m_broadPhase = new g
	};
	Q.prototype.AddPair = function(b, c) {
		var d = b instanceof P ? b : null,
			e = c instanceof P ? c : null,
			f = d.GetBody(),
			j = e.GetBody();
		if (f != j) {
			for (var g = j.GetContactList(); g;) {
				if (g.other == f) {
					var q = g.contact.GetFixtureA(),
						x = g.contact.GetFixtureB();
					if (q == d && x == e || q == e && x == d) return
				}
				g = g.next
			}!1 != j.ShouldCollide(f) && !1 != this.m_contactFilter.ShouldCollide(d, e) && (g = this.m_contactFactory.Create(d, e), d = g.GetFixtureA(), e = g.GetFixtureB(), f = d.m_body, j = e.m_body, g.m_prev = null, g.m_next = this.m_world.m_contactList, null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = g), this.m_world.m_contactList =
				g, g.m_nodeA.contact = g, g.m_nodeA.other = j, g.m_nodeA.prev = null, g.m_nodeA.next = f.m_contactList, null != f.m_contactList && (f.m_contactList.prev = g.m_nodeA), f.m_contactList = g.m_nodeA, g.m_nodeB.contact = g, g.m_nodeB.other = f, g.m_nodeB.prev = null, g.m_nodeB.next = j.m_contactList, null != j.m_contactList && (j.m_contactList.prev = g.m_nodeB), j.m_contactList = g.m_nodeB, ++this.m_world.m_contactCount)
		}
	};
	Q.prototype.FindNewContacts = function() {
		this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair))
	};
	Q.prototype.Destroy =
		function(b) {
			var c = b.GetFixtureA(),
				d = b.GetFixtureB(),
				c = c.GetBody(),
				d = d.GetBody();
			b.IsTouching() && this.m_contactListener.EndContact(b);
			b.m_prev && (b.m_prev.m_next = b.m_next);
			b.m_next && (b.m_next.m_prev = b.m_prev);
			b == this.m_world.m_contactList && (this.m_world.m_contactList = b.m_next);
			b.m_nodeA.prev && (b.m_nodeA.prev.next = b.m_nodeA.next);
			b.m_nodeA.next && (b.m_nodeA.next.prev = b.m_nodeA.prev);
			b.m_nodeA == c.m_contactList && (c.m_contactList = b.m_nodeA.next);
			b.m_nodeB.prev && (b.m_nodeB.prev.next = b.m_nodeB.next);
			b.m_nodeB.next &&
				(b.m_nodeB.next.prev = b.m_nodeB.prev);
			b.m_nodeB == d.m_contactList && (d.m_contactList = b.m_nodeB.next);
			this.m_contactFactory.Destroy(b);
			--this.m_contactCount
		};
	Q.prototype.Collide = function() {
		for (var b = this.m_world.m_contactList; b;) {
			var c = b.GetFixtureA(),
				d = b.GetFixtureB(),
				e = c.GetBody(),
				f = d.GetBody();
			if (!1 == e.IsAwake() && !1 == f.IsAwake()) b = b.GetNext();
			else {
				if (b.m_flags & F.e_filterFlag) {
					if (!1 == f.ShouldCollide(e)) {
						c = b;
						b = c.GetNext();
						this.Destroy(c);
						continue
					}
					if (!1 == this.m_contactFilter.ShouldCollide(c, d)) {
						c = b;
						b =
							c.GetNext();
						this.Destroy(c);
						continue
					}
					b.m_flags &= ~F.e_filterFlag
				}!1 == this.m_broadPhase.TestOverlap(c.m_proxy, d.m_proxy) ? (c = b, b = c.GetNext(), this.Destroy(c)) : (b.Update(this.m_contactListener), b = b.GetNext())
			}
		}
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2ContactManager.s_evalCP = new l
	});
	J.b2DebugDraw = function() {};
	J.prototype.b2DebugDraw = function() {};
	J.prototype.SetFlags = function() {};
	J.prototype.GetFlags = function() {};
	J.prototype.AppendFlags = function() {};
	J.prototype.ClearFlags = function() {};
	J.prototype.SetSprite =
		function() {};
	J.prototype.GetSprite = function() {};
	J.prototype.SetDrawScale = function() {};
	J.prototype.GetDrawScale = function() {};
	J.prototype.SetLineThickness = function() {};
	J.prototype.GetLineThickness = function() {};
	J.prototype.SetAlpha = function() {};
	J.prototype.GetAlpha = function() {};
	J.prototype.SetFillAlpha = function() {};
	J.prototype.GetFillAlpha = function() {};
	J.prototype.SetXFormScale = function() {};
	J.prototype.GetXFormScale = function() {};
	J.prototype.DrawPolygon = function() {};
	J.prototype.DrawSolidPolygon = function() {};
	J.prototype.DrawCircle = function() {};
	J.prototype.DrawSolidCircle = function() {};
	J.prototype.DrawSegment = function() {};
	J.prototype.DrawTransform = function() {};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
		Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
		Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
		Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
		Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
		Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32
	});
	fa.b2DestructionListener = function() {};
	fa.prototype.SayGoodbyeJoint =
		function() {};
	fa.prototype.SayGoodbyeFixture = function() {};
	O.b2FilterData = function() {
		this.categoryBits = 1;
		this.maskBits = 65535;
		this.groupIndex = 0
	};
	O.prototype.Copy = function() {
		var b = new O;
		b.categoryBits = this.categoryBits;
		b.maskBits = this.maskBits;
		b.groupIndex = this.groupIndex;
		return b
	};
	P.b2Fixture = function() {
		this.m_filter = new O
	};
	P.prototype.GetType = function() {
		return this.m_shape.GetType()
	};
	P.prototype.GetShape = function() {
		return this.m_shape
	};
	P.prototype.SetSensor = function(b) {
		if (this.m_isSensor != b && (this.m_isSensor =
				b, null != this.m_body))
			for (b = this.m_body.GetContactList(); b;) {
				var c = b.contact,
					d = c.GetFixtureA(),
					e = c.GetFixtureB();
				if (d == this || e == this) c.SetSensor(d.IsSensor() || e.IsSensor());
				b = b.next
			}
	};
	P.prototype.IsSensor = function() {
		return this.m_isSensor
	};
	P.prototype.SetFilterData = function(b) {
		this.m_filter = b.Copy();
		if (!this.m_body)
			for (b = this.m_body.GetContactList(); b;) {
				var c = b.contact,
					d = c.GetFixtureA(),
					e = c.GetFixtureB();
				(d == this || e == this) && c.FlagForFiltering();
				b = b.next
			}
	};
	P.prototype.GetFilterData = function() {
		return this.m_filter.Copy()
	};
	P.prototype.GetBody = function() {
		return this.m_body
	};
	P.prototype.GetNext = function() {
		return this.m_next
	};
	P.prototype.GetUserData = function() {
		return this.m_userData
	};
	P.prototype.SetUserData = function(b) {
		this.m_userData = b
	};
	P.prototype.TestPoint = function(b) {
		return this.m_shape.TestPoint(this.m_body.GetTransform(), b)
	};
	P.prototype.RayCast = function(b, c) {
		return this.m_shape.RayCast(b, c, this.m_body.GetTransform())
	};
	P.prototype.GetMassData = function(b) {
		void 0 === b && (b = null);
		null == b && (b = new B);
		this.m_shape.ComputeMass(b,
			this.m_density);
		return b
	};
	P.prototype.SetDensity = function(b) {
		void 0 === b && (b = 0);
		this.m_density = b
	};
	P.prototype.GetDensity = function() {
		return this.m_density
	};
	P.prototype.GetFriction = function() {
		return this.m_friction
	};
	P.prototype.SetFriction = function(b) {
		void 0 === b && (b = 0);
		this.m_friction = b
	};
	P.prototype.GetRestitution = function() {
		return this.m_restitution
	};
	P.prototype.SetRestitution = function(b) {
		void 0 === b && (b = 0);
		this.m_restitution = b
	};
	P.prototype.GetAABB = function() {
		return this.m_aabb
	};
	P.prototype.b2Fixture =
		function() {
			this.m_aabb = new n;
			this.m_shape = this.m_next = this.m_body = this.m_userData = null;
			this.m_restitution = this.m_friction = this.m_density = 0
		};
	P.prototype.Create = function(b, c, d) {
		this.m_userData = d.userData;
		this.m_friction = d.friction;
		this.m_restitution = d.restitution;
		this.m_body = b;
		this.m_next = null;
		this.m_filter = d.filter.Copy();
		this.m_isSensor = d.isSensor;
		this.m_shape = d.shape.Copy();
		this.m_density = d.density
	};
	P.prototype.Destroy = function() {
		this.m_shape = null
	};
	P.prototype.CreateProxy = function(b, c) {
		this.m_shape.ComputeAABB(this.m_aabb,
			c);
		this.m_proxy = b.CreateProxy(this.m_aabb, this)
	};
	P.prototype.DestroyProxy = function(b) {
		null != this.m_proxy && (b.DestroyProxy(this.m_proxy), this.m_proxy = null)
	};
	P.prototype.Synchronize = function(c, d, e) {
		if (this.m_proxy) {
			var f = new n,
				j = new n;
			this.m_shape.ComputeAABB(f, d);
			this.m_shape.ComputeAABB(j, e);
			this.m_aabb.Combine(f, j);
			d = b.SubtractVV(e.position, d.position);
			c.MoveProxy(this.m_proxy, this.m_aabb, d)
		}
	};
	aa.b2FixtureDef = function() {
		this.filter = new O
	};
	aa.prototype.b2FixtureDef = function() {
		this.userData = this.shape =
			null;
		this.friction = 0.2;
		this.density = this.restitution = 0;
		this.filter.categoryBits = 1;
		this.filter.maskBits = 65535;
		this.filter.groupIndex = 0;
		this.isSensor = !1
	};
	U.b2Island = function() {};
	U.prototype.b2Island = function() {
		this.m_bodies = new Vector;
		this.m_contacts = new Vector;
		this.m_joints = new Vector
	};
	U.prototype.Initialize = function(b, c, d, e, f, j) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var g = 0;
		this.m_bodyCapacity = b;
		this.m_contactCapacity = c;
		this.m_jointCapacity = d;
		this.m_jointCount = this.m_contactCount =
			this.m_bodyCount = 0;
		this.m_allocator = e;
		this.m_listener = f;
		this.m_contactSolver = j;
		for (g = this.m_bodies.length; g < b; g++) this.m_bodies[g] = null;
		for (g = this.m_contacts.length; g < c; g++) this.m_contacts[g] = null;
		for (g = this.m_joints.length; g < d; g++) this.m_joints[g] = null
	};
	U.prototype.Clear = function() {
		this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0
	};
	U.prototype.Solve = function(c, d, e) {
		for (var f = 0, g = 0, q, f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.GetType() == t.b2_dynamicBody && (g.m_linearVelocity.x += c.dt * (d.x +
			g.m_invMass * g.m_force.x), g.m_linearVelocity.y += c.dt * (d.y + g.m_invMass * g.m_force.y), g.m_angularVelocity += c.dt * g.m_invI * g.m_torque, g.m_linearVelocity.Multiply(b.Clamp(1 - c.dt * g.m_linearDamping, 0, 1)), g.m_angularVelocity *= b.Clamp(1 - c.dt * g.m_angularDamping, 0, 1));
		this.m_contactSolver.Initialize(c, this.m_contacts, this.m_contactCount, this.m_allocator);
		d = this.m_contactSolver;
		d.InitVelocityConstraints(c);
		for (f = 0; f < this.m_jointCount; ++f) q = this.m_joints[f], q.InitVelocityConstraints(c);
		for (f = 0; f < c.velocityIterations; ++f) {
			for (g =
				0; g < this.m_jointCount; ++g) q = this.m_joints[g], q.SolveVelocityConstraints(c);
			d.SolveVelocityConstraints()
		}
		for (f = 0; f < this.m_jointCount; ++f) q = this.m_joints[f], q.FinalizeVelocityConstraints();
		d.FinalizeVelocityConstraints();
		for (f = 0; f < this.m_bodyCount; ++f)
			if (g = this.m_bodies[f], g.GetType() != t.b2_staticBody) {
				var x = c.dt * g.m_linearVelocity.x,
					C = c.dt * g.m_linearVelocity.y;
				x * x + C * C > j.b2_maxTranslationSquared && (g.m_linearVelocity.Normalize(), g.m_linearVelocity.x *= j.b2_maxTranslation * c.inv_dt, g.m_linearVelocity.y *=
					j.b2_maxTranslation * c.inv_dt);
				x = c.dt * g.m_angularVelocity;
				x * x > j.b2_maxRotationSquared && (g.m_angularVelocity = 0 > g.m_angularVelocity ? -j.b2_maxRotation * c.inv_dt : j.b2_maxRotation * c.inv_dt);
				g.m_sweep.c0.SetV(g.m_sweep.c);
				g.m_sweep.a0 = g.m_sweep.a;
				g.m_sweep.c.x += c.dt * g.m_linearVelocity.x;
				g.m_sweep.c.y += c.dt * g.m_linearVelocity.y;
				g.m_sweep.a += c.dt * g.m_angularVelocity;
				g.SynchronizeTransform()
			}
		for (f = 0; f < c.positionIterations; ++f) {
			x = d.SolvePositionConstraints(j.b2_contactBaumgarte);
			C = !0;
			for (g = 0; g < this.m_jointCount; ++g) q =
				this.m_joints[g], q = q.SolvePositionConstraints(j.b2_contactBaumgarte), C = C && q;
			if (x && C) break
		}
		this.Report(d.m_constraints);
		if (e) {
			e = Number.MAX_VALUE;
			d = j.b2_linearSleepTolerance * j.b2_linearSleepTolerance;
			x = j.b2_angularSleepTolerance * j.b2_angularSleepTolerance;
			for (f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.GetType() != t.b2_staticBody && (0 == (g.m_flags & t.e_allowSleepFlag) && (e = g.m_sleepTime = 0), 0 == (g.m_flags & t.e_allowSleepFlag) || g.m_angularVelocity * g.m_angularVelocity > x || b.Dot(g.m_linearVelocity, g.m_linearVelocity) >
				d ? e = g.m_sleepTime = 0 : (g.m_sleepTime += c.dt, e = b.Min(e, g.m_sleepTime)));
			if (e >= j.b2_timeToSleep)
				for (f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.SetAwake(!1)
		}
	};
	U.prototype.SolveTOI = function(b) {
		var c = 0,
			d = 0;
		this.m_contactSolver.Initialize(b, this.m_contacts, this.m_contactCount, this.m_allocator);
		for (var e = this.m_contactSolver, c = 0; c < this.m_jointCount; ++c) this.m_joints[c].InitVelocityConstraints(b);
		for (c = 0; c < b.velocityIterations; ++c) {
			e.SolveVelocityConstraints();
			for (d = 0; d < this.m_jointCount; ++d) this.m_joints[d].SolveVelocityConstraints(b)
		}
		for (c =
			0; c < this.m_bodyCount; ++c)
			if (d = this.m_bodies[c], d.GetType() != t.b2_staticBody) {
				var f = b.dt * d.m_linearVelocity.x,
					g = b.dt * d.m_linearVelocity.y;
				f * f + g * g > j.b2_maxTranslationSquared && (d.m_linearVelocity.Normalize(), d.m_linearVelocity.x *= j.b2_maxTranslation * b.inv_dt, d.m_linearVelocity.y *= j.b2_maxTranslation * b.inv_dt);
				f = b.dt * d.m_angularVelocity;
				f * f > j.b2_maxRotationSquared && (d.m_angularVelocity = 0 > d.m_angularVelocity ? -j.b2_maxRotation * b.inv_dt : j.b2_maxRotation * b.inv_dt);
				d.m_sweep.c0.SetV(d.m_sweep.c);
				d.m_sweep.a0 =
					d.m_sweep.a;
				d.m_sweep.c.x += b.dt * d.m_linearVelocity.x;
				d.m_sweep.c.y += b.dt * d.m_linearVelocity.y;
				d.m_sweep.a += b.dt * d.m_angularVelocity;
				d.SynchronizeTransform()
			}
		for (c = 0; c < b.positionIterations; ++c) {
			f = e.SolvePositionConstraints(0.75);
			g = !0;
			for (d = 0; d < this.m_jointCount; ++d) var q = this.m_joints[d].SolvePositionConstraints(j.b2_contactBaumgarte),
				g = g && q;
			if (f && g) break
		}
		this.Report(e.m_constraints)
	};
	U.prototype.Report = function(b) {
		if (null != this.m_listener)
			for (var c = 0; c < this.m_contactCount; ++c) {
				for (var d = this.m_contacts[c],
						e = b[c], f = 0; f < e.pointCount; ++f) U.s_impulse.normalImpulses[f] = e.points[f].normalImpulse, U.s_impulse.tangentImpulses[f] = e.points[f].tangentImpulse;
				this.m_listener.PostSolve(d, U.s_impulse)
			}
	};
	U.prototype.AddBody = function(b) {
		b.m_islandIndex = this.m_bodyCount;
		this.m_bodies[this.m_bodyCount++] = b
	};
	U.prototype.AddContact = function(b) {
		this.m_contacts[this.m_contactCount++] = b
	};
	U.prototype.AddJoint = function(b) {
		this.m_joints[this.m_jointCount++] = b
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2Island.s_impulse =
			new L
	});
	q.b2TimeStep = function() {};
	q.prototype.Set = function(b) {
		this.dt = b.dt;
		this.inv_dt = b.inv_dt;
		this.positionIterations = b.positionIterations;
		this.velocityIterations = b.velocityIterations;
		this.warmStarting = b.warmStarting
	};
	x.b2World = function() {
		this.s_stack = new Vector;
		this.m_contactManager = new Q;
		this.m_contactSolver = new H;
		this.m_island = new U
	};
	x.prototype.b2World = function(b, c) {
		this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
		this.m_controllerCount =
			this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
		x.m_warmStarting = !0;
		x.m_continuousPhysics = !0;
		this.m_allowSleep = c;
		this.m_gravity = b;
		this.m_inv_dt0 = 0;
		this.m_contactManager.m_world = this;
		this.m_groundBody = this.CreateBody(new G)
	};
	x.prototype.SetDestructionListener = function(b) {
		this.m_destructionListener = b
	};
	x.prototype.SetContactFilter = function(b) {
		this.m_contactManager.m_contactFilter = b
	};
	x.prototype.SetContactListener = function(b) {
		this.m_contactManager.m_contactListener = b
	};
	x.prototype.SetDebugDraw =
		function(b) {
			this.m_debugDraw = b
		};
	x.prototype.SetBroadPhase = function(b) {
		var c = this.m_contactManager.m_broadPhase;
		this.m_contactManager.m_broadPhase = b;
		for (var d = this.m_bodyList; d; d = d.m_next)
			for (var e = d.m_fixtureList; e; e = e.m_next) e.m_proxy = b.CreateProxy(c.GetFatAABB(e.m_proxy), e)
	};
	x.prototype.Validate = function() {
		this.m_contactManager.m_broadPhase.Validate()
	};
	x.prototype.GetProxyCount = function() {
		return this.m_contactManager.m_broadPhase.GetProxyCount()
	};
	x.prototype.CreateBody = function(b) {
		if (!0 == this.IsLocked()) return null;
		b = new t(b, this);
		b.m_prev = null;
		if (b.m_next = this.m_bodyList) this.m_bodyList.m_prev = b;
		this.m_bodyList = b;
		++this.m_bodyCount;
		return b
	};
	x.prototype.DestroyBody = function(b) {
		if (!0 != this.IsLocked()) {
			for (var c = b.m_jointList; c;) {
				var d = c,
					c = c.next;
				this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(d.joint);
				this.DestroyJoint(d.joint)
			}
			for (c = b.m_controllerList; c;) d = c, c = c.nextController, d.controller.RemoveBody(b);
			for (c = b.m_contactList; c;) d = c, c = c.next, this.m_contactManager.Destroy(d.contact);
			b.m_contactList =
				null;
			for (c = b.m_fixtureList; c;) d = c, c = c.m_next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(d), d.DestroyProxy(this.m_contactManager.m_broadPhase), d.Destroy();
			b.m_fixtureList = null;
			b.m_fixtureCount = 0;
			b.m_prev && (b.m_prev.m_next = b.m_next);
			b.m_next && (b.m_next.m_prev = b.m_prev);
			b == this.m_bodyList && (this.m_bodyList = b.m_next);
			--this.m_bodyCount
		}
	};
	x.prototype.CreateJoint = function(b) {
		var c = Z.Create(b, null);
		c.m_prev = null;
		if (c.m_next = this.m_jointList) this.m_jointList.m_prev = c;
		this.m_jointList =
			c;
		++this.m_jointCount;
		c.m_edgeA.joint = c;
		c.m_edgeA.other = c.m_bodyB;
		c.m_edgeA.prev = null;
		if (c.m_edgeA.next = c.m_bodyA.m_jointList) c.m_bodyA.m_jointList.prev = c.m_edgeA;
		c.m_bodyA.m_jointList = c.m_edgeA;
		c.m_edgeB.joint = c;
		c.m_edgeB.other = c.m_bodyA;
		c.m_edgeB.prev = null;
		if (c.m_edgeB.next = c.m_bodyB.m_jointList) c.m_bodyB.m_jointList.prev = c.m_edgeB;
		c.m_bodyB.m_jointList = c.m_edgeB;
		var d = b.bodyA,
			e = b.bodyB;
		if (!1 == b.collideConnected)
			for (b = e.GetContactList(); b;) b.other == d && b.contact.FlagForFiltering(), b = b.next;
		return c
	};
	x.prototype.DestroyJoint = function(b) {
		var c = b.m_collideConnected;
		b.m_prev && (b.m_prev.m_next = b.m_next);
		b.m_next && (b.m_next.m_prev = b.m_prev);
		b == this.m_jointList && (this.m_jointList = b.m_next);
		var d = b.m_bodyA,
			e = b.m_bodyB;
		d.SetAwake(!0);
		e.SetAwake(!0);
		b.m_edgeA.prev && (b.m_edgeA.prev.next = b.m_edgeA.next);
		b.m_edgeA.next && (b.m_edgeA.next.prev = b.m_edgeA.prev);
		b.m_edgeA == d.m_jointList && (d.m_jointList = b.m_edgeA.next);
		b.m_edgeA.prev = null;
		b.m_edgeA.next = null;
		b.m_edgeB.prev && (b.m_edgeB.prev.next = b.m_edgeB.next);
		b.m_edgeB.next && (b.m_edgeB.next.prev = b.m_edgeB.prev);
		b.m_edgeB == e.m_jointList && (e.m_jointList = b.m_edgeB.next);
		b.m_edgeB.prev = null;
		b.m_edgeB.next = null;
		Z.Destroy(b, null);
		--this.m_jointCount;
		if (!1 == c)
			for (b = e.GetContactList(); b;) b.other == d && b.contact.FlagForFiltering(), b = b.next
	};
	x.prototype.AddController = function(b) {
		b.m_next = this.m_controllerList;
		b.m_prev = null;
		this.m_controllerList = b;
		b.m_world = this;
		this.m_controllerCount++;
		return b
	};
	x.prototype.RemoveController = function(b) {
		b.m_prev && (b.m_prev.m_next =
			b.m_next);
		b.m_next && (b.m_next.m_prev = b.m_prev);
		this.m_controllerList == b && (this.m_controllerList = b.m_next);
		this.m_controllerCount--
	};
	x.prototype.CreateController = function(b) {
		if (b.m_world != this) throw Error("Controller can only be a member of one world");
		b.m_next = this.m_controllerList;
		b.m_prev = null;
		this.m_controllerList && (this.m_controllerList.m_prev = b);
		this.m_controllerList = b;
		++this.m_controllerCount;
		b.m_world = this;
		return b
	};
	x.prototype.DestroyController = function(b) {
		b.Clear();
		b.m_next && (b.m_next.m_prev =
			b.m_prev);
		b.m_prev && (b.m_prev.m_next = b.m_next);
		b == this.m_controllerList && (this.m_controllerList = b.m_next);
		--this.m_controllerCount
	};
	x.prototype.SetWarmStarting = function(b) {
		x.m_warmStarting = b
	};
	x.prototype.SetContinuousPhysics = function(b) {
		x.m_continuousPhysics = b
	};
	x.prototype.GetBodyCount = function() {
		return this.m_bodyCount
	};
	x.prototype.GetJointCount = function() {
		return this.m_jointCount
	};
	x.prototype.GetContactCount = function() {
		return this.m_contactCount
	};
	x.prototype.SetGravity = function(b) {
		this.m_gravity =
			b
	};
	x.prototype.GetGravity = function() {
		return this.m_gravity
	};
	x.prototype.GetGroundBody = function() {
		return this.m_groundBody
	};
	x.prototype.Step = function(b, c, d) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		this.m_flags & x.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~x.e_newFixture);
		this.m_flags |= x.e_locked;
		var e = x.s_timestep2;
		e.dt = b;
		e.velocityIterations = c;
		e.positionIterations = d;
		e.inv_dt = 0 < b ? 1 / b : 0;
		e.dtRatio = this.m_inv_dt0 * b;
		e.warmStarting = x.m_warmStarting;
		this.m_contactManager.Collide();
		0 < e.dt && this.Solve(e);
		x.m_continuousPhysics && 0 < e.dt && this.SolveTOI(e);
		0 < e.dt && (this.m_inv_dt0 = e.inv_dt);
		this.m_flags &= ~x.e_locked
	};
	x.prototype.ClearForces = function() {
		for (var b = this.m_bodyList; b; b = b.m_next) b.m_force.SetZero(), b.m_torque = 0
	};
	x.prototype.DrawDebugData = function() {
		if (null != this.m_debugDraw) {
			this.m_debugDraw.m_sprite.graphics.clear();
			var b = this.m_debugDraw.GetFlags(),
				c, d, g;
			new f;
			new f;
			new f;
			var j;
			new n;
			new n;
			new f;
			new f;
			new f;
			new f;
			var q = new e(0, 0, 0);
			if (b & J.e_shapeBit)
				for (c = this.m_bodyList; c; c =
					c.m_next) {
					j = c.m_xf;
					for (d = c.GetFixtureList(); d; d = d.m_next) g = d.GetShape(), !1 == c.IsActive() ? q.Set(0.5, 0.5, 0.3) : c.GetType() == t.b2_staticBody ? q.Set(0.5, 0.9, 0.5) : c.GetType() == t.b2_kinematicBody ? q.Set(0.5, 0.5, 0.9) : !1 == c.IsAwake() ? q.Set(0.6, 0.6, 0.6) : q.Set(0.9, 0.7, 0.7), this.DrawShape(g, j, q)
				}
			if (b & J.e_jointBit)
				for (c = this.m_jointList; c; c = c.m_next) this.DrawJoint(c);
			if (b & J.e_controllerBit)
				for (c = this.m_controllerList; c; c = c.m_next) c.Draw(this.m_debugDraw);
			if (b & J.e_pairBit) {
				q.Set(0.3, 0.9, 0.9);
				for (c = this.m_contactManager.m_contactList; c; c =
					c.GetNext()) g = c.GetFixtureA(), d = c.GetFixtureB(), g = g.GetAABB().GetCenter(), d = d.GetAABB().GetCenter(), this.m_debugDraw.DrawSegment(g, d, q)
			}
			if (b & J.e_aabbBit) {
				g = this.m_contactManager.m_broadPhase;
				j = [new f, new f, new f, new f];
				for (c = this.m_bodyList; c; c = c.GetNext())
					if (!1 != c.IsActive())
						for (d = c.GetFixtureList(); d; d = d.GetNext()) {
							var C = g.GetFatAABB(d.m_proxy);
							j[0].Set(C.lowerBound.x, C.lowerBound.y);
							j[1].Set(C.upperBound.x, C.lowerBound.y);
							j[2].Set(C.upperBound.x, C.upperBound.y);
							j[3].Set(C.lowerBound.x, C.upperBound.y);
							this.m_debugDraw.DrawPolygon(j, 4, q)
						}
			}
			if (b & J.e_centerOfMassBit)
				for (c = this.m_bodyList; c; c = c.m_next) j = x.s_xf, j.R = c.m_xf.R, j.position = c.GetWorldCenter(), this.m_debugDraw.DrawTransform(j)
		}
	};
	x.prototype.QueryAABB = function(b, c) {
		var d = this.m_contactManager.m_broadPhase;
		d.Query(function(c) {
			return b(d.GetUserData(c))
		}, c)
	};
	x.prototype.QueryShape = function(b, c, e) {
		void 0 === e && (e = null);
		null == e && (e = new d, e.SetIdentity());
		var f = this.m_contactManager.m_broadPhase,
			g = new n;
		c.ComputeAABB(g, e);
		f.Query(function(d) {
			d = f.GetUserData(d) instanceof
			P ? f.GetUserData(d) : null;
			return D.TestOverlap(c, e, d.GetShape(), d.GetBody().GetTransform()) ? b(d) : !0
		}, g)
	};
	x.prototype.QueryPoint = function(b, c) {
		var d = this.m_contactManager.m_broadPhase,
			e = new n;
		e.lowerBound.Set(c.x - j.b2_linearSlop, c.y - j.b2_linearSlop);
		e.upperBound.Set(c.x + j.b2_linearSlop, c.y + j.b2_linearSlop);
		d.Query(function(e) {
			e = d.GetUserData(e) instanceof P ? d.GetUserData(e) : null;
			return e.TestPoint(c) ? b(e) : !0
		}, e)
	};
	x.prototype.RayCast = function(b, c, d) {
		var e = this.m_contactManager.m_broadPhase,
			g = new z,
			j = new r(c,
				d);
		e.RayCast(function(j, q) {
			var x = e.GetUserData(q),
				x = x instanceof P ? x : null;
			if (x.RayCast(g, j)) {
				var C = g.fraction,
					l = new f((1 - C) * c.x + C * d.x, (1 - C) * c.y + C * d.y);
				return b(x, l, g.normal, C)
			}
			return j.maxFraction
		}, j)
	};
	x.prototype.RayCastOne = function(b, c) {
		var d;
		this.RayCast(function(b, c, e, f) {
			void 0 === f && (f = 0);
			d = b;
			return f
		}, b, c);
		return d
	};
	x.prototype.RayCastAll = function(b, c) {
		var d = new Vector;
		this.RayCast(function(b) {
			d[d.length] = b;
			return 1
		}, b, c);
		return d
	};
	x.prototype.GetBodyList = function() {
		return this.m_bodyList
	};
	x.prototype.GetJointList =
		function() {
			return this.m_jointList
		};
	x.prototype.GetContactList = function() {
		return this.m_contactList
	};
	x.prototype.IsLocked = function() {
		return 0 < (this.m_flags & x.e_locked)
	};
	x.prototype.Solve = function(b) {
		for (var c, d = this.m_controllerList; d; d = d.m_next) d.Step(b);
		d = this.m_island;
		d.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
		for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~t.e_islandFlag;
		for (var e = this.m_contactList; e; e =
			e.m_next) e.m_flags &= ~F.e_islandFlag;
		for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
		parseInt(this.m_bodyCount);
		for (var e = this.s_stack, f = this.m_bodyList; f; f = f.m_next)
			if (!(f.m_flags & t.e_islandFlag) && !(!1 == f.IsAwake() || !1 == f.IsActive()) && f.GetType() != t.b2_staticBody) {
				d.Clear();
				var g = 0;
				e[g++] = f;
				for (f.m_flags |= t.e_islandFlag; 0 < g;)
					if (c = e[--g], d.AddBody(c), !1 == c.IsAwake() && c.SetAwake(!0), c.GetType() != t.b2_staticBody) {
						for (var j, q = c.m_contactList; q; q = q.next)
							if (!(q.contact.m_flags & F.e_islandFlag) && !(!0 ==
									q.contact.IsSensor() || !1 == q.contact.IsEnabled() || !1 == q.contact.IsTouching())) d.AddContact(q.contact), q.contact.m_flags |= F.e_islandFlag, j = q.other, j.m_flags & t.e_islandFlag || (e[g++] = j, j.m_flags |= t.e_islandFlag);
						for (c = c.m_jointList; c; c = c.next) !0 != c.joint.m_islandFlag && (j = c.other, !1 != j.IsActive() && (d.AddJoint(c.joint), c.joint.m_islandFlag = !0, j.m_flags & t.e_islandFlag || (e[g++] = j, j.m_flags |= t.e_islandFlag)))
					}
				d.Solve(b, this.m_gravity, this.m_allowSleep);
				for (g = 0; g < d.m_bodyCount; ++g) c = d.m_bodies[g], c.GetType() ==
					t.b2_staticBody && (c.m_flags &= ~t.e_islandFlag)
			}
		for (g = 0; g < e.length && e[g]; ++g) e[g] = null;
		for (c = this.m_bodyList; c; c = c.m_next) !1 == c.IsAwake() || !1 == c.IsActive() || c.GetType() != t.b2_staticBody && c.SynchronizeFixtures();
		this.m_contactManager.FindNewContacts()
	};
	x.prototype.SolveTOI = function(b) {
		var c, d, e, f = this.m_island;
		f.Initialize(this.m_bodyCount, j.b2_maxTOIContactsPerIsland, j.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
		var g = x.s_queue;
		for (c = this.m_bodyList; c; c =
			c.m_next) c.m_flags &= ~t.e_islandFlag, c.m_sweep.t0 = 0;
		for (e = this.m_contactList; e; e = e.m_next) e.m_flags &= ~(F.e_toiFlag | F.e_islandFlag);
		for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
		for (;;) {
			var q = null,
				C = 1;
			for (e = this.m_contactList; e; e = e.m_next)
				if (!(!0 == e.IsSensor() || !1 == e.IsEnabled() || !1 == e.IsContinuous())) {
					if (e.m_flags & F.e_toiFlag) c = e.m_toi;
					else {
						c = e.m_fixtureA;
						d = e.m_fixtureB;
						c = c.m_body;
						d = d.m_body;
						if ((c.GetType() != t.b2_dynamicBody || !1 == c.IsAwake()) && (d.GetType() != t.b2_dynamicBody || !1 == d.IsAwake())) continue;
						var l = c.m_sweep.t0;
						c.m_sweep.t0 < d.m_sweep.t0 ? (l = d.m_sweep.t0, c.m_sweep.Advance(l)) : d.m_sweep.t0 < c.m_sweep.t0 && (l = c.m_sweep.t0, d.m_sweep.Advance(l));
						c = e.ComputeTOI(c.m_sweep, d.m_sweep);
						j.b2Assert(0 <= c && 1 >= c);
						0 < c && 1 > c && (c = (1 - c) * l + c, 1 < c && (c = 1));
						e.m_toi = c;
						e.m_flags |= F.e_toiFlag
					}
					Number.MIN_VALUE < c && c < C && (q = e, C = c)
				}
			if (null == q || 1 - 100 * Number.MIN_VALUE < C) break;
			c = q.m_fixtureA;
			d = q.m_fixtureB;
			c = c.m_body;
			d = d.m_body;
			x.s_backupA.Set(c.m_sweep);
			x.s_backupB.Set(d.m_sweep);
			c.Advance(C);
			d.Advance(C);
			q.Update(this.m_contactManager.m_contactListener);
			q.m_flags &= ~F.e_toiFlag;
			if (!0 == q.IsSensor() || !1 == q.IsEnabled()) c.m_sweep.Set(x.s_backupA), d.m_sweep.Set(x.s_backupB), c.SynchronizeTransform(), d.SynchronizeTransform();
			else if (!1 != q.IsTouching()) {
				c.GetType() != t.b2_dynamicBody && (c = d);
				f.Clear();
				q = e = 0;
				g[e + q++] = c;
				for (c.m_flags |= t.e_islandFlag; 0 < q;)
					if (c = g[e++], --q, f.AddBody(c), !1 == c.IsAwake() && c.SetAwake(!0), c.GetType() == t.b2_dynamicBody) {
						for (d = c.m_contactList; d && f.m_contactCount != f.m_contactCapacity; d = d.next)
							if (!(d.contact.m_flags & F.e_islandFlag) && !(!0 ==
									d.contact.IsSensor() || !1 == d.contact.IsEnabled() || !1 == d.contact.IsTouching())) f.AddContact(d.contact), d.contact.m_flags |= F.e_islandFlag, l = d.other, l.m_flags & t.e_islandFlag || (l.GetType() != t.b2_staticBody && (l.Advance(C), l.SetAwake(!0)), g[e + q] = l, ++q, l.m_flags |= t.e_islandFlag);
						for (c = c.m_jointList; c; c = c.next) f.m_jointCount != f.m_jointCapacity && !0 != c.joint.m_islandFlag && (l = c.other, !1 != l.IsActive() && (f.AddJoint(c.joint), c.joint.m_islandFlag = !0, l.m_flags & t.e_islandFlag || (l.GetType() != t.b2_staticBody && (l.Advance(C),
							l.SetAwake(!0)), g[e + q] = l, ++q, l.m_flags |= t.e_islandFlag)))
					}
				e = x.s_timestep;
				e.warmStarting = !1;
				e.dt = (1 - C) * b.dt;
				e.inv_dt = 1 / e.dt;
				e.dtRatio = 0;
				e.velocityIterations = b.velocityIterations;
				e.positionIterations = b.positionIterations;
				f.SolveTOI(e);
				for (C = C = 0; C < f.m_bodyCount; ++C)
					if (c = f.m_bodies[C], c.m_flags &= ~t.e_islandFlag, !1 != c.IsAwake() && c.GetType() == t.b2_dynamicBody) {
						c.SynchronizeFixtures();
						for (d = c.m_contactList; d; d = d.next) d.contact.m_flags &= ~F.e_toiFlag
					}
				for (C = 0; C < f.m_contactCount; ++C) e = f.m_contacts[C], e.m_flags &=
					~(F.e_toiFlag | F.e_islandFlag);
				for (C = 0; C < f.m_jointCount; ++C) e = f.m_joints[C], e.m_islandFlag = !1;
				this.m_contactManager.FindNewContacts()
			}
		}
	};
	x.prototype.DrawJoint = function(b) {
		var c = b.GetBodyA(),
			d = b.GetBodyB(),
			e = c.m_xf.position,
			f = d.m_xf.position,
			g = b.GetAnchorA(),
			j = b.GetAnchorB(),
			q = x.s_jointColor;
		switch (b.m_type) {
			case Z.e_distanceJoint:
				this.m_debugDraw.DrawSegment(g, j, q);
				break;
			case Z.e_pulleyJoint:
				c = b instanceof R ? b : null;
				b = c.GetGroundAnchorA();
				c = c.GetGroundAnchorB();
				this.m_debugDraw.DrawSegment(b, g, q);
				this.m_debugDraw.DrawSegment(c,
					j, q);
				this.m_debugDraw.DrawSegment(b, c, q);
				break;
			case Z.e_mouseJoint:
				this.m_debugDraw.DrawSegment(g, j, q);
				break;
			default:
				c != this.m_groundBody && this.m_debugDraw.DrawSegment(e, g, q), this.m_debugDraw.DrawSegment(g, j, q), d != this.m_groundBody && this.m_debugDraw.DrawSegment(f, j, q)
		}
	};
	x.prototype.DrawShape = function(c, d, e) {
		switch (c.m_type) {
			case D.e_circleShape:
				var f = c instanceof y ? c : null;
				this.m_debugDraw.DrawSolidCircle(b.MulX(d, f.m_p), f.m_radius, d.R.col1, e);
				break;
			case D.e_polygonShape:
				f = c instanceof I ? c : null;
				c =
					parseInt(f.GetVertexCount());
				for (var g = f.GetVertices(), j = new Vector(c), f = 0; f < c; ++f) j[f] = b.MulX(d, g[f]);
				this.m_debugDraw.DrawSolidPolygon(j, c, e);
				break;
			case D.e_edgeShape:
				f = c instanceof A ? c : null, this.m_debugDraw.DrawSegment(b.MulX(d, f.GetVertex1()), b.MulX(d, f.GetVertex2()), e)
		}
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.b2World.s_timestep2 = new q;
		Box2D.Dynamics.b2World.s_xf = new d;
		Box2D.Dynamics.b2World.s_backupA = new c;
		Box2D.Dynamics.b2World.s_backupB = new c;
		Box2D.Dynamics.b2World.s_timestep = new q;
		Box2D.Dynamics.b2World.s_queue = new Vector;
		Box2D.Dynamics.b2World.s_jointColor = new e(0.5, 0.8, 0.8);
		Box2D.Dynamics.b2World.e_newFixture = 1;
		Box2D.Dynamics.b2World.e_locked = 2
	})
})();
(function() {
	var b = Box2D.Collision.Shapes.b2CircleShape,
		c = Box2D.Collision.Shapes.b2EdgeShape,
		d = Box2D.Collision.Shapes.b2PolygonShape,
		f = Box2D.Collision.Shapes.b2Shape,
		e = Box2D.Dynamics.Contacts.b2CircleContact,
		j = Box2D.Dynamics.Contacts.b2Contact,
		n = Box2D.Dynamics.Contacts.b2ContactConstraint,
		l = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
		g = Box2D.Dynamics.Contacts.b2ContactEdge,
		r = Box2D.Dynamics.Contacts.b2ContactFactory,
		z = Box2D.Dynamics.Contacts.b2ContactRegister,
		y = Box2D.Dynamics.Contacts.b2ContactResult,
		A = Box2D.Dynamics.Contacts.b2ContactSolver,
		B = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
		I = Box2D.Dynamics.Contacts.b2NullContact,
		D = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
		t = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
		G = Box2D.Dynamics.Contacts.b2PolygonContact,
		E = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
		L = Box2D.Dynamics.b2Body,
		M = Box2D.Dynamics.b2TimeStep,
		Q = Box2D.Common.b2Settings,
		J = Box2D.Common.Math.b2Mat22,
		fa = Box2D.Common.Math.b2Math,
		O = Box2D.Common.Math.b2Vec2,
		P = Box2D.Collision.b2Collision,
		aa = Box2D.Collision.b2ContactID,
		U = Box2D.Collision.b2Manifold,
		q = Box2D.Collision.b2TimeOfImpact,
		x = Box2D.Collision.b2TOIInput,
		F = Box2D.Collision.b2WorldManifold;
	Box2D.inherit(e, Box2D.Dynamics.Contacts.b2Contact);
	e.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	e.b2CircleContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	};
	e.Create = function() {
		return new e
	};
	e.Destroy = function() {};
	e.prototype.Reset = function(b, c) {
		this.__super.Reset.call(this, b, c)
	};
	e.prototype.Evaluate =
		function() {
			var c = this.m_fixtureA.GetBody(),
				d = this.m_fixtureB.GetBody();
			P.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape() instanceof b ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, d.m_xf)
		};
	j.b2Contact = function() {
		this.m_nodeA = new g;
		this.m_nodeB = new g;
		this.m_manifold = new U;
		this.m_oldManifold = new U
	};
	j.prototype.GetManifold = function() {
		return this.m_manifold
	};
	j.prototype.GetWorldManifold = function(b) {
		var c = this.m_fixtureA.GetBody(),
			d = this.m_fixtureB.GetBody(),
			e = this.m_fixtureA.GetShape(),
			f = this.m_fixtureB.GetShape();
		b.Initialize(this.m_manifold, c.GetTransform(), e.m_radius, d.GetTransform(), f.m_radius)
	};
	j.prototype.IsTouching = function() {
		return (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag
	};
	j.prototype.IsContinuous = function() {
		return (this.m_flags & j.e_continuousFlag) == j.e_continuousFlag
	};
	j.prototype.SetSensor = function(b) {
		this.m_flags = b ? this.m_flags | j.e_sensorFlag : this.m_flags & ~j.e_sensorFlag
	};
	j.prototype.IsSensor = function() {
		return (this.m_flags &
			j.e_sensorFlag) == j.e_sensorFlag
	};
	j.prototype.SetEnabled = function(b) {
		this.m_flags = b ? this.m_flags | j.e_enabledFlag : this.m_flags & ~j.e_enabledFlag
	};
	j.prototype.IsEnabled = function() {
		return (this.m_flags & j.e_enabledFlag) == j.e_enabledFlag
	};
	j.prototype.GetNext = function() {
		return this.m_next
	};
	j.prototype.GetFixtureA = function() {
		return this.m_fixtureA
	};
	j.prototype.GetFixtureB = function() {
		return this.m_fixtureB
	};
	j.prototype.FlagForFiltering = function() {
		this.m_flags |= j.e_filterFlag
	};
	j.prototype.b2Contact = function() {};
	j.prototype.Reset = function(b, c) {
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		this.m_flags = j.e_enabledFlag;
		if (!b || !c) this.m_fixtureB = this.m_fixtureA = null;
		else {
			if (b.IsSensor() || c.IsSensor()) this.m_flags |= j.e_sensorFlag;
			var d = b.GetBody(),
				e = c.GetBody();
			if (d.GetType() != L.b2_dynamicBody || d.IsBullet() || e.GetType() != L.b2_dynamicBody || e.IsBullet()) this.m_flags |= j.e_continuousFlag;
			this.m_fixtureA = b;
			this.m_fixtureB = c;
			this.m_manifold.m_pointCount = 0;
			this.m_next = this.m_prev = null;
			this.m_nodeA.contact = null;
			this.m_nodeA.prev =
				null;
			this.m_nodeA.next = null;
			this.m_nodeA.other = null;
			this.m_nodeB.contact = null;
			this.m_nodeB.prev = null;
			this.m_nodeB.next = null;
			this.m_nodeB.other = null
		}
	};
	j.prototype.Update = function(b) {
		var c = this.m_oldManifold;
		this.m_oldManifold = this.m_manifold;
		this.m_manifold = c;
		this.m_flags |= j.e_enabledFlag;
		var d = !1,
			c = (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag,
			e = this.m_fixtureA.m_body,
			g = this.m_fixtureB.m_body,
			q = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
		if (this.m_flags & j.e_sensorFlag) q && (d = this.m_fixtureA.GetShape(),
			q = this.m_fixtureB.GetShape(), e = e.GetTransform(), g = g.GetTransform(), d = f.TestOverlap(d, e, q, g)), this.m_manifold.m_pointCount = 0;
		else {
			this.m_flags = e.GetType() != L.b2_dynamicBody || e.IsBullet() || g.GetType() != L.b2_dynamicBody || g.IsBullet() ? this.m_flags | j.e_continuousFlag : this.m_flags & ~j.e_continuousFlag;
			if (q) {
				this.Evaluate();
				d = 0 < this.m_manifold.m_pointCount;
				for (q = 0; q < this.m_manifold.m_pointCount; ++q) {
					var x = this.m_manifold.m_points[q];
					x.m_normalImpulse = 0;
					x.m_tangentImpulse = 0;
					for (var l = x.m_id, F = 0; F < this.m_oldManifold.m_pointCount; ++F) {
						var n =
							this.m_oldManifold.m_points[F];
						if (n.m_id.key == l.key) {
							x.m_normalImpulse = n.m_normalImpulse;
							x.m_tangentImpulse = n.m_tangentImpulse;
							break
						}
					}
				}
			} else this.m_manifold.m_pointCount = 0;
			d != c && (e.SetAwake(!0), g.SetAwake(!0))
		}
		this.m_flags = d ? this.m_flags | j.e_touchingFlag : this.m_flags & ~j.e_touchingFlag;
		!1 == c && !0 == d && b.BeginContact(this);
		!0 == c && !1 == d && b.EndContact(this);
		0 == (this.m_flags & j.e_sensorFlag) && b.PreSolve(this, this.m_oldManifold)
	};
	j.prototype.Evaluate = function() {};
	j.prototype.ComputeTOI = function(b, c) {
		j.s_input.proxyA.Set(this.m_fixtureA.GetShape());
		j.s_input.proxyB.Set(this.m_fixtureB.GetShape());
		j.s_input.sweepA = b;
		j.s_input.sweepB = c;
		j.s_input.tolerance = Q.b2_linearSlop;
		return q.TimeOfImpact(j.s_input)
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
		Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
		Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
		Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
		Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
		Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
		Box2D.Dynamics.Contacts.b2Contact.e_filterFlag =
			64;
		Box2D.Dynamics.Contacts.b2Contact.s_input = new x
	});
	n.b2ContactConstraint = function() {
		this.localPlaneNormal = new O;
		this.localPoint = new O;
		this.normal = new O;
		this.normalMass = new J;
		this.K = new J
	};
	n.prototype.b2ContactConstraint = function() {
		this.points = new Vector(Q.b2_maxManifoldPoints);
		for (var b = 0; b < Q.b2_maxManifoldPoints; b++) this.points[b] = new l
	};
	l.b2ContactConstraintPoint = function() {
		this.localPoint = new O;
		this.rA = new O;
		this.rB = new O
	};
	g.b2ContactEdge = function() {};
	r.b2ContactFactory = function() {};
	r.prototype.b2ContactFactory =
		function(b) {
			this.m_allocator = b;
			this.InitializeRegisters()
		};
	r.prototype.AddType = function(b, c, d, e) {
		void 0 === d && (d = 0);
		void 0 === e && (e = 0);
		this.m_registers[d][e].createFcn = b;
		this.m_registers[d][e].destroyFcn = c;
		this.m_registers[d][e].primary = !0;
		d != e && (this.m_registers[e][d].createFcn = b, this.m_registers[e][d].destroyFcn = c, this.m_registers[e][d].primary = !1)
	};
	r.prototype.InitializeRegisters = function() {
		this.m_registers = new Vector(f.e_shapeTypeCount);
		for (var b = 0; b < f.e_shapeTypeCount; b++) {
			this.m_registers[b] =
				new Vector(f.e_shapeTypeCount);
			for (var c = 0; c < f.e_shapeTypeCount; c++) this.m_registers[b][c] = new z
		}
		this.AddType(e.Create, e.Destroy, f.e_circleShape, f.e_circleShape);
		this.AddType(D.Create, D.Destroy, f.e_polygonShape, f.e_circleShape);
		this.AddType(G.Create, G.Destroy, f.e_polygonShape, f.e_polygonShape);
		this.AddType(B.Create, B.Destroy, f.e_edgeShape, f.e_circleShape);
		this.AddType(t.Create, t.Destroy, f.e_polygonShape, f.e_edgeShape)
	};
	r.prototype.Create = function(b, c) {
		var d = parseInt(b.GetType()),
			e = parseInt(c.GetType()),
			d = this.m_registers[d][e];
		if (d.pool) return e = d.pool, d.pool = e.m_next, d.poolCount--, e.Reset(b, c), e;
		e = d.createFcn;
		return null != e ? (d.primary ? (e = e(this.m_allocator), e.Reset(b, c)) : (e = e(this.m_allocator), e.Reset(c, b)), e) : null
	};
	r.prototype.Destroy = function(b) {
		0 < b.m_manifold.m_pointCount && (b.m_fixtureA.m_body.SetAwake(!0), b.m_fixtureB.m_body.SetAwake(!0));
		var c = parseInt(b.m_fixtureA.GetType()),
			d = parseInt(b.m_fixtureB.GetType()),
			c = this.m_registers[c][d];
		c.poolCount++;
		b.m_next = c.pool;
		c.pool = b;
		c = c.destroyFcn;
		c(b, this.m_allocator)
	};
	z.b2ContactRegister = function() {};
	y.b2ContactResult = function() {
		this.position = new O;
		this.normal = new O;
		this.id = new aa
	};
	A.b2ContactSolver = function() {
		this.m_step = new M;
		this.m_constraints = new Vector
	};
	A.prototype.b2ContactSolver = function() {};
	A.prototype.Initialize = function(b, c, d, e) {
		void 0 === d && (d = 0);
		var f;
		this.m_step.Set(b);
		this.m_allocator = e;
		for (this.m_constraintCount = d; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new n;
		for (b = 0; b <
			d; ++b) {
			f = c[b];
			e = f.m_fixtureA;
			var g = f.m_fixtureB,
				j = e.m_shape.m_radius,
				q = g.m_shape.m_radius,
				x = e.m_body,
				l = g.m_body,
				F = f.GetManifold(),
				r = Q.b2MixFriction(e.GetFriction(), g.GetFriction()),
				t = Q.b2MixRestitution(e.GetRestitution(), g.GetRestitution()),
				y = x.m_linearVelocity.x,
				B = x.m_linearVelocity.y,
				z = l.m_linearVelocity.x,
				D = l.m_linearVelocity.y,
				E = x.m_angularVelocity,
				I = l.m_angularVelocity;
			Q.b2Assert(0 < F.m_pointCount);
			A.s_worldManifold.Initialize(F, x.m_xf, j, l.m_xf, q);
			g = A.s_worldManifold.m_normal.x;
			f = A.s_worldManifold.m_normal.y;
			e = this.m_constraints[b];
			e.bodyA = x;
			e.bodyB = l;
			e.manifold = F;
			e.normal.x = g;
			e.normal.y = f;
			e.pointCount = F.m_pointCount;
			e.friction = r;
			e.restitution = t;
			e.localPlaneNormal.x = F.m_localPlaneNormal.x;
			e.localPlaneNormal.y = F.m_localPlaneNormal.y;
			e.localPoint.x = F.m_localPoint.x;
			e.localPoint.y = F.m_localPoint.y;
			e.radius = j + q;
			e.type = F.m_type;
			for (j = 0; j < e.pointCount; ++j) {
				r = F.m_points[j];
				q = e.points[j];
				q.normalImpulse = r.m_normalImpulse;
				q.tangentImpulse = r.m_tangentImpulse;
				q.localPoint.SetV(r.m_localPoint);
				var r = q.rA.x = A.s_worldManifold.m_points[j].x -
					x.m_sweep.c.x,
					t = q.rA.y = A.s_worldManifold.m_points[j].y - x.m_sweep.c.y,
					G = q.rB.x = A.s_worldManifold.m_points[j].x - l.m_sweep.c.x,
					L = q.rB.y = A.s_worldManifold.m_points[j].y - l.m_sweep.c.y,
					J = r * f - t * g,
					M = G * f - L * g,
					J = J * J,
					M = M * M;
				q.normalMass = 1 / (x.m_invMass + l.m_invMass + x.m_invI * J + l.m_invI * M);
				var O = x.m_mass * x.m_invMass + l.m_mass * l.m_invMass,
					O = O + (x.m_mass * x.m_invI * J + l.m_mass * l.m_invI * M);
				q.equalizedMass = 1 / O;
				M = f;
				O = -g;
				J = r * O - t * M;
				M = G * O - L * M;
				J *= J;
				M *= M;
				q.tangentMass = 1 / (x.m_invMass + l.m_invMass + x.m_invI * J + l.m_invI * M);
				q.velocityBias =
					0;
				r = e.normal.x * (z + -I * L - y - -E * t) + e.normal.y * (D + I * G - B - E * r);
				r < -Q.b2_velocityThreshold && (q.velocityBias += -e.restitution * r)
			}
			2 == e.pointCount && (D = e.points[0], z = e.points[1], F = x.m_invMass, x = x.m_invI, y = l.m_invMass, l = l.m_invI, B = D.rA.x * f - D.rA.y * g, D = D.rB.x * f - D.rB.y * g, E = z.rA.x * f - z.rA.y * g, z = z.rB.x * f - z.rB.y * g, g = F + y + x * B * B + l * D * D, f = F + y + x * E * E + l * z * z, l = F + y + x * B * E + l * D * z, g * g < 100 * (g * f - l * l) ? (e.K.col1.Set(g, l), e.K.col2.Set(l, f), e.K.GetInverse(e.normalMass)) : e.pointCount = 1)
		}
	};
	A.prototype.InitVelocityConstraints = function(b) {
		for (var c =
				0; c < this.m_constraintCount; ++c) {
			var d = this.m_constraints[c],
				e = d.bodyA,
				f = d.bodyB,
				g = e.m_invMass,
				j = e.m_invI,
				q = f.m_invMass,
				x = f.m_invI,
				l = d.normal.x,
				F = d.normal.y,
				n = F,
				r = -l,
				t = 0,
				y = 0;
			if (b.warmStarting) {
				y = d.pointCount;
				for (t = 0; t < y; ++t) {
					var A = d.points[t];
					A.normalImpulse *= b.dtRatio;
					A.tangentImpulse *= b.dtRatio;
					var B = A.normalImpulse * l + A.tangentImpulse * n,
						z = A.normalImpulse * F + A.tangentImpulse * r;
					e.m_angularVelocity -= j * (A.rA.x * z - A.rA.y * B);
					e.m_linearVelocity.x -= g * B;
					e.m_linearVelocity.y -= g * z;
					f.m_angularVelocity += x * (A.rB.x *
						z - A.rB.y * B);
					f.m_linearVelocity.x += q * B;
					f.m_linearVelocity.y += q * z
				}
			} else {
				y = d.pointCount;
				for (t = 0; t < y; ++t) e = d.points[t], e.normalImpulse = 0, e.tangentImpulse = 0
			}
		}
	};
	A.prototype.SolveVelocityConstraints = function() {
		for (var b = 0, c, d = 0, e = 0, f = 0, g = 0, j = 0, q = 0, x = 0, l, F = 0; F < this.m_constraintCount; ++F) {
			var f = this.m_constraints[F],
				n = f.bodyA,
				r = f.bodyB,
				t = n.m_angularVelocity,
				A = r.m_angularVelocity,
				y = n.m_linearVelocity,
				B = r.m_linearVelocity,
				z = n.m_invMass,
				D = n.m_invI,
				E = r.m_invMass,
				I = r.m_invI,
				q = f.normal.x,
				G = x = f.normal.y;
			l = -q;
			j = f.friction;
			for (b = 0; b < f.pointCount; b++) c = f.points[b], d = B.x - A * c.rB.y - y.x + t * c.rA.y, e = B.y + A * c.rB.x - y.y - t * c.rA.x, d = d * G + e * l, d = c.tangentMass * -d, e = j * c.normalImpulse, e = fa.Clamp(c.tangentImpulse + d, -e, e), d = e - c.tangentImpulse, g = d * G, d *= l, y.x -= z * g, y.y -= z * d, t -= D * (c.rA.x * d - c.rA.y * g), B.x += E * g, B.y += E * d, A += I * (c.rB.x * d - c.rB.y * g), c.tangentImpulse = e;
			parseInt(f.pointCount);
			if (1 == f.pointCount) c = f.points[0], d = B.x + -A * c.rB.y - y.x - -t * c.rA.y, e = B.y + A * c.rB.x - y.y - t * c.rA.x, f = d * q + e * x, d = -c.normalMass * (f - c.velocityBias), e = c.normalImpulse + d, e =
				0 < e ? e : 0, d = e - c.normalImpulse, g = d * q, d *= x, y.x -= z * g, y.y -= z * d, t -= D * (c.rA.x * d - c.rA.y * g), B.x += E * g, B.y += E * d, A += I * (c.rB.x * d - c.rB.y * g), c.normalImpulse = e;
			else {
				c = f.points[0];
				var b = f.points[1],
					d = c.normalImpulse,
					j = b.normalImpulse,
					L = (B.x - A * c.rB.y - y.x + t * c.rA.y) * q + (B.y + A * c.rB.x - y.y - t * c.rA.x) * x,
					J = (B.x - A * b.rB.y - y.x + t * b.rA.y) * q + (B.y + A * b.rB.x - y.y - t * b.rA.x) * x,
					e = L - c.velocityBias,
					g = J - b.velocityBias;
				l = f.K;
				e -= l.col1.x * d + l.col2.x * j;
				for (g -= l.col1.y * d + l.col2.y * j;;) {
					l = f.normalMass;
					G = -(l.col1.x * e + l.col2.x * g);
					l = -(l.col1.y * e + l.col2.y *
						g);
					if (0 <= G && 0 <= l) {
						d = G - d;
						j = l - j;
						f = d * q;
						d *= x;
						q *= j;
						x *= j;
						y.x -= z * (f + q);
						y.y -= z * (d + x);
						t -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * q);
						B.x += E * (f + q);
						B.y += E * (d + x);
						A += I * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * q);
						c.normalImpulse = G;
						b.normalImpulse = l;
						break
					}
					G = -c.normalMass * e;
					l = 0;
					J = f.K.col1.y * G + g;
					if (0 <= G && 0 <= J) {
						d = G - d;
						j = l - j;
						f = d * q;
						d *= x;
						q *= j;
						x *= j;
						y.x -= z * (f + q);
						y.y -= z * (d + x);
						t -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * q);
						B.x += E * (f + q);
						B.y += E * (d + x);
						A += I * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * q);
						c.normalImpulse = G;
						b.normalImpulse = l;
						break
					}
					G = 0;
					l = -b.normalMass * g;
					L = f.K.col2.x * l + e;
					if (0 <= l && 0 <= L) {
						d = G - d;
						j = l - j;
						f = d * q;
						d *= x;
						q *= j;
						x *= j;
						y.x -= z * (f + q);
						y.y -= z * (d + x);
						t -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * q);
						B.x += E * (f + q);
						B.y += E * (d + x);
						A += I * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * q);
						c.normalImpulse = G;
						b.normalImpulse = l;
						break
					}
					l = G = 0;
					L = e;
					J = g;
					if (0 <= L && 0 <= J) {
						d = G - d;
						j = l - j;
						f = d * q;
						d *= x;
						q *= j;
						x *= j;
						y.x -= z * (f + q);
						y.y -= z * (d + x);
						t -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * q);
						B.x += E * (f + q);
						B.y += E * (d + x);
						A += I * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * q);
						c.normalImpulse = G;
						b.normalImpulse = l;
						break
					}
					break
				}
			}
			n.m_angularVelocity =
				t;
			r.m_angularVelocity = A
		}
	};
	A.prototype.FinalizeVelocityConstraints = function() {
		for (var b = 0; b < this.m_constraintCount; ++b)
			for (var c = this.m_constraints[b], d = c.manifold, e = 0; e < c.pointCount; ++e) {
				var f = d.m_points[e],
					g = c.points[e];
				f.m_normalImpulse = g.normalImpulse;
				f.m_tangentImpulse = g.tangentImpulse
			}
	};
	A.prototype.SolvePositionConstraints = function(b) {
		void 0 === b && (b = 0);
		for (var c = 0, d = 0; d < this.m_constraintCount; d++) {
			var e = this.m_constraints[d],
				f = e.bodyA,
				g = e.bodyB,
				j = f.m_mass * f.m_invMass,
				q = f.m_mass * f.m_invI,
				x = g.m_mass *
				g.m_invMass,
				l = g.m_mass * g.m_invI;
			A.s_psm.Initialize(e);
			for (var F = A.s_psm.m_normal, n = 0; n < e.pointCount; n++) {
				var t = e.points[n],
					r = A.s_psm.m_points[n],
					y = A.s_psm.m_separations[n],
					B = r.x - f.m_sweep.c.x,
					z = r.y - f.m_sweep.c.y,
					D = r.x - g.m_sweep.c.x,
					r = r.y - g.m_sweep.c.y,
					c = c < y ? c : y,
					y = fa.Clamp(b * (y + Q.b2_linearSlop), -Q.b2_maxLinearCorrection, 0),
					y = -t.equalizedMass * y,
					t = y * F.x,
					y = y * F.y;
				f.m_sweep.c.x -= j * t;
				f.m_sweep.c.y -= j * y;
				f.m_sweep.a -= q * (B * y - z * t);
				f.SynchronizeTransform();
				g.m_sweep.c.x += x * t;
				g.m_sweep.c.y += x * y;
				g.m_sweep.a += l *
					(D * y - r * t);
				g.SynchronizeTransform()
			}
		}
		return c > -1.5 * Q.b2_linearSlop
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new F;
		Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new E
	});
	Box2D.inherit(B, Box2D.Dynamics.Contacts.b2Contact);
	B.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	B.b2EdgeAndCircleContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	};
	B.Create = function() {
		return new B
	};
	B.Destroy = function() {};
	B.prototype.Reset =
		function(b, c) {
			this.__super.Reset.call(this, b, c)
		};
	B.prototype.Evaluate = function() {
		var d = this.m_fixtureA.GetBody(),
			e = this.m_fixtureB.GetBody();
		this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof c ? this.m_fixtureA.GetShape() : null, d.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, e.m_xf)
	};
	B.prototype.b2CollideEdgeAndCircle = function() {};
	Box2D.inherit(I, Box2D.Dynamics.Contacts.b2Contact);
	I.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	I.b2NullContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	};
	I.prototype.b2NullContact = function() {
		this.__super.b2Contact.call(this)
	};
	I.prototype.Evaluate = function() {};
	Box2D.inherit(D, Box2D.Dynamics.Contacts.b2Contact);
	D.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	D.b2PolyAndCircleContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	};
	D.Create = function() {
		return new D
	};
	D.Destroy = function() {};
	D.prototype.Reset = function(b,
		c) {
		this.__super.Reset.call(this, b, c);
		Q.b2Assert(b.GetType() == f.e_polygonShape);
		Q.b2Assert(c.GetType() == f.e_circleShape)
	};
	D.prototype.Evaluate = function() {
		var c = this.m_fixtureA.m_body,
			e = this.m_fixtureB.m_body;
		P.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, e.m_xf)
	};
	Box2D.inherit(t, Box2D.Dynamics.Contacts.b2Contact);
	t.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	t.b2PolyAndEdgeContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	};
	t.Create = function() {
		return new t
	};
	t.Destroy = function() {};
	t.prototype.Reset = function(b, c) {
		this.__super.Reset.call(this, b, c);
		Q.b2Assert(b.GetType() == f.e_polygonShape);
		Q.b2Assert(c.GetType() == f.e_edgeShape)
	};
	t.prototype.Evaluate = function() {
		var b = this.m_fixtureA.GetBody(),
			e = this.m_fixtureB.GetBody();
		this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() :
			null, b.m_xf, this.m_fixtureB.GetShape() instanceof c ? this.m_fixtureB.GetShape() : null, e.m_xf)
	};
	t.prototype.b2CollidePolyAndEdge = function() {};
	Box2D.inherit(G, Box2D.Dynamics.Contacts.b2Contact);
	G.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	G.b2PolygonContact = function() {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
	};
	G.Create = function() {
		return new G
	};
	G.Destroy = function() {};
	G.prototype.Reset = function(b, c) {
		this.__super.Reset.call(this, b, c)
	};
	G.prototype.Evaluate = function() {
		var b =
			this.m_fixtureA.GetBody(),
			c = this.m_fixtureB.GetBody();
		P.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, b.m_xf, this.m_fixtureB.GetShape() instanceof d ? this.m_fixtureB.GetShape() : null, c.m_xf)
	};
	E.b2PositionSolverManifold = function() {};
	E.prototype.b2PositionSolverManifold = function() {
		this.m_normal = new O;
		this.m_separations = new Vector_a2j_Number(Q.b2_maxManifoldPoints);
		this.m_points = new Vector(Q.b2_maxManifoldPoints);
		for (var b = 0; b < Q.b2_maxManifoldPoints; b++) this.m_points[b] =
			new O
	};
	E.prototype.Initialize = function(b) {
		Q.b2Assert(0 < b.pointCount);
		var c = 0,
			d = 0,
			e = 0,
			f, g = 0,
			j = 0;
		switch (b.type) {
			case U.e_circles:
				f = b.bodyA.m_xf.R;
				e = b.localPoint;
				c = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
				d = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
				f = b.bodyB.m_xf.R;
				e = b.points[0].localPoint;
				g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
				f = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
				var e = g - c,
					j = f - d,
					q = e * e + j * j;
				q > Number.MIN_VALUE * Number.MIN_VALUE ? (q = Math.sqrt(q), this.m_normal.x =
					e / q, this.m_normal.y = j / q) : (this.m_normal.x = 1, this.m_normal.y = 0);
				this.m_points[0].x = 0.5 * (c + g);
				this.m_points[0].y = 0.5 * (d + f);
				this.m_separations[0] = e * this.m_normal.x + j * this.m_normal.y - b.radius;
				break;
			case U.e_faceA:
				f = b.bodyA.m_xf.R;
				e = b.localPlaneNormal;
				this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
				this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
				f = b.bodyA.m_xf.R;
				e = b.localPoint;
				g = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
				j = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
				f = b.bodyB.m_xf.R;
				for (c = 0; c < b.pointCount; ++c) e =
					b.points[c].localPoint, d = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y), e = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y), this.m_separations[c] = (d - g) * this.m_normal.x + (e - j) * this.m_normal.y - b.radius, this.m_points[c].x = d, this.m_points[c].y = e;
				break;
			case U.e_faceB:
				f = b.bodyB.m_xf.R;
				e = b.localPlaneNormal;
				this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
				this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
				f = b.bodyB.m_xf.R;
				e = b.localPoint;
				g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
				j = b.bodyB.m_xf.position.y +
					(f.col1.y * e.x + f.col2.y * e.y);
				f = b.bodyA.m_xf.R;
				for (c = 0; c < b.pointCount; ++c) e = b.points[c].localPoint, d = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y), e = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y), this.m_separations[c] = (d - g) * this.m_normal.x + (e - j) * this.m_normal.y - b.radius, this.m_points[c].Set(d, e);
				this.m_normal.x *= -1;
				this.m_normal.y *= -1
		}
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new O;
		Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB =
			new O
	})
})();
(function() {
	var b = Box2D.Common.Math.b2Mat22,
		c = Box2D.Common.Math.b2Math,
		d = Box2D.Common.Math.b2Vec2,
		f = Box2D.Common.b2Color,
		e = Box2D.Dynamics.Controllers.b2BuoyancyController,
		j = Box2D.Dynamics.Controllers.b2ConstantAccelController,
		n = Box2D.Dynamics.Controllers.b2ConstantForceController,
		l = Box2D.Dynamics.Controllers.b2Controller,
		g = Box2D.Dynamics.Controllers.b2ControllerEdge,
		r = Box2D.Dynamics.Controllers.b2GravityController,
		z = Box2D.Dynamics.Controllers.b2TensorDampingController;
	Box2D.inherit(e, Box2D.Dynamics.Controllers.b2Controller);
	e.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	e.b2BuoyancyController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
		this.normal = new d(0, -1);
		this.density = this.offset = 0;
		this.velocity = new d(0, 0);
		this.linearDrag = 2;
		this.angularDrag = 1;
		this.useDensity = !1;
		this.useWorldGravity = !0;
		this.gravity = null
	};
	e.prototype.Step = function() {
		if (this.m_bodyList) {
			this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy());
			for (var b = this.m_bodyList; b; b =
				b.nextBody) {
				var c = b.body;
				if (!1 != c.IsAwake()) {
					for (var e = new d, f = new d, g = 0, j = 0, l = c.GetFixtureList(); l; l = l.GetNext()) {
						var n = new d,
							r = l.GetShape().ComputeSubmergedArea(this.normal, this.offset, c.GetTransform(), n),
							g = g + r;
						e.x += r * n.x;
						e.y += r * n.y;
						var z = 0,
							z = 1,
							j = j + r * z;
						f.x += r * n.x * z;
						f.y += r * n.y * z
					}
					e.x /= g;
					e.y /= g;
					f.x /= j;
					f.y /= j;
					g < Number.MIN_VALUE || (j = this.gravity.GetNegative(), j.Multiply(this.density * g), c.ApplyForce(j, f), f = c.GetLinearVelocityFromWorldPoint(e), f.Subtract(this.velocity), f.Multiply(-this.linearDrag * g), c.ApplyForce(f,
						e), c.ApplyTorque(-c.GetInertia() / c.GetMass() * g * c.GetAngularVelocity() * this.angularDrag))
				}
			}
		}
	};
	e.prototype.Draw = function(b) {
		var c = new d,
			e = new d;
		c.x = this.normal.x * this.offset + 1E3 * this.normal.y;
		c.y = this.normal.y * this.offset - 1E3 * this.normal.x;
		e.x = this.normal.x * this.offset - 1E3 * this.normal.y;
		e.y = this.normal.y * this.offset + 1E3 * this.normal.x;
		var g = new f(0, 0, 1);
		b.DrawSegment(c, e, g)
	};
	Box2D.inherit(j, Box2D.Dynamics.Controllers.b2Controller);
	j.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	j.b2ConstantAccelController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
		this.A = new d(0, 0)
	};
	j.prototype.Step = function(b) {
		b = new d(this.A.x * b.dt, this.A.y * b.dt);
		for (var c = this.m_bodyList; c; c = c.nextBody) {
			var e = c.body;
			e.IsAwake() && e.SetLinearVelocity(new d(e.GetLinearVelocity().x + b.x, e.GetLinearVelocity().y + b.y))
		}
	};
	Box2D.inherit(n, Box2D.Dynamics.Controllers.b2Controller);
	n.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	n.b2ConstantForceController =
		function() {
			Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
			this.F = new d(0, 0)
		};
	n.prototype.Step = function() {
		for (var b = this.m_bodyList; b; b = b.nextBody) {
			var c = b.body;
			c.IsAwake() && c.ApplyForce(this.F, c.GetWorldCenter())
		}
	};
	l.b2Controller = function() {};
	l.prototype.Step = function() {};
	l.prototype.Draw = function() {};
	l.prototype.AddBody = function(b) {
		var c = new g;
		c.controller = this;
		c.body = b;
		c.nextBody = this.m_bodyList;
		c.prevBody = null;
		this.m_bodyList = c;
		c.nextBody && (c.nextBody.prevBody = c);
		this.m_bodyCount++;
		c.nextController = b.m_controllerList;
		c.prevController = null;
		b.m_controllerList = c;
		c.nextController && (c.nextController.prevController = c);
		b.m_controllerCount++
	};
	l.prototype.RemoveBody = function(b) {
		for (var c = b.m_controllerList; c && c.controller != this;) c = c.nextController;
		c.prevBody && (c.prevBody.nextBody = c.nextBody);
		c.nextBody && (c.nextBody.prevBody = c.prevBody);
		c.nextController && (c.nextController.prevController = c.prevController);
		c.prevController && (c.prevController.nextController = c.nextController);
		this.m_bodyList ==
			c && (this.m_bodyList = c.nextBody);
		b.m_controllerList == c && (b.m_controllerList = c.nextController);
		b.m_controllerCount--;
		this.m_bodyCount--
	};
	l.prototype.Clear = function() {
		for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body)
	};
	l.prototype.GetNext = function() {
		return this.m_next
	};
	l.prototype.GetWorld = function() {
		return this.m_world
	};
	l.prototype.GetBodyList = function() {
		return this.m_bodyList
	};
	g.b2ControllerEdge = function() {};
	Box2D.inherit(r, Box2D.Dynamics.Controllers.b2Controller);
	r.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	r.b2GravityController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
		this.G = 1;
		this.invSqr = !0
	};
	r.prototype.Step = function() {
		var b = null,
			c = null,
			e = null,
			f = 0,
			g = null,
			j = null,
			l = null,
			n = 0,
			r = 0,
			z = 0;
		if (this.invSqr)
			for (b = this.m_bodyList; b; b = b.nextBody) {
				c = b.body;
				e = c.GetWorldCenter();
				f = c.GetMass();
				for (g = this.m_bodyList; g != b; g = g.nextBody) j = g.body, l = j.GetWorldCenter(), n = l.x - e.x, r = l.y - e.y, z = n * n + r * r, z < Number.MIN_VALUE || (n = new d(n, r), n.Multiply(this.G / z / Math.sqrt(z) * f * j.GetMass()),
					c.IsAwake() && c.ApplyForce(n, e), n.Multiply(-1), j.IsAwake() && j.ApplyForce(n, l))
			} else
				for (b = this.m_bodyList; b; b = b.nextBody) {
					c = b.body;
					e = c.GetWorldCenter();
					f = c.GetMass();
					for (g = this.m_bodyList; g != b; g = g.nextBody) j = g.body, l = j.GetWorldCenter(), n = l.x - e.x, r = l.y - e.y, z = n * n + r * r, z < Number.MIN_VALUE || (n = new d(n, r), n.Multiply(this.G / z * f * j.GetMass()), c.IsAwake() && c.ApplyForce(n, e), n.Multiply(-1), j.IsAwake() && j.ApplyForce(n, l))
				}
	};
	Box2D.inherit(z, Box2D.Dynamics.Controllers.b2Controller);
	z.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	z.b2TensorDampingController = function() {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
		this.T = new b;
		this.maxTimestep = 0
	};
	z.prototype.SetAxisAligned = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.T.col1.x = -b;
		this.T.col1.y = 0;
		this.T.col2.x = 0;
		this.T.col2.y = -c;
		this.maxTimestep = 0 < b || 0 < c ? 1 / Math.max(b, c) : 0
	};
	z.prototype.Step = function(b) {
		b = b.dt;
		if (!(b <= Number.MIN_VALUE)) {
			b > this.maxTimestep && 0 < this.maxTimestep && (b = this.maxTimestep);
			for (var e = this.m_bodyList; e; e = e.nextBody) {
				var f =
					e.body;
				if (f.IsAwake()) {
					var g = f.GetWorldVector(c.MulMV(this.T, f.GetLocalVector(f.GetLinearVelocity())));
					f.SetLinearVelocity(new d(f.GetLinearVelocity().x + g.x * b, f.GetLinearVelocity().y + g.y * b))
				}
			}
		}
	}
})();
(function() {
	var b = Box2D.Common.b2Settings,
		c = Box2D.Common.Math.b2Mat22,
		d = Box2D.Common.Math.b2Mat33,
		f = Box2D.Common.Math.b2Math,
		e = Box2D.Common.Math.b2Vec2,
		j = Box2D.Common.Math.b2Vec3,
		n = Box2D.Dynamics.Joints.b2DistanceJoint,
		l = Box2D.Dynamics.Joints.b2DistanceJointDef,
		g = Box2D.Dynamics.Joints.b2FrictionJoint,
		r = Box2D.Dynamics.Joints.b2FrictionJointDef,
		z = Box2D.Dynamics.Joints.b2GearJoint,
		y = Box2D.Dynamics.Joints.b2GearJointDef,
		A = Box2D.Dynamics.Joints.b2Jacobian,
		B = Box2D.Dynamics.Joints.b2Joint,
		I = Box2D.Dynamics.Joints.b2JointDef,
		D = Box2D.Dynamics.Joints.b2JointEdge,
		t = Box2D.Dynamics.Joints.b2LineJoint,
		G = Box2D.Dynamics.Joints.b2LineJointDef,
		E = Box2D.Dynamics.Joints.b2MouseJoint,
		L = Box2D.Dynamics.Joints.b2MouseJointDef,
		M = Box2D.Dynamics.Joints.b2PrismaticJoint,
		Q = Box2D.Dynamics.Joints.b2PrismaticJointDef,
		J = Box2D.Dynamics.Joints.b2PulleyJoint,
		fa = Box2D.Dynamics.Joints.b2PulleyJointDef,
		O = Box2D.Dynamics.Joints.b2RevoluteJoint,
		P = Box2D.Dynamics.Joints.b2RevoluteJointDef,
		aa = Box2D.Dynamics.Joints.b2WeldJoint,
		U = Box2D.Dynamics.Joints.b2WeldJointDef;
	Box2D.inherit(n, Box2D.Dynamics.Joints.b2Joint);
	n.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	n.b2DistanceJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new e;
		this.m_localAnchor2 = new e;
		this.m_u = new e
	};
	n.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	};
	n.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	};
	n.prototype.GetReactionForce = function(b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_impulse * this.m_u.x, b * this.m_impulse * this.m_u.y)
	};
	n.prototype.GetReactionTorque = function() {
		return 0
	};
	n.prototype.GetLength = function() {
		return this.m_length
	};
	n.prototype.SetLength = function(b) {
		void 0 === b && (b = 0);
		this.m_length = b
	};
	n.prototype.GetFrequency = function() {
		return this.m_frequencyHz
	};
	n.prototype.SetFrequency = function(b) {
		void 0 === b && (b = 0);
		this.m_frequencyHz = b
	};
	n.prototype.GetDampingRatio = function() {
		return this.m_dampingRatio
	};
	n.prototype.SetDampingRatio = function(b) {
		void 0 ===
			b && (b = 0);
		this.m_dampingRatio = b
	};
	n.prototype.b2DistanceJoint = function(b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_length = b.length;
		this.m_frequencyHz = b.frequencyHz;
		this.m_dampingRatio = b.dampingRatio;
		this.m_bias = this.m_gamma = this.m_impulse = 0
	};
	n.prototype.InitVelocityConstraints = function(c) {
		var d, e = 0,
			f = this.m_bodyA,
			g = this.m_bodyB;
		d = f.m_xf.R;
		var j = this.m_localAnchor1.x - f.m_sweep.localCenter.x,
			l = this.m_localAnchor1.y - f.m_sweep.localCenter.y,
			e = d.col1.x * j + d.col2.x * l,
			l = d.col1.y * j + d.col2.y * l,
			j = e;
		d = g.m_xf.R;
		var m = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
			n = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
			e = d.col1.x * m + d.col2.x * n,
			n = d.col1.y * m + d.col2.y * n,
			m = e;
		this.m_u.x = g.m_sweep.c.x + m - f.m_sweep.c.x - j;
		this.m_u.y = g.m_sweep.c.y + n - f.m_sweep.c.y - l;
		e = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
		e > b.b2_linearSlop ? this.m_u.Multiply(1 / e) : this.m_u.SetZero();
		d = j * this.m_u.y - l * this.m_u.x;
		var r = m * this.m_u.y - n * this.m_u.x;
		d = f.m_invMass + f.m_invI *
			d * d + g.m_invMass + g.m_invI * r * r;
		this.m_mass = 0 != d ? 1 / d : 0;
		if (0 < this.m_frequencyHz) {
			var e = e - this.m_length,
				r = 2 * Math.PI * this.m_frequencyHz,
				u = this.m_mass * r * r;
			this.m_gamma = c.dt * (2 * this.m_mass * this.m_dampingRatio * r + c.dt * u);
			this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
			this.m_bias = e * c.dt * u * this.m_gamma;
			this.m_mass = d + this.m_gamma;
			this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0
		}
		c.warmStarting ? (this.m_impulse *= c.dtRatio, c = this.m_impulse * this.m_u.x, d = this.m_impulse * this.m_u.y, f.m_linearVelocity.x -= f.m_invMass * c, f.m_linearVelocity.y -=
			f.m_invMass * d, f.m_angularVelocity -= f.m_invI * (j * d - l * c), g.m_linearVelocity.x += g.m_invMass * c, g.m_linearVelocity.y += g.m_invMass * d, g.m_angularVelocity += g.m_invI * (m * d - n * c)) : this.m_impulse = 0
	};
	n.prototype.SolveVelocityConstraints = function() {
		var b, c = this.m_bodyA,
			d = this.m_bodyB;
		b = c.m_xf.R;
		var e = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
			f = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
			g = b.col1.x * e + b.col2.x * f,
			f = b.col1.y * e + b.col2.y * f,
			e = g;
		b = d.m_xf.R;
		var j = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
			m = this.m_localAnchor2.y -
			d.m_sweep.localCenter.y,
			g = b.col1.x * j + b.col2.x * m,
			m = b.col1.y * j + b.col2.y * m,
			j = g,
			g = -this.m_mass * (this.m_u.x * (d.m_linearVelocity.x + -d.m_angularVelocity * m - (c.m_linearVelocity.x + -c.m_angularVelocity * f)) + this.m_u.y * (d.m_linearVelocity.y + d.m_angularVelocity * j - (c.m_linearVelocity.y + c.m_angularVelocity * e)) + this.m_bias + this.m_gamma * this.m_impulse);
		this.m_impulse += g;
		b = g * this.m_u.x;
		g *= this.m_u.y;
		c.m_linearVelocity.x -= c.m_invMass * b;
		c.m_linearVelocity.y -= c.m_invMass * g;
		c.m_angularVelocity -= c.m_invI * (e * g - f * b);
		d.m_linearVelocity.x +=
			d.m_invMass * b;
		d.m_linearVelocity.y += d.m_invMass * g;
		d.m_angularVelocity += d.m_invI * (j * g - m * b)
	};
	n.prototype.SolvePositionConstraints = function() {
		var c;
		if (0 < this.m_frequencyHz) return !0;
		var d = this.m_bodyA,
			e = this.m_bodyB;
		c = d.m_xf.R;
		var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
			j = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
			l = c.col1.x * g + c.col2.x * j,
			j = c.col1.y * g + c.col2.y * j,
			g = l;
		c = e.m_xf.R;
		var n = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
			m = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
			l = c.col1.x * n + c.col2.x *
			m,
			m = c.col1.y * n + c.col2.y * m,
			n = l,
			l = e.m_sweep.c.x + n - d.m_sweep.c.x - g,
			s = e.m_sweep.c.y + m - d.m_sweep.c.y - j;
		c = Math.sqrt(l * l + s * s);
		l /= c;
		s /= c;
		c -= this.m_length;
		c = f.Clamp(c, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection);
		var r = -this.m_mass * c;
		this.m_u.Set(l, s);
		l = r * this.m_u.x;
		s = r * this.m_u.y;
		d.m_sweep.c.x -= d.m_invMass * l;
		d.m_sweep.c.y -= d.m_invMass * s;
		d.m_sweep.a -= d.m_invI * (g * s - j * l);
		e.m_sweep.c.x += e.m_invMass * l;
		e.m_sweep.c.y += e.m_invMass * s;
		e.m_sweep.a += e.m_invI * (n * s - m * l);
		d.SynchronizeTransform();
		e.SynchronizeTransform();
		return f.Abs(c) < b.b2_linearSlop
	};
	Box2D.inherit(l, Box2D.Dynamics.Joints.b2JointDef);
	l.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	l.b2DistanceJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e;
		this.localAnchorB = new e
	};
	l.prototype.b2DistanceJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_distanceJoint;
		this.length = 1;
		this.dampingRatio = this.frequencyHz = 0
	};
	l.prototype.Initialize = function(b, c, d, e) {
		this.bodyA =
			b;
		this.bodyB = c;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
		b = e.x - d.x;
		d = e.y - d.y;
		this.length = Math.sqrt(b * b + d * d);
		this.dampingRatio = this.frequencyHz = 0
	};
	Box2D.inherit(g, Box2D.Dynamics.Joints.b2Joint);
	g.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	g.b2FrictionJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchorA = new e;
		this.m_localAnchorB = new e;
		this.m_linearMass = new c;
		this.m_linearImpulse =
			new e
	};
	g.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
	};
	g.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
	};
	g.prototype.GetReactionForce = function(b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_linearImpulse.x, b * this.m_linearImpulse.y)
	};
	g.prototype.GetReactionTorque = function(b) {
		void 0 === b && (b = 0);
		return b * this.m_angularImpulse
	};
	g.prototype.SetMaxForce = function(b) {
		void 0 === b && (b = 0);
		this.m_maxForce = b
	};
	g.prototype.GetMaxForce = function() {
		return this.m_maxForce
	};
	g.prototype.SetMaxTorque = function(b) {
		void 0 === b && (b = 0);
		this.m_maxTorque = b
	};
	g.prototype.GetMaxTorque = function() {
		return this.m_maxTorque
	};
	g.prototype.b2FrictionJoint = function(b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchorA.SetV(b.localAnchorA);
		this.m_localAnchorB.SetV(b.localAnchorB);
		this.m_linearMass.SetZero();
		this.m_angularMass = 0;
		this.m_linearImpulse.SetZero();
		this.m_angularImpulse = 0;
		this.m_maxForce = b.maxForce;
		this.m_maxTorque = b.maxTorque
	};
	g.prototype.InitVelocityConstraints = function(b) {
		var d,
			e = 0,
			f = this.m_bodyA,
			g = this.m_bodyB;
		d = f.m_xf.R;
		var j = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
			l = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
			e = d.col1.x * j + d.col2.x * l,
			l = d.col1.y * j + d.col2.y * l,
			j = e;
		d = g.m_xf.R;
		var m = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
			n = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
			e = d.col1.x * m + d.col2.x * n,
			n = d.col1.y * m + d.col2.y * n,
			m = e;
		d = f.m_invMass;
		var e = g.m_invMass,
			r = f.m_invI,
			u = g.m_invI,
			t = new c;
		t.col1.x = d + e;
		t.col2.x = 0;
		t.col1.y = 0;
		t.col2.y = d + e;
		t.col1.x += r * l * l;
		t.col2.x += -r * j *
			l;
		t.col1.y += -r * j * l;
		t.col2.y += r * j * j;
		t.col1.x += u * n * n;
		t.col2.x += -u * m * n;
		t.col1.y += -u * m * n;
		t.col2.y += u * m * m;
		t.GetInverse(this.m_linearMass);
		this.m_angularMass = r + u;
		0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
		b.warmStarting ? (this.m_linearImpulse.x *= b.dtRatio, this.m_linearImpulse.y *= b.dtRatio, this.m_angularImpulse *= b.dtRatio, b = this.m_linearImpulse, f.m_linearVelocity.x -= d * b.x, f.m_linearVelocity.y -= d * b.y, f.m_angularVelocity -= r * (j * b.y - l * b.x + this.m_angularImpulse), g.m_linearVelocity.x += e * b.x,
			g.m_linearVelocity.y += e * b.y, g.m_angularVelocity += u * (m * b.y - n * b.x + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0)
	};
	g.prototype.SolveVelocityConstraints = function(b) {
		var c, d = 0,
			g = this.m_bodyA,
			j = this.m_bodyB,
			l = g.m_linearVelocity,
			n = g.m_angularVelocity,
			m = j.m_linearVelocity,
			s = j.m_angularVelocity,
			r = g.m_invMass,
			u = j.m_invMass,
			t = g.m_invI,
			y = j.m_invI;
		c = g.m_xf.R;
		var z = this.m_localAnchorA.x - g.m_sweep.localCenter.x,
			B = this.m_localAnchorA.y - g.m_sweep.localCenter.y,
			d = c.col1.x * z + c.col2.x *
			B,
			B = c.col1.y * z + c.col2.y * B,
			z = d;
		c = j.m_xf.R;
		var A = this.m_localAnchorB.x - j.m_sweep.localCenter.x,
			D = this.m_localAnchorB.y - j.m_sweep.localCenter.y,
			d = c.col1.x * A + c.col2.x * D,
			D = c.col1.y * A + c.col2.y * D,
			A = d,
			d = -this.m_angularMass * (s - n),
			E = this.m_angularImpulse;
		c = b.dt * this.m_maxTorque;
		this.m_angularImpulse = f.Clamp(this.m_angularImpulse + d, -c, c);
		d = this.m_angularImpulse - E;
		n -= t * d;
		s += y * d;
		c = f.MulMV(this.m_linearMass, new e(-(m.x - s * D - l.x + n * B), -(m.y + s * A - l.y - n * z)));
		d = this.m_linearImpulse.Copy();
		this.m_linearImpulse.Add(c);
		c = b.dt * this.m_maxForce;
		this.m_linearImpulse.LengthSquared() > c * c && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(c));
		c = f.SubtractVV(this.m_linearImpulse, d);
		l.x -= r * c.x;
		l.y -= r * c.y;
		n -= t * (z * c.y - B * c.x);
		m.x += u * c.x;
		m.y += u * c.y;
		s += y * (A * c.y - D * c.x);
		g.m_angularVelocity = n;
		j.m_angularVelocity = s
	};
	g.prototype.SolvePositionConstraints = function() {
		return !0
	};
	Box2D.inherit(r, Box2D.Dynamics.Joints.b2JointDef);
	r.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	r.b2FrictionJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,
			arguments);
		this.localAnchorA = new e;
		this.localAnchorB = new e
	};
	r.prototype.b2FrictionJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_frictionJoint;
		this.maxTorque = this.maxForce = 0
	};
	r.prototype.Initialize = function(b, c, d) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d))
	};
	Box2D.inherit(z, Box2D.Dynamics.Joints.b2Joint);
	z.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	z.b2GearJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,
			arguments);
		this.m_groundAnchor1 = new e;
		this.m_groundAnchor2 = new e;
		this.m_localAnchor1 = new e;
		this.m_localAnchor2 = new e;
		this.m_J = new A
	};
	z.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	};
	z.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	};
	z.prototype.GetReactionForce = function(b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_impulse * this.m_J.linearB.x, b * this.m_impulse * this.m_J.linearB.y)
	};
	z.prototype.GetReactionTorque = function(b) {
		void 0 ===
			b && (b = 0);
		var c = this.m_bodyB.m_xf.R,
			d = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
			e = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
			f = c.col1.x * d + c.col2.x * e,
			e = c.col1.y * d + c.col2.y * e;
		return b * (this.m_impulse * this.m_J.angularB - f * this.m_impulse * this.m_J.linearB.y + e * this.m_impulse * this.m_J.linearB.x)
	};
	z.prototype.GetRatio = function() {
		return this.m_ratio
	};
	z.prototype.SetRatio = function(b) {
		void 0 === b && (b = 0);
		this.m_ratio = b
	};
	z.prototype.b2GearJoint = function(b) {
		this.__super.b2Joint.call(this,
			b);
		var c = parseInt(b.joint1.m_type),
			d = parseInt(b.joint2.m_type);
		this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
		var e = 0,
			f = 0;
		this.m_ground1 = b.joint1.GetBodyA();
		this.m_bodyA = b.joint1.GetBodyB();
		c == B.e_revoluteJoint ? (this.m_revolute1 = b.joint1 instanceof O ? b.joint1 : null, this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2), e = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = b.joint1 instanceof M ? b.joint1 : null,
			this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2), e = this.m_prismatic1.GetJointTranslation());
		this.m_ground2 = b.joint2.GetBodyA();
		this.m_bodyB = b.joint2.GetBodyB();
		d == B.e_revoluteJoint ? (this.m_revolute2 = b.joint2 instanceof O ? b.joint2 : null, this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2), f = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = b.joint2 instanceof M ? b.joint2 :
			null, this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2), f = this.m_prismatic2.GetJointTranslation());
		this.m_ratio = b.ratio;
		this.m_constant = e + this.m_ratio * f;
		this.m_impulse = 0
	};
	z.prototype.InitVelocityConstraints = function(b) {
		var c = this.m_ground1,
			d = this.m_ground2,
			e = this.m_bodyA,
			f = this.m_bodyB,
			g = 0,
			j = 0,
			m = 0,
			l = 0,
			n = 0,
			u = 0;
		this.m_J.SetZero();
		this.m_revolute1 ? (this.m_J.angularA = -1, u += e.m_invI) : (c = c.m_xf.R, j = this.m_prismatic1.m_localXAxis1, g = c.col1.x *
			j.x + c.col2.x * j.y, j = c.col1.y * j.x + c.col2.y * j.y, c = e.m_xf.R, m = this.m_localAnchor1.x - e.m_sweep.localCenter.x, l = this.m_localAnchor1.y - e.m_sweep.localCenter.y, n = c.col1.x * m + c.col2.x * l, l = c.col1.y * m + c.col2.y * l, m = n * j - l * g, this.m_J.linearA.Set(-g, -j), this.m_J.angularA = -m, u += e.m_invMass + e.m_invI * m * m);
		this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio, u += this.m_ratio * this.m_ratio * f.m_invI) : (c = d.m_xf.R, j = this.m_prismatic2.m_localXAxis1, g = c.col1.x * j.x + c.col2.x * j.y, j = c.col1.y * j.x + c.col2.y * j.y, c = f.m_xf.R, m = this.m_localAnchor2.x -
			f.m_sweep.localCenter.x, l = this.m_localAnchor2.y - f.m_sweep.localCenter.y, n = c.col1.x * m + c.col2.x * l, l = c.col1.y * m + c.col2.y * l, m = n * j - l * g, this.m_J.linearB.Set(-this.m_ratio * g, -this.m_ratio * j), this.m_J.angularB = -this.m_ratio * m, u += this.m_ratio * this.m_ratio * (f.m_invMass + f.m_invI * m * m));
		this.m_mass = 0 < u ? 1 / u : 0;
		b.warmStarting ? (e.m_linearVelocity.x += e.m_invMass * this.m_impulse * this.m_J.linearA.x, e.m_linearVelocity.y += e.m_invMass * this.m_impulse * this.m_J.linearA.y, e.m_angularVelocity += e.m_invI * this.m_impulse * this.m_J.angularA,
			f.m_linearVelocity.x += f.m_invMass * this.m_impulse * this.m_J.linearB.x, f.m_linearVelocity.y += f.m_invMass * this.m_impulse * this.m_J.linearB.y, f.m_angularVelocity += f.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0
	};
	z.prototype.SolveVelocityConstraints = function() {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d = -this.m_mass * this.m_J.Compute(b.m_linearVelocity, b.m_angularVelocity, c.m_linearVelocity, c.m_angularVelocity);
		this.m_impulse += d;
		b.m_linearVelocity.x += b.m_invMass * d * this.m_J.linearA.x;
		b.m_linearVelocity.y +=
			b.m_invMass * d * this.m_J.linearA.y;
		b.m_angularVelocity += b.m_invI * d * this.m_J.angularA;
		c.m_linearVelocity.x += c.m_invMass * d * this.m_J.linearB.x;
		c.m_linearVelocity.y += c.m_invMass * d * this.m_J.linearB.y;
		c.m_angularVelocity += c.m_invI * d * this.m_J.angularB
	};
	z.prototype.SolvePositionConstraints = function() {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			e = 0,
			f = 0,
			e = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation(),
			f = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation(),
			e = -this.m_mass * (this.m_constant - (e + this.m_ratio * f));
		c.m_sweep.c.x += c.m_invMass * e * this.m_J.linearA.x;
		c.m_sweep.c.y += c.m_invMass * e * this.m_J.linearA.y;
		c.m_sweep.a += c.m_invI * e * this.m_J.angularA;
		d.m_sweep.c.x += d.m_invMass * e * this.m_J.linearB.x;
		d.m_sweep.c.y += d.m_invMass * e * this.m_J.linearB.y;
		d.m_sweep.a += d.m_invI * e * this.m_J.angularB;
		c.SynchronizeTransform();
		d.SynchronizeTransform();
		return 0 < b.b2_linearSlop
	};
	Box2D.inherit(y, Box2D.Dynamics.Joints.b2JointDef);
	y.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	y.b2GearJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments)
	};
	y.prototype.b2GearJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_gearJoint;
		this.joint2 = this.joint1 = null;
		this.ratio = 1
	};
	A.b2Jacobian = function() {
		this.linearA = new e;
		this.linearB = new e
	};
	A.prototype.SetZero = function() {
		this.linearA.SetZero();
		this.angularA = 0;
		this.linearB.SetZero();
		this.angularB = 0
	};
	A.prototype.Set = function(b, c, d, e) {
		void 0 === c && (c = 0);
		void 0 === e && (e = 0);
		this.linearA.SetV(b);
		this.angularA =
			c;
		this.linearB.SetV(d);
		this.angularB = e
	};
	A.prototype.Compute = function(b, c, d, e) {
		void 0 === c && (c = 0);
		void 0 === e && (e = 0);
		return this.linearA.x * b.x + this.linearA.y * b.y + this.angularA * c + (this.linearB.x * d.x + this.linearB.y * d.y) + this.angularB * e
	};
	B.b2Joint = function() {
		this.m_edgeA = new D;
		this.m_edgeB = new D;
		this.m_localCenterA = new e;
		this.m_localCenterB = new e
	};
	B.prototype.GetType = function() {
		return this.m_type
	};
	B.prototype.GetAnchorA = function() {
		return null
	};
	B.prototype.GetAnchorB = function() {
		return null
	};
	B.prototype.GetReactionForce =
		function() {
			return null
		};
	B.prototype.GetReactionTorque = function() {
		return 0
	};
	B.prototype.GetBodyA = function() {
		return this.m_bodyA
	};
	B.prototype.GetBodyB = function() {
		return this.m_bodyB
	};
	B.prototype.GetNext = function() {
		return this.m_next
	};
	B.prototype.GetUserData = function() {
		return this.m_userData
	};
	B.prototype.SetUserData = function(b) {
		this.m_userData = b
	};
	B.prototype.IsActive = function() {
		return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
	};
	B.Create = function(b) {
		var c = null;
		switch (b.type) {
			case B.e_distanceJoint:
				c =
					new n(b instanceof l ? b : null);
				break;
			case B.e_mouseJoint:
				c = new E(b instanceof L ? b : null);
				break;
			case B.e_prismaticJoint:
				c = new M(b instanceof Q ? b : null);
				break;
			case B.e_revoluteJoint:
				c = new O(b instanceof P ? b : null);
				break;
			case B.e_pulleyJoint:
				c = new J(b instanceof fa ? b : null);
				break;
			case B.e_gearJoint:
				c = new z(b instanceof y ? b : null);
				break;
			case B.e_lineJoint:
				c = new t(b instanceof G ? b : null);
				break;
			case B.e_weldJoint:
				c = new aa(b instanceof U ? b : null);
				break;
			case B.e_frictionJoint:
				c = new g(b instanceof r ? b : null)
		}
		return c
	};
	B.Destroy = function() {};
	B.prototype.b2Joint = function(c) {
		b.b2Assert(c.bodyA != c.bodyB);
		this.m_type = c.type;
		this.m_next = this.m_prev = null;
		this.m_bodyA = c.bodyA;
		this.m_bodyB = c.bodyB;
		this.m_collideConnected = c.collideConnected;
		this.m_islandFlag = !1;
		this.m_userData = c.userData
	};
	B.prototype.InitVelocityConstraints = function() {};
	B.prototype.SolveVelocityConstraints = function() {};
	B.prototype.FinalizeVelocityConstraints = function() {};
	B.prototype.SolvePositionConstraints = function() {
		return !1
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.Joints.b2Joint.e_unknownJoint =
			0;
		Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
		Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
		Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
		Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
		Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
		Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
		Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
		Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
		Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
		Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
		Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit =
			1;
		Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
		Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3
	});
	I.b2JointDef = function() {};
	I.prototype.b2JointDef = function() {
		this.type = B.e_unknownJoint;
		this.bodyB = this.bodyA = this.userData = null;
		this.collideConnected = !1
	};
	D.b2JointEdge = function() {};
	Box2D.inherit(t, Box2D.Dynamics.Joints.b2Joint);
	t.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	t.b2LineJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new e;
		this.m_localAnchor2 =
			new e;
		this.m_localXAxis1 = new e;
		this.m_localYAxis1 = new e;
		this.m_axis = new e;
		this.m_perp = new e;
		this.m_K = new c;
		this.m_impulse = new e
	};
	t.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	};
	t.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	};
	t.prototype.GetReactionForce = function(b) {
		void 0 === b && (b = 0);
		return new e(b * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), b * (this.m_impulse.x * this.m_perp.y +
			(this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y))
	};
	t.prototype.GetReactionTorque = function(b) {
		void 0 === b && (b = 0);
		return b * this.m_impulse.y
	};
	t.prototype.GetJointTranslation = function() {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d = b.GetWorldPoint(this.m_localAnchor1),
			e = c.GetWorldPoint(this.m_localAnchor2),
			c = e.x - d.x,
			d = e.y - d.y,
			b = b.GetWorldVector(this.m_localXAxis1);
		return b.x * c + b.y * d
	};
	t.prototype.GetJointSpeed = function() {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d;
		d = b.m_xf.R;
		var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
			f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
			g = d.col1.x * e + d.col2.x * f,
			f = d.col1.y * e + d.col2.y * f,
			e = g;
		d = c.m_xf.R;
		var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
			m = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
			g = d.col1.x * j + d.col2.x * m,
			m = d.col1.y * j + d.col2.y * m,
			j = g;
		d = c.m_sweep.c.x + j - (b.m_sweep.c.x + e);
		var g = c.m_sweep.c.y + m - (b.m_sweep.c.y + f),
			l = b.GetWorldVector(this.m_localXAxis1),
			n = b.m_linearVelocity,
			u = c.m_linearVelocity,
			b = b.m_angularVelocity,
			c = c.m_angularVelocity;
		return d * -b * l.y + g * b * l.x + (l.x * (u.x + -c *
			m - n.x - -b * f) + l.y * (u.y + c * j - n.y - b * e))
	};
	t.prototype.IsLimitEnabled = function() {
		return this.m_enableLimit
	};
	t.prototype.EnableLimit = function(b) {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_enableLimit = b
	};
	t.prototype.GetLowerLimit = function() {
		return this.m_lowerTranslation
	};
	t.prototype.GetUpperLimit = function() {
		return this.m_upperTranslation
	};
	t.prototype.SetLimits = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_lowerTranslation = b;
		this.m_upperTranslation =
			c
	};
	t.prototype.IsMotorEnabled = function() {
		return this.m_enableMotor
	};
	t.prototype.EnableMotor = function(b) {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_enableMotor = b
	};
	t.prototype.SetMotorSpeed = function(b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_motorSpeed = b
	};
	t.prototype.GetMotorSpeed = function() {
		return this.m_motorSpeed
	};
	t.prototype.SetMaxMotorForce = function(b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_maxMotorForce =
			b
	};
	t.prototype.GetMaxMotorForce = function() {
		return this.m_maxMotorForce
	};
	t.prototype.GetMotorForce = function() {
		return this.m_motorImpulse
	};
	t.prototype.b2LineJoint = function(b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_localXAxis1.SetV(b.localAxisA);
		this.m_localYAxis1.x = -this.m_localXAxis1.y;
		this.m_localYAxis1.y = this.m_localXAxis1.x;
		this.m_impulse.SetZero();
		this.m_motorImpulse = this.m_motorMass = 0;
		this.m_lowerTranslation = b.lowerTranslation;
		this.m_upperTranslation = b.upperTranslation;
		this.m_maxMotorForce = b.maxMotorForce;
		this.m_motorSpeed = b.motorSpeed;
		this.m_enableLimit = b.enableLimit;
		this.m_enableMotor = b.enableMotor;
		this.m_limitState = B.e_inactiveLimit;
		this.m_axis.SetZero();
		this.m_perp.SetZero()
	};
	t.prototype.InitVelocityConstraints = function(c) {
		var d = this.m_bodyA,
			e = this.m_bodyB,
			g, j = 0;
		this.m_localCenterA.SetV(d.GetLocalCenter());
		this.m_localCenterB.SetV(e.GetLocalCenter());
		var l = d.GetTransform();
		e.GetTransform();
		g = d.m_xf.R;
		var n = this.m_localAnchor1.x -
			this.m_localCenterA.x,
			m = this.m_localAnchor1.y - this.m_localCenterA.y,
			j = g.col1.x * n + g.col2.x * m,
			m = g.col1.y * n + g.col2.y * m,
			n = j;
		g = e.m_xf.R;
		var s = this.m_localAnchor2.x - this.m_localCenterB.x,
			r = this.m_localAnchor2.y - this.m_localCenterB.y,
			j = g.col1.x * s + g.col2.x * r,
			r = g.col1.y * s + g.col2.y * r,
			s = j;
		g = e.m_sweep.c.x + s - d.m_sweep.c.x - n;
		j = e.m_sweep.c.y + r - d.m_sweep.c.y - m;
		this.m_invMassA = d.m_invMass;
		this.m_invMassB = e.m_invMass;
		this.m_invIA = d.m_invI;
		this.m_invIB = e.m_invI;
		this.m_axis.SetV(f.MulMV(l.R, this.m_localXAxis1));
		this.m_a1 =
			(g + n) * this.m_axis.y - (j + m) * this.m_axis.x;
		this.m_a2 = s * this.m_axis.y - r * this.m_axis.x;
		this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
		this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
		this.m_perp.SetV(f.MulMV(l.R, this.m_localYAxis1));
		this.m_s1 = (g + n) * this.m_perp.y - (j + m) * this.m_perp.x;
		this.m_s2 = s * this.m_perp.y - r * this.m_perp.x;
		l = this.m_invMassA;
		n = this.m_invMassB;
		m = this.m_invIA;
		s = this.m_invIB;
		this.m_K.col1.x = l + n + m * this.m_s1 *
			this.m_s1 + s * this.m_s2 * this.m_s2;
		this.m_K.col1.y = m * this.m_s1 * this.m_a1 + s * this.m_s2 * this.m_a2;
		this.m_K.col2.x = this.m_K.col1.y;
		this.m_K.col2.y = l + n + m * this.m_a1 * this.m_a1 + s * this.m_a2 * this.m_a2;
		this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * j, f.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? this.m_limitState = B.e_equalLimits : g <= this.m_lowerTranslation ? this.m_limitState != B.e_atLowerLimit && (this.m_limitState = B.e_atLowerLimit, this.m_impulse.y = 0) : g >= this.m_upperTranslation ? this.m_limitState !=
			B.e_atUpperLimit && (this.m_limitState = B.e_atUpperLimit, this.m_impulse.y = 0) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.y = 0)) : this.m_limitState = B.e_inactiveLimit;
		!1 == this.m_enableMotor && (this.m_motorImpulse = 0);
		c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y, j = this.m_impulse.x *
			this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1, l = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2, d.m_linearVelocity.x -= this.m_invMassA * c, d.m_linearVelocity.y -= this.m_invMassA * g, d.m_angularVelocity -= this.m_invIA * j, e.m_linearVelocity.x += this.m_invMassB * c, e.m_linearVelocity.y += this.m_invMassB * g, e.m_angularVelocity += this.m_invIB * l) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
	};
	t.prototype.SolveVelocityConstraints = function(b) {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			g = c.m_linearVelocity,
			j = c.m_angularVelocity,
			l = d.m_linearVelocity,
			n = d.m_angularVelocity,
			m = 0,
			s = 0,
			r = 0,
			u = 0;
		this.m_enableMotor && this.m_limitState != B.e_equalLimits && (u = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (l.x - g.x) + this.m_axis.y * (l.y - g.y) + this.m_a2 * n - this.m_a1 * j)), m = this.m_motorImpulse, s = b.dt * this.m_maxMotorForce, this.m_motorImpulse = f.Clamp(this.m_motorImpulse + u, -s, s), u = this.m_motorImpulse - m, m = u * this.m_axis.x, s = u * this.m_axis.y, r = u * this.m_a1, u *= this.m_a2, g.x -= this.m_invMassA * m, g.y -= this.m_invMassA *
			s, j -= this.m_invIA * r, l.x += this.m_invMassB * m, l.y += this.m_invMassB * s, n += this.m_invIB * u);
		s = this.m_perp.x * (l.x - g.x) + this.m_perp.y * (l.y - g.y) + this.m_s2 * n - this.m_s1 * j;
		this.m_enableLimit && this.m_limitState != B.e_inactiveLimit ? (r = this.m_axis.x * (l.x - g.x) + this.m_axis.y * (l.y - g.y) + this.m_a2 * n - this.m_a1 * j, m = this.m_impulse.Copy(), b = this.m_K.Solve(new e, -s, -r), this.m_impulse.Add(b), this.m_limitState == B.e_atLowerLimit ? this.m_impulse.y = f.Max(this.m_impulse.y, 0) : this.m_limitState == B.e_atUpperLimit && (this.m_impulse.y =
			f.Min(this.m_impulse.y, 0)), s = -s - (this.m_impulse.y - m.y) * this.m_K.col2.x, r = 0 != this.m_K.col1.x ? s / this.m_K.col1.x + m.x : m.x, this.m_impulse.x = r, b.x = this.m_impulse.x - m.x, b.y = this.m_impulse.y - m.y, m = b.x * this.m_perp.x + b.y * this.m_axis.x, s = b.x * this.m_perp.y + b.y * this.m_axis.y, r = b.x * this.m_s1 + b.y * this.m_a1, u = b.x * this.m_s2 + b.y * this.m_a2) : (b = 0 != this.m_K.col1.x ? -s / this.m_K.col1.x : 0, this.m_impulse.x += b, m = b * this.m_perp.x, s = b * this.m_perp.y, r = b * this.m_s1, u = b * this.m_s2);
		g.x -= this.m_invMassA * m;
		g.y -= this.m_invMassA * s;
		j -=
			this.m_invIA * r;
		l.x += this.m_invMassB * m;
		l.y += this.m_invMassB * s;
		n += this.m_invIB * u;
		c.m_linearVelocity.SetV(g);
		c.m_angularVelocity = j;
		d.m_linearVelocity.SetV(l);
		d.m_angularVelocity = n
	};
	t.prototype.SolvePositionConstraints = function() {
		var d = this.m_bodyA,
			g = this.m_bodyB,
			j = d.m_sweep.c,
			l = d.m_sweep.a,
			n = g.m_sweep.c,
			r = g.m_sweep.a,
			t, m = 0,
			s = 0,
			y = 0,
			u = 0,
			z = 0,
			B = 0,
			s = !1,
			A = 0,
			D = c.FromAngle(l),
			y = c.FromAngle(r);
		t = D;
		var B = this.m_localAnchor1.x - this.m_localCenterA.x,
			E = this.m_localAnchor1.y - this.m_localCenterA.y,
			m = t.col1.x * B + t.col2.x *
			E,
			E = t.col1.y * B + t.col2.y * E,
			B = m;
		t = y;
		y = this.m_localAnchor2.x - this.m_localCenterB.x;
		u = this.m_localAnchor2.y - this.m_localCenterB.y;
		m = t.col1.x * y + t.col2.x * u;
		u = t.col1.y * y + t.col2.y * u;
		y = m;
		t = n.x + y - j.x - B;
		m = n.y + u - j.y - E;
		if (this.m_enableLimit) {
			this.m_axis = f.MulMV(D, this.m_localXAxis1);
			this.m_a1 = (t + B) * this.m_axis.y - (m + E) * this.m_axis.x;
			this.m_a2 = y * this.m_axis.y - u * this.m_axis.x;
			var G = this.m_axis.x * t + this.m_axis.y * m;
			f.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? (A = f.Clamp(G, -b.b2_maxLinearCorrection,
				b.b2_maxLinearCorrection), z = f.Abs(G), s = !0) : G <= this.m_lowerTranslation ? (A = f.Clamp(G - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), z = this.m_lowerTranslation - G, s = !0) : G >= this.m_upperTranslation && (A = f.Clamp(G - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection), z = G - this.m_upperTranslation, s = !0)
		}
		this.m_perp = f.MulMV(D, this.m_localYAxis1);
		this.m_s1 = (t + B) * this.m_perp.y - (m + E) * this.m_perp.x;
		this.m_s2 = y * this.m_perp.y - u * this.m_perp.x;
		D = new e;
		E = this.m_perp.x * t + this.m_perp.y *
			m;
		z = f.Max(z, f.Abs(E));
		B = 0;
		s ? (s = this.m_invMassA, y = this.m_invMassB, u = this.m_invIA, t = this.m_invIB, this.m_K.col1.x = s + y + u * this.m_s1 * this.m_s1 + t * this.m_s2 * this.m_s2, this.m_K.col1.y = u * this.m_s1 * this.m_a1 + t * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = s + y + u * this.m_a1 * this.m_a1 + t * this.m_a2 * this.m_a2, this.m_K.Solve(D, -E, -A)) : (s = this.m_invMassA, y = this.m_invMassB, u = this.m_invIA, t = this.m_invIB, A = s + y + u * this.m_s1 * this.m_s1 + t * this.m_s2 * this.m_s2, D.x = 0 != A ? -E / A : 0, D.y = 0);
		A = D.x * this.m_perp.x + D.y *
			this.m_axis.x;
		s = D.x * this.m_perp.y + D.y * this.m_axis.y;
		E = D.x * this.m_s1 + D.y * this.m_a1;
		D = D.x * this.m_s2 + D.y * this.m_a2;
		j.x -= this.m_invMassA * A;
		j.y -= this.m_invMassA * s;
		l -= this.m_invIA * E;
		n.x += this.m_invMassB * A;
		n.y += this.m_invMassB * s;
		r += this.m_invIB * D;
		d.m_sweep.a = l;
		g.m_sweep.a = r;
		d.SynchronizeTransform();
		g.SynchronizeTransform();
		return z <= b.b2_linearSlop && B <= b.b2_angularSlop
	};
	Box2D.inherit(G, Box2D.Dynamics.Joints.b2JointDef);
	G.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	G.b2LineJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,
			arguments);
		this.localAnchorA = new e;
		this.localAnchorB = new e;
		this.localAxisA = new e
	};
	G.prototype.b2LineJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_lineJoint;
		this.localAxisA.Set(1, 0);
		this.enableLimit = !1;
		this.upperTranslation = this.lowerTranslation = 0;
		this.enableMotor = !1;
		this.motorSpeed = this.maxMotorForce = 0
	};
	G.prototype.Initialize = function(b, c, d, e) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA = this.bodyA.GetLocalPoint(d);
		this.localAnchorB = this.bodyB.GetLocalPoint(d);
		this.localAxisA =
			this.bodyA.GetLocalVector(e)
	};
	Box2D.inherit(E, Box2D.Dynamics.Joints.b2Joint);
	E.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	E.b2MouseJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.K = new c;
		this.K1 = new c;
		this.K2 = new c;
		this.m_localAnchor = new e;
		this.m_target = new e;
		this.m_impulse = new e;
		this.m_mass = new c;
		this.m_C = new e
	};
	E.prototype.GetAnchorA = function() {
		return this.m_target
	};
	E.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor)
	};
	E.prototype.GetReactionForce = function(b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_impulse.x, b * this.m_impulse.y)
	};
	E.prototype.GetReactionTorque = function() {
		return 0
	};
	E.prototype.GetTarget = function() {
		return this.m_target
	};
	E.prototype.SetTarget = function(b) {
		!1 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
		this.m_target = b
	};
	E.prototype.GetMaxForce = function() {
		return this.m_maxForce
	};
	E.prototype.SetMaxForce = function(b) {
		void 0 === b && (b = 0);
		this.m_maxForce = b
	};
	E.prototype.GetFrequency = function() {
		return this.m_frequencyHz
	};
	E.prototype.SetFrequency = function(b) {
		void 0 === b && (b = 0);
		this.m_frequencyHz = b
	};
	E.prototype.GetDampingRatio = function() {
		return this.m_dampingRatio
	};
	E.prototype.SetDampingRatio = function(b) {
		void 0 === b && (b = 0);
		this.m_dampingRatio = b
	};
	E.prototype.b2MouseJoint = function(b) {
		this.__super.b2Joint.call(this, b);
		this.m_target.SetV(b.target);
		var c = this.m_target.x - this.m_bodyB.m_xf.position.x,
			d = this.m_target.y - this.m_bodyB.m_xf.position.y,
			e = this.m_bodyB.m_xf.R;
		this.m_localAnchor.x = c * e.col1.x + d * e.col1.y;
		this.m_localAnchor.y =
			c * e.col2.x + d * e.col2.y;
		this.m_maxForce = b.maxForce;
		this.m_impulse.SetZero();
		this.m_frequencyHz = b.frequencyHz;
		this.m_dampingRatio = b.dampingRatio;
		this.m_gamma = this.m_beta = 0
	};
	E.prototype.InitVelocityConstraints = function(b) {
		var c = this.m_bodyB,
			d = c.GetMass(),
			e = 2 * Math.PI * this.m_frequencyHz,
			f = d * e * e;
		this.m_gamma = b.dt * (2 * d * this.m_dampingRatio * e + b.dt * f);
		this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
		this.m_beta = b.dt * f * this.m_gamma;
		var f = c.m_xf.R,
			d = this.m_localAnchor.x - c.m_sweep.localCenter.x,
			e = this.m_localAnchor.y -
			c.m_sweep.localCenter.y,
			g = f.col1.x * d + f.col2.x * e,
			e = f.col1.y * d + f.col2.y * e,
			d = g,
			f = c.m_invMass,
			g = c.m_invI;
		this.K1.col1.x = f;
		this.K1.col2.x = 0;
		this.K1.col1.y = 0;
		this.K1.col2.y = f;
		this.K2.col1.x = g * e * e;
		this.K2.col2.x = -g * d * e;
		this.K2.col1.y = -g * d * e;
		this.K2.col2.y = g * d * d;
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.col1.x += this.m_gamma;
		this.K.col2.y += this.m_gamma;
		this.K.GetInverse(this.m_mass);
		this.m_C.x = c.m_sweep.c.x + d - this.m_target.x;
		this.m_C.y = c.m_sweep.c.y + e - this.m_target.y;
		c.m_angularVelocity *= 0.98;
		this.m_impulse.x *=
			b.dtRatio;
		this.m_impulse.y *= b.dtRatio;
		c.m_linearVelocity.x += f * this.m_impulse.x;
		c.m_linearVelocity.y += f * this.m_impulse.y;
		c.m_angularVelocity += g * (d * this.m_impulse.y - e * this.m_impulse.x)
	};
	E.prototype.SolveVelocityConstraints = function(b) {
		var c = this.m_bodyB,
			d, e = 0,
			f = 0;
		d = c.m_xf.R;
		var g = this.m_localAnchor.x - c.m_sweep.localCenter.x,
			j = this.m_localAnchor.y - c.m_sweep.localCenter.y,
			e = d.col1.x * g + d.col2.x * j,
			j = d.col1.y * g + d.col2.y * j,
			g = e,
			e = c.m_linearVelocity.x + -c.m_angularVelocity * j,
			m = c.m_linearVelocity.y + c.m_angularVelocity *
			g;
		d = this.m_mass;
		e = e + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
		f = m + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
		m = -(d.col1.x * e + d.col2.x * f);
		f = -(d.col1.y * e + d.col2.y * f);
		d = this.m_impulse.x;
		e = this.m_impulse.y;
		this.m_impulse.x += m;
		this.m_impulse.y += f;
		b = b.dt * this.m_maxForce;
		this.m_impulse.LengthSquared() > b * b && this.m_impulse.Multiply(b / this.m_impulse.Length());
		m = this.m_impulse.x - d;
		f = this.m_impulse.y - e;
		c.m_linearVelocity.x += c.m_invMass * m;
		c.m_linearVelocity.y += c.m_invMass * f;
		c.m_angularVelocity +=
			c.m_invI * (g * f - j * m)
	};
	E.prototype.SolvePositionConstraints = function() {
		return !0
	};
	Box2D.inherit(L, Box2D.Dynamics.Joints.b2JointDef);
	L.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	L.b2MouseJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.target = new e
	};
	L.prototype.b2MouseJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_mouseJoint;
		this.maxForce = 0;
		this.frequencyHz = 5;
		this.dampingRatio = 0.7
	};
	Box2D.inherit(M, Box2D.Dynamics.Joints.b2Joint);
	M.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	M.b2PrismaticJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new e;
		this.m_localAnchor2 = new e;
		this.m_localXAxis1 = new e;
		this.m_localYAxis1 = new e;
		this.m_axis = new e;
		this.m_perp = new e;
		this.m_K = new d;
		this.m_impulse = new j
	};
	M.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	};
	M.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	};
	M.prototype.GetReactionForce = function(b) {
		void 0 === b && (b = 0);
		return new e(b * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), b * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
	};
	M.prototype.GetReactionTorque = function(b) {
		void 0 === b && (b = 0);
		return b * this.m_impulse.y
	};
	M.prototype.GetJointTranslation = function() {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d = b.GetWorldPoint(this.m_localAnchor1),
			e = c.GetWorldPoint(this.m_localAnchor2),
			c = e.x - d.x,
			d = e.y - d.y,
			b = b.GetWorldVector(this.m_localXAxis1);
		return b.x * c + b.y * d
	};
	M.prototype.GetJointSpeed = function() {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d;
		d = b.m_xf.R;
		var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
			f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
			g = d.col1.x * e + d.col2.x * f,
			f = d.col1.y * e + d.col2.y * f,
			e = g;
		d = c.m_xf.R;
		var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
			m = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
			g = d.col1.x * j + d.col2.x * m,
			m = d.col1.y * j + d.col2.y * m,
			j = g;
		d = c.m_sweep.c.x + j - (b.m_sweep.c.x +
			e);
		var g = c.m_sweep.c.y + m - (b.m_sweep.c.y + f),
			l = b.GetWorldVector(this.m_localXAxis1),
			n = b.m_linearVelocity,
			u = c.m_linearVelocity,
			b = b.m_angularVelocity,
			c = c.m_angularVelocity;
		return d * -b * l.y + g * b * l.x + (l.x * (u.x + -c * m - n.x - -b * f) + l.y * (u.y + c * j - n.y - b * e))
	};
	M.prototype.IsLimitEnabled = function() {
		return this.m_enableLimit
	};
	M.prototype.EnableLimit = function(b) {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_enableLimit = b
	};
	M.prototype.GetLowerLimit = function() {
		return this.m_lowerTranslation
	};
	M.prototype.GetUpperLimit =
		function() {
			return this.m_upperTranslation
		};
	M.prototype.SetLimits = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_lowerTranslation = b;
		this.m_upperTranslation = c
	};
	M.prototype.IsMotorEnabled = function() {
		return this.m_enableMotor
	};
	M.prototype.EnableMotor = function(b) {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_enableMotor = b
	};
	M.prototype.SetMotorSpeed = function(b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_motorSpeed = b
	};
	M.prototype.GetMotorSpeed = function() {
		return this.m_motorSpeed
	};
	M.prototype.SetMaxMotorForce = function(b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_maxMotorForce = b
	};
	M.prototype.GetMotorForce = function() {
		return this.m_motorImpulse
	};
	M.prototype.b2PrismaticJoint = function(b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_localXAxis1.SetV(b.localAxisA);
		this.m_localYAxis1.x = -this.m_localXAxis1.y;
		this.m_localYAxis1.y = this.m_localXAxis1.x;
		this.m_refAngle = b.referenceAngle;
		this.m_impulse.SetZero();
		this.m_motorImpulse = this.m_motorMass = 0;
		this.m_lowerTranslation = b.lowerTranslation;
		this.m_upperTranslation = b.upperTranslation;
		this.m_maxMotorForce = b.maxMotorForce;
		this.m_motorSpeed = b.motorSpeed;
		this.m_enableLimit = b.enableLimit;
		this.m_enableMotor = b.enableMotor;
		this.m_limitState = B.e_inactiveLimit;
		this.m_axis.SetZero();
		this.m_perp.SetZero()
	};
	M.prototype.InitVelocityConstraints = function(c) {
		var d = this.m_bodyA,
			e = this.m_bodyB,
			g, j = 0;
		this.m_localCenterA.SetV(d.GetLocalCenter());
		this.m_localCenterB.SetV(e.GetLocalCenter());
		var l = d.GetTransform();
		e.GetTransform();
		g = d.m_xf.R;
		var n = this.m_localAnchor1.x - this.m_localCenterA.x,
			m = this.m_localAnchor1.y - this.m_localCenterA.y,
			j = g.col1.x * n + g.col2.x * m,
			m = g.col1.y * n + g.col2.y * m,
			n = j;
		g = e.m_xf.R;
		var s = this.m_localAnchor2.x - this.m_localCenterB.x,
			r = this.m_localAnchor2.y - this.m_localCenterB.y,
			j = g.col1.x * s + g.col2.x * r,
			r = g.col1.y * s + g.col2.y * r,
			s = j;
		g = e.m_sweep.c.x + s - d.m_sweep.c.x -
			n;
		j = e.m_sweep.c.y + r - d.m_sweep.c.y - m;
		this.m_invMassA = d.m_invMass;
		this.m_invMassB = e.m_invMass;
		this.m_invIA = d.m_invI;
		this.m_invIB = e.m_invI;
		this.m_axis.SetV(f.MulMV(l.R, this.m_localXAxis1));
		this.m_a1 = (g + n) * this.m_axis.y - (j + m) * this.m_axis.x;
		this.m_a2 = s * this.m_axis.y - r * this.m_axis.x;
		this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
		this.m_motorMass > Number.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass);
		this.m_perp.SetV(f.MulMV(l.R, this.m_localYAxis1));
		this.m_s1 = (g + n) * this.m_perp.y - (j + m) * this.m_perp.x;
		this.m_s2 = s * this.m_perp.y - r * this.m_perp.x;
		l = this.m_invMassA;
		n = this.m_invMassB;
		m = this.m_invIA;
		s = this.m_invIB;
		this.m_K.col1.x = l + n + m * this.m_s1 * this.m_s1 + s * this.m_s2 * this.m_s2;
		this.m_K.col1.y = m * this.m_s1 + s * this.m_s2;
		this.m_K.col1.z = m * this.m_s1 * this.m_a1 + s * this.m_s2 * this.m_a2;
		this.m_K.col2.x = this.m_K.col1.y;
		this.m_K.col2.y = m + s;
		this.m_K.col2.z = m * this.m_a1 + s * this.m_a2;
		this.m_K.col3.x = this.m_K.col1.z;
		this.m_K.col3.y = this.m_K.col2.z;
		this.m_K.col3.z = l + n + m * this.m_a1 *
			this.m_a1 + s * this.m_a2 * this.m_a2;
		this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * j, f.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? this.m_limitState = B.e_equalLimits : g <= this.m_lowerTranslation ? this.m_limitState != B.e_atLowerLimit && (this.m_limitState = B.e_atLowerLimit, this.m_impulse.z = 0) : g >= this.m_upperTranslation ? this.m_limitState != B.e_atUpperLimit && (this.m_limitState = B.e_atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.z = 0)) : this.m_limitState =
			B.e_inactiveLimit;
		!1 == this.m_enableMotor && (this.m_motorImpulse = 0);
		c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y, j = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, l = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse +
			this.m_impulse.z) * this.m_a2, d.m_linearVelocity.x -= this.m_invMassA * c, d.m_linearVelocity.y -= this.m_invMassA * g, d.m_angularVelocity -= this.m_invIA * j, e.m_linearVelocity.x += this.m_invMassB * c, e.m_linearVelocity.y += this.m_invMassB * g, e.m_angularVelocity += this.m_invIB * l) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
	};
	M.prototype.SolveVelocityConstraints = function(b) {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			g = c.m_linearVelocity,
			l = c.m_angularVelocity,
			n = d.m_linearVelocity,
			r = d.m_angularVelocity,
			m = 0,
			s = 0,
			t = 0,
			u = 0;
		this.m_enableMotor &&
			this.m_limitState != B.e_equalLimits && (u = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (n.x - g.x) + this.m_axis.y * (n.y - g.y) + this.m_a2 * r - this.m_a1 * l)), m = this.m_motorImpulse, b = b.dt * this.m_maxMotorForce, this.m_motorImpulse = f.Clamp(this.m_motorImpulse + u, -b, b), u = this.m_motorImpulse - m, m = u * this.m_axis.x, s = u * this.m_axis.y, t = u * this.m_a1, u *= this.m_a2, g.x -= this.m_invMassA * m, g.y -= this.m_invMassA * s, l -= this.m_invIA * t, n.x += this.m_invMassB * m, n.y += this.m_invMassB * s, r += this.m_invIB * u);
		t = this.m_perp.x * (n.x - g.x) + this.m_perp.y *
			(n.y - g.y) + this.m_s2 * r - this.m_s1 * l;
		s = r - l;
		this.m_enableLimit && this.m_limitState != B.e_inactiveLimit ? (b = this.m_axis.x * (n.x - g.x) + this.m_axis.y * (n.y - g.y) + this.m_a2 * r - this.m_a1 * l, m = this.m_impulse.Copy(), b = this.m_K.Solve33(new j, -t, -s, -b), this.m_impulse.Add(b), this.m_limitState == B.e_atLowerLimit ? this.m_impulse.z = f.Max(this.m_impulse.z, 0) : this.m_limitState == B.e_atUpperLimit && (this.m_impulse.z = f.Min(this.m_impulse.z, 0)), t = -t - (this.m_impulse.z - m.z) * this.m_K.col3.x, s = -s - (this.m_impulse.z - m.z) * this.m_K.col3.y,
			s = this.m_K.Solve22(new e, t, s), s.x += m.x, s.y += m.y, this.m_impulse.x = s.x, this.m_impulse.y = s.y, b.x = this.m_impulse.x - m.x, b.y = this.m_impulse.y - m.y, b.z = this.m_impulse.z - m.z, m = b.x * this.m_perp.x + b.z * this.m_axis.x, s = b.x * this.m_perp.y + b.z * this.m_axis.y, t = b.x * this.m_s1 + b.y + b.z * this.m_a1, u = b.x * this.m_s2 + b.y + b.z * this.m_a2) : (b = this.m_K.Solve22(new e, -t, -s), this.m_impulse.x += b.x, this.m_impulse.y += b.y, m = b.x * this.m_perp.x, s = b.x * this.m_perp.y, t = b.x * this.m_s1 + b.y, u = b.x * this.m_s2 + b.y);
		g.x -= this.m_invMassA * m;
		g.y -= this.m_invMassA *
			s;
		l -= this.m_invIA * t;
		n.x += this.m_invMassB * m;
		n.y += this.m_invMassB * s;
		r += this.m_invIB * u;
		c.m_linearVelocity.SetV(g);
		c.m_angularVelocity = l;
		d.m_linearVelocity.SetV(n);
		d.m_angularVelocity = r
	};
	M.prototype.SolvePositionConstraints = function() {
		var d = this.m_bodyA,
			g = this.m_bodyB,
			l = d.m_sweep.c,
			n = d.m_sweep.a,
			r = g.m_sweep.c,
			t = g.m_sweep.a,
			y, m = 0,
			s = 0,
			z = 0,
			u = 0,
			B = 0,
			s = !1,
			A = 0,
			D = c.FromAngle(n),
			E = c.FromAngle(t);
		y = D;
		var B = this.m_localAnchor1.x - this.m_localCenterA.x,
			G = this.m_localAnchor1.y - this.m_localCenterA.y,
			m = y.col1.x * B + y.col2.x *
			G,
			G = y.col1.y * B + y.col2.y * G,
			B = m;
		y = E;
		E = this.m_localAnchor2.x - this.m_localCenterB.x;
		z = this.m_localAnchor2.y - this.m_localCenterB.y;
		m = y.col1.x * E + y.col2.x * z;
		z = y.col1.y * E + y.col2.y * z;
		E = m;
		y = r.x + E - l.x - B;
		m = r.y + z - l.y - G;
		if (this.m_enableLimit) {
			this.m_axis = f.MulMV(D, this.m_localXAxis1);
			this.m_a1 = (y + B) * this.m_axis.y - (m + G) * this.m_axis.x;
			this.m_a2 = E * this.m_axis.y - z * this.m_axis.x;
			var I = this.m_axis.x * y + this.m_axis.y * m;
			f.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? (A = f.Clamp(I, -b.b2_maxLinearCorrection,
				b.b2_maxLinearCorrection), u = f.Abs(I), s = !0) : I <= this.m_lowerTranslation ? (A = f.Clamp(I - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), u = this.m_lowerTranslation - I, s = !0) : I >= this.m_upperTranslation && (A = f.Clamp(I - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection), u = I - this.m_upperTranslation, s = !0)
		}
		this.m_perp = f.MulMV(D, this.m_localYAxis1);
		this.m_s1 = (y + B) * this.m_perp.y - (m + G) * this.m_perp.x;
		this.m_s2 = E * this.m_perp.y - z * this.m_perp.x;
		D = new j;
		G = this.m_perp.x * y + this.m_perp.y *
			m;
		E = t - n - this.m_refAngle;
		u = f.Max(u, f.Abs(G));
		B = f.Abs(E);
		s ? (s = this.m_invMassA, z = this.m_invMassB, y = this.m_invIA, m = this.m_invIB, this.m_K.col1.x = s + z + y * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2, this.m_K.col1.y = y * this.m_s1 + m * this.m_s2, this.m_K.col1.z = y * this.m_s1 * this.m_a1 + m * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = y + m, this.m_K.col2.z = y * this.m_a1 + m * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = s + z + y * this.m_a1 * this.m_a1 + m * this.m_a2 * this.m_a2,
			this.m_K.Solve33(D, -G, -E, -A)) : (s = this.m_invMassA, z = this.m_invMassB, y = this.m_invIA, m = this.m_invIB, A = y * this.m_s1 + m * this.m_s2, I = y + m, this.m_K.col1.Set(s + z + y * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2, A, 0), this.m_K.col2.Set(A, I, 0), A = this.m_K.Solve22(new e, -G, -E), D.x = A.x, D.y = A.y, D.z = 0);
		A = D.x * this.m_perp.x + D.z * this.m_axis.x;
		s = D.x * this.m_perp.y + D.z * this.m_axis.y;
		G = D.x * this.m_s1 + D.y + D.z * this.m_a1;
		D = D.x * this.m_s2 + D.y + D.z * this.m_a2;
		l.x -= this.m_invMassA * A;
		l.y -= this.m_invMassA * s;
		n -= this.m_invIA * G;
		r.x += this.m_invMassB *
			A;
		r.y += this.m_invMassB * s;
		t += this.m_invIB * D;
		d.m_sweep.a = n;
		g.m_sweep.a = t;
		d.SynchronizeTransform();
		g.SynchronizeTransform();
		return u <= b.b2_linearSlop && B <= b.b2_angularSlop
	};
	Box2D.inherit(Q, Box2D.Dynamics.Joints.b2JointDef);
	Q.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	Q.b2PrismaticJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e;
		this.localAnchorB = new e;
		this.localAxisA = new e
	};
	Q.prototype.b2PrismaticJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_prismaticJoint;
		this.localAxisA.Set(1, 0);
		this.referenceAngle = 0;
		this.enableLimit = !1;
		this.upperTranslation = this.lowerTranslation = 0;
		this.enableMotor = !1;
		this.motorSpeed = this.maxMotorForce = 0
	};
	Q.prototype.Initialize = function(b, c, d, e) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA = this.bodyA.GetLocalPoint(d);
		this.localAnchorB = this.bodyB.GetLocalPoint(d);
		this.localAxisA = this.bodyA.GetLocalVector(e);
		this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
	};
	Box2D.inherit(J, Box2D.Dynamics.Joints.b2Joint);
	J.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	J.b2PulleyJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_groundAnchor1 = new e;
		this.m_groundAnchor2 = new e;
		this.m_localAnchor1 = new e;
		this.m_localAnchor2 = new e;
		this.m_u1 = new e;
		this.m_u2 = new e
	};
	J.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	};
	J.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	};
	J.prototype.GetReactionForce = function(b) {
		void 0 ===
			b && (b = 0);
		return new e(b * this.m_impulse * this.m_u2.x, b * this.m_impulse * this.m_u2.y)
	};
	J.prototype.GetReactionTorque = function() {
		return 0
	};
	J.prototype.GetGroundAnchorA = function() {
		var b = this.m_ground.m_xf.position.Copy();
		b.Add(this.m_groundAnchor1);
		return b
	};
	J.prototype.GetGroundAnchorB = function() {
		var b = this.m_ground.m_xf.position.Copy();
		b.Add(this.m_groundAnchor2);
		return b
	};
	J.prototype.GetLength1 = function() {
		var b = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
			c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
			b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
		return Math.sqrt(c * c + b * b)
	};
	J.prototype.GetLength2 = function() {
		var b = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
			c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x),
			b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
		return Math.sqrt(c * c + b * b)
	};
	J.prototype.GetRatio = function() {
		return this.m_ratio
	};
	J.prototype.b2PulleyJoint = function(b) {
		this.__super.b2Joint.call(this, b);
		this.m_ground = this.m_bodyA.m_world.m_groundBody;
		this.m_groundAnchor1.x =
			b.groundAnchorA.x - this.m_ground.m_xf.position.x;
		this.m_groundAnchor1.y = b.groundAnchorA.y - this.m_ground.m_xf.position.y;
		this.m_groundAnchor2.x = b.groundAnchorB.x - this.m_ground.m_xf.position.x;
		this.m_groundAnchor2.y = b.groundAnchorB.y - this.m_ground.m_xf.position.y;
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_ratio = b.ratio;
		this.m_constant = b.lengthA + this.m_ratio * b.lengthB;
		this.m_maxLength1 = f.Min(b.maxLengthA, this.m_constant - this.m_ratio * J.b2_minPulleyLength);
		this.m_maxLength2 = f.Min(b.maxLengthB, (this.m_constant - J.b2_minPulleyLength) / this.m_ratio);
		this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
	};
	J.prototype.InitVelocityConstraints = function(c) {
		var d = this.m_bodyA,
			e = this.m_bodyB,
			f;
		f = d.m_xf.R;
		var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
			j = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
			l = f.col1.x * g + f.col2.x * j,
			j = f.col1.y * g + f.col2.y * j,
			g = l;
		f = e.m_xf.R;
		var m = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
			n = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
			l = f.col1.x * m + f.col2.x * n,
			n = f.col1.y * m + f.col2.y * n,
			m = l;
		f = e.m_sweep.c.x + m;
		var l = e.m_sweep.c.y + n,
			r = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
			u = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
		this.m_u1.Set(d.m_sweep.c.x + g - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), d.m_sweep.c.y + j - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
		this.m_u2.Set(f - r, l - u);
		f = this.m_u1.Length();
		l = this.m_u2.Length();
		f > b.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero();
		l > b.b2_linearSlop ?
			this.m_u2.Multiply(1 / l) : this.m_u2.SetZero();
		0 < this.m_constant - f - this.m_ratio * l ? (this.m_state = B.e_inactiveLimit, this.m_impulse = 0) : this.m_state = B.e_atUpperLimit;
		f < this.m_maxLength1 ? (this.m_limitState1 = B.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = B.e_atUpperLimit;
		l < this.m_maxLength2 ? (this.m_limitState2 = B.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = B.e_atUpperLimit;
		f = g * this.m_u1.y - j * this.m_u1.x;
		l = m * this.m_u2.y - n * this.m_u2.x;
		this.m_limitMass1 = d.m_invMass + d.m_invI * f * f;
		this.m_limitMass2 =
			e.m_invMass + e.m_invI * l * l;
		this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
		this.m_limitMass1 = 1 / this.m_limitMass1;
		this.m_limitMass2 = 1 / this.m_limitMass2;
		this.m_pulleyMass = 1 / this.m_pulleyMass;
		c.warmStarting ? (this.m_impulse *= c.dtRatio, this.m_limitImpulse1 *= c.dtRatio, this.m_limitImpulse2 *= c.dtRatio, c = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, f = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, l = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, r = (-this.m_ratio *
			this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, d.m_linearVelocity.x += d.m_invMass * c, d.m_linearVelocity.y += d.m_invMass * f, d.m_angularVelocity += d.m_invI * (g * f - j * c), e.m_linearVelocity.x += e.m_invMass * l, e.m_linearVelocity.y += e.m_invMass * r, e.m_angularVelocity += e.m_invI * (m * r - n * l)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
	};
	J.prototype.SolveVelocityConstraints = function() {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d;
		d = b.m_xf.R;
		var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
			g = this.m_localAnchor1.y -
			b.m_sweep.localCenter.y,
			j = d.col1.x * e + d.col2.x * g,
			g = d.col1.y * e + d.col2.y * g,
			e = j;
		d = c.m_xf.R;
		var l = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
			m = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
			j = d.col1.x * l + d.col2.x * m,
			m = d.col1.y * l + d.col2.y * m,
			l = j,
			n = 0,
			r = 0;
		this.m_state == B.e_atUpperLimit && (d = b.m_linearVelocity.x + -b.m_angularVelocity * g, j = b.m_linearVelocity.y + b.m_angularVelocity * e, n = c.m_linearVelocity.x + -c.m_angularVelocity * m, r = c.m_linearVelocity.y + c.m_angularVelocity * l, d = -(this.m_u1.x * d + this.m_u1.y * j) - this.m_ratio *
			(this.m_u2.x * n + this.m_u2.y * r), r = this.m_pulleyMass * -d, d = this.m_impulse, this.m_impulse = f.Max(0, this.m_impulse + r), r = this.m_impulse - d, d = -r * this.m_u1.x, j = -r * this.m_u1.y, n = -this.m_ratio * r * this.m_u2.x, r = -this.m_ratio * r * this.m_u2.y, b.m_linearVelocity.x += b.m_invMass * d, b.m_linearVelocity.y += b.m_invMass * j, b.m_angularVelocity += b.m_invI * (e * j - g * d), c.m_linearVelocity.x += c.m_invMass * n, c.m_linearVelocity.y += c.m_invMass * r, c.m_angularVelocity += c.m_invI * (l * r - m * n));
		this.m_limitState1 == B.e_atUpperLimit && (d = b.m_linearVelocity.x +
			-b.m_angularVelocity * g, j = b.m_linearVelocity.y + b.m_angularVelocity * e, d = -(this.m_u1.x * d + this.m_u1.y * j), r = -this.m_limitMass1 * d, d = this.m_limitImpulse1, this.m_limitImpulse1 = f.Max(0, this.m_limitImpulse1 + r), r = this.m_limitImpulse1 - d, d = -r * this.m_u1.x, j = -r * this.m_u1.y, b.m_linearVelocity.x += b.m_invMass * d, b.m_linearVelocity.y += b.m_invMass * j, b.m_angularVelocity += b.m_invI * (e * j - g * d));
		this.m_limitState2 == B.e_atUpperLimit && (n = c.m_linearVelocity.x + -c.m_angularVelocity * m, r = c.m_linearVelocity.y + c.m_angularVelocity * l,
			d = -(this.m_u2.x * n + this.m_u2.y * r), r = -this.m_limitMass2 * d, d = this.m_limitImpulse2, this.m_limitImpulse2 = f.Max(0, this.m_limitImpulse2 + r), r = this.m_limitImpulse2 - d, n = -r * this.m_u2.x, r = -r * this.m_u2.y, c.m_linearVelocity.x += c.m_invMass * n, c.m_linearVelocity.y += c.m_invMass * r, c.m_angularVelocity += c.m_invI * (l * r - m * n))
	};
	J.prototype.SolvePositionConstraints = function() {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			e, g = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
			j = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
			l =
			this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
			n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
			m = 0,
			s = 0,
			r = 0,
			u = 0,
			t = 0,
			y = 0,
			z = 0,
			A = 0;
		this.m_state == B.e_atUpperLimit && (e = c.m_xf.R, m = this.m_localAnchor1.x - c.m_sweep.localCenter.x, s = this.m_localAnchor1.y - c.m_sweep.localCenter.y, t = e.col1.x * m + e.col2.x * s, s = e.col1.y * m + e.col2.y * s, m = t, e = d.m_xf.R, r = this.m_localAnchor2.x - d.m_sweep.localCenter.x, u = this.m_localAnchor2.y - d.m_sweep.localCenter.y, t = e.col1.x * r + e.col2.x * u, u = e.col1.y * r + e.col2.y * u, r = t, e = c.m_sweep.c.x +
			m, t = c.m_sweep.c.y + s, y = d.m_sweep.c.x + r, z = d.m_sweep.c.y + u, this.m_u1.Set(e - g, t - j), this.m_u2.Set(y - l, z - n), e = this.m_u1.Length(), t = this.m_u2.Length(), e > b.b2_linearSlop ? this.m_u1.Multiply(1 / e) : this.m_u1.SetZero(), t > b.b2_linearSlop ? this.m_u2.Multiply(1 / t) : this.m_u2.SetZero(), e = this.m_constant - e - this.m_ratio * t, A = f.Max(A, -e), e = f.Clamp(e + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), z = -this.m_pulleyMass * e, e = -z * this.m_u1.x, t = -z * this.m_u1.y, y = -this.m_ratio * z * this.m_u2.x, z = -this.m_ratio * z * this.m_u2.y, c.m_sweep.c.x +=
			c.m_invMass * e, c.m_sweep.c.y += c.m_invMass * t, c.m_sweep.a += c.m_invI * (m * t - s * e), d.m_sweep.c.x += d.m_invMass * y, d.m_sweep.c.y += d.m_invMass * z, d.m_sweep.a += d.m_invI * (r * z - u * y), c.SynchronizeTransform(), d.SynchronizeTransform());
		this.m_limitState1 == B.e_atUpperLimit && (e = c.m_xf.R, m = this.m_localAnchor1.x - c.m_sweep.localCenter.x, s = this.m_localAnchor1.y - c.m_sweep.localCenter.y, t = e.col1.x * m + e.col2.x * s, s = e.col1.y * m + e.col2.y * s, m = t, e = c.m_sweep.c.x + m, t = c.m_sweep.c.y + s, this.m_u1.Set(e - g, t - j), e = this.m_u1.Length(), e > b.b2_linearSlop ?
			(this.m_u1.x *= 1 / e, this.m_u1.y *= 1 / e) : this.m_u1.SetZero(), e = this.m_maxLength1 - e, A = f.Max(A, -e), e = f.Clamp(e + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), z = -this.m_limitMass1 * e, e = -z * this.m_u1.x, t = -z * this.m_u1.y, c.m_sweep.c.x += c.m_invMass * e, c.m_sweep.c.y += c.m_invMass * t, c.m_sweep.a += c.m_invI * (m * t - s * e), c.SynchronizeTransform());
		this.m_limitState2 == B.e_atUpperLimit && (e = d.m_xf.R, r = this.m_localAnchor2.x - d.m_sweep.localCenter.x, u = this.m_localAnchor2.y - d.m_sweep.localCenter.y, t = e.col1.x * r + e.col2.x * u, u = e.col1.y *
			r + e.col2.y * u, r = t, y = d.m_sweep.c.x + r, z = d.m_sweep.c.y + u, this.m_u2.Set(y - l, z - n), t = this.m_u2.Length(), t > b.b2_linearSlop ? (this.m_u2.x *= 1 / t, this.m_u2.y *= 1 / t) : this.m_u2.SetZero(), e = this.m_maxLength2 - t, A = f.Max(A, -e), e = f.Clamp(e + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), z = -this.m_limitMass2 * e, y = -z * this.m_u2.x, z = -z * this.m_u2.y, d.m_sweep.c.x += d.m_invMass * y, d.m_sweep.c.y += d.m_invMass * z, d.m_sweep.a += d.m_invI * (r * z - u * y), d.SynchronizeTransform());
		return A < b.b2_linearSlop
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength =
			2
	});
	Box2D.inherit(fa, Box2D.Dynamics.Joints.b2JointDef);
	fa.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	fa.b2PulleyJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.groundAnchorA = new e;
		this.groundAnchorB = new e;
		this.localAnchorA = new e;
		this.localAnchorB = new e
	};
	fa.prototype.b2PulleyJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_pulleyJoint;
		this.groundAnchorA.Set(-1, 1);
		this.groundAnchorB.Set(1, 1);
		this.localAnchorA.Set(-1, 0);
		this.localAnchorB.Set(1, 0);
		this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
		this.ratio = 1;
		this.collideConnected = !0
	};
	fa.prototype.Initialize = function(b, c, d, e, f, g, j) {
		void 0 === j && (j = 0);
		this.bodyA = b;
		this.bodyB = c;
		this.groundAnchorA.SetV(d);
		this.groundAnchorB.SetV(e);
		this.localAnchorA = this.bodyA.GetLocalPoint(f);
		this.localAnchorB = this.bodyB.GetLocalPoint(g);
		b = f.x - d.x;
		d = f.y - d.y;
		this.lengthA = Math.sqrt(b * b + d * d);
		d = g.x - e.x;
		e = g.y - e.y;
		this.lengthB = Math.sqrt(d * d + e * e);
		this.ratio = j;
		j = this.lengthA + this.ratio *
			this.lengthB;
		this.maxLengthA = j - this.ratio * J.b2_minPulleyLength;
		this.maxLengthB = (j - J.b2_minPulleyLength) / this.ratio
	};
	Box2D.inherit(O, Box2D.Dynamics.Joints.b2Joint);
	O.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	O.b2RevoluteJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.K = new c;
		this.K1 = new c;
		this.K2 = new c;
		this.K3 = new c;
		this.impulse3 = new j;
		this.impulse2 = new e;
		this.reduced = new e;
		this.m_localAnchor1 = new e;
		this.m_localAnchor2 = new e;
		this.m_impulse = new j;
		this.m_mass =
			new d
	};
	O.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
	};
	O.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	};
	O.prototype.GetReactionForce = function(b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_impulse.x, b * this.m_impulse.y)
	};
	O.prototype.GetReactionTorque = function(b) {
		void 0 === b && (b = 0);
		return b * this.m_impulse.z
	};
	O.prototype.GetJointAngle = function() {
		return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
	};
	O.prototype.GetJointSpeed =
		function() {
			return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
		};
	O.prototype.IsLimitEnabled = function() {
		return this.m_enableLimit
	};
	O.prototype.EnableLimit = function(b) {
		this.m_enableLimit = b
	};
	O.prototype.GetLowerLimit = function() {
		return this.m_lowerAngle
	};
	O.prototype.GetUpperLimit = function() {
		return this.m_upperAngle
	};
	O.prototype.SetLimits = function(b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.m_lowerAngle = b;
		this.m_upperAngle = c
	};
	O.prototype.IsMotorEnabled = function() {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		return this.m_enableMotor
	};
	O.prototype.EnableMotor = function(b) {
		this.m_enableMotor = b
	};
	O.prototype.SetMotorSpeed = function(b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_motorSpeed = b
	};
	O.prototype.GetMotorSpeed = function() {
		return this.m_motorSpeed
	};
	O.prototype.SetMaxMotorTorque = function(b) {
		void 0 === b && (b = 0);
		this.m_maxMotorTorque = b
	};
	O.prototype.GetMotorTorque = function() {
		return this.m_maxMotorTorque
	};
	O.prototype.b2RevoluteJoint = function(b) {
		this.__super.b2Joint.call(this,
			b);
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_referenceAngle = b.referenceAngle;
		this.m_impulse.SetZero();
		this.m_motorImpulse = 0;
		this.m_lowerAngle = b.lowerAngle;
		this.m_upperAngle = b.upperAngle;
		this.m_maxMotorTorque = b.maxMotorTorque;
		this.m_motorSpeed = b.motorSpeed;
		this.m_enableLimit = b.enableLimit;
		this.m_enableMotor = b.enableMotor;
		this.m_limitState = B.e_inactiveLimit
	};
	O.prototype.InitVelocityConstraints = function(c) {
		var d = this.m_bodyA,
			e = this.m_bodyB,
			g, j = 0;
		g = d.m_xf.R;
		var l = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
			n = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
			j = g.col1.x * l + g.col2.x * n,
			n = g.col1.y * l + g.col2.y * n,
			l = j;
		g = e.m_xf.R;
		var m = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
			s = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
			j = g.col1.x * m + g.col2.x * s,
			s = g.col1.y * m + g.col2.y * s,
			m = j;
		g = d.m_invMass;
		var j = e.m_invMass,
			r = d.m_invI,
			u = e.m_invI;
		this.m_mass.col1.x = g + j + n * n * r + s * s * u;
		this.m_mass.col2.x = -n * l * r - s * m * u;
		this.m_mass.col3.x = -n * r - s * u;
		this.m_mass.col1.y = this.m_mass.col2.x;
		this.m_mass.col2.y = g + j + l * l * r + m * m * u;
		this.m_mass.col3.y = l * r + m * u;
		this.m_mass.col1.z = this.m_mass.col3.x;
		this.m_mass.col2.z = this.m_mass.col3.y;
		this.m_mass.col3.z = r + u;
		this.m_motorMass = 1 / (r + u);
		!1 == this.m_enableMotor && (this.m_motorImpulse = 0);
		if (this.m_enableLimit) {
			var t = e.m_sweep.a - d.m_sweep.a - this.m_referenceAngle;
			f.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b.b2_angularSlop ? this.m_limitState = B.e_equalLimits : t <= this.m_lowerAngle ? (this.m_limitState != B.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState =
				B.e_atLowerLimit) : t >= this.m_upperAngle ? (this.m_limitState != B.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = B.e_atUpperLimit) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.z = 0)
		} else this.m_limitState = B.e_inactiveLimit;
		c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x, t = this.m_impulse.y, d.m_linearVelocity.x -= g * c, d.m_linearVelocity.y -= g * t, d.m_angularVelocity -= r * (l * t - n * c + this.m_motorImpulse + this.m_impulse.z), e.m_linearVelocity.x +=
			j * c, e.m_linearVelocity.y += j * t, e.m_angularVelocity += u * (m * t - s * c + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
	};
	O.prototype.SolveVelocityConstraints = function(b) {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			e = 0,
			g = 0,
			j = 0,
			l = 0,
			m = 0,
			n = c.m_linearVelocity,
			r = c.m_angularVelocity,
			u = d.m_linearVelocity,
			t = d.m_angularVelocity,
			y = c.m_invMass,
			z = d.m_invMass,
			A = c.m_invI,
			D = d.m_invI;
		this.m_enableMotor && this.m_limitState != B.e_equalLimits && (g = this.m_motorMass * -(t - r - this.m_motorSpeed), j = this.m_motorImpulse,
			l = b.dt * this.m_maxMotorTorque, this.m_motorImpulse = f.Clamp(this.m_motorImpulse + g, -l, l), g = this.m_motorImpulse - j, r -= A * g, t += D * g);
		if (this.m_enableLimit && this.m_limitState != B.e_inactiveLimit) {
			b = c.m_xf.R;
			g = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
			j = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
			e = b.col1.x * g + b.col2.x * j;
			j = b.col1.y * g + b.col2.y * j;
			g = e;
			b = d.m_xf.R;
			l = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
			m = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
			e = b.col1.x * l + b.col2.x * m;
			m = b.col1.y * l + b.col2.y * m;
			l =
				e;
			b = u.x + -t * m - n.x - -r * j;
			var E = u.y + t * l - n.y - r * g;
			this.m_mass.Solve33(this.impulse3, -b, -E, -(t - r));
			this.m_limitState == B.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == B.e_atLowerLimit ? (e = this.m_impulse.z + this.impulse3.z, 0 > e && (this.m_mass.Solve22(this.reduced, -b, -E), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)) : this.m_limitState == B.e_atUpperLimit && (e =
				this.m_impulse.z + this.impulse3.z, 0 < e && (this.m_mass.Solve22(this.reduced, -b, -E), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0));
			n.x -= y * this.impulse3.x;
			n.y -= y * this.impulse3.y;
			r -= A * (g * this.impulse3.y - j * this.impulse3.x + this.impulse3.z);
			u.x += z * this.impulse3.x;
			u.y += z * this.impulse3.y;
			t += D * (l * this.impulse3.y - m * this.impulse3.x + this.impulse3.z)
		} else b = c.m_xf.R, g = this.m_localAnchor1.x -
			c.m_sweep.localCenter.x, j = this.m_localAnchor1.y - c.m_sweep.localCenter.y, e = b.col1.x * g + b.col2.x * j, j = b.col1.y * g + b.col2.y * j, g = e, b = d.m_xf.R, l = this.m_localAnchor2.x - d.m_sweep.localCenter.x, m = this.m_localAnchor2.y - d.m_sweep.localCenter.y, e = b.col1.x * l + b.col2.x * m, m = b.col1.y * l + b.col2.y * m, l = e, this.m_mass.Solve22(this.impulse2, -(u.x + -t * m - n.x - -r * j), -(u.y + t * l - n.y - r * g)), this.m_impulse.x += this.impulse2.x, this.m_impulse.y += this.impulse2.y, n.x -= y * this.impulse2.x, n.y -= y * this.impulse2.y, r -= A * (g * this.impulse2.y - j * this.impulse2.x),
			u.x += z * this.impulse2.x, u.y += z * this.impulse2.y, t += D * (l * this.impulse2.y - m * this.impulse2.x);
		c.m_linearVelocity.SetV(n);
		c.m_angularVelocity = r;
		d.m_linearVelocity.SetV(u);
		d.m_angularVelocity = t
	};
	O.prototype.SolvePositionConstraints = function() {
		var c = 0,
			d, e = this.m_bodyA,
			g = this.m_bodyB,
			j = 0,
			l = 0,
			n = 0,
			m = 0;
		if (this.m_enableLimit && this.m_limitState != B.e_inactiveLimit) {
			var c = g.m_sweep.a - e.m_sweep.a - this.m_referenceAngle,
				s = 0;
			this.m_limitState == B.e_equalLimits ? (c = f.Clamp(c - this.m_lowerAngle, -b.b2_maxAngularCorrection,
				b.b2_maxAngularCorrection), s = -this.m_motorMass * c, j = f.Abs(c)) : this.m_limitState == B.e_atLowerLimit ? (c -= this.m_lowerAngle, j = -c, c = f.Clamp(c + b.b2_angularSlop, -b.b2_maxAngularCorrection, 0), s = -this.m_motorMass * c) : this.m_limitState == B.e_atUpperLimit && (j = c -= this.m_upperAngle, c = f.Clamp(c - b.b2_angularSlop, 0, b.b2_maxAngularCorrection), s = -this.m_motorMass * c);
			e.m_sweep.a -= e.m_invI * s;
			g.m_sweep.a += g.m_invI * s;
			e.SynchronizeTransform();
			g.SynchronizeTransform()
		}
		d = e.m_xf.R;
		s = this.m_localAnchor1.x - e.m_sweep.localCenter.x;
		c = this.m_localAnchor1.y - e.m_sweep.localCenter.y;
		l = d.col1.x * s + d.col2.x * c;
		c = d.col1.y * s + d.col2.y * c;
		s = l;
		d = g.m_xf.R;
		var r = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
			u = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
			l = d.col1.x * r + d.col2.x * u,
			u = d.col1.y * r + d.col2.y * u,
			r = l,
			n = g.m_sweep.c.x + r - e.m_sweep.c.x - s,
			m = g.m_sweep.c.y + u - e.m_sweep.c.y - c,
			t = n * n + m * m;
		d = Math.sqrt(t);
		var l = e.m_invMass,
			y = g.m_invMass,
			z = e.m_invI,
			A = g.m_invI,
			D = 10 * b.b2_linearSlop;
		t > D * D && (t = 1 / (l + y), n = t * -n, m = t * -m, e.m_sweep.c.x -= 0.5 * l * n, e.m_sweep.c.y -=
			0.5 * l * m, g.m_sweep.c.x += 0.5 * y * n, g.m_sweep.c.y += 0.5 * y * m, n = g.m_sweep.c.x + r - e.m_sweep.c.x - s, m = g.m_sweep.c.y + u - e.m_sweep.c.y - c);
		this.K1.col1.x = l + y;
		this.K1.col2.x = 0;
		this.K1.col1.y = 0;
		this.K1.col2.y = l + y;
		this.K2.col1.x = z * c * c;
		this.K2.col2.x = -z * s * c;
		this.K2.col1.y = -z * s * c;
		this.K2.col2.y = z * s * s;
		this.K3.col1.x = A * u * u;
		this.K3.col2.x = -A * r * u;
		this.K3.col1.y = -A * r * u;
		this.K3.col2.y = A * r * r;
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.AddM(this.K3);
		this.K.Solve(O.tImpulse, -n, -m);
		n = O.tImpulse.x;
		m = O.tImpulse.y;
		e.m_sweep.c.x -=
			e.m_invMass * n;
		e.m_sweep.c.y -= e.m_invMass * m;
		e.m_sweep.a -= e.m_invI * (s * m - c * n);
		g.m_sweep.c.x += g.m_invMass * n;
		g.m_sweep.c.y += g.m_invMass * m;
		g.m_sweep.a += g.m_invI * (r * m - u * n);
		e.SynchronizeTransform();
		g.SynchronizeTransform();
		return d <= b.b2_linearSlop && j <= b.b2_angularSlop
	};
	Box2D.postDefs.push(function() {
		Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new e
	});
	Box2D.inherit(P, Box2D.Dynamics.Joints.b2JointDef);
	P.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	P.b2RevoluteJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,
			arguments);
		this.localAnchorA = new e;
		this.localAnchorB = new e
	};
	P.prototype.b2RevoluteJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_revoluteJoint;
		this.localAnchorA.Set(0, 0);
		this.localAnchorB.Set(0, 0);
		this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
		this.enableMotor = this.enableLimit = !1
	};
	P.prototype.Initialize = function(b, c, d) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA = this.bodyA.GetLocalPoint(d);
		this.localAnchorB = this.bodyB.GetLocalPoint(d);
		this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
	};
	Box2D.inherit(aa, Box2D.Dynamics.Joints.b2Joint);
	aa.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	aa.b2WeldJoint = function() {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchorA = new e;
		this.m_localAnchorB = new e;
		this.m_impulse = new j;
		this.m_mass = new d
	};
	aa.prototype.GetAnchorA = function() {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
	};
	aa.prototype.GetAnchorB = function() {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
	};
	aa.prototype.GetReactionForce = function(b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_impulse.x, b * this.m_impulse.y)
	};
	aa.prototype.GetReactionTorque = function(b) {
		void 0 === b && (b = 0);
		return b * this.m_impulse.z
	};
	aa.prototype.b2WeldJoint = function(b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchorA.SetV(b.localAnchorA);
		this.m_localAnchorB.SetV(b.localAnchorB);
		this.m_referenceAngle = b.referenceAngle;
		this.m_impulse.SetZero();
		this.m_mass = new d
	};
	aa.prototype.InitVelocityConstraints = function(b) {
		var c, d = 0,
			e = this.m_bodyA,
			f = this.m_bodyB;
		c = e.m_xf.R;
		var g = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
			j = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
			d = c.col1.x * g + c.col2.x * j,
			j = c.col1.y * g + c.col2.y * j,
			g = d;
		c = f.m_xf.R;
		var l = this.m_localAnchorB.x - f.m_sweep.localCenter.x,
			n = this.m_localAnchorB.y - f.m_sweep.localCenter.y,
			d = c.col1.x * l + c.col2.x * n,
			n = c.col1.y * l + c.col2.y * n,
			l = d;
		c = e.m_invMass;
		var d = f.m_invMass,
			r = e.m_invI,
			u = f.m_invI;
		this.m_mass.col1.x = c + d + j * j * r + n * n * u;
		this.m_mass.col2.x = -j * g * r - n * l * u;
		this.m_mass.col3.x = -j * r - n * u;
		this.m_mass.col1.y =
			this.m_mass.col2.x;
		this.m_mass.col2.y = c + d + g * g * r + l * l * u;
		this.m_mass.col3.y = g * r + l * u;
		this.m_mass.col1.z = this.m_mass.col3.x;
		this.m_mass.col2.z = this.m_mass.col3.y;
		this.m_mass.col3.z = r + u;
		b.warmStarting ? (this.m_impulse.x *= b.dtRatio, this.m_impulse.y *= b.dtRatio, this.m_impulse.z *= b.dtRatio, e.m_linearVelocity.x -= c * this.m_impulse.x, e.m_linearVelocity.y -= c * this.m_impulse.y, e.m_angularVelocity -= r * (g * this.m_impulse.y - j * this.m_impulse.x + this.m_impulse.z), f.m_linearVelocity.x += d * this.m_impulse.x, f.m_linearVelocity.y +=
			d * this.m_impulse.y, f.m_angularVelocity += u * (l * this.m_impulse.y - n * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero()
	};
	aa.prototype.SolveVelocityConstraints = function() {
		var b, c = 0,
			d = this.m_bodyA,
			e = this.m_bodyB,
			f = d.m_linearVelocity,
			g = d.m_angularVelocity,
			l = e.m_linearVelocity,
			m = e.m_angularVelocity,
			n = d.m_invMass,
			r = e.m_invMass,
			u = d.m_invI,
			t = e.m_invI;
		b = d.m_xf.R;
		var y = this.m_localAnchorA.x - d.m_sweep.localCenter.x,
			z = this.m_localAnchorA.y - d.m_sweep.localCenter.y,
			c = b.col1.x * y + b.col2.x * z,
			z = b.col1.y * y + b.col2.y *
			z,
			y = c;
		b = e.m_xf.R;
		var A = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
			B = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
			c = b.col1.x * A + b.col2.x * B,
			B = b.col1.y * A + b.col2.y * B,
			A = c;
		b = l.x - m * B - f.x + g * z;
		var c = l.y + m * A - f.y - g * y,
			D = m - g,
			E = new j;
		this.m_mass.Solve33(E, -b, -c, -D);
		this.m_impulse.Add(E);
		f.x -= n * E.x;
		f.y -= n * E.y;
		g -= u * (y * E.y - z * E.x + E.z);
		l.x += r * E.x;
		l.y += r * E.y;
		m += t * (A * E.y - B * E.x + E.z);
		d.m_angularVelocity = g;
		e.m_angularVelocity = m
	};
	aa.prototype.SolvePositionConstraints = function() {
		var c, d = 0,
			e = this.m_bodyA,
			g = this.m_bodyB;
		c = e.m_xf.R;
		var l = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
			n = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
			d = c.col1.x * l + c.col2.x * n,
			n = c.col1.y * l + c.col2.y * n,
			l = d;
		c = g.m_xf.R;
		var r = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
			m = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
			d = c.col1.x * r + c.col2.x * m,
			m = c.col1.y * r + c.col2.y * m,
			r = d;
		c = e.m_invMass;
		var d = g.m_invMass,
			s = e.m_invI,
			t = g.m_invI,
			u = g.m_sweep.c.x + r - e.m_sweep.c.x - l,
			y = g.m_sweep.c.y + m - e.m_sweep.c.y - n,
			z = g.m_sweep.a - e.m_sweep.a - this.m_referenceAngle,
			A = 10 *
			b.b2_linearSlop,
			B = Math.sqrt(u * u + y * y),
			D = f.Abs(z);
		B > A && (s *= 1, t *= 1);
		this.m_mass.col1.x = c + d + n * n * s + m * m * t;
		this.m_mass.col2.x = -n * l * s - m * r * t;
		this.m_mass.col3.x = -n * s - m * t;
		this.m_mass.col1.y = this.m_mass.col2.x;
		this.m_mass.col2.y = c + d + l * l * s + r * r * t;
		this.m_mass.col3.y = l * s + r * t;
		this.m_mass.col1.z = this.m_mass.col3.x;
		this.m_mass.col2.z = this.m_mass.col3.y;
		this.m_mass.col3.z = s + t;
		A = new j;
		this.m_mass.Solve33(A, -u, -y, -z);
		e.m_sweep.c.x -= c * A.x;
		e.m_sweep.c.y -= c * A.y;
		e.m_sweep.a -= s * (l * A.y - n * A.x + A.z);
		g.m_sweep.c.x += d * A.x;
		g.m_sweep.c.y +=
			d * A.y;
		g.m_sweep.a += t * (r * A.y - m * A.x + A.z);
		e.SynchronizeTransform();
		g.SynchronizeTransform();
		return B <= b.b2_linearSlop && D <= b.b2_angularSlop
	};
	Box2D.inherit(U, Box2D.Dynamics.Joints.b2JointDef);
	U.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	U.b2WeldJointDef = function() {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e;
		this.localAnchorB = new e
	};
	U.prototype.b2WeldJointDef = function() {
		this.__super.b2JointDef.call(this);
		this.type = B.e_weldJoint;
		this.referenceAngle =
			0
	};
	U.prototype.Initialize = function(b, c, d) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
		this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
	}
})();
(function() {
	var b = Box2D.Dynamics.b2DebugDraw;
	b.b2DebugDraw = function() {
		this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
		var b = this;
		this.m_sprite = {
			graphics: {
				clear: function() {
					b.m_ctx.clearRect(0, 0, b.m_ctx.canvas.width, b.m_ctx.canvas.height)
				}
			}
		}
	};
	b.prototype._color = function(b, d) {
		return "rgba(" + ((b & 16711680) >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + d + ")"
	};
	b.prototype.b2DebugDraw = function() {
		this.m_drawFlags = 0
	};
	b.prototype.SetFlags = function(b) {
		void 0 === b && (b = 0);
		this.m_drawFlags =
			b
	};
	b.prototype.GetFlags = function() {
		return this.m_drawFlags
	};
	b.prototype.AppendFlags = function(b) {
		void 0 === b && (b = 0);
		this.m_drawFlags |= b
	};
	b.prototype.ClearFlags = function(b) {
		void 0 === b && (b = 0);
		this.m_drawFlags &= ~b
	};
	b.prototype.SetSprite = function(b) {
		this.m_ctx = b
	};
	b.prototype.GetSprite = function() {
		return this.m_ctx
	};
	b.prototype.SetDrawScale = function(b) {
		void 0 === b && (b = 0);
		this.m_drawScale = b
	};
	b.prototype.GetDrawScale = function() {
		return this.m_drawScale
	};
	b.prototype.SetLineThickness = function(b) {
		void 0 === b && (b =
			0);
		this.m_lineThickness = b;
		this.m_ctx.strokeWidth = b
	};
	b.prototype.GetLineThickness = function() {
		return this.m_lineThickness
	};
	b.prototype.SetAlpha = function(b) {
		void 0 === b && (b = 0);
		this.m_alpha = b
	};
	b.prototype.GetAlpha = function() {
		return this.m_alpha
	};
	b.prototype.SetFillAlpha = function(b) {
		void 0 === b && (b = 0);
		this.m_fillAlpha = b
	};
	b.prototype.GetFillAlpha = function() {
		return this.m_fillAlpha
	};
	b.prototype.SetXFormScale = function(b) {
		void 0 === b && (b = 0);
		this.m_xformScale = b
	};
	b.prototype.GetXFormScale = function() {
		return this.m_xformScale
	};
	b.prototype.DrawPolygon = function(b, d, f) {
		if (d) {
			var e = this.m_ctx,
				j = this.m_drawScale;
			e.beginPath();
			e.strokeStyle = this._color(f.color, this.m_alpha);
			e.moveTo(b[0].x * j, b[0].y * j);
			for (f = 1; f < d; f++) e.lineTo(b[f].x * j, b[f].y * j);
			e.lineTo(b[0].x * j, b[0].y * j);
			e.closePath();
			e.stroke()
		}
	};
	b.prototype.DrawSolidPolygon = function(b, d, f) {
		if (d) {
			var e = this.m_ctx,
				j = this.m_drawScale;
			e.beginPath();
			e.strokeStyle = this._color(f.color, this.m_alpha);
			e.fillStyle = this._color(f.color, this.m_fillAlpha);
			e.moveTo(b[0].x * j, b[0].y * j);
			for (f =
				1; f < d; f++) e.lineTo(b[f].x * j, b[f].y * j);
			e.lineTo(b[0].x * j, b[0].y * j);
			e.closePath();
			e.fill();
			e.stroke()
		}
	};
	b.prototype.DrawCircle = function(b, d, f) {
		if (d) {
			var e = this.m_ctx,
				j = this.m_drawScale;
			e.beginPath();
			e.strokeStyle = this._color(f.color, this.m_alpha);
			e.arc(b.x * j, b.y * j, d * j, 0, 2 * Math.PI, !0);
			e.closePath();
			e.stroke()
		}
	};
	b.prototype.DrawSolidCircle = function(b, d, f, e) {
		if (d) {
			var j = this.m_ctx,
				n = this.m_drawScale,
				l = b.x * n,
				g = b.y * n;
			j.moveTo(0, 0);
			j.beginPath();
			j.strokeStyle = this._color(e.color, this.m_alpha);
			j.fillStyle =
				this._color(e.color, this.m_fillAlpha);
			j.arc(l, g, d * n, 0, 2 * Math.PI, !0);
			j.moveTo(l, g);
			j.lineTo((b.x + f.x * d) * n, (b.y + f.y * d) * n);
			j.closePath();
			j.fill();
			j.stroke()
		}
	};
	b.prototype.DrawSegment = function(b, d, f) {
		var e = this.m_ctx,
			j = this.m_drawScale;
		e.strokeStyle = this._color(f.color, this.m_alpha);
		e.beginPath();
		e.moveTo(b.x * j, b.y * j);
		e.lineTo(d.x * j, d.y * j);
		e.closePath();
		e.stroke()
	};
	b.prototype.DrawTransform = function(b) {
		var d = this.m_ctx,
			f = this.m_drawScale;
		d.beginPath();
		d.strokeStyle = this._color(16711680, this.m_alpha);
		d.moveTo(b.position.x * f, b.position.y * f);
		d.lineTo((b.position.x + this.m_xformScale * b.R.col1.x) * f, (b.position.y + this.m_xformScale * b.R.col1.y) * f);
		d.strokeStyle = this._color(65280, this.m_alpha);
		d.moveTo(b.position.x * f, b.position.y * f);
		d.lineTo((b.position.x + this.m_xformScale * b.R.col2.x) * f, (b.position.y + this.m_xformScale * b.R.col2.y) * f);
		d.closePath();
		d.stroke()
	}
})();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;
"undefined" != typeof global && (global.Box2D = Box2D);
ig.baked = !0;
ig.module("plugins.box2d.lib").defines(function() {});
ig.baked = !0;
ig.module("plugins.box2d.game").requires("plugins.box2d.lib", "impact.game").defines(function() {
	ig.Box2DGame = ig.Game.extend({
		collisionRects: [],
		debugCollisionRects: !1,
		worldVelocityIterations: 6,
		worldPositionIterations: 6,
		updateTimestep: 1 / 60,
		updateTimestepAccumulator: 0,
		updateTimestepAccumulatorRatio: 0,
		lastUpdateTime: -1,
		nWorldSteps: 0,
		bodyDestroyQueue: [],
		defaultTileSegmentsDef: {},
		defaultTileVerticesDef: {},
		loadLevel: function(b) {
			this.collisionMap = ig.CollisionMap.staticNoCollision;
			for (var c = 0; c < b.layer.length; c++) {
				var d =
					b.layer[c];
				"collision" == d.name && (this.collisionMap = new ig.CollisionMap(d.tilesize, d.data))
			}
			this.mergedShape = this.mergeRectangles(this.collisionMap);
			ig.world = this.createWorldFromCollisionMap(this.collisionMap, this.mergedShape);
			this.setupContactListener();
			this.parent(b)
		},
		createWorldFromMap: function(b, c, d, f) {
			var e = new Box2D.Collision.b2AABB;
			e.lowerBound.Set(0, 0);
			e.upperBound.Set((c + 1) * f * Box2D.SCALE, (d + 1) * f * Box2D.SCALE);
			e = new Box2D.Common.Math.b2Vec2(0, ig.game.gravity * Box2D.SCALE);
			world = new Box2D.Dynamics.b2World(e, !0);
			b = ig.copy(b);
			this.collisionRects = [];
			for (e = 0; e < d; e++)
				for (var j = 0; j < c; j++)
					if (b[e][j]) {
						var n = this._extractRectFromMap(b, c, d, j, e);
						this.collisionRects.push(n)
					}
			for (c = 0; c < this.collisionRects.length; c++) d = this.collisionRects[c], b = new Box2D.Dynamics.b2BodyDef, b.position.Set(d.x * f * Box2D.SCALE + d.width * f / 2 * Box2D.SCALE, d.y * f * Box2D.SCALE + d.height * f / 2 * Box2D.SCALE), b = world.CreateBody(b), e = new Box2D.Collision.Shapes.b2PolygonShape, e.SetAsBox(d.width * f / 2 * Box2D.SCALE, d.height * f / 2 * Box2D.SCALE), b.CreateFixture2(e);
			return world
		},
		_extractRectFromMap: function(b, c, d, f, e) {
			for (var j = {
					x: f,
					y: e,
					width: 1,
					height: 1
				}, n = f + 1; n < c && b[e][n]; n++) j.width++, b[e][n] = 0;
			for (c = e + 1; c < d; c++) {
				e = 0;
				for (n = f; n < f + j.width && b[c][n]; n++) e++;
				if (e == j.width) {
					j.height++;
					for (n = f; n < f + j.width; n++) b[c][n] = 0
				} else break
			}
			return j
		},
		update: function() {
			if (!ig.game.box2dPaused && ig.world) {
				var b = ig.system.clock.delta() - this.lastUpdateTime;
				this.lastUpdateTime = ig.system.clock.delta();
				this.updateTimestepAccumulator += b;
				this.nWorldSteps = Math.floor(this.updateTimestepAccumulator /
					this.updateTimestep);
				0 < this.nWorldSteps && (this.updateTimestepAccumulator -= this.nWorldSteps * this.updateTimestep);
				this.updateTimestepAccumulatorRatio = this.updateTimestepAccumulator / this.updateTimestep;
				for (var b = Math.min(this.nWorldSteps, 5), c = 0; c < b; c++) {
					this.resetSmoothStates();
					ig.world.Step(this.updateTimestep, this.worldVelocityIterations, this.worldPositionIterations);
					for (var d = ig.world.GetBodyList(); d; d = d.m_next)
						if (d.IsAwake()) {
							var f = d.GetFixtureList();
							if (!f || !f.IsSensor()) {
								var f = 0.6 > Math.abs(d.GetAngularVelocity()),
									e = 0.6 > Math.abs(d.GetLinearVelocity().Length());
								f && e ? 30 < d.slowTime ? (d.slowTime = 0, d.SetAwake(!1)) : d.slowTime += 1 : d.slowTime = 0
							}
						}
				}
				ig.world.ClearForces();
				this.smoothStates()
			}
			this.parent();
			if (0 < this.bodyDestroyQueue.length) {
				for (c = 0; c < this.bodyDestroyQueue.length; c++) ig.world.DestroyBody(this.bodyDestroyQueue[c]);
				this.bodyDestroyQueue = []
			}
		},
		smoothStates: function() {
			for (var b = 1 - this.updateTimestepAccumulatorRatio, c = 0; c < this.entities.length; c++) {
				var d = this.entities[c];
				null != d.body && d.dynamicType != Box2D.Dynamics.b2Body.b2_staticBody &&
					(d.pos.x = this.updateTimestepAccumulatorRatio * d.body.GetPosition().x + b * d.previousBodyPosition.x, d.pos.y = this.updateTimestepAccumulatorRatio * d.body.GetPosition().y + b * d.previousBodyPosition.y, d.angle = this.updateTimestepAccumulatorRatio * d.body.GetAngle() + b * d.previousBodyAngle, d.currentAnim && (d.currentAnim.update(), d.currentAnim.angle = d.angle))
			}
		},
		resetSmoothStates: function() {
			for (var b = 0; b < this.entities.length; b++) {
				var c = this.entities[b];
				null != c.body && c.dynamicType != Box2D.Dynamics.b2Body.b2_staticBody &&
					(c.pos.x = c.body.GetPosition().x, c.previousBodyPosition.x = c.pos.x, c.pos.y = c.body.GetPosition().y, c.previousBodyPosition.y = c.pos.y, c.angle = c.body.GetAngle(), c.previousBodyAngle = c.body.GetAngle(), c.currentAnim && (c.currentAnim.update(), c.currentAnim.angle = c.angle))
			}
		},
		draw: function() {
			this.parent();
			if (this.debugCollisionRects)
				for (var b = this.collisionMap.tilesize, c = 0; c < this.collisionRects.length; c++) {
					var d = this.collisionRects[c];
					ig.system.context.strokeStyle = "#00ff00";
					ig.system.context.strokeRect(ig.system.getDrawPos(d.x *
						b - this.screen.x), ig.system.getDrawPos(d.y * b - this.screen.y), ig.system.getDrawPos(d.width * b), ig.system.getDrawPos(d.height * b))
				}
		},
		queueDestroyBody: function(b) {
			this.bodyDestroyQueue.push(b)
		},
		mergeRectangles: function(b) {
			if (void 0 != b.data) {
				for (var c = ig.copy(b.data), d = [], f = 0; f < c.length; f++) {
					void 0 == d[f] && (d[f] = []);
					for (var e = 0; e < c[0].length; e++) d[f].push(0)
				}
				c = this._shapesFromCollisionMap(b);
				b = [];
				e = [];
				for (f = 0; f < c.length; f++) 1 == c[f].id ? (e.push(c[f]), d[c[f].tile.y][c[f].tile.x] = e[e.length - 1]) : b.push(c[f]);
				for (f =
					e.length - 1; 0 <= f; f--) 1 == e[f].id && (e[f].neighbours = this.checkNeighbour(d, e[f].tile.x, e[f].tile.y));
				d = this.linkSquares(e, d);
				return b = b.concat(d)
			}
		},
		sideAbleCheck: function(b, c, d, f) {
			return b ? b[d] ? b[d][c] ? b[d][c].neighbours ? -1 < b[d][c].neighbours.indexOf(f) ? !0 : !1 : !1 : !1 : !1 : !1
		},
		linkSquares: function(b, c) {
			for (var d = [], f = [], e = 0; e < b.length; e++) {
				var j = b[e],
					n = j.tile.x,
					l = j.tile.y;
				if (!(-1 < d.indexOf(j)))
					if (d.push(j), -1 < j.neighbours.indexOf("right")) {
						for (var g = 1; !0 == this.sideAbleCheck(c, j.tile.x + g, j.tile.y, "right");) j.tile.x +
							g < n && (n = j.tile.x + g), d.push(c[j.tile.y][j.tile.x + g]), g++;
						c[j.tile.y][n].settings.size.x *= g + 1;
						for (var r = c[j.tile.y][n].settings.vertices, z = 0; z < r.length; z++) r[z].x *= g + 1;
						d.push(c[j.tile.y][j.tile.x + g + 1]);
						f.push(c[j.tile.y][n])
					} else if (-1 < j.neighbours.indexOf("down") && -1 == j.neighbours.indexOf("right") && -1 == j.neighbours.indexOf("left")) {
					j.tile.y + g < l && (l = j.tile.y + g);
					r = 0;
					for (n = 1; !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "down") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") && !1 == this.sideAbleCheck(c,
							j.tile.x, j.tile.y + n, "left");) r = 1, d.push(c[j.tile.y + n][j.tile.x]), n++;
					!0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "left") ? r = 1 : !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") ? (d.splice(d.indexOf(c[j.tile.y + n][j.tile.x]), 1), n--) : !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "left") && (d.splice(d.indexOf(c[j.tile.y +
						n][j.tile.x]), 1), n--);
					if (1 == r) {
						c[l][j.tile.x].settings.size.y *= n + 1;
						r = c[l][j.tile.x].settings.vertices;
						for (z = 0; z < r.length; z++) r[z].y *= n + 1;
						c[j.tile.y + n] && d.push(c[j.tile.y + n][j.tile.x])
					}
					f.push(c[l][j.tile.x])
				} else if (!(-1 < j.neighbours.indexOf("left")))
					if (-1 < j.neighbours.indexOf("up")) {
						if (!0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "down") && (!0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "right") || !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "left"))) d.push(c[j.tile.y][j.tile.x]), f.push(c[j.tile.y][j.tile.x])
					} else d.push(c[j.tile.y][j.tile.x]),
						f.push(c[j.tile.y][j.tile.x])
			}
			return f
		},
		getNeighbourTiles: function(b, c, d, f) {
			switch (f) {
				case "left":
					return [{
						x: c - 1,
						y: d
					}];
				case "right":
					return [{
						x: c + 1,
						y: d
					}];
				case "up":
					return [{
						x: c,
						y: d - 1
					}];
				case "down":
					return [{
						x: c,
						y: d + 1
					}];
				case "topL":
					return [{
						x: c,
						y: d - 1
					}, {
						x: c - 1,
						y: d
					}, {
						x: c - 1,
						y: d - 1
					}];
				case "topR":
					return [{
						x: c,
						y: d - 1
					}, {
						x: c + 1,
						y: d
					}, {
						x: c + 1,
						y: d - 1
					}];
				case "bottomL":
					return [{
						x: c,
						y: d + 1
					}, {
						x: c - 1,
						y: d
					}, {
						x: c - 1,
						y: d + 1
					}];
				case "bottomR":
					return [{
						x: c,
						y: d + 1
					}, {
						x: c + 1,
						y: d
					}, {
						x: c + 1,
						y: d + 1
					}]
			}
		},
		checkNeighbour: function(b, c, d) {
			var f = [];
			0 != this.checkArr(b,
				c - 1, d) && f.push("left");
			0 != this.checkArr(b, c, d + 1) && f.push("down");
			0 != this.checkArr(b, c + 1, d) && f.push("right");
			0 != this.checkArr(b, c, d - 1) && f.push("up");
			return f
		},
		checkArr: function(b, c, d) {
			return void 0 == b[d] ? 0 : void 0 == b[d][c] ? 0 : b[d][c]
		},
		createWorldFromCollisionMap: function(b, c) {
			var d = new Box2D.Common.Math.b2Vec2(0, 0),
				d = new Box2D.Common.Math.b2Vec2(0, ig.game.gravity * Box2D.SCALE);
			world = new Box2D.Dynamics.b2World(d, !0);
			for (var d = void 0 != c ? c : this._shapesFromCollisionMap(this.collisionMap), f = 0; f < d.length; f++) {
				var e =
					d[f],
					j = e.settings.size.x,
					n = e.settings.size.y,
					l = e.settings.vertices,
					g = new Box2D.Dynamics.b2BodyDef;
				g.position.Set(e.x * Box2D.SCALE + j / 2 * Box2D.SCALE, e.y * Box2D.SCALE + n / 2 * Box2D.SCALE);
				j = world.CreateBody(g);
				e = new Box2D.Collision.Shapes.b2PolygonShape;
				e.SetAsArray(l, l.length);
				j.CreateFixture2(e)
			}
			return world
		},
		setupContactListener: function() {
			var b = function(b, c, e) {
					var j = c.GetFixtureA().GetBody().entity,
						n = c.GetFixtureB().GetBody().entity;
					if (j && n) j[b](n, c, e), n[b](j, c, e);
					else if (j && !n) j[b](null, c, e);
					else if (n &&
						!j) n[b](null, c, e)
				},
				c = new Box2D.Dynamics.b2ContactListener;
			c.BeginContact = function(c) {
				b("beginContact", c)
			};
			c.EndContact = function(c) {
				b("endContact", c)
			};
			c.PostSolve = function(c, f) {
				b("postSolve", c, f)
			};
			c.PreSolve = function(c, f) {
				b("preSolve", c, f)
			};
			ig.world.SetContactListener(c)
		},
		_shapesFromCollisionMap: function(b) {
			var c = [];
			if (b instanceof ig.CollisionMap) {
				var d = ig.copy(b.data),
					f = b.tilesize,
					e = b.width,
					j = b.height,
					n, l, g, r, z, y, A, B, I, D;
				for (y = 0; y < j; y++)
					for (z = 0; z < e; z++) {
						D = this._shapeFromTile(b, z, y);
						I = {
							id: b.data[y][z],
							ix: z,
							iy: y,
							x: z * f,
							y: y * f,
							width: f,
							height: f,
							shape: D
						};
						if (0 < D.vertices.length) {
							l = [];
							n = D.vertices;
							g = D.segments;
							A = 0;
							for (B = g.length; A < B; A++) {
								r = g[A];
								var t = n[r.a],
									G = I.width / 20,
									E = I.height / 20;
								l[r.a] = {
									x: t.x.map(0, 1, -G, G),
									y: t.y.map(0, 1, -E, E)
								}
							}
							D.vertices = l;
							D.vertices[D.vertices.length - 1].x === D.vertices[0].x && D.vertices[D.vertices.length - 1].y === D.vertices[0].y && D.vertices.pop();
							n = {
								id: I.id,
								settings: {
									size: {
										x: I.width,
										y: I.height
									},
									vertices: ig.copy(D.vertices)
								},
								x: I.x,
								y: I.y,
								tile: {
									x: z,
									y: y
								}
							};
							c.push(n)
						}
						d[y][z] = I
					}
			}
			return c
		},
		_shapeFromTile: function(b, c, d) {
			var f;
			f = b.data[d][c];
			b = this._verticesFromTile(b, c, d);
			var e;
			if (b)
				if (this.defaultTileSegmentsDef[f]) e = this.defaultTileSegmentsDef[f];
				else {
					this.defaultTileSegmentsDef[f] = e = [];
					f = 0;
					for (c = b.length; f < c; f++) {
						var j = b[f];
						d = f === c - 1 ? 0 : f + 1;
						var n = b[d],
							l = n.x - j.x,
							j = n.y - j.y,
							n = Math.sqrt(l * l + j * j);
						e.push({
							a: f,
							b: d,
							normal: {
								x: j / n,
								y: -l / n
							}
						})
					}
				}
			return {
				vertices: b,
				segments: e || []
			}
		},
		_verticesFromTile: function(b, c, d) {
			c = b.data[d][c];
			if (this.defaultTileVerticesDef[c]) d = this.defaultTileVerticesDef[c];
			else if (1 === c) d = [{
				x: 0,
				y: 0
			}, {
				x: 1,
				y: 0
			}, {
				x: 1,
				y: 1
			}, {
				x: 0,
				y: 1
			}];
			else {
				d = [];
				if (b = b.tiledef[c]) {
					var f = d[0] = {
							x: b[0],
							y: b[1]
						},
						e = d[1] = {
							x: b[2],
							y: b[3]
						};
					b = f.x;
					var f = f.y,
						j = e.x,
						e = e.y,
						n = j - b,
						l = e - f,
						g = d[2] = {
							x: 0 > l ? 1 : 0,
							y: 0 < n ? 1 : 0
						},
						r = g.x,
						g = g.y,
						z;
					z = !1;
					if (1 > Math.abs(n) && 1 > Math.abs(l)) {
						var n = _utv2.pointQuadrant(b, f, 0.5, 0.5),
							l = _utv2.pointQuadrant(j, e, 0.5, 0.5),
							y = _utv2.pointQuadrant(r, g, 0.5, 0.5);
						!(n & y) && !(l & y) && (z = !0)
					}!0 === z ? (r !== g ? (z = r, l = g, 1 == r ? (g = 1, n = 0) : (g = 0, n = 1)) : (n = r, l = 1 == r ? z = 0 : z = 1), d[3] = {
						x: z,
						y: g
					}, d[4] = {
						x: n,
						y: l
					}) : (r !== g ? (z =
						r, l = g, 1 == r ? (g = Math.max(f, e), n = Math.min(b, j)) : (g = Math.min(f, e), n = Math.max(b, j))) : (n = r, 1 == r ? (z = Math.min(b, j), l = Math.min(f, e)) : (z = Math.max(b, j), l = Math.max(f, e))), z === b && g === f || z === j && g === e ? n === b && l === f || n === j && l === e || (d[3] = {
						x: n,
						y: l
					}) : d[3] = {
						x: z,
						y: g
					});
					d = this._pointsToConvexHull(d)
				}
				this.defaultTileVerticesDef[c] = d
			}
			return d
		},
		_pointsToConvexHull: function(b) {
			if (3 > b.length) return b;
			var c, d, f = 0,
				e = b[f],
				j;
			c = 1;
			for (d = b.length; c < d; c++) j = b[c], j.y === e.y ? j.x < e.x && (f = c, e = j) : j.y < e.y && (f = c, e = j);
			var n = [],
				l;
			c = 0;
			for (d = b.length; c <
				d; c++) c !== f && (j = b[c], l = {
				x: j.x,
				y: j.y
			}, l.angle = Math.atan((j.y - e.y) / (j.x - e.x)), 0 > l.angle && (l.angle += Math.PI), l.distance = (j.x - e.x) * (j.x - e.x) + (j.y - e.y) * (j.y - e.y), l.index = c, n.push(l));
			n.sort(function(b, c) {
				return b.angle < c.angle ? -1 : b.angle > c.angle ? 1 : b.distance < c.distance ? -1 : b.distance > c.distance ? 1 : 0
			});
			n.unshift(n[n.length - 1], {
				x: e.x,
				y: e.y,
				index: f
			});
			f = 2;
			c = 3;
			for (d = b.length; c <= d; c++) {
				for (; 0 >= this._pointsCW(n[f - 1], n[f], n[c]);) f--;
				f++;
				e = n[c];
				n[c] = n[f];
				n[f] = e
			}
			d = [];
			for (c = 0; c <= f; c++) d[c] = b[n[c].index];
			return d
		},
		_pointsCW: function(b, c, d) {
			return (c.x - b.x) * (d.y - b.y) - (c.y - b.y) * (d.x - b.x)
		}
	});
	Box2D.Common.b2Settings.b2_maxTranslation = 10;
	Box2D.Common.b2Settings.b2_maxTranslationSquared = 100;
	Box2D.Common.b2Settings.b2_velocityThreshold = 1
});
ig.baked = !0;
ig.module("plugins.box2d.entity").requires("impact.entity", "plugins.box2d.game").defines(function() {
	ig.Box2DEntity = ig.Entity.extend({
		body: null,
		angle: 0,
		box2dType: null,
		dynamicType: null,
		density: null,
		friction: null,
		restitution: null,
		rotate: 0,
		previousBodyPosition: {
			x: 0,
			y: 0
		},
		previousBodyAngle: 0,
		slowTime: 0,
		init: function(b, c, d) {
			this.parent(b, c, d);
			ig.global.wm || this.createBody()
		},
		ready: function() {
			!ig.global.wm && null == this.body && this.createBody();
			0 < this.rotate && (this.angle = this.rotate * Math.PI / 180)
		},
		createBody: function() {
			if (this.body) {
				var b =
					this.body.GetPosition();
				this.pos = {
					x: b.x / Box2D.SCALE - this.size.x / 2,
					y: b.y / Box2D.SCALE - this.size.y / 2
				}
			}
			b = new Box2D.Dynamics.b2BodyDef;
			b.position = new Box2D.Common.Math.b2Vec2((this.pos.x + this.size.x / 2) * Box2D.SCALE, (this.pos.y + this.size.y / 2) * Box2D.SCALE);
			this.previousBodyPosition = {
				x: b.position.x,
				y: b.position.y
			};
			this.rotate && (b.angle = this.rotate * Math.PI / 180);
			this.previousBodyAngle = b.angle;
			null == this.dynamicType || 0 == this.dynamicType ? b.type = Box2D.Dynamics.b2Body.b2_dynamicBody : 1 == this.dynamicType ? b.type = Box2D.Dynamics.b2Body.b2_kinematicBody :
				2 == this.dynamicType && (b.type = Box2D.Dynamics.b2Body.b2_staticBody);
			this.body = ig.world.CreateBody(b);
			null == this.body && (ig.world.Step(), this.body = ig.world.CreateBody(b));
			this.body.entity = this;
			b = this.fixture = new Box2D.Dynamics.b2FixtureDef;
			null == this.box2dType || 0 == this.box2dType ? (b.shape = new Box2D.Collision.Shapes.b2PolygonShape, b.shape.SetAsBox(this.size.x / 2 * Box2D.SCALE, this.size.y / 2 * Box2D.SCALE)) : 1 == this.box2dType ? (b.shape = new Box2D.Collision.Shapes.b2CircleShape, b.shape.SetRadius(this.size.x / 2 * Box2D.SCALE)) :
				2 == this.box2dType && (b.shape = new Box2D.Collision.Shapes.b2PolygonShape, b.shape.SetAsArray(this.vertices, this.vertices.length));
			this.density && (b.density = this.density);
			this.friction && (b.friction = this.friction);
			this.restitution && (b.restitution = this.restitution);
			this.body.CreateFixture(b);
			this.body.SetUserData(this)
		},
		update: function() {
			var b = this.body.GetPosition();
			this.previousBodyPosition = {
				x: this.pos.x,
				y: this.pos.y
			};
			this.pos = {
				x: b.x / Box2D.SCALE - this.size.x / 2,
				y: b.y / Box2D.SCALE - this.size.y / 2
			};
			this.previousBodyAngle =
				this.angle;
			this.angle = this.body.GetAngle().round(2);
			this.currentAnim && (this.currentAnim.update(), this.currentAnim.angle = this.angle);
			if (0 < this.tweens.length) {
				for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
				this.tweens = b
			}
		},
		beginContact: function() {},
		endContact: function() {},
		postSolve: function() {},
		preSolve: function() {},
		processCollisionQueues: function() {
			for (var b in this.checkQueue) {
				var c = this.checkQueue[b];
				0 < this.entityContactCount[b] ? this.check(c) :
					delete this.checkQueue[b]
			}
			for (var d in this.collideQueue)
				for (b in this.collideQueue[d]) c = this.collideQueue[d][b], this.collideWith(c, d), delete this.collideQueue[d][b]
		},
		kill: function() {
			this.body && ig.game.queueDestroyBody(this.body);
			this.parent()
		},
		setScale: function(b, c) {
			this.parent(b, c);
			null != this.body && this.scaleChange && (ig.world.DestroyBody(this.body), this.createBody(), this.scaleChange = !1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
	ig.Entity.inject({
		scale: {
			x: 1,
			y: 1
		},
		_offset: {
			x: 0,
			y: 0
		},
		_scale: {
			x: 1,
			y: 1
		},
		_size: {
			x: 0,
			y: 0
		},
		init: function(b, c, d) {
			this.parent(b, c, d);
			this._offset.x = this.offset.x;
			this._offset.y = this.offset.y;
			this._size.x = this.size.x;
			this._size.y = this.size.y;
			this.setScale(this.scale.x, this.scale.y)
		},
		draw: function() {
			var b = ig.system.context;
			b.save();
			b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
				this.offset.y - ig.game.screen.y));
			b.scale(this._scale.x, this._scale.y);
			null != this.currentAnim && this.currentAnim.draw(0, 0);
			b.restore()
		},
		setScale: function(b, c) {
			var d = this.size.x,
				f = this.size.y;
			this.scale.x = b || this.scale.x;
			this.scale.y = c || this.scale.y;
			this._scale.x = this.scale.x / ig.system.scale;
			this._scale.y = this.scale.y / ig.system.scale;
			this.offset.x = this._offset.x * this._scale.x;
			this.offset.y = this._offset.y * this._scale.y;
			this.size.x = this._size.x * this._scale.x;
			this.size.y = this._size.y * this._scale.y;
			this.pos.x +=
				(d - this.size.x) / 2;
			this.pos.y += (f - this.size.y) / 2
		}
	})
});
ig.baked = !0;
ig.module("plugins.gamedist").defines(function() {
	window.GD_OPTIONS = {
		gameId: "722176c4785042368e5b4f734cc14b9e",
		advertisementSettings: {
			debug: !1,
			autoplay: !1,
			locale: "en"
		},
		onEvent: function(b) {
			switch (b.name) {
				case "SDK_GAME_START":
					ig.gd.unfreez();
					if ("function" === typeof ig.gd.onAdClose) ig.gd.onAdClose();
					ig.gd.onAdClose = 0;
					break;
				case "SDK_GAME_PAUSE":
					ig.gd.freez()
			}
		}
	};
	var b, c = document.getElementsByTagName("script")[0];
	document.getElementById("gamedistribution-jssdk") || (b = document.createElement("script"), b.id =
		"gamedistribution-jssdk", b.src = "", c.parentNode.insertBefore(b, c));
	ig.Gd = ig.Class.extend({
		pausedMidplay: 0,
		prevMuted: {
			bgm: 0,
			sfx: 0
		},
		onAdClose: 0,
		adShowing: 0,
		isFreez: 0,
		createTestButton: function() {
			this.createDiv("Resume", 5, "green", "white", function() {
				ig.game && ig.gd && ig.gd.unfreez()
			});
			this.createDiv("Pause", 70, "red", "white", function() {
				ig.game && ig.gd && ig.gd.freez()
			})
		},
		createDiv: function(b, c, e, j, n) {
			var l = ig.$new("button");
			document.body.appendChild(l);
			l.textContent =
				b;
			l.style.position = "absolute";
			l.style.color = j;
			l.style.background = e;
			l.style.top = "5px";
			l.style.left = c + "px";
			l.style.padding = "5px";
			l.style.fontSize = "12px";
			l.style.fontFamily = "Arial";
			l.style.cursor = "pointer";
			l.style["z-index"] = 999999;
			l.onclick = n
		},
		freez: function() {
			// gdsdk && (ig.soundHandler.muteAll(!0), ig.game && ig.game.pauseGame(), this.isFreez = 1)
		},
		unfreez: function() {
			// gdsdk && (this.isFreez = this.adShowing = 0, ig.soundHandler.unmuteAll(!0), ig.game && ig.game.resumeGame())
		},
		show: function(b) {
			// gdsdk ? (console.log("ads showing"),
			// 	this.adShowing || (this.adShowing = 1, this.onAdClose = b || 0, gdsdk.showBanner())) : 
			b()
		}
	});
	ig.gd = new ig.Gd
});
ig.baked = !0;
ig.module("plugins.data.color-rgb").defines(function() {
	ColorRGB = function(b, c, d, f) {
		this.r = b || 0;
		this.g = c || 0;
		this.b = d || 0;
		this.a = f || 0
	};
	ColorRGB.prototype = {
		setRandomColor: function() {
			this.r = Math.round(255 * Math.random());
			this.g = Math.round(255 * Math.random());
			this.b = Math.round(255 * Math.random())
		},
		getStyle: function() {
			return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
		},
		getHex: function() {
			for (var b = this.r.toString(16), c = this.g.toString(16), d = this.b.toString(16); 2 > b.length;) b = "0" + b;
			for (; 2 > c.length;) c = "0" +
				c;
			for (; 2 > d.length;) d = "0" + d;
			return "#" + b + c + d
		},
		getInvertedColor: function() {
			return new ColorRGB(255 - this.r, 255 - this.g, 255 - this.b, 255 - this.a)
		},
		clone: function() {
			return new ColorRGB(this.r, this.g, this.b, this.a)
		}
	}
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
	ig.BrandingSplash = ig.Class.extend({
		init: function() {
			ig.game.spawnEntity(EntityBranding, 0, 0);
			console.log("spawn branding")
		}
	});
	EntityBranding = ig.Entity.extend({
		gravityFactor: 0,
		size: {
			x: 32,
			y: 32
		},
		splash: new ig.Image("branding/splash1.png"),
		init: function(b, c, d) {
			this.parent(b, c, d);
			320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
			this.pos.x = (ig.system.width - this.size.x) /
				2;
			this.pos.y = -this.size.y - 200;
			this.endPosY = (ig.system.height - this.size.y) / 2;
			b = this.tween({
				pos: {
					y: this.endPosY
				}
			}, 0.5, {
				easing: ig.Tween.Easing.Bounce.EaseIn
			});
			c = this.tween({}, 2.5, {
				onComplete: function() {
					ig.game.director.loadLevel(ig.game.director.currentLevel)
				}
			});
			b.chain(c);
			b.start();
			this.currentAnim = this.anims.idle
		},
		createClickableLayer: function() {
			console.log("Build clickable layer");
			this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
		},
		doesClickableLayerExist: function(b) {
			for (k in dynamicClickableEntityDivs)
				if (k ==
					b) return !0;
			return !1
		},
		checkClickableLayer: function(b, c, d) {
			"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
		},
		createClickableOutboundLayer: function(b, c, d, f) {
			var e = ig.$new("div");
			e.id = b;
			document.body.appendChild(e);
			e = $("#" + e.id);
			e.css("float", "left");
			e.css("position", "absolute");
			if (ig.ua.mobile) {
				var j = window.innerHeight / mobileHeight,
					n = window.innerWidth /
					mobileWidth;
				e.css("left", this.pos.x * n);
				e.css("top", this.pos.y * j);
				e.css("width", this.size.x * n);
				e.css("height", this.size.y * j)
			} else j = w / 2 - destW / 2, n = h / 2 - destH / 2, console.log(j, n), e.css("left", j + this.pos.x * multiplier), e.css("top", n + this.pos.y * multiplier), e.css("width", this.size.x * multiplier), e.css("height", this.size.y * multiplier);
			f ? e.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : e.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
			dynamicClickableEntityDivs[b] = {};
			dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
			dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
			dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		},
		draw: function() {
			ig.system.context.fillStyle = "#ffffff";
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			ig.system.context.fillStyle = "#000";
			ig.system.context.font = "12px Arial";
			ig.system.context.textAlign = "left";
			320 >= ig.system.width ?
				ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
			this.parent();
			this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
		}
	})
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.global.marketjs-entity").requires("impact.entity").defines(function() {
	EntityMarketjsEntity = ig.Entity.extend({
		oriPos: {
			x: null,
			y: null
		},
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.oriPos.x = this.pos.x;
			this.oriPos.y = this.pos.y;
			this.setPosition()
		},
		update: function() {
			this.parent();
			this.killOutOfLayer()
		},
		killOutOfLayer: function() {
			!1 != this.killOutLayer && (this.pos.x < ig.game.screen.x - this.size.x || this.pos.x > ig.game.screen.x + ig.system.width || this.pos.y < ig.game.screen.y - this.size.y || this.pos.y >
				ig.game.screen.y + ig.system.height) && this.kill()
		},
		setSpriteSheet: function(b) {
			this[b + "Sheet"] = new ig.AnimationSheet(this[b + "SheetInfo"].sheetImage.path, this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX, this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY)
		},
		setSize: function(b) {
			this.size.x = this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX;
			this.size.y = this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY
		},
		setPosition: function() {
			"center" == this.horizontal ?
				this.pos.x -= this.size.x / 2 : "left" == this.horizontal ? this.pos.x = this.pos.x : "right" == this.horizontal && (this.pos.x -= this.size.x);
			"center" == this.vertical ? this.pos.y -= this.size.y / 2 : "top" == this.vertical ? this.pos.y = this.pos.y : "bottom" == this.vertical && (this.pos.y -= this.size.y)
		},
		setFlip: function() {
			!0 == this.flip.x && (this.curentAnimation.flip.x = !0);
			!0 == this.flip.y && (this.curentAnimation.flip.y = !0)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector", "game.entities.global.marketjs-entity").defines(function() {
	EntityButton = EntityMarketjsEntity.extend({
		gravityFactor: 0,
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.A,
		fillColor: null,
		isEnabled: !0,
		zIndex: 95E3,
		init: function(b, c, d) {
			this.parent(b, c, d);
			!ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
			b = Math.floor(256 * Math.random());
			c = Math.floor(256 * Math.random());
			d = Math.floor(256 * Math.random());
			this.fillColor =
				"rgba(" + b + "," + d + "," + c + ",1)"
		},
		update: function() {
			this.parent()
		},
		clicked: function() {},
		clicking: function() {},
		released: function() {},
		setEnabled: function(b) {
			!0 == b ? (this.type = ig.Entity.TYPE.A, this.isEnabled = !0) : (this.type = ig.Entity.TYPE.NONE, this.isEnabled = !1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
	ClickableDivLayer = ig.Class.extend({
		pos: new Vector2(0, 0),
		size: new Vector2(0, 0),
		identifier: null,
		invisImagePath: "media/graphics/misc/invisible.png",
		init: function(b) {
			this.pos = new Vector2(b.pos.x, b.pos.y);
			this.size = new Vector2(b.size.x, b.size.y);
			var c = "more-games",
				d = "www.google.com",
				f = !1;
			b.div_layer_name && (c = b.div_layer_name);
			b.link && (d = b.link);
			b.newWindow && (f = b.newWindow);
			this.createClickableLayer(c, d, f)
		},
		createClickableLayer: function(b,
			c, d) {
			this.identifier = b;
			var f = ig.domHandler.getElementById("#" + b);
			f ? (ig.domHandler.show(f), ig.domHandler.attr(f, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
		},
		update: function(b, c) {
			this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
				this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
		},
		createClickableOutboundLayer: function(b, c, d, f) {
			var e = ig.domHandler.create("div");
			ig.domHandler.attr(e, "id", b);
			var j = ig.domHandler.create("a");
			f ? (ig.domHandler.attr(j, "href", c), ig.domHandler.attr(j, "target", "_blank")) : ig.domHandler.attr(j, "href", c);
			c = ig.domHandler.create("img");
			ig.domHandler.css(c, {
				width: "100%",
				height: "100%"
			});
			ig.domHandler.attr(c, "src", d);
			d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x,
				ig.sizeHandler.scaleRatioMultiplier.y);
			if (ig.ua.mobile) {
				f = ig.domHandler.getElementById("#canvas");
				f = ig.domHandler.getOffsets(f);
				var n = f.left,
					l = f.top;
				console.log(f.left);
				ig.sizeHandler.disableStretchToFitOnMobileFlag ? (f = Math.floor(n + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", l = Math.floor(l + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (f = Math.floor(this.pos.x *
					ig.sizeHandler.sizeRatio.x) + "px", l = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
			} else f = ig.domHandler.getElementById("#canvas"), f = ig.domHandler.getOffsets(f), n = f.left, l = f.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (f = Math.floor(n + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", l = Math.floor(l + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) +
				"px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (f = Math.floor(n + this.pos.x * d) + "px", l = Math.floor(l + this.pos.y * d) + "px", n = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px");
			ig.domHandler.css(e, {
				"float": "left",
				position: "absolute",
				left: f,
				top: l,
				width: n,
				height: d,
				"z-index": 3
			});
			ig.domHandler.addEvent(e, "mousemove", ig.input.mousemove.bind(ig.input), !1);
			ig.domHandler.appendChild(j, c);
			ig.domHandler.appendChild(e, j);
			ig.domHandler.appendToBody(e);
			ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
			ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
			ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
			ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
	EntityButtonBrandingLogo = EntityButton.extend({
		type: ig.Entity.TYPE.A,
		gravityFactor: 0,
		logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
		zIndex: 10001,
		size: {
			x: 64,
			y: 66
		},
		clickableLayer: null,
		link: null,
		newWindow: !1,
		div_layer_name: "branding-logo",
		name: "brandinglogo",
		init: function(b, c, d) {
			this.parent(b, c, d);
			if (!ig.global.wm) {
				if ("undefined" == typeof wm)
					if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
						new ClickableDivLayer(this));
					else {
						this.kill();
						return
					}
				this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
			}
		},
		show: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.show(b)
		},
		hide: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.hide(b)
		},
		clicked: function() {},
		clicking: function() {},
		released: function() {}
	})
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
	EntityBrandingLogoPlaceholder = ig.Entity.extend({
		gravityFactor: 0,
		size: {
			x: 32,
			y: 32
		},
		_wmDrawBox: !0,
		_wmBoxColor: "rgba(0, 0, 255, 0.7)",
		init: function(b, c, d) {
			this.parent(b, c, d);
			if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
				case "true":
					console.log("centralize true");
					centralize = !0;
					break;
				case "false":
					console.log("centralize false");
					centralize = !1;
					break;
				default:
					console.log("default ... centralize false"), centralize = !1
			} else b = "branding-logo", centralize = !1;
			if ("undefined" == typeof wm) {
				if (_SETTINGS.Branding.Logo.Enabled) try {
					ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
						div_layer_name: b,
						centralize: centralize
					})
				} catch (f) {
					console.log(f)
				}
				this.kill()
			}
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-text").requires("game.entities.buttons.button", "plugins.data.vector").defines(function() {
	EntityButtonText = EntityButton.extend({
		textColor: "#FF0FFF",
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.context = ig.system.context
		},
		draw: function() {
			this.parent();
			null != this.text && (this.context.font = this.textSize + "px janda-manatee", this.context.textAlign = "center",
				this.context.textBaseline = "middle", this.context.fillStyle = this.textColor, this.context.fillText(this.text, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2))
		},
		show: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.show(b)
		},
		hide: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.hide(b)
		},
		released: function() {}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button-text", "plugins.clickable-div-layer").defines(function() {
	EntityButtonMoreGames = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-mainmenu/btn-moregames.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 2,
		isCLickable: !1,
		clickableLayer: null,
		link: null,
		newWindow: !1,
		div_layer_name: "more-games",
		name: "moregames",
		allowChange: !1,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (_SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
		},
		update: function() {
			this.parent();
			ig.game.disableButtonMoreGames ? this.hide() : this.show()
		},
		over: function() {
			!ig.ua.mobile &&
				ig.game.allowToClick && this.setScale(1.1, 1.1)
		},
		leave: function() {
			ig.ua.mobile || this.setScale(1, 1)
		},
		show: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.show(b)
		},
		hide: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.hide(b)
		},
		easeIn: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.easallowToClickeButton = !0;
					var b =
						ig.domHandler.getElementById("#" + this.div_layer_name);
					ig.domHandler.show(b)
				}.bind(this)
			}).start()
		},
		easeOut: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y + ig.system.height - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Linear.EaseNone,
				onComplete: function() {
					ig.game.allowToClick = !0;
					var b = ig.domHandler.getElementById("#" + this.div_layer_name);
					ig.domHandler.hide(b)
				}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
	EntityOpeningShield = ig.Entity.extend({
		size: {
			x: 48,
			y: 48
		},
		move: 0,
		mIconAnim: 0,
		shieldAnim: 0,
		titleAnim: 0,
		shieldImage: new ig.Image("media/graphics/opening/shield.png"),
		mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
		titleImage: new ig.Image("media/graphics/opening/title.png"),
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			if (!ig.wm)
				if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
					this.initTimer = new ig.Timer(0.1);
					try {
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
					} catch (b) {
						console.log(b)
					}
				} else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
		},
		update: function() {
			this.parent();
			this.updateOriginalShieldOpening()
		},
		draw: function() {
			this.parent();
			ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
		},
		updateOriginalShieldOpening: function() {
			this.initTimer && 0 < this.initTimer.delta() &&
				(this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
			this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.001), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
			this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
			this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
				null);
			this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
			this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
		},
		drawOriginalShieldOpening: function() {
			if (this.moveTimer) {
				var b = ig.system.context;
				b.save();
				var c = ig.system.width / 2,
					d = ig.system.height / 2;
				b.translate(c, d);
				b.rotate(this.move * Math.PI / 180);
				b.beginPath();
				b.moveTo(0, 0);
				for (var f = 0, e = 1; 48 >= e; e += 1) b.lineTo(0 + 800 * Math.cos(2 * e * Math.PI / 48), 0 + 800 * Math.sin(2 * e * Math.PI / 48)), f++, 2 == f && (f = 0, b.lineTo(0, 0));
				b.translate(-c, -d);
				c = b.createRadialGradient(c, d, 100, c, d, 250);
				c.addColorStop(0, "rgba(255,255,255,0.1)");
				c.addColorStop(1, "rgba(0,0,0,0)");
				b.fillStyle = c;
				b.fill();
				b.restore()
			}
			this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
			this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
				166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
			ig.system.context.globalAlpha = 1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
	EntityOpeningKitty = ig.Entity.extend({
		size: {
			x: 48,
			y: 48
		},
		kittyAnim: -1,
		kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
		kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
		soundKey: "kittyopeningSound",
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			if (!ig.wm)
				if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
					this.initTimer = new ig.Timer(0.1);
					try {
						ig.soundHandler.sfxPlayer.play(this.soundKey)
					} catch (b) {
						console.log(b)
					}
				} else ig.game.director.nextLevel(),
					ig.system.context.globalAlpha = 1, this.kill()
		},
		update: function() {
			this.parent();
			this.updateKittyOpening()
		},
		draw: function() {
			this.parent();
			ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
		},
		updateKittyOpening: function() {
			this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
			this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
				(this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
			this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
		},
		drawKittyOpening: function() {
			var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
			b.addColorStop(0, "#ffed94");
			b.addColorStop(1, "#ffcd85");
			ig.system.context.fillStyle = b;
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
				2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
			ig.system.context.globalAlpha = 1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
	EntityPointer = ig.Entity.extend({
		checkAgainst: ig.Entity.TYPE.BOTH,
		isFirstPressed: !1,
		isPressed: !1,
		isReleased: !1,
		isHovering: !1,
		hoveringItem: null,
		objectArray: [],
		clickedObjectList: [],
		ignorePause: !0,
		zIndex: 5E3,
		check: function(b) {
			this.objectArray.push(b)
		},
		clickObject: function(b) {
			this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
			this.isPressed && !this.isReleased && "function" == typeof b.clicking &&
				b.clicking();
			this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
		},
		downAnim: function() {},
		upAnim: function() {},
		refreshPos: function() {
			this.pos = ig.game.io.getClickPos();
			this.pos.x += ig.game.screen.x;
			this.pos.y += ig.game.screen.y;
			this.pos.x -= 0.5 * this.size.x;
			this.pos.y -= 0.5 * this.size.y
		},
		update: function() {
			this.parent();
			this.refreshPos();
			var b = null,
				c = -1;
			for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
			if (null != b) null != this.hoveringItem ? (this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over && b.over()), this.isReleased && (null != this.clickedObjectList[0] && this.hoveringItem != this.clickedObjectList[0]) && ("function" == typeof this.clickedObjectList[0].releasedOutside && this.clickedObjectList[0].releasedOutside(), this.clickedObjectList = [])) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
			else if (null !=
				this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
				for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
				this.clickedObjectList = []
			}
			this.isFirstPressed = ig.input.pressed("click");
			this.isReleased = ig.input.released("click");
			this.isPressed = ig.input.state("click");
			ig.input.pressed("click") && this.downAnim();
			ig.input.released("click") && this.upAnim()
		},
		addToClickedObjectList: function(b) {
			this.clickedObjectList.push(b)
		},
		removeFromClickedObjectList: function(b) {
			for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
				var f = this.clickedObjectList[d];
				f != b && c.push(f)
			}
			this.clickedObjectList = c
		}
	})
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
	EntityPointerSelector = EntityPointer.extend({
		zIndex: 1E3,
		_wmDrawBox: !0,
		_wmBoxColor: "rgba(0, 0, 255, 0.7)",
		size: {
			x: 20,
			y: 20
		},
		init: function(b, c, d) {
			this.parent(b, c, d)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
	EntitySelect = ig.Entity.extend({
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		canSelect: !1,
		canSelectTimerDuration: 0.35,
		zIndex: 99999,
		isHovering: !1,
		isSelected: !1,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
		},
		doesClickableLayerExist: function(b) {
			for (k in dynamicClickableEntityDivs)
				if (k == b) return !0;
			return !1
		},
		checkClickableLayer: function(b,
			c, d) {
			"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
		},
		createClickableOutboundLayer: function(b, c, d, f) {
			var e = ig.$new("div");
			e.id = b;
			document.body.appendChild(e);
			$("#" + e.id).css("float", "left");
			$("#" + e.id).css("width", this.size.x * multiplier);
			$("#" + e.id).css("height", this.size.y * multiplier);
			$("#" + e.id).css("position", "absolute");
			var j = w / 2 - destW / 2,
				n = h /
				2 - destH / 2;
			w == mobileWidth ? ($("#" + e.id).css("left", this.pos.x), $("#" + e.id).css("top", this.pos.y)) : ($("#" + e.id).css("left", j + this.pos.x * multiplier), $("#" + e.id).css("top", n + this.pos.y * multiplier));
			f ? $("#" + e.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + e.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
			dynamicClickableEntityDivs[b] = {};
			dynamicClickableEntityDivs[b].width = $("#" + e.id).width();
			dynamicClickableEntityDivs[b].height =
				$("#" + e.id).height();
			dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		},
		hovered: function() {
			this.isHovering = !0;
			this.dehoverOthers()
		},
		dehoverOthers: function() {
			var b = ig.game.getEntitiesByType(EntitySelect);
			for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
		},
		deselectOthers: function() {
			var b = ig.game.getEntitiesByType(EntitySelect);
			for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
		},
		update: function() {
			this.parent();
			this.canSelectTimer && 0 <
				this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
		}
	})
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
	LevelOpening = {
		entities: [{
			type: "EntityOpeningKitty",
			x: 520,
			y: 212
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.entities.buttons.button-sound").requires("game.entities.buttons.button").defines(function() {
	EntityButtonSound = EntityButton.extend({
		type: ig.Entity.TYPE.A,
		gravityFactor: 0,
		logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
		zIndex: 10001,
		size: {
			x: 50,
			y: 50
		},
		mutetest: !1,
		name: "soundtest",
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		draw: function() {
			this.parent();
			ig.system.context.fillRect(this.pos.x, this.pos.y, 50, 50)
		},
		clicked: function() {
			console.log("pressed");
			this.mutetest ? (console.log("unmute"), ig.soundHandler.unmuteAll(!0), this.mutetest = !1) : (console.log("mute"), ig.soundHandler.muteAll(!0), this.mutetest = !0)
		},
		clicking: function() {},
		released: function() {}
	})
});
ig.baked = !0;
ig.module("game.entities.test").requires("impact.entity").defines(function() {
	EntityTest = ig.Entity.extend({
		zIndex: 99999,
		pos: new Vector2(0, 0),
		size: new Vector2(20, 20),
		color: new ColorRGB(125, 255, 125, 1),
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			b.fillStyle = this.color.getHex();
			b.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.test-control").requires("impact.entity", "game.entities.test").defines(function() {
	EntityTestControl = ig.Entity.extend({
		zIndex: 99999,
		size: new Vector2(20, 20),
		testEnt: null,
		tween: null,
		init: function(b, c, d) {
			this.parent(b, c, d);
			ig.global.wm || (ig.game.testControl = this, this.initTestCase3());
			ig.game.spawnEntity(ig.FullscreenButton, 5, 5, {
				enterImage: new ig.Image("media/graphics/misc/enter-fullscreen-transparent.png"),
				exitImage: new ig.Image("media/graphics/misc/exit-fullscreen-transparent.png")
			})
		},
		initTestCase1: function() {
			this.initTestCase1Initialized = !0;
			this.testEnt = ig.game.spawnEntity(EntityTest, 200, 200);
			this.tweenSlow = (new ig.TweenDef(this.testEnt.pos)).to({
				x: 100,
				y: 100
			}, 2E3).easing(ig.Tween.Easing.Bounce.EaseOut).interpolation(ig.Tween.Interpolation.Bezier).repeat(2).yoyo(!0);
			this.tweenFast = (new ig.TweenDef(this.testEnt.pos)).to({
				x: 300,
				y: 300
			}, 500).repeat(4).yoyo(!0);
			this.tweenSlow.chain(this.tweenFast);
			this.tweenFast.chain(this.tweenSlow);
			this.tweenFast.start()
		},
		initTestCase2: function() {
			this.initTestCase2Initialized = !0;
			this.coordsTween = (new ig.TweenDef({
				x: 0,
				y: 0
			})).to({
				x: 100,
				y: 100
			}, 1E3).easing(ig.Tween.Easing.Bounce.EaseInOut).onStart(function(b) {
				console.log("Start", b);
				this.coordsTween.pause()
			}.bind(this)).onUpdate(function() {
				0.5 <= this.coordsTween._currentElapsed && this.coordsTween.stop()
			}.bind(this)).onStop(function(b) {
				console.log("Stop", b)
			}.bind(this)).onComplete(function(b) {
				console.log("Complete", b)
			}.bind(this)).onPause(function(b) {
				console.log("Pause", b);
				this.coordsTween.resume()
			}.bind(this)).onResume(function(b) {
				console.log("Resume",
					b)
			}.bind(this)).start()
		},
		initTestCase3: function() {
			this.initTestCase3Initialized = !0;
			this.spawnTweenEntity();
			this.spawnTweenControlButtons()
		},
		initTestCase4: function() {
			this.initTestCase4Initialized = !0;
			this.testEntityA = ig.game.spawnEntity(EntityTest, 450, 200, {
				control: this,
				size: new Vector2(20, 40)
			});
			this.testEntityB = ig.game.spawnEntity(EntityTest, 475, 200, {
				control: this,
				size: new Vector2(40, 20)
			});
			this.testEntityB.color.r = 255;
			this.testEntityB.color.g = 0;
			this.testEntityB.color.b = 0
		},
		spawnTweenEntity: function() {
			this.tweenEntity =
				ig.game.spawnEntity(EntityTest, 895, 49, {
					control: this,
					color: new ColorRGB(255, 125, 125, 1)
				});
			this.tweenControl = (new ig.TweenDef(this.tweenEntity.pos)).to({
				y: 330
			}, 5E3)
		},
		spawnTweenControlButtons: function() {
			this.tweenControlButtons = {
				start: ig.game.spawnEntity(EntityButton, 800, 50, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				}),
				stop: ig.game.spawnEntity(EntityButton, 800, 100, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				}),
				pause: ig.game.spawnEntity(EntityButton,
					800, 150, {
						control: this,
						size: new Vector2(68, 48),
						color: new ColorRGB(255, 125, 125, 1)
					}),
				resume: ig.game.spawnEntity(EntityButton, 800, 200, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				}),
				end: ig.game.spawnEntity(EntityButton, 800, 250, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				}),
				pGame: ig.game.spawnEntity(EntityButton, 800, 300, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				})
			};
			this.setupTweenControlButtons()
		},
		setupTweenControlButtons: function() {
			var b =
				null;
			for (buttonKey in this.tweenControlButtons) b = this.tweenControlButtons[buttonKey], b.name = buttonKey, b.backgroundColor = b.color.getStyle(), b.foregroundColor = b.color.getInvertedColor().getStyle(), b.draw = function() {
				ig.system.context.fillStyle = this.backgroundColor;
				ig.system.context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
				ig.system.context.fillStyle = this.foregroundColor;
				ig.system.context.font = "18px Arial";
				ig.system.context.textBaseline = "middle";
				ig.system.context.textAlign = "center";
				ig.system.context.fillText(this.name,
					this.pos.x + 0.5 * this.size.x, this.pos.y + 0.5 * this.size.y)
			};
			this.tweenControlButtons.start.clicked = function() {
				console.log("start");
				this.control.tweenControl.start()
			};
			this.tweenControlButtons.start.clicking = function() {};
			this.tweenControlButtons.start.released = function() {};
			this.tweenControlButtons.stop.clicked = function() {
				console.log("stop");
				this.control.tweenControl.stop()
			};
			this.tweenControlButtons.stop.clicking = function() {};
			this.tweenControlButtons.stop.released = function() {};
			this.tweenControlButtons.pause.clicked =
				function() {
					console.log("pause");
					this.control.tweenControl.pause()
				};
			this.tweenControlButtons.pause.clicking = function() {};
			this.tweenControlButtons.pause.released = function() {};
			this.tweenControlButtons.resume.clicked = function() {
				console.log("resume");
				this.control.tweenControl.resume()
			};
			this.tweenControlButtons.resume.clicking = function() {};
			this.tweenControlButtons.resume.released = function() {};
			this.tweenControlButtons.end.clicked = function() {
				console.log("end");
				this.control.tweenControl.end()
			};
			this.tweenControlButtons.end.clicking =
				function() {};
			this.tweenControlButtons.end.released = function() {};
			this.tweenControlButtons.pGame.clicked = function() {
				ig.game.pauseGame()
			};
			this.tweenControlButtons.pGame.clicking = function() {};
			this.tweenControlButtons.pGame.released = function() {}
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			this.parent();
			!0 === this.testCase3Initialized && this.drawTestCase3Info()
		},
		drawTestCase3Info: function() {}
	})
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound", "game.entities.test-control").defines(function() {
	LevelTestDesktop = {
		entities: [{
			type: "EntityBrandingLogoPlaceholder",
			x: 296,
			y: 396,
			settings: {
				div_layer_name: "layer_mainmenu",
				centralize: "true"
			}
		}, {
			type: "EntityPointer",
			x: 608,
			y: 120
		}, {
			type: "EntityButtonSound",
			x: 332,
			y: 284
		}, {
			type: "EntityTestControl",
			x: 0,
			y: 0
		}],
		layer: [{
			name: "background",
			width: 16,
			height: 9,
			linkWithCollision: !1,
			visible: 1,
			tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
			repeat: !1,
			preRender: !0,
			distance: "1",
			tilesize: 60,
			foreground: !1,
			data: [
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
				[17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
				[33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
				[49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
				[65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
				[81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
				[97,
					98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112
				],
				[113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
				[129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
			]
		}]
	};
	LevelTestDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound").defines(function() {
	LevelTestMobile = {
		entities: [{
			type: "EntityBrandingLogoPlaceholder",
			x: 216,
			y: 548,
			settings: {
				div_layer_name: "layer_mainmenu",
				centralize: "true"
			}
		}, {
			type: "EntityPointer",
			x: 444,
			y: 192
		}, {
			type: "EntityButtonSound",
			x: 245,
			y: 490
		}],
		layer: [{
			name: "background",
			width: 9,
			height: 16,
			linkWithCollision: !1,
			visible: 1,
			tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
			repeat: !1,
			preRender: !0,
			distance: "1",
			tilesize: 60,
			foreground: !1,
			data: [
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[10, 11, 12, 13, 14, 15, 16, 17, 18],
				[19, 20, 21, 22, 23, 24, 25, 26, 27],
				[28, 29, 30, 31, 32, 33, 34, 35, 36],
				[37, 38, 39, 40, 41, 42, 43, 44, 45],
				[46, 47, 48, 49, 50, 51, 52, 53, 54],
				[55, 56, 57, 58, 59, 60, 61, 62, 63],
				[64, 65, 66, 67, 68, 69, 70, 71, 72],
				[73, 74, 75, 76, 77, 78, 79, 80, 81],
				[82, 83, 84, 85, 86, 87, 88, 89, 90],
				[91, 92, 93, 94, 95, 96, 97, 98, 99],
				[100, 101, 102, 103, 104, 105, 106, 107, 108],
				[109, 110, 111,
					112, 113, 114, 115, 116, 117
				],
				[118, 119, 120, 121, 122, 123, 124, 125, 126],
				[127, 128, 129, 130, 131, 132, 133, 134, 135],
				[136, 137, 138, 139, 140, 141, 142, 143, 144]
			]
		}]
	};
	LevelTestMobileResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.buttons.button-play").requires("game.entities.buttons.button-text").defines(function() {
	EntityButtonPlay = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-mainmenu/btn-play.png"),
			sheetX: 1,
			sheetY: 1
		},
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 2,
		killOutLayer: !1,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d)
		},
		clicked: function() {
			ig.game.allowToClick &&
				(ig.soundHandler.sfxPlayer.play("click"), ig.game.allowToClick = !1, this.tween({
					pos: {
						x: this.pos.x,
						y: this.pos.y - ig.system.height / 75
					}
				}, 0.1, {
					onComplete: function() {
						this.tween({
							pos: {
								x: this.pos.x,
								y: this.pos.y + ig.system.height / 75
							}
						}, 0.1, {
							onComplete: function() {
								ig.gd.show(this.doClick.bind(this))
							}.bind(this)
						}).start()
					}.bind(this)
				}).start())
		},
		doClick: function() {
			this.click = ig.game.allowToClick = !0;
			ig.game.director.nextLevel()
		},
		over: function() {
			!ig.ua.mobile && ig.game.allowToClick && this.setScale(1.1, 1.1)
		},
		leave: function() {
			!ig.ua.mobile &&
				ig.game.allowToClick && this.setScale(1, 1)
		},
		show: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		},
		hide: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y + ig.system.height - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Linear.EaseNone,
				onComplete: function() {
					ig.game.allowToClick = !0;
					ig.game.director.nextLevel()
				}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.settings-controller").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-text").defines(function() {
	EntitySettingsController = EntityMarketjsEntity.extend({
		imageBg: new ig.Image("media/graphics/ui-settings/window-settings.png"),
		imageBg1: new ig.Image("media/graphics/ui-settings/window-settings.png"),
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/window-settings.png"),
			sheetX: 1,
			sheetY: 1
		},
		zIndex: 400,
		killOutLayer: !1,
		isSettingsMenu: !0,
		init: function(b, c, d) {
			this.isSettingsMenu = d.isSettingsMenu;
			this.idleSheetInfo = {
				sheetImage: this.imageBg,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
			this.parent(b, c, d);
			this.clickBlocker = ig.game.spawnEntity(EntityClickBlockerSettings, 0, 0);
			this.barSfx = ig.game.spawnEntity(EntityBar, ig.system.width, ig.system.height, {
				zIndex: this.zIndex + 1
			});
			this.btnSfx = ig.game.spawnEntity(EntityButtonSfx, ig.system.width, ig.system.height, {
				bar: this.barSfx,
				zIndex: this.zIndex + 2
			});
			this.barBgm = ig.game.spawnEntity(EntityBar, ig.system.width, ig.system.height, {
				zIndex: this.zIndex + 1
			});
			this.btnBgm = ig.game.spawnEntity(EntityButtonBgm, ig.system.width, ig.system.height, {
				bar: this.barBgm,
				zIndex: this.zIndex + 2
			});
			this.btnResume = ig.game.spawnEntity(EntityBtnPauseResume, 0, ig.system.height + 200);
			this.btnRestart = ig.game.spawnEntity(EntityBtnPauseRestart, 0, ig.system.height + 200);
			this.btnMenu = ig.game.spawnEntity(EntityBtnPauseMenu, 0, ig.system.height + 200);
			this.btnSettingsMenu =
				ig.game.spawnEntity(EntityBtnSettingsMenu, 0, ig.system.height + 200);
			this.pos.y += ig.system.height;
			ig.game.sortEntitiesDeferred()
		},
		ready: function() {
			this.parent();
			ig.game.sortEntitiesDeferred();
			this.ready = !0;
			null != ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		update: function() {
			this.parent();
			this.barSfx.pos.x = this.pos.x + this.size.x / 1.65 - this.barSfx.size.x / 2 - 10;
			this.barSfx.pos.y = this.pos.y + 9.5 * this.size.y / 24 - this.barSfx.size.y / 2 -
				45;
			this.barBgm.pos.x = this.pos.x + this.size.x / 1.65 - this.barSfx.size.x / 2 - 10;
			this.barBgm.pos.y = this.pos.y + 14 * this.size.y / 24 - this.barSfx.size.y / 2 - 30;
			!1 == this.isSettingsMenu ? (this.btnResume.pos.x = this.pos.x + this.size.x / 2 - this.btnResume.size.x / 2, this.btnResume.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnResume.size.y / 2 - 10, this.btnMenu.pos.x = this.pos.x + this.size.x / 2 - this.btnMenu.size.x / 2 - 130, this.btnMenu.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnMenu.size.y / 2 - 9, this.btnRestart.pos.x = this.pos.x + this.size.x /
				2 - this.btnRestart.size.x / 2 + 130, this.btnRestart.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnRestart.size.y / 2 - 9) : (this.btnSettingsMenu.pos.x = this.pos.x + this.size.x / 2 - this.btnResume.size.x / 2, this.btnSettingsMenu.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnResume.size.y / 2 - 10);
			if (!0 == this.btnResume.click || !0 == this.btnSettingsMenu.click) this.btnResume.click = !1, this.btnSettingsMenu.click = !1, this.easeOut(0.4), setTimeout(function() {
				this.clickBlocker.hide()
			}.bind(this), 400)
		},
		draw: function() {
			this.parent();
			var b =
				ig.system.context;
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle = "#37AFFD";
			b.textAlign = "center";
			!0 == this.isSettingsMenu ? b.fillText(_STRINGS.Game.Settings, ig.system.width / 2, this.pos.y + 27) : b.fillText(_STRINGS.Game.Paused, ig.system.width / 2, this.pos.y + 27);
			b.restore()
		},
		easeIn: function(b) {
			ig.game.gameIsPaused = !0;
			ig.game.allowToClick = !1;
			this.clickBlocker.show();
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		},
		easeOut: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2 + ig.system.height + 100
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseIn,
				onComplete: function() {
					ig.game.allowToClick = !0;
					ig.game.gameIsPaused = !1
				}.bind(this)
			}).start()
		}
	});
	EntityClickBlockerSettings = EntityMarketjsEntity.extend({
		killOutLayer: !1,
		zIndex: 300,
		type: ig.Entity.TYPE.A,
		alphaValue: 0.5,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.size.x = ig.system.width;
			this.size.y = ig.system.height
		},
		draw: function() {
			ig.system.context.fillStyle = "rgba(0,0,0," + this.alphaValue + ")";
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			this.parent()
		},
		show: function() {
			this.alphaValue = 0.5;
			this.type = ig.Entity.TYPE.A;
			ig.game.disableButtonMoreGames = !0
		},
		hide: function() {
			this.alphaValue = 0;
			this.type = ig.Entity.TYPE.NONE;
			ig.game.disableButtonMoreGames = !1
		}
	});
	EntityBtnPause = EntityButtonText.extend({
		idleSheetInfo: null,
		checkAgainst: ig.Entity.TYPE.BOTH,
		killOutLayer: !1,
		textColor: "#FFFFFF",
		zIndex: 1234,
		init: function(b,
			c, d) {
			this.parent(b, c, d)
		},
		update: function() {
			this.parent()
		},
		clicked: function() {
			ig.game.allowToClick && (ig.soundHandler.sfxPlayer.play("click"), ig.game.allowToClick = !1, this.tween({
				pos: {
					x: this.pos.x,
					y: this.pos.y - ig.system.height / 75
				}
			}, 0.1, {
				onComplete: function() {
					this.tween({
						pos: {
							x: this.pos.x,
							y: this.pos.y + ig.system.height / 75
						}
					}, 0.1, {
						onComplete: function() {
							ig.game.allowToClick = !0;
							this.doClick()
						}.bind(this)
					}).start()
				}.bind(this)
			}).start())
		}
	});
	EntityBtnPauseResume = EntityBtnPause.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/btn-resume.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.click = !0;
			ig.game.settingIsShowed = !1
		}
	});
	EntityBtnPauseRestart = EntityBtnPause.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/btn-restart.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			ig.gd.show(this.restartGame.bind(this))
		},
		restartGame: function() {
			ig.game.gameIsPaused = !1;
			ig.game.levelIsClear = !1;
			ig.game.director.reloadLevel()
		}
	});
	EntityBtnPauseMenu = EntityBtnPause.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/btn-menu.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			ig.gd.show(this.menuGame.bind(this))
		},
		menuGame: function() {
			ig.game.gameIsPaused = !1;
			ig.game.director.loadLevel(1)
		}
	});
	EntityBtnSettingsMenu = EntityBtnPause.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/btn-resume.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.click = !0
		}
	});
	EntityBar = EntityButton.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/slider-frame.png"),
			sheetX: 1,
			sheetY: 1
		},
		bar: new ig.Image("media/graphics/ui-settings/slider-bar.png"),
		zIndex: 3,
		killOutLayer: !1,
		scaleX: 0,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d)
		},
		draw: function() {
			this.parent();
			0 < this.scaleX && this.bar.draw(this.pos.x - ig.game.screen.x, this.pos.y, 0, 0, this.bar.width * this.scaleX, this.bar.height)
		}
	});
	EntityButtonSfx = EntityButton.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/btn-slider.png"),
			sheetX: 1,
			sheetY: 1
		},
		iconSfx: new ig.Image("media/graphics/ui-settings/icon-sound.png"),
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 4,
		killOutLayer: !1,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.scale = ig.game.volume.sfx;
			this.bar.scaleX = ig.game.volume.sfx
		},
		update: function() {
			this.parent();
			this.pos.x = this.bar.pos.x + (this.bar.size.x - this.size.x) * ig.game.volSfx;
			this.pos.y = this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2;
			this.move ? (cursorX = ig.game.io.getClickPos().x, console.log(this.pos.x),
					cursorX >= this.min && cursorX <= this.max ? this.pos.x = cursorX - this.size.x / 2 + ig.game.screen.x : cursorX < this.min ? this.pos.x = this.min - this.size.x / 2 + ig.game.screen.x : cursorX > this.max && (this.pos.x = this.max - this.size.x / 2 + ig.game.screen.x), distance = this.pos.x + this.size.x / 2 - this.min - ig.game.screen.x, maxDistance = this.max - this.min, this.scale = distance / maxDistance, this.updateTarget(), ig.input.released("click") && (ig.game.handlerSfx.volume(ig.game.volume.sfx), ig.soundHandler.sfxPlayer.play("click"), this.move = !1, ig.game.saveVolume())) :
				(this.pos.x = this.bar.pos.x + this.scale * this.bar.size.x - this.size.x / 2, this.pos.y = this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2, console.log(this.pos.x));
			!0 == ig.game.paused && (ig.input.pressed("click") && ig.input.mouse.x > this.pos.x && ig.input.mouse.x < this.pos.x + this.size.x && ig.input.mouse.y > this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && this.clicked()
		},
		draw: function() {
			this.iconSfx.draw(this.bar.pos.x - this.iconSfx.width / 2 - 60 - ig.game.screen.x, this.bar.pos.y - this.iconSfx.height / 3, 0, 0, this.iconSfx.width,
				this.iconSfx.height);
			this.parent()
		},
		clicked: function() {
			ig.game.allowToClick && (ig.soundHandler.sfxPlayer.play("click"), this.min = this.bar.pos.x - ig.game.screen.x, this.max = this.bar.pos.x + this.bar.size.x - ig.game.screen.x, this.move = !0)
		},
		updateTarget: function() {
			ig.game.volume.sfx = Math.round(10 * this.scale) / 10;
			this.bar.scaleX = Math.round(10 * this.scale) / 10
		}
	});
	EntityButtonBgm = EntityButton.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/btn-slider.png"),
			sheetX: 1,
			sheetY: 1
		},
		iconMusic: new ig.Image("media/graphics/ui-settings/icon-music.png"),
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 4,
		killOutLayer: !1,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.scale = ig.game.volume.bgm;
			this.bar.scaleX = ig.game.volume.bgm
		},
		update: function() {
			this.parent();
			this.pos.x = this.bar.pos.x + (this.bar.size.x - this.size.x) * ig.game.volSfx;
			this.pos.y = this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2;
			this.move ? (cursorX = ig.game.io.getClickPos().x, cursorX >= this.min &&
				cursorX <= this.max ? this.pos.x = cursorX - this.size.x / 2 + ig.game.screen.x : cursorX < this.min ? this.pos.x = this.min - this.size.x / 2 + ig.game.screen.x : cursorX > this.max && (this.pos.x = this.max - this.size.x / 2 + ig.game.screen.x), distance = this.pos.x + this.size.x / 2 - this.min - ig.game.screen.x, maxDistance = this.max - this.min, this.scale = distance / maxDistance, this.updateTarget(), ig.input.released("click") && (this.move = !1, ig.game.saveVolume())) : (this.pos.x = this.bar.pos.x + this.scale * this.bar.size.x - this.size.x / 2, this.pos.y = this.bar.pos.y +
				this.bar.size.y / 2 - this.size.y / 2);
			!0 == ig.game.paused && (ig.input.pressed("click") && ig.input.mouse.x > this.pos.x && ig.input.mouse.x < this.pos.x + this.size.x && ig.input.mouse.y > this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && this.clicked()
		},
		draw: function() {
			this.iconMusic.draw(this.bar.pos.x - this.iconMusic.width / 2 - 70 - ig.game.screen.x, this.bar.pos.y - this.iconMusic.height / 3, 0, 0, this.iconMusic.width, this.iconMusic.height);
			this.parent()
		},
		clicked: function() {
			ig.game.allowToClick && (ig.soundHandler.sfxPlayer.play("click"),
				this.min = this.bar.pos.x - ig.game.screen.x, this.max = this.bar.pos.x + this.bar.size.x - ig.game.screen.x, this.move = !0)
		},
		updateTarget: function() {
			ig.game.volume.bgm = Math.round(10 * this.scale) / 10;
			this.bar.scaleX = Math.round(10 * this.scale) / 10;
			ig.game.handlerBgm.volume(ig.game.volume.bgm)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-settings").requires("impact.timer", "game.entities.buttons.button", "game.entities.controllers.settings-controller").defines(function() {
	EntityButtonSettings = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-mainmenu/btn-settings.png"),
			sheetX: 1,
			sheetY: 1
		},
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 2,
		settings: null,
		killOutLayer: !1,
		isSettingsMenu: null,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim =
				this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.isSettingsMenu = d.isSettingsMenu;
			this.setScale(1, 1)
		},
		ready: function() {
			this.parent();
			null != ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		clicked: function() {
			ig.game.allowToClick && (ig.game.allowToClick = !1, ig.soundHandler.sfxPlayer.play("click"), this.tween({
				pos: {
					x: this.pos.x,
					y: this.pos.y - ig.system.height / 75
				}
			}, 0.1, {
				onComplete: function() {
					this.tween({
						pos: {
							x: this.pos.x,
							y: this.pos.y + ig.system.height / 75
						}
					}, 0.1, {
						onComplete: function() {
							ig.game.allowToClick = !0;
							this.doClick()
						}.bind(this)
					}).start()
				}.bind(this)
			}).start())
		},
		doClick: function() {
			null != this.gc && (this.gc.gameIsPaused = !0);
			null == this.settings && (this.settings = ig.game.spawnEntity(EntitySettingsController, ig.system.width / 2, ig.system.height / 2, {
				horizontal: "center",
				vertical: "center",
				isSettingsMenu: this.isSettingsMenu
			}));
			this.settings.easeIn(0.8);
			ig.game.settingIsShowed = !0
		},
		over: function() {
			!ig.ua.mobile && ig.game.allowToClick &&
				this.setScale(1.1, 1.1)
		},
		leave: function() {
			!ig.ua.mobile && ig.game.allowToClick && this.setScale(1, 1)
		},
		show: function(b) {
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {}.bind(this)
			}).start()
		},
		hide: function(b) {
			this.tween({
				pos: {
					x: this.pos.x,
					y: -200
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.characters-data").requires("impact.entity").defines(function() {
	EntityCharactersData = ig.Entity.extend({
		data: [{
			ballSprite: new ig.Image("media/graphics/characters/character-1-ball.png"),
			danceSprite: new ig.Image("media/graphics/characters/character-1-dance.png"),
			danceSheetX: 4,
			danceSheetY: 2,
			danceFrameArray: [0, 1, 2, 3, 4, 5, 6],
			gameplaySprite: new ig.Image("media/graphics/characters/character-1-gameplay.png"),
			unlockAtLevel: 1
		}, {
			ballSprite: new ig.Image("media/graphics/characters/character-2-ball.png"),
			danceSprite: new ig.Image("media/graphics/characters/character-2-dance.png"),
			danceSheetX: 4,
			danceSheetY: 2,
			danceFrameArray: [0, 1, 2, 3, 4, 5],
			gameplaySprite: new ig.Image("media/graphics/characters/character-2-gameplay.png"),
			unlockAtLevel: 10
		}, {
			ballSprite: new ig.Image("media/graphics/characters/character-3-ball.png"),
			danceSprite: new ig.Image("media/graphics/characters/character-3-dance.png"),
			danceSheetX: 4,
			danceSheetY: 2,
			danceFrameArray: [0, 1, 2, 3, 4, 5, 6],
			gameplaySprite: new ig.Image("media/graphics/characters/character-3-gameplay.png"),
			unlockAtLevel: 20
		}, {
			ballSprite: new ig.Image("media/graphics/characters/character-4-ball.png"),
			danceSprite: new ig.Image("media/graphics/characters/character-4-dance.png"),
			danceSheetX: 4,
			danceSheetY: 2,
			danceFrameArray: [0, 1, 2, 3, 4, 5],
			gameplaySprite: new ig.Image("media/graphics/characters/character-4-gameplay.png"),
			unlockAtLevel: 30
		}, {
			ballSprite: new ig.Image("media/graphics/characters/character-5-ball.png"),
			danceSprite: new ig.Image("media/graphics/characters/character-5-dance.png"),
			danceSheetX: 4,
			danceSheetY: 1,
			danceFrameArray: [0, 1, 2, 3],
			gameplaySprite: new ig.Image("media/graphics/characters/character-5-gameplay.png"),
			unlockAtLevel: 50
		}, {
			ballSprite: new ig.Image("media/graphics/characters/character-6-ball.png"),
			danceSprite: new ig.Image("media/graphics/characters/character-6-dance.png"),
			danceSheetX: 4,
			danceSheetY: 2,
			danceFrameArray: [0, 1, 2, 3, 4, 5, 6],
			gameplaySprite: new ig.Image("media/graphics/characters/character-6-gameplay.png"),
			unlockAtLevel: 60
		}]
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.character-dance-controller").requires("game.entities.global.marketjs-entity", "game.entities.controllers.characters-data").defines(function() {
	EntityCharacterDanceController = EntityMarketjsEntity.extend({
		zIndex: 2,
		killOutLayer: !1,
		init: function(b, c, d) {
			this.characterIndex = d.characterIndex;
			this.charactersData = ig.game.spawnEntity(EntityCharactersData, 0, 0);
			this.characterSheetInfo = {
				sheetImage: this.charactersData.data[this.characterIndex].danceSprite,
				sheetX: this.charactersData.data[this.characterIndex].danceSheetX,
				sheetY: this.charactersData.data[this.characterIndex].danceSheetY
			};
			this.setSpriteSheet("character");
			this.setSize("character");
			this.currentAnim = this.character = new ig.Animation(this.characterSheet, 0.2, this.charactersData.data[this.characterIndex].danceFrameArray);
			this.parent(b, c, d);
			ig.game.sortEntitiesDeferred()
		},
		changeSprite: function(b) {
			this.characterIndex = b;
			this.characterSheetInfo = {
				sheetImage: this.charactersData.data[this.characterIndex].danceSprite,
				sheetX: this.charactersData.data[this.characterIndex].danceSheetX,
				sheetY: this.charactersData.data[this.characterIndex].danceSheetY
			};
			this.setSpriteSheet("character");
			this.setSize("character");
			this.currentAnim = this.character = new ig.Animation(this.characterSheet, 0.2, this.charactersData.data[this.characterIndex].danceFrameArray)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.select-character-controller").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-text", "game.entities.controllers.character-dance-controller").defines(function() {
	EntitySelectCharacterController = EntityMarketjsEntity.extend({
		imageBg: new ig.Image("media/graphics/ui-select-character/window-skins.png"),
		zIndex: 400,
		killOutLayer: !1,
		isSettingsMenu: !0,
		init: function(b, c, d) {
			this.idleSheetInfo = {
				sheetImage: this.imageBg,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
			this.parent(b, c, d);
			this.curentCharacterIndex = ig.game.selectedCharacter;
			this.charactersData = ig.game.getEntitiesByType(EntityCharactersData)[0];
			this.mc = ig.game.getEntitiesByType(EntityMainmenuController)[0];
			this.clickBlocker = ig.game.spawnEntity(EntityClickBlockerSettings, 0, 0);
			this.characterDance = ig.game.spawnEntity(EntityCharacterDanceController, 0, ig.system.height + 200, {
				horizontal: "center",
				vertical: "center",
				characterIndex: this.curentCharacterIndex
			});
			this.characterDance.zIndex = 500;
			this.buttonNext = ig.game.spawnEntity(EntityButtonNext, 0, ig.system.height + 200);
			this.buttonPrev = ig.game.spawnEntity(EntityButtonPrev, 0, ig.system.height + 200);
			this.buttonSelect = ig.game.spawnEntity(EntityButtonSelect, 0, ig.system.height + 200);
			this.buttonClose = ig.game.spawnEntity(EntityButtonCloseSelectCharacter, 0, ig.system.height + 200);
			this.pos.y += ig.system.height;
			ig.game.sortEntitiesDeferred()
		},
		ready: function() {
			this.parent();
			ig.game.sortEntitiesDeferred();
			this.ready = !0;
			null !=
				ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		update: function() {
			this.parent();
			this.characterDance.pos.x = this.pos.x + this.size.x / 2 - this.characterDance.size.x / 2;
			this.characterDance.pos.y = this.pos.y + 8 * this.size.y / 10 - this.characterDance.size.y / 2 - 110;
			0 < this.curentCharacterIndex ? (this.buttonPrev.pos.x = this.pos.x + this.size.x / 2 - this.buttonPrev.size.x / 2 - 180, this.buttonPrev.pos.y = this.pos.y + 8 * this.size.y / 10 - this.buttonPrev.size.y / 2 -
				110) : (this.buttonPrev.pos.x = 3E3, this.buttonPrev.pos.y = 3E3);
			this.curentCharacterIndex < this.charactersData.data.length - 1 ? (this.buttonNext.pos.x = this.pos.x + this.size.x / 2 - this.buttonNext.size.x / 2 + 180, this.buttonNext.pos.y = this.pos.y + 8 * this.size.y / 10 - this.buttonNext.size.y / 2 - 110) : (this.buttonNext.pos.x = 3E3, this.buttonNext.pos.y = 3E3);
			this.buttonSelect.pos.x = this.pos.x + this.size.x / 2 - this.buttonSelect.size.x / 2;
			this.buttonSelect.pos.y = this.pos.y + 8 * this.size.y / 10 - this.buttonSelect.size.y / 2 + 150;
			this.buttonClose.pos.x =
				this.pos.x + this.size.x / 2 - this.buttonClose.size.x / 2 + 205;
			this.buttonClose.pos.y = this.pos.y + 8 * this.size.y / 10 - this.buttonClose.size.y / 2 - 310;
			this.buttonClose.click && (this.buttonClose.click = !1, this.easeOut(0.4), setTimeout(function() {
				this.clickBlocker.hide()
			}.bind(this), 400));
			this.buttonNext.click && this.curentCharacterIndex < this.charactersData.data.length - 1 && (this.buttonNext.click = !1, this.curentCharacterIndex++, this.characterDance.changeSprite(this.curentCharacterIndex));
			this.buttonPrev.click && -1 < this.curentCharacterIndex &&
				(this.buttonPrev.click = !1, this.curentCharacterIndex--, this.characterDance.changeSprite(this.curentCharacterIndex));
			this.curentCharacterIndex == ig.game.selectedCharacter ? (this.buttonSelect.buttonText = _STRINGS.Game.CurrentSkin, this.buttonSelect.isDisabled = !0, this.buttonSelect.buttonState = "SELECTED") : (this.buttonSelect.buttonText = _STRINGS.Game.SelectSkin, this.buttonSelect.isDisabled = !1, this.buttonSelect.buttonState = "SELECT");
			ig.game.levelCounter < this.charactersData.data[this.curentCharacterIndex].unlockAtLevel &&
				(this.buttonSelect.buttonText = _STRINGS.Game.UnlockAtLevel + " " + this.charactersData.data[this.curentCharacterIndex].unlockAtLevel, this.buttonSelect.isDisabled = !0, this.buttonSelect.buttonState = "DISABLE");
			this.buttonSelect.click && (this.buttonSelect.click = !1, ig.game.selectedCharacter = this.curentCharacterIndex, this.mc.characterDance.changeSprite(this.curentCharacterIndex), ig.game.saveLastLevel())
		},
		draw: function() {
			var b = ig.system.context;
			this.parent();
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle =
				"#37AFFD";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.Skins, ig.system.width / 2, this.pos.y + 8 * this.size.y / 10 - this.characterDance.size.y / 2 - 190);
			b.restore()
		},
		easeIn: function(b) {
			ig.game.allowToClick = !1;
			this.clickBlocker.show();
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2 - 50
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		},
		easeOut: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.pos.y - this.size.y / 2 + ig.system.height +
						100
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseIn,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		}
	});
	EntityClickBlockerSettings = EntityMarketjsEntity.extend({
		killOutLayer: !1,
		zIndex: 300,
		type: ig.Entity.TYPE.A,
		alphaValue: 0.5,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.size.x = ig.system.width;
			this.size.y = ig.system.height
		},
		draw: function() {
			ig.system.context.fillStyle = "rgba(0,0,0," + this.alphaValue + ")";
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			this.parent()
		},
		show: function() {
			this.alphaValue =
				0.5;
			this.type = ig.Entity.TYPE.A;
			ig.game.disableButtonMoreGames = !0
		},
		hide: function() {
			this.alphaValue = 0;
			this.type = ig.Entity.TYPE.NONE;
			ig.game.disableButtonMoreGames = !1
		}
	});
	EntityButtonSelectCharacter = EntityButtonText.extend({
		idleSheetInfo: null,
		checkAgainst: ig.Entity.TYPE.BOTH,
		killOutLayer: !1,
		textColor: "#FFFFFF",
		zIndex: 1234,
		isDisabled: !1,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		update: function() {
			this.parent()
		},
		clicked: function() {
			!1 == this.isDisabled && ig.game.allowToClick && (ig.soundHandler.sfxPlayer.play("click"),
				ig.game.allowToClick = !1, this.tween({
					pos: {
						x: this.pos.x,
						y: this.pos.y - ig.system.height / 75
					}
				}, 0.1, {
					onComplete: function() {
						this.tween({
							pos: {
								x: this.pos.x,
								y: this.pos.y + ig.system.height / 75
							}
						}, 0.1, {
							onComplete: function() {
								ig.game.allowToClick = !0;
								this.doClick()
							}.bind(this)
						}).start()
					}.bind(this)
				}).start())
		}
	});
	EntityButtonNext = EntityButtonSelectCharacter.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-select-character/btn-next.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.click = !0
		}
	});
	EntityButtonPrev =
		EntityButtonSelectCharacter.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image("media/graphics/ui-select-character/btn-prev.png"),
				sheetX: 1,
				sheetY: 1
			},
			doClick: function() {
				this.click = !0
			}
		});
	EntityButtonSelect = EntityButtonSelectCharacter.extend({
		imgDisable: new ig.Image("media/graphics/ui-select-character/btn-select-disabled.png"),
		imgSelected: new ig.Image("media/graphics/ui-select-character/btn-select-selected.png"),
		imgSelect: new ig.Image("media/graphics/ui-select-character/btn-select.png"),
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-select-character/btn-select.png"),
			sheetX: 1,
			sheetY: 1
		},
		disabledSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-select-character/btn-select-disabled.png"),
			sheetX: 1,
			sheetY: 1
		},
		selectedSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-select-character/btn-select-selected.png"),
			sheetX: 1,
			sheetY: 1
		},
		buttonText: "",
		buttonState: "SELECT",
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSpriteSheet("disabled");
			this.setSpriteSheet("selected");
			this.setSize("idle");
			this.setSize("disabled");
			this.setSize("selected");
			this.currentAnim =
				this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.zIndex = 500
		},
		draw: function() {
			var b = ig.system.context;
			this.parent();
			"DISABLE" == this.buttonState ? this.imgDisable.draw(this.pos.x, this.pos.y) : "SELECTED" == this.buttonState ? this.imgSelected.draw(this.pos.x, this.pos.y) : this.imgSelect.draw(this.pos.x, this.pos.y);
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle = "rgb(0,0,0,0.2)";
			b.textAlign = "center";
			b.fillText(this.buttonText, ig.system.width / 2 + 5, this.pos.y + 50 + 5);
			b.restore();
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(this.buttonText, ig.system.width / 2, this.pos.y + 50);
			b.restore()
		},
		doClick: function() {
			!1 == this.isDisabled && (this.click = !0)
		}
	});
	EntityButtonCloseSelectCharacter = EntityButtonSelectCharacter.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/btn-close.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.click = !0
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-select-character").requires("impact.timer", "game.entities.buttons.button", "game.entities.controllers.select-character-controller").defines(function() {
	EntityButtonSelectCharacter = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-mainmenu/btn-select-character.png"),
			sheetX: 1,
			sheetY: 1
		},
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 2,
		settings: null,
		killOutLayer: !1,
		isSettingsMenu: null,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.isSettingsMenu = d.isSettingsMenu;
			this.setScale(1, 1)
		},
		ready: function() {
			this.parent();
			null != ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		clicked: function() {
			ig.game.allowToClick && (ig.game.allowToClick = !1, ig.soundHandler.sfxPlayer.play("click"), this.tween({
				pos: {
					x: this.pos.x,
					y: this.pos.y - ig.system.height / 75
				}
			}, 0.1, {
				onComplete: function() {
					this.tween({
						pos: {
							x: this.pos.x,
							y: this.pos.y + ig.system.height / 75
						}
					}, 0.1, {
						onComplete: function() {
							ig.game.allowToClick = !0;
							ig.gd.show(this.doClick.bind(this))
						}.bind(this)
					}).start()
				}.bind(this)
			}).start())
		},
		doClick: function() {
			null != this.gc && (this.gc.gameIsPaused = !0);
			null == this.selectCharacter && (this.selectCharacter = ig.game.spawnEntity(EntitySelectCharacterController, ig.system.width / 2, ig.system.height / 2, {
				horizontal: "center",
				vertical: "center",
				isSettingsMenu: this.isSettingsMenu
			}));
			this.selectCharacter.easeIn(0.8);
			ig.game.settingIsShowed = !0
		},
		over: function() {
			!ig.ua.mobile && ig.game.allowToClick && this.setScale(1.1, 1.1)
		},
		leave: function() {
			!ig.ua.mobile && ig.game.allowToClick && this.setScale(1, 1)
		},
		shopGame: function() {
			ig.game.director.jumpTo(LevelGame)
		},
		show: function(b) {
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {}.bind(this)
			}).start()
		},
		hide: function(b) {
			this.tween({
				pos: {
					x: this.pos.x,
					y: -200
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.character-unlocked-controller").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-text", "game.entities.controllers.character-dance-controller").defines(function() {
	EntityCharacterUnlockedController = EntityMarketjsEntity.extend({
		imageBg: new ig.Image("media/graphics/ui-select-character/window-skins.png"),
		zIndex: 400,
		killOutLayer: !1,
		isSettingsMenu: !0,
		init: function(b, c, d) {
			this.idleSheetInfo = {
				sheetImage: this.imageBg,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
			this.parent(b, c, d);
			this.curentCharacterIndex = ig.game.selectedCharacter;
			this.charactersData = ig.game.getEntitiesByType(EntityCharactersData)[0];
			this.mc = ig.game.getEntitiesByType(EntityMainmenuController)[0];
			for (b = 0; b < this.charactersData.data.length; b++)
				if (c = b, ig.game.levelCounter <= this.charactersData.data[c].unlockAtLevel) {
					ig.game.nextLevelForUnlockCharacter = this.charactersData.data[c].unlockAtLevel;
					break
				}
			for (b = 0; b <
				this.charactersData.data.length; b++)
				if (c = b, ig.game.levelCounter - 1 == this.charactersData.data[c].unlockAtLevel) {
					this.curentCharacterIndex = c;
					break
				}
			this.clickBlocker = ig.game.spawnEntity(EntityClickBlockerSettings, 0, 0);
			this.clickBlocker.hide();
			this.characterDance = ig.game.spawnEntity(EntityCharacterDanceController, 0, ig.system.height + 200, {
				horizontal: "center",
				vertical: "center",
				characterIndex: this.curentCharacterIndex
			});
			this.characterDance.zIndex = 500;
			this.buttonNext = ig.game.spawnEntity(EntityButtonNext, 0,
				ig.system.height + 200);
			this.buttonPrev = ig.game.spawnEntity(EntityButtonPrev, 0, ig.system.height + 200);
			this.buttonSelect = ig.game.spawnEntity(EntityButtonSelect, 0, ig.system.height + 200);
			this.buttonClose = ig.game.spawnEntity(EntityButtonCloseSelectCharacter, 0, ig.system.height + 200);
			this.pos.y += ig.system.height;
			ig.game.sortEntitiesDeferred()
		},
		ready: function() {
			this.parent();
			ig.game.sortEntitiesDeferred();
			this.ready = !0;
			null != ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]);
			ig.game.newCharacterUnlocked && (ig.game.newCharacterUnlocked = !1, this.easeIn(0.8))
		},
		update: function() {
			this.parent();
			null == this.mc && (this.mc = ig.game.getEntitiesByType(EntityMainmenuController)[0]);
			this.characterDance.pos.x = this.pos.x + this.size.x / 2 - this.characterDance.size.x / 2;
			this.characterDance.pos.y = this.pos.y + 8 * this.size.y / 10 - this.characterDance.size.y / 2 - 110;
			this.buttonSelect.pos.x = this.pos.x + this.size.x / 2 - this.buttonSelect.size.x / 2;
			this.buttonSelect.pos.y = this.pos.y + 8 * this.size.y / 10 - this.buttonSelect.size.y /
				2 + 150;
			this.buttonClose.pos.x = this.pos.x + this.size.x / 2 - this.buttonClose.size.x / 2 + 205;
			this.buttonClose.pos.y = this.pos.y + 8 * this.size.y / 10 - this.buttonClose.size.y / 2 - 310;
			this.buttonClose.click && (this.buttonClose.click = !1, this.easeOut(0.4), setTimeout(function() {
				this.clickBlocker.hide()
			}.bind(this), 400));
			this.buttonSelect.buttonText = _STRINGS.Game.SelectSkin;
			this.buttonSelect.isDisabled = !1;
			this.buttonSelect.click && (this.buttonSelect.click = !1, ig.game.selectedCharacter = this.curentCharacterIndex, this.mc.characterDance.changeSprite(this.curentCharacterIndex),
				ig.game.saveLastLevel(), this.easeOut(0.4), setTimeout(function() {
					this.clickBlocker.hide()
				}.bind(this), 400))
		},
		draw: function() {
			var b = ig.system.context;
			this.parent();
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle = "#37AFFD";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.NewSKin, ig.system.width / 2, this.pos.y + 8 * this.size.y / 10 - this.characterDance.size.y / 2 - 190);
			b.restore()
		},
		easeIn: function(b) {
			ig.game.allowToClick = !1;
			this.clickBlocker.show();
			this.tween({
					pos: {
						x: this.pos.x,
						y: this.oriPos.y - this.size.y / 2 - 50
					}
				},
				b, {
					easing: ig.Tween.Easing.Back.EaseOut,
					onComplete: function() {
						ig.game.allowToClick = !0
					}.bind(this)
				}).start()
		},
		easeOut: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.pos.y - this.size.y / 2 + ig.system.height + 100
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseIn,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		}
	});
	EntityClickBlockerSettings = EntityMarketjsEntity.extend({
		killOutLayer: !1,
		zIndex: 300,
		type: ig.Entity.TYPE.A,
		alphaValue: 0.5,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.size.x = ig.system.width;
			this.size.y = ig.system.height
		},
		draw: function() {
			ig.system.context.fillStyle = "rgba(0,0,0," + this.alphaValue + ")";
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			this.parent()
		},
		show: function() {
			this.alphaValue = 0.5;
			this.type = ig.Entity.TYPE.A;
			ig.game.disableButtonMoreGames = !0
		},
		hide: function() {
			this.alphaValue = 0;
			this.type = ig.Entity.TYPE.NONE;
			ig.game.disableButtonMoreGames = !1
		}
	});
	EntityButtonUnlockedCharacter = EntityButtonText.extend({
		idleSheetInfo: null,
		checkAgainst: ig.Entity.TYPE.BOTH,
		killOutLayer: !1,
		textColor: "#FFFFFF",
		zIndex: 1234,
		isDisabled: !1,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		update: function() {
			this.parent()
		},
		clicked: function() {
			!1 == this.isDisabled && ig.game.allowToClick && (ig.soundHandler.sfxPlayer.play("click"), ig.game.allowToClick = !1, this.tween({
				pos: {
					x: this.pos.x,
					y: this.pos.y - ig.system.height / 75
				}
			}, 0.1, {
				onComplete: function() {
					this.tween({
						pos: {
							x: this.pos.x,
							y: this.pos.y + ig.system.height / 75
						}
					}, 0.1, {
						onComplete: function() {
							ig.game.allowToClick = !0;
							this.doClick()
						}.bind(this)
					}).start()
				}.bind(this)
			}).start())
		}
	});
	EntityButtonSelect = EntityButtonUnlockedCharacter.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-select-character/btn-select.png"),
			sheetX: 1,
			sheetY: 1
		},
		buttonText: "",
		draw: function() {
			var b = ig.system.context;
			this.parent();
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle = "rgb(0,0,0,0.2)";
			b.textAlign = "center";
			b.fillText(this.buttonText, ig.system.width / 2 + 5, this.pos.y + 50 + 5);
			b.restore();
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(this.buttonText,
				ig.system.width / 2, this.pos.y + 50);
			b.restore()
		},
		doClick: function() {
			!1 == this.isDisabled && (this.click = !0)
		}
	});
	EntityButtonCloseSelectCharacter = EntityButtonUnlockedCharacter.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-settings/btn-close.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.click = !0
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.mainmenu-controller").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-play", "game.entities.buttons.button-settings", "game.entities.buttons.button-select-character", "game.entities.controllers.character-unlocked-controller", "game.entities.controllers.character-dance-controller", "game.entities.controllers.characters-data", "plugins.fullscreen").defines(function() {
	EntityMainmenuController = EntityMarketjsEntity.extend({
		title: new ig.Image("media/graphics/ui-mainmenu/img-title.png"),
		imgPlatform: new ig.Image("media/graphics/ui-mainmenu/img-platform.png"),
		imglevel: new ig.Image("media/graphics/ui-mainmenu/img-level.png"),
		gravityFactor: 0,
		zIndex: 1,
		init: function(b, c, d) {
			this.parent(b, c, d);
			ig.system.context.setTransform(1, 0, 0, 1, 0, 0);
			this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
			null != ig.game.getEntitiesByType(EntityClickBlockerSettings)[0] && ig.game.getEntitiesByType(EntityClickBlockerSettings)[0].kill();
			this.characterDance = ig.game.spawnEntity(EntityCharacterDanceController, ig.system.width / 2, ig.system.height / 2 + 100, {
				horizontal: "center",
				vertical: "center",
				characterIndex: ig.game.selectedCharacter
			});
			this.btnPlay = ig.game.spawnEntity(EntityButtonPlay, ig.system.width / 2, 8.75 * ig.system.height / 10, {
				horizontal: "center",
				vertical: "center",
				text: "",
				textSize: 34
			});
			this.btnSettings = ig.game.spawnEntity(EntityButtonSettings, 17.5 * ig.system.width / 20, 1.5 * ig.system.height / 20, {
				horizontal: "center",
				vertical: "center",
				text: "",
				textSize: 34,
				isSettingsMenu: !0
			});
			this.btnSelectCharacter = ig.game.spawnEntity(EntityButtonSelectCharacter, 3 * ig.system.width / 20, 8.8 * ig.system.height / 10, {
				horizontal: "center",
				vertical: "center",
				text: ""
			});
			_SETTINGS.MoreGames.Enabled && (this.btnMoreGames = ig.game.spawnEntity(EntityButtonMoreGames, 17 * ig.system.width / 20, 8.8 * ig.system.height / 10, {
				horizontal: "center",
				vertical: "center",
				text: ""
			}));
			this.btnFullscreen = ig.game.spawnEntity(ig.FullscreenButton, 0.9 * ig.system.width / 20, 0.5 * ig.system.height / 20, {
				enterImage: new ig.Image("media/graphics/ui-mainmenu/btn-enter-fullscreen.png"),
				exitImage: new ig.Image("media/graphics/ui-mainmenu/btn-exit-fullscreen.png")
			});
			this.btnFullscreen.zIndex = 2;
			this.windowNewCharacterUnlocked = ig.game.spawnEntity(EntityCharacterUnlockedController, ig.system.width / 2, ig.system.height / 2, {
				horizontal: "center",
				vertical: "center"
			});
			ig.game.allowToClick = !0;
			ig.game.sortEntitiesDeferred();
			b = Math.floor(2E3 * Math.random() + 1);
			ig.game.selectedBackgroundIndex = b % 5 + 1
		},
		ready: function() {
			this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0]
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			if (!ig.global.wm) {
				this.parent();
				var b = ig.system.context,
					c = b.createLinearGradient(0, 0, 0, 700),
					d = "",
					f = "";
				switch (ig.game.selectedBackgroundIndex) {
					case 1:
						d = "#68a9ff";
						f = "#fe88ec";
						break;
					case 2:
						d = "#67a9ff";
						f = "#88f5fe";
						break;
					case 3:
						d = "#98c1e7";
						f = "#84f0bf";
						break;
					case 4:
						d = "#f45970";
						f = "#f092f7";
						break;
					case 5:
						d = "#ff8eb2", f = "#fdf18e"
				}
				c.addColorStop(0, d);
				c.addColorStop(1, f);
				b.save();
				b.fillStyle = c;
				b.fillRect(0, 0, ig.system.width, ig.system.height);
				b.restore();
				this.title.draw(ig.system.width / 2 - this.title.width /
					2, 120);
				this.imglevel.draw(ig.system.width / 2 - 106.5, ig.system.height / 2 - 90);
				this.imgPlatform.draw(ig.system.width / 2 - 113, ig.system.height / 2 + 190);
				b.save();
				b.font = "25px arialroundedbold";
				b.fillStyle = "#ffffff";
				b.textAlign = "center";
				b.fillText(_STRINGS.Game.Level + " " + ig.game.levelCounter, ig.system.width / 2, ig.system.height / 2 - 55);
				b.restore()
			}
		}
	})
});
ig.baked = !0;
ig.module("game.levels.mainmenu").requires("impact.image", "game.entities.controllers.mainmenu-controller").defines(function() {
	LevelMainmenu = {
		entities: [{
			type: "EntityMainmenuController",
			x: 0,
			y: 0
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.entities.global.marketjs-box2d-entity").requires("impact.entity", "plugins.box2d.entity").defines(function() {
	EntityMarketjsBox2dEntity = ig.Box2DEntity.extend({
		oriPos: {
			x: null,
			y: null
		},
		id: 0,
		type: 0,
		category: "",
		box2dType: 0,
		dynamicType: 0,
		density: 1,
		friction: 0,
		restitution: 0,
		init: function(b, c, d) {
			this.parent(b, c, d);
			b = new Box2D.Common.Math.b2Vec2((b + this.size.x / 2) * Box2D.SCALE, c * Box2D.SCALE);
			this.body.SetPositionAndAngle(b, this.objectAngle);
			this.oriPos.x = this.pos.x;
			this.oriPos.y = this.pos.y;
			this.setPosition()
		},
		ready: function() {
			this.parent()
		},
		update: function() {
			this.parent();
			this.killOutOfLayer()
		},
		clicked: function() {},
		killOutOfLayer: function() {
			!1 != this.killOutLayer && (this.pos.x < ig.game.screen.x - this.size.x || this.pos.x > ig.game.screen.x + ig.system.width || this.pos.y < ig.game.screen.y - this.size.y || this.pos.y > ig.game.screen.y + ig.system.height) && this.kill()
		},
		setSpriteSheet: function(b) {
			this[b + "Sheet"] = new ig.AnimationSheet(this[b + "SheetInfo"].sheetImage.path, this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX,
				this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY)
		},
		setSize: function(b) {
			this.size.x = this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX;
			this.size.y = this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY
		},
		setPosition: function() {
			"center" == this.horizontal ? this.pos.x -= this.size.x / 2 : "left" == this.horizontal ? this.pos.x = this.pos.x : "right" == this.horizontal && (this.pos.x -= this.size.x);
			"center" == this.vertical ? this.pos.y -= this.size.y / 2 : "top" == this.vertical ? this.pos.y = this.pos.y :
				"bottom" == this.vertical && (this.pos.y -= this.size.y)
		},
		setFlip: function() {
			!0 == this.flip.x && (this.curentAnimation.flip.x = !0);
			!0 == this.flip.y && (this.curentAnimation.flip.y = !0)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-skip-video").requires("impact.timer", "game.entities.buttons.button", "game.entities.controllers.settings-controller").defines(function() {
	EntityButtonSkipVideo = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-gameplay/btn-skip-video.png"),
			sheetX: 1,
			sheetY: 1
		},
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 200,
		settings: null,
		killOutLayer: !1,
		isSettingsMenu: null,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim =
				this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.isSettingsMenu = d.isSettingsMenu;
			this.devia = {};
			this.devia.x = b;
			this.devia.y = c;
			this.setScale(1, 1)
		},
		ready: function() {
			this.parent();
			null != ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		draw: function() {
			this.pos.x = ig.game.screen.x + this.devia.x;
			this.pos.y = ig.game.screen.y + this.devia.y;
			this.parent()
		},
		clicked: function() {
			ig.game.allowToClick && (ig.game.allowToClick = !1, ig.soundHandler.sfxPlayer.play("click"), this.tween({
				pos: {
					x: this.pos.x,
					y: this.pos.y - ig.system.height / 75
				}
			}, 0.1, {
				onComplete: function() {
					this.tween({
						pos: {
							x: this.pos.x,
							y: this.pos.y + ig.system.height / 75
						}
					}, 0.1, {
						onComplete: function() {
							ig.game.allowToClick = !0;
							this.doClick()
						}.bind(this)
					}).start()
				}.bind(this)
			}).start())
		},
		doClick: function() {
			null != this.gc && (this.gc.gameIsPaused = !0);
			this.gc.levelIsSkipped = !0
		},
		show: function(b) {
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {}.bind(this)
			}).start()
		},
		hide: function(b) {
			this.tween({
				pos: {
					x: this.pos.x,
					y: -200
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-pause").requires("impact.timer", "game.entities.buttons.button", "game.entities.controllers.settings-controller").defines(function() {
	EntityButtonPause = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("media/graphics/ui-gameplay/btn-pause.png"),
			sheetX: 1,
			sheetY: 1
		},
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 200,
		settings: null,
		killOutLayer: !1,
		isSettingsMenu: null,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle =
				new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.devia = {};
			this.devia.x = b;
			this.devia.y = c;
			this.isSettingsMenu = d.isSettingsMenu;
			this.setScale(1, 1)
		},
		ready: function() {
			this.parent();
			null != ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		clicked: function() {
			console.log("KLIK");
			ig.game.allowToClick && (ig.game.allowToClick = !1, ig.soundHandler.sfxPlayer.play("click"), this.tween({
				pos: {
					x: this.pos.x,
					y: this.pos.y - ig.system.height /
						75
				}
			}, 0.1, {
				onComplete: function() {
					this.tween({
						pos: {
							x: this.pos.x,
							y: this.pos.y + ig.system.height / 75
						}
					}, 0.1, {
						onComplete: function() {
							ig.game.allowToClick = !0;
							this.doClick()
						}.bind(this)
					}).start()
				}.bind(this)
			}).start())
		},
		doClick: function() {
			null == this.settings ? this.settings = ig.game.spawnEntity(EntitySettingsController, ig.system.width / 2 + ig.game.screen.x, ig.system.height / 2, {
				horizontal: "center",
				vertical: "center",
				isSettingsMenu: this.isSettingsMenu
			}) : this.settings.pos.x = ig.system.width / 2 - this.settings.size.x / 2 + ig.game.screen.x;
			this.settings.easeIn(0.8);
			ig.game.settingIsShowed = !0
		},
		draw: function() {
			this.pos.x = ig.game.screen.x + this.devia.x;
			this.pos.y = ig.game.screen.y + this.devia.y;
			this.parent()
		},
		show: function(b) {
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {}.bind(this)
			}).start()
		},
		hide: function(b) {
			this.tween({
				pos: {
					x: this.pos.x,
					y: -200
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.hanger").requires("plugins.box2d.entity").defines(function() {
	EntityHanger = ig.Box2DEntity.extend({
		box2dType: 1,
		dynamicType: 2,
		density: 0,
		friction: 0,
		restitution: 0,
		size: {
			x: 16,
			y: 16
		},
		zIndex: 95,
		ragdoll: null,
		allowToDrawString: !1,
		isNearest: !1,
		distanceFromRagdoll: 0,
		init: function(b, c, d) {
			this.ragdoll = d.ragdoll;
			this.parent(b, c, d);
			this.ready();
			this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0];
			b = new Box2D.Common.Math.b2Vec2((b - this.size.x / 2) * Box2D.SCALE, (c - this.size.y / 2) * Box2D.SCALE);
			this.body.SetPositionAndAngle(b, this.body.GetAngle())
		},
		ready: function() {},
		preSolve: function(b, c) {
			b instanceof EntityRagdoll && c.SetEnabled(!1)
		},
		update: function() {
			this.parent();
			null != this.ragdoll && (this.distanceFromRagdoll = this.distanceTo(this.ragdoll))
		},
		draw: function() {
			var b = ig.system.context;
			this.parent();
			if (null != this.ragdoll) {
				var c = this.body.GetPosition(),
					d = c.x / Box2D.SCALE - ig.game.screen.x,
					c = c.y / Box2D.SCALE - ig.game.screen.y,
					f = this.ragdoll.body.GetPosition(),
					e = 0,
					j = f.x / Box2D.SCALE - ig.game.screen.x *
					Math.cos(e),
					f = f.y / Box2D.SCALE - ig.game.screen.y * Math.sin(e),
					n = f - c,
					l = j - d,
					e = Math.atan2(n, l),
					n = Math.sqrt(Math.pow(n, 2), Math.pow(l, 2)) / 6;
				Math.cos(e);
				Math.sin(e);
				Math.abs(n * Math.cos(e) * Math.cos(e));
				!0 == this.allowToDrawString && (b.save(), b.strokeStyle = "#ffffff", b.lineWidth = 3, b.beginPath(), b.moveTo(d, c), b.lineTo(j, f), b.stroke(), b.closePath(), b.beginPath(), b.restore());
				b.save();
				b.strokeStyle = "#000000";
				b.fillStyle = "#bcbcbc";
				b.beginPath();
				b.arc(d, c, 15, 0, 2 * Math.PI);
				b.lineWidth = 2;
				b.fill();
				b.stroke();
				b.closePath();
				b.restore();
				!0 == this.allowToDrawString ? (b.save(), b.strokeStyle = "#000000", b.fillStyle = "#0061ff") : (b.save(), b.strokeStyle = "#000000", b.fillStyle = "#ffffff");
				b.beginPath();
				b.arc(d, c, 5, 0, 2 * Math.PI);
				b.lineWidth = 2;
				b.fill();
				b.stroke();
				b.closePath();
				b.restore();
				this.isNearest && (b.save(), b.strokeStyle = "#eeff00", b.fillStyle = "rgba(255,255,255,0)", b.beginPath(), b.arc(d, c, 35, 0, 2 * Math.PI), b.lineWidth = 4, b.setLineDash([6, 6]), b.fill(), b.stroke(), b.closePath(), b.restore(), 1 == ig.game.levelCounter && (b.save(), b.font = "20px arialroundedbold",
					b.fillStyle = "#43667B", b.textAlign = "center", b.fillText(_STRINGS.Game.Tutorial3, this.pos.x - 90 + 2 - ig.game.screen.x, this.pos.y), b.restore(), b.save(), b.font = "20px arialroundedbold", b.fillStyle = "#ffffff", b.textAlign = "center", b.fillText(_STRINGS.Game.Tutorial3, this.pos.x - 90 - ig.game.screen.x, this.pos.y), b.restore(), b.save(), b.font = "20px arialroundedbold", b.fillStyle = "#43667B", b.textAlign = "center", b.fillText(_STRINGS.Game.Tutorial4, this.pos.x - 90 + 2 - ig.game.screen.x, this.pos.y + 25), b.restore(), b.save(), b.font =
					"20px arialroundedbold", b.fillStyle = "#ffffff", b.textAlign = "center", b.fillText(_STRINGS.Game.Tutorial4, this.pos.x - 90 - ig.game.screen.x, this.pos.y + 25), b.restore()))
			}
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.jump-platform").requires("game.entities.global.marketjs-box2d-entity", "game.entities.global.marketjs-entity", "plugins.box2d.entity").defines(function() {
	EntityJumpPlatform = EntityMarketjsBox2dEntity.extend({
		objectImage: new ig.Image("media/graphics/gameplay/platform.png"),
		killOutLayer: !1,
		isDefaultObject: !1,
		box2dType: 0,
		dynamicType: 2,
		density: 0,
		friction: 0,
		restitution: 1.3,
		mass: 0,
		INERTIA: 0,
		ANGULAR_DAMPING: 0,
		zIndex: 95,
		init: function(b, c, d) {
			this.objectAngle = d.objectAngle;
			this.firstJumpPlatform =
				d.firstJumpPlatform;
			this.objectImage = this.objectImage;
			!0 == this.firstJumpPlatform && (this.restitution = 1);
			this.idleSheetInfo = {
				sheetImage: this.objectImage,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.currentAnim.alpha = 0;
			this.parent(b, c, d);
			this.objectJumpPlatformSprite = ig.game.spawnEntity(EntityObjectJumPlatformSprite, b, c, {
				objectAngle: this.objectAngle
			});
			this.objectJumpPlatformSprite.pos.y -= this.objectJumpPlatformSprite.size.y /
				2 + 8
		},
		beginContact: function(b) {
			ig.soundHandler.sfxPlayer.play("bounce");
			this.objectJumpPlatformSprite.bouncing();
			b.isFirstSpawn = !1
		},
		update: function() {
			this.parent()
		}
	});
	EntityObjectJumPlatformSprite = EntityMarketjsEntity.extend({
		objectImage: new ig.Image("media/graphics/gameplay/object-jum-platform.png"),
		gravityFactor: 0,
		collides: ig.Entity.COLLIDES.NEVER,
		killOutLayer: !1,
		zIndex: 96,
		init: function(b, c, d) {
			this.objectAngle = d.objectAngle;
			this.idleSheetInfo = {
				sheetImage: this.objectImage,
				sheetX: 2,
				sheetY: 3
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.bounce = new ig.Animation(this.idleSheet, 0.1, [4, 3, 2, 3, 0]);
			this.idle.angle = this.objectAngle;
			this.bounce.angle = this.objectAngle;
			this.currentAnim = this.idle;
			this.parent(b, c, d)
		},
		update: function() {
			this.parent();
			1 <= this.bounce.loopCount && (this.currentAnim = this.idle)
		},
		bouncing: function() {
			this.currentAnim = this.bounce.rewind()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.gameplay-controller").requires("impact.entity", "game.entities.buttons.button-skip-video", "game.entities.buttons.button-pause", "game.entities.gameplay.hanger", "game.entities.gameplay.jump-platform").defines(function() {
	EntityGameplayController = ig.Entity.extend({
		gravityFactor: 0,
		drawGuild: !1,
		drawInfo: !0,
		drawFps: !0,
		delay: 800,
		delay2: 60,
		alpha: 1,
		mapLength: 0,
		hangers: [],
		finishLinePosX: 0,
		cameraZoomValue: 1,
		levelIsComplete: !1,
		scaleX: 0.5,
		levelIsSkipped: !1,
		init: function(b, c,
			d) {
			this.parent(b, c, d);
			ig.global.wm || (ig.game.allowToClick = !0, ig.Timer.timeScale = 1, this.zIndex = 10, this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0)), this.devia = {}, this.devia.x = b, this.devia.y = c, ig.soundHandler.sfxPlayer.stop("win"), 1 == ig.game.levelCounter && (this.tutorial = ig.game.spawnEntity(EntityTutorial, 0, 0)), this.arrow = ig.game.spawnEntity(EntityArrow, 0, 0), 0 <= ig.game.levelCounter && 2 >= ig.game.levelCounter ? this.mapLength =
				1E3 : 3 <= ig.game.levelCounter && 6 >= ig.game.levelCounter ? this.mapLength = 1500 : 7 <= ig.game.levelCounter && 10 >= ig.game.levelCounter ? this.mapLength = 2E3 : 11 <= ig.game.levelCounter && 15 >= ig.game.levelCounter ? this.mapLength = 2500 : 16 <= ig.game.levelCounter && 20 >= ig.game.levelCounter ? this.mapLength = 3E3 : 21 <= ig.game.levelCounter && 30 >= ig.game.levelCounter ? this.mapLength = 3500 : 31 <= ig.game.levelCounter && 40 >= ig.game.levelCounter ? this.mapLength = 4E3 : 41 <= ig.game.levelCounter && 50 >= ig.game.levelCounter ? this.mapLength = 4500 : 51 <= ig.game.levelCounter &&
				60 >= ig.game.levelCounter ? this.mapLength = 5E3 : 61 <= ig.game.levelCounter && 70 >= ig.game.levelCounter ? this.mapLength = 5500 : 71 <= ig.game.levelCounter && 80 >= ig.game.levelCounter ? this.mapLength = 6E3 : 81 <= ig.game.levelCounter && (this.mapLength = 6500), this.shouldDrawGuild = this.disableRagdoll = this.shouldZoom = !1, this.gScale = 1, ig.ua.mobile && (this.delay = 600, this.isMobile = !0), this.soundReady = !0, this.soundTimer = new ig.Timer(2), this.soundTimer.pause(), !1 == ig.game.isDevMode && (this.btnPause = ig.game.spawnEntity(EntityButtonPause,
					34.2 * ig.system.width / 40, 1 * ig.system.height / 60, {
						horizontal: "center",
						vertical: "center",
						text: "",
						textSize: 34,
						isSettingsMenu: !1
					}), this.jumper = 0 <= ig.game.levelCounter && 2 >= ig.game.levelCounter ? ig.game.spawnEntity(EntityJumpPlatform, 25, 850, {
					objectAngle: 0,
					firstJumpPlatform: !0
				}) : 3 <= ig.game.levelCounter && 6 >= ig.game.levelCounter ? ig.game.spawnEntity(EntityJumpPlatform, 25, 850, {
					objectAngle: 0.1,
					firstJumpPlatform: !0
				}) : 7 <= ig.game.levelCounter && 10 >= ig.game.levelCounter ? ig.game.spawnEntity(EntityJumpPlatform, 25, 850, {
					objectAngle: 0.2,
					firstJumpPlatform: !0
				}) : ig.game.spawnEntity(EntityJumpPlatform, 25, 850, {
					objectAngle: 0.3,
					firstJumpPlatform: !0
				}), this.mapIndicator = ig.game.spawnEntity(EntityMapIndicator, 0, 0)), ig.game.sortEntitiesDeferred())
		},
		ready: function() {
			this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0]
		},
		update: function() {
			this.parent();
			if (!ig.game.isDevMode) {
				this.mapIndicator.mapIndicatorScale = this.ragdoll.pos.x / this.mapLength;
				if (null != this.ragdoll) {
					if ((this.ragdoll.pos.x > this.finishLinePosX || this.levelIsSkipped) &&
						!1 == this.levelIsComplete) {
						this.levelIsComplete = !0;
						ig.game.allowToClick = !1;
						this.ragdoll.gravityValue = 0;
						var b = this.ragdoll.body.GetLinearVelocity();
						b.x = this.ragdoll.body.GetLinearVelocity().x / 30;
						b.y = this.ragdoll.body.GetLinearVelocity().y / 30; - 10 > b.y && (b.y = 0);
						this.ragdoll.body.SetLinearVelocity(b);
						ig.soundHandler.sfxPlayer.play("win");
						this.shouldZoom = !0;
						this.btnPause.currentAnim.alpha = 0
					}
					1100 < this.ragdoll.pos.y && this.gameIsLose(); - 150 > this.ragdoll.pos.x && this.gameIsLose();
					ig.game.gameIsPaused ? this.ragdoll.body.SetActive(!1) :
						this.ragdoll.body.SetActive(!0)
				}
				this.shouldZoom && (this.gScale *= 1.03, ig.game.screen.x = this.finishLinePosX - 100, ig.game.screen.y = this.ragdoll.pos.y / 2, 1.5 <= this.gScale ? (this.shouldZoom = !1, ig.game.screen.x = this.finishLinePosX - 100, ig.game.screen.y = this.ragdoll.pos.y / 2, this.gScale = 1.5, this.gameIsWin()) : ig.system.context.scale(1.03, 1.03))
			}
		},
		draw: function() {
			if (!ig.global.wm) {
				this.parent();
				var b = ig.system.context,
					c = b.createLinearGradient(0, 0, 0, 700),
					d = "",
					f = "";
				switch (ig.game.selectedBackgroundIndex) {
					case 1:
						d =
							"#68a9ff";
						f = "#fe88ec";
						break;
					case 2:
						d = "#67a9ff";
						f = "#88f5fe";
						break;
					case 3:
						d = "#98c1e7";
						f = "#84f0bf";
						break;
					case 4:
						d = "#f45970";
						f = "#f092f7";
						break;
					case 5:
						d = "#ff8eb2", f = "#fdf18e"
				}
				c.addColorStop(0, d);
				c.addColorStop(1, f);
				b.save();
				b.fillStyle = c;
				b.fillRect(0, 0, ig.system.width, ig.system.height);
				b.restore()
			}
		},
		gameIsWin: function() {
			setTimeout(function() {
				ig.game.levelCounter == ig.game.nextLevelForUnlockCharacter && 1 < ig.game.levelCounter && (ig.game.newCharacterUnlocked = !0);
				ig.game.levelCounter++;
				ig.game.lastGeneratedLevel =
					[];
				ig.game.saveLastLevel();
				ig.system.context.setTransform(1, 0, 0, 1, 0, 0);
				ig.game.director.loadLevel(1)
			}.bind(this), 1500)
		},
		gameIsLose: function() {
			ig.soundHandler.sfxPlayer.play("lose");
			ig.game.director.reloadLevel()
		}
	});
	EntityMapIndicator = EntityMarketjsEntity.extend({
		mapIndicatorBar: new ig.Image("media/graphics/gameplay/map-indicator-bar.png"),
		mapIndicatorFill: new ig.Image("media/graphics/gameplay/map-indicator-fill.png"),
		killOutLayer: !1,
		zIndex: 300,
		mapIndicatorScale: 1,
		init: function(b, c, d) {
			this.parent(b,
				c, d);
			this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		draw: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]);
			var b = ig.system.context;
			if (!1 == this.gc.levelIsComplete) this.mapIndicatorBar.draw(ig.system.width / 2 - this.mapIndicatorBar.width / 2, 40, 0, 0, this.mapIndicatorBar.width, this.mapIndicatorBar.height), this.mapIndicatorFill.draw(ig.system.width /
				2 - this.mapIndicatorBar.width / 2, 40, 0, 0, this.mapIndicatorFill.width * this.mapIndicatorScale, this.mapIndicatorFill.height), b.save(), b.font = "30px arialroundedbold", b.fillStyle = "#ffffff", b.textAlign = "right", b.fillText(ig.game.levelCounter, ig.system.width / 2 - this.mapIndicatorBar.width / 2 - 15, 51), b.restore(), b.save(), b.font = "30px arialroundedbold", b.fillStyle = "#ffffff", b.textAlign = "left", b.fillText(ig.game.levelCounter + 1, ig.system.width / 2 + this.mapIndicatorBar.width / 2 + 15, 51);
			else {
				var c = _STRINGS.Game.LevelCleared;
				!0 == this.levelIsSkipped && (c = _STRINGS.Game.LevelSkipped);
				b.save();
				b.font = "30px arialroundedbold";
				b.fillStyle = "#43667B";
				b.textAlign = "center";
				b.fillText(c, 194, 204);
				b.restore();
				b.save();
				b.font = "30px arialroundedbold";
				b.fillStyle = "#ffffff";
				b.textAlign = "center";
				b.fillText(c, 190, 200)
			}
			b.restore()
		}
	});
	EntityTutorial = EntityMarketjsEntity.extend({
		imgHandPointer: new ig.Image("media/graphics/ui-gameplay/img-hand-pointer.png"),
		killOutLayer: !1,
		zIndex: 50,
		bodyScale: 0.6,
		init: function(b, c, d) {
			this.idleSheetInfo = {
				sheetImage: this.imgHandPointer,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
			this.parent(b, c, d);
			this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0];
			this.animate()
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]);
			this.setScale(this.bodyScale, this.bodyScale)
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			this.pos.x = 250;
			this.pos.y = 780;
			b.save();
			b.font = "25px arialroundedbold";
			b.fillStyle = "#43667B";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.Tutorial1 + " ", 272 - ig.game.screen.x, 702);
			b.restore();
			b.save();
			b.font = "25px arialroundedbold";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.Tutorial1 + " ", 270 - ig.game.screen.x, 700);
			b.restore();
			b.save();
			b.font = "25px arialroundedbold";
			b.fillStyle = "#43667B";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.Tutorial2, 272 - ig.game.screen.x, 742);
			b.restore();
			b.save();
			b.font = "25px arialroundedbold";
			b.fillStyle = "#ffffff";
			b.textAlign =
				"center";
			b.fillText(_STRINGS.Game.Tutorial2, 270 - ig.game.screen.x, 740);
			b.restore()
		},
		animate: function() {
			this.tween({
				bodyScale: 0.7
			}, 0.5, {
				loop: ig.Tween.Loop.Reverse,
				onComplete: function() {}.bind(this)
			}).start()
		}
	});
	EntityArrow = EntityMarketjsEntity.extend({
		imgArrow: new ig.Image("media/graphics/ui-gameplay/img-arrow.png"),
		killOutLayer: !1,
		zIndex: 50,
		init: function(b, c, d) {
			this.idleSheetInfo = {
				sheetImage: this.imgArrow,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle =
				new ig.Animation(this.idleSheet, 1, [0]);
			this.parent(b, c, d);
			this.pos.x = 270;
			this.pos.y = 150;
			this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0];
			this.animate();
			this.setScale(0.7, 0.7)
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]);
			this.setScale(this.bodyScale, this.bodyScale)
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle = "#43667B";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.Go,
				232 - ig.game.screen.x, this.pos.y + 2 + 25);
			b.restore();
			b.save();
			b.font = "35px arialroundedbold";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.Go, 230 - ig.game.screen.x, this.pos.y + 25);
			b.restore()
		},
		animate: function() {
			this.tween({
				pos: {
					x: 280,
					y: this.pos.y
				}
			}, 0.3, {
				loop: ig.Tween.Loop.Reverse,
				onComplete: function() {}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.ball-trail").requires("impact.entity").defines(function() {
	GameTrailNode = ig.Class.extend({
		x: 0,
		y: 0,
		time: 0,
		remainder: 0,
		prev: null,
		next: null,
		l: 0,
		w: 1,
		dx: 0,
		dy: 0,
		adx: 0,
		ady: 0,
		ndx: 0,
		ndy: 0,
		init: function(b, c, d, f) {
			this.x = b;
			this.y = c;
			this.time = d;
			this.remainder = f
		},
		setNext: function(b) {
			this.next = b;
			b = this.next.x - this.x;
			var c = this.next.y - this.y,
				d = Math.sqrt(b * b + c * c);
			this.l = d;
			this.next.l = d;
			this.next.dx = b / d;
			this.next.dy = c / d;
			this.next.ndx = -this.next.dy;
			this.next.ndy = this.next.dx;
			this.prev ?
				(this.adx = (this.dx + this.next.dx) / 2, this.ady = (this.dy + this.next.dy) / 2, this.ndx = -this.ady, this.ndy = this.adx) : (this.adx = this.next.dx, this.ady = this.next.dy, this.ndx = -this.ady, this.ndy = this.adx, this.dx = this.next.dx, this.dy = this.next.dy)
		},
		setPrev: function(b) {
			this.prev = b
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.position-indicator").requires("game.entities.global.marketjs-entity").defines(function() {
	EntityPositionIndicator = EntityMarketjsEntity.extend({
		img: new ig.Image("media/graphics/ui-gameplay/img-arrow-up.png"),
		gravityFactor: 0,
		collides: ig.Entity.COLLIDES.NEVER,
		killOutLayer: !1,
		zIndex: 1E3,
		alphaValue: 0,
		init: function(b, c, d) {
			this.idleSheetInfo = {
				sheetImage: this.img,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
				0.1, [0]);
			this.parent(b, c, d)
		},
		update: function() {
			this.parent();
			this.currentAnim.alpha = this.alphaValue
		},
		show: function() {
			this.alphaValue = 1
		},
		hide: function() {
			this.alphaValue = 0
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.ragdoll").requires("game.entities.global.marketjs-box2d-entity", "game.entities.global.marketjs-entity", "game.entities.controllers.gameplay-controller", "game.entities.gameplay.ball-trail", "game.entities.gameplay.position-indicator").defines(function() {
	EntityRagdoll = EntityMarketjsBox2dEntity.extend({
		killOutLayer: !1,
		box2dType: 1,
		dynamicType: 0,
		density: 3,
		friction: 0,
		restitution: 0,
		m_angularDamping: 100,
		m_linearDamping: 100,
		angularDamping: 100,
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.A,
		zIndex: 150,
		isBody: !0,
		createRope: !1,
		connectAngle: 0,
		hanger: null,
		nearestHanger: null,
		allowToGetNearestHanger: !1,
		gravityValue: 487,
		isFirstSpawn: !0,
		isCollideWithStaticPlatform: !1,
		currentVelX: 0,
		currentVelY: 0,
		init: function(b, c, d) {
			this.charactersData = ig.game.spawnEntity(EntityCharactersData, 0, 0);
			this.ballSheetInfo = {
				sheetImage: this.charactersData.data[ig.game.selectedCharacter].ballSprite,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("ball");
			this.setSize("ball");
			this.currentAnim = this.ball = new ig.Animation(this.ballSheet,
				0.1, [0]);
			this.parent(b, c, d);
			this.force = 1625;
			ig.global.wm || (this.links = [], this.joints = [], this.ropeOn = !1, this.limitDx = ig.system.width / 2 - 40, this.limitDx2 = ig.system.width / 2 + 40, this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0], this.mapLength = this.gc.mapLength + 2E3, this.mousePos0 = {}, this.mousePos00 = {}, this.shouldRemoveRope = !1, this.playerSprite = ig.game.spawnEntity(EntityPlayerSprite, 300, 400, {
				gameplaySprite: this.charactersData.data[ig.game.selectedCharacter].gameplaySprite
			}), this.playerSprite.offset = {
				x: 0 + this.playerSprite.size.x / 2,
				y: 0 + this.playerSprite.size.y / 2
			}, this.positionIndicator = ig.game.spawnEntity(EntityPositionIndicator, this.pos.x, 10), ig.game.sortEntitiesDeferred())
		},
		ready: function() {},
		update: function() {
			if (null != this.body) {
				this.parent();
				this.positionIndicator.pos.x = this.pos.x; - 20 > this.pos.y && !1 == this.gc.levelIsComplete ? this.positionIndicator.show() : this.positionIndicator.hide();
				this.enableFakeGravity();
				this.checkCurrentSpriteState();
				null != this.playerSprite && (this.playerSprite.pos.x = this.pos.x +
					this.size.x / 2, !0 == this.gc.levelIsComplete && 0 > this.pos.y ? (console.log("HERE"), this.playerSprite.pos.y = 100) : this.playerSprite.pos.y = this.pos.y + this.size.y / 2, null != this.hanger && (this.playerSprite.currentAnim.angle = this.angleTo(this.hanger)));
				if (!1 == ig.game.isDevMode) {
					var b = this.body.GetPosition().x / Box2D.SCALE;
					b - ig.game.screen.x < this.limitDx ? ig.game.screen.x = b - this.limitDx : b - ig.game.screen.x > this.limitDx2 && (ig.game.screen.x = b - this.limitDx2);
					0 > ig.game.screen.x ? ig.game.screen.x = 0 : ig.game.screen.x > this.mapLength -
						ig.system.width && (ig.game.screen.x = this.mapLength - ig.system.width)
				}
				this.searchNearestHanger();
				if (!1 == this.gc.levelIsComplete) {
					if (this.createRope) {
						this.hanger.allowToDrawString = !0;
						var b = this.body.GetPosition(),
							c = this.hanger.body.GetPosition(),
							b = Math.sqrt(Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2));
						this.createDistanceJoint(b);
						this.createRope = !1;
						this.ropeOn = !0;
						b = this.body.GetLinearVelocity();
						ig.game.sortEntitiesDeferred()
					}
					b = this.body.GetLinearVelocity();
					5 < b.y && (this.isCollideWithStaticPlatform = !1);
					ig.input.pressed("click") &&
						!1 == ig.game.gameIsPaused && 80 < this.gc.pointer.pos.y && (!0 == this.isCollideWithStaticPlatform ? this.jump() : (this.currentVelX = b.x, this.currentVelY = b.y, ig.soundHandler.sfxPlayer.play("ropeOn"), this.shootString()));
					ig.input.released("click") && (80 < this.gc.pointer.pos.y && !1 == ig.game.gameIsPaused) && (ig.soundHandler.sfxPlayer.play("ropeOff"), this.removeRope())
				} else this.removeRope(), this.currentAnim.alpha = 0, this.playerSprite.alphaValue = 1, this.playerSprite.currentAnim.angle = -1.5, this.playerSprite.currentAnim =
					this.playerSprite.fly
			}
		},
		draw: function() {
			this.parent()
		},
		enableFakeGravity: function() {
			var b = 1.8 * (this.body.m_mass * this.gravityValue) * Box2D.SCALE;
			!0 == ig.game.isDevMode && (b = 0);
			this.body.ApplyForce(new Box2D.Common.Math.b2Vec2(0, b), this.body.GetPosition())
		},
		checkCurrentSpriteState: function() {
			!0 == this.isFirstSpawn ? (this.currentAnim.alpha = 0, this.playerSprite.alphaValue = 1, this.playerSprite.currentAnim.angle = -1.5, this.playerSprite.currentAnim = this.playerSprite.fall) : (null != this.hanger && this.hanger.allowToDrawString ?
				(this.currentAnim.alpha = 0, this.playerSprite.alphaValue = 1) : (this.currentAnim.alpha = 1, this.playerSprite.alphaValue = 0), 0 != this.playerSprite.alphaValue && (0 <= this.body.GetLinearVelocity().x ? (this.currentAnim.flip.y = !1, this.playerSprite.currentAnim.flip.y = !1, this.playerSprite.currentAnim = 0 > this.playerSprite.currentAnim.angle ? -1.5 >= this.playerSprite.currentAnim.angle && -4 <= this.playerSprite.currentAnim.angle ? this.playerSprite.swing2 : this.playerSprite.swing1 : 1.5 <= this.playerSprite.currentAnim.angle && 4 >= this.playerSprite.currentAnim.angle ?
					this.playerSprite.swing2 : this.playerSprite.swing1) : (this.currentAnim.flip.y = !1, this.playerSprite.currentAnim.flip.y = !0, this.playerSprite.currentAnim = 0 > this.playerSprite.currentAnim.angle ? -1.5 >= this.playerSprite.currentAnim.angle && -4 <= this.playerSprite.currentAnim.angle ? this.playerSprite.swing1 : this.playerSprite.swing2 : 1.5 <= this.playerSprite.currentAnim.angle && 4 >= this.playerSprite.currentAnim.angle ? this.playerSprite.swing2 : this.playerSprite.swing1), 5 > Math.abs(this.body.GetLinearVelocity().x) && (this.playerSprite.currentAnim =
					this.playerSprite.swingIdle)))
		},
		applyForce: function(b) {
			var c = this.force;
			b && (c = -this.force);
			var d = Math.PI / 2;
			this.ropeOn && (b = this.body.GetPosition(), d = this.hanger.body.GetPosition(), d = Math.atan2(b.y - d.y, b.x - d.x));
			b = c * Math.sin(d);
			c = -c * Math.cos(d);
			c = new Box2D.Common.Math.b2Vec2(b, c);
			this.body.ApplyForce(c, this.body.GetPosition())
		},
		applyAngularForce: function() {
			var b = 100 * this.force;
			this.pos.y < this.hanger.pos.y && (b = 100 * -this.force);
			var c = Math.PI / 2;
			if (this.ropeOn) var d = this.body.GetPosition(),
				c = this.hanger.body.GetPosition(),
				c = Math.atan2(d.y - c.y, d.x - c.x);
			d = b * Math.sin(c);
			b = -b * Math.cos(c);
			b = new Box2D.Common.Math.b2Vec2(d, b);
			this.body.ApplyForce(b, this.body.GetPosition())
		},
		searchNearestHanger: function() {
			this.nearestHanger = null;
			for (var b = 0; b < this.gc.hangers.length; b++) null == this.nearestHanger ? this.nearestHanger = this.gc.hangers[b] : this.nearestHanger.distanceFromRagdoll > this.gc.hangers[b].distanceFromRagdoll && (this.nearestHanger = this.gc.hangers[b]), this.gc.hangers[b].isNearest = !1;
			this.nearestHanger.isNearest = !0
		},
		getNearestHanger: function() {
			this.allowToGetNearestHanger = !1;
			this.hanger = this.nearestHanger
		},
		shootString: function() {
			this.isFirstSpawn = !1;
			this.ropeOn ? this.removeRope() : !1 == ig.game.gameIsPaused && (this.getNearestHanger(), this.createRope = !0, this.prepareRope(), this.gc.ropeUsed += 1)
		},
		removeRope: function() {
			if (this.ropeOn) {
				this.destroyDistanceJoint();
				this.hanger.allowToDrawString = !1;
				this.hanger.isNearest = !1;
				this.allowToGetNearestHanger = !0;
				var b = this.body.GetLinearVelocity();
				this.hanger.pos.y < this.pos.y && !1 == this.gc.levelIsComplete && (b.y = this.body.GetLinearVelocity().y -
					30)
			}
		},
		prepareRope: function() {
			var b = 50;
			0 > this.body.GetLinearVelocity().x && (b = -50);
			this.connectAngle = -Math.atan2(50 - this.pos.y, b)
		},
		jump: function() {
			this.isCollideWithStaticPlatform = !1;
			var b = this.body.GetLinearVelocity();
			this.hanger.pos.y < this.pos.y && !1 == this.gc.levelIsComplete && (b.x = 0 != b.x ? 20 * (this.body.GetLinearVelocity().x / Math.abs(this.body.GetLinearVelocity().x)) : this.body.GetLinearVelocity().x + 5, b.y = this.body.GetLinearVelocity().y - 40)
		},
		goUp: function(b) {
			if (this.ropeOn) {
				var c = this.distanceJoint.GetLength();
				if (!(35 > c / Box2D.SCALE)) {
					var d = 2;
					b && (d = b);
					this.distanceJoint.SetLength(c - d * Box2D.SCALE)
				}
			}
		},
		goDown: function(b) {
			if (this.ropeOn) {
				var c = this.distanceJoint.GetLength();
				if (!(460 < c / Box2D.SCALE)) {
					var d = 2;
					b && (d = b);
					this.distanceJoint.SetLength(c + d * Box2D.SCALE)
				}
			}
		},
		createDistanceJoint: function(b) {
			var c = this.body.GetPosition(),
				d = this.hanger.body.GetPosition(),
				f = new Box2D.Dynamics.Joints.b2DistanceJointDef;
			f.bodyA = this.hanger.body;
			f.bodyB = this.body;
			f.localAnchorA = new Box2D.Common.Math.b2Vec2(0, 0);
			f.localAnchorB =
				new Box2D.Common.Math.b2Vec2(0, 0);
			b || (c = this.body.GetPosition(), d = this.hanger.body.GetPosition(), b = Math.sqrt(Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2)));
			f.length = b;
			this.distanceJoint = ig.world.CreateJoint(f)
		},
		destroyDistanceJoint: function() {
			null != this.distanceJoint && (ig.world.DestroyJoint(this.distanceJoint), this.distanceJoint = null, this.ropeOn = !1)
		}
	});
	EntityPlayerSprite = EntityMarketjsEntity.extend({
		gravityFactor: 0,
		collides: ig.Entity.COLLIDES.NEVER,
		killOutLayer: !1,
		zIndex: 150,
		alphaValue: 1,
		init: function(b,
			c, d) {
			this.gameplaySprite = d.gameplaySprite;
			this.playerSheetInfo = {
				sheetImage: this.gameplaySprite,
				sheetX: 2,
				sheetY: 3
			};
			this.setSpriteSheet("player");
			this.setSize("player");
			this.swing1 = new ig.Animation(this.playerSheet, 0.1, [0]);
			this.swing2 = new ig.Animation(this.playerSheet, 0.1, [2]);
			this.swingIdle = new ig.Animation(this.playerSheet, 0.1, [4]);
			this.fly = new ig.Animation(this.playerSheet, 0.1, [1]);
			this.fall = new ig.Animation(this.playerSheet, 0.1, [3]);
			this.idle = new ig.Animation(this.playerSheet, 0.1, [4]);
			this.currentAnim =
				this.swing2;
			this.parent(b, c, d)
		},
		ready: function() {
			this.playerController = ig.game.getEntitiesByType(EntityRagdoll)[0]
		},
		update: function() {
			this.parent();
			this.currentAnim.alpha = this.alphaValue
		},
		draw: function() {
			this.parent()
		}
	});
	EntityBallTrail = ig.Entity.extend({
		zIndex: 150,
		nodeList: [],
		lineList: [],
		pollInterval: 0.01,
		pollMaxDuration: 0.15,
		maxPollInterval: 0.1,
		nodeMinDistance: 16,
		chains: [],
		enabled: !1,
		ball: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			b.save();
			for (var c = 0; c < this.lineList.length; c++) this.drawLineFromNodeList(this.lineList[c]);
			this.drawLineFromNodeList(this.nodeList);
			b.restore()
		},
		update: function() {
			this.parent();
			this.pos.x = this.ball.pos.x + this.ball.size.x / 2;
			this.pos.y = this.ball.pos.y + this.ball.size.y / 2;
			for (var b = ig.system.clock.delta(), c = b % this.pollInterval; 0 < this.nodeList.length;) {
				var d = this.nodeList[0];
				if (b - c - (d.time - d.remainder) >= this.pollMaxDuration) this.nodeList.splice(0, 1), 0 < this.nodeList.length && this.nodeList[0].setPrev(null);
				else break
			}
			for (var f =
					0; f < this.lineList.length;) {
				for (var e = this.lineList[f]; 0 < e.length;)
					if (d = e[0], b - c - (d.time - d.remainder) >= this.pollMaxDuration) e.splice(0, 1), 0 < e.length && e[0].setPrev(null);
					else break;
				0 == e.length ? this.lineList.splice(0, 1) : f++
			}
			if (0 < this.nodeList.length && (d = this.nodeList[this.nodeList.length - 1], b - (d.time - d.remainder) < this.pollInterval)) return;
			f = this.ball.pos.x + this.ball.size.x / 2 - ig.game.screen.x;
			e = this.ball.pos.y + this.ball.size.y / 2 - ig.game.screen.y;
			if (0 < this.nodeList.length) {
				var d = this.nodeList[this.nodeList.length -
						1],
					j = f - d.x,
					d = e - d.y;
				if (j * j + d * d < this.nodeMinDistance) return
			}
			b = new GameTrailNode(f, e, b, c);
			0 < this.nodeList.length && (d = this.nodeList[this.nodeList.length - 1], d.setNext(b), b.setPrev(d));
			this.nodeList.push(b)
		},
		drawLineFromNodeList: function(b) {
			if (b && !(1 >= b.length)) {
				var c = ig.system.context;
				c.save();
				c.lineWidth = 2;
				c.strokeStyle = "rgba(255,255,255,0.5)";
				for (var d = 10, f = 0; f < b.length; f++) {
					var e = b[f],
						j = ig.system.clock.delta() - e.time,
						j = j / this.pollMaxDuration;
					1 < j && (j = 1);
					j = 1 - j;
					e.t = j;
					e.w = d * j
				}
				c.beginPath();
				e = b[0];
				j = e.x -
					e.dx * e.w;
				e = e.y - e.dy * e.w;
				c.moveTo(j, e);
				for (f = 0; f < b.length - 1; f++) e = b[f], j = e.x + e.ndx * e.w, e = e.y + e.ndy * e.w, c.lineTo(j, e);
				e = b[b.length - 1];
				d > e.l && (d = e.l);
				j = e.x + e.ndx * e.w - e.dx * d;
				e = e.y + e.ndy * e.w - e.dy * d;
				c.lineTo(j, e);
				e = b[b.length - 1];
				j = e.x + e.dx * e.w;
				e = e.y + e.dy * e.w;
				c.lineTo(j, e);
				e = b[b.length - 1];
				j = e.x - e.ndx * e.w - e.dx * d;
				e = e.y - e.ndy * e.w - e.dy * d;
				c.lineTo(j, e);
				for (f = b.length - 2; 0 <= f; f--) e = b[f], j = e.x - e.ndx * e.w, e = e.y - e.ndy * e.w, c.lineTo(j, e);
				c.closePath();
				c.fillStyle = "rgba(255,255,255,0.75)";
				c.fill();
				d = 6;
				for (f = 0; f < b.length; f++) e =
					b[f], j = ig.system.clock.delta() - e.time, j /= this.pollMaxDuration, 1 < j && (j = 1), j -= 1, e.t = j, e.w = d * j * j;
				c.beginPath();
				e = b[0];
				j = e.x - e.dx * e.w;
				e = e.y - e.dy * e.w;
				c.moveTo(j, e);
				for (f = 0; f < b.length - 1; f++) e = b[f], j = e.x + e.ndx * e.w, e = e.y + e.ndy * e.w, c.lineTo(j, e);
				e = b[b.length - 1];
				d > e.l && (d = e.l);
				j = e.x + e.ndx * e.w - e.dx * d;
				e = e.y + e.ndy * e.w - e.dy * d;
				c.lineTo(j, e);
				e = b[b.length - 1];
				j = e.x + e.dx * e.w;
				e = e.y + e.dy * e.w;
				c.lineTo(j, e);
				e = b[b.length - 1];
				j = e.x - e.ndx * e.w - e.dx * d;
				e = e.y - e.ndy * e.w - e.dy * d;
				c.lineTo(j, e);
				for (f = b.length - 2; 0 <= f; f--) e = b[f], j = e.x -
					e.ndx * e.w, e = e.y - e.ndy * e.w, c.lineTo(j, e);
				c.closePath();
				c.fillStyle = "rgb(255,255,255)";
				c.fill();
				c.restore()
			}
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.finish-line").requires("impact.entity").defines(function() {
	EntityFinishLine = ig.Entity.extend({
		imgFinishLine: new ig.Image("media/graphics/gameplay/finish-line.png"),
		gravityFactor: 0,
		collides: ig.Entity.COLLIDES.NEVER,
		killOutLayer: !1,
		zIndex: 50,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			this.parent();
			for (var b = 0; 5 > b; b++) this.imgFinishLine.draw(this.pos.x - ig.game.screen.x, this.pos.y - 660 * b) - ig.game.screen.y;
			for (b = 0; 2 > b; b++) this.imgFinishLine.draw(this.pos.x -
				ig.game.screen.x, this.pos.y + 660 * b) - ig.game.screen.y
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.static-platform").requires("game.entities.global.marketjs-box2d-entity", "game.entities.global.marketjs-entity", "plugins.box2d.entity").defines(function() {
	EntityStaticPlatform = EntityMarketjsBox2dEntity.extend({
		objectImage: new ig.Image("media/graphics/gameplay/img-elips.png"),
		killOutLayer: !1,
		isDefaultObject: !1,
		box2dType: 2,
		dynamicType: 2,
		density: 0,
		friction: 0,
		restitution: 0,
		vertices: [{
			x: -4.5,
			y: -4.5
		}, {
			x: 5,
			y: -4.5
		}, {
			x: 5,
			y: 4.5
		}, {
			x: -4.5,
			y: 4.5
		}],
		mass: 0,
		INERTIA: 0,
		ANGULAR_DAMPING: 0,
		zIndex: 95,
		isVertical: !0,
		originPos: {
			x: 0,
			y: 0
		},
		init: function(b, c, d) {
			this.isVertical = d.isVertical;
			this.objectImage = this.objectImage;
			this.idleSheetInfo = {
				sheetImage: this.objectImage,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.originPos = this.pos;
			console.log(this.originPos);
			this.isVertical ? (this.leftCollider = ig.game.spawnEntity(EntityRoundCollider, this.pos.x, this.pos.y - 45, {
					hostEntity: this
				}),
				this.rightCollider = ig.game.spawnEntity(EntityRoundCollider, this.pos.x, this.pos.y + this.size.x - 90 - 45, {
					hostEntity: this
				})) : (this.leftCollider = ig.game.spawnEntity(EntityRoundCollider, this.pos.x, this.pos.y - 45, {
				hostEntity: this
			}), this.rightCollider = ig.game.spawnEntity(EntityRoundCollider, this.pos.x + this.size.x - 90, this.pos.y - 45, {
				hostEntity: this
			}))
		},
		beginContact: function(b) {
			b.isFirstSpawn = !1;
			b.isCollideWithStaticPlatform = !0
		},
		update: function() {
			this.parent();
			this.originPos = this.pos;
			var b = new Box2D.Common.Math.b2Vec2((this.originPos.x +
				45) * Box2D.SCALE, (this.originPos.y + 45) * Box2D.SCALE);
			this.leftCollider.body.SetPositionAndAngle(b, 0);
			b = new Box2D.Common.Math.b2Vec2((this.originPos.x + this.size.x - 45) * Box2D.SCALE, (this.originPos.y + 45) * Box2D.SCALE);
			this.rightCollider.body.SetPositionAndAngle(b, 0)
		}
	});
	EntityRoundCollider = ig.Box2DEntity.extend({
		box2dType: 1,
		dynamicType: 2,
		density: 0,
		friction: 0,
		restitution: 0,
		size: {
			x: 90,
			y: 90
		},
		zIndex: 95,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		preSolve: function(b, c) {
			b instanceof EntityStaticPlatform && c.SetEnabled(!1)
		},
		beginContact: function(b) {
			b.isCollideWithStaticPlatform = !0
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.big-circle").requires("game.entities.global.marketjs-box2d-entity", "game.entities.global.marketjs-entity", "game.entities.gameplay.hanger", "plugins.box2d.entity").defines(function() {
	EntityBigCircle = EntityMarketjsBox2dEntity.extend({
		objectImage: new ig.Image("media/graphics/gameplay/img-big-circle.png"),
		killOutLayer: !1,
		isDefaultObject: !1,
		box2dType: 1,
		dynamicType: 2,
		density: 0,
		friction: 0,
		restitution: 0,
		mass: 0,
		INERTIA: 0,
		ANGULAR_DAMPING: 0,
		zIndex: 95,
		init: function(b, c, d) {
			this.objectImage =
				this.objectImage;
			this.idleSheetInfo = {
				sheetImage: this.objectImage,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0];
			this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0];
			this.BigCircleHanger = ig.game.spawnEntity(EntityHanger, this.pos.x + this.size.x / 2 + 8, this.pos.y + 8, {
				ragdoll: this.ragdoll
			})
		},
		ready: function() {
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]);
			null == this.ragdoll && (this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0]);
			console.log(this.pos);
			this.gc.hangers.push(this.BigCircleHanger)
		},
		preSolve: function(b, c) {
			b instanceof EntityHanger && c.SetEnabled(!1)
		},
		beginContact: function(b) {
			b.isFirstSpawn = !1
		},
		update: function() {
			this.parent();
			var b = new Box2D.Common.Math.b2Vec2((this.pos.x + this.size.x / 2 + 8) * Box2D.SCALE, (this.pos.y + this.size.y / 2 + 8) * Box2D.SCALE);
			this.BigCircleHanger.body.SetPositionAndAngle(b, 0)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.level-objects-data").requires("impact.entity").defines(function() {
	EntityLevelObjectsData = ig.Entity.extend({
		devTemplates: [{
			size: 450,
			data: [{
				hangers: [{
					xPos: 225,
					yPos: 280
				}],
				staticPlatform: [{
					isVertical: !1,
					xPos: 140,
					yPos: 700
				}]
			}, {
				hangers: [{
					xPos: 225,
					yPos: 280
				}],
				staticPlatform: [{
					isVertical: !1,
					xPos: 180,
					yPos: 100
				}, {
					isVertical: !1,
					xPos: 180,
					yPos: 370
				}]
			}, {
				staticPlatform: [{
					isVertical: !1,
					xPos: 180,
					yPos: 400
				}],
				jumpPlatform: [{
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 140,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 900
				}]
			}, {
				jumpPlatform: [{
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 140,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 900
				}]
			}, {
				hangers: [{
					xPos: 225,
					yPos: 280
				}],
				jumpPlatform: [{
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 900
				}]
			}, {
				hangers: [{
					xPos: 210,
					yPos: 440
				}],
				jumpPlatform: [{
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 820
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 684
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 548
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 820
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 684
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 548
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 140,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 900
				}]
			}, {
				hangers: [{
					xPos: 210,
					yPos: 220
				}, {
					xPos: 210,
					yPos: 700
				}],
				jumpPlatform: [{
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 600
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 464
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 328
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 600
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 464
				}, {
					angle: 270 *
						Math.PI / 180,
					xPos: 128,
					yPos: 328
				}]
			}]
		}],
		tutorial: [{
			size: 1E3,
			data: [{
				hangers: [{
					xPos: 100,
					yPos: 300
				}, {
					xPos: 100,
					yPos: 600
				}, {
					xPos: 400,
					yPos: 300
				}, {
					xPos: 700,
					yPos: 300
				}]
			}]
		}],
		templates: [{
			size: 400,
			data: [{
				hangers: [{
					xPos: 200,
					yPos: 150
				}]
			}, {
				hangers: [{
					xPos: 200,
					yPos: 150
				}, {
					xPos: 200,
					yPos: 350
				}]
			}, {
				hangers: [{
					xPos: 200,
					yPos: 150
				}, {
					xPos: 200,
					yPos: 350
				}, {
					xPos: 200,
					yPos: 550
				}]
			}, {
				hangers: [{
					xPos: 200,
					yPos: 150
				}, {
					xPos: 200,
					yPos: 350
				}, {
					xPos: 200,
					yPos: 550
				}, {
					xPos: 200,
					yPos: 750
				}]
			}, {
				hangers: [{
					xPos: 200,
					yPos: 250
				}]
			}, {
				hangers: [{
					xPos: 200,
					yPos: 250
				}, {
					xPos: 200,
					yPos: 450
				}]
			}, {
				hangers: [{
					xPos: 200,
					yPos: 250
				}, {
					xPos: 200,
					yPos: 450
				}, {
					xPos: 200,
					yPos: 650
				}]
			}]
		}, {
			size: 450,
			data: [{
				hangers: [{
					xPos: 225,
					yPos: 280
				}],
				staticPlatform: [{
					isVertical: !1,
					xPos: 140,
					yPos: 700
				}]
			}, {
				hangers: [{
					xPos: 225,
					yPos: 280
				}],
				staticPlatform: [{
					isVertical: !1,
					xPos: 140,
					yPos: 100
				}, {
					isVertical: !1,
					xPos: 140,
					yPos: 800
				}]
			}, {
				staticPlatform: [{
					isVertical: !1,
					xPos: 140,
					yPos: 100
				}],
				jumpPlatform: [{
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 140,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 900
				}]
			}, {
				jumpPlatform: [{
					angle: 0 *
						Math.PI / 180,
					xPos: 0,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 140,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 900
				}]
			}, {
				hangers: [{
					xPos: 225,
					yPos: 280
				}],
				jumpPlatform: [{
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 900
				}]
			}, {
				hangers: [{
					xPos: 210,
					yPos: 440
				}],
				jumpPlatform: [{
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 820
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 684
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 548
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 820
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 684
				}, {
					angle: 270 * Math.PI /
						180,
					xPos: 128,
					yPos: 548
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 140,
					yPos: 900
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 900
				}]
			}, {
				hangers: [{
					xPos: 210,
					yPos: 220
				}, {
					xPos: 210,
					yPos: 700
				}],
				jumpPlatform: [{
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 600
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 464
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 328
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 600
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 464
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 328
				}]
			}, {
				hangers: [{
					xPos: 210,
					yPos: 450
				}],
				jumpPlatform: [{
					angle: 90 *
						Math.PI / 180,
					xPos: 160,
					yPos: 350
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 214
				}, {
					angle: 90 * Math.PI / 180,
					xPos: 160,
					yPos: 78
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 350
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 214
				}, {
					angle: 270 * Math.PI / 180,
					xPos: 128,
					yPos: 78
				}]
			}, {
				hangers: [{
					xPos: 210,
					yPos: 450
				}],
				jumpPlatform: [{
					angle: 45 * Math.PI / 180,
					xPos: 195,
					yPos: 405
				}, {
					angle: 135 * Math.PI / 180,
					xPos: 195,
					yPos: 515
				}, {
					angle: 225 * Math.PI / 180,
					xPos: 90,
					yPos: 515
				}, {
					angle: 315 * Math.PI / 180,
					xPos: 90,
					yPos: 405
				}]
			}, {
				hangers: [{
					xPos: 210,
					yPos: 120
				}, {
					xPos: 210,
					yPos: 830
				}],
				jumpPlatform: [{
					angle: 45 * Math.PI / 180,
					xPos: 195,
					yPos: 75
				}, {
					angle: 135 * Math.PI / 180,
					xPos: 195,
					yPos: 185
				}, {
					angle: 225 * Math.PI / 180,
					xPos: 90,
					yPos: 185
				}, {
					angle: 315 * Math.PI / 180,
					xPos: 90,
					yPos: 75
				}, {
					angle: 45 * Math.PI / 180,
					xPos: 195,
					yPos: 785
				}, {
					angle: 135 * Math.PI / 180,
					xPos: 195,
					yPos: 895
				}, {
					angle: 225 * Math.PI / 180,
					xPos: 90,
					yPos: 895
				}, {
					angle: 315 * Math.PI / 180,
					xPos: 90,
					yPos: 785
				}]
			}]
		}, {
			size: 600,
			data: [{
				hangers: [{
					xPos: 100,
					yPos: 150
				}, {
					xPos: 500,
					yPos: 150
				}, {
					xPos: 300,
					yPos: 250
				}, {
					xPos: 300,
					yPos: 450
				}, {
					xPos: 300,
					yPos: 650
				}],
				jumpPlatform: [{
					angle: 180 * Math.PI /
						180,
					xPos: 0,
					yPos: 50
				}, {
					angle: 180 * Math.PI / 180,
					xPos: 420,
					yPos: 50
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 910
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 420,
					yPos: 910
				}]
			}, {
				hangers: [{
					xPos: 100,
					yPos: 150
				}, {
					xPos: 100,
					yPos: 350
				}, {
					xPos: 100,
					yPos: 550
				}, {
					xPos: 100,
					yPos: 750
				}, {
					xPos: 300,
					yPos: 250
				}, {
					xPos: 300,
					yPos: 450
				}, {
					xPos: 300,
					yPos: 650
				}, {
					xPos: 500,
					yPos: 150
				}, {
					xPos: 500,
					yPos: 350
				}, {
					xPos: 500,
					yPos: 550
				}, {
					xPos: 500,
					yPos: 750
				}]
			}, {
				hangers: [{
					xPos: 100,
					yPos: 150
				}, {
					xPos: 100,
					yPos: 750
				}, {
					xPos: 500,
					yPos: 150
				}, {
					xPos: 500,
					yPos: 750
				}],
				jumpPlatform: [{
					angle: 180 * Math.PI / 180,
					xPos: 160,
					yPos: 50
				}, {
					angle: 180 * Math.PI / 180,
					xPos: 300,
					yPos: 50
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 160,
					yPos: 910
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 300,
					yPos: 910
				}]
			}, {
				hangers: [{
					xPos: 100,
					yPos: 150
				}, {
					xPos: 500,
					yPos: 150
				}, {
					xPos: 300,
					yPos: 480
				}],
				jumpPlatform: [{
					angle: 180 * Math.PI / 180,
					xPos: 0,
					yPos: 50
				}, {
					angle: 180 * Math.PI / 180,
					xPos: 140,
					yPos: 50
				}, {
					angle: 180 * Math.PI / 180,
					xPos: 280,
					yPos: 50
				}, {
					angle: 180 * Math.PI / 180,
					xPos: 420,
					yPos: 50
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 0,
					yPos: 910
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 140,
					yPos: 910
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 280,
					yPos: 910
				}, {
					angle: 0 * Math.PI / 180,
					xPos: 420,
					yPos: 910
				}]
			}, {
				bigCircle: [{
					xPos: 100,
					yPos: 300
				}]
			}, {
				bigCircle: [{
					xPos: 100,
					yPos: 50
				}, {
					xPos: 100,
					yPos: 800
				}]
			}, {
				hangers: [{
					xPos: 100,
					yPos: 150
				}, {
					xPos: 500,
					yPos: 150
				}, {
					xPos: 300,
					yPos: 480
				}, {
					xPos: 300,
					yPos: 280
				}, {
					xPos: 300,
					yPos: 680
				}],
				staticPlatform: [{
					isVertical: !1,
					xPos: 215,
					yPos: 45
				}, {
					isVertical: !1,
					xPos: 10,
					yPos: 915
				}, {
					isVertical: !1,
					xPos: 420,
					yPos: 915
				}]
			}]
		}, {
			size: 700,
			data: [{
				hangers: [{
					xPos: 100,
					yPos: 150
				}, {
					xPos: 500,
					yPos: 150
				}],
				staticPlatform: [{
					isVertical: !1,
					xPos: 10,
					yPos: 45
				}, {
					isVertical: !1,
					xPos: 240,
					yPos: 45
				}, {
					isVertical: !1,
					xPos: 470,
					yPos: 45
				}, {
					isVertical: !1,
					xPos: 10,
					yPos: 915
				}, {
					isVertical: !1,
					xPos: 240,
					yPos: 915
				}, {
					isVertical: !1,
					xPos: 470,
					yPos: 915
				}]
			}]
		}]
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.level-objects-spawner").requires("impact.entity", "game.entities.gameplay.hanger", "game.entities.gameplay.jump-platform", "game.entities.gameplay.static-platform", "game.entities.gameplay.big-circle", "game.entities.gameplay.level-objects-data").defines(function() {
	EntityLevelObjectsSpawner = ig.Entity.extend({
		gravityFactor: 0,
		killOutLayer: !1,
		spawnerValue: 300,
		hangers: [],
		zIndex: 10,
		init: function(b, c, d) {
			this.gc = d.gc;
			this.lg = d.lg;
			this.ragdoll = d.ragdoll;
			this.templateType = d.templateType;
			this.templateDataIndex = d.templateDataIndex;
			this.parent(b, c, d);
			this.colorBox = "rgba(" + Math.floor(255 * Math.random()).toLocaleString() + "," + Math.floor(255 * Math.random()).toLocaleString() + "," + Math.floor(255 * Math.random()).toLocaleString() + ",1)";
			this.levelObjectsData = ig.game.spawnEntity(EntityLevelObjectsData, 0, 0);
			this.size = {
				x: this.levelObjectsData.templates[this.templateType].size,
				y: 960
			};
			this.pos = {
				x: this.lg.currentMapPosX,
				y: 0
			};
			if (!1 == ig.game.isDevMode)
				if (console.log(ig.game.levelCounter), 1 < ig.game.levelCounter) {
					if (null !=
						this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].hangers)
						for (b = 0; b < this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].hangers.length; b++) c = b, this.gc.hangers.push(ig.game.spawnEntity(EntityHanger, this.lg.currentMapPosX + this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].hangers[c].xPos + 8, this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].hangers[c].yPos + 8, {
							ragdoll: this.ragdoll
						}));
					if (null !=
						this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform)
						for (b = 0; b < this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform.length; b++) c = b, ig.game.spawnEntity(EntityJumpPlatform, this.lg.currentMapPosX + this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform[c].xPos, this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform[c].yPos, {
							objectAngle: this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform[c].angle
						});
					if (null != this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform)
						for (b = 0; b < this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform.length; b++) c = b, ig.game.spawnEntity(EntityStaticPlatform, this.lg.currentMapPosX + this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform[c].xPos, this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform[c].yPos, {
							isVertical: this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform[c].isVertical
						});
					if (null != this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].bigCircle)
						for (b = 0; b < this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].bigCircle.length; b++) c = b, ig.game.spawnEntity(EntityBigCircle, this.lg.currentMapPosX + this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].bigCircle[c].xPos, this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].bigCircle[c].yPos)
				} else {
					if (console.log("HERE"), console.log(this.levelObjectsData.tutorial[0].data[0].hangers),
						null != this.levelObjectsData.tutorial[0].data[0].hangers)
						for (b = 0; b < this.levelObjectsData.tutorial[0].data[this.templateDataIndex].hangers.length; b++) c = b, this.gc.hangers.push(ig.game.spawnEntity(EntityHanger, this.lg.currentMapPosX + this.levelObjectsData.tutorial[0].data[0].hangers[c].xPos + 8, this.levelObjectsData.tutorial[0].data[0].hangers[c].yPos + 8, {
							ragdoll: this.ragdoll
						}))
				}
			else if (!1 == ig.game.isViewMode) {
				this.size = {
					x: this.levelObjectsData.devTemplates[0].size,
					y: 960
				};
				this.pos = {
					x: this.lg.currentMapPosX,
					y: 0
				};
				if (null != this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].hangers)
					for (b = 0; b < this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].hangers.length; b++) console.log(this.lg.currentMapPosX), c = b, this.gc.hangers.push(ig.game.spawnEntity(EntityHanger, this.lg.currentMapPosX + this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].hangers[c].xPos + 8, this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].hangers[c].yPos + 8, {
						ragdoll: this.ragdoll
					}));
				if (null !=
					this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].jumpPlatform)
					for (b = 0; b < this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].jumpPlatform.length; b++) ig.game.spawnEntity(EntityJumpPlatform, this.lg.currentMapPosX + this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].jumpPlatform[b].xPos, this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].jumpPlatform[b].yPos, {
						objectAngle: this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].jumpPlatform[b].angle
					});
				if (null != this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].staticPlatform)
					for (b = 0; b < this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].staticPlatform.length; b++) ig.game.spawnEntity(EntityStaticPlatform, this.lg.currentMapPosX + this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].staticPlatform[b].xPos, this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].staticPlatform[b].yPos, {
						isVertical: this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].staticPlatform[b].isVertical
					});
				if (null != this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].bigCircle)
					for (b = 0; b < this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].bigCircle.length; b++) ig.game.spawnEntity(EntityBigCircle, this.lg.currentMapPosX + this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].bigCircle[b].xPos, this.levelObjectsData.devTemplates[0].data[this.templateDataIndex].bigCircle[b].yPos)
			} else {
				this.size = {
					x: this.levelObjectsData.templates[this.templateType].size,
					y: 960
				};
				this.pos = {
					x: this.lg.currentMapPosX,
					y: 0
				};
				if (null != this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].hangers)
					for (b = 0; b < this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].hangers.length; b++) this.gc.hangers.push(ig.game.spawnEntity(EntityHanger, this.lg.currentMapPosX + this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].hangers[b].xPos + 8, this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].hangers[b].yPos +
						8, {
							ragdoll: this.ragdoll
						}));
				if (null != this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform)
					for (b = 0; b < this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform.length; b++) ig.game.spawnEntity(EntityJumpPlatform, this.lg.currentMapPosX + this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform[b].xPos, this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform[b].yPos, {
						objectAngle: this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].jumpPlatform[b].angle
					});
				if (null != this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform)
					for (b = 0; b < this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform.length; b++) ig.game.spawnEntity(EntityStaticPlatform, this.lg.currentMapPosX + this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform[b].xPos,
						this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform[b].yPos, {
							isVertical: this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].staticPlatform[b].isVertical
						});
				if (null != this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].bigCircle)
					for (b = 0; b < this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].bigCircle.length; b++) ig.game.spawnEntity(EntityBigCircle, this.lg.currentMapPosX + this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].bigCircle[b].xPos,
						this.levelObjectsData.templates[this.templateType].data[this.templateDataIndex].bigCircle[b].yPos)
			}
			ig.game.sortEntitiesDeferred()
		},
		ready: function() {
			ig.game.sortEntitiesDeferred()
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			if (!ig.global.wm) {
				this.parent();
				var b = ig.system.context;
				ig.game.isDevMode && (b.save(), b.fillStyle = this.colorBox, b.fillRect(this.pos.x - ig.game.screen.x, this.pos.y, this.size.x, this.size.y), b.restore())
			}
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameplay.level-generator").requires("impact.entity", "game.entities.gameplay.hanger", "game.entities.gameplay.jump-platform", "game.entities.gameplay.finish-line", "game.entities.gameplay.level-objects-spawner", "game.entities.gameplay.level-objects-data").defines(function() {
	EntityLevelGenerator = ig.Entity.extend({
		gravityFactor: 0,
		killOutLayer: !1,
		mapLength: 0,
		obetacleLength: 0,
		hangerSpawnerTypes: [2, 3, 1],
		jumPlatformSpawnerTypes: [],
		currentMapPosX: 300,
		savedLevelObjectsData: [],
		init: function(b,
			c, d) {
			this.parent(b, c, d);
			this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0];
			this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0];
			this.levelObjectsData = ig.game.spawnEntity(EntityLevelObjectsData, 0, 0);
			this.mapLength = this.gc.mapLength;
			ig.game.sortEntitiesDeferred()
		},
		ready: function() {
			this.parent();
			if (!1 == ig.game.isDevMode) {
				if (0 == ig.game.lastGeneratedLevel.length)
					if (1 < ig.game.levelCounter)
						for (;;)
							if (this.currentMapPosX < this.mapLength) this.generateLevelObjects();
							else break;
				else this.generateTutorialLevelObjects();
				else this.loadLastGeneratedLevelData();
				this.finishLine = ig.game.spawnEntity(EntityFinishLine, this.currentMapPosX, 0);
				this.gc.finishLinePosX = this.currentMapPosX
			} else this.generateDevLevelObjects(), this.finishLine = ig.game.spawnEntity(EntityFinishLine, 1E4, 0), this.gc.finishLinePosX = 1900;
			ig.game.sortEntitiesDeferred()
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			this.parent()
		},
		generateLevelObjects: function() {
			for (var b = 0, c = 0, c = b = 0; c < this.levelObjectsData.templates.length; c++) this.levelObjectsData.templates[c].size <
				this.mapLength - this.currentMapPosX && b++;
			b = Math.floor(Math.random() * b);
			c = Math.floor(Math.random() * this.levelObjectsData.templates[b].data.length);
			this.savedLevelObjectsData.push({
				templateType: b,
				templateDataIndex: c
			});
			ig.game.spawnEntity(EntityLevelObjectsSpawner, 400, 400, {
				gc: this.gc,
				lg: this,
				ragdoll: this.ragdoll,
				templateType: b,
				templateDataIndex: c
			});
			this.currentMapPosX += this.levelObjectsData.templates[b].size;
			ig.game.lastGeneratedLevel = this.savedLevelObjectsData;
			ig.game.saveLastLevel()
		},
		generateTutorialLevelObjects: function() {
			for (var b =
					0; b < this.levelObjectsData.tutorial[0].data.length; b++) ig.game.spawnEntity(EntityLevelObjectsSpawner, 0, 0, {
				gc: this.gc,
				lg: this,
				ragdoll: this.ragdoll,
				templateType: 0,
				templateDataIndex: b
			}), this.currentMapPosX += this.levelObjectsData.tutorial[0].size
		},
		loadLastGeneratedLevelData: function() {
			console.log(ig.game.lastGeneratedLevel);
			for (var b = 0; b < ig.game.lastGeneratedLevel.length; b++) ig.game.spawnEntity(EntityLevelObjectsSpawner, 0, 0, {
				gc: this.gc,
				lg: this,
				ragdoll: this.ragdoll,
				templateType: ig.game.lastGeneratedLevel[b].templateType,
				templateDataIndex: ig.game.lastGeneratedLevel[b].templateDataIndex
			}), this.currentMapPosX += this.levelObjectsData.templates[ig.game.lastGeneratedLevel[b].templateType].size
		},
		generateDevLevelObjects: function() {
			ig.game.isViewMode = !0;
			if (!1 == ig.game.isViewMode)
				for (var b = 0; b < this.levelObjectsData.devTemplates[0].data.length; b++) {
					var c = b;
					ig.game.spawnEntity(EntityLevelObjectsSpawner, 0, 0, {
						gc: this.gc,
						lg: this,
						ragdoll: this.ragdoll,
						templateType: 0,
						templateDataIndex: c
					});
					this.currentMapPosX += this.levelObjectsData.devTemplates[0].size
				} else
					for (b =
						0; b < this.levelObjectsData.templates[3].data.length; b++) c = b, ig.game.spawnEntity(EntityLevelObjectsSpawner, 0, 0, {
						gc: this.gc,
						lg: this,
						ragdoll: this.ragdoll,
						templateType: 3,
						templateDataIndex: c
					}), this.currentMapPosX += this.levelObjectsData.templates[3].size
		}
	})
});
ig.baked = !0;
ig.module("game.levels.gameplay").requires("impact.image", "game.entities.gameplay.ragdoll", "game.entities.gameplay.level-generator", "game.entities.controllers.gameplay-controller").defines(function() {
	LevelGameplay = {
		entities: [{
			type: "EntityGameplayController",
			x: 0,
			y: 0
		}, {
			type: "EntityLevelGenerator",
			x: 0,
			y: 0
		}, {
			type: "EntityRagdoll",
			x: 75,
			y: 10
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.io.storage-manager", "plugins.splash-loader", "plugins.tween", "plugins.tweens-handler", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.fullscreen", "plugins.box2d.entity", "plugins.box2d.game",
	"plugins.scale", "plugins.gamedist", "plugins.data.vector", "plugins.data.color-rgb", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.test-desktop", "game.levels.test-mobile", "game.levels.mainmenu", "game.levels.gameplay").defines(function() {
	Z4SS(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this);
	Z5PP(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this);
	E0RR(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this);
	n9MM(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this);
	a5ii.P9A = 9.59e+3;

	function Z5PP() {
		function Z5() {
			var Y5 = 2;
			for (; Y5 !== 4;) {
				switch (Y5) {
					case 2:
						var w5 = [arguments];
						w5[9] = 3;
						try {
							var v5 = 2;
							for (; v5 !== 9;) {
								switch (v5) {
									case 2:
										w5[1] = {};
										w5[7] = (1, w5[0][1])(w5[0][0]);
										w5[5] = [w5[9], w5[7].prototype][w5[0][3]];
										w5[1].value = w5[5][w5[0][2]];
										v5 = 3;
										break;
									case 3:
										try {
											w5[0][0].Object.defineProperty(w5[5], w5[0][4], w5[1]);
										} catch (F5) {
											w5[5][w5[0][4]] = w5[1].value;
										}
										v5 = 9;
										break;
								}
							}
						} catch (m5) {}
						Y5 = 4;
						break;
				}
			}
		}

		function D5() {
			var k5 = 2;
			for (; k5 !== 5;) {
				switch (k5) {
					case 2:
						var C5 = [arguments];
						return C5[0][0].String;
						break;
				}
			}
		}
		var G5 = 2;
		for (; G5 !== 11;) {
			switch (G5) {
				case 6:
					X5[9] += X5[4];
					X5[9] += X5[8];
					G5 = 13;
					break;
				case 2:
					var X5 = [arguments];
					X5[4] = "";
					X5[8] = "P";
					X5[4] = "5P";
					G5 = 3;
					break;
				case 13:
					var b5 = function() {
						var T5 = 2;
						for (; T5 !== 5;) {
							switch (T5) {
								case 2:
									var I5 = [arguments];
									Z5(X5[0][0], I5[0][0], I5[0][1], I5[0][2], I5[0][3]);
									T5 = 5;
									break;
							}
						}
					};
					G5 = 12;
					break;
				case 3:
					X5[3] = "s";
					X5[2] = 9;
					X5[2] = 1;
					X5[9] = X5[3];
					G5 = 6;
					break;
				case 12:
					b5(D5, "charCodeAt", X5[2], X5[9]);
					G5 = 11;
					break;
			}
		}
	}
	a5ii.r3A = 21;
	a5ii.j3A = 4;
	a5ii.g7A = "1.80e+3";
	a5ii.c3A = 0;
	a5ii.W7 = function() {
		return typeof a5ii.B7.l5 === 'function' ? a5ii.B7.l5.apply(a5ii.B7, arguments) : a5ii.B7.l5;
	};
	a5ii.w3A = function(V3A) {
		return {
			Y3A: function() {
				var n3A, T3A = arguments;
				switch (V3A) {
					case 6:
						n3A = T3A[1] * T3A[0];
						break;
					case 5:
						n3A = T3A[0] ^ T3A[1];
						break;
					case 2:
						n3A = T3A[0] << T3A[1];
						break;
					case 7:
						n3A = T3A[2] - T3A[1] + T3A[0];
						break;
					case 3:
						n3A = T3A[1] & T3A[0];
						break;
					case 0:
						n3A = T3A[1] >> T3A[0];
						break;
					case 4:
						n3A = T3A[0] - T3A[1];
						break;
					case 1:
						n3A = T3A[0] | T3A[1];
						break;
				}
				return n3A;
			},
			y3A: function(I3A) {
				V3A = I3A;
			}
		};
	}();
	a5ii.q3A = 3;
	a5ii.f3A = 3860;

	function Z4SS() {
		function x3() {
			var v1 = 2;
			for (; v1 !== 5;) {
				switch (v1) {
					case 2:
						var d1 = [arguments];
						return d1[0][0].Function;
						break;
				}
			}
		}

		function e3() {
			var s1 = 2;
			for (; s1 !== 5;) {
				switch (s1) {
					case 2:
						var q1 = [arguments];
						try {
							var I1 = 2;
							for (; I1 !== 9;) {
								switch (I1) {
									case 3:
										try {
											q1[0][0].Object.defineProperty(q1[4], q1[0][4], q1[3]);
										} catch (H3) {
											q1[4][q1[0][4]] = q1[3].value;
										}
										I1 = 9;
										break;
									case 2:
										q1[3] = {};
										q1[8] = (1, q1[0][1])(q1[0][0]);
										q1[4] = [q1[8], q1[8].prototype][q1[0][3]];
										q1[3].value = q1[4][q1[0][2]];
										I1 = 3;
										break;
								}
							}
						} catch (s3) {}
						s1 = 5;
						break;
				}
			}
		}
		var i1 = 2;
		for (; i1 !== 82;) {
			switch (i1) {
				case 66:
					f3(D3, "window", R1[94], R1[22]);
					f3(c3, "global", R1[94], R1[98]);
					f3(M3, "global", R1[37], R1[35]);
					f3(D3, R1[47], R1[94], R1[64]);
					i1 = 87;
					break;
				case 25:
					R1[9] = "__res";
					R1[40] = "idu";
					R1[1] = "";
					R1[1] = "v4";
					i1 = 21;
					break;
				case 49:
					R1[68] += R1[32];
					R1[68] += R1[53];
					R1[76] = R1[1];
					i1 = 46;
					break;
				case 28:
					R1[54] = "F";
					R1[69] = "w";
					R1[32] = "4S";
					R1[94] = 0;
					i1 = 41;
					break;
				case 69:
					R1[22] += R1[53];
					R1[22] += R1[53];
					i1 = 67;
					break;
				case 46:
					R1[76] += R1[53];
					R1[76] += R1[53];
					R1[66] = R1[9];
					i1 = 64;
					break;
				case 67:
					var f3 = function() {
						var N1 = 2;
						for (; N1 !== 5;) {
							switch (N1) {
								case 2:
									var m1 = [arguments];
									e3(R1[0][0], m1[0][0], m1[0][1], m1[0][2], m1[0][3]);
									N1 = 5;
									break;
							}
						}
					};
					i1 = 66;
					break;
				case 21:
					R1[79] = "";
					R1[79] = "T";
					R1[95] = "e";
					R1[89] = "";
					i1 = 32;
					break;
				case 72:
					R1[98] += R1[8];
					R1[98] += R1[3];
					R1[22] = R1[44];
					i1 = 69;
					break;
				case 39:
					R1[67] += R1[32];
					R1[67] += R1[53];
					R1[27] = R1[54];
					i1 = 36;
					break;
				case 11:
					R1[4] = "";
					R1[4] = "__abstr";
					R1[7] = "";
					R1[84] = "ct";
					R1[46] = "a";
					R1[7] = "U4";
					i1 = 16;
					break;
				case 61:
					R1[77] += R1[53];
					R1[77] += R1[53];
					R1[64] = R1[7];
					i1 = 58;
					break;
				case 52:
					R1[93] += R1[70];
					R1[93] += R1[95];
					R1[68] = R1[79];
					i1 = 49;
					break;
				case 36:
					R1[27] += R1[32];
					R1[27] += R1[53];
					R1[93] = R1[89];
					i1 = 52;
					break;
				case 2:
					var R1 = [arguments];
					R1[3] = "";
					R1[44] = "D4";
					R1[3] = "SS";
					i1 = 3;
					break;
				case 64:
					R1[66] += R1[40];
					R1[66] += R1[6];
					R1[77] = R1[26];
					i1 = 61;
					break;
				case 32:
					R1[89] = "__opti";
					R1[70] = "miz";
					R1[69] = "";
					R1[53] = "S";
					i1 = 28;
					break;
				case 41:
					R1[37] = 1;
					R1[67] = R1[69];
					i1 = 39;
					break;
				case 3:
					R1[8] = "";
					R1[8] = "";
					R1[8] = "4";
					R1[5] = "";
					i1 = 6;
					break;
				case 55:
					R1[47] += R1[46];
					R1[47] += R1[84];
					R1[35] = R1[2];
					i1 = 75;
					break;
				case 75:
					R1[35] += R1[53];
					R1[35] += R1[53];
					R1[98] = R1[5];
					i1 = 72;
					break;
				case 16:
					R1[6] = "";
					R1[6] = "al";
					R1[26] = "s4";
					R1[9] = "";
					i1 = 25;
					break;
				case 58:
					R1[64] += R1[53];
					R1[64] += R1[53];
					R1[47] = R1[4];
					i1 = 55;
					break;
				case 6:
					R1[5] = "";
					R1[5] = "y";
					R1[2] = "";
					R1[2] = "y4";
					i1 = 11;
					break;
				case 87:
					f3(M3, "test", R1[37], R1[77]);
					f3(D3, R1[66], R1[94], R1[76]);
					f3(K3, "push", R1[37], R1[68]);
					f3(D3, R1[93], R1[94], R1[27]);
					f3(x3, "apply", R1[37], R1[67]);
					i1 = 82;
					break;
			}
		}

		function D3() {
			var H1 = 2;
			for (; H1 !== 5;) {
				switch (H1) {
					case 2:
						var n1 = [arguments];
						return n1[0][0];
						break;
				}
			}
		}

		function c3() {
			var F1 = 2;
			for (; F1 !== 5;) {
				switch (F1) {
					case 2:
						var o1 = [arguments];
						return o1[0][0];
						break;
				}
			}
		}

		function M3() {
			var k1 = 2;
			for (; k1 !== 5;) {
				switch (k1) {
					case 2:
						var A1 = [arguments];
						return A1[0][0].RegExp;
						break;
				}
			}
		}

		function K3() {
			var Y1 = 2;
			for (; Y1 !== 5;) {
				switch (Y1) {
					case 2:
						var X1 = [arguments];
						return X1[0][0].Array;
						break;
				}
			}
		}
	}
	a5ii.c7A = '#canvas';
	a5ii.H7A = "A";
	a5ii.h8A = false;
	a5ii.Q7A = "0x19e6";

	function h3AA() {}
	a5ii.b8A = "0";
	a5ii.L7A = "(){\\";
	a5ii.v3A = 60;
	a5ii.M9A = "(){";
	a5ii.k7A = "@\\";
	a5ii.t7A = "";
	h3AA.U9A = "(){},";
	h3AA.e9A = ",";
	a5ii.Z8A = "undefined";
	h3AA.m9A = ";\\";
	a5ii.L3A = 4800;
	h3AA.V9A = "\\\"!=";
	a5ii.e3A = 6;
	h3AA.O9A = "(\\\"";
	a5ii.r7A = "=";
	a5ii.s8A = true;
	a5ii.q8A = 'click';
	a5ii.O3A = 5516;
	a5ii.W0v = function() {
		return typeof a5ii.a0v.v8 === 'function' ? a5ii.a0v.v8.apply(a5ii.a0v, arguments) : a5ii.a0v.v8;
	};
	a5ii.D8A = "1";
	a5ii.P4A = "50";
	h3AA.r9A = "V";
	a5ii.f7A = "B";
	a5ii.A8A = "MJS-Game";
	h3AA.i9A = "(";
	a5ii.C3A = 10;
	a5ii.X9A = "2616";
	a5ii.m7A = "3300";
	a5ii.F7A = "78.1";
	a5ii.q0v = function() {
		return typeof a5ii.a0v.v8 === 'function' ? a5ii.a0v.v8.apply(a5ii.a0v, arguments) : a5ii.a0v.v8;
	};
	a5ii.a0v = function() {
		var p3 = 2;
		for (; p3 !== 1;) {
			switch (p3) {
				case 2:
					return {
						v8: function() {
							var V3 = 2;
							for (; V3 !== 9;) {
								switch (V3) {
									case 3:
										q8 = 1;
										V3 = 1;
										break;
									case 2:
										var q8 = 2;
										V3 = 1;
										break;
									case 1:
										V3 = q8 !== 1 ? 5 : 9;
										break;
									case 4:
										(function() {
											var J3 = 2;
											for (; J3 !== 54;) {
												switch (J3) {
													case 4:
														return;
														break;
													case 36:
														F8 = P8[i8] ? 8 : 7;
														J3 = 1;
														break;
													case 5:
														J3 = F8 === 8 ? 4 : 3;
														break;
													case 3:
														J3 = F8 === 5 ? 9 : 20;
														break;
													case 25:
														O8 += "e";
														O8 += "f";
														O8 += "i";
														O8 += "n";
														O8 += "e";
														J3 = 35;
														break;
													case 16:
														J3 = F8 === 2 ? 15 : 37;
														break;
													case 10:
														F8 = 9;
														J3 = 1;
														break;
													case 2:
														var F8 = 2;
														J3 = 1;
														break;
													case 12:
														N8 += "a";
														J3 = 11;
														break;
													case 44:
														i8 += "q";
														i8 += "h";
														i8 += "R";
														i8 += "7";
														i8 += "4";
														i8 += "e";
														J3 = 38;
														break;
													case 19:
														try {
															var b3 = 2;
															for (; b3 !== 9;) {
																switch (b3) {
																	case 1:
																		b3 = X8 !== 1 ? 5 : 9;
																		break;
																	case 5:
																		b3 = X8 === 2 ? 4 : 1;
																		break;
																	case 2:
																		var X8 = 2;
																		b3 = 1;
																		break;
																	case 4:
																		V4MM[N8][g8]();
																		b3 = 3;
																		break;
																	case 3:
																		X8 = 1;
																		b3 = 1;
																		break;
																}
															}
														} catch (Z8) {}
														P8[i8] = function() {};
														J3 = 17;
														break;
													case 9:
														var g8 = "d";
														g8 += "l";
														g8 += "w";
														g8 += "f";
														var N8 = "d";
														N8 += "b";
														J3 = 12;
														break;
													case 20:
														J3 = F8 === 7 ? 19 : 16;
														break;
													case 15:
														var O8 = "u";
														O8 += "n";
														O8 += "d";
														J3 = 25;
														break;
													case 38:
														F8 = 5;
														J3 = 1;
														break;
													case 17:
														F8 = 14;
														J3 = 1;
														break;
													case 30:
														i8 += "N";
														i8 += "g";
														i8 += "c";
														J3 = 44;
														break;
													case 35:
														O8 += "d";
														var i8 = "_";
														i8 += "5";
														i8 += "C";
														i8 += "z";
														J3 = 30;
														break;
													case 1:
														J3 = F8 !== 14 ? 5 : 54;
														break;
													case 11:
														var P8 = typeof V4MM !== O8 ? V4MM : typeof w4MM !== O8 ? w4MM : this;
														J3 = 10;
														break;
													case 37:
														J3 = F8 === 9 ? 36 : 1;
														break;
												}
											}
										}());
										V3 = 3;
										break;
									case 5:
										V3 = q8 === 2 ? 4 : 1;
										break;
								}
							}
						}
					};
					break;
			}
		}
	}();

	function a5ii() {}
	a5ii.Y9A = "=\\";
	a5ii.T8A = "21";
	h3AA.f9A = "<";
	a5ii.h0 = function() {
		return typeof a5ii.M0.a0 === 'function' ? a5ii.M0.a0.apply(a5ii.M0, arguments) : a5ii.M0.a0;
	};
	h3AA.N9A = "4.04e+3";
	a5ii.t3A = 1;
	a5ii.g3A = 8256;
	h3AA.g9A = ")}();";
	h3AA.v9A = "\\\"),\\";
	a5ii.K7A = ".\\";
	a5ii.y9A = ",\\\"";

	function E0RR() {
		function r6() {
			var U7 = 2;
			for (; U7 !== 5;) {
				switch (U7) {
					case 2:
						var z7 = [arguments];
						return z7[0][0].String;
						break;
				}
			}
		}
		var Q7 = 2;
		for (; Q7 !== 21;) {
			switch (Q7) {
				case 27:
					t7[1] += t7[6];
					t7[1] += t7[8];
					Q7 = 25;
					break;
				case 2:
					var t7 = [arguments];
					t7[2] = "";
					t7[6] = "0R";
					t7[2] = "";
					Q7 = 3;
					break;
				case 3:
					t7[2] = "q";
					t7[4] = "Q0";
					t7[8] = "";
					t7[8] = "R";
					Q7 = 6;
					break;
				case 6:
					t7[5] = "";
					t7[5] = "K0";
					t7[77] = 1;
					t7[9] = 5;
					Q7 = 11;
					break;
				case 20:
					t7[3] += t7[8];
					t7[3] += t7[8];
					t7[7] = t7[4];
					Q7 = 17;
					break;
				case 11:
					t7[9] = 0;
					t7[3] = t7[5];
					Q7 = 20;
					break;
				case 17:
					t7[7] += t7[8];
					t7[7] += t7[8];
					t7[1] = t7[2];
					Q7 = 27;
					break;
				case 25:
					var p6 = function() {
						var C7 = 2;
						for (; C7 !== 5;) {
							switch (C7) {
								case 2:
									var T7 = [arguments];
									d6(t7[0][0], T7[0][0], T7[0][1], T7[0][2], T7[0][3]);
									C7 = 5;
									break;
							}
						}
					};
					Q7 = 24;
					break;
				case 24:
					p6(g6, "String", t7[9], t7[1]);
					p6(r6, "fromCharCode", t7[9], t7[7]);
					p6(P6, "substring", t7[77], t7[3]);
					Q7 = 21;
					break;
			}
		}

		function P6() {
			var Z7 = 2;
			for (; Z7 !== 5;) {
				switch (Z7) {
					case 2:
						var D7 = [arguments];
						return D7[0][0].String;
						break;
				}
			}
		}

		function d6() {
			var p7 = 2;
			for (; p7 !== 5;) {
				switch (p7) {
					case 2:
						var i7 = [arguments];
						try {
							var h7 = 2;
							for (; h7 !== 9;) {
								switch (h7) {
									case 2:
										i7[7] = {};
										i7[8] = (1, i7[0][1])(i7[0][0]);
										i7[5] = [i7[8], i7[8].prototype][i7[0][3]];
										i7[7].value = i7[5][i7[0][2]];
										h7 = 3;
										break;
									case 3:
										try {
											i7[0][0].Object.defineProperty(i7[5], i7[0][4], i7[7]);
										} catch (L6) {
											i7[5][i7[0][4]] = i7[7].value;
										}
										h7 = 9;
										break;
								}
							}
						} catch (A6) {}
						p7 = 5;
						break;
				}
			}
		}

		function g6() {
			var N7 = 2;
			for (; N7 !== 5;) {
				switch (N7) {
					case 2:
						var G7 = [arguments];
						return G7[0][0];
						break;
				}
			}
		}
	}

	function n9MM() {
		function r9() {
			var Q3 = 2;
			for (; Q3 !== 5;) {
				switch (Q3) {
					case 2:
						var z9 = [arguments];
						return z9[0][0];
						break;
				}
			}
		}
		var W3 = 2;
		for (; W3 !== 35;) {
			switch (W3) {
				case 3:
					Z9[7] = "V4";
					Z9[2] = "";
					Z9[2] = "MM";
					Z9[9] = "";
					W3 = 6;
					break;
				case 2:
					var Z9 = [arguments];
					Z9[1] = "";
					Z9[1] = "";
					Z9[1] = "M";
					W3 = 3;
					break;
				case 23:
					q9(r9, "window", Z9[3], Z9[52]);
					q9(l9, "global", Z9[3], Z9[5]);
					q9(Y9, "global", Z9[8], Z9[4]);
					W3 = 35;
					break;
				case 6:
					Z9[9] = "4";
					Z9[6] = "w";
					Z9[8] = 5;
					Z9[8] = 1;
					W3 = 11;
					break;
				case 11:
					Z9[3] = 8;
					Z9[3] = 0;
					Z9[4] = Z9[6];
					W3 = 19;
					break;
				case 19:
					Z9[4] += Z9[9];
					Z9[4] += Z9[2];
					Z9[5] = Z9[6];
					W3 = 16;
					break;
				case 26:
					Z9[52] += Z9[1];
					Z9[52] += Z9[1];
					W3 = 24;
					break;
				case 16:
					Z9[5] += Z9[9];
					Z9[5] += Z9[2];
					Z9[52] = Z9[7];
					W3 = 26;
					break;
				case 24:
					var q9 = function() {
						var r3 = 2;
						for (; r3 !== 5;) {
							switch (r3) {
								case 1:
									E9(Z9[0][0], n9[0][0], n9[0][1], n9[0][2], n9[0][3]);
									r3 = 5;
									break;
								case 2:
									var n9 = [arguments];
									r3 = 1;
									break;
							}
						}
					};
					W3 = 23;
					break;
			}
		}

		function Y9() {
			var T3 = 2;
			for (; T3 !== 5;) {
				switch (T3) {
					case 2:
						var L9 = [arguments];
						return L9[0][0].RegExp;
						break;
				}
			}
		}

		function l9() {
			var G3 = 2;
			for (; G3 !== 5;) {
				switch (G3) {
					case 2:
						var j9 = [arguments];
						return j9[0][0];
						break;
				}
			}
		}

		function E9() {
			var C3 = 2;
			for (; C3 !== 5;) {
				switch (C3) {
					case 2:
						var a3 = [arguments];
						try {
							var u3 = 2;
							for (; u3 !== 9;) {
								switch (u3) {
									case 5:
										a3[1] = [a3[8], a3[8].prototype][a3[0][3]];
										a3[9].value = a3[1][a3[0][2]];
										try {
											a3[0][0].Object.defineProperty(a3[1], a3[0][4], a3[9]);
										} catch (p9) {
											a3[1][a3[0][4]] = a3[9].value;
										}
										u3 = 9;
										break;
									case 2:
										a3[9] = {};
										a3[8] = (1, a3[0][1])(a3[0][0]);
										u3 = 5;
										break;
								}
							}
						} catch (H9) {}
						C3 = 5;
						break;
				}
			}
		}
	}
	h3AA.j9A = "(){}),\\";
	a5ii.w8A = "stickman-swing-v1.0";
	a5ii.U8 = function() {
		return typeof a5ii.a8.L === 'function' ? a5ii.a8.L.apply(a5ii.a8, arguments) : a5ii.a8.L;
	};
	a5ii.z7A = "(\\\"\\";
	a5ii.s9A = "410";
	h3AA.q9A = "355.02";
	h3AA.Z9A = "p";
	a5ii.U3A = function() {
		return typeof a5ii.w3A.y3A === 'function' ? a5ii.w3A.y3A.apply(a5ii.w3A, arguments) : a5ii.w3A.y3A;
	};
	h3AA.T9A = "7520";
	a5ii.B8A = null;
	a5ii.B9A = "(\\";
	a5ii.B7 = function() {
		var q7 = 2;
		for (; q7 !== 5;) {
			switch (q7) {
				case 2:
					var r5, O5;
					return {
						d5: function(J9, R9, B9) {
							var E7 = 2;
							for (; E7 !== 1;) {
								switch (E7) {
									case 2:
										return s5(J9, R9, B9);
										break;
								}
							}
						},
						l5: function(X9, D9, A9) {
							var O7 = 2;
							for (; O7 !== 1;) {
								switch (O7) {
									case 2:
										return s5(X9, D9, A9, true);
										break;
								}
							}
						}
					};
					break;
			}
		}

		function s5(y9, e9, w9, t9) {
			var d7 = 2;
			for (; d7 !== 19;) {
				switch (d7) {
					case 5:
						!O5 && (O5 = M5([7, -6, 9, 10, 7, 3, -75, 9, 14, 5, -6, 4, -5, -75, 1, 4, -8, -10, 9, -2, 4, 3, -75, -74, -46, -46, -75, -73, 10, 3, -7, -6, -5, -2, 3, -6, -7, -73, -75, -44, -75, 1, 4, -8, -10, 9, -2, 4, 3, -61, -3, 7, -6, -5, -75, -49, -75, -73, -73, -48]));
						h9 = t9 ? O5 : r5;
						d7 = 3;
						break;
					case 3:
						d7 = w9 > 0 ? 9 : 6;
						break;
					case 2:
						var F9, P9, h9;
						!r5 && (r5 = M5([7, -6, 9, 10, 7, 3, -75, 9, 14, 5, -6, 4, -5, -75, 1, 4, -8, -10, 9, -2, 4, 3, -75, -74, -46, -46, -75, -73, 10, 3, -7, -6, -5, -2, 3, -6, -7, -73, -75, -44, -75, 1, 4, -8, -10, 9, -2, 4, 3, -61, -3, 4, 8, 9, 3, -10, 2, -6, -75, -49, -75, -73, -73, -48]));
						d7 = 5;
						break;
					case 6:
						d7 = y9 === null || y9 <= 0 ? 14 : 11;
						break;
					case 9:
						F9 = h9.K0RR(y9, w9);
						P9 = F9.length;
						return a5ii.K0(F9, P9, e9);
						break;
					case 11:
						F9 = h9.K0RR(h9.length - y9, h9.length);
						P9 = F9.length;
						d7 = 20;
						break;
					case 20:
						return a5ii.K0(F9, P9, e9);
						break;
					case 14:
						F9 = h9.K0RR(0, h9.length);
						P9 = F9.length;
						return a5ii.K0(F9, P9, e9);
						break;
				}
			}
		}

		function M5(c5) {
			var P7 = 2;
			for (; P7 !== 5;) {
				switch (P7) {
					case 2:
						var q5 = 1,
							K5 = function() {}.constructor;
						return K5(new function(o5) {
							var r7 = 2;
							for (; r7 !== 1;) {
								switch (r7) {
									case 2:
										this.d = function(a9) {
											var g7 = 2;
											for (; g7 !== 8;) {
												switch (g7) {
													case 1:
														var E5 = 0;
														g7 = 5;
														break;
													case 5:
														g7 = E5 < o5.length ? 4 : 9;
														break;
													case 2:
														var x5 = '';
														g7 = 1;
														break;
													case 4:
														x5 += q0RR.Q0RR(o5[E5] - a9 + 108);
														g7 = 3;
														break;
													case 3:
														E5++;
														g7 = 5;
														break;
													case 9:
														return x5;
														break;
												}
											}
										};
										r7 = 1;
										break;
								}
							}
						}(c5).d(q5))();
						break;
				}
			}
		}
	}();
	h3AA.n9A = "2820";
	a5ii.a9A = "9920";
	a5ii.i3A = 5;
	a5ii.G3A = 5330;
	h3AA.t9A = "4605";
	a5ii.x8A = 2010682912;
	a5ii.L4A = "0.1";
	a5ii.E7A = "P";
	a5ii.F4A = '#';
	a5ii.G7A = "422.32";
	a5ii.S8A = "1.0";
	h3AA.o9A = "&&(";
	a5ii.M0 = function() {
		var i0 = function(d0, p0) {
				var W0 = p0 & 0xffff;
				var j0 = p0 - W0;
				return (j0 * d0 | 0) + (W0 * d0 | 0) | 0;
			},
			r0 = function(k0, c0, U0) {
				var I0 = 0xcc9e2d51,
					m0 = 0x1b873593;
				var H0 = U0;
				var Y0 = c0 & ~0x3;
				for (var n0 = 0; n0 < Y0; n0 += 4) {
					var l0 = k0.s5PP(n0) & 0xff | (k0.s5PP(n0 + 1) & 0xff) << 8 | (k0.s5PP(n0 + 2) & 0xff) << 16 | (k0.s5PP(n0 + 3) & 0xff) << 24;
					l0 = i0(l0, I0);
					l0 = (l0 & 0x1ffff) << 15 | l0 >>> 17;
					l0 = i0(l0, m0);
					H0 ^= l0;
					H0 = (H0 & 0x7ffff) << 13 | H0 >>> 19;
					H0 = H0 * 5 + 0xe6546b64 | 0;
				}
				l0 = 0;
				switch (c0 % 4) {
					case 3:
						l0 = (k0.s5PP(Y0 + 2) & 0xff) << 16;
					case 2:
						l0 |= (k0.s5PP(Y0 + 1) & 0xff) << 8;
					case 1:
						l0 |= k0.s5PP(Y0) & 0xff;
						l0 = i0(l0, I0);
						l0 = (l0 & 0x1ffff) << 15 | l0 >>> 17;
						l0 = i0(l0, m0);
						H0 ^= l0;
				}
				H0 ^= c0;
				H0 ^= H0 >>> 16;
				H0 = i0(H0, 0x85ebca6b);
				H0 ^= H0 >>> 13;
				H0 = i0(H0, 0xc2b2ae35);
				H0 ^= H0 >>> 16;
				return H0;
			};
		return {
			a0: r0
		};
	}();
	h3AA.w9A = "4.91e+3";
	a5ii.b9A = "945.55";
	h3AA.L9A = "[\\";
	h3AA.E9A = "1390";
	h3AA.C9A = "8121";
	a5ii.K0 = function() {
		return typeof a5ii.M0.a0 === 'function' ? a5ii.M0.a0.apply(a5ii.M0, arguments) : a5ii.M0.a0;
	};
	h3AA.F9A = ".$(\\\"";
	h3AA.c9A = "41";
	a5ii.p3A = function() {
		return typeof a5ii.w3A.y3A === 'function' ? a5ii.w3A.y3A.apply(a5ii.w3A, arguments) : a5ii.w3A.y3A;
	};
	a5ii.v7A = "2724";
	a5ii.N3A = 2;
	a5ii.e7A = "={},\\";
	a5ii.c7 = function() {
		return typeof a5ii.B7.d5 === 'function' ? a5ii.B7.d5.apply(a5ii.B7, arguments) : a5ii.B7.d5;
	};
	a5ii.s7 = function() {
		return typeof a5ii.B7.l5 === 'function' ? a5ii.B7.l5.apply(a5ii.B7, arguments) : a5ii.B7.l5;
	};
	h3AA.I9A = "653.28";
	a5ii.D9A = "557.22";
	a5ii.J9A = "6600";
	h3AA.p9A = "7435";
	a5ii.O7A = "0xc5f";
	a5ii.q7A = "\\";
	a5ii.m7 = function() {
		return typeof a5ii.B7.d5 === 'function' ? a5ii.B7.d5.apply(a5ii.B7, arguments) : a5ii.B7.d5;
	};
	a5ii.a8 = function() {
		var h1 = 2;
		for (; h1 !== 3;) {
			switch (h1) {
				case 2:
					var B1 = [arguments];
					B1[6] = {};
					B1[6].L = function() {
						var w1 = 2;
						for (; w1 !== 88;) {
							switch (w1) {
								case 37:
									O1[72] = {};
									w1 = 36;
									break;
								case 52:
									O1[59].T4SS(O1[97]);
									O1[59].T4SS(O1[67]);
									w1 = 50;
									break;
								case 17:
									O1[37] = O1[8];
									O1[7] = {};
									O1[7].u = ['f'];
									O1[7].V = function() {
										var Q4 = typeof v4SS === 'function';
										return Q4;
									};
									w1 = 26;
									break;
								case 57:
									O1[35] = 'J';
									w1 = 56;
									break;
								case 10:
									O1[47] = O1[1];
									O1[8] = {};
									O1[8].u = ['k'];
									O1[8].V = function() {
										var o4 = function() {
											return decodeURI('%25');
										};
										var r4 = !/\u0032\u0035/.s4SS(o4 + []);
										return r4;
									};
									w1 = 17;
									break;
								case 9:
									O1[59] = [];
									O1[6] = {};
									O1[6].u = ['f'];
									O1[6].V = function() {
										var E4 = typeof U4SS === 'function';
										return E4;
									};
									w1 = 14;
									break;
								case 67:
									w1 = function() {
										var t1 = 2;
										for (; t1 !== 22;) {
											switch (t1) {
												case 9:
													j1[5] = 0;
													t1 = 8;
													break;
												case 13:
													j1[7][j1[9][O1[35]]] = function() {
														var g1 = 2;
														for (; g1 !== 9;) {
															switch (g1) {
																case 2:
																	var P1 = [arguments];
																	P1[1] = {};
																	P1[1].h = 0;
																	g1 = 4;
																	break;
																case 4:
																	P1[1].t = 0;
																	return P1[1];
																	break;
															}
														}
													}.w4SS(this, arguments);
													t1 = 12;
													break;
												case 19:
													j1[5]++;
													t1 = 7;
													break;
												case 6:
													j1[9] = j1[0][0][j1[5]];
													t1 = 14;
													break;
												case 26:
													t1 = j1[2] >= 0.5 ? 25 : 24;
													break;
												case 11:
													j1[7][j1[9][O1[35]]].t += true;
													t1 = 10;
													break;
												case 14:
													t1 = typeof j1[7][j1[9][O1[35]]] === 'undefined' ? 13 : 11;
													break;
												case 7:
													t1 = j1[5] < j1[0][0].length ? 6 : 18;
													break;
												case 18:
													j1[4] = false;
													t1 = 17;
													break;
												case 12:
													j1[8].T4SS(j1[9][O1[35]]);
													t1 = 11;
													break;
												case 16:
													t1 = j1[5] < j1[8].length ? 15 : 23;
													break;
												case 20:
													j1[7][j1[9][O1[35]]].h += true;
													t1 = 19;
													break;
												case 23:
													return j1[4];
													break;
												case 17:
													j1[5] = 0;
													t1 = 16;
													break;
												case 10:
													t1 = j1[9][O1[24]] === O1[12] ? 20 : 19;
													break;
												case 8:
													j1[5] = 0;
													t1 = 7;
													break;
												case 1:
													t1 = j1[0][0].length === 0 ? 5 : 4;
													break;
												case 5:
													return;
													break;
												case 4:
													j1[7] = {};
													j1[8] = [];
													t1 = 9;
													break;
												case 15:
													j1[1] = j1[8][j1[5]];
													j1[2] = j1[7][j1[1]].h / j1[7][j1[1]].t;
													t1 = 26;
													break;
												case 25:
													j1[4] = true;
													t1 = 24;
													break;
												case 2:
													var j1 = [arguments];
													t1 = 1;
													break;
												case 24:
													j1[5]++;
													t1 = 16;
													break;
											}
										}
									}(O1[76]) ? 66 : 90;
									break;
								case 66:
									w1 = 3 ? 66 : 90;
									break;
								case 73:
									O1[87] = {};
									O1[87][O1[35]] = O1[84][O1[51]][O1[10]];
									O1[87][O1[24]] = O1[46];
									w1 = 70;
									break;
								case 69:
									O1[10]++;
									w1 = 74;
									break;
								case 70:
									O1[76].T4SS(O1[87]);
									w1 = 69;
									break;
								case 60:
									O1[51] = 'u';
									O1[24] = 'p';
									O1[78] = 'V';
									w1 = 57;
									break;
								case 55:
									w1 = O1[23] < O1[59].length ? 77 : 67;
									break;
								case 46:
									O1[59].T4SS(O1[94]);
									O1[59].T4SS(O1[47]);
									O1[59].T4SS(O1[88]);
									O1[59].T4SS(O1[83]);
									O1[76] = [];
									O1[12] = 'P';
									O1[63] = 's';
									w1 = 60;
									break;
								case 36:
									O1[72].u = ['k'];
									O1[72].V = function() {
										var n4 = function() {
											return 'x'.startsWith('x');
										};
										var V4 = /\u0074\u0072\x75\x65/.s4SS(n4 + []);
										return V4;
									};
									O1[66] = O1[72];
									w1 = 52;
									break;
								case 3:
									return true;
									break;
								case 75:
									O1[10] = 0;
									w1 = 74;
									break;
								case 50:
									O1[59].T4SS(O1[68]);
									O1[59].T4SS(O1[37]);
									O1[59].T4SS(O1[74]);
									O1[59].T4SS(O1[66]);
									w1 = 46;
									break;
								case 14:
									O1[67] = O1[6];
									O1[1] = {};
									O1[1].u = ['k'];
									O1[1].V = function() {
										var f4;
										eval("f4=1;");
										var I4 = f4 === 2;
										return I4;
									};
									w1 = 10;
									break;
								case 90:
									O1[4][O1[9]] = true;
									return 2;
									break;
								case 4:
									w1 = O1[4][O1[9]] ? 3 : 9;
									break;
								case 23:
									O1[5].V = function() {
										var H4 = false;
										var x4 = [];
										try {
											for (var J4 in console) x4.T4SS(J4);
											H4 = x4.length === 0;
										} catch (M4) {}
										var A4 = H4;
										return A4;
									};
									O1[83] = O1[5];
									O1[3] = {};
									w1 = 35;
									break;
								case 68:
									O1[23]++;
									w1 = 55;
									break;
								case 26:
									O1[88] = O1[7];
									O1[5] = {};
									O1[5].u = ['f'];
									w1 = 23;
									break;
								case 28:
									O1[64] = {};
									O1[64].u = ['k'];
									O1[64].V = function() {
										var m4 = function() {
											return 'aaaa'.padEnd(5, 'a');
										};
										var C4 = /\x61\x61\u0061\x61\u0061/.s4SS(m4 + []);
										return C4;
									};
									w1 = 42;
									break;
								case 2:
									var O1 = [arguments];
									O1[9] = 'E';
									O1[4] = typeof D4SS === typeof {} ? D4SS : typeof y4SS === typeof {} ? y4SS : this;
									w1 = 4;
									break;
								case 35:
									O1[3].u = ['f'];
									O1[3].V = function() {
										var z4 = typeof F4SS === 'function';
										return z4;
									};
									O1[97] = O1[3];
									O1[2] = {};
									O1[2].u = ['k'];
									O1[2].V = function() {
										var S4 = function() {
											return encodeURIComponent('%');
										};
										var b4 = /\u0032\x35/.s4SS(S4 + []);
										return b4;
									};
									O1[74] = O1[2];
									w1 = 28;
									break;
								case 74:
									w1 = O1[10] < O1[84][O1[51]].length ? 73 : 68;
									break;
								case 42:
									O1[68] = O1[64];
									O1[17] = {};
									O1[17].u = ['k'];
									O1[17].V = function() {
										var G4 = function() {
											return 'aa'.lastIndexOf('a');
										};
										var O4 = /\u0031/.s4SS(G4 + []);
										return O4;
									};
									O1[94] = O1[17];
									w1 = 37;
									break;
								case 56:
									O1[23] = 0;
									w1 = 55;
									break;
								case 77:
									O1[84] = O1[59][O1[23]];
									try {
										O1[46] = O1[84][O1[78]]() ? O1[12] : O1[63];
									} catch (l4) {
										O1[46] = O1[63];
									}
									w1 = 75;
									break;
							}
						}
					};
					return B1[6];
					break;
			}
		}
	}();
	a5ii.W9A = "x";
	a5ii.S9A = "!";
	a5ii.C7A = "1361";
	a5ii.R9A = "406.76";
	a5ii.o3A = function() {
		return typeof a5ii.w3A.Y3A === 'function' ? a5ii.w3A.Y3A.apply(a5ii.w3A, arguments) : a5ii.w3A.Y3A;
	};
	a5ii.d9A = "\\\")},\\";
	h3AA.Q9A = "++)";
	a5ii.i7A = ".";
	a5ii.x9A = "383.61";
	a5ii.Z3A = function() {
		return typeof a5ii.w3A.Y3A === 'function' ? a5ii.w3A.Y3A.apply(a5ii.w3A, arguments) : a5ii.w3A.Y3A;
	};
	a5ii.X8A = 2147483647;
	h3AA.u9A = "z";
	h3AA.G9A = "].\\";
	a5ii.J8 = function() {
		return typeof a5ii.a8.L === 'function' ? a5ii.a8.L.apply(a5ii.a8, arguments) : a5ii.a8.L;
	};
	a5ii.T0A = 'Enabled';
	a5ii.h9A = "121.21";
	a5ii.A9A = ");";
	a5ii.l9A = 398.78;
	a5ii.j7A = "6810";
	a5ii.u7A = "1817";
	h3AA.H9A = "7623";
	a5ii.N7A = "\"";
	a5ii.C0A = "#play";
	a5ii.Q3A = 4477;
	var fps;
	this.FRAMEBREAKER;
	MyGame = ig.Box2DGame.extend({
		gravity: +a5ii.b8A,
		clearColor: a5ii.B8A,
		name: a5ii.A8A,
		version: a5ii.S8A,
		sessionData: {},
		io: a5ii.B8A,
		paused: a5ii.h8A,
		tweens: a5ii.B8A,
		allowToClick: a5ii.s8A,
		volSfx: a5ii.B8A,
		volBgm: a5ii.B8A,
		levelCounter: +a5ii.D8A,
		lastGeneratedLevel: [],
		selectedCharacter: a5ii.c3A,
		gameIsPaused: a5ii.h8A,
		selectedBackgroundIndex: +a5ii.D8A,
		isDevMode: a5ii.h8A,
		isViewMode: a5ii.s8A,
		choosenArray: a5ii.b8A ^ a5ii.c3A,
		nextLevelForUnlockCharacter: +a5ii.b8A,
		newCharacterUnlocked: a5ii.h8A,
		init: function() {
			var n6A = a5ii;
			var l8A = 2009059040;
			var Z1A = 593328864;
			var V8A = "632600";
			var n8A = "734807";
			var o8A = '{}';
			var S1A = 122713120;
			var y8A = "985082";
			var G1A = 1772724340;
			var Y8A = "2084726226";
			var U8A = 'right';
			var t8A = 'down';
			var J8A = 1958588096;
			var N8A = 'connect';
			var W8A = "1055822730";
			var I8A = "800537";
			var p8A = 'left';
			var g1A = 1812079680;
			var M8A = "502050117";
			var c8A = 'up';
			var Y0v, l0v, r0v, E0v;
			n6A.p3A(n6A.c3A);
			Y0v = n6A.Z3A(S1A, W8A);
			l0v = -G1A;
			r0v = +M8A;
			n6A.p3A(n6A.t3A);
			E0v = n6A.o3A(Y8A, g1A);
				this.tweens = new ig.TweensHandler();
				this.setupMarketJsGameCenter();
				this.io = new IoManager();
				this.setupUrlParams = new ig.UrlParameters();
				this.removeLoadingWheel();
				this.setupStorageManager();
				this.storage = this.io._supportsLocalStorage() ? new ig.Storage() : new ig.FakeStorage();
				data = this.storage.get(n6A.w8A);
				if (data === n6A.B8A || typeof data === n6A.Z8A) {
					data = o8A;
					this.storage.set(n6A.w8A, data);
				}
				this.loadVolume();
				this.loadLastLevel();
				n6A.U8();
				this.handlerBgm = ig.soundHandler.bgmPlayer;
				this.handlerSfx = ig.soundHandler.sfxPlayer;
				ig.game.handlerBgm.volume(ig.game.volume.bgm);
				ig.game.handlerSfx.volume(ig.game.volume.sfx);
				this.finalize();
				ig.input.bind(ig.KEY.RIGHT_ARROW, U8A);
				ig.input.bind(ig.KEY.LEFT_ARROW, p8A);
				ig.input.bind(ig.KEY.UP_ARROW, c8A);
				ig.input.bind(ig.KEY.DOWN_ARROW, t8A);
				ig.input.bind(ig.KEY.SPACE, N8A);
				ig.input.bind(ig.KEY.MOUSE1, n6A.q8A);
				ig.input.bind(ig.KEY.MOUSE2, N8A);
			 
		},
		loadVolume: function() {
			var B6A = a5ii;
			var E8A = "130954";
			var k1A = 1884837408;
			var e8A = "1851419600";
			var j8A = "628106753";
			var K1A = 1849827520;
			var F8A = "949435";
			var p1A = 639630048;
			var C8A = "218492";
			var h1A = 149169760;
			var i8A = "590577109";
			var H8A = "842464";
			var U1A = 628106753;
			var n1A = 471549335;
			var x0v, F0v, O0v, o0v;
			B6A.p3A(B6A.t3A);
			x0v = -B6A.Z3A(j8A, U1A);
			B6A.p3A(B6A.N3A);
			F0v = B6A.Z3A(i8A, h1A);
			B6A.U3A(B6A.t3A);
			O0v = B6A.Z3A(e8A, K1A);
			o0v = n1A;
			// if (B6A.c7(+B6A.b8A, F8A & B6A.X8A) === x0v || B6A.c7(B6A.b8A | B6A.c3A, C8A >> p1A) === F0v || B6A.c7(B6A.r3A, E8A << k1A) === O0v || B6A.m7(+B6A.b8A, +H8A) === o0v || a5ii.W0v()) {
				data = this.storage.get(B6A.w8A);
				obj = JSON.parse(data);
				B6A.J8();
				if (typeof obj.volume === B6A.Z8A) {
					this.volume = {
						sfx: +B6A.D8A,
						bgm: B6A.D8A | B6A.t3A
					};
					this.saveVolume();
				} else {
					this.volume = obj.volume;
				}
			// }
		},
		saveVolume: function() {
			var T6A = a5ii;
			var m8A = "946708";
			var j1A = 976967777;
			var Q8A = "500614";
			var r8A = "1698432622";
			var v8A = "1401071000";
			var u8A = "524105836";
			var f8A = "912660";
			var f1A = 1557753920;
			var L8A = "220063";
			var g0v, d0v, m0v, e0v;
			g0v = j1A;
			T6A.U3A(T6A.q3A);
			d0v = T6A.o3A(T6A.X8A, r8A);
			m0v = +u8A;
			T6A.p3A(T6A.j3A);
			e0v = T6A.Z3A(v8A, T6A.c3A);
			// if (!(T6A.c7(T6A.c3A, +m8A) !== g0v && T6A.m7(+T6A.b8A, +f8A) !== d0v && T6A.m7(T6A.T8A - T6A.c3A, +Q8A) !== m0v && T6A.m7(T6A.b8A * T6A.t3A, L8A << f1A) !== e0v && !a5ii.q0v())) {
				data = this.storage.get(T6A.w8A);
				obj = JSON.parse(data);
				obj.volume = this.volume;
				T6A.U8();
				data = JSON.stringify(obj);
				this.storage.set(T6A.w8A, data);
			// }
		},
		loadLastLevel: function() {
			var V6A = a5ii;
			var g8A = "705457520";
			var z8A = "233730";
			var G8A = "1829181476";
			var k8A = "826774";
			var A1A = 74935501;
			var L1A = 1682013952;
			var K8A = "618745";
			var m1A = 1502754464;
			var O8A = "773823202";
			var q1A = 961531776;
			var P1A = 622437;
			var W1A = 216339584;
			var T0v, i0v, G0v, h0v;
			T0v = +G8A;
			V6A.p3A(V6A.c3A);
			i0v = -V6A.Z3A(q1A, O8A);
			G0v = A1A;
			h0v = +g8A;
			// if (V6A.c7(V6A.c3A, z8A << m1A) === T0v || V6A.c7(V6A.b8A << W1A, +K8A) === i0v || V6A.m7(V6A.T8A << L1A, k8A & V6A.X8A) === G0v || V6A.c7(V6A.c3A, P1A) === h0v || a5ii.W0v()) {
				V6A.J8();
				data = this.storage.get(V6A.w8A);
				obj = JSON.parse(data);
				if (typeof obj.lastGeneratedLevel === V6A.Z8A) {
					V6A.p3A(V6A.j3A);
					this.levelCounter = V6A.o3A(V6A.D8A, V6A.c3A);
					this.selectedCharacter = +V6A.b8A;
					this.lastGeneratedLevel = [];
				} else {
					this.levelCounter = obj.levelCounter;
					this.selectedCharacter = obj.selectedCharacter;
					this.lastGeneratedLevel = obj.lastGeneratedLevel;
				}
				this.saveLastLevel();
			// }
		},
		saveLastLevel: function() {
			var y6A = a5ii;
			var b1A = 902259;
			var N1A = 926074720;
			var x0A = "426315";
			var l0A = "823675101";
			var J0A = "1985955874";
			var E3A = 16;
			var a0A = "494002277";
			var X1A = 803233;
			var d0A = "492685";
			var P0A = "847275";
			var d8A = 2052273446;
			var v0v, y0v, Q0v, C0v;
			v0v = - +a0A;
			y0v = - +J0A;
			Q0v = d8A;
			C0v = - +l0A;
			// if (y6A.m7(y6A.b8A >> N1A, +x0A) === v0v || y6A.c7(+y6A.b8A, P0A | X1A) === y0v || y6A.m7(y6A.T8A | E3A, +d0A) === Q0v || y6A.m7(+y6A.b8A, b1A) === C0v || a5ii.q0v()) {
				y6A.J8();
				data = this.storage.get(y6A.w8A);
				obj = JSON.parse(data);
				obj.levelCounter = this.levelCounter;
				obj.selectedCharacter = this.selectedCharacter;
				obj.lastGeneratedLevel = this.lastGeneratedLevel;
				data = JSON.stringify(obj);
				this.storage.set(y6A.w8A, data);
			// }
		},
		initData: function() {
			var Y6A = a5ii;
			var J1A = 348268;
			var y1A = 293091758;
			var R1A = 774456;
			var a1A = 295952;
			var A0A = "0.5";
			var b0A = "1700027407";
			var B0A = "710447";
			var X0A = "1336590390";
			var F1A = 1159757828;
			var R0A = "98588985";
			var K0v, X0v, I0v, D0v;
			K0v = y1A;
			Y6A.p3A(Y6A.i3A);
			X0v = Y6A.Z3A(R0A, Y6A.c3A);
			Y6A.p3A(Y6A.t3A);
			I0v = Y6A.Z3A(X0A, F1A);
			D0v = - +b0A;
			// if (Y6A.c7(+Y6A.b8A, +B0A) === K0v || Y6A.c7(+Y6A.b8A, R1A) === X0v || Y6A.m7(Y6A.T8A & Y6A.X8A, a1A) === I0v || Y6A.m7(Y6A.c3A, J1A) === D0v || a5ii.W0v()) {
				Y6A.J8();
				return this.sessionData = {
					sound: +A0A,
					music: +A0A,
					level: +Y6A.D8A,
					score: Y6A.c3A
				};
			// }
		},
		setupMarketJsGameCenter: function() {
			var M6A = a5ii;
			var M0A = "542252";
			var n0A = 'Position';
			var Y0A = 'MarketJSGameCenter';
			var Z0A = 'Left';
			var w0A = "absolute";
			var h0A = "1605012241";
			var V0A = 'Activator';
			var a8A = 1888866414;
			var o0A = 'Top';
			var y0A = 'gamecenter-activator';
			var S0A = "2023231488";
			var I0A = 'MarketJSGameCenter activator settings present ....';
			var p0A = 'MarketJSGameCenter settings not defined in game settings';
			var D0A = "777443";
			var l1A = 527200;
			var W0A = "691040";
			var R8A = 2108171904;
			var t1A = 826467332;
			var s0A = "484576";
			var C1A = 1269304081;
			var U0A = "3";
			var u0v, p0v, P0v, A0v, T8;
			u0v = +S0A;
			p0v = t1A;
			P0v = -a8A;
			M6A.p3A(M6A.t3A);
			A0v = M6A.Z3A(h0A, C1A);
			// if (!(M6A.m7(M6A.b8A ^ M6A.c3A, s0A - M6A.c3A) !== u0v && M6A.m7(+M6A.b8A, D0A & M6A.X8A) !== p0v && M6A.c7(+M6A.T8A, W0A | l1A) !== P0v && M6A.m7(M6A.c3A, M0A >> R8A) !== A0v && !a5ii.W0v())) {
				M6A.U8();
				if (_SETTINGS) {
					if (_SETTINGS[Y0A]) {
						T8 = ig.domHandler.getElementByClass(y0A);
						if (_SETTINGS[Y0A][V0A][M6A.T0A]) {
							if (_SETTINGS[Y0A][V0A][n0A]) {
								console.log(I0A);
								ig.domHandler.css(T8, {
									position: w0A,
									left: _SETTINGS[Y0A][V0A][n0A][Z0A],
									top: _SETTINGS[Y0A][V0A][n0A][o0A],
									"z-index": U0A ^ M6A.c3A
								});
							}
						}
						ig.domHandler.show(T8);
					} else {
						console.log(p0A);
					}
				}
			// }
		},
		finalize: function() {
			var W6A = a5ii;
			var I1A = 472164032;
			var i0A = "178135";
			var D1A = 182756000;
			var c0A = "350813015";
			var N0A = "288139631";
			var P8A = 2040595296;
			var w1A = 577565792;
			var j0A = "699052";
			var F0A = "763376";
			var e0A = "332921";
			var B1A = 14363360;
			var E0A = 'onclick';
			var q0A = "646307430";
			var H0A = 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();';
			var t0A = "1608643568";
			var H0v, V0v, J0v, c0v, r8;
			H0v = +c0A;
			W6A.U3A(W6A.N3A);
			V0v = W6A.Z3A(t0A, w1A);
			W6A.p3A(W6A.c3A);
			J0v = -W6A.Z3A(I1A, N0A);
			c0v = - +q0A;
			// if (W6A.m7(W6A.b8A << D1A, j0A << B1A) === H0v || W6A.c7(W6A.b8A << P8A, i0A * W6A.t3A) === V0v || W6A.c7(+W6A.T8A, +e0A) === J0v || W6A.c7(W6A.c3A, F0A & W6A.X8A) === c0v || a5ii.W0v()) {
				if (ig.ua.mobile) {
					r8 = ig.domHandler.getElementById(W6A.C0A);
					ig.domHandler.attr(r8, E0A, H0A);
					ig.domHandler.show(r8);
				} else {
					this.start();
				}
				W6A.U8();
				ig.sizeHandler.reorient();
			// }
		},
		removeLoadingWheel: function() {
			var v0A = 'none';
			var r0A = '#ajaxbar';
			var u0A = 'background';
			try {
				$(r0A).css(u0A, v0A);
			} catch (u8) {
				console.log(u8);
			}
		},
		showDebugMenu: function() {
			var D6A = a5ii;
			var f0A = "1250258299";
			var z0A = '.ig_debug';
			var x1A = 603956;
			var G0A = "725458";
			var d1A = 672166;
			var g0A = 'showing debug menu ...';
			var m0A = "1422392216";
			var Q0A = "1730719625";
			var L0A = "226092137";
			var O0A = "609821";
			var M0v, B0v, k0v, b0v;
			M0v = +m0A;
			B0v = +f0A;
			D6A.p3A(D6A.e3A);
			k0v = D6A.Z3A(D6A.t3A, Q0A);
			b0v = - +L0A;
			// if (D6A.c7(D6A.b8A ^ D6A.c3A, +G0A) === M0v || D6A.c7(D6A.b8A ^ D6A.c3A, d1A) === B0v || D6A.c7(+D6A.T8A, +O0A) === k0v || D6A.m7(D6A.b8A * D6A.t3A, x1A) === b0v || a5ii.q0v()) {
				console.log(g0A);
				ig.Entity._debugShowBoxes = D6A.s8A;
				D6A.U8();
				$(z0A).show();
			// }
		},
		start: function() {
			var s6A = a5ii;
			var k0A = "true";
			var a4A = 'DeveloperBranding';
			var K0A = 'dev';
			var s1A = 170709152;
			var J4A = 'Splash';
			var l4A = 'Branding';
			if (getQueryVariable(K0A) == k0A) {
				this.isDevMode = s6A.s8A;
			}
			this.resetPlayerStats();
			if (!this.isDevMode) {
				this.director = new ig.Director(this, [LevelOpening, LevelMainmenu, LevelGameplay]);
			} else {
				this.director = new ig.Director(this, [LevelOpening, LevelMainmenu, LevelGameplay]);
			}
			if (!_SETTINGS[a4A][J4A][s6A.T0A]) {
				this.director.currentLevel = +s6A.D8A;
			}
			if (_SETTINGS[l4A][J4A][s6A.T0A]) {
				try {
					this.branding = new ig.BrandingSplash();
				} catch (V8) {
					var x4A = 'Loading original levels ...';
					console.log(V8);
					console.log(x4A);
					this.director.loadLevel(this.director.currentLevel);
				}
			} else {
				this.director.loadLevel(this.director.currentLevel);
			}
			if (_SETTINGS[l4A][J4A][s6A.T0A] || _SETTINGS[a4A][J4A][s6A.T0A]) {
				s6A.U3A(s6A.c3A);
				this.spawnEntity(EntityPointerSelector, +s6A.P4A, s6A.o3A(s1A, s6A.P4A));
			}
			if (_SETTINGS[l4A][J4A][s6A.T0A] || _SETTINGS[a4A][J4A][s6A.T0A]) {
				s6A.U3A(s6A.j3A);
				ig.game.pointer = this.spawnEntity(EntityPointerSelector, s6A.Z3A(s6A.P4A, s6A.c3A), s6A.Z3A(s6A.P4A, s6A.c3A));
			}
			ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
			s6A.J8();
			ig.soundHandler.bgmPlayer.volume(ig.game.sessionData.music);
			ig.soundHandler.sfxPlayer.volume(ig.game.sessionData.sound);
		},
		fpsCount: function() {
			var h6A = a5ii;
			var d4A = "326232372";
			var S4A = "364918";
			var b4A = "1495090620";
			var X4A = "1979265127";
			var A4A = "144099";
			var R4A = "1639983764";
			var B4A = "843995";
			var K3A = 133587;
			var Q1A = 1619001860;
			var U0v, s0v, S0v, f0v;
			U0v = +d4A;
			h6A.U3A(h6A.t3A);
			s0v = h6A.o3A(R4A, Q1A);
			S0v = - +X4A;
			f0v = - +b4A;
			// if (!(h6A.c7(+h6A.b8A, +B4A) !== U0v && h6A.c7(h6A.c3A, K3A) !== s0v && h6A.c7(+h6A.T8A, +A4A) !== S0v && h6A.m7(+h6A.b8A, +S4A) !== f0v && !a5ii.q0v())) {
				if (!this.fpsTimer) {
					this.fpsTimer = new ig.Timer(+h6A.D8A);
				}
				if (this.fpsTimer && this.fpsTimer.delta() < h6A.c3A) {
					if (this.fpsCounter != h6A.B8A) {
						this.fpsCounter++;
					} else {
						this.fpsCounter = +h6A.b8A;
					}
				} else {
					ig.game.fps = this.fpsCounter;
					h6A.U3A(h6A.j3A);
					this.fpsCounter = h6A.Z3A(h6A.b8A, h6A.c3A);
					this.fpsTimer.reset();
				}
			// }
		},
		endGame: function() {
			var s4A = "MJSEnd";
			var h4A = 'End game';
			console.log(h4A);
			ig.soundHandler.bgmPlayer.stop();
			ig.apiHandler.run(s4A);
		},
		resetPlayerStats: function() {
			var D4A = 'resetting player stats ...';
			ig.log(D4A);
			a5ii.J8();
			this.playerStats = {
				id: this.playerStats ? this.playerStats.id : a5ii.B8A
			};
		},
		splashClick: function() {
			var z9A = a5ii;
			var z1A = 1821940640;
			var z3A = 33976;
			var n4A = "452688";
			var y4A = "2010488820";
			var M4A = "410296911";
			var O1A = 1795826880;
			var T4A = "590561";
			var w4A = "MJSFooter";
			var I4A = "999671";
			var Y4A = "699776004";
			var W4A = "501664749";
			var Y1A = 280884128;
			var V4A = "642232";
			var T1A = 409501536;
			var H1A = 1332631200;
			var Z4A = "MJSHeader";
			var N0v, R0v, Z0v, t0v, W8;
			z9A.p3A(z9A.N3A);
			N0v = z9A.Z3A(W4A, z1A);
			z9A.U3A(z9A.c3A);
			R0v = -z9A.Z3A(H1A, M4A);
			z9A.p3A(z9A.N3A);
			Z0v = -z9A.o3A(Y4A, T1A);
			z9A.p3A(z9A.N3A);
			t0v = -z9A.Z3A(y4A, Y1A);
			// if (z9A.m7(z9A.b8A | z9A.c3A, V4A | z3A) === N0v || z9A.c7(z9A.c3A, T4A << O1A) === R0v || z9A.c7(z9A.r3A, n4A & z9A.X8A) === Z0v || z9A.c7(z9A.b8A - z9A.c3A, +I4A) === t0v || a5ii.q0v()) {
				W8 = ig.domHandler.getElementById(z9A.C0A);
				ig.domHandler.hide(W8);
				ig.apiHandler.run(w4A);
				z9A.U8();
				ig.apiHandler.run(Z4A);
				ig.gd.show(function() {
					var U4A = "1723452746";
					var u1A = 1356777792;
					var o4A = "1538405547";
					var c1A = 729586636;
					var E1A = 1290796896;
					var c4A = "228782";
					var t4A = "408316";
					var N4A = "350823";
					var j4A = 'function';
					var p4A = "95894522";
					var q4A = "764457";
					var n0v, L0v, w0v, j0v;
					n0v = +o4A;
					L0v = - +U4A;
					w0v = -c1A;
					z9A.p3A(z9A.i3A);
					j0v = -z9A.Z3A(p4A, z9A.c3A);
					if (z9A.m7(z9A.c3A, +c4A) === n0v || z9A.c7(+z9A.b8A, +t4A) === L0v || z9A.c7(z9A.T8A << u1A, +N4A) === w0v || z9A.c7(z9A.c3A, q4A << E1A) === j0v || a5ii.W0v()) {
						ig.game.start();
						 
					}
				}.bind(this));
			// }
		},
		pauseGame: function() {
			var i4A = 'Game Paused';
			this.tempPause = this.paused;
			ig.game.box2dPaused = a5ii.s8A;
			a5ii.U8();
			this.paused = a5ii.s8A;
			ig.game.tweens.onSystemPause();
			console.log(i4A);
		},
		resumeGame: function(b8) {
			var e4A = 'Game Resumed';
			if (ig.gd.isFreez) {
				return;
			}
			ig.game.box2dPaused = a5ii.h8A;
			this.paused = a5ii.h8A;
			ig.game.tweens.onSystemResume();
			console.log(e4A);
		},
		showOverlay: function(z8) {
			var R6A = a5ii;
			var C4A = "visible";
			for (i = R6A.b8A & R6A.X8A; i < z8.length; i++) {
				if ($(R6A.F4A + z8[i])) {
					$(R6A.F4A + z8[i]).show();
				}
				if (document.getElementById(z8[i])) {
					document.getElementById(z8[i]).style.visibility = C4A;
				}
			}
		},
		hideOverlay: function(Q8) {
			var d6A = a5ii;
			var u4A = "694440";
			var E4A = "1060198371";
			var f4A = "887517";
			var H4A = "716813305";
			var Q4A = "hidden";
			var k3A = 136461;
			var m4A = "138541";
			var r4A = "1551240304";
			var o1A = 625327604;
			var e1A = 1113185888;
			var v4A = "733186";
			var z0v, a6v, q6v, W6v;
			z0v = - +E4A;
			d6A.p3A(d6A.e3A);
			a6v = d6A.Z3A(d6A.t3A, H4A);
			q6v = o1A;
			W6v = +r4A;
			// if (!(d6A.m7(+d6A.b8A, u4A & d6A.X8A) !== z0v && d6A.c7(d6A.b8A & d6A.X8A, +v4A) !== a6v && d6A.m7(d6A.T8A - d6A.c3A, m4A | k3A) !== q6v && d6A.m7(d6A.b8A - d6A.c3A, f4A >> e1A) !== W6v && !a5ii.W0v())) {
				d6A.U8();
				for (i = +d6A.b8A; i < Q8.length; i++) {
					if ($(d6A.F4A + Q8[i])) {
						$(d6A.F4A + Q8[i]).hide();
					}
					if (document.getElementById(Q8[i])) {
						document.getElementById(Q8[i]).style.visibility = Q4A;
					}
				}
			// }
		},
		currentBGMVolume: +a5ii.D8A,
		addition: a5ii.L4A * a5ii.t3A,
		update: function() {
			var P6A = a5ii;
			var v1A = 1398552384;
			var J7A = "869532";
			var i1A = 1077569696;
			var g4A = "634959979";
			var O4A = "1435099329";
			var G4A = "2121932451";
			var M1A = 271371776;
			var z4A = "433210851";
			var k4A = "199701";
			var a7A = "388898";
			var K4A = "740895";
			var Y6v, l6v, r6v, E6v;
			Y6v = +G4A;
			l6v = +O4A;
			P6A.p3A(P6A.q3A);
			r6v = P6A.o3A(P6A.X8A, g4A);
			P6A.U3A(P6A.c3A);
			E6v = -P6A.o3A(M1A, z4A);
			// if (P6A.c7(P6A.c3A, K4A >> v1A) === Y6v || P6A.c7(P6A.b8A - P6A.c3A, k4A & P6A.X8A) === l6v || P6A.m7(P6A.T8A ^ P6A.c3A, +a7A) === r6v || P6A.c7(P6A.b8A * P6A.t3A, +J7A) === E6v || a5ii.q0v()) {
				if (this.paused) {
					this.updateWhilePaused();
					this.checkWhilePaused();
				} else {
					this.parent();
					this.tweens.update(this.tweens.now());
					if (ig.ua.mobile && ig.soundHandler) {
						ig.soundHandler.forceLoopBGM();
					}
				}
				if (ig.game.getEntitiesByType(EntityPointerSelector).length == (P6A.b8A | P6A.c3A)) {
					P6A.p3A(P6A.N3A);
					ig.game.pointer = this.spawnEntity(EntityPointerSelector, P6A.o3A(P6A.P4A, i1A), +P6A.P4A);
				}
			// }
		},
		updateWhilePaused: function() {
			var x6A = a5ii;
			var b7A = "271323";
			var R7A = "652659";
			var P7A = "1314612271";
			var r1A = 1344624608;
			var B7A = "757769";
			var X7A = "236586";
			var l7A = "1289582916";
			var d7A = "830361591";
			var x7A = "48843843";
			var x6v, F6v, O6v, o6v;
			x6v = - +l7A;
			x6A.U3A(x6A.e3A);
			F6v = x6A.o3A(x6A.t3A, x7A);
			x6A.p3A(x6A.e3A);
			O6v = x6A.o3A(x6A.t3A, P7A);
			x6A.U3A(x6A.q3A);
			o6v = -x6A.Z3A(x6A.X8A, d7A);
			// if (x6A.m7(+x6A.b8A, R7A - x6A.c3A) === x6v || x6A.c7(x6A.b8A >> r1A, +X7A) === F6v || x6A.c7(x6A.r3A, b7A * x6A.t3A) === O6v || x6A.c7(x6A.b8A - x6A.c3A, B7A ^ x6A.c3A) === o6v || a5ii.q0v()) {
				x6A.J8();
				for (var G8 = x6A.b8A * x6A.t3A; G8 < this.entities.length; G8++) {
					if (this.entities[G8].ignorePause) {
						this.entities[G8].update();
					}
				}
			// }
		},
		checkWhilePaused: function() {
			var l6A = a5ii;
			var F3A = 7;
			var V1A = 295448192;
			var u3A = 29;
			var H3A = 20;
			var D8, p8, x8, K8, E8, L8, e8, y8;
			l6A.J8();
			D8 = {};
			for (var c8 = +l6A.b8A; c8 < this.entities.length; c8++) {
				p8 = this.entities[c8];
				if (p8.ignorePause) {
					if (p8.type == ig.Entity.TYPE.NONE && p8.checkAgainst == ig.Entity.TYPE.NONE && p8.collides == ig.Entity.COLLIDES.NEVER) {
						continue;
					}
					x8 = {};
					K8 = Math.floor(p8.pos.x / this.cellSize);
					E8 = Math.floor(p8.pos.y / this.cellSize);
					l6A.p3A(F3A);
					var T6v = l6A.Z3A(l6A.C3A, u3A, H3A);
					L8 = Math.floor((p8.pos.x + p8.size.x) / this.cellSize) + (l6A.D8A | T6v);
					e8 = Math.floor((p8.pos.y + p8.size.y) / this.cellSize) + (l6A.D8A >> V1A);
					for (var C8 = K8; C8 < L8; C8++) {
						for (var M8 = E8; M8 < e8; M8++) {
							if (!D8[C8]) {
								D8[C8] = {};
								D8[C8][M8] = [p8];
							} else if (!D8[C8][M8]) {
								D8[C8][M8] = [p8];
							} else {
								y8 = D8[C8][M8];
								for (var f8 = +l6A.b8A; f8 < y8.length; f8++) {
									if (p8.touches(y8[f8]) && !x8[y8[f8].id]) {
										x8[y8[f8].id] = l6A.s8A;
										ig.Entity.checkPair(p8, y8[f8]);
									}
								}
								y8.push(p8);
							}
						}
					}
				}
			}
		},
		draw: function() {
			this.parent();
			this.dctf();
		},
		dctf: function() {
			var J6A = a5ii;
			var A7A = "545561021";
			var Y7A = "308968";
			var M7A = "340829";
			var s7A = "1526000792";
			var W7A = "129984";
			var h7A = "509224875";
			var D7A = "622749";
			var S7A = "94003973";
			var m3A = 137;
			var g6v, d6v, m6v, e6v;
			J6A.U3A(J6A.e3A);
			g6v = J6A.Z3A(J6A.t3A, A7A);
			J6A.U3A(J6A.i3A);
			d6v = J6A.o3A(S7A, J6A.c3A);
			m6v = +h7A;
			J6A.U3A(J6A.j3A);
			e6v = -J6A.Z3A(s7A, J6A.c3A);
			// if (!(J6A.m7(+J6A.b8A, D7A | m3A) !== g6v && J6A.c7(+J6A.b8A, W7A ^ J6A.c3A) !== d6v && J6A.c7(+J6A.T8A, M7A & J6A.X8A) !== m6v && J6A.c7(J6A.b8A ^ J6A.c3A, +Y7A) !== e6v && !a5ii.W0v())) {
				this.COPYRIGHT;
			// }
		},
		clearCanvas: function(R8, m8, o8) {
			var V7A = "inherit";
			var y7A = "none";
			var l8;
			l8 = R8.canvas;
			R8.clearRect(+a5ii.b8A, +a5ii.b8A, m8, o8);
			l8.style.display = y7A;
			l8.offsetHeight;
			l8.style.display = V7A;
		},
		drawDebug: function() {
			var k9A = a5ii;
			var o7A = ": ";
			var n7A = "0.35";
			var T7A = '#000000';
			var Z7A = '#ffffff';
			var I7A = "4";
			var U7A = "10";
			var w7A = "10px Arial";
			k9A.J8();
			if (!ig.global.wm) {
				this.debugEnable();
				if (this.viewDebug) {
					ig.system.context.fillStyle = T7A;
					k9A.p3A(k9A.j3A);
					ig.system.context.globalAlpha = k9A.o3A(n7A, k9A.c3A);
					k9A.U3A(k9A.e3A);
					ig.system.context.fillRect(+k9A.b8A, k9A.Z3A(k9A.t3A, k9A.b8A), ig.system.width / +I7A, ig.system.height);
					ig.system.context.globalAlpha = +k9A.D8A;
					if (this.debug && this.debug.length > k9A.b8A * k9A.t3A) {
						for (i = +k9A.b8A; i < this.debug.length; i++) {
							ig.system.context.font = w7A;
							ig.system.context.fillStyle = Z7A;
							ig.system.context.fillText(this.debugLine - this.debug.length + i + o7A + this.debug[i], k9A.C3A, (k9A.P4A & k9A.X8A) + +U7A * i);
						}
					}
				}
			}
		},
		debugCL: function(A8) {
			var A6A = a5ii;
			A6A.J8();
			if (!this.debug) {
				this.debug = [];
				this.debugLine = +A6A.D8A;
				this.debug.push(A8);
			} else {
				if (this.debug.length < +A6A.P4A) {
					this.debug.push(A8);
				} else {
					A6A.U3A(A6A.i3A);
					this.debug.splice(A6A.c3A, A6A.o3A(A6A.D8A, A6A.c3A));
					this.debug.push(A8);
				}
				this.debugLine++;
			}
			console.log(A8);
		},
		debugEnable: function() {
			var K9A = a5ii;
			var p7A = "2";
			K9A.J8();
			if (ig.input.pressed(K9A.q8A)) {
				this.debugEnableTimer = new ig.Timer(+p7A);
			}
			if (this.debugEnableTimer && this.debugEnableTimer.delta() < (K9A.b8A & K9A.X8A)) {
				if (ig.input.released(K9A.q8A)) {
					this.debugEnableTimer = K9A.B8A;
				}
			} else if (this.debugEnableTimer && this.debugEnableTimer.delta() > +K9A.b8A) {
				this.debugEnableTimer = K9A.B8A;
				if (this.viewDebug) {
					this.viewDebug = K9A.h8A;
				} else {
					this.viewDebug = K9A.s8A;
				}
			}
		}
	});
	ig.domHandler = a5ii.B8A;
	ig.domHandler = new ig.DomHandler();
	ig.domHandler.forcedDeviceDetection();
	ig.domHandler.forcedDeviceRotation();
	ig.apiHandler = new ig.ApiHandler();
	ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
	fps = a5ii.v3A;
	if (ig.ua.mobile) {
		ig.Sound.enabled = a5ii.h8A;
		ig.main(a5ii.c7A, MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
		ig.sizeHandler.resize();
	} else {
		ig.main(a5ii.c7A, MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
	}
	ig.soundHandler = a5ii.B8A;
	ig.soundHandler = new ig.SoundHandler();
	ig.sizeHandler.reorient();
	
});