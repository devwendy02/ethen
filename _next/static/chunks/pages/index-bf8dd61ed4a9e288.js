(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        65186: function(e, t, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return l(721)
            }])
        },
        721: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            });
            var a, r, n, c, o, i, s, h, f, m, u, d, p, g, v, x, E, _, w, b = l(35250),
                y = l(70079),
                B = l(27040),
                V = l(60365);
            let z = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    try {
                        if ("bigint" != typeof e || e === BigInt(0)) return 0;
                        let a = function(e, t) {
                                let [l, a = "0"] = "1".split("."), r = l.startsWith("-");
                                if (r && (l = l.slice(1)), a = a.replace(/(0+)$/, ""), 0 === t) 1 === Math.round(Number(`.${a}`)) && (l = `${BigInt(l)+1n}`), a = "";
                                else if (a.length > t) {
                                    let [e, r, n] = [a.slice(0, t - 1), a.slice(t - 1, t), a.slice(t)], c = Math.round(Number(`${r}.${n}`));
                                    (a = c > 9 ? `${BigInt(e)+BigInt(1)}0`.padStart(e.length + 1, "0") : `${e}${c}`).length > t && (a = a.slice(1), l = `${BigInt(l)+1n}`), a = a.slice(0, t)
                                } else a = a.padEnd(t, "0");
                                return BigInt(`${r?"-":""}${l}${a}`)
                            }(0, t),
                            r = 10 ** l;
                        return Number(e * BigInt(r) / a) / r
                    } catch (e) {
                        return 0
                    }
                },
                O = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    try {
                        if ("string" != typeof e) return 0;
                        return z(BigInt(e), t, l)
                    } catch (e) {
                        return V.Tb(e), 0
                    }
                };
            var k = l(48e3),
                j = l.n(k),
                A = l(19841),
                C = l(85452),
                M = l(83291);

            function S() {
                return (S = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var N = function(e) {
                return y.createElement("svg", S({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 226,
                    height: 104,
                    fill: "none"
                }, e), a || (a = y.createElement("g", {
                    filter: "url(#glow-connect-wallet_svg__a)"
                }, y.createElement("path", {
                    fill: "#000",
                    d: "M48.098 32.093a5 5 0 0 1 4.676-1.54l58.202 11.587A5 5 0 0 1 115 47.044v9.719a5 5 0 0 1-4.247 4.943l-75 11.418A5 5 0 0 1 30 68.181V53.933a5 5 0 0 1 1.3-3.363z"
                }))), r || (r = y.createElement("g", {
                    filter: "url(#glow-connect-wallet_svg__b)"
                }, y.createElement("path", {
                    fill: "#000",
                    d: "M196 35.819a5 5 0 0 0-5.753-4.943l-75 11.418A5 5 0 0 0 111 47.239v9.718a5 5 0 0 0 4.024 4.904l58.202 11.588a5 5 0 0 0 4.676-1.54L194.7 53.43c.836-.92 1.3-2.12 1.3-3.363z"
                }))), n || (n = y.createElement("path", {
                    fill: "#000",
                    stroke: "url(#glow-connect-wallet_svg__c)",
                    d: "M191 29.5H52.212a5.5 5.5 0 0 0-4.07 1.8L30.93 50.233a5.5 5.5 0 0 0-1.43 3.7V69a5.5 5.5 0 0 0 5.5 5.5h138.788c1.55 0 3.027-.654 4.07-1.8l17.212-18.933a5.501 5.501 0 0 0 1.43-3.7V35a5.5 5.5 0 0 0-5.5-5.5Z"
                })), c || (c = y.createElement("path", {
                    stroke: "#262626",
                    d: "M187 33.5H54.15a5.5 5.5 0 0 0-3.992 1.717L35.008 51.21a5.5 5.5 0 0 0-1.508 3.782V65a5.5 5.5 0 0 0 5.5 5.5h132.849a5.5 5.5 0 0 0 3.993-1.717l15.151-15.993a5.499 5.499 0 0 0 1.507-3.782V39a5.5 5.5 0 0 0-5.5-5.5Z"
                })), o || (o = y.createElement("path", {
                    fill: "#fff",
                    d: "M54.528 57.112c-.718 0-1.353-.154-1.904-.462a3.196 3.196 0 0 1-1.26-1.302c-.298-.57-.448-1.223-.448-1.96v-2.576c0-.737.15-1.386.448-1.946a3.24 3.24 0 0 1 1.288-1.316c.56-.308 1.204-.462 1.932-.462h1.484c.7 0 1.316.15 1.848.448.532.299.943.719 1.232 1.26.299.532.448 1.153.448 1.862h-1.904c0-.56-.15-1.008-.448-1.344-.298-.345-.69-.518-1.176-.518h-1.484c-.523 0-.943.196-1.26.588-.317.383-.476.887-.476 1.512v2.408c0 .625.154 1.134.462 1.526.308.383.714.574 1.218.574h1.512c.495 0 .896-.191 1.204-.574.318-.383.476-.887.476-1.512h1.904c0 .756-.15 1.423-.448 2.002a3.266 3.266 0 0 1-1.26 1.33c-.541.308-1.166.462-1.876.462zm9.765 0c-.738 0-1.39-.154-1.96-.462a3.428 3.428 0 0 1-1.316-1.316c-.308-.57-.462-1.227-.462-1.974v-2.52c0-.747.154-1.4.462-1.96a3.306 3.306 0 0 1 1.316-1.316c.57-.317 1.223-.476 1.96-.476h1.484c.737 0 1.386.159 1.946.476.57.308 1.008.747 1.316 1.316.317.56.476 1.213.476 1.96v2.52c0 .747-.159 1.405-.476 1.974-.308.56-.747.999-1.316 1.316-.56.308-1.209.462-1.946.462zm1.484-1.708c.541 0 .975-.196 1.302-.588.336-.392.504-.905.504-1.54v-2.352c0-.635-.168-1.148-.504-1.54-.327-.392-.76-.588-1.302-.588h-1.484c-.542 0-.98.196-1.316.588-.327.392-.49.905-.49 1.54v2.352c0 .635.163 1.148.49 1.54.336.392.775.588 1.316.588zm5.189-8.204h1.722l4.704 6.664V47.2h1.89V57H77.56l-4.704-6.664V57h-1.89zm10.049 0h1.722l4.704 6.664V47.2h1.89V57h-1.722l-4.704-6.664V57h-1.89zM92.42 57c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V47.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V57zm10.683.112c-.718 0-1.353-.154-1.904-.462a3.197 3.197 0 0 1-1.26-1.302c-.298-.57-.448-1.223-.448-1.96v-2.576c0-.737.15-1.386.448-1.946a3.241 3.241 0 0 1 1.288-1.316c.56-.308 1.204-.462 1.932-.462h1.484c.7 0 1.316.15 1.848.448a3.08 3.08 0 0 1 1.232 1.26c.299.532.448 1.153.448 1.862h-1.904c0-.56-.149-1.008-.448-1.344-.298-.345-.69-.518-1.176-.518h-1.484c-.522 0-.942.196-1.26.588-.317.383-.476.887-.476 1.512v2.408c0 .625.154 1.134.462 1.526.308.383.714.574 1.218.574h1.512c.495 0 .896-.191 1.204-.574.318-.383.476-.887.476-1.512h1.904c0 .756-.149 1.423-.448 2.002a3.258 3.258 0 0 1-1.26 1.33c-.541.308-1.166.462-1.876.462zm8.551-8.232h-3.108V47.2h8.148v1.68h-3.108V57h-1.932zM124.108 57c-.317 0-.583-.08-.798-.238-.214-.159-.364-.443-.448-.854l-1.736-8.708h1.96l1.204 6.958h.028l2.03-6.44h.7a1 1 0 0 1 .602.182c.178.121.313.34.406.658l1.708 5.586h.028l1.204-6.944h1.96l-1.75 8.708c-.074.373-.214.649-.42.826-.196.177-.466.266-.812.266h-.812l-2.086-6.72h-.028L124.92 57zm14.982-2.282h-3.668L134.554 57h-2.016l3.836-9.8h.868c.607 0 1.018.28 1.232.84L141.96 57h-2.016zm-3.15-1.624h2.632l-1.302-3.528h-.014zM144.156 57c-.411 0-.742-.117-.994-.35-.243-.243-.364-.56-.364-.952V47.2h1.932v8.12h5.32V57zm8.23 0c-.411 0-.742-.117-.994-.35-.243-.243-.364-.56-.364-.952V47.2h1.932v8.12h5.32V57zm8.231 0c-.402 0-.728-.121-.98-.364s-.378-.56-.378-.952V47.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V57zm9.841-8.12h-3.108V47.2h8.148v1.68h-3.108V57h-1.932z"
                })), y.createElement("defs", null, i || (i = y.createElement("filter", {
                    id: "glow-connect-wallet_svg__a",
                    width: 145,
                    height: 102.726,
                    x: 0,
                    y: .456,
                    colorInterpolationFilters: "sRGB",
                    filterUnits: "userSpaceOnUse"
                }, y.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), y.createElement("feColorMatrix", { in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }), y.createElement("feOffset", null), y.createElement("feGaussianBlur", {
                    stdDeviation: 15
                }), y.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), y.createElement("feColorMatrix", {
                    values: "0 0 0 0 0.533333 0 0 0 0 0.705882 0 0 0 0 0.960784 0 0 0 1 0"
                }), y.createElement("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_2933_1165"
                }), y.createElement("feBlend", { in: "SourceGraphic",
                    in2: "effect1_dropShadow_2933_1165",
                    result: "shape"
                }))), s || (s = y.createElement("filter", {
                    id: "glow-connect-wallet_svg__b",
                    width: 145,
                    height: 102.726,
                    x: 81,
                    y: .818,
                    colorInterpolationFilters: "sRGB",
                    filterUnits: "userSpaceOnUse"
                }, y.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), y.createElement("feColorMatrix", { in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }), y.createElement("feOffset", null), y.createElement("feGaussianBlur", {
                    stdDeviation: 15
                }), y.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), y.createElement("feColorMatrix", {
                    values: "0 0 0 0 0.533333 0 0 0 0 0.705882 0 0 0 0 0.960784 0 0 0 1 0"
                }), y.createElement("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_2933_1165"
                }), y.createElement("feBlend", { in: "SourceGraphic",
                    in2: "effect1_dropShadow_2933_1165",
                    result: "shape"
                }))), y.createElement("radialGradient", {
                    id: "glow-connect-wallet_svg__d",
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                    fx: "50%",
                    fy: "50%"
                }, y.createElement("stop", {
                    offset: "80%",
                    style: {
                        stopColor: "#000",
                        stopOpacity: 0
                    }
                }), y.createElement("stop", {
                    offset: "100%",
                    style: {
                        stopColor: "#000",
                        stopOpacity: .6
                    }
                })), h || (h = y.createElement("linearGradient", {
                    id: "glow-connect-wallet_svg__c",
                    x1: 30,
                    x2: 196,
                    y1: 52,
                    y2: 52,
                    gradientUnits: "userSpaceOnUse"
                }, y.createElement("stop", {
                    stopColor: "#88B4F5"
                }), y.createElement("stop", {
                    offset: .505,
                    stopColor: "#88B4F5",
                    stopOpacity: 0
                }), y.createElement("stop", {
                    offset: 1,
                    stopColor: "#88B4F5"
                })))), f || (f = y.createElement("rect", {
                    width: "100%",
                    height: "100%",
                    fill: "url(#glow-connect-wallet_svg__d)"
                })))
            };
            let F = e => {
                    let {
                        children: t,
                        className: l,
                        style: a
                    } = e;
                    return (0, b.jsx)("div", {
                        className: (0, A.clsx)("gradient-box rounded-lg border border-[#181f25] backdrop-blur-[4.5px]", l),
                        style: a,
                        children: t
                    })
                },
                I = e => {
                    let {
                        children: t,
                        classes: l,
                        variant: a = "light"
                    } = e;
                    return (0, b.jsx)("div", {
                        className: (0, A.default)(l, "dark" === a ? "bg-black bg-opacity-40 border-[#2E323B] text-neutrals-500" : "warning-box border-[#2a3344] text-white", "flex items-start gap-3 rounded-lg border px-4 py-3 text-xs sm:text-sm backdrop-blur-[4.5px]"),
                        children: t
                    })
                };
            var G = l(34564),
                L = l.n(G);

            function $() {
                return ($ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var q = function(e) {
                return y.createElement("svg", $({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 226,
                    height: 104,
                    fill: "none"
                }, e), m || (m = y.createElement("g", {
                    filter: "url(#go-to-liquifi_svg__a)"
                }, y.createElement("path", {
                    fill: "#000",
                    d: "M48.098 32.093a5 5 0 0 1 4.676-1.54l58.202 11.587A5 5 0 0 1 115 47.044v9.719a5 5 0 0 1-4.247 4.943l-75 11.418A5 5 0 0 1 30 68.181V53.933a5 5 0 0 1 1.3-3.363z"
                }))), u || (u = y.createElement("g", {
                    filter: "url(#go-to-liquifi_svg__b)"
                }, y.createElement("path", {
                    fill: "#000",
                    d: "M196 35.819a5 5 0 0 0-5.753-4.943l-75 11.418A5 5 0 0 0 111 47.239v9.718a5 5 0 0 0 4.024 4.904l58.202 11.588a5 5 0 0 0 4.676-1.54L194.7 53.43c.836-.92 1.3-2.12 1.3-3.363z"
                }))), d || (d = y.createElement("path", {
                    fill: "#000",
                    stroke: "url(#go-to-liquifi_svg__c)",
                    d: "M52.212 29.5a5.5 5.5 0 0 0-4.07 1.8L30.93 50.233a5.5 5.5 0 0 0-1.43 3.7V69a5.5 5.5 0 0 0 5.5 5.5h138.788c1.55 0 3.027-.654 4.07-1.8l17.212-18.933a5.501 5.501 0 0 0 1.43-3.7V35a5.5 5.5 0 0 0-5.5-5.5z"
                })), p || (p = y.createElement("path", {
                    stroke: "#262626",
                    d: "M54.15 33.5a5.5 5.5 0 0 0-3.992 1.717L35.008 51.21a5.5 5.5 0 0 0-1.508 3.782V65a5.5 5.5 0 0 0 5.5 5.5h132.849a5.5 5.5 0 0 0 3.993-1.717l15.151-15.993a5.499 5.499 0 0 0 1.507-3.782V39a5.5 5.5 0 0 0-5.5-5.5z"
                })), g || (g = y.createElement("path", {
                    fill: "#fff",
                    d: "M69.664 57.112c-.72 0-1.354-.154-1.904-.462a3.263 3.263 0 0 1-1.288-1.302c-.3-.57-.448-1.223-.448-1.96v-2.576c0-.737.149-1.386.448-1.946a3.24 3.24 0 0 1 1.288-1.316c.56-.308 1.203-.462 1.931-.462h1.569c.7 0 1.316.14 1.847.42.532.28.943.677 1.233 1.19.298.513.447 1.106.447 1.778h-1.904c0-.504-.149-.91-.447-1.218-.3-.308-.691-.462-1.177-.462h-1.567c-.523 0-.943.196-1.26.588-.318.383-.477.887-.477 1.512v2.408c0 .625.154 1.134.463 1.526.317.383.732.574 1.245.574h1.653c.475 0 .867-.173 1.175-.518.318-.345.477-.775.477-1.288v-.308H70.25v-1.68h4.62v1.988c0 .681-.149 1.288-.447 1.82a3.173 3.173 0 0 1-1.26 1.246c-.542.299-1.158.448-1.849.448zm10.064 0c-.737 0-1.39-.154-1.96-.462a3.429 3.429 0 0 1-1.316-1.316c-.308-.57-.462-1.227-.462-1.974v-2.52c0-.747.154-1.4.462-1.96a3.307 3.307 0 0 1 1.316-1.316c.57-.317 1.223-.476 1.96-.476h1.484c.738 0 1.386.159 1.946.476.57.308 1.008.747 1.316 1.316.318.56.476 1.213.476 1.96v2.52c0 .747-.158 1.405-.476 1.974-.308.56-.746.999-1.316 1.316-.56.308-1.208.462-1.946.462zm1.484-1.708c.542 0 .976-.196 1.302-.588.336-.392.504-.905.504-1.54v-2.352c0-.635-.168-1.148-.504-1.54-.326-.392-.76-.588-1.302-.588h-1.484c-.541 0-.98.196-1.316.588-.326.392-.49.905-.49 1.54v2.352c0 .635.164 1.148.49 1.54.336.392.775.588 1.316.588zm11.63-6.524h-3.108V47.2h8.148v1.68h-3.108V57h-1.932zm9.089 8.232c-.737 0-1.39-.154-1.96-.462a3.428 3.428 0 0 1-1.315-1.316c-.309-.57-.463-1.227-.463-1.974v-2.52c0-.747.154-1.4.463-1.96a3.306 3.306 0 0 1 1.316-1.316c.569-.317 1.222-.476 1.959-.476h1.484c.738 0 1.386.159 1.946.476a3.19 3.19 0 0 1 1.316 1.316c.318.56.476 1.213.476 1.96v2.52c0 .747-.158 1.405-.476 1.974-.308.56-.746.999-1.316 1.316-.56.308-1.208.462-1.946.462zm1.484-1.708c.542 0 .976-.196 1.302-.588.336-.392.504-.905.504-1.54v-2.352c0-.635-.168-1.148-.504-1.54-.326-.392-.76-.588-1.302-.588h-1.484c-.541 0-.98.196-1.316.588-.326.392-.49.905-.49 1.54v2.352c0 .635.164 1.148.49 1.54.336.392.775.588 1.316.588zM113.996 57c-.411 0-.742-.117-.994-.35-.243-.243-.364-.56-.364-.952V47.2h1.932v8.12h5.32V57zm7.012-9.8h1.932V57h-1.932zm11.721 10.486-1.134-1.12a3.388 3.388 0 0 1-1.834.546h-1.484c-.737 0-1.39-.154-1.96-.462a3.433 3.433 0 0 1-1.316-1.316c-.308-.57-.462-1.227-.462-1.974v-2.52c0-.747.154-1.4.462-1.96a3.31 3.31 0 0 1 1.316-1.316c.57-.317 1.223-.476 1.96-.476h1.484c.738 0 1.386.159 1.946.476a3.19 3.19 0 0 1 1.316 1.316c.318.56.476 1.213.476 1.96v2.408c0 .728-.214 1.419-.644 2.072l1.092 1.078zm-2.968-2.282c.178 0 .355-.037.532-.112l-1.274-1.26 1.218-1.288 1.218 1.204c.075-.243.112-.476.112-.7v-2.324c0-.635-.168-1.148-.504-1.54-.326-.392-.76-.588-1.302-.588h-1.484c-.541 0-.98.196-1.316.588-.326.392-.49.905-.49 1.54v2.352c0 .635.164 1.148.49 1.54.336.392.775.588 1.316.588zm8.66 1.708c-.691 0-1.298-.145-1.82-.434a3.125 3.125 0 0 1-1.218-1.246c-.29-.532-.434-1.148-.434-1.848V47.2h1.932v6.328c0 .56.14 1.013.42 1.358.289.345.662.518 1.12.518h1.484a1.41 1.41 0 0 0 1.134-.518c.289-.345.434-.798.434-1.358V47.2h1.932v6.384c0 .7-.145 1.316-.434 1.848-.29.532-.7.947-1.232 1.246-.532.29-1.144.434-1.834.434zm6.8-9.912h1.932V57h-1.932zm3.811 0h7.336v1.68h-5.404v2.632h4.886v1.68h-4.886V57h-1.932zm8.589 0h1.932V57h-1.932z"
                })), y.createElement("defs", null, v || (v = y.createElement("filter", {
                    id: "go-to-liquifi_svg__a",
                    width: 145,
                    height: 102.726,
                    x: 0,
                    y: .456,
                    colorInterpolationFilters: "sRGB",
                    filterUnits: "userSpaceOnUse"
                }, y.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), y.createElement("feColorMatrix", { in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }), y.createElement("feOffset", null), y.createElement("feGaussianBlur", {
                    stdDeviation: 15
                }), y.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), y.createElement("feColorMatrix", {
                    values: "0 0 0 0 0.533333 0 0 0 0 0.705882 0 0 0 0 0.960784 0 0 0 1 0"
                }), y.createElement("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_2933_1165"
                }), y.createElement("feBlend", { in: "SourceGraphic",
                    in2: "effect1_dropShadow_2933_1165",
                    result: "shape"
                }))), x || (x = y.createElement("filter", {
                    id: "go-to-liquifi_svg__b",
                    width: 145,
                    height: 102.726,
                    x: 81,
                    y: .818,
                    colorInterpolationFilters: "sRGB",
                    filterUnits: "userSpaceOnUse"
                }, y.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), y.createElement("feColorMatrix", { in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }), y.createElement("feOffset", null), y.createElement("feGaussianBlur", {
                    stdDeviation: 15
                }), y.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), y.createElement("feColorMatrix", {
                    values: "0 0 0 0 0.533333 0 0 0 0 0.705882 0 0 0 0 0.960784 0 0 0 1 0"
                }), y.createElement("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_2933_1165"
                }), y.createElement("feBlend", { in: "SourceGraphic",
                    in2: "effect1_dropShadow_2933_1165",
                    result: "shape"
                }))), y.createElement("radialGradient", {
                    id: "go-to-liquifi_svg__d",
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                    fx: "50%",
                    fy: "50%"
                }, y.createElement("stop", {
                    offset: "80%",
                    style: {
                        stopColor: "#14161a",
                        stopOpacity: 0
                    }
                }), y.createElement("stop", {
                    offset: "100%",
                    style: {
                        stopColor: "#14161a",
                        stopOpacity: .2
                    }
                })), E || (E = y.createElement("linearGradient", {
                    id: "go-to-liquifi_svg__c",
                    x1: 30,
                    x2: 196,
                    y1: 52,
                    y2: 52,
                    gradientUnits: "userSpaceOnUse"
                }, y.createElement("stop", {
                    stopColor: "#88B4F5"
                }), y.createElement("stop", {
                    offset: .505,
                    stopColor: "#88B4F5",
                    stopOpacity: 0
                }), y.createElement("stop", {
                    offset: 1,
                    stopColor: "#88B4F5"
                })))), _ || (_ = y.createElement("rect", {
                    width: "100%",
                    height: "100%",
                    fill: "url(#go-to-liquifi_svg__d)"
                })))
            };

            function U() {
                return (U = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var P = function(e) {
                return y.createElement("svg", U({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 17 16"
                }, e), w || (w = y.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M8.045 10.667V8m0-2.667h.007m-6.007-.039v5.412c0 .228 0 .342.034.444.03.09.078.173.142.243.073.079.173.134.373.245l4.933 2.74c.189.106.284.158.384.179.088.018.18.018.268 0 .1-.02.195-.073.384-.178l4.933-2.741c.2-.11.3-.166.372-.245a.667.667 0 0 0 .143-.243c.034-.102.034-.216.034-.444V5.294c0-.228 0-.342-.034-.444a.667.667 0 0 0-.143-.243c-.072-.079-.172-.134-.372-.245L8.563 1.62c-.19-.105-.284-.158-.384-.178a.666.666 0 0 0-.268 0c-.1.02-.195.073-.384.178l-4.933 2.74c-.2.112-.3.167-.373.246a.667.667 0 0 0-.142.243c-.034.102-.034.216-.034.444"
                })))
            };
            let T = () => (0, b.jsxs)(F, {
                    className: "mt-12 p-3 sm:p-6 w-full min-h-fit flex flex-col",
                    children: [(0, b.jsxs)("div", {
                        className: "flex flex-col justify-between items-center gap-4 md:gap-6 h-fit flex-wrap",
                        children: ["You are eligible to claim!", (0, b.jsx)(L(), {
                            href: "https://app.liquifi.finance/app/portfolio",
                            className: "-mt-2 -mb-2",
                            target: "_blank",
                            children: (0, b.jsx)(q, {})
                        })]
                    }), (0, b.jsxs)(I, {
                        classes: "mt-4 mb-0 text-sm",
                        variant: "dark",
                        children: [(0, b.jsx)(P, {
                            className: "mt-0.5 w-4 min-w-[16px]"
                        }), (0, b.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, b.jsx)("p", {
                                children: "Claim and check your vesting status with our partner, Liquifi"
                            }), (0, b.jsx)("p", {
                                children: "You must claim before May 2, 2024 or your tokens will be redistributed to the community."
                            })]
                        })]
                    })]
                }),
                D = () => {
                    let {
                        address: e
                    } = (0, M.mA)(), t = function() {
                        let [e, t] = (0, y.useState)(!1);
                        return (0, y.useEffect)(() => {
                            t(!0)
                        }, []), e
                    }(), {
                        data: l,
                        isLoading: a
                    } = (0, C.ZP)(e ? "/api/liquifi?address=" + e : null), r = (0, y.useMemo)(() => {
                        try {
                            var e;
                            if (!(null == l ? void 0 : null === (e = l.data) || void 0 === e ? void 0 : e.totalAmountAwarded)) return !1;
                            return O(l.data.totalAmountAwarded) > 0
                        } catch (e) {
                            return V.Tb(e), !1
                        }
                    }, [l]), n = (0, y.useMemo)(() => t ? e ? a ? "Checking your claim status..." : r ? "As a holder of $ENA, you'll be able to make key decisions that shape the future of Ethena." : "Sorry, you are not eligible to claim Ethena governance tokens. This address does not meet one or more of the requirements that must have been met before April 1, 2024." : "Connect your wallet to claim Ethena governance tokens" : "Loading...", [e, r, t, a]);
                    return (0, b.jsxs)("div", {
                        className: (0, A.default)(r ? "sm:mt-30" : "sm:mt-[calc(max(20vh,100px))]", "max-w-[90vw] sm:max-w-[min(700px,75vw)] mt-32 w-fit min-h-fit animate-in slide-in-from-bottom-8 duration-700 -translate-y-24 flex flex-col items-center justify-center pb-20"),
                        children: [(0, b.jsx)(j(), {
                            src: "/ena.png",
                            alt: "ENA",
                            width: 644,
                            height: 502,
                            className: (0, A.default)(r ? "mb-1" : "mb-5", "max-w-[240px]"),
                            priority: !0
                        }), (0, b.jsx)("h1", {
                            className: "text-3xl scale-125 flex items-center md:text-[3rem] leading-tight md:leading-[4.5rem] font-semibold break-words",
                            children: "CLAIM ENA"
                        }), (0, b.jsx)("h3", {
                            className: (0, A.default)("text-neutrals-400 text-center text-sm md:text-lg font-light whitespace-pre-wrap md:mx-20", r ? "mt-1" : "mt-3"),
                            children: n
                        }), t && !e && (0, b.jsx)("div", {
                            className: "w-fit",
                            children: (0, b.jsx)(B.P, {
                                connectButton: (0, b.jsx)(N, {})
                            })
                        }), r && (0, b.jsx)(T, {})]
                    })
                };

            function H() {
                return (0, b.jsx)(D, {})
            }
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], function() {
            return e(e.s = 65186)
        }), _N_E = e.O()
    }
]);