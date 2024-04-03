"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3480], {
        90407: function(e, t, s) {
            s.d(t, {
                ConfigCtrl: function() {
                    return O
                },
                zv: function() {
                    return b
                },
                uA: function() {
                    return v
                },
                ExplorerCtrl: function() {
                    return H
                },
                jb: function() {
                    return z
                },
                OptionsCtrl: function() {
                    return I
                },
                AV: function() {
                    return m
                },
                ThemeCtrl: function() {
                    return Y
                },
                ToastCtrl: function() {
                    return ee
                }
            }), Symbol();
            let r = Symbol(),
                o = Object.getPrototypeOf,
                a = new WeakMap,
                n = e => e && (a.has(e) ? a.get(e) : o(e) === Object.prototype || o(e) === Array.prototype),
                l = e => n(e) && e[r] || null,
                i = (e, t = !0) => {
                    a.set(e, t)
                },
                c = e => "object" == typeof e && null !== e,
                d = new WeakMap,
                u = new WeakSet,
                [p] = ((e = Object.is, t = (e, t) => new Proxy(e, t), s = e => c(e) && !u.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer), r = e => {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e
                    }
                }, o = new WeakMap, a = (e, t, s = r) => {
                    let n = o.get(e);
                    if ((null == n ? void 0 : n[0]) === t) return n[1];
                    let l = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
                    return i(l, !0), o.set(e, [t, l]), Reflect.ownKeys(e).forEach(t => {
                        if (Object.getOwnPropertyDescriptor(l, t)) return;
                        let r = Reflect.get(e, t),
                            o = {
                                value: r,
                                enumerable: !0,
                                configurable: !0
                            };
                        if (u.has(r)) i(r, !1);
                        else if (r instanceof Promise) delete o.value, o.get = () => s(r);
                        else if (d.has(r)) {
                            let [e, t] = d.get(r);
                            o.value = a(e, t(), s)
                        }
                        Object.defineProperty(l, t, o)
                    }), Object.preventExtensions(l)
                }, n = new WeakMap, p = [1, 1], f = r => {
                    if (!c(r)) throw Error("object required");
                    let o = n.get(r);
                    if (o) return o;
                    let i = p[0],
                        h = new Set,
                        g = (e, t = ++p[0]) => {
                            i !== t && (i = t, h.forEach(s => s(e, t)))
                        },
                        m = p[1],
                        b = (e = ++p[1]) => (m === e || h.size || (m = e, v.forEach(([t]) => {
                            let s = t[1](e);
                            s > i && (i = s)
                        })), i),
                        y = e => (t, s) => {
                            let r = [...t];
                            r[1] = [e, ...r[1]], g(r, s)
                        },
                        v = new Map,
                        w = (e, t) => {
                            if (v.has(e)) throw Error("prop listener already exists");
                            if (h.size) {
                                let s = t[3](y(e));
                                v.set(e, [t, s])
                            } else v.set(e, [t])
                        },
                        I = e => {
                            var t;
                            let s = v.get(e);
                            s && (v.delete(e), null == (t = s[1]) || t.call(s))
                        },
                        C = e => {
                            h.add(e), 1 === h.size && v.forEach(([e, t], s) => {
                                if (t) throw Error("remove already exists");
                                let r = e[3](y(s));
                                v.set(s, [e, r])
                            });
                            let t = () => {
                                h.delete(e), 0 === h.size && v.forEach(([e, t], s) => {
                                    t && (t(), v.set(s, [e]))
                                })
                            };
                            return t
                        },
                        O = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r)),
                        W = {
                            deleteProperty(e, t) {
                                let s = Reflect.get(e, t);
                                I(t);
                                let r = Reflect.deleteProperty(e, t);
                                return r && g(["delete", [t], s]), r
                            },
                            set(t, r, o, a) {
                                let i = Reflect.has(t, r),
                                    p = Reflect.get(t, r, a);
                                if (i && (e(p, o) || n.has(o) && e(p, n.get(o)))) return !0;
                                I(r), c(o) && (o = l(o) || o);
                                let h = o;
                                if (o instanceof Promise) o.then(e => {
                                    o.status = "fulfilled", o.value = e, g(["resolve", [r], e])
                                }).catch(e => {
                                    o.status = "rejected", o.reason = e, g(["reject", [r], e])
                                });
                                else {
                                    !d.has(o) && s(o) && (h = f(o));
                                    let e = !u.has(h) && d.get(h);
                                    e && w(r, e)
                                }
                                return Reflect.set(t, r, h, a), g(["set", [r], o, p]), !0
                            }
                        },
                        E = t(O, W);
                    n.set(r, E);
                    let j = [O, b, a, C];
                    return d.set(E, j), Reflect.ownKeys(r).forEach(e => {
                        let t = Object.getOwnPropertyDescriptor(r, e);
                        "value" in t && (E[e] = r[e], delete t.value, delete t.writable), Object.defineProperty(O, e, t)
                    }), E
                }) => [f, d, u, e, t, s, r, o, a, n, p])();

            function f(e = {}) {
                return p(e)
            }

            function h(e, t, s) {
                let r;
                let o = d.get(e);
                o || console.warn("Please use proxy object");
                let a = [],
                    n = o[3],
                    l = !1,
                    i = n(e => {
                        if (a.push(e), s) {
                            t(a.splice(0));
                            return
                        }
                        r || (r = Promise.resolve().then(() => {
                            r = void 0, l && t(a.splice(0))
                        }))
                    });
                return l = !0, () => {
                    l = !1, i()
                }
            }
            let g = f({
                    history: ["ConnectWallet"],
                    view: "ConnectWallet",
                    data: void 0
                }),
                m = {
                    state: g,
                    subscribe: e => h(g, () => e(g)),
                    push(e, t) {
                        e !== g.view && (g.view = e, t && (g.data = t), g.history.push(e))
                    },
                    reset(e) {
                        g.view = e, g.history = [e]
                    },
                    replace(e) {
                        g.history.length > 1 && (g.history[g.history.length - 1] = e, g.view = e)
                    },
                    goBack() {
                        if (g.history.length > 1) {
                            g.history.pop();
                            let [e] = g.history.slice(-1);
                            g.view = e
                        }
                    },
                    setData(e) {
                        g.data = e
                    }
                },
                b = {
                    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
                    WCM_VERSION: "WCM_VERSION",
                    RECOMMENDED_WALLET_AMOUNT: 9,
                    isMobile: () => "u" > typeof window && !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
                    isAndroid: () => b.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
                    isIos() {
                        let e = navigator.userAgent.toLowerCase();
                        return b.isMobile() && (e.includes("iphone") || e.includes("ipad"))
                    },
                    isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
                    isArray: e => Array.isArray(e) && e.length > 0,
                    formatNativeUrl(e, t, s) {
                        if (b.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
                        let r = e;
                        r.includes("://") || (r = e.replaceAll("/", "").replaceAll(":", ""), r = `${r}://`), r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
                        let o = encodeURIComponent(t);
                        return `${r}wc?uri=${o}`
                    },
                    formatUniversalUrl(e, t, s) {
                        if (!b.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
                        let r = e;
                        r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
                        let o = encodeURIComponent(t);
                        return `${r}wc?uri=${o}`
                    },
                    wait: async e => new Promise(t => {
                        setTimeout(t, e)
                    }),
                    openHref(e, t) {
                        window.open(e, t, "noreferrer noopener")
                    },
                    setWalletConnectDeepLink(e, t) {
                        try {
                            localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: e,
                                name: t
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect deep link")
                        }
                    },
                    setWalletConnectAndroidDeepLink(e) {
                        try {
                            let [t] = e.split("?");
                            localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: t,
                                name: "Android"
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect android deep link")
                        }
                    },
                    removeWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)
                        } catch {
                            console.info("Unable to remove WalletConnect deep link")
                        }
                    },
                    setModalVersionInStorage() {
                        try {
                            "u" > typeof localStorage && localStorage.setItem(b.WCM_VERSION, "2.6.2")
                        } catch {
                            console.info("Unable to set Web3Modal version in storage")
                        }
                    },
                    getWalletRouterData() {
                        var e;
                        let t = null == (e = m.state.data) ? void 0 : e.Wallet;
                        if (!t) throw Error('Missing "Wallet" view data');
                        return t
                    }
                },
                y = f({
                    enabled: "u" > typeof location && (location.hostname.includes("localhost") || location.protocol.includes("https")),
                    userSessionId: "",
                    events: [],
                    connectedWalletId: void 0
                }),
                v = {
                    state: y,
                    subscribe: e => h(y.events, () => e(function(e, t) {
                        let s = d.get(e);
                        s || console.warn("Please use proxy object");
                        let [r, o, a] = s;
                        return a(r, o(), void 0)
                    }(y.events[y.events.length - 1]))),
                    initialize() {
                        y.enabled && "u" > typeof(null == crypto ? void 0 : crypto.randomUUID) && (y.userSessionId = crypto.randomUUID())
                    },
                    setConnectedWalletId(e) {
                        y.connectedWalletId = e
                    },
                    click(e) {
                        if (y.enabled) {
                            let t = {
                                type: "CLICK",
                                name: e.name,
                                userSessionId: y.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            y.events.push(t)
                        }
                    },
                    track(e) {
                        if (y.enabled) {
                            let t = {
                                type: "TRACK",
                                name: e.name,
                                userSessionId: y.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            y.events.push(t)
                        }
                    },
                    view(e) {
                        if (y.enabled) {
                            let t = {
                                type: "VIEW",
                                name: e.name,
                                userSessionId: y.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            y.events.push(t)
                        }
                    }
                },
                w = f({
                    chains: void 0,
                    walletConnectUri: void 0,
                    isAuth: !1,
                    isCustomDesktop: !1,
                    isCustomMobile: !1,
                    isDataLoaded: !1,
                    isUiLoaded: !1
                }),
                I = {
                    state: w,
                    subscribe: e => h(w, () => e(w)),
                    setChains(e) {
                        w.chains = e
                    },
                    setWalletConnectUri(e) {
                        w.walletConnectUri = e
                    },
                    setIsCustomDesktop(e) {
                        w.isCustomDesktop = e
                    },
                    setIsCustomMobile(e) {
                        w.isCustomMobile = e
                    },
                    setIsDataLoaded(e) {
                        w.isDataLoaded = e
                    },
                    setIsUiLoaded(e) {
                        w.isUiLoaded = e
                    },
                    setIsAuth(e) {
                        w.isAuth = e
                    }
                },
                C = f({
                    projectId: "",
                    mobileWallets: void 0,
                    desktopWallets: void 0,
                    walletImages: void 0,
                    chains: void 0,
                    enableAuthMode: !1,
                    enableExplorer: !0,
                    explorerExcludedWalletIds: void 0,
                    explorerRecommendedWalletIds: void 0,
                    termsOfServiceUrl: void 0,
                    privacyPolicyUrl: void 0
                }),
                O = {
                    state: C,
                    subscribe: e => h(C, () => e(C)),
                    setConfig(e) {
                        var t, s;
                        v.initialize(), I.setChains(e.chains), I.setIsAuth(!!e.enableAuthMode), I.setIsCustomMobile(!!(null == (t = e.mobileWallets) ? void 0 : t.length)), I.setIsCustomDesktop(!!(null == (s = e.desktopWallets) ? void 0 : s.length)), b.setModalVersionInStorage(), Object.assign(C, e)
                    }
                };
            var W = Object.defineProperty,
                E = Object.getOwnPropertySymbols,
                j = Object.prototype.hasOwnProperty,
                L = Object.prototype.propertyIsEnumerable,
                A = (e, t, s) => t in e ? W(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                k = (e, t) => {
                    for (var s in t || (t = {})) j.call(t, s) && A(e, s, t[s]);
                    if (E)
                        for (var s of E(t)) L.call(t, s) && A(e, s, t[s]);
                    return e
                };
            let M = "https://explorer-api.walletconnect.com",
                U = "js-2.6.2";
            async function D(e, t) {
                let s = k({
                        sdkType: "wcm",
                        sdkVersion: U
                    }, t),
                    r = new URL(e, M);
                return r.searchParams.append("projectId", O.state.projectId), Object.entries(s).forEach(([e, t]) => {
                    t && r.searchParams.append(e, String(t))
                }), (await fetch(r)).json()
            }
            let P = {
                getDesktopListings: async e => D("/w3m/v1/getDesktopListings", e),
                getMobileListings: async e => D("/w3m/v1/getMobileListings", e),
                getInjectedListings: async e => D("/w3m/v1/getInjectedListings", e),
                getAllListings: async e => D("/w3m/v1/getAllListings", e),
                getWalletImageUrl: e => `${M}/w3m/v1/getWalletImage/${e}?projectId=${O.state.projectId}&sdkType=wcm&sdkVersion=${U}`,
                getAssetImageUrl: e => `${M}/w3m/v1/getAssetImage/${e}?projectId=${O.state.projectId}&sdkType=wcm&sdkVersion=${U}`
            };
            var S = Object.defineProperty,
                N = Object.getOwnPropertySymbols,
                T = Object.prototype.hasOwnProperty,
                x = Object.prototype.propertyIsEnumerable,
                R = (e, t, s) => t in e ? S(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                _ = (e, t) => {
                    for (var s in t || (t = {})) T.call(t, s) && R(e, s, t[s]);
                    if (N)
                        for (var s of N(t)) x.call(t, s) && R(e, s, t[s]);
                    return e
                };
            let $ = b.isMobile(),
                V = f({
                    wallets: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    search: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    recomendedWallets: []
                }),
                H = {
                    state: V,
                    async getRecomendedWallets() {
                        let {
                            explorerRecommendedWalletIds: e,
                            explorerExcludedWalletIds: t
                        } = O.state;
                        if ("NONE" === e || "ALL" === t && !e) return V.recomendedWallets;
                        if (b.isArray(e)) {
                            let t = {
                                    recommendedIds: e.join(",")
                                },
                                {
                                    listings: s
                                } = await P.getAllListings(t),
                                r = Object.values(s);
                            r.sort((t, s) => e.indexOf(t.id) - e.indexOf(s.id)), V.recomendedWallets = r
                        } else {
                            let {
                                chains: e,
                                isAuth: s
                            } = I.state, r = e ? .join(","), o = b.isArray(t), a = {
                                page: 1,
                                sdks: s ? "auth_v1" : void 0,
                                entries: b.RECOMMENDED_WALLET_AMOUNT,
                                chains: r,
                                version: 2,
                                excludedIds: o ? t.join(",") : void 0
                            }, {
                                listings: n
                            } = $ ? await P.getMobileListings(a) : await P.getDesktopListings(a);
                            V.recomendedWallets = Object.values(n)
                        }
                        return V.recomendedWallets
                    },
                    async getWallets(e) {
                        let t = _({}, e),
                            {
                                explorerRecommendedWalletIds: s,
                                explorerExcludedWalletIds: r
                            } = O.state,
                            {
                                recomendedWallets: o
                            } = V;
                        if ("ALL" === r) return V.wallets;
                        o.length ? t.excludedIds = o.map(e => e.id).join(",") : b.isArray(s) && (t.excludedIds = s.join(",")), b.isArray(r) && (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")), I.state.isAuth && (t.sdks = "auth_v1");
                        let {
                            page: a,
                            search: n
                        } = e, {
                            listings: l,
                            total: i
                        } = $ ? await P.getMobileListings(t) : await P.getDesktopListings(t), c = Object.values(l), d = n ? "search" : "wallets";
                        return V[d] = {
                            listings: [...V[d].listings, ...c],
                            total: i,
                            page: a ? ? 1
                        }, {
                            listings: c,
                            total: i
                        }
                    },
                    getWalletImageUrl: e => P.getWalletImageUrl(e),
                    getAssetImageUrl: e => P.getAssetImageUrl(e),
                    resetSearch() {
                        V.search = {
                            listings: [],
                            total: 0,
                            page: 1
                        }
                    }
                },
                K = f({
                    open: !1
                }),
                z = {
                    state: K,
                    subscribe: e => h(K, () => e(K)),
                    open: async e => new Promise(t => {
                        let {
                            isUiLoaded: s,
                            isDataLoaded: r
                        } = I.state;
                        if (b.removeWalletConnectDeepLink(), I.setWalletConnectUri(e ? .uri), I.setChains(e ? .chains), m.reset("ConnectWallet"), s && r) K.open = !0, t();
                        else {
                            let e = setInterval(() => {
                                let s = I.state;
                                s.isUiLoaded && s.isDataLoaded && (clearInterval(e), K.open = !0, t())
                            }, 200)
                        }
                    }),
                    close() {
                        K.open = !1
                    }
                };
            var B = Object.defineProperty,
                J = Object.getOwnPropertySymbols,
                q = Object.prototype.hasOwnProperty,
                F = Object.prototype.propertyIsEnumerable,
                G = (e, t, s) => t in e ? B(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                Q = (e, t) => {
                    for (var s in t || (t = {})) q.call(t, s) && G(e, s, t[s]);
                    if (J)
                        for (var s of J(t)) F.call(t, s) && G(e, s, t[s]);
                    return e
                };
            let X = f({
                    themeMode: "u" > typeof matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                }),
                Y = {
                    state: X,
                    subscribe: e => h(X, () => e(X)),
                    setThemeConfig(e) {
                        let {
                            themeMode: t,
                            themeVariables: s
                        } = e;
                        t && (X.themeMode = t), s && (X.themeVariables = Q({}, s))
                    }
                },
                Z = f({
                    open: !1,
                    message: "",
                    variant: "success"
                }),
                ee = {
                    state: Z,
                    subscribe: e => h(Z, () => e(Z)),
                    openToast(e, t) {
                        Z.open = !0, Z.message = e, Z.variant = t
                    },
                    closeToast() {
                        Z.open = !1
                    }
                }
        },
        33480: function(e, t, s) {
            s.d(t, {
                WalletConnectModal: function() {
                    return o
                }
            });
            var r = s(90407);
            class o {
                constructor(e) {
                    this.openModal = r.jb.open, this.closeModal = r.jb.close, this.subscribeModal = r.jb.subscribe, this.setTheme = r.ThemeCtrl.setThemeConfig, r.ThemeCtrl.setThemeConfig(e), r.ConfigCtrl.setConfig(e), this.initUi()
                }
                async initUi() {
                    if ("u" > typeof window) {
                        await s.e(2682).then(s.bind(s, 22682));
                        let e = document.createElement("wcm-modal");
                        document.body.insertAdjacentElement("beforeend", e), r.OptionsCtrl.setIsUiLoaded(!0)
                    }
                }
            }
        }
    }
]);