(function (e) {
    function t(t) {
        for (var n, i, c = t[0], u = t[1], s = t[2], f = 0, d = []; f < c.length; f++) i = c[f], Object.prototype.hasOwnProperty.call(o, i) && o[i] && d.push(o[i][0]), o[i] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        l && l(t);
        while (d.length) d.shift()();
        return a.push.apply(a, s || []), r()
    }

    function r() {
        for (var e, t = 0; t < a.length; t++) {
            for (var r = a[t], n = !0, c = 1; c < r.length; c++) {
                var u = r[c];
                0 !== o[u] && (n = !1)
            }
            n && (a.splice(t--, 1), e = i(i.s = r[0]))
        }
        return e
    }
    var n = {},
        o = {
            app: 0
        },
        a = [];

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = n, i.d = function (e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(r, n, function (t) {
                return e[t]
            }.bind(null, n));
        return r
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var s = 0; s < c.length; s++) t(c[s]);
    var l = u;
    a.push([0, "chunk-vendors"]), r()
})({
    0: function (e, t, r) {
        e.exports = r("56d7")
    },
    "16bb": function (e, t, r) {},
    "16eb": function (e, t, r) {
        "use strict";
        r("5ebc")
    },
    "1e96": function (e, t, r) {
        "use strict";
        r("16bb")
    },
    "1f24": function (e, t, r) {},
    3230: function (e, t, r) {
        "use strict";
        r("1f24")
    },
    "56d7": function (e, t, r) {
        "use strict";
        r.r(t);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var n = r("7a23"),
            o = r("3fd4"),
            a = (r("7dd6"), {
                id: "app"
            });

        function i(e, t, r, o, i, c) {
            var u = Object(n["M"])("UE4iframe"),
                s = Object(n["M"])("Nav"),
                l = Object(n["M"])("WGSConvertForm");
            return Object(n["D"])(), Object(n["i"])("div", a, [Object(n["m"])(u, {
                class: "ue4iframe",
                msg: ""
            }), Object(n["m"])(s), Object(n["m"])(l)])
        }
        var c = Object(n["eb"])("data-v-29037021");
        Object(n["G"])("data-v-29037021");
        var u = {
            id: "app"
        };
        Object(n["E"])();
        var s = c((function (e, t, r, o, a, i) {
                return Object(n["D"])(), Object(n["i"])("div", u, [Object(n["m"])("iframe", {
                    id: "uePage",
                    src: a.form.iframeSrc
                }, null, 8, ["src"])])
            })),
            l = (r("c975"), {
                iframeSrc: "http://localhost/",
                engineOrigin: {
                    x: 121.229818,
                    y: 38.807531
                },
                BASE_URL: function () {
                    var e = window.document.location.href,
                        t = window.document.location.pathname,
                        r = e.indexOf(t),
                        n = e.substring(0, r),
                        o = t.substring(0, t.substr(1).indexOf("/") + 1);
                    return n + o
                }
            }),
            f = l,
            d = {
                name: "UE4iframe",
                data: function () {
                    return {
                        form: {
                            iframeSrc: f.iframeSrc
                        }
                    }
                }
            };
        r("3230");
        d.render = s, d.__scopeId = "data-v-29037021";
        var h = d,
            m = Object(n["eb"])("data-v-0cfac7e4");
        Object(n["G"])("data-v-0cfac7e4");
        var b = {
                id: "appNav"
            },
            w = Object(n["l"])(" 镜头操控 "),
            p = Object(n["l"])("获取当前镜头信息"),
            O = Object(n["l"])("定点巡查"),
            v = Object(n["l"])("镜头切换"),
            y = Object(n["l"])("镜头围绕观察"),
            _ = Object(n["l"])("镜头点位聚焦"),
            S = Object(n["l"])(" 特殊效果 "),
            x = Object(n["l"])("天气特效 "),
            g = Object(n["l"])("时间特效"),
            j = Object(n["l"])("水晶体特效"),
            E = Object(n["l"])("热力图特效"),
            M = Object(n["l"])(" POI点操控 "),
            T = Object(n["l"])("添加文字json批量 "),
            P = Object(n["l"])("添加POI点json批量"),
            I = Object(n["l"])("点聚合"),
            R = Object(n["l"])("滨海poi点测试"),
            q = Object(n["l"])(" 线路操控 "),
            C = Object(n["l"])("绘制路径 "),
            z = Object(n["l"])(" 量测功能 "),
            k = Object(n["l"])("高度量测"),
            N = Object(n["l"])("折线距离量测"),
            L = Object(n["l"])("平面面积量测"),
            V = Object(n["l"])("获取坐标"),
            A = Object(n["l"])(" 组件控件 "),
            F = Object(n["l"])("柱状统计"),
            D = Object(n["l"])("创建迁徙图"),
            W = Object(n["l"])(" 新增测试 "),
            G = Object(n["l"])("添加路径"),
            B = Object(n["l"])("设置时间"),
            U = Object(n["l"])("设置天气"),
            J = Object(n["l"])("热力图"),
            H = Object(n["l"])("热力图更新"),
            Z = Object(n["l"])("创建迁徙图"),
            X = Object(n["l"])("绘制围栏效果"),
            K = Object(n["l"])("场景特效点"),
            Y = Object(n["l"])("时间初始化"),
            Q = Object(n["l"])("天气初始化"),
            $ = Object(n["l"])(" 场景切换 "),
            ee = Object(n["l"])("实景区域镜头"),
            te = Object(n["l"])("全国行政区域镜头"),
            re = Object(n["l"])("经济圈区域镜头"),
            ne = Object(n["l"])("朝阳行政区划区域镜头"),
            oe = Object(n["l"])("规划数据区域镜头"),
            ae = Object(n["l"])(" 场景切换 "),
            ie = Object(n["l"])("夜景"),
            ce = Object(n["l"])("雨雪"),
            ue = Object(n["l"])("行政区"),
            se = Object(n["l"])("大局部");
        Object(n["E"])();
        var le = m((function (e, t, r, o, a, i) {
            var c = Object(n["M"])("el-menu-item"),
                u = Object(n["M"])("el-submenu"),
                s = Object(n["M"])("el-menu");
            return Object(n["D"])(), Object(n["i"])("div", b, [Object(n["m"])(s, {
                "default-active": a.activeIndex,
                class: "el-menu-demo",
                mode: "horizontal",
                onSelect: i.handleSelect,
                "background-color": "#545c64",
                "text-color": "#fff",
                "active-text-color": "#ffd04b"
            }, {
                default: m((function () {
                    return [Object(n["m"])(u, {
                        index: "1"
                    }, {
                        title: m((function () {
                            return [w]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "1-1"
                            }, {
                                default: m((function () {
                                    return [p]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "1-2"
                            }, {
                                default: m((function () {
                                    return [O]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "1-3"
                            }, {
                                default: m((function () {
                                    return [v]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "1-4"
                            }, {
                                default: m((function () {
                                    return [y]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "1-5"
                            }, {
                                default: m((function () {
                                    return [_]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(n["m"])(u, {
                        index: "2"
                    }, {
                        title: m((function () {
                            return [S]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "2-1"
                            }, {
                                default: m((function () {
                                    return [x]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "2-2"
                            }, {
                                default: m((function () {
                                    return [g]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "2-3"
                            }, {
                                default: m((function () {
                                    return [j]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "2-4"
                            }, {
                                default: m((function () {
                                    return [E]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(n["m"])(u, {
                        index: "3"
                    }, {
                        title: m((function () {
                            return [M]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "3-1"
                            }, {
                                default: m((function () {
                                    return [T]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "3-2"
                            }, {
                                default: m((function () {
                                    return [P]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "3-3"
                            }, {
                                default: m((function () {
                                    return [I]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "3-4"
                            }, {
                                default: m((function () {
                                    return [R]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(n["m"])(u, {
                        index: "4"
                    }, {
                        title: m((function () {
                            return [q]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "4-1"
                            }, {
                                default: m((function () {
                                    return [C]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(n["m"])(u, {
                        index: "5"
                    }, {
                        title: m((function () {
                            return [z]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "5-1"
                            }, {
                                default: m((function () {
                                    return [k]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "5-2"
                            }, {
                                default: m((function () {
                                    return [N]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "5-3"
                            }, {
                                default: m((function () {
                                    return [L]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "5-4"
                            }, {
                                default: m((function () {
                                    return [V]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(n["m"])(u, {
                        index: "6"
                    }, {
                        title: m((function () {
                            return [A]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "6-1"
                            }, {
                                default: m((function () {
                                    return [F]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "6-2"
                            }, {
                                default: m((function () {
                                    return [D]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(n["m"])(u, {
                        index: "7"
                    }, {
                        title: m((function () {
                            return [W]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "7-1"
                            }, {
                                default: m((function () {
                                    return [G]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-2"
                            }, {
                                default: m((function () {
                                    return [B]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-3"
                            }, {
                                default: m((function () {
                                    return [U]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-4"
                            }, {
                                default: m((function () {
                                    return [J]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-5"
                            }, {
                                default: m((function () {
                                    return [H]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-6"
                            }, {
                                default: m((function () {
                                    return [Z]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-7"
                            }, {
                                default: m((function () {
                                    return [X]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-8"
                            }, {
                                default: m((function () {
                                    return [K]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-9"
                            }, {
                                default: m((function () {
                                    return [Y]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "7-10"
                            }, {
                                default: m((function () {
                                    return [Q]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(n["m"])(u, {
                        index: "8"
                    }, {
                        title: m((function () {
                            return [$]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "8-1"
                            }, {
                                default: m((function () {
                                    return [ee]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "8-2"
                            }, {
                                default: m((function () {
                                    return [te]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "8-3"
                            }, {
                                default: m((function () {
                                    return [re]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "8-4"
                            }, {
                                default: m((function () {
                                    return [ne]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "8-5"
                            }, {
                                default: m((function () {
                                    return [oe]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(n["m"])(u, {
                        index: "9"
                    }, {
                        title: m((function () {
                            return [ae]
                        })),
                        default: m((function () {
                            return [Object(n["m"])(c, {
                                index: "9-1"
                            }, {
                                default: m((function () {
                                    return [ie]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "9-2"
                            }, {
                                default: m((function () {
                                    return [ce]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "9-3"
                            }, {
                                default: m((function () {
                                    return [ue]
                                })),
                                _: 1
                            }), Object(n["m"])(c, {
                                index: "9-4"
                            }, {
                                default: m((function () {
                                    return [se]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    })]
                })),
                _: 1
            }, 8, ["default-active", "onSelect"])])
        }));
        r("d3b7"), r("25f0"), r("dca8");

        function fe(e, t) {
            return void 0 !== e && null !== e ? e : t
        }
        fe.EMPTY_OBJECT = Object.freeze({});
        var de = fe,
            he = (r("3ea3"), r("ff9c"), r("90d7"), r("2af1"), r("0261"), r("53ca"));

        function me(e) {
            return void 0 !== e && null !== e
        }
        var be = me;
        r("b0c0");

        function we(e) {
            var t;
            this.name = "DeveloperError", this.message = e;
            try {
                throw new Error
            } catch (r) {
                t = r.stack
            }
            this.stack = t
        }
        be(Object.create) && (we.prototype = Object.create(Error.prototype), we.prototype.constructor = we), we.prototype.toString = function () {
            var e = this.name + ": " + this.message;
            return be(this.stack) && (e += "\n" + this.stack.toString()), e
        }, we.throwInstantiationError = function () {
            throw new we("This function defines an interface and should not be called directly.")
        };
        var pe = we,
            Oe = {};

        function ve(e) {
            return e + " is required, actual value was undefined"
        }

        function ye(e, t, r) {
            return "Expected " + r + " to be typeof " + t + ", actual typeof was " + e
        }
        Oe.typeOf = {}, Oe.defined = function (e, t) {
            if (!be(t)) throw new pe(ve(e))
        }, Oe.typeOf.func = function (e, t) {
            if ("function" !== typeof t) throw new pe(ye(Object(he["a"])(t), "function", e))
        }, Oe.typeOf.string = function (e, t) {
            if ("string" !== typeof t) throw new pe(ye(Object(he["a"])(t), "string", e))
        }, Oe.typeOf.number = function (e, t) {
            if ("number" !== typeof t) throw new pe(ye(Object(he["a"])(t), "number", e))
        }, Oe.typeOf.number.lessThan = function (e, t, r) {
            if (Oe.typeOf.number(e, t), t >= r) throw new pe("Expected " + e + " to be less than " + r + ", actual value was " + t)
        }, Oe.typeOf.number.lessThanOrEquals = function (e, t, r) {
            if (Oe.typeOf.number(e, t), t > r) throw new pe("Expected " + e + " to be less than or equal to " + r + ", actual value was " + t)
        }, Oe.typeOf.number.greaterThan = function (e, t, r) {
            if (Oe.typeOf.number(e, t), t <= r) throw new pe("Expected " + e + " to be greater than " + r + ", actual value was " + t)
        }, Oe.typeOf.number.greaterThanOrEquals = function (e, t, r) {
            if (Oe.typeOf.number(e, t), t < r) throw new pe("Expected " + e + " to be greater than or equal to" + r + ", actual value was " + t)
        }, Oe.typeOf.object = function (e, t) {
            if ("object" !== Object(he["a"])(t)) throw new pe(ye(Object(he["a"])(t), "object", e))
        }, Oe.typeOf.bool = function (e, t) {
            if ("boolean" !== typeof t) throw new pe(ye(Object(he["a"])(t), "boolean", e))
        }, Oe.typeOf.number.equals = function (e, t, r, n) {
            if (Oe.typeOf.number(e, r), Oe.typeOf.number(t, n), r !== n) throw new pe(e + " must be equal to " + t + ", the actual values are " + r + " and " + n)
        };
        var _e = Oe,
            Se = {
                EPSILON1: .1,
                EPSILON2: .01,
                EPSILON3: .001,
                EPSILON4: 1e-4,
                EPSILON5: 1e-5,
                EPSILON6: 1e-6,
                EPSILON7: 1e-7,
                EPSILON8: 1e-8,
                EPSILON9: 1e-9,
                EPSILON10: 1e-10,
                EPSILON11: 1e-11,
                EPSILON12: 1e-12,
                EPSILON13: 1e-13,
                EPSILON14: 1e-14,
                EPSILON15: 1e-15,
                EPSILON16: 1e-16,
                EPSILON17: 1e-17,
                EPSILON18: 1e-18,
                EPSILON19: 1e-19,
                EPSILON20: 1e-20,
                EPSILON21: 1e-21,
                GRAVITATIONALPARAMETER: 3986004418e5,
                SOLAR_RADIUS: 6955e5,
                LUNAR_RADIUS: 1737400,
                SIXTY_FOUR_KILOBYTES: 65536,
                FOUR_GIGABYTES: 4294967296
            };
        Se.sign = de(Math.sign, (function (e) {
            return e = +e, 0 === e || e !== e ? e : e > 0 ? 1 : -1
        })), Se.signNotZero = function (e) {
            return e < 0 ? -1 : 1
        }, Se.toSNorm = function (e, t) {
            return t = de(t, 255), Math.round((.5 * Se.clamp(e, -1, 1) + .5) * t)
        }, Se.fromSNorm = function (e, t) {
            return t = de(t, 255), Se.clamp(e, 0, t) / t * 2 - 1
        }, Se.normalize = function (e, t, r) {
            return r = Math.max(r - t, 0), 0 === r ? 0 : Se.clamp((e - t) / r, 0, 1)
        }, Se.sinh = de(Math.sinh, (function (e) {
            return (Math.exp(e) - Math.exp(-e)) / 2
        })), Se.cosh = de(Math.cosh, (function (e) {
            return (Math.exp(e) + Math.exp(-e)) / 2
        })), Se.lerp = function (e, t, r) {
            return (1 - r) * e + r * t
        }, Se.PI = Math.PI, Se.ONE_OVER_PI = 1 / Math.PI, Se.PI_OVER_TWO = Math.PI / 2, Se.PI_OVER_THREE = Math.PI / 3, Se.PI_OVER_FOUR = Math.PI / 4, Se.PI_OVER_SIX = Math.PI / 6, Se.THREE_PI_OVER_TWO = 3 * Math.PI / 2, Se.TWO_PI = 2 * Math.PI, Se.ONE_OVER_TWO_PI = 1 / (2 * Math.PI), Se.RADIANS_PER_DEGREE = Math.PI / 180, Se.DEGREES_PER_RADIAN = 180 / Math.PI, Se.RADIANS_PER_ARCSECOND = Se.RADIANS_PER_DEGREE / 3600, Se.toRadians = function (e) {
            if (!be(e)) throw new Error("degrees is required.");
            return e * Se.RADIANS_PER_DEGREE
        }, Se.toDegrees = function (e) {
            if (!be(e)) throw new Error("radians is required.");
            return e * Se.DEGREES_PER_RADIAN
        }, Se.convertLongitudeRange = function (e) {
            if (!be(e)) throw new Error("angle is required.");
            var t = Se.TWO_PI,
                r = e - Math.floor(e / t) * t;
            return r < -Math.PI ? r + t : r >= Math.PI ? r - t : r
        }, Se.clampToLatitudeRange = function (e) {
            if (!be(e)) throw new Error("angle is required.");
            return Se.clamp(e, -1 * Se.PI_OVER_TWO, Se.PI_OVER_TWO)
        }, Se.negativePiToPi = function (e) {
            if (!be(e)) throw new Error("angle is required.");
            return Se.zeroToTwoPi(e + Se.PI) - Se.PI
        }, Se.zeroToTwoPi = function (e) {
            if (!be(e)) throw new Error("angle is required.");
            var t = Se.mod(e, Se.TWO_PI);
            return Math.abs(t) < Se.EPSILON14 && Math.abs(e) > Se.EPSILON14 ? Se.TWO_PI : t
        }, Se.mod = function (e, t) {
            if (!be(e)) throw new Error("m is required.");
            if (!be(t)) throw new Error("n is required.");
            return (e % t + t) % t
        }, Se.equalsEpsilon = function (e, t, r, n) {
            if (!be(e)) throw new Error("left is required.");
            if (!be(t)) throw new Error("right is required.");
            if (!be(r)) throw new Error("relativeEpsilon is required.");
            n = de(n, r);
            var o = Math.abs(e - t);
            return o <= n || o <= r * Math.max(Math.abs(e), Math.abs(t))
        }, Se.lessThan = function (e, t, r) {
            if (!be(e)) throw new Error("first is required.");
            if (!be(t)) throw new Error("second is required.");
            if (!be(r)) throw new Error("relativeEpsilon is required.");
            return e - t < -r
        }, Se.lessThanOrEquals = function (e, t, r) {
            if (!be(e)) throw new Error("first is required.");
            if (!be(t)) throw new Error("second is required.");
            if (!be(r)) throw new Error("relativeEpsilon is required.");
            return e - t < r
        }, Se.greaterThan = function (e, t, r) {
            if (!be(e)) throw new Error("first is required.");
            if (!be(t)) throw new Error("second is required.");
            if (!be(r)) throw new Error("relativeEpsilon is required.");
            return e - t > r
        }, Se.greaterThanOrEquals = function (e, t, r) {
            if (!be(e)) throw new Error("first is required.");
            if (!be(t)) throw new Error("second is required.");
            if (!be(r)) throw new Error("relativeEpsilon is required.");
            return e - t > -r
        };
        var xe = [1];
        Se.factorial = function (e) {
            if ("number" !== typeof e || e < 0) throw new Error("A number greater than or equal to 0 is required.");
            var t = xe.length;
            if (e >= t)
                for (var r = xe[t - 1], n = t; n <= e; n++) {
                    var o = r * n;
                    xe.push(o), r = o
                }
            return xe[e]
        }, Se.incrementWrap = function (e, t, r) {
            if (r = de(r, 0), !be(e)) throw new Error("n is required.");
            if (t <= r) throw new Error("maximumValue must be greater than minimumValue.");
            return ++e, e > t && (e = r), e
        }, Se.isPowerOfTwo = function (e) {
            if ("number" !== typeof e || e < 0) throw new Error("A number greater than or equal to 0 is required.");
            return 0 !== e && 0 === (e & e - 1)
        }, Se.nextPowerOfTwo = function (e) {
            if ("number" !== typeof e || e < 0) throw new Error("A number greater than or equal to 0 is required.");
            return --e, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, ++e, e
        }, Se.clamp = function (e, t, r) {
            if (!be(e)) throw new Error("value is required");
            if (!be(t)) throw new Error("min is required.");
            if (!be(r)) throw new Error("max is required.");
            return e < t ? t : e > r ? r : e
        }, Se.acosClamped = function (e) {
            if (!be(e)) throw new Error("value is required.");
            return Math.acos(Se.clamp(e, -1, 1))
        }, Se.asinClamped = function (e) {
            if (!be(e)) throw new Error("value is required.");
            return Math.asin(Se.clamp(e, -1, 1))
        }, Se.chordLength = function (e, t) {
            if (!be(e)) throw new Error("angle is required.");
            if (!be(t)) throw new Error("radius is required.");
            return 2 * t * Math.sin(.5 * e)
        }, Se.logBase = function (e, t) {
            if (!be(e)) throw new Error("number is required.");
            if (!be(t)) throw new Error("base is required.");
            return Math.log(e) / Math.log(t)
        }, Se.cbrt = de(Math.cbrt, (function (e) {
            var t = Math.pow(Math.abs(e), 1 / 3);
            return e < 0 ? -t : t
        })), Se.log2 = de(Math.log2, (function (e) {
            return Math.log(e) * Math.LOG2E
        })), Se.fog = function (e, t) {
            var r = e * t;
            return 1 - Math.exp(-r * r)
        }, Se.fastApproximateAtan = function (e) {
            return _e.typeOf.number("x", e), e * (-.1784 * Math.abs(e) - .0663 * e * e + 1.0301)
        }, Se.fastApproximateAtan2 = function (e, t) {
            var r, n;
            _e.typeOf.number("x", e), _e.typeOf.number("y", t);
            var o = Math.abs(e);
            r = Math.abs(t), n = Math.max(o, r), r = Math.min(o, r);
            var a = r / n;
            if (isNaN(a)) throw new Error("either x or y must be nonzero");
            return o = Se.fastApproximateAtan(a), o = Math.abs(t) > Math.abs(e) ? Se.PI_OVER_TWO - o : o, o = e < 0 ? Se.PI - o : o, o = t < 0 ? -o : o, o
        };
        var ge = Se;

        function je() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = e, this.y = t, this.z = r
        }

        function Ee(e) {
            return e / 180 * Math.PI
        }
        je.unpack = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 ? arguments[2] : void 0;
            return r.x = e[t++], r.y = e[t++], r.z = e[t], r
        }, je.pack = function (e, t, r) {
            return r = de(r, 0), t[r++] = e.x, t[r++] = e.y, t[r] = e.z, t
        }, je.packedLength = 3, je.fromDegrees = function (e, t, r, n) {
            return e = Ee(e), t = Ee(t), je.fromRadians(e, t, r, n)
        };
        var Me = new je,
            Te = new je,
            Pe = new je(40680631590769, 40680631590769, 40408299984661.445);
        je.fromRadians = function (e, t, r, n) {
            var o = Pe,
                a = Math.cos(t);
            Me.x = a * Math.cos(e), Me.y = a * Math.sin(e), Me.z = Math.sin(t), Me = je.normalize(Me, Me), je.multiplyComponents(o, Me, Te);
            var i = Math.sqrt(je.dot(Me, Te));
            return Te = je.divideByScalar(Te, i, Te), Me = je.multiplyByScalar(Me, r, Me), n = new je, je.add(Te, Me, n)
        }, je.normalize = function (e, t) {
            var r = je.magnitude(e);
            if (t.x = e.x / r, t.y = e.y / r, t.z = e.z / r, isNaN(t.x) || isNaN(t.y) || isNaN(t.z)) throw new Error("normalized result is not a number");
            return t
        }, je.magnitude = function (e) {
            return Math.sqrt(je.magnitudeSquared(e))
        }, je.magnitudeSquared = function (e) {
            return e.x * e.x + e.y * e.y + e.z * e.z
        }, je.multiplyComponents = function (e, t, r) {
            return r.x = e.x * t.x, r.y = e.y * t.y, r.z = e.z * t.z, r
        }, je.dot = function (e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z
        }, je.divideByScalar = function (e, t, r) {
            return r.x = e.x / t, r.y = e.y / t, r.z = e.z / t, r
        }, je.multiplyByScalar = function (e, t, r) {
            return r.x = e.x * t, r.y = e.y * t, r.z = e.z * t, r
        }, je.add = function (e, t, r) {
            return r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z, r
        }, je.cross = function (e, t, r) {
            var n = e.x,
                o = e.y,
                a = e.z,
                i = t.x,
                c = t.y,
                u = t.z,
                s = o * u - a * c,
                l = a * i - n * u,
                f = n * c - o * i;
            return r.x = s, r.y = l, r.z = f, r
        }, je.clone = function (e, t) {
            return t.x = e.x, t.y = e.y, t.z = e.z, t
        }, je.equalsEpsilon = function (e, t, r, n) {
            return e === t || be(e) && be(t) && ge.equalsEpsilon(e.x, t.x, r, n) && ge.equalsEpsilon(e.y, t.y, r, n) && ge.equalsEpsilon(e.z, t.z, r, n)
        }, je.ZERO = Object.freeze(new je(0, 0, 0));
        var Ie = je;

        function Re(e, t, r, n, o, a, i, c, u, s, l, f, d, h, m, b) {
            this[0] = de(e, 0), this[1] = de(o, 0), this[2] = de(u, 0), this[3] = de(d, 0), this[4] = de(t, 0), this[5] = de(a, 0), this[6] = de(s, 0), this[7] = de(h, 0), this[8] = de(r, 0), this[9] = de(i, 0), this[10] = de(l, 0), this[11] = de(m, 0), this[12] = de(n, 0), this[13] = de(c, 0), this[14] = de(f, 0), this[15] = de(b, 0)
        }
        Re.inverseTransformation = function (e, t) {
            _e.typeOf.object("matrix", e), _e.typeOf.object("result", t);
            var r = e[0],
                n = e[1],
                o = e[2],
                a = e[4],
                i = e[5],
                c = e[6],
                u = e[8],
                s = e[9],
                l = e[10],
                f = e[12],
                d = e[13],
                h = e[14],
                m = -r * f - n * d - o * h,
                b = -a * f - i * d - c * h,
                w = -u * f - s * d - l * h;
            return t[0] = r, t[1] = a, t[2] = u, t[3] = 0, t[4] = n, t[5] = i, t[6] = s, t[7] = 0, t[8] = o, t[9] = c, t[10] = l, t[11] = 0, t[12] = m, t[13] = b, t[14] = w, t[15] = 1, t
        }, Re.multiplyByPoint = function (e, t, r) {
            _e.typeOf.object("matrix", e), _e.typeOf.object("cartesian", t), _e.typeOf.object("result", r);
            var n = t.x,
                o = t.y,
                a = t.z,
                i = e[0] * n + e[4] * o + e[8] * a + e[12],
                c = e[1] * n + e[5] * o + e[9] * a + e[13],
                u = e[2] * n + e[6] * o + e[10] * a + e[14];
            return r.x = i, r.y = c, r.z = u, r
        };
        var qe = Re;

        function Ce(e, t, r, n) {
            t = de(t, 0), r = de(r, 0), n = de(n, 0), e._radii = new Ie(t, r, n), e._radiiSquared = new Ie(t * t, r * r, n * n), e._radiiToTheFourth = new Ie(t * t * t * t, r * r * r * r, n * n * n * n), e._oneOverRadii = new Ie(0 === t ? 0 : 1 / t, 0 === r ? 0 : 1 / r, 0 === n ? 0 : 1 / n), e._oneOverRadiiSquared = new Ie(0 === t ? 0 : 1 / (t * t), 0 === r ? 0 : 1 / (r * r), 0 === n ? 0 : 1 / (n * n)), e._minimumRadius = Math.min(t, r, n), e._maximumRadius = Math.max(t, r, n), e._centerToleranceSquared = ge.EPSILON1, 0 !== e._radiiSquared.z && (e._squaredXOverSquaredZ = e._radiiSquared.x / e._radiiSquared.z)
        }

        function ze(e, t, r) {
            this._radii = void 0, this._radiiSquared = void 0, this._radiiToTheFourth = void 0, this._oneOverRadii = void 0, this._oneOverRadiiSquared = void 0, this._minimumRadius = void 0, this._maximumRadius = void 0, this._centerToleranceSquared = void 0, this._squaredXOverSquaredZ = void 0, Ce(this, e, t, r)
        }
        Object.defineProperties(ze.prototype, {
            radii: {
                get: function () {
                    return this._radii
                }
            },
            radiiSquared: {
                get: function () {
                    return this._radiiSquared
                }
            },
            radiiToTheFourth: {
                get: function () {
                    return this._radiiToTheFourth
                }
            },
            oneOverRadii: {
                get: function () {
                    return this._oneOverRadii
                }
            },
            oneOverRadiiSquared: {
                get: function () {
                    return this._oneOverRadiiSquared
                }
            },
            minimumRadius: {
                get: function () {
                    return this._minimumRadius
                }
            },
            maximumRadius: {
                get: function () {
                    return this._maximumRadius
                }
            }
        }), ze.clone = function (e, t) {
            if (be(e)) {
                var r = e._radii;
                return be(t) ? (Ie.clone(r, t._radii), Ie.clone(e._radiiSquared, t._radiiSquared), Ie.clone(e._radiiToTheFourth, t._radiiToTheFourth), Ie.clone(e._oneOverRadii, t._oneOverRadii), Ie.clone(e._oneOverRadiiSquared, t._oneOverRadiiSquared), t._minimumRadius = e._minimumRadius, t._maximumRadius = e._maximumRadius, t._centerToleranceSquared = e._centerToleranceSquared, t) : new ze(r.x, r.y, r.z)
            }
        }, ze.fromCartesian3 = function (e, t) {
            return be(t) || (t = new ze), be(e) ? (Ce(t, e.x, e.y, e.z), t) : t
        }, ze.WGS84 = Object.freeze(new ze(6378137, 6378137, 6356752.314245179)), ze.UNIT_SPHERE = Object.freeze(new ze(1, 1, 1)), ze.MOON = Object.freeze(new ze(ge.LUNAR_RADIUS, ge.LUNAR_RADIUS, ge.LUNAR_RADIUS)), ze.prototype.clone = function (e) {
            return ze.clone(this, e)
        }, ze.packedLength = Ie.packedLength, ze.pack = function (e, t, r) {
            return r = de(r, 0), Ie.pack(e._radii, t, r), t
        }, ze.unpack = function (e, t, r) {
            t = de(t, 0);
            var n = Ie.unpack(e, t);
            return ze.fromCartesian3(n, r)
        }, ze.prototype.geocentricSurfaceNormal = Ie.normalize, ze.prototype.geodeticSurfaceNormalCartographic = function (e, t) {
            var r = e.longitude,
                n = e.latitude,
                o = Math.cos(n),
                a = o * Math.cos(r),
                i = o * Math.sin(r),
                c = Math.sin(n);
            return t.x = a, t.y = i, t.z = c, Ie.normalize(t, t)
        }, ze.prototype.geodeticSurfaceNormal = function (e, t) {
            return be(t) || (t = new Ie), t = Ie.multiplyComponents(e, this._oneOverRadiiSquared, t), Ie.normalize(t, t)
        };
        var ke = new Ie,
            Ne = new Ie;
        ze.prototype.cartographicToCartesian = function (e, t) {
            var r = ke,
                n = Ne;
            this.geodeticSurfaceNormalCartographic(e, r), Ie.multiplyComponents(this._radiiSquared, r, n);
            var o = Math.sqrt(Ie.dot(r, n));
            return Ie.divideByScalar(n, o, n), Ie.multiplyByScalar(r, e.height, r), be(t) || (t = new Ie), Ie.add(n, r, t)
        }, ze.prototype.cartographicArrayToCartesianArray = function (e, t) {
            var r = e.length;
            void 0 === t || null === t ? t = new Array(r) : t.length = r;
            for (var n = 0; n < r; n++) t[n] = this.cartographicToCartesian(e[n], t[n]);
            return t
        };
        var Le = new Ie,
            Ve = new Ie,
            Ae = new Ie;
        ze.prototype.cartesianToCartographic = function (e, t) {
            var r = this.scaleToGeodeticSurface(e, Ve);
            if (void 0 !== r && null !== r) {
                var n = this.geodeticSurfaceNormal(r, Le),
                    o = Ie.subtract(e, r, Ae),
                    a = Math.atan2(n.y, n.x),
                    i = Math.asin(n.z),
                    c = ge.sign(Ie.dot(o, e)) * Ie.magnitude(o);
                return be(t) ? (t.longitude = a, t.latitude = i, t.height = c, t) : new Cartographic(a, i, c)
            }
        }, ze.prototype.cartesianArrayToCartographicArray = function (e, t) {
            var r = e.length;
            be(t) ? t.length = r : t = new Array(r);
            for (var n = 0; n < r; ++n) t[n] = this.cartesianToCartographic(e[n], t[n]);
            return t
        }, ze.prototype.scaleToGeodeticSurface = function (e, t) {
            return scaleToGeodeticSurface(e, this._oneOverRadii, this._oneOverRadiiSquared, this._centerToleranceSquared, t)
        }, ze.prototype.scaleToGeocentricSurface = function (e, t) {
            be(t) || (t = new Ie);
            var r = e.x,
                n = e.y,
                o = e.z,
                a = this._oneOverRadiiSquared,
                i = 1 / Math.sqrt(r * r * a.x + n * n * a.y + o * o * a.z);
            return Ie.multiplyByScalar(e, i, t)
        }, ze.prototype.transformPositionToScaledSpace = function (e, t) {
            return be(t) || (t = new Ie), Ie.multiplyComponents(e, this._oneOverRadii, t)
        }, ze.prototype.transformPositionFromScaledSpace = function (e, t) {
            return be(t) || (t = new Ie), Ie.multiplyComponents(e, this._radii, t)
        }, ze.prototype.equals = function (e) {
            return this === e || be(e) && Ie.equals(this._radii, e._radii)
        }, ze.prototype.toString = function () {
            return this._radii.toString()
        }, ze.prototype.getSurfaceNormalIntersectionWithZAxis = function (e, t, r) {
            t = de(t, 0);
            var n = this._squaredXOverSquaredZ;
            if (be(r) || (r = new Ie), r.x = 0, r.y = 0, r.z = e.z * (1 - n), !(Math.abs(r.z) >= this._radii.z - t)) return r
        };
        var Fe = ze,
            De = {},
            We = {
                up: {
                    south: "east",
                    north: "west",
                    west: "south",
                    east: "north"
                },
                down: {
                    south: "west",
                    north: "east",
                    west: "north",
                    east: "south"
                },
                south: {
                    up: "west",
                    down: "east",
                    west: "down",
                    east: "up"
                },
                north: {
                    up: "east",
                    down: "west",
                    west: "up",
                    east: "down"
                },
                west: {
                    up: "north",
                    down: "south",
                    north: "down",
                    south: "up"
                },
                east: {
                    up: "south",
                    down: "north",
                    north: "up",
                    south: "down"
                }
            },
            Ge = {
                north: [-1, 0, 0],
                east: [0, 1, 0],
                up: [0, 0, 1],
                south: [1, 0, 0],
                west: [0, -1, 0],
                down: [0, 0, -1]
            },
            Be = {},
            Ue = {
                east: new Ie,
                north: new Ie,
                up: new Ie,
                west: new Ie,
                south: new Ie,
                down: new Ie
            },
            Je = new Ie,
            He = new Ie,
            Ze = new Ie;
        De.localFrameToFixedFrameGenerator = function (e, t) {
            if (!We.hasOwnProperty(e) || !We[e].hasOwnProperty(t)) throw new pe("firstAxis and secondAxis must be east, north, up, west, south or down.");
            var r, n = We[e][t],
                o = e + t;
            return be(Be[o]) ? r = Be[o] : (r = function (r, o, a) {
                if (!be(r)) throw new pe("origin is required.");
                if (be(a) || (a = new qe), Ie.equalsEpsilon(r, Ie.ZERO, ge.EPSILON14)) Ie.unpack(Ge[e], 0, Je), Ie.unpack(Ge[t], 0, He), Ie.unpack(Ge[n], 0, Ze);
                else if (ge.equalsEpsilon(r.x, 0, ge.EPSILON14) && ge.equalsEpsilon(r.y, 0, ge.EPSILON14)) {
                    var i = ge.sign(r.z);
                    Ie.unpack(Ge[e], 0, Je), "east" !== e && "west" !== e && Ie.multiplyByScalar(Je, i, Je), Ie.unpack(Ge[t], 0, He), "east" !== t && "west" !== t && Ie.multiplyByScalar(He, i, He), Ie.unpack(Ge[n], 0, Ze), "east" !== n && "west" !== n && Ie.multiplyByScalar(Ze, i, Ze)
                } else {
                    o = de(o, Fe.WGS84), o.geodeticSurfaceNormal(r, Ue.up);
                    var c = Ue.up,
                        u = Ue.east;
                    u.x = -r.y, u.y = r.x, u.z = 0, Ie.normalize(u, Ue.east), Ie.cross(c, u, Ue.north), Ie.multiplyByScalar(Ue.up, -1, Ue.down), Ie.multiplyByScalar(Ue.east, -1, Ue.west), Ie.multiplyByScalar(Ue.north, -1, Ue.south), Je = Ue[e], He = Ue[t], Ze = Ue[n]
                }
                return a[0] = Je.x, a[1] = Je.y, a[2] = Je.z, a[3] = 0, a[4] = He.x, a[5] = He.y, a[6] = He.z, a[7] = 0, a[8] = Ze.x, a[9] = Ze.y, a[10] = Ze.z, a[11] = 0, a[12] = r.x, a[13] = r.y, a[14] = r.z, a[15] = 1, a
            }, Be[o] = r), r
        }, De.eastSouthUpToFixedFrame = De.localFrameToFixedFrameGenerator("east", "south");
        var Xe = De,
            Ke = f.engineOrigin,
            Ye = function () {
                var e = Ie.fromDegrees(Ke.x, Ke.y, 0);
                this.RCSMatrix = Xe.eastSouthUpToFixedFrame(e), this.RCSmatrixInverse = qe.inverseTransformation(this.RCSMatrix, new qe), this.localToWorldCoordinates = function (e, t) {
                    return t || (t = new Ie), qe.multiplyByPoint(this.RCSMatrix, e, t), t
                }, this.WorldCoordinatesTolocal = function (e, t) {
                    return t || (t = new Ie), qe.multiplyByPoint(this.RCSmatrixInverse, e, t), t
                }, this.WGS84CoordinatesTolocal = function (e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = Ie.fromDegrees(e, t, r),
                        o = this.WorldCoordinatesTolocal(n);
                    return Ie.multiplyComponents(o, new Ie(100, 100, 0), new Ie)
                }, this.WGS84CoordinatesTolocalMetre = function (e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = Ie.fromDegrees(e, t, r),
                        o = this.WorldCoordinatesTolocal(n);
                    return Ie.multiplyComponents(o, new Ie(1, 1, 0), new Ie)
                }
            },
            Qe = Ye,
            $e = {
                WGS84ToVector3: function (e, t, r) {
                    var n = new Qe,
                        o = new Vector2(e, t),
                        a = n.WGS84CoordinatesTolocal(o.x, o.y),
                        i = new Vector3(a.x, a.y, r);
                    return i
                },
                WGS84ToVector3ForM: function (e, t, r) {
                    var n = new Qe,
                        o = new Vector2(e, t),
                        a = n.WGS84CoordinatesTolocalMetre(o.x, o.y),
                        i = new Vector3(a.x, a.y, r);
                    return i
                }
            },
            et = $e,
            tt = (r("4160"), r("4ec9"), r("ac1f"), r("3ca3"), r("1276"), r("159b"), r("ddb0"), r("bc3a")),
            rt = r.n(tt),
            nt = {
                LoadLabelByJSON: function (e) {
                    var t = new Map,
                        r = new ue4api_xz("uePage"),
                        n = null,
                        o = null;
                    rt.a.get(e, {}).then((function (e) {
                        if ("OK" == e.statusText) {
                            var a = e.data.pois;
                            return a.forEach((function (e, a) {
                                o = (new Date).getTime() + a, n = et.WGS84ToVector3(e.lonlat.split(",")[0], e.lonlat.split(",")[1], 16e3);
                                var i = {
                                    id: o,
                                    ue4x: n.x,
                                    ue4y: n.y,
                                    ue4z: n.z,
                                    size: new Vector2(380, 180),
                                    text: e.name,
                                    scale: 1,
                                    type: "Default",
                                    backgroundColor: new Color(.266356, .467784, .021219, 1),
                                    fillColor: DefaultColor.yellow,
                                    distanceDisplayCondition: new Vector2,
                                    visibility: !0
                                };
                                console.table(i.location);
                                var c = r.ObjectFactory.CreateLabel(i);
                                t.set(o, c)
                            })), t
                        }
                    })).catch((function (e) {
                        alert(e)
                    }))
                },
                LoadImagesByJSON: function (e, t) {
                    var r = new ue4api_xz("uePage"),
                        n = new Map,
                        o = null,
                        a = null;
                    rt.a.get(e, {}).then((function (e) {
                        if ("OK" == e.statusText) {
                            var i = e.data.pois;
                            return i.forEach((function (e, i) {
                                console.info(e.address), console.info(e.phone), console.info(e.name), console.info(e.lonlat.split(",")), a = (new Date).getTime() + i, o = et.WGS84ToVector3(e.lonlat.split(",")[0], e.lonlat.split(",")[1], 200), console.table(o), console.info(a);
                                var c = {
                                        id: a,
                                        ue4x: o.x,
                                        ue4y: o.y,
                                        ue4z: o.z,
                                        image: t,
                                        scale: .2,
                                        clickedScale: .7,
                                        visibility: !0,
                                        alertWindow: {
                                            url: "http://192.168.1.106:5500/item2.html?_id=" + e.name,
                                            size: new Vector2(580, 190),
                                            offset: new Vector2(50, -100)
                                        }
                                    },
                                    u = r.ObjectFactory.CreateBillboard(c);
                                n.set(a, u)
                            })), n
                        }
                    })).catch((function (e) {
                        alert(e)
                    }))
                },
                LoadPOIByJSON: function (e, t) {
                    var r = new ue4api_xz("uePage"),
                        n = new Map,
                        o = null,
                        a = null;
                    rt.a.get(e, {}).then((function (e) {
                        if ("OK" == e.statusText) {
                            var i = e.data.RECORDS;
                            return i.forEach((function (e, i) {
                                console.info(e.名称), console.info(e.问题总数), console.info(e.解决办理率), console.info(e.答复满意得分), console.info(e.解决满意得分), console.info(e.x), console.info(e.y), a = (new Date).getTime() + i, o = et.WGS84ToVector3ForM(e.x, e.y, 10), console.table(o);
                                var c = {
                                        id: a,
                                        ue4x: o.x,
                                        ue4y: o.y,
                                        ue4z: o.z,
                                        image: t,
                                        scale: .5,
                                        clickedScale: .7,
                                        visibility: !0
                                    },
                                    u = r.ObjectFactory.CreateBillboard(c);
                                n.set(a, u)
                            })), n
                        }
                    })).catch((function (e) {
                        alert(e)
                    }))
                }
            },
            ot = nt,
            at = {
                name: "Nav",
                data: function () {
                    return {
                        activeIndex: "1"
                    }
                },
                methods: {
                    handleSelect: function (e, t) {
                        console.log(e, t);
                        var r = new ue4api_xz("uePage");
                        switch (e) {
                            case "1-1":
                                console.table(r.camera);
                                break;
                            case "1-2":
                                var n = {
                                    destination: et.WGS84ToVector3ForM(120.481194, 41.595756, 300),
                                    orientation: new Rotator(0, -70, 50)
                                };
                                r.camera.FlyTo(n.destination.x, n.destination.y, n.destination.z, n.orientation.roll, n.orientation.pitch, n.orientation.yaw, (function (e) {}), 7);
                                break;
                            case "1-3":
                                if (0 == clickIndex) {
                                    var o = {
                                        destination: new Vector3(0, 0, -15e3),
                                        orientation: new Rotator(0, -90, 0)
                                    };
                                    clickIndex++, r.camera.setView(o)
                                } else if (1 == clickIndex) {
                                    var a = {
                                        destination: new Vector3(0, 0, -2500),
                                        orientation: new Rotator(0, -90, 0)
                                    };
                                    clickIndex++, r.camera.setView(a)
                                } else if (2 == clickIndex) {
                                    var i = {
                                        destination: new Vector3(0, 0, -1500),
                                        orientation: new Rotator(0, -90, 0)
                                    };
                                    clickIndex++, r.camera.setView(i)
                                } else {
                                    var c = {
                                        destination: new Vector3(0, 0, 300),
                                        orientation: new Rotator(0, -90, 0)
                                    };
                                    clickIndex = 0, r.camera.setView(c)
                                }
                                break;
                            case "1-4":
                                r.camera.rotate(5, 30, (function (e) {
                                    console.table(e)
                                }));
                                break;
                            case "1-5":
                                var u = {
                                    destination: et.WGS84ToVector3ForM(120.481194, 41.595756, 300),
                                    orientation: new Rotator(0, -70, 50)
                                };
                                r.camera.focusOn(u.destination, u.orientation, 1650, (function (e) {}), 2);
                                break;
                            case "2-1":
                                _isshow ? r.environment.DisableEffect("snow") : r.environment.ShowEffect("snow"), _isshow = !_isshow;
                                break;
                            case "2-2":
                                _isshow ? r.environment.DisableEffect("night") : r.environment.ShowEffect("night"), _isshow = !_isshow;
                                break;
                            case "2-3":
                                _isshow ? r.environment.DisableEffect("crystal") : r.environment.ShowEffect("crystal"), _isshow = !_isshow;
                                break;
                            case "2-4":
                                if (_isshow) effectObj.removeFromMap();
                                else {
                                    for (var s = new bounds(-23e5, 23e5, 23e5, -23e5), l = new bounds(-8e5, 8e5, 8e5, -8e5), d = 5e4, h = [], m = 0; m < 200; m++) {
                                        var b = {
                                            x: l.west + Math.random() * (l.east - l.west),
                                            y: l.north + Math.random() * (l.south - l.north),
                                            value: 1,
                                            radius: d
                                        };
                                        h.push(b)
                                    }
                                    var w = {
                                        id: (new Date).getTime().toString(),
                                        class: "mode3D",
                                        bbox: s,
                                        height: 1e3,
                                        data: h
                                    };
                                    effectObj = r.ObjectFactory.createHeatmap(w)
                                }
                                _isshow = !_isshow;
                                break;
                            case "3-1":
                                var p = f.BASE_URL() + "/data/poi点数据-民计民生/学校/职业技术学校.json";
                                console.log(p);
                                ot.LoadLabelByJSON(p);
                                break;
                            case "3-2":
                                var O = "https://i.52112.com/icon/jpg/256/20201203/102093/4136590.jpg";
                                p = f.BASE_URL() + "/data/poi点数据-民计民生/学校/小学.json";
                                console.log(O), ot.LoadImagesByJSON(p, O);
                                break;
                            case "3-3":
                                var v = {
                                    exclude: [1, 2]
                                };
                                r.ObjectFactory.createFeatureLayer(v);
                                break;
                            case "3-4":
                                p = f.BASE_URL() + "/data/poi点数据-民计民生/滨海/poi.json", O = f.BASE_URL() + "/images/project/camera.png";
                                console.log(O), ot.LoadPOIByJSON(p, O);
                                break;
                            case "4-1":
                                var y = {
                                    id: (new Date).getTime(),
                                    showLength: !0,
                                    pathWidth: 5e3,
                                    faceScreen: !1,
                                    pathColor: DefaultColor.green,
                                    data: [new Vector3(0, 0, 1300), new Vector3(5e3, 0, 1300), new Vector3(1e4, 12e3, 1300), new Vector3(15e3, 15e3, 1300), new Vector3(0, 1e4, 1100)]
                                };
                                r.ObjectFactory.CreatePolyline(y);
                                break;
                            case "4-2":
                                break;
                            case "5-1":
                                r.analysis.getMeasureHeight((function (e) {
                                    alert(JSON.stringify(e))
                                }));
                                break;
                            case "5-2":
                                r.analysis.getDistanceHorizontal((function (e) {
                                    alert(JSON.stringify(e))
                                }));
                                break;
                            case "5-3":
                                r.analysis.getPlaneArea((function (e) {
                                    alert(JSON.stringify(e))
                                }));
                                break;
                            case "5-4":
                                r.measure.PickPosition((function (e) {
                                    alert(JSON.stringify(e))
                                }));
                                break;
                            case "6-1":
                                for (var _ = ["2_SM_0054", "4_SM_136"], S = 0; S < _.length; S++) {
                                    var x = {
                                        id: (new Date).getTime() + S,
                                        value: 500 * Math.random() + 50,
                                        location: new Vector3(0, 0, 1e3),
                                        uintValue: 100,
                                        divideValue: [150, 450],
                                        divideColor: [new Color(.266356, .467784, .021219, 1), new Color(.8125, .450415, 0, 1), new Color(.817708, .017036, .017036, 1)]
                                    };
                                    r.View.CreateStatisticCylinder(x)
                                }
                                break;
                            case "6-2":
                                var g = {
                                    id: (new Date).getTime(),
                                    startLocation: new Vector3(0, 0, 1600),
                                    endLocation: new Vector3(1e5, 1e5, 1600),
                                    lineWidth: 40,
                                    type: 0,
                                    lineColor: DefaultColor.red
                                };
                                r.ObjectFactory.CreateMigrationMap(g);
                                break;
                            case "6-3":
                                var j = {
                                    id: (new Date).getTime(),
                                    location: new Vector3(0, 0, 2e4),
                                    radius: 200
                                };
                                r.ObjectFactory.CreateCircleArea(j);
                                break;
                            case "7-1":
                                var E = {
                                    id: (new Date).getTime(),
                                    showLength: !0,
                                    pathWidth: 5e3,
                                    faceScreen: !1,
                                    pathColor: DefaultColor.green,
                                    type: 0,
                                    brightness: 8,
                                    data: [et.WGS84ToVector3ForM(120.476997, 41.59528, 100), et.WGS84ToVector3ForM(120.478529, 41.596356, 100), et.WGS84ToVector3ForM(120.481194, 41.595756, 100), et.WGS84ToVector3ForM(120.483364, 41.597203, 100), et.WGS84ToVector3ForM(120.483364, 41.587203, 100)]
                                };
                                r.ObjectFactory.CreatePolyline(E);
                                break;
                            case "7-2":
                                var M = {
                                    time: 20,
                                    smoothOver: !0
                                };
                                r.environment.setTime(M);
                                break;
                            case "7-3":
                                var T = {
                                    weather: 1,
                                    smoothOver: !0
                                };
                                r.environment.setTime(T);
                                break;
                            case "7-4":
                                if (_isshow) effectObj.removeFromMap();
                                else {
                                    for (var P = new bounds(-23e5, 23e5, 23e5, -23e5), I = new bounds(-8e5, 8e5, 8e5, -8e5), R = 5e4, q = [], C = 0; C < 200; C++) {
                                        var z = {
                                            x: I.west + Math.random() * (I.east - I.west),
                                            y: I.north + Math.random() * (I.south - I.north),
                                            value: 1,
                                            radius: R
                                        };
                                        q.push(z)
                                    }
                                    var k = {
                                        id: (new Date).getTime().toString(),
                                        class: "mode3D",
                                        type: 0,
                                        bbox: P,
                                        height: 1e3,
                                        data: q
                                    };
                                    effectObj = r.ObjectFactory.createHeatmap(k)
                                }
                                _isshow = !_isshow;
                                break;
                            case "7-5":
                                for (var N = new bounds(-23e5, 23e5, 23e5, -23e5), L = new bounds(-8e5, 8e5, 8e5, -8e5), V = 5e4, A = [], F = 0; F < 200; F++) {
                                    var D = {
                                        x: L.west + Math.random() * (L.east - L.west),
                                        y: L.north + Math.random() * (L.south - L.north),
                                        value: 1,
                                        radius: V
                                    };
                                    A.push(D)
                                }
                                var W = {
                                    id: (new Date).getTime().toString(),
                                    class: "pointCloud",
                                    type: 0,
                                    bbox: N,
                                    height: 1e3,
                                    data: A
                                };
                                effectObj.update(W);
                                break;
                            case "7-6":
                                var G = {
                                    id: (new Date).getTime(),
                                    startLocation: et.WGS84ToVector3ForM(121.476997, 41.59528, 600),
                                    endLocation: et.WGS84ToVector3ForM(120.478529, 40.596356, 600),
                                    lineWidth: 40,
                                    type: 0,
                                    lineColor: DefaultColor.red,
                                    heightScale: 5,
                                    brightness: 8
                                };
                                r.ObjectFactory.CreateMigrationMap(G);
                                break;
                            case "7-7":
                                var B = {
                                    id: (new Date).getTime(),
                                    height: 1e4,
                                    color: new Color,
                                    brightness: 8,
                                    type: 0,
                                    data: [et.WGS84ToVector3ForM(120.476997, 41.59528, 300), et.WGS84ToVector3ForM(120.478529, 41.596356, 300), et.WGS84ToVector3ForM(120.481194, 41.595756, 300), et.WGS84ToVector3ForM(120.483364, 41.597203, 300)]
                                };
                                r.ObjectFactory.createAreaBoundary(B);
                                break;
                            case "7-8":
                                var U = {
                                    id: (new Date).getTime(),
                                    coord_type: 1,
                                    upperEffect: 0,
                                    upperSize: 1e3,
                                    upperColor: new Color,
                                    upperBrightness: 8,
                                    lowerEffect: 1,
                                    lowerSize: 1e3,
                                    lowerColor: new Color(.266356, .467784, .021219, 1),
                                    lowerBrightness: 8,
                                    position: et.WGS84ToVector3ForM(120.476997, 41.59528, 300)
                                };
                                r.scene.pointEffect(U);
                                break;
                            case "7-9":
                                r.environment.SetTimeInit({});
                                break;
                            case "7-10":
                                r.environment.SetWeatherInit({});
                                break;
                            case "8-1":
                                r.factory.CallEvent("SetPawn", 1);
                                break;
                            case "8-2":
                                r.factory.CallEvent("SetPawn", 2);
                                break;
                            case "8-3":
                                r.factory.CallEvent("SetPawn", 3);
                                break;
                            case "8-4":
                                r.factory.CallEvent("SetPawn", 4);
                                break;
                            case "8-5":
                                r.factory.CallEvent("SetPawn", 5);
                                break;
                            case "9-1":
                                r.factory.CallEvent("LevelLight_Urbang", 0);
                                break;
                            case "9-2":
                                r.factory.CallEvent("Levelyuxue", 0);
                                break;
                            case "9-3":
                                r.factory.CallEvent("Levelxingzhengqu", 0);
                                break;
                            case "9-4":
                                r.factory.CallEvent("Leveldajubu", 0);
                                break;
                            default:
                                break
                        }
                    }
                }
            };
        r("1e96");
        at.render = le, at.__scopeId = "data-v-0cfac7e4";
        var it = at,
            ct = Object(n["eb"])("data-v-b8fe05ae"),
            ut = ct((function (e, t, r, o, a, i) {
                var c = Object(n["M"])("el-input"),
                    u = Object(n["M"])("el-form-item"),
                    s = Object(n["M"])("el-form");
                return Object(n["D"])(), Object(n["i"])(s, {
                    ref: "form",
                    model: a.form,
                    "label-width": "80px",
                    class: "demo-form"
                }, {
                    default: ct((function () {
                        return [Object(n["m"])(u, {
                            label: "经纬度："
                        }, {
                            default: ct((function () {
                                return [Object(n["m"])(c, {
                                    modelValue: a.form.name,
                                    "onUpdate:modelValue": t[1] || (t[1] = function (e) {
                                        return a.form.name = e
                                    }),
                                    onChange: i.handlerConvert,
                                    class: "input-lonlat",
                                    placeholder: "x:120.48,y:41.60或120.48,41.60"
                                }, null, 8, ["modelValue", "onChange"])]
                            })),
                            _: 1
                        }), Object(n["m"])(u, {
                            label: "转换后："
                        }, {
                            default: ct((function () {
                                return [Object(n["m"])(c, {
                                    type: "input",
                                    modelValue: a.form.desc,
                                    "onUpdate:modelValue": t[2] || (t[2] = function (e) {
                                        return a.form.desc = e
                                    }),
                                    class: "input-lonlat"
                                }, null, 8, ["modelValue"])]
                            })),
                            _: 1
                        })]
                    })),
                    _: 1
                }, 8, ["model"])
            })),
            st = (r("5319"), {
                name: "WGSConvertForm",
                data: function () {
                    return {
                        form: {
                            name: "",
                            desc: ""
                        }
                    }
                },
                methods: {
                    handlerConvert: function () {
                        var e = this.form.name;
                        e = e.replace(/\s+/g, ""), e = e.replace(/，/g, ",").replace(/：/g, ":"), e = e.toLowerCase().replace(/x:/g, "").replace(/y:/g, "");
                        var t = e.split(","),
                            r = et.WGS84ToVector3ForM(t[0], t[1], 0);
                        this.form.desc = "x:" + r.x + ",y:" + r.y
                    }
                }
            });
        r("16eb");
        st.render = ut, st.__scopeId = "data-v-b8fe05ae";
        var lt = st,
            ft = {
                name: "App",
                components: {
                    UE4iframe: h,
                    Nav: it,
                    WGSConvertForm: lt
                }
            };
        r("fcdb");
        ft.render = i;
        var dt = ft,
            ht = Object(n["h"])(dt);
        ht.use(o["a"]), ht.mount("#app")
    },
    "5ebc": function (e, t, r) {},
    6684: function (e, t, r) {},
    fcdb: function (e, t, r) {
        "use strict";
        r("6684")
    }
});
//# sourceMappingURL=app.c71285ad.js.map