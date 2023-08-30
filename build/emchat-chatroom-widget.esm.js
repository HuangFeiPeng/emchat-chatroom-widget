import { reactive, ref, defineComponent, watch, nextTick, createVNode, Fragment, onMounted, onBeforeUnmount } from "vue";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var EasemobChat = { exports: {} };
(function(module, exports) {
  (function(p, _) {
    module.exports = _();
  })(commonjsGlobal, function() {
    return function() {
      var __webpack_modules__ = { 4537: function(p) {
        p.exports = function(_, e) {
          for (var r = new Array(arguments.length - 1), t = 0, a = 2, i = !0; a < arguments.length; )
            r[t++] = arguments[a++];
          return new Promise(function(s, o) {
            r[t] = function(n) {
              if (i)
                if (i = !1, n)
                  o(n);
                else {
                  for (var u = new Array(arguments.length - 1), c = 0; c < u.length; )
                    u[c++] = arguments[c];
                  s.apply(null, u);
                }
            };
            try {
              _.apply(e || null, r);
            } catch (n) {
              i && (i = !1, o(n));
            }
          });
        };
      }, 7419: function(p, _) {
        var e = _;
        e.length = function(s) {
          var o = s.length;
          if (!o)
            return 0;
          for (var n = 0; --o % 4 > 1 && s.charAt(o) === "="; )
            ++n;
          return Math.ceil(3 * s.length) / 4 - n;
        };
        for (var r = new Array(64), t = new Array(123), a = 0; a < 64; )
          t[r[a] = a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : a - 59 | 43] = a++;
        e.encode = function(s, o, n) {
          for (var u, c = null, h = [], m = 0, f = 0; o < n; ) {
            var g = s[o++];
            switch (f) {
              case 0:
                h[m++] = r[g >> 2], u = (3 & g) << 4, f = 1;
                break;
              case 1:
                h[m++] = r[u | g >> 4], u = (15 & g) << 2, f = 2;
                break;
              case 2:
                h[m++] = r[u | g >> 6], h[m++] = r[63 & g], f = 0;
            }
            m > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, h)), m = 0);
          }
          return f && (h[m++] = r[u], h[m++] = 61, f === 1 && (h[m++] = 61)), c ? (m && c.push(String.fromCharCode.apply(String, h.slice(0, m))), c.join("")) : String.fromCharCode.apply(String, h.slice(0, m));
        };
        var i = "invalid encoding";
        e.decode = function(s, o, n) {
          for (var u, c = n, h = 0, m = 0; m < s.length; ) {
            var f = s.charCodeAt(m++);
            if (f === 61 && h > 1)
              break;
            if ((f = t[f]) === void 0)
              throw Error(i);
            switch (h) {
              case 0:
                u = f, h = 1;
                break;
              case 1:
                o[n++] = u << 2 | (48 & f) >> 4, u = f, h = 2;
                break;
              case 2:
                o[n++] = (15 & u) << 4 | (60 & f) >> 2, u = f, h = 3;
                break;
              case 3:
                o[n++] = (3 & u) << 6 | f, h = 0;
            }
          }
          if (h === 1)
            throw Error(i);
          return n - c;
        }, e.test = function(s) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(s);
        };
      }, 5124: function(p) {
        function _(e, r) {
          typeof e == "string" && (r = e, e = void 0);
          var t = [];
          function a(s) {
            if (typeof s != "string") {
              var o = i();
              if (_.verbose && console.log("codegen: " + o), o = "return " + o, s) {
                for (var n = Object.keys(s), u = new Array(n.length + 1), c = new Array(n.length), h = 0; h < n.length; )
                  u[h] = n[h], c[h] = s[n[h++]];
                return u[h] = o, Function.apply(null, u).apply(null, c);
              }
              return Function(o)();
            }
            for (var m = new Array(arguments.length - 1), f = 0; f < m.length; )
              m[f] = arguments[++f];
            if (f = 0, s = s.replace(/%([%dfijs])/g, function(g, d) {
              var l = m[f++];
              switch (d) {
                case "d":
                case "f":
                  return String(Number(l));
                case "i":
                  return String(Math.floor(l));
                case "j":
                  return JSON.stringify(l);
                case "s":
                  return String(l);
              }
              return "%";
            }), f !== m.length)
              throw Error("parameter count mismatch");
            return t.push(s), a;
          }
          function i(s) {
            return "function " + (s || r || "") + "(" + (e && e.join(",") || "") + `){
  ` + t.join(`
  `) + `
}`;
          }
          return a.toString = i, a;
        }
        p.exports = _, _.verbose = !1;
      }, 9211: function(p) {
        function _() {
          this._listeners = {};
        }
        p.exports = _, _.prototype.on = function(e, r, t) {
          return (this._listeners[e] || (this._listeners[e] = [])).push({ fn: r, ctx: t || this }), this;
        }, _.prototype.off = function(e, r) {
          if (e === void 0)
            this._listeners = {};
          else if (r === void 0)
            this._listeners[e] = [];
          else
            for (var t = this._listeners[e], a = 0; a < t.length; )
              t[a].fn === r ? t.splice(a, 1) : ++a;
          return this;
        }, _.prototype.emit = function(e) {
          var r = this._listeners[e];
          if (r) {
            for (var t = [], a = 1; a < arguments.length; )
              t.push(arguments[a++]);
            for (a = 0; a < r.length; )
              r[a].fn.apply(r[a++].ctx, t);
          }
          return this;
        };
      }, 9054: function(p, _, e) {
        p.exports = a;
        var r = e(4537), t = e(7199)("fs");
        function a(i, s, o) {
          return typeof s == "function" ? (o = s, s = {}) : s || (s = {}), o ? !s.xhr && t && t.readFile ? t.readFile(i, function(n, u) {
            return n && typeof XMLHttpRequest < "u" ? a.xhr(i, s, o) : n ? o(n) : o(null, s.binary ? u : u.toString("utf8"));
          }) : a.xhr(i, s, o) : r(a, this, i, s);
        }
        a.xhr = function(i, s, o) {
          var n = new XMLHttpRequest();
          n.onreadystatechange = function() {
            if (n.readyState === 4) {
              if (n.status !== 0 && n.status !== 200)
                return o(Error("status " + n.status));
              if (s.binary) {
                var u = n.response;
                if (!u) {
                  u = [];
                  for (var c = 0; c < n.responseText.length; ++c)
                    u.push(255 & n.responseText.charCodeAt(c));
                }
                return o(null, typeof Uint8Array < "u" ? new Uint8Array(u) : u);
              }
              return o(null, n.responseText);
            }
          }, s.binary && ("overrideMimeType" in n && n.overrideMimeType("text/plain; charset=x-user-defined"), n.responseType = "arraybuffer"), n.open("GET", i), n.send();
        };
      }, 945: function(p) {
        function _(i) {
          return typeof Float32Array < "u" ? function() {
            var s = new Float32Array([-0]), o = new Uint8Array(s.buffer), n = o[3] === 128;
            function u(f, g, d) {
              s[0] = f, g[d] = o[0], g[d + 1] = o[1], g[d + 2] = o[2], g[d + 3] = o[3];
            }
            function c(f, g, d) {
              s[0] = f, g[d] = o[3], g[d + 1] = o[2], g[d + 2] = o[1], g[d + 3] = o[0];
            }
            function h(f, g) {
              return o[0] = f[g], o[1] = f[g + 1], o[2] = f[g + 2], o[3] = f[g + 3], s[0];
            }
            function m(f, g) {
              return o[3] = f[g], o[2] = f[g + 1], o[1] = f[g + 2], o[0] = f[g + 3], s[0];
            }
            i.writeFloatLE = n ? u : c, i.writeFloatBE = n ? c : u, i.readFloatLE = n ? h : m, i.readFloatBE = n ? m : h;
          }() : function() {
            function s(n, u, c, h) {
              var m = u < 0 ? 1 : 0;
              if (m && (u = -u), u === 0)
                n(1 / u > 0 ? 0 : 2147483648, c, h);
              else if (isNaN(u))
                n(2143289344, c, h);
              else if (u > 34028234663852886e22)
                n((m << 31 | 2139095040) >>> 0, c, h);
              else if (u < 11754943508222875e-54)
                n((m << 31 | Math.round(u / 1401298464324817e-60)) >>> 0, c, h);
              else {
                var f = Math.floor(Math.log(u) / Math.LN2);
                n((m << 31 | f + 127 << 23 | 8388607 & Math.round(u * Math.pow(2, -f) * 8388608)) >>> 0, c, h);
              }
            }
            function o(n, u, c) {
              var h = n(u, c), m = 2 * (h >> 31) + 1, f = h >>> 23 & 255, g = 8388607 & h;
              return f === 255 ? g ? NaN : m * (1 / 0) : f === 0 ? 1401298464324817e-60 * m * g : m * Math.pow(2, f - 150) * (g + 8388608);
            }
            i.writeFloatLE = s.bind(null, e), i.writeFloatBE = s.bind(null, r), i.readFloatLE = o.bind(null, t), i.readFloatBE = o.bind(null, a);
          }(), typeof Float64Array < "u" ? function() {
            var s = new Float64Array([-0]), o = new Uint8Array(s.buffer), n = o[7] === 128;
            function u(f, g, d) {
              s[0] = f, g[d] = o[0], g[d + 1] = o[1], g[d + 2] = o[2], g[d + 3] = o[3], g[d + 4] = o[4], g[d + 5] = o[5], g[d + 6] = o[6], g[d + 7] = o[7];
            }
            function c(f, g, d) {
              s[0] = f, g[d] = o[7], g[d + 1] = o[6], g[d + 2] = o[5], g[d + 3] = o[4], g[d + 4] = o[3], g[d + 5] = o[2], g[d + 6] = o[1], g[d + 7] = o[0];
            }
            function h(f, g) {
              return o[0] = f[g], o[1] = f[g + 1], o[2] = f[g + 2], o[3] = f[g + 3], o[4] = f[g + 4], o[5] = f[g + 5], o[6] = f[g + 6], o[7] = f[g + 7], s[0];
            }
            function m(f, g) {
              return o[7] = f[g], o[6] = f[g + 1], o[5] = f[g + 2], o[4] = f[g + 3], o[3] = f[g + 4], o[2] = f[g + 5], o[1] = f[g + 6], o[0] = f[g + 7], s[0];
            }
            i.writeDoubleLE = n ? u : c, i.writeDoubleBE = n ? c : u, i.readDoubleLE = n ? h : m, i.readDoubleBE = n ? m : h;
          }() : function() {
            function s(n, u, c, h, m, f) {
              var g = h < 0 ? 1 : 0;
              if (g && (h = -h), h === 0)
                n(0, m, f + u), n(1 / h > 0 ? 0 : 2147483648, m, f + c);
              else if (isNaN(h))
                n(0, m, f + u), n(2146959360, m, f + c);
              else if (h > 17976931348623157e292)
                n(0, m, f + u), n((g << 31 | 2146435072) >>> 0, m, f + c);
              else {
                var d;
                if (h < 22250738585072014e-324)
                  n((d = h / 5e-324) >>> 0, m, f + u), n((g << 31 | d / 4294967296) >>> 0, m, f + c);
                else {
                  var l = Math.floor(Math.log(h) / Math.LN2);
                  l === 1024 && (l = 1023), n(4503599627370496 * (d = h * Math.pow(2, -l)) >>> 0, m, f + u), n((g << 31 | l + 1023 << 20 | 1048576 * d & 1048575) >>> 0, m, f + c);
                }
              }
            }
            function o(n, u, c, h, m) {
              var f = n(h, m + u), g = n(h, m + c), d = 2 * (g >> 31) + 1, l = g >>> 20 & 2047, E = 4294967296 * (1048575 & g) + f;
              return l === 2047 ? E ? NaN : d * (1 / 0) : l === 0 ? 5e-324 * d * E : d * Math.pow(2, l - 1075) * (E + 4503599627370496);
            }
            i.writeDoubleLE = s.bind(null, e, 0, 4), i.writeDoubleBE = s.bind(null, r, 4, 0), i.readDoubleLE = o.bind(null, t, 0, 4), i.readDoubleBE = o.bind(null, a, 4, 0);
          }(), i;
        }
        function e(i, s, o) {
          s[o] = 255 & i, s[o + 1] = i >>> 8 & 255, s[o + 2] = i >>> 16 & 255, s[o + 3] = i >>> 24;
        }
        function r(i, s, o) {
          s[o] = i >>> 24, s[o + 1] = i >>> 16 & 255, s[o + 2] = i >>> 8 & 255, s[o + 3] = 255 & i;
        }
        function t(i, s) {
          return (i[s] | i[s + 1] << 8 | i[s + 2] << 16 | i[s + 3] << 24) >>> 0;
        }
        function a(i, s) {
          return (i[s] << 24 | i[s + 1] << 16 | i[s + 2] << 8 | i[s + 3]) >>> 0;
        }
        p.exports = _(_);
      }, 7199: function(module) {
        function inquire(moduleName) {
          try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length))
              return mod;
          } catch (p) {
          }
          return null;
        }
        module.exports = inquire;
      }, 8626: function(p, _) {
        var e = _, r = e.isAbsolute = function(a) {
          return /^(?:\/|\w+:)/.test(a);
        }, t = e.normalize = function(a) {
          var i = (a = a.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), s = r(a), o = "";
          s && (o = i.shift() + "/");
          for (var n = 0; n < i.length; )
            i[n] === ".." ? n > 0 && i[n - 1] !== ".." ? i.splice(--n, 2) : s ? i.splice(n, 1) : ++n : i[n] === "." ? i.splice(n, 1) : ++n;
          return o + i.join("/");
        };
        e.resolve = function(a, i, s) {
          return s || (i = t(i)), r(i) ? i : (s || (a = t(a)), (a = a.replace(/(?:\/|^)[^/]+$/, "")).length ? t(a + "/" + i) : i);
        };
      }, 6662: function(p) {
        p.exports = function(_, e, r) {
          var t = r || 8192, a = t >>> 1, i = null, s = t;
          return function(o) {
            if (o < 1 || o > a)
              return _(o);
            s + o > t && (i = _(t), s = 0);
            var n = e.call(i, s, s += o);
            return 7 & s && (s = 1 + (7 | s)), n;
          };
        };
      }, 4997: function(p, _) {
        var e = _;
        e.length = function(r) {
          for (var t = 0, a = 0, i = 0; i < r.length; ++i)
            (a = r.charCodeAt(i)) < 128 ? t += 1 : a < 2048 ? t += 2 : (64512 & a) == 55296 && (64512 & r.charCodeAt(i + 1)) == 56320 ? (++i, t += 4) : t += 3;
          return t;
        }, e.read = function(r, t, a) {
          if (a - t < 1)
            return "";
          for (var i, s = null, o = [], n = 0; t < a; )
            (i = r[t++]) < 128 ? o[n++] = i : i > 191 && i < 224 ? o[n++] = (31 & i) << 6 | 63 & r[t++] : i > 239 && i < 365 ? (i = ((7 & i) << 18 | (63 & r[t++]) << 12 | (63 & r[t++]) << 6 | 63 & r[t++]) - 65536, o[n++] = 55296 + (i >> 10), o[n++] = 56320 + (1023 & i)) : o[n++] = (15 & i) << 12 | (63 & r[t++]) << 6 | 63 & r[t++], n > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, o)), n = 0);
          return s ? (n && s.push(String.fromCharCode.apply(String, o.slice(0, n))), s.join("")) : String.fromCharCode.apply(String, o.slice(0, n));
        }, e.write = function(r, t, a) {
          for (var i, s, o = a, n = 0; n < r.length; ++n)
            (i = r.charCodeAt(n)) < 128 ? t[a++] = i : i < 2048 ? (t[a++] = i >> 6 | 192, t[a++] = 63 & i | 128) : (64512 & i) == 55296 && (64512 & (s = r.charCodeAt(n + 1))) == 56320 ? (i = 65536 + ((1023 & i) << 10) + (1023 & s), ++n, t[a++] = i >> 18 | 240, t[a++] = i >> 12 & 63 | 128, t[a++] = i >> 6 & 63 | 128, t[a++] = 63 & i | 128) : (t[a++] = i >> 12 | 224, t[a++] = i >> 6 & 63 | 128, t[a++] = 63 & i | 128);
          return a - o;
        };
      }, 4188: function(p, _, e) {
        var r, t, a;
        (function(i) {
          if (_ != null && typeof _.nodeType != "number")
            p.exports = i();
          else if (e.amdO != null)
            t = [], (a = typeof (r = i) == "function" ? r.apply(_, t) : r) === void 0 || (p.exports = a);
          else {
            var s = i(), o = typeof self < "u" ? self : $.global;
            typeof o.btoa != "function" && (o.btoa = s.btoa), typeof o.atob != "function" && (o.atob = s.atob);
          }
        })(function() {
          var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          function s(o) {
            this.message = o;
          }
          return s.prototype = new Error(), s.prototype.name = "InvalidCharacterError", { btoa: function(o) {
            for (var n, u, c = String(o), h = 0, m = i, f = ""; c.charAt(0 | h) || (m = "=", h % 1); f += m.charAt(63 & n >> 8 - h % 1 * 8)) {
              if ((u = c.charCodeAt(h += 0.75)) > 255)
                throw new s("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
              n = n << 8 | u;
            }
            return f;
          }, atob: function(o) {
            var n = String(o).replace(/[=]+$/, "");
            if (n.length % 4 == 1)
              throw new s("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var u, c, h = 0, m = 0, f = ""; c = n.charAt(m++); ~c && (u = h % 4 ? 64 * u + c : c, h++ % 4) ? f += String.fromCharCode(255 & u >> (-2 * h & 6)) : 0)
              c = i.indexOf(c);
            return f;
          } };
        });
      }, 9667: function(p, _, e) {
        e.r(_), e.d(_, { addUsersToChatRoom: function() {
          return T;
        }, addUsersToChatRoomAllowlist: function() {
          return te;
        }, addUsersToChatRoomWhitelist: function() {
          return nt;
        }, blockChatRoomMember: function() {
          return ce;
        }, blockChatRoomMembers: function() {
          return Ue;
        }, chatRoomBlockMulti: function() {
          return _e;
        }, chatRoomBlockSingle: function() {
          return le;
        }, createChatRoom: function() {
          return c;
        }, deleteChatRoomSharedFile: function() {
          return w;
        }, destroyChatRoom: function() {
          return h;
        }, disableSendChatRoomMsg: function() {
          return He;
        }, enableSendChatRoomMsg: function() {
          return Xe;
        }, fetchChatRoomAnnouncement: function() {
          return Ye;
        }, fetchChatRoomSharedFileList: function() {
          return z;
        }, getChatRoomAdmin: function() {
          return y;
        }, getChatRoomAllowlist: function() {
          return it;
        }, getChatRoomAttributes: function() {
          return q;
        }, getChatRoomBlacklist: function() {
          return Ve;
        }, getChatRoomBlacklistNew: function() {
          return ke;
        }, getChatRoomBlocklist: function() {
          return se;
        }, getChatRoomDetails: function() {
          return m;
        }, getChatRoomMuteList: function() {
          return ee;
        }, getChatRoomMuted: function() {
          return Z;
        }, getChatRoomMutelist: function() {
          return G;
        }, getChatRoomSharedFilelist: function() {
          return re;
        }, getChatRoomWhitelist: function() {
          return ot;
        }, getChatRooms: function() {
          return u;
        }, isChatRoomWhiteUser: function() {
          return ct;
        }, isInChatRoomAllowlist: function() {
          return Ne;
        }, isInChatRoomMutelist: function() {
          return ze;
        }, joinChatRoom: function() {
          return I;
        }, leaveChatRoom: function() {
          return C;
        }, listChatRoomMember: function() {
          return N;
        }, listChatRoomMembers: function() {
          return v;
        }, modifyChatRoom: function() {
          return f;
        }, muteChatRoomMember: function() {
          return j;
        }, quitChatRoom: function() {
          return O;
        }, removeChatRoomAdmin: function() {
          return x;
        }, removeChatRoomAllowlistMember: function() {
          return rt;
        }, removeChatRoomAttribute: function() {
          return fe;
        }, removeChatRoomAttributes: function() {
          return pe;
        }, removeChatRoomBlockMulti: function() {
          return Pe;
        }, removeChatRoomBlockSingle: function() {
          return ve;
        }, removeChatRoomMember: function() {
          return d;
        }, removeChatRoomMembers: function() {
          return E;
        }, removeChatRoomWhitelistMember: function() {
          return Me;
        }, removeMultiChatRoomMember: function() {
          return l;
        }, removeMuteChatRoomMember: function() {
          return P;
        }, removeSingleChatRoomMember: function() {
          return g;
        }, rmUsersFromChatRoomWhitelist: function() {
          return $e;
        }, setChatRoomAdmin: function() {
          return A;
        }, setChatRoomAttribute: function() {
          return Ie;
        }, setChatRoomAttributes: function() {
          return ie;
        }, unblockChatRoomMember: function() {
          return ye;
        }, unblockChatRoomMembers: function() {
          return We;
        }, unmuteChatRoomMember: function() {
          return W;
        }, updateChatRoomAnnouncement: function() {
          return qe;
        }, uploadChatRoomSharedFile: function() {
          return Oe;
        } }), e(1539), e(8674), e(8309), e(2526), e(1817), e(2222), e(9753), e(9600), e(2165), e(6992), e(8783), e(3948);
        var r = e(5531), t = e(7252), a = e(4370), i = e(3246), s = e(7360), o = e(1595);
        function n(S) {
          return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(X) {
            return typeof X;
          } : function(X) {
            return X && typeof Symbol == "function" && X.constructor === Symbol && X !== Symbol.prototype ? "symbol" : typeof X;
          }, n(S);
        }
        function u(S) {
          var X = this;
          if (typeof S.pagenum != "number" || typeof S.pagesize != "number")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var B = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(B);
          }
          var ue = { pagenum: S.pagenum || 1, pagesize: S.pagesize || 20 }, K = this.context, de = K.orgName, Ee = K.appName, Se = K.accessToken, xe = { url: this.apiUrl + "/" + de + "/" + Ee + "/chatrooms", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + Se }, data: ue, success: function(Be) {
            typeof S.success == "function" && S.success(Be);
          }, error: function(Be) {
            Be.error && Be.error_description && X.onError && X.onError({ type: r.E.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR, message: Be.error_description, data: Be }), typeof S.error == "function" && S.error(Be);
          } };
          return s.kg.debug("Call getChatRooms", S), a.hj.call(this, xe, o.fI.GET_CHATROOM_LIST);
        }
        function c(S) {
          if (typeof S.name != "string")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = { name: S.name, description: S.description, maxusers: S.maxusers, owner: this.user, members: S.members }, ue = this.context, K = ue.orgName, de = ue.appName, Ee = (ue.accessToken, ue.jid), Se = { url: "".concat(this.apiUrl, "/").concat(K, "/").concat(de, "/chatrooms?resource=").concat(Ee.clientResource), dataType: "json", type: "POST", data: JSON.stringify(B), headers: { Authorization: "Bearer " + S.token || 0, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call createChatRoom", S), a.hj.call(this, Se, o.fI.CREATE_CHATROOM);
        }
        function h(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = (B.accessToken, B.jid), Ee = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(S.chatRoomId, "?resource=").concat(de.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + S.token || 0 }, success: S.success, error: S.error };
          return s.kg.debug("Call destroyChatRoom", S), a.hj.call(this, Ee, o.fI.DESTROY_CHATROOM);
        }
        function m(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = { url: this.apiUrl + "/" + ue + "/" + K + "/chatrooms/" + S.chatRoomId, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call getChatRoomDetails", S), a.hj.call(this, Ee, o.fI.GET_CHATROOM_DETAIL);
        }
        function f(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = { groupname: S.chatRoomName, description: S.description, maxusers: S.maxusers }, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "?resource=").concat(Ee.clientResource), type: "PUT", data: JSON.stringify(xe), dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call modifyChatRoom", S), a.hj.call(this, Be, o.fI.MODIFY_CHATROOM);
        }
        function g(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "" || typeof S.username != "string")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = S.username, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/users/").concat(xe, "?resource=").concat(Ee.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call removeChatRoomMember", S), a.hj.call(this, Be, o.fI.REMOVE_CHATROOM_MEMBER);
        }
        var d = g;
        function l(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "" || !Array.isArray(S.users))
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = S.chatRoomId, ue = S.users.join(","), K = this.context, de = K.orgName, Ee = K.appName, Se = K.accessToken, xe = K.jid, Be = { url: "".concat(this.apiUrl, "/").concat(de, "/").concat(Ee, "/chatrooms/").concat(B, "/users/").concat(ue, "?resource=").concat(xe.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + Se, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call removeChatRoomMembers", S), a.hj.call(this, Be, o.fI.MULTI_REMOVE_CHATROOM_MEMBER);
        }
        var E = l;
        function T(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "" || !Array.isArray(S.users))
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = S.chatRoomId, ue = { usernames: S.users }, K = this.context, de = K.orgName, Ee = K.appName, Se = K.accessToken, xe = K.jid, Be = { url: "".concat(this.apiUrl, "/").concat(de, "/").concat(Ee, "/chatrooms/").concat(B, "/users?resource=").concat(xe.clientResource), type: "POST", data: JSON.stringify(ue), dataType: "json", headers: { Authorization: "Bearer " + Se, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call addUsersToChatRoom", S), a.hj.call(this, Be, o.fI.ADD_USERS_TO_CHATROOM);
        }
        function I(S) {
          if (typeof S.roomId != "string" || S.roomId === "")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          return s.kg.debug("Call joinChatRoom", S), this.mSync.handleChatRoom(S, "join");
        }
        function O(S) {
          if (typeof S.roomId != "string" || S.roomId === "")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          return s.kg.debug("Call leaveChatRoom", S), this.mSync.handleChatRoom(S, "leave");
        }
        var C = O;
        function N(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (isNaN(S.pageNum) || S.pageNum <= 0)
            throw Error('The parameter "pageNum" should be a positive number');
          if (isNaN(S.pageSize) || S.pageSize <= 0)
            throw Error('The parameter "pageSize" should be a positive number');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = { pagenum: S.pageNum, pagesize: S.pageSize }, ue = this.context, K = ue.orgName, de = ue.appName, Ee = ue.accessToken, Se = { url: this.apiUrl + "/" + K + "/" + de + "/chatrooms/" + S.chatRoomId + "/users", dataType: "json", type: "GET", data: B, headers: { Authorization: "Bearer " + Ee, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call listChatRoomMembers", S), a.hj.call(this, Se, o.fI.LIST_CHATROOM_MEMBERS);
        }
        var v = N;
        function y(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = S.chatRoomId, Se = { url: this.apiUrl + "/" + ue + "/" + K + "/chatrooms/" + Ee + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call getChatRoomAdmin", S), a.hj.call(this, Se, o.fI.GET_CHATROOM_ADMIN);
        }
        function A(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof S.username != "string" || S.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = { newadmin: S.username }, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/admin?resource=").concat(Ee.clientResource), type: "POST", dataType: "json", data: JSON.stringify(xe), headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call setChatRoomAdmin", S), a.hj.call(this, Be, o.fI.SET_CHATROOM_ADMIN);
        }
        function x(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof S.username != "string" || S.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = S.username, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/admin/").concat(xe, "?resource=").concat(Ee.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call removeChatRoomAdmin", S), a.hj.call(this, Be, o.fI.REMOVE_CHATROOM_ADMIN);
        }
        function j(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof S.username != "string" || S.username === "")
            throw Error('Invalid parameter: "username"');
          if (typeof S.muteDuration != "number")
            throw Error('Invalid parameter: "muteDuration"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = { usernames: [S.username], mute_duration: S.muteDuration }, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/mute?resource=").concat(Ee.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, data: JSON.stringify(xe), success: S.success, error: S.error };
          return s.kg.debug("Call muteChatRoomMember", S), a.hj.call(this, Be, o.fI.MUTE_CHATROOM_MEMBER);
        }
        function P(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof S.username != "string" || S.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = S.username, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/mute/").concat(xe, "?resource=").concat(Ee.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call unmuteChatRoomMember", S), a.hj.call(this, Be, o.fI.REMOVE_MUTE_CHATROOM_MEMBER);
        }
        var W = P;
        function Z(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = S.chatRoomId, Se = { url: this.apiUrl + "/" + ue + "/" + K + "/chatrooms/" + Ee + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call getChatRoomMutelist", S), a.hj.call(this, Se, o.fI.GET_MUTE_CHATROOM_MEMBERS);
        }
        var ee = Z, G = Z;
        function le(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof S.username != "string" || S.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = S.username, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/blocks/users/").concat(xe, "?resource=").concat(Ee.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call blockChatRoomMember", S), a.hj.call(this, Be, o.fI.SET_CHATROOM_MEMBER_TO_BLACK);
        }
        var ce = le;
        function _e(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(S.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = { usernames: S.usernames }, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/blocks/users?resource=").concat(Ee.clientResource), data: JSON.stringify(xe), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Chat blockChatRoomMembers:", Be), a.hj.call(this, Be, o.fI.MULTI_SET_CHATROOM_MEMBER_TO_BLACK);
        }
        var Ue = _e;
        function ve(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof S.username != "string" || S.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = S.username, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/blocks/users/").concat(xe, "?resource=").concat(Ee.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call unblockChatRoomMember", S), a.hj.call(this, Be, o.fI.REMOVE_CHATROOM_MEMBER_BLACK);
        }
        var ye = ve;
        function Pe(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(S.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = S.usernames.join(","), Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/blocks/users/").concat(xe, "?resource=").concat(Ee.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call unblockChatRoomMembers", S), a.hj.call(this, Be, o.fI.MULTI_REMOVE_CHATROOM_MEMBER_BLACK);
        }
        var We = Pe;
        function ke(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = S.chatRoomId, Se = { url: this.apiUrl + "/" + ue + "/" + K + "/chatrooms/" + Ee + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call getChatRoomBlocklist", S), a.hj.call(this, Se, o.fI.GET_CHATROOM_BLOCK_MEMBERS);
        }
        var Ve = ke, se = ke;
        function He(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/ban?resource=").concat(Ee.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call disableSendChatRoomMsg", S), a.hj.call(this, xe, o.fI.DISABLED_CHATROOM_SEND_MSG);
        }
        function Xe(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/ban?resource=").concat(Ee.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call enableSendChatRoomMsg", S), a.hj.call(this, xe, o.fI.ENABLE_CHATROOM_SEND_MSG);
        }
        function nt(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(S.users))
            throw Error('Invalid parameter: "users"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = { usernames: S.users }, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/white/users?resource=").concat(Ee.clientResource), type: "POST", data: JSON.stringify(xe), dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call addUsersToChatRoomWhitelist", S), a.hj.call(this, Be, o.fI.ADD_USERS_TO_CHATROOM);
        }
        var te = nt;
        function $e(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof S.userName != "string" || S.userName === "")
            throw Error('Invalid parameter: "userName"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.chatRoomId, xe = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/white/users/").concat(S.userName, "?resource=").concat(Ee.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call removeChatRoomAllowlistMember", S), a.hj.call(this, xe, o.fI.REMOVE_CHATROOM_WHITE_USERS);
        }
        var Me = $e, rt = $e;
        function ot(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = S.chatRoomId, Se = { url: this.apiUrl + "/" + ue + "/" + K + "/chatrooms/" + Ee + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call getChatRoomAllowlist", S), a.hj.call(this, Se, o.fI.GET_CHATROOM_WHITE_USERS);
        }
        var it = ot;
        function ct(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof S.userName != "string" || S.userName === "")
            throw Error('Invalid parameter: "userName"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = S.chatRoomId, Se = { url: this.apiUrl + "/" + ue + "/" + K + "/chatrooms/" + Ee + "/white/users/" + S.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call isInChatRoomAllowlist", S), a.hj.call(this, Se, o.fI.CHECK_CHATROOM_WHITE_USER);
        }
        var Ne = ct;
        function ze(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.userId, Se = { url: this.apiUrl + "/" + ue + "/" + K + "/sdk/chatrooms/" + S.chatRoomId + "/mute/" + Ee, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + de } };
          return s.kg.debug("Call isInChatRoomMutelist", S), a.hj.call(this, Se).then(function(xe) {
            return xe.data;
          });
        }
        function Ye(S) {
          if (typeof S.roomId != "string" || S.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = S.roomId, Se = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Ee, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call fetchChatRoomAnnouncement", S), a.hj.call(this, Se, o.fI.GET_CHATROOM_ANN);
        }
        function qe(S) {
          if (typeof S.roomId != "string" || S.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (typeof S.announcement != "string")
            throw Error('Invalid parameter: "announcement"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.roomId, xe = { announcement: S.announcement }, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/announcement?resource=").concat(Ee.clientResource), type: "POST", dataType: "json", data: JSON.stringify(xe), headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call updateChatRoomAnnouncement:", S), a.hj.call(this, Be, o.fI.UPDATE_CHATROOM_ANN);
        }
        function Oe(S) {
          if (typeof S.roomId != "string" || S.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (n(S.file) !== "object")
            throw Error('Invalid parameter: "file"');
          if (i.XZ.call(this)) {
            var X = this.context, B = X.orgName, ue = X.appName, K = X.accessToken, de = X.jid, Ee = S.roomId;
            a.cT.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(B, "/").concat(ue, "/chatrooms/").concat(Ee, "/share_files?resource=").concat(de.clientResource), onFileUploadProgress: S.onFileUploadProgress, onFileUploadComplete: S.onFileUploadComplete, onFileUploadError: S.onFileUploadError, onFileUploadCanceled: S.onFileUploadCanceled, accessToken: K, apiUrl: this.apiUrl, file: S.file, appKey: this.context.appKey }, o.fI.UPLOAD_CHATROOM_FILE), s.kg.debug("Call uploadChatRoomSharedFile", S);
          }
        }
        function w(S) {
          if (typeof S.roomId != "string" || S.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (typeof S.fileId != "string" || S.fileId === "")
            throw Error('Invalid parameter: "fileId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.jid, Se = S.roomId, xe = S.fileId, Be = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Se, "/share_files/").concat(xe, "?resource=").concat(Ee.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call deleteChatRoomSharedFile", S), a.hj.call(this, Be, o.fI.DELETE_CHATROOM_FILE);
        }
        function z(S) {
          if (typeof S.roomId != "string" || S.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = S.roomId, Se = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/chatrooms/").concat(Ee, "/share_files"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + de, "Content-Type": "application/json", accept: "application/json" }, success: S.success, error: S.error };
          return s.kg.debug("Call fetchChatRoomSharedFileList", S), a.hj.call(this, Se, o.fI.GET_CHATROOM_FILES);
        }
        var re = z;
        function q(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + S.chatRoomId);
          if (S.attributeKeys && !Array.isArray(S.attributeKeys))
            throw Error('"Invalid parameter attributeKeys": ' + S.attributeKeys);
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = (B.jid, S.chatRoomId), Se = { keys: S.attributeKeys }, xe = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/metadata/chatroom/").concat(Ee), type: "POST", dataType: "json", data: JSON.stringify(Se), headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" } };
          return s.kg.debug("Call getChatRoomAttributes:", S), a.hj.call(this, xe, o.fI.GET_CHATROOM_ATTR).then(function(Be) {
            return { data: Be.data, type: Be.type };
          });
        }
        function ie(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + S.chatRoomId);
          if (n(S.attributes) !== "object")
            throw Error("Invalid parameter attributes: " + S.attributes);
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.userId, Se = S.chatRoomId, xe = S.attributes, Be = S.autoDelete, ut = Be === void 0 || Be, lt = S.isForced ? "/forced" : "", pt = { metaData: xe, autoDelete: ut ? "DELETE" : "NO_DELETE" }, mt = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/metadata/chatroom/").concat(Se, "/user/").concat(Ee) + lt, type: "PUT", dataType: "json", data: JSON.stringify(pt), headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" } };
          return s.kg.debug("Call setChatRoomAttributes:", S), a.hj.call(this, mt, o.fI.SET_CHATROOM_ATTR).then(function(yt) {
            return (0, i._W)(yt);
          });
        }
        function Ie(S) {
          var X;
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + S.chatRoomId);
          if (typeof S.attributeKey != "string" || S.attributeKey === "")
            throw Error("Invalid parameter attributeKey: " + S.attributeKey);
          if (typeof S.attributeValue != "string" || S.attributeValue === "")
            throw Error("Invalid parameter attributeValue: " + S.attributeValue);
          if (!i.XZ.call(this)) {
            var B = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(B);
          }
          var ue = this.context, K = ue.orgName, de = ue.appName, Ee = ue.accessToken, Se = ue.userId, xe = S.chatRoomId, Be = S.attributeKey, ut = S.attributeValue, lt = S.autoDelete, pt = lt === void 0 || lt, mt = S.isForced ? "/forced" : "", yt = { metaData: (X = {}, X[Be] = ut, X), autoDelete: pt ? "DELETE" : "NO_DELETE" }, Ot = { url: "".concat(this.apiUrl, "/").concat(K, "/").concat(de, "/metadata/chatroom/").concat(xe, "/user/").concat(Se) + mt, type: "PUT", dataType: "json", data: JSON.stringify(yt), headers: { Authorization: "Bearer " + Ee, "Content-Type": "application/json" } };
          return s.kg.debug("Call setChatRoomAttribute:", S), a.hj.call(this, Ot, o.fI.SET_CHATROOM_ATTR).then(function(At) {
            var bt = (0, i.H7)(At);
            if (bt)
              throw bt;
          });
        }
        function pe(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + S.chatRoomId);
          if (!Array.isArray(S.attributeKeys))
            throw Error('"Invalid parameter attributes": ' + S.attributeKeys);
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.userId, Se = S.chatRoomId, xe = S.attributeKeys, Be = S.isForced ? "/forced" : "", ut = { keys: xe }, lt = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/metadata/chatroom/").concat(Se, "/user/").concat(Ee) + Be, type: "DELETE", dataType: "json", data: JSON.stringify(ut), headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" } };
          return s.kg.debug("Call removeChatRoomAttributes:", S), a.hj.call(this, lt, o.fI.DELETE_CHATROOM_ATTR).then(function(pt) {
            return (0, i._W)(pt);
          });
        }
        function fe(S) {
          if (typeof S.chatRoomId != "string" || S.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + S.chatRoomId);
          if (typeof S.attributeKey != "string" || S.attributeKey === "")
            throw Error('"Invalid parameter attributeKey": ' + S.attributeKey);
          if (!i.XZ.call(this)) {
            var X = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(X);
          }
          var B = this.context, ue = B.orgName, K = B.appName, de = B.accessToken, Ee = B.userId, Se = S.chatRoomId, xe = S.attributeKey, Be = S.isForced ? "/forced" : "", ut = { keys: [xe] }, lt = { url: "".concat(this.apiUrl, "/").concat(ue, "/").concat(K, "/metadata/chatroom/").concat(Se, "/user/").concat(Ee) + Be, type: "DELETE", dataType: "json", data: JSON.stringify(ut), headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" } };
          return s.kg.debug("Call removeChatRoomAttribute:", S), a.hj.call(this, lt, o.fI.DELETE_CHATROOM_ATTR).then(function(pt) {
            var mt = (0, i.H7)(pt);
            if (mt)
              throw mt;
          });
        }
      }, 4363: function(p, _, e) {
        e.d(_, { w: function() {
          return a;
        } }), e(9601), e(2772);
        var r = e(7360), t = function() {
          return t = Object.assign || function(i) {
            for (var s, o = 1, n = arguments.length; o < n; o++)
              for (var u in s = arguments[o])
                Object.prototype.hasOwnProperty.call(s, u) && (i[u] = s[u]);
            return i;
          }, t.apply(this, arguments);
        };
        function a(i) {
          var s, o, n = i.id, u = i.payload, c = i.timestamp, h = i.to, m = u.bodies && u.bodies.length > 0 ? u.bodies[0] : {}, f = {}, g = {}, d = u.type ? u.type : h.indexOf("@conference.easemob.com") > -1 ? "groupChat" : "singleChat";
          switch (d = d === "chat" ? "singleChat" : d, m.type) {
            case "txt":
              f = { id: n, type: "txt", chatType: d, msg: m.msg || "", to: u.to || "", from: u.from, time: c, ext: u.ext };
              break;
            case "img":
              f = { id: n, type: "img", chatType: d, to: u.to, from: u.from, time: c, ext: u.ext, width: ((s = m.size) === null || s === void 0 ? void 0 : s.width) || 0, height: ((o = m.size) === null || o === void 0 ? void 0 : o.height) || 0, secret: m.secret || "", url: (m == null ? void 0 : m.url) || "", file_length: m.file_length || 0, file: {} };
              break;
            case "video":
              f = { id: n, type: "video", chatType: d, from: u.from, to: u.to, url: (m == null ? void 0 : m.url) || "", secret: m.secret || "", filename: m.filename, length: m.length || 0, file: {}, file_length: m.file_length || 0, filetype: u.ext.file_type || "", ext: u.ext, time: c };
              break;
            case "loc":
              f = { id: n, type: "loc", chatType: d, from: u.from, to: u.to, buildingName: m.buildingName || "", addr: m.addr, lat: m.lat, lng: m.lng, ext: u.ext, time: c };
              break;
            case "audio":
              f = { id: n, type: "audio", chatType: d, from: u.from, to: u.to, secret: m.secret || "", ext: u.ext, time: c, url: (m == null ? void 0 : m.url) || "", file: {}, filename: m.filename, length: m.length || 0, file_length: m.file_length || 0, filetype: u.ext.file_type || "" };
              break;
            case "file":
              f = { id: n, type: "file", chatType: d, from: u.from, to: u.to, ext: u.ext, time: c, url: (m == null ? void 0 : m.url) || "", secret: m.secret || "", file: {}, filename: m.filename || "", file_length: m.file_length || 0, filetype: u.ext.file_type || "" };
              break;
            case "cmd":
              f = { id: n, type: "cmd", chatType: d, from: u.from, to: u.to, ext: u.ext, time: c, action: m.action || "" };
              break;
            case "custom":
              f = { id: n, type: "custom", chatType: d, from: u.from, to: u.to, ext: u.ext, time: c, customEvent: m.customEvent || "", customExts: m.customExts || "" };
              break;
            default:
              r.kg.error("unexpected message: ".concat(i));
          }
          if (u.msgConfig && (g.msgConfig = u.msgConfig), u == null ? void 0 : u.meta) {
            var l = u.meta;
            l.thread && (g.chatThread = { messageId: l.thread.msg_parent_id, parentId: l.thread.muc_parent_id, chatThreadName: l.thread.thread_name }), l.reactions && (g.reactions = l.reactions), l.translations && (g.translations = l.translations);
          }
          return t(t({}, f), g);
        }
      }, 2856: function(p, _, e) {
        e.r(_), e.d(_, { acceptGroupInvite: function() {
          return Ve;
        }, acceptGroupJoinRequest: function() {
          return ye;
        }, addUsersToGroupAllowlist: function() {
          return ue;
        }, addUsersToGroupWhitelist: function() {
          return B;
        }, agreeInviteIntoGroup: function() {
          return ke;
        }, agreeJoinGroup: function() {
          return ve;
        }, blockGroup: function() {
          return f;
        }, blockGroupMember: function() {
          return qe;
        }, blockGroupMembers: function() {
          return w;
        }, blockGroupMessages: function() {
          return g;
        }, changeGroupOwner: function() {
          return O;
        }, changeOwner: function() {
          return I;
        }, createGroup: function() {
          return m;
        }, createGroupNew: function() {
          return h;
        }, deleteGroupSharedFile: function() {
          return bt;
        }, destroyGroup: function() {
          return ee;
        }, disableSendGroupMsg: function() {
          return S;
        }, dissolveGroup: function() {
          return Z;
        }, downloadGroupSharedFile: function() {
          return It;
        }, enableSendGroupMsg: function() {
          return X;
        }, fetchGroupAnnouncement: function() {
          return yt;
        }, fetchGroupSharedFileList: function() {
          return Rt;
        }, getGroup: function() {
          return E;
        }, getGroupAdmin: function() {
          return A;
        }, getGroupAllowlist: function() {
          return xe;
        }, getGroupBlacklist: function() {
          return pe;
        }, getGroupBlacklistNew: function() {
          return Ie;
        }, getGroupBlocklist: function() {
          return fe;
        }, getGroupInfo: function() {
          return C;
        }, getGroupMemberAttributes: function() {
          return vt;
        }, getGroupMembersAttributes: function() {
          return Et;
        }, getGroupMsgReadUser: function() {
          return mt;
        }, getGroupMuteList: function() {
          return Ne;
        }, getGroupMutelist: function() {
          return ze;
        }, getGroupSharedFilelist: function() {
          return ht;
        }, getGroupWhitelist: function() {
          return Se;
        }, getJoinedGroups: function() {
          return T;
        }, getMuted: function() {
          return ct;
        }, getPublicGroups: function() {
          return l;
        }, groupBlockMulti: function() {
          return Oe;
        }, groupBlockSingle: function() {
          return Ye;
        }, inviteToGroup: function() {
          return ce;
        }, inviteUsersToGroup: function() {
          return _e;
        }, isGroupWhiteUser: function() {
          return Be;
        }, isInGroupAllowlist: function() {
          return lt;
        }, isInGroupMutelist: function() {
          return pt;
        }, isInGroupWhiteList: function() {
          return ut;
        }, joinGroup: function() {
          return Ue;
        }, leaveGroup: function() {
          return le;
        }, listGroupMember: function() {
          return v;
        }, listGroupMembers: function() {
          return y;
        }, listGroups: function() {
          return d;
        }, modifyGroup: function() {
          return N;
        }, mute: function() {
          return Me;
        }, muteGroupMember: function() {
          return rt;
        }, quitGroup: function() {
          return G;
        }, rejectGroupInvite: function() {
          return He;
        }, rejectGroupJoinRequest: function() {
          return We;
        }, rejectInviteIntoGroup: function() {
          return se;
        }, rejectJoinGroup: function() {
          return Pe;
        }, removeAdmin: function() {
          return P;
        }, removeGroupAdmin: function() {
          return W;
        }, removeGroupAllowlistMember: function() {
          return Ee;
        }, removeGroupBlockMulti: function() {
          return q;
        }, removeGroupBlockSingle: function() {
          return z;
        }, removeGroupMember: function() {
          return nt;
        }, removeGroupMembers: function() {
          return $e;
        }, removeGroupWhitelistMember: function() {
          return de;
        }, removeMultiGroupMember: function() {
          return te;
        }, removeMute: function() {
          return ot;
        }, removeSingleGroupMember: function() {
          return Xe;
        }, rmUsersFromGroupWhitelist: function() {
          return K;
        }, setAdmin: function() {
          return x;
        }, setGroupAdmin: function() {
          return j;
        }, setGroupMemberAttributes: function() {
          return Tt;
        }, unblockGroupMember: function() {
          return re;
        }, unblockGroupMembers: function() {
          return ie;
        }, unmuteGroupMember: function() {
          return it;
        }, updateGroupAnnouncement: function() {
          return Ot;
        }, uploadGroupSharedFile: function() {
          return At;
        } }), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(2222), e(6699), e(2023), e(9554), e(4747), e(8309), e(9753), e(9600);
        var r = e(5531), t = e(7252), a = e(4370), i = e(3246), s = e(7360), o = e(1595);
        function n(M) {
          return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Re) {
            return typeof Re;
          } : function(Re) {
            return Re && typeof Symbol == "function" && Re.constructor === Symbol && Re !== Symbol.prototype ? "symbol" : typeof Re;
          }, n(M);
        }
        var u = function(M, Re, V, Ce) {
          return new (V || (V = Promise))(function(Te, H) {
            function J(ae) {
              try {
                we(Ce.next(ae));
              } catch (Je) {
                H(Je);
              }
            }
            function ne(ae) {
              try {
                we(Ce.throw(ae));
              } catch (Je) {
                H(Je);
              }
            }
            function we(ae) {
              var Je;
              ae.done ? Te(ae.value) : (Je = ae.value, Je instanceof V ? Je : new V(function(st) {
                st(Je);
              })).then(J, ne);
            }
            we((Ce = Ce.apply(M, Re || [])).next());
          });
        }, c = function(M, Re) {
          var V, Ce, Te, H, J = { label: 0, sent: function() {
            if (1 & Te[0])
              throw Te[1];
            return Te[1];
          }, trys: [], ops: [] };
          return H = { next: ne(0), throw: ne(1), return: ne(2) }, typeof Symbol == "function" && (H[Symbol.iterator] = function() {
            return this;
          }), H;
          function ne(we) {
            return function(ae) {
              return function(Je) {
                if (V)
                  throw new TypeError("Generator is already executing.");
                for (; H && (H = 0, Je[0] && (J = 0)), J; )
                  try {
                    if (V = 1, Ce && (Te = 2 & Je[0] ? Ce.return : Je[0] ? Ce.throw || ((Te = Ce.return) && Te.call(Ce), 0) : Ce.next) && !(Te = Te.call(Ce, Je[1])).done)
                      return Te;
                    switch (Ce = 0, Te && (Je = [2 & Je[0], Te.value]), Je[0]) {
                      case 0:
                      case 1:
                        Te = Je;
                        break;
                      case 4:
                        return J.label++, { value: Je[1], done: !1 };
                      case 5:
                        J.label++, Ce = Je[1], Je = [0];
                        continue;
                      case 7:
                        Je = J.ops.pop(), J.trys.pop();
                        continue;
                      default:
                        if (!((Te = (Te = J.trys).length > 0 && Te[Te.length - 1]) || Je[0] !== 6 && Je[0] !== 2)) {
                          J = 0;
                          continue;
                        }
                        if (Je[0] === 3 && (!Te || Je[1] > Te[0] && Je[1] < Te[3])) {
                          J.label = Je[1];
                          break;
                        }
                        if (Je[0] === 6 && J.label < Te[1]) {
                          J.label = Te[1], Te = Je;
                          break;
                        }
                        if (Te && J.label < Te[2]) {
                          J.label = Te[2], J.ops.push(Je);
                          break;
                        }
                        Te[2] && J.ops.pop(), J.trys.pop();
                        continue;
                    }
                    Je = Re.call(M, J);
                  } catch (st) {
                    Je = [6, st], Ce = 0;
                  } finally {
                    V = Te = 0;
                  }
                if (5 & Je[0])
                  throw Je[1];
                return { value: Je[0] ? Je[1] : void 0, done: !0 };
              }([we, ae]);
            };
          }
        };
        function h(M) {
          if (!M || !M.data)
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups?resource=").concat(J.clientResource), dataType: "json", type: "POST", data: JSON.stringify({ owner: this.user, groupname: M.data.groupname, desc: M.data.desc, members: M.data.members, public: M.data.public, approval: M.data.approval, allowinvites: M.data.allowinvites, invite_need_confirm: M.data.inviteNeedConfirm, maxusers: M.data.maxusers, custom: M.data.ext }), headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: function(we) {
            M.success && M.success(we);
          }, error: M.error };
          return s.kg.debug("Call createGroup:", M), a.hj.call(this, ne, o.fI.CREATE_GROUP);
        }
        var m = h;
        function f(M) {
          var Re;
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var V = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(V);
          }
          var Ce = this.context, Te = Ce.orgName, H = Ce.appName, J = Ce.accessToken, ne = Ce.jid, we = { entities: [(Re = {}, Re["notification_ignore_" + M.groupId] = !0, Re)] }, ae = { type: "PUT", url: "".concat(this.apiUrl, "/").concat(Te, "/").concat(H, "/users/").concat(this.user, "?resource=").concat(ne.clientResource), data: JSON.stringify(we), dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call blockGroupMessages", M), a.hj.call(this, ae, o.fI.BLOCK_GROUP);
        }
        var g = f;
        function d(M) {
          if (typeof M.limit != "number")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = { limit: M.limit, cursor: M.cursor };
          M.cursor || delete J.cursor;
          var ne = { url: this.apiUrl + "/" + Ce + "/" + Te + "/publicchatgroups", type: "GET", dataType: "json", data: J, headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call listGroups", M), a.hj.call(this, ne, o.fI.LIST_GROUP);
        }
        var l = d;
        function E(M) {
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = { url: this.apiUrl + "/" + Ce + "/" + Te + "/users/" + this.user + "/joined_chatgroups", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M && (M == null ? void 0 : M.success), error: M && (M == null ? void 0 : M.error) };
          return s.kg.debug("Call getJoinedGroups", M), a.hj.call(this, J, o.fI.GET_USER_GROUP);
        }
        function T(M) {
          if (typeof M.pageNum != "number" || typeof M.pageSize != "number")
            throw Error('Invalid parameter: "pageNum or pageSize"');
          if (M.pageNum < 0 || M.pageSize < 0)
            throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = M.needAffiliations || M.needRole ? "/chatgroups/user/".concat(this.user, "?pagenum=").concat(M.pageNum, "&pagesize=").concat(M.pageSize, "&needAffiliations=").concat(M.needAffiliations, "&needRole=").concat(M.needRole) : "/users/".concat(this.user, "/joined_chatgroups?pagenum=").concat(M.pageNum, "&pagesize=").concat(M.pageSize), ne = { url: this.apiUrl + "/" + Ce + "/" + Te + J, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M && (M == null ? void 0 : M.success), error: M && (M == null ? void 0 : M.error) };
          return s.kg.debug("Call getGroup", M), a.hj.call(this, ne, o.fI.GET_USER_GROUP).then(function(we) {
            var ae = we.uri, Je = we.entities, st = [];
            return ae.includes("joined_chatgroups") || (Je.forEach(function(Qe) {
              var me = { affiliationsCount: Qe.affiliations_count, groupName: Qe.name, groupId: Qe.groupId, role: Qe.permission, disabled: Qe.disabled, approval: Qe.membersonly, allowInvites: Qe.allowinvites, description: Qe.description, maxUsers: Qe.maxusers, public: Qe.public };
              st.push(me);
            }), we.entities = st), we;
          });
        }
        function I(M) {
          if (typeof M.groupId != "string" || typeof M.newOwner != "string")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = { newowner: M.newOwner }, Ce = this.context, Te = Ce.orgName, H = Ce.appName, J = Ce.accessToken, ne = Ce.jid, we = { url: "".concat(this.apiUrl, "/").concat(Te, "/").concat(H, "/chatgroups/").concat(M.groupId, "?resource=").concat(ne.clientResource), type: "PUT", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, data: JSON.stringify(V), success: M.success, error: M.error };
          return s.kg.debug("Call changeOwner", M), a.hj.call(this, we, o.fI.CHANGE_OWNER);
        }
        var O = I;
        function C(M) {
          if (typeof M.groupId != "string" && !Array.isArray(M.groupId))
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = { url: this.apiUrl + "/" + Ce + "/" + Te + "/chatgroups/" + M.groupId + "?joined_time=true", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call getGroupInfo", M), a.hj.call(this, J, o.fI.GET_GROUP_INFO);
        }
        function N(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error("Invalid parameter");
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { groupname: M.groupName, description: M.description, custom: M.ext }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "?resource=").concat(J.clientResource), type: "PUT", data: JSON.stringify(we), dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call modifyGroup", M), a.hj.call(this, ae, o.fI.MODIFY_GROUP);
        }
        function v(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (isNaN(M.pageNum) || M.pageNum <= 0)
            throw Error('The parameter "pageNum" should be a positive number');
          if (isNaN(M.pageSize) || M.pageSize <= 0)
            throw Error('The parameter "pageSize" should be a positive number');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = { pagenum: M.pageNum, pagesize: M.pageSize }, Ce = this.context, Te = Ce.orgName, H = Ce.appName, J = Ce.accessToken, ne = { url: this.apiUrl + "/" + Te + "/" + H + "/chatgroups/" + M.groupId + "/users", dataType: "json", type: "GET", data: V, headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call listGroupMember", M), a.hj.call(this, ne, o.fI.LIST_GROUP_MEMBER);
        }
        var y = v;
        function A(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = M.groupId, ne = { url: this.apiUrl + "/" + Ce + "/" + Te + "/chatgroups/" + J + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call getGroupAdmin", M), a.hj.call(this, ne, o.fI.GET_GROUP_ADMIN);
        }
        function x(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.username != "string" || M.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { newadmin: M.username }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/admin?resource=").concat(J.clientResource), type: "POST", dataType: "json", data: JSON.stringify(we), headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call setGroupAdmin", M), a.hj.call(this, ae, o.fI.SET_GROUP_ADMIN);
        }
        var j = x;
        function P(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.username != "string" || M.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = M.username, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/admin/").concat(we, "?resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call removeAdmin", M), a.hj.call(this, ae, o.fI.REMOVE_GROUP_ADMIN);
        }
        var W = P;
        function Z(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "?version=v3&resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call destroyGroup", M), a.hj.call(this, we, o.fI.DISSOLVE_GROUP);
        }
        var ee = Z;
        function G(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/quit?resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call quitGroup", M), a.hj.call(this, we, o.fI.QUIT_GROUP);
        }
        var le = G;
        function ce(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(M.users))
            throw Error('Invalid parameter: "users"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = M.groupId, Ce = { usernames: M.users }, Te = this.context, H = Te.orgName, J = Te.appName, ne = Te.accessToken, we = Te.jid, ae = { url: "".concat(this.apiUrl, "/").concat(H, "/").concat(J, "/chatgroups/").concat(V, "/invite?resource=").concat(we.clientResource), type: "POST", data: JSON.stringify(Ce), dataType: "json", headers: { Authorization: "Bearer " + ne, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call inviteUsersToGroup", M), a.hj.call(this, ae, o.fI.INVITE_TO_GROUP);
        }
        var _e = ce;
        function Ue(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(M.groupId, "/apply?resource=").concat(J.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ message: M.message || "" }), headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call joinGroup", M), a.hj.call(this, ne, o.fI.JOIN_GROUP);
        }
        function ve(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.applicant != "string" || M.applicant === "")
            throw Error('Invalid parameter: "applicant"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { applicant: M.applicant, verifyResult: !0, reason: "no clue" }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/apply_verify?resource=").concat(J.clientResource), type: "POST", dataType: "json", data: JSON.stringify(we), headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call agreeJoinGroup", M), a.hj.call(this, ae, o.fI.AGREE_JOIN_GROUP);
        }
        var ye = ve;
        function Pe(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.applicant != "string" || M.applicant === "")
            throw Error('Invalid parameter: "applicant"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { applicant: M.applicant, verifyResult: !1, reason: M.reason || "" }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/apply_verify?resource=").concat(J.clientResource), type: "POST", dataType: "json", data: JSON.stringify(we), headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call rejectGroupJoinRequest", M), a.hj.call(this, ae, o.fI.REJECT_JOIN_GROUP);
        }
        var We = Pe;
        function ke(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.invitee != "string" || M.invitee === "")
            throw Error('Invalid parameter: "invitee"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { invitee: M.invitee, verifyResult: !0 }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/invite_verify?resource=").concat(J.clientResource), type: "POST", dataType: "json", data: JSON.stringify(we), headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call acceptGroupInvite", M), a.hj.call(this, ae, o.fI.AGREE_INVITE_GROUP);
        }
        var Ve = ke;
        function se(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.invitee != "string" || M.invitee === "")
            throw Error('Invalid parameter: "invitee"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { invitee: M.invitee, verifyResult: !1 }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/invite_verify?resource=").concat(J.clientResource), type: "POST", dataType: "json", data: JSON.stringify(we), headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call rejectGroupInvite", M), a.hj.call(this, ae, o.fI.REJECT_INVITE_GROUP);
        }
        var He = se;
        function Xe(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.username != "string" || M.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = M.groupId, Ce = M.username, Te = this.context, H = Te.orgName, J = Te.appName, ne = Te.accessToken, we = Te.jid, ae = { url: "".concat(this.apiUrl, "/").concat(H, "/").concat(J, "/chatgroups/").concat(V, "/users/").concat(Ce, "?resource=").concat(we.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + ne, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call removeGroupMember", M), a.hj.call(this, ae, o.fI.REMOVE_GROUP_MEMBER);
        }
        var nt = Xe;
        function te(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(M.users))
            throw Error('Invalid parameter: "users"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = M.users.join(","), ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/users/").concat(we, "?resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call removeGroupMembers", M), a.hj.call(this, ae, o.fI.MULTI_REMOVE_GROUP_MEMBER);
        }
        var $e = te;
        function Me(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!(Array.isArray(M.username) || typeof M.username == "string" && M.username !== ""))
            throw Error('Invalid parameter: "username"');
          if (typeof M.muteDuration != "number")
            throw Error('Invalid parameter: "muteDuration"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { usernames: typeof M.username == "string" ? [M.username] : M.username, mute_duration: M.muteDuration }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/mute?resource=").concat(J.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, data: JSON.stringify(we), success: M.success, error: M.error };
          return s.kg.debug("Call muteGroupMember", M), a.hj.call(this, ae, o.fI.MUTE_GROUP_MEMBER);
        }
        var rt = Me;
        function ot(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!(Array.isArray(M.username) || typeof M.username == "string" && M.username !== ""))
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = M.username, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/mute/").concat(we, "?resource=").concat(J.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call unmuteGroupMember", M), a.hj.call(this, ae, o.fI.UNMUTE_GROUP_MEMBER);
        }
        var it = ot;
        function ct(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = M.groupId, ne = { url: this.apiUrl + "/" + Ce + "/" + Te + "/chatgroups/" + J + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call getGroupMuteList", M), a.hj.call(this, ne, o.fI.GET_GROUP_MUTE_LIST);
        }
        var Ne = ct, ze = ct;
        function Ye(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.username != "string" || M.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = M.username, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/blocks/users/").concat(we, "?resource=").concat(J.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call blockGroupMember", M), a.hj.call(this, ae, o.fI.BLOCK_GROUP_MEMBER);
        }
        var qe = Ye;
        function Oe(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(M.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { usernames: M.usernames }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/blocks/users?resource=").concat(J.clientResource), data: JSON.stringify(we), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call blockGroupMembers", M), a.hj.call(this, ae, o.fI.BLOCK_GROUP_MEMBERS);
        }
        var w = Oe;
        function z(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.username != "string" || M.username === "")
            throw Error('Invalid parameter: "username"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = M.username, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/blocks/users/").concat(we, "?resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call unblockGroupMember", M), a.hj.call(this, ae, o.fI.UNBLOCK_GROUP_MEMBER);
        }
        var re = z;
        function q(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(M.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = M.usernames.join(","), ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/blocks/users/").concat(we, "?resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call unblockGroupMembers", M), a.hj.call(this, ae, o.fI.UNBLOCK_GROUP_MEMBERS);
        }
        var ie = q;
        function Ie(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = M.groupId, ne = { url: this.apiUrl + "/" + Ce + "/" + Te + "/chatgroups/" + J + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call getGroupBlacklist", M), a.hj.call(this, ne, o.fI.GET_GROUP_BLACK_LIST);
        }
        var pe = Ie, fe = Ie;
        function S(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/ban?resource=").concat(J.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call disableSendGroupMsg", M), a.hj.call(this, we, o.fI.DISABLED_SEND_GROUP_MSG);
        }
        function X(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/ban?resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call enableSendGroupMsg", M), a.hj.call(this, we, o.fI.ENABLE_SEND_GROUP_MSG);
        }
        function B(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(M.users))
            throw Error('Invalid parameter: "users"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { usernames: M.users }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/white/users?resource=").concat(J.clientResource), type: "POST", data: JSON.stringify(we), dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call addUsersToGroupWhitelist", M), a.hj.call(this, ae, o.fI.ADD_USERS_TO_GROUP_WHITE);
        }
        var ue = B;
        function K(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.userName != "string" || M.userName === "")
            throw Error('Invalid parameter: "userName"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/white/users/").concat(M.userName, "?resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call removeGroupAllowlistMember", M), a.hj.call(this, we, o.fI.REMOVE_GROUP_WHITE_MEMBER);
        }
        var de = K, Ee = K;
        function Se(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = M.groupId, ne = { url: this.apiUrl + "/" + Ce + "/" + Te + "/chatgroups/" + J + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call getGroupAllowlist", M), a.hj.call(this, ne, o.fI.GET_GROUP_WHITE_LIST);
        }
        var xe = Se;
        function Be(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.userName != "string" || M.userName === "")
            throw Error('Invalid parameter: "userName"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = M.groupId, ne = { url: this.apiUrl + "/" + Ce + "/" + Te + "/chatgroups/" + J + "/white/users/" + M.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call isInGroupAllowlist", M), a.hj.call(this, ne, o.fI.IS_IN_GROUP_WHITE_LIST);
        }
        var ut = Be, lt = Be;
        function pt(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.userId, ne = { url: this.apiUrl + "/" + Ce + "/" + Te + "/sdk/group/" + M.groupId + "/mute/" + J, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + H } };
          return s.kg.debug("Call isInGroupMutelist", M), a.hj.call(this, ne).then(function(we) {
            return we.data;
          });
        }
        function mt(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.msgId != "string" || M.msgId === "")
            throw Error('Invalid parameter: "msgId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = { url: this.apiUrl + "/" + Ce + "/" + Te + "/chatgroups/" + M.groupId + "/acks/" + M.msgId, dataType: "json", type: "GET", data: { limit: 500, key: void 0 }, headers: { Authorization: "Bearer " + H }, success: M.success, error: M.error };
          return s.kg.debug("Call getGroupMsgReadUser", M), a.hj.call(this, J, o.fI.GET_GROUP_MSG_READ_USER);
        }
        function yt(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = M.groupId, ne = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(J, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call fetchGroupAnnouncement", M), a.hj.call(this, ne, o.fI.GET_GROUP_ANN);
        }
        function Ot(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.announcement != "string")
            throw Error('Invalid parameter: "announcement"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = { announcement: M.announcement }, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/announcement?resource=").concat(J.clientResource), type: "POST", dataType: "json", data: JSON.stringify(we), headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call updateGroupAnnouncement", M), a.hj.call(this, ae, o.fI.UPDATE_GROUP_ANN);
        }
        function At(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (n(M.file) !== "object")
            throw Error('Invalid parameter: "file"');
          if (i.XZ.call(this)) {
            var Re = this.context, V = Re.orgName, Ce = Re.appName, Te = Re.accessToken, H = Re.jid, J = M.groupId;
            a.cT.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(V, "/").concat(Ce, "/chatgroups/").concat(J, "/share_files?resource=").concat(H.clientResource), onFileUploadProgress: M.onFileUploadProgress, onFileUploadComplete: M.onFileUploadComplete, onFileUploadError: M.onFileUploadError, onFileUploadCanceled: M.onFileUploadCanceled, accessToken: Te, apiUrl: this.apiUrl, file: M.file, appKey: this.context.appKey }, o.fI.UPLOAD_GROUP_FILE), s.kg.debug("Call uploadGroupSharedFile", M);
          }
        }
        function bt(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof M.fileId != "string" || M.fileId === "")
            throw Error('Invalid parameter: "file"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = V.jid, ne = M.groupId, we = M.fileId, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(ne, "/share_files/").concat(we, "?resource=").concat(J.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call deleteGroupSharedFile", M), a.hj.call(this, ae, o.fI.DELETE_GROUP_FILE);
        }
        function Rt(M) {
          if (typeof M.groupId != "string" || M.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!i.XZ.call(this)) {
            var Re = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Re);
          }
          var V = this.context, Ce = V.orgName, Te = V.appName, H = V.accessToken, J = M.pageNum || 1, ne = M.pageSize || 10, we = M.groupId, ae = { url: "".concat(this.apiUrl, "/").concat(Ce, "/").concat(Te, "/chatgroups/").concat(we, "/share_files?pagenum=").concat(J, "&pagesize=").concat(ne), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" }, success: M.success, error: M.error };
          return s.kg.debug("Call getGroupSharedFilelist", M), a.hj.call(this, ae, o.fI.GET_GROUP_FILE_LIST);
        }
        var ht = Rt;
        function It(M) {
          var Re = this.context, V = Re.orgName, Ce = Re.appName, Te = Re.accessToken, H = this.apiUrl, J = M.groupId, ne = M.fileId;
          a.LR.call(this, { url: "".concat(H, "/").concat(V, "/").concat(Ce, "/chatgroups/").concat(J, "/share_files/").concat(ne), onFileDownloadComplete: M.onFileDownloadComplete, onFileDownloadError: M.onFileDownloadError, accessToken: Te, id: ne, secret: M.secret }, o.fI.DOWN_GROUP_FILE), s.kg.debug("Call downloadGroupSharedFile", M);
        }
        function Tt(M) {
          return u(this, void 0, void 0, function() {
            var Re, V, Ce, Te, H, J, ne, we, ae, Je, st;
            return c(this, function(Qe) {
              switch (Qe.label) {
                case 0:
                  if (Re = M.groupId, V = M.userId, Ce = M.memberAttributes, typeof Re != "string" || Re === "")
                    throw Error('Invalid parameter: "groupId"');
                  if (typeof V != "string" || V === "")
                    throw Error('Invalid parameter: "userId"');
                  if (n(Ce) !== "object")
                    throw Error('Invalid parameter: "memberAttributes"');
                  return i.XZ.call(this) ? (H = this.context, J = H.orgName, ne = H.appName, we = H.accessToken, ae = H.jid, Je = { metaData: Ce }, st = { url: "".concat(this.apiUrl, "/").concat(J, "/").concat(ne, "/sdk/metadata/chatgroup/").concat(Re, "/user/").concat(V, "?resource=").concat(ae.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(Je), headers: { Authorization: "Bearer " + we, "Content-Type": "application/json" } }, s.kg.debug("Call setGroupMemberAttributes", M), [4, a.hj.call(this, st, o.fI.SET_GROUP_MEMBER_ATTRS)]) : (Te = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(Te)]);
                case 1:
                  return Qe.sent(), [2];
              }
            });
          });
        }
        function vt(M) {
          var Re = M.groupId, V = M.userId;
          return Et.call(this, { groupId: Re, userIds: [V] }).then(function(Ce) {
            var Te;
            return { type: Ce.type, data: (Te = Ce.data) === null || Te === void 0 ? void 0 : Te[V] };
          });
        }
        function Et(M) {
          var Re = M.groupId, V = M.userIds, Ce = M.keys, Te = Ce === void 0 ? [] : Ce;
          if (typeof Re != "string" || Re === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(V) || (V == null ? void 0 : V.length) <= 0)
            throw Error('Invalid parameter: "userIds"');
          if (!Array.isArray(Te))
            throw Error('Invalid parameter: "keys"');
          if (!i.XZ.call(this)) {
            var H = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(H);
          }
          var J = this.context, ne = J.orgName, we = J.appName, ae = J.accessToken, Je = { targets: V, properties: Te }, st = { url: "".concat(this.apiUrl, "/").concat(ne, "/").concat(we, "/sdk/metadata/chatgroup/").concat(Re, "/get"), type: "POST", dataType: "json", data: JSON.stringify(Je), headers: { Authorization: "Bearer " + ae, "Content-Type": "application/json" } };
          return s.kg.debug("Call getGroupMembersAttributes", M), a.hj.call(this, st, o.fI.GET_GROUP_MEMBER_ATTR).then(function(Qe) {
            return { type: Qe.type, data: (Qe == null ? void 0 : Qe.data) || {} };
          });
        }
      }, 7479: function(p, _, e) {
        e.r(_), e.d(_, { acceptContactInvite: function() {
          return ye;
        }, acceptInvitation: function() {
          return ve;
        }, addContact: function() {
          return ce;
        }, addReaction: function() {
          return $e;
        }, addToBlackList: function() {
          return ke;
        }, addUsersToBlacklist: function() {
          return Ve;
        }, addUsersToBlocklist: function() {
          return se;
        }, declineContactInvite: function() {
          return We;
        }, declineInvitation: function() {
          return Pe;
        }, deleteContact: function() {
          return Ue;
        }, deleteConversation: function() {
          return A;
        }, deleteReaction: function() {
          return Me;
        }, deleteSession: function() {
          return y;
        }, fetchHistoryMessages: function() {
          return ee;
        }, fetchUserInfoById: function() {
          return P;
        }, getBlacklist: function() {
          return l;
        }, getBlocklist: function() {
          return E;
        }, getChatToken: function() {
          return Z;
        }, getContacts: function() {
          return I;
        }, getConversationlist: function() {
          return v;
        }, getHistoryMessages: function() {
          return le;
        }, getReactionDetail: function() {
          return it;
        }, getReactionList: function() {
          return rt;
        }, getReactionlist: function() {
          return ot;
        }, getRoster: function() {
          return T;
        }, getServerConversations: function() {
          return ze;
        }, getServerPinnedConversations: function() {
          return qe;
        }, getSessionList: function() {
          return N;
        }, pinConversation: function() {
          return Oe;
        }, recallMessage: function() {
          return te;
        }, removeFromBlackList: function() {
          return He;
        }, removeHistoryMessages: function() {
          return Ne;
        }, removeRoster: function() {
          return _e;
        }, removeUserFromBlackList: function() {
          return Xe;
        }, removeUserFromBlocklist: function() {
          return nt;
        }, reportMessage: function() {
          return ct;
        }, updateCurrentUserNick: function() {
          return W;
        }, updateOwnUserInfo: function() {
          return x;
        }, updateUserInfo: function() {
          return j;
        }, uploadPushToken: function() {
          return C;
        }, uploadToken: function() {
          return O;
        } }), e(9601), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(9554), e(4747), e(2222), e(7941), e(6699), e(3710), e(9714), e(9600), e(5069), e(561), e(9753), e(8309);
        var r = e(3246), t = e(5531), a = e(7252), i = e(4370), s = e(8161), o = e(4968), n = e(4188), u = e.n(n), c = e(7360), h = e(1595), m = e(4363), f = function() {
          return f = Object.assign || function(w) {
            for (var z, re = 1, q = arguments.length; re < q; re++)
              for (var ie in z = arguments[re])
                Object.prototype.hasOwnProperty.call(z, ie) && (w[ie] = z[ie]);
            return w;
          }, f.apply(this, arguments);
        }, g = function(w, z, re, q) {
          return new (re || (re = Promise))(function(ie, Ie) {
            function pe(X) {
              try {
                S(q.next(X));
              } catch (B) {
                Ie(B);
              }
            }
            function fe(X) {
              try {
                S(q.throw(X));
              } catch (B) {
                Ie(B);
              }
            }
            function S(X) {
              var B;
              X.done ? ie(X.value) : (B = X.value, B instanceof re ? B : new re(function(ue) {
                ue(B);
              })).then(pe, fe);
            }
            S((q = q.apply(w, z || [])).next());
          });
        }, d = function(w, z) {
          var re, q, ie, Ie, pe = { label: 0, sent: function() {
            if (1 & ie[0])
              throw ie[1];
            return ie[1];
          }, trys: [], ops: [] };
          return Ie = { next: fe(0), throw: fe(1), return: fe(2) }, typeof Symbol == "function" && (Ie[Symbol.iterator] = function() {
            return this;
          }), Ie;
          function fe(S) {
            return function(X) {
              return function(B) {
                if (re)
                  throw new TypeError("Generator is already executing.");
                for (; Ie && (Ie = 0, B[0] && (pe = 0)), pe; )
                  try {
                    if (re = 1, q && (ie = 2 & B[0] ? q.return : B[0] ? q.throw || ((ie = q.return) && ie.call(q), 0) : q.next) && !(ie = ie.call(q, B[1])).done)
                      return ie;
                    switch (q = 0, ie && (B = [2 & B[0], ie.value]), B[0]) {
                      case 0:
                      case 1:
                        ie = B;
                        break;
                      case 4:
                        return pe.label++, { value: B[1], done: !1 };
                      case 5:
                        pe.label++, q = B[1], B = [0];
                        continue;
                      case 7:
                        B = pe.ops.pop(), pe.trys.pop();
                        continue;
                      default:
                        if (!((ie = (ie = pe.trys).length > 0 && ie[ie.length - 1]) || B[0] !== 6 && B[0] !== 2)) {
                          pe = 0;
                          continue;
                        }
                        if (B[0] === 3 && (!ie || B[1] > ie[0] && B[1] < ie[3])) {
                          pe.label = B[1];
                          break;
                        }
                        if (B[0] === 6 && pe.label < ie[1]) {
                          pe.label = ie[1], ie = B;
                          break;
                        }
                        if (ie && pe.label < ie[2]) {
                          pe.label = ie[2], pe.ops.push(B);
                          break;
                        }
                        ie[2] && pe.ops.pop(), pe.trys.pop();
                        continue;
                    }
                    B = z.call(w, pe);
                  } catch (ue) {
                    B = [6, ue], q = 0;
                  } finally {
                    re = ie = 0;
                  }
                if (5 & B[0])
                  throw B[1];
                return { value: B[0] ? B[1] : void 0, done: !0 };
              }([S, X]);
            };
          }
        };
        function l(w) {
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = { url: this.apiUrl + "/" + q + "/" + ie + "/users/" + this.user + "/blocks/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + Ie }, success: function(fe) {
            fe.data.forEach(function(S) {
            }), typeof (w == null ? void 0 : w.success) == "function" && w.success(fe);
          }, error: function(fe) {
            typeof (w == null ? void 0 : w.error) == "function" && w.error(fe);
          } };
          return c.kg.debug("Call getBlocklist"), i.hj.call(this, pe, h.fI.GET_BLACK_LIST);
        }
        var E = l, T = I;
        function I(w) {
          var z = this;
          if (!r.XZ.call(this)) {
            var re = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(re);
          }
          var q = this.context, ie = q.orgName, Ie = q.appName, pe = q.accessToken, fe = { url: this.apiUrl + "/" + ie + "/" + Ie + "/users/" + this.user + "/contacts/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + pe }, success: function(S) {
            var X = [];
            S.data.forEach(function(B) {
              X.push({ name: B, subscription: "both", jid: z.context.jid });
            }), typeof (w == null ? void 0 : w.success) == "function" && w.success(X);
          }, error: function(S) {
            typeof (w == null ? void 0 : w.error) == "function" && w.error(S);
          } };
          return c.kg.debug("Call getContacts"), i.hj.call(this, fe, h.fI.GET_CONTACTS);
        }
        function O(w) {
          if (typeof w.deviceId != "string" || w.deviceId === "")
            throw Error('Invalid parameter: "deviceId"');
          if (typeof w.deviceToken != "string" || w.deviceToken === "")
            throw Error('Invalid parameter: "deviceToken"');
          if (typeof w.notifierName != "string" || w.notifierName === "")
            throw Error('Invalid parameter: "notifierName"');
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/users/").concat(this.user), type: "PUT", data: JSON.stringify({ device_id: w.deviceId, device_token: w.deviceToken, notifier_name: w.notifierName }), dataType: "json", headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" }, success: w.success, error: w.error };
          return c.kg.debug("Call uploadPushToken", w), i.hj.call(this, pe, h.fI.UPLOAD_PUSH_TOKEN);
        }
        var C = O;
        function N(w) {
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/users/").concat(this.user, "/user_channels"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" }, success: w && (w == null ? void 0 : w.success), error: w && (w == null ? void 0 : w.error) };
          return c.kg.debug("Call getSessionList"), i.hj.call(this, pe, h.fI.GET_SESSION_LIST);
        }
        function v(w) {
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = !!(w && typeof w.pageNum == "number" && typeof w.pageSize == "number" && w.pageNum > 0 && w.pageSize > 0), fe = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/users/").concat(this.user, "/user_channels").concat(pe ? "/page" : ""), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" }, success: w && (w == null ? void 0 : w.success), error: w && (w == null ? void 0 : w.error) };
          return pe && (fe.data = { pageNum: w.pageNum, pageSize: w.pageSize }), c.kg.debug("Call getConversationlist"), i.hj.call(this, fe, h.fI.GET_SESSION_LIST).then(function(S) {
            return function(X) {
              var B = X.data.channel_infos;
              return B == null || B.forEach(function(ue) {
                ue.meta && JSON.stringify(ue.meta) !== "{}" ? (ue.meta.payload = JSON.parse(ue.meta.payload), ue.lastMessage = (0, m.w)(ue.meta)) : ue.lastMessage = ue.meta, delete ue.meta;
              }), X;
            }(S);
          });
        }
        function y(w) {
          if (w && typeof w.channel != "string")
            throw Error("Invalid parameter channel: ".concat(w.channel));
          if (w && w.chatType !== "singleChat" && w.chatType !== "groupChat")
            throw Error("Invalid parameter chatType: ".concat(w.chatType));
          if (w && typeof w.deleteRoam != "boolean")
            throw Error("Invalid parameter deleteRoam: ".concat(w.deleteRoam));
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          var re, q = this.context, ie = q.orgName, Ie = q.appName, pe = q.accessToken, fe = q.jid;
          re = w.chatType === "singleChat" ? "chat" : "groupChat";
          var S = { url: "".concat(this.apiUrl, "/").concat(ie, "/").concat(Ie, "/user/").concat(this.user, "/user_channel?resource=").concat(fe.clientResource), dataType: "json", type: "DELETE", data: JSON.stringify({ channel: w.channel, type: re, delete_roam: w.deleteRoam }), headers: { Authorization: "Bearer " + pe, "Content-Type": "application/json" }, success: w.success, error: w.error };
          return c.kg.debug("Call deleteSession", w), i.hj.call(this, S, h.fI.DELETE_SESSION);
        }
        var A = y;
        function x(w, z) {
          if (!r.XZ.call(this)) {
            var re = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(re);
          }
          var q = this.context, ie = q.orgName, Ie = q.appName, pe = q.accessToken, fe = ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"], S = {};
          if (typeof wx < "u" || typeof qq < "u")
            if (typeof w == "string" && z !== void 0) {
              if (!fe.includes(w))
                throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
              S[w] = z;
            } else {
              if (Object.prototype.toString.call(w) !== "[object Object]")
                throw new Error("illegal params");
              fe.forEach(function(ue) {
                fe.includes(ue) && w[ue] !== void 0 && (S[ue] = w[ue]);
              });
            }
          else if (typeof w == "string") {
            if (!fe.includes(w))
              throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
            S = w + "=" + z;
          } else {
            if (Object.prototype.toString.call(w) !== "[object Object]")
              throw new Error("illegal params");
            var X = [];
            fe.forEach(function(ue) {
              if (fe.includes(ue) && w[ue] !== void 0) {
                var K = encodeURIComponent(ue), de = encodeURIComponent(w[ue]);
                X.push(K + "=" + de);
              }
            }), S = X.join("&");
          }
          var B = { url: "".concat(this.apiUrl, "/").concat(ie, "/").concat(Ie, "/metadata/user/").concat(this.user), type: "PUT", data: S, dataType: "json", headers: { Authorization: "Bearer " + pe, "Content-Type": "application/x-www-form-urlencoded" } };
          return c.kg.debug("Call updateOwnUserInfo", w), i.hj.call(this, B, h.fI.UPDATE_USER_INFO);
        }
        var j = x;
        function P(w, z) {
          if (!r.XZ.call(this)) {
            var re = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(re);
          }
          var q, ie = this.context, Ie = ie.orgName, pe = ie.appName, fe = ie.accessToken, S = [];
          if (typeof w == "string")
            S = [w];
          else {
            if (Object.prototype.toString.call(w) !== "[object Array]")
              throw new Error("illegal params");
            S = w;
          }
          q = typeof z == "string" ? [z] : z && Object.prototype.toString.call(z) === "[object Array]" ? z : ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"];
          var X = { url: "".concat(this.apiUrl, "/").concat(Ie, "/").concat(pe, "/metadata/user/get"), type: "POST", data: JSON.stringify({ targets: S, properties: q }), dataType: "json", headers: { Authorization: "Bearer " + fe, "Content-Type": "application/json" } };
          return c.kg.debug("Call fetchUserInfoById", w), i.hj.call(this, X, h.fI.GET_USER_INFO);
        }
        function W(w) {
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/users/").concat(this.user), type: "PUT", dataType: "json", data: JSON.stringify({ nickname: w }), headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" } };
          return c.kg.debug("Call updateCurrentUserNick", w), i.hj.call(this, pe);
        }
        function Z(w) {
          if (typeof w != "string" || w === "")
            throw Error('Invalid parameter: "agoraToken"');
          var z = this.context, re = z.orgName, q = z.appName, ie = { url: this.apiUrl + "/" + re + "/" + q + "/token", dataType: "json", type: "POST", data: JSON.stringify({ grant_type: "agora" }), headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } };
          return c.kg.debug("Call getChatToken", w), i.hj.call(this, ie, h.fI.SDK_INTERNAL);
        }
        function ee(w) {
          var z = this;
          return new Promise(function(re, q) {
            if (!w.queue)
              throw Error('Invalid parameter: "specified"');
            if (!r.XZ.call(z)) {
              var ie = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(ie);
            }
            (function Ie(pe) {
              var fe = this, S = pe.count || 20;
              G.call(this, { count: S, isGroup: !!pe.isGroup, queue: pe.queue, start: pe.start, format: pe.format, success: function(X) {
                if (X.msgs.length >= S || X.is_last) {
                  var B = X.msgs.splice(0, S).reverse();
                  pe.success && pe.success(B), re(B);
                } else
                  Ie.call(fe, f(f({}, pe), { start: null }));
              }, fail: function(X) {
                q(X), pe.fail && pe.fail(X);
              } });
            }).call(z, w), c.kg.debug("Call fetchHistoryMessages", w);
          });
        }
        function G(w) {
          var z = this, re = w.queue, q = this.mr_cache[re] || (this.mr_cache[re] = { msgs: [] }), ie = this.context.userId, Ie = w.start || -1, pe = w.count || 20;
          if (q.msgs.length >= pe || q.is_last)
            typeof w.success == "function" && w.success(q);
          else {
            q && q.next_key && (Ie = q.next_key), w.start && (Ie = w.start);
            var fe = { queue: re + (w.isGroup ? "@conference.easemob.com" : "@easemob.com"), start: Ie, end: -1 }, S = this.context, X = S.orgName, B = S.appName, ue = { url: "".concat(this.apiUrl, "/").concat(X, "/").concat(B, "/users/").concat(ie, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" }, data: JSON.stringify(fe), success: function(K) {
              var de = K == null ? void 0 : K.data;
              if (!K.data.msgs)
                return typeof w.success == "function" && w.success(q), q.is_last = !0, void (q.next_key = "");
              var Ee = de.msgs, Se = Ee.length;
              q.is_last = de.is_last, q.next_key = de.next_key;
              for (var xe = function(lt) {
                for (var pt = [], mt = 0, yt = (lt = u().atob(lt)).length; mt < yt; ++mt)
                  pt.push(lt.charCodeAt(mt));
                var Ot = z.context.root.lookup("easemob.pb.Meta");
                if ((Ot = Ot.decode(pt)).ns === 1)
                  return s.Z.call(z, Ot, { errorCode: 0, reason: "" }, !0, w.format);
              }, Be = 0; Be < Se; Be++) {
                var ut = xe(Ee[Be].msg);
                ut && q.msgs.push(ut);
              }
              typeof w.success == "function" && w.success(q);
            }, error: function(K) {
              if (K.error && K.error_description) {
                var de = a.Z.create({ type: t.E.WEBIM_CONNCTION_AJAX_ERROR, message: "fetch history messages error", data: K });
                z.onError && z.onError(de);
              }
            } };
            i.hj.call(this, ue, h.fI.GET_HISTORY_MSG).catch(function(K) {
              typeof w.fail == "function" && w.fail(K);
            });
          }
        }
        function le(w) {
          var z = this;
          return new Promise(function(re, q) {
            var ie = w.targetId, Ie = w.cursor, pe = Ie === void 0 ? -1 : Ie, fe = w.pageSize, S = fe === void 0 ? 20 : fe, X = w.chatType, B = w.searchDirection, ue = w.searchOptions, K = ue === void 0 ? {} : ue, de = K.msgTypes, Ee = de === void 0 ? [] : de, Se = K.startTime, xe = Se === void 0 ? null : Se, Be = K.endTime, ut = Be === void 0 ? null : Be, lt = K.from, pt = lt === void 0 ? null : lt;
            if (typeof ie != "string" || ie === "")
              throw Error('"Invalid parameter": "targetId"');
            if (pt && typeof pt != "string")
              throw Error('"Invalid parameter": "searchOptions.from"');
            if (Ee && !Array.isArray(Ee))
              throw Error('"Invalid parameter": "searchOptions.msgTypes"');
            if (xe && typeof xe != "number")
              throw Error('"Invalid parameter": "searchOptions.startTime"');
            if (ut && typeof xe != "number")
              throw Error('"Invalid parameter": "searchOptions.endTime"');
            if (!r.XZ.call(z)) {
              var mt = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return q(mt);
            }
            var yt = z.context, Ot = yt.orgName, At = yt.appName, bt = yt.userId, Rt = w.chatType === "groupChat" ? "@conference.easemob.com" : "@easemob.com", ht = { queue: "".concat(ie).concat(Rt), start: pe, pull_number: S, is_positive: B === "down", msgType: Ee.join(",") || "", end: -1, startTime: xe, endTime: ut, userId: X === "singleChat" ? null : pt }, It = { url: "".concat(z.apiUrl, "/").concat(Ot, "/").concat(At, "/users/").concat(bt, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + z.token, "Content-Type": "application/json" }, data: JSON.stringify(ht), success: function(Tt) {
              for (var vt, Et = Tt == null ? void 0 : Tt.data, M = Et.msgs || [], Re = function(J) {
                for (var ne = [], we = 0, ae = (J = u().atob(J)).length; we < ae; ++we)
                  ne.push(J.charCodeAt(we));
                var Je = z.context.root.lookup("easemob.pb.Meta");
                if ((Je = Je.decode(ne)).ns === 1)
                  return s.Z.call(z, Je, { errorCode: 0, reason: "" }, !0, !0);
              }, V = [], Ce = 0; Ce < M.length; Ce++) {
                var Te = Re(M[Ce].msg);
                Te && V.push(Te);
              }
              Et.msgs = V;
              var H = { cursor: Et.next_key, messages: V, isLast: Et.is_last };
              (vt = w.success) === null || vt === void 0 || vt.call(w, H), re(H);
            }, error: w.fail };
            i.hj.call(z, It).catch(function(Tt) {
              q(Tt);
            }), c.kg.debug("Call getHistoryMessages", w);
          });
        }
        function ce(w, z) {
          var re = this;
          return new Promise(function(q, ie) {
            var Ie = { id: re.getUniqueId(), to: w, message: z };
            o.Z.operatRoster.call(re, Ie, "add", q, ie), c.kg.debug("Call addContact", Ie);
          });
        }
        var _e = Ue;
        function Ue(w) {
          var z = this;
          return new Promise(function(re, q) {
            var ie = { id: z.getUniqueId(), to: w };
            o.Z.operatRoster.call(z, ie, "remove", re, q), c.kg.debug("Call deleteContact", ie);
          });
        }
        function ve(w) {
          var z = this;
          return new Promise(function(re, q) {
            var ie = { id: z.getUniqueId(), to: w };
            o.Z.operatRoster.call(z, ie, "accept", re, q), c.kg.debug("Call acceptInvitation", ie);
          });
        }
        var ye = ve;
        function Pe(w) {
          var z = this;
          return new Promise(function(re, q) {
            var ie = { id: z.getUniqueId(), to: w };
            o.Z.operatRoster.call(z, ie, "decline", re, q), c.kg.debug("Call declineContactInvite", ie);
          });
        }
        var We = Pe;
        function ke(w) {
          var z = this;
          return new Promise(function(re, q) {
            o.Z.operatRoster.call(z, { to: w.name }, "ban", re, q), c.kg.debug("Call addUsersToBlocklist", w);
          });
        }
        var Ve = ke, se = ke;
        function He(w) {
          var z = this;
          return new Promise(function(re, q) {
            o.Z.operatRoster.call(z, { to: w.name }, "allow", re, q), c.kg.debug("Call removeUserFromBlocklist", w);
          });
        }
        var Xe = He, nt = He;
        function te(w) {
          var z = this.getUniqueId(), re = { id: z, to: w.to };
          this._msgHash[z] = f({}, re);
          var q = "";
          w.chatType !== void 0 ? q = w.chatType : w.type !== void 0 && (q = w.type === "chat" ? "singleChat" : w.type);
          var ie = { id: z, type: "recall", chatType: q, ackId: w.mid, to: w.to, isChatThread: w.isChatThread || !1, success: w.success, fail: w.fail };
          return c.kg.debug("Call recallMessage", w), this.mSync.send(ie, this);
        }
        function $e(w) {
          return g(this, void 0, void 0, function() {
            var z, re, q, ie, Ie, pe, fe, S, X;
            return d(this, function(B) {
              switch (B.label) {
                case 0:
                  if (typeof w.messageId != "string" || !w.messageId)
                    throw Error("Invalid parameter messageId: ".concat(w.messageId));
                  if (typeof w.reaction != "string" || !w.reaction)
                    throw Error("Invalid parameter reaction: ".concat(w.reaction));
                  return r.XZ.call(this) ? (re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = w.reaction, fe = w.messageId, S = { msgId: fe, message: pe }, X = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/reaction/user/").concat(this.user), type: "POST", data: JSON.stringify(S), dataType: "json", headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" } }, [4, i.hj.call(this, X)]) : (z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(z)]);
                case 1:
                  return B.sent(), [2];
              }
            });
          });
        }
        function Me(w) {
          return g(this, void 0, void 0, function() {
            var z, re, q, ie, Ie, pe, fe, S;
            return d(this, function(X) {
              switch (X.label) {
                case 0:
                  if (typeof w.reaction != "string" || !w.reaction)
                    throw Error("Invalid parameter reactionId: ".concat(w.reaction));
                  return r.XZ.call(this) ? (re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = w.messageId, fe = w.reaction, S = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/reaction/user/").concat(this.user, "?msgId=").concat(pe, "&message=").concat(fe), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" } }, [4, i.hj.call(this, S)]) : (z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(z)]);
                case 1:
                  return X.sent(), [2];
              }
            });
          });
        }
        function rt(w) {
          if (typeof w.chatType != "string" || !w.chatType)
            throw Error("Invalid parameter chatType: ".concat(w.chatType));
          if (!w.messageId)
            throw Error("Invalid parameter messageId: ".concat(w.messageId));
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = w.chatType, fe = w.messageId, S = { msgIdList: typeof fe == "string" ? [fe] : fe, msgType: pe === "singleChat" ? "chat" : "groupchat", groupId: w.groupId || null }, X = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/reaction/user/").concat(this.user), type: "GET", data: S, dataType: "json", headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" } };
          return i.hj.call(this, X).then(function(B) {
            var ue = B.data;
            return ue == null || ue.forEach(function(K) {
              K == null || K.reactionList.forEach(function(de) {
                de.isAddedBySelf = de.state, delete de.state, delete de.reactionId;
              });
            }), B;
          });
        }
        var ot = rt;
        function it(w) {
          if (typeof w.reaction != "string" || !w.reaction)
            throw Error("Invalid parameter reaction: ".concat(w.reaction));
          if (typeof w.messageId != "string" || !w.messageId)
            throw Error("Invalid parameter messageId: ".concat(w.messageId));
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = w.cursor, fe = w.pageSize, S = { msgId: w.messageId, message: w.reaction, currentPage: pe || null, pageSize: fe || 20 }, X = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/reaction/user/").concat(this.user, "/detail"), type: "GET", data: S, dataType: "json", headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" } };
          return i.hj.call(this, X).then(function(B) {
            return B.data.isAddedBySelf = B.data.state, delete B.data.state, delete B.data.reactionId, B;
          });
        }
        function ct(w) {
          return g(this, void 0, void 0, function() {
            var z, re, q, ie, Ie, pe, fe, S, X, B, ue;
            return d(this, function(K) {
              switch (K.label) {
                case 0:
                  if (typeof w.reportType != "string" || !w.reportType)
                    throw Error("Invalid parameter reportType: ".concat(w.reportType));
                  if (typeof w.messageId != "string" || !w.messageId)
                    throw Error("Invalid parameter messageId: ".concat(w.messageId));
                  if (typeof w.reportReason != "string" || !w.reportReason)
                    throw Error("Invalid parameter messageId: ".concat(w.reportReason));
                  return r.XZ.call(this) ? (re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = w.reportType, fe = w.reportReason, S = w.messageId, X = { username: this.user, reportType: pe, reportReason: fe }, B = "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/user/").concat(this.user, "/moderation/report/message/").concat(S), ue = { url: B, type: "POST", data: JSON.stringify(X), dataType: "json", headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" } }, [4, i.hj.call(this, ue)]) : (z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(z)]);
                case 1:
                  return K.sent(), [2];
              }
            });
          });
        }
        function Ne(w) {
          var z;
          return g(this, void 0, void 0, function() {
            var re, q, ie, Ie, pe, fe, S, X, B;
            return d(this, function(ue) {
              switch (ue.label) {
                case 0:
                  if (typeof w.targetId != "string" || w.targetId === "")
                    throw Error('"Invalid parameter targetId": ' + w.targetId);
                  if (!["singleChat", "groupChat"].includes(w.chatType))
                    throw Error('"Invalid parameter chatType": ' + w.chatType);
                  if (w.beforeTimeStamp && (typeof w.beforeTimeStamp != "number" || w.beforeTimeStamp < 0 || ((z = w.beforeTimeStamp) === null || z === void 0 ? void 0 : z.toString().length) > 18))
                    throw Error('"Invalid parameter beforeTimeStamp": ' + w.beforeTimeStamp);
                  if (w.messageIds && !(Array.isArray(w.messageIds) && w.messageIds.length > 0 && w.messageIds.length <= 20))
                    throw Error('"Invalid parameter messageIds": ' + w.messageIds);
                  if (!w.messageIds && !w.beforeTimeStamp)
                    throw Error("messageIds or beforeTimeStamp field is required.");
                  return r.XZ.call(this) ? (q = this.context, ie = q.orgName, Ie = q.appName, pe = q.userId, fe = w.chatType === "singleChat" ? "userId" : "groupId", S = w.chatType === "singleChat" ? "chat" : "group", X = w.messageIds ? "".concat(this.apiUrl, "/").concat(ie, "/").concat(Ie, "/sdk/message/roaming/").concat(S, "/user/").concat(pe, "?").concat(fe, "=").concat(w.targetId, "&msgIdList=").concat(w.messageIds, "&resource=").concat(this.clientResource) : "".concat(this.apiUrl, "/").concat(ie, "/").concat(Ie, "/sdk/message/roaming/").concat(S, "/user/").concat(pe, "/time?").concat(fe, "=").concat(w.targetId, "&delTime=").concat(w.beforeTimeStamp, "&&resource=").concat(this.clientResource), B = { url: X, dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" } }, c.kg.debug("Call removeHistoryMessages", w), [4, i.hj.call(this, B)]) : (re = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(re)]);
                case 1:
                  return ue.sent(), [2];
              }
            });
          });
        }
        function ze(w) {
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          if (w.pageSize && typeof w.pageSize != "number")
            throw Error("Invalid parameter pageSize: ".concat(w.pageSize));
          if (w.cursor && typeof w.cursor != "string")
            throw Error("Invalid parameter cursor: ".concat(w.cursor));
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (w == null ? void 0 : w.pageSize) || 20, cursor: (w == null ? void 0 : w.cursor) || "" }, headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" } };
          return c.kg.debug("Call getServerConversations", w), i.hj.call(this, pe, h.fI.GET_SESSION_LIST).then(function(fe) {
            return Ye(fe);
          });
        }
        function Ye(w) {
          var z = w.data, re = z.cursor, q = z.channel_infos, ie = [];
          q == null || q.forEach(function(pe) {
            var fe = null;
            pe != null && pe.meta && JSON.stringify(pe.meta) !== "{}" && (pe.meta.payload = JSON.parse(pe.meta.payload), fe = (0, m.w)(pe.meta));
            var S = { conversationId: pe.session_to, conversationType: pe.session_type === "chat" ? "singleChat" : "groupChat", isPinned: pe.is_top, pinnedTime: pe.is_top ? pe.update_top_status_time : 0, unReadCount: pe.unread_num, lastMessage: fe };
            ie.push(S);
          });
          var Ie = { conversations: ie, cursor: re || "" };
          return { type: w.type, data: Ie };
        }
        function qe(w) {
          if (!r.XZ.call(this)) {
            var z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(z);
          }
          if (w.pageSize && typeof w.pageSize != "number")
            throw Error("Invalid parameter pageSize: ".concat(w.pageSize));
          if (w.cursor && typeof w.cursor != "string")
            throw Error("Invalid parameter cursor: ".concat(w.cursor));
          var re = this.context, q = re.orgName, ie = re.appName, Ie = re.accessToken, pe = { url: "".concat(this.apiUrl, "/").concat(q, "/").concat(ie, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (w == null ? void 0 : w.pageSize) || 20, cursor: (w == null ? void 0 : w.cursor) || "", is_top: !0 }, headers: { Authorization: "Bearer " + Ie, "Content-Type": "application/json" } };
          return c.kg.debug("Call getServerConversations", w), i.hj.call(this, pe, h.fI.GET_SESSION_LIST).then(function(fe) {
            return Ye(fe);
          });
        }
        function Oe(w) {
          return g(this, void 0, void 0, function() {
            var z, re, q, ie, Ie, pe, fe, S, X, B, ue, K, de, Ee;
            return d(this, function(Se) {
              if (!r.XZ.call(this))
                return z = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(z)];
              if (re = w.conversationId, q = w.conversationType, ie = w.isPinned, Ie = q === "singleChat" ? "chat" : "groupChat", typeof re != "string" || re === "")
                throw Error("Invalid parameter conversationId: ".concat(re));
              if (!["singleChat", "groupChat"].includes(q))
                throw Error("Invalid parameter conversationType: ".concat(q));
              if (typeof ie != "boolean")
                throw Error("Invalid parameter isPinned: ".concat(ie));
              return pe = this.context, fe = pe.orgName, S = pe.appName, X = pe.accessToken, B = pe.jid, ue = { type: Ie, to: re }, K = ie ? "" : "type=".concat(Ie, "&to=").concat(re, "&"), de = "".concat(this.apiUrl, "/").concat(fe, "/").concat(S, "/sdk/user/").concat(this.user, "/user_channel/top?").concat(K, "resource=").concat(B.clientResource), Ee = { url: de, type: ie ? "POST" : "DELETE", dataType: "json", headers: { Authorization: "Bearer " + X, "Content-Type": "application/json" } }, ie && (Ee.data = JSON.stringify(ue)), c.kg.debug("Call pinConversation", w), [2, i.hj.call(this, Ee, h.fI.PIN_CONVERSATION).then(function(xe) {
                var Be = xe.type, ut = xe.data;
                return { type: Be, data: { isPinned: ut.is_top || !1, pinnedTime: ut.is_top ? ut.update_top_status_time : 0 } };
              })];
            });
          });
        }
      }, 3770: function(p, _, e) {
        e.r(_), e.d(_, { getPresenceStatus: function() {
          return g;
        }, getSubscribedPresenceList: function() {
          return m;
        }, getSubscribedPresencelist: function() {
          return f;
        }, publishPresence: function() {
          return u;
        }, subscribePresence: function() {
          return c;
        }, unsubscribePresence: function() {
          return h;
        } }), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(2222), e(9753);
        var r = e(4370), t = e(3246), a = e(7252), i = e(5531), s = e(7360), o = function(d, l, E, T) {
          return new (E || (E = Promise))(function(I, O) {
            function C(y) {
              try {
                v(T.next(y));
              } catch (A) {
                O(A);
              }
            }
            function N(y) {
              try {
                v(T.throw(y));
              } catch (A) {
                O(A);
              }
            }
            function v(y) {
              var A;
              y.done ? I(y.value) : (A = y.value, A instanceof E ? A : new E(function(x) {
                x(A);
              })).then(C, N);
            }
            v((T = T.apply(d, l || [])).next());
          });
        }, n = function(d, l) {
          var E, T, I, O, C = { label: 0, sent: function() {
            if (1 & I[0])
              throw I[1];
            return I[1];
          }, trys: [], ops: [] };
          return O = { next: N(0), throw: N(1), return: N(2) }, typeof Symbol == "function" && (O[Symbol.iterator] = function() {
            return this;
          }), O;
          function N(v) {
            return function(y) {
              return function(A) {
                if (E)
                  throw new TypeError("Generator is already executing.");
                for (; O && (O = 0, A[0] && (C = 0)), C; )
                  try {
                    if (E = 1, T && (I = 2 & A[0] ? T.return : A[0] ? T.throw || ((I = T.return) && I.call(T), 0) : T.next) && !(I = I.call(T, A[1])).done)
                      return I;
                    switch (T = 0, I && (A = [2 & A[0], I.value]), A[0]) {
                      case 0:
                      case 1:
                        I = A;
                        break;
                      case 4:
                        return C.label++, { value: A[1], done: !1 };
                      case 5:
                        C.label++, T = A[1], A = [0];
                        continue;
                      case 7:
                        A = C.ops.pop(), C.trys.pop();
                        continue;
                      default:
                        if (!((I = (I = C.trys).length > 0 && I[I.length - 1]) || A[0] !== 6 && A[0] !== 2)) {
                          C = 0;
                          continue;
                        }
                        if (A[0] === 3 && (!I || A[1] > I[0] && A[1] < I[3])) {
                          C.label = A[1];
                          break;
                        }
                        if (A[0] === 6 && C.label < I[1]) {
                          C.label = I[1], I = A;
                          break;
                        }
                        if (I && C.label < I[2]) {
                          C.label = I[2], C.ops.push(A);
                          break;
                        }
                        I[2] && C.ops.pop(), C.trys.pop();
                        continue;
                    }
                    A = l.call(d, C);
                  } catch (x) {
                    A = [6, x], T = 0;
                  } finally {
                    E = I = 0;
                  }
                if (5 & A[0])
                  throw A[1];
                return { value: A[0] ? A[1] : void 0, done: !0 };
              }([v, y]);
            };
          }
        };
        function u(d) {
          return o(this, void 0, void 0, function() {
            var l, E, T, I, O, C, N, v, y;
            return n(this, function(A) {
              switch (A.label) {
                case 0:
                  if (typeof d.description != "string")
                    throw Error('Invalid parameter: "description"');
                  return t.XZ.call(this) ? (E = this.context, T = E.accessToken, I = E.orgName, O = E.appName, C = E.userId, N = this.context.jid.clientResource, v = { ext: d.description }, y = { url: "".concat(this.apiUrl, "/").concat(I, "/").concat(O, "/users/").concat(C, "/presence/").concat(N, "/1"), type: "POST", dataType: "json", data: JSON.stringify(v), headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" }, success: d.success, error: d.error }, s.kg.debug("Call publishPresence:", d), [4, r.hj.call(this, y)]) : (l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(l)]);
                case 1:
                  return A.sent(), [2];
              }
            });
          });
        }
        function c(d) {
          if (!Array.isArray(d.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!d.usernames.length)
            throw Error('"usernames" can not be empty');
          if (typeof d.expiry != "number")
            throw Error('Invalid parameter: "expiry"');
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = this.context, T = E.orgName, I = E.appName, O = E.userId, C = E.accessToken, N = { usernames: d.usernames }, v = { url: "".concat(this.apiUrl, "/").concat(T, "/").concat(I, "/users/").concat(O, "/presence/").concat(d.expiry), type: "POST", dataType: "json", data: JSON.stringify(N), headers: { Authorization: "Bearer " + C, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call subscribePresence:", d), r.hj.call(this, v).then(function(y) {
            return y.data = { result: y == null ? void 0 : y.result }, y;
          });
        }
        function h(d) {
          return o(this, void 0, void 0, function() {
            var l, E, T, I, O, C, N;
            return n(this, function(v) {
              switch (v.label) {
                case 0:
                  if (!Array.isArray(d.usernames))
                    throw Error('Invalid parameter: "usernames"');
                  if (!d.usernames.length)
                    throw Error('"usernames" can not be empty');
                  return t.XZ.call(this) ? (E = this.context, T = E.orgName, I = E.appName, O = E.userId, C = E.accessToken, N = { url: "".concat(this.apiUrl, "/").concat(T, "/").concat(I, "/users/").concat(O, "/presence"), type: "DELETE", dataType: "json", data: JSON.stringify(d.usernames), headers: { Authorization: "Bearer " + C, "Content-Type": "application/json" }, success: d.success, error: d.error }, s.kg.debug("Call unsubscribePresence:", d), [4, r.hj.call(this, N)]) : (l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(l)]);
                case 1:
                  return v.sent(), [2];
              }
            });
          });
        }
        function m(d) {
          if (typeof d.pageNum != "number" || typeof d.pageSize != "number")
            throw Error('Invalid parameter: "pageNum or pageSize"');
          if (d.pageNum < 0 || d.pageSize < 0)
            throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = this.context, T = E.orgName, I = E.appName, O = E.userId, C = E.accessToken, N = { url: "".concat(this.apiUrl, "/").concat(T, "/").concat(I, "/users/").concat(O, "/presence/sublist?pageNum=").concat(d.pageNum, "&pageSize=").concat(d.pageSize), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + C, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call getSubscribedPresenceList:", d), r.hj.call(this, N).then(function(v) {
            return v.data = { result: v == null ? void 0 : v.result }, v;
          });
        }
        var f = m;
        function g(d) {
          if (!Array.isArray(d.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!d.usernames.length)
            throw Error('"usernames" can not be empty');
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = { usernames: d.usernames }, T = this.context, I = T.orgName, O = T.appName, C = T.userId, N = T.accessToken, v = { url: "".concat(this.apiUrl, "/").concat(I, "/").concat(O, "/users/").concat(C, "/presence"), type: "POST", dataType: "json", data: JSON.stringify(E), headers: { Authorization: "Bearer " + N, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call getPresenceStatus:", d), r.hj.call(this, v).then(function(y) {
            return y.data = { result: y == null ? void 0 : y.result }, y;
          });
        }
      }, 1735: function(p, _, e) {
        e.r(_), e.d(_, { clearRemindTypeForConversation: function() {
          return c;
        }, getPushPerformLanguage: function() {
          return g;
        }, getSilentModeForAll: function() {
          return n;
        }, getSilentModeForConversation: function() {
          return h;
        }, getSilentModeForConversations: function() {
          return m;
        }, setPushPerformLanguage: function() {
          return f;
        }, setSilentModeForAll: function() {
          return o;
        }, setSilentModeForConversation: function() {
          return u;
        } }), e(7941), e(1539), e(8674), e(2222), e(9753), e(9554), e(4747), e(9600);
        var r = e(4370), t = e(3246), a = e(7252), i = e(5531), s = e(7360);
        function o(d) {
          if (!(d.options instanceof Object))
            throw Error('Invalid parameter: "options"');
          var l = d.options.paramType;
          if (typeof l != "number" || l < 0 || l > 2)
            throw Error('Invalid parameter: "options of paramType"');
          if (l === 0) {
            if (typeof d.options.remindType != "string")
              throw Error('Invalid parameter: "options of remindType"');
          } else if (l === 1) {
            if (typeof d.options.duration != "number")
              throw Error('Invalid parameter: "options of duration"');
          } else if (l === 2) {
            var E = d.options, T = E.startTime, I = E.endTime;
            if (!(T instanceof Object && Object.keys(T).length))
              throw Error('Invalid parameter: "options of startTime"');
            if (!T.hours || typeof T.hours != "number" || !T.minutes || typeof T.minutes != "number")
              throw Error('Invalid parameter: "options of startTime of hours or minutes"');
            if (!(I instanceof Object && Object.keys(I).length))
              throw Error('Invalid parameter: "options of endTime"');
            if (!I.hours || typeof I.hours != "number" || !I.minutes || typeof I.minutes != "number")
              throw Error('Invalid parameter: "options of endTime of hours or minutes"');
          }
          if (!t.XZ.call(this)) {
            var O = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(O);
          }
          var C = this.context, N = C.accessToken, v = C.orgName, y = C.appName, A = C.userId, x = {};
          switch (l) {
            case 0:
              x = { type: d.options.remindType };
              break;
            case 1:
              x = { ignoreDuration: d.options.duration };
              break;
            case 2:
              var j = d.options;
              T = j.startTime, I = j.endTime, x = { ignoreInterval: "".concat(T.hours, ":").concat(T.minutes, "-").concat(I.hours, ":").concat(I.minutes) };
          }
          var P = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/users/").concat(A, "/notification/user/").concat(A), type: "PUT", dataType: "json", data: JSON.stringify(x), headers: { Authorization: "Bearer " + N, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call setSilentModeForAll:", d), r.hj.call(this, P);
        }
        function n(d) {
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = this.context, T = E.accessToken, I = E.orgName, O = E.appName, C = E.userId, N = { url: "".concat(this.apiUrl, "/").concat(I, "/").concat(O, "/users/").concat(C, "/notification/user/").concat(C), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" }, success: d == null ? void 0 : d.success, error: d == null ? void 0 : d.error };
          return s.kg.debug("Call getSilentModeForAll:", d), r.hj.call(this, N);
        }
        function u(d) {
          if (typeof d.conversationId != "string" || !d.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if (typeof d.type != "string" || !d.type)
            throw Error('Invalid parameter: "type"');
          if (!(d.options instanceof Object))
            throw Error('Invalid parameter: "options"');
          var l = d.options.paramType;
          if (typeof l != "number" || l < 0 || l > 2)
            throw Error('Invalid parameter: "options of paramType"');
          if (l === 0) {
            if (typeof d.options.remindType != "string")
              throw Error('Invalid parameter: "options of remindType"');
          } else if (l === 1) {
            if (typeof d.options.duration != "number")
              throw Error('Invalid parameter: "options of duration"');
          } else if (l === 2) {
            var E = d.options, T = E.startTime, I = E.endTime;
            if (!(T instanceof Object && Object.keys(T).length))
              throw Error('Invalid parameter: "options of startTime"');
            if (!T.hours || typeof T.hours != "number" || !T.minutes || typeof T.minutes != "number")
              throw Error('Invalid parameter: "options of startTime of hours or minutes"');
            if (!(I instanceof Object && Object.keys(I).length))
              throw Error('Invalid parameter: "options of endTime"');
            if (!I.hours || typeof I.hours != "number" || !I.minutes || typeof I.minutes != "number")
              throw Error('Invalid parameter: "options of endTime of hours or minutes"');
          }
          if (!t.XZ.call(this)) {
            var O = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(O);
          }
          var C = this.context, N = C.accessToken, v = C.orgName, y = C.appName, A = C.userId, x = "chatgroup", j = {};
          switch (l) {
            case 0:
              j = { type: d.options.remindType };
              break;
            case 1:
              j = { ignoreDuration: d.options.duration };
              break;
            case 2:
              var P = d.options;
              T = P.startTime, I = P.endTime, j = { ignoreInterval: "".concat(T.hours, ":").concat(T.minutes, "-").concat(I.hours, ":").concat(I.minutes) };
          }
          d.type === "singleChat" && (x = "user");
          var W = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/users/").concat(A, "/notification/").concat(x, "/").concat(d.conversationId), type: "PUT", dataType: "json", data: JSON.stringify(j), headers: { Authorization: "Bearer " + N, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call setSilentModeForConversation:", d), r.hj.call(this, W);
        }
        function c(d) {
          if (typeof d.conversationId != "string" || !d.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if (typeof d.type != "string" || !d.type)
            throw Error('Invalid parameter: "type"');
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = this.context, T = E.accessToken, I = E.orgName, O = E.appName, C = E.userId, N = "chatgroup";
          d.type === "singleChat" && (N = "user");
          var v = { url: "".concat(this.apiUrl, "/").concat(I, "/").concat(O, "/users/").concat(C, "/notification/").concat(N, "/").concat(d.conversationId), type: "PUT", dataType: "json", data: JSON.stringify({ type: "DEFAULT" }), headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call clearRemindTypeForConversation:", d), r.hj.call(this, v);
        }
        function h(d) {
          if (typeof d.conversationId != "string" || !d.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if (typeof d.type != "string" || !d.type)
            throw Error('Invalid parameter: "type"');
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = this.context, T = E.accessToken, I = E.orgName, O = E.appName, C = E.userId, N = "chatgroup";
          d.type === "singleChat" && (N = "user");
          var v = { url: "".concat(this.apiUrl, "/").concat(I, "/").concat(O, "/users/").concat(C, "/notification/").concat(N, "/").concat(d.conversationId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call getSilentModeForConversation:", d), r.hj.call(this, v);
        }
        function m(d) {
          if (!Array.isArray(d.conversationList))
            throw Error('Invalid parameter: "conversationList"');
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = this.context, T = E.accessToken, I = E.orgName, O = E.appName, C = E.userId, N = [], v = [];
          d.conversationList.forEach(function(j) {
            j.type === "singleChat" ? N.push(j.id) : v.push(j.id);
          });
          var y = N.length ? N.join(",") : "", A = v.length ? v.join(",") : "", x = { url: "".concat(this.apiUrl, "/").concat(I, "/").concat(O, "/users/").concat(C, "/notification?user=").concat(y, "&group=").concat(A), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call getSilentModeForConversations:", d), r.hj.call(this, x);
        }
        function f(d) {
          if (typeof d.language != "string" || !d.language)
            throw Error('Invalid parameter: "language"');
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = { translationLanguage: d.language }, T = this.context, I = T.accessToken, O = T.orgName, C = T.appName, N = T.userId, v = { url: "".concat(this.apiUrl, "/").concat(O, "/").concat(C, "/users/").concat(N, "/notification/language"), type: "PUT", dataType: "json", data: JSON.stringify(E), headers: { Authorization: "Bearer " + I, "Content-Type": "application/json" }, success: d.success, error: d.error };
          return s.kg.debug("Call setPushPerformLanguage:", d), r.hj.call(this, v);
        }
        function g(d) {
          if (!t.XZ.call(this)) {
            var l = a.Z.create({ type: i.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var E = this.context, T = E.accessToken, I = E.orgName, O = E.appName, C = E.userId, N = { url: "".concat(this.apiUrl, "/").concat(I, "/").concat(O, "/users/").concat(C, "/notification/language"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" }, success: d == null ? void 0 : d.success, error: d == null ? void 0 : d.error };
          return s.kg.debug("Call getPushPerformLanguage:", d), r.hj.call(this, N);
        }
      }, 7384: function(p, _, e) {
        e.r(_), e.d(_, { changeChatThreadName: function() {
          return f;
        }, createChatThread: function() {
          return u;
        }, destroyChatThread: function() {
          return m;
        }, getChatThreadDetail: function() {
          return I;
        }, getChatThreadLastMessage: function() {
          return T;
        }, getChatThreadMembers: function() {
          return g;
        }, getChatThreads: function() {
          return E;
        }, getJoinedChatThreads: function() {
          return l;
        }, joinChatThread: function() {
          return c;
        }, leaveChatThread: function() {
          return h;
        }, removeChatThreadMember: function() {
          return d;
        } }), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(8309), e(2222), e(9554), e(4747), e(9753);
        var r = e(5531), t = e(7252), a = e(4370), i = e(3246), s = e(4363), o = function(O, C, N, v) {
          return new (N || (N = Promise))(function(y, A) {
            function x(W) {
              try {
                P(v.next(W));
              } catch (Z) {
                A(Z);
              }
            }
            function j(W) {
              try {
                P(v.throw(W));
              } catch (Z) {
                A(Z);
              }
            }
            function P(W) {
              var Z;
              W.done ? y(W.value) : (Z = W.value, Z instanceof N ? Z : new N(function(ee) {
                ee(Z);
              })).then(x, j);
            }
            P((v = v.apply(O, C || [])).next());
          });
        }, n = function(O, C) {
          var N, v, y, A, x = { label: 0, sent: function() {
            if (1 & y[0])
              throw y[1];
            return y[1];
          }, trys: [], ops: [] };
          return A = { next: j(0), throw: j(1), return: j(2) }, typeof Symbol == "function" && (A[Symbol.iterator] = function() {
            return this;
          }), A;
          function j(P) {
            return function(W) {
              return function(Z) {
                if (N)
                  throw new TypeError("Generator is already executing.");
                for (; A && (A = 0, Z[0] && (x = 0)), x; )
                  try {
                    if (N = 1, v && (y = 2 & Z[0] ? v.return : Z[0] ? v.throw || ((y = v.return) && y.call(v), 0) : v.next) && !(y = y.call(v, Z[1])).done)
                      return y;
                    switch (v = 0, y && (Z = [2 & Z[0], y.value]), Z[0]) {
                      case 0:
                      case 1:
                        y = Z;
                        break;
                      case 4:
                        return x.label++, { value: Z[1], done: !1 };
                      case 5:
                        x.label++, v = Z[1], Z = [0];
                        continue;
                      case 7:
                        Z = x.ops.pop(), x.trys.pop();
                        continue;
                      default:
                        if (!((y = (y = x.trys).length > 0 && y[y.length - 1]) || Z[0] !== 6 && Z[0] !== 2)) {
                          x = 0;
                          continue;
                        }
                        if (Z[0] === 3 && (!y || Z[1] > y[0] && Z[1] < y[3])) {
                          x.label = Z[1];
                          break;
                        }
                        if (Z[0] === 6 && x.label < y[1]) {
                          x.label = y[1], y = Z;
                          break;
                        }
                        if (y && x.label < y[2]) {
                          x.label = y[2], x.ops.push(Z);
                          break;
                        }
                        y[2] && x.ops.pop(), x.trys.pop();
                        continue;
                    }
                    Z = C.call(O, x);
                  } catch (ee) {
                    Z = [6, ee], v = 0;
                  } finally {
                    N = y = 0;
                  }
                if (5 & Z[0])
                  throw Z[1];
                return { value: Z[0] ? Z[1] : void 0, done: !0 };
              }([P, W]);
            };
          }
        };
        function u(O) {
          if (typeof O.name != "string" || O.name === "")
            throw Error("Invalid parameter name: ".concat(O.name));
          if (typeof O.messageId != "string" || O.messageId === "")
            throw Error("Invalid parameter messageId: ".concat(O.messageId));
          if (typeof O.parentId != "string" || O.parentId === "")
            throw Error("Invalid parameter parentId: ".concat(O.parentId));
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = N.jid, j = { name: O.name, msg_id: O.messageId, group_id: O.parentId, owner: this.user }, P = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread?resource=").concat(x.clientResource), type: "POST", dataType: "json", data: JSON.stringify(j), headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, P).then(function(W) {
            var Z = W.data.thread_id;
            return W.data = { chatThreadId: Z }, W;
          });
        }
        function c(O) {
          if (typeof O.chatThreadId != "string" || O.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(O.chatThreadId));
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = N.jid, j = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread/").concat(O.chatThreadId, "/user/").concat(this.user, "/join?resource=").concat(x.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, j).then(function(P) {
            var W = P.data.detail;
            return W.messageId = W.msgId, W.parentId = W.groupId, delete W.msgId, delete W.groupId, P;
          });
        }
        function h(O) {
          return o(this, void 0, void 0, function() {
            var C, N, v, y, A, x, j;
            return n(this, function(P) {
              switch (P.label) {
                case 0:
                  if (typeof O.chatThreadId != "string" || O.chatThreadId === "")
                    throw Error("Invalid parameter chatThreadId: ".concat(O.chatThreadId));
                  return i.XZ.call(this) ? (N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = N.jid, j = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread/").concat(O.chatThreadId, "/user/").concat(this.user, "/quit?resource=").concat(x.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } }, [4, a.hj.call(this, j)]) : (C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(C)]);
                case 1:
                  return P.sent(), [2];
              }
            });
          });
        }
        function m(O) {
          return o(this, void 0, void 0, function() {
            var C, N, v, y, A, x, j;
            return n(this, function(P) {
              switch (P.label) {
                case 0:
                  if (typeof O.chatThreadId != "string" || O.chatThreadId === "")
                    throw Error("Invalid parameter chatThreadId: ".concat(O.chatThreadId));
                  return i.XZ.call(this) ? (N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = N.jid, j = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread/").concat(O.chatThreadId, "?resource=").concat(x.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } }, [4, a.hj.call(this, j)]) : (C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(C)]);
                case 1:
                  return P.sent(), [2];
              }
            });
          });
        }
        function f(O) {
          if (typeof O.chatThreadId != "string" || O.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(O.chatThreadId));
          if (typeof O.name != "string" || O.name === "")
            throw Error("Invalid parameter name: ".concat(O.name));
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = N.jid, j = { name: O.name }, P = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread/").concat(O.chatThreadId, "?resource=").concat(x.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(j), headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, P);
        }
        function g(O) {
          if (typeof O.chatThreadId != "string" || O.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(O.chatThreadId));
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = { limit: O.pageSize || 20, cursor: O.cursor || "" }, j = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread/").concat(O.chatThreadId, "/users"), type: "GET", dataType: "json", data: x, headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, j);
        }
        function d(O) {
          if (typeof O.chatThreadId != "string" || O.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(O.chatThreadId));
          if (typeof O.username != "string" || O.username === "")
            throw Error("Invalid parameter username: ".concat(O.username));
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = N.jid, j = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread/").concat(O.chatThreadId, "/users/").concat(O.username, "?resource=").concat(x.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, j);
        }
        function l(O) {
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = { limit: O.pageSize || 20, cursor: O.cursor || "" }, j = { url: O.parentId ? "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/threads/chatgroups/").concat(O.parentId, "/user/").concat(this.user) : "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/threads/user/").concat(this.user), type: "GET", dataType: "json", data: x, headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, j).then(function(P) {
            var W = P.entities;
            return W == null || W.forEach(function(Z) {
              Z.parentId = Z.groupId, Z.messageId = Z.msgId, delete Z.groupId, delete Z.msgId;
            }), P;
          });
        }
        function E(O) {
          if (typeof O.parentId != "string" || O.parentId === "")
            throw Error("Invalid parameter parentId: ".concat(O.parentId));
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = { cursor: O.cursor || "", limit: O.pageSize || 20 }, j = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/threads/chatgroups/").concat(O.parentId), type: "GET", dataType: "json", data: x, headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, j).then(function(P) {
            var W = P.entities;
            return W == null || W.forEach(function(Z) {
              Z.parentId = Z.groupId, Z.messageId = Z.msgId, delete Z.groupId, delete Z.msgId;
            }), P;
          });
        }
        function T(O) {
          if (!Array.isArray(O.chatThreadIds))
            throw Error("Invalid parameter chatThreadIds: ".concat(O.chatThreadIds));
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = { threadIds: O.chatThreadIds }, j = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread/message"), type: "POST", dataType: "json", data: JSON.stringify(x), headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, j).then(function(P) {
            return function(W) {
              var Z = W.entities;
              return Z == null || Z.forEach(function(ee) {
                ee.chatThreadId = ee.thread_id, ee.last_message && JSON.stringify(ee.last_message) !== "{}" ? ee.lastMessage = (0, s.w)(ee.last_message) : ee.lastMessage = ee.last_message, delete ee.thread_id, delete ee.last_message;
              }), W;
            }(P);
          });
        }
        function I(O) {
          if (typeof O.chatThreadId != "string" || O.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(O.chatThreadId));
          if (!i.XZ.call(this)) {
            var C = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(C);
          }
          var N = this.context, v = N.orgName, y = N.appName, A = N.accessToken, x = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(y, "/thread/").concat(O.chatThreadId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + A, "Content-Type": "application/json" } };
          return a.hj.call(this, x).then(function(j) {
            return j.data.affiliationsCount = j.data.affiliations_count, j.data.messageId = j.data.msgId, j.data.parentId = j.data.groupId, delete j.data.affiliations_count, delete j.data.msgId, delete j.data.groupId, j;
          });
        }
      }, 70: function(p, _, e) {
        e.r(_), e.d(_, { getSupportedLanguages: function() {
          return o;
        }, translateMessage: function() {
          return n;
        } }), e(1539), e(8674), e(2222), e(9753);
        var r = e(3246), t = e(5531), a = e(7252), i = e(7360), s = e(4370);
        function o() {
          if (!r.XZ.call(this)) {
            var u = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(u);
          }
          var c = this.context, h = c.orgName, m = c.appName, f = c.accessToken, g = { url: "".concat(this.apiUrl, "/").concat(h, "/").concat(m, "/users/").concat(this.user, "/translate/support/language"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + f } };
          return i.kg.debug("Call getSupportedLanguages"), s.hj.call(this, g);
        }
        function n(u) {
          if (typeof u.text != "string" || u.text === "")
            throw Error('Invalid parameter: "text"');
          if (!Array.isArray(u.languages))
            throw Error('Invalid parameter: "language"');
          if (!r.XZ.call(this)) {
            var c = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(c);
          }
          var h = this.context, m = h.orgName, f = h.appName, g = h.accessToken, d = "".concat(this.apiUrl, "/").concat(m, "/").concat(f, "/users/").concat(this.user, "/translate"), l = { text: u.text, to: u.languages }, E = { url: d, dataType: "json", type: "POST", data: JSON.stringify(l), headers: { Authorization: "Bearer " + g } };
          return i.kg.debug("Call translateMessage"), s.hj.call(this, E);
        }
      }, 3246: function(p, _, e) {
        e.d(_, { H7: function() {
          return n;
        }, XZ: function() {
          return s;
        }, _W: function() {
          return o;
        } }), e(7941), e(9554), e(1539), e(4747), e(6699), e(2023);
        var r = e(5531), t = e(7252);
        function a() {
          var u = this.context.appName, c = this.context.orgName;
          return !(!u || !c) || (this.onError && this.onError({ type: r.E.WEBIM_CONNCTION_AUTH_ERROR, message: "appName or orgName is illegal" }), !1);
        }
        function i() {
          var u;
          if (!this.context.accessToken) {
            var c = t.Z.create({ type: r.E.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "token not assign error" });
            return this.onError && this.onError(c), (u = this.eventHandler) === null || u === void 0 || u.dispatch("onError", c), !1;
          }
          return !0;
        }
        function s() {
          return i.call(this) && a.call(this);
        }
        function o(u) {
          var c = u.data, h = u.type;
          return { data: { status: Object.keys(c.errorKeys).length > 0 ? "fail" : "success", errorKeys: c.errorKeys, successKeys: c.successKeys }, type: h };
        }
        function n(u) {
          var c = u.data, h = void 0;
          return Object.keys(c.errorKeys).length > 0 && Object.keys(c.errorKeys).forEach(function(m) {
            var f = c.errorKeys[m];
            h = f.includes("is not part of you") ? t.Z.create({ type: r.E.NO_PERMISSION, message: f }) : f.includes("size of metadata for this single chatroom exceeds the user defined limit") || f.includes("total size of chatroom metadata for this app exceeds the user defined limit") || f.includes("is exceeding maximum limit") ? t.Z.create({ type: r.E.MAX_LIMIT, message: f }) : f.includes("is not Legal") ? t.Z.create({ type: r.E.REQUEST_PARAMETER_ERROR, message: f }) : f.includes("Failed to update userMetadata. Concurrent updates not allowed") ? t.Z.create({ type: r.E.OPERATION_NOT_ALLOWED, message: f }) : t.Z.create({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, message: f });
          }), h;
        }
      }, 2071: function(p, _, e) {
        e.d(_, { $x: function() {
          return s;
        }, F3: function() {
          return o;
        }, Nl: function() {
          return t;
        }, TJ: function() {
          return a;
        }, Tp: function() {
          return c;
        }, Wc: function() {
          return r;
        }, el: function() {
          return i;
        }, iB: function() {
          return n;
        }, yK: function() {
          return u;
        } }), e(6992), e(1532), e(1539), e(8783), e(3948);
        var r = 7, t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = "im", s = "32f24ab2ddb74f508aa9286c356cec84", o = 1e3, n = { INIT: 9674, API: 9675 }, u = "direct", c = -1;
      }, 1595: function(p, _, e) {
        var r, t, a, i, s, o;
        e.d(_, { C8: function() {
          return r;
        }, aC: function() {
          return o;
        }, c: function() {
          return a;
        }, dd: function() {
          return s;
        }, fI: function() {
          return t;
        }, td: function() {
          return i;
        } }), function(n) {
          n[n.UNKNOWOPERATION = -1] = "UNKNOWOPERATION", n[n.REST_GET_SESSION_LIST = 1] = "REST_GET_SESSION_LIST", n[n.REST_DEL_SESSION = 2] = "REST_DEL_SESSION", n[n.REST_GET_HISTORY_MESSAGE = 3] = "REST_GET_HISTORY_MESSAGE", n[n.REST_PIN_CONVERSATION = 4] = "REST_PIN_CONVERSATION", n[n.REST_OPERATE = 10] = "REST_OPERATE", n[n.MSYNC_SENDMESSAGE = 11] = "MSYNC_SENDMESSAGE", n[n.MSYNC_RECALLMESSAGE = 12] = "MSYNC_RECALLMESSAGE", n[n.MSYNC_OPERATE = 20] = "MSYNC_OPERATE", n[n.ROSTER_ADD = 21] = "ROSTER_ADD", n[n.ROSTER_REMOVE = 22] = "ROSTER_REMOVE", n[n.ROSTER_ACCEPT = 23] = "ROSTER_ACCEPT", n[n.ROSTER_DECLINE = 24] = "ROSTER_DECLINE", n[n.ROSTER_BAN = 25] = "ROSTER_BAN", n[n.ROSTER_ALLOW = 26] = "ROSTER_ALLOW", n[n.ROSTER_BLACKLIST = 27] = "ROSTER_BLACKLIST", n[n.ROSTER_CONTACTS = 28] = "ROSTER_CONTACTS", n[n.ROSTER_OPERATE = 30] = "ROSTER_OPERATE", n[n.USER_LOGIN = 31] = "USER_LOGIN", n[n.USER_CREATE = 32] = "USER_CREATE", n[n.USER_UPDATE_USERINFO = 33] = "USER_UPDATE_USERINFO", n[n.USER_FETCH_USERINFO = 34] = "USER_FETCH_USERINFO", n[n.USER_UPDATE_NICK = 35] = "USER_UPDATE_NICK", n[n.USER_UPLOAD_PUSH_TOKEN = 36] = "USER_UPLOAD_PUSH_TOKEN", n[n.USER_OPERATE = 40] = "USER_OPERATE", n[n.GROUP_CREATEGROUP = 41] = "GROUP_CREATEGROUP", n[n.GROUP_BLOCK_MESSAGE = 42] = "GROUP_BLOCK_MESSAGE", n[n.GROUP_FETCH_PUBLICGROUPS_WITHCURSOR = 43] = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", n[n.GROUP_FETCH_USERS_GROUP = 44] = "GROUP_FETCH_USERS_GROUP", n[n.GROUP_CHANGE_OWNER = 45] = "GROUP_CHANGE_OWNER", n[n.GROUP_FETCH_SPECIFICATION = 46] = "GROUP_FETCH_SPECIFICATION", n[n.GROUP_CHANGE_GROUPATTRIBUTE = 47] = "GROUP_CHANGE_GROUPATTRIBUTE", n[n.GROUP_FETCH_MEMEBERS = 48] = "GROUP_FETCH_MEMEBERS", n[n.GROUP_GET_ADMIN = 49] = "GROUP_GET_ADMIN", n[n.GROUP_SET_ADMIN = 50] = "GROUP_SET_ADMIN", n[n.GROUP_REMOVE_ADMIN = 51] = "GROUP_REMOVE_ADMIN", n[n.GROUP_DESTOTYGROUP = 52] = "GROUP_DESTOTYGROUP", n[n.GROUP_LEAVEGROUP = 53] = "GROUP_LEAVEGROUP", n[n.GROUP_INVITE_TO_GROUP = 54] = "GROUP_INVITE_TO_GROUP", n[n.GROUP_JOIN_PUBLICGROUP = 55] = "GROUP_JOIN_PUBLICGROUP", n[n.GROUP_ACCEPT_JOINPUBLICGROUPAPPL = 56] = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", n[n.GROUP_DECLINE_JOINPUBLICGROUPAPPL = 57] = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", n[n.GROUP_ACCEPT_INVITATION = 58] = "GROUP_ACCEPT_INVITATION", n[n.GROUP_DECLINE_INVITATION = 59] = "GROUP_DECLINE_INVITATION", n[n.GROUP_REMOVE_MEMBER = 60] = "GROUP_REMOVE_MEMBER", n[n.GROUP_REMOVE_MEMBERS = 61] = "GROUP_REMOVE_MEMBERS", n[n.GROUP_MUTE_MEMBERS = 62] = "GROUP_MUTE_MEMBERS", n[n.GROUP_UNMUTE_MEMBERS = 63] = "GROUP_UNMUTE_MEMBERS", n[n.GROUP_FETCH_MUTES = 64] = "GROUP_FETCH_MUTES", n[n.GROUP_BLOCK_MEMBER = 65] = "GROUP_BLOCK_MEMBER", n[n.GROUP_BLOCK_MEMBERS = 66] = "GROUP_BLOCK_MEMBERS", n[n.GROUP_UNBLOCK_MEMBER = 67] = "GROUP_UNBLOCK_MEMBER", n[n.GROUP_UNBLOCK_MEMBERS = 68] = "GROUP_UNBLOCK_MEMBERS", n[n.GROUP_GET_BLOCK_LIST = 69] = "GROUP_GET_BLOCK_LIST", n[n.GROUP_MUTE_ALLMEMBERS = 70] = "GROUP_MUTE_ALLMEMBERS", n[n.GROUP_UNMUTE_ALLMEMBERS = 71] = "GROUP_UNMUTE_ALLMEMBERS", n[n.GROUP_ADD_WHITELIST = 72] = "GROUP_ADD_WHITELIST", n[n.GROUP_REMOVE_WHITELIST = 73] = "GROUP_REMOVE_WHITELIST", n[n.GROUP_FETCH_WHITELIST = 74] = "GROUP_FETCH_WHITELIST", n[n.GROUP_IS_IN_WHITELIST = 75] = "GROUP_IS_IN_WHITELIST", n[n.GROUP_GET_READ_USERS = 76] = "GROUP_GET_READ_USERS", n[n.GROUP_FETCH_ANNOUNCEMENT = 77] = "GROUP_FETCH_ANNOUNCEMENT", n[n.GROUP_UPDATE_ANNOUNCEMENT = 78] = "GROUP_UPDATE_ANNOUNCEMENT", n[n.GROUP_UPLOAD_SHAREDFILE = 79] = "GROUP_UPLOAD_SHAREDFILE", n[n.GROUP_DELETE_SHAREDFILE = 80] = "GROUP_DELETE_SHAREDFILE", n[n.GROUP_FETCH_SHAREDFILE = 81] = "GROUP_FETCH_SHAREDFILE", n[n.GROUP_DOWNLOAD_SHAREDFILE = 82] = "GROUP_DOWNLOAD_SHAREDFILE", n[n.GROUP_MEMBER_SET_META_DATA = 83] = "GROUP_MEMBER_SET_META_DATA", n[n.GROUP_MEMBER_FETCH_META_DATA = 84] = "GROUP_MEMBER_FETCH_META_DATA", n[n.GROUP_OPERATE = 100] = "GROUP_OPERATE", n[n.CHATROOM_FETCH_CHATROOMSWITHPAGE = 101] = "CHATROOM_FETCH_CHATROOMSWITHPAGE", n[n.CHATROOM_CREATECHATROOM = 102] = "CHATROOM_CREATECHATROOM", n[n.CHATROOM_DESTORYCHATROOM = 103] = "CHATROOM_DESTORYCHATROOM", n[n.CHATROOM_FETCH_SPECIFICATION = 104] = "CHATROOM_FETCH_SPECIFICATION", n[n.CHATROOM_CHANGE_ATTRIBUTE = 105] = "CHATROOM_CHANGE_ATTRIBUTE", n[n.CHATROOM_REMOVE_MEMBER = 106] = "CHATROOM_REMOVE_MEMBER", n[n.CHATROOM_REMOVE_MEMBERS = 107] = "CHATROOM_REMOVE_MEMBERS", n[n.CHATROOM_ADD_MEMBERS = 108] = "CHATROOM_ADD_MEMBERS", n[n.CHATROOM_JOINCAHTROOM = 109] = "CHATROOM_JOINCAHTROOM", n[n.CHATROOM_LEAVECAHTROOM = 110] = "CHATROOM_LEAVECAHTROOM", n[n.CHATROOM_FETCH_MEMBERS = 111] = "CHATROOM_FETCH_MEMBERS", n[n.CHATROOM_GET_ADMIN = 112] = "CHATROOM_GET_ADMIN", n[n.CHATROOM_SET_ADMIN = 113] = "CHATROOM_SET_ADMIN", n[n.CHATROOM_REMOVE_ADMIN = 114] = "CHATROOM_REMOVE_ADMIN", n[n.CHATROOM_MUTE_USER = 115] = "CHATROOM_MUTE_USER", n[n.CHATROOM_UNMUTE_USER = 116] = "CHATROOM_UNMUTE_USER", n[n.CHATROOM_FETCH_MUTES = 117] = "CHATROOM_FETCH_MUTES", n[n.CHATROOM_BLOCK_USER = 118] = "CHATROOM_BLOCK_USER", n[n.CHATROOM_BLOCK_USERS = 119] = "CHATROOM_BLOCK_USERS", n[n.CHATROOM_UNBLOCK_USER = 120] = "CHATROOM_UNBLOCK_USER", n[n.CHATROOM_UNBLOCK_USERS = 121] = "CHATROOM_UNBLOCK_USERS", n[n.CHATROOM_FETCH_BANS = 122] = "CHATROOM_FETCH_BANS", n[n.CHATROOM_MUTE_ALLMEMEBERS = 123] = "CHATROOM_MUTE_ALLMEMEBERS", n[n.CHATROOM_UNMUTE_ALLMEMEBERS = 124] = "CHATROOM_UNMUTE_ALLMEMEBERS", n[n.CHATROOM_ADD_WHITELIST = 125] = "CHATROOM_ADD_WHITELIST", n[n.CHATROOM_REMOVE_WHITELIST = 126] = "CHATROOM_REMOVE_WHITELIST", n[n.CHATROOM_FETCH_WHITELIST = 127] = "CHATROOM_FETCH_WHITELIST", n[n.CHATROOM_FETCH_MEMBERIN_WHITELIST = 128] = "CHATROOM_FETCH_MEMBERIN_WHITELIST", n[n.CHATROOM_FETCH_ANNOUNCEMENT = 129] = "CHATROOM_FETCH_ANNOUNCEMENT", n[n.CHATROOM_UPDATE_ANNOUNCEMENT = 130] = "CHATROOM_UPDATE_ANNOUNCEMENT", n[n.CHATROOM_REMOVE_SHARE_FILE = 131] = "CHATROOM_REMOVE_SHARE_FILE", n[n.CHATROOM_GET_SHARE_FILE_LIST = 132] = "CHATROOM_GET_SHARE_FILE_LIST", n[n.CHATROOM_UPLOAD_FILE = 133] = "CHATROOM_UPLOAD_FILE", n[n.CHATROOM_SET_META_DATA = 134] = "CHATROOM_SET_META_DATA", n[n.CHATROOM_DELETE_META_DATA = 135] = "CHATROOM_DELETE_META_DATA", n[n.CHATROOM_FETCH_META_DATA = 136] = "CHATROOM_FETCH_META_DATA", n[n.CHATROOM_OPERATE = 150] = "CHATROOM_OPERATE";
        }(r || (r = {})), function(n) {
          n.SDK_INTERNAL = "SDK_INTERNAL", n.LOGIN = "USER_LOGIN", n.REGISTER = "USER_CREATE", n.GET_CHATROOM_LIST = "CHATROOM_FETCH_CHATROOMSWITHPAGE", n.CREATE_CHATROOM = "CHATROOM_CREATECHATROOM", n.DESTROY_CHATROOM = "CHATROOM_DESTORYCHATROOM", n.GET_CHATROOM_DETAIL = "CHATROOM_FETCH_SPECIFICATION", n.MODIFY_CHATROOM = "CHATROOM_CHANGE_ATTRIBUTE", n.REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBER", n.MULTI_REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBERS", n.ADD_USERS_TO_CHATROOM = "CHATROOM_ADD_MEMBERS", n.JOIN_CHATROOM = "CHATROOM_JOINCAHTROOM", n.QUIT_CHATROOM = "CHATROOM_LEAVECAHTROOM", n.LIST_CHATROOM_MEMBERS = "CHATROOM_FETCH_MEMBERS", n.GET_CHATROOM_ADMIN = "CHATROOM_GET_ADMIN", n.SET_CHATROOM_ADMIN = "CHATROOM_SET_ADMIN", n.REMOVE_CHATROOM_ADMIN = "CHATROOM_REMOVE_ADMIN", n.MUTE_CHATROOM_MEMBER = "CHATROOM_MUTE_USER", n.REMOVE_MUTE_CHATROOM_MEMBER = "CHATROOM_UNMUTE_USER", n.GET_MUTE_CHATROOM_MEMBERS = "CHATROOM_FETCH_MUTES", n.SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USER", n.MULTI_SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USERS", n.REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USER", n.MULTI_REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USERS", n.GET_CHATROOM_BLOCK_MEMBERS = "CHATROOM_FETCH_BANS", n.DISABLED_CHATROOM_SEND_MSG = "CHATROOM_MUTE_ALLMEMEBERS", n.ENABLE_CHATROOM_SEND_MSG = "CHATROOM_UNMUTE_ALLMEMEBERS", n.ADD_CHATROOM_WHITE_USERS = "CHATROOM_ADD_WHITELIST", n.REMOVE_CHATROOM_WHITE_USERS = "CHATROOM_REMOVE_WHITELIST", n.GET_CHATROOM_WHITE_USERS = "CHATROOM_FETCH_WHITELIST", n.CHECK_CHATROOM_WHITE_USER = "CHATROOM_FETCH_MEMBERIN_WHITELIST", n.GET_CHATROOM_ANN = "CHATROOM_FETCH_ANNOUNCEMENT", n.UPDATE_CHATROOM_ANN = "CHATROOM_UPDATE_ANNOUNCEMENT", n.DELETE_CHATROOM_FILE = "CHATROOM_REMOVE_SHARE_FILE", n.GET_CHATROOM_FILES = "CHATROOM_GET_SHARE_FILE_LIST", n.UPLOAD_CHATROOM_FILE = "CHATROOM_UPLOAD_FILE", n.SET_CHATROOM_ATTR = "CHATROOM_SET_META_DATA", n.DELETE_CHATROOM_ATTR = "CHATROOM_DELETE_META_DATA", n.GET_CHATROOM_ATTR = "CHATROOM_FETCH_META_DATA", n.CREATE_GROUP = "GROUP_CREATEGROUP", n.BLOCK_GROUP = "GROUP_BLOCK_MESSAGE", n.LIST_GROUP = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", n.GET_USER_GROUP = "GROUP_FETCH_USERS_GROUP", n.CHANGE_OWNER = "GROUP_CHANGE_OWNER", n.GET_GROUP_INFO = "GROUP_FETCH_SPECIFICATION", n.MODIFY_GROUP = "GROUP_CHANGE_GROUPATTRIBUTE", n.LIST_GROUP_MEMBER = "GROUP_FETCH_MEMEBERS", n.GET_GROUP_ADMIN = "GROUP_GET_ADMIN", n.SET_GROUP_ADMIN = "GROUP_SET_ADMIN", n.REMOVE_GROUP_ADMIN = "GROUP_REMOVE_ADMIN", n.DISSOLVE_GROUP = "GROUP_DESTOTYGROUP", n.QUIT_GROUP = "GROUP_LEAVEGROUP", n.INVITE_TO_GROUP = "GROUP_INVITE_TO_GROUP", n.JOIN_GROUP = "GROUP_JOIN_PUBLICGROUP", n.AGREE_JOIN_GROUP = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", n.REJECT_JOIN_GROUP = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", n.AGREE_INVITE_GROUP = "GROUP_ACCEPT_INVITATION", n.REJECT_INVITE_GROUP = "GROUP_DECLINE_INVITATION", n.REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBER", n.MULTI_REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBERS", n.MUTE_GROUP_MEMBER = "GROUP_MUTE_MEMBERS", n.UNMUTE_GROUP_MEMBER = "GROUP_UNMUTE_MEMBERS", n.GET_GROUP_MUTE_LIST = "GROUP_FETCH_MUTES", n.BLOCK_GROUP_MEMBER = "GROUP_BLOCK_MEMBER", n.BLOCK_GROUP_MEMBERS = "GROUP_BLOCK_MEMBERS", n.UNBLOCK_GROUP_MEMBER = "GROUP_UNBLOCK_MEMBER", n.UNBLOCK_GROUP_MEMBERS = "GROUP_UNBLOCK_MEMBERS", n.GET_GROUP_BLACK_LIST = "GROUP_GET_BLOCK_LIST", n.DISABLED_SEND_GROUP_MSG = "GROUP_MUTE_ALLMEMBERS", n.ENABLE_SEND_GROUP_MSG = "GROUP_UNMUTE_ALLMEMBERS", n.ADD_USERS_TO_GROUP_WHITE = "GROUP_ADD_WHITELIST", n.REMOVE_GROUP_WHITE_MEMBER = "GROUP_REMOVE_WHITELIST", n.GET_GROUP_WHITE_LIST = "GROUP_FETCH_WHITELIST", n.IS_IN_GROUP_WHITE_LIST = "GROUP_IS_IN_WHITELIST", n.GET_GROUP_MSG_READ_USER = "GROUP_GET_READ_USERS", n.GET_GROUP_ANN = "GROUP_FETCH_ANNOUNCEMENT", n.UPDATE_GROUP_ANN = "GROUP_UPDATE_ANNOUNCEMENT", n.UPLOAD_GROUP_FILE = "GROUP_UPLOAD_SHAREDFILE", n.DELETE_GROUP_FILE = "GROUP_DELETE_SHAREDFILE", n.GET_GROUP_FILE_LIST = "GROUP_FETCH_SHAREDFILE", n.DOWN_GROUP_FILE = "GROUP_DOWNLOAD_SHAREDFILE", n.SET_GROUP_MEMBER_ATTRS = "GROUP_MEMBER_SET_META_DATA", n.GET_GROUP_MEMBER_ATTR = "GROUP_MEMBER_FETCH_META_DATA", n.GET_SESSION_LIST = "REST_GET_SESSION_LIST", n.DELETE_SESSION = "REST_DEL_SESSION", n.GET_HISTORY_MSG = "REST_GET_HISTORY_MESSAGE", n.PIN_CONVERSATION = "REST_PIN_CONVERSATION", n.UPDATE_USER_INFO = "USER_UPDATE_USERINFO", n.GET_USER_INFO = "USER_FETCH_USERINFO", n.UPDATE_USER_NICK = "USER_UPDATE_NICK", n.UPLOAD_PUSH_TOKEN = "USER_UPLOAD_PUSH_TOKEN", n.GET_BLACK_LIST = "ROSTER_BLACKLIST", n.GET_CONTACTS = "ROSTER_CONTACTS", n.add = "ROSTER_ADD", n.remove = "ROSTER_REMOVE", n.accept = "ROSTER_ACCEPT", n.decline = "ROSTER_DECLINE", n.ban = "ROSTER_BAN", n.allow = "ROSTER_ALLOW", n.SEND_MSG = "MSYNC_SENDMESSAGE", n.UPLOAD_MSG_ATTACH = "UPLOAD_MSG_ATTACH", n.SEND_RECALL_MSG = "MSYNC_RECALLMESSAGE";
        }(t || (t = {})), function(n) {
          n.GET_DNS = "REST_DNSLIST", n.LOGIN_BY_AGORA_TOKEN = "LOGIN_BY_AGORA_TOKEN", n.LOGIN_BY_PWD = "LOGIN_BY_PWD", n.RESISTER = "REGISTER";
        }(a || (a = {})), function(n) {
          n[n["5G"] = 7] = "5G", n[n["4G"] = 7] = "4G", n[n["3G"] = 7] = "3G", n[n["2G"] = 7] = "2G", n[n["SLOW-2G"] = 7] = "SLOW-2G", n[n.WIFI = 2] = "WIFI", n[n.LAN = 1] = "LAN", n[n.DISCONNECTED = 0] = "DISCONNECTED", n[n.NONE = 0] = "NONE", n[n.UNKNOWN = -1] = "UNKNOWN", n[n["WEBIM UNABLE TO GET"] = -2] = "WEBIM UNABLE TO GET";
        }(i || (i = {})), function(n) {
          n[n.success = 200] = "success", n[n.failed = 500] = "failed";
        }(s || (s = {})), function(n) {
          n[n.web = 0] = "web", n[n.native = 1] = "native";
        }(o || (o = {}));
      }, 7252: function(p, _) {
        var e = function() {
          function r(t) {
            this.type = t.type, this.message = t.message, this.data = t.data;
          }
          return r.create = function(t) {
            return new r(t);
          }, r;
        }();
        _.Z = e;
      }, 8161: function(p, _, e) {
        e(7941), e(3710), e(1539), e(9714), e(9653), e(8309), e(9554), e(4747), e(2772), e(2222);
        var r = e(3720), t = e.n(r), a = e(4363), i = e(4370), s = e(7360), o = e(4799), n = { 0: "TEXT", 1: "IMAGE", 2: "VIDEO", 3: "LOCATION", 4: "VOICE", 5: "FILE", 6: "COMMAND", 7: "CUSTOM" };
        function u(h) {
          for (var m = {}, f = 0; f < h.length; f++)
            if (h[f].type === 8)
              m[h[f].key] = JSON.parse(h[f].stringValue);
            else if (h[f].type === 7)
              m[h[f].key] = h[f].stringValue;
            else if (h[f].type === 6)
              m[h[f].key] = h[f].doubleValue;
            else if (h[f].type === 5)
              m[h[f].key] = h[f].floatValue;
            else if (h[f].type === 1) {
              var g = h[f].varintValue, d = new (t())(g.low, g.high, g.unsigned).toString();
              m[h[f].key] = Number(d) !== 0;
            } else
              h[f].type !== 2 && h[f].type !== 3 && h[f].type !== 4 || (g = h[f].varintValue, d = new (t())(g.low, g.high, g.unsigned).toString(), m[h[f].key] = Number(d));
          return m;
        }
        function c(h, m, f) {
          if (this.delivery && h !== m) {
            var g = this.getUniqueId(), d = new o.Message("delivery", g);
            d.set({ ackId: f, to: h }), s.kg.debug("send delivery ack"), this.send(d.body);
          }
        }
        _.Z = function(h, m, f, g) {
          var d, l, E, T, I, O, C, N = new (t())(h.timestamp.low, h.timestamp.high, h.timestamp.unsigned).toString(), v = this.root.lookup("easemob.pb.MessageBody").decode(h.payload), y = 1;
          if (h.meta && h.meta.length)
            switch (i.P6.parseNotify(h.meta).is_online) {
              case 0:
                y = 0;
                break;
              case 1:
                y = 1;
                break;
              default:
                y = 2;
            }
          else
            y = 3;
          var A = new (t())(h.id.low, h.id.high, h.id.unsigned).toString(), x = v.ackMessageId ? new (t())(v.ackMessageId.low, v.ackMessageId.high, v.ackMessageId.unsigned).toString() : "", j = "", P = v.from && v.from.name, W = v.to && v.to.name;
          switch (s.kg.debug("thirdMessage:", v), v.type) {
            case 1:
              j = "chat", this.grantType === "agoraToken" && (j = "singleChat"), this.delivery && c.call(this, P, W, A);
              break;
            case 2:
              j = "groupchat", this.grantType === "agoraToken" && (j = "groupChat");
              break;
            case 3:
              j = "chatroom", this.grantType === "agoraToken" && (j = "chatRoom"), y = 1;
              break;
            case 4:
              j = "read_ack";
              var Z = void 0;
              return v.ext[0] && JSON.parse(v.ext[0].stringValue) ? (Z = { id: A, type: "read", from: P, to: W, mid: x, groupReadCount: v.ext[0] && JSON.parse(v.ext[0].stringValue), ackContent: v.ackContent, onlineState: y }, this.onReadMessage && this.onReadMessage(Z), void ((d = this.eventHandler) === null || d === void 0 || d.dispatch("onReadMessage", Z))) : (Z = { id: A, type: "read", from: P, to: W, mid: x, onlineState: y }, this.onReadMessage && this.onReadMessage(Z), void ((l = this.eventHandler) === null || l === void 0 || l.dispatch("onReadMessage", Z)));
            case 5:
              j = "deliver_ack", this.onDeliveredMessage && this.onDeliveredMessage({ id: A, type: "delivery", from: P, to: W, mid: x, onlineState: y });
              var ee = { id: A, type: "delivery", from: P, to: W, mid: x, onlineState: y };
              return void ((E = this.eventHandler) === null || E === void 0 || E.dispatch("onDeliveredMessage", ee));
            case 6:
              j = "recall";
              var G = { id: A, from: P || "admin", to: W, mid: x, onlineState: y };
              return this.onRecallMessage && this.onRecallMessage(G), void ((T = this.eventHandler) === null || T === void 0 || T.dispatch("onRecallMessage", G));
            case 7:
              this.onChannelMessage && this.onChannelMessage({ id: A, type: "channel", chatType: "singleChat", from: P, to: W, time: Number(N), onlineState: y });
              var le = { id: A, type: "channel", chatType: "singleChat", from: P, to: W, time: Number(N), onlineState: y };
              return void ((I = this.eventHandler) === null || I === void 0 || I.dispatch("onChannelMessage", le));
            default:
              return void s.kg.error("unexpected message type: ".concat(v.type));
          }
          var ce, _e = "normal";
          if (j.toLowerCase() === "chat" || j === "singleChat")
            ce = "singleChat";
          else if (j.toLowerCase() === "groupchat" || j === "groupChat")
            ce = "groupChat";
          else if (ce = "chatRoom", y = 1, h.ext) {
            var Ue = u([h.ext]);
            _e = Ue.chatroom_msg_tag === 0 ? "high" : Ue.chatroom_msg_tag === 2 ? "low" : "normal";
          }
          for (var ve = 0; ve < v.contents.length; ve++) {
            var ye = {}, Pe = {}, We = m.errorCode > 0, ke = m.errorCode, Ve = m.reason, se = v.contents[ve], He = {}, Xe = [], nt = [], te = null, $e = null, Me = void 0;
            if (v.ext && (He = u(v.ext)), v.meta && typeof v.meta == "string") {
              var rt = JSON.parse(v.meta);
              rt.reaction && (Xe = rt.reaction).forEach(function(ie) {
                ie.isAddedBySelf = ie.state, delete ie.state;
              }), rt.translations && (nt = rt.translations), rt.thread && JSON.stringify(rt.thread) !== "{}" && (te = { messageId: rt.thread.msg_parent_id, parentId: rt.thread.muc_parent_id, chatThreadName: rt.thread.thread_name }), rt.thread_overview && JSON.stringify(rt.thread_overview) !== "{}" && ($e = { id: rt.thread_overview.id, parentId: rt.thread_overview.muc_parent_id, name: rt.thread_overview.name, lastMessage: rt.thread_overview.last_message ? (0, a.w)(rt.thread_overview.last_message) : null, createTimestamp: rt.thread_overview.create_timestamp, updateTimestamp: rt.thread_overview.update_timestamp, messageCount: rt.thread_overview.message_count || 0 });
            }
            switch (se.type) {
              case 0:
                !(ye = { id: A, type: j, contentsType: n[se.type], from: P, to: W, data: se.text, ext: He, sourceMsg: se.text, time: N, msgConfig: v.msgConfig, onlineState: y }).msgConfig && delete v.msgConfig, ye.error = We, ye.errorText = Ve, ye.errorCode = ke, !f && this.onTextMessage && this.onTextMessage(ye);
                var ot = { id: A, type: "txt", chatType: ce, msg: se.text, to: W, from: P, ext: He, time: Number(N), onlineState: y };
                ye.msgConfig && (ot.msgConfig = ye.msgConfig), Xe.length > 0 && (ot.reactions = Xe), te && (ot.chatThread = te), $e && (ot.chatThreadOverview = $e), nt.length > 0 && (ot.translations = nt), ce === "chatRoom" && (ot.priority = _e), Pe = ot, !f && this.eventHandler && this.eventHandler.dispatch("onTextMessage", ot);
                break;
              case 1:
                var it = ((O = se == null ? void 0 : se.size) === null || O === void 0 ? void 0 : O.width) || 0, ct = ((C = se == null ? void 0 : se.size) === null || C === void 0 ? void 0 : C.height) || 0;
                Me = this.useOwnUploadFun ? se.remotePath : (se.remotePath && this.apiUrl + se.remotePath.substr(se.remotePath.indexOf("/", 9))) + "?em-redirect=true", se.secretKey && !this.useOwnUploadFun && (Me = "".concat(Me, "&share-secret=").concat(se.secretKey)), !(ye = { id: A, type: j, contentsType: n[se.type], from: P, to: W, url: Me, secret: se.secretKey, filename: se.displayName, thumb: this.useOwnUploadFun ? "" : "".concat(Me, "&thumbnail=true"), thumb_secret: se.secretKey, file_length: se.fileLength || "", width: it, height: ct, filetype: se.filetype || "", accessToken: this.token, ext: He, time: N, msgConfig: v.msgConfig, onlineState: y }).delay && delete ye.delay, !ye.msgConfig && delete v.msgConfig, ye.error = We, ye.errorText = Ve, ye.errorCode = ke, !f && this.onPictureMessage && this.onPictureMessage(ye);
                var Ne = { id: A, type: "img", chatType: ce, from: P, to: W, url: Me || "", file: {}, width: it, height: ct, secret: se.secretKey || "", thumb: this.useOwnUploadFun ? "" : "".concat(Me, "&thumbnail=true"), thumb_secret: se.secretKey, file_length: se.fileLength || 0, ext: He, time: Number(N), onlineState: y };
                ye.msgConfig && (Ne.msgConfig = ye.msgConfig), Xe.length > 0 && (Ne.reactions = Xe), te && (Ne.chatThread = te), $e && (Ne.chatThreadOverview = $e), ce === "chatRoom" && (Ne.priority = _e), Pe = Ne, !f && this.eventHandler && this.eventHandler.dispatch("onImageMessage", Ne);
                break;
              case 2:
                Me = this.useOwnUploadFun ? se.remotePath : (se.remotePath && this.apiUrl + se.remotePath.substr(se.remotePath.indexOf("/", 9))) + "?em-redirect=true", se.secretKey && !this.useOwnUploadFun && (Me = "".concat(Me, "&share-secret=").concat(se.secretKey)), !(ye = { id: A, type: j, contentsType: n[se.type], from: P, to: W, url: Me, secret: se.secretKey, filename: se.displayName, length: se.duration || "", file_length: se.fileLength || "", filetype: se.filetype || "", accessToken: this.token || "", ext: He, time: N, msgConfig: v.msgConfig, onlineState: y }).delay && delete ye.delay, !ye.msgConfig && delete v.msgConfig, ye.error = We, ye.errorText = Ve, ye.errorCode = ke, !f && this.onVideoMessage && this.onVideoMessage(ye);
                var ze = { id: A, type: "video", chatType: ce, from: P, to: W, url: Me, secret: se.secretKey, filename: se.displayName, length: se.duration || 0, file: {}, file_length: se.fileLength || 0, filetype: se.filetype || "", accessToken: this.token || "", ext: He, time: Number(N), onlineState: y };
                ye.msgConfig && (ze.msgConfig = ye.msgConfig), Xe.length > 0 && (ze.reactions = Xe), te && (ze.chatThread = te), $e && (ze.chatThreadOverview = $e), ce === "chatRoom" && (ze.priority = _e), Pe = ze, !f && this.eventHandler && this.eventHandler.dispatch("onVideoMessage", ze);
                break;
              case 3:
                !(ye = { id: A, type: j, contentsType: n[se.type], from: P, to: W, addr: se.address, buildingName: se.buildingName, lat: se.latitude, lng: se.longitude, ext: He, time: N, msgConfig: v.msgConfig, onlineState: y }).delay && delete ye.delay, !ye.msgConfig && delete v.msgConfig, ye.error = We, ye.errorText = Ve, ye.errorCode = ke, !f && this.onLocationMessage && this.onLocationMessage(ye);
                var Ye = { id: A, type: "loc", chatType: ce, from: P, to: W, buildingName: se.buildingName, addr: se.address, lat: se.latitude, lng: se.longitude, ext: He, time: Number(N), onlineState: y };
                ye.msgConfig && (Ye.msgConfig = ye.msgConfig), Xe.length > 0 && (Ye.reactions = Xe), te && (Ye.chatThread = te), $e && (Ye.chatThreadOverview = $e), ce === "chatRoom" && (Ye.priority = _e), Pe = Ye, !f && this.eventHandler && this.eventHandler.dispatch("onLocationMessage", Ye);
                break;
              case 4:
                Me = this.useOwnUploadFun ? se.remotePath : (se.remotePath && this.apiUrl + se.remotePath.substr(se.remotePath.indexOf("/", 9))) + "?em-redirect=true", se.secretKey && !this.useOwnUploadFun && (Me = "".concat(Me, "&share-secret=").concat(se.secretKey)), !(ye = { id: A, type: j, contentsType: n[se.type], from: P, to: W, url: Me, secret: se.secretKey, filename: se.displayName, file_length: se.fileLength || "", accessToken: this.token || "", ext: He, length: se.duration, time: N, msgConfig: v.msgConfig, onlineState: y }).delay && delete ye.delay, !ye.msgConfig && delete v.msgConfig, ye.error = We, ye.errorText = Ve, ye.errorCode = ke, !f && this.onAudioMessage && this.onAudioMessage(ye);
                var qe = { id: A, type: "audio", chatType: ce, from: P, to: W, url: Me, secret: se.secretKey, file: {}, filename: se.displayName, length: se.duration || 0, file_length: se.fileLength || 0, filetype: se.filetype || "", accessToken: this.token || "", ext: He, time: Number(N), onlineState: y };
                ye.msgConfig && (qe.msgConfig = ye.msgConfig), Xe.length > 0 && (qe.reactions = Xe), te && (qe.chatThread = te), $e && (qe.chatThreadOverview = $e), ce === "chatRoom" && (qe.priority = _e), Pe = qe, !f && this.eventHandler && this.eventHandler.dispatch("onAudioMessage", qe);
                break;
              case 5:
                Me = this.useOwnUploadFun ? se.remotePath : (se.remotePath && this.apiUrl + se.remotePath.substr(se.remotePath.indexOf("/", 9))) + "?em-redirect=true", se.secretKey && !this.useOwnUploadFun && (Me = "".concat(Me, "&share-secret=").concat(se.secretKey)), !(ye = { id: A, type: j, contentsType: n[se.type], from: P, to: W, url: Me, secret: se.secretKey, filename: se.displayName, file_length: se.fileLength, accessToken: this.token || "", ext: He, time: N, msgConfig: v.msgConfig, onlineState: y }).delay && delete ye.delay, !ye.msgConfig && delete v.msgConfig, ye.error = We, ye.errorText = Ve, ye.errorCode = ke, !f && this.onFileMessage && this.onFileMessage(ye);
                var Oe = { id: A, type: "file", chatType: ce, from: P, to: W, url: Me, secret: se.secretKey, file: {}, filename: se.displayName, length: se.duration || 0, file_length: se.fileLength || 0, filetype: se.filetype || "", accessToken: this.token || "", ext: He, time: Number(N), onlineState: y };
                ye.msgConfig && (Oe.msgConfig = ye.msgConfig), Xe.length > 0 && (Oe.reactions = Xe), te && (Oe.chatThread = te), $e && (Oe.chatThreadOverview = $e), ce === "chatRoom" && (Oe.priority = _e), Pe = Oe, !f && this.eventHandler && this.eventHandler.dispatch("onFileMessage", Oe);
                break;
              case 6:
                !(ye = { id: A, type: j, contentsType: n[se.type], from: P, to: W, action: se.action, ext: He, time: N, msgConfig: v.msgConfig, onlineState: y }).msgConfig && delete v.msgConfig, ye.error = We, ye.errorText = Ve, ye.errorCode = ke, !f && this.onCmdMessage && this.onCmdMessage(ye);
                var w = { id: A, type: "cmd", chatType: ce, from: P, to: W, action: se.action, ext: He, time: Number(N), onlineState: y };
                ye.msgConfig && (w.msgConfig = ye.msgConfig), Xe.length > 0 && (w.reactions = Xe), te && (w.chatThread = te), $e && (w.chatThreadOverview = $e), ce === "chatRoom" && (w.priority = _e), Pe = w, !f && this.eventHandler && this.eventHandler.dispatch("onCmdMessage", w);
                break;
              case 7:
                var z = {}, re = {};
                v.contents[0].customExts && (z = u(v.contents[0].customExts)), v.contents[0].params && (re = u(v.contents[0].params)), ye = { id: A, type: j, contentsType: n[se.type], from: P, to: W, customEvent: se.customEvent, params: re, customExts: z, ext: He, time: N, onlineState: y }, !f && this.onCustomMessage && this.onCustomMessage(ye);
                var q = { id: A, type: "custom", chatType: ce, from: P, to: W, customEvent: se.customEvent, params: re, customExts: z, ext: He, time: Number(N), onlineState: y };
                ye.msgConfig && (q.msgConfig = ye.msgConfig), Xe.length > 0 && (q.reactions = Xe), te && (q.chatThread = te), $e && (q.chatThreadOverview = $e), ce === "chatRoom" && (q.priority = _e), Pe = q, !f && this.eventHandler && this.eventHandler.dispatch("onCustomMessage", q);
                break;
              default:
                s.kg.error("Unknow message type, message:", se);
            }
            return g ? Pe : ye;
          }
        };
      }, 4968: function(p, _, e) {
        e(8309);
        var r, t = e(7360), a = e(2071), i = e(1595);
        (function(o) {
          o[o.Add = 2] = "Add", o[o.Remove = 3] = "Remove", o[o.Accept = 4] = "Accept", o[o.Decline = 5] = "Decline", o[o.Ban = 6] = "Ban", o[o.Allow = 7] = "Allow";
        })(r || (r = {}));
        var s = { operatRoster: function(o, n, u, c) {
          var h = [], m = this.root.lookup("easemob.pb.RosterBody"), f = m.decode(h);
          switch (n) {
            case "add":
              f.operation = r.Add;
              break;
            case "remove":
              f.operation = r.Remove;
              break;
            case "accept":
              f.operation = r.Accept;
              break;
            case "decline":
              f.operation = r.Decline;
              break;
            case "ban":
              f.operation = r.Ban;
              break;
            case "allow":
              f.operation = r.Allow;
              break;
            default:
              t.kg.error("operatRoster:", n);
          }
          f.from = this.context.jid;
          var g = [];
          if (typeof o.to == "string")
            g.push({ appKey: this.appKey || this.context.appKey, name: o.to, domain: "easemob.com" });
          else if (o.to instanceof Array)
            for (var d = 0; d < o.to.length; d++)
              g.push({ appKey: this.appKey, name: o.to[d], domain: "easemob.com" });
          f.to = g, f.reason = o.message || "", f = m.encode(f).finish();
          var l = this.root.lookup("easemob.pb.Meta").decode(h);
          l.id = o.id || this.getUniqueId();
          var E = this.dataReport.geOperateFun({ operationName: i.fI[n] });
          a.Nl.size <= a.F3 && a.Nl.set(l.id, { rpt: E, requestName: i.fI[n], resolve: u, reject: c }), l.from = this.context.jid, l.to = { domain: "@easemob.com" }, l.ns = 3, l.payload = f;
          var T = this.root.lookup("easemob.pb.CommSyncUL"), I = T.decode(h);
          I.meta = l, I = T.encode(I).finish();
          var O = this.root.lookup("easemob.pb.MSync"), C = O.decode(h);
          if (C.version = this.version, C.encryptType = [0], C.command = 0, C.guid = this.jid, C.payload = I, C = O.encode(C).finish(), this.name === "miniCore")
            this.sock.send(C);
          else {
            var N = this.mSync.base64transform(C);
            this.sock.send(N);
          }
        }, handleRosterMsg: function(o) {
          var n, u, c, h, m, f, g = this.root.lookup("easemob.pb.RosterBody").decode(o.payload), d = { type: "", to: g.to[0].name, from: g.from.name, status: g.reason };
          switch (g.operation) {
            case 2:
              d.type = "subscribe", this.onContactInvited && this.onContactInvited(d), (n = this.eventHandler) === null || n === void 0 || n.dispatch("onContactInvited", d);
              break;
            case 3:
              d.type = "unsubscribed", this.onContactDeleted && this.onContactDeleted(d), (u = this.eventHandler) === null || u === void 0 || u.dispatch("onContactDeleted", d);
              break;
            case 4:
              d.type = "subscribed", this.onContactAdded && this.onContactAdded(d), (c = this.eventHandler) === null || c === void 0 || c.dispatch("onContactAdded", d);
              break;
            case 5:
              d.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(d), (h = this.eventHandler) === null || h === void 0 || h.dispatch("onContactRefuse", d);
              break;
            case 6:
            case 7:
              break;
            case 8:
              d.type = "subscribed", this.onContactAgreed && this.onContactAgreed(d), (m = this.eventHandler) === null || m === void 0 || m.dispatch("onContactAgreed", d);
              break;
            case 9:
              d.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(d), (f = this.eventHandler) === null || f === void 0 || f.dispatch("onContactRefuse", d);
              break;
            default:
              t.kg.error("handleRosterMsg:", g);
          }
          this.onPresence && d.type && this.onPresence(d);
        } };
        _.Z = s;
      }, 7360: function(p, _, e) {
        function r() {
          console.log && (console.log.apply ? console.log.apply(console, Array.prototype.slice.call(arguments)) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
        }
        e.d(_, { kg: function() {
          return m;
        } }), e(7042), e(2222), e(8309), e(9600), e(6992), e(1539), e(8783), e(3948), e(285), e(1637), e(4812), e(3710), e(9554), e(2772), e(4916), e(2526), e(1817), e(2165);
        var t = typeof window < "u" && window.navigator !== void 0 && /Trident\/|MSIE /.test(window.navigator.userAgent);
        function a(f) {
          return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
            return typeof g;
          } : function(g) {
            return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
          }, a(f);
        }
        var i, s = function() {
        }, o = {};
        (function(f) {
          f[f.TRACE = 0] = "TRACE", f[f.DEBUG = 1] = "DEBUG", f[f.INFO = 2] = "INFO", f[f.WARN = 3] = "WARN", f[f.ERROR = 4] = "ERROR", f[f.SILENT = 5] = "SILENT";
        })(i || (i = {}));
        var n = function() {
          function f(g, d, l) {
            this.name = g || "defaultLogger", this.currentLevel = 0, this.useCookiePersist = !1, this.storageLogLevelKey = "loglevel", this.levels = i, this.logMethods = ["trace", "debug", "info", "warn", "error"], this.methodFactory = l || this.defaultMethodFactory;
            var E = this._getPersistedLevel();
            E == null && (E = d === null ? "WARN" : d), this.logs = [], this.config = { useCache: !1, maxCache: 3145728, color: "", background: "" }, this.logBytes = 0, this.setLevel(E, !1, "");
          }
          return f.prototype.setConfig = function(g) {
            this.config = g;
          }, f.prototype.getLevel = function() {
            return this.currentLevel;
          }, f.prototype.setLevel = function(g, d, l) {
            if (typeof g == "string" && (g = i[g]), g === void 0 && (g = 0), !(typeof g == "number" && g >= 0 && g <= this.levels.SILENT))
              throw Error("log.setLevel() called with invalid level: " + g);
            if (this.currentLevel = g, d !== !1 && this._persistLevel(g), this.replaceLoggingMethods(g, l), typeof console > "u" && g < i.SILENT)
              throw Error("No console available for logging");
          }, f.prototype.setDefaultLevel = function(g) {
            this._getPersistedLevel() || this.setLevel(g, !1, "");
          }, f.prototype.enableAll = function(g) {
            this.setLevel(this.levels.TRACE, !0, "");
          }, f.prototype.disableAll = function(g) {
            this.setLevel(this.levels.SILENT, !0, "");
          }, f.prototype.getLogs = function() {
            return this.logs;
          }, f.prototype.download = function() {
            if (typeof window < "u" && typeof document < "u") {
              var g = this.getLogs().join(`
`), d = new Blob([g], { type: "text/plain;charset=UTF-8" }), l = window.URL.createObjectURL(d), E = document.createElement("a");
              E.style.display = "none", E.href = l, E.setAttribute("download", "sdklog"), document.body.appendChild(E), E.click();
            }
          }, f.prototype._bindMethod = function(g, d, l) {
            var E = this, T = g[d], I = this.getTime();
            if (l)
              return this._cacheLog;
            if (typeof T.bind == "function")
              return function() {
                for (var O = [], C = 0; C < arguments.length; C++)
                  O[C] = arguments[C];
                var N = E.getTime();
                T.call.apply(T, function(v, y, A) {
                  if (A || arguments.length === 2)
                    for (var x, j = 0, P = y.length; j < P; j++)
                      !x && j in y || (x || (x = Array.prototype.slice.call(y, 0, j)), x[j] = y[j]);
                  return v.concat(x || Array.prototype.slice.call(y));
                }([g, "".concat(N, " IM SDK [").concat(d === "log" ? "debug" : d, "]: ")], O, !1)), E.onLog && E.onLog({ time: N, level: d === "log" ? "debug" : d, logs: O });
              };
            try {
              return Function.prototype.bind.call(T, g, "".concat(I, " IM SDK [").concat(d === "log" ? "debug" : d, "]: "));
            } catch {
              return function() {
                return Function.prototype.apply.apply(T, [g, arguments]);
              };
            }
          }, f.prototype.getTime = function() {
            var g = /* @__PURE__ */ new Date();
            return g.toTimeString().split(" ")[0] + ":" + g.getMilliseconds();
          }, f.prototype._cacheLog = function() {
            for (var g = [], d = 0; d < arguments.length; d++)
              g[d] = arguments[d];
            var l = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", E = "";
            g.forEach(function(T) {
              a(T) === "object" ? E += JSON.stringify(T) + " " : E += T + " ";
            }), this._cacheLogCall(l + E);
          }, f.prototype._cacheLogCall = function(g) {
            var d = u(g), l = this.logBytes + d, E = this.config.maxCache;
            if (!(d >= E)) {
              if (l < E)
                this.logBytes += d;
              else
                for (var T = l - E, I = 0; I < T; ) {
                  var O = this.logs.shift();
                  O !== void 0 && (I += u(O));
                }
              this.logs.push(g);
            }
          }, f.prototype._getPersistedLevel = function() {
            var g;
            if (typeof window > "u")
              return 5;
            if ((g = window && window.localStorage && window.localStorage[this.storageLogLevelKey]) === "undefined") {
              var d = window.document.cookie, l = d.indexOf(encodeURIComponent(this.storageLogLevelKey));
              l !== -1 && (g = /^([^;]+)/.exec(d.slice(l))[1]);
            }
            return g || 5;
          }, f.prototype._persistLevel = function(g) {
            var d = this.logMethods[g] || "SILENT";
            typeof window < "u" && (window.localStorage && (window.localStorage[this.storageLogLevelKey] = d), this.useCookiePersist && (window.document.cookie = encodeURIComponent(this.storageLogLevelKey) + "=" + d + ";"));
          }, f.prototype.replaceLoggingMethods = function(g, d) {
            for (var l = 0; l < this.logMethods.length; l++) {
              var E = this.logMethods[l];
              this[E] = l < g ? s : this.methodFactory(E, g, d);
            }
            this.log = this.debug;
          }, f.prototype.defaultMethodFactory = function(g, d, l) {
            return this.realMethod(g) || this.enableLoggingWhenConsoleArrives.apply(this, [g, d, l]);
          }, f.prototype.realMethod = function(g) {
            return g === "debug" && (g = "log"), typeof console < "u" && (g === "trace" && t ? r : console[g] !== void 0 ? this._bindMethod(console, g, this.config.useCache) : console.log !== void 0 ? this._bindMethod(console, "log", this.config.useCache) : s);
          }, f.prototype.enableLoggingWhenConsoleArrives = function(g, d, l) {
            return (function() {
              typeof console < "u" && (this.replaceLoggingMethods.call(this, d, l), this[g].apply(this, arguments));
            }).bind(this);
          }, f;
        }();
        function u(f) {
          for (var g = f.length, d = 0; d < f.length; d++)
            f.charCodeAt(d) > 255 && g++;
          return g;
        }
        var c = new n();
        c.getLogger = function(f) {
          if (typeof f != "string" || f === "")
            throw new TypeError("You must supply a name when creating a logger.");
          return this;
        };
        var h = typeof window < "u" ? window.log : void 0;
        c.noConflict = function() {
          return typeof window < "u" && window.log === c && (window.log = h), c;
        }, c.getLoggers = function() {
          return o;
        };
        var m = c;
      }, 4799: function(p, _, e) {
        e.d(_, { Message: function() {
          return g;
        } });
        var r = e(4370), t = function() {
          function d(l) {
            var E = l.id;
            this.id = E, this.type = l.type;
          }
          return d.prototype.set = function(l) {
            this.body = { id: this.id, ackId: l.id, type: "read", to: l.to, from: l.from || "", chatType: l.chatType };
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), chatType: l.chatType, ackId: l.id, type: "read", to: l.to, from: l.from || "", ackContent: l.ackContent, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly };
          }, d;
        }(), a = function() {
          function d(l) {
            this.id = l.id, this.type = l.type;
          }
          return d.prototype.set = function(l) {
            this.body = { id: this.id, ackId: l.ackId, type: "delivery", to: l.to, from: l.from || "" };
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), ackId: l.ackId, type: "delivery", to: l.to, from: l.from || "", isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly };
          }, d;
        }(), i = (e(3843), e(3710), function() {
          function d(l) {
            var E = l.type, T = l.id;
            this.id = T, this.type = E;
          }
          return d.prototype.set = function(l) {
            this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "channel", to: l.to, from: l.from || "", time: Date.now() };
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), type: "channel", chatType: l.chatType || "singleChat", to: l.to, from: l.from || "", time: Date.now(), isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly };
          }, d;
        }()), s = (e(9753), function() {
          function d(l) {
            var E = l.type, T = l.id || r.P6.getUniqueId();
            this.id = T, this.type = E, this.value = "";
          }
          return d.prototype.set = function(l) {
            this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "txt", to: l.to, msg: l.msg, from: l.from, roomType: l.roomType, success: l.success, fail: l.fail, ext: l.ext, time: Date.now(), isChatThread: l.isChatThread }, this.value = l.msg;
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            var E, T;
            return !((E = l.msgConfig) === null || E === void 0) && E.languages && Array.isArray((T = l.msgConfig) === null || T === void 0 ? void 0 : T.languages), { type: "txt", id: r.P6.getUniqueId(), msg: l.msg, to: l.to, from: l.from || "", chatType: l.chatType, ext: l.ext, time: Date.now(), msgConfig: l.msgConfig, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly, receiverList: l.receiverList };
          }, d;
        }()), o = function() {
          function d(l) {
            var E = l.type, T = l.id;
            this.id = T || r.P6.getUniqueId(), this.type = E;
          }
          return d.prototype.set = function(l) {
            this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "cmd", to: l.to, action: l.action, from: l.from, roomType: l.roomType, success: l.success, fail: l.fail, ext: l.ext, time: Date.now() };
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), type: "cmd", to: l.to, from: l.from || "", chatType: l.chatType || "singleChat", action: l.action, time: Date.now(), ext: l.ext, msgConfig: l.msgConfig, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly, receiverList: l.receiverList };
          }, d;
        }(), n = function() {
          function d(l) {
            var E = l.type, T = l.id || r.P6.getUniqueId();
            this.id = T, this.type = E;
          }
          return d.prototype.set = function(l) {
            this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "custom", to: l.to, customEvent: l.customEvent, customExts: l.customExts, from: l.from, roomType: l.roomType, success: l.success, fail: l.fail, ext: l.ext, time: Date.now() };
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), chatType: l.chatType || "singleChat", type: "custom", to: l.to, customEvent: l.customEvent, customExts: l.customExts, from: l.from || "", ext: l.ext, time: Date.now(), msgConfig: l.msgConfig, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly, receiverList: l.receiverList };
          }, d;
        }(), u = function() {
          function d(l) {
            var E = l.type, T = l.id;
            this.id = T || r.P6.getUniqueId(), this.type = E;
          }
          return d.prototype.set = function(l) {
            this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "loc", to: l.to, addr: l.addr, buildingName: l.buildingName, lat: l.lat, lng: l.lng, from: l.from, roomType: l.roomType, success: l.success, fail: l.fail, ext: l.ext, time: Date.now() };
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), chatType: l.chatType || "singleChat", type: "loc", to: l.to, addr: l.addr, buildingName: l.buildingName, lat: l.lat, lng: l.lng, from: l.from || "", ext: l.ext, time: Date.now(), msgConfig: l.msgConfig, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly, receiverList: l.receiverList };
          }, d;
        }(), c = function() {
          function d(l) {
            var E = l.type, T = l.id || r.P6.getUniqueId();
            this.id = T, this.type = E;
          }
          return d.prototype.set = function(l) {
            l.file = l.file || l.fileInputId && r.P6.getFileUrl(l.fileInputId), this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "img", file: l.file, width: l.width, height: l.height, to: l.to, from: l.from || "", roomType: l.roomType, success: l.success, fail: l.fail, ext: l.ext, time: Date.now(), onFileUploadError: l.onFileUploadError, onFileUploadComplete: l.onFileUploadComplete, onFileUploadProgress: l.onFileUploadProgress, body: l.body, isChatThread: l.isChatThread };
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), chatType: l.chatType, type: "img", url: l.url, width: l.width, height: l.height, file: l.file, to: l.to, from: l.from || "", ext: l.ext, time: Date.now(), msgConfig: l.msgConfig, file_length: l.file_length, onFileUploadError: l.onFileUploadError, onFileUploadComplete: l.onFileUploadComplete, onFileUploadProgress: l.onFileUploadProgress, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly, receiverList: l.receiverList, thumbnailWidth: l.thumbnailWidth, thumbnailHeight: l.thumbnailHeight };
          }, d;
        }(), h = function() {
          function d(l) {
            var E = l.type, T = l.id || r.P6.getUniqueId();
            this.id = T, this.type = E;
          }
          return d.prototype.set = function(l) {
            l.file = l.file || l.fileInputId && r.P6.getFileUrl(l.fileInputId), this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "audio", file: l.file, filename: l.filename, length: l.length, file_length: l.file_length, fileInputId: l.fileInputId, to: l.to, from: l.from, roomType: l.roomType, success: l.success, fail: l.fail, ext: l.ext, time: Date.now(), onFileUploadError: l.onFileUploadError, onFileUploadComplete: l.onFileUploadComplete, onFileUploadProgress: l.onFileUploadProgress, body: l.body, isChatThread: l.isChatThread };
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), chatType: l.chatType, type: "audio", filename: l.filename, length: l.length, file: l.file, to: l.to, from: l.from || "", ext: l.ext, time: Date.now(), onFileUploadError: l.onFileUploadError, onFileUploadComplete: l.onFileUploadComplete, onFileUploadProgress: l.onFileUploadProgress, body: l.body, file_length: l.file_length, msgConfig: l.msgConfig, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly, receiverList: l.receiverList };
          }, d;
        }(), m = function() {
          function d(l) {
            var E = l.type, T = l.id;
            this.id = T, this.type = E;
          }
          return d.prototype.set = function(l) {
            l.file = l.file || l.fileInputId && r.P6.getFileUrl(l.fileInputId), this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "video", file: l.file, filename: l.filename, length: l.length, file_length: l.file_length, fileInputId: l.fileInputId, to: l.to, from: l.from, roomType: l.roomType, success: l.success, fail: l.fail, ext: l.ext, time: Date.now(), apiUrl: l.apiUrl, onFileUploadError: l.onFileUploadError, onFileUploadComplete: l.onFileUploadComplete, onFileUploadProgress: l.onFileUploadProgress, body: l.body, isChatThread: l.isChatThread };
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), chatType: l.chatType || "singleChat", type: "video", file: l.file, filename: l.filename, length: l.length, file_length: l.file_length, fileInputId: l.fileInputId, to: l.to, from: l.from || "", ext: l.ext, time: Date.now(), onFileUploadError: l.onFileUploadError, onFileUploadComplete: l.onFileUploadComplete, onFileUploadProgress: l.onFileUploadProgress, body: l.body, msgConfig: l.msgConfig, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly, receiverList: l.receiverList };
          }, d;
        }(), f = function() {
          function d(l) {
            var E = l.type, T = l.id;
            this.id = T, this.type = E;
          }
          return d.prototype.set = function(l) {
            l.file = l.file || l.fileInputId && r.P6.getFileUrl(l.fileInputId), this.body = { id: this.id, chatType: l.chatType || "singleChat", type: "file", file: l.file, filename: l.filename, fileInputId: l.fileInputId, to: l.to, from: l.from, roomType: l.roomType, success: l.success, fail: l.fail, ext: l.ext, time: Date.now(), onFileUploadError: l.onFileUploadError, onFileUploadComplete: l.onFileUploadComplete, onFileUploadProgress: l.onFileUploadProgress, body: l.body, isChatThread: l.isChatThread };
          }, d.prototype.setChatType = function(l) {
            return !!this.body && (this.body.chatType = l, !0);
          }, d.prototype.setGroup = function(l) {
            return !!this.body && (this.body.group = l, !0);
          }, d.create = function(l) {
            return { id: r.P6.getUniqueId(), chatType: l.chatType || "singleChat", type: "file", file: l.file, filename: l.filename, fileInputId: l.fileInputId, file_length: l.file_length, to: l.to, from: l.from || "", ext: l.ext, onFileUploadError: l.onFileUploadError, onFileUploadComplete: l.onFileUploadComplete, onFileUploadProgress: l.onFileUploadProgress, body: l.body, time: Date.now(), msgConfig: l.msgConfig, isChatThread: l.isChatThread, priority: l.priority, deliverOnlineOnly: l.deliverOnlineOnly, receiverList: l.receiverList };
          }, d;
        }(), g = function() {
          function d(l, E) {
            return this.type = l, this.id = E || r.P6.getUniqueId(), d.createOldMsg({ type: l, id: this.id });
          }
          return d.createOldMsg = function(l) {
            switch (l.type) {
              case "read":
                return new t({ type: "read", id: l.id });
              case "delivery":
                return new a({ type: "delivery", id: l.id });
              case "channel":
                return new i({ type: "channel", id: l.id });
              case "txt":
                return new s({ type: "txt", id: l.id });
              case "cmd":
                return new o({ type: "cmd", id: l.id });
              case "custom":
                return new n({ type: "custom", id: l.id });
              case "loc":
                return new u({ type: "loc", id: l.id });
              case "img":
                return new c({ type: "img", id: l.id });
              case "audio":
                return new h({ type: "audio", id: l.id });
              case "video":
                return new m({ type: "video", id: l.id });
              case "file":
                return new f({ type: "file", id: l.id });
            }
          }, d.create = function(l) {
            return (E = l).type !== "txt" || "version" in E ? function(T) {
              return T.type === "img" && !("version" in T);
            }(l) ? c.create(l) : function(T) {
              return T.type === "cmd" && !("version" in T);
            }(l) ? o.create(l) : function(T) {
              return T.type === "file" && !("version" in T);
            }(l) ? f.create(l) : function(T) {
              return T.type === "audio" && !("version" in T);
            }(l) ? h.create(l) : function(T) {
              return T.type === "video" && !("version" in T);
            }(l) ? m.create(l) : function(T) {
              return T.type === "custom" && !("version" in T);
            }(l) ? n.create(l) : function(T) {
              return T.type === "loc" && !("version" in T);
            }(l) ? u.create(l) : function(T) {
              return T.type === "channel" && !("version" in T);
            }(l) ? i.create(l) : function(T) {
              return T.type === "delivery" && !("version" in T);
            }(l) ? a.create(l) : function(T) {
              return T.type === "read" && !("version" in T);
            }(l) ? t.create(l) : {} : s.create(l);
            var E;
          }, d.prototype.set = function(l) {
          }, d;
        }();
      }, 5531: function(p, _, e) {
        var r;
        e.d(_, { E: function() {
          return r;
        } }), function(t) {
          t[t.REQUEST_SUCCESS = 0] = "REQUEST_SUCCESS", t[t.REQUEST_TIMEOUT = -1] = "REQUEST_TIMEOUT", t[t.REQUEST_UNKNOWN = -2] = "REQUEST_UNKNOWN", t[t.REQUEST_PARAMETER_ERROR = -3] = "REQUEST_PARAMETER_ERROR", t[t.REQUEST_ABORT = -4] = "REQUEST_ABORT", t[t.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0] = "WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_OPEN_ERROR = 1] = "WEBIM_CONNCTION_OPEN_ERROR", t[t.WEBIM_CONNCTION_AUTH_ERROR = 2] = "WEBIM_CONNCTION_AUTH_ERROR", t[t.WEBIM_CONNCTION_OPEN_USERGRID_ERROR = 3] = "WEBIM_CONNCTION_OPEN_USERGRID_ERROR", t[t.WEBIM_CONNCTION_ATTACH_ERROR = 4] = "WEBIM_CONNCTION_ATTACH_ERROR", t[t.WEBIM_CONNCTION_ATTACH_USERGRID_ERROR = 5] = "WEBIM_CONNCTION_ATTACH_USERGRID_ERROR", t[t.WEBIM_CONNCTION_REOPEN_ERROR = 6] = "WEBIM_CONNCTION_REOPEN_ERROR", t[t.WEBIM_CONNCTION_SERVER_CLOSE_ERROR = 7] = "WEBIM_CONNCTION_SERVER_CLOSE_ERROR", t[t.WEBIM_CONNCTION_SERVER_ERROR = 8] = "WEBIM_CONNCTION_SERVER_ERROR", t[t.WEBIM_CONNCTION_IQ_ERROR = 9] = "WEBIM_CONNCTION_IQ_ERROR", t[t.WEBIM_CONNCTION_PING_ERROR = 10] = "WEBIM_CONNCTION_PING_ERROR", t[t.WEBIM_CONNCTION_NOTIFYVERSION_ERROR = 11] = "WEBIM_CONNCTION_NOTIFYVERSION_ERROR", t[t.WEBIM_CONNCTION_GETROSTER_ERROR = 12] = "WEBIM_CONNCTION_GETROSTER_ERROR", t[t.WEBIM_CONNCTION_CROSSDOMAIN_ERROR = 13] = "WEBIM_CONNCTION_CROSSDOMAIN_ERROR", t[t.WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = 14] = "WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES", t[t.WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR = 15] = "WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR", t[t.WEBIM_CONNCTION_DISCONNECTED = 16] = "WEBIM_CONNCTION_DISCONNECTED", t[t.WEBIM_CONNCTION_AJAX_ERROR = 17] = "WEBIM_CONNCTION_AJAX_ERROR", t[t.WEBIM_CONNCTION_JOINROOM_ERROR = 18] = "WEBIM_CONNCTION_JOINROOM_ERROR", t[t.WEBIM_CONNCTION_GETROOM_ERROR = 19] = "WEBIM_CONNCTION_GETROOM_ERROR", t[t.WEBIM_CONNCTION_GETROOMINFO_ERROR = 20] = "WEBIM_CONNCTION_GETROOMINFO_ERROR", t[t.WEBIM_CONNCTION_GETROOMMEMBER_ERROR = 21] = "WEBIM_CONNCTION_GETROOMMEMBER_ERROR", t[t.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR = 22] = "WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR", t[t.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR = 23] = "WEBIM_CONNCTION_LOAD_CHATROOM_ERROR", t[t.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR = 24] = "WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR", t[t.WEBIM_CONNCTION_JOINCHATROOM_ERROR = 25] = "WEBIM_CONNCTION_JOINCHATROOM_ERROR", t[t.WEBIM_CONNCTION_QUITCHATROOM_ERROR = 26] = "WEBIM_CONNCTION_QUITCHATROOM_ERROR", t[t.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27] = "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28] = "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR = 29] = "WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR = 30] = "WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31] = "WEBIM_CONNCTION_CALLBACK_INNER_ERROR", t[t.WEBIM_CONNCTION_CLIENT_OFFLINE = 32] = "WEBIM_CONNCTION_CLIENT_OFFLINE", t[t.WEBIM_CONNCTION_CLIENT_LOGOUT = 33] = "WEBIM_CONNCTION_CLIENT_LOGOUT", t[t.WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR = 34] = "WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR", t[t.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP = 35] = "WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP", t[t.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP = 36] = "WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP", t[t.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP = 37] = "WEBIM_CONNECTION_ACCEPT_JOIN_GROUP", t[t.WEBIM_CONNECTION_DECLINE_JOIN_GROUP = 38] = "WEBIM_CONNECTION_DECLINE_JOIN_GROUP", t[t.WEBIM_CONNECTION_CLOSED = 39] = "WEBIM_CONNECTION_CLOSED", t[t.WEBIM_CONNECTION_ERROR = 40] = "WEBIM_CONNECTION_ERROR", t[t.MAX_LIMIT = 50] = "MAX_LIMIT", t[t.MESSAGE_NOT_FOUND = 51] = "MESSAGE_NOT_FOUND", t[t.NO_PERMISSION = 52] = "NO_PERMISSION", t[t.OPERATION_UNSUPPORTED = 53] = "OPERATION_UNSUPPORTED", t[t.OPERATION_NOT_ALLOWED = 54] = "OPERATION_NOT_ALLOWED", t[t.WEBIM_UPLOADFILE_BROWSER_ERROR = 100] = "WEBIM_UPLOADFILE_BROWSER_ERROR", t[t.WEBIM_UPLOADFILE_ERROR = 101] = "WEBIM_UPLOADFILE_ERROR", t[t.WEBIM_UPLOADFILE_NO_LOGIN = 102] = "WEBIM_UPLOADFILE_NO_LOGIN", t[t.WEBIM_UPLOADFILE_NO_FILE = 103] = "WEBIM_UPLOADFILE_NO_FILE", t[t.WEBIM_DOWNLOADFILE_ERROR = 200] = "WEBIM_DOWNLOADFILE_ERROR", t[t.WEBIM_DOWNLOADFILE_NO_LOGIN = 201] = "WEBIM_DOWNLOADFILE_NO_LOGIN", t[t.WEBIM_DOWNLOADFILE_BROWSER_ERROR = 202] = "WEBIM_DOWNLOADFILE_BROWSER_ERROR", t[t.USER_NOT_FOUND = 204] = "USER_NOT_FOUND", t[t.MESSAGE_PARAMETER_ERROR = 205] = "MESSAGE_PARAMETER_ERROR", t[t.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206] = "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE", t[t.WEBIM_CONNCTION_USER_REMOVED = 207] = "WEBIM_CONNCTION_USER_REMOVED", t[t.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216] = "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD", t[t.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217] = "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE", t[t.USER_MUTED_BY_ADMIN = 219] = "USER_MUTED_BY_ADMIN", t[t.USER_NOT_FRIEND = 221] = "USER_NOT_FRIEND", t[t.WEBIM_MESSAGE_REC_TEXT = 300] = "WEBIM_MESSAGE_REC_TEXT", t[t.WEBIM_MESSAGE_REC_TEXT_ERROR = 301] = "WEBIM_MESSAGE_REC_TEXT_ERROR", t[t.WEBIM_MESSAGE_REC_EMOTION = 302] = "WEBIM_MESSAGE_REC_EMOTION", t[t.WEBIM_MESSAGE_REC_PHOTO = 303] = "WEBIM_MESSAGE_REC_PHOTO", t[t.WEBIM_MESSAGE_REC_AUDIO = 304] = "WEBIM_MESSAGE_REC_AUDIO", t[t.WEBIM_MESSAGE_REC_AUDIO_FILE = 305] = "WEBIM_MESSAGE_REC_AUDIO_FILE", t[t.WEBIM_MESSAGE_REC_VEDIO = 306] = "WEBIM_MESSAGE_REC_VEDIO", t[t.WEBIM_MESSAGE_REC_VEDIO_FILE = 307] = "WEBIM_MESSAGE_REC_VEDIO_FILE", t[t.WEBIM_MESSAGE_REC_FILE = 308] = "WEBIM_MESSAGE_REC_FILE", t[t.WEBIM_MESSAGE_SED_TEXT = 309] = "WEBIM_MESSAGE_SED_TEXT", t[t.WEBIM_MESSAGE_SED_EMOTION = 310] = "WEBIM_MESSAGE_SED_EMOTION", t[t.WEBIM_MESSAGE_SED_PHOTO = 311] = "WEBIM_MESSAGE_SED_PHOTO", t[t.WEBIM_MESSAGE_SED_AUDIO = 312] = "WEBIM_MESSAGE_SED_AUDIO", t[t.WEBIM_MESSAGE_SED_AUDIO_FILE = 313] = "WEBIM_MESSAGE_SED_AUDIO_FILE", t[t.WEBIM_MESSAGE_SED_VEDIO = 314] = "WEBIM_MESSAGE_SED_VEDIO", t[t.WEBIM_MESSAGE_SED_VEDIO_FILE = 315] = "WEBIM_MESSAGE_SED_VEDIO_FILE", t[t.WEBIM_MESSAGE_SED_FILE = 316] = "WEBIM_MESSAGE_SED_FILE", t[t.WEBIM_MESSAGE_SED_ERROR = 317] = "WEBIM_MESSAGE_SED_ERROR", t[t.STATUS_INIT = 400] = "STATUS_INIT", t[t.STATUS_DOLOGIN_USERGRID = 401] = "STATUS_DOLOGIN_USERGRID", t[t.STATUS_DOLOGIN_IM = 402] = "STATUS_DOLOGIN_IM", t[t.STATUS_OPENED = 403] = "STATUS_OPENED", t[t.STATUS_CLOSING = 404] = "STATUS_CLOSING", t[t.STATUS_CLOSED = 405] = "STATUS_CLOSED", t[t.STATUS_ERROR = 406] = "STATUS_ERROR", t[t.SERVER_BUSY = 500] = "SERVER_BUSY", t[t.MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501] = "MESSAGE_INCLUDE_ILLEGAL_CONTENT", t[t.MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502] = "MESSAGE_EXTERNAL_LOGIC_BLOCKED", t[t.SERVER_UNKNOWN_ERROR = 503] = "SERVER_UNKNOWN_ERROR", t[t.MESSAGE_RECALL_TIME_LIMIT = 504] = "MESSAGE_RECALL_TIME_LIMIT", t[t.SERVICE_NOT_ENABLED = 505] = "SERVICE_NOT_ENABLED", t[t.SERVICE_NOT_ALLOW_MESSAGING = 506] = "SERVICE_NOT_ALLOW_MESSAGING", t[t.SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507] = "SERVICE_NOT_ALLOW_MESSAGING_MUTE", t[t.MESSAGE_MODERATION_BLOCKED = 508] = "MESSAGE_MODERATION_BLOCKED", t[t.MESSAGE_CURRENT_LIMITING = 509] = "MESSAGE_CURRENT_LIMITING", t[t.MESSAGE_WEBSOCKET_DISCONNECTED = 510] = "MESSAGE_WEBSOCKET_DISCONNECTED", t[t.MESSAGE_SIZE_LIMIT = 511] = "MESSAGE_SIZE_LIMIT", t[t.GROUP_NOT_EXIST = 605] = "GROUP_NOT_EXIST", t[t.GROUP_NOT_JOINED = 602] = "GROUP_NOT_JOINED", t[t.GROUP_MEMBERS_FULL = 606] = "GROUP_MEMBERS_FULL", t[t.PERMISSION_DENIED = 603] = "PERMISSION_DENIED", t[t.WEBIM_LOAD_MSG_ERROR = 604] = "WEBIM_LOAD_MSG_ERROR", t[t.GROUP_ALREADY_JOINED = 601] = "GROUP_ALREADY_JOINED", t[t.GROUP_MEMBERS_LIMIT = 607] = "GROUP_MEMBERS_LIMIT", t[t.GROUP_IS_DISABLED = 608] = "GROUP_IS_DISABLED", t[t.GROUP_MEMBER_ATTRIBUTES_SET_FAILED = 609] = "GROUP_MEMBER_ATTRIBUTES_SET_FAILED", t[t.REST_PARAMS_STATUS = 700] = "REST_PARAMS_STATUS", t[t.CHATROOM_NOT_JOINED = 702] = "CHATROOM_NOT_JOINED", t[t.CHATROOM_MEMBERS_FULL = 704] = "CHATROOM_MEMBERS_FULL", t[t.CHATROOM_NOT_EXIST = 705] = "CHATROOM_NOT_EXIST", t[t.SDK_RUNTIME_ERROR = 999] = "SDK_RUNTIME_ERROR", t[t.PRESENCE_PARAM_EXCEED = 1100] = "PRESENCE_PARAM_EXCEED", t[t.REACTION_ALREADY_ADDED = 1101] = "REACTION_ALREADY_ADDED", t[t.REACTION_CREATING = 1102] = "REACTION_CREATING", t[t.REACTION_OPERATION_IS_ILLEGAL = 1103] = "REACTION_OPERATION_IS_ILLEGAL", t[t.TRANSLATION_NOT_VALID = 1200] = "TRANSLATION_NOT_VALID", t[t.TRANSLATION_TEXT_TOO_LONG = 1201] = "TRANSLATION_TEXT_TOO_LONG", t[t.TRANSLATION_FAILED = 1204] = "TRANSLATION_FAILED", t[t.THREAD_NOT_EXIST = 1300] = "THREAD_NOT_EXIST", t[t.THREAD_ALREADY_EXIST = 1301] = "THREAD_ALREADY_EXIST", t[t.CONVERSATION_NOT_EXIST = 1400] = "CONVERSATION_NOT_EXIST";
        }(r || (r = {}));
      }, 4370: function(p, _, e) {
        e.d(_, { iw: function() {
          return d;
        }, hj: function() {
          return c;
        }, LR: function() {
          return O;
        }, cT: function() {
          return I;
        }, P6: function() {
          return N;
        } }), e(9601), e(1539), e(8674), e(3710), e(7941), e(6699), e(7042), e(2772), e(9714), e(9653), e(6992), e(8783), e(3948), e(285), e(1637), e(8309), e(4986), e(2023);
        var r = e(5531), t = function() {
          return t = Object.assign || function(v) {
            for (var y, A = 1, x = arguments.length; A < x; A++)
              for (var j in y = arguments[A])
                Object.prototype.hasOwnProperty.call(y, j) && (v[j] = y[j]);
            return v;
          }, t.apply(this, arguments);
        }, a = function(v, y, A, x) {
          var j, P, W, Z, ee, G, le, ce, _e, Ue, ve, ye, Pe, We, ke, Ve, se, He, Xe, nt, te = v.response;
          te && typeof te == "string" && (te = JSON.parse(te));
          var $e = v.status, Me = { elapse: x, httpCode: $e, errDesc: te == null ? void 0 : te.error_description };
          if ($e === 400) {
            if (te.error_code === 40002)
              return void y({ type: r.E.THREAD_ALREADY_EXIST, message: te == null ? void 0 : te.error_description, extraInfo: Me });
            if (te.error_code === 40009)
              return void y({ type: r.E.OPERATION_UNSUPPORTED, message: te == null ? void 0 : te.error_description, extraInfo: Me });
            if (te.error_code === 60005)
              return void y({ type: r.E.GROUP_MEMBER_ATTRIBUTES_SET_FAILED, message: (te == null ? void 0 : te.desc) || (te == null ? void 0 : te.error_description), extraInfo: Me });
            if (te.error_code === 60010)
              return void (te != null && te.error_description.includes("exceeds chatgroup user metadata single value limit") ? y({ type: r.E.MAX_LIMIT, message: (te == null ? void 0 : te.desc) || te.error_description, extraInfo: Me }) : y({ type: r.E.NO_PERMISSION, message: (te == null ? void 0 : te.desc) || te.error_description, extraInfo: Me }));
            if (te.error_code === 60011)
              return void y({ type: r.E.CHATROOM_NOT_JOINED, message: te == null ? void 0 : te.desc, extraInfo: Me });
            if (te.error_code === 60006 || te.error_code === 60007 || te.error_code === 60009 || te.error_code === 60012)
              return void y({ type: r.E.MAX_LIMIT, message: (te == null ? void 0 : te.desc) || (te == null ? void 0 : te.error_description), extraInfo: Me });
            if (!((j = te.error_description) === null || j === void 0) && j.includes("are not members of this group"))
              return !((P = v.responseURL) === null || P === void 0) && P.includes("chatgroups") ? y({ type: r.E.GROUP_NOT_JOINED, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : y({ type: r.E.CHATROOM_NOT_JOINED, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }), void A({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, message: te == null ? void 0 : te.error_description, data: v.responseText, extraInfo: Me });
            if ((te == null ? void 0 : te.result) === "the app not open presence")
              return void y({ type: r.E.SERVICE_NOT_ENABLED, message: te == null ? void 0 : te.result, extraInfo: Me });
            switch (te == null ? void 0 : te.error_description) {
              case "the user is already operation this message":
                y({ type: r.E.REACTION_ALREADY_ADDED, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "The quantity has exceeded the limit!":
                y({ type: r.E.MAX_LIMIT, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "The user not in this group!":
                y({ type: r.E.GROUP_NOT_JOINED, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "the user operation is illegal!":
                y({ type: r.E.REACTION_OPERATION_IS_ILLEGAL, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "this appKey is not open reaction service!":
              case "this appKey not open message roaming":
                y({ type: r.E.SERVICE_NOT_ENABLED, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "this message is creating reaction, please try again.":
                y({ type: r.E.REACTION_CREATING, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "groupId can not be null!":
                y({ type: r.E.GROUP_NOT_EXIST, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "The input text is too long.":
                y({ type: r.E.TRANSLATION_TEXT_TOO_LONG, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "The target language is not valid.":
                y({ type: r.E.TRANSLATION_NOT_VALID, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "report failed, get message by id failed":
                y({ type: r.E.MESSAGE_NOT_FOUND, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "ext is too big ":
                y({ type: r.E.PRESENCE_PARAM_EXCEED, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              case "Request body not readable.Please check content type is correct!":
                y({ type: r.E.REQUEST_PARAMETER_ERROR, message: te == null ? void 0 : te.error_description, extraInfo: Me });
                break;
              default:
                y({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, message: te == null ? void 0 : te.error_description, data: v.responseText, extraInfo: Me }), A({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, message: te == null ? void 0 : te.error_description, data: v.responseText, extraInfo: Me });
            }
          } else if ($e === 401)
            te.error_code === 40001 || te.error_code === 60001 || te.error_description === "Unable to authenticate (OAuth)" ? y({ type: r.E.NO_PERMISSION, message: te == null ? void 0 : te.error_description, extraInfo: Me }) : (A({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.responseText, message: v.responseText, extraInfo: Me }), y({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.responseText, message: v.responseText, extraInfo: Me }));
          else if ($e === 403)
            te.error_code === 4e4 || te.error_code === 60004 || te.error_code === 15002 ? y({ type: r.E.SERVICE_NOT_ENABLED, message: te == null ? void 0 : te.error_description, extraInfo: Me }) : te.error_code === 40003 || te.error_code === 40004 ? y({ type: r.E.THREAD_ALREADY_EXIST, message: te == null ? void 0 : te.error_description, extraInfo: Me }) : te.error_code === 40005 || te.error_code === 40007 || te.error_code === 91002 ? y({ type: r.E.MAX_LIMIT, message: te == null ? void 0 : te.error_description, extraInfo: Me }) : te.error_code === 60002 && y({ type: r.E.PERMISSION_DENIED, message: te == null ? void 0 : te.error_description, extraInfo: Me }), te.error_description === "group member list is full!" ? !((W = v.responseURL) === null || W === void 0) && W.includes("chatgroups") ? y({ type: r.E.GROUP_MEMBERS_FULL, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : y({ type: r.E.CHATROOM_MEMBERS_FULL, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : !((Z = te.error_description) === null || Z === void 0) && Z.includes(te.error_description.includes("already in group")) ? !((ee = v.responseURL) === null || ee === void 0) && ee.includes("chatgroups") && y({ type: r.E.GROUP_ALREADY_JOINED, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : !((G = te.error_description) === null || G === void 0) && G.includes("are not members of this group") ? !((le = v.responseURL) === null || le === void 0) && le.includes("chatgroups") ? y({ type: r.E.GROUP_NOT_JOINED, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : y({ type: r.E.CHATROOM_NOT_JOINED, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : !((ce = te.error_description) === null || ce === void 0) && ce.includes("service not open!") || !((_e = te.error_description) === null || _e === void 0) && _e.includes("message report not open") || !((Ue = te.error_description) === null || Ue === void 0) && Ue.includes("messageroaming function not open") ? y({ type: r.E.SERVICE_NOT_ENABLED, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : !((ve = te.error_description) === null || ve === void 0) && ve.includes("members size is greater than max user size !") ? y({ type: r.E.GROUP_MEMBERS_LIMIT, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : !((ye = te.error_description) === null || ye === void 0) && ye.includes("can not operate this group, reason: group is disabled") ? y({ type: r.E.GROUP_IS_DISABLED, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : y({ type: r.E.PERMISSION_DENIED, data: v.response || v.responseText, message: "permission denied", extraInfo: t(t({}, Me), { errDesc: "permission denied" }) }), A({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.responseText, message: v.responseText, extraInfo: Me });
          else if ($e === 404)
            te.error_code === 40011 ? y({ type: r.E.THREAD_NOT_EXIST, message: te == null ? void 0 : te.error_description, extraInfo: Me }) : te.error_code === 40012 ? y({ type: r.E.NO_PERMISSION, message: te == null ? void 0 : te.error_description, extraInfo: Me }) : te.error_code === 60003 || te.error_code === 20004 ? y({ type: r.E.GROUP_NOT_JOINED, message: te == null ? void 0 : te.error_description, extraInfo: Me }) : te.error_code === 91001 && y({ type: r.E.CONVERSATION_NOT_EXIST, message: te == null ? void 0 : te.error_description, extraInfo: Me }), !((Pe = te.error_description) === null || Pe === void 0) && Pe.includes("do not find this group") || !((We = te.error_description) === null || We === void 0) && We.includes("does not exist") ? !((ke = v.responseURL) === null || ke === void 0) && ke.includes("chatgroups") ? y({ type: r.E.GROUP_NOT_EXIST, data: v.response || v.responseText, message: "The chat room dose not exist.", extraInfo: t(t({}, Me), { errDesc: "The chat room dose not exist." }) }) : y({ type: r.E.CHATROOM_NOT_EXIST, data: v.response || v.responseText, message: "The chat room dose not exist.", extraInfo: t(t({}, Me), { errDesc: "The chat room dose not exist." }) }) : !((Ve = te.error_description) === null || Ve === void 0) && Ve.includes("username") && (!((se = te.error_description) === null || se === void 0) && se.includes("doesn't exist!'")) || !((He = te.error_description) === null || He === void 0) && He.includes("user not found") ? y({ type: r.E.USER_NOT_FOUND, data: v.response || v.responseText, message: te.error_description, extraInfo: Me }) : y({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.response || v.responseText, message: v.responseText, extraInfo: Me }), A({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.response || v.responseText, message: v.responseText, extraInfo: Me });
          else if ($e === 406)
            te.error_code === 90004 && y({ type: r.E.OPERATION_NOT_ALLOWED, message: te == null ? void 0 : te.error_description, extraInfo: Me });
          else if ($e === 429 || $e === 503) {
            if (!((Xe = te.error_description) === null || Xe === void 0) && Xe.includes("The request has reached the maximum limit"))
              return void y({ type: r.E.MAX_LIMIT, message: v.responseText, extraInfo: Me });
            y({ type: r.E.SERVER_BUSY, data: v.response || v.responseText, message: "Server is busy.", extraInfo: t(t({}, Me), { errDesc: "Server is busy." }) }), A({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.responseText, message: "Server is busy.", extraInfo: t(t({}, Me), { errDesc: "Server is busy." }) });
          } else if ($e === 500) {
            if (te.error_code === 40006 || te.error_code === 40008 || te.error_code === 40010)
              return void y({ type: r.E.SERVER_UNKNOWN_ERROR, message: te == null ? void 0 : te.error_description, extraInfo: Me });
            if (te.error_code === 90005 || te.error_code === 99999)
              return void y({ type: r.E.REQUEST_UNKNOWN, message: te == null ? void 0 : te.error_description, extraInfo: Me });
            if (!((nt = te.error_description) === null || nt === void 0) && nt.includes("translte failed!"))
              return void y({ type: r.E.TRANSLATION_FAILED, message: v.responseText, extraInfo: Me });
            y({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.responseText, message: "", extraInfo: Me }), A({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.responseText, message: "", extraInfo: Me });
          } else
            y({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.responseText, message: v.responseText, extraInfo: t(t({}, Me), { errDesc: "ajax error" }) }), A({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: v.responseText, message: v.responseText, extraInfo: t(t({}, Me), { errDesc: "ajax error" }) });
        }, i = e(1595), s = e(2071), o = e(7360), n = function() {
          return n = Object.assign || function(v) {
            for (var y, A = 1, x = arguments.length; A < x; A++)
              for (var j in y = arguments[A])
                Object.prototype.hasOwnProperty.call(y, j) && (v[j] = y[j]);
            return v;
          }, n.apply(this, arguments);
        }, u = function() {
        };
        function c(v, y) {
          var A, x = this;
          return E().platform === d.WEB ? new Promise(function(j, P) {
            var W = v.dataType || "text", Z = v.success || u, ee = v.error || u, G = new XMLHttpRequest();
            G.ontimeout = function() {
              P({ type: r.E.REQUEST_TIMEOUT, message: "Request Timeout", errorType: "timeout_error", xhr: G });
            }, G.onerror = function() {
              P({ type: r.E.REQUEST_UNKNOWN, message: "Request Unknow Error", errorType: "onerror", xhr: G });
            }, G.onabort = function() {
              P({ type: r.E.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: G });
            }, G.onreadystatechange = function() {
              if (G.readyState === 4) {
                var Pe = (/* @__PURE__ */ new Date()).getTime() - A, We = G.status || 0, ke = { elapse: Pe, httpCode: We };
                if (We === 200) {
                  N.ajaxUnconventionalErrorTimes = 0;
                  try {
                    switch (W) {
                      case "text":
                        return Z(G.responseText), void j(G.responseText);
                      case "json":
                        var Ve = JSON.parse(G.responseText);
                        return Ve.extraInfo = ke, Z(Ve), void j(Ve);
                      case "xml":
                        return G.responseXML && G.responseXML.documentElement ? (Z(G.responseXML.documentElement), void j(G.responseXML.documentElement)) : (ee({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: G.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }), void P({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: G.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }));
                      default:
                        ee({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: G.responseText, message: "Invalid dataType" }), P({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: G.responseText, message: "Invalid dataType" });
                    }
                    return j(G.response || G.responseText), void Z(G.response || G.responseText, G);
                  } catch (se) {
                    P(se);
                  }
                  return;
                }
                [400, 401, 403, 404, 429, 500, 503].includes(We) || (o.kg.debug("rest api request fail status:", We), N.ajaxUnconventionalErrorTimes++), a(G, P, ee, Pe);
              }
              G.readyState === 0 && (ee({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: G.responseText, message: "Request not initialized" }), P({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: G.responseText, message: "Request not initialized" }));
            }, v.responseType && G.responseType && (G.responseType = v.responseType), v.mimeType && G.overrideMimeType(v.mimeType);
            var le = v.type || "POST", ce = v.data || null, _e = "";
            if (le.toLowerCase() === "get" && ce) {
              for (var Ue in ce)
                ce.hasOwnProperty(Ue) && (_e += Ue + "=" + ce[Ue] + "&");
              _e = _e && _e.slice(0, -1), v.url += (v.url.indexOf("?") > 0 ? "&" : "?") + (_e && _e + "&") + "_v=" + (/* @__PURE__ */ new Date()).getTime(), ce = null, _e = "";
            }
            A = (/* @__PURE__ */ new Date()).getTime(), G.open(le, v.url);
            var ve = v.headers || {};
            for (var ye in ve["Content-Type"] || (ve["Content-Type"] = "application/json"), ve)
              ve.hasOwnProperty(ye) && G.setRequestHeader(ye, ve[ye]);
            G.send(ce);
          }).then(function(j) {
            return x.dataReport && y && y !== i.fI.SDK_INTERNAL && x.dataReport.geOperateFun({ operationName: y })({ isEndApi: !0, data: n({ isSuccess: 1, requestUrl: v.url, requestName: y, requestMethod: v.type }, C(j.extraInfo)) }), y !== i.fI.SDK_INTERNAL && delete j.extraInfo, h(j) === "Object" ? n(n({}, j), { type: r.E.REQUEST_SUCCESS }) : { data: j, type: r.E.REQUEST_SUCCESS };
          }).catch(function(j) {
            throw x.dataReport && y && y !== i.fI.SDK_INTERNAL && x.dataReport.geOperateFun({ operationName: y })({ isEndApi: !0, data: n({ isSuccess: 0, requestUrl: v.url, requestName: y, requestMethod: v.type }, C(j.extraInfo)) }), y !== i.fI.SDK_INTERNAL && delete j.extraInfo, j;
          }) : m.call(this, v, y);
        }
        function h(v) {
          return Object.prototype.toString.call(v).slice(8, -1);
        }
        function m(v, y) {
          var A = this;
          return new Promise(function(x, j) {
            var P = v.success || u, W = v.error || u, Z = v.type || "POST", ee = v.data || null, G = "", le = (/* @__PURE__ */ new Date()).getTime(), ce = N.getEnvInfo();
            if (Z.toLowerCase() === "get" && ee) {
              for (var _e in ee)
                ee.hasOwnProperty(_e) && (G += _e + "=" + ee[_e] + "&");
              G = G && G.slice(0, -1), v.url += (v.url.indexOf("?") > 0 ? "&" : "?") + (G && G + "&") + "_v=" + (/* @__PURE__ */ new Date()).getTime(), ee = null, G = "";
            }
            var Ue = { url: v.url, data: v.data, method: Z, headers: {}, success: function(ve) {
              var ye, Pe, We, ke, Ve, se = { elapse: (/* @__PURE__ */ new Date()).getTime() - le, httpCode: Number(((ye = ve.statusCode) === null || ye === void 0 ? void 0 : ye.toString()) || ((Pe = ve.status) === null || Pe === void 0 ? void 0 : Pe.toString())), errDesc: ((We = ve == null ? void 0 : ve.data) === null || We === void 0 ? void 0 : We.error_description) || "" };
              if (((ke = ve.statusCode) === null || ke === void 0 ? void 0 : ke.toString()) === "200" || ((Ve = ve.status) === null || Ve === void 0 ? void 0 : Ve.toString()) === "200") {
                ve.data.extraInfo = se;
                var He = ve.data;
                P(He), x(He);
              } else
                ve.extraInfo = se, W(He = ve), j(He);
            }, complete: function() {
            }, fail: function(ve) {
              var ye = { elapse: (/* @__PURE__ */ new Date()).getTime() - le, httpCode: s.Tp, errDesc: "request:fail" };
              ve.extraInfo = ye, ve.data = { error: "request:fail", error_description: "request:fail" }, W(ve), j(ve);
            } };
            if (ce.platform === "zfb" || ce.platform === "dd" ? Ue.headers = v.headers : Ue.header = v.headers, ce.platform === "dd")
              return dd.httpRequest(Ue);
            ce.global.request(Ue);
          }).then(function(x) {
            return A.dataReport && y && y !== i.fI.SDK_INTERNAL && A.dataReport.geOperateFun({ operationName: y })({ isEndApi: !0, data: n({ isSuccess: 1, requestUrl: v.url, requestName: y, requestMethod: v.type }, C(x.extraInfo)) }), y !== i.fI.SDK_INTERNAL && delete x.extraInfo, h(x) === "Object" ? n(n({}, x), { type: r.E.REQUEST_SUCCESS }) : { data: x, type: r.E.REQUEST_SUCCESS };
          }).catch(function(x) {
            throw A.dataReport && y && y !== i.fI.SDK_INTERNAL && A.dataReport.geOperateFun({ operationName: y })({ isEndApi: !0, data: n({ isSuccess: 0, requestUrl: v.url, requestName: y, requestMethod: v.type }, C(x.extraInfo)) }), y !== i.fI.SDK_INTERNAL && delete x.extraInfo, x;
          });
        }
        var f, g, d, l = (f = function(v, y) {
          var A = E();
          if (A.platform !== d.WEB) {
            var x = A.global, j = function(P) {
              P.isConnected ? v() : y();
            };
            x.offNetworkStatusChange && x.offNetworkStatusChange(j), x.onNetworkStatusChange && x.onNetworkStatusChange(j);
          } else
            typeof addEventListener < "u" && (window.addEventListener("online", v), window.addEventListener("offline", y));
        }, function() {
          for (var v = [], y = 0; y < arguments.length; y++)
            v[y] = arguments[y];
          if (!f)
            return g;
          g = f.apply(void 0, v), f = null;
        });
        function E() {
          return typeof swan < "u" && T(swan) ? { platform: d.BAIDU, global: swan } : typeof tt < "u" && T(tt) ? { platform: d.TT, global: tt } : typeof dd < "u" && T(dd) ? { platform: d.DD, global: dd } : typeof my < "u" && T(my) ? { platform: d.ZFB, global: my } : typeof wx < "u" && T(wx) ? { platform: d.WX, global: wx } : typeof uni < "u" && T(uni) ? { platform: d.UNI, global: uni } : typeof window < "u" && window.WebSocket ? { platform: d.WEB, global: window } : { platform: d.NODE, global: e.g || {} };
        }
        function T(v) {
          for (var y = ["canIUse", "getSystemInfo"], A = 0, x = y.length; A < x; A++)
            if (!v[y[A]])
              return !1;
          return !0;
        }
        function I(v, y) {
          var A, x, j = this, P = (/* @__PURE__ */ new Date()).getTime(), W = v.accessToken;
          if (W) {
            var Z = v.appKey, ee = [], G = "", le = "";
            if (Z && (G = (ee = Z.split("#"))[0], le = ee[1]), G || le) {
              var ce = v.apiUrl, _e = v.uploadUrl || ce + "/" + G + "/" + le + "/chatfiles";
              if (((x = (A = v == null ? void 0 : v.file) === null || A === void 0 ? void 0 : A.data) === null || x === void 0 ? void 0 : x.size) <= 0)
                v.onFileUploadError && v.onFileUploadError({ type: r.E.WEBIM_UPLOADFILE_ERROR, message: "fileSize must be greater than 0" });
              else {
                var Ue = new XMLHttpRequest();
                Ue.upload && Ue.upload.addEventListener("progress", v.onFileUploadProgress || u, !1), Ue.addEventListener("abort", v.onFileUploadCanceled || u, !1), Ue.addEventListener("error", function(Pe) {
                  ye({ type: r.E.WEBIM_UPLOADFILE_ERROR, data: Ue });
                }, !1), Ue.addEventListener("load", function(Pe) {
                  try {
                    var We = JSON.parse(Ue.responseText);
                    if (Ue.status === 400)
                      return ye({ type: r.E.WEBIM_UPLOADFILE_ERROR, data: We }), !1;
                    try {
                      (function(ke) {
                        var Ve = (/* @__PURE__ */ new Date()).getTime() - P;
                        j.dataReport && y && [i.fI.UPLOAD_MSG_ATTACH, i.fI.UPLOAD_CHATROOM_FILE, i.fI.UPLOAD_GROUP_FILE].includes(y) && j.dataReport.geOperateFun({ operationName: y })({ isEndApi: !0, data: { isSuccess: ke != null && ke.error ? 0 : 1, requestMethod: "POST", requestName: y, requestElapse: Ve, requestUrl: _e, code: Ue.status, codeDesc: (ke == null ? void 0 : ke.error_description) || "" } }), v.onFileUploadComplete && v.onFileUploadComplete(ke);
                      })(We);
                    } catch (ke) {
                      ye({ type: r.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: ke });
                    }
                  } catch {
                    ye({ type: r.E.WEBIM_UPLOADFILE_ERROR, data: Ue.responseText });
                  }
                }, !1), Ue.open("POST", _e), Ue.setRequestHeader("restrict-access", "true"), Ue.setRequestHeader("Accept", "*/*"), Ue.setRequestHeader("Authorization", "Bearer " + W);
                var ve = new FormData();
                ve.append("file", v.file.data), v.thumbnailWidth && ve.append("thumbnail-width", v.thumbnailWidth + ""), v.thumbnailHeight && ve.append("thumbnail-height", v.thumbnailHeight + ""), Ue.send(ve);
              }
            } else
              v.onFileUploadError && v.onFileUploadError({ type: r.E.WEBIM_UPLOADFILE_ERROR, message: "AppKey illegal" });
          } else
            v.onFileUploadError && v.onFileUploadError({ type: r.E.WEBIM_UPLOADFILE_NO_LOGIN, message: "AccessToken cannot be empty" });
          function ye(Pe) {
            var We = (/* @__PURE__ */ new Date()).getTime() - P;
            j.dataReport && y && [i.fI.UPLOAD_MSG_ATTACH, i.fI.UPLOAD_CHATROOM_FILE, i.fI.UPLOAD_GROUP_FILE].includes(y) && j.dataReport.geOperateFun({ operationName: y })({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "POST", requestName: y, requestElapse: We, requestUrl: _e, code: (Ue == null ? void 0 : Ue.status) || 0, codeDesc: "upload file error" } }), v.onFileUploadError && v.onFileUploadError(Pe);
          }
        }
        function O(v, y) {
          v.onFileDownloadComplete = v.onFileDownloadComplete || u, v.onFileDownloadError = v.onFileDownloadError || u;
          var A = (/* @__PURE__ */ new Date()).getTime(), x = new XMLHttpRequest(), j = this;
          x.addEventListener("load", function(ce) {
            var _e = (/* @__PURE__ */ new Date()).getTime() - A;
            j.dataReport && y && y === i.fI.DOWN_GROUP_FILE && j.dataReport.geOperateFun({ operationName: y })({ isEndApi: !0, data: { isSuccess: x.status === 200 ? 1 : 0, requestMethod: "POST", requestName: y, requestElapse: _e, requestUrl: v == null ? void 0 : v.url, code: x.status, codeDesc: x.status === 200 ? "" : "download file error" } }), v.onFileDownloadComplete && v.onFileDownloadComplete(x.response);
          }, !1), x.addEventListener("error", function(ce) {
            var _e = (/* @__PURE__ */ new Date()).getTime() - A;
            j.dataReport && y && y === i.fI.DOWN_GROUP_FILE && j.dataReport.geOperateFun({ operationName: y })({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "POST", requestName: y, requestElapse: _e, requestUrl: v == null ? void 0 : v.url, code: (x == null ? void 0 : x.status) || 0, codeDesc: "download file error" } }), v.onFileDownloadError && v.onFileDownloadError({ type: r.E.WEBIM_DOWNLOADFILE_ERROR, id: v.id, xhr: x });
          }, !1);
          var P = v.method || "GET", W = v.responseType || "blob", Z = v.mimeType || "text/plain; charset=x-user-defined";
          x.open(P, v.url), typeof Blob < "u" ? x.responseType = W : x.overrideMimeType(Z);
          var ee = { "X-Requested-With": "XMLHttpRequest", Accept: "application/octet-stream", "share-secret": v.secret, Authorization: "Bearer " + this.context.accessToken }, G = v.headers || {};
          for (var le in G)
            ee[le] = G[le];
          for (var le in ee)
            ee[le] && x.setRequestHeader(le, ee[le]);
          x.send(null);
        }
        function C(v) {
          v === void 0 && (v = {});
          var y = v.elapse, A = y === void 0 ? 0 : y, x = v.httpCode, j = x === void 0 ? 0 : x, P = v.errDesc;
          return { requestElapse: A, code: j, codeDesc: P === void 0 ? "" : P };
        }
        (function(v) {
          v.WEB = "web", v.WX = "wx", v.ZFB = "zfb", v.DD = "dd", v.TT = "tt", v.BAIDU = "baidu", v.QUICK_APP = "quick_app", v.UNI = "uni", v.NODE = "node";
        })(d || (d = {}));
        var N = { autoIncrement: 0, ajaxUnconventionalErrorTimes: 0, ajax: c, getUniqueId: function() {
          this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
          var v = /* @__PURE__ */ new Date(), y = new Date(2010, 1, 1);
          return (v.getTime() - y.getTime() + this.autoIncrement).toString();
        }, getFileUrl: function(v) {
          var y = { url: "", filename: "", filetype: "", data: {} }, A = typeof v == "string" ? document.getElementById(v) : v;
          if (window.URL.createObjectURL) {
            if (!A.files)
              throw Error("this is not HTMLInputElement");
            var x = A.files;
            if (x.length > 0) {
              var j = x.item(0);
              y.data = j, y.url = window.URL.createObjectURL(j), y.filename = (j == null ? void 0 : j.name) || "";
            }
          } else {
            if (typeof v != "string")
              throw Error("in IE fileInputId must be string");
            j = document.getElementById(v).value, y.url = j;
            var P = j.lastIndexOf("/"), W = j.lastIndexOf("\\"), Z = Math.max(P, W);
            y.filename = Z < 0 ? j : j.substring(Z + 1);
          }
          var ee = y.filename.lastIndexOf(".");
          return ee !== -1 && (y.filetype = y.filename.substring(ee + 1).toLowerCase()), y;
        }, uploadFile: I, flow: function(v) {
          for (var y = v.length, A = y; A--; )
            if (typeof v[A] != "function")
              throw new TypeError("Expected a function");
          return function() {
            for (var x = [], j = 0; j < arguments.length; j++)
              x[j] = arguments[j];
            for (var P = 0, W = y ? v[P].apply(this, x) : x[0]; ++P < y; )
              W = v[P].call(this, W);
            return W;
          };
        }, listenNetwork: l, getEnvInfo: E, wxRequest: m, parseDownloadResponse: function(v) {
          if (!window || !window.URL)
            throw Error("parseDownloadResponse can be used in broswer only");
          return v && v.type && v.type === "application/json" || 0 > Object.prototype.toString.call(v).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(v);
        }, download: O, parseNotify: function(v) {
          for (var y = "", A = 0; A < v.length; A++)
            y += "%" + v[A].toString(16);
          return JSON.parse(decodeURIComponent(y));
        }, getExtraData: C };
      }, 9662: function(p, _, e) {
        var r = e(614), t = e(6330), a = TypeError;
        p.exports = function(i) {
          if (r(i))
            return i;
          throw a(t(i) + " is not a function");
        };
      }, 9483: function(p, _, e) {
        var r = e(4411), t = e(6330), a = TypeError;
        p.exports = function(i) {
          if (r(i))
            return i;
          throw a(t(i) + " is not a constructor");
        };
      }, 6077: function(p, _, e) {
        var r = e(614), t = String, a = TypeError;
        p.exports = function(i) {
          if (typeof i == "object" || r(i))
            return i;
          throw a("Can't set " + t(i) + " as a prototype");
        };
      }, 1223: function(p, _, e) {
        var r = e(5112), t = e(30), a = e(3070).f, i = r("unscopables"), s = Array.prototype;
        s[i] == null && a(s, i, { configurable: !0, value: t(null) }), p.exports = function(o) {
          s[i][o] = !0;
        };
      }, 5787: function(p, _, e) {
        var r = e(7976), t = TypeError;
        p.exports = function(a, i) {
          if (r(i, a))
            return a;
          throw t("Incorrect invocation");
        };
      }, 9670: function(p, _, e) {
        var r = e(111), t = String, a = TypeError;
        p.exports = function(i) {
          if (r(i))
            return i;
          throw a(t(i) + " is not an object");
        };
      }, 3013: function(p) {
        p.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
      }, 7556: function(p, _, e) {
        var r = e(7293);
        p.exports = r(function() {
          if (typeof ArrayBuffer == "function") {
            var t = new ArrayBuffer(8);
            Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
          }
        });
      }, 260: function(p, _, e) {
        var r, t, a, i = e(3013), s = e(9781), o = e(7854), n = e(614), u = e(111), c = e(2597), h = e(648), m = e(6330), f = e(8880), g = e(8052), d = e(7045), l = e(7976), E = e(9518), T = e(7674), I = e(5112), O = e(9711), C = e(9909), N = C.enforce, v = C.get, y = o.Int8Array, A = y && y.prototype, x = o.Uint8ClampedArray, j = x && x.prototype, P = y && E(y), W = A && E(A), Z = Object.prototype, ee = o.TypeError, G = I("toStringTag"), le = O("TYPED_ARRAY_TAG"), ce = "TypedArrayConstructor", _e = i && !!T && h(o.opera) !== "Opera", Ue = !1, ve = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, ye = { BigInt64Array: 8, BigUint64Array: 8 }, Pe = function(ke) {
          var Ve = E(ke);
          if (u(Ve)) {
            var se = v(Ve);
            return se && c(se, ce) ? se[ce] : Pe(Ve);
          }
        }, We = function(ke) {
          if (!u(ke))
            return !1;
          var Ve = h(ke);
          return c(ve, Ve) || c(ye, Ve);
        };
        for (r in ve)
          (a = (t = o[r]) && t.prototype) ? N(a)[ce] = t : _e = !1;
        for (r in ye)
          (a = (t = o[r]) && t.prototype) && (N(a)[ce] = t);
        if ((!_e || !n(P) || P === Function.prototype) && (P = function() {
          throw ee("Incorrect invocation");
        }, _e))
          for (r in ve)
            o[r] && T(o[r], P);
        if ((!_e || !W || W === Z) && (W = P.prototype, _e))
          for (r in ve)
            o[r] && T(o[r].prototype, W);
        if (_e && E(j) !== W && T(j, W), s && !c(W, G))
          for (r in Ue = !0, d(W, G, { configurable: !0, get: function() {
            return u(this) ? this[le] : void 0;
          } }), ve)
            o[r] && f(o[r], le, r);
        p.exports = { NATIVE_ARRAY_BUFFER_VIEWS: _e, TYPED_ARRAY_TAG: Ue && le, aTypedArray: function(ke) {
          if (We(ke))
            return ke;
          throw ee("Target is not a typed array");
        }, aTypedArrayConstructor: function(ke) {
          if (n(ke) && (!T || l(P, ke)))
            return ke;
          throw ee(m(ke) + " is not a typed array constructor");
        }, exportTypedArrayMethod: function(ke, Ve, se, He) {
          if (s) {
            if (se)
              for (var Xe in ve) {
                var nt = o[Xe];
                if (nt && c(nt.prototype, ke))
                  try {
                    delete nt.prototype[ke];
                  } catch {
                    try {
                      nt.prototype[ke] = Ve;
                    } catch {
                    }
                  }
              }
            W[ke] && !se || g(W, ke, se ? Ve : _e && A[ke] || Ve, He);
          }
        }, exportTypedArrayStaticMethod: function(ke, Ve, se) {
          var He, Xe;
          if (s) {
            if (T) {
              if (se) {
                for (He in ve)
                  if ((Xe = o[He]) && c(Xe, ke))
                    try {
                      delete Xe[ke];
                    } catch {
                    }
              }
              if (P[ke] && !se)
                return;
              try {
                return g(P, ke, se ? Ve : _e && P[ke] || Ve);
              } catch {
              }
            }
            for (He in ve)
              !(Xe = o[He]) || Xe[ke] && !se || g(Xe, ke, Ve);
          }
        }, getTypedArrayConstructor: Pe, isView: function(ke) {
          if (!u(ke))
            return !1;
          var Ve = h(ke);
          return Ve === "DataView" || c(ve, Ve) || c(ye, Ve);
        }, isTypedArray: We, TypedArray: P, TypedArrayPrototype: W };
      }, 3331: function(p, _, e) {
        var r = e(7854), t = e(1702), a = e(9781), i = e(3013), s = e(6530), o = e(8880), n = e(7045), u = e(9190), c = e(7293), h = e(5787), m = e(9303), f = e(7466), g = e(7067), d = e(1179), l = e(9518), E = e(7674), T = e(8006).f, I = e(1285), O = e(1589), C = e(8003), N = e(9909), v = s.PROPER, y = s.CONFIGURABLE, A = "ArrayBuffer", x = "DataView", j = "prototype", P = "Wrong index", W = N.getterFor(A), Z = N.getterFor(x), ee = N.set, G = r[A], le = G, ce = le && le[j], _e = r[x], Ue = _e && _e[j], ve = Object.prototype, ye = r.Array, Pe = r.RangeError, We = t(I), ke = t([].reverse), Ve = d.pack, se = d.unpack, He = function(w) {
          return [255 & w];
        }, Xe = function(w) {
          return [255 & w, w >> 8 & 255];
        }, nt = function(w) {
          return [255 & w, w >> 8 & 255, w >> 16 & 255, w >> 24 & 255];
        }, te = function(w) {
          return w[3] << 24 | w[2] << 16 | w[1] << 8 | w[0];
        }, $e = function(w) {
          return Ve(w, 23, 4);
        }, Me = function(w) {
          return Ve(w, 52, 8);
        }, rt = function(w, z, re) {
          n(w[j], z, { configurable: !0, get: function() {
            return re(this)[z];
          } });
        }, ot = function(w, z, re, q) {
          var ie = g(re), Ie = Z(w);
          if (ie + z > Ie.byteLength)
            throw Pe(P);
          var pe = Ie.bytes, fe = ie + Ie.byteOffset, S = O(pe, fe, fe + z);
          return q ? S : ke(S);
        }, it = function(w, z, re, q, ie, Ie) {
          var pe = g(re), fe = Z(w);
          if (pe + z > fe.byteLength)
            throw Pe(P);
          for (var S = fe.bytes, X = pe + fe.byteOffset, B = q(+ie), ue = 0; ue < z; ue++)
            S[X + ue] = B[Ie ? ue : z - ue - 1];
        };
        if (i) {
          var ct = v && G.name !== A;
          if (c(function() {
            G(1);
          }) && c(function() {
            new G(-1);
          }) && !c(function() {
            return new G(), new G(1.5), new G(NaN), G.length != 1 || ct && !y;
          }))
            ct && y && o(G, "name", A);
          else {
            (le = function(w) {
              return h(this, ce), new G(g(w));
            })[j] = ce;
            for (var Ne, ze = T(G), Ye = 0; ze.length > Ye; )
              (Ne = ze[Ye++]) in le || o(le, Ne, G[Ne]);
            ce.constructor = le;
          }
          E && l(Ue) !== ve && E(Ue, ve);
          var qe = new _e(new le(2)), Oe = t(Ue.setInt8);
          qe.setInt8(0, 2147483648), qe.setInt8(1, 2147483649), !qe.getInt8(0) && qe.getInt8(1) || u(Ue, { setInt8: function(w, z) {
            Oe(this, w, z << 24 >> 24);
          }, setUint8: function(w, z) {
            Oe(this, w, z << 24 >> 24);
          } }, { unsafe: !0 });
        } else
          ce = (le = function(w) {
            h(this, ce);
            var z = g(w);
            ee(this, { type: A, bytes: We(ye(z), 0), byteLength: z }), a || (this.byteLength = z, this.detached = !1);
          })[j], Ue = (_e = function(w, z, re) {
            h(this, Ue), h(w, ce);
            var q = W(w), ie = q.byteLength, Ie = m(z);
            if (Ie < 0 || Ie > ie)
              throw Pe("Wrong offset");
            if (Ie + (re = re === void 0 ? ie - Ie : f(re)) > ie)
              throw Pe("Wrong length");
            ee(this, { type: x, buffer: w, byteLength: re, byteOffset: Ie, bytes: q.bytes }), a || (this.buffer = w, this.byteLength = re, this.byteOffset = Ie);
          })[j], a && (rt(le, "byteLength", W), rt(_e, "buffer", Z), rt(_e, "byteLength", Z), rt(_e, "byteOffset", Z)), u(Ue, { getInt8: function(w) {
            return ot(this, 1, w)[0] << 24 >> 24;
          }, getUint8: function(w) {
            return ot(this, 1, w)[0];
          }, getInt16: function(w) {
            var z = ot(this, 2, w, arguments.length > 1 ? arguments[1] : void 0);
            return (z[1] << 8 | z[0]) << 16 >> 16;
          }, getUint16: function(w) {
            var z = ot(this, 2, w, arguments.length > 1 ? arguments[1] : void 0);
            return z[1] << 8 | z[0];
          }, getInt32: function(w) {
            return te(ot(this, 4, w, arguments.length > 1 ? arguments[1] : void 0));
          }, getUint32: function(w) {
            return te(ot(this, 4, w, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
          }, getFloat32: function(w) {
            return se(ot(this, 4, w, arguments.length > 1 ? arguments[1] : void 0), 23);
          }, getFloat64: function(w) {
            return se(ot(this, 8, w, arguments.length > 1 ? arguments[1] : void 0), 52);
          }, setInt8: function(w, z) {
            it(this, 1, w, He, z);
          }, setUint8: function(w, z) {
            it(this, 1, w, He, z);
          }, setInt16: function(w, z) {
            it(this, 2, w, Xe, z, arguments.length > 2 ? arguments[2] : void 0);
          }, setUint16: function(w, z) {
            it(this, 2, w, Xe, z, arguments.length > 2 ? arguments[2] : void 0);
          }, setInt32: function(w, z) {
            it(this, 4, w, nt, z, arguments.length > 2 ? arguments[2] : void 0);
          }, setUint32: function(w, z) {
            it(this, 4, w, nt, z, arguments.length > 2 ? arguments[2] : void 0);
          }, setFloat32: function(w, z) {
            it(this, 4, w, $e, z, arguments.length > 2 ? arguments[2] : void 0);
          }, setFloat64: function(w, z) {
            it(this, 8, w, Me, z, arguments.length > 2 ? arguments[2] : void 0);
          } });
        C(le, A), C(_e, x), p.exports = { ArrayBuffer: le, DataView: _e };
      }, 1048: function(p, _, e) {
        var r = e(7908), t = e(1400), a = e(6244), i = e(5117), s = Math.min;
        p.exports = [].copyWithin || function(o, n) {
          var u = r(this), c = a(u), h = t(o, c), m = t(n, c), f = arguments.length > 2 ? arguments[2] : void 0, g = s((f === void 0 ? c : t(f, c)) - m, c - h), d = 1;
          for (m < h && h < m + g && (d = -1, m += g - 1, h += g - 1); g-- > 0; )
            m in u ? u[h] = u[m] : i(u, h), h += d, m += d;
          return u;
        };
      }, 1285: function(p, _, e) {
        var r = e(7908), t = e(1400), a = e(6244);
        p.exports = function(i) {
          for (var s = r(this), o = a(s), n = arguments.length, u = t(n > 1 ? arguments[1] : void 0, o), c = n > 2 ? arguments[2] : void 0, h = c === void 0 ? o : t(c, o); h > u; )
            s[u++] = i;
          return s;
        };
      }, 8533: function(p, _, e) {
        var r = e(2092).forEach, t = e(9341)("forEach");
        p.exports = t ? [].forEach : function(a) {
          return r(this, a, arguments.length > 1 ? arguments[1] : void 0);
        };
      }, 7745: function(p, _, e) {
        var r = e(6244);
        p.exports = function(t, a) {
          for (var i = 0, s = r(a), o = new t(s); s > i; )
            o[i] = a[i++];
          return o;
        };
      }, 8457: function(p, _, e) {
        var r = e(9974), t = e(6916), a = e(7908), i = e(3411), s = e(7659), o = e(4411), n = e(6244), u = e(6135), c = e(4121), h = e(1246), m = Array;
        p.exports = function(f) {
          var g = a(f), d = o(this), l = arguments.length, E = l > 1 ? arguments[1] : void 0, T = E !== void 0;
          T && (E = r(E, l > 2 ? arguments[2] : void 0));
          var I, O, C, N, v, y, A = h(g), x = 0;
          if (!A || this === m && s(A))
            for (I = n(g), O = d ? new this(I) : m(I); I > x; x++)
              y = T ? E(g[x], x) : g[x], u(O, x, y);
          else
            for (v = (N = c(g, A)).next, O = d ? new this() : []; !(C = t(v, N)).done; x++)
              y = T ? i(N, E, [C.value, x], !0) : C.value, u(O, x, y);
          return O.length = x, O;
        };
      }, 1318: function(p, _, e) {
        var r = e(5656), t = e(1400), a = e(6244), i = function(s) {
          return function(o, n, u) {
            var c, h = r(o), m = a(h), f = t(u, m);
            if (s && n != n) {
              for (; m > f; )
                if ((c = h[f++]) != c)
                  return !0;
            } else
              for (; m > f; f++)
                if ((s || f in h) && h[f] === n)
                  return s || f || 0;
            return !s && -1;
          };
        };
        p.exports = { includes: i(!0), indexOf: i(!1) };
      }, 2092: function(p, _, e) {
        var r = e(9974), t = e(1702), a = e(8361), i = e(7908), s = e(6244), o = e(5417), n = t([].push), u = function(c) {
          var h = c == 1, m = c == 2, f = c == 3, g = c == 4, d = c == 6, l = c == 7, E = c == 5 || d;
          return function(T, I, O, C) {
            for (var N, v, y = i(T), A = a(y), x = r(I, O), j = s(A), P = 0, W = C || o, Z = h ? W(T, j) : m || l ? W(T, 0) : void 0; j > P; P++)
              if ((E || P in A) && (v = x(N = A[P], P, y), c))
                if (h)
                  Z[P] = v;
                else if (v)
                  switch (c) {
                    case 3:
                      return !0;
                    case 5:
                      return N;
                    case 6:
                      return P;
                    case 2:
                      n(Z, N);
                  }
                else
                  switch (c) {
                    case 4:
                      return !1;
                    case 7:
                      n(Z, N);
                  }
            return d ? -1 : f || g ? g : Z;
          };
        };
        p.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterReject: u(7) };
      }, 6583: function(p, _, e) {
        var r = e(2104), t = e(5656), a = e(9303), i = e(6244), s = e(9341), o = Math.min, n = [].lastIndexOf, u = !!n && 1 / [1].lastIndexOf(1, -0) < 0, c = s("lastIndexOf"), h = u || !c;
        p.exports = h ? function(m) {
          if (u)
            return r(n, this, arguments) || 0;
          var f = t(this), g = i(f), d = g - 1;
          for (arguments.length > 1 && (d = o(d, a(arguments[1]))), d < 0 && (d = g + d); d >= 0; d--)
            if (d in f && f[d] === m)
              return d || 0;
          return -1;
        } : n;
      }, 1194: function(p, _, e) {
        var r = e(7293), t = e(5112), a = e(7392), i = t("species");
        p.exports = function(s) {
          return a >= 51 || !r(function() {
            var o = [];
            return (o.constructor = {})[i] = function() {
              return { foo: 1 };
            }, o[s](Boolean).foo !== 1;
          });
        };
      }, 9341: function(p, _, e) {
        var r = e(7293);
        p.exports = function(t, a) {
          var i = [][t];
          return !!i && r(function() {
            i.call(null, a || function() {
              return 1;
            }, 1);
          });
        };
      }, 3671: function(p, _, e) {
        var r = e(9662), t = e(7908), a = e(8361), i = e(6244), s = TypeError, o = function(n) {
          return function(u, c, h, m) {
            r(c);
            var f = t(u), g = a(f), d = i(f), l = n ? d - 1 : 0, E = n ? -1 : 1;
            if (h < 2)
              for (; ; ) {
                if (l in g) {
                  m = g[l], l += E;
                  break;
                }
                if (l += E, n ? l < 0 : d <= l)
                  throw s("Reduce of empty array with no initial value");
              }
            for (; n ? l >= 0 : d > l; l += E)
              l in g && (m = c(m, g[l], l, f));
            return m;
          };
        };
        p.exports = { left: o(!1), right: o(!0) };
      }, 3658: function(p, _, e) {
        var r = e(9781), t = e(3157), a = TypeError, i = Object.getOwnPropertyDescriptor, s = r && !function() {
          if (this !== void 0)
            return !0;
          try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
          } catch (o) {
            return o instanceof TypeError;
          }
        }();
        p.exports = s ? function(o, n) {
          if (t(o) && !i(o, "length").writable)
            throw a("Cannot set read only .length");
          return o.length = n;
        } : function(o, n) {
          return o.length = n;
        };
      }, 1589: function(p, _, e) {
        var r = e(1400), t = e(6244), a = e(6135), i = Array, s = Math.max;
        p.exports = function(o, n, u) {
          for (var c = t(o), h = r(n, c), m = r(u === void 0 ? c : u, c), f = i(s(m - h, 0)), g = 0; h < m; h++, g++)
            a(f, g, o[h]);
          return f.length = g, f;
        };
      }, 206: function(p, _, e) {
        var r = e(1702);
        p.exports = r([].slice);
      }, 4362: function(p, _, e) {
        var r = e(1589), t = Math.floor, a = function(o, n) {
          var u = o.length, c = t(u / 2);
          return u < 8 ? i(o, n) : s(o, a(r(o, 0, c), n), a(r(o, c), n), n);
        }, i = function(o, n) {
          for (var u, c, h = o.length, m = 1; m < h; ) {
            for (c = m, u = o[m]; c && n(o[c - 1], u) > 0; )
              o[c] = o[--c];
            c !== m++ && (o[c] = u);
          }
          return o;
        }, s = function(o, n, u, c) {
          for (var h = n.length, m = u.length, f = 0, g = 0; f < h || g < m; )
            o[f + g] = f < h && g < m ? c(n[f], u[g]) <= 0 ? n[f++] : u[g++] : f < h ? n[f++] : u[g++];
          return o;
        };
        p.exports = a;
      }, 7475: function(p, _, e) {
        var r = e(3157), t = e(4411), a = e(111), i = e(5112)("species"), s = Array;
        p.exports = function(o) {
          var n;
          return r(o) && (n = o.constructor, (t(n) && (n === s || r(n.prototype)) || a(n) && (n = n[i]) === null) && (n = void 0)), n === void 0 ? s : n;
        };
      }, 5417: function(p, _, e) {
        var r = e(7475);
        p.exports = function(t, a) {
          return new (r(t))(a === 0 ? 0 : a);
        };
      }, 3411: function(p, _, e) {
        var r = e(9670), t = e(9212);
        p.exports = function(a, i, s, o) {
          try {
            return o ? i(r(s)[0], s[1]) : i(s);
          } catch (n) {
            t(a, "throw", n);
          }
        };
      }, 7072: function(p, _, e) {
        var r = e(5112)("iterator"), t = !1;
        try {
          var a = 0, i = { next: function() {
            return { done: !!a++ };
          }, return: function() {
            t = !0;
          } };
          i[r] = function() {
            return this;
          }, Array.from(i, function() {
            throw 2;
          });
        } catch {
        }
        p.exports = function(s, o) {
          if (!o && !t)
            return !1;
          var n = !1;
          try {
            var u = {};
            u[r] = function() {
              return { next: function() {
                return { done: n = !0 };
              } };
            }, s(u);
          } catch {
          }
          return n;
        };
      }, 4326: function(p, _, e) {
        var r = e(1702), t = r({}.toString), a = r("".slice);
        p.exports = function(i) {
          return a(t(i), 8, -1);
        };
      }, 648: function(p, _, e) {
        var r = e(1694), t = e(614), a = e(4326), i = e(5112)("toStringTag"), s = Object, o = a(function() {
          return arguments;
        }()) == "Arguments";
        p.exports = r ? a : function(n) {
          var u, c, h;
          return n === void 0 ? "Undefined" : n === null ? "Null" : typeof (c = function(m, f) {
            try {
              return m[f];
            } catch {
            }
          }(u = s(n), i)) == "string" ? c : o ? a(u) : (h = a(u)) == "Object" && t(u.callee) ? "Arguments" : h;
        };
      }, 5631: function(p, _, e) {
        var r = e(30), t = e(7045), a = e(9190), i = e(9974), s = e(5787), o = e(8554), n = e(408), u = e(1656), c = e(6178), h = e(6340), m = e(9781), f = e(2423).fastKey, g = e(9909), d = g.set, l = g.getterFor;
        p.exports = { getConstructor: function(E, T, I, O) {
          var C = E(function(x, j) {
            s(x, N), d(x, { type: T, index: r(null), first: void 0, last: void 0, size: 0 }), m || (x.size = 0), o(j) || n(j, x[O], { that: x, AS_ENTRIES: I });
          }), N = C.prototype, v = l(T), y = function(x, j, P) {
            var W, Z, ee = v(x), G = A(x, j);
            return G ? G.value = P : (ee.last = G = { index: Z = f(j, !0), key: j, value: P, previous: W = ee.last, next: void 0, removed: !1 }, ee.first || (ee.first = G), W && (W.next = G), m ? ee.size++ : x.size++, Z !== "F" && (ee.index[Z] = G)), x;
          }, A = function(x, j) {
            var P, W = v(x), Z = f(j);
            if (Z !== "F")
              return W.index[Z];
            for (P = W.first; P; P = P.next)
              if (P.key == j)
                return P;
          };
          return a(N, { clear: function() {
            for (var x = v(this), j = x.index, P = x.first; P; )
              P.removed = !0, P.previous && (P.previous = P.previous.next = void 0), delete j[P.index], P = P.next;
            x.first = x.last = void 0, m ? x.size = 0 : this.size = 0;
          }, delete: function(x) {
            var j = this, P = v(j), W = A(j, x);
            if (W) {
              var Z = W.next, ee = W.previous;
              delete P.index[W.index], W.removed = !0, ee && (ee.next = Z), Z && (Z.previous = ee), P.first == W && (P.first = Z), P.last == W && (P.last = ee), m ? P.size-- : j.size--;
            }
            return !!W;
          }, forEach: function(x) {
            for (var j, P = v(this), W = i(x, arguments.length > 1 ? arguments[1] : void 0); j = j ? j.next : P.first; )
              for (W(j.value, j.key, this); j && j.removed; )
                j = j.previous;
          }, has: function(x) {
            return !!A(this, x);
          } }), a(N, I ? { get: function(x) {
            var j = A(this, x);
            return j && j.value;
          }, set: function(x, j) {
            return y(this, x === 0 ? 0 : x, j);
          } } : { add: function(x) {
            return y(this, x = x === 0 ? 0 : x, x);
          } }), m && t(N, "size", { configurable: !0, get: function() {
            return v(this).size;
          } }), C;
        }, setStrong: function(E, T, I) {
          var O = T + " Iterator", C = l(T), N = l(O);
          u(E, T, function(v, y) {
            d(this, { type: O, target: v, state: C(v), kind: y, last: void 0 });
          }, function() {
            for (var v = N(this), y = v.kind, A = v.last; A && A.removed; )
              A = A.previous;
            return v.target && (v.last = A = A ? A.next : v.state.first) ? c(y == "keys" ? A.key : y == "values" ? A.value : [A.key, A.value], !1) : (v.target = void 0, c(void 0, !0));
          }, I ? "entries" : "values", !I, !0), h(T);
        } };
      }, 7710: function(p, _, e) {
        var r = e(2109), t = e(7854), a = e(1702), i = e(4705), s = e(8052), o = e(2423), n = e(408), u = e(5787), c = e(614), h = e(8554), m = e(111), f = e(7293), g = e(7072), d = e(8003), l = e(9587);
        p.exports = function(E, T, I) {
          var O = E.indexOf("Map") !== -1, C = E.indexOf("Weak") !== -1, N = O ? "set" : "add", v = t[E], y = v && v.prototype, A = v, x = {}, j = function(le) {
            var ce = a(y[le]);
            s(y, le, le == "add" ? function(_e) {
              return ce(this, _e === 0 ? 0 : _e), this;
            } : le == "delete" ? function(_e) {
              return !(C && !m(_e)) && ce(this, _e === 0 ? 0 : _e);
            } : le == "get" ? function(_e) {
              return C && !m(_e) ? void 0 : ce(this, _e === 0 ? 0 : _e);
            } : le == "has" ? function(_e) {
              return !(C && !m(_e)) && ce(this, _e === 0 ? 0 : _e);
            } : function(_e, Ue) {
              return ce(this, _e === 0 ? 0 : _e, Ue), this;
            });
          };
          if (i(E, !c(v) || !(C || y.forEach && !f(function() {
            new v().entries().next();
          }))))
            A = I.getConstructor(T, E, O, N), o.enable();
          else if (i(E, !0)) {
            var P = new A(), W = P[N](C ? {} : -0, 1) != P, Z = f(function() {
              P.has(1);
            }), ee = g(function(le) {
              new v(le);
            }), G = !C && f(function() {
              for (var le = new v(), ce = 5; ce--; )
                le[N](ce, ce);
              return !le.has(-0);
            });
            ee || ((A = T(function(le, ce) {
              u(le, y);
              var _e = l(new v(), le, A);
              return h(ce) || n(ce, _e[N], { that: _e, AS_ENTRIES: O }), _e;
            })).prototype = y, y.constructor = A), (Z || G) && (j("delete"), j("has"), O && j("get")), (G || W) && j(N), C && y.clear && delete y.clear;
          }
          return x[E] = A, r({ global: !0, constructor: !0, forced: A != v }, x), d(A, E), C || I.setStrong(A, E, O), A;
        };
      }, 9920: function(p, _, e) {
        var r = e(2597), t = e(3887), a = e(1236), i = e(3070);
        p.exports = function(s, o, n) {
          for (var u = t(o), c = i.f, h = a.f, m = 0; m < u.length; m++) {
            var f = u[m];
            r(s, f) || n && r(n, f) || c(s, f, h(o, f));
          }
        };
      }, 4964: function(p, _, e) {
        var r = e(5112)("match");
        p.exports = function(t) {
          var a = /./;
          try {
            "/./"[t](a);
          } catch {
            try {
              return a[r] = !1, "/./"[t](a);
            } catch {
            }
          }
          return !1;
        };
      }, 8544: function(p, _, e) {
        var r = e(7293);
        p.exports = !r(function() {
          function t() {
          }
          return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
        });
      }, 6178: function(p) {
        p.exports = function(_, e) {
          return { value: _, done: e };
        };
      }, 8880: function(p, _, e) {
        var r = e(9781), t = e(3070), a = e(9114);
        p.exports = r ? function(i, s, o) {
          return t.f(i, s, a(1, o));
        } : function(i, s, o) {
          return i[s] = o, i;
        };
      }, 9114: function(p) {
        p.exports = function(_, e) {
          return { enumerable: !(1 & _), configurable: !(2 & _), writable: !(4 & _), value: e };
        };
      }, 6135: function(p, _, e) {
        var r = e(4948), t = e(3070), a = e(9114);
        p.exports = function(i, s, o) {
          var n = r(s);
          n in i ? t.f(i, n, a(0, o)) : i[n] = o;
        };
      }, 7045: function(p, _, e) {
        var r = e(6339), t = e(3070);
        p.exports = function(a, i, s) {
          return s.get && r(s.get, i, { getter: !0 }), s.set && r(s.set, i, { setter: !0 }), t.f(a, i, s);
        };
      }, 8052: function(p, _, e) {
        var r = e(614), t = e(3070), a = e(6339), i = e(3072);
        p.exports = function(s, o, n, u) {
          u || (u = {});
          var c = u.enumerable, h = u.name !== void 0 ? u.name : o;
          if (r(n) && a(n, h, u), u.global)
            c ? s[o] = n : i(o, n);
          else {
            try {
              u.unsafe ? s[o] && (c = !0) : delete s[o];
            } catch {
            }
            c ? s[o] = n : t.f(s, o, { value: n, enumerable: !1, configurable: !u.nonConfigurable, writable: !u.nonWritable });
          }
          return s;
        };
      }, 9190: function(p, _, e) {
        var r = e(8052);
        p.exports = function(t, a, i) {
          for (var s in a)
            r(t, s, a[s], i);
          return t;
        };
      }, 3072: function(p, _, e) {
        var r = e(7854), t = Object.defineProperty;
        p.exports = function(a, i) {
          try {
            t(r, a, { value: i, configurable: !0, writable: !0 });
          } catch {
            r[a] = i;
          }
          return i;
        };
      }, 5117: function(p, _, e) {
        var r = e(6330), t = TypeError;
        p.exports = function(a, i) {
          if (!delete a[i])
            throw t("Cannot delete property " + r(i) + " of " + r(a));
        };
      }, 9781: function(p, _, e) {
        var r = e(7293);
        p.exports = !r(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      }, 4154: function(p) {
        var _ = typeof document == "object" && document.all, e = _ === void 0 && _ !== void 0;
        p.exports = { all: _, IS_HTMLDDA: e };
      }, 317: function(p, _, e) {
        var r = e(7854), t = e(111), a = r.document, i = t(a) && t(a.createElement);
        p.exports = function(s) {
          return i ? a.createElement(s) : {};
        };
      }, 7207: function(p) {
        var _ = TypeError;
        p.exports = function(e) {
          if (e > 9007199254740991)
            throw _("Maximum allowed index exceeded");
          return e;
        };
      }, 8324: function(p) {
        p.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
      }, 8509: function(p, _, e) {
        var r = e(317)("span").classList, t = r && r.constructor && r.constructor.prototype;
        p.exports = t === Object.prototype ? void 0 : t;
      }, 8886: function(p, _, e) {
        var r = e(8113).match(/firefox\/(\d+)/i);
        p.exports = !!r && +r[1];
      }, 7871: function(p, _, e) {
        var r = e(3823), t = e(5268);
        p.exports = !r && !t && typeof window == "object" && typeof document == "object";
      }, 9363: function(p) {
        p.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";
      }, 3823: function(p) {
        p.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
      }, 256: function(p, _, e) {
        var r = e(8113);
        p.exports = /MSIE|Trident/.test(r);
      }, 1528: function(p, _, e) {
        var r = e(8113);
        p.exports = /ipad|iphone|ipod/i.test(r) && typeof Pebble < "u";
      }, 6833: function(p, _, e) {
        var r = e(8113);
        p.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
      }, 5268: function(p, _, e) {
        var r = e(4326);
        p.exports = typeof process < "u" && r(process) == "process";
      }, 1036: function(p, _, e) {
        var r = e(8113);
        p.exports = /web0s(?!.*chrome)/i.test(r);
      }, 8113: function(p) {
        p.exports = typeof navigator < "u" && String(navigator.userAgent) || "";
      }, 7392: function(p, _, e) {
        var r, t, a = e(7854), i = e(8113), s = a.process, o = a.Deno, n = s && s.versions || o && o.version, u = n && n.v8;
        u && (t = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !t && i && (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = i.match(/Chrome\/(\d+)/)) && (t = +r[1]), p.exports = t;
      }, 8008: function(p, _, e) {
        var r = e(8113).match(/AppleWebKit\/(\d+)\./);
        p.exports = !!r && +r[1];
      }, 748: function(p) {
        p.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }, 2109: function(p, _, e) {
        var r = e(7854), t = e(1236).f, a = e(8880), i = e(8052), s = e(3072), o = e(9920), n = e(4705);
        p.exports = function(u, c) {
          var h, m, f, g, d, l = u.target, E = u.global, T = u.stat;
          if (h = E ? r : T ? r[l] || s(l, {}) : (r[l] || {}).prototype)
            for (m in c) {
              if (g = c[m], f = u.dontCallGetSet ? (d = t(h, m)) && d.value : h[m], !n(E ? m : l + (T ? "." : "#") + m, u.forced) && f !== void 0) {
                if (typeof g == typeof f)
                  continue;
                o(g, f);
              }
              (u.sham || f && f.sham) && a(g, "sham", !0), i(h, m, g, u);
            }
        };
      }, 7293: function(p) {
        p.exports = function(_) {
          try {
            return !!_();
          } catch {
            return !0;
          }
        };
      }, 6677: function(p, _, e) {
        var r = e(7293);
        p.exports = !r(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      }, 2104: function(p, _, e) {
        var r = e(4374), t = Function.prototype, a = t.apply, i = t.call;
        p.exports = typeof Reflect == "object" && Reflect.apply || (r ? i.bind(a) : function() {
          return i.apply(a, arguments);
        });
      }, 9974: function(p, _, e) {
        var r = e(1470), t = e(9662), a = e(4374), i = r(r.bind);
        p.exports = function(s, o) {
          return t(s), o === void 0 ? s : a ? i(s, o) : function() {
            return s.apply(o, arguments);
          };
        };
      }, 4374: function(p, _, e) {
        var r = e(7293);
        p.exports = !r(function() {
          var t = (function() {
          }).bind();
          return typeof t != "function" || t.hasOwnProperty("prototype");
        });
      }, 7065: function(p, _, e) {
        var r = e(1702), t = e(9662), a = e(111), i = e(2597), s = e(206), o = e(4374), n = Function, u = r([].concat), c = r([].join), h = {};
        p.exports = o ? n.bind : function(m) {
          var f = t(this), g = f.prototype, d = s(arguments, 1), l = function() {
            var E = u(d, s(arguments));
            return this instanceof l ? function(T, I, O) {
              if (!i(h, I)) {
                for (var C = [], N = 0; N < I; N++)
                  C[N] = "a[" + N + "]";
                h[I] = n("C,a", "return new C(" + c(C, ",") + ")");
              }
              return h[I](T, O);
            }(f, E.length, E) : f.apply(m, E);
          };
          return a(g) && (l.prototype = g), l;
        };
      }, 6916: function(p, _, e) {
        var r = e(4374), t = Function.prototype.call;
        p.exports = r ? t.bind(t) : function() {
          return t.apply(t, arguments);
        };
      }, 6530: function(p, _, e) {
        var r = e(9781), t = e(2597), a = Function.prototype, i = r && Object.getOwnPropertyDescriptor, s = t(a, "name"), o = s && (function() {
        }).name === "something", n = s && (!r || r && i(a, "name").configurable);
        p.exports = { EXISTS: s, PROPER: o, CONFIGURABLE: n };
      }, 5668: function(p, _, e) {
        var r = e(1702), t = e(9662);
        p.exports = function(a, i, s) {
          try {
            return r(t(Object.getOwnPropertyDescriptor(a, i)[s]));
          } catch {
          }
        };
      }, 1470: function(p, _, e) {
        var r = e(4326), t = e(1702);
        p.exports = function(a) {
          if (r(a) === "Function")
            return t(a);
        };
      }, 1702: function(p, _, e) {
        var r = e(4374), t = Function.prototype, a = t.call, i = r && t.bind.bind(a, a);
        p.exports = r ? i : function(s) {
          return function() {
            return a.apply(s, arguments);
          };
        };
      }, 5005: function(p, _, e) {
        var r = e(7854), t = e(614);
        p.exports = function(a, i) {
          return arguments.length < 2 ? (s = r[a], t(s) ? s : void 0) : r[a] && r[a][i];
          var s;
        };
      }, 1246: function(p, _, e) {
        var r = e(648), t = e(8173), a = e(8554), i = e(7497), s = e(5112)("iterator");
        p.exports = function(o) {
          if (!a(o))
            return t(o, s) || t(o, "@@iterator") || i[r(o)];
        };
      }, 4121: function(p, _, e) {
        var r = e(6916), t = e(9662), a = e(9670), i = e(6330), s = e(1246), o = TypeError;
        p.exports = function(n, u) {
          var c = arguments.length < 2 ? s(n) : u;
          if (t(c))
            return a(r(c, n));
          throw o(i(n) + " is not iterable");
        };
      }, 8044: function(p, _, e) {
        var r = e(1702), t = e(3157), a = e(614), i = e(4326), s = e(1340), o = r([].push);
        p.exports = function(n) {
          if (a(n))
            return n;
          if (t(n)) {
            for (var u = n.length, c = [], h = 0; h < u; h++) {
              var m = n[h];
              typeof m == "string" ? o(c, m) : typeof m != "number" && i(m) != "Number" && i(m) != "String" || o(c, s(m));
            }
            var f = c.length, g = !0;
            return function(d, l) {
              if (g)
                return g = !1, l;
              if (t(this))
                return l;
              for (var E = 0; E < f; E++)
                if (c[E] === d)
                  return l;
            };
          }
        };
      }, 8173: function(p, _, e) {
        var r = e(9662), t = e(8554);
        p.exports = function(a, i) {
          var s = a[i];
          return t(s) ? void 0 : r(s);
        };
      }, 7854: function(p, _, e) {
        var r = function(t) {
          return t && t.Math == Math && t;
        };
        p.exports = r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof e.g == "object" && e.g) || function() {
          return this;
        }() || this || Function("return this")();
      }, 2597: function(p, _, e) {
        var r = e(1702), t = e(7908), a = r({}.hasOwnProperty);
        p.exports = Object.hasOwn || function(i, s) {
          return a(t(i), s);
        };
      }, 3501: function(p) {
        p.exports = {};
      }, 842: function(p) {
        p.exports = function(_, e) {
          try {
            arguments.length == 1 ? console.error(_) : console.error(_, e);
          } catch {
          }
        };
      }, 490: function(p, _, e) {
        var r = e(5005);
        p.exports = r("document", "documentElement");
      }, 4664: function(p, _, e) {
        var r = e(9781), t = e(7293), a = e(317);
        p.exports = !r && !t(function() {
          return Object.defineProperty(a("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      }, 1179: function(p) {
        var _ = Array, e = Math.abs, r = Math.pow, t = Math.floor, a = Math.log, i = Math.LN2;
        p.exports = { pack: function(s, o, n) {
          var u, c, h, m = _(n), f = 8 * n - o - 1, g = (1 << f) - 1, d = g >> 1, l = o === 23 ? r(2, -24) - r(2, -77) : 0, E = s < 0 || s === 0 && 1 / s < 0 ? 1 : 0, T = 0;
          for ((s = e(s)) != s || s === 1 / 0 ? (c = s != s ? 1 : 0, u = g) : (u = t(a(s) / i), s * (h = r(2, -u)) < 1 && (u--, h *= 2), (s += u + d >= 1 ? l / h : l * r(2, 1 - d)) * h >= 2 && (u++, h /= 2), u + d >= g ? (c = 0, u = g) : u + d >= 1 ? (c = (s * h - 1) * r(2, o), u += d) : (c = s * r(2, d - 1) * r(2, o), u = 0)); o >= 8; )
            m[T++] = 255 & c, c /= 256, o -= 8;
          for (u = u << o | c, f += o; f > 0; )
            m[T++] = 255 & u, u /= 256, f -= 8;
          return m[--T] |= 128 * E, m;
        }, unpack: function(s, o) {
          var n, u = s.length, c = 8 * u - o - 1, h = (1 << c) - 1, m = h >> 1, f = c - 7, g = u - 1, d = s[g--], l = 127 & d;
          for (d >>= 7; f > 0; )
            l = 256 * l + s[g--], f -= 8;
          for (n = l & (1 << -f) - 1, l >>= -f, f += o; f > 0; )
            n = 256 * n + s[g--], f -= 8;
          if (l === 0)
            l = 1 - m;
          else {
            if (l === h)
              return n ? NaN : d ? -1 / 0 : 1 / 0;
            n += r(2, o), l -= m;
          }
          return (d ? -1 : 1) * n * r(2, l - o);
        } };
      }, 8361: function(p, _, e) {
        var r = e(1702), t = e(7293), a = e(4326), i = Object, s = r("".split);
        p.exports = t(function() {
          return !i("z").propertyIsEnumerable(0);
        }) ? function(o) {
          return a(o) == "String" ? s(o, "") : i(o);
        } : i;
      }, 9587: function(p, _, e) {
        var r = e(614), t = e(111), a = e(7674);
        p.exports = function(i, s, o) {
          var n, u;
          return a && r(n = s.constructor) && n !== o && t(u = n.prototype) && u !== o.prototype && a(i, u), i;
        };
      }, 2788: function(p, _, e) {
        var r = e(1702), t = e(614), a = e(5465), i = r(Function.toString);
        t(a.inspectSource) || (a.inspectSource = function(s) {
          return i(s);
        }), p.exports = a.inspectSource;
      }, 2423: function(p, _, e) {
        var r = e(2109), t = e(1702), a = e(3501), i = e(111), s = e(2597), o = e(3070).f, n = e(8006), u = e(1156), c = e(2050), h = e(9711), m = e(6677), f = !1, g = h("meta"), d = 0, l = function(T) {
          o(T, g, { value: { objectID: "O" + d++, weakData: {} } });
        }, E = p.exports = { enable: function() {
          E.enable = function() {
          }, f = !0;
          var T = n.f, I = t([].splice), O = {};
          O[g] = 1, T(O).length && (n.f = function(C) {
            for (var N = T(C), v = 0, y = N.length; v < y; v++)
              if (N[v] === g) {
                I(N, v, 1);
                break;
              }
            return N;
          }, r({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: u.f }));
        }, fastKey: function(T, I) {
          if (!i(T))
            return typeof T == "symbol" ? T : (typeof T == "string" ? "S" : "P") + T;
          if (!s(T, g)) {
            if (!c(T))
              return "F";
            if (!I)
              return "E";
            l(T);
          }
          return T[g].objectID;
        }, getWeakData: function(T, I) {
          if (!s(T, g)) {
            if (!c(T))
              return !0;
            if (!I)
              return !1;
            l(T);
          }
          return T[g].weakData;
        }, onFreeze: function(T) {
          return m && f && c(T) && !s(T, g) && l(T), T;
        } };
        a[g] = !0;
      }, 9909: function(p, _, e) {
        var r, t, a, i = e(4811), s = e(7854), o = e(111), n = e(8880), u = e(2597), c = e(5465), h = e(6200), m = e(3501), f = "Object already initialized", g = s.TypeError, d = s.WeakMap;
        if (i || c.state) {
          var l = c.state || (c.state = new d());
          l.get = l.get, l.has = l.has, l.set = l.set, r = function(T, I) {
            if (l.has(T))
              throw g(f);
            return I.facade = T, l.set(T, I), I;
          }, t = function(T) {
            return l.get(T) || {};
          }, a = function(T) {
            return l.has(T);
          };
        } else {
          var E = h("state");
          m[E] = !0, r = function(T, I) {
            if (u(T, E))
              throw g(f);
            return I.facade = T, n(T, E, I), I;
          }, t = function(T) {
            return u(T, E) ? T[E] : {};
          }, a = function(T) {
            return u(T, E);
          };
        }
        p.exports = { set: r, get: t, has: a, enforce: function(T) {
          return a(T) ? t(T) : r(T, {});
        }, getterFor: function(T) {
          return function(I) {
            var O;
            if (!o(I) || (O = t(I)).type !== T)
              throw g("Incompatible receiver, " + T + " required");
            return O;
          };
        } };
      }, 7659: function(p, _, e) {
        var r = e(5112), t = e(7497), a = r("iterator"), i = Array.prototype;
        p.exports = function(s) {
          return s !== void 0 && (t.Array === s || i[a] === s);
        };
      }, 3157: function(p, _, e) {
        var r = e(4326);
        p.exports = Array.isArray || function(t) {
          return r(t) == "Array";
        };
      }, 4067: function(p, _, e) {
        var r = e(648);
        p.exports = function(t) {
          var a = r(t);
          return a == "BigInt64Array" || a == "BigUint64Array";
        };
      }, 614: function(p, _, e) {
        var r = e(4154), t = r.all;
        p.exports = r.IS_HTMLDDA ? function(a) {
          return typeof a == "function" || a === t;
        } : function(a) {
          return typeof a == "function";
        };
      }, 4411: function(p, _, e) {
        var r = e(1702), t = e(7293), a = e(614), i = e(648), s = e(5005), o = e(2788), n = function() {
        }, u = [], c = s("Reflect", "construct"), h = /^\s*(?:class|function)\b/, m = r(h.exec), f = !h.exec(n), g = function(l) {
          if (!a(l))
            return !1;
          try {
            return c(n, u, l), !0;
          } catch {
            return !1;
          }
        }, d = function(l) {
          if (!a(l))
            return !1;
          switch (i(l)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return f || !!m(h, o(l));
          } catch {
            return !0;
          }
        };
        d.sham = !0, p.exports = !c || t(function() {
          var l;
          return g(g.call) || !g(Object) || !g(function() {
            l = !0;
          }) || l;
        }) ? d : g;
      }, 4705: function(p, _, e) {
        var r = e(7293), t = e(614), a = /#|\.prototype\./, i = function(c, h) {
          var m = o[s(c)];
          return m == u || m != n && (t(h) ? r(h) : !!h);
        }, s = i.normalize = function(c) {
          return String(c).replace(a, ".").toLowerCase();
        }, o = i.data = {}, n = i.NATIVE = "N", u = i.POLYFILL = "P";
        p.exports = i;
      }, 5988: function(p, _, e) {
        var r = e(111), t = Math.floor;
        p.exports = Number.isInteger || function(a) {
          return !r(a) && isFinite(a) && t(a) === a;
        };
      }, 8554: function(p) {
        p.exports = function(_) {
          return _ == null;
        };
      }, 111: function(p, _, e) {
        var r = e(614), t = e(4154), a = t.all;
        p.exports = t.IS_HTMLDDA ? function(i) {
          return typeof i == "object" ? i !== null : r(i) || i === a;
        } : function(i) {
          return typeof i == "object" ? i !== null : r(i);
        };
      }, 1913: function(p) {
        p.exports = !1;
      }, 7850: function(p, _, e) {
        var r = e(111), t = e(4326), a = e(5112)("match");
        p.exports = function(i) {
          var s;
          return r(i) && ((s = i[a]) !== void 0 ? !!s : t(i) == "RegExp");
        };
      }, 2190: function(p, _, e) {
        var r = e(5005), t = e(614), a = e(7976), i = e(3307), s = Object;
        p.exports = i ? function(o) {
          return typeof o == "symbol";
        } : function(o) {
          var n = r("Symbol");
          return t(n) && a(n.prototype, s(o));
        };
      }, 408: function(p, _, e) {
        var r = e(9974), t = e(6916), a = e(9670), i = e(6330), s = e(7659), o = e(6244), n = e(7976), u = e(4121), c = e(1246), h = e(9212), m = TypeError, f = function(d, l) {
          this.stopped = d, this.result = l;
        }, g = f.prototype;
        p.exports = function(d, l, E) {
          var T, I, O, C, N, v, y, A = E && E.that, x = !(!E || !E.AS_ENTRIES), j = !(!E || !E.IS_RECORD), P = !(!E || !E.IS_ITERATOR), W = !(!E || !E.INTERRUPTED), Z = r(l, A), ee = function(le) {
            return T && h(T, "normal", le), new f(!0, le);
          }, G = function(le) {
            return x ? (a(le), W ? Z(le[0], le[1], ee) : Z(le[0], le[1])) : W ? Z(le, ee) : Z(le);
          };
          if (j)
            T = d.iterator;
          else if (P)
            T = d;
          else {
            if (!(I = c(d)))
              throw m(i(d) + " is not iterable");
            if (s(I)) {
              for (O = 0, C = o(d); C > O; O++)
                if ((N = G(d[O])) && n(g, N))
                  return N;
              return new f(!1);
            }
            T = u(d, I);
          }
          for (v = j ? d.next : T.next; !(y = t(v, T)).done; ) {
            try {
              N = G(y.value);
            } catch (le) {
              h(T, "throw", le);
            }
            if (typeof N == "object" && N && n(g, N))
              return N;
          }
          return new f(!1);
        };
      }, 9212: function(p, _, e) {
        var r = e(6916), t = e(9670), a = e(8173);
        p.exports = function(i, s, o) {
          var n, u;
          t(i);
          try {
            if (!(n = a(i, "return"))) {
              if (s === "throw")
                throw o;
              return o;
            }
            n = r(n, i);
          } catch (c) {
            u = !0, n = c;
          }
          if (s === "throw")
            throw o;
          if (u)
            throw n;
          return t(n), o;
        };
      }, 3061: function(p, _, e) {
        var r = e(3383).IteratorPrototype, t = e(30), a = e(9114), i = e(8003), s = e(7497), o = function() {
          return this;
        };
        p.exports = function(n, u, c, h) {
          var m = u + " Iterator";
          return n.prototype = t(r, { next: a(+!h, c) }), i(n, m, !1, !0), s[m] = o, n;
        };
      }, 1656: function(p, _, e) {
        var r = e(2109), t = e(6916), a = e(1913), i = e(6530), s = e(614), o = e(3061), n = e(9518), u = e(7674), c = e(8003), h = e(8880), m = e(8052), f = e(5112), g = e(7497), d = e(3383), l = i.PROPER, E = i.CONFIGURABLE, T = d.IteratorPrototype, I = d.BUGGY_SAFARI_ITERATORS, O = f("iterator"), C = "keys", N = "values", v = "entries", y = function() {
          return this;
        };
        p.exports = function(A, x, j, P, W, Z, ee) {
          o(j, x, P);
          var G, le, ce, _e = function(Ve) {
            if (Ve === W && We)
              return We;
            if (!I && Ve in ye)
              return ye[Ve];
            switch (Ve) {
              case C:
              case N:
              case v:
                return function() {
                  return new j(this, Ve);
                };
            }
            return function() {
              return new j(this);
            };
          }, Ue = x + " Iterator", ve = !1, ye = A.prototype, Pe = ye[O] || ye["@@iterator"] || W && ye[W], We = !I && Pe || _e(W), ke = x == "Array" && ye.entries || Pe;
          if (ke && (G = n(ke.call(new A()))) !== Object.prototype && G.next && (a || n(G) === T || (u ? u(G, T) : s(G[O]) || m(G, O, y)), c(G, Ue, !0, !0), a && (g[Ue] = y)), l && W == N && Pe && Pe.name !== N && (!a && E ? h(ye, "name", N) : (ve = !0, We = function() {
            return t(Pe, this);
          })), W)
            if (le = { values: _e(N), keys: Z ? We : _e(C), entries: _e(v) }, ee)
              for (ce in le)
                (I || ve || !(ce in ye)) && m(ye, ce, le[ce]);
            else
              r({ target: x, proto: !0, forced: I || ve }, le);
          return a && !ee || ye[O] === We || m(ye, O, We, { name: W }), g[x] = We, le;
        };
      }, 3383: function(p, _, e) {
        var r, t, a, i = e(7293), s = e(614), o = e(111), n = e(30), u = e(9518), c = e(8052), h = e(5112), m = e(1913), f = h("iterator"), g = !1;
        [].keys && ("next" in (a = [].keys()) ? (t = u(u(a))) !== Object.prototype && (r = t) : g = !0), !o(r) || i(function() {
          var d = {};
          return r[f].call(d) !== d;
        }) ? r = {} : m && (r = n(r)), s(r[f]) || c(r, f, function() {
          return this;
        }), p.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: g };
      }, 7497: function(p) {
        p.exports = {};
      }, 6244: function(p, _, e) {
        var r = e(7466);
        p.exports = function(t) {
          return r(t.length);
        };
      }, 6339: function(p, _, e) {
        var r = e(1702), t = e(7293), a = e(614), i = e(2597), s = e(9781), o = e(6530).CONFIGURABLE, n = e(2788), u = e(9909), c = u.enforce, h = u.get, m = String, f = Object.defineProperty, g = r("".slice), d = r("".replace), l = r([].join), E = s && !t(function() {
          return f(function() {
          }, "length", { value: 8 }).length !== 8;
        }), T = String(String).split("String"), I = p.exports = function(O, C, N) {
          g(m(C), 0, 7) === "Symbol(" && (C = "[" + d(m(C), /^Symbol\(([^)]*)\)/, "$1") + "]"), N && N.getter && (C = "get " + C), N && N.setter && (C = "set " + C), (!i(O, "name") || o && O.name !== C) && (s ? f(O, "name", { value: C, configurable: !0 }) : O.name = C), E && N && i(N, "arity") && O.length !== N.arity && f(O, "length", { value: N.arity });
          try {
            N && i(N, "constructor") && N.constructor ? s && f(O, "prototype", { writable: !1 }) : O.prototype && (O.prototype = void 0);
          } catch {
          }
          var v = c(O);
          return i(v, "source") || (v.source = l(T, typeof C == "string" ? C : "")), O;
        };
        Function.prototype.toString = I(function() {
          return a(this) && h(this).source || n(this);
        }, "toString");
      }, 4758: function(p) {
        var _ = Math.ceil, e = Math.floor;
        p.exports = Math.trunc || function(r) {
          var t = +r;
          return (t > 0 ? e : _)(t);
        };
      }, 5948: function(p, _, e) {
        var r, t, a, i, s, o = e(7854), n = e(9974), u = e(1236).f, c = e(261).set, h = e(8572), m = e(6833), f = e(1528), g = e(1036), d = e(5268), l = o.MutationObserver || o.WebKitMutationObserver, E = o.document, T = o.process, I = o.Promise, O = u(o, "queueMicrotask"), C = O && O.value;
        if (!C) {
          var N = new h(), v = function() {
            var y, A;
            for (d && (y = T.domain) && y.exit(); A = N.get(); )
              try {
                A();
              } catch (x) {
                throw N.head && r(), x;
              }
            y && y.enter();
          };
          m || d || g || !l || !E ? !f && I && I.resolve ? ((i = I.resolve(void 0)).constructor = I, s = n(i.then, i), r = function() {
            s(v);
          }) : d ? r = function() {
            T.nextTick(v);
          } : (c = n(c, o), r = function() {
            c(v);
          }) : (t = !0, a = E.createTextNode(""), new l(v).observe(a, { characterData: !0 }), r = function() {
            a.data = t = !t;
          }), C = function(y) {
            N.head || r(), N.add(y);
          };
        }
        p.exports = C;
      }, 8523: function(p, _, e) {
        var r = e(9662), t = TypeError, a = function(i) {
          var s, o;
          this.promise = new i(function(n, u) {
            if (s !== void 0 || o !== void 0)
              throw t("Bad Promise constructor");
            s = n, o = u;
          }), this.resolve = r(s), this.reject = r(o);
        };
        p.exports.f = function(i) {
          return new a(i);
        };
      }, 3929: function(p, _, e) {
        var r = e(7850), t = TypeError;
        p.exports = function(a) {
          if (r(a))
            throw t("The method doesn't accept regular expressions");
          return a;
        };
      }, 1574: function(p, _, e) {
        var r = e(9781), t = e(1702), a = e(6916), i = e(7293), s = e(1956), o = e(5181), n = e(5296), u = e(7908), c = e(8361), h = Object.assign, m = Object.defineProperty, f = t([].concat);
        p.exports = !h || i(function() {
          if (r && h({ b: 1 }, h(m({}, "a", { enumerable: !0, get: function() {
            m(this, "b", { value: 3, enumerable: !1 });
          } }), { b: 2 })).b !== 1)
            return !0;
          var g = {}, d = {}, l = Symbol(), E = "abcdefghijklmnopqrst";
          return g[l] = 7, E.split("").forEach(function(T) {
            d[T] = T;
          }), h({}, g)[l] != 7 || s(h({}, d)).join("") != E;
        }) ? function(g, d) {
          for (var l = u(g), E = arguments.length, T = 1, I = o.f, O = n.f; E > T; )
            for (var C, N = c(arguments[T++]), v = I ? f(s(N), I(N)) : s(N), y = v.length, A = 0; y > A; )
              C = v[A++], r && !a(O, N, C) || (l[C] = N[C]);
          return l;
        } : h;
      }, 30: function(p, _, e) {
        var r, t = e(9670), a = e(6048), i = e(748), s = e(3501), o = e(490), n = e(317), u = e(6200), c = "prototype", h = "script", m = u("IE_PROTO"), f = function() {
        }, g = function(E) {
          return "<" + h + ">" + E + "</" + h + ">";
        }, d = function(E) {
          E.write(g("")), E.close();
          var T = E.parentWindow.Object;
          return E = null, T;
        }, l = function() {
          try {
            r = new ActiveXObject("htmlfile");
          } catch {
          }
          var E, T, I;
          l = typeof document < "u" ? document.domain && r ? d(r) : (T = n("iframe"), I = "java" + h + ":", T.style.display = "none", o.appendChild(T), T.src = String(I), (E = T.contentWindow.document).open(), E.write(g("document.F=Object")), E.close(), E.F) : d(r);
          for (var O = i.length; O--; )
            delete l[c][i[O]];
          return l();
        };
        s[m] = !0, p.exports = Object.create || function(E, T) {
          var I;
          return E !== null ? (f[c] = t(E), I = new f(), f[c] = null, I[m] = E) : I = l(), T === void 0 ? I : a.f(I, T);
        };
      }, 6048: function(p, _, e) {
        var r = e(9781), t = e(3353), a = e(3070), i = e(9670), s = e(5656), o = e(1956);
        _.f = r && !t ? Object.defineProperties : function(n, u) {
          i(n);
          for (var c, h = s(u), m = o(u), f = m.length, g = 0; f > g; )
            a.f(n, c = m[g++], h[c]);
          return n;
        };
      }, 3070: function(p, _, e) {
        var r = e(9781), t = e(4664), a = e(3353), i = e(9670), s = e(4948), o = TypeError, n = Object.defineProperty, u = Object.getOwnPropertyDescriptor, c = "enumerable", h = "configurable", m = "writable";
        _.f = r ? a ? function(f, g, d) {
          if (i(f), g = s(g), i(d), typeof f == "function" && g === "prototype" && "value" in d && m in d && !d[m]) {
            var l = u(f, g);
            l && l[m] && (f[g] = d.value, d = { configurable: h in d ? d[h] : l[h], enumerable: c in d ? d[c] : l[c], writable: !1 });
          }
          return n(f, g, d);
        } : n : function(f, g, d) {
          if (i(f), g = s(g), i(d), t)
            try {
              return n(f, g, d);
            } catch {
            }
          if ("get" in d || "set" in d)
            throw o("Accessors not supported");
          return "value" in d && (f[g] = d.value), f;
        };
      }, 1236: function(p, _, e) {
        var r = e(9781), t = e(6916), a = e(5296), i = e(9114), s = e(5656), o = e(4948), n = e(2597), u = e(4664), c = Object.getOwnPropertyDescriptor;
        _.f = r ? c : function(h, m) {
          if (h = s(h), m = o(m), u)
            try {
              return c(h, m);
            } catch {
            }
          if (n(h, m))
            return i(!t(a.f, h, m), h[m]);
        };
      }, 1156: function(p, _, e) {
        var r = e(4326), t = e(5656), a = e(8006).f, i = e(1589), s = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        p.exports.f = function(o) {
          return s && r(o) == "Window" ? function(n) {
            try {
              return a(n);
            } catch {
              return i(s);
            }
          }(o) : a(t(o));
        };
      }, 8006: function(p, _, e) {
        var r = e(6324), t = e(748).concat("length", "prototype");
        _.f = Object.getOwnPropertyNames || function(a) {
          return r(a, t);
        };
      }, 5181: function(p, _) {
        _.f = Object.getOwnPropertySymbols;
      }, 9518: function(p, _, e) {
        var r = e(2597), t = e(614), a = e(7908), i = e(6200), s = e(8544), o = i("IE_PROTO"), n = Object, u = n.prototype;
        p.exports = s ? n.getPrototypeOf : function(c) {
          var h = a(c);
          if (r(h, o))
            return h[o];
          var m = h.constructor;
          return t(m) && h instanceof m ? m.prototype : h instanceof n ? u : null;
        };
      }, 2050: function(p, _, e) {
        var r = e(7293), t = e(111), a = e(4326), i = e(7556), s = Object.isExtensible, o = r(function() {
        });
        p.exports = o || i ? function(n) {
          return !!t(n) && (!i || a(n) != "ArrayBuffer") && (!s || s(n));
        } : s;
      }, 7976: function(p, _, e) {
        var r = e(1702);
        p.exports = r({}.isPrototypeOf);
      }, 6324: function(p, _, e) {
        var r = e(1702), t = e(2597), a = e(5656), i = e(1318).indexOf, s = e(3501), o = r([].push);
        p.exports = function(n, u) {
          var c, h = a(n), m = 0, f = [];
          for (c in h)
            !t(s, c) && t(h, c) && o(f, c);
          for (; u.length > m; )
            t(h, c = u[m++]) && (~i(f, c) || o(f, c));
          return f;
        };
      }, 1956: function(p, _, e) {
        var r = e(6324), t = e(748);
        p.exports = Object.keys || function(a) {
          return r(a, t);
        };
      }, 5296: function(p, _) {
        var e = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, t = r && !e.call({ 1: 2 }, 1);
        _.f = t ? function(a) {
          var i = r(this, a);
          return !!i && i.enumerable;
        } : e;
      }, 7674: function(p, _, e) {
        var r = e(5668), t = e(9670), a = e(6077);
        p.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var i, s = !1, o = {};
          try {
            (i = r(Object.prototype, "__proto__", "set"))(o, []), s = o instanceof Array;
          } catch {
          }
          return function(n, u) {
            return t(n), a(u), s ? i(n, u) : n.__proto__ = u, n;
          };
        }() : void 0);
      }, 4699: function(p, _, e) {
        var r = e(9781), t = e(1702), a = e(1956), i = e(5656), s = t(e(5296).f), o = t([].push), n = function(u) {
          return function(c) {
            for (var h, m = i(c), f = a(m), g = f.length, d = 0, l = []; g > d; )
              h = f[d++], r && !s(m, h) || o(l, u ? [h, m[h]] : m[h]);
            return l;
          };
        };
        p.exports = { entries: n(!0), values: n(!1) };
      }, 288: function(p, _, e) {
        var r = e(1694), t = e(648);
        p.exports = r ? {}.toString : function() {
          return "[object " + t(this) + "]";
        };
      }, 2140: function(p, _, e) {
        var r = e(6916), t = e(614), a = e(111), i = TypeError;
        p.exports = function(s, o) {
          var n, u;
          if (o === "string" && t(n = s.toString) && !a(u = r(n, s)) || t(n = s.valueOf) && !a(u = r(n, s)) || o !== "string" && t(n = s.toString) && !a(u = r(n, s)))
            return u;
          throw i("Can't convert object to primitive value");
        };
      }, 3887: function(p, _, e) {
        var r = e(5005), t = e(1702), a = e(8006), i = e(5181), s = e(9670), o = t([].concat);
        p.exports = r("Reflect", "ownKeys") || function(n) {
          var u = a.f(s(n)), c = i.f;
          return c ? o(u, c(n)) : u;
        };
      }, 857: function(p, _, e) {
        var r = e(7854);
        p.exports = r;
      }, 2534: function(p) {
        p.exports = function(_) {
          try {
            return { error: !1, value: _() };
          } catch (e) {
            return { error: !0, value: e };
          }
        };
      }, 3702: function(p, _, e) {
        var r = e(7854), t = e(2492), a = e(614), i = e(4705), s = e(2788), o = e(5112), n = e(7871), u = e(3823), c = e(1913), h = e(7392), m = t && t.prototype, f = o("species"), g = !1, d = a(r.PromiseRejectionEvent), l = i("Promise", function() {
          var E = s(t), T = E !== String(t);
          if (!T && h === 66 || c && (!m.catch || !m.finally))
            return !0;
          if (!h || h < 51 || !/native code/.test(E)) {
            var I = new t(function(C) {
              C(1);
            }), O = function(C) {
              C(function() {
              }, function() {
              });
            };
            if ((I.constructor = {})[f] = O, !(g = I.then(function() {
            }) instanceof O))
              return !0;
          }
          return !T && (n || u) && !d;
        });
        p.exports = { CONSTRUCTOR: l, REJECTION_EVENT: d, SUBCLASSING: g };
      }, 2492: function(p, _, e) {
        var r = e(7854);
        p.exports = r.Promise;
      }, 9478: function(p, _, e) {
        var r = e(9670), t = e(111), a = e(8523);
        p.exports = function(i, s) {
          if (r(i), t(s) && s.constructor === i)
            return s;
          var o = a.f(i);
          return (0, o.resolve)(s), o.promise;
        };
      }, 612: function(p, _, e) {
        var r = e(2492), t = e(7072), a = e(3702).CONSTRUCTOR;
        p.exports = a || !t(function(i) {
          r.all(i).then(void 0, function() {
          });
        });
      }, 8572: function(p) {
        var _ = function() {
          this.head = null, this.tail = null;
        };
        _.prototype = { add: function(e) {
          var r = { item: e, next: null }, t = this.tail;
          t ? t.next = r : this.head = r, this.tail = r;
        }, get: function() {
          var e = this.head;
          if (e)
            return (this.head = e.next) === null && (this.tail = null), e.item;
        } }, p.exports = _;
      }, 2261: function(p, _, e) {
        var r, t, a = e(6916), i = e(1702), s = e(1340), o = e(7066), n = e(2999), u = e(2309), c = e(30), h = e(9909).get, m = e(9441), f = e(7168), g = u("native-string-replace", String.prototype.replace), d = RegExp.prototype.exec, l = d, E = i("".charAt), T = i("".indexOf), I = i("".replace), O = i("".slice), C = (t = /b*/g, a(d, r = /a/, "a"), a(d, t, "a"), r.lastIndex !== 0 || t.lastIndex !== 0), N = n.BROKEN_CARET, v = /()??/.exec("")[1] !== void 0;
        (C || v || N || m || f) && (l = function(y) {
          var A, x, j, P, W, Z, ee, G = this, le = h(G), ce = s(y), _e = le.raw;
          if (_e)
            return _e.lastIndex = G.lastIndex, A = a(l, _e, ce), G.lastIndex = _e.lastIndex, A;
          var Ue = le.groups, ve = N && G.sticky, ye = a(o, G), Pe = G.source, We = 0, ke = ce;
          if (ve && (ye = I(ye, "y", ""), T(ye, "g") === -1 && (ye += "g"), ke = O(ce, G.lastIndex), G.lastIndex > 0 && (!G.multiline || G.multiline && E(ce, G.lastIndex - 1) !== `
`) && (Pe = "(?: " + Pe + ")", ke = " " + ke, We++), x = new RegExp("^(?:" + Pe + ")", ye)), v && (x = new RegExp("^" + Pe + "$(?!\\s)", ye)), C && (j = G.lastIndex), P = a(d, ve ? x : G, ke), ve ? P ? (P.input = O(P.input, We), P[0] = O(P[0], We), P.index = G.lastIndex, G.lastIndex += P[0].length) : G.lastIndex = 0 : C && P && (G.lastIndex = G.global ? P.index + P[0].length : j), v && P && P.length > 1 && a(g, P[0], x, function() {
            for (W = 1; W < arguments.length - 2; W++)
              arguments[W] === void 0 && (P[W] = void 0);
          }), P && Ue)
            for (P.groups = Z = c(null), W = 0; W < Ue.length; W++)
              Z[(ee = Ue[W])[0]] = P[ee[1]];
          return P;
        }), p.exports = l;
      }, 7066: function(p, _, e) {
        var r = e(9670);
        p.exports = function() {
          var t = r(this), a = "";
          return t.hasIndices && (a += "d"), t.global && (a += "g"), t.ignoreCase && (a += "i"), t.multiline && (a += "m"), t.dotAll && (a += "s"), t.unicode && (a += "u"), t.unicodeSets && (a += "v"), t.sticky && (a += "y"), a;
        };
      }, 4706: function(p, _, e) {
        var r = e(6916), t = e(2597), a = e(7976), i = e(7066), s = RegExp.prototype;
        p.exports = function(o) {
          var n = o.flags;
          return n !== void 0 || "flags" in s || t(o, "flags") || !a(s, o) ? n : r(i, o);
        };
      }, 2999: function(p, _, e) {
        var r = e(7293), t = e(7854).RegExp, a = r(function() {
          var o = t("a", "y");
          return o.lastIndex = 2, o.exec("abcd") != null;
        }), i = a || r(function() {
          return !t("a", "y").sticky;
        }), s = a || r(function() {
          var o = t("^r", "gy");
          return o.lastIndex = 2, o.exec("str") != null;
        });
        p.exports = { BROKEN_CARET: s, MISSED_STICKY: i, UNSUPPORTED_Y: a };
      }, 9441: function(p, _, e) {
        var r = e(7293), t = e(7854).RegExp;
        p.exports = r(function() {
          var a = t(".", "s");
          return !(a.dotAll && a.exec(`
`) && a.flags === "s");
        });
      }, 7168: function(p, _, e) {
        var r = e(7293), t = e(7854).RegExp;
        p.exports = r(function() {
          var a = t("(?<a>b)", "g");
          return a.exec("b").groups.a !== "b" || "b".replace(a, "$<a>c") !== "bc";
        });
      }, 4488: function(p, _, e) {
        var r = e(8554), t = TypeError;
        p.exports = function(a) {
          if (r(a))
            throw t("Can't call method on " + a);
          return a;
        };
      }, 7152: function(p, _, e) {
        var r, t = e(7854), a = e(2104), i = e(614), s = e(9363), o = e(8113), n = e(206), u = e(8053), c = t.Function, h = /MSIE .\./.test(o) || s && ((r = t.Bun.version.split(".")).length < 3 || r[0] == 0 && (r[1] < 3 || r[1] == 3 && r[2] == 0));
        p.exports = function(m, f) {
          var g = f ? 2 : 1;
          return h ? function(d, l) {
            var E = u(arguments.length, 1) > g, T = i(d) ? d : c(d), I = E ? n(arguments, g) : [], O = E ? function() {
              a(T, this, I);
            } : T;
            return f ? m(O, l) : m(O);
          } : m;
        };
      }, 6340: function(p, _, e) {
        var r = e(5005), t = e(7045), a = e(5112), i = e(9781), s = a("species");
        p.exports = function(o) {
          var n = r(o);
          i && n && !n[s] && t(n, s, { configurable: !0, get: function() {
            return this;
          } });
        };
      }, 8003: function(p, _, e) {
        var r = e(3070).f, t = e(2597), a = e(5112)("toStringTag");
        p.exports = function(i, s, o) {
          i && !o && (i = i.prototype), i && !t(i, a) && r(i, a, { configurable: !0, value: s });
        };
      }, 6200: function(p, _, e) {
        var r = e(2309), t = e(9711), a = r("keys");
        p.exports = function(i) {
          return a[i] || (a[i] = t(i));
        };
      }, 5465: function(p, _, e) {
        var r = e(7854), t = e(3072), a = "__core-js_shared__", i = r[a] || t(a, {});
        p.exports = i;
      }, 2309: function(p, _, e) {
        var r = e(1913), t = e(5465);
        (p.exports = function(a, i) {
          return t[a] || (t[a] = i !== void 0 ? i : {});
        })("versions", []).push({ version: "3.30.2", mode: r ? "pure" : "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE", source: "https://github.com/zloirock/core-js" });
      }, 6707: function(p, _, e) {
        var r = e(9670), t = e(9483), a = e(8554), i = e(5112)("species");
        p.exports = function(s, o) {
          var n, u = r(s).constructor;
          return u === void 0 || a(n = r(u)[i]) ? o : t(n);
        };
      }, 8710: function(p, _, e) {
        var r = e(1702), t = e(9303), a = e(1340), i = e(4488), s = r("".charAt), o = r("".charCodeAt), n = r("".slice), u = function(c) {
          return function(h, m) {
            var f, g, d = a(i(h)), l = t(m), E = d.length;
            return l < 0 || l >= E ? c ? "" : void 0 : (f = o(d, l)) < 55296 || f > 56319 || l + 1 === E || (g = o(d, l + 1)) < 56320 || g > 57343 ? c ? s(d, l) : f : c ? n(d, l, l + 2) : g - 56320 + (f - 55296 << 10) + 65536;
          };
        };
        p.exports = { codeAt: u(!1), charAt: u(!0) };
      }, 3197: function(p, _, e) {
        var r = e(1702), t = 2147483647, a = /[^\0-\u007E]/, i = /[.\u3002\uFF0E\uFF61]/g, s = "Overflow: input needs wider integers to process", o = RangeError, n = r(i.exec), u = Math.floor, c = String.fromCharCode, h = r("".charCodeAt), m = r([].join), f = r([].push), g = r("".replace), d = r("".split), l = r("".toLowerCase), E = function(O) {
          return O + 22 + 75 * (O < 26);
        }, T = function(O, C, N) {
          var v = 0;
          for (O = N ? u(O / 700) : O >> 1, O += u(O / C); O > 455; )
            O = u(O / 35), v += 36;
          return u(v + 36 * O / (O + 38));
        }, I = function(O) {
          var C = [];
          O = function(ve) {
            for (var ye = [], Pe = 0, We = ve.length; Pe < We; ) {
              var ke = h(ve, Pe++);
              if (ke >= 55296 && ke <= 56319 && Pe < We) {
                var Ve = h(ve, Pe++);
                (64512 & Ve) == 56320 ? f(ye, ((1023 & ke) << 10) + (1023 & Ve) + 65536) : (f(ye, ke), Pe--);
              } else
                f(ye, ke);
            }
            return ye;
          }(O);
          var N, v, y = O.length, A = 128, x = 0, j = 72;
          for (N = 0; N < O.length; N++)
            (v = O[N]) < 128 && f(C, c(v));
          var P = C.length, W = P;
          for (P && f(C, "-"); W < y; ) {
            var Z = t;
            for (N = 0; N < O.length; N++)
              (v = O[N]) >= A && v < Z && (Z = v);
            var ee = W + 1;
            if (Z - A > u((t - x) / ee))
              throw o(s);
            for (x += (Z - A) * ee, A = Z, N = 0; N < O.length; N++) {
              if ((v = O[N]) < A && ++x > t)
                throw o(s);
              if (v == A) {
                for (var G = x, le = 36; ; ) {
                  var ce = le <= j ? 1 : le >= j + 26 ? 26 : le - j;
                  if (G < ce)
                    break;
                  var _e = G - ce, Ue = 36 - ce;
                  f(C, c(E(ce + _e % Ue))), G = u(_e / Ue), le += 36;
                }
                f(C, c(E(G))), j = T(x, ee, W == P), x = 0, W++;
              }
            }
            x++, A++;
          }
          return m(C, "");
        };
        p.exports = function(O) {
          var C, N, v = [], y = d(g(l(O), i, "."), ".");
          for (C = 0; C < y.length; C++)
            N = y[C], f(v, n(a, N) ? "xn--" + I(N) : N);
          return m(v, ".");
        };
      }, 3111: function(p, _, e) {
        var r = e(1702), t = e(4488), a = e(1340), i = e(1361), s = r("".replace), o = RegExp("^[" + i + "]+"), n = RegExp("(^|[^" + i + "])[" + i + "]+$"), u = function(c) {
          return function(h) {
            var m = a(t(h));
            return 1 & c && (m = s(m, o, "")), 2 & c && (m = s(m, n, "$1")), m;
          };
        };
        p.exports = { start: u(1), end: u(2), trim: u(3) };
      }, 6293: function(p, _, e) {
        var r = e(7392), t = e(7293), a = e(7854).String;
        p.exports = !!Object.getOwnPropertySymbols && !t(function() {
          var i = Symbol();
          return !a(i) || !(Object(i) instanceof Symbol) || !Symbol.sham && r && r < 41;
        });
      }, 6532: function(p, _, e) {
        var r = e(6916), t = e(5005), a = e(5112), i = e(8052);
        p.exports = function() {
          var s = t("Symbol"), o = s && s.prototype, n = o && o.valueOf, u = a("toPrimitive");
          o && !o[u] && i(o, u, function(c) {
            return r(n, this);
          }, { arity: 1 });
        };
      }, 2015: function(p, _, e) {
        var r = e(6293);
        p.exports = r && !!Symbol.for && !!Symbol.keyFor;
      }, 261: function(p, _, e) {
        var r, t, a, i, s = e(7854), o = e(2104), n = e(9974), u = e(614), c = e(2597), h = e(7293), m = e(490), f = e(206), g = e(317), d = e(8053), l = e(6833), E = e(5268), T = s.setImmediate, I = s.clearImmediate, O = s.process, C = s.Dispatch, N = s.Function, v = s.MessageChannel, y = s.String, A = 0, x = {}, j = "onreadystatechange";
        h(function() {
          r = s.location;
        });
        var P = function(G) {
          if (c(x, G)) {
            var le = x[G];
            delete x[G], le();
          }
        }, W = function(G) {
          return function() {
            P(G);
          };
        }, Z = function(G) {
          P(G.data);
        }, ee = function(G) {
          s.postMessage(y(G), r.protocol + "//" + r.host);
        };
        T && I || (T = function(G) {
          d(arguments.length, 1);
          var le = u(G) ? G : N(G), ce = f(arguments, 1);
          return x[++A] = function() {
            o(le, void 0, ce);
          }, t(A), A;
        }, I = function(G) {
          delete x[G];
        }, E ? t = function(G) {
          O.nextTick(W(G));
        } : C && C.now ? t = function(G) {
          C.now(W(G));
        } : v && !l ? (i = (a = new v()).port2, a.port1.onmessage = Z, t = n(i.postMessage, i)) : s.addEventListener && u(s.postMessage) && !s.importScripts && r && r.protocol !== "file:" && !h(ee) ? (t = ee, s.addEventListener("message", Z, !1)) : t = j in g("script") ? function(G) {
          m.appendChild(g("script"))[j] = function() {
            m.removeChild(this), P(G);
          };
        } : function(G) {
          setTimeout(W(G), 0);
        }), p.exports = { set: T, clear: I };
      }, 863: function(p, _, e) {
        var r = e(1702);
        p.exports = r(1 .valueOf);
      }, 1400: function(p, _, e) {
        var r = e(9303), t = Math.max, a = Math.min;
        p.exports = function(i, s) {
          var o = r(i);
          return o < 0 ? t(o + s, 0) : a(o, s);
        };
      }, 4599: function(p, _, e) {
        var r = e(7593), t = TypeError;
        p.exports = function(a) {
          var i = r(a, "number");
          if (typeof i == "number")
            throw t("Can't convert number to bigint");
          return BigInt(i);
        };
      }, 7067: function(p, _, e) {
        var r = e(9303), t = e(7466), a = RangeError;
        p.exports = function(i) {
          if (i === void 0)
            return 0;
          var s = r(i), o = t(s);
          if (s !== o)
            throw a("Wrong length or index");
          return o;
        };
      }, 5656: function(p, _, e) {
        var r = e(8361), t = e(4488);
        p.exports = function(a) {
          return r(t(a));
        };
      }, 9303: function(p, _, e) {
        var r = e(4758);
        p.exports = function(t) {
          var a = +t;
          return a != a || a === 0 ? 0 : r(a);
        };
      }, 7466: function(p, _, e) {
        var r = e(9303), t = Math.min;
        p.exports = function(a) {
          return a > 0 ? t(r(a), 9007199254740991) : 0;
        };
      }, 7908: function(p, _, e) {
        var r = e(4488), t = Object;
        p.exports = function(a) {
          return t(r(a));
        };
      }, 4590: function(p, _, e) {
        var r = e(3002), t = RangeError;
        p.exports = function(a, i) {
          var s = r(a);
          if (s % i)
            throw t("Wrong offset");
          return s;
        };
      }, 3002: function(p, _, e) {
        var r = e(9303), t = RangeError;
        p.exports = function(a) {
          var i = r(a);
          if (i < 0)
            throw t("The argument can't be less than 0");
          return i;
        };
      }, 7593: function(p, _, e) {
        var r = e(6916), t = e(111), a = e(2190), i = e(8173), s = e(2140), o = e(5112), n = TypeError, u = o("toPrimitive");
        p.exports = function(c, h) {
          if (!t(c) || a(c))
            return c;
          var m, f = i(c, u);
          if (f) {
            if (h === void 0 && (h = "default"), m = r(f, c, h), !t(m) || a(m))
              return m;
            throw n("Can't convert object to primitive value");
          }
          return h === void 0 && (h = "number"), s(c, h);
        };
      }, 4948: function(p, _, e) {
        var r = e(7593), t = e(2190);
        p.exports = function(a) {
          var i = r(a, "string");
          return t(i) ? i : i + "";
        };
      }, 1694: function(p, _, e) {
        var r = {};
        r[e(5112)("toStringTag")] = "z", p.exports = String(r) === "[object z]";
      }, 1340: function(p, _, e) {
        var r = e(648), t = String;
        p.exports = function(a) {
          if (r(a) === "Symbol")
            throw TypeError("Cannot convert a Symbol value to a string");
          return t(a);
        };
      }, 6330: function(p) {
        var _ = String;
        p.exports = function(e) {
          try {
            return _(e);
          } catch {
            return "Object";
          }
        };
      }, 9843: function(p, _, e) {
        var r = e(2109), t = e(7854), a = e(6916), i = e(9781), s = e(3832), o = e(260), n = e(3331), u = e(5787), c = e(9114), h = e(8880), m = e(5988), f = e(7466), g = e(7067), d = e(4590), l = e(4948), E = e(2597), T = e(648), I = e(111), O = e(2190), C = e(30), N = e(7976), v = e(7674), y = e(8006).f, A = e(7321), x = e(2092).forEach, j = e(6340), P = e(7045), W = e(3070), Z = e(1236), ee = e(9909), G = e(9587), le = ee.get, ce = ee.set, _e = ee.enforce, Ue = W.f, ve = Z.f, ye = Math.round, Pe = t.RangeError, We = n.ArrayBuffer, ke = We.prototype, Ve = n.DataView, se = o.NATIVE_ARRAY_BUFFER_VIEWS, He = o.TYPED_ARRAY_TAG, Xe = o.TypedArray, nt = o.TypedArrayPrototype, te = o.aTypedArrayConstructor, $e = o.isTypedArray, Me = "BYTES_PER_ELEMENT", rt = "Wrong length", ot = function(qe, Oe) {
          te(qe);
          for (var w = 0, z = Oe.length, re = new qe(z); z > w; )
            re[w] = Oe[w++];
          return re;
        }, it = function(qe, Oe) {
          P(qe, Oe, { configurable: !0, get: function() {
            return le(this)[Oe];
          } });
        }, ct = function(qe) {
          var Oe;
          return N(ke, qe) || (Oe = T(qe)) == "ArrayBuffer" || Oe == "SharedArrayBuffer";
        }, Ne = function(qe, Oe) {
          return $e(qe) && !O(Oe) && Oe in qe && m(+Oe) && Oe >= 0;
        }, ze = function(qe, Oe) {
          return Oe = l(Oe), Ne(qe, Oe) ? c(2, qe[Oe]) : ve(qe, Oe);
        }, Ye = function(qe, Oe, w) {
          return Oe = l(Oe), !(Ne(qe, Oe) && I(w) && E(w, "value")) || E(w, "get") || E(w, "set") || w.configurable || E(w, "writable") && !w.writable || E(w, "enumerable") && !w.enumerable ? Ue(qe, Oe, w) : (qe[Oe] = w.value, qe);
        };
        i ? (se || (Z.f = ze, W.f = Ye, it(nt, "buffer"), it(nt, "byteOffset"), it(nt, "byteLength"), it(nt, "length")), r({ target: "Object", stat: !0, forced: !se }, { getOwnPropertyDescriptor: ze, defineProperty: Ye }), p.exports = function(qe, Oe, w) {
          var z = qe.match(/\d+/)[0] / 8, re = qe + (w ? "Clamped" : "") + "Array", q = "get" + qe, ie = "set" + qe, Ie = t[re], pe = Ie, fe = pe && pe.prototype, S = {}, X = function(ue, K) {
            Ue(ue, K, { get: function() {
              return function(de, Ee) {
                var Se = le(de);
                return Se.view[q](Ee * z + Se.byteOffset, !0);
              }(this, K);
            }, set: function(de) {
              return function(Ee, Se, xe) {
                var Be = le(Ee);
                w && (xe = (xe = ye(xe)) < 0 ? 0 : xe > 255 ? 255 : 255 & xe), Be.view[ie](Se * z + Be.byteOffset, xe, !0);
              }(this, K, de);
            }, enumerable: !0 });
          };
          se ? s && (pe = Oe(function(ue, K, de, Ee) {
            return u(ue, fe), G(I(K) ? ct(K) ? Ee !== void 0 ? new Ie(K, d(de, z), Ee) : de !== void 0 ? new Ie(K, d(de, z)) : new Ie(K) : $e(K) ? ot(pe, K) : a(A, pe, K) : new Ie(g(K)), ue, pe);
          }), v && v(pe, Xe), x(y(Ie), function(ue) {
            ue in pe || h(pe, ue, Ie[ue]);
          }), pe.prototype = fe) : (pe = Oe(function(ue, K, de, Ee) {
            u(ue, fe);
            var Se, xe, Be, ut = 0, lt = 0;
            if (I(K)) {
              if (!ct(K))
                return $e(K) ? ot(pe, K) : a(A, pe, K);
              Se = K, lt = d(de, z);
              var pt = K.byteLength;
              if (Ee === void 0) {
                if (pt % z || (xe = pt - lt) < 0)
                  throw Pe(rt);
              } else if ((xe = f(Ee) * z) + lt > pt)
                throw Pe(rt);
              Be = xe / z;
            } else
              Be = g(K), Se = new We(xe = Be * z);
            for (ce(ue, { buffer: Se, byteOffset: lt, byteLength: xe, length: Be, view: new Ve(Se) }); ut < Be; )
              X(ue, ut++);
          }), v && v(pe, Xe), fe = pe.prototype = C(nt)), fe.constructor !== pe && h(fe, "constructor", pe), _e(fe).TypedArrayConstructor = pe, He && h(fe, He, re);
          var B = pe != Ie;
          S[re] = pe, r({ global: !0, constructor: !0, forced: B, sham: !se }, S), Me in pe || h(pe, Me, z), Me in fe || h(fe, Me, z), j(re);
        }) : p.exports = function() {
        };
      }, 3832: function(p, _, e) {
        var r = e(7854), t = e(7293), a = e(7072), i = e(260).NATIVE_ARRAY_BUFFER_VIEWS, s = r.ArrayBuffer, o = r.Int8Array;
        p.exports = !i || !t(function() {
          o(1);
        }) || !t(function() {
          new o(-1);
        }) || !a(function(n) {
          new o(), new o(null), new o(1.5), new o(n);
        }, !0) || t(function() {
          return new o(new s(2), 1, void 0).length !== 1;
        });
      }, 3074: function(p, _, e) {
        var r = e(7745), t = e(6304);
        p.exports = function(a, i) {
          return r(t(a), i);
        };
      }, 7321: function(p, _, e) {
        var r = e(9974), t = e(6916), a = e(9483), i = e(7908), s = e(6244), o = e(4121), n = e(1246), u = e(7659), c = e(4067), h = e(260).aTypedArrayConstructor, m = e(4599);
        p.exports = function(f) {
          var g, d, l, E, T, I, O, C, N = a(this), v = i(f), y = arguments.length, A = y > 1 ? arguments[1] : void 0, x = A !== void 0, j = n(v);
          if (j && !u(j))
            for (C = (O = o(v, j)).next, v = []; !(I = t(C, O)).done; )
              v.push(I.value);
          for (x && y > 2 && (A = r(A, arguments[2])), d = s(v), l = new (h(N))(d), E = c(l), g = 0; d > g; g++)
            T = x ? A(v[g], g) : v[g], l[g] = E ? m(T) : +T;
          return l;
        };
      }, 6304: function(p, _, e) {
        var r = e(260), t = e(6707), a = r.aTypedArrayConstructor, i = r.getTypedArrayConstructor;
        p.exports = function(s) {
          return a(t(s, i(s)));
        };
      }, 9711: function(p, _, e) {
        var r = e(1702), t = 0, a = Math.random(), i = r(1 .toString);
        p.exports = function(s) {
          return "Symbol(" + (s === void 0 ? "" : s) + ")_" + i(++t + a, 36);
        };
      }, 5143: function(p, _, e) {
        var r = e(7293), t = e(5112), a = e(9781), i = e(1913), s = t("iterator");
        p.exports = !r(function() {
          var o = new URL("b?a=1&b=2&c=3", "http://a"), n = o.searchParams, u = "";
          return o.pathname = "c%20d", n.forEach(function(c, h) {
            n.delete("b"), u += h + c;
          }), i && !o.toJSON || !n.size && (i || !a) || !n.sort || o.href !== "http://a/c%20d?a=1&c=3" || n.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !n[s] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || u !== "a1c3" || new URL("http://x", void 0).host !== "x";
        });
      }, 3307: function(p, _, e) {
        var r = e(6293);
        p.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }, 3353: function(p, _, e) {
        var r = e(9781), t = e(7293);
        p.exports = r && t(function() {
          return Object.defineProperty(function() {
          }, "prototype", { value: 42, writable: !1 }).prototype != 42;
        });
      }, 8053: function(p) {
        var _ = TypeError;
        p.exports = function(e, r) {
          if (e < r)
            throw _("Not enough arguments");
          return e;
        };
      }, 4811: function(p, _, e) {
        var r = e(7854), t = e(614), a = r.WeakMap;
        p.exports = t(a) && /native code/.test(String(a));
      }, 6800: function(p, _, e) {
        var r = e(857), t = e(2597), a = e(6061), i = e(3070).f;
        p.exports = function(s) {
          var o = r.Symbol || (r.Symbol = {});
          t(o, s) || i(o, s, { value: a.f(s) });
        };
      }, 6061: function(p, _, e) {
        var r = e(5112);
        _.f = r;
      }, 5112: function(p, _, e) {
        var r = e(7854), t = e(2309), a = e(2597), i = e(9711), s = e(6293), o = e(3307), n = r.Symbol, u = t("wks"), c = o ? n.for || n : n && n.withoutSetter || i;
        p.exports = function(h) {
          return a(u, h) || (u[h] = s && a(n, h) ? n[h] : c("Symbol." + h)), u[h];
        };
      }, 1361: function(p) {
        p.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
      }, 8264: function(p, _, e) {
        var r = e(2109), t = e(7854), a = e(3331), i = e(6340), s = "ArrayBuffer", o = a[s];
        r({ global: !0, constructor: !0, forced: t[s] !== o }, { ArrayBuffer: o }), i(s);
      }, 9575: function(p, _, e) {
        var r = e(2109), t = e(1470), a = e(7293), i = e(3331), s = e(9670), o = e(1400), n = e(7466), u = e(6707), c = i.ArrayBuffer, h = i.DataView, m = h.prototype, f = t(c.prototype.slice), g = t(m.getUint8), d = t(m.setUint8);
        r({ target: "ArrayBuffer", proto: !0, unsafe: !0, forced: a(function() {
          return !new c(2).slice(1, void 0).byteLength;
        }) }, { slice: function(l, E) {
          if (f && E === void 0)
            return f(s(this), l);
          for (var T = s(this).byteLength, I = o(l, T), O = o(E === void 0 ? T : E, T), C = new (u(this, c))(n(O - I)), N = new h(this), v = new h(C), y = 0; I < O; )
            d(v, y++, g(N, I++));
          return C;
        } });
      }, 2222: function(p, _, e) {
        var r = e(2109), t = e(7293), a = e(3157), i = e(111), s = e(7908), o = e(6244), n = e(7207), u = e(6135), c = e(5417), h = e(1194), m = e(5112), f = e(7392), g = m("isConcatSpreadable"), d = f >= 51 || !t(function() {
          var E = [];
          return E[g] = !1, E.concat()[0] !== E;
        }), l = function(E) {
          if (!i(E))
            return !1;
          var T = E[g];
          return T !== void 0 ? !!T : a(E);
        };
        r({ target: "Array", proto: !0, arity: 1, forced: !d || !h("concat") }, { concat: function(E) {
          var T, I, O, C, N, v = s(this), y = c(v, 0), A = 0;
          for (T = -1, O = arguments.length; T < O; T++)
            if (l(N = T === -1 ? v : arguments[T]))
              for (C = o(N), n(A + C), I = 0; I < C; I++, A++)
                I in N && u(y, A, N[I]);
            else
              n(A + 1), u(y, A++, N);
          return y.length = A, y;
        } });
      }, 7327: function(p, _, e) {
        var r = e(2109), t = e(2092).filter;
        r({ target: "Array", proto: !0, forced: !e(1194)("filter") }, { filter: function(a) {
          return t(this, a, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 9554: function(p, _, e) {
        var r = e(2109), t = e(8533);
        r({ target: "Array", proto: !0, forced: [].forEach != t }, { forEach: t });
      }, 1038: function(p, _, e) {
        var r = e(2109), t = e(8457);
        r({ target: "Array", stat: !0, forced: !e(7072)(function(a) {
          Array.from(a);
        }) }, { from: t });
      }, 6699: function(p, _, e) {
        var r = e(2109), t = e(1318).includes, a = e(7293), i = e(1223);
        r({ target: "Array", proto: !0, forced: a(function() {
          return !Array(1).includes();
        }) }, { includes: function(s) {
          return t(this, s, arguments.length > 1 ? arguments[1] : void 0);
        } }), i("includes");
      }, 2772: function(p, _, e) {
        var r = e(2109), t = e(1470), a = e(1318).indexOf, i = e(9341), s = t([].indexOf), o = !!s && 1 / s([1], 1, -0) < 0;
        r({ target: "Array", proto: !0, forced: o || !i("indexOf") }, { indexOf: function(n) {
          var u = arguments.length > 1 ? arguments[1] : void 0;
          return o ? s(this, n, u) || 0 : a(this, n, u);
        } });
      }, 9753: function(p, _, e) {
        e(2109)({ target: "Array", stat: !0 }, { isArray: e(3157) });
      }, 6992: function(p, _, e) {
        var r = e(5656), t = e(1223), a = e(7497), i = e(9909), s = e(3070).f, o = e(1656), n = e(6178), u = e(1913), c = e(9781), h = "Array Iterator", m = i.set, f = i.getterFor(h);
        p.exports = o(Array, "Array", function(d, l) {
          m(this, { type: h, target: r(d), index: 0, kind: l });
        }, function() {
          var d = f(this), l = d.target, E = d.kind, T = d.index++;
          return !l || T >= l.length ? (d.target = void 0, n(void 0, !0)) : n(E == "keys" ? T : E == "values" ? l[T] : [T, l[T]], !1);
        }, "values");
        var g = a.Arguments = a.Array;
        if (t("keys"), t("values"), t("entries"), !u && c && g.name !== "values")
          try {
            s(g, "name", { value: "values" });
          } catch {
          }
      }, 9600: function(p, _, e) {
        var r = e(2109), t = e(1702), a = e(8361), i = e(5656), s = e(9341), o = t([].join);
        r({ target: "Array", proto: !0, forced: a != Object || !s("join", ",") }, { join: function(n) {
          return o(i(this), n === void 0 ? "," : n);
        } });
      }, 4986: function(p, _, e) {
        var r = e(2109), t = e(6583);
        r({ target: "Array", proto: !0, forced: t !== [].lastIndexOf }, { lastIndexOf: t });
      }, 1249: function(p, _, e) {
        var r = e(2109), t = e(2092).map;
        r({ target: "Array", proto: !0, forced: !e(1194)("map") }, { map: function(a) {
          return t(this, a, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 5069: function(p, _, e) {
        var r = e(2109), t = e(1702), a = e(3157), i = t([].reverse), s = [1, 2];
        r({ target: "Array", proto: !0, forced: String(s) === String(s.reverse()) }, { reverse: function() {
          return a(this) && (this.length = this.length), i(this);
        } });
      }, 7042: function(p, _, e) {
        var r = e(2109), t = e(3157), a = e(4411), i = e(111), s = e(1400), o = e(6244), n = e(5656), u = e(6135), c = e(5112), h = e(1194), m = e(206), f = h("slice"), g = c("species"), d = Array, l = Math.max;
        r({ target: "Array", proto: !0, forced: !f }, { slice: function(E, T) {
          var I, O, C, N = n(this), v = o(N), y = s(E, v), A = s(T === void 0 ? v : T, v);
          if (t(N) && (I = N.constructor, (a(I) && (I === d || t(I.prototype)) || i(I) && (I = I[g]) === null) && (I = void 0), I === d || I === void 0))
            return m(N, y, A);
          for (O = new (I === void 0 ? d : I)(l(A - y, 0)), C = 0; y < A; y++, C++)
            y in N && u(O, C, N[y]);
          return O.length = C, O;
        } });
      }, 5212: function(p, _, e) {
        var r = e(2109), t = e(2092).some;
        r({ target: "Array", proto: !0, forced: !e(9341)("some") }, { some: function(a) {
          return t(this, a, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 561: function(p, _, e) {
        var r = e(2109), t = e(7908), a = e(1400), i = e(9303), s = e(6244), o = e(3658), n = e(7207), u = e(5417), c = e(6135), h = e(5117), m = e(1194)("splice"), f = Math.max, g = Math.min;
        r({ target: "Array", proto: !0, forced: !m }, { splice: function(d, l) {
          var E, T, I, O, C, N, v = t(this), y = s(v), A = a(d, y), x = arguments.length;
          for (x === 0 ? E = T = 0 : x === 1 ? (E = 0, T = y - A) : (E = x - 2, T = g(f(i(l), 0), y - A)), n(y + E - T), I = u(v, T), O = 0; O < T; O++)
            (C = A + O) in v && c(I, O, v[C]);
          if (I.length = T, E < T) {
            for (O = A; O < y - T; O++)
              N = O + E, (C = O + T) in v ? v[N] = v[C] : h(v, N);
            for (O = y; O > y - T + E; O--)
              h(v, O - 1);
          } else if (E > T)
            for (O = y - T; O > A; O--)
              N = O + E - 1, (C = O + T - 1) in v ? v[N] = v[C] : h(v, N);
          for (O = 0; O < E; O++)
            v[O + A] = arguments[O + 2];
          return o(v, y - T + E), I;
        } });
      }, 3843: function(p, _, e) {
        var r = e(2109), t = e(1702), a = Date, i = t(a.prototype.getTime);
        r({ target: "Date", stat: !0 }, { now: function() {
          return i(new a());
        } });
      }, 3710: function(p, _, e) {
        var r = e(1702), t = e(8052), a = Date.prototype, i = "Invalid Date", s = "toString", o = r(a[s]), n = r(a.getTime);
        String(/* @__PURE__ */ new Date(NaN)) != i && t(a, s, function() {
          var u = n(this);
          return u == u ? o(this) : i;
        });
      }, 4812: function(p, _, e) {
        var r = e(2109), t = e(7065);
        r({ target: "Function", proto: !0, forced: Function.bind !== t }, { bind: t });
      }, 8309: function(p, _, e) {
        var r = e(9781), t = e(6530).EXISTS, a = e(1702), i = e(7045), s = Function.prototype, o = a(s.toString), n = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, u = a(n.exec);
        r && !t && i(s, "name", { configurable: !0, get: function() {
          try {
            return u(n, o(this))[1];
          } catch {
            return "";
          }
        } });
      }, 8862: function(p, _, e) {
        var r = e(2109), t = e(5005), a = e(2104), i = e(6916), s = e(1702), o = e(7293), n = e(614), u = e(2190), c = e(206), h = e(8044), m = e(6293), f = String, g = t("JSON", "stringify"), d = s(/./.exec), l = s("".charAt), E = s("".charCodeAt), T = s("".replace), I = s(1 .toString), O = /[\uD800-\uDFFF]/g, C = /^[\uD800-\uDBFF]$/, N = /^[\uDC00-\uDFFF]$/, v = !m || o(function() {
          var j = t("Symbol")();
          return g([j]) != "[null]" || g({ a: j }) != "{}" || g(Object(j)) != "{}";
        }), y = o(function() {
          return g("\uDF06\uD834") !== '"\\udf06\\ud834"' || g("\uDEAD") !== '"\\udead"';
        }), A = function(j, P) {
          var W = c(arguments), Z = h(P);
          if (n(Z) || j !== void 0 && !u(j))
            return W[1] = function(ee, G) {
              if (n(Z) && (G = i(Z, this, f(ee), G)), !u(G))
                return G;
            }, a(g, null, W);
        }, x = function(j, P, W) {
          var Z = l(W, P - 1), ee = l(W, P + 1);
          return d(C, j) && !d(N, ee) || d(N, j) && !d(C, Z) ? "\\u" + I(E(j, 0), 16) : j;
        };
        g && r({ target: "JSON", stat: !0, arity: 3, forced: v || y }, { stringify: function(j, P, W) {
          var Z = c(arguments), ee = a(v ? A : g, null, Z);
          return y && typeof ee == "string" ? T(ee, O, x) : ee;
        } });
      }, 9098: function(p, _, e) {
        e(7710)("Map", function(r) {
          return function() {
            return r(this, arguments.length ? arguments[0] : void 0);
          };
        }, e(5631));
      }, 1532: function(p, _, e) {
        e(9098);
      }, 9653: function(p, _, e) {
        var r = e(2109), t = e(1913), a = e(9781), i = e(7854), s = e(857), o = e(1702), n = e(4705), u = e(2597), c = e(9587), h = e(7976), m = e(2190), f = e(7593), g = e(7293), d = e(8006).f, l = e(1236).f, E = e(3070).f, T = e(863), I = e(3111).trim, O = "Number", C = i[O], N = s[O], v = C.prototype, y = i.TypeError, A = o("".slice), x = o("".charCodeAt), j = n(O, !C(" 0o1") || !C("0b1") || C("+0x1")), P = function(Z) {
          var ee, G = arguments.length < 1 ? 0 : C(function(le) {
            var ce = f(le, "number");
            return typeof ce == "bigint" ? ce : function(_e) {
              var Ue, ve, ye, Pe, We, ke, Ve, se, He = f(_e, "number");
              if (m(He))
                throw y("Cannot convert a Symbol value to a number");
              if (typeof He == "string" && He.length > 2) {
                if (He = I(He), (Ue = x(He, 0)) === 43 || Ue === 45) {
                  if ((ve = x(He, 2)) === 88 || ve === 120)
                    return NaN;
                } else if (Ue === 48) {
                  switch (x(He, 1)) {
                    case 66:
                    case 98:
                      ye = 2, Pe = 49;
                      break;
                    case 79:
                    case 111:
                      ye = 8, Pe = 55;
                      break;
                    default:
                      return +He;
                  }
                  for (ke = (We = A(He, 2)).length, Ve = 0; Ve < ke; Ve++)
                    if ((se = x(We, Ve)) < 48 || se > Pe)
                      return NaN;
                  return parseInt(We, ye);
                }
              }
              return +He;
            }(ce);
          }(Z));
          return h(v, ee = this) && g(function() {
            T(ee);
          }) ? c(Object(G), this, P) : G;
        };
        P.prototype = v, j && !t && (v.constructor = P), r({ global: !0, constructor: !0, wrap: !0, forced: j }, { Number: P });
        var W = function(Z, ee) {
          for (var G, le = a ? d(ee) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), ce = 0; le.length > ce; ce++)
            u(ee, G = le[ce]) && !u(Z, G) && E(Z, G, l(ee, G));
        };
        t && N && W(s[O], N), (j || t) && W(s[O], C);
      }, 3161: function(p, _, e) {
        e(2109)({ target: "Number", stat: !0 }, { isInteger: e(5988) });
      }, 9601: function(p, _, e) {
        var r = e(2109), t = e(1574);
        r({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== t }, { assign: t });
      }, 9070: function(p, _, e) {
        var r = e(2109), t = e(9781), a = e(3070).f;
        r({ target: "Object", stat: !0, forced: Object.defineProperty !== a, sham: !t }, { defineProperty: a });
      }, 9720: function(p, _, e) {
        var r = e(2109), t = e(4699).entries;
        r({ target: "Object", stat: !0 }, { entries: function(a) {
          return t(a);
        } });
      }, 9660: function(p, _, e) {
        var r = e(2109), t = e(6293), a = e(7293), i = e(5181), s = e(7908);
        r({ target: "Object", stat: !0, forced: !t || a(function() {
          i.f(1);
        }) }, { getOwnPropertySymbols: function(o) {
          var n = i.f;
          return n ? n(s(o)) : [];
        } });
      }, 7941: function(p, _, e) {
        var r = e(2109), t = e(7908), a = e(1956);
        r({ target: "Object", stat: !0, forced: e(7293)(function() {
          a(1);
        }) }, { keys: function(i) {
          return a(t(i));
        } });
      }, 1539: function(p, _, e) {
        var r = e(1694), t = e(8052), a = e(288);
        r || t(Object.prototype, "toString", a, { unsafe: !0 });
      }, 821: function(p, _, e) {
        var r = e(2109), t = e(6916), a = e(9662), i = e(8523), s = e(2534), o = e(408);
        r({ target: "Promise", stat: !0, forced: e(612) }, { all: function(n) {
          var u = this, c = i.f(u), h = c.resolve, m = c.reject, f = s(function() {
            var g = a(u.resolve), d = [], l = 0, E = 1;
            o(n, function(T) {
              var I = l++, O = !1;
              E++, t(g, u, T).then(function(C) {
                O || (O = !0, d[I] = C, --E || h(d));
              }, m);
            }), --E || h(d);
          });
          return f.error && m(f.value), c.promise;
        } });
      }, 4164: function(p, _, e) {
        var r = e(2109), t = e(1913), a = e(3702).CONSTRUCTOR, i = e(2492), s = e(5005), o = e(614), n = e(8052), u = i && i.prototype;
        if (r({ target: "Promise", proto: !0, forced: a, real: !0 }, { catch: function(h) {
          return this.then(void 0, h);
        } }), !t && o(i)) {
          var c = s("Promise").prototype.catch;
          u.catch !== c && n(u, "catch", c, { unsafe: !0 });
        }
      }, 3401: function(p, _, e) {
        var r, t, a, i = e(2109), s = e(1913), o = e(5268), n = e(7854), u = e(6916), c = e(8052), h = e(7674), m = e(8003), f = e(6340), g = e(9662), d = e(614), l = e(111), E = e(5787), T = e(6707), I = e(261).set, O = e(5948), C = e(842), N = e(2534), v = e(8572), y = e(9909), A = e(2492), x = e(3702), j = e(8523), P = "Promise", W = x.CONSTRUCTOR, Z = x.REJECTION_EVENT, ee = x.SUBCLASSING, G = y.getterFor(P), le = y.set, ce = A && A.prototype, _e = A, Ue = ce, ve = n.TypeError, ye = n.document, Pe = n.process, We = j.f, ke = We, Ve = !!(ye && ye.createEvent && n.dispatchEvent), se = "unhandledrejection", He = function(Ne) {
          var ze;
          return !(!l(Ne) || !d(ze = Ne.then)) && ze;
        }, Xe = function(Ne, ze) {
          var Ye, qe, Oe, w = ze.value, z = ze.state == 1, re = z ? Ne.ok : Ne.fail, q = Ne.resolve, ie = Ne.reject, Ie = Ne.domain;
          try {
            re ? (z || (ze.rejection === 2 && rt(ze), ze.rejection = 1), re === !0 ? Ye = w : (Ie && Ie.enter(), Ye = re(w), Ie && (Ie.exit(), Oe = !0)), Ye === Ne.promise ? ie(ve("Promise-chain cycle")) : (qe = He(Ye)) ? u(qe, Ye, q, ie) : q(Ye)) : ie(w);
          } catch (pe) {
            Ie && !Oe && Ie.exit(), ie(pe);
          }
        }, nt = function(Ne, ze) {
          Ne.notified || (Ne.notified = !0, O(function() {
            for (var Ye, qe = Ne.reactions; Ye = qe.get(); )
              Xe(Ye, Ne);
            Ne.notified = !1, ze && !Ne.rejection && $e(Ne);
          }));
        }, te = function(Ne, ze, Ye) {
          var qe, Oe;
          Ve ? ((qe = ye.createEvent("Event")).promise = ze, qe.reason = Ye, qe.initEvent(Ne, !1, !0), n.dispatchEvent(qe)) : qe = { promise: ze, reason: Ye }, !Z && (Oe = n["on" + Ne]) ? Oe(qe) : Ne === se && C("Unhandled promise rejection", Ye);
        }, $e = function(Ne) {
          u(I, n, function() {
            var ze, Ye = Ne.facade, qe = Ne.value;
            if (Me(Ne) && (ze = N(function() {
              o ? Pe.emit("unhandledRejection", qe, Ye) : te(se, Ye, qe);
            }), Ne.rejection = o || Me(Ne) ? 2 : 1, ze.error))
              throw ze.value;
          });
        }, Me = function(Ne) {
          return Ne.rejection !== 1 && !Ne.parent;
        }, rt = function(Ne) {
          u(I, n, function() {
            var ze = Ne.facade;
            o ? Pe.emit("rejectionHandled", ze) : te("rejectionhandled", ze, Ne.value);
          });
        }, ot = function(Ne, ze, Ye) {
          return function(qe) {
            Ne(ze, qe, Ye);
          };
        }, it = function(Ne, ze, Ye) {
          Ne.done || (Ne.done = !0, Ye && (Ne = Ye), Ne.value = ze, Ne.state = 2, nt(Ne, !0));
        }, ct = function(Ne, ze, Ye) {
          if (!Ne.done) {
            Ne.done = !0, Ye && (Ne = Ye);
            try {
              if (Ne.facade === ze)
                throw ve("Promise can't be resolved itself");
              var qe = He(ze);
              qe ? O(function() {
                var Oe = { done: !1 };
                try {
                  u(qe, ze, ot(ct, Oe, Ne), ot(it, Oe, Ne));
                } catch (w) {
                  it(Oe, w, Ne);
                }
              }) : (Ne.value = ze, Ne.state = 1, nt(Ne, !1));
            } catch (Oe) {
              it({ done: !1 }, Oe, Ne);
            }
          }
        };
        if (W && (Ue = (_e = function(Ne) {
          E(this, Ue), g(Ne), u(r, this);
          var ze = G(this);
          try {
            Ne(ot(ct, ze), ot(it, ze));
          } catch (Ye) {
            it(ze, Ye);
          }
        }).prototype, (r = function(Ne) {
          le(this, { type: P, done: !1, notified: !1, parent: !1, reactions: new v(), rejection: !1, state: 0, value: void 0 });
        }).prototype = c(Ue, "then", function(Ne, ze) {
          var Ye = G(this), qe = We(T(this, _e));
          return Ye.parent = !0, qe.ok = !d(Ne) || Ne, qe.fail = d(ze) && ze, qe.domain = o ? Pe.domain : void 0, Ye.state == 0 ? Ye.reactions.add(qe) : O(function() {
            Xe(qe, Ye);
          }), qe.promise;
        }), t = function() {
          var Ne = new r(), ze = G(Ne);
          this.promise = Ne, this.resolve = ot(ct, ze), this.reject = ot(it, ze);
        }, j.f = We = function(Ne) {
          return Ne === _e || Ne === void 0 ? new t(Ne) : ke(Ne);
        }, !s && d(A) && ce !== Object.prototype)) {
          a = ce.then, ee || c(ce, "then", function(Ne, ze) {
            var Ye = this;
            return new _e(function(qe, Oe) {
              u(a, Ye, qe, Oe);
            }).then(Ne, ze);
          }, { unsafe: !0 });
          try {
            delete ce.constructor;
          } catch {
          }
          h && h(ce, Ue);
        }
        i({ global: !0, constructor: !0, wrap: !0, forced: W }, { Promise: _e }), m(_e, P, !1, !0), f(P);
      }, 8674: function(p, _, e) {
        e(3401), e(821), e(4164), e(6027), e(683), e(6294);
      }, 6027: function(p, _, e) {
        var r = e(2109), t = e(6916), a = e(9662), i = e(8523), s = e(2534), o = e(408);
        r({ target: "Promise", stat: !0, forced: e(612) }, { race: function(n) {
          var u = this, c = i.f(u), h = c.reject, m = s(function() {
            var f = a(u.resolve);
            o(n, function(g) {
              t(f, u, g).then(c.resolve, h);
            });
          });
          return m.error && h(m.value), c.promise;
        } });
      }, 683: function(p, _, e) {
        var r = e(2109), t = e(6916), a = e(8523);
        r({ target: "Promise", stat: !0, forced: e(3702).CONSTRUCTOR }, { reject: function(i) {
          var s = a.f(this);
          return t(s.reject, void 0, i), s.promise;
        } });
      }, 6294: function(p, _, e) {
        var r = e(2109), t = e(5005), a = e(1913), i = e(2492), s = e(3702).CONSTRUCTOR, o = e(9478), n = t("Promise"), u = a && !s;
        r({ target: "Promise", stat: !0, forced: a || s }, { resolve: function(c) {
          return o(u && this === n ? i : this, c);
        } });
      }, 4916: function(p, _, e) {
        var r = e(2109), t = e(2261);
        r({ target: "RegExp", proto: !0, forced: /./.exec !== t }, { exec: t });
      }, 9714: function(p, _, e) {
        var r = e(6530).PROPER, t = e(8052), a = e(9670), i = e(1340), s = e(7293), o = e(4706), n = "toString", u = RegExp.prototype[n], c = s(function() {
          return u.call({ source: "a", flags: "b" }) != "/a/b";
        }), h = r && u.name != n;
        (c || h) && t(RegExp.prototype, n, function() {
          var m = a(this);
          return "/" + i(m.source) + "/" + i(o(m));
        }, { unsafe: !0 });
      }, 2023: function(p, _, e) {
        var r = e(2109), t = e(1702), a = e(3929), i = e(4488), s = e(1340), o = e(4964), n = t("".indexOf);
        r({ target: "String", proto: !0, forced: !o("includes") }, { includes: function(u) {
          return !!~n(s(i(this)), s(a(u)), arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 8783: function(p, _, e) {
        var r = e(8710).charAt, t = e(1340), a = e(9909), i = e(1656), s = e(6178), o = "String Iterator", n = a.set, u = a.getterFor(o);
        i(String, "String", function(c) {
          n(this, { type: o, string: t(c), index: 0 });
        }, function() {
          var c, h = u(this), m = h.string, f = h.index;
          return f >= m.length ? s(void 0, !0) : (c = r(m, f), h.index += c.length, s(c, !1));
        });
      }, 4032: function(p, _, e) {
        var r = e(2109), t = e(7854), a = e(6916), i = e(1702), s = e(1913), o = e(9781), n = e(6293), u = e(7293), c = e(2597), h = e(7976), m = e(9670), f = e(5656), g = e(4948), d = e(1340), l = e(9114), E = e(30), T = e(1956), I = e(8006), O = e(1156), C = e(5181), N = e(1236), v = e(3070), y = e(6048), A = e(5296), x = e(8052), j = e(7045), P = e(2309), W = e(6200), Z = e(3501), ee = e(9711), G = e(5112), le = e(6061), ce = e(6800), _e = e(6532), Ue = e(8003), ve = e(9909), ye = e(2092).forEach, Pe = W("hidden"), We = "Symbol", ke = "prototype", Ve = ve.set, se = ve.getterFor(We), He = Object[ke], Xe = t.Symbol, nt = Xe && Xe[ke], te = t.TypeError, $e = t.QObject, Me = N.f, rt = v.f, ot = O.f, it = A.f, ct = i([].push), Ne = P("symbols"), ze = P("op-symbols"), Ye = P("wks"), qe = !$e || !$e[ke] || !$e[ke].findChild, Oe = o && u(function() {
          return E(rt({}, "a", { get: function() {
            return rt(this, "a", { value: 7 }).a;
          } })).a != 7;
        }) ? function(fe, S, X) {
          var B = Me(He, S);
          B && delete He[S], rt(fe, S, X), B && fe !== He && rt(He, S, B);
        } : rt, w = function(fe, S) {
          var X = Ne[fe] = E(nt);
          return Ve(X, { type: We, tag: fe, description: S }), o || (X.description = S), X;
        }, z = function(fe, S, X) {
          fe === He && z(ze, S, X), m(fe);
          var B = g(S);
          return m(X), c(Ne, B) ? (X.enumerable ? (c(fe, Pe) && fe[Pe][B] && (fe[Pe][B] = !1), X = E(X, { enumerable: l(0, !1) })) : (c(fe, Pe) || rt(fe, Pe, l(1, {})), fe[Pe][B] = !0), Oe(fe, B, X)) : rt(fe, B, X);
        }, re = function(fe, S) {
          m(fe);
          var X = f(S), B = T(X).concat(pe(X));
          return ye(B, function(ue) {
            o && !a(q, X, ue) || z(fe, ue, X[ue]);
          }), fe;
        }, q = function(fe) {
          var S = g(fe), X = a(it, this, S);
          return !(this === He && c(Ne, S) && !c(ze, S)) && (!(X || !c(this, S) || !c(Ne, S) || c(this, Pe) && this[Pe][S]) || X);
        }, ie = function(fe, S) {
          var X = f(fe), B = g(S);
          if (X !== He || !c(Ne, B) || c(ze, B)) {
            var ue = Me(X, B);
            return !ue || !c(Ne, B) || c(X, Pe) && X[Pe][B] || (ue.enumerable = !0), ue;
          }
        }, Ie = function(fe) {
          var S = ot(f(fe)), X = [];
          return ye(S, function(B) {
            c(Ne, B) || c(Z, B) || ct(X, B);
          }), X;
        }, pe = function(fe) {
          var S = fe === He, X = ot(S ? ze : f(fe)), B = [];
          return ye(X, function(ue) {
            !c(Ne, ue) || S && !c(He, ue) || ct(B, Ne[ue]);
          }), B;
        };
        n || (Xe = function() {
          if (h(nt, this))
            throw te("Symbol is not a constructor");
          var fe = arguments.length && arguments[0] !== void 0 ? d(arguments[0]) : void 0, S = ee(fe), X = function(B) {
            this === He && a(X, ze, B), c(this, Pe) && c(this[Pe], S) && (this[Pe][S] = !1), Oe(this, S, l(1, B));
          };
          return o && qe && Oe(He, S, { configurable: !0, set: X }), w(S, fe);
        }, x(nt = Xe[ke], "toString", function() {
          return se(this).tag;
        }), x(Xe, "withoutSetter", function(fe) {
          return w(ee(fe), fe);
        }), A.f = q, v.f = z, y.f = re, N.f = ie, I.f = O.f = Ie, C.f = pe, le.f = function(fe) {
          return w(G(fe), fe);
        }, o && (j(nt, "description", { configurable: !0, get: function() {
          return se(this).description;
        } }), s || x(He, "propertyIsEnumerable", q, { unsafe: !0 }))), r({ global: !0, constructor: !0, wrap: !0, forced: !n, sham: !n }, { Symbol: Xe }), ye(T(Ye), function(fe) {
          ce(fe);
        }), r({ target: We, stat: !0, forced: !n }, { useSetter: function() {
          qe = !0;
        }, useSimple: function() {
          qe = !1;
        } }), r({ target: "Object", stat: !0, forced: !n, sham: !o }, { create: function(fe, S) {
          return S === void 0 ? E(fe) : re(E(fe), S);
        }, defineProperty: z, defineProperties: re, getOwnPropertyDescriptor: ie }), r({ target: "Object", stat: !0, forced: !n }, { getOwnPropertyNames: Ie }), _e(), Ue(Xe, We), Z[Pe] = !0;
      }, 1817: function(p, _, e) {
        var r = e(2109), t = e(9781), a = e(7854), i = e(1702), s = e(2597), o = e(614), n = e(7976), u = e(1340), c = e(7045), h = e(9920), m = a.Symbol, f = m && m.prototype;
        if (t && o(m) && (!("description" in f) || m().description !== void 0)) {
          var g = {}, d = function() {
            var N = arguments.length < 1 || arguments[0] === void 0 ? void 0 : u(arguments[0]), v = n(f, this) ? new m(N) : N === void 0 ? m() : m(N);
            return N === "" && (g[v] = !0), v;
          };
          h(d, m), d.prototype = f, f.constructor = d;
          var l = String(m("test")) == "Symbol(test)", E = i(f.valueOf), T = i(f.toString), I = /^Symbol\((.*)\)[^)]+$/, O = i("".replace), C = i("".slice);
          c(f, "description", { configurable: !0, get: function() {
            var N = E(this);
            if (s(g, N))
              return "";
            var v = T(N), y = l ? C(v, 7, -1) : O(v, I, "$1");
            return y === "" ? void 0 : y;
          } }), r({ global: !0, constructor: !0, forced: !0 }, { Symbol: d });
        }
      }, 763: function(p, _, e) {
        var r = e(2109), t = e(5005), a = e(2597), i = e(1340), s = e(2309), o = e(2015), n = s("string-to-symbol-registry"), u = s("symbol-to-string-registry");
        r({ target: "Symbol", stat: !0, forced: !o }, { for: function(c) {
          var h = i(c);
          if (a(n, h))
            return n[h];
          var m = t("Symbol")(h);
          return n[h] = m, u[m] = h, m;
        } });
      }, 2165: function(p, _, e) {
        e(6800)("iterator");
      }, 2526: function(p, _, e) {
        e(4032), e(763), e(6620), e(8862), e(9660);
      }, 6620: function(p, _, e) {
        var r = e(2109), t = e(2597), a = e(2190), i = e(6330), s = e(2309), o = e(2015), n = s("symbol-to-string-registry");
        r({ target: "Symbol", stat: !0, forced: !o }, { keyFor: function(u) {
          if (!a(u))
            throw TypeError(i(u) + " is not a symbol");
          if (t(n, u))
            return n[u];
        } });
      }, 2990: function(p, _, e) {
        var r = e(1702), t = e(260), a = r(e(1048)), i = t.aTypedArray;
        (0, t.exportTypedArrayMethod)("copyWithin", function(s, o) {
          return a(i(this), s, o, arguments.length > 2 ? arguments[2] : void 0);
        });
      }, 8927: function(p, _, e) {
        var r = e(260), t = e(2092).every, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("every", function(i) {
          return t(a(this), i, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 3105: function(p, _, e) {
        var r = e(260), t = e(1285), a = e(4599), i = e(648), s = e(6916), o = e(1702), n = e(7293), u = r.aTypedArray, c = r.exportTypedArrayMethod, h = o("".slice);
        c("fill", function(m) {
          var f = arguments.length;
          u(this);
          var g = h(i(this), 0, 3) === "Big" ? a(m) : +m;
          return s(t, this, g, f > 1 ? arguments[1] : void 0, f > 2 ? arguments[2] : void 0);
        }, n(function() {
          var m = 0;
          return new Int8Array(2).fill({ valueOf: function() {
            return m++;
          } }), m !== 1;
        }));
      }, 5035: function(p, _, e) {
        var r = e(260), t = e(2092).filter, a = e(3074), i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("filter", function(s) {
          var o = t(i(this), s, arguments.length > 1 ? arguments[1] : void 0);
          return a(this, o);
        });
      }, 7174: function(p, _, e) {
        var r = e(260), t = e(2092).findIndex, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("findIndex", function(i) {
          return t(a(this), i, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 4345: function(p, _, e) {
        var r = e(260), t = e(2092).find, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("find", function(i) {
          return t(a(this), i, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 2846: function(p, _, e) {
        var r = e(260), t = e(2092).forEach, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("forEach", function(i) {
          t(a(this), i, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 4731: function(p, _, e) {
        var r = e(260), t = e(1318).includes, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("includes", function(i) {
          return t(a(this), i, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 7209: function(p, _, e) {
        var r = e(260), t = e(1318).indexOf, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("indexOf", function(i) {
          return t(a(this), i, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 6319: function(p, _, e) {
        var r = e(7854), t = e(7293), a = e(1702), i = e(260), s = e(6992), o = e(5112)("iterator"), n = r.Uint8Array, u = a(s.values), c = a(s.keys), h = a(s.entries), m = i.aTypedArray, f = i.exportTypedArrayMethod, g = n && n.prototype, d = !t(function() {
          g[o].call([1]);
        }), l = !!g && g.values && g[o] === g.values && g.values.name === "values", E = function() {
          return u(m(this));
        };
        f("entries", function() {
          return h(m(this));
        }, d), f("keys", function() {
          return c(m(this));
        }, d), f("values", E, d || !l, { name: "values" }), f(o, E, d || !l, { name: "values" });
      }, 8867: function(p, _, e) {
        var r = e(260), t = e(1702), a = r.aTypedArray, i = r.exportTypedArrayMethod, s = t([].join);
        i("join", function(o) {
          return s(a(this), o);
        });
      }, 7789: function(p, _, e) {
        var r = e(260), t = e(2104), a = e(6583), i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("lastIndexOf", function(s) {
          var o = arguments.length;
          return t(a, i(this), o > 1 ? [s, arguments[1]] : [s]);
        });
      }, 3739: function(p, _, e) {
        var r = e(260), t = e(2092).map, a = e(6304), i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("map", function(s) {
          return t(i(this), s, arguments.length > 1 ? arguments[1] : void 0, function(o, n) {
            return new (a(o))(n);
          });
        });
      }, 4483: function(p, _, e) {
        var r = e(260), t = e(3671).right, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("reduceRight", function(i) {
          var s = arguments.length;
          return t(a(this), i, s, s > 1 ? arguments[1] : void 0);
        });
      }, 9368: function(p, _, e) {
        var r = e(260), t = e(3671).left, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("reduce", function(i) {
          var s = arguments.length;
          return t(a(this), i, s, s > 1 ? arguments[1] : void 0);
        });
      }, 2056: function(p, _, e) {
        var r = e(260), t = r.aTypedArray, a = r.exportTypedArrayMethod, i = Math.floor;
        a("reverse", function() {
          for (var s, o = this, n = t(o).length, u = i(n / 2), c = 0; c < u; )
            s = o[c], o[c++] = o[--n], o[n] = s;
          return o;
        });
      }, 3462: function(p, _, e) {
        var r = e(7854), t = e(6916), a = e(260), i = e(6244), s = e(4590), o = e(7908), n = e(7293), u = r.RangeError, c = r.Int8Array, h = c && c.prototype, m = h && h.set, f = a.aTypedArray, g = a.exportTypedArrayMethod, d = !n(function() {
          var E = new Uint8ClampedArray(2);
          return t(m, E, { length: 1, 0: 3 }, 1), E[1] !== 3;
        }), l = d && a.NATIVE_ARRAY_BUFFER_VIEWS && n(function() {
          var E = new c(2);
          return E.set(1), E.set("2", 1), E[0] !== 0 || E[1] !== 2;
        });
        g("set", function(E) {
          f(this);
          var T = s(arguments.length > 1 ? arguments[1] : void 0, 1), I = o(E);
          if (d)
            return t(m, this, I, T);
          var O = this.length, C = i(I), N = 0;
          if (C + T > O)
            throw u("Wrong length");
          for (; N < C; )
            this[T + N] = I[N++];
        }, !d || l);
      }, 678: function(p, _, e) {
        var r = e(260), t = e(6304), a = e(7293), i = e(206), s = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("slice", function(o, n) {
          for (var u = i(s(this), o, n), c = t(this), h = 0, m = u.length, f = new c(m); m > h; )
            f[h] = u[h++];
          return f;
        }, a(function() {
          new Int8Array(1).slice();
        }));
      }, 7462: function(p, _, e) {
        var r = e(260), t = e(2092).some, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("some", function(i) {
          return t(a(this), i, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 3824: function(p, _, e) {
        var r = e(7854), t = e(1470), a = e(7293), i = e(9662), s = e(4362), o = e(260), n = e(8886), u = e(256), c = e(7392), h = e(8008), m = o.aTypedArray, f = o.exportTypedArrayMethod, g = r.Uint16Array, d = g && t(g.prototype.sort), l = !(!d || a(function() {
          d(new g(2), null);
        }) && a(function() {
          d(new g(2), {});
        })), E = !!d && !a(function() {
          if (c)
            return c < 74;
          if (n)
            return n < 67;
          if (u)
            return !0;
          if (h)
            return h < 602;
          var T, I, O = new g(516), C = Array(516);
          for (T = 0; T < 516; T++)
            I = T % 4, O[T] = 515 - T, C[T] = T - 2 * I + 3;
          for (d(O, function(N, v) {
            return (N / 4 | 0) - (v / 4 | 0);
          }), T = 0; T < 516; T++)
            if (O[T] !== C[T])
              return !0;
        });
        f("sort", function(T) {
          return T !== void 0 && i(T), E ? d(this, T) : s(m(this), function(I) {
            return function(O, C) {
              return I !== void 0 ? +I(O, C) || 0 : C != C ? -1 : O != O ? 1 : O === 0 && C === 0 ? 1 / O > 0 && 1 / C < 0 ? 1 : -1 : O > C;
            };
          }(T));
        }, !E || l);
      }, 5021: function(p, _, e) {
        var r = e(260), t = e(7466), a = e(1400), i = e(6304), s = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("subarray", function(o, n) {
          var u = s(this), c = u.length, h = a(o, c);
          return new (i(u))(u.buffer, u.byteOffset + h * u.BYTES_PER_ELEMENT, t((n === void 0 ? c : a(n, c)) - h));
        });
      }, 2974: function(p, _, e) {
        var r = e(7854), t = e(2104), a = e(260), i = e(7293), s = e(206), o = r.Int8Array, n = a.aTypedArray, u = a.exportTypedArrayMethod, c = [].toLocaleString, h = !!o && i(function() {
          c.call(new o(1));
        });
        u("toLocaleString", function() {
          return t(c, h ? s(n(this)) : n(this), s(arguments));
        }, i(function() {
          return [1, 2].toLocaleString() != new o([1, 2]).toLocaleString();
        }) || !i(function() {
          o.prototype.toLocaleString.call([1, 2]);
        }));
      }, 5016: function(p, _, e) {
        var r = e(260).exportTypedArrayMethod, t = e(7293), a = e(7854), i = e(1702), s = a.Uint8Array, o = s && s.prototype || {}, n = [].toString, u = i([].join);
        t(function() {
          n.call({});
        }) && (n = function() {
          return u(this);
        });
        var c = o.toString != n;
        r("toString", n, c);
      }, 2472: function(p, _, e) {
        e(9843)("Uint8", function(r) {
          return function(t, a, i) {
            return r(this, t, a, i);
          };
        });
      }, 4747: function(p, _, e) {
        var r = e(7854), t = e(8324), a = e(8509), i = e(8533), s = e(8880), o = function(u) {
          if (u && u.forEach !== i)
            try {
              s(u, "forEach", i);
            } catch {
              u.forEach = i;
            }
        };
        for (var n in t)
          t[n] && o(r[n] && r[n].prototype);
        o(a);
      }, 3948: function(p, _, e) {
        var r = e(7854), t = e(8324), a = e(8509), i = e(6992), s = e(8880), o = e(5112), n = o("iterator"), u = o("toStringTag"), c = i.values, h = function(f, g) {
          if (f) {
            if (f[n] !== c)
              try {
                s(f, n, c);
              } catch {
                f[n] = c;
              }
            if (f[u] || s(f, u, g), t[g]) {
              for (var d in i)
                if (f[d] !== i[d])
                  try {
                    s(f, d, i[d]);
                  } catch {
                    f[d] = i[d];
                  }
            }
          }
        };
        for (var m in t)
          h(r[m] && r[m].prototype, m);
        h(a, "DOMTokenList");
      }, 6815: function(p, _, e) {
        var r = e(2109), t = e(7854), a = e(7152)(t.setInterval, !0);
        r({ global: !0, bind: !0, forced: t.setInterval !== a }, { setInterval: a });
      }, 8417: function(p, _, e) {
        var r = e(2109), t = e(7854), a = e(7152)(t.setTimeout, !0);
        r({ global: !0, bind: !0, forced: t.setTimeout !== a }, { setTimeout: a });
      }, 2564: function(p, _, e) {
        e(6815), e(8417);
      }, 5556: function(p, _, e) {
        e(6992);
        var r = e(2109), t = e(7854), a = e(6916), i = e(1702), s = e(9781), o = e(5143), n = e(8052), u = e(7045), c = e(9190), h = e(8003), m = e(3061), f = e(9909), g = e(5787), d = e(614), l = e(2597), E = e(9974), T = e(648), I = e(9670), O = e(111), C = e(1340), N = e(30), v = e(9114), y = e(4121), A = e(1246), x = e(8053), j = e(5112), P = e(4362), W = j("iterator"), Z = "URLSearchParams", ee = Z + "Iterator", G = f.set, le = f.getterFor(Z), ce = f.getterFor(ee), _e = Object.getOwnPropertyDescriptor, Ue = function(K) {
          if (!s)
            return t[K];
          var de = _e(t, K);
          return de && de.value;
        }, ve = Ue("fetch"), ye = Ue("Request"), Pe = Ue("Headers"), We = ye && ye.prototype, ke = Pe && Pe.prototype, Ve = t.RegExp, se = t.TypeError, He = t.decodeURIComponent, Xe = t.encodeURIComponent, nt = i("".charAt), te = i([].join), $e = i([].push), Me = i("".replace), rt = i([].shift), ot = i([].splice), it = i("".split), ct = i("".slice), Ne = /\+/g, ze = Array(4), Ye = function(K) {
          return ze[K - 1] || (ze[K - 1] = Ve("((?:%[\\da-f]{2}){" + K + "})", "gi"));
        }, qe = function(K) {
          try {
            return He(K);
          } catch {
            return K;
          }
        }, Oe = function(K) {
          var de = Me(K, Ne, " "), Ee = 4;
          try {
            return He(de);
          } catch {
            for (; Ee; )
              de = Me(de, Ye(Ee--), qe);
            return de;
          }
        }, w = /[!'()~]|%20/g, z = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" }, re = function(K) {
          return z[K];
        }, q = function(K) {
          return Me(Xe(K), w, re);
        }, ie = m(function(K, de) {
          G(this, { type: ee, iterator: y(le(K).entries), kind: de });
        }, "Iterator", function() {
          var K = ce(this), de = K.kind, Ee = K.iterator.next(), Se = Ee.value;
          return Ee.done || (Ee.value = de === "keys" ? Se.key : de === "values" ? Se.value : [Se.key, Se.value]), Ee;
        }, !0), Ie = function(K) {
          this.entries = [], this.url = null, K !== void 0 && (O(K) ? this.parseObject(K) : this.parseQuery(typeof K == "string" ? nt(K, 0) === "?" ? ct(K, 1) : K : C(K)));
        };
        Ie.prototype = { type: Z, bindURL: function(K) {
          this.url = K, this.update();
        }, parseObject: function(K) {
          var de, Ee, Se, xe, Be, ut, lt, pt = A(K);
          if (pt)
            for (Ee = (de = y(K, pt)).next; !(Se = a(Ee, de)).done; ) {
              if (Be = (xe = y(I(Se.value))).next, (ut = a(Be, xe)).done || (lt = a(Be, xe)).done || !a(Be, xe).done)
                throw se("Expected sequence with length 2");
              $e(this.entries, { key: C(ut.value), value: C(lt.value) });
            }
          else
            for (var mt in K)
              l(K, mt) && $e(this.entries, { key: mt, value: C(K[mt]) });
        }, parseQuery: function(K) {
          if (K)
            for (var de, Ee, Se = it(K, "&"), xe = 0; xe < Se.length; )
              (de = Se[xe++]).length && (Ee = it(de, "="), $e(this.entries, { key: Oe(rt(Ee)), value: Oe(te(Ee, "=")) }));
        }, serialize: function() {
          for (var K, de = this.entries, Ee = [], Se = 0; Se < de.length; )
            K = de[Se++], $e(Ee, q(K.key) + "=" + q(K.value));
          return te(Ee, "&");
        }, update: function() {
          this.entries.length = 0, this.parseQuery(this.url.query);
        }, updateURL: function() {
          this.url && this.url.update();
        } };
        var pe = function() {
          g(this, fe);
          var K = G(this, new Ie(arguments.length > 0 ? arguments[0] : void 0));
          s || (this.length = K.entries.length);
        }, fe = pe.prototype;
        if (c(fe, { append: function(K, de) {
          x(arguments.length, 2);
          var Ee = le(this);
          $e(Ee.entries, { key: C(K), value: C(de) }), s || this.length++, Ee.updateURL();
        }, delete: function(K) {
          x(arguments.length, 1);
          for (var de = le(this), Ee = de.entries, Se = C(K), xe = 0; xe < Ee.length; )
            Ee[xe].key === Se ? ot(Ee, xe, 1) : xe++;
          s || (this.length = Ee.length), de.updateURL();
        }, get: function(K) {
          x(arguments.length, 1);
          for (var de = le(this).entries, Ee = C(K), Se = 0; Se < de.length; Se++)
            if (de[Se].key === Ee)
              return de[Se].value;
          return null;
        }, getAll: function(K) {
          x(arguments.length, 1);
          for (var de = le(this).entries, Ee = C(K), Se = [], xe = 0; xe < de.length; xe++)
            de[xe].key === Ee && $e(Se, de[xe].value);
          return Se;
        }, has: function(K) {
          x(arguments.length, 1);
          for (var de = le(this).entries, Ee = C(K), Se = 0; Se < de.length; )
            if (de[Se++].key === Ee)
              return !0;
          return !1;
        }, set: function(K, de) {
          x(arguments.length, 1);
          for (var Ee, Se = le(this), xe = Se.entries, Be = !1, ut = C(K), lt = C(de), pt = 0; pt < xe.length; pt++)
            (Ee = xe[pt]).key === ut && (Be ? ot(xe, pt--, 1) : (Be = !0, Ee.value = lt));
          Be || $e(xe, { key: ut, value: lt }), s || (this.length = xe.length), Se.updateURL();
        }, sort: function() {
          var K = le(this);
          P(K.entries, function(de, Ee) {
            return de.key > Ee.key ? 1 : -1;
          }), K.updateURL();
        }, forEach: function(K) {
          for (var de, Ee = le(this).entries, Se = E(K, arguments.length > 1 ? arguments[1] : void 0), xe = 0; xe < Ee.length; )
            Se((de = Ee[xe++]).value, de.key, this);
        }, keys: function() {
          return new ie(this, "keys");
        }, values: function() {
          return new ie(this, "values");
        }, entries: function() {
          return new ie(this, "entries");
        } }, { enumerable: !0 }), n(fe, W, fe.entries, { name: "entries" }), n(fe, "toString", function() {
          return le(this).serialize();
        }, { enumerable: !0 }), s && u(fe, "size", { get: function() {
          return le(this).entries.length;
        }, configurable: !0, enumerable: !0 }), h(pe, Z), r({ global: !0, constructor: !0, forced: !o }, { URLSearchParams: pe }), !o && d(Pe)) {
          var S = i(ke.has), X = i(ke.set), B = function(K) {
            if (O(K)) {
              var de, Ee = K.body;
              if (T(Ee) === Z)
                return de = K.headers ? new Pe(K.headers) : new Pe(), S(de, "content-type") || X(de, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), N(K, { body: v(0, C(Ee)), headers: v(0, de) });
            }
            return K;
          };
          if (d(ve) && r({ global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 }, { fetch: function(K) {
            return ve(K, arguments.length > 1 ? B(arguments[1]) : {});
          } }), d(ye)) {
            var ue = function(K) {
              return g(this, We), new ye(K, arguments.length > 1 ? B(arguments[1]) : {});
            };
            We.constructor = ue, ue.prototype = We, r({ global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 }, { Request: ue });
          }
        }
        p.exports = { URLSearchParams: pe, getState: le };
      }, 1637: function(p, _, e) {
        e(5556);
      }, 8789: function(p, _, e) {
        e(8783);
        var r, t = e(2109), a = e(9781), i = e(5143), s = e(7854), o = e(9974), n = e(1702), u = e(8052), c = e(7045), h = e(5787), m = e(2597), f = e(1574), g = e(8457), d = e(1589), l = e(8710).codeAt, E = e(3197), T = e(1340), I = e(8003), O = e(8053), C = e(5556), N = e(9909), v = N.set, y = N.getterFor("URL"), A = C.URLSearchParams, x = C.getState, j = s.URL, P = s.TypeError, W = s.parseInt, Z = Math.floor, ee = Math.pow, G = n("".charAt), le = n(/./.exec), ce = n([].join), _e = n(1 .toString), Ue = n([].pop), ve = n([].push), ye = n("".replace), Pe = n([].shift), We = n("".split), ke = n("".slice), Ve = n("".toLowerCase), se = n([].unshift), He = "Invalid scheme", Xe = "Invalid host", nt = "Invalid port", te = /[a-z]/i, $e = /[\d+-.a-z]/i, Me = /\d/, rt = /^0x/i, ot = /^[0-7]+$/, it = /^\d+$/, ct = /^[\da-f]+$/i, Ne = /[\0\t\n\r #%/:<>?@[\\\]^|]/, ze = /[\0\t\n\r #/:<>?@[\\\]^|]/, Ye = /^[\u0000-\u0020]+/, qe = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, Oe = /[\t\n\r]/g, w = function(H) {
          var J, ne, we, ae;
          if (typeof H == "number") {
            for (J = [], ne = 0; ne < 4; ne++)
              se(J, H % 256), H = Z(H / 256);
            return ce(J, ".");
          }
          if (typeof H == "object") {
            for (J = "", we = function(Je) {
              for (var st = null, Qe = 1, me = null, Ke = 0, b = 0; b < 8; b++)
                Je[b] !== 0 ? (Ke > Qe && (st = me, Qe = Ke), me = null, Ke = 0) : (me === null && (me = b), ++Ke);
              return Ke > Qe && (st = me, Qe = Ke), st;
            }(H), ne = 0; ne < 8; ne++)
              ae && H[ne] === 0 || (ae && (ae = !1), we === ne ? (J += ne ? ":" : "::", ae = !0) : (J += _e(H[ne], 16), ne < 7 && (J += ":")));
            return "[" + J + "]";
          }
          return H;
        }, z = {}, re = f({}, z, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }), q = f({}, re, { "#": 1, "?": 1, "{": 1, "}": 1 }), ie = f({}, q, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }), Ie = function(H, J) {
          var ne = l(H, 0);
          return ne > 32 && ne < 127 && !m(J, H) ? H : encodeURIComponent(H);
        }, pe = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 }, fe = function(H, J) {
          var ne;
          return H.length == 2 && le(te, G(H, 0)) && ((ne = G(H, 1)) == ":" || !J && ne == "|");
        }, S = function(H) {
          var J;
          return H.length > 1 && fe(ke(H, 0, 2)) && (H.length == 2 || (J = G(H, 2)) === "/" || J === "\\" || J === "?" || J === "#");
        }, X = function(H) {
          return H === "." || Ve(H) === "%2e";
        }, B = {}, ue = {}, K = {}, de = {}, Ee = {}, Se = {}, xe = {}, Be = {}, ut = {}, lt = {}, pt = {}, mt = {}, yt = {}, Ot = {}, At = {}, bt = {}, Rt = {}, ht = {}, It = {}, Tt = {}, vt = {}, Et = function(H, J, ne) {
          var we, ae, Je, st = T(H);
          if (J) {
            if (ae = this.parse(st))
              throw P(ae);
            this.searchParams = null;
          } else {
            if (ne !== void 0 && (we = new Et(ne, !0)), ae = this.parse(st, null, we))
              throw P(ae);
            (Je = x(new A())).bindURL(this), this.searchParams = Je;
          }
        };
        Et.prototype = { type: "URL", parse: function(H, J, ne) {
          var we, ae, Je, st, Qe, me = this, Ke = J || B, b = 0, R = "", k = !1, U = !1, Y = !1;
          for (H = T(H), J || (me.scheme = "", me.username = "", me.password = "", me.host = null, me.port = null, me.path = [], me.query = null, me.fragment = null, me.cannotBeABaseURL = !1, H = ye(H, Ye, ""), H = ye(H, qe, "$1")), H = ye(H, Oe, ""), we = g(H); b <= we.length; ) {
            switch (ae = we[b], Ke) {
              case B:
                if (!ae || !le(te, ae)) {
                  if (J)
                    return He;
                  Ke = K;
                  continue;
                }
                R += Ve(ae), Ke = ue;
                break;
              case ue:
                if (ae && (le($e, ae) || ae == "+" || ae == "-" || ae == "."))
                  R += Ve(ae);
                else {
                  if (ae != ":") {
                    if (J)
                      return He;
                    R = "", Ke = K, b = 0;
                    continue;
                  }
                  if (J && (me.isSpecial() != m(pe, R) || R == "file" && (me.includesCredentials() || me.port !== null) || me.scheme == "file" && !me.host))
                    return;
                  if (me.scheme = R, J)
                    return void (me.isSpecial() && pe[me.scheme] == me.port && (me.port = null));
                  R = "", me.scheme == "file" ? Ke = Ot : me.isSpecial() && ne && ne.scheme == me.scheme ? Ke = de : me.isSpecial() ? Ke = Be : we[b + 1] == "/" ? (Ke = Ee, b++) : (me.cannotBeABaseURL = !0, ve(me.path, ""), Ke = It);
                }
                break;
              case K:
                if (!ne || ne.cannotBeABaseURL && ae != "#")
                  return He;
                if (ne.cannotBeABaseURL && ae == "#") {
                  me.scheme = ne.scheme, me.path = d(ne.path), me.query = ne.query, me.fragment = "", me.cannotBeABaseURL = !0, Ke = vt;
                  break;
                }
                Ke = ne.scheme == "file" ? Ot : Se;
                continue;
              case de:
                if (ae != "/" || we[b + 1] != "/") {
                  Ke = Se;
                  continue;
                }
                Ke = ut, b++;
                break;
              case Ee:
                if (ae == "/") {
                  Ke = lt;
                  break;
                }
                Ke = ht;
                continue;
              case Se:
                if (me.scheme = ne.scheme, ae == r)
                  me.username = ne.username, me.password = ne.password, me.host = ne.host, me.port = ne.port, me.path = d(ne.path), me.query = ne.query;
                else if (ae == "/" || ae == "\\" && me.isSpecial())
                  Ke = xe;
                else if (ae == "?")
                  me.username = ne.username, me.password = ne.password, me.host = ne.host, me.port = ne.port, me.path = d(ne.path), me.query = "", Ke = Tt;
                else {
                  if (ae != "#") {
                    me.username = ne.username, me.password = ne.password, me.host = ne.host, me.port = ne.port, me.path = d(ne.path), me.path.length--, Ke = ht;
                    continue;
                  }
                  me.username = ne.username, me.password = ne.password, me.host = ne.host, me.port = ne.port, me.path = d(ne.path), me.query = ne.query, me.fragment = "", Ke = vt;
                }
                break;
              case xe:
                if (!me.isSpecial() || ae != "/" && ae != "\\") {
                  if (ae != "/") {
                    me.username = ne.username, me.password = ne.password, me.host = ne.host, me.port = ne.port, Ke = ht;
                    continue;
                  }
                  Ke = lt;
                } else
                  Ke = ut;
                break;
              case Be:
                if (Ke = ut, ae != "/" || G(R, b + 1) != "/")
                  continue;
                b++;
                break;
              case ut:
                if (ae != "/" && ae != "\\") {
                  Ke = lt;
                  continue;
                }
                break;
              case lt:
                if (ae == "@") {
                  k && (R = "%40" + R), k = !0, Je = g(R);
                  for (var Q = 0; Q < Je.length; Q++) {
                    var L = Je[Q];
                    if (L != ":" || Y) {
                      var Ae = Ie(L, ie);
                      Y ? me.password += Ae : me.username += Ae;
                    } else
                      Y = !0;
                  }
                  R = "";
                } else if (ae == r || ae == "/" || ae == "?" || ae == "#" || ae == "\\" && me.isSpecial()) {
                  if (k && R == "")
                    return "Invalid authority";
                  b -= g(R).length + 1, R = "", Ke = pt;
                } else
                  R += ae;
                break;
              case pt:
              case mt:
                if (J && me.scheme == "file") {
                  Ke = bt;
                  continue;
                }
                if (ae != ":" || U) {
                  if (ae == r || ae == "/" || ae == "?" || ae == "#" || ae == "\\" && me.isSpecial()) {
                    if (me.isSpecial() && R == "")
                      return Xe;
                    if (J && R == "" && (me.includesCredentials() || me.port !== null))
                      return;
                    if (st = me.parseHost(R))
                      return st;
                    if (R = "", Ke = Rt, J)
                      return;
                    continue;
                  }
                  ae == "[" ? U = !0 : ae == "]" && (U = !1), R += ae;
                } else {
                  if (R == "")
                    return Xe;
                  if (st = me.parseHost(R))
                    return st;
                  if (R = "", Ke = yt, J == mt)
                    return;
                }
                break;
              case yt:
                if (!le(Me, ae)) {
                  if (ae == r || ae == "/" || ae == "?" || ae == "#" || ae == "\\" && me.isSpecial() || J) {
                    if (R != "") {
                      var D = W(R, 10);
                      if (D > 65535)
                        return nt;
                      me.port = me.isSpecial() && D === pe[me.scheme] ? null : D, R = "";
                    }
                    if (J)
                      return;
                    Ke = Rt;
                    continue;
                  }
                  return nt;
                }
                R += ae;
                break;
              case Ot:
                if (me.scheme = "file", ae == "/" || ae == "\\")
                  Ke = At;
                else {
                  if (!ne || ne.scheme != "file") {
                    Ke = ht;
                    continue;
                  }
                  if (ae == r)
                    me.host = ne.host, me.path = d(ne.path), me.query = ne.query;
                  else if (ae == "?")
                    me.host = ne.host, me.path = d(ne.path), me.query = "", Ke = Tt;
                  else {
                    if (ae != "#") {
                      S(ce(d(we, b), "")) || (me.host = ne.host, me.path = d(ne.path), me.shortenPath()), Ke = ht;
                      continue;
                    }
                    me.host = ne.host, me.path = d(ne.path), me.query = ne.query, me.fragment = "", Ke = vt;
                  }
                }
                break;
              case At:
                if (ae == "/" || ae == "\\") {
                  Ke = bt;
                  break;
                }
                ne && ne.scheme == "file" && !S(ce(d(we, b), "")) && (fe(ne.path[0], !0) ? ve(me.path, ne.path[0]) : me.host = ne.host), Ke = ht;
                continue;
              case bt:
                if (ae == r || ae == "/" || ae == "\\" || ae == "?" || ae == "#") {
                  if (!J && fe(R))
                    Ke = ht;
                  else if (R == "") {
                    if (me.host = "", J)
                      return;
                    Ke = Rt;
                  } else {
                    if (st = me.parseHost(R))
                      return st;
                    if (me.host == "localhost" && (me.host = ""), J)
                      return;
                    R = "", Ke = Rt;
                  }
                  continue;
                }
                R += ae;
                break;
              case Rt:
                if (me.isSpecial()) {
                  if (Ke = ht, ae != "/" && ae != "\\")
                    continue;
                } else if (J || ae != "?")
                  if (J || ae != "#") {
                    if (ae != r && (Ke = ht, ae != "/"))
                      continue;
                  } else
                    me.fragment = "", Ke = vt;
                else
                  me.query = "", Ke = Tt;
                break;
              case ht:
                if (ae == r || ae == "/" || ae == "\\" && me.isSpecial() || !J && (ae == "?" || ae == "#")) {
                  if ((Qe = Ve(Qe = R)) === ".." || Qe === "%2e." || Qe === ".%2e" || Qe === "%2e%2e" ? (me.shortenPath(), ae == "/" || ae == "\\" && me.isSpecial() || ve(me.path, "")) : X(R) ? ae == "/" || ae == "\\" && me.isSpecial() || ve(me.path, "") : (me.scheme == "file" && !me.path.length && fe(R) && (me.host && (me.host = ""), R = G(R, 0) + ":"), ve(me.path, R)), R = "", me.scheme == "file" && (ae == r || ae == "?" || ae == "#"))
                    for (; me.path.length > 1 && me.path[0] === ""; )
                      Pe(me.path);
                  ae == "?" ? (me.query = "", Ke = Tt) : ae == "#" && (me.fragment = "", Ke = vt);
                } else
                  R += Ie(ae, q);
                break;
              case It:
                ae == "?" ? (me.query = "", Ke = Tt) : ae == "#" ? (me.fragment = "", Ke = vt) : ae != r && (me.path[0] += Ie(ae, z));
                break;
              case Tt:
                J || ae != "#" ? ae != r && (ae == "'" && me.isSpecial() ? me.query += "%27" : me.query += ae == "#" ? "%23" : Ie(ae, z)) : (me.fragment = "", Ke = vt);
                break;
              case vt:
                ae != r && (me.fragment += Ie(ae, re));
            }
            b++;
          }
        }, parseHost: function(H) {
          var J, ne, we;
          if (G(H, 0) == "[") {
            if (G(H, H.length - 1) != "]" || (J = function(ae) {
              var Je, st, Qe, me, Ke, b, R, k = [0, 0, 0, 0, 0, 0, 0, 0], U = 0, Y = null, Q = 0, L = function() {
                return G(ae, Q);
              };
              if (L() == ":") {
                if (G(ae, 1) != ":")
                  return;
                Q += 2, Y = ++U;
              }
              for (; L(); ) {
                if (U == 8)
                  return;
                if (L() != ":") {
                  for (Je = st = 0; st < 4 && le(ct, L()); )
                    Je = 16 * Je + W(L(), 16), Q++, st++;
                  if (L() == ".") {
                    if (st == 0 || (Q -= st, U > 6))
                      return;
                    for (Qe = 0; L(); ) {
                      if (me = null, Qe > 0) {
                        if (!(L() == "." && Qe < 4))
                          return;
                        Q++;
                      }
                      if (!le(Me, L()))
                        return;
                      for (; le(Me, L()); ) {
                        if (Ke = W(L(), 10), me === null)
                          me = Ke;
                        else {
                          if (me == 0)
                            return;
                          me = 10 * me + Ke;
                        }
                        if (me > 255)
                          return;
                        Q++;
                      }
                      k[U] = 256 * k[U] + me, ++Qe != 2 && Qe != 4 || U++;
                    }
                    if (Qe != 4)
                      return;
                    break;
                  }
                  if (L() == ":") {
                    if (Q++, !L())
                      return;
                  } else if (L())
                    return;
                  k[U++] = Je;
                } else {
                  if (Y !== null)
                    return;
                  Q++, Y = ++U;
                }
              }
              if (Y !== null)
                for (b = U - Y, U = 7; U != 0 && b > 0; )
                  R = k[U], k[U--] = k[Y + b - 1], k[Y + --b] = R;
              else if (U != 8)
                return;
              return k;
            }(ke(H, 1, -1)), !J))
              return Xe;
            this.host = J;
          } else if (this.isSpecial()) {
            if (H = E(H), le(Ne, H) || (J = function(ae) {
              var Je, st, Qe, me, Ke, b, R, k = We(ae, ".");
              if (k.length && k[k.length - 1] == "" && k.length--, (Je = k.length) > 4)
                return ae;
              for (st = [], Qe = 0; Qe < Je; Qe++) {
                if ((me = k[Qe]) == "")
                  return ae;
                if (Ke = 10, me.length > 1 && G(me, 0) == "0" && (Ke = le(rt, me) ? 16 : 8, me = ke(me, Ke == 8 ? 1 : 2)), me === "")
                  b = 0;
                else {
                  if (!le(Ke == 10 ? it : Ke == 8 ? ot : ct, me))
                    return ae;
                  b = W(me, Ke);
                }
                ve(st, b);
              }
              for (Qe = 0; Qe < Je; Qe++)
                if (b = st[Qe], Qe == Je - 1) {
                  if (b >= ee(256, 5 - Je))
                    return null;
                } else if (b > 255)
                  return null;
              for (R = Ue(st), Qe = 0; Qe < st.length; Qe++)
                R += st[Qe] * ee(256, 3 - Qe);
              return R;
            }(H), J === null))
              return Xe;
            this.host = J;
          } else {
            if (le(ze, H))
              return Xe;
            for (J = "", ne = g(H), we = 0; we < ne.length; we++)
              J += Ie(ne[we], z);
            this.host = J;
          }
        }, cannotHaveUsernamePasswordPort: function() {
          return !this.host || this.cannotBeABaseURL || this.scheme == "file";
        }, includesCredentials: function() {
          return this.username != "" || this.password != "";
        }, isSpecial: function() {
          return m(pe, this.scheme);
        }, shortenPath: function() {
          var H = this.path, J = H.length;
          !J || this.scheme == "file" && J == 1 && fe(H[0], !0) || H.length--;
        }, serialize: function() {
          var H = this, J = H.scheme, ne = H.username, we = H.password, ae = H.host, Je = H.port, st = H.path, Qe = H.query, me = H.fragment, Ke = J + ":";
          return ae !== null ? (Ke += "//", H.includesCredentials() && (Ke += ne + (we ? ":" + we : "") + "@"), Ke += w(ae), Je !== null && (Ke += ":" + Je)) : J == "file" && (Ke += "//"), Ke += H.cannotBeABaseURL ? st[0] : st.length ? "/" + ce(st, "/") : "", Qe !== null && (Ke += "?" + Qe), me !== null && (Ke += "#" + me), Ke;
        }, setHref: function(H) {
          var J = this.parse(H);
          if (J)
            throw P(J);
          this.searchParams.update();
        }, getOrigin: function() {
          var H = this.scheme, J = this.port;
          if (H == "blob")
            try {
              return new M(H.path[0]).origin;
            } catch {
              return "null";
            }
          return H != "file" && this.isSpecial() ? H + "://" + w(this.host) + (J !== null ? ":" + J : "") : "null";
        }, getProtocol: function() {
          return this.scheme + ":";
        }, setProtocol: function(H) {
          this.parse(T(H) + ":", B);
        }, getUsername: function() {
          return this.username;
        }, setUsername: function(H) {
          var J = g(T(H));
          if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for (var ne = 0; ne < J.length; ne++)
              this.username += Ie(J[ne], ie);
          }
        }, getPassword: function() {
          return this.password;
        }, setPassword: function(H) {
          var J = g(T(H));
          if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for (var ne = 0; ne < J.length; ne++)
              this.password += Ie(J[ne], ie);
          }
        }, getHost: function() {
          var H = this.host, J = this.port;
          return H === null ? "" : J === null ? w(H) : w(H) + ":" + J;
        }, setHost: function(H) {
          this.cannotBeABaseURL || this.parse(H, pt);
        }, getHostname: function() {
          var H = this.host;
          return H === null ? "" : w(H);
        }, setHostname: function(H) {
          this.cannotBeABaseURL || this.parse(H, mt);
        }, getPort: function() {
          var H = this.port;
          return H === null ? "" : T(H);
        }, setPort: function(H) {
          this.cannotHaveUsernamePasswordPort() || ((H = T(H)) == "" ? this.port = null : this.parse(H, yt));
        }, getPathname: function() {
          var H = this.path;
          return this.cannotBeABaseURL ? H[0] : H.length ? "/" + ce(H, "/") : "";
        }, setPathname: function(H) {
          this.cannotBeABaseURL || (this.path = [], this.parse(H, Rt));
        }, getSearch: function() {
          var H = this.query;
          return H ? "?" + H : "";
        }, setSearch: function(H) {
          (H = T(H)) == "" ? this.query = null : (G(H, 0) == "?" && (H = ke(H, 1)), this.query = "", this.parse(H, Tt)), this.searchParams.update();
        }, getSearchParams: function() {
          return this.searchParams.facade;
        }, getHash: function() {
          var H = this.fragment;
          return H ? "#" + H : "";
        }, setHash: function(H) {
          (H = T(H)) != "" ? (G(H, 0) == "#" && (H = ke(H, 1)), this.fragment = "", this.parse(H, vt)) : this.fragment = null;
        }, update: function() {
          this.query = this.searchParams.serialize() || null;
        } };
        var M = function(H) {
          var J = h(this, Re), ne = O(arguments.length, 1) > 1 ? arguments[1] : void 0, we = v(J, new Et(H, !1, ne));
          a || (J.href = we.serialize(), J.origin = we.getOrigin(), J.protocol = we.getProtocol(), J.username = we.getUsername(), J.password = we.getPassword(), J.host = we.getHost(), J.hostname = we.getHostname(), J.port = we.getPort(), J.pathname = we.getPathname(), J.search = we.getSearch(), J.searchParams = we.getSearchParams(), J.hash = we.getHash());
        }, Re = M.prototype, V = function(H, J) {
          return { get: function() {
            return y(this)[H]();
          }, set: J && function(ne) {
            return y(this)[J](ne);
          }, configurable: !0, enumerable: !0 };
        };
        if (a && (c(Re, "href", V("serialize", "setHref")), c(Re, "origin", V("getOrigin")), c(Re, "protocol", V("getProtocol", "setProtocol")), c(Re, "username", V("getUsername", "setUsername")), c(Re, "password", V("getPassword", "setPassword")), c(Re, "host", V("getHost", "setHost")), c(Re, "hostname", V("getHostname", "setHostname")), c(Re, "port", V("getPort", "setPort")), c(Re, "pathname", V("getPathname", "setPathname")), c(Re, "search", V("getSearch", "setSearch")), c(Re, "searchParams", V("getSearchParams")), c(Re, "hash", V("getHash", "setHash"))), u(Re, "toJSON", function() {
          return y(this).serialize();
        }, { enumerable: !0 }), u(Re, "toString", function() {
          return y(this).serialize();
        }, { enumerable: !0 }), j) {
          var Ce = j.createObjectURL, Te = j.revokeObjectURL;
          Ce && u(M, "createObjectURL", o(Ce, j)), Te && u(M, "revokeObjectURL", o(Te, j));
        }
        I(M, "URL"), t({ global: !0, constructor: !0, forced: !i, sham: !a }, { URL: M });
      }, 285: function(p, _, e) {
        e(8789);
      }, 5717: function(p) {
        typeof Object.create == "function" ? p.exports = function(_, e) {
          e && (_.super_ = e, _.prototype = Object.create(e.prototype, { constructor: { value: _, enumerable: !1, writable: !0, configurable: !0 } }));
        } : p.exports = function(_, e) {
          if (e) {
            _.super_ = e;
            var r = function() {
            };
            r.prototype = e.prototype, _.prototype = new r(), _.prototype.constructor = _;
          }
        };
      }, 3720: function(p) {
        p.exports = e;
        var _ = null;
        try {
          _ = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch {
        }
        function e(y, A, x) {
          this.low = 0 | y, this.high = 0 | A, this.unsigned = !!x;
        }
        function r(y) {
          return (y && y.__isLong__) === !0;
        }
        e.prototype.__isLong__, Object.defineProperty(e.prototype, "__isLong__", { value: !0 }), e.isLong = r;
        var t = {}, a = {};
        function i(y, A) {
          var x, j, P;
          return A ? (P = 0 <= (y >>>= 0) && y < 256) && (j = a[y]) ? j : (x = o(y, (0 | y) < 0 ? -1 : 0, !0), P && (a[y] = x), x) : (P = -128 <= (y |= 0) && y < 128) && (j = t[y]) ? j : (x = o(y, y < 0 ? -1 : 0, !1), P && (t[y] = x), x);
        }
        function s(y, A) {
          if (isNaN(y))
            return A ? l : d;
          if (A) {
            if (y < 0)
              return l;
            if (y >= m)
              return C;
          } else {
            if (y <= -f)
              return N;
            if (y + 1 >= f)
              return O;
          }
          return y < 0 ? s(-y, A).neg() : o(y % h | 0, y / h | 0, A);
        }
        function o(y, A, x) {
          return new e(y, A, x);
        }
        e.fromInt = i, e.fromNumber = s, e.fromBits = o;
        var n = Math.pow;
        function u(y, A, x) {
          if (y.length === 0)
            throw Error("empty string");
          if (y === "NaN" || y === "Infinity" || y === "+Infinity" || y === "-Infinity")
            return d;
          if (typeof A == "number" ? (x = A, A = !1) : A = !!A, (x = x || 10) < 2 || 36 < x)
            throw RangeError("radix");
          var j;
          if ((j = y.indexOf("-")) > 0)
            throw Error("interior hyphen");
          if (j === 0)
            return u(y.substring(1), A, x).neg();
          for (var P = s(n(x, 8)), W = d, Z = 0; Z < y.length; Z += 8) {
            var ee = Math.min(8, y.length - Z), G = parseInt(y.substring(Z, Z + ee), x);
            if (ee < 8) {
              var le = s(n(x, ee));
              W = W.mul(le).add(s(G));
            } else
              W = (W = W.mul(P)).add(s(G));
          }
          return W.unsigned = A, W;
        }
        function c(y, A) {
          return typeof y == "number" ? s(y, A) : typeof y == "string" ? u(y, A) : o(y.low, y.high, typeof A == "boolean" ? A : y.unsigned);
        }
        e.fromString = u, e.fromValue = c;
        var h = 4294967296, m = h * h, f = m / 2, g = i(1 << 24), d = i(0);
        e.ZERO = d;
        var l = i(0, !0);
        e.UZERO = l;
        var E = i(1);
        e.ONE = E;
        var T = i(1, !0);
        e.UONE = T;
        var I = i(-1);
        e.NEG_ONE = I;
        var O = o(-1, 2147483647, !1);
        e.MAX_VALUE = O;
        var C = o(-1, -1, !0);
        e.MAX_UNSIGNED_VALUE = C;
        var N = o(0, -2147483648, !1);
        e.MIN_VALUE = N;
        var v = e.prototype;
        v.toInt = function() {
          return this.unsigned ? this.low >>> 0 : this.low;
        }, v.toNumber = function() {
          return this.unsigned ? (this.high >>> 0) * h + (this.low >>> 0) : this.high * h + (this.low >>> 0);
        }, v.toString = function(y) {
          if ((y = y || 10) < 2 || 36 < y)
            throw RangeError("radix");
          if (this.isZero())
            return "0";
          if (this.isNegative()) {
            if (this.eq(N)) {
              var A = s(y), x = this.div(A), j = x.mul(A).sub(this);
              return x.toString(y) + j.toInt().toString(y);
            }
            return "-" + this.neg().toString(y);
          }
          for (var P = s(n(y, 6), this.unsigned), W = this, Z = ""; ; ) {
            var ee = W.div(P), G = (W.sub(ee.mul(P)).toInt() >>> 0).toString(y);
            if ((W = ee).isZero())
              return G + Z;
            for (; G.length < 6; )
              G = "0" + G;
            Z = "" + G + Z;
          }
        }, v.getHighBits = function() {
          return this.high;
        }, v.getHighBitsUnsigned = function() {
          return this.high >>> 0;
        }, v.getLowBits = function() {
          return this.low;
        }, v.getLowBitsUnsigned = function() {
          return this.low >>> 0;
        }, v.getNumBitsAbs = function() {
          if (this.isNegative())
            return this.eq(N) ? 64 : this.neg().getNumBitsAbs();
          for (var y = this.high != 0 ? this.high : this.low, A = 31; A > 0 && !(y & 1 << A); A--)
            ;
          return this.high != 0 ? A + 33 : A + 1;
        }, v.isZero = function() {
          return this.high === 0 && this.low === 0;
        }, v.eqz = v.isZero, v.isNegative = function() {
          return !this.unsigned && this.high < 0;
        }, v.isPositive = function() {
          return this.unsigned || this.high >= 0;
        }, v.isOdd = function() {
          return (1 & this.low) == 1;
        }, v.isEven = function() {
          return (1 & this.low) == 0;
        }, v.equals = function(y) {
          return r(y) || (y = c(y)), (this.unsigned === y.unsigned || this.high >>> 31 != 1 || y.high >>> 31 != 1) && this.high === y.high && this.low === y.low;
        }, v.eq = v.equals, v.notEquals = function(y) {
          return !this.eq(y);
        }, v.neq = v.notEquals, v.ne = v.notEquals, v.lessThan = function(y) {
          return this.comp(y) < 0;
        }, v.lt = v.lessThan, v.lessThanOrEqual = function(y) {
          return this.comp(y) <= 0;
        }, v.lte = v.lessThanOrEqual, v.le = v.lessThanOrEqual, v.greaterThan = function(y) {
          return this.comp(y) > 0;
        }, v.gt = v.greaterThan, v.greaterThanOrEqual = function(y) {
          return this.comp(y) >= 0;
        }, v.gte = v.greaterThanOrEqual, v.ge = v.greaterThanOrEqual, v.compare = function(y) {
          if (r(y) || (y = c(y)), this.eq(y))
            return 0;
          var A = this.isNegative(), x = y.isNegative();
          return A && !x ? -1 : !A && x ? 1 : this.unsigned ? y.high >>> 0 > this.high >>> 0 || y.high === this.high && y.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(y).isNegative() ? -1 : 1;
        }, v.comp = v.compare, v.negate = function() {
          return !this.unsigned && this.eq(N) ? N : this.not().add(E);
        }, v.neg = v.negate, v.add = function(y) {
          r(y) || (y = c(y));
          var A = this.high >>> 16, x = 65535 & this.high, j = this.low >>> 16, P = 65535 & this.low, W = y.high >>> 16, Z = 65535 & y.high, ee = y.low >>> 16, G = 0, le = 0, ce = 0, _e = 0;
          return ce += (_e += P + (65535 & y.low)) >>> 16, le += (ce += j + ee) >>> 16, G += (le += x + Z) >>> 16, G += A + W, o((ce &= 65535) << 16 | (_e &= 65535), (G &= 65535) << 16 | (le &= 65535), this.unsigned);
        }, v.subtract = function(y) {
          return r(y) || (y = c(y)), this.add(y.neg());
        }, v.sub = v.subtract, v.multiply = function(y) {
          if (this.isZero())
            return d;
          if (r(y) || (y = c(y)), _)
            return o(_.mul(this.low, this.high, y.low, y.high), _.get_high(), this.unsigned);
          if (y.isZero())
            return d;
          if (this.eq(N))
            return y.isOdd() ? N : d;
          if (y.eq(N))
            return this.isOdd() ? N : d;
          if (this.isNegative())
            return y.isNegative() ? this.neg().mul(y.neg()) : this.neg().mul(y).neg();
          if (y.isNegative())
            return this.mul(y.neg()).neg();
          if (this.lt(g) && y.lt(g))
            return s(this.toNumber() * y.toNumber(), this.unsigned);
          var A = this.high >>> 16, x = 65535 & this.high, j = this.low >>> 16, P = 65535 & this.low, W = y.high >>> 16, Z = 65535 & y.high, ee = y.low >>> 16, G = 65535 & y.low, le = 0, ce = 0, _e = 0, Ue = 0;
          return _e += (Ue += P * G) >>> 16, ce += (_e += j * G) >>> 16, _e &= 65535, ce += (_e += P * ee) >>> 16, le += (ce += x * G) >>> 16, ce &= 65535, le += (ce += j * ee) >>> 16, ce &= 65535, le += (ce += P * Z) >>> 16, le += A * G + x * ee + j * Z + P * W, o((_e &= 65535) << 16 | (Ue &= 65535), (le &= 65535) << 16 | (ce &= 65535), this.unsigned);
        }, v.mul = v.multiply, v.divide = function(y) {
          if (r(y) || (y = c(y)), y.isZero())
            throw Error("division by zero");
          var A, x, j;
          if (_)
            return this.unsigned || this.high !== -2147483648 || y.low !== -1 || y.high !== -1 ? o((this.unsigned ? _.div_u : _.div_s)(this.low, this.high, y.low, y.high), _.get_high(), this.unsigned) : this;
          if (this.isZero())
            return this.unsigned ? l : d;
          if (this.unsigned) {
            if (y.unsigned || (y = y.toUnsigned()), y.gt(this))
              return l;
            if (y.gt(this.shru(1)))
              return T;
            j = l;
          } else {
            if (this.eq(N))
              return y.eq(E) || y.eq(I) ? N : y.eq(N) ? E : (A = this.shr(1).div(y).shl(1)).eq(d) ? y.isNegative() ? E : I : (x = this.sub(y.mul(A)), j = A.add(x.div(y)));
            if (y.eq(N))
              return this.unsigned ? l : d;
            if (this.isNegative())
              return y.isNegative() ? this.neg().div(y.neg()) : this.neg().div(y).neg();
            if (y.isNegative())
              return this.div(y.neg()).neg();
            j = d;
          }
          for (x = this; x.gte(y); ) {
            A = Math.max(1, Math.floor(x.toNumber() / y.toNumber()));
            for (var P = Math.ceil(Math.log(A) / Math.LN2), W = P <= 48 ? 1 : n(2, P - 48), Z = s(A), ee = Z.mul(y); ee.isNegative() || ee.gt(x); )
              ee = (Z = s(A -= W, this.unsigned)).mul(y);
            Z.isZero() && (Z = E), j = j.add(Z), x = x.sub(ee);
          }
          return j;
        }, v.div = v.divide, v.modulo = function(y) {
          return r(y) || (y = c(y)), _ ? o((this.unsigned ? _.rem_u : _.rem_s)(this.low, this.high, y.low, y.high), _.get_high(), this.unsigned) : this.sub(this.div(y).mul(y));
        }, v.mod = v.modulo, v.rem = v.modulo, v.not = function() {
          return o(~this.low, ~this.high, this.unsigned);
        }, v.and = function(y) {
          return r(y) || (y = c(y)), o(this.low & y.low, this.high & y.high, this.unsigned);
        }, v.or = function(y) {
          return r(y) || (y = c(y)), o(this.low | y.low, this.high | y.high, this.unsigned);
        }, v.xor = function(y) {
          return r(y) || (y = c(y)), o(this.low ^ y.low, this.high ^ y.high, this.unsigned);
        }, v.shiftLeft = function(y) {
          return r(y) && (y = y.toInt()), (y &= 63) == 0 ? this : y < 32 ? o(this.low << y, this.high << y | this.low >>> 32 - y, this.unsigned) : o(0, this.low << y - 32, this.unsigned);
        }, v.shl = v.shiftLeft, v.shiftRight = function(y) {
          return r(y) && (y = y.toInt()), (y &= 63) == 0 ? this : y < 32 ? o(this.low >>> y | this.high << 32 - y, this.high >> y, this.unsigned) : o(this.high >> y - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        }, v.shr = v.shiftRight, v.shiftRightUnsigned = function(y) {
          if (r(y) && (y = y.toInt()), (y &= 63) == 0)
            return this;
          var A = this.high;
          return y < 32 ? o(this.low >>> y | A << 32 - y, A >>> y, this.unsigned) : o(y === 32 ? A : A >>> y - 32, 0, this.unsigned);
        }, v.shru = v.shiftRightUnsigned, v.shr_u = v.shiftRightUnsigned, v.toSigned = function() {
          return this.unsigned ? o(this.low, this.high, !1) : this;
        }, v.toUnsigned = function() {
          return this.unsigned ? this : o(this.low, this.high, !0);
        }, v.toBytes = function(y) {
          return y ? this.toBytesLE() : this.toBytesBE();
        }, v.toBytesLE = function() {
          var y = this.high, A = this.low;
          return [255 & A, A >>> 8 & 255, A >>> 16 & 255, A >>> 24, 255 & y, y >>> 8 & 255, y >>> 16 & 255, y >>> 24];
        }, v.toBytesBE = function() {
          var y = this.high, A = this.low;
          return [y >>> 24, y >>> 16 & 255, y >>> 8 & 255, 255 & y, A >>> 24, A >>> 16 & 255, A >>> 8 & 255, 255 & A];
        }, e.fromBytes = function(y, A, x) {
          return x ? e.fromBytesLE(y, A) : e.fromBytesBE(y, A);
        }, e.fromBytesLE = function(y, A) {
          return new e(y[0] | y[1] << 8 | y[2] << 16 | y[3] << 24, y[4] | y[5] << 8 | y[6] << 16 | y[7] << 24, A);
        }, e.fromBytesBE = function(y, A) {
          return new e(y[4] << 24 | y[5] << 16 | y[6] << 8 | y[7], y[0] << 24 | y[1] << 16 | y[2] << 8 | y[3], A);
        };
      }, 3281: function(p, _, e) {
        p.exports = e(9050);
      }, 2967: function(p) {
        p.exports = r;
        var _, e = /\/|\./;
        function r(t, a) {
          e.test(t) || (t = "google/protobuf/" + t + ".proto", a = { nested: { google: { nested: { protobuf: { nested: a } } } } }), r[t] = a;
        }
        r("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), r("duration", { Duration: _ = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), r("timestamp", { Timestamp: _ }), r("empty", { Empty: { fields: {} } }), r("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), r("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), r("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), r.get = function(t) {
          return r[t] || null;
        };
      }, 3996: function(p, _, e) {
        var r = _, t = e(7025), a = e(9935);
        function i(o, n, u, c) {
          if (n.resolvedType)
            if (n.resolvedType instanceof t) {
              o("switch(d%s){", c);
              for (var h = n.resolvedType.values, m = Object.keys(h), f = 0; f < m.length; ++f)
                n.repeated && h[m[f]] === n.typeDefault && o("default:"), o("case%j:", m[f])("case %i:", h[m[f]])("m%s=%j", c, h[m[f]])("break");
              o("}");
            } else
              o('if(typeof d%s!=="object")', c)("throw TypeError(%j)", n.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", c, u, c);
          else {
            var g = !1;
            switch (n.type) {
              case "double":
              case "float":
                o("m%s=Number(d%s)", c, c);
                break;
              case "uint32":
              case "fixed32":
                o("m%s=d%s>>>0", c, c);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                o("m%s=d%s|0", c, c);
                break;
              case "uint64":
                g = !0;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                o("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", c, c, g)('else if(typeof d%s==="string")', c)("m%s=parseInt(d%s,10)", c, c)('else if(typeof d%s==="number")', c)("m%s=d%s", c, c)('else if(typeof d%s==="object")', c)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", c, c, c, g ? "true" : "");
                break;
              case "bytes":
                o('if(typeof d%s==="string")', c)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", c, c, c)("else if(d%s.length)", c)("m%s=d%s", c, c);
                break;
              case "string":
                o("m%s=String(d%s)", c, c);
                break;
              case "bool":
                o("m%s=Boolean(d%s)", c, c);
            }
          }
          return o;
        }
        function s(o, n, u, c) {
          if (n.resolvedType)
            n.resolvedType instanceof t ? o("d%s=o.enums===String?types[%i].values[m%s]:m%s", c, u, c, c) : o("d%s=types[%i].toObject(m%s,o)", c, u, c);
          else {
            var h = !1;
            switch (n.type) {
              case "double":
              case "float":
                o("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", c, c, c, c);
                break;
              case "uint64":
                h = !0;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                o('if(typeof m%s==="number")', c)("d%s=o.longs===String?String(m%s):m%s", c, c, c)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", c, c, c, c, h ? "true" : "", c);
                break;
              case "bytes":
                o("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", c, c, c, c, c);
                break;
              default:
                o("d%s=m%s", c, c);
            }
          }
          return o;
        }
        r.fromObject = function(o) {
          var n = o.fieldsArray, u = a.codegen(["d"], o.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!n.length)
            return u("return new this.ctor");
          u("var m=new this.ctor");
          for (var c = 0; c < n.length; ++c) {
            var h = n[c].resolve(), m = a.safeProp(h.name);
            h.map ? (u("if(d%s){", m)('if(typeof d%s!=="object")', m)("throw TypeError(%j)", h.fullName + ": object expected")("m%s={}", m)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", m), i(u, h, c, m + "[ks[i]]")("}")("}")) : h.repeated ? (u("if(d%s){", m)("if(!Array.isArray(d%s))", m)("throw TypeError(%j)", h.fullName + ": array expected")("m%s=[]", m)("for(var i=0;i<d%s.length;++i){", m), i(u, h, c, m + "[i]")("}")("}")) : (h.resolvedType instanceof t || u("if(d%s!=null){", m), i(u, h, c, m), h.resolvedType instanceof t || u("}"));
          }
          return u("return m");
        }, r.toObject = function(o) {
          var n = o.fieldsArray.slice().sort(a.compareFieldsById);
          if (!n.length)
            return a.codegen()("return {}");
          for (var u = a.codegen(["m", "o"], o.name + "$toObject")("if(!o)")("o={}")("var d={}"), c = [], h = [], m = [], f = 0; f < n.length; ++f)
            n[f].partOf || (n[f].resolve().repeated ? c : n[f].map ? h : m).push(n[f]);
          if (c.length) {
            for (u("if(o.arrays||o.defaults){"), f = 0; f < c.length; ++f)
              u("d%s=[]", a.safeProp(c[f].name));
            u("}");
          }
          if (h.length) {
            for (u("if(o.objects||o.defaults){"), f = 0; f < h.length; ++f)
              u("d%s={}", a.safeProp(h[f].name));
            u("}");
          }
          if (m.length) {
            for (u("if(o.defaults){"), f = 0; f < m.length; ++f) {
              var g = m[f], d = a.safeProp(g.name);
              if (g.resolvedType instanceof t)
                u("d%s=o.enums===String?%j:%j", d, g.resolvedType.valuesById[g.typeDefault], g.typeDefault);
              else if (g.long)
                u("if(util.Long){")("var n=new util.Long(%i,%i,%j)", g.typeDefault.low, g.typeDefault.high, g.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", d)("}else")("d%s=o.longs===String?%j:%i", d, g.typeDefault.toString(), g.typeDefault.toNumber());
              else if (g.bytes) {
                var l = "[" + Array.prototype.slice.call(g.typeDefault).join(",") + "]";
                u("if(o.bytes===String)d%s=%j", d, String.fromCharCode.apply(String, g.typeDefault))("else{")("d%s=%s", d, l)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", d, d)("}");
              } else
                u("d%s=%j", d, g.typeDefault);
            }
            u("}");
          }
          var E = !1;
          for (f = 0; f < n.length; ++f) {
            g = n[f];
            var T = o._fieldsArray.indexOf(g);
            d = a.safeProp(g.name), g.map ? (E || (E = !0, u("var ks2")), u("if(m%s&&(ks2=Object.keys(m%s)).length){", d, d)("d%s={}", d)("for(var j=0;j<ks2.length;++j){"), s(u, g, T, d + "[ks2[j]]")("}")) : g.repeated ? (u("if(m%s&&m%s.length){", d, d)("d%s=[]", d)("for(var j=0;j<m%s.length;++j){", d), s(u, g, T, d + "[j]")("}")) : (u("if(m%s!=null&&m.hasOwnProperty(%j)){", d, g.name), s(u, g, T, d), g.partOf && u("if(o.oneofs)")("d%s=%j", a.safeProp(g.partOf.name), g.name)), u("}");
          }
          return u("return d");
        };
      }, 5305: function(p, _, e) {
        p.exports = function(s) {
          var o = a.codegen(["r", "l"], s.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (s.fieldsArray.filter(function(f) {
            return f.map;
          }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
          s.group && o("if((t&7)===4)")("break"), o("switch(t>>>3){");
          for (var n = 0; n < s.fieldsArray.length; ++n) {
            var u = s._fieldsArray[n].resolve(), c = u.resolvedType instanceof r ? "int32" : u.type, h = "m" + a.safeProp(u.name);
            o("case %i:", u.id), u.map ? (o("if(%s===util.emptyObject)", h)("%s={}", h)("var c2 = r.uint32()+r.pos"), t.defaults[u.keyType] !== void 0 ? o("k=%j", t.defaults[u.keyType]) : o("k=null"), t.defaults[c] !== void 0 ? o("value=%j", t.defaults[c]) : o("value=null"), o("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", u.keyType)("case 2:"), t.basic[c] === void 0 ? o("value=types[%i].decode(r,r.uint32())", n) : o("value=r.%s()", c), o("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), t.long[u.keyType] !== void 0 ? o('%s[typeof k==="object"?util.longToHash(k):k]=value', h) : o("%s[k]=value", h)) : u.repeated ? (o("if(!(%s&&%s.length))", h, h)("%s=[]", h), t.packed[c] !== void 0 && o("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", h, c)("}else"), t.basic[c] === void 0 ? o(u.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", h, n) : o("%s.push(r.%s())", h, c)) : t.basic[c] === void 0 ? o(u.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", h, n) : o("%s=r.%s()", h, c), o("break");
          }
          for (o("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0; n < s._fieldsArray.length; ++n) {
            var m = s._fieldsArray[n];
            m.required && o("if(!m.hasOwnProperty(%j))", m.name)("throw util.ProtocolError(%j,{instance:m})", i(m));
          }
          return o("return m");
        };
        var r = e(7025), t = e(7063), a = e(9935);
        function i(s) {
          return "missing required '" + s.name + "'";
        }
      }, 4928: function(p, _, e) {
        p.exports = function(s) {
          for (var o, n = a.codegen(["m", "w"], s.name + "$encode")("if(!w)")("w=Writer.create()"), u = s.fieldsArray.slice().sort(a.compareFieldsById), c = 0; c < u.length; ++c) {
            var h = u[c].resolve(), m = s._fieldsArray.indexOf(h), f = h.resolvedType instanceof r ? "int32" : h.type, g = t.basic[f];
            o = "m" + a.safeProp(h.name), h.map ? (n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", o, h.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", o)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (h.id << 3 | 2) >>> 0, 8 | t.mapKey[h.keyType], h.keyType), g === void 0 ? n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", m, o) : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | g, f, o), n("}")("}")) : h.repeated ? (n("if(%s!=null&&%s.length){", o, o), h.packed && t.packed[f] !== void 0 ? n("w.uint32(%i).fork()", (h.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", o)("w.%s(%s[i])", f, o)("w.ldelim()") : (n("for(var i=0;i<%s.length;++i)", o), g === void 0 ? i(n, h, m, o + "[i]") : n("w.uint32(%i).%s(%s[i])", (h.id << 3 | g) >>> 0, f, o)), n("}")) : (h.optional && n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", o, h.name), g === void 0 ? i(n, h, m, o) : n("w.uint32(%i).%s(%s)", (h.id << 3 | g) >>> 0, f, o));
          }
          return n("return w");
        };
        var r = e(7025), t = e(7063), a = e(9935);
        function i(s, o, n, u) {
          return o.resolvedType.group ? s("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, u, (o.id << 3 | 3) >>> 0, (o.id << 3 | 4) >>> 0) : s("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, u, (o.id << 3 | 2) >>> 0);
        }
      }, 7025: function(p, _, e) {
        p.exports = i;
        var r = e(3243);
        ((i.prototype = Object.create(r.prototype)).constructor = i).className = "Enum";
        var t = e(9313), a = e(9935);
        function i(s, o, n, u, c) {
          if (r.call(this, s, n), o && typeof o != "object")
            throw TypeError("values must be an object");
          if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = u, this.comments = c || {}, this.reserved = void 0, o)
            for (var h = Object.keys(o), m = 0; m < h.length; ++m)
              typeof o[h[m]] == "number" && (this.valuesById[this.values[h[m]] = o[h[m]]] = h[m]);
        }
        i.fromJSON = function(s, o) {
          var n = new i(s, o.values, o.options, o.comment, o.comments);
          return n.reserved = o.reserved, n;
        }, i.prototype.toJSON = function(s) {
          var o = !!s && !!s.keepComments;
          return a.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", o ? this.comment : void 0, "comments", o ? this.comments : void 0]);
        }, i.prototype.add = function(s, o, n) {
          if (!a.isString(s))
            throw TypeError("name must be a string");
          if (!a.isInteger(o))
            throw TypeError("id must be an integer");
          if (this.values[s] !== void 0)
            throw Error("duplicate name '" + s + "' in " + this);
          if (this.isReservedId(o))
            throw Error("id " + o + " is reserved in " + this);
          if (this.isReservedName(s))
            throw Error("name '" + s + "' is reserved in " + this);
          if (this.valuesById[o] !== void 0) {
            if (!this.options || !this.options.allow_alias)
              throw Error("duplicate id " + o + " in " + this);
            this.values[s] = o;
          } else
            this.valuesById[this.values[s] = o] = s;
          return this.comments[s] = n || null, this;
        }, i.prototype.remove = function(s) {
          if (!a.isString(s))
            throw TypeError("name must be a string");
          var o = this.values[s];
          if (o == null)
            throw Error("name '" + s + "' does not exist in " + this);
          return delete this.valuesById[o], delete this.values[s], delete this.comments[s], this;
        }, i.prototype.isReservedId = function(s) {
          return t.isReservedId(this.reserved, s);
        }, i.prototype.isReservedName = function(s) {
          return t.isReservedName(this.reserved, s);
        };
      }, 3548: function(p, _, e) {
        p.exports = n;
        var r = e(3243);
        ((n.prototype = Object.create(r.prototype)).constructor = n).className = "Field";
        var t, a = e(7025), i = e(7063), s = e(9935), o = /^required|optional|repeated$/;
        function n(u, c, h, m, f, g, d) {
          if (s.isObject(m) ? (d = f, g = m, m = f = void 0) : s.isObject(f) && (d = g, g = f, f = void 0), r.call(this, u, g), !s.isInteger(c) || c < 0)
            throw TypeError("id must be a non-negative integer");
          if (!s.isString(h))
            throw TypeError("type must be a string");
          if (m !== void 0 && !o.test(m = m.toString().toLowerCase()))
            throw TypeError("rule must be a string rule");
          if (f !== void 0 && !s.isString(f))
            throw TypeError("extend must be a string");
          m === "proto3_optional" && (m = "optional"), this.rule = m && m !== "optional" ? m : void 0, this.type = h, this.id = c, this.extend = f || void 0, this.required = m === "required", this.optional = !this.required, this.repeated = m === "repeated", this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!s.Long && i.long[h] !== void 0, this.bytes = h === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = d;
        }
        n.fromJSON = function(u, c) {
          return new n(u, c.id, c.type, c.rule, c.extend, c.options, c.comment);
        }, Object.defineProperty(n.prototype, "packed", { get: function() {
          return this._packed === null && (this._packed = this.getOption("packed") !== !1), this._packed;
        } }), n.prototype.setOption = function(u, c, h) {
          return u === "packed" && (this._packed = null), r.prototype.setOption.call(this, u, c, h);
        }, n.prototype.toJSON = function(u) {
          var c = !!u && !!u.keepComments;
          return s.toObject(["rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", c ? this.comment : void 0]);
        }, n.prototype.resolve = function() {
          if (this.resolved)
            return this;
          if ((this.typeDefault = i.defaults[this.type]) === void 0 && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof t ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && this.options.default != null && (this.typeDefault = this.options.default, this.resolvedType instanceof a && typeof this.typeDefault == "string" && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (this.options.packed !== !0 && (this.options.packed === void 0 || !this.resolvedType || this.resolvedType instanceof a) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long)
            this.typeDefault = s.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze && Object.freeze(this.typeDefault);
          else if (this.bytes && typeof this.typeDefault == "string") {
            var u;
            s.base64.test(this.typeDefault) ? s.base64.decode(this.typeDefault, u = s.newBuffer(s.base64.length(this.typeDefault)), 0) : s.utf8.write(this.typeDefault, u = s.newBuffer(s.utf8.length(this.typeDefault)), 0), this.typeDefault = u;
          }
          return this.map ? this.defaultValue = s.emptyObject : this.repeated ? this.defaultValue = s.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof t && (this.parent.ctor.prototype[this.name] = this.defaultValue), r.prototype.resolve.call(this);
        }, n.d = function(u, c, h, m) {
          return typeof c == "function" ? c = s.decorateType(c).name : c && typeof c == "object" && (c = s.decorateEnum(c).name), function(f, g) {
            s.decorateType(f.constructor).add(new n(g, u, c, h, { default: m }));
          };
        }, n._configure = function(u) {
          t = u;
        };
      }, 8836: function(p, _, e) {
        var r = p.exports = e(9482);
        r.build = "light", r.load = function(t, a, i) {
          return typeof a == "function" ? (i = a, a = new r.Root()) : a || (a = new r.Root()), a.load(t, i);
        }, r.loadSync = function(t, a) {
          return a || (a = new r.Root()), a.loadSync(t);
        }, r.encoder = e(4928), r.decoder = e(5305), r.verifier = e(4497), r.converter = e(3996), r.ReflectionObject = e(3243), r.Namespace = e(9313), r.Root = e(9424), r.Enum = e(7025), r.Type = e(7645), r.Field = e(3548), r.OneOf = e(7598), r.MapField = e(6039), r.Service = e(7513), r.Method = e(4429), r.Message = e(8368), r.wrappers = e(1667), r.types = e(7063), r.util = e(9935), r.ReflectionObject._configure(r.Root), r.Namespace._configure(r.Type, r.Service, r.Enum), r.Root._configure(r.Type), r.Field._configure(r.Type);
      }, 9482: function(p, _, e) {
        var r = _;
        function t() {
          r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader);
        }
        r.build = "minimal", r.Writer = e(1173), r.BufferWriter = e(3155), r.Reader = e(1408), r.BufferReader = e(593), r.util = e(9693), r.rpc = e(5994), r.roots = e(5054), r.configure = t, t();
      }, 9050: function(p, _, e) {
        var r = p.exports = e(8836);
        r.build = "full", r.tokenize = e(626), r.parse = e(2228), r.common = e(2967), r.Root._configure(r.Type, r.parse, r.common);
      }, 6039: function(p, _, e) {
        p.exports = i;
        var r = e(3548);
        ((i.prototype = Object.create(r.prototype)).constructor = i).className = "MapField";
        var t = e(7063), a = e(9935);
        function i(s, o, n, u, c, h) {
          if (r.call(this, s, o, u, void 0, void 0, c, h), !a.isString(n))
            throw TypeError("keyType must be a string");
          this.keyType = n, this.resolvedKeyType = null, this.map = !0;
        }
        i.fromJSON = function(s, o) {
          return new i(s, o.id, o.keyType, o.type, o.options, o.comment);
        }, i.prototype.toJSON = function(s) {
          var o = !!s && !!s.keepComments;
          return a.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", o ? this.comment : void 0]);
        }, i.prototype.resolve = function() {
          if (this.resolved)
            return this;
          if (t.mapKey[this.keyType] === void 0)
            throw Error("invalid key type: " + this.keyType);
          return r.prototype.resolve.call(this);
        }, i.d = function(s, o, n) {
          return typeof n == "function" ? n = a.decorateType(n).name : n && typeof n == "object" && (n = a.decorateEnum(n).name), function(u, c) {
            a.decorateType(u.constructor).add(new i(c, s, o, n));
          };
        };
      }, 8368: function(p, _, e) {
        p.exports = t;
        var r = e(9693);
        function t(a) {
          if (a)
            for (var i = Object.keys(a), s = 0; s < i.length; ++s)
              this[i[s]] = a[i[s]];
        }
        t.create = function(a) {
          return this.$type.create(a);
        }, t.encode = function(a, i) {
          return this.$type.encode(a, i);
        }, t.encodeDelimited = function(a, i) {
          return this.$type.encodeDelimited(a, i);
        }, t.decode = function(a) {
          return this.$type.decode(a);
        }, t.decodeDelimited = function(a) {
          return this.$type.decodeDelimited(a);
        }, t.verify = function(a) {
          return this.$type.verify(a);
        }, t.fromObject = function(a) {
          return this.$type.fromObject(a);
        }, t.toObject = function(a, i) {
          return this.$type.toObject(a, i);
        }, t.prototype.toJSON = function() {
          return this.$type.toObject(this, r.toJSONOptions);
        };
      }, 4429: function(p, _, e) {
        p.exports = a;
        var r = e(3243);
        ((a.prototype = Object.create(r.prototype)).constructor = a).className = "Method";
        var t = e(9935);
        function a(i, s, o, n, u, c, h, m, f) {
          if (t.isObject(u) ? (h = u, u = c = void 0) : t.isObject(c) && (h = c, c = void 0), s !== void 0 && !t.isString(s))
            throw TypeError("type must be a string");
          if (!t.isString(o))
            throw TypeError("requestType must be a string");
          if (!t.isString(n))
            throw TypeError("responseType must be a string");
          r.call(this, i, h), this.type = s || "rpc", this.requestType = o, this.requestStream = !!u || void 0, this.responseType = n, this.responseStream = !!c || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = m, this.parsedOptions = f;
        }
        a.fromJSON = function(i, s) {
          return new a(i, s.type, s.requestType, s.responseType, s.requestStream, s.responseStream, s.options, s.comment, s.parsedOptions);
        }, a.prototype.toJSON = function(i) {
          var s = !!i && !!i.keepComments;
          return t.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", s ? this.comment : void 0, "parsedOptions", this.parsedOptions]);
        }, a.prototype.resolve = function() {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), r.prototype.resolve.call(this));
        };
      }, 9313: function(p, _, e) {
        p.exports = c;
        var r = e(3243);
        ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Namespace";
        var t, a, i, s = e(3548), o = e(7598), n = e(9935);
        function u(m, f) {
          if (m && m.length) {
            for (var g = {}, d = 0; d < m.length; ++d)
              g[m[d].name] = m[d].toJSON(f);
            return g;
          }
        }
        function c(m, f) {
          r.call(this, m, f), this.nested = void 0, this._nestedArray = null;
        }
        function h(m) {
          return m._nestedArray = null, m;
        }
        c.fromJSON = function(m, f) {
          return new c(m, f.options).addJSON(f.nested);
        }, c.arrayToJSON = u, c.isReservedId = function(m, f) {
          if (m) {
            for (var g = 0; g < m.length; ++g)
              if (typeof m[g] != "string" && m[g][0] <= f && m[g][1] > f)
                return !0;
          }
          return !1;
        }, c.isReservedName = function(m, f) {
          if (m) {
            for (var g = 0; g < m.length; ++g)
              if (m[g] === f)
                return !0;
          }
          return !1;
        }, Object.defineProperty(c.prototype, "nestedArray", { get: function() {
          return this._nestedArray || (this._nestedArray = n.toArray(this.nested));
        } }), c.prototype.toJSON = function(m) {
          return n.toObject(["options", this.options, "nested", u(this.nestedArray, m)]);
        }, c.prototype.addJSON = function(m) {
          if (m)
            for (var f, g = Object.keys(m), d = 0; d < g.length; ++d)
              f = m[g[d]], this.add((f.fields !== void 0 ? t.fromJSON : f.values !== void 0 ? i.fromJSON : f.methods !== void 0 ? a.fromJSON : f.id !== void 0 ? s.fromJSON : c.fromJSON)(g[d], f));
          return this;
        }, c.prototype.get = function(m) {
          return this.nested && this.nested[m] || null;
        }, c.prototype.getEnum = function(m) {
          if (this.nested && this.nested[m] instanceof i)
            return this.nested[m].values;
          throw Error("no such enum: " + m);
        }, c.prototype.add = function(m) {
          if (!(m instanceof s && m.extend !== void 0 || m instanceof t || m instanceof i || m instanceof a || m instanceof c || m instanceof o))
            throw TypeError("object must be a valid nested object");
          if (this.nested) {
            var f = this.get(m.name);
            if (f) {
              if (!(f instanceof c && m instanceof c) || f instanceof t || f instanceof a)
                throw Error("duplicate name '" + m.name + "' in " + this);
              for (var g = f.nestedArray, d = 0; d < g.length; ++d)
                m.add(g[d]);
              this.remove(f), this.nested || (this.nested = {}), m.setOptions(f.options, !0);
            }
          } else
            this.nested = {};
          return this.nested[m.name] = m, m.onAdd(this), h(this);
        }, c.prototype.remove = function(m) {
          if (!(m instanceof r))
            throw TypeError("object must be a ReflectionObject");
          if (m.parent !== this)
            throw Error(m + " is not a member of " + this);
          return delete this.nested[m.name], Object.keys(this.nested).length || (this.nested = void 0), m.onRemove(this), h(this);
        }, c.prototype.define = function(m, f) {
          if (n.isString(m))
            m = m.split(".");
          else if (!Array.isArray(m))
            throw TypeError("illegal path");
          if (m && m.length && m[0] === "")
            throw Error("path must be relative");
          for (var g = this; m.length > 0; ) {
            var d = m.shift();
            if (g.nested && g.nested[d]) {
              if (!((g = g.nested[d]) instanceof c))
                throw Error("path conflicts with non-namespace objects");
            } else
              g.add(g = new c(d));
          }
          return f && g.addJSON(f), g;
        }, c.prototype.resolveAll = function() {
          for (var m = this.nestedArray, f = 0; f < m.length; )
            m[f] instanceof c ? m[f++].resolveAll() : m[f++].resolve();
          return this.resolve();
        }, c.prototype.lookup = function(m, f, g) {
          if (typeof f == "boolean" ? (g = f, f = void 0) : f && !Array.isArray(f) && (f = [f]), n.isString(m) && m.length) {
            if (m === ".")
              return this.root;
            m = m.split(".");
          } else if (!m.length)
            return this;
          if (m[0] === "")
            return this.root.lookup(m.slice(1), f);
          var d = this.get(m[0]);
          if (d) {
            if (m.length === 1) {
              if (!f || f.indexOf(d.constructor) > -1)
                return d;
            } else if (d instanceof c && (d = d.lookup(m.slice(1), f, !0)))
              return d;
          } else
            for (var l = 0; l < this.nestedArray.length; ++l)
              if (this._nestedArray[l] instanceof c && (d = this._nestedArray[l].lookup(m, f, !0)))
                return d;
          return this.parent === null || g ? null : this.parent.lookup(m, f);
        }, c.prototype.lookupType = function(m) {
          var f = this.lookup(m, [t]);
          if (!f)
            throw Error("no such type: " + m);
          return f;
        }, c.prototype.lookupEnum = function(m) {
          var f = this.lookup(m, [i]);
          if (!f)
            throw Error("no such Enum '" + m + "' in " + this);
          return f;
        }, c.prototype.lookupTypeOrEnum = function(m) {
          var f = this.lookup(m, [t, i]);
          if (!f)
            throw Error("no such Type or Enum '" + m + "' in " + this);
          return f;
        }, c.prototype.lookupService = function(m) {
          var f = this.lookup(m, [a]);
          if (!f)
            throw Error("no such Service '" + m + "' in " + this);
          return f;
        }, c._configure = function(m, f, g) {
          t = m, a = f, i = g;
        };
      }, 3243: function(p, _, e) {
        p.exports = a, a.className = "ReflectionObject";
        var r, t = e(9935);
        function a(i, s) {
          if (!t.isString(i))
            throw TypeError("name must be a string");
          if (s && !t.isObject(s))
            throw TypeError("options must be an object");
          this.options = s, this.parsedOptions = null, this.name = i, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null;
        }
        Object.defineProperties(a.prototype, { root: { get: function() {
          for (var i = this; i.parent !== null; )
            i = i.parent;
          return i;
        } }, fullName: { get: function() {
          for (var i = [this.name], s = this.parent; s; )
            i.unshift(s.name), s = s.parent;
          return i.join(".");
        } } }), a.prototype.toJSON = function() {
          throw Error();
        }, a.prototype.onAdd = function(i) {
          this.parent && this.parent !== i && this.parent.remove(this), this.parent = i, this.resolved = !1;
          var s = i.root;
          s instanceof r && s._handleAdd(this);
        }, a.prototype.onRemove = function(i) {
          var s = i.root;
          s instanceof r && s._handleRemove(this), this.parent = null, this.resolved = !1;
        }, a.prototype.resolve = function() {
          return this.resolved || this.root instanceof r && (this.resolved = !0), this;
        }, a.prototype.getOption = function(i) {
          if (this.options)
            return this.options[i];
        }, a.prototype.setOption = function(i, s, o) {
          return o && this.options && this.options[i] !== void 0 || ((this.options || (this.options = {}))[i] = s), this;
        }, a.prototype.setParsedOption = function(i, s, o) {
          this.parsedOptions || (this.parsedOptions = []);
          var n = this.parsedOptions;
          if (o) {
            var u = n.find(function(m) {
              return Object.prototype.hasOwnProperty.call(m, i);
            });
            if (u) {
              var c = u[i];
              t.setProperty(c, o, s);
            } else
              (u = {})[i] = t.setProperty({}, o, s), n.push(u);
          } else {
            var h = {};
            h[i] = s, n.push(h);
          }
          return this;
        }, a.prototype.setOptions = function(i, s) {
          if (i)
            for (var o = Object.keys(i), n = 0; n < o.length; ++n)
              this.setOption(o[n], i[o[n]], s);
          return this;
        }, a.prototype.toString = function() {
          var i = this.constructor.className, s = this.fullName;
          return s.length ? i + " " + s : i;
        }, a._configure = function(i) {
          r = i;
        };
      }, 7598: function(p, _, e) {
        p.exports = i;
        var r = e(3243);
        ((i.prototype = Object.create(r.prototype)).constructor = i).className = "OneOf";
        var t = e(3548), a = e(9935);
        function i(o, n, u, c) {
          if (Array.isArray(n) || (u = n, n = void 0), r.call(this, o, u), n !== void 0 && !Array.isArray(n))
            throw TypeError("fieldNames must be an Array");
          this.oneof = n || [], this.fieldsArray = [], this.comment = c;
        }
        function s(o) {
          if (o.parent)
            for (var n = 0; n < o.fieldsArray.length; ++n)
              o.fieldsArray[n].parent || o.parent.add(o.fieldsArray[n]);
        }
        i.fromJSON = function(o, n) {
          return new i(o, n.oneof, n.options, n.comment);
        }, i.prototype.toJSON = function(o) {
          var n = !!o && !!o.keepComments;
          return a.toObject(["options", this.options, "oneof", this.oneof, "comment", n ? this.comment : void 0]);
        }, i.prototype.add = function(o) {
          if (!(o instanceof t))
            throw TypeError("field must be a Field");
          return o.parent && o.parent !== this.parent && o.parent.remove(o), this.oneof.push(o.name), this.fieldsArray.push(o), o.partOf = this, s(this), this;
        }, i.prototype.remove = function(o) {
          if (!(o instanceof t))
            throw TypeError("field must be a Field");
          var n = this.fieldsArray.indexOf(o);
          if (n < 0)
            throw Error(o + " is not a member of " + this);
          return this.fieldsArray.splice(n, 1), (n = this.oneof.indexOf(o.name)) > -1 && this.oneof.splice(n, 1), o.partOf = null, this;
        }, i.prototype.onAdd = function(o) {
          r.prototype.onAdd.call(this, o);
          for (var n = 0; n < this.oneof.length; ++n) {
            var u = o.get(this.oneof[n]);
            u && !u.partOf && (u.partOf = this, this.fieldsArray.push(u));
          }
          s(this);
        }, i.prototype.onRemove = function(o) {
          for (var n, u = 0; u < this.fieldsArray.length; ++u)
            (n = this.fieldsArray[u]).parent && n.parent.remove(n);
          r.prototype.onRemove.call(this, o);
        }, i.d = function() {
          for (var o = new Array(arguments.length), n = 0; n < arguments.length; )
            o[n] = arguments[n++];
          return function(u, c) {
            a.decorateType(u.constructor).add(new i(c, o)), Object.defineProperty(u, c, { get: a.oneOfGetter(o), set: a.oneOfSetter(o) });
          };
        };
      }, 2228: function(p, _, e) {
        p.exports = v, v.filename = null, v.defaults = { keepCase: !1 };
        var r = e(626), t = e(9424), a = e(7645), i = e(3548), s = e(6039), o = e(7598), n = e(7025), u = e(7513), c = e(4429), h = e(7063), m = e(9935), f = /^[1-9][0-9]*$/, g = /^-?[1-9][0-9]*$/, d = /^0[x][0-9a-fA-F]+$/, l = /^-?0[x][0-9a-fA-F]+$/, E = /^0[0-7]+$/, T = /^-?0[0-7]+$/, I = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, O = /^[a-zA-Z_][a-zA-Z_0-9]*$/, C = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, N = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function v(y, A, x) {
          A instanceof t || (x = A, A = new t()), x || (x = v.defaults);
          var j, P, W, Z, ee, G = x.preferTrailingComment || !1, le = r(y, x.alternateCommentMode || !1), ce = le.next, _e = le.push, Ue = le.peek, ve = le.skip, ye = le.cmnt, Pe = !0, We = !1, ke = A, Ve = x.keepCase ? function(Oe) {
            return Oe;
          } : m.camelCase;
          function se(Oe, w, z) {
            var re = v.filename;
            return z || (v.filename = null), Error("illegal " + (w || "token") + " '" + Oe + "' (" + (re ? re + ", " : "") + "line " + le.line + ")");
          }
          function He() {
            var Oe, w = [];
            do {
              if ((Oe = ce()) !== '"' && Oe !== "'")
                throw se(Oe);
              w.push(ce()), ve(Oe), Oe = Ue();
            } while (Oe === '"' || Oe === "'");
            return w.join("");
          }
          function Xe(Oe) {
            var w = ce();
            switch (w) {
              case "'":
              case '"':
                return _e(w), He();
              case "true":
              case "TRUE":
                return !0;
              case "false":
              case "FALSE":
                return !1;
            }
            try {
              return function(z, re) {
                var q = 1;
                switch (z.charAt(0) === "-" && (q = -1, z = z.substring(1)), z) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return q * (1 / 0);
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (f.test(z))
                  return q * parseInt(z, 10);
                if (d.test(z))
                  return q * parseInt(z, 16);
                if (E.test(z))
                  return q * parseInt(z, 8);
                if (I.test(z))
                  return q * parseFloat(z);
                throw se(z, "number", !0);
              }(w);
            } catch {
              if (Oe && C.test(w))
                return w;
              throw se(w, "value");
            }
          }
          function nt(Oe, w) {
            var z, re;
            do
              !w || (z = Ue()) !== '"' && z !== "'" ? Oe.push([re = te(ce()), ve("to", !0) ? te(ce()) : re]) : Oe.push(He());
            while (ve(",", !0));
            ve(";");
          }
          function te(Oe, w) {
            switch (Oe) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }
            if (!w && Oe.charAt(0) === "-")
              throw se(Oe, "id");
            if (g.test(Oe))
              return parseInt(Oe, 10);
            if (l.test(Oe))
              return parseInt(Oe, 16);
            if (T.test(Oe))
              return parseInt(Oe, 8);
            throw se(Oe, "id");
          }
          function $e() {
            if (j !== void 0)
              throw se("package");
            if (j = ce(), !C.test(j))
              throw se(j, "name");
            ke = ke.define(j), ve(";");
          }
          function Me() {
            var Oe, w = Ue();
            switch (w) {
              case "weak":
                Oe = W || (W = []), ce();
                break;
              case "public":
                ce();
              default:
                Oe = P || (P = []);
            }
            w = He(), ve(";"), Oe.push(w);
          }
          function rt() {
            if (ve("="), Z = He(), !(We = Z === "proto3") && Z !== "proto2")
              throw se(Z, "syntax");
            ve(";");
          }
          function ot(Oe, w) {
            switch (w) {
              case "option":
                return Ne(Oe, w), ve(";"), !0;
              case "message":
                return function(z, re) {
                  if (!O.test(re = ce()))
                    throw se(re, "type name");
                  var q = new a(re);
                  it(q, function(ie) {
                    if (!ot(q, ie))
                      switch (ie) {
                        case "map":
                          (function(Ie) {
                            ve("<");
                            var pe = ce();
                            if (h.mapKey[pe] === void 0)
                              throw se(pe, "type");
                            ve(",");
                            var fe = ce();
                            if (!C.test(fe))
                              throw se(fe, "type");
                            ve(">");
                            var S = ce();
                            if (!O.test(S))
                              throw se(S, "name");
                            ve("=");
                            var X = new s(Ve(S), te(ce()), pe, fe);
                            it(X, function(B) {
                              if (B !== "option")
                                throw se(B);
                              Ne(X, B), ve(";");
                            }, function() {
                              qe(X);
                            }), Ie.add(X);
                          })(q);
                          break;
                        case "required":
                        case "repeated":
                          ct(q, ie);
                          break;
                        case "optional":
                          ct(q, We ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          (function(Ie, pe) {
                            if (!O.test(pe = ce()))
                              throw se(pe, "name");
                            var fe = new o(Ve(pe));
                            it(fe, function(S) {
                              S === "option" ? (Ne(fe, S), ve(";")) : (_e(S), ct(fe, "optional"));
                            }), Ie.add(fe);
                          })(q, ie);
                          break;
                        case "extensions":
                          nt(q.extensions || (q.extensions = []));
                          break;
                        case "reserved":
                          nt(q.reserved || (q.reserved = []), !0);
                          break;
                        default:
                          if (!We || !C.test(ie))
                            throw se(ie);
                          _e(ie), ct(q, "optional");
                      }
                  }), z.add(q);
                }(Oe, w), !0;
              case "enum":
                return function(z, re) {
                  if (!O.test(re = ce()))
                    throw se(re, "name");
                  var q = new n(re);
                  it(q, function(ie) {
                    switch (ie) {
                      case "option":
                        Ne(q, ie), ve(";");
                        break;
                      case "reserved":
                        nt(q.reserved || (q.reserved = []), !0);
                        break;
                      default:
                        (function(Ie, pe) {
                          if (!O.test(pe))
                            throw se(pe, "name");
                          ve("=");
                          var fe = te(ce(), !0), S = {};
                          it(S, function(X) {
                            if (X !== "option")
                              throw se(X);
                            Ne(S, X), ve(";");
                          }, function() {
                            qe(S);
                          }), Ie.add(pe, fe, S.comment);
                        })(q, ie);
                    }
                  }), z.add(q);
                }(Oe, w), !0;
              case "service":
                return function(z, re) {
                  if (!O.test(re = ce()))
                    throw se(re, "service name");
                  var q = new u(re);
                  it(q, function(ie) {
                    if (!ot(q, ie)) {
                      if (ie !== "rpc")
                        throw se(ie);
                      (function(Ie, pe) {
                        var fe = ye(), S = pe;
                        if (!O.test(pe = ce()))
                          throw se(pe, "name");
                        var X, B, ue, K, de = pe;
                        if (ve("("), ve("stream", !0) && (B = !0), !C.test(pe = ce()) || (X = pe, ve(")"), ve("returns"), ve("("), ve("stream", !0) && (K = !0), !C.test(pe = ce())))
                          throw se(pe);
                        ue = pe, ve(")");
                        var Ee = new c(de, S, X, ue, B, K);
                        Ee.comment = fe, it(Ee, function(Se) {
                          if (Se !== "option")
                            throw se(Se);
                          Ne(Ee, Se), ve(";");
                        }), Ie.add(Ee);
                      })(q, ie);
                    }
                  }), z.add(q);
                }(Oe, w), !0;
              case "extend":
                return function(z, re) {
                  if (!C.test(re = ce()))
                    throw se(re, "reference");
                  var q = re;
                  it(null, function(ie) {
                    switch (ie) {
                      case "required":
                      case "repeated":
                        ct(z, ie, q);
                        break;
                      case "optional":
                        ct(z, We ? "proto3_optional" : "optional", q);
                        break;
                      default:
                        if (!We || !C.test(ie))
                          throw se(ie);
                        _e(ie), ct(z, "optional", q);
                    }
                  });
                }(Oe, w), !0;
            }
            return !1;
          }
          function it(Oe, w, z) {
            var re = le.line;
            if (Oe && (typeof Oe.comment != "string" && (Oe.comment = ye()), Oe.filename = v.filename), ve("{", !0)) {
              for (var q; (q = ce()) !== "}"; )
                w(q);
              ve(";", !0);
            } else
              z && z(), ve(";"), Oe && (typeof Oe.comment != "string" || G) && (Oe.comment = ye(re) || Oe.comment);
          }
          function ct(Oe, w, z) {
            var re = ce();
            if (re !== "group") {
              if (!C.test(re))
                throw se(re, "type");
              var q = ce();
              if (!O.test(q))
                throw se(q, "name");
              q = Ve(q), ve("=");
              var ie = new i(q, te(ce()), re, w, z);
              if (it(ie, function(pe) {
                if (pe !== "option")
                  throw se(pe);
                Ne(ie, pe), ve(";");
              }, function() {
                qe(ie);
              }), w === "proto3_optional") {
                var Ie = new o("_" + q);
                ie.setOption("proto3_optional", !0), Ie.add(ie), Oe.add(Ie);
              } else
                Oe.add(ie);
              We || !ie.repeated || h.packed[re] === void 0 && h.basic[re] !== void 0 || ie.setOption("packed", !1, !0);
            } else
              (function(pe, fe) {
                var S = ce();
                if (!O.test(S))
                  throw se(S, "name");
                var X = m.lcFirst(S);
                S === X && (S = m.ucFirst(S)), ve("=");
                var B = te(ce()), ue = new a(S);
                ue.group = !0;
                var K = new i(X, B, S, fe);
                K.filename = v.filename, it(ue, function(de) {
                  switch (de) {
                    case "option":
                      Ne(ue, de), ve(";");
                      break;
                    case "required":
                    case "repeated":
                      ct(ue, de);
                      break;
                    case "optional":
                      ct(ue, We ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw se(de);
                  }
                }), pe.add(ue).add(K);
              })(Oe, w);
          }
          function Ne(Oe, w) {
            var z = ve("(", !0);
            if (!C.test(w = ce()))
              throw se(w, "name");
            var re, q = w, ie = q;
            z && (ve(")"), ie = q = "(" + q + ")", w = Ue(), N.test(w) && (re = w.substr(1), q += w, ce())), ve("="), function(Ie, pe, fe, S) {
              Ie.setParsedOption && Ie.setParsedOption(pe, fe, S);
            }(Oe, ie, ze(Oe, q), re);
          }
          function ze(Oe, w) {
            if (ve("{", !0)) {
              for (var z = {}; !ve("}", !0); ) {
                if (!O.test(ee = ce()))
                  throw se(ee, "name");
                var re, q = ee;
                Ue() === "{" ? re = ze(Oe, w + "." + ee) : (ve(":"), Ue() === "{" ? re = ze(Oe, w + "." + ee) : (re = Xe(!0), Ye(Oe, w + "." + ee, re)));
                var ie = z[q];
                ie && (re = [].concat(ie).concat(re)), z[q] = re, ve(",", !0);
              }
              return z;
            }
            var Ie = Xe(!0);
            return Ye(Oe, w, Ie), Ie;
          }
          function Ye(Oe, w, z) {
            Oe.setOption && Oe.setOption(w, z);
          }
          function qe(Oe) {
            if (ve("[", !0)) {
              do
                Ne(Oe, "option");
              while (ve(",", !0));
              ve("]");
            }
            return Oe;
          }
          for (; (ee = ce()) !== null; )
            switch (ee) {
              case "package":
                if (!Pe)
                  throw se(ee);
                $e();
                break;
              case "import":
                if (!Pe)
                  throw se(ee);
                Me();
                break;
              case "syntax":
                if (!Pe)
                  throw se(ee);
                rt();
                break;
              case "option":
                Ne(ke, ee), ve(";");
                break;
              default:
                if (ot(ke, ee)) {
                  Pe = !1;
                  continue;
                }
                throw se(ee);
            }
          return v.filename = null, { package: j, imports: P, weakImports: W, syntax: Z, root: A };
        }
      }, 1408: function(p, _, e) {
        p.exports = o;
        var r, t = e(9693), a = t.LongBits, i = t.utf8;
        function s(g, d) {
          return RangeError("index out of range: " + g.pos + " + " + (d || 1) + " > " + g.len);
        }
        function o(g) {
          this.buf = g, this.pos = 0, this.len = g.length;
        }
        var n, u = typeof Uint8Array < "u" ? function(g) {
          if (g instanceof Uint8Array || Array.isArray(g))
            return new o(g);
          throw Error("illegal buffer");
        } : function(g) {
          if (Array.isArray(g))
            return new o(g);
          throw Error("illegal buffer");
        }, c = function() {
          return t.Buffer ? function(g) {
            return (o.create = function(d) {
              return t.Buffer.isBuffer(d) ? new r(d) : u(d);
            })(g);
          } : u;
        };
        function h() {
          var g = new a(0, 0), d = 0;
          if (!(this.len - this.pos > 4)) {
            for (; d < 3; ++d) {
              if (this.pos >= this.len)
                throw s(this);
              if (g.lo = (g.lo | (127 & this.buf[this.pos]) << 7 * d) >>> 0, this.buf[this.pos++] < 128)
                return g;
            }
            return g.lo = (g.lo | (127 & this.buf[this.pos++]) << 7 * d) >>> 0, g;
          }
          for (; d < 4; ++d)
            if (g.lo = (g.lo | (127 & this.buf[this.pos]) << 7 * d) >>> 0, this.buf[this.pos++] < 128)
              return g;
          if (g.lo = (g.lo | (127 & this.buf[this.pos]) << 28) >>> 0, g.hi = (g.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128)
            return g;
          if (d = 0, this.len - this.pos > 4) {
            for (; d < 5; ++d)
              if (g.hi = (g.hi | (127 & this.buf[this.pos]) << 7 * d + 3) >>> 0, this.buf[this.pos++] < 128)
                return g;
          } else
            for (; d < 5; ++d) {
              if (this.pos >= this.len)
                throw s(this);
              if (g.hi = (g.hi | (127 & this.buf[this.pos]) << 7 * d + 3) >>> 0, this.buf[this.pos++] < 128)
                return g;
            }
          throw Error("invalid varint encoding");
        }
        function m(g, d) {
          return (g[d - 4] | g[d - 3] << 8 | g[d - 2] << 16 | g[d - 1] << 24) >>> 0;
        }
        function f() {
          if (this.pos + 8 > this.len)
            throw s(this, 8);
          return new a(m(this.buf, this.pos += 4), m(this.buf, this.pos += 4));
        }
        o.create = c(), o.prototype._slice = t.Array.prototype.subarray || t.Array.prototype.slice, o.prototype.uint32 = (n = 4294967295, function() {
          if (n = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (n = (n | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) || (n = (n | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) || (n = (n | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) || (n = (n | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128))
            return n;
          if ((this.pos += 5) > this.len)
            throw this.pos = this.len, s(this, 10);
          return n;
        }), o.prototype.int32 = function() {
          return 0 | this.uint32();
        }, o.prototype.sint32 = function() {
          var g = this.uint32();
          return g >>> 1 ^ -(1 & g) | 0;
        }, o.prototype.bool = function() {
          return this.uint32() !== 0;
        }, o.prototype.fixed32 = function() {
          if (this.pos + 4 > this.len)
            throw s(this, 4);
          return m(this.buf, this.pos += 4);
        }, o.prototype.sfixed32 = function() {
          if (this.pos + 4 > this.len)
            throw s(this, 4);
          return 0 | m(this.buf, this.pos += 4);
        }, o.prototype.float = function() {
          if (this.pos + 4 > this.len)
            throw s(this, 4);
          var g = t.float.readFloatLE(this.buf, this.pos);
          return this.pos += 4, g;
        }, o.prototype.double = function() {
          if (this.pos + 8 > this.len)
            throw s(this, 4);
          var g = t.float.readDoubleLE(this.buf, this.pos);
          return this.pos += 8, g;
        }, o.prototype.bytes = function() {
          var g = this.uint32(), d = this.pos, l = this.pos + g;
          if (l > this.len)
            throw s(this, g);
          return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(d, l) : d === l ? new this.buf.constructor(0) : this._slice.call(this.buf, d, l);
        }, o.prototype.string = function() {
          var g = this.bytes();
          return i.read(g, 0, g.length);
        }, o.prototype.skip = function(g) {
          if (typeof g == "number") {
            if (this.pos + g > this.len)
              throw s(this, g);
            this.pos += g;
          } else
            do
              if (this.pos >= this.len)
                throw s(this);
            while (128 & this.buf[this.pos++]);
          return this;
        }, o.prototype.skipType = function(g) {
          switch (g) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; (g = 7 & this.uint32()) != 4; )
                this.skipType(g);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + g + " at offset " + this.pos);
          }
          return this;
        }, o._configure = function(g) {
          r = g, o.create = c(), r._configure();
          var d = t.Long ? "toLong" : "toNumber";
          t.merge(o.prototype, { int64: function() {
            return h.call(this)[d](!1);
          }, uint64: function() {
            return h.call(this)[d](!0);
          }, sint64: function() {
            return h.call(this).zzDecode()[d](!1);
          }, fixed64: function() {
            return f.call(this)[d](!0);
          }, sfixed64: function() {
            return f.call(this)[d](!1);
          } });
        };
      }, 593: function(p, _, e) {
        p.exports = a;
        var r = e(1408);
        (a.prototype = Object.create(r.prototype)).constructor = a;
        var t = e(9693);
        function a(i) {
          r.call(this, i);
        }
        a._configure = function() {
          t.Buffer && (a.prototype._slice = t.Buffer.prototype.slice);
        }, a.prototype.string = function() {
          var i = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
        }, a._configure();
      }, 9424: function(p, _, e) {
        p.exports = c;
        var r = e(9313);
        ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Root";
        var t, a, i, s = e(3548), o = e(7025), n = e(7598), u = e(9935);
        function c(g) {
          r.call(this, "", g), this.deferred = [], this.files = [];
        }
        function h() {
        }
        c.fromJSON = function(g, d) {
          return d || (d = new c()), g.options && d.setOptions(g.options), d.addJSON(g.nested);
        }, c.prototype.resolvePath = u.path.resolve, c.prototype.fetch = u.fetch, c.prototype.load = function g(d, l, E) {
          typeof l == "function" && (E = l, l = void 0);
          var T = this;
          if (!E)
            return u.asPromise(g, T, d, l);
          var I = E === h;
          function O(j, P) {
            if (E) {
              var W = E;
              if (E = null, I)
                throw j;
              W(j, P);
            }
          }
          function C(j) {
            var P = j.lastIndexOf("google/protobuf/");
            if (P > -1) {
              var W = j.substring(P);
              if (W in i)
                return W;
            }
            return null;
          }
          function N(j, P) {
            try {
              if (u.isString(P) && P.charAt(0) === "{" && (P = JSON.parse(P)), u.isString(P)) {
                a.filename = j;
                var W, Z = a(P, T, l), ee = 0;
                if (Z.imports)
                  for (; ee < Z.imports.length; ++ee)
                    (W = C(Z.imports[ee]) || T.resolvePath(j, Z.imports[ee])) && v(W);
                if (Z.weakImports)
                  for (ee = 0; ee < Z.weakImports.length; ++ee)
                    (W = C(Z.weakImports[ee]) || T.resolvePath(j, Z.weakImports[ee])) && v(W, !0);
              } else
                T.setOptions(P.options).addJSON(P.nested);
            } catch (G) {
              O(G);
            }
            I || y || O(null, T);
          }
          function v(j, P) {
            if (!(T.files.indexOf(j) > -1))
              if (T.files.push(j), j in i)
                I ? N(j, i[j]) : (++y, setTimeout(function() {
                  --y, N(j, i[j]);
                }));
              else if (I) {
                var W;
                try {
                  W = u.fs.readFileSync(j).toString("utf8");
                } catch (Z) {
                  return void (P || O(Z));
                }
                N(j, W);
              } else
                ++y, T.fetch(j, function(Z, ee) {
                  --y, E && (Z ? P ? y || O(null, T) : O(Z) : N(j, ee));
                });
          }
          var y = 0;
          u.isString(d) && (d = [d]);
          for (var A, x = 0; x < d.length; ++x)
            (A = T.resolvePath("", d[x])) && v(A);
          if (I)
            return T;
          y || O(null, T);
        }, c.prototype.loadSync = function(g, d) {
          if (!u.isNode)
            throw Error("not supported");
          return this.load(g, d, h);
        }, c.prototype.resolveAll = function() {
          if (this.deferred.length)
            throw Error("unresolvable extensions: " + this.deferred.map(function(g) {
              return "'extend " + g.extend + "' in " + g.parent.fullName;
            }).join(", "));
          return r.prototype.resolveAll.call(this);
        };
        var m = /^[A-Z]/;
        function f(g, d) {
          var l = d.parent.lookup(d.extend);
          if (l) {
            var E = new s(d.fullName, d.id, d.type, d.rule, void 0, d.options);
            return E.declaringField = d, d.extensionField = E, l.add(E), !0;
          }
          return !1;
        }
        c.prototype._handleAdd = function(g) {
          if (g instanceof s)
            g.extend === void 0 || g.extensionField || f(0, g) || this.deferred.push(g);
          else if (g instanceof o)
            m.test(g.name) && (g.parent[g.name] = g.values);
          else if (!(g instanceof n)) {
            if (g instanceof t)
              for (var d = 0; d < this.deferred.length; )
                f(0, this.deferred[d]) ? this.deferred.splice(d, 1) : ++d;
            for (var l = 0; l < g.nestedArray.length; ++l)
              this._handleAdd(g._nestedArray[l]);
            m.test(g.name) && (g.parent[g.name] = g);
          }
        }, c.prototype._handleRemove = function(g) {
          if (g instanceof s) {
            if (g.extend !== void 0)
              if (g.extensionField)
                g.extensionField.parent.remove(g.extensionField), g.extensionField = null;
              else {
                var d = this.deferred.indexOf(g);
                d > -1 && this.deferred.splice(d, 1);
              }
          } else if (g instanceof o)
            m.test(g.name) && delete g.parent[g.name];
          else if (g instanceof r) {
            for (var l = 0; l < g.nestedArray.length; ++l)
              this._handleRemove(g._nestedArray[l]);
            m.test(g.name) && delete g.parent[g.name];
          }
        }, c._configure = function(g, d, l) {
          t = g, a = d, i = l;
        };
      }, 5054: function(p) {
        p.exports = {};
      }, 5994: function(p, _, e) {
        _.Service = e(7948);
      }, 7948: function(p, _, e) {
        p.exports = t;
        var r = e(9693);
        function t(a, i, s) {
          if (typeof a != "function")
            throw TypeError("rpcImpl must be a function");
          r.EventEmitter.call(this), this.rpcImpl = a, this.requestDelimited = !!i, this.responseDelimited = !!s;
        }
        (t.prototype = Object.create(r.EventEmitter.prototype)).constructor = t, t.prototype.rpcCall = function a(i, s, o, n, u) {
          if (!n)
            throw TypeError("request must be specified");
          var c = this;
          if (!u)
            return r.asPromise(a, c, i, s, o, n);
          if (c.rpcImpl)
            try {
              return c.rpcImpl(i, s[c.requestDelimited ? "encodeDelimited" : "encode"](n).finish(), function(h, m) {
                if (h)
                  return c.emit("error", h, i), u(h);
                if (m !== null) {
                  if (!(m instanceof o))
                    try {
                      m = o[c.responseDelimited ? "decodeDelimited" : "decode"](m);
                    } catch (f) {
                      return c.emit("error", f, i), u(f);
                    }
                  return c.emit("data", m, i), u(null, m);
                }
                c.end(!0);
              });
            } catch (h) {
              return c.emit("error", h, i), void setTimeout(function() {
                u(h);
              }, 0);
            }
          else
            setTimeout(function() {
              u(Error("already ended"));
            }, 0);
        }, t.prototype.end = function(a) {
          return this.rpcImpl && (a || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
        };
      }, 7513: function(p, _, e) {
        p.exports = s;
        var r = e(9313);
        ((s.prototype = Object.create(r.prototype)).constructor = s).className = "Service";
        var t = e(4429), a = e(9935), i = e(5994);
        function s(n, u) {
          r.call(this, n, u), this.methods = {}, this._methodsArray = null;
        }
        function o(n) {
          return n._methodsArray = null, n;
        }
        s.fromJSON = function(n, u) {
          var c = new s(n, u.options);
          if (u.methods)
            for (var h = Object.keys(u.methods), m = 0; m < h.length; ++m)
              c.add(t.fromJSON(h[m], u.methods[h[m]]));
          return u.nested && c.addJSON(u.nested), c.comment = u.comment, c;
        }, s.prototype.toJSON = function(n) {
          var u = r.prototype.toJSON.call(this, n), c = !!n && !!n.keepComments;
          return a.toObject(["options", u && u.options || void 0, "methods", r.arrayToJSON(this.methodsArray, n) || {}, "nested", u && u.nested || void 0, "comment", c ? this.comment : void 0]);
        }, Object.defineProperty(s.prototype, "methodsArray", { get: function() {
          return this._methodsArray || (this._methodsArray = a.toArray(this.methods));
        } }), s.prototype.get = function(n) {
          return this.methods[n] || r.prototype.get.call(this, n);
        }, s.prototype.resolveAll = function() {
          for (var n = this.methodsArray, u = 0; u < n.length; ++u)
            n[u].resolve();
          return r.prototype.resolve.call(this);
        }, s.prototype.add = function(n) {
          if (this.get(n.name))
            throw Error("duplicate name '" + n.name + "' in " + this);
          return n instanceof t ? (this.methods[n.name] = n, n.parent = this, o(this)) : r.prototype.add.call(this, n);
        }, s.prototype.remove = function(n) {
          if (n instanceof t) {
            if (this.methods[n.name] !== n)
              throw Error(n + " is not a member of " + this);
            return delete this.methods[n.name], n.parent = null, o(this);
          }
          return r.prototype.remove.call(this, n);
        }, s.prototype.create = function(n, u, c) {
          for (var h, m = new i.Service(n, u, c), f = 0; f < this.methodsArray.length; ++f) {
            var g = a.lcFirst((h = this._methodsArray[f]).resolve().name).replace(/[^$\w_]/g, "");
            m[g] = a.codegen(["r", "c"], a.isReserved(g) ? g + "_" : g)("return this.rpcCall(m,q,s,r,c)")({ m: h, q: h.resolvedRequestType.ctor, s: h.resolvedResponseType.ctor });
          }
          return m;
        };
      }, 626: function(p) {
        p.exports = c;
        var _ = /[\s{}=;:[\],'"()<>]/g, e = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, r = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, t = /^ *[*/]+ */, a = /^\s*\*?\/*/, i = /\n/g, s = /\s/, o = /\\(.?)/g, n = { 0: "\0", r: "\r", n: `
`, t: "	" };
        function u(h) {
          return h.replace(o, function(m, f) {
            switch (f) {
              case "\\":
              case "":
                return f;
              default:
                return n[f] || "";
            }
          });
        }
        function c(h, m) {
          h = h.toString();
          var f = 0, g = h.length, d = 1, l = null, E = null, T = 0, I = !1, O = !1, C = [], N = null;
          function v(ee) {
            return Error("illegal " + ee + " (line " + d + ")");
          }
          function y(ee) {
            return h.charAt(ee);
          }
          function A(ee, G, le) {
            l = h.charAt(ee++), T = d, I = !1, O = le;
            var ce, _e = ee - (m ? 2 : 3);
            do
              if (--_e < 0 || (ce = h.charAt(_e)) === `
`) {
                I = !0;
                break;
              }
            while (ce === " " || ce === "	");
            for (var Ue = h.substring(ee, G).split(i), ve = 0; ve < Ue.length; ++ve)
              Ue[ve] = Ue[ve].replace(m ? a : t, "").trim();
            E = Ue.join(`
`).trim();
          }
          function x(ee) {
            var G = j(ee), le = h.substring(ee, G);
            return /^\s*\/{1,2}/.test(le);
          }
          function j(ee) {
            for (var G = ee; G < g && y(G) !== `
`; )
              G++;
            return G;
          }
          function P() {
            if (C.length > 0)
              return C.shift();
            if (N)
              return function() {
                var Pe = N === "'" ? r : e;
                Pe.lastIndex = f - 1;
                var We = Pe.exec(h);
                if (!We)
                  throw v("string");
                return f = Pe.lastIndex, W(N), N = null, u(We[1]);
              }();
            var ee, G, le, ce, _e, Ue = f === 0;
            do {
              if (f === g)
                return null;
              for (ee = !1; s.test(le = y(f)); )
                if (le === `
` && (Ue = !0, ++d), ++f === g)
                  return null;
              if (y(f) === "/") {
                if (++f === g)
                  throw v("comment");
                if (y(f) === "/")
                  if (m) {
                    if (ce = f, _e = !1, x(f)) {
                      _e = !0;
                      do {
                        if ((f = j(f)) === g)
                          break;
                        f++;
                      } while (x(f));
                    } else
                      f = Math.min(g, j(f) + 1);
                    _e && A(ce, f, Ue), d++, ee = !0;
                  } else {
                    for (_e = y(ce = f + 1) === "/"; y(++f) !== `
`; )
                      if (f === g)
                        return null;
                    ++f, _e && A(ce, f - 1, Ue), ++d, ee = !0;
                  }
                else {
                  if ((le = y(f)) !== "*")
                    return "/";
                  ce = f + 1, _e = m || y(ce) === "*";
                  do {
                    if (le === `
` && ++d, ++f === g)
                      throw v("comment");
                    G = le, le = y(f);
                  } while (G !== "*" || le !== "/");
                  ++f, _e && A(ce, f - 2, Ue), ee = !0;
                }
              }
            } while (ee);
            var ve = f;
            if (_.lastIndex = 0, !_.test(y(ve++)))
              for (; ve < g && !_.test(y(ve)); )
                ++ve;
            var ye = h.substring(f, f = ve);
            return ye !== '"' && ye !== "'" || (N = ye), ye;
          }
          function W(ee) {
            C.push(ee);
          }
          function Z() {
            if (!C.length) {
              var ee = P();
              if (ee === null)
                return null;
              W(ee);
            }
            return C[0];
          }
          return Object.defineProperty({ next: P, peek: Z, push: W, skip: function(ee, G) {
            var le = Z();
            if (le === ee)
              return P(), !0;
            if (!G)
              throw v("token '" + le + "', '" + ee + "' expected");
            return !1;
          }, cmnt: function(ee) {
            var G = null;
            return ee === void 0 ? T === d - 1 && (m || l === "*" || I) && (G = O ? E : null) : (T < ee && Z(), T !== ee || I || !m && l !== "/" || (G = O ? null : E)), G;
          } }, "line", { get: function() {
            return d;
          } });
        }
        c.unescape = u;
      }, 7645: function(p, _, e) {
        p.exports = E;
        var r = e(9313);
        ((E.prototype = Object.create(r.prototype)).constructor = E).className = "Type";
        var t = e(7025), a = e(7598), i = e(3548), s = e(6039), o = e(7513), n = e(8368), u = e(1408), c = e(1173), h = e(9935), m = e(4928), f = e(5305), g = e(4497), d = e(3996), l = e(1667);
        function E(I, O) {
          r.call(this, I, O), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
        }
        function T(I) {
          return I._fieldsById = I._fieldsArray = I._oneofsArray = null, delete I.encode, delete I.decode, delete I.verify, I;
        }
        Object.defineProperties(E.prototype, { fieldsById: { get: function() {
          if (this._fieldsById)
            return this._fieldsById;
          this._fieldsById = {};
          for (var I = Object.keys(this.fields), O = 0; O < I.length; ++O) {
            var C = this.fields[I[O]], N = C.id;
            if (this._fieldsById[N])
              throw Error("duplicate id " + N + " in " + this);
            this._fieldsById[N] = C;
          }
          return this._fieldsById;
        } }, fieldsArray: { get: function() {
          return this._fieldsArray || (this._fieldsArray = h.toArray(this.fields));
        } }, oneofsArray: { get: function() {
          return this._oneofsArray || (this._oneofsArray = h.toArray(this.oneofs));
        } }, ctor: { get: function() {
          return this._ctor || (this.ctor = E.generateConstructor(this)());
        }, set: function(I) {
          var O = I.prototype;
          O instanceof n || ((I.prototype = new n()).constructor = I, h.merge(I.prototype, O)), I.$type = I.prototype.$type = this, h.merge(I, n, !0), this._ctor = I;
          for (var C = 0; C < this.fieldsArray.length; ++C)
            this._fieldsArray[C].resolve();
          var N = {};
          for (C = 0; C < this.oneofsArray.length; ++C)
            N[this._oneofsArray[C].resolve().name] = { get: h.oneOfGetter(this._oneofsArray[C].oneof), set: h.oneOfSetter(this._oneofsArray[C].oneof) };
          C && Object.defineProperties(I.prototype, N);
        } } }), E.generateConstructor = function(I) {
          for (var O, C = h.codegen(["p"], I.name), N = 0; N < I.fieldsArray.length; ++N)
            (O = I._fieldsArray[N]).map ? C("this%s={}", h.safeProp(O.name)) : O.repeated && C("this%s=[]", h.safeProp(O.name));
          return C("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        }, E.fromJSON = function(I, O) {
          var C = new E(I, O.options);
          C.extensions = O.extensions, C.reserved = O.reserved;
          for (var N = Object.keys(O.fields), v = 0; v < N.length; ++v)
            C.add((O.fields[N[v]].keyType !== void 0 ? s.fromJSON : i.fromJSON)(N[v], O.fields[N[v]]));
          if (O.oneofs)
            for (N = Object.keys(O.oneofs), v = 0; v < N.length; ++v)
              C.add(a.fromJSON(N[v], O.oneofs[N[v]]));
          if (O.nested)
            for (N = Object.keys(O.nested), v = 0; v < N.length; ++v) {
              var y = O.nested[N[v]];
              C.add((y.id !== void 0 ? i.fromJSON : y.fields !== void 0 ? E.fromJSON : y.values !== void 0 ? t.fromJSON : y.methods !== void 0 ? o.fromJSON : r.fromJSON)(N[v], y));
            }
          return O.extensions && O.extensions.length && (C.extensions = O.extensions), O.reserved && O.reserved.length && (C.reserved = O.reserved), O.group && (C.group = !0), O.comment && (C.comment = O.comment), C;
        }, E.prototype.toJSON = function(I) {
          var O = r.prototype.toJSON.call(this, I), C = !!I && !!I.keepComments;
          return h.toObject(["options", O && O.options || void 0, "oneofs", r.arrayToJSON(this.oneofsArray, I), "fields", r.arrayToJSON(this.fieldsArray.filter(function(N) {
            return !N.declaringField;
          }), I) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", O && O.nested || void 0, "comment", C ? this.comment : void 0]);
        }, E.prototype.resolveAll = function() {
          for (var I = this.fieldsArray, O = 0; O < I.length; )
            I[O++].resolve();
          var C = this.oneofsArray;
          for (O = 0; O < C.length; )
            C[O++].resolve();
          return r.prototype.resolveAll.call(this);
        }, E.prototype.get = function(I) {
          return this.fields[I] || this.oneofs && this.oneofs[I] || this.nested && this.nested[I] || null;
        }, E.prototype.add = function(I) {
          if (this.get(I.name))
            throw Error("duplicate name '" + I.name + "' in " + this);
          if (I instanceof i && I.extend === void 0) {
            if (this._fieldsById ? this._fieldsById[I.id] : this.fieldsById[I.id])
              throw Error("duplicate id " + I.id + " in " + this);
            if (this.isReservedId(I.id))
              throw Error("id " + I.id + " is reserved in " + this);
            if (this.isReservedName(I.name))
              throw Error("name '" + I.name + "' is reserved in " + this);
            return I.parent && I.parent.remove(I), this.fields[I.name] = I, I.message = this, I.onAdd(this), T(this);
          }
          return I instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[I.name] = I, I.onAdd(this), T(this)) : r.prototype.add.call(this, I);
        }, E.prototype.remove = function(I) {
          if (I instanceof i && I.extend === void 0) {
            if (!this.fields || this.fields[I.name] !== I)
              throw Error(I + " is not a member of " + this);
            return delete this.fields[I.name], I.parent = null, I.onRemove(this), T(this);
          }
          if (I instanceof a) {
            if (!this.oneofs || this.oneofs[I.name] !== I)
              throw Error(I + " is not a member of " + this);
            return delete this.oneofs[I.name], I.parent = null, I.onRemove(this), T(this);
          }
          return r.prototype.remove.call(this, I);
        }, E.prototype.isReservedId = function(I) {
          return r.isReservedId(this.reserved, I);
        }, E.prototype.isReservedName = function(I) {
          return r.isReservedName(this.reserved, I);
        }, E.prototype.create = function(I) {
          return new this.ctor(I);
        }, E.prototype.setup = function() {
          for (var I = this.fullName, O = [], C = 0; C < this.fieldsArray.length; ++C)
            O.push(this._fieldsArray[C].resolve().resolvedType);
          this.encode = m(this)({ Writer: c, types: O, util: h }), this.decode = f(this)({ Reader: u, types: O, util: h }), this.verify = g(this)({ types: O, util: h }), this.fromObject = d.fromObject(this)({ types: O, util: h }), this.toObject = d.toObject(this)({ types: O, util: h });
          var N = l[I];
          if (N) {
            var v = Object.create(this);
            v.fromObject = this.fromObject, this.fromObject = N.fromObject.bind(v), v.toObject = this.toObject, this.toObject = N.toObject.bind(v);
          }
          return this;
        }, E.prototype.encode = function(I, O) {
          return this.setup().encode(I, O);
        }, E.prototype.encodeDelimited = function(I, O) {
          return this.encode(I, O && O.len ? O.fork() : O).ldelim();
        }, E.prototype.decode = function(I, O) {
          return this.setup().decode(I, O);
        }, E.prototype.decodeDelimited = function(I) {
          return I instanceof u || (I = u.create(I)), this.decode(I, I.uint32());
        }, E.prototype.verify = function(I) {
          return this.setup().verify(I);
        }, E.prototype.fromObject = function(I) {
          return this.setup().fromObject(I);
        }, E.prototype.toObject = function(I, O) {
          return this.setup().toObject(I, O);
        }, E.d = function(I) {
          return function(O) {
            h.decorateType(O, I);
          };
        };
      }, 7063: function(p, _, e) {
        var r = _, t = e(9935), a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function i(s, o) {
          var n = 0, u = {};
          for (o |= 0; n < s.length; )
            u[a[n + o]] = s[n++];
          return u;
        }
        r.basic = i([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = i([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", t.emptyArray, null]), r.long = i([0, 0, 0, 1, 1], 7), r.mapKey = i([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = i([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
      }, 9935: function(p, _, e) {
        var r, t, a = p.exports = e(9693), i = e(5054);
        a.codegen = e(5124), a.fetch = e(9054), a.path = e(8626), a.fs = a.inquire("fs"), a.toArray = function(c) {
          if (c) {
            for (var h = Object.keys(c), m = new Array(h.length), f = 0; f < h.length; )
              m[f] = c[h[f++]];
            return m;
          }
          return [];
        }, a.toObject = function(c) {
          for (var h = {}, m = 0; m < c.length; ) {
            var f = c[m++], g = c[m++];
            g !== void 0 && (h[f] = g);
          }
          return h;
        };
        var s = /\\/g, o = /"/g;
        a.isReserved = function(c) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(c);
        }, a.safeProp = function(c) {
          return !/^[$\w_]+$/.test(c) || a.isReserved(c) ? '["' + c.replace(s, "\\\\").replace(o, '\\"') + '"]' : "." + c;
        }, a.ucFirst = function(c) {
          return c.charAt(0).toUpperCase() + c.substring(1);
        };
        var n = /_([a-z])/g;
        a.camelCase = function(c) {
          return c.substring(0, 1) + c.substring(1).replace(n, function(h, m) {
            return m.toUpperCase();
          });
        }, a.compareFieldsById = function(c, h) {
          return c.id - h.id;
        }, a.decorateType = function(c, h) {
          if (c.$type)
            return h && c.$type.name !== h && (a.decorateRoot.remove(c.$type), c.$type.name = h, a.decorateRoot.add(c.$type)), c.$type;
          r || (r = e(7645));
          var m = new r(h || c.name);
          return a.decorateRoot.add(m), m.ctor = c, Object.defineProperty(c, "$type", { value: m, enumerable: !1 }), Object.defineProperty(c.prototype, "$type", { value: m, enumerable: !1 }), m;
        };
        var u = 0;
        a.decorateEnum = function(c) {
          if (c.$type)
            return c.$type;
          t || (t = e(7025));
          var h = new t("Enum" + u++, c);
          return a.decorateRoot.add(h), Object.defineProperty(c, "$type", { value: h, enumerable: !1 }), h;
        }, a.setProperty = function(c, h, m) {
          if (typeof c != "object")
            throw TypeError("dst must be an object");
          if (!h)
            throw TypeError("path must be specified");
          return function f(g, d, l) {
            var E = d.shift();
            if (E === "__proto__")
              return g;
            if (d.length > 0)
              g[E] = f(g[E] || {}, d, l);
            else {
              var T = g[E];
              T && (l = [].concat(T).concat(l)), g[E] = l;
            }
            return g;
          }(c, h = h.split("."), m);
        }, Object.defineProperty(a, "decorateRoot", { get: function() {
          return i.decorated || (i.decorated = new (e(9424))());
        } });
      }, 1945: function(p, _, e) {
        p.exports = t;
        var r = e(9693);
        function t(o, n) {
          this.lo = o >>> 0, this.hi = n >>> 0;
        }
        var a = t.zero = new t(0, 0);
        a.toNumber = function() {
          return 0;
        }, a.zzEncode = a.zzDecode = function() {
          return this;
        }, a.length = function() {
          return 1;
        };
        var i = t.zeroHash = "\0\0\0\0\0\0\0\0";
        t.fromNumber = function(o) {
          if (o === 0)
            return a;
          var n = o < 0;
          n && (o = -o);
          var u = o >>> 0, c = (o - u) / 4294967296 >>> 0;
          return n && (c = ~c >>> 0, u = ~u >>> 0, ++u > 4294967295 && (u = 0, ++c > 4294967295 && (c = 0))), new t(u, c);
        }, t.from = function(o) {
          if (typeof o == "number")
            return t.fromNumber(o);
          if (r.isString(o)) {
            if (!r.Long)
              return t.fromNumber(parseInt(o, 10));
            o = r.Long.fromString(o);
          }
          return o.low || o.high ? new t(o.low >>> 0, o.high >>> 0) : a;
        }, t.prototype.toNumber = function(o) {
          if (!o && this.hi >>> 31) {
            var n = 1 + ~this.lo >>> 0, u = ~this.hi >>> 0;
            return n || (u = u + 1 >>> 0), -(n + 4294967296 * u);
          }
          return this.lo + 4294967296 * this.hi;
        }, t.prototype.toLong = function(o) {
          return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, !!o) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!o };
        };
        var s = String.prototype.charCodeAt;
        t.fromHash = function(o) {
          return o === i ? a : new t((s.call(o, 0) | s.call(o, 1) << 8 | s.call(o, 2) << 16 | s.call(o, 3) << 24) >>> 0, (s.call(o, 4) | s.call(o, 5) << 8 | s.call(o, 6) << 16 | s.call(o, 7) << 24) >>> 0);
        }, t.prototype.toHash = function() {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        }, t.prototype.zzEncode = function() {
          var o = this.hi >> 31;
          return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
        }, t.prototype.zzDecode = function() {
          var o = -(1 & this.lo);
          return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
        }, t.prototype.length = function() {
          var o = this.lo, n = (this.lo >>> 28 | this.hi << 4) >>> 0, u = this.hi >>> 24;
          return u === 0 ? n === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : u < 128 ? 9 : 10;
        };
      }, 9693: function(p, _, e) {
        var r = _;
        function t(i, s, o) {
          for (var n = Object.keys(s), u = 0; u < n.length; ++u)
            i[n[u]] !== void 0 && o || (i[n[u]] = s[n[u]]);
          return i;
        }
        function a(i) {
          function s(o, n) {
            if (!(this instanceof s))
              return new s(o, n);
            Object.defineProperty(this, "message", { get: function() {
              return o;
            } }), Error.captureStackTrace ? Error.captureStackTrace(this, s) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), n && t(this, n);
          }
          return (s.prototype = Object.create(Error.prototype)).constructor = s, Object.defineProperty(s.prototype, "name", { get: function() {
            return i;
          } }), s.prototype.toString = function() {
            return this.name + ": " + this.message;
          }, s;
        }
        r.asPromise = e(4537), r.base64 = e(7419), r.EventEmitter = e(9211), r.float = e(945), r.inquire = e(7199), r.utf8 = e(4997), r.pool = e(6662), r.LongBits = e(1945), r.isNode = !!(e.g !== void 0 && e.g && e.g.process && e.g.process.versions && e.g.process.versions.node), r.global = r.isNode && e.g || typeof window < "u" && window || typeof self < "u" && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function(i) {
          return typeof i == "number" && isFinite(i) && Math.floor(i) === i;
        }, r.isString = function(i) {
          return typeof i == "string" || i instanceof String;
        }, r.isObject = function(i) {
          return i && typeof i == "object";
        }, r.isset = r.isSet = function(i, s) {
          var o = i[s];
          return !(o == null || !i.hasOwnProperty(s)) && (typeof o != "object" || (Array.isArray(o) ? o.length : Object.keys(o).length) > 0);
        }, r.Buffer = function() {
          try {
            var i = r.inquire("buffer").Buffer;
            return i.prototype.utf8Write ? i : null;
          } catch {
            return null;
          }
        }(), r._Buffer_from = null, r._Buffer_allocUnsafe = null, r.newBuffer = function(i) {
          return typeof i == "number" ? r.Buffer ? r._Buffer_allocUnsafe(i) : new r.Array(i) : r.Buffer ? r._Buffer_from(i) : typeof Uint8Array > "u" ? i : new Uint8Array(i);
        }, r.Array = typeof Uint8Array < "u" ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function(i) {
          return i ? r.LongBits.from(i).toHash() : r.LongBits.zeroHash;
        }, r.longFromHash = function(i, s) {
          var o = r.LongBits.fromHash(i);
          return r.Long ? r.Long.fromBits(o.lo, o.hi, s) : o.toNumber(!!s);
        }, r.merge = t, r.lcFirst = function(i) {
          return i.charAt(0).toLowerCase() + i.substring(1);
        }, r.newError = a, r.ProtocolError = a("ProtocolError"), r.oneOfGetter = function(i) {
          for (var s = {}, o = 0; o < i.length; ++o)
            s[i[o]] = 1;
          return function() {
            for (var n = Object.keys(this), u = n.length - 1; u > -1; --u)
              if (s[n[u]] === 1 && this[n[u]] !== void 0 && this[n[u]] !== null)
                return n[u];
          };
        }, r.oneOfSetter = function(i) {
          return function(s) {
            for (var o = 0; o < i.length; ++o)
              i[o] !== s && delete this[i[o]];
          };
        }, r.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, r._configure = function() {
          var i = r.Buffer;
          i ? (r._Buffer_from = i.from !== Uint8Array.from && i.from || function(s, o) {
            return new i(s, o);
          }, r._Buffer_allocUnsafe = i.allocUnsafe || function(s) {
            return new i(s);
          }) : r._Buffer_from = r._Buffer_allocUnsafe = null;
        };
      }, 4497: function(p, _, e) {
        p.exports = function(o) {
          var n = t.codegen(["m"], o.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), u = {};
          o.oneofsArray.length && n("var p={}");
          for (var c = 0; c < o.fieldsArray.length; ++c) {
            var h = o._fieldsArray[c].resolve(), m = "m" + t.safeProp(h.name);
            if (h.optional && n("if(%s!=null&&m.hasOwnProperty(%j)){", m, h.name), h.map)
              n("if(!util.isObject(%s))", m)("return%j", a(h, "object"))("var k=Object.keys(%s)", m)("for(var i=0;i<k.length;++i){"), s(n, h, "k[i]"), i(n, h, c, m + "[k[i]]")("}");
            else if (h.repeated)
              n("if(!Array.isArray(%s))", m)("return%j", a(h, "array"))("for(var i=0;i<%s.length;++i){", m), i(n, h, c, m + "[i]")("}");
            else {
              if (h.partOf) {
                var f = t.safeProp(h.partOf.name);
                u[h.partOf.name] === 1 && n("if(p%s===1)", f)("return%j", h.partOf.name + ": multiple values"), u[h.partOf.name] = 1, n("p%s=1", f);
              }
              i(n, h, c, m);
            }
            h.optional && n("}");
          }
          return n("return null");
        };
        var r = e(7025), t = e(9935);
        function a(o, n) {
          return o.name + ": " + n + (o.repeated && n !== "array" ? "[]" : o.map && n !== "object" ? "{k:" + o.keyType + "}" : "") + " expected";
        }
        function i(o, n, u, c) {
          if (n.resolvedType)
            if (n.resolvedType instanceof r) {
              o("switch(%s){", c)("default:")("return%j", a(n, "enum value"));
              for (var h = Object.keys(n.resolvedType.values), m = 0; m < h.length; ++m)
                o("case %i:", n.resolvedType.values[h[m]]);
              o("break")("}");
            } else
              o("{")("var e=types[%i].verify(%s);", u, c)("if(e)")("return%j+e", n.name + ".")("}");
          else
            switch (n.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                o("if(!util.isInteger(%s))", c)("return%j", a(n, "integer"));
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                o("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", c, c, c, c)("return%j", a(n, "integer|Long"));
                break;
              case "float":
              case "double":
                o('if(typeof %s!=="number")', c)("return%j", a(n, "number"));
                break;
              case "bool":
                o('if(typeof %s!=="boolean")', c)("return%j", a(n, "boolean"));
                break;
              case "string":
                o("if(!util.isString(%s))", c)("return%j", a(n, "string"));
                break;
              case "bytes":
                o('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', c, c, c)("return%j", a(n, "buffer"));
            }
          return o;
        }
        function s(o, n, u) {
          switch (n.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              o("if(!util.key32Re.test(%s))", u)("return%j", a(n, "integer key"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              o("if(!util.key64Re.test(%s))", u)("return%j", a(n, "integer|Long key"));
              break;
            case "bool":
              o("if(!util.key2Re.test(%s))", u)("return%j", a(n, "boolean key"));
          }
          return o;
        }
      }, 1667: function(p, _, e) {
        var r = _, t = e(8368);
        r[".google.protobuf.Any"] = { fromObject: function(a) {
          if (a && a["@type"]) {
            var i = a["@type"].substring(a["@type"].lastIndexOf("/") + 1), s = this.lookup(i);
            if (s) {
              var o = a["@type"].charAt(0) === "." ? a["@type"].substr(1) : a["@type"];
              return o.indexOf("/") === -1 && (o = "/" + o), this.create({ type_url: o, value: s.encode(s.fromObject(a)).finish() });
            }
          }
          return this.fromObject(a);
        }, toObject: function(a, i) {
          var s = "", o = "";
          if (i && i.json && a.type_url && a.value) {
            o = a.type_url.substring(a.type_url.lastIndexOf("/") + 1), s = a.type_url.substring(0, a.type_url.lastIndexOf("/") + 1);
            var n = this.lookup(o);
            n && (a = n.decode(a.value));
          }
          if (!(a instanceof this.ctor) && a instanceof t) {
            var u = a.$type.toObject(a, i);
            return s === "" && (s = "type.googleapis.com/"), o = s + (a.$type.fullName[0] === "." ? a.$type.fullName.substr(1) : a.$type.fullName), u["@type"] = o, u;
          }
          return this.toObject(a, i);
        } };
      }, 1173: function(p, _, e) {
        p.exports = c;
        var r, t = e(9693), a = t.LongBits, i = t.base64, s = t.utf8;
        function o(E, T, I) {
          this.fn = E, this.len = T, this.next = void 0, this.val = I;
        }
        function n() {
        }
        function u(E) {
          this.head = E.head, this.tail = E.tail, this.len = E.len, this.next = E.states;
        }
        function c() {
          this.len = 0, this.head = new o(n, 0, 0), this.tail = this.head, this.states = null;
        }
        var h = function() {
          return t.Buffer ? function() {
            return (c.create = function() {
              return new r();
            })();
          } : function() {
            return new c();
          };
        };
        function m(E, T, I) {
          T[I] = 255 & E;
        }
        function f(E, T) {
          this.len = E, this.next = void 0, this.val = T;
        }
        function g(E, T, I) {
          for (; E.hi; )
            T[I++] = 127 & E.lo | 128, E.lo = (E.lo >>> 7 | E.hi << 25) >>> 0, E.hi >>>= 7;
          for (; E.lo > 127; )
            T[I++] = 127 & E.lo | 128, E.lo = E.lo >>> 7;
          T[I++] = E.lo;
        }
        function d(E, T, I) {
          T[I] = 255 & E, T[I + 1] = E >>> 8 & 255, T[I + 2] = E >>> 16 & 255, T[I + 3] = E >>> 24;
        }
        c.create = h(), c.alloc = function(E) {
          return new t.Array(E);
        }, t.Array !== Array && (c.alloc = t.pool(c.alloc, t.Array.prototype.subarray)), c.prototype._push = function(E, T, I) {
          return this.tail = this.tail.next = new o(E, T, I), this.len += T, this;
        }, f.prototype = Object.create(o.prototype), f.prototype.fn = function(E, T, I) {
          for (; E > 127; )
            T[I++] = 127 & E | 128, E >>>= 7;
          T[I] = E;
        }, c.prototype.uint32 = function(E) {
          return this.len += (this.tail = this.tail.next = new f((E >>>= 0) < 128 ? 1 : E < 16384 ? 2 : E < 2097152 ? 3 : E < 268435456 ? 4 : 5, E)).len, this;
        }, c.prototype.int32 = function(E) {
          return E < 0 ? this._push(g, 10, a.fromNumber(E)) : this.uint32(E);
        }, c.prototype.sint32 = function(E) {
          return this.uint32((E << 1 ^ E >> 31) >>> 0);
        }, c.prototype.uint64 = function(E) {
          var T = a.from(E);
          return this._push(g, T.length(), T);
        }, c.prototype.int64 = c.prototype.uint64, c.prototype.sint64 = function(E) {
          var T = a.from(E).zzEncode();
          return this._push(g, T.length(), T);
        }, c.prototype.bool = function(E) {
          return this._push(m, 1, E ? 1 : 0);
        }, c.prototype.fixed32 = function(E) {
          return this._push(d, 4, E >>> 0);
        }, c.prototype.sfixed32 = c.prototype.fixed32, c.prototype.fixed64 = function(E) {
          var T = a.from(E);
          return this._push(d, 4, T.lo)._push(d, 4, T.hi);
        }, c.prototype.sfixed64 = c.prototype.fixed64, c.prototype.float = function(E) {
          return this._push(t.float.writeFloatLE, 4, E);
        }, c.prototype.double = function(E) {
          return this._push(t.float.writeDoubleLE, 8, E);
        };
        var l = t.Array.prototype.set ? function(E, T, I) {
          T.set(E, I);
        } : function(E, T, I) {
          for (var O = 0; O < E.length; ++O)
            T[I + O] = E[O];
        };
        c.prototype.bytes = function(E) {
          var T = E.length >>> 0;
          if (!T)
            return this._push(m, 1, 0);
          if (t.isString(E)) {
            var I = c.alloc(T = i.length(E));
            i.decode(E, I, 0), E = I;
          }
          return this.uint32(T)._push(l, T, E);
        }, c.prototype.string = function(E) {
          var T = s.length(E);
          return T ? this.uint32(T)._push(s.write, T, E) : this._push(m, 1, 0);
        }, c.prototype.fork = function() {
          return this.states = new u(this), this.head = this.tail = new o(n, 0, 0), this.len = 0, this;
        }, c.prototype.reset = function() {
          return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(n, 0, 0), this.len = 0), this;
        }, c.prototype.ldelim = function() {
          var E = this.head, T = this.tail, I = this.len;
          return this.reset().uint32(I), I && (this.tail.next = E.next, this.tail = T, this.len += I), this;
        }, c.prototype.finish = function() {
          for (var E = this.head.next, T = this.constructor.alloc(this.len), I = 0; E; )
            E.fn(E.val, T, I), I += E.len, E = E.next;
          return T;
        }, c._configure = function(E) {
          r = E, c.create = h(), r._configure();
        };
      }, 3155: function(p, _, e) {
        p.exports = a;
        var r = e(1173);
        (a.prototype = Object.create(r.prototype)).constructor = a;
        var t = e(9693);
        function a() {
          r.call(this);
        }
        function i(s, o, n) {
          s.length < 40 ? t.utf8.write(s, o, n) : o.utf8Write ? o.utf8Write(s, n) : o.write(s, n);
        }
        a._configure = function() {
          a.alloc = t._Buffer_allocUnsafe, a.writeBytesBuffer = t.Buffer && t.Buffer.prototype instanceof Uint8Array && t.Buffer.prototype.set.name === "set" ? function(s, o, n) {
            o.set(s, n);
          } : function(s, o, n) {
            if (s.copy)
              s.copy(o, n, 0, s.length);
            else
              for (var u = 0; u < s.length; )
                o[n++] = s[u++];
          };
        }, a.prototype.bytes = function(s) {
          t.isString(s) && (s = t._Buffer_from(s, "base64"));
          var o = s.length >>> 0;
          return this.uint32(o), o && this._push(a.writeBytesBuffer, o, s), this;
        }, a.prototype.string = function(s) {
          var o = t.Buffer.byteLength(s);
          return this.uint32(o), o && this._push(i, o, s), this;
        }, a._configure();
      }, 7129: function(p, _) {
        var e = Object.prototype.hasOwnProperty;
        function r(a) {
          try {
            return decodeURIComponent(a.replace(/\+/g, " "));
          } catch {
            return null;
          }
        }
        function t(a) {
          try {
            return encodeURIComponent(a);
          } catch {
            return null;
          }
        }
        _.stringify = function(a, i) {
          i = i || "";
          var s, o, n = [];
          for (o in typeof i != "string" && (i = "?"), a)
            if (e.call(a, o)) {
              if ((s = a[o]) || s != null && !isNaN(s) || (s = ""), o = t(o), s = t(s), o === null || s === null)
                continue;
              n.push(o + "=" + s);
            }
          return n.length ? i + n.join("&") : "";
        }, _.parse = function(a) {
          for (var i, s = /([^=?#&]+)=?([^&]*)/g, o = {}; i = s.exec(a); ) {
            var n = r(i[1]), u = r(i[2]);
            n === null || u === null || n in o || (o[n] = u);
          }
          return o;
        };
      }, 7418: function(p) {
        p.exports = function(_, e) {
          if (e = e.split(":")[0], !(_ = +_))
            return !1;
          switch (e) {
            case "http":
            case "ws":
              return _ !== 80;
            case "https":
            case "wss":
              return _ !== 443;
            case "ftp":
              return _ !== 21;
            case "gopher":
              return _ !== 70;
            case "file":
              return !1;
          }
          return _ !== 0;
        };
      }, 8e3: function(p, _, e) {
        var r = e(7581);
        p.exports = e(3626)(r), "_sockjs_onload" in e.g && setTimeout(e.g._sockjs_onload, 1);
      }, 2530: function(p, _, e) {
        var r = e(5717), t = e(685);
        function a() {
          t.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = "";
        }
        r(a, t), p.exports = a;
      }, 3212: function(p, _, e) {
        var r = e(5717), t = e(3184);
        function a() {
          t.call(this);
        }
        r(a, t), a.prototype.removeAllListeners = function(i) {
          i ? delete this._listeners[i] : this._listeners = {};
        }, a.prototype.once = function(i, s) {
          var o = this, n = !1;
          this.on(i, function u() {
            o.removeListener(i, u), n || (n = !0, s.apply(this, arguments));
          });
        }, a.prototype.emit = function() {
          var i = arguments[0], s = this._listeners[i];
          if (s) {
            for (var o = arguments.length, n = new Array(o - 1), u = 1; u < o; u++)
              n[u - 1] = arguments[u];
            for (var c = 0; c < s.length; c++)
              s[c].apply(this, n);
          }
        }, a.prototype.on = a.prototype.addListener = t.prototype.addEventListener, a.prototype.removeListener = t.prototype.removeEventListener, p.exports.v = a;
      }, 685: function(p) {
        function _(e) {
          this.type = e;
        }
        _.prototype.initEvent = function(e, r, t) {
          return this.type = e, this.bubbles = r, this.cancelable = t, this.timeStamp = +/* @__PURE__ */ new Date(), this;
        }, _.prototype.stopPropagation = function() {
        }, _.prototype.preventDefault = function() {
        }, _.CAPTURING_PHASE = 1, _.AT_TARGET = 2, _.BUBBLING_PHASE = 3, p.exports = _;
      }, 3184: function(p) {
        function _() {
          this._listeners = {};
        }
        _.prototype.addEventListener = function(e, r) {
          e in this._listeners || (this._listeners[e] = []);
          var t = this._listeners[e];
          t.indexOf(r) === -1 && (t = t.concat([r])), this._listeners[e] = t;
        }, _.prototype.removeEventListener = function(e, r) {
          var t = this._listeners[e];
          if (t) {
            var a = t.indexOf(r);
            a === -1 || (t.length > 1 ? this._listeners[e] = t.slice(0, a).concat(t.slice(a + 1)) : delete this._listeners[e]);
          }
        }, _.prototype.dispatchEvent = function() {
          var e = arguments[0], r = e.type, t = arguments.length === 1 ? [e] : Array.apply(null, arguments);
          if (this["on" + r] && this["on" + r].apply(this, t), r in this._listeners)
            for (var a = this._listeners[r], i = 0; i < a.length; i++)
              a[i].apply(this, t);
        }, p.exports = _;
      }, 3326: function(p, _, e) {
        var r = e(5717), t = e(685);
        function a(i) {
          t.call(this), this.initEvent("message", !1, !1), this.data = i;
        }
        r(a, t), p.exports = a;
      }, 691: function(p, _, e) {
        var r = e(3683);
        function t(a) {
          this._transport = a, a.on("message", this._transportMessage.bind(this)), a.on("close", this._transportClose.bind(this));
        }
        t.prototype._transportClose = function(a, i) {
          r.postMessage("c", JSON.stringify([a, i]));
        }, t.prototype._transportMessage = function(a) {
          r.postMessage("t", a);
        }, t.prototype._send = function(a) {
          this._transport.send(a);
        }, t.prototype._close = function() {
          this._transport.close(), this._transport.removeAllListeners();
        }, p.exports = t;
      }, 551: function(p, _, e) {
        var r = e(273), t = e(7705), a = e(691), i = e(6311), s = e(3683), o = e(7486);
        p.exports = function(n, u) {
          var c, h = {};
          u.forEach(function(m) {
            m.facadeTransport && (h[m.facadeTransport.transportName] = m.facadeTransport);
          }), h[i.transportName] = i, n.bootstrap_iframe = function() {
            var m;
            s.currentWindowId = o.hash.slice(1), t.attachEvent("message", function(f) {
              if (f.source === parent && (c === void 0 && (c = f.origin), f.origin === c)) {
                var g;
                try {
                  g = JSON.parse(f.data);
                } catch {
                  return void f.data;
                }
                if (g.windowId === s.currentWindowId)
                  switch (g.type) {
                    case "s":
                      var d;
                      try {
                        d = JSON.parse(g.data);
                      } catch {
                        g.data;
                        break;
                      }
                      var l = d[0], E = d[1], T = d[2], I = d[3];
                      if (l !== n.version)
                        throw new Error('Incompatible SockJS! Main site uses: "' + l + '", the iframe: "' + n.version + '".');
                      if (!r.isOriginEqual(T, o.href) || !r.isOriginEqual(I, o.href))
                        throw new Error("Can't connect to different domain from within an iframe. (" + o.href + ", " + T + ", " + I + ")");
                      m = new a(new h[E](T, I));
                      break;
                    case "m":
                      m._send(g.data);
                      break;
                    case "c":
                      m && m._close(), m = null;
                  }
              }
            }), s.postMessage("s");
          };
        };
      }, 2550: function(p, _, e) {
        var r = e(3212).v, t = e(5717), a = e(2217);
        function i(s, o) {
          r.call(this);
          var n = this, u = +/* @__PURE__ */ new Date();
          this.xo = new o("GET", s), this.xo.once("finish", function(c, h) {
            var m, f;
            if (c === 200) {
              if (f = +/* @__PURE__ */ new Date() - u, h)
                try {
                  m = JSON.parse(h);
                } catch {
                }
              a.isObject(m) || (m = {});
            }
            n.emit("finish", m, f), n.removeAllListeners();
          });
        }
        t(i, r), i.prototype.close = function() {
          this.removeAllListeners(), this.xo.close();
        }, p.exports = i;
      }, 6311: function(p, _, e) {
        var r = e(5717), t = e(3212).v, a = e(3515), i = e(2550);
        function s(o) {
          var n = this;
          t.call(this), this.ir = new i(o, a), this.ir.once("finish", function(u, c) {
            n.ir = null, n.emit("message", JSON.stringify([u, c]));
          });
        }
        r(s, t), s.transportName = "iframe-info-receiver", s.prototype.close = function() {
          this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners();
        }, p.exports = s;
      }, 3616: function(p, _, e) {
        var r = e(3212).v, t = e(5717), a = e(7705), i = e(5088), s = e(6311);
        function o(n, u) {
          var c = this;
          r.call(this);
          var h = function() {
            var m = c.ifr = new i(s.transportName, u, n);
            m.once("message", function(f) {
              if (f) {
                var g;
                try {
                  g = JSON.parse(f);
                } catch {
                  return c.emit("finish"), void c.close();
                }
                var d = g[0], l = g[1];
                c.emit("finish", d, l);
              }
              c.close();
            }), m.once("close", function() {
              c.emit("finish"), c.close();
            });
          };
          e.g.document.body ? h() : a.attachEvent("load", h);
        }
        t(o, r), o.enabled = function() {
          return i.enabled();
        }, o.prototype.close = function() {
          this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null;
        }, p.exports = o;
      }, 5172: function(p, _, e) {
        var r = e(3212).v, t = e(5717), a = e(273), i = e(6073), s = e(9033), o = e(3515), n = e(7103), u = e(3616), c = e(2550);
        function h(m, f) {
          var g = this;
          r.call(this), setTimeout(function() {
            g.doXhr(m, f);
          }, 0);
        }
        t(h, r), h._getReceiver = function(m, f, g) {
          return g.sameOrigin ? new c(f, o) : s.enabled ? new c(f, s) : i.enabled && g.sameScheme ? new c(f, i) : u.enabled() ? new u(m, f) : new c(f, n);
        }, h.prototype.doXhr = function(m, f) {
          var g = this, d = a.addPath(m, "/info");
          this.xo = h._getReceiver(m, d, f), this.timeoutRef = setTimeout(function() {
            g._cleanup(!1), g.emit("finish");
          }, h.timeout), this.xo.once("finish", function(l, E) {
            g._cleanup(!0), g.emit("finish", l, E);
          });
        }, h.prototype._cleanup = function(m) {
          clearTimeout(this.timeoutRef), this.timeoutRef = null, !m && this.xo && this.xo.close(), this.xo = null;
        }, h.prototype.close = function() {
          this.removeAllListeners(), this._cleanup(!1);
        }, h.timeout = 8e3, p.exports = h;
      }, 7486: function(p, _, e) {
        p.exports = e.g.location || { origin: "http://localhost:80", protocol: "http:", host: "localhost", port: 80, href: "http://localhost/", hash: "" };
      }, 3626: function(p, _, e) {
        e(1247);
        var r, t = e(4564), a = e(5717), i = e(8915), s = e(8028), o = e(273), n = e(7705), u = e(5581), c = e(2217), h = e(8510), m = e(4886), f = e(685), g = e(3184), d = e(7486), l = e(2530), E = e(3326), T = e(5172);
        function I(C, N, v) {
          if (!(this instanceof I))
            return new I(C, N, v);
          if (arguments.length < 1)
            throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
          g.call(this), this.readyState = I.CONNECTING, this.extensions = "", this.protocol = "", (v = v || {}).protocols_whitelist && m.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = v.transports, this._transportOptions = v.transportOptions || {}, this._timeout = v.timeout || 0;
          var y = v.sessionId || 8;
          if (typeof y == "function")
            this._generateSessionId = y;
          else {
            if (typeof y != "number")
              throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
            this._generateSessionId = function() {
              return i.string(y);
            };
          }
          this._server = v.server || i.numberString(1e3);
          var A = new t(C);
          if (!A.host || !A.protocol)
            throw new SyntaxError("The URL '" + C + "' is invalid");
          if (A.hash)
            throw new SyntaxError("The URL must not contain a fragment");
          if (A.protocol !== "http:" && A.protocol !== "https:")
            throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + A.protocol + "' is not allowed.");
          var x = A.protocol === "https:";
          if (d.protocol === "https:" && !x && !o.isLoopbackAddr(A.hostname))
            throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
          N ? Array.isArray(N) || (N = [N]) : N = [];
          var j = N.sort();
          j.forEach(function(W, Z) {
            if (!W)
              throw new SyntaxError("The protocols entry '" + W + "' is invalid.");
            if (Z < j.length - 1 && W === j[Z + 1])
              throw new SyntaxError("The protocols entry '" + W + "' is duplicated.");
          });
          var P = o.getOrigin(d.href);
          this._origin = P ? P.toLowerCase() : null, A.set("pathname", A.pathname.replace(/\/+$/, "")), this.url = A.href, this.url, this._urlInfo = { nullOrigin: !h.hasDomain(), sameOrigin: o.isOriginEqual(this.url, d.href), sameScheme: o.isSchemeEqual(this.url, d.href) }, this._ir = new T(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this));
        }
        function O(C) {
          return C === 1e3 || C >= 3e3 && C <= 4999;
        }
        a(I, g), I.prototype.close = function(C, N) {
          if (C && !O(C))
            throw new Error("InvalidAccessError: Invalid code");
          if (N && N.length > 123)
            throw new SyntaxError("reason argument has an invalid length");
          this.readyState !== I.CLOSING && this.readyState !== I.CLOSED && this._close(C || 1e3, N || "Normal closure", !0);
        }, I.prototype.send = function(C) {
          if (typeof C != "string" && (C = "" + C), this.readyState === I.CONNECTING)
            throw new Error("InvalidStateError: The connection has not been established yet");
          this.readyState === I.OPEN && this._transport.send(s.quote(C));
        }, I.version = e(2828), I.CONNECTING = 0, I.OPEN = 1, I.CLOSING = 2, I.CLOSED = 3, I.prototype._receiveInfo = function(C, N) {
          if (this._ir = null, C) {
            this._rto = this.countRTO(N), this._transUrl = C.base_url ? C.base_url : this.url, C = c.extend(C, this._urlInfo);
            var v = r.filterToEnabled(this._transportsWhitelist, C);
            this._transports = v.main, this._transports.length, this._connect();
          } else
            this._close(1002, "Cannot connect to server");
        }, I.prototype._connect = function() {
          for (var C = this._transports.shift(); C; C = this._transports.shift()) {
            if (C.transportName, C.needBody && (!e.g.document.body || e.g.document.readyState !== void 0 && e.g.document.readyState !== "complete" && e.g.document.readyState !== "interactive"))
              return this._transports.unshift(C), void n.attachEvent("load", this._connect.bind(this));
            var N = Math.max(this._timeout, this._rto * C.roundTrips || 5e3);
            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), N);
            var v = o.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()), y = this._transportOptions[C.transportName], A = new C(v, this._transUrl, y);
            return A.on("message", this._transportMessage.bind(this)), A.once("close", this._transportClose.bind(this)), A.transportName = C.transportName, void (this._transport = A);
          }
          this._close(2e3, "All transports failed", !1);
        }, I.prototype._transportTimeout = function() {
          this.readyState === I.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"));
        }, I.prototype._transportMessage = function(C) {
          var N, v = this, y = C.slice(0, 1), A = C.slice(1);
          switch (y) {
            case "o":
              return void this._open();
            case "h":
              return this.dispatchEvent(new f("heartbeat")), void this.transport;
          }
          if (A)
            try {
              N = JSON.parse(A);
            } catch {
            }
          if (N !== void 0)
            switch (y) {
              case "a":
                Array.isArray(N) && N.forEach(function(x) {
                  v.transport, v.dispatchEvent(new E(x));
                });
                break;
              case "m":
                this.transport, this.dispatchEvent(new E(N));
                break;
              case "c":
                Array.isArray(N) && N.length === 2 && this._close(N[0], N[1], !0);
            }
        }, I.prototype._transportClose = function(C, N) {
          this.transport, this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), O(C) || C === 2e3 || this.readyState !== I.CONNECTING ? this._close(C, N) : this._connect();
        }, I.prototype._open = function() {
          this._transport && this._transport.transportName, this.readyState, this.readyState === I.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = I.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new f("open")), this.transport) : this._close(1006, "Server lost session");
        }, I.prototype._close = function(C, N, v) {
          this.transport, this.readyState;
          var y = !1;
          if (this._ir && (y = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === I.CLOSED)
            throw new Error("InvalidStateError: SockJS has already been closed");
          this.readyState = I.CLOSING, setTimeout((function() {
            this.readyState = I.CLOSED, y && this.dispatchEvent(new f("error"));
            var A = new l("close");
            A.wasClean = v || !1, A.code = C || 1e3, A.reason = N, this.dispatchEvent(A), this.onmessage = this.onclose = this.onerror = null;
          }).bind(this), 0);
        }, I.prototype.countRTO = function(C) {
          return C > 100 ? 4 * C : 300 + C;
        }, p.exports = function(C) {
          return r = u(C), e(551)(I, C), I;
        };
      }, 1247: function() {
        var p, _ = Array.prototype, e = Object.prototype, r = Function.prototype, t = String.prototype, a = _.slice, i = e.toString, s = function(C) {
          return e.toString.call(C) === "[object Function]";
        }, o = function(C) {
          return i.call(C) === "[object String]";
        }, n = Object.defineProperty && function() {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch {
            return !1;
          }
        }();
        p = n ? function(C, N, v, y) {
          !y && N in C || Object.defineProperty(C, N, { configurable: !0, enumerable: !1, writable: !0, value: v });
        } : function(C, N, v, y) {
          !y && N in C || (C[N] = v);
        };
        var u = function(C, N, v) {
          for (var y in N)
            e.hasOwnProperty.call(N, y) && p(C, y, N[y], v);
        }, c = function(C) {
          if (C == null)
            throw new TypeError("can't convert " + C + " to object");
          return Object(C);
        };
        function h() {
        }
        u(r, { bind: function(C) {
          var N = this;
          if (!s(N))
            throw new TypeError("Function.prototype.bind called on incompatible " + N);
          for (var v = a.call(arguments, 1), y = Math.max(0, N.length - v.length), A = [], x = 0; x < y; x++)
            A.push("$" + x);
          var j = Function("binder", "return function (" + A.join(",") + "){ return binder.apply(this, arguments); }")(function() {
            if (this instanceof j) {
              var P = N.apply(this, v.concat(a.call(arguments)));
              return Object(P) === P ? P : this;
            }
            return N.apply(C, v.concat(a.call(arguments)));
          });
          return N.prototype && (h.prototype = N.prototype, j.prototype = new h(), h.prototype = null), j;
        } }), u(Array, { isArray: function(C) {
          return i.call(C) === "[object Array]";
        } });
        var m, f, g, d = Object("a"), l = d[0] !== "a" || !(0 in d);
        u(_, { forEach: function(C) {
          var N = c(this), v = l && o(this) ? this.split("") : N, y = arguments[1], A = -1, x = v.length >>> 0;
          if (!s(C))
            throw new TypeError();
          for (; ++A < x; )
            A in v && C.call(y, v[A], A, N);
        } }, (m = _.forEach, f = !0, g = !0, m && (m.call("foo", function(C, N, v) {
          typeof v != "object" && (f = !1);
        }), m.call([1], function() {
          g = typeof this == "string";
        }, "x")), !(m && f && g)));
        var E = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
        u(_, { indexOf: function(C) {
          var N = l && o(this) ? this.split("") : c(this), v = N.length >>> 0;
          if (!v)
            return -1;
          var y, A = 0;
          for (arguments.length > 1 && ((y = +arguments[1]) != y ? y = 0 : y !== 0 && y !== 1 / 0 && y !== -1 / 0 && (y = (y > 0 || -1) * Math.floor(Math.abs(y))), A = y), A = A >= 0 ? A : Math.max(0, v + A); A < v; A++)
            if (A in N && N[A] === C)
              return A;
          return -1;
        } }, E);
        var T, I = t.split;
        "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1 ? (T = /()??/.exec("")[1] === void 0, t.split = function(C, N) {
          var v = this;
          if (C === void 0 && N === 0)
            return [];
          if (i.call(C) !== "[object RegExp]")
            return I.call(this, C, N);
          var y, A, x, j, P = [], W = (C.ignoreCase ? "i" : "") + (C.multiline ? "m" : "") + (C.extended ? "x" : "") + (C.sticky ? "y" : ""), Z = 0;
          for (C = new RegExp(C.source, W + "g"), v += "", T || (y = new RegExp("^" + C.source + "$(?!\\s)", W)), N = N === void 0 ? 4294967295 : N >>> 0; (A = C.exec(v)) && !((x = A.index + A[0].length) > Z && (P.push(v.slice(Z, A.index)), !T && A.length > 1 && A[0].replace(y, function() {
            for (var ee = 1; ee < arguments.length - 2; ee++)
              arguments[ee] === void 0 && (A[ee] = void 0);
          }), A.length > 1 && A.index < v.length && _.push.apply(P, A.slice(1)), j = A[0].length, Z = x, P.length >= N)); )
            C.lastIndex === A.index && C.lastIndex++;
          return Z === v.length ? !j && C.test("") || P.push("") : P.push(v.slice(Z)), P.length > N ? P.slice(0, N) : P;
        }) : "0".split(void 0, 0).length && (t.split = function(C, N) {
          return C === void 0 && N === 0 ? [] : I.call(this, C, N);
        });
        var O = t.substr;
        u(t, { substr: function(C, N) {
          return O.call(this, C < 0 && (C = this.length + C) < 0 ? 0 : C, N);
        } }, "".substr && "0b".substr(-1) !== "b");
      }, 7581: function(p, _, e) {
        p.exports = [e(2412), e(9842), e(4620), e(3004), e(882)(e(3004)), e(5616), e(882)(e(5616)), e(2387), e(9998), e(882)(e(2387)), e(5375)];
      }, 2940: function(p, _, e) {
        var r = e(3212).v, t = e(5717), a = e(7705), i = e(273), s = e.g.XMLHttpRequest;
        function o(c, h, m, f) {
          var g = this;
          r.call(this), setTimeout(function() {
            g._start(c, h, m, f);
          }, 0);
        }
        t(o, r), o.prototype._start = function(c, h, m, f) {
          var g = this;
          try {
            this.xhr = new s();
          } catch {
          }
          if (!this.xhr)
            return this.emit("finish", 0, "no xhr support"), void this._cleanup();
          h = i.addQuery(h, "t=" + +/* @__PURE__ */ new Date()), this.unloadRef = a.unloadAdd(function() {
            g._cleanup(!0);
          });
          try {
            this.xhr.open(c, h, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
              g.emit("finish", 0, ""), g._cleanup(!1);
            });
          } catch {
            return this.emit("finish", 0, ""), void this._cleanup(!1);
          }
          if (f && f.noCredentials || !o.supportsCORS || (this.xhr.withCredentials = !0), f && f.headers)
            for (var d in f.headers)
              this.xhr.setRequestHeader(d, f.headers[d]);
          this.xhr.onreadystatechange = function() {
            if (g.xhr) {
              var l, E, T = g.xhr;
              switch (T.readyState, T.readyState) {
                case 3:
                  try {
                    E = T.status, l = T.responseText;
                  } catch {
                  }
                  E === 1223 && (E = 204), E === 200 && l && l.length > 0 && g.emit("chunk", E, l);
                  break;
                case 4:
                  (E = T.status) === 1223 && (E = 204), E !== 12005 && E !== 12029 || (E = 0), T.responseText, g.emit("finish", E, T.responseText), g._cleanup(!1);
              }
            }
          };
          try {
            g.xhr.send(m);
          } catch {
            g.emit("finish", 0, ""), g._cleanup(!1);
          }
        }, o.prototype._cleanup = function(c) {
          if (this.xhr) {
            if (this.removeAllListeners(), a.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {
            }, this.xhr.ontimeout && (this.xhr.ontimeout = null), c)
              try {
                this.xhr.abort();
              } catch {
              }
            this.unloadRef = this.xhr = null;
          }
        }, o.prototype.close = function() {
          this._cleanup(!0);
        }, o.enabled = !!s;
        var n = ["Active"].concat("Object").join("X");
        !o.enabled && n in e.g && (s = function() {
          try {
            return new e.g[n]("Microsoft.XMLHTTP");
          } catch {
            return null;
          }
        }, o.enabled = !!new s());
        var u = !1;
        try {
          u = "withCredentials" in new s();
        } catch {
        }
        o.supportsCORS = u, p.exports = o;
      }, 3759: function(p, _, e) {
        p.exports = e.g.EventSource;
      }, 9334: function(p, _, e) {
        var r = e.g.WebSocket || e.g.MozWebSocket;
        p.exports = r ? function(t) {
          return new r(t);
        } : void 0;
      }, 3004: function(p, _, e) {
        var r = e(5717), t = e(9395), a = e(6709), i = e(9033), s = e(3759);
        function o(n) {
          if (!o.enabled())
            throw new Error("Transport created when disabled");
          t.call(this, n, "/eventsource", a, i);
        }
        r(o, t), o.enabled = function() {
          return !!s;
        }, o.transportName = "eventsource", o.roundTrips = 2, p.exports = o;
      }, 5616: function(p, _, e) {
        var r = e(5717), t = e(3608), a = e(3515), i = e(9395);
        function s(o) {
          if (!t.enabled)
            throw new Error("Transport created when disabled");
          i.call(this, o, "/htmlfile", t, a);
        }
        r(s, i), s.enabled = function(o) {
          return t.enabled && o.sameOrigin;
        }, s.transportName = "htmlfile", s.roundTrips = 2, p.exports = s;
      }, 5088: function(p, _, e) {
        var r = e(5717), t = e(3212).v, a = e(2828), i = e(273), s = e(3683), o = e(7705), n = e(8915);
        function u(c, h, m) {
          if (!u.enabled())
            throw new Error("Transport created when disabled");
          t.call(this);
          var f = this;
          this.origin = i.getOrigin(m), this.baseUrl = m, this.transUrl = h, this.transport = c, this.windowId = n.string(8);
          var g = i.addPath(m, "/iframe.html") + "#" + this.windowId;
          this.iframeObj = s.createIframe(g, function(d) {
            f.emit("close", 1006, "Unable to load an iframe (" + d + ")"), f.close();
          }), this.onmessageCallback = this._message.bind(this), o.attachEvent("message", this.onmessageCallback);
        }
        r(u, t), u.prototype.close = function() {
          if (this.removeAllListeners(), this.iframeObj) {
            o.detachEvent("message", this.onmessageCallback);
            try {
              this.postMessage("c");
            } catch {
            }
            this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null;
          }
        }, u.prototype._message = function(c) {
          if (c.data, !i.isOriginEqual(c.origin, this.origin))
            return c.origin, void this.origin;
          var h;
          try {
            h = JSON.parse(c.data);
          } catch {
            return void c.data;
          }
          if (h.windowId !== this.windowId)
            return h.windowId, void this.windowId;
          switch (h.type) {
            case "s":
              this.iframeObj.loaded(), this.postMessage("s", JSON.stringify([a, this.transport, this.transUrl, this.baseUrl]));
              break;
            case "t":
              this.emit("message", h.data);
              break;
            case "c":
              var m;
              try {
                m = JSON.parse(h.data);
              } catch {
                return void h.data;
              }
              this.emit("close", m[0], m[1]), this.close();
          }
        }, u.prototype.postMessage = function(c, h) {
          this.iframeObj.post(JSON.stringify({ windowId: this.windowId, type: c, data: h || "" }), this.origin);
        }, u.prototype.send = function(c) {
          this.postMessage("m", c);
        }, u.enabled = function() {
          return s.iframeEnabled;
        }, u.transportName = "iframe", u.roundTrips = 2, p.exports = u;
      }, 5375: function(p, _, e) {
        var r = e(5717), t = e(8347), a = e(514), i = e(771);
        function s(o) {
          if (!s.enabled())
            throw new Error("Transport created when disabled");
          t.call(this, o, "/jsonp", i, a);
        }
        r(s, t), s.enabled = function() {
          return !!e.g.document;
        }, s.transportName = "jsonp-polling", s.roundTrips = 1, s.needBody = !0, p.exports = s;
      }, 9395: function(p, _, e) {
        var r = e(5717), t = e(273), a = e(8347);
        function i(s, o, n, u) {
          a.call(this, s, o, function(c) {
            return function(h, m, f) {
              var g = {};
              typeof m == "string" && (g.headers = { "Content-type": "text/plain" });
              var d = t.addPath(h, "/xhr_send"), l = new c("POST", d, m, g);
              return l.once("finish", function(E) {
                if (l = null, E !== 200 && E !== 204)
                  return f(new Error("http status " + E));
                f();
              }), function() {
                l.close(), l = null;
                var E = new Error("Aborted");
                E.code = 1e3, f(E);
              };
            };
          }(u), n, u);
        }
        r(i, a), p.exports = i;
      }, 1851: function(p, _, e) {
        var r = e(5717), t = e(3212).v;
        function a(i, s) {
          t.call(this), this.sendBuffer = [], this.sender = s, this.url = i;
        }
        r(a, t), a.prototype.send = function(i) {
          this.sendBuffer.push(i), this.sendStop || this.sendSchedule();
        }, a.prototype.sendScheduleWait = function() {
          var i, s = this;
          this.sendStop = function() {
            s.sendStop = null, clearTimeout(i);
          }, i = setTimeout(function() {
            s.sendStop = null, s.sendSchedule();
          }, 25);
        }, a.prototype.sendSchedule = function() {
          this.sendBuffer.length;
          var i = this;
          if (this.sendBuffer.length > 0) {
            var s = "[" + this.sendBuffer.join(",") + "]";
            this.sendStop = this.sender(this.url, s, function(o) {
              i.sendStop = null, o ? (i.emit("close", o.code || 1006, "Sending error: " + o), i.close()) : i.sendScheduleWait();
            }), this.sendBuffer = [];
          }
        }, a.prototype._cleanup = function() {
          this.removeAllListeners();
        }, a.prototype.close = function() {
          this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null);
        }, p.exports = a;
      }, 882: function(p, _, e) {
        var r = e(5717), t = e(5088), a = e(2217);
        p.exports = function(i) {
          function s(o, n) {
            t.call(this, i.transportName, o, n);
          }
          return r(s, t), s.enabled = function(o, n) {
            if (!e.g.document)
              return !1;
            var u = a.extend({}, n);
            return u.sameOrigin = !0, i.enabled(u) && t.enabled();
          }, s.transportName = "iframe-" + i.transportName, s.needBody = !0, s.roundTrips = t.roundTrips + i.roundTrips - 1, s.facadeTransport = i, s;
        };
      }, 1265: function(p, _, e) {
        var r = e(5717), t = e(3212).v;
        function a(i, s, o) {
          t.call(this), this.Receiver = i, this.receiveUrl = s, this.AjaxObject = o, this._scheduleReceiver();
        }
        r(a, t), a.prototype._scheduleReceiver = function() {
          var i = this, s = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
          s.on("message", function(o) {
            i.emit("message", o);
          }), s.once("close", function(o, n) {
            i.pollIsClosing, i.poll = s = null, i.pollIsClosing || (n === "network" ? i._scheduleReceiver() : (i.emit("close", o || 1006, n), i.removeAllListeners()));
          });
        }, a.prototype.abort = function() {
          this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort();
        }, p.exports = a;
      }, 8347: function(p, _, e) {
        var r = e(5717), t = e(273), a = e(1851), i = e(1265);
        function s(o, n, u, c, h) {
          var m = t.addPath(o, n), f = this;
          a.call(this, o, u), this.poll = new i(c, m, h), this.poll.on("message", function(g) {
            f.emit("message", g);
          }), this.poll.once("close", function(g, d) {
            f.poll = null, f.emit("close", g, d), f.close();
          });
        }
        r(s, a), s.prototype.close = function() {
          a.prototype.close.call(this), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null);
        }, p.exports = s;
      }, 6709: function(p, _, e) {
        var r = e(5717), t = e(3212).v, a = e(3759);
        function i(s) {
          t.call(this);
          var o = this, n = this.es = new a(s);
          n.onmessage = function(u) {
            u.data, o.emit("message", decodeURI(u.data));
          }, n.onerror = function(u) {
            n.readyState;
            var c = n.readyState !== 2 ? "network" : "permanent";
            o._cleanup(), o._close(c);
          };
        }
        r(i, t), i.prototype.abort = function() {
          this._cleanup(), this._close("user");
        }, i.prototype._cleanup = function() {
          var s = this.es;
          s && (s.onmessage = s.onerror = null, s.close(), this.es = null);
        }, i.prototype._close = function(s) {
          var o = this;
          setTimeout(function() {
            o.emit("close", null, s), o.removeAllListeners();
          }, 200);
        }, p.exports = i;
      }, 3608: function(p, _, e) {
        var r = e(5717), t = e(3683), a = e(273), i = e(3212).v, s = e(8915);
        function o(u) {
          i.call(this);
          var c = this;
          t.polluteGlobalNamespace(), this.id = "a" + s.string(6), u = a.addQuery(u, "c=" + decodeURIComponent(t.WPrefix + "." + this.id)), o.htmlfileEnabled;
          var h = o.htmlfileEnabled ? t.createHtmlfile : t.createIframe;
          e.g[t.WPrefix][this.id] = { start: function() {
            c.iframeObj.loaded();
          }, message: function(m) {
            c.emit("message", m);
          }, stop: function() {
            c._cleanup(), c._close("network");
          } }, this.iframeObj = h(u, function() {
            c._cleanup(), c._close("permanent");
          });
        }
        r(o, i), o.prototype.abort = function() {
          this._cleanup(), this._close("user");
        }, o.prototype._cleanup = function() {
          this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete e.g[t.WPrefix][this.id];
        }, o.prototype._close = function(u) {
          this.emit("close", null, u), this.removeAllListeners();
        }, o.htmlfileEnabled = !1;
        var n = ["Active"].concat("Object").join("X");
        if (n in e.g)
          try {
            o.htmlfileEnabled = !!new e.g[n]("htmlfile");
          } catch {
          }
        o.enabled = o.htmlfileEnabled || t.iframeEnabled, p.exports = o;
      }, 514: function(p, _, e) {
        var r = e(3683), t = e(8915), a = e(8510), i = e(273), s = e(5717), o = e(3212).v;
        function n(u) {
          var c = this;
          o.call(this), r.polluteGlobalNamespace(), this.id = "a" + t.string(6);
          var h = i.addQuery(u, "c=" + encodeURIComponent(r.WPrefix + "." + this.id));
          e.g[r.WPrefix][this.id] = this._callback.bind(this), this._createScript(h), this.timeoutId = setTimeout(function() {
            c._abort(new Error("JSONP script loaded abnormally (timeout)"));
          }, n.timeout);
        }
        s(n, o), n.prototype.abort = function() {
          if (e.g[r.WPrefix][this.id]) {
            var u = new Error("JSONP user aborted read");
            u.code = 1e3, this._abort(u);
          }
        }, n.timeout = 35e3, n.scriptErrorTimeout = 1e3, n.prototype._callback = function(u) {
          this._cleanup(), this.aborting || (u && this.emit("message", u), this.emit("close", null, "network"), this.removeAllListeners());
        }, n.prototype._abort = function(u) {
          this._cleanup(), this.aborting = !0, this.emit("close", u.code, u.message), this.removeAllListeners();
        }, n.prototype._cleanup = function() {
          if (clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
            var u = this.script;
            u.parentNode.removeChild(u), u.onreadystatechange = u.onerror = u.onload = u.onclick = null, this.script = null;
          }
          delete e.g[r.WPrefix][this.id];
        }, n.prototype._scriptError = function() {
          var u = this;
          this.errorTimer || (this.errorTimer = setTimeout(function() {
            u.loadedOkay || u._abort(new Error("JSONP script loaded abnormally (onerror)"));
          }, n.scriptErrorTimeout));
        }, n.prototype._createScript = function(u) {
          var c, h = this, m = this.script = e.g.document.createElement("script");
          if (m.id = "a" + t.string(8), m.src = u, m.type = "text/javascript", m.charset = "UTF-8", m.onerror = this._scriptError.bind(this), m.onload = function() {
            h._abort(new Error("JSONP script loaded abnormally (onload)"));
          }, m.onreadystatechange = function() {
            if (m.readyState, /loaded|closed/.test(m.readyState)) {
              if (m && m.htmlFor && m.onclick) {
                h.loadedOkay = !0;
                try {
                  m.onclick();
                } catch {
                }
              }
              m && h._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"));
            }
          }, m.async === void 0 && e.g.document.attachEvent)
            if (a.isOpera())
              (c = this.script2 = e.g.document.createElement("script")).text = "try{var a = document.getElementById('" + m.id + "'); if(a)a.onerror();}catch(x){};", m.async = c.async = !1;
            else {
              try {
                m.htmlFor = m.id, m.event = "onclick";
              } catch {
              }
              m.async = !0;
            }
          m.async !== void 0 && (m.async = !0);
          var f = e.g.document.getElementsByTagName("head")[0];
          f.insertBefore(m, f.firstChild), c && f.insertBefore(c, f.firstChild);
        }, p.exports = n;
      }, 1044: function(p, _, e) {
        var r = e(5717), t = e(3212).v;
        function a(i, s) {
          t.call(this);
          var o = this;
          this.bufferPosition = 0, this.xo = new s("POST", i, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function(n, u) {
            o._chunkHandler(n, u), o.xo = null;
            var c = n === 200 ? "network" : "permanent";
            o.emit("close", null, c), o._cleanup();
          });
        }
        r(a, t), a.prototype._chunkHandler = function(i, s) {
          if (i === 200 && s)
            for (var o = -1; ; this.bufferPosition += o + 1) {
              var n = s.slice(this.bufferPosition);
              if ((o = n.indexOf(`
`)) === -1)
                break;
              var u = n.slice(0, o);
              u && this.emit("message", u);
            }
        }, a.prototype._cleanup = function() {
          this.removeAllListeners();
        }, a.prototype.abort = function() {
          this.xo && (this.xo.close(), this.emit("close", null, "user"), this.xo = null), this._cleanup();
        }, p.exports = a;
      }, 771: function(p, _, e) {
        var r, t, a = e(8915), i = e(273);
        p.exports = function(s, o, n) {
          r || ((r = e.g.document.createElement("form")).style.display = "none", r.style.position = "absolute", r.method = "POST", r.enctype = "application/x-www-form-urlencoded", r.acceptCharset = "UTF-8", (t = e.g.document.createElement("textarea")).name = "d", r.appendChild(t), e.g.document.body.appendChild(r));
          var u = "a" + a.string(8);
          r.target = u, r.action = i.addQuery(i.addPath(s, "/jsonp_send"), "i=" + u);
          var c = function(m) {
            try {
              return e.g.document.createElement('<iframe name="' + m + '">');
            } catch {
              var f = e.g.document.createElement("iframe");
              return f.name = m, f;
            }
          }(u);
          c.id = u, c.style.display = "none", r.appendChild(c);
          try {
            t.value = o;
          } catch {
          }
          r.submit();
          var h = function(m) {
            c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, setTimeout(function() {
              c.parentNode.removeChild(c), c = null;
            }, 500), t.value = "", n(m));
          };
          return c.onerror = function() {
            h();
          }, c.onload = function() {
            h();
          }, c.onreadystatechange = function(m) {
            c.readyState, c.readyState === "complete" && h();
          }, function() {
            h(new Error("Aborted"));
          };
        };
      }, 6073: function(p, _, e) {
        var r = e(3212).v, t = e(5717), a = e(7705), i = e(8510), s = e(273);
        function o(n, u, c) {
          var h = this;
          r.call(this), setTimeout(function() {
            h._start(n, u, c);
          }, 0);
        }
        t(o, r), o.prototype._start = function(n, u, c) {
          var h = this, m = new e.g.XDomainRequest();
          u = s.addQuery(u, "t=" + +/* @__PURE__ */ new Date()), m.onerror = function() {
            h._error();
          }, m.ontimeout = function() {
            h._error();
          }, m.onprogress = function() {
            m.responseText, h.emit("chunk", 200, m.responseText);
          }, m.onload = function() {
            h.emit("finish", 200, m.responseText), h._cleanup(!1);
          }, this.xdr = m, this.unloadRef = a.unloadAdd(function() {
            h._cleanup(!0);
          });
          try {
            this.xdr.open(n, u), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(c);
          } catch {
            this._error();
          }
        }, o.prototype._error = function() {
          this.emit("finish", 0, ""), this._cleanup(!1);
        }, o.prototype._cleanup = function(n) {
          if (this.xdr) {
            if (this.removeAllListeners(), a.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, n)
              try {
                this.xdr.abort();
              } catch {
              }
            this.unloadRef = this.xdr = null;
          }
        }, o.prototype.close = function() {
          this._cleanup(!0);
        }, o.enabled = !(!e.g.XDomainRequest || !i.hasDomain()), p.exports = o;
      }, 9033: function(p, _, e) {
        var r = e(5717), t = e(2940);
        function a(i, s, o, n) {
          t.call(this, i, s, o, n);
        }
        r(a, t), a.enabled = t.enabled && t.supportsCORS, p.exports = a;
      }, 7103: function(p, _, e) {
        var r = e(3212).v;
        function t() {
          var a = this;
          r.call(this), this.to = setTimeout(function() {
            a.emit("finish", 200, "{}");
          }, t.timeout);
        }
        e(5717)(t, r), t.prototype.close = function() {
          clearTimeout(this.to);
        }, t.timeout = 2e3, p.exports = t;
      }, 3515: function(p, _, e) {
        var r = e(5717), t = e(2940);
        function a(i, s, o) {
          t.call(this, i, s, o, { noCredentials: !0 });
        }
        r(a, t), a.enabled = t.enabled, p.exports = a;
      }, 2412: function(p, _, e) {
        var r = e(7705), t = e(273), a = e(5717), i = e(3212).v, s = e(9334);
        function o(n, u, c) {
          if (!o.enabled())
            throw new Error("Transport created when disabled");
          i.call(this);
          var h = this, m = t.addPath(n, "/websocket");
          m = m.slice(0, 5) === "https" ? "wss" + m.slice(5) : "ws" + m.slice(4), this.url = m, this.ws = new s(this.url, [], c), this.ws.onmessage = function(f) {
            f.data, h.emit("message", f.data);
          }, this.unloadRef = r.unloadAdd(function() {
            h.ws.close();
          }), this.ws.onclose = function(f) {
            f.code, f.reason, h.emit("close", f.code, f.reason), h._cleanup();
          }, this.ws.onerror = function(f) {
            h.emit("close", 1006, "WebSocket connection broken"), h._cleanup();
          };
        }
        a(o, i), o.prototype.send = function(n) {
          var u = "[" + n + "]";
          this.ws.send(u);
        }, o.prototype.close = function() {
          var n = this.ws;
          this._cleanup(), n && n.close();
        }, o.prototype._cleanup = function() {
          var n = this.ws;
          n && (n.onmessage = n.onclose = n.onerror = null), r.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners();
        }, o.enabled = function() {
          return !!s;
        }, o.transportName = "websocket", o.roundTrips = 2, p.exports = o;
      }, 9998: function(p, _, e) {
        var r = e(5717), t = e(9395), a = e(4620), i = e(1044), s = e(6073);
        function o(n) {
          if (!s.enabled)
            throw new Error("Transport created when disabled");
          t.call(this, n, "/xhr", i, s);
        }
        r(o, t), o.enabled = a.enabled, o.transportName = "xdr-polling", o.roundTrips = 2, p.exports = o;
      }, 4620: function(p, _, e) {
        var r = e(5717), t = e(9395), a = e(1044), i = e(6073);
        function s(o) {
          if (!i.enabled)
            throw new Error("Transport created when disabled");
          t.call(this, o, "/xhr_streaming", a, i);
        }
        r(s, t), s.enabled = function(o) {
          return !o.cookie_needed && !o.nullOrigin && i.enabled && o.sameScheme;
        }, s.transportName = "xdr-streaming", s.roundTrips = 2, p.exports = s;
      }, 2387: function(p, _, e) {
        var r = e(5717), t = e(9395), a = e(1044), i = e(9033), s = e(3515);
        function o(n) {
          if (!s.enabled && !i.enabled)
            throw new Error("Transport created when disabled");
          t.call(this, n, "/xhr", a, i);
        }
        r(o, t), o.enabled = function(n) {
          return !n.nullOrigin && (!(!s.enabled || !n.sameOrigin) || i.enabled);
        }, o.transportName = "xhr-polling", o.roundTrips = 2, p.exports = o;
      }, 9842: function(p, _, e) {
        var r = e(5717), t = e(9395), a = e(1044), i = e(9033), s = e(3515), o = e(8510);
        function n(u) {
          if (!s.enabled && !i.enabled)
            throw new Error("Transport created when disabled");
          t.call(this, u, "/xhr_streaming", a, i);
        }
        r(n, t), n.enabled = function(u) {
          return !u.nullOrigin && !o.isOpera() && i.enabled;
        }, n.transportName = "xhr-streaming", n.roundTrips = 2, n.needBody = !!e.g.document, p.exports = n;
      }, 2017: function(p, _, e) {
        e.g.crypto && e.g.crypto.getRandomValues ? p.exports.randomBytes = function(r) {
          var t = new Uint8Array(r);
          return e.g.crypto.getRandomValues(t), t;
        } : p.exports.randomBytes = function(r) {
          for (var t = new Array(r), a = 0; a < r; a++)
            t[a] = Math.floor(256 * Math.random());
          return t;
        };
      }, 8510: function(p, _, e) {
        p.exports = { isOpera: function() {
          return e.g.navigator && /opera/i.test(e.g.navigator.userAgent);
        }, isKonqueror: function() {
          return e.g.navigator && /konqueror/i.test(e.g.navigator.userAgent);
        }, hasDomain: function() {
          if (!e.g.document)
            return !0;
          try {
            return !!e.g.document.domain;
          } catch {
            return !1;
          }
        } };
      }, 8028: function(p) {
        var _, e = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
        p.exports = { quote: function(r) {
          var t = JSON.stringify(r);
          return e.lastIndex = 0, e.test(t) ? (_ || (_ = function(a) {
            var i, s = {}, o = [];
            for (i = 0; i < 65536; i++)
              o.push(String.fromCharCode(i));
            return a.lastIndex = 0, o.join("").replace(a, function(n) {
              return s[n] = "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4), "";
            }), a.lastIndex = 0, s;
          }(e)), t.replace(e, function(a) {
            return _[a];
          })) : t;
        } };
      }, 7705: function(p, _, e) {
        var r = e(8915), t = {}, a = !1, i = e.g.chrome && e.g.chrome.app && e.g.chrome.app.runtime;
        p.exports = { attachEvent: function(s, o) {
          e.g.addEventListener !== void 0 ? e.g.addEventListener(s, o, !1) : e.g.document && e.g.attachEvent && (e.g.document.attachEvent("on" + s, o), e.g.attachEvent("on" + s, o));
        }, detachEvent: function(s, o) {
          e.g.addEventListener !== void 0 ? e.g.removeEventListener(s, o, !1) : e.g.document && e.g.detachEvent && (e.g.document.detachEvent("on" + s, o), e.g.detachEvent("on" + s, o));
        }, unloadAdd: function(s) {
          if (i)
            return null;
          var o = r.string(8);
          return t[o] = s, a && setTimeout(this.triggerUnloadCallbacks, 0), o;
        }, unloadDel: function(s) {
          s in t && delete t[s];
        }, triggerUnloadCallbacks: function() {
          for (var s in t)
            t[s](), delete t[s];
        } }, i || p.exports.attachEvent("unload", function() {
          a || (a = !0, p.exports.triggerUnloadCallbacks());
        });
      }, 3683: function(p, _, e) {
        var r = e(7705), t = e(8510);
        p.exports = { WPrefix: "_jp", currentWindowId: null, polluteGlobalNamespace: function() {
          p.exports.WPrefix in e.g || (e.g[p.exports.WPrefix] = {});
        }, postMessage: function(a, i) {
          e.g.parent !== e.g && e.g.parent.postMessage(JSON.stringify({ windowId: p.exports.currentWindowId, type: a, data: i || "" }), "*");
        }, createIframe: function(a, i) {
          var s, o, n = e.g.document.createElement("iframe"), u = function() {
            clearTimeout(s);
            try {
              n.onload = null;
            } catch {
            }
            n.onerror = null;
          }, c = function() {
            n && (u(), setTimeout(function() {
              n && n.parentNode.removeChild(n), n = null;
            }, 0), r.unloadDel(o));
          }, h = function(m) {
            n && (c(), i(m));
          };
          return n.src = a, n.style.display = "none", n.style.position = "absolute", n.onerror = function() {
            h("onerror");
          }, n.onload = function() {
            clearTimeout(s), s = setTimeout(function() {
              h("onload timeout");
            }, 2e3);
          }, e.g.document.body.appendChild(n), s = setTimeout(function() {
            h("timeout");
          }, 15e3), o = r.unloadAdd(c), { post: function(m, f) {
            setTimeout(function() {
              try {
                n && n.contentWindow && n.contentWindow.postMessage(m, f);
              } catch {
              }
            }, 0);
          }, cleanup: c, loaded: u };
        }, createHtmlfile: function(a, i) {
          var s, o, n, u = ["Active"].concat("Object").join("X"), c = new e.g[u]("htmlfile"), h = function() {
            clearTimeout(s), n.onerror = null;
          }, m = function() {
            c && (h(), r.unloadDel(o), n.parentNode.removeChild(n), n = c = null, CollectGarbage());
          }, f = function(d) {
            c && (m(), i(d));
          };
          c.open(), c.write('<html><script>document.domain="' + e.g.document.domain + '";<\/script></html>'), c.close(), c.parentWindow[p.exports.WPrefix] = e.g[p.exports.WPrefix];
          var g = c.createElement("div");
          return c.body.appendChild(g), n = c.createElement("iframe"), g.appendChild(n), n.src = a, n.onerror = function() {
            f("onerror");
          }, s = setTimeout(function() {
            f("timeout");
          }, 15e3), o = r.unloadAdd(m), { post: function(d, l) {
            try {
              setTimeout(function() {
                n && n.contentWindow && n.contentWindow.postMessage(d, l);
              }, 0);
            } catch {
            }
          }, cleanup: m, loaded: h };
        } }, p.exports.iframeEnabled = !1, e.g.document && (p.exports.iframeEnabled = (typeof e.g.postMessage == "function" || typeof e.g.postMessage == "object") && !t.isKonqueror());
      }, 4886: function(p, _, e) {
        var r = {};
        ["log", "debug", "warn"].forEach(function(t) {
          var a;
          try {
            a = e.g.console && e.g.console[t] && e.g.console[t].apply;
          } catch {
          }
          r[t] = a ? function() {
            return e.g.console[t].apply(e.g.console, arguments);
          } : t === "log" ? function() {
          } : r.log;
        }), p.exports = r;
      }, 2217: function(p) {
        p.exports = { isObject: function(_) {
          var e = typeof _;
          return e === "function" || e === "object" && !!_;
        }, extend: function(_) {
          if (!this.isObject(_))
            return _;
          for (var e, r, t = 1, a = arguments.length; t < a; t++)
            for (r in e = arguments[t])
              Object.prototype.hasOwnProperty.call(e, r) && (_[r] = e[r]);
          return _;
        } };
      }, 8915: function(p, _, e) {
        var r = e(2017);
        p.exports = { string: function(t) {
          for (var a = r.randomBytes(t), i = [], s = 0; s < t; s++)
            i.push("abcdefghijklmnopqrstuvwxyz012345".substr(a[s] % 32, 1));
          return i.join("");
        }, number: function(t) {
          return Math.floor(Math.random() * t);
        }, numberString: function(t) {
          var a = ("" + (t - 1)).length;
          return (new Array(a + 1).join("0") + this.number(t)).slice(-a);
        } };
      }, 5581: function(p) {
        p.exports = function(_) {
          return { filterToEnabled: function(e, r) {
            var t = { main: [], facade: [] };
            return e ? typeof e == "string" && (e = [e]) : e = [], _.forEach(function(a) {
              a && (a.transportName === "websocket" && r.websocket === !1 || (e.length && e.indexOf(a.transportName) === -1 ? a.transportName : a.enabled(r) ? (a.transportName, t.main.push(a), a.facadeTransport && t.facade.push(a.facadeTransport)) : a.transportName));
            }), t;
          } };
        };
      }, 273: function(p, _, e) {
        var r = e(4564);
        p.exports = { getOrigin: function(t) {
          if (!t)
            return null;
          var a = new r(t);
          if (a.protocol === "file:")
            return null;
          var i = a.port;
          return i || (i = a.protocol === "https:" ? "443" : "80"), a.protocol + "//" + a.hostname + ":" + i;
        }, isOriginEqual: function(t, a) {
          return this.getOrigin(t) === this.getOrigin(a);
        }, isSchemeEqual: function(t, a) {
          return t.split(":")[0] === a.split(":")[0];
        }, addPath: function(t, a) {
          var i = t.split("?");
          return i[0] + a + (i[1] ? "?" + i[1] : "");
        }, addQuery: function(t, a) {
          return t + (t.indexOf("?") === -1 ? "?" + a : "&" + a);
        }, isLoopbackAddr: function(t) {
          return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t) || /^\[::1\]$/.test(t);
        } };
      }, 2828: function(p) {
        p.exports = "1.6.1";
      }, 4564: function(p, _, e) {
        var r = e(7418), t = e(7129), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, i = /[\n\r\t]/g, s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, o = /:\d+$/, n = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, u = /^[a-zA-Z]:/;
        function c(E) {
          return (E || "").toString().replace(a, "");
        }
        var h = [["#", "hash"], ["?", "query"], function(E, T) {
          return g(T.protocol) ? E.replace(/\\/g, "/") : E;
        }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], m = { hash: 1, query: 1 };
        function f(E) {
          var T, I = (typeof window < "u" ? window : e.g !== void 0 ? e.g : typeof self < "u" ? self : {}).location || {}, O = {}, C = typeof (E = E || I);
          if (E.protocol === "blob:")
            O = new l(unescape(E.pathname), {});
          else if (C === "string")
            for (T in O = new l(E, {}), m)
              delete O[T];
          else if (C === "object") {
            for (T in E)
              T in m || (O[T] = E[T]);
            O.slashes === void 0 && (O.slashes = s.test(E.href));
          }
          return O;
        }
        function g(E) {
          return E === "file:" || E === "ftp:" || E === "http:" || E === "https:" || E === "ws:" || E === "wss:";
        }
        function d(E, T) {
          E = (E = c(E)).replace(i, ""), T = T || {};
          var I, O = n.exec(E), C = O[1] ? O[1].toLowerCase() : "", N = !!O[2], v = !!O[3], y = 0;
          return N ? v ? (I = O[2] + O[3] + O[4], y = O[2].length + O[3].length) : (I = O[2] + O[4], y = O[2].length) : v ? (I = O[3] + O[4], y = O[3].length) : I = O[4], C === "file:" ? y >= 2 && (I = I.slice(2)) : g(C) ? I = O[4] : C ? N && (I = I.slice(2)) : y >= 2 && g(T.protocol) && (I = O[4]), { protocol: C, slashes: N || g(C), slashesCount: y, rest: I };
        }
        function l(E, T, I) {
          if (E = (E = c(E)).replace(i, ""), !(this instanceof l))
            return new l(E, T, I);
          var O, C, N, v, y, A, x = h.slice(), j = typeof T, P = this, W = 0;
          for (j !== "object" && j !== "string" && (I = T, T = null), I && typeof I != "function" && (I = t.parse), O = !(C = d(E || "", T = f(T))).protocol && !C.slashes, P.slashes = C.slashes || O && T.slashes, P.protocol = C.protocol || T.protocol || "", E = C.rest, (C.protocol === "file:" && (C.slashesCount !== 2 || u.test(E)) || !C.slashes && (C.protocol || C.slashesCount < 2 || !g(P.protocol))) && (x[3] = [/(.*)/, "pathname"]); W < x.length; W++)
            typeof (v = x[W]) != "function" ? (N = v[0], A = v[1], N != N ? P[A] = E : typeof N == "string" ? ~(y = N === "@" ? E.lastIndexOf(N) : E.indexOf(N)) && (typeof v[2] == "number" ? (P[A] = E.slice(0, y), E = E.slice(y + v[2])) : (P[A] = E.slice(y), E = E.slice(0, y))) : (y = N.exec(E)) && (P[A] = y[1], E = E.slice(0, y.index)), P[A] = P[A] || O && v[3] && T[A] || "", v[4] && (P[A] = P[A].toLowerCase())) : E = v(E, P);
          I && (P.query = I(P.query)), O && T.slashes && P.pathname.charAt(0) !== "/" && (P.pathname !== "" || T.pathname !== "") && (P.pathname = function(Z, ee) {
            if (Z === "")
              return ee;
            for (var G = (ee || "/").split("/").slice(0, -1).concat(Z.split("/")), le = G.length, ce = G[le - 1], _e = !1, Ue = 0; le--; )
              G[le] === "." ? G.splice(le, 1) : G[le] === ".." ? (G.splice(le, 1), Ue++) : Ue && (le === 0 && (_e = !0), G.splice(le, 1), Ue--);
            return _e && G.unshift(""), ce !== "." && ce !== ".." || G.push(""), G.join("/");
          }(P.pathname, T.pathname)), P.pathname.charAt(0) !== "/" && g(P.protocol) && (P.pathname = "/" + P.pathname), r(P.port, P.protocol) || (P.host = P.hostname, P.port = ""), P.username = P.password = "", P.auth && (~(y = P.auth.indexOf(":")) ? (P.username = P.auth.slice(0, y), P.username = encodeURIComponent(decodeURIComponent(P.username)), P.password = P.auth.slice(y + 1), P.password = encodeURIComponent(decodeURIComponent(P.password))) : P.username = encodeURIComponent(decodeURIComponent(P.auth)), P.auth = P.password ? P.username + ":" + P.password : P.username), P.origin = P.protocol !== "file:" && g(P.protocol) && P.host ? P.protocol + "//" + P.host : "null", P.href = P.toString();
        }
        l.prototype = { set: function(E, T, I) {
          var O = this;
          switch (E) {
            case "query":
              typeof T == "string" && T.length && (T = (I || t.parse)(T)), O[E] = T;
              break;
            case "port":
              O[E] = T, r(T, O.protocol) ? T && (O.host = O.hostname + ":" + T) : (O.host = O.hostname, O[E] = "");
              break;
            case "hostname":
              O[E] = T, O.port && (T += ":" + O.port), O.host = T;
              break;
            case "host":
              O[E] = T, o.test(T) ? (T = T.split(":"), O.port = T.pop(), O.hostname = T.join(":")) : (O.hostname = T, O.port = "");
              break;
            case "protocol":
              O.protocol = T.toLowerCase(), O.slashes = !I;
              break;
            case "pathname":
            case "hash":
              if (T) {
                var C = E === "pathname" ? "/" : "#";
                O[E] = T.charAt(0) !== C ? C + T : T;
              } else
                O[E] = T;
              break;
            case "username":
            case "password":
              O[E] = encodeURIComponent(T);
              break;
            case "auth":
              var N = T.indexOf(":");
              ~N ? (O.username = T.slice(0, N), O.username = encodeURIComponent(decodeURIComponent(O.username)), O.password = T.slice(N + 1), O.password = encodeURIComponent(decodeURIComponent(O.password))) : O.username = encodeURIComponent(decodeURIComponent(T));
          }
          for (var v = 0; v < h.length; v++) {
            var y = h[v];
            y[4] && (O[y[1]] = O[y[1]].toLowerCase());
          }
          return O.auth = O.password ? O.username + ":" + O.password : O.username, O.origin = O.protocol !== "file:" && g(O.protocol) && O.host ? O.protocol + "//" + O.host : "null", O.href = O.toString(), O;
        }, toString: function(E) {
          E && typeof E == "function" || (E = t.stringify);
          var T, I = this, O = I.host, C = I.protocol;
          C && C.charAt(C.length - 1) !== ":" && (C += ":");
          var N = C + (I.protocol && I.slashes || g(I.protocol) ? "//" : "");
          return I.username ? (N += I.username, I.password && (N += ":" + I.password), N += "@") : I.password ? (N += ":" + I.password, N += "@") : I.protocol !== "file:" && g(I.protocol) && !O && I.pathname !== "/" && (N += "@"), (O[O.length - 1] === ":" || o.test(I.hostname) && !I.port) && (O += ":"), N += O + I.pathname, (T = typeof I.query == "object" ? E(I.query) : I.query) && (N += T.charAt(0) !== "?" ? "?" + T : T), I.hash && (N += I.hash), N;
        } }, l.extractProtocol = d, l.location = f, l.trimLeft = c, l.qs = t, p.exports = l;
      } }, __webpack_module_cache__ = {};
      function __webpack_require__(p) {
        var _ = __webpack_module_cache__[p];
        if (_ !== void 0)
          return _.exports;
        var e = __webpack_module_cache__[p] = { exports: {} };
        return __webpack_modules__[p].call(e.exports, e, e.exports, __webpack_require__), e.exports;
      }
      __webpack_require__.amdO = {}, __webpack_require__.n = function(p) {
        var _ = p && p.__esModule ? function() {
          return p.default;
        } : function() {
          return p;
        };
        return __webpack_require__.d(_, { a: _ }), _;
      }, __webpack_require__.d = function(p, _) {
        for (var e in _)
          __webpack_require__.o(_, e) && !__webpack_require__.o(p, e) && Object.defineProperty(p, e, { enumerable: !0, get: _[e] });
      }, __webpack_require__.g = function() {
        if (typeof globalThis == "object")
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object")
            return window;
        }
      }(), __webpack_require__.o = function(p, _) {
        return Object.prototype.hasOwnProperty.call(p, _);
      }, __webpack_require__.r = function(p) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(p, "__esModule", { value: !0 });
      };
      var __webpack_exports__ = {};
      return function() {
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: function() {
          return Ke;
        } });
        var p = __webpack_require__(8e3), _ = __webpack_require__.n(p), e = __webpack_require__(3281), r = __webpack_require__.n(e), t = __webpack_require__(3720), a = __webpack_require__.n(t), i = (__webpack_require__(9601), __webpack_require__(8309), __webpack_require__(6992), __webpack_require__(1532), __webpack_require__(1539), __webpack_require__(8783), __webpack_require__(3948), __webpack_require__(4812), __webpack_require__(9070), __webpack_require__(8674), __webpack_require__(3843), __webpack_require__(3710), __webpack_require__(2564), __webpack_require__(9653), __webpack_require__(7941), __webpack_require__(9554), __webpack_require__(4747), __webpack_require__(1038), __webpack_require__(7327), __webpack_require__(561), __webpack_require__(7252)), s = __webpack_require__(4370), o = __webpack_require__(5531), n = (__webpack_require__(2526), __webpack_require__(1817), __webpack_require__(2165), __webpack_require__(9714), __webpack_require__(7042), __webpack_require__(5212), __webpack_require__(2772), __webpack_require__(9753), __webpack_require__(8264), __webpack_require__(9575), __webpack_require__(2472), __webpack_require__(2990), __webpack_require__(8927), __webpack_require__(3105), __webpack_require__(5035), __webpack_require__(4345), __webpack_require__(7174), __webpack_require__(2846), __webpack_require__(4731), __webpack_require__(7209), __webpack_require__(6319), __webpack_require__(8867), __webpack_require__(7789), __webpack_require__(3739), __webpack_require__(9368), __webpack_require__(4483), __webpack_require__(2056), __webpack_require__(3462), __webpack_require__(678), __webpack_require__(7462), __webpack_require__(3824), __webpack_require__(5021), __webpack_require__(2974), __webpack_require__(5016), __webpack_require__(6699), __webpack_require__(2023), __webpack_require__(3161), __webpack_require__(1249), __webpack_require__(4188)), u = __webpack_require__.n(n), c = __webpack_require__(8161), h = __webpack_require__(7360), m = ["public", "members_only", "allow_user_invites", "invite_need_confirm"], f = { name: "name", title: "name", description: "description", public: "public", members_only: "approval", allow_user_invites: "allowInvites", max_users: "maxUsers", invite_need_confirm: "inviteNeedConfirm", custom: "ext", last_modified: "lastModified" };
        function g(b, R) {
          var k, U, Y, Q, L, Ae, D = this, Le = this.context, De = Le.userId, Fe = Le.jid, Ge = R.from.name === De && Fe.clientResource !== R.from.clientResource;
          return R.isThread ? (Y = { id: R.mucId.name, name: R.mucName, operation: "", parentId: R.mucParentId.name, operator: R.from.name, userName: R.to.length ? R.to[0].name : "" }, Q = { chatThreadId: R.mucId.name, chatThreadName: R.mucName, operation: "", parentId: R.mucParentId.name }) : (U = { type: "", owner: R.from.name, gid: R.mucId.name, from: R.from.name, fromJid: R.from, to: R.to.length ? R.to[0].name : "", toJid: R.to, chatroom: R.isChatroom, status: R.status }, L = { operation: "", id: R.mucId.name, from: R.from.name }, R.isChatroom && (!((k = R == null ? void 0 : R.eventInfo) === null || k === void 0) && k.ext) && (Ae = JSON.parse(R.eventInfo.ext))), ({ 45: function() {
            var F, oe, he;
            L.operation = "memberAttributesUpdate";
            var ge = JSON.parse((F = R == null ? void 0 : R.eventInfo) === null || F === void 0 ? void 0 : F.ext) || {};
            L.attributes = ge.properties || {}, L.userId = ge.username || "", Ge ? (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onMultiDeviceEvent", L) : (he = D.eventHandler) === null || he === void 0 || he.dispatch("onGroupEvent", L);
          }, 44: function() {
            var F;
            L.operation = "removeChatRoomAttributes", L.attributes = Ae.result.successKeys, Ae.result.successKeys.length > 0 && ((F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", L));
          }, 43: function() {
            var F;
            L.operation = "updateChatRoomAttributes";
            var oe = {};
            Ae.result.successKeys.forEach(function(he) {
              oe[he] = Ae.properties[he];
            }), L.attributes = oe, Ae.result.successKeys.length > 0 && ((F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", L));
          }, 42: function() {
          }, 41: function() {
          }, 40: function() {
          }, 39: function() {
          }, 38: function() {
            var F;
            Q.operation = "chatThreadNameUpdate", (F = D.eventHandler) === null || F === void 0 || F.dispatch("onMultiDeviceEvent", Q);
          }, 37: function() {
            var F;
            Y.operation = "userRemove", (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatThreadChange", Y);
          }, 36: function() {
            var F;
            Q.operation = "chatThreadLeave", (F = D.eventHandler) === null || F === void 0 || F.dispatch("onMultiDeviceEvent", Q);
          }, 35: function() {
            var F;
            Q.operation = "chatThreadJoin", (F = D.eventHandler) === null || F === void 0 || F.dispatch("onMultiDeviceEvent", Q);
          }, 34: function() {
            var F;
            Q.operation = "chatThreadDestroy", (F = D.eventHandler) === null || F === void 0 || F.dispatch("onMultiDeviceEvent", Q);
          }, 33: function() {
            var F;
            Q.operation = "chatThreadCreate", (F = D.eventHandler) === null || F === void 0 || F.dispatch("onMultiDeviceEvent", Q);
          }, 32: function() {
            var F, oe, he, ge;
            U.type = R.isChatroom ? "rmChatRoomMute" : "rmGroupMute", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "unmuteAllMembers", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 31: function() {
            var F, oe, he, ge;
            U.type = R.isChatroom ? "muteChatRoom" : "muteGroup", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "muteAllMembers", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 30: function() {
            var F, oe, he, ge;
            U.type = R.isChatroom ? "rmUserFromChatRoomWhiteList" : "rmUserFromGroupWhiteList", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "removeAllowlistMember", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 29: function() {
            var F, oe, he, ge;
            U.type = R.isChatroom ? "addUserToChatRoomWhiteList" : "addUserToGroupWhiteList", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "addUserToAllowlist", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 28: function() {
            var F, oe, he, ge;
            U.type = "deleteFile", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "deleteFile", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 27: function() {
            var F, oe, he, ge;
            U.type = "uploadFile", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "uploadFile", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 26: function() {
            var F, oe, he, ge;
            U.type = "deleteAnnouncement", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "deleteAnnouncement", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 25: function() {
            var F, oe, he, ge;
            U.type = "updateAnnouncement", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "updateAnnouncement", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 24: function() {
            var F, oe, he, ge;
            U.type = "removeMute", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "unmuteMember", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 23: function() {
            var F, oe, he, ge;
            U.type = "addMute", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "muteMember", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 22: function() {
            var F, oe, he, ge;
            U.type = "removeAdmin", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "removeAdmin", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 21: function() {
            var F, oe, he, ge;
            U.type = "addAdmin", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "setAdmin", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 20: function() {
            var F, oe, he, ge;
            U.type = "changeOwner", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "changeOwner", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 19: function() {
            var F, oe, he, ge;
            U.type = "direct_joined", U.groupName = R.mucName, D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "directJoined", L.name = R.mucName, R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 18: function() {
            var F, oe, he, ge;
            U.type = R.isChatroom ? "leaveChatRoom" : "leaveGroup", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "memberAbsence", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 17: function() {
            var F, oe, he, ge;
            U.type = R.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "memberPresence", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 16: function() {
            var F, oe;
            U.type = "unblock", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U);
          }, 15: function() {
            var F, oe;
            U.type = "block", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U);
          }, 14: function() {
            var F, oe, he, ge, et, je = R.isChatroom;
            if (!je) {
              var Ze = JSON.parse(((F = R == null ? void 0 : R.eventInfo) === null || F === void 0 ? void 0 : F.ext) || "{}", function(be, at) {
                return be === "last_modified" ? Number(at) : m.includes(be) ? at === "true" || at === !0 : at;
              });
              L.detail = U.detail = {}, Object.keys(Ze).forEach(function(be) {
                var at = f[be];
                if (at) {
                  var Ct = Ze[be];
                  L.detail && (L.detail[at] = Ct), U.detail && (U.detail[at] = Ct);
                }
              });
            }
            U.type = "update", D.onPresence && D.onPresence(U), je ? (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onChatroomChange", U) : (he = D.eventHandler) === null || he === void 0 || he.dispatch("onGroupChange", U), L.operation = "updateInfo", je ? (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onChatroomEvent", L) : (et = D.eventHandler) === null || et === void 0 || et.dispatch("onGroupEvent", L);
          }, 13: function() {
            var F, oe, he, ge;
            U.type = "allow", U.reason = R.reason, D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "unblockMember", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 12: function() {
            var F, oe;
            U.type = "ban", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U);
          }, 11: function() {
            var F, oe;
            U.type = "getBlackList", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U);
          }, 10: function() {
            var F, oe, he, ge;
            U.type = "removedFromGroup", U.kicked = U.to, D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "removeMember", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 9: function() {
            var F, oe, he, ge;
            U.type = "invite_decline", U.kicked = U.to, D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "rejectInvite", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 8: function() {
            var F, oe, he, ge;
            U.type = "invite_accept", U.kicked = U.to, D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "acceptInvite", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 7: function() {
            var F, oe, he, ge;
            U.type = "invite", U.kicked = U.to, U.groupName = R.mucName, D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "inviteToJoin", L.name = R.mucName, R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 6: function() {
            var F, oe, he, ge;
            U.type = "joinPublicGroupDeclined", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "joinPublicGroupDeclined", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 5: function() {
            var F, oe, he, ge;
            U.type = "joinPublicGroupSuccess", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "acceptRequest", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 4: function() {
            var F, oe, he, ge;
            U.type = "joinGroupNotifications", U.reason = R.reason, D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "requestToJoin", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 3: function() {
            var F, oe;
            U.type = "leave", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U);
          }, 2: function() {
            var F, oe;
            U.type = "join", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U);
          }, 1: function() {
            var F, oe, he, ge;
            U.type = "deleteGroupChat", D.onPresence && D.onPresence(U), R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomChange", U) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupChange", U), L.operation = "destroy", R.isChatroom ? (he = D.eventHandler) === null || he === void 0 || he.dispatch("onChatroomEvent", L) : (ge = D.eventHandler) === null || ge === void 0 || ge.dispatch("onGroupEvent", L);
          }, 0: function() {
            var F, oe;
            L.operation = "create", R.isChatroom ? (F = D.eventHandler) === null || F === void 0 || F.dispatch("onChatroomEvent", L) : (oe = D.eventHandler) === null || oe === void 0 || oe.dispatch("onGroupEvent", L);
          } }[b] || function() {
            console.error("No match operation ".concat(b));
          })();
        }
        var d = function(b) {
          var R = this.root.lookup("easemob.pb.MUCBody").decode(b.payload), k = R.operation;
          h.kg.debug("onMucMessage", R), g.call(this, k, R);
        }, l = __webpack_require__(4968), E = function(b) {
          var R, k, U, Y, Q, L, Ae = this.root.lookup("easemob.pb.StatisticsBody").decode(b.payload);
          switch (Ae.operation) {
            case 0:
              this.onStatisticMessage && this.onStatisticMessage(Ae), (R = this.eventHandler) === null || R === void 0 || R.dispatch("onStatisticMessage", Ae);
              break;
            case 1:
              L = i.Z.create({ type: o.E.WEBIM_CONNCTION_USER_REMOVED, message: "user has been removed" }), this.logOut = !0, this.onError && this.onError(L), (k = this.eventHandler) === null || k === void 0 || k.dispatch("onError", L);
              break;
            case 2:
              L = i.Z.create({ type: o.E.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE, message: "the user is already logged on another device" }), this.logOut = !0, this.onError && this.onError(L), (U = this.eventHandler) === null || U === void 0 || U.dispatch("onError", L);
              break;
            case 3:
              L = i.Z.create({ type: o.E.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD, message: "the user was kicked by changing password" }), this.logOut = !0, this.onError && this.onError(L), (Y = this.eventHandler) === null || Y === void 0 || Y.dispatch("onError", L);
              break;
            case 4:
              L = i.Z.create({ type: o.E.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE, message: "the user was kicked by other device" }), this.logOut = !0, this.onError && this.onError(L), (Q = this.eventHandler) === null || Q === void 0 || Q.dispatch("onError", L);
              break;
            default:
              h.kg.error("handleStatisticsMsg:", Ae);
          }
        }, T = (__webpack_require__(9720), __webpack_require__(4363));
        function I(b) {
          var R, k = [], U = [], Y = b.data;
          Y && Y.values && Y.values.forEach(function(Q) {
            Object.entries(Q.status).forEach(function(L) {
              U.push({ device: L[0], status: Number(L[1]) });
            }), k.push({ userId: Q.uid, lastTime: Number(Q.last_time), expire: Number(Q.expiry), ext: Q.ext, statusDetails: U });
          }), this.onPresenceStatusChange && this.onPresenceStatusChange(k), (R = this.eventHandler) === null || R === void 0 || R.dispatch("onPresenceStatusChange", k);
        }
        function O(b) {
          var R = this;
          b.data.forEach(function(k) {
            var U, Y = { from: k.from, to: k.to, chatType: k.channel_type === "chat" ? "singleChat" : "groupChat", messageId: k.messageId, reactions: k.reactions, ts: k.ts };
            (U = R.eventHandler) === null || U === void 0 || U.dispatch("onReactionChange", Y);
          });
        }
        function C(b) {
          var R, k, U, Y;
          if (b.data) {
            var Q = b.data, L = { id: Q.id || "", name: Q.name || "", parentId: Q.muc_parent_id || "", messageId: Q.msg_parent_id || "", timestamp: Q.timestamp || 0, operator: Q.from || "", operation: "" };
            switch (Q.operation) {
              case "create":
                L.operation = "create", L.createTimestamp = L.timestamp, L.messageCount = 0, (R = this.eventHandler) === null || R === void 0 || R.dispatch("onChatThreadChange", L);
                break;
              case "update_msg":
                L.operation = "update", L.messageCount = Q.message_count, Q.last_message && JSON.stringify(Q.last_message) !== "{}" ? L.lastMessage = (0, T.w)(Q.last_message) : JSON.stringify(Q.last_message) === "{}" && (L.lastMessage = {}), (k = this.eventHandler) === null || k === void 0 || k.dispatch("onChatThreadChange", L);
                break;
              case "update":
                L.operation = "update", L.messageCount = Q.message_count, (U = this.eventHandler) === null || U === void 0 || U.dispatch("onChatThreadChange", L);
                break;
              case "delete":
                L.operation = "destroy", (Y = this.eventHandler) === null || Y === void 0 || Y.dispatch("onChatThreadChange", L);
            }
          }
        }
        function N(b) {
          var R, k = b.data;
          if (k.resource !== this.clientResource) {
            var U = { operation: "deleteRoaming", conversationId: k.to, chatType: k.chatType === "chat" ? "singleChat" : "groupChat", resource: k.resource };
            (R = this.eventHandler) === null || R === void 0 || R.dispatch("onMultiDeviceEvent", U);
          }
        }
        function v(b) {
          var R, k = b.data, U = { operation: k.op === "del" ? "deleteConversation" : k.op === "top" ? "pinnedConversation" : "unpinnedConversation", conversationId: k.id, conversationType: k.type === "chat" ? "singleChat" : "groupChat", timestamp: k.ts };
          this.clientResource !== k.res && ((R = this.eventHandler) === null || R === void 0 || R.dispatch("onMultiDeviceEvent", U));
        }
        var y = function(b) {
          var R = s.P6.parseNotify(b.payload);
          switch (R.type) {
            case "presence":
              I.call(this, R);
              break;
            case "reaction":
              O.call(this, R);
              break;
            case "thread":
              C.call(this, R);
              break;
            case "roaming_delete":
              N.call(this, R);
              break;
            case "conv":
              v.call(this, R);
              break;
            default:
              h.kg.error("unexpected notify type: ".concat(R.type));
          }
        }, A = __webpack_require__(2071), x = __webpack_require__(1595);
        function j(b) {
          return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
            return typeof R;
          } : function(R) {
            return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
          }, j(b);
        }
        var P = function() {
          return P = Object.assign || function(b) {
            for (var R, k = 1, U = arguments.length; k < U; k++)
              for (var Y in R = arguments[k])
                Object.prototype.hasOwnProperty.call(R, Y) && (b[Y] = R[Y]);
            return b;
          }, P.apply(this, arguments);
        }, W = s.P6.getEnvInfo();
        function Z() {
          var b = "webim", R = "", k = "", U = [], Y = (/* @__PURE__ */ new Date()).valueOf();
          this.deviceId === "webim" ? (k = "random_" + Y.toString(), b = this.deviceId + "_" + k, R = this.deviceId) : b = R = k = "webim_" + this.deviceId, this.context.jid && (this.context.jid.clientResource = b);
          var Q = this.root.lookup("easemob.pb.Provision"), L = Q.decode(U);
          L.compressType = this.compressType, L.encryptType = this.encryptType, L.osType = this.osType, L.version = this.version, L.deviceName = R, L.resource = b, L.deviceUuid = k, L.auth = "$t$" + this.token, L.actionVersion = "v2.0", L = Q.encode(L).finish();
          var Ae = this.root.lookup("easemob.pb.MSync"), D = Ae.decode(U);
          return D.version = this.version, D.guid = this.context.jid, D.auth = "$t$" + this.token, D.command = 3, D.deviceId = R, D.serviceId = this.dataReport.getServiceId(), D.encryptType = this.encryptType, D.payload = L, Ae.encode(D).finish();
        }
        function ee(b, R) {
          var k = this, U = s.P6.getEnvInfo();
          if (U.platform === "web" || U.platform === "zfb" || U.platform === "dd") {
            for (var Y = "", Q = 0; Q < b.length; Q++)
              Y += String.fromCharCode(b[Q]);
            return Y = u().btoa(Y), U.platform === "web" ? Y : { data: Y, isBuffer: !1, complete: function() {
            }, fail: function(Ae) {
              Ae.errMsg !== "sendSocketMessage:fail taskID not exist" && Ae.errMsg !== "SocketTast.send:fail SocketTask.readyState is not OPEN" || (h.kg.debug("send message fail and reconnect"), k.reconnecting || k.reconnect()), R && k._msgHash && k._msgHash[R] && k._msgHash[R].fail({ id: R });
            } };
          }
          var L = b;
          return { data: L.buffer.slice(L.byteOffset, L.byteOffset + L.byteLength), fail: function(Ae) {
            Ae.errMsg !== "sendSocketMessage:fail taskID not exist" && Ae.errMsg !== "SocketTast.send:fail SocketTask.readyState is not OPEN" || k.reconnecting || k.reconnect(), R && k._msgHash && k._msgHash[R] && k._msgHash[R].fail({ id: R });
          } };
        }
        function G(b, R) {
          switch (b.ns) {
            case 0:
              E.call(this, b);
              break;
            case 1:
              c.Z.call(this, b, R);
              break;
            case 2:
              d.call(this, b);
              break;
            case 3:
              l.Z.handleRosterMsg.call(this, b);
              break;
            case 4:
              this.registerConfrIQHandler && this.registerConfrIQHandler(b, R, this);
              break;
            case 5:
              y.call(this, b);
              break;
            default:
              h.kg.error("distributeMeta", b);
          }
        }
        function le(b, R) {
          for (var k = function(Q) {
            var L = new (a())(b[Q].id.low, b[Q].id.high, b[Q].id.unsigned).toString();
            if (U._load_msg_cache.some(function(De) {
              return De.msgId === L;
            }))
              return "continue";
            var Ae = b[Q].from.name, D = b[Q].to ? b[Q].to.name : "", Le = !!b[Q].to && b[Q].to.domain.indexOf("conference") !== -1;
            U._load_msg_cache.length <= U.max_cache_length || U._load_msg_cache.shift(), U._load_msg_cache.push({ msgId: L, from: Ae, to: D, isGroup: Le }), G.call(U, b[Q], R);
          }, U = this, Y = 0; Y < b.length; Y++)
            k(Y);
        }
        function ce(b) {
          var R = this.root.lookup("easemob.pb.CommUnreadDL");
          if (R = R.decode(b.payload), this.grantType === "agoraToken") {
            var k = new (a())(R.timestamp.low, R.timestamp.high, R.timestamp.unsigned).toString();
            this.compareTokenExpireTime(Number(k), this.expirationTime);
          }
          if (R.unread.length === 0)
            Ve.call(this);
          else
            for (var U = 0; U < R.unread.length; U++)
              ve.call(this, R.unread[U].queue);
        }
        function _e() {
          var b = [], R = this.root.lookup("easemob.pb.StatisticsBody"), k = R.decode(b);
          k.operation = 0, k = R.encode(k).finish();
          var U = this.root.lookup("easemob.pb.Meta").decode(b);
          U.id = (/* @__PURE__ */ new Date()).valueOf(), U.ns = 0, U.payload = k;
          var Y = this.root.lookup("easemob.pb.CommSyncUL"), Q = Y.decode(b);
          Q.meta = U, Q = Y.encode(Q).finish();
          var L = this.root.lookup("easemob.pb.MSync"), Ae = L.decode(b);
          return Ae.version = this.version, Ae.encryptType = [0], Ae.command = 0, Ae.payload = Q, L.encode(Ae).finish();
        }
        function Ue(b) {
          var R = [], k = this.root.lookup("easemob.pb.CommSyncUL"), U = k.decode(R);
          U.queue = b, U = k.encode(U).finish();
          var Y = this.root.lookup("easemob.pb.MSync"), Q = Y.decode(R);
          return Q.version = this.version, Q.encryptType = this.encryptType, Q.command = 0, Q.payload = U, Y.encode(Q).finish();
        }
        function ve(b) {
          h.kg.debug("sendBackqueue");
          var R = Ue.call(this, b);
          w.call(this, R);
        }
        function ye(b, R) {
          var k = [], U = this.root.lookup("easemob.pb.CommSyncUL"), Y = U.decode(k);
          Y.queue = R, Y.key = new (a())(b.low, b.high, b.unsigned).toString(), Y = U.encode(Y).finish();
          var Q = this.root.lookup("easemob.pb.MSync"), L = Q.decode(k);
          return L.version = this.version, L.encryptType = this.encryptType, L.command = 0, L.payload = Y, Q.encode(L).finish();
        }
        function Pe(b, R) {
          h.kg.debug("sendLastSession");
          var k = ye.call(this, b, R);
          w.call(this, k);
        }
        function We(b) {
          var R, k, U, Y, Q, L, Ae = this.root.lookup("easemob.pb.Provision").decode(b.payload);
          if (this.context.jid && (this.context.jid.clientResource = Ae.resource), this.clientResource = Ae.resource, Ae.status.errorCode === 0) {
            if (this.reconnecting = !1, this.logOut = !1, W.platform !== "zfb" && W.platform !== "dd" || (this.sock.readyState = 1), this.onOpened && this.onOpened(), (R = this.eventHandler) === null || R === void 0 || R.dispatch("onConnected"), this.grantType === "agoraToken") {
              var D = Date.now();
              this.expiresIn = this.expirationTime - D, this.tokenExpireTimeCountDown(this.expiresIn);
            }
            ke.call(this), He.call(this), se.call(this), Ve.call(this);
          } else {
            var Le = void 0, De = Ae.status.reason;
            switch (De) {
              case "Sorry, the app day live count limit":
                Le = i.Z.create({ type: o.E.MAX_LIMIT, message: "Sorry, the daily active user limit for this app has been reached" }), (k = this.eventHandler) === null || k === void 0 || k.dispatch("onError", Le);
                break;
              case "Sorry, the app online count limit":
                Le = i.Z.create({ type: o.E.MAX_LIMIT, message: "Sorry, the maximum number limit of online users for this app has been reached" }), (U = this.eventHandler) === null || U === void 0 || U.dispatch("onError", Le);
                break;
              case "Sorry, the app month live count limit":
                Le = i.Z.create({ type: o.E.MAX_LIMIT, message: "Sorry, the monthly active user limit for this app has been reached" }), (Y = this.eventHandler) === null || Y === void 0 || Y.dispatch("onError", Le);
                break;
              case "Sorry, who are you?":
                Le = i.Z.create({ type: o.E.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), (Q = this.eventHandler) === null || Q === void 0 || Q.dispatch("onError", Le);
                break;
              default:
                Le = i.Z.create({ type: o.E.SERVER_UNKNOWN_ERROR, message: De }), (L = this.eventHandler) === null || L === void 0 || L.dispatch("onError", Le);
            }
          }
        }
        function ke() {
          var b, R;
          if (((b = this.unMSyncSendMsgMap) === null || b === void 0 ? void 0 : b.size) > 0) {
            for (var k = Array.from(this.unMSyncSendMsgMap.keys()), U = 0; U < k.length; U++) {
              var Y = this.unMSyncSendMsgMap.get(k[U]);
              w.call(this, Y, k[U]);
            }
            (R = this.unMSyncSendMsgMap) === null || R === void 0 || R.clear();
          }
        }
        function Ve() {
          var b = _e.call(this);
          w.call(this, b);
        }
        function se() {
          var b = nt.call(this);
          w.call(this, b);
        }
        function He() {
          var b = this;
          Xe.call(this), this.heartBeatID = setInterval(function() {
            se.call(b);
          }, this.heartBeatWait);
        }
        function Xe() {
          clearInterval(this.heartBeatID);
        }
        function nt() {
          var b = this.root.lookup("easemob.pb.MSync"), R = b.decode([]);
          return R.version = this.version, R.encryptType = this.encryptType, R.command = 1, b.encode(R).finish();
        }
        function te(b, R) {
          return b.some(function(k) {
            return k.name === R.name;
          });
        }
        function $e(b) {
          var R = this, k = this.root.lookup("easemob.pb.CommNotice"), U = k.decode(b.payload), Y = te(this._queues, U.queue);
          h.kg.debug("receive notice", k, this._queues), Y || this.clientResource === U.queue.clientResource && U.queue.name === this.context.userId || (this.qTimer && clearTimeout(this.qTimer), this.qTimer = setTimeout(function() {
            var Q = U.queue;
            te(R._queues, Q) && (ve.call(R, Q), h.kg.debug("⬇q:", Q));
          }, 1e4), this._queues.push(U.queue), this._queues.length === 1 && ve.call(this, U.queue));
        }
        function Me(b) {
          if (typeof b == "string") {
            var R = JSON.parse(b);
            if (Array.isArray(R)) {
              var k = R[0], U = R[1];
              this.closeInfo = { code: k, reason: U };
            }
          }
        }
        function rt(b) {
          return R = this, k = void 0, Y = function() {
            var Q, L, Ae, D, Le, De, Fe, Ge;
            return function(F, oe) {
              var he, ge, et, je, Ze = { label: 0, sent: function() {
                if (1 & et[0])
                  throw et[1];
                return et[1];
              }, trys: [], ops: [] };
              return je = { next: be(0), throw: be(1), return: be(2) }, typeof Symbol == "function" && (je[Symbol.iterator] = function() {
                return this;
              }), je;
              function be(at) {
                return function(Ct) {
                  return function(dt) {
                    if (he)
                      throw new TypeError("Generator is already executing.");
                    for (; je && (je = 0, dt[0] && (Ze = 0)), Ze; )
                      try {
                        if (he = 1, ge && (et = 2 & dt[0] ? ge.return : dt[0] ? ge.throw || ((et = ge.return) && et.call(ge), 0) : ge.next) && !(et = et.call(ge, dt[1])).done)
                          return et;
                        switch (ge = 0, et && (dt = [2 & dt[0], et.value]), dt[0]) {
                          case 0:
                          case 1:
                            et = dt;
                            break;
                          case 4:
                            return Ze.label++, { value: dt[1], done: !1 };
                          case 5:
                            Ze.label++, ge = dt[1], dt = [0];
                            continue;
                          case 7:
                            dt = Ze.ops.pop(), Ze.trys.pop();
                            continue;
                          default:
                            if (!((et = (et = Ze.trys).length > 0 && et[et.length - 1]) || dt[0] !== 6 && dt[0] !== 2)) {
                              Ze = 0;
                              continue;
                            }
                            if (dt[0] === 3 && (!et || dt[1] > et[0] && dt[1] < et[3])) {
                              Ze.label = dt[1];
                              break;
                            }
                            if (dt[0] === 6 && Ze.label < et[1]) {
                              Ze.label = et[1], et = dt;
                              break;
                            }
                            if (et && Ze.label < et[2]) {
                              Ze.label = et[2], Ze.ops.push(dt);
                              break;
                            }
                            et[2] && Ze.ops.pop(), Ze.trys.pop();
                            continue;
                        }
                        dt = oe.call(F, Ze);
                      } catch (Mt) {
                        dt = [6, Mt], ge = 0;
                      } finally {
                        he = et = 0;
                      }
                    if (5 & dt[0])
                      throw dt[1];
                    return { value: dt[0] ? dt[1] : void 0, done: !0 };
                  }([at, Ct]);
                };
              }
            }(this, function(F) {
              if (Q = s.P6.getEnvInfo(), L = this.root.lookup("easemob.pb.MSync"), this.name === "miniCore") {
                try {
                  b.data instanceof ArrayBuffer || (h.kg.debug("received message: ".concat(b.data)), Me.call(this, b.data)), D = new Uint8Array(b.data), Ae = L.decode(D);
                } catch {
                  throw new Error("decode message fail.");
                }
                return [2, Ae];
              }
              if (Q.platform === "web" || Q.platform === "zfb" || Q.platform === "dd") {
                for (b.data === '[401,"normal closed"]' && (h.kg.debug("received message: ".concat(b.data)), Me.call(this, b.data)), Le = u().atob(b.data), De = [], Fe = 0, Ge = Le.length; Fe < Ge; ++Fe)
                  De.push(Le.charCodeAt(Fe));
                return [2, L.decode(De)];
              }
              try {
                b.data instanceof ArrayBuffer || (h.kg.debug("received message: ".concat(b.data)), Me.call(this, b.data)), Ae = L.decode(b.data);
              } catch {
                throw new Error("decode message fail.");
              }
              return [2, Ae];
            });
          }, new ((U = void 0) || (U = Promise))(function(Q, L) {
            function Ae(De) {
              try {
                Le(Y.next(De));
              } catch (Fe) {
                L(Fe);
              }
            }
            function D(De) {
              try {
                Le(Y.throw(De));
              } catch (Fe) {
                L(Fe);
              }
            }
            function Le(De) {
              var Fe;
              De.done ? Q(De.value) : (Fe = De.value, Fe instanceof U ? Fe : new U(function(Ge) {
                Ge(Fe);
              })).then(Ae, D);
            }
            Le((Y = Y.apply(R, k || [])).next());
          });
          var R, k, U, Y;
        }
        function ot(b) {
          var R = this;
          b.then(function(k) {
            if (k)
              switch (k.command) {
                case 0:
                  it.call(R, k);
                  break;
                case 1:
                  ce.call(R, k);
                  break;
                case 2:
                  $e.call(R, k);
                  break;
                case 3:
                  We.call(R, k);
                  break;
                default:
                  h.kg.error("unexpected msync command: ".concat(k.command));
              }
            else
              h.kg.error("unexpected msync result: ".concat(k));
          });
        }
        function it(b) {
          var R, k, U, Y, Q, L, Ae, D, Le, De, Fe, Ge, F, oe, he, ge, et, je = this.root.lookup("easemob.pb.CommSyncDL");
          je = je.decode(b.payload);
          var Ze = new (a())(je.serverId.low, je.serverId.high, je.serverId.unsigned).toString(), be = new (a())(je.metaId.low, je.metaId.high, je.metaId.unsigned).toString();
          if (je.metas.length !== 0)
            try {
              le.call(this, je.metas, je.status);
            } catch (St) {
              var at = i.Z.create({ type: o.E.WEBIM_LOAD_MSG_ERROR, message: "decode message error", data: St });
              this.onError && this.onError(at), (R = this.eventHandler) === null || R === void 0 || R.dispatch("onError", at);
            } finally {
              if (je.isLast) {
                var Ct = -1;
                this._queues.some(function(St, Ut) {
                  return St.name === je.name && (Ct = Ut, !0);
                }) && Ct > 0 && this._queues.splice(Ct, 1), this._queues.length > 0 && (ve.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer));
              } else
                Pe.call(this, je.nextKey, je.queue);
            }
          else if (je.isLast) {
            var dt = -1;
            this._queues.some(function(St, Ut) {
              return St.name === je.queue.name && (dt = Ut, !0);
            }) && this._queues.splice(dt, 1), this._queues.length > 0 && (ve.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer));
          } else if (je.status && je.status.errorCode === 0) {
            if (this._queues.some(function(St, Ut) {
              var Pt;
              return St.name === ((Pt = je.queue) === null || Pt === void 0 ? void 0 : Pt.name) && !0;
            }), Nt = A.Nl.get(be)) {
              var Mt = Nt.rpt, ft = Nt.requestName, xt = Nt.resolve;
              Mt({ isEndApi: !0, data: { isSuccess: 1, requestName: ft, requestMethod: "WEBSOCKET", requestUrl: this.url, code: x.dd.success } }), xt(), A.Nl.delete(be);
            }
            var wt = this._msgHash[be];
            if (wt != null && wt.isHandleChatroom) {
              try {
                var kt = ((k = this._msgHash[be]) === null || k === void 0 ? void 0 : k.operation) === "join";
                ((U = this._msgHash[be]) === null || U === void 0 ? void 0 : U.resolve) instanceof Function && kt && this._msgHash[be].resolve({ type: 0, data: { action: "apply", id: this._msgHash[be].roomId, result: !0, user: this.context.userId } }), ((Y = this._msgHash[be]) === null || Y === void 0 ? void 0 : Y.success) instanceof Function && kt && this._msgHash[be].success({ type: 0, data: { action: "apply", id: this._msgHash[be].roomId, result: !0, user: this.context.userId } }), ((Q = this._msgHash[be]) === null || Q === void 0 ? void 0 : Q.resolve) instanceof Function && !kt && this._msgHash[be].resolve({ type: 0, data: { result: !0 } }), ((L = this._msgHash[be]) === null || L === void 0 ? void 0 : L.success) instanceof Function && !kt && this._msgHash[be].success({ type: 0, data: { result: !0 } });
              } catch (St) {
                at = i.Z.create({ type: o.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: St }), this.onError && this.onError(at), (Ae = this.eventHandler) === null || Ae === void 0 || Ae.dispatch("onError", at);
              }
              delete this._msgHash[be];
            }
            if (wt && !wt.isHandleChatroom) {
              A.TJ.has(be) && (A.TJ.get(be).rpt({ isEndApi: !0, data: { isSuccess: 1, requestMethod: "WEBSOCKET", requestUrl: this.url, code: x.dd.success, msgId: Ze } }), A.TJ.delete(be));
              try {
                ((D = this._msgHash[be]) === null || D === void 0 ? void 0 : D.resolve) instanceof Function && this._msgHash[be].resolve({ localMsgId: be, serverMsgId: Ze }), ((Le = this._msgHash[be]) === null || Le === void 0 ? void 0 : Le.success) instanceof Function && this._msgHash[be].success(be, Ze);
              } catch (St) {
                at = i.Z.create({ type: o.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: St }), this.onError && this.onError(at), (De = this.eventHandler) === null || De === void 0 || De.dispatch("onError", at);
              }
              this.onReceivedMessage && this.onReceivedMessage({ id: be, mid: Ze, to: this._msgHash[be].to, time: 0 }), (Fe = this.eventHandler) === null || Fe === void 0 || Fe.dispatch("onReceivedMessage", { id: be, mid: Ze, to: this._msgHash[be].to }), delete this._msgHash[be];
            }
          } else if (je.status && je.status.errorCode === 15)
            ((Ge = this._msgHash[be]) === null || Ge === void 0 ? void 0 : Ge.fail) instanceof Function && this._msgHash[be].fail({ type: o.E.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject({ type: o.E.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" });
          else if (je.status && je.status.errorCode === 1) {
            var _t = void 0;
            switch (je.status.reason) {
              case "blocked":
                _t = o.E.PERMISSION_DENIED;
                break;
              case "group not found":
                _t = o.E.GROUP_NOT_EXIST;
                break;
              case "not in group or chatroom":
                _t = o.E.GROUP_NOT_JOINED;
                break;
              case "exceed recall time limit":
                _t = o.E.MESSAGE_RECALL_TIME_LIMIT;
                break;
              case "message recall disabled":
                _t = o.E.SERVICE_NOT_ENABLED;
                break;
              case "not in group or chatroom white list":
                _t = o.E.SERVICE_NOT_ALLOW_MESSAGING;
                break;
              case "nonroster":
                _t = o.E.USER_NOT_FRIEND, je.status.reason = "not contact";
                break;
              case "group is disabled":
                _t = o.E.GROUP_IS_DISABLED, je.status.reason = "group is disabled";
                break;
              case "limit directed users":
                _t = o.E.MAX_LIMIT;
                break;
              default:
                je.status.reason.includes("grpID") && je.status.reason.includes("does not exist!") ? (_t = o.E.CHATROOM_NOT_EXIST, je.status.reason = "The chat room dose not exist.") : je.status.reason.includes("username") && je.status.reason.includes("doesn't exist!") ? _t = o.E.USER_NOT_FOUND : je.status.reason === "group member list is full!" ? _t = o.E.CHATROOM_MEMBERS_FULL : je.status.reason.includes("can not join this group") && je.status.reason.includes("is in the blacklist") ? (_t = o.E.PERMISSION_DENIED, je.status.reason = "permission denied") : _t = je.status.reason === "can not operate this group, reason: group is disabled" ? o.E.GROUP_IS_DISABLED : je.status.reason.includes("moderation") ? o.E.MESSAGE_MODERATION_BLOCKED : o.E.SERVER_UNKNOWN_ERROR;
            }
            if (this._msgHash[be]) {
              if (!((F = this._msgHash[be]) === null || F === void 0) && F.isHandleChatroom) {
                var gt = i.Z.create({ type: _t, message: je.status.reason || "", data: "" });
                this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].error instanceof Function && this._msgHash[be].error(gt);
              } else
                gt = i.Z.create({ type: _t, message: je.status.reason || "", data: { id: be, mid: Ze } }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].fail instanceof Function && this._msgHash[be].fail({ type: _t, reason: je.status.reason ? je.status.reason : "", data: { id: be, mid: Ze } });
              delete this._msgHash[be];
            }
          } else if (je.status && je.status.errorCode === 7)
            je.status.reason === "sensitive words" && this._msgHash[be] ? (gt = i.Z.create({ type: o.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "sensitive words", data: { id: be, mid: Ze } }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].fail instanceof Function && this._msgHash[be].fail({ type: o.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: be, mid: Ze, reason: "sensitive words" } })) : je.status.reason === "blocked by mod_antispam" && this._msgHash[be] ? (gt = i.Z.create({ type: o.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "blocked by mod_antispam", data: { id: be, mid: Ze } }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].fail instanceof Function && this._msgHash[be].fail({ type: o.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: be, mid: Ze, reason: "blocked by mod_antispam" } })) : je.status.reason === "user is mute" && this._msgHash[be] ? (gt = i.Z.create({ type: o.E.USER_MUTED_BY_ADMIN, message: "user is mute", data: { id: be, mid: Ze } }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].fail instanceof Function && this._msgHash[be].fail(gt)) : je.status.reason === "traffic limit" && this._msgHash[be] ? (gt = i.Z.create({ type: o.E.MESSAGE_CURRENT_LIMITING, message: "traffic limit", data: { id: be, mid: Ze } }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].fail instanceof Function && this._msgHash[be].fail(gt)) : je.status.reason === "Sorry, data is too large" && this._msgHash[be] && (gt = i.Z.create({ type: o.E.MESSAGE_SIZE_LIMIT, message: "Sorry, data is too large", data: { id: be, mid: Ze } }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].fail instanceof Function && this._msgHash[be].fail(gt));
          else if (je.status && je.status.errorCode === 19)
            this._msgHash[be] && (A.TJ.has(be) && (A.TJ.get(be).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: o.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, codeDesc: je.status.reason || "", msgId: Ze } }), A.TJ.delete(be)), gt = i.Z.create({ type: o.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, message: je.status.reason || "", data: { id: be, mid: Ze } }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].fail instanceof Function && this._msgHash[be].fail({ type: o.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, data: { id: be, mid: Ze, reason: je.status.reason } }));
          else if (this._msgHash[be]) {
            A.TJ.has(be) && (A.TJ.get(be).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: o.E.WEBIM_LOAD_MSG_ERROR, codeDesc: ((oe = je.status) === null || oe === void 0 ? void 0 : oe.reason) || "", msgId: Ze } }), A.TJ.delete(be));
            try {
              gt = i.Z.create({ type: o.E.WEBIM_LOAD_MSG_ERROR, message: ((he = je.status) === null || he === void 0 ? void 0 : he.reason) || "", data: { id: be, mid: Ze, reason: je.status && je.status.reason } }), this._msgHash[be].reject instanceof Function && this._msgHash[be].reject(gt), this._msgHash[be].fail instanceof Function && this._msgHash[be].fail({ type: o.E.WEBIM_LOAD_MSG_ERROR, data: { errorCode: je.status && je.status.errorCode, reason: je.status && je.status.reason } });
            } catch (St) {
              at = i.Z.create({ type: o.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing fail function error", data: St }), this.onError && this.onError(at), (ge = this.eventHandler) === null || ge === void 0 || ge.dispatch("onError", at);
            }
            delete this._msgHash[be];
          } else {
            var Nt;
            A.TJ.has(be) && (A.TJ.get(be).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: o.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, codeDesc: "on message error", msgId: Ze } }), A.TJ.delete(be)), (Nt = A.Nl.get(be)) && ((Mt = Nt.rpt)({ isEndApi: !0, data: { isSuccess: 0, requestName: ft = Nt.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: x.dd.failed, codeDesc: "on message error" } }), A.Nl.delete(be)), at = i.Z.create({ type: o.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "on message error" }), this.onError && this.onError(at), (et = this.eventHandler) === null || et === void 0 || et.dispatch("onError", at);
          }
        }
        function ct(b) {
          var R = [], k = this.root.lookup("easemob.pb.KeyValue"), U = [];
          for (var Y in b) {
            var Q = k.decode(R);
            Q.key = Y, j(b[Y]) === "object" ? (Q.type = 8, Q.stringValue = JSON.stringify(b[Y])) : typeof b[Y] == "string" ? (Q.type = 7, Q.stringValue = b[Y]) : typeof b[Y] == "boolean" ? (Q.type = 1, Q.varintValue = b[Y] === !0 ? 1 : 0) : Number.isInteger(b[Y]) ? (Q.type = 2, Q.varintValue = b[Y]) : (Q.type = 6, Q.doubleValue = b[Y]), U.push(Q);
          }
          return U;
        }
        function Ne(b) {
          var R, k, U, Y = [];
          if (this.root) {
            var Q, L = this.root.lookup("easemob.pb.MessageBody.Content").decode(Y);
            switch (Q = !b.group && ((R = b == null ? void 0 : b.chatType) === null || R === void 0 ? void 0 : R.toLowerCase()) !== "groupchat" || b.roomType ? b.group && b.roomType || ((k = b == null ? void 0 : b.chatType) === null || k === void 0 ? void 0 : k.toLowerCase()) === "chatroom" ? "chatRoom" : "singleChat" : "groupChat", b.type) {
              case "txt":
                L.type = 0, L.text = b.msg;
                break;
              case "img":
                L.type = 1, b.body ? (L.displayName = b.body.filename, L.remotePath = b.body.url, L.secretKey = b.body.secret, L.fileLength = b.body.file_length, L.size = b.body.size, L.thumbnailDisplayName = b.body.filename) : b.file ? (L.displayName = b.file.filename, L.remotePath = b.file.url, L.secretKey = b.file.secret, L.fileLength = b.file.file_length, L.size = b.file.size, L.thumbnailDisplayName = b.file.filename) : (L.displayName = b.filename, L.remotePath = b.url, L.secretKey = b.secret, L.fileLength = b.file_length, L.size = b.size, L.thumbnailDisplayName = b.filename);
                break;
              case "video":
                L.type = 2, L.displayName = b.body.filename, L.remotePath = b.body.url, L.secretKey = b.body.secret, L.fileLength = b.body.file_length, L.duration = b.body.length, L.thumbnailDisplayName = b.body.filename;
                break;
              case "loc":
                L.type = 3, L.latitude = b.lat, L.longitude = b.lng, L.address = b.addr, L.buildingName = b.buildingName, L.latitude = b.lat;
                break;
              case "audio":
                L.type = 4, L.displayName = b.body.filename, L.remotePath = b.body.url, L.secretKey = b.body.secret, L.fileLength = b.body.file_length, L.duration = b.body.length, L.thumbnailDisplayName = b.body.filename;
                break;
              case "file":
                L.type = 5, L.displayName = b.body.filename, L.remotePath = b.body.url, L.secretKey = b.body.secret, L.fileLength = b.body.file_length, L.size = b.body.size, L.thumbnailDisplayName = b.body.filename;
                break;
              case "cmd":
                L.type = 6, L.action = b.action;
                break;
              case "custom":
                L.type = 7, L.customEvent = b.customEvent, L.customExts = ct.call(this, b.customExts);
            }
            var Ae = [];
            b.ext && (Ae = ct.call(this, b.ext));
            var D = this.root.lookup("easemob.pb.MessageBody"), Le = D.decode(Y);
            Le.from = { name: this.context.jid.name }, Le.to = { name: b.to }, b.type === "channel" ? Le.type = 7 : b.type === "recall" ? (Le.type = 6, Le.ackMessageId = b.ackId) : b.type === "delivery" ? (Le.type = 5, Le.ackMessageId = b.ackId) : b.type === "read" ? (Le.type = 4, Le.ackMessageId = b.ackId, Q === "groupChat" && (Le.msgConfig = { allowGroupAck: !0 }, Le.ackContent = b.ackContent)) : Q === "chatRoom" ? Le.type = 3 : Q === "groupChat" ? (Le.type = 2, b.msgConfig && (Le.msgConfig = { allowGroupAck: !0 })) : Q === "singleChat" && (Le.type = 1), Le.contents = [L], Le.ext = Ae;
            var De = function(et) {
              var je = {};
              return "translations" in et && (je.translations = et.translations), "isChatThread" in et && et.isChatThread && (je.thread = {}), Object.keys(je).length > 0 ? JSON.stringify(je) : "";
            }(b);
            De && (Le.meta = De), Le = D.encode(Le).finish();
            var Fe = this.root.lookup("easemob.pb.Meta").decode(Y);
            Fe.id = b.id;
            var Ge = "easemob.com";
            Q !== "chatRoom" && Q !== "groupChat" || (Ge = "conference.easemob.com"), Fe.to = { appKey: this.appKey, name: b.to, domain: Ge }, Q === "chatRoom" && (Fe.ext = ct.call(this, function(et) {
              return { chatroom_msg_tag: et.priority === "high" ? 0 : et.priority === "low" ? 2 : 1 };
            }(b))[0]), Fe.ns = 1, Fe.payload = Le, Fe.routetype = b.deliverOnlineOnly ? 1 : 0, Q !== "singleChat" && Array.isArray(b.receiverList) && ((U = b.receiverList) === null || U === void 0 ? void 0 : U.length) > 0 && (Fe.directedUsers = b.receiverList, Fe.routetype = 2, h.kg.debug("receiverList:", b.receiverList, "thirdMessage", Fe));
            var F = this.root.lookup("easemob.pb.CommSyncUL"), oe = F.decode(Y);
            oe.meta = Fe, oe = F.encode(oe).finish();
            var he = this.root.lookup("easemob.pb.MSync"), ge = he.decode(Y);
            return ge.version = this.version, ge.encryptType = this.encryptType, ge.command = 0, ge.payload = oe, he.encode(ge).finish();
          }
          b.fail && b.fail({ type: o.E.WEBIM_CONNCTION_CLIENT_OFFLINE, message: "Not logged in" });
        }
        function ze(b) {
          var R = this, k = P({}, b);
          if (b.file)
            return k.accessToken = this.token, k.appKey = this.appKey, k.apiUrl = this.apiUrl, k.body && k.body.url ? Ne.call(this, k) : new Promise(function(Y, Q) {
              var L = k.onFileUploadComplete;
              k.onFileUploadComplete = function(Ae) {
                var D, Le;
                if (Ae.entities[0]["file-metadata"]) {
                  var De = Ae.entities[0]["file-metadata"]["content-length"];
                  k.file_length = De, k.filetype = Ae.entities[0]["file-metadata"]["content-type"], De > 204800 && (k.thumbnail = !0);
                }
                k.body = { type: k.type || "file", secret: Ae.entities[0]["share-secret"], filename: k.file.filename || k.filename, url: (R.isHttpDNS ? R.apiUrl + Ae.uri.substr(Ae.uri.indexOf("/", 9)) : Ae.uri) + "/" + Ae.entities[0].uuid, length: k.length || 0, filetype: k.filetype || k.file.filetype, file_length: ((Le = (D = k.file) === null || D === void 0 ? void 0 : D.data) === null || Le === void 0 ? void 0 : Le.size) || 0, size: { width: k.width || 0, height: k.height || 0 } }, k.file.url = Ae.uri, b.secret = Ae.entities[0]["share-secret"];
                var Fe = (R.isHttpDNS ? R.apiUrl + Ae.uri.substr(Ae.uri.indexOf("/", 9)) : Ae.uri) + "/" + Ae.entities[0].uuid;
                b.url = Fe, Ae.url = Fe, k.type === "img" && (b.thumb = "".concat(Fe, "?thumbnail=true"), Ae.thumb = "".concat(Fe, "?thumbnail=true")), L instanceof Function && L(Ae, k.id);
                var Ge = Ne.call(R, k);
                A.TJ.size <= A.F3 && A.TJ.set(k.id, { rpt: R.dataReport.geOperateFun({ operationName: x.fI.SEND_MSG }) }), w.call(R, Ge);
              }, s.P6.uploadFile.call(R, k, x.fI.UPLOAD_MSG_ATTACH);
            });
          b.type === "img" && (k.body || (k.body = P(P({}, k), { size: { width: k.width || 0, height: k.height || 0 } })));
          var U = Ne.call(this, k);
          w.call(this, U);
        }
        function Ye(b, R, k) {
          var U = [], Y = this.root.lookup("easemob.pb.MUCBody"), Q = Y.decode(U);
          Q.mucId = { appKey: this.appKey, name: b, domain: "conference.easemob.com" }, Q.operation = k === "join" ? 2 : 3, Q.from = { name: this.context.userId }, Q.isChatroom = !0, Q = Y.encode(Q).finish();
          var L = this.root.lookup("easemob.pb.Meta").decode(U);
          L.id = R, L.from = { appKey: this.appKey, name: this.context.userId, domain: "easemob.com", client_resource: this.context.jid.clientResource }, L.to = { domain: "easemob.com" }, L.ns = 2, L.payload = Q;
          var Ae = this.root.lookup("easemob.pb.CommSyncUL"), D = Ae.decode(U);
          D.meta = L, D = Ae.encode(D).finish();
          var Le = this.root.lookup("easemob.pb.MSync"), De = Le.decode(U);
          return De.version = this.version, De.encryptType = this.encryptType, De.command = 0, De.payload = D, Le.encode(De).finish();
        }
        function qe(b, R) {
          var k = s.P6.getUniqueId(), U = Ye.call(this, b.roomId, k, R);
          return w.call(this, P(P({}, b), { isHandleChatroom: !0, joinMsg: U, id: k, operation: R }), k);
        }
        function Oe(b) {
          var R = this;
          return new Promise(function(k, U) {
            var Y, Q;
            if (R.logOut)
              return U({ type: o.E.WEBIM_CONNECTION_CLOSED, message: "not login" });
            if (!b.id || typeof b.id != "string" || b.id === "")
              return U({ type: o.E.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "id"' });
            if (!b.to || typeof b.to != "string" || b.to === "")
              return U({ type: o.E.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "to"' });
            var L = b.type === "file" || b.type === "img" || b.type === "audio" || b.type === "video", Ae = b.type === "delivery" || b.type === "read" || b.type === "channel";
            if (b.id && ((!L && !Ae || L && R.useOwnUploadFun) && A.TJ.size <= A.F3 && A.TJ.set(b.id, { rpt: R.dataReport.geOperateFun({ operationName: b.type === "recall" ? x.fI.SEND_RECALL_MSG : x.fI.SEND_MSG }) }), R._msgHash[b.id] = P(P({}, b), { resolve: k, reject: U })), L)
              return ze.call(R, b);
            if (b.type === "txt" && (!((Y = b.msgConfig) === null || Y === void 0) && Y.languages) && Array.isArray((Q = b.msgConfig) === null || Q === void 0 ? void 0 : Q.languages) && b.msgConfig.languages.length > 0) {
              var D = R.translateMessage || R.translation.translateMessage;
              if (!D)
                throw new Error("there is no method to translate message");
              D({ text: b.msg, languages: b.msgConfig.languages }).then(function(De) {
                var Fe, Ge = (Fe = De.data[0]) === null || Fe === void 0 ? void 0 : Fe.translations;
                Ge = Ge.map(function(oe) {
                  return { code: oe.to, text: oe.text };
                }), b.translations = Ge;
                var F = Ne.call(R, b);
                w.call(R, F, b.id);
              }).catch(function(De) {
                U(De);
              });
            } else {
              var Le = Ne.call(R, b);
              w.call(R, Le, b.id);
            }
          });
        }
        function w(b, R) {
          var k, U, Y = this;
          if (b.isHandleChatroom) {
            if (!this.isOpened()) {
              var Q = { data: "", type: o.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
              return Promise.reject(Q);
            }
            return new Promise(function(L, Ae) {
              var D;
              Y._msgHash[b.id] = P(P({}, b), { resolve: L, reject: Ae }), D = Y.name === "miniCore" ? b.joinMsg : ee.call(Y, b.joinMsg, R), Y.sock.send(D);
            });
          }
          if (!this.isOpened())
            return (k = this.unMSyncSendMsgMap) === null || k === void 0 || k.set(R, b), !this.logOut && this.autoReconnectNumTotal < this.autoReconnectNumMax && (this.autoReconnectNumTotal <= this.socketHost.length && this.isHttpDNS || !this.isHttpDNS) && (h.kg.debug("need to reconnect", this.autoReconnectNumTotal, this.autoReconnectNumMax), this.offLineSendConnecting = !0, this.reconnecting || this.reconnect()), void (this.onError && this.onError({ type: o.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }));
          U = this.name === "miniCore" ? b : ee.call(this, b, R), this.sock.send(U);
        }
        var z = function(b, R) {
          return b.send = Oe, b.sendMsg = Oe, h.kg.debug("init Msync by ".concat(b.name)), { generateProvision: Z.bind(b), base64transform: ee.bind(b), distributeMeta: G.bind(b), decodeMeta: le.bind(b), decodeUnreadDL: ce.bind(b), _rebuild: _e.bind(b), _lastsession: ye.bind(b), receiveProvision: We.bind(b), isInQueue: te.bind(b), decodeNotice: $e.bind(b), decodeMSync: rt.bind(b), distributeMSync: ot.bind(b), encodeChatMsg: Ne.bind(b), upLoadFile: ze.bind(b), send: Oe.bind(b), stopHeartBeat: Xe.bind(b), handleChatRoom: qe.bind(b) };
        }, re = function() {
          function b(R, k, U) {
            this.handlerData = {}, this.handlerData = {}, R.addEventHandler = this.addEventHandler.bind(this), R.removeEventHandler = this.removeEventHandler.bind(this);
          }
          return b.prototype.addEventHandler = function(R, k) {
            this.handlerData[R] = k;
          }, b.prototype.removeEventHandler = function(R) {
            delete this.handlerData[R];
          }, b.prototype.dispatch = function(R, k) {
            for (var U in h.kg.debug("dispatch event: " + R, k || ""), this.handlerData) {
              var Y = this.handlerData[U][R];
              Y && Y(k);
            }
          }, b;
        }(), q = function() {
        };
        function ie(b) {
          this.onOpened = b.onOpened || q, this.onPresence = b.onPresence || q, this.onTextMessage = b.onTextMessage || q, this.onPictureMessage = b.onPictureMessage || q, this.onAudioMessage = b.onAudioMessage || q, this.onVideoMessage = b.onVideoMessage || q, this.onFileMessage = b.onFileMessage || q, this.onLocationMessage = b.onLocationMessage || q, this.onCmdMessage = b.onCmdMessage || q, this.onCustomMessage = b.onCustomMessage || q, this.onReceivedMessage = b.onReceivedMessage || q, this.onDeliveredMessage = b.onDeliveredMessage || q, this.onReadMessage = b.onReadMessage || q, this.onRecallMessage = b.onRecallMessage || q, this.onChannelMessage = b.onChannelMessage || q, this.onError = b.onError || q, this.onOffline = b.onOffline || q, this.onOnline = b.onOnline || q, this.onStatisticMessage = b.onStatisticMessage || q, this.onContactInvited = b.onContactInvited || q, this.onContactAgreed = b.onContactAgreed || q, this.onContactRefuse = b.onContactRefuse || q, this.onContactDeleted = b.onContactDeleted || q, this.onContactAdded = b.onContactAdded || q, this.onTokenWillExpire = b.onTokenWillExpire || q, this.onTokenExpired = b.onTokenExpired || q, this.onClosed = b.onClosed || q, this.onPresenceStatusChange = b.onPresenceStatusChange || q;
        }
        __webpack_require__(2222);
        var Ie = { biz: "", debug: !1, token: "" }, pe = "https://data-reporting.agora.io/report", fe = "https://data-reporting.sh.agoralab.co/report", S = function(b) {
          var R = Number(x.C8[b]);
          return R === x.C8.USER_LOGIN ? "MANUALLOGIN" : R === x.C8.MSYNC_SENDMESSAGE ? "SENDMESSAGE" : R > x.C8.UNKNOWOPERATION && R < x.C8.REST_OPERATE ? "REST" : R > x.C8.REST_OPERATE && R < x.C8.MSYNC_OPERATE ? "MESSAGE" : R > x.C8.MSYNC_OPERATE && R < x.C8.ROSTER_OPERATE ? "ROSTER" : R > x.C8.ROSTER_OPERATE && R < x.C8.USER_OPERATE ? "USER" : R > x.C8.USER_OPERATE && R < x.C8.GROUP_OPERATE ? "GROUP" : R > x.C8.GROUP_OPERATE && R < x.C8.CHATROOM_OPERATE ? "CHATROOM" : "OPERATION";
        }, X = function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, B = function(b) {
          return [s.iw.BAIDU, s.iw.WX, s.iw.DD, s.iw.ZFB, s.iw.TT, s.iw.QUICK_APP, s.iw.UNI].includes(b.platform);
        }, ue = function() {
          return b = 1, R = 99999, b = Math.ceil(b), R = Math.floor(R), Math.floor(Math.random() * (R - b)) + b;
          var b, R;
        }, K = {}, de = 1e3, Ee = function() {
          function b(R) {
            this.eventQueue = [], this.stock = de, this.config = R, this.governor();
          }
          return b.prototype.add = function(R) {
            this.stock <= 0 ? console.warn("Event Report limit ".concat(de, " per minute")) : (this.eventQueue.push(R), this.consume(), this.stock -= 1);
          }, b.prototype.consume = function() {
            var R = this;
            this.eventQueue.length !== 0 && (this.timer && this.eventQueue.length <= 10 && clearTimeout(this.timer), this.timer = setTimeout(function() {
              var k, U = R.eventQueue.splice(0, 10), Y = U.filter(function(L) {
                return L.appId === U[0].appId;
              }), Q = U.filter(function(L) {
                return L.appId !== U[0].appId;
              });
              (k = R.eventQueue).unshift.apply(k, Q), R.batchSend(Y);
            }, 1e3));
          }, b.prototype.governor = function() {
            var R = this, k = setInterval(function() {
              R.stock = de;
            }, 6e4);
            typeof addEventListener < "u" && addEventListener("beforeunload", function() {
              clearInterval(k);
            });
          }, b.prototype.batchSend = function(R) {
            var k, U;
            if (R === void 0 && (R = []), R.length !== 0)
              try {
                var Y = R.map(function(Q) {
                  Q.biz, Q.appId;
                  var L = Q.eventId, Ae = function(D, Le) {
                    var De = {};
                    for (var Fe in D)
                      Object.prototype.hasOwnProperty.call(D, Fe) && Le.indexOf(Fe) < 0 && (De[Fe] = D[Fe]);
                    if (D != null && typeof Object.getOwnPropertySymbols == "function") {
                      var Ge = 0;
                      for (Fe = Object.getOwnPropertySymbols(D); Ge < Fe.length; Ge++)
                        Le.indexOf(Fe[Ge]) < 0 && Object.prototype.propertyIsEnumerable.call(D, Fe[Ge]) && (De[Fe[Ge]] = D[Fe[Ge]]);
                    }
                    return De;
                  }(Q, ["biz", "appId", "eventId"]);
                  return { eventId: Number(L), body: Ae };
                });
                (function(Q, L) {
                  try {
                    var Ae = L.biz, D = L.appId, Le = L.data, De = L.debug, Fe = L.onSuccess;
                    if (!Ae)
                      throw new Error("biz is not defined");
                    K.global || (K = s.P6.getEnvInfo());
                    var Ge = K;
                    if (B(Ge)) {
                      var F = { url: De ? fe : pe, data: Le, method: "POST", success: function() {
                        Fe == null || Fe();
                      }, fail: function() {
                      }, complete: function() {
                      } }, oe = { token: Q, appid: D ?? "", sendts: "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)), biz: Ae, debug: "".concat(De) };
                      if (Ge.platform === "zfb" || Ge.platform === "dd" ? F.headers = oe : F.header = oe, Ge.platform === "dd")
                        return Ge.global.httpRequest(F);
                      Ge.global.request(F);
                    } else {
                      var he = new XMLHttpRequest();
                      he.onreadystatechange = function() {
                        he.readyState === 2 && (Fe == null || Fe());
                      }, he.open("POST", De ? fe : pe), he.setRequestHeader("Content-Type", "application/json"), he.setRequestHeader("token", Q), he.setRequestHeader("appid", D ?? ""), he.setRequestHeader("sendts", "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3))), he.setRequestHeader("biz", Ae), he.setRequestHeader("debug", "".concat(De)), he.send(JSON.stringify(Le));
                    }
                  } catch (ge) {
                    console.error(ge);
                  }
                })(this.config.token, { biz: (k = R[0]) === null || k === void 0 ? void 0 : k.biz, appId: (U = R[0]) === null || U === void 0 ? void 0 : U.appId, data: Y, debug: this.config.debug, onSuccess: this.consume.bind(this) });
              } catch (Q) {
                console.error(Q);
              }
          }, b;
        }(), Se = function() {
          return Se = Object.assign || function(b) {
            for (var R, k = 1, U = arguments.length; k < U; k++)
              for (var Y in R = arguments[k])
                Object.prototype.hasOwnProperty.call(R, Y) && (b[Y] = R[Y]);
            return b;
          }, Se.apply(this, arguments);
        }, xe = new (function() {
          function b(R) {
            this.inited = !1, this.appId = "", this.biz = "", this.eventQueue = {}, this.config = Ie, R && this.init(R);
          }
          return b.prototype.init = function(R) {
            var k;
            if (R === void 0 && (R = {}), !R.biz || !R.token)
              throw new Error("Event Report: biz or token is not defined");
            try {
              this.appId = (k = R.appId) !== null && k !== void 0 ? k : "", this.biz = R.biz, this.config = Se(Se({}, Ie), R), this.eventQueue = new Ee(this.config), this.log(R), this.inited = !0;
            } catch (U) {
              console.error(U);
            }
          }, b.prototype.send = function(R, k, U) {
            var Y;
            if (k === void 0 && (k = {}), this.inited) {
              var Q = Se(Se({}, k), { eventId: Number(R), biz: this.biz, appId: (Y = U == null ? void 0 : U.appId) !== null && Y !== void 0 ? Y : this.appId });
              this.eventQueue.add(Q), this.log(Q);
            } else
              console.error("Event Report: init is not called");
          }, b.prototype.log = function(R) {
            try {
              if (this.config.debug) {
                var k = R.payload, U = function(Y, Q) {
                  var L = {};
                  for (var Ae in Y)
                    Object.prototype.hasOwnProperty.call(Y, Ae) && Q.indexOf(Ae) < 0 && (L[Ae] = Y[Ae]);
                  if (Y != null && typeof Object.getOwnPropertySymbols == "function") {
                    var D = 0;
                    for (Ae = Object.getOwnPropertySymbols(Y); D < Ae.length; D++)
                      Q.indexOf(Ae[D]) < 0 && Object.prototype.propertyIsEnumerable.call(Y, Ae[D]) && (L[Ae[D]] = Y[Ae[D]]);
                  }
                  return L;
                }(R, ["payload"]);
                console.log("%c Event Report: ".concat(this.config.biz, " "), "background: #8A97FC; color: #fff"), console.table(U), k && (console.info("payload:"), console.table(k));
              }
            } catch (Y) {
              console.error(Y);
            }
          }, b;
        }())(), Be = function() {
          return Be = Object.assign || function(b) {
            for (var R, k = 1, U = arguments.length; k < U; k++)
              for (var Y in R = arguments[k])
                Object.prototype.hasOwnProperty.call(R, Y) && (b[Y] = R[Y]);
            return b;
          }, Be.apply(this, arguments);
        }, ut = { requestName: "", subrequestid: "1", requestMethod: "GET", requestUrl: "", requestElapse: 0, code: 0, codeDesc: "", isLastApi: 0, isSuccess: 1 }, lt = function() {
          function b(R) {
            this.platform = s.P6.getEnvInfo(), this.isReportDt = R.isReport || !1, this.isCollectDt = !0, B(this.platform) && !this.isReportDt && (this.isCollectDt = !1), this.eventQueue = [], this.accessChannel = A.yK, this.options = function(k, U) {
              U.platform || (U = s.P6.getEnvInfo());
              var Y = k.org, Q = k.appkey, L = k.deviceId, Ae = k.sdkVersion, D = (navigator == null ? void 0 : navigator.userAgent) || "".concat(U.platform, "_mini_program");
              return { org: Y, appkey: Q, deviceId: L, sdkServiceId: "sid_".concat(s.P6.getUniqueId(), "_").concat(ue()), did: D, sdkVersion: Ae, os: A.Wc, sdkProduct: x.aC.web };
            }(R, this.platform), this.sid = this.options.sdkServiceId, this.init(R);
          }
          return b.getInstance = function() {
            return b.instance;
          }, b.prototype.getServiceId = function() {
            return this.sid || "sid_0";
          }, b.prototype.setIsReportDt = function(R) {
            this.isReportDt = R, R && this.rptEventQueue();
          }, b.prototype.setIsCollectDt = function(R) {
            this.isCollectDt = R, R || (this.eventQueue = []);
          }, b.prototype.rptEventQueue = function() {
            var R = this;
            this.eventQueue.length && this.eventQueue.forEach(function(k, U) {
              xe.send(k.eventId, k.dt), U >= R.eventQueue.length - 1 && (R.eventQueue = []);
            });
          }, b.prototype.init = function(R) {
            b.instance || (b.instance = this, xe.init({ biz: A.el, token: A.$x, appId: R.appkey, debug: !1 }), this.reportInit());
          }, b.prototype.reportInit = function() {
            if (this.isCollectDt) {
              var R = this.options, k = R.did, U = R.os, Y = R.sdkVersion, Q = R.deviceId;
              this.reportData(A.iB.INIT, { did: k, os: U, sdkVersion: Y, deviceId: Q });
            }
          }, b.prototype.geOperateFun = function(R) {
            var k = this;
            if (!this.isCollectDt)
              return function() {
              };
            var U = 1, Y = 0, Q = "", L = X(), Ae = R.uid, D = R.operationName;
            Ae && (this.uid = Ae);
            var Le = { uid: this.uid, operationId: "opr_".concat(s.P6.getUniqueId(), "_").concat(ue()), requestid: "req_".concat(s.P6.getUniqueId(), "_").concat(ue()), operationName: D };
            return function(De) {
              var Fe, Ge, F, oe;
              if (De.data.isSuccess ? (Y = 0, Q = "") : (De.data.code === 0 && (De.data.code = A.Tp), Y = (Fe = De.data.code) !== null && Fe !== void 0 ? Fe : Y, Q = (Ge = De.data.codeDesc) !== null && Ge !== void 0 ? Ge : Q), !((F = De.data) === null || F === void 0) && F.accessChannel && (k.accessChannel = (oe = De.data) === null || oe === void 0 ? void 0 : oe.accessChannel), De.isRetry ? (U++, De.data.subrequestid = "".concat(U)) : (Le.requestid = "req_".concat(s.P6.getUniqueId(), "_").concat(ue()), U = 1), De.data.isLastApi) {
                var he = X();
                De.data.requestElapse = he - L, De.data.requestMethod = "", De.data.subrequestid = "0", De.data.code = Y === 200 ? 0 : Y, De.data.codeDesc = Q;
              } else
                De.data.requestName || (De.data.requestName = D);
              De.data.requestElapse || (De.data.requestElapse = X() - L), k.reportData.call(k, A.iB.API, Be(Be(Be(Be({}, ut), Le), De.data), { accessChannel: k.accessChannel, operationType: S(D) })), De.isEndApi && k.reportData.call(k, A.iB.API, Be(Be(Be({}, Le), ut), { isSuccess: De.data.isSuccess, isLastApi: 1, subrequestid: "0", requestMethod: "", code: Y === 200 ? 0 : Y, codeDesc: Q, requestElapse: De.data.requestElapse, accessChannel: k.accessChannel, operationType: S(D) }));
            };
          }, b.prototype.reportData = function(R, k) {
            return U = this, Y = void 0, L = function() {
              var Ae, D, Le, De, Fe, Ge, F, oe;
              return function(he, ge) {
                var et, je, Ze, be, at = { label: 0, sent: function() {
                  if (1 & Ze[0])
                    throw Ze[1];
                  return Ze[1];
                }, trys: [], ops: [] };
                return be = { next: Ct(0), throw: Ct(1), return: Ct(2) }, typeof Symbol == "function" && (be[Symbol.iterator] = function() {
                  return this;
                }), be;
                function Ct(dt) {
                  return function(Mt) {
                    return function(ft) {
                      if (et)
                        throw new TypeError("Generator is already executing.");
                      for (; be && (be = 0, ft[0] && (at = 0)), at; )
                        try {
                          if (et = 1, je && (Ze = 2 & ft[0] ? je.return : ft[0] ? je.throw || ((Ze = je.return) && Ze.call(je), 0) : je.next) && !(Ze = Ze.call(je, ft[1])).done)
                            return Ze;
                          switch (je = 0, Ze && (ft = [2 & ft[0], Ze.value]), ft[0]) {
                            case 0:
                            case 1:
                              Ze = ft;
                              break;
                            case 4:
                              return at.label++, { value: ft[1], done: !1 };
                            case 5:
                              at.label++, je = ft[1], ft = [0];
                              continue;
                            case 7:
                              ft = at.ops.pop(), at.trys.pop();
                              continue;
                            default:
                              if (!((Ze = (Ze = at.trys).length > 0 && Ze[Ze.length - 1]) || ft[0] !== 6 && ft[0] !== 2)) {
                                at = 0;
                                continue;
                              }
                              if (ft[0] === 3 && (!Ze || ft[1] > Ze[0] && ft[1] < Ze[3])) {
                                at.label = ft[1];
                                break;
                              }
                              if (ft[0] === 6 && at.label < Ze[1]) {
                                at.label = Ze[1], Ze = ft;
                                break;
                              }
                              if (Ze && at.label < Ze[2]) {
                                at.label = Ze[2], at.ops.push(ft);
                                break;
                              }
                              Ze[2] && at.ops.pop(), at.trys.pop();
                              continue;
                          }
                          ft = ge.call(he, at);
                        } catch (xt) {
                          ft = [6, xt], je = 0;
                        } finally {
                          et = Ze = 0;
                        }
                      if (5 & ft[0])
                        throw ft[1];
                      return { value: ft[0] ? ft[1] : void 0, done: !0 };
                    }([dt, Mt]);
                  };
                }
              }(this, function(he) {
                switch (he.label) {
                  case 0:
                    return he.trys.push([0, 3, , 4]), Ae = X(), D = 0, R !== A.iB.API ? [3, 2] : [4, (ge = this.platform, new Promise(function(et) {
                      var je;
                      ge.platform || (ge = s.P6.getEnvInfo());
                      var Ze = "";
                      if (ge.platform === s.iw.WEB) {
                        var be = navigator.connection;
                        be != null && be.type ? (be == null || be.type, Ze = x.td.WIFI) : be != null && be.effectiveType && (Ze = x.td[be.effectiveType.toLocaleUpperCase()]), et(Ze);
                      } else
                        ge.platform === s.iw.NODE ? (Ze = x.td.UNKNOWN, et(Ze)) : (je = ge.global) === null || je === void 0 || je.getNetworkType({ success: function(at) {
                          Ze = x.td[at.networkType.toLocaleUpperCase()], et(Ze);
                        } });
                    }))];
                  case 1:
                    D = he.sent(), he.label = 2;
                  case 2:
                    return Le = this.options, De = Le.appkey, Fe = Le.sdkServiceId, Ge = Le.sdkProduct, F = Be({ lts: Ae, net: D, appkey: De, sdkServiceId: Fe, sdkProduct: Ge }, k), this.isReportDt ? xe.send(R, F) : this.isCollectDt && this.eventQueue.push({ eventId: R, dt: F }), [3, 4];
                  case 3:
                    return oe = he.sent(), console.warn(oe), [3, 4];
                  case 4:
                    return [2];
                }
                var ge;
              });
            }, new ((Q = void 0) || (Q = Promise))(function(Ae, D) {
              function Le(Ge) {
                try {
                  Fe(L.next(Ge));
                } catch (F) {
                  D(F);
                }
              }
              function De(Ge) {
                try {
                  Fe(L.throw(Ge));
                } catch (F) {
                  D(F);
                }
              }
              function Fe(Ge) {
                var F;
                Ge.done ? Ae(Ge.value) : (F = Ge.value, F instanceof Q ? F : new Q(function(oe) {
                  oe(F);
                })).then(Le, De);
              }
              Fe((L = L.apply(U, Y || [])).next());
            });
            var U, Y, Q, L;
          }, b;
        }(), pt = __webpack_require__(7479), mt = __webpack_require__(2856), yt = __webpack_require__(9667), Ot = __webpack_require__(3770), At = __webpack_require__(1735), bt = __webpack_require__(7384), Rt = __webpack_require__(70), ht = function() {
          return ht = Object.assign || function(b) {
            for (var R, k = 1, U = arguments.length; k < U; k++)
              for (var Y in R = arguments[k])
                Object.prototype.hasOwnProperty.call(R, Y) && (b[Y] = R[Y]);
            return b;
          }, ht.apply(this, arguments);
        }, It = s.P6.getEnvInfo(), Tt = It.platform === "web", vt = function() {
        }, Et = { CLOSED: 3, CLOSING: 2, CONNECTING: 0, OPEN: 1 }, M = function() {
          function b(R) {
            var k;
            if (this.name = "connection", this.isDebug = R.isDebug || !1, this.isReport = !1, this.isHttpDNS = R.isHttpDNS === void 0 ? Tt : R.isHttpDNS, this.heartBeatWait = R.heartBeatWait || 3e4, this.autoReconnectNumMax = R.autoReconnectNumMax || 5, this.refreshDNSIntervals = this.autoReconnectNumMax < 5 ? this.autoReconnectNumMax : 5, this.delivery = R.delivery || !1, this.dnsArr = ["https://rs.easemob.com", "https://rs.chat.agora.io", "http://59.110.89.59", "http://39.97.193.190", "http://39.97.193.187"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.socketHost = [], this.hostTotal = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.domain = "easemob.com", this.appKey = R.appKey, this.appName = "", this.orgName = "", this.token = "", this.grantType = "", this.apiUrl = R.apiUrl || "", this.url = R.url || "", this.https = R.https || typeof window < "u" && ((k = window.location) === null || k === void 0 ? void 0 : k.protocol) === "https:", this.version = "4.1.7", this.deviceId = R.deviceId || "webim", this.osType = 16, this.useOwnUploadFun = R.useOwnUploadFun || !1, this.compressType = [0], this.encryptType = [0], this.clientResource = "", this.expiresIn = 0, this.expirationTime = 0, this.logOut = !0, this.context = { jid: { appKey: "", clientResource: "", domain: "easemob.com", name: "" }, userId: "", appKey: "", status: 0, restTokenData: "", appName: "", orgName: "", root: {}, accessToken: "" }, this._msgHash = {}, this._msgPromiseHash = {}, this._queues = [], this._load_msg_cache = [], this.unMSyncSendMsgMap = /* @__PURE__ */ new Map(), this.mr_cache = {}, this.closeInfo = null, this.reconnecting = !1, typeof this.appKey != "string" || this.appKey.split("#").length !== 2)
              throw Error("Illegal appKey: ".concat(this.appKey));
            var U = this.appKey.split("#");
            this.orgName = U[0], this.appName = U[1], this.listen = ie.bind(this), this.mSync = this.usePlugin(z), this.eventHandler = this.usePlugin(re), Object.assign(b.prototype, pt), Object.assign(b.prototype, mt), Object.assign(b.prototype, yt), Object.assign(b.prototype, Ot), Object.assign(b.prototype, At), Object.assign(b.prototype, bt), Object.assign(b.prototype, Rt), this.dataReport = new lt({ appkey: this.appKey, org: this.orgName, sdkVersion: this.version, deviceId: this.deviceId, isReport: this.isReport });
            var Y = 0, Q = this;
            Object.defineProperty(s.P6, "ajaxUnconventionalErrorTimes", { set: function(L) {
              L !== 0 && (h.kg.debug("rest api request fail times: ".concat(L)), (Y = L) % 5 == 0 && this.isHttpDNS && (h.kg.debug("refresh dns config when rest request fail."), we.call(Q, "refresh", {}, {})));
            }, get: function() {
              return Y;
            } });
          }
          return b.prototype.usePlugin = function(R, k) {
            if (!k)
              return new R(this);
            this[k] = new R(this);
          }, b.prototype.listen = function(R) {
          }, b.prototype.addEventHandler = function(R, k) {
          }, b.prototype.removeEventHandler = function(R) {
          }, b.prototype.registerUser = function(R) {
            var k = this;
            return new Promise(function(U, Y) {
              var Q = k.dataReport.geOperateFun({ uid: R.username, operationName: x.fI.REGISTER });
              if (k.isHttpDNS) {
                k.dnsIndex = 0;
                var L = ht(ht({}, R), { user: R.username, pwd: R.password, promise: { resolve: U, reject: Y } });
                we.call(k, "signup", L, { rpt: Q });
              } else
                L = ht(ht({}, R), { promise: { resolve: U, reject: Y } }), Re.call(k, L, { rpt: Q });
            });
          }, b.prototype.open = function(R) {
            var k = this;
            return h.kg.debug("open"), new Promise(function(U, Y) {
              if (J.call(k, R)) {
                R.accessToken && (k.token = R.accessToken);
                var Q = ht(ht({}, R), { promise: { resolve: U, reject: Y } }), L = k.dataReport.geOperateFun({ uid: R.user, operationName: x.fI.LOGIN });
                k.isHttpDNS ? we.call(k, "login", Q, { rpt: L }) : V.call(k, Q, { rpt: L });
              }
            });
          }, b.prototype.isOpened = function() {
            return this.sock && this.sock.readyState === Et.OPEN || !1;
          }, b.prototype.close = function() {
            var R;
            this.logOut = !0, this.reconnecting = !1, this.context.status = o.E.STATUS_CLOSING, this.sock && this.sock.close(), (R = this.unMSyncSendMsgMap) === null || R === void 0 || R.clear(), this.stopHeartBeat(), this.rejectMessage(), this.rejectContactsOperate(), this.context.status = o.E.STATUS_CLOSED, this._load_msg_cache = [], this._queues = [], this._msgHash = {}, this.mr_cache = {}, this.token = "", this.context.accessToken = "";
          }, b.prototype.stopHeartBeat = function() {
            clearInterval(this.heartBeatID);
          }, b.prototype.clear = function() {
            this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.hostTotal = 0;
          }, b.prototype.heartBeat = function() {
          }, b.prototype.renewToken = function(R) {
            var k = this;
            return this.isOpened() ? this.getChatToken(R).then(function(U) {
              var Y = Date.now();
              return k.expirationTime = U.expire_timestamp, k.expiresIn = U.expire_timestamp - Y, k.token = U.access_token, k.context.accessToken = U.access_token, k.clearTokenTimeout(), k.tokenExpireTimeCountDown(k.expiresIn), { status: !0, token: U.access_token, expire: U.expire_timestamp };
            }) : Promise.reject({ status: !1 });
          }, b.prototype.clearTokenTimeout = function() {
            h.kg.debug("clearTokenTimeout"), this.tokenWillExpireTimer && clearTimeout(this.tokenWillExpireTimer), this.tokenExpiredTimer && clearTimeout(this.tokenExpiredTimer);
          }, b.prototype.tokenExpireTimeCountDown = function(R) {
            var k = this;
            R > Math.pow(2, 31) - 1 && (R = Math.pow(2, 31) - 1), this.tokenWillExpireTimer = setTimeout(function() {
              var U;
              k.onTokenWillExpire && k.onTokenWillExpire(), (U = k.eventHandler) === null || U === void 0 || U.dispatch("onTokenWillExpire"), h.kg.info("onTokenWillExpire", R);
            }, R / 2), this.tokenExpiredTimer = setTimeout(function() {
              var U;
              h.kg.info("onTokenExpired", R), k.onTokenExpired && k.onTokenExpired(), (U = k.eventHandler) === null || U === void 0 || U.dispatch("onTokenExpired"), k.close();
            }, R);
          }, b.prototype.compareTokenExpireTime = function(R, k) {
            var U, Y = Number(k) - Number(R);
            h.kg.debug("compareTokenExpireTime", Y), Y <= this.expiresIn / 2 && Y > 0 ? (this.onTokenWillExpire && this.onTokenWillExpire(), (U = this.eventHandler) === null || U === void 0 || U.dispatch("onTokenWillExpire"), h.kg.info("onTokenWillExpire", Y)) : Y <= 0 && (this.closeByTokenExpired(), h.kg.info("closeByTokenExpired", Y));
          }, b.prototype.closeByTokenExpired = function() {
            var R;
            h.kg.info("closed By TokenExpired"), this.onTokenExpired && this.onTokenExpired(), (R = this.eventHandler) === null || R === void 0 || R.dispatch("onTokenExpired"), this.close();
          }, b.prototype.rejectMessage = function() {
            var R = this, k = Object.keys(this._msgHash);
            if (k.length > 0) {
              var U = i.Z.create({ type: o.E.MESSAGE_WEBSOCKET_DISCONNECTED, message: "websocket disconnected" });
              k.forEach(function(Y) {
                var Q;
                !((Q = R.unMSyncSendMsgMap) === null || Q === void 0) && Q.has(Y) || (R._msgHash[Y].reject instanceof Function && R._msgHash[Y].reject(U), R._msgHash[Y].fail instanceof Function && R._msgHash[Y].fail(U), delete R._msgHash[Y]);
              });
            }
          }, b.prototype.rejectContactsOperate = function() {
            Array.from(A.Nl.values()).forEach(function(R) {
              R == null || R.reject();
            }), A.Nl.clear();
          }, b.prototype.resetConnState = function() {
            this.mSync.stopHeartBeat(), this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0;
          }, b.prototype.reconnect = function() {
            var R, k = this;
            this.sock.readyState !== Et.CONNECTING && this.sock.readyState !== Et.OPEN && (h.kg.info("reconnect: time", this.times), h.kg.info("reconnect sock.readyState: ", this.sock.readyState), this.reconnecting === !1 && (this.reconnecting = !0), (R = this.eventHandler) === null || R === void 0 || R.dispatch("onReconnecting"), this.rejectMessage(), this.rejectContactsOperate(), this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1), setTimeout(function() {
              k.sock.readyState !== Et.OPEN && (h.kg.info("login sock.readyState: ", k.sock.readyState), k.sock.close(), H.call(k, { access_token: k.context.accessToken }), k.times++);
            }, 500 * this.times), this.autoReconnectNumTotal++);
          }, b.prototype.send = function(R) {
            return Promise.resolve(null);
          }, b.max_cache_length = 100, b._getSock = function() {
          }, b;
        }();
        function Re(b, R) {
          var k = this, U = R.rpt, Y = R.isRetry, Q = b.promise, L = this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users", Ae = { requestName: x.c.RESISTER, requestUrl: L }, D = b.error || vt;
          if (!this.orgName && !this.appName) {
            var Le = i.Z.create({ type: o.E.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "signup error" });
            D(Le);
          }
          var De = { headers: { "Content-type": "application/json" }, url: L, dataType: "json", data: JSON.stringify({ username: b.username, password: b.password, nickname: b.nickname || "" }), success: function(Fe) {
            b.success && b.success(Fe);
            var Ge = ht(ht({}, Fe), { type: o.E.REQUEST_SUCCESS });
            Q.resolve && Q.resolve(Ge);
            var F = Fe.extraInfo, oe = F.httpCode, he = F.elapse;
            U({ isEndApi: !0, isRetry: Y, data: ht(ht({}, { requestElapse: he, isSuccess: 1, code: oe }), Ae) });
          }, error: function(Fe) {
            var Ge = Fe.extraInfo, F = Ge.elapse, oe = Ge.httpCode, he = Ge.errDesc;
            return U({ isRetry: Y, data: ht(ht({}, { requestElapse: F, isSuccess: 0, code: oe, codeDesc: he }), Ae) }), k.isHttpDNS && k.restIndex + 1 < k.restTotal ? (k.restIndex++, ae.call(k), Re.call(k, b, { rpt: U, isRetry: Y }), Promise.reject(Fe)) : (U({ data: { isLastApi: 1, isSuccess: 0 } }), k.clear(), Q.reject && Q.reject(Fe), D(Fe));
          } };
          return s.P6.ajax(De).catch(function(Fe) {
            Q.reject && Q.reject(Fe);
          });
        }
        function V(b, R) {
          var k = this;
          if (J.call(this, b) && !this.isOpened()) {
            var U = R.rpt, Y = R.isRetry;
            ne.call(this, b), this.user = b.user;
            var Q = b.promise, L = this.context.appName, Ae = this.context.orgName, D = this.apiUrl + "/" + Ae + "/" + L + "/token";
            if (b.agoraToken)
              this.grantType = "agoraToken", this.getChatToken(b.agoraToken).then(function(Ge) {
                h.kg.info("getChatToken result:", Ge), k.expirationTime = Ge.expire_timestamp, k.token = Ge.access_token, k.context.accessToken = Ge.access_token, k.context.restTokenData = Ge.access_token;
                var F = Ge.extraInfo, oe = F.httpCode, he = F.elapse;
                Q.resolve({ accessToken: Ge.access_token, expireTimestamp: Ge.expire_timestamp });
                var ge = { requestName: x.c.LOGIN_BY_AGORA_TOKEN, requestUrl: D, requestElapse: he, isSuccess: 1, code: oe };
                U({ data: ge }), H.call(k, ht(ht({}, b), { access_token: Ge.access_token }), U);
              }).catch(function(Ge) {
                var F, oe = i.Z.create({ type: o.E.WEBIM_CONNCTION_GETROSTER_ERROR, message: "get chat token fail", data: Ge });
                Q.reject(oe), k.onError && k.onError(oe), (F = k.eventHandler) === null || F === void 0 || F.dispatch("onError", oe);
                var he = Ge.extraInfo, ge = he.elapse, et = he.httpCode, je = he.errDesc, Ze = { requestName: x.c.LOGIN_BY_AGORA_TOKEN, requestUrl: D, requestElapse: ge, isSuccess: 0, code: et, codeDesc: je };
                U({ data: Ze }), U({ data: { isLastApi: 1, isSuccess: 0 } });
              });
            else if (b.accessToken)
              this.grantType = "accessToken", this.token = b.accessToken, this.context.accessToken = b.accessToken, this.context.restTokenData = b.accessToken, Q.resolve({ accessToken: b.accessToken }), H.call(this, b, U);
            else {
              this.grantType = "password";
              var Le = { grant_type: "password", username: b.user, password: b.pwd, timestamp: +/* @__PURE__ */ new Date() }, De = JSON.stringify(Le), Fe = { headers: { "Content-type": "application/json" }, url: D, dataType: "json", data: De, success: function(Ge) {
                typeof b.success == "function" && b.success(Ge), k.token = Ge.access_token, k.context.restTokenData = Ge.access_token, k.context.accessToken = Ge.access_token, k.expiresIn = Ge.expires_in, k.clearTokenTimeout(), k.tokenExpireTimeCountDown(1e3 * k.expiresIn), Q.resolve({ accessToken: Ge.access_token, duration: Ge.expires_in });
                var F = Ge.extraInfo, oe = F.httpCode, he = F.elapse, ge = { requestName: x.c.LOGIN_BY_PWD, requestElapse: he, requestUrl: D, isSuccess: 1, code: oe };
                U({ isRetry: Y, data: ge }), H.call(k, Ge, U);
              }, error: function(Ge) {
                var F, oe = Ge.extraInfo, he = oe.elapse, ge = oe.httpCode, et = oe.errDesc, je = { requestName: x.c.LOGIN_BY_PWD, requestElapse: he, requestUrl: D, isSuccess: 0, code: ge, codeDesc: et };
                if (U({ isRetry: Y, data: je }), k.isHttpDNS && k.restIndex + 1 < k.restTotal)
                  return k.restIndex++, ae.call(k), void V.call(k, b, { rpt: U, isRetry: !0 });
                U({ data: { isLastApi: 1, isSuccess: 0 } }), k.clear(), Ge.error && Ge.error_description ? (F = i.Z.create({ type: o.E.WEBIM_CONNCTION_OPEN_USERGRID_ERROR, message: Ge.error_description, data: Ge }), k.onError && k.onError(F)) : (F = i.Z.create({ type: o.E.WEBIM_CONNCTION_OPEN_ERROR, message: Ge.error_description, data: Ge }), k.onError && k.onError(F)), typeof b.error == "function" && b.error(F), Q.reject(F);
              }, version: "4.0.8" };
              s.P6.ajax(Fe).catch(function(Ge) {
                console.warn(Ge);
              });
            }
            s.P6.listenNetwork(Ce.bind(this), Te.bind(this));
          }
        }
        function Ce() {
          var b;
          h.kg.debug("online"), this.onOnline && this.onOnline(), (b = this.eventHandler) === null || b === void 0 || b.dispatch("onOnline"), this.sock && this.sock.readyState !== 1 && (h.kg.debug("sock.readyState:", this.sock.readyState), this.logOut || this.reconnecting || this.reconnect());
        }
        function Te() {
          var b;
          h.kg.debug("offline"), this.onOffline && this.onOffline(), (b = this.eventHandler) === null || b === void 0 || b.dispatch("onOffline");
        }
        function H(b, R) {
          var k = this, U = this._getSock();
          this.sock = U;
          var Y = function() {
            var Ae;
            h.kg.debug("websockt onOpen"), R && R({ data: { isLastApi: 1, isSuccess: 1, accessChannel: (Ae = k.socketHost[k.hostIndex]) === null || Ae === void 0 ? void 0 : Ae.channel } });
            var D = s.P6.flow([k.mSync.generateProvision, k.mSync.base64transform])();
            try {
              U.send(D);
            } catch (De) {
              var Le = i.Z.create({ type: o.E.SDK_RUNTIME_ERROR, message: "send message error", data: De });
              k.onError && k.onError(Le);
            }
          }, Q = function(Ae) {
            setTimeout(function() {
              var D, Le, De, Fe, Ge, F;
              h.kg.debug("websocket onClose"), It.platform !== "zfb" && It.platform !== "dd" || (k.sock.readyState = Et.CLOSED);
              var oe = (Ae == null ? void 0 : Ae.code) === 401 || ((D = k.closeInfo) === null || D === void 0 ? void 0 : D.code) === 401;
              if (k.logOut)
                k.clear(), k.resetConnState(), oe && (h.kg.debug("websocket provision error"), k.closeInfo = null), k.onClosed && k.onClosed(), (Le = k.eventHandler) === null || Le === void 0 || Le.dispatch("onDisconnected");
              else if (oe) {
                h.kg.debug("websocket provision error");
                var he = { type: o.E.WEBIM_CONNECTION_ERROR, message: "provision error", data: Ae };
                k.closeInfo = null, k.onError && k.onError(he), (De = k.eventHandler) === null || De === void 0 || De.dispatch("onError", he), k.onClosed && k.onClosed(), (Fe = k.eventHandler) === null || Fe === void 0 || Fe.dispatch("onDisconnected"), k.resetConnState();
              } else if (k.autoReconnectNumTotal < k.autoReconnectNumMax) {
                k.reconnect();
                var ge = { type: o.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                k.onError && k.onError(ge), k.autoReconnectNumTotal % k.refreshDNSIntervals == 0 && It.platform === "web" && k.isHttpDNS && (h.kg.debug("refresh dns config when websocket close"), we.call(k, "refresh", {}, {}));
              } else
                (Ge = k.unMSyncSendMsgMap) === null || Ge === void 0 || Ge.clear(), k.rejectMessage(), ge = { type: o.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }, k.onError && k.onError(ge), k.onClosed && k.onClosed(), (F = k.eventHandler) === null || F === void 0 || F.dispatch("onDisconnected"), k.resetConnState(), k.reconnecting = !1, h.kg.debug("reconnect fail");
            }, 0);
          }, L = function(Ae) {
            var D = k.mSync, Le = D.decodeMSync, De = D.distributeMSync;
            s.P6.flow([Le, De])(Ae);
          };
          It.platform === "web" ? (U.onopen = Y, U.onclose = Q, U.onmessage = L) : (U.onOpen(Y), U.onMessage(L), U.onClose(Q), typeof window < "u" && window.WebSocket || U.onError(function(Ae) {
            var D, Le, De;
            if (h.kg.debug("mini program sock on error", Ae), k.onError && k.onError({ type: o.E.WEBIM_CONNECTION_ERROR, message: "on socket error", data: Ae }), !k.logOut)
              if (k.autoReconnectNumTotal < k.autoReconnectNumMax)
                h.kg.debug("sock.onError reconnect", k.autoReconnectNumTotal, k.autoReconnectNumMax), k.reconnect(), k.autoReconnectNumTotal % k.refreshDNSIntervals == 0 && It.platform === "web" && k.isHttpDNS && (h.kg.debug("refresh dns config when websocket error"), we.call(k, "refresh", {}, {}));
              else {
                var Fe = { type: o.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                (D = k.unMSyncSendMsgMap) === null || D === void 0 || D.clear(), k.rejectMessage(), k.onError && k.onError(Fe), k.onClosed && k.onClosed(), (Le = k.eventHandler) === null || Le === void 0 || Le.dispatch("onDisconnected"), k.resetConnState(), k.reconnecting = !1, h.kg.debug("reconnect fail");
              }
            R && R({ data: { isLastApi: 1, isSuccess: 0, accessChannel: (De = k.socketHost[k.hostIndex]) === null || De === void 0 ? void 0 : De.channel } });
          }));
        }
        function J(b) {
          if (b.user === "") {
            var R = i.Z.create({ type: o.E.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR, message: "the user cannot be empty" });
            return h.kg.debug("open params error", R), this.onError && this.onError(R), !1;
          }
          var k = this.appKey.split("#");
          return !(k.length !== 2 || !k[0] || !k[1]) || (R = i.Z.create({ type: o.E.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "the appKey is illegal" }), h.kg.debug("open params error", R), this.onError && this.onError(R), !1);
        }
        function ne(b) {
          this.context.jid = { appKey: this.appKey, name: b.user, domain: this.domain, clientResource: this.clientResource };
          var R = this.appKey.split("#"), k = R[0], U = R[1];
          this.context.root = this.root, this.context.userId = b.user, this.context.appKey = this.appKey, this.context.appName = U, this.context.orgName = k;
        }
        function we(b, R, k) {
          var U = this, Y = k.rpt, Q = k.isRetry, L = this.dnsArr[this.dnsIndex] + "/easemob/server.json", Ae = { url: L, dataType: "json", type: "GET", data: { app_key: encodeURIComponent(this.appKey) }, success: function(D) {
            var Le = D.extraInfo, De = Le.elapse, Fe = Le.httpCode, Ge = { requestUrl: L, requestName: x.c.GET_DNS, requestElapse: De, isSuccess: 1, code: Fe };
            (D == null ? void 0 : D.enableDataReport) === "true" ? (U.dataReport.setIsCollectDt(!0), U.dataReport.setIsReportDt(!0)) : (U.dataReport.setIsReportDt(!1), U.dataReport.setIsCollectDt(!1)), Y && Y({ isRetry: Q, data: Ge });
            var F = D.rest.hosts, oe = U.https ? "https" : "http";
            if (h.kg.info("httpType: " + oe), !F)
              return Promise.reject(!1);
            for (var he = F.filter(function(be) {
              if (be.protocol === oe)
                return be;
            }), ge = 0; ge < he.length; ge++)
              if (he[ge].protocol === oe) {
                var et = he[ge];
                he.splice(ge, 1), he.unshift(et);
              }
            U.restHosts = he, U.restTotal = he.length;
            var je = D["msync-ws"].hosts;
            if (!je)
              return Promise.reject(!1);
            var Ze = je.filter(function(be) {
              return be.protocol === oe && be;
            });
            U.socketHost = Ze, U.hostTotal = Ze.length, ae.call(U), b !== "refresh" && (b === "login" ? V.call(U, R, { rpt: Y }) : Re.call(U, R, { rpt: Y }));
          }, error: function(D) {
            var Le = D.extraInfo, De = Le.elapse, Fe = Le.httpCode, Ge = Le.errDesc, F = { requestUrl: L, requestName: x.c.GET_DNS, isSuccess: 0, code: Fe, codeDesc: Ge, requestElapse: De };
            Y && Y({ isRetry: Q, data: F }), h.kg.debug("getHttpDNS fail: " + U.dnsIndex), U.dnsIndex++, U.dnsIndex < U.dnsTotal && we.call(U, b, R, { rpt: Y, isRetry: !0 });
          } };
          return s.P6.ajax(Ae).catch(function(D) {
            console.warn(D);
          });
        }
        function ae() {
          var b, R;
          if (this.restIndex > this.restTotal)
            return h.kg.debug("restIndex > restTotal"), "";
          var k = "", U = this.restHosts[this.restIndex], Y = U.domain, Q = U.ip, L = U.port, Ae = this.https ? "https:" : "http:";
          return Q && typeof window < "u" && ((b = window == null ? void 0 : window.location) === null || b === void 0 ? void 0 : b.protocol) === "http:" ? k = Ae + "//" + Q + ":" + L : (k = Ae + "//" + Y, L && L !== "80" && L !== "443" && (k += ":".concat(L)), typeof window > "u" || window.location || (k = "https://" + Y), typeof window < "u" && window.location && ((R = window.location) === null || R === void 0 ? void 0 : R.protocol) === "file:" && (k = "https://" + Y)), typeof window > "u" && (k = Ae + "//" + Y), this.apiUrl = k, k;
        }
        var Je = __webpack_require__(4799);
        r().util.Long = a(), r().configure();
        var st = r().Root.fromJSON({ nested: { easemob: { nested: { pb: { nested: { MessageBody: { fields: { type: { type: "Type", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, contents: { rule: "repeated", type: "Content", id: 4 }, ext: { rule: "repeated", type: "KeyValue", id: 5 }, ackMessageId: { type: "uint64", id: 6 }, msgConfig: { type: "MessageConfig", id: 7 }, ackContent: { type: "string", id: 8 }, meta: { type: "string", id: 9 } }, nested: { Content: { fields: { type: { type: "Type", id: 1 }, text: { type: "string", id: 2 }, latitude: { type: "double", id: 3 }, longitude: { type: "double", id: 4 }, address: { type: "string", id: 5 }, displayName: { type: "string", id: 6 }, remotePath: { type: "string", id: 7 }, secretKey: { type: "string", id: 8 }, fileLength: { type: "int32", id: 9 }, action: { type: "string", id: 10 }, params: { rule: "repeated", type: "KeyValue", id: 11 }, duration: { type: "int32", id: 12 }, size: { type: "Size", id: 13 }, thumbnailRemotePath: { type: "string", id: 14 }, thumbnailSecretKey: { type: "string", id: 15 }, thumbnailDisplayName: { type: "string", id: 16 }, thumbnailFileLength: { type: "int32", id: 17 }, thumbnailSize: { type: "Size", id: 18 }, customEvent: { type: "string", id: 19 }, customExts: { rule: "repeated", type: "KeyValue", id: 20 }, buildingName: { type: "string", id: 21 } }, nested: { Type: { values: { TEXT: 0, IMAGE: 1, VIDEO: 2, LOCATION: 3, VOICE: 4, FILE: 5, COMMAND: 6, CUSTOM: 7 } }, Size: { fields: { width: { type: "double", id: 1 }, height: { type: "double", id: 2 } } } } }, Type: { values: { NORMAL: 0, CHAT: 1, GROUPCHAT: 2, CHATROOM: 3, READ_ACK: 4, DELIVER_ACK: 5, RECALL: 6, CHANNEL_ACK: 7 } }, MessageConfig: { fields: { allowGroupAck: { type: "bool", id: 1 } } } } }, KeyValue: { oneofs: { value: { oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"] } }, fields: { key: { type: "string", id: 1 }, type: { type: "ValueType", id: 2 }, varintValue: { type: "int64", id: 3 }, floatValue: { type: "float", id: 4 }, doubleValue: { type: "double", id: 5 }, stringValue: { type: "string", id: 6 } }, nested: { ValueType: { values: { BOOL: 1, INT: 2, UINT: 3, LLINT: 4, FLOAT: 5, DOUBLE: 6, STRING: 7, JSON_STRING: 8 } } } }, JID: { fields: { appKey: { type: "string", id: 1 }, name: { type: "string", id: 2 }, domain: { type: "string", id: 3 }, clientResource: { type: "string", id: 4 } } }, ConferenceBody: { fields: { sessionId: { type: "string", id: 1 }, operation: { type: "Operation", id: 2 }, conferenceId: { type: "string", id: 3 }, type: { type: "Type", id: 4 }, content: { type: "string", id: 5 }, network: { type: "string", id: 6 }, version: { type: "string", id: 7 }, identity: { type: "Identity", id: 8 }, duration: { type: "string", id: 9 }, peerName: { type: "string", id: 10 }, endReason: { type: "EndReason", id: 11 }, status: { type: "Status", id: 12 }, isDirect: { type: "bool", id: 13 }, controlType: { type: "StreamControlType", id: 14 }, routeFlag: { type: "int32", id: 15 }, routeKey: { type: "string", id: 16 } }, nested: { Status: { fields: { errorCode: { type: "int32", id: 1 } } }, Operation: { values: { JOIN: 0, INITIATE: 1, ACCEPT_INITIATE: 2, ANSWER: 3, TERMINATE: 4, REMOVE: 5, STREAM_CONTROL: 6, MEDIA_REQUEST: 7 } }, Type: { values: { VOICE: 0, VIDEO: 1 } }, Identity: { values: { CALLER: 0, CALLEE: 1 } }, EndReason: { values: { HANGUP: 0, NORESPONSE: 1, REJECT: 2, BUSY: 3, FAIL: 4, UNSUPPORTED: 5, OFFLINE: 6 } }, StreamControlType: { values: { PAUSE_VOICE: 0, RESUME_VOICE: 1, PAUSE_VIDEO: 2, RESUME_VIDEO: 3 } } } }, MSync: { fields: { version: { type: "Version", id: 1, options: { default: "MSYNC_V1" } }, guid: { type: "JID", id: 2 }, auth: { type: "string", id: 3 }, compressAlgorimth: { type: "uint32", id: 4 }, crypto: { type: "uint32", id: 5 }, userAgent: { type: "string", id: 6 }, pov: { type: "uint64", id: 7 }, command: { type: "Command", id: 8 }, deviceId: { type: "uint32", id: 10 }, encryptType: { rule: "repeated", type: "EncryptType", id: 11, options: { packed: !1 } }, encryptKey: { type: "string", id: 12 }, payload: { type: "bytes", id: 9 } }, nested: { Version: { values: { MSYNC_V1: 0, MSYNC_V2: 1 } }, Command: { values: { SYNC: 0, UNREAD: 1, NOTICE: 2, PROVISION: 3 } } } }, EncryptType: { values: { ENCRYPT_NONE: 0, ENCRYPT_AES_128_CBC: 1, ENCRYPT_AES_256_CBC: 2 } }, CommSyncUL: { fields: { meta: { type: "Meta", id: 1 }, key: { type: "uint64", id: 2 }, queue: { type: "JID", id: 3 }, isRoam: { type: "bool", id: 4 }, lastFullRoamKey: { type: "uint64", id: 5 } } }, CommSyncDL: { fields: { status: { type: "Status", id: 1 }, metaId: { type: "uint64", id: 2 }, serverId: { type: "uint64", id: 3 }, metas: { rule: "repeated", type: "Meta", id: 4 }, nextKey: { type: "uint64", id: 5 }, queue: { type: "JID", id: 6 }, isLast: { type: "bool", id: 7 }, timestamp: { type: "uint64", id: 8 }, isRoam: { type: "bool", id: 9 } } }, CommNotice: { fields: { queue: { type: "JID", id: 1 } } }, CommUnreadUL: { fields: {} }, CommUnreadDL: { fields: { status: { type: "Status", id: 1 }, unread: { rule: "repeated", type: "MetaQueue", id: 2 }, timestamp: { type: "uint64", id: 3 } } }, MetaQueue: { fields: { queue: { type: "JID", id: 1 }, n: { type: "uint32", id: 2 } } }, Meta: { fields: { id: { type: "uint64", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, timestamp: { type: "uint64", id: 4 }, ns: { type: "NameSpace", id: 5 }, payload: { type: "bytes", id: 6 }, routetype: { type: "RouteType", id: 7 }, ext: { type: "KeyValue", id: 8 }, meta: { type: "bytes", id: 9 }, directedUsers: { rule: "repeated", type: "string", id: 10 } }, nested: { NameSpace: { values: { STATISTIC: 0, CHAT: 1, MUC: 2, ROSTER: 3, CONFERENCE: 4, NOTIFY: 5, QUERY: 6 } }, RouteType: { values: { ROUTE_ALL: 0, ROUTE_ONLINE: 1, ROUTE_DIRECT: 2 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, reason: { type: "string", id: 2 }, redirectInfo: { rule: "repeated", type: "RedirectInfo", id: 3 } }, nested: { ErrorCode: { values: { OK: 0, FAIL: 1, UNAUTHORIZED: 2, MISSING_PARAMETER: 3, WRONG_PARAMETER: 4, REDIRECT: 5, TOKEN_EXPIRED: 6, PERMISSION_DENIED: 7, NO_ROUTE: 8, UNKNOWN_COMMAND: 9, PB_PARSER_ERROR: 10, BIND_ANOTHER_DEVICE: 11, IM_FORBIDDEN: 12, TOO_MANY_DEVICES: 13, PLATFORM_LIMIT: 14, USER_MUTED: 15, ENCRYPT_DISABLE: 16, ENCRYPT_ENABLE: 17, DECRYPT_FAILURE: 18, PERMISSION_DENIED_EXTERNAL: 19 } } } }, RedirectInfo: { fields: { host: { type: "string", id: 1 }, port: { type: "uint32", id: 2 } } }, Provision: { fields: { osType: { type: "OsType", id: 1 }, version: { type: "string", id: 2 }, networkType: { type: "NetworkType", id: 3 }, appSign: { type: "string", id: 4 }, compressType: { rule: "repeated", type: "CompressType", id: 5, options: { packed: !1 } }, encryptType: { rule: "repeated", type: "EncryptType", id: 6, options: { packed: !1 } }, encryptKey: { type: "string", id: 7 }, status: { type: "Status", id: 8 }, deviceUuid: { type: "string", id: 9 }, isManualLogin: { type: "bool", id: 10 }, password: { type: "string", id: 11 }, deviceName: { type: "string", id: 12 }, resource: { type: "string", id: 13 }, auth: { type: "string", id: 14 }, serviceId: { type: "string", id: 16 }, actionVersion: { type: "string", id: 17 } }, nested: { OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } }, CompressType: { values: { COMPRESS_NONE: 0, COMPRESS_ZLIB: 1 } } } }, MUCBody: { fields: { mucId: { type: "JID", id: 1 }, operation: { type: "Operation", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, setting: { type: "Setting", id: 5 }, reason: { type: "string", id: 6 }, isChatroom: { type: "bool", id: 7 }, status: { type: "Status", id: 8 }, isThread: { type: "bool", id: 9 }, mucParentId: { type: "JID", id: 10 }, mucName: { type: "string", id: 11 }, eventInfo: { type: "EventInfo", id: 12 } }, nested: { Operation: { values: { CREATE: 0, DESTROY: 1, JOIN: 2, LEAVE: 3, APPLY: 4, APPLY_ACCEPT: 5, APPLY_DECLINE: 6, INVITE: 7, INVITE_ACCEPT: 8, INVITE_DECLINE: 9, KICK: 10, GET_BLACKLIST: 11, BAN: 12, ALLOW: 13, UPDATE: 14, BLOCK: 15, UNBLOCK: 16, PRESENCE: 17, ABSENCE: 18, DIRECT_JOINED: 19, ASSIGN_OWNER: 20, ADD_ADMIN: 21, REMOVE_ADMIN: 22, ADD_MUTE: 23, REMOVE_MUTE: 24, UPDATE_ANNOUNCEMENT: 25, DELETE_ANNOUNCEMENT: 26, UPLOAD_FILE: 27, DELETE_FILE: 28, ADD_USER_WHITE_LIST: 29, REMOVE_USER_WHITE_LIST: 30, BAN_GROUP: 31, REMOVE_BAN_GROUP: 32, THREAD_CREATE: 33, THREAD_DESTROY: 34, THREAD_JOIN: 35, THREAD_LEAVE: 36, THREAD_KICK: 37, THREAD_UPDATE: 38, THREAD_PRESENCE: 39, THREAD_ABSENCE: 40, DISABLE_GROUP: 41, ABLE_GROUP: 42, SET_METADATA: 43, DELETE_METADATA: 44, GROUP_MEMBER_METADATA_UPDATE: 45 } }, Setting: { fields: { name: { type: "string", id: 1 }, desc: { type: "string", id: 2 }, type: { type: "Type", id: 3 }, maxUsers: { type: "int32", id: 4 }, owner: { type: "string", id: 5 } }, nested: { Type: { values: { PRIVATE_OWNER_INVITE: 0, PRIVATE_MEMBER_INVITE: 1, PUBLIC_JOIN_APPROVAL: 2, PUBLIC_JOIN_OPEN: 3, PUBLIC_ANONYMOUS: 4 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, PERMISSION_DENIED: 1, WRONG_PARAMETER: 2, MUC_NOT_EXIST: 3, USER_NOT_EXIST: 4, UNKNOWN: 5 } } } }, EventInfo: { fields: { eventType: { type: "EventType", id: 1, options: { default: "EVENT_NONE" } }, ext: { type: "string", id: 2 } }, nested: { EventType: { values: { EVENT_NONE: 0, CIRCLE_CHANNEL: 1 } } } } } }, RosterBody: { fields: { operation: { type: "Operation", id: 1 }, status: { type: "Status", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, reason: { type: "string", id: 5 }, rosterVer: { type: "string", id: 6 }, biDirection: { type: "bool", id: 7 } }, nested: { Operation: { values: { GET_ROSTER: 0, GET_BLACKLIST: 1, ADD: 2, REMOVE: 3, ACCEPT: 4, DECLINE: 5, BAN: 6, ALLOW: 7, REMOTE_ACCEPT: 8, REMOTE_DECLINE: 9 } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, USER_NOT_EXIST: 1, USER_ALREADY_FRIEND: 2, USER_ALREADY_BLACKLIST: 3 } } } } } }, StatisticsBody: { fields: { operation: { type: "Operation", id: 1 }, os: { type: "OsType", id: 2 }, version: { type: "string", id: 3 }, network: { type: "NetworkType", id: 4 }, imTime: { type: "uint32", id: 5 }, chatTime: { type: "uint32", id: 6 }, location: { type: "string", id: 7 } }, nested: { Operation: { values: { INFORMATION: 0, USER_REMOVED: 1, USER_LOGIN_ANOTHER_DEVICE: 2, USER_KICKED_BY_CHANGE_PASSWORD: 3, USER_KICKED_BY_OTHER_DEVICE: 4 } }, OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } } } } } } } } } });
        M.prototype.root = st;
        var Qe = h.kg.getLogger("defaultLogger");
        Qe.setConfig({ useCache: !1, maxCache: 3145728, color: "", background: "" }), Qe.enableAll(), M.prototype._getSock = function() {
          if (this.isHttpDNS) {
            var b = this.socketHost[this.hostIndex];
            if (!b)
              throw this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0, this.onClosed && this.onClosed(), new Error("No connected domain name when get websocket.");
            var R = b.domain, k = b.ip, U = "", Y = b.port;
            U = R || k, Y && Y !== "80" && Y !== "443" && (U += ":" + Y), U && (this.url = "//" + U + "/ws");
            var Q = this.https ? "https:" : "http:";
            this.url = Q + this.url;
          }
          return new (_())(this.url);
        }, M.prototype.getUniqueId = s.P6.getUniqueId;
        var me = { connection: M, message: Je.Message, utils: s.P6, logger: Qe, statusCode: o.E };
        typeof window < "u" && (window.WebIM = me);
        var Ke = me;
      }(), __webpack_exports__;
    }();
  });
})(EasemobChat);
var EasemobChatExports = EasemobChat.exports;
const EaseSDK = /* @__PURE__ */ getDefaultExportFromCjs(EasemobChatExports), manageEasemobApis = () => {
  const { currentChatroomId: p } = useManageChatroom();
  return {
    loginIMWithPassword: (s, o) => new Promise((n, u) => {
      EMClient.open({
        user: s,
        pwd: o
      }).then((c) => {
        n(c);
      }).catch((c) => {
        u(c);
      });
    }),
    loginIMWithAccessToken: (s, o) => new Promise((n, u) => {
      EMClient.open({
        user: s,
        accessToken: o
      }).then((c) => {
        n(c);
      }).catch((c) => {
        u(c);
      });
    }),
    joinChatroom: () => {
      if (!p.value)
        throw "please pass roomId!";
      return new Promise((s, o) => {
        EMClient.joinChatRoom({
          roomId: p.value
        }).then((n) => {
          console.log(">>>>>joinChatroom success", n), s(n);
        }).catch((n) => {
          o(n);
        });
      });
    },
    sendTextMessage: (s) => new Promise((o, n) => {
      const u = EMCreateMessage(s);
      EMClient.send(u).then((c) => {
        u.id = c.serverMsgId, Object.assign(c, u), o(c);
      }).catch((c) => {
        n(c);
      });
    }),
    sendImageMessage: (s) => new Promise((o, n) => {
      const u = EMCreateMessage(s);
      EMClient.send(u).then((c) => {
        u.id = c.serverMsgId, Object.assign(c, u), o(c);
      }).catch((c) => {
        n(c);
      });
    }),
    fetchLoginUserNickname: (s) => new Promise((o, n) => {
      EMClient.fetchUserInfoById(s, "nickname").then((u) => {
        console.log(">>>>消息测试", u.data), u.data && o(u.data);
      }).catch((u) => {
        n(u);
      });
    })
  };
}, messageCollect$1 = reactive([]), loginUserInfo = {
  loginUserId: "",
  nickname: ""
}, currentChatroomId = ref(""), useManageChatroom = () => ({
  messageCollect: messageCollect$1,
  currentChatroomId,
  loginUserInfo,
  setCurrentChatroomId: (t) => {
    currentChatroomId.value = t;
  },
  sendDisplayMessage: async (t) => {
    const { sendTextMessage: a, sendImageMessage: i } = manageEasemobApis();
    return new Promise((s, o) => {
      t.type === "txt" && a(t).then((n) => {
        messageCollect$1.push(n), s(n);
      }).catch((n) => {
        o(n);
      }), t.type === "img" && i(t).then((n) => {
        messageCollect$1.push(n), s(n);
      }).catch((n) => {
        o(n);
      });
    });
  },
  pushMessageToList: (t) => {
    messageCollect$1.push(t);
  },
  setLoginUserInfo: async (t) => {
    const { fetchLoginUserNickname: a } = manageEasemobApis();
    loginUserInfo.loginUserId = t;
    try {
      const i = await a(t);
      loginUserInfo.nickname = i[t].nickname, console.log(">>>>>>获取到用户属性", loginUserInfo.nickname);
    } catch {
      console.log(">>>>>>获取失败");
    }
  }
}), mountEaseIMListener = (p) => {
  const { pushMessageToList: _, setLoginUserInfo: e, currentChatroomId: r } = useManageChatroom(), { joinChatroom: t } = manageEasemobApis();
  console.log(">>>mountEaseIMListener"), p.addEventHandler("connection", {
    onConnected: () => {
      console.log(">>>>>onConnected"), t(), e(p.user);
    },
    onDisconnected: () => {
      console.log(">>>>>Disconnected");
    },
    onError: (a) => {
      console.log(">>>>>>Error", a);
    }
  }), p.addEventHandler("message", {
    onTextMessage(a) {
      a.chatType === "chatRoom" && a.to === r.value && _(a);
    },
    onImageMessage(a) {
      a.chatType === "chatRoom" && a.to === r.value && _(a);
    }
  }), p.addEventHandler("chatroomEvent", {
    onChatroomEvent(a) {
      console.log(">>>>chatroomEvent", a);
    }
  });
};
let EMClient = {};
const EMCreateMessage = EaseSDK.message.create, initEMClient = (p) => (EMClient = new EaseSDK.connection({
  appKey: p
}), mountEaseIMListener(EMClient), EMClient), index$1 = "", scrollBottom = (p) => {
  p == null || p.scrollTo({
    top: p == null ? void 0 : p.scrollHeight
  });
}, message = "", {
  messageCollect
} = useManageChatroom(), MessageList = () => {
  const p = (_) => {
    _.type === "img" && window.open(_.url);
  };
  return createVNode(Fragment, null, [messageCollect.length > 0 && messageCollect.map((_) => {
    var e;
    return createVNode("div", {
      class: "message_item_box",
      key: _.id
    }, [createVNode("div", {
      class: "message_item_nickname"
    }, [((e = _ == null ? void 0 : _.ext) == null ? void 0 : e.nickname) || _.from]), _.type === "txt" && createVNode("p", {
      class: "message_item_textmsg"
    }, [_.msg]), _.type === "img" && createVNode("img", {
      style: "cursor: pointer;",
      onClick: () => {
        p(_);
      },
      src: _.thumb
    }, null)]);
  })]);
}, MessageContainer = /* @__PURE__ */ defineComponent({
  name: "MessageContainer",
  setup() {
    return watch(messageCollect, () => {
      console.log(">>>>>>监听到消息列表改变"), nextTick(() => {
        const p = document.querySelector(".message_container");
        setTimeout(() => {
          p && scrollBottom(p);
        }, 300);
      });
    }), () => createVNode(Fragment, null, [createVNode("div", {
      class: "message_container"
    }, [createVNode(MessageList, null, null)])]);
  }
}), emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "😍", "🤩", "😘", "😗", "😚", "😙", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😵", "🤯", "🤠", "😎", "🤓", "🧐", "😕", "😟", "🙁", "😮", "😯", "😲", "😳", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "💋", "👋", "🤚", "🖐", "✋", "🖖", "👌", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "💅", "🤳", "💪", "👂", "👃", "🧠", "👀", "👁", "👅", "👄", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👱‍", "👨‍", "👨‍", "👩", "👱‍", "👩‍", "👩‍", "👩‍", "👩‍", "🧓", "👴", "👵", "🙍", "🙅", "🙆", "💁", "🙋", "🙇", "🙇‍", "🙇‍", "🤦", "🤷", "🤷‍", "🤷‍", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍🏫", "👩‍🏫", "👨‍⚖️", "👩‍⚖️", "👨‍🌾", "👩‍🌾", "👨‍🍳", "👩‍🍳", "👨‍🔧", "👩‍🔧", "👨‍🏭", "👩‍🏭", "👨‍💼", "👩‍💼", "👨‍🔬", "👩‍🔬", "👨‍💻", "👩‍💻", "👨‍🎤", "👩‍🎤", "👨‍🎨", "👩‍🎨", "👨‍✈️", "👩‍✈️", "👨‍🚀", "👩‍🚀", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍", "💂‍", "👷", "👷‍", "👷‍", "🤴", "👸", "👳", "👳‍", "👳‍", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "👼", "🎅", "🤶", "🧙", "🧚", "🧛", "🧜", "🧝", "🧞", "🧟", "💆", "💇", "🚶", "🏃", "💃", "🕺", "🕴", "👯", "🧖", "🧖‍", "🧖‍", "🧘", "👭", "👫", "👬", "💏", "👨‍", "👩‍", "💑", "👨‍", "👩‍", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧", "🗣", "👤", "👥", "👣", "🌂", "☂", "👓", "🕶", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "🎒", "👞", "👟", "👠", "👡", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑", "💄", "💍", "💼"], index = "", InputEmojiComponent = /* @__PURE__ */ defineComponent({
  name: "InputEmojiCompoent",
  emits: ["appendEmojitoInput"],
  setup(p, {
    expose: _,
    emit: e
  }) {
    const r = ref(!1), t = ref(), a = (s) => {
      const o = t.value;
      o && (o.contains(s.target) || (r.value = !1));
    }, i = (s) => {
      e("appendEmojitoInput", s);
    };
    return onMounted(() => {
      document.addEventListener("click", a);
    }), onBeforeUnmount(() => {
      document.removeEventListener("click", a);
    }), _({
      isShowEmojiBox: r
    }), () => createVNode(Fragment, null, [createVNode("div", {
      ref: t,
      class: "emoji_container"
    }, [createVNode("div", {
      class: "control_strip_func_emoji",
      onClick: () => {
        r.value = !r.value;
      }
    }, [createVNode("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "6997"
    }, [createVNode("path", {
      d: "M510.944 960c-247.04 0-448-200.96-448-448s200.992-448 448-448c247.008 0 448 200.96 448 448S757.984 960 510.944 960zM510.944 128c-211.744 0-384 172.256-384 384 0 211.744 172.256 384 384 384 211.744 0 384-172.256 384-384C894.944 300.256 722.688 128 510.944 128zM512 773.344c-89.184 0-171.904-40.32-226.912-110.624-10.88-13.92-8.448-34.016 5.472-44.896 13.888-10.912 34.016-8.48 44.928 5.472 42.784 54.688 107.136 86.048 176.512 86.048 70.112 0 134.88-31.904 177.664-87.552 10.784-14.016 30.848-16.672 44.864-5.888 14.016 10.784 16.672 30.88 5.888 44.864C685.408 732.32 602.144 773.344 512 773.344zM368 515.2c-26.528 0-48-21.472-48-48l0-64c0-26.528 21.472-48 48-48s48 21.472 48 48l0 64C416 493.696 394.496 515.2 368 515.2zM656 515.2c-26.496 0-48-21.472-48-48l0-64c0-26.528 21.504-48 48-48s48 21.472 48 48l0 64C704 493.696 682.496 515.2 656 515.2z",
      fill: "#272636",
      "p-id": "6998"
    }, null)])]), r.value ? createVNode("div", {
      class: "emoji_box"
    }, [emojis.map((s, o) => createVNode("div", {
      class: "emoji_item",
      key: o + s,
      onClick: () => {
        i(s), r.value = !1;
      }
    }, [s]))]) : null])]);
  }
}), UploadImageComponent = /* @__PURE__ */ defineComponent({
  name: "UploadImageMsgComponent",
  setup() {
    const p = ref(), _ = (r) => {
      var t;
      console.log("Event", r), (t = p.value) == null || t.click();
    }, e = async (r) => {
      const {
        sendDisplayMessage: t,
        currentChatroomId: a,
        loginUserInfo: i
      } = useManageChatroom();
      if (console.log("Event", r), p.value && p.value.files) {
        const s = p.value.files[0], o = {
          data: s,
          // file 对象。
          filename: s.name,
          //文件名称。
          filetype: s.type,
          //文件类型。
          url: window.URL.createObjectURL(s)
          //文件地址。
        }, n = {
          type: "img",
          chatType: "chatRoom",
          to: a.value,
          file: o,
          ext: {
            // 图片文件长度，单位为字节。
            file_length: s.size,
            nickname: i.nickname
          }
        };
        try {
          await t(n), console.log(">>>>>>>图片发送成功");
        } catch (u) {
          console.log(">>>>>>发送失败", u);
        }
      }
    };
    return () => createVNode(Fragment, null, [createVNode("div", {
      class: "control_strip_func_image",
      onClick: _
    }, [createVNode("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4166"
    }, [createVNode("path", {
      d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",
      "p-id": "4167"
    }, null), createVNode("path", {
      d: "M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",
      "p-id": "4168"
    }, null)]), createVNode("input", {
      ref: p,
      style: "display: none;",
      type: "file",
      onChange: e,
      accept: "image/*"
    }, null)])]);
  }
}), inputbar = "";
let PLACE_HOLDER_TEXT = /* @__PURE__ */ function(p) {
  return p.TEXT = "Enter 发送输入的内容...", p;
}({});
const InputBarContainer = /* @__PURE__ */ defineComponent({
  name: "InputBarContainer",
  setup() {
    const p = ref(""), _ = (s) => {
      p.value = s.target.value;
    }, {
      currentChatroomId: e,
      loginUserInfo: r,
      sendDisplayMessage: t
    } = useManageChatroom(), a = async (s) => {
      if (!p.value.match(/^\s*$/) && s.code === "Enter" && !s.shiftKey) {
        s.preventDefault(), console.log(">>>>>>调用发送方法");
        const o = {
          chatType: "chatRoom",
          type: "txt",
          to: e.value,
          msg: p.value,
          from: EMClient.user,
          ext: {
            nickname: r.nickname
          }
        };
        try {
          await t(o), p.value = "";
        } catch (n) {
          console.log(">>>>>消息发送失败", n);
        }
      }
    }, i = (s) => {
      p.value = p.value + s;
    };
    return () => createVNode(Fragment, null, [createVNode("div", {
      class: "input_bar_container"
    }, [createVNode("div", {
      class: "control_strip_container"
    }, [createVNode(InputEmojiComponent, {
      onAppendEmojitoInput: i
    }, null), createVNode(UploadImageComponent, null, null)]), createVNode("div", {
      class: "message_content_input_box"
    }, [createVNode("input", {
      class: "message_content_input",
      type: "text",
      value: p.value,
      onInput: _,
      placeholder: PLACE_HOLDER_TEXT.TEXT,
      onKeyup: a
    }, null)])])]);
  }
});
console.log("EMClient", EMClient);
const EasemobChatroom = /* @__PURE__ */ defineComponent({
  name: "EasemobChatroom",
  props: {
    username: {
      type: String,
      default: "",
      required: !0
    },
    password: {
      type: String,
      default: ""
    },
    accessToken: {
      type: String,
      default: ""
    },
    chatroomId: {
      type: String,
      default: "",
      required: !0
    }
  },
  setup(p) {
    const {
      setCurrentChatroomId: _
    } = useManageChatroom(), {
      loginIMWithPassword: e,
      loginIMWithAccessToken: r
    } = manageEasemobApis(), t = async () => {
      if (EMClient)
        try {
          p.accessToken ? await r(p.username, p.accessToken) : await e(p.username, p.password);
        } catch (i) {
          throw `${i.data.message}`;
        }
    }, a = async () => {
      console.log(">>>>>断开连接");
    };
    return onMounted(() => {
      t(), p.chatroomId && _(p.chatroomId);
    }), {
      loginIM: t,
      closeIM: a
    };
  },
  render() {
    return createVNode(Fragment, null, [createVNode("div", {
      class: "easemob_chatroom_container"
    }, [createVNode(MessageContainer, null, null), createVNode(InputBarContainer, null, null)])]);
  }
}), install = {
  install: (p, _) => {
    if (console.log(p), console.log("options", _), _ && (_ != null && _.appKey))
      initEMClient(_.appKey);
    else
      throw console.error("appKey不能为空");
    p.component(EasemobChatroom.name, EasemobChatroom);
  }
};
export {
  install as default
};
